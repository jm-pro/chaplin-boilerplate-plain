 requirejs.config({
    // The path where your JavaScripts are located
    baseUrl: './js/',
    // Specify the paths of vendor libraries
    paths: {
      jquery: '../node_modules/jquery/dist/jquery',
      underscore: '../node_modules/underscore/underscore',
      backbone: '../node_modules/backbone/backbone',
      handlebars: '../node_modules/handlebars/dist/handlebars',
      text: '../node_modules/requirejs-text/text',
      chaplin: '../node_modules/chaplin/chaplin'
    },
    // Underscore and Backbone are not AMD-capable per default,
    // so we need to use the AMD wrapping of RequireJS
    shim: {
      underscore: {
        exports: '_'
      },
      backbone: {
        deps: ['underscore', 'jquery'],
        exports: 'Backbone'
      },
      handlebars: {
        exports: 'Handlebars'
      }
    }
    // For easier development, disable browser caching
    // Of course, this should be removed in a production environment
    //, urlArgs: 'bust=' +  (new Date()).getTime()
  });


  // Bootstrap the application
  require(['application', 'routes'], function(Application, routes) {
    new Application({routes: routes, 
                     controllerSuffix: '-controller', 
                    root: '/chaplin-no-npm/'});
  });
