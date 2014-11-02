'use strict';

describe('Controller: 002Ctrl', function () {

  // load the controller's module
  beforeEach(module('whiteappApp'));

  var 002Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    002Ctrl = $controller('002Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
