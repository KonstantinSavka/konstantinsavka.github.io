$('.recents-container').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    responsive: [
        {
          breakpoint: 1220,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true
          }
        },
        {
            breakpoint: 568,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true
            }
          }
    ]
  });

  
  $('.main-bg').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 510,
        settings: {
          dots: false
        }
      }
    ]
  });