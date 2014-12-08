define([
  'underscore',
  'backbone',
], function(_, Backbone) {

  var StopModel = Backbone.Model.extend({
    defaults : {
      'STOP_ID':0,
      'DIRECTION_ID':'',
      'STOP_NAME':'',
      'LON':0,
      'LAT':0,
      'STATION_NAME':'',
      'STATION_DESCRIPTIVE_NAME':'',
      'PARENT_STOP_ID':0,
      'ADA':'0',
      'Red':'0',
      'Blue':'0',
      'Brn':'0',
      'G':'0',
      'P':'0',
      'Pexp':'0',
      'Y':'0',
      'Pink':'0',
      'Org':'0'
    },

    initialize: function() {
      if (!this.get('STOP_ID')) {
        this.set({'STOP_ID': this.defaults.STOP_ID});
      }
    },
  });
  return StopModel;
});
