module.exports = {
  browserOptions: {
    args : [
      "--no-sandbox",
      "--disable-setuid-sandbox"
    ],
    headless: true,
    timeout: 60000
  },
  facebook: {
    eventUrl: `https://www.facebook.com/events/discovery/?suggestion_token=%7B%22time%22%3A%22tomorrow%22%2C%22city%22%3A%22107677462599905%22%7D&acontext=%7B%22source%22%3A2%2C%22source_dashboard_filter%22%3A%22discovery%22%2C%22action_history%22%3A%22[%7B%5C%22surface%5C%22%3A%5C%22dashboard%5C%22%2C%5C%22mechanism%5C%22%3A%5C%22dashboard_home_discovery_filter%5C%22%7D%2C%7B%5C%22surface%5C%22%3A%5C%22discover_filter_list%5C%22%2C%5C%22mechanism%5C%22%3A%5C%22surface%5C%22%2C%5C%22extra_data%5C%22%3A%7B%5C%22dashboard_filter%5C%22%3A%5C%22discovery%5C%22%7D%7D]%22%2C%22has_source%22%3Atrue%7D`,
    selectors: {
      eventLink: "div.clearfix > div > div > div > div > div > a",
      progressBar: [ role="progressbar" ],
      tickets: "[data-testid='event_ticket_link']",
      title: "#seo_h1_tag",
      description: "[data-testid=event-permalink-details] > span",
      time: "#event_time_info div[content]",
      image: "#event_header_primary img.img",
    }
  },
  dateFormat: "DD.MM.YY, HH:mm",
  eventsClassifier: {
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
  }

}
