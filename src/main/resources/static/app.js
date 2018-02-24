
var app = angular.module('SpiApp', [
		'ngRoute'
	])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/formations', {
				templateUrl: 'views/formations.html',
				controller: 'formationController'
			})
			.when('/detailFormation/:id', {
				templateUrl: 'views/detailFormation.html',
				controller: 'formationDetailController'
			})
			.when('/ajouterFormation', {
				templateUrl: 'views/ajouterFormation.html',
				controller: 'ajoutFormationController'
			})
			.when('/updateFormation/:formation', {
				templateUrl: 'views/updateFormation.html',
				controller: 'updateFormationController'
			})
			.when('/enseignant', {
				templateUrl: 'views/enseignant.html',
				controller: 'enseignantController'
			})
			.when('/detailEnseignant/:id', {
				templateUrl: 'views/detailEnseignant.html',
				controller: 'enseignantDetailController'
			})
			.when('/ajouterEnseignant', {
				templateUrl: 'views/ajouterEnseignant.html',
				controller: 'ajouterEnseignantController'
			})
			.when('/updateEnseignant/:enseignant', {
				templateUrl: 'views/updateEnseignant.html',
				controller: 'updateEnseignantController'
			})
			
			.otherwise({
				redirectTo: '/'
			});
	});


