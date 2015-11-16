// jQuery //

$(document).ready(function(){
    $("h1.what-we-do").hover(function(){
        $(this).css("background-color", "#f16529");
		$(this).css("text-align", "center");
        }, function(){
        $(this).css("background-color", "white");
		$(this).css("text-align", "left");
    });
});
