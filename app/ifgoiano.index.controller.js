ifgoiano
    .controller("indexCtrl", ["$scope", function($scope){
        $scope.frase = "Olá mundo!";

        $scope.herois = [
            {
                nome: "Hulk",
                poder: "Forte pra cassete"
            },
            {
                nome: "Superman",
                poder: "Cueca por cima das calças"
            }
        ];


    }]);