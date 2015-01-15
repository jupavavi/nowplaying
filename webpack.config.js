var _ = require('underscore');
var webpack = require('webpack');
var config = require('./gulp/config');
var routes = require('./gulp/utils/routes');

var entryKeys = _.pluck(routes, 'name');
var entryValues = _.map(routes, function(route) {
  return ['./src', route.entries.js].join('/');
});

module.exports = {
  entry: _.object(entryKeys, entryValues),
  output: {
    path: '/dist',
    filename: config.prefix + '[name].bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery'
    }),
    new webpack.ProvidePlugin({
      _: 'underscore'
    })
  ],
  module: {
    loaders: [
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader'
      }
    ]
  },
  resolve: {
    alias: {
      'twitter': 'twitter-js-client',
    },
    fallback: './src/utils/hbs-helpers',
    modulesDirectories: ['node_modules', 'src']
  }
};