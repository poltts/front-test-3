 
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