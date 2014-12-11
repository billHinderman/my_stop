define([
  'jquery',
  'underscore',
  'backbone',
  'assets/script/views/component/header.js',
  'assets/script/views/component/nav.js',
  'assets/script/views/component/footer.js',
'assets/script/views/stops.js',
], function($, _, Backbone, HeaderView, NavView, FooterView, StopsView) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      ':LINE': 'showRoutes',
      ':LINE/:PARENT_STOP_ID': 'showEtas',
      '*actions': 'renderAll'
    }
  });
  
  var initialize = function(){

    app_router = new AppRouter;

    app_router.on('route:showRoutes', function (LINE) {    
        // Like above, call render but know that this view has nested sub views which 
        // handle loading and displaying data from the GitHub API 
        //var routeView = new RouteView();
        //routeView.render();
        $('#content').append('hello');
    });

    app_router.on('route:renderAll', function () {    
        // Like above, call render but know that this view has nested sub views which 
        // handle loading and displaying data from the GitHub API  
        var stopsView = new StopsView();
        stopsView.render();
    });

    app_router.on('route:showEtas', function (LINE,PARENT_STOP_ID) {    
        // Like above, call render but know that this view has nested sub views which 
        // handle loading and displaying data from the GitHub API  
    });

    // Unlike the above, we don't call render on this view as it will handle
    // the render call internally after it loads data. Further more we load it
    // outside of an on-route function to have it loaded no matter which page is
    // loaded initially.
    var headerView = new HeaderView();
    var navView = new NavView();
    navView.render();
    var footerView = new FooterView();

    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});
