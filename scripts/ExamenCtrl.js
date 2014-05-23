angular.module('rutasApp')
.controller('ExamenCtrl', ['$scope', '$http', function ($scope, $http) {
	var servidor = 'http://olimpiadas.herokuapp.com/api/';
	$http.get(servidor + 'exam/')
	.success(function(datos){
		$scope.Examenes = datos;
		
	}); alert
	$scope.userNuevo = {};
	$scope.mostrando = false;
	$scope.btCrearMostrar = true;


	$scope.SaveNewUsuario = function(){


		$http.post(servidor + 'exam/', $.param($scope.ExamenNuevo) )
		.success(function(r){
			console.log('Usuario Guardado.');
			console.log(r);
			$scope.Examenes.push(r);
		}).error(function(r){
			console.log('No se creó el usuario.');
			console.log(r);
		});

	}


	$scope.editUser = function(mater){
		
	}

	$scope.mostrarForm = function() {
		$scope.mostrando = true; 
		$scope.btCrearMostrar = false;
		console.log("A mostrar el form. " + $scope.btCrearMostrar);
	}
	$scope.ocultarForm = function() {
		$scope.mostrando = false; 
		$scope.btCrearMostrar=true;
	}
	$scope.DeleteUsu = function (examen, key) {
		$http.delete(servidor + 'exam/' + examen.id + '/').
			success(function () {
				console.log(key);
				console.log($scope.Examenes);
				$scope.Examenes.splice(key, 1);
			}).
			error(function () {
				console.log('No se pudo eliminar el examen.')
			})

	}
	$scope.editUser = function (examen) {
		angular.copy(usuario, $scope.Examenes)
		console.log($scope.Examenes);
		$scope.SaveNewUsuario = false;
		$location.hash('frmNewUser');

		};
	}
])	
