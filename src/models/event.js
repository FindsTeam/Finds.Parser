const mongoose = require("mongoose");
const Point = require("./point");
const Links = require("./links");

mongoose.Promise = Promise;

const event = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: [ Date ],
    required: true
  },
  time: {
    type: [ Date ],
    required: true
  },
  address: {
    type: String,
    required: true
  },
  location: {
    type: Point,
    required: false,
    index: {
      type: "2dsphere",
      sparse: true
    }
  },
  links: {
    type: Links,
    required: true
  }
}, {
  collection: "events",
  versionKey: false
});

module.exports = mongoose.model("events", event);