 
/* SLIDE DIRECTIVE   */
site.directive('slide', function() { 
  return { 
    restrict: 'AE',
    replace: true,
    scope: {
      images: '='
    },
    link: function(scope, elem, attrs) {
      scope.currentIndex = 0;
      scope.total = scope.images.length ;

      scope.isCurrent = function(id){
        if(scope.currentIndex == id){
          return true;
        }
        return false;
      };

      scope.move = function(id){
        return scope.currentIndex = id;
      };
      
      scope.$watch('currentIndex', function() {
      scope.images.forEach(function(image) {
        image.visible = false; 
      });

      scope.images[scope.currentIndex].visible = true;

    });
    },
    templateUrl: '../../../views/templates/slide.html'
  }; 
});