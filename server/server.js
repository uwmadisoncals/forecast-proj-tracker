Meteor.publish('theProjects', function(){
    //if(!this.userId) return null;
    //var user = Meteor.users.findOne(this.userId);
    //console.log(user);
    
   
    
    return Projects.find();
});

Meteor.publish('theTodos', function(){
    //if(!this.userId) return null;
    var user = Meteor.users.findOne(this.userId);
    //console.log(user);
    return Todos.find();
});



Meteor.publish("UserData", function () {
  if (Roles.userIsInRole(this.userId, ['admin'])){
    return Meteor.users.find({},{sort:{created: 1}});
  } else {
    return Meteor.users.find({_id: this.userId}, {sort:{created: 1}});
  }
});

  Meteor.methods ({
    /*'removeProject': function(projid) {
      Projects.remove(projid);
    }*/
  });



  Meteor.startup(function () {
        // create an admin user if they don't already exist
        if (Meteor.users.find({username: 'admin'}).count() < 1) {
          Accounts.createUser({
            'username': 'admin',
            'email': 'admin@test.com',
            'password': 'admin'
          });
          Roles.addUsersToRoles(Meteor.users.find({username: 'admin'}).fetch(), ['admin']);
        }

        

        // create a couple of roles if they don't already exist (THESE ARE NOT NEEDED -- just for the demo)
        if(!Meteor.roles.findOne({name: "secret"}))
            Roles.createRole("secret");

        if(!Meteor.roles.findOne({name: "double-secret"}))
            Roles.createRole("double-secret");
  });