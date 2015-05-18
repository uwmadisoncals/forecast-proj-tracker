Template.loginnav.helpers({
        // check if user is an admin
        isAdminUser: function() {
            return Roles.userIsInRole(Meteor.user(), ['admin']);
        },

        userGravatar: function() {
            if(Meteor.user()) {
        	   var email = Meteor.user().emails[0].address;
               var profilePic = Gravatar.imageUrl(email);
            } else {
                var profilePic = "/img/user_placeholder.svg";
            }
        	

        	return profilePic;
        }
});

Template.loginnav.events({

    'click .addToggle': function(evt) {
            evt.preventDefault();

            $(".addMenu").toggleClass("showSub");
        }


});



Template.loginnav.rendered = function() {
    
    $(".leftMenu .menuToggle").click(function(e) {
        e.preventDefault();

        $(".globalcontainer").toggleClass("menuOpen");
        $(".overlay").fadeIn(400);
    });

    setTimeout(function() {
        $(".leftMenu .addProjectToggle").click(function(e) {
            e.preventDefault();
            
            $(".addProjectContainer").addClass("menuOpen");
            $(".globalcontainer").addClass("blur");
            $(".overlay").fadeIn(400);
        });

        $(".overlay").click(function(e) {
            $(".overlay").fadeOut(400);
            $(".addProjectContainer, .editProjectContainer").removeClass("menuOpen");
            $(".globalcontainer").removeClass("blur");
            $(".confirmationContainer").removeClass("menuOpen");
            $(".globalcontainer").removeClass("menuOpen");
        });

    },1000);
       
};