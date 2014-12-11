define([
  'jquery',
  'underscore',
  'backbone',
  '../models/stop.js',
  '../collections/stops.js',
  './stop.js',
  'text!templates/page/_page_container.html'
], function($, _, Backbone, StopModel, StopsCollection, StopView, stopsTemplate){

  var StopsView = Backbone.View.extend({
    el: $("#content"),

    initialize: function() {
      _.bindAll(this, 'addOneStop', 'addAllStops', 'render');

      StopsCollection.bind('add',     this.addOneStop);
      StopsCollection.bind('reset',   this.addAllStops);

      StopsCollection.fetch();
    },

    render: function() {
      this.$el.html(stopsTemplate); 
    },

    addOneStop: function(stop) {
      var view = new StopView({model: stop});
      this.$("#tweet-list").append(view.render().el);
    },

    addAllStops: function() {
      StopsCollection.each(this.addOneStop);
    },
  });

  return StopsView;
});
