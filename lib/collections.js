Projects = new Meteor.Collection('projects');
Todos = new Meteor.Collection('todos');


Projects.allow({
  insert: function (userId, post) {
    
    var adminuser = Roles.userIsInRole(Meteor.user(), ['admin']);
    
    if(adminuser) {
    	return true;
    }
  },
  remove: function (userId, post) {
     var adminuser = Roles.userIsInRole(Meteor.user(), ['admin']);
    
    if(adminuser) {
    	return true;
    }
  },
  update: function (userId, post) {
     var adminuser = Roles.userIsInRole(Meteor.user(), ['admin']);
    
    if(adminuser) {
    	return true;
    }
  }
 
});


Todos.allow({
  insert: function (userId, post) {
    
    var adminuser = Roles.userIsInRole(Meteor.user(), ['admin']);
    
    if(adminuser) {
    	return true;
    }
  },
  remove: function (userId, post) {
     var adminuser = Roles.userIsInRole(Meteor.user(), ['admin']);
    
    if(adminuser) {
    	return true;
    }
  },
  update: function (userId, post) {
     var adminuser = Roles.userIsInRole(Meteor.user(), ['admin']);
    
    if(adminuser) {
    	return true;
    }
  }
 
});


