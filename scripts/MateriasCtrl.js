angular.module('rutasApp')
.controller('MateriasCtrl', ['$scope', '$http', function ($scope, $http) {
	$http.get('http://localhost:8000/materias/')
	.success(function(datos){
		$scope.Materias = datos;
	});

	$scope.mateNueva = [];

	$scope.saveNewMateria = function(){
		$http.post('http://localhost:8000/materias/', $.param( $scope.mateNueva))
		.success(function(r){
			console.log('Materia guardada.');
			console.log(r);
		});
	}
}])