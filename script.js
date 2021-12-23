function scrol(n) {
    const height = document.querySelector('#menuFixed').offsetHeight
    $(".dishType:nth-of-type(n)").click(function () {
        $('html,body').animate({
            scrollTop: $(".menu" + n).offset().top - height - 1
        },
            0);
    });
}

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