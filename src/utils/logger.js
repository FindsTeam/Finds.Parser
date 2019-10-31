const { Timber } = require("@timberio/node");
const logger = new Timber(process.env.TIMBER_API_KEY, process.env.TIMBER_SOURCE_ID);

module.exports = logger;