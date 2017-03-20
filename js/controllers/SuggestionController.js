app.controller('SuggestionController', ['$scope', '$routeParams', 'suggestions', function($scope,$routeParams,suggestions){
    $scope.post = suggestions.posts[$routeParams.id];  
    console.log($scope.post);
    $scope.upVote = function (comment) {
        comment.upvotes += 1;
    };

    $scope.addComment = function (comment) {
        if (!$scope.body || $scope.body === "") {
            return;
        }
        post.comments.push({
            body: comment,
            upvotes: 0
        });
        $scope.body = '';
    }

}]);