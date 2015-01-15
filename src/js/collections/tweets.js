var Backbone = require('backbone');
var config = require('js/config');
var Twitter = require('twitter').Twitter;

module.exports = Backbone.Collection.extend({
  twitter: null,

  initialize: function(options) {
    this.twitter = new Twitter(config.twitterOptions);
  },

  /**
   * The Twitter Search API returns tweets under "results".
   * @override
   */
  parse: function(response) {
    return response.results;
  }
});