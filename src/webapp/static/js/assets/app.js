'use strict';

angular.module('admin', ['ngRoute'])
    .config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        });
});