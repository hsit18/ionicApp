(function(){
	'use strict';

	angular
		.module('app')
		.controller('CategoryListController', CategoryListController);

	CategoryListController.$inject = ['productService']

	function CategoryListController(productService) {
		var vm = this;
		vm.categories = [];
		vm.getAllCategories = getAllCategories;

		////////////////////

		var active = function() {
			getAllCategories();
		}

		function getAllCategories() {
			productService
				.getAllCategories()
				.then(function(response) {
					vm.categories = response; 
				})
		}

		active();
	}
})()