var myApp = angular.module("myproject");


myApp.directive("teamranking", function() {
	return {
        restrict: "E",
        templateUrl: "views/teamranking.html",
        scope: {
            id:'=',
            flagurl: '=',
            name:"=",
            points:'='
        },
        controller:function($scope){
            console.log("scope-->", $scope);
        }
	};
});