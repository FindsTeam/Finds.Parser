/* eslint-disable no-undef */
const selectors = require("./selectors");
const logger = require("../../utils/logger");
const messages = require("../../shared/messages");
const {
  extractMultipleLinks,
  extractSingleText,
  extractSingleContent,
  extractSingleImage
} = require("../../utils/puppeteer");
const {
  beautifyEventLink
} = require("../../utils/text");

const desktopUrl = "https://www.facebook.com";
const urlParameters = "?suggestion_token=%7B%22time%22%3A%22tomorrow%22%2C%22city%22%3A%22107677462599905%22%7D&acontext=%7B%22source%22%3A2%2C%22source_dashboard_filter%22%3A%22discovery%22%2C%22action_history%22%3A%22[%7B%5C%22surface%5C%22%3A%5C%22dashboard%5C%22%2C%5C%22mechanism%5C%22%3A%5C%22dashboard_home_discovery_filter%5C%22%7D%2C%7B%5C%22surface%5C%22%3A%5C%22discover_filter_list%5C%22%2C%5C%22mechanism%5C%22%3A%5C%22surface%5C%22%2C%5C%22extra_data%5C%22%3A%7B%5C%22dashboard_filter%5C%22%3A%5C%22discovery%5C%22%7D%7D]%22%2C%22has_source%22%3Atrue%7D";
const eventUrl = `${ desktopUrl }/events/discovery/${ urlParameters }`;

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

const extractLocation = async page => {
  return await page.evaluate(() => {
    let place;
    let link;
    let address;

    const timeContainer = document.querySelector("#event_time_info");
    const locationContainer = timeContainer ? timeContainer.nextSibling : null;
    const addressElement = locationContainer && locationContainer.querySelector("div > div > div > div > div > div");
    const linkElement = locationContainer && locationContainer.querySelector("a");

    if (linkElement && addressElement) {
      place = linkElement.innerText;
      link = linkElement.href;
      address = addressElement.innerText;
    } else {
      const emergencyAddressElement = locationContainer && locationContainer.querySelector("div > div > div > div > div");
      
      place = "";
      link = "";
      address = emergencyAddressElement ? emergencyAddressElement.innerText : "";
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

exports.parseEventsLinks = async (browser) => {
  await browser.defaultBrowserContext().overridePermissions(desktopUrl, []);
  
  const page = await browser.newPage();

  await page.goto(eventUrl);
  await page.waitForSelector(selectors.eventLink);
  logger.info(messages.facebook.start);
  await autoScrollToBottom(page);

  const links = await extractMultipleLinks(page, selectors.eventLink);
  logger.info(messages.facebook.links(links.length));

  await page.close();

  return new Promise(resolve => resolve(links));
};

exports.parseEventPage = async (browser, link) => {
  const page = await browser.newPage();
  
  await page.goto(link);
  await page.waitForSelector(selectors.time);

  if (await hasTickets(page, selectors.tickets)) {
    return null;
  }

  const title = await extractSingleText(page, selectors.title);
  const description = await extractSingleText(page, selectors.description);
  const time = await extractSingleContent(page, selectors.time);
  const hasEnd = time.includes("to");
  const start = hasEnd ? new Date(time.substr(0, time.indexOf(" "))) : time;
  const end = hasEnd ? new Date(time.substr(time.lastIndexOf(" ") + 1, time.length)) : "";
  const location = await extractLocation(page);
  const image = await extractSingleImage(page, selectors.image);

  await page.close();

  return new Promise(resolve => resolve({
    title,
    description,
    start,
    end,
    address: location.address,
    place: location.place,
    links: {
      post: beautifyEventLink(link),
      place: location.link,
      image
    }
  }));
};