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
      .otherwise({
        redirectTo: '/'
      });
  });
