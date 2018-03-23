var myApp = angular.module('myproject');

myApp.controller("topPlayersController",function($http, $stateParams,$scope,topplayers){
    topplayers.forEach(d => {
        if(d.id == $stateParams.id){
            $scope.data = d;     
        }
    });
});