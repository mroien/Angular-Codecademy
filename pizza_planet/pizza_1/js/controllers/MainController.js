app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
      name: "Bruschetta",
      description: "Grilled bread garlic, tomatoes, olive oil.",
      price: 4.95
    }
  ];
  $scope.mains = [
  {
    name: "Pizza",
    description: "Whole pizza with your choice of toppings",
    price: 15.95
  },
  {
    name: "Rigatoni",
    description: "Rigatoni with meat sauce",
    price: 9.95
  },
  {
    name: "Kobe Steak",
    description: "A Kobe steak cooked the way you love with a side and potatoe.",
    price: 130
  }
  ];
    $scope.extras = [
    {
      name: "Sauce",
      description: "Extra sauce",
      price: .5
    },
    {
      name: "Side",
      description: "Add an extra side",
      price: 8
    },
    {
      name: "Lobster",
      description: "Add a 8oz lobster tail to your entree",
      price: 15
    }
    ];
}]);