var myApp = angular.module('myproject');

myApp.controller("playerDetailsController", ['$rootScope','$scope','$stateParams','teamdata','rankingsFactory',function($rootScope,$scope,$stateParams,teamdata, rankingsFactory){
    $scope.data = teamdata;
    $scope.id = $stateParams.id;
    console.log("$$",$stateParams);

    $rootScope.title = $stateParams.id?"Personal Information":"Top Players";
    rankingsFactory.getPlayerDetails($scope.id)
        .then(response=>{
            console.log("res-->",response);
            $scope.data = response;
        })
        .catch(error=>{
            console.log("error-->", error);
        })
}]);