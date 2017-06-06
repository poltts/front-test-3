 
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