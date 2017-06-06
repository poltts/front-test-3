const site = angular.module('site', ['ngRoute', 'ngAnimate']);

/* CONFIG  */
site.config(['$routeProvider','$httpProvider','$locationProvider', function($routeProvider, $httpProvider, $locationProvider) {

	$routeProvider

	.when('/', {
		controller : 'homeController',
		templateUrl : 'views/home.html'
	})

		.when('/news', {
			controller : 'newsController',
			templateUrl: 'views/news.html'
		})

		.when('/news/:id', {
			controller : 'newsController',
			templateUrl: 'views/news_single.html'
		})

		.otherwise('/');
        
}]);
