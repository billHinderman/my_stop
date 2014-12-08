define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/component/_nav.html'
], function($, _, Backbone, navTemplate){

  var FooterView = Backbone.View.extend({
    el: $("#navigation"),

    initialize: function() {
      this.render();
    },

    render: function(){
      this.$el.html(navTemplate);
    }
  });

  return FooterView;
  
});
