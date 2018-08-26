(function() {
  'use strict';

  app.config(rutas);

  rutas.$inject = ['$stateProvider', '$urlRouterProvider'];

  function rutas($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    // Genera todas las rutasa las cuales se pueden acceder
    $stateProvider
      .state('index', {
        url: '/',
        templateUrl: 'views/main.html',
        controller: 'control_main as control'
      })
      .state('search', {
        url: '/search/:texto?',
        templateUrl: 'views/search.html',
        controller: 'control_search as control'
      })
      .state('watch', {
        url: '/watch/:cod?',
        templateUrl: 'views/view.html',
        controller: 'control_detail_video as control'
      });
  }
})();
