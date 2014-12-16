define([
  'jquery',
  'underscore',
  'backbone',
  './etas.js',
  '../collections/etas.js',
  'text!templates/page/stop.html'
], function($, _, Backbone, EtasView, EtasCollection, stopTemplate){
    var StopView = Backbone.View.extend({
    //... is a list tag.
    tagName:  "li",
    className: 'stop card float-clear',

    // Cache the template function for a single item.
    template: _.template(stopTemplate),

    initialize: function(){
      _.bindAll(this, 'render');
      this.model.bind('change', this.render);
      this.model.view = this;
    },

    render: function(){
      $(this.el).html(this.template(this.model.toJSON()));
      return this;
    },
  });

  return StopView;
});

