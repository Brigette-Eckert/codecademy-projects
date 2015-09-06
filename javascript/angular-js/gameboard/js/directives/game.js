app.directive("game", function(){
	console.log("Hello");
  return {
  	restrict: "E",
    scope: {
    	info: '='
    },
   	templateUrl: "js/directives/game.html"
  
  };
});