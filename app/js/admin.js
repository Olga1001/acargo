"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(function ($) {
  "use strict"; // Start of use strict

  function chtaTab(el) {
    $(`${el} .chat_tab`).on('click', function () {
      let index = $(this).index();
      $(this).addClass('active').siblings().removeClass('active');
      $(`${el} .chat-list`).eq(index).addClass('active').siblings().removeClass('active');
    });
  }
  chtaTab('.chat');
  chtaTab('.dropdown-list');

  $('.dropdown-list').on('click', function (e) {
    e.stopPropagation();
  });
  // Toggle the side navigation

  $("#sidebarToggle, #sidebarToggleTop, .overlay").on('click', function (e) {
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
    $("#sidebarToggleTop").toggleClass("toggled");

    if ($(".sidebar").hasClass("toggled")) {
      $('.sidebar .collapse').collapse('hide');
    }
  
  }); // Close any open menu accordions when window is resized below 768px
  if (window.matchMedia("(max-width: 768px)").matches) { 
    $("body").removeClass("sidebar-toggled");
    $(".sidebar").removeClass("toggled");
  }
  $(window).resize(function () {
    if ($(window).width() < 768) {
      $('.sidebar .collapse').collapse('hide');
    }

    ;
  }); // Prevent the content wrapper from scrolling when the fixed side navigation hovered over

  $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function (e) {
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

    $(".collapse_v2").each(function () {
      console.log("1");
      let height = $(this).height(); 
      console.log(height);
      $(this).find(".line__last").height(height - 53);
    });

  $(window).on("load", function() {
    //Prevent having no "active" slide
    var $el = $('.calendar__item.active');
    if (!$el.length) {
      $('.calendar__item').first().addClass('active');
    }
  });
  
  $(".btn-prev_v2").click(function() {
    var $el = $('.active').prev('.calendar__item');
    if (!$el.length) //If no previous, s$elect last
    {
      $el = $('.calendar__item').last();
    }
    $('.active').removeClass('active');
    $el.addClass('active');
  });
  
  $(".btn-next_v2").click(function() {
    var $el = $('.active').next('.calendar__item');
    if (!$el.length) //If no next, s$elect first
    {
      $el = $('.calendar__item').first();
    }
    $('.active').removeClass('active');
    $el.addClass('active');
  });

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
}); // Popover Javascript
// $(function () {
//   $('[data-toggle="popover"]').popover()
// });
// $('.popover-dismiss').popover({
//   trigger: 'focus'
// });
//MENU arrow

// $(document).ready(function () {
//   $(".sidebar-light .nav-item").click(function (e) {
//     e.preventDefault();
//     $(this).toggleClass('active');
//   });
// }); //ORDER

$(document).ready(function () {

  // dashed line start-finish  
  if (document.querySelector('.current-position')) {
    let segmentDashed = $(".line-vertical_shipment").height() - $(".current-position").position().top;
    let topStartDashed = $(".current-position").position().top;
    $(".line-vertical_dashed").css({"top":(topStartDashed + 11), "height": (segmentDashed - 11)});
  }

  
  $(".table__item").click(function () {
    $(this).find(".table__arrow").toggleClass('active');
    $(this).closest("li").find(".table__drop").slideToggle(300);
  });
  $(".transport-mode__item").click(function () {
    $(this).toggleClass('active').siblings().removeClass('active');
  });
});
$(document).ready(function () {

  $(".relative .tool").click(function (e) {
    e.stopPropagation();
     $(this).closest('.relative').find(".select__drop").slideToggle(300);
  })
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
    let colorOption = $(this).attr("data-color");
    var option = $(this).text(),
        item = $(this).closest(".select").find(".select__item").prop("tagName");

    if (item == "DIV") {
      $(this).closest(".select").find(".select__item").text(option);
    } else {
      $(this).closest(".select").find(".select__item").val(option);
    }
    $(this).closest(".select").find(".select__item__color").append("<div></div>");
    $(this).closest(".select").find(".select__item__color").find("div").addClass(colorOption);
    $(".select__drop").slideUp(300);
    $(".select").removeClass('active');
  });
  $(".select__option-check").click(function () {
    $(this).toggleClass('active');
  });
  $(".select__drop, .select, .popup .box-white, .link-share, .input__clear, .input__clear").click(function (e) {
    e.stopPropagation();
  });
  $("body, html").click(function () {
    $(".drop").removeClass('active');
    $(".select__drop").slideUp(300);
    $(".select").removeClass('active');
  });
  $(".transport__weight-item input").on("change keyup", function (e) {
    var $this = $(this),
        val = $this.val();

    if (val.length >= 1) {
      $this.closest(".transport__weight-item").find("p").addClass('active');
    } else {
      $this.closest(".transport__weight-item").find("p").removeClass('active');
    }
  });
}); //LOADER

$(document).ready(function () {
  $("#files").on('change', function () {
    var files = $("#files")[0].files[0];
    $(".loader__files-name").text(files.name);
    $(".loader__files-name").addClass("font-style");
    $(".close-document").addClass("active");
  });
  $("#drop-upload, #drop-upload1").on('change', function () {
    var $this = $(this).closest(".drop-upload");
    var files = $(this)[0].files[0];
    $this.find(".text-16").text(files.name);
    $this.addClass('active');
  });
  $(".loading__file-icon").click(function () {
    $(this).closest(".drop-upload").removeClass('active');
  });
}); //POPUPS

$(document).ready(function () {
  $(".example .btn-white").click(function () {
    var index = $(this).index();
    $(".popup .box-white").eq(index).addClass('active').siblings().removeClass('active');
    $(".container-fluid").addClass('active');
  });
  $(".popup, .close").click(function (e) {
    e.preventDefault();
    $(this).closest(".box-white").removeClass('active');
    $(".container-fluid, .popup").removeClass('active');
  }); //popup - rate

  $(".nav .nav-link").click(function (e) {
    e.preventDefault();
    $(this).addClass('active').parent().siblings().find(".nav-link").removeClass('active');
    var index = $(this).parent().index();
    $(".contents__item").eq(index).addClass('active').siblings().removeClass('active');
    $("input.range-way3").bootstrapSlider('refresh');
    $("input.range-way").bootstrapSlider('refresh');
    $("input.range-way4").bootstrapSlider('refresh');
  });
  $(".nav-link_v3").click(function (e) {
    e.preventDefault();
    $(this).addClass('active').parent().siblings().find(".nav-link_v3").removeClass('active');
    var index = $(this).parent().index();
    $(".contents__item_v3").eq(index).addClass('active').siblings().removeClass('active');
    if ($(this).html() === 'Progress') {
      $('.toggle-tabs').show()
    } else {
      $('.toggle-tabs').hide()
    }
  });
});

//STICKY
$(document).ready(function () {
  let topbarHeight = $(".topbar").height();
  $(".popup__booking-detail").css("top", topbarHeight);

  $(window).scroll(function () {
    if ($(window).width() > 768) {
      if ($(window).scrollTop() > 0) {
        $(".sticky").addClass('active');
        $(".topbar").slideUp(200);
        $(".box-head").addClass('fixed-top');
        $(".fix-top-tabs").addClass('active');
      } else {
        $(".sticky").removeClass('active');
        $(".topbar").slideDown(200);
        $(".box-head").removeClass('fixed-top');
        $(".fix-top-tabs").removeClass('active');
      }
    }
    if ($(window).scrollTop() > 1) {
      $(".popup__booking-detail").addClass('top-0');
      $(".popup__company-info").addClass('top-0');
    } else {
      $(".popup__booking-detail").removeClass('top-0');
      $(".popup__company-info").removeClass('top-0');
    }
  });
}); 

$(document).ready(function () {

  $(".btn-filter").click(function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $(".filter-drop").slideToggle(300);
  });
  $(".input__clear").click(function (e) {
    $(this).find(".drop").toggleClass('active').parents().siblings().find(".drop").removeClass('active');
  });
  // if (document.querySelectorAll('[data-slider]') != '') {
  //   $("input.range-way").bootstrapSlider({
  //     value: [1, 6],
  //     ticks: [1, 2, 3, 4, 5, 6],
  //     ticks_labels: [' <img src="img/icon-ocean-1.svg" alt="icon" class="way__item-icon"><p class="text-16">DO</p><p class="text-13 c-dark">Haulage</p>', '<img src="img/icon-ocean-2.svg" alt="icon" class="way__item-icon"><p class="text-16">LI</p><p class="text-13 c-dark">Liner out</p>', '<img src="img/icon-ocean-3.svg" alt="icon" class="way__item-icon way__item-icon__boat"><p class="text-16">CY-CY</p><p class="text-13 c-dark">Ocean freight</p>', '<img src="img/icon-ocean-2.svg" alt="icon" class="way__item-icon"><p class="text-16">LO</p><p class="text-13 c-dark">Liner out</p>', '<img src="img/icon-ocean-4.svg" alt="icon" class="way__item-icon way__item-icon__car"><p class="text-16">FOT</p><p class="text-13 c-dark">Free on truck</p>', ' <img src="img/icon-ocean-1.svg" alt="icon" class="way__item-icon"><p class="text-16">DO</p><p class="text-13 c-dark">Haulage</p>'],
  //     look_to_sticks: true
  //   });
  //   $("input.range-way2").bootstrapSlider({
  //     value: [1, 4],
  //     ticks: [1, 2, 3, 4],
  //     ticks_labels: [' <img src="img/buildings.svg" alt="icon" class="way__item-icon"> <img src="img/delivery-truck-1.svg" alt="icon" class="way__item-truck"><p class="text-14 c-gray">Loading_1</p>', '<img src="img/buildings.svg" alt="icon" class="way__item-icon"><img src="img/delivery-truck-1.svg" alt="icon" class="way__item-truck"><p class="text-14 c-gray">Loading_2</p>', '<img src="img/holidays.svg" alt="icon" class="way__item-icon"><img src="img/delivery-truck-1.svg" alt="icon" class="way__item-truck"><p class="text-14 c-gray">Delivery_1</p>', '<img src="img/holidays.svg" alt="icon" class="way__item-icon"><p class="text-14 c-gray">Delivery_2</p>'],
  //     look_to_sticks: true
  //   });
  //   $("input.range-way3").bootstrapSlider({
  //     value: [1, 6],
  //     ticks: [1, 2, 3, 4, 5, 6],
  //     ticks_labels: [' <img src="img/icon-ocean-1.svg" alt="icon" class="way__item-icon way__item-icon-point"><label class="d-flex justify-content-center checkbox__range"><input type="checkbox" class="checkbox" ><span class="checkbox__icon-blue  m-0 mr-2"></span><span class="text-16">DO</span></label>', '<img src="img/architecture-and-city-1.svg" alt="icon" class="way__item-icon way__item-icon-house"><label class="d-flex justify-content-center checkbox__range"><input type="checkbox" class="checkbox" ><span class="checkbox__icon-blue m-0 mr-2"></span><span class="text-16">DO</span></label>', '<img src="img/icon-ocean-5.svg" alt="icon" class="way__item-icon way__item-icon-forklift"> <img src="img/icon-ocean-6.svg" alt="icon" class="way__item-icon way__item-icon-center"><label class="d-flex justify-content-center checkbox__range"><input type="checkbox" class="checkbox " ><span class="checkbox__icon-blue  m-0 mr-2"></span><span class="text-16">DO</span></label>', '<img src="img/icon-ocean-5.svg" alt="icon" class="way__item-icon way__item-icon-forklift way__item-icon-rotate"><label class="d-flex justify-content-center checkbox__range"><input type="checkbox" class="checkbox " ><span class="checkbox__icon-blue  m-0 mr-2"></span><span class="text-16">DO</span></label>', '<img src="img/architecture-and-city-1.svg" alt="icon" class="way__item-icon way__item-icon-house"><label class="d-flex justify-content-center checkbox__range"><input type="checkbox" class="checkbox"  ><span class="checkbox__icon-blue  m-0 mr-2"></span><span class="text-16">DO</span></label>', ' <img src="img/icon-ocean-1.svg" alt="icon" class="way__item-icon way__item-icon-point"><label class="d-flex justify-content-center checkbox__range"><input type="checkbox" class="checkbox " ><span class="checkbox__icon-blue  m-0 mr-2"></span><span class="text-16">DO</span></label>'],
  //     look_to_sticks: true
  //   });
  //   $("input.range-way4").bootstrapSlider({
  //     value: [1, 7],
  //     ticks: [1, 2, 3, 4, 5, 6, 7],
  //     ticks_labels: ['<img src="img/icon-ocean-1.svg" alt="icon" class="way__item-icon way__item-icon-point"><label class="d-flex justify-content-center checkbox__range"><input type="checkbox" class="checkbox" ><span class="checkbox__icon-blue  m-0 mr-2"></span><span class="text-16">DO</span></label>', '<img src="img/architecture-and-city-1.svg" alt="icon" class="way__item-icon way__item-icon-house"><label class="d-flex justify-content-center checkbox__range"><input type="checkbox" class="checkbox" ><span class="checkbox__icon-blue m-0 mr-2"></span><span class="text-16">DO</span></label>', '<img src="img/icon-ocean-5.svg" alt="icon" class="way__item-icon way__item-icon-forklift"><label class="d-flex justify-content-center checkbox__range"><input type="checkbox" class="checkbox " ><span class="checkbox__icon-blue  m-0 mr-2"></span><span class="text-16">DO</span></label>', '<img src="img/icon-ocean-6.svg" alt="icon" class="way__item-icon way__item-icon-train"><label class="d-flex justify-content-center checkbox__range"><input type="checkbox" class="checkbox " ><span class="checkbox__icon-blue  m-0 mr-2"></span><span class="text-16">DO</span></label>', '<img src="img/icon-ocean-5.svg" alt="icon" class="way__item-icon way__item-icon-forklift way__item-icon-rotate"><label class="d-flex justify-content-center checkbox__range"><input type="checkbox" class="checkbox " ><span class="checkbox__icon-blue  m-0 mr-2"></span><span class="text-16">DO</span></label>', '<img src="img/architecture-and-city-1.svg" alt="icon" class="way__item-icon way__item-icon-house"><label class="d-flex justify-content-center checkbox__range"><input type="checkbox" class="checkbox"  ><span class="checkbox__icon-blue  m-0 mr-2"></span><span class="text-16">DO</span></label>', ' <img src="img/icon-ocean-1.svg" alt="icon" class="way__item-icon way__item-icon-point"><label class="d-flex justify-content-center checkbox__range"><input type="checkbox" class="checkbox " ><span class="checkbox__icon-blue  m-0 mr-2"></span><span class="text-16">DO</span></label>'],
  //     look_to_sticks: true
  //   }); //click on arrow in page order table sea
  //   $("input.range-way5").bootstrapSlider({
  //     value: [1, 4],
  //     ticks: [1, 2, 3, 4],
  //     ticks_labels: [' <img src="img/delivery-truck-1.svg" alt="icon" class="way__item-truck"><p class="text-14 c-gray">UAODS</p> ', '<img src="img/boat.svg" alt="icon" class="way__item-truck" height="22px"><p class="text-14 c-gray">UAODS</p>', '<img src="img/delivery-truck-1.svg" alt="icon" class="way__item-truck"><p class="text-14 c-gray">Delivery_1</p>'],
  //     look_to_sticks: true
  //   });
  //   $("input.range-way6").bootstrapSlider({
  //     value: [1, 4],
  //     ticks: [1, 2, 3, 4],
  //     ticks_labels: ['<img src="img/delivery-truck-1.svg" alt="icon" height="22px" width="22px"><p class="fs-14 text-center">DOOR <span class="fs-14 d-block">RUCAVA, LV</span></p> ', '<p class="fs-14 text-center">POL <span class="fs-14 d-block">RUCAVA, LV</span></p>', '<img src="img/boat.svg" alt="icon" height="22px" width="22px"><p class="fs-14 text-center">POD <span class="fs-14 d-block">RUCAVA, LV</span></p>',' <img src="img/delivery-truck-1.svg" alt="icon" height="22px" width="22px"><p class="fs-14 text-center">DOOR <span class="fs-14 d-block">RUCAVA, LV</span></p> '],
  //     look_to_sticks: true
  //   });
  // }
 
  $(".click__more").click(function (e) {
    e.preventDefault();
    $(this).closest(".table__order-list").toggleClass('active');
    $(this).closest(".table__order-list").find(".drop-more").slideToggle(300);
    $("input.range-way").bootstrapSlider('refresh');
    $("input.range-way2").bootstrapSlider('refresh');
    $("input.range-way3").bootstrapSlider('refresh');
    $(this).closest(".table__order-list").find(".last").toggleClass('active-scale');
  });

  $(".collapsed-bg").click(function (e) { 
    $(this).find(".last").toggleClass('active-scale');
    $(this).find(".popup2").removeClass('active');
    $(this).closest(".table__order-list").toggleClass('overflow-hidden');
  });

  $(".table__order-main").on("change click", function (e) {
    setTimeout(() => {
      $("input.range-way").bootstrapSlider('refresh');
      $("input.range-way2").bootstrapSlider('refresh');
      $("input.range-way3").bootstrapSlider('refresh');
    }, 1);
  });
  var $inputs = $('.table__rate-item, .select-calendar, .block_resize-input'); // Resize based on text if text.length > 0
  // Otherwise resize based on the placeholder

  function resizeForText(text) {
    var $this = $(this);

    if (!text.trim()) {
      text = $this.attr('placeholder').trim();
    }

    var $span = $this.parent().find('.table__span');
    $span.text(text);
    var $inputSize = $span.width();
    $this.css("width", $inputSize);
  }

  $inputs.find('input').keypress(function (e) {
    if (e.which && e.charCode) {
      var c = String.fromCharCode(e.keyCode | e.charCode);
      var $this = $(this);
      resizeForText.call($this, $this.val() + c);
    }
  }); // Backspace event only fires for keyup

  $inputs.find('input').keyup(function (e) {
    if (e.keyCode === 8 || e.keyCode === 46) {
      resizeForText.call($(this), $(this).val());
    }
  });
  $inputs.find('input').each(function () {
    var $this = $(this);
    resizeForText.call($this, $this.val());
  });
});