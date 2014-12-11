define([
  'underscore',
  'backbone',
  '../models/eta.js'
], function(_, Backbone, EtaModel){

  var EtasCollection = Backbone.Collection.extend({
    model: EtaModel,
    url: function() {
      return this.apiUrl;
    },

    initialize: function(models, options) {
      this.apiUrl = options.apiUrl;
    },

    parse: function(data) {
      var etas = data.getElementsByTagName('eta');
      console.log(etas.length);
      var parsed = [];
        $(data).find('eta').each(function (index) {
            var _staId = $(this).find('staId').text();
            var _staNm = $(this).find('staNm').text();
            var _destNm = $(this).find('destNm').text();
            var _lat = $(this).find('lat').text();
            var _lon = $(this).find('lon').text();
            var _isApp = $(this).find('isApp').text();
            var _isDly = $(this).find('isDly').text();
            var _prdt = $(this).find('prdt').text();
            var _arrT = $(this).find('arrT').text();
            var _rt = $(this).find('rt').text();
            var _trDr = $(this).find('trDr').text();
            parsed.push(
              {
                staId: _staId,
                staNm: _staNm,
                destNm: _destNm,
                lat: _lat,
                lon: _lon,
                isApp: _isApp,
                isDly: _isDly,
                prdt: _prdt,
                arrT: _arrT,
                rt: _rt,
                trDr: _trDr,
              });
        });
        return parsed;
    },

    fetch: function() {
        var options = {dataType: 'xml'};
        return Backbone.Collection.prototype.fetch.call(this, options);
    },

    comparator: function(stop) {
      return [stop.get('distance'),stop.get('trDr')];
    }
    
  });

  return EtasCollection;

});
