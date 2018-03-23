var myApp = angular.module('myproject');

myApp.factory("rankingsFactory", function($http){
    var request = {
        method: 'get',
        url: '/data/data.json',
        dataType: 'json',
        contentType: "application/json"
    };

    function getRankingData(name, format){
        if(!name || !format){
            return Promise.reject();
        }
        return $http(request)
            .then(response=>{
                return response.data[name][0][format];
            })
    }
    return {
        getRankingData:getRankingData 
    }
})