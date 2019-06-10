require("dotenv").config();
// require("./src/mongoose").connect();

const facebook = require("./src/parsers/facebook");

(async () => {
  await facebook.parseEventsLinks();
})();