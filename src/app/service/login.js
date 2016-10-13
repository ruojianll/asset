angular.module('gulpAngular').service('dengLu',function(user,$http,apiServ){
    var login = function(){
    apiServ.post(user.host+'/api/account/login',{user_name:user.username,password:user.password}).then(
        function(data){
            var user_id = data.id;
            var token = data.web_token;
            localStorage['user_id'] = user_id;
            localStorage['web_token'] = token;
        },
        function(err){
            console.log(err);
        }
        );
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
angular.module('gulpAngular').service('apiServ',function($http,user,$q){
    var handle = function(url,data,type){
        // url = user.host + url ;
        var deferred = $q.defer();
        var config = {};
        config.headers = {};
        if(localStorage['user_id']){
            config.headers['AliceSPA-UserId'] = localStorage['user_id'];
        }
        if(localStorage['web_token']){
            config.headers['AliceSPA-WebToken'] = localStorage['web_token'];
        }
        if(type === 'GET'){
            $http.get(url,config).then(
                function(data){
                    if (data.data.status == 'SUCCESS') {
                        deferred.resolve(data.data.data);
                    }
                    else{
                        deferred.reject(data);
                    }
                },
                function(err){
                    deferred.reject(data);
                }
            );
        }
        if(type === 'POST'){
            $http.post(url,data,config).then(
                function(data){
                    if (data.data.status == 'SUCCESS') {
                        deferred.resolve(data.data.data);
                    }
                    else{
                        deferred.reject(data);
                    }
                },
                function(err){
                    deferred.reject(data);
                }

                );
        }
        return deferred.promise;
    }
    return {
        get:function(url){return handle(url,null,'GET');},
        post:function(url,data){return handle(url,data,'POST');}
    }
});