define([
  'jquery',
  'underscore',
  'backbone',
  '../models/eta.js',
  '../collections/etas.js',
  './eta.js',
  'text!templates/page/etas.html'
], function($, _, Backbone, EtasModel, EtasCollection, EtaView, etasTemplate){

  var EtasView = Backbone.View.extend({
    el: $("#content"),

    initialize: function() {
      EtasCollection = this.options.collection;
      _.bindAll(this, 'addOneEta', 'addAllEtas', 'render');

      EtasCollection.bind('add',     this.addOneEta);
      EtasCollection.bind('reset',   this.addAllEtas);
    },

    render: function() {
      this.$el.html(etasTemplate); 
    },

    addOneEta: function(eta) {
      var view = new EtaView({model: eta});
      this.$("#etas-list").append(view.render().el);
    },

    addAllEtas: function() {
      EtasCollection.each(this.addOneEta);
    },
  });

  return EtasView;
});
