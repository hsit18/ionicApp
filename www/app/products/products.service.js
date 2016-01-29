/**
 * @ngdoc service
 * @name angularApp.service:ProductsService
 * @description
 * # ProductsService
 * Products Service for Products controller
 */

(function() {
    'use strict';

    angular
        .module('angularApp')
        .service('ProductsService', ProductsService);

    ProductsService.$inject = ['$http', '$q', '$filter', 'CONSTANTS'];

    function ProductsService($http, $q, $filter, CONSTANTS) {

        var service = {
            getProductsByCategoryId: getProductsByCategoryId,
            getProductDetailByProductId: getProductDetailByProductId
        };

        return service;



        function getProductsByCategoryId(categoryId) {

            var deferred = $q.defer();
            $http.get( CONSTANTS.API_URL + 'api/getProductByCategoryId/'+categoryId).then(function(response) {
                if(response && response.data) {
                    var selectedProducts = $filter('filter')(response.data, {categoryId: Number(categoryId)});
                    deferred.resolve(selectedProducts);
                }
            }, function(error) {
                console.log(error);
                deferred.reject(error);
            });

            return deferred.promise;
        }

        function getProductDetailByProductId(productId) {

            var deferred = $q.defer();
            $http.get( CONSTANTS.API_URL + 'api/getProductDetail/'+productId).then(function(response) {
                if(response && response.data) {
                    var selectedProduct = $filter('filter')(response.data, {id: Number(productId)});
                    deferred.resolve(selectedProduct);
                }
            }, function(error) {
                console.log(error);
                deferred.reject(error);
            });

            return deferred.promise;
        }
    }

})();
