
$(document).ready(function(){
    $("h1").css("font-weight", "600");

    $(".col-md-4").click(function(){
        $(this).children('.hidden').slideToggle(1400);
        $(this).children('.showing').toggle(1500);
        
    });
    $(".textWithImg").hover (function(){
        $("h2").css({"background-color": " rgba(255, 255, 255, 0.725", "border-radius": "10px", "padding-top": "20px", "padding-bottom": "20px"});
        $(this).children(":not(img)").fadeToggle(100, "linear");
    });
    $("button").click(function(event){
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var text = document.getElementById('comments').value;

        if((name == "") || (email == "") || (text == "")){
            alert("Please enter empty fields!");
        }
        else{
            alert(name + ' we have received your message. Thank you fro reaching out to us.');
        }
        event.preventDefault();
    });
    $("button").on('click', function(){
        $('form').each(function(){
            this.reset();
        });
    });
});

       