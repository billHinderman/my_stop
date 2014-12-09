define([
  'jquery',
  'underscore',
  'backbone',
  'assets/script/views/component/HeaderView.js',
  'assets/script/views/component/NavView.js',
  'assets/script/views/component/FooterView.js',
'assets/script/views/app.js',
], function($, _, Backbone, HeaderView, NavView, FooterView, AppView) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      'routes': 'showRoutes',
      'stops': 'showStops',
      '*actions': 'showStops'
    }
  });
  
  var initialize = function(){

    var app_router = new AppRouter;

    app_router.on('route:showRoutes', function () {    
        // Like above, call render but know that this view has nested sub views which 
        // handle loading and displaying data from the GitHub API  
        var appView = new AppView();
        
    });

    app_router.on('route:showStops', function () {    
        // Like above, call render but know that this view has nested sub views which 
        // handle loading and displaying data from the GitHub API  
        var appView = new AppView();
        appView.render();
    });

    // Unlike the above, we don't call render on this view as it will handle
    // the render call internally after it loads data. Further more we load it
    // outside of an on-route function to have it loaded no matter which page is
    // loaded initially.
    var headerView = new HeaderView();
    var navView = new NavView();
    var footerView = new FooterView();

    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});
