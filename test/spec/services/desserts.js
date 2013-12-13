'use strict';

describe('Service: Desserts', function () {

  // load the service's module
  beforeEach(module('NgchoppedApp'));

  // instantiate service
  var Desserts;
  beforeEach(inject(function (_Desserts_) {
    Desserts = _Desserts_;
  }));

  it('should do something', function () {
    expect(!!Desserts).toBe(true);
  });

});
