const puppeteer = require("puppeteer");
const logger = require("../../logger");
const messages = require("../../messages");
const { saveEvent } = require("../../utils/mongoose");
const { browserOptions } = require("../../constants");
const { parseEventsLinks, parseEventPage } = require('./parser');

(async () => {
  try {
    const browser = await puppeteer.launch(browserOptions);
    logger.info(messages.facebook.start);

    const links = await parseEventsLinks(browser);
    logger.info(messages.tutby.links(links.length));

    for (const link of links) {
      const event = await parseEventPage(browser, link);
      await saveEvent(event);
    }

    logger.info(messages.facebook.finish);

    browser.close();
    process.exit();
  } catch (error) {
    console.error(error);
    logger.error(error);
  }
})();
