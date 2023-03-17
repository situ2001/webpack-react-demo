// write a webpack plugin

const chalk = require("chalk");

/**
 * @type {import('webpack').WebpackPluginInstance}
 */
class MyWebpackPlugin {
  constructor() {
    this.startTime = Date.now();
  }

  apply(compiler) {
    // apply before run
    compiler.hooks.beforeRun.tap("MyWebpackPlugin", () => {
      console.log(chalk.green("MyWebpackPlugin"), "beforeRun");
      this.startTime = Date.now();
    });
    compiler.hooks.afterCompile.tap("MyWebpackPlugin", (compilation) => {
      // print time waste
      const endTime = Date.now();
      console.log(chalk.green("MyWebpackPlugin"), "afterCompile");
      console.log("Time used:", endTime - this.startTime, "ms");
    });
    compiler.hooks.emit.tap("MyWebpackPlugin", (compilation) => {
      // do something with compilation
      console.log(chalk.green("MyWebpackPlugin"), "emit");
      // print emitted files location
      for (const filename in compilation.assets) {
        console.log(chalk.green("File emitted"), chalk.blue(filename));
      }
    });
    // apply done hooks
    compiler.hooks.done.tap("MyWebpackPlugin", (stats) => {
      // do something with stats
      console.log(chalk.green("MyWebpackPlugin"), "done");
    });
  }
}

module.exports = MyWebpackPlugin;
