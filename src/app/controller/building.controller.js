angular.module("asset").controller("budCtrl",function ($scope,$http,accountServ,apiServ){
	accountServ.login();
	accountServ.newbuilding()
})