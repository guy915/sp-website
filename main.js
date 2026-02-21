$.when($.ready).then(() => {
    const initial = $(".initial");

    setTimeout(() => initial.removeClass("initial"), 500);
});

const parallax = $(".parallax");

function scrollEvent() {
    const scrollShow = $(".scroll-show:not(.show)");

    const scrollTop = $(window).scrollTop();
    const windowHeight = $(window).height();

    scrollShow.each((i, obj) => {
        const top = $(obj).offset().top;

        if (scrollTop + (7 * windowHeight) / 8 > top) {
            $(obj).addClass("show");
        }
    });

    parallax.each((i, obj) => {
        const top = $(obj).offset().top;
        const height = $(obj).height();

        if (i === 0) console.log(`${i}: ${top}`);

        $(obj)
            .find("img")
            .css("height", height + windowHeight / 4)
            .css("top", (scrollTop - top) / 4);
    });
}

$(window).on("scroll", scrollEvent);
$(window).on("resize", scrollEvent);
