// CANVAS Task

// Canvas Initiate 

$(document).ready(function(){
  

var canvas = $('#mycanvas')[0];
if(canvas) {	
	
if (canvas.getContext){
  var ctx = canvas.getContext('2d'); 
  
		ctx.font="20px Arial";
		ctx.fillText("Why Us?",10,50);

		ctx.font="30px Verdana";
		// Create gradient
		var gradient=ctx.createLinearGradient(0,0,canvas.width,0);
		gradient.addColorStop("0","magenta");
		gradient.addColorStop("0.5","blue");
		gradient.addColorStop("1.0","red");
		// Fill with gradient
		ctx.fillStyle=gradient;
		ctx.fillText("Proficient",10,90); 
		ctx.fillText("Collaborative",30,120); 
		ctx.fillText("Driven!",60,160); 


}	
}


});
// End Canvas Initiate

// Clear Canvas

$("#clear-canvas").click(function(){
var canvas = $('#mycanvas')[0];
	if(canvas) {	
		if (canvas.getContext){
		  var ctx = canvas.getContext('2d');	

				ctx.clearRect(0, 0, canvas.width, canvas.height);

		}
	}	
		
});	

//Reset Canvas to Orignal State
$("#reset-canvas").click(function(){
var canvas = $('#mycanvas')[0];
	if(canvas) {	
		if (canvas.getContext){
		  var ctx = canvas.getContext('2d');	
 	ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.font="20px Arial";
			ctx.fillText("Why Us?",10,50);

			ctx.font="30px Verdana";
			// Create gradient
			var gradient=ctx.createLinearGradient(0,0,canvas.width,0);
			gradient.addColorStop("0","magenta");
			gradient.addColorStop("0.5","blue");
			gradient.addColorStop("1.0","red");
			// Fill with gradient
			ctx.fillStyle=gradient;
			ctx.fillText("Proficient",10,90); 
			ctx.fillText("Collaborative",30,120); 
			ctx.fillText("Driven!",60,160); 

		}
	}	
		
});	

// Draw Triangle on Canvas
$("#drawTriangle").click(function(){
var canvas = $('#mycanvas')[0];
	if(canvas) {	
		if (canvas.getContext){
		  var ctx = canvas.getContext('2d');	
 
          ctx.beginPath();
          ctx.moveTo(50, 50);
          ctx.lineTo(50, 125);
          ctx.lineTo(150, 125);
          ctx.closePath();
          ctx.stroke();

		}
	}	
		
});	

//Draw Polygon on Canvas
$("#drawPolygon").click(function(){
var canvas = $('#mycanvas')[0];
	if(canvas) {	
		if (canvas.getContext){
		  var ctx = canvas.getContext('2d');	
 
          	ctx.beginPath();
            ctx.moveTo(75, 50);
            ctx.lineTo(175, 50);
            ctx.lineTo(200, 75);
            ctx.lineTo(175, 100);
            ctx.lineTo(75, 100);
            ctx.lineTo(50, 75);
            ctx.closePath();
            ctx.fillStyle = "rgb(200,0,0)";
            ctx.fill();

		}
	}	
		
});	

// END CANVAS TASK

// Jquery Interactive Elements 
$(document).ready(function(){
	
//#1--- hides and shows website entry box on form at index.html	
	
	$('#havewebsite').change(function(){
		if($(this).is(":checked")) {
			$('#website').show("fadeIn");	
		} else {
			$('#website').hide("fadeOut");	
		}
		
		
	});
       	
 //#2--  When you click on a form element, it changes the background color
 
  $("input,textarea").focus(function(){
        $(this).css("background-color", "rgb(245, 251, 11)");
    });
    $("input,textarea").blur(function(){
        $(this).css("background-color", "#ffffff");
    });      	
     
//#3-- Submit button is disabled if all required fields are not filled
 $('#contact-form input:required').keyup(function() {

        var empty = false;
        $('#contact-form  input:required').each(function() {
            if ($(this).val() == '') {
                empty = true;
            }
        });

        if (empty) {
            $('#contact-submit').attr('disabled', 'disabled'); 
           
        } else {
            $('#contact-submit').removeAttr('disabled'); 
        	 
        }
    }); 

	//Testing for form input elements
	(function() {

  // Create input element for testing
  var input = document.createElement('input');
  
  // Create the supports object
  var supports = {};
  
  supports.autofocus   = 'autofocus' in input;
  supports.required    = 'required' in input;
  supports.placeholder = 'placeholder' in input;

  // Fallback for autofocus attribute
  if(!supports.autofocus) {
    
  }
  
  // Fallback for required attribute
  if(!supports.required) {
    
  }

  // Fallback for placeholder attribute
  if(!supports.placeholder) {
    
  }
  
  // Change text inside send button on submit
  var send = document.getElementById('contact-submit');
  if(send) {
    var dataText = 'Message Sent';
    send.onclick = function() {
      send.innerHTML = dataText;
      send.disabled = 'disabled';
    }
  }

})();

//#2--- Hides and show What we do paragraph in sidebar on what we do page		
	
	    $("#whatwedo").click(function(){
        	
	       	$("p.texttohide").toggle("slow", function(){
	       		
	       	      	if($("p.texttohide").is(':hidden')) {
						$("#whatwedo").val("Show Details");
					} else {
						$("#whatwedo").val("Hide Details");
					}		
	       		
	       		
	       	});
       	
 	
       	});    
     
// jQuery Hover Effect + Chaining//
     	
   $("h1.what-we-do").hover(function(){
        $(this).css("background-color", "#f16529").css("text-align", "center").css("color", "white");
        }, function(){
        $(this).css("background-color", "white").css("text-align", "left").css("color", "black");
    });
     
     });	

//Filtering Effect on Why us page//

$(document).ready(function(){
	$('#filter').click(function(){
				//Filter event
	$("section").filter(".design").css('background-color','#FCFBBC');
		//first event
	$('#filter').attr("src","http://placehold.it/300x300/eee/000?text=Size+Changed");
		//second Event
	$(".footer-img-right").css("float","left");
		//third event
	$(".footer-img-left").css("float","right");

		 
		
	});
    
});

// jQuery Effect Slide Toggle//
$(document).ready(function(){
    $(".flip").click(function(){
        $(this).next(".panel").slideToggle("slow");
    });
});

// jQuery Effect Fade To//
$(document).ready(function(){
    $("button").click(function(){
        $("#div1").fadeTo("slow", 0.15);
        $("#div2").fadeTo("slow", 0.4);
        $("#div3").fadeTo("slow", 0.5);
    });
});




