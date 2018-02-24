app.controller('updateFormationController', function($scope, $http, $routeParams) {

//	var promise = $routeParams.nom;

	   $http.get("/formations/"+$routeParams.formation)
 	   .then( function(response){
// 		   $scope.IsVisible = $scope.IsVisible =true ;
 		   $scope.dt=response.data;
 	   });
	   
	   $scope.updatefunc = function(){
			
     var updateFormation = $scope.dt;
    $http.put("/formations",updateFormation);
			

		}
	

});