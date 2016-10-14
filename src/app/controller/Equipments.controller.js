angular.module("asset").controller("Equipments",function($scope,$http,environment,apiServ,accountServ){
	console.log('hello')
	accountServ.login()
	$scope.maxSize = 1;
	$scope.bigTotalItems = 175;
	$scope.bigCurrentPage = 1;


//获取所有设备
//$scope.qq=false;
    apiServ.post(
    	"/eqp/api/equipment/all",
    	{}
    ).then(
        function (data){
        	alert(1)
        	console.log(data)
            // $scope.a=data;
            // $scope.show=function($index){
            //     $scope.qq=!$scope.qq;
            //     // console.log($index)
            //     console.log($scope.a[$index])
            //     $scope.b = $scope.a[$index]
            // }
        },
        function (err){
        	alert(2)
            console.log(err)
        }
    )

//编辑设备
//新建设备
//删除设备

});