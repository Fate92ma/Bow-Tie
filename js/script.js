$(document).ready(function () { // Start Coding Here

    // Smooth Scroll

    $('nav a').click(function () {

        var sectionTo = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(sectionTo).offset().top
        }, 1200);

    });

    // Header on Scroll

    $(window).scroll(function () {
        var i = $(this).scrollTop()

        if (i >= 200) {
            $("nav").css("background-color", "var(--color2)")
        } else {
            $("nav").css("background-color", "transparent")
        }
    });

    // Footer

    $("input[type=text]").focusout(function () {
        $(this).css("border-color", "red")
    });

}); // End Code

// Gallery

var a = new FgGallery('.fg-gallery', {
    cols: 4
});