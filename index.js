require("dotenv").config();
require("./src/mongoose").connect();

require("./src/parsers/facebook");
require("./src/parsers/tutby");