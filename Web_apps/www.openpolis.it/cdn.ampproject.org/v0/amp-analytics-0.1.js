(self.AMP = self.AMP || []).push({
    n: "amp-analytics",
    ev: "0.1",
    l: true,
    v: "2105150310000",
    m: 0,
    f: (function(AMP, _) {
        'use strict';
        var l;

        function ba(a) {
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

        function ca(a) {
            var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            return b ? b.call(a) : {
                next: ba(a)
            }
        }
        var da = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        };

        function ea(a) {
            for (var b = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global], c = 0; c < b.length; ++c) {
                var d = b[c];
                if (d && d.Math == Math) return d
            }
            return function() {
                throw Error("Cannot find global object");
            }()
        }
        var fa = ea(this);
        "function" === typeof Symbol && Symbol("x");
        var ha;
        if ("function" == typeof Object.setPrototypeOf) ha = Object.setPrototypeOf;
        else {
            var ia;
            a: {
                var ja = {
                        a: !0
                    },
                    ka = {};
                try {
                    ka.__proto__ = ja;
                    ia = ka.a;
                    break a
                } catch (a) {}
                ia = !1
            }
            ha = ia ? function(a, b) {
                a.__proto__ = b;
                if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
                return a
            } : null
        }
        var la = ha;

        function p(a, b) {
            a.prototype = da(b.prototype);
            a.prototype.constructor = a;
            if (la) la(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.nd = b.prototype
        }
        var ma;

        function r() {
            return ma ? ma : ma = Promise.resolve(void 0)
        }

        function v() {
            var a = this;
            this.promise = new Promise(function(b, c) {
                a.resolve = b;
                a.reject = c
            })
        }

        function na(a) {
            return new Promise(function(b) {
                b(a())
            })
        };
        var w = Array.isArray;

        function oa(a, b) {
            for (var c = [], d = 0, e = 0; e < a.length; e++) {
                var f = a[e];
                b(f, e, a) ? c.push(f) : (d < e && (a[d] = f), d++)
            }
            d < a.length && (a.length = d)
        }

        function pa(a, b) {
            for (var c = 0; c < a.length; c++)
                if (b(a[c], c, a)) return c;
            return -1
        };

        function qa(a) {
            var b = ra,
                c;
            for (c in b)
                if (b[c] === a) return !0;
            return !1
        };

        function sa(a, b) {
            var c = a.length - b.length;
            return 0 <= c && a.indexOf(b, c) == c
        }

        function ta(a, b) {
            for (var c = {}, d = 0; 5 > d && (c.Ka = 0, a = a.replace(/\${([^}]*)}/g, function(e) {
                    return function(f, g) {
                        e.Ka++;
                        return b(g)
                    }
                }(c)), c.Ka); c = {
                    Ka: c.Ka
                }, d++);
            return a
        }

        function ua(a, b) {
            var c = /\${([^}]*)}/g;
            if ("string" == typeof b) return Promise.resolve(a.replace(c, b));
            var d = [],
                e = 0;
            a.replace(c, function(f) {
                var g = arguments[arguments.length - 2];
                d.push(a.slice(e, g));
                e = g + f.length;
                var h = b.apply(null, arguments);
                d.push(h)
            });
            d.push(a.slice(e));
            return Promise.all(d).then(function(f) {
                return f.join("")
            })
        };
        var va = Object.prototype,
            wa = va.toString,
            xa = va.hasOwnProperty;

        function y(a) {
            return "[object Object]" === wa.call(a)
        }

        function z(a) {
            return a || {}
        }

        function A(a, b) {
            return xa.call(a, b)
        }

        function ya(a, b, c) {
            var d = void 0 === c ? 10 : c,
                e = [],
                f = [];
            for (f.push({
                    t: a,
                    s: b,
                    d: 0
                }); 0 < f.length;) {
                b = f.shift();
                var g = b.t;
                a = b.s;
                var h = b.d;
                if (e.includes(a)) throw Error("Source object has a circular reference.");
                e.push(a);
                if (g !== a)
                    if (h > d) Object.assign(g, a);
                    else
                        for (b = ca(Object.keys(a)), c = b.next(); !c.done; c = b.next()) {
                            c = c.value;
                            var k = a[c];
                            if (A(g, c)) {
                                var m = g[c];
                                if (y(k) && y(m)) {
                                    f.push({
                                        t: m,
                                        s: k,
                                        d: h + 1
                                    });
                                    continue
                                }
                            }
                            g[c] = k
                        }
            }
        };

        function za(a) {
            for (var b = null, c = "", d = ca(arguments), e = d.next(); !e.done; e = d.next())
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

        function Aa(a) {
            var b = za.apply(null, arguments);
            setTimeout(function() {
                var c, d;
                null == (d = (c = self).__AMP_REPORT_ERROR) || d.call(c, b);
                throw b;
            })
        };

        function Ba(a, b) {
            var c = b = void 0 === b ? "" : b;
            try {
                return decodeURIComponent(a)
            } catch (d) {
                return c
            }
        };
        var Ca = /(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;

        function Da(a) {
            var b = Object.create(null);
            if (!a) return b;
            for (var c; c = Ca.exec(a);) {
                var d = Ba(c[1], c[1]);
                c = c[2] ? Ba(c[2].replace(/\+/g, " "), c[2]) : "";
                b[d] = c
            }
            return b
        };
        var Ea = "";

        function B(a) {
            var b = a || self;
            if (b.__AMP_MODE) var c = b.__AMP_MODE;
            else c = Da(b.location.originalHash || b.location.hash), Ea || (Ea = b.AMP_CONFIG && b.AMP_CONFIG.v ? b.AMP_CONFIG.v : "012105150310000"), c = {
                localDev: !1,
                development: !!(0 <= ["1", "actions", "amp", "amp4ads", "amp4email"].indexOf(c.development) || b.AMP_DEV_MODE),
                examiner: "2" == c.development,
                esm: !1,
                geoOverride: c["amp-geo"],
                minified: !0,
                test: !1,
                log: c.log,
                version: "2105150310000",
                rtvVersion: Ea
            }, c = b.__AMP_MODE = c;
            return c
        };
        var D = self.AMP_CONFIG || {},
            Fa = ("string" == typeof D.cdnProxyRegex ? new RegExp(D.cdnProxyRegex) : D.cdnProxyRegex) || /^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;

        function Ga(a) {
            if (!self.document || !self.document.head || self.location && Fa.test(self.location.origin)) return null;
            var b = self.document.head.querySelector('meta[name="' + a + '"]');
            return b && b.getAttribute("content") || null
        }
        var Ha = {
            thirdParty: D.thirdPartyUrl || "https://3p.ampproject.net",
            thirdPartyFrameHost: D.thirdPartyFrameHost || "ampproject.net",
            thirdPartyFrameRegex: ("string" == typeof D.thirdPartyFrameRegex ? new RegExp(D.thirdPartyFrameRegex) : D.thirdPartyFrameRegex) || /^d-\d+\.ampproject\.net$/,
            cdn: D.cdnUrl || Ga("runtime-host") || "https://cdn.ampproject.org",
            cdnProxyRegex: Fa,
            localhostRegex: /^https?:\/\/localhost(:\d+)?$/,
            errorReporting: D.errorReportingUrl || "https://us-central1-amp-error-reporting.cloudfunctions.net/r",
            betaErrorReporting: D.betaErrorReportingUrl ||
                "https://us-central1-amp-error-reporting.cloudfunctions.net/r-beta",
            localDev: D.localDev || !1,
            trustedViewerHosts: [/(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/, /(^|\.)gmail\.(com|dev)$/],
            geoApi: D.geoApiUrl || Ga("amp-geo-api")
        };
        self.__AMP_LOG = self.__AMP_LOG || {
            user: null,
            dev: null,
            userForEmbed: null
        };
        var Ia = self.__AMP_LOG;

        function E() {
            if (!Ia.user) throw Error("failed to call initLogConstructor");
            return Ia.user
        }

        function F() {
            if (Ia.dev) return Ia.dev;
            throw Error("failed to call initLogConstructor");
        }

        function G(a, b, c, d, e, f) {
            return E().assert(a, b, c, d, e, f, void 0, void 0, void 0, void 0, void 0)
        };

        function Ja(a) {
            return "number" === typeof a && isFinite(a)
        };

        function H(a, b) {
            a = Ka(a);
            return I(a, b)
        }

        function J(a, b) {
            var c = K(a);
            c = L(c);
            return I(c, b)
        }

        function La(a, b) {
            a = K(a);
            a = L(a);
            return Ma(a, b) ? I(a, b) : null
        }

        function Na(a, b) {
            return Oa(L(a), b)
        }

        function Ka(a) {
            return a.__AMP_TOP || (a.__AMP_TOP = a)
        }

        function Pa(a, b) {
            var c = (a.ownerDocument || a).defaultView,
                d = b || Ka(c);
            if (c && c != d && Ka(c) == d) try {
                return c.frameElement
            } catch (e) {}
            return null
        }

        function K(a) {
            return a.nodeType ? H((a.ownerDocument || a).defaultView, "ampdoc").getAmpDoc(a) : a
        }

        function L(a) {
            a = K(a);
            return a.isSingleDoc() ? a.win : a
        }

        function I(a, b) {
            Ma(a, b);
            a = Qa(a)[b];
            a.obj || (a.obj = new a.ctor(a.context), a.context = null, a.resolve && a.resolve(a.obj));
            return a.obj
        }

        function Ra(a, b, c, d) {
            var e = Qa(a),
                f = e[c];
            f || (f = e[c] = {
                obj: null,
                promise: null,
                resolve: null,
                reject: null,
                context: null,
                ctor: null,
                sharedInstance: !1
            });
            f.ctor || (f.ctor = d, f.context = b, f.sharedInstance = !1, f.resolve && I(a, c))
        }

        function Sa(a, b) {
            var c = Oa(a, b);
            if (c) return c;
            a = Qa(a);
            a[b] = Ta();
            return a[b].promise
        }

        function Oa(a, b) {
            var c = Qa(a)[b];
            if (c) {
                if (c.promise) return c.promise;
                I(a, b);
                return c.promise = Promise.resolve(c.obj)
            }
            return null
        }

        function Qa(a) {
            var b = a.__AMP_SERVICES;
            b || (b = a.__AMP_SERVICES = {});
            return b
        }

        function Ma(a, b) {
            a = a.__AMP_SERVICES && a.__AMP_SERVICES[b];
            return !(!a || !a.ctor)
        }

        function Ta() {
            var a = new v,
                b = a.promise,
                c = a.resolve,
                d = a.reject;
            b.catch(function() {});
            return {
                obj: null,
                promise: b,
                resolve: c,
                reject: d,
                context: null,
                ctor: null
            }
        };
        /*
         https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
        var Ua;

        function Wa(a) {
            try {
                var b = a.ownerDocument,
                    c = b.createElement("div"),
                    d = b.createElement("div");
                c.appendChild(d);
                return c.querySelector(":scope div") === d
            } catch (e) {
                return !1
            }
        };

        function Xa(a, b, c) {
            a = a.createElement(b);
            for (var d in c) a.setAttribute(d, c[d]);
            return a
        }

        function Ya(a, b) {
            for (; a && void 0 !== a; a = a.parentElement)
                if (b(a)) return a;
            return null
        }

        function Za(a, b) {
            return a.closest ? a.closest(b) : Ya(a, function(c) {
                return $a(c, b)
            })
        }

        function ab(a, b) {
            for (a = a.lastElementChild; a; a = a.previousElementSibling)
                if (b(a)) return a;
            return null
        }

        function $a(a, b) {
            var c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.msMatchesSelector || a.oMatchesSelector;
            return c ? c.call(a, b) : !1
        }

        function bb(a, b) {
            a.classList.add("i-amphtml-scoped");
            var c = b.replace(/^|,/g, "$&.i-amphtml-scoped "),
                d = a.querySelectorAll(c);
            a.classList.remove("i-amphtml-scoped");
            return d
        }

        function cb(a, b) {
            function c(k) {
                return k
            }
            var d = a.dataset;
            a = {};
            var e = b ? b : /^param(.+)/,
                f;
            for (f in d) {
                var g = f.match(e);
                if (g) {
                    var h = g[1][0].toLowerCase() + g[1].substr(1);
                    a[c(h)] = d[f]
                }
            }
            return a
        };

        function db(a) {
            return eb(a, "userNotificationManager", "amp-user-notification", void 0).then(function(b) {
                return G(b, "Service %s was requested to be provided through %s, but %s is not loaded in the current page. To fix this problem load the JavaScript file for %s in this page.", "userNotificationManager", "amp-user-notification", "amp-user-notification", "amp-user-notification")
            })
        }

        function eb(a, b, c, d) {
            var e = Na(a, b);
            if (e) return e;
            var f = K(a);
            return f.whenExtensionsKnown().then(function() {
                var g = f.getExtensionVersion(c);
                return g ? H(f.win, "extensions").waitForExtension(c, g) : null
            }).then(function(g) {
                return g ? d ? Na(a, b) : Sa(L(a), b) : null
            })
        }

        function fb(a) {
            var b = La(a, "amp-script");
            return b ? Promise.resolve(b) : eb(a, "amp-script", "amp-script")
        };

        function gb(a) {
            return H(a, "performance")
        }

        function M(a) {
            return La(a, "url-replace")
        }

        function hb(a) {
            return eb(a, "consentPolicyManager", "amp-consent")
        }

        function O(a) {
            return J(a, "viewport")
        };
        var ib;

        function jb(a, b, c, d) {
            var e = a,
                f = c;
            var g = function(m) {
                try {
                    return f(m)
                } catch (n) {
                    throw self.__AMP_REPORT_ERROR(n), n;
                }
            };
            var h = kb(),
                k = !1;
            d && (k = d.capture);
            e.addEventListener(b, g, h ? d : k);
            return function() {
                e && e.removeEventListener(b, g, h ? d : k);
                g = e = f = null
            }
        }

        function kb() {
            if (void 0 !== ib) return ib;
            ib = !1;
            try {
                var a = {
                    get capture() {
                        ib = !0
                    }
                };
                self.addEventListener("test-options", null, a);
                self.removeEventListener("test-options", null, a)
            } catch (b) {}
            return ib
        };

        function lb(a, b, c, d) {
            var e = c,
                f = jb(a, b, function(g) {
                    try {
                        e(g)
                    } finally {
                        e = null, f()
                    }
                }, d);
            return f
        }

        function mb(a) {
            return !!(a.complete || "complete" == a.readyState || nb(a) && 0 < a.readyState || a.document && "complete" == a.document.readyState)
        }

        function ob(a) {
            var b, c;
            if (mb(a)) return Promise.resolve(a);
            var d = nb(a);
            return d && a.__AMP_MEDIA_LOAD_FAILURE_SRC === a.currentSrc ? Promise.reject(a) : (new Promise(function(e, f) {
                b = d ? lb(a, "loadedmetadata", e, {
                    capture: !0
                }) : lb(a, "load", e);
                if (a.tagName) {
                    var g = a;
                    if (d && !a.hasAttribute("src") && (g = ab(a, function(h) {
                            return "SOURCE" === h.tagName
                        }), !g)) return f(Error("Media has no source."));
                    c = lb(g, "error", f)
                }
            })).then(function() {
                c && c();
                return a
            }, function() {
                b && b();
                nb(a) && (a.__AMP_MEDIA_LOAD_FAILURE_SRC = a.currentSrc || !0);
                var e = a;
                e && e.src && (e = e.src);
                throw E().createError("Failed to load:", e);
            })
        }

        function nb(a) {
            return "AUDIO" === a.tagName || "VIDEO" === a.tagName
        };

        function pb(a, b) {
            var c = 0;
            "active" === a.type && (c = 5);
            return Math.min(b - a.time, c)
        }

        function qb() {
            this.Kb = 0;
            this.ra = void 0
        }
        qb.prototype.push = function(a) {
            this.ra && this.ra.time < a.time && (this.Kb += pb(this.ra, a.time));
            this.ra = a
        };
        qb.prototype.getTotalEngagedTime = function(a) {
            var b = 0;
            void 0 !== this.ra && (b = this.Kb + pb(this.ra, a));
            return b
        };
        var rb = ["mousedown", "mouseup", "mousemove", "keydown", "keyup"],
            sb = ["mouseleave"];

        function tb(a) {
            this.ampdoc = a;
            this.Bc = this.hd.bind(this);
            this.Sb = this.xb.bind(this);
            this.zc = this.$b.bind(this);
            this.Ac = this.Qc.bind(this);
            this.Ha = {};
            this.Ia = [];
            this.Wa = this.Va = !1;
            this.Ob = new qb;
            this.T = O(this.ampdoc);
            this.ampdoc.whenFirstVisible().then(this.gd.bind(this))
        }
        l = tb.prototype;
        l.gd = function() {
            this.X = Date.now();
            this.xb();
            ub(this, this.ampdoc.getRootNode(), rb, this.Sb);
            ub(this, this.ampdoc.getRootNode(), sb, this.zc);
            this.Ia.push(this.ampdoc.onVisibilityChanged(this.Ac));
            this.T.onScroll(this.Sb)
        };

        function vb(a) {
            var b = Date.now() - a.X;
            return 0 < b ? b : 0
        }
        l.hd = function() {
            this.Wa = this.Va = !1
        };

        function ub(a, b, c, d) {
            for (var e = 0; e < c.length; e++) {
                var f = a.Ia,
                    g = f.push;
                var h = jb(b, c[e], d, void 0);
                g.call(f, h)
            }
        }
        l.xb = function() {
            this.Va || (this.Va = !0, this.Wa = !1, wb(this, "active"))
        };
        l.$b = function() {
            this.Wa || (this.Wa = !0, this.Va = !1, wb(this, "inactive"))
        };

        function wb(a, b) {
            var c = vb(a),
                d = Math.floor(c / 1E3);
            setTimeout(a.Bc, 1E3 - c % 1E3);
            a.Ob.push({
                type: b,
                time: d
            })
        }
        l.Qc = function() {
            this.ampdoc.isVisible() ? this.xb() : this.$b()
        };
        l.Mb = function() {
            for (var a = 0; a < this.Ia.length; a++) {
                var b = this.Ia[a];
                "function" === typeof b && b()
            }
            this.Ia = []
        };
        l.md = function() {
            this.Mb()
        };
        l.getTotalEngagedTime = function() {
            var a = Math.floor(vb(this) / 1E3);
            return this.Ob.getTotalEngagedTime(a)
        };
        l.getIncrementalEngagedTime = function(a, b) {
            var c = void 0 === b ? !0 : b;
            if (!A(this.Ha, a)) return c && (this.Ha[a] = this.getTotalEngagedTime()), this.getTotalEngagedTime();
            var d = this.Ha[a];
            if (!1 === c) return this.getTotalEngagedTime() - d;
            this.Ha[a] = this.getTotalEngagedTime();
            return this.Ha[a] - d
        };

        function xb(a, b) {
            try {
                return JSON.parse(a)
            } catch (c) {
                return null == b || b(c), null
            }
        };
        var yb = JSON.parse('{"transport":{"beacon":true,"xhrpost":true,"image":true},"vars":{"accessReaderId":"ACCESS_READER_ID","ampGeo":"AMP_GEO","ampState":"AMP_STATE","ampVersion":"AMP_VERSION","ampdocHost":"AMPDOC_HOST","ampdocHostname":"AMPDOC_HOSTNAME","ampdocMeta":"AMPDOC_META","ampdocUrl":"AMPDOC_URL","authdata":"AUTHDATA","availableScreenHeight":"AVAILABLE_SCREEN_HEIGHT","availableScreenWidth":"AVAILABLE_SCREEN_WIDTH","backgroundState":"BACKGROUND_STATE","browserLanguage":"BROWSER_LANGUAGE","canonicalHost":"CANONICAL_HOST","canonicalHostname":"CANONICAL_HOSTNAME","canonicalPath":"CANONICAL_PATH","canonicalUrl":"CANONICAL_URL","clientId":"CLIENT_ID","consentState":"CONSENT_STATE","consentString":"CONSENT_STRING","contentLoadTime":"CONTENT_LOAD_TIME","cookie":"COOKIE","counter":"COUNTER","cumulativeLayoutShift":"CUMULATIVE_LAYOUT_SHIFT","documentCharset":"DOCUMENT_CHARSET","documentReferrer":"DOCUMENT_REFERRER","domInteractiveTime":"DOM_INTERACTIVE_TIME","domainLookupTime":"DOMAIN_LOOKUP_TIME","experimentBranches":"EXPERIMENT_BRANCHES","externalReferrer":"EXTERNAL_REFERRER","firstContentfulPaint":"FIRST_CONTENTFUL_PAINT","firstInputDelay":"FIRST_INPUT_DELAY","firstViewportReady":"FIRST_VIEWPORT_READY","fragmentParam":"FRAGMENT_PARAM","htmlAttr":"HTML_ATTR","incrementalEngagedTime":"INCREMENTAL_ENGAGED_TIME","largestContentfulPaint":"LARGEST_CONTENTFUL_PAINT","makeBodyVisible":"MAKE_BODY_VISIBLE","navRedirectCount":"NAV_REDIRECT_COUNT","navTiming":"NAV_TIMING","navType":"NAV_TYPE","pageDownloadTime":"PAGE_DOWNLOAD_TIME","pageLoadTime":"PAGE_LOAD_TIME","pageViewId":"PAGE_VIEW_ID","pageViewId64":"PAGE_VIEW_ID_64","queryParam":"QUERY_PARAM","random":"RANDOM","redirectTime":"REDIRECT_TIME","resourceTiming":"RESOURCE_TIMING","screenColorDepth":"SCREEN_COLOR_DEPTH","screenHeight":"SCREEN_HEIGHT","screenWidth":"SCREEN_WIDTH","scrollHeight":"SCROLL_HEIGHT","scrollLeft":"SCROLL_LEFT","scrollTop":"SCROLL_TOP","scrollWidth":"SCROLL_WIDTH","serverResponseTime":"SERVER_RESPONSE_TIME","sourceHost":"SOURCE_HOST","sourceHostname":"SOURCE_HOSTNAME","sourcePath":"SOURCE_PATH","sourceUrl":"SOURCE_URL","tcpConnectTime":"TCP_CONNECT_TIME","timestamp":"TIMESTAMP","timezone":"TIMEZONE","timezoneCode":"TIMEZONE_CODE","title":"TITLE","totalEngagedTime":"TOTAL_ENGAGED_TIME","userAgent":"USER_AGENT","viewer":"VIEWER","viewportHeight":"VIEWPORT_HEIGHT","viewportWidth":"VIEWPORT_WIDTH"}}');

        function zb() {
            this.Ec = 100;
            this.ob = this.Jb = 0;
            this.Ma = Object.create(null)
        }
        zb.prototype.has = function(a) {
            return !!this.Ma[a]
        };
        zb.prototype.get = function(a) {
            var b = this.Ma[a];
            if (b) return b.access = ++this.ob, b.payload
        };
        zb.prototype.put = function(a, b) {
            this.has(a) || this.Jb++;
            this.Ma[a] = {
                payload: b,
                access: this.ob
            };
            if (!(this.Jb <= this.Ec)) {
                a = this.Ma;
                var c = this.ob + 1,
                    d;
                for (d in a) {
                    var e = a[d].access;
                    if (e < c) {
                        c = e;
                        var f = d
                    }
                }
                void 0 !== f && (delete a[f], this.Jb--)
            }
        };
        var Ab = z({
                c: !0,
                v: !0,
                a: !0,
                ad: !0
            }),
            Cb, Db, Eb = /[?&]amp_js[^&]*/,
            Fb = /[?&]amp_gsa[^&]*/,
            Gb = /[?&]amp_r[^&]*/,
            Hb = /[?&]amp_kit[^&]*/,
            Ib = /[?&]usqp[^&]*/;

        function P(a) {
            Cb || (Cb = self.document.createElement("a"), Db = self.__AMP_URL_CACHE || (self.__AMP_URL_CACHE = new zb));
            var b = Db,
                c = Cb;
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
        }

        function Jb(a, b, c) {
            if (!b) return a;
            var d = a.split("#", 2),
                e = d[0].split("?", 2),
                f = e[0] + (e[1] ? c ? "?" + b + "&" + e[1] : "?" + e[1] + "&" + b : "?" + b);
            return f += d[1] ? "#" + d[1] : ""
        }

        function Kb(a) {
            var b = [],
                c;
            for (c in a) {
                var d = a[c];
                if (null != d)
                    if (w(d))
                        for (var e = 0; e < d.length; e++) {
                            var f = d[e];
                            b.push(encodeURIComponent(c) + "=" + encodeURIComponent(f))
                        } else b.push(encodeURIComponent(c) + "=" + encodeURIComponent(d))
            }
            return b.join("&")
        }

        function Lb(a, b) {
            var c = void 0 === c ? "source" : c;
            G(null != a, "%s %s must be available", b, c);
            var d = a;
            "string" == typeof d && (d = P(d));
            d = "https:" == d.protocol || "localhost" == d.hostname || "127.0.0.1" == d.hostname || sa(d.hostname, ".localhost");
            G(d || /^(\/\/)/.test(a), '%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s', b, c, a)
        }

        function Mb(a) {
            "string" == typeof a && (a = P(a));
            return Ha.cdnProxyRegex.test(a.origin)
        };

        function Nb(a) {
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
                if (w(c) && c.length && (e = a.document.head.querySelector('meta[name="amp-experiments-opt-in"]')))
                    for (e = e.getAttribute("content").split(","), d = ca(e), e = d.next(); !e.done; e =
                        d.next()) e = e.value, c.includes(e) && (b[e] = !0);
                c = Object;
                e = c.assign;
                d = "";
                try {
                    "localStorage" in a && (d = a.localStorage.getItem("amp-experiment-toggles"))
                } catch (k) {
                    F().warn("EXPERIMENTS", "Failed to retrieve experiments from localStorage.")
                }
                var f;
                d = (null == (f = d) ? void 0 : f.split(/\s*,\s*/g)) || [];
                f = Object.create(null);
                d = ca(d);
                for (var g = d.next(); !g.done; g = d.next())(g = g.value) && ("-" == g[0] ? f[g.substr(1)] = !1 : f[g] = !0);
                e.call(c, b, f);
                var h;
                f = null == (h = a.AMP_CONFIG) ? void 0 : h["allow-url-opt-in"];
                if (w(f) && f.length)
                    for (a =
                        Da(a.location.originalHash || a.location.hash), h = ca(f), e = h.next(); !e.done; e = h.next()) f = e.value, c = a["e-" + f], "1" == c && (b[f] = !0), "0" == c && (b[f] = !1)
            }
            return !!b["visibility-trigger-improvements"]
        }

        function Ob(a) {
            a = Ka(a);
            a.__AMP_EXPERIMENT_BRANCHES || (a.__AMP_EXPERIMENT_BRANCHES = {});
            return Object.assign({}, a.__AMP_EXPERIMENT_BRANCHES)
        };

        function Pb(a) {
            return "undefined" !== typeof TextEncoder ? (new TextEncoder("utf-8")).encode(a) : Qb(unescape(encodeURIComponent(a)))
        }

        function Qb(a) {
            for (var b = new Uint8Array(a.length), c = 0; c < a.length; c++) {
                var d = a.charCodeAt(c);
                b[c] = d
            }
            return b
        }

        function Rb(a) {
            for (var b = Array(a.length), c = 0; c < a.length; c++) b[c] = String.fromCharCode(a[c]);
            return b.join("")
        };
        var Sb = {
                "-": "+",
                _: "/",
                ".": "="
            },
            Tb = {
                "+": "-",
                "/": "_",
                "=": "."
            };

        function Ub(a) {
            var b = atob(a.replace(/[-_.]/g, function(c) {
                return Sb[c]
            }));
            return Qb(b)
        }

        function Vb(a) {
            a = Rb(a);
            return btoa(a).replace(/[+/=]/g, function(b) {
                return Tb[b]
            })
        }

        function Wb(a) {
            a = Pb(a);
            return Vb(a)
        };

        function Xb(a, b) {
            try {
                var c = a.document.cookie
            } catch (h) {
                c = ""
            }
            var d = c;
            if (!d) return null;
            var e = d.split(";");
            for (a = 0; a < e.length; a++) {
                var f = e[a].trim(),
                    g = f.indexOf("=");
                if (c = -1 != g) c = f.substring(0, g).trim(), c = Ba(c, void 0) == b;
                if (c) return b = f.substring(g + 1).trim(), Ba(b, b)
            }
            return null
        }

        function Yb(a) {
            var b = a.document.head && a.document.head.querySelector("meta[name='amp-cookie-scope']");
            if (b) {
                var c = b.getAttribute("content") || "";
                a = a.location.href;
                "string" == typeof a && (a = P(a));
                if (Mb(a)) {
                    var d = a.pathname.split("/");
                    G(Ab[d[1]], "Unknown path prefix in url %s", a.href);
                    var e = d[2],
                        f = "s" == e ? "https://" + decodeURIComponent(d[3]) : "http://" + decodeURIComponent(e);
                    G(0 < f.indexOf("."), "Expected a . in origin %s", f);
                    d.splice(1, "s" == e ? 3 : 2);
                    d = f + d.join("/");
                    e = (e = a.search) && "?" != e ? (e = e.replace(Eb, "").replace(Fb,
                        "").replace(Gb, "").replace(Hb, "").replace(Ib, "").replace(/^[?&]/, "")) ? "?" + e : "" : "";
                    a = d + e + (a.hash || "")
                } else a = a.href;
                a = P(a).origin;
                return sa(a, "." + c) ? c : a.split("://")[1]
            }
            if (!Mb(a.location.href)) {
                d = a.location.hostname.split(".");
                e = d[d.length - 1];
                for (f = "-test-amp-cookie-tmp"; Xb(a, f);) f = "-test-amp-cookie-tmp0";
                for (var g = d.length - 2; 0 <= g; g--)
                    if (e = d[g] + "." + e, Zb(a, f, "delete", Date.now() + 1E3, e), "delete" == Xb(a, f)) return Zb(a, f, "delete", Date.now() - 1E3, e), e
            }
            return null
        }

        function Zb(a, b, c, d, e, f, g) {
            "ampproject.org" == e && (c = "delete", d = 0);
            b = encodeURIComponent(b) + "=" + encodeURIComponent(c) + "; path=/" + (e ? "; domain=" + e : "") + "; expires=" + (new Date(d)).toUTCString() + (f ? "; SameSite=" + f : "") + (g ? "; Secure" : "");
            try {
                a.document.cookie = b
            } catch (h) {}
        };

        function $b(a) {
            if (!ac(a)) return null;
            var b = a.indexOf("{");
            return xb(a.substr(b), function(c) {
                return F().error("MESSAGING", "Failed to parse message: " + a, c)
            })
        }

        function ac(a) {
            return "string" == typeof a && 0 == a.indexOf("amp-") && -1 != a.indexOf("{")
        };
        var bc, cc = "Webkit webkit Moz moz ms O o".split(" "),
            dc = {
                getPropertyPriority: function() {
                    return ""
                },
                getPropertyValue: function() {
                    return ""
                }
            };

        function ec(a) {
            var b = !1;
            void 0 === b && (b = a.hasAttribute("hidden"));
            b ? a.removeAttribute("hidden") : a.setAttribute("hidden", "")
        };

        function fc(a, b, c) {
            var d = a.listeningFors;
            !d && c && (d = a.listeningFors = Object.create(null));
            a = d || null;
            if (!a) return a;
            var e = a[b];
            !e && c && (e = a[b] = []);
            return e || null
        }

        function gc(a, b, c) {
            var d = c ? b.getAttribute("data-amp-3p-sentinel") : "amp";
            a = fc(a, d, !0);
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

        function hc(a) {
            for (var b = z({
                    sentinel: "unlisten"
                }), c = a.length - 1; 0 <= c; c--) {
                var d = a[c];
                if (!d.frame.contentWindow) {
                    a.splice(c, 1);
                    d = d.events;
                    for (var e in d) d[e].splice(0, Infinity).forEach(function(f) {
                        f(b)
                    })
                }
            }
        }

        function ic(a) {
            a.listeningFors || a.addEventListener("message", function(b) {
                if (b.data) {
                    var c = jc(b.data);
                    if (c && c.sentinel) {
                        var d = b.source;
                        var e = fc(a, c.sentinel);
                        if (e) {
                            for (var f, g = 0; g < e.length; g++) {
                                var h = e[g],
                                    k = h.frame.contentWindow;
                                if (k) {
                                    var m;
                                    if (!(m = d == k)) b: {
                                        for (m = d; m && m != m.parent; m = m.parent)
                                            if (m == k) {
                                                m = !0;
                                                break b
                                            }
                                        m = !1
                                    }
                                    if (m) {
                                        f = h;
                                        break
                                    }
                                } else setTimeout(hc, 0, e)
                            }
                            d = f ? f.events : null
                        } else d = e;
                        var n = d;
                        if (n) {
                            var t = n[c.type];
                            if (t)
                                for (t = t.slice(), d = 0; d < t.length; d++)(0, t[d])(c, b.source, b.origin, b)
                        }
                    }
                }
            })
        }

        function kc(a, b, c, d) {
            function e(m, n, t, q) {
                if ("amp" == m.sentinel) {
                    if (n != a.contentWindow) return;
                    var u = "null" == t && void 0;
                    if (g != t && !u) return
                }
                if (d || n == a.contentWindow) "unlisten" == m.sentinel ? k() : b(m, n, t, q)
            }
            var f = a.ownerDocument.defaultView;
            ic(f);
            c = gc(f, a, c);
            var g = P(a.src).origin,
                h = c["send-iframe-transport-events"] || (c["send-iframe-transport-events"] = []),
                k;
            h.push(e);
            return k = function() {
                if (e) {
                    var m = h.indexOf(e); - 1 < m && h.splice(m, 1);
                    b = h = e = null
                }
            }
        }

        function lc(a, b, c, d, e) {
            if (a.contentWindow)
                for (d.type = c, d.sentinel = e ? a.getAttribute("data-amp-3p-sentinel") : "amp", a = d, e && (a = "amp-" + JSON.stringify(d)), d = 0; d < b.length; d++) e = b[d], e.win.postMessage(a, e.origin)
        }

        function jc(a) {
            "string" == typeof a && (a = "{" == a.charAt(0) ? xb(a, function(b) {
                F().warn("IFRAME-HELPER", "Postmessage could not be parsed. Is it in a valid JSON format?", b)
            }) || null : ac(a) ? $b(a) : null);
            return a
        }

        function mc(a, b) {
            var c = this;
            this.bc = a;
            this.zb = !0;
            this.xa = [];
            this.Mb = kc(this.bc, function(d, e, f) {
                c.xa.some(function(g) {
                    return g.win == e
                }) || c.xa.push({
                    win: e,
                    origin: f
                });
                b(d, e, f)
            }, this.zb, this.zb)
        }
        mc.prototype.send = function(a, b) {
            oa(this.xa, function(c) {
                return !c.win.parent
            });
            lc(this.bc, this.xa, a, b, this.zb)
        };
        mc.prototype.destroy = function() {
            this.Mb();
            this.xa.length = 0
        };

        function nc(a) {
            return a.classList.contains("i-amphtml-fie") || !!Za(a, ".i-amphtml-fie")
        };

        function oc(a, b) {
            return !nc(b) && !Mb(a.location) && "inabox" != B(a).runtime
        };

        function pc(a) {
            var b = void 0 === b ? "default" : b;
            return hb(a).then(function(c) {
                return c ? c.whenPolicyResolved(b) : null
            })
        }

        function qc(a) {
            return hb(a).then(function(b) {
                return b ? b.getConsentStringInfo("default") : null
            })
        }

        function rc(a) {
            return hb(a).then(function(b) {
                return b ? b.getConsentMetadataInfo("default") : null
            })
        };
        var sc = null;
        var tc = /^[a-zA-Z0-9\-_.]+$/;

        function uc(a) {
            var b = vc(a);
            return "" === b ? "" : ["1", wc(b), b].join("*")
        }

        function wc(a, b) {
            var c = (new Date).getTimezoneOffset();
            var d = window;
            c = [window.navigator.userAgent, c, d.navigator.userLanguage || d.navigator.language].join("*");
            d = b || 0;
            d = Math.floor(Date.now() / 6E4) - d;
            a = [c, d, a].join("*");
            if (!sc) {
                c = Array(256);
                for (d = 0; 256 > d; d++) {
                    for (var e = d, f = 0; 8 > f; f++) e = e & 1 ? e >>> 1 ^ 3988292384 : e >>> 1;
                    c[d] = e
                }
                sc = c
            }
            a = Pb(a);
            c = 4294967295;
            for (d = 0; d < a.length; d++) c = c >>> 8 ^ sc[(c ^ a[d]) & 255];
            return ((c ^ -1) >>> 0).toString(36)
        }

        function vc(a) {
            return a ? Object.keys(a).filter(function(b) {
                var c = tc.test(b);
                c || E().error("amp-analytics/linker", "Invalid linker key: " + b);
                return c
            }).map(function(b) {
                return b + "*" + Wb(String(a[b]))
            }).join("*") : ""
        };

        function xc(a) {
            this.o = a;
            this.Aa = {}
        }
        xc.prototype.get = function(a, b) {
            if (!a || !b) return E().error("amp-analytics/linker-reader", "LINKER_PARAM requires two params, name and id"), null;
            if (!A(this.Aa, a)) {
                var c = this.Aa;
                var d = Da(this.o.location.search);
                if (A(d, a)) {
                    d = d[a];
                    var e = this.o.location;
                    if (this.o.history.replaceState) {
                        var f;
                        f = (f = e.search) && "?" != f ? (f = f.replace(new RegExp("[?&]" + a + "=[^&]*", "g"), "").replace(/^[?&]/, "")) ? "?" + f : "" : "";
                        this.o.history.replaceState(null, "", e.origin + e.pathname + f + (e.hash || ""))
                    }
                    e = d.split("*");
                    f = 0 == e.length % 2;
                    4 > e.length ||
                        !f ? (E().error("amp-analytics/linker", "Invalid linker_param value " + d), d = null) : (d = Number(e.shift()), 1 !== d ? (E().error("amp-analytics/linker", "Invalid version number " + d), d = null) : (d = e.shift(), e = e.join("*"), d = {
                            checksum: d,
                            serializedIds: e
                        }));
                    if (d) {
                        e = d.serializedIds;
                        c: {
                            d = d.checksum;
                            for (f = 0; 1 >= f; f++)
                                if (wc(e, f) == d) {
                                    d = !0;
                                    break c
                                }
                            d = !1
                        }
                        if (d)
                            for (d = {}, e = e.split("*"), f = 0; f < e.length; f += 2) {
                                var g = e[f];
                                if (tc.test(g)) {
                                    var h = Ub(String(e[f + 1]));
                                    "undefined" !== typeof TextDecoder ? h = (new TextDecoder("utf-8")).decode(h) : (h =
                                        Rb(new Uint8Array(h.buffer || h)), h = decodeURIComponent(escape(h)));
                                    d[g] = h
                                } else E().error("amp-analytics/linker", "Invalid linker key " + g + ", value ignored")
                            } else E().error("amp-analytics/linker", "LINKER_PARAM value checksum not valid"), d = null
                    } else d = null
                } else d = null;
                c[a] = d
            }
            return this.Aa[a] && this.Aa[a][b] ? this.Aa[a][b] : null
        };
        var yc = /^(?:([^\s]*)(\([^)]*\))|[^]+)$/,
            zc = {
                1: "sufficient",
                2: "insufficient",
                3: "not_required",
                4: "unknown"
            };

        function Q(a, b, c) {
            this.vars = a;
            this.iterations = void 0 === b ? 2 : b;
            this.noEncode = !!c;
            this.freezeVars = {}
        }
        Q.prototype.freezeVar = function(a) {
            this.freezeVars[a] = !0
        };
        Q.prototype.getVar = function(a) {
            a = this.vars[a];
            null == a && (a = "");
            return a
        };

        function Ac(a, b, c) {
            b = Number(b);
            var d = a.length;
            G(Ja(b), "Start index " + b + "in substr macro should be a number");
            c && (d = Number(c), G(Ja(d), "Length " + d + " in substr macro should be a number"));
            return a.substr(b, d)
        }

        function Bc(a, b) {
            return a && a.length ? a : b
        }

        function Cc(a, b, c) {
            b || E().warn("amp-analytics/variables", "REPLACE macro must have two or more arguments");
            c || (c = "");
            return a.replace(new RegExp(b, "g"), c)
        }

        function Dc(a, b, c) {
            b || E().warn("amp-analytics/variables", "MATCH macro must have two or more arguments");
            var d = 0;
            c && (d = parseInt(c, 10), 0 != d && !d || 0 > d) && (E().error("amp-analytics/variables", "Third argument in MATCH macro must be a number >= 0"), d = 0);
            return (a = a.match(new RegExp(b))) && a[d] ? a[d] : ""
        }

        function Ec(a, b, c, d) {
            var e = Number(a),
                f = Number(b);
            G(!isNaN(e), "CALC macro - left operand must be a number");
            G(!isNaN(f), "CALC macro - right operand must be a number");
            var g = 0;
            switch (c) {
                case "add":
                    g = e + f;
                    break;
                case "subtract":
                    g = e - f;
                    break;
                case "multiply":
                    g = e * f;
                    break;
                case "divide":
                    G(f, "CALC macro - cannot divide by 0");
                    g = e / f;
                    break;
                default:
                    E().error("amp-analytics/variables", "CALC macro - Invalid operation")
            }
            return Fc(d) ? Math.round(g) : g
        }

        function Gc(a, b) {
            if (b) return (a.__AMP_EXPERIMENT_BRANCHES ? a.__AMP_EXPERIMENT_BRANCHES[b] : null) || "";
            var c = Ob(a);
            return Object.keys(c).map(function(d) {
                return d + ":" + c[d]
            }).join(",")
        }

        function Hc(a) {
            var b = this;
            this.A = a;
            this.ea = z({});
            this.Uc = H(this.A.win, "amp-analytics-linker-reader");
            this.ea.$DEFAULT = Bc;
            this.ea.$SUBSTR = Ac;
            R(this, "$TRIM", function(c) {
                return c.trim()
            });
            R(this, "$TOLOWERCASE", function(c) {
                return c.toLowerCase()
            });
            R(this, "$TOUPPERCASE", function(c) {
                return c.toUpperCase()
            });
            R(this, "$NOT", function(c) {
                return String(!c)
            });
            R(this, "$BASE64", function(c) {
                return Wb(c)
            });
            R(this, "$HASH", this.Rc.bind(this));
            R(this, "$IF", function(c, d, e) {
                return Fc(c) ? d : e
            });
            this.ea.$REPLACE = Cc;
            this.ea.$MATCH =
                Dc;
            this.ea.$CALC = Ec;
            R(this, "$EQUALS", function(c, d) {
                return c === d
            });
            R(this, "LINKER_PARAM", function(c, d) {
                return b.Uc.get(c, d)
            });
            R(this, "TIMEZONE_CODE", function() {
                var c = "";
                "Intl" in b.A.win && "DateTimeFormat" in b.A.win.Intl && (c = (new b.A.win.Intl.DateTimeFormat).resolvedOptions().timeZone);
                return c
            });
            R(this, "SCROLL_TOP", function() {
                return Math.round(O(b.A).getScrollTop())
            });
            R(this, "SCROLL_LEFT", function() {
                return Math.round(O(b.A).getScrollLeft())
            });
            R(this, "EXPERIMENT_BRANCHES", function(c) {
                return Gc(b.A.win,
                    c)
            });
            R(this, "AMPDOC_META", function(c, d) {
                var e = void 0 === d ? "" : d,
                    f;
                return null != (f = b.A.getMetaByName(c)) ? f : e
            })
        }
        Hc.prototype.getMacros = function(a) {
            var b = this,
                c = {
                    COOKIE: function(e) {
                        var f = b.A.win;
                        return oc(f, a) ? Xb(f, e) : null
                    },
                    CONSENT_STATE: Ic(a),
                    CONSENT_STRING: qc(a),
                    CONSENT_METADATA: function(e) {
                        return Jc(a, G(e, "CONSENT_METADATA macro must contain a key"))
                    }
                },
                d = nc(a) ? {} : {
                    FIRST_CONTENTFUL_PAINT: function() {
                        return gb(b.A.win).getMetric("fcpv")
                    },
                    FIRST_VIEWPORT_READY: function() {
                        return gb(b.A.win).getMetric("pc")
                    },
                    MAKE_BODY_VISIBLE: function() {
                        return gb(b.A.win).getMetric("mbv")
                    },
                    LARGEST_CONTENTFUL_PAINT: function() {
                        return gb(b.A.win).getMetric("lcpv")
                    },
                    FIRST_INPUT_DELAY: function() {
                        return gb(b.A.win).getMetric("fid")
                    },
                    CUMULATIVE_LAYOUT_SHIFT: function() {
                        return gb(b.A.win).getMetric("cls")
                    }
                };
            return Object.assign({}, this.ea, c, d)
        };

        function R(a, b, c) {
            a.ea[b] = c
        }
        Hc.prototype.expandTemplate = function(a, b, c, d, e) {
            var f = this;
            return ua(a, function(g, h) {
                if (0 > b.iterations) return E().error("amp-analytics/variables", "Maximum depth reached while expanding variables. Please ensure that the variables are not recursive."), g;
                if (!h) return "";
                var k = Kc(h);
                h = k.name;
                k = k.argList;
                if (b.freezeVars[h]) return g;
                g = b.getVar(h);
                var m = M(c);
                if ("string" == typeof g) g = Lc(f, g, b, c, m, d, e, k);
                else if (w(g)) {
                    for (h = 0; h < g.length; h++) g[h] = "string" == typeof g[h] ? Lc(f, g[h], b, c, m, d, e) : g[h];
                    g = Promise.all(g)
                }
                return Promise.resolve(g).then(function(n) {
                    return b.noEncode ?
                        n : Oc(n)
                })
            })
        };

        function Lc(a, b, c, d, e, f, g, h) {
            return a.expandTemplate(b, new Q(c.vars, c.iterations - 1, !0), d, f, g).then(function(k) {
                return e.expandStringAsync(h ? k + h : k, f || a.getMacros(d), g)
            })
        }
        Hc.prototype.Rc = function(a) {
            return H(this.A.win, "crypto").sha384Base64(a)
        };

        function Oc(a) {
            if (null == a) return "";
            if (w(a)) return a.map(Oc).join(",");
            var b = Kc(String(a)),
                c = b.argList;
            return encodeURIComponent(b.name) + c
        }

        function Kc(a) {
            if (!a) return {
                name: "",
                argList: ""
            };
            var b = a.match(yc);
            G(b, "Variable with invalid format found: " + a);
            return {
                name: b[1] || b[0],
                argList: b[2] || ""
            }
        }

        function S(a) {
            return J(a, "amp-analytics-variables")
        }

        function Ic(a) {
            return pc(a).then(function(b) {
                return b ? zc[b] : null
            })
        }

        function Jc(a, b) {
            return rc(a).then(function(c) {
                return c ? c[b] : null
            })
        }

        function Fc(a) {
            return "false" !== a && "" !== a && "0" !== a && "null" !== a && "NaN" !== a && "undefined" !== a
        };

        function Pc(a) {
            this.j = a;
            this.o = null;
            this.Kc = yb || {};
            this.lb = {};
            this.h = {};
            this.sa = {};
            this.V = !1;
            this.I = S(a)
        }
        l = Pc.prototype;
        l.loadConfig = function() {
            var a = this;
            this.o = this.j.ownerDocument.defaultView;
            this.V = this.j.hasAttribute("sandbox");
            return Promise.all([Qc(this), Rc(this)]).then(this.cd.bind(this)).then(this.Fc.bind(this)).then(function() {
                return a.h
            })
        };

        function Sc(a) {
            var b = Ha.cdn;
            var c;
            if (c = "bg" === a) {
                var d;
                c = !(null == (d = self.AMP_CONFIG) || !d.canary)
            }
            var e = c ? ".canary" : "";
            return b + "/rtv/" + B().rtvVersion + "/v0/analytics-vendors/" + a + e + ".json"
        }

        function Rc(a) {
            var b = a.j.getAttribute("type");
            if (!b) return r();
            var c = Sc(b),
                d = a.C();
            F().fine(d, "Fetching vendor config", c);
            return H(a.o, "xhr").fetchJson(c, {
                ampCors: !1
            }).then(function(e) {
                return e.json()
            }).then(function(e) {
                a.lb = e || {};
                F().fine(d, "Vendor config loaded for " + b, e)
            }, function(e) {
                E().error(d, "Error loading vendor config: ", c, e)
            })
        }

        function Qc(a) {
            var b = a.j.getAttribute("config");
            if (!b || a.V) return r();
            Lb(b, a.j);
            var c = a.C();
            F().fine(c, "Fetching remote config", b);
            var d = {};
            a.j.hasAttribute("data-credentials") && (d.credentials = a.j.getAttribute("data-credentials"));
            return M(a.j).expandUrlAsync(b, a.I.getMacros(a.j)).then(function(e) {
                b = e;
                return H(a.o, "xhr").fetchJson(b, d)
            }).then(function(e) {
                return e.json()
            }).then(function(e) {
                a.sa = e;
                F().fine(c, "Remote config loaded", b)
            }, function(e) {
                E().error(c, "Error loading remote config: ", b, e)
            })
        }
        l.cd = function() {
            var a = (this.lb.configRewriter || {}).url,
                b = z({});
            if (this.j.CONFIG) var c = this.j.CONFIG;
            else {
                c = {};
                var d = this.C();
                try {
                    var e = this.j.children;
                    if (1 == e.length) {
                        var f = this.j;
                        /^[\w-]+$/.test("script");
                        var g = (void 0 !== Ua ? Ua : Ua = Wa(f)) ? f.querySelectorAll("> script".replace(/^|,/g, "$&:scope ")) : bb(f, "> script");
                        if (1 !== g.length) throw Error("Found " + g.length + " <script> children. Expected 1.");
                        var h = g[0];
                        if ("SCRIPT" != h.tagName || !h.hasAttribute("type") || "APPLICATION/JSON" != h.getAttribute("type").toUpperCase()) throw Error('<script> child must have type="application/json"');
                        try {
                            c = JSON.parse(h.textContent)
                        } catch (m) {
                            throw Error("Failed to parse <script> contents. Is it valid JSON?");
                        }
                    } else 1 < e.length && E().error(d, "The tag should contain only one <script> child.")
                } catch (m) {
                    E().error(d, m.message)
                }
            }
            var k = c;
            this.j.getAttribute("type") && (k.transport || this.sa.transport) && (c = this.C(), E().error(c, "Inline or remote config should not overwrite vendor transport settings"));
            k.transport && k.transport.iframe && (E().error("amp-analytics/config", "Inline configs are not allowed to specify transport iframe"),
                k.transport.iframe = void 0);
            this.sa.transport && this.sa.transport.iframe && (E().error("amp-analytics/config", "Remote configs are not allowed to specify transport iframe"), this.sa.transport.iframe = void 0);
            T(k, b);
            T(this.sa, b);
            return !a || this.V ? (this.h = Tc(this, b), r()) : Uc(this, b, a)
        };

        function Uc(a, b, c) {
            Lb(c, a.j);
            var d = a.C();
            F().fine(d, "Rewriting config", c);
            return Vc(a, b).then(function() {
                var e = {
                    method: "POST",
                    body: b
                };
                a.j.hasAttribute("data-credentials") && (e.credentials = a.j.getAttribute("data-credentials"));
                return M(a.j).expandUrlAsync(c).then(function(f) {
                    return H(a.o, "xhr").fetchJson(f, e)
                }).then(function(f) {
                    return f.json()
                }).then(function(f) {
                    a.h = Tc(a, f);
                    F().fine(d, "Configuration re-written", c)
                }, function(f) {
                    E().error(d, "Error rewriting configuration: ", c, f)
                })
            })
        }
        l.Fc = function() {
            if (this.h.warningMessage) {
                var a = this.C(),
                    b = this.j.getAttribute("type"),
                    c = this.j.getAttribute("config");
                E().warn(a, "Warning from analytics vendor%s%s: %s", b ? " " + b : "", c ? " with remote config url " + c : "", String(this.h.warningMessage));
                delete this.h.warningMessage
            }
        };

        function Vc(a, b) {
            var c = b.configRewriter,
                d = c && c.varGroups,
                e = (a.lb.configRewriter || {}).varGroups;
            if (!d && !e) return r();
            if (d && !e) {
                var f = a.C();
                E().warn(f, "This analytics provider does not currently support varGroups");
                return r()
            }
            b.configRewriter = b.configRewriter || {};
            var g = b.configRewriter;
            g.vars = z({});
            var h = [],
                k = d || {};
            ya(k, e);
            Object.keys(k).forEach(function(m) {
                var n = k[m];
                if (n.enabled) {
                    var t = a.shallowExpandObject(a.j, n).then(function(q) {
                        delete q.enabled;
                        Object.assign(g.vars, q)
                    });
                    h.push(t)
                }
            });
            return Promise.all(h).then(function() {
                if (!Object.keys(g.vars).length) return delete b.configRewriter;
                d && delete g.varGroups
            })
        }

        function Tc(a, b) {
            var c = z({
                vars: {
                    requestCount: 0
                }
            });
            T(Wc(a.Kc), c);
            T(Wc(a.lb), c, !0);
            T(Wc(b), c, !0);
            return c
        }
        l.C = function() {
            return "AmpAnalytics " + (this.j.getAttribute("id") || "<unknown id>")
        };
        l.shallowExpandObject = function(a, b) {
            var c = {},
                d = [],
                e = [],
                f = M(a),
                g = S(a).getMacros(a);
            Object.keys(b).forEach(function(h) {
                d.push(h);
                var k = f.expandStringAsync(b[h], g);
                e.push(k)
            });
            return Promise.all(e).then(function(h) {
                d.forEach(function(k, m) {
                    return c[k] = h[m]
                });
                return c
            })
        };

        function T(a, b, c) {
            if (null === b || void 0 === b) b = {};
            G(c || !a || !a.optout || "_gaUserPrefs.ioo" == a.optout || "__gaOptOutExtension" == a.optoutElementId, "optout property is only available to vendor config.");
            for (var d in a) G(c || "iframePing" != d, "iframePing config is only available to vendor config."), A(a, d) && (w(a[d]) ? (w(b[d]) || (b[d] = []), b[d] = T(a[d], b[d], c)) : y(a[d]) ? (y(b[d]) || (b[d] = {}), b[d] = T(a[d], b[d], c)) : b[d] = a[d]);
            return b
        }

        function Wc(a) {
            if (!a.requests) return a;
            for (var b in a.requests)
                if (A(a.requests, b)) {
                    var c = a.requests;
                    var d = a.requests[b];
                    d = y(d) ? d : {
                        baseUrl: d
                    };
                    c[b] = d
                }
            if (A(a, "requests") && A(a, "requestOrigin")) {
                b = a.requestOrigin;
                for (var e in a.requests) A(a.requests[e], "origin") || (a.requests[e].origin = b)
            }
            return a
        };

        function U() {
            this.O = null
        }
        l = U.prototype;
        l.add = function(a) {
            var b = this;
            this.O || (this.O = []);
            this.O.push(a);
            return function() {
                b.remove(a)
            }
        };
        l.remove = function(a) {
            if (this.O) {
                var b = this.O;
                a = b.indexOf(a); - 1 != a && b.splice(a, 1)
            }
        };
        l.removeAll = function() {
            this.O && (this.O.length = 0)
        };
        l.fire = function(a) {
            if (this.O)
                for (var b = ca(this.O), c = b.next(); !c.done; c = b.next()) c = c.value, c(a)
        };
        l.getHandlerCount = function() {
            var a, b;
            return null != (b = null == (a = this.O) ? void 0 : a.length) ? b : 0
        };
        var Xc = {
            ENDED: "video-ended",
            PAUSE: "video-pause",
            PLAY: "video-play",
            SESSION: "video-session",
            SESSION_VISIBLE: "video-session-visible",
            SECONDS_PLAYED: "video-seconds-played",
            CUSTOM: "video-hosted-custom",
            PERCENTAGE_PLAYED: "video-percentage-played",
            AD_START: "video-ad-start",
            AD_END: "video-ad-end"
        };
        var Yc = /^vars(.+)/;

        function Zc() {}
        var ra = {
                CLICK: "click",
                CUSTOM: "custom",
                HIDDEN: "hidden",
                INI_LOAD: "ini-load",
                RENDER_START: "render-start",
                SCROLL: "scroll",
                STORY: "story",
                TIMER: "timer",
                VIDEO: "video",
                VISIBLE: "visible"
            },
            V = ["ampdoc", "embed"],
            W = {},
            hd = Object.freeze((W.click = {
                name: "click",
                allowedFor: V.concat(["timer"]),
                klass: function(a) {
                    return new $c(a)
                }
            }, W.custom = {
                name: "custom",
                allowedFor: V.concat(["timer"]),
                klass: function(a) {
                    return new X(a)
                }
            }, W.hidden = {
                name: "visible",
                allowedFor: V.concat(["timer"]),
                klass: function(a) {
                    return new ad(a)
                }
            }, W["ini-load"] = {
                name: "ini-load",
                allowedFor: V.concat(["timer", "visible"]),
                klass: function(a) {
                    return new bd(a)
                }
            }, W["render-start"] = {
                name: "render-start",
                allowedFor: V.concat(["timer", "visible"]),
                klass: function(a) {
                    return new cd(a)
                }
            }, W.scroll = {
                name: "scroll",
                allowedFor: V.concat(["timer"]),
                klass: function(a) {
                    return new dd(a)
                }
            }, W.story = {
                name: "story",
                allowedFor: V,
                klass: function(a) {
                    return new ed(a)
                }
            }, W.timer = {
                name: "timer",
                allowedFor: V,
                klass: function(a) {
                    return new fd(a)
                }
            }, W.video = {
                name: "video",
                allowedFor: V.concat(["timer"]),
                klass: function(a) {
                    return new gd(a)
                }
            }, W.visible = {
                name: "visible",
                allowedFor: V.concat(["timer"]),
                klass: function(a) {
                    return new ad(a)
                }
            }, W));

        function id(a) {
            return a.startsWith("video") ? "video" : a.startsWith("story") ? "story" : qa(a) ? A(hd, a) ? hd[a].name : a : "custom"
        }

        function jd(a) {
            var b = {};
            Object.keys(hd).forEach(function(c) {
                A(hd, c) && -1 != hd[c].allowedFor.indexOf(a) && (b[c] = hd[c].klass)
            });
            return b
        }

        function Y(a, b, c, d) {
            c = void 0 === c ? {} : c;
            d = void 0 === d ? !0 : d;
            var e = c,
                f = d;
            this.target = a;
            this.type = b;
            f ? (a = cb(a, Yc), ya(a, e, 0)) : a = e;
            this.vars = a
        }

        function Z(a) {
            this.root = a
        }
        Z.prototype.dispose = function() {};
        Z.prototype.add = function() {};

        function X(a) {
            this.root = a;
            var b = this;
            this.P = {};
            this.G = {};
            this.ia = {};
            setTimeout(function() {
                b.G = void 0
            }, 1E4)
        }
        p(X, Z);
        X.prototype.dispose = function() {
            this.ia = this.G = void 0;
            for (var a in this.P) this.P[a].removeAll()
        };
        X.prototype.add = function(a, b, c, d) {
            var e = this,
                f = c.selector;
            f || (f = ":root");
            var g = this.root.getElement(a, f, c.selectionMethod || null),
                h = b.startsWith("sandbox-"),
                k = h ? this.ia && this.ia[b] : this.G && this.G[b];
            if (k) {
                var m = k.length;
                g.then(function(t) {
                    setTimeout(function() {
                        for (var q = 0; q < m; q++) {
                            var u = k[q];
                            t.contains(u.target) && d(u)
                        }
                        h && (e.ia[b] = void 0)
                    }, 1)
                })
            }
            var n = this.P[b];
            n || (n = new U, this.P[b] = n);
            return this.P[b].add(function(t) {
                g.then(function(q) {
                    q.contains(t.target) && d(t)
                })
            })
        };
        X.prototype.trigger = function(a) {
            var b = a.type,
                c = b.startsWith("sandbox-"),
                d = this.P[b];
            if (d && (d.fire(a), c)) return;
            c ? (this.ia[b] = this.ia[b] || [], this.ia[b].push(a)) : this.G && (this.G[b] = this.G[b] || [], this.G[b].push(a))
        };

        function ed(a) {
            X.call(this, a)
        }
        p(ed, X);
        ed.prototype.add = function(a, b, c, d) {
            var e = this.root.getRootElement();
            if (a = this.G && this.G[b])
                for (var f = a.length, g = 0; g < f; g++) kd(a[g], e, c, d);
            a = this.P[b];
            a || (a = new U, this.P[b] = a);
            return this.P[b].add(function(h) {
                kd(h, e, c, d)
            })
        };

        function kd(a, b, c, d) {
            var e = a.type;
            a = a.vars;
            var f = c.storySpec || {},
                g = void 0 === f.repeat ? !0 : f.repeat,
                h = a.eventDetails;
            (c = c.tagName) && h.tagName && c.toLowerCase() !== h.tagName || !1 === g && h.repeated || d(new Y(b, e, a))
        }
        ed.prototype.trigger = function(a) {
            var b = a.type,
                c = this.P[b];
            c && c.fire(a);
            this.G && (this.G[b] = this.G[b] || [], this.G[b].push(a))
        };

        function $c(a) {
            this.root = a;
            this.Na = new U;
            this.Tb = this.Na.fire.bind(this.Na);
            this.root.getRoot().addEventListener("click", this.Tb)
        }
        p($c, Z);
        $c.prototype.dispose = function() {
            this.root.getRoot().removeEventListener("click", this.Tb);
            this.Na.removeAll()
        };
        $c.prototype.add = function(a, b, c, d) {
            b = G(c.selector, "Missing required selector on click trigger");
            c = c.selectionMethod || null;
            return this.Na.add(this.root.createSelectiveListener(this.Nc.bind(this, d), a.parentElement || a, b, c))
        };
        $c.prototype.Nc = function(a, b) {
            a(new Y(b, "click"))
        };

        function dd(a) {
            this.H = this.root = a;
            this.wa = null
        }
        p(dd, Z);
        dd.prototype.dispose = function() {
            null !== this.wa && (this.H.getScrollManager().removeScrollHandler(this.wa), this.wa = null)
        };
        dd.prototype.add = function(a, b, c, d) {
            if (!c.scrollSpec) return E().error("amp-analytics/events", "Missing scrollSpec on scroll trigger."), Zc;
            if (!Array.isArray(c.scrollSpec.verticalBoundaries) && !Array.isArray(c.scrollSpec.horizontalBoundaries)) return E().error("amp-analytics/events", "Boundaries are required for the scroll trigger to work."), Zc;
            var e = ld(c.scrollSpec.verticalBoundaries),
                f = ld(c.scrollSpec.horizontalBoundaries);
            this.wa = this.fd.bind(this, f, e, !!c.scrollSpec.useInitialPageSize, d);
            return this.H.getScrollManager().addScrollHandler(this.wa)
        };
        dd.prototype.fd = function(a, b, c, d, e) {
            c = c ? e.initialSize : e;
            var f = c.scrollWidth;
            md(this, b, 100 * (e.top + e.height) / c.scrollHeight, "verticalScrollBoundary", d);
            md(this, a, 100 * (e.left + e.width) / f, "horizontalScrollBoundary", d)
        };

        function ld(a) {
            var b = z({});
            if (!a || !Array.isArray(a)) return b;
            for (var c = 0; c < a.length; c++) {
                var d = a[c];
                if ("number" !== typeof d || !isFinite(d)) {
                    E().error("amp-analytics/events", "Scroll trigger boundaries must be finite.");
                    break
                }
                d = Math.min(5 * Math.round(d / 5), 100);
                b[d] = !1
            }
            return b
        }

        function md(a, b, c, d, e) {
            if (c)
                for (var f in b)
                    if (A(b, f)) {
                        var g = parseInt(f, 10);
                        g > c || b[g] || (b[g] = !0, g = {}, g[d] = f, e(new Y(a.H.getRootElement(), "scroll", g, !1)))
                    }
        }

        function cd(a) {
            this.root = a
        }
        p(cd, Z);
        cd.prototype.dispose = function() {};
        cd.prototype.add = function(a, b, c, d) {
            var e = this,
                f = c.selector || ":root";
            if (":root" == f || ":host" == f) {
                var g = this.root.getRootElement();
                var h = this.getRootSignal(b)
            } else h = this.root.getAmpElement(a.parentElement || a, f, c.selectionMethod).then(function(k) {
                g = k;
                return e.getElementSignal(b, g)
            });
            h.then(function() {
                d(new Y(g, b))
            });
            return Zc
        };
        cd.prototype.getRootSignal = function(a) {
            return this.root.signals().whenSignal(a)
        };
        cd.prototype.getElementSignal = function(a, b) {
            return "function" != typeof b.signals ? r() : b.signals().whenSignal(a)
        };

        function bd(a) {
            this.root = a
        }
        p(bd, Z);
        bd.prototype.dispose = function() {};
        bd.prototype.add = function(a, b, c, d) {
            var e = this,
                f = c.selector || ":root";
            if (":root" == f || ":host" == f) {
                var g = this.root.getRootElement();
                a = this.getRootSignal()
            } else a = this.root.getAmpElement(a.parentElement || a, f, c.selectionMethod).then(function(h) {
                g = h;
                return e.getElementSignal("ini-load", g)
            });
            a.then(function() {
                d(new Y(g, b))
            });
            return Zc
        };
        bd.prototype.getRootSignal = function() {
            return this.root.whenIniLoaded()
        };
        bd.prototype.getElementSignal = function(a, b) {
            if ("function" != typeof b.signals) return r();
            var c = b.signals();
            return Promise.race([c.whenSignal("ini-load"), c.whenSignal("load-end")])
        };

        function nd(a, b, c) {
            this.Ya = void 0;
            G("interval" in a, "Timer interval specification required");
            this.hc = Number(a.interval) || 0;
            G(.5 <= this.hc, "Bad timer interval specification");
            this.kc = "maxTimerLength" in a ? Number(a.maxTimerLength) : 7200;
            G(0 < this.kc, "Bad maxTimerLength specification");
            this.Vc = "maxTimerLength" in a;
            this.Dc = "immediate" in a ? !!a.immediate : !0;
            this.ja = this.$ = this.yb = null;
            this.Ga = b || null;
            this.ib = c || null;
            this.Za = this.X = void 0
        }
        l = nd.prototype;
        l.init = function(a) {
            this.Ga ? this.Ga && (this.$ = this.Ga()) : a()
        };
        l.dispose = function() {
            this.ja && (this.ja(), this.ja = null);
            this.$ && (this.$(), this.$ = null)
        };
        l.isRunning = function() {
            return !!this.Ya
        };
        l.startIntervalInWindow = function(a, b, c) {
            if (!this.isRunning() && (this.X = Date.now(), this.Za = void 0, this.yb = b, this.Ya = a.setInterval(function() {
                    b()
                }, 1E3 * this.hc), (!this.ib || this.ib && this.Vc) && a.setTimeout(function() {
                    c()
                }, 1E3 * this.kc), this.$ && (this.$(), this.$ = null), this.Dc && b(), this.ib)) try {
                this.ja = this.ib()
            } catch (d) {
                throw this.dispose(), d;
            }
        };
        l.jb = function(a) {
            this.isRunning() && (this.yb(), this.yb = null, a.clearInterval(this.Ya), this.Za = this.Ya = void 0, this.ja && (this.ja(), this.ja = null), this.Ga && (this.$ = this.Ga()))
        };
        l.getTimerVars = function() {
            var a = 0;
            this.isRunning() && (a = this.X ? Date.now() - (this.Za || this.X) : 0, this.Za = Date.now());
            return z({
                timerDuration: a,
                timerStart: this.X || 0
            })
        };

        function fd(a) {
            this.root = a;
            this.F = {};
            this.kd = 1
        }
        p(fd, Z);
        l = fd.prototype;
        l.getTrackedTimerKeys = function() {
            return Object.keys(this.F)
        };
        l.dispose = function() {
            var a = this;
            this.getTrackedTimerKeys().forEach(function(b) {
                a.Fb(b)
            })
        };
        l.add = function(a, b, c, d) {
            var e = this;
            c = c.timerSpec;
            G(c && "object" == typeof c, "Bad timer specification");
            var f = "startSpec" in c ? c.startSpec : null;
            G(!f || "object" == typeof f, "Bad timer start specification");
            var g = "stopSpec" in c ? c.stopSpec : null;
            G(!f && !g || "object" == typeof g, "Bad timer stop specification");
            var h = ++this.kd;
            if (f) {
                var k = od(this, f);
                G(k, "Cannot track timer start");
                var m = k.add.bind(k, a, f.on, f, this.ac.bind(this, h, b, d))
            }
            if (g) {
                var n = od(this, g);
                G(n, "Cannot track timer stop");
                var t = n.add.bind(n, a, g.on, g,
                    this.ac.bind(this, h, b, d))
            }
            var q = new nd(c, m, t);
            this.F[h] = q;
            q.init(this.tc.bind(this, h, b, d));
            return function() {
                e.Fb(h)
            }
        };

        function od(a, b) {
            b = E().assertString(b.on);
            var c = id(b);
            return a.root.getTrackerForAllowlist(c, jd("timer"))
        }
        l.ac = function(a, b, c) {
            var d = this.F[a];
            d && (d.isRunning() ? this.jb(a) : this.tc(a, b, c))
        };
        l.tc = function(a, b, c) {
            var d = this;
            this.F[a].startIntervalInWindow(this.root.ampdoc.win, function() {
                var e = new Y(d.root.getRootElement(), b, d.F[a].getTimerVars(), !1);
                c(e)
            }, this.Fb.bind(this, a))
        };
        l.jb = function(a) {
            this.F[a].jb(this.root.ampdoc.win)
        };
        l.Fb = function(a) {
            this.F[a] && (this.jb(a), this.F[a].dispose(), delete this.F[a])
        };

        function gd(a) {
            this.root = a;
            var b = this;
            this.hb = new U;
            this.tb = this.hb.fire.bind(this.hb);
            Object.keys(Xc).forEach(function(c) {
                b.root.getRoot().addEventListener(Xc[c], b.tb)
            })
        }
        p(gd, Z);
        gd.prototype.dispose = function() {
            var a = this,
                b = this.root.getRoot();
            Object.keys(Xc).forEach(function(c) {
                b.removeEventListener(Xc[c], a.tb)
            });
            this.hb = this.tb = null
        };
        gd.prototype.add = function(a, b, c, d) {
            var e = c.videoSpec || {},
                f = this.root.getElement(a, c.selector || e.selector, c.selectionMethod || null),
                g = e["end-session-when-invisible"],
                h = e["exclude-autoplay"],
                k = e.interval,
                m = e.percentages,
                n = c.on,
                t = 0,
                q = 0;
            return this.hb.add(function(u) {
                var x = u.type,
                    C = u.data,
                    N = "video-session-visible" == x ? "video-session" : "video-hosted-custom" == x ? C["__amp:eventType"] : x;
                if (N === n)
                    if ("video-seconds-played" !== N || k) {
                        if ("video-seconds-played" === N && (t++, 0 !== t % k)) return;
                        if ("video-percentage-played" ===
                            N) {
                            if (!m) {
                                E().error("amp-analytics/events", "video-percentage-played requires percentages spec.");
                                return
                            }
                            for (var aa = 0; aa < m.length; aa++) {
                                var Mc = m[aa];
                                if (0 >= Mc || 0 != Mc % 5) {
                                    E().error("amp-analytics/events", "Percentages must be set in increments of %s with non-zero values", 5);
                                    return
                                }
                            }
                            var Va = parseInt(C.normalizedPercentage, 10);
                            Ja(Va);
                            if (q == Va && 1 < m.length || 0 > m.indexOf(Va)) return;
                            q = Va
                        }
                        if ("video-session-visible" !== x || g)
                            if (!h || "playing_auto" !== C.state) {
                                var ve = u.target;
                                f.then(function(Nc) {
                                    if (Nc.contains(ve)) {
                                        if (C) {
                                            var Bb =
                                                Object.assign({}, C);
                                            delete Bb["__amp:eventType"]
                                        } else Bb = {};
                                        d(new Y(Nc, N, Bb))
                                    }
                                })
                            }
                    } else E().error("amp-analytics/events", "video-seconds-played requires interval spec with non-zero value")
            })
        };

        function ad(a) {
            this.root = a;
            this.wc = {}
        }
        p(ad, Z);
        l = ad.prototype;
        l.dispose = function() {};
        l.add = function(a, b, c, d) {
            var e = this,
                f = c.visibilitySpec || {},
                g = c.selector || f.selector,
                h = f.waitFor,
                k = f.reportWhen,
                m = null;
            k && G(!f.repeat, "reportWhen and repeat are mutually exclusive.");
            "hidden" === b && (k && E().error("amp-analytics/events", 'ReportWhen should not be defined when eventType is "hidden"'), k = "documentHidden");
            var n = this.root.getVisibilityManager();
            "documentHidden" == k ? m = this.Hc.bind(this) : "documentExit" == k ? m = this.Gc.bind(this) : G(!k, 'reportWhen value "%s" not supported.', k);
            if (!g || ":root" == g || ":host" ==
                g) return n.listenRoot(f, this.getReadyPromise(h || (g ? "ini-load" : "none")), m, this.lc.bind(this, b, d, this.root.getRootElement()));
            c = c.selectionMethod || f.selectionMethod;
            pd(g);
            var t = this.root.getElements(a.parentElement || a, g, c).then(function(q) {
                for (var u = [], x = 0; x < q.length; x++) u.push(n.listenElement(q[x], f, e.getReadyPromise(h, q[x]), m, e.lc.bind(e, b, d, q[x])));
                return u
            });
            return function() {
                t.then(function(q) {
                    for (var u = 0; u < q.length; u++) q[u]()
                })
            }
        };

        function pd(a) {
            if (w(a))
                for (var b = {}, c = 0; c < a.length; c++) G(!b[a[c]], "Cannot have duplicate selectors in selectors list: %s", a), b[a[c]] = a[c]
        }
        l.Hc = function() {
            var a = this.root.ampdoc;
            return a.isVisible() ? new Promise(function(b) {
                a.onVisibilityChanged(function() {
                    a.isVisible() || b()
                })
            }) : r()
        };
        l.Gc = function() {
            var a = new v,
                b = this.root.ampdoc.win,
                c, d;
            "onpagehide" in this.root.ampdoc.win || b.addEventListener("unload", c = function() {
                b.removeEventListener("unload", c);
                a.resolve()
            });
            b.addEventListener("pagehide", d = function() {
                b.removeEventListener("pagehide", d);
                a.resolve()
            });
            return a.promise
        };
        l.getReadyPromise = function(a, b) {
            if (b) {
                var c = b.tagName;
                c.startsWith("AMP-") && "AMP-STICKY-AD-TOP-PADDING" != c && "AMP-BODY" != c ? a = a || "ini-load" : G(!a || "none" == a, "waitFor for non-AMP elements must be none or null. Found %s", a)
            }
            if (!a || "none" == a) return null;
            var d = jd("visible");
            G(void 0 !== d[a], "waitFor value %s not supported", a);
            var e = this.wc[a] || this.root.getTrackerForAllowlist(a, d);
            if (e) this.wc[a] = e;
            else return null;
            return b ? e.getElementSignal(a, b) : e.getRootSignal(a)
        };
        l.lc = function(a, b, c, d) {
            var e = cb(c, Yc),
                f;
            for (f in e) d[f] = e[f];
            b(new Y(c, a, d, !1))
        };
        var qd = !1;

        function rd() {
            this.ha = []
        }
        rd.prototype.peek = function() {
            var a = this.length;
            return a ? this.ha[a - 1].item : null
        };
        rd.prototype.enqueue = function(a, b) {
            if (isNaN(b)) throw Error("Priority must not be NaN.");
            for (var c = -1, d = 0, e = this.length; d <= e;) {
                c = Math.floor((d + e) / 2);
                if (c === this.length) break;
                if (this.ha[c].priority < b) d = c + 1;
                else if (0 < c && this.ha[c - 1].priority >= b) e = c - 1;
                else break
            }
            this.ha.splice(c, 0, {
                item: a,
                priority: b
            })
        };
        rd.prototype.forEach = function(a) {
            for (var b = this.length; b--;) a(this.ha[b].item)
        };
        rd.prototype.dequeue = function() {
            return this.length ? this.ha.pop().item : null
        };
        fa.Object.defineProperties(rd.prototype, {
            length: {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return this.ha.length
                }
            }
        });
        var sd = /nochunking=1/.test(self.location.hash),
            td = r();

        function ud(a, b, c) {
            if (sd) td.then(b);
            else {
                var d = vd,
                    e = K(a),
                    f = L(e);
                Ra(f, e, "chunk", d);
                J(a, "chunk").run(b, c)
            }
        }

        function wd(a) {
            this.state = "not_run";
            this.wb = a
        }

        function xd(a, b) {
            if ("run" != a.state) {
                a.state = "run";
                try {
                    a.wb(b)
                } catch (c) {
                    throw a.mc(), c;
                }
            }
        }
        wd.prototype.C = function() {
            return this.wb.displayName || this.wb.name
        };
        wd.prototype.mc = function() {};
        wd.prototype.cc = function() {
            return !1
        };
        wd.prototype.vc = function() {
            return !1
        };

        function yd(a, b, c) {
            wd.call(this, a);
            this.Ub = c
        }
        p(yd, wd);
        yd.prototype.mc = function() {
            var a = self.document;
            if (!qd) {
                qd = !0;
                a = a.body;
                var b = {
                        opacity: 1,
                        visibility: "visible",
                        animation: "none"
                    },
                    c;
                for (c in b) {
                    var d = a,
                        e = b[c];
                    var f = d.style;
                    var g = c;
                    if (g.startsWith("--")) f = g;
                    else {
                        bc || (bc = Object.create(null));
                        var h = bc[g];
                        if (!h) {
                            h = g;
                            if (void 0 === f[g]) {
                                var k = g;
                                k = k.charAt(0).toUpperCase() + k.slice(1);
                                b: {
                                    for (var m = 0; m < cc.length; m++) {
                                        var n = cc[m] + k;
                                        if (void 0 !== f[n]) {
                                            k = n;
                                            break b
                                        }
                                    }
                                    k = ""
                                }
                                void 0 !== f[k] && (h = k)
                            }
                            bc[g] = h
                        }
                        f = h
                    }
                    f && (f.startsWith("--") ? d.style.setProperty(f, e) : d.style[f] = e)
                }
            }
        };
        yd.prototype.cc = function() {
            return this.Ub.ampdoc.isVisible()
        };
        yd.prototype.vc = function() {
            return this.Ub.Wb
        };

        function vd(a) {
            var b = this;
            this.ampdoc = a;
            this.o = a.win;
            this.ua = new rd;
            this.Rb = this.Yb.bind(this);
            this.oa = 0;
            this.jd = !(!this.o.navigator.scheduling || !this.o.navigator.scheduling.isInputPending);
            this.gb = !1;
            this.yc = this.o.document.documentElement.hasAttribute("i-amphtml-no-boilerplate");
            this.o.addEventListener("message", function(c) {
                "amp-macro-task" == c.data && b.Yb(null)
            });
            this.Wb = !1;
            Sa(L(a), "viewer").then(function() {
                b.Wb = !0
            });
            a.onVisibilityChanged(function() {
                a.isVisible() && zd(b)
            })
        }
        vd.prototype.run = function(a, b) {
            a = new wd(a);
            this.ua.enqueue(a, b);
            zd(this)
        };
        vd.prototype.runForStartup = function(a) {
            a = new yd(a, this.o, this);
            this.ua.enqueue(a, Number.POSITIVE_INFINITY);
            zd(this)
        };

        function Ad(a, b) {
            for (var c = a.ua.peek(); c && "not_run" !== c.state;) a.ua.dequeue(), c = a.ua.peek();
            c && b && a.ua.dequeue();
            return c
        }
        vd.prototype.Yb = function(a) {
            var b = this,
                c = Ad(this, !0);
            if (!c) return this.gb = !1, this.oa = 0, !1;
            try {
                var d = Date.now();
                xd(c, a)
            } finally {
                td.then().then().then().then().then().then().then().then().then(function() {
                    b.gb = !1;
                    b.oa += Date.now() - d;
                    F().fine("CHUNK", c.C(), "Chunk duration", Date.now() - d, b.oa);
                    zd(b)
                })
            }
            return !0
        };

        function Bd(a) {
            a.yc && (a.jd ? a.o.navigator.scheduling.isInputPending() : 5 < a.oa) ? (a.oa = 0, Cd(a)) : td.then(function() {
                a.Rb(null)
            })
        }

        function zd(a) {
            if (!a.gb) {
                var b = Ad(a);
                b && (b.cc() ? (a.gb = !0, Bd(a)) : b.vc() && a.o.requestIdleCallback ? Dd(a.o, a.Rb) : Cd(a))
            }
        }

        function Cd(a) {
            a.o.postMessage("amp-macro-task", "*")
        }

        function Dd(a, b) {
            function c(e) {
                if (15 > e.timeRemaining()) {
                    var f = 2E3 - (Date.now() - d);
                    0 >= f || e.didTimeout ? (F().fine("CHUNK", "Timed out", 2E3, e.didTimeout), b(e)) : (F().fine("CHUNK", "Rescheduling with", f, e.timeRemaining()), a.requestIdleCallback(c, {
                        timeout: f
                    }))
                } else F().fine("CHUNK", "Running idle callback with ", 15), b(e)
            }
            var d = Date.now();
            a.requestIdleCallback(c, {
                timeout: 2E3
            })
        };
        var Ed = {
            referrerDomains: !0,
            enabled: !0,
            cookiePath: !0,
            cookieMaxAge: !0,
            cookieSecure: !0,
            cookieDomain: !0,
            sameSite: !0,
            SameSite: !0,
            secure: !0
        };

        function Fd(a, b, c) {
            this.o = a;
            this.j = b;
            this.kb = M(b);
            this.mb = null;
            this.h = c;
            this.xc = S(b).getMacros(b)
        }
        Fd.prototype.write = function() {
            var a = this;
            this.mb || (this.mb = new v, ud(this.j, function() {
                a.mb.resolve(Gd(a))
            }, 10));
            return this.mb.promise
        };

        function Gd(a) {
            if (!oc(a.o, a.j) || !A(a.h, "cookies")) return r();
            if (!y(a.h.cookies)) return E().error("amp-analytics/cookie-writer", "cookies config must be an object"), r();
            var b = a.h.cookies;
            if (!1 === b.enabled) return r();
            var c;
            A(b, "cookieMaxAge") ? (c = Number(b.cookieMaxAge)) || 0 === c ? (0 >= c && E().warn("amp-analytics/cookie-writer", "cookieMaxAge %s less than or equal to 0, cookie will immediately expire", b.cookieMaxAge), c *= 1E3) : (E().error("amp-analytics/cookie-writer", "invalid cookieMaxAge %s, falling back to default value (1 year)",
                b.cookieMaxAge), c = 31536E6) : c = 31536E6;
            var d = c;
            c = Object.keys(b);
            for (var e = [], f = 0; f < c.length; f++) {
                var g = c[f],
                    h = b[g];
                a: {
                    switch (h.sameSite || h.SameSite || b.sameSite || b.SameSite) {
                        case "Strict":
                            var k = "Strict";
                            break a;
                        case "Lax":
                            k = "Lax";
                            break a;
                        case "None":
                            k = "None";
                            break a
                    }
                    k = void 0
                }
                var m = h;
                Ed[g] ? m = !1 : y(m) ? A(m, "value") ? m = !0 : (E().error("amp-analytics/cookie-writer", "value is required in the cookieValue object"), m = !1) : (E().error("amp-analytics/cookie-writer", "cookieValue must be configured in an object"), m = !1);
                m && e.push(Hd(a, g, h.value, d, k))
            }
            return Promise.all(e)
        }

        function Hd(a, b, c, d, e) {
            return a.kb.expandStringAsync(c, a.xc).then(function(f) {
                if (f) {
                    var g = Date.now() + d,
                        h = a.o,
                        k = {
                            highestAvailableDomain: !0,
                            sameSite: e,
                            secure: "None" === e
                        };
                    k = void 0 === k ? {} : k;
                    if (k.allowOnProxyOrigin) G(!k.highestAvailableDomain, "Could not support highestAvailable Domain on proxy origin, specify domain explicitly");
                    else {
                        G(!Mb(h.location.href), "Should never attempt to set cookie on proxy origin: " + b);
                        var m = P(h.location.href).hostname.toLowerCase(),
                            n = P(Ha.cdn).hostname.toLowerCase();
                        G(!(m ==
                            n || sa(m, "." + n)), "Should never attempt to set cookie on proxy origin. (in depth check): " + b)
                    }
                    m = void 0;
                    k.domain ? m = k.domain : k.highestAvailableDomain && (m = Yb(h));
                    Zb(h, b, f, g, m, k.sameSite, k.secure)
                }
            }).catch(function(f) {
                E().error("amp-analytics/cookie-writer", "Error expanding cookie string", f)
            })
        };

        function Id(a) {
            this.T = O(a.ampdoc);
            this.Wc = J(a.ampdoc, "mutator");
            this.ma = null;
            this.ta = new U;
            this.H = a.getRootElement();
            this.Xa = null
        }
        Id.prototype.dispose = function() {
            this.ta.removeAll();
            this.ma && (this.ma(), this.ma = null)
        };
        Id.prototype.removeScrollHandler = function(a) {
            this.ta.remove(a);
            0 >= this.ta.getHandlerCount() && this.ma && (this.ma(), this.ma = null)
        };
        Id.prototype.addScrollHandler = function(a) {
            var b = this,
                c = this.T.getSize();
            (this.Xa || Jd(this)).then(function(d) {
                var e = d.top,
                    f = d.left,
                    g = d.width,
                    h = d.height,
                    k = {
                        top: b.T.getScrollTop() - e,
                        left: b.T.getScrollLeft() - f,
                        width: c.width,
                        height: c.height,
                        scrollHeight: h,
                        scrollWidth: g,
                        initialSize: {
                            scrollHeight: h,
                            scrollWidth: g
                        }
                    };
                a(k)
            });
            0 === this.ta.getHandlerCount() && (this.ma = this.T.onChanged(this.Zc.bind(this)));
            return this.ta.add(a)
        };
        Id.prototype.Zc = function(a) {
            var b = this;
            return Promise.all([this.Xa || Jd(this), Jd(this)]).then(function(c) {
                var d = c[0],
                    e = c[1];
                b.ta.fire({
                    top: a.top - e.top,
                    left: a.left - e.left,
                    width: a.width,
                    height: a.height,
                    scrollWidth: e.width,
                    scrollHeight: e.height,
                    initialSize: {
                        scrollHeight: d.height,
                        scrollWidth: d.width
                    }
                })
            })
        };

        function Jd(a) {
            var b = a.Wc.measureElement(function() {
                return a.T.getLayoutRect(a.H)
            });
            a.Xa = a.Xa || b;
            return b
        };

        function Kd(a, b, c, d) {
            return {
                left: a,
                top: b,
                width: c,
                height: d,
                bottom: b + d,
                right: a + c,
                x: a,
                y: b
            }
        }

        function Ld(a, b, c) {
            c = {
                top: c,
                bottom: c + b.getHeight(),
                left: 0,
                right: b.getWidth()
            };
            c = Kd(Number(c.left), Number(c.top), Number(c.width), Number(c.height));
            return a.top <= c.bottom && c.top <= a.bottom && a.left <= c.right && c.left <= a.right ? "inside" : a.top < c.top ? "top" : a.bottom > c.bottom ? "bottom" : "inside"
        };

        function Md(a, b) {
            var c = this;
            this.Cc = b;
            this.N = z({
                visiblePercentageMin: Number(a.visiblePercentageMin) / 100 || 0,
                visiblePercentageMax: Number(a.visiblePercentageMax) / 100 || 1,
                totalTimeMin: Number(a.totalTimeMin) || 0,
                totalTimeMax: Number(a.totalTimeMax) || Infinity,
                continuousTimeMin: Number(a.continuousTimeMin) || 0,
                continuousTimeMax: Number(a.continuousTimeMax) || Infinity
            });
            "0" === String(a.visiblePercentageMax).trim() && (this.N.visiblePercentageMax = 0);
            this.Sc = void 0 !== a.reportWhen;
            this.pc = !0 === a.repeat;
            this.ga = new U;
            var d = new v;
            this.Pa = d.promise;
            this.pa = d.resolve;
            this.Pa.then(function() {
                c.ga.fire()
            });
            this.ka = [];
            this.Ic = Date.now();
            this.Gb = this.nc = !0;
            this.L = this.Oa = null;
            this.vb = this.qa = !1;
            this.ec = this.ya = this.ab = this.Ba = this.Db = this.$a = this.Sa = this.Bb = this.Ra = this.S = this.W = this.U = 0;
            this.Nb = this.dc = !1;
            this.fb = null
        }
        l = Md.prototype;
        l.cb = function() {
            var a = this,
                b = new v;
            this.Pa = b.promise;
            this.pa = b.resolve;
            this.Pa.then(function() {
                a.ga.fire()
            });
            this.fb = null;
            this.qa = this.vb = !1;
            this.ya = this.ab = this.Ba = this.$a = this.Bb = this.Ra = this.Sa = this.S = this.W = this.U = 0;
            this.Nb = !1
        };
        l.maybeDispose = function() {
            this.pc || this.dispose()
        };
        l.dispose = function() {
            this.L && (clearTimeout(this.L), this.L = null);
            this.fb && (clearTimeout(this.fb), this.fb = null);
            this.ka.forEach(function(a) {
                a()
            });
            this.ka.length = 0;
            this.pa = null;
            this.ga && (this.ga.removeAll(), this.ga = null)
        };
        l.unsubscribe = function(a) {
            this.ka.push(a)
        };
        l.onTriggerEvent = function(a) {
            this.ga && this.ga.add(a);
            this.Pa && !this.pa && a()
        };
        l.setReady = function(a) {
            this.nc = a;
            this.update()
        };
        l.setReportReady = function(a) {
            this.Gb = !1;
            this.Oa = a
        };
        l.update = function() {
            Nd(this, this.nc ? this.Cc() : 0)
        };
        l.getState = function(a) {
            return z({
                firstSeenTime: Od(this.Ra, a),
                lastSeenTime: Od(this.Bb, a),
                lastVisibleTime: Od(this.$a, a),
                firstVisibleTime: Od(this.Sa, a),
                maxContinuousVisibleTime: this.W,
                totalVisibleTime: this.S,
                loadTimeVisibility: 100 * this.Db || 0,
                minVisiblePercentage: 100 * this.Ba,
                maxVisiblePercentage: 100 * this.ab
            })
        };

        function Nd(a, b) {
            if (a.Nb) Pd(a, b) || a.cb();
            else if (a.pa)
                if (Qd(a, b) || a.Sc)
                    if (a.L && (clearTimeout(a.L), a.L = null), a.Gb) a.pa(), a.pa = null, a.pc && (a.Nb = !0, a.U = 0);
                    else {
                        if (a.Oa) {
                            var c = a.Oa();
                            a.Oa = null;
                            c.then(function() {
                                a.Gb = !0;
                                a.update()
                            })
                        }
                    }
            else if (a.qa && !a.L) {
                var d = Rd(a);
                0 < d && (a.L = setTimeout(function() {
                    a.L = null;
                    a.update()
                }, d))
            } else !a.qa && a.L && (clearTimeout(a.L), a.L = null)
        }

        function Pd(a, b) {
            return 1 == a.N.visiblePercentageMin ? 1 == b : 0 == a.N.visiblePercentageMax ? 0 == b : b > a.N.visiblePercentageMin && b <= a.N.visiblePercentageMax
        }

        function Qd(a, b) {
            var c = Date.now();
            0 < b && (a.Ra = a.Ra || c, a.Bb = c, !a.Db && 300 > c - a.Ic && (a.Db = b));
            var d = a.qa,
                e = a.ya ? c - a.ya : 0;
            a.qa = Pd(a, b);
            a.qa ? (a.vb = !0, d ? (a.S += e, a.U += e, a.W = Math.max(a.W, a.U)) : a.Sa = a.Sa || c, a.ya = c, a.Ba = 0 < a.Ba ? Math.min(a.Ba, b) : b, a.ab = Math.max(a.ab, b), a.$a = c) : d && (a.W = Math.max(a.W, a.U + e), a.ya = 0, a.S += e, a.U = 0, a.$a = c);
            return a.vb && a.S >= a.N.totalTimeMin && a.S <= a.N.totalTimeMax && a.W >= a.N.continuousTimeMin && a.W <= a.N.continuousTimeMax
        }
        l.maybeSetInitialScrollDepth = function(a) {
            this.dc || (this.ec = a, this.dc = !0)
        };
        l.getInitialScrollDepth = function() {
            return this.ec
        };

        function Rd(a) {
            var b = Math.max(a.N.continuousTimeMin - a.U, 0),
                c = Math.max(a.N.totalTimeMin - a.S, 0);
            return Math.min(Math.max(b, c), b || Infinity, c || Infinity)
        }

        function Od(a, b) {
            return a >= b ? a - b : 0
        };

        function Sd(a) {
            var b = a.parentElement,
                c = [];
            if (b) {
                var d = b;
                c.push(d);
                for (var e = 0; 50 > e; e++)
                    if ((b = d.parentNode || d.parentElement) && 1 == b.nodeType) d = b, c.push(d);
                    else if (b && 9 == b.nodeType)
                    if ((b = d.ownerDocument.defaultView.frameElement) && 1 == b.nodeType) d = b, c.push(d);
                    else break;
                else break
            }
            c.push(a);
            var f = 1;
            for (a = 0; a < c.length; a++) {
                if (b = c[a])
                    if (b = window.getComputedStyle(b) || dc, d = b.opacity, "hidden" === b.visibility) var g = 0;
                    else b = "" === d ? 1 : parseFloat(d), g = isNaN(b) ? 1 : b;
                else g = 1;
                g < f && (f = g);
                if (0 === f) break
            }
            return f
        };
        var Td = [0, .05, .1, .15, .2, .25, .3, .35, .4, .45, .5, .55, .6, .65, .7, .75, .8, .85, .9, .95, 1],
            Ud = 1;

        function Vd(a) {
            var b = a.__AMP_VIS_ID;
            b || (b = ++Ud, a.__AMP_VIS_ID = b);
            return b
        }

        function Wd(a) {
            if (!a.__AMP_VIS) {
                var b = K(a);
                var c = Pa(a),
                    d = c && c.__AMP_EMBED__,
                    e;
                if (e = c)
                    if (Node.prototype.getRootNode) e = c.getRootNode() || c;
                    else {
                        for (; c.parentNode && (!c || "I-AMPHTML-SHADOW-ROOT" != c.tagName && (11 != c.nodeType || "[object ShadowRoot]" !== Object.prototype.toString.call(c))); c = c.parentNode);
                        e = c
                    }
                c = e;
                b = d && c ? new Xd(Wd(c), d) : new Yd(b);
                a.__AMP_VIS = b
            }
            return a.__AMP_VIS
        }

        function Zd(a, b) {
            var c = this;
            this.parent = a;
            this.ampdoc = b;
            this.Ib = 0;
            this.fa = [];
            this.J = null;
            this.ka = [];
            this.Eb = 0;
            this.parent && $d(this.parent, this);
            var d = O(this.ampdoc);
            d.onChanged(function() {
                c.maybeUpdateMaxScrollDepth(d.getScrollTop())
            })
        }

        function $d(a, b) {
            a.J || (a.J = []);
            a.J.push(b)
        }

        function ae(a, b) {
            a.J && (b = a.J.indexOf(b), -1 != b && a.J.splice(b, 1))
        }
        l = Zd.prototype;
        l.dispose = function() {
            this.setRootVisibility(0);
            for (var a = this.fa.length - 1; 0 <= a; a--) this.fa[a].dispose();
            this.ka.forEach(function(b) {
                b()
            });
            this.ka.length = 0;
            this.parent && ae(this.parent, this);
            if (this.J)
                for (a = 0; a < this.J.length; a++) this.J[a].dispose()
        };
        l.unsubscribe = function(a) {
            this.ka.push(a)
        };
        l.getStartTime = function() {};
        l.isBackgrounded = function() {};
        l.isBackgroundedAtStart = function() {};
        l.getRootMinOpacity = function() {};
        l.getRootLayoutBox = function() {};
        l.getRootVisibility = function() {
            return this.parent ? 0 < this.parent.getRootVisibility() ? this.Ib : 0 : this.Ib
        };
        l.setRootVisibility = function(a) {
            this.Ib = a;
            be(this);
            if (this.J)
                for (a = 0; a < this.J.length; a++) be(this.J[a])
        };
        l.maybeUpdateMaxScrollDepth = function(a) {
            a > this.Eb && (this.Eb = a)
        };
        l.getMaxScrollDepth = function() {
            return this.Eb
        };

        function be(a) {
            for (var b = 0; b < a.fa.length; b++) a.fa[b].update()
        }
        l.listenRoot = function(a, b, c, d) {
            var e = this.getRootVisibility.bind(this);
            return ce(this, e, a, b, c, d)
        };
        l.listenElement = function(a, b, c, d, e) {
            var f = this.getElementVisibility.bind(this, a);
            return ce(this, f, b, c, d, e, a)
        };

        function ce(a, b, c, d, e, f, g) {
            if (c.visiblePercentageThresholds && void 0 == c.visiblePercentageMin && void 0 == c.visiblePercentageMax) {
                var h = [],
                    k = c.visiblePercentageThresholds;
                if (!k || !w(k)) return E().error("amp-analytics/visibility-manager", "invalid visiblePercentageThresholds"),
                    function() {};
                for (var m = 0; m < k.length; m++) {
                    var n = k[m];
                    if (w(n) && 2 == n.length)
                        if (Ja(n[0]) && Ja(n[1])) {
                            var t = Number(n[0]),
                                q = Number(n[1]);
                            if (0 > t || 100 < q || t > q || t == q && 100 != t && 0 != q) E().error("amp-analytics/visibility-manager", "visiblePercentageThresholds entry invalid min/max value");
                            else {
                                var u = c;
                                u.visiblePercentageMin = t;
                                u.visiblePercentageMax = q;
                                var x = new Md(u, b, O(a.ampdoc));
                                h.push(de(a, x, d, e, f, g))
                            }
                        } else E().error("amp-analytics/visibility-manager", "visiblePercentageThresholds entry is not valid number");
                    else E().error("amp-analytics/visibility-manager", "visiblePercentageThresholds entry length is not 2")
                }
                return function() {
                    h.forEach(function(N) {
                        return N()
                    })
                }
            }
            var C = new Md(c, b, O(a.ampdoc));
            return de(a, C, d, e, f, g)
        }

        function de(a, b, c, d, e, f) {
            d && b.setReportReady(d);
            var g = O(a.ampdoc),
                h = g.getScrollTop();
            a.maybeUpdateMaxScrollDepth(h);
            c ? (b.setReady(!1), c.then(function() {
                b.setReady(!0);
                b.maybeSetInitialScrollDepth(h)
            })) : b.maybeSetInitialScrollDepth(h);
            b.onTriggerEvent(function() {
                var k = a.getStartTime(),
                    m = b.getState(k);
                m.backgrounded = a.isBackgrounded() ? 1 : 0;
                m.backgroundedAtStart = a.isBackgroundedAtStart() ? 1 : 0;
                m.totalTime = Date.now() - k;
                if (f) {
                    m.elementId = f.id;
                    m.opacity = Sd(f);
                    k = g.getLayoutRect(f);
                    var n = a.getElementVisibility(f),
                        t = a.getElementIntersectionRect(f);
                    Object.assign(m, z({
                        intersectionRatio: n,
                        intersectionRect: JSON.stringify(t)
                    }))
                } else m.opacity = a.getRootMinOpacity(), m.intersectionRatio = a.getRootVisibility(), k = a.getRootLayoutBox();
                b.maybeDispose();
                k && (Object.assign(m, z({
                    elementX: k.left,
                    elementY: k.top,
                    elementWidth: k.width,
                    elementHeight: k.height
                })), m.initialScrollDepth = Ld(k, g, b.getInitialScrollDepth()), m.maxScrollDepth = Ld(k, g, a.getMaxScrollDepth()));
                e(m)
            });
            a.fa.push(b);
            b.unsubscribe(function() {
                var k = a.fa.indexOf(b); -
                1 != k && a.fa.splice(k, 1)
            });
            f && b.unsubscribe(a.observe(f, function() {
                return b.update()
            }));
            b.update();
            return function() {
                b.dispose()
            }
        }
        l.observe = function() {};
        l.getElementVisibility = function() {};
        l.getElementIntersectionRect = function() {};

        function Yd(a) {
            Zd.call(this, null, a);
            var b = this;
            this.T = O(a);
            this.Qb = !a.isVisible();
            this.qb = this.isBackgrounded();
            this.Y = Object.create(null);
            this.ca = null;
            if ("inabox" == B(this.ampdoc.win).runtime) {
                a = this.ampdoc.getRootNode();
                var c = a.documentElement || a.body || a;
                this.unsubscribe(this.observe(c, this.setRootVisibility.bind(this)));
                var d = function() {
                    var e = Vd(c),
                        f = b.Y[e];
                    f && (f.isVisible = 1 > b.ampdoc.win.innerHeight || 1 > b.ampdoc.win.innerWidth ? !1 : !0, b.setRootVisibility(f.isVisible ? f.intersectionRatio : 0))
                };
                this.ampdoc.win.addEventListener("resize",
                    d);
                this.unsubscribe(function() {
                    b.ampdoc.win.removeEventListener("resize", d)
                })
            } else this.setRootVisibility(this.ampdoc.isVisible() ? 1 : 0), this.unsubscribe(this.ampdoc.onVisibilityChanged(function() {
                var e = b.ampdoc.isVisible();
                e || (b.Qb = !0);
                b.setRootVisibility(e ? 1 : 0)
            }))
        }
        p(Yd, Zd);
        l = Yd.prototype;
        l.dispose = function() {
            Zd.prototype.dispose.call(this);
            this.ca && (this.ca.disconnect(), this.ca = null)
        };
        l.getStartTime = function() {
            return this.ampdoc.getFirstVisibleTime()
        };
        l.isBackgrounded = function() {
            return this.Qb
        };
        l.isBackgroundedAtStart = function() {
            return this.qb
        };
        l.getRootMinOpacity = function() {
            var a = this.ampdoc.getRootNode();
            return Sd(a.documentElement || a.body || a)
        };
        l.getRootLayoutBox = function() {
            var a = this.ampdoc.getRootNode();
            return this.T.getLayoutRect(a.documentElement || a.body || a)
        };
        l.observe = function(a, b) {
            var c = this,
                d = Vd(a),
                e = this.Y[d];
            e ? 0 < e.intersectionRatio && e.isVisible && b(e.intersectionRatio) : (e = {
                element: a,
                intersectionRatio: 0,
                intersectionRect: null,
                isVisible: !1,
                boundingClientRect: null,
                listeners: []
            }, this.Y[d] = e);
            e.listeners.push(b);
            this.ca || (this.ca = new this.ampdoc.win.IntersectionObserver(this.Yc.bind(this), {
                threshold: Td
            }));
            this.ca.observe(a);
            return function() {
                var f = c.Y[d];
                if (f) {
                    var g = f.listeners.indexOf(b); - 1 != g && f.listeners.splice(g, 1);
                    0 == f.listeners.length && (c.ca.unobserve(a),
                        delete c.Y[d])
                }
            }
        };
        l.getElementVisibility = function(a) {
            if (0 == this.getRootVisibility()) return 0;
            a = Vd(a);
            return (a = this.Y[a]) && a.isVisible && a.intersectionRatio || 0
        };
        l.getElementIntersectionRect = function(a) {
            if (0 >= this.getElementVisibility(a)) return null;
            a = Vd(a);
            return (a = this.Y[a]) ? a.intersectionRect : null
        };
        l.Yc = function(a) {
            var b = this;
            a.forEach(function(c) {
                var d = c.intersectionRect;
                d = Kd(Number(d.left), Number(d.top), Number(d.width), Number(d.height));
                var e = c.boundingClientRect;
                e = e && Kd(Number(e.left), Number(e.top), Number(e.width), Number(e.height));
                var f = c.intersectionRatio,
                    g = d,
                    h = e;
                f = Math.min(Math.max(f, 0), 1);
                c = Vd(c.target);
                c = b.Y[c];
                var k = !0;
                if (1 > h.width || 1 > h.height) k = !1;
                if (c)
                    for (c.isVisible = k, c.intersectionRatio = f, c.intersectionRect = g, c.boundingClientRect = h, g = 0; g < c.listeners.length; g++) c.listeners[g](c.isVisible ?
                        f : 0)
            })
        };

        function Xd(a, b) {
            Zd.call(this, a, a.ampdoc);
            this.embed = b;
            this.qb = this.parent.isBackgrounded();
            this.unsubscribe(this.parent.observe(b.host, this.setRootVisibility.bind(this)))
        }
        p(Xd, Zd);
        l = Xd.prototype;
        l.getStartTime = function() {
            return this.embed.getStartTime()
        };
        l.isBackgrounded = function() {
            return this.parent.isBackgrounded()
        };
        l.isBackgroundedAtStart = function() {
            return this.qb
        };
        l.getRootMinOpacity = function() {
            return Sd(this.embed.iframe)
        };
        l.getRootLayoutBox = function() {
            var a = this.embed.iframe;
            return O(this.ampdoc).getLayoutRect(a)
        };
        l.observe = function(a, b) {
            return this.parent.observe(a, b)
        };
        l.getElementVisibility = function(a) {
            return 0 == this.getRootVisibility() ? 0 : this.parent.getElementVisibility(a)
        };
        l.getElementIntersectionRect = function(a) {
            return 0 == this.getRootVisibility() ? null : this.parent.getElementIntersectionRect(a)
        };
        var ee = ["AMP-AD", "AMP-ANALYTICS", "AMP-PIXEL", "AMP-AD-EXIT"];

        function fe(a) {
            var b = K(a);
            return b.signals().whenSignal("ready-scan").then(function() {
                var c = J(b, "resources").get().filter(function(d) {
                    return !ee.includes(d.element.tagName)
                }).map(function(d) {
                    return d.element
                });
                return 0 === c.length ? Promise.resolve([]) : (new Promise(function(d) {
                    var e = b.win,
                        f = new e.IntersectionObserver(function(g) {
                            f.disconnect();
                            for (var h = [], k = 0; k < g.length; k++) {
                                var m = g[k],
                                    n = m.target;
                                m.isIntersecting && h.push(n)
                            }
                            d(h)
                        }, {
                            root: e.parent && e.parent != e ? e.document : null,
                            threshold: .01
                        });
                    for (e = 0; e <
                        Math.min(c.length, 100); e++) f.observe(c[e])
                })).then(function(d) {
                    return Promise.all(d.map(function(e) {
                        return e.whenLoaded()
                    }))
                })
            })
        };
        var ge = /^vars(.+)/;

        function he(a) {
            this.ampdoc = a;
            this.F = Object.create(null);
            this.Fa = this.Ja = null
        }
        l = he.prototype;
        l.dispose = function() {
            for (var a in this.F) this.F[a].dispose(), delete this.F[a];
            this.Ja && this.Ja.dispose();
            this.Fa && this.Fa.dispose()
        };
        l.getType = function() {};
        l.getRoot = function() {};
        l.getViewer = function() {
            return J(this.ampdoc, "viewer")
        };
        l.getRootElement = function() {
            var a = this.getRoot();
            return a.host || a.documentElement || a.body || a
        };
        l.getHostElement = function() {};
        l.signals = function() {};
        l.contains = function(a) {
            return this.getRoot().contains(a)
        };
        l.getElementById = function() {};
        l.getTrackerForAllowlist = function(a, b) {
            var c = b[a];
            return c ? this.getTracker(a, c) : null
        };
        l.getTracker = function(a, b) {
            var c = this.F[a];
            c || (c = new b(this), this.F[a] = c);
            return c
        };
        l.getTrackerOptional = function(a) {
            return this.F[a] || null
        };
        l.getElement = function(a, b, c) {
            var d = this,
                e = void 0 === c ? null : c;
            return ":root" == b ? na(function() {
                return d.getRootElement()
            }) : ":host" == b ? new Promise(function(f) {
                f(E().assertElement(d.getHostElement(), 'Element "' + b + '" not found'))
            }) : this.ampdoc.whenReady().then(function() {
                var f = null;
                try {
                    if ("scope" == e)
                        if (void 0 !== Ua ? Ua : Ua = Wa(a)) var g = a.querySelector(b.replace(/^|,/g, "$&:scope "));
                        else {
                            var h = bb(a, b);
                            g = void 0 === h[0] ? null : h[0]
                        }
                    else g = "closest" == e ? Za(a, b) : d.getRoot().querySelector(b);
                    var k = g
                } catch (m) {
                    G(!1, "Invalid query selector " +
                        b)
                }
                k && d.contains(k) && (f = k);
                return E().assertElement(f, 'Element "' + b + '" not found')
            })
        };

        function ie(a, b) {
            return a.ampdoc.whenReady().then(function() {
                for (var c = [], d = 0; d < b.length; d++) {
                    var e = void 0,
                        f = [],
                        g = b[d];
                    try {
                        e = a.getRoot().querySelectorAll(g)
                    } catch (k) {
                        G(!1, "Invalid query selector " + g)
                    }
                    for (var h = 0; h < e.length; h++) a.contains(e[h]) && f.push(e[h]);
                    f = je(f, g);
                    G(f.length, 'Element "' + g + '" not found');
                    c = c.concat(f)
                }
                return c.filter(function(k, m) {
                    return c.indexOf(k) === m
                })
            })
        }

        function je(a, b) {
            for (var c = 0, d = [], e = 0; e < a.length; e++) Object.keys(cb(a[e], ge)).length ? d.push(a[e]) : c++;
            c && E().warn("amp-analytics/analytics-root", '%s element(s) ommited from selector "%s" because no data-vars-* attribute was found.', c, b);
            return d
        }
        l.getAmpElement = function(a, b, c) {
            return this.getElement(a, b, c).then(function(d) {
                for (var e = [d], f = 0; f < e.length; f++) G(e[f].classList.contains("i-amphtml-element"), 'Element "%s" is required to be an AMP element', b);
                return d
            })
        };
        l.getElements = function(a, b, c) {
            return Nb(this.ampdoc.win) && w(b) ? (G(!c, "Cannot have selectionMethod %s defined with an array selector.", c), ie(this, b)) : this.getElement(a, b, c).then(function(d) {
                return [d]
            })
        };
        l.createSelectiveListener = function(a, b, c, d) {
            var e = this,
                f = void 0 === d ? null : d;
            return function(g) {
                if (":host" != c)
                    for (var h = e.getRootElement(), k = "*" == c, m = ":root" == c, n = g.target; n && e.contains(n) && ("scope" != f || m || b.contains(n));) {
                        if ("closest" != f || n.contains(b)) {
                            var t;
                            if (!(t = k || m && n == h)) {
                                var q = c;
                                try {
                                    t = $a(n, q)
                                } catch (u) {
                                    E().error("amp-analytics/analytics-root", "Bad query selector.", q, u), t = !1
                                }
                            }
                            if (t) {
                                a(n, g);
                                break
                            }
                        }
                        n = n.parentElement
                    }
            }
        };
        l.whenIniLoaded = function() {};
        l.getVisibilityManager = function() {
            this.Ja || (this.Ja = Wd(this.getRoot()));
            return this.Ja
        };
        l.getScrollManager = function() {
            this.Fa || (this.Fa = new Id(this));
            return this.Fa
        };

        function ke(a) {
            he.call(this, a)
        }
        p(ke, he);
        l = ke.prototype;
        l.getType = function() {
            return "ampdoc"
        };
        l.getRoot = function() {
            return this.ampdoc.getRootNode()
        };
        l.getHostElement = function() {
            return null
        };
        l.signals = function() {
            return this.ampdoc.signals()
        };
        l.getElementById = function(a) {
            return this.ampdoc.getElementById(a)
        };
        l.whenIniLoaded = function() {
            var a = O(this.ampdoc);
            "inabox" == B(this.ampdoc.win).runtime ? a.getLayoutRect(this.getRootElement()) : (a = a.getSize(), Kd(0, 0, a.width, a.height));
            return fe(this.ampdoc)
        };

        function le(a, b) {
            he.call(this, a);
            this.embed = b
        }
        p(le, he);
        l = le.prototype;
        l.getType = function() {
            return "embed"
        };
        l.getRoot = function() {
            return this.embed.win.document
        };
        l.getHostElement = function() {
            return this.embed.iframe
        };
        l.signals = function() {
            return this.embed.signals()
        };
        l.getElementById = function(a) {
            return this.embed.win.document.getElementById(a)
        };
        l.whenIniLoaded = function() {
            return this.embed.whenIniLoaded()
        };

        function me(a, b) {
            this.H = a;
            this.Pb = b;
            this.jc = [];
            this.Lb = 0;
            this.o = b.ownerDocument.defaultView
        }
        me.prototype.dispose = function() {
            this.jc.forEach(function(a) {
                a()
            })
        };
        me.prototype.addTrigger = function(a, b) {
            function c() {
                k = h.add(d.Pb, e, a, b);
                d.jc.push(k);
                m.resolve()
            }
            var d = this,
                e = a.on,
                f = id(e),
                g = jd(this.H.getType()),
                h = this.H.getTrackerForAllowlist(f, g);
            G(!!h, 'Trigger type "%s" is not allowed in the %s', e, this.H.getType());
            var k, m = new v;
            1 > this.Lb || "inabox" == B(this.o).runtime ? c() : ud(this.Pb, c, 3 > this.Lb ? 20 : 10);
            this.Lb++;
            return m.promise
        };

        function ne(a) {
            this.ampdoc = a;
            this.H = oe(this, a.getRootNode())
        }
        ne.prototype.dispose = function() {
            this.H.dispose()
        };
        ne.prototype.getAnalyticsRoot = function(a) {
            return oe(this, a)
        };
        ne.prototype.createAnalyticsGroup = function(a) {
            var b = oe(this, a);
            return new me(b, a)
        };
        ne.prototype.triggerEventForTarget = function(a, b, c, d) {
            c = void 0 === c ? {} : c;
            c = new Y(a, b, c, void 0 === d ? !0 : d);
            a = oe(this, a);
            b = id(b);
            d = a.getTracker;
            a: switch (b) {
                case "story":
                    var e = ed;
                    break a;
                default:
                    e = X
            }
            d.call(a, b, e).trigger(c)
        };

        function oe(a, b) {
            var c = K(b),
                d = (b = Pa(b)) && b.__AMP_EMBED__;
            return c == a.ampdoc && !d && a.H ? a.H : pe(d || c, function() {
                return d ? new le(c, d) : new ke(c)
            })
        }

        function pe(a, b) {
            var c = a.__AMP_AN_ROOT;
            c || (c = b(), a.__AMP_AN_ROOT = c);
            return c
        };

        function qe(a, b, c, d) {
            this.A = a;
            this.h = b.linkers;
            this.ld = b.vars || {};
            this.M = c;
            this.j = d;
            this.eb = {};
            this.la = La(this.j, "url");
            this.Lc = Sa(L(a), "form-submit-service");
            this.Ta = null;
            this.I = S(this.A);
            this.Ua = null
        }
        qe.prototype.init = function() {
            var a = this;
            if (!y(this.h)) return r();
            this.Ua = Yb(this.A.win);
            this.h = re(this, this.h);
            var b = Object.keys(this.h).map(function(d) {
                var e = a.h[d].ids,
                    f = Object.keys(e),
                    g = f.map(function(h) {
                        var k = new Q(a.ld, void 0, !0);
                        return a.Qa(e[h], k)
                    });
                return Promise.all(g).then(function(h) {
                    var k = {};
                    h.forEach(function(m, n) {
                        m && (k[f[n]] = m)
                    });
                    return a.eb[d] = k
                })
            });
            if (b.length) {
                var c = J(this.A, "navigation");
                c.registerAnchorMutator(function(d, e) {
                    d.href && "click" === e.type && (d.href = se(a, d.href))
                }, 2);
                c.registerNavigateToMutator(function(d) {
                    return se(a,
                        d)
                }, 2)
            }
            te(this);
            return Promise.all(b)
        };
        qe.prototype.dispose = function() {
            this.Ta && this.Ta()
        };

        function re(a, b) {
            var c = {},
                d = {
                    enabled: ue(a) && we(a)
                },
                e = Object.keys(b).filter(function(g) {
                    var h = b[g],
                        k = y(h);
                    k || (d[g] = h);
                    return k
                }),
                f = a.la.isProxyOrigin(a.A.win.location);
            e.forEach(function(g) {
                var h = Object.assign({}, d, b[g]);
                if (!0 !== h.enabled) E().info("amp-analytics/linker-manager", "linker config for %s is not enabled and will be ignored.", g);
                else if (f || !1 === h.proxyOnly) h.ids ? c[g] = h : E().error("amp-analytics/linker-manager", '"ids" is a required field for use of "linkers".')
            });
            return c
        }
        qe.prototype.Qa = function(a, b) {
            var c = this,
                d = this.I.getMacros(this.j);
            return this.I.expandTemplate(a, b, this.j).then(function(e) {
                return M(c.j).expandUrlAsync(e, d)
            })
        };

        function ue(a) {
            return "googleanalytics" !== a.M || "googleanalytics" !== a.A.getMetaByName("amp-google-client-id-api") ? !1 : a.A.registerSingleton(2)
        }

        function we(a) {
            a = H(a.A.win, "platform");
            return a.isSafari() && 12 <= a.getMajorVersion()
        }

        function se(a, b) {
            var c = a.h,
                d;
            for (d in c)
                if (a.eb[d]) {
                    var e = a,
                        f = d,
                        g = c[d].destinationDomains,
                        h = e.la.parse(b);
                    if (xe(e, h, f, g) && ("https:" === h.protocol || "http:" === h.protocol) && (g = uc(e.eb[f]))) {
                        e = {};
                        e[f] = g;
                        f = e;
                        e = P(b);
                        e = Da(e.search);
                        g = z({});
                        h = Object.keys(f);
                        for (var k = 0; k < h.length; k++) A(e, h[k]) || (g[h[k]] = f[h[k]]);
                        b = Jb(b, Kb(g))
                    }
                }
            return b
        }

        function xe(a, b, c, d) {
            var e = b.hostname;
            if (a.A.win.location.hostname === e) return !1;
            if (d && !Array.isArray(d)) return E().warn("amp-analytics/linker-manager", "%s destinationDomains must be an array.", c), !1;
            if (d) return ye(d, e);
            b = J(a.A, "documentInfo").get();
            c = b.sourceUrl;
            var f = a.la.parse(b.canonicalUrl).hostname,
                g = ze(f) === ze(e);
            if (a.Ua) return ye([a.Ua, "*" + a.Ua], e) || g;
            a = a.la.parse(c).hostname;
            return ze(a) === ze(e) || g
        }

        function ye(a, b) {
            for (var c = 0; c < a.length; c++) {
                var d = a[c],
                    e;
                !(e = d === b) && (e = -1 !== d.indexOf("*")) && (e = b, d = d.replace(/[-\/\\^$+?.()|[\]{}]/g, "\\$&").replace(/\*/g, ".*"), e = (new RegExp("^" + d + "$")).test(e));
                if (e) return !0
            }
            return !1
        }

        function te(a) {
            a.Ta || a.Lc.then(function(b) {
                a.Ta = b.beforeSubmit(a.Pc.bind(a))
            })
        }
        qe.prototype.Pc = function(a) {
            var b = a.form,
                c = a.actionXhrMutator,
                d;
            for (d in this.h) {
                a = this.h[d].destinationDomains;
                var e = b.getAttribute("action-xhr") || b.getAttribute("action");
                e = this.la.parse(e);
                if (xe(this, e, d, a) && (a = d, e = this.eb[a])) {
                    var f = uc(e);
                    (e = b.getAttribute("action-xhr")) ? (a = encodeURIComponent(a) + "=" + encodeURIComponent(f), a = Jb(e, a, void 0), c(a)) : (a = z({
                        type: "hidden",
                        name: a,
                        value: f
                    }), a = Xa(b.ownerDocument, "input", a), b.appendChild(a))
                }
            }
        };

        function ze(a) {
            return a.replace(/^(?:www\.|m\.|amp\.)+/, "")
        };

        function Ae() {}
        Ae.prototype.generateRequest = function(a, b, c) {
            return (c = void 0 === c ? !1 : c) ? {
                url: a.replace("${extraUrlParams}", ""),
                payload: JSON.stringify(b.extraUrlParams)
            } : {
                url: Be(a, [b])
            }
        };
        Ae.prototype.generateBatchRequest = function(a, b, c) {
            return (void 0 === c ? 0 : c) ? {
                url: a.replace("${extraUrlParams}", ""),
                payload: JSON.stringify(b.map(function(d) {
                    return d.extraUrlParams
                }))
            } : {
                url: Be(a, b)
            }
        };
        var Ce = {
            "default": new Ae
        };

        function Be(a, b) {
            var c = b.map(function(d) {
                return Kb(d.extraUrlParams)
            }).filter(Boolean).join("&");
            return 0 <= a.indexOf("${extraUrlParams}") ? a.replace("${extraUrlParams}", c) : Jb(a, c)
        };
        var De = {
            AMPDOC_HOST: !0,
            AMPDOC_HOSTNAME: !0,
            AMPDOC_URL: !0,
            AMP_VERSION: !0,
            AVAILABLE_SCREEN_HEIGHT: !0,
            AVAILABLE_SCREEN_WIDTH: !0,
            BACKGROUND_STATE: !0,
            BROWSER_LANGUAGE: !0,
            CANONICAL_HOST: !0,
            CANONICAL_HOSTNAME: !0,
            CANONICAL_PATH: !0,
            CANONICAL_URL: !0,
            DOCUMENT_CHARSET: !0,
            FIRST_CONTENTFUL_PAINT: !0,
            FIRST_VIEWPORT_READY: !0,
            MAKE_BODY_VISIBLE: !0,
            RANDOM: !0,
            SCREEN_COLOR_DEPTH: !0,
            SCREEN_HEIGHT: !0,
            SCREEN_WIDTH: !0,
            SOURCE_HOST: !0,
            SOURCE_HOSTNAME: !0,
            SOURCE_PATH: !0,
            SOURCE_URL: !0,
            TIMESTAMP: !0,
            TIMEZONE: !0,
            TIMEZONE_CODE: !0,
            USER_AGENT: !0,
            VIEWPORT_HEIGHT: !0,
            VIEWPORT_WIDTH: !0
        };

        function Ee(a) {
            return new Promise(function(b) {
                setTimeout(function() {
                    return b(a())
                })
            })
        }

        function Fe(a) {
            return y(a.resources) ? a.encoding && a.encoding.entry && a.encoding.delim ? 2 > a.encoding.base || 36 < a.encoding.base ? (E().warn("ANALYTICS", "resource timing variables only supports bases between 2 and 36"), !1) : null != a.responseAfter && "number" != typeof a.responseAfter ? (E().warn("ANALYTICS", 'resourceTimingSpec["responseAfter"] must be a number'), !1) : !0 : (E().warn("ANALYTICS", "resourceTimingSpec is missing or has incomplete encoding options"), !1) : (E().warn("ANALYTICS", 'resourceTimingSpec missing "resources" field'), !1)
        }

        function Ge(a, b) {
            var c = a.name;
            for (a = 0; a < b.length; ++a) {
                var d = b[a],
                    e = d.resources;
                if (d.hostPattern.test(c.host) && (d = pa(e, function(f) {
                        return f.pathPattern.test(c.pathname) && f.queryPattern.test(c.search)
                    }), -1 != d)) return e[d].name
            }
            return null
        }

        function He(a) {
            var b = {},
                c;
            for (c in a) {
                var d = a[c].host || "",
                    e = {
                        name: c,
                        pathPattern: new RegExp(a[c].path || ""),
                        queryPattern: new RegExp(a[c].query || "")
                    };
                b[d] ? b[d].resources.push(e) : b[d] = {
                    hostPattern: new RegExp(d),
                    resources: [e]
                }
            }
            var f = [],
                g;
            for (g in b) f.push(b[g]);
            return f
        }

        function Ie(a, b) {
            var c = He(b),
                d = [];
            a.forEach(function(e) {
                var f = Ge(e, c);
                f && d.push({
                    entry: e,
                    name: f
                })
            });
            return d
        }

        function Je(a, b, c) {
            function d(h, k) {
                k = void 0 === k ? 0 : k;
                return Math.round(h - k).toString(f.base || 10)
            }
            var e = b.resources,
                f = b.encoding,
                g = S(c);
            a = Ie(a, e).map(function(h) {
                var k = h.entry;
                k = {
                    key: h.name,
                    startTime: d(k.startTime),
                    redirectTime: d(k.redirectEnd, k.redirectStart),
                    domainLookupTime: d(k.domainLookupEnd, k.domainLookupStart),
                    tcpConnectTime: d(k.connectEnd, k.connectStart),
                    serverResponseTime: d(k.responseStart, k.requestStart),
                    networkTransferTime: d(k.responseEnd, k.responseStart),
                    transferSize: d(k.transferSize || 0),
                    encodedBodySize: d(k.encodedBodySize || 0),
                    decodedBodySize: d(k.decodedBodySize || 0),
                    duration: d(k.duration),
                    initiatorType: k.initiatorType
                };
                return new Q(k, 1)
            }).map(function(h) {
                return g.expandTemplate(f.entry, h, c)
            });
            return Promise.all(a).then(function(h) {
                return h.join(f.delim)
            })
        }

        function Ke(a, b) {
            var c = a.getAmpDoc().win;
            if (b.done || !c.performance || !c.performance.now || !c.performance.getEntriesByType || !Fe(b)) return b.done = !0, Promise.resolve("");
            var d = c.performance.getEntriesByType("resource");
            150 <= d.length && (b.done = !0);
            var e = b.responseAfter || 0;
            b.responseAfter = Math.max(e, c.performance.now());
            d = d.filter(function(f) {
                return f.startTime + f.duration >= e
            });
            return d.length ? Ee(function() {
                return Je(d, b, a)
            }) : Promise.resolve("")
        }

        function Le(a, b, c) {
            return b && Date.now() < c + 6E4 ? Ke(a, b) : Promise.resolve("")
        };

        function Me(a, b, c, d, e) {
            this.j = a;
            this.A = a.getAmpDoc();
            this.win = this.A.win;
            this.sc = b.origin;
            this.baseUrl = b.baseUrl;
            this.D = b.batchInterval;
            this.rc = Number(b.reportWindow) || null;
            this.rb = null;
            this.I = S(a);
            this.kb = M(a);
            this.la = La(a, "url");
            this.Hb = this.La = null;
            this.sb = [];
            this.bd = c;
            this.Z = d;
            this.pb = e ? De : void 0;
            this.bb = this.aa = null;
            this.qc = !0;
            this.Cb = null;
            this.Da = 0;
            this.X = Date.now();
            Ne(this);
            if (this.D) {
                this.D = w(this.D) ? this.D : [this.D];
                for (a = 0; a < this.D.length; a++) b = this.D[a], G(Ja(b), "Invalid batchInterval value: %s",
                    this.D), b = 1E3 * Number(b), G(200 <= b, "Invalid batchInterval value: %s, interval value must be greater than %s ms.", this.D, 200), this.D[a] = b;
                this.rb = 0;
                Oe(this)
            }
        }
        Me.prototype.send = function(a, b, c) {
            var d = !0 === b.important;
            if (this.qc || d) {
                this.Da++;
                this.Cb = b;
                var e = this.I.getMacros(this.j);
                e.RESOURCE_TIMING = Le(this.j, b.resourceTimingSpec, this.X);
                this.La || (c.freezeVar("extraUrlParams"), this.La = Pe(this, this.baseUrl, c, e));
                if (!this.Hb && this.sc) {
                    var f = new Q(c.vars, c.iterations, !0);
                    this.Hb = Pe(this, this.sc, f, e)
                }
                var g = Object.assign({}, a, b.extraUrlParams),
                    h = this.win.Date.now(),
                    k = Qe(this.I, this.kb, g, c, e, this.j, this.pb).then(function(m) {
                        return z({
                            trigger: b.on,
                            timestamp: h,
                            extraUrlParams: m
                        })
                    });
                this.sb.push(k);
                0 == this.Da || !d && this.D || Re(this)
            }
        };
        Me.prototype.dispose = function() {
            this.cb();
            this.aa && (this.win.clearTimeout(this.aa), this.aa = null);
            this.bb && (this.win.clearTimeout(this.bb), this.bb = null)
        };

        function Pe(a, b, c, d) {
            return a.I.expandTemplate(b, c, a.j, d, a.pb).then(function(e) {
                return a.kb.expandUrlAsync(e, d, a.pb).catch(function(f) {
                    return G(!1, 'Could not expand URL "' + e + '": ' + f.message)
                })
            })
        }

        function Re(a) {
            var b = a.Hb,
                c = a.La,
                d = a.sb,
                e = a.Cb;
            a.cb();
            (b ? b : c).then(function(f) {
                a.bd.url(a.A, f, !0)
            });
            Promise.all([c, Promise.all(d), b]).then(function(f) {
                var g = f[0];
                var h = f[2];
                g = h ? a.la.parse(h).origin + g : g;
                f = f[1];
                0 !== f.length && (e.iframePing ? (G("visible" == e.on, "iframePing is only available on page view requests."), a.Z.sendRequestUsingIframe(g, f[0])) : a.Z.sendRequest(g, f, !!a.D))
            })
        }
        Me.prototype.cb = function() {
            this.Da = 0;
            this.La = null;
            this.sb = [];
            this.Cb = null
        };

        function Ne(a) {
            a.rc && (a.bb = a.win.setTimeout(function() {
                0 != a.Da && Re(a);
                a.qc = !1;
                a.aa && (a.win.clearTimeout(a.aa), a.aa = null)
            }, 1E3 * a.rc))
        }

        function Oe(a) {
            var b = a.rb < a.D.length ? a.D[a.rb++] : a.D[a.D.length - 1];
            a.aa = a.win.setTimeout(function() {
                0 != a.Da && Re(a);
                Oe(a)
            }, b)
        }

        function Se(a, b, c, d, e, f) {
            var g = S(a),
                h = M(f),
                k = g.getMacros(f);
            e.freezeVar("extraUrlParams");
            var m = g.expandTemplate(b, e, f).then(function(n) {
                return h.expandStringAsync(n, k)
            });
            return 0 > b.indexOf("${extraUrlParams}") ? m : m.then(function(n) {
                var t = Object.assign({}, c, d.extraUrlParams);
                return Qe(g, h, t, e, k, f).then(function(q) {
                    return Be(n, [z({
                        extraUrlParams: q
                    })])
                })
            })
        }

        function Qe(a, b, c, d, e, f, g) {
            function h(q, u, x) {
                q = q[u];
                if ("string" === typeof q) x[u] = void 0, q = a.expandTemplate(q, n, f).then(function(aa) {
                    return b.expandStringAsync(aa, e, g)
                }).then(function(aa) {
                    x[u] = aa
                }), m.push(q);
                else if (w(q)) {
                    x[u] = [];
                    for (var C = 0; C < q.length; C++) h(q, C, x[u])
                } else if (y(q) && null !== q) {
                    x[u] = {};
                    var N = Object.keys(q);
                    for (C = 0; C < N.length; C++) h(q, N[C], x[u])
                } else x[u] = q
            }
            var k = {},
                m = [],
                n = new Q(d.vars, d.iterations, !0),
                t = Object.keys(c);
            for (d = 0; d < t.length; d++) h(c, t[d], k);
            return Promise.all(m).then(function() {
                return k
            })
        };

        function Te(a) {
            var b = this;
            this.Mc = a;
            this.ic = !1;
            this.Ca = [];
            this.$c = new mc(this.Mc, function() {
                b.setIsReady()
            })
        }
        Te.prototype.isReady = function() {
            return this.ic
        };
        Te.prototype.setIsReady = function() {
            this.ic = !0;
            Ue(this)
        };
        Te.prototype.queueSize = function() {
            return this.Ca.length
        };
        Te.prototype.enqueue = function(a) {
            this.Ca.push(a);
            100 <= this.queueSize() && (F().warn("amp-analytics/iframe-transport-message-queue", "Exceeded maximum size of queue for: " + a.creativeId), this.Ca.shift());
            Ue(this)
        };

        function Ue(a) {
            a.isReady() && a.queueSize() && (a.$c.send("iframe-transport-events", {
                events: a.Ca
            }), a.Ca = [])
        };

        function Ve(a, b, c, d) {
            this.va = a;
            this.M = b;
            this.Xb = d;
            this.Zb = c.iframe;
            this.Xc = 0;
            this.processCrossDomainIframe()
        }
        l = Ve.prototype;
        l.detach = function() {
            var a = this.va.document,
                b = this.M,
                c = We[b];
            --c.usageCount || (a.body.removeChild(c.frame), delete We[b], Xe[b] && (Xe[b].disconnect(), Xe[b] = null))
        };
        l.processCrossDomainIframe = function() {
            if (A(We, this.M)) {
                var a = We[this.M];
                ++a.usageCount
            } else a = this.createCrossDomainIframe(), this.va.document.body.appendChild(a.frame), Ye(this)
        };
        l.createCrossDomainIframe = function() {
            var a = String(++Ze),
                b = JSON.stringify({
                    scriptSrc: Ha.thirdParty + "/2105150310000/iframe-transport-client-v0.js",
                    sentinel: a,
                    type: this.M
                }),
                c = Xa(this.va.document, "iframe", {
                    sandbox: "allow-scripts allow-same-origin",
                    name: b,
                    "data-amp-3p-sentinel": a
                });
            c.sentinel = a;
            ec(c);
            c.src = this.Zb;
            a = {
                frame: c,
                usageCount: 1,
                queue: new Te(c)
            };
            return We[this.M] = a
        };

        function Ye(a) {
            $e(a.va) && (Xe[a.M] = new a.va.PerformanceObserver(function(b) {
                b && b.getEntries().forEach(function(c) {
                    c && "longtask" == c.entryType && "cross-origin-descendant" == c.name && c.attribution && c.attribution.forEach(function(d) {
                        a.Zb == d.containerSrc && 0 == ++a.Xc % 5 && E().error("amp-analytics/iframe-transport", 'Long Task: Vendor: "' + a.M + '"')
                    })
                })
            }), Xe[a.M].observe({
                entryTypes: ["longtask"]
            }))
        }
        l.sendRequest = function(a) {
            We[this.M].queue.enqueue({
                creativeId: this.Xb,
                message: a
            })
        };
        l.getCreativeId = function() {
            return this.Xb
        };
        l.getType = function() {
            return this.M
        };

        function $e(a) {
            return !!a.PerformanceObserver && !!a.TaskAttributionTiming && "containerName" in a.TaskAttributionTiming.prototype
        }
        var We = {},
            Ze = 0,
            Xe = {};

        function af(a, b, c) {
            c && "no-referrer" !== c && E().error("pixel", "Unsupported referrerPolicy: %s", c);
            return "no-referrer" === c ? bf(a, b) : cf(a, b)
        }

        function bf(a, b) {
            if ("referrerPolicy" in Image.prototype) return cf(a, b, !0);
            var c = Xa(a.document, "iframe", z({
                src: "about:blank",
                style: "display:none"
            }));
            c.onload = function() {
                cf(c.contentWindow, b)
            };
            a.document.body.appendChild(c);
            return c
        }

        function cf(a, b, c) {
            var d = c = void 0 === c ? !1 : c;
            a = new a.Image;
            d && (a.referrerPolicy = "no-referrer");
            a.src = b;
            return a
        };

        function df(a, b) {
            b = void 0 === b ? {} : b;
            this.A = a;
            this.o = a.win;
            this.K = b;
            this.oc = this.K.referrerPolicy;
            "no-referrer" === this.oc && (this.K.beacon = !1, this.K.xhrpost = !1);
            this.uc = !!this.K.useBody;
            this.ba = null;
            this.da = "inabox" == B(this.o).runtime
        }
        df.prototype.sendRequest = function(a, b, c) {
            if (a && 0 !== b.length) {
                var d = Ce["default"],
                    e = ef(function(h) {
                        h = c ? d.generateBatchRequest(a, b, h) : d.generateRequest(a, b[0], h);
                        if (!h.url.startsWith("amp-script:")) {
                            Lb(h.url, "amp-analytics request");
                            var k = h.url,
                                m = P(k);
                            m = Da(m.search);
                            G(!("__amp_source_origin" in m), "Source origin is not allowed in %s", k)
                        }
                        return h
                    });
                if (this.K.iframe) this.ba ? this.ba.sendRequest(e(!1).url) : F().error("amp-analytics/transport", "iframe transport was inadvertently deleted");
                else if (this.K["amp-script"]) ff(this.A, {
                    url: a,
                    payload: e(!0).payload
                });
                else if (!this.K.beacon || !gf(this.o, e(this.uc)))
                    if (!this.K.xhrpost || !hf(this.o, e(this.uc))) {
                        var f = this.K.image;
                        if (f) {
                            var g = "object" == typeof f && f.suppressWarnings;
                            jf(this.o, e(!1), g, this.oc)
                        } else E().warn("amp-analytics/transport", "Failed to send request", a, this.K)
                    }
            } else F().info("amp-analytics/transport", "Empty request not sent: ", a)
        };
        df.prototype.maybeInitIframeTransport = function(a) {
            if (this.K.iframe && !this.ba) {
                var b = Ka(a.ownerDocument.defaultView),
                    c = a.getAttribute("type");
                if (this.da) a = "1";
                else {
                    var d = E(),
                        e = d.assertString;
                    a: {
                        try {
                            var f = Pa(a, b).parentElement;
                            if ("AMP-AD" == f.nodeName) {
                                var g = String(f.getResourceId());
                                break a
                            }
                        } catch (h) {}
                        g = null
                    }
                    a = e.call(d, g, "No friendly amp-ad ancestor element was found for amp-analytics tag with iframe transport.")
                }
                this.ba = new Ve(b, c, this.K, a)
            }
        };
        df.prototype.deleteIframeTransport = function() {
            this.ba && (this.ba.detach(), this.ba = null)
        };
        df.prototype.sendRequestUsingIframe = function(a, b) {
            var c = this;
            if (a = Be(a, [b])) {
                Lb(a, "amp-analytics request");
                G(P(a).origin != P(this.o.location.href).origin, "Origin of iframe request must not be equal to the document origin. See https://github.com/ampproject/amphtml/blob/main/spec/amp-iframe-origin-policy.md for details.");
                var d = this.o.document.createElement("iframe");
                ec(d);
                d.onload = d.onerror = function() {
                    I(c.o, "timer").delay(function() {
                        d.parentElement && d.parentElement.removeChild(d)
                    }, 5E3)
                };
                d.setAttribute("amp-analytics",
                    "");
                d.setAttribute("sandbox", "allow-scripts allow-same-origin");
                d.src = a;
                this.o.document.body.appendChild(d)
            } else E().error("amp-analytics/transport", "Request not sent. Contents empty.")
        };

        function jf(a, b, c, d) {
            a && (a = af(a, b.url, d), ob(a).then(function() {
                F().fine("amp-analytics/transport", "Sent image request", b.url)
            }).catch(function() {
                c || E().warn("amp-analytics/transport", "Response unparseable or failed to send image request", b.url)
            }))
        }

        function gf(a, b) {
            a = a.navigator.sendBeacon ? a.navigator.sendBeacon.bind(a.navigator) : void 0;
            if (!a) return !1;
            (a = a(b.url, b.payload || "")) && F().fine("amp-analytics/transport", "Sent beacon request", b);
            return a
        }

        function hf(a, b) {
            a = a.XMLHttpRequest;
            if (!a) return !1;
            var c = new a;
            if (!("withCredentials" in c)) return !1;
            c.open("POST", b.url, !0);
            c.withCredentials = !0;
            c.setRequestHeader("Content-Type", "text/plain");
            c.onreadystatechange = function() {
                4 == c.readyState && F().fine("amp-analytics/transport", "Sent XHR request", b.url)
            };
            c.send(b.payload || "");
            return !0
        }

        function ff(a, b) {
            fb(a).then(function(c) {
                G(c, "AMP-SCRIPT is not installed");
                c.fetch(b.url, JSON.parse(b.payload))
            })
        }

        function ef(a) {
            var b = {};
            return function(c) {
                var d = String(c);
                void 0 === b[d] && (b[d] = a(c));
                return b[d]
            }
        };
        var kf = ["visible", "hidden", "ini-load", "render-start"];

        function lf(a) {
            a = AMP.BaseElement.call(this, a) || this;
            a.Vb = r();
            a.ub = null;
            a.V = !1;
            a.Ea = {};
            a.h = {};
            a.fc = null;
            a.na = null;
            a.I = null;
            a.Jc = H(a.win, "crypto");
            a.R = null;
            a.Z = null;
            a.da = "inabox" == B(a.win).runtime;
            a.za = null;
            a.Ab = null;
            return a
        }
        p(lf, AMP.BaseElement);
        l = lf.prototype;
        l.getLayoutPriority = function() {
            return this.da ? 0 : 1
        };
        l.isAlwaysFixed = function() {
            return !nc(this.element)
        };
        l.isLayoutSupported = function() {
            return !0
        };
        l.buildCallback = function() {
            var a = this;
            this.V = this.element.hasAttribute("sandbox");
            this.element.setAttribute("aria-hidden", "true");
            this.ub = this.element.getAttribute("data-consent-notification-id");
            null != this.ub && (this.Vb = db(this.element).then(function(b) {
                return b.get(a.ub)
            }));
            "immediate" == this.element.getAttribute("trigger") && mf(this)
        };
        l.layoutCallback = function() {
            return mf(this)
        };
        l.detachedCallback = function() {
            this.na && (this.na.dispose(), this.na = null);
            this.za && (this.za.dispose(), this.za = null);
            for (var a in this.Ea) this.Ea[a].dispose(), delete this.Ea[a]
        };
        l.resumeCallback = function() {
            var a = this;
            this.R && this.R.then(function() {
                a.Z.maybeInitIframeTransport(a.element)
            })
        };
        l.unlayoutCallback = function() {
            var a = this;
            if (this.getAmpDoc().isVisible()) return !1;
            this.R && this.R.then(function() {
                a.Z.deleteIframeTransport()
            });
            return AMP.BaseElement.prototype.unlayoutCallback.call(this)
        };

        function mf(a) {
            if (a.R) return a.R;
            var b = a.getAmpDoc();
            a.R = b.whenFirstVisible().then(function() {
                return I(a.win, "timer").promise(1)
            }).then(function() {
                return a.Vb
            }).then(function() {
                return Promise.all([Sa(L(b), "amp-analytics-instrumentation"), Sa(L(b), "amp-analytics-variables")])
            }).then(function(c) {
                function d() {
                    var f = (new Pc(a.element)).loadConfig();
                    e.resolve(f)
                }
                a.fc = c[0];
                a.I = c[1];
                var e = new v;
                a.da ? d() : ud(a.element, d, 20);
                return e.promise
            }).then(function(c) {
                a.h = c;
                return (new Fd(a.win, a.element, a.h)).write()
            }).then(function() {
                a.Z =
                    new df(a.getAmpDoc(), a.h.transport || {})
            }).then(a.ed.bind(a)).then(a.Tc.bind(a));
            a.R.then(function() {
                a.collapse()
            });
            return a.R
        }

        function nf(a) {
            if (a.da) return !0;
            null == a.Ab && (a.Ab = nc(a.element));
            return a.Ab
        }
        l.ed = function() {
            var a = this;
            if ( of (this)) {
                var b = this.C();
                E().fine(b, "User has opted out. No hits will be sent.");
                return r()
            }
            pf(this);
            if (!this.h.triggers) return b = this.C(), this.user().warn(b, "No triggers were found in the config. No analytics data will be sent."), r();
            qf(this, this.h.extraUrlParams, this.h.extraUrlParamsReplaceMap);
            this.na = this.fc.createAnalyticsGroup(this.element);
            this.Z.maybeInitIframeTransport(this.element);
            b = [];
            var c = {},
                d;
            for (d in this.h.triggers) {
                a: if (A(this.h.triggers, d)) {
                    c.B = this.h.triggers[d];
                    c.nb = rf(this, z({}), c.B, void 0, !0);
                    var e = this.C();
                    if (c.B) {
                        var f = c.B.request || c.B.parentPostMessage && nf(this);
                        if (c.B.on && f) {
                            if (this.V) {
                                var g = c.B.on;
                                if (qa(g) && !kf.includes(g)) {
                                    this.user().error(e, g + " is not supported for amp-analytics in scope");
                                    break a
                                }
                            }
                            qf(this, c.B.extraUrlParams, this.h.extraUrlParamsReplaceMap);
                            b.push(sf(this, c.B).then(function(k) {
                                return function(m) {
                                    if (m)
                                        if (a.V) {
                                            if (a.element.parentElement) return k.B.selector = a.element.parentElement.tagName, k.B.selectionMethod = "closest", tf(a, k.B)
                                        } else return k.B.selector &&
                                            !w(k.B.selector) ? a.I.expandTemplate(k.B.selector, k.nb, a.element).then(function(n) {
                                                k.B.selector = n;
                                                return tf(a, k.B)
                                            }) : tf(a, k.B)
                                }
                            }(c)))
                        } else {
                            var h = nf(this) ? '/"parentPostMessage"' : "";
                            this.user().error(e, '"on" and "request"' + h + " attributes are required for data to be collected.")
                        }
                    } else this.user().error(e, "Trigger should be an object: ", d)
                }c = {
                    B: c.B,
                    nb: c.nb
                }
            }
            return Promise.all(b)
        };
        l.preload = function(a, b) {
            H(this.win, "preconnect").preload(this.getAmpDoc(), a, b)
        };

        function tf(a, b) {
            if (!a.na) return r();
            try {
                return a.na.addTrigger(b, a.Oc.bind(a, b))
            } catch (c) {
                return a = a.C(), Aa(a, 'Failed to process trigger "' + b.on + '"', c), r()
            }
        }

        function qf(a, b, c) {
            if (b && c) {
                var d = 0,
                    e;
                for (e in c) {
                    if (16 < ++d) {
                        b = a.C();
                        a.user().error(b, "More than 16 extraUrlParamsReplaceMap rules aren't allowed; Skipping the rest");
                        break
                    }
                    for (var f in b) {
                        var g = f.replace(e, c[e]);
                        if (f != g) {
                            var h = b[f];
                            delete b[f];
                            b[g] = h
                        }
                    }
                }
            }
        }

        function of (a) {
            var b = a.h.optoutElementId;
            if (b && a.win.document.getElementById(b)) return !0;
            if (!a.h.optout) return !1;
            var c = a.h.optout.split(".");
            a = a.win;
            for (var d = 0; d < c.length; d++) {
                if (!a) return !1;
                a = a[c[d]]
            }
            return a()
        }

        function pf(a) {
            if (!a.h.requests) {
                if (!nf(a)) {
                    var b = a.C();
                    a.user().warn(b, "No request strings defined. Analytics data will not be sent from this page.")
                }
            } else if (a.h.requests) {
                for (var c in a.h.requests) A(a.h.requests, c) && !a.h.requests[c].baseUrl && (a.user().error("amp-analytics", "request must have a baseUrl"), delete a.h.requests[c]);
                for (var d in a.h.requests) a.h.requests[d].baseUrl = ta(a.h.requests[d].baseUrl, function(e) {
                    var f = a.h.requests[e];
                    return f && f.baseUrl || "${" + e + "}"
                });
                c = {};
                for (b in a.h.requests) A(a.h.requests,
                    b) && (c[b] = new Me(a.element, a.h.requests[b], H(a.win, "preconnect"), a.Z, a.V));
                a.Ea = c
            }
        }
        l.Tc = function() {
            function a() {
                b.za.init()
            }
            var b = this,
                c = this.element.getAttribute("type");
            this.za = new qe(this.getAmpDoc(), this.h, c, this.element);
            this.da ? a() : ud(this.element, a, 10)
        };
        l.Oc = function(a, b) {
            for (var c = w(a.request) ? a.request : [a.request], d = 0; d < c.length; d++) uf(this, c[d], a, b)
        };

        function uf(a, b, c, d) {
            if (!a.element.ownerDocument.defaultView) {
                var e = a.C();
                F().warn(e, "request against destroyed embed: ", c.on)
            }
            var f = a.Ea[b],
                g = nf(a) && c.parentPostMessage;
            if (void 0 != b && !f && (b = a.C(), a.user().error(b, "Ignoring request for event. Request string not found: ", c.request), !g)) return;
            vf(a, c, d).then(function(h) {
                var k = a.element.ownerDocument && a.element.ownerDocument.defaultView;
                if (h && k) {
                    f && (a.h.vars.requestCount++, h = rf(a, d, c), f.send(a.h.extraUrlParams, c, h));
                    if (h = c.parentPostMessage && nf(a)) h =
                        a.win, h = h.parent && h.parent != h;
                    h && wf(a, c, d)
                }
            })
        }

        function wf(a, b, c) {
            var d = b.parentPostMessage;
            c = rf(a, c, b);
            Se(a.getAmpDoc(), d, a.h.extraUrlParams, b, c, a.element).then(function(e) {
                a.win.parent.postMessage(e, "*")
            })
        }

        function sf(a, b) {
            var c = b.sampleSpec,
                d = a.C();
            if (!c) return Promise.resolve(!0);
            var e = c.sampleOn;
            if (!e) return a.user().error(d, "Invalid sampleOn value."), Promise.resolve(!0);
            var f = parseFloat(c.threshold);
            if (0 <= f && 100 >= f) {
                var g = new v,
                    h = function() {
                        var k = rf(a, z({}), b),
                            m = a.Qa(e, k).then(function(n) {
                                return a.Jc.uniform(n)
                            }).then(function(n) {
                                return 100 * n < f
                            });
                        g.resolve(m)
                    };
                a.da ? h() : ud(a.element, h, 10);
                return g.promise
            }
            E().error(d, "Invalid threshold for sampling.");
            return Promise.resolve(!0)
        }

        function vf(a, b, c) {
            c = rf(a, c, b);
            var d = xf(a, a.h.enabled, c),
                e = xf(a, b.enabled, c);
            return Promise.all([d, e]).then(function(f) {
                return f[0] && f[1]
            })
        }

        function xf(a, b, c) {
            return void 0 === b ? Promise.resolve(!0) : "boolean" === typeof b ? Promise.resolve(b) : a.Qa(b, c).then(function(d) {
                return Fc(d)
            })
        }
        l.Qa = function(a, b) {
            var c = this;
            return this.I.expandTemplate(a, b, this.element).then(function(d) {
                return M(c.element).expandUrlAsync(d, c.I.getMacros(c.element))
            })
        };
        l.C = function() {
            return "AmpAnalytics " + (this.element.getAttribute("id") || "<unknown id>")
        };

        function rf(a, b, c, d, e) {
            var f = {};
            T(a.h.vars, f);
            T(c.vars, f);
            T(b.vars, f);
            return new Q(f, d, e)
        }(function(a) {
            a.registerServiceForDoc("amp-analytics-instrumentation", ne);
            a.registerServiceForDoc("activity", tb);
            var b = a.win;
            b = Ka(b);
            Ra(b, b, "amp-analytics-linker-reader", xc);
            a.registerServiceForDoc("amp-analytics-variables", Hc);
            a.registerElement("amp-analytics", lf)
        })(self.AMP);
    })
});

//# sourceMappingURL=amp-analytics-0.1.js.map