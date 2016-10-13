<<<<<<< HEAD
angular.module("asset").controller("budCtrl", function ($scope, accountServ, apiServ) {
  
  accountServ.login()
  accountServ.logout()
  accountServ.setBud()
  accountServ.getBud()
  accountServ.edtBud()
  
})
=======
angular.module("asset").controller("budCtrl",function ($scope,$http,accountServ,apiServ){
	accountServ.login();
	accountServ.newbuilding()
})
>>>>>>> 28002f9a22d81fe40883d1125a9c77b63e1ce19b
