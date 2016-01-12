(function(){
	'use strict';

	angular
		.module('app')
		.config(configure);

	configure.$inject = ['$stateProvider', '$urlRouterProvider'];

	function configure($stateProvider, $urlRouterProvider) {


	  $stateProvider

	  	.state('app', {
	  		url: '/app',
	  		abstract: true,
	  		templateUrl: 'app_old/tempates/layout.html'
	  	})

	    .state('app.home', {
		    url: '/home',
		    views: {
			    'menuContent': {
			    	templateUrl: 'app_old/category/category-list.html',
			    	controller: 'CategoryListController as vm'
			    }
		    }
		  })

	    .state('app.product-list', {
		    url: '/product-list/:id',
		    views: {
			    'menuContent': {
				    templateUrl: 'app_old/category/product-list.html',
				    controller: 'ProductListController as vm'
			    }
		    }
		  })

	    .state('app.product-details', {
		    url: '/product-details/:id',
		    views: {
			    'menuContent': {
				    templateUrl: 'app_old/category/product-details.html',
				    controller: 'ProductDetailsController as vm'
			    }
		    }
		  })

	  // if none of the above states are matched, use this as the fallback
	  $urlRouterProvider.otherwise('/app/home');
	}


	angular.module('app').controller('AppCtrl', function() {});

})()
