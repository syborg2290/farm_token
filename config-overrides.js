const webpack = require("webpack");

module.exports = function override(config) {
  const fallback = config.resolve.fallback || {};
  Object.assign(fallback, {
    crypto: require.resolve("crypto-browserify"),
    stream: require.resolve("stream-browserify"),
    assert: require.resolve("assert"),
    http: require.resolve("stream-http"),
    https: require.resolve("https-browserify"),
    os: require.resolve("os-browserify"),
    url: require.resolve("url"),
    path: require.resolve("path-browserify"),
  });
  (config.resolve.fallback = {
    fs: false,
    path: false,
    os: false,
    crypto: false,
    stream: false,
    assert: false,
    http: false,
    https: false,
    os: false,
    url: false,
    path: false,
  }),
    (config.plugins = (config.plugins || []).concat([
      new webpack.ProvidePlugin({
        process: "process/browser",
        Buffer: ["buffer", "Buffer"],
      }),
    ]));
  config.module.rules.unshift({
    test: /\.m?js$/,
    resolve: {
      fullySpecified: false, // disable the behavior
    },
  });
  config.ignoreWarnings = [/Failed to parse source map/];
  return config;
};
