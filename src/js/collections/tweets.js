var Backbone = require('backbone');
var template = require('templates/tweets.hbs');

module.exports = Backbone.Collection.extend({
  /**
   * url for twitter tweets api.
   */
  url: 'https://api.twitter.com/1.1/search/tweets.json',

  /**
   * The Twitter Search API returns tweets under "results".
   * @override
   */
  parse: function(response) {
    return response.results;
  }
});