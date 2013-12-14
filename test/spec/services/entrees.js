'use strict';

describe('Service: Entrees', function () {

  // load the service's module
  beforeEach(module('ngChoppedApp'));

  // instantiate service
  var Entrees;
  beforeEach(inject(function (_Entrees_) {
    Entrees = _Entrees_;
  }));

  it('should be an array of entrees', function () {
    expect(!!Entrees).toBe(true);
  });

});
