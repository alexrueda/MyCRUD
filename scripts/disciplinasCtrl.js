angular.module('grupouno')
.controller('disciplinasCtrl', ['$scope', '$http', function ($scope, $http) {
	var servidor = 'http://olimpiadas.herokuapp.com/api/';

	$http.get(servidor + 'disciplinas/')
	.success(function(datos){
		$scope.disciplinas = datos;
		
	});
	$scope.disciplinaNueva = {};
	$scope.mostrando = false;
	$scope.btCrearMostrar = true;

	$scope.GuardarNuevaDisciplina = function(){
			

		$http.post(servidor + 'disciplinas/', $.param($scope.disciplinaNueva) )
		.success(function(r){
			console.log('Disciplina guardada.');
			console.log(r);
			$scope.disciplinas.push(r);
			alert("Disciplina guardada")
		}).error(function(r){
			console.log('No se creó la disciplina.');
			console.log(r);
			alert("No se creó la disciplina")
		});

	}


	$scope.editDisciplina = function(mater){
		
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
	$scope.DeleteDisciplina = function (disciplina, key) {
		$http.delete(servidor + 'disciplinas/' + disciplina.id + '/').
			success(function () {
				console.log(key);
				console.log($scope.disciplinas);
				$scope.disciplinas.splice(key, 1);
			}).
			error(function () {
				console.log('No se pudo eliminar la disciplina.')
			})

	}
	$scope.editDisciplina = function (disciplina) {
		angular.copy(disciplina, $scope.disciplinas)
		console.log($scope.disciplinas);
		$scope.GuardarNuevaDisciplina = false;
		$location.hash('frmNewUser');

		};
	}
])	
//}])