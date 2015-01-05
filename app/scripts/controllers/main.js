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
	  
	  $state.go('main', {
		  		  
	  });
	  
//	  $timeout(function() {
		  
		  $scope.htmlReady('main');
		  
//		  if (typeof window.callPhantom === 'function') {
//			  window.callPhantom({ hello: 'main' });
//			}
		  		  
		  
//	  }, 100);
	  
	 
//	  $rootScope.$on('$renderStaticReady', function() {
//		    $window.$renderStaticReady = true;
//		  });
//	  $rootScope.$on('$routeChangeBegin', function() {
//		    $window.$renderStaticReady = false;
//		  });
	  
  });
