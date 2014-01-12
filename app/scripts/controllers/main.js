'use strict';

angular.module('ngChoppedApp')
  .controller('MainCtrl', function ($scope, Appetizers, Entrees, Desserts) {
    $scope.appetizers = Appetizers;
    $scope.entrees = Entrees;
    $scope.desserts = Desserts;

    $scope.newBox = function (array) {
      var m = array.length, t, i;

      // While there remain elements to shuffle…
      while (m) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
      }

      return array;
    }

    // init();

  });
