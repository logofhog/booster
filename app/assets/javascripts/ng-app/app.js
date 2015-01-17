angular.module('Booster', ['ngRoute', 'templates', 'mm.foundation'])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', { 
        templateUrl: 'homepage.html',
        controller:  'HomeCtrl'
      });
    $locationProvider.html5Mode(true);
  });

