angular.module('y').directive('contactMeFormDirective', function() {
    return {
        restrict: 'EA',
        replace: true,
        scope: {
            dirid:'@',
            dirname:'@',
            inptval: '=',
            isrequired: '@?',
            minimumlength: '@?',
            maximumlength: '@?',
            patternmatch: '@?'
        },
        //templateUrl: 'app/contactMeForm-directive.html',
        link: function(scope, element, attrs, fn) {
            console.log(scope.inptval);
        }
    };
});
