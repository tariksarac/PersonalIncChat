(function () {
    var app = angular.module('Chat');

    RegisterCtrl = function ($scope, $rootScope, $location, $window) {
        $rootScope.user = null;
        $scope.chatUser = {
            firstName: "",
            lastName: "",
            email: "",
            company: "",
            city: ""
        };
        $rootScope.redirectToPersonal = function () {
            $window.open('https://www.personal.com/');
        };
        $rootScope.logOut = function () {
            $rootScope.user = null;
            $scope.chatUser = {
                firstName: "",
                lastName: "",
                email: "",
                company: "",
                city: ""
            }
        };

        $scope.addNick = function (firstName, lastName, email, company, city) {
            if (firstName != null) {
                $scope.chatUser.firstName = firstName;
                $scope.chatUser.lastName = lastName;
                $scope.chatUser.email = email;
                $scope.chatUser.company = company;
                $scope.chatUser.city = city;
                $rootScope.user = $scope.chatUser;
            }
            else {
                $window.alert("Please fill out required field");
            }
        }

        $scope.changeView = function (view) {
            $location.path(view);
        }
    }
    app.controller("RegisterCtrl", RegisterCtrl);
})();