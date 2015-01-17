describe('School', function() {
  var $scope;
  beforeEach(module('Booster'));
  beforeEach(inject(function($rootScope, $compile, _$httpBackend_) {
    $scope = $rootScope.$new();
    var element = angular.element('<school></school>');
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('single_school.html').respond(200, 
      'this is the place where the template should be');
    template = $compile(element)($scope);
    $scope.$digest();
    controller = element.controller;
  }));

  it('should get the school',function() {
    expect(true).toBe(true);
    $httpBackend.flush();
    $scope.getSchools();
    console.log(template);
    expect($scope.schools).toBe('this is the school');
  });
})
