angular.module('myApp')
.directive('myDirective', function() {

    function getColor() {
        var colors = ['red', 'green', 'blue', 'purple', 'teal', 'mintcream', 'burlywood']

        return colors[Math.floor(Math.random() * colors.length)];
    }

    return {
        restrict: 'AE',
        templateUrl: './src/myDirective.html',
        scope: {
            title: '=',
            whenClicked: '&'
        },
        link: function(scope, element, attributes) {
            var interval;

            element.on('click', function() {
                 if (interval) {
                    clearInterval(interval)
                    interval = null;
                } else {
                    interval = setInterval(function() {
                        element.children().css('background-color', getColor());
                    }, 200);
                }
                
            })
        }
    }
})