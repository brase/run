'use strict';

angular.module('admin', ['ngRoute', 'btford.markdown'])
    .config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        });
    });