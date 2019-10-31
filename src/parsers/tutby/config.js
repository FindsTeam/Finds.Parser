const moment = require("moment");

const dateRangeFormat = "YYYY-MM-DD";
const singleDateFormat = "YYYY/MM/DD";

module.exports = {
  eventsPageUrl: (startDate, endDate = null) => {
    if (!startDate) {
      return "https://afisha.tut.by/free-events";
    }

    if (!endDate) {
      const formattedStartDate = moment(startDate).format(singleDateFormat);
      return `https://afisha.tut.by/day/free-events/${formattedStartDate}`;
    }

    const formattedStartDate = moment(startDate).format(dateRangeFormat);
    const formattedEndDate = moment(startDate).format(dateRangeFormat);
    return `https://afisha.tut.by/day/free-events/${formattedStartDate}/${formattedEndDate}`;
  },
};
