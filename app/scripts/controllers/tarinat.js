'use strict';

/**
 * @ngdoc function
 * @name oyblogApp.controller:TarinatCtrl
 * @description
 * # TarinatCtrl
 * Controller of the oyblogApp
 */
angular.module('oyblogApp')
  .controller('TarinatCtrl', function ($scope,$state,freeparagraph) {
	  
	  $state.go('tarinat', {});

	  $scope.getParagraph = function() {
		 
		  freeparagraph.getParagraph().then(function(data) {
			  
			  
			  $scope.weatherDescription = data;
//			  $scope.$emit('$renderStaticReady');
			  $scope.htmlReady('tarinat');
			  
//			  if (typeof window.callPhantom === 'function') {
//				  window.callPhantom({ hello: 'tarinat' });
//			  }
			  
			  
		  },function() {
			  $scope.weatherDescription = 'Could not obtain data';
		  });
	  };
	  
	  $scope.getParagraph();
	  
	  

  });
