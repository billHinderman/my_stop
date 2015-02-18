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
    el: $("#etas-content"),

    events: {
      'click #eta-refresh' : 'refreshEtas',
    },

    initialize: function() {
      EtasCollection = this.options.collection;
      closeUrl = this.options.close;
      _.bindAll(this, 'addOneEta', 'addAllEtas', 'render');

      EtasCollection.bind('add',     this.addOneEta);
      EtasCollection.bind('reset',   this.addAllEtas);
    },

    render: function() {
      this.$el.html(etasTemplate);
      this.$('#etas-info').append('');
      $(this.el).css('max-height',''+$( window ).height()-32+'px');
      this.$('#eta-close').attr('href',closeUrl);
      $('body').removeClass('menu-open');
    },

    addOneEta: function(eta) {
      var view = new EtaView({model: eta});
      this.$("#etas-list").append(view.render().el);
    },

    addAllEtas: function() {
      this.$('#etas-spinner').remove();
      if(EtasCollection.length > 0) {
      EtasCollection.each(this.addOneEta);
      } else {
        this.$('#etas-list').replaceWith('<h3>No trains.</h3>')
      }
    },

    refreshEtas: function(e) {
      e.preventDefault();
    },
  });

  return EtasView;
});
