/* eslint-disable no-console */
require("dotenv").config();
require("../../mongoose").connect();

const { getAllEvents, updateEventById } = require("../mongoose");
const { classifyType, classifyEntry } = require("./analyze");

(async () => {
    const events = await getAllEvents();

    const promises = events.map(event => {
        const text = `${ event.title } ${ event.description }`;
        const update = event;

        update.type = classifyType(text);
        update.entry = classifyEntry(text);

        console.log("\x1b[31m%s\x1b[0m", `\n${ event.title }`);
        console.log("\x1b[36m%s\x1b[0m", `${ event.description }\n`);
        console.log("\x1b[33m%s\x1b[0m", `${ update.type }, ${ update.entry }\n`);

        return updateEventById(update);
    });

    await Promise.all(promises).then(() => process.exit());
})();