/**
 * @license PuliTrello v0.0.0
 * @copyright 2015 Chris van Mook.
 * @description Pulilab assignment.
 *
 * @namespace angular_module
 * @requires angular
 * @requires ui.router
 * @requires firebase
 */

(function() {
  "use strict";

  angular.module('puliTrello', [
    'ui.router',
    'firebase',
    'puliTrello.components',
    'puliTrello.sections'
  ]);

  angular.module('puliTrello.components', []);
  angular.module('puliTrello.sections', []);

  angular.module('puliTrello').run(function () {});
})();
