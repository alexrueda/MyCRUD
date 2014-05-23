'use strict';
angular.module('frontendWissenSystemApp').controller('PreguntasCtrl', [
  '$scope', '$http', '$location', function($scope, $http, $location) {
    $scope.NuevaPreg = {};
    $scope.NuevaPreg.duracion = 12;
    $scope.editando = false;
    $scope.guardando = true;
    $http.get('http://olimpiadas.herokuapp.com/api/preguntas/').success(function(pregs) {
      return $scope.questions = pregs;
    }).error(function(r) {
      console.log("No se pudo conectar a nuestro servidor");
      return console.log(r);
    });
    $scope.CrearPregunta = function() {
      $scope.NuevaPreg.event = 1;
      $scope.NuevaPreg.created_by = 1;
      console.log($scope.NuevaPreg);
      if ($scope.guardar) {
        $http.post('http://olimpiadas.herokuapp.com/api/preguntas', $param($scope.NuevaPreg)).success(function(pr) {
          return $scope.questions.push(pr);
        }).error(function(r) {
          console.log("No se pudo escribir la pregunta.");
          return console.log(r);
        });
        return $http.post('http://olimpiadas.herokuapp.com/api/questiontrans', $.param($scope.opcionA), $.param($scope.opcionB)).success(function(answer) {
          console.log(answer);
          return $scope.answer.push(answer);
        }).error(function(r) {
          console.log(r);
          return console.log("No se pudo conectar al servidor");
        });
      } else {
        return $http.put('http://olimpiadas.herokuapp.com/api/preguntas' + $scope.NuevaPreg.id + "/", $.param($scope.NuevaPreg)).success(function() {
          console.log("Pregunta Creada!!!");
          return $http.get('http://olimpiadas.herokuapp.com/api/preguntas' + $scope.NuevaPreg.id + "/");
        }).error(function(resp) {
          console.log("No pude editar.");
          return console.log(resp);
        });
      }
    };
    $scope.DeleteQuestion = function(preg, key) {};
    $http["delete"]('http://olimpiadas.herokuapp.com/api/preguntas' + preg.id + "/").success(function() {
      console.log(key);
      console.log($scope.questions);
      return $scope.questions.splice(key, 1);
    }).error(function() {
      return console.log("No se pudo eliminar la preugnta.");
    });
    return $scope.EditQuestion = function(preg) {
      angular.copy(preg, $scope, NuevaPreg);
      console.log($scope.NuevaPreg);
      $scope.guardar = false;
      return $location.hash('frmPreguntas');
    };
  }
]);

