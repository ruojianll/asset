(function() {
  'use strict';

  angular
    .module('asset')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/template/assets.template.html',
        controller: 'assetsController'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
