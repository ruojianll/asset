angular.module('asset').controller('menu',function($scope,$state){
	$('a').click(function(){
		$(this).addClass('active').siblings().removeClass('active')
	})
	$state.go("signIn.assets");
}) 