app.controller('HomeController', ['$scope', 'suggestions', function ($scope, suggestions) {
    $scope.posts = suggestions.posts;

    $scope.upVote = function (post) {
        post.upvotes += 1;
    };

    $scope.addSuggestion = function () {
        if (!$scope.title || $scope.title === "") {
            return;
        }
        $scope.posts.push({
            title: $scope.title,
            upvotes: 0,
            comments: []
        });
        $scope.title = '';
    }

}]);