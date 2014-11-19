describe('School', function() {
  var $scope;
  beforeEach(module('Booster'));
  beforeEach(inject(function($rootScope, $compile) {
    $scope = $rootScope.$new();
    var element = angular.element('<school></school>');
    template = $compile(element)($scope);
    $scope.$digest();
    controller = element.controller;
  }));

  it('should get the school', inject(function() {
    expect(true).toBe(true);
    $scope.getSchools();
    expect($scope.schools).toBe('this is the school');
  }));
})
