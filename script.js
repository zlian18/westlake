var header = document.getElementById("dishTypeList");
var btns = header.getElementsByClassName("dishType");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = header.getElementsByClassName("active");
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }
        this.className += " active";
    });
}

// Move to section after button click
const height = document.querySelector('#menuFixed').offsetHeight 
$(".dishType:nth-of-type(1)").click(function () {
    $('html,body').animate({
        scrollTop: $(".menu1").offset().top - height - 1
    }, 0);
});
$(".dishType:nth-of-type(2)").click(function () {
    $('html,body').animate({
        scrollTop: $(".menu2").offset().top - height
    }, 0);
});
$(".dishType:nth-of-type(3)").click(function () {
    $('html,body').animate({
        scrollTop: $(".menu3").offset().top - height
    }, 0);
});
$(".dishType:nth-of-type(4)").click(function () {
    $('html,body').animate({
        scrollTop: $(".menu4").offset().top - height
    }, 0);
});
$(".dishType:nth-of-type(5)").click(function () {
    $('html,body').animate({
        scrollTop: $(".menu5").offset().top - height
    }, 0);
});
$(".dishType:nth-of-type(6)").click(function () {
    $('html,body').animate({
        scrollTop: $(".menu6").offset().top - height
    }, 0);
});
$(".dishType:nth-of-type(7)").click(function () {
    $('html,body').animate({
        scrollTop: $(".menu7").offset().top - height
    }, 0);
});
$(".dishType:nth-of-type(8)").click(function () {
    $('html,body').animate({
        scrollTop: $(".menu8").offset().top - height
    }, 0);
});
$(".dishType:nth-of-type(9)").click(function () {
    $('html,body').animate({
        scrollTop: $(".menu9").offset().top - height
    }, 0);
});
$(".dishType:nth-of-type(10)").click(function () {
    $('html,body').animate({
        scrollTop: $(".menu10").offset().top - height
    }, 0);
});
$(".dishType:nth-of-type(11)").click(function () {
    $('html,body').animate({
        scrollTop: $(".menu11").offset().top - height
    }, 0);
});
$(".dishType:nth-of-type(12)").click(function () {
    $('html,body').animate({
        scrollTop: $(".menu12").offset().top - height
    }, 0);
});
$(".dishType:nth-of-type(13)").click(function () {
    $('html,body').animate({
        scrollTop: $(".menu13").offset().top - height
    }, 0);
});
$(".dishType:nth-of-type(14)").click(function () {
    $('html,body').animate({
        scrollTop: $(".menu14").offset().top - height
    }, 0);
});
$(".dishType:nth-of-type(15)").click(function () {
    $('html,body').animate({
        scrollTop: $(".menu15").offset().top - height
    }, 0);
});
$(".dishType:nth-of-type(16)").click(function () {
    $('html,body').animate({
        scrollTop: $(".menu16").offset().top - height
    }, 0);
});

function scrol(n) {
    const height = document.querySelector('#menuFixed').offsetHeight
    $(".dishType:nth-of-type(n)").click(function () {
        $('html,body').animate({
            scrollTop: $(".menu" + n).offset().top - height - 0.5
        }, 0);
    });
}
