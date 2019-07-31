GjApp.config(["$routeProvider", function ($routeProvider) {

    $routeProvider
        .when('/promotions', {
            templateUrl: '/views/promotions.html',
            controller: ''
        })
        .when('/guarantees', {
            templateUrl: '',
            controller: ''
        })
        .when('/delivery', {
            templateUrl: '',
            controller: ''
        })
        .when('/cooperation', {
            templateUrl: '',
            controller: ''
        })
        .when('/contacts', {
            templateUrl: '',
            controller: ''
        })
        .when('/contact-success', {
            templateUrl: 'views/contact-success.html',
            controller: 'headerController'
        })
        .otherwise({
            redirectTo:'/promotions'
        });

}]);