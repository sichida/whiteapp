'use strict';

angular
  .module('whiteappApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/0.0.2', {
        templateUrl: 'views/0.0.2.html',
        controller: '002Ctrl'
      })
      .when('/0.0.3', {
        templateUrl: 'views/0.0.3.html',
        controller: '003Ctrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
