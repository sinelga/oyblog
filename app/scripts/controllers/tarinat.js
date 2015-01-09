'use strict';

/**
 * @ngdoc function
 * @name oyblogApp.controller:TarinatCtrl
 * @description
 * # TarinatCtrl
 * Controller of the oyblogApp
 */
angular.module('oyblogApp')
  .controller('TarinatCtrl', function ($scope,$rootScope,$state,$stateParams,$timeout,freeparagraph) {

		  freeparagraph.getParagraph($stateParams).then(function(data) {
			  			  
				$scope.loadTarina = true;							
				$scope.data = data;
				$scope.tittelin=$stateParams.otsikko;
				$scope.aihe =$stateParams.aihe;
				$scope.htmlReady();
			  			  
			  
		  },function() {
			 
			  locale.log('Could not obtain data');
		  });
	  
	 
		
		if (angular.element('#FI').length) {
			
			var timer =	$timeout(function() {
				
				$rootScope.$broadcast('closeMenu')
				$state.go('main', {});
				
				
			}, 60000);
		
								
		}
		
							
	     $scope.$on(
                    "$destroy",
                    function( event ) {
                    	
                    	if (angular.element('#FI').length) {
                    	
                    		$timeout.cancel(timer);
                        
                    	}

                    }
         );
		
	  

  });
