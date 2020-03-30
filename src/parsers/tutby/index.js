const puppeteer = require("puppeteer");
const logger = require("../../utils/logger");
const messages = require("../../shared/messages");
const { saveEvent } = require("../../utils/mongoose");
const { browserOptions } = require("../../shared/constants");
const { parseEventsLinks, parseEventPage } = require("./parser");

(async () => {
    try {
        const browser = await puppeteer.launch(browserOptions);

        logger.info(messages.tutby.start);

        const links = await parseEventsLinks(browser);
        
        logger.info(messages.tutby.links(links.length));

        for (const link of links) {
            const event = await parseEventPage(browser, link);
            await saveEvent(event);
        }

        logger.info(messages.tutby.finish);

        browser.close();
        process.exit();
    } catch (error) {
        logger.error(error);
    }
})();
