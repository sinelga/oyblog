'use strict';

/**
 * @ngdoc function
 * @name oyblogApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the oyblogApp
 */
angular.module('oyblogApp')
  .controller('AboutCtrl', function ($scope,$state) {
	  
	  $state.go('about', {});
	  
//	  if (typeof window.callPhantom === 'function') {
//		  window.callPhantom({ hello: 'about' });
//	  }
	  $scope.htmlReady('about');
	  

  });
