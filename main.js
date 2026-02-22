function syncNameRows() {
    const rows = $(".name-row");
    rows.removeClass("stacked");

    let anyOverflow = false;
    rows.each((i, row) => {
        const h2 = row.querySelector("h2");
        const socials = row.querySelector(".socials");
        if (h2 && socials) {
            const needed = h2.scrollWidth + socials.scrollWidth + 12;
            if (needed > row.clientWidth) {
                anyOverflow = true;
                return false;
            }
        }
    });

    if (anyOverflow) rows.addClass("stacked");
}

$.when($.ready).then(() => {
    const initial = $(".initial");

    setTimeout(() => initial.removeClass("initial"), 500);

    $(".socials a").attr("target", "_blank");

    syncNameRows();
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

        $(obj)
            .find("img")
            .css("height", height + windowHeight / 4)
            .css("top", (scrollTop - top) / 4);
    });
}

$(window).on("scroll", scrollEvent);
$(window).on("resize", () => {
    scrollEvent();
    syncNameRows();
});
