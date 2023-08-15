
  $(document).ready(function () {
    // Isotope Filtering
    let $btns = $(".project-area .button-group button");

    $btns.click(function (e) {
      // First, remove 'active' class from all buttons, then add 'active' to the clicked button
      $btns.removeClass('active');
      $(this).addClass('active');

      let selector = $(this).attr('data-filter');
      $('.project-area .grid').isotope({
        filter: selector
      });

      return false;
    });

    // Smooth scroll to the section when a link in the navigation menu is clicked
    $(".navbar-nav a").on('click', function (event) {
      if (this.hash !== "") {
        event.preventDefault();

        const hash = this.hash;

        // Smoothly scroll to the target section
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function () {
          window.location.hash = hash;
        });
      }
    });

    // Owl-carousel
    $('.site-main .about-area .owl-carousel').owlCarousel({
      loop: true,
      autoplay: true,
      dots: true,
      responsive: {
        0: {
          items: 1
        },
        560: {
          items: 2
        }
      }
    });

    function navbarFixed() {
      if ($('.header_area').length) {
        $(window).scroll(function () {
          let scroll = $(window).scrollTop();
          let nav_offset_top = $('.header_area').height() + 50;
          if (scroll >= nav_offset_top) {
            $('.header_area .main-menu').addClass('navbar_fixed');
          } else {
            $('.header_area .main-menu').removeClass('navbar_fixed');
          }
        });
      }
    }

    navbarFixed();
  });
