'use strict';

angular.module('techNewsAggregatorApp').service('FeedService', ['$http', '$q',
    function($http, $q) {

        /**
         * Using Google Feed API
         */
        
        var googleFeedApi = 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0';

        function getFeed(rssUrl) {
            return $http({
                method: 'JSONP',
                url: googleFeedApi,
                params: {
                    q: rssUrl,
                    callback: 'JSON_CALLBACK',
                    num: 30
                }
            }).then(function(data) {
                return data;
            }).
            catch (function(err) {
                console.error('error in product fetch ', err);
                $q.reject({
                    error: err
                });
            });
        }

        return {
            getFeed: getFeed
        };
    }
]);
