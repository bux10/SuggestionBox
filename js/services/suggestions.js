app.factory('suggestions', [function () {
    var demoSuggestions = {
        posts: [
            {
                title: 'Free pizza at club meetings',
                upvotes: 10,
                comments: [
                    {
                        comment: 'test'
                    }
                ]
            },
            {
                title: 'End all club emails with Laffy Taffy jokes',
                upvotes: 9,
                comments: []
            },
            {
                title: 'Retrofit water fountain with Gatorade',
                upvotes: 2,
                comments: []
            },
            {
                title: 'Sing Bon Jovi\'s "Living on a Prayer" halfway through meetings',
                upvotes: 15,
                comments: []
            }
        ]
    }
    return demoSuggestions;
}]);