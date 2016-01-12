/**
 * @ngdoc module.
 * @name angularApp
 * @description
 * # angularApp
 * Main module of the application
 */

 (function() {
    'use strict';
    angular
        .module('angularApp', [
            'ionic',
            'UtilApp',
            'ngAria',
            'ngCookies',
            'ngMessages',
            'ngTouch'
        ])
        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

            $stateProvider
            .state('app', {
                url: '/app',
                loginReq: true,
                templateUrl: 'app/home/home.html',
                controller: 'HomeController',
                controllerAs: 'homeCtrl'
                // resolve: {
                //     auth: ["$q", "$state", "loginAuthenticationFactory", function($q, $state, loginAuthenticationFactory) {
                //         var userId = loginAuthenticationFactory.getLoggedInUserId();

                //         if (userId) {
                //             return $q.when();
                //         } else {
                //             $state.go('login');
                //             return $q.reject();
                //         }
                //     }]
                // }
            })
            .state('login', {
                url: '/login',
                templateUrl: 'app/login/login.html',
                controller: 'LoginController',
                controllerAs: 'loginCtrl'
                // resolve: {
                //     auth: ["$q", "loginAuthenticationFactory", function($q, loginAuthenticationFactory) {
                //         var userId = loginAuthenticationFactory.getLoggedInUserId();

                //         if (userId) {
                //             return $q.reject();
                //         } else {
                //             return $q.when();
                //         }
                //     }]
                // }
            });


            $urlRouterProvider.otherwise('/app');


            // $routeProvider
            //     .when('/home', {
            //         templateUrl: 'app/home/home.html',
            //         controller: 'HomeController',
            //         controllerAs: 'homeCtrl'
            //         // resolve: {
            //         //     auth: ["$q", "loginAuthenticationFactory", function($q, loginAuthenticationFactory) {
            //         //         var userId = loginAuthenticationFactory.getLoggedInUserId();

            //         //         if (userId) {
            //         //             return $q.resolve();
            //         //         } else {
            //         //             return $q.reject({
            //         //                 authenticated: false
            //         //             });
            //         //         }
            //         //     }]
            //         // }
            //     })
                // .when('/login', {
                //     templateUrl: 'app/login/login.html',
                //     controller: 'LoginController',
                //     controllerAs: 'loginCtrl',
                //     resolve: {
                //         auth: ["$q", "loginAuthenticationFactory", function($q, loginAuthenticationFactory) {
                //             var userId = loginAuthenticationFactory.getLoggedInUserId();

                //             if (userId) {
                //                 return $q.reject({
                //                     authenticated: true
                //                 });
                //             } else {
                //                 return $q.resolve();
                //             }
                //         }]
                //     }
                // })
                // .otherwise({
                //     redirectTo: '/home'
                // });
            //$locationProvider.html5Mode(true);
        }])
        .run(["$rootScope", "$state", "$ionicPlatform", "loginAuthenticationFactory", function($rootScope, $state, $ionicPlatform, loginAuthenticationFactory) {
            $ionicPlatform.ready(function() {
                if (window.cordova && window.cordova.plugins.Keyboard) {
                    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                    // for form inputs)
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

                    // Don't remove this line unless you know what you are doing. It stops the viewport
                    // from snapping when text inputs are focused. Ionic handles this internally for
                    // a much nicer keyboard experience.
                    cordova.plugins.Keyboard.disableScroll(true);
                }
                if (window.StatusBar) {
                    StatusBar.styleDefault();
                }
            });

            $rootScope.$on("$stateChangeStart", function(event, toState, previous) {
                if (toState.name !== 'login' && toState.loginReq) {
                    var userId = loginAuthenticationFactory.getLoggedInUserId();
                    if (!userId) {
                        event.preventDefault();
                        $state.go("login");
                    }

                }
            });
        }]);
})();
