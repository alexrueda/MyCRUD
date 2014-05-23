angular.module('rutasApp')
.controller('RespuestasCtrl', ['$scope', '$http', function ($scope, $http) {
	var servidor = 'http://olimpiadas.herokuapp.com/api/';
 
	$http.get(servidor + 'respuestas/')
	.success(function(datos){ 
		$scope.Respuestas = datos;
	});   

	$scope.entidadNueva  = {};
	$scope.btCrearMostrar = true;
	$scope.mostrando = false;
 


	$scope.saveNewrRespuesta = function(){


		$http.post(servidor + 'respuestas/', $.param($scope.RespuestaNueva) )
		.success(function(r){
			console.log('Entidad guardado.');
			console.log(r);
			$scope.Respuestas.push(r);
		}).error(function(r){
			console.log('No se creó el Nivel.');
			console.log(r);
		});
	}

	

	$scope.EliminarRespusta = function(respuesta, key) {

		$http.delete(servidor + 'respuestas/' + respuesta.id + '/').
			success(function () {
				console.log(key);
				console.log($scope.Respuestas);
				return $scope.Respuestas.splice(key, 1);
			}). 
			error(function () {
				return console.log('No se pudo eliminar el usuario.')
			})
	}

	$scope.mostrarForm = function() {
		$scope.mostrando = true; 
		$scope.btCrearMostrar = false;
		console.log("Se muestra! Joder Si! " + $scope.btCrearMostrar);
	}

	$scope.ocultarForm = function() {
		$scope.mostrando = false; 
		$scope.btCrearMostrar = true;
	};

}])