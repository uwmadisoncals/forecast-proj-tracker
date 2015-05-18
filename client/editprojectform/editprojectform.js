Template.editprojectform.helpers({

    isAdminUser: function() {
            return Roles.userIsInRole(Meteor.user(), ['admin']);
        }

  });

Template.editprojectform.events({
    'submit #projecteditform' : function (evt, tmpl) {
      //prevent normal form behavoir
      evt.preventDefault();
      
      

      $(".editProjectContainer").removeClass("menuOpen");
      $(".globalcontainer").removeClass("blur");
      $(".overlay").fadeOut(400);

      //Grab the values from the input fields
      var title = tmpl.find('#projectname').value;
      var siteurl = tmpl.find('#siteurl').value;
      var summary = tmpl.find('#projectsummary').value;
      var clientname = tmpl.find('#clientname').value;
      var giturl = tmpl.find('#giturl').value;
      var eta = tmpl.find('#projecteta').value;
      var etaclean = $('#projecteditform #projecteta').attr("data-date");
      var active = $('#projecteditform #activecheck').is(':checked');
      
      
      
      var projid = Session.get('editProject');

	  
      //var proj = {title: title, siteurl: siteurl, clientname: clientname, giturl: giturl, eta: eta, etaclean: etaclean, summary: summary, active: active, completed: false};
      //proj._id = Projects.insert(proj);
      //alert(projid);
      
      Projects.update(projid, {$set: {title: title, siteurl: siteurl, clientname: clientname, giturl: giturl, eta: eta, etaclean: etaclean, summary: summary, active: active}});

      //console.log(proj._id);

      //Insert the data in the db
      //Meteor.call('submitPost', title, eta, etaclean, active);

      //Clear the input fields after submitting the form.
      tmpl.find('#projectname').value = "";
      tmpl.find('#siteurl').value = "";
      tmpl.find('#projecteta').value = "";
      tmpl.find('#projectsummary').value = "";
      tmpl.find('#clientname').value = "";
      tmpl.find('#giturl').value = "";
      $('#activecheck').prop( "checked", false );
    },

    'click a.cancel' : function() {
      $(".editProjectContainer").removeClass("menuOpen");
      $(".globalcontainer").removeClass("blur");
      $(".overlay").fadeOut(400);
    }
  });



Template.editprojectform.rendered = function() {
	
	/*$('#projecteta').datepicker({
	    format: "yyyymmdd",
	    daysOfWeekDisabled: "0,6",
	    autoclose: true,
	    todayHighlight: true
	});*/
	
	$("#projecteditform .textArea textarea").blur(function() {
		var val = $(this).val();
		if(!val) {
			$(this).prev().show();
		}
	});
	
	$("#projecteditform .textArea textarea").focus(function() {
		$(this).prev().hide();
	});
	
	setTimeout(function() {
		$("#projecteditform #projecteta").pickadate({
      format: 'dddd, mmmm dd, yyyy',
      

      onSet: function(context) {
        var datepicked = this.get('select', 'yyyymmdd');
        $("#projecteditform #projecteta").attr("data-date",datepicked);
      }
    });
	},1000);


	   
};