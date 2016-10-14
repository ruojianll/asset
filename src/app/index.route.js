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
        templateUrl: 'app/template/rooms.template.html',  //改变文件index的路径
        controller: 'jxrooms'
        // controllerAs: 'main'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
