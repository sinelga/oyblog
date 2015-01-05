'use strict';

/**
 * @ngdoc service
 * @name oyblogApp.freeparagraph
 * @description
 * # freeparagraph
 * Factory in the oyblogApp.
 */
angular.module('oyblogApp')
  .factory('freeparagraph', function ($http) {

	  return {
		  getParagraph : function() {
			  			  			  
			  return $http.get('http://104.131.99.251/freeparagraph',{cache:true}).then(function(response){
								  				  
				  return response.data;
				  
				  
				  
				  
				  
				  
			  });
		  }
		  
	  }
	  	  
  });
