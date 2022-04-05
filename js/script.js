// Move to different menu section after nav barbutton click
const height = document.querySelector('#menu-fixed').offsetHeight

for (let i = 1; i <= 16; i++) {
    $(`.dish-type:nth-of-type(${i})`).click(function () {
        $('html,body').animate({
            scrollTop: $(`.menu${i}`).offset().top - height
        }, 0);
    });
}

function scrol(n) {
    const height = document.querySelector('#menu-fixed').offsetHeight
    $(".dish-type:nth-of-type(n)").click(function () {
        $('html,body').animate({
            scrollTop: $(".menu" + n).offset().top - height - 0.5
        }, 0);
    });
}