angular.module('asset').service('accountServ',function(environment,$http,apiServ,$state){

    var login = function(){
	    apiServ.post('/api/account/login',{user_name:environment.username,password:environment.password}).then(
	        function(data){
	            var user_id = data.id;
	            var token = data.web_token;
	            localStorage['user_id'] = user_id;
	            localStorage['web_token'] = token;
	           	localStorage.username=$(".name").val();
				Prompt('登录成功');
				$('#loginin').html(localStorage.username)
				$state.go("signIn");
	        },
	        function(err){
	
	        }
        )
    }
//  var breack=function(){
//  	localStorage.username=$(".name").val();
//  	Prompt('登录成功')
//		$state.go("signIn");
//  }
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