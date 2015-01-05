'use strict';

describe('Service: freeparagraph', function () {

  // load the service's module
  beforeEach(module('oyblogApp'));

  // instantiate service
  var freeparagraph;
  beforeEach(inject(function (_freeparagraph_) {
    freeparagraph = _freeparagraph_;
  }));

  it('should do something', function () {
    expect(!!freeparagraph).toBe(true);
  });

});
