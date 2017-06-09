 
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