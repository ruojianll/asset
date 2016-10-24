angular.module('asset').service('accountServ',function(environment,$http,apiServ,$state){

    var login = function(){
	    apiServ.post('/api/account/login',{user_name:environment.username,password:environment.password}).then(
	        function(data){
	            var user_id = data.id;
	            var token = data.web_token;
	            localStorage['user_id'] = user_id;
	            localStorage['web_token'] = token;
	           	sessionStorage.username=$(".name").val();
				Prompt('登录成功');
				$('#loginin').html(sessionStorage.username)
				$state.go("signIn.assets");
	        },
	        function(err){
				var oDebug=document.getElementById('debug');
				oDebug.style.display='block';
				oDebug.onclick=function(){
					oDebug.style.display='none';
				}
	        }
        )
    }
    var logout = function(){
        delete localStorage['user_id'];
        delete localStorage['web_token'];
        $('#loginin').html('未登录')
    }
    return {
        'login':login,
        'logout':logout
    }
});