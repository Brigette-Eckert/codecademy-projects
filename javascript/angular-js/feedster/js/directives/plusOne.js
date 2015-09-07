app.directive("plusOne", function(){
     return {
        restrict:'E',
        scope: {},
        templateUrl: "js/directives/plusOne.html",
        link: 
		function like(scope, element, attrs) {
		  scope.like = function() {
		  	console.log("liked")
		    element.toggleClass('btn-like');
		  }
		}
              
              }
       });