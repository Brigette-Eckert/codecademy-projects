app.controller('DayController', ['$scope', '$events', '$routeParams', function($scope, $events, $routeParams) {
	$events.success(function(data){
		$scope.day = data;
		$scope.events = data.events;
	})

}]);