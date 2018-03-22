var myApp = angular.module('myproject');

myApp.controller("listPlayersController", ['$rootScope','$scope','data',function($rootScope,$scope,data){
    $scope.data = data;
    $rootScope.title = "Player List";
}]);
 