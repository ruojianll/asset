angular.module('asset').controller("assetRooms",function($scope,accountServ,$http,environment,apiServ){
  getR();
  $scope.pageData = [];
  function _slice(arr, page, number){
    return arr.slice((page-1)*number, page*number);
  }
  $scope.pageChange = function(){
    $scope.pageData = _slice($scope.rooms, $scope.currPage, 5);
  }
  $scope.$parent.$parent.currentPage = 2;
  function getR(){
    apiServ.post(
      '/eqp/api/room/all',
          {}
    ).then(
       function (data){
          $scope.rooms = data;
          $scope.pageData = _slice($scope.rooms, 1, 5);
          apiServ.post(
            '/eqp/api/building/all',
            {}
          ).then(
             function (data){ 
                $scope.buildings = data
                $scope.pageData = _slice($scope.rooms,1,5)
                _.each($scope.rooms,function(room){
                  var building = _.find($scope.buildings,function(building){
                    return room.building_id === building.id;
                  })
                  building = building || {};
                  room.building = building;
                })
             },
             function (err){
              console.log(err)
            }
          )
       }
    )
  }
  	

    $scope._active = function (x) {       
      $scope.custom = $scope.pageData[x]
      $scope.f = $scope.rooms[x].building.name+'('+$scope.rooms[x].building.location+')'
    }

	  $scope._create = function () {
      setRom()
    }
    function setRom (){
      apiServ.post(
        '/eqp/api/room/new',
        {
          	'building_id':$scope.aprent.id,
		        'room_code':$scope.custom.code
        }
      ).then(
        function(){
          document.getElementsByTagName('input')[0].value='';
          document.getElementsByTagName('input')[1].value='';
          // $scope.rooms.push($scope.custom);
          getR()
        },
        function(err){
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
          document.getElementsByTagName('input')[0].value='';
          document.getElementsByTagName('input')[1].value='';
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
          document.getElementsByTagName('input')[0].value='';
          document.getElementsByTagName('input')[1].value='';
          Prompt("已删除！")
          getR()
        },
        function(err){
          console.log(err);
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
      document.getElementsByClassName('jxabc_Droplist')[0].style.display='block';
      boolean = false;
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
