define([
  'underscore',
  'backbone',
  '../models/eta.js'
], function(_, Backbone, EtaModel){

  var EtasCollection = Backbone.Collection.extend({
    model: EtaModel,
    url: function() {
      return this.options.apiUrl;
    },

    parse: function(data) {
      var parsed = [];
        $(data).find('eta').each(function (index) {
            var bookTitle = $(this).find('lat').text();
            parsed.push({lat: bookTitle});
        });

        return parsed;
    },

    comparator: function(stop) {
      return stop.get('lat');
    }
    
  });

  return new EtasCollection;

});
