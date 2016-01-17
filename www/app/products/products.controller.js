/**
 * @ngdoc controller
 * @name angularApp.controller:ProductsController
 * @description
 * # ProductsController
 * Products Controller to load product list by category id
 */

(function() {
    'use strict';

    angular
        .module('angularApp')
        .controller('ProductsController', ProductsController);

    ProductsController.$inject = ['ProductsService', 'StorageUtil', '$location', '$stateParams'];

    function ProductsController(ProductsService, StorageUtil, $location, $stateParams) {
    	var vm = this;
        vm.categoryId = $stateParams.id;
        vm.productId = $stateParams.prodid;

        vm.category = "Harry";

        vm.loadProductsByCategoryId = function() {
            ProductsService.getProductsByCategoryId(vm.categoryId).then(function(result) {
                vm.products = result;
            }, function(error){

            });
        }

        vm.loadProductDetailByProductId = function() {
            ProductsService.getProductDetailByProductId(vm.productId).then(function(result) {
                vm.productObj = result[0];
            }, function(error){

            });
        }

        if(vm.productId) {
            vm.loadProductDetailByProductId();
        } else {
            vm.loadProductsByCategoryId();
        }

    }

})();
