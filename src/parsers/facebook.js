const puppeteer = require("puppeteer");
const logger = require("../logger");
const messages = require("../messages");

const {
  isEventFree
} = require("../utils/analyze");

const {
  saveEvent
} = require("../utils/mongoose");

const {
  extractMultipleLinks,
  extractSingleText,
  extractSingleContent,
  extractSingleImage
} = require("../utils/puppeteer");

const {
  browserOptions,
  facebook: { selectors, eventUrl }
} = require("./../constants");

const autoScrollToBottom = async page => {
  await page.evaluate(async selector => {
    await new Promise(resolve => {
        let totalHeight = 0;
        const distance = 100;
        const interval = 400;
        const timer = setInterval(async () => {
            const scrollHeight = document.body.scrollHeight;

            window.scrollBy(0, distance);
            totalHeight += distance;

            if (totalHeight >= scrollHeight) {
              if (document.querySelector(selector)) {
                const currentHeight = document.body.scrollHeight;
                await page.waitForFunction(selector => !document.querySelector(selector), { polling: "mutation" }, selector);
                await page.waitForFunction(currentHeight => document.body.scrollHeight > currentHeight + distance * 2, currentHeight);
              } else {
                clearInterval(timer);
                resolve();
              }
            }
        }, interval);
    });
  }, selectors.progressBar);
};

const parseEventsLinks = async (browser) => {
  const page = await browser.newPage();

  await page.goto(eventsUrl);
  await page.setViewport({
    width: 1200,
    height: 500
  });
  await page.waitForSelector(selectors.eventLink);
  logger.info(messages.facebook.start);
  await autoScrollToBottom(page);

  const links = await extractMultipleLinks(page, selectors.eventLink);
  logger.info(messages.facebook.links(links.length));

  page.close();

  return links;
};

const extractLocation = async page => {
  return await page.evaluate(() => {
    let place;
    let link;
    let address;

    const timeContainer = document.querySelector("#event_time_info");
    const locationContainer = timeContainer.nextSibling;
    const addressElement = locationContainer.querySelector("div > div > div > div > div > div");

    if (addressElement && addressElement.innerText) {
      const linkElement = locationContainer.querySelector("a");

      place = linkElement.innerText;
      link = linkElement.href;
      address = addressElement.innerText;
    } else {
      place = "";
      link = "";
      address = locationContainer.querySelector("div > div > div > div > div").innerText;
    }

    return {
      place,
      link,
      address
    };
  });
};

const hasTickets = async (page, selector) => {
  return await page.evaluate(selector => {
    const element = document.querySelector(selector);

    return !!element;
  }, selector);
};

const parseEventPage = async (browser, link) => {
  const page = await browser.newPage()
  
  await page.goto(link);
  await page.waitForSelector(selectors.time);

  if (await hasTickets(page, selectors.tickets)) {
    return null;
  }

  const title = await extractSingleText(page, selectors.title);
  const description = await extractSingleText(page, selectors.description);
  const time = await extractSingleContent(page, selectors.time);
  const start = new Date(time.substr(0, time.indexOf(" ")));
  const end = new Date(time.substr(time.lastIndexOf(" ") + 1, time.length));
  const location = await extractLocation(page);
  const image = await extractSingleImage(page, selectors.image);
  
  return {
    title,
    description,
    start,
    end,
    address: location.address,
    place: location.place,
    links: {
      post: link,
      place: location.link,
      image
    }
  };
};

(async () => {
  try {
    const browser = await puppeteer.launch(browserOptions);
    const links = await parseEventsLinks(browser);
  
    for (const link of links) {
      const event = await parseEventPage(browser, link);
      if (event && isEventFree(event.description)) {
        await saveEvent(event);
      }
    }
  
    logger.info(messages.facebook.finish);
  
    browser.close();
    process.exit();
  } catch (error) {
    logger.error(error);
  }
})();


