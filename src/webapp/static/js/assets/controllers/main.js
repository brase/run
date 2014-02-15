'use strict';

function MainCtlr($scope){
    $scope.test = '#Blah!';
}
angular.module('admin').controller('MainCtlr', ['$scope', MainCtlr]);