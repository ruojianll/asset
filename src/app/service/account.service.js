<<<<<<< HEAD
angular.module('asset')
.service('accountServ',function(environment,$http,apiServ){
    var login = function(){
    apiServ.post('/api/account/login',{user_name:environment.username,password:environment.password}).then(
        function(data){
            var user_id = data.id;
            var token = data.web_token;
            localStorage['user_id'] = user_id;
            localStorage['web_token'] = token;
        },
        function(err){

        }
        )
    }
    var logout = function(){
        delete localStorage['user_id'];
        delete localStorage['web_token'];
    }
    return {
        'login':login,
        'logout':logout
    }
});


=======
<<<<<<< HEAD
angular.module('asset').service('accountServ', function(environment, $http, apiServ){
    var login = function(){
      apiServ.post(
        '/api/account/login',
        {
          'user_name': environment.user_name,
          'password': environment.password
        }
      ).then(
        function(data){
          var user_id = data.id;
          var token = data.web_token;
          localStorage['user_id'] = user_id;
          localStorage['web_token'] = token;
        },
        function(err){
          
        }
      )
    }
    var logout = function () {
      delete localStorage['user_id'];
      delete localStorage['web_token'];
    }
    
    // 获取建筑；
    var getBud = function () {
      apiServ.post(
        '/eqp/api/building/all',
        {}
      ).then(
        function (data) {
          console.log(data)
        },
        function (err) {
          console.log(err)
        }
      )
    }
    
    // 新建建筑；
    var setBud = function(){
      apiServ.post(
        '/eqp/api/building/new',
        {
          'building_name': environment.building_name,
          'building_location': environment.building_location
        }
      ).then(
        function(data){
          console.log(data);
        },
        function(err){
          console.log(err);
        }
      )
    }
    
    // 编辑建筑；
    var edtBud = function(){
      apiServ.post(
        '/eqp/api/building/edit',
        {
          'building_id': environment.building_id,
          'building_name': environment.building_name,
          'building_location': environment.building_location
        }
      ).then(
        function(data){
          console.log(data);
        },
        function(err){
          console.log(err);
        }
      )
    }
    
    // 删除建筑；
    var delBud = function(){
      apiServ.post(
        '/eqp/api/building/delete',
        {
          'building_id': environment.building_id
        }
      ).then(
        function(data){
          console.log(data);
        },
        function(err){
          console.log(err);
        }
      )
    }
    
    return {
        'login':login,
        'logout':logout,
        'setBud':setBud,
        'getBud':getBud,
        'edtBud':edtBud,
        'delBud':delBud
    }
});
=======
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
>>>>>>> 28002f9a22d81fe40883d1125a9c77b63e1ce19b
>>>>>>> f6cb997359034794f430c43a7e1f0d2292cca292
