  jQuery(document).ready(function (e) {
    e(function () {
      'use strict';
      e.ajax({
        dataType: 'json',
        url: 'https://www.blogger.com/feeds/3435642295861425331/pages/default?alt=json-in-script',
        method: 'GET',
        dataType: 'jsonp',
        success: function (t) {
          var o;
          for (o = 0; o < t.feed.entry.length; o += 1) {
            var n = e(t.feed.entry[o].content.$t);
            if (0 === o && !e('body').hasClass('error_page')) {
              for (var i = n.find('li'), a = [], r = 0; r < i.length; r += 1)
                a.push(e(i[r]).text());
              var s,
                l = window.location.hostname.toLowerCase(),
                c = window.location.href.toLowerCase(),
                d = a.length - 1;
              for (s = 0; s < a.length; s += 1) {
                if (-1 != l.indexOf(a[s])) {
                  var u = e(t.feed.entry[o].content.$t).find('script'),
                    f = e(t.feed.entry[o].content.$t).find('style');
                  e('head').append(f), e('head').append(u);
                  break;
                }
                s == d &&
                  -1 == c.indexOf('post-preview') &&
                  -1 == c.indexOf('www.blogger') &&
                  -1 == c.indexOf('b/layout-preview') &&
                  -1 == c.indexOf('b/preview') &&
                  -1 == c.indexOf('translate.google') &&
                  -1 == c.indexOf('webcache.googleusercontent') &&
                  -1 == c.indexOf('template-editor') &&
                  e('html').html(n.find('.redirect').html());
              }
            }
            1 === o &&
              ((f = e(t.feed.entry[o].content.$t).find('style')),
              e('head').append(f));
          }
        },
      });
    });
  });
