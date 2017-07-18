 	  angular.module('app', [])
      .controller('MainCtrl', function($scope,$http){
      	var userInfo = this;
      	console.log('gagag');

      	 $scope.passwordType = "password";
        $scope.togglePasswordVisibility = function(){ $scope.passwordType = $scope.showEye ? "text" : "password"; } //show password or text depend on ShowEye*/

      	//form object is updateuser hooked to $scope; for example <input ng-model="updateruser.name" />
      	$scope.user = {};
      	$scope.updated = false;

      	$http.get('/data.json').then(function(res) {
		    	//merge data.json object with uptadeUser;
		    	console.log('json');
				for (var key in res.data.mydata[0]) {
					console.log($scope.user[key]);
				     $scope.user[key] = res.data.mydata[0][key];	
				}
		});



		//-----------Upate user and sent POST request to node.js -----------



		    // process the form form ng-submit="proccesForm()" of submit button;
		    $scope.processForm = function() {
		    	$http({
		    	  method  : 'POST',
		    	  url     : '/update', //path to 
		    	  data    : $.param($scope.user),  // pass in data as strings
		    	  headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
					}).success(function(data) {
					    console.log(data);

					    if (!data.success) {
					      // if not successful, bind errors to error variables
					      			$scope.errorName = data.errors.name;
					      			$scope.errorSuperhero = data.errors.superheroAlias;
					    } else {
					      			// if successful, bind success message to message
					      			$scope.updated = true;
					      			$scope.message = data.message.name+', your details have been updated.thanks';
					    }
				    });

		    };

      	



		
      


 });