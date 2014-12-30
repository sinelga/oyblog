'use strict';

/**
 * @ngdoc function
 * @name oyblogApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the oyblogApp
 */
angular.module('oyblogApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
