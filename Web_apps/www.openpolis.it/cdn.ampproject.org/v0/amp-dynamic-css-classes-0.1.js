(self.AMP = self.AMP || []).push({
    n: "amp-dynamic-css-classes",
    ev: "0.1",
    l: true,
    v: "2105150310000",
    m: 0,
    f: (function(AMP, _) {
        'use strict';
        var d;
        var e = self.AMP_CONFIG || {},
            f = ("string" == typeof e.cdnProxyRegex ? new RegExp(e.cdnProxyRegex) : e.cdnProxyRegex) || /^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;

        function g(a) {
            if (self.document && self.document.head && (!self.location || !f.test(self.location.origin))) {
                var b = self.document.head.querySelector('meta[name="' + a + '"]');
                b && b.getAttribute("content")
            }
        }
        e.cdnUrl || g("runtime-host");
        e.geoApiUrl || g("amp-geo-api");
        self.__AMP_LOG = self.__AMP_LOG || {
            user: null,
            dev: null,
            userForEmbed: null
        };

        function h(a, b) {
            a = a.__AMP_TOP || (a.__AMP_TOP = a);
            return k(a, b)
        }

        function m(a) {
            var b = n(a);
            b = p(b);
            return k(b, "viewer")
        }

        function n(a) {
            return a.nodeType ? h((a.ownerDocument || a).defaultView, "ampdoc").getAmpDoc(a) : a
        }

        function p(a) {
            a = n(a);
            return a.isSingleDoc() ? a.win : a
        }

        function k(a, b) {
            q(a, b);
            var c = a.__AMP_SERVICES;
            c || (c = a.__AMP_SERVICES = {});
            a = c[b];
            a.obj || (a.obj = new a.ctor(a.context), a.context = null, a.resolve && a.resolve(a.obj));
            return a.obj
        }

        function q(a, b) {
            a = a.__AMP_SERVICES && a.__AMP_SERVICES[b];
            return !(!a || !a.ctor)
        };
        /*
         https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
        function r(a) {
            var b = "";
            return a.split(".").reduceRight(function(c, l) {
                b && (l += "." + b);
                b = l;
                c.push(l);
                return c
            }, [])
        }

        function t(a) {
            var b;
            if (b = m(a).getUnconfirmedReferrerUrl()) {
                var c = a.getHeadNode();
                c = n(c);
                c = p(c);
                b = (q(c, "url") ? k(c, "url") : null).parse(b).hostname
            } else b = "";
            return "t.co" === b ? r("twitter.com") : !b && /Pinterest/.test(a.win.navigator.userAgent) ? r("www.pinterest.com") : r(b)
        }

        function u(a, b) {
            a.isBodyAvailable() ? v(a.getBody(), b) : a.waitForBodyOpen().then(function(c) {
                return v(c, b)
            })
        }

        function v(a, b) {
            var c = a.classList;
            for (a = 0; a < b.length; a++) c.add(b[a])
        }

        function w(a) {
            var b = t(a).map(function(c) {
                return "amp-referrer-" + c.replace(/\./g, "-")
            });
            h(a.win, "vsync").mutate(function() {
                u(a, b)
            })
        }

        function x(a) {
            m(a).isEmbedded() && h(a.win, "vsync").mutate(function() {
                u(a, ["amp-viewer"])
            })
        }

        function y(a) {
            w(a);
            x(a)
        }
        y.prototype.whenReady = function() {
            d || (d = Promise.resolve(void 0));
            var a = d;
            return a
        };
        (function(a) {
            a.registerServiceForDoc("amp-dynamic-css-classes", y)
        })(self.AMP);
    })
});

//# sourceMappingURL=amp-dynamic-css-classes-0.1.js.map