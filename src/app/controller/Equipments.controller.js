
angular.module("asset").controller("Equipments",function($scope,$http,environment,apiServ,accountServ,$log){
getE()
 //翻页 
  $scope.pageData = [];
  function _slice(arr, page, number){
    return arr.slice((page-1)*number, page*number);
  }
  $scope.pageChange = function(){
    $scope.pageData = _slice($scope.f, $scope.currentPage, 5); 
  }  
  $scope.$parent.$parent.currentPage = 3;

  var input=document.getElementsByTagName('input')

//获取所有设备
$scope.dian=false;
  function getE(){
    apiServ.post(
      "/eqp/api/equipment/all",
      {}
    ).then(
        function (data){
            $scope.f=data
            $scope.pageData = _slice($scope.f,1,5)
            $scope.show=function(i){
                $scope.equipments = $scope.pageData[i]
            }
        },
        function (err){
//        alert(2)
            console.log(err)
        }
    )
  }
    
 
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
          for(var i=0;i<input.length;i++){
            input[i].value='';
          }
            Prompt('添加成功')
            $scope.f.push($scope.equipments);
            getE();
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
          for(var i=0;i<input.length;i++){
            input[i].value='';
          }
          Prompt("修改成功！")
          $scope.equipments = ''
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
          for(var i=0;i<input.length;i++){
            input[i].value='';
          }
          Prompt("删除成功！")
          getE()
        },
        function(err){
            //Prompt('失败')
            console.log(err);
        }
      )
    }
});