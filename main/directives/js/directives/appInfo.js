app.directive('appInfo', function() {
    return {
	// used as a new HTML element 
       restrict: 'E',
        scope: {
	// it will pass infomation inot the directive through an attribute named info. 
	// the = tells the directive to look for an attribute named info in the <app-info>
            info: '='
        },
        // the data becomes available to use in the template given by templateUrl
        // templateUrl specifies teh HTML to use in order to display the data in scope.info
        templateUrl: 'js/directives/appInfo.html'
    };
});