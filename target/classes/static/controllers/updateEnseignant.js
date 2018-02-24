app.controller('updateEnseignantController', function($scope, $http, $routeParams) {

//	var promise = $routeParams.nom;

	   $http.get("/enseignant/id/"+$routeParams.enseignant)
 	   .then( function(response){
// 		   $scope.IsVisible = $scope.IsVisible =true ;
 		   $scope.dt=response.data;
 		  console.log($scope.dt)
 	   });
	   
	   $scope.updatefunc = function(){
			
     var updateEnseignant = $scope.dt;
     //console.log(noEnseignant)
    $http.put("/enseignant",updateEnseignant);
			

		}
	

});