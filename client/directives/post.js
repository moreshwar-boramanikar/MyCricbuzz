var myApp = angular.module("myproject");


myApp.directive("post", function() {
	return {
		restrict: "E",
        templateUrl: "views/list.html",
        scope: {
            id:'=',
            url: '=',
            comments:"=",
            description:'='
        },
	};
});