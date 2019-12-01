(function() {
    'use strict';
    var portalApp = angular.module("portalApp");
    portalApp.controller('cadastrarAlunoController', cadastrarAlunoController);

    cadastrarAlunoController.$inject = ['$scope', '$http'];

    function cadastrarAlunoController($scope, $http) {

        var vm = this;
        var SERVICE_HOST_HTTP = "http://localhost:3001";

        vm.init = function() {
            vm.listaAlunos();
        };

        vm.index = -1;
        vm.aluno = {};
        vm.alunos = [];


        vm.adicionarAlunos = function() {
            console.log(vm.aluno);
            if (vm.index === -1) {
                vm.alunos.push(vm.aluno);
                $http.post(SERVICE_HOST_HTTP + '/aluno/', vm.aluno)
                    .then(
                        function(response) {
                            console.log(response);
                        },
                        function(err) {
                            console.log(err);
                        }
                    );
            } else {
                vm.editarAlunoBase();
            }

            vm.aluno = {};
            vm.index = -1;
        };



        vm.editarAluno = function(item) {
            vm.aluno = angular.copy(vm.alunos[item]);
            vm.index = item;
        };
        vm.deletarAluno = function(item) {
            vm.alunos.splice(item, 1);
        };

        vm.limparAluno = function(item) {
            vm.produto = {};
            vm.index = -1;
        };

        vm.listaAlunos = function() {
            $http.get(SERVICE_HOST_HTTP + '/aluno')
                .then(
                    function(response) {
                        console.log(response);
                        vm.alunos = response.data.cadastrarAluno;
                    },
                    function(err) {
                        console.log(err);
                    }
                );
        };
        vm.editarAlunoBase = function() {
            $http.put(SERVICE_HOST_HTTP + '/aluno/' + vm.alunos[vm.index]._id, vm.aluno)
                .then(
                    function(response) {
                        vm.cadastrarAluno[vm.index] = vm.aluno;
                        vm.limparCampos();
                    },
                    function(err) {
                        console.log(err);
                    }
                );
        };
        vm.deletarProduto = function(item) {
            $http.delete(SERVICE_HOST_HTTP + '/aluno/' + vm.alunos[item]._id)
                .then(
                    function(response) {
                        vm.alunos = response.data.cadastrarAluno;
                        vm.alunos.splice(item, 1); //remover da tela
                    },
                    function(err) {
                        console.log(err);
                    }
                );
        };
        vm.adicionarAlunoBase = function() {
            $http.post(SERVICE_HOST_HTTP + '/aluno/', vm.aluno)
                .then(
                    function(response) {
                        vm.alunos.push(vm.aluno);
                        vm.limparCampos();
                        console.log(response);
                    },
                    function(err) {
                        console.log(err);
                    }
                );
        };
    }
}());