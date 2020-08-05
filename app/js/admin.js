"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(function ($) {
  "use strict"; // Start of use strict
  // Toggle the side navigation

  $("#sidebarToggle, #sidebarToggleTop, .overlay").on('click', function (e) {
    $("body").toggleClass("sidebar-toggled");
    $(".sidebar").toggleClass("toggled");
    $("#sidebarToggleTop").toggleClass("toggled");

    if ($(".sidebar").hasClass("toggled")) {
      $('.sidebar .collapse').collapse('hide');
    }

    ;
  }); // Close any open menu accordions when window is resized below 768px

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

$(document).ready(function () {
  $(".sidebar-light .nav-item").click(function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
  });
}); //ORDER

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
    var option = $(this).text(),
        item = $(this).closest(".select").find(".select__item").prop("tagName");

    if (item == "DIV") {
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

  $(".nav-tabs .nav-link").click(function (e) {
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
  });
}); //STICKY

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(window).width() > 768) {
      if ($(window).scrollTop() > 1) {
        $(".sticky").addClass('active');
        $(".topbar").slideUp(0);
      } else {
        $(".sticky").removeClass('active');
        $(".topbar").slideDown(0);
      }
    }
  });
}); //datepicker

$(document).ready(function () {
  $(".datepicker").datepicker({
    weekStart: 1,
    multidate: 1,
    keyboardNavigation: false,
    forceParse: false,
    autoclose: true,
    todayHighlight: true,
    daysOfWeekHighlighted: "0,6"
  });
}); //daterangepicker

$(document).ready(function () {
  $(function () {
    $('input[name="daterange"]').daterangepicker({
      opens: 'left',
      daysOfWeekHighlighted: "0,6",
      autoUpdateInput: true,
      weekStart: 1,
      locale: {
        applyLabel: 'Done'
      }
    }, function (start, end, label) {
      console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
  });
  $(function () {
    var _$$daterangepicker;

    $('input[name="dates"]').daterangepicker((_$$daterangepicker = {
      singleDatePicker: true,
      weekStart: 1,
      opens: 'left',
      autoUpdateInput: true,
      daysOfWeekHighlighted: "0,6"
    }, _defineProperty(_$$daterangepicker, "weekStart", 1), _defineProperty(_$$daterangepicker, "locale", {
      applyLabel: 'Done'
    }), _$$daterangepicker), function (start, end, label) {
      console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
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
  $("input.range-way").bootstrapSlider({
    value: [1, 6],
    ticks: [1, 2, 3, 4, 5, 6],
    ticks_labels: [' <img src="img/icon-ocean-1.svg" alt="icon" class="way__item-icon"><p class="text-16">DO</p><p class="text-13 c-dark">Haulage</p>', '<img src="img/icon-ocean-2.svg" alt="icon" class="way__item-icon"><p class="text-16">LI</p><p class="text-13 c-dark">Liner out</p>', '<img src="img/icon-ocean-3.svg" alt="icon" class="way__item-icon way__item-icon__boat"><p class="text-16">CY-CY</p><p class="text-13 c-dark">Ocean freight</p>', '<img src="img/icon-ocean-2.svg" alt="icon" class="way__item-icon"><p class="text-16">LO</p><p class="text-13 c-dark">Liner out</p>', '<img src="img/icon-ocean-4.svg" alt="icon" class="way__item-icon way__item-icon__car"><p class="text-16">FOT</p><p class="text-13 c-dark">Free on truck</p>', ' <img src="img/icon-ocean-1.svg" alt="icon" class="way__item-icon"><p class="text-16">DO</p><p class="text-13 c-dark">Haulage</p>'],
    look_to_sticks: true
  });
  $("input.range-way2").bootstrapSlider({
    value: [1, 4],
    ticks: [1, 2, 3, 4],
    ticks_labels: [' <img src="img/buildings.svg" alt="icon" class="way__item-icon"> <img src="img/delivery-truck-1.svg" alt="icon" class="way__item-truck"><p class="text-14 c-gray">Loading_1</p>', '<img src="img/buildings.svg" alt="icon" class="way__item-icon"><img src="img/delivery-truck-1.svg" alt="icon" class="way__item-truck"><p class="text-14 c-gray">Loading_2</p>', '<img src="img/holidays.svg" alt="icon" class="way__item-icon"><img src="img/delivery-truck-1.svg" alt="icon" class="way__item-truck"><p class="text-14 c-gray">Delivery_1</p>', '<img src="img/holidays.svg" alt="icon" class="way__item-icon"><p class="text-14 c-gray">Delivery_2</p>'],
    look_to_sticks: true
  });
  $("input.range-way3").bootstrapSlider({
    value: [1, 6],
    ticks: [1, 2, 3, 4, 5, 6],
    ticks_labels: [' <img src="img/icon-ocean-1.svg" alt="icon" class="way__item-icon way__item-icon-point"><label class="d-flex justify-content-center checkbox__range"><input type="checkbox" class="checkbox" ><span class="checkbox__icon-blue  m-0 mr-2"></span><span class="text-16">DO</span></label>', '<img src="img/architecture-and-city-1.svg" alt="icon" class="way__item-icon way__item-icon-house"><label class="d-flex justify-content-center checkbox__range"><input type="checkbox" class="checkbox" ><span class="checkbox__icon-blue m-0 mr-2"></span><span class="text-16">DO</span></label>', '<img src="img/icon-ocean-5.svg" alt="icon" class="way__item-icon way__item-icon-forklift"> <img src="img/icon-ocean-6.svg" alt="icon" class="way__item-icon way__item-icon-center"><label class="d-flex justify-content-center checkbox__range"><input type="checkbox" class="checkbox " ><span class="checkbox__icon-blue  m-0 mr-2"></span><span class="text-16">DO</span></label>', '<img src="img/icon-ocean-5.svg" alt="icon" class="way__item-icon way__item-icon-forklift way__item-icon-rotate"><label class="d-flex justify-content-center checkbox__range"><input type="checkbox" class="checkbox " ><span class="checkbox__icon-blue  m-0 mr-2"></span><span class="text-16">DO</span></label>', '<img src="img/architecture-and-city-1.svg" alt="icon" class="way__item-icon way__item-icon-house"><label class="d-flex justify-content-center checkbox__range"><input type="checkbox" class="checkbox"  ><span class="checkbox__icon-blue  m-0 mr-2"></span><span class="text-16">DO</span></label>', ' <img src="img/icon-ocean-1.svg" alt="icon" class="way__item-icon way__item-icon-point"><label class="d-flex justify-content-center checkbox__range"><input type="checkbox" class="checkbox " ><span class="checkbox__icon-blue  m-0 mr-2"></span><span class="text-16">DO</span></label>'],
    look_to_sticks: true
  });
  $("input.range-way4").bootstrapSlider({
    value: [1, 7],
    ticks: [1, 2, 3, 4, 5, 6, 7],
    ticks_labels: ['<img src="img/icon-ocean-1.svg" alt="icon" class="way__item-icon way__item-icon-point"><label class="d-flex justify-content-center checkbox__range"><input type="checkbox" class="checkbox" ><span class="checkbox__icon-blue  m-0 mr-2"></span><span class="text-16">DO</span></label>', '<img src="img/architecture-and-city-1.svg" alt="icon" class="way__item-icon way__item-icon-house"><label class="d-flex justify-content-center checkbox__range"><input type="checkbox" class="checkbox" ><span class="checkbox__icon-blue m-0 mr-2"></span><span class="text-16">DO</span></label>', '<img src="img/icon-ocean-5.svg" alt="icon" class="way__item-icon way__item-icon-forklift"><label class="d-flex justify-content-center checkbox__range"><input type="checkbox" class="checkbox " ><span class="checkbox__icon-blue  m-0 mr-2"></span><span class="text-16">DO</span></label>', '<img src="img/icon-ocean-6.svg" alt="icon" class="way__item-icon way__item-icon-train"><label class="d-flex justify-content-center checkbox__range"><input type="checkbox" class="checkbox " ><span class="checkbox__icon-blue  m-0 mr-2"></span><span class="text-16">DO</span></label>', '<img src="img/icon-ocean-5.svg" alt="icon" class="way__item-icon way__item-icon-forklift way__item-icon-rotate"><label class="d-flex justify-content-center checkbox__range"><input type="checkbox" class="checkbox " ><span class="checkbox__icon-blue  m-0 mr-2"></span><span class="text-16">DO</span></label>', '<img src="img/architecture-and-city-1.svg" alt="icon" class="way__item-icon way__item-icon-house"><label class="d-flex justify-content-center checkbox__range"><input type="checkbox" class="checkbox"  ><span class="checkbox__icon-blue  m-0 mr-2"></span><span class="text-16">DO</span></label>', ' <img src="img/icon-ocean-1.svg" alt="icon" class="way__item-icon way__item-icon-point"><label class="d-flex justify-content-center checkbox__range"><input type="checkbox" class="checkbox " ><span class="checkbox__icon-blue  m-0 mr-2"></span><span class="text-16">DO</span></label>'],
    look_to_sticks: true
  }); //click on arrow in page order table sea

  $(".click__more").click(function (e) {
    e.preventDefault();
    $(this).closest(".table__order-list").toggleClass('active').siblings().removeClass('active');
    $(this).closest(".table__order-list").find(".drop-more").slideToggle(300).closest(".table__order-list").siblings().find(".drop-more").slideUp(300);
    $("input.range-way").bootstrapSlider('refresh');
    $("input.range-way2").bootstrapSlider('refresh');
    $("input.range-way3").bootstrapSlider('refresh');
  });
  var $inputs = $('.table__rate-item'); // Resize based on text if text.length > 0
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
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* =========================================================
 * bootstrap-datepicker.js
 * Repo: https://github.com/eternicode/bootstrap-datepicker/
 * Demo: http://eternicode.github.io/bootstrap-datepicker/
 * Docs: http://bootstrap-datepicker.readthedocs.org/
 * Forked from http://www.eyecon.ro/bootstrap-datepicker
 * =========================================================
 * Started by Stefan Petre; improvements by Andrew Rowls + contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */
(function ($, undefined) {
  var $window = $(window);

  function UTCDate() {
    return new Date(Date.UTC.apply(Date, arguments));
  }

  function UTCToday() {
    var today = new Date();
    return UTCDate(today.getFullYear(), today.getMonth(), today.getDate());
  }

  function alias(method) {
    return function () {
      return this[method].apply(this, arguments);
    };
  }

  var DateArray = function () {
    var extras = {
      get: function get(i) {
        return this.slice(i)[0];
      },
      contains: function contains(d) {
        // Array.indexOf is not cross-browser;
        // $.inArray doesn't work with Dates
        var val = d && d.valueOf();

        for (var i = 0, l = this.length; i < l; i++) {
          if (this[i].valueOf() === val) return i;
        }

        return -1;
      },
      remove: function remove(i) {
        this.splice(i, 1);
      },
      replace: function replace(new_array) {
        if (!new_array) return;
        if (!$.isArray(new_array)) new_array = [new_array];
        this.clear();
        this.push.apply(this, new_array);
      },
      clear: function clear() {
        this.splice(0);
      },
      copy: function copy() {
        var a = new DateArray();
        a.replace(this);
        return a;
      }
    };
    return function () {
      var a = [];
      a.push.apply(a, arguments);
      $.extend(a, extras);
      return a;
    };
  }(); // Picker object


  var Datepicker = function Datepicker(element, options) {
    this.dates = new DateArray();
    this.viewDate = UTCToday();
    this.focusDate = null;

    this._process_options(options);

    this.element = $(element);
    this.isInline = false;
    this.isInput = this.element.is('input');
    this.component = this.element.is('.date') ? this.element.find('.add-on, .input-group-addon, .btn') : false;
    this.hasInput = this.component && this.element.find('input').length;
    if (this.component && this.component.length === 0) this.component = false;
    this.picker = $(DPGlobal.template);

    this._buildEvents();

    this._attachEvents();

    if (this.isInline) {
      this.picker.addClass('datepicker-inline').appendTo(this.element);
    } else {
      this.picker.addClass('datepicker-dropdown dropdown-menu');
    }

    if (this.o.rtl) {
      this.picker.addClass('datepicker-rtl');
    }

    this.viewMode = this.o.startView;
    if (this.o.calendarWeeks) this.picker.find('tfoot th.today').attr('colspan', function (i, val) {
      return parseInt(val) + 1;
    });
    this._allow_update = false;
    this.setStartDate(this._o.startDate);
    this.setEndDate(this._o.endDate);
    this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled);
    this.fillDow();
    this.fillMonths();
    this._allow_update = true;
    this.update();
    this.showMode();

    if (this.isInline) {
      this.show();
    }
  };

  Datepicker.prototype = {
    constructor: Datepicker,
    _process_options: function _process_options(opts) {
      // Store raw options for reference
      this._o = $.extend({}, this._o, opts); // Processed options

      var o = this.o = $.extend({}, this._o); // Check if "de-DE" style date is available, if not language should
      // fallback to 2 letter code eg "de"

      var lang = o.language;

      if (!dates[lang]) {
        lang = lang.split('-')[0];
        if (!dates[lang]) lang = defaults.language;
      }

      o.language = lang;

      switch (o.startView) {
        case 2:
        case 'decade':
          o.startView = 2;
          break;

        case 1:
        case 'year':
          o.startView = 1;
          break;

        default:
          o.startView = 0;
      }

      switch (o.minViewMode) {
        case 1:
        case 'months':
          o.minViewMode = 1;
          break;

        case 2:
        case 'years':
          o.minViewMode = 2;
          break;

        default:
          o.minViewMode = 0;
      }

      o.startView = Math.max(o.startView, o.minViewMode); // true, false, or Number > 0

      if (o.multidate !== true) {
        o.multidate = Number(o.multidate) || false;
        if (o.multidate !== false) o.multidate = Math.max(0, o.multidate);else o.multidate = 1;
      }

      o.multidateSeparator = String(o.multidateSeparator);
      o.weekStart %= 7;
      o.weekEnd = (o.weekStart + 6) % 7;
      var format = DPGlobal.parseFormat(o.format);

      if (o.startDate !== -Infinity) {
        if (!!o.startDate) {
          if (o.startDate instanceof Date) o.startDate = this._local_to_utc(this._zero_time(o.startDate));else o.startDate = DPGlobal.parseDate(o.startDate, format, o.language);
        } else {
          o.startDate = -Infinity;
        }
      }

      if (o.endDate !== Infinity) {
        if (!!o.endDate) {
          if (o.endDate instanceof Date) o.endDate = this._local_to_utc(this._zero_time(o.endDate));else o.endDate = DPGlobal.parseDate(o.endDate, format, o.language);
        } else {
          o.endDate = Infinity;
        }
      }

      o.daysOfWeekDisabled = o.daysOfWeekDisabled || [];
      if (!$.isArray(o.daysOfWeekDisabled)) o.daysOfWeekDisabled = o.daysOfWeekDisabled.split(/[,\s]*/);
      o.daysOfWeekDisabled = $.map(o.daysOfWeekDisabled, function (d) {
        return parseInt(d, 10);
      });

      var plc = String(o.orientation).toLowerCase().split(/\s+/g),
          _plc = o.orientation.toLowerCase();

      plc = $.grep(plc, function (word) {
        return /^auto|left|right|top|bottom$/.test(word);
      });
      o.orientation = {
        x: 'auto',
        y: 'auto'
      };
      if (!_plc || _plc === 'auto') ; // no action
      else if (plc.length === 1) {
          switch (plc[0]) {
            case 'top':
            case 'bottom':
              o.orientation.y = plc[0];
              break;

            case 'left':
            case 'right':
              o.orientation.x = plc[0];
              break;
          }
        } else {
          _plc = $.grep(plc, function (word) {
            return /^left|right$/.test(word);
          });
          o.orientation.x = _plc[0] || 'auto';
          _plc = $.grep(plc, function (word) {
            return /^top|bottom$/.test(word);
          });
          o.orientation.y = _plc[0] || 'auto';
        }
    },
    _events: [],
    _secondaryEvents: [],
    _applyEvents: function _applyEvents(evs) {
      for (var i = 0, el, ch, ev; i < evs.length; i++) {
        el = evs[i][0];

        if (evs[i].length === 2) {
          ch = undefined;
          ev = evs[i][1];
        } else if (evs[i].length === 3) {
          ch = evs[i][1];
          ev = evs[i][2];
        }

        el.on(ev, ch);
      }
    },
    _unapplyEvents: function _unapplyEvents(evs) {
      for (var i = 0, el, ev, ch; i < evs.length; i++) {
        el = evs[i][0];

        if (evs[i].length === 2) {
          ch = undefined;
          ev = evs[i][1];
        } else if (evs[i].length === 3) {
          ch = evs[i][1];
          ev = evs[i][2];
        }

        el.off(ev, ch);
      }
    },
    _buildEvents: function _buildEvents() {
      if (this.isInput) {
        // single input
        this._events = [[this.element, {
          focus: $.proxy(this.show, this),
          keyup: $.proxy(function (e) {
            if ($.inArray(e.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) === -1) this.update();
          }, this),
          keydown: $.proxy(this.keydown, this)
        }]];
      } else if (this.component && this.hasInput) {
        // component: input + button
        this._events = [// For components that are not readonly, allow keyboard nav
        [this.element.find('input'), {
          focus: $.proxy(this.show, this),
          keyup: $.proxy(function (e) {
            if ($.inArray(e.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) === -1) this.update();
          }, this),
          keydown: $.proxy(this.keydown, this)
        }], [this.component, {
          click: $.proxy(this.show, this)
        }]];
      } else if (this.element.is('div')) {
        // inline datepicker
        this.isInline = true;
      } else {
        this._events = [[this.element, {
          click: $.proxy(this.show, this)
        }]];
      }

      this._events.push( // Component: listen for blur on element descendants
      [this.element, '*', {
        blur: $.proxy(function (e) {
          this._focused_from = e.target;
        }, this)
      }], // Input: listen for blur on element
      [this.element, {
        blur: $.proxy(function (e) {
          this._focused_from = e.target;
        }, this)
      }]);

      this._secondaryEvents = [[this.picker, {
        click: $.proxy(this.click, this)
      }], [$(window), {
        resize: $.proxy(this.place, this)
      }], [$(document), {
        'mousedown touchstart': $.proxy(function (e) {
          // Clicked outside the datepicker, hide it
          if (!(this.element.is(e.target) || this.element.find(e.target).length || this.picker.is(e.target) || this.picker.find(e.target).length)) {
            this.hide();
          }
        }, this)
      }]];
    },
    _attachEvents: function _attachEvents() {
      this._detachEvents();

      this._applyEvents(this._events);
    },
    _detachEvents: function _detachEvents() {
      this._unapplyEvents(this._events);
    },
    _attachSecondaryEvents: function _attachSecondaryEvents() {
      this._detachSecondaryEvents();

      this._applyEvents(this._secondaryEvents);
    },
    _detachSecondaryEvents: function _detachSecondaryEvents() {
      this._unapplyEvents(this._secondaryEvents);
    },
    _trigger: function _trigger(event, altdate) {
      var date = altdate || this.dates.get(-1),
          local_date = this._utc_to_local(date);

      this.element.trigger({
        type: event,
        date: local_date,
        dates: $.map(this.dates, this._utc_to_local),
        format: $.proxy(function (ix, format) {
          if (arguments.length === 0) {
            ix = this.dates.length - 1;
            format = this.o.format;
          } else if (typeof ix === 'string') {
            format = ix;
            ix = this.dates.length - 1;
          }

          format = format || this.o.format;
          var date = this.dates.get(ix);
          return DPGlobal.formatDate(date, format, this.o.language);
        }, this)
      });
    },
    show: function show() {
      if (!this.isInline) this.picker.appendTo('body');
      this.picker.show();
      this.place();

      this._attachSecondaryEvents();

      this._trigger('show');
    },
    hide: function hide() {
      if (this.isInline) return;
      if (!this.picker.is(':visible')) return;
      this.focusDate = null;
      this.picker.hide().detach();

      this._detachSecondaryEvents();

      this.viewMode = this.o.startView;
      this.showMode();
      if (this.o.forceParse && (this.isInput && this.element.val() || this.hasInput && this.element.find('input').val())) this.setValue();

      this._trigger('hide');
    },
    remove: function remove() {
      this.hide();

      this._detachEvents();

      this._detachSecondaryEvents();

      this.picker.remove();
      delete this.element.data().datepicker;

      if (!this.isInput) {
        delete this.element.data().date;
      }
    },
    _utc_to_local: function _utc_to_local(utc) {
      return utc && new Date(utc.getTime() + utc.getTimezoneOffset() * 60000);
    },
    _local_to_utc: function _local_to_utc(local) {
      return local && new Date(local.getTime() - local.getTimezoneOffset() * 60000);
    },
    _zero_time: function _zero_time(local) {
      return local && new Date(local.getFullYear(), local.getMonth(), local.getDate());
    },
    _zero_utc_time: function _zero_utc_time(utc) {
      return utc && new Date(Date.UTC(utc.getUTCFullYear(), utc.getUTCMonth(), utc.getUTCDate()));
    },
    getDates: function getDates() {
      return $.map(this.dates, this._utc_to_local);
    },
    getUTCDates: function getUTCDates() {
      return $.map(this.dates, function (d) {
        return new Date(d);
      });
    },
    getDate: function getDate() {
      return this._utc_to_local(this.getUTCDate());
    },
    getUTCDate: function getUTCDate() {
      return new Date(this.dates.get(-1));
    },
    setDates: function setDates() {
      var args = $.isArray(arguments[0]) ? arguments[0] : arguments;
      this.update.apply(this, args);

      this._trigger('changeDate');

      this.setValue();
    },
    setUTCDates: function setUTCDates() {
      var args = $.isArray(arguments[0]) ? arguments[0] : arguments;
      this.update.apply(this, $.map(args, this._utc_to_local));

      this._trigger('changeDate');

      this.setValue();
    },
    setDate: alias('setDates'),
    setUTCDate: alias('setUTCDates'),
    setValue: function setValue() {
      var formatted = this.getFormattedDate();

      if (!this.isInput) {
        if (this.component) {
          this.element.find('input').val(formatted).change();
        }
      } else {
        this.element.val(formatted).change();
      }
    },
    getFormattedDate: function getFormattedDate(format) {
      if (format === undefined) format = this.o.format;
      var lang = this.o.language;
      return $.map(this.dates, function (d) {
        return DPGlobal.formatDate(d, format, lang);
      }).join(this.o.multidateSeparator);
    },
    setStartDate: function setStartDate(startDate) {
      this._process_options({
        startDate: startDate
      });

      this.update();
      this.updateNavArrows();
    },
    setEndDate: function setEndDate(endDate) {
      this._process_options({
        endDate: endDate
      });

      this.update();
      this.updateNavArrows();
    },
    setDaysOfWeekDisabled: function setDaysOfWeekDisabled(daysOfWeekDisabled) {
      this._process_options({
        daysOfWeekDisabled: daysOfWeekDisabled
      });

      this.update();
      this.updateNavArrows();
    },
    place: function place() {
      if (this.isInline) return;
      var calendarWidth = this.picker.outerWidth(),
          calendarHeight = this.picker.outerHeight(),
          visualPadding = 10,
          windowWidth = $window.width(),
          windowHeight = $window.height(),
          scrollTop = $window.scrollTop();
      var zIndex = parseInt(this.element.parents().filter(function () {
        return $(this).css('z-index') !== 'auto';
      }).first().css('z-index')) + 10;
      var offset = this.component ? this.component.parent().offset() : this.element.offset();
      var height = this.component ? this.component.outerHeight(true) : this.element.outerHeight(false);
      var width = this.component ? this.component.outerWidth(true) : this.element.outerWidth(false);
      var left = offset.left,
          top = offset.top;
      this.picker.removeClass('datepicker-orient-top datepicker-orient-bottom ' + 'datepicker-orient-right datepicker-orient-left');

      if (this.o.orientation.x !== 'auto') {
        this.picker.addClass('datepicker-orient-' + this.o.orientation.x);
        if (this.o.orientation.x === 'right') left -= calendarWidth - width;
      } // auto x orientation is best-placement: if it crosses a window
      // edge, fudge it sideways
      else {
          // Default to left
          this.picker.addClass('datepicker-orient-left');
          if (offset.left < 0) left -= offset.left - visualPadding;else if (offset.left + calendarWidth > windowWidth) left = windowWidth - calendarWidth - visualPadding;
        } // auto y orientation is best-situation: top or bottom, no fudging,
      // decision based on which shows more of the calendar


      var yorient = this.o.orientation.y,
          top_overflow,
          bottom_overflow;

      if (yorient === 'auto') {
        top_overflow = -scrollTop + offset.top - calendarHeight;
        bottom_overflow = scrollTop + windowHeight - (offset.top + height + calendarHeight);
        if (Math.max(top_overflow, bottom_overflow) === bottom_overflow) yorient = 'top';else yorient = 'bottom';
      }

      this.picker.addClass('datepicker-orient-' + yorient);
      if (yorient === 'top') top += height;else top -= calendarHeight + parseInt(this.picker.css('padding-top'));
      this.picker.css({
        top: top,
        left: left,
        zIndex: zIndex
      });
    },
    _allow_update: true,
    update: function update() {
      if (!this._allow_update) return;
      var oldDates = this.dates.copy(),
          dates = [],
          fromArgs = false;

      if (arguments.length) {
        $.each(arguments, $.proxy(function (i, date) {
          if (date instanceof Date) date = this._local_to_utc(date);
          dates.push(date);
        }, this));
        fromArgs = true;
      } else {
        dates = this.isInput ? this.element.val() : this.element.data('date') || this.element.find('input').val();
        if (dates && this.o.multidate) dates = dates.split(this.o.multidateSeparator);else dates = [dates];
        delete this.element.data().date;
      }

      dates = $.map(dates, $.proxy(function (date) {
        return DPGlobal.parseDate(date, this.o.format, this.o.language);
      }, this));
      dates = $.grep(dates, $.proxy(function (date) {
        return date < this.o.startDate || date > this.o.endDate || !date;
      }, this), true);
      this.dates.replace(dates);
      if (this.dates.length) this.viewDate = new Date(this.dates.get(-1));else if (this.viewDate < this.o.startDate) this.viewDate = new Date(this.o.startDate);else if (this.viewDate > this.o.endDate) this.viewDate = new Date(this.o.endDate);

      if (fromArgs) {
        // setting date by clicking
        this.setValue();
      } else if (dates.length) {
        // setting date by typing
        if (String(oldDates) !== String(this.dates)) this._trigger('changeDate');
      }

      if (!this.dates.length && oldDates.length) this._trigger('clearDate');
      this.fill();
    },
    fillDow: function fillDow() {
      var dowCnt = this.o.weekStart,
          html = '<tr>';

      if (this.o.calendarWeeks) {
        var cell = '<th class="cw">&nbsp;</th>';
        html += cell;
        this.picker.find('.datepicker-days thead tr:first-child').prepend(cell);
      }

      while (dowCnt < this.o.weekStart + 7) {
        html += '<th class="dow">' + dates[this.o.language].daysMin[dowCnt++ % 7] + '</th>';
      }

      html += '</tr>';
      this.picker.find('.datepicker-days thead').append(html);
    },
    fillMonths: function fillMonths() {
      var html = '',
          i = 0;

      while (i < 12) {
        html += '<span class="month">' + dates[this.o.language].monthsShort[i++] + '</span>';
      }

      this.picker.find('.datepicker-months td').html(html);
    },
    setRange: function setRange(range) {
      if (!range || !range.length) delete this.range;else this.range = $.map(range, function (d) {
        return d.valueOf();
      });
      this.fill();
    },
    getClassNames: function getClassNames(date) {
      var cls = [],
          year = this.viewDate.getUTCFullYear(),
          month = this.viewDate.getUTCMonth(),
          today = new Date();

      if (date.getUTCFullYear() < year || date.getUTCFullYear() === year && date.getUTCMonth() < month) {
        cls.push('old');
      } else if (date.getUTCFullYear() > year || date.getUTCFullYear() === year && date.getUTCMonth() > month) {
        cls.push('new');
      }

      if (this.focusDate && date.valueOf() === this.focusDate.valueOf()) cls.push('focused'); // Compare internal UTC date with local today, not UTC today

      if (this.o.todayHighlight && date.getUTCFullYear() === today.getFullYear() && date.getUTCMonth() === today.getMonth() && date.getUTCDate() === today.getDate()) {
        cls.push('today');
      }

      if (this.dates.contains(date) !== -1) cls.push('active');

      if (date.valueOf() < this.o.startDate || date.valueOf() > this.o.endDate || $.inArray(date.getUTCDay(), this.o.daysOfWeekDisabled) !== -1) {
        cls.push('disabled');
      }

      if (this.range) {
        if (date > this.range[0] && date < this.range[this.range.length - 1]) {
          cls.push('range');
        }

        if ($.inArray(date.valueOf(), this.range) !== -1) {
          cls.push('selected');
        }
      }

      return cls;
    },
    fill: function fill() {
      var d = new Date(this.viewDate),
          year = d.getUTCFullYear(),
          month = d.getUTCMonth(),
          startYear = this.o.startDate !== -Infinity ? this.o.startDate.getUTCFullYear() : -Infinity,
          startMonth = this.o.startDate !== -Infinity ? this.o.startDate.getUTCMonth() : -Infinity,
          endYear = this.o.endDate !== Infinity ? this.o.endDate.getUTCFullYear() : Infinity,
          endMonth = this.o.endDate !== Infinity ? this.o.endDate.getUTCMonth() : Infinity,
          todaytxt = dates[this.o.language].today || dates['en'].today || '',
          cleartxt = dates[this.o.language].clear || dates['en'].clear || '',
          tooltip;
      this.picker.find('.datepicker-days thead th.datepicker-switch').text(dates[this.o.language].months[month] + ' ' + year);
      this.picker.find('tfoot th.today').text(todaytxt).toggle(this.o.todayBtn !== false);
      this.picker.find('tfoot th.clear').text(cleartxt).toggle(this.o.clearBtn !== false);
      this.updateNavArrows();
      this.fillMonths();
      var prevMonth = UTCDate(year, month - 1, 28),
          day = DPGlobal.getDaysInMonth(prevMonth.getUTCFullYear(), prevMonth.getUTCMonth());
      prevMonth.setUTCDate(day);
      prevMonth.setUTCDate(day - (prevMonth.getUTCDay() - this.o.weekStart + 7) % 7);
      var nextMonth = new Date(prevMonth);
      nextMonth.setUTCDate(nextMonth.getUTCDate() + 42);
      nextMonth = nextMonth.valueOf();
      var html = [];
      var clsName;

      while (prevMonth.valueOf() < nextMonth) {
        if (prevMonth.getUTCDay() === this.o.weekStart) {
          html.push('<tr>');

          if (this.o.calendarWeeks) {
            // ISO 8601: First week contains first thursday.
            // ISO also states week starts on Monday, but we can be more abstract here.
            var // Start of current week: based on weekstart/current date
            ws = new Date(+prevMonth + (this.o.weekStart - prevMonth.getUTCDay() - 7) % 7 * 864e5),
                // Thursday of this week
            th = new Date(Number(ws) + (7 + 4 - ws.getUTCDay()) % 7 * 864e5),
                // First Thursday of year, year from thursday
            yth = new Date(Number(yth = UTCDate(th.getUTCFullYear(), 0, 1)) + (7 + 4 - yth.getUTCDay()) % 7 * 864e5),
                // Calendar week: ms between thursdays, div ms per day, div 7 days
            calWeek = (th - yth) / 864e5 / 7 + 1;
            html.push('<td class="cw">' + calWeek + '</td>');
          }
        }

        clsName = this.getClassNames(prevMonth);
        clsName.push('day');

        if (this.o.beforeShowDay !== $.noop) {
          var before = this.o.beforeShowDay(this._utc_to_local(prevMonth));
          if (before === undefined) before = {};else if (typeof before === 'boolean') before = {
            enabled: before
          };else if (typeof before === 'string') before = {
            classes: before
          };
          if (before.enabled === false) clsName.push('disabled');
          if (before.classes) clsName = clsName.concat(before.classes.split(/\s+/));
          if (before.tooltip) tooltip = before.tooltip;
        }

        clsName = $.unique(clsName);
        html.push('<td class="' + clsName.join(' ') + '"' + (tooltip ? ' title="' + tooltip + '"' : '') + '>' + prevMonth.getUTCDate() + '</td>');

        if (prevMonth.getUTCDay() === this.o.weekEnd) {
          html.push('</tr>');
        }

        prevMonth.setUTCDate(prevMonth.getUTCDate() + 1);
      }

      this.picker.find('.datepicker-days tbody').empty().append(html.join(''));
      var months = this.picker.find('.datepicker-months').find('th:eq(1)').text(year).end().find('span').removeClass('active');
      $.each(this.dates, function (i, d) {
        if (d.getUTCFullYear() === year) months.eq(d.getUTCMonth()).addClass('active');
      });

      if (year < startYear || year > endYear) {
        months.addClass('disabled');
      }

      if (year === startYear) {
        months.slice(0, startMonth).addClass('disabled');
      }

      if (year === endYear) {
        months.slice(endMonth + 1).addClass('disabled');
      }

      html = '';
      year = parseInt(year / 10, 10) * 10;
      var yearCont = this.picker.find('.datepicker-years').find('th:eq(1)').text(year + '-' + (year + 9)).end().find('td');
      year -= 1;
      var years = $.map(this.dates, function (d) {
        return d.getUTCFullYear();
      }),
          classes;

      for (var i = -1; i < 11; i++) {
        classes = ['year'];
        if (i === -1) classes.push('old');else if (i === 10) classes.push('new');
        if ($.inArray(year, years) !== -1) classes.push('active');
        if (year < startYear || year > endYear) classes.push('disabled');
        html += '<span class="' + classes.join(' ') + '">' + year + '</span>';
        year += 1;
      }

      yearCont.html(html);
    },
    updateNavArrows: function updateNavArrows() {
      if (!this._allow_update) return;
      var d = new Date(this.viewDate),
          year = d.getUTCFullYear(),
          month = d.getUTCMonth();

      switch (this.viewMode) {
        case 0:
          if (this.o.startDate !== -Infinity && year <= this.o.startDate.getUTCFullYear() && month <= this.o.startDate.getUTCMonth()) {
            this.picker.find('.prev').css({
              visibility: 'hidden'
            });
          } else {
            this.picker.find('.prev').css({
              visibility: 'visible'
            });
          }

          if (this.o.endDate !== Infinity && year >= this.o.endDate.getUTCFullYear() && month >= this.o.endDate.getUTCMonth()) {
            this.picker.find('.next').css({
              visibility: 'hidden'
            });
          } else {
            this.picker.find('.next').css({
              visibility: 'visible'
            });
          }

          break;

        case 1:
        case 2:
          if (this.o.startDate !== -Infinity && year <= this.o.startDate.getUTCFullYear()) {
            this.picker.find('.prev').css({
              visibility: 'hidden'
            });
          } else {
            this.picker.find('.prev').css({
              visibility: 'visible'
            });
          }

          if (this.o.endDate !== Infinity && year >= this.o.endDate.getUTCFullYear()) {
            this.picker.find('.next').css({
              visibility: 'hidden'
            });
          } else {
            this.picker.find('.next').css({
              visibility: 'visible'
            });
          }

          break;
      }
    },
    click: function click(e) {
      e.preventDefault();
      var target = $(e.target).closest('span, td, th'),
          year,
          month,
          day;

      if (target.length === 1) {
        switch (target[0].nodeName.toLowerCase()) {
          case 'th':
            switch (target[0].className) {
              case 'datepicker-switch':
                this.showMode(1);
                break;

              case 'prev':
              case 'next':
                var dir = DPGlobal.modes[this.viewMode].navStep * (target[0].className === 'prev' ? -1 : 1);

                switch (this.viewMode) {
                  case 0:
                    this.viewDate = this.moveMonth(this.viewDate, dir);

                    this._trigger('changeMonth', this.viewDate);

                    break;

                  case 1:
                  case 2:
                    this.viewDate = this.moveYear(this.viewDate, dir);
                    if (this.viewMode === 1) this._trigger('changeYear', this.viewDate);
                    break;
                }

                this.fill();
                break;

              case 'today':
                var date = new Date();
                date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
                this.showMode(-2);
                var which = this.o.todayBtn === 'linked' ? null : 'view';

                this._setDate(date, which);

                break;

              case 'clear':
                var element;
                if (this.isInput) element = this.element;else if (this.component) element = this.element.find('input');
                if (element) element.val("").change();
                this.update();

                this._trigger('changeDate');

                if (this.o.autoclose) this.hide();
                break;
            }

            break;

          case 'span':
            if (!target.is('.disabled')) {
              this.viewDate.setUTCDate(1);

              if (target.is('.month')) {
                day = 1;
                month = target.parent().find('span').index(target);
                year = this.viewDate.getUTCFullYear();
                this.viewDate.setUTCMonth(month);

                this._trigger('changeMonth', this.viewDate);

                if (this.o.minViewMode === 1) {
                  this._setDate(UTCDate(year, month, day));
                }
              } else {
                day = 1;
                month = 0;
                year = parseInt(target.text(), 10) || 0;
                this.viewDate.setUTCFullYear(year);

                this._trigger('changeYear', this.viewDate);

                if (this.o.minViewMode === 2) {
                  this._setDate(UTCDate(year, month, day));
                }
              }

              this.showMode(-1);
              this.fill();
            }

            break;

          case 'td':
            if (target.is('.day') && !target.is('.disabled')) {
              day = parseInt(target.text(), 10) || 1;
              year = this.viewDate.getUTCFullYear();
              month = this.viewDate.getUTCMonth();

              if (target.is('.old')) {
                if (month === 0) {
                  month = 11;
                  year -= 1;
                } else {
                  month -= 1;
                }
              } else if (target.is('.new')) {
                if (month === 11) {
                  month = 0;
                  year += 1;
                } else {
                  month += 1;
                }
              }

              this._setDate(UTCDate(year, month, day));
            }

            break;
        }
      }

      if (this.picker.is(':visible') && this._focused_from) {
        $(this._focused_from).focus();
      }

      delete this._focused_from;
    },
    _toggle_multidate: function _toggle_multidate(date) {
      var ix = this.dates.contains(date);

      if (!date) {
        this.dates.clear();
      } else if (ix !== -1) {
        this.dates.remove(ix);
      } else {
        this.dates.push(date);
      }

      if (typeof this.o.multidate === 'number') while (this.dates.length > this.o.multidate) {
        this.dates.remove(0);
      }
    },
    _setDate: function _setDate(date, which) {
      if (!which || which === 'date') this._toggle_multidate(date && new Date(date));
      if (!which || which === 'view') this.viewDate = date && new Date(date);
      this.fill();
      this.setValue();

      this._trigger('changeDate');

      var element;

      if (this.isInput) {
        element = this.element;
      } else if (this.component) {
        element = this.element.find('input');
      }

      if (element) {
        element.change();
      }

      if (this.o.autoclose && (!which || which === 'date')) {
        this.hide();
      }
    },
    moveMonth: function moveMonth(date, dir) {
      if (!date) return undefined;
      if (!dir) return date;
      var new_date = new Date(date.valueOf()),
          day = new_date.getUTCDate(),
          month = new_date.getUTCMonth(),
          mag = Math.abs(dir),
          new_month,
          test;
      dir = dir > 0 ? 1 : -1;

      if (mag === 1) {
        test = dir === -1 // If going back one month, make sure month is not current month
        // (eg, Mar 31 -> Feb 31 == Feb 28, not Mar 02)
        ? function () {
          return new_date.getUTCMonth() === month;
        } // If going forward one month, make sure month is as expected
        // (eg, Jan 31 -> Feb 31 == Feb 28, not Mar 02)
        : function () {
          return new_date.getUTCMonth() !== new_month;
        };
        new_month = month + dir;
        new_date.setUTCMonth(new_month); // Dec -> Jan (12) or Jan -> Dec (-1) -- limit expected date to 0-11

        if (new_month < 0 || new_month > 11) new_month = (new_month + 12) % 12;
      } else {
        // For magnitudes >1, move one month at a time...
        for (var i = 0; i < mag; i++) {
          // ...which might decrease the day (eg, Jan 31 to Feb 28, etc)...
          new_date = this.moveMonth(new_date, dir);
        } // ...then reset the day, keeping it in the new month


        new_month = new_date.getUTCMonth();
        new_date.setUTCDate(day);

        test = function test() {
          return new_month !== new_date.getUTCMonth();
        };
      } // Common date-resetting loop -- if date is beyond end of month, make it
      // end of month


      while (test()) {
        new_date.setUTCDate(--day);
        new_date.setUTCMonth(new_month);
      }

      return new_date;
    },
    moveYear: function moveYear(date, dir) {
      return this.moveMonth(date, dir * 12);
    },
    dateWithinRange: function dateWithinRange(date) {
      return date >= this.o.startDate && date <= this.o.endDate;
    },
    keydown: function keydown(e) {
      if (this.picker.is(':not(:visible)')) {
        if (e.keyCode === 27) // allow escape to hide and re-show picker
          this.show();
        return;
      }

      var dateChanged = false,
          dir,
          newDate,
          newViewDate,
          focusDate = this.focusDate || this.viewDate;

      switch (e.keyCode) {
        case 27:
          // escape
          if (this.focusDate) {
            this.focusDate = null;
            this.viewDate = this.dates.get(-1) || this.viewDate;
            this.fill();
          } else this.hide();

          e.preventDefault();
          break;

        case 37: // left

        case 39:
          // right
          if (!this.o.keyboardNavigation) break;
          dir = e.keyCode === 37 ? -1 : 1;

          if (e.ctrlKey) {
            newDate = this.moveYear(this.dates.get(-1) || UTCToday(), dir);
            newViewDate = this.moveYear(focusDate, dir);

            this._trigger('changeYear', this.viewDate);
          } else if (e.shiftKey) {
            newDate = this.moveMonth(this.dates.get(-1) || UTCToday(), dir);
            newViewDate = this.moveMonth(focusDate, dir);

            this._trigger('changeMonth', this.viewDate);
          } else {
            newDate = new Date(this.dates.get(-1) || UTCToday());
            newDate.setUTCDate(newDate.getUTCDate() + dir);
            newViewDate = new Date(focusDate);
            newViewDate.setUTCDate(focusDate.getUTCDate() + dir);
          }

          if (this.dateWithinRange(newDate)) {
            this.focusDate = this.viewDate = newViewDate;
            this.setValue();
            this.fill();
            e.preventDefault();
          }

          break;

        case 38: // up

        case 40:
          // down
          if (!this.o.keyboardNavigation) break;
          dir = e.keyCode === 38 ? -1 : 1;

          if (e.ctrlKey) {
            newDate = this.moveYear(this.dates.get(-1) || UTCToday(), dir);
            newViewDate = this.moveYear(focusDate, dir);

            this._trigger('changeYear', this.viewDate);
          } else if (e.shiftKey) {
            newDate = this.moveMonth(this.dates.get(-1) || UTCToday(), dir);
            newViewDate = this.moveMonth(focusDate, dir);

            this._trigger('changeMonth', this.viewDate);
          } else {
            newDate = new Date(this.dates.get(-1) || UTCToday());
            newDate.setUTCDate(newDate.getUTCDate() + dir * 7);
            newViewDate = new Date(focusDate);
            newViewDate.setUTCDate(focusDate.getUTCDate() + dir * 7);
          }

          if (this.dateWithinRange(newDate)) {
            this.focusDate = this.viewDate = newViewDate;
            this.setValue();
            this.fill();
            e.preventDefault();
          }

          break;

        case 32:
          // spacebar
          // Spacebar is used in manually typing dates in some formats.
          // As such, its behavior should not be hijacked.
          break;

        case 13:
          // enter
          focusDate = this.focusDate || this.dates.get(-1) || this.viewDate;

          this._toggle_multidate(focusDate);

          dateChanged = true;
          this.focusDate = null;
          this.viewDate = this.dates.get(-1) || this.viewDate;
          this.setValue();
          this.fill();

          if (this.picker.is(':visible')) {
            e.preventDefault();
            if (this.o.autoclose) this.hide();
          }

          break;

        case 9:
          // tab
          this.focusDate = null;
          this.viewDate = this.dates.get(-1) || this.viewDate;
          this.fill();
          this.hide();
          break;
      }

      if (dateChanged) {
        if (this.dates.length) this._trigger('changeDate');else this._trigger('clearDate');
        var element;

        if (this.isInput) {
          element = this.element;
        } else if (this.component) {
          element = this.element.find('input');
        }

        if (element) {
          element.change();
        }
      }
    },
    showMode: function showMode(dir) {
      if (dir) {
        this.viewMode = Math.max(this.o.minViewMode, Math.min(2, this.viewMode + dir));
      }

      this.picker.find('>div').hide().filter('.datepicker-' + DPGlobal.modes[this.viewMode].clsName).css('display', 'block');
      this.updateNavArrows();
    }
  };

  var DateRangePicker = function DateRangePicker(element, options) {
    this.element = $(element);
    this.inputs = $.map(options.inputs, function (i) {
      return i.jquery ? i[0] : i;
    });
    delete options.inputs;
    $(this.inputs).datepicker(options).bind('changeDate', $.proxy(this.dateUpdated, this));
    this.pickers = $.map(this.inputs, function (i) {
      return $(i).data('datepicker');
    });
    this.updateDates();
  };

  DateRangePicker.prototype = {
    updateDates: function updateDates() {
      this.dates = $.map(this.pickers, function (i) {
        return i.getUTCDate();
      });
      this.updateRanges();
    },
    updateRanges: function updateRanges() {
      var range = $.map(this.dates, function (d) {
        return d.valueOf();
      });
      $.each(this.pickers, function (i, p) {
        p.setRange(range);
      });
    },
    dateUpdated: function dateUpdated(e) {
      // `this.updating` is a workaround for preventing infinite recursion
      // between `changeDate` triggering and `setUTCDate` calling.  Until
      // there is a better mechanism.
      if (this.updating) return;
      this.updating = true;
      var dp = $(e.target).data('datepicker'),
          new_date = dp.getUTCDate(),
          i = $.inArray(e.target, this.inputs),
          l = this.inputs.length;
      if (i === -1) return;
      $.each(this.pickers, function (i, p) {
        if (!p.getUTCDate()) p.setUTCDate(new_date);
      });

      if (new_date < this.dates[i]) {
        // Date being moved earlier/left
        while (i >= 0 && new_date < this.dates[i]) {
          this.pickers[i--].setUTCDate(new_date);
        }
      } else if (new_date > this.dates[i]) {
        // Date being moved later/right
        while (i < l && new_date > this.dates[i]) {
          this.pickers[i++].setUTCDate(new_date);
        }
      }

      this.updateDates();
      delete this.updating;
    },
    remove: function remove() {
      $.map(this.pickers, function (p) {
        p.remove();
      });
      delete this.element.data().datepicker;
    }
  };

  function opts_from_el(el, prefix) {
    // Derive options from element data-attrs
    var data = $(el).data(),
        out = {},
        inkey,
        replace = new RegExp('^' + prefix.toLowerCase() + '([A-Z])');
    prefix = new RegExp('^' + prefix.toLowerCase());

    function re_lower(_, a) {
      return a.toLowerCase();
    }

    for (var key in data) {
      if (prefix.test(key)) {
        inkey = key.replace(replace, re_lower);
        out[inkey] = data[key];
      }
    }

    return out;
  }

  function opts_from_locale(lang) {
    // Derive options from locale plugins
    var out = {}; // Check if "de-DE" style date is available, if not language should
    // fallback to 2 letter code eg "de"

    if (!dates[lang]) {
      lang = lang.split('-')[0];
      if (!dates[lang]) return;
    }

    var d = dates[lang];
    $.each(locale_opts, function (i, k) {
      if (k in d) out[k] = d[k];
    });
    return out;
  }

  var old = $.fn.datepicker;

  $.fn.datepicker = function (option) {
    var args = Array.apply(null, arguments);
    args.shift();
    var internal_return;
    this.each(function () {
      var $this = $(this),
          data = $this.data('datepicker'),
          options = _typeof(option) === 'object' && option;

      if (!data) {
        var elopts = opts_from_el(this, 'date'),
            // Preliminary otions
        xopts = $.extend({}, defaults, elopts, options),
            locopts = opts_from_locale(xopts.language),
            // Options priority: js args, data-attrs, locales, defaults
        opts = $.extend({}, defaults, locopts, elopts, options);

        if ($this.is('.input-daterange') || opts.inputs) {
          var ropts = {
            inputs: opts.inputs || $this.find('input').toArray()
          };
          $this.data('datepicker', data = new DateRangePicker(this, $.extend(opts, ropts)));
        } else {
          $this.data('datepicker', data = new Datepicker(this, opts));
        }
      }

      if (typeof option === 'string' && typeof data[option] === 'function') {
        internal_return = data[option].apply(data, args);
        if (internal_return !== undefined) return false;
      }
    });
    if (internal_return !== undefined) return internal_return;else return this;
  };

  var defaults = $.fn.datepicker.defaults = {
    autoclose: false,
    beforeShowDay: $.noop,
    calendarWeeks: false,
    clearBtn: false,
    daysOfWeekDisabled: [],
    endDate: Infinity,
    forceParse: true,
    format: 'mm/dd/yyyy',
    keyboardNavigation: true,
    language: 'en',
    minViewMode: 0,
    multidate: false,
    multidateSeparator: ',',
    orientation: "auto",
    rtl: false,
    startDate: -Infinity,
    startView: 0,
    todayBtn: false,
    todayHighlight: false,
    weekStart: 0
  };
  var locale_opts = $.fn.datepicker.locale_opts = ['format', 'rtl', 'weekStart'];
  $.fn.datepicker.Constructor = Datepicker;
  var dates = $.fn.datepicker.dates = {
    en: {
      days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      daysMin: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      today: "Today",
      clear: "Clear"
    }
  };
  var DPGlobal = {
    modes: [{
      clsName: 'days',
      navFnc: 'Month',
      navStep: 1
    }, {
      clsName: 'months',
      navFnc: 'FullYear',
      navStep: 1
    }, {
      clsName: 'years',
      navFnc: 'FullYear',
      navStep: 10
    }],
    isLeapYear: function isLeapYear(year) {
      return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    },
    getDaysInMonth: function getDaysInMonth(year, month) {
      return [31, DPGlobal.isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
    },
    validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
    nonpunctuation: /[^ -\/:-@\[\u3400-\u9fff-`{-~\t\n\r]+/g,
    parseFormat: function parseFormat(format) {
      // IE treats \0 as a string end in inputs (truncating the value),
      // so it's a bad format delimiter, anyway
      var separators = format.replace(this.validParts, '\0').split('\0'),
          parts = format.match(this.validParts);

      if (!separators || !separators.length || !parts || parts.length === 0) {
        throw new Error("Invalid date format.");
      }

      return {
        separators: separators,
        parts: parts
      };
    },
    parseDate: function parseDate(date, format, language) {
      if (!date) return undefined;
      if (date instanceof Date) return date;
      if (typeof format === 'string') format = DPGlobal.parseFormat(format);
      var part_re = /([\-+]\d+)([dmwy])/,
          parts = date.match(/([\-+]\d+)([dmwy])/g),
          part,
          dir,
          i;

      if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(date)) {
        date = new Date();

        for (i = 0; i < parts.length; i++) {
          part = part_re.exec(parts[i]);
          dir = parseInt(part[1]);

          switch (part[2]) {
            case 'd':
              date.setUTCDate(date.getUTCDate() + dir);
              break;

            case 'm':
              date = Datepicker.prototype.moveMonth.call(Datepicker.prototype, date, dir);
              break;

            case 'w':
              date.setUTCDate(date.getUTCDate() + dir * 7);
              break;

            case 'y':
              date = Datepicker.prototype.moveYear.call(Datepicker.prototype, date, dir);
              break;
          }
        }

        return UTCDate(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), 0, 0, 0);
      }

      parts = date && date.match(this.nonpunctuation) || [];
      date = new Date();
      var parsed = {},
          setters_order = ['yyyy', 'yy', 'M', 'MM', 'm', 'mm', 'd', 'dd'],
          setters_map = {
        yyyy: function yyyy(d, v) {
          return d.setUTCFullYear(v);
        },
        yy: function yy(d, v) {
          return d.setUTCFullYear(2000 + v);
        },
        m: function m(d, v) {
          if (isNaN(d)) return d;
          v -= 1;

          while (v < 0) {
            v += 12;
          }

          v %= 12;
          d.setUTCMonth(v);

          while (d.getUTCMonth() !== v) {
            d.setUTCDate(d.getUTCDate() - 1);
          }

          return d;
        },
        d: function d(_d, v) {
          return _d.setUTCDate(v);
        }
      },
          val,
          filtered;
      setters_map['M'] = setters_map['MM'] = setters_map['mm'] = setters_map['m'];
      setters_map['dd'] = setters_map['d'];
      date = UTCDate(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0);
      var fparts = format.parts.slice(); // Remove noop parts

      if (parts.length !== fparts.length) {
        fparts = $(fparts).filter(function (i, p) {
          return $.inArray(p, setters_order) !== -1;
        }).toArray();
      } // Process remainder


      function match_part() {
        var m = this.slice(0, parts[i].length),
            p = parts[i].slice(0, m.length);
        return m === p;
      }

      if (parts.length === fparts.length) {
        var cnt;

        for (i = 0, cnt = fparts.length; i < cnt; i++) {
          val = parseInt(parts[i], 10);
          part = fparts[i];

          if (isNaN(val)) {
            switch (part) {
              case 'MM':
                filtered = $(dates[language].months).filter(match_part);
                val = $.inArray(filtered[0], dates[language].months) + 1;
                break;

              case 'M':
                filtered = $(dates[language].monthsShort).filter(match_part);
                val = $.inArray(filtered[0], dates[language].monthsShort) + 1;
                break;
            }
          }

          parsed[part] = val;
        }

        var _date, s;

        for (i = 0; i < setters_order.length; i++) {
          s = setters_order[i];

          if (s in parsed && !isNaN(parsed[s])) {
            _date = new Date(date);
            setters_map[s](_date, parsed[s]);
            if (!isNaN(_date)) date = _date;
          }
        }
      }

      return date;
    },
    formatDate: function formatDate(date, format, language) {
      if (!date) return '';
      if (typeof format === 'string') format = DPGlobal.parseFormat(format);
      var val = {
        d: date.getUTCDate(),
        D: dates[language].daysShort[date.getUTCDay()],
        DD: dates[language].days[date.getUTCDay()],
        m: date.getUTCMonth() + 1,
        M: dates[language].monthsShort[date.getUTCMonth()],
        MM: dates[language].months[date.getUTCMonth()],
        yy: date.getUTCFullYear().toString().substring(2),
        yyyy: date.getUTCFullYear()
      };
      val.dd = (val.d < 10 ? '0' : '') + val.d;
      val.mm = (val.m < 10 ? '0' : '') + val.m;
      date = [];
      var seps = $.extend([], format.separators);

      for (var i = 0, cnt = format.parts.length; i <= cnt; i++) {
        if (seps.length) date.push(seps.shift());
        date.push(val[format.parts[i]]);
      }

      return date.join('');
    },
    headTemplate: '<thead>' + '<tr>' + '<th class="prev">&laquo;</th>' + '<th colspan="5" class="datepicker-switch"></th>' + '<th class="next">&raquo;</th>' + '</tr>' + '</thead>',
    contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
    footTemplate: '<tfoot>' + '<tr>' + '<th colspan="7" class="today"></th>' + '</tr>' + '<tr>' + '<th colspan="7" class="clear"></th>' + '</tr>' + '</tfoot>'
  };
  DPGlobal.template = '<div class="datepicker">' + '<div class="datepicker-days">' + '<table class=" table-condensed">' + DPGlobal.headTemplate + '<tbody></tbody>' + DPGlobal.footTemplate + '</table>' + '</div>' + '<div class="datepicker-months">' + '<table class="table-condensed">' + DPGlobal.headTemplate + DPGlobal.contTemplate + DPGlobal.footTemplate + '</table>' + '</div>' + '<div class="datepicker-years">' + '<table class="table-condensed">' + DPGlobal.headTemplate + DPGlobal.contTemplate + DPGlobal.footTemplate + '</table>' + '</div>' + '</div>';
  $.fn.datepicker.DPGlobal = DPGlobal;
  /* DATEPICKER NO CONFLICT
  * =================== */

  $.fn.datepicker.noConflict = function () {
    $.fn.datepicker = old;
    return this;
  };
  /* DATEPICKER DATA-API
  * ================== */


  $(document).on('focus.datepicker.data-api click.datepicker.data-api', '[data-provide="datepicker"]', function (e) {
    var $this = $(this);
    if ($this.data('datepicker')) return;
    e.preventDefault(); // component click requires us to explicitly show it

    $this.datepicker('show');
  });
  $(function () {
    $('[data-provide="datepicker-inline"]').datepicker();
  });
})(window.jQuery);
/*! =======================================================
                      VERSION  10.6.2              
========================================================= */
"use strict";

function _typeof2(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

var _typeof = "function" == typeof Symbol && "symbol" == _typeof2(Symbol.iterator) ? function (a) {
  return _typeof2(a);
} : function (a) {
  return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : _typeof2(a);
},
    windowIsDefined = "object" === ("undefined" == typeof window ? "undefined" : _typeof(window));

!function (a) {
  if ("function" == typeof define && define.amd) define(["jquery"], a);else if ("object" === ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports) {
    var b;

    try {
      b = require("jquery");
    } catch (c) {
      b = null;
    }

    module.exports = a(b);
  } else window && (window.Slider = a(window.jQuery));
}(function (a) {
  var b = "slider",
      c = "bootstrapSlider";
  windowIsDefined && !window.console && (window.console = {}), windowIsDefined && !window.console.log && (window.console.log = function () {}), windowIsDefined && !window.console.warn && (window.console.warn = function () {});
  var d;
  return function (a) {
    function b() {}

    function c(a) {
      function c(b) {
        b.prototype.option || (b.prototype.option = function (b) {
          a.isPlainObject(b) && (this.options = a.extend(!0, this.options, b));
        });
      }

      function e(b, c) {
        a.fn[b] = function (e) {
          if ("string" == typeof e) {
            for (var g = d.call(arguments, 1), h = 0, i = this.length; i > h; h++) {
              var j = this[h],
                  k = a.data(j, b);
              if (k) {
                if (a.isFunction(k[e]) && "_" !== e.charAt(0)) {
                  var l = k[e].apply(k, g);
                  if (void 0 !== l && l !== k) return l;
                } else f("no such method '" + e + "' for " + b + " instance");
              } else f("cannot call methods on " + b + " prior to initialization; attempted to call '" + e + "'");
            }

            return this;
          }

          var m = this.map(function () {
            var d = a.data(this, b);
            return d ? (d.option(e), d._init()) : (d = new c(this, e), a.data(this, b, d)), a(this);
          });
          return 1 === m.length ? m[0] : m;
        };
      }

      if (a) {
        var f = "undefined" == typeof console ? b : function (a) {
          console.error(a);
        };
        return a.bridget = function (a, b) {
          c(b), e(a, b);
        }, a.bridget;
      }
    }

    var d = Array.prototype.slice;
    c(a);
  }(a), function (a) {
    function e(b, c) {
      function d(a, b) {
        var c = "data-slider-" + b.replace(/_/g, "-"),
            d = a.getAttribute(c);

        try {
          return JSON.parse(d);
        } catch (e) {
          return d;
        }
      }

      this._state = {
        value: null,
        enabled: null,
        offset: null,
        size: null,
        percentage: null,
        inDrag: !1,
        over: !1,
        tickIndex: null
      }, this.ticksCallbackMap = {}, this.handleCallbackMap = {}, "string" == typeof b ? this.element = document.querySelector(b) : b instanceof HTMLElement && (this.element = b), c = c ? c : {};

      for (var e = Object.keys(this.defaultOptions), f = c.hasOwnProperty("min"), g = c.hasOwnProperty("max"), i = 0; i < e.length; i++) {
        var j = e[i],
            k = c[j];
        k = "undefined" != typeof k ? k : d(this.element, j), k = null !== k ? k : this.defaultOptions[j], this.options || (this.options = {}), this.options[j] = k;
      }

      if (this.ticksAreValid = Array.isArray(this.options.ticks) && this.options.ticks.length > 0, this.ticksAreValid || (this.options.lock_to_ticks = !1), "auto" === this.options.rtl) {
        var l = window.getComputedStyle(this.element);
        null != l ? this.options.rtl = "rtl" === l.direction : this.options.rtl = "rtl" === this.element.style.direction;
      }

      "vertical" !== this.options.orientation || "top" !== this.options.tooltip_position && "bottom" !== this.options.tooltip_position ? "horizontal" !== this.options.orientation || "left" !== this.options.tooltip_position && "right" !== this.options.tooltip_position || (this.options.tooltip_position = "top") : this.options.rtl ? this.options.tooltip_position = "left" : this.options.tooltip_position = "right";
      var m,
          n,
          o,
          p,
          q,
          r = this.element.style.width,
          s = !1,
          t = this.element.parentNode;
      if (this.sliderElem) s = !0;else {
        this.sliderElem = document.createElement("div"), this.sliderElem.className = "slider";
        var u = document.createElement("div");
        u.className = "slider-track", n = document.createElement("div"), n.className = "slider-track-low", m = document.createElement("div"), m.className = "slider-selection", o = document.createElement("div"), o.className = "slider-track-high", p = document.createElement("div"), p.className = "slider-handle min-slider-handle", p.setAttribute("role", "slider"), p.setAttribute("aria-valuemin", this.options.min), p.setAttribute("aria-valuemax", this.options.max), q = document.createElement("div"), q.className = "slider-handle max-slider-handle", q.setAttribute("role", "slider"), q.setAttribute("aria-valuemin", this.options.min), q.setAttribute("aria-valuemax", this.options.max), u.appendChild(n), u.appendChild(m), u.appendChild(o), this.rangeHighlightElements = [];
        var v = this.options.rangeHighlights;
        if (Array.isArray(v) && v.length > 0) for (var w = 0; w < v.length; w++) {
          var x = document.createElement("div"),
              y = v[w]["class"] || "";
          x.className = "slider-rangeHighlight slider-selection " + y, this.rangeHighlightElements.push(x), u.appendChild(x);
        }
        var z = Array.isArray(this.options.labelledby);

        if (z && this.options.labelledby[0] && p.setAttribute("aria-labelledby", this.options.labelledby[0]), z && this.options.labelledby[1] && q.setAttribute("aria-labelledby", this.options.labelledby[1]), !z && this.options.labelledby && (p.setAttribute("aria-labelledby", this.options.labelledby), q.setAttribute("aria-labelledby", this.options.labelledby)), this.ticks = [], Array.isArray(this.options.ticks) && this.options.ticks.length > 0) {
          for (this.ticksContainer = document.createElement("div"), this.ticksContainer.className = "slider-tick-container", i = 0; i < this.options.ticks.length; i++) {
            var A = document.createElement("div");

            if (A.className = "slider-tick", this.options.ticks_tooltip) {
              var B = this._addTickListener(),
                  C = B.addMouseEnter(this, A, i),
                  D = B.addMouseLeave(this, A);

              this.ticksCallbackMap[i] = {
                mouseEnter: C,
                mouseLeave: D
              };
            }

            this.ticks.push(A), this.ticksContainer.appendChild(A);
          }

          m.className += " tick-slider-selection";
        }

        if (this.tickLabels = [], Array.isArray(this.options.ticks_labels) && this.options.ticks_labels.length > 0) for (this.tickLabelContainer = document.createElement("div"), this.tickLabelContainer.className = "slider-tick-label-container", i = 0; i < this.options.ticks_labels.length; i++) {
          var E = document.createElement("div"),
              F = 0 === this.options.ticks_positions.length,
              G = this.options.reversed && F ? this.options.ticks_labels.length - (i + 1) : i;
          E.className = "slider-tick-label", E.innerHTML = this.options.ticks_labels[G], this.tickLabels.push(E), this.tickLabelContainer.appendChild(E);
        }

        var H = function H(a) {
          var b = document.createElement("div");
          b.className = "tooltip-arrow";
          var c = document.createElement("div");
          c.className = "tooltip-inner", a.appendChild(b), a.appendChild(c);
        },
            I = document.createElement("div");

        I.className = "tooltip tooltip-main", I.setAttribute("role", "presentation"), H(I);
        var J = document.createElement("div");
        J.className = "tooltip tooltip-min", J.setAttribute("role", "presentation"), H(J);
        var K = document.createElement("div");
        K.className = "tooltip tooltip-max", K.setAttribute("role", "presentation"), H(K), this.sliderElem.appendChild(u), this.sliderElem.appendChild(I), this.sliderElem.appendChild(J), this.sliderElem.appendChild(K), this.tickLabelContainer && this.sliderElem.appendChild(this.tickLabelContainer), this.ticksContainer && this.sliderElem.appendChild(this.ticksContainer), this.sliderElem.appendChild(p), this.sliderElem.appendChild(q), t.insertBefore(this.sliderElem, this.element), this.element.style.display = "none";
      }
      if (a && (this.$element = a(this.element), this.$sliderElem = a(this.sliderElem)), this.eventToCallbackMap = {}, this.sliderElem.id = this.options.id, this.touchCapable = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch, this.touchX = 0, this.touchY = 0, this.tooltip = this.sliderElem.querySelector(".tooltip-main"), this.tooltipInner = this.tooltip.querySelector(".tooltip-inner"), this.tooltip_min = this.sliderElem.querySelector(".tooltip-min"), this.tooltipInner_min = this.tooltip_min.querySelector(".tooltip-inner"), this.tooltip_max = this.sliderElem.querySelector(".tooltip-max"), this.tooltipInner_max = this.tooltip_max.querySelector(".tooltip-inner"), h[this.options.scale] && (this.options.scale = h[this.options.scale]), s === !0 && (this._removeClass(this.sliderElem, "slider-horizontal"), this._removeClass(this.sliderElem, "slider-vertical"), this._removeClass(this.sliderElem, "slider-rtl"), this._removeClass(this.tooltip, "hide"), this._removeClass(this.tooltip_min, "hide"), this._removeClass(this.tooltip_max, "hide"), ["left", "right", "top", "width", "height"].forEach(function (a) {
        this._removeProperty(this.trackLow, a), this._removeProperty(this.trackSelection, a), this._removeProperty(this.trackHigh, a);
      }, this), [this.handle1, this.handle2].forEach(function (a) {
        this._removeProperty(a, "left"), this._removeProperty(a, "right"), this._removeProperty(a, "top");
      }, this), [this.tooltip, this.tooltip_min, this.tooltip_max].forEach(function (a) {
        this._removeProperty(a, "left"), this._removeProperty(a, "right"), this._removeProperty(a, "top"), this._removeClass(a, "right"), this._removeClass(a, "left"), this._removeClass(a, "top");
      }, this)), "vertical" === this.options.orientation ? (this._addClass(this.sliderElem, "slider-vertical"), this.stylePos = "top", this.mousePos = "pageY", this.sizePos = "offsetHeight") : (this._addClass(this.sliderElem, "slider-horizontal"), this.sliderElem.style.width = r, this.options.orientation = "horizontal", this.options.rtl ? this.stylePos = "right" : this.stylePos = "left", this.mousePos = "clientX", this.sizePos = "offsetWidth"), this.options.rtl && this._addClass(this.sliderElem, "slider-rtl"), this._setTooltipPosition(), Array.isArray(this.options.ticks) && this.options.ticks.length > 0 && (g || (this.options.max = Math.max.apply(Math, this.options.ticks)), f || (this.options.min = Math.min.apply(Math, this.options.ticks))), Array.isArray(this.options.value) ? (this.options.range = !0, this._state.value = this.options.value) : this.options.range ? this._state.value = [this.options.value, this.options.max] : this._state.value = this.options.value, this.trackLow = n || this.trackLow, this.trackSelection = m || this.trackSelection, this.trackHigh = o || this.trackHigh, "none" === this.options.selection ? (this._addClass(this.trackLow, "hide"), this._addClass(this.trackSelection, "hide"), this._addClass(this.trackHigh, "hide")) : ("after" === this.options.selection || "before" === this.options.selection) && (this._removeClass(this.trackLow, "hide"), this._removeClass(this.trackSelection, "hide"), this._removeClass(this.trackHigh, "hide")), this.handle1 = p || this.handle1, this.handle2 = q || this.handle2, s === !0) for (this._removeClass(this.handle1, "round triangle"), this._removeClass(this.handle2, "round triangle hide"), i = 0; i < this.ticks.length; i++) {
        this._removeClass(this.ticks[i], "round triangle hide");
      }
      var L = ["round", "triangle", "custom"],
          M = -1 !== L.indexOf(this.options.handle);
      if (M) for (this._addClass(this.handle1, this.options.handle), this._addClass(this.handle2, this.options.handle), i = 0; i < this.ticks.length; i++) {
        this._addClass(this.ticks[i], this.options.handle);
      }
      if (this._state.offset = this._offset(this.sliderElem), this._state.size = this.sliderElem[this.sizePos], this.setValue(this._state.value), this.handle1Keydown = this._keydown.bind(this, 0), this.handle1.addEventListener("keydown", this.handle1Keydown, !1), this.handle2Keydown = this._keydown.bind(this, 1), this.handle2.addEventListener("keydown", this.handle2Keydown, !1), this.mousedown = this._mousedown.bind(this), this.touchstart = this._touchstart.bind(this), this.touchmove = this._touchmove.bind(this), this.touchCapable && (this.sliderElem.addEventListener("touchstart", this.touchstart, !1), this.sliderElem.addEventListener("touchmove", this.touchmove, !1)), this.sliderElem.addEventListener("mousedown", this.mousedown, !1), this.resize = this._resize.bind(this), window.addEventListener("resize", this.resize, !1), "hide" === this.options.tooltip) this._addClass(this.tooltip, "hide"), this._addClass(this.tooltip_min, "hide"), this._addClass(this.tooltip_max, "hide");else if ("always" === this.options.tooltip) this._showTooltip(), this._alwaysShowTooltip = !0;else {
        if (this.showTooltip = this._showTooltip.bind(this), this.hideTooltip = this._hideTooltip.bind(this), this.options.ticks_tooltip) {
          var N = this._addTickListener(),
              O = N.addMouseEnter(this, this.handle1),
              P = N.addMouseLeave(this, this.handle1);

          this.handleCallbackMap.handle1 = {
            mouseEnter: O,
            mouseLeave: P
          }, O = N.addMouseEnter(this, this.handle2), P = N.addMouseLeave(this, this.handle2), this.handleCallbackMap.handle2 = {
            mouseEnter: O,
            mouseLeave: P
          };
        } else this.sliderElem.addEventListener("mouseenter", this.showTooltip, !1), this.sliderElem.addEventListener("mouseleave", this.hideTooltip, !1), this.touchCapable && (this.sliderElem.addEventListener("touchstart", this.showTooltip, !1), this.sliderElem.addEventListener("touchmove", this.showTooltip, !1), this.sliderElem.addEventListener("touchend", this.hideTooltip, !1));

        this.handle1.addEventListener("focus", this.showTooltip, !1), this.handle1.addEventListener("blur", this.hideTooltip, !1), this.handle2.addEventListener("focus", this.showTooltip, !1), this.handle2.addEventListener("blur", this.hideTooltip, !1), this.touchCapable && (this.handle1.addEventListener("touchstart", this.showTooltip, !1), this.handle1.addEventListener("touchmove", this.showTooltip, !1), this.handle1.addEventListener("touchend", this.hideTooltip, !1), this.handle2.addEventListener("touchstart", this.showTooltip, !1), this.handle2.addEventListener("touchmove", this.showTooltip, !1), this.handle2.addEventListener("touchend", this.hideTooltip, !1));
      }
      this.options.enabled ? this.enable() : this.disable();
    }

    var f = void 0,
        g = {
      formatInvalidInputErrorMsg: function formatInvalidInputErrorMsg(a) {
        return "Invalid input value '" + a + "' passed in";
      },
      callingContextNotSliderInstance: "Calling context element does not have instance of Slider bound to it. Check your code to make sure the JQuery object returned from the call to the slider() initializer is calling the method"
    },
        h = {
      linear: {
        getValue: function getValue(a, b) {
          return a < b.min ? b.min : a > b.max ? b.max : a;
        },
        toValue: function toValue(a) {
          var b = a / 100 * (this.options.max - this.options.min),
              c = !0;

          if (this.options.ticks_positions.length > 0) {
            for (var d, e, f, g = 0, i = 1; i < this.options.ticks_positions.length; i++) {
              if (a <= this.options.ticks_positions[i]) {
                d = this.options.ticks[i - 1], f = this.options.ticks_positions[i - 1], e = this.options.ticks[i], g = this.options.ticks_positions[i];
                break;
              }
            }

            var j = (a - f) / (g - f);
            b = d + j * (e - d), c = !1;
          }

          var k = c ? this.options.min : 0,
              l = k + Math.round(b / this.options.step) * this.options.step;
          return h.linear.getValue(l, this.options);
        },
        toPercentage: function toPercentage(a) {
          if (this.options.max === this.options.min) return 0;

          if (this.options.ticks_positions.length > 0) {
            for (var b, c, d, e = 0, f = 0; f < this.options.ticks.length; f++) {
              if (a <= this.options.ticks[f]) {
                b = f > 0 ? this.options.ticks[f - 1] : 0, d = f > 0 ? this.options.ticks_positions[f - 1] : 0, c = this.options.ticks[f], e = this.options.ticks_positions[f];
                break;
              }
            }

            if (f > 0) {
              var g = (a - b) / (c - b);
              return d + g * (e - d);
            }
          }

          return 100 * (a - this.options.min) / (this.options.max - this.options.min);
        }
      },
      logarithmic: {
        toValue: function toValue(a) {
          var b = 1 - this.options.min,
              c = Math.log(this.options.min + b),
              d = Math.log(this.options.max + b),
              e = Math.exp(c + (d - c) * a / 100) - b;
          return Math.round(e) === d ? d : (e = this.options.min + Math.round((e - this.options.min) / this.options.step) * this.options.step, h.linear.getValue(e, this.options));
        },
        toPercentage: function toPercentage(a) {
          if (this.options.max === this.options.min) return 0;
          var b = 1 - this.options.min,
              c = Math.log(this.options.max + b),
              d = Math.log(this.options.min + b),
              e = Math.log(a + b);
          return 100 * (e - d) / (c - d);
        }
      }
    };
    d = function d(a, b) {
      return e.call(this, a, b), this;
    }, d.prototype = {
      _init: function _init() {},
      constructor: d,
      defaultOptions: {
        id: "",
        min: 0,
        max: 10,
        step: 1,
        precision: 0,
        orientation: "horizontal",
        value: 5,
        range: !1,
        selection: "before",
        tooltip: "show",
        tooltip_split: !1,
        lock_to_ticks: !1,
        handle: "round",
        reversed: !1,
        rtl: "auto",
        enabled: !0,
        formatter: function formatter(a) {
          return Array.isArray(a) ? a[0] + " : " + a[1] : a;
        },
        natural_arrow_keys: !1,
        ticks: [],
        ticks_positions: [],
        ticks_labels: [],
        ticks_snap_bounds: 0,
        ticks_tooltip: !1,
        scale: "linear",
        focus: !1,
        tooltip_position: null,
        labelledby: null,
        rangeHighlights: []
      },
      getElement: function getElement() {
        return this.sliderElem;
      },
      getValue: function getValue() {
        return this.options.range ? this._state.value : this._state.value[0];
      },
      setValue: function setValue(a, b, c) {
        a || (a = 0);
        var d = this.getValue();
        this._state.value = this._validateInputValue(a);

        var e = this._applyPrecision.bind(this);

        this.options.range ? (this._state.value[0] = e(this._state.value[0]), this._state.value[1] = e(this._state.value[1]), this.ticksAreValid && this.options.lock_to_ticks && (this._state.value[0] = this.options.ticks[this._getClosestTickIndex(this._state.value[0])], this._state.value[1] = this.options.ticks[this._getClosestTickIndex(this._state.value[1])]), this._state.value[0] = Math.max(this.options.min, Math.min(this.options.max, this._state.value[0])), this._state.value[1] = Math.max(this.options.min, Math.min(this.options.max, this._state.value[1]))) : (this._state.value = e(this._state.value), this.ticksAreValid && this.options.lock_to_ticks && (this._state.value = this.options.ticks[this._getClosestTickIndex(this._state.value)]), this._state.value = [Math.max(this.options.min, Math.min(this.options.max, this._state.value))], this._addClass(this.handle2, "hide"), "after" === this.options.selection ? this._state.value[1] = this.options.max : this._state.value[1] = this.options.min), this._setTickIndex(), this.options.max > this.options.min ? this._state.percentage = [this._toPercentage(this._state.value[0]), this._toPercentage(this._state.value[1]), 100 * this.options.step / (this.options.max - this.options.min)] : this._state.percentage = [0, 0, 100], this._layout();
        var f = this.options.range ? this._state.value : this._state.value[0];
        this._setDataVal(f), b === !0 && this._trigger("slide", f);
        var g = !1;
        return g = Array.isArray(f) ? d[0] !== f[0] || d[1] !== f[1] : d !== f, g && c === !0 && this._trigger("change", {
          oldValue: d,
          newValue: f
        }), this;
      },
      destroy: function destroy() {
        this._removeSliderEventHandlers(), this.sliderElem.parentNode.removeChild(this.sliderElem), this.element.style.display = "", this._cleanUpEventCallbacksMap(), this.element.removeAttribute("data"), a && (this._unbindJQueryEventHandlers(), f === b && this.$element.removeData(f), this.$element.removeData(c));
      },
      disable: function disable() {
        return this._state.enabled = !1, this.handle1.removeAttribute("tabindex"), this.handle2.removeAttribute("tabindex"), this._addClass(this.sliderElem, "slider-disabled"), this._trigger("slideDisabled"), this;
      },
      enable: function enable() {
        return this._state.enabled = !0, this.handle1.setAttribute("tabindex", 0), this.handle2.setAttribute("tabindex", 0), this._removeClass(this.sliderElem, "slider-disabled"), this._trigger("slideEnabled"), this;
      },
      toggle: function toggle() {
        return this._state.enabled ? this.disable() : this.enable(), this;
      },
      isEnabled: function isEnabled() {
        return this._state.enabled;
      },
      on: function on(a, b) {
        return this._bindNonQueryEventHandler(a, b), this;
      },
      off: function off(b, c) {
        a ? (this.$element.off(b, c), this.$sliderElem.off(b, c)) : this._unbindNonQueryEventHandler(b, c);
      },
      getAttribute: function getAttribute(a) {
        return a ? this.options[a] : this.options;
      },
      setAttribute: function setAttribute(a, b) {
        return this.options[a] = b, this;
      },
      refresh: function refresh(d) {
        var g = this.getValue();
        return this._removeSliderEventHandlers(), e.call(this, this.element, this.options), d && d.useCurrentValue === !0 && this.setValue(g), a && (f === b ? (a.data(this.element, b, this), a.data(this.element, c, this)) : a.data(this.element, c, this)), this;
      },
      relayout: function relayout() {
        return this._resize(), this;
      },
      _removeTooltipListener: function _removeTooltipListener(a, b) {
        this.handle1.removeEventListener(a, b, !1), this.handle2.removeEventListener(a, b, !1);
      },
      _removeSliderEventHandlers: function _removeSliderEventHandlers() {
        if (this.handle1.removeEventListener("keydown", this.handle1Keydown, !1), this.handle2.removeEventListener("keydown", this.handle2Keydown, !1), this.options.ticks_tooltip) {
          for (var a = this.ticksContainer.getElementsByClassName("slider-tick"), b = 0; b < a.length; b++) {
            a[b].removeEventListener("mouseenter", this.ticksCallbackMap[b].mouseEnter, !1), a[b].removeEventListener("mouseleave", this.ticksCallbackMap[b].mouseLeave, !1);
          }

          this.handleCallbackMap.handle1 && this.handleCallbackMap.handle2 && (this.handle1.removeEventListener("mouseenter", this.handleCallbackMap.handle1.mouseEnter, !1), this.handle2.removeEventListener("mouseenter", this.handleCallbackMap.handle2.mouseEnter, !1), this.handle1.removeEventListener("mouseleave", this.handleCallbackMap.handle1.mouseLeave, !1), this.handle2.removeEventListener("mouseleave", this.handleCallbackMap.handle2.mouseLeave, !1));
        }

        this.handleCallbackMap = null, this.ticksCallbackMap = null, this.showTooltip && this._removeTooltipListener("focus", this.showTooltip), this.hideTooltip && this._removeTooltipListener("blur", this.hideTooltip), this.showTooltip && this.sliderElem.removeEventListener("mouseenter", this.showTooltip, !1), this.hideTooltip && this.sliderElem.removeEventListener("mouseleave", this.hideTooltip, !1), this.sliderElem.removeEventListener("mousedown", this.mousedown, !1), this.touchCapable && (this.showTooltip && (this.handle1.removeEventListener("touchstart", this.showTooltip, !1), this.handle1.removeEventListener("touchmove", this.showTooltip, !1), this.handle2.removeEventListener("touchstart", this.showTooltip, !1), this.handle2.removeEventListener("touchmove", this.showTooltip, !1)), this.hideTooltip && (this.handle1.removeEventListener("touchend", this.hideTooltip, !1), this.handle2.removeEventListener("touchend", this.hideTooltip, !1)), this.showTooltip && (this.sliderElem.removeEventListener("touchstart", this.showTooltip, !1), this.sliderElem.removeEventListener("touchmove", this.showTooltip, !1)), this.hideTooltip && this.sliderElem.removeEventListener("touchend", this.hideTooltip, !1), this.sliderElem.removeEventListener("touchstart", this.touchstart, !1), this.sliderElem.removeEventListener("touchmove", this.touchmove, !1)), window.removeEventListener("resize", this.resize, !1);
      },
      _bindNonQueryEventHandler: function _bindNonQueryEventHandler(a, b) {
        void 0 === this.eventToCallbackMap[a] && (this.eventToCallbackMap[a] = []), this.eventToCallbackMap[a].push(b);
      },
      _unbindNonQueryEventHandler: function _unbindNonQueryEventHandler(a, b) {
        var c = this.eventToCallbackMap[a];
        if (void 0 !== c) for (var d = 0; d < c.length; d++) {
          if (c[d] === b) {
            c.splice(d, 1);
            break;
          }
        }
      },
      _cleanUpEventCallbacksMap: function _cleanUpEventCallbacksMap() {
        for (var a = Object.keys(this.eventToCallbackMap), b = 0; b < a.length; b++) {
          var c = a[b];
          delete this.eventToCallbackMap[c];
        }
      },
      _showTooltip: function _showTooltip() {
        this.options.tooltip_split === !1 ? (this._addClass(this.tooltip, "in"), this.tooltip_min.style.display = "none", this.tooltip_max.style.display = "none") : (this._addClass(this.tooltip_min, "in"), this._addClass(this.tooltip_max, "in"), this.tooltip.style.display = "none"), this._state.over = !0;
      },
      _hideTooltip: function _hideTooltip() {
        this._state.inDrag === !1 && this._alwaysShowTooltip !== !0 && (this._removeClass(this.tooltip, "in"), this._removeClass(this.tooltip_min, "in"), this._removeClass(this.tooltip_max, "in")), this._state.over = !1;
      },
      _setToolTipOnMouseOver: function _setToolTipOnMouseOver(a) {
        function b(a, b) {
          return b ? [100 - a.percentage[0], c.options.range ? 100 - a.percentage[1] : a.percentage[1]] : [a.percentage[0], a.percentage[1]];
        }

        var c = this,
            d = this.options.formatter(a ? a.value[0] : this._state.value[0]),
            e = a ? b(a, this.options.reversed) : b(this._state, this.options.reversed);
        this._setText(this.tooltipInner, d), this.tooltip.style[this.stylePos] = e[0] + "%";
      },
      _copyState: function _copyState() {
        return {
          value: [this._state.value[0], this._state.value[1]],
          enabled: this._state.enabled,
          offset: this._state.offset,
          size: this._state.size,
          percentage: [this._state.percentage[0], this._state.percentage[1], this._state.percentage[2]],
          inDrag: this._state.inDrag,
          over: this._state.over,
          dragged: this._state.dragged,
          keyCtrl: this._state.keyCtrl
        };
      },
      _addTickListener: function _addTickListener() {
        return {
          addMouseEnter: function addMouseEnter(a, b, c) {
            var d = function d() {
              var d = a._copyState(),
                  e = b === a.handle1 ? d.value[0] : d.value[1],
                  f = void 0;

              void 0 !== c ? (e = a.options.ticks[c], f = a.options.ticks_positions.length > 0 && a.options.ticks_positions[c] || a._toPercentage(a.options.ticks[c])) : f = a._toPercentage(e), d.value[0] = e, d.percentage[0] = f, a._setToolTipOnMouseOver(d), a._showTooltip();
            };

            return b.addEventListener("mouseenter", d, !1), d;
          },
          addMouseLeave: function addMouseLeave(a, b) {
            var c = function c() {
              a._hideTooltip();
            };

            return b.addEventListener("mouseleave", c, !1), c;
          }
        };
      },
      _layout: function _layout() {
        var a, b;
        if (a = this.options.reversed ? [100 - this._state.percentage[0], this.options.range ? 100 - this._state.percentage[1] : this._state.percentage[1]] : [this._state.percentage[0], this._state.percentage[1]], this.handle1.style[this.stylePos] = a[0] + "%", this.handle1.setAttribute("aria-valuenow", this._state.value[0]), b = this.options.formatter(this._state.value[0]), isNaN(b) ? this.handle1.setAttribute("aria-valuetext", b) : this.handle1.removeAttribute("aria-valuetext"), this.handle2.style[this.stylePos] = a[1] + "%", this.handle2.setAttribute("aria-valuenow", this._state.value[1]), b = this.options.formatter(this._state.value[1]), isNaN(b) ? this.handle2.setAttribute("aria-valuetext", b) : this.handle2.removeAttribute("aria-valuetext"), this.rangeHighlightElements.length > 0 && Array.isArray(this.options.rangeHighlights) && this.options.rangeHighlights.length > 0) for (var c = 0; c < this.options.rangeHighlights.length; c++) {
          var d = this._toPercentage(this.options.rangeHighlights[c].start),
              e = this._toPercentage(this.options.rangeHighlights[c].end);

          if (this.options.reversed) {
            var f = 100 - e;
            e = 100 - d, d = f;
          }

          var g = this._createHighlightRange(d, e);

          g ? "vertical" === this.options.orientation ? (this.rangeHighlightElements[c].style.top = g.start + "%", this.rangeHighlightElements[c].style.height = g.size + "%") : (this.options.rtl ? this.rangeHighlightElements[c].style.right = g.start + "%" : this.rangeHighlightElements[c].style.left = g.start + "%", this.rangeHighlightElements[c].style.width = g.size + "%") : this.rangeHighlightElements[c].style.display = "none";
        }

        if (Array.isArray(this.options.ticks) && this.options.ticks.length > 0) {
          var h,
              i = "vertical" === this.options.orientation ? "height" : "width";
          h = "vertical" === this.options.orientation ? "marginTop" : this.options.rtl ? "marginRight" : "marginLeft";
          var j = this._state.size / (this.options.ticks.length - 1);

          if (this.tickLabelContainer) {
            var k = 0;
            if (0 === this.options.ticks_positions.length) "vertical" !== this.options.orientation && (this.tickLabelContainer.style[h] = -j / 2 + "px"), k = this.tickLabelContainer.offsetHeight;else for (l = 0; l < this.tickLabelContainer.childNodes.length; l++) {
              this.tickLabelContainer.childNodes[l].offsetHeight > k && (k = this.tickLabelContainer.childNodes[l].offsetHeight);
            }
            "horizontal" === this.options.orientation && (this.sliderElem.style.marginBottom = k + "px");
          }

          for (var l = 0; l < this.options.ticks.length; l++) {
            var m = this.options.ticks_positions[l] || this._toPercentage(this.options.ticks[l]);

            this.options.reversed && (m = 100 - m), this.ticks[l].style[this.stylePos] = m + "%", this._removeClass(this.ticks[l], "in-selection"), this.options.range ? m >= a[0] && m <= a[1] && this._addClass(this.ticks[l], "in-selection") : "after" === this.options.selection && m >= a[0] ? this._addClass(this.ticks[l], "in-selection") : "before" === this.options.selection && m <= a[0] && this._addClass(this.ticks[l], "in-selection"), this.tickLabels[l] && (this.tickLabels[l].style[i] = j + "px", "vertical" !== this.options.orientation && void 0 !== this.options.ticks_positions[l] ? (this.tickLabels[l].style.position = "absolute", this.tickLabels[l].style[this.stylePos] = m + "%", this.tickLabels[l].style[h] = -j / 2 + "px") : "vertical" === this.options.orientation && (this.options.rtl ? this.tickLabels[l].style.marginRight = this.sliderElem.offsetWidth + "px" : this.tickLabels[l].style.marginLeft = this.sliderElem.offsetWidth + "px", this.tickLabelContainer.style[h] = this.sliderElem.offsetWidth / 2 * -1 + "px"), this._removeClass(this.tickLabels[l], "label-in-selection label-is-selection"), this.options.range ? m >= a[0] && m <= a[1] && (this._addClass(this.tickLabels[l], "label-in-selection"), (m === a[0] || a[1]) && this._addClass(this.tickLabels[l], "label-is-selection")) : ("after" === this.options.selection && m >= a[0] ? this._addClass(this.tickLabels[l], "label-in-selection") : "before" === this.options.selection && m <= a[0] && this._addClass(this.tickLabels[l], "label-in-selection"), m === a[0] && this._addClass(this.tickLabels[l], "label-is-selection")));
          }
        }

        var n;

        if (this.options.range) {
          n = this.options.formatter(this._state.value), this._setText(this.tooltipInner, n), this.tooltip.style[this.stylePos] = (a[1] + a[0]) / 2 + "%";
          var o = this.options.formatter(this._state.value[0]);

          this._setText(this.tooltipInner_min, o);

          var p = this.options.formatter(this._state.value[1]);
          this._setText(this.tooltipInner_max, p), this.tooltip_min.style[this.stylePos] = a[0] + "%", this.tooltip_max.style[this.stylePos] = a[1] + "%";
        } else n = this.options.formatter(this._state.value[0]), this._setText(this.tooltipInner, n), this.tooltip.style[this.stylePos] = a[0] + "%";

        if ("vertical" === this.options.orientation) this.trackLow.style.top = "0", this.trackLow.style.height = Math.min(a[0], a[1]) + "%", this.trackSelection.style.top = Math.min(a[0], a[1]) + "%", this.trackSelection.style.height = Math.abs(a[0] - a[1]) + "%", this.trackHigh.style.bottom = "0", this.trackHigh.style.height = 100 - Math.min(a[0], a[1]) - Math.abs(a[0] - a[1]) + "%";else {
          "right" === this.stylePos ? this.trackLow.style.right = "0" : this.trackLow.style.left = "0", this.trackLow.style.width = Math.min(a[0], a[1]) + "%", "right" === this.stylePos ? this.trackSelection.style.right = Math.min(a[0], a[1]) + "%" : this.trackSelection.style.left = Math.min(a[0], a[1]) + "%", this.trackSelection.style.width = Math.abs(a[0] - a[1]) + "%", "right" === this.stylePos ? this.trackHigh.style.left = "0" : this.trackHigh.style.right = "0", this.trackHigh.style.width = 100 - Math.min(a[0], a[1]) - Math.abs(a[0] - a[1]) + "%";
          var q = this.tooltip_min.getBoundingClientRect(),
              r = this.tooltip_max.getBoundingClientRect();
          "bottom" === this.options.tooltip_position ? q.right > r.left ? (this._removeClass(this.tooltip_max, "bottom"), this._addClass(this.tooltip_max, "top"), this.tooltip_max.style.top = "", this.tooltip_max.style.bottom = "22px") : (this._removeClass(this.tooltip_max, "top"), this._addClass(this.tooltip_max, "bottom"), this.tooltip_max.style.top = this.tooltip_min.style.top, this.tooltip_max.style.bottom = "") : q.right > r.left ? (this._removeClass(this.tooltip_max, "top"), this._addClass(this.tooltip_max, "bottom"), this.tooltip_max.style.top = "18px") : (this._removeClass(this.tooltip_max, "bottom"), this._addClass(this.tooltip_max, "top"), this.tooltip_max.style.top = this.tooltip_min.style.top);
        }
      },
      _createHighlightRange: function _createHighlightRange(a, b) {
        return this._isHighlightRange(a, b) ? a > b ? {
          start: b,
          size: a - b
        } : {
          start: a,
          size: b - a
        } : null;
      },
      _isHighlightRange: function _isHighlightRange(a, b) {
        return a >= 0 && 100 >= a && b >= 0 && 100 >= b ? !0 : !1;
      },
      _resize: function _resize(a) {
        this._state.offset = this._offset(this.sliderElem), this._state.size = this.sliderElem[this.sizePos], this._layout();
      },
      _removeProperty: function _removeProperty(a, b) {
        a.style.removeProperty ? a.style.removeProperty(b) : a.style.removeAttribute(b);
      },
      _mousedown: function _mousedown(a) {
        if (!this._state.enabled) return !1;
        a.preventDefault && a.preventDefault(), this._state.offset = this._offset(this.sliderElem), this._state.size = this.sliderElem[this.sizePos];

        var b = this._getPercentage(a);

        if (this.options.range) {
          var c = Math.abs(this._state.percentage[0] - b),
              d = Math.abs(this._state.percentage[1] - b);
          this._state.dragged = d > c ? 0 : 1, this._adjustPercentageForRangeSliders(b);
        } else this._state.dragged = 0;

        this._state.percentage[this._state.dragged] = b, this.touchCapable && (document.removeEventListener("touchmove", this.mousemove, !1), document.removeEventListener("touchend", this.mouseup, !1)), this.mousemove && document.removeEventListener("mousemove", this.mousemove, !1), this.mouseup && document.removeEventListener("mouseup", this.mouseup, !1), this.mousemove = this._mousemove.bind(this), this.mouseup = this._mouseup.bind(this), this.touchCapable && (document.addEventListener("touchmove", this.mousemove, !1), document.addEventListener("touchend", this.mouseup, !1)), document.addEventListener("mousemove", this.mousemove, !1), document.addEventListener("mouseup", this.mouseup, !1), this._state.inDrag = !0;

        var e = this._calculateValue();

        return this._trigger("slideStart", e), this.setValue(e, !1, !0), a.returnValue = !1, this.options.focus && this._triggerFocusOnHandle(this._state.dragged), !0;
      },
      _touchstart: function _touchstart(a) {
        this._mousedown(a);
      },
      _triggerFocusOnHandle: function _triggerFocusOnHandle(a) {
        0 === a && this.handle1.focus(), 1 === a && this.handle2.focus();
      },
      _keydown: function _keydown(a, b) {
        if (!this._state.enabled) return !1;
        var c;

        switch (b.keyCode) {
          case 37:
          case 40:
            c = -1;
            break;

          case 39:
          case 38:
            c = 1;
        }

        if (c) {
          if (this.options.natural_arrow_keys) {
            var d = "horizontal" === this.options.orientation,
                e = "vertical" === this.options.orientation,
                f = this.options.rtl,
                g = this.options.reversed;
            d ? f ? g || (c = -c) : g && (c = -c) : e && (g || (c = -c));
          }

          var h;

          if (this.ticksAreValid && this.options.lock_to_ticks) {
            var i = void 0;
            i = this.options.ticks.indexOf(this._state.value[a]), -1 === i && (i = 0, window.console.warn("(lock_to_ticks) _keydown: index should not be -1")), i += c, i = Math.max(0, Math.min(this.options.ticks.length - 1, i)), h = this.options.ticks[i];
          } else h = this._state.value[a] + c * this.options.step;

          var j = this._toPercentage(h);

          if (this._state.keyCtrl = a, this.options.range) {
            this._adjustPercentageForRangeSliders(j);

            var k = this._state.keyCtrl ? this._state.value[0] : h,
                l = this._state.keyCtrl ? h : this._state.value[1];
            h = [Math.max(this.options.min, Math.min(this.options.max, k)), Math.max(this.options.min, Math.min(this.options.max, l))];
          } else h = Math.max(this.options.min, Math.min(this.options.max, h));

          return this._trigger("slideStart", h), this.setValue(h, !0, !0), this._trigger("slideStop", h), this._pauseEvent(b), delete this._state.keyCtrl, !1;
        }
      },
      _pauseEvent: function _pauseEvent(a) {
        a.stopPropagation && a.stopPropagation(), a.preventDefault && a.preventDefault(), a.cancelBubble = !0, a.returnValue = !1;
      },
      _mousemove: function _mousemove(a) {
        if (!this._state.enabled) return !1;

        var b = this._getPercentage(a);

        this._adjustPercentageForRangeSliders(b), this._state.percentage[this._state.dragged] = b;

        var c = this._calculateValue(!0);

        return this.setValue(c, !0, !0), !1;
      },
      _touchmove: function _touchmove(a) {
        void 0 !== a.changedTouches && a.preventDefault && a.preventDefault();
      },
      _adjustPercentageForRangeSliders: function _adjustPercentageForRangeSliders(a) {
        if (this.options.range) {
          var b = this._getNumDigitsAfterDecimalPlace(a);

          b = b ? b - 1 : 0;

          var c = this._applyToFixedAndParseFloat(a, b);

          0 === this._state.dragged && this._applyToFixedAndParseFloat(this._state.percentage[1], b) < c ? (this._state.percentage[0] = this._state.percentage[1], this._state.dragged = 1) : 1 === this._state.dragged && this._applyToFixedAndParseFloat(this._state.percentage[0], b) > c ? (this._state.percentage[1] = this._state.percentage[0], this._state.dragged = 0) : 0 === this._state.keyCtrl && this._toPercentage(this._state.value[1]) < a ? (this._state.percentage[0] = this._state.percentage[1], this._state.keyCtrl = 1, this.handle2.focus()) : 1 === this._state.keyCtrl && this._toPercentage(this._state.value[0]) > a && (this._state.percentage[1] = this._state.percentage[0], this._state.keyCtrl = 0, this.handle1.focus());
        }
      },
      _mouseup: function _mouseup(a) {
        if (!this._state.enabled) return !1;

        var b = this._getPercentage(a);

        this._adjustPercentageForRangeSliders(b), this._state.percentage[this._state.dragged] = b, this.touchCapable && (document.removeEventListener("touchmove", this.mousemove, !1), document.removeEventListener("touchend", this.mouseup, !1)), document.removeEventListener("mousemove", this.mousemove, !1), document.removeEventListener("mouseup", this.mouseup, !1), this._state.inDrag = !1, this._state.over === !1 && this._hideTooltip();

        var c = this._calculateValue(!0);

        return this.setValue(c, !1, !0), this._trigger("slideStop", c), this._state.dragged = null, !1;
      },
      _setValues: function _setValues(a, b) {
        var c = 0 === a ? 0 : 100;
        this._state.percentage[a] !== c && (b.data[a] = this._toValue(this._state.percentage[a]), b.data[a] = this._applyPrecision(b.data[a]));
      },
      _calculateValue: function _calculateValue(a) {
        var b = {};
        return this.options.range ? (b.data = [this.options.min, this.options.max], this._setValues(0, b), this._setValues(1, b), a && (b.data[0] = this._snapToClosestTick(b.data[0]), b.data[1] = this._snapToClosestTick(b.data[1]))) : (b.data = this._toValue(this._state.percentage[0]), b.data = parseFloat(b.data), b.data = this._applyPrecision(b.data), a && (b.data = this._snapToClosestTick(b.data))), b.data;
      },
      _snapToClosestTick: function _snapToClosestTick(a) {
        for (var b = [a, 1 / 0], c = 0; c < this.options.ticks.length; c++) {
          var d = Math.abs(this.options.ticks[c] - a);
          d <= b[1] && (b = [this.options.ticks[c], d]);
        }

        return b[1] <= this.options.ticks_snap_bounds ? b[0] : a;
      },
      _applyPrecision: function _applyPrecision(a) {
        var b = this.options.precision || this._getNumDigitsAfterDecimalPlace(this.options.step);

        return this._applyToFixedAndParseFloat(a, b);
      },
      _getNumDigitsAfterDecimalPlace: function _getNumDigitsAfterDecimalPlace(a) {
        var b = ("" + a).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
        return b ? Math.max(0, (b[1] ? b[1].length : 0) - (b[2] ? +b[2] : 0)) : 0;
      },
      _applyToFixedAndParseFloat: function _applyToFixedAndParseFloat(a, b) {
        var c = a.toFixed(b);
        return parseFloat(c);
      },
      _getPercentage: function _getPercentage(a) {
        !this.touchCapable || "touchstart" !== a.type && "touchmove" !== a.type && "touchend" !== a.type || (a = a.changedTouches[0]);
        var b = a[this.mousePos],
            c = this._state.offset[this.stylePos],
            d = b - c;
        "right" === this.stylePos && (d = -d);
        var e = d / this._state.size * 100;
        return e = Math.round(e / this._state.percentage[2]) * this._state.percentage[2], this.options.reversed && (e = 100 - e), Math.max(0, Math.min(100, e));
      },
      _validateInputValue: function _validateInputValue(a) {
        if (isNaN(+a)) {
          if (Array.isArray(a)) return this._validateArray(a), a;
          throw new Error(g.formatInvalidInputErrorMsg(a));
        }

        return +a;
      },
      _validateArray: function _validateArray(a) {
        for (var b = 0; b < a.length; b++) {
          var c = a[b];
          if ("number" != typeof c) throw new Error(g.formatInvalidInputErrorMsg(c));
        }
      },
      _setDataVal: function _setDataVal(a) {
        this.element.setAttribute("data-value", a), this.element.setAttribute("value", a), this.element.value = a;
      },
      _trigger: function _trigger(b, c) {
        c = c || 0 === c ? c : void 0;
        var d = this.eventToCallbackMap[b];
        if (d && d.length) for (var e = 0; e < d.length; e++) {
          var f = d[e];
          f(c);
        }
        a && this._triggerJQueryEvent(b, c);
      },
      _triggerJQueryEvent: function _triggerJQueryEvent(a, b) {
        var c = {
          type: a,
          value: b
        };
        this.$element.trigger(c), this.$sliderElem.trigger(c);
      },
      _unbindJQueryEventHandlers: function _unbindJQueryEventHandlers() {
        this.$element.off(), this.$sliderElem.off();
      },
      _setText: function _setText(a, b) {
        "undefined" != typeof a.textContent ? a.textContent = b : "undefined" != typeof a.innerText && (a.innerText = b);
      },
      _removeClass: function _removeClass(a, b) {
        for (var c = b.split(" "), d = a.className, e = 0; e < c.length; e++) {
          var f = c[e],
              g = new RegExp("(?:\\s|^)" + f + "(?:\\s|$)");
          d = d.replace(g, " ");
        }

        a.className = d.trim();
      },
      _addClass: function _addClass(a, b) {
        for (var c = b.split(" "), d = a.className, e = 0; e < c.length; e++) {
          var f = c[e],
              g = new RegExp("(?:\\s|^)" + f + "(?:\\s|$)"),
              h = g.test(d);
          h || (d += " " + f);
        }

        a.className = d.trim();
      },
      _offsetLeft: function _offsetLeft(a) {
        return a.getBoundingClientRect().left;
      },
      _offsetRight: function _offsetRight(a) {
        return a.getBoundingClientRect().right;
      },
      _offsetTop: function _offsetTop(a) {
        for (var b = a.offsetTop; (a = a.offsetParent) && !isNaN(a.offsetTop);) {
          b += a.offsetTop, "BODY" !== a.tagName && (b -= a.scrollTop);
        }

        return b;
      },
      _offset: function _offset(a) {
        return {
          left: this._offsetLeft(a),
          right: this._offsetRight(a),
          top: this._offsetTop(a)
        };
      },
      _css: function _css(b, c, d) {
        if (a) a.style(b, c, d);else {
          var e = c.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function (a, b) {
            return b.toUpperCase();
          });
          b.style[e] = d;
        }
      },
      _toValue: function _toValue(a) {
        return this.options.scale.toValue.apply(this, [a]);
      },
      _toPercentage: function _toPercentage(a) {
        return this.options.scale.toPercentage.apply(this, [a]);
      },
      _setTooltipPosition: function _setTooltipPosition() {
        var a = [this.tooltip, this.tooltip_min, this.tooltip_max];

        if ("vertical" === this.options.orientation) {
          var b;
          b = this.options.tooltip_position ? this.options.tooltip_position : this.options.rtl ? "left" : "right";
          var c = "left" === b ? "right" : "left";
          a.forEach(function (a) {
            this._addClass(a, b), a.style[c] = "100%";
          }.bind(this));
        } else "bottom" === this.options.tooltip_position ? a.forEach(function (a) {
          this._addClass(a, "bottom"), a.style.top = "22px";
        }.bind(this)) : a.forEach(function (a) {
          this._addClass(a, "top"), a.style.top = -this.tooltip.outerHeight - 14 + "px";
        }.bind(this));
      },
      _getClosestTickIndex: function _getClosestTickIndex(a) {
        for (var b = Math.abs(a - this.options.ticks[0]), c = 0, d = 0; d < this.options.ticks.length; ++d) {
          var e = Math.abs(a - this.options.ticks[d]);
          b > e && (b = e, c = d);
        }

        return c;
      },
      _setTickIndex: function _setTickIndex() {
        this.ticksAreValid && (this._state.tickIndex = [this.options.ticks.indexOf(this._state.value[0]), this.options.ticks.indexOf(this._state.value[1])]);
      }
    }, a && a.fn && (a.fn.slider ? (windowIsDefined && window.console.warn("bootstrap-slider.js - WARNING: $.fn.slider namespace is already bound. Use the $.fn.bootstrapSlider namespace instead."), f = c) : (a.bridget(b, d), f = b), a.bridget(c, d), a(function () {
      a("input[data-provide=slider]")[f]();
    }));
  }(a), d;
});
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
* @version: 3.0.5
* @author: Dan Grossman http://www.dangrossman.info/
* @copyright: Copyright (c) 2012-2019 Dan Grossman. All rights reserved.
* @license: Licensed under the MIT license. See http://www.opensource.org/licenses/mit-license.php
* @website: http://www.daterangepicker.com/
*/
// Following the UMD template https://github.com/umdjs/umd/blob/master/templates/returnExportsGlobal.js
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Make globaly available as well
    define(['moment', 'jquery'], function (moment, jquery) {
      if (!jquery.fn) jquery.fn = {}; // webpack server rendering

      if (typeof moment !== 'function' && moment.default) moment = moment.default;
      return factory(moment, jquery);
    });
  } else if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === 'object' && module.exports) {
    // Node / Browserify
    //isomorphic issue
    var jQuery = typeof window != 'undefined' ? window.jQuery : undefined;

    if (!jQuery) {
      jQuery = require('jquery');
      if (!jQuery.fn) jQuery.fn = {};
    }

    var moment = typeof window != 'undefined' && typeof window.moment != 'undefined' ? window.moment : require('moment');
    module.exports = factory(moment, jQuery);
  } else {
    // Browser globals
    root.daterangepicker = factory(root.moment, root.jQuery);
  }
})(void 0, function (moment, $) {
  var DateRangePicker = function DateRangePicker(element, options, cb) {
    //default settings for options
    this.parentEl = 'body';
    this.element = $(element);
    this.startDate = moment().startOf('day');
    this.endDate = moment().endOf('day');
    this.minDate = false;
    this.maxDate = false;
    this.maxSpan = false;
    this.autoApply = false;
    this.singleDatePicker = false;
    this.showDropdowns = false;
    this.minYear = moment().subtract(100, 'year').format('YYYY');
    this.maxYear = moment().add(100, 'year').format('YYYY');
    this.showWeekNumbers = false;
    this.showISOWeekNumbers = false;
    this.showCustomRangeLabel = true;
    this.timePicker = false;
    this.timePicker24Hour = false;
    this.timePickerIncrement = 1;
    this.timePickerSeconds = false;
    this.linkedCalendars = true;
    this.autoUpdateInput = true;
    this.alwaysShowCalendars = false;
    this.ranges = {};
    this.opens = 'right';
    if (this.element.hasClass('pull-right')) this.opens = 'left';
    this.drops = 'down';
    if (this.element.hasClass('dropup')) this.drops = 'up';
    this.buttonClasses = 'btn btn-sm';
    this.applyButtonClasses = 'btn-primary';
    this.cancelButtonClasses = 'btn-default';
    this.locale = {
      direction: 'ltr',
      format: moment.localeData().longDateFormat('L'),
      separator: ' - ',
      applyLabel: 'Apply',
      cancelLabel: 'Cancel',
      weekLabel: 'W',
      customRangeLabel: 'Custom Range',
      daysOfWeek: moment.weekdaysMin(),
      monthNames: moment.monthsShort(),
      firstDay: moment.localeData().firstDayOfWeek()
    };

    this.callback = function () {}; //some state information


    this.isShowing = false;
    this.leftCalendar = {};
    this.rightCalendar = {}; //custom options from user

    if (_typeof(options) !== 'object' || options === null) options = {}; //allow setting options with data attributes
    //data-api options will be overwritten with custom javascript options

    options = $.extend(this.element.data(), options); //html template for the picker UI

    if (typeof options.template !== 'string' && !(options.template instanceof $)) options.template = '<div class="daterangepicker">' + '<div class="ranges"></div>' + '<div class="drp-calendar left">' + '<div class="calendar-table"></div>' + '<div class="calendar-time"></div>' + '</div>' + '<div class="drp-calendar right">' + '<div class="calendar-table"></div>' + '<div class="calendar-time"></div>' + '</div>' + '<div class="drp-buttons">' + '<span class="drp-selected"></span>' + '<button class="cancelBtn" type="button"></button>' + '<button class="applyBtn" disabled="disabled" type="button"></button> ' + '</div>' + '</div>';
    this.parentEl = options.parentEl && $(options.parentEl).length ? $(options.parentEl) : $(this.parentEl);
    this.container = $(options.template).appendTo(this.parentEl); //
    // handle all the possible options overriding defaults
    //

    if (_typeof(options.locale) === 'object') {
      if (typeof options.locale.direction === 'string') this.locale.direction = options.locale.direction;
      if (typeof options.locale.format === 'string') this.locale.format = options.locale.format;
      if (typeof options.locale.separator === 'string') this.locale.separator = options.locale.separator;
      if (_typeof(options.locale.daysOfWeek) === 'object') this.locale.daysOfWeek = options.locale.daysOfWeek.slice();
      if (_typeof(options.locale.monthNames) === 'object') this.locale.monthNames = options.locale.monthNames.slice();
      if (typeof options.locale.firstDay === 'number') this.locale.firstDay = options.locale.firstDay;
      if (typeof options.locale.applyLabel === 'string') this.locale.applyLabel = options.locale.applyLabel;
      if (typeof options.locale.cancelLabel === 'string') this.locale.cancelLabel = options.locale.cancelLabel;
      if (typeof options.locale.weekLabel === 'string') this.locale.weekLabel = options.locale.weekLabel;

      if (typeof options.locale.customRangeLabel === 'string') {
        //Support unicode chars in the custom range name.
        var elem = document.createElement('textarea');
        elem.innerHTML = options.locale.customRangeLabel;
        var rangeHtml = elem.value;
        this.locale.customRangeLabel = rangeHtml;
      }
    }

    this.container.addClass(this.locale.direction);
    if (typeof options.startDate === 'string') this.startDate = moment(options.startDate, this.locale.format);
    if (typeof options.endDate === 'string') this.endDate = moment(options.endDate, this.locale.format);
    if (typeof options.minDate === 'string') this.minDate = moment(options.minDate, this.locale.format);
    if (typeof options.maxDate === 'string') this.maxDate = moment(options.maxDate, this.locale.format);
    if (_typeof(options.startDate) === 'object') this.startDate = moment(options.startDate);
    if (_typeof(options.endDate) === 'object') this.endDate = moment(options.endDate);
    if (_typeof(options.minDate) === 'object') this.minDate = moment(options.minDate);
    if (_typeof(options.maxDate) === 'object') this.maxDate = moment(options.maxDate); // sanity check for bad options

    if (this.minDate && this.startDate.isBefore(this.minDate)) this.startDate = this.minDate.clone(); // sanity check for bad options

    if (this.maxDate && this.endDate.isAfter(this.maxDate)) this.endDate = this.maxDate.clone();
    if (typeof options.applyButtonClasses === 'string') this.applyButtonClasses = options.applyButtonClasses;
    if (typeof options.applyClass === 'string') //backwards compat
      this.applyButtonClasses = options.applyClass;
    if (typeof options.cancelButtonClasses === 'string') this.cancelButtonClasses = options.cancelButtonClasses;
    if (typeof options.cancelClass === 'string') //backwards compat
      this.cancelButtonClasses = options.cancelClass;
    if (_typeof(options.maxSpan) === 'object') this.maxSpan = options.maxSpan;
    if (_typeof(options.dateLimit) === 'object') //backwards compat
      this.maxSpan = options.dateLimit;
    if (typeof options.opens === 'string') this.opens = options.opens;
    if (typeof options.drops === 'string') this.drops = options.drops;
    if (typeof options.showWeekNumbers === 'boolean') this.showWeekNumbers = options.showWeekNumbers;
    if (typeof options.showISOWeekNumbers === 'boolean') this.showISOWeekNumbers = options.showISOWeekNumbers;
    if (typeof options.buttonClasses === 'string') this.buttonClasses = options.buttonClasses;
    if (_typeof(options.buttonClasses) === 'object') this.buttonClasses = options.buttonClasses.join(' ');
    if (typeof options.showDropdowns === 'boolean') this.showDropdowns = options.showDropdowns;
    if (typeof options.minYear === 'number') this.minYear = options.minYear;
    if (typeof options.maxYear === 'number') this.maxYear = options.maxYear;
    if (typeof options.showCustomRangeLabel === 'boolean') this.showCustomRangeLabel = options.showCustomRangeLabel;

    if (typeof options.singleDatePicker === 'boolean') {
      this.singleDatePicker = options.singleDatePicker;
      if (this.singleDatePicker) this.endDate = this.startDate.clone();
    }

    if (typeof options.timePicker === 'boolean') this.timePicker = options.timePicker;
    if (typeof options.timePickerSeconds === 'boolean') this.timePickerSeconds = options.timePickerSeconds;
    if (typeof options.timePickerIncrement === 'number') this.timePickerIncrement = options.timePickerIncrement;
    if (typeof options.timePicker24Hour === 'boolean') this.timePicker24Hour = options.timePicker24Hour;
    if (typeof options.autoApply === 'boolean') this.autoApply = options.autoApply;
    if (typeof options.autoUpdateInput === 'boolean') this.autoUpdateInput = options.autoUpdateInput;
    if (typeof options.linkedCalendars === 'boolean') this.linkedCalendars = options.linkedCalendars;
    if (typeof options.isInvalidDate === 'function') this.isInvalidDate = options.isInvalidDate;
    if (typeof options.isCustomDate === 'function') this.isCustomDate = options.isCustomDate;
    if (typeof options.alwaysShowCalendars === 'boolean') this.alwaysShowCalendars = options.alwaysShowCalendars; // update day names order to firstDay

    if (this.locale.firstDay != 0) {
      var iterator = this.locale.firstDay;

      while (iterator > 0) {
        this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift());
        iterator--;
      }
    }

    var start, end, range; //if no start/end dates set, check if an input element contains initial values

    if (typeof options.startDate === 'undefined' && typeof options.endDate === 'undefined') {
      if ($(this.element).is(':text')) {
        var val = $(this.element).val(),
            split = val.split(this.locale.separator);
        start = end = null;

        if (split.length == 2) {
          start = moment(split[0], this.locale.format);
          end = moment(split[1], this.locale.format);
        } else if (this.singleDatePicker && val !== "") {
          start = moment(val, this.locale.format);
          end = moment(val, this.locale.format);
        }

        if (start !== null && end !== null) {
          this.setStartDate(start);
          this.setEndDate(end);
        }
      }
    }

    if (_typeof(options.ranges) === 'object') {
      for (range in options.ranges) {
        if (typeof options.ranges[range][0] === 'string') start = moment(options.ranges[range][0], this.locale.format);else start = moment(options.ranges[range][0]);
        if (typeof options.ranges[range][1] === 'string') end = moment(options.ranges[range][1], this.locale.format);else end = moment(options.ranges[range][1]); // If the start or end date exceed those allowed by the minDate or maxSpan
        // options, shorten the range to the allowable period.

        if (this.minDate && start.isBefore(this.minDate)) start = this.minDate.clone();
        var maxDate = this.maxDate;
        if (this.maxSpan && maxDate && start.clone().add(this.maxSpan).isAfter(maxDate)) maxDate = start.clone().add(this.maxSpan);
        if (maxDate && end.isAfter(maxDate)) end = maxDate.clone(); // If the end of the range is before the minimum or the start of the range is
        // after the maximum, don't display this range option at all.

        if (this.minDate && end.isBefore(this.minDate, this.timepicker ? 'minute' : 'day') || maxDate && start.isAfter(maxDate, this.timepicker ? 'minute' : 'day')) continue; //Support unicode chars in the range names.

        var elem = document.createElement('textarea');
        elem.innerHTML = range;
        var rangeHtml = elem.value;
        this.ranges[rangeHtml] = [start, end];
      }

      var list = '<ul>';

      for (range in this.ranges) {
        list += '<li data-range-key="' + range + '">' + range + '</li>';
      }

      if (this.showCustomRangeLabel) {
        list += '<li data-range-key="' + this.locale.customRangeLabel + '">' + this.locale.customRangeLabel + '</li>';
      }

      list += '</ul>';
      this.container.find('.ranges').prepend(list);
    }

    if (typeof cb === 'function') {
      this.callback = cb;
    }

    if (!this.timePicker) {
      this.startDate = this.startDate.startOf('day');
      this.endDate = this.endDate.endOf('day');
      this.container.find('.calendar-time').hide();
    } //can't be used together for now


    if (this.timePicker && this.autoApply) this.autoApply = false;

    if (this.autoApply) {
      this.container.addClass('auto-apply');
    }

    if (_typeof(options.ranges) === 'object') this.container.addClass('show-ranges');

    if (this.singleDatePicker) {
      this.container.addClass('single');
      this.container.find('.drp-calendar.left').addClass('single');
      this.container.find('.drp-calendar.left').show();
      this.container.find('.drp-calendar.right').hide();

      if (!this.timePicker) {
        this.container.addClass('auto-apply');
      }
    }

    if (typeof options.ranges === 'undefined' && !this.singleDatePicker || this.alwaysShowCalendars) {
      this.container.addClass('show-calendar');
    }

    this.container.addClass('opens' + this.opens); //apply CSS classes and labels to buttons

    this.container.find('.applyBtn, .cancelBtn').addClass(this.buttonClasses);
    if (this.applyButtonClasses.length) this.container.find('.applyBtn').addClass(this.applyButtonClasses);
    if (this.cancelButtonClasses.length) this.container.find('.cancelBtn').addClass(this.cancelButtonClasses);
    this.container.find('.applyBtn').html(this.locale.applyLabel);
    this.container.find('.cancelBtn').html(this.locale.cancelLabel); //
    // event listeners
    //

    this.container.find('.drp-calendar').on('click.daterangepicker', '.prev', $.proxy(this.clickPrev, this)).on('click.daterangepicker', '.next', $.proxy(this.clickNext, this)).on('mousedown.daterangepicker', 'td.available', $.proxy(this.clickDate, this)).on('mouseenter.daterangepicker', 'td.available', $.proxy(this.hoverDate, this)).on('change.daterangepicker', 'select.yearselect', $.proxy(this.monthOrYearChanged, this)).on('change.daterangepicker', 'select.monthselect', $.proxy(this.monthOrYearChanged, this)).on('change.daterangepicker', 'select.hourselect,select.minuteselect,select.secondselect,select.ampmselect', $.proxy(this.timeChanged, this));
    this.container.find('.ranges').on('click.daterangepicker', 'li', $.proxy(this.clickRange, this));
    this.container.find('.drp-buttons').on('click.daterangepicker', 'button.applyBtn', $.proxy(this.clickApply, this)).on('click.daterangepicker', 'button.cancelBtn', $.proxy(this.clickCancel, this));

    if (this.element.is('input') || this.element.is('button')) {
      this.element.on({
        'click.daterangepicker': $.proxy(this.show, this),
        'focus.daterangepicker': $.proxy(this.show, this),
        'keyup.daterangepicker': $.proxy(this.elementChanged, this),
        'keydown.daterangepicker': $.proxy(this.keydown, this) //IE 11 compatibility

      });
    } else {
      this.element.on('click.daterangepicker', $.proxy(this.toggle, this));
      this.element.on('keydown.daterangepicker', $.proxy(this.toggle, this));
    } //
    // if attached to a text input, set the initial value
    //


    this.updateElement();
  };

  DateRangePicker.prototype = {
    constructor: DateRangePicker,
    setStartDate: function setStartDate(startDate) {
      if (typeof startDate === 'string') this.startDate = moment(startDate, this.locale.format);
      if (_typeof(startDate) === 'object') this.startDate = moment(startDate);
      if (!this.timePicker) this.startDate = this.startDate.startOf('day');
      if (this.timePicker && this.timePickerIncrement) this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);

      if (this.minDate && this.startDate.isBefore(this.minDate)) {
        this.startDate = this.minDate.clone();
        if (this.timePicker && this.timePickerIncrement) this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);
      }

      if (this.maxDate && this.startDate.isAfter(this.maxDate)) {
        this.startDate = this.maxDate.clone();
        if (this.timePicker && this.timePickerIncrement) this.startDate.minute(Math.floor(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);
      }

      if (!this.isShowing) this.updateElement();
      this.updateMonthsInView();
    },
    setEndDate: function setEndDate(endDate) {
      if (typeof endDate === 'string') this.endDate = moment(endDate, this.locale.format);
      if (_typeof(endDate) === 'object') this.endDate = moment(endDate);
      if (!this.timePicker) this.endDate = this.endDate.endOf('day');
      if (this.timePicker && this.timePickerIncrement) this.endDate.minute(Math.round(this.endDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);
      if (this.endDate.isBefore(this.startDate)) this.endDate = this.startDate.clone();
      if (this.maxDate && this.endDate.isAfter(this.maxDate)) this.endDate = this.maxDate.clone();
      if (this.maxSpan && this.startDate.clone().add(this.maxSpan).isBefore(this.endDate)) this.endDate = this.startDate.clone().add(this.maxSpan);
      this.previousRightTime = this.endDate.clone();
      this.container.find('.drp-selected').html(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format));
      if (!this.isShowing) this.updateElement();
      this.updateMonthsInView();
    },
    isInvalidDate: function isInvalidDate() {
      return false;
    },
    isCustomDate: function isCustomDate() {
      return false;
    },
    updateView: function updateView() {
      if (this.timePicker) {
        this.renderTimePicker('left');
        this.renderTimePicker('right');

        if (!this.endDate) {
          this.container.find('.right .calendar-time select').prop('disabled', true).addClass('disabled');
        } else {
          this.container.find('.right .calendar-time select').prop('disabled', false).removeClass('disabled');
        }
      }

      if (this.endDate) this.container.find('.drp-selected').html(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format));
      this.updateMonthsInView();
      this.updateCalendars();
      this.updateFormInputs();
    },
    updateMonthsInView: function updateMonthsInView() {
      if (this.endDate) {
        //if both dates are visible already, do nothing
        if (!this.singleDatePicker && this.leftCalendar.month && this.rightCalendar.month && (this.startDate.format('YYYY-MM') == this.leftCalendar.month.format('YYYY-MM') || this.startDate.format('YYYY-MM') == this.rightCalendar.month.format('YYYY-MM')) && (this.endDate.format('YYYY-MM') == this.leftCalendar.month.format('YYYY-MM') || this.endDate.format('YYYY-MM') == this.rightCalendar.month.format('YYYY-MM'))) {
          return;
        }

        this.leftCalendar.month = this.startDate.clone().date(2);

        if (!this.linkedCalendars && (this.endDate.month() != this.startDate.month() || this.endDate.year() != this.startDate.year())) {
          this.rightCalendar.month = this.endDate.clone().date(2);
        } else {
          this.rightCalendar.month = this.startDate.clone().date(2).add(1, 'month');
        }
      } else {
        if (this.leftCalendar.month.format('YYYY-MM') != this.startDate.format('YYYY-MM') && this.rightCalendar.month.format('YYYY-MM') != this.startDate.format('YYYY-MM')) {
          this.leftCalendar.month = this.startDate.clone().date(2);
          this.rightCalendar.month = this.startDate.clone().date(2).add(1, 'month');
        }
      }

      if (this.maxDate && this.linkedCalendars && !this.singleDatePicker && this.rightCalendar.month > this.maxDate) {
        this.rightCalendar.month = this.maxDate.clone().date(2);
        this.leftCalendar.month = this.maxDate.clone().date(2).subtract(1, 'month');
      }
    },
    updateCalendars: function updateCalendars() {
      if (this.timePicker) {
        var hour, minute, second;

        if (this.endDate) {
          hour = parseInt(this.container.find('.left .hourselect').val(), 10);
          minute = parseInt(this.container.find('.left .minuteselect').val(), 10);

          if (isNaN(minute)) {
            minute = parseInt(this.container.find('.left .minuteselect option:last').val(), 10);
          }

          second = this.timePickerSeconds ? parseInt(this.container.find('.left .secondselect').val(), 10) : 0;

          if (!this.timePicker24Hour) {
            var ampm = this.container.find('.left .ampmselect').val();
            if (ampm === 'PM' && hour < 12) hour += 12;
            if (ampm === 'AM' && hour === 12) hour = 0;
          }
        } else {
          hour = parseInt(this.container.find('.right .hourselect').val(), 10);
          minute = parseInt(this.container.find('.right .minuteselect').val(), 10);

          if (isNaN(minute)) {
            minute = parseInt(this.container.find('.right .minuteselect option:last').val(), 10);
          }

          second = this.timePickerSeconds ? parseInt(this.container.find('.right .secondselect').val(), 10) : 0;

          if (!this.timePicker24Hour) {
            var ampm = this.container.find('.right .ampmselect').val();
            if (ampm === 'PM' && hour < 12) hour += 12;
            if (ampm === 'AM' && hour === 12) hour = 0;
          }
        }

        this.leftCalendar.month.hour(hour).minute(minute).second(second);
        this.rightCalendar.month.hour(hour).minute(minute).second(second);
      }

      this.renderCalendar('left');
      this.renderCalendar('right'); //highlight any predefined range matching the current start and end dates

      this.container.find('.ranges li').removeClass('active');
      if (this.endDate == null) return;
      this.calculateChosenLabel();
    },
    renderCalendar: function renderCalendar(side) {
      //
      // Build the matrix of dates that will populate the calendar
      //
      var calendar = side == 'left' ? this.leftCalendar : this.rightCalendar;
      var month = calendar.month.month();
      var year = calendar.month.year();
      var hour = calendar.month.hour();
      var minute = calendar.month.minute();
      var second = calendar.month.second();
      var daysInMonth = moment([year, month]).daysInMonth();
      var firstDay = moment([year, month, 1]);
      var lastDay = moment([year, month, daysInMonth]);
      var lastMonth = moment(firstDay).subtract(1, 'month').month();
      var lastYear = moment(firstDay).subtract(1, 'month').year();
      var daysInLastMonth = moment([lastYear, lastMonth]).daysInMonth();
      var dayOfWeek = firstDay.day(); //initialize a 6 rows x 7 columns array for the calendar

      var calendar = [];
      calendar.firstDay = firstDay;
      calendar.lastDay = lastDay;

      for (var i = 0; i < 6; i++) {
        calendar[i] = [];
      } //populate the calendar with date objects


      var startDay = daysInLastMonth - dayOfWeek + this.locale.firstDay + 1;
      if (startDay > daysInLastMonth) startDay -= 7;
      if (dayOfWeek == this.locale.firstDay) startDay = daysInLastMonth - 6;
      var curDate = moment([lastYear, lastMonth, startDay, 12, minute, second]);
      var col, row;

      for (var i = 0, col = 0, row = 0; i < 42; i++, col++, curDate = moment(curDate).add(24, 'hour')) {
        if (i > 0 && col % 7 === 0) {
          col = 0;
          row++;
        }

        calendar[row][col] = curDate.clone().hour(hour).minute(minute).second(second);
        curDate.hour(12);

        if (this.minDate && calendar[row][col].format('YYYY-MM-DD') == this.minDate.format('YYYY-MM-DD') && calendar[row][col].isBefore(this.minDate) && side == 'left') {
          calendar[row][col] = this.minDate.clone();
        }

        if (this.maxDate && calendar[row][col].format('YYYY-MM-DD') == this.maxDate.format('YYYY-MM-DD') && calendar[row][col].isAfter(this.maxDate) && side == 'right') {
          calendar[row][col] = this.maxDate.clone();
        }
      } //make the calendar object available to hoverDate/clickDate


      if (side == 'left') {
        this.leftCalendar.calendar = calendar;
      } else {
        this.rightCalendar.calendar = calendar;
      } //
      // Display the calendar
      //


      var minDate = side == 'left' ? this.minDate : this.startDate;
      var maxDate = this.maxDate;
      var selected = side == 'left' ? this.startDate : this.endDate;
      var arrow = this.locale.direction == 'ltr' ? {
        left: 'chevron-left',
        right: 'chevron-right'
      } : {
        left: 'chevron-right',
        right: 'chevron-left'
      };
      var html = '<table class="table-condensed">';
      html += '<thead>';
      html += '<tr>'; // add empty cell for week number

      if (this.showWeekNumbers || this.showISOWeekNumbers) html += '<th></th>';

      if ((!minDate || minDate.isBefore(calendar.firstDay)) && (!this.linkedCalendars || side == 'left')) {
        html += '<th class="prev available"><span></span></th>';
      } else {
        html += '<th></th>';
      }

      var dateHtml = this.locale.monthNames[calendar[1][1].month()] + calendar[1][1].format(" YYYY");

      if (this.showDropdowns) {
        var currentMonth = calendar[1][1].month();
        var currentYear = calendar[1][1].year();
        var maxYear = maxDate && maxDate.year() || this.maxYear;
        var minYear = minDate && minDate.year() || this.minYear;
        var inMinYear = currentYear == minYear;
        var inMaxYear = currentYear == maxYear;
        var monthHtml = '<select class="monthselect">';

        for (var m = 0; m < 12; m++) {
          if ((!inMinYear || minDate && m >= minDate.month()) && (!inMaxYear || maxDate && m <= maxDate.month())) {
            monthHtml += "<option value='" + m + "'" + (m === currentMonth ? " selected='selected'" : "") + ">" + this.locale.monthNames[m] + "</option>";
          } else {
            monthHtml += "<option value='" + m + "'" + (m === currentMonth ? " selected='selected'" : "") + " disabled='disabled'>" + this.locale.monthNames[m] + "</option>";
          }
        }

        monthHtml += "</select>";
        var yearHtml = '<select class="yearselect">';

        for (var y = minYear; y <= maxYear; y++) {
          yearHtml += '<option value="' + y + '"' + (y === currentYear ? ' selected="selected"' : '') + '>' + y + '</option>';
        }

        yearHtml += '</select>';
        dateHtml = monthHtml + yearHtml;
      }

      html += '<th colspan="5" class="month">' + dateHtml + '</th>';

      if ((!maxDate || maxDate.isAfter(calendar.lastDay)) && (!this.linkedCalendars || side == 'right' || this.singleDatePicker)) {
        html += '<th class="next available"><span></span></th>';
      } else {
        html += '<th></th>';
      }

      html += '</tr>';
      html += '<tr>'; // add week number label

      if (this.showWeekNumbers || this.showISOWeekNumbers) html += '<th class="week">' + this.locale.weekLabel + '</th>';
      $.each(this.locale.daysOfWeek, function (index, dayOfWeek) {
        html += '<th>' + dayOfWeek + '</th>';
      });
      html += '</tr>';
      html += '</thead>';
      html += '<tbody>'; //adjust maxDate to reflect the maxSpan setting in order to
      //grey out end dates beyond the maxSpan

      if (this.endDate == null && this.maxSpan) {
        var maxLimit = this.startDate.clone().add(this.maxSpan).endOf('day');

        if (!maxDate || maxLimit.isBefore(maxDate)) {
          maxDate = maxLimit;
        }
      }

      for (var row = 0; row < 6; row++) {
        html += '<tr>'; // add week number

        if (this.showWeekNumbers) html += '<td class="week">' + calendar[row][0].week() + '</td>';else if (this.showISOWeekNumbers) html += '<td class="week">' + calendar[row][0].isoWeek() + '</td>';

        for (var col = 0; col < 7; col++) {
          var classes = []; //highlight today's date

          if (calendar[row][col].isSame(new Date(), "day")) classes.push('today'); //highlight weekends

          if (calendar[row][col].isoWeekday() > 5) classes.push('weekend'); //grey out the dates in other months displayed at beginning and end of this calendar

          if (calendar[row][col].month() != calendar[1][1].month()) classes.push('off', 'ends'); //don't allow selection of dates before the minimum date

          if (this.minDate && calendar[row][col].isBefore(this.minDate, 'day')) classes.push('off', 'disabled'); //don't allow selection of dates after the maximum date

          if (maxDate && calendar[row][col].isAfter(maxDate, 'day')) classes.push('off', 'disabled'); //don't allow selection of date if a custom function decides it's invalid

          if (this.isInvalidDate(calendar[row][col])) classes.push('off', 'disabled'); //highlight the currently selected start date

          if (calendar[row][col].format('YYYY-MM-DD') == this.startDate.format('YYYY-MM-DD')) classes.push('active', 'start-date'); //highlight the currently selected end date

          if (this.endDate != null && calendar[row][col].format('YYYY-MM-DD') == this.endDate.format('YYYY-MM-DD')) classes.push('active', 'end-date'); //highlight dates in-between the selected dates

          if (this.endDate != null && calendar[row][col] > this.startDate && calendar[row][col] < this.endDate) classes.push('in-range'); //apply custom classes for this date

          var isCustom = this.isCustomDate(calendar[row][col]);

          if (isCustom !== false) {
            if (typeof isCustom === 'string') classes.push(isCustom);else Array.prototype.push.apply(classes, isCustom);
          }

          var cname = '',
              disabled = false;

          for (var i = 0; i < classes.length; i++) {
            cname += classes[i] + ' ';
            if (classes[i] == 'disabled') disabled = true;
          }

          if (!disabled) cname += 'available';
          html += '<td class="' + cname.replace(/^\s+|\s+$/g, '') + '" data-title="' + 'r' + row + 'c' + col + '">' + calendar[row][col].date() + '</td>';
        }

        html += '</tr>';
      }

      html += '</tbody>';
      html += '</table>';
      this.container.find('.drp-calendar.' + side + ' .calendar-table').html(html);
    },
    renderTimePicker: function renderTimePicker(side) {
      // Don't bother updating the time picker if it's currently disabled
      // because an end date hasn't been clicked yet
      if (side == 'right' && !this.endDate) return;
      var html,
          selected,
          minDate,
          maxDate = this.maxDate;
      if (this.maxSpan && (!this.maxDate || this.startDate.clone().add(this.maxSpan).isBefore(this.maxDate))) maxDate = this.startDate.clone().add(this.maxSpan);

      if (side == 'left') {
        selected = this.startDate.clone();
        minDate = this.minDate;
      } else if (side == 'right') {
        selected = this.endDate.clone();
        minDate = this.startDate; //Preserve the time already selected

        var timeSelector = this.container.find('.drp-calendar.right .calendar-time');

        if (timeSelector.html() != '') {
          selected.hour(!isNaN(selected.hour()) ? selected.hour() : timeSelector.find('.hourselect option:selected').val());
          selected.minute(!isNaN(selected.minute()) ? selected.minute() : timeSelector.find('.minuteselect option:selected').val());
          selected.second(!isNaN(selected.second()) ? selected.second() : timeSelector.find('.secondselect option:selected').val());

          if (!this.timePicker24Hour) {
            var ampm = timeSelector.find('.ampmselect option:selected').val();
            if (ampm === 'PM' && selected.hour() < 12) selected.hour(selected.hour() + 12);
            if (ampm === 'AM' && selected.hour() === 12) selected.hour(0);
          }
        }

        if (selected.isBefore(this.startDate)) selected = this.startDate.clone();
        if (maxDate && selected.isAfter(maxDate)) selected = maxDate.clone();
      } //
      // hours
      //


      html = '<select class="hourselect">';
      var start = this.timePicker24Hour ? 0 : 1;
      var end = this.timePicker24Hour ? 23 : 12;

      for (var i = start; i <= end; i++) {
        var i_in_24 = i;
        if (!this.timePicker24Hour) i_in_24 = selected.hour() >= 12 ? i == 12 ? 12 : i + 12 : i == 12 ? 0 : i;
        var time = selected.clone().hour(i_in_24);
        var disabled = false;
        if (minDate && time.minute(59).isBefore(minDate)) disabled = true;
        if (maxDate && time.minute(0).isAfter(maxDate)) disabled = true;

        if (i_in_24 == selected.hour() && !disabled) {
          html += '<option value="' + i + '" selected="selected">' + i + '</option>';
        } else if (disabled) {
          html += '<option value="' + i + '" disabled="disabled" class="disabled">' + i + '</option>';
        } else {
          html += '<option value="' + i + '">' + i + '</option>';
        }
      }

      html += '</select> '; //
      // minutes
      //

      html += ': <select class="minuteselect">';

      for (var i = 0; i < 60; i += this.timePickerIncrement) {
        var padded = i < 10 ? '0' + i : i;
        var time = selected.clone().minute(i);
        var disabled = false;
        if (minDate && time.second(59).isBefore(minDate)) disabled = true;
        if (maxDate && time.second(0).isAfter(maxDate)) disabled = true;

        if (selected.minute() == i && !disabled) {
          html += '<option value="' + i + '" selected="selected">' + padded + '</option>';
        } else if (disabled) {
          html += '<option value="' + i + '" disabled="disabled" class="disabled">' + padded + '</option>';
        } else {
          html += '<option value="' + i + '">' + padded + '</option>';
        }
      }

      html += '</select> '; //
      // seconds
      //

      if (this.timePickerSeconds) {
        html += ': <select class="secondselect">';

        for (var i = 0; i < 60; i++) {
          var padded = i < 10 ? '0' + i : i;
          var time = selected.clone().second(i);
          var disabled = false;
          if (minDate && time.isBefore(minDate)) disabled = true;
          if (maxDate && time.isAfter(maxDate)) disabled = true;

          if (selected.second() == i && !disabled) {
            html += '<option value="' + i + '" selected="selected">' + padded + '</option>';
          } else if (disabled) {
            html += '<option value="' + i + '" disabled="disabled" class="disabled">' + padded + '</option>';
          } else {
            html += '<option value="' + i + '">' + padded + '</option>';
          }
        }

        html += '</select> ';
      } //
      // AM/PM
      //


      if (!this.timePicker24Hour) {
        html += '<select class="ampmselect">';
        var am_html = '';
        var pm_html = '';
        if (minDate && selected.clone().hour(12).minute(0).second(0).isBefore(minDate)) am_html = ' disabled="disabled" class="disabled"';
        if (maxDate && selected.clone().hour(0).minute(0).second(0).isAfter(maxDate)) pm_html = ' disabled="disabled" class="disabled"';

        if (selected.hour() >= 12) {
          html += '<option value="AM"' + am_html + '>AM</option><option value="PM" selected="selected"' + pm_html + '>PM</option>';
        } else {
          html += '<option value="AM" selected="selected"' + am_html + '>AM</option><option value="PM"' + pm_html + '>PM</option>';
        }

        html += '</select>';
      }

      this.container.find('.drp-calendar.' + side + ' .calendar-time').html(html);
    },
    updateFormInputs: function updateFormInputs() {
      if (this.singleDatePicker || this.endDate && (this.startDate.isBefore(this.endDate) || this.startDate.isSame(this.endDate))) {
        this.container.find('button.applyBtn').prop('disabled', false);
      } else {
        this.container.find('button.applyBtn').prop('disabled', true);
      }
    },
    move: function move() {
      var parentOffset = {
        top: 0,
        left: 0
      },
          containerTop;
      var parentRightEdge = $(window).width();

      if (!this.parentEl.is('body')) {
        parentOffset = {
          top: this.parentEl.offset().top - this.parentEl.scrollTop(),
          left: this.parentEl.offset().left - this.parentEl.scrollLeft()
        };
        parentRightEdge = this.parentEl[0].clientWidth + this.parentEl.offset().left;
      }

      if (this.drops == 'up') containerTop = this.element.offset().top - this.container.outerHeight() - parentOffset.top;else containerTop = this.element.offset().top + this.element.outerHeight() - parentOffset.top; // Force the container to it's actual width

      this.container.css({
        top: 0,
        left: 0,
        right: 'auto'
      });
      var containerWidth = this.container.outerWidth();
      this.container[this.drops == 'up' ? 'addClass' : 'removeClass']('drop-up');

      if (this.opens == 'left') {
        var containerRight = parentRightEdge - this.element.offset().left - this.element.outerWidth();

        if (containerWidth + containerRight > $(window).width()) {
          this.container.css({
            top: containerTop,
            right: 'auto',
            left: 9
          });
        } else {
          this.container.css({
            top: containerTop,
            right: containerRight,
            left: 'auto'
          });
        }
      } else if (this.opens == 'center') {
        var containerLeft = this.element.offset().left - parentOffset.left + this.element.outerWidth() / 2 - containerWidth / 2;

        if (containerLeft < 0) {
          this.container.css({
            top: containerTop,
            right: 'auto',
            left: 9
          });
        } else if (containerLeft + containerWidth > $(window).width()) {
          this.container.css({
            top: containerTop,
            left: 'auto',
            right: 0
          });
        } else {
          this.container.css({
            top: containerTop,
            left: containerLeft,
            right: 'auto'
          });
        }
      } else {
        var containerLeft = this.element.offset().left - parentOffset.left;

        if (containerLeft + containerWidth > $(window).width()) {
          this.container.css({
            top: containerTop,
            left: 'auto',
            right: 0
          });
        } else {
          this.container.css({
            top: containerTop,
            left: containerLeft,
            right: 'auto'
          });
        }
      }
    },
    show: function show(e) {
      if (this.isShowing) return; // Create a click proxy that is private to this instance of datepicker, for unbinding

      this._outsideClickProxy = $.proxy(function (e) {
        this.outsideClick(e);
      }, this); // Bind global datepicker mousedown for hiding and

      $(document).on('mousedown.daterangepicker', this._outsideClickProxy) // also support mobile devices
      .on('touchend.daterangepicker', this._outsideClickProxy) // also explicitly play nice with Bootstrap dropdowns, which stopPropagation when clicking them
      .on('click.daterangepicker', '[data-toggle=dropdown]', this._outsideClickProxy) // and also close when focus changes to outside the picker (eg. tabbing between controls)
      .on('focusin.daterangepicker', this._outsideClickProxy); // Reposition the picker if the window is resized while it's open

      $(window).on('resize.daterangepicker', $.proxy(function (e) {
        this.move(e);
      }, this));
      this.oldStartDate = this.startDate.clone();
      this.oldEndDate = this.endDate.clone();
      this.previousRightTime = this.endDate.clone();
      this.updateView();
      this.container.show();
      this.move();
      this.element.trigger('show.daterangepicker', this);
      this.isShowing = true;
    },
    hide: function hide(e) {
      if (!this.isShowing) return; //incomplete date selection, revert to last values

      if (!this.endDate) {
        this.startDate = this.oldStartDate.clone();
        this.endDate = this.oldEndDate.clone();
      } //if a new date range was selected, invoke the user callback function


      if (!this.startDate.isSame(this.oldStartDate) || !this.endDate.isSame(this.oldEndDate)) this.callback(this.startDate.clone(), this.endDate.clone(), this.chosenLabel); //if picker is attached to a text input, update it

      this.updateElement();
      $(document).off('.daterangepicker');
      $(window).off('.daterangepicker');
      this.container.hide();
      this.element.trigger('hide.daterangepicker', this);
      this.isShowing = false;
    },
    toggle: function toggle(e) {
      if (this.isShowing) {
        this.hide();
      } else {
        this.show();
      }
    },
    outsideClick: function outsideClick(e) {
      var target = $(e.target); // if the page is clicked anywhere except within the daterangerpicker/button
      // itself then call this.hide()

      if ( // ie modal dialog fix
      e.type == "focusin" || target.closest(this.element).length || target.closest(this.container).length || target.closest('.calendar-table').length) return;
      this.hide();
      this.element.trigger('outsideClick.daterangepicker', this);
    },
    showCalendars: function showCalendars() {
      this.container.addClass('show-calendar');
      this.move();
      this.element.trigger('showCalendar.daterangepicker', this);
    },
    hideCalendars: function hideCalendars() {
      this.container.removeClass('show-calendar');
      this.element.trigger('hideCalendar.daterangepicker', this);
    },
    clickRange: function clickRange(e) {
      var label = e.target.getAttribute('data-range-key');
      this.chosenLabel = label;

      if (label == this.locale.customRangeLabel) {
        this.showCalendars();
      } else {
        var dates = this.ranges[label];
        this.startDate = dates[0];
        this.endDate = dates[1];

        if (!this.timePicker) {
          this.startDate.startOf('day');
          this.endDate.endOf('day');
        }

        if (!this.alwaysShowCalendars) this.hideCalendars();
        this.clickApply();
      }
    },
    clickPrev: function clickPrev(e) {
      var cal = $(e.target).parents('.drp-calendar');

      if (cal.hasClass('left')) {
        this.leftCalendar.month.subtract(1, 'month');
        if (this.linkedCalendars) this.rightCalendar.month.subtract(1, 'month');
      } else {
        this.rightCalendar.month.subtract(1, 'month');
      }

      this.updateCalendars();
    },
    clickNext: function clickNext(e) {
      var cal = $(e.target).parents('.drp-calendar');

      if (cal.hasClass('left')) {
        this.leftCalendar.month.add(1, 'month');
      } else {
        this.rightCalendar.month.add(1, 'month');
        if (this.linkedCalendars) this.leftCalendar.month.add(1, 'month');
      }

      this.updateCalendars();
    },
    hoverDate: function hoverDate(e) {
      //ignore dates that can't be selected
      if (!$(e.target).hasClass('available')) return;
      var title = $(e.target).attr('data-title');
      var row = title.substr(1, 1);
      var col = title.substr(3, 1);
      var cal = $(e.target).parents('.drp-calendar');
      var date = cal.hasClass('left') ? this.leftCalendar.calendar[row][col] : this.rightCalendar.calendar[row][col]; //highlight the dates between the start date and the date being hovered as a potential end date

      var leftCalendar = this.leftCalendar;
      var rightCalendar = this.rightCalendar;
      var startDate = this.startDate;

      if (!this.endDate) {
        this.container.find('.drp-calendar tbody td').each(function (index, el) {
          //skip week numbers, only look at dates
          if ($(el).hasClass('week')) return;
          var title = $(el).attr('data-title');
          var row = title.substr(1, 1);
          var col = title.substr(3, 1);
          var cal = $(el).parents('.drp-calendar');
          var dt = cal.hasClass('left') ? leftCalendar.calendar[row][col] : rightCalendar.calendar[row][col];

          if (dt.isAfter(startDate) && dt.isBefore(date) || dt.isSame(date, 'day')) {
            $(el).addClass('in-range');
          } else {
            $(el).removeClass('in-range');
          }
        });
      }
    },
    clickDate: function clickDate(e) {
      if (!$(e.target).hasClass('available')) return;
      var title = $(e.target).attr('data-title');
      var row = title.substr(1, 1);
      var col = title.substr(3, 1);
      var cal = $(e.target).parents('.drp-calendar');
      var date = cal.hasClass('left') ? this.leftCalendar.calendar[row][col] : this.rightCalendar.calendar[row][col]; //
      // this function needs to do a few things:
      // * alternate between selecting a start and end date for the range,
      // * if the time picker is enabled, apply the hour/minute/second from the select boxes to the clicked date
      // * if autoapply is enabled, and an end date was chosen, apply the selection
      // * if single date picker mode, and time picker isn't enabled, apply the selection immediately
      // * if one of the inputs above the calendars was focused, cancel that manual input
      //

      if (this.endDate || date.isBefore(this.startDate, 'day')) {
        //picking start
        if (this.timePicker) {
          var hour = parseInt(this.container.find('.left .hourselect').val(), 10);

          if (!this.timePicker24Hour) {
            var ampm = this.container.find('.left .ampmselect').val();
            if (ampm === 'PM' && hour < 12) hour += 12;
            if (ampm === 'AM' && hour === 12) hour = 0;
          }

          var minute = parseInt(this.container.find('.left .minuteselect').val(), 10);

          if (isNaN(minute)) {
            minute = parseInt(this.container.find('.left .minuteselect option:last').val(), 10);
          }

          var second = this.timePickerSeconds ? parseInt(this.container.find('.left .secondselect').val(), 10) : 0;
          date = date.clone().hour(hour).minute(minute).second(second);
        }

        this.endDate = null;
        this.setStartDate(date.clone());
      } else if (!this.endDate && date.isBefore(this.startDate)) {
        //special case: clicking the same date for start/end,
        //but the time of the end date is before the start date
        this.setEndDate(this.startDate.clone());
      } else {
        // picking end
        if (this.timePicker) {
          var hour = parseInt(this.container.find('.right .hourselect').val(), 10);

          if (!this.timePicker24Hour) {
            var ampm = this.container.find('.right .ampmselect').val();
            if (ampm === 'PM' && hour < 12) hour += 12;
            if (ampm === 'AM' && hour === 12) hour = 0;
          }

          var minute = parseInt(this.container.find('.right .minuteselect').val(), 10);

          if (isNaN(minute)) {
            minute = parseInt(this.container.find('.right .minuteselect option:last').val(), 10);
          }

          var second = this.timePickerSeconds ? parseInt(this.container.find('.right .secondselect').val(), 10) : 0;
          date = date.clone().hour(hour).minute(minute).second(second);
        }

        this.setEndDate(date.clone());

        if (this.autoApply) {
          this.calculateChosenLabel();
          this.clickApply();
        }
      }

      if (this.singleDatePicker) {
        this.setEndDate(this.startDate);
        if (!this.timePicker) this.clickApply();
      }

      this.updateView(); //This is to cancel the blur event handler if the mouse was in one of the inputs

      e.stopPropagation();
    },
    calculateChosenLabel: function calculateChosenLabel() {
      var customRange = true;
      var i = 0;

      for (var range in this.ranges) {
        if (this.timePicker) {
          var format = this.timePickerSeconds ? "YYYY-MM-DD HH:mm:ss" : "YYYY-MM-DD HH:mm"; //ignore times when comparing dates if time picker seconds is not enabled

          if (this.startDate.format(format) == this.ranges[range][0].format(format) && this.endDate.format(format) == this.ranges[range][1].format(format)) {
            customRange = false;
            this.chosenLabel = this.container.find('.ranges li:eq(' + i + ')').addClass('active').attr('data-range-key');
            break;
          }
        } else {
          //ignore times when comparing dates if time picker is not enabled
          if (this.startDate.format('YYYY-MM-DD') == this.ranges[range][0].format('YYYY-MM-DD') && this.endDate.format('YYYY-MM-DD') == this.ranges[range][1].format('YYYY-MM-DD')) {
            customRange = false;
            this.chosenLabel = this.container.find('.ranges li:eq(' + i + ')').addClass('active').attr('data-range-key');
            break;
          }
        }

        i++;
      }

      if (customRange) {
        if (this.showCustomRangeLabel) {
          this.chosenLabel = this.container.find('.ranges li:last').addClass('active').attr('data-range-key');
        } else {
          this.chosenLabel = null;
        }

        this.showCalendars();
      }
    },
    clickApply: function clickApply(e) {
      this.hide();
      this.element.trigger('apply.daterangepicker', this);
    },
    clickCancel: function clickCancel(e) {
      this.startDate = this.oldStartDate;
      this.endDate = this.oldEndDate;
      this.hide();
      this.element.trigger('cancel.daterangepicker', this);
    },
    monthOrYearChanged: function monthOrYearChanged(e) {
      var isLeft = $(e.target).closest('.drp-calendar').hasClass('left'),
          leftOrRight = isLeft ? 'left' : 'right',
          cal = this.container.find('.drp-calendar.' + leftOrRight); // Month must be Number for new moment versions

      var month = parseInt(cal.find('.monthselect').val(), 10);
      var year = cal.find('.yearselect').val();

      if (!isLeft) {
        if (year < this.startDate.year() || year == this.startDate.year() && month < this.startDate.month()) {
          month = this.startDate.month();
          year = this.startDate.year();
        }
      }

      if (this.minDate) {
        if (year < this.minDate.year() || year == this.minDate.year() && month < this.minDate.month()) {
          month = this.minDate.month();
          year = this.minDate.year();
        }
      }

      if (this.maxDate) {
        if (year > this.maxDate.year() || year == this.maxDate.year() && month > this.maxDate.month()) {
          month = this.maxDate.month();
          year = this.maxDate.year();
        }
      }

      if (isLeft) {
        this.leftCalendar.month.month(month).year(year);
        if (this.linkedCalendars) this.rightCalendar.month = this.leftCalendar.month.clone().add(1, 'month');
      } else {
        this.rightCalendar.month.month(month).year(year);
        if (this.linkedCalendars) this.leftCalendar.month = this.rightCalendar.month.clone().subtract(1, 'month');
      }

      this.updateCalendars();
    },
    timeChanged: function timeChanged(e) {
      var cal = $(e.target).closest('.drp-calendar'),
          isLeft = cal.hasClass('left');
      var hour = parseInt(cal.find('.hourselect').val(), 10);
      var minute = parseInt(cal.find('.minuteselect').val(), 10);

      if (isNaN(minute)) {
        minute = parseInt(cal.find('.minuteselect option:last').val(), 10);
      }

      var second = this.timePickerSeconds ? parseInt(cal.find('.secondselect').val(), 10) : 0;

      if (!this.timePicker24Hour) {
        var ampm = cal.find('.ampmselect').val();
        if (ampm === 'PM' && hour < 12) hour += 12;
        if (ampm === 'AM' && hour === 12) hour = 0;
      }

      if (isLeft) {
        var start = this.startDate.clone();
        start.hour(hour);
        start.minute(minute);
        start.second(second);
        this.setStartDate(start);

        if (this.singleDatePicker) {
          this.endDate = this.startDate.clone();
        } else if (this.endDate && this.endDate.format('YYYY-MM-DD') == start.format('YYYY-MM-DD') && this.endDate.isBefore(start)) {
          this.setEndDate(start.clone());
        }
      } else if (this.endDate) {
        var end = this.endDate.clone();
        end.hour(hour);
        end.minute(minute);
        end.second(second);
        this.setEndDate(end);
      } //update the calendars so all clickable dates reflect the new time component


      this.updateCalendars(); //update the form inputs above the calendars with the new time

      this.updateFormInputs(); //re-render the time pickers because changing one selection can affect what's enabled in another

      this.renderTimePicker('left');
      this.renderTimePicker('right');
    },
    elementChanged: function elementChanged() {
      if (!this.element.is('input')) return;
      if (!this.element.val().length) return;
      var dateString = this.element.val().split(this.locale.separator),
          start = null,
          end = null;

      if (dateString.length === 2) {
        start = moment(dateString[0], this.locale.format);
        end = moment(dateString[1], this.locale.format);
      }

      if (this.singleDatePicker || start === null || end === null) {
        start = moment(this.element.val(), this.locale.format);
        end = start;
      }

      if (!start.isValid() || !end.isValid()) return;
      this.setStartDate(start);
      this.setEndDate(end);
      this.updateView();
    },
    keydown: function keydown(e) {
      //hide on tab or enter
      if (e.keyCode === 9 || e.keyCode === 13) {
        this.hide();
      } //hide on esc and prevent propagation


      if (e.keyCode === 27) {
        e.preventDefault();
        e.stopPropagation();
        this.hide();
      }
    },
    updateElement: function updateElement() {
      if (this.element.is('input') && this.autoUpdateInput) {
        var newValue = this.startDate.format(this.locale.format);

        if (!this.singleDatePicker) {
          newValue += this.locale.separator + this.endDate.format(this.locale.format);
        }

        if (newValue !== this.element.val()) {
          this.element.val(newValue).trigger('change');
        }
      }
    },
    remove: function remove() {
      this.container.remove();
      this.element.off('.daterangepicker');
      this.element.removeData();
    }
  };

  $.fn.daterangepicker = function (options, callback) {
    var implementOptions = $.extend(true, {}, $.fn.daterangepicker.defaultOptions, options);
    this.each(function () {
      var el = $(this);
      if (el.data('daterangepicker')) el.data('daterangepicker').remove();
      el.data('daterangepicker', new DateRangePicker(el, implementOptions, callback));
    });
    return this;
  };

  return DateRangePicker;
});
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e, t) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.moment = t();
}(void 0, function () {
  "use strict";

  var e, i;

  function c() {
    return e.apply(null, arguments);
  }

  function o(e) {
    return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e);
  }

  function u(e) {
    return null != e && "[object Object]" === Object.prototype.toString.call(e);
  }

  function l(e) {
    return void 0 === e;
  }

  function h(e) {
    return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e);
  }

  function d(e) {
    return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e);
  }

  function f(e, t) {
    var n,
        s = [];

    for (n = 0; n < e.length; ++n) {
      s.push(t(e[n], n));
    }

    return s;
  }

  function m(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }

  function _(e, t) {
    for (var n in t) {
      m(t, n) && (e[n] = t[n]);
    }

    return m(t, "toString") && (e.toString = t.toString), m(t, "valueOf") && (e.valueOf = t.valueOf), e;
  }

  function y(e, t, n, s) {
    return Tt(e, t, n, s, !0).utc();
  }

  function g(e) {
    return null == e._pf && (e._pf = {
      empty: !1,
      unusedTokens: [],
      unusedInput: [],
      overflow: -2,
      charsLeftOver: 0,
      nullInput: !1,
      invalidMonth: null,
      invalidFormat: !1,
      userInvalidated: !1,
      iso: !1,
      parsedDateParts: [],
      meridiem: null,
      rfc2822: !1,
      weekdayMismatch: !1
    }), e._pf;
  }

  function v(e) {
    if (null == e._isValid) {
      var t = g(e),
          n = i.call(t.parsedDateParts, function (e) {
        return null != e;
      }),
          s = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
      if (e._strict && (s = s && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return s;
      e._isValid = s;
    }

    return e._isValid;
  }

  function p(e) {
    var t = y(NaN);
    return null != e ? _(g(t), e) : g(t).userInvalidated = !0, t;
  }

  i = Array.prototype.some ? Array.prototype.some : function (e) {
    for (var t = Object(this), n = t.length >>> 0, s = 0; s < n; s++) {
      if (s in t && e.call(this, t[s], s, t)) return !0;
    }

    return !1;
  };
  var r = c.momentProperties = [];

  function w(e, t) {
    var n, s, i;
    if (l(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), l(t._i) || (e._i = t._i), l(t._f) || (e._f = t._f), l(t._l) || (e._l = t._l), l(t._strict) || (e._strict = t._strict), l(t._tzm) || (e._tzm = t._tzm), l(t._isUTC) || (e._isUTC = t._isUTC), l(t._offset) || (e._offset = t._offset), l(t._pf) || (e._pf = g(t)), l(t._locale) || (e._locale = t._locale), 0 < r.length) for (n = 0; n < r.length; n++) {
      l(i = t[s = r[n]]) || (e[s] = i);
    }
    return e;
  }

  var t = !1;

  function M(e) {
    w(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === t && (t = !0, c.updateOffset(this), t = !1);
  }

  function k(e) {
    return e instanceof M || null != e && null != e._isAMomentObject;
  }

  function S(e) {
    return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
  }

  function D(e) {
    var t = +e,
        n = 0;
    return 0 !== t && isFinite(t) && (n = S(t)), n;
  }

  function a(e, t, n) {
    var s,
        i = Math.min(e.length, t.length),
        r = Math.abs(e.length - t.length),
        a = 0;

    for (s = 0; s < i; s++) {
      (n && e[s] !== t[s] || !n && D(e[s]) !== D(t[s])) && a++;
    }

    return a + r;
  }

  function Y(e) {
    !1 === c.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e);
  }

  function n(i, r) {
    var a = !0;
    return _(function () {
      if (null != c.deprecationHandler && c.deprecationHandler(null, i), a) {
        for (var e, t = [], n = 0; n < arguments.length; n++) {
          if (e = "", "object" == _typeof(arguments[n])) {
            for (var s in e += "\n[" + n + "] ", arguments[0]) {
              e += s + ": " + arguments[0][s] + ", ";
            }

            e = e.slice(0, -2);
          } else e = arguments[n];

          t.push(e);
        }

        Y(i + "\nArguments: " + Array.prototype.slice.call(t).join("") + "\n" + new Error().stack), a = !1;
      }

      return r.apply(this, arguments);
    }, r);
  }

  var s,
      O = {};

  function T(e, t) {
    null != c.deprecationHandler && c.deprecationHandler(e, t), O[e] || (Y(t), O[e] = !0);
  }

  function b(e) {
    return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e);
  }

  function x(e, t) {
    var n,
        s = _({}, e);

    for (n in t) {
      m(t, n) && (u(e[n]) && u(t[n]) ? (s[n] = {}, _(s[n], e[n]), _(s[n], t[n])) : null != t[n] ? s[n] = t[n] : delete s[n]);
    }

    for (n in e) {
      m(e, n) && !m(t, n) && u(e[n]) && (s[n] = _({}, s[n]));
    }

    return s;
  }

  function P(e) {
    null != e && this.set(e);
  }

  c.suppressDeprecationWarnings = !1, c.deprecationHandler = null, s = Object.keys ? Object.keys : function (e) {
    var t,
        n = [];

    for (t in e) {
      m(e, t) && n.push(t);
    }

    return n;
  };
  var W = {};

  function C(e, t) {
    var n = e.toLowerCase();
    W[n] = W[n + "s"] = W[t] = e;
  }

  function H(e) {
    return "string" == typeof e ? W[e] || W[e.toLowerCase()] : void 0;
  }

  function R(e) {
    var t,
        n,
        s = {};

    for (n in e) {
      m(e, n) && (t = H(n)) && (s[t] = e[n]);
    }

    return s;
  }

  var U = {};

  function F(e, t) {
    U[e] = t;
  }

  function L(e, t, n) {
    var s = "" + Math.abs(e),
        i = t - s.length;
    return (0 <= e ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, i)).toString().substr(1) + s;
  }

  var N = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
      G = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
      V = {},
      E = {};

  function I(e, t, n, s) {
    var i = s;
    "string" == typeof s && (i = function i() {
      return this[s]();
    }), e && (E[e] = i), t && (E[t[0]] = function () {
      return L(i.apply(this, arguments), t[1], t[2]);
    }), n && (E[n] = function () {
      return this.localeData().ordinal(i.apply(this, arguments), e);
    });
  }

  function A(e, t) {
    return e.isValid() ? (t = j(t, e.localeData()), V[t] = V[t] || function (s) {
      var e,
          i,
          t,
          r = s.match(N);

      for (e = 0, i = r.length; e < i; e++) {
        E[r[e]] ? r[e] = E[r[e]] : r[e] = (t = r[e]).match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "");
      }

      return function (e) {
        var t,
            n = "";

        for (t = 0; t < i; t++) {
          n += b(r[t]) ? r[t].call(e, s) : r[t];
        }

        return n;
      };
    }(t), V[t](e)) : e.localeData().invalidDate();
  }

  function j(e, t) {
    var n = 5;

    function s(e) {
      return t.longDateFormat(e) || e;
    }

    for (G.lastIndex = 0; 0 <= n && G.test(e);) {
      e = e.replace(G, s), G.lastIndex = 0, n -= 1;
    }

    return e;
  }

  var Z = /\d/,
      z = /\d\d/,
      $ = /\d{3}/,
      q = /\d{4}/,
      J = /[+-]?\d{6}/,
      B = /\d\d?/,
      Q = /\d\d\d\d?/,
      X = /\d\d\d\d\d\d?/,
      K = /\d{1,3}/,
      ee = /\d{1,4}/,
      te = /[+-]?\d{1,6}/,
      ne = /\d+/,
      se = /[+-]?\d+/,
      ie = /Z|[+-]\d\d:?\d\d/gi,
      re = /Z|[+-]\d\d(?::?\d\d)?/gi,
      ae = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
      oe = {};

  function ue(e, n, s) {
    oe[e] = b(n) ? n : function (e, t) {
      return e && s ? s : n;
    };
  }

  function le(e, t) {
    return m(oe, e) ? oe[e](t._strict, t._locale) : new RegExp(he(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (e, t, n, s, i) {
      return t || n || s || i;
    })));
  }

  function he(e) {
    return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  }

  var de = {};

  function ce(e, n) {
    var t,
        s = n;

    for ("string" == typeof e && (e = [e]), h(n) && (s = function s(e, t) {
      t[n] = D(e);
    }), t = 0; t < e.length; t++) {
      de[e[t]] = s;
    }
  }

  function fe(e, i) {
    ce(e, function (e, t, n, s) {
      n._w = n._w || {}, i(e, n._w, n, s);
    });
  }

  var me = 0,
      _e = 1,
      ye = 2,
      ge = 3,
      ve = 4,
      pe = 5,
      we = 6,
      Me = 7,
      ke = 8;

  function Se(e) {
    return De(e) ? 366 : 365;
  }

  function De(e) {
    return e % 4 == 0 && e % 100 != 0 || e % 400 == 0;
  }

  I("Y", 0, 0, function () {
    var e = this.year();
    return e <= 9999 ? "" + e : "+" + e;
  }), I(0, ["YY", 2], 0, function () {
    return this.year() % 100;
  }), I(0, ["YYYY", 4], 0, "year"), I(0, ["YYYYY", 5], 0, "year"), I(0, ["YYYYYY", 6, !0], 0, "year"), C("year", "y"), F("year", 1), ue("Y", se), ue("YY", B, z), ue("YYYY", ee, q), ue("YYYYY", te, J), ue("YYYYYY", te, J), ce(["YYYYY", "YYYYYY"], me), ce("YYYY", function (e, t) {
    t[me] = 2 === e.length ? c.parseTwoDigitYear(e) : D(e);
  }), ce("YY", function (e, t) {
    t[me] = c.parseTwoDigitYear(e);
  }), ce("Y", function (e, t) {
    t[me] = parseInt(e, 10);
  }), c.parseTwoDigitYear = function (e) {
    return D(e) + (68 < D(e) ? 1900 : 2e3);
  };
  var Ye,
      Oe = Te("FullYear", !0);

  function Te(t, n) {
    return function (e) {
      return null != e ? (xe(this, t, e), c.updateOffset(this, n), this) : be(this, t);
    };
  }

  function be(e, t) {
    return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN;
  }

  function xe(e, t, n) {
    e.isValid() && !isNaN(n) && ("FullYear" === t && De(e.year()) && 1 === e.month() && 29 === e.date() ? e._d["set" + (e._isUTC ? "UTC" : "") + t](n, e.month(), Pe(n, e.month())) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n));
  }

  function Pe(e, t) {
    if (isNaN(e) || isNaN(t)) return NaN;
    var n,
        s = (t % (n = 12) + n) % n;
    return e += (t - s) / 12, 1 === s ? De(e) ? 29 : 28 : 31 - s % 7 % 2;
  }

  Ye = Array.prototype.indexOf ? Array.prototype.indexOf : function (e) {
    var t;

    for (t = 0; t < this.length; ++t) {
      if (this[t] === e) return t;
    }

    return -1;
  }, I("M", ["MM", 2], "Mo", function () {
    return this.month() + 1;
  }), I("MMM", 0, 0, function (e) {
    return this.localeData().monthsShort(this, e);
  }), I("MMMM", 0, 0, function (e) {
    return this.localeData().months(this, e);
  }), C("month", "M"), F("month", 8), ue("M", B), ue("MM", B, z), ue("MMM", function (e, t) {
    return t.monthsShortRegex(e);
  }), ue("MMMM", function (e, t) {
    return t.monthsRegex(e);
  }), ce(["M", "MM"], function (e, t) {
    t[_e] = D(e) - 1;
  }), ce(["MMM", "MMMM"], function (e, t, n, s) {
    var i = n._locale.monthsParse(e, s, n._strict);

    null != i ? t[_e] = i : g(n).invalidMonth = e;
  });
  var We = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
      Ce = "January_February_March_April_May_June_July_August_September_October_November_December".split("_");
  var He = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");

  function Re(e, t) {
    var n;
    if (!e.isValid()) return e;
    if ("string" == typeof t) if (/^\d+$/.test(t)) t = D(t);else if (!h(t = e.localeData().monthsParse(t))) return e;
    return n = Math.min(e.date(), Pe(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e;
  }

  function Ue(e) {
    return null != e ? (Re(this, e), c.updateOffset(this, !0), this) : be(this, "Month");
  }

  var Fe = ae;
  var Le = ae;

  function Ne() {
    function e(e, t) {
      return t.length - e.length;
    }

    var t,
        n,
        s = [],
        i = [],
        r = [];

    for (t = 0; t < 12; t++) {
      n = y([2e3, t]), s.push(this.monthsShort(n, "")), i.push(this.months(n, "")), r.push(this.months(n, "")), r.push(this.monthsShort(n, ""));
    }

    for (s.sort(e), i.sort(e), r.sort(e), t = 0; t < 12; t++) {
      s[t] = he(s[t]), i[t] = he(i[t]);
    }

    for (t = 0; t < 24; t++) {
      r[t] = he(r[t]);
    }

    this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + s.join("|") + ")", "i");
  }

  function Ge(e) {
    var t;

    if (e < 100 && 0 <= e) {
      var n = Array.prototype.slice.call(arguments);
      n[0] = e + 400, t = new Date(Date.UTC.apply(null, n)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e);
    } else t = new Date(Date.UTC.apply(null, arguments));

    return t;
  }

  function Ve(e, t, n) {
    var s = 7 + t - n;
    return -((7 + Ge(e, 0, s).getUTCDay() - t) % 7) + s - 1;
  }

  function Ee(e, t, n, s, i) {
    var r,
        a,
        o = 1 + 7 * (t - 1) + (7 + n - s) % 7 + Ve(e, s, i);
    return a = o <= 0 ? Se(r = e - 1) + o : o > Se(e) ? (r = e + 1, o - Se(e)) : (r = e, o), {
      year: r,
      dayOfYear: a
    };
  }

  function Ie(e, t, n) {
    var s,
        i,
        r = Ve(e.year(), t, n),
        a = Math.floor((e.dayOfYear() - r - 1) / 7) + 1;
    return a < 1 ? s = a + Ae(i = e.year() - 1, t, n) : a > Ae(e.year(), t, n) ? (s = a - Ae(e.year(), t, n), i = e.year() + 1) : (i = e.year(), s = a), {
      week: s,
      year: i
    };
  }

  function Ae(e, t, n) {
    var s = Ve(e, t, n),
        i = Ve(e + 1, t, n);
    return (Se(e) - s + i) / 7;
  }

  I("w", ["ww", 2], "wo", "week"), I("W", ["WW", 2], "Wo", "isoWeek"), C("week", "w"), C("isoWeek", "W"), F("week", 5), F("isoWeek", 5), ue("w", B), ue("ww", B, z), ue("W", B), ue("WW", B, z), fe(["w", "ww", "W", "WW"], function (e, t, n, s) {
    t[s.substr(0, 1)] = D(e);
  });

  function je(e, t) {
    return e.slice(t, 7).concat(e.slice(0, t));
  }

  I("d", 0, "do", "day"), I("dd", 0, 0, function (e) {
    return this.localeData().weekdaysMin(this, e);
  }), I("ddd", 0, 0, function (e) {
    return this.localeData().weekdaysShort(this, e);
  }), I("dddd", 0, 0, function (e) {
    return this.localeData().weekdays(this, e);
  }), I("e", 0, 0, "weekday"), I("E", 0, 0, "isoWeekday"), C("day", "d"), C("weekday", "e"), C("isoWeekday", "E"), F("day", 11), F("weekday", 11), F("isoWeekday", 11), ue("d", B), ue("e", B), ue("E", B), ue("dd", function (e, t) {
    return t.weekdaysMinRegex(e);
  }), ue("ddd", function (e, t) {
    return t.weekdaysShortRegex(e);
  }), ue("dddd", function (e, t) {
    return t.weekdaysRegex(e);
  }), fe(["dd", "ddd", "dddd"], function (e, t, n, s) {
    var i = n._locale.weekdaysParse(e, s, n._strict);

    null != i ? t.d = i : g(n).invalidWeekday = e;
  }), fe(["d", "e", "E"], function (e, t, n, s) {
    t[s] = D(e);
  });
  var Ze = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");
  var ze = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");
  var $e = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
  var qe = ae;
  var Je = ae;
  var Be = ae;

  function Qe() {
    function e(e, t) {
      return t.length - e.length;
    }

    var t,
        n,
        s,
        i,
        r,
        a = [],
        o = [],
        u = [],
        l = [];

    for (t = 0; t < 7; t++) {
      n = y([2e3, 1]).day(t), s = this.weekdaysMin(n, ""), i = this.weekdaysShort(n, ""), r = this.weekdays(n, ""), a.push(s), o.push(i), u.push(r), l.push(s), l.push(i), l.push(r);
    }

    for (a.sort(e), o.sort(e), u.sort(e), l.sort(e), t = 0; t < 7; t++) {
      o[t] = he(o[t]), u[t] = he(u[t]), l[t] = he(l[t]);
    }

    this._weekdaysRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + u.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + a.join("|") + ")", "i");
  }

  function Xe() {
    return this.hours() % 12 || 12;
  }

  function Ke(e, t) {
    I(e, 0, 0, function () {
      return this.localeData().meridiem(this.hours(), this.minutes(), t);
    });
  }

  function et(e, t) {
    return t._meridiemParse;
  }

  I("H", ["HH", 2], 0, "hour"), I("h", ["hh", 2], 0, Xe), I("k", ["kk", 2], 0, function () {
    return this.hours() || 24;
  }), I("hmm", 0, 0, function () {
    return "" + Xe.apply(this) + L(this.minutes(), 2);
  }), I("hmmss", 0, 0, function () {
    return "" + Xe.apply(this) + L(this.minutes(), 2) + L(this.seconds(), 2);
  }), I("Hmm", 0, 0, function () {
    return "" + this.hours() + L(this.minutes(), 2);
  }), I("Hmmss", 0, 0, function () {
    return "" + this.hours() + L(this.minutes(), 2) + L(this.seconds(), 2);
  }), Ke("a", !0), Ke("A", !1), C("hour", "h"), F("hour", 13), ue("a", et), ue("A", et), ue("H", B), ue("h", B), ue("k", B), ue("HH", B, z), ue("hh", B, z), ue("kk", B, z), ue("hmm", Q), ue("hmmss", X), ue("Hmm", Q), ue("Hmmss", X), ce(["H", "HH"], ge), ce(["k", "kk"], function (e, t, n) {
    var s = D(e);
    t[ge] = 24 === s ? 0 : s;
  }), ce(["a", "A"], function (e, t, n) {
    n._isPm = n._locale.isPM(e), n._meridiem = e;
  }), ce(["h", "hh"], function (e, t, n) {
    t[ge] = D(e), g(n).bigHour = !0;
  }), ce("hmm", function (e, t, n) {
    var s = e.length - 2;
    t[ge] = D(e.substr(0, s)), t[ve] = D(e.substr(s)), g(n).bigHour = !0;
  }), ce("hmmss", function (e, t, n) {
    var s = e.length - 4,
        i = e.length - 2;
    t[ge] = D(e.substr(0, s)), t[ve] = D(e.substr(s, 2)), t[pe] = D(e.substr(i)), g(n).bigHour = !0;
  }), ce("Hmm", function (e, t, n) {
    var s = e.length - 2;
    t[ge] = D(e.substr(0, s)), t[ve] = D(e.substr(s));
  }), ce("Hmmss", function (e, t, n) {
    var s = e.length - 4,
        i = e.length - 2;
    t[ge] = D(e.substr(0, s)), t[ve] = D(e.substr(s, 2)), t[pe] = D(e.substr(i));
  });
  var tt,
      nt = Te("Hours", !0),
      st = {
    calendar: {
      sameDay: "[Today at] LT",
      nextDay: "[Tomorrow at] LT",
      nextWeek: "dddd [at] LT",
      lastDay: "[Yesterday at] LT",
      lastWeek: "[Last] dddd [at] LT",
      sameElse: "L"
    },
    longDateFormat: {
      LTS: "h:mm:ss A",
      LT: "h:mm A",
      L: "MM/DD/YYYY",
      LL: "MMMM D, YYYY",
      LLL: "MMMM D, YYYY h:mm A",
      LLLL: "dddd, MMMM D, YYYY h:mm A"
    },
    invalidDate: "Invalid date",
    ordinal: "%d",
    dayOfMonthOrdinalParse: /\d{1,2}/,
    relativeTime: {
      future: "in %s",
      past: "%s ago",
      s: "a few seconds",
      ss: "%d seconds",
      m: "a minute",
      mm: "%d minutes",
      h: "an hour",
      hh: "%d hours",
      d: "a day",
      dd: "%d days",
      M: "a month",
      MM: "%d months",
      y: "a year",
      yy: "%d years"
    },
    months: Ce,
    monthsShort: He,
    week: {
      dow: 0,
      doy: 6
    },
    weekdays: Ze,
    weekdaysMin: $e,
    weekdaysShort: ze,
    meridiemParse: /[ap]\.?m?\.?/i
  },
      it = {},
      rt = {};

  function at(e) {
    return e ? e.toLowerCase().replace("_", "-") : e;
  }

  function ot(e) {
    var t = null;
    if (!it[e] && "undefined" != typeof module && module && module.exports) try {
      t = tt._abbr, require("./locale/" + e), ut(t);
    } catch (e) {}
    return it[e];
  }

  function ut(e, t) {
    var n;
    return e && ((n = l(t) ? ht(e) : lt(e, t)) ? tt = n : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), tt._abbr;
  }

  function lt(e, t) {
    if (null === t) return delete it[e], null;
    var n,
        s = st;
    if (t.abbr = e, null != it[e]) T("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), s = it[e]._config;else if (null != t.parentLocale) if (null != it[t.parentLocale]) s = it[t.parentLocale]._config;else {
      if (null == (n = ot(t.parentLocale))) return rt[t.parentLocale] || (rt[t.parentLocale] = []), rt[t.parentLocale].push({
        name: e,
        config: t
      }), null;
      s = n._config;
    }
    return it[e] = new P(x(s, t)), rt[e] && rt[e].forEach(function (e) {
      lt(e.name, e.config);
    }), ut(e), it[e];
  }

  function ht(e) {
    var t;
    if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return tt;

    if (!o(e)) {
      if (t = ot(e)) return t;
      e = [e];
    }

    return function (e) {
      for (var t, n, s, i, r = 0; r < e.length;) {
        for (t = (i = at(e[r]).split("-")).length, n = (n = at(e[r + 1])) ? n.split("-") : null; 0 < t;) {
          if (s = ot(i.slice(0, t).join("-"))) return s;
          if (n && n.length >= t && a(i, n, !0) >= t - 1) break;
          t--;
        }

        r++;
      }

      return tt;
    }(e);
  }

  function dt(e) {
    var t,
        n = e._a;
    return n && -2 === g(e).overflow && (t = n[_e] < 0 || 11 < n[_e] ? _e : n[ye] < 1 || n[ye] > Pe(n[me], n[_e]) ? ye : n[ge] < 0 || 24 < n[ge] || 24 === n[ge] && (0 !== n[ve] || 0 !== n[pe] || 0 !== n[we]) ? ge : n[ve] < 0 || 59 < n[ve] ? ve : n[pe] < 0 || 59 < n[pe] ? pe : n[we] < 0 || 999 < n[we] ? we : -1, g(e)._overflowDayOfYear && (t < me || ye < t) && (t = ye), g(e)._overflowWeeks && -1 === t && (t = Me), g(e)._overflowWeekday && -1 === t && (t = ke), g(e).overflow = t), e;
  }

  function ct(e, t, n) {
    return null != e ? e : null != t ? t : n;
  }

  function ft(e) {
    var t,
        n,
        s,
        i,
        r,
        a = [];

    if (!e._d) {
      var o, u;

      for (o = e, u = new Date(c.now()), s = o._useUTC ? [u.getUTCFullYear(), u.getUTCMonth(), u.getUTCDate()] : [u.getFullYear(), u.getMonth(), u.getDate()], e._w && null == e._a[ye] && null == e._a[_e] && function (e) {
        var t, n, s, i, r, a, o, u;
        if (null != (t = e._w).GG || null != t.W || null != t.E) r = 1, a = 4, n = ct(t.GG, e._a[me], Ie(bt(), 1, 4).year), s = ct(t.W, 1), ((i = ct(t.E, 1)) < 1 || 7 < i) && (u = !0);else {
          r = e._locale._week.dow, a = e._locale._week.doy;
          var l = Ie(bt(), r, a);
          n = ct(t.gg, e._a[me], l.year), s = ct(t.w, l.week), null != t.d ? ((i = t.d) < 0 || 6 < i) && (u = !0) : null != t.e ? (i = t.e + r, (t.e < 0 || 6 < t.e) && (u = !0)) : i = r;
        }
        s < 1 || s > Ae(n, r, a) ? g(e)._overflowWeeks = !0 : null != u ? g(e)._overflowWeekday = !0 : (o = Ee(n, s, i, r, a), e._a[me] = o.year, e._dayOfYear = o.dayOfYear);
      }(e), null != e._dayOfYear && (r = ct(e._a[me], s[me]), (e._dayOfYear > Se(r) || 0 === e._dayOfYear) && (g(e)._overflowDayOfYear = !0), n = Ge(r, 0, e._dayOfYear), e._a[_e] = n.getUTCMonth(), e._a[ye] = n.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) {
        e._a[t] = a[t] = s[t];
      }

      for (; t < 7; t++) {
        e._a[t] = a[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
      }

      24 === e._a[ge] && 0 === e._a[ve] && 0 === e._a[pe] && 0 === e._a[we] && (e._nextDay = !0, e._a[ge] = 0), e._d = (e._useUTC ? Ge : function (e, t, n, s, i, r, a) {
        var o;
        return e < 100 && 0 <= e ? (o = new Date(e + 400, t, n, s, i, r, a), isFinite(o.getFullYear()) && o.setFullYear(e)) : o = new Date(e, t, n, s, i, r, a), o;
      }).apply(null, a), i = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[ge] = 24), e._w && void 0 !== e._w.d && e._w.d !== i && (g(e).weekdayMismatch = !0);
    }
  }

  var mt = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
      _t = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
      yt = /Z|[+-]\d\d(?::?\d\d)?/,
      gt = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]],
      vt = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]],
      pt = /^\/?Date\((\-?\d+)/i;

  function wt(e) {
    var t,
        n,
        s,
        i,
        r,
        a,
        o = e._i,
        u = mt.exec(o) || _t.exec(o);

    if (u) {
      for (g(e).iso = !0, t = 0, n = gt.length; t < n; t++) {
        if (gt[t][1].exec(u[1])) {
          i = gt[t][0], s = !1 !== gt[t][2];
          break;
        }
      }

      if (null == i) return void (e._isValid = !1);

      if (u[3]) {
        for (t = 0, n = vt.length; t < n; t++) {
          if (vt[t][1].exec(u[3])) {
            r = (u[2] || " ") + vt[t][0];
            break;
          }
        }

        if (null == r) return void (e._isValid = !1);
      }

      if (!s && null != r) return void (e._isValid = !1);

      if (u[4]) {
        if (!yt.exec(u[4])) return void (e._isValid = !1);
        a = "Z";
      }

      e._f = i + (r || "") + (a || ""), Yt(e);
    } else e._isValid = !1;
  }

  var Mt = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

  function kt(e, t, n, s, i, r) {
    var a = [function (e) {
      var t = parseInt(e, 10);
      {
        if (t <= 49) return 2e3 + t;
        if (t <= 999) return 1900 + t;
      }
      return t;
    }(e), He.indexOf(t), parseInt(n, 10), parseInt(s, 10), parseInt(i, 10)];
    return r && a.push(parseInt(r, 10)), a;
  }

  var St = {
    UT: 0,
    GMT: 0,
    EDT: -240,
    EST: -300,
    CDT: -300,
    CST: -360,
    MDT: -360,
    MST: -420,
    PDT: -420,
    PST: -480
  };

  function Dt(e) {
    var t,
        n,
        s,
        i = Mt.exec(e._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, ""));

    if (i) {
      var r = kt(i[4], i[3], i[2], i[5], i[6], i[7]);
      if (t = i[1], n = r, s = e, t && ze.indexOf(t) !== new Date(n[0], n[1], n[2]).getDay() && (g(s).weekdayMismatch = !0, !(s._isValid = !1))) return;
      e._a = r, e._tzm = function (e, t, n) {
        if (e) return St[e];
        if (t) return 0;
        var s = parseInt(n, 10),
            i = s % 100;
        return (s - i) / 100 * 60 + i;
      }(i[8], i[9], i[10]), e._d = Ge.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), g(e).rfc2822 = !0;
    } else e._isValid = !1;
  }

  function Yt(e) {
    if (e._f !== c.ISO_8601) {
      if (e._f !== c.RFC_2822) {
        e._a = [], g(e).empty = !0;
        var t,
            n,
            s,
            i,
            r,
            a,
            o,
            u,
            l = "" + e._i,
            h = l.length,
            d = 0;

        for (s = j(e._f, e._locale).match(N) || [], t = 0; t < s.length; t++) {
          i = s[t], (n = (l.match(le(i, e)) || [])[0]) && (0 < (r = l.substr(0, l.indexOf(n))).length && g(e).unusedInput.push(r), l = l.slice(l.indexOf(n) + n.length), d += n.length), E[i] ? (n ? g(e).empty = !1 : g(e).unusedTokens.push(i), a = i, u = e, null != (o = n) && m(de, a) && de[a](o, u._a, u, a)) : e._strict && !n && g(e).unusedTokens.push(i);
        }

        g(e).charsLeftOver = h - d, 0 < l.length && g(e).unusedInput.push(l), e._a[ge] <= 12 && !0 === g(e).bigHour && 0 < e._a[ge] && (g(e).bigHour = void 0), g(e).parsedDateParts = e._a.slice(0), g(e).meridiem = e._meridiem, e._a[ge] = function (e, t, n) {
          var s;
          if (null == n) return t;
          return null != e.meridiemHour ? e.meridiemHour(t, n) : (null != e.isPM && ((s = e.isPM(n)) && t < 12 && (t += 12), s || 12 !== t || (t = 0)), t);
        }(e._locale, e._a[ge], e._meridiem), ft(e), dt(e);
      } else Dt(e);
    } else wt(e);
  }

  function Ot(e) {
    var t,
        n,
        s,
        i,
        r = e._i,
        a = e._f;
    return e._locale = e._locale || ht(e._l), null === r || void 0 === a && "" === r ? p({
      nullInput: !0
    }) : ("string" == typeof r && (e._i = r = e._locale.preparse(r)), k(r) ? new M(dt(r)) : (d(r) ? e._d = r : o(a) ? function (e) {
      var t, n, s, i, r;
      if (0 === e._f.length) return g(e).invalidFormat = !0, e._d = new Date(NaN);

      for (i = 0; i < e._f.length; i++) {
        r = 0, t = w({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[i], Yt(t), v(t) && (r += g(t).charsLeftOver, r += 10 * g(t).unusedTokens.length, g(t).score = r, (null == s || r < s) && (s = r, n = t));
      }

      _(e, n || t);
    }(e) : a ? Yt(e) : l(n = (t = e)._i) ? t._d = new Date(c.now()) : d(n) ? t._d = new Date(n.valueOf()) : "string" == typeof n ? (s = t, null === (i = pt.exec(s._i)) ? (wt(s), !1 === s._isValid && (delete s._isValid, Dt(s), !1 === s._isValid && (delete s._isValid, c.createFromInputFallback(s)))) : s._d = new Date(+i[1])) : o(n) ? (t._a = f(n.slice(0), function (e) {
      return parseInt(e, 10);
    }), ft(t)) : u(n) ? function (e) {
      if (!e._d) {
        var t = R(e._i);
        e._a = f([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function (e) {
          return e && parseInt(e, 10);
        }), ft(e);
      }
    }(t) : h(n) ? t._d = new Date(n) : c.createFromInputFallback(t), v(e) || (e._d = null), e));
  }

  function Tt(e, t, n, s, i) {
    var r,
        a = {};
    return !0 !== n && !1 !== n || (s = n, n = void 0), (u(e) && function (e) {
      if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;
      var t;

      for (t in e) {
        if (e.hasOwnProperty(t)) return !1;
      }

      return !0;
    }(e) || o(e) && 0 === e.length) && (e = void 0), a._isAMomentObject = !0, a._useUTC = a._isUTC = i, a._l = n, a._i = e, a._f = t, a._strict = s, (r = new M(dt(Ot(a))))._nextDay && (r.add(1, "d"), r._nextDay = void 0), r;
  }

  function bt(e, t, n, s) {
    return Tt(e, t, n, s, !1);
  }

  c.createFromInputFallback = n("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (e) {
    e._d = new Date(e._i + (e._useUTC ? " UTC" : ""));
  }), c.ISO_8601 = function () {}, c.RFC_2822 = function () {};
  var xt = n("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
    var e = bt.apply(null, arguments);
    return this.isValid() && e.isValid() ? e < this ? this : e : p();
  }),
      Pt = n("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
    var e = bt.apply(null, arguments);
    return this.isValid() && e.isValid() ? this < e ? this : e : p();
  });

  function Wt(e, t) {
    var n, s;
    if (1 === t.length && o(t[0]) && (t = t[0]), !t.length) return bt();

    for (n = t[0], s = 1; s < t.length; ++s) {
      t[s].isValid() && !t[s][e](n) || (n = t[s]);
    }

    return n;
  }

  var Ct = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

  function Ht(e) {
    var t = R(e),
        n = t.year || 0,
        s = t.quarter || 0,
        i = t.month || 0,
        r = t.week || t.isoWeek || 0,
        a = t.day || 0,
        o = t.hour || 0,
        u = t.minute || 0,
        l = t.second || 0,
        h = t.millisecond || 0;
    this._isValid = function (e) {
      for (var t in e) {
        if (-1 === Ye.call(Ct, t) || null != e[t] && isNaN(e[t])) return !1;
      }

      for (var n = !1, s = 0; s < Ct.length; ++s) {
        if (e[Ct[s]]) {
          if (n) return !1;
          parseFloat(e[Ct[s]]) !== D(e[Ct[s]]) && (n = !0);
        }
      }

      return !0;
    }(t), this._milliseconds = +h + 1e3 * l + 6e4 * u + 1e3 * o * 60 * 60, this._days = +a + 7 * r, this._months = +i + 3 * s + 12 * n, this._data = {}, this._locale = ht(), this._bubble();
  }

  function Rt(e) {
    return e instanceof Ht;
  }

  function Ut(e) {
    return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e);
  }

  function Ft(e, n) {
    I(e, 0, 0, function () {
      var e = this.utcOffset(),
          t = "+";
      return e < 0 && (e = -e, t = "-"), t + L(~~(e / 60), 2) + n + L(~~e % 60, 2);
    });
  }

  Ft("Z", ":"), Ft("ZZ", ""), ue("Z", re), ue("ZZ", re), ce(["Z", "ZZ"], function (e, t, n) {
    n._useUTC = !0, n._tzm = Nt(re, e);
  });
  var Lt = /([\+\-]|\d\d)/gi;

  function Nt(e, t) {
    var n = (t || "").match(e);
    if (null === n) return null;
    var s = ((n[n.length - 1] || []) + "").match(Lt) || ["-", 0, 0],
        i = 60 * s[1] + D(s[2]);
    return 0 === i ? 0 : "+" === s[0] ? i : -i;
  }

  function Gt(e, t) {
    var n, s;
    return t._isUTC ? (n = t.clone(), s = (k(e) || d(e) ? e.valueOf() : bt(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + s), c.updateOffset(n, !1), n) : bt(e).local();
  }

  function Vt(e) {
    return 15 * -Math.round(e._d.getTimezoneOffset() / 15);
  }

  function Et() {
    return !!this.isValid() && this._isUTC && 0 === this._offset;
  }

  c.updateOffset = function () {};

  var It = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
      At = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

  function jt(e, t) {
    var n,
        s,
        i,
        r = e,
        a = null;
    return Rt(e) ? r = {
      ms: e._milliseconds,
      d: e._days,
      M: e._months
    } : h(e) ? (r = {}, t ? r[t] = e : r.milliseconds = e) : (a = It.exec(e)) ? (n = "-" === a[1] ? -1 : 1, r = {
      y: 0,
      d: D(a[ye]) * n,
      h: D(a[ge]) * n,
      m: D(a[ve]) * n,
      s: D(a[pe]) * n,
      ms: D(Ut(1e3 * a[we])) * n
    }) : (a = At.exec(e)) ? (n = "-" === a[1] ? -1 : 1, r = {
      y: Zt(a[2], n),
      M: Zt(a[3], n),
      w: Zt(a[4], n),
      d: Zt(a[5], n),
      h: Zt(a[6], n),
      m: Zt(a[7], n),
      s: Zt(a[8], n)
    }) : null == r ? r = {} : "object" == _typeof(r) && ("from" in r || "to" in r) && (i = function (e, t) {
      var n;
      if (!e.isValid() || !t.isValid()) return {
        milliseconds: 0,
        months: 0
      };
      t = Gt(t, e), e.isBefore(t) ? n = zt(e, t) : ((n = zt(t, e)).milliseconds = -n.milliseconds, n.months = -n.months);
      return n;
    }(bt(r.from), bt(r.to)), (r = {}).ms = i.milliseconds, r.M = i.months), s = new Ht(r), Rt(e) && m(e, "_locale") && (s._locale = e._locale), s;
  }

  function Zt(e, t) {
    var n = e && parseFloat(e.replace(",", "."));
    return (isNaN(n) ? 0 : n) * t;
  }

  function zt(e, t) {
    var n = {};
    return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n;
  }

  function $t(s, i) {
    return function (e, t) {
      var n;
      return null === t || isNaN(+t) || (T(i, "moment()." + i + "(period, number) is deprecated. Please use moment()." + i + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), n = e, e = t, t = n), qt(this, jt(e = "string" == typeof e ? +e : e, t), s), this;
    };
  }

  function qt(e, t, n, s) {
    var i = t._milliseconds,
        r = Ut(t._days),
        a = Ut(t._months);
    e.isValid() && (s = null == s || s, a && Re(e, be(e, "Month") + a * n), r && xe(e, "Date", be(e, "Date") + r * n), i && e._d.setTime(e._d.valueOf() + i * n), s && c.updateOffset(e, r || a));
  }

  jt.fn = Ht.prototype, jt.invalid = function () {
    return jt(NaN);
  };
  var Jt = $t(1, "add"),
      Bt = $t(-1, "subtract");

  function Qt(e, t) {
    var n = 12 * (t.year() - e.year()) + (t.month() - e.month()),
        s = e.clone().add(n, "months");
    return -(n + (t - s < 0 ? (t - s) / (s - e.clone().add(n - 1, "months")) : (t - s) / (e.clone().add(n + 1, "months") - s))) || 0;
  }

  function Xt(e) {
    var t;
    return void 0 === e ? this._locale._abbr : (null != (t = ht(e)) && (this._locale = t), this);
  }

  c.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", c.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
  var Kt = n("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (e) {
    return void 0 === e ? this.localeData() : this.locale(e);
  });

  function en() {
    return this._locale;
  }

  var tn = 126227808e5;

  function nn(e, t) {
    return (e % t + t) % t;
  }

  function sn(e, t, n) {
    return e < 100 && 0 <= e ? new Date(e + 400, t, n) - tn : new Date(e, t, n).valueOf();
  }

  function rn(e, t, n) {
    return e < 100 && 0 <= e ? Date.UTC(e + 400, t, n) - tn : Date.UTC(e, t, n);
  }

  function an(e, t) {
    I(0, [e, e.length], 0, t);
  }

  function on(e, t, n, s, i) {
    var r;
    return null == e ? Ie(this, s, i).year : ((r = Ae(e, s, i)) < t && (t = r), function (e, t, n, s, i) {
      var r = Ee(e, t, n, s, i),
          a = Ge(r.year, 0, r.dayOfYear);
      return this.year(a.getUTCFullYear()), this.month(a.getUTCMonth()), this.date(a.getUTCDate()), this;
    }.call(this, e, t, n, s, i));
  }

  I(0, ["gg", 2], 0, function () {
    return this.weekYear() % 100;
  }), I(0, ["GG", 2], 0, function () {
    return this.isoWeekYear() % 100;
  }), an("gggg", "weekYear"), an("ggggg", "weekYear"), an("GGGG", "isoWeekYear"), an("GGGGG", "isoWeekYear"), C("weekYear", "gg"), C("isoWeekYear", "GG"), F("weekYear", 1), F("isoWeekYear", 1), ue("G", se), ue("g", se), ue("GG", B, z), ue("gg", B, z), ue("GGGG", ee, q), ue("gggg", ee, q), ue("GGGGG", te, J), ue("ggggg", te, J), fe(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, n, s) {
    t[s.substr(0, 2)] = D(e);
  }), fe(["gg", "GG"], function (e, t, n, s) {
    t[s] = c.parseTwoDigitYear(e);
  }), I("Q", 0, "Qo", "quarter"), C("quarter", "Q"), F("quarter", 7), ue("Q", Z), ce("Q", function (e, t) {
    t[_e] = 3 * (D(e) - 1);
  }), I("D", ["DD", 2], "Do", "date"), C("date", "D"), F("date", 9), ue("D", B), ue("DD", B, z), ue("Do", function (e, t) {
    return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient;
  }), ce(["D", "DD"], ye), ce("Do", function (e, t) {
    t[ye] = D(e.match(B)[0]);
  });
  var un = Te("Date", !0);
  I("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), C("dayOfYear", "DDD"), F("dayOfYear", 4), ue("DDD", K), ue("DDDD", $), ce(["DDD", "DDDD"], function (e, t, n) {
    n._dayOfYear = D(e);
  }), I("m", ["mm", 2], 0, "minute"), C("minute", "m"), F("minute", 14), ue("m", B), ue("mm", B, z), ce(["m", "mm"], ve);
  var ln = Te("Minutes", !1);
  I("s", ["ss", 2], 0, "second"), C("second", "s"), F("second", 15), ue("s", B), ue("ss", B, z), ce(["s", "ss"], pe);
  var hn,
      dn = Te("Seconds", !1);

  for (I("S", 0, 0, function () {
    return ~~(this.millisecond() / 100);
  }), I(0, ["SS", 2], 0, function () {
    return ~~(this.millisecond() / 10);
  }), I(0, ["SSS", 3], 0, "millisecond"), I(0, ["SSSS", 4], 0, function () {
    return 10 * this.millisecond();
  }), I(0, ["SSSSS", 5], 0, function () {
    return 100 * this.millisecond();
  }), I(0, ["SSSSSS", 6], 0, function () {
    return 1e3 * this.millisecond();
  }), I(0, ["SSSSSSS", 7], 0, function () {
    return 1e4 * this.millisecond();
  }), I(0, ["SSSSSSSS", 8], 0, function () {
    return 1e5 * this.millisecond();
  }), I(0, ["SSSSSSSSS", 9], 0, function () {
    return 1e6 * this.millisecond();
  }), C("millisecond", "ms"), F("millisecond", 16), ue("S", K, Z), ue("SS", K, z), ue("SSS", K, $), hn = "SSSS"; hn.length <= 9; hn += "S") {
    ue(hn, ne);
  }

  function cn(e, t) {
    t[we] = D(1e3 * ("0." + e));
  }

  for (hn = "S"; hn.length <= 9; hn += "S") {
    ce(hn, cn);
  }

  var fn = Te("Milliseconds", !1);
  I("z", 0, 0, "zoneAbbr"), I("zz", 0, 0, "zoneName");
  var mn = M.prototype;

  function _n(e) {
    return e;
  }

  mn.add = Jt, mn.calendar = function (e, t) {
    var n = e || bt(),
        s = Gt(n, this).startOf("day"),
        i = c.calendarFormat(this, s) || "sameElse",
        r = t && (b(t[i]) ? t[i].call(this, n) : t[i]);
    return this.format(r || this.localeData().calendar(i, this, bt(n)));
  }, mn.clone = function () {
    return new M(this);
  }, mn.diff = function (e, t, n) {
    var s, i, r;
    if (!this.isValid()) return NaN;
    if (!(s = Gt(e, this)).isValid()) return NaN;

    switch (i = 6e4 * (s.utcOffset() - this.utcOffset()), t = H(t)) {
      case "year":
        r = Qt(this, s) / 12;
        break;

      case "month":
        r = Qt(this, s);
        break;

      case "quarter":
        r = Qt(this, s) / 3;
        break;

      case "second":
        r = (this - s) / 1e3;
        break;

      case "minute":
        r = (this - s) / 6e4;
        break;

      case "hour":
        r = (this - s) / 36e5;
        break;

      case "day":
        r = (this - s - i) / 864e5;
        break;

      case "week":
        r = (this - s - i) / 6048e5;
        break;

      default:
        r = this - s;
    }

    return n ? r : S(r);
  }, mn.endOf = function (e) {
    var t;
    if (void 0 === (e = H(e)) || "millisecond" === e || !this.isValid()) return this;
    var n = this._isUTC ? rn : sn;

    switch (e) {
      case "year":
        t = n(this.year() + 1, 0, 1) - 1;
        break;

      case "quarter":
        t = n(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
        break;

      case "month":
        t = n(this.year(), this.month() + 1, 1) - 1;
        break;

      case "week":
        t = n(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
        break;

      case "isoWeek":
        t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
        break;

      case "day":
      case "date":
        t = n(this.year(), this.month(), this.date() + 1) - 1;
        break;

      case "hour":
        t = this._d.valueOf(), t += 36e5 - nn(t + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5) - 1;
        break;

      case "minute":
        t = this._d.valueOf(), t += 6e4 - nn(t, 6e4) - 1;
        break;

      case "second":
        t = this._d.valueOf(), t += 1e3 - nn(t, 1e3) - 1;
        break;
    }

    return this._d.setTime(t), c.updateOffset(this, !0), this;
  }, mn.format = function (e) {
    e || (e = this.isUtc() ? c.defaultFormatUtc : c.defaultFormat);
    var t = A(this, e);
    return this.localeData().postformat(t);
  }, mn.from = function (e, t) {
    return this.isValid() && (k(e) && e.isValid() || bt(e).isValid()) ? jt({
      to: this,
      from: e
    }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
  }, mn.fromNow = function (e) {
    return this.from(bt(), e);
  }, mn.to = function (e, t) {
    return this.isValid() && (k(e) && e.isValid() || bt(e).isValid()) ? jt({
      from: this,
      to: e
    }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate();
  }, mn.toNow = function (e) {
    return this.to(bt(), e);
  }, mn.get = function (e) {
    return b(this[e = H(e)]) ? this[e]() : this;
  }, mn.invalidAt = function () {
    return g(this).overflow;
  }, mn.isAfter = function (e, t) {
    var n = k(e) ? e : bt(e);
    return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = H(t) || "millisecond") ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf());
  }, mn.isBefore = function (e, t) {
    var n = k(e) ? e : bt(e);
    return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = H(t) || "millisecond") ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf());
  }, mn.isBetween = function (e, t, n, s) {
    var i = k(e) ? e : bt(e),
        r = k(t) ? t : bt(t);
    return !!(this.isValid() && i.isValid() && r.isValid()) && ("(" === (s = s || "()")[0] ? this.isAfter(i, n) : !this.isBefore(i, n)) && (")" === s[1] ? this.isBefore(r, n) : !this.isAfter(r, n));
  }, mn.isSame = function (e, t) {
    var n,
        s = k(e) ? e : bt(e);
    return !(!this.isValid() || !s.isValid()) && ("millisecond" === (t = H(t) || "millisecond") ? this.valueOf() === s.valueOf() : (n = s.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()));
  }, mn.isSameOrAfter = function (e, t) {
    return this.isSame(e, t) || this.isAfter(e, t);
  }, mn.isSameOrBefore = function (e, t) {
    return this.isSame(e, t) || this.isBefore(e, t);
  }, mn.isValid = function () {
    return v(this);
  }, mn.lang = Kt, mn.locale = Xt, mn.localeData = en, mn.max = Pt, mn.min = xt, mn.parsingFlags = function () {
    return _({}, g(this));
  }, mn.set = function (e, t) {
    if ("object" == _typeof(e)) for (var n = function (e) {
      var t = [];

      for (var n in e) {
        t.push({
          unit: n,
          priority: U[n]
        });
      }

      return t.sort(function (e, t) {
        return e.priority - t.priority;
      }), t;
    }(e = R(e)), s = 0; s < n.length; s++) {
      this[n[s].unit](e[n[s].unit]);
    } else if (b(this[e = H(e)])) return this[e](t);
    return this;
  }, mn.startOf = function (e) {
    var t;
    if (void 0 === (e = H(e)) || "millisecond" === e || !this.isValid()) return this;
    var n = this._isUTC ? rn : sn;

    switch (e) {
      case "year":
        t = n(this.year(), 0, 1);
        break;

      case "quarter":
        t = n(this.year(), this.month() - this.month() % 3, 1);
        break;

      case "month":
        t = n(this.year(), this.month(), 1);
        break;

      case "week":
        t = n(this.year(), this.month(), this.date() - this.weekday());
        break;

      case "isoWeek":
        t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
        break;

      case "day":
      case "date":
        t = n(this.year(), this.month(), this.date());
        break;

      case "hour":
        t = this._d.valueOf(), t -= nn(t + (this._isUTC ? 0 : 6e4 * this.utcOffset()), 36e5);
        break;

      case "minute":
        t = this._d.valueOf(), t -= nn(t, 6e4);
        break;

      case "second":
        t = this._d.valueOf(), t -= nn(t, 1e3);
        break;
    }

    return this._d.setTime(t), c.updateOffset(this, !0), this;
  }, mn.subtract = Bt, mn.toArray = function () {
    var e = this;
    return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()];
  }, mn.toObject = function () {
    var e = this;
    return {
      years: e.year(),
      months: e.month(),
      date: e.date(),
      hours: e.hours(),
      minutes: e.minutes(),
      seconds: e.seconds(),
      milliseconds: e.milliseconds()
    };
  }, mn.toDate = function () {
    return new Date(this.valueOf());
  }, mn.toISOString = function (e) {
    if (!this.isValid()) return null;
    var t = !0 !== e,
        n = t ? this.clone().utc() : this;
    return n.year() < 0 || 9999 < n.year() ? A(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : b(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", A(n, "Z")) : A(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ");
  }, mn.inspect = function () {
    if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
    var e = "moment",
        t = "";
    this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", t = "Z");
    var n = "[" + e + '("]',
        s = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
        i = t + '[")]';
    return this.format(n + s + "-MM-DD[T]HH:mm:ss.SSS" + i);
  }, mn.toJSON = function () {
    return this.isValid() ? this.toISOString() : null;
  }, mn.toString = function () {
    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
  }, mn.unix = function () {
    return Math.floor(this.valueOf() / 1e3);
  }, mn.valueOf = function () {
    return this._d.valueOf() - 6e4 * (this._offset || 0);
  }, mn.creationData = function () {
    return {
      input: this._i,
      format: this._f,
      locale: this._locale,
      isUTC: this._isUTC,
      strict: this._strict
    };
  }, mn.year = Oe, mn.isLeapYear = function () {
    return De(this.year());
  }, mn.weekYear = function (e) {
    return on.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy);
  }, mn.isoWeekYear = function (e) {
    return on.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
  }, mn.quarter = mn.quarters = function (e) {
    return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3);
  }, mn.month = Ue, mn.daysInMonth = function () {
    return Pe(this.year(), this.month());
  }, mn.week = mn.weeks = function (e) {
    var t = this.localeData().week(this);
    return null == e ? t : this.add(7 * (e - t), "d");
  }, mn.isoWeek = mn.isoWeeks = function (e) {
    var t = Ie(this, 1, 4).week;
    return null == e ? t : this.add(7 * (e - t), "d");
  }, mn.weeksInYear = function () {
    var e = this.localeData()._week;

    return Ae(this.year(), e.dow, e.doy);
  }, mn.isoWeeksInYear = function () {
    return Ae(this.year(), 1, 4);
  }, mn.date = un, mn.day = mn.days = function (e) {
    if (!this.isValid()) return null != e ? this : NaN;
    var t,
        n,
        s = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    return null != e ? (t = e, n = this.localeData(), e = "string" != typeof t ? t : isNaN(t) ? "number" == typeof (t = n.weekdaysParse(t)) ? t : null : parseInt(t, 10), this.add(e - s, "d")) : s;
  }, mn.weekday = function (e) {
    if (!this.isValid()) return null != e ? this : NaN;
    var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return null == e ? t : this.add(e - t, "d");
  }, mn.isoWeekday = function (e) {
    if (!this.isValid()) return null != e ? this : NaN;
    if (null == e) return this.day() || 7;
    var t,
        n,
        s = (t = e, n = this.localeData(), "string" == typeof t ? n.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t);
    return this.day(this.day() % 7 ? s : s - 7);
  }, mn.dayOfYear = function (e) {
    var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
    return null == e ? t : this.add(e - t, "d");
  }, mn.hour = mn.hours = nt, mn.minute = mn.minutes = ln, mn.second = mn.seconds = dn, mn.millisecond = mn.milliseconds = fn, mn.utcOffset = function (e, t, n) {
    var s,
        i = this._offset || 0;
    if (!this.isValid()) return null != e ? this : NaN;
    if (null == e) return this._isUTC ? i : Vt(this);

    if ("string" == typeof e) {
      if (null === (e = Nt(re, e))) return this;
    } else Math.abs(e) < 16 && !n && (e *= 60);

    return !this._isUTC && t && (s = Vt(this)), this._offset = e, this._isUTC = !0, null != s && this.add(s, "m"), i !== e && (!t || this._changeInProgress ? qt(this, jt(e - i, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, c.updateOffset(this, !0), this._changeInProgress = null)), this;
  }, mn.utc = function (e) {
    return this.utcOffset(0, e);
  }, mn.local = function (e) {
    return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Vt(this), "m")), this;
  }, mn.parseZone = function () {
    if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);else if ("string" == typeof this._i) {
      var e = Nt(ie, this._i);
      null != e ? this.utcOffset(e) : this.utcOffset(0, !0);
    }
    return this;
  }, mn.hasAlignedHourOffset = function (e) {
    return !!this.isValid() && (e = e ? bt(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0);
  }, mn.isDST = function () {
    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset();
  }, mn.isLocal = function () {
    return !!this.isValid() && !this._isUTC;
  }, mn.isUtcOffset = function () {
    return !!this.isValid() && this._isUTC;
  }, mn.isUtc = Et, mn.isUTC = Et, mn.zoneAbbr = function () {
    return this._isUTC ? "UTC" : "";
  }, mn.zoneName = function () {
    return this._isUTC ? "Coordinated Universal Time" : "";
  }, mn.dates = n("dates accessor is deprecated. Use date instead.", un), mn.months = n("months accessor is deprecated. Use month instead", Ue), mn.years = n("years accessor is deprecated. Use year instead", Oe), mn.zone = n("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function (e, t) {
    return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset();
  }), mn.isDSTShifted = n("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function () {
    if (!l(this._isDSTShifted)) return this._isDSTShifted;
    var e = {};

    if (w(e, this), (e = Ot(e))._a) {
      var t = e._isUTC ? y(e._a) : bt(e._a);
      this._isDSTShifted = this.isValid() && 0 < a(e._a, t.toArray());
    } else this._isDSTShifted = !1;

    return this._isDSTShifted;
  });
  var yn = P.prototype;

  function gn(e, t, n, s) {
    var i = ht(),
        r = y().set(s, t);
    return i[n](r, e);
  }

  function vn(e, t, n) {
    if (h(e) && (t = e, e = void 0), e = e || "", null != t) return gn(e, t, n, "month");
    var s,
        i = [];

    for (s = 0; s < 12; s++) {
      i[s] = gn(e, s, n, "month");
    }

    return i;
  }

  function pn(e, t, n, s) {
    t = ("boolean" == typeof e ? h(t) && (n = t, t = void 0) : (t = e, e = !1, h(n = t) && (n = t, t = void 0)), t || "");
    var i,
        r = ht(),
        a = e ? r._week.dow : 0;
    if (null != n) return gn(t, (n + a) % 7, s, "day");
    var o = [];

    for (i = 0; i < 7; i++) {
      o[i] = gn(t, (i + a) % 7, s, "day");
    }

    return o;
  }

  yn.calendar = function (e, t, n) {
    var s = this._calendar[e] || this._calendar.sameElse;
    return b(s) ? s.call(t, n) : s;
  }, yn.longDateFormat = function (e) {
    var t = this._longDateFormat[e],
        n = this._longDateFormat[e.toUpperCase()];

    return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function (e) {
      return e.slice(1);
    }), this._longDateFormat[e]);
  }, yn.invalidDate = function () {
    return this._invalidDate;
  }, yn.ordinal = function (e) {
    return this._ordinal.replace("%d", e);
  }, yn.preparse = _n, yn.postformat = _n, yn.relativeTime = function (e, t, n, s) {
    var i = this._relativeTime[n];
    return b(i) ? i(e, t, n, s) : i.replace(/%d/i, e);
  }, yn.pastFuture = function (e, t) {
    var n = this._relativeTime[0 < e ? "future" : "past"];
    return b(n) ? n(t) : n.replace(/%s/i, t);
  }, yn.set = function (e) {
    var t, n;

    for (n in e) {
      b(t = e[n]) ? this[n] = t : this["_" + n] = t;
    }

    this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source);
  }, yn.months = function (e, t) {
    return e ? o(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || We).test(t) ? "format" : "standalone"][e.month()] : o(this._months) ? this._months : this._months.standalone;
  }, yn.monthsShort = function (e, t) {
    return e ? o(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[We.test(t) ? "format" : "standalone"][e.month()] : o(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone;
  }, yn.monthsParse = function (e, t, n) {
    var s, i, r;
    if (this._monthsParseExact) return function (e, t, n) {
      var s,
          i,
          r,
          a = e.toLocaleLowerCase();
      if (!this._monthsParse) for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], s = 0; s < 12; ++s) {
        r = y([2e3, s]), this._shortMonthsParse[s] = this.monthsShort(r, "").toLocaleLowerCase(), this._longMonthsParse[s] = this.months(r, "").toLocaleLowerCase();
      }
      return n ? "MMM" === t ? -1 !== (i = Ye.call(this._shortMonthsParse, a)) ? i : null : -1 !== (i = Ye.call(this._longMonthsParse, a)) ? i : null : "MMM" === t ? -1 !== (i = Ye.call(this._shortMonthsParse, a)) ? i : -1 !== (i = Ye.call(this._longMonthsParse, a)) ? i : null : -1 !== (i = Ye.call(this._longMonthsParse, a)) ? i : -1 !== (i = Ye.call(this._shortMonthsParse, a)) ? i : null;
    }.call(this, e, t, n);

    for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), s = 0; s < 12; s++) {
      if (i = y([2e3, s]), n && !this._longMonthsParse[s] && (this._longMonthsParse[s] = new RegExp("^" + this.months(i, "").replace(".", "") + "$", "i"), this._shortMonthsParse[s] = new RegExp("^" + this.monthsShort(i, "").replace(".", "") + "$", "i")), n || this._monthsParse[s] || (r = "^" + this.months(i, "") + "|^" + this.monthsShort(i, ""), this._monthsParse[s] = new RegExp(r.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[s].test(e)) return s;
      if (n && "MMM" === t && this._shortMonthsParse[s].test(e)) return s;
      if (!n && this._monthsParse[s].test(e)) return s;
    }
  }, yn.monthsRegex = function (e) {
    return this._monthsParseExact ? (m(this, "_monthsRegex") || Ne.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (m(this, "_monthsRegex") || (this._monthsRegex = Le), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex);
  }, yn.monthsShortRegex = function (e) {
    return this._monthsParseExact ? (m(this, "_monthsRegex") || Ne.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (m(this, "_monthsShortRegex") || (this._monthsShortRegex = Fe), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex);
  }, yn.week = function (e) {
    return Ie(e, this._week.dow, this._week.doy).week;
  }, yn.firstDayOfYear = function () {
    return this._week.doy;
  }, yn.firstDayOfWeek = function () {
    return this._week.dow;
  }, yn.weekdays = function (e, t) {
    var n = o(this._weekdays) ? this._weekdays : this._weekdays[e && !0 !== e && this._weekdays.isFormat.test(t) ? "format" : "standalone"];
    return !0 === e ? je(n, this._week.dow) : e ? n[e.day()] : n;
  }, yn.weekdaysMin = function (e) {
    return !0 === e ? je(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin;
  }, yn.weekdaysShort = function (e) {
    return !0 === e ? je(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort;
  }, yn.weekdaysParse = function (e, t, n) {
    var s, i, r;
    if (this._weekdaysParseExact) return function (e, t, n) {
      var s,
          i,
          r,
          a = e.toLocaleLowerCase();
      if (!this._weekdaysParse) for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], s = 0; s < 7; ++s) {
        r = y([2e3, 1]).day(s), this._minWeekdaysParse[s] = this.weekdaysMin(r, "").toLocaleLowerCase(), this._shortWeekdaysParse[s] = this.weekdaysShort(r, "").toLocaleLowerCase(), this._weekdaysParse[s] = this.weekdays(r, "").toLocaleLowerCase();
      }
      return n ? "dddd" === t ? -1 !== (i = Ye.call(this._weekdaysParse, a)) ? i : null : "ddd" === t ? -1 !== (i = Ye.call(this._shortWeekdaysParse, a)) ? i : null : -1 !== (i = Ye.call(this._minWeekdaysParse, a)) ? i : null : "dddd" === t ? -1 !== (i = Ye.call(this._weekdaysParse, a)) ? i : -1 !== (i = Ye.call(this._shortWeekdaysParse, a)) ? i : -1 !== (i = Ye.call(this._minWeekdaysParse, a)) ? i : null : "ddd" === t ? -1 !== (i = Ye.call(this._shortWeekdaysParse, a)) ? i : -1 !== (i = Ye.call(this._weekdaysParse, a)) ? i : -1 !== (i = Ye.call(this._minWeekdaysParse, a)) ? i : null : -1 !== (i = Ye.call(this._minWeekdaysParse, a)) ? i : -1 !== (i = Ye.call(this._weekdaysParse, a)) ? i : -1 !== (i = Ye.call(this._shortWeekdaysParse, a)) ? i : null;
    }.call(this, e, t, n);

    for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), s = 0; s < 7; s++) {
      if (i = y([2e3, 1]).day(s), n && !this._fullWeekdaysParse[s] && (this._fullWeekdaysParse[s] = new RegExp("^" + this.weekdays(i, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[s] = new RegExp("^" + this.weekdaysShort(i, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[s] = new RegExp("^" + this.weekdaysMin(i, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[s] || (r = "^" + this.weekdays(i, "") + "|^" + this.weekdaysShort(i, "") + "|^" + this.weekdaysMin(i, ""), this._weekdaysParse[s] = new RegExp(r.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[s].test(e)) return s;
      if (n && "ddd" === t && this._shortWeekdaysParse[s].test(e)) return s;
      if (n && "dd" === t && this._minWeekdaysParse[s].test(e)) return s;
      if (!n && this._weekdaysParse[s].test(e)) return s;
    }
  }, yn.weekdaysRegex = function (e) {
    return this._weekdaysParseExact ? (m(this, "_weekdaysRegex") || Qe.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (m(this, "_weekdaysRegex") || (this._weekdaysRegex = qe), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex);
  }, yn.weekdaysShortRegex = function (e) {
    return this._weekdaysParseExact ? (m(this, "_weekdaysRegex") || Qe.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (m(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Je), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex);
  }, yn.weekdaysMinRegex = function (e) {
    return this._weekdaysParseExact ? (m(this, "_weekdaysRegex") || Qe.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (m(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Be), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex);
  }, yn.isPM = function (e) {
    return "p" === (e + "").toLowerCase().charAt(0);
  }, yn.meridiem = function (e, t, n) {
    return 11 < e ? n ? "pm" : "PM" : n ? "am" : "AM";
  }, ut("en", {
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal: function ordinal(e) {
      var t = e % 10;
      return e + (1 === D(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th");
    }
  }), c.lang = n("moment.lang is deprecated. Use moment.locale instead.", ut), c.langData = n("moment.langData is deprecated. Use moment.localeData instead.", ht);
  var wn = Math.abs;

  function Mn(e, t, n, s) {
    var i = jt(t, n);
    return e._milliseconds += s * i._milliseconds, e._days += s * i._days, e._months += s * i._months, e._bubble();
  }

  function kn(e) {
    return e < 0 ? Math.floor(e) : Math.ceil(e);
  }

  function Sn(e) {
    return 4800 * e / 146097;
  }

  function Dn(e) {
    return 146097 * e / 4800;
  }

  function Yn(e) {
    return function () {
      return this.as(e);
    };
  }

  var On = Yn("ms"),
      Tn = Yn("s"),
      bn = Yn("m"),
      xn = Yn("h"),
      Pn = Yn("d"),
      Wn = Yn("w"),
      Cn = Yn("M"),
      Hn = Yn("Q"),
      Rn = Yn("y");

  function Un(e) {
    return function () {
      return this.isValid() ? this._data[e] : NaN;
    };
  }

  var Fn = Un("milliseconds"),
      Ln = Un("seconds"),
      Nn = Un("minutes"),
      Gn = Un("hours"),
      Vn = Un("days"),
      En = Un("months"),
      In = Un("years");
  var An = Math.round,
      jn = {
    ss: 44,
    s: 45,
    m: 45,
    h: 22,
    d: 26,
    M: 11
  };
  var Zn = Math.abs;

  function zn(e) {
    return (0 < e) - (e < 0) || +e;
  }

  function $n() {
    if (!this.isValid()) return this.localeData().invalidDate();
    var e,
        t,
        n = Zn(this._milliseconds) / 1e3,
        s = Zn(this._days),
        i = Zn(this._months);
    t = S((e = S(n / 60)) / 60), n %= 60, e %= 60;
    var r = S(i / 12),
        a = i %= 12,
        o = s,
        u = t,
        l = e,
        h = n ? n.toFixed(3).replace(/\.?0+$/, "") : "",
        d = this.asSeconds();
    if (!d) return "P0D";

    var c = d < 0 ? "-" : "",
        f = zn(this._months) !== zn(d) ? "-" : "",
        m = zn(this._days) !== zn(d) ? "-" : "",
        _ = zn(this._milliseconds) !== zn(d) ? "-" : "";

    return c + "P" + (r ? f + r + "Y" : "") + (a ? f + a + "M" : "") + (o ? m + o + "D" : "") + (u || l || h ? "T" : "") + (u ? _ + u + "H" : "") + (l ? _ + l + "M" : "") + (h ? _ + h + "S" : "");
  }

  var qn = Ht.prototype;
  return qn.isValid = function () {
    return this._isValid;
  }, qn.abs = function () {
    var e = this._data;
    return this._milliseconds = wn(this._milliseconds), this._days = wn(this._days), this._months = wn(this._months), e.milliseconds = wn(e.milliseconds), e.seconds = wn(e.seconds), e.minutes = wn(e.minutes), e.hours = wn(e.hours), e.months = wn(e.months), e.years = wn(e.years), this;
  }, qn.add = function (e, t) {
    return Mn(this, e, t, 1);
  }, qn.subtract = function (e, t) {
    return Mn(this, e, t, -1);
  }, qn.as = function (e) {
    if (!this.isValid()) return NaN;
    var t,
        n,
        s = this._milliseconds;
    if ("month" === (e = H(e)) || "quarter" === e || "year" === e) switch (t = this._days + s / 864e5, n = this._months + Sn(t), e) {
      case "month":
        return n;

      case "quarter":
        return n / 3;

      case "year":
        return n / 12;
    } else switch (t = this._days + Math.round(Dn(this._months)), e) {
      case "week":
        return t / 7 + s / 6048e5;

      case "day":
        return t + s / 864e5;

      case "hour":
        return 24 * t + s / 36e5;

      case "minute":
        return 1440 * t + s / 6e4;

      case "second":
        return 86400 * t + s / 1e3;

      case "millisecond":
        return Math.floor(864e5 * t) + s;

      default:
        throw new Error("Unknown unit " + e);
    }
  }, qn.asMilliseconds = On, qn.asSeconds = Tn, qn.asMinutes = bn, qn.asHours = xn, qn.asDays = Pn, qn.asWeeks = Wn, qn.asMonths = Cn, qn.asQuarters = Hn, qn.asYears = Rn, qn.valueOf = function () {
    return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * D(this._months / 12) : NaN;
  }, qn._bubble = function () {
    var e,
        t,
        n,
        s,
        i,
        r = this._milliseconds,
        a = this._days,
        o = this._months,
        u = this._data;
    return 0 <= r && 0 <= a && 0 <= o || r <= 0 && a <= 0 && o <= 0 || (r += 864e5 * kn(Dn(o) + a), o = a = 0), u.milliseconds = r % 1e3, e = S(r / 1e3), u.seconds = e % 60, t = S(e / 60), u.minutes = t % 60, n = S(t / 60), u.hours = n % 24, o += i = S(Sn(a += S(n / 24))), a -= kn(Dn(i)), s = S(o / 12), o %= 12, u.days = a, u.months = o, u.years = s, this;
  }, qn.clone = function () {
    return jt(this);
  }, qn.get = function (e) {
    return e = H(e), this.isValid() ? this[e + "s"]() : NaN;
  }, qn.milliseconds = Fn, qn.seconds = Ln, qn.minutes = Nn, qn.hours = Gn, qn.days = Vn, qn.weeks = function () {
    return S(this.days() / 7);
  }, qn.months = En, qn.years = In, qn.humanize = function (e) {
    if (!this.isValid()) return this.localeData().invalidDate();
    var t,
        n,
        s,
        i,
        r,
        a,
        o,
        u,
        l,
        h,
        d,
        c = this.localeData(),
        f = (n = !e, s = c, i = jt(t = this).abs(), r = An(i.as("s")), a = An(i.as("m")), o = An(i.as("h")), u = An(i.as("d")), l = An(i.as("M")), h = An(i.as("y")), (d = r <= jn.ss && ["s", r] || r < jn.s && ["ss", r] || a <= 1 && ["m"] || a < jn.m && ["mm", a] || o <= 1 && ["h"] || o < jn.h && ["hh", o] || u <= 1 && ["d"] || u < jn.d && ["dd", u] || l <= 1 && ["M"] || l < jn.M && ["MM", l] || h <= 1 && ["y"] || ["yy", h])[2] = n, d[3] = 0 < +t, d[4] = s, function (e, t, n, s, i) {
      return i.relativeTime(t || 1, !!n, e, s);
    }.apply(null, d));
    return e && (f = c.pastFuture(+this, f)), c.postformat(f);
  }, qn.toISOString = $n, qn.toString = $n, qn.toJSON = $n, qn.locale = Xt, qn.localeData = en, qn.toIsoString = n("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", $n), qn.lang = Kt, I("X", 0, 0, "unix"), I("x", 0, 0, "valueOf"), ue("x", se), ue("X", /[+-]?\d+(\.\d{1,3})?/), ce("X", function (e, t, n) {
    n._d = new Date(1e3 * parseFloat(e, 10));
  }), ce("x", function (e, t, n) {
    n._d = new Date(D(e));
  }), c.version = "2.24.0", e = bt, c.fn = mn, c.min = function () {
    return Wt("isBefore", [].slice.call(arguments, 0));
  }, c.max = function () {
    return Wt("isAfter", [].slice.call(arguments, 0));
  }, c.now = function () {
    return Date.now ? Date.now() : +new Date();
  }, c.utc = y, c.unix = function (e) {
    return bt(1e3 * e);
  }, c.months = function (e, t) {
    return vn(e, t, "months");
  }, c.isDate = d, c.locale = ut, c.invalid = p, c.duration = jt, c.isMoment = k, c.weekdays = function (e, t, n) {
    return pn(e, t, n, "weekdays");
  }, c.parseZone = function () {
    return bt.apply(null, arguments).parseZone();
  }, c.localeData = ht, c.isDuration = Rt, c.monthsShort = function (e, t) {
    return vn(e, t, "monthsShort");
  }, c.weekdaysMin = function (e, t, n) {
    return pn(e, t, n, "weekdaysMin");
  }, c.defineLocale = lt, c.updateLocale = function (e, t) {
    if (null != t) {
      var n,
          s,
          i = st;
      null != (s = ot(e)) && (i = s._config), (n = new P(t = x(i, t))).parentLocale = it[e], it[e] = n, ut(e);
    } else null != it[e] && (null != it[e].parentLocale ? it[e] = it[e].parentLocale : null != it[e] && delete it[e]);

    return it[e];
  }, c.locales = function () {
    return s(it);
  }, c.weekdaysShort = function (e, t, n) {
    return pn(e, t, n, "weekdaysShort");
  }, c.normalizeUnits = H, c.relativeTimeRounding = function (e) {
    return void 0 === e ? An : "function" == typeof e && (An = e, !0);
  }, c.relativeTimeThreshold = function (e, t) {
    return void 0 !== jn[e] && (void 0 === t ? jn[e] : (jn[e] = t, "s" === e && (jn.ss = t - 1), !0));
  }, c.calendarFormat = function (e, t) {
    var n = e.diff(t, "days", !0);
    return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse";
  }, c.prototype = mn, c.HTML5_FMT = {
    DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
    DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
    DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
    DATE: "YYYY-MM-DD",
    TIME: "HH:mm",
    TIME_SECONDS: "HH:mm:ss",
    TIME_MS: "HH:mm:ss.SSS",
    WEEK: "GGGG-[W]WW",
    MONTH: "YYYY-MM"
  }, c;
});