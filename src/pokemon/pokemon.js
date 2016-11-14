/**
 * Created by 212585860 on 11/11/2016.
 */

var app = angular.module('myapp', []);

app.controller('pokemonsController', function($scope, $http, $rootScope) {

    $http.get("http://pokeapi.co/api/v2/pokemon/?limit=721")
        .then(function (response) {$scope.pokemons = response.data.results;});

    $rootScope.orderByMe = function (x) {
        $scope.myOrderBy = x;

    };

    $scope.getPokeImgUrl = function (url){
        var regxPattern = /\/\d+/;
        var pokeId =  regxPattern.exec(url);
        return "//raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon" + (pokeId) + "\.png";
    };

});







