var myApp = angular.module('myproject');

myApp.controller("teamRankingsController", ['$rootScope','$scope','$stateParams','teamdata','rankingsFactory',function($rootScope,$scope,$stateParams,teamdata, rankingsFactory){
    $scope.data = teamdata;
    $scope.tab = $stateParams.name;
    $scope.format = $stateParams.format;
    
    $rootScope.title = $stateParams.name?"Rankings":"Top Players";
    rankingsFactory.getRankingData($stateParams.name,$stateParams.format)
        .then(response=>{
            $scope.data = response;
        })
        .catch(error=>{
            console.log("error-->", error);
        })
}]);