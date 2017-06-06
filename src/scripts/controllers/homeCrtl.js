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