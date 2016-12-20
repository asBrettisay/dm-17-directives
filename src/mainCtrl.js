angular.module('myApp')
.controller('mainCtrl', function($scope) {

    $scope.name = 'Brett';















    $scope.titleClickMe = 'Click This Button!';
    $scope.titleStartParty = 'Let\'s start the party!';

    $scope.alertMe = function(str, str2) {
        alert('MESSAGE: ' + str + ' ' + str2);
    }

    $scope.addThenAlert = function(a, b) {
        var sum = parseInt(a) + parseInt(b);
        alert('SUM: ' + sum);
    }
})