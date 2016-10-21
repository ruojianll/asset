angular.module('asset').controller("assetRooms",function($scope,$http,environment,apiServ){
	apiServ.post(
		'/eqp/api/room/all',
        {}
	).then(
		function (data){
			$scope.f = data;
			$scope._active = function (x) {
        $scope.custom = $scope.f[x]
        console.log($scope.custom)
        apiServ.post(
          '/eqp/api/room/all',
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
		}
	)

	$scope._create = function () {
      setRom()
    }
    function setRom (){
      apiServ.post(
        '/eqp/api/room/new',
        {
        'building_id':$scope.custom.building_id,
		    'room_code':$scope.custom.code
        }
      ).then(
        function(){
          $scope.f.push($scope.custom);
          location.reload()
        },
        function(err){
        	alert("创建失败")
          console.log(err);
        }
      )
    }


    $scope._edit = function () {
      edtRom()
    }
    function edtRom (){
      apiServ.post(
        '/eqp/api/room/edit',
        {
          'building_id': $scope.custom.building_id,
          'room_id': $scope.custom.id,
          'room_code': $scope.custom.code
        }
      ).then(
        function(){
          alert("修改成功！")
        },
        function(err){
          alert("修改失败")
        }
      )
    }


    $scope._delete = function () {
      delRom()
    }
    function delRom (data){
      apiServ.post(
        '/eqp/api/room/delete',
        {
          'room_id': $scope.custom.id
        }
      ).then(
        function(){
        	// alert(1)
          location.reload()
          alert("删除成功！")
        },
        function(err){
        	// alert(2)
          console.log(err);
        }
      )
    }

    return {
        'setRom':setRom,
        'edtRom':edtRom,
        'delRom':delRom
    }

      /*$scope.totalItems = $('#jx_page').children('ul').length;*/
      /*$scope.totalItems = 64;
	  $scope.currentPage = 4;

	  $scope.setPage = function (pageNo) {
	    $scope.currentPage = pageNo;
	  };

	  $scope.pageChanged = function() {
	    $log.log('Page changed to: ' + $scope.currentPage);
	  };

	  $scope.maxSize = 5;
	  $scope.bigTotalItems = 175;
	  $scope.bigCurrentPage = 1;*/


})