(function(){
	'use strict';

	angular
		.module('app')
		.controller('ProductDetailsController', ProductDetailsController);

	ProductDetailsController.$inject = ['$stateParams', 'productService'];

	function ProductDetailsController($stateParams, productService) {
		var vm = this;

		vm.category = null;
		vm.product = null;
		vm.productId = $stateParams.id;

		/////////////////////////////

		var activate = function() {
			productService
				.getProductById(vm.productId)
				.then(function(product) {
					vm.product = product;
					return productService.getCategoryById(product.categoryId);
				})
				.then(function(category) {
					vm.category = category;
				});
		}

		activate();
	}
})()