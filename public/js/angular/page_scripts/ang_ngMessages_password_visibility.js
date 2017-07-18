
      angular.module('app', ['ngMessages']) //important your dependency you MUST declare only ONCE so if you use angular.module('app') again it must not have injectiion dependencies in it
      .controller('MainCtrl', function($scope){

      	console.log('works from ang_ngMessesges_password_visibility.js');

        $scope.passwordType = "password";
        $scope.togglePasswordVisibility = function(){ $scope.passwordType = $scope.showEye ? "text" : "password"; } //show password or text depend on ShowEye*/

    })//controller;
