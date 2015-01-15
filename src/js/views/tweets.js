var Backbone = require('backbone');
var Collection  = require('js/collections/tweets');
var config = require('js/config');
var Twitter = require('twitter').Twitter;
var template = require('templates/tweets.hbs');

module.exports = Backbone.View.extend({
  template: template,
  twitter: null,
  collection: new Collection(),

  initialize: function(options) {
    this.twitter = new Twitter(config.twitterOptions);
    this.collection.on('change', this.render);
    this.collection.fetch();
  },

  /**
   * @override
   */
  render: function() {
    this.$el.html(template());
    return this;
  }
});