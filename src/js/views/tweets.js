var Backbone = require('backbone');
var template = require('templates/tweets.hbs');

module.exports = Backbone.View.extend({
  template: template,

  collection: new Collection(),

  initialize: function(options) {
    this.collection.on('change', this.render);
    this.collection.fetch({dataType: 'jsonp'});
  },

  /**
   * @override
   */
  render: function() {
    this.$el.html(template());
    return this;
  }
});