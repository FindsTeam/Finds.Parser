const {
  eventsClassifier
} = require("./../constants");

const natural = require("natural");
const porterStemmer = natural.PorterStemmerRu;
const classifier = new natural.BayesClassifier(porterStemmer);

const paid = eventsClassifier.paid;
const free = eventsClassifier.free;

paid.markers.forEach(marker => {
  classifier.addDocument(marker, paid.tag);
});

free.markers.forEach(marker => {
  classifier.addDocument(marker, free.tag);
});

classifier.train();

const analyze = description => {
  data = classifier.getClassifications(description);
  return data[0].value > data[1].value;
};

module.exports = analyze;