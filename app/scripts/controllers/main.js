'use strict';

/**
 * @ngdoc function
 * @name oyblogApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the oyblogApp
 */
angular.module('oyblogApp')
  .controller('MainCtrl', function ($scope,$state) {
	  
	  $state.go('main', {});
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
