angular.module('rutasApp')
.controller('MateriasCtrl', ['$scope', '$http', function ($scope, $http) {
	$http.get('http://localhost:8000/materias/')
	.success(function(datos){
		$scope.Materias = datos;
	});

	$scope.mateNueva = {};

	$scope.saveNewMateria = function(){

		console.log($scope.frmNewMateria);

		$scope.mateNueva.nivel = parseInt($scope.mateNueva.nivel);
		
		console.log($scope.mateNueva);
		console.log($.param($scope.mateNueva));

		$http.post('http://192.168.1.177:8000/materias/', $.param($scope.mateNueva) )
		.success(function(r){
			console.log('Materia guardada.');
			console.log(r);
		}).error(function(r){
			console.log('No se creó la materia.');
			console.log(r);
		});
	}
}])