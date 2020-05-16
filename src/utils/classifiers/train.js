const natural = require("natural");

const porterStemmer = natural.PorterStemmerRu;
const typeClassifier = new natural.BayesClassifier(porterStemmer);
const entryClassifier = new natural.BayesClassifier(porterStemmer);

const { entry, type } = require("./tags");

type.forEach(tag => {
    tag.markers.forEach(marker => typeClassifier.addDocument(marker, tag.name));
});

typeClassifier.train();
typeClassifier.save("type-classifier.json");

entry.forEach(tag => {
    tag.markers.forEach(marker => entryClassifier.addDocument(marker, tag.name));
});

entryClassifier.train();
entryClassifier.save("entry-classifier.json");