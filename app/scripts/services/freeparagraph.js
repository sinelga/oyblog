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
		  getParagraph : function(stateParams) {
			  
			  var path = stateParams.otsikko+"/"+stateParams.aihe;
			  console.log(path);
			  
			  			  			  
			  return $http.get('/paragraph?menupath='+path).then(function(response){
								  				  
				  return response.data;				  
				  
				  				  
			  });
		  }
		  
	  }
	  	  
  });
