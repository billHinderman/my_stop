define([
  'jquery',
  'underscore',
  'backbone',
  '../../models/route.js',
  '../../collections/routes.js',
  '../routes.js',
  'text!templates/component/_nav.html'
], function($, _, Backbone, RouteModel, RoutesCollection, RouteView, navTemplate){

  var NavView = Backbone.View.extend({
    el: $("#navigation"),

    events: {
      'click' : 'toggleNav',
    },

    initialize: function() {
      _.bindAll(this, 'addOne', 'addAll', 'render');

      RoutesCollection.bind('add',     this.addOne);
      RoutesCollection.bind('reset',   this.addAll);

      RoutesCollection.fetch();
    },

    render: function(){
      this.$el.html(navTemplate);
    },

    addOne: function(route) {
      var view = new RouteView({model: route});
      this.$("#route-list").append(view.render().el);
    },

    addAll: function() {
      RoutesCollection.each(this.addOne);
    },

    toggleNav: function() {
      $('body').toggleClass('menu-open');
    },
  });

  return NavView;
  
});
