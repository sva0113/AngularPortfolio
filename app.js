angular.module('y', ['ui.bootstrap','ui.router','ngAnimate']);

angular.module('y').config(function($stateProvider, $urlRouterProvider) {

   
    $stateProvider.state('about', {
        url: '/about',
        templateUrl: 'app/about/about.html'
    });
    $stateProvider.state('Home', {
        url: '/home',
        templateUrl: 'app/Home_page/Home.html'
    });
    $stateProvider.state('Skills', {
        url: '/skills',
        templateUrl: 'app/skills/Skills.html'
    });
    $stateProvider.state('education-Exp', {
        url: '/eduExp',
        templateUrl: 'app/education-Exp/education-Exp.html'
    });
    $stateProvider.state('portfolio', {
        url: '/portfolio',
        templateUrl: 'app/portfolio/portfolio.html'
    });
    /* Add New States Above */
    $urlRouterProvider.otherwise('/home');

});

angular.module('y').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
