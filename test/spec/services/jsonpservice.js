'use strict';

describe('Service: jsonpservice', function () {

  // load the service's module
  beforeEach(module('oyblogApp'));

  // instantiate service
  var jsonpservice;
  beforeEach(inject(function (_jsonpservice_) {
    jsonpservice = _jsonpservice_;
  }));

  it('should do something', function () {
    expect(!!jsonpservice).toBe(true);
  });

});
