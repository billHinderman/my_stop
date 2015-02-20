define([
  'jquery',
  'underscore',
  'backbone',
  '../models/stop.js',
  '../collections/stops.js',
  './stop.js',
  'text!templates/page/stops.html'
], function($, _, Backbone, StopModel, StopsCollection, StopView, stopsTemplate){

  var StopsView = Backbone.View.extend({
    el: $("#stops-content"),

    events: {
      'click #geolocate-toggle' : 'geolocate',
    },

    initialize: function() {
      $('#stops-content').unbind();
      StopsCollection = this.options.collection;
      _.bindAll(this, 'addOneStop', 'addAllStops', 'render');

      StopsCollection.bind('add',     this.addOneStop);
      StopsCollection.bind('reset',   this.addAllStops);
    },

    render: function() {
      this.$el.html(stopsTemplate); 
      $('#etas-content').empty();
      $('body').removeClass('menu-open');
    },

    addOneStop: function(stop) {
      var view = new StopView({model: stop});
      this.$("#stops-list").append(view.render().el);
    },

    addAllStops: function() {
      this.$("#stops-spinner").remove();
      StopsCollection.each(this.addOneStop);
      this.$("#stops-list").prepend($('<li class="stop card geo"><h3><a href="#/closest" id="geolocate-toggle"><i class="mdi-device-gps-fixed"></i>Closest stop</a></h3></li>'));
    },

    geolocate: function(event) {
      event.preventDefault();
      $('<svg id="geo-spinner" class="spinner" role="progressbar" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg"> <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle> </svg>').appendTo($('#geolocate-toggle'));
      this.getClosestStop();
    },

    getClosestStop: function() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(compareStops);
      } else {
        console.log('No geolocate.');
      }

      function compareStops(position) {
        var userLat = position.coords.latitude;
        var userLon = position.coords.longitude;
        var closest = 0;
        var closestDistance = 999999;
        StopsCollection.each(function(stop) {
          var stopLat = stop.get('LAT');
          var stopLon = stop.get('LON');
          var distance = getDistance(userLat,userLon,stopLat,stopLon);
          if(distance < closestDistance) {
            closestDistance = distance;
            closest = stop;
          }
        });
        $('#geo-spinner').remove();
        window.location = closest.get('DISPLAY_URL');
      }
      function getDistance(lat1,lon1,lat2,lon2) {
        var R = 6371; // Radius of the earth in km
        var dLat = deg2rad(lat2-lat1);  // deg2rad below
        var dLon = deg2rad(lon2-lon1); 
        var a = 
          Math.sin(dLat/2) * Math.sin(dLat/2) +
          Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
          Math.sin(dLon/2) * Math.sin(dLon/2)
          ; 
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        var d = R * c; // Distance in km
        var miD = d/1.609; // Distance in mi
        return miD;
      }

      function deg2rad(deg) {
        return deg * (Math.PI/180);
      }
    }
  });

  return StopsView;
});
