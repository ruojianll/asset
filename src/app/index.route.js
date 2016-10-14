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
        templateUrl: 'app/template/Equipments.building.template.html',
        controller: 'Equipments'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
