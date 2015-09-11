var app = angular.module('GalleryApp', ['ngRoute']);

app.config(function ($routeProvider) { 
  $routeProvider 
    .when('/', { 
      controller: 'HomeController', 
      templateUrl: 'views/home.html' 
    })
    // :id variable part name
  .when('/photos/:id', {
    controller: 'PhotoController',
    templateUrl: 'views/photo.html'
  })
    .otherwise({ 
      redirectTo: '/' 
    }); 
});