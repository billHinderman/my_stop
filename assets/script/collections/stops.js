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

    line_blue: function() {
      return this.where({Blue: '1'});
    },

    line_brown: function() {
      return this.where({Brn: '1'});
    },

    line_green: function() {
      return this.where({G: '1'});
    },

    line_orange: function() {
      return this.where({Org: '1'});
    },

    line_pink: function() {
      return this.where({Pink: '1'});
    },

    line_purple: function() {
      return this.where({P: '1'});
    },

    line_red: function() {
      return this.where({Red: '1'});
    },

    line_yellow: function() {
      return this.where({Yellow: '1'});
    },
    
  });

  return new StopsCollection;

});
