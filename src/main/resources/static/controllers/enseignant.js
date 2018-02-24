app.controller('enseignantController', function($scope, $http) {
	
	
	$scope.IsVisible = false ;
	// $http is a service used to make request using ajax
	// $scope is a service that holds the variables that angular should watch
	
	// variable that holds the id of the element , we want to update
    $scope.updateId = -1;
    $scope.operation = true;

    //visibilite button Ajouter 
//    
 
	// request all data from database to show it in the table
    $http.get("/enseignant")
    .then(function(response) {
    	
        $scope.enseignants = response.data;
        console.log($scope.enseignants);
    });
    
    $scope.deletedata = function (noEnseignant){
    	
    	//"http://localhost:8080/supprimer?id=8"
    	
    	console.log(codeFormation);
    	
    	$http.delete("/enseignant/Supp/"+noEnseignant)
    	.then(function(){
    		$http.get("/enseignant")
    	    .then(function(response) {
    	        $scope.enseignants = response.data;
    	        console.log(response);
    	    });
    		
    	});
    	
    	
    }
    
});