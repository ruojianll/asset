
(function() {
  'use strict';

  angular
    .module('asset')
    .config(routerConfig);
  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider.state('login', {
        url: '/login',
        templateUrl: 'app/template/login2.template.html',
      }).state("signIn",{
        url:"/signIn",
        templateUrl:'app/template/config.template.html'
      }).state("signIn.assets",{
        url:"/assets",
        templateUrl:'app/template/assets.template.html'
      }).state("signIn.buildings",{
        url:"/buildings",
        templateUrl:'app/template/buildings.template.html'
      }).state("signIn.equipments",{
        url:"/equipments",
        templateUrl:'app/template/equipments.template.html'
      }).state("signIn.rooms",{
        url:"/rooms",
        templateUrl:'app/template/rooms.template.html'
      })
    // $urlRouterProvider.otherwise('signIn.assets');
  }
  
})();