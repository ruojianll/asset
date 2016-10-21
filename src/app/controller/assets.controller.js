angular.module('asset').controller('assetsController',function($scope,environment,$http,accountServ,apiServ){
	//分页
	$scope.$parent.$parent.currentPage = 0;
	$scope.pageData=[];
  	function slice(arr, page,number){
    	return arr.slice((page-1)*number,page*number);
 	}
  	$scope.pagechange=function(){
    	$scope.pageData=slice($scope.buildings,$scope.currentPage,5)
  	}

	//获取所有财产
	apiServ.post('/eqp/api/asset/all',{}).then(function(data){
		$scope.asset=data;
	})
	//获取所有设备
	apiServ.post('/eqp/api/equipment/all',{}).then(function(data){
		$scope.states=data;
	})
	//获取所有建筑
	apiServ.post('/eqp/api/building/all',{}).then(function(data){
		$scope.buildings=data;
		$scope.pageData=slice($scope.buildings,1,5);
	})

	$scope.flag1=false;
	$scope.flag2=false;
	
	//获取建筑内的房间
	$scope.show1=function(index){
		$scope.building_id=$scope.buildings[index].id;
		$scope.flag1=true;
		apiServ.post('/eqp/api/building/room/all',{ building_id:$scope.building_id}).then(function(data){
			$scope.rooms=data;
			if(data.length==0){
				$scope.flag2=false;
			}else {
				$scope.flag2=true;
				$scope.show2(0);
			}
		})
	}

	//按钮禁用
	if($('#name').val()=='' && $('#num').val()==''){
		$scope.isDisabled=true;
	}else {
		$scope.isDisabled=false;
	}
	//获取房间内财产
	$scope.show2=function(index){
		$scope.room_id=$scope.rooms[index].id;
		apiServ.post('/eqp/api/asset/get',{room_id:$scope.room_id}).then(function(data){
			for(var i=0;i<data.length;i++){
				if(data[i].equipment_id==null){
					data.splice(i,1)
					i--;
				}
			}
			$scope.equipments=data;
		})
	}
	//修改财产
	$scope.show3=function(index){
		$scope.r_equipment=$scope.equipments[index];
		$scope.name=$scope.r_equipment.equipment_name;
		$scope.type=$scope.r_equipment.equipment_type;
		$('#name').val($scope.name+'('+$scope.type+')');
		$scope.num=$scope.r_equipment.number;
		$('#num').val($scope.num);
		$scope.isDisabled=false;

		$('.main div:eq(2) div button').not('button:eq(2)').addClass('hover');
		
		$scope.asset_id=$scope.r_equipment.id;
		$scope.edit=function(){
			$scope.equipment_id=$scope.r_equipment.equipment_id;
			var asset_number=$('#num').val();
			apiServ.post('/eqp/api/asset/edit',{asset_id:$scope.asset_id,equipment_id:$scope.equipment_id,
    		room_id:$scope.room_id,
    		asset_number:asset_number}).then(function(data){
    			$scope.show2(0);
    			Prompt('修改成功')
    			$('#name').val('');
				$('#num').val('');
			})
		}

		$scope.delete=function(){
			apiServ.post('/eqp/api/asset/delete',{asset_id:$scope.asset_id}).then(function(data){
    			Prompt('已删除');
    			$scope.show2(0);
    			$('#name').val('');
				$('#num').val('');
			})
		}

	}
	$scope.creat=function(){
		if($('#name').val()!=='' && $('#num').val()!==''){
			var asset_number=$('#num').val();
			apiServ.post('/eqp/api/asset/new',{equipment_id:$scope.equipment.id,
		    room_id:$scope.room_id,
		    asset_number:asset_number}).then(function(data){
		    	$scope.show2(0)
		    	$('#name').val('');
				$('#num').val('');
		    	$('#name').empty();
				$('#num').empty();
		    })
		}else {
			Prompt('请完善信息');
		}
			
	}
	//设备列表 添加设备
	$scope.fn=function(index){
		$scope.equipment=$scope.states[index];
		$('#name').val($('.list li').eq(index).html());
		document.getElementsByClassName('list')[0].style.display='none';
	}
	var boolean = false;
	$scope.over=function(){
		boolean = true;
	}
	document.getElementById('name').onfocus=function(){
		document.getElementsByClassName('list')[0].style.display='block';
		// boolean = false;
	}
	document.getElementById('name').onblur=function(){
		if(boolean){
			return false;
		}
		document.getElementsByClassName('list')[0].style.display='none';
	}


})