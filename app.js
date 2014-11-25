(function() {
    var app = angular.module('gemStore', []);
    app.controller('StoreController', function() {
        this.products = gems;
    });
    app.controller('TabController', function() {
        // Sets default tab to first tab
        this.tab = 1;
        this.setTab = function(inTab) {
            this.tab = inTab;
        };
        this.isSet = function(inTab) {
            return this.tab === inTab;
        };
    });
    app.controller('GalleryController', function() {
        this.current = 0;
        this.setCurrent = function(newGallery) {
            this.current = newGallery || 0;
        };
    });
    app.controller('ReviewController', function() {
        this.review = {};
        this.addReview = function(product) {
            this.review.createdOn = Date.now();
            product.reviews.push(this.review);
            this.review = {};
        };
    });
    var gems = [{
        name: 'Azurite',
        price: 2.95,
        soldOut: false,
        description: "description comes here",
        images: ["images/gem-02.gif", "images/gem-05.gif", "images/gem-09.gif"],
        reviews: [{
            stars: 5,
            body: "I love this gem!",
            author: "joe@example.org",
            createdOn: 1397490980837
        }, {
            stars: 1,
            body: "This gem sucks.",
            author: "tim@example.org",
            createdOn: 1397490980837
        }]
    }, {
        name: 'Bloodstone',
        price: 5.95,
        soldOut: true,
        description: "description comes here",
        images: ["images/gem-02.gif", "images/gem-05.gif", "images/gem-09.gif"]
    }, {
        name: 'Zircon',
        price: 3.95,
        soldOut: false,
        description: "description comes here",
        images: ["images/gem-02.gif", "images/gem-05.gif", "images/gem-09.gif"],
        reviews: [{
            stars: 5,
            body: "I love this gem!",
            author: "joe@example.org",
            createdOn: 1397490980837
        }, {
            stars: 1,
            body: "This gem sucks.",
            author: "tim@example.org",
            createdOn: 1397490980837
        }]
    }, {
        name: 'Amber',
        price: 1,
        soldOut: false,
        description: "description comes here",
        images: ["images/gem-02.gif", "images/gem-05.gif", "images/gem-09.gif"]
    }, {
        name: 'Citrine',
        price: 21.3,
        soldOut: true,
        description: "description comes here",
        images: ["images/gem-02.gif", "images/gem-05.gif", "images/gem-09.gif"]
    }, {
        name: 'Coral',
        price: 2.99,
        soldOut: false,
        description: "description comes here",
        images: ["images/gem-02.gif", "images/gem-05.gif", "images/gem-09.gif"]
    }, {
        name: 'Topaz',
        price: 11.34,
        soldOut: false,
        description: "description comes here",
        images: ["images/gem-02.gif", "images/gem-05.gif", "images/gem-09.gif"],
        reviews: [{
            stars: 5,
            body: "I love this gem!",
            author: "joe@example.org",
            createdOn: 1397490980837
        }]
    }, ];
})();