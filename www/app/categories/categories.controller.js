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

    CategoriesController.$inject = ['CategoriesService', 'StorageUtil', '$location', 'CONSTANTS', '$stateParams'];

    function CategoriesController(CategoriesService, StorageUtil, $location, CONSTANTS, $stateParams) {

        var vm = this;
        vm.categoryId = ($stateParams.id) ? $stateParams.id : 1;

        vm.loadCategories = function() {

            CategoriesService.getCategoriesData(vm.categoryId).then(function(result) {
                vm.categories = result;
            }, function(error){

            });
        }

        vm.getMoreCategoriesOrProducts = function(id) {


        }



        vm.loadCategories();
    }

})();
