/**
 * @ngdoc controller
 * @name angularApp.controller:CategoriesController
 * @description
 * # CategoriesController
 * Categories Controller loads categories list
 */

(function() {
    'use strict';

    angular
        .module('angularApp')
        .controller('CategoriesController', CategoriesController);

    CategoriesController.$inject = ['CategoriesService', 'StorageUtil', '$location', 'CONSTANTS'];

    function CategoriesController(CategoriesService, StorageUtil, $location, CONSTANTS) {
    	var vm = this;
        vm.loadCategories = function() {

            CategoriesService.getCategoriesData().then(function(result) {
                vm.categories = result;
            }, function(error){

            });
        }

        vm.loadCategories();
    }

})();
