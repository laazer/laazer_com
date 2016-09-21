(function()
{
	angular
		.module("JBSite")
		.controller("SidebarController", sideBarController);

    function sideBarController ($scope, $rootScope, SmoothScroll, $location) {
			var home = { ref : "home", icon : "home", title: "My Face" };
			var port = { ref : "portfolio", icon : "th", title: "Portfolio" };
			var skills = { ref : "skills", icon : "code", title: "Skills" };
			var about = { ref : "about", icon : "user", title: "About Me" };
			var contact = { ref : "contact", icon : "envelope", title: "Contact" };
			$scope.smoothScroll = function (eID){
	      // set the location.hash to the id of
	      // the element you wish to scroll to.
	      $location.hash(eID);

	      // call $anchorScroll()
	      SmoothScroll.scrollTo(eID);

	    };
			$scope.barItems = [home, skills, port, about];
			//$anchorScroll.yOffset = 50;

			$rootScope.isBarHidden = false;
			$scope.hideBar = function() {
				$rootScope.isBarHidden = true;
				$rootScope.setScreenSize();
			}
			$rootScope.setScreenSize();
	}
})();
