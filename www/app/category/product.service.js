(function(){
	'use strict';

	angular
		.module('app')
		.factory('productService', productService);

	productService.$inject = ['$q'];

	function productService($q) {
		return {
			getAllCategories: getAllCategories,
			getCategoryById: getCategoryById,
			getAllProductsByCategoryId: getAllProductsByCategoryId,
			getProductById: getProductById
		}

		/////////////////////////

		function getCategories() {
			return [
				{
					id: 1,
					name: 'Category One'
				},
				{
					id: 2,
					name: 'Category Two'
				},
				{
					id: 3,
					name: 'Category Three'
				}
			];
		}

		function getProducts() {

		return [
				{
					id: 1,
					categoryId: 1,
					name: 'Product One',
					description: 'Description for product One'
				},
				{
					id: 2,
					categoryId: 1,
					name: 'Product Two',
					description: 'Description for product Two'
				},
				{
					id: 3,
					categoryId: 1,
					name: 'Product Three',
					description: 'Description for product Three'
				},
				{
					id: 4,
					categoryId: 1,
					name: 'Product Four',
					description: 'Description for product Four'
				},
				{
					id: 5,
					categoryId: 1,
					name: 'Product Five',
					description: 'Description for product Five'
				},
				{
					id: 6,
					categoryId: 2,
					name: 'Product Six',
					description: 'Description for product Six'
				},
				{
					id: 7,
					categoryId: 2,
					name: 'Product Seven',
					description: 'Description for product Seven'
				},
				{
					id: 8,
					categoryId: 2,
					name: 'Product Eight',
					description: 'Description for product Eight'
				},
				{
					id: 9,
					categoryId: 2,
					name: 'Product Nine',
					description: 'Description for product Nine'
				},
				{
					id: 10,
					categoryId: 3,
					name: 'Product Ten',
					description: 'Description for product Ten'
				},
				{
					id: 11,
					categoryId: 3,
					name: 'Product Eleven',
					description: 'Description for product Eleven'
				},
				{
					id: 12,
					categoryId: 3,
					name: 'Product Twelve',
					description: 'Description for product Twelve'
				}
			];
		}

		function getAllCategories() {
			var categories = getCategories();
			var deferred = $q.defer();
			deferred.resolve(categories);
			return deferred.promise;
		}

		function getCategoryById(categoryId) {
			var categories = getCategories();
			var deferred = $q.defer();
			var selectedCategory = _.findWhere(categories, {id: Number(categoryId)});
			deferred.resolve(selectedCategory);
			return deferred.promise;
		}

		function getAllProductsByCategoryId(categoryId) {
			var products = getProducts();
			var deferred = $q.defer();
			var selectedProducts = _.where(products, {categoryId: Number(categoryId)});
			deferred.resolve(selectedProducts);
			return deferred.promise;
		}

		function getProductById(productId) {
			var products = getProducts();
			var deferred = $q.defer();
			var selectedProduct = _.findWhere(products, {id: Number(productId)});
			deferred.resolve(selectedProduct);
			return deferred.promise;
		}
	}
})()