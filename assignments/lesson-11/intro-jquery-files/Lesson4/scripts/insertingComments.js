$(function(){
		// jQuery Code goes here
                
        //inserting content
        $('.coreValues').prepend("<li><strong>This is brand new !!</strong></li>");
        
        $("<li><strong>This is also great !!</strong></li>").prependTo('.coreValues');
        
        var nameVal = $('input[name="nameVal"]');
        
        function fillEmpty() {
            if (nameVal.val() == '') {
                nameVal.val('John Doe');
            }
        }
        
        $('#ReqAQuoteBtn').click( fillEmpty );
        //end of inserting content

	})