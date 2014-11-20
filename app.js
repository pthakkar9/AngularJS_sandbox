(function() {
  var app = angular.module('gemStore', []);

  app.controller('StoreController', function(){

  	this.products = gems;
    
  });

  app.controller('TabController', function(){

  	// Sets default tab to first tab
  	this.tab = 1;

  	this.setTab = function(inTab){
  		this.tab = inTab;
  	};

  	this.isSet = function(inTab){
  		return this.tab === inTab;
  	};
  	
  });

   app.controller('GalleryController', function(){

    this.current = 0;

    this.setCurrent = function(newGallery){
      this.current = newGallery || 0;
    };

  });

  var gems = [
    { name: 'Azurite', price: 2.95, soldOut: false, 
    description: "description comes here", 
    images: ["images/gem-02.gif", "images/gem-05.gif", "images/gem-09.gif"]},
    { name: 'Bloodstone', price: 5.95, soldOut: true, description: "description comes here", 
    images: ["images/gem-02.gif", "images/gem-05.gif", "images/gem-09.gif"]},
    { name: 'Zircon', price: 3.95, soldOut: false, description: "description comes here", 
    images: ["images/gem-02.gif", "images/gem-05.gif", "images/gem-09.gif"] },
    { name: 'Amber', price: 1, soldOut: false, description: "description comes here", 
    images: ["images/gem-02.gif", "images/gem-05.gif", "images/gem-09.gif"] },
    { name: 'Citrine', price: 21.3, soldOut: true, description: "description comes here", 
    images: ["images/gem-02.gif", "images/gem-05.gif", "images/gem-09.gif"] },
    { name: 'Coral', price: 2.99, soldOut: false, description: "description comes here", 
    images: ["images/gem-02.gif", "images/gem-05.gif", "images/gem-09.gif"] },
    { name: 'Topaz', price: 11.34, soldOut: false, description: "description comes here", 
    images: ["images/gem-02.gif", "images/gem-05.gif", "images/gem-09.gif"] },
  ];

})();
