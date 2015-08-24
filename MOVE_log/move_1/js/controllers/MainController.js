app.controller('MainController', ['$scope', function($scope) {
  $scope.exercises = [
    {
      icon: 'img/pushup.jpeg',
      name: 'Pushups',
      count: 20
    },
    {
      icon: 'img/squat.jpeg',
      name: 'Squats',
      count: 15
    },
    {
      icon: 'img/pullup.jpeg',
      name: 'Pullups',
      count: 10
    },
    {
      icon: 'img/row.jpeg',
      name: 'Rows',
      count: 10
    },
    {
      icon: 'img/lunge.jpeg',
      name: 'Lunges',
      count: 10
    },
    {
      icon: 'img/stepup.jpeg',
      name: 'Step Ups',
      count: 10
    },
    {
      icon: 'img/situp.jpeg',
      name: 'Sit Ups',
      count: 15
    }
  ];
$scope.decrease = function(index) {
    $scope.exercises[index].count -= 1;
  };
  $scope.increase = function(index) {
  $scope.exercises[index].count += 1;
};
}]);