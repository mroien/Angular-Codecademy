var app = angular.module('ForecastApp', []);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'HomeController',
      templateUrl: 'views/home.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});