Template.headerimg.helpers({
    'projects':function() {
      return Projects.find({active: true, completed: false},{sort: {etaclean: 1}});
      //return projects = ['David', 'Bob', 'Mary', 'Bill', 'Warren', 'Tim'];
    },

    isAdminUser: function() {
            return Roles.userIsInRole(Meteor.user(), ['admin']);
        },

    'selectedClass': function() {
    	var projectId = this._id;
    	
    	var selectedProject = Session.get('selectedProject');

    	if(projectId == selectedProject) {
    		return "selected";
    	}
    }
  });

Template.headerimg.events({
    'click li': function() {

        //retrieve the id of the item being clicked
        var projectId = this._id;

        Session.set('selectedProject', projectId);
    },

    'click .remove': function(evt, tmpl) {
      evt.preventDefault();
      //retrieve the id of the item being clicked
      var projid = this._id;
      Session.set('selectedProject', projid);
      
      $(".confirmationContainer").addClass("menuOpen");
      $(".globalcontainer").addClass("blur");
      $(".overlay").fadeIn(300);
      
    },
    
    'click .complete': function(evt, tmpl) {
      evt.preventDefault();
      //evt.stopPropagation();
      //retrieve the id of the item being clicked
      var projid = this._id;
      //console.log(projid);
      Session.set('completeProject', projid);
      
      
      
      $(".completeContainer").addClass("menuOpen");
      $(".globalcontainer").addClass("blur");
      $(".overlay").fadeIn(300);
    },
    
    'click .editproj': function(evt, tmpl) {
      evt.preventDefault();
      //evt.stopPropagation();
      //retrieve the id of the item being clicked
      var projid = this._id;
      //console.log(projid);
      Session.set('editProject', projid);
      
     
      
      $("#projecteditform").find('#projectname').val(this.title);
      $("#projecteditform").find('#siteurl').val(this.siteurl);
      $("#projecteditform").find('#projectsummary').val(this.summary);
      $("#projecteditform").find('#clientname').val(this.clientname);
      $("#projecteditform").find('#giturl').val(this.giturl);
      $("#projecteditform").find('#projecteta').val(this.eta);
      //var etaclean = $('#projecteditform #projecteta').attr("data-date");
      if(this.active) {
      	$('#projecteditform #activecheck').prop('checked', true);
      } else {
	    $('#projecteditform #activecheck').prop('checked', false);
      }
      
      
      $(".editProjectContainer").addClass("menuOpen");
      $(".globalcontainer").addClass("blur");
      $(".overlay").fadeIn(400);
    },

    'click .removeConfirmation': function(evt) {
        evt.preventDefault();

        var projid = Session.get('selectedProject');
       
        
        Meteor.call('removeProject', projid);
    }
    
  });

Template.headerimg.rendered = function() {
    
    

    $(".cancelConfirmation, .removeConfirmation, .completeConfirmation").click(function(e) {
        e.preventDefault();

        $(".confirmationContainer, .completeContainer").removeClass("menuOpen");
        $(".globalcontainer").removeClass("blur");
        $(".overlay").fadeOut(300);
    });

    $(".logo").mouseover(function() {
      $(".subtitle").addClass("show");
    });

    $(".logo").mouseout(function() {
      $(".subtitle").removeClass("show");
    });
       
};