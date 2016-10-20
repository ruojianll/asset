
(function() {
  'use strict';

  angular
    .module('asset')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/index');
    $stateProvider.state('login', {
        url: '/login',
        templateUrl: 'app/template/login2.template.html',
      }).state("out",{
        url:"/index",
        templateUrl:'app/template/login.template.html'
      }).state("signIn",{
        url:"/signIn",
        templateUrl:'app/template/config.template.html'
      }).state("signIn.assets",{
        url:"/-Assets",
        views:{
        	'content':{
        		templateUrl:'app/template/assets.template.html'
        	}
        }
      }).state("signIn.buildings",{
        url:"/-Buildings",
        views:{
        	'content':{
        		templateUrl:'app/template/assets.template.html'
        	}
        }
      }).state("signIn.equipments",{
        url:"/-Equipments",
        views:{
        	'content':{
        		templateUrl:'app/template/equipments.template.html'
        	}
        }
      }).state("signIn.rooms",{
        url:"/-Rooms",
        views:{
        	'content':{
        		templateUrl:'app/template/asset.rooms.html'
        	}
        }
      }).state("assets",{
        url:"/signIn/-Assets",
        templateUrl:'app/template/assets.template.html'
      }).state("buildings",{
        url:"/signIn/-Buildings",
        templateUrl:'app/template/buildings.template.html'
      }).state("equipments",{
        url:"/signIn/-Equipments",
        templateUrl:'app/template/equipments.template.html'
      }).state("rooms",{
        url:"/signIn/-Rooms",
        templateUrl:'app/template/asset.rooms.html'
      })
  }
})();
