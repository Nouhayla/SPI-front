/**
 * 
 */
app.controller('enseignantDetailController', function($scope, $http, $routeParams) {

//	var promise = $routeParams.nom;

	   $http.get("/enseignant/id/"+$routeParams.id)
 	   .then( function(response){
 		   console.log("/enseignant/id/"+$routeParams.id);
 		   console.log('resp ' + response.data)
// 		   $scope.IsVisible = $scope.IsVisible =true ;
 		   $scope.detailEnseignant=response.data;
 	   });
	
    $scope.detail=function(nom){
 	   console.log("dddadazdaz")
 	   console.log(nom)
 	   $http.get("/enseignant/nom/"+nom)
 	   .then( function(response){

 		   $scope.detailEnseignant=response.data;
 		  console.log( $scope.detailEnseignant)
 	   });
    }
});