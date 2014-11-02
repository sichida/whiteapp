'use strict';

describe('Controller: 003Ctrl', function () {

  // load the controller's module
  beforeEach(module('whiteappApp'));

  var 003Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    003Ctrl = $controller('003Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
