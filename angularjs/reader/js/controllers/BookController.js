app.controller('BookController', ['$scope', 'books', '$routeParams', function($scope, books, $routeParams) {
  books.success(function(data) {
    $scope.currentIndex = parseInt($routeParams.booksId);
    $scope.book = data[$routeParams.booksId];
  });
}]);

