let MyController = function ($scope) {

  $scope.count = 0;
  $scope.message = 'likes';

  $scope.incrementByOne = function () {

    $scope.count = $scope.count + 1;

    $scope.message = ($scope.count === 1) ? 'like' : 'likes';

  };

};

MyController.$inject = ['$scope'];

export default MyController;