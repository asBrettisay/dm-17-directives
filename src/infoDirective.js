angular.module('myApp')
.directive('infoDirective', function() {
    return {
        templateUrl: './src/infoDirective.html',
        scope: {
            name: '<'
        },
        controller: function($scope) {
            $scope.name = 'Scott';
        }
    }
})