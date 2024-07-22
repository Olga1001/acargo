"use strict";

const $$el = (selector) => document.querySelectorAll(selector)
const $el = (selector) => document.querySelector(selector)

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

});
$(document).ready(function () {
  $('.nav-tabs a[data-toggle="tab"]').on('show.bs.tab', function(e) {
    let target = $(e.target).data('target');
    $(target)
      .addClass('active')
      .siblings('.tab-pane.active')
      .removeClass('active')
  });

  $(".collapse_v2").each(function () {
    console.log("1");
    let height = $(this).height();
    console.log(height);
    $(this).find(".line__last").height(height - 53);
  });

  $(window).on("load", function () {
    //Prevent having no "active" slide
    var $el = $('.calendar__item.active');
    if (!$el.length) {
      $('.calendar__item').first().addClass('active');
    }
  });

  $(".btn-prev_v2").click(function () {
    var $el = $('.active').prev('.calendar__item');
    if (!$el.length) //If no previous, s$elect last
    {
      $el = $('.calendar__item').last();
    }
    $('.active').removeClass('active');
    $el.addClass('active');
  });

  $(".btn-next_v2").click(function () {
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
  if ($el('.current-position')) {
    let segmentDashed = $(".line-vertical_shipment").height() - $(".current-position").position().top;
    let topStartDashed = $(".current-position").position().top;
    $(".line-vertical_dashed").css({"top": (topStartDashed + 11), "height": (segmentDashed - 11)});
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
  $('[data-toggle="collapse"]').click(function (e) {
    console.log($(this).closest('.focus_row'))
    if ( $(this).closest('.focus_row').length > 0) {
      $(this).closest('.focus_row').find('.focus_row_item').toggleClass('bg-light-ffe')
     
    }
  })
  $('.select__drop [data-toggle="collapse"], .relative > [data-toggle="collapse"]').click(function (e) {
    console.log(this)

    $(this).toggleClass('collapsed').parent().siblings().find('[data-toggle="collapse"]').removeClass('collapsed');
    let target = $(this).attr('data-target');
    $(target).toggleClass('show').parent().siblings().find('.collapse').removeClass('show');
  })
  $(".relative .tool").click(function (e) {
    e.stopPropagation();
    $(this).closest('.relative').find(".select__drop").slideToggle(300);
  })
  $(".btn").click(function () {
    $(this).addClass('active').siblings().removeClass('active');
  });
  $(".select__item").click(function (e) {
    $(this).closest(".select").toggleClass('active').find(".select__drop").first().slideToggle(300).parents().siblings().find(".select").removeClass('active').find(".select__drop").slideUp(300);
  });
  $(".select__item").on('input change', function(e) {
    console.log($(this).val())
    if ($(this).closest(".select").find('.select__icon')) {
      if ($(this).val() != '' || $(this).html() != '') {
        $(this).closest(".select").addClass('isvalid')
      } else {
        $(this).closest(".select").removeClass('isvalid')
      }
    }
  }).on('focus', function(e) {
    if ($(this).closest(".select").find('.select__icon')) {
      console.log($(this).closest(".select"))
      $(this).closest(".select").addClass('isfocus')
    }
  }).on('blur', function(e) {
    if ($(this).closest(".select").find('.select__icon')) {
      $(this).closest(".select").removeClass('isfocus')
    }
  })

  $("form").on("reset", function() {
    $(this).find(".select__item").each(function() {
        $(this).closest(".select").removeClass('isvalid');
    });
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
    $(this).closest(".select__drop").slideUp(300);
    $(this).closest(".select").removeClass('active');

    if ($(this).closest(".select").find('.select__icon').length > 0) {
      console.log($(this).closest(".select").find('.select__icon'))
      if ($(this).closest(".select").find('.select__item').val() != '') {
        $(this).closest(".select").addClass('isvalid')
      } else {
        $(this).closest(".select").removeClass('isvalid')
      }
    }
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
    $(".elements").removeClass('active');
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
  $(".drop-upload input").on('change', function () {
    var $this = $(this).closest(".drop-upload");
    var files = $(this)[0].files[0];
    var img = $this.find(".upload-img");
      
    img.attr('src', window.URL.createObjectURL(this.files[0]))

    $this.find(".text-16, .upload-text").text(files.name);
    $this.addClass('active');

    if ($(this).closest('label').siblings('.var-1-none')) {
      let label = $(this).closest('label')
      label.siblings('.var-1-none').addClass('d-block');
      label.parent().removeClass('col-12');
      label.parent().addClass('col-6');
    }

  });
  $('.upload-close').click(function () {
    var $this = $(this).closest(".drop-upload");
    $this.find('input')[0].value = null;
    $this.find(".text-16, .upload-text").text('Drop or upload logo icon');
    $this.removeClass('active');
  })
  $(".loading__file-icon").click(function () {
    $(this).closest(".drop-upload").removeClass('active');

    if ($(this).closest('label').siblings('.var-1-none')) {
      let label = $(this).closest('label')
      label.siblings('.var-1-none').removeClass('d-block');
      label.parent().removeClass('col-6');
      label.parent().addClass('col-12');
    }
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
});

$$el('.nav').forEach((nav, index) => {
  let childs = [...nav.children];
  childs.forEach((item, i) => {
    item.addEventListener('click', (e) => {
      let target = e.target;

      target.closest('.nav').querySelector(`.active`).classList.remove('active');
      target.classList.add('active');

      let contentsElement = $$el(`.contents`)[index];

      if (target.closest('.nav').dataset.index) {
        contentsElement = $el(`.contents[data-index="${target.closest('.nav').dataset.index}"]`);
      } 

      if (!contentsElement) return
      let childsContents =  [...contentsElement.children];
      childsContents.forEach((a,b) => a.classList.contains('active') ? a.classList.remove('active') : '');
      contentsElement.children[i].classList.add('active');
    })
  })
})

//STICKY
$(document).ready(function () {
  let topbarHeight = $(".header").height();
  $(".popup__booking-detail").css("top", topbarHeight);

  $(window).scroll(function () {
    if ($(window).width() > 768) {
      if ($(window).scrollTop() > 0) {
        $(".sticky").addClass('active');
        // $(".header").slideUp(200);
        $(".box-head").addClass('fixed-top');
        $(".fix-top-tabs").addClass('active');
      } else {
        $(".sticky").removeClass('active');
        // $(".header").slideDown(200);
        $(".box-head").removeClass('fixed-top');
        $(".fix-top-tabs").removeClass('active');
      }
    }
    if ($(window).scrollTop() > 1) {
      // $(".popup__booking-detail").addClass('top-0');
      // $(".popup__company-info").addClass('top-0');
    } else {
      // $(".popup__booking-detail").removeClass('top-0');
      // $(".popup__company-info").removeClass('top-0');
    }
  });
});

$(document).ready(function () {
  let menuDropdownHeight = $('.menu-list.active .menu-dropdown').length ? $('.menu-list.active .menu-dropdown').innerHeight() : 0,
      fixTopHeight = $('.fix-top-tabs').length ? $('.fix-top-tabs').innerHeight() : 0,
      headerHeight = $('.header').length ? $('.header').innerHeight() : 0,
      navHeight = 0;

  $('.sticky-js_v1').each(function(index, item) {
    if ($(this).hasClass('contents')) {
      navHeight = $(this).parent().find('.nav').innerHeight()
    } 

    let sumHeight = headerHeight + fixTopHeight + menuDropdownHeight + navHeight;

    console.log(sumHeight)
    $(this).sticky({topSpacing:sumHeight});
  })
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

//set height
function setHeight(el, index) {
  let sumHeight = 0;
  if ($el(`.get-height[data-index="${index}"]`) != null) {
    $$el(`.get-height[data-index="${index}"]`).forEach(item => sumHeight += item.offsetHeight);
  }
 
  sumHeight += el.getBoundingClientRect().top;
  
  el.style.height = `calc(100vh - ${Math.ceil(sumHeight)}px)`
}

//change width child elements
function changeWidthInput(item) {
  if (item.children[0].children.length > 0) {
    item.children[0].classList.remove('w-0')
    item.children[1].classList.add('w-50')
  } else {
    item.children[0].classList.add('w-0')
    item.children[1].classList.add('w-100')
    item.children[1].focus()
  }
}
//multiple selection
$$el('.elements').forEach(item => {
  changeWidthInput(item)
  item.addEventListener('click', () => {
      changeWidthInput(item)
      item.classList.toggle('active')
      item.children[1].focus()
  })
})
//remove item elements
$$el('.elements__close').forEach(closeItem => {
  closeItem.addEventListener('click', (e) => {
    e.stopImmediatePropagation();
    let item = closeItem.closest('.elements')
    closeItem.parentElement.remove();
    changeWidthInput(item)
  })
})

$$el('[data-script-padding]').forEach(item => {
  if ($el('.fix-top-tabs')) {
    item.style = 'padding-top: ' + $el('.fix-top-tabs').clientHeight + 'px!important';
  }
})

window.addEventListener('DOMContentLoaded', () => {
  $$el('.h-calc_1').forEach(el => {
    setHeight(el, el.dataset.index)
  })
})

document.addEventListener('click', (e) => {
  if (!e.target.closest('.people-group') && $el('.people-group')) {
    $$el('.people-group .item').forEach(item => {
      item.classList.add('collapsed')
      item.nextElementSibling?.querySelector('.collapse')?.classList.remove('show')
    })
  }
})

let optionMut = {
  childList: true,
  subtree: true,
  attributes: true
};

let mut = new MutationObserver(function (muts) {
  if ($$el('.h-calc_1')) {
      mut.disconnect()
      $$el('.h-calc_1').forEach(el => {
        setHeight(el, el.dataset.index)
      })
  }
  mut.observe(document, optionMut);
})
mut.observe(document, optionMut);


$$el('.scrollTop').forEach(item => {
  item.addEventListener('click', () => {
    let selector = item.closest('.h-calc_1') ? '.h-calc_1' : 'html, body';
    let scrollUpValue = 0;
    if (item.dataset.top) {
      scrollUpValue = +item.dataset.top
    }
    console.log(scrollUpValue)
    $(selector).animate(
      {
        scrollTop: scrollUpValue
      },
      250
    );
  })
})

//change the state of a block to grid/line https://prnt.sc/v25He-4rnmPC
$$el('input[name="gridLine-table"]').forEach(radio => {
  radio.addEventListener('change', () => {
    if (radio.checked) {
      let id = '#'+radio.getAttribute('href')

      $$el('[data-name="gridLine-table"]').forEach(item => {
        item.classList.remove('show')
      })
      $el(id).classList.add('show')
    }
  })
})

//auto changing the height of the text field
function autoResize(textarea) {
  textarea.style = `height: calc(${textarea.scrollHeight}px + 2px)!important`;
}

// Synchronize horizontal scrolling
// Get all elements with the class sync_scroll_x
const syncScrollElements = document.querySelectorAll('.sync_scroll_x');

// Function to synchronize the scroll positions
function syncScrollX(e) {
  // Get the current scroll position
  const scrollLeft = e.target.scrollLeft;

  // Synchronize scroll position for each element
  syncScrollElements.forEach(element => {
    // If the element is not the one that caused the event, change its scroll position
    if (element !== e.target) {
      element.scrollLeft = scrollLeft;
    }
  });
}

// Attach the scroll event listener to each element
syncScrollElements.forEach(element => {
  element.addEventListener('scroll', syncScrollX);
});