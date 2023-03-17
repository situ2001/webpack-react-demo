// a webpack loader for jsx

const chalk = require("chalk");

/**
 * @type {import('webpack').LoaderDefinitionFunction}
 */
module.exports = function (source) {
  // do something with source
  console.log(
    chalk.green("my-jsx-loader"),
    "read",
    chalk.green(source.length),
    "bytes",
    "from",
    chalk.green(this.resourcePath)
  );
  console.log(chalk.blue(source));
  // return source;
  return source;
};
