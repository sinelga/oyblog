'use strict';

/**
 * @ngdoc function
 * @name 0FiFipornoDeskApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the 0FiFipornoDeskApp
 */
angular.module('oyblogApp')
  .controller('MenuCtrl', function ($scope,jsonpService,$rootScope) {
	  
	$scope.menuOK =false; 

	jsonpService.getJSON('/menu?quant=2').then(function (data){
				
		$scope.data = data;
		$scope.menuOK =true; 
								
	});
    	
	$rootScope.$on('closeMenu', function(event) {
		
		$scope.menuOK =false; 
		
	})
		
    
  });
