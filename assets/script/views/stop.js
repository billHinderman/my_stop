define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/page/stop.html'
], function($, _, Backbone, stopTemplate){
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
      $.ajax({
        url: $(e.target).attr('href')
      }).done(function(data) {
        //var etas = data.getElementsByTagName('eta')
        //console.log(etas);
        var EtasCollection = new EtasCollection();
      });
    }
  });

  return StopView;
});

