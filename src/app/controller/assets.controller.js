angular.module('asset').controller('assetsController',function($scope,environment,$http,accountServ,apiServ){
	apiServ.post('/eqp/api/building/all',{}).then(function(data){
		console.log(data);
		$scope.buildings=data;
	})
	$scope.flag1=false;
	$scope.flag2=false;
	$scope.flag3=false;
	apiServ.post('/eqp/api/equipment/all',{}).then(function(data){
		$scope.states=data;
		console.log(data);
	})
	$scope.show1=function($index){
		var building_id=$('.main div:eq(0) tr').eq($index+1).attr('id');
		console.log(building_id);
		$scope.flag1=true;
		apiServ.post('/eqp/api/building/room/all',{ building_id:building_id}).then(function(data){
			console.log(data);
			$scope.rooms=data;
		})

	}
	if($('#name').val()=='' && $('#num').val()==''){
		$scope.isDisabled=true;
	}

	$scope.show2=function($index){
		$scope.flag2=true;
		$scope.room_id=$('.main div:eq(1) tr').eq($index+1).attr('id');
		apiServ.post('/eqp/api/asset/get',{room_id:$scope.room_id}).then(function(data){
			console.log(data);
			$scope.equipments=data;
		})
		
	}
	$scope.show3=function($index){
		var name=$('.main div:eq(2) tr').eq($index+1).find('td:eq(1)').html();
		var type=$('.main div:eq(2) tr').eq($index+1).find('td:eq(2)').html();
		$('#name').val(name+'('+type+')');
		var num=$('.main div:eq(2) tr').eq($index+1).find('td:eq(4)').html();
		$('#num').val(num);
		$scope.isDisabled=false;

		$('.main div:eq(2) div button').not('button:eq(2)').addClass('hover')
		
		$scope.edit=function(){
			var asset_id=$('.main div:eq(2) tr').eq($index+1).attr('id');
			var equipment_id=$('.main div:eq(2) tr').eq($index+1).find('td:eq(0)').html();
			var assetNumber=$('#num').val();
			$http.post('http://10.115.19.223:8091/eqp/api/asset/edit',{
				id:asset_id,
				equipment_id:equipment_id,
				room_id:$scope.room_id,
				asset_number:assetNumber
			}).then(function(data){
				console.log(data);
			})
		}
		$scope.delete=function(){
			var asset_id=$('.main div:eq(2) tr').eq($index+1).attr('id');
			$http.post('http://10.115.19.223:8091/eqp/api/asset/delete',{
				asset_id:asset_id
			}).then(function(data){
				console.log(data);
			})
		}
	}
	
	$('#name').focus(function(){
		$scope.flag3=true;
	})
	$('#name').blur(function(){
		$scope.flag3=false;
	})
})