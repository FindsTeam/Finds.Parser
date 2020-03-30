const DESCRIPTION_END = "Поделиться:";
const PLACE_END = "г.";

module.exports.beautifyDescription = description => {
  if (!description) {
    return "";
  }

  const endIndex = description.indexOf(DESCRIPTION_END);

  return description.slice(0, endIndex > 0 ? endIndex : description.length).trim();
};

module.exports.beautifyPlace = place => {
  if (!place) {
    return "";
  }

  const endIndex = place.indexOf(PLACE_END);

  return place.slice(0, endIndex > 0 ? endIndex : place.length).trim();
};