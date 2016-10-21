angular.module('asset').controller('up',function($scope,accountServ,environment){
		
//		if(sessionStorage.username==undefined){
//			$('#loginin').html('未登录')
//			document.getElementById('log').style.display='block';
//			document.getElementById('out').style.display='none';
//			
//		}else if(sessionStorage.username!==''){
//			$('#loginin').html(sessionStorage.username);
//			document.getElementById('log').style.display='none';
//			document.getElementById('out').style.display='block';
//		}
		if(sessionStorage.username){
			document.getElementById('log').style.display='none';
			document.getElementById('out').style.display='block';
		}else{
			document.getElementById('log').style.display='block';
			document.getElementById('out').style.display='none';
		}
	  $scope.out=function(){
	  	accountServ.logout();
	  	sessionStorage.clear();
	  	document.getElementById('log').style.display='block';
			document.getElementById('out').style.display='none';
	  }
})
