/**
 * 
 */
app.controller('ajouterEnseignantController', function($scope, $http) { 
	 $scope.operation = true;
$scope.savedata = function(dt){
    
	

	console.log(dt);
	$http.post("/enseignant",dt)
	.then(function(){
		console.log("done");
		
		 $http.get("/enseignant")
		    .then(function(response) {
		    	
		        $scope.enseignants = response.data;
		        console.log($scope.enseignants);
		    });
		
	});

	
};
/**
* 
*/});
