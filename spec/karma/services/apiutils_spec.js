describe('APIUtils', function() {
  
  beforeEach(module('Booster'));
  beforeEach(inject(function(APIUtils, _$httpBackend_) {
    service = APIUtils;
    $httpBackend = _$httpBackend_;
  }));

  it('should work', function() {
    expect(true).toBe(true);
  });
});



