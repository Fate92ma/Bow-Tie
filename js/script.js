$(document).ready(function () { // Start Coding Here

    // Smooth Scroll

    $('nav a').click(function (e) {

        e.preventDefault()

        var sectionTo = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(sectionTo).offset().top
        }, 1000);

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

}); // End Code

// Gallery

var a = new FgGallery('.fg-gallery', {
    cols: 4
});