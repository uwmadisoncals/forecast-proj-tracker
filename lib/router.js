

Router.configure({
	layoutTemplate:'layout'
});

if (Meteor.isClient) {

	Router.map(function() {
		this.route('home',{path:'/'});
		this.route('about',{path:'/about'});
		this.route('adminTemplate',{path:'/admin'});
		this.route('login',{path:'/login'});
		
			/*this.route('admin', {
	        path:'/admin',
	        template: 'adminTemplate',
	        onBeforeAction: function() {
	            if (Meteor.loggingIn()) {
	                this.render(this.loadingTemplate);
	            } else if(!Roles.userIsInRole(Meteor.user(), ['admin'])) {
	                console.log('redirecting');
	                this.redirect('/');
	            }
	        }
	    });*/
    
	});

}
