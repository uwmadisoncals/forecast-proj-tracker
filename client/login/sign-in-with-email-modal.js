Template.signInWithEmailModal.events({
  'click .btn-create-account': function() {
    return Session.set('createOrSignIn', 'create');
  },
  'click .btn-sign-in': function() {
    return Session.set('createOrSignIn', 'signin');
  },
  'submit form': function(e) {
    return e.preventDefault();
  },
  
  submitHandler: function() {
    var createOrSignIn, user;
    createOrSignIn = Session.get('createOrSignIn');
    user = {
      email: $('[name="emailAddress"]').val(),
      password: $('[name="password"]').val()
    };
    if (createOrSignIn === "create") {
      return Meteor.call('validateEmailAddress', user.email, function(error, response) {
	     	if (error) {
			  alert(error.reason);
			} else {
			  if (response.error) {
			    alert(response.error);
			  } else {
			    Accounts.createUser(user, function(error) {
			      if (error) {
			        return alert(error.reason);
			      } else {
			        return $('.modal-backdrop').hide();
			      }
			    });
			  }
			}
      });
    } else {
      return Meteor.loginWithPassword(user.email, user.password, function(error) {
        if (error) {
          return alert(error.reason);
        } else {
          return $('.modal-backdrop').hide();
        }
      });
    }
  }
});
