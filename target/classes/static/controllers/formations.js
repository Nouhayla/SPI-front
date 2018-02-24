
app.controller('formationController', function($scope, $http) {
	
	
	$scope.IsVisible = false ;
	// $http is a service used to make request using ajax
	// $scope is a service that holds the variables that angular should watch
	
	// variable that holds the id of the element , we want to update
    $scope.updateId = -1;
    $scope.operation = true;

    //visibilite button Ajouter 
//    
 
	// request all data from database to show it in the table
    $http.get("/formations")
    .then(function(response) {
        $scope.formations = response.data;
        console.log($scope.formations);
    });
    
    
    $scope.savedata = function(dt){
        
    	console.log(dt.codeFormation+" "+dt.nomFormation);
    	/*
    	var obj = {};
    	obj.codeFormation = $scope.codeFormationput;
    	obj.debutAccreditation=$scope.debutAccreditationput;
    	obj.diplome = $scope.diplomeput;
    	obj.doubleDiplome=$scope.doubleDiplomeput;
    	obj.n0Annee= $scope.n0Anneeput;
    	obj.finAccreditation=$scope.finAccreditationput;
        obj.nomFormation = $scope.nomFormationput;
    	*/
    	console.log(dt);
    	$http.post("/formations",dt)
    	.then(function(){
    		console.log("done");
    		
    	    $http.get("/formations")
    	    .then(function(response) {
    	        $scope.formations = response.data;
    	    });
    		
    	});
   
    	
    };
    
$scope.edit = function(formationedite){
    	

    		console.log(formationedite);
    		$scope.dt=formationedite;
    		console.log($scope.dt);
    		$scope.operation = false;
    		
    	
    }

$scope.deletedata = function (codeFormation){
	
	//"http://localhost:8080/supprimer?id=8"
	
	console.log(codeFormation);
	
	$http.delete("/formations/Supp/"+codeFormation)
	.then(function(){
		$http.get("/formations")
	    .then(function(response) {
	        $scope.formations = response.data;
	        console.log(response);
	    });
		
	});
	
	
}

$scope.updatefunc = function(dt){
	console.log(" - - - - - - - - " + dt.codeFormation);
	/*$scope.formation.codeFormationput = $scope.codeFormationput;
	$scope.formation.debutAccreditationput = $scope.debutAccreditationput;
	$scope.formation.diplomeput  = $scope.diplomeput;
	$scope.formation.doubleDiplomeput = $scope.doubleDiplomeput;
	$scope.formation.n0Anneeput = $scope.n0Anneeput;
	$scope.formation.finAccreditationput = $scope.finAccreditationput;
	$scope.formation.nomFormationput = $scope.nomFormationput;
	console.log(" - - - - - - - " + $scope.formation);*/
	$http.post("/formations",dt)
	.then(function(response){
		
		console.log("updated");
		
		// refresh the table's data
	    $http.get("/formations")
	    .then(function(response) {
	        $scope.formations = response.data;
	    });
		
		
		$scope.operation = true;
		
		
	 	$scope.codeFormationput = "";
    	$scope.debutAccreditationput ="";
    	$scope.diplomeput  = "";
    	$scope.doubleDiplomeput = "";
    	$scope.n0Anneeput = "";
    	$scope.finAccreditationput = "";
        $scope.nomFormationput = "";
		
	});
} 
    
});