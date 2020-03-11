module.exports.beautifyEventLink = link => {
  if (!link) {
    return "";
  }

  const parametersSymbolIndex = link.indexOf("?");

  return link.slice(0, parametersSymbolIndex > 0 ? parametersSymbolIndex : link.length);
};