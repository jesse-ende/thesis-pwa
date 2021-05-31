self.AMP_CONFIG = {
    "v": "012105150310000",
    "type": "production",
    "allow-doc-opt-in": ["amp-next-page"],
    "allow-url-opt-in": [],
    "canary": 0,
    "a4aProfilingRate": 0.01,
    "adsense-ad-size-optimization": 1,
    "doubleclickSraExp": 0.01,
    "doubleclickSraReportExcludedBlock": 0.1,
    "expand-json-targeting": 1,
    "flexAdSlots": 0.05,
    "ios-fixed-no-transfer": 0,
    "visibility-trigger-improvements": 1,
    "layout-aspect-ratio-css": 0,
    "disable-a4a-non-sd": 1,
    "tcf-post-message-proxy-api": 1,
    "amp-consent-granular-consent": 1,
    "amp-cid-backup": 1,
    "3p-vendor-split": 0.1,
    "story-ad-placements": 0.01,
    "auto-ads-no-insertion-above": 0.2
}; /*AMP_CONFIG*/
var global = self;
self.AMP = self.AMP || [];
try {
    (function(_) {
        if (self.AMP && !Array.isArray(self.AMP)) return;
        'use strict';
        var g;

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

        function p(a) {
            var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            return b ? b.call(a) : {
                next: ba(a)
            }
        }
        var ca = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        };

        function da(a) {
            for (var b = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global], c = 0; c < b.length; ++c) {
                var d = b[c];
                if (d && d.Math == Math) return d
            }
            return function() {
                throw Error("Cannot find global object");
            }()
        }
        var ea = da(this);
        "function" === typeof Symbol && Symbol("x");
        var fa;
        if ("function" == typeof Object.setPrototypeOf) fa = Object.setPrototypeOf;
        else {
            var ha;
            a: {
                var ia = {
                        a: !0
                    },
                    ja = {};
                try {
                    ja.__proto__ = ia;
                    ha = ja.a;
                    break a
                } catch (a) {}
                ha = !1
            }
            fa = ha ? function(a, b) {
                a.__proto__ = b;
                if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
                return a
            } : null
        }
        var ka = fa;

        function la(a, b) {
            a.prototype = ca(b.prototype);
            a.prototype.constructor = a;
            if (ka) ka(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.Ph = b.prototype
        }

        function ma() {
            this.$a = new na
        }
        ma.prototype.abort = function() {
            this.$a.Qd || (this.$a.Qd = !0, this.$a.Ac && this.$a.Ac({
                type: "abort",
                bubbles: !1,
                cancelable: !1,
                target: this.$a,
                currentTarget: this.$a
            }))
        };
        ea.Object.defineProperties(ma.prototype, {
            signal: {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return this.$a
                }
            }
        });

        function na() {
            this.Qd = !1;
            this.Ac = null
        }
        ea.Object.defineProperties(na.prototype, {
            aborted: {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return this.Qd
                }
            },
            onabort: {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return this.Ac
                },
                set: function(a) {
                    this.Ac = a
                }
            }
        });

        function oa(a, b) {
            var c = b || 0,
                d = this.length;
            for (b = 0 <= c ? c : Math.max(d + c, 0); b < d; b++) {
                var e = this[b];
                if (e === a || a !== a && e !== e) return !0
            }
            return !1
        };
        var pa;

        function v() {
            return pa ? pa : pa = Promise.resolve(void 0)
        }

        function x() {
            var a = this;
            this.promise = new Promise(function(b, c) {
                a.resolve = b;
                a.reject = c
            })
        }

        function qa(a) {
            return new Promise(function(b) {
                b(a())
            })
        };
        var ra = Object.prototype,
            sa = ra.toString,
            ta = ra.hasOwnProperty;

        function ua(a) {
            return "[object Object]" === sa.call(a)
        }

        function z(a) {
            var b = Object.create(null);
            a && Object.assign(b, a);
            return b
        }

        function A(a) {
            return a || {}
        }

        function va(a) {
            var b = z(),
                c;
            for (c in a)
                if (ta.call(a, c)) {
                    var d = a[c];
                    b[c] = ua(d) ? va(d) : d
                }
            return b
        };

        function xa(a) {
            var b;
            if (null == (b = Object.getOwnPropertyDescriptor(a, "message")) ? 0 : b.writable) return a;
            var c = a.stack;
            b = Error(a.message);
            for (var d in a) b[d] = a[d];
            b.stack = c;
            return b
        }

        function ya(a) {
            for (var b = null, c = "", d = p(arguments), e = d.next(); !e.done; e = d.next()) e = e.value, e instanceof Error && !b ? b = xa(e) : (c && (c += " "), c += e);
            b ? c && (b.message = c + ": " + b.message) : b = Error(c);
            return b
        }

        function za(a) {
            var b = ya.apply(null, arguments);
            setTimeout(function() {
                var c, d;
                null == (d = (c = self).__AMP_REPORT_ERROR) || d.call(c, b);
                throw b;
            })
        };
        var Aa = /^[a-z][a-z0-9._]*-[a-z0-9._-]*$/,
            Ba = "annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "),
            Ca = {
                childList: !0,
                subtree: !0
            };

        function Da(a, b) {
            if (!Aa.test(b) || Ba.includes(b)) throw new a('invalid custom element name "' + b + '"');
        }

        function Ea(a, b) {
            this.G = a;
            this.Kc = b;
            this.Mf = z()
        }
        Ea.prototype.define = function(a, b, c) {
            this.Kc.define(a, b, c);
            var d = this.Mf,
                e = d[a];
            e && (e.resolve(), delete d[a])
        };
        Ea.prototype.get = function(a) {
            var b = this.Kc.getByName(a);
            if (b) return b.ctor
        };
        Ea.prototype.whenDefined = function(a) {
            Da(this.G.SyntaxError, a);
            if (this.Kc.getByName(a)) return v();
            var b = this.Mf,
                c = b[a];
            c || (c = new x, b[a] = c);
            return c.promise
        };
        Ea.prototype.upgrade = function(a) {
            this.Kc.upgrade(a)
        };

        function Fa(a) {
            this.G = a;
            this.Bd = z();
            this.Xa = "";
            this.ma = this.zd = null;
            this.qe = [a.document]
        }
        g = Fa.prototype;
        g.current = function() {
            var a = this.zd;
            this.zd = null;
            return a
        };
        g.getByName = function(a) {
            var b = this.Bd[a];
            if (b) return b
        };
        g.getByConstructor = function(a) {
            var b = this.Bd,
                c;
            for (c in b) {
                var d = b[c];
                if (d.ctor === a) return d
            }
        };
        g.define = function(a, b, c) {
            var d = this.G,
                e = d.Error;
            d = d.SyntaxError;
            if (c) throw new e("Extending native custom elements is not supported");
            Da(d, a);
            if (this.getByName(a) || this.getByConstructor(b)) throw new e('duplicate definition "' + a + '"');
            this.Bd[a] = {
                name: a,
                ctor: b
            };
            Ga(this, a);
            b = p(this.qe);
            for (c = b.next(); !c.done; c = b.next()) this.upgrade(c.value, a)
        };
        g.upgrade = function(a, b) {
            var c = !!b,
                d = Ha(a, b || this.Xa);
            a = p(d);
            for (var e = a.next(); !e.done; e = a.next()) e = e.value, c ? Ia(this, e) : this.upgradeSelf(e)
        };
        g.upgradeSelf = function(a) {
            var b = this.getByName(a.localName);
            b && Ja(this, a, b)
        };

        function Ha(a, b) {
            return b && a.querySelectorAll ? a.querySelectorAll(b) : []
        }

        function Ja(a, b, c) {
            c = c.ctor;
            if (!(b instanceof c)) {
                a.zd = b;
                try {
                    if (new c !== b) throw new a.G.Error("Constructor illegally returned a different instance.");
                } catch (d) {
                    za(d)
                }
            }
        }

        function Ia(a, b) {
            var c = a.getByName(b.localName);
            if (c && (Ja(a, b, c), b.connectedCallback)) try {
                b.connectedCallback()
            } catch (d) {
                za(d)
            }
        }

        function Ga(a, b) {
            if (a.Xa) a.Xa += "," + b;
            else {
                a.Xa = b;
                var c = new a.G.MutationObserver(function(e) {
                    e && Ka(a, e)
                });
                a.ma = c;
                b = p(a.qe);
                for (var d = b.next(); !d.done; d = b.next()) c.observe(d.value, Ca);
                La(a.G, a)
            }
        }
        g.observe = function(a) {
            this.qe.push(a);
            this.ma && this.ma.observe(a, Ca)
        };
        g.sync = function() {
            this.ma && Ka(this, this.ma.takeRecords())
        };

        function Ka(a, b) {
            b = p(b);
            for (var c = b.next(); !c.done; c = b.next()) {
                var d = c.value;
                if (d) {
                    c = d;
                    var e = c.removedNodes;
                    c = p(c.addedNodes);
                    for (var f = c.next(); !f.done; f = c.next()) {
                        f = f.value;
                        var h = Ha(f, a.Xa);
                        Ia(a, f);
                        var l = p(h);
                        for (f = l.next(); !f.done; f = l.next()) Ia(a, f.value)
                    }
                    c = p(e);
                    for (f = c.next(); !f.done; f = c.next()) {
                        f = f.value;
                        var k = Ha(f, a.Xa);
                        if (f.disconnectedCallback) try {
                            f.disconnectedCallback()
                        } catch (m) {
                            za(m)
                        }
                        l = p(k);
                        for (f = l.next(); !f.done; f = l.next())
                            if (f = f.value, f.disconnectedCallback) try {
                                f.disconnectedCallback()
                            } catch (m) {
                                za(m)
                            }
                    }
                }
            }
        }

        function La(a, b) {
            var c = a.document,
                d = a.Document.prototype,
                e = a.Element.prototype,
                f = a.Node.prototype,
                h = d.createElement,
                l = d.importNode,
                k = f.appendChild,
                m = f.cloneNode,
                n = f.insertBefore,
                q = f.removeChild,
                t = f.replaceChild;
            d.createElement = function(y) {
                var X = b.getByName(y);
                return X ? new X.ctor : h.apply(this, arguments)
            };
            d.importNode = function() {
                var y = l.apply(this, arguments);
                y && this === c && (b.upgradeSelf(y), b.upgrade(y));
                return y
            };
            f.appendChild = function() {
                var y = k.apply(this, arguments);
                b.sync();
                return y
            };
            f.insertBefore =
                function() {
                    var y = n.apply(this, arguments);
                    b.sync();
                    return y
                };
            f.removeChild = function() {
                var y = q.apply(this, arguments);
                b.sync();
                return y
            };
            f.replaceChild = function() {
                var y = t.apply(this, arguments);
                b.sync();
                return y
            };
            f.cloneNode = function() {
                var y = m.apply(this, arguments);
                y.ownerDocument === c && (b.upgradeSelf(y), b.upgrade(y));
                return y
            };
            var w = e,
                u = Object.getOwnPropertyDescriptor(w, "innerHTML");
            u || (w = Object.getPrototypeOf(a.HTMLElement.prototype), u = Object.getOwnPropertyDescriptor(w, "innerHTML"));
            var r;
            if (null == (r =
                    u) ? 0 : r.configurable) {
                var G = u.set;
                u.set = function(y) {
                    G.call(this, y);
                    b.upgrade(this)
                };
                Object.defineProperty(w, "innerHTML", u)
            }
        }

        function Ma() {
            function a() {
                var n = this.constructor,
                    q = h.current();
                q || (q = h.getByConstructor(n), q = f.call(e, q.name));
                Na(q, n.prototype);
                return q
            }
            var b = Oa,
                c = b.Element,
                d = b.HTMLElement,
                e = b.document,
                f = e.createElement,
                h = new Fa(b),
                l = new Ea(b, h);
            Object.defineProperty(b, "customElements", {
                enumerable: !0,
                configurable: !0,
                value: l
            });
            c = c.prototype;
            var k = c.attachShadow,
                m = c.createShadowRoot;
            k && (c.attachShadow = function(n) {
                var q = k.apply(this, arguments);
                h.observe(q);
                return q
            }, c.attachShadow.toString = function() {
                return k.toString()
            });
            m && (c.createShadowRoot = function() {
                var n = m.apply(this, arguments);
                h.observe(n);
                return n
            }, c.createShadowRoot.toString = function() {
                return m.toString()
            });
            Pa(d, a);
            b.HTMLElementOrig = b.HTMLElement;
            b.HTMLElement = a;
            a.call || (a.apply = b.Function.apply, a.bind = b.Function.bind, a.call = b.Function.call)
        }

        function Qa() {
            function a() {
                return d.construct(c, [], this.constructor)
            }
            var b = Oa,
                c = b.HTMLElement,
                d = b.Reflect;
            Pa(c, a);
            b.HTMLElementOrig = b.HTMLElement;
            b.HTMLElement = a
        }

        function Pa(a, b) {
            b.prototype = Object.create(a.prototype, {
                constructor: {
                    configurable: !0,
                    writable: !0,
                    value: b
                }
            });
            Na(b, a)
        }

        function Na(a, b) {
            if (Object.setPrototypeOf) Object.setPrototypeOf(a, b);
            else if ({
                    __proto__: {
                        test: !0
                    }
                }.test) a.__proto__ = b;
            else
                for (; null !== b && !Object.isPrototypeOf.call(b, a);) {
                    for (var c = p(Object.getOwnPropertyNames(b)), d = c.next(); !d.done; d = c.next())
                        if (d = d.value, !Object.hasOwnProperty.call(a, d)) {
                            var e = Object.getOwnPropertyDescriptor(b, d);
                            Object.defineProperty(a, d, e)
                        }
                    b = Object.getPrototypeOf(b)
                }
        };

        function Ra(a, b) {
            if (void 0 === b ? this.contains(a) : !b) return this.remove(a), !1;
            this.add(a);
            return !0
        }

        function Sa() {
            var a = self;
            if (/Trident|MSIE|IEMobile/i.test(a.navigator.userAgent) && a.DOMTokenList) {
                a.Object.defineProperty(a.DOMTokenList.prototype, "toggle", {
                    enumerable: !1,
                    configurable: !0,
                    writable: !0,
                    value: Ra
                });
                var b = a.DOMTokenList.prototype.add;
                a.DOMTokenList.prototype.add = function() {
                    for (var c = 0; c < arguments.length; c++) b.call(this, arguments[c])
                }
            }
        };

        function Ta(a) {
            return a == this || this.documentElement.contains(a)
        };

        function Va(a) {
            return a ? Array.prototype.slice.call(a) : []
        }
        var B = Array.isArray;

        function Wa(a, b) {
            for (var c = [], d = 0, e = 0; e < a.length; e++) {
                var f = a[e];
                b(f, e, a) ? c.push(f) : (d < e && (a[d] = f), d++)
            }
            d < a.length && (a.length = d);
            return c
        }

        function Xa(a, b) {
            for (var c = 0; c < a.length; c++)
                if (b(a[c], c, a)) return c;
            return -1
        }

        function Ya(a, b) {
            b = a.indexOf(b); - 1 != b && a.splice(b, 1)
        };

        function Za(a, b) {
            var c = a.length - b.length;
            return 0 <= c && a.indexOf(b, c) == c
        }

        function $a(a, b) {
            var c;
            "number" !== typeof c && (c = 0);
            return c + b.length > a.length ? !1 : -1 !== a.indexOf(b, c)
        }

        function ab(a) {
            return a.trimStart ? a.trimStart() : (a + "_").trim().slice(0, -1)
        };

        function bb(a) {
            return 1 == (null == a ? void 0 : a.nodeType)
        };

        function cb(a) {
            return bb(a) ? a.tagName.toLowerCase() + (a.id ? "#" + a.id : "") : a
        };

        function db(a, b, c, d) {
            var e = void 0 === c ? "Assertion failed" : c;
            if (b) return b;
            a && !$a(e, a) && (e += a);
            for (var f = 3, h = e.split("%s"), l = h.shift(), k = [l]; h.length;) {
                var m = arguments[f++],
                    n = h.shift();
                l += cb(m) + n;
                k.push(m, n.trim())
            }
            f = Error(l);
            f.messageArray = Wa(k, function(q) {
                return "" !== q
            });
            self.__AMP_REPORT_ERROR && self.__AMP_REPORT_ERROR(f);
            throw f;
        }

        function eb(a, b, c, d, e) {
            B(e) ? a(c, e.concat([b])) : a(c, (e || d) + ": %s", b);
            return b
        };

        function fb(a, b) {
            var c = b = void 0 === b ? "" : b;
            try {
                return decodeURIComponent(a)
            } catch (d) {
                return c
            }
        };
        var gb = /(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;

        function C(a) {
            var b = Object.create(null);
            if (!a) return b;
            for (var c; c = gb.exec(a);) {
                var d = fb(c[1], c[1]);
                c = c[2] ? fb(c[2].replace(/\+/g, " "), c[2]) : "";
                b[d] = c
            }
            return b
        };
        var hb = "";

        function D(a) {
            var b = a || self;
            if (b.__AMP_MODE) b = b.__AMP_MODE;
            else {
                var c = C(b.location.originalHash || b.location.hash);
                hb || (hb = b.AMP_CONFIG && b.AMP_CONFIG.v ? b.AMP_CONFIG.v : "012105150310000");
                c = {
                    localDev: !1,
                    development: !!(0 <= ["1", "actions", "amp", "amp4ads", "amp4email"].indexOf(c.development) || b.AMP_DEV_MODE),
                    examiner: "2" == c.development,
                    esm: !1,
                    geoOverride: c["amp-geo"],
                    minified: !0,
                    test: !1,
                    log: c.log,
                    version: "2105150310000",
                    rtvVersion: hb
                };
                b = b.__AMP_MODE = c
            }
            return b
        };

        function ib(a) {
            var b = !1,
                c = null,
                d = a;
            return function(e) {
                for (var f = [], h = 0; h < arguments.length; ++h) f[h - 0] = arguments[h];
                b || (c = d.apply(self, f), b = !0, d = null);
                return c
            }
        }

        function jb(a, b, c) {
            function d(l) {
                h = null;
                f = a.setTimeout(e, c);
                b.apply(null, l)
            }

            function e() {
                f = 0;
                h && d(h)
            }
            var f = 0,
                h = null;
            return function(l) {
                for (var k = [], m = 0; m < arguments.length; ++m) k[m - 0] = arguments[m];
                f ? h = k : d(k)
            }
        }

        function kb(a, b) {
            function c() {
                d = 0;
                var h = 300 - (a.Date.now() - e);
                if (0 < h) d = a.setTimeout(c, h);
                else {
                    var l = f;
                    f = null;
                    b.apply(null, l)
                }
            }
            var d = 0,
                e = 0,
                f = null;
            return function(h) {
                for (var l = [], k = 0; k < arguments.length; ++k) l[k - 0] = arguments[k];
                e = a.Date.now();
                f = l;
                d || (d = a.setTimeout(c, 300))
            }
        };
        var lb = self.AMP_CONFIG || {},
            mb = ("string" == typeof lb.cdnProxyRegex ? new RegExp(lb.cdnProxyRegex) : lb.cdnProxyRegex) || /^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;

        function nb(a) {
            if (!self.document || !self.document.head || self.location && mb.test(self.location.origin)) return null;
            var b = self.document.head.querySelector('meta[name="' + a + '"]');
            return b && b.getAttribute("content") || null
        }
        var ob = {
                thirdParty: lb.thirdPartyUrl || "https://3p.ampproject.net",
                thirdPartyFrameHost: lb.thirdPartyFrameHost || "ampproject.net",
                thirdPartyFrameRegex: ("string" == typeof lb.thirdPartyFrameRegex ? new RegExp(lb.thirdPartyFrameRegex) : lb.thirdPartyFrameRegex) || /^d-\d+\.ampproject\.net$/,
                cdn: lb.cdnUrl || nb("runtime-host") || "https://cdn.ampproject.org",
                cdnProxyRegex: mb,
                localhostRegex: /^https?:\/\/localhost(:\d+)?$/,
                errorReporting: lb.errorReportingUrl || "https://us-central1-amp-error-reporting.cloudfunctions.net/r",
                betaErrorReporting: lb.betaErrorReportingUrl || "https://us-central1-amp-error-reporting.cloudfunctions.net/r-beta",
                localDev: lb.localDev || !1,
                trustedViewerHosts: [/(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/, /(^|\.)gmail\.(com|dev)$/],
                geoApi: lb.geoApiUrl || nb("amp-geo-api")
            },
            pb = {
                urls: ob
            };

        function qb() {}

        function sb(a) {
            return 0 <= a.indexOf("\u200b\u200b\u200b")
        }
        var tb = void 0;

        function ub(a) {
            tb = a
        }

        function vb(a, b) {
            return b.reduce(function(c, d) {
                return c + "&s[]=" + encodeURIComponent(String(cb(d)))
            }, "https://log.amp.dev/?v=012105150310000&id=" + encodeURIComponent(a))
        }

        function wb(a, b, c) {
            var d = this,
                e = c = void 0 === c ? "" : c;
            this.win = a;
            this.Zg = b;
            this.$g = this.win.console && this.win.console.log && "0" != D().log ? this.Zg(parseInt(D().log, 10), D().development) : 0;
            this.ec = e;
            this.xc = null;
            this.Bg = ib(function() {
                a.fetch(ob.cdn + "/rtv/012105150310000/log-messages.simple.json").then(function(f) {
                    return f.json()
                }, qb).then(function(f) {
                    f && (d.xc = f)
                })
            });
            this.hb = this.assert.bind(this)
        }

        function xb(a) {
            return void 0 !== tb ? tb : a.$g
        }

        function yb(a, b, c, d) {
            if (0 != xb(a)) {
                var e = a.win.console.log;
                "ERROR" == c ? e = a.win.console.error || e : "INFO" == c ? e = a.win.console.info || e : "WARN" == c && (e = a.win.console.warn || e);
                c = B(d[0]) ? zb(a, d[0]) : d;
                b = "[" + b + "]";
                "string" === typeof c[0] ? c[0] = b + " " + c[0] : c.unshift(b);
                e.apply(a.win.console, c)
            }
        }
        g = wb.prototype;
        g.isEnabled = function() {
            return 0 != xb(this)
        };
        g.fine = function(a, b) {
            4 <= xb(this) && yb(this, a, "FINE", Array.prototype.slice.call(arguments, 1))
        };
        g.info = function(a, b) {
            3 <= xb(this) && yb(this, a, "INFO", Array.prototype.slice.call(arguments, 1))
        };
        g.warn = function(a, b) {
            2 <= xb(this) && yb(this, a, "WARN", Array.prototype.slice.call(arguments, 1))
        };
        g.Va = function(a, b) {
            if (1 <= xb(this)) yb(this, a, "ERROR", Array.prototype.slice.call(arguments, 1));
            else {
                var c = ya.apply(null, Array.prototype.slice.call(arguments, 1));
                Ab(this, c);
                return c
            }
        };
        g.error = function(a, b) {
            var c = this.Va.apply(this, arguments);
            c && (c.name = a || c.name, self.__AMP_REPORT_ERROR(c))
        };
        g.expectedError = function(a, b) {
            var c = this.Va.apply(this, arguments);
            c && (c.expected = !0, self.__AMP_REPORT_ERROR(c))
        };
        g.createError = function(a) {
            var b = ya.apply(null, arguments);
            Ab(this, b);
            return b
        };
        g.createExpectedError = function(a) {
            var b = ya.apply(null, arguments);
            Ab(this, b);
            b.expected = !0;
            return b
        };
        g.assert = function(a, b, c) {
            return B(b) ? this.assert.apply(this, [a].concat(zb(this, b))) : db.apply(null, [this.ec].concat(Array.prototype.slice.call(arguments)))
        };
        g.assertElement = function(a, b) {
            return eb(this.hb, a, bb(a), "Element expected", b)
        };
        g.assertString = function(a, b) {
            return eb(this.hb, a, "string" == typeof a, "String expected", b)
        };
        g.assertNumber = function(a, b) {
            return eb(this.hb, a, "number" == typeof a, "Number expected", b)
        };
        g.assertArray = function(a, b) {
            return eb(this.hb, a, B(a), "Array expected", b)
        };
        g.assertBoolean = function(a, b) {
            return eb(this.hb, a, !!a === a, "Boolean expected", b)
        };
        g.assertEnumValue = function(a, b, c) {
            var d = this.hb;
            a: {
                for (var e in a)
                    if (a[e] === b) {
                        a = !0;
                        break a
                    }
                a = !1
            }
            return eb(d, b, a, "Unknown " + (void 0 === c ? "enum" : c) + ' value: "' + b + '"')
        };

        function Ab(a, b) {
            b = xa(b);
            a.ec ? b.message ? -1 == b.message.indexOf(a.ec) && (b.message += a.ec) : b.message = a.ec : sb(b.message) && (b.message = b.message.replace("\u200b\u200b\u200b", ""))
        }

        function zb(a, b) {
            var c = b.shift();
            D(a.win).development && a.Bg();
            return a.xc && c in a.xc ? [a.xc[c]].concat(b) : ["More info at " + vb(c, b)]
        }
        self.__AMP_LOG = self.__AMP_LOG || {
            user: null,
            dev: null,
            userForEmbed: null
        };
        var Bb = self.__AMP_LOG,
            Cb = null;

        function H(a) {
            Bb.user || (Bb.user = Db("\u200b\u200b\u200b"));
            var b = Bb.user.win;
            return a && a.ownerDocument.defaultView != b ? Bb.userForEmbed ? Bb.userForEmbed : Bb.userForEmbed = Db("\u200b\u200b\u200b\u200b") : Bb.user
        }

        function Db(a) {
            if (!Cb) throw Error("failed to call initLogConstructor");
            return new Cb(self, function(b, c) {
                return c || 1 <= b ? 4 : 2
            }, a)
        }

        function J() {
            if (Bb.dev) return Bb.dev;
            if (!Cb) throw Error("failed to call initLogConstructor");
            return Bb.dev = new Cb(self, function(a) {
                return 3 <= a ? 4 : 2 <= a ? 3 : 0
            })
        }

        function K(a, b, c, d, e, f) {
            return H().assert(a, b, c, d, e, f, void 0, void 0, void 0, void 0, void 0)
        };

        function Eb() {};

        function Fb(a, b) {
            db("\u200b\u200b\u200b", a, "Object expected: %s", b, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0)
        };

        function Gb(a) {
            return JSON.parse(a)
        };

        function Hb(a) {
            return "undefined" !== typeof TextEncoder ? (new TextEncoder("utf-8")).encode(a) : Ib(unescape(encodeURIComponent(a)))
        }

        function Ib(a) {
            for (var b = new Uint8Array(a.length), c = 0; c < a.length; c++) {
                var d = a.charCodeAt(c);
                b[c] = d
            }
            return b
        }

        function Jb(a) {
            for (var b = Array(a.length), c = 0; c < a.length; c++) b[c] = String.fromCharCode(a[c]);
            return b.join("")
        };
        var Kb = {
                document: 1,
                text: 2
            },
            Lb = ["GET", "POST"];

        function Mb(a, b) {
            var c = b = void 0 === b ? {} : b;
            return new Promise(function(d, e) {
                var f = Nb(c.method || "GET"),
                    h = Ob(f, a);
                "include" == c.credentials && (h.withCredentials = !0);
                c.responseType in Kb && (h.responseType = c.responseType);
                c.headers && Object.keys(c.headers).forEach(function(l) {
                    h.setRequestHeader(l, c.headers[l])
                });
                h.onreadystatechange = function() {
                    2 > h.readyState || (100 > h.status || 599 < h.status ? (h.onreadystatechange = null, e(H().createExpectedError("Unknown HTTP status " + h.status))) : 4 == h.readyState && d(new Pb(h)))
                };
                h.onerror =
                    function() {
                        e(H().createExpectedError("Network failure"))
                    };
                h.onabort = function() {
                    e(H().createExpectedError("Request aborted"))
                };
                "POST" == f ? h.send(c.body) : h.send()
            })
        }

        function Ob(a, b) {
            var c = new XMLHttpRequest;
            if ("withCredentials" in c) c.open(a, b, !0);
            else throw J().createExpectedError("CORS is not supported");
            return c
        }

        function Pb(a) {
            this.cb = a;
            this.status = this.cb.status;
            this.statusText = this.cb.statusText;
            this.ok = 200 <= this.status && 300 > this.status;
            this.headers = new Qb(a);
            this.bodyUsed = !1;
            this.body = null;
            this.url = a.responseURL
        }
        Pb.prototype.clone = function() {
            return new Pb(this.cb)
        };

        function Rb(a) {
            a.bodyUsed = !0;
            return Promise.resolve(a.cb.responseText)
        }
        Pb.prototype.text = function() {
            return Rb(this)
        };
        Pb.prototype.json = function() {
            return Rb(this).then(Gb)
        };
        Pb.prototype.arrayBuffer = function() {
            return Rb(this).then(Hb)
        };

        function Nb(a) {
            if (void 0 === a) return "GET";
            a = a.toUpperCase();
            Lb.includes(a);
            return a
        }

        function Qb(a) {
            this.cb = a
        }
        Qb.prototype.get = function(a) {
            return this.cb.getResponseHeader(a)
        };
        Qb.prototype.has = function(a) {
            return null != this.cb.getResponseHeader(a)
        };

        function Sb(a, b) {
            var c = b = void 0 === b ? {} : b,
                d = z();
            a = Object.assign({}, {
                status: 200,
                statusText: "OK",
                responseText: a ? String(a) : "",
                getResponseHeader: function(f) {
                    var h = String(f).toLowerCase();
                    return ta.call(d, h) ? d[h] : null
                }
            }, c);
            a.status = void 0 === c.status ? 200 : parseInt(c.status, 10);
            if (B(c.headers)) c.headers.forEach(function(f) {
                var h = f[1];
                d[String(f[0]).toLowerCase()] = String(h)
            });
            else if (ua(c.headers))
                for (var e in c.headers) d[String(e).toLowerCase()] = String(c.headers[e]);
            c.statusText && (a.statusText = String(c.statusText));
            Pb.call(this, a)
        }
        la(Sb, Pb);

        function Tb(a, b, c, d) {
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

        function Ub(a) {
            for (var b = -Infinity, c = Infinity, d = -Infinity, e = Infinity, f = 0; f < arguments.length; f++) {
                var h = arguments[f];
                if (h && (b = Math.max(b, h.left), c = Math.min(c, h.left + h.width), d = Math.max(d, h.top), e = Math.min(e, h.top + h.height), c < b || e < d)) return null
            }
            return Infinity == c ? null : Tb(b, d, c - b, e - d)
        }

        function Vb(a, b) {
            return Tb(a.left - .25 * a.width, a.top - a.height * b, 1.5 * a.width, a.height * (1 + 2 * b))
        }

        function Wb(a, b, c) {
            return 0 == b && 0 == c || 0 == a.width && 0 == a.height ? a : Tb(a.left + b, a.top + c, a.width, a.height)
        };
        /*
         https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
        var Xb = /(\0)|^(-)$|([\x01-\x1f\x7f]|^-?[0-9])|([\x80-\uffff0-9a-zA-Z_-]+)|[^]/g;

        function Yb(a, b, c, d, e) {
            return e ? e : b ? "\ufffd" : d ? a.slice(0, -1) + "\\" + a.slice(-1).charCodeAt(0).toString(16) + " " : "\\" + a
        };
        var Zb;

        function $b(a) {
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

        function ac(a) {
            return "number" === typeof a && isFinite(a)
        };
        var bc = {
            bubbles: !0,
            cancelable: !0
        };

        function cc(a, b, c) {
            if (b(a)) c();
            else {
                var d = a.ownerDocument.defaultView;
                if (d.MutationObserver) {
                    var e = new d.MutationObserver(function() {
                        b(a) && (e.disconnect(), c())
                    });
                    e.observe(a, {
                        childList: !0
                    })
                } else var f = d.setInterval(function() {
                    b(a) && (d.clearInterval(f), c())
                }, 5)
            }
        }

        function dc(a, b) {
            return new Promise(function(c) {
                cc(a, b, c)
            })
        }

        function ec(a, b) {
            cc(a.documentElement, function() {
                return !!a.body
            }, b)
        }

        function fc(a) {
            return new Promise(function(b) {
                return ec(a, b)
            })
        }

        function gc(a) {
            a.parentElement && a.parentElement.removeChild(a)
        }

        function hc(a) {
            var b = A({
                src: "about:blank",
                style: "display:none"
            });
            a = a.createElement("iframe");
            for (var c in b) a.setAttribute(c, b[c]);
            return a
        }

        function ic(a) {
            var b = a.isConnected;
            if (void 0 !== b) return b;
            do
                if (a = jc(a), a.host) a = a.host;
                else break; while (1);
            return a.nodeType === Node.DOCUMENT_NODE
        }

        function jc(a) {
            if (Node.prototype.getRootNode) return a.getRootNode() || a;
            for (; a.parentNode && (!a || "I-AMPHTML-SHADOW-ROOT" != a.tagName && (11 != a.nodeType || "[object ShadowRoot]" !== Object.prototype.toString.call(a))); a = a.parentNode);
            return a
        }

        function kc(a, b) {
            for (; a && void 0 !== a; a = a.parentElement)
                if (b(a)) return a;
            return null
        }

        function lc(a, b) {
            return a.closest ? a.closest(b) : kc(a, function(c) {
                return mc(c, b)
            })
        }

        function nc(a, b) {
            var c = [];
            for (a = a.firstElementChild; a; a = a.nextElementSibling) b(a) && c.push(a);
            return c
        }

        function oc(a, b) {
            for (a = a.lastElementChild; a; a = a.previousElementSibling)
                if (b(a)) return a;
            return null
        }

        function pc(a, b) {
            var c = [];
            for (a = a.firstChild; a; a = a.nextSibling) b(a) && c.push(a);
            return c
        }

        function qc(a, b) {
            /^[\w-]+$/.test(b);
            return rc(a, "> [" + b + "]")
        }

        function mc(a, b) {
            var c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.msMatchesSelector || a.oMatchesSelector;
            return c ? c.call(a, b) : !1
        }

        function sc(a, b) {
            a.classList.add("i-amphtml-scoped");
            var c = b.replace(/^|,/g, "$&.i-amphtml-scoped "),
                d = a.querySelectorAll(c);
            a.classList.remove("i-amphtml-scoped");
            return d
        }

        function rc(a, b) {
            if (void 0 !== Zb ? Zb : Zb = $b(a)) return a.querySelector(b.replace(/^|,/g, "$&:scope "));
            var c = sc(a, b);
            return void 0 === c[0] ? null : c[0]
        }

        function tc(a, b) {
            var c = a;
            do
                if (c.nextSibling) return !0; while ((c = c.parentNode) && c != b);
            return !1
        }

        function uc(a, b) {
            for (var c = a.length, d = 0; d < c; d++) b(a[d], d)
        }

        function vc(a, b, c, d) {
            try {
                var e = a.open(b, c, d)
            } catch (f) {
                J().error("DOM", "Failed to open url on target: ", c, f)
            }
            e || "_top" == c || $a(d || "", "noopener") || (e = a.open(b, "_top"));
            return e
        }

        function wc(a) {
            try {
                a.focus()
            } catch (b) {}
        }

        function xc(a) {
            return a.parent && a.parent != a
        }

        function yc(a, b, c, d) {
            var e = c || {};
            c = a.ownerDocument.createEvent("Event");
            c.data = e;
            d = d || bc;
            c.initEvent(b, d.bubbles, d.cancelable);
            a.dispatchEvent(c)
        };
        var zc;

        function Ac() {
            return ic(this) ? zc.call(this) : Tb(0, 0, 0, 0)
        }

        function Bc() {
            var a = Cc;
            if (!a.document) return !1;
            try {
                return 0 !== a.document.createElement("div").getBoundingClientRect().top
            } catch (b) {
                return !0
            }
        };

        function Fc(a) {
            return !a.IntersectionObserver || !a.IntersectionObserverEntry || !!a.IntersectionObserver._stub || !Gc(a) || /apple/i.test(a.navigator.vendor)
        }

        function Hc() {
            var a = Ic.IntersectionObserver,
                b = Jc;
            return function(c, d) {
                var e;
                return 9 === (null == d ? void 0 : null == (e = d.root) ? void 0 : e.nodeType) ? new b(c, d) : new a(c, d)
            }
        }

        function Gc(a) {
            try {
                return new a.IntersectionObserver(function() {}, {
                    root: a.document
                }), !0
            } catch (b) {
                return !1
            }
        }

        function Jc(a, b) {
            this.Ua = a;
            this.Bc = Object.assign({}, {
                root: null,
                rootMargin: "0px 0px 0px 0px"
            }, b);
            this.W = [];
            this.N = null;
            Jc._upgraders.push(this.Be.bind(this))
        }
        g = Jc.prototype;
        g.disconnect = function() {
            this.N ? this.N.disconnect() : this.W.length = 0
        };
        g.takeRecords = function() {
            return this.N ? this.N.takeRecords() : []
        };
        g.observe = function(a) {
            this.N ? this.N.observe(a) : -1 == this.W.indexOf(a) && this.W.push(a)
        };
        g.unobserve = function(a) {
            this.N ? this.N.unobserve(a) : (a = this.W.indexOf(a), -1 != a && this.W.splice(a, 1))
        };
        g.Be = function(a) {
            var b = new a(this.Ua, this.Bc);
            this.N = b;
            a = p(this.W);
            for (var c = a.next(); !c.done; c = a.next()) b.observe(c.value);
            this.W.length = 0
        };
        ea.Object.defineProperties(Jc.prototype, {
            root: {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return this.N ? this.N.root : this.Bc.root || null
                }
            },
            rootMargin: {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return this.N ? this.N.rootMargin : this.Bc.rootMargin
                }
            },
            thresholds: {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return this.N ? this.N.thresholds : [].concat(this.Bc.threshold || 0)
                }
            }
        });
        Jc._upgraders = [];

        function Kc() {
            var a = Lc;
            !a.IntersectionObserverEntry || "isIntersecting" in a.IntersectionObserverEntry.prototype || Object.defineProperty(a.IntersectionObserverEntry.prototype, "isIntersecting", {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    return 0 < this.intersectionRatio
                }
            })
        };

        function Mc(a) {
            return (a = Number(a)) ? 0 < a ? 1 : -1 : a
        };
        var Nc = Object.prototype.hasOwnProperty;

        function Oc(a, b) {
            if (null == a) throw new TypeError("Cannot convert undefined or null to object");
            for (var c = Object(a), d = 1; d < arguments.length; d++) {
                var e = arguments[d];
                if (null != e)
                    for (var f in e) Nc.call(e, f) && (c[f] = e[f])
            }
            return c
        };

        function Pc(a) {
            return Object.keys(a).map(function(b) {
                return a[b]
            })
        };

        function Qc(a) {
            if (!(this instanceof Qc)) throw new TypeError("Constructor Promise requires `new`");
            if (!Rc(a)) throw new TypeError("Must pass resolver function");
            this._state = Sc;
            this._value = [];
            this._isChainEnd = !0;
            Tc(this, Uc(this, Vc), Uc(this, Wc), {
                then: a
            })
        }
        Qc.prototype.then = function(a, b) {
            a = Rc(a) ? a : void 0;
            b = Rc(b) ? b : void 0;
            if (a || b) this._isChainEnd = !1;
            return this._state(this._value, a, b)
        };
        Qc.prototype.catch = function(a) {
            return this.then(void 0, a)
        };

        function Xc(a) {
            return a === Object(a) && a instanceof this ? a : new this(function(b) {
                b(a)
            })
        }

        function Yc(a) {
            return new this(function(b, c) {
                c(a)
            })
        }

        function Zc(a) {
            var b = this;
            return new b(function(c, d) {
                var e = a.length,
                    f = Array(e);
                if (0 === e) return c(f);
                $c(a, function(h, l) {
                    b.resolve(h).then(function(k) {
                        f[l] = k;
                        0 === --e && c(f)
                    }, d)
                })
            })
        }

        function ad(a) {
            var b = this;
            return new b(function(c, d) {
                for (var e = 0; e < a.length; e++) b.resolve(a[e]).then(c, d)
            })
        }

        function Vc(a, b, c, d) {
            if (!b) return d && (b = d.promise, b._state = Vc, b._value = a), this;
            d || (d = new bd(this.constructor));
            cd(dd(d, b, a));
            return d.promise
        }

        function Wc(a, b, c, d) {
            if (!c) return d && (b = d.promise, b._state = Wc, b._value = a), this;
            d || (d = new bd(this.constructor));
            cd(dd(d, c, a));
            return d.promise
        }

        function Sc(a, b, c, d) {
            if (!d) {
                if (!b && !c) return this;
                d = new bd(this.constructor)
            }
            a.push({
                deferred: d,
                onFulfilled: b || d.resolve,
                onRejected: c || d.reject
            });
            return d.promise
        }

        function bd(a) {
            var b = this;
            this.promise = new a(function(c, d) {
                b.resolve = c;
                b.reject = d
            });
            return b
        }

        function ed(a, b, c, d) {
            var e = a._value;
            a._state = b;
            a._value = c;
            d && b === Sc && d._state(c, void 0, void 0, {
                promise: a,
                resolve: void 0,
                reject: void 0
            });
            for (var f = 0; f < e.length; f++) {
                var h = e[f];
                a._state(c, h.onFulfilled, h.onRejected, h.deferred)
            }
            e.length = 0;
            d && (d._isChainEnd = !1);
            b === Wc && a._isChainEnd && setTimeout(function() {
                if (a._isChainEnd) throw c;
            }, 0)
        }

        function Uc(a, b) {
            return function(c) {
                ed(a, b, c)
            }
        }

        function fd() {}

        function Rc(a) {
            return "function" === typeof a
        }

        function $c(a, b) {
            for (var c = 0; c < a.length; c++) b(a[c], c)
        }

        function dd(a, b, c) {
            var d = a.promise,
                e = a.resolve,
                f = a.reject;
            return function() {
                try {
                    var h = b(c);
                    Tc(d, e, f, h, h)
                } catch (l) {
                    f(l)
                }
            }
        }
        var cd = function() {
            function a() {
                for (var e = 0; e < d; e++) {
                    var f = c[e];
                    c[e] = null;
                    f()
                }
                d = 0
            }
            if ("undefined" !== typeof window && window.postMessage) {
                window.addEventListener("message", a);
                var b = function() {
                    window.postMessage("macro-task", "*")
                }
            } else b = function() {
                setTimeout(a, 0)
            };
            var c = Array(16),
                d = 0;
            return function(e) {
                0 === d && b();
                c[d++] = e
            }
        }();

        function Tc(a, b, c, d, e) {
            var f = c,
                h;
            try {
                if (d === a) throw new TypeError("Cannot fulfill promise with itself");
                var l = d === Object(d);
                if (l && d instanceof a.constructor) ed(a, d._state, d._value, d);
                else if (l && (h = d.then) && Rc(h)) {
                    var k = function(m) {
                        k = f = fd;
                        Tc(a, b, c, m, m)
                    };
                    f = function(m) {
                        k = f = fd;
                        c(m)
                    };
                    h.call(e, function(m) {
                        k(m)
                    }, function(m) {
                        f(m)
                    })
                } else b(d)
            } catch (m) {
                f(m)
            }
        };

        function gd(a) {
            this.Ua = a;
            this.W = [];
            this.N = null;
            gd._upgraders.push(this.Be.bind(this))
        }
        gd.prototype.disconnect = function() {
            this.N ? this.N.disconnect() : this.W.length = 0
        };
        gd.prototype.observe = function(a) {
            this.N ? this.N.observe(a) : -1 == this.W.indexOf(a) && this.W.push(a)
        };
        gd.prototype.unobserve = function(a) {
            this.N ? this.N.unobserve(a) : (a = this.W.indexOf(a), -1 != a && this.W.splice(a, 1))
        };
        gd.prototype.Be = function(a) {
            this.N = a = new a(this.Ua);
            for (var b = p(this.W), c = b.next(); !c.done; c = b.next()) a.observe(c.value);
            this.W.length = 0
        };
        gd._upgraders = [];

        function hd(a, b) {
            return this.substr(0 < b ? b | 0 : 0, a.length) === a
        };
        (function(a) {
            a.fetch || (Object.defineProperty(a, "fetch", {
                value: Mb,
                writable: !0,
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(a, "Response", {
                value: Sb,
                writable: !0,
                enumerable: !1,
                configurable: !0
            }))
        })(self);
        (function(a) {
            a.Math.sign || a.Object.defineProperty(a.Math, "sign", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: Mc
            })
        })(self);
        (function(a) {
            a.Object.assign || a.Object.defineProperty(a.Object, "assign", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: Oc
            })
        })(self);
        (function(a) {
            a.Object.values || a.Object.defineProperty(a.Object, "values", {
                configurable: !0,
                writable: !0,
                value: Pc
            })
        })(self);
        (function(a) {
            a.Promise || (a.Promise = Qc, Qc.default && (a.Promise = Qc.default), a.Promise.resolve = Xc, a.Promise.reject = Yc, a.Promise.all = Zc, a.Promise.race = ad)
        })(self);
        (function(a) {
            a.Array.prototype.includes || a.Object.defineProperty(a.Array.prototype, "includes", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: oa
            })
        })(self);
        (function(a) {
            var b = a.Map,
                c = new b;
            if (c.set(0, 0) !== c) {
                var d = c.set;
                a.Object.defineProperty(b.prototype, "set", {
                    enumerable: !1,
                    configurable: !0,
                    writable: !0,
                    value: function() {
                        d.apply(this, arguments);
                        return this
                    }
                })
            }
        })(self);
        (function(a) {
            var b = a.WeakMap,
                c = new b;
            if (c.set({}, 0) !== c) {
                var d = c.set;
                a.Object.defineProperty(b.prototype, "set", {
                    enumerable: !1,
                    configurable: !0,
                    writable: !0,
                    value: function() {
                        d.apply(this, arguments);
                        return this
                    }
                })
            }
        })(self);
        (function(a) {
            var b = a.Set,
                c = new b;
            if (c.add(0) !== c) {
                var d = c.add;
                a.Object.defineProperty(b.prototype, "add", {
                    enumerable: !1,
                    configurable: !0,
                    writable: !0,
                    value: function() {
                        d.apply(this, arguments);
                        return this
                    }
                })
            }
        })(self);
        (function(a) {
            a.String.prototype.startsWith || a.Object.defineProperty(a.String.prototype, "startsWith", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: hd
            })
        })(self);
        if (self.document) {
            Sa();
            var id = self,
                jd = id.HTMLDocument || id.Document;
            jd && !jd.prototype.contains && id.Object.defineProperty(jd.prototype, "contains", {
                enumerable: !1,
                configurable: !0,
                writable: !0,
                value: Ta
            });
            var Cc = self;
            Bc() && (zc = Element.prototype.getBoundingClientRect, Cc.Object.defineProperty(Cc.Element.prototype, "getBoundingClientRect", {
                value: Ac
            }));
            var kd = function() {},
                Oa = self,
                ld = Oa.document,
                md, nd = Oa.customElements;
            md = !!(nd && nd.define && nd.get && nd.whenDefined);
            var od;
            if (!(od = !ld)) {
                var pd;
                if (pd = md) pd = -1 === Oa.HTMLElement.toString().indexOf("[native code]");
                od = pd
            }
            if (!od) {
                var qd = !0,
                    rd = !1;
                if (kd && md) try {
                    var sd = Oa.Reflect,
                        td = Object.create(kd.prototype);
                    Function.call.call(kd, td);
                    rd = !(null == sd || !sd.construct)
                } catch (a) {
                    qd = !1
                }
                rd ? Qa() : qd && Ma()
            }
            var Lc = self;
            if (Fc(Lc)) {
                var Ic = Lc;
                if (Ic.IntersectionObserver) {
                    var ud = Ic.IntersectionObserver;
                    Ic.IntersectionObserver = Hc();
                    Ic.IntersectionObserver._stub = Jc;
                    Ic.IntersectionObserver._native = ud
                } else Ic.IntersectionObserver = Jc, Ic.IntersectionObserver._stub = Jc
            }
            Kc();
            var vd = self;
            vd.ResizeObserver && !vd.ResizeObserver._stub || vd.ResizeObserver ||
                (vd.ResizeObserver = gd, vd.ResizeObserver._stub = gd);
            var wd = self;
            wd.AbortController || (Object.defineProperty(wd, "AbortController", {
                configurable: !0,
                enumerable: !1,
                writable: !0,
                value: ma
            }), Object.defineProperty(wd, "AbortSignal", {
                configurable: !0,
                enumerable: !1,
                writable: !0,
                value: na
            }))
        };

        function M(a, b, c) {
            a = xd(a);
            yd(a, a, b, c)
        }

        function N(a, b, c, d) {
            var e = zd(a),
                f = Ad(e);
            yd(f, e, b, c);
            d && Bd(f, b)
        }

        function O(a, b) {
            a = xd(a);
            return Bd(a, b)
        }

        function P(a) {
            return Bd(a, "timer")
        }

        function Cd(a, b) {
            var c = zd(a);
            c = Ad(c);
            return Bd(c, b)
        }

        function Dd(a, b) {
            a = zd(a);
            a = Ad(a);
            return Ed(a, b) ? Bd(a, b) : null
        }

        function Fd(a, b) {
            return Gd(Ad(a), b)
        }

        function Hd(a, b) {
            return Id(Ad(a), b)
        }

        function xd(a) {
            return a.__AMP_TOP || (a.__AMP_TOP = a)
        }

        function Jd(a, b) {
            a = (a.ownerDocument || a).defaultView;
            var c = b || xd(a);
            if (a && a != c && xd(a) == c) try {
                return a.frameElement
            } catch (d) {}
            return null
        }

        function zd(a) {
            return a.nodeType ? O((a.ownerDocument || a).defaultView, "ampdoc").getAmpDoc(a) : a
        }

        function Ad(a) {
            a = zd(a);
            return a.isSingleDoc() ? a.win : a
        }

        function Bd(a, b) {
            Ed(a, b);
            a = Kd(a)[b];
            a.obj || (a.obj = new a.ctor(a.context), a.context = null, a.resolve && a.resolve(a.obj));
            return a.obj
        }

        function yd(a, b, c, d) {
            var e = Kd(a),
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
            f.ctor || (f.ctor = d, f.context = b, f.sharedInstance = !1, f.resolve && Bd(a, c))
        }

        function Gd(a, b) {
            var c = Id(a, b);
            if (c) return c;
            a = Kd(a);
            a[b] = Ld();
            return a[b].promise
        }

        function Id(a, b) {
            var c = Kd(a)[b];
            if (c) {
                if (c.promise) return c.promise;
                Bd(a, b);
                return c.promise = Promise.resolve(c.obj)
            }
            return null
        }

        function Kd(a) {
            var b = a.__AMP_SERVICES;
            b || (b = a.__AMP_SERVICES = {});
            return b
        }

        function Md(a) {
            a = Kd(a);
            var b = {},
                c;
            for (c in a) {
                b.eb = c;
                if (Object.prototype.hasOwnProperty.call(a, b.eb)) {
                    var d = a[b.eb];
                    d.sharedInstance || (d.obj ? Nd(b.eb, d.obj) : d.promise && d.promise.then(function(e) {
                        return function(f) {
                            return Nd(e.eb, f)
                        }
                    }(b)))
                }
                b = {
                    eb: b.eb
                }
            }
        }

        function Nd(a, b) {
            if ("function" == typeof b.dispose) try {
                b.dispose()
            } catch (c) {
                J().error("SERVICE", "failed to dispose service", a, c)
            }
        }

        function Ed(a, b) {
            a = a.__AMP_SERVICES && a.__AMP_SERVICES[b];
            return !(!a || !a.ctor)
        }

        function Ld() {
            var a = new x,
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
        var Od = ["amp-mustache"];

        function Pd(a) {
            if (!a) return null;
            var b = a.match(/^(.*)\/(.*)-([0-9.]+|latest)(\.max)?\.(?:js|mjs)$/i),
                c = b ? b[2] : void 0;
            b = b ? b[3] : void 0;
            return c && b ? {
                extensionId: c,
                extensionVersion: b
            } : null
        }

        function Qd(a, b, c) {
            var d = a.document.createElement("script");
            d.async = !0;
            b.startsWith("_") ? c = "" : d.setAttribute(0 <= Od.indexOf(b) ? "custom-template" : "custom-element", b);
            d.setAttribute("data-script", b);
            d.setAttribute("i-amphtml-inserted", "");
            D().esm && d.setAttribute("type", "module");
            var e = a.document.head.querySelector("script[nonce]");
            e && d.setAttribute("nonce", e.getAttribute("nonce"));
            d.setAttribute("crossorigin", "anonymous");
            a = c;
            c = D().esm ? ".mjs" : ".js";
            var f = ob.cdn;
            var h = D().rtvVersion;
            d.src = f + "/rtv/" + h +
                "/v0/" + b + (a ? "-" + a : "") + c;
            return d
        }

        function Rd(a, b, c, d, e) {
            e = void 0 === e ? !0 : e;
            a = a.document.head.querySelectorAll('script[src*="/' + b + '-"]:not([i-amphtml-loaded-new-version])' + (e ? "" : ":not([i-amphtml-inserted])"));
            for (var f = [], h = 0; h < a.length; h++) {
                var l = a[h],
                    k = Pd(l.src);
                if (k) {
                    var m = k,
                        n = m.extensionVersion;
                    m.extensionId == b && (b.startsWith("_") || n == c || "latest" == n && d) && f.push(l)
                }
            }
            return f
        }

        function Sd(a) {
            if (!a) return [];
            for (var b = a.querySelectorAll("script[custom-element],script[custom-template]"), c = [], d = 0; d < b.length; d++) {
                var e = b[d],
                    f = e.getAttribute("custom-element") || e.getAttribute("custom-template"),
                    h = Pd(e.src);
                f && h && c.push({
                    extensionId: f,
                    extensionVersion: h.extensionVersion
                })
            }
            return c
        };

        function Td(a, b, c) {
            return Ud(a, b, c, void 0).then(function(d) {
                return K(d, "Service %s was requested to be provided through %s, but %s is not loaded in the current page. To fix this problem load the JavaScript file for %s in this page.", b, c, c, c)
            })
        }

        function Ud(a, b, c, d) {
            var e = Hd(a, b);
            if (e) return e;
            var f = zd(a);
            return f.whenExtensionsKnown().then(function() {
                var h = f.getExtensionVersion(c);
                return h ? O(f.win, "extensions").waitForExtension(c, h) : null
            }).then(function(h) {
                return h ? d ? Hd(a, b) : Fd(a, b) : null
            })
        }

        function Vd(a) {
            var b = Dd(a, "bind");
            return b ? Promise.resolve(b) : Ud(a, "bind", "amp-bind")
        };

        function Wd(a) {
            return O(a, "ampdoc")
        }

        function Xd(a) {
            return Cd(a, "documentInfo").get()
        }

        function Yd(a) {
            return O(a, "extensions")
        }

        function Zd(a) {
            return Cd(a, "mutator")
        }

        function Q(a) {
            return O(a, "platform")
        }

        function $d(a) {
            return O(a, "preconnect")
        }

        function ae(a) {
            return Cd(a, "resources")
        }

        function R(a) {
            return Cd(a, "viewer")
        }

        function be(a) {
            return O(a, "vsync")
        }

        function de(a) {
            return Cd(a, "viewport")
        };
        var ee;

        function fe(a) {
            a = a.ownerDocument || a;
            ee && ee.ownerDocument === a || (ee = a.createElement("div"));
            return ge
        }

        function ge(a) {
            var b = ee;
            b.innerHTML = a[0];
            a = b.firstElementChild;
            b.removeChild(a);
            return a
        };

        function he() {
            this.tg = 100;
            this.gd = this.$ = 0;
            this.ib = z()
        }
        he.prototype.has = function(a) {
            return !!this.ib[a]
        };
        he.prototype.get = function(a) {
            var b = this.ib[a];
            if (b) return b.access = ++this.gd, b.payload
        };
        he.prototype.put = function(a, b) {
            this.has(a) || this.$++;
            this.ib[a] = {
                payload: b,
                access: this.gd
            };
            if (!(this.$ <= this.tg)) {
                a = this.ib;
                var c = this.gd + 1,
                    d;
                for (d in a) {
                    var e = a[d].access;
                    if (e < c) {
                        c = e;
                        var f = d
                    }
                }
                void 0 !== f && (delete a[f], this.$--)
            }
        };
        var ie = A({
                c: !0,
                v: !0,
                a: !0,
                ad: !0
            }),
            je, ke, le = /[?&]amp_js[^&]*/,
            me = /[?&]amp_gsa[^&]*/,
            ne = /[?&]amp_r[^&]*/,
            oe = /[?&]amp_kit[^&]*/,
            pe = /[?&]usqp[^&]*/,
            qe = ["javascript:", "data:", "vbscript:"];

        function S(a, b) {
            je || (je = self.document.createElement("a"), ke = self.__AMP_URL_CACHE || (self.__AMP_URL_CACHE = new he));
            return re(je, a, b ? null : ke)
        }

        function re(a, b, c) {
            if (c && c.has(b)) return c.get(b);
            a.href = b;
            a.protocol || (a.href = a.href);
            var d = {
                href: a.href,
                protocol: a.protocol,
                host: a.host,
                hostname: a.hostname,
                port: "0" == a.port ? "" : a.port,
                pathname: a.pathname,
                search: a.search,
                hash: a.hash,
                origin: null
            };
            "/" !== d.pathname[0] && (d.pathname = "/" + d.pathname);
            if ("http:" == d.protocol && 80 == d.port || "https:" == d.protocol && 443 == d.port) d.port = "", d.host = d.hostname;
            d.origin = a.origin && "null" != a.origin ? a.origin : "data:" != d.protocol && d.host ? d.protocol + "//" + d.host : d.href;
            c && c.put(b,
                d);
            return d
        }

        function se(a, b, c) {
            if (!b) return a;
            var d = a.split("#", 2),
                e = d[0].split("?", 2),
                f = e[0] + (e[1] ? c ? "?" + b + "&" + e[1] : "?" + e[1] + "&" + b : "?" + b);
            return f += d[1] ? "#" + d[1] : ""
        }

        function te(a, b) {
            return se(a, ue(b))
        }

        function ue(a) {
            var b = [],
                c;
            for (c in a) {
                var d = a[c];
                if (null != d)
                    if (B(d))
                        for (var e = 0; e < d.length; e++) {
                            var f = d[e];
                            b.push(encodeURIComponent(c) + "=" + encodeURIComponent(f))
                        } else b.push(encodeURIComponent(c) + "=" + encodeURIComponent(d))
            }
            return b.join("&")
        }

        function ve(a) {
            "string" == typeof a && (a = S(a));
            return "https:" == a.protocol || "localhost" == a.hostname || "127.0.0.1" == a.hostname || Za(a.hostname, ".localhost")
        }

        function we(a, b, c) {
            var d = c = void 0 === c ? "source" : c;
            K(null != a, "%s %s must be available", b, d);
            K(ve(a) || /^(\/\/)/.test(a), '%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s', b, d, a);
            return a
        }

        function xe(a) {
            var b = a.indexOf("#");
            return -1 == b ? a : a.substring(0, b)
        }

        function T(a) {
            "string" == typeof a && (a = S(a));
            return ob.cdnProxyRegex.test(a.origin)
        }

        function ye(a) {
            if (!a) return !0;
            "string" == typeof a && (a = S(a));
            return !qe.includes(a.protocol)
        }

        function ze(a) {
            var b = S(a);
            a = Ae(b.search);
            return b.origin + b.pathname + a + b.hash
        }

        function Ae(a) {
            if (!a || "?" == a) return "";
            var b = a.replace(le, "").replace(me, "").replace(ne, "").replace(oe, "").replace(pe, "").replace(/^[?&]/, "");
            return b ? "?" + b : ""
        }

        function Be(a) {
            "string" == typeof a && (a = S(a));
            if (!T(a)) return a.href;
            var b = a.pathname.split("/");
            K(ie[b[1]], "Unknown path prefix in url %s", a.href);
            var c = b[2],
                d = "s" == c ? "https://" + decodeURIComponent(b[3]) : "http://" + decodeURIComponent(c);
            K(0 < d.indexOf("."), "Expected a . in origin %s", d);
            b.splice(1, "s" == c ? 3 : 2);
            return d + b.join("/") + Ae(a.search) + (a.hash || "")
        }

        function Ce(a) {
            return S(Be(a)).origin
        }

        function De(a, b) {
            "string" == typeof b && (b = S(b));
            if ("function" == typeof URL) var c = (new URL(a, b.href)).toString();
            else {
                c = a;
                var d = b;
                "string" == typeof d && (d = S(d));
                c = c.replace(/\\/g, "/");
                var e = S(c);
                c = c.toLowerCase().startsWith(e.protocol) ? e.href : c.startsWith("//") ? d.protocol + c : c.startsWith("/") ? d.origin + c : d.origin + d.pathname.replace(/\/[^/]*$/, "/") + c
            }
            return c
        }

        function Ee(a, b) {
            Fe(b);
            var c = Ce(a.location.href);
            a = encodeURIComponent("__amp_source_origin") + "=" + encodeURIComponent(c);
            return se(b, a, void 0)
        }

        function Fe(a) {
            var b = S(a),
                c = C(b.search);
            K(!("__amp_source_origin" in c), "Source origin is not allowed in %s", a)
        };

        function Ge(a, b) {
            return !!He(a)[b]
        }

        function Ie(a, b, c, d) {
            var e = Ge(a, b),
                f = null != c ? c : !e;
            if (f != e && (He(a)[b] = f, !d)) {
                var h = Je(a);
                h[b] = f;
                var l = [],
                    k;
                for (k in h) l.push((!1 === h[k] ? "-" : "") + k);
                try {
                    var m;
                    null == (m = a.localStorage) || m.setItem("amp-experiment-toggles", l.join(","))
                } catch (n) {
                    H().error("EXPERIMENTS", "Failed to save experiments to localStorage.")
                }
                H().warn("EXPERIMENTS", '"%s" experiment %s for the domain "%s". See: https://amp.dev/documentation/guides-and-tutorials/learn/experimental', b, f ? "enabled" : "disabled", a.location.hostname)
            }
            return f
        }

        function He(a) {
            if (a.__AMP__EXPERIMENT_TOGGLES) return a.__AMP__EXPERIMENT_TOGGLES;
            a.__AMP__EXPERIMENT_TOGGLES = z();
            var b = a.__AMP__EXPERIMENT_TOGGLES;
            if (a.AMP_CONFIG)
                for (var c in a.AMP_CONFIG) {
                    var d = a.AMP_CONFIG[c];
                    "number" === typeof d && 0 <= d && 1 >= d && (b[c] = Math.random() < d)
                }
            var e, f = null == (e = a.AMP_CONFIG) ? void 0 : e["allow-doc-opt-in"];
            if (B(f) && f.length) {
                var h = a.document.head.querySelector('meta[name="amp-experiments-opt-in"]');
                if (h) {
                    var l = h.getAttribute("content").split(",");
                    e = p(l);
                    for (c = e.next(); !c.done; c =
                        e.next()) {
                        var k = c.value;
                        f.includes(k) && (b[k] = !0)
                    }
                }
            }
            Object.assign(b, Je(a));
            var m, n = null == (m = a.AMP_CONFIG) ? void 0 : m["allow-url-opt-in"];
            if (B(n) && n.length)
                for (a = C(a.location.originalHash || a.location.hash), m = p(n), c = m.next(); !c.done; c = m.next()) c = c.value, e = a["e-" + c], "1" == e && (b[c] = !0), "0" == e && (b[c] = !1);
            return b
        }

        function Je(a) {
            var b = "";
            try {
                "localStorage" in a && (b = a.localStorage.getItem("amp-experiment-toggles"))
            } catch (f) {
                J().warn("EXPERIMENTS", "Failed to retrieve experiments from localStorage.")
            }
            var c, d = (null == (c = b) ? void 0 : c.split(/\s*,\s*/g)) || [];
            a = z();
            c = p(d);
            for (var e = c.next(); !e.done; e = c.next())(e = e.value) && ("-" == e[0] ? a[e.substr(1)] = !1 : a[e] = !0);
            return a
        };
        var Ke, Le = "Webkit webkit Moz moz ms O o".split(" "),
            Me = {
                getPropertyPriority: function() {
                    return ""
                },
                getPropertyValue: function() {
                    return ""
                }
            };

        function Ne(a, b, c) {
            if (b.startsWith("--")) return b;
            Ke || (Ke = z());
            var d = Ke[b];
            if (!d || c) {
                d = b;
                if (void 0 === a[b]) {
                    var e = b.charAt(0).toUpperCase() + b.slice(1);
                    a: {
                        for (var f = 0; f < Le.length; f++) {
                            var h = Le[f] + e;
                            if (void 0 !== a[h]) {
                                e = h;
                                break a
                            }
                        }
                        e = ""
                    }
                    var l = e;
                    void 0 !== a[l] && (d = l)
                }
                c || (Ke[b] = d)
            }
            return d
        }

        function Oe(a, b) {
            a = a.style;
            for (var c in b) a.setProperty(Ne(a, c), String(b[c]), "important")
        }

        function V(a, b, c, d) {
            if (b = Ne(a.style, b, void 0)) {
                var e = d ? c + d : c;
                b.startsWith("--") ? a.style.setProperty(b, e) : a.style[b] = e
            }
        }

        function Pe(a, b) {
            for (var c in b) V(a, c, b[c])
        }

        function Qe(a, b) {
            void 0 === b && (b = a.hasAttribute("hidden"));
            b ? a.removeAttribute("hidden") : a.setAttribute("hidden", "")
        };

        function Re(a) {
            if (!a.hasAttribute("src") && 0 == "srcset" in a) {
                var b = a.getAttribute("srcset"),
                    c = /\S+/.exec(b);
                null != c && a.setAttribute("src", c[0])
            }
        }

        function Se(a, b, c) {
            var d = a.createElement("canvas");
            d.width = b;
            d.height = c;
            return d.toDataURL()
        };
        var Te = ['<i-amphtml-sizer class=i-amphtml-sizer slot=i-amphtml-svc><img alt="" role=presentation aria-hidden=true class=i-amphtml-intrinsic-sizer></i-amphtml-sizer>'],
            Ue = {
                NODISPLAY: "nodisplay",
                FIXED: "fixed",
                FIXED_HEIGHT: "fixed-height",
                RESPONSIVE: "responsive",
                CONTAINER: "container",
                FILL: "fill",
                FLEX_ITEM: "flex-item",
                FLUID: "fluid",
                INTRINSIC: "intrinsic"
            },
            Ve = {
                "AMP-PIXEL": {
                    width: "0px",
                    height: "0px"
                },
                "AMP-ANALYTICS": {
                    width: "1px",
                    height: "1px"
                },
                "AMP-AUDIO": null,
                "AMP-SOCIAL-SHARE": {
                    width: "60px",
                    height: "44px"
                }
            },
            We = {
                "AMP-AD": !0,
                "AMP-ANIM": !0,
                "AMP-EMBED": !0,
                "AMP-FACEBOOK": !0,
                "AMP-FACEBOOK-COMMENTS": !0,
                "AMP-FACEBOOK-PAGE": !0,
                "AMP-GOOGLE-DOCUMENT-EMBED": !0,
                "AMP-IFRAME": !0,
                "AMP-IMG": !0,
                "AMP-INSTAGRAM": !0,
                "AMP-LIST": !0,
                "AMP-PINTEREST": !0,
                "AMP-PLAYBUZZ": !0,
                "AMP-TWITTER": !0
            },
            Xe = /^amp\-(video|.+player)|AMP-BRIGHTCOVE|AMP-DAILYMOTION|AMP-YOUTUBE|AMP-VIMEO|AMP-IMA-VIDEO/i,
            Ye = null;

        function Ze(a) {
            for (var b in Ue)
                if (Ue[b] == a) return Ue[b]
        }

        function $e(a) {
            return "fixed" == a || "fixed-height" == a || "responsive" == a || "fill" == a || "flex-item" == a || "fluid" == a || "intrinsic" == a
        }

        function af(a) {
            if ("number" == typeof a) return a + "px";
            if (a && /^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax|cm|mm|q|in|pc|pt)?$/.test(a)) return /^\d+(\.\d+)?$/.test(a) ? a + "px" : a
        }

        function bf(a) {
            K(/^\d+(\.\d+)?(px|em|rem|vh|vw|vmin|vmax|cm|mm|q|in|pc|pt)$/.test(a), "Invalid length value: %s", a);
            return K(/[a-z]+/i.exec(a), "Failed to read units from %s", a)[0]
        }

        function cf(a) {
            a = parseFloat(a);
            return ac(a) ? a : void 0
        };
        var df;

        function ef(a, b, c, d) {
            var e = a,
                f = c;
            var h = function(m) {
                try {
                    return f(m)
                } catch (n) {
                    throw self.__AMP_REPORT_ERROR(n), n;
                }
            };
            var l = ff(),
                k = !1;
            d && (k = d.capture);
            e.addEventListener(b, h, l ? d : k);
            return function() {
                e && e.removeEventListener(b, h, l ? d : k);
                h = e = f = null
            }
        }

        function ff() {
            if (void 0 !== df) return df;
            df = !1;
            try {
                var a = {
                    get capture() {
                        df = !0
                    }
                };
                self.addEventListener("test-options", null, a);
                self.removeEventListener("test-options", null, a)
            } catch (b) {}
            return df
        };

        function gf(a, b, c, d) {
            return ef(a, b, c, d)
        }

        function hf(a, b, c, d) {
            var e = c,
                f = ef(a, b, function(h) {
                    try {
                        e(h)
                    } finally {
                        e = null, f()
                    }
                }, d);
            return f
        }

        function jf(a, b) {
            var c, d = new Promise(function(e) {
                c = hf(a, "click", e, void 0)
            });
            d.then(c, c);
            b && b(c);
            return d
        }

        function kf(a) {
            return !!(a.complete || "complete" == a.readyState || lf(a) && 0 < a.readyState || a.document && "complete" == a.document.readyState)
        }

        function mf(a) {
            var b, c;
            if (kf(a)) return Promise.resolve(a);
            var d = lf(a);
            return d && a.__AMP_MEDIA_LOAD_FAILURE_SRC === a.currentSrc ? Promise.reject(a) : (new Promise(function(e, f) {
                b = d ? hf(a, "loadedmetadata", e, {
                    capture: !0
                }) : hf(a, "load", e);
                if (a.tagName) {
                    var h = a;
                    if (d && !a.hasAttribute("src") && (h = oc(a, function(l) {
                            return "SOURCE" === l.tagName
                        }), !h)) return f(Error("Media has no source."));
                    c = hf(h, "error", f)
                }
            })).then(function() {
                c && c();
                return a
            }, function() {
                b && b();
                lf(a) && (a.__AMP_MEDIA_LOAD_FAILURE_SRC = a.currentSrc || !0);
                var e = a;
                e && e.src && (e = e.src);
                throw H().createError("Failed to load:", e);
            })
        }

        function lf(a) {
            return "AUDIO" === a.tagName || "VIDEO" === a.tagName
        };

        function W(a) {
            this.element = a;
            this.win = a.ownerDocument.defaultView;
            this.defaultActionAlias_ = this.actionMap_ = null
        }
        W.R1 = function() {
            return !1
        };
        W.deferredMount = function() {
            return !0
        };
        W.prerenderAllowed = function() {
            return !1
        };
        W.usesLoading = function() {
            return !1
        };
        W.createLoaderLogoCallback = function() {
            return {}
        };
        W.getBuildPriority = function() {
            return 0
        };
        W.getPreconnects = function() {
            return null
        };
        W.requiresShadowDom = function() {
            return !1
        };
        g = W.prototype;
        g.signals = function() {
            return this.element.signals()
        };
        g.getDefaultActionAlias = function() {
            return this.defaultActionAlias_
        };
        g.getLayoutPriority = function() {
            return 0
        };
        g.updateLayoutPriority = function(a) {
            this.element.getResources().updateLayoutPriority(this.element, a)
        };
        g.getLayout = function() {
            return this.element.getLayout()
        };
        g.getLayoutBox = function() {
            return this.element.getLayoutBox()
        };
        g.getLayoutSize = function() {
            return this.element.getLayoutSize()
        };
        g.getWin = function() {
            return this.win
        };
        g.getAmpDoc = function() {
            return this.element.getAmpDoc()
        };
        g.getVsync = function() {
            return be(this.win)
        };
        g.getConsentPolicy = function() {
            var a = null;
            this.element.hasAttribute("data-block-on-consent") && (a = this.element.getAttribute("data-block-on-consent") || "default");
            return a
        };
        g.isLayoutSupported = function(a) {
            return "nodisplay" == a
        };
        g.isAlwaysFixed = function() {
            return !1
        };
        g.upgradeCallback = function() {
            return null
        };
        g.buildCallback = function() {};
        g.preconnectCallback = function() {};
        g.attachedCallback = function() {};
        g.detachedCallback = function() {};
        g.setAsContainer = function(a) {
            this.element.setAsContainerInternal(a)
        };
        g.removeAsContainer = function() {
            this.element.removeAsContainerInternal()
        };
        g.isBuildRenderBlocking = function() {
            return !1
        };
        g.createPlaceholderCallback = function() {
            return null
        };
        g.renderOutsideViewport = function() {
            return "inabox" == D(this.win).runtime || 3
        };
        g.idleRenderOutsideViewport = function() {
            return !1
        };
        g.ensureLoaded = function() {};
        g.setReadyState = function(a, b) {
            this.element.setReadyStateInternal(a, b)
        };
        g.mountCallback = function() {};
        g.unmountCallback = function() {};
        g.isRelayoutNeeded = function() {
            return !1
        };
        g.layoutCallback = function() {
            return v()
        };
        g.firstLayoutCompleted = function() {
            this.togglePlaceholder(!1)
        };
        g.pauseCallback = function() {};
        g.resumeCallback = function() {};
        g.unlayoutCallback = function() {
            return !1
        };
        g.unlayoutOnPause = function() {
            return !1
        };
        g.reconstructWhenReparented = function() {
            return !0
        };
        g.loadPromise = function(a) {
            return mf(a)
        };
        g.registerAction = function(a, b, c) {
            var d = c = void 0 === c ? 2 : c;
            nf(this);
            this.actionMap_[a] = {
                handler: b,
                minTrust: d
            }
        };
        g.registerDefaultAction = function(a, b, c) {
            var d = void 0 === b ? "activate" : b;
            this.registerAction(d, a, void 0 === c ? 2 : c);
            this.defaultActionAlias_ = d
        };
        g.executeAction = function(a) {
            var b = a.method;
            "activate" === b && (b = this.defaultActionAlias_ || b);
            nf(this);
            var c = this.actionMap_[b];
            K(c, "Method not found: " + b + " in " + this.element.tagName);
            b = c.handler;
            if (a.satisfiesTrust(c.minTrust)) return b(a)
        };
        g.propagateAttributes = function(a, b, c) {
            a = B(a) ? a : [a];
            for (var d = 0; d < a.length; d++) {
                var e = a[d],
                    f = this.element.getAttribute(e);
                null !== f ? b.setAttribute(e, f) : c && b.removeAttribute(e)
            }
        };
        g.forwardEvents = function(a, b) {
            var c = this,
                d = (B(a) ? a : [a]).map(function(e) {
                    return gf(b, e, function(f) {
                        yc(c.element, e, f.data || {})
                    })
                });
            return function() {
                return d.forEach(function(e) {
                    return e()
                })
            }
        };
        g.getPlaceholder = function() {
            return this.element.getPlaceholder()
        };
        g.togglePlaceholder = function(a) {
            this.element.togglePlaceholder(a)
        };
        g.getFallback = function() {
            return this.element.getFallback()
        };
        g.toggleFallback = function(a) {
            this.element.toggleFallback(a)
        };
        g.toggleLoading = function(a, b) {
            this.element.toggleLoading(a, void 0 === b ? !1 : b)
        };
        g.getOverflowElement = function() {
            return this.element.getOverflowElement()
        };
        g.renderStarted = function() {
            this.element.renderStarted()
        };
        g.getRealChildNodes = function() {
            return this.element.getRealChildNodes()
        };
        g.getRealChildren = function() {
            return this.element.getRealChildren()
        };
        g.applyFillContent = function(a, b) {
            a.classList.add("i-amphtml-fill-content");
            b && a.classList.add("i-amphtml-replaced-content")
        };
        g.getViewport = function() {
            return de(this.getAmpDoc())
        };
        g.getIntersectionElementLayoutBox = function() {
            return this.getLayoutBox()
        };
        g.collapse = function() {
            Zd(this.getAmpDoc()).collapseElement(this.element)
        };
        g.attemptCollapse = function() {
            return Zd(this.getAmpDoc()).attemptCollapse(this.element)
        };
        g.forceChangeHeight = function(a) {
            Zd(this.getAmpDoc()).forceChangeSize(this.element, a, void 0)
        };
        g.attemptChangeHeight = function(a) {
            return Zd(this.getAmpDoc()).requestChangeSize(this.element, a, void 0)
        };
        g.attemptChangeSize = function(a, b, c) {
            return Zd(this.getAmpDoc()).requestChangeSize(this.element, a, b, void 0, c)
        };
        g.measureElement = function(a) {
            return Zd(this.getAmpDoc()).measureElement(a)
        };
        g.mutateElement = function(a, b) {
            return this.measureMutateElement(null, a, b)
        };
        g.measureMutateElement = function(a, b, c) {
            return Zd(this.getAmpDoc()).measureMutateElement(c || this.element, a, b)
        };
        g.mutateElementSkipRemeasure = function(a) {
            return Zd(this.getAmpDoc()).mutateElement(this.element, a, !0)
        };
        g.collapsedCallback = function() {};
        g.expand = function() {
            Zd(this.getAmpDoc()).expandElement(this.element)
        };
        g.mutatedAttributesCallback = function() {};
        g.onLayoutMeasure = function() {};
        g.user = function() {
            return H(this.element)
        };
        g.getApi = function() {
            return this
        };

        function nf(a) {
            a.actionMap_ || (a.actionMap_ = a.win.Object.create(null))
        };
        var of = {
            PRERENDER: "prerender",
            VISIBLE: "visible",
            HIDDEN: "hidden",
            PAUSED: "paused",
            INACTIVE: "inactive"
        };
        /*

         Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
         Use of this source code is governed by a BSD-style
         license that can be found in the LICENSE file or at
         https://developers.google.com/open-source/licenses/bsd */
        var pf = {
            "amp-dynamic-css-classes": "[custom-element=amp-dynamic-css-classes]",
            variant: "amp-experiment",
            "amp-story-render": "amp-story[standalone]"
        };

        function qf(a) {
            var b = rf(a).map(function(c) {
                var d = Gd(a, c).then(function(e) {
                    return e && "function" == typeof e.whenReady ? e.whenReady().then(function() {
                        return e
                    }) : e
                });
                return P(a).timeoutPromise(3E3, d, "Render timeout waiting for service " + c + " to be ready.")
            });
            return Promise.all(b)
        }

        function rf(a) {
            var b = a.document;
            return Object.keys(pf).filter(function(c) {
                return b.querySelector(pf[c])
            })
        };

        function sf(a, b, c, d, e) {
            var f = a.getHeadNode(),
                h = tf(f, uf(f, b), d || !1, e || null);
            if (c) {
                var l = a.getRootNode();
                if (vf(l, h)) c(h);
                else var k = setInterval(function() {
                    vf(l, h) && (clearInterval(k), c(h))
                }, 4)
            }
        }

        function tf(a, b, c, d) {
            var e = a.__AMP_CSS_SM;
            e || (e = a.__AMP_CSS_SM = z());
            var f = !c && d && "amp-custom" != d && "amp-keyframes" != d,
                h = c ? "amp-runtime" : f ? "amp-extension=" + d : null;
            if (h) {
                var l = wf(a, e, h);
                if (l) return l.textContent !== b && (l.textContent = b), l
            }
            var k = (a.ownerDocument || a).createElement("style");
            k.textContent = b;
            var m = null;
            c ? k.setAttribute("amp-runtime", "") : f ? (k.setAttribute("amp-extension", d || ""), m = wf(a, e, "amp-runtime")) : (d && k.setAttribute(d, ""), m = a.lastChild);
            b = m;
            (b = void 0 === b ? null : b) ? a.insertBefore(k, b.nextSibling):
                a.insertBefore(k, a.firstChild);
            h && (e[h] = k);
            return k
        }

        function wf(a, b, c) {
            return b[c] ? b[c] : (a = a.querySelector("style[" + c + "]")) ? b[c] = a : null
        }

        function uf(a, b) {
            return (a = a.__AMP_CSS_TR) ? a(b) : b
        }
        var xf = !1;

        function yf() {
            var a = self.document,
                b = a.defaultView;
            fc(a).then(function() {
                return qf(b)
            }).catch(function(c) {
                za(c);
                return []
            }).then(function(c) {
                xf = !0;
                a.body.getBoundingClientRect();
                zf(a);
                zd(a).signals().signal("render-start");
                0 < c.length && ae(a.documentElement).schedulePass(1, !0);
                try {
                    var d = O(b, "performance");
                    d.tick("mbv");
                    d.flush()
                } catch (e) {}
            })
        }

        function Af(a) {
            xf || (xf = !0, zf(a))
        }

        function zf(a) {
            Pe(a.body, {
                opacity: 1,
                visibility: "visible",
                animation: "none"
            })
        }

        function vf(a, b) {
            var c = a.styleSheets;
            for (a = 0; a < c.length; a++)
                if (c[a].ownerNode == b) return !0;
            return !1
        };

        function Bf(a, b) {
            var c = b.documentElement;
            return a.some(function(d) {
                return c.hasAttribute(d)
            })
        };

        function Cf() {
            var a = Df();
            return function(b) {
                return setTimeout(b, a())
            }
        }

        function Df() {
            var a = 0;
            return function() {
                var b = Math.pow(1.5, a++);
                var c = b * (c || .3) * Math.random();
                .5 < Math.random() && (c *= -1);
                b += c;
                return 1E3 * b
            }
        };

        function Ef(a, b) {
            var c = !1;
            b = void 0 === b ? {} : b;
            c = void 0 === c ? !0 : c;
            var d = b,
                e = c;
            Ud(a, "amp-analytics-instrumentation", "amp-analytics").then(function(f) {
                f && f.triggerEventForTarget(a, "user-error", d, e)
            })
        };
        var Ff = self.__AMP_ERRORS || [];
        self.__AMP_ERRORS = Ff;

        function Gf(a) {
            Gf = Cf();
            return Gf(a)
        }

        function Hf(a) {
            try {
                return JSON.stringify(a)
            } catch (b) {
                return String(a)
            }
        }

        function If(a, b) {
            try {
                if (a)
                    if (void 0 !== a.message) a = xa(a);
                    else {
                        var c = a;
                        a = Error(Hf(c));
                        a.origError = c
                    }
                else a = Error("Unknown error");
                if (a.reported) return a;
                a.reported = !0;
                if (a.messageArray) {
                    var d, e = Xa(a.messageArray, function(l) {
                        return null == (d = l) ? void 0 : d.tagName
                    }); - 1 < e && (a.associatedElement = a.messageArray[e])
                }
                var f = b || a.associatedElement;
                f && f.classList && (f.classList.add("i-amphtml-error"), D().development && (f.classList.add("i-amphtml-element-error"), f.setAttribute("error-message", a.message)));
                if (self.console &&
                    (sb(a.message) || !a.expected)) {
                    var h = console.error || console.log;
                    a.messageArray ? h.apply(console, a.messageArray) : f ? h.call(console, a.message, f) : h.call(console, a.message)
                }
                f && f.ra && f.ra("amp:error", a.message);
                Jf.call(self, void 0, void 0, void 0, void 0, a)
            } catch (l) {
                setTimeout(function() {
                    throw l;
                })
            }
            return a
        }

        function Kf() {
            return Error("CANCELLED")
        }

        function Lf(a) {
            return a ? "string" == typeof a ? a.startsWith("BLOCK_BY_CONSENT") : "string" == typeof a.message ? a.message.startsWith("BLOCK_BY_CONSENT") : !1 : !1
        }

        function Mf() {
            var a = self;
            a.onerror = Jf;
            a.addEventListener("unhandledrejection", function(b) {
                !b.reason || "CANCELLED" !== b.reason.message && "BLOCK_BY_CONSENT" !== b.reason.message && "AbortError" !== b.reason.message ? If(b.reason || Error("rejected promise " + b)) : b.preventDefault()
            })
        }

        function Jf(a, b, c, d, e) {
            var f = this;
            !this || !this.document || e && e.expected || Af(this.document);
            if (!D().development) {
                var h = !1;
                try {
                    h = Nf()
                } catch (k) {}
                if (!(h && .01 < Math.random())) {
                    var l = Of(a, b, c, d, e, h);
                    l && Gf(function() {
                        try {
                            return Pf(f, l).catch(function() {})
                        } catch (k) {}
                    })
                }
            }
        }

        function Pf(a, b) {
            return b.pt && .9 > Math.random() ? v() : Qf(a, b).then(function(c) {
                if (!c) {
                    var d = new XMLHttpRequest;
                    d.open("POST", .1 > Math.random() ? ob.betaErrorReporting : ob.errorReporting, !0);
                    d.send(JSON.stringify(b))
                }
            })
        }

        function Qf(a, b) {
            a = Wd(a);
            if (!a.isSingleDoc()) return Promise.resolve(!1);
            var c = a.getSingleDoc();
            if (!c.getRootNode().documentElement.hasAttribute("report-errors-to-viewer")) return Promise.resolve(!1);
            var d = R(c);
            return d.hasCapability("errorReporter") ? d.isTrustedViewer().then(function(e) {
                if (!e) return !1;
                d.sendMessage("error", A({
                    m: b.m,
                    a: b.a,
                    s: b.s,
                    el: b.el,
                    ex: b.ex,
                    v: b.v,
                    pt: b.pt
                }));
                return !0
            }) : Promise.resolve(!1)
        }

        function Of(a, b, c, d, e, f) {
            var h = a;
            e && (h = e.message ? e.message : String(e));
            h || (h = "Unknown error");
            a = h;
            var l = !(!e || !e.expected);
            if (!/_reported_/.test(a) && "CANCELLED" != a) {
                var k = !(self && self.window),
                    m = Math.random();
                if (-1 != a.indexOf("Failed to load:") || "Script error." == a || k)
                    if (l = !0, .001 < m) return;
                var n = sb(a);
                if (!(n && .1 < m)) {
                    h = Object.create(null);
                    h.v = D().rtvVersion;
                    h.noAmp = f ? "1" : "0";
                    h.m = a.replace("\u200b\u200b\u200b", "");
                    h.a = n ? "1" : "0";
                    h.ex = l ? "1" : "0";
                    h.dw = k ? "1" : "0";
                    var q = "1p";
                    self.context && self.context.location ?
                        (h["3p"] = "1", q = "3p") : D().runtime && (q = D().runtime);
                    h.rt = q;
                    "inabox" === q && (h.adid = D().a4aId);
                    var t;
                    f = !(null == (t = self.AMP_CONFIG) || !t.canary);
                    h.ca = f ? "1" : "0";
                    var w;
                    t = (null == (w = self.AMP_CONFIG) ? void 0 : w.type) || "unknown";
                    h.bt = t;
                    self.location.ancestorOrigins && self.location.ancestorOrigins[0] && (h.or = self.location.ancestorOrigins[0]);
                    self.viewerState && (h.vs = self.viewerState);
                    self.parent && self.parent != self && (h.iem = "1");
                    if (self.AMP && self.AMP.viewer) {
                        var u = self.AMP.viewer.getResolvedViewerUrl(),
                            r = self.AMP.viewer.maybeGetMessagingOrigin();
                        u && (h.rvu = u);
                        r && (h.mso = r)
                    }
                    var G = [];
                    w = self.__AMP__EXPERIMENT_TOGGLES || null;
                    for (var y in w) G.push(y + "=" + (w[y] ? "1" : "0"));
                    h.exps = G.join(",");
                    if (e) {
                        var X;
                        h.el = (null == (X = e.associatedElement) ? void 0 : X.tagName) || "u";
                        e.args && (h.args = JSON.stringify(e.args));
                        n || e.ignoreStack || !e.stack || (h.s = e.stack);
                        e.message && (e.message += " _reported_")
                    } else h.f = b || "", h.l = c || "", h.c = d || "";
                    h.r = self.document ? self.document.referrer : "";
                    h.ae = Ff.join(",");
                    h.fr = self.location.originalHash || self.location.hash;
                    "production" === h.bt && (h.pt =
                        "1");
                    b = a;
                    25 <= Ff.length && Ff.splice(0, Ff.length - 25 + 1);
                    Ff.push(b);
                    return h
                }
            }
        }

        function Nf() {
            var a = self;
            if (!a.document) return !1;
            a = a.document.querySelectorAll("script[src]");
            for (var b = 0; b < a.length; b++)
                if (!T(a[b].src.toLowerCase())) return !0;
            return !1
        };
        var Rf = "__AMP_ACTION_MAP__" + Math.random(),
            Sf = {
                form: ["submit", "clear"]
            },
            Tf = [{
                tagOrTarget: "AMP",
                method: "setState"
            }, {
                tagOrTarget: "*",
                method: "focus"
            }, {
                tagOrTarget: "*",
                method: "hide"
            }, {
                tagOrTarget: "*",
                method: "show"
            }, {
                tagOrTarget: "*",
                method: "toggleClass"
            }, {
                tagOrTarget: "*",
                method: "toggleVisibility"
            }],
            Uf = {
                button: !0,
                checkbox: !0,
                link: !0,
                listbox: !0,
                menuitem: !0,
                menuitemcheckbox: !0,
                menuitemradio: !0,
                option: !0,
                radio: !0,
                scrollbar: !0,
                slider: !0,
                spinbutton: !0,
                "switch": !0,
                tab: !0,
                treeitem: !0
            };

        function Vf(a, b, c, d, e, f, h, l, k, m) {
            l = void 0 === l ? "?" : l;
            k = void 0 === k ? null : k;
            m = void 0 === m ? Math.random() : m;
            var n = l,
                q = k,
                t = m;
            this.node = a;
            this.method = b;
            this.args = c;
            this.source = d;
            this.caller = e;
            this.event = f;
            this.trust = h;
            this.actionEventType = n;
            this.tagOrTarget = q || a.tagName;
            this.sequenceId = t
        }
        Vf.prototype.satisfiesTrust = function(a) {
            if (!ac(this.trust)) return J().error("Action", "Invalid trust for '" + this.method + "': " + this.trust), !1;
            if (this.trust < a) {
                a: switch (this.trust) {
                    case 1:
                        var b = "low";
                        break a;
                    case 3:
                        b = "high";
                        break a;
                    default:
                        b = "default"
                }
                H().error("Action", '"' + this.actionEventType + '" event with "' + b + '" trust is not allowed to invoke "' + (this.tagOrTarget.toLowerCase() + "." + this.method + '".'));
                return !1
            }
            return !0
        };

        function Wf(a, b) {
            this.ampdoc = a;
            this.X = b || a.getRootNode();
            this.ia = (this.zf = this.ampdoc.isSingleDoc() && Bf(["\u26a14email", "amp4email"], this.X)) ? Tf : null;
            this.Hd = z();
            this.sf = z();
            this.addEvent("tap");
            this.addEvent("submit");
            this.addEvent("change");
            this.addEvent("input-debounced");
            this.addEvent("input-throttled");
            this.addEvent("valid");
            this.addEvent("invalid")
        }
        g = Wf.prototype;
        g.addEvent = function(a) {
            var b = this;
            if ("tap" == a) this.X.addEventListener("click", function(e) {
                e.defaultPrevented || b.trigger(e.target, a, e, 3)
            }), this.X.addEventListener("keydown", function(e) {
                var f = e.key,
                    h = e.target;
                if ("Enter" == f || " " == f) {
                    var l = h.getAttribute("role");
                    if (f = l) f = l.toLowerCase(), f = ta.call(Uf, f);
                    var k = f;
                    !e.defaultPrevented && k && b.trigger(h, a, e, 3) && e.preventDefault()
                }
            });
            else if ("submit" == a) this.X.addEventListener(a, function(e) {
                b.trigger(e.target, a, e, 3)
            });
            else if ("change" == a) this.X.addEventListener(a,
                function(e) {
                    var f = e.target;
                    Xf(e);
                    b.trigger(f, a, e, 3)
                });
            else if ("input-debounced" == a) {
                var c = kb(this.ampdoc.win, function(e) {
                    b.trigger(e.target, a, e, 3)
                });
                this.X.addEventListener("input", function(e) {
                    var f = new Yf(e);
                    Xf(f);
                    c(f)
                })
            } else if ("input-throttled" == a) {
                var d = jb(this.ampdoc.win, function(e) {
                    b.trigger(e.target, a, e, 3)
                }, 100);
                this.X.addEventListener("input", function(e) {
                    e = new Yf(e);
                    Xf(e);
                    d(e)
                })
            } else "valid" != a && "invalid" != a || this.X.addEventListener(a, function(e) {
                b.trigger(e.target, a, e, 3)
            })
        };
        g.addGlobalTarget = function(a, b) {
            this.Hd[a] = b
        };
        g.addGlobalMethodHandler = function(a, b, c) {
            this.sf[a] = {
                handler: b,
                minTrust: void 0 === c ? 2 : c
            }
        };
        g.trigger = function(a, b, c, d, e) {
            return Zf(this, a, b, c, d, e)
        };
        g.execute = function(a, b, c, d, e, f, h) {
            a = new Vf(a, b, c, d, e, f, h);
            $f(this, a)
        };
        g.installActionHandler = function(a, b) {
            "amp-" === (a.getAttribute("id") || "").substring(0, 4) || a.tagName.toLowerCase();
            if (a.__AMP_ACTION_HANDLER__) J().error("Action", "Action handler already installed for " + a);
            else {
                a.__AMP_ACTION_HANDLER__ = b;
                var c = a.__AMP_ACTION_QUEUE__;
                B(c) && P(a.ownerDocument.defaultView).delay(function() {
                    c.forEach(function(d) {
                        try {
                            b(d)
                        } catch (e) {
                            J().error("Action", "Action execution failed:", d, e)
                        }
                    });
                    a.__AMP_ACTION_QUEUE__.length = 0
                }, 1)
            }
        };
        g.hasAction = function(a, b, c) {
            return !!ag(a, b, c)
        };
        g.hasResolvableAction = function(a, b, c) {
            var d = this,
                e = ag(a, b, c);
            return e ? e.actionInfos.some(function(f) {
                return !!bg(d, f.target)
            }) : !1
        };
        g.hasResolvableActionForTarget = function(a, b, c, d) {
            var e = this;
            return (a = ag(a, b, d)) ? a.actionInfos.some(function(f) {
                return bg(e, f.target) == c
            }) : !1
        };

        function bg(a, b) {
            return a.Hd[b] ? a.X : a.X.getElementById(b)
        }
        g.setAllowlist = function(a) {
            a.every(function(b) {
                return b.tagOrTarget && b.method
            });
            this.ia = a
        };
        g.addToAllowlist = function(a, b, c) {
            var d = this;
            c && c.includes("email") !== this.zf || (this.ia || (this.ia = []), B(b) || (b = [b]), b.forEach(function(e) {
                d.ia.some(function(f) {
                    return f.tagOrTarget == a && f.method == e
                }) || d.ia.push({
                    tagOrTarget: a,
                    method: e
                })
            }))
        };

        function Zf(a, b, c, d, e, f) {
            var h = ag(b, c);
            if (!h) return !1;
            var l = Math.random(),
                k = null;
            h.actionInfos.forEach(function(m) {
                function n() {
                    var r = bg(a, q);
                    if (r) return r = new Vf(r, t, u, b, h.node, d, e, c, r.tagName || q, l), $f(a, r);
                    a.Va('Target "' + q + '" not found for action [' + w + "].")
                }
                var q = m.target,
                    t = m.method,
                    w = m.str,
                    u = cg(m.args, d, f);
                k = k ? k.then(n) : n()
            });
            return 1 <= h.actionInfos.length
        }
        g.Va = function(a, b) {
            if (b) throw a = H().createError("[Action] " + a), If(a, b), a;
            H().error("Action", a)
        };

        function $f(a, b) {
            var c = b.method,
                d = b.tagOrTarget;
            if (a.ia && !dg(b, a.ia)) return a.Va('"' + d + "." + c + '" is not allowlisted ' + JSON.stringify(a.ia) + "."), null;
            var e = a.Hd[d];
            if (e) return e(b);
            var f = b.node,
                h = a.sf[c];
            if (h && b.satisfiesTrust(h.minTrust)) return h.handler(b);
            var l = f.tagName.toLowerCase();
            if ("amp-" === l.substring(0, 4)) return f.enqueAction ? f.enqueAction(b) : a.Va('Unrecognized AMP element "' + l + '".', f), null;
            var k = Sf[l];
            if ("amp-" === (f.getAttribute("id") || "").substring(0, 4) || k && -1 < k.indexOf(c)) return (a = f.__AMP_ACTION_HANDLER__) ?
                a(b) : (f.__AMP_ACTION_QUEUE__ = f.__AMP_ACTION_QUEUE__ || [], f.__AMP_ACTION_QUEUE__.push(b)), null;
            a.Va("Target (" + d + ") doesn't support \"" + c + '" action.', b.caller);
            return null
        }

        function ag(a, b, c) {
            for (; a && (!c || a != c);) {
                var d = b;
                var e = a;
                var f = d,
                    h = e[Rf];
                void 0 === h && (h = null, e.hasAttribute("on") ? (f = e.getAttribute("on"), h = eg(f, e), e[Rf] = h) : e.hasAttribute("execute") && (h = e.getAttribute("execute"), h = eg(f + ":" + h, e), e[Rf] = h));
                var l = (e = h) ? e[d] || null : null;
                if (l && !a.disabled && !mc(a, ":disabled")) return {
                    node: a,
                    actionInfos: l
                };
                a = a.parentElement
            }
            return null
        }
        g.setActions = function(a, b) {
            a.setAttribute("on", b);
            delete a[Rf]
        };

        function Xf(a) {
            var b = z(),
                c = a.target;
            void 0 !== c.value && (b.value = c.value);
            "INPUT" == c.tagName && (b.valueAsNumber = Number(c.value));
            void 0 !== c.checked && (b.checked = c.checked);
            if (void 0 !== c.min || void 0 !== c.max) b.min = c.min, b.max = c.max;
            c.files && (b.files = Va(c.files).map(function(d) {
                return {
                    name: d.name,
                    size: d.size,
                    type: d.type
                }
            }));
            if (0 < Object.keys(b).length) try {
                a.detail = b
            } catch (d) {}
        }

        function dg(a, b) {
            var c = a.method,
                d = a.node;
            a = a.tagOrTarget;
            "activate" === c && "function" == typeof d.getDefaultActionAlias && (c = d.getDefaultActionAlias());
            var e = c.toLowerCase(),
                f = a.toLowerCase();
            return b.some(function(h) {
                return h.tagOrTarget.toLowerCase() !== f && "*" !== h.tagOrTarget || h.method.toLowerCase() !== e ? !1 : !0
            })
        }

        function Yf(a) {
            this.detail = null;
            var b = this || z(),
                c;
            for (c in a) b[c] = "function" === typeof a[c] ? fg : a[c]
        }

        function fg() {}

        function eg(a, b) {
            var c = gg.bind(null, a, b),
                d = hg.bind(null, a, b);
            b = null;
            var e = new ig(a);
            do {
                var f = e.next();
                if (f.type != jg && (f.type != kg || ";" != f.value))
                    if (f.type == lg || f.type == mg) {
                        var h = f.value;
                        d(e.next(), [kg], ":");
                        var l = [];
                        do {
                            var k = d(e.next(), [lg, mg]).value,
                                m = "activate",
                                n = null;
                            var q = e.peek();
                            if (q.type == kg && "." == q.value && (e.next(), m = d(e.next(), [lg, mg]).value || m, q = e.peek(), q.type == kg && "(" == q.value)) {
                                e.next();
                                n = e;
                                var t = d,
                                    w = c,
                                    u = n.peek(),
                                    r = null;
                                if (u.type == ng) {
                                    r = z();
                                    var G = n.next().value;
                                    r.__AMP_OBJECT_STRING__ =
                                        G;
                                    t(n.next(), [kg], ")")
                                } else {
                                    do {
                                        var y = G = n.next();
                                        u = y.type;
                                        y = y.value;
                                        if (u != kg || "," != y && ")" != y)
                                            if (u == lg || u == mg) {
                                                t(n.next(), [kg], "=");
                                                G = t(n.next(!0), [lg, mg]);
                                                var X = [G];
                                                if (G.type == mg)
                                                    for (u = n.peek(); u.type == kg && "." == u.value; u = n.peek()) n.next(), G = t(n.next(!1), [mg]), X.push(G);
                                                u = og(X);
                                                r || (r = z());
                                                r[y] = u;
                                                u = n.peek();
                                                w(u.type == kg && ("," == u.value || ")" == u.value), "Expected either [,] or [)]")
                                            } else w(!1, "; unexpected token [" + (G.value || "") + "]")
                                    } while (G.type != kg || ")" != G.value)
                                }
                                n = r
                            }
                            l.push({
                                event: h,
                                target: k,
                                method: m,
                                args: n,
                                str: a
                            });
                            q = e.peek()
                        } while (q.type == kg && "," == q.value && e.next());
                        b || (b = z());
                        b[h] = l
                    } else c(!1, "; unexpected token [" + (f.value || "") + "]")
            } while (f.type != jg);
            return b
        }

        function og(a) {
            return 0 == a.length ? null : 1 == a.length ? a[0].value : {
                expression: a.map(function(b) {
                    return b.value
                }).join(".")
            }
        }

        function cg(a, b, c) {
            if (!a) return a;
            var d = c || A({});
            b && (b = b.detail) && (d.event = b);
            var e = z();
            Object.keys(a).forEach(function(f) {
                var h = a[f];
                if ("object" == typeof h && h.expression) {
                    h = h.expression;
                    if ("." == h) h = d;
                    else {
                        var l = h.split(".");
                        h = d;
                        l = p(l);
                        for (var k = l.next(); !k.done; k = l.next())
                            if ((k = k.value) && h && void 0 !== h[k] && "object" == typeof h && ta.call(h, k)) h = h[k];
                            else {
                                h = void 0;
                                break
                            }
                    }
                    var m = h;
                    h = void 0 === m ? null : m
                }
                e[f] = d[h] ? d[h] : h
            });
            return e
        }

        function gg(a, b, c, d) {
            return K(c, "Invalid action definition in %s: [%s] %s", b, a, d || "")
        }

        function hg(a, b, c, d, e) {
            void 0 !== e ? gg(a, b, d.includes(c.type) && c.value == e, "; expected [" + e + "]") : gg(a, b, d.includes(c.type));
            return c
        }
        var jg = 1,
            kg = 2,
            lg = 3,
            mg = 4,
            ng = 5;

        function ig(a) {
            this.P = a;
            this.Ld = -1
        }
        ig.prototype.next = function(a) {
            var b = pg(this, a || !1);
            this.Ld = b.index;
            return b
        };
        ig.prototype.peek = function(a) {
            return pg(this, a || !1)
        };

        function pg(a, b) {
            var c = a.Ld + 1;
            if (c >= a.P.length) return {
                type: jg,
                index: a.Ld
            };
            var d = a.P.charAt(c);
            if (-1 != " \t\n\r\f\v\u00a0\u2028\u2029".indexOf(d)) {
                for (c++; c < a.P.length && -1 != " \t\n\r\f\v\u00a0\u2028\u2029".indexOf(a.P.charAt(c)); c++);
                if (c >= a.P.length) return {
                    type: jg,
                    index: c
                };
                d = a.P.charAt(c)
            }
            if (b && (qg(d) || "." == d && c + 1 < a.P.length && qg(a.P[c + 1]))) {
                for (var e = "." == d, f = c + 1; f < a.P.length; f++) {
                    var h = a.P.charAt(f);
                    if ("." == h) e = !0;
                    else if (!qg(h)) break
                }
                a = a.P.substring(c, f);
                a = e ? parseFloat(a) : parseInt(a, 10);
                c = f - 1;
                return {
                    type: lg,
                    value: a,
                    index: c
                }
            }
            if (-1 != ";:.()=,|!".indexOf(d)) return {
                type: kg,
                value: d,
                index: c
            };
            if (-1 != "\"'".indexOf(d)) {
                f = -1;
                for (var l = c + 1; l < a.P.length; l++)
                    if (a.P.charAt(l) == d) {
                        f = l;
                        break
                    }
                if (-1 == f) return {
                    type: 0,
                    index: c
                };
                a = a.P.substring(c + 1, f);
                c = f;
                return {
                    type: lg,
                    value: a,
                    index: c
                }
            }
            if ("{" == d) {
                var k = 1;
                f = -1;
                for (d = c + 1; d < a.P.length; d++) {
                    var m = a.P[d];
                    "{" == m ? k++ : "}" == m && k--;
                    if (0 >= k) {
                        f = d;
                        break
                    }
                }
                if (-1 == f) return {
                    type: 0,
                    index: c
                };
                a = a.P.substring(c, f + 1);
                c = f;
                return {
                    type: ng,
                    value: a,
                    index: c
                }
            }
            for (f = c + 1; f < a.P.length && -1 == " \t\n\r\f\x0B\u00a0\u2028\u2029;:.()=,|!\"'{}".indexOf(a.P.charAt(f)); f++);
            a = a.P.substring(c, f);
            c = f - 1;
            return !b || "true" != a && "false" != a ? qg(a.charAt(0)) ? {
                type: lg,
                value: a,
                index: c
            } : {
                type: mg,
                value: a,
                index: c
            } : {
                type: lg,
                value: "true" == a,
                index: c
            }
        }

        function qg(a) {
            return "0" <= a && "9" >= a
        };

        function rg(a) {
            return !!a && "function" == typeof a.getFormData
        };
        var sg = ["GET", "POST"],
            tg = [B, ua];

        function ug(a, b) {
            var c = Object.assign({}, b);
            if (rg(b.body)) {
                var d = b.body;
                c.headers["Content-Type"] = "multipart/form-data;charset=utf-8";
                b = d.entries();
                for (var e = [], f = b.next(); !f.done; f = b.next()) e.push(f.value);
                c.body = e
            }
            return {
                input: a,
                init: c
            }
        }

        function vg(a, b) {
            Fb(ua(a), a);
            if ("document" != b) return new Response(a.body, a.init);
            var c = z(),
                d = {
                    status: 200,
                    statusText: "OK",
                    getResponseHeader: function(f) {
                        return c[String(f).toLowerCase()] || null
                    }
                };
            if (a.init) {
                var e = a.init;
                B(e.headers) && e.headers.forEach(function(f) {
                    var h = f[1];
                    c[String(f[0]).toLowerCase()] = String(h)
                });
                e.status && (d.status = parseInt(e.status, 10));
                e.statusText && (d.statusText = String(e.statusText))
            }
            return new Response(a.body ? String(a.body) : "", d)
        }

        function wg(a, b, c, d) {
            if (!b) return v();
            var e = d.prerenderSafe ? v() : b.whenFirstVisible(),
                f = R(b),
                h = T(c),
                l = f.hasCapability("xhrInterceptor"),
                k = d.bypassInterceptorForDev && !1;
            return h || !l || k || !b.getRootNode().documentElement.hasAttribute("allow-xhr-interception") ? e : e.then(function() {
                return f.isTrustedViewer()
            }).then(function(m) {
                if (m || Ge(a, "untrusted-xhr-interception")) {
                    var n = A({
                        originalRequest: ug(c, d)
                    });
                    return f.sendMessageAwaitResponse("xhr", n).then(function(q) {
                        return vg(q, d.responseType)
                    })
                }
            })
        }

        function xg(a, b, c) {
            !1 !== c.ampCors && (b = Ee(a, b));
            return b
        }

        function yg(a, b) {
            a = a || {};
            var c = a.method;
            void 0 === c ? c = "GET" : (c = c.toUpperCase(), sg.includes(c));
            a.method = c;
            a.headers = a.headers || A({});
            b && (a.headers.Accept = b);
            return a
        }

        function zg(a, b, c) {
            c = c || {};
            var d = a.origin || S(a.location.href).origin;
            a = S(b).origin;
            d == a && (c.headers = c.headers || {}, c.headers["AMP-Same-Origin"] = "true");
            return c
        }

        function Ag(a) {
            var b = yg(a, "application/json");
            "POST" != b.method || rg(b.body) || (Eb(tg.some(function(c) {
                return c(b.body)
            })), b.headers["Content-Type"] = b.headers["Content-Type"] || "text/plain;charset=utf-8", b.body = "application/x-www-form-urlencoded" === b.headers["Content-Type"] ? ue(b.body) : JSON.stringify(b.body));
            return b
        }

        function Bg(a) {
            return new Promise(function(b) {
                if (a.ok) return b(a);
                b = a.status;
                var c = H().createError("HTTP error " + b);
                c.retriable = 415 == b || 500 <= b && 600 > b;
                c.response = a;
                throw c;
            })
        };

        function Cg(a) {
            this.win = a;
            a = Wd(a);
            this.lg = a.isSingleDoc() ? a.getSingleDoc() : null
        }
        g = Cg.prototype;
        g.Cg = function(a, b) {
            var c = arguments,
                d = this;
            return wg(this.win, this.lg, a, b).then(function(e) {
                if (e) return e;
                rg(b.body) && (b.body = b.body.getFormData());
                return d.win.fetch.apply(null, c)
            })
        };

        function Dg(a, b, c) {
            c = void 0 === c ? {} : c;
            b = xg(a.win, b, c);
            c = zg(a.win, b, c);
            return a.Cg(b, c).then(function(d) {
                return d
            }, function(d) {
                var e = S(b).origin;
                throw H().createExpectedError("XHR", "Failed fetching (" + e + "/...):", d && d.message);
            })
        }
        g.fetchJson = function(a, b) {
            return this.fetch(a, Ag(b))
        };
        g.fetchText = function(a, b) {
            return this.fetch(a, yg(b, "text/plain"))
        };
        g.xssiJson = function(a, b) {
            return b ? a.text().then(function(c) {
                return c.startsWith(b) ? Gb(c.slice(b.length)) : (H().warn("XHR", 'Failed to strip missing prefix "' + b + '" in fetch response.'), Gb(c))
            }) : a.json()
        };
        g.fetch = function(a, b) {
            b = yg(b);
            return Dg(this, a, b).then(function(c) {
                return Bg(c)
            })
        };
        g.sendSignal = function(a, b) {
            return Dg(this, a, b).then(function(c) {
                return Bg(c)
            })
        };
        g.getCorsUrl = function(a, b) {
            return Ee(a, b)
        };

        function Eg(a) {
            Cg.call(this, a);
            this.Mb = z()
        }
        la(Eg, Cg);
        Eg.prototype.fetch = function(a, b) {
            var c = this,
                d = !b || !b.method || "GET" === b.method,
                e = Fg(this, a, b && b.headers && b.headers.Accept || ""),
                f = !!this.Mb[e];
            if (d && f) return this.Mb[e].then(function(l) {
                return l.clone()
            });
            var h = Cg.prototype.fetch.call(this, a, b);
            d && (this.Mb[e] = h.then(function(l) {
                delete c.Mb[e];
                return l.clone()
            }, function(l) {
                delete c.Mb[e];
                throw l;
            }));
            return h
        };

        function Fg(a, b, c) {
            var d = De(b, Ce(a.win.location));
            return xe(d) + c
        };

        function Gg(a) {
            this.B = a;
            this.h = R(this.B);
            this.oe = null;
            this.S = P(this.B.win)
        }
        Gg.prototype.isSupported = function() {
            return this.h.isCctEmbedded() && this.h.isProxyOrigin()
        };
        Gg.prototype.getScopedCid = function(a) {
            var b = this;
            if (!this.h.isCctEmbedded()) return Promise.resolve(null);
            this.oe || (this.oe = this.Lb("https://ampcid.google.com/v1/cache:getClientId?key=AIzaSyDKtqGxnoeIqVM33Uf7hRSa3GJxuzR7mLc"));
            return this.oe.then(function(c) {
                return c ? Hg(b, c, a) : null
            })
        };
        Gg.prototype.Lb = function(a, b) {
            var c = this,
                d = b = void 0 === b ? !0 : b,
                e = A({
                    publisherOrigin: Ce(this.B.win.location)
                });
            return this.S.timeoutPromise(3E4, O(this.B.win, "xhr").fetchJson(a, {
                method: "POST",
                ampCors: !1,
                credentials: "include",
                mode: "cors",
                body: e
            }), "fetchCidTimeout").then(function(f) {
                return f.json().then(function(h) {
                    if (h.optOut) return null;
                    var l = h.publisherClientId;
                    return !l && d && h.alternateUrl ? c.Lb(h.alternateUrl + "?key=AIzaSyDKtqGxnoeIqVM33Uf7hRSa3GJxuzR7mLc", !1) : l
                })
            }).catch(function(f) {
                f && f.response ? f.response.json().then(function(h) {
                    J().error("CacheCidApi",
                        JSON.stringify(h))
                }) : f && "fetchCidTimeout" == f.message ? J().expectedError("CacheCidApi", f) : J().error("CacheCidApi", f);
                return null
            })
        };

        function Hg(a, b, c) {
            b = b + ";" + c;
            return O(a.B.win, "crypto").sha384Base64(b).then(function(d) {
                return "amp-" + d
            })
        };

        function Ig(a, b) {
            try {
                var c = a.document.cookie
            } catch (l) {
                c = ""
            }
            var d = c;
            if (!d) return null;
            var e = d.split(";");
            for (a = 0; a < e.length; a++) {
                var f = e[a].trim(),
                    h = f.indexOf("=");
                if (c = -1 != h) c = f.substring(0, h).trim(), c = fb(c, void 0) == b;
                if (c) return b = f.substring(h + 1).trim(), fb(b, b)
            }
            return null
        }

        function Jg(a, b, c, d) {
            var e = {
                    highestAvailableDomain: !0
                },
                f = e = void 0 === e ? {} : e;
            if (f.allowOnProxyOrigin) K(!f.highestAvailableDomain, "Could not support highestAvailable Domain on proxy origin, specify domain explicitly");
            else {
                K(!T(a.location.href), "Should never attempt to set cookie on proxy origin: " + b);
                e = S(a.location.href).hostname.toLowerCase();
                var h = S(ob.cdn).hostname.toLowerCase();
                K(!(e == h || Za(e, "." + h)), "Should never attempt to set cookie on proxy origin. (in depth check): " + b)
            }
            e = void 0;
            if (f.domain) e =
                f.domain;
            else if (f.highestAvailableDomain) a: if (e = a.document.head && a.document.head.querySelector("meta[name='amp-cookie-scope']")) e = e.getAttribute("content") || "", h = Ce(a.location.href), e = Za(h, "." + e) ? e : h.split("://")[1];
                else {
                    if (!T(a.location.href)) {
                        e = a.location.hostname.split(".");
                        h = e[e.length - 1];
                        var l;
                        for (l = "-test-amp-cookie-tmp"; Ig(a, l);) l = "-test-amp-cookie-tmp0";
                        for (var k = e.length - 2; 0 <= k; k--)
                            if (h = e[k] + "." + h, Kg(a, l, "delete", Date.now() + 1E3, h), "delete" == Ig(a, l)) {
                                Kg(a, l, "delete", Date.now() - 1E3, h);
                                e = h;
                                break a
                            }
                    }
                    e = null
                }
            Kg(a, b, c, d, e, f.sameSite, f.secure)
        }

        function Kg(a, b, c, d, e, f, h) {
            "ampproject.org" == e && (c = "delete", d = 0);
            b = encodeURIComponent(b) + "=" + encodeURIComponent(c) + "; path=/" + (e ? "; domain=" + e : "") + "; expires=" + (new Date(d)).toUTCString() + (f ? "; SameSite=" + f : "") + (h ? "; Secure" : "");
            try {
                a.document.cookie = b
            } catch (l) {}
        };

        function Lg(a) {
            this.G = a.win;
            this.S = P(this.G);
            this.wd = {};
            var b = Xd(a).canonicalUrl;
            this.vd = b ? S(b).origin : null
        }
        Lg.prototype.getScopedCid = function(a, b) {
            var c = this;
            if (this.wd[b]) return this.wd[b];
            var d;
            return this.wd[b] = this.S.poll(200, function() {
                d = Ig(c.G, "AMP_TOKEN");
                return "$RETRIEVING" !== d
            }).then(function() {
                if ("$OPT_OUT" === d) return "$OPT_OUT";
                if (("$NOT_FOUND" !== d || !T(c.G.document.referrer)) && d && "$" === d[0]) return null;
                d && (!d || "$" !== d[0]) || Mg(c, "$RETRIEVING", 3E4);
                return c.Lb("https://ampcid.google.com/v1/publisher:getClientId?key=" + a, b, d).then(function(e) {
                    var f = c.uf(e);
                    return !f && e.alternateUrl ? c.Lb(e.alternateUrl +
                        "?key=" + a, b, d).then(c.uf.bind(c)) : f
                }).catch(function(e) {
                    Mg(c, "$ERROR", 3E4);
                    e && e.response ? e.response.json().then(function(f) {
                        J().error("GoogleCidApi", JSON.stringify(f))
                    }) : J().error("GoogleCidApi", e);
                    return null
                })
            })
        };
        Lg.prototype.Lb = function(a, b, c) {
            b = A({
                originScope: b,
                canonicalOrigin: this.vd
            });
            c && (b.securityToken = c);
            return this.S.timeoutPromise(3E4, O(this.G, "xhr").fetchJson(a, {
                method: "POST",
                ampCors: !1,
                credentials: "include",
                mode: "cors",
                body: b
            }).then(function(d) {
                return d.json()
            }))
        };
        Lg.prototype.uf = function(a) {
            if (a.optOut) return Mg(this, "$OPT_OUT", 31536E6), "$OPT_OUT";
            if (a.clientId) return Mg(this, a.securityToken, 31536E6), a.clientId;
            if (a.alternateUrl) return null;
            Mg(this, "$NOT_FOUND", 36E5);
            return null
        };

        function Mg(a, b, c) {
            if (b) {
                var d = a.G;
                a = a.G.Date.now() + c;
                Jg(d, "AMP_TOKEN", b, a)
            }
        };

        function Ng(a) {
            this.B = a;
            this.h = R(this.B);
            this.vd = (a = Xd(this.B).canonicalUrl) ? S(a).origin : null
        }
        Ng.prototype.isSupported = function() {
            return this.h.hasCapability("cid") ? this.h.isTrustedViewer() : Promise.resolve(!1)
        };
        Ng.prototype.getScopedCid = function(a, b) {
            b = A({
                scope: b,
                clientIdApi: !!a,
                canonicalOrigin: this.vd
            });
            a && (b.apiKey = a);
            return this.h.sendMessageAwaitResponse("cid", b)
        };
        var Og = {
            "+": "-",
            "/": "_",
            "=": "."
        };

        function Pg(a) {
            a = Jb(a);
            return btoa(a).replace(/[+/=]/g, function(b) {
                return Og[b]
            })
        };
        var Qg = /^[a-zA-Z0-9-_.]+$/,
            Rg = {
                googleanalytics: "AMP_ECID_GOOGLE"
            },
            Sg = {
                googleanalytics: "AIzaSyA65lEHUEizIsNtlbNo-l2K18dT680nsaM"
            };

        function Tg(a) {
            this.ampdoc = a;
            this.ld = null;
            this.Ed = Object.create(null);
            this.Ye = new Gg(a);
            this.ig = new Ng(a);
            this.ug = new Lg(a);
            this.kd = null;
            this.isBackupCidExpOn = Ge(this.ampdoc.win, "amp-cid-backup")
        }
        Tg.prototype.get = function(a, b, c) {
            var d = this;
            K(Qg.test(a.scope) && Qg.test(a.cookieName), "The CID scope and cookie name must only use the characters [a-zA-Z0-9-_.]+\nInstead found: %s", a.scope);
            return b.then(function() {
                return d.ampdoc.whenFirstVisible()
            }).then(function() {
                return Ug(d.ampdoc)
            }).then(function(e) {
                if (e) return "";
                var f = Vg(d, a, c || b);
                return P(d.ampdoc.win).timeoutPromise(1E4, f, 'Getting cid for "' + a.scope + '" timed out').catch(function(h) {
                    za(h)
                })
            })
        };
        Tg.prototype.optOut = function() {
            return Wg(this.ampdoc)
        };

        function Vg(a, b, c) {
            var d = b.scope,
                e = S(a.ampdoc.win.location.href);
            if (!T(e)) {
                var f = Xg(a, d);
                return f ? a.ug.getScopedCid(f, d).then(function(h) {
                    return "$OPT_OUT" == h ? null : h ? (Yg(a.ampdoc.win, b.cookieName || d, h), h) : Zg(a, b, c)
                }) : Zg(a, b, c)
            }
            return a.ig.isSupported().then(function(h) {
                if (h) {
                    var l = Xg(a, d);
                    return a.ig.getScopedCid(l, d)
                }
                return a.Ye.isSupported() && Xg(a, d) ? a.Ye.getScopedCid(d).then(function(k) {
                    return k ? k : $g(a, c, d, e)
                }) : $g(a, c, d, e)
            })
        }

        function $g(a, b, c, d) {
            return ah(a, b).then(function(e) {
                var f = O(a.ampdoc.win, "crypto"),
                    h = f.sha384Base64;
                K(T(d), "Expected proxy origin %s", d.origin);
                var l = Ce(d);
                return h.call(f, e + l + c)
            })
        }

        function Xg(a, b) {
            a.kd || (a.kd = bh(a));
            return a.kd[b]
        }

        function bh(a) {
            var b = {},
                c = a.ampdoc.getMetaByName("amp-google-client-id-api");
            c && c.split(",").forEach(function(d) {
                d = d.trim();
                if (0 < d.indexOf("=")) {
                    var e = d.split("=");
                    d = e[0].trim();
                    b[d] = e[1].trim()
                } else {
                    var f = d;
                    (d = Rg[f]) ? b[d] = Sg[f]: H().warn("CID", "Unsupported client for Google CID API: " + f + '.Please remove or correct meta[name="amp-google-client-id-api"]')
                }
            });
            return b
        }

        function Wg(a) {
            R(a).sendMessage("cidOptOut", {});
            return Fd(a, "storage").then(function(b) {
                return b.set("amp-cid-optout", !0)
            })
        }

        function Ug(a) {
            return Fd(a, "storage").then(function(b) {
                return b.get("amp-cid-optout").then(function(c) {
                    return !!c
                })
            }).catch(function() {
                return !1
            })
        }

        function Yg(a, b, c) {
            var d = Date.now() + 31536E6;
            Jg(a, b, c, d)
        }

        function ch(a, b, c) {
            Fd(a, "storage").then(function(d) {
                d.isViewerStorage() || d.setNonBoolean("amp-cid:" + b, c)
            })
        }

        function dh(a, b) {
            var c = a.ampdoc,
                d = a.isBackupCidExpOn,
                e = b.disableBackup;
            a = b.scope;
            var f = b.cookieName || a,
                h = Ig(c.win, f);
            return h ? Promise.resolve(h) : d && !e ? Fd(c, "storage").then(function(l) {
                return l.get("amp-cid:" + f, 31536E6)
            }).then(function(l) {
                return l && "string" == typeof l ? l : null
            }) : Promise.resolve(null)
        }

        function Zg(a, b, c) {
            var d = a.isBackupCidExpOn,
                e = a.ampdoc,
                f = e.win,
                h = b.scope,
                l = b.disableBackup,
                k = b.cookieName || h;
            return dh(a, b).then(function(m) {
                if (!m && !b.createCookieIfNotPresent) return Promise.resolve(null);
                if (m) return /^amp-/.test(m) && (Yg(f, k, m), d && !l && ch(e, k, m)), Promise.resolve(m);
                if (a.Ed[h]) return a.Ed[h];
                var n = eh(f).then(function(q) {
                    return "amp-" + q
                });
                Promise.all([n, c]).then(function(q) {
                    var t = q[0];
                    Ig(f, k) || (Yg(f, k, t), d && !l && ch(e, k, t))
                });
                return a.Ed[h] = n
            })
        }

        function ah(a, b) {
            if (a.ld) return a.ld;
            var c = a.ampdoc.win;
            return a.ld = fh(a.ampdoc).then(function(d) {
                var e = !1;
                if (d && !gh(d)) {
                    var f = Promise.resolve(d.cid);
                    hh(d) && (e = !0)
                } else f = O(c, "crypto").sha384Base64(ih(c)), e = !0;
                e && f.then(function(h) {
                    jh(a.ampdoc, b, h)
                });
                return f
            })
        }

        function jh(a, b, c) {
            var d = a.win;
            xc(d) ? kh(a, lh(c)) : b.then(function() {
                try {
                    d.localStorage.setItem("amp-cid", lh(c))
                } catch (e) {}
            })
        }

        function kh(a, b) {
            var c = R(a);
            return c.isTrustedViewer().then(function(d) {
                if (d) return J().expectedError("CID", "Viewer does not provide cap=cid"), c.sendMessageAwaitResponse("cid", b).then(function(e) {
                    var f;
                    if (f = e) {
                        try {
                            var h = Gb(e)
                        } catch (l) {
                            h = null
                        }
                        f = !h
                    }
                    return f ? (J().expectedError("CID", "invalid cid format"), JSON.stringify(A({
                        time: Date.now(),
                        cid: e
                    }))) : e
                })
            })
        }

        function lh(a) {
            return JSON.stringify(A({
                time: Date.now(),
                cid: a
            }))
        }

        function fh(a) {
            var b = a.win;
            try {
                var c = b.localStorage.getItem("amp-cid")
            } catch (e) {}
            var d = Promise.resolve(c);
            !c && xc(b) && (d = kh(a));
            return d.then(function(e) {
                if (!e) return null;
                e = Gb(e);
                return {
                    time: e.time,
                    cid: e.cid
                }
            })
        }

        function gh(a) {
            var b = a.time,
                c = Date.now();
            return b + 31536E6 < c
        }

        function hh(a) {
            a = a.time;
            var b = Date.now();
            return a + 864E5 < b
        }

        function ih(a) {
            var b;
            if ((b = (b = a.crypto) || a.msCrypto) && b.getRandomValues) {
                var c = new Uint8Array(16);
                b.getRandomValues(c);
                b = c
            } else b = null;
            return b ? b : String(a.location.href + Date.now() + a.Math.random() + a.screen.width + a.screen.height)
        }

        function eh(a) {
            var b = ih(a);
            return "string" == typeof b ? O(a, "crypto").sha384Base64(b) : qa(function() {
                return Pg(b).replace(/\.+$/, "")
            })
        };

        function mh(a) {
            this.G = a;
            var b = null,
                c = !1;
            a.crypto && (a.crypto.subtle ? b = a.crypto.subtle : a.crypto.webkitSubtle && (b = a.crypto.webkitSubtle, c = !0));
            this.pkcsAlgo = {
                name: "RSASSA-PKCS1-v1_5",
                hash: {
                    name: "SHA-256"
                }
            };
            this.subtle = b;
            this.Ug = c;
            this.Yb = null
        }
        g = mh.prototype;
        g.sha384 = function(a) {
            var b = this;
            "string" === typeof a && (a = Ib(a));
            if (!this.subtle || this.Yb) return (this.Yb || nh(this)).then(function(c) {
                return c(a)
            });
            try {
                return this.subtle.digest({
                    name: "SHA-384"
                }, a).then(function(c) {
                    return new Uint8Array(c)
                }, function(c) {
                    c.message && 0 > c.message.indexOf("secure origin") && H().error("Crypto", "SubtleCrypto failed, fallback to closure lib.", c);
                    return nh(b).then(function() {
                        return b.sha384(a)
                    })
                })
            } catch (c) {
                return J().error("Crypto", "SubtleCrypto failed, fallback to closure lib.",
                    c), nh(this).then(function() {
                    return b.sha384(a)
                })
            }
        };
        g.sha384Base64 = function(a) {
            return this.sha384(a).then(function(b) {
                return Pg(b)
            })
        };
        g.uniform = function(a) {
            return this.sha384(a).then(function(b) {
                for (var c = 0, d = 2; 0 <= d; d--) c = (c + b[d]) / 256;
                return c
            })
        };

        function nh(a) {
            return a.Yb ? a.Yb : a.Yb = Yd(a.G).preloadExtension("amp-crypto-polyfill").then(function() {
                return O(a.G, "crypto-polyfill")
            })
        }
        g.isPkcsAvailable = function() {
            return !!this.subtle && !1 !== this.G.isSecureContext
        };
        g.importPkcsKey = function(a) {
            this.isPkcsAvailable();
            var b = this.Ug ? Hb(JSON.stringify(a)) : a;
            return this.subtle.importKey("jwk", b, this.pkcsAlgo, !0, ["verify"])
        };
        g.verifyPkcs = function(a, b, c) {
            this.isPkcsAvailable();
            return this.subtle.verify(this.pkcsAlgo, a, b, c)
        };
        var oh = ["prefetch", "preload", "preconnect", "dns-prefetch"];

        function ph(a) {
            this.B = a;
            this.ke = this.Md = null
        }
        ph.prototype.get = function() {
            if (this.Md) return this.Md;
            var a = this.B,
                b = a.getUrl(),
                c = Be(b),
                d = a.getRootNode();
            b = d && d.AMP && d.AMP.canonicalUrl;
            if (!b) {
                var e = d.querySelector("link[rel=canonical]");
                b = e ? S(e.href).href : c
            }
            var f = String(Math.floor(1E4 * a.win.Math.random())),
                h = qh(a.win.document);
            d = rh(a.win.document);
            var l = sh(a);
            return this.Md = {
                get sourceUrl() {
                    return Be(a.getUrl())
                },
                canonicalUrl: b,
                pageViewId: f,
                get pageViewId64() {
                    this.ke || (this.ke = eh(a.win));
                    return this.ke
                },
                linkRels: h,
                viewport: d,
                replaceParams: l
            }
        };

        function qh(a) {
            var b = z();
            if (a.head) {
                a = a.head.querySelectorAll("link[rel]");
                for (var c = {}, d = 0; d < a.length; c = {
                        Ab: c.Ab
                    }, d++) {
                    var e = a[d];
                    c.Ab = e.href;
                    var f = e.getAttribute("rel");
                    f && c.Ab && f.split(/\s+/).forEach(function(h) {
                        return function(l) {
                            if (-1 == oh.indexOf(l)) {
                                var k = b[l];
                                k ? (B(k) || (k = b[l] = [k]), k.push(h.Ab)) : b[l] = h.Ab
                            }
                        }
                    }(c))
                }
            }
            return b
        }

        function rh(a) {
            var b = a.head.querySelector('meta[name="viewport"]');
            return b ? b.getAttribute("content") : null
        }

        function sh(a) {
            var b;
            (b = !a.isSingleDoc()) || (b = a.win.location.href, "string" == typeof b && (b = S(b)), b = "a" != (T(b) ? b.pathname.split("/", 2)[1] : null));
            if (b) return null;
            a = S(a.win.location.href);
            var c = C(a.search).amp_r;
            return void 0 === c ? null : C(c)
        };
        var th = null,
            uh = ["gclid", "gclsrc"],
            vh = [/^t.co$/];

        function wh() {
            return K(th, "E#19457 trackImpressionPromise")
        }

        function xh() {
            var a = self,
                b = new x,
                c = b.promise,
                d = b.resolve;
            th = P(a).timeoutPromise(8E3, c, "TrackImpressionPromise timeout").catch(function(h) {
                J().warn("IMPRESSION", h)
            });
            b = R(a.document.documentElement);
            var e = b.isTrustedViewer(),
                f = b.getReferrerUrl().then(function(h) {
                    return yh(h)
                });
            Promise.all([e, f]).then(function(h) {
                var l = h[1];
                if (h[0] || l || Ge(a, "alp")) {
                    var k = zh(a),
                        m = Ah(a);
                    Promise.all([k, m]).then(function() {
                        d()
                    }, function() {})
                } else d()
            })
        }

        function zh(a) {
            var b = R(a.document.documentElement);
            return b.getParam("replaceUrl") ? b.hasCapability("replaceUrl") ? b.sendMessageAwaitResponse("getReplaceUrl", void 0).then(function(c) {
                c && "object" == typeof c ? b.replaceUrl(c.replaceUrl || null) : J().warn("IMPRESSION", "get invalid replaceUrl response")
            }, function(c) {
                J().warn("IMPRESSION", "Error request replaceUrl from viewer", c)
            }) : (b.replaceUrl(b.getParam("replaceUrl") || null), v()) : v()
        }

        function yh(a) {
            var b = S(a);
            return "https:" != b.protocol ? !1 : vh.some(function(c) {
                return c.test(b.hostname)
            })
        }

        function Ah(a) {
            var b = zd(a.document.documentElement),
                c = R(b).getParam("click");
            if (!c) return v();
            if (0 != c.indexOf("https://")) return H().warn("IMPRESSION", "click fragment param should start with https://. Found ", c), v();
            a.location.hash && (a.location.hash = "");
            return b.whenFirstVisible().then(function() {
                return Bh(a, c)
            }).then(function(d) {
                if (d) {
                    var e = d.location;
                    (d = d.tracking_url || e) && !T(d) && ((new Image).src = d);
                    if (e && a.history.replaceState) {
                        d = R(a.document.documentElement);
                        var f = a.location.href;
                        e = S(e);
                        e = C(e.search);
                        e = te(f, e);
                        a.history.replaceState(null, "", e);
                        d.maybeUpdateFragmentForCct()
                    }
                }
            }).catch(function(d) {
                H().warn("IMPRESSION", "Error on request clickUrl: ", d)
            })
        }

        function Bh(a, b) {
            return O(a, "xhr").fetchJson(b, {
                credentials: "include"
            }).then(function(c) {
                return 204 == c.status ? null : c.json()
            })
        }

        function Ch(a) {
            return a.whenReady().then(function() {
                return !!a.getBody().querySelector("amp-analytics[type=googleanalytics]")
            })
        };

        function Dh() {
            this.L = []
        }
        Dh.prototype.peek = function() {
            var a = this.length;
            return a ? this.L[a - 1].item : null
        };
        Dh.prototype.enqueue = function(a, b) {
            if (isNaN(b)) throw Error("Priority must not be NaN.");
            for (var c = -1, d = 0, e = this.length; d <= e;) {
                c = Math.floor((d + e) / 2);
                if (c === this.length) break;
                if (this.L[c].priority < b) d = c + 1;
                else if (0 < c && this.L[c - 1].priority >= b) e = c - 1;
                else break
            }
            this.L.splice(c, 0, {
                item: a,
                priority: b
            })
        };
        Dh.prototype.forEach = function(a) {
            for (var b = this.length; b--;) a(this.L[b].item)
        };
        Dh.prototype.dequeue = function() {
            return this.length ? this.L.pop().item : null
        };
        ea.Object.defineProperties(Dh.prototype, {
            length: {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return this.L.length
                }
            }
        });
        var Eh = ["_top", "_blank"];

        function Fh(a) {
            var b = this;
            this.ampdoc = a;
            this.oa = a.getRootNode();
            this.K = de(this.ampdoc);
            this.h = R(this.ampdoc);
            this.R = Cd(this.ampdoc, "history");
            this.wa = Q(this.ampdoc.win);
            this.Tg = this.wa.isIos() && this.wa.isSafari();
            this.Rb = xc(this.ampdoc.win) && this.h.isOvertakeHistory();
            this.Sd = this.oa != this.ampdoc.getRootNode() || !!this.ampdoc.getParent();
            this.Sg = "inabox" == D(this.ampdoc.win).runtime;
            this.Tf = this.oa.nodeType == Node.DOCUMENT_NODE ? this.oa.documentElement : this.oa;
            this.Eb = this.Kg.bind(this);
            this.oa.addEventListener("click",
                this.Eb);
            this.oa.addEventListener("contextmenu", this.Eb);
            this.Je = !1;
            Ch(this.ampdoc).then(function(c) {
                b.Je = c
            });
            this.Af = this.nb = !1;
            Promise.all([this.h.isTrustedViewer(), this.h.getViewerOrigin()]).then(function(c) {
                b.nb = c[0];
                c = c[1];
                "string" == typeof c && (c = S(c));
                c = ob.localhostRegex.test(c.origin);
                b.Af = c
            });
            this.fd = null;
            this.Ie = new Dh;
            this.If = new Dh
        }
        g = Fh.prototype;
        g.cleanup = function() {
            this.Eb && (this.oa.removeEventListener("click", this.Eb), this.oa.removeEventListener("contextmenu", this.Eb))
        };
        g.openWindow = function(a, b, c, d) {
            var e = "";
            !this.wa.isIos() && this.wa.isChrome() || d || (e += "noopener");
            var f = vc(a, b, c, e);
            f && !d && (f.opener = null)
        };
        g.navigateTo = function(a, b, c, d) {
            var e = d = void 0 === d ? {} : d;
            d = void 0 === e.target ? "_top" : e.target;
            e = void 0 === e.opener ? !1 : e.opener;
            b = Gh(this, b);
            var f = Dd(this.Tf, "url");
            if (f.isProtocolValid(b)) {
                K(Eh.includes(d), "Target '" + d + "' not supported.");
                var h = f.getSourceUrl(a.location);
                b = f.resolveRelativeUrl(b, h);
                if ("_blank" == d) this.openWindow(a, b, d, e);
                else {
                    if (c && (this.fd || (this.fd = Hh(this)), this.fd.includes(c) && this.navigateToAmpUrl(b, c))) return;
                    a.top.location.href = b
                }
            } else H().error("navigation", "Cannot navigate to invalid protocol: " +
                b)
        };
        g.navigateToAmpUrl = function(a, b) {
            return this.h.hasCapability("a2a") ? (this.h.sendMessage("a2aNavigate", A({
                url: a,
                requestedBy: b
            })), !0) : !1
        };

        function Hh(a) {
            return (a = a.oa.querySelector('meta[name="amp-to-amp-navigation"]')) && a.hasAttribute("content") ? a.getAttribute("content").split(",").map(function(b) {
                return b.trim()
            }) : []
        }
        g.Kg = function(a) {
            if (!a.defaultPrevented) {
                var b = lc(a.__AMP_CUSTOM_LINKER_TARGET__ || a.target, "A");
                if (b && b.href)
                    if ("click" == a.type) {
                        Ih(this, b);
                        var c = Jh(this, b.href),
                            d;
                        if (d = !Kh(this, a, b, c)) {
                            if (this.Rb) {
                                d = b.ownerDocument.defaultView;
                                var e = b.href,
                                    f = c.protocol;
                                "ftp:" == f ? (vc(d, e, "_blank"), a.preventDefault(), d = !0) : (f = /^(https?|mailto):$/.test(f), this.Tg && !f ? (vc(d, e, "_top"), a.preventDefault(), d = !0) : d = !1)
                            } else d = !1;
                            d = !d
                        }
                        if (d)
                            if (d = Jh(this, ""), Lh(c) != Lh(d) && (Mh(this, b, a), c = Jh(this, b.href)), e = c, c = Lh(e), f = Lh(d),
                                e.hash && c == f) Nh(this, a, e, d);
                            else {
                                e = (b.getAttribute("target") || "").toLowerCase();
                                (this.Sd || this.Sg) && "_top" != e && "_blank" != e && (e = "_blank", b.setAttribute("target", e));
                                f = this.ampdoc.win;
                                var h = Q(f);
                                b = R(b);
                                d.search && h.isSafari() && 13 <= h.getMajorVersion() && b.isProxyOrigin() && b.isEmbedded() && Oh(f, d, e);
                                this.viewerInterceptsNavigation(c, "intercept_click") && a.preventDefault()
                            }
                    } else "contextmenu" == a.type && (Ih(this, b), Mh(this, b, a))
            }
        };

        function Mh(a, b, c) {
            a.Ie.forEach(function(d) {
                d(b, c)
            })
        }

        function Gh(a, b) {
            a.If.forEach(function(c) {
                b = c(b)
            });
            return b
        }

        function Ih(a, b) {
            var c = null;
            if (a.Je && !a.Sd) {
                a = S(a.ampdoc.win.location.href);
                var d = C(a.search);
                a = [];
                for (var e = 0; e < uh.length; e++) {
                    var f = uh[e];
                    "undefined" !== typeof d[f] && a.push(f)
                }
                d = b.getAttribute("data-amp-addparams");
                e = b.href;
                d && (e = te(e, C(d)));
                d = S(e);
                d = C(d.search);
                for (e = a.length - 1; 0 <= e; e--) "undefined" !== typeof d[a[e]] && a.splice(e, 1);
                d = "";
                for (e = 0; e < a.length; e++) f = a[e], d += 0 == e ? f + "=QUERY_PARAM(" + f + ")" : "&" + f + "=QUERY_PARAM(" + f + ")";
                c = d
            }
            Dd(b, "url-replace").maybeExpandLink(b, c)
        }

        function Kh(a, b, c, d) {
            return c.hasAttribute("rel") && c.getAttribute("rel").split(" ").map(function(e) {
                return e.trim()
            }).includes("amphtml") ? a.navigateToAmpUrl(d.href, "<a rel=amphtml>") ? (b.preventDefault(), !0) : !1 : !1
        }

        function Oh(a, b, c) {
            function d() {
                var h = a.location.href;
                h == f ? (J().info("navigation", "Restored iframe URL with query string:", e), a.history.replaceState(null, "", e)) : J().error("navigation", "Unexpected iframe URL change:", h, f)
            }
            J().info("navigation", "Removing iframe query string before navigation:", b.search);
            var e = b.href,
                f = "" + b.origin + b.pathname + b.hash;
            a.history.replaceState(null, "", f);
            "_blank" === c ? a.setTimeout(d, 0) : a.addEventListener("pageshow", function k(l) {
                l.persisted && (d(), a.removeEventListener("pageshow",
                    k))
            })
        }

        function Nh(a, b, c, d) {
            if (Q(a.ampdoc.win).isIe()) {
                var e = c.hash.substring(1),
                    f = a.ampdoc.getElementById(e);
                f && (/^(?:a|select|input|button|textarea)$/i.test(f.tagName) || (f.tabIndex = -1), wc(f))
            }
            b.preventDefault();
            if (!a.Sd) {
                var h = c.hash.slice(1),
                    l = null;
                if (h) {
                    var k = String(h).replace(Xb, Yb);
                    l = a.oa.getElementById(h) || a.oa.querySelector('a[name="' + k + '"]')
                }
                c.hash != d.hash ? a.R.replaceStateForTarget(c.hash).then(function() {
                    Ph(a, l, h)
                }) : Ph(a, l, h)
            }
        }
        g.registerAnchorMutator = function(a, b) {
            this.Ie.enqueue(a, b)
        };
        g.registerNavigateToMutator = function(a, b) {
            this.If.enqueue(a, b)
        };

        function Ph(a, b, c) {
            b ? (a.K.scrollIntoView(b), P(a.ampdoc.win).delay(function() {
                return a.K.scrollIntoView(b)
            }, 1)) : J().warn("navigation", "failed to find element with id=" + c + " or a[name=" + c + "]")
        }

        function Jh(a, b) {
            return Dd(a.Tf, "url").parse(b)
        }
        g.viewerInterceptsNavigation = function(a, b) {
            var c = this.h.hasCapability("interceptNavigation"),
                d = this.ampdoc.isSingleDoc() && this.ampdoc.getRootNode().documentElement.hasAttribute("allow-navigation-interception");
            if (!c || !d || !this.nb && !this.Af) return !1;
            this.h.sendMessage("navigateTo", A({
                url: a,
                requestedBy: b
            }));
            return !0
        };

        function Lh(a) {
            return "" + a.origin + a.pathname + a.search
        };

        function Qh(a) {
            a.whenExtensionsKnown().then(function() {
                a.declaresExtension("amp-form") && a.getRootNode().addEventListener("submit", Rh, !0)
            })
        }

        function Rh(a) {
            if (!a.defaultPrevented) {
                var b = a.target;
                if (b && "FORM" == b.tagName) {
                    (b.classList.contains("i-amphtml-form") ? b.hasAttribute("amp-novalidate") : b.hasAttribute("novalidate")) || !b.checkValidity || b.checkValidity() || a.preventDefault();
                    for (var c = b.elements, d = 0; d < c.length; d++) K(!c[d].name || "__amp_source_origin" != c[d].name, "Illegal input name, %s found: %s", "__amp_source_origin", c[d]);
                    c = b.getAttribute("action");
                    var e = b.getAttribute("action-xhr");
                    d = (b.getAttribute("method") || "GET").toUpperCase();
                    e && (we(e, b, "action-xhr"), K(!T(e), "form action-xhr should not be on AMP CDN: %s", b), Fe(e));
                    c && (we(c, b, "action"), K(!T(c), "form action should not be on AMP CDN: %s", b), Fe(c));
                    "GET" == d ? K(e || c, "form action-xhr or action attribute is required for method=GET: %s", b) : "POST" == d && (c && H().error("form", "action attribute is invalid for method=POST: %s", b), e || (a.preventDefault(), K(!1, "Only XHR based (via action-xhr attribute) submissions are support for POST requests. %s", b)));
                    (c = b.getAttribute("target")) ? K("_blank" ==
                        c || "_top" == c, "form target=%s is invalid can only be _blank or _top: %s", c, b): b.setAttribute("target", "_top");
                    e && (a.preventDefault(), a.stopImmediatePropagation(), Dd(b, "action").execute(b, "submit", null, b, b, a, 3))
                }
            }
        };

        function Y() {
            this.ta = null
        }
        g = Y.prototype;
        g.add = function(a) {
            var b = this;
            this.ta || (this.ta = []);
            this.ta.push(a);
            return function() {
                b.remove(a)
            }
        };
        g.remove = function(a) {
            this.ta && Ya(this.ta, a)
        };
        g.removeAll = function() {
            this.ta && (this.ta.length = 0)
        };
        g.fire = function(a) {
            if (this.ta)
                for (var b = p(this.ta), c = b.next(); !c.done; c = b.next()) c = c.value, c(a)
        };
        g.getHandlerCount = function() {
            var a, b;
            return null != (b = null == (a = this.ta) ? void 0 : a.length) ? b : 0
        };
        var Sh = {
            attributes: !0,
            attributeFilter: ["hidden"],
            subtree: !0
        };

        function Th(a) {
            this.X = a.getRootNode();
            this.G = (this.X.ownerDocument || this.X).defaultView;
            this.tb = this.ma = null
        }
        Th.prototype.add = function(a) {
            var b = this;
            Uh(this);
            var c = this.tb.add(a);
            return function() {
                c();
                0 === b.tb.getHandlerCount() && b.dispose()
            }
        };

        function Uh(a) {
            if (!a.ma) {
                a.tb = new Y;
                var b = new a.G.MutationObserver(function(c) {
                    c && a.tb.fire(c)
                });
                a.ma = b;
                b.observe(a.X, Sh)
            }
        }
        Th.prototype.dispose = function() {
            this.ma && (this.ma.disconnect(), this.tb.removeAll(), this.tb = this.ma = null)
        };

        function Vh(a) {
            try {
                return a.state
            } catch (b) {
                return null
            }
        };

        function Wh(a, b) {
            this.B = a;
            this.S = P(a.win);
            this.j = b;
            this.D = 0;
            this.ab = [];
            this.L = [];
            this.j.setOnStateUpdated(this.ba.bind(this))
        }
        g = Wh.prototype;
        g.cleanup = function() {
            this.j.cleanup()
        };
        g.push = function(a, b) {
            var c = this;
            return Xh(this, function() {
                return c.j.push(b).then(function(d) {
                    c.ba(d);
                    a && (c.ab[d.stackIndex] = a);
                    return d.stackIndex
                })
            }, "push")
        };
        g.pop = function(a) {
            var b = this;
            return Xh(this, function() {
                return b.j.pop(a).then(function(c) {
                    b.ba(c)
                })
            }, "pop")
        };
        g.replace = function(a) {
            var b = this;
            return Xh(this, function() {
                return b.j.replace(a)
            }, "replace")
        };
        g.get = function() {
            var a = this;
            return Xh(this, function() {
                return a.j.get()
            }, "get")
        };
        g.goBack = function(a) {
            var b = this;
            return Xh(this, function() {
                return 0 >= b.D && !a ? v() : b.j.pop(b.D).then(function(c) {
                    b.ba(c)
                })
            }, "goBack")
        };
        g.replaceStateForTarget = function(a) {
            var b = this,
                c = this.B.win.location.hash;
            return this.push(function() {
                b.B.win.location.replace(c || "#")
            }).then(function() {
                b.j.replaceStateForTarget(a)
            })
        };
        g.getFragment = function() {
            return this.j.getFragment()
        };
        g.updateFragment = function(a) {
            "#" == a[0] && (a = a.substr(1));
            return this.j.updateFragment(a)
        };
        g.ba = function(a) {
            this.D = a.stackIndex;
            Yh(this, a)
        };

        function Yh(a, b) {
            if (!(a.D >= a.ab.length - 1)) {
                for (var c = [], d = a.ab.length - 1; d > a.D; d--) a.ab[d] && (c.push(a.ab[d]), a.ab[d] = void 0);
                a.ab.splice(a.D + 1);
                if (0 < c.length)
                    for (d = {
                            Bb: 0
                        }; d.Bb < c.length; d = {
                            Bb: d.Bb
                        }, d.Bb++) a.S.delay(function(e) {
                        return function() {
                            return c[e.Bb](b)
                        }
                    }(d), 1)
            }
        }

        function Xh(a, b, c) {
            var d = new x,
                e = d.promise;
            a.L.push({
                callback: b,
                resolve: d.resolve,
                reject: d.reject,
                trace: Error("history trace for " + c + ": ")
            });
            1 == a.L.length && Zh(a);
            return e
        }

        function Zh(a) {
            if (0 != a.L.length) {
                var b = a.L[0];
                try {
                    var c = b.callback()
                } catch (d) {
                    c = Promise.reject(d)
                }
                c.then(function(d) {
                    b.resolve(d)
                }, function(d) {
                    J().error("History", "failed to execute a task:", d);
                    b.trace && (b.trace.message += d, J().error("History", b.trace));
                    b.reject(d)
                }).then(function() {
                    a.L.splice(0, 1);
                    Zh(a)
                })
            }
        }

        function $h(a) {
            var b = this;
            this.win = a;
            this.S = P(a);
            a = this.win.history;
            this.bb = a.length - 1;
            var c = Vh(a);
            c && void 0 !== c["AMP.History"] && (this.bb = Math.min(c["AMP.History"], this.bb));
            this.D = this.bb;
            this.ba = null;
            this.Gh = "state" in a;
            this.yb = ai(this, this.D);
            if (a.pushState && a.replaceState) {
                this.Cc = a.originalPushState || a.pushState.bind(a);
                this.Wb = a.originalReplaceState || a.replaceState.bind(a);
                var d = function(f, h, l) {
                    b.yb = f;
                    b.Cc(f, h, l || null)
                };
                var e = function(f, h, l) {
                    b.yb = f;
                    void 0 !== l ? b.Wb(f, h, l) : b.Wb(f, h)
                };
                a.originalPushState ||
                    (a.originalPushState = this.Cc);
                a.originalReplaceState || (a.originalReplaceState = this.Wb)
            } else d = function(f) {
                b.yb = f
            }, e = function(f) {
                b.yb = f
            };
            this.ph = d;
            this.Lc = e;
            try {
                this.Lc(ai(this, this.D, !0))
            } catch (f) {
                J().error("History", "Initial replaceState failed: " + f.message)
            }
            a.pushState = this.xf.bind(this);
            a.replaceState = this.Kd.bind(this);
            this.Ic = function(f) {
                f = f.state;
                J().fine("History", "popstate event: " + b.win.history.length + ", " + JSON.stringify(f));
                f = bi(b);
                J().fine("History", "history event: " + b.win.history.length +
                    ", " + JSON.stringify(f));
                var h = f ? f["AMP.History"] : void 0,
                    l = b.D,
                    k = b.cd;
                b.cd = void 0;
                l > b.win.history.length - 2 && (l = b.win.history.length - 2, b.Ca(ci(f, {
                    stackIndex: l
                })));
                l = void 0 == h ? l + 1 : h < b.win.history.length ? h : b.win.history.length - 1;
                f || (f = {});
                f["AMP.History"] = l;
                b.Lc(f, void 0, void 0);
                l != b.D && b.Ca(ci(f, {
                    stackIndex: l
                }));
                l < b.bb && (b.bb = l);
                k && k.resolve()
            };
            this.win.addEventListener("popstate", this.Ic)
        }
        g = $h.prototype;
        g.cleanup = function() {
            this.Cc && (this.win.history.pushState = this.Cc);
            this.Wb && (this.win.history.replaceState = this.Wb);
            this.win.removeEventListener("popstate", this.Ic)
        };

        function ai(a, b, c) {
            a = z(c ? bi(a) : void 0);
            a["AMP.History"] = b;
            return a
        }
        g.setOnStateUpdated = function(a) {
            this.ba = a
        };
        g.push = function(a) {
            var b = this;
            return di(this, function() {
                var c = ci(bi(b), a || {});
                b.xf(c, void 0, c.fragment ? "#" + c.fragment : void 0);
                return qa(function() {
                    return ci(c, {
                        stackIndex: b.D
                    })
                })
            })
        };
        g.pop = function(a) {
            var b = this;
            a = Math.max(a, this.bb);
            return di(this, function() {
                return ei(b, b.D - a + 1)
            }).then(function(c) {
                return ci(bi(b), {
                    stackIndex: c
                })
            })
        };
        g.replace = function(a) {
            var b = this,
                c = a = void 0 === a ? {} : a;
            return di(this, function() {
                var d = ci(bi(b), c || {}),
                    e = (d.url || "").replace(/#.*/, ""),
                    f = d.fragment ? "#" + d.fragment : "";
                b.Kd(d, d.title, e || f ? e + f : void 0);
                return qa(function() {
                    return ci(d, {
                        stackIndex: b.D
                    })
                })
            })
        };
        g.get = function() {
            var a = this;
            return qa(function() {
                return ci(bi(a), {
                    stackIndex: a.D
                })
            })
        };
        g.backTo = function(a) {
            var b = this;
            a = Math.max(a, this.bb);
            return di(this, function() {
                return ei(b, b.D - a)
            })
        };

        function bi(a) {
            return a.Gh ? Vh(a.win.history) : a.yb
        }

        function di(a, b) {
            return a.cd ? a.cd.promise.then(b, b) : b()
        }

        function fi(a) {
            var b = new x,
                c = b.resolve,
                d = b.reject;
            b = a.S.timeoutPromise(500, b.promise);
            a.cd = {
                promise: b,
                resolve: c,
                reject: d
            };
            return b
        }

        function ei(a, b) {
            if (0 >= b) return Promise.resolve(a.D);
            a.yb = ai(a, a.D - b);
            var c = fi(a);
            a.win.history.go(-b);
            return c.then(function() {
                return Promise.resolve(a.D)
            })
        }
        g.xf = function(a, b, c) {
            a || (a = {});
            var d = this.D + 1;
            a["AMP.History"] = d;
            this.ph(a, b, c);
            d != this.win.history.length - 1 && (d = this.win.history.length - 1, a["AMP.History"] = d, this.Lc(a));
            a = ci(a, {
                stackIndex: d
            });
            this.Ca(a)
        };
        g.replaceStateForTarget = function(a) {
            var b = this;
            di(this, function() {
                b.win.removeEventListener("popstate", b.Ic);
                try {
                    b.win.location.replace(a)
                } finally {
                    b.win.addEventListener("popstate", b.Ic)
                }
                b.Kd();
                return v()
            })
        };
        g.Kd = function(a, b, c) {
            a || (a = {});
            var d = Math.min(this.D, this.win.history.length - 1);
            a["AMP.History"] = d;
            this.Lc(a, b, c);
            a = ci(a, {
                stackIndex: d
            });
            this.Ca(a)
        };
        g.Ca = function(a) {
            a.stackIndex = Math.min(a.stackIndex, this.win.history.length - 1);
            this.D != a.stackIndex && (J().fine("History", "stack index changed: " + this.D + " -> " + a.stackIndex), this.D = a.stackIndex, this.ba && this.ba(a))
        };
        g.getFragment = function() {
            var a = this.win.location.hash;
            a = a.substr(1);
            return Promise.resolve(a)
        };
        g.updateFragment = function(a) {
            return this.replace({
                fragment: a
            })
        };

        function ci(a, b) {
            var c = Object.assign({}, a && a.data || {}, b.data || {});
            return Object.assign({}, a || {}, b, {
                data: c
            })
        }

        function gi(a, b) {
            var c = this;
            this.win = a;
            this.h = b;
            this.D = 0;
            this.ba = null;
            this.Kh = this.h.onMessage("historyPopped", function(d) {
                void 0 !== d.newStackIndex && (d.stackIndex = d.newStackIndex);
                hi(d) ? c.Ca(d) : J().warn("History", 'Ignored unexpected "historyPopped" data:', d)
            })
        }
        g = gi.prototype;
        g.replaceStateForTarget = function(a) {
            this.win.location.replace(a)
        };
        g.cleanup = function() {
            this.Kh()
        };
        g.setOnStateUpdated = function(a) {
            this.ba = a
        };

        function ii(a, b, c) {
            if (hi(a)) return a;
            J().warn("History", 'Ignored unexpected "%s" data:', c, a);
            return b
        }

        function hi(a) {
            return !!a && void 0 !== a.stackIndex
        }
        g.push = function(a) {
            var b = this,
                c = Object.assign({}, {
                    stackIndex: this.D + 1
                }, a || {});
            return this.h.sendMessageAwaitResponse("pushHistory", c).then(function(d) {
                d = ii(d, c, "pushHistory");
                b.Ca(d);
                return d
            })
        };
        g.pop = function(a) {
            var b = this;
            if (a > this.D) return this.get();
            a = A({
                stackIndex: this.D
            });
            return this.h.sendMessageAwaitResponse("popHistory", a).then(function(c) {
                var d = A({
                    stackIndex: b.D - 1
                });
                c = ii(c, d, "popHistory");
                b.Ca(c);
                return c
            })
        };
        g.replace = function(a) {
            var b = this;
            if (a && a.url) {
                if (!this.h.hasCapability("fullReplaceHistory")) {
                    var c = A({
                        stackIndex: this.D
                    });
                    return Promise.resolve(c)
                }
                var d = a.url.replace(/#.*/, "");
                a.url = d
            }
            var e = Object.assign({}, {
                stackIndex: this.D
            }, a || {});
            return this.h.sendMessageAwaitResponse("replaceHistory", e, !0).then(function(f) {
                f = ii(f, e, "replaceHistory");
                b.Ca(f);
                return f
            })
        };
        g.get = function() {
            return Promise.resolve({
                data: void 0,
                fragment: "",
                stackIndex: this.D,
                title: ""
            })
        };
        g.Ca = function(a) {
            var b = a.stackIndex;
            this.D != b && (J().fine("History", "stackIndex: " + this.D + " -> " + b), this.D = b, this.ba && this.ba(a))
        };
        g.getFragment = function() {
            return this.h.hasCapability("fragment") ? this.h.sendMessageAwaitResponse("getFragment", void 0, !0).then(function(a) {
                if (!a) return "";
                "#" == a[0] && (a = a.substr(1));
                return a
            }) : Promise.resolve("")
        };
        g.updateFragment = function(a) {
            return this.h.hasCapability("fragment") ? this.h.sendMessageAwaitResponse("replaceHistory", A({
                fragment: a
            }), !0) : v()
        };

        function ji(a) {
            var b = R(a);
            b.isOvertakeHistory() || a.win.__AMP_TEST_IFRAME ? b = new gi(a.win, b) : (M(a.win, "global-history-binding", $h), b = O(a.win, "global-history-binding"));
            return new Wh(a, b)
        };

        function ki() {
            W.apply(this, arguments)
        }
        la(ki, W);
        ki.requiresShadowDom = W.requiresShadowDom;
        ki.getPreconnects = W.getPreconnects;
        ki.getBuildPriority = W.getBuildPriority;
        ki.createLoaderLogoCallback = W.createLoaderLogoCallback;
        ki.usesLoading = W.usesLoading;
        ki.prerenderAllowed = W.prerenderAllowed;
        ki.deferredMount = W.deferredMount;
        ki.R1 = W.R1;

        function li(a, b) {
            this.G = a;
            this.Ua = b;
            this.Ha = {};
            this.Zb = null
        }
        g = li.prototype;
        g.start = function() {
            this.Zb = this.Ha;
            this.Ha = {}
        };
        g.resolveMatchQuery = function(a) {
            return "1" === this.Mc(a, mi, "1")
        };
        g.resolveListQuery = function(a) {
            return this.Mc(a, ni, "")
        };
        g.complete = function() {
            for (var a in this.Zb) a in this.Ha || oi(this.Zb[a], this.Ua, !1);
            this.Zb = null
        };
        g.dispose = function() {
            for (var a in this.Ha) oi(this.Ha[a], this.Ua, !1);
            this.Ha = {}
        };
        g.Mc = function(a, b, c) {
            if (!a || !a.trim()) return c;
            var d = this.Ha[a] || this.Zb[a];
            d || (d = b(this.G, a), oi(d, this.Ua, !0));
            this.Ha[a] = d;
            a: {
                for (a = 0; a < d.length; a++) {
                    var e = d[a],
                        f = e.query;
                    e = e.value;
                    if (!f || f.matches) {
                        d = e;
                        break a
                    }
                }
                d = ""
            }
            return d
        };

        function mi(a, b) {
            return [{
                query: a.matchMedia(b),
                value: "1"
            }, {
                query: null,
                value: ""
            }]
        }

        function ni(a, b) {
            return b.split(",").map(function(c) {
                c = c.replace(/\s+/g, " ").trim();
                if (0 != c.length) {
                    var d;
                    if (")" == c.charAt(c.length - 1)) {
                        var e = 1;
                        for (d = c.length - 2; 0 <= d; d--) {
                            var f = c.charAt(d);
                            "(" == f ? e-- : ")" == f && e++;
                            if (0 == e) break
                        }
                        var h = d - 1;
                        if (0 < d)
                            for (d--; 0 <= d && (f = c.charAt(d), "%" == f || "-" == f || "_" == f || "a" <= f && "z" >= f || "A" <= f && "Z" >= f || "0" <= f && "9" >= f); d--);
                        if (d >= h) return null
                    } else
                        for (d = c.length - 2; 0 <= d && (f = c.charAt(d), "%" == f || "." == f || "a" <= f && "z" >= f || "A" <= f && "Z" >= f || "0" <= f && "9" >= f); d--);
                    0 <= d ? (f = c.substring(0,
                        d + 1).trim(), c = c.substring(d + 1).trim()) : f = void 0;
                    return c ? {
                        query: f ? a.matchMedia(f) : null,
                        value: c
                    } : null
                }
            }).filter(Boolean)
        }

        function oi(a, b, c) {
            for (var d = 0; d < a.length; d++) {
                var e = a[d].query;
                e && (void 0 !== e.onchange ? e.onchange = c ? b : null : c ? e.addListener(b) : e.removeListener(b))
            }
        };

        function pi(a, b, c) {
            b.__AMP__RESOURCE = this;
            this.Mg = a;
            this.element = b;
            this.debugid = b.tagName.toLowerCase() + "#" + a;
            this.hostWin = b.ownerDocument.defaultView;
            this.o = c;
            this.Wg = b.hasAttribute("placeholder");
            this.Pb = !1;
            this.ub = void 0;
            this.H = b.isBuilt() ? 1 : 0;
            0 == this.H && b.isBuilding() && this.build();
            this.ne = -1;
            this.ua = 0;
            this.Df = this.gb = null;
            this.rc = !1;
            this.aa = Tb(-1E4, -1E4, 0, 0);
            this.Nd = null;
            this.Wd = !1;
            this.Ub = this.pa = null;
            this.me = void 0;
            a = new x;
            this.ah = a.promise;
            this.$d = a.resolve;
            this.Ud = !1
        }

        function Z(a) {
            return a.__AMP__RESOURCE
        }
        g = pi.prototype;
        g.getId = function() {
            return this.Mg
        };
        g.updateOwner = function(a) {
            this.ub = a
        };
        g.getOwner = function() {
            if (void 0 === this.ub) {
                for (var a = this.element; a; a = a.parentElement)
                    if (a.__AMP__OWNER) {
                        this.ub = a.__AMP__OWNER;
                        break
                    }
                void 0 === this.ub && (this.ub = null)
            }
            return this.ub
        };
        g.hasOwner = function() {
            return !!this.getOwner()
        };
        g.getLayoutPriority = function() {
            return -1 != this.ne ? this.ne : this.element.getLayoutPriority()
        };
        g.updateLayoutPriority = function(a) {
            this.ne = a
        };
        g.getState = function() {
            return this.H
        };
        g.isBuilt = function() {
            return this.element.isBuilt()
        };
        g.isBuilding = function() {
            return this.Pb
        };
        g.whenBuilt = function() {
            return this.element.signals().whenSignal("res-built")
        };
        g.build = function() {
            var a = this;
            if (this.Pb || !this.element.isUpgraded()) return null;
            this.Pb = !0;
            return this.element.buildInternal().then(function() {
                a.Pb = !1;
                a.H = 1;
                a.element.signals().signal("res-built")
            }, function(b) {
                a.maybeReportErrorOnBuildFailure(b);
                a.Pb = !1;
                a.element.signals().rejectSignal("res-built", b);
                throw b;
            })
        };
        g.maybeReportErrorOnBuildFailure = function(a) {
            Lf(a) || J().error("Resource", "failed to build:", this.debugid, a)
        };
        g.changeSize = function(a, b, c) {
            this.element.applySize(a, b, c);
            this.requestMeasure()
        };
        g.overflowCallback = function(a, b, c, d) {
            a && (this.me = {
                height: b,
                width: c,
                margins: d
            });
            this.element.overflowCallback(a, b, c, d)
        };
        g.resetPendingChangeSize = function() {
            this.me = void 0
        };
        g.getPendingChangeSize = function() {
            return this.me
        };
        g.getUpgradeDelayMs = function() {
            return this.element.getUpgradeDelayMs()
        };
        g.measure = function() {
            if (!(this.Wg && this.element.parentElement && this.element.parentElement.tagName.startsWith("AMP-")) || "__AMP__RESOURCE" in this.element.parentElement)
                if (this.element.ownerDocument && this.element.ownerDocument.defaultView) {
                    this.Wd = !1;
                    var a = this.aa,
                        b = de(this.element);
                    this.aa = b.getLayoutRect(this.element);
                    var c = !1;
                    if (b.supportsPositionFixed() && this.isDisplayed())
                        for (var d = this.o.getAmpdoc().win, e = d.document.body, f = this.element; f && f != e; f = f.offsetParent) {
                            if (f.isAlwaysFixed && f.isAlwaysFixed()) {
                                c = !0;
                                break
                            }
                            if (b.isDeclaredFixed(f) && "fixed" == (d.getComputedStyle(f) || Me).position) {
                                c = !0;
                                break
                            }
                        }
                    if (this.rc = c) this.aa = Wb(this.aa, -b.getScrollLeft(), -b.getScrollTop());
                    var h = this.aa,
                        l = !(a.width == h.width && a.height === h.height);
                    (1 == this.H || a.top != h.top || l) && this.element.isUpgraded() && (1 == this.H ? this.H = 2 : 4 != this.H && 5 != this.H || !this.element.isRelayoutNeeded() || (this.H = 2));
                    this.hasBeenMeasured() || (this.Nd = h);
                    this.element.updateLayoutBox(h, l)
                } else this.H = 1
        };
        g.ensureMeasured = function() {
            var a = this;
            return this.hasBeenMeasured() ? v() : be(this.hostWin).measure(function() {
                return a.measure()
            })
        };
        g.completeCollapse = function() {
            Qe(this.element, !1);
            this.aa = Tb(this.aa.left, this.aa.top, 0, 0);
            this.rc = !1;
            this.element.updateLayoutBox(this.getLayoutBox());
            var a = this.getOwner();
            a && a.collapsedCallback(this.element)
        };
        g.completeExpand = function() {
            Qe(this.element, !0);
            this.requestMeasure()
        };
        g.isMeasureRequested = function() {
            return this.Wd
        };
        g.hasBeenMeasured = function() {
            return !!this.Nd
        };
        g.requestMeasure = function() {
            this.Wd = !0
        };
        g.getLayoutSize = function() {
            var a = this.aa;
            return {
                width: a.width,
                height: a.height
            }
        };
        g.getLayoutBox = function() {
            if (!this.rc) return this.aa;
            var a = de(this.element);
            return Wb(this.aa, a.getScrollLeft(), a.getScrollTop())
        };
        g.getInitialLayoutBox = function() {
            return this.Nd || this.aa
        };
        g.isDisplayed = function() {
            if (!this.element.ownerDocument || !this.element.ownerDocument.defaultView) return !1;
            var a = "fluid" == this.element.getLayout(),
                b = this.getLayoutBox(),
                c = 0 < b.height && 0 < b.width;
            return a || c
        };
        g.isFixed = function() {
            return this.rc
        };
        g.overlaps = function(a) {
            var b = this.getLayoutBox();
            return b.top <= a.bottom && a.top <= b.bottom && b.left <= a.right && a.left <= b.right
        };
        g.prerenderAllowed = function() {
            return this.element.prerenderAllowed()
        };
        g.isBuildRenderBlocking = function() {
            return this.element.isBuildRenderBlocking()
        };
        g.whenWithinViewport = function(a) {
            if (!this.isLayoutPending() || !0 === a) return v();
            var b = String(a);
            if (this.pa && this.pa[b]) return this.pa[b].promise;
            if (this.isWithinViewportRatio(a)) return v();
            this.pa = this.pa || {};
            this.pa[b] = new x;
            return this.pa[b].promise
        };

        function qi(a) {
            if (a.pa) {
                var b = a.getDistanceViewportRatio(),
                    c;
                for (c in a.pa) a.isWithinViewportRatio(parseFloat(c), b) && (a.pa[c].resolve(), delete a.pa[c])
            }
        }
        g.getDistanceViewportRatio = function() {
            var a = de(this.element).getRect(),
                b = this.getLayoutBox(),
                c = this.o.getScrollDirection(),
                d = 1,
                e = 0;
            if (a.right < b.left || a.left > b.right) return {
                distance: !1
            };
            if (a.bottom < b.top) e = b.top - a.bottom, -1 == c && (d = 2);
            else if (a.top > b.bottom) e = a.top - b.bottom, 1 == c && (d = 2);
            else return {
                distance: !0
            };
            return {
                distance: e,
                scrollPenalty: d,
                viewportHeight: a.height
            }
        };
        g.isWithinViewportRatio = function(a, b) {
            if ("boolean" === typeof a) return a;
            var c = b || this.getDistanceViewportRatio(),
                d = c.distance;
            return "boolean" == typeof d ? d : d < c.viewportHeight * a / c.scrollPenalty
        };
        g.renderOutsideViewport = function() {
            qi(this);
            return this.hasOwner() || this.isWithinViewportRatio(this.element.renderOutsideViewport())
        };
        g.idleRenderOutsideViewport = function() {
            return this.isWithinViewportRatio(this.element.idleRenderOutsideViewport())
        };
        g.layoutScheduled = function(a) {
            this.H = 3;
            this.element.layoutScheduleTime = a
        };
        g.layoutCanceled = function() {
            this.H = this.hasBeenMeasured() ? 2 : 1
        };
        g.startLayout = function() {
            var a = this;
            if (this.Ub) return this.Ub;
            if (4 == this.H) return v();
            if (5 == this.H) return Promise.reject(this.Df);
            this.isDisplayed();
            if (3 != this.H) {
                var b = J().createError("startLayout called but not LAYOUT_SCHEDULED", "currently: ", this.H);
                If(b, this.element);
                return Promise.reject(b)
            }
            if (0 < this.ua && !this.element.isRelayoutNeeded()) return J().fine("Resource", "layout canceled since it wasn't requested:", this.debugid, this.H), this.H = 4, v();
            J().fine("Resource", "start layout:", this.debugid, "count:",
                this.ua);
            this.ua++;
            this.H = 3;
            this.gb = new AbortController;
            var c = this.gb.signal;
            return this.Ub = (new Promise(function(d, e) {
                be(a.hostWin).mutate(function() {
                    try {
                        var f = a.element.layoutCallback(c)
                    } catch (h) {
                        e(h)
                    }
                    Promise.resolve(f).then(d, e)
                });
                c.onabort = function() {
                    return e(Kf())
                }
            })).then(function() {
                return ri(a, !0, c)
            }, function(d) {
                return ri(a, !1, c, d)
            })
        };

        function ri(a, b, c, d) {
            a.gb = null;
            if (c.aborted) throw c = J().createError("layoutComplete race"), c.associatedElement = a.element, J().expectedError("Resource", c), Kf();
            a.$d && (a.$d(), a.$d = null);
            a.Ub = null;
            a.H = b ? 4 : 5;
            a.Df = d;
            if (b) J().fine("Resource", "layout complete:", a.debugid);
            else return J().fine("Resource", "loading failed:", a.debugid, d), Promise.reject(d)
        }
        g.isLayoutPending = function() {
            return 4 != this.H && 5 != this.H
        };
        g.loadedOnce = function() {
            return this.element.R1() ? this.element.whenLoaded() : this.ah
        };
        g.isInViewport = function() {
            this.Ud && qi(this);
            return this.Ud
        };
        g.setInViewport = function(a) {
            this.Ud = a
        };
        g.unlayout = function() {
            0 != this.H && 1 != this.H && 2 != this.H && (this.gb && (this.gb.abort(), this.gb = null), this.setInViewport(!1), this.element.unlayoutCallback() && (this.element.togglePlaceholder(!0), this.H = 1, this.ua = 0, this.Ub = null))
        };
        g.getTaskId = function(a) {
            return this.debugid + "#" + a
        };
        g.pause = function() {
            this.element.pause()
        };
        g.pauseOnRemove = function() {
            this.element.pause()
        };
        g.resume = function() {
            this.element.resume()
        };
        g.unload = function() {
            this.element.unmount()
        };
        g.disconnect = function() {
            delete this.element.__AMP__RESOURCE;
            this.element.disconnect(!0)
        };

        function si() {
            this.Ka = z();
            this.Na = null
        }
        g = si.prototype;
        g.get = function(a) {
            a = this.Ka[a];
            return null == a ? null : a
        };
        g.whenSignal = function(a) {
            var b, c = null == (b = this.Na) ? void 0 : b[a];
            c || (b = this.Ka[a], c = null != b ? {
                promise: "number" == typeof b ? Promise.resolve(b) : Promise.reject(b)
            } : new x, this.Na || (this.Na = z()), this.Na[a] = c);
            return c.promise
        };
        g.signal = function(a, b) {
            if (null == this.Ka[a]) {
                var c = null != b ? b : Date.now();
                this.Ka[a] = c;
                var d;
                a = null == (d = this.Na) ? void 0 : d[a];
                if (null == a ? 0 : a.resolve) a.resolve(c), a.resolve = void 0, a.reject = void 0
            }
        };
        g.rejectSignal = function(a, b) {
            if (null == this.Ka[a]) {
                this.Ka[a] = b;
                var c;
                a = null == (c = this.Na) ? void 0 : c[a];
                if (null == a ? 0 : a.reject) a.reject(b), a.promise.catch(function() {}), a.resolve = void 0, a.reject = void 0
            }
        };
        g.reset = function(a) {
            this.Ka[a] && delete this.Ka[a];
            var b, c = null == (b = this.Na) ? void 0 : b[a];
            c && !c.resolve && delete this.Na[a]
        };
        var ti = Date.now();

        function ui(a) {
            var b = this;
            this.B = a;
            var c = a.win;
            this.he = new c.IntersectionObserver(function(d) {
                return vi(b, d)
            }, {
                root: xc(c) ? c.document : null,
                rootMargin: "250% 31.25%"
            });
            this.Fa = new Map;
            this.fa = new Map;
            this.vb = [];
            this.Sf = !1;
            a.whenReady().then(function() {
                return wi(b)
            });
            this.Fe = a.onVisibilityChanged(function() {
                return xi(b)
            })
        }
        g = ui.prototype;
        g.dispose = function() {
            this.he.disconnect();
            this.fa.clear();
            this.Fe && (this.Fe(), this.Fe = null)
        };
        g.scheduleAsap = function(a) {
            this.fa.set(a, {
                asap: !0,
                isIntersecting: !1
            });
            yi(this, a)
        };
        g.schedule = function(a) {
            this.fa.has(a) || (a.deferredMount() ? (this.fa.set(a, {
                asap: !1,
                isIntersecting: !1
            }), this.he.observe(a), 0 < this.Fa.size && this.Fa.forEach(function(b, c) {
                a !== c && c.contains(a) && b.observe(a)
            })) : this.fa.set(a, {
                asap: !1,
                isIntersecting: !0
            }), yi(this, a))
        };
        g.unschedule = function(a) {
            this.fa.has(a) && (this.fa.delete(a), this.he.unobserve(a), 0 < this.Fa.size && this.Fa.forEach(function(b) {
                b.unobserve(a)
            }), this.vb && (Ya(this.vb, a), wi(this)))
        };
        g.setContainer = function(a, b) {
            var c = this;
            if (!this.Fa.has(a)) {
                var d = new this.B.win.IntersectionObserver(function(e) {
                    return vi(c, e)
                }, {
                    root: b || a,
                    rootMargin: "250% 31.25%"
                });
                this.Fa.set(a, d);
                this.fa.forEach(function(e, f) {
                    !e.asap && f !== a && a.contains(f) && d.observe(f)
                })
            }
        };
        g.removeContainer = function(a) {
            var b = this.Fa.get(a);
            b && (b.disconnect(), this.Fa.delete(a))
        };

        function zi(a) {
            a.B.isReady() && !a.Sf && (a.Sf = !0, a.B.win.setTimeout(function() {
                a.B.signals().signal("ready-scan")
            }, 50))
        }

        function xi(a) {
            var b = a.B.getVisibilityState();
            "visible" != b && "hidden" != b && "prerender" != b || a.fa.forEach(function(c, d) {
                return Ai(a, d)
            })
        }

        function yi(a, b) {
            var c = a.vb;
            c ? (c.includes(b) || c.push(b), wi(a)) : Ai(a, b)
        }

        function wi(a) {
            var b = a.B.isReady(),
                c = a.vb;
            if (c)
                for (var d = 0; d < c.length; d++) {
                    var e = c[d];
                    if (b || tc(e, a.B.getRootNode())) c.splice(d--, 1), Ai(a, e)
                }
            b && (a.vb = null, zi(a))
        }

        function vi(a, b) {
            for (var c = 0; c < b.length; c++) {
                var d = b[c],
                    e = d.isIntersecting,
                    f = d.target;
                if (d = a.fa.get(f)) {
                    var h = e || d.isIntersecting;
                    h !== d.isIntersecting && a.fa.set(f, {
                        asap: d.asap,
                        isIntersecting: h
                    });
                    h && Ai(a, f)
                }
            }
        }

        function Ai(a, b) {
            var c = a.vb,
                d = !(c && c.includes(b)),
                e = a.fa.get(b) || {
                    asap: !1,
                    isIntersecting: !1
                };
            c = e.asap;
            e = e.isIntersecting;
            var f = a.B.getVisibilityState();
            d && (c || e) && ("visible" == f || "hidden" == f || "prerender" == f && b.prerenderAllowed()) && (a.unschedule(b), a = a.B.win, (c || 0 >= b.getBuildPriority() ? a.setTimeout : a.requestIdleCallback || a.setTimeout)(function() {
                return b.mountInternal()
            }))
        }

        function Bi(a) {
            N(a, "scheduler", ui);
            return Cd(a, "scheduler")
        };
        var Ci = /nochunking=1/.test(self.location.hash),
            Di = v();

        function Ei(a) {
            N(a, "chunk", Fi);
            return Cd(a, "chunk")
        }

        function Gi(a, b, c) {
            if (Ci) Di.then(b);
            else {
                var d = Ei(a.documentElement || a);
                d.runForStartup(b);
                c && d.runForStartup(function() {
                    d.Me = !0
                })
            }
        }

        function Hi(a, b) {
            Ci ? Di.then(b) : Ei(a).run(b, 10)
        }

        function Ii(a) {
            this.state = "not_run";
            this.Fd = a
        }

        function Ji(a, b) {
            if ("run" != a.state) {
                a.state = "run";
                try {
                    a.Fd(b)
                } catch (c) {
                    throw a.Lf(), c;
                }
            }
        }
        Ii.prototype.Lf = function() {};
        Ii.prototype.yf = function() {
            return !1
        };
        Ii.prototype.hg = function() {
            return !1
        };

        function Ki(a, b, c) {
            Ii.call(this, a);
            this.bf = c
        }
        la(Ki, Ii);
        Ki.prototype.Lf = function() {
            Af(self.document)
        };
        Ki.prototype.yf = function() {
            return this.bf.ampdoc.isVisible()
        };
        Ki.prototype.hg = function() {
            return this.bf.ff
        };

        function Fi(a) {
            var b = this;
            this.ampdoc = a;
            this.G = a.win;
            this.O = new Dh;
            this.Oe = this.mf.bind(this);
            this.lb = 0;
            this.Eh = !(!this.G.navigator.scheduling || !this.G.navigator.scheduling.isInputPending);
            this.Oc = !1;
            this.Me = this.G.document.documentElement.hasAttribute("i-amphtml-no-boilerplate");
            this.G.addEventListener("message", function(c) {
                "amp-macro-task" == c.data && b.mf(null)
            });
            this.ff = !1;
            Fd(a, "viewer").then(function() {
                b.ff = !0
            });
            a.onVisibilityChanged(function() {
                a.isVisible() && b.Aa()
            })
        }
        Fi.prototype.run = function(a, b) {
            a = new Ii(a);
            this.O.enqueue(a, b);
            this.Aa()
        };
        Fi.prototype.runForStartup = function(a) {
            a = new Ki(a, this.G, this);
            this.O.enqueue(a, Number.POSITIVE_INFINITY);
            this.Aa()
        };

        function Li(a, b) {
            for (var c = a.O.peek(); c && "not_run" !== c.state;) a.O.dequeue(), c = a.O.peek();
            c && b && a.O.dequeue();
            return c
        }
        Fi.prototype.mf = function(a) {
            var b = this,
                c = Li(this, !0);
            if (!c) return this.Oc = !1, this.lb = 0, !1;
            try {
                var d = Date.now();
                Ji(c, a)
            } finally {
                Di.then().then().then().then().then().then().then().then().then(function() {
                    b.Oc = !1;
                    b.lb += Date.now() - d;
                    J().fine("CHUNK", c.Fd.displayName || c.Fd.name, "Chunk duration", Date.now() - d, b.lb);
                    b.Aa()
                })
            }
            return !0
        };

        function Mi(a) {
            a.Me && (a.Eh ? a.G.navigator.scheduling.isInputPending() : 5 < a.lb) ? (a.lb = 0, Ni(a)) : Di.then(function() {
                a.Oe(null)
            })
        }
        Fi.prototype.Aa = function() {
            if (!this.Oc) {
                var a = Li(this);
                a && (a.yf() ? (this.Oc = !0, Mi(this)) : a.hg() && this.G.requestIdleCallback ? Oi(this.G, this.Oe) : Ni(this))
            }
        };

        function Ni(a) {
            a.G.postMessage("amp-macro-task", "*")
        }

        function Oi(a, b) {
            function c(e) {
                if (15 > e.timeRemaining()) {
                    var f = 2E3 - (Date.now() - d);
                    0 >= f || e.didTimeout ? (J().fine("CHUNK", "Timed out", 2E3, e.didTimeout), b(e)) : (J().fine("CHUNK", "Rescheduling with", f, e.timeRemaining()), a.requestIdleCallback(c, {
                        timeout: f
                    }))
                } else J().fine("CHUNK", "Running idle callback with ", 15), b(e)
            }
            var d = Date.now();
            a.requestIdleCallback(c, {
                timeout: 2E3
            })
        };
        var Pi = {
            bubbles: !1
        };

        function Qi() {
            return !0
        }
        var Ri, Si = [];

        function Ti(a) {
            function b() {
                return c.apply(this, arguments) || this
            }
            var c = Ui(a);
            la(b, c);
            return b
        }

        function Ui(a) {
            function b() {
                var e = d.call(this) || this;
                e.createdCallback();
                return e
            }
            var c = Vi;
            if (a.__AMP_BASE_CE_CLASS) return a.__AMP_BASE_CE_CLASS;
            var d = a.HTMLElement;
            la(b, d);
            b.prototype.createdCallback = function() {
                this.Ja = this.sd = !1;
                this.Ta = null;
                this.ce = !1;
                this.la = this.Ma = null;
                this.Ya = "upgrading";
                this.everAttached = !1;
                this.o = this.B = null;
                this.ka = "nodisplay";
                this.ua = 0;
                this.Td = !1;
                this.warnOnMissingOverflow = !0;
                this.layoutScheduleTime = this.na = this.sizerElement = void 0;
                var e = a.__AMP_EXTENDED_ELEMENTS && a.__AMP_EXTENDED_ELEMENTS[this.localName];
                (this.M = e === ki ? null : e || null) || Si.push(this);
                this.A = null;
                this.zb = 1;
                this.fg = 0;
                this.mb = this.Sa = void 0;
                this.C = new si;
                this.M && this.C.signal("ready-upgrade");
                e = a;
                e = xd(e);
                this.Oh = (e = Ed(e, "performance") ? Bd(e, "performance") : null) && e.isPerformanceTrackingOn();
                this.pb = null;
                this.__AMP_UPG_RES && (this.__AMP_UPG_RES(this), delete this.__AMP_UPG_RES, delete this.__AMP_UPG_PRM)
            };
            b.prototype.signals = function() {
                return this.C
            };
            b.prototype.getAmpDoc = function() {
                return this.B
            };
            b.prototype.getResources = function() {
                return this.o
            };
            b.prototype.isUpgraded = function() {
                return 2 == this.zb
            };
            b.prototype.whenUpgraded = function() {
                return this.C.whenSignal("upgraded")
            };
            b.prototype.upgrade = function(e) {
                this.mb || 1 != this.zb || (this.M = e, this.C.signal("ready-upgrade"), this.everAttached && this.$c())
            };
            b.prototype.getUpgradeDelayMs = function() {
                return this.fg
            };
            b.prototype.xd = function(e, f) {
                this.A = e;
                this.fg = a.Date.now() - f;
                this.zb = 2;
                this.setReadyStateInternal("building");
                this.classList.remove("amp-unresolved");
                this.classList.remove("i-amphtml-unresolved");
                this.ng();
                this.ra("amp:attached");
                this.R1() || this.getResources().upgraded(this);
                this.C.signal("upgraded")
            };
            b.prototype.ng = function() {
                "nodisplay" != this.ka && this.A && !this.A.isLayoutSupported(this.ka) && (K(this.getAttribute("layout"), "The element did not specify a layout attribute. Check https://amp.dev/documentation/guides-and-tutorials/develop/style_and_layout/control_layout and the respective element documentation for details."), K(!1, "Layout not supported: " + this.ka))
            };
            b.prototype.getBuildPriority =
                function() {
                    return this.M ? this.M.getBuildPriority(this) : 3
                };
            b.prototype.getLayoutPriority = function() {
                return this.A ? this.A.getLayoutPriority() : 3
            };
            b.prototype.getDefaultActionAlias = function() {
                this.isUpgraded();
                return this.A.getDefaultActionAlias()
            };
            b.prototype.isBuilding = function() {
                return !!this.Ta
            };
            b.prototype.isBuilt = function() {
                return this.sd
            };
            b.prototype.whenBuilt = function() {
                return this.C.whenSignal("built")
            };
            b.prototype.buildInternal = function() {
                var e = this;
                if (this.Ta) return this.Ta;
                this.setReadyStateInternal("building");
                return this.Ta = this.gf().then(function() {
                    var f = e.Dg(),
                        h = Ge(a, "amp-consent-granular-consent"),
                        l = h && !f ? e.Eg() : null;
                    if (f || h && l) return Ud(e, "consentPolicyManager", "amp-consent").then(function(k) {
                        return k ? f ? k.whenPolicyUnblock(f) : k.whenPurposesUnblock(l) : !0
                    }).then(function(k) {
                        if (!k) throw Error("BLOCK_BY_CONSENT");
                    })
                }).then(function() {
                    return e.A.buildCallback()
                }).then(function() {
                    e.sd = !0;
                    e.classList.add("i-amphtml-built");
                    e.classList.remove("i-amphtml-notbuilt");
                    e.classList.remove("amp-notbuilt");
                    e.C.signal("built");
                    e.R1() ? e.setReadyStateInternal("building" != e.Ya ? e.Ya : "mounting") : (e.setReadyStateInternal("loading"), e.preconnect(!1));
                    e.Ja && e.ef();
                    e.Sa && P(e.ownerDocument.defaultView).delay(e.xg.bind(e), 1);
                    if (!e.getPlaceholder()) {
                        var f = e.createPlaceholder();
                        f && e.appendChild(f)
                    }
                }, function(f) {
                    e.C.rejectSignal("built", f);
                    e.R1() && e.setReadyStateInternal("error", f);
                    Lf(f) || If(f, e);
                    throw f;
                })
            };
            b.prototype.build = function() {
                var e = this;
                return this.Ta ? this.Ta : this.C.whenSignal("ready-upgrade").then(function() {
                    e.R1() && Bi(e.getAmpDoc()).scheduleAsap(e);
                    return e.whenBuilt()
                })
            };
            b.prototype.mountInternal = function() {
                var e = this;
                if (this.Ma) return this.Ma;
                this.la = this.la || new AbortController;
                var f = this.la.signal;
                return this.Ma = this.buildInternal().then(function() {
                    e.R1();
                    if (!f.aborted) {
                        e.setReadyStateInternal("mounting" != e.Ya ? e.Ya : e.M.usesLoading(e) ? "loading" : "mounting");
                        e.ce = !0;
                        var h = e.A.mountCallback(f);
                        return h ? h.then(Qi) : !1
                    }
                }).then(function(h) {
                    e.la = null;
                    if (f.aborted) throw Kf();
                    e.C.signal("mounted");
                    e.M.usesLoading(e) && !h || e.setReadyStateInternal("complete")
                }).catch(function(h) {
                    e.la =
                        null;
                    h && ("string" == typeof h ? h.startsWith("CANCELLED") : "string" == typeof h.message && h.message.startsWith("CANCELLED")) ? e.Ma = null : (e.C.rejectSignal("mounted", h), e.setReadyStateInternal("error", h));
                    throw h;
                })
            };
            b.prototype.mount = function() {
                var e = this;
                if (this.Ma) return this.Ma;
                this.la = this.la || new AbortController;
                var f = this.la.signal;
                return this.C.whenSignal("ready-upgrade").then(function() {
                    if (!e.R1()) return e.whenBuilt();
                    if (f.aborted) throw Kf();
                    Bi(e.getAmpDoc()).scheduleAsap(e);
                    return e.whenMounted()
                })
            };
            b.prototype.unmount = function() {
                this.Ja && this.pause();
                this.R1() ? (this.la && (this.la.abort(), this.la = null), Bi(this.getAmpDoc()).unschedule(this), this.ce && this.A.unmountCallback(), this.ce = !1, this.Ma = null, this.pe(), this.Ja && this.$c(!0)) : this.dg()
            };
            b.prototype.whenMounted = function() {
                return this.C.whenSignal("mounted")
            };
            b.prototype.whenLoaded = function() {
                return this.C.whenSignal("load-end")
            };
            b.prototype.ensureLoaded = function(e) {
                var f = this;
                return this.mount().then(function() {
                    if (f.R1()) return f.M.usesLoading(f) &&
                        f.A.ensureLoaded(), f.whenLoaded();
                    var h = f.Ia();
                    return h.whenBuilt().then(function() {
                        if (4 != h.getState() && ((3 != h.getState() || h.isMeasureRequested()) && h.measure(), h.isDisplayed())) return f.getResources().scheduleLayoutOrPreload(h, !0, e, !0), f.whenLoaded()
                    })
                })
            };
            b.prototype.setAsContainerInternal = function(e) {
                Bi(this.getAmpDoc()).setContainer(this, e)
            };
            b.prototype.removeAsContainerInternal = function() {
                Bi(this.getAmpDoc()).removeContainer(this)
            };
            b.prototype.setReadyStateInternal = function(e, f) {
                if (e !== this.Ya &&
                    (this.Ya = e, this.R1())) switch (e) {
                    case "loading":
                        this.C.signal("load-start");
                        this.C.reset("unload");
                        this.C.reset("load-end");
                        this.classList.add("i-amphtml-layout");
                        this.toggleLoading(!0);
                        this.ra("amp:load-start");
                        break;
                    case "complete":
                        this.C.signal("load-start");
                        this.C.signal("load-end");
                        this.C.reset("unload");
                        this.classList.add("i-amphtml-layout");
                        this.toggleLoading(!1);
                        yc(this, "load", null, Pi);
                        this.ra("amp:load-end");
                        break;
                    case "error":
                        this.C.rejectSignal("load-end", f), this.toggleLoading(!1), yc(this,
                            "error", f, Pi)
                }
            };
            b.prototype.preconnect = function(e) {
                var f = this;
                this.isUpgraded();
                e ? this.A.preconnectCallback(e) : Gi(this.getAmpDoc(), function() {
                    f.ownerDocument && f.ownerDocument.defaultView && f.A.preconnectCallback(e)
                })
            };
            b.prototype.R1 = function() {
                return this.M ? this.M.R1() : !1
            };
            b.prototype.deferredMount = function() {
                return this.M ? this.M.deferredMount(this) : !1
            };
            b.prototype.isAlwaysFixed = function() {
                return this.A ? this.A.isAlwaysFixed() : !1
            };
            b.prototype.updateLayoutBox = function(e, f) {
                var h = f = void 0 === f ? !1 : f;
                if (this.isBuilt()) this.onMeasure(h)
            };
            b.prototype.onMeasure = function() {
                this.isBuilt();
                try {
                    this.A.onLayoutMeasure()
                } catch (e) {
                    If(e, this)
                }
            };
            b.prototype.rf = function() {
                void 0 !== this.sizerElement || "responsive" !== this.ka && "intrinsic" !== this.ka || (this.sizerElement = this.querySelector("i-amphtml-sizer"));
                return this.sizerElement || null
            };
            b.prototype.vh = function(e) {
                if ("responsive" === this.ka) V(e, "paddingTop", "0");
                else if ("intrinsic" === this.ka) {
                    var f = e.querySelector(".i-amphtml-intrinsic-sizer");
                    f && f.setAttribute("src", "")
                }
            };
            b.prototype.Og = function() {
                var e =
                    this,
                    f = this.hasAttribute("media") || this.hasAttribute("sizes") && !this.hasAttribute("disable-inline-width") || this.hasAttribute("heights"),
                    h = this.ownerDocument.defaultView;
                f != !!this.pb && h && (f ? (this.pb = new li(h, function() {
                    return e.Ke()
                }), this.Ke()) : this.jf())
            };
            b.prototype.jf = function() {
                this.pb && (this.pb.dispose(), this.pb = null)
            };
            b.prototype.Ke = function() {
                var e = this.pb;
                if (e) {
                    e.start();
                    var f = this.getAttribute("media") || null,
                        h = f ? e.resolveMatchQuery(f) : !0;
                    this.classList.toggle("i-amphtml-hidden-by-media-query", !h);
                    var l = this.hasAttribute("disable-inline-width") ? null : this.getAttribute("sizes");
                    l && V(this, "width", e.resolveListQuery(l));
                    if (l = "responsive" === this.ka ? this.getAttribute("heights") : null) {
                        var k = this.rf();
                        k && V(k, "paddingTop", e.resolveListQuery(l))
                    }
                    e.complete();
                    this.Ia().requestMeasure()
                }
            };
            b.prototype.applySize = function(e, f, h) {
                var l = this.rf();
                l && (this.sizerElement = null, this.vh(l), this.fh(function() {
                    l && gc(l)
                }));
                void 0 !== e && V(this, "height", e, "px");
                void 0 !== f && V(this, "width", f, "px");
                h && (null != h.top && V(this,
                    "marginTop", h.top, "px"), null != h.right && V(this, "marginRight", h.right, "px"), null != h.bottom && V(this, "marginBottom", h.bottom, "px"), null != h.left && V(this, "marginLeft", h.left, "px"));
                this.Qg() && this.Ch();
                yc(this, "amp:size-changed")
            };
            b.prototype.connectedCallback = function() {
                void 0 === Ri && (Ri = "content" in self.document.createElement("template"));
                Ri || void 0 !== this.mb || (this.mb = !!lc(this, "template"));
                if (!this.mb && !this.Ja && ic(this)) {
                    this.Ja = !0;
                    this.everAttached || (this.classList.add("i-amphtml-element"), this.classList.add("i-amphtml-notbuilt"),
                        this.classList.add("amp-notbuilt"));
                    if (!this.B) {
                        var e = Wd(this.ownerDocument.defaultView).getAmpDoc(this);
                        this.B = e;
                        c(e, this, this.M)
                    }
                    this.o || (this.o = ae(this.B));
                    this.getResources().add(this);
                    if (this.everAttached) {
                        var f = this.reconstructWhenReparented();
                        f && this.pe();
                        this.isUpgraded() && (f && !this.R1() && this.getResources().upgraded(this), this.ef(), this.ra("amp:attached"));
                        this.M && this.R1() && this.$c()
                    } else {
                        this.everAttached = !0;
                        try {
                            var h = Q(this.ownerDocument.defaultView).isIe();
                            e = void 0 === h ? !1 : h;
                            var l = this.getAttribute("i-amphtml-layout");
                            if (l) {
                                var k = Ze(l);
                                "responsive" != k && "intrinsic" != k || !this.firstElementChild ? "nodisplay" == k && (Qe(this, !1), this.style.display = "") : (this.sizerElement = this.querySelector("i-amphtml-sizer") || void 0) && this.sizerElement.setAttribute("slot", "i-amphtml-svc");
                                var m = k
                            } else {
                                var n = this.getAttribute("layout"),
                                    q = this.getAttribute("width"),
                                    t = this.getAttribute("height"),
                                    w = this.getAttribute("sizes"),
                                    u = this.getAttribute("heights"),
                                    r = n ? Ze(n) : null;
                                K(void 0 !== r, 'Invalid "layout" value: %s, %s', n, this);
                                var G = q && "auto" !=
                                    q ? af(q) : q;
                                K(void 0 !== G, 'Invalid "width" value: %s, %s', q, this);
                                var y = t && "fluid" != t ? af(t) : t;
                                K(void 0 !== y, 'Invalid "height" value: %s, %s', t, this);
                                var X;
                                if (!(X = r && "fixed" != r && "fixed-height" != r || G && y)) {
                                    var rb = this.tagName;
                                    rb = rb.toUpperCase();
                                    X = void 0 === Ve[rb]
                                }
                                if (X) {
                                    var F = G;
                                    var L = y
                                } else {
                                    var I = this.tagName.toUpperCase();
                                    if (!Ve[I]) {
                                        var aa = this.ownerDocument,
                                            wa = I.replace(/^AMP\-/, ""),
                                            U = aa.createElement(wa);
                                        U.controls = !0;
                                        Pe(U, {
                                            position: "absolute",
                                            visibility: "hidden"
                                        });
                                        aa.body.appendChild(U);
                                        Ve[I] = {
                                            width: (U.offsetWidth ||
                                                1) + "px",
                                            height: (U.offsetHeight || 1) + "px"
                                        };
                                        aa.body.removeChild(U)
                                    }
                                    var Ua = Ve[I];
                                    F = G || "fixed-height" == r ? G : Ua.width;
                                    L = y || Ua.height
                                }
                                var E = r ? r : F || L ? "fluid" == L ? "fluid" : !L || F && "auto" != F ? L && F && (w || u) ? "responsive" : "fixed" : "fixed-height" : "container";
                                "fixed" != E && "fixed-height" != E && "responsive" != E && "intrinsic" != E || K(L, 'The "height" attribute is missing: %s', this);
                                "fixed-height" == E && K(!F || "auto" == F, 'The "width" attribute must be missing or "auto": %s', this);
                                "fixed" != E && "responsive" != E && "intrinsic" != E || K(F && "auto" !=
                                    F, 'The "width" attribute must be present and not "auto": %s', this);
                                "responsive" == E || "intrinsic" == E ? K(bf(F) == bf(L), 'Length units should be the same for "width" and "height": %s, %s, %s', q, t, this) : K(null === u, '"heights" attribute must be missing: %s', this);
                                this.classList.add("i-amphtml-layout-" + E);
                                $e(E) && this.classList.add("i-amphtml-layout-size-defined");
                                if ("nodisplay" == E) Qe(this, !1), this.style.display = "";
                                else if ("fixed" == E) Pe(this, {
                                    width: F,
                                    height: L
                                });
                                else if ("fixed-height" == E) V(this, "height", L);
                                else if ("responsive" ==
                                    E) {
                                    var Dc = this.ownerDocument.defaultView;
                                    null == Ye && (Ye = Ge(Dc, "layout-aspect-ratio-css") && Dc.CSS && Dc.CSS.supports && Dc.CSS.supports("aspect-ratio: 1/1") || !1);
                                    if (Ye) V(this, "aspect-ratio", cf(F) + "/" + cf(L));
                                    else {
                                        var Ec = this.ownerDocument.createElement("i-amphtml-sizer");
                                        Ec.setAttribute("slot", "i-amphtml-svc");
                                        Pe(Ec, {
                                            paddingTop: cf(L) / cf(F) * 100 + "%"
                                        });
                                        this.insertBefore(Ec, this.firstChild);
                                        this.sizerElement = Ec
                                    }
                                } else if ("intrinsic" == E) {
                                    var ce = fe(this)(Te);
                                    ce.firstElementChild.setAttribute("src", e && this.ownerDocument ?
                                        Se(this.ownerDocument, cf(F), cf(L)) : 'data:image/svg+xml;charset=utf-8,<svg height="' + L + '" width="' + F + '" xmlns="http://www.w3.org/2000/svg" version="1.1"/>');
                                    this.insertBefore(ce, this.firstChild);
                                    this.sizerElement = ce
                                } else "fill" != E && "container" != E && ("flex-item" == E ? (F && V(this, "width", F), L && V(this, "height", L)) : "fluid" == E && (this.classList.add("i-amphtml-layout-awaiting-size"), F && V(this, "width", F), V(this, "height", 0)));
                                this.setAttribute("i-amphtml-layout", E);
                                m = E
                            }
                            this.ka = m;
                            this.Og()
                        } catch (Gl) {
                            If(Gl, this)
                        }
                        this.M &&
                            this.$c();
                        this.isUpgraded() || (this.classList.add("amp-unresolved"), this.classList.add("i-amphtml-unresolved"), this.ra("amp:stubbed"))
                    }
                    this.toggleLoading(!0)
                }
            };
            b.prototype.Qg = function() {
                return this.classList.contains("i-amphtml-layout-awaiting-size")
            };
            b.prototype.Ch = function() {
                this.classList.remove("i-amphtml-layout-awaiting-size")
            };
            b.prototype.$c = function(e) {
                if (!this.R1()) this.cg();
                else if (!this.Ma)
                    if (Bi(this.getAmpDoc()).schedule(this), this.Ta) this.setReadyStateInternal(this.M && this.M.usesLoading(this) ?
                        "loading" : "mounting");
                    else if (this.setReadyStateInternal("building"), !e) {
                    var f = this.M.getPreconnects(this);
                    if (f && 0 < f.length) {
                        var h = this.getAmpDoc();
                        Gi(h, function() {
                            var l = h.win;
                            if (l) {
                                var k = $d(l);
                                f.forEach(function(m) {
                                    return k.url(h, m, !1)
                                })
                            }
                        })
                    }
                }
            };
            b.prototype.cg = function() {
                var e = this;
                if (!this.mb && 1 == this.zb) {
                    var f = new this.M(this);
                    this.zb = 4;
                    var h = a.Date.now(),
                        l = f.upgradeCallback();
                    l ? "function" == typeof l.then ? l.then(function(k) {
                        e.xd(k || f, h)
                    }).catch(function(k) {
                        e.zb = 3;
                        za(k)
                    }) : this.xd(l, h) : this.xd(f, h)
                }
            };
            b.prototype.disconnectedCallback = function() {
                this.disconnect(!1)
            };
            b.prototype.ef = function() {
                this.sd && this.A.attachedCallback()
            };
            b.prototype.disconnect = function(e) {
                this.mb || !this.Ja || !e && ic(this) || (e && this.classList.remove("i-amphtml-element"), this.Ja = !1, this.getResources().remove(this), this.A && this.A.detachedCallback(), this.R1() && this.unmount(), this.toggleLoading(!1), this.jf())
            };
            b.prototype.ra = function() {};
            b.prototype.prerenderAllowed = function() {
                return this.hasAttribute("noprerender") ? !1 : this.M ? this.M.prerenderAllowed(this) :
                    !1
            };
            b.prototype.isBuildRenderBlocking = function() {
                return this.A ? this.A.isBuildRenderBlocking() : !1
            };
            b.prototype.createPlaceholder = function() {
                return this.A ? this.A.createPlaceholderCallback() : null
            };
            b.prototype.createLoaderLogo = function() {
                return this.M ? this.M.createLoaderLogoCallback(this) : {}
            };
            b.prototype.renderOutsideViewport = function() {
                return this.A ? this.A.renderOutsideViewport() : !1
            };
            b.prototype.idleRenderOutsideViewport = function() {
                return this.A ? this.A.idleRenderOutsideViewport() : !1
            };
            b.prototype.getLayoutBox =
                function() {
                    return this.Ia().getLayoutBox()
                };
            b.prototype.getLayoutSize = function() {
                return this.Ia().getLayoutSize()
            };
            b.prototype.getOwner = function() {
                return this.Ia().getOwner()
            };
            b.prototype.getIntersectionChangeEntry = function() {
                var e = this.A ? this.A.getIntersectionElementLayoutBox() : this.getLayoutBox(),
                    f = this.getOwner(),
                    h = de(this.getAmpDoc()).getRect(),
                    l = f && f.getLayoutBox(),
                    k = Ub(e, l, h) || Tb(0, 0, 0, 0);
                f = k.width * k.height;
                var m = e.width * e.height;
                f = 0 === m ? 0 : f / m;
                if (m = h) k = Wb(k, -h.left, -h.top), e = Wb(e, -h.left, -h.top),
                    m = Wb(m, -h.left, -h.top);
                return {
                    time: "undefined" !== typeof performance && performance.now ? performance.now() : Date.now() - ti,
                    rootBounds: m,
                    boundingClientRect: e,
                    intersectionRect: k,
                    intersectionRatio: f
                }
            };
            b.prototype.Ia = function() {
                return this.getResources().getResourceForElement(this)
            };
            b.prototype.getResourceId = function() {
                return this.Ia().getId()
            };
            b.prototype.isRelayoutNeeded = function() {
                return this.A ? this.A.isRelayoutNeeded() : !1
            };
            b.prototype.getImpl = function(e) {
                var f = this;
                e = void 0 === e ? !0 : e;
                return (e ? this.build() :
                    this.gf()).then(function() {
                    return f.A
                })
            };
            b.prototype.gf = function() {
                var e = this;
                return this.C.whenSignal("ready-upgrade").then(function() {
                    e.cg();
                    return e.whenUpgraded()
                })
            };
            b.prototype.getApi = function() {
                return this.getImpl().then(function(e) {
                    return e.getApi()
                })
            };
            b.prototype.getLayout = function() {
                return this.ka
            };
            b.prototype.layoutCallback = function(e) {
                var f = this;
                this.isBuilt();
                if (e.aborted) return Promise.reject(Kf());
                this.ra("amp:load-start");
                var h = 0 == this.ua;
                this.C.reset("unload");
                h && this.C.signal("load-start");
                this.toggleLoading(!0);
                var l = qa(function() {
                    return f.A.layoutCallback()
                });
                this.preconnect(!0);
                this.classList.add("i-amphtml-layout");
                return l.then(function() {
                    if (e.aborted) throw Kf();
                    h && f.C.signal("load-end");
                    f.setReadyStateInternal("complete");
                    f.ua++;
                    f.toggleLoading(!1);
                    f.Td || (f.A.firstLayoutCompleted(), f.Td = !0, f.ra("amp:load-end"))
                }, function(k) {
                    if (e.aborted) throw Kf();
                    h && f.C.rejectSignal("load-end", k);
                    f.setReadyStateInternal("error", k);
                    f.ua++;
                    f.toggleLoading(!1);
                    throw k;
                })
            };
            b.prototype.pause = function() {
                this.isBuilt() &&
                    (this.A.pauseCallback(), !this.R1() && this.A.unlayoutOnPause() && this.dg())
            };
            b.prototype.resume = function() {
                this.isBuilt() && this.A.resumeCallback()
            };
            b.prototype.unlayoutCallback = function() {
                if (!this.isBuilt()) return !1;
                this.C.signal("unload");
                var e = this.A.unlayoutCallback();
                e && this.pe();
                this.ra("amp:unload");
                return e
            };
            b.prototype.dg = function() {
                this.Ia().unlayout();
                this.Ja && this.o && this.o.schedulePass()
            };
            b.prototype.pe = function() {
                this.ua = 0;
                this.Td = !1;
                this.C.reset("mounted");
                this.C.reset("render-start");
                this.C.reset("load-start");
                this.C.reset("load-end");
                this.C.reset("ini-load")
            };
            b.prototype.reconstructWhenReparented = function() {
                return this.A ? this.A.reconstructWhenReparented() : !1
            };
            b.prototype.collapse = function() {
                this.A && this.A.collapse()
            };
            b.prototype.collapsedCallback = function(e) {
                this.A && this.A.collapsedCallback(e)
            };
            b.prototype.expand = function() {
                this.A && this.A.expand()
            };
            b.prototype.mutatedAttributesCallback = function(e) {
                this.A && this.A.mutatedAttributesCallback(e)
            };
            b.prototype.enqueAction = function(e) {
                this.isBuilt() ?
                    this.nf(e, !1) : (void 0 === this.Sa && (this.Sa = []), this.Sa.push(e), this.build())
            };
            b.prototype.xg = function() {
                var e = this;
                if (this.Sa) {
                    var f = this.Sa;
                    this.Sa = null;
                    f.forEach(function(h) {
                        e.nf(h, !0)
                    })
                }
            };
            b.prototype.nf = function(e, f) {
                try {
                    this.A.executeAction(e, f)
                } catch (h) {
                    za("Action execution failed:", h, e.node.tagName, e.method)
                }
            };
            b.prototype.Dg = function() {
                var e = this.getAttribute("data-block-on-consent");
                if (null === e)
                    if ((e = this.getAmpDoc().getMetaByName("amp-consent-blocking")) ? (e = e.toUpperCase().replace(/\s+/g, ""),
                            e = e.split(",").includes(this.tagName)) : e = !1, e) e = "default", this.setAttribute("data-block-on-consent", e);
                    else return null;
                return "" == e || "default" == e ? this.A.getConsentPolicy() : e
            };
            b.prototype.Eg = function() {
                var e, f;
                return null == (e = this.getAttribute("data-block-on-consent-purposes") || null) ? void 0 : null == (f = e.replace(/\s+/g, "")) ? void 0 : f.split(",")
            };
            b.prototype.getRealChildNodes = function() {
                return pc(this, function(e) {
                    return !Wi(e)
                })
            };
            b.prototype.getRealChildren = function() {
                return nc(this, function(e) {
                    return !Wi(e)
                })
            };
            b.prototype.getPlaceholder = function() {
                return oc(this, function(e) {
                    return e.hasAttribute("placeholder") && !("placeholder" in e)
                })
            };
            b.prototype.togglePlaceholder = function(e) {
                if (e)(e = this.getPlaceholder()) && e.classList.remove("amp-hidden");
                else {
                    /^[\w-]+$/.test("placeholder");
                    e = (void 0 !== Zb ? Zb : Zb = $b(this)) ? this.querySelectorAll("> [placeholder]".replace(/^|,/g, "$&:scope ")) : sc(this, "> [placeholder]");
                    for (var f = 0; f < e.length; f++) "placeholder" in e[f] || e[f].classList.add("amp-hidden")
                }
            };
            b.prototype.getFallback =
                function() {
                    return qc(this, "fallback")
                };
            b.prototype.toggleFallback = function(e) {
                var f = this.Ia().getState();
                if (this.R1() || !e || 0 != f && 1 != f && 2 != f)
                    if (this.classList.toggle("amp-notsupported", e), 1 == e) {
                        var h = this.getFallback();
                        h && Cd(this.getAmpDoc(), "owners").scheduleLayout(this, h)
                    }
            };
            b.prototype.renderStarted = function() {
                this.C.signal("render-start");
                this.togglePlaceholder(!1);
                this.toggleLoading(!1)
            };
            b.prototype.Vg = function(e) {
                var f = 0 < this.ua || this.C.get("render-start");
                (e = "nodisplay" == this.ka || this.hasAttribute("noloading") ||
                    f && !e) || (e = this.tagName.toUpperCase(), e = !(We[e] || ("AMP-VIDEO" == e ? 0 : Xe.test(e))));
                return e || Wi(this) ? !1 : !0
            };
            b.prototype.toggleLoading = function(e, f) {
                f = void 0 === f ? !1 : f;
                if (this.ownerDocument && this.ownerDocument.defaultView) {
                    var h = Dd(this.getAmpDoc(), "loadingIndicator");
                    h && ((e = e && this.Vg(f)) ? h.track(this) : h.untrack(this))
                }
            };
            b.prototype.getOverflowElement = function() {
                void 0 === this.na && (this.na = qc(this, "overflow")) && (this.na.hasAttribute("tabindex") || this.na.setAttribute("tabindex", "0"), this.na.hasAttribute("role") ||
                    this.na.setAttribute("role", "button"));
                return this.na
            };
            b.prototype.overflowCallback = function(e, f, h) {
                var l = this;
                this.getOverflowElement();
                this.na ? (this.na.classList.toggle("amp-visible", e), this.na.onclick = e ? function() {
                    var k = Zd(l.getAmpDoc());
                    k.forceChangeSize(l, f, h);
                    k.mutateElement(l, function() {
                        l.overflowCallback(!1, f, h)
                    })
                } : null) : e && this.warnOnMissingOverflow && H().warn("CustomElement", "Cannot resize element and overflow is not available", this)
            };
            b.prototype.fh = function(e) {
                var f = void 0 === f ? !1 : f;
                this.B ?
                    Zd(this.getAmpDoc()).mutateElement(this, e, f) : e()
            };
            ea.Object.defineProperties(b.prototype, {
                readyState: {
                    configurable: !0,
                    enumerable: !0,
                    get: function() {
                        return this.Ya
                    }
                }
            });
            a.__AMP_BASE_CE_CLASS = b;
            return a.__AMP_BASE_CE_CLASS
        }

        function Wi(a) {
            var b = "string" == typeof a ? a : a.tagName;
            return b && b.toLowerCase().startsWith("i-") || a.tagName && (a.hasAttribute("placeholder") || a.hasAttribute("fallback") || a.hasAttribute("overflow")) ? !0 : !1
        };
        var Xi = new WeakMap;

        function Yi(a) {
            a.__AMP_EXTENDED_ELEMENTS || (a.__AMP_EXTENDED_ELEMENTS = {});
            return a.__AMP_EXTENDED_ELEMENTS
        }

        function Zi(a, b, c) {
            var d = $i(a, c);
            d ? d.then(function() {
                return aj(a, b, c)
            }) : aj(a, b, c)
        }

        function aj(a, b, c) {
            var d = Yi(a);
            if (!d[b]) bj(a, b, c);
            else if (d[b] != c) {
                K(d[b] == ki, "%s is already registered. The script tag for %s is likely included twice in the page.", b, b);
                d[b] = c;
                for (var e = 0; e < Si.length; e++) {
                    var f = Si[e];
                    if (f.tagName.toLowerCase() == b && f.ownerDocument.defaultView == a) {
                        try {
                            f.upgrade(c)
                        } catch (h) {
                            If(h, f)
                        }
                        Si.splice(e--, 1)
                    }
                }
            }
        }

        function $i(a, b) {
            if (b.requiresShadowDom() && !a.Element.prototype.attachShadow) return Yd(a).importUnwrapped(a, "amp-shadow-dom-polyfill")
        }

        function cj(a) {
            Sd(a.getHeadNode()).forEach(function(b) {
                var c = b.extensionId;
                a.declareExtension(c, b.extensionVersion);
                dj(a.win, c)
            });
            a.isBodyAvailable() && a.setExtensionsKnown()
        }

        function dj(a, b) {
            Yi(a)[b] || bj(a, b, ki)
        }

        function bj(a, b, c) {
            Yi(a)[b] = c;
            var d = Ti(a);
            a.customElements.define(b, d)
        }

        function Vi(a, b, c) {
            Xi.has(a) || (Xi.set(a, !0), cj(a));
            b = b.localName;
            c || a.declaresExtension(b) || Yd(a.win).installExtensionForDoc(a, b, "0.1")
        };
        var ej = "alt aria-describedby aria-label aria-labelledby crossorigin referrerpolicy title sizes srcset src".split(" ");

        function fj(a) {
            W.call(this, a);
            this.lc = !0;
            this.Yc = this.Zc = this.F = null;
            this.Xf = 0
        }
        la(fj, W);
        fj.requiresShadowDom = W.requiresShadowDom;
        fj.getBuildPriority = W.getBuildPriority;
        fj.createLoaderLogoCallback = W.createLoaderLogoCallback;
        fj.deferredMount = W.deferredMount;
        fj.R1 = function() {
            return !1
        };
        fj.prerenderAllowed = function() {
            return !0
        };
        fj.usesLoading = function() {
            return !0
        };
        fj.getPreconnects = function(a) {
            var b = a.getAttribute("src");
            if (b) return [b];
            if (a = a.getAttribute("srcset"))
                if (a = /\S+/.exec(a)) return [a[0]];
            return null
        };
        g = fj.prototype;
        g.mutatedAttributesCallback = function(a) {
            if (this.F) {
                var b = ej.filter(function(c) {
                    return void 0 !== a[c]
                });
                a.src && !a.srcset && this.element.hasAttribute("srcset") && (this.element.removeAttribute("srcset"), b.push("srcset"), this.user().warn("amp-img", "Removed [srcset] since [src] was mutated. Recommend adding a [srcset] binding to support responsive images.", this.element));
                this.propagateAttributes(b, this.F, !0);
                this.propagateDataset(this.F);
                Re(this.F);
                fj.R1() && !this.F.complete && this.setReadyState("loading")
            }
        };
        g.preconnectCallback = function(a) {
            var b = this.element.getAttribute("src");
            b ? $d(this.win).url(this.getAmpDoc(), b, a) : (b = this.element.getAttribute("srcset")) && (b = /\S+/.exec(b)) && $d(this.win).url(this.getAmpDoc(), b[0], a)
        };
        g.isLayoutSupported = function(a) {
            return $e(a)
        };
        g.Ob = function() {
            if (this.F) return this.F;
            this.lc = !this.element.hasAttribute("fallback");
            var a = this.element.hasAttribute("i-amphtml-ssr");
            a && (this.F = rc(this.element, "> img:not([placeholder])"));
            this.F = this.F || new Image;
            this.F.setAttribute("decoding", "async");
            this.element.id && this.F.setAttribute("amp-img-id", this.element.id);
            "img" == this.element.getAttribute("role") && (this.element.removeAttribute("role"), this.user().error("amp-img", "Setting role=img on amp-img elements breaks screen readers please just set alt or ARIA attributes, they will be correctly propagated for the underlying <img> element."));
            if (this.F && !this.element.hasAttribute("i-amphtml-ssr") && !this.element.hasAttribute("sizes") && !this.F.hasAttribute("sizes")) {
                var b = this.element.getAttribute("srcset");
                if (b && !/[0-9]+x(?:,|$)/.test(b) && (b = this.element.getLayoutSize().width, this.F.hasAttribute("sizes") ? b > this.Xf : 1)) {
                    var c = this.getViewport().getWidth(),
                        d = "(max-width: " + c + "px) " + b + "px, ",
                        e = b + "px";
                    "fixed" !== this.getLayout() && (e = Math.max(Math.round(100 * b / c), 100) + "vw");
                    this.F.setAttribute("sizes", d + e);
                    this.Xf = b
                }
            }
            this.propagateAttributes(ej,
                this.F);
            this.propagateDataset(this.F);
            Re(this.F);
            this.applyFillContent(this.F, !0);
            b = this.element;
            c = this.F;
            b.hasAttribute("object-fit") && V(c, "object-fit", b.getAttribute("object-fit"));
            b.hasAttribute("object-position") && V(c, "object-position", b.getAttribute("object-position"));
            a || this.element.appendChild(this.F);
            return this.F
        };
        g.reconstructWhenReparented = function() {
            return !1
        };
        g.mountCallback = function() {
            var a = this,
                b = !!this.F,
                c = this.Ob();
            b || (gf(c, "load", function() {
                a.setReadyState("complete");
                a.firstLayoutCompleted();
                gj(a)
            }), gf(c, "error", function(d) {
                a.setReadyState("error", d);
                hj(a)
            }));
            c.complete ? (this.setReadyState("complete"), this.firstLayoutCompleted(), gj(this)) : this.setReadyState("loading")
        };
        g.unmountCallback = function() {
            var a = this.F;
            a && !a.complete && (a.src = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs=", gc(a), this.F = null)
        };
        g.ensureLoaded = function() {
            this.F.loading = "eager"
        };
        g.layoutCallback = function() {
            var a = this;
            this.Ob();
            var b = this.F;
            this.Zc = gf(b, "load", function() {
                return gj(a)
            });
            this.Yc = gf(b, "error", function() {
                return hj(a)
            });
            return 0 >= this.element.getLayoutSize().width ? v() : this.loadPromise(b)
        };
        g.unlayoutCallback = function() {
            if (!fj.R1()) {
                this.Yc && (this.Yc(), this.Yc = null);
                this.Zc && (this.Zc(), this.Zc = null);
                var a = this.F;
                a && !a.complete && (a.src = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs=", gc(a), this.F = null);
                return !0
            }
        };
        g.firstLayoutCompleted = function() {
            var a = this.getPlaceholder();
            a && a.classList.contains("i-amphtml-blurry-placeholder") ? Oe(a, {
                opacity: 0
            }) : this.togglePlaceholder(!1)
        };

        function gj(a) {
            !a.lc && a.F.classList.contains("i-amphtml-ghost") && (a.F.classList.remove("i-amphtml-ghost"), a.toggleFallback(!1))
        }

        function hj(a) {
            a.lc && (a.F.classList.add("i-amphtml-ghost"), a.toggleFallback(!0), a.togglePlaceholder(!1), a.lc = !1)
        }
        g.propagateDataset = function(a) {
            for (var b in a.dataset) b in this.element.dataset || delete a.dataset[b];
            for (var c in this.element.dataset) c.startsWith("ampBind") && "ampBind" !== c || a.dataset[c] !== this.element.dataset[c] && (a.dataset[c] = this.element.dataset[c])
        };

        function ij(a, b, c) {
            var d = this;
            this.S = P(a);
            this.Lg = b;
            this.wg = c || 0;
            this.ya = -1;
            this.ge = 0;
            this.Za = !1;
            this.qg = function() {
                d.Hc()
            }
        }
        ij.prototype.isPending = function() {
            return -1 != this.ya
        };
        ij.prototype.schedule = function(a) {
            var b = a || this.wg;
            this.Za && 10 > b && (b = 10);
            var c = Date.now() + b;
            return !this.isPending() || -10 > c - this.ge ? (this.cancel(), this.ge = c, this.ya = this.S.delay(this.qg, b), !0) : !1
        };
        ij.prototype.Hc = function() {
            this.ya = -1;
            this.ge = 0;
            this.Za = !0;
            this.Lg();
            this.Za = !1
        };
        ij.prototype.cancel = function() {
            this.isPending() && (this.S.cancel(this.ya), this.ya = -1)
        };

        function jj(a) {
            this.win = a;
            this.og = this.gh.bind(this);
            this.pg = this.hh.bind(this);
            this.nd = this.Pe = this.od = null;
            this.qc = "ontouchstart" in a || void 0 !== a.navigator.maxTouchPoints && 0 < a.navigator.maxTouchPoints || void 0 !== a.DocumentTouch;
            J().fine("Input", "touch detected:", this.qc);
            this.Tb = !1;
            this.win.document.addEventListener("keydown", this.og);
            this.win.document.addEventListener("mousedown", this.pg);
            this.Id = !0;
            this.Gf = 0;
            this.Ih = new Y;
            this.Hf = new Y;
            this.Yd = new Y;
            this.qc && (this.Id = !this.qc, this.od = this.ih.bind(this),
                hf(a.document, "mousemove", this.od))
        }
        g = jj.prototype;
        g.setupInputModeClasses = function(a) {
            var b = this;
            this.onTouchDetected(function(c) {
                kj(b, a, "amp-mode-touch", c)
            }, !0);
            this.onMouseDetected(function(c) {
                kj(b, a, "amp-mode-mouse", c)
            }, !0);
            this.onKeyboardStateChanged(function(c) {
                kj(b, a, "amp-mode-keyboard-active", c)
            }, !0)
        };
        g.isTouchDetected = function() {
            return this.qc
        };
        g.onTouchDetected = function(a, b) {
            b && a(this.isTouchDetected());
            return this.Ih.add(a)
        };
        g.isMouseDetected = function() {
            return this.Id
        };
        g.onMouseDetected = function(a, b) {
            b && a(this.isMouseDetected());
            return this.Hf.add(a)
        };
        g.isKeyboardActive = function() {
            return this.Tb
        };
        g.onKeyboardStateChanged = function(a, b) {
            b && a(this.isKeyboardActive());
            return this.Yd.add(a)
        };

        function kj(a, b, c, d) {
            b.waitForBodyOpen().then(function(e) {
                be(a.win).mutate(function() {
                    e.classList.toggle(c, d)
                })
            })
        }
        g.gh = function(a) {
            this.Tb || a.defaultPrevented || (a = a.target, a && ("INPUT" == a.tagName || "TEXTAREA" == a.tagName || "SELECT" == a.tagName || "OPTION" == a.tagName || a.hasAttribute("contenteditable"))) || (this.Tb = !0, this.Yd.fire(!0), J().fine("Input", "keyboard activated"))
        };
        g.hh = function() {
            this.Tb && (this.Tb = !1, this.Yd.fire(!1), J().fine("Input", "keyboard deactivated"))
        };
        g.ih = function(a) {
            var b = this;
            if (a.sourceCapabilities && a.sourceCapabilities.firesTouchEvents) this.Ff();
            else {
                this.nd || (this.nd = this.eh.bind(this), this.Pe = this.Ff.bind(this));
                var c, d = jf(this.win.document, function(e) {
                    c = e
                });
                return P(this.win).timeoutPromise(300, d).then(this.Pe, function() {
                    c && c();
                    b.nd()
                })
            }
        };
        g.eh = function() {
            this.Id = !0;
            this.Hf.fire(!0);
            J().fine("Input", "mouse detected")
        };
        g.Ff = function() {
            this.Gf++;
            3 >= this.Gf ? hf(this.win.document, "mousemove", this.od) : J().fine("Input", "mouse detection failed")
        };

        function lj() {
            W.apply(this, arguments)
        }
        la(lj, W);
        lj.requiresShadowDom = W.requiresShadowDom;
        lj.getPreconnects = W.getPreconnects;
        lj.getBuildPriority = W.getBuildPriority;
        lj.createLoaderLogoCallback = W.createLoaderLogoCallback;
        lj.usesLoading = W.usesLoading;
        lj.deferredMount = W.deferredMount;
        lj.R1 = W.R1;
        lj.prerenderAllowed = function() {
            return !0
        };
        lj.prototype.isLayoutSupported = function(a) {
            return "container" == a || $e(a)
        };
        lj.prototype.buildCallback = function() {
            if ("container" != this.getLayout()) {
                var a = this.win.document.createElement("div");
                this.applyFillContent(a);
                this.getRealChildNodes().forEach(function(b) {
                    a.appendChild(b)
                });
                this.element.appendChild(a)
            }
        };

        function mj(a, b) {
            return Yd(a.win).installExtensionForDoc(a, "amp-loader").then(function() {
                return Td(b, "loader", "amp-loader")
            })
        }

        function nj(a, b, c, d, e) {
            var f = e = void 0 === e ? a.win.Date.now() : e,
                h = b.ownerDocument.createElement("div");
            mj(a, b).then(function(l) {
                var k = a.win.Date.now() - f;
                l.initializeLoader(b, h, k, c, d)
            });
            return h
        };

        function oj(a, b) {
            var c = void 0 === c ? {} : c;
            var d = c.threshold,
                e = c.needsRootBounds;
            c = xc(b) && e ? b.document : void 0;
            return new b.IntersectionObserver(a, {
                threshold: d,
                root: c
            })
        }
        new WeakMap;
        new WeakMap;
        var pj = ['<div slot=i-amphtml-svc class="i-amphtml-svc i-amphtml-loading-container i-amphtml-fill-content amp-hidden"></div>'];

        function qj(a) {
            this.B = a;
            a = a.win;
            var b = this.Ng.bind(this);
            this.Pd = oj(function(c) {
                return c.forEach(b)
            }, a);
            this.Ra = new WeakMap
        }
        g = qj.prototype;
        g.dispose = function() {
            this.Pd.disconnect()
        };
        g.track = function(a) {
            this.Pd.observe(a)
        };
        g.untrack = function(a) {
            this.Pd.unobserve(a);
            this.cf(a)
        };
        g.Ng = function(a) {
            var b = a.boundingClientRect,
                c = b.width,
                d = b.height;
            b = a.target;
            a = a.isIntersecting && 20 < c && 20 < d;
            var e = this.Ra.get(b);
            a !== (e && e.shown || !1) && (a && !e && (e = Date.now(), c = nj(this.B, b, c, d, e), d = fe(this.B.win.document)(pj), d.appendChild(c), b.appendChild(d), e = {
                shown: !1,
                loader: c,
                container: d
            }, this.Ra.set(b, e)), e && (e.shown = a, e.container.classList.toggle("amp-hidden", !a), e.loader.classList.toggle("amp-active", a)))
        };
        g.cf = function(a) {
            var b = this.Ra.get(a);
            b && (this.Ra.delete(a), gc(b.container))
        };

        function rj(a) {
            var b = this;
            this.win = a;
            this.oh = 6E4;
            this.R = [];
            this.Jf = new Y;
            this.$e = function(c) {
                bb(c.target) && sj(b, c.target)
            };
            this.Ze = function() {
                P(a).delay(function() {
                    b.win.document.activeElement && sj(b, b.win.document.activeElement)
                }, 500)
            };
            this.win.document.addEventListener("focus", this.$e, !0);
            this.win.addEventListener("blur", this.Ze)
        }
        g = rj.prototype;
        g.cf = function() {
            this.win.document.removeEventListener("focus", this.$e, !0);
            this.win.removeEventListener("blur", this.Ze)
        };
        g.onFocus = function(a) {
            return this.Jf.add(a)
        };

        function sj(a, b) {
            var c = Date.now();
            0 == a.R.length || a.R[a.R.length - 1].el != b ? a.R.push({
                el: b,
                time: c
            }) : a.R[a.R.length - 1].time = c;
            a.purgeBefore(c - a.oh);
            a.Jf.fire(b)
        }
        g.getLast = function() {
            return 0 == this.R.length ? null : this.R[this.R.length - 1].el
        };
        g.purgeBefore = function(a) {
            for (var b = this.R.length - 1, c = 0; c < this.R.length; c++)
                if (this.R[c].time >= a) {
                    b = c - 1;
                    break
                } - 1 != b && this.R.splice(0, b + 1)
        };
        g.hasDescendantsOf = function(a) {
            this.win.document.activeElement && sj(this, this.win.document.activeElement);
            for (var b = 0; b < this.R.length; b++)
                if (a.contains(this.R[b].el)) return !0;
            return !1
        };

        function tj(a) {
            var b = this;
            this.ampdoc = a;
            this.win = a.win;
            this.o = ae(a);
            this.K = de(this.ampdoc);
            this.I = be(this.win);
            this.hd = new rj(this.win);
            this.hd.onFocus(function(c) {
                uj(b, c)
            })
        }
        g = tj.prototype;
        g.forceChangeSize = function(a, b, c, d, e) {
            vj(this, Z(a), b, c, e, void 0, !0, d)
        };
        g.requestChangeSize = function(a, b, c, d, e) {
            var f = this;
            return new Promise(function(h, l) {
                vj(f, Z(a), b, c, d, e, !1, function(k) {
                    k ? h() : l(Error("changeSize attempt denied"))
                })
            })
        };
        g.expandElement = function(a) {
            Z(a).completeExpand();
            this.o.schedulePass(70)
        };
        g.attemptCollapse = function(a) {
            var b = this;
            return new Promise(function(c, d) {
                vj(b, Z(a), 0, 0, void 0, void 0, !1, function(e) {
                    e ? (Z(a).completeCollapse(), c()) : d(J().createExpectedError("collapse attempt denied"))
                })
            })
        };
        g.collapseElement = function(a) {
            var b = this.K.getLayoutRect(a);
            0 != b.width && 0 != b.height && (Ge(this.win, "dirty-collapse-element") ? this.dirtyElement(a) : this.o.setRelayoutTop(b.top));
            Z(a).completeCollapse();
            this.o.schedulePass(70)
        };
        g.measureElement = function(a) {
            return this.I.measurePromise(a)
        };
        g.mutateElement = function(a, b, c) {
            return wj(this, a, null, b, c)
        };
        g.measureMutateElement = function(a, b, c) {
            return wj(this, a, b, c)
        };

        function wj(a, b, c, d, e) {
            function f() {
                var k = a.K.getLayoutRect(b);
                return 0 != k.width && 0 != k.height ? k.top : -1
            }
            var h = void 0 === e ? !1 : e,
                l = -1;
            return a.I.runPromise({
                measure: function() {
                    c && c();
                    h || (l = f())
                },
                mutate: function() {
                    d();
                    if (!h) {
                        b.classList.contains("i-amphtml-element") && Z(b).requestMeasure();
                        for (var k = b.getElementsByClassName("i-amphtml-element"), m = 0; m < k.length; m++) Z(k[m]).requestMeasure();
                        a.o.schedulePass(70); - 1 != l && a.o.setRelayoutTop(l);
                        a.I.measure(function() {
                            var n = f(); - 1 != n && n != l && (a.o.setRelayoutTop(n),
                                a.o.schedulePass(70));
                            a.o.maybeHeightChanged()
                        })
                    }
                }
            })
        }
        g.dirtyElement = function(a) {
            var b = !1;
            a.classList.contains("i-amphtml-element") ? (a = Z(a), this.o.setRelayoutTop(a.getLayoutBox().top)) : b = !0;
            this.o.schedulePass(70, b)
        };

        function uj(a, b) {
            var c = kc(b, function(e) {
                return !!Z(e)
            });
            if (c) {
                b = Z(c);
                var d = b.getPendingChangeSize();
                void 0 !== d && vj(a, b, d.height, d.width, d.margins, void 0, !0)
            }
        }

        function vj(a, b, c, d, e, f, h, l) {
            b.hasBeenMeasured() && !e ? xj(a, b, c, d, void 0, f, h, l) : a.I.measure(function() {
                b.hasBeenMeasured() || b.measure();
                if (e) {
                    var k = a.win.getComputedStyle(b.element) || Me;
                    k = {
                        top: parseInt(k.marginTop, 10) || 0,
                        right: parseInt(k.marginRight, 10) || 0,
                        bottom: parseInt(k.marginBottom, 10) || 0,
                        left: parseInt(k.marginLeft, 10) || 0
                    };
                    k = {
                        newMargins: e,
                        currentMargins: k
                    }
                } else k = void 0;
                xj(a, b, c, d, k, f, h, l)
            })
        }

        function xj(a, b, c, d, e, f, h, l) {
            b.resetPendingChangeSize();
            var k = b.getLayoutSize(),
                m;
            if (!(m = void 0 !== c && c != k.height || void 0 !== d && d != k.width) && (m = void 0 !== e)) {
                m = e.currentMargins;
                var n = e.newMargins;
                m = void 0 !== n.top && n.top != m.top || void 0 !== n.right && n.right != m.right || void 0 !== n.bottom && n.bottom != m.bottom || void 0 !== n.left && n.left != m.left
            }
            m ? (a.o.updateOrEnqueueMutateTask(b, {
                resource: b,
                newHeight: c,
                newWidth: d,
                marginChange: e,
                event: f,
                force: h,
                callback: l
            }), a.o.schedulePassVsync()) : (void 0 === c && void 0 === d && void 0 ===
                e && J().error("Mutator", "attempting to change size with undefined dimensions", b.debugid), l && l(!0))
        };

        function yj(a) {
            return B(a) ? a : [a]
        }

        function zj(a) {
            this.o = ae(a)
        }
        g = zj.prototype;
        g.setOwner = function(a, b) {
            b.contains(a);
            Z(a) && Z(a).updateOwner(b);
            a.__AMP__OWNER = b;
            a = a.getElementsByClassName("i-amphtml-element");
            for (b = 0; b < a.length; b++) {
                var c = a[b];
                Z(c) && Z(c).updateOwner(void 0)
            }
        };
        g.schedulePreload = function(a, b) {
            Aj(this, this.o.getResourceForElement(a), yj(b))
        };
        g.scheduleLayout = function(a, b) {
            Aj(this, this.o.getResourceForElement(a), yj(b))
        };
        g.schedulePause = function(a, b) {
            var c = this.o.getResourceForElement(a);
            b = yj(b);
            Bj(this, c, b, function(d) {
                d.pause()
            })
        };
        g.scheduleResume = function(a, b) {
            a = this.o.getResourceForElement(a);
            b = yj(b);
            Bj(this, a, b, function(c) {
                c.resume()
            })
        };
        g.scheduleUnlayout = function(a, b) {
            a = this.o.getResourceForElement(a);
            b = yj(b);
            Bj(this, a, b, function(c) {
                c.unlayout()
            })
        };
        g.requireLayout = function(a) {
            var b = [];
            Cj(this, a, function(c) {
                b.push(c.element.ensureLoaded())
            });
            return Promise.all(b)
        };

        function Bj(a, b, c, d) {
            c = p(c);
            for (var e = c.next(); !e.done; e = c.next()) e = e.value, b.element.contains(e), Cj(a, e, d)
        }

        function Cj(a, b, c) {
            if (b.classList.contains("i-amphtml-element")) c(a.o.getResourceForElement(b)), (b = b.getPlaceholder()) && Cj(a, b, c);
            else {
                b = b.getElementsByClassName("i-amphtml-element");
                for (var d = [], e = 0; e < b.length; e++) {
                    for (var f = b[e], h = !1, l = 0; l < d.length; l++)
                        if (d[l].contains(f)) {
                            h = !0;
                            break
                        }
                    h || (d.push(f), c(a.o.getResourceForElement(f)))
                }
            }
        }

        function Aj(a, b, c) {
            Bj(a, b, c, function(d) {
                d.element.ensureLoaded(b.getLayoutPriority())
            })
        };

        function Dj(a, b) {
            if ("referrerPolicy" in Image.prototype) return Ej(a, b, !0);
            var c = hc(a.document);
            c.onload = function() {
                Ej(c.contentWindow, b)
            };
            a.document.body.appendChild(c);
            return c
        }

        function Ej(a, b, c) {
            var d = c = void 0 === c ? !1 : c;
            a = new a.Image;
            d && (a.referrerPolicy = "no-referrer");
            a.src = b;
            return a
        };

        function Fj(a) {
            W.call(this, a);
            this.ye = null
        }
        la(Fj, W);
        Fj.requiresShadowDom = W.requiresShadowDom;
        Fj.getPreconnects = W.getPreconnects;
        Fj.getBuildPriority = W.getBuildPriority;
        Fj.createLoaderLogoCallback = W.createLoaderLogoCallback;
        Fj.usesLoading = W.usesLoading;
        Fj.prerenderAllowed = W.prerenderAllowed;
        Fj.deferredMount = W.deferredMount;
        Fj.R1 = W.R1;
        Fj.prototype.isLayoutSupported = function() {
            return !0
        };
        Fj.prototype.buildCallback = function() {
            this.element.setAttribute("aria-hidden", "true");
            (this.Jc = this.element.getAttribute("referrerpolicy")) && K("no-referrer" == this.Jc, 'amp-pixel: invalid "referrerpolicy" value "' + this.Jc + '". Only "no-referrer" is supported');
            this.element.hasAttribute("i-amphtml-ssr") && this.element.querySelector("img") ? J().info("amp-pixel", "inabox img already present") : this.getAmpDoc().whenFirstVisible().then(this.Jh.bind(this))
        };
        Fj.prototype.Jh = function() {
            var a = this;
            if (this.ye) return J().error("amp-pixel", "duplicate pixel"), this.ye;
            this.ye = P(this.win).promise(1).then(function() {
                var b = a.element.getAttribute("src");
                if (b) {
                    var c = Dd(a.element, "url-replace"),
                        d = c.expandUrlAsync;
                    K(/^(https:\/\/|\/\/)/i.test(b), 'The <amp-pixel> src attribute must start with "https://" or "//". Invalid value: ' + b);
                    return d.call(c, b).then(function(e) {
                        if (a.win) {
                            var f = a.win;
                            var h = a.Jc;
                            h && "no-referrer" !== h && H().error("pixel", "Unsupported referrerPolicy: %s",
                                h);
                            f = "no-referrer" === h ? Dj(f, e) : Ej(f, e);
                            J().info("amp-pixel", "pixel triggered: ", e);
                            return f
                        }
                    })
                }
            })
        };

        function Gj(a) {
            this.V = a.navigator;
            this.G = a
        }
        g = Gj.prototype;
        g.isAndroid = function() {
            return /Android/i.test(this.V.userAgent)
        };
        g.isIos = function() {
            return /iPhone|iPad|iPod/i.test(this.V.userAgent)
        };
        g.isSafari = function() {
            return /Safari/i.test(this.V.userAgent) && !this.isChrome() && !this.isIe() && !this.isEdge() && !this.isFirefox() && !this.isOpera()
        };
        g.isChrome = function() {
            return /Chrome|CriOS/i.test(this.V.userAgent) && !this.isEdge() && !this.isOpera()
        };
        g.isFirefox = function() {
            return /Firefox|FxiOS/i.test(this.V.userAgent) && !this.isEdge()
        };
        g.isOpera = function() {
            return /OPR\/|Opera|OPiOS/i.test(this.V.userAgent)
        };
        g.isIe = function() {
            return /Trident|MSIE|IEMobile/i.test(this.V.userAgent)
        };
        g.isEdge = function() {
            return /Edge/i.test(this.V.userAgent)
        };
        g.isWebKit = function() {
            return /WebKit/i.test(this.V.userAgent) && !this.isEdge()
        };
        g.isWindows = function() {
            return /Windows/i.test(this.V.userAgent)
        };
        g.isStandalone = function() {
            return this.isIos() && this.V.standalone || this.isChrome() && this.G.matchMedia("(display-mode: standalone)").matches
        };
        g.isBot = function() {
            return /bot/i.test(this.V.userAgent)
        };
        g.getMajorVersion = function() {
            return this.isSafari() ? this.isIos() ? this.getIosMajorVersion() || 0 : Hj(this, /\sVersion\/(\d+)/, 1) : this.isChrome() ? Hj(this, /(Chrome|CriOS)\/(\d+)/, 2) : this.isFirefox() ? Hj(this, /(Firefox|FxiOS)\/(\d+)/, 2) : this.isOpera() ? Hj(this, /(OPR|Opera|OPiOS)\/(\d+)/, 2) : this.isIe() ? Hj(this, /MSIE\s(\d+)/, 1) : this.isEdge() ? Hj(this, /Edge\/(\d+)/, 1) : 0
        };

        function Hj(a, b, c) {
            if (!a.V.userAgent) return 0;
            a = a.V.userAgent.match(b);
            return !a || c >= a.length ? 0 : parseInt(a[c], 10)
        }
        g.getIosVersionString = function() {
            if (!this.V.userAgent || !this.isIos()) return "";
            var a = this.V.userAgent.match(/OS ([0-9]+[_.][0-9]+([_.][0-9]+)?)\b/);
            return a ? a = a[1].replace(/_/g, ".") : ""
        };
        g.getIosMajorVersion = function() {
            var a = this.getIosVersionString();
            return "" == a ? null : Number(a.split(".")[0])
        };

        function Ij(a) {
            return "loading" != a.readyState && "uninitialized" != a.readyState
        }

        function Jj(a) {
            return "complete" == a.readyState
        }

        function Kj(a, b) {
            Lj(a, Ij, b)
        }

        function Lj(a, b, c) {
            var d = b(a);
            if (d) c(a);
            else {
                var e = function() {
                    b(a) && (d || (d = !0, c(a)), a.removeEventListener("readystatechange", e))
                };
                a.addEventListener("readystatechange", e)
            }
        }

        function Mj(a) {
            return new Promise(function(b) {
                Kj(a, b)
            })
        }

        function Nj(a) {
            return new Promise(function(b) {
                Lj(a, Jj, b)
            })
        };
        var Oj = ["<link rel=preload referrerpolicy=origin>"],
            Pj = null;

        function Qj(a) {
            this.Cd = a.document;
            this.Jd = a.document.head;
            this.Xb = {};
            this.gg = {};
            this.wa = Q(a);
            this.Xb[S(a.location.href).origin] = !0;
            a: {
                if (!Pj) {
                    var b = a.document.createElement("link");
                    var c = b.relList;
                    b.as = "invalid-value";
                    if (!c || !c.supports) {
                        b = {};
                        break a
                    }
                    Pj = {
                        preconnect: c.supports("preconnect"),
                        preload: c.supports("preload"),
                        onlyValidAs: "invalid-value" != b.as
                    }
                }
                b = Pj
            }
            this.oc = b;
            this.S = P(a)
        }
        Qj.prototype.url = function(a, b, c) {
            var d = this;
            a.whenFirstVisible().then(function() {
                d.ic(a, b, c)
            })
        };
        Qj.prototype.ic = function(a, b, c) {
            if (Rj(b)) {
                a = S(b).origin;
                b = Date.now();
                var d = this.Xb[a];
                if (d && b < d) c && (this.Xb[a] = b + 18E4);
                else {
                    this.Xb[a] = b + (c ? 18E4 : 1E4);
                    if (!this.oc.preconnect) {
                        var e = this.Cd.createElement("link");
                        e.setAttribute("rel", "dns-prefetch");
                        e.setAttribute("href", a);
                        this.Jd.appendChild(e)
                    }
                    var f = this.Cd.createElement("link");
                    f.setAttribute("rel", "preconnect");
                    f.setAttribute("href", a);
                    f.setAttribute("referrerpolicy", "origin");
                    this.Jd.appendChild(f);
                    this.S.delay(function() {
                        e && e.parentNode && e.parentNode.removeChild(e);
                        f.parentNode && f.parentNode.removeChild(f)
                    }, 1E4);
                    Sj(this, a)
                }
            }
        };
        Qj.prototype.preload = function(a, b, c) {
            var d = this;
            Rj(b) && !this.gg[b] && (this.gg[b] = !0, this.url(a, b, !0), this.oc.preload && ("document" == c && this.wa.isSafari() || a.whenFirstVisible().then(function() {
                var e = fe(d.Cd)(Oj);
                e.setAttribute("href", b);
                e.as = d.oc.onlyValidAs ? "fetch" : "";
                d.Jd.appendChild(e)
            })))
        };

        function Rj(a) {
            return a.startsWith("https:") || a.startsWith("http:") ? !0 : !1
        }

        function Sj(a, b) {
            if (!a.oc.preconnect && (a.wa.isSafari() || a.wa.isIos())) {
                var c = Date.now();
                a.Xb[b] = c + 18E4;
                a = new XMLHttpRequest;
                a.open("HEAD", b + "/robots.txt?_AMP_safari_preconnect_polyfill_cachebust=" + (c - c % 18E4), !0);
                a.withCredentials = !0;
                a.send()
            }
        }

        function Tj() {
            var a = self.document;
            Nj(a).then(function() {
                var b = a.defaultView;
                if (b) {
                    b = $d(b);
                    var c = Xd(a.documentElement),
                        d = zd(a);
                    b.url(d, c.sourceUrl);
                    b.url(d, c.canonicalUrl)
                }
            })
        };

        function Uj(a) {
            this.H = a;
            this.bg = z()
        }
        Uj.prototype.addTransition = function(a, b, c) {
            this.bg[a + "|" + b] = c
        };
        Uj.prototype.setState = function(a) {
            var b = this.H;
            this.H = a;
            var c;
            null == (c = this.bg[b + "|" + a]) || c()
        };

        function Vj() {
            this.O = [];
            this.fc = {};
            this.Bf = this.Cf = 0
        }
        g = Vj.prototype;
        g.getSize = function() {
            return this.O.length
        };
        g.getLastEnqueueTime = function() {
            return this.Cf
        };
        g.getLastDequeueTime = function() {
            return this.Bf
        };
        g.getTaskById = function(a) {
            return this.fc[a] || null
        };
        g.enqueue = function(a) {
            this.O.push(a);
            this.fc[a.id] = a;
            this.Cf = Date.now()
        };
        g.dequeue = function(a) {
            if (!this.removeAtIndex(a, this.O.indexOf(this.fc[a.id]))) return !1;
            this.Bf = Date.now();
            return !0
        };
        g.peek = function(a) {
            for (var b = 1E6, c = null, d = 0; d < this.O.length; d++) {
                var e = this.O[d],
                    f = a(e);
                f < b && (b = f, c = e)
            }
            return c
        };
        g.forEach = function(a) {
            this.O.forEach(a)
        };
        g.removeAtIndex = function(a, b) {
            var c = this.fc[a.id];
            if (!c || this.O[b] != c) return !1;
            this.O.splice(b, 1);
            delete this.fc[a.id];
            return !0
        };
        g.purge = function(a) {
            for (var b = this.O.length; b--;) a(this.O[b]) && this.removeAtIndex(this.O[b], b)
        };

        function Wj(a) {
            if (Q(a).isIe()) {
                a = a.document;
                for (var b = a.querySelectorAll('.i-amphtml-intrinsic-sizer[src^="data:image/svg"]'), c = 0; c < b.length; c++) {
                    var d = b[c],
                        e = lc(d, ".i-amphtml-element");
                    if (e) {
                        var f = cf(e.getAttribute("width"));
                        e = cf(e.getAttribute("height"));
                        f && e && (d.src = Se(a, f, e))
                    }
                }
            }
        };

        function Xj(a) {
            return !Q(a).isIe() || Yj(a) ? null : new Promise(function(b) {
                var c = Date.now() + 2E3,
                    d = a.setInterval(function() {
                        var e = Date.now(),
                            f = Yj(a);
                        if (f || e > c) a.clearInterval(d), b(), f || J().error("ie-media-bug", "IE media never resolved")
                    }, 10)
            })
        }

        function Yj(a) {
            var b = "(min-width: " + (a.innerWidth - 1) + "px) AND (max-width: " + (a.innerWidth + 1 + "px)");
            try {
                return a.matchMedia(b).matches
            } catch (c) {
                return J().error("ie-media-bug", "IE matchMedia failed: ", c), !0
            }
        };

        function Zj(a) {
            var b = this;
            this.ampdoc = a;
            this.win = a.win;
            this.h = R(a);
            this.ja = this.h.isRuntimeOn();
            this.Rg = !1;
            this.xh = 0;
            this.o = [];
            this.Xe = this.Ve = this.He = 0;
            this.ha = this.ampdoc.isVisible();
            this.Ib = !1;
            this.pf = !0;
            this.jd = !1;
            this.pc = -1;
            this.dc = !0;
            this.wb = -1;
            this.Zd = this.vc = 0;
            this.Hc = new ij(this.win, function() {
                return b.doPass()
            });
            this.Pf = new ij(this.win, function() {
                b.dc = !0;
                b.schedulePass()
            });
            this.sa = new Vj;
            this.L = new Vj;
            this.rd = this.sg.bind(this);
            this.ea = [];
            this.za = [];
            this.Rd = !1;
            this.K = de(this.ampdoc);
            this.I =
                be(this.win);
            this.hd = new rj(this.win);
            this.Ge = !1;
            this.jb = 0;
            this.ob = !1;
            this.Gc = [];
            this.Dd = [];
            this.qf = new x;
            this.kg = new Uj(this.ampdoc.getVisibilityState());
            this.K.onChanged(function(c) {
                b.vc = b.win.Date.now();
                b.Zd = c.velocity;
                c.relayoutAll && (b.dc = !0, b.ob = !0);
                b.schedulePass()
            });
            this.K.onScroll(function() {
                b.vc = b.win.Date.now()
            });
            this.ampdoc.onVisibilityChanged(function() {
                -1 == b.pc && b.ampdoc.isVisible() && (b.pc = b.win.Date.now());
                b.schedulePass()
            });
            this.h.onRuntimeState(function(c) {
                J().fine("Resources", "Runtime state:",
                    c);
                b.ja = c;
                b.schedulePass(1)
            });
            Gi(this.ampdoc, function() {
                ak(b, b.kg);
                b.schedulePass(0)
            });
            bk(this);
            this.Vc = jb(this.win, function(c) {
                c = c.target;
                c.nodeType !== Node.ELEMENT_NODE || c === b.K.getScrollingElement() || b.Dd.includes(c) || (b.Dd.push(c), b.schedulePass(70))
            }, 250);
            gf(this.win.document, "scroll", this.Vc, {
                capture: !0,
                passive: !0
            })
        }

        function bk(a) {
            a.ampdoc.whenReady().then(function() {
                function b() {
                    return a.Pf.schedule()
                }
                a.Ib = !0;
                a.We();
                a.za = null;
                O(a.win, "input").setupInputModeClasses(a.ampdoc);
                Wj(a.win);
                var c = Xj(a.win);
                c ? c.then(b) : b();
                Promise.race([mf(a.win), P(a.win).promise(3100)]).then(b);
                a.win.document.fonts && "loaded" != a.win.document.fonts.status && a.win.document.fonts.ready.then(b)
            })
        }
        g = Zj.prototype;
        g.get = function() {
            return this.o.slice(0)
        };
        g.getAmpdoc = function() {
            return this.ampdoc
        };
        g.getResourceForElement = function(a) {
            return Z(a)
        };
        g.getResourceForElementOptional = function(a) {
            return Z(a)
        };
        g.getScrollDirection = function() {
            return Math.sign(this.Zd) || 1
        };
        g.add = function(a) {
            this.He++;
            1 == this.He && this.K.ensureReadyForElements();
            var b = Z(a);
            b && 0 != b.getState() && !a.reconstructWhenReparented() ? (b.requestMeasure(), J().fine("Resources", "resource reused:", b.debugid)) : (b = new pi(++this.xh, a, this), J().fine("Resources", "resource added:", b.debugid));
            this.o.push(b);
            this.Pf.schedule(1E3)
        };

        function ck(a, b, c, d) {
            c = void 0 === c ? !1 : c;
            d = void 0 === d ? !1 : d;
            var e = c,
                f = d;
            if (a.ja || a.Rg)
                if ("prerender" != a.ampdoc.getVisibilityState() || b.prerenderAllowed()) a.Ib ? dk(a, b, f) : b.isBuilt() || b.isBuilding() || e && a.za.includes(b) || (a.za.push(b), a.We())
        }
        g.We = function() {
            if (!this.Rd) try {
                this.Rd = !0;
                for (var a = 0; a < this.za.length; a++) {
                    var b = this.za[a];
                    if (this.Ib || tc(b.element, this.ampdoc.getRootNode())) this.za.splice(a--, 1), dk(this, b)
                }
            } finally {
                this.Rd = !1
            }
        };

        function dk(a, b, c) {
            if ((void 0 === c ? 0 : c) || 20 > a.Ve || a.ampdoc.hasBeenVisible() || b.isBuildRenderBlocking())
                if (c = b.build()) J().fine("Resources", "build resource:", b.debugid), a.Ve++, a.Xe++, c.then(function() {
                    return a.schedulePass()
                }, function(d) {
                    ek(a, b);
                    if (!Lf(d)) throw d;
                })
        }
        g.remove = function(a) {
            (a = Z(a)) && ek(this, a)
        };

        function ek(a, b) {
            var c = a.o.indexOf(b); - 1 != c && a.o.splice(c, 1);
            b.isBuilt() && b.pauseOnRemove();
            3 === b.getState() && b.layoutCanceled();
            fk(a, b, !0);
            J().fine("Resources", "resource removed:", b.debugid)
        }
        g.upgraded = function(a) {
            a = Z(a);
            ck(this, a);
            J().fine("Resources", "resource upgraded:", a.debugid)
        };
        g.updateLayoutPriority = function(a, b) {
            var c = Z(a);
            c.updateLayoutPriority(b);
            this.L.forEach(function(d) {
                d.resource == c && (d.priority = b)
            });
            this.schedulePass()
        };
        g.schedulePass = function(a) {
            return this.Hc.schedule(a)
        };
        g.updateOrEnqueueMutateTask = function(a, b) {
            for (var c = null, d = 0; d < this.ea.length; d++)
                if (this.ea[d].resource == a) {
                    c = this.ea[d];
                    break
                }
            c ? (c.newHeight = b.newHeight, c.newWidth = b.newWidth, c.marginChange = b.marginChange, c.event = b.event, c.force = b.force || c.force, c.callback = b.callback) : this.ea.push(b)
        };
        g.schedulePassVsync = function() {
            var a = this;
            this.Ge || (this.Ge = !0, this.I.mutate(function() {
                return a.doPass()
            }))
        };
        g.ampInitComplete = function() {
            this.jd = !0;
            J().fine("Resources", "ampInitComplete");
            this.schedulePass()
        };
        g.setRelayoutTop = function(a) {
            this.wb = -1 == this.wb ? a : Math.min(a, this.wb)
        };
        g.maybeHeightChanged = function() {
            this.ob = !0
        };
        g.onNextPass = function(a) {
            this.Gc.push(a)
        };
        g.doPass = function() {
            var a = this;
            if (this.ja) {
                this.ha = this.ampdoc.isVisible();
                this.Xe = 0;
                if (this.Ib && this.pf && this.jd) {
                    this.pf = !1;
                    var b = this.win.document,
                        c = Xd(this.ampdoc),
                        d;
                    this.h.sendMessage("documentLoaded", A({
                        title: b.title,
                        sourceUrl: Be(this.ampdoc.getUrl()),
                        isStory: "AMP-STORY" === (null == (d = b.body.firstElementChild) ? void 0 : d.tagName),
                        serverLayout: b.documentElement.hasAttribute("i-amphtml-element"),
                        linkRels: c.linkRels,
                        metaTags: {
                            viewport: c.viewport
                        },
                        viewport: c.viewport
                    }), !0);
                    this.jb = this.K.getContentHeight();
                    this.h.sendMessage("documentHeight", A({
                        height: this.jb
                    }), !0);
                    J().fine("Resources", "document height on load: %s", this.jb)
                }
                var e = this.K.getSize();
                J().fine("Resources", "PASS: visible=", this.ha, ", relayoutAll=", this.dc, ", relayoutTop=", this.wb, ", viewportSize=", e.width, e.height);
                this.Hc.cancel();
                this.Ge = !1;
                this.kg.setState(this.ampdoc.getVisibilityState());
                this.Ib && this.jd && !this.ampdoc.signals().get("ready-scan") && (this.ampdoc.signals().signal("ready-scan"), J().fine("Resources", "signal: ready-scan"));
                this.ob && (this.ob = !1, this.I.measure(function() {
                    var f = a.K.getContentHeight();
                    f != a.jb && (a.h.sendMessage("documentHeight", A({
                        height: f
                    }), !0), a.jb = f, J().fine("Resources", "document height changed: %s", a.jb), a.K.contentHeightChanged())
                }));
                for (b = 0; b < this.Gc.length; b++)(0, this.Gc[b])();
                this.Gc.length = 0
            } else J().fine("Resources", "runtime is off")
        };

        function gk(a) {
            var b = a.win.Date.now(),
                c = a.K.getRect(),
                d = c.height / 10,
                e = c.height / 10,
                f = .01 > Math.abs(a.Zd) && 500 < b - a.vc || 1E3 < b - a.vc;
            if (0 < a.ea.length) {
                J().fine("Resources", "change size requests:", a.ea.length);
                var h = a.ea;
                a.ea = [];
                var l = -1,
                    k = [],
                    m = 0;
                b = {};
                for (var n = 0; n < h.length; b = {
                        fb: b.fb,
                        kc: b.kc,
                        J: b.J,
                        T: b.T
                    }, n++) {
                    b.J = h[n];
                    var q = b.J;
                    b.fb = q.resource;
                    q = q.event;
                    var t = b.fb.getLayoutBox(),
                        w = 0,
                        u = 0,
                        r = 0,
                        G = 0,
                        y = t,
                        X = y.top,
                        rb = y.bottom;
                    b.T = void 0;
                    b.J.marginChange && (b.T = b.J.marginChange.newMargins, y = b.J.marginChange.currentMargins,
                        void 0 != b.T.top && (w = b.T.top - y.top), void 0 != b.T.bottom && (u = b.T.bottom - y.bottom), void 0 != b.T.left && (r = b.T.left - y.left), void 0 != b.T.right && (G = b.T.right - y.right), w && (X = t.top - y.top), u && (rb = t.bottom + y.bottom));
                    var F = b.J.newHeight - t.height;
                    b.kc = b.J.newWidth - t.width;
                    var L = !1;
                    if (0 != F || 0 != w || 0 != u || 0 != b.kc || 0 != r || 0 != G)
                        if (b.J.force || !a.ha) L = !0;
                        else if (a.hd.hasDescendantsOf(b.fb.element) || q && q.userActivation && q.userActivation.hasBeenActive) L = !0;
                    else if (X >= c.bottom - e || 0 == w && t.bottom + Math.min(F, 0) >= c.bottom - e) L = !0;
                    else if (1 < c.top && rb <= c.top + d) {
                        if (0 > F && c.top + m < -F) continue;
                        f ? (m += F, k.push(b.J)) : a.ea.push(b.J);
                        continue
                    } else hk(a, b.fb, t) ? L = !0 : 0 > F || 0 > w || 0 > u || (b.J.newHeight == t.height ? a.I.run({
                        measure: function(I) {
                            return function(aa) {
                                aa.resize = !1;
                                var wa = I.fb.element.parentElement;
                                if (wa) {
                                    for (var U = wa.getLayoutSize && wa.getLayoutSize().width || wa.offsetWidth, Ua = I.kc, E = 0; E < wa.childElementCount; E++)
                                        if (Ua += wa.children[E].offsetWidth, Ua > U) return;
                                    aa.resize = !0
                                }
                            }
                        }(b),
                        mutate: function(I) {
                            return function(aa) {
                                aa.resize && I.J.resource.changeSize(I.J.newHeight,
                                    I.J.newWidth, I.T);
                                I.J.resource.overflowCallback(!aa.resize, I.J.newHeight, I.J.newWidth, I.T)
                            }
                        }(b)
                    }, {}) : b.J.resource.overflowCallback(!0, b.J.newHeight, b.J.newWidth, b.T));
                    L && (0 <= t.top && (l = -1 == l ? t.top : Math.min(l, t.top)), b.J.resource.changeSize(b.J.newHeight, b.J.newWidth, b.T), b.J.resource.overflowCallback(!1, b.J.newHeight, b.J.newWidth, b.T), a.ob = !0);
                    b.J.callback && b.J.callback(L)
                } - 1 != l && a.setRelayoutTop(l);
                0 < k.length && a.I.run({
                    measure: function(I) {
                        I.scrollHeight = a.K.getScrollHeight();
                        I.scrollTop = a.K.getScrollTop()
                    },
                    mutate: function(I) {
                        var aa = -1;
                        k.forEach(function(U) {
                            var Ua = U.resource.getLayoutBox();
                            aa = -1 == aa ? Ua.top : Math.min(aa, Ua.top);
                            U.resource.changeSize(U.newHeight, U.newWidth, U.marginChange ? U.marginChange.newMargins : void 0);
                            U.callback && U.callback(!0)
                        }); - 1 != aa && a.setRelayoutTop(aa);
                        var wa = a.K.getScrollHeight();
                        wa != I.scrollHeight && a.K.setScrollTop(I.scrollTop + (wa - I.scrollHeight));
                        a.ob = !0
                    }
                }, {})
            }
        }

        function hk(a, b, c) {
            var d = a.K.getContentHeight();
            a = Math.max(.85 * d, d - 1E3);
            var e = c || b.getLayoutBox(),
                f = b.getInitialLayoutBox();
            return e.bottom >= a || f.bottom >= a
        }

        function ik(a, b) {
            b.length && a.I.mutate(function() {
                b.forEach(function(c) {
                    c.unload();
                    fk(a, c)
                });
                J().fine("Resources", "unload:", b)
            })
        }
        g.sg = function(a) {
            var b = this.K.getRect(),
                c = a.resource.getLayoutBox(),
                d = Math.floor((c.top - b.top) / b.height);
            Math.sign(d) != this.getScrollDirection() && (d *= 2);
            d = Math.abs(d);
            return 10 * a.priority + d
        };

        function jk(a, b) {
            var c = a.win.Date.now();
            if (0 == a.sa.getSize()) return -1 === a.pc ? 0 : Math.max(1E3 * b.priority - (c - a.pc), 0);
            var d = 0;
            a.sa.forEach(function(e) {
                d = Math.max(d, Math.max(1E3 * (b.priority - e.priority), 0) - (c - e.startTime))
            });
            return d
        }
        g.uh = function(a) {
            this.L.getTaskById(a.id) || this.L.enqueue(a)
        };
        g.Zf = function(a, b, c) {
            this.sa.dequeue(a);
            this.schedulePass(1E3);
            if (!b) return J().info("Resources", "task failed:", a.id, a.resource.debugid, c), Promise.reject(c)
        };

        function kk(a, b, c) {
            return 0 != b.getState() && b.isDisplayed() && (a.ha || "prerender" == a.ampdoc.getVisibilityState() && b.prerenderAllowed()) && (c || b.isInViewport() || b.renderOutsideViewport() || b.idleRenderOutsideViewport()) ? !0 : !1
        }
        g.scheduleLayoutOrPreload = function(a, b, c, d) {
            a.element.R1() || (a.getState(), a.isDisplayed(), d = d || !1, kk(this, a, d) && (b ? this.Aa(a, "L", 0, c || 0, d, a.startLayout.bind(a)) : this.Aa(a, "P", 2, c || 0, d, a.startLayout.bind(a))))
        };
        g.Aa = function(a, b, c, d, e, f) {
            b = a.getTaskId(b);
            a = {
                id: b,
                resource: a,
                priority: Math.max(a.getLayoutPriority(), d) + c,
                forceOutsideViewport: e,
                callback: f,
                scheduleTime: this.win.Date.now(),
                startTime: 0,
                promise: null
            };
            J().fine("Resources", "schedule:", a.id, "at", a.scheduleTime);
            var h = this.L.getTaskById(b);
            if (!h || a.priority < h.priority) h && this.L.dequeue(h), this.L.enqueue(a), this.schedulePass(jk(this, a));
            a.resource.layoutScheduled(a.scheduleTime)
        };
        g.whenFirstPass = function() {
            return this.qf.promise
        };

        function ak(a, b) {
            function c() {
                a.o.forEach(function(l) {
                    return l.resume()
                });
                h()
            }

            function d() {
                a.o.forEach(function(l) {
                    l.unload();
                    fk(a, l)
                });
                try {
                    a.win.getSelection().removeAllRanges()
                } catch (l) {}
            }

            function e() {
                a.o.forEach(function(l) {
                    return l.pause()
                })
            }

            function f() {}

            function h() {
                var l = a.K.getSize();
                if (0 < l.height && 0 < l.width) {
                    0 < a.ea.length && gk(a);
                    l = a.win.Date.now();
                    var k = a.dc,
                        m = a.wb,
                        n = a.Dd;
                    a.dc = !1;
                    a.wb = -1;
                    for (var q = 0, t = 0, w = 0; w < a.o.length; w++) {
                        var u = a.o[w];
                        0 != u.getState() || u.isBuilding() || u.element.R1() || ck(a,
                            u, !0);
                        !k && u.hasBeenMeasured() && 1 != u.getState() || q++;
                        u.isMeasureRequested() && t++
                    }
                    var r;
                    if (0 < q || 0 < t || k || -1 != m || 0 < n.length)
                        for (q = 0; q < a.o.length; q++)
                            if (t = a.o[q], !(t.hasOwner() && !t.isMeasureRequested() || t.element.R1())) {
                                w = k || 1 == t.getState() || !t.hasBeenMeasured() || t.isMeasureRequested() || -1 != m && t.getLayoutBox().bottom >= m;
                                if (!w)
                                    for (u = 0; u < n.length; u++)
                                        if (n[u].contains(t.element)) {
                                            w = !0;
                                            break
                                        }
                                w && (w = t.isDisplayed(), t.measure(), w = !(!w || t.isDisplayed()));
                                w && (r || (r = []), r.push(t))
                            }
                    n.length = 0;
                    r && ik(a, r);
                    k = a.K.getRect();
                    r = a.ha ? Vb(k, 2) : k;
                    k = a.ha ? Vb(k, .25) : k;
                    for (m = 0; m < a.o.length; m++) n = a.o[m], 0 == n.getState() || n.hasOwner() || n.element.R1() || (q = a.ha && n.isDisplayed() && n.overlaps(k), n.setInViewport(q));
                    if (r)
                        for (k = 0; k < a.o.length; k++) m = a.o[k], !(m.isBuilt() || m.isBuilding() || m.hasOwner() || m.element.R1()) && m.hasBeenMeasured() && m.isDisplayed() && m.overlaps(r) && ck(a, m, !0, !0), 2 != m.getState() || m.hasOwner() || m.isDisplayed() && m.overlaps(r) && a.scheduleLayoutOrPreload(m, !0);
                    if (r = a.ha) l = void 0 === l ? Date.now() : l, r = a.sa.getLastDequeueTime(),
                        r = 0 == a.sa.getSize() && 0 == a.L.getSize() && l > r + 5E3 && 0 < r;
                    if (r) {
                        for (r = l = 0; r < a.o.length && 4 > l; r++) k = a.o[r], 2 == k.getState() && !k.hasOwner() && !k.element.R1() && k.isDisplayed() && k.idleRenderOutsideViewport() && (J().fine("Resources", "idleRenderOutsideViewport layout:", k.debugid), a.scheduleLayoutOrPreload(k, !1), l++);
                        for (r = 0; r < a.o.length && 4 > l; r++) k = a.o[r], 2 != k.getState() || k.hasOwner() || k.element.R1() || !k.isDisplayed() || (J().fine("Resources", "idle layout:", k.debugid), a.scheduleLayoutOrPreload(k, !1), l++)
                    }
                    l = a.win.Date.now();
                    k = -1;
                    for (r = a.L.peek(a.rd); r;) {
                        k = jk(a, r);
                        J().fine("Resources", "peek from queue:", r.id, "sched at", r.scheduleTime, "score", a.rd(r), "timeout", k);
                        if (16 < k) break;
                        a.L.dequeue(r);
                        (k = a.sa.getTaskById(r.id)) ? (r = a.uh.bind(a, r), k.promise.then(r, r)) : (k = r.resource, k.measure(), kk(a, k, r.forceOutsideViewport) ? (r.promise = r.callback(), r.startTime = l, J().fine("Resources", "exec:", r.id, "at", r.startTime), a.sa.enqueue(r), r.promise.then(a.Zf.bind(a, r, !0), a.Zf.bind(a, r, !1)).catch(If)) : (J().fine("Resources", "cancelled", r.id),
                            k.layoutCanceled()));
                        r = a.L.peek(a.rd);
                        k = -1
                    }
                    J().fine("Resources", "queue size:", a.L.getSize(), "exec size:", a.sa.getSize());
                    0 <= k ? l = k : (l = 2 * (l - a.sa.getLastDequeueTime()), l = Math.max(Math.min(3E4, l), 5E3));
                    0 < a.ea.length && (l = Math.min(l, 500));
                    a.ha ? a.schedulePass(l) ? J().fine("Resources", "next pass:", l) : J().fine("Resources", "pass already scheduled") : J().fine("Resources", "document is not visible: no scheduling");
                    a.qf.resolve()
                }
            }
            b.addTransition("prerender", "prerender", h);
            b.addTransition("prerender", "visible", h);
            b.addTransition("prerender", "hidden", h);
            b.addTransition("prerender", "inactive", h);
            b.addTransition("prerender", "paused", h);
            b.addTransition("visible", "visible", h);
            b.addTransition("visible", "hidden", h);
            b.addTransition("visible", "inactive", d);
            b.addTransition("visible", "paused", e);
            b.addTransition("hidden", "visible", h);
            b.addTransition("hidden", "hidden", h);
            b.addTransition("hidden", "inactive", d);
            b.addTransition("hidden", "paused", e);
            b.addTransition("inactive", "visible", c);
            b.addTransition("inactive", "hidden",
                c);
            b.addTransition("inactive", "inactive", f);
            b.addTransition("inactive", "paused", h);
            b.addTransition("paused", "visible", c);
            b.addTransition("paused", "hidden", h);
            b.addTransition("paused", "inactive", d);
            b.addTransition("paused", "paused", f)
        }

        function fk(a, b, c) {
            if (1 == b.getState() || 2 == b.getState()) a.L.purge(function(e) {
                return e.resource == b
            }), a.sa.purge(function(e) {
                return e.resource == b
            }), Wa(a.ea, function(e) {
                return e.resource === b
            });
            if (0 == b.getState() && c && a.za) {
                var d = a.za.indexOf(b); - 1 != d && a.za.splice(d, 1)
            }
        };
        var lk = /^i-amphtml-/;

        function mk(a) {
            this.ampdoc = a;
            var b = a.getHeadNode();
            this.sb = Zd(a);
            this.K = de(a);
            a = Dd(b, "action");
            a.addGlobalTarget("AMP", this.Fg.bind(this));
            a.addGlobalMethodHandler("hide", this.tf.bind(this));
            a.addGlobalMethodHandler("show", this.wf.bind(this));
            a.addGlobalMethodHandler("toggleVisibility", this.Jg.bind(this));
            a.addGlobalMethodHandler("scrollTo", this.vf.bind(this));
            a.addGlobalMethodHandler("focus", this.Gg.bind(this));
            a.addGlobalMethodHandler("toggleClass", this.Ig.bind(this))
        }
        g = mk.prototype;
        g.Fg = function(a) {
            if (!a.satisfiesTrust(2)) return null;
            var b = a.node,
                c = a.method,
                d = a.args,
                e = nk(b);
            switch (c) {
                case "pushState":
                case "setState":
                    return Vd(b.nodeType === Node.DOCUMENT_NODE ? b.documentElement : b).then(function(f) {
                        K(f, "AMP-BIND is not installed.");
                        return f.invoke(a)
                    });
                case "navigateTo":
                    return ok(this, a);
                case "closeOrNavigateTo":
                    return pk(this, a);
                case "scrollTo":
                    return K(d.id, "AMP.scrollTo must provide element ID"), a.node = zd(b).getElementById(d.id), this.vf(a);
                case "goBack":
                    return Cd(this.ampdoc,
                        "history").goBack(!(!d || !0 !== d.navigate)), null;
                case "print":
                    return e.print(), null;
                case "optoutOfCid":
                    return Fd(this.ampdoc, "cid").then(function(f) {
                        return f.optOut()
                    }).catch(function(f) {
                        J().error("STANDARD-ACTIONS", "Failed to opt out of CID", f)
                    })
            }
            throw H().createError("Unknown AMP action ", c);
        };

        function ok(a, b) {
            var c = b.caller,
                d = b.method,
                e = b.args,
                f = nk(b.node);
            b = v();
            c.tagName.startsWith("AMP-") && (b = c.getImpl().then(function(h) {
                "function" == typeof h.throwIfCannotNavigate && h.throwIfCannotNavigate()
            }));
            return b.then(function() {
                Cd(a.ampdoc, "navigation").navigateTo(f, e.url, "AMP." + d, {
                    target: e.target,
                    opener: e.opener
                })
            }, function(h) {
                H().error("STANDARD-ACTIONS", h)
            })
        }

        function pk(a, b) {
            var c = nk(b.node),
                d = c.parent != c,
                e = !1;
            c.opener && a.ampdoc.isSingleDoc() && !d && (c.close(), e = c.closed);
            return e ? v() : ok(a, b)
        }
        g.vf = function(a) {
            var b = a.node,
                c = (a = a.args) && a.position,
                d = a && a.duration;
            c && !["top", "bottom", "center"].includes(c) && (c = void 0);
            ac(d) || (d = void 0);
            return this.K.animateScrollIntoView(b, c, d)
        };
        g.Gg = function(a) {
            wc(a.node);
            return null
        };
        g.tf = function(a) {
            var b = a.node;
            b.classList.contains("i-amphtml-element") ? this.sb.mutateElement(b, function() {
                return b.collapse()
            }, !0) : this.sb.mutateElement(b, function() {
                return Qe(b, !1)
            });
            return null
        };
        g.wf = function(a) {
            var b = a.node,
                c = b.ownerDocument.defaultView;
            if (b.classList.contains("i-amphtml-layout-nodisplay")) return H().warn("STANDARD-ACTIONS", "Elements with layout=nodisplay cannot be dynamically shown.", b), null;
            this.sb.measureElement(function() {
                "none" != (c.getComputedStyle(b) || Me).display || b.hasAttribute("hidden") || H().warn("STANDARD-ACTIONS", 'Elements can only be dynamically shown when they have the "hidden" attribute set or when they were dynamically hidden.', b)
            });
            var d = b.hasAttribute("autofocus") ?
                b : b.querySelector("[autofocus]");
            d && Q(c).isIos() ? (qk(b, d), this.sb.mutateElement(b, function() {})) : this.sb.mutateElement(b, function() {
                qk(b, d)
            });
            return null
        };

        function qk(a, b) {
            a.classList.contains("i-amphtml-element") ? a.expand() : Qe(a, !0);
            b && wc(b)
        }
        g.Jg = function(a) {
            return a.node.hasAttribute("hidden") ? this.wf(a) : this.tf(a)
        };
        g.Ig = function(a) {
            var b = a.node,
                c = a.args,
                d = H().assertString(c["class"], "Argument 'class' must be a string.");
            if (lk.test(d)) return null;
            this.sb.mutateElement(b, function() {
                if (void 0 !== c.force) {
                    var e = H().assertBoolean(c.force, "Optional argument 'force' must be a boolean.");
                    b.classList.toggle(d, e)
                } else b.classList.toggle(d)
            });
            return null
        };

        function nk(a) {
            return (a.ownerDocument || a).defaultView
        };

        function rk(a, b, c) {
            this.ampdoc = a;
            this.h = b;
            this.j = c;
            this.Yg = c instanceof sk;
            this.Dc = Ce(this.ampdoc.win.location);
            this.Sc = null
        }
        g = rk.prototype;
        g.get = function(a, b) {
            return tk(this).then(function(c) {
                return c.get(a, b)
            })
        };
        g.set = function(a, b, c) {
            return this.setNonBoolean(a, b, c)
        };
        g.setNonBoolean = function(a, b, c) {
            return uk(this, function(d) {
                return d.set(a, b, c)
            })
        };
        g.remove = function(a) {
            return uk(this, function(b) {
                return b.remove(a)
            })
        };
        g.isViewerStorage = function() {
            return this.Yg
        };

        function tk(a) {
            a.Sc || (a.Sc = a.j.loadBlob(a.Dc).then(function(b) {
                return b ? Gb(atob(b)) : {}
            }).catch(function(b) {
                J().expectedError("Storage", "Failed to load store: ", b);
                return {}
            }).then(function(b) {
                return new vk(b)
            }));
            return a.Sc
        }

        function uk(a, b) {
            return tk(a).then(function(c) {
                b(c);
                c = btoa(JSON.stringify(c.obj));
                return a.j.saveBlob(a.Dc, c)
            }).then(a.rg.bind(a))
        }

        function wk(a) {
            a.h.onBroadcast(function(b) {
                "amp-storage-reset" == b.type && b.origin == a.Dc && (J().fine("Storage", "Received reset message"), a.Sc = null)
            })
        }
        g.rg = function() {
            J().fine("Storage", "Broadcasted reset message");
            this.h.broadcast({
                type: "amp-storage-reset",
                origin: this.Dc
            })
        };

        function vk(a) {
            this.obj = va(a);
            this.bh = 8;
            this.Da = this.obj.vv || Object.create(null);
            this.obj.vv || (this.obj.vv = this.Da)
        }
        vk.prototype.get = function(a, b) {
            var c = (a = this.Da[a]) ? a.t : void 0,
                d = b && void 0 != c ? c + b > Date.now() : !0;
            return a && d ? a.v : void 0
        };
        vk.prototype.set = function(a, b, c) {
            if (void 0 !== this.Da[a]) {
                a = this.Da[a];
                var d = Date.now();
                c && (d = a.t);
                a.v = b;
                a.t = d
            } else this.Da[a] = A({
                v: b,
                t: Date.now()
            });
            b = Object.keys(this.Da);
            if (b.length > this.bh) {
                var e = Infinity,
                    f = null;
                for (c = 0; c < b.length; c++) a = this.Da[b[c]], a.t < e && (f = b[c], e = a.t);
                f && delete this.Da[f]
            }
        };
        vk.prototype.remove = function(a) {
            delete this.Da[a]
        };

        function xk(a) {
            this.win = a;
            try {
                if ("localStorage" in this.win) {
                    this.win.localStorage.getItem("test");
                    var b = !0
                } else b = !1
            } catch (c) {
                b = !1
            }
            this.Vd = b;
            this.Vd || (a = Error("localStorage not supported."), J().expectedError("Storage", a))
        }
        xk.prototype.loadBlob = function(a) {
            var b = this;
            return new Promise(function(c) {
                b.Vd ? c(b.win.localStorage.getItem("amp-store:" + a)) : c(null)
            })
        };
        xk.prototype.saveBlob = function(a, b) {
            var c = this;
            return new Promise(function(d) {
                c.Vd && c.win.localStorage.setItem("amp-store:" + a, b);
                d()
            })
        };

        function sk(a) {
            this.h = a
        }
        sk.prototype.loadBlob = function(a) {
            return this.h.sendMessageAwaitResponse("loadStore", A({
                origin: a
            })).then(function(b) {
                return b.blob
            })
        };
        sk.prototype.saveBlob = function(a, b) {
            return this.h.sendMessageAwaitResponse("saveStore", A({
                origin: a,
                blob: b
            })).catch(function(c) {
                throw J().createExpectedError("Storage", "Failed to save store: ", c);
            })
        };

        function yk(a) {
            N(a, "storage", function() {
                var b = R(a),
                    c = parseInt(b.getParam("storage"), 10) ? new sk(b) : new xk(a.win);
                b = new rk(a, b, c);
                wk(b);
                return b
            }, !0)
        };

        function zk() {}

        function Ak(a) {
            this.B = a;
            this.hc = {};
            this.we = {}
        }
        g = Ak.prototype;
        g.whenReady = function(a) {
            return Bk(this, a).then(zk)
        };
        g.setHtmlForTemplate = function(a, b) {
            return Bk(this, a).then(function(c) {
                return c.setHtml(b)
            })
        };
        g.renderTemplate = function(a, b) {
            return Bk(this, a).then(function(c) {
                return c.render(b)
            })
        };
        g.renderTemplateAsString = function(a, b) {
            return Bk(this, a).then(function(c) {
                return c.renderAsString(b)
            })
        };
        g.renderTemplateArray = function(a, b) {
            return 0 == b.length ? Promise.resolve([]) : Bk(this, a).then(function(c) {
                return b.map(function(d) {
                    return c.render(d)
                })
            })
        };
        g.findAndRenderTemplate = function(a, b, c) {
            return this.renderTemplate(this.findTemplate(a, c), b)
        };
        g.findAndSetHtmlForTemplate = function(a, b, c) {
            return this.setHtmlForTemplate(this.findTemplate(a, c), b)
        };
        g.findAndRenderTemplateArray = function(a, b, c) {
            return this.renderTemplateArray(this.findTemplate(a, c), b)
        };
        g.hasTemplate = function(a, b) {
            return !!this.maybeFindTemplate(a, b)
        };
        g.findTemplate = function(a, b) {
            b = this.maybeFindTemplate(a, b);
            K(b, "Template not found for %s", a);
            var c = b.tagName;
            K("TEMPLATE" == c || "SCRIPT" == c && "text/plain" === b.getAttribute("type"), 'Template must be defined in a <template> or <script type="text/plain"> tag');
            return b
        };
        g.maybeFindTemplate = function(a, b) {
            var c = a.getAttribute("template");
            return c ? jc(a).getElementById(c) : b ? rc(a, b) : a.querySelector('template[type], script[type="text/plain"]')
        };

        function Bk(a, b) {
            var c = b.__AMP_IMPL_;
            if (c) return Promise.resolve(c);
            c = "";
            var d = b.tagName;
            "TEMPLATE" == d ? c = b.getAttribute("type") : "SCRIPT" == d && (c = b.getAttribute("template"));
            K(c, "Type must be specified: %s", b);
            if (d = b.__AMP_WAIT_) return d;
            d = Ck(a, c).then(function(e) {
                var f = b.__AMP_IMPL_ = new e(b, a.B.win);
                delete b.__AMP_WAIT_;
                return f
            });
            return b.__AMP_WAIT_ = d
        }

        function Ck(a, b) {
            if (a.hc[b]) return a.hc[b];
            var c = new x,
                d = c.promise;
            c = c.resolve;
            a.hc[b] = d;
            a.we[b] = c;
            return d
        };

        function Dk(a) {
            this.win = a;
            this.wh = this.win.Promise.resolve();
            this.Hh = 0;
            this.ud = {};
            this.ve = Date.now()
        }
        g = Dk.prototype;
        g.timeSinceStart = function() {
            return Date.now() - this.ve
        };
        g.delay = function(a, b) {
            var c = this;
            if (!b) {
                var d = "p" + this.Hh++;
                this.wh.then(function() {
                    c.ud[d] ? delete c.ud[d] : a()
                }).catch(If);
                return d
            }
            return this.win.setTimeout(function() {
                try {
                    a()
                } catch (e) {
                    throw If(e), e;
                }
            }, b)
        };
        g.cancel = function(a) {
            "string" == typeof a ? this.ud[a] = !0 : this.win.clearTimeout(a)
        };
        g.promise = function(a) {
            var b = this;
            return new this.win.Promise(function(c) {
                if (-1 == b.delay(c, a)) throw Error("Failed to schedule timer.");
            })
        };
        g.timeoutPromise = function(a, b, c) {
            function d() {
                e.cancel(f)
            }
            var e = this,
                f, h = new this.win.Promise(function(l, k) {
                    f = e.delay(function() {
                        k(H().createError(c || "timeout"))
                    }, a);
                    if (-1 == f) throw Error("Failed to schedule timer.");
                });
            if (!b) return h;
            b.then(d, d);
            return this.win.Promise.race([h, b])
        };
        g.poll = function(a, b) {
            var c = this;
            return new this.win.Promise(function(d) {
                var e = c.win.setInterval(function() {
                    b() && (c.win.clearInterval(e), d())
                }, a)
            })
        };

        function Ek(a) {
            a = a.getRootNode();
            this.mg = (a.ownerDocument || a).createElement("a");
            this.ib = new he
        }
        g = Ek.prototype;
        g.parse = function(a, b) {
            return re(this.mg, a, b ? null : this.ib)
        };

        function Fk(a, b) {
            return "string" !== typeof b ? b : a.parse(b)
        }
        g.isProtocolValid = function(a) {
            return ye(a)
        };
        g.getSourceOrigin = function(a) {
            return Ce(Fk(this, a))
        };
        g.getSourceUrl = function(a) {
            return Be(Fk(this, a))
        };
        g.resolveRelativeUrl = function(a, b) {
            return De(a, Fk(this, b))
        };
        g.assertHttpsUrl = function(a, b, c) {
            return we(a, b, void 0 === c ? "source" : c)
        };
        g.assertAbsoluteHttpOrHttpsUrl = function(a) {
            K(/^https?:/i.test(a), 'URL must start with "http://" or "https://". Invalid value: %s', a);
            return S(a).href
        };
        g.isProxyOrigin = function(a) {
            return T(Fk(this, a))
        };
        g.isSecure = function(a) {
            return ve(Fk(this, a))
        };
        g.getWinOrigin = function(a) {
            return a.origin || Fk(this, a.location.href).origin
        };
        g.getCdnUrlOnOrigin = function(a) {
            if (T(a)) return a;
            var b = Fk(this, a),
                c = b.hash,
                d = b.pathname,
                e = b.search,
                f = encodeURIComponent(b.host);
            return ob.cdn + "/c/" + f + d + e + c
        };
        var Gk = {
            navigationStart: 1,
            redirectStart: 1,
            redirectEnd: 1,
            fetchStart: 1,
            domainLookupStart: 1,
            domainLookupEnd: 1,
            connectStart: 1,
            secureConnectionStart: 1,
            connectEnd: 1,
            requestStart: 1,
            responseStart: 1,
            responseEnd: 1,
            domLoading: 2,
            domInteractive: 2,
            domContentLoaded: 2,
            domComplete: 2,
            loadEventStart: 3,
            loadEventEnd: 4
        };

        function Hk(a, b, c) {
            var d = Gk[b] || 3,
                e = Math.max(d, c ? Gk[c] || 3 : d);
            if (1 === e) var f = v();
            else if (2 === e) f = Nj(a.document);
            else if (3 === e) f = mf(a);
            else if (4 === e) {
                var h = P(a);
                f = mf(a).then(function() {
                    return h.promise(1)
                })
            }
            return f.then(function() {
                return Ik(a, b, c)
            })
        }

        function Ik(a, b, c) {
            var d = a.performance && a.performance.timing;
            if (d && 0 != d.navigationStart) {
                var e = void 0 === c ? d[b] : d[c] - d[b];
                if (ac(e) && !(0 > e)) return e
            }
        }

        function Jk(a, b) {
            var c = a.performance && a.performance.navigation;
            if (c && void 0 !== c[b]) return c[b]
        }

        function Kk(a) {
            this.ampdoc = a;
            this.Oa = Object.create(null);
            this.Od = !1;
            Lk(this)
        }
        g = Kk.prototype;
        g.Ob = function() {
            this.initialize();
            this.Od = !0
        };
        g.initialize = function() {};
        g.get = function(a) {
            this.Od || this.Ob();
            return this.Oa[a]
        };
        g.set = function(a, b) {
            a.indexOf("RETURN");
            this.Oa[a] = this.Oa[a] || {
                sync: void 0,
                async: void 0
            };
            this.Oa[a].sync = b;
            return this
        };
        g.setAsync = function(a, b) {
            a.indexOf("RETURN");
            this.Oa[a] = this.Oa[a] || {
                sync: void 0,
                async: void 0
            };
            this.Oa[a].async = b;
            return this
        };
        g.setBoth = function(a, b, c) {
            return this.set(a, b).setAsync(a, c)
        };
        g.getExpr = function(a, b) {
            this.Od || this.Ob();
            var c = Object.assign({}, this.Oa, a);
            return Mk(this, Object.keys(c), b)
        };

        function Mk(a, b, c) {
            Lk(a) && (b = b.filter(function(e) {
                return Lk(a).includes(e)
            }));
            c && (b = b.filter(function(e) {
                return c[e]
            }));
            if (0 === b.length) return /_^/g;
            b.sort(function(e, f) {
                return f.length - e.length
            });
            var d = "\\$?(" + b.map(function(e) {
                return "$" === e[0] ? "\\" + e : e
            }).join("|") + ")";
            return new RegExp(d, "g")
        }

        function Lk(a) {
            if (a.Ce) return a.Ce;
            if (a.ampdoc.isSingleDoc()) {
                var b = a.ampdoc.getRootNode();
                if (Bf(["\u26a14email", "amp4email"], b)) return a.Ce = [""], a.Ce
            }
        };

        function Nk(a, b, c, d, e, f) {
            this.ga = a;
            this.Cb = b;
            this.df = c;
            this.xb = d;
            this.ia = e;
            this.Ag = !f
        }
        Nk.prototype.expand = function(a) {
            if (!a.length) return this.xb ? a : Promise.resolve(a);
            var b = this.ga.getExpr(this.Cb, this.ia);
            b = Ok(a, b);
            return b.length ? Pk(this, a, b) : this.xb ? a : Promise.resolve(a)
        };
        Nk.prototype.getMacroNames = function(a) {
            var b = this.ga.getExpr(this.Cb, this.ia);
            return (a = a.match(b)) ? a : []
        };

        function Ok(a, b) {
            var c = [];
            a.replace(b, function(d, e, f) {
                d = d.length;
                c.push({
                    start: f,
                    stop: d + f - 1,
                    name: e,
                    length: d
                })
            });
            return c
        }

        function Pk(a, b, c) {
            function d(n) {
                for (var q = "", t = [], w = []; f < b.length && h <= c.length;) {
                    var u = q.trim();
                    if (l && f === l.start) u && t.push(k ? ab(q) : q), q = void 0, q = a.Cb && ta.call(a.Cb, l.name) ? {
                        name: l.name,
                        prioritized: a.Cb[l.name],
                        encode: n
                    } : Object.assign({}, a.ga.get(l.name), {
                        name: l.name,
                        encode: n
                    }), f = l.stop + 1, l = c[++h], "(" === b[f] ? (f++, k++, e.push(q), t.push(d(!1))) : t.push(Qk(a, q)), q = "";
                    else {
                        if ("`" === b[f]) m ? (m = !1, q.length && t.push(q)) : (m = !0, u && t.push(u)), q = "";
                        else if (k && "," === b[f] && !m) u && t.push(u), w.push(t), t = [], "," === b[f +
                            1] && (w.push([""]), f++), q = "";
                        else {
                            if (k && ")" === b[f] && !m) return f++, k--, q = e.pop(), u && t.push(u), w.push(t), Qk(a, q, w);
                            q += b[f]
                        }
                        f++
                    }
                    f === b.length && q.length && t.push(q)
                }
                return a.xb ? t.join("") : Promise.all(t).then(function(r) {
                    return r.join("")
                }).catch(function(r) {
                    za(r);
                    return ""
                })
            }
            var e = [],
                f = 0,
                h = 0,
                l = c[h],
                k = 0,
                m = !1;
            return d(a.Ag)
        }

        function Qk(a, b, c) {
            var d = b.encode,
                e = b.name;
            if (void 0 != b.prioritized) var f = b.prioritized;
            else a.xb && void 0 != b.sync ? f = b.sync : a.xb ? (H().error("Expander", "ignoring async replacement key: ", b.name), f = "") : f = b.async || b.sync;
            return a.xb ? (a = Rk(a, f, e, c), d ? encodeURIComponent(a) : a) : Sk(a, f, e, c).then(function(h) {
                return d ? encodeURIComponent(h) : h
            })
        }

        function Sk(a, b, c, d) {
            try {
                var e = "function" === typeof b ? d ? Tk(d).then(function(f) {
                    return b.apply(null, f)
                }) : qa(b) : Promise.resolve(b);
                return e.then(function(f) {
                    Uk(a, c, f, d);
                    return null == f ? "" : f
                }).catch(function(f) {
                    za(f);
                    Uk(a, c, "", d);
                    return Promise.resolve("")
                })
            } catch (f) {
                return za(f), Uk(a, c, "", d), Promise.resolve("")
            }
        }

        function Tk(a) {
            return Promise.all(a.map(function(b) {
                return Promise.all(b).then(function(c) {
                    return c.join("")
                })
            }))
        }

        function Rk(a, b, c, d) {
            try {
                var e = b;
                "function" === typeof b && (e = b.apply(null, Vk(d)));
                if (e && "function" == typeof e.then) {
                    H().error("Expander", "ignoring async macro resolution");
                    var f = ""
                } else "string" === typeof e || "number" === typeof e || "boolean" === typeof e ? (Uk(a, c, e, d), f = e.toString()) : (Uk(a, c, "", d), f = "");
                return f
            } catch (h) {
                return za(h), Uk(a, c, "", d), ""
            }
        }

        function Vk(a) {
            return a ? a.map(function(b) {
                return b.join("")
            }) : a
        }

        function Uk(a, b, c, d) {
            if (a.df) {
                var e = "";
                d && (e = "(" + d.filter(function(f) {
                    return "" !== f
                }).join(",") + ")");
                a.df["" + b + e] = c || ""
            }
        };

        function Wk(a) {
            return function() {
                return (new Date)[a]()
            }
        }

        function Xk(a, b) {
            return function() {
                return a[b]
            }
        }

        function Yk() {
            Kk.apply(this, arguments)
        }
        la(Yk, Kk);

        function Zk(a, b, c, d) {
            a.setBoth(b, function() {
                return Ik(a.ampdoc.win, c, d)
            }, function() {
                return Hk(a.ampdoc.win, c, d)
            })
        }
        Yk.prototype.initialize = function() {
            function a() {
                var k = $k(b);
                return xe(al(b, k.sourceUrl))
            }
            var b = this,
                c = this.ampdoc.win,
                d = this.ampdoc.getHeadNode(),
                e = de(this.ampdoc);
            this.set("RANDOM", function() {
                return Math.random()
            });
            var f = Object.create(null);
            this.set("COUNTER", function(k) {
                return f[k] = (f[k] | 0) + 1
            });
            this.set("CANONICAL_URL", function() {
                return $k(b).canonicalUrl
            });
            this.set("CANONICAL_HOST", function() {
                return S($k(b).canonicalUrl).host
            });
            this.set("CANONICAL_HOSTNAME", function() {
                return S($k(b).canonicalUrl).hostname
            });
            this.set("CANONICAL_PATH", function() {
                return S($k(b).canonicalUrl).pathname
            });
            this.setAsync("DOCUMENT_REFERRER", function() {
                return R(b.ampdoc).getReferrerUrl()
            });
            this.setAsync("EXTERNAL_REFERRER", function() {
                return R(b.ampdoc).getReferrerUrl().then(function(k) {
                    return k ? S(Be(k)).hostname === c.location.hostname ? null : k : null
                })
            });
            this.set("TITLE", function() {
                var k = c.document;
                return k.originalTitle || k.title
            });
            this.set("AMPDOC_URL", function() {
                return xe(al(b, c.location.href))
            });
            this.set("AMPDOC_HOST", function() {
                var k =
                    S(c.location.href);
                return k && k.host
            });
            this.set("AMPDOC_HOSTNAME", function() {
                var k = S(c.location.href);
                return k && k.hostname
            });
            this.setBoth("SOURCE_URL", function() {
                return a()
            }, function() {
                return wh().then(function() {
                    return a()
                })
            });
            this.set("SOURCE_HOST", function() {
                return S($k(b).sourceUrl).host
            });
            this.set("SOURCE_HOSTNAME", function() {
                return S($k(b).sourceUrl).hostname
            });
            this.set("SOURCE_PATH", function() {
                return S($k(b).sourceUrl).pathname
            });
            this.set("PAGE_VIEW_ID", function() {
                return $k(b).pageViewId
            });
            this.setAsync("PAGE_VIEW_ID_64", function() {
                return $k(b).pageViewId64
            });
            this.setBoth("QUERY_PARAM", function(k, m) {
                return bl(b, k, void 0 === m ? "" : m)
            }, function(k, m) {
                var n = void 0 === m ? "" : m;
                return wh().then(function() {
                    return bl(b, k, n)
                })
            });
            this.set("FRAGMENT_PARAM", function(k, m) {
                m = void 0 === m ? "" : m;
                K(k, "The first argument to FRAGMENT_PARAM, the fragment string param is required");
                K("string" == typeof k, "param should be a string");
                var n = C(b.ampdoc.win.location.originalHash);
                return void 0 === n[k] ? m : n[k]
            });
            var h = null;
            this.setBoth("CLIENT_ID", function(k) {
                return h ? h[k] : null
            }, function(k, m, n, q) {
                K(k, "The first argument to CLIENT_ID, the fallback Cookie name, is required");
                var t = v();
                m && (t = Td(d, "userNotificationManager", "amp-user-notification").then(function(w) {
                    return w.get(m)
                }));
                return Fd(b.ampdoc, "cid").then(function(w) {
                    q = "true" == q ? !0 : !1;
                    return w.get({
                        scope: k,
                        createCookieIfNotPresent: !0,
                        cookieName: n || void 0,
                        disableBackup: q
                    }, t)
                }).then(function(w) {
                    h || (h = Object.create(null));
                    var u = n || k;
                    w && "_ga" == u && ("string" === typeof w ?
                        w = w.replace(/^(GA1|1)\.[\d-]+\./, "") : J().error("UrlReplacements", "non-string cid, what is it?", Object.keys(w)));
                    return h[k] = w
                })
            });
            this.setAsync("VARIANT", function(k) {
                return cl(b, function(m) {
                    var n = m[k];
                    K(void 0 !== n, "The value passed to VARIANT() is not a valid experiment in <amp-experiment>:" + k);
                    return null === n ? "none" : n
                }, "VARIANT")
            });
            this.setAsync("VARIANTS", function() {
                return cl(b, function(k) {
                    var m = [],
                        n;
                    for (n in k) m.push(n + "." + (k[n] || "none"));
                    return m.join("!")
                }, "VARIANTS")
            });
            this.setAsync("AMP_GEO",
                function(k) {
                    return dl(b, function(m) {
                        return k ? (K("ISOCountry" === k, "The value passed to AMP_GEO() is not valid name:" + k), m[k] || "unknown") : m.matchedISOCountryGroups.join(",")
                    })
                });
            this.set("TIMESTAMP", Wk("getTime"));
            this.set("TIMESTAMP_ISO", Wk("toISOString"));
            this.set("TIMEZONE", Wk("getTimezoneOffset"));
            this.set("SCROLL_HEIGHT", function() {
                return e.getScrollHeight()
            });
            this.set("SCROLL_WIDTH", function() {
                return e.getScrollWidth()
            });
            this.set("VIEWPORT_HEIGHT", function() {
                return e.getHeight()
            });
            this.set("VIEWPORT_WIDTH",
                function() {
                    return e.getWidth()
                });
            var l = c.screen;
            this.set("SCREEN_WIDTH", Xk(l, "width"));
            this.set("SCREEN_HEIGHT", Xk(l, "height"));
            this.set("AVAILABLE_SCREEN_HEIGHT", Xk(l, "availHeight"));
            this.set("AVAILABLE_SCREEN_WIDTH", Xk(l, "availWidth"));
            this.set("SCREEN_COLOR_DEPTH", Xk(l, "colorDepth"));
            this.set("DOCUMENT_CHARSET", function() {
                var k = c.document;
                return k.characterSet || k.charset
            });
            this.set("BROWSER_LANGUAGE", function() {
                var k = c.navigator;
                return (k.language || k.userLanguage || k.browserLanguage || "").toLowerCase()
            });
            this.set("USER_AGENT", function() {
                return c.navigator.userAgent
            });
            Zk(this, "PAGE_LOAD_TIME", "navigationStart", "loadEventStart");
            Zk(this, "DOMAIN_LOOKUP_TIME", "domainLookupStart", "domainLookupEnd");
            Zk(this, "TCP_CONNECT_TIME", "connectStart", "connectEnd");
            Zk(this, "SERVER_RESPONSE_TIME", "requestStart", "responseStart");
            Zk(this, "PAGE_DOWNLOAD_TIME", "responseStart", "responseEnd");
            Zk(this, "REDIRECT_TIME", "navigationStart", "fetchStart");
            Zk(this, "DOM_INTERACTIVE_TIME", "navigationStart", "domInteractive");
            Zk(this,
                "CONTENT_LOAD_TIME", "navigationStart", "domContentLoadedEventStart");
            this.setAsync("ACCESS_READER_ID", function() {
                return el(b, function(k) {
                    return k.getAccessReaderId()
                }, "ACCESS_READER_ID")
            });
            this.setAsync("AUTHDATA", function(k) {
                K(k, "The first argument to AUTHDATA, the field, is required");
                return el(b, function(m) {
                    return m.getAuthdataField(k)
                }, "AUTHDATA")
            });
            this.setAsync("VIEWER", function() {
                return R(b.ampdoc).getViewerOrigin().then(function(k) {
                    return void 0 == k ? "" : k
                })
            });
            this.setAsync("TOTAL_ENGAGED_TIME",
                function() {
                    return Td(d, "activity", "amp-analytics").then(function(k) {
                        return k.getTotalEngagedTime()
                    })
                });
            this.setAsync("INCREMENTAL_ENGAGED_TIME", function(k, m) {
                return Td(d, "activity", "amp-analytics").then(function(n) {
                    return n.getIncrementalEngagedTime(k, "false" !== m)
                })
            });
            this.set("NAV_TIMING", function(k, m) {
                K(k, "The first argument to NAV_TIMING, the start attribute name, is required");
                return Ik(c, k, m)
            });
            this.setAsync("NAV_TIMING", function(k, m) {
                K(k, "The first argument to NAV_TIMING, the start attribute name, is required");
                return Hk(c, k, m)
            });
            this.set("NAV_TYPE", function() {
                return Jk(c, "type")
            });
            this.set("NAV_REDIRECT_COUNT", function() {
                return Jk(c, "redirectCount")
            });
            this.set("AMP_VERSION", function() {
                return "2105150310000"
            });
            this.set("BACKGROUND_STATE", function() {
                return b.ampdoc.isVisible() ? "0" : "1"
            });
            this.setAsync("VIDEO_STATE", function(k, m) {
                return Cd(b.ampdoc, "video-manager").getVideoStateProperty(k, m)
            });
            this.setAsync("AMP_STATE", function(k) {
                var m = b.ampdoc.getRootNode();
                return Vd(m.documentElement || m).then(function(n) {
                    return n ?
                        n.getStateValue(k) || "" : ""
                })
            })
        };

        function al(a, b) {
            if (a = $k(a).replaceParams) {
                b = ze(b);
                var c = S(b);
                c = C(c.search);
                for (var d = A({}), e = Object.keys(a), f = 0; f < e.length; f++) ta.call(c, e[f]) || (d[e[f]] = a[e[f]]);
                a = te(b, d)
            } else a = b;
            return a
        }

        function $k(a) {
            return Xd(a.ampdoc)
        }

        function el(a, b, c) {
            a = a.ampdoc.getHeadNode();
            return Promise.all([Ud(a, "access", "amp-access"), Ud(a, "subscriptions", "amp-subscriptions")]).then(function(d) {
                var e = d[0],
                    f = d[1];
                d = e || f;
                return d ? e && f ? b(f) || b(e) : b(d) : (H().error("UrlReplacements", "Access or subsciptions service is not installed to access: ", c), null)
            })
        }

        function bl(a, b, c) {
            K(b, "The first argument to QUERY_PARAM, the query string param is required");
            var d = S(ze(a.ampdoc.win.location.href));
            d = C(d.search);
            a = $k(a).replaceParams;
            return "undefined" !== typeof d[b] ? d[b] : a && "undefined" !== typeof a[b] ? a[b] : c
        }

        function cl(a, b, c) {
            return Ud(a.ampdoc.getHeadNode(), "variant", "amp-experiment", !0).then(function(d) {
                K(d, "To use variable %s, amp-experiment should be configured", c);
                return d.getVariants()
            }).then(function(d) {
                return b(d)
            })
        }

        function dl(a, b) {
            a = a.ampdoc.getHeadNode();
            return Ud(a, "geo", "amp-geo", !0).then(function(c) {
                K(c, "To use variable %s, amp-geo should be configured", "AMP_GEO");
                return b(c)
            })
        }

        function fl(a, b) {
            this.ampdoc = a;
            this.ga = b
        }
        g = fl.prototype;
        g.expandStringSync = function(a, b, c) {
            return (new Nk(this.ga, b, void 0, !0, c, !0)).expand(a)
        };
        g.expandStringAsync = function(a, b, c) {
            return (new Nk(this.ga, b, void 0, void 0, c, !0)).expand(a)
        };
        g.expandUrlSync = function(a, b, c) {
            return gl(a, (new Nk(this.ga, b, void 0, !0, c)).expand(a))
        };
        g.expandUrlAsync = function(a, b, c, d) {
            return (new Nk(this.ga, b, void 0, void 0, c, d)).expand(a).then(function(e) {
                return gl(a, e)
            })
        };
        g.expandInputValueAsync = function(a) {
            return hl(this, a, !1)
        };
        g.expandInputValueSync = function(a) {
            return hl(this, a, !0)
        };

        function hl(a, b, c) {
            "INPUT" == b.tagName && (b.getAttribute("type") || "").toLowerCase();
            var d = il(b);
            if (!d) return c ? b.value : Promise.resolve(b.value);
            void 0 === b["amp-original-value"] && (b["amp-original-value"] = b.value);
            a = (new Nk(a.ga, void 0, void 0, c, d)).expand(b["amp-original-value"] || b.value);
            return c ? b.value = a : a.then(function(e) {
                return b.value = e
            })
        }

        function il(a, b) {
            if (a = a.getAttribute("data-amp-replace")) {
                var c = {};
                a.trim().split(/\s+/).forEach(function(d) {
                    !b || ta.call(b, d) ? c[d] = !0 : H().warn("URL", "Ignoring unsupported replacement", d)
                });
                return c
            }
        }
        g.maybeExpandLink = function(a, b) {
            var c = a.getAttribute("data-amp-addparams") || "",
                d = il(a, {
                    CLIENT_ID: !0,
                    QUERY_PARAM: !0,
                    PAGE_VIEW_ID: !0,
                    PAGE_VIEW_ID_64: !0,
                    NAV_TIMING: !0
                });
            if (d || c || b) {
                var e = a["amp-original-href"] || a.getAttribute("href"),
                    f = S(e);
                null == a["amp-original-href"] && (a["amp-original-href"] = e);
                a: {
                    var h = Xd(this.ampdoc);
                    if (f.origin == S(h.canonicalUrl).origin || f.origin == S(h.sourceUrl).origin) f = !0;
                    else {
                        if (h = this.ampdoc.getMetaByName("amp-link-variable-allowed-origin")) {
                            h = h.trim().split(/\s+/);
                            for (var l =
                                    0; l < h.length; l++)
                                if (f.origin == S(h[l]).origin) {
                                    f = !0;
                                    break a
                                }
                        }
                        f = !1
                    }
                }
                var k = f;
                c && (k ? (f = c, f = d ? this.expandUrlSync(f, void 0, d) : f) : f = c, c = f, e = te(e, C(c)));
                if (!k) return d && H().warn("URL", "Ignoring link replacement %s because the link does not go to the document's source, canonical, or allowlisted origin.", e), a.href = e;
                b && (d && d.QUERY_PARAM || (b = this.expandUrlSync(b, void 0, {
                    QUERY_PARAM: !0
                })), e = te(e, C(b)));
                e = d ? this.expandUrlSync(e, void 0, d) : e;
                return a.href = e
            }
        };
        g.collectVars = function(a, b) {
            var c = Object.create(null);
            return (new Nk(this.ga, b, c)).expand(a).then(function() {
                return c
            })
        };
        g.collectDisallowedVarsSync = function(a) {
            var b = a.getAttribute("src"),
                c = (new Nk(this.ga)).getMacroNames(b),
                d = il(a);
            return d ? c.filter(function(e) {
                return !d[e]
            }) : c
        };

        function gl(a, b) {
            var c = S(b, !0).protocol,
                d = S(a, !0).protocol;
            if (c != d) return H().error("UrlReplacements", "Illegal replacement of the protocol: ", a), a;
            K(ye(b), "The replacement url has invalid protocol: %s", b);
            return b
        }
        g.getVariableSource = function() {
            return this.ga
        };

        function jl(a) {
            N(a, "url-replace", function(b) {
                return new fl(b, new Yk(b))
            })
        };
        var kl = /^(https?:\/\/)((www[0-9]*|web|ftp|wap|home|mobile|amp|m)\.)+/i;

        function ll(a) {
            var b = this;
            this.ampdoc = a;
            this.win = a.win;
            this.Rb = xc(this.win);
            this.ja = !0;
            this.Ec = !1;
            this.be = z();
            this.wc = z();
            this.Rf = new Y;
            this.Ue = new Y;
            this.yc = this.qb = null;
            this.rb = [];
            this.xa = z();
            this.Nb = z();
            a.isSingleDoc() && Object.assign(this.Nb, C(this.win.location.hash));
            this.ja = !parseInt(a.getParam("off"), 10);
            J().fine("Viewer", "- runtimeOn:", this.ja);
            this.Ec = !(!parseInt(a.getParam("history"), 10) && !this.Ec);
            J().fine("Viewer", "- history:", this.Ec);
            J().fine("Viewer", "- visibilityState:", this.ampdoc.getVisibilityState());
            this.Qb = null;
            this.Xg = T(S(this.ampdoc.win.location.href));
            var c = new x;
            this.dh = c.resolve;
            this.Wa = ml(this, c.promise);
            this.De = this.nb = null;
            var d = a.getParam("referrer");
            this.Xc = this.isEmbedded() && null != d && !1 !== nl(this) ? d : this.win.document.referrer;
            this.rh = new Promise(function(f) {
                b.isEmbedded() && null != a.getParam("referrer") ? b.isTrustedViewer().then(function(h) {
                    h ? f(a.getParam("referrer")) : (f(b.win.document.referrer), b.Xc != b.win.document.referrer && (J().expectedError("Viewer", "Untrusted viewer referrer override: " +
                        b.Xc + " at " + b.yc), b.Xc = b.win.document.referrer))
                }) : f(b.win.document.referrer)
            });
            this.Nc = xe(this.win.location.href || "");
            this.Nh = new Promise(function(f) {
                var h = a.getParam("viewerUrl");
                b.isEmbedded() && h ? b.isTrustedViewer().then(function(l) {
                    l ? b.Nc = h : J().expectedError("Viewer", "Untrusted viewer url override: " + h + " at " + b.yc);
                    f(b.Nc)
                }) : f(b.Nc)
            });
            if (this.Nb.click) {
                var e = xe(this.win.location.href);
                e != this.win.location.href && this.win.history.replaceState && (this.win.location.originalHash || (this.win.location.originalHash =
                    this.win.location.hash), this.win.history.replaceState({}, "", e), delete this.Nb.click, J().fine("Viewer", "replace fragment:" + this.win.location.href))
            }
            this.ampdoc.whenFirstVisible().then(function() {
                b.maybeUpdateFragmentForCct()
            });
            this.ampdoc.isSingleDoc() && ol(this)
        }

        function ml(a, b) {
            return a.Rb && !a.win.__AMP_TEST_IFRAME && (a.ampdoc.getParam("origin") || a.ampdoc.getParam("visibilityState") || -1 != a.win.location.search.indexOf("amp_js_v")) || a.isWebviewEmbedded() || a.isCctEmbedded() || !a.ampdoc.isSingleDoc() ? P(a.win).timeoutPromise(2E4, b, "initMessagingChannel timeout").catch(function(c) {
                (c = pl(c)) && Za(c.message, "initMessagingChannel timeout") && (c = J().createExpectedError(c));
                If(c);
                throw c;
            }) : null
        }
        g = ll.prototype;
        g.getAmpDoc = function() {
            return this.ampdoc
        };
        g.getParam = function(a) {
            return this.ampdoc.getParam(a)
        };
        g.hasCapability = function(a) {
            var b = this.ampdoc.getParam("cap");
            return b ? -1 != b.split(",").indexOf(a) : !1
        };
        g.isEmbedded = function() {
            return !!this.Wa
        };
        g.isWebviewEmbedded = function() {
            return !this.Rb && "1" == this.ampdoc.getParam("webview")
        };
        g.isCctEmbedded = function() {
            if (null != this.Qb) return this.Qb;
            this.Qb = !1;
            if (!this.Rb) {
                var a = C(this.win.location.search);
                this.Qb = "1" === a.amp_gsa && (a.amp_js_v || "").startsWith("a")
            }
            return this.Qb
        };
        g.isProxyOrigin = function() {
            return this.Xg
        };
        g.maybeUpdateFragmentForCct = function() {
            if (this.isCctEmbedded() && this.win.history.replaceState) {
                var a = Ce(this.win.location.href),
                    b = Xd(this.ampdoc).canonicalUrl,
                    c = Ce(b);
                ql(a, c) && (this.Nb.ampshare = b, this.win.history.replaceState({}, "", "#" + ue(this.Nb)))
            }
        };

        function ql(a, b) {
            function c(d) {
                return 2 < d.split(".").length ? d.replace(kl, "$1") : d
            }
            return c(a) == c(b)
        }
        g.isRuntimeOn = function() {
            return this.ja
        };
        g.toggleRuntime = function() {
            this.ja = !this.ja;
            J().fine("Viewer", "Runtime state:", this.ja);
            this.Rf.fire(this.ja)
        };
        g.onRuntimeState = function(a) {
            return this.Rf.add(a)
        };
        g.isOvertakeHistory = function() {
            return this.Ec
        };
        g.getVisibilityState = function() {
            return this.ampdoc.getVisibilityState()
        };
        g.isVisible = function() {
            return this.ampdoc.isVisible()
        };
        g.hasBeenVisible = function() {
            return this.ampdoc.hasBeenVisible()
        };
        g.whenFirstVisible = function() {
            return this.ampdoc.whenFirstVisible()
        };
        g.whenNextVisible = function() {
            return this.ampdoc.whenNextVisible()
        };
        g.getFirstVisibleTime = function() {
            return this.ampdoc.getFirstVisibleTime()
        };
        g.getLastVisibleTime = function() {
            return this.ampdoc.getLastVisibleTime()
        };
        g.onVisibilityChanged = function(a) {
            return this.ampdoc.onVisibilityChanged(a)
        };

        function rl(a, b) {
            b && (b = J().assertEnumValue( of , b, "VisibilityState"), "hidden" === b && (b = null != a.ampdoc.getLastVisibleTime() ? "inactive" : "prerender"), a.ampdoc.overrideVisibilityState(b), J().fine("Viewer", "visibilitychange event:", a.ampdoc.getVisibilityState()))
        }
        g.getResolvedViewerUrl = function() {
            return this.Nc
        };
        g.getViewerUrl = function() {
            return this.Nh
        };
        g.maybeGetMessagingOrigin = function() {
            return this.yc
        };
        g.getUnconfirmedReferrerUrl = function() {
            return this.Xc
        };
        g.getReferrerUrl = function() {
            return this.rh
        };
        g.isTrustedViewer = function() {
            if (!this.nb) {
                var a = nl(this);
                this.nb = void 0 !== a ? Promise.resolve(a) : this.Wa.then(function(b) {
                    return b ? sl(b) : !1
                })
            }
            return this.nb
        };

        function nl(a) {
            if (!a.isEmbedded()) return !1;
            if (a.win.location.ancestorOrigins && !a.isWebviewEmbedded() && !a.isCctEmbedded()) return 0 < a.win.location.ancestorOrigins.length && sl(a.win.location.ancestorOrigins[0])
        }
        g.getViewerOrigin = function() {
            if (!this.De) {
                var a;
                this.isEmbedded() ? this.win.location.ancestorOrigins && 0 < this.win.location.ancestorOrigins.length && (a = this.win.location.ancestorOrigins[0]) : a = "";
                this.De = void 0 !== a ? Promise.resolve(a) : P(this.win).timeoutPromise(1E3, this.Wa).catch(function() {
                    return ""
                })
            }
            return this.De
        };

        function sl(a) {
            var b = S(a);
            a = b.protocol;
            return "x-thread:" == a ? !0 : "https:" != a ? !1 : ob.trustedViewerHosts.some(function(c) {
                return c.test(b.hostname)
            })
        }
        g.onMessage = function(a, b) {
            var c = this.be[a];
            c || (c = new Y, this.be[a] = c);
            var d = c.add(b);
            this.xa[a] && (this.xa[a].forEach(function(e) {
                c.fire(e.data);
                e.deferred.resolve()
            }), this.xa[a] = []);
            return d
        };
        g.onMessageRespond = function(a, b) {
            var c = this;
            this.wc[a] = b;
            this.xa[a] && (this.xa[a].forEach(function(d) {
                d.deferred.resolve(b(d.data))
            }), this.xa[a] = []);
            return function() {
                c.wc[a] === b && delete c.wc[a]
            }
        };
        g.receiveMessage = function(a, b) {
            if ("visibilitychange" == a) return rl(this, b.state), v();
            if ("broadcast" == a) return this.Ue.fire(b), v();
            var c = this.be[a],
                d = this.wc[a];
            if (!c && !d) {
                this.xa[a] = this.xa[a] || [];
                if (50 <= this.xa[a].length) return;
                c = new x;
                this.xa[a].push({
                    data: b,
                    deferred: c
                });
                return c.promise
            }
            c && c.fire(b);
            if (d) return d(b);
            if (c) return v()
        };
        g.setMessageDeliverer = function(a, b) {
            var c = this;
            if (this.qb) throw Error("message channel can only be initialized once");
            if (null == b) throw Error("message channel must have an origin");
            J().fine("Viewer", "message channel established with origin: ", b);
            this.qb = a;
            this.yc = b;
            this.dh(b);
            0 < this.rb.length && (a = this.rb.slice(0), this.rb = [], a.forEach(function(d) {
                var e = c.qb(d.eventType, d.data, d.awaitResponse);
                d.awaitResponse && d.responseResolver(e)
            }))
        };
        g.sendMessage = function(a, b, c) {
            tl(this, a, b, void 0 === c ? !1 : c, !1)
        };
        g.sendMessageAwaitResponse = function(a, b, c) {
            return tl(this, a, b, void 0 === c ? !1 : c, !0)
        };

        function tl(a, b, c, d, e) {
            if (a.qb) return qa(function() {
                return a.qb(b, c, e)
            });
            if (!a.Wa) return e ? Promise.reject(pl()) : v();
            if (!d) return a.Wa.then(function() {
                return a.qb(b, c, e)
            });
            var f = Xa(a.rb, function(h) {
                return h.eventType == b
            }); - 1 != f ? (d = a.rb.splice(f, 1)[0], d.data = c, d.awaitResponse = d.awaitResponse || e) : (d = new x, d = {
                eventType: b,
                data: c,
                awaitResponse: e,
                responsePromise: d.promise,
                responseResolver: d.resolve
            });
            a.rb.push(d);
            return d.responsePromise
        }
        g.broadcast = function(a) {
            return this.Wa ? tl(this, "broadcast", a, !1, !1).then(function() {
                return !0
            }, function() {
                return !1
            }) : Promise.resolve(!1)
        };
        g.onBroadcast = function(a) {
            return this.Ue.add(a)
        };
        g.whenMessagingReady = function() {
            return this.Wa
        };
        g.replaceUrl = function(a) {
            if (a && this.ampdoc.isSingleDoc() && this.win.history.replaceState) try {
                var b = S(this.win.location.href),
                    c = S(xe(a) + this.win.location.hash);
                b.origin == c.origin && Ce(b) == Ce(c) && (this.win.history.replaceState({}, "", c.href), this.win.location.originalHref = b.href, J().fine("Viewer", "replace url:" + c.href))
            } catch (d) {
                J().error("Viewer", "replaceUrl failed", d)
            }
        };

        function ol(a) {
            if ("visible" != a.ampdoc.getVisibilityState()) {
                var b = [],
                    c = function() {
                        return b.forEach(function(f) {
                            return f()
                        })
                    },
                    d = function() {
                        rl(a, "visible");
                        c();
                        J().expectedError("Viewer", "Received user action in non-visible doc")
                    },
                    e = {
                        capture: !0,
                        passive: !0
                    };
                b.push(ef(a.win, "keydown", d, e), ef(a.win, "touchstart", d, e), ef(a.win, "mousedown", d, e));
                a.whenFirstVisible().then(c)
            }
        }

        function pl(a) {
            if (a instanceof Error) {
                a = xa(a);
                a.message = "No messaging channel: " + a.message;
                var b = a
            } else b = Error("No messaging channel: " + a);
            b.message = b.message.replace("\u200b\u200b\u200b", "");
            return b
        };

        function ul(a, b, c, d) {
            return function(e) {
                return vl(e, a, b, c, d)
            }
        }

        function vl(a, b, c, d, e) {
            a: {
                var f = a - 0;
                if (0 >= f) a = 0;
                else if (1 <= f) a = 1;
                else {
                    for (var h = 0, l = 1, k = 0, m = 0; 8 > m; m++) {
                        k = wl(f, b, d);
                        var n = (wl(f + 1E-6, b, d) - k) / 1E-6;
                        if (1E-6 > Math.abs(k - a)) {
                            a = f;
                            break a
                        }
                        if (1E-6 > Math.abs(n)) break;
                        else k < a ? h = f : l = f, f -= (k - a) / n
                    }
                    for (m = 0; 1E-6 < Math.abs(k - a) && 8 > m; m++) k < a ? (h = f, f = (f + l) / 2) : (l = f, f = (f + h) / 2), k = wl(f, b, d);
                    a = f
                }
            }
            0 == a ? e = 0 : 1 == a ? e = 1 : (b = xl(0, c, a), c = xl(c, e, a), e = xl(e, 1, a), b = xl(b, c, a), c = xl(c, e, a), e = xl(b, c, a));
            return e
        }

        function wl(a, b, c) {
            if (0 == a) return 0;
            if (1 == a) return 1;
            var d = xl(0, b, a),
                e = xl(b, c, a),
                f = xl(c, 1, a);
            d = xl(d, e, a);
            e = xl(e, f, a);
            return xl(d, e, a)
        }

        function xl(a, b, c) {
            return a + c * (b - a)
        }
        var yl = {
            linear: function(a) {
                return a
            },
            ease: function(a) {
                return vl(a, .25, .1, .25, 1)
            },
            "ease-in": function(a) {
                return vl(a, .42, 0, 1, 1)
            },
            "ease-out": function(a) {
                return vl(a, 0, 0, .58, 1)
            },
            "ease-in-out": function(a) {
                return vl(a, .42, 0, .58, 1)
            }
        };

        function zl(a) {
            if (!a) return null;
            if ("string" == typeof a) {
                if (-1 != a.indexOf("cubic-bezier")) {
                    var b = a.match(/cubic-bezier\((.+)\)/);
                    if (b && (b = b[1].split(",").map(parseFloat), 4 == b.length)) {
                        for (var c = 0; 4 > c; c++)
                            if (isNaN(b[c])) return null;
                        return ul(b[0], b[1], b[2], b[3])
                    }
                    return null
                }
                return yl[a]
            }
            return a
        };

        function Al() {}

        function Bl(a) {
            this.Hb = a;
            this.I = be(self);
            this.hf = null;
            this.Y = []
        }

        function Cl(a, b, c, d) {
            return (new Bl(a)).setCurve(d).add(0, b, 1).start(c)
        }
        Bl.prototype.setCurve = function(a) {
            a && (this.hf = zl(a));
            return this
        };
        Bl.prototype.add = function(a, b, c, d) {
            this.Y.push({
                delay: a,
                func: b,
                duration: c,
                curve: zl(d)
            });
            return this
        };
        Bl.prototype.start = function(a) {
            return new Dl(this.I, this.Hb, this.Y, this.hf, a)
        };

        function Dl(a, b, c, d, e) {
            this.I = a;
            this.Hb = b;
            this.Y = [];
            for (a = 0; a < c.length; a++) {
                var f = c[a];
                this.Y.push({
                    delay: f.delay,
                    func: f.func,
                    duration: f.duration,
                    curve: f.curve || d,
                    started: !1,
                    completed: !1
                })
            }
            this.zg = e;
            this.ve = Date.now();
            this.Za = !0;
            this.H = {};
            c = new x;
            this.Nf = c.promise;
            this.Mc = c.resolve;
            this.sh = c.reject;
            this.$f = this.I.createAnimTask(this.Hb, {
                mutate: this.Dh.bind(this)
            });
            this.I.canAnimate(this.Hb) ? this.$f(this.H) : (J().warn("Animation", "cannot animate"), El(this, !1, 0))
        }
        Dl.prototype.then = function(a, b) {
            return a || b ? this.Nf.then(a, b) : this.Nf
        };
        Dl.prototype.thenAlways = function(a) {
            a = a || Al;
            return this.then(a, a)
        };
        Dl.prototype.halt = function(a) {
            El(this, !1, a || 0)
        };

        function El(a, b, c) {
            if (a.Za) {
                a.Za = !1;
                if (0 != c) {
                    1 < a.Y.length && a.Y.sort(function(e, f) {
                        return e.delay + e.duration - (f.delay + f.duration)
                    });
                    try {
                        if (0 < c)
                            for (c = 0; c < a.Y.length; c++) a.Y[c].func(1, !0);
                        else
                            for (var d = a.Y.length - 1; 0 <= d; d--) a.Y[d].func(0, !1)
                    } catch (e) {
                        J().error("Animation", "completion failed: " + e, e), b = !1
                    }
                }
                b ? a.Mc() : a.sh()
            }
        }
        Dl.prototype.Dh = function() {
            if (this.Za) {
                for (var a = Date.now(), b = Math.min((a - this.ve) / this.zg, 1), c = 0; c < this.Y.length; c++) {
                    var d = this.Y[c];
                    !d.started && b >= d.delay && (d.started = !0)
                }
                for (c = 0; c < this.Y.length; c++)
                    if (d = this.Y[c], d.started && !d.completed) a: {
                        var e;
                        if (0 < d.duration) {
                            var f = e = Math.min((b - d.delay) / d.duration, 1);
                            if (d.curve && 1 != f) try {
                                f = d.curve(e)
                            } catch (h) {
                                J().error("Animation", "step curve failed: " + h, h);
                                El(this, !1, 0);
                                break a
                            }
                        } else f = e = 1;1 == e && (d.completed = !0);
                        try {
                            d.func(f, d.completed)
                        } catch (h) {
                            J().error("Animation",
                                "step mutate failed: " + h, h), El(this, !1, 0)
                        }
                    }
                1 == b ? El(this, !0, 0) : this.I.canAnimate(this.Hb) ? this.$f(this.H) : (J().warn("Animation", "cancel animation"), El(this, !1, 0))
            }
        };

        function Fl(a, b) {
            for (b = b.lastElementChild; b; b = b.previousElementSibling)
                if (0 < b.getBoundingClientRect().height) {
                    var c = a.getComputedStyle(b) || Me;
                    if ("static" == c.position || "relative" == c.position) {
                        var d = c;
                        break
                    }
                }
            return d ? parseInt(d.marginBottom, 10) : 0
        };

        function Hl(a) {
            var b = this;
            this.win = a;
            this.I = be(a);
            a = this.win.document;
            var c = a.documentElement,
                d = c.className;
            c.classList.add("i-amphtml-ios-embed");
            var e = a.createElement("html");
            this.Z = e;
            e.id = "i-amphtml-wrapper";
            e.className = d;
            this.Qa = new Y;
            this.Pa = new Y;
            this.Gb = this.Kf.bind(this);
            this.Fb = function() {
                return b.Pa.fire()
            };
            this.da = 0;
            this.Uf = !1;
            ec(a, this.Vf.bind(this));
            Mj(a).then(function() {
                c.classList.add("i-amphtml-ios-overscroll")
            });
            J().fine("Viewport", "initialized ios-embed-wrapper viewport")
        }
        g = Hl.prototype;
        g.ensureReadyForElements = function() {
            this.Vf()
        };
        g.Vf = function() {
            if (!this.Uf) {
                this.Uf = !0;
                var a = this.win.document,
                    b = a.body;
                a.documentElement.appendChild(this.Z);
                this.Z.appendChild(b);
                Object.defineProperty(a, "body", {
                    get: function() {
                        return b
                    }
                });
                this.Kf()
            }
        };
        g.connect = function() {
            this.win.addEventListener("resize", this.Fb);
            this.Z.addEventListener("scroll", this.Gb)
        };
        g.disconnect = function() {
            this.win.removeEventListener("resize", this.Fb);
            this.Z.removeEventListener("scroll", this.Gb)
        };
        g.getBorderTop = function() {
            return 1
        };
        g.requiresFixedLayerTransfer = function() {
            return Ge(this.win, "ios-fixed-no-transfer") ? 12.2 > parseFloat(Q(this.win).getIosVersionString()) : !0
        };
        g.overrideGlobalScrollTo = function() {
            return !0
        };
        g.supportsPositionFixed = function() {
            return !0
        };
        g.onScroll = function(a) {
            this.Qa.add(a)
        };
        g.onResize = function(a) {
            this.Pa.add(a)
        };
        g.updatePaddingTop = function(a) {
            this.da = a;
            Oe(this.Z, {
                "padding-top": a + "px"
            })
        };
        g.hideViewerHeader = function(a) {
            a || this.updatePaddingTop(0)
        };
        g.showViewerHeader = function(a, b) {
            a || this.updatePaddingTop(b)
        };
        g.disableScroll = function() {
            this.Z.classList.add("i-amphtml-scroll-disabled")
        };
        g.resetScroll = function() {
            this.Z.classList.remove("i-amphtml-scroll-disabled")
        };
        g.updateLightboxMode = function() {
            return v()
        };
        g.getSize = function() {
            return {
                width: this.win.innerWidth,
                height: this.win.innerHeight
            }
        };
        g.getScrollTop = function() {
            return this.Z.scrollTop
        };
        g.getScrollLeft = function() {
            return 0
        };
        g.getScrollWidth = function() {
            return this.Z.scrollWidth
        };
        g.getScrollHeight = function() {
            return this.Z.scrollHeight
        };
        g.getContentHeight = function() {
            var a = this.win.document.body,
                b = a.getBoundingClientRect().height,
                c = Fl(this.win, a);
            a = this.win.getComputedStyle(a) || Me;
            return parseInt(a.marginTop, 10) + this.da + b + c + parseInt(a.marginBottom, 10)
        };
        g.contentHeightChanged = function() {};
        g.getLayoutRect = function(a, b, c) {
            a = a.getBoundingClientRect();
            var d = void 0 != c ? c : this.getScrollTop(),
                e = void 0 != b ? b : this.getScrollLeft();
            return Tb(Math.round(a.left + e), Math.round(a.top + d), Math.round(a.width), Math.round(a.height))
        };
        g.getRootClientRectAsync = function() {
            return Promise.resolve(null)
        };
        g.setScrollTop = function(a) {
            this.Z.scrollTop = a || 1
        };
        g.Kf = function(a) {
            0 == this.Z.scrollTop && (this.Z.scrollTop = 1, a && a.preventDefault());
            a && this.Qa.fire()
        };
        g.getScrollingElement = function() {
            return this.Z
        };
        g.getScrollingElementScrollsLikeViewport = function() {
            return !1
        };

        function Il(a) {
            var b = this;
            this.ampdoc = a;
            this.win = a.win;
            this.wa = Q(this.win);
            this.Qa = new Y;
            this.Pa = new Y;
            this.Gb = this.Hg.bind(this);
            this.Fb = function() {
                return b.Pa.fire()
            };
            J().fine("Viewport", "initialized natural viewport")
        }
        g = Il.prototype;
        g.Hg = function() {
            this.Qa.fire()
        };
        g.connect = function() {
            this.win.addEventListener("scroll", this.Gb);
            this.win.addEventListener("resize", this.Fb)
        };
        g.disconnect = function() {
            this.win.removeEventListener("scroll", this.Gb);
            this.win.removeEventListener("resize", this.Fb)
        };
        g.ensureReadyForElements = function() {};
        g.getBorderTop = function() {
            return 0
        };
        g.requiresFixedLayerTransfer = function() {
            return !1
        };
        g.overrideGlobalScrollTo = function() {
            return !1
        };
        g.supportsPositionFixed = function() {
            return !0
        };
        g.onScroll = function(a) {
            this.Qa.add(a)
        };
        g.onResize = function(a) {
            this.Pa.add(a)
        };
        g.updatePaddingTop = function(a) {
            Oe(this.win.document.documentElement, {
                "padding-top": a + "px"
            })
        };
        g.hideViewerHeader = function(a) {
            a || this.updatePaddingTop(0)
        };
        g.showViewerHeader = function(a, b) {
            a || this.updatePaddingTop(b)
        };
        g.disableScroll = function() {
            this.win.document.documentElement.classList.add("i-amphtml-scroll-disabled")
        };
        g.resetScroll = function() {
            this.win.document.documentElement.classList.remove("i-amphtml-scroll-disabled")
        };
        g.updateLightboxMode = function() {
            return v()
        };
        g.getSize = function() {
            var a = this.win.innerWidth,
                b = this.win.innerHeight;
            if (a && b) return {
                width: a,
                height: b
            };
            var c = this.win.document.documentElement;
            return {
                width: c.clientWidth,
                height: c.clientHeight
            }
        };
        g.getScrollTop = function() {
            var a = this.getScrollingElement().scrollTop || this.win.pageYOffset,
                b = this.ampdoc.getRootNode().host;
            return b ? a - b.offsetTop : a
        };
        g.getScrollLeft = function() {
            return 0
        };
        g.getScrollWidth = function() {
            return this.getScrollingElement().scrollWidth
        };
        g.getScrollHeight = function() {
            return this.getScrollingElement().scrollHeight
        };
        g.getContentHeight = function() {
            var a = this.getScrollingElement(),
                b = a.getBoundingClientRect(),
                c = b.top + this.getScrollTop(),
                d = Q(this.win).isSafari() ? Fl(this.win, a) : 0;
            a = this.win.getComputedStyle(a) || Me;
            return c + parseInt(a.marginTop, 10) + b.height + d + parseInt(a.marginBottom, 10)
        };
        g.contentHeightChanged = function() {};
        g.getLayoutRect = function(a, b, c) {
            a = a.getBoundingClientRect();
            c = void 0 != c ? c : this.getScrollTop();
            b = void 0 != b ? b : this.getScrollLeft();
            return Tb(Math.round(a.left + b), Math.round(a.top + c), Math.round(a.width), Math.round(a.height))
        };
        g.getRootClientRectAsync = function() {
            return Promise.resolve(null)
        };
        g.setScrollTop = function(a) {
            this.getScrollingElement().scrollTop = a
        };
        g.getScrollingElement = function() {
            var a = this.win.document;
            return a.scrollingElement ? a.scrollingElement : a.body && this.wa.isWebKit() ? a.body : a.documentElement
        };
        g.getScrollingElementScrollsLikeViewport = function() {
            return !0
        };

        function Jl(a, b) {
            return function(c) {
                return a + (b - a) * c
            }
        };

        function Kl(a, b, c) {
            var d = this,
                e = a.win;
            this.ampdoc = a;
            this.Gd = this.ampdoc.win.document;
            this.j = b;
            this.h = c;
            this.Ba = this.$ = this.cc = null;
            this.re = !1;
            this.Pc = null;
            this.da = Number(c.getParam("paddingTop") || 0);
            this.uc = 0;
            this.S = P(e);
            this.I = be(e);
            this.se = !1;
            this.te = null;
            this.zh = 0;
            this.af = new Y;
            this.Qa = new Y;
            this.Pa = new Y;
            this.je = this.jc = void 0;
            this.U = null;
            this.h.onMessage("viewport", this.Lh.bind(this));
            this.h.onMessage("scroll", this.Mh.bind(this));
            this.h.onMessage("disableScroll", this.yg.bind(this));
            this.h.isEmbedded() &&
                this.j.updatePaddingTop(this.da);
            this.j.onScroll(this.Ah.bind(this));
            this.j.onResize(this.Qf.bind(this));
            this.onScroll(this.Bh.bind(this));
            this.ha = !1;
            this.ampdoc.onVisibilityChanged(this.eg.bind(this));
            this.eg();
            var f = this.Gd.documentElement;
            a.isSingleDoc() && f.classList.add("i-amphtml-singledoc");
            c.isEmbedded() ? f.classList.add("i-amphtml-embedded") : f.classList.add("i-amphtml-standalone");
            xc(e) && f.classList.add("i-amphtml-iframed");
            "1" === c.getParam("webview") && f.classList.add("i-amphtml-webview");
            xc(e) && "scrollRestoration" in e.history && (e.history.scrollRestoration = "manual");
            if (this.j.overrideGlobalScrollTo()) try {
                Object.defineProperty(e, "scrollTo", {
                    value: function(h, l) {
                        return d.setScrollTop(l)
                    }
                }), ["pageYOffset", "scrollY"].forEach(function(h) {
                    Object.defineProperty(e, h, {
                        get: function() {
                            return d.getScrollTop()
                        }
                    })
                })
            } catch (h) {}
            Q(e).isIos() && xc(e) && this.ampdoc.isSingleDoc() && this.ampdoc.whenReady().then(function() {
                e.scrollTo(-.1, 0)
            })
        }
        g = Kl.prototype;
        g.dispose = function() {
            this.j.disconnect()
        };
        g.ensureReadyForElements = function() {
            this.j.ensureReadyForElements()
        };
        g.eg = function() {
            var a = this.ampdoc.isVisible();
            a != this.ha && ((this.ha = a) ? (this.j.connect(), this.$ && this.Qf(), this.Ba && (this.Ba = null, this.getScrollTop())) : this.j.disconnect())
        };
        g.getPaddingTop = function() {
            return this.da
        };
        g.getScrollTop = function() {
            null == this.Ba && (this.Ba = this.j.getScrollTop());
            return this.Ba
        };
        g.getScrollLeft = function() {
            null == this.Pc && (this.Pc = this.j.getScrollLeft());
            return this.Pc
        };
        g.setScrollTop = function(a) {
            this.Ba = null;
            this.j.setScrollTop(a)
        };
        g.updatePaddingBottom = function(a) {
            this.ampdoc.waitForBodyOpen().then(function(b) {
                V(b, "borderBottom", a + "px solid transparent")
            })
        };
        g.getSize = function() {
            if (this.$) return this.$;
            this.$ = this.j.getSize();
            if (0 == this.$.width || 0 == this.$.height) {
                var a = this.ampdoc.getVisibilityState();
                ("prerender" == a || "visible" == a) && .01 > Math.random() && J().error("Viewport", "viewport has zero dimensions")
            }
            return this.$
        };
        g.getHeight = function() {
            return this.getSize().height
        };
        g.getWidth = function() {
            return this.getSize().width
        };
        g.getScrollWidth = function() {
            return this.j.getScrollWidth()
        };
        g.getScrollHeight = function() {
            return this.j.getScrollHeight()
        };
        g.getContentHeight = function() {
            return this.j.getContentHeight()
        };
        g.contentHeightChanged = function() {
            this.j.contentHeightChanged()
        };
        g.getRect = function() {
            if (null == this.cc) {
                var a = this.getScrollTop(),
                    b = this.getScrollLeft(),
                    c = this.getSize();
                this.cc = Tb(b, a, c.width, c.height)
            }
            return this.cc
        };
        g.getLayoutRect = function(a) {
            var b = this.getScrollLeft(),
                c = this.getScrollTop(),
                d = Jd(a, this.ampdoc.win);
            return d ? (a = this.j.getLayoutRect(a, 0, 0), b = this.j.getLayoutRect(d, b, c), Tb(Math.round(a.left + b.left), Math.round(a.top + b.top), Math.round(a.width), Math.round(a.height))) : this.j.getLayoutRect(a, b, c)
        };
        g.getClientRectAsync = function(a) {
            var b = this.I.measurePromise(function() {
                    return a.getBoundingClientRect()
                }),
                c = this.j.getRootClientRectAsync(),
                d = Jd(a, this.ampdoc.win);
            d && (c = this.I.measurePromise(function() {
                return d.getBoundingClientRect()
            }));
            return Promise.all([b, c]).then(function(e) {
                var f = e[0];
                return (e = e[1]) ? Wb(f, e.left, e.top) : Tb(Number(f.left), Number(f.top), Number(f.width), Number(f.height))
            })
        };
        g.supportsPositionFixed = function() {
            return this.j.supportsPositionFixed()
        };
        g.isDeclaredFixed = function(a) {
            return this.U ? this.U.isDeclaredFixed(a) : !1
        };
        g.scrollIntoView = function(a) {
            var b = this;
            return Ll(this, a).then(function(c) {
                return Ml(b, a, c)
            })
        };

        function Ml(a, b, c) {
            var d = a.j.getLayoutRect(b).top;
            qa(function() {
                return Math.max(0, d - a.da)
            }).then(function(e) {
                return Nl(a, c, e)
            })
        }
        g.animateScrollIntoView = function(a, b, c, d) {
            var e = this,
                f = void 0 === b ? "top" : b;
            return Ll(this, a).then(function(h) {
                return e.animateScrollWithinParent(a, h, f, c, d)
            })
        };
        g.animateScrollWithinParent = function(a, b, c, d, e) {
            var f = this,
                h = this.j.getLayoutRect(a),
                l = (b == this.j.getScrollingElement() ? this.getSize() : this.getLayoutRect(b)).height;
            switch (c) {
                case "bottom":
                    var k = -l + h.height;
                    break;
                case "center":
                    k = -l / 2 + h.height / 2;
                    break;
                default:
                    k = 0
            }
            return Ol(this, b).then(function(m) {
                var n = Math.max(0, h.top - f.da + k);
                if (n != m) return Pl(f, b, m, n, d, e)
            })
        };

        function Pl(a, b, c, d, e, f) {
            var h = void 0 === f ? "ease-in" : f;
            e = void 0 !== e ? e : Ql(c, d);
            var l = Jl(c, d);
            return Cl(b, function(k) {
                Nl(a, b, l(k))
            }, e, h).thenAlways(function() {
                Nl(a, b, d)
            })
        }

        function Ll(a, b) {
            return a.I.measurePromise(function() {
                return lc(b, ".i-amphtml-scrollable") || a.j.getScrollingElement()
            })
        }

        function Nl(a, b, c) {
            b == a.j.getScrollingElement() ? a.j.setScrollTop(c) : a.I.mutate(function() {
                b.scrollTop = c
            })
        }

        function Ol(a, b) {
            return b == a.j.getScrollingElement() ? qa(function() {
                return a.getScrollTop()
            }) : a.I.measurePromise(function() {
                return b.scrollTop
            })
        }
        g.getScrollingElement = function() {
            return this.te ? this.te : this.te = this.j.getScrollingElement()
        };
        g.onChanged = function(a) {
            return this.af.add(a)
        };
        g.onScroll = function(a) {
            return this.Qa.add(a)
        };
        g.onResize = function(a) {
            return this.Pa.add(a)
        };
        g.enterLightboxMode = function(a, b) {
            this.h.sendMessage("requestFullOverlay", {}, !0);
            this.enterOverlayMode();
            this.U && this.U.enterLightbox(a, b);
            a && this.maybeEnterFieLightboxMode(a);
            return this.j.updateLightboxMode(!0)
        };
        g.leaveLightboxMode = function(a) {
            this.h.sendMessage("cancelFullOverlay", {}, !0);
            this.U && this.U.leaveLightbox();
            this.leaveOverlayMode();
            a && this.maybeLeaveFieLightboxMode(a);
            return this.j.updateLightboxMode(!1)
        };
        g.isLightboxExperimentOn = function() {
            return Ge(this.ampdoc.win, "amp-lightbox-a4a-proto")
        };
        g.maybeEnterFieLightboxMode = function(a) {
            var b = Rl(this, a);
            b && (this.isLightboxExperimentOn(), b.enterFullOverlayMode())
        };
        g.maybeLeaveFieLightboxMode = function(a) {
            (a = Rl(this, a)) && a.leaveFullOverlayMode()
        };

        function Rl(a, b) {
            var c = Jd(b, a.ampdoc.win);
            return c && c.__AMP_EMBED__
        }
        g.enterOverlayMode = function() {
            this.disableTouchZoom();
            this.disableScroll()
        };
        g.leaveOverlayMode = function() {
            this.resetScroll();
            this.restoreOriginalTouchZoom()
        };
        g.disableScroll = function() {
            var a = this,
                b = this.ampdoc.win,
                c = b.document.documentElement,
                d;
            this.I.measure(function() {
                var e = (b.getComputedStyle(c) || Me).marginRight;
                var f = a.ampdoc.win;
                f = f.innerWidth - f.document.documentElement.clientWidth;
                d = parseInt(e, 10) + f
            });
            this.I.mutate(function() {
                V(c, "margin-right", d, "px");
                a.j.disableScroll()
            })
        };
        g.resetScroll = function() {
            var a = this,
                b = this.ampdoc.win.document.documentElement;
            this.I.mutate(function() {
                V(b, "margin-right", "");
                a.j.resetScroll()
            })
        };
        g.resetTouchZoom = function() {
            var a = this,
                b = this.ampdoc.win.innerHeight,
                c = this.Gd.documentElement.clientHeight;
            b && c && b === c || this.disableTouchZoom() && this.S.delay(function() {
                a.restoreOriginalTouchZoom()
            }, 50)
        };
        g.disableTouchZoom = function() {
            var a = Sl(this);
            if (!a) return !1;
            var b = a.content,
                c = {
                    "maximum-scale": "1",
                    "user-scalable": "no"
                };
            var d = Object.create(null);
            if (b)
                for (var e = b.split(/,|;/), f = 0; f < e.length; f++) {
                    var h = e[f].split("="),
                        l = h[0].trim();
                    h = h[1];
                    h = (h || "").trim();
                    l && (d[l] = h)
                }
            e = !1;
            for (var k in c) d[k] !== c[k] && (e = !0, void 0 !== c[k] ? d[k] = c[k] : delete d[k]);
            if (e) {
                b = "";
                for (var m in d) 0 < b.length && (b += ","), b = d[m] ? b + (m + "=" + d[m]) : b + m;
                d = b
            } else d = b;
            return Tl(this, d)
        };
        g.restoreOriginalTouchZoom = function() {
            return void 0 !== this.je ? Tl(this, this.je) : !1
        };
        g.updateFixedLayer = function() {
            return this.U ? this.U.update() : v()
        };
        g.addToFixedLayer = function(a, b) {
            return this.U ? this.U.addElement(a, b) : v()
        };
        g.removeFromFixedLayer = function(a) {
            this.U && this.U.removeElement(a)
        };
        g.createFixedLayer = function(a) {
            var b = this;
            this.U = new a(this.ampdoc, this.I, this.j.getBorderTop(), this.da, this.j.requiresFixedLayerTransfer());
            this.ampdoc.whenReady().then(function() {
                return b.U.setup()
            })
        };

        function Tl(a, b) {
            return (a = Sl(a)) && a.content != b ? (J().fine("Viewport", "changed viewport meta to:", b), a.content = b, !0) : !1
        }

        function Sl(a) {
            if (xc(a.ampdoc.win)) return null;
            void 0 === a.jc && (a.jc = a.Gd.querySelector("meta[name=viewport]"), a.jc && (a.je = a.jc.content));
            return a.jc
        }
        g.Mh = function(a) {
            this.setScrollTop(a.scrollTop)
        };
        g.Lh = function(a) {
            var b = this,
                c = a.paddingTop,
                d = a.duration || 0,
                e = a.curve,
                f = a["transient"];
            if (void 0 != c && c != this.da && (this.uc = this.da, this.da = c, this.U)) {
                var h = this.U.animateFixedElements(this.da, this.uc, d, e, f);
                c < this.uc ? this.j.hideViewerHeader(f, this.uc) : h.then(function() {
                    b.j.showViewerHeader(f, c)
                })
            }
        };
        g.yg = function(a) {
            a ? this.disableScroll() : this.resetScroll()
        };

        function Ul(a, b, c) {
            var d = a.getSize(),
                e = a.getScrollTop(),
                f = a.getScrollLeft();
            J().fine("Viewport", "changed event:", "relayoutAll=", b, "top=", e, "left=", f, "bottom=", e + d.height, "velocity=", c);
            a.af.fire({
                relayoutAll: b,
                top: e,
                left: f,
                width: d.width,
                height: d.height,
                velocity: c
            })
        }
        g.Ah = function() {
            var a = this;
            this.cc = null;
            this.zh++;
            this.Pc = this.j.getScrollLeft();
            var b = this.j.getScrollTop();
            if (!(0 > b)) {
                this.Ba = b;
                if (!this.se) {
                    this.se = !0;
                    var c = Date.now();
                    this.S.delay(function() {
                        a.I.measure(function() {
                            a.Vc(c, b)
                        })
                    }, 36)
                }
                this.Qa.fire()
            }
        };
        g.Vc = function(a, b) {
            var c = this,
                d = this.Ba = this.j.getScrollTop(),
                e = Date.now(),
                f = 0;
            e != a && (f = (d - b) / (e - a));
            J().fine("Viewport", "scroll: scrollTop=" + d + "; velocity=" + f);
            .03 > Math.abs(f) ? (Ul(this, !1, f), this.se = !1) : this.S.delay(function() {
                return c.I.measure(c.Vc.bind(c, e, d))
            }, 20)
        };
        g.Bh = function() {
            var a = this;
            this.re || (this.re = !0, this.I.measure(function() {
                a.re = !1;
                a.h.sendMessage("scroll", A({
                    scrollTop: a.getScrollTop()
                }), !0)
            }))
        };
        g.Qf = function() {
            var a = this;
            this.cc = null;
            var b = this.$;
            this.$ = null;
            var c = this.getSize();
            this.updateFixedLayer().then(function() {
                var d = !b || b.width != c.width;
                Ul(a, d, 0);
                (d || b.height != c.height) && a.Pa.fire({
                    relayoutAll: d,
                    width: c.width,
                    height: c.height
                })
            })
        };

        function Ql(a, b) {
            var c = Math;
            return c.floor.call(c, Math.min(Math.max(.65 * Math.abs(a - b), 0), 500))
        }

        function Vl(a) {
            var b = R(a),
                c = a.win;
            c = a.isSingleDoc() && (Q(c).isIos() && xc(c) && b.isEmbedded() && !b.hasCapability("iframeScroll") ? Wl : Xl) == Wl ? new Hl(c) : new Il(a);
            return new Kl(a, c, b)
        }
        var Xl = "natural",
            Wl = "natural-ios-embed";

        function Yl(a) {
            var b = Ne(a, "visibilityState", !0);
            if (a[b]) return a[b];
            var c = Ne(a, "hidden", !0);
            return a[c] ? a[c] ? "hidden" : "visible" : "visible"
        }

        function Zl(a, b) {
            if (a.addEventListener) {
                var c = $l(a);
                c && a.addEventListener(c, b)
            }
        }

        function am(a, b) {
            if (a.removeEventListener) {
                var c = $l(a);
                c && a.removeEventListener(c, b)
            }
        }

        function $l(a) {
            a = Ne(a, "hidden", !0);
            var b = a.indexOf("Hidden");
            return -1 != b ? a.substring(0, b) + "Visibilitychange" : "visibilitychange"
        };

        function bm(a) {
            this.win = a;
            this.Ea = Wd(this.win);
            this.qh = cm(this);
            this.O = [];
            this.fe = [];
            this.Ra = [];
            this.ee = [];
            this.ya = !1;
            this.de = this.zc = null;
            this.qd = this.yh.bind(this);
            this.Pg = new ij(this.win, this.qd, 16);
            this.Le = new ij(this.win, this.qd, 40);
            this.pd = this.nh.bind(this);
            if (this.Ea.isSingleDoc()) this.Ea.getSingleDoc().onVisibilityChanged(this.pd);
            else Zl(this.win.document, this.pd)
        }
        g = bm.prototype;
        g.dispose = function() {
            am(this.win.document, this.pd)
        };
        g.nh = function() {
            this.ya && dm(this)
        };
        g.run = function(a, b) {
            this.O.push(a);
            this.Ra.push(b || void 0);
            this.Aa()
        };
        g.runPromise = function(a, b) {
            this.run(a, b);
            if (this.zc) return this.zc;
            a = new x;
            this.de = a.resolve;
            return this.zc = a.promise
        };
        g.createTask = function(a) {
            var b = this;
            return function(c) {
                b.run(a, c)
            }
        };
        g.mutate = function(a) {
            this.run({
                measure: void 0,
                mutate: a
            })
        };
        g.mutatePromise = function(a) {
            return this.runPromise({
                measure: void 0,
                mutate: a
            })
        };
        g.measure = function(a) {
            this.run({
                measure: a,
                mutate: void 0
            })
        };
        g.measurePromise = function(a) {
            var b = this;
            return new Promise(function(c) {
                b.measure(function() {
                    c(a())
                })
            })
        };
        g.canAnimate = function(a) {
            return em(this, a)
        };

        function em(a, b) {
            return "visible" != Yl(a.win.document) ? !1 : a.Ea.isSingleDoc() ? a.Ea.getSingleDoc().isVisible() : b ? (a = a.Ea.getAmpDocIfAvailable(b), !a || a.isVisible()) : !0
        }
        g.runAnim = function(a, b, c) {
            if (!em(this, a)) return J().warn("VSYNC", "Did not schedule a vsync request, because document was invisible"), !1;
            this.run(b, c);
            return !0
        };
        g.createAnimTask = function(a, b) {
            var c = this;
            return function(d) {
                return c.runAnim(a, b, d)
            }
        };
        g.runAnimMutateSeries = function(a, b, c) {
            var d = this;
            return em(this, a) ? new Promise(function(e, f) {
                var h = Date.now(),
                    l = 0,
                    k = d.createAnimTask(a, {
                        mutate: function(m) {
                            var n = Date.now() - h;
                            b(n, n - l, m) ? c && n > c ? f(Error("timeout")) : (l = n, k(m)) : e()
                        }
                    });
                k({})
            }) : Promise.reject(Kf())
        };
        g.Aa = function() {
            this.ya || (this.ya = !0, dm(this))
        };

        function dm(a) {
            em(a) ? (a.qh(a.qd), a.Le.schedule()) : a.Pg.schedule()
        }
        g.yh = function() {
            this.Le.cancel();
            this.ya = !1;
            var a = this.O,
                b = this.Ra,
                c = this.de;
            this.zc = this.de = null;
            this.O = this.fe;
            this.Ra = this.ee;
            for (var d = 0; d < a.length; d++) a[d].measure && !fm(a[d].measure, b[d]) && (a[d].mutate = void 0);
            for (d = 0; d < a.length; d++) a[d].mutate && fm(a[d].mutate, b[d]);
            this.fe = a;
            this.ee = b;
            this.fe.length = 0;
            this.ee.length = 0;
            c && c()
        };

        function cm(a) {
            var b = a.win.requestAnimationFrame || a.win.webkitRequestAnimationFrame;
            if (b) return b.bind(a.win);
            var c = 0;
            return function(d) {
                var e = Date.now(),
                    f = Math.max(0, 16 - (e - c));
                c = e + f;
                a.win.setTimeout(d, f)
            }
        }

        function fm(a, b) {
            try {
                void 0 !== a(b) && J().error("VSYNC", "callback returned a value but vsync cannot propogate it: %s", a.toString())
            } catch (c) {
                return za(c), !1
            }
            return !0
        };

        function gm(a) {
            M(a, "crypto", mh);
            M(a, "batched-xhr", Eg);
            M(a, "platform", Gj);
            M(a, "timer", Dk);
            M(a, "timer", Dk);
            M(a, "vsync", bm);
            M(a, "xhr", Cg);
            M(a, "input", jj);
            M(a, "preconnect", Qj)
        }

        function hm(a) {
            a.getParent();
            N(a, "url", Ek, !0);
            N(a, "templates", Ak);
            N(a, "documentInfo", ph);
            N(a, "cid", Tg);
            N(a, "viewer", ll, !0);
            N(a, "viewport", Vl, !0);
            N(a, "hidden-observer", Th);
            N(a, "history", ji);
            N(a, "resources", Zj);
            N(a, "owners", zj);
            N(a, "mutator", tj);
            jl(a);
            N(a, "action", Wf, !0);
            N(a, "standard-actions", mk, !0);
            yk(a);
            N(a, "navigation", Fh, !0);
            Qh(a);
            N(a, "loadingIndicator", qj)
        };
        var im = ["amp-ad", "amp-embed", "amp-video"];

        function jm(a) {
            this.win = a;
            this.Ea = Wd(a);
            this.Kb = {};
            this.yd = this.nc = this.kb = null
        }
        g = jm.prototype;
        g.registerExtension = function(a, b, c, d, e) {
            var f = c ? this.Kb[a + ":latest"] : null,
                h, l = km(this, a, b, null != (h = null == f ? void 0 : f.auto) ? h : !0);
            l.latest = c;
            if (!l.loaded) {
                c && (this.Kb[a + ":latest"] = l);
                try {
                    this.kb = a;
                    this.nc = b;
                    this.yd = c;
                    d(e, e._);
                    l.loaded = !0;
                    var k;
                    null == (k = l.resolve) || k.call(l, l.extension);
                    var m;
                    null == f || null == (m = f.resolve) || m.call(f, l.extension)
                } catch (t) {
                    l.error = t;
                    var n;
                    null == (n = l.reject) || n.call(l, t);
                    var q;
                    null == f || null == (q = f.reject) || q.call(f, t);
                    throw t;
                } finally {
                    this.yd = this.nc = this.kb = null
                }
            }
        };
        g.waitForExtension = function(a, b) {
            var c = lm(km(this, a, b));
            return P(this.win).timeoutPromise(16E3, c).catch(function(d) {
                if (!d.message.includes("timeout")) throw d;
                H().error("extensions", "Waited over 16s to load extension " + a + ".");
                return c
            })
        };
        g.preloadExtension = function(a, b) {
            var c = void 0 === b ? "0.1" : b;
            "amp-embed" == a && (a = "amp-ad");
            b = km(this, a, c);
            if (b.loaded || b.error) var d = !1;
            else void 0 === b.scriptPresent && (d = Rd(this.win, a, c, b.latest), b.scriptPresent = 0 < d.length), d = !b.scriptPresent;
            d && (a = Qd(this.win, a, c), this.win.document.head.appendChild(a), b.scriptPresent = !0);
            return lm(b)
        };
        g.installExtensionForDoc = function(a, b, c) {
            var d = this,
                e = void 0 === c ? "0.1" : c;
            c = a.getRootNode();
            var f = c.__AMP_EXT_LDR;
            f || (f = c.__AMP_EXT_LDR = z());
            if (f[b]) return f[b];
            a.declareExtension(b, e);
            dj(a.win, b);
            return f[b] = this.preloadExtension(b, e).then(function() {
                return d.installExtensionInDoc(a, b, e)
            })
        };
        g.reloadExtension = function(a, b, c) {
            var d = Rd(this.win, a, b, c, !1);
            if (c = this.Kb[a + ":" + b]) c.scriptPresent = !1;
            d.forEach(function(e) {
                return e.setAttribute("i-amphtml-loaded-new-version", a)
            });
            return this.preloadExtension(a, b)
        };
        g.importUnwrapped = function(a, b, c, d) {
            var e = void 0 === c ? "0.1" : c,
                f = Rd(a, b, e, void 0 === d ? !0 : d),
                h = 0 < f.length ? f[0] : null;
            h ? b = h.__AMP_SCR_LOADED : (h = Qd(this.win, b, e), b = h.__AMP_SCR_LOADED = new Promise(function(l, k) {
                h.onload = l;
                h.onerror = k
            }), a.document.head.appendChild(h));
            return b
        };
        g.loadElementClass = function(a, b) {
            return this.preloadExtension(a, void 0 === b ? "0.1" : b).then(function(c) {
                return c.elements[a].implementationClass
            })
        };
        g.addElement = function(a, b, c) {
            mm(this, a).extension.elements[a] = {
                implementationClass: b,
                css: c
            };
            this.addDocFactory(function(d) {
                nm(d, a, b, c)
            })
        };
        g.addTemplate = function(a, b) {
            this.addDocFactory(function(c) {
                c = Cd(c, "templates");
                if (c.hc[a]) {
                    var d = c.we[a];
                    K(d, "Duplicate template type: %s", a);
                    delete c.we[a];
                    d(b)
                } else c.hc[a] = Promise.resolve(b)
            })
        };

        function nm(a, b, c, d) {
            d ? sf(a, d, function() {
                om(a.win, b, c)
            }, !1, b) : om(a.win, b, c)
        }

        function om(a, b, c) {
            Zi(a, b, c);
            M(a, b, pm)
        }
        g.addService = function(a, b) {
            mm(this, a).extension.services.push({
                serviceName: a,
                serviceClass: b
            });
            this.addDocFactory(function(c) {
                N(c, a, b, !0)
            })
        };
        g.addDocFactory = function(a, b) {
            var c = mm(this, b);
            c.docFactories.push(a);
            if (this.kb && this.Ea.isSingleDoc()) {
                var d = this.Ea.getAmpDoc(this.win.document),
                    e = this.kb,
                    f = this.yd || !1;
                (d.declaresExtension(e, this.nc) || f && d.declaresExtension(e, "latest") || c.auto) && a(d)
            }
        };
        g.preinstallEmbed = function(a, b) {
            var c = a.win;
            qm(this.win, c);
            rm(c);
            b.forEach(function(d) {
                var e = d.extensionId;
                a.declareExtension(e, d.extensionVersion);
                im.includes(e) || dj(c, e)
            })
        };
        g.installExtensionsInDoc = function(a, b) {
            var c = this;
            return Promise.all(b.map(function(d) {
                return c.installExtensionInDoc(a, d.extensionId, d.extensionVersion)
            }))
        };
        g.installExtensionInDoc = function(a, b, c) {
            var d = this,
                e = void 0 === c ? "0.1" : c;
            a.declareExtension(b, e);
            return lm(km(this, b, e)).then(function() {
                km(d, b, e).docFactories.forEach(function(f) {
                    try {
                        f(a)
                    } catch (h) {
                        za("Doc factory failed: ", h, b)
                    }
                })
            })
        };

        function km(a, b, c, d) {
            b = b + ":" + c;
            var e = a.Kb[b];
            e || (e = {
                version: c,
                latest: "latest" == c,
                extension: {
                    elements: {},
                    services: []
                },
                auto: d || !1,
                docFactories: [],
                promise: void 0,
                resolve: void 0,
                reject: void 0,
                loaded: void 0,
                error: void 0,
                scriptPresent: void 0
            }, a.Kb[b] = e);
            return e
        }

        function mm(a, b) {
            a.kb || J().error("extensions", "unknown extension for ", b);
            return km(a, a.kb || "_UNKNOWN_", a.nc || "")
        }

        function lm(a) {
            if (!a.promise)
                if (a.loaded) a.promise = Promise.resolve(a.extension);
                else if (a.error) a.promise = Promise.reject(a.error);
            else {
                var b = new x;
                a.promise = b.promise;
                a.resolve = b.resolve;
                a.reject = b.reject
            }
            return a.promise
        }

        function rm(a) {
            im.forEach(function(b) {
                dj(a, b)
            })
        }

        function qm(a, b) {
            var c = Yi(a)["amp-img"];
            bj(b, "amp-img", c || ki);
            a = Yi(a)["amp-pixel"];
            bj(b, "amp-pixel", a || ki)
        }

        function pm() {
            return {}
        };
        (function() {
            Cb = wb;
            J();
            H()
        })();
        (function(a) {
            self.__AMP_REPORT_ERROR = a
        })(function(a, b, c) {
            If(b, c);
            b && a && sb(b.message) && !(0 <= b.message.indexOf("\u200b\u200b\u200b\u200b")) && Wd(a).isSingleDoc() && (b = A({
                errorName: b.name,
                errorMessage: b.message
            }), a = Wd(a).getSingleDoc().getRootNode(), Ef(a.documentElement || a.body || a, b))
        }.bind(null, self));

        function sm(a) {
            function b(k) {
                tm(c, k, function() {
                    f.then(function() {
                        "function" == typeof k ? k(c.AMP, c.AMP._) : e.registerExtension(k.n, k.ev, k.l, k.f, c.AMP)
                    })
                })
            }
            var c = self;
            if (c.__AMP_TAG) v();
            else {
                c.__AMP_TAG = !0;
                var d = c.AMP || [];
                M(c, "extensions", jm);
                var e = Yd(c);
                gm(c);
                rm(c);
                c.AMP = {
                    win: c,
                    _: c.AMP ? c.AMP._ : void 0
                };
                c.AMP.config = pb;
                c.AMP.BaseElement = W;
                c.AMP.registerElement = e.addElement.bind(e);
                c.AMP.registerTemplate = e.addTemplate.bind(e);
                c.AMP.registerServiceForDoc = e.addService.bind(e);
                c.AMP.isExperimentOn = Ge.bind(null,
                    c);
                c.AMP.toggleExperiment = Ie.bind(null, c);
                c.AMP.setLogLevel = ub.bind(null);
                c.AMP.setTickFunction = function() {};
                var f = a(c, e);
                for (a = 0; a < d.length; a++) {
                    var h = d[a];
                    if (um(c, h)) d.splice(a--, 1);
                    else if ("function" == typeof h || "high" == h.p) {
                        try {
                            b(h)
                        } catch (k) {
                            J().error("runtime", "Extension failed: ", k, h.n)
                        }
                        d.splice(a--, 1)
                    }
                }
                vm(c, function() {
                    c.AMP.push = function(n) {
                        um(c, n) || b(n)
                    };
                    for (var k = 0; k < d.length; k++) {
                        var m = d[k];
                        if (!um(c, m)) try {
                            b(m)
                        } catch (n) {
                            J().error("runtime", "Extension failed: ", n, m.n)
                        }
                    }
                    d.length = 0
                });
                c.AMP.push ||
                    (c.AMP.push = d.push.bind(d));
                Q(c).isIos() && V(c.document.documentElement, "cursor", "pointer");
                var l = Yd(c);
                c.ResizeObserver && !c.ResizeObserver._stub || l.preloadExtension("amp-resize-observer-polyfill");
                Fc(c) && l.preloadExtension("amp-intersection-observer-polyfill")
            }
        }

        function tm(a, b, c) {
            "function" == typeof b || "high" == b.p ? v().then(c) : (c.displayName = b.n, Gi(a.document, c))
        }

        function wm() {
            sm(function(a) {
                xm(a);
                ym(a);
                return fc(a.document).then(function() {
                    cj(a.AMP.ampdoc)
                })
            })
        }

        function xm(a) {
            var b = a.document.documentElement,
                c = Wd(a).getSingleDoc();
            a.AMP.ampdoc = c;
            c = R(b);
            a.AMP.viewer = c;
            D().development && (a.AMP.toggleRuntime = c.toggleRuntime.bind(c), a.AMP.resources = ae(b));
            b = de(b);
            a.AMP.viewport = {};
            a.AMP.viewport.getScrollLeft = b.getScrollLeft.bind(b);
            a.AMP.viewport.getScrollWidth = b.getScrollWidth.bind(b);
            a.AMP.viewport.getWidth = b.getWidth.bind(b)
        }

        function ym(a) {
            a.AMP.installAmpdocServices = hm.bind(null);
            a.AMP.combinedCss = "html{overflow-x:hidden!important}html.i-amphtml-fie{height:100%!important;width:100%!important}html:not([amp4ads]),html:not([amp4ads]) body{height:auto!important}html:not([amp4ads]) body{margin:0!important}body{-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%}html.i-amphtml-singledoc.i-amphtml-embedded{-ms-touch-action:pan-y pinch-zoom;touch-action:pan-y pinch-zoom}html.i-amphtml-fie>body,html.i-amphtml-singledoc>body{overflow:visible!important}html.i-amphtml-fie:not(.i-amphtml-inabox)>body,html.i-amphtml-singledoc:not(.i-amphtml-inabox)>body{position:relative!important}html.i-amphtml-ios-embed-legacy>body{overflow-x:hidden!important;overflow-y:auto!important;position:absolute!important}html.i-amphtml-ios-embed{overflow-y:auto!important;position:static}#i-amphtml-wrapper{overflow-x:hidden!important;overflow-y:auto!important;position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;margin:0!important;display:block!important}html.i-amphtml-ios-embed.i-amphtml-ios-overscroll,html.i-amphtml-ios-embed.i-amphtml-ios-overscroll>#i-amphtml-wrapper{-webkit-overflow-scrolling:touch!important}#i-amphtml-wrapper>body{position:relative!important;border-top:1px solid transparent!important}#i-amphtml-wrapper+body{visibility:visible}#i-amphtml-wrapper+body .i-amphtml-lightbox-element,#i-amphtml-wrapper+body[i-amphtml-lightbox]{visibility:hidden}#i-amphtml-wrapper+body[i-amphtml-lightbox] .i-amphtml-lightbox-element{visibility:visible}#i-amphtml-wrapper.i-amphtml-scroll-disabled,.i-amphtml-scroll-disabled{overflow-x:hidden!important;overflow-y:hidden!important}amp-instagram{padding:54px 0px 0px!important;background-color:#fff}amp-iframe iframe{box-sizing:border-box!important}[amp-access][amp-access-hide]{display:none}[subscriptions-dialog],body:not(.i-amphtml-subs-ready) [subscriptions-action],body:not(.i-amphtml-subs-ready) [subscriptions-section]{display:none!important}amp-experiment,amp-live-list>[update]{display:none}amp-list[resizable-children]>.i-amphtml-loading-container.amp-hidden{display:none!important}amp-list [fetch-error],amp-list[load-more] [load-more-button],amp-list[load-more] [load-more-end],amp-list[load-more] [load-more-failed],amp-list[load-more] [load-more-loading]{display:none}amp-list[diffable] div[role=list]{display:block}amp-story-page,amp-story[standalone]{min-height:1px!important;display:block!important;height:100%!important;margin:0!important;padding:0!important;overflow:hidden!important;width:100%!important}amp-story[standalone]{background-color:#202125!important;position:relative!important}amp-story-page{background-color:#757575}amp-story .amp-active>div,amp-story .i-amphtml-loader-background{display:none!important}amp-story-page:not(:first-of-type):not([distance]):not([active]){transform:translateY(1000vh)!important}amp-autocomplete{position:relative!important;display:inline-block!important}amp-autocomplete>input,amp-autocomplete>textarea{padding:0.5rem;border:1px solid rgba(0,0,0,0.33)}.i-amphtml-autocomplete-results,amp-autocomplete>input,amp-autocomplete>textarea{font-size:1rem;line-height:1.5rem}[amp-fx^=fly-in]{visibility:hidden}amp-script[nodom],amp-script[sandboxed]{position:fixed!important;top:0!important;width:1px!important;height:1px!important;overflow:hidden!important;visibility:hidden}\n/*# sourceURL=/css/ampdoc.css*/[hidden]{display:none!important}.i-amphtml-element{display:inline-block}.i-amphtml-blurry-placeholder{transition:opacity 0.3s cubic-bezier(0.0,0.0,0.2,1)!important;pointer-events:none}[layout=nodisplay]:not(.i-amphtml-element){display:none!important}.i-amphtml-layout-fixed,[layout=fixed][width][height]:not(.i-amphtml-layout-fixed){display:inline-block;position:relative}.i-amphtml-layout-responsive,[layout=responsive][width][height]:not(.i-amphtml-layout-responsive),[width][height][heights]:not([layout]):not(.i-amphtml-layout-responsive),[width][height][sizes]:not([layout]):not(.i-amphtml-layout-responsive){display:block;position:relative}.i-amphtml-layout-intrinsic,[layout=intrinsic][width][height]:not(.i-amphtml-layout-intrinsic){display:inline-block;position:relative;max-width:100%}.i-amphtml-layout-intrinsic .i-amphtml-sizer{max-width:100%}.i-amphtml-intrinsic-sizer{max-width:100%;display:block!important}.i-amphtml-layout-container,.i-amphtml-layout-fixed-height,[layout=container],[layout=fixed-height][height]:not(.i-amphtml-layout-fixed-height){display:block;position:relative}.i-amphtml-layout-fill,.i-amphtml-layout-fill.i-amphtml-notbuilt,[layout=fill]:not(.i-amphtml-layout-fill),body noscript>*{display:block;overflow:hidden!important;position:absolute;top:0;left:0;bottom:0;right:0}body noscript>*{position:absolute!important;width:100%;height:100%;z-index:2}body noscript{display:inline!important}.i-amphtml-layout-flex-item,[layout=flex-item]:not(.i-amphtml-layout-flex-item){display:block;position:relative;-ms-flex:1 1 auto;flex:1 1 auto}.i-amphtml-layout-fluid{position:relative}.i-amphtml-layout-size-defined{overflow:hidden!important}.i-amphtml-layout-awaiting-size{position:absolute!important;top:auto!important;bottom:auto!important}i-amphtml-sizer{display:block!important}@supports (aspect-ratio:1/1){i-amphtml-sizer.i-amphtml-disable-ar{display:none!important}}.i-amphtml-blurry-placeholder,.i-amphtml-fill-content{display:block;height:0;max-height:100%;max-width:100%;min-height:100%;min-width:100%;width:0;margin:auto}.i-amphtml-layout-size-defined .i-amphtml-fill-content{position:absolute;top:0;left:0;bottom:0;right:0}.i-amphtml-replaced-content,.i-amphtml-screen-reader{padding:0!important;border:none!important}.i-amphtml-screen-reader{position:fixed!important;top:0px!important;left:0px!important;width:4px!important;height:4px!important;opacity:0!important;overflow:hidden!important;margin:0!important;display:block!important;visibility:visible!important}.i-amphtml-screen-reader~.i-amphtml-screen-reader{left:8px!important}.i-amphtml-screen-reader~.i-amphtml-screen-reader~.i-amphtml-screen-reader{left:12px!important}.i-amphtml-screen-reader~.i-amphtml-screen-reader~.i-amphtml-screen-reader~.i-amphtml-screen-reader{left:16px!important}.i-amphtml-unresolved{position:relative;overflow:hidden!important}.i-amphtml-select-disabled{-webkit-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.i-amphtml-notbuilt,[layout]:not(.i-amphtml-element),[width][height][heights]:not([layout]):not(.i-amphtml-element),[width][height][sizes]:not([layout]):not(.i-amphtml-element){position:relative;overflow:hidden!important;color:transparent!important}.i-amphtml-notbuilt:not(.i-amphtml-layout-container)>*,[layout]:not([layout=container]):not(.i-amphtml-element)>*,[width][height][heights]:not([layout]):not(.i-amphtml-element)>*,[width][height][sizes]:not([layout]):not(.i-amphtml-element)>*{display:none}amp-img:not(.i-amphtml-element)[i-amphtml-ssr]>img.i-amphtml-fill-content{display:block}.i-amphtml-notbuilt:not(.i-amphtml-layout-container),[layout]:not([layout=container]):not(.i-amphtml-element),[width][height][heights]:not([layout]):not(.i-amphtml-element),[width][height][sizes]:not([layout]):not(.i-amphtml-element){color:transparent!important;line-height:0!important}.i-amphtml-ghost{visibility:hidden!important}.i-amphtml-element>[placeholder],[layout]:not(.i-amphtml-element)>[placeholder],[width][height][heights]:not([layout]):not(.i-amphtml-element)>[placeholder],[width][height][sizes]:not([layout]):not(.i-amphtml-element)>[placeholder]{display:block;line-height:normal}.i-amphtml-element>[placeholder].amp-hidden,.i-amphtml-element>[placeholder].hidden{visibility:hidden}.i-amphtml-element:not(.amp-notsupported)>[fallback],.i-amphtml-layout-container>[placeholder].amp-hidden,.i-amphtml-layout-container>[placeholder].hidden{display:none}.i-amphtml-layout-size-defined>[fallback],.i-amphtml-layout-size-defined>[placeholder]{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;z-index:1}amp-img.i-amphtml-ssr:not(.i-amphtml-element)>[placeholder]{z-index:auto}.i-amphtml-notbuilt>[placeholder]{display:block!important}.i-amphtml-hidden-by-media-query{display:none!important}.i-amphtml-element-error{background:red!important;color:#fff!important;position:relative!important}.i-amphtml-element-error:before{content:attr(error-message)}i-amp-scroll-container,i-amphtml-scroll-container{position:absolute;top:0;left:0;right:0;bottom:0;display:block}i-amp-scroll-container.amp-active,i-amphtml-scroll-container.amp-active{overflow:auto;-webkit-overflow-scrolling:touch}.i-amphtml-loading-container{display:block!important;pointer-events:none;z-index:1}.i-amphtml-notbuilt>.i-amphtml-loading-container{display:block!important}.i-amphtml-loading-container.amp-hidden{visibility:hidden}.i-amphtml-element>[overflow]{cursor:pointer;position:relative;z-index:2;visibility:hidden;display:initial;line-height:normal}.i-amphtml-layout-size-defined>[overflow]{position:absolute}.i-amphtml-element>[overflow].amp-visible{visibility:visible}template{display:none!important}.amp-border-box,.amp-border-box *,.amp-border-box :after,.amp-border-box :before{box-sizing:border-box}amp-pixel{display:none!important}amp-analytics,amp-auto-ads,amp-story-auto-ads{position:fixed!important;top:0!important;width:1px!important;height:1px!important;overflow:hidden!important;visibility:hidden}html.i-amphtml-fie>amp-analytics{position:initial!important}[visible-when-invalid]:not(.visible),form [submit-error],form [submit-success],form [submitting]{display:none}amp-accordion{display:block!important}@media (min-width:1px){:where(amp-accordion>section)>:first-child{margin:0;background-color:#efefef;padding-right:20px;border:1px solid #dfdfdf}:where(amp-accordion>section)>:last-child{margin:0}}amp-accordion>section{float:none!important}amp-accordion>section>*{float:none!important;display:block!important;overflow:hidden!important;position:relative!important}amp-accordion,amp-accordion>section{margin:0}amp-accordion:not(.i-amphtml-built)>section>:last-child{display:none!important}amp-accordion:not(.i-amphtml-built)>section[expanded]>:last-child{display:block!important}\n/*# sourceURL=/css/ampshared.css*/"
        }

        function um(a, b) {
            if ("function" == typeof b) return !1;
            if (b.m) return !0;
            if ("2105150310000" == b.v) return !1;
            Yd(a).reloadExtension(b.n, b.ev, b.l);
            return !0
        }

        function vm(a, b) {
            a.document.body ? 0 < rf(a).length ? b() : P(a).delay(b, 1) : b()
        };

        function zm() {
            var a = self;
            Kj(a.document, function() {
                return Am(a)
            })
        }

        function Am(a) {
            var b = 1500,
                c = a.performance;
            c && c.timing && c.timing.navigationStart && (b = Date.now() - c.timing.navigationStart);
            var d = Math.max(1, 2100 - b);
            a.setTimeout(function() {
                Bm(a);
                var e = a.document.styleSheets;
                if (e) {
                    for (var f = a.document.querySelectorAll('link[rel~="stylesheet"]:not([href^="' + String(ob.cdn).replace(Xb, Yb) + '"])'), h = [], l = 0; l < f.length; l++) {
                        for (var k = f[l], m = !1, n = 0; n < e.length; n++)
                            if (e[n].ownerNode == k) {
                                m = !0;
                                break
                            }
                        m || h.push(k)
                    }
                    l = {};
                    for (k = 0; k < h.length; l = {
                            qa: l.qa,
                            ed: l.ed
                        }, k++) l.qa = h[k], l.ed = l.qa.media ||
                        "all", l.qa.media = "print", l.qa.onload = function(q) {
                            return function() {
                                q.qa.media = q.ed;
                                Bm(a)
                            }
                        }(l), l.qa.setAttribute("i-amphtml-timeout", d), l.qa.parentNode.insertBefore(l.qa, l.qa.nextSibling)
                }
            }, d)
        }

        function Bm(a) {
            a = a.document;
            if (a.fonts && a.fonts.values)
                for (var b = a.fonts.values(); a = b.next();) {
                    var c = a.value;
                    if (!c) break;
                    "loading" == c.status && "display" in c && "auto" == c.display && (c.display = "swap")
                }
        };

        function Cm(a) {
            return a.waitForBodyOpen().then(function() {
                var b = a.getBody(),
                    c = dc(b, function() {
                        return !!b.firstElementChild
                    });
                return P(a.win).timeoutPromise(2E3, c).then(function() {
                    return "AMP-STORY" === b.firstElementChild.tagName
                }, function() {
                    return !1
                })
            })
        };

        function Dm(a) {
            var b = a.win;
            Bf(["\u26a1", "amp"], b.document) && a.isSingleDoc() && Hi(a, function() {
                Cm(a).then(function(c) {
                    c || Yd(b).installExtensionForDoc(a, "amp-auto-lightbox")
                })
            })
        };

        function Em(a) {
            this.win = a;
            this.Rc = null;
            var b = z();
            a.name && 0 == a.name.indexOf("__AMP__") && Object.assign(b, C(a.name.substring(7)));
            a.location && a.location.hash && Object.assign(b, C(a.location.hash));
            this.Rc = new Fm(a, {
                params: b
            });
            a.document.__AMPDOC = this.Rc
        }
        g = Em.prototype;
        g.isSingleDoc = function() {
            return !!this.Rc
        };
        g.getSingleDoc = function() {
            return this.Rc
        };
        g.getAmpDocIfAvailable = function(a) {
            for (var b = a; b;) {
                var c = a.everAttached && "function" === typeof a.getAmpDoc ? a.getAmpDoc() : null;
                if (c) return c;
                b = jc(b);
                if (!b) break;
                var d = b.__AMPDOC;
                if (d) return d;
                b = b.host ? b.host : Jd(b, this.win)
            }
            return null
        };
        g.getAmpDoc = function(a) {
            var b = this.getAmpDocIfAvailable(a);
            if (!b) throw J().createError("No ampdoc found for", a);
            return b
        };
        g.installShadowDoc = function(a, b, c) {
            a = new Gm(this.win, a, b, c);
            return b.__AMPDOC = a
        };
        g.installFieDoc = function(a, b, c) {
            var d = b.document;
            a = new Hm(b, a, this.getAmpDoc(b.frameElement), c);
            return d.__AMPDOC = a
        };

        function Im(a, b, c) {
            var d = this;
            this.win = a;
            this.Of = z();
            this.Fc = b;
            this.C = c && c.signals || new si;
            this.le = c && c.params || z();
            this.va = null;
            this.Ad = {};
            this.Ee = c && c.visibilityState || this.le.visibilityState && J().assertEnumValue( of , this.le.visibilityState, "VisibilityState") || null;
            this.bd = null;
            this.jg = new Y;
            this.Ef = null;
            this.ze = [];
            var e = this.Ae.bind(this);
            this.Fc && this.ze.push(this.Fc.onVisibilityChanged(e));
            Zl(this.win.document, e);
            this.ze.push(function() {
                return am(d.win.document, e)
            });
            this.Ae()
        }
        g = Im.prototype;
        g.dispose = function() {
            Md(this);
            this.ze.forEach(function(a) {
                return a()
            })
        };
        g.isSingleDoc = function() {
            return null
        };
        g.getParent = function() {
            return this.Fc
        };
        g.getWin = function() {
            return this.win
        };
        g.signals = function() {
            return this.C
        };
        g.getParam = function(a) {
            a = this.le[a];
            return null == a ? null : a
        };
        g.getMeta = function() {
            var a = this;
            if (this.va) return z(this.va);
            this.va = z();
            var b = this.win.document.head.querySelectorAll("meta[name]");
            uc(b, function(c) {
                var d = c.getAttribute("name");
                c = c.getAttribute("content");
                d && null !== c && void 0 === a.va[d] && (a.va[d] = c)
            });
            return z(this.va)
        };
        g.getMetaByName = function(a) {
            if (!a) return null;
            a = this.getMeta()[a];
            return void 0 !== a ? a : null
        };
        g.setMetaByName = function() {};
        g.declaresExtension = function(a, b) {
            var c = this.Ad[a];
            return c ? !b || c === b : !1
        };
        g.declareExtension = function(a, b) {
            this.Ad[a] = b
        };
        g.getExtensionVersion = function(a) {
            return this.Ad[a] || null
        };
        g.setExtensionsKnown = function() {
            this.C.signal("-ampdoc-ext-known")
        };
        g.whenExtensionsKnown = function() {
            return this.C.whenSignal("-ampdoc-ext-known")
        };
        g.getRootNode = function() {
            return null
        };
        g.getHeadNode = function() {};
        g.isBodyAvailable = function() {
            return !1
        };
        g.getBody = function() {
            return null
        };
        g.waitForBodyOpen = function() {
            return null
        };
        g.isReady = function() {
            return null
        };
        g.whenReady = function() {
            return null
        };
        g.getUrl = function() {
            return null
        };
        g.getElementById = function(a) {
            return this.getRootNode().getElementById(a)
        };
        g.contains = function(a) {
            return this.getRootNode().contains(a)
        };
        g.overrideVisibilityState = function(a) {
            this.Ee != a && (this.Ee = a, this.Ae())
        };
        g.Ae = function() {
            for (var a = Yl(this.win.document), b = "visible", c = this.Fc; c; c = c.getParent())
                if ("visible" != c.getVisibilityState()) {
                    b = c.getVisibilityState();
                    break
                }
            var d = this.Ee || "visible";
            c = "visible" == d && "visible" == b && "visible" == a ? "visible" : "hidden" == a && "paused" == d ? a : "paused" == d || "inactive" == d ? d : "paused" == b || "inactive" == b ? b : "prerender" == d || "prerender" == a || "prerender" == b ? "prerender" : "hidden";
            this.bd != c && (this.bd = c, "visible" == c ? (this.Ef = Date.now(), this.C.signal("-ampdoc-first-visible"), this.C.signal("-ampdoc-next-visible")) :
                this.C.reset("-ampdoc-next-visible"), this.jg.fire())
        };
        g.whenFirstVisible = function() {
            return this.C.whenSignal("-ampdoc-first-visible").then(function() {})
        };
        g.whenNextVisible = function() {
            return this.C.whenSignal("-ampdoc-next-visible").then(function() {})
        };
        g.getFirstVisibleTime = function() {
            return this.C.get("-ampdoc-first-visible")
        };
        g.getLastVisibleTime = function() {
            return this.Ef
        };
        g.getVisibilityState = function() {
            return this.bd
        };
        g.isVisible = function() {
            return "visible" == this.bd
        };
        g.hasBeenVisible = function() {
            return null != this.getLastVisibleTime()
        };
        g.onVisibilityChanged = function(a) {
            return this.jg.add(a)
        };
        g.registerSingleton = function(a) {
            return this.Of[a] ? !1 : this.Of[a] = !0
        };

        function Fm(a, b) {
            Im.call(this, a, null, b);
            var c = this;
            this.Db = this.win.document.body ? Promise.resolve(this.win.document.body) : fc(this.win.document).then(function() {
                return c.getBody()
            });
            this.$b = Mj(this.win.document)
        }
        la(Fm, Im);
        g = Fm.prototype;
        g.isSingleDoc = function() {
            return !0
        };
        g.getRootNode = function() {
            return this.win.document
        };
        g.getUrl = function() {
            return this.win.location.href
        };
        g.getHeadNode = function() {
            return this.win.document.head
        };
        g.isBodyAvailable = function() {
            return !!this.win.document.body
        };
        g.getBody = function() {
            return this.win.document.body
        };
        g.waitForBodyOpen = function() {
            return this.Db
        };
        g.isReady = function() {
            return Ij(this.win.document)
        };
        g.whenReady = function() {
            return this.$b
        };

        function Gm(a, b, c, d) {
            Im.call(this, a, null, d);
            this.ic = b;
            this.Wf = c;
            this.md = null;
            var e = new x;
            this.Db = e.promise;
            this.Ne = e.resolve;
            this.bc = !1;
            var f = new x;
            this.$b = f.promise;
            this.ac = f.resolve
        }
        la(Gm, Im);
        g = Gm.prototype;
        g.isSingleDoc = function() {
            return !1
        };
        g.getRootNode = function() {
            return this.Wf
        };
        g.getUrl = function() {
            return this.ic
        };
        g.getHeadNode = function() {
            return this.Wf
        };
        g.isBodyAvailable = function() {
            return !!this.md
        };
        g.getBody = function() {
            return this.md
        };
        g.setBody = function(a) {
            this.md = a;
            this.Ne(a);
            this.Ne = void 0
        };
        g.waitForBodyOpen = function() {
            return this.Db
        };
        g.isReady = function() {
            return this.bc
        };
        g.setReady = function() {
            this.bc = !0;
            this.ac();
            this.ac = void 0
        };
        g.whenReady = function() {
            return this.$b
        };
        g.getMeta = function() {
            return z(this.va)
        };
        g.setMetaByName = function(a, b) {
            this.va || (this.va = z());
            this.va[a] = b
        };

        function Hm(a, b, c, d) {
            Im.call(this, a, c, d);
            var e = this;
            this.ic = b;
            this.Db = this.win.document.body ? Promise.resolve(this.win.document.body) : fc(this.win.document).then(function() {
                return e.getBody()
            });
            this.bc = !1;
            a = new x;
            this.$b = a.promise;
            this.ac = a.resolve
        }
        la(Hm, Im);
        g = Hm.prototype;
        g.isSingleDoc = function() {
            return !1
        };
        g.getRootNode = function() {
            return this.win.document
        };
        g.getUrl = function() {
            return this.ic
        };
        g.getHeadNode = function() {
            return this.win.document.head
        };
        g.isBodyAvailable = function() {
            return !!this.win.document.body
        };
        g.getBody = function() {
            return this.win.document.body
        };
        g.waitForBodyOpen = function() {
            return this.Db
        };
        g.isReady = function() {
            return this.bc
        };
        g.whenReady = function() {
            return this.$b
        };
        g.setReady = function() {
            this.bc = !0;
            this.ac();
            this.ac = void 0
        };

        function Jm() {
            var a = self;
            M(a, "ampdoc", function() {
                return new Em(a)
            })
        };
        var Km = ["AMP-AD", "AMP-ANALYTICS", "AMP-PIXEL", "AMP-AD-EXIT"];

        function Lm(a) {
            var b = zd(a);
            return b.signals().whenSignal("ready-scan").then(function() {
                var c = ae(b).get().filter(function(d) {
                    return d.prerenderAllowed() ? !Km.includes(d.element.tagName) : !1
                }).map(function(d) {
                    return d.element
                });
                return 0 === c.length ? Promise.resolve([]) : (new Promise(function(d) {
                    var e = b.win,
                        f = new e.IntersectionObserver(function(h) {
                            f.disconnect();
                            for (var l = [], k = 0; k < h.length; k++) {
                                var m = h[k],
                                    n = m.target;
                                m.isIntersecting && l.push(n)
                            }
                            d(l)
                        }, {
                            root: xc(e) ? e.document : null,
                            threshold: .01
                        });
                    for (e = 0; e < Math.min(c.length,
                            100); e++) f.observe(c[e])
                })).then(function(d) {
                    return Promise.all(d.map(function(e) {
                        return e.whenLoaded()
                    }))
                })
            })
        };

        function Mm(a) {
            var b = this;
            this.win = a;
            this.Jb = [];
            this.xe = a.performance.timeOrigin || a.performance.timing.navigationStart;
            this.kf = this.o = this.h = this.B = null;
            this.Sb = this.Xd = !1;
            this.lf = z();
            this.mc = void 0;
            this.La = new si;
            this.Qc = 0;
            this.Vb = [];
            var c = this.win.PerformanceObserver && this.win.PerformanceObserver.supportedEntryTypes || [];
            c.includes("paint") || this.La.rejectSignal("fcp", J().createExpectedError("First Contentful Paint not supported"));
            (this.Uc = c.includes("layout-shift")) || this.La.rejectSignal("cls",
                J().createExpectedError("Cumulative Layout Shift not supported"));
            (this.Yf = c.includes("first-input")) || this.La.rejectSignal("fid", J().createExpectedError("First Input Delay not supported"));
            (this.Tc = c.includes("largest-contentful-paint")) || this.La.rejectSignal("lcpv", J().createExpectedError("Largest Contentful Paint not supported"));
            this.Fh = c.includes("navigation");
            this.tc = this.sc = null;
            this.ie = this.ie.bind(this);
            this.addEnabledExperiment("rtv-" + D(this.win).rtvVersion);
            Mj(a.document).then(function() {
                b.tick("dr");
                b.flush()
            });
            Nj(a.document).then(function() {
                b.tick("ol");
                if (!b.win.PerformancePaintTiming && b.win.chrome && "function" == typeof b.win.chrome.loadTimes) {
                    var d = 1E3 * b.win.chrome.loadTimes().firstPaintTime - b.win.performance.timing.navigationStart;
                    1 >= d || b.tickDelta("fp", d)
                }
                b.flush()
            });
            Nm(this);
            Om(this)
        }
        g = Mm.prototype;
        g.coreServicesAvailable = function() {
            var a = this,
                b = this.win.document.documentElement;
            this.B = zd(b);
            this.h = R(b);
            this.o = ae(b);
            this.kf = Xd(this.B);
            this.Sb = this.h.isEmbedded() && "1" === this.h.getParam("csi");
            this.B.onVisibilityChanged(this.flush.bind(this));
            Pm(this);
            var c = this.h.whenMessagingReady();
            this.B.whenFirstVisible().then(function() {
                a.tick("ofv");
                a.flush()
            });
            if (this.Tc || this.Uc) this.B.onVisibilityChanged(this.ie);
            return c ? c.then(function() {
                a.tickDelta("msr", a.win.performance.now());
                a.tick("timeOrigin",
                    void 0, a.xe);
                var d = a.B.getMetaByName("amp-usqp");
                d && d.split(",").forEach(function(e) {
                    a.addEnabledExperiment("ssr-" + e)
                });
                return Qm(a)
            }).then(function() {
                a.Xd = !0;
                Rm(a);
                a.flush()
            }) : v()
        };

        function Qm(a) {
            var b = Wd(a.win).getSingleDoc();
            return Cm(b).then(function(c) {
                c && a.addEnabledExperiment("story")
            })
        }

        function Nm(a) {
            if ("inabox" !== D(a.win).runtime) {
                var b = !1,
                    c = !1,
                    d = !1,
                    e = !1,
                    f = function(l) {
                        if ("first-paint" != l.name || b)
                            if ("first-contentful-paint" != l.name || c) "first-input" !== l.entryType || d ? "layout-shift" === l.entryType ? !l.hadRecentInput && 1E3 > a.Vb.length && a.Vb.push(l) : "largest-contentful-paint" === l.entryType ? (l.loadTime && (a.sc = l.loadTime), l.renderTime && (a.tc = l.renderTime)) : "navigation" != l.entryType || e || ("domComplete domContentLoadedEventEnd domContentLoadedEventStart domInteractive loadEventEnd loadEventStart requestStart responseStart".split(" ").forEach(function(m) {
                                return a.tick(m,
                                    l[m])
                            }), e = !0) : (a.tickDelta("fid", l.processingStart - l.startTime), d = !0);
                            else {
                                var k = l.startTime + l.duration;
                                a.tickDelta("fcp", k);
                                a.tickSinceVisible("fcpv", k);
                                c = !0
                            }
                        else a.tickDelta("fp", l.startTime + l.duration), b = !0
                    },
                    h = [];
                a.win.PerformancePaintTiming && (a.win.performance.getEntriesByType("paint").forEach(f), h.push("paint"));
                a.Yf && Sm(a, f, {
                    type: "first-input",
                    buffered: !0
                });
                a.Uc && Sm(a, f, {
                    type: "layout-shift",
                    buffered: !0
                });
                a.Tc && Sm(a, f, {
                    type: "largest-contentful-paint",
                    buffered: !0
                });
                a.Fh && Sm(a, f, {
                    type: "navigation",
                    buffered: !0
                });
                0 < h.length && Sm(a, f, {
                    entryTypes: h
                })
            }
        }

        function Sm(a, b, c) {
            try {
                (new a.win.PerformanceObserver(function(d) {
                    d.getEntries().forEach(b);
                    a.flush()
                })).observe(c)
            } catch (d) {
                J().warn("Performance", d)
            }
        }

        function Om(a) {
            if (a.win.perfMetrics && a.win.perfMetrics.onFirstInputDelay) a.win.perfMetrics.onFirstInputDelay(function(b) {
                a.tickDelta("fid-polyfill", b);
                a.flush()
            })
        }
        g.ie = function() {
            var a = this.B.getVisibilityState();
            if ("inactive" === a || "hidden" === a)
                if (this.Uc && Tm(this), this.Tc) {
                    if (null !== this.sc) {
                        this.tickDelta("lcpl", this.sc);
                        var b = this.sc
                    }
                    null !== this.tc && (this.tickDelta("lcpr", this.tc), b = b || this.tc);
                    null !== b && this.tickSinceVisible("lcpv", b);
                    this.flush()
                }
        };

        function Tm(a) {
            var b = a.Vb.reduce(function(k, m) {
                    return k + m.value
                }, 0),
                c, d = null != (c = a.La.get("fcp")) ? c : 0,
                e, f = null != (e = a.La.get("ofv")) ? e : 0,
                h = a.Vb.reduce(function(k, m) {
                    return m.startTime < d ? k + m.value : k
                }, 0),
                l = a.Vb.reduce(function(k, m) {
                    return m.startTime < f ? k + m.value : k
                }, 0);
            0 === a.Qc ? (a.tick("cls-ofv", l), a.tickDelta("cls-fcp", h), a.tickDelta("cls", b), a.flush(), a.Qc = 1) : 1 === a.Qc && (a.tickDelta("cls-2", b), a.flush(), a.Qc = 2)
        }

        function Pm(a) {
            var b = !a.B.hasBeenVisible(),
                c = -1;
            a.B.whenFirstVisible().then(function() {
                c = a.win.performance.now();
                a.mark("visible")
            });
            Um(a).then(function() {
                if (b) {
                    var d = -1 < c ? a.win.performance.now() - c : 0;
                    a.B.whenFirstVisible().then(function() {
                        a.tickDelta("pc", d)
                    });
                    Vm(a, d);
                    a.mark("pc")
                } else a.tick("pc"), Vm(a, a.win.performance.now() - c);
                a.flush()
            })
        }

        function Um(a) {
            return a.o.whenFirstPass().then(function() {
                var b = a.win.document.documentElement,
                    c = de(b).getSize();
                Tb(0, 0, c.width, c.height);
                return Lm(b)
            })
        }
        g.tick = function(a, b, c) {
            var d = A({
                    label: a
                }),
                e;
            void 0 != b ? d.delta = e = Math.max(b, 0) : void 0 != c ? d.value = c : (this.mark(a), e = this.win.performance.now(), d.value = this.xe + e);
            c = this.win;
            var f = c.dispatchEvent;
            var h = this.win;
            var l = {
                label: a,
                delta: e
            };
            var k = {
                detail: l
            };
            Object.assign(k, void 0);
            "function" == typeof h.CustomEvent ? l = new h.CustomEvent("perf", k) : (h = h.document.createEvent("CustomEvent"), h.initCustomEvent("perf", !!k.bubbles, !!k.cancelable, l), l = h);
            f.call(c, l);
            this.Xd && this.Sb ? this.h.sendMessage("tick", d) : (50 <= this.Jb.length &&
                this.Jb.shift(), this.Jb.push(d));
            this.La.signal(a, e)
        };
        g.mark = function(a) {
            this.win.performance && this.win.performance.mark && 1 == arguments.length && this.win.performance.mark(a)
        };
        g.tickDelta = function(a, b) {
            this.tick(a, b)
        };
        g.tickSinceVisible = function(a, b) {
            b = void 0 == b ? this.win.performance.now() : b;
            b = this.xe + b;
            var c = this.B && this.B.getFirstVisibleTime();
            this.tickDelta(a, c ? Math.max(b - c, 0) : 0)
        };
        g.flush = function() {
            this.Xd && this.Sb && (null == this.mc && (this.mc = Object.keys(this.lf).join(",")), this.h.sendMessage("sendCsi", A({
                ampexp: this.mc,
                canonicalUrl: this.kf.canonicalUrl
            }), !0))
        };
        g.throttledFlush = function() {
            this.ag || (this.ag = jb(this.win, this.flush.bind(this), 100));
            this.ag()
        };
        g.addEnabledExperiment = function(a) {
            this.lf[a] = !0;
            this.mc = void 0
        };

        function Rm(a) {
            a.h && (a.Sb && a.Jb.forEach(function(b) {
                a.h.sendMessage("tick", b)
            }), a.Jb.length = 0)
        }

        function Vm(a, b) {
            a.h && a.h.sendMessage("prerenderComplete", A({
                value: b
            }), !0)
        }
        g.isPerformanceTrackingOn = function() {
            return this.Sb
        };
        g.getMetric = function(a) {
            return this.La.whenSignal(a)
        };

        function Wm(a, b) {
            this.Ga = a;
            this.K = b;
            this.Wc = !1;
            this.ue = 0;
            this.Te = this.mh.bind(this);
            this.Se = this.lh.bind(this);
            this.Re = this.kh.bind(this);
            this.Qe = this.jh.bind(this);
            this.Ga.addEventListener("touchstart", this.Te, !0)
        }
        g = Wm.prototype;
        g.cleanup = function() {
            Xm(this);
            this.Ga.removeEventListener("touchstart", this.Te, !0)
        };
        g.mh = function(a) {
            this.Wc || !a.touches || 1 != a.touches.length || 0 < this.K.getScrollTop() || (a = a.touches[0].clientY, this.Wc = !0, this.ue = a, this.Ga.addEventListener("touchmove", this.Se, !0), this.Ga.addEventListener("touchend", this.Re, !0), this.Ga.addEventListener("touchcancel", this.Qe, !0))
        };

        function Xm(a) {
            a.Wc = !1;
            a.ue = 0;
            a.Ga.removeEventListener("touchmove", a.Se, !0);
            a.Ga.removeEventListener("touchend", a.Re, !0);
            a.Ga.removeEventListener("touchcancel", a.Qe, !0)
        }
        g.lh = function(a) {
            if (this.Wc) {
                var b = a.touches[0].clientY - this.ue;
                0 < b && a.preventDefault();
                0 != b && Xm(this)
            }
        };
        g.kh = function() {
            Xm(this)
        };
        g.jh = function() {
            Xm(this)
        };

        function Ym(a) {
            var b = a.win;
            Bf(["\u26a1", "amp"], b.document) && Q(a.win).isStandalone() && Hi(a, function() {
                Yd(b).installExtensionForDoc(a, "amp-standalone").then(function() {
                    return Td(a.getBody(), "standalone", "amp-standalone")
                }).then(function(c) {
                    return c.initialize()
                })
            })
        };

        function Zm() {
            var a = self,
                b = a.location.href;
            if (!b.startsWith("about:")) {
                var c = !1;
                D().development && (c = "0" !== C(a.location.originalHash || a.location.hash).validate);
                c ? $m(a.document, ob.cdn + "/v0/validator_wasm.js").then(function() {
                    amp.validator.validateUrlAndLog(b, a.document)
                }) : D().examiner && $m(a.document, ob.cdn + "/examiner.js")
            }
        }

        function $m(a, b) {
            var c = a.createElement("script");
            c.src = b;
            (b = a.head.querySelector("script[nonce]")) && c.setAttribute("nonce", b.getAttribute("nonce"));
            b = mf(c).then(function() {
                a.head.removeChild(c)
            }, function() {});
            a.head.appendChild(c);
            return b
        };

        function an(a, b) {
            Gi(self.document, function() {
                gm(self);
                hm(a);
                b.coreServicesAvailable();
                xh()
            });
            Gi(self.document, function() {
                wm()
            });
            Gi(self.document, function() {
                var c = self;
                bj(c, "amp-img", fj);
                bj(c, "amp-pixel", Fj);
                bj(c, "amp-layout", lj)
            });
            Gi(self.document, function() {
                cj(a)
            });
            Gi(self.document, function() {
                var c = self,
                    d = c.document.documentElement;
                "0" == R(d).getParam("p2r") && Q(c).isChrome() && new Wm(c.document, de(d));
                Dm(a);
                Ym(a);
                Zm();
                yf();
                Tj()
            }, !0);
            Gi(self.document, function() {
                b.tick("e_is");
                ae(a).ampInitComplete();
                b.flush()
            })
        }
        self.location && (self.location.originalHash = self.location.hash);
        var bn;
        try {
            Mf(), Jm(), bn = Wd(self)
        } catch (a) {
            throw Af(self.document), a;
        }
        Gi(self.document, function() {
            var a = bn.getAmpDoc(self.document);
            M(self, "platform", Gj);
            M(self, "performance", Mm);
            var b = O(self, "performance");
            self.document.documentElement.hasAttribute("i-amphtml-no-boilerplate") && b.addEnabledExperiment("no-boilerplate");
            zm();
            b.tick("is");
            sf(a, "html{overflow-x:hidden!important}html.i-amphtml-fie{height:100%!important;width:100%!important}html:not([amp4ads]),html:not([amp4ads]) body{height:auto!important}html:not([amp4ads]) body{margin:0!important}body{-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%}html.i-amphtml-singledoc.i-amphtml-embedded{-ms-touch-action:pan-y pinch-zoom;touch-action:pan-y pinch-zoom}html.i-amphtml-fie>body,html.i-amphtml-singledoc>body{overflow:visible!important}html.i-amphtml-fie:not(.i-amphtml-inabox)>body,html.i-amphtml-singledoc:not(.i-amphtml-inabox)>body{position:relative!important}html.i-amphtml-ios-embed-legacy>body{overflow-x:hidden!important;overflow-y:auto!important;position:absolute!important}html.i-amphtml-ios-embed{overflow-y:auto!important;position:static}#i-amphtml-wrapper{overflow-x:hidden!important;overflow-y:auto!important;position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;margin:0!important;display:block!important}html.i-amphtml-ios-embed.i-amphtml-ios-overscroll,html.i-amphtml-ios-embed.i-amphtml-ios-overscroll>#i-amphtml-wrapper{-webkit-overflow-scrolling:touch!important}#i-amphtml-wrapper>body{position:relative!important;border-top:1px solid transparent!important}#i-amphtml-wrapper+body{visibility:visible}#i-amphtml-wrapper+body .i-amphtml-lightbox-element,#i-amphtml-wrapper+body[i-amphtml-lightbox]{visibility:hidden}#i-amphtml-wrapper+body[i-amphtml-lightbox] .i-amphtml-lightbox-element{visibility:visible}#i-amphtml-wrapper.i-amphtml-scroll-disabled,.i-amphtml-scroll-disabled{overflow-x:hidden!important;overflow-y:hidden!important}amp-instagram{padding:54px 0px 0px!important;background-color:#fff}amp-iframe iframe{box-sizing:border-box!important}[amp-access][amp-access-hide]{display:none}[subscriptions-dialog],body:not(.i-amphtml-subs-ready) [subscriptions-action],body:not(.i-amphtml-subs-ready) [subscriptions-section]{display:none!important}amp-experiment,amp-live-list>[update]{display:none}amp-list[resizable-children]>.i-amphtml-loading-container.amp-hidden{display:none!important}amp-list [fetch-error],amp-list[load-more] [load-more-button],amp-list[load-more] [load-more-end],amp-list[load-more] [load-more-failed],amp-list[load-more] [load-more-loading]{display:none}amp-list[diffable] div[role=list]{display:block}amp-story-page,amp-story[standalone]{min-height:1px!important;display:block!important;height:100%!important;margin:0!important;padding:0!important;overflow:hidden!important;width:100%!important}amp-story[standalone]{background-color:#202125!important;position:relative!important}amp-story-page{background-color:#757575}amp-story .amp-active>div,amp-story .i-amphtml-loader-background{display:none!important}amp-story-page:not(:first-of-type):not([distance]):not([active]){transform:translateY(1000vh)!important}amp-autocomplete{position:relative!important;display:inline-block!important}amp-autocomplete>input,amp-autocomplete>textarea{padding:0.5rem;border:1px solid rgba(0,0,0,0.33)}.i-amphtml-autocomplete-results,amp-autocomplete>input,amp-autocomplete>textarea{font-size:1rem;line-height:1.5rem}[amp-fx^=fly-in]{visibility:hidden}amp-script[nodom],amp-script[sandboxed]{position:fixed!important;top:0!important;width:1px!important;height:1px!important;overflow:hidden!important;visibility:hidden}\n/*# sourceURL=/css/ampdoc.css*/[hidden]{display:none!important}.i-amphtml-element{display:inline-block}.i-amphtml-blurry-placeholder{transition:opacity 0.3s cubic-bezier(0.0,0.0,0.2,1)!important;pointer-events:none}[layout=nodisplay]:not(.i-amphtml-element){display:none!important}.i-amphtml-layout-fixed,[layout=fixed][width][height]:not(.i-amphtml-layout-fixed){display:inline-block;position:relative}.i-amphtml-layout-responsive,[layout=responsive][width][height]:not(.i-amphtml-layout-responsive),[width][height][heights]:not([layout]):not(.i-amphtml-layout-responsive),[width][height][sizes]:not([layout]):not(.i-amphtml-layout-responsive){display:block;position:relative}.i-amphtml-layout-intrinsic,[layout=intrinsic][width][height]:not(.i-amphtml-layout-intrinsic){display:inline-block;position:relative;max-width:100%}.i-amphtml-layout-intrinsic .i-amphtml-sizer{max-width:100%}.i-amphtml-intrinsic-sizer{max-width:100%;display:block!important}.i-amphtml-layout-container,.i-amphtml-layout-fixed-height,[layout=container],[layout=fixed-height][height]:not(.i-amphtml-layout-fixed-height){display:block;position:relative}.i-amphtml-layout-fill,.i-amphtml-layout-fill.i-amphtml-notbuilt,[layout=fill]:not(.i-amphtml-layout-fill),body noscript>*{display:block;overflow:hidden!important;position:absolute;top:0;left:0;bottom:0;right:0}body noscript>*{position:absolute!important;width:100%;height:100%;z-index:2}body noscript{display:inline!important}.i-amphtml-layout-flex-item,[layout=flex-item]:not(.i-amphtml-layout-flex-item){display:block;position:relative;-ms-flex:1 1 auto;flex:1 1 auto}.i-amphtml-layout-fluid{position:relative}.i-amphtml-layout-size-defined{overflow:hidden!important}.i-amphtml-layout-awaiting-size{position:absolute!important;top:auto!important;bottom:auto!important}i-amphtml-sizer{display:block!important}@supports (aspect-ratio:1/1){i-amphtml-sizer.i-amphtml-disable-ar{display:none!important}}.i-amphtml-blurry-placeholder,.i-amphtml-fill-content{display:block;height:0;max-height:100%;max-width:100%;min-height:100%;min-width:100%;width:0;margin:auto}.i-amphtml-layout-size-defined .i-amphtml-fill-content{position:absolute;top:0;left:0;bottom:0;right:0}.i-amphtml-replaced-content,.i-amphtml-screen-reader{padding:0!important;border:none!important}.i-amphtml-screen-reader{position:fixed!important;top:0px!important;left:0px!important;width:4px!important;height:4px!important;opacity:0!important;overflow:hidden!important;margin:0!important;display:block!important;visibility:visible!important}.i-amphtml-screen-reader~.i-amphtml-screen-reader{left:8px!important}.i-amphtml-screen-reader~.i-amphtml-screen-reader~.i-amphtml-screen-reader{left:12px!important}.i-amphtml-screen-reader~.i-amphtml-screen-reader~.i-amphtml-screen-reader~.i-amphtml-screen-reader{left:16px!important}.i-amphtml-unresolved{position:relative;overflow:hidden!important}.i-amphtml-select-disabled{-webkit-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.i-amphtml-notbuilt,[layout]:not(.i-amphtml-element),[width][height][heights]:not([layout]):not(.i-amphtml-element),[width][height][sizes]:not([layout]):not(.i-amphtml-element){position:relative;overflow:hidden!important;color:transparent!important}.i-amphtml-notbuilt:not(.i-amphtml-layout-container)>*,[layout]:not([layout=container]):not(.i-amphtml-element)>*,[width][height][heights]:not([layout]):not(.i-amphtml-element)>*,[width][height][sizes]:not([layout]):not(.i-amphtml-element)>*{display:none}amp-img:not(.i-amphtml-element)[i-amphtml-ssr]>img.i-amphtml-fill-content{display:block}.i-amphtml-notbuilt:not(.i-amphtml-layout-container),[layout]:not([layout=container]):not(.i-amphtml-element),[width][height][heights]:not([layout]):not(.i-amphtml-element),[width][height][sizes]:not([layout]):not(.i-amphtml-element){color:transparent!important;line-height:0!important}.i-amphtml-ghost{visibility:hidden!important}.i-amphtml-element>[placeholder],[layout]:not(.i-amphtml-element)>[placeholder],[width][height][heights]:not([layout]):not(.i-amphtml-element)>[placeholder],[width][height][sizes]:not([layout]):not(.i-amphtml-element)>[placeholder]{display:block;line-height:normal}.i-amphtml-element>[placeholder].amp-hidden,.i-amphtml-element>[placeholder].hidden{visibility:hidden}.i-amphtml-element:not(.amp-notsupported)>[fallback],.i-amphtml-layout-container>[placeholder].amp-hidden,.i-amphtml-layout-container>[placeholder].hidden{display:none}.i-amphtml-layout-size-defined>[fallback],.i-amphtml-layout-size-defined>[placeholder]{position:absolute!important;top:0!important;left:0!important;right:0!important;bottom:0!important;z-index:1}amp-img.i-amphtml-ssr:not(.i-amphtml-element)>[placeholder]{z-index:auto}.i-amphtml-notbuilt>[placeholder]{display:block!important}.i-amphtml-hidden-by-media-query{display:none!important}.i-amphtml-element-error{background:red!important;color:#fff!important;position:relative!important}.i-amphtml-element-error:before{content:attr(error-message)}i-amp-scroll-container,i-amphtml-scroll-container{position:absolute;top:0;left:0;right:0;bottom:0;display:block}i-amp-scroll-container.amp-active,i-amphtml-scroll-container.amp-active{overflow:auto;-webkit-overflow-scrolling:touch}.i-amphtml-loading-container{display:block!important;pointer-events:none;z-index:1}.i-amphtml-notbuilt>.i-amphtml-loading-container{display:block!important}.i-amphtml-loading-container.amp-hidden{visibility:hidden}.i-amphtml-element>[overflow]{cursor:pointer;position:relative;z-index:2;visibility:hidden;display:initial;line-height:normal}.i-amphtml-layout-size-defined>[overflow]{position:absolute}.i-amphtml-element>[overflow].amp-visible{visibility:visible}template{display:none!important}.amp-border-box,.amp-border-box *,.amp-border-box :after,.amp-border-box :before{box-sizing:border-box}amp-pixel{display:none!important}amp-analytics,amp-auto-ads,amp-story-auto-ads{position:fixed!important;top:0!important;width:1px!important;height:1px!important;overflow:hidden!important;visibility:hidden}html.i-amphtml-fie>amp-analytics{position:initial!important}[visible-when-invalid]:not(.visible),form [submit-error],form [submit-success],form [submitting]{display:none}amp-accordion{display:block!important}@media (min-width:1px){:where(amp-accordion>section)>:first-child{margin:0;background-color:#efefef;padding-right:20px;border:1px solid #dfdfdf}:where(amp-accordion>section)>:last-child{margin:0}}amp-accordion>section{float:none!important}amp-accordion>section>*{float:none!important;display:block!important;overflow:hidden!important;position:relative!important}amp-accordion,amp-accordion>section{margin:0}amp-accordion:not(.i-amphtml-built)>section>:last-child{display:none!important}amp-accordion:not(.i-amphtml-built)>section[expanded]>:last-child{display:block!important}\n/*# sourceURL=/css/ampshared.css*/", function() {
                return an(a,
                    b)
            }, !0, "amp-runtime")
        });
        self.console && (console.info || console.log).call(console, "Powered by AMP \u26a1 HTML \u2013 Version 2105150310000", self.location.href);
        self.document.documentElement.setAttribute("amp-version", "2105150310000");
    })(AMP._ = AMP._ || {})
} catch (e) {
    setTimeout(function() {
        var s = document.body.style;
        s.opacity = 1;
        s.visibility = "visible";
        s.animation = "none";
        s.WebkitAnimation = "none;"
    }, 1000);
    throw e
};

//# sourceMappingURL=v0.js.map