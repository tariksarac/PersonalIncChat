(function () {
    var app = angular.module("Chat");

    ChatCtrl = function ($scope, DataService, $log, $rootScope, $window) {

        DataService.list("users").then(function (response) { $scope.members = response.data; },
            function (reason) { $scope.test = "It doesn't work this time"; });

        $scope.currentbuddy = null;
        $scope.chat = [];
        $scope.showHeader = true;
        $scope.message = {
            text: "",
            time: null,
            myclass: "",
            currentbuddy: "",
        }

        $scope.ChatWith = function (member) {
            $scope.chat = [];
            $scope.showHeader = false;
            $scope.currentbuddy = member;
            $scope.message.text = "Hello Tarik! I heard you got a job in Personal Inc. ";
            $scope.message.myclass = "message other-message float-right";
            $scope.message.time = new Date();
            $scope.message.currentbuddy = member.name;
            $scope.chat.push($scope.message);
            $scope.message = {
                text: "",
                time: null,
                myclass: "",
                currentbuddy: ""
            }
        }

        $scope.sendmessage = function (mymymessage) {
            $scope.message.text = mymymessage;
            $scope.message.myclass = "message my-message";
            $scope.message.time = new Date();
            $scope.message.currentbuddy = $rootScope.user.firstName;
            if ($scope.currentbuddy != null) {
                $scope.chat.push($scope.message);
            }
            else {
                $window.alert("Please select your chatmate");
            }
            $scope.mymessage = "";
            $scope.message = {
                text: "",
                time: null,
                myclass: "",
                currentbuddy: ""
            }
        }

        $scope.messageEnter = function (keyEvent, mymessage) {
            if (keyEvent.which === 13) {
                $scope.sendmessage(mymessage);
            }
        }
    }
    app.controller("ChatCtrl", ChatCtrl);
})();