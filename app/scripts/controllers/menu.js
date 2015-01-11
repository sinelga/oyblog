'use strict';

/**
 * @ngdoc function
 * @name 0FiFipornoDeskApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the 0FiFipornoDeskApp
 */
angular.module('oyblogApp')
  .controller('MenuCtrl', function ($scope,jsonpService,$rootScope,$location) {
	  
	$scope.menuOK =false; 

	jsonpService.getJSON('http://'+$location.host()+'/menu?quant=10').then(function (data){
				
		$scope.data = data;
		$scope.menuOK =true; 
								
	});
    	
	$rootScope.$on('closeMenu', function(event) {
		
		$scope.menuOK =false; 
		
	})
		
    
  });
