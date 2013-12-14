'use strict';

describe('Controller: IndexCtrl', function () {

  // load the controller's module
  beforeEach(module('ngChoppedApp'));

  var IndexCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IndexCtrl = $controller('IndexCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of appetizers to the scope', function () {
    expect(scope.appetizers.length).toBe(844);
  });
});
