require("dotenv").config();
require("./src/mongoose").connect();

const logger = require("./src/utils/logger");

const facebook = require("./src/parsers/facebook");
const tutby = require("./src/parsers/tutby");

(async () => {
    try {
        const parsers = [
            facebook,
            tutby
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