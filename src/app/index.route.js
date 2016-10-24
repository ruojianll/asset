
(function() {
  'use strict';

  angular
    .module('asset')
    .config(routerConfig);
  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/index');
    // $urlRouterProvider.when("","/index")//默认显示页面
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
        		templateUrl:'app/template/buildings.template.html'
        	}
        }
      }).state("signIn.equipments",{
        url:"/-Equipments",
        views:{
        	'content':{
        		templateUrl:'app/template/Equipments.template.html'
        	}
        }
      }).state("signIn.rooms",{
        url:"/-Rooms",
        views:{
        	'content':{
        		templateUrl:'app/template/asset.rooms.html'
        	}
        }
      })
  }
})();
