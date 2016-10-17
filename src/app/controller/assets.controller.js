angular.module('asset').controller('assetsController',function($scope,environment,$http,accountServ,apiServ){
	apiServ.post('/eqp/api/building/all',{}).then(function(data){
		console.log(data);
		$scope.buildings=data;
	})
	$scope.flag1=false;
	$scope.flag2=false;
	$scope.flag3=false;
	$scope.show1=function($index){
		var building_id=$('.main div:eq(0) tr').eq($index+1).attr('id');
		console.log(building_id);
		$scope.flag1=true;
		apiServ.post('/eqp/api/room/all',{ building_id:building_id}).then(function(data){
			console.log(data);
			$scope.rooms=data;
		})
	}

	$scope.show2=function($index){
		$scope.flag2=true;
		var room_id=$('.main div:eq(1) tr').eq($index+1).attr('id');
		apiServ.post('/eqp/api/asset/get',{room_id:room_id}).then(function(data){
			console.log(data);
			$scope.equipments=data;
		})
	}
	$scope.show3=function($index){
		
		var name=$('.main div:eq(2) tr').eq($index+1).find('td:eq(1)').html();
		$('#name').val(name);
		var num=$('.main div:eq(2) tr').eq($index+1).find('td:eq(4)').html();
		$('#num').val(num);
		apiServ.post('/eqp/api/asset/get',{room_id:room_id}).then(function(data){
			console.log(data);
			$scope.equipments=data;
		})
	}
	$scope.focus=function(){
		$scope.flag3=!$scope.flag3;
	}
	$scope.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas',  'New Jersey',  'Wyoming'];
})