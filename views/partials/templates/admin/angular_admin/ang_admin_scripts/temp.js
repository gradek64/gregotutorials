var routerApp = angular.module('routerApp', ['ui.router','ngAnimate']);

//you should supply double injection dependency since it wont get them confused once this file is minified;
routerApp.config(['$stateProvider','$urlRouterProvider' ,function($stateProvider, $urlRouterProvider) {
    

    //$urlRouterProvider service provide default url for any not staed url like url/greg.html
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'templates/partial-home.html'
        })

        .state('resolve', {
            url: '/resolve',
            templateUrl: 'templates/partial-resolve.html',
                        //good practice is to make double array injection so it wont brake when minified;
              
            resolve: {
                    // In this case, we're going to define the route
                    // resolution as a service. The String here represents
                    // the name of a service within the Dependency-Injection
                    // container. This service will be instantiated the first
                    // time that this route is accessed. For every subsequent
                    // route access, the already-instantiated service is used.
                    // --
                    // NOTE: Accessed using $injector.get().
                    //factory: "bResolutionService"
                    messages: function (InboxService) {
                        console.log('resolve tab');

                            console.log(InboxService.getMessages());

                            //return InboxService.getMessages();
                    }
                },
                             //the same idea as require js, define what to inject and reffer that in callback function;
            controller:['$scope','InboxService' ,function($scope,InboxService){
                        $scope.message = 'my Message passed';


                        console.info('tab controle resolve');
            }]
        })
        
        .state('resolveHttp', {
            url: '/resolveHttp',
            templateUrl: 'templates/partial-resolve-http.html',
                        //good practice is to make double array injection so it wont brake when minified;
              
            resolve: {

                // you can get any value direclty in resolve object and return it back into controller as getHttp object;
                        getHttp:['$http', function ($http) {
                                    //return the outcome of $http.get.then() as one;
                                    return $http.get('data/data.json').then(function(response){
                                                return  response.data;
                                   });
                        }]
                       

                    },
                             //the same idea as require js, define what to inject and reffer that in callback function;
            controller:['$scope','getHttp' ,function($scope,getHttp){ //get dependecies $scope and resolve object: getHttp;
                        $scope.message = 'my Message passed';
                        $scope.friends = getHttp;
            }]
        })

        .state('resolvePromise', {
            url: '/resolvePromise',
            templateUrl: 'templates/partial-resolve-promise.html',
                        //good practice is to make double array injection so it wont brake when minified;
              
            resolve: {
                         // those function beeing called after resolve is executed, no need to call them outside !!
                        getPromise:['loadExternalFiles', function (loadExternalFiles) {

                                console.log('promise');
                                    //return the outcome of $http.get.then() as one;
                              return  loadExternalFiles.then(function(callbackPromise){
                                        console.log(callbackPromise);
                                   });
                        }],
                        getStaff:function(){
                            console.log('get staff called');
                        }

                    },
                             //the same idea as require js, define what to inject and reffer that in callback function;
            controller:['$scope',function($scope){ //get dependecies $scope and resolve object: getHttp;
                       $scope.pageClass = 'page-about';
            }]
        })

    .state('resolveRequire', {
            url: '/resolveRequire',
            templateUrl: 'templates/partial-resolve-requireJS.html',

                        //good practice is to make double array injection so it wont brake when minified;
            resolve: {
                         // those function beeing called after resolve is executed, no need to call them outside !!
                        getPromiseRequireJS:['loadExternalFilesbyRequireJS', function (loadExternalFilesbyRequireJS) {
                                console.log('requirejs resolve');

                             return  loadExternalFilesbyRequireJS.then(function(callbackPromise){
                                        console.log(callbackPromise);
                                   });
                        }],

                        getStaff:function(){
                            console.log('get staff called resolve require');
                        }
                    },
                    onEnter: function(){
                                console.log('onEnter');                             
                },
                  onExit: function(){
                                console.log('onExit');                             
                  },
                                 //the same idea as require js, define what to inject and reffer that in callback function;
            controller:['$scope','$rootScope',function($scope,$rootScope){ //get dependecies $scope and resolve object: getHttp;
                        console.log('requirejs controlller');

                         $scope.setData = function( newData ) {
                                $scope.data = newData;
                            };


                        console.info("........route controller.......");
                         tinymce.init({
                                selector:'textarea',
                                toolbar: 'undo redo | styleselect | bold italic | link image' 
                          });

           
    

            }]
        })
   
        
        // nested list with custom controller
        .state('home.list', {
            url: '/list',
            controller: function($scope) {
                $scope.dogs = ['Bernese', 'Husky', 'Goldendoodle'];
                $scope.pageClass = 'page-contact';
            }
        })
        
        // nested list with just some random string data
        .state('home.paragraph', {
            url: '/paragraph',
            template: 'I could sure use a drink right now.'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            views: {
                '': { templateUrl: 'templates/partial-about.html' },
                'columnOne@about': { template: 'Look I am a column!' },
                'columnTwo@about': { 
                    templateUrl: 'templates/table-data.html',
                    controller: 'scotchController'
                }
            }
            
        });





        //register event for ui.router;
       /* $rootScope
            .$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {
                        console.log('start loading');
            })
            .$on('$stateChangeSuccess', function(e, toState, toParams, fromState, fromParams) {
                        console.log('staff loaded');
            })
            .$on('$stateChangeError', function(e, toState, toParams, fromState, fromParams) {
                        console.log('eroloading');
            });*/


            /*  $rootScope.$on('$stateChangeStart', 
                    function(event, toState, toParams, fromState, fromParams, options){ 
                            // event.preventDefault(); 
                            console.log(event);
                            console.log(toState); 
                            console.log(toParams);
                            console.log(fromState);
                            console.log(fromParams);
                            console.log(options);

                    });*/
          


        
}]);

routerApp.run(['$rootScope' ,function($rootScope) {
                  $rootScope.$on('$stateNotFound',  function(event, unfoundState, fromState, fromParams){ 
                            console.log('state not found'); 

                    });

            $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {
                 console.log('state started'); 

                 $('#view-loader').hide().after('<p id="gg">loading....</p>');
                    });

            $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){ 
                 console.log('state success');
                                  $('#gg').remove();

             });

            $rootScope.$on('$stateChangeError',  function(event, toState, toParams, fromState, fromParams, error){ 
                            console.log('state error'); 

                    });
             $rootScope.$on('$viewContentLoading',   function(event, viewConfig){ 
                            console.log(event); 
                             console.log(viewConfig); 
                    });
            $rootScope.$on('$viewContentLoaded',   function(event){ 
                            console.log('staff loaded'); 
                             //$('#view-loader').fadeIn(2000);
                    });
}]);

routerApp.controller('scotchController', function($scope) {
    
    $scope.message = 'test';   
    $scope.scotches = [
        {
            name: 'Macallan 12',
            price: 50
        },
        {
            name: 'Chivas Regal Royal Salute',
            price: 10000
        },
        {
            name: 'Glenfiddich 1937',
            price: 20000
        }
    ];

     $scope.pageClass = 'page-home';
    
});

// I provide a service that loads a route resource and returns the resolved
// value (or a promise of the resolved value).
routerApp.factory(
    "InboxService",
    function( $q ) {

        console.log('factory(injectables)');

        function getMessages() {
                    return 'Greg';
        }

        return { getMessages: getMessages };
    });


// I provide a service that loads a route resource and returns the resolved
// value (or a promise of the resolved value).
routerApp.factory(
    "loadExternalFiles",
                function( $q,$timeout ) {

        //start promise
        var deferred = $q.defer();

              $timeout(function() {
                //if (success) {
                  deferred.resolve("This is great!");
                //} else {
                  //deferred.reject({ message: "Really bad" });
                //}
              }, 1000);

  return deferred.promise;
});


routerApp.factory(
    "loadExternalFilesbyRequireJS", function($q) {
        console.log('factory');
    //start promise
    var deferred = $q.defer();

    requirejs(["//cdn.tinymce.com/4/tinymce.min.js"], function(util) {
                    console.log('require js started');
                    deferred.resolve(['success']); //this is a successCallback;
    });


  return deferred.promise;
});





      


