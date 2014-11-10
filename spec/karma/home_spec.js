describe('HomeCtrl', function() {
  var scope, ctrl;
  
  //beforeEach(module('templates'));
  beforeEach(module('Booster'));
  //beforeEach(angular.mock.module('Booster'));
  beforeEach(inject(function($rootScope, $controller){

    scope = $rootScope.$new();
    ctrl = $controller('HomeCtrl', {$scope: scope});
  }));

  it('should have those things in scope', function() {
    expect(scope.things).toContain('work... and it does!!');
  })
})
