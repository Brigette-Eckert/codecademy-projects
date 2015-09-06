app.controller('MainController', ['$scope', function($scope) {
$scope.apps = [
  $scope.move = {
    icon: 'img/move.jpg',
    title: 'MOVE',
    developer: 'MOVE, Inc.',
    price: 0.99
  },

  $scope.shutterbugg = {
    icon: 'img/shutterbugg.jpg',
    title: 'Shutterbugg',
    developer: 'Chico Dusty',
    price: 2.99
  },

  $scope.gameboard = {
    icon: 'img/gameboard.jpg',
    title: 'Gameboard',
    developer: 'Armando P.',
    price: 1.99
  },

  $scope.forecast = {
    icon: 'img/forecast.jpg',
    title: 'Forecast',
    developer: 'Forecast',
    price: 1.99
  },
  
    $scope.skymap = {
    icon: 'https://lh4.ggpht.com/4VGiZutofCjs_wEC3BOuFPXysyF-ClYDTa40F3qK-GhKcISkWFFpRiBFmD8HPDTrElQ=w300-rw',
    title: 'Skymap',
    developer: 'Google Devs',
    price: 0.00
    },
    $scope.shazman = {
    icon: 'https://igcdn-photos-f-a.akamaihd.net/hphotos-ak-xaf1/t51.2885-19/11373517_456277674542261_1719117871_a.jpg',
    title: 'Shazam',
    developer: 'KCPD',
    price: 0.00
    }
  ]
}]);