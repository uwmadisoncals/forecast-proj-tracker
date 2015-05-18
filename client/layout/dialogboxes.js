Template.dialogboxes.events({
	'click .removeConfirmation': function(evt) {
        evt.preventDefault();

        var projid = Session.get('removeProject');
        //console.log(projid);
        //Meteor.call('removeProject', projid);
        Projects.remove(projid);
    },
    
    'click .completeConfirmation': function(evt) {
        evt.preventDefault();

        var projid = Session.get('completeProject');
        //console.log(projid);
        //Meteor.call('removeProject', projid);
        Projects.update(projid, {$set: {completed: true}});
        
    }
});