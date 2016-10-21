
// 建筑 building;
angular.module("asset").controller("budCtrl", function (accountServ, $scope, environment, apiServ) {

  getBud()
  
  //分页;
  $scope.pageData = [];
  function _slice(arr, page, number){
    return arr.slice((page-1)*number, page*number);
  }
  $scope.pageChange = function(){
    $scope.pageData = _slice($scope.data1, $scope.currentPage, 5);
  }
   
  // 获取建筑；
    function getBud () {
      apiServ.post(
        '/eqp/api/building/all',
        {}
      ).then(
        function (data) {
          $scope.data1 = data;
          
          // 分页；
          $scope.pageData = _slice($scope.data1, 1, 5);
          
          $scope._show = function (i) {
            $scope.qq = true
            $scope.custom = $scope.pageData[i]

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
          $scope.data1.push($scope.custom)
          $(".form-control").val("")
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
          $(".form-control").val("")
          Prompt('修改成功！')
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
          $(".form-control").val("")
          location.reload()
          Prompt("删除成功！")
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

