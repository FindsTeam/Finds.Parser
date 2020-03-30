module.exports = {
  datePicker: {
    picker: ".b-choose-date > .b-event-filter",
    menu: ".daterangepicker.dropdown-menu",
    today: ".daterangepicker.dropdown-menu li:nth-child(1)",
  },
  eventsTable: {
    table: "#schedule-table",
    tableRow: ".b-afisha-event",
    eventList: ".event-list-i",
    eventLink: ".item-header-i a.header__link",
  },
  eventPage: {
    container: ".post_wrapper",
    title: "#event-name",
    image: ".main_image",
    categories: ".sub_title.tag-place a",

    place: "a.b-shedule-place",
    placeLink: "a.b-shedule-place",
    address: "div.b-shedule-place__address",
    
    description: "#event-description",
    start: ".b-event__tickets time[itemprop=startDate]",
    end: ".b-event__tickets time[itemprop=endDate]",
  }
};
