const dtsgenerator = require('dtsgenerator');

module.exports = async ({
  swagger,
  options,
}) => {
  const rawOutput = await dtsgenerator.default({
    contents: [swagger],
  });
  const lines = rawOutput.split('\n');
  return lines
    // delete unused declaration
    .slice(1, lines.findIndex((line) => line.includes('declare namespace Paths')) - 1)
    // index fix
    .map((line) => line.slice(4))
    .join('\n')
    .replace(/\n+/g, '\n')
    // indet fix
    .replace(/ {4}/g, '  ');
};
