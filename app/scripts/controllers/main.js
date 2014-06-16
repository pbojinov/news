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

    	$scope.feeds = [];

        //products.data.results.deals.deal
        $scope.loadFeeds = function() {

            var feeds = FeedManager.getFeeds();
            console.assert(feeds.length > 1, 'Feed count is > 1');

            angular.forEach(feeds, function(value) {
                var feedItem = value,
                    name = feedItem.name,
                    url = feedItem.url;

                console.assert(name, 'Feed name is not empty');
                console.assert(url, 'Feed url is not empty');

                FeedService.getFeed(url).then(function(feed) {
                	var singleFeed = feed.data.responseData.feed;
                	console.log(singleFeed);
                	$scope.feeds.push(singleFeed);
                }).
                catch (function(err) {
                    $scope.error = err;
                });
            });
        };

        $scope.loadFeeds();
    }
]);
