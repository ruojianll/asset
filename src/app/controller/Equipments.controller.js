angular.module("asset").controller("Equipments",function($scope,$http,environment,apiServ,accountServ){
	$scope.maxSize = 1;
	$scope.bigTotalItems = 175;
	$scope.bigCurrentPage = 1;
  $scope.$parent.$parent.currentPage = 3;

//获取所有设备
$scope.dian=false;
    apiServ.post(
    	"/eqp/api/equipment/all",
    	{}
    ).then(
        function (data){
        	//alert(1)
        	console.log(data)
            $scope.f=data
             $scope.show=function(i){
                // $scope.dian=!$scope.dian;
                //     // console.log($index)
                //     console.log($scope.a[$index])
                //     $scope.b = $scope.a[$index]
                $scope.equipments = $scope.f[i]
             }
        },
        function (err){
//      	alert(2)
            console.log(err)
        }
    )

//新建设备
   $scope.create = function(){
        setBud()
   } 

    function setBud(){
       apiServ.post(
         '/eqp/api/equipment/new',
         {
            'equipment_name':$scope.equipments.name,
            'equipment_type':$scope.equipments.type,
            'equipment_factory':$scope.equipments.factory,
            'equipment_phone':$scope.equipments.phone,
            'equipment_price':$scope.equipments.price
         }
       ).then(
         function(){
            alert('添加成功')
            $scope.f.push($scope.equipments);
            location.reload()
         },
         function(err){
           console.log(err);
         }
       )
     }

//编辑设备
    $scope.edit = function () {
      edtBud()
    }
    function edtBud (){
      apiServ.post(
        '/eqp/api/equipment/edit',
        {
            'equipment_id':$scope.equipments.id,
            'equipment_name':$scope.equipments.name,
            'equipment_type':$scope.equipments.type,
            'equipment_factory':$scope.equipments.factory,
            'equipment_phone':$scope.equipments.phone,
            'equipment_price':$scope.equipments.price
        }
      ).then(
        function(){
          alert("修改成功！")
        },
        function(err){
          console.log(err);
        }
      )
    }


//删除设备
    $scope.delete = function () {
      delBud()
    }
    function delBud (data){
      apiServ.post(
        '/eqp/api/equipment/delete',
        {
          'equipment_id':$scope.equipments.id
        }
      ).then(
        function(){
          location.reload()
          alert("删除成功！")
        },
        function(err){
            alert('失败')
          console.log(err);
        }
      )
    }

});