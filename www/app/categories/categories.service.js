/**
 * @ngdoc service
 * @name angularApp.service:CategoriesService
 * @description
 * # CategoriesService
 * Categories Service for Categories controller
 */

(function() {
    'use strict';

    angular
        .module('angularApp')
        .service('CategoriesService', CategoriesService);

    CategoriesService.$inject = ['$http', '$q'];

    function CategoriesService($http, $q) {

        var service = {
            getCategoriesData: getCategoriesData
        };

        return service;

        function getCategoriesData() {

            var deferred = $q.defer();
            var categories = [
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
            deferred.resolve(categories);
            return deferred.promise;
        }
    }

})();
