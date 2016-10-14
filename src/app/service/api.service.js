<<<<<<< HEAD
angular.module('asset').service('apiServ',function(environment,$http,$q){
	var handle=function(url,data,type){

		url=environment.host+url;
		var deferred = $q.defer();

		var config = {};
=======
angular.module('asset').service('apiServ',function($http,environment,$q){
    var handle = function(url,data,type){
        url = environment.host + url;
        var deferred = $q.defer();
        var config = {};
>>>>>>> 688d26924539ed37ff3074f47dd6ddacd18b6b4d
        config.headers = {};
        if(localStorage['user_id']){
            config.headers['AliceSPA-UserId'] = localStorage['user_id'];
        }
        if(localStorage['web_token']){
            config.headers['AliceSPA-WebToken'] = localStorage['web_token'];
        }
<<<<<<< HEAD

		if(type === 'GET'){
			$http.get(url,config).then(
				function(data){
					if(data.data.status == 'SUCCESS'){
						 deferred.resolve(data.data.data);

					}
				},function(err){
					 deferred.reject(data);
				});
		}
		if(type === 'POST'){
			$http.post(url,data,config).then(
				function(data){
					if(data.data.status == 'SUCCESS'){
						deferred.resolve(data.data.data);
					}
				},function(err){
					deferred.reject(data);
				});
		}
		return deferred.promise;
	}
	return {
		get:function(url){return handle(url,null,'GET')},
		post:function(url,data){return handle(url,data,'POST')}
	}
})
=======
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
>>>>>>> 688d26924539ed37ff3074f47dd6ddacd18b6b4d
