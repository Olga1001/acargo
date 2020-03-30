(function($) {
  "use strict"; // Start of use strict

  // Toggle the side navigation
  $("#sidebarToggle, #sidebarToggleTop, .overlay").on('click', function(e) {
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
    $("#sidebarToggleTop").toggleClass("toggled");
    if ($(".sidebar").hasClass("toggled")) {
      $('.sidebar .collapse').collapse('hide');
    };
  });

  // Close any open menu accordions when window is resized below 768px
  $(window).resize(function() {
    if ($(window).width() < 768) {
      $('.sidebar .collapse').collapse('hide');
    };
  });

  // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
  $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function(e) {
    if ($(window).width() > 768) {
      var e0 = e.originalEvent,
        delta = e0.wheelDelta || -e0.detail;
      this.scrollTop += (delta < 0 ? 1 : -1) * 30;
      e.preventDefault();
    }
  });

  // Scroll to top button appear
  $(document).on('scroll', function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });

  // Smooth scrolling using jQuery easing
  $(document).on('click', 'a.scroll-to-top', function(e) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top)
    }, 1000, 'easeInOutExpo');
    e.preventDefault();
  });

})(jQuery); // End of use strict

// Modal Javascript

$(document).ready(function () {
  $("#myBtn").click(function () {
    $('.modal').modal('show');
  });

  $("#modalLong").click(function () {
    $('.modal').modal('show');
  });

  $("#modalScroll").click(function () {
    $('.modal').modal('show');
  });

  $('#modalCenter').click(function () {
    $('.modal').modal('show');
  });
});

// Popover Javascript

$(function () {
  $('[data-toggle="popover"]').popover()
});
$('.popover-dismiss').popover({
  trigger: 'focus'
});

//ORDER
$(document).ready(function () {
  $(".table__item").click(function () {
    $(this).find(".table__arrow").toggleClass('active');
    $(this).closest(".table__body-item").find(".table__drop").slideToggle(300);
  });
});

//ORDER TRANSPORT
$(document).ready(function () {
  $(".transport__weight-item, .btn").click(function () {
    $(this).addClass('active').siblings().removeClass('active');
  });
  $(".select__item").click(function () {
    $(this).closest(".select").toggleClass('active').find(".select__drop").slideToggle(300).parents().siblings().find(".select").removeClass('active').find(".select__drop").slideUp(300);
  });
  $(".select__option").click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    let option = $(this).text();
    $(this).closest(".select").find(".select__item").text(option);
    $(".select__drop").slideUp(300);
    $(".select").removeClass('active');
  });
  $(".select__drop, .select").click(function (e) {
    e.stopPropagation();
  });
  $("body, html").click(function () {
    $(".select__drop").slideUp(300);
    $(".select").removeClass('active');
  });
});