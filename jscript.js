$(document).ready(function () {
    // Adding scroll animation for grid items
    $(window).on("scroll", function () {
        const gridSection = $(".grid-container");
        const windowHeight = $(window).height();
        const scrollPos = $(window).scrollTop();

        /*Check if the grid section is in view
        if (gridSection.length && scrollPos > gridSection.offset().top - windowHeight + 100) {
            $(".grid-item").each(function (index) {
                $(this).css({
                    opacity: 0, // Ensure it starts from 0 opacity
                    transform: "translateY(50px)", // Start position for animation
                });
                $(this).delay(index * 150).animate({
                    opacity: 1,
                    transform: "translateY(0px)",
                }, 500);
            });
        }*/

        // Sticky navbar
        if (scrollPos > 20) {
            $('.navbar').addClass('sticky');
        } else {
            $('.navbar').removeClass('sticky');
        }

        // Scroll-up button visibility
        if (scrollPos > 500) {
            $('.scroll-up-btn').addClass('show');
        } else {
            $('.scroll-up-btn').removeClass('show');
        }
    });

    // Scroll-up button click event
    $('.scroll-up-btn').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 'fast');
        $('html').css('scrollBehavior', 'auto');
    });

    // Smooth scrolling for menu links
    $('.navbar .menu li a').on('click', function () {
        $('html').css('scrollBehavior', 'smooth');
    });

    // Toggle menu visibility
    $('.menu-btn').on('click', function () {
        $('.navbar .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');
    });

    // Owl carousel initialization
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeout: 2000, // Fixed typo
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            600: {
                items: 2,
                nav: false,
            },
            1000: {
                items: 3,
                nav: false,
            },
        },
    });

    $('.expertise-carousel').owlCarousel({
        items: 3,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
          0: { items: 1 },
          600: { items: 2 },
          1000: { items: 3 }
        }
      });
      


});



document.addEventListener("DOMContentLoaded", () => {
    const galleryContainer = document.querySelector(".gallery-container");
    const prevButton = document.querySelector(".nav-button.prev");
    const nextButton = document.querySelector(".nav-button.next");
    const galleryItems = document.querySelectorAll(".gallery-item");
    const itemWidth = galleryItems[0].clientWidth; // Assuming all items have the same width
    let currentIndex = 0;
  
    function scrollToIndex(index) {
      galleryContainer.scrollTo({
        left: index * itemWidth,
        behavior: "smooth",
      });
    }
  
    prevButton.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        scrollToIndex(currentIndex);
      }
    });
  
    nextButton.addEventListener("click", () => {
      if (currentIndex < galleryItems.length - 1) {
        currentIndex++;
        scrollToIndex(currentIndex);
       
      }
    });
  });
  
  
 