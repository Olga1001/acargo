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
//MENU arrow
$(document).ready(function () {
  $(".sidebar-light .nav-item").click(function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
  })
});
//ORDER
$(document).ready(function () {
  $(".table__item").click(function () {
    $(this).find(".table__arrow").toggleClass('active');
    $(this).closest(".table__body-item").find(".table__drop").slideToggle(300);
  });
  $(".transport-mode__item").click(function () {
    $(this).toggleClass('active').siblings().removeClass('active');
  });
});

$(document).ready(function () {
  $(".btn").click(function () {
    $(this).addClass('active').siblings().removeClass('active');
  });
  $(".select__item").click(function () {
    $(this).closest(".select").toggleClass('active').find(".select__drop").slideToggle(300).parents().siblings().find(".select").removeClass('active').find(".select__drop").slideUp(300);
  });
  $(".link-share").click(function (e) {
    e.preventDefault();
    $(this).find(".select-absolut").slideToggle(300).parents().siblings().find(".select-absolut").slideUp(300);
  });
  $(".select__option").click(function () {
    $(this).addClass('active').siblings().removeClass('active');
    let option = $(this).text(),
        item = $(this).closest(".select").find(".select__item").prop("tagName");

    if (item == "DIV"){
      $(this).closest(".select").find(".select__item").text(option);
    } else {
      $(this).closest(".select").find(".select__item").val(option);
    }

    $(".select__drop").slideUp(300);
    $(".select").removeClass('active');
  });
  $(".select__option-check").click(function () {
    $(this).toggleClass('active');
  });
  $(".select__drop, .select, .popup .box-white, .link-share").click(function (e) {
    e.stopPropagation();
  });
  $("body, html").click(function () {
    $(".select__drop").slideUp(300);
    $(".select").removeClass('active');
  });
  $(".transport__weight-item input").on("change keyup", function(e){
    var $this = $(this),
        val = $this.val();

    if(val.length >= 1){
        $this.closest(".transport__weight-item").find("p").addClass('active');
    }else {
        $this.closest(".transport__weight-item").find("p").removeClass('active');
    }
  });

});
//LOADER
$(document).ready(function () {
  $("#files").on('change', function(){
    let files = $("#files")[0].files[0];
    $(".loader__files-name").text( files.name);
    $(".loader__files-name").addClass("font-style");
    $(".close-document").addClass("active");
  });
  $("#drop-upload, #drop-upload1").on('change', function(){
    let $this = $(this).closest(".drop-upload");
    let files = $(this)[0].files[0];
    $this.find(".text-16").text(files.name);
    $this.addClass('active');
  });
  $(".loading__file-icon").click(function () {
    $(this).closest(".drop-upload").removeClass('active');
  });
});

//POPUPS
$(document).ready(function () {
  $(".example .btn-white").click(function(){
    let index = $(this).index();
    $(".popup .box-white").eq(index).addClass('active').siblings().removeClass('active');
    $(".container-fluid").addClass('active');
  });
  $(".popup, .close").click(function(e){
    e.preventDefault();
    $(this).closest(".box-white").removeClass('active');
    $(".container-fluid, .popup").removeClass('active');
  });

  //popup - rate
  $(".nav-link").click(function(e){
    e.preventDefault();
    $(this).addClass('active').parent().siblings().find(".nav-link").removeClass('active');
    let index = $(this).parent().index();
    $(".contents__item").eq(index).addClass('active').siblings().removeClass('active');
  });
});
//STICKY
$(document).ready(function () {
  $(window).scroll(function(){
    if ($(window).width() > 768) {
      if($(window).scrollTop() >= 100) {
        $(".sticky").addClass('active');
        $(".topbar").slideUp(0);
      } else {
        $(".sticky").removeClass('active');
        $(".topbar").slideDown(0);
      }
    }
  });
});