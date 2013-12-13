'use strict';

angular.module('ngChoppedApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/index.html',
        controller: 'IndexCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
