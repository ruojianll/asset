(function() {
  'use strict';

  angular.module('asset', ['ui.router', 'ui.bootstrap', 'toastr']);

})();
var boolean = false;
if(localStorage.username){
		$('#loginin').html(localStorage.username)
}else{
		$('#loginin').html('未登录')
}

function Prompt(str){
	$('.Prompt').html(str)
	$('.Prompt').css({'opacity':'1','z-index':'999'})
	setTimeout(function(){
		$('.Prompt').css({'opacity':'0','z-index':'0'})
	},1000)
}