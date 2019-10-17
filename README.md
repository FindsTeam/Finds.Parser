<p align="center"> 
  <img src="https://drive.google.com/uc?id=1BCXVwS2Cbs_Ywf4Zq4Sv8NxI8MP9VZeX" alt="Finds logo" width="200" />
</p>

# Finds Parser

This is a set of parsers designed to scrap free events from sites that publish event announcements.

## Getting started

Clone project to your computer.

```
$ git clone https://github.com/FindsTeam/Finds.Landing.git
```

### Prerequisites

To start with Finds Parser code, you should have [Node](https://nodejs.org/en/download/package-manager/) installed.

### Installing

Install all dependencies.

```
$ npm install
```

You should create `.env` file in a root directory. File should contain:

```
MONGODB_CONNECTION = 
TIMBER_SOURCE_ID = 
TIMBER_API_KEY = 
```

* `MONGODB_CONNECTION` - a MongoDB [connection string](https://docs.mongodb.com/manual/reference/connection-string/) with credentials;
* `TIMBER_ ...` - Environmental variables for [Timber](https://docs.timber.io/). Log better!

### Launching

To start parser on localhost type run `index.js` file from the root folder.

```
$ node index.js
```

`start` script from `package.json` is designed for development needs. It uses [nodemon](https://github.com/remy/nodemon) to rebuild the code after saving.

## Built With

- [Node.js](https://github.com/nodejs/node) - JavaScript runtime for server;
- [npm](https://github.com/npm/npm) - Package manager for JavaScript;
- [Express.js](https://github.com/expressjs/express) - Framework for Node.js;
- [Puppeteer](https://github.com/GoogleChrome/puppeteer) - Automatic headless Chromium crawler for Node.js;
- [natural](https://github.com/NaturalNode/natural) - A general natural language facility for Node.js;
- [Timber](https://github.com/timberio/timber-js) - Node / Javascript Logging;
- [moment](https://github.com/moment/moment/) - Best JS library for time manipulations!

### Database

- [MongoDB](https://www.mongodb.com/) - NoSQL Database;
- [Mongoose](http://mongoosejs.com/) - ODM for MongoDB.

## Developed by

* **Егор Пуйша** - [GitStearis](https://github.com/GitStearis);
* **Артем Дадыченко** - [ArtemDadychenko](https://github.com/ArtemDadychenko).