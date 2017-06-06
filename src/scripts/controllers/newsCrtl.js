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