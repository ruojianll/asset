angular.module('asset').controller("assetRooms",function($scope,$http,environment,apiServ){
  $scope.pageData = [];
  function _slice(arr, page, number){
    return arr.slice((page-1)*number, page*number);
  }
  $scope.pageChange = function(){
    $scope.pageData = _slice($scope.rooms, $scope.currPage, 5); 
  }
  $scope.$parent.$parent.currentPage = 2;
	apiServ.post(
		'/eqp/api/room/all',
        {}
  ).then(
   function (data){
     $scope.rooms = data;
      apiServ.post(
          '/eqp/api/building/all',
          {}
        ).then(
          function (data) {            
            $scope.buildings = data
            $scope.pageData = _slice($scope.rooms,1,5)
            // console.log($scope.buildings)
            // _.each($scope.rooms,function(room){
            //   var building = _.find($scope.buildings,function(building){
            //     return room.building_id === building.id;
            //   })
            //   building = building || {};
            //   room.building = building;
            // })

            for(var i in $scope.rooms){
              var room = $scope.rooms[i];
              room.building = {};
              for(var k in $scope.buildings){
                var building = $scope.buildings[k];
                if(building.id === room.building_id){
                  room.building = building;
                  break;
                }
              }
            }
          },
          function (err) {
            console.log(err)
          }
        )
      console.log(data)
      
   }
  )

  $scope._active = function (x) {       
    $scope.custom = $scope.pageData[x]
    $scope.f = $scope.rooms[x].building.name+'('+$scope.rooms[x].building.location+')'
  }

	$scope._create = function () {
    // alert($scope.buildings[0].id)
      setRom()
    }
    function setRom (){
      // console.log($scope.f.id)
      apiServ.post(
        '/eqp/api/room/new',
        {
          	'building_id':$scope.aprent.id,
		        'room_code':$scope.custom.code
        }
      ).then(
        function(){
          $scope.rooms.push($scope.custom);
          location.reload()
        },
        function(err){
        	Prompt("创建失败")
          // console.log(err);
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
          Prompt("修改成功！")
        },
        function(err){
          Prompt("修改失败")
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
          Prompt("删除成功！")
        },
        function(err){
        	// alert(2)
          // console.log(err);
        }
      )
    }

    $scope.fn=function(index){
      $scope.aprent=$scope.buildings[index];
      $('#jxabc_building_details').val($('.jxabc_Droplist li').eq(index).html());
      document.getElementsByClassName('jxabc_Droplist')[0].style.display='none';
    }
    $scope.over=function(){
      boolean = true;
    }
    document.getElementById('jxabc_building_details').onfocus=function(){
      console.log(1)
      document.getElementsByClassName('jxabc_Droplist')[0].style.display='block';
      // boolean = false;
    }
    document.getElementById('jxabc_building_details').onblur=function(){
      if(boolean){
        return false;
      }
      document.getElementsByClassName('jxabc_Droplist')[0].style.display='none';
    }


    return {
        'setRom':setRom,
        'edtRom':edtRom,
        'delRom':delRom
    } 
})