const eventsClassifier = {
    paid: {
        tag: "paid",
        markers: [
            "билет",
            "BYN",
            "платный",
            "купить",
            "стоимость",
            "пригласительный",
            "руб.",
            "білет",
            "платны",
            "купіць",
            "кошт",
            "запрашальны"
        ]
    },
    free: {
        tag: "free",
        markers: [
            "бесплатный вход",
            "бесплатно",
            "свободный",
            "безвозмездный",
            "халявный",
            "регистрация",
            "вход по регистрации",
            "бясплатны ўваход",
            "бясплатна",
            "свабодны",
            "вольны",
            "бязвыплатны",
            "халяўны",
            "рэгістрацыя",
            "уваход па рэгістрацыі"
        ]
    }
};

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

const isEventFree = description => {
    if (!description) {
        return false;
    }
  
    const data = classifier.getClassifications(description);
    const freeValue = data.find(datum => datum.label === free.tag).value;
    const paidValue = data.find(datum => datum.label === paid.tag).value;

    return freeValue > paidValue;
};

module.exports = {
    isEventFree
};