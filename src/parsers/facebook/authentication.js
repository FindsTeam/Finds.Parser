/* eslint-disable no-undef */
// const logger = require("../../utils/logger");
const selectors = require("./selectors");
const {
  enterStringToInput,
  clickElement,
  extractSingleLink
} = require("../../utils/puppeteer");

const mobileUrl = "https://mobile.facebook.com";
const loginUrl = `${ mobileUrl }/login`;

exports.login = async (browser) => {
  const page = await browser.newPage();

  await page.goto(loginUrl);

  await page.waitForSelector(selectors.username);
  await enterStringToInput(page, selectors.username, process.env.FACEBOOK_USERNAME);
  await enterStringToInput(page, selectors.password, process.env.FACEBOOK_PASSWORD);
  await clickElement(page, selectors.loginButton);
  await page.waitForSelector(selectors.profpic);

  return page.close();
};

exports.logout = async (browser) => {
  const page = await browser.newPage();

  await page.goto(mobileUrl);

  await page.waitForSelector(selectors.menuButton);
  await clickElement(page, selectors.menuButton);
  await page.waitForSelector(selectors.doNotSaveLink);
  await page.goto(await extractSingleLink(page, selectors.doNotSaveLink));

  return page.close();
};