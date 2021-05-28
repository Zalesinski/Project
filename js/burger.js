$(document).ready(function() {
    $('.header__burger').on("click", function(click) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});


