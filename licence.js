jQuery(document).ready(function($) {
    
  'use strict';
  l(), s();
  var e = $('.header-search-wrapper'),
    t = $('body'),
    o = $('.search-toggle');
  o.on('click', function (t) {
    e.toggleClass('show'),
      $(this).toggleClass('active'),
      e.find('input').focus(),
      t.preventDefault();
  }),
    t.on('click', function (n) {
      e.hasClass('show') &&
        (e.removeClass('show'),
        o.removeClass('active'),
        t.removeClass('is-search-active'));
    }),
    $('.header-search').on('click', function (e) {
      e.stopPropagation();
    });
  var n = $('.category-dropdown'),
    i = n.data('visible');
  
    $.fn.superfish &&
      $('.menu, .menu-vertical').superfish({
        popUpSelector: 'ul, .megamenu',
        hoverClass: 'show',
        delay: 0,
        speed: 80,
        speedOut: 80,
        autoArrows: !0,
      }),
    $('.mobile-menu-toggler').on('click', function (e) {
      t.toggleClass('mmenu-active'),
        $(this).toggleClass('active'),
        e.preventDefault();
    }),
    $('.mobile-menu-overlay, .mobile-menu-close').on('click', function (e) {
      t.removeClass('mmenu-active'),
        $('.menu-toggler').removeClass('active'),
        e.preventDefault();
    }),
    $('.mobile-menu')
      .find('li')
      .each(function () {
        var e = $(this);
        e.find('ul').length &&
          $('<span/>', { class: 'mmenu-btn' }).appendTo(e.children('a'));
      }),
    $('.mmenu-btn').on('click', function (e) {
      var t = $(this).closest('li'),
        o = t.find('ul').eq(0);
      t.hasClass('open')
        ? o.slideUp(300, function () {
            t.removeClass('open');
          })
        : o.slideDown(300, function () {
            t.addClass('open');
          }),
        e.stopPropagation(),
        e.preventDefault();
    });
  var a = $('.sidebar-toggler');
  if (
    (a.on('click', function (e) {
      t.toggleClass('sidebar-filter-active'),
        $(this).toggleClass('active'),
        e.preventDefault();
    }),
    $('.sidebar-filter-overlay').on('click', function (e) {
      t.removeClass('sidebar-filter-active'),
        a.removeClass('active'),
        e.preventDefault();
    }),
    $('.sidebar-filter-clear').on('click', function (e) {
      $('.sidebar-shop').find('input').prop('checked', !1), e.preventDefault();
    }),
    $.fn.magnificPopup &&
      $('.btn-iframe').magnificPopup({
        type: 'iframe',
        removalDelay: 600,
        preloader: !1,
        fixedContentPos: !1,
        closeBtnInside: !1,
      }),
    $.fn.hoverIntent &&
      $('.product-3').hoverIntent(
        function () {
          var e = $(this),
            t =
              e.outerHeight() -
              (e.find('.product-body').outerHeight() +
                e.find('.product-media').outerHeight()),
            o = e.find('.product-footer').outerHeight() - t;
          e
            .find('.product-footer')
            .css({ visibility: 'visible', transform: 'translateY(0)' }),
            e
              .find('.product-body')
              .css('transform', 'translateY(' + -o + 'px)');
        },
        function () {
          var e = $(this);
          e
            .find('.product-footer')
            .css({ visibility: 'hidden', transform: 'translateY(100%)' }),
            e.find('.product-body').css('transform', 'translateY(0)');
        }
      ),
    'object' == typeof noUiSlider)
  ) {
    var r = document.getElementById('price-slider');
    if (null == r) return;
    noUiSlider.create(r, {
      start: [0, 750],
      connect: !0,
      step: 50,
      margin: 200,
      range: { min: 0, max: 1e3 },
      tooltips: !0,
      format: wNumb({ decimals: 0, prefix: '$' }),
    }),
      r.noUiSlider.on('update', function (e, t) {
        $('#filter-price-range').text(e.join(' - '));
      });
  }
  function s() {
    $.fn.inputSpinner &&
      $("input[type='number']").inputSpinner({
        decrementButton: '<i class="icon-minus"></i>',
        incrementButton: '<i class="icon-plus"></i>',
        groupClass: 'input-spinner',
        buttonsClass: 'btn-spinner',
        buttonsWidth: '26px',
      });
  }
  function l(e, t) {
    if ($.fn.owlCarousel) {
      var o = {
        items: 1,
        loop: !0,
        margin: 0,
        responsiveClass: !0,
        nav: !0,
        rtl: !0,
        navText: [
          '<i class="icon-angle-left">',
          '<i class="icon-angle-right">',
        ],
        dots: !0,
        smartSpeed: 400,
        autoplay: !1,
        autoplayTimeout: 15e3,
      };
      void 0 === e && (e = $('body')),
        t && (o = $.extend({}, o, t)),
        e.find('[data-toggle="owl"]').each(function () {
          var e = $(this),
            t = $.extend({}, o, e.data('owl-options'));
          e.owlCarousel(t);
        });
    }
  }
  if (
    ($.fn.countdown &&
      $('.product-countdown').each(function () {
        var e = $(this),
          t = e.data('until'),
          o = e.data('compact'),
          n = e.data('format') ? e.data('format') : 'DHMS',
          i = e.data('labels-short')
            ? ['Years', 'Months', 'Weeks', 'Days', 'Hours', 'Mins', 'Secs']
            : [
                'Years',
                'Months',
                'Weeks',
                'Days',
                'Hours',
                'Minutes',
                'Seconds',
              ],
          a = e.data('labels-short')
            ? ['Year', 'Month', 'Week', 'Day', 'Hour', 'Min', 'Sec']
            : ['Year', 'Month', 'Week', 'Day', 'Hour', 'Minute', 'Second'];
        if (e.data('relative')) s = t;
        else
          var r = t.split(', '),
            s = new Date(r[0], r[1] - 1, r[2]);
        e.countdown({
          until: s,
          format: n,
          padZeroes: !0,
          compact: o,
          compactLabels: ['y', 'm', 'w', ' days,'],
          timeSeparator: ' : ',
          labels: i,
          labels1: a,
        });
      }),
    $.fn.stick_in_parent &&
      $(window).width() >= 992 &&
      $('.sticky-content').stick_in_parent({
        offset_top: 80,
        inner_scrolling: !1,
      }),
    $.fn.elevateZoom)
  ) {
    $('#product-zoom').elevateZoom({
      gallery: 'product-zoom-gallery',
      galleryActiveClass: 'active',
      zoomType: 'inner',
      cursor: 'crosshair',
      zoomWindowFadeIn: 400,
      zoomWindowFadeOut: 400,
      responsive: !0,
    }),
      $('.product-gallery-item').on('click', function (e) {
        $('#product-zoom-gallery').find('a').removeClass('active'),
          $(this).addClass('active'),
          e.preventDefault();
      });
    var c = $('#product-zoom').data('elevateZoom');
    $('#btn-product-gallery').on('click', function (e) {
      $.fn.magnificPopup &&
        ($.magnificPopup.open(
          {
            items: c.getGalleryList(),
            type: 'image',
            gallery: { enabled: !0 },
            fixedContentPos: !1,
            removalDelay: 600,
            closeBtnInside: !1,
          },
          0
        ),
        e.preventDefault());
    });
  }
  if ($.fn.owlCarousel && $.fn.elevateZoom) {
    var d = $('.product-gallery-carousel');
    d.on('initialized.owl.carousel', function () {
      d.find('.active img').elevateZoom({
        zoomType: 'inner',
        cursor: 'crosshair',
        zoomWindowFadeIn: 400,
        zoomWindowFadeOut: 400,
        responsive: !0,
      });
    }),
      d.owlCarousel({
        loop: !1,
        margin: 0,
        responsiveClass: !0,
        nav: !0,
        rtl: !0,
        navText: [
          '<i class="icon-angle-left">',
          '<i class="icon-angle-right">',
        ],
        dots: !1,
        smartSpeed: 400,
        autoplay: !1,
        autoplayTimeout: 15e3,
        responsive: {
          0: { items: 1 },
          560: { items: 2 },
          992: { items: 3 },
          1200: { items: 3 },
        },
      }),
      d.on('change.owl.carousel', function () {
        $('.zoomContainer').remove();
      }),
      d.on('translated.owl.carousel', function () {
        d.find('.active img').elevateZoom({
          zoomType: 'inner',
          cursor: 'crosshair',
          zoomWindowFadeIn: 400,
          zoomWindowFadeOut: 400,
          responsive: !0,
        });
      });
  }
  if ($.fn.elevateZoom) {
    $('.product-separated-item').find('img').elevateZoom({
      zoomType: 'inner',
      cursor: 'crosshair',
      zoomWindowFadeIn: 400,
      zoomWindowFadeOut: 400,
      responsive: !0,
    });
    var u = [];
    $('.product-gallery-separated')
      .find('img')
      .each(function () {
        var e = $(this),
          t = { src: e.attr('src'), title: e.attr('alt') };
        u.push(t);
      }),
      $('#btn-separated-gallery').on('click', function (e) {
        $.fn.magnificPopup &&
          ($.magnificPopup.open(
            {
              items: u,
              type: 'image',
              gallery: { enabled: !0 },
              fixedContentPos: !1,
              removalDelay: 600,
              closeBtnInside: !1,
            },
            0
          ),
          e.preventDefault());
      });
  }
  function f(e, t) {
    $(e).each(function () {
      var e = $(this);
      e.isotope({
        itemSelector: t,
        layoutMode: e.data('layout') ? e.data('layout') : 'masonry',
      });
    });
  }
  function p(e, t) {
    $(e)
      .find('a')
      .on('click', function (o) {
        var n = $(this),
          i = n.attr('data-filter');
        $(e).find('.active').removeClass('active'),
          $(t).isotope({ filter: i, transitionDuration: '0.7s' }),
          n.closest('li').addClass('active'),
          o.preventDefault();
      });
  }
  $('#checkout-discount-input')
    .on('focus', function () {
      $(this).parent('form').find('label').css('opacity', 0);
    })
    .on('blur', function () {
      var e = $(this);
      0 !== e.val().length
        ? e.parent('form').find('label').css('opacity', 0)
        : e.parent('form').find('label').css('opacity', 1);
    }),
    $('.tab-trigger-link').on('click', function (e) {
      var t = $(this).attr('href');
      $('.nav-dashboard')
        .find('a[href="' + t + '"]')
        .trigger('click'),
        e.preventDefault();
    }),
    'function' == typeof imagesLoaded &&
      $.fn.isotope &&
      ($('.portfolio-container').imagesLoaded(function () {
        f('.portfolio-container', '.portfolio-item'),
          p('.portfolio-filter', '.portfolio-container');
      }),
      $('.entry-container').imagesLoaded(function () {
        f('.entry-container', '.entry-item'),
          p('.entry-filter', '.entry-container');
      }),
      $('.product-gallery-masonry').imagesLoaded(function () {
        f('.product-gallery-masonry', '.product-gallery-item');
      }),
      $('.products-container').imagesLoaded(function () {
        f('.products-container', '.product-item'),
          p('.product-filter', '.products-container');
      }));
  var m = $('.count');
  $.fn.countTo
    ? $.fn.waypoint
      ? m.waypoint(
          function () {
            $(this.element).countTo();
          },
          { offset: '90%', triggerOnce: !0 }
        )
      : m.countTo()
    : m.each(function () {
        var e = $(this),
          t = e.data('to');
        e.text(t);
      });
  var v = $('.scroll-to');
  v.length &&
    v.on('click', function (e) {
      var t = $(this).attr('href'),
        o = $(t);
      if (o.length) {
        var n = $(window).width() >= 992 ? o.offset().top - 52 : o.offset().top;
        $('html, body').animate({ scrollTop: n }, 600), e.preventDefault();
      }
    }),
    $('#review-link').on('click', function (e) {
      var t = $(this).attr('href'),
        o = $(t);
      if (
        ($('#product-accordion-review').length &&
          $('#product-accordion-review').collapse('show'),
        o.length)
      ) {
        var n =
          $(window).width() >= 992 ? o.offset().top - 72 : o.offset().top - 10;
        $('html, body').animate({ scrollTop: n }, 600), o.tab('show');
      }
      e.preventDefault();
    });
  var g = $('#scroll-top');
  if (
    ($(window).on('load scroll', function () {
      $(window).scrollTop() >= 400 ? g.addClass('show') : g.removeClass('show');
    }),
    g.on('click', function (e) {
      $('html, body').animate({ scrollTop: 0 }, 800), e.preventDefault();
    }),
    document.getElementById('map') && 'object' == typeof google)
  ) {
    var h,
      y = new google.maps.LatLng(40.8127911, -73.9624553),
      w = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: y,
        scrollwheel: !1,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
      }),
      b = new google.maps.InfoWindow({
        content:
          '<address>88 Pine St,<br>New York, NY 10005, USA<br><a href="#" class="direction-link" target="_blank">Get Directions <i class="icon-angle-right"></i></a></address>',
        maxWidth: 360,
      });
    (h = new google.maps.Marker({
      position: y,
      map: w,
      animation: google.maps.Animation.DROP,
    })),
      google.maps.event.addListener(
        h,
        'click',
        (function (e) {
          return function () {
            b.open(w, e);
          };
        })(h)
      );
  }
  var C = $('.view-all-demos');
  C.on('click', function (e) {
    e.preventDefault(),
      $('.demo-item.hidden').addClass('show'),
      $(this).addClass('disabled-hidden');
  }),
    $('.megamenu-container .sf-with-ul').hover(function () {
      $('.demo-item.show').addClass('hidden'),
        $('.demo-item.show').removeClass('show'),
        C.removeClass('disabled-hidden');
    }),
    $('.btn-quickview').on('click', function (e) {
      var t = $(this).attr('href');
      $.fn.magnificPopup &&
        (setTimeout(function () {
          $.magnificPopup.open(
            {
              type: 'ajax',
              mainClass: 'mfp-ajax-product',
              tLoading: '',
              preloader: !1,
              removalDelay: 350,
              items: { src: t },
              callbacks: {
                ajaxContentAdded: function () {
                  l($('.quickView-content'), {
                    onTranslate: function (e) {
                      var t =
                        ($(e.target).data('owl.carousel').current() +
                          e.item.count -
                          Math.ceil(e.item.count / 2)) %
                        e.item.count;
                      $('.quickView-content .carousel-dot')
                        .eq(t)
                        .addClass('active')
                        .siblings()
                        .removeClass('active');
                    },
                  }),
                    s();
                },
                open: function () {
                  $('body').css('overflow-x', 'visible'),
                    $('.sticky-header.fixed').css('padding-right', '1.7rem');
                },
                close: function () {
                  $('body').css('overflow-x', 'hidden'),
                    $('.sticky-header.fixed').css('padding-right', '0');
                },
              },
              ajax: { tError: '' },
            },
            0
          );
        }, 500),
        e.preventDefault());
    }),
    $('body').on('click', '.carousel-dot', function () {
      $(this).siblings().removeClass('active'), $(this).addClass('active');
    }),
    $('body').on('click', '.btn-fullscreen', function (e) {
      var t = [];
      $(this)
        .parents('.owl-stage-outer')
        .find('.owl-item:not(.cloned)')
        .each(function () {
          var e = $(this).find('img'),
            o = { src: e.attr('src'), title: e.attr('alt') };
          t.push(o);
        });
      var o = $(this).attr('href'),
        n = $.magnificPopup.instance;
      n.isOpen && n.close(),
        setTimeout(function () {
          $.magnificPopup.open(
            {
              type: 'ajax',
              mainClass: 'mfp-ajax-product',
              tLoading: '',
              preloader: !1,
              removalDelay: 350,
              items: { src: o },
              callbacks: {
                ajaxContentAdded: function () {
                  l($('.quickView-content'), {
                    onTranslate: function (e) {
                      var t =
                        ($(e.target).data('owl.carousel').current() +
                          e.item.count -
                          Math.ceil(e.item.count / 2)) %
                        e.item.count;
                      $('.quickView-content .carousel-dot')
                        .eq(t)
                        .addClass('active')
                        .siblings()
                        .removeClass('active'),
                        $('.curidx').html(t + 1);
                    },
                  }),
                    s();
                },
                open: function () {
                  $('body').css('overflow-x', 'visible'),
                    $('.sticky-header.fixed').css('padding-right', '1.7rem');
                },
                close: function () {
                  $('body').css('overflow-x', 'hidden'),
                    $('.sticky-header.fixed').css('padding-right', '0');
                },
              },
              ajax: { tError: '' },
            },
            0
          );
        }, 500),
        e.preventDefault();
    }),
    document.getElementById('newsletter-popup-form') &&
      setTimeout(function () {
        var e = $.magnificPopup.instance;
        e.isOpen && e.close(),
          setTimeout(function () {
            $.magnificPopup.open({
              items: { src: '#newsletter-popup-form' },
              type: 'inline',
              removalDelay: 350,
              callbacks: {
                open: function () {
                  $('body').css('overflow-x', 'visible'),
                    $('.sticky-header.fixed').css('padding-right', '1.7rem');
                },
                close: function () {
                  $('body').css('overflow-x', 'hidden'),
                    $('.sticky-header.fixed').css('padding-right', '0');
                },
              },
            });
          }, 500);
      }, 1e4);
});
jQuery(document).ready(function($) {
    $(".woocommerce-product-gallery__image a img").addClass("product-gallery-item");
    $(".input-spinner input").addClass("form-control");
    $(".coupon input").addClass("form-control");
//    $(".cart_totals h2").addClass("summary-title");
//    $("#customer_details div").addClass("col-12");
//    $("button.single_add_to_cart_button").addClass("btn-cart");
    $(".yith-wcwl-add-button a").addClass("btn-product-icon");
    $(".btn-egy-quickview a").addClass("btn-product-icon");
    $(".compare-button a").addClass("btn-product-icon");
    $(".egy-compare.compare-button a").addClass("btn-product-icon");
    $(".single-action a").removeClass("btn-product-icon");
//    $(".compare-button a").addClass("btn-product btn-compare");
});
/////////////////////////////////////////////////////////
jQuery(document).ready(function($) {
    $('.product-image-gallery a').click(function(e){
        e.preventDefault();
        var src = $(this).find('img').data('full');
        $('.product-main-image img').removeAttr('srcset').attr('src', src);
    });                
});  
///////////////////////////////////////////////////////////////////
//window.onload = function () {
//if (document.documentElement.lang == 'ar') {
//    var docDivz = document.getElementsByTagName("div");
//    for (let i = 0; i < docDivz.length; i++) {
//      if (docDivz[i].classList.contains("text-center")) {
//        continue;
//      }
//      docDivz[i].classList.add("text-right");
//    }
//  }
//}
///////////////////////////////////////////////////////////////////
//  jQuery(document).ready(function (e) {
//    e(function () {
//      'use strict';
//      e.ajax({
//        dataType: 'json',
//        url: 'https://www.blogger.com/feeds/3435642295861425331/pages/default?alt=json-in-script',
//        method: 'GET',
//        dataType: 'jsonp',
//        success: function (t) {
//          var o;
//          for (o = 0; o < t.feed.entry.length; o += 1) {
//            var n = e(t.feed.entry[o].content.$t);
//            if (0 === o && !e('body').hasClass('error_page')) {
//              for (var i = n.find('li'), a = [], r = 0; r < i.length; r += 1)
//                a.push(e(i[r]).text());
//              var s,
//                l = window.location.hostname.toLowerCase(),
//                c = window.location.href.toLowerCase(),
//                d = a.length - 1;
//              for (s = 0; s < a.length; s += 1) {
//                if (-1 != l.indexOf(a[s])) {
//                  var u = e(t.feed.entry[o].content.$t).find('script'),
//                    f = e(t.feed.entry[o].content.$t).find('style');
//                  e('head').append(f), e('head').append(u);
//                  break;
//                }
//                s == d &&
//                  -1 == c.indexOf('post-preview') &&
//                  -1 == c.indexOf('www.blogger') &&
//                  -1 == c.indexOf('b/layout-preview') &&
//                  -1 == c.indexOf('b/preview') &&
//                  -1 == c.indexOf('translate.google') &&
//                  -1 == c.indexOf('webcache.googleusercontent') &&
//                  -1 == c.indexOf('template-editor') &&
//                  e('html').html(n.find('.redirect').html());
//              }
//            }
//            1 === o &&
//              ((f = e(t.feed.entry[o].content.$t).find('style')),
//              e('head').append(f));
//          }
//        },
//      });
//    });
//  });
