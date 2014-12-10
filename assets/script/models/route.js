define([
  'underscore',
  'backbone',
], function(_, Backbone) {

  var RouteModel = Backbone.Model.extend({
    defaults : {
      'LINE':'',
      'stops':[],
      'DISPLAY_NAME':'',
    },

    initialize: function() {
    },
  });
  return RouteModel;
});
