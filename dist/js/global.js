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

 
/* SLIDE DIRECTIVE   */
site.directive('box', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '='
    }, 
    templateUrl: '../../../views/templates/box.html'
  }; 
});
 
/* BOX NEWS DIRECTIVE   */
site.directive('news', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      info: '='
    }, 
    templateUrl: '../../../views/templates/box-news.html'
  }; 
});
 
/* SLIDE DIRECTIVE   */
site.directive('slide', function($timeout) { 
  return { 
    restrict: 'AE',
    replace: true,
    scope: {
      images: '='
    },
    link: function(scope, elem, attrs) {
      var timer; 
      var total = scope.images.length - 1;
      scope.currentIndex = 0;
      scope.total = scope.images.length ;

      scope.isCurrent = function(id){
        if(scope.currentIndex == id){
          return true;
        }
        return false;
      };
      var sliderMove = function() {
        timer = $timeout(function() { 
          scope.next();
          timer = $timeout(sliderMove, 5000);
        }, 5000);
      }; 
      scope.next = function() { 
        if(scope.currentIndex == total){
          scope.currentIndex = 0;
        }else{
          scope.currentIndex = scope.currentIndex + 1;
        }
         
      };
      console.log(total);
      scope.move = function(id){
        return scope.currentIndex = id;
      };
      scope.images.forEach(function(image) {
        image.visible = false; 
      });
      scope.images[scope.currentIndex].visible = true;
      scope.$watch('currentIndex', function() {
      console.log(scope.currentIndex);
        scope.$on('$destroy', function() {
          $timeout.cancel(timer); 
        });
      });
        sliderMove();

    },
    templateUrl: '../../../views/templates/slide.html'
  }; 
});
/* HOME CONTROLLER  */
 site.controller('homeController', ['$scope', '$location', '$route', '$routeParams', function ($scope, $location, $route, $routeParams) {
     $scope.activePage = $location.path();
     $scope.activeTab = 'tab1';
	 $scope.images = [
		{
			title: 'Lorem ipsum lorem 1',
			img: 'http://via.placeholder.com/850x520.png',
            alt: 'placeholder 1',
			link: 'http://via.placeholder.com',
			id: 0
		},
		{
			title: 'Lorem ipsum lorem 2',
			img: 'http://via.placeholder.com/850x520',
            alt: 'placeholder 2',
			link: 'http://via.placeholder.com',
			id: 1	
		},
		{
			title: 'Lorem ipsum lorem 3',
			img: 'http://via.placeholder.com/850x520',
            alt: 'placeholder 3',
			link: 'http://via.placeholder.com',
			id: 2	
		},
		{
			title: 'Lorem ipsum lorem 4',
			img: 'http://via.placeholder.com/850x520',
            alt: 'placeholder 4',
			link: 'http://via.placeholder.com',
			id: 3	
		}
	 ];

	 $scope.boxes = [
		{
			id: 1,
			img: 'http://via.placeholder.com/350x210.png',
			alt: 'placeholder',
			txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed dapibus tortor, sed ornare nibh. Mauris vitae dapibus tortor. Morbi facilisis varius ligula non tincidunt.'
		},
		{
			id: 2,
			img: 'http://via.placeholder.com/350x210.png',
			alt: 'placeholder',
			txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed dapibus tortor, sed ornare nibh. Mauris vitae dapibus tortor. Morbi facilisis varius ligula non tincidunt.'
		},
		{
			id: 3,
			img: 'http://via.placeholder.com/350x210.png',
			alt: 'placeholder',
			txt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed dapibus tortor, sed ornare nibh. Mauris vitae dapibus tortor. Morbi facilisis varius ligula non tincidunt.'
		}
	 ];

	 $scope.tableData = [
		{
			string: 'text 1',
			integer: 1,
			boolean: false
		},
		{
			string: 'text 2',
			integer: 2,
			boolean: true
		},
		{
			string: 'text 3',
			integer: 3,
			boolean: false
		}
	 ];

     $scope.changeTab = function(tab){ 
		return $scope.activeTab = tab; 
     };

     $scope.isActiveTab = function(tab){ 
		if($scope.activeTab == tab){
			return true;
		}else{
			return false;
		}
     };
}]);  
/* NEWS CONTROLLER  */
site.controller('newsController', ['$scope', '$location', '$http', '$route', '$routeParams',
  function ($scope, $location, $http, $route, $routeParams) {
    $scope.activePage = $location.path();
    $scope.news;
    $scope.newsData = [];
    $scope.newsTotal;
    $scope.currentId = $routeParams.id;

    $scope.pageCount = 6;

    $scope.getNews = function(){
        $http.get('https://api.myjson.com/bins/a56hd')
        .then(function(response) {
            $scope.news = response.data;
            $scope.newsData = response.data;
            $scope.newsTotal = response.data.length;
            $scope.apply();
        }, function(err) {
            console.log(err);
        });
    };
    $scope.getNewsId = function(){
        var id = ($scope.currentId - 1);
        $http.get('https://api.myjson.com/bins/a56hd')
        .then(function(response) {
            $scope.newsData = response.data[id]; 
            console.log(response.data[id]); 
        }, function(err) {
            console.log(err);
        });

    };
     console.log($scope.currentId);
     console.log($scope.news);

    // $scope.getNews();
    // $scope.numPages = Math.floor($scope.newsTotal/$scope.pageCount);

    $scope.openBox = function(id){
        $scope.$apply(function() {
            $location.path('/news/'+id);
        });
    };


}]);