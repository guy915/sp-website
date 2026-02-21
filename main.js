$.when($.ready).then(() => {
    const initial = $(".initial");

    setTimeout(() => initial.removeClass("initial"), 500);
});

$(window).on("scroll", () => {
    const scrollShow = $(".scroll-show");

    const scrollTop = $(window).scrollTop();
    const height = $(window).height();

    scrollShow.each((i, obj) => {
        const top = $(obj).position().top;
        console.log(height + scrollTop, top);

        if (scrollTop + (7 * height) / 8 > top) {
            $(obj).addClass("show");
        }
    });
});
