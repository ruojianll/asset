(function() {
  'use strict';

  angular
    .module('asset')
    .config(config);

  /** @ngInject */
  function config($stateProvider) {
    // $urlRouterProvider.when('','/login/user')
    $stateProvider.state('log',{
      url:'/login',
      templateUrl:'app/template/login.html'
    })
  }

})();
