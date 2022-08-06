const path = require("path");
const webpack = require("webpack");
const express = require("express");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");

function createWebpackMiddleware(compiler, publicPath) {
  return webpackDevMiddleware(compiler, {
    publicPath,
    stats: "errors-only",
  });
}

module.exports = (app, options) => {
  const isProduction = process.env.NODE_ENV === "production";
  if (isProduction) {
    app.use(options.publicPath, express.static(options.outputPath));
    app.get("*", (req, res) =>
      res.sendFile(path.resolve(options.outputPath, "index.html"))
    );
    return app;
  }
  const webpackConfig = require("../../webpack/webpack.dev");
  const compilerWebpack = webpack(webpackConfig);
  const middlewareWebpack = createWebpackMiddleware(
    compilerWebpack,
    webpackConfig.output.publicPath
  );

  app.use(middlewareWebpack);
  app.use(webpackHotMiddleware(compilerWebpack));

  app.get("*", (req, res) => {
    middlewareWebpack.readFile(
      path.join(compilerWebpack.outputPath, "index.html"),
      (err, file) => {
        if (err) {
          res.sendStatus(404);
        } else {
          res.send(file.toString());
        }
      }
    );
  });

  return app;
};
