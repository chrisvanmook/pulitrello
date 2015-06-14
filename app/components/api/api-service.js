/**
 * @ngdoc service
 * @name apiService
 * @description
 * The `apiService` provides static methods for manipulating data.
 */

(function () {

  'use strict';

  angular.module('puliTrello.components').factory('apiService', apiService);

  function apiService($firebaseArray, $firebaseObject, SETTINGS) {

    var service = {};


    service.ref = new Firebase(SETTINGS.API_URL);

    /**
     * Get boards
     * @returns {Array}
     */
    service.boards = function () {
      return $firebaseArray(service.ref.child('boards'));
    };

    /**
     * Get single board info
     * @param boardID
     * @returns {Array}
     */
    service.getBoardInfo = function (boardID) {
      return $firebaseObject(service.ref.child('boards').child(boardID));
    };

    /**
     * Get an array with lists information
     * @param boardID
     * @returns {Array}
     */
    service.lists = function (boardID) {
      return $firebaseArray(service.ref.child('lists').child(boardID));
    };

    /**
     * @param boardID
     * @param listID
     * @returns {Array}
     */
    service.cards = function (boardID, listID) {
      return $firebaseArray(service.ref.child('lists').child(boardID).child(listID).child('cards'));
    };

    return service;
  }

})();
