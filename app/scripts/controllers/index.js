'use strict';

angular.module('ngChoppedApp')
  .controller('IndexCtrl', function ($scope, Appetizers, Entrees, Desserts) {
    $scope.appetizers = Appetizers;
    $scope.entrees = Entrees;
    $scope.desserts = Desserts;
  });
