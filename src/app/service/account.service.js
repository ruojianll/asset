angular.module("asset").service("accountServ",function (environment,$http,apiServ) {
	var login = function(){
        apiServ.post('/api/account/login',{user_name:environment.user_name,password:environment.password}).then(
            function (data){
                var user_id=data.id;
                var token=data.web_token;
                localStorage['user_id'] = user_id;
                localStorage['web_token'] = token;
            },
            function (err){
            	console.log(err);
            }
        )
    }
    var logout=function(){
    	delete localStorage["user_id"];
    	delete localStorage['web_token'];
    }
    var newbuilding=function(){
        apiServ.post("/eqp/api/building/new",{
            building_name:environment.building_name,
            building_location:environment.building_location
        }).then(
            function (data){
                console.log(data)
            },
            function (err){
                console.log(err)
            }
        )
    }
    return {
        'login':login,
        'logout':logout,
        'newbuilding':newbuilding
    }

})
