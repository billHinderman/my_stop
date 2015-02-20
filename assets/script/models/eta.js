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
      'trDr':'',
      'dateTime':'',
      'distance':0,
      'prdt':'',
      'arrT':'',
    },

    initialize: function() {
      if(this.get('isApp') === '1') {
        this.set({'dateTime':'Due'});
        this.set({'distance':0});
      } else {
        var prdt = this.makeDate(this.get('prdt'));
        var arrt = this.makeDate(this.get('arrT'));
        var arrMinutes =  Math.round((Math.abs(prdt - arrt))/60000);
        this.set({'distance':arrMinutes});
        if(this.get('isDly') === '1') {
          this.set({'dateTime':'Delayed'});
        } else {
          this.set({'dateTime':''+arrMinutes+' <small>minutes</small>'});
        }
      }
      
    },

    makeDate: function(dateString) {
      var date = dateString.split(' ')[0],
      year = date.substring(0,3),
      month = date.substring(4,5),
      day = date.substring(6);

      var time = dateString.split(' ')[1],
      hours = time.split(':')[0],
      minutes = time.split(':')[1],
      seconds = time.split(':')[2];
      return new Date(year,month,day,hours,minutes,seconds);
    }
  });
  return EtaModel;
});
