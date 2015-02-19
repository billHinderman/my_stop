define([
  'underscore',
  'backbone',
], function(_, Backbone) {

  var StopModel = Backbone.Model.extend({
    defaults : {
      'DISPLAY_URL':'',
      'LINE':'',
      'STATION':0,
      'STATION_NAME':'',
      'GEO_LAT':'',
      'GEO_LON':'',
    },

    initialize: function() {
      this.set({'DISPLAY_URL': '#/'+(this.get('LINE'))+'/'+(this.get('STATION'))});
    },
  });
  return StopModel;
});
