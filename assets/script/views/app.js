define([
  'jquery',
  'underscore',
  'backbone',
  '../models/stop.js',
  '../collections/stops.js',
  './stops.js',
  'text!templates/page/_page_container.html'
], function($, _, Backbone, StopModel, StopsCollection, StopView, stopsTemplate){

  var StopsView = Backbone.View.extend({
    el: $("#content"),
    
    events: {
      'click .summary-toggle .toggle' : 'toggleView'
    },

    initialize: function() {
      _.bindAll(this, 'addOne', 'addAll', 'render');

      StopsCollection.bind('add',     this.addOne);
      StopsCollection.bind('reset',   this.addAll);

      StopsCollection.fetch();
    },

    render: function() {
      this.$el.html(stopsTemplate);
    },

    addOne: function(stop) {
      var view = new StopView({model: stop});
      this.$("#tweet-list").append(view.render().el);
    },

    // Add all items in the **Todos** collection at once.
    addAll: function() {
      StopsCollection.each(this.addOne);
    },
    
    toggleView: function(e) {
      
    }
  });

  return StopsView;
});
