require('js/libs');
var Backbone = require('backbone');
var TweetsView = require('js/views/tweets');

var App = {
  $mainContainer: null,
  title: 'Now Playing',
  tweetsView: new TweetsView(),

  init: function() {
    console.log('App stated');

    if (App.title) {
      document.title = App.title;
    }
    $mainContainer = $('.main-container');


    Backbone.history.start();
  }
};

module.exports = App;

$(document).ready(function(e) {
  App.init();
});