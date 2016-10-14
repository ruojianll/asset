(function() {
  'use strict';

  angular
    .module('asset')
    .config(routerConfig);
  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
<<<<<<< HEAD
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/template/assets.template.html',
        controller: 'assetsController'
      });
=======
    $stateProvider.state('login', {
        url: '/login',
        templateUrl: 'app/template/login2.template.html',
      }).state("signIn",{
        url:"/assets",
        templateUrl:'app/template/assets.template.html'
      }).state("assets",{
        url:"/assets",
        templateUrl:'app/template/assets.template.html'
      }).state("buildings",{
        url:"/buildings",
        templateUrl:'app/template/buildings.template.html'
      }).state("equipments",{
        url:"/equipments",
        templateUrl:'app/template/equipments.template.html'
      }).state("rooms",{
        url:"/rooms",
        templateUrl:'app/template/rooms.template.html'
      })
>>>>>>> 688d26924539ed37ff3074f47dd6ddacd18b6b4d

    // $urlRouterProvider.otherwise('/h/login');
  }
  
})();
