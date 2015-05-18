Template.intheworks.helpers({
    'projects':function() {
      return Projects.find({active: true, completed: false},{sort: {etaclean: 1}});
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
      return Todos.find({projid: this._id,bug: true,complete: false},{}).count();
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

Template.headerimg.events({
    'click li': function(evt) {
        evt.stopPropagation(); 
        //retrieve the id of the item being clicked
        var projectId = this._id;
        var projectCompleted = this.completed;
  		  
  		  //console.log(projectCompleted);

        Session.set('selectedProject', projectId);
        
        if(projectCompleted == undefined) {
	  		//console.log("found one");
  		  	Projects.update(projectId, {$set: {completed: false}});
  		  }	
        
        //$(".intheWorks li").slideUp(300);
        //$(this).find(".details").slideDown(300);
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
      evt.stopPropagation();
      //retrieve the id of the item being clicked
      var projid = this._id;
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
  
  Template.intheworks.rendered = function() {
  		/*setTimeout(function() {
	  		
		  		$(".intheWorks li").click(function() {
			  		
			  		
			  		var thisli = $(this);
			  		var thisliheight = $(this).find(".details").height();
			  		$(this).find(".details").height("0px").show();
			  		
			  		$(thisli).find(".details").height(thisliheight);
			  		
			  		
		  		});
	  	
  		
  		},200);*/
   
  };
