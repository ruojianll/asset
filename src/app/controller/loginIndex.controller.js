angular.module("asset").controller("loginIndex",function($scope,$state){
	// alert(localStorage.username)
	if(sessionStorage.username){
		$state.go("signIn.assets");
	}
})