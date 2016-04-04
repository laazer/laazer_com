(function()
{
	angular
		.module("FormBuilderApp")
		.controller("MainController", mainController);

    function mainController ($rootScope, $location) {
        $rootScope.$location = $location;
        $rootScope.isLoggedIn = false;
        $rootScope.isAdmin = false;
        $location.url();
    }
})();
