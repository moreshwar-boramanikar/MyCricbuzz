var myApp = angular.module('myproject');

myApp.controller("detailsController",function($http, $stateParams,$scope,data){
    data.forEach(d => {
        if(d.id == $stateParams.id){
            $scope.data = d;     
        }
    });
});