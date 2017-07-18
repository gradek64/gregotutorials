angular
      .module('app')
      	/***
						use this directive to measure the stregth of the password all you need to do is to add this script to the page and pass
						ng-model='user.password' to the wacher as form input field;

						$scope.$watch('user.password', function(newVal,oldVal){
				  			passwordStrength(newVal,oldVal)
				
						});


      	****/
      .directive('passwordStrength', function() {
    return {
        restrict: 'EA',
        scope: false, //here you need to specify scope: {} (isolated) or inherited scope:true in order this to work;
	    bindToController: { 
	      pstrenght:'@', //those are one-way binding and mosty used for text and in <directive tag  pstrenght="{{pstrenght}}""></directive tag>
	      passwordlabel: '@' //<directive tag  passwordlabel="{{passwordlabel}}""></directive tag>
	    },
	    transclude:true,
	    controllerAs: 'directiveController',
	    controller: function($scope) {

				var variationCheck = 0;
				var score = 0;
				

							  function passwordStrength(pass,oldValue){

							        /*those are the options for validation with scoring system*/
							        var variations = [
							            { rulename :"digits",rule:function(value){ var result = /\d$/.test(value);  return result; }, score:2},//digits
							            { rulename :"lowercase",rule:function(value){ var result = /[a-z]$/.test(value); return result; }, score:0.5},//lowercase
							            { rulename :"uppercase",rule:function(value){ var result = /[A-Z]$/.test(value); return result; }, score:1},//uppercase
							            { rulename :"specialCharacters",rule:function(value){ var result = /\W$/.test(value); return result; }, score:3} //specialCharacters
							        ];  

							        //at firrst set score to 0 casue pass field in undefined;
							        (typeof pass != "undefined" ) ? runValidation() : score = 0 ;

							              
							        function runValidation() {
									          //1. if oldValue is undefined run either userBackSlashes() or checkScore(pass);
									          //2. if you running userBackSlashes() check if old value is different from new value that means user backslashes othwise run chcekScore(pass)
									          (typeof oldValue != "undefined")   ?   ( (pass.length < oldValue.length) ? userBackSlashes() : checkScore(pass) )  :   checkScore(pass);

									          function userBackSlashes(){
									                //reset varion check for the bulk validation in the character loop;
									              variationCheck = 0;
									              //update new password after deleting characters or going backslash
									              for(var chart=0; chart<oldValue.length; chart++){
									                  var character = pass.substr(chart,1);
									                  checkScore(character);
									              }
									          }

							        }



							        function checkScore(value){ //pass the string to be validated;
							                  		for( var i=0,nestedRules;nestedRules=variations[i]; i++){

										                if( nestedRules.rule(value) ) {  
										                  //add points if the rule applies
										                    variationCheck += nestedRules.score;  
										                    //record current score;
										                    score= variationCheck;  
										                };
							              			}
							          		score = variationCheck *10;
							         }


							        $scope.progressBarWeak =  (score< 40) ? true : false;
							        $scope.progressBarStrong =  (score>=40 && score<=70) ? false : true; //it covers medium and strong;
							        $scope.label = (score==0) ? score='' : (score< 40)   ?   "Weak" : ( (score>=40 && score<=70) ? "Medium" : "Strong" );
							        $scope.currentstrength = (score > 100) ? 100 : score; //maximum score 100

							  }



				//watch for password change 
				$scope.$watch('user.pass', function(newVal,oldVal){
				  			passwordStrength(newVal,oldVal)
				
				});








	   		 }, 
	        template: ' <div class="progress col-md-offset-1"  style="position:absolute; left:0;  width:90%; height:20px !important;margin-top:5px !important;z-index:10" >'+ 
	                    '<div class="progress-bar" role="progressbar"'+
	                    'ng-class=" { \'progress-bar-success\':progressBarStrong ,\'progress-bar-warning\':!progressBarStrong,\'progress-bar-danger\':progressBarWeak }"'+
	                    'aria-valuenow="{{directiveController.pstrenght}}"'+
	                    'aria-valuemin="0" '+
	                    'aria-valuemax="100"'+
	                    'style="width:{{directiveController.pstrenght}}%">{{directiveController.passwordlabel}}'+
	                    '</div>'
	      };
   });