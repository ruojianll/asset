angular.module('asset').controller("login",function(environment,accountServ,$scope){
	$(".btn-default").click(function(){
		environment.username = $(".name").val();
		environment.password = $(".password").val();
		accountServ.login();
//	  	$scope.ncc = localStorage.username;
		
		
	})
});