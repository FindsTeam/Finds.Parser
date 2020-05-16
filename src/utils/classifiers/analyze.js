const natural = require("natural");

const porterStemmer = natural.PorterStemmerRu;

let typeClassifier;
let entryClassifier;
const loadClassifier = path => new Promise((resolve, reject) => natural.BayesClassifier.load(path, porterStemmer, (error, classifier) => {
    if (classifier) {
        resolve(classifier);
    } else if (error) {
        reject(error);
    } else {
        resolve(null);
    }
}));

(async () => {
    typeClassifier = await loadClassifier("./src/utils/classifiers/type-classifier.json");
    entryClassifier = await loadClassifier("./src/utils/classifiers/entry-classifier.json");
})();

const normalize = text => {
    return text.replace(/[,.!?:;]/g, " ").replace(/\s\s+/g, " ").replace(/[^А-Яа-яіA-Za-z0-9-" "]/g, "").toLowerCase();
};

const classify = (text, classifier) => {
    if (!text || !classifier) {
        return null;
    }

    const normalized = normalize(text);
    const data = classifier.classify(normalized);

    return data;
};

const classifyType = text => classify(text, typeClassifier);

const classifyEntry = text => classify(text, entryClassifier);

module.exports = {
    classifyType,
    classifyEntry
};