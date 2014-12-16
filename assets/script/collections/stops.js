define([
  'underscore',
  'backbone',
  '../models/stop.js'
], function(_, Backbone, StopModel){

  var StopsCollection = Backbone.Collection.extend({
    model: StopModel,
    url: function() {
      return this.apiUrl;
    },

    initialize: function(models, options) {
      this.apiUrl = options.apiUrl;
    },

    parse: function(data) {
      return data.stops;
    },
    
  });

  return StopsCollection;

});
