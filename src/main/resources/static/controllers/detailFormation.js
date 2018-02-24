/**
 * 
 */
app.controller('formationDetailController', function($scope, $http, $routeParams) {

//	var promise = $routeParams.nom;

	   $http.get("/formations/nom/"+$routeParams.id)
 	   .then( function(response){
// 		   $scope.IsVisible = $scope.IsVisible =true ;
 		   $scope.detailFormation=response.data;
 	   });
	
    $scope.detail=function(nom){
 	   console.log("dddadazdaz");
 	   console.log(nom)
 	   $http.get("/formations/nom/"+nom)
 	   .then( function(response){

 		   $scope.detailFormation=response.data;
 	   });
    }
});