// a webpack loader for transforming a whole txt file to a branch of lines

/**
 * @type {import('webpack').LoaderDefinitionFunction}
 */
module.exports = function (content) {
  const lines = content.split(/\r\n|\r|\n/);
  // to filter any line that contains 114514 or 1919810
  const filteredLines = lines.filter(
    (line) => !line.includes("114514") && !line.includes("1919810")
  );
  const code = `
  export const rawText = ${JSON.stringify(content)}
  export const lines = ${JSON.stringify(lines)}
  export const filteredLines = ${JSON.stringify(filteredLines)}
  `;
  return code;
};
