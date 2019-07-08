module.exports = {
  facebook: {
    start: "Started facebook.com/events parsing...",
    links: amount => `Amount of found event links: ${ amount }`,
    finish: "Finished facebook.com/events parsing."
  },
  mongo: {
    save: {
      error: (error, title) => `[Mongo]: "${ title }" event has error (${ error }).`,
      success: title => `[Mongo]: "${ event.title }" event has been saved.`
    }
  }
};