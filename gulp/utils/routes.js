var _ = require('underscore');

var routes = _.map(['index'], function(route) {
  var routeObj = {};

  if (_.isString(route)) {
    _.extend(routeObj, {
      path: route,
      name: route,
      entries: {
        js: 'js/app.js',
        less: 'less/app.less',
      }
    });
  } else {
    _.defaults(routeObj, route);
  }

  return routeObj;
});

module.exports = routes;