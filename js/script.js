$(document).ready(function(){
    $("h1").css("font-weight", "600");

    $(".clickable").click(function(){
        $(".showing").toggle();
        $(".hidden").show();
        
    });

    $(".textWithImg").css("img:hover", "blur(2px)");
});