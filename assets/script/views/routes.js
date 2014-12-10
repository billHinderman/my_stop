define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/page/route.html'
], function($, _, Backbone, routeTemplate){
    var RouteView = Backbone.View.extend({
    //... is a list tag.
    tagName:  "li",

    // Cache the template function for a single item.
    template: _.template(routeTemplate),

    events: {
    },


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

  return RouteView;
});

