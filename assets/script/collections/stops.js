define([
  'underscore',
  'backbone',
  '../models/stop.js'
], function(_, Backbone, StopModel){

  var StopsCollection = Backbone.Collection.extend({
    model: StopModel,
    url: './cta_stops.json',

    parse: function(data) {
      return data.stops;
    },
    
  });

  return new StopsCollection;

});
