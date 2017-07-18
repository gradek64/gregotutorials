
      angular.module('appUpdate', ['ngMessages'])
      .controller('MainCtrl', function($scope){

        $scope.passwordType = "password";
        $scope.togglePasswordVisibility = function(){ $scope.passwordType = $scope.showEye ? "text" : "password"; } //show password or text depend on ShowEye*/

    })//controller;
