Template.addticketform.helpers({

    isAdminUser: function() {
            return Roles.userIsInRole(Meteor.user(), ['admin']);
        }

  });

Template.addticketform.events({
    'submit #ticketaddform' : function (evt, tmpl) {
      //prevent normal form behavoir
      evt.preventDefault();


      //Grab the values from the input fields
      var title = tmpl.find('#ticketname').value;
      var proj = Session.get('selectedProject');
      

      var ticket = {projid: proj, title: title, bug: true, complete: false};
      console.log(ticket);
      Todos.insert(ticket);

      //Clear the input fields after submitting the form.
      tmpl.find('#ticketname').value = "";
      
    }

    
  });



Template.addtodoform.rendered = function() {
	

	   
};