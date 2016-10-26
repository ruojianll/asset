angular.module('asset').controller("login",function(environment,accountServ,$scope){
	$(".btn-default").click(function(){
		environment.username = $(".name").val();
		environment.password = $(".password").val();
		accountServ.login();
		document.getElementById('log').style.display='none';
		document.getElementById('out').style.display='block';
	})
});