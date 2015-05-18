Template.nav.helpers({
        // check if user is an admin
        isAdminUser: function() {
            return Roles.userIsInRole(Meteor.user(), ['admin']);
        },

        userGravatar: function() {
        	var email = Meteor.user().emails[0].address;
        	var profilePic = Gravatar.imageUrl(email);

        	return profilePic;
        }
    });

Template.nav.events({
    'click a': function() {
        $(".overlay").fadeOut(400);
    }
});

Template.nav.rendered = function() {
    
    setTimeout(function() {
        $(".offCanvasNav li a").click(function(e) {
            $(".globalcontainer").toggleClass("menuOpen");
        });
    },800);

    

    
       
};