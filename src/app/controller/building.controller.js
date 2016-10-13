angular.module("asset").controller("budCtrl", function ($scope, accountServ, apiServ) {
  
  accountServ.login()
  accountServ.logout()
  accountServ.setBud()
  accountServ.getBud()
  accountServ.edtBud()
  
})
