function menuToggle() {
    var menu = document.getElementById("burgerMenu");
    var list = document.getElementById("list");
    var listItems = list.childElementCount;
    var newHeight = listItems * 2.5 + "rem"; // Calculate new height based on items

    if (menu.style.height === "0px" || menu.style.height === "0rem") {
        menu.style.height = newHeight;
    } else {
        menu.style.height = "0rem";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const reviews = document.querySelectorAll('.review');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    let currentIndex = 0;

    function updateReviews(newIndex) {
        reviews[currentIndex].classList.remove('active');
        reviews[currentIndex].classList.add('exit');

        setTimeout(() => {
            reviews[currentIndex].style.display = 'none';
            reviews[currentIndex].classList.remove('exit');
            currentIndex = newIndex;
            reviews[currentIndex].style.display = 'flex';
            setTimeout(() => reviews[currentIndex].classList.add('active'), 20);
        }, 500); // Match this with your CSS transition duration
    }

    prevBtn.addEventListener('click', function() {
        const newIndex = (currentIndex > 0) ? currentIndex - 1 : reviews.length - 1;
        updateReviews(newIndex);
    });

    nextBtn.addEventListener('click', function() {
        const newIndex = (currentIndex < reviews.length - 1) ? currentIndex + 1 : 0;
        updateReviews(newIndex);
    });

    // Initialize the first review as active
    reviews[currentIndex].classList.add('active');
    reviews[currentIndex].style.display = 'flex';
});
$(document).ready(function () {
    $(".up").hide()
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 100)
            $(".up").show()
        else
            $(".up").hide()
    })
    $(".up").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 500);
    })
})
$(document).ready(function () {
    $('.viewall').click(function () {
        window.location.href = 'product.html';
    });
});
$(document).ready(function () {
    $('.viewall2').click(function () {
        window.location.href = 'blog.html';
    });
});
$(document).ready(function () {
    $('.fa-user').click(function () {
        window.location.href = 'login.html';
    });
});
$(document).ready(function () {
    $(".heart2").hide()
    $(".heart1").click(function () {
        $(".heart1").hide()
        $(".heart2").show()
    })
    $(".heart2").click(function () {
        $(".heart2").hide()
        $(".heart1").show()
    })
})
$(document).ready(function () {
    $(".added").hide()
    $(".btnadd").click(function () {
        $(".added").show()
    })
    $(".del").click(function(){
        $(".added").hide()
    })
})

$(document).ready(function () {
    $(".preview").hide();
    $(".product").click(function () {
        $(".preview").hide();
        var productIndex = $(this).attr('class').match(/\d+/)[0];
        $(".preview" + productIndex).show();
    });
    $(".del").click(function () {
        $(".preview").hide()
    })
});


$(document).ready(function() {
    $('.thumbnail').click(function() {
        var newSrc = $(this).attr('src');
        $(this).closest('.preview').find('.mainImage').attr('src', newSrc);
    });
});
$(document).ready(function () {
    $(".success").hide();
    $(".submit").click(function () {
        $(".success").show()
    })
})
$(document).ready(function () {
    $(".btn").click(function scrollDown() {
        window.scrollBy({
            top: window.innerHeight, behavior:'smooth'
        })
    })
})
function scrollDown(){
    window.scrollBy({
        top: window.innerHeight, behavior:'smooth'
    })
}