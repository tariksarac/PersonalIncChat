(function () {
    var app = angular.module("Chat", ['ngRoute']);

    app.constant("ChatConfig", {
        source: "http://jsonplaceholder.typicode.com/"
    });

    app.config(function ($routeProvider, $locationProvider) {
        
        $routeProvider
            .when("/register", { templateUrl: "views/registerView.html", controller: "RegisterCtrl" })
            .when("/chat", { templateUrl: "views/chatView.html", controller: "ChatCtrl" })         
            .otherwise({ redirectTo: "/register" });

    }).run(function ($rootScope, $location) {
        $rootScope.$on("$routeChangeStart", function (event, next, current) {
            if ($rootScope.user == null) {
                if (next.templateUrl != "views/registerView.html")
                    $location.path("/register");
            }
        })
    });

})();