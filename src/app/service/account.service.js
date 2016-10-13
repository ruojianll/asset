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
