require("dotenv").config();
require("./src/mongoose").connect();

const logger = require("./src/utils/logger");

const tutby = require("./src/parsers/tutby");
const facebook = require("./src/parsers/facebook");

const parsersMapping = new Map([
    [ "tutby", tutby ],
    [ "facebook", facebook ],
]);

(async () => {
    try {
        const args = process.argv.slice(2);
        
        if (args.length) {
            const parsers = args.map(argument => parsersMapping.get(argument));

            for (const parser of parsers) {
                await parser();
            }
        }
    } catch (error) {
        await logger.error(error);
    } finally {
        process.exit();
    }
})();