/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! dotenv */ \"dotenv\").config();\r\n__webpack_require__(/*! ./parse.js */ \"./parse.js\");\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./parse.js":
/*!******************!*\
  !*** ./parse.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/mongoose */ \"./src/mongoose.js\").connect();\r\n\r\n__webpack_require__(/*! ./src/parsers/facebook */ \"./src/parsers/facebook/index.js\");\r\n__webpack_require__(/*! ./src/parsers/tutby */ \"./src/parsers/tutby/index.js\");\r\n\n\n//# sourceURL=webpack:///./parse.js?");

/***/ }),

/***/ "./src/models/event.js":
/*!*****************************!*\
  !*** ./src/models/event.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\r\nconst Links = __webpack_require__(/*! ./links */ \"./src/models/links.js\");\r\n\r\nmongoose.Promise = Promise;\r\n\r\nconst event = new mongoose.Schema({\r\n  title: {\r\n    type: String,\r\n    required: true\r\n  },\r\n  description: {\r\n    type: String,\r\n    required: true\r\n  },\r\n  start: {\r\n    type: Date,\r\n    required: true\r\n  },\r\n  end: {\r\n    type: Date,\r\n    required: true\r\n  },\r\n  address: {\r\n    type: String,\r\n    required: true\r\n  },\r\n  place: {\r\n    type: String,\r\n    required: false\r\n  },\r\n  links: {\r\n    type: Links,\r\n    required: true\r\n  }\r\n}, {\r\n  collection: \"events\",\r\n  versionKey: false\r\n});\r\n\r\nmodule.exports = mongoose.model(\"events\", event);\n\n//# sourceURL=webpack:///./src/models/event.js?");

/***/ }),

/***/ "./src/models/links.js":
/*!*****************************!*\
  !*** ./src/models/links.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\r\n\r\nconst Links = new mongoose.Schema({\r\n  post: {\r\n    type: String,\r\n    required: true\r\n  },\r\n  place: {\r\n    type: String,\r\n    required: false\r\n  },\r\n  image: {\r\n    type: String,\r\n    required: false\r\n  }\r\n});\r\n\r\nmodule.exports = Links;\n\n//# sourceURL=webpack:///./src/models/links.js?");

/***/ }),

/***/ "./src/mongoose.js":
/*!*************************!*\
  !*** ./src/mongoose.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\r\n\r\nmodule.exports.connect = () => {\r\n  mongoose.connect(process.env.MONGODB_CONNECTION, {\r\n    useCreateIndex: true,\r\n    useNewUrlParser: true,\r\n    useFindAndModify: false\r\n  });\r\n  \r\n  mongoose.Promise = Promise;\r\n};\n\n//# sourceURL=webpack:///./src/mongoose.js?");

/***/ }),

/***/ "./src/parsers/facebook/index.js":
/*!***************************************!*\
  !*** ./src/parsers/facebook/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const puppeteer = __webpack_require__(/*! puppeteer */ \"puppeteer\");\r\nconst logger = __webpack_require__(/*! ../../utils/logger */ \"./src/utils/logger.js\");\r\nconst messages = __webpack_require__(/*! ../../shared/messages */ \"./src/shared/messages.js\");\r\nconst { isEventFree } = __webpack_require__(/*! ../../utils/analyze */ \"./src/utils/analyze.js\");\r\nconst { saveEvent } = __webpack_require__(/*! ../../utils/mongoose */ \"./src/utils/mongoose.js\");\r\nconst { browserOptions } = __webpack_require__(/*! ../../shared/constants */ \"./src/shared/constants.js\");\r\nconst {\r\n  parseEventsLinks,\r\n  parseEventPage\r\n} = __webpack_require__(/*! ./parser */ \"./src/parsers/facebook/parser.js\");\r\n\r\n(async () => {\r\n  try {\r\n    const browser = await puppeteer.launch(browserOptions);\r\n    const links = await parseEventsLinks(browser);\r\n  \r\n    for (const link of links) {\r\n      const event = await parseEventPage(browser, link);\r\n      if (event && isEventFree(event.description)) {\r\n        await saveEvent(event);\r\n      }\r\n    }\r\n  \r\n    logger.info(messages.facebook.finish);\r\n    browser.close();\r\n    process.exit();\r\n  } catch (error) {\r\n    console.log(error);\r\n    logger.error(error);\r\n  }\r\n})();\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/parsers/facebook/index.js?");

/***/ }),

/***/ "./src/parsers/facebook/parser.js":
/*!****************************************!*\
  !*** ./src/parsers/facebook/parser.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* eslint-disable no-undef */\r\nconst selectors = __webpack_require__(/*! ./selectors */ \"./src/parsers/facebook/selectors.js\");\r\nconst logger = __webpack_require__(/*! ../../utils/logger */ \"./src/utils/logger.js\");\r\nconst messages = __webpack_require__(/*! ../../shared/messages */ \"./src/shared/messages.js\");\r\nconst {\r\n  extractMultipleLinks,\r\n  extractSingleText,\r\n  extractSingleContent,\r\n  extractSingleImage\r\n} = __webpack_require__(/*! ../../utils/puppeteer */ \"./src/utils/puppeteer.js\");\r\n\r\nconst urlParameters = \"?suggestion_token=%7B%22time%22%3A%22tomorrow%22%2C%22city%22%3A%22107677462599905%22%7D&acontext=%7B%22source%22%3A2%2C%22source_dashboard_filter%22%3A%22discovery%22%2C%22action_history%22%3A%22[%7B%5C%22surface%5C%22%3A%5C%22dashboard%5C%22%2C%5C%22mechanism%5C%22%3A%5C%22dashboard_home_discovery_filter%5C%22%7D%2C%7B%5C%22surface%5C%22%3A%5C%22discover_filter_list%5C%22%2C%5C%22mechanism%5C%22%3A%5C%22surface%5C%22%2C%5C%22extra_data%5C%22%3A%7B%5C%22dashboard_filter%5C%22%3A%5C%22discovery%5C%22%7D%7D]%22%2C%22has_source%22%3Atrue%7D\";\r\nconst eventUrl = `https://www.facebook.com/events/discovery/${ urlParameters }`;\r\n\r\nconst autoScrollToBottom = async page => {\r\n  await page.evaluate(async selector => {\r\n    await new Promise(resolve => {\r\n      let totalHeight = 0;\r\n      const distance = 100;\r\n      const interval = 400;\r\n      const timer = setInterval(async () => {\r\n        const scrollHeight = document.body.scrollHeight;\r\n\r\n        window.scrollBy(0, distance);\r\n        totalHeight += distance;\r\n\r\n        if (totalHeight >= scrollHeight) {\r\n          if (document.querySelector(selector)) {\r\n            const currentHeight = document.body.scrollHeight;\r\n            await page.waitForFunction(selector => !document.querySelector(selector), { polling: \"mutation\" }, selector);\r\n            await page.waitForFunction(currentHeight => document.body.scrollHeight > currentHeight + distance * 2, currentHeight);\r\n          } else {\r\n            clearInterval(timer);\r\n            resolve();\r\n          }\r\n        }\r\n      }, interval);\r\n    });\r\n  }, selectors.progressBar);\r\n};\r\n\r\nconst extractLocation = async page => {\r\n  return await page.evaluate(() => {\r\n    let place;\r\n    let link;\r\n    let address;\r\n\r\n    const timeContainer = document.querySelector(\"#event_time_info\");\r\n    const locationContainer = timeContainer.nextSibling;\r\n    const addressElement = locationContainer.querySelector(\"div > div > div > div > div > div\");\r\n\r\n    if (addressElement && addressElement.innerText) {\r\n      const linkElement = locationContainer.querySelector(\"a\");\r\n\r\n      place = linkElement.innerText;\r\n      link = linkElement.href;\r\n      address = addressElement.innerText;\r\n    } else {\r\n      place = \"\";\r\n      link = \"\";\r\n      address = locationContainer.querySelector(\"div > div > div > div > div\").innerText;\r\n    }\r\n\r\n    return {\r\n      place,\r\n      link,\r\n      address\r\n    };\r\n  });\r\n};\r\n\r\nconst hasTickets = async (page, selector) => {\r\n  return await page.evaluate(selector => {\r\n    const element = document.querySelector(selector);\r\n\r\n    return !!element;\r\n  }, selector);\r\n};\r\n\r\nexports.parseEventsLinks = async (browser) => {\r\n  const page = await browser.newPage();\r\n\r\n  await page.goto(eventUrl);\r\n  await page.setViewport({\r\n    width: 1200,\r\n    height: 500\r\n  });\r\n  await page.waitForSelector(selectors.eventLink);\r\n  logger.info(messages.facebook.start);\r\n  await autoScrollToBottom(page);\r\n\r\n  const links = await extractMultipleLinks(page, selectors.eventLink);\r\n  logger.info(messages.facebook.links(links.length));\r\n\r\n  await page.close();\r\n\r\n  return new Promise(resolve => resolve(links));\r\n};\r\n\r\nexports.parseEventPage = async (browser, link) => {\r\n  const page = await browser.newPage();\r\n  \r\n  await page.goto(link);\r\n  await page.waitForSelector(selectors.time);\r\n\r\n  if (await hasTickets(page, selectors.tickets)) {\r\n    return null;\r\n  }\r\n\r\n  const title = await extractSingleText(page, selectors.title);\r\n  const description = await extractSingleText(page, selectors.description);\r\n  const time = await extractSingleContent(page, selectors.time);\r\n  const hasEnd = time.includes(\"to\");\r\n  const start = hasEnd ? new Date(time.substr(0, time.indexOf(\" \"))) : time;\r\n  const end = hasEnd ? new Date(time.substr(time.lastIndexOf(\" \") + 1, time.length)) : \"\";\r\n  const location = await extractLocation(page);\r\n  const image = await extractSingleImage(page, selectors.image);\r\n\r\n  await page.close();\r\n\r\n  return new Promise(resolve => resolve({\r\n    title,\r\n    description,\r\n    start,\r\n    end,\r\n    address: location.address,\r\n    place: location.place,\r\n    links: {\r\n      post: link,\r\n      place: location.link,\r\n      image\r\n    }\r\n  }));\r\n};\n\n//# sourceURL=webpack:///./src/parsers/facebook/parser.js?");

/***/ }),

/***/ "./src/parsers/facebook/selectors.js":
/*!*******************************************!*\
  !*** ./src/parsers/facebook/selectors.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* eslint-disable no-undef */\r\nmodule.exports = {\r\n  eventLink: \"div.clearfix > div > div > div > div > div > a\",\r\n  progressBar: \"span[role=\\\"progressbar\\\"]:not([value=\\\"jewelLoading\\\"])\",\r\n  tickets: \"[data-testid='event_ticket_link']\",\r\n  title: \"#seo_h1_tag\",\r\n  description: \"[data-testid=event-permalink-details] > span\",\r\n  time: \"#event_time_info div[content]\",\r\n  image: \"#event_header_primary img.img\",\r\n};\n\n//# sourceURL=webpack:///./src/parsers/facebook/selectors.js?");

/***/ }),

/***/ "./src/parsers/tutby/config.js":
/*!*************************************!*\
  !*** ./src/parsers/tutby/config.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const moment = __webpack_require__(/*! moment */ \"moment\");\r\n\r\nconst dateRangeFormat = \"YYYY-MM-DD\";\r\nconst singleDateFormat = \"YYYY/MM/DD\";\r\n\r\nmodule.exports = {\r\n  eventsPageUrl: (startDate, endDate = null) => {\r\n    if (!startDate) {\r\n      return \"https://afisha.tut.by/free-events\";\r\n    }\r\n\r\n    if (!endDate) {\r\n      const formattedStartDate = moment(startDate).format(singleDateFormat);\r\n      return `https://afisha.tut.by/day/free-events/${formattedStartDate}`;\r\n    }\r\n\r\n    const formattedStartDate = moment(startDate).format(dateRangeFormat);\r\n    const formattedEndDate = moment(startDate).format(dateRangeFormat);\r\n    return `https://afisha.tut.by/day/free-events/${formattedStartDate}/${formattedEndDate}`;\r\n  },\r\n};\r\n\n\n//# sourceURL=webpack:///./src/parsers/tutby/config.js?");

/***/ }),

/***/ "./src/parsers/tutby/index.js":
/*!************************************!*\
  !*** ./src/parsers/tutby/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const puppeteer = __webpack_require__(/*! puppeteer */ \"puppeteer\");\r\nconst logger = __webpack_require__(/*! ../../utils/logger */ \"./src/utils/logger.js\");\r\nconst messages = __webpack_require__(/*! ../../shared/messages */ \"./src/shared/messages.js\");\r\nconst { saveEvent } = __webpack_require__(/*! ../../utils/mongoose */ \"./src/utils/mongoose.js\");\r\nconst { browserOptions } = __webpack_require__(/*! ../../shared/constants */ \"./src/shared/constants.js\");\r\nconst { parseEventsLinks, parseEventPage } = __webpack_require__(/*! ./parser */ \"./src/parsers/tutby/parser.js\");\r\n\r\n(async () => {\r\n  try {\r\n    const browser = await puppeteer.launch(browserOptions);\r\n    logger.info(messages.tutby.start);\r\n\r\n    const links = await parseEventsLinks(browser);\r\n    logger.info(messages.tutby.links(links.length));\r\n\r\n    for (const link of links) {\r\n      const event = await parseEventPage(browser, link);\r\n      await saveEvent(event);\r\n    }\r\n\r\n    logger.info(messages.tutby.finish);\r\n\r\n    browser.close();\r\n    process.exit();\r\n  } catch (error) {\r\n    logger.error(error);\r\n  }\r\n})();\r\n\n\n//# sourceURL=webpack:///./src/parsers/tutby/index.js?");

/***/ }),

/***/ "./src/parsers/tutby/parser.js":
/*!*************************************!*\
  !*** ./src/parsers/tutby/parser.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const { eventsPageUrl } = __webpack_require__(/*! ./config */ \"./src/parsers/tutby/config.js\");\r\nconst selectors = __webpack_require__(/*! ./selectors */ \"./src/parsers/tutby/selectors.js\");\r\nconst {\r\n  extractMultipleLinks, extractSingleText, extractSingleImage,\r\n  extractSingleLink, extractSingleDateTime,\r\n} = __webpack_require__(/*! ../../utils/puppeteer */ \"./src/utils/puppeteer.js\");\r\n\r\nexports.parseEventsLinks = async (browser) => {\r\n  const date = new Date();\r\n  const url = eventsPageUrl(date);\r\n  const page = await browser.newPage();\r\n  await page.goto(url);\r\n\r\n  const linksSelector = `${selectors.eventsTable.table} ${selectors.eventsTable.eventLink}`;\r\n  const links = await extractMultipleLinks(page, linksSelector);\r\n\r\n  page.close();\r\n\r\n  return links;\r\n};\r\n\r\nexports.parseEventPage = async (browser, link) => {\r\n  const page = await browser.newPage();\r\n  await page.goto(link);\r\n\r\n  const title = await extractSingleText(page, selectors.eventPage.title);\r\n  const description = await extractSingleText(page, selectors.eventPage.description);\r\n  const start = await extractSingleDateTime(page, selectors.eventPage.start);\r\n  const end = await extractSingleDateTime(page, selectors.eventPage.end);\r\n  const image = await extractSingleImage(page, selectors.eventPage.image);\r\n  const place = await extractSingleText(page, selectors.eventPage.place);\r\n  const placeLink = await extractSingleLink(page, selectors.eventPage.placeLink);\r\n  const address = await extractSingleText(page, selectors.eventPage.address);\r\n\r\n  page.close();\r\n\r\n  return {\r\n    title,\r\n    description,\r\n    start,\r\n    end,\r\n    place,\r\n    address,\r\n    links: {\r\n      post: link,\r\n      place: placeLink,\r\n      image,\r\n    }\r\n  };\r\n};\r\n\n\n//# sourceURL=webpack:///./src/parsers/tutby/parser.js?");

/***/ }),

/***/ "./src/parsers/tutby/selectors.js":
/*!****************************************!*\
  !*** ./src/parsers/tutby/selectors.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\r\n  datePicker: {\r\n    picker: \".b-choose-date > .b-event-filter\",\r\n    menu: \".daterangepicker.dropdown-menu\",\r\n    today: \".daterangepicker.dropdown-menu li:nth-child(1)\",\r\n  },\r\n  eventsTable: {\r\n    table: \"#schedule-table\",\r\n    tableRow: \".b-afisha-event\",\r\n    eventList: \".event-list-i\",\r\n    eventLink: \".item-header-i a.header__link\",\r\n  },\r\n  eventPage: {\r\n    container: \".post_wrapper\",\r\n    title: \"#event-name\",\r\n    image: \".main_image\",\r\n    categories: \".sub_title.tag-place a\",\r\n\r\n    place: \"a.b-event_place span\",\r\n    placeLink: \"a.b-event_place\",\r\n    address: \"a.b-event_address\",\r\n    \r\n    description: \"#event-description\",\r\n    start: \".b-event__tickets time[itemprop=startDate]\",\r\n    end: \".b-event__tickets time[itemprop=endDate]\",\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/parsers/tutby/selectors.js?");

/***/ }),

/***/ "./src/shared/constants.js":
/*!*********************************!*\
  !*** ./src/shared/constants.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* eslint-disable no-undef */\r\nmodule.exports = {\r\n  browserOptions: {\r\n    args : [\r\n      \"--no-sandbox\",\r\n      \"--disable-setuid-sandbox\"\r\n    ],\r\n    headless: false,\r\n    timeout: 60000\r\n  },\r\n  dateFormat: \"DD.MM.YY, HH:mm\",\r\n};\r\n\n\n//# sourceURL=webpack:///./src/shared/constants.js?");

/***/ }),

/***/ "./src/shared/messages.js":
/*!********************************!*\
  !*** ./src/shared/messages.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\r\n  facebook: {\r\n    start: \"Started facebook.com/events parsing...\",\r\n    links: amount => `Amount of found event links: ${ amount }`,\r\n    finish: \"Finished facebook.com/events parsing.\"\r\n  },\r\n  tutby: {\r\n    start: \"Started afisha.tut.by/free-events parsing...\",\r\n    links: amount => `Amount of found event links: ${ amount }`,\r\n    finish: \"Finished afisha.tut.by/free-events parsing.\"\r\n  },\r\n  mongo: {\r\n    save: {\r\n      error: (error, title) => `[Mongo]: \"${ title }\" event has error (${ error }).`,\r\n      success: event => `[Mongo]: \"${ event.title }\" event has been saved.`\r\n    }\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack:///./src/shared/messages.js?");

/***/ }),

/***/ "./src/utils/analyze.js":
/*!******************************!*\
  !*** ./src/utils/analyze.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const eventsClassifier = {\r\n  paid: {\r\n    tag: \"paid\",\r\n    markers: [\r\n      \"билет\",\r\n      \"BYN\",\r\n      \"платный\",\r\n      \"купить\",\r\n      \"стоимость\",\r\n      \"пригласительный\",\r\n      \"руб.\",\r\n      \"білет\",\r\n      \"платны\",\r\n      \"купіць\",\r\n      \"кошт\",\r\n      \"запрашальны\"\r\n    ]\r\n  },\r\n  free: {\r\n    tag: \"free\",\r\n    markers: [\r\n      \"бесплатный вход\",\r\n      \"бесплатно\",\r\n      \"свободный\",\r\n      \"безвозмездный\",\r\n      \"халявный\",\r\n      \"регистрация\",\r\n      \"вход по регистрации\",\r\n      \"бясплатны ўваход\",\r\n      \"бясплатна\",\r\n      \"свабодны\",\r\n      \"вольны\",\r\n      \"бязвыплатны\",\r\n      \"халяўны\",\r\n      \"рэгістрацыя\",\r\n      \"уваход па рэгістрацыі\"\r\n    ]\r\n  }\r\n};\r\n\r\nconst natural = __webpack_require__(/*! natural */ \"natural\");\r\nconst porterStemmer = natural.PorterStemmerRu;\r\nconst classifier = new natural.BayesClassifier(porterStemmer);\r\n\r\nconst paid = eventsClassifier.paid;\r\nconst free = eventsClassifier.free;\r\n\r\npaid.markers.forEach(marker => {\r\n  classifier.addDocument(marker, paid.tag);\r\n});\r\n\r\nfree.markers.forEach(marker => {\r\n  classifier.addDocument(marker, free.tag);\r\n});\r\n\r\nclassifier.train();\r\n\r\nconst isEventFree = description => {\r\n  const data = classifier.getClassifications(description);\r\n  const freeValue = data.find(datum => datum.label === free.tag).value;\r\n  const paidValue = data.find(datum => datum.label === paid.tag).value;\r\n\r\n  return freeValue > paidValue;\r\n};\r\n\r\nmodule.exports = {\r\n  isEventFree\r\n};\n\n//# sourceURL=webpack:///./src/utils/analyze.js?");

/***/ }),

/***/ "./src/utils/logger.js":
/*!*****************************!*\
  !*** ./src/utils/logger.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const { Timber } = __webpack_require__(/*! @timberio/node */ \"@timberio/node\");\r\nconst logger = new Timber(process.env.TIMBER_API_KEY, process.env.TIMBER_SOURCE_ID);\r\n\r\nmodule.exports = logger;\n\n//# sourceURL=webpack:///./src/utils/logger.js?");

/***/ }),

/***/ "./src/utils/mongoose.js":
/*!*******************************!*\
  !*** ./src/utils/mongoose.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const logger = __webpack_require__(/*! ./logger */ \"./src/utils/logger.js\");\r\n\r\nconst Event = __webpack_require__(/*! ../models/event */ \"./src/models/event.js\");\r\n\r\nmodule.exports.saveEvent = data => {\r\n  const query = {\r\n    title: data.title\r\n  };\r\n  let options = {upsert: true, new: true, setDefaultsOnInsert: true};\r\n\r\n  return Event.findOneAndUpdate(query, data, options, (error, result) => {\r\n    if (error || result) {\r\n      return;\r\n    }\r\n    \r\n    return Event.create(data, (error, event) => {\r\n      if (error) {\r\n        logger.error(`[Mongo]: (${ error }) for \"${ data.title }\"`);\r\n      } else {\r\n        logger.info(`[Mongo]: saved event \"${ event.title }\"`);\r\n      }\r\n    });\r\n  }).exec();\r\n};\n\n//# sourceURL=webpack:///./src/utils/mongoose.js?");

/***/ }),

/***/ "./src/utils/puppeteer.js":
/*!********************************!*\
  !*** ./src/utils/puppeteer.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* eslint-disable no-undef */\r\nmodule.exports.extractMultipleLinks = async (page, selector) => {\r\n  return await page.evaluate(selector => {\r\n    const elements = Array.from(document.querySelectorAll(selector));\r\n\r\n    return elements.map(element => element.href);\r\n  }, selector);\r\n};\r\n\r\nmodule.exports.extractSingleLink = async (page, selector) => {\r\n  return await page.evaluate(selector => {\r\n    const link = document.querySelector(selector);\r\n    if (link && link.href) {\r\n      return link.href;\r\n    }\r\n\r\n    return null;\r\n  }, selector);\r\n};\r\n\r\nmodule.exports.extractSingleDateTime = async (page, selector) => {\r\n  return await page.evaluate(selector => {\r\n    const timeElement = document.querySelector(selector);\r\n\r\n    if (timeElement) {\r\n      return timeElement.dateTime;\r\n    }\r\n\r\n    return null;\r\n  }, selector);\r\n};\r\n\r\nmodule.exports.extractSingleText = async (page, selector) => {\r\n  return await page.evaluate(selector => {\r\n    const element = document.querySelector(selector);\r\n    const text = element ? element.innerText : \"\";\r\n\r\n    return text;\r\n  }, selector);\r\n};\r\n\r\nmodule.exports.extractSingleContent = async (page, selector) => {\r\n  return await page.evaluate(selector => {\r\n    const element = document.querySelector(selector).getAttribute(\"content\");\r\n\r\n    return element;\r\n  }, selector);\r\n};\r\n\r\nmodule.exports.extractSingleImage = async (page, selector) => {\r\n  return await page.evaluate(selector => {\r\n    const img = document.querySelector(selector);\r\n    const imageLink = img.getAttribute(\"data-src\") || img.getAttribute(\"src\");\r\n\r\n    return imageLink;\r\n  }, selector);\r\n};\r\n\n\n//# sourceURL=webpack:///./src/utils/puppeteer.js?");

/***/ }),

/***/ "@timberio/node":
/*!*********************************!*\
  !*** external "@timberio/node" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@timberio/node\");\n\n//# sourceURL=webpack:///external_%22@timberio/node%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"moment\");\n\n//# sourceURL=webpack:///external_%22moment%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "natural":
/*!**************************!*\
  !*** external "natural" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"natural\");\n\n//# sourceURL=webpack:///external_%22natural%22?");

/***/ }),

/***/ "puppeteer":
/*!****************************!*\
  !*** external "puppeteer" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"puppeteer\");\n\n//# sourceURL=webpack:///external_%22puppeteer%22?");

/***/ })

/******/ });