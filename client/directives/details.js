var myApp = angular.module("myproject");


myApp.directive("details", function() {
	return {
		restrict: "E",
        templateUrl: "views/details.html",
        scope: {
            id:'=',
            url: '=',
            comments:"=",
            description:'='
        },
	};
});