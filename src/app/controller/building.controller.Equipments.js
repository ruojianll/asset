angular.module("asset").controller("Equipments",function($scope,$http,environment){
	console.log('hello')
	$scope.maxSize = 1;
	$scope.bigTotalItems = 175;
	$scope.bigCurrentPage = 1;
//获取所有设备
	$http.post(environment.host+'/eqp/api/equipment/all').then(
		function (data){
			alert(1)
			//console.log(data);
		},
		function (err){
			alert(2)
			//console.log(err);
		}
	);
//编辑设备
//新建设备
//删除设备

});