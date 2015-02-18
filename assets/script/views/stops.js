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

    initialize: function() {
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
    },
  });

  return StopsView;
});
