angular.module("asset").controller("loginIndex",function($scope,$state){
	// alert(localStorage.username)
	if(localStorage.username){
		$state.go("signIn.assets");
	}
})