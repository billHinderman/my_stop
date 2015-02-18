define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/page/home.html'
], function($, _, Backbone, homeTemplate){

  var HomeView = Backbone.View.extend({
    el: $("#stops-content"),

    initialize: function() {
      this.render();
    },
    render: function(){
      this.$el.html(homeTemplate);
    }
  });


  return HomeView;
  
});
