define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/component/_header.html'
], function($, _, Backbone, headerTemplate){

  var FooterView = Backbone.View.extend({
    el: $("#header"),

    initialize: function() {
      this.render();
    },

    render: function(){
      this.$el.html(headerTemplate);
      var $head = this.$el.find('[data-fill]');
      var modifier = $head.attr('data-fill-size') ? $head.attr('data-fill-size') : 1;
      if($head.attr('data-fill') == 'strict') {
        $head.css({
          "height":($(window).height())*modifier,
          "position":"relative"});
      } else {
        $head.css({
          "min-height":($(window).height())*modifier,
          "position":"relative"});
      }
    }
  });

  return FooterView;
  
});
