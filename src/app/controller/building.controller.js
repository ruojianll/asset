// 建筑 building;
angular.module("asset").controller("budCtrl", function (accountServ, $scope, environment, apiServ) {
$scope.$parent.$parent.currentPage = 1;
  getBud()
  
  // 获取建筑；
    function getBud () {
      apiServ.post(
        '/eqp/api/building/all',
        {}
      ).then(
        function (data) {
          $scope.data1 = data;
          
          // 分页；
//        $('#example').dataTable({
//          "pagingType": "full_numbers"
//        })
          
          $scope._show = function (i) {
            $scope.qq = true
            $scope.custom = $scope.data1[i]

            // 获取房间号；
            apiServ.post(
              '/eqp/api/building/room/all',
              {
                'building_id': $scope.custom.id
              }
            ).then(
              function (data) {
                $scope.data2 = data
              },
              function (err) {
                console.log(err)
              }
            )
          }
        },
        function (err) {
          console.log(err)
        }
      )
    }
    
    // 新建建筑；
    $scope._create = function () {
      setBud()
    }
    function setBud (){
      apiServ.post(
        '/eqp/api/building/new',
        {
          'building_name': $scope.custom.name,
          'building_location': $scope.custom.location
        }
      ).then(
        function(){
          $scope.data1.push($scope.custom);
          location.reload()
        },
        function(err){
          console.log(err);
        }
      )
    }
    
    // 编辑建筑；
    $scope._edit = function () {
      edtBud()
    }
    function edtBud (){
      apiServ.post(
        '/eqp/api/building/edit',
        {
          'building_id': $scope.custom.id,
          'building_name': $scope.custom.name,
          'building_location': $scope.custom.location
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
    
    // 删除建筑；
    $scope._delete = function () {
      delBud()
    }
    function delBud (data){
      apiServ.post(
        '/eqp/api/building/delete',
        {
          'building_id': $scope.custom.id
        }
      ).then(
        function(){
//        $scope.data1.splice($scope.data1.indexOf(data), 1);
          location.reload()
          alert("删除成功！")
        },
        function(err){
          console.log(err);
        }
      )
    }
    
    return {
        'getBud':getBud,
        'setBud':setBud,
        'edtBud':edtBud,
        'delBud':delBud
    }
  
})

