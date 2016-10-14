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

    // $urlRouterProvider.otherwise('/h/login');
  }
  
})();
