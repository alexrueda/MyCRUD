angular.module('rutasApp')
.controller('MateriasCtrl', ['$scope', '$http', function ($scope, $http) {
	var servidor = 'http://olimpiadas.herokuapp.com/api/';

	$http.get(servidor + 'disciplinas/')
	.success(function(datos){
		$scope.Materias = datos;
	});
	$scope.mateNueva = {};
	$scope.mostrando = false;
	$scope.btCrearMostrar = true;


	$scope.saveNewMateria = function(){

		$scope.mateNueva.event=1;

		$http.post(servidor + 'disciplinas/', $.param($scope.mateNueva) )
		.success(function(r){
			console.log('Materia guardada.');
			console.log(r);
			$scope.Materias.push(r);
		}).error(function(r){
			console.log('No se creó la materia.');
			console.log(r);
		});



	}
	


	$scope.editMat = function(mater){
		
	}


	$scope.mostrarForm = function() {
		$scope.mostrando=true; 
		$scope.btCrearMostrar=false;
		console.log("A mostrar el form. " + $scope.btCrearMostrar);
	}

	$scope.ocultarForm = function() {
		$scope.mostrando=false; 
		$scope.btCrearMostrar=true;
	}
}])
