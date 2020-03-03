module.exports.beautifyEventLink = link => {
  const parametersSymbolIndex = link.indexOf("?");

  return link.slice(0, parametersSymbolIndex > 0 ? parametersSymbolIndex : link.length);
};