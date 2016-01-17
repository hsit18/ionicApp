 /**
 * @ngdoc config
 * @name angularApp.config:appConfig
 * @description
 * # appConfig
 * app config manages the states and config related settings
 */

 (function() {
    'use strict';
    angular
        .module('angularApp')
        .config(appConfig);

    appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function appConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('app', {
            url: '/app',
            loginReq: true,
            abstract: true,
            templateUrl: 'app/home/home.html',
            controller: 'HomeController',
            controllerAs: 'homeCtrl'
        })
        .state('login', {
            url: '/login',
            templateUrl: 'app/login/login.html',
            controller: 'LoginController',
            controllerAs: 'loginCtrl'
        })
        .state('app.categories', {
            url: '/categories',
            views: {
                'menuContent': {
                    templateUrl: 'app/categories/categories.html',
                    controller: 'CategoriesController',
                    controllerAs: 'CategoriesCtrl'
                }
            }
        })
        .state('app.products', {
            url: '/products/:id',
            views: {
                'menuContent': {
                    templateUrl: 'app/products/products.html',
                    controller: 'ProductsController',
                    controllerAs: 'ProductsCtrl'
                }
            }
        })
        .state('app.product-detail', {
            url: '/product-detail/:prodid',
            views: {
                'menuContent': {
                    templateUrl: 'app/products/product-detail.html',
                    controller: 'ProductsController',
                    controllerAs: 'ProductsCtrl'
                }
            }
        });

        //$urlRouterProvider.otherwise('/app');
        $urlRouterProvider.otherwise(function($injector) {
          var $state = $injector.get('$state');
          return $state.go('app.categories');
        });
    }

})();