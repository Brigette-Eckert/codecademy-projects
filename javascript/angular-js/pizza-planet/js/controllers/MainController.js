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
    {name: 'Bruschetta',
     description: 'Grilled bread garlic, tomatoes, olive oil' ,
     price: '4.95',
    }
  ];
  
  $scope.main = [
    {name: 'Margherita',
     description: 'Fresh Basil, Mozzarella, Cooked Roma Tomatoes on Garlic and Olive Oil Base',
     price: '15',
    },
    {name: 'Butcher Block',
     description: 'Mozzarella, Salami, Pepperoni, Canadian Bacon, Italian Sausage',
     price: '17',
    },
    {name: 'Mother Earth',
     description: 'Mozzarella, Spinach, Sun-dried Tomatoes, Gorgonzola Cheese, Garlic, Artichokes on a Creamy Garlic Base',
     price: '15',
    }
  ];
  
  $scope.extras = [
    {name: 'Chocolate Lave Cake',
      description: 'Moist chocolate cake with a melted chocolate center topped with vanilla ice cream & a thin chocolate shell.',
     price: '5',
    },
    {name: 'Tiramisu',
      description: 'The classic Italian dessert. A layer of creamy custard set atop espresso-soaked ladyfingers. ',
     price: '7',
    },
    {name: 'Raspberry Cheese Cake',
      description: 'Raspberry-swirled white chocolate cheesecake topped with slivers of white chocolate. ',
     price: '6',
    }
  ]
}]);

Open