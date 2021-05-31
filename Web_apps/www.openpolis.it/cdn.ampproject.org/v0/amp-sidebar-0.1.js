(self.AMP = self.AMP || []).push({
    n: "amp-sidebar",
    ev: "0.1",
    l: true,
    v: "2105150310000",
    m: 0,
    f: (function(AMP, _) {
        'use strict';
        var k;

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

        function m(a) {
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
        var n;
        if ("function" == typeof Object.setPrototypeOf) n = Object.setPrototypeOf;
        else {
            var p;
            a: {
                var da = {
                        a: !0
                    },
                    ea = {};
                try {
                    ea.__proto__ = da;
                    p = ea.a;
                    break a
                } catch (a) {}
                p = !1
            }
            n = p ? function(a, b) {
                a.__proto__ = b;
                if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
                return a
            } : null
        }
        var fa = n;

        function q(a, b) {
            a.prototype = ba(b.prototype);
            a.prototype.constructor = a;
            if (fa) fa(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.bb = b.prototype
        }

        function ha(a) {
            return a ? Array.prototype.slice.call(a) : []
        }

        function ia(a, b) {
            for (var c = [], d = 0, e = 0; e < a.length; e++) {
                var f = a[e];
                b(f, e, a) ? c.push(f) : (d < e && (a[d] = f), d++)
            }
            d < a.length && (a.length = d)
        }

        function ja(a, b) {
            for (var c = 0; c < a.length; c++)
                if (b(a[c], c, a)) return c;
            return -1
        };

        function ka(a) {
            return 1 == (null == a ? void 0 : a.nodeType)
        };

        function t() {
            this.B = null
        }
        k = t.prototype;
        k.add = function(a) {
            var b = this;
            this.B || (this.B = []);
            this.B.push(a);
            return function() {
                b.remove(a)
            }
        };
        k.remove = function(a) {
            if (this.B) {
                var b = this.B;
                a = b.indexOf(a); - 1 != a && b.splice(a, 1)
            }
        };
        k.removeAll = function() {
            this.B && (this.B.length = 0)
        };
        k.fire = function(a) {
            if (this.B)
                for (var b = m(this.B), c = b.next(); !c.done; c = b.next()) c = c.value, c(a)
        };
        k.getHandlerCount = function() {
            var a, b;
            return null != (b = null == (a = this.B) ? void 0 : a.length) ? b : 0
        };
        var la;

        function ma(a) {
            for (var b = null, c = "", d = m(arguments), e = d.next(); !e.done; e = d.next())
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

        function na(a) {
            var b = ma.apply(null, arguments);
            setTimeout(function() {
                var c, d;
                null == (d = (c = self).__AMP_REPORT_ERROR) || d.call(c, b);
                throw b;
            })
        }

        function u(a, b) {
            for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
            try {
                a.apply(null, c)
            } catch (e) {
                na(e)
            }
        };

        function oa(a, b) {
            function c() {
                d = 0;
                var g = 100 - (a.Date.now() - e);
                if (0 < g) d = a.setTimeout(c, g);
                else {
                    var h = f;
                    f = null;
                    b.apply(null, h)
                }
            }
            var d = 0,
                e = 0,
                f = null;
            return function(g) {
                for (var h = [], l = 0; l < arguments.length; ++l) h[l - 0] = arguments[l];
                e = a.Date.now();
                f = h;
                d || (d = a.setTimeout(c, 100))
            }
        };
        var v = self.AMP_CONFIG || {},
            pa = ("string" == typeof v.cdnProxyRegex ? new RegExp(v.cdnProxyRegex) : v.cdnProxyRegex) || /^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;

        function qa(a) {
            if (self.document && self.document.head && (!self.location || !pa.test(self.location.origin))) {
                var b = self.document.head.querySelector('meta[name="' + a + '"]');
                b && b.getAttribute("content")
            }
        }
        v.cdnUrl || qa("runtime-host");
        v.geoApiUrl || qa("amp-geo-api");
        self.__AMP_LOG = self.__AMP_LOG || {
            user: null,
            dev: null,
            userForEmbed: null
        };
        var ra = self.__AMP_LOG;

        function w() {
            if (!ra.user) throw Error("failed to call initLogConstructor");
            return ra.user
        };

        function x(a, b) {
            a = a.__AMP_TOP || (a.__AMP_TOP = a);
            return y(a, b)
        }

        function z(a, b) {
            var c = A(a);
            c = ta(c);
            return y(c, b)
        }

        function ua(a, b) {
            a = A(a);
            a = ta(a);
            return va(a, b) ? y(a, b) : null
        }

        function A(a) {
            return a.nodeType ? x((a.ownerDocument || a).defaultView, "ampdoc").getAmpDoc(a) : a
        }

        function ta(a) {
            a = A(a);
            return a.isSingleDoc() ? a.win : a
        }

        function y(a, b) {
            va(a, b);
            var c = a.__AMP_SERVICES;
            c || (c = a.__AMP_SERVICES = {});
            a = c[b];
            a.obj || (a.obj = new a.ctor(a.context), a.context = null, a.resolve && a.resolve(a.obj));
            return a.obj
        }

        function va(a, b) {
            a = a.__AMP_SERVICES && a.__AMP_SERVICES[b];
            return !(!a || !a.ctor)
        };
        /*
         https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
        var B;

        function wa(a) {
            return ":not([toolbar]) [autoscroll]".replace(/^|,/g, "$&" + a + " ")
        };

        function xa(a) {
            if (void 0 === a.isConnected) {
                do
                    if (a = ya(a), a.host) a = a.host;
                    else break; while (1)
            }
        }

        function ya(a) {
            if (Node.prototype.getRootNode) return a.getRootNode() || a;
            for (; a.parentNode && (!a || "I-AMPHTML-SHADOW-ROOT" != a.tagName && (11 != a.nodeType || "[object ShadowRoot]" !== Object.prototype.toString.call(a))); a = a.parentNode);
            return a
        }

        function za(a, b) {
            for (; a && void 0 !== a; a = a.parentElement)
                if (b(a)) return a;
            return null
        }

        function C(a, b) {
            return a.closest ? a.closest(b) : za(a, function(c) {
                var d = c.matches || c.webkitMatchesSelector || c.mozMatchesSelector || c.msMatchesSelector || c.oMatchesSelector;
                return d ? d.call(c, b) : !1
            })
        }

        function Aa(a) {
            return "rtl" == (a.body.getAttribute("dir") || a.documentElement.getAttribute("dir") || "ltr")
        };

        function D(a, b) {
            var c = this;
            this.Ka = y(a, "timer");
            this.Ra = b;
            this.Pa = 0;
            this.X = -1;
            this.ma = 0;
            this.sa = !1;
            this.Oa = function() {
                c.fa()
            }
        }
        D.prototype.isPending = function() {
            return -1 != this.X
        };
        D.prototype.schedule = function(a) {
            var b = a || this.Pa;
            this.sa && 10 > b && (b = 10);
            var c = Date.now() + b;
            return !this.isPending() || -10 > c - this.ma ? (this.cancel(), this.ma = c, this.X = this.Ka.delay(this.Oa, b), !0) : !1
        };
        D.prototype.fa = function() {
            this.X = -1;
            this.ma = 0;
            this.sa = !0;
            this.Ra();
            this.sa = !1
        };
        D.prototype.cancel = function() {
            this.isPending() && (this.Ka.cancel(this.X), this.X = -1)
        };
        var E;

        function Ba(a) {
            if (void 0 !== E) return E;
            E = !1;
            try {
                var b = {
                    get passive() {
                        E = !0;
                        return !1
                    }
                };
                a.addEventListener("test-options", null, b);
                a.removeEventListener("test-options", null, b)
            } catch (c) {}
            return E
        };

        function Ca(a, b, c, d) {
            this.type = a;
            this.data = b;
            this.time = c;
            this.event = d
        }

        function Da(a, b, c) {
            this.C = a;
            this.h = [];
            this.R = [];
            this.A = [];
            this.j = [];
            this.o = null;
            this.Ya = b;
            this.Za = c;
            this.ha = !1;
            this.fa = new D(a.ownerDocument.defaultView, this.Ea.bind(this));
            this.Ia = new t;
            this.W = Object.create(null);
            this.Ba = this.Wa.bind(this);
            this.za = this.Ua.bind(this);
            this.Aa = this.Va.bind(this);
            this.ya = this.Ta.bind(this);
            var d = Ba(a.ownerDocument.defaultView);
            this.C.addEventListener("touchstart", this.Ba, d ? {
                passive: !0
            } : !1);
            this.C.addEventListener("touchend", this.za);
            this.C.addEventListener("touchmove",
                this.Aa, d ? {
                    passive: !0
                } : !1);
            this.C.addEventListener("touchcancel", this.ya);
            this.oa = !1
        }

        function Ea(a) {
            var b = !0,
                c = !0;
            b = void 0 === b ? !1 : b;
            c = void 0 === c ? !1 : c;
            var d = b,
                e = c,
                f = a.__AMP_Gestures;
            f || (f = new Da(a, d, e), a.__AMP_Gestures = f);
            return f
        }
        k = Da.prototype;
        k.cleanup = function() {
            this.C.removeEventListener("touchstart", this.Ba);
            this.C.removeEventListener("touchend", this.za);
            this.C.removeEventListener("touchmove", this.Aa);
            this.C.removeEventListener("touchcancel", this.ya);
            delete this.C.__AMP_Gestures;
            this.fa.cancel()
        };
        k.onGesture = function(a, b) {
            var c = new a(this),
                d = c.getType(),
                e = this.W[d];
            e || (this.h.push(c), e = new t, this.W[d] = e);
            return e.add(b)
        };
        k.removeGesture = function(a) {
            var b = (new a(this)).getType();
            if (a = this.W[b]) {
                a.removeAll();
                a = ja(this.h, function(c) {
                    return c.getType() == b
                });
                if (0 > a) return !1;
                this.h.splice(a, 1);
                this.A.splice(a, 1);
                this.j.splice(a, 1);
                this.R.splice(a, 1);
                delete this.W[b];
                return !0
            }
            return !1
        };
        k.onPointerDown = function(a) {
            return this.Ia.add(a)
        };
        k.Wa = function(a) {
            var b = Date.now();
            this.ha = !1;
            this.Ia.fire(a);
            for (var c = 0; c < this.h.length; c++)
                if (!this.A[c] && (this.j[c] && this.j[c] < b && F(this, c), this.h[c].onTouchStart(a))) {
                    var d = c;
                    this.R[d] = !0;
                    this.j[d] = 0
                }
            G(this, a)
        };
        k.Va = function(a) {
            for (var b = Date.now(), c = 0; c < this.h.length; c++) this.R[c] && (this.j[c] && this.j[c] < b ? F(this, c) : this.h[c].onTouchMove(a) || F(this, c));
            G(this, a)
        };
        k.Ua = function(a) {
            for (var b = Date.now(), c = 0; c < this.h.length; c++)
                if (this.R[c])
                    if (this.j[c] && this.j[c] < b) F(this, c);
                    else {
                        this.h[c].onTouchEnd(a);
                        var d = !this.j[c],
                            e = this.j[c] < b;
                        this.o != this.h[c] && (d || e) && F(this, c)
                    }
            G(this, a)
        };
        k.Ta = function(a) {
            for (var b = 0; b < this.h.length; b++) {
                var c = b;
                this.A[c] = 0;
                F(this, c)
            }
            G(this, a)
        };

        function G(a, b) {
            var c = !!a.o || a.ha;
            a.ha = !1;
            if (!c)
                for (var d = Date.now(), e = 0; e < a.h.length; e++)
                    if (a.A[e] || a.j[e] && a.j[e] >= d) {
                        c = !0;
                        break
                    }
            c ? (b.stopPropagation(), a.Ya || b.preventDefault()) : a.Za && b.stopPropagation();
            a.oa && (a.oa = !1, a.Ea())
        }
        k.Ea = function() {
            for (var a = Date.now(), b = -1, c = 0; c < this.h.length; c++)
                if (!this.A[c]) this.j[c] && this.j[c] < a && F(this, c);
                else if (-1 == b || this.A[c] > this.A[b]) b = c;
            if (-1 != b) {
                var d = 0;
                for (c = 0; c < this.h.length; c++) !this.A[c] && this.R[c] && (d = Math.max(d, this.j[c] - a));
                if (2 > d) {
                    a = b;
                    c = this.h[a];
                    for (var e = 0; e < this.h.length; e++)
                        if (e != a) {
                            var f = e;
                            this.A[f] = 0;
                            F(this, f)
                        }
                    this.A[a] = 0;
                    this.j[a] = 0;
                    this.o = c;
                    c.acceptStart()
                } else this.fa.schedule(d)
            }
        };

        function F(a, b) {
            a.R[b] = !1;
            a.j[b] = 0;
            a.A[b] || a.h[b].acceptCancel()
        }

        function H(a, b) {
            this.ab = a;
            this.ba = b
        }
        k = H.prototype;
        k.getType = function() {
            return this.ab
        };
        k.signalReady = function(a) {
            var b = this.ba;
            if (b.o) this.acceptCancel();
            else {
                for (var c = Date.now(), d = 0; d < b.h.length; d++) b.h[d] == this && (b.A[d] = c + a, b.j[d] = 0);
                b.oa = !0
            }
        };
        k.signalPending = function(a) {
            var b = this.ba;
            if (b.o) this.acceptCancel();
            else
                for (var c = Date.now(), d = 0; d < b.h.length; d++) b.h[d] == this && (b.j[d] = c + a)
        };
        k.signalEnd = function() {
            var a = this.ba;
            a.o == this && (a.o = null, a.ha = !0)
        };
        k.signalEmit = function(a, b) {
            var c = this.ba.W[this.getType()];
            c && c.fire(new Ca(this.getType(), a, Date.now(), b))
        };
        k.acceptStart = function() {};
        k.acceptCancel = function() {};
        k.onTouchStart = function() {
            return !1
        };
        k.onTouchMove = function() {
            return !1
        };
        k.onTouchEnd = function() {};

        function Fa(a, b, c) {
            1 > b && (b = 1);
            var d = .5 + Math.min(b / 33.34, .5);
            return a / b * d + c * (1 - d)
        };

        function I(a, b, c, d) {
            H.call(this, a, b);
            this.Fa = c;
            this.Na = d;
            this.o = !1;
            this.va = this.ua = this.pa = this.aa = this.Ja = this.ra = this.qa = this.L = this.K = this.P = this.O = 0
        }
        q(I, H);
        k = I.prototype;
        k.onTouchStart = function(a) {
            a = a.touches;
            return this.o && a && 1 < a.length ? !0 : a && 1 == a.length ? (this.Ja = Date.now(), this.O = a[0].clientX, this.P = a[0].clientY, !0) : !1
        };
        k.onTouchMove = function(a) {
            var b = a.touches;
            if (b && 1 <= b.length) {
                var c = b[0];
                b = c.clientX;
                c = c.clientY;
                this.K = b;
                this.L = c;
                if (this.o) J(this, !1, !1, a);
                else if (a = Math.abs(b - this.O), b = Math.abs(c - this.P), this.Fa && this.Na)(8 <= a || 8 <= b) && this.signalReady(-10);
                else if (this.Fa)
                    if (8 <= a && a > b) this.signalReady(-10);
                    else {
                        if (8 <= b) return !1
                    }
                else if (this.Na)
                    if (8 <= b && b > a) this.signalReady(-10);
                    else {
                        if (8 <= a) return !1
                    }
                else return !1;
                return !0
            }
            return !1
        };
        k.onTouchEnd = function(a) {
            var b = a.touches;
            b && 0 == b.length && this.o && (this.o = !1, J(this, !1, !0, a), this.signalEnd())
        };
        k.acceptStart = function() {
            this.o = !0;
            this.qa = this.O;
            this.ra = this.P;
            this.pa = this.Ja;
            this.O = this.K;
            this.P = this.L;
            J(this, !0, !1, null)
        };
        k.acceptCancel = function() {
            this.o = !1
        };

        function J(a, b, c, d) {
            a.aa = Date.now();
            var e = a.aa - a.pa;
            if (!c && 4 < e || c && 16 < e) {
                var f = Fa(a.K - a.qa, e, a.ua),
                    g = Fa(a.L - a.ra, e, a.va);
                if (!c || 32 < e || 0 != f || 0 != g) a.ua = 1E-4 < Math.abs(f) ? f : 0, a.va = 1E-4 < Math.abs(g) ? g : 0;
                a.qa = a.K;
                a.ra = a.L;
                a.pa = a.aa
            }
            a.signalEmit({
                first: b,
                last: c,
                time: a.aa,
                deltaX: a.K - a.O,
                deltaY: a.L - a.P,
                startX: a.O,
                startY: a.P,
                lastX: a.K,
                lastY: a.L,
                velocityX: a.ua,
                velocityY: a.va
            }, d)
        }

        function Ga(a) {
            I.call(this, "swipe-x", a, !0, !1)
        }
        q(Ga, I);

        function K(a, b) {
            var c = y(a, "timer");
            return c.promise(1).then(function() {
                return c.promise(b)
            })
        };
        var L, Ha = "Webkit webkit Moz moz ms O o".split(" "),
            Ia = {
                getPropertyPriority: function() {
                    return ""
                },
                getPropertyValue: function() {
                    return ""
                }
            };

        function M(a, b) {
            for (var c in b) {
                var d = a,
                    e = b[c];
                var f = d.style;
                var g = c;
                if (g.startsWith("--")) f = g;
                else {
                    L || (L = Object.create(null));
                    var h = L[g];
                    if (!h) {
                        h = g;
                        if (void 0 === f[g]) {
                            var l = g;
                            l = l.charAt(0).toUpperCase() + l.slice(1);
                            b: {
                                for (var r = 0; r < Ha.length; r++) {
                                    var sa = Ha[r] + l;
                                    if (void 0 !== f[sa]) {
                                        l = sa;
                                        break b
                                    }
                                }
                                l = ""
                            }
                            void 0 !== f[l] && (h = l)
                        }
                        L[g] = h
                    }
                    f = h
                }
                f && (f.startsWith("--") ? d.style.setProperty(f, e) : d.style[f] = e)
            }
        }

        function N(a, b) {
            void 0 === b && (b = a.hasAttribute("hidden"));
            b ? a.removeAttribute("hidden") : a.setAttribute("hidden", "")
        };

        function O(a, b, c) {
            this.wa = a;
            this.la = b;
            this.Xa = c;
            this.ka = "backward";
            this.V = "horizontal";
            this.da = this.H = null
        }

        function P(a) {
            return "horizontal" == a.V ? a.H.offsetWidth : a.H.offsetHeight
        }

        function Q(a, b, c) {
            b = "horizontal" == a.V ? b : c;
            return "backward" == a.ka ? -Math.min(b, 0) : Math.max(b, 0)
        }

        function R(a, b, c) {
            var d = void 0 === c ? "" : c,
                e = "backward" == a.ka ? -b : b;
            return "translate(" + ("horizontal" == a.V ? "" + e + d : 0) + ", " + ("horizontal" == a.V ? 0 : "" + e + d) + ")"
        }
        O.prototype.startSwipe = function(a) {
            var b = a.mask,
                c = a.direction,
                d = a.orientation;
            this.H = a.swipeElement;
            this.da = b;
            this.ka = c;
            this.V = d
        };
        O.prototype.swipeMove = function(a) {
            Ja(this, a, !1)
        };
        O.prototype.endSwipe = function(a) {
            Ja(this, a, !0)
        };

        function Ka(a, b, c) {
            var d = .75 * c;
            M(a.H, {
                transform: R(a, b, "px"),
                transition: d + "ms transform cubic-bezier(0.15, .55, .3, 0.95)"
            });
            return K(a.wa, d)
        }

        function La(a, b) {
            var c = .8 * b;
            return a.la(function() {
                M(a.H, {
                    transform: R(a, 0),
                    transition: c + "ms transform ease-in"
                });
                M(a.da, {
                    opacity: "",
                    transition: c + "ms opacity ease-in"
                })
            }).then(function() {
                return K(a.wa, c)
            })
        }

        function Ma(a, b) {
            var c = .75 * (P(a) - b);
            return a.la(function() {
                M(a.H, {
                    transform: R(a, 100, "%"),
                    transition: c + "ms transform ease-out"
                });
                M(a.da, {
                    opacity: 0,
                    transition: c + "ms opacity ease-out"
                })
            }).then(function() {
                return K(a.wa, c)
            }).then(function() {
                return a.Xa()
            })
        }

        function Na(a, b, c) {
            b = void 0 === b ? "" : b;
            var d = c = void 0 === c ? "" : c;
            M(a.H, {
                transform: b,
                transition: ""
            });
            M(a.da, {
                opacity: d,
                transition: ""
            })
        }

        function Oa(a, b, c, d, e) {
            var f = Q(a, 22.5 * b + d, 22.5 * c + e),
                g = Q(a, b, c),
                h = .5 * P(a);
            return f < h && .65 > g ? Ka(a, f, g).then(function() {
                return La(a, f)
            }) : Ma(a, f)
        }

        function Ja(a, b, c) {
            var d = b.deltaX,
                e = b.deltaY,
                f = b.velocityX,
                g = b.velocityY;
            a.la(function() {
                if (c) Oa(a, f, g, d, e).then(function() {
                    Na(a)
                });
                else {
                    var h = Q(a, d, e),
                        l = h / P(a),
                        r = Math.max(0, 1 - l);
                    Na(a, R(a, h, "px"), r)
                }
            })
        };

        function Pa(a, b) {
            if (void 0 !== B) var c = B;
            else {
                try {
                    var d = b.ownerDocument,
                        e = d.createElement("div"),
                        f = d.createElement("div");
                    e.appendChild(f);
                    c = e.querySelector(":scope div") === f
                } catch (h) {
                    c = !1
                }
                c = B = c
            }
            c ? c = b.querySelector(wa(":scope")) : (b.classList.add("i-amphtml-scoped"), c = wa(".i-amphtml-scoped"), c = b.querySelectorAll(c), b.classList.remove("i-amphtml-scoped"), c = void 0 === c[0] ? null : c[0]);
            if (c) {
                var g = (a.win.getComputedStyle(b) || Ia)["overflow-y"];
                "scroll" != g && "auto" != g ? w().error("AMP-SIDEBAR", "for 'autoscroll', 'nav [toolbar]' element must be set to overflow\n        'scroll' or 'auto' for 'autoscroll' to work.") :
                    z(a, "viewport").animateScrollWithinParent(c, b, "center", 0)
            }
        };

        function Qa(a, b) {
            this.Ca = b;
            this.D = a;
            this.ia = b.getAmpDoc();
            this.$a = this.D.getAttribute("toolbar");
            this.Y = null;
            this.F = void 0;
            this.ga = !1;
            this.D.classList.add("amp-sidebar-toolbar-target-hidden");
            this.Y = this.D.cloneNode(!0);
            a = this.D.getAttribute("toolbar-target");
            var c = this.D;
            a = w().assert(a, '"toolbar-target" is required', c, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0);
            if (c = this.ia.getElementById(a)) this.F = c, this.Y.classList.add("i-amphtml-toolbar"), N(this.F, !1);
            else throw w().createError("Could not find the toolbar-target element with an id: " +
                a);
        }
        Qa.prototype.onLayoutChange = function() {
            this.ia.win.matchMedia(this.$a).matches ? Ra(this) : Sa(this)
        };

        function Ra(a) {
            a.ga ? la || (la = Promise.resolve(void 0)) : a.Ca.mutateElement(function() {
                a.F && (N(a.F, !0), a.F.contains(a.Y) || a.F.appendChild(a.Y), a.D.classList.add("amp-sidebar-toolbar-target-shown"), a.D.classList.remove("amp-sidebar-toolbar-target-hidden"), a.ga = !0, Pa(a.ia, a.Y))
            })
        }

        function Sa(a) {
            a.ga && a.Ca.mutateElement(function() {
                a.F && (N(a.F, !1), a.D.classList.add("amp-sidebar-toolbar-target-hidden"), a.D.classList.remove("amp-sidebar-toolbar-target-shown"), a.ga = !1)
            })
        };
        var Ta = /vertical/,
            Ua = new WeakMap,
            S = new WeakMap,
            T = new WeakMap;

        function Va(a, b) {
            var c = a.ownerDocument.defaultView;
            if (c) {
                var d = S.get(a);
                d || (d = [], S.set(a, d), Wa(c).observe(a));
                if (!d.some(function(f) {
                        return f.callback === b && 0 === f.type
                    })) {
                    d.push({
                        type: 0,
                        callback: b
                    });
                    var e = T.get(a);
                    e && setTimeout(function() {
                        return Xa(0, b, e)
                    })
                }
            }
        }

        function Ya(a, b) {
            var c = S.get(a);
            c && (ia(c, function(d) {
                return d.callback === b && 0 === d.type
            }), 0 == c.length && (S.delete(a), T.delete(a), (c = a.ownerDocument.defaultView) && Wa(c).unobserve(a)))
        }

        function Wa(a) {
            var b = Ua.get(a);
            b || (b = new a.ResizeObserver(Za), Ua.set(a, b));
            return b
        }

        function Za(a) {
            for (var b = new Set, c = a.length - 1; 0 <= c; c--) {
                var d = a[c],
                    e = d.target;
                if (!b.has(e)) {
                    b.add(e);
                    var f = S.get(e);
                    if (f)
                        for (T.set(e, d), e = 0; e < f.length; e++) {
                            var g = f[e];
                            Xa(g.type, g.callback, d)
                        }
                }
            }
        }

        function Xa(a, b, c) {
            if (0 == a) a = c.contentRect, u(b, {
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
                    var f = Ta.test((a.ownerDocument.defaultView.getComputedStyle(a) || Ia)["writing-mode"]),
                        g = a.offsetWidth,
                        h = a.offsetHeight;
                    if (f) {
                        var l = g;
                        var r = h
                    } else r = g, l = h;
                    e = {
                        inlineSize: r,
                        blockSize: l
                    }
                }
                u(b, e)
            }
        };

        function $a(a) {
            var b = a.indexOf("#");
            return -1 == b ? a : a.substring(0, b)
        };
        var U = [];

        function ab(a) {
            var b = [];
            a = bb(a);
            for (var c = {}, d = 0; d < a.length; c = {
                    S: c.S
                }, d++) c.S = a[d], c.S.parentNode && ha(c.S.parentNode.children).filter(function(e) {
                return function(f) {
                    return f != e.S
                }
            }(c)).forEach(function(e) {
                return b.push(e)
            });
            return b
        }

        function bb(a) {
            for (var b = [], c = a; c; c = c.parentNode || c.host) b.push(c);
            return b
        }

        function cb(a) {
            for (var b = []; a;) {
                a = ya(a);
                var c = a.querySelectorAll("a[href],area[href],button,details summary,iframe,input,select,textarea,[contenteditable],[draggable],[tabindex]");
                Array.prototype.push.apply(b, c);
                a = a.host
            }
            return b
        }

        function db(a) {
            U.every(function(h) {
                return h.element !== a
            });
            xa(a);
            var b = ab(a),
                c = bb(a).filter(ka),
                d = cb(a),
                e = d.filter(function(h) {
                    return a.contains(h) && void 0 !== h.__AMP_MODAL_SAVED_TAB_INDEX
                }),
                f = d.filter(function(h) {
                    return !a.contains(h) && void 0 === h.__AMP_MODAL_SAVED_TAB_INDEX
                }),
                g = b.concat(c).map(function(h) {
                    return {
                        element: h,
                        prevValue: h.getAttribute("aria-hidden")
                    }
                });
            c.forEach(function(h) {
                return h.removeAttribute("aria-hidden")
            });
            b.forEach(function(h) {
                return h.setAttribute("aria-hidden", "true")
            });
            f.forEach(function(h) {
                h.__AMP_MODAL_SAVED_TAB_INDEX =
                    h.getAttribute("tabindex");
                h.setAttribute("tabindex", "-1")
            });
            e.forEach(function(h) {
                var l = h.__AMP_MODAL_SAVED_TAB_INDEX;
                null === l ? h.removeAttribute("tabindex") : h.setAttribute("tabindex", l)
            });
            U.push({
                element: a,
                hiddenElementInfos: g,
                focusableExternalElements: f,
                focusableInternalElements: e
            })
        }

        function eb(a) {
            var b = U.pop(),
                c = b.hiddenElementInfos,
                d = b.focusableExternalElements;
            b = b.focusableInternalElements;
            xa(a);
            c.forEach(function(e) {
                var f = e.element,
                    g = e.prevValue;
                null === g ? f.removeAttribute("aria-hidden") : f.setAttribute("aria-hidden", g)
            });
            b.forEach(function(e) {
                e.setAttribute("tabindex", "-1")
            });
            d.forEach(function(e) {
                var f = e.__AMP_MODAL_SAVED_TAB_INDEX;
                null === f ? e.removeAttribute("tabindex") : e.setAttribute("tabindex", f);
                e.__AMP_MODAL_SAVED_TAB_INDEX = void 0
            })
        };

        function fb(a) {
            return a.unmount()
        }

        function V(a, b, c, d) {
            if (b && a.classList.contains("i-amphtml-element") && (u(d, a), !c)) {
                var e = a.getPlaceholder();
                e && V(e, !0, !1, d);
                return
            }
            var f = a.getElementsByClassName("i-amphtml-element");
            a = null;
            for (b = 0; b < f.length; b++) {
                var g = f[b];
                if (c) u(d, g);
                else {
                    a = a || [];
                    for (var h = !1, l = 0; l < a.length; l++)
                        if (a[l].contains(g)) {
                            h = !0;
                            break
                        }
                    h || (a.push(g), u(d, g))
                }
            }
        };

        function W(a) {
            var b = AMP.BaseElement.call(this, a) || this;
            b.I = null;
            b.Z = null;
            b.Ma = null;
            b.ca = null;
            b.J = b.win.document;
            b.Qa = b.J.documentElement;
            b.N = null;
            b.La = [];
            var c = x(b.win, "platform");
            b.U = c.isIos();
            b.Sa = c.isSafari();
            b.$ = -1;
            b.xa = !1;
            b.T = null;
            b.na = null;
            b.Ga = 0;
            b.M = !1;
            b.Ha = null;
            b.ta = new O(b.win, function(d) {
                return b.mutateElement(d)
            }, function() {
                return X(b, !0, 3)
            });
            b.ja = !1;
            b.Da = !1;
            b.G = b.G.bind(b);
            b.ea = null;
            return b
        }
        q(W, AMP.BaseElement);
        k = W.prototype;
        k.buildCallback = function() {
            var a = this,
                b = this.element;
            b.classList.add("i-amphtml-overlay");
            b.classList.add("i-amphtml-scrollable");
            this.N = b.getAttribute("side");
            this.Da = b.hasAttribute("data-disable-swipe-close");
            this.I = this.getViewport();
            this.Z = ua(b, "action");
            this.element.parentNode != this.element.ownerDocument.body && this.element.parentNode != this.getAmpDoc().getBody() && this.user().warn("amp-sidebar toolbar", "amp-sidebar toolbar is recommended to be a direct child of the <body> element to preserve a logical DOM order.");
            "left" != this.N && "right" != this.N && (this.N = gb(this, Aa(this.J) ? "right" : "left"), b.setAttribute("side", this.N));
            hb(this);
            b.addEventListener("amp:dom-update", function() {
                hb(a)
            });
            this.getAmpDoc().whenReady().then(function() {
                ha(b.querySelectorAll("nav[toolbar]")).forEach(function(c) {
                    try {
                        a.La.push(new Qa(c, a))
                    } catch (d) {
                        a.user().error("amp-sidebar toolbar", "Failed to instantiate toolbar", d)
                    }
                });
                a.G()
            });
            this.U && ib(this);
            b.hasAttribute("role") || b.setAttribute("role", "menu");
            b.tabIndex = -1;
            this.Qa.addEventListener("keydown",
                function(c) {
                    "Escape" == c.key && X(a, !1, 3) && c.preventDefault()
                });
            this.T = jb(this);
            this.T || (this.T = this.createScreenReaderCloseButton(), b.insertBefore(this.T, this.element.firstChild));
            b.appendChild(this.createScreenReaderCloseButton());
            this.registerDefaultAction(function(c) {
                kb(a, c.trust, c.caller)
            }, "open");
            this.registerAction("close", function(c) {
                X(a, !1, c.trust)
            });
            this.registerAction("toggle", function(c) {
                var d = c.trust;
                c = c.caller;
                a.M ? X(a, !1, d) : kb(a, d, c)
            });
            this.Z.addToAllowlist("amp-sidebar", ["open", "close",
                "toggle"
            ], ["email"]);
            b.addEventListener("click", function(c) {
                if ((c = C(c.target, "A")) && c.href) {
                    var d = ua(b, "url").parse(c.href),
                        e = a.getAmpDoc().getUrl();
                    $a(c.href) == $a(e) && d.hash && X(a, !1, 3)
                }
            }, !0);
            lb(this, this.element)
        };
        k.attachedCallback = function() {
            this.ea = this.I.onResize(oa(this.win, this.G));
            this.G()
        };
        k.detachedCallback = function() {
            this.ea && (this.ea(), this.ea = null)
        };

        function hb(a) {
            if (!a.Ha) {
                var b = a.element.querySelector("amp-nested-menu");
                b && (x(a.win, "extensions").installExtensionForDoc(a.getAmpDoc(), "amp-nested-menu"), a.Ha = b)
            }
        }

        function jb(a) {
            for (var b = a.element.querySelectorAll("[on]"), c = 0; c < b.length; c++) {
                var d = b[c],
                    e = a.Z.hasResolvableActionForTarget(d, "tap", a.element, d.parentElement),
                    f = C(d, "[toolbar]");
                if (e && !f) return d
            }
            return null
        }
        k.createScreenReaderCloseButton = function() {
            var a = this,
                b = this.element.getAttribute("data-close-button-aria-label") || "Close the sidebar",
                c = this.J.createElement("button");
            c.textContent = b;
            c.classList.add("i-amphtml-screen-reader");
            c.tabIndex = -1;
            c.addEventListener("click", function() {
                X(a, !1, 3)
            });
            return c
        };
        k.G = function() {
            var a = this;
            this.getAmpDoc().whenReady().then(function() {
                a.La.forEach(function(b) {
                    b.onLayoutChange()
                })
            })
        };

        function Y(a, b, c) {
            function d() {
                a.Ma === b && a.mutateElement(b)
            }
            a.Ma = b;
            c ? y(a.win, "timer").delay(d, c) : d()
        }

        function mb(a, b) {
            N(a.element, !0);
            N(Z(a), !0);
            a.I.addToFixedLayer(a.element, !0);
            a.mutateElement(function() {
                db(a.element)
            });
            a.U && a.Sa && nb(a);
            a.element.scrollTop = 1;
            a.element.setAttribute("open", "");
            Z(a).setAttribute("open", "");
            Y(a, function() {
                var c = a.getRealChildren(),
                    d = z(a.element, "owners");
                d.scheduleLayout(a.element, c);
                d.scheduleResume(a.element, c);
                if (!a.U || !z(a.element, "viewer").isEmbedded()) try {
                    a.T.focus()
                } catch (e) {}
                ob(a, "sidebarOpen", b);
                a.element.setAttribute("i-amphtml-sidebar-opened", "");
                Z(a).setAttribute("i-amphtml-sidebar-opened",
                    "");
                a.setAsContainer()
            }, 350);
            Pa(a.getAmpDoc(), a.element)
        }

        function pb(a, b, c) {
            Z(a).removeAttribute("open");
            Z(a).removeAttribute("i-amphtml-sidebar-opened");
            a.mutateElement(function() {
                eb(a.element)
            });
            a.element.removeAttribute("open");
            a.element.removeAttribute("i-amphtml-sidebar-opened");
            Y(a, function() {
                N(a.element, !1);
                N(Z(a), !1);
                z(a.element, "owners").schedulePause(a.element, a.getRealChildren());
                ob(a, "sidebarClose", c);
                a.removeAsContainer();
                var d = a.element;
                if (Array.isArray(d))
                    for (var e = 0; e < d.length; e++) V(d[e], !1, !0, fb);
                else V(d, !1, !0, fb)
            }, b ? 0 : 350)
        }

        function kb(a, b, c) {
            a.M || (a.M = !0, a.I.enterOverlayMode(), Y(a, function() {
                return mb(a, b)
            }), z(a.getAmpDoc(), "history").push(function() {
                a.U ? X(a, !0, b) : X(a, !1, b)
            }).then(function(d) {
                a.$ = d
            }), c && (a.na = c, a.Ga = a.I.getScrollTop()), Va(a.element, a.G))
        }

        function X(a, b, c) {
            if (!a.M) return !1;
            a.M = !1;
            a.I.leaveOverlayMode();
            var d = a.Ga == a.I.getScrollTop(),
                e = a.element.contains(a.J.activeElement);
            Y(a, function() {
                return pb(a, b, c)
            });
            b && (N(a.element, !1), N(Z(a), !1)); - 1 != a.$ && (z(a.getAmpDoc(), "history").pop(a.$), a.$ = -1);
            if (a.na && e && d && (!a.U || !z(a.element, "viewer").isEmbedded())) try {
                a.na.focus()
            } catch (f) {}
            Ya(a.element, a.G);
            return !0
        }

        function lb(a, b) {
            if (!a.Da) Ea(b).onGesture(Ga, function(c) {
                var d = c.data,
                    e = c.event;
                if (d.first) a.ta.startSwipe({
                    swipeElement: a.element,
                    mask: a.ca,
                    direction: "left" == a.N ? "backward" : "forward",
                    orientation: "horizontal"
                });
                else if (d.last) a.ja && a.ta.endSwipe(d), a.ja = !1;
                else {
                    var f;
                    if (f = e && e.target) e = e.target, f = !("input" === e.nodeName.toLowerCase() && "range" === e.getAttribute("type"));
                    f && (a.ja = !0, a.ta.swipeMove(d))
                }
            })
        }

        function gb(a, b) {
            return C(a.element, "amp-story") ? "left" == b ? "right" : "left" : b
        }

        function Z(a) {
            if (!a.ca) {
                var b = a.J.createElement("div");
                b.classList.add("amp-sidebar-mask", "i-amphtml-sidebar-mask");
                b.addEventListener("click", function() {
                    X(a, !1, 3)
                });
                a.getAmpDoc().getBody().appendChild(b);
                b.addEventListener("touchmove", function(c) {
                    c.preventDefault()
                });
                lb(a, b);
                a.ca = b
            }
            return a.ca
        }

        function ib(a) {
            a.element.addEventListener("scroll", function(b) {
                a.M && (1 > a.element.scrollTop ? (a.element.scrollTop = 1, b.preventDefault()) : a.element.scrollHeight == a.element.scrollTop + a.element.offsetHeight && (--a.element.scrollTop, b.preventDefault()))
            })
        }

        function nb(a) {
            if (!a.xa) {
                var b = a.J.createElement("div");
                M(b, {
                    height: "54px",
                    width: "100%",
                    "background-color": "transparent"
                });
                a.element.appendChild(b);
                a.xa = !0
            }
        }

        function ob(a, b, c) {
            var d = a.win;
            var e = "amp-sidebar toolbar." + b;
            var f = {};
            var g = {
                detail: f
            };
            Object.assign(g, void 0);
            "function" == typeof d.CustomEvent ? e = new d.CustomEvent(e, g) : (d = d.document.createEvent("CustomEvent"), d.initCustomEvent(e, !!g.bubbles, !!g.cancelable, f), e = d);
            a.Z.trigger(a.element, b, e, c)
        }(function(a) {
            a.registerElement("amp-sidebar", W, "amp-sidebar{--story-page-vh:1vh;position:fixed!important;top:0;max-height:100vh!important;height:100vh;max-width:80vw;background-color:#efefef;min-width:45px!important;outline:none;overflow-x:hidden!important;overflow-y:auto!important;z-index:2147483647;-webkit-overflow-scrolling:touch;will-change:transform}amp-sidebar[side=left]{left:0!important;transform:translateX(-100%);animation-name:i-amphtml-sidebar-slide-out-left}amp-sidebar[side=left][open]{animation-name:i-amphtml-sidebar-slide-in-left}amp-sidebar[side=right]{right:0!important;transform:translateX(100%);animation-name:i-amphtml-sidebar-slide-out-right}amp-sidebar[side=right][open]{animation-name:i-amphtml-sidebar-slide-in-right}amp-sidebar[side][i-amphtml-sidebar-opened]{transform:none;animation:none}.i-amphtml-sidebar-mask,amp-sidebar[side]{animation-duration:233ms;animation-timing-function:cubic-bezier(0,0,.21,1);animation-fill-mode:forwards}.i-amphtml-toolbar>ol,.i-amphtml-toolbar>ul{display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-wrap:wrap;flex-wrap:wrap;overflow:auto;list-style-type:none;padding:0;margin:0}.amp-sidebar-mask{background-color:rgba(0,0,0,0.5)}.i-amphtml-sidebar-mask{position:fixed!important;top:0!important;left:0!important;width:100vw!important;height:100vh!important;background-image:none!important;animation-name:i-amphtml-sidebar-mask-fade-out;z-index:2147483646}.i-amphtml-sidebar-mask[open]{animation-name:i-amphtml-sidebar-mask-fade-in}.i-amphtml-sidebar-mask[i-amphtml-sidebar-opened]{animation:none}@keyframes i-amphtml-sidebar-slide-in-left{0%{transform:translateX(-100%)}to{transform:translateX(0)}}@keyframes i-amphtml-sidebar-slide-out-left{0%{transform:translateX(0)}to{transform:translateX(-100%)}}@keyframes i-amphtml-sidebar-slide-in-right{0%{transform:translateX(100%)}to{transform:translateX(0)}}@keyframes i-amphtml-sidebar-slide-out-right{0%{transform:translateX(0)}to{transform:translateX(100%)}}@keyframes i-amphtml-sidebar-mask-fade-in{0%{opacity:0}to{opacity:1}}@keyframes i-amphtml-sidebar-mask-fade-out{0%{opacity:1}to{opacity:0}}\n/*# sourceURL=/extensions/amp-sidebar/0.1/amp-sidebar.css*/")
        })(self.AMP);
    })
});

//# sourceMappingURL=amp-sidebar-0.1.js.map