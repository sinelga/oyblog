'use strict';

/**
 * @ngdoc function
 * @name oyblogApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the oyblogApp
 */
angular.module('oyblogApp')
  .controller('MainCtrl', function ($scope,$rootScope,$state,$http,$timeout,rfc4122,jsonpService) {
	  
	  $scope.payable = true;
	  $scope.showPayButton = true;
	  var uuid = rfc4122.v4();
	  
	  jsonpService.getJSONP('http://79.125.21.225:3090/get_characters?number=50&orient=portrait&callback=JSON_CALLBACK').then(function (data){
		  
	  	  $scope.characters =data.data;
	  	  $scope.selectedCharacter =data.data[data.data.length -1];
	  	  $scope.loadOK = true;
	  	  $scope.widget = {title: 'Hei '+data.data[data.data.length -1].name+'!'};
	  	  $scope.widget2 ='';	  	  
//	  	  $scope.htmlReady();		  
		  
	  });	  
	  
	  		  
	  $scope.selectCharacter = function(character) {
			
			$scope.selectedCharacter=character;
			$scope.widget = {title: 'Hei '+character.name+'!'};			
			$scope.showPayButton =true;
			
		};
	  
	    
	  $scope.startChat= function() {
		  $scope.showAnswer = false;
		  
		  this.chatTimer();

		  $scope.mAsk =  this.widget.title;
		  this.askChat();

		  angular.element('#myModal').modal('show');
		  
	  };
	  
	  $scope.stopChat= function() {
		  
		  angular.element('#myModal').modal('hide');	  
		  clearInterval($scope.timer);
		  
	  };
	   
	  $scope.askChat= function() {
		  
		  
		  var urlstr = 'http://79.125.25.179:8000/bot_answer/?uuid='+uuid+'&phone='+this.selectedCharacter.phone+'&say='+$scope.mAsk+'&callback=JSON_CALLBACK';
		  
		  $http.jsonp(urlstr).success(function(data){
			  
			  $scope.mAnswer = data.answer;
			  
			  
		  });
		  	  
	  };
	  
	  $scope.chatContinue = function() {
		  
		  if (this.widget2 === '') {

			  $scope.placeholderstr=this.placeholderstr +'?';		  
			  
			  
		  } else {
			  
			  $scope.widget = {title: this.widget2};
			  $scope.showAnswer = false;
			  $scope.mAsk =  this.widget2;
			  this.chatTimer();
			  this.askChat();
			  
			  
		  }
		  
	  };
	  
	        
	  $scope.chatTimer= function() {
		  
		  $scope.clock = 0;
		  
		  var rand =Math.floor(Math.random() * (1 + 20 - 5)) + 5;
		  
		  $scope.timer = setInterval(function(){
		        $scope.$apply(function() {
		        	
		            $scope.clock += 1;
		            
		            if ($scope.clock > rand) {
		            	clearInterval($scope.timer);
		            	$scope.showAnswer = true;
		            	$scope.widget2 ='';
		            	$scope.placeholderstr='???';
		            		            	
		            }	            
		            
		        });
		    }, 1000);
		  	  
	  }; 
	  
	  
		if (angular.element('#FI').length) {
			
			var timer =	$timeout(function() {
				
				$rootScope.$broadcast('closeMenu')
				
				
			}, 60000);
		
								
		}		  
	  
  });
