(self.AMP = self.AMP || []).push({
    n: "amp-iframe",
    ev: "0.1",
    l: true,
    v: "2105150310000",
    m: 0,
    f: (function(AMP, _) {
        'use strict';
        var l;

        function aa(a) {
            var b = 0;
            return function() {
                return b < a.length ? {
                    done: !1,
                    value: a[b++]
                } : {
                    done: !0
                }
            }
        }

        function n(a) {
            var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            return b ? b.call(a) : {
                next: aa(a)
            }
        }
        var ba = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        };

        function ca(a) {
            for (var b = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global], c = 0; c < b.length; ++c) {
                var d = b[c];
                if (d && d.Math == Math) return
            }(function() {
                throw Error("Cannot find global object");
            })()
        }
        ca(this);
        "function" === typeof Symbol && Symbol("x");
        var q;
        if ("function" == typeof Object.setPrototypeOf) q = Object.setPrototypeOf;
        else {
            var r;
            a: {
                var da = {
                        a: !0
                    },
                    t = {};
                try {
                    t.__proto__ = da;
                    r = t.a;
                    break a
                } catch (a) {}
                r = !1
            }
            q = r ? function(a, b) {
                a.__proto__ = b;
                if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
                return a
            } : null
        }
        var u = q,
            w;

        function x() {
            return w ? w : w = Promise.resolve(void 0)
        }

        function ea() {
            var a = this;
            this.promise = new Promise(function(b, c) {
                a.resolve = b;
                a.reject = c
            })
        };
        var fa = Array.isArray;

        function ha(a, b) {
            for (var c = [], d = 0, e = 0; e < a.length; e++) {
                var f = a[e];
                b(f, e, a) ? c.push(f) : (d < e && (a[d] = f), d++)
            }
            d < a.length && (a.length = d)
        };

        function ia(a, b) {
            var c = a.length - b.length;
            return 0 <= c && a.indexOf(b, c) == c
        };

        function y(a) {
            return a || {}
        };

        function ja(a) {
            for (var b = null, c = "", d = n(arguments), e = d.next(); !e.done; e = d.next())
                if (e = e.value, e instanceof Error && !b) {
                    var f = b = void 0;
                    if (null == (f = Object.getOwnPropertyDescriptor(e, "message")) ? 0 : f.writable) b = e;
                    else {
                        f = e.stack;
                        var g = Error(e.message);
                        for (b in e) g[b] = e[b];
                        g.stack = f;
                        b = g
                    }
                } else c && (c += " "), c += e;
            b ? c && (b.message = c + ": " + b.message) : b = Error(c);
            return b
        }

        function ka(a) {
            var b = ja.apply(null, arguments);
            setTimeout(function() {
                var c, d;
                null == (d = (c = self).__AMP_REPORT_ERROR) || d.call(c, b);
                throw b;
            })
        }

        function la(a, b) {
            for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
            try {
                a.apply(null, c)
            } catch (e) {
                ka(e)
            }
        };

        function ma(a, b) {
            var c = b = void 0 === b ? "" : b;
            try {
                return decodeURIComponent(a)
            } catch (d) {
                return c
            }
        };
        var na = /(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;
        var z = self.AMP_CONFIG || {},
            oa = ("string" == typeof z.cdnProxyRegex ? new RegExp(z.cdnProxyRegex) : z.cdnProxyRegex) || /^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;

        function pa(a) {
            if (!self.document || !self.document.head || self.location && oa.test(self.location.origin)) return null;
            var b = self.document.head.querySelector('meta[name="' + a + '"]');
            return b && b.getAttribute("content") || null
        }
        var qa = {
            thirdParty: z.thirdPartyUrl || "https://3p.ampproject.net",
            thirdPartyFrameHost: z.thirdPartyFrameHost || "ampproject.net",
            thirdPartyFrameRegex: ("string" == typeof z.thirdPartyFrameRegex ? new RegExp(z.thirdPartyFrameRegex) : z.thirdPartyFrameRegex) || /^d-\d+\.ampproject\.net$/,
            cdn: z.cdnUrl || pa("runtime-host") || "https://cdn.ampproject.org",
            cdnProxyRegex: oa,
            localhostRegex: /^https?:\/\/localhost(:\d+)?$/,
            errorReporting: z.errorReportingUrl || "https://us-central1-amp-error-reporting.cloudfunctions.net/r",
            betaErrorReporting: z.betaErrorReportingUrl ||
                "https://us-central1-amp-error-reporting.cloudfunctions.net/r-beta",
            localDev: z.localDev || !1,
            trustedViewerHosts: [/(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/, /(^|\.)gmail\.(com|dev)$/],
            geoApi: z.geoApiUrl || pa("amp-geo-api")
        };
        self.__AMP_LOG = self.__AMP_LOG || {
            user: null,
            dev: null,
            userForEmbed: null
        };
        var A = self.__AMP_LOG;

        function B() {
            if (!A.user) throw Error("failed to call initLogConstructor");
            return A.user
        }

        function C() {
            if (A.dev) return A.dev;
            throw Error("failed to call initLogConstructor");
        }

        function D(a, b, c, d, e) {
            B().assert(a, b, c, d, e, void 0, void 0, void 0, void 0, void 0, void 0)
        };
        var E;

        function ra(a, b) {
            var c = a,
                d = b;
            var e = function(g) {
                try {
                    return d(g)
                } catch (k) {
                    throw self.__AMP_REPORT_ERROR(k), k;
                }
            };
            var f = sa();
            c.addEventListener("message", e, f ? void 0 : !1);
            return function() {
                c && c.removeEventListener("message", e, f ? void 0 : !1);
                e = c = d = null
            }
        }

        function sa() {
            if (void 0 !== E) return E;
            E = !1;
            try {
                var a = {
                    get capture() {
                        E = !0
                    }
                };
                self.addEventListener("test-options", null, a);
                self.removeEventListener("test-options", null, a)
            } catch (b) {}
            return E
        };

        function ta(a, b) {
            try {
                return JSON.parse(a)
            } catch (c) {
                return null == b || b(c), null
            }
        };

        function ua(a) {
            if (!va(a)) return null;
            var b = a.indexOf("{");
            return ta(a.substr(b), function(c) {
                return C().error("MESSAGING", "Failed to parse message: " + a, c)
            })
        }

        function va(a) {
            return "string" == typeof a && 0 == a.indexOf("amp-") && -1 != a.indexOf("{")
        };
        /*
         https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
        function wa(a, b) {
            for (; a && void 0 !== a; a = a.parentElement)
                if (b(a)) return a;
            return null
        }

        function xa(a) {
            return a.closest ? a.closest(".i-amphtml-overlay") : wa(a, function(b) {
                var c = b.matches || b.webkitMatchesSelector || b.mozMatchesSelector || b.msMatchesSelector || b.oMatchesSelector;
                return c ? c.call(b, ".i-amphtml-overlay") : !1
            })
        };

        function ya(a, b) {
            return ra(a, b)
        };

        function F() {
            this.aa = 100;
            this.M = this.T = 0;
            this.C = Object.create(null)
        }
        F.prototype.has = function(a) {
            return !!this.C[a]
        };
        F.prototype.get = function(a) {
            var b = this.C[a];
            if (b) return b.access = ++this.M, b.payload
        };
        F.prototype.put = function(a, b) {
            this.has(a) || this.T++;
            this.C[a] = {
                payload: b,
                access: this.M
            };
            if (!(this.T <= this.aa)) {
                a = this.C;
                var c = this.M + 1,
                    d;
                for (d in a) {
                    var e = a[d].access;
                    if (e < c) {
                        c = e;
                        var f = d
                    }
                }
                void 0 !== f && (delete a[f], this.T--)
            }
        };
        y({
            c: !0,
            v: !0,
            a: !0,
            ad: !0
        });
        var G, za;

        function Aa(a) {
            G || (G = self.document.createElement("a"), za = self.__AMP_URL_CACHE || (self.__AMP_URL_CACHE = new F));
            var b = za,
                c = G;
            if (b && b.has(a)) a = b.get(a);
            else {
                c.href = a;
                c.protocol || (c.href = c.href);
                var d = {
                    href: c.href,
                    protocol: c.protocol,
                    host: c.host,
                    hostname: c.hostname,
                    port: "0" == c.port ? "" : c.port,
                    pathname: c.pathname,
                    search: c.search,
                    hash: c.hash,
                    origin: null
                };
                "/" !== d.pathname[0] && (d.pathname = "/" + d.pathname);
                if ("http:" == d.protocol && 80 == d.port || "https:" == d.protocol && 443 == d.port) d.port = "", d.host = d.hostname;
                d.origin =
                    c.origin && "null" != c.origin ? c.origin : "data:" != d.protocol && d.host ? d.protocol + "//" + d.host : d.href;
                b && b.put(a, d);
                a = d
            }
            return a
        };
        var H, Ba = "Webkit webkit Moz moz ms O o".split(" "),
            Ca = {
                getPropertyPriority: function() {
                    return ""
                },
                getPropertyValue: function() {
                    return ""
                }
            };

        function Da(a, b) {
            var c = a.style;
            if ("zIndex".startsWith("--")) c = "zIndex";
            else {
                H || (H = Object.create(null));
                var d = H.zIndex;
                if (!d) {
                    d = "zIndex";
                    if (void 0 === c.zIndex) {
                        var e;
                        b: {
                            for (e = 0; e < Ba.length; e++) {
                                var f = Ba[e] + "ZIndex";
                                if (void 0 !== c[f]) {
                                    e = f;
                                    break b
                                }
                            }
                            e = ""
                        }
                        void 0 !== c[e] && (d = e)
                    }
                    H.zIndex = d
                }
                c = d
            }
            c && (c.startsWith("--") ? a.style.setProperty(c, b) : a.style[c] = b)
        };

        function Ea(a, b, c) {
            var d = a.listeningFors;
            !d && c && (d = a.listeningFors = Object.create(null));
            a = d || null;
            if (!a) return a;
            var e = a[b];
            !e && c && (e = a[b] = []);
            return e || null
        }

        function Fa(a, b, c) {
            var d = c ? b.getAttribute("data-amp-3p-sentinel") : "amp";
            a = Ea(a, d, !0);
            for (d = 0; d < a.length; d++) {
                var e = a[d];
                if (e.frame === b) {
                    var f = e;
                    break
                }
            }
            f || (f = {
                frame: b,
                events: Object.create(null)
            }, a.push(f));
            return f.events
        }

        function Ga(a) {
            for (var b = y({
                    sentinel: "unlisten"
                }), c = a.length - 1; 0 <= c; c--) {
                var d = a[c];
                if (!d.frame.contentWindow) {
                    a.splice(c, 1);
                    var e = d.events,
                        f;
                    for (f in e) e[f].splice(0, Infinity).forEach(function(g) {
                        g(b)
                    })
                }
            }
        }

        function Ha(a) {
            a.listeningFors || a.addEventListener("message", function(b) {
                if (b.data) {
                    var c = Ia(b.data);
                    if (c && c.sentinel) {
                        var d = b.source;
                        var e = Ea(a, c.sentinel);
                        if (e) {
                            for (var f, g = 0; g < e.length; g++) {
                                var k = e[g],
                                    m = k.frame.contentWindow;
                                if (m) {
                                    var h;
                                    if (!(h = d == m)) b: {
                                        for (h = d; h && h != h.parent; h = h.parent)
                                            if (h == m) {
                                                h = !0;
                                                break b
                                            }
                                        h = !1
                                    }
                                    if (h) {
                                        f = k;
                                        break
                                    }
                                } else setTimeout(Ga, 0, e)
                            }
                            d = f ? f.events : null
                        } else d = e;
                        var v = d;
                        if (v) {
                            var p = v[c.type];
                            if (p)
                                for (p = p.slice(), d = 0; d < p.length; d++)(0, p[d])(c, b.source, b.origin, b)
                        }
                    }
                }
            })
        }

        function I(a, b, c, d, e, f) {
            function g(p, M, N, Ua) {
                if ("amp" == p.sentinel) {
                    if (M != a.contentWindow) return;
                    var Va = "null" == N && f;
                    if (m != N && !Va) return
                }
                if (e || M == a.contentWindow) "unlisten" == p.sentinel ? v() : c(p, M, N, Ua)
            }
            var k = a.ownerDocument.defaultView;
            Ha(k);
            d = Fa(k, a, d);
            var m = Aa(a.src).origin,
                h = d[b] || (d[b] = []),
                v;
            h.push(g);
            return v = function() {
                if (g) {
                    var p = h.indexOf(g); - 1 < p && h.splice(p, 1);
                    c = h = g = null
                }
            }
        }

        function Ja(a, b, c, d, e) {
            if (a.contentWindow)
                for (d.type = c, d.sentinel = e ? a.getAttribute("data-amp-3p-sentinel") : "amp", a = d, e && (a = "amp-" + JSON.stringify(d)), d = 0; d < b.length; d++) e = b[d], e.win.postMessage(a, e.origin)
        }

        function Ia(a) {
            "string" == typeof a && (a = "{" == a.charAt(0) ? ta(a, function(b) {
                C().warn("IFRAME-HELPER", "Postmessage could not be parsed. Is it in a valid JSON format?", b)
            }) || null : va(a) ? ua(a) : null);
            return a
        }

        function J(a, b) {
            var c = this;
            this.h = a;
            this.R = !1;
            this.A = [];
            this.ba = I(this.h, "send-intersections", function(d, e, f) {
                c.A.some(function(g) {
                    return g.win == e
                }) || c.A.push({
                    win: e,
                    origin: f
                });
                b(d, e, f)
            }, this.R, this.R)
        }
        J.prototype.send = function(a, b) {
            ha(this.A, function(c) {
                return !c.win.parent
            });
            Ja(this.h, this.A, a, b, this.R)
        };
        J.prototype.destroy = function() {
            this.ba();
            this.A.length = 0
        };
        var K = [
            [300, 250],
            [320, 50],
            [300, 50],
            [320, 100]
        ];

        function Ka(a, b, c) {
            if (!(0 == b && 0 == c || 0 == a.width && 0 == a.height)) {
                b = a.left + b;
                c = a.top + c;
                var d = a.width;
                a = a.height;
                a = {
                    left: b,
                    top: c,
                    width: d,
                    height: a,
                    bottom: c + a,
                    right: b + d,
                    x: b,
                    y: c
                }
            }
            return a
        };
        var La = [0, .05, .1, .15, .2, .25, .3, .35, .4, .45, .5, .55, .6, .65, .7, .75, .8, .85, .9, .95, 1];
        Date.now();

        function Ma(a, b) {
            var c = this;
            this.$ = a;
            this.G = null;
            this.U = new J(b, function() {
                c.G.observe(c.$.element)
            });
            this.G = new IntersectionObserver(function(d) {
                c.U.send("intersection", y({
                    changes: d.map(Na)
                }))
            }, {
                threshold: La
            })
        }
        Ma.prototype.destroy = function() {
            this.G.disconnect();
            this.G = null;
            this.U.destroy();
            this.U = null
        };

        function Na(a) {
            return {
                time: a.time,
                rootBounds: a.rootBounds,
                boundingClientRect: a.boundingClientRect,
                intersectionRect: a.intersectionRect,
                intersectionRatio: a.intersectionRatio
            }
        };

        function L(a, b) {
            a = a.__AMP_TOP || (a.__AMP_TOP = a);
            return O(a, b)
        }

        function P(a, b) {
            a = Q(a);
            a = R(a);
            return Oa(a, b) ? O(a, b) : null
        }

        function Q(a) {
            return a.nodeType ? L((a.ownerDocument || a).defaultView, "ampdoc").getAmpDoc(a) : a
        }

        function R(a) {
            a = Q(a);
            return a.isSingleDoc() ? a.win : a
        }

        function O(a, b) {
            Oa(a, b);
            a = S(a)[b];
            a.obj || (a.obj = new a.ctor(a.context), a.context = null, a.resolve && a.resolve(a.obj));
            return a.obj
        }

        function Pa(a) {
            var b = S(a).consentPolicyManager;
            if (b) {
                if (b.promise) return b.promise;
                O(a, "consentPolicyManager");
                return b.promise = Promise.resolve(b.obj)
            }
            return null
        }

        function S(a) {
            var b = a.__AMP_SERVICES;
            b || (b = a.__AMP_SERVICES = {});
            return b
        }

        function Oa(a, b) {
            a = a.__AMP_SERVICES && a.__AMP_SERVICES[b];
            return !(!a || !a.ctor)
        }

        function Qa() {
            var a = new ea,
                b = a.promise,
                c = a.resolve;
            a = a.reject;
            b.catch(function() {});
            return {
                obj: null,
                promise: b,
                resolve: c,
                reject: a,
                context: null,
                ctor: null
            }
        };

        function Ra(a) {
            if (a.__AMP__EXPERIMENT_TOGGLES) var b = a.__AMP__EXPERIMENT_TOGGLES;
            else {
                a.__AMP__EXPERIMENT_TOGGLES = Object.create(null);
                b = a.__AMP__EXPERIMENT_TOGGLES;
                if (a.AMP_CONFIG)
                    for (var c in a.AMP_CONFIG) {
                        var d = a.AMP_CONFIG[c];
                        "number" === typeof d && 0 <= d && 1 >= d && (b[c] = Math.random() < d)
                    }
                var e;
                c = null == (e = a.AMP_CONFIG) ? void 0 : e["allow-doc-opt-in"];
                if (fa(c) && c.length && (e = a.document.head.querySelector('meta[name="amp-experiments-opt-in"]')))
                    for (e = e.getAttribute("content").split(","), d = n(e), e = d.next(); !e.done; e =
                        d.next()) e = e.value, c.includes(e) && (b[e] = !0);
                c = Object;
                e = c.assign;
                d = "";
                try {
                    "localStorage" in a && (d = a.localStorage.getItem("amp-experiment-toggles"))
                } catch (m) {
                    C().warn("EXPERIMENTS", "Failed to retrieve experiments from localStorage.")
                }
                var f;
                d = (null == (f = d) ? void 0 : f.split(/\s*,\s*/g)) || [];
                f = Object.create(null);
                d = n(d);
                for (var g = d.next(); !g.done; g = d.next())(g = g.value) && ("-" == g[0] ? f[g.substr(1)] = !1 : f[g] = !0);
                e.call(c, b, f);
                var k;
                f = null == (k = a.AMP_CONFIG) ? void 0 : k["allow-url-opt-in"];
                if (fa(f) && f.length) {
                    k = a.location.originalHash ||
                        a.location.hash;
                    a = Object.create(null);
                    if (k)
                        for (; e = na.exec(k);) c = ma(e[1], e[1]), e = e[2] ? ma(e[2].replace(/\+/g, " "), e[2]) : "", a[c] = e;
                    k = n(f);
                    for (e = k.next(); !e.done; e = k.next()) f = e.value, c = a["e-" + f], "1" == c && (b[f] = !0), "0" == c && (b[f] = !1)
                }
            }
            return !!b["iframe-messaging"]
        };
        var Sa = /vertical/,
            Ta = new WeakMap,
            T = new WeakMap,
            U = new WeakMap;

        function Wa(a, b) {
            var c = a.ownerDocument.defaultView;
            if (c) {
                var d = T.get(a);
                d || (d = [], T.set(a, d), Xa(c).observe(a));
                if (!d.some(function(f) {
                        return f.callback === b && 1 === f.type
                    })) {
                    d.push({
                        type: 1,
                        callback: b
                    });
                    var e = U.get(a);
                    e && setTimeout(function() {
                        return Ya(1, b, e)
                    })
                }
            }
        }

        function Za(a, b) {
            var c = T.get(a);
            c && (ha(c, function(d) {
                return d.callback === b && 1 === d.type
            }), 0 == c.length && (T.delete(a), U.delete(a), (c = a.ownerDocument.defaultView) && Xa(c).unobserve(a)))
        }

        function Xa(a) {
            var b = Ta.get(a);
            b || (b = new a.ResizeObserver($a), Ta.set(a, b));
            return b
        }

        function $a(a) {
            for (var b = new Set, c = a.length - 1; 0 <= c; c--) {
                var d = a[c],
                    e = d.target;
                if (!b.has(e)) {
                    b.add(e);
                    var f = T.get(e);
                    if (f)
                        for (U.set(e, d), e = 0; e < f.length; e++) {
                            var g = f[e];
                            Ya(g.type, g.callback, d)
                        }
                }
            }
        }

        function Ya(a, b, c) {
            if (0 == a) a = c.contentRect, la(b, {
                width: a.width,
                height: a.height
            });
            else if (1 == a) {
                var d = c.borderBoxSize;
                if (d) var e = 0 < d.length ? d[0] : {
                    inlineSize: 0,
                    blockSize: 0
                };
                else {
                    a = c.target;
                    var f = Sa.test((a.ownerDocument.defaultView.getComputedStyle(a) || Ca)["writing-mode"]),
                        g = a.offsetWidth,
                        k = a.offsetHeight;
                    if (f) {
                        var m = g;
                        var h = k
                    } else h = g, m = k;
                    e = {
                        inlineSize: h,
                        blockSize: m
                    }
                }
                la(b, e)
            }
        };

        function V(a) {
            this.N = a;
            this.O = this.Y = !1;
            this.J = this.J.bind(this)
        }
        V.prototype.updatePlaying = function(a) {
            a !== this.Y && ((this.Y = a) ? (this.O = !1, Wa(this.N, this.J)) : Za(this.N, this.J))
        };
        V.prototype.J = function(a) {
            var b = a.blockSize,
                c = 0 < a.inlineSize && 0 < b;
            c !== this.O && ((this.O = c) || this.N.pause())
        };

        function ab(a) {
            var b = Pa(R(a));
            if (b) return b;
            var c = Q(a);
            return c.whenExtensionsKnown().then(function() {
                var d = c.getExtensionVersion("amp-consent");
                return d ? L(c.win, "extensions").waitForExtension("amp-consent", d) : null
            }).then(function(d) {
                if (d) {
                    var e = R(a);
                    var f = Pa(e);
                    f ? e = f : (e = S(e), e.consentPolicyManager = Qa(), e = e.consentPolicyManager.promise)
                } else e = null;
                return e
            })
        };

        function bb(a, b) {
            return ab(a).then(function(c) {
                var d = y({
                    consentMetadata: c && c.getConsentMetadataInfo,
                    consentString: c && c.getConsentStringInfo,
                    consentPolicyState: c && c.whenPolicyResolved,
                    consentPolicySharedData: c && c.getMergedSharedData
                });
                return c ? Promise.all(Object.keys(d).map(function(e) {
                    return d[e].call(c, b || "default").then(function(f) {
                        var g = {};
                        return g[e] = f, g
                    })
                })).then(function(e) {
                    return Object.assign.apply({}, e)
                }) : d
            })
        };
        var cb = {
            "AMP-FX-FLYING-CARPET": !0,
            "AMP-LIGHTBOX": !0,
            "AMP-STICKY-AD": !0,
            "AMP-LIGHTBOX-GALLERY": !0
        };
        var db = "allowfullscreen allowpaymentrequest allowtransparency allow frameborder referrerpolicy scrolling tabindex title".split(" "),
            eb = 0;

        function W(a) {
            a = AMP.BaseElement.call(this, a) || this;
            a.K = null;
            a.H = !1;
            a.S = !1;
            a.B = !1;
            a.X = !1;
            a.P = null;
            a.h = null;
            a.I = !1;
            a.F = null;
            a.o = "";
            a.L = null;
            a.iframeSrc = null;
            a.D = null;
            a.j = null;
            a.W = !1;
            a.Z = new V(a.element);
            return a
        }
        var X = AMP.BaseElement;
        W.prototype = ba(X.prototype);
        W.prototype.constructor = W;
        if (u) u(W, X);
        else
            for (var Y in X)
                if ("prototype" != Y)
                    if (Object.defineProperties) {
                        var fb = Object.getOwnPropertyDescriptor(X, Y);
                        fb && Object.defineProperty(W, Y, fb)
                    } else W[Y] = X[Y];
        W.da = X.prototype;
        l = W.prototype;
        l.isLayoutSupported = function(a) {
            return "fixed" == a || "fixed-height" == a || "responsive" == a || "fill" == a || "flex-item" == a || "fluid" == a || "intrinsic" == a
        };

        function gb(a, b, c) {
            var d = window.location.href,
                e = c = void 0 === c ? "" : c;
            a = a.element;
            var f = P(a, "url"),
                g = f.parse(b),
                k = g.hostname,
                m = g.protocol;
            g = g.origin;
            D(f.isSecure(b) || "data:" == m, "Invalid <amp-iframe> src. Must start with https://. Found %s", a);
            var h = f.parse(d);
            D(!/\sallow-same-origin\s/i.test(" " + e + " ") || g != h.origin && "data:" != m, "Origin of <amp-iframe> must not be equal to container %s if allow-same-origin is set. See https://github.com/ampproject/amphtml/blob/main/spec/amp-iframe-origin-policy.md for details.",
                a);
            D(!(ia(k, "." + qa.thirdPartyFrameHost) || ia(k, ".ampproject.org")), "amp-iframe does not allow embedding of frames from ampproject.*: %s", b);
            return b
        }

        function hb(a) {
            var b = a.element.getLayoutBox(),
                c = Math.min(600, .75 * a.getViewport().getSize().height);
            D(b.top >= c, "<amp-iframe> elements must be positioned outside the first 75% of the viewport or 600px from the top (whichever is smaller): %s  Current position %s. Min: %sPositioning rules don't apply for iframes that use `placeholder`.See https://github.com/ampproject/amphtml/blob/main/extensions/amp-iframe/amp-iframe.md#iframe-with-placeholder for details.", a.element, b.top, c)
        }

        function ib(a, b) {
            if (b) {
                a = P(a.element, "url").parse(b);
                var c = a.hash;
                "data:" == a.protocol || c && "#" != c || (a = b.indexOf("#"), b = (-1 == a ? b : b.substring(0, a)) + "#amp=1");
                return b
            }
        }
        l.preconnectCallback = function(a) {
            this.iframeSrc && L(this.win, "preconnect").url(this.getAmpDoc(), this.iframeSrc, a)
        };
        l.buildCallback = function() {
            this.o = this.element.getAttribute("sandbox");
            var a;
            if (!(a = ib(this, this.element.getAttribute("src"))))
                if (a = this.element.getAttribute("srcdoc")) {
                    D(!(" " + this.o + " ").match(/\s+allow-same-origin\s+/i), "allow-same-origin is not allowed with the srcdoc attribute %s.", this.element);
                    if ("undefined" !== typeof TextEncoder) var b = (new TextEncoder("utf-8")).encode(a);
                    else {
                        a = unescape(encodeURIComponent(a));
                        b = new Uint8Array(a.length);
                        for (var c = 0; c < a.length; c++) {
                            var d = a.charCodeAt(c);
                            b[c] =
                                d
                        }
                    }
                    a = btoa;
                    c = Array(b.length);
                    for (d = 0; d < b.length; d++) c[d] = String.fromCharCode(b[d]);
                    b = c.join("");
                    a = "data:text/html;charset=utf-8;base64," + a(b)
                } else a = void 0;
            this.iframeSrc = gb(this, a, this.o);
            this.K = this.getPlaceholder();
            this.H = !!this.K;
            (this.I = this.element.hasAttribute("resizable")) && this.element.setAttribute("scrolling", "no");
            this.element.hasAttribute("frameborder") || this.element.setAttribute("frameborder", "0");
            a = this.element;
            "no" != a.getAttribute("scrolling") && (b = a.ownerDocument.createElement("i-amphtml-scroll-container"),
                a.appendChild(b), a = b);
            this.D = a;
            jb(this)
        };
        l.onLayoutMeasure = function() {
            kb(this);
            var a = this.element;
            a: {
                var b = a.getLayoutSize();
                var c = b.width;b = b.height;
                for (var d = 0; d < K.length; d++) {
                    var e = K[d][0],
                        f = K[d][1];
                    if (!(f > b || e > c) && 20 >= b - f && 20 >= c - e) {
                        c = !0;
                        break a
                    }
                }
                c = !1
            }
            this.S = c;
            c = this.element;
            b = c.getLayoutSize();
            d = b.height;
            this.B = 10 < b.width || 10 < d ? !1 : !xa(c);
            if (c = this.S) {
                c = this.win;
                b = !1;
                d = 0;
                do cb[a.tagName] ? (d++, b = !1) : (e = (c.getComputedStyle(a) || Ca).position, "fixed" != e && "sticky" != e || (b = !0)), a = a.parentElement; while (a && "BODY" != a.tagName);
                c = !(!b && 1 >= d)
            }
            this.X =
                c
        };

        function kb(a) {
            if (a.h) {
                var b = a.getViewport().getLayoutRect(a.h),
                    c = a.getLayoutBox();
                a.P = Ka(b, -c.left, -c.top)
            }
        }
        l.getIntersectionElementLayoutBox = function() {
            if (!this.h) return AMP.BaseElement.prototype.getIntersectionElementLayoutBox.call(this);
            var a = this.getLayoutBox();
            this.P || kb(this);
            return Ka(this.P, a.left, a.top)
        };
        l.layoutCallback = function() {
            var a = this;
            D(!this.X, "amp-iframe is not used for displaying fixed ad. Please use amp-sticky-ad and amp-ad instead.");
            this.H || hb(this);
            this.I && D(this.getOverflowElement(), "Overflow element must be defined for resizable frames: %s", this.element);
            if (!this.iframeSrc) return x();
            if (this.B && !this.getAmpDoc().registerSingleton(1)) return console.error("Only 1 analytics/tracking iframe allowed per page. Please use amp-analytics instead or file a GitHub issue for your use case: https://github.com/ampproject/amphtml/issues/new"),
                x();
            var b = this.element.ownerDocument.createElement("iframe");
            this.h = b;
            this.applyFillContent(b);
            b.name = "amp_iframe" + eb++;
            this.H && Da(b, -1);
            this.propagateAttributes(db, b);
            var c = b.getAttribute("allow") || "";
            c = c.replace("autoplay", "autoplay-disabled");
            b.setAttribute("allow", c);
            b.setAttribute("sandbox", this.o || "");
            b.src = this.iframeSrc;
            this.B || (this.F = new Ma(this, b));
            b.onload = function() {
                b.readyState = "complete";
                a.V();
                a.B && (a.iframeSrc = null, O(a.win, "timer").promise(5E3).then(function() {
                    b.parentElement && b.parentElement.removeChild(b);
                    a.element.setAttribute("amp-removed", "");
                    a.h = null
                }))
            };
            I(b, "embed-size", function(d) {
                Z(a, d.height, d.width)
            }, void 0, void 0, !0);
            this.L = ya(this.win, function(d) {
                if (a.h && d.source === a.h.contentWindow && (d = d.data, "string" === typeof d && d.startsWith("pym"))) {
                    var e = d.split(/xPYMx/);
                    "height" === e[2] ? Z(a, parseInt(e[3], 10), void 0) : "width" === e[2] ? Z(a, void 0, parseInt(e[3], 10)) : B().warn("amp-iframe", "Unsupported Pym.js message: " + d)
                }
            });
            this.H && I(b, "embed-ready", this.V.bind(this));
            I(b, "send-consent-data", function(d, e,
                f) {
                lb(a, e, f)
            });
            this.D.appendChild(b);
            return this.loadPromise(b).then(function() {
                a.D != a.element && O(a.win, "timer").delay(function() {
                    a.mutateElement(function() {
                        a.D.classList.add("amp-active")
                    })
                }, 1E3);
                a.Z.updatePlaying(!0)
            })
        };

        function lb(a, b, c) {
            bb(a.element, a.getConsentPolicy()).then(function(d) {
                var e = Object.assign(y({
                    sentinel: "amp",
                    type: "consent-data"
                }), d);
                b.postMessage(e, c)
            })
        }
        l.unlayoutCallback = function() {
            this.L && (this.L(), this.L = null);
            if (this.h) {
                var a = this.h;
                a.parentElement && a.parentElement.removeChild(a);
                this.K && this.togglePlaceholder(!0);
                this.h = null;
                this.F && (this.F.destroy(), this.F = null)
            }
            this.Z.updatePlaying(!1);
            return !0
        };
        l.getLayoutPriority = function() {
            return this.S ? 2 : this.B ? 1 : AMP.BaseElement.prototype.getLayoutPriority.call(this)
        };
        l.mutatedAttributesCallback = function(a) {
            var b = a.src;
            void 0 !== b && (this.iframeSrc = ib(this, b), this.h && (this.h.src = gb(this, this.iframeSrc, this.o)));
            this.h && a.title && this.propagateAttributes(["title"], this.h)
        };
        l.unlayoutOnPause = function() {
            return !0
        };
        l.V = function() {
            var a = this;
            this.K && this.getVsync().mutate(function() {
                a.h && (Da(a.h, 0), a.togglePlaceholder(!1))
            })
        };
        l.firstLayoutCompleted = function() {};
        l.throwIfCannotNavigate = function() {
            if (!/\sallow-top-navigation\s/i.test(" " + this.o + " ")) throw B().createError('"AMP.navigateTo" is only allowed on <amp-iframe> when its "sandbox" attribute contains "allow-top-navigation".');
        };

        function Z(a, b, c) {
            if (a.I)
                if (100 > b) a.user().error("amp-iframe", "Ignoring embed-size request because the resize height is less than 100px. If you are using amp-iframe to display ads, consider using amp-ad instead.", a.element);
                else {
                    var d, e;
                    b = parseInt(b, 10);
                    isNaN(b) || (d = Math.max(b + (a.element.offsetHeight - a.h.offsetHeight), b));
                    c = parseInt(c, 10);
                    isNaN(c) || (e = Math.max(c + (a.element.offsetWidth - a.h.offsetWidth), c));
                    void 0 !== d || void 0 !== e ? a.attemptChangeSize(d, e).then(function() {
                        void 0 !== d && a.element.setAttribute("height",
                            d);
                        void 0 !== e && a.element.setAttribute("width", e);
                        a.element.overflowCallback(!1, d, e)
                    }, function() {}) : a.user().error("amp-iframe", "Ignoring embed-size request because no width or height value is provided", a.element)
                }
            else a.W || (a.user().error("amp-iframe", "Ignoring embed-size request because this iframe is not resizable", a.element), a.W = !0)
        }

        function jb(a) {
            if (Ra(a.win)) {
                var b = a.element,
                    c = b.getAttribute("src");
                c && (a.j = P(b, "url").parse(c).origin);
                a.registerAction("postMessage", function(f) {
                    a.j ? a.h.contentWindow.postMessage(f.args, a.j) : B().error("amp-iframe", '"postMessage" action is only allowed with "src"attribute with an origin.')
                });
                if (a.j) {
                    var d = 0,
                        e = function(f) {
                            if (f.source === a.h.contentWindow)
                                if (f.origin !== a.j) B().error("amp-iframe", '"message" received from unexpected origin: ' + f.origin + ". Only allowed from: " + a.j);
                                else {
                                    if (a.getAmpDoc().getRootNode().activeElement !==
                                        a.h) var g = !1;
                                    else g = a.win.document.createElement("audio"), g.play(), g = g.paused ? !1 : !0;
                                    if (g) {
                                        var k = f.data;
                                        try {
                                            var m = JSON.parse(JSON.stringify(k))
                                        } catch (v) {
                                            B().error("amp-iframe", 'Data from "message" event must be JSON.');
                                            return
                                        }
                                        var h = a.win;
                                        f = y({
                                            data: m
                                        });
                                        g = {
                                            detail: f
                                        };
                                        Object.assign(g, void 0);
                                        "function" == typeof h.CustomEvent ? f = new h.CustomEvent("amp-iframe:message", g) : (h = h.document.createEvent("CustomEvent"), h.initCustomEvent("amp-iframe:message", !!g.bubbles, !!g.cancelable, f), f = h);
                                        P(a.element, "action").trigger(a.element,
                                            "message", f, 3)
                                    } else d++, B().error("amp-iframe", '"message" event may only be triggered from a user gesture.'), 10 <= d && (B().error("amp-iframe", 'Too many non-gesture-triggered "message" events; detaching event listener.'), a.win.removeEventListener("message", e))
                                }
                        };
                    a.win.addEventListener("message", e)
                }
            }
        }
        l.ca = function(a) {
            this.j = a
        };
        (function(a) {
            a.registerElement("amp-iframe", W)
        })(self.AMP);
    })
});

//# sourceMappingURL=amp-iframe-0.1.js.map