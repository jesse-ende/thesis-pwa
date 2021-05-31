(self.AMP = self.AMP || []).push({
    n: "amp-install-serviceworker",
    ev: "0.1",
    l: true,
    v: "2105150310000",
    m: 0,
    f: (function(AMP, _) {
        'use strict';
        var h = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        };

        function k(a) {
            for (var b = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global], c = 0; c < b.length; ++c) {
                var d = b[c];
                if (d && d.Math == Math) return
            }(function() {
                throw Error("Cannot find global object");
            })()
        }
        k(this);
        "function" === typeof Symbol && Symbol("x");
        var l;
        if ("function" == typeof Object.setPrototypeOf) l = Object.setPrototypeOf;
        else {
            var m;
            a: {
                var n = {
                        a: !0
                    },
                    p = {};
                try {
                    p.__proto__ = n;
                    m = p.a;
                    break a
                } catch (a) {}
                m = !1
            }
            l = m ? function(a, b) {
                a.__proto__ = b;
                if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
                return a
            } : null
        }
        var t = l;

        function u(a) {
            return a || {}
        };

        function v(a, b) {
            var c = b = void 0 === b ? "" : b;
            try {
                return decodeURIComponent(a)
            } catch (d) {
                return c
            }
        };
        var w = /(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;
        var x = "";

        function y() {
            var a = self;
            if (a.__AMP_MODE) var b = a.__AMP_MODE;
            else {
                b = a.location.originalHash || a.location.hash;
                var c = Object.create(null);
                if (b)
                    for (var d; d = w.exec(b);) {
                        var e = v(d[1], d[1]);
                        d = d[2] ? v(d[2].replace(/\+/g, " "), d[2]) : "";
                        c[e] = d
                    }
                x || (x = a.AMP_CONFIG && a.AMP_CONFIG.v ? a.AMP_CONFIG.v : "012105150310000");
                b = {
                    localDev: !1,
                    development: !!(0 <= ["1", "actions", "amp", "amp4ads", "amp4email"].indexOf(c.development) || a.AMP_DEV_MODE),
                    examiner: "2" == c.development,
                    esm: !1,
                    geoOverride: c["amp-geo"],
                    minified: !0,
                    test: !1,
                    log: c.log,
                    version: "2105150310000",
                    rtvVersion: x
                };
                b = a.__AMP_MODE = b
            }
            return b
        };
        var z = self.AMP_CONFIG || {},
            A = ("string" == typeof z.cdnProxyRegex ? new RegExp(z.cdnProxyRegex) : z.cdnProxyRegex) || /^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;

        function B(a) {
            if (!self.document || !self.document.head || self.location && A.test(self.location.origin)) return null;
            var b = self.document.head.querySelector('meta[name="' + a + '"]');
            return b && b.getAttribute("content") || null
        }
        var C = {
            thirdParty: z.thirdPartyUrl || "https://3p.ampproject.net",
            thirdPartyFrameHost: z.thirdPartyFrameHost || "ampproject.net",
            thirdPartyFrameRegex: ("string" == typeof z.thirdPartyFrameRegex ? new RegExp(z.thirdPartyFrameRegex) : z.thirdPartyFrameRegex) || /^d-\d+\.ampproject\.net$/,
            cdn: z.cdnUrl || B("runtime-host") || "https://cdn.ampproject.org",
            cdnProxyRegex: A,
            localhostRegex: /^https?:\/\/localhost(:\d+)?$/,
            errorReporting: z.errorReportingUrl || "https://us-central1-amp-error-reporting.cloudfunctions.net/r",
            betaErrorReporting: z.betaErrorReportingUrl ||
                "https://us-central1-amp-error-reporting.cloudfunctions.net/r-beta",
            localDev: z.localDev || !1,
            trustedViewerHosts: [/(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/, /(^|\.)gmail\.(com|dev)$/],
            geoApi: z.geoApiUrl || B("amp-geo-api")
        };
        self.__AMP_LOG = self.__AMP_LOG || {
            user: null,
            dev: null,
            userForEmbed: null
        };
        var D = self.__AMP_LOG;

        function E() {
            if (!D.user) throw Error("failed to call initLogConstructor");
            return D.user
        }

        function F(a, b, c, d, e) {
            E().assert(a, b, c, d, e, void 0, void 0, void 0, void 0, void 0, void 0)
        };

        function G(a, b) {
            a = a.__AMP_TOP || (a.__AMP_TOP = a);
            return H(a, b)
        }

        function I(a) {
            var b = J(a);
            b = K(b);
            return H(b, "documentInfo")
        }

        function L(a) {
            a = J(a);
            a = K(a);
            return M(a, "url") ? H(a, "url") : null
        }

        function J(a) {
            return a.nodeType ? G((a.ownerDocument || a).defaultView, "ampdoc").getAmpDoc(a) : a
        }

        function K(a) {
            a = J(a);
            return a.isSingleDoc() ? a.win : a
        }

        function H(a, b) {
            M(a, b);
            var c = a.__AMP_SERVICES;
            c || (c = a.__AMP_SERVICES = {});
            a = c[b];
            a.obj || (a.obj = new a.ctor(a.context), a.context = null, a.resolve && a.resolve(a.obj));
            return a.obj
        }

        function M(a, b) {
            a = a.__AMP_SERVICES && a.__AMP_SERVICES[b];
            return !(!a || !a.ctor)
        };
        /*
         https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
        function N(a, b) {
            for (; a && void 0 !== a; a = a.parentElement)
                if (b(a)) return a;
            return null
        }

        function O(a) {
            return a.closest ? a.closest("A") : N(a, function(b) {
                var c = b.matches || b.webkitMatchesSelector || b.mozMatchesSelector || b.msMatchesSelector || b.oMatchesSelector;
                return c ? c.call(b, "A") : !1
            })
        };
        var P;

        function Q(a, b) {
            var c = aa();
            a.addEventListener("click", function(d) {
                try {
                    return b(d)
                } catch (e) {
                    throw self.__AMP_REPORT_ERROR(e), e;
                }
            }, c ? void 0 : !1)
        }

        function aa() {
            if (void 0 !== P) return P;
            P = !1;
            try {
                var a = {
                    get capture() {
                        P = !0
                    }
                };
                self.addEventListener("test-options", null, a);
                self.removeEventListener("test-options", null, a)
            } catch (b) {}
            return P
        };
        u({
            c: !0,
            v: !0,
            a: !0,
            ad: !0
        });

        function R(a) {
            var b = a.indexOf("#");
            return -1 == b ? a : a.substring(0, b)
        };

        function S(a) {
            var b = !1;
            void 0 === b && (b = a.hasAttribute("hidden"));
            b ? a.removeAttribute("hidden") : a.setAttribute("hidden", "")
        };

        function T(a) {
            a = AMP.BaseElement.call(this, a) || this;
            a.h = null;
            a.F = null;
            a.j = G(a.win, "platform").isSafari();
            return a
        }
        var U = AMP.BaseElement;
        T.prototype = h(U.prototype);
        T.prototype.constructor = T;
        if (t) t(T, U);
        else
            for (var V in U)
                if ("prototype" != V)
                    if (Object.defineProperties) {
                        var W = Object.getOwnPropertyDescriptor(U, V);
                        W && Object.defineProperty(T, V, W)
                    } else T[V] = U[V];
        T.G = U.prototype;
        T.prototype.buildCallback = function() {
            var a = this,
                b = this.win;
            if ("serviceWorker" in b.navigator) {
                var c = L(this.element),
                    d = this.element.getAttribute("src");
                c.assertHttpsUrl(d, this.element);
                if (!c.isProxyOrigin(d) && !c.isProxyOrigin(b.location.href) || this.j) c.parse(b.location.href).origin == c.parse(d).origin ? X(this).then(function() {
                    return ba(a.win, d, a.element)
                }) : this.user().error("amp-install-serviceworker", "Did not install ServiceWorker because it does not match the current origin: " + d);
                else {
                    var e = this.element.getAttribute("data-iframe-src");
                    if (e) {
                        c.assertHttpsUrl(e, this.element);
                        var f = c.parse(e).origin,
                            g = I(this.element).get(),
                            q = c.parse(g.sourceUrl),
                            r = c.parse(g.canonicalUrl);
                        F(f == q.origin || f == r.origin, "data-iframe-src (%s) should be a URL on the same origin as the source (%s) or canonical URL (%s) of the AMP-document.", f, q.origin, r.origin);
                        this.h = e;
                        X(this).then(function() {
                            return ca(a)
                        })
                    }
                }(c.isProxyOrigin(d) || c.isProxyOrigin(b.location.href)) && this.j && this.user().error("amp-install-serviceworker", "Did not install ServiceWorker because of safari double keyring caching as it will not have any effect")
            } else da(this)
        };

        function X(a) {
            return Promise.all([a.loadPromise(a.win), a.getAmpDoc().whenFirstVisible()])
        }

        function ca(a) {
            return a.mutateElement(function() {
                S(a.element);
                var b = a.win.document.createElement("iframe");
                b.setAttribute("sandbox", "allow-same-origin allow-scripts");
                b.src = a.h;
                a.element.appendChild(b)
            })
        }

        function da(a) {
            if (a.getAmpDoc().isSingleDoc()) {
                var b = a.getAmpDoc(),
                    c = a.win,
                    d = L(a.element),
                    e = d.parse(c.location.href),
                    f = a.element.getAttribute("data-no-service-worker-fallback-url-match"),
                    g = a.element.getAttribute("data-no-service-worker-fallback-shell-url");
                if (f || g) {
                    F(f && g, 'Both, "%s" and "%s" must be specified for url-rewrite', "data-no-service-worker-fallback-url-match", "data-no-service-worker-fallback-shell-url");
                    g = R(g);
                    try {
                        var q = new RegExp(f)
                    } catch (r) {
                        throw E().createError('Invalid "data-no-service-worker-fallback-url-match" expression',
                            r);
                    }
                    F(d.getSourceOrigin(e) == d.parse(g).origin, 'Shell source origin "%s" must be the same as source origin "%s"', g, e.href);
                    a.F = new Y(b, q, g, a.element);
                    d.isSecure(g) && ea(a, g)
                }
            }
        }

        function ea(a, b) {
            X(a).then(function() {
                a.mutateElement(function() {
                    return fa(a, b)
                })
            })
        }

        function fa(a, b) {
            var c = a.win.document.createElement("iframe");
            c.id = "i-amphtml-shell-preload";
            c.setAttribute("src", b + "#preload");
            S(c);
            c.setAttribute("sandbox", "allow-scripts allow-same-origin");
            a.loadPromise(c).then(function() {
                c.parentElement && c.parentElement.removeChild(c)
            });
            a.element.appendChild(c)
        }

        function Y(a, b, c, d) {
            this.win = a.win;
            this.D = b;
            this.C = c;
            this.A = L(d);
            this.o = this.A.parse(c);
            a = a.getRootNode();
            b = this.B.bind(this);
            Q(a, b)
        }
        Y.prototype.B = function(a) {
            if (!a.defaultPrevented && (a = O(a.target)) && a.href) {
                var b = this.A.parse(a.href);
                if (b.origin == this.o.origin && b.pathname != this.o.pathname && this.D.test(b.href) && !a.getAttribute("i-amphtml-orig-href")) {
                    var c = this.win;
                    R(b.href) != R(c.location.href) && (a.setAttribute("i-amphtml-orig-href", a.href), a.href = this.C + "#href=" + encodeURIComponent("" + b.pathname + b.search + b.hash))
                }
            }
        };

        function ba(a, b, c) {
            var d = {};
            c.hasAttribute("data-scope") && (d.scope = c.getAttribute("data-scope"));
            return a.navigator.serviceWorker.register(b, d).then(function(e) {
                y().development && E().info("amp-install-serviceworker", "ServiceWorker registration successful with scope: ", e.scope);
                var f = e.installing;
                f ? f.addEventListener("statechange", function(g) {
                    "activated" === g.target.state && Z(e, a, c)
                }) : e.active && Z(e, a, c);
                return e
            }, function(e) {
                E().error("amp-install-serviceworker", "ServiceWorker registration failed:", e)
            })
        }

        function Z(a, b, c) {
            ha(b, a);
            c.hasAttribute("data-prefetch") && ia(a, b)
        }

        function ha(a, b) {
            if ("performance" in a) {
                var c = a.performance.getEntriesByType("resource").filter(function(e) {
                        return "script" === e.initiatorType && e.name.startsWith(C.cdn)
                    }).map(function(e) {
                        return e.name
                    }),
                    d = b.active;
                d.postMessage && d.postMessage(JSON.stringify(u({
                    type: "AMP__FIRST-VISIT-CACHING",
                    payload: c
                })))
            }
        }

        function ia(a, b) {
            var c = b.document,
                d = [].map.call(c.querySelectorAll("a[data-rel=prefetch]"), function(e) {
                    return e.href
                });
            ja(c) ? d.forEach(function(e) {
                var f = c.createElement("link");
                f.setAttribute("rel", "prefetch");
                f.setAttribute("href", e);
                c.head.appendChild(f)
            }) : (a = a.active, a.postMessage && a.postMessage(JSON.stringify(u({
                type: "AMP__LINK-PREFETCH",
                payload: d
            }))))
        }

        function ja(a) {
            var b = a.createElement("link");
            return b.relList && b.relList.supports ? b.relList.supports("prefetch") : !1
        }
        (function(a) {
            a.registerElement("amp-install-serviceworker", T)
        })(self.AMP);
    })
});

//# sourceMappingURL=amp-install-serviceworker-0.1.js.map