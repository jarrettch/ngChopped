'use strict';

describe('Service: Appetizer', function () {

  // load the service's module
  beforeEach(module('NgchoppedApp'));

  // instantiate service
  var Appetizer;
  beforeEach(inject(function (_Appetizer_) {
    Appetizer = _Appetizer_;
  }));

  it('should do something', function () {
    expect(!!Appetizer).toBe(true);
  });

});
