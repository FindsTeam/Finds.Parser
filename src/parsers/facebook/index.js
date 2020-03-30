const puppeteer = require("puppeteer-extra");
const logger = require("../../utils/logger");
const messages = require("../../shared/messages");
const { isEventFree } = require("../../utils/analyze");
const { saveEvent } = require("../../utils/mongoose");
const { browserOptions } = require("../../shared/constants");
const { login, logout } = require("./authentication");
const {
  parseEventsLinks,
  parseEventPage
} = require("./parser");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");

(async () => {
  try {
    puppeteer.use(StealthPlugin());

    const browser = await puppeteer.launch(browserOptions);
    
    await login(browser);

    const links = await parseEventsLinks(browser);
  
    for (const link of links) {
      const event = await parseEventPage(browser, link);

      if (event && isEventFree(event.description)) {
        await saveEvent(event);
      }
    }

    await logout(browser);
  
    logger.info(messages.facebook.finish);
    browser.close();
    process.exit();
  } catch (error) {
    logger.error(error);
  }
})();


