const puppeteer = require("puppeteer");
const logger = require("../../utils/logger");
const messages = require("../../shared/messages");
const { isEventFree } = require("../../utils/analyze");
const { saveEvent } = require("../../utils/mongoose");
const { browserOptions } = require("../../shared/constants");
const {
  parseEventsLinks,
  parseEventPage
} = require("./parser");

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
    console.log(error);
    logger.error(error);
  }
})();


