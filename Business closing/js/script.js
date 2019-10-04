$(function(){

$('.slider__container, .news-body__slider').slick({
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    infinite: false,
    responsive: [
        {
          breakpoint: 1080,
          settings: {
            arrows: false,
            autoplay: true,
            autoplaySpeed: 2000
          }
        }
    ]
});

$('select').styler();

$('.menu__burger').on('click', function(){
    $('.content__menu ul').slideToggle();
});


});