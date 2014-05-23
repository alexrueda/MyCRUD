angular.module('grupouno')
.controller('UsuariosCtrl', ['$scope', '$http', function ($scope, $http) {
	var servidor = 'http://olimpiadas.herokuapp.com/api/';

	$http.get(servidor + 'users/')
	.success(function(datos){
		$scope.usuarios = datos;
		
	});
	$scope.userNuevo = {};
	$scope.mostrando = false;
	$scope.btCrearMostrar = true;

//	var myApp = angular.module('myApp',[]);

//	function MyCtrl($scope, $timeout) {
//	    $scope.value = "usuario";
//	    $scope.toggled = function() {
//	        console.debug('toggled');
//	        $timeout(function() {
//	            $('#name').focus();
//	        }, 100);
//	    }
//	}
	
//	$scope.traer = function{
//		{{ traer.hola }}
//	}

	$scope.GuardarNuevoUsuario = function(){
		// $scope.usuNuevo.username="alexander";
		//$scope.usuNuevo.password=1231;
		//$scope.usuNuevo.cell=21231;
			

		$http.post(servidor + 'users/', $.param($scope.usuNuevo) )
		.success(function(r){
			console.log('Usuario Guardado.');
			console.log(r);
			$scope.usuarios.push(r);
			alert("Usuario guardado con exito")
		}).error(function(r){
			console.log('No se creó el usuario.');
			console.log(r);
			alert("No se creó el usuario, ingrese todos los datos")
		});

	}


	$scope.editUser = function(mater){
		
	}
	//angular.module('busqueda').
  	//filter('frmNewUser', busqueda() {
   // 	return busqueda(usuNuevo) {
   // 	return moment(usuNuevo).frmNewUser()
   // }
//  })

	//function filtroCtrl ($scope) {
	////	$scope.busqueda = [
	////	 	{$http.getElementsByTagName('servidor + 'users/' + usuario.id + '/'')}
	////	 	
	////	 ];
	//};
	$scope.mostrarForm = function() {
		$scope.mostrando=true; 
		$scope.btCrearMostrar=false;
		console.log("A mostrar el form. " + $scope.btCrearMostrar);
	}
	$scope.ocultarForm = function() {
		$scope.mostrando=false; 
		$scope.btCrearMostrar=true;
	}
	$scope.DeleteUsu = function (usuario, key) {
		$http.delete(servidor + 'users/' + usuario.id + '/').
			success(function () {
				console.log(key);
				console.log($scope.usuarios);
				$scope.usuarios.splice(key, 1);
			}).
			error(function () {
				console.log('No se pudo eliminar el usuario.')
			})

	}
	$scope.editUser = function (usuario) {
		angular.copy(usuario, $scope.usuarios)
		console.log($scope.usuarios);
		$scope.GuardarNuevoUsuario = false;
		$location.hash('frmNewUser');

		};
	}
])	
//}])