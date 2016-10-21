angular.module('asset').controller('up',function($scope,accountServ,environment){
//	$('#loginin').html(localStorage.username)
//	  $scope.username=localStorage.username;
	  $scope.out=function(){
	  	accountServ.logout();
	  	localStorage.clear();
	  	$('#loginin').html('未登录');
//	  	$scope.ncc = 'weidenglu';
//	  	location.reload()
	  }
})
