angular.module('rutasApp')
.controller('InscripcionesCtrl', ['$scope', '$http', function ($scope, $http) {
	var servidor = 'http://olimpiadas.herokuapp.com/api/';

	$http.get(servidor + 'inscripciones/')
	.success(function(datos){
		$scope.Incripciones = datos;
		
	});
	$scope.IncripcionNueva = {};
	$scope.mostrando = false;
	$scope.btCrearMostrar = true;

	$scope.SaveNewIdioma = function(){
			

		$http.post(servidor + 'inscripciones/', $.param($scope.InscripcionNueva) )
		.success(function(r){
			console.log('Esto guardo.');
			console.log(r);
			$scope.Incripciones.push(r);
			
		}).error(function(r){
			console.log('No se guardo nada.');
			console.log(r);
			
		});

	}


	$scope.editarCategoria = function(mater){
		
	}

	$scope.mostrarForm = function() {
		$scope.mostrando = true; 
		$scope.btCrearMostrar = false;
		console.log("A mostrar el form. " + $scope.btCrearMostrar);
	}

	$scope.ocultarForm = function() {
		$scope.mostrando = false; 
		$scope.btCrearMostrar = true;
	}

	$scope.BorrarInscripcion = function (idioma, key) {
		$http.delete(servidor + 'inscripciones/' + inscripcion.id + '/').
			success(function () {
				console.log(key);
				console.log($scope.Incripciones);
				$scope.Incripciones.splice(key, 1);
			}).
			error(function () {
				console.log('No se eliminó nada.')
			});

	}
	
	
}])