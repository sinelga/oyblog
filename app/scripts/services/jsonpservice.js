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
	  
	  	  
	  this.getJSON = function(url) {
	  	  
	  		
			  return $http.get(url,{cache:true}).then(function(response){
  				  
				  return response.data;				  
				  				  				  
			  });
	  			  
	  	}
	  
	  this.getJSONP= function(url) {
	  	  
	  		return $http.jsonp(url).success(function(response){

	  			return response;
		  	
	  		});
	  
	  	}
	  
	  	  	  	  
  });