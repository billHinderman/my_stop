define([
  'underscore',
  'backbone',
], function(_, Backbone) {

  var RouteModel = Backbone.Model.extend({
    defaults : {
      'name':'',
      'stops':[],
      'rt',
    },

    initialize: function() {
    },
  });
  return RouteModel;
});
