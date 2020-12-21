$(document).ready(function(){
    $("h1").css("font-weight", "600");

    $(".clickable").click(function(){
        $(".showing").toggle();
        $(".hidden").show();
        
    });
    $(".textWithImg").hover (function(){
        $(this).fadeIn();
        $(":not(img)").show();
        $(":not(img)").click(function(){
            $("h2").hide();
            $("h2").css({"background-color": "rgba(0, 0, 0, 0.589)", "border-radius": "10px"});
        });
    });
});