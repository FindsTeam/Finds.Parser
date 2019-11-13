const { eventsPageUrl } = require("./config");
const selectors = require("./selectors");
const {
  extractMultipleLinks, extractSingleText, extractSingleImage,
  extractSingleLink, extractSingleDateTime,
} = require("../../utils/puppeteer");

exports.parseEventsLinks = async (browser) => {
  const date = new Date();
  const url = eventsPageUrl(date);
  const page = await browser.newPage();
  await page.goto(url);

  const linksSelector = `${selectors.eventsTable.table} ${selectors.eventsTable.eventLink}`;
  const links = await extractMultipleLinks(page, linksSelector);

  page.close();

  return links;
};

exports.parseEventPage = async (browser, link) => {
  const page = await browser.newPage();
  await page.goto(link);

  const title = await extractSingleText(page, selectors.eventPage.title);
  const description = await extractSingleText(page, selectors.eventPage.description);
  const start = await extractSingleDateTime(page, selectors.eventPage.start);
  const end = await extractSingleDateTime(page, selectors.eventPage.end);
  const image = await extractSingleImage(page, selectors.eventPage.image);
  const place = await extractSingleText(page, selectors.eventPage.place);
  const placeLink = await extractSingleLink(page, selectors.eventPage.placeLink);
  const address = await extractSingleText(page, selectors.eventPage.address);

  page.close();

  return {
    title,
    description,
    start,
    end,
    place,
    address,
    links: {
      post: link,
      place: placeLink,
      image,
    }
  };
};
