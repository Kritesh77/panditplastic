// Hide Header on on scroll down
$(document).ready(function() {
  $(document).ready(function() {
    var slider = $('#homepage-slider');
    var prev = document.querySelector('#newslider-left');
    var next = document.querySelector('#newslider-right');
    $('.slider').slick({
      autoplay: false,
      infinite: true,
      centerMode: true,
      arrows: false,
      focusOnSelect: true,
      speed:800,
      dots: false,
      mobileFirst:true,
      adaptiveHeight: true,
      variableWidth: true,
      responsive: [

        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
    next.addEventListener("click", function() {
      return slider.slick("slickNext");
      console.log(slider.slick("slickNext"));
    });
    prev.addEventListener("click", function() {
      return slider.slick("slickPrev")
    });

    var reviewSlider = $('#review-slider');
    var prev2 = document.querySelector('#review-left');
    var next2 = document.querySelector('#review-right');
    $("#review-slider").slick({
      autoplay: false,
      infinite: true,
      mobileFirst:true,
      centerMode: true,
      arrows: false,
      slidesToShow: 3,
      slidesToScroll:1,
      focusOnSelect: true,
      dots: true,
      centerPadding:'50px',
      speed:1100,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
    next2.addEventListener("click", function() {
      return reviewSlider.slick("slickNext");
    });
    prev2.addEventListener("click", function() {
      return reviewSlider.slick("slickPrev")
    });

  });
});
