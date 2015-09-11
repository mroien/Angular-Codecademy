app.controller('PhotoController', ['$scope', 'photos', '$routeParams', function($scope, photos, $routeParams) {
  photos.success(function(data) {
  	// $routeParams used to grad id from the URL
    $scope.detail = data[$routeParams.id];
  });
}]);