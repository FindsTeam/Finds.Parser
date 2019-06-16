module.exports.extractMultipleLinks = async (page, selector) => {
  return await page.evaluate(selector => {
    const elements = Array.from(document.querySelectorAll(selector));

    return elements.map(element => element.href);
  }, selector);
};

module.exports.extractSingleText = async (page, selector) => {
  return await page.evaluate(selector => {
    const element = document.querySelector(selector).innerText;

    return element;
  }, selector);
};

module.exports.extractSingleContent = async (page, selector) => {
  return await page.evaluate(selector => {
    const element = document.querySelector(selector).getAttribute("content");

    return element;
  }, selector);
};

module.exports.extractSingleImage = async (page, selector) => {
  return await page.evaluate(selector => {
    const element = document.querySelector(selector).getAttribute("data-src");

    return element;
  }, selector);
};