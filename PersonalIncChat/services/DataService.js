(function () {
    var app = angular.module("Chat");

    var DataService = function ($http, ChatConfig) {

        var source = ChatConfig.source;

        return {
            list: function (set) {
                return $http.get(source + set)
            },

            get: function (set, id) {
                return $http.get(source + set + "/" + id)
            }
        };
    };

    app.factory("DataService", DataService);
}());