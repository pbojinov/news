'use strict';

/**
 * @ngdoc overview
 * @name techNewsAggregatorApp
 * @description
 * # techNewsAggregatorApp
 *
 * Main module of the application.
 */
angular
  .module('techNewsAggregatorApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
