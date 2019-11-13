module.exports = {
  facebook: {
    start: "Started facebook.com/events parsing...",
    links: amount => `Amount of found event links: ${ amount }`,
    finish: "Finished facebook.com/events parsing."
  },
  tutby: {
    start: "Started afisha.tut.by/free-events parsing...",
    links: amount => `Amount of found event links: ${ amount }`,
    finish: "Finished afisha.tut.by/free-events parsing."
  },
  mongo: {
    save: {
      error: (error, title) => `[Mongo]: "${ title }" event has error (${ error }).`,
      success: event => `[Mongo]: "${ event.title }" event has been saved.`
    }
  }
};
