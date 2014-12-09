define([
  'underscore',
  'backbone',
], function(_, Backbone) {

  var EtaModel = Backbone.Model.extend({
    defaults : {
      'staId':0,
      'staNm':'',
      'destNm':'',
      'lon':0,
      'lat':0,
      'isApp':0,
      'isDly':0,
      'rt':'',
      'dateTime':'',
      'prdt':'',
      'arrT':'',
    },

    initialize: function() {
      if(this.get('isApp') === 1) {
        this.set({'dateTime':'Approaching'});
      } else if(this.get('isDly') === 1) {
        this.set({'dateTime':'Delayed'});
      } else {
        var prdt = new Date(this.get('prdt'));
        var arrt = new Date(this.get('arrT'));
        var arrMinutes = prdt.getMinutes() - arrt.getMinutes();
        this.set({'dateTime':arrMinutes});
      }
    },
  });
  return EtaModel;
});
