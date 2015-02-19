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
      $('#etas-content').unbind();
      this.EtasCollection = this.options.collection;
      closeUrl = this.options.close;
      _.bindAll(this, 'addOneEta', 'addAllEtas', 'render');

      this.EtasCollection.bind('add',     this.addOneEta);
      this.EtasCollection.bind('reset',   this.addAllEtas);

      $(window).on("resize", this.resizeModal);
    },

    render: function() {
      this.$el.html(etasTemplate);
      this.$('#etas-info').append('');
      $(this.el).css('max-height',''+$(window).height()-32+'px');
      $(this.el).css('width',''+$('#content').width()-32+'px');
      this.$('#eta-close').attr('href',closeUrl);
      $('body').removeClass('menu-open');
    },

    addOneEta: function(eta) {
      var view = new EtaView({model: eta});
      this.$("#etas-list").append(view.render().el);
    },

    addAllEtas: function() {
      this.$('#etas-spinner').remove();
      if(this.EtasCollection.length > 0) {
        this.EtasCollection.each(this.addOneEta);
      } else {
        this.$('#etas-list').empty();
        this.$('#etas-list').append('<li class="no-trains"><h3>No trains.</h3></li>')
      }
    },

    refreshEtas: function(e) {
      e.preventDefault();
      this.$('#etas-list').empty();
      this.EtasCollection.fetch();
    },

    resizeModal: function() {
      $("#etas-content").css('max-height',''+$(window).height()-32+'px');
      $("#etas-content").css('width',''+$('#content').width()-32+'px');
    },
  });

  return EtasView;
});
