 	  angular.module('app')
      .controller('MainCtrl', function($scope,$http){
      	var userInfo = this;


      	console.log('works form user_info_angular.js');

      	 
      	/** 
			it has to be here cause all data are loaded here so it wont work in ang_ngMessages_passoword_visibility.js so it has to be repeated
      	*/

      	 $scope.passwordType = "password";
         $scope.togglePasswordVisibility = function(){ $scope.passwordType = $scope.showEye ? "text" : "password"; } //show password or text depend on ShowEye*/

         /******/

      	//form object is updateuser hooked to $scope; for example <input ng-model="updateruser.name" />
      	$scope.user = {};
      	$scope.updated = false;

      	//show all data from database into fields;
      	$http.get('/data.json').then(function(res) {
		    	//merge data.json object with $scope.user;
				for (var key in res.data.mydata[0]) {
				     $scope.user[key] = res.data.mydata[0][key];	
				     console.log('value,.,,,,,,,,,value');
				     console.log($scope.user[key]);
				     console.log(key);
				}
		});


      	//watch any changes to the user image input;
      	var file;
		$scope.uploadedFile = function(element) {
			console.log(element.id);
			 $scope.$apply(function($scope) {
			    $scope.files = element.files; 
			    //assign file input content;
                file = element.files[0];
			 });
		}

		//-----------Update user and sent POST request to node.js -----------

		    // process the form form ng-submit="proccesForm()" of submit button;
			$scope.processForm = function() {

				 var fd = new FormData();
				 				 	console.log($scope.user);

				 //assign all existing inputs except for image file input
				 for(var key in $scope.user) {
				 	console.log('........................');
				 	console.log($scope.user[key]);
				 	console.log('........................');
				    fd.append(key,$scope.user[key]);
				 }
  				 
  				 //append file from input file to the FormData;
  				 fd.append('userImage',file);//it has to be the same name as input file to match database name=userImage


				$http.post('/update',fd,{
			        transformRequest : angular.identity, //dont strigify you object data let it process as object in Angular;
			        //enctype  :  'multipart/form-data',
			        //data    : $.param($scope.user), // pass in data as strings
			        headers : { 'Content-Type' : undefined }  // use undefinde to let browser decide how to handle that request dont specify 
			    })
			        .success(function(data) {
			            //console.log('data');
			            //console.log(data);
			            $scope.updated = true;// success user set in POST node response route;

			            //set Timerout for info message
			             var timeOut = setTimeout(function() {
			             	clearTimeout(timeOut);
			             	console.log('wwww');
							$scope.$apply(function($scope) {
							    $scope.updated = false;// success user set in POST node response route;
							 });
			             }, 5000);

			            console.log('data');
			            console.log(data);

			        var info = '<span style="color:green;">thanks <span style="color:darkgreen;font-size:120%">'+$scope.user['name']+'</span>, your details have been updtated.</span>';
                    var markup = '<!-- Modal -->'+
                              '<div class="modal fade" id="myModal" role="dialog">'+
                                '<div class="modal-dialog">'+
                                  '<!-- Modal content-->'+
                                  '<div class="modal-content">'+
                                    '<div class="modal-header">'+
                                      '<button type="button" class="close" data-dismiss="modal">&times;</button>'+
                                      '<h4 class="modal-title">good news!</h4>'+
                                    '</div>'+
                                    '<div class="modal-body">'+
                                      '<p>'+info+'</p>'+
                                    '</div>'+
                                    '<div class="modal-footer">'+
                                      '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'+
                                    '</div>'+
                                  '</div>'+
                                '</div>'+
                              '</div>';

                              $('body').append(markup);

                            $('#myModal').modal({
                                        "backdrop":'static',
                                        "keyboard":true,
                                        "show":true
                            })

			    });

			};
      	



		
      


 });