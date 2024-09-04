$(document).ready(function(){
    $(".up").hide()
    $(window).scroll(function() {
        if($(this).scrollTop() >= 100)
            $(".up").show()
        else
            $(".up").hide()
    })
    $(".up").click(function(){
        $("html,body").animate({
            scrollTop: 0
        }, 500);
    })
})
$(document).ready(function(){
    $(".heart2").hide()
    $(".heart1").click(function(){
        $(".heart1").hide()
        $(".heart2").show()
    })
    $(".heart2").click(function(){
        $(".heart2").hide()
        $(".heart1").show()
    })
})


$(document).ready(function() {
    $(".preview").hide();
    $(".product").click(function() {
        $(".preview").hide();
        var productIndex = $(this).attr('class').match(/\d+/)[0];
        $(".preview" + productIndex).show();
    });
    $(".del").click(function(){
        $(".preview").hide()
    })
});


window.onload = function(){
    let big = document.getElementById("big");
    let images=document.querySelectorAll(".small img");
    images.forEach(function(im) {
        im.onclick = function() {
          big.src = this.src;
        };
    });
}    
$(document).ready(function () {
    $(".added").hide()
    $(".btnadd").click(function () {
        $(".added").show()
    })
    $(".del").click(function(){
        $(".added").hide()
    })
})