'use strict';

/**
 * @ngdoc service
 * @name oyblogApp.jsonpservice
 * @description
 * # jsonpservice
 * Service in the oyblogApp.
 */
angular.module('oyblogApp')
  .service('jsonpService', function ($http) {

	  	  
	  return {
	  	  
	  getJSONP: function(url) {
	  	  
	  		
			  return $http.get(url,{cache:true}).then(function(response){
  				  
				  return response.data;				  
				  
				  				  
			  });
	  		
	  
	  	}
	  	  	  
	  
	  };
	  	  	  
	  
  });