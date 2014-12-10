define([
  'underscore',
  'backbone',
  '../models/route.js'
], function(_, Backbone, RouteModel){

  var RoutesCollection = Backbone.Collection.extend({
    model: RouteModel,
    url: './cta_routes.json',

    parse: function(data) {
      return data.routes;
    },

    comparator: function(stop) {
      return stop.get('LINE');
    }
    
  });

  return new RoutesCollection;

});
