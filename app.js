(function() {
  var app = angular.module('gemStore', []);

  app.controller('StoreController', function(){

  	this.products = gems;
    
  });

  var gems = [
    { name: 'Azurite', price: 2.95, soldOut: false },
    { name: 'Bloodstone', price: 5.95, soldOut: true },
    { name: 'Zircon', price: 3.95, soldOut: false },
    { name: 'Amber', price: 1, soldOut: false },
    { name: 'Citrine', price: 21.3, soldOut: true },
    { name: 'Coral', price: 2.99, soldOut: false },
    { name: 'Topaz', price: 11.34, soldOut: false },
  ];
})();
