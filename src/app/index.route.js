
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
        url:"/-Assets",
        templateUrl:'app/template/assets.template.html'
      }).state("signIn.buildings",{
        url:"/-Buildings",
        templateUrl:'app/template/buildings.template.html'
      }).state("signIn.equipments",{
        url:"/-Equipments",
        templateUrl:'app/template/equipments.template.html'
      }).state("signIn.rooms",{
        url:"/Rooms",
        templateUrl:'app/template/asset.rooms.html'
      })
    // $urlRouterProvider.otherwise('signIn.assets');
  }
})();
