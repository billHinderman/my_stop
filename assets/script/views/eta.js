define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/page/eta.html'
], function($, _, Backbone, etaTemplate){
    var EtaView = Backbone.View.extend({
    //... is a list tag.
    tagName:  'li',
    className: 'eta card float-clear',

    // Cache the template function for a single item.
    template: _.template(etaTemplate),


    initialize: function(){
      _.bindAll(this, 'render');
      this.model.bind('change', this.render);
      this.model.view = this;
    },

    render: function(){
      $(this.el).html(this.template(this.model.toJSON()));
      $(this.el).addClass('route-'+this.model.get('trDr'));
      return this;
    },
  });

  return EtaView;
});

