app.controller('ajoutFormationController', function($scope, $http) { 
	 $scope.operation = true;
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
    /**
 * 
 */});