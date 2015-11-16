// jQuery Hover Effect//

$(document).ready(function(){
    $("h1.what-we-do").hover(function(){
        $(this).css("background-color", "#f16529");
		$(this).css("text-align", "center");
		$(this).css("color", "white");
        }, function(){
        $(this).css("background-color", "white");
		$(this).css("text-align", "left");
		$(this).css("color", "black");
    });
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