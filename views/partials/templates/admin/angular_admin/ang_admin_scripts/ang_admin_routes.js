var routerApp = angular.module('routerApp', ['ui.router','ngAnimate']);

//you should supply double injection dependency since it wont get them confused once this file is minified;
routerApp.config(['$stateProvider','$urlRouterProvider' ,function($stateProvider, $urlRouterProvider) {
    

    //$urlRouterProvider service provide default url for any not staed url like url/greg.html
    $urlRouterProvider.otherwise('/home');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
                        /*the root node.js path registered is: ---views---*/
            templateUrl: 'partials/templates/admin/angular_admin/ang_admin_templates/home.html'
            /*controller: function(){

            }*/
        })
        .state('resolveRequire', {
            url: '/resolveRequire',
            templateUrl: 'partials/templates/admin/angular_admin/ang_admin_templates/make_tuto_template.html',

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
                                selector:'textarea.tinymce',
                                toolbar: 'undo redo | styleselect | bold italic | link image' 
                          });

           
    

            }]
        });

}]);



/***************************************************
            @@ register rootScope events for the ui routes 

**************************/
routerApp.run(['$rootScope' ,function($rootScope) {
                  $rootScope.$on('$stateNotFound',  function(event, unfoundState, fromState, fromParams){ 
                            console.log('state not found'); 

                    });

            $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {
                 console.log('state started'); 

                 //add preloder with jQuery;
                 $('#view-loader').hide().after('<p id="routesPreloader">loading....</p>');
                    });

            $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){ 
                 console.log('state success');

                //add preloder with jQuery;
                  $('#routesPreloader').remove();

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

      


