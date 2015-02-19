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
      getLocation();
      $('<svg id="geo-spinner" class="spinner" role="progressbar" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg"> <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle> </svg>').appendTo($('#geolocate-toggle'));
      function getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(showPosition);
        } else {
          alert('No geolocate.');
        }
      }
      function showPosition(position) {
        var lat = Math.round(position.coords.latitude * 100) / 100;
        var lon = Math.round(position.coords.longitude * 100) / 100;
        alert('Hang tight, I\'m working on this. You\'re at '+lat+','+lon+'');
        console.log("Latitude: " + position.coords.latitude + 
        " Longitude: " + position.coords.longitude); 
        $('#geo-spinner').remove();
      }
    },
  });

  return StopsView;
});
