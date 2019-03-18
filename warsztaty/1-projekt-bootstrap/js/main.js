const nav = $('#nav')


// dodaj klasę jak jesteśmy na granicy sekcji
$(window).on('scroll', function () {
    if ($(window).scrollTop() > 50) {
        nav.addClass('scroll');
    } else {
        nav.removeClass('scroll');
    }
});