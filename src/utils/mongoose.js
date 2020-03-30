const logger = require("./logger");

const Event = require("../models/event");

module.exports.saveEvent = data => {
    const query = {
        title: data.title
    };
    let options = { upsert: true, new: true, setDefaultsOnInsert: true };

    return Event.findOneAndUpdate(query, data, options, (error, result) => {
        if (error || result) {
            return;
        }
    
        return Event.create(data, (error, event) => {
            if (error) {
                logger.error(`[Mongo]: (${ error }) for "${ data.title }"`);
            } else {
                logger.info(`[Mongo]: saved event "${ event.title }"`);
            }
        });
    }).exec();
};