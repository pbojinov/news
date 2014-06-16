'use strict';

/**
 * @ngdoc function
 * @name techNewsAggregatorApp.filter:LastModifiedDateFilter
 * @description
 * # formats the date to show, last modified since...
 * Last modified since date filter
 */
angular.module('techNewsAggregatorApp').filter('checkmark', [
    function() {
        return function(input) {
            return input ? '\u2713' : '\u2718';
        };
    }
]);
