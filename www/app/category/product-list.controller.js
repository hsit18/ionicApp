(function(){
	'use strict';

	angular
		.module('app')
		.controller('ProductListController', ProductListController);

	ProductListController.$inject = ['$stateParams', 'productService']

	function ProductListController($stateParams, productService) {
		var vm = this;
		vm.category = null;
		vm.categoryId = $stateParams.id;
		vm.getAllProductsByCategoryId = getAllProductsByCategoryId;
		vm.getCategoryById = getCategoryById;
		vm.products = [];

		////////////////////////

		var active = function() {
			vm.getCategoryById(vm.categoryId);
			vm.getAllProductsByCategoryId(vm.categoryId);
		}

		function getAllProductsByCategoryId(categoryId) {
			productService
				.getAllProductsByCategoryId(categoryId)
				.then(function(response) {
					vm.products = response;
				});
		}

		function getCategoryById(categoryId) {
			productService
				.getCategoryById(categoryId)
				.then(function(response) {
					vm.category = response;
				});
		}

		active();
	}
})()