Meteor.subscribe('theProjects');
Meteor.subscribe('theTodos');
//Meteor.subscribe('theTickets');

  Template.projectlist.helpers({
    'projects':function() {
	   /*var projectsFilter = Projects.find({active: false},{sort: {etaclean: 1}}).fetch();
	   
	    for (i = 0; i < projectsFilter.length; i++) {
		    var projelem = projectsFilter[i];
		    console.log(projectsFilter[i].completed);
		    /*if(projectsFilter[i].completed == undefined) {
				projectsFilter[i].completed = false;    
		    }
		    
		}
	
		Projects.upsert(this._id,
		{
		  // Modifier
		  $set: {
		      completed: false
		  }
		}
		);*/
	
		
	  
      return Projects.find({active: false, completed: false},{sort: {etaclean: 1}});
      //return projects = ['David', 'Bob', 'Mary', 'Bill', 'Warren', 'Tim'];
    },

    'todos':function() {
      return Todos.find({projid: this._id,bug: false},{});
    },

    'todosCount':function() {
      return Todos.find({projid: this._id,bug: false,complete: false},{}).count();
    },

    'tickets':function() {
      return Todos.find({projid: this._id,bug: true},{});
    },

    'ticketsCount':function() {
	  var ticketCount = Todos.find({projid: this._id,bug: true,complete: false},{}).count();
	  
	  if(ticketCount != 0) {
      	return ticketCount;
      } else {
	    return null;
      }
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
    },
    
    'complete': function() {
    	return this.complete?"completed":"";
	}
  });

  Template.projectlist.events({
  	'click li': function(evt) {
        evt.stopPropagation();
  		//retrieve the id of the item being clicked
  		  var projectId = this._id;
  		  var projectCompleted = this.completed;
  		  var item = this;
  		  
  		  //console.log(projectCompleted);
  		 
  		  
      
  		  Session.set('selectedProject', projectId);
  		  
  		  if(projectCompleted == undefined) {
	  		//console.log("found one");
  		  	Projects.update(projectId, {$set: {completed: false}});
  		  }	
  		  
  		  //var tmpheight = $(this).height();
  		  //console.log(tmpheight);
      
  	},
  	
  	'click .settings':function(evt, tmpl) {
	  evt.preventDefault();
	  evt.stopPropagation();
	  
	  var clickedLink = event.target;
	  var mainContainer = $(clickedLink).closest('.menuBox');
	  var mainMenu = $(clickedLink).next();
	  var checkVisible = $(clickedLink).closest('.menuBox').hasClass("toggle");
	  
	  
	 


	  if(checkVisible) {
		  setTimeout(function() {
		  	$(mainMenu).hide(); 
	  	  },500);
		  
	  } else {
		  
		  	$(mainMenu).show();
		  
		  
	  }
	  
	  setTimeout(function() {
		$(mainContainer).toggleClass("toggle");  
	  },50);
	 
  	},

    'click .remove': function(evt, tmpl) {
      evt.preventDefault();
      //evt.stopPropagation();
      //retrieve the id of the item being clicked
      var projid = this._id;
      //console.log(projid);
      Session.set('removeProject', projid);
      
      $(".confirmationContainer").addClass("menuOpen");
      $(".globalcontainer").addClass("blur");
      $(".overlay").fadeIn(300);
    },
    
    'click .checkmark': function(evt, template) {
      evt.preventDefault();
      evt.stopPropagation();
      
      var complete=this.complete;;
      Todos.update(this._id,{$set:{complete:!complete}});
      //alert("someting");
      
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

    'click .removetodo': function(evt, tmpl) {
      evt.preventDefault();
      //evt.stopPropagation();
      //retrieve the id of the item being clicked
      var todoid = this._id;
      //console.log(todoid);
      Session.set('removeTodo', todoid);
      
      Todos.remove(todoid);
      //$(".confirmationContainer").addClass("menuOpen");
      //$(".globalcontainer").addClass("blur");
      //$(".overlay").fadeIn(300);
    }

    
  });

  Template.projectlist.rendered = function() {
    
    /*setTimeout(function() {
	    $(".projectsList li").click(function() {
		    //alert("click");
		    
			$("li .details").each(function() {
				if($(this).hasClass("opened")) {
					$(this).slideUp(400);
			  	}
			});
		    
		    var elem = $(this).find(".details");
		    
		    
			$(elem).animate({
			    height: "toggle"
			  }, 400, function() {
			   	$(elem).addClass("opened");
			  });
			 
			 
		});
	},500);*/
	
	    /*$(".menuBox .settings").click(function(e) {
		    e.preventDefault();
		    
		    alert('t');
			
	    });*/
    
   

   
  };

