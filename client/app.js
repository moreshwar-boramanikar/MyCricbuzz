var myApp = angular.module('myproject', ['ui.router',"myconstants","myconstants1"]);

myApp.config(function($stateProvider) {
  
  var listPlayersState = {
    name: 'listPlayers',
    url: '/list',
    controller:"listPlayersController",
    templateUrl: 'views/listPlayers.html'
  }
  
  var detailsState = {
    name: 'details',
    url: '/details/:id',
    controller:"detailsController",
    templateUrl: 'views/showDetails.html'
  }

  var teamRankings = {
    name: 'teamRankings',
    url: '/teamRankings',
    controller:"teamRankingsController",
    templateUrl: 'views/teamRankings.html'
  }

  $stateProvider.state(listPlayersState);
  $stateProvider.state(detailsState);
  $stateProvider.state(teamRankings);
});