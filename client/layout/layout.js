
Template.layout.rendered = function() {
   
	function globalheight() {
		var wh = $(window).height();
    	$(".globalcontainer").css("min-height",wh);
	}

	globalheight();

    $(window).resize(function() {
    	globalheight();
    });
    
    $('html').click(function() {
		//Hide the menus if visible
		
	  $(".menuBox").removeClass("toggle");
	  
		  setTimeout(function() {
		  	$(".menuBoxSub").hide(); 
	  	  },500);
		  
	 
	  
	  
		  
	  
	});
    
       
};

Template.layout.events({
	'click .globalcontainer': function(evt) {
      Session.set('selectedProject', 'none');
    }
});