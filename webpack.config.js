const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const MyWebpackPlugin = require("./webpack/plugins/my-plugin");

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "build"),
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
    new MyWebpackPlugin(),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "my-jsx-loader"],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ["ts-loader", "my-jsx-loader"],
      },
      {
        test: /\.txt/,
        use: ["txt-lines-loader"],
      }
    ],
  },
  // pass all files through babel
  resolve: {
    extensions: ["*", ".js", ".jsx", ".ts", ".tsx"],
  },
  resolveLoader: {
    modules: ["node_modules", path.resolve(__dirname, "webpack/loaders")],
  },
};
