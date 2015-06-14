/**
 * @ngdoc controller
 * @name listController
 *
 * @description
 * This contains all the CRUD actions for lists and cards
 *
 */

(function () {
  'use strict';

  angular.module('puliTrello.components').controller('ListController',
    function ListController($scope, apiService) {
      var listCtrl = this,
        prevItemValue;

      $scope.lists = apiService.lists($scope.boardId);

      /**
       *
       * @param {Array} collection
       * @param {Object} item
       */
      listCtrl.save = function (collection, item) {
        item.isEdit = false;
        item.isNew = false;
        collection.$save(collection.$getRecord(item.$id));
      };

      /**
       * @param {Array} collection
       * @param {Object} item
       */
      listCtrl.remove = function (collection, item) {
        collection.$remove(collection.$getRecord(item.$id));
      };

      /**
       * Set item to edit mode.
       * First check if other items are in edit mode, then close them.
       * @param {Object} card
       */
      listCtrl.edit = function (collection, currentItem) {
        angular.forEach(collection, function (item) {
          if (item == currentItem) return; //skip current item
          if (item.isEdit) {
            revertValue(item);
          }
        });

        //set card to edit mode
        prevItemValue = currentItem.title;
        currentItem.isEdit = true;
      };

      /**
       * Cancel edit mode from item (for example if user clicks out)
       * - Remove card if it's new and nothing filled in
       * - Revert value back to original state if not new card
       *
       * @param collection
       */
      listCtrl.cancel = function (collection) {
        angular.forEach(collection, function (item) {

          // Only continue when 'edit mode' is enabled
          if (!item.isEdit) return;

          if (item.isNew) {
            listCtrl.remove(collection, item);
          } else {
            revertValue(item);
          }

        });
      };

      function revertValue(item) {
        if (prevItemValue) {
          item.title = prevItemValue;
          item.isEdit = false;
          prevItemValue = '';
        }
      }

      /**
       * @param {Array} collection
       */
      listCtrl.add = function (collection) {
        collection.$add({'title': "", isEdit: true, isNew: true});
      };
    }
  );
})();
