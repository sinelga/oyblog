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

	jsonpService.getJSON('http://104.131.99.251/keywords?quant=10').then(function (data){
				
		$scope.data = data;
		$scope.menuOK =true; 
								
	});
    
	
	 $scope.menuClick = function(menuObj) {
		 
		 
		 $rootScope.$broadcast('menuClick',menuObj)
			
		};
	
	
    
  });
