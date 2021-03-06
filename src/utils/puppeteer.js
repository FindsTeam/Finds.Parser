/* eslint-disable no-undef */
module.exports.extractMultipleLinks = async (page, selector) => {
    return await page.evaluate(selector => {
        const elements = Array.from(document.querySelectorAll(selector));

        return elements.map(element => element.href);
    }, selector);
};

module.exports.extractSingleLink = async (page, selector) => {
    return await page.evaluate(selector => {
        const link = document.querySelector(selector);
        if (link && link.href) {
            return link.href;
        }

        return null;
    }, selector);
};

module.exports.extractSingleDateTime = async (page, selector) => {
    return await page.evaluate(selector => {
        const timeElement = document.querySelector(selector);

        if (timeElement) {
            return timeElement.dateTime;
        }

        return null;
    }, selector);
};

module.exports.extractSingleText = async (page, selector) => {
    return await page.evaluate(selector => {
        const element = document.querySelector(selector);
        const text = element ? element.innerText : "";

        return text;
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
        let imageLink = "";
        const element = document.querySelector(selector);

        if (element) {
            imageLink = element.getAttribute("data-src") || element.getAttribute("src");
        }

        return imageLink;
    }, selector);
};

module.exports.enterStringToInput = async (page, selector, string) => {
    return await page.evaluate(({ selector, string }) => {
        const input = document.querySelector(selector);
    
        input.value = string;
    }, { selector, string });
};

module.exports.clickElement = async (page, selector) => {
    return await page.evaluate((selector) => {
        const button = document.querySelector(selector);
    
        button.click();
    }, selector);
};
