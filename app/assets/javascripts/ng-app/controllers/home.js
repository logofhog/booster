angular.module('Booster')
  .controller('HomeCtrl', function($scope) {
    $scope.things = ['test', 'that', 'it', 'work... and it does!!'];
  });

angular.module('Booster')
  .service('APIUtils', function($http) {
    var apiutils = {
      get: function(url, errors) {
        return $http.get(url).success(function(response, status, headers,
                                                config) {
            });
      }
    };
    return apiutils
  });


angular.module('Booster')
  .directive('school', function(){
    return {
      templateUrl: 'single_school.html',
      restrict: 'E',
      controller: function($scope) {
        $scope.schools = 'lasdasdasda';
        $scope.getSchools = function () {
          $scope.schools = 'this is the school';
        }
      }
    }
  })
      



