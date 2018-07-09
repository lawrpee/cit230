$(function(){
		// jQuery Code goes here
        
        var box1 = $('.box1');
        var box2 = $('.box2');
        
        function leftToRight() {
            if (box2.html()==''){
                //get content from box1 and transfer to box2
                //then empty box1
                box2.html(box1.html());
                box1.html('');
            }
        }
        
        $('#LeftToRight').click( leftToRight );
        
        function rightToLeft() {
            if (box1.html()==''){
                //get content from box2 and transfer to box1
                //then empty box2
                box1.html(box2.html());
                box2.html('');
            }
        }
        
        $('#RightToLeft').click( rightToLeft );

	})