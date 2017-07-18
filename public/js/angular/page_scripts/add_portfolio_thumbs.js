
/*ang.controller('ctrl',['PagerService', function (PagerService) {
		PagerService.hello();
}])*/
ang.service('anchorSmoothScroll', function(){
    
    
     this.scrollTo = function(eID) {

        // This scrolling function 
        // is from http://www.itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript
         		angular.element(document.getElementById("content")).css('overflow','');

        
        var startY = currentYPosition();
        var stopY = elmYPosition(eID);


        var distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
            scrollTo(0, stopY); return;
        }
        var speed = Math.round(distance / 10);
        if (speed >= 20) speed = 20;
        var step = Math.round(distance / 25);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if (stopY > startY) {
            for ( var i=startY; i<stopY; i+=step ) {
                setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
                leapY += step; if (leapY > stopY) leapY = stopY; timer++;
            } return;
        }
        for ( var i=startY; i>stopY; i-=step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
        }
        
        function currentYPosition() {
            // Firefox, Chrome, Opera, Safari
            if (self.pageYOffset) return self.pageYOffset;
            // Internet Explorer 6 - standards mode
            if (document.documentElement && document.documentElement.scrollTop)
                return document.documentElement.scrollTop;
            // Internet Explorer 6, 7 and 8
            if (document.body.scrollTop) return document.body.scrollTop;

            return window.pageYOffset;
        }
        
        function elmYPosition(eID) {
            var elm = document.getElementById(eID);
            var y = elm.offsetTop;
            var node = elm;
            while (node.offsetParent && node.offsetParent != document.body) {
                node = node.offsetParent;
                y += node.offsetTop;
            } return y;


        }

    };
   

    
})
 ang.controller('myCTRL',function(anchorSmoothScroll,$scope){

 		$scope.scrollToPorfolio = function(eID) {
			anchorSmoothScroll.scrollTo(eID);
 		};


 })
 ang.service('getJSON',function($http){

 	this.data = function(callback) {
 		
 		$http.get("./data/portfolio.json").then( function (response) { 

				//connect them to VAR 
				var dataToSentLigthbox = {};
				dataToSentLigthbox.data = [];
				var responseArrayData = response.data.portfolio.campaign;
				angular.forEach(responseArrayData,function(item,index){

					dataToSentLigthbox.data[index] = {};
					dataToSentLigthbox.data[index].id = index;
					dataToSentLigthbox.data[index].description = item.description;
					dataToSentLigthbox.data[index].thumbnail = item.thumbnail;
					dataToSentLigthbox.data[index].campaignName = item.name;
					dataToSentLigthbox.data[index].iframe_source = item.iframe_source;
					dataToSentLigthbox.data[index].iframe_ratio = item.iframe_ratio;
					dataToSentLigthbox.data[index].technology = item.technology;
					dataToSentLigthbox.data[index].sector = item.sector;

					if(index==responseArrayData.length-1){
						//get callback with array;
						callback(dataToSentLigthbox);
					}
				});

		});

 		
 	};
 	
 		   
 })
 ang.directive('lightboxThumbs', function(PagerService,anchorSmoothScroll) {

    return {
			      	restrict: 'E',
				    scope: {},
				    transclude:true,
			        templateUrl:"js/angular/page_scripts/scripts_templates/portfolio_lightbox_info.html",
					controller:function ($scope,$rootScope,$window,$compile,$element,$transclude) {
						var port = $scope;





						
						//listen for the GET request from getJSON service in thumbs directive;
						var listenerJSON = $scope.$on('sendJSON_data', function (event, args) {
								port.JSON_data= args.lightboxJSON.data;
								console.log('port.JSON_data');
								console.log(port.JSON_data);
								
						});

						// Register and get a handle to the listener
						var listener = $scope.$on('popUp', function (event, args) {
								showLightbox(args);						
						});


						var doc = document.documentElement;
					    port.top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);


						



						var showLightbox = function(param) {

									

									port.thumb_id = param.lightbox.id;
								 	if(param.lightbox.showFromThumbs){
								 		port.showLightbox = true;
								 		port.top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
								 	}
								 	if(angular.element('iframe')){ angular.element('iframe').remove(); }
							            
							            port.description = $scope.JSON_data[port.thumb_id].description;
									    port.campaignName = $scope.JSON_data[port.thumb_id].campaignName;
									    port.iframe_source = $scope.JSON_data[port.thumb_id].iframe_source;
									    port.iframe_ratio = $scope.JSON_data[port.thumb_id].iframe_ratio;
									    port.technology = $scope.JSON_data[port.thumb_id].technology;
									    port.sector = $scope.JSON_data[port.thumb_id].sector;
									    port.totalPages= port.JSON_data.length;

									    //set pagination page; need to start from 1;
									    port.setPage(port.thumb_id+1,true);



							         var contents = $element.find('.contents'); 
									 $transclude(function(transEl, transScope) { //	THIS FUNCTION ALWAYS MAKES A CLONE AND COULD BE DUPLICATED 
					        		 var ift = angular.element(transEl)[3];
							        	
							        	var checkIframeSet = setInterval(function() {
							        		if(angular.element(ift).width()){
							        			clearInterval(checkIframeSet);
							        			//$scope.iframe_calc_ratio = $scope.JSON_data[port.thumb_id].iframe_ratio;
							        			ift.src = $scope.JSON_data[port.thumb_id].iframe_source;
									    		ift.height = angular.element('iframe').width()/$scope.JSON_data[port.thumb_id].iframe_ratio;

							        		}
							        	}, 100);

							        	//add element only if it is not already in;
							        	if(contents.children().length==0) contents.append(transEl);
							        	transcludedScope = transScope;
							        });

									// angular.element(document.getElementById("content")).css('overflow','hidden');
									 //angular.element(document.getElementById("content"))[0].classList.toggle('addAutoOverflow');
									 //angular.element(document.getElementById("content")).addClass('addAutoOverflow');
									          		angular.element(document.getElementById("content")).css('overflow','auto');



									
						};

						// Unregister custom event
						$scope.$on('$destroy', function () {
						    $log.log("Unregistering listener");
						    listener();
						});

						 $scope.closePopUp = function() {

						 	//remove autoflow;
						 	//angular.element(document.getElementById("content"))[0].classList.toggle('addAutoOverflow');
						 	//angular.element(document.getElementById("content")).removeAttr('style');
						 	angular.element(document.getElementById("content")).css('overflow','visible');
						 	window.scrollTo(0,port.top-400);
						 	anchorSmoothScroll.scrollTo('portfolio');


							console.log('close');
							//port.showLightbox = false;
							console.log(port.lightbox);
							transcludedScope.$destroy();
						    port.showLightbox = false;
							angular.element('iframe').remove();
						};




						 	/***** resisze iframe ***/

							//watch for window resizing for iframe
						        angular.element($window).on('resize', function(){

									if(port.iframe_ratio){
						      			//update on resize
						        		$scope.iframe_width = angular.element('iframe').width();
						        		angular.element('iframe').height($scope.iframe_width/port.iframe_ratio) ;
						        		// is outside of angular
						        		$scope.$digest();
						        	}
						      });

						    /******************/


						   //pagination example;
							 port.setPage= function(page,thumbs) {
						            port.pager = PagerService.GetPager(port.totalPages, page);
						            //passDATA to function; first has to be 0 for array
						            if( !thumbs ) showLightbox({ lightbox: { id:page-1, showFromThumbs:false } });

						            //port.description =' dataReceivedfromThumbs.setLighbox.description';
						            //port.items = port.dummyItems.slice(port.pager.startIndex, port.pager.endIndex + 1);
						        }
						     /******************/


					}
				   
			}

  })
  .directive('thumbs', function(getJSON,anchorSmoothScroll,$location) {
    return {
			      restrict: 'E',
			      scope: {},
				  templateUrl:"js/angular/page_scripts/scripts_templates/add_portfolio_thumbs_tp.html",  
			      controller:function ($scope,$rootScope,$compile) {


				    console.log('json');
				    getJSON.data(function(jsonback) {
				    	 $scope.jsonBack = jsonback;
				    	 $scope.thumbs = jsonback.data;

				    	
				    	 console.log(jsonback.data);
				    	 //send json to Ligbox so you dont have to request it again 
				    	 $rootScope.$broadcast('sendJSON_data', { lightboxJSON: jsonback });
				    });

			      	var compiledeHTML;
			      	var dataPassedToLighbox = {};
			      	var active;

					    $scope.gotoElement = function (eID){
					      // set the location.hash to the id of
					      // the element you wish to scroll to.
					      $location.hash('bottom');

					      console.log(eID);

					 
					      // call $anchorScroll()
					     anchorSmoothScroll.scrollTo(eID);
					      
					    };

					  $scope.moveLightbox = function (event) {
							var overlay = angular.element(document.getElementById('lightboxOverlay'))[0];
    						overlay.classList.toggle('hide-overlay');
						}

			      	$scope.changeClass = function(thumb_id,event) {

			      					//custom active class;
			      					console.log(angular.element(event.currentTarget).parent());
			      					if(active) active.removeClass('active');
			      					angular.element(event.currentTarget).addClass('active');
			      					active = angular.element(event.currentTarget);

			        				
			        				$scope.showLightbox = true;
			        				var sendReferenceData = {};
			        				//compiledeHTML = $compile("<!-- lightbox setup --><lightbox-thumbs></lightbox-thumbs><!-- lightbox setup -->")($scope);
					      			//$("body").append(compiledeHTML);

					      				sendReferenceData.id = thumb_id;
					      				sendReferenceData.showFromThumbs = true;

					      			
					      				//setTimeout(function(){
								      			$rootScope.$broadcast('popUp', { lightbox: sendReferenceData });
								      			console.log('popUp');
					      				//},300)

			        }

					
			      }
		  }
  });
