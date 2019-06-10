const puppeteer = require("puppeteer");
const logger = require("../logger");
const messages = require("../messages");

const EVENTS_URL = `https://www.facebook.com/events/discovery/?suggestion_token={"city":"107677462599905","time":"tomorrow","timezone":"Europe/Minsk"}`;
const EVENT_LINK_SELECTOR = "div.clearfix > div > div > div > div > div > a";
const PROGRESSBAR_SELECTOR = [ role="progressbar" ];

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
  }, PROGRESSBAR_SELECTOR);
};

const extractLinks = async (page, selector) => {
  return await page.evaluate(selector => {
    const elements = Array.from(document.querySelectorAll(selector));

    return elements.map(element => element.href);
  }, selector);
};

module.exports.parseEventsLinks = async () => {
  const browser = await puppeteer.launch({
    args : [
      "--no-sandbox",
      "--disable-setuid-sandbox"
    ],
    headless: true,
    timeout: 60000
  });
  const page = await browser.newPage();

  await page.goto(EVENTS_URL);
  await page.setViewport({
    width: 1200,
    height: 500
  });
  await page.waitForSelector(EVENT_LINK_SELECTOR);
  logger.info(messages.facebook.start);
  await autoScrollToBottom(page);
  
  const links = await extractLinks(page, EVENT_LINK_SELECTOR);
  logger.info(messages.facebook.finish(links.length));

  browser.close();
  
  return links;
};


