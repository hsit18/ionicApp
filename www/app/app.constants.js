/**
 * @ngdoc constants
 * @name angularApp.constant:CONSTANTS
 * @description
 * # CONSTANTS
 * CONSTANTS used for util App
 */

(function() {
    'use strict';

    angular
        .module('angularApp')
        .constant('CONSTANTS', {
            API_URL: 'https://limitless-river-4314.herokuapp.com/',
            //API_URL: 'http://localhost:8080/'
        });
})();
