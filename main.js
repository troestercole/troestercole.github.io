$(window).on('load', (function() {
    $('.preloader').fadeOut('slow');
 }));

$('.socials-opener').click(() => {
    $('.socials').toggleClass('right');
    $('.socials-opener').toggleClass('right');
})