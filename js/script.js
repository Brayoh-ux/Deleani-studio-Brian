
$(document).ready(function(){
    $("h1").css("font-weight", "600");

    $(".col-md-4").click(function(){
        $(this).children('.hidden').slideToggle(1400);
        $(this).children('.showing').toggle(1500);
        
    });
    $(".textWithImg").hover (function(){
        $("h2").css({"background-color": "rgba(0, 0, 0, 0.689)", "border-radius": "10px", "padding-top": "20px", "padding-bottom": "20px"});
        $(this).children(":not(img)").fadeToggle(100, "linear");
    });
    
});


$("h2").show();
        $("h2").css({"background-color": "rgba(0, 0, 0, 0.589)", "border-radius": "10px"});
        $("h2").click(function(){
            $("h2").css({"background-color": "rgba(0, 0, 0, 0.589)", "border-radius": "10px"});
            $("h2").show();
            $("h2").hide();
        });


        $("").toggle();
        $(".hidden").show();