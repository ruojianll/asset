angular.module("asset").controller("budCtrl",function ($scope,$http,accountServ,apiServ,environment){
	// accountServ.login("lijing","123456");
    // accountServ.logout();
	// accountServ.newbuilding();
	// $scope.show=function($index){
	// 	$scope.qq=!$scope.qq;
 //        console.log($index)
	// }
	    $scope.qq=false;
        apiServ.post("/eqp/api/building/all",{}).then(
            function (data){
                $scope.a=data;
                $scope.show=function($index){
                    $scope.qq=!$scope.qq;
                    // console.log($index)
                    // console.log($scope.a[$index])
                    $scope.b = $scope.a[$index]
                    apiServ.post("/eqp/api/building/room/all",{"building_id":$scope.b.id}).then(
                        function (data) {
                            $scope.c=data;
                            // console.log(data);
                        },
                        function (err){
                            console.log(err);
                        }
                    )
                }
            },
            function (err){
                console.log(err)
            }
        )
        $scope.edit=function(){
            apiServ.post("/eqp/api/building/edit",{
                building_id:$scope.b.id,
                building_name:$scope.b.name,
                building_location:$scope.b.location
            }).then(
                function (data){
                    console.log(data);
                },
                function (err){
                    console.log(err);
                }
            )
        }
         
        $scope.delete=function(){
            apiServ.post("/eqp/api/building/delete",{
                 building_id:$scope.b.id
            }).then(
                    function (data){
                        console.log(data);
                    },
                    function (err){
                        console.log(err);
                    }
                )
        }   
        $scope.create=function(){
            apiServ.post("/eqp/api/building/new",{
                building_name:$scope.b.name,
                building_location:$scope.b.location
            }).then(
                    function (data){
                        console.log(data)
                    },
                    function (err){
                        console.log(err)
                    }
                )
        }
        


})