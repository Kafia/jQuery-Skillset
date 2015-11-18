// Kafia jQuery //
$(document).ready(function(){
	
    $("#Button1").click(function(){
        $("p.hide").hide(1000);
        alert("The paragraph is now hidden");

		if(value="show"){
			$("#Button1").click(function(){
				$("p.hide").show(1000);
			})
			}
    });
});

//Filtering//

$(document).ready(function(){
    $("p").filter(".partner").css("background-color","#f16529");

});

// Focus//

$(document).ready(function(){
    $("input").focus(function(){
        $(this).css("background-color", "#cccccc");
    });
    $("input").blur(function(){
        $(this).css("background-color", "#ffffff");
    });
});