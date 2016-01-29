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

    CategoriesService.$inject = ['$http', '$q', 'CONSTANTS'];

    function CategoriesService($http, $q, CONSTANTS) {

        var service = {
            getCategoriesData: getCategoriesData
        };

        return service;

        function getCategoriesData() {

            var deferred = $q.defer();
            $http.get( CONSTANTS.API_URL + 'api/getCategories').then(function(response) {
                if(response && response.data) {
                    deferred.resolve(response.data);
                }
            }, function(error) {
                console.log(error);
                deferred.reject(error);
            });

            return deferred.promise;
        }
    }

})();
