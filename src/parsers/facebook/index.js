const puppeteer = require("puppeteer-extra");
const logger = require("../../utils/logger");
const messages = require("../../shared/messages");
const { isEventFree } = require("../../utils/analyze");
const { saveEvent } = require("../../utils/mongoose");
const { browserOptions } = require("../../shared/constants");
const { parseEventsLinks, parseEventPage } = require("./parser");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");

puppeteer.use(StealthPlugin());

module.exports = async () => {
    const browser = await puppeteer.launch(browserOptions);

    const links = await parseEventsLinks(browser);

    for (const link of links) {
        const event = await parseEventPage(browser, link);

        if (event && isEventFree(event.description)) {
            await saveEvent(event);
        }
    }

    await logger.info(messages.facebook.finish);
    return browser.close();
};