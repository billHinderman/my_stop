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
      this.StopNm = this.options.stopNm;
      console.log(this.StopNm);
      closeUrl = this.options.close;
      _.bindAll(this, 'addOneEta', 'addAllEtas', 'render');

      this.EtasCollection.bind('add',     this.addOneEta);
      this.EtasCollection.bind('reset',   this.addAllEtas);

      $(window).on("resize", this.resizeModal);
    },

    render: function() {
      this.$el.html(etasTemplate);
      $('<h2 id="stop-eta">'+this.StopNm+'</h2>').prependTo(this.$("#etas-nav"));
      this.$('#etas-list').css('max-height',''+$(window).height()-112+'px');
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
      $('<svg id="etas-spinner" class="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg"><circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle></svg>').prependTo('#etas-content');
      this.$('#etas-list').empty();
      this.EtasCollection.fetch();
    },

    resizeModal: function() {
      this.$('#etas-list').css('max-height',''+$(window).height()-112+'px');
      $("#etas-content").css('max-height',''+$(window).height()-32+'px');
      $("#etas-content").css('width',''+$('#content').width()-32+'px');
    },
  });

  return EtasView;
});
