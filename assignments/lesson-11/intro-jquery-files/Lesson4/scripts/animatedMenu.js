$(function(){
		// All jQuery code goes here
        
        $('.navigation > li').hover(function(){
            //this code executes when the mouse pointer is over the list item
            
            $(this).addClass('openSesame');
            
        }, function(){
            //this code executes when the mouse pointer leaves the list item
            
            $(this).removeClass('openSesame');
            
        })

	})