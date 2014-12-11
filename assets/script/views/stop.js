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

    // Cache the template function for a single item.
    template: _.template(stopTemplate),

    events: {
      'click .stop-link' : 'pollXML'
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

    pollXML: function(e) {
      e.preventDefault();
      var ctaUrl = $(e.target).attr('href');
      var displayUrl=$(e.target).data('href');
      var etasCollection = new EtasCollection([],{apiUrl: ctaUrl});
      etasCollection.fetch();
      console.log(etasCollection);
      var view = new EtasView({collection: etasCollection});
      view.render();
      app_router.navigate(displayUrl, {trigger: false});
    }
  });

  return StopView;
});

