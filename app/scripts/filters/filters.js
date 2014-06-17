'use strict';

/**
 * @ngdoc function
 * @name techNewsAggregatorApp.filter:LastModifiedDateFilter
 * @description
 * # formats the date to show, last modified since...
 * Last modified since date filter
 */
angular.module('techNewsAggregatorApp').filter('lastModified', ['$q', 'relativeDate',
    function($q, relativeDate) {
        return function(input) {
            var input = relativeDate.set(input);
            return input;
        };
    }
]);
