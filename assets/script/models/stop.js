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
      'STOP_URL':'',
      'DISPLAY_URL':'',
      'ROUTE_LIST':'',
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
      this.set({'STOP_URL': 'http://cta.billhinderman.com/assets/script/rebar/proxy.php?url=http://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?key=a3da90a8f09e423fb3084498e9889227&mapid='+(this.get('PARENT_STOP_ID'))});
      
      var routes = [];

      if(this.get('Red') === '1') {routes.push('red');}
      if(this.get('Blue') === '1') {routes.push('red');}
      if(this.get('Brn') === '1') {routes.push('red');}
      if(this.get('G') === '1') {routes.push('green');}
      if(this.get('P') === '1') {routes.push('purple');}
      if(this.get('Pexp') === '1') {routes.push('pexp');}
      if(this.get('Y') === '1') {routes.push('yellow');}
      if(this.get('Pink') === '1') {routes.push('pink');}
      if(this.get('Org') === '1') {routes.push('orange');}
      this.set({'ROUTE_LIST': routes});

      this.set({'DISPLAY_URL': '/'+(this.get('ROUTE_LIST'))+'/'+(this.get('PARENT_STOP_ID'))});
    },
  });
  return StopModel;
});
