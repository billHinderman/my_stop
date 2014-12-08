define([
  'jquery',
  'underscore',
  'backbone',
  '../../models/tweet/TweetModel.js',
  '../../collections/tweets/TweetsCollection.js',
  'text!templates/component/_summary.html'
], function($, _, Backbone, TweetModel, TweetsCollection, summaryTemplate){

  var SummaryView = Backbone.View.extend({
    el: $("#content"),


    render: function(){
      var data = {
        tweets: this.collection.models,
        size_all: this.collection.where({'is_archived':false}).length,
        size_completed: this.collection.where({'is_complete':true}).length,
        _: _ 
      };
      var compiledTemplate = _.template( summaryTemplate, data );
      $('#summary').html(compiledTemplate);
    },

  });

  return SummaryView;
  
});
