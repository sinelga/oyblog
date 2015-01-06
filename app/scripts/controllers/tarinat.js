'use strict';

/**
 * @ngdoc function
 * @name oyblogApp.controller:TarinatCtrl
 * @description
 * # TarinatCtrl
 * Controller of the oyblogApp
 */
angular.module('oyblogApp')
  .controller('TarinatCtrl', function ($scope,$rootScope,$state,freeparagraph) {
	  
	  $state.go('tarinat', function () {
		  
		  console.log('tarinat');
		  
	  });
	  
	  $scope.newTarinaOK = false;
	  
	  
	  $scope.getParagraph = function() {
		 
		  freeparagraph.getParagraph().then(function(data) {
			  			  
			  $scope.weatherDescription = data;
			  $scope.newTarinaOK = true;	  
			  
		  },function() {
			  $scope.weatherDescription = 'Could not obtain data';
		  });
	  };
	  
	  $scope.getParagraph();
	  
	  $rootScope.$on('menuClick', function(event,data) {
		  $scope.newTarinaOK = false;
		  console.log(data);
		  $scope.getParagraph();
	  	
	  });
	  

  });
