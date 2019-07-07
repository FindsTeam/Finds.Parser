const logger = require("../logger");

const Events = require('../models/events');

module.exports.createEvent = data => {
  const {
    title,
    description,
    start,
    end,
    address,
    place,
    links
  } = data;
  Events.create({
    title,
    description,
    start,
    end,
    address,
    place,
    links
  }, (err, event) => {
    if (err) {
      logger.error(`[Mongo]: ${ err }`);
    } else {
      logger.info(`[Mongo]: saved event "${ event.title }"`);
    }
  });
};