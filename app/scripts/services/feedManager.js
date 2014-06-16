'use strict';

angular.module('techNewsAggregatorApp').service('FeedManager', [

    function() {

        var feeds = [];

        function getFeeds() {
            return feeds;
        }

        function setupDefaultFeeds() {
            feeds.push(createFeedObject('Hacker News', 'https://news.ycombinator.com/rss'));
            feeds.push(createFeedObject('Designer News', 'https://news.layervault.com/?format=rss'));
            feeds.push(createFeedObject('Sidecar.io', 'http://feeds.sidebar.io/SidebarFeed'));
        }

        function createFeedObject(name, url) {
            var feed = {};
            feed.name = name;
            feed.url = url;
            return feed;
        }

        setupDefaultFeeds();

        return {
            getFeeds: getFeeds
        }
    }
]);
