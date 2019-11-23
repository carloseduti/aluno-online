(function() {
    'use strict';
    var portalApp = angular.module("portalApp");
    portalApp.controller('cadastrarAlunoController', cadastrarAlunoController);

    cadastrarAlunoController.$inject = ['$scope'];

    function cadastrarAlunoController($scope) {
        var vm = this;
        vm.index = -1;
        vm.aluno = {};
        vm.alunos = [];


        vm.adicionarAlunos = function() {
            if (vm.index === -1) {
                vm.alunos.push(vm.aluno);
            } else {
                vm.alunos[vm.index] = vm.aluno;
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

    }
}());