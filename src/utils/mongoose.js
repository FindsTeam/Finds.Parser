const logger = require("../logger");

const Event = require('../models/event');

module.exports.saveEvent = data => {
  const {
    title,
    description,
    start,
    end,
    address,
    place,
    links
  } = data;

  return Event.create({
    title,
    description,
    start,
    end,
    address,
    place,
    links
  }, (error, event) => {
    if (error) {
      logger.error(`[Mongo]: (${ error }) for "${ data.title }"`);
    } else {
      logger.info(`[Mongo]: saved event "${ event.title }"`);
    }
  });
};