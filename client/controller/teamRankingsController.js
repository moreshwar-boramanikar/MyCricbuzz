var myApp = angular.module('myproject');

myApp.controller("teamRankingsController", ['$rootScope','$scope','teamdata',function($rootScope,$scope,teamdata){
    $scope.data = teamdata;
    $rootScope.title = "Team Ranking";
}]);