<<<<<<< HEAD
angular.module('asset')
.service('apiServ',function($http,environment,$q){
    var handle = function(url,data,type){
        url = environment.host + url;

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
=======
<<<<<<< HEAD
angular.module('asset').service('apiServ', function (environment, $http, $q) {

  var handle = function (url, data, type) {
    console.log(url)
    url = environment.host + url;
    var deferred = $q.defer();
    var config = {};
    config.headers = {};
    if(localStorage['user_id']){
      config.headers['AliceSPA-UserId'] = localStorage['user_id'];
    }
    if(localStorage['web_token']){
      config.headers['AliceSPA-WebToken'] = localStorage['web_token'];
    }


    if (type === 'GET') {
      $http.get(url, config).then(
        function (data) {
          if (data.data.status == 'SUCCESS') {
            deferred.resolve(data.data.data);
          }else {
            deferred.reject(data);
          }
        },
        function (err) {
          deferred.reject(data);
        }
      )
    }
    
    if (type === 'POST') {
      $http.post(url, data, config).then(
        function (data) {
          if (data.data.status == 'SUCCESS') {
            deferred.resolve(data.data.data);
            console.log(data)
          }else {
            deferred.reject(data);
          }
        },
        function (err) {
          deferred.reject(data);
        }
      )
    }
    
    return deferred.promise;
  }
  
  return {
    'get': function (url){return handle(url, null, 'GET')},
    'post': function (url, data){return handle(url, data, 'POST')}
  }
})
=======
angular.module("asset").service("apiServ",function (environment,$http,$q) {
	var handle=function(url,data,type){
		url=environment.host+url;
		var deferred=$q.defer();
		var config={};
		config.headers={};
		if(localStorage["user_id"]){
			config.headers['AliceSPA-UserId'] = localStorage['user_id'];
		}
		if(localStorage['web_token']){
            config.headers['AliceSPA-WebToken'] = localStorage['web_token'];
        }
		if(type === "GET"){
			$http.get(url,config).then(
				function (data){
					if(data.data.status=="SUCCESS"){
						deferred.resolve(data.data.data)
					}else{
						deferred.reject(data);
					}
				},
				function (err){
					deferred.reject(data);
				}
			)
		}
		if(type === "POST"){
			$http.post(url,data,config).then(
				function (data){
					if(data.data.status=="SUCCESS"){
						deferred.resolve(data.data.data)
					}else{
						deferred.reject(data);
					}
				},
				function (err){
					deferred.reject(data);
				}
			)
		}
		return deferred.promise;
	}
	return {
		get : function(url){
			return handle(url,null,'GET');
		},
		post : function(url,data){
			return handle(url,data,"POST");
		}
	}
})
>>>>>>> 28002f9a22d81fe40883d1125a9c77b63e1ce19b
>>>>>>> f6cb997359034794f430c43a7e1f0d2292cca292
