'use strict';

/**
 * @ngdoc function
 * @name 0FiFipornoDeskApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the 0FiFipornoDeskApp
 */
angular.module('oyblogApp')
  .controller('MenuCtrl', function ($scope,jsonpService) {
	  
	$scope.menuOK =false;  
    
	jsonpService.getJSONP('http://104.131.99.251/keywords?quant=10').then(function (data){
				
		$scope.data = data;
		$scope.menuOK =true; 
						
		
	});
    
    
  });
