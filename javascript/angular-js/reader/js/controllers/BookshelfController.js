app.controller('BookshelfController', ['$scope', '$books', 
'$routeParams', function($scope. $books, $routeParams) {
	books.success(function(data){
		$scope.myBooks = data;
	})
}]);