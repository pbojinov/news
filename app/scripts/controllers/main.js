'use strict';

/**
 * @ngdoc function
 * @name techNewsAggregatorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the techNewsAggregatorApp
 */
angular.module('techNewsAggregatorApp').controller('MainCtrl', ['$scope', 'FeedManager', 'FeedService',
    function($scope, FeedManager, FeedService) {

        //products.data.results.deals.deal
        $scope.getFeedData = function() {
        	console.log('getting feeds');
            var feeds = FeedManager.getFeeds();

            angular.forEach(feeds, function(value, key) {
                console.log(value, key);
            });

            // FeedService.getFeed().then(function(feed) {
            //     $scope.feed = feed;
            // }).
            // catch (function(err) {
            //     $scope.error = err;
            // });
        };

        $scope.getFeedData();
    }
]);
