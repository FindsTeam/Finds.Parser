require("dotenv").config();
require("./src/mongoose").connect();

const logger = require("./src/utils/logger");

const tutby = require("./src/parsers/tutby");
// const facebook = require("./src/parsers/facebook");

(async () => {
    try {
        const parsers = [
            tutby,
            // facebook
        ];

        for (const parser of parsers) {
            await parser();
        }
    } catch (error) {
        await logger.error(error);
    } finally {
        process.exit();
    }
})();