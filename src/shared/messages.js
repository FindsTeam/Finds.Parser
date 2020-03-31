const facebook = "[facebook.com]";
const tutby = "[tut.by]";

module.exports = {
    facebook: {
        start: `${ facebook } Parsing in progress...`,
        links: amount => `${ facebook } Amount of found event links: ${ amount }`,
        finish: `${ facebook } Finished parsing successfully.`
    },
    tutby: {
        start: `${ tutby } Parsing in progress...`,
        links: amount => `${ tutby } Amount of found event links: ${ amount }`,
        finish: `${ tutby } Finished parsing successfully.`
    },
    mongo: {
        save: {
            error: (error, title) => `[mongo] "${ title }" event has error (${ error }).`,
            success: event => `[mongo] "${ event.title }" event has been saved.`
        }
    }
};
