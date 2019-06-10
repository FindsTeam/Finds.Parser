require("dotenv").config();
// require("./src/mongoose").connect();

const facebook = require("./src/parsers/facebook");

(async () => {
  const links = await facebook.parseEventsLinks();
  
  console.log(links.length);
})();