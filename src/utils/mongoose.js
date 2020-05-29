const logger = require("./logger");

const Event = require("../models/event");

const findEventByQuery = query => Event.find(query, (error, result) => result);

module.exports.saveEvent = async data => {
    const query = {
        title: data.title
    };
    const options = { upsert: true, new: true, setDefaultsOnInsert: true };

    return Event.findOneAndUpdate(query, data, options, async (error, result) => {
        if (error) {
            await logger.error(`[Mongo]: (${ error }) for "${ data.title }"`);
        } else {
            await logger.info(`[Mongo]: saved event "${ data.title }"`);
        }
    
        return result;
    }).exec();
};

module.exports.updateEventById = update => {
    const id = update._id;
    const options = { upsert: true, new: true, setDefaultsOnInsert: true };

    return Event.findByIdAndUpdate(id, update, options).exec();
};

module.exports.getAllEvents = () => findEventByQuery({});