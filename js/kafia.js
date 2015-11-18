// Kafia jQuery //
$(document).ready(function(){
    $("#Button1").click(function(){
        $("p.hide").hide(1000);
        alert("The paragraph is now hidden");
    });
});