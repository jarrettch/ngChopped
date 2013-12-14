'use strict';

describe('Service: Appetizers', function () {

  // load the service's module
  beforeEach(module('ngChoppedApp'));

  // instantiate service
  var Appetizers;
  beforeEach(inject(function (_Appetizers_) {
    Appetizers = _Appetizers_;
  }));

  it('should do something', function () {
    expect(!!Appetizers).toBe(true);
  });

});
