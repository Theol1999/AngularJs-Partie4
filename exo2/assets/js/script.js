var app = angular.module('app', []);
    app.controller('myCtrl', function($scope, $http){
        $http.get('assets/js/voiture.json').then(function(res){
                $scope.voiture = res.data;
        });
    });
