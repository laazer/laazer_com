(function()
{
	angular
		.module("FormBuilderApp")
		.controller("HeaderController", HeaderController);
		
    function HeaderController ($scope, $rootScope, $location) {
        
       $scope.logout = logout;
       
	   function logout() {
           $rootScope.currentUser = null;
           $rootScope.isLoggedIn = false;
           $location.url("/");
       };
    }
})();