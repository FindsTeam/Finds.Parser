module.exports = {
  browserOptions: {
    args : [
      "--no-sandbox",
      "--disable-setuid-sandbox"
    ],
    headless: true,
    timeout: 60000
  },
  eventsUrl: `https://www.facebook.com/events/discovery/?suggestion_token={"city":"107677462599905","time":"tomorrow","timezone":"Europe/Minsk"}`,
  dateFormat: "DD.MM.YY, HH:mm",
  selectors: {
    eventLink: "div.clearfix > div > div > div > div > div > a",
    progressBar: [ role="progressbar" ],
    tickets: "[data-testid='event_ticket_link']",
    title: "#seo_h1_tag",
    description: "[data-testid=event-permalink-details] > span",
    time: "td > div > div > div > div > div",
    image: "#event_header_primary img.img"
  }

}