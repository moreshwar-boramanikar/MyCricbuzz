var myApp = angular.module('myproject', ['ui.router',"myconstants","myconstants1","topPlayers"]);

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

  var rankings = {
    name: 'ranking',
    url: '/rankings/:name/:format',
    controller:"teamRankingsController",
    templateUrl: 'views/teamRankings.html'
  }

  var topPlayers = {
    name: 'topPlayers',
    url: '/topPlayers',
    controller:"teamRankingsController",
    templateUrl: 'views/topPlayers.html'
  }
  
  var topPlayerDetailsState = {
    name: 'topPlayerDetailsState',
    url: '/topPlayers/:id',
    controller:"topPlayersController",
    templateUrl: 'views/topPlayersDetails.html'
  }

  $stateProvider.state(listPlayersState);
  $stateProvider.state(detailsState);
  $stateProvider.state(rankings);
  $stateProvider.state(topPlayers);
  $stateProvider.state(topPlayerDetailsState);
});