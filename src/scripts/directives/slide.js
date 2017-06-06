 
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
      var sliderFunc = function() {
          timer = $timeout(function() {
            scope.next();
            timer = $timeout(sliderFunc, 5000);
          } , 5000);
      };
      scope.currentIndex = 0;
      scope.$watch('currentIndex', function() {
      scope.images.forEach(function(image) {
        image.visible = false; 
      });


      scope.images[scope.currentIndex].visible = true;
      sliderFunc();

      scope.$on('$destroy', function() {
        $timeout.cancel(timer);
      });

    });
    },
    templateUrl: '../../../views/templates/slide.html'
  }; 
});