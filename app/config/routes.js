(function () {
  'use strict';

  angular.module('puliTrello')
    .config(function ($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: '../views/home.html',
          controller: 'HomeController as homeCtrl'
        })
        .state('board', {
          url: '/board/:id',
          templateUrl: '../views/board.html',
          controller: 'BoardController as boardCtrl'
        });
    });
})();
