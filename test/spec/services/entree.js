'use strict';

describe('Service: Entree', function () {

  // load the service's module
  beforeEach(module('NgchoppedApp'));

  // instantiate service
  var Entree;
  beforeEach(inject(function (_Entree_) {
    Entree = _Entree_;
  }));

  it('should do something', function () {
    expect(!!Entree).toBe(true);
  });

});
