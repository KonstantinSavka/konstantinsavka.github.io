$(document).ready(function () {
    $('.panel__panel-heading').click(function () {
        $(this).toggleClass('in').next().slideToggle();
        $('.panel__panel-heading').not(this).removeClass('in').next().slideUp();
    });
});

$(document).ready(function(){
  $('.body__carousel').slick({
    dots: false,
    responsive: [
      {
        breakpoint: 1030,
        settings: {
          // arrows: false,  
          autoplay: true,
          autoplaySpeed: 2000
        }
      }
    ]
  });
});

$(document).ready(function(){
  $('.body__carousel-multiple').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1030,
        settings: {
          // arrows: false,  
          autoplay: true,
          autoplaySpeed: 2000
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          // arrows: false,
          autoplay: true,
          autoplaySpeed: 2000
        }
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          // arrows: false,
          autoplay: true,
          autoplaySpeed: 2000
        }
      }
    ]
  });
});

$(document).ready(function(){
  $('.body__carousel-multiple-2').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1030,
        settings: { 
          // arrows: false,
          autoplay: true,
          autoplaySpeed: 2000
        }
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          // arrows: false,
          autoplay: true,
          autoplaySpeed: 2000
        }
      }
    ] 
  });
});

$(document).ready(function(){
  $("#s1").click(function(){
    $(".fa-star").css("color","black");
    $("#s1").css("color","#ffc808");
  });
  $("#s2").click(function(){
    $(".fa-star").css("color","black");
    $("#s1,#s2").css("color","#ffc808");
  });
  $("#s3").click(function(){
    $(".fa-star").css("color","black");
    $("#s1,#s2,#s3").css("color","#ffc808");
  });
  $("#s4").click(function(){
    $(".fa-star").css("color","black");
    $("#s1,#s2,#s3,#s4").css("color","#ffc808");
  });
  $("#s5").click(function(){
    $(".fa-star").css("color","black");
    $(".fa-star").css("color","#ffc808");
  });
});

function burgerMenu(selector) {
  let menu = $(selector);
  let button = menu.find('.burger-menu__button');
  let links = menu.find('.burger-menu__link');
  let overlay = menu.find('.burger-menu__overlay');

  button.on('click', (e) => {
    e.preventDefault();
    toggleMenu();
  });

  links.on('click', () => toggleMenu());
  overlay.on('click', () => toggleMenu());

  function toggleMenu() {
    menu.toggleClass('burger-menu_active');

    if (menu.hasClass('burger-menu_active')) {
      $('body').css('overflow', 'hidden');
    } else {
      $('body').css('overflow', 'visible');
    }
  }
}

burgerMenu('.burger-menu');
