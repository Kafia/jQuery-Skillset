// jQuery Hover Effect//

$(document).ready(function(){
	
var canvas = $('#mycanvas')[0];
if (canvas.getContext){
  var ctx = canvas.getContext('2d'); 
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(0,0);
  ctx.lineTo(30,140);
  ctx.stroke();

var data = { x: 50, y: 50, r: 25 }; //   circle	
	
   ctx.beginPath();
    ctx.arc(data.x, data.y, data.r, 0, Math.PI * 2); // 0 - 2pi is a full circle
    ctx.fill();	
}	
});
	
	
	
	
	
   $("h1.what-we-do").hover(function(){
        $(this).css("background-color", "#f16529");
		$(this).css("text-align", "center");
		$(this).css("color", "white");
        }, function(){
        $(this).css("background-color", "white");
		$(this).css("text-align", "left");
		$(this).css("color", "black");
    });
// jQuery Click Effect//

$(document).ready(function(){
    $("button").click(function(){
         var div = $("div.animate"); 
		div.css("background-color","#f16529");
		div.css("color","white");
        div.animate({left: '250px',height:'100px',width:'500px'}, "slow");
        div.animate({fontSize: '3em'}, "slow");
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
// jQuery Effect Slide Toggle//
$(document).ready(function(){
    $(".flip").click(function(){
        $(".panel").slideToggle("slow");
    });
});