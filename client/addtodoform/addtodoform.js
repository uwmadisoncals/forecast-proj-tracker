Template.addtodoform.helpers({

    isAdminUser: function() {
            return Roles.userIsInRole(Meteor.user(), ['admin']);
        }

  });

Template.addtodoform.events({
    'submit #todoaddform' : function (evt, tmpl) {
      //prevent normal form behavoir
      evt.preventDefault();


      //Grab the values from the input fields
      var title = tmpl.find('#todoname').value;
      var proj = Session.get('selectedProject');
      

      var todo = {projid: proj, title: title, bug: false, complete: false};
      //console.log(todo);
      Todos.insert(todo);

      //Clear the input fields after submitting the form.
      tmpl.find('#todoname').value = "";
      
    }

    
  });



Template.addtodoform.rendered = function() {
	

	   
};