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
    function getPlayerDetails(id){
        return $http(request)
            .then(response=>{
                var _player;
                response.data['playerDetails'].forEach(player => {
                    if(player.id == id){
                        console.log("ppp->",player);
                        _player=player;
                    }
                });
                return _player;
            })
    }
    return {
        getRankingData:getRankingData,
        getPlayerDetails:getPlayerDetails
    }
})