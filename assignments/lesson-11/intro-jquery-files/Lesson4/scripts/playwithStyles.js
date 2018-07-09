$(function(){
		// jQuery Code goes here
        
        //playing with styles        
        var togglestyle = function() {
            
            var inputfields = $('input[type="text"]');
            
            if (inputfields.css('background-color') === 'rgb(255,0,0)') {
                //set background color to white
                inputfields.css('background-color', 'rgb(255,255,255)');
            } else {
                //set background color to red
                inputfields.css('background-color', 'rgb(255,0,0)');
            }
        }
        
        $('#ReqAQuoteBtn').click( togglestyle );
        //end of playing with styles

	})