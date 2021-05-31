(function(window, document) {
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
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
    var ca = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function da(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var ea = da(this);

    function fa(a, b) {
        if (b) a: {
            var c = ea;a = a.split(".");
            for (var d = 0; d < a.length - 1; d++) {
                var e = a[d];
                if (!(e in c)) break a;
                c = c[e]
            }
            a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && ca(c, a, {
                configurable: !0,
                writable: !0,
                value: b
            })
        }
    }

    function ha(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return b ? b.call(a) : {
            next: aa(a)
        }
    }

    function t(a) {
        if (!(a instanceof Array)) {
            a = ha(a);
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            a = c
        }
        return a
    }
    var ia = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        ja;
    if ("function" == typeof Object.setPrototypeOf) ja = Object.setPrototypeOf;
    else {
        var ka;
        a: {
            var la = {
                    a: !0
                },
                ma = {};
            try {
                ma.__proto__ = la;
                ka = ma.a;
                break a
            } catch (a) {}
            ka = !1
        }
        ja = ka ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var na = ja;

    function u(a, b) {
        a.prototype = ia(b.prototype);
        a.prototype.constructor = a;
        if (na) na(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.uc = b.prototype
    }
    var oa = "function" == typeof Object.assign ? Object.assign : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
        }
        return a
    };
    fa("Object.assign", function(a) {
        return a || oa
    });
    fa("Math.trunc", function(a) {
        return a ? a : function(b) {
            b = Number(b);
            if (isNaN(b) || Infinity === b || -Infinity === b || 0 === b) return b;
            var c = Math.floor(Math.abs(b));
            return 0 > b ? -c : c
        }
    });
    var w = this || self;

    function pa() {}

    function x(a) {
        a.Ta = void 0;
        a.l = function() {
            return a.Ta ? a.Ta : a.Ta = new a
        }
    }

    function qa(a) {
        var b = typeof a;
        b = "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function sa(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function ta(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function ua(a, b) {
        a = a.split(".");
        var c = w;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function va(a) {
        return a
    };
    var wa;

    function xa(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (var c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }

    function y(a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
    }

    function ya(a, b) {
        for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
            if (g in f) {
                var h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }

    function za(a, b) {
        for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function Aa(a, b, c) {
        var d = c;
        y(a, function(e, f) {
            d = b.call(void 0, d, e, f, a)
        });
        return d
    }

    function Ba(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function Ca(a, b) {
        var c = 0;
        y(a, function(d, e, f) {
            b.call(void 0, d, e, f) && ++c
        }, void 0);
        return c
    }

    function Da(a, b) {
        b = Ea(a, b, void 0);
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function Ea(a, b, c) {
        for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
            if (f in e && b.call(c, e[f], f, a)) return f;
        return -1
    }

    function Fa(a, b) {
        return 0 <= xa(a, b)
    }

    function Ga(a) {
        return Array.prototype.concat.apply([], arguments)
    }

    function Ha(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function Ia(a, b) {
        a.sort(b || Ja)
    }

    function Ja(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    }

    function Ka(a) {
        if (!arguments.length) return [];
        for (var b = [], c = arguments[0].length, d = 1; d < arguments.length; d++) arguments[d].length < c && (c = arguments[d].length);
        for (d = 0; d < c; d++) {
            for (var e = [], f = 0; f < arguments.length; f++) e.push(arguments[f][d]);
            b.push(e)
        }
        return b
    };

    function La(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    };

    function Ma(a, b, c) {
        for (var d in a) b.call(c, a[d], d, a)
    }

    function Na(a, b) {
        var c = {},
            d;
        for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function Oa(a) {
        var b = Pa,
            c;
        for (c in b)
            if (!a.call(void 0, b[c], c, b)) return !1;
        return !0
    }

    function Qa(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = a[d];
        return b
    }
    var Ra = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function z(a, b) {
        for (var c, d, e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (var f = 0; f < Ra.length; f++) c = Ra[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    var Sa;

    function Ta(a, b) {
        this.Gb = a === Ua && b || "";
        this.g = Va
    }
    Ta.prototype.Tb = !0;

    function Wa(a) {
        return a instanceof Ta && a.constructor === Ta && a.g === Va ? a.Gb : "type_error:Const"
    }
    var Va = {},
        Ua = {};

    function Ya(a) {
        if (void 0 === Sa) {
            var b = null;
            var c = w.trustedTypes;
            if (c && c.createPolicy) {
                try {
                    b = c.createPolicy("goog#html", {
                        createHTML: va,
                        createScript: va,
                        createScriptURL: va
                    })
                } catch (d) {
                    w.console && w.console.error(d.message)
                }
                Sa = b
            } else Sa = b
        }(b = Sa) && b.createScriptURL(a)
    };

    function Za(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }
    var $a = /&/g,
        ab = /</g,
        bb = />/g,
        cb = /"/g,
        db = /'/g,
        eb = /\x00/g,
        fb = /[\x00&<>"']/;

    function A(a, b) {
        return -1 != a.toLowerCase().indexOf(b.toLowerCase())
    }

    function gb(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };
    var B;
    a: {
        var hb = w.navigator;
        if (hb) {
            var ib = hb.userAgent;
            if (ib) {
                B = ib;
                break a
            }
        }
        B = ""
    }

    function C(a) {
        return -1 != B.indexOf(a)
    };

    function jb() {
        return C("Safari") && !(kb() || C("Coast") || C("Opera") || C("Edge") || C("Edg/") || C("OPR") || C("Firefox") || C("FxiOS") || C("Silk") || C("Android"))
    }

    function kb() {
        return (C("Chrome") || C("CriOS")) && !C("Edge")
    };

    function lb(a) {
        fb.test(a) && (-1 != a.indexOf("&") && (a = a.replace($a, "&amp;")), -1 != a.indexOf("<") && (a = a.replace(ab, "&lt;")), -1 != a.indexOf(">") && (a = a.replace(bb, "&gt;")), -1 != a.indexOf('"') && (a = a.replace(cb, "&quot;")), -1 != a.indexOf("'") && (a = a.replace(db, "&#39;")), -1 != a.indexOf("\x00") && (a = a.replace(eb, "&#0;")));
        return a
    }

    function mb() {
        return "opacity".replace(/\-([a-z])/g, function(a, b) {
            return b.toUpperCase()
        })
    }

    function nb(a) {
        return String(a).replace(/([A-Z])/g, "-$1").toLowerCase()
    }

    function ob(a) {
        return a.replace(/(^|[\s]+)([a-z])/g, function(b, c, d) {
            return c + d.toUpperCase()
        })
    };
    var pb = 0,
        qb = 0;

    function rb() {
        this.g = []
    }
    rb.prototype.length = function() {
        return this.g.length
    };
    rb.prototype.end = function() {
        var a = this.g;
        this.g = [];
        return a
    };

    function sb(a, b) {
        for (; 127 < b;) a.g.push(b & 127 | 128), b >>>= 7;
        a.g.push(b)
    }

    function tb(a, b) {
        a.g.push(b >>> 0 & 255);
        a.g.push(b >>> 8 & 255);
        a.g.push(b >>> 16 & 255);
        a.g.push(b >>> 24 & 255)
    };

    function ub(a) {
        ub[" "](a);
        return a
    }
    ub[" "] = pa;

    function vb(a, b) {
        try {
            return ub(a[b]), !0
        } catch (c) {}
        return !1
    }

    function yb(a, b) {
        var c = zb;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
    };
    var Ab = C("Opera"),
        E = C("Trident") || C("MSIE"),
        Bb = C("Edge"),
        Cb = C("Gecko") && !(A(B, "WebKit") && !C("Edge")) && !(C("Trident") || C("MSIE")) && !C("Edge"),
        Db = A(B, "WebKit") && !C("Edge"),
        Eb = Db && C("Mobile");

    function Fb() {
        var a = w.document;
        return a ? a.documentMode : void 0
    }
    var Gb;
    a: {
        var Hb = "",
            Ib = function() {
                var a = B;
                if (Cb) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (Bb) return /Edge\/([\d\.]+)/.exec(a);
                if (E) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (Db) return /WebKit\/(\S+)/.exec(a);
                if (Ab) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();Ib && (Hb = Ib ? Ib[1] : "");
        if (E) {
            var Jb = Fb();
            if (null != Jb && Jb > parseFloat(Hb)) {
                Gb = String(Jb);
                break a
            }
        }
        Gb = Hb
    }
    var Kb = Gb,
        zb = {};

    function Lb(a) {
        return yb(a, function() {
            for (var b = 0, c = Za(String(Kb)).split("."), d = Za(String(a)).split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                var g = c[f] || "",
                    h = d[f] || "";
                do {
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    h = /(\d*)(\D*)(.*)/.exec(h) || ["", "", "", ""];
                    if (0 == g[0].length && 0 == h[0].length) break;
                    b = gb(0 == g[1].length ? 0 : parseInt(g[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) || gb(0 == g[2].length, 0 == h[2].length) || gb(g[2], h[2]);
                    g = g[3];
                    h = h[3]
                } while (0 == b)
            }
            return 0 <= b
        })
    }
    var Mb;
    if (w.document && E) {
        var Nb = Fb();
        Mb = Nb ? Nb : parseInt(Kb, 10) || void 0
    } else Mb = void 0;
    var Ob = Mb;
    var Pb = {},
        Qb = null;

    function Rb() {
        this.h = [];
        this.g = new rb
    }

    function Sb(a, b, c) {
        if (null != c) {
            sb(a.g, 8 * b);
            a = a.g;
            var d = c;
            c = 0 > d;
            d = Math.abs(d);
            b = d >>> 0;
            d = Math.floor((d - b) / 4294967296);
            d >>>= 0;
            c && (d = ~d >>> 0, b = (~b >>> 0) + 1, 4294967295 < b && (b = 0, d++, 4294967295 < d && (d = 0)));
            pb = b;
            qb = d;
            c = pb;
            for (b = qb; 0 < b || 127 < c;) a.g.push(c & 127 | 128), c = (c >>> 7 | b << 25) >>> 0, b >>>= 7;
            a.g.push(c)
        }
    };
    var Tb = "function" === typeof Uint8Array;

    function Ub() {}
    var Vb, Wb = [];

    function Xb(a) {
        var b = a.j + a.i;
        a.g[b] || (a.h = a.g[b] = {})
    }

    function Yb(a, b) {
        if (b < a.j) {
            b += a.i;
            var c = a.g[b];
            return c !== Wb ? c : a.g[b] = []
        }
        if (a.h) return c = a.h[b], c === Wb ? a.h[b] = [] : c
    }

    function Zb(a, b) {
        a = Yb(a, b);
        return null == a ? 0 : a
    }

    function $b(a, b, c) {
        0 !== c ? b < a.j ? a.g[b + a.i] = c : (Xb(a), a.h[b] = c) : b < a.j ? a.g[b + a.i] = null : (Xb(a), delete a.h[b]);
        return a
    }

    function ac(a) {
        if (a.m)
            for (var b in a.m)
                if (Object.prototype.hasOwnProperty.call(a.m, b)) {
                    var c = a.m[b];
                    if (Array.isArray(c))
                        for (var d = 0; d < c.length; d++) c[d] && ac(c[d]);
                    else c && ac(c)
                }
        return a.g
    }
    Ub.prototype.toString = function() {
        return ac(this).toString()
    };
    var bc;
    bc = ["av.key", "js", "20210526"].slice(-1)[0];
    var F = document,
        G = window;
    var cc = {};

    function dc() {}

    function ec(a, b) {
        if (b !== cc) throw Error("Bad secret");
        this.g = a
    }
    u(ec, dc);
    ec.prototype.toString = function() {
        return this.g
    };
    new ec("about:invalid#zTSz", cc);

    function fc(a, b, c) {
        c = void 0 === c ? {} : c;
        this.error = a;
        this.context = b.context;
        this.msg = b.message || "";
        this.id = b.id || "jserror";
        this.meta = c
    };
    var gc = La(function() {
        var a = !1;
        try {
            var b = Object.defineProperty({}, "passive", {
                get: function() {
                    a = !0
                }
            });
            w.addEventListener("test", null, b)
        } catch (c) {}
        return a
    });

    function hc(a) {
        return a ? a.passive && gc() ? a : a.capture || !1 : !1
    }

    function ic(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, hc(d)), !0) : !1
    }

    function jc(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, hc(void 0))
    };
    var kc = !E || 9 <= Number(Ob),
        lc = E || Ab || Db;

    function H(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    }
    H.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    H.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    H.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };

    function I(a, b) {
        this.width = a;
        this.height = b
    }
    I.prototype.aspectRatio = function() {
        return this.width / this.height
    };
    I.prototype.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    I.prototype.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    I.prototype.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };

    function mc(a) {
        return a ? new nc(J(a)) : wa || (wa = new nc)
    }

    function oc() {
        var a = document;
        a.getElementsByClassName ? a = a.getElementsByClassName("GoogleActiveViewContainer")[0] : (a = document, a = a.querySelectorAll && a.querySelector ? a.querySelector(".GoogleActiveViewContainer") : pc(a, "*", "GoogleActiveViewContainer", void 0)[0] || null);
        return a || null
    }

    function pc(a, b, c, d) {
        a = d || a;
        b = b && "*" != b ? String(b).toUpperCase() : "";
        if (a.querySelectorAll && a.querySelector && (b || c)) return a.querySelectorAll(b + (c ? "." + c : ""));
        if (c && a.getElementsByClassName) {
            a = a.getElementsByClassName(c);
            if (b) {
                d = {};
                for (var e = 0, f = 0, g; g = a[f]; f++) b == g.nodeName && (d[e++] = g);
                d.length = e;
                return d
            }
            return a
        }
        a = a.getElementsByTagName(b || "*");
        if (c) {
            d = {};
            for (f = e = 0; g = a[f]; f++) b = g.className, "function" == typeof b.split && Fa(b.split(/\s+/), c) && (d[e++] = g);
            d.length = e;
            return d
        }
        return a
    }

    function qc(a, b) {
        Ma(b, function(c, d) {
            c && "object" == typeof c && c.Tb && (c = c.Gb);
            "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : rc.hasOwnProperty(d) ? a.setAttribute(rc[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
        })
    }
    var rc = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };

    function sc(a) {
        var b = a.scrollingElement ? a.scrollingElement : Db || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement;
        a = a.parentWindow || a.defaultView;
        return E && Lb("10") && a.pageYOffset != b.scrollTop ? new H(b.scrollLeft, b.scrollTop) : new H(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
    }

    function tc(a) {
        return a ? a.parentWindow || a.defaultView : window
    }

    function uc(a, b, c) {
        var d = arguments,
            e = document,
            f = String(d[0]),
            g = d[1];
        if (!kc && g && (g.name || g.type)) {
            f = ["<", f];
            g.name && f.push(' name="', lb(g.name), '"');
            if (g.type) {
                f.push(' type="', lb(g.type), '"');
                var h = {};
                z(h, g);
                delete h.type;
                g = h
            }
            f.push(">");
            f = f.join("")
        }
        f = String(f);
        "application/xhtml+xml" === e.contentType && (f = f.toLowerCase());
        f = e.createElement(f);
        g && ("string" === typeof g ? f.className = g : Array.isArray(g) ? f.className = g.join(" ") : qc(f, g));
        2 < d.length && vc(e, f, d, 2);
        return f
    }

    function vc(a, b, c, d) {
        function e(h) {
            h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
        }
        for (; d < c.length; d++) {
            var f = c[d];
            if (!qa(f) || sa(f) && 0 < f.nodeType) e(f);
            else {
                a: {
                    if (f && "number" == typeof f.length) {
                        if (sa(f)) {
                            var g = "function" == typeof f.item || "string" == typeof f.item;
                            break a
                        }
                        if ("function" === typeof f) {
                            g = "function" == typeof f.item;
                            break a
                        }
                    }
                    g = !1
                }
                y(g ? Ha(f) : f, e)
            }
        }
    }

    function J(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }

    function wc(a) {
        try {
            return a.contentWindow || (a.contentDocument ? tc(a.contentDocument) : null)
        } catch (b) {}
        return null
    }

    function xc(a, b) {
        a && (a = a.parentNode);
        for (var c = 0; a;) {
            if (b(a)) return a;
            a = a.parentNode;
            c++
        }
        return null
    }

    function nc(a) {
        this.g = a || w.document || document
    }
    nc.prototype.getElementsByTagName = function(a, b) {
        return (b || this.g).getElementsByTagName(String(a))
    };
    nc.prototype.appendChild = function(a, b) {
        a.appendChild(b)
    };
    nc.prototype.append = function(a, b) {
        vc(J(a), a, arguments, 1)
    };
    nc.prototype.canHaveChildren = function(a) {
        if (1 != a.nodeType) return !1;
        switch (a.tagName) {
            case "APPLET":
            case "AREA":
            case "BASE":
            case "BR":
            case "COL":
            case "COMMAND":
            case "EMBED":
            case "FRAME":
            case "HR":
            case "IMG":
            case "INPUT":
            case "IFRAME":
            case "ISINDEX":
            case "KEYGEN":
            case "LINK":
            case "NOFRAMES":
            case "NOSCRIPT":
            case "META":
            case "OBJECT":
            case "PARAM":
            case "SCRIPT":
            case "SOURCE":
            case "STYLE":
            case "TRACK":
            case "WBR":
                return !1
        }
        return !0
    };

    function yc() {
        return C("iPad") || C("Android") && !C("Mobile") || C("Silk")
    };
    var zc = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;

    function Bc(a) {
        try {
            return !!a && null != a.location.href && vb(a, "foo")
        } catch (b) {
            return !1
        }
    }

    function Cc(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b.call(void 0, a[c], c, a)
    }

    function Dc() {
        var a = Ec;
        if (!a) return "";
        var b = /.*[&#?]google_debug(=[^&]*)?(&.*)?$/;
        try {
            var c = b.exec(decodeURIComponent(a));
            if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
        } catch (d) {}
        return ""
    };

    function K(a, b, c, d) {
        this.top = a;
        this.h = b;
        this.g = c;
        this.left = d
    }

    function Fc(a) {
        return a.h - a.left
    }

    function Gc(a) {
        return a.g - a.top
    }

    function Hc(a) {
        return new K(a.top, a.h, a.g, a.left)
    }
    K.prototype.ceil = function() {
        this.top = Math.ceil(this.top);
        this.h = Math.ceil(this.h);
        this.g = Math.ceil(this.g);
        this.left = Math.ceil(this.left);
        return this
    };
    K.prototype.floor = function() {
        this.top = Math.floor(this.top);
        this.h = Math.floor(this.h);
        this.g = Math.floor(this.g);
        this.left = Math.floor(this.left);
        return this
    };
    K.prototype.round = function() {
        this.top = Math.round(this.top);
        this.h = Math.round(this.h);
        this.g = Math.round(this.g);
        this.left = Math.round(this.left);
        return this
    };

    function Ic(a, b, c) {
        b instanceof H ? (a.left += b.x, a.h += b.x, a.top += b.y, a.g += b.y) : (a.left += b, a.h += b, "number" === typeof c && (a.top += c, a.g += c));
        return a
    };

    function Jc(a, b, c) {
        a.google_image_requests || (a.google_image_requests = []);
        var d = a.document.createElement("img");
        c && (d.referrerPolicy = "no-referrer");
        d.src = b;
        a.google_image_requests.push(d)
    }

    function Kc(a) {
        if (Lc()) Jc(window, a, !0);
        else {
            var b = w.document;
            if (b.body) {
                var c = b.getElementById("goog-srcless-iframe");
                c || (c = b.createElement("IFRAME"), c.style.display = "none", c.id = "goog-srcless-iframe", b.body.appendChild(c));
                b = c
            } else b = null;
            b && b.contentWindow && Jc(b.contentWindow, a, !0)
        }
    }
    var Lc = La(function() {
        return "referrerPolicy" in w.document.createElement("img")
    });
    var Mc = {};

    function Nc(a) {
        try {
            return a.getBoundingClientRect()
        } catch (b) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
    }

    function Oc(a, b) {
        var c = new H(0, 0),
            d = tc(J(a));
        if (!vb(d, "parent")) return c;
        do {
            if (d == b) {
                var e = a,
                    f = J(e);
                var g = new H(0, 0);
                var h = f ? J(f) : document;
                h = !E || 9 <= Number(Ob) || "CSS1Compat" == mc(h).g.compatMode ? h.documentElement : h.body;
                e != h && (e = Nc(e), f = sc(mc(f).g), g.x = e.left + f.x, g.y = e.top + f.y)
            } else g = Nc(a), g = new H(g.left, g.top);
            c.x += g.x;
            c.y += g.y
        } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
        return c
    };

    function Pc(a) {
        return !(!a || !a.call) && "function" === typeof a
    }

    function Qc() {
        var a = F.documentElement,
            b = L();
        try {
            if (F.createEvent) {
                var c = F.createEvent("CustomEvent");
                c.initCustomEvent("osd_load", !0, !0, "");
                a.dispatchEvent(c)
            } else if (Pc(b.CustomEvent)) {
                var d = new b.CustomEvent("osd_load", {
                    bubbles: !0,
                    cancelable: !0,
                    detail: ""
                });
                a.dispatchEvent(d)
            } else if (Pc(b.Event)) {
                var e = new Event("osd_load", {
                    bubbles: !0,
                    cancelable: !0
                });
                a.dispatchEvent(e)
            }
        } catch (f) {}
    }

    function Rc() {
        var a = L();
        return "complete" === a.document.readyState || !!a.google_onload_fired
    }
    var Sc = !!window.google_async_iframe_id,
        Tc = Sc && window.parent || window;

    function L() {
        if (Sc && !Bc(Tc)) {
            var a = "." + F.domain;
            try {
                for (; 2 < a.split(".").length && !Bc(Tc);) F.domain = a = a.substr(a.indexOf(".") + 1), Tc = window.parent
            } catch (b) {}
            Bc(Tc) || (Tc = window)
        }
        return Tc
    };

    function Uc(a, b, c) {
        try {
            a && (b = b.top);
            var d = void 0;
            var e = b;
            c = void 0 === c ? !1 : c;
            a && null !== e && e != e.top && (e = e.top);
            try {
                if (void 0 === c ? 0 : c) var f = (new I(e.innerWidth, e.innerHeight)).round();
                else {
                    var g = (e || window).document,
                        h = "CSS1Compat" == g.compatMode ? g.documentElement : g.body;
                    f = (new I(h.clientWidth, h.clientHeight)).round()
                }
                d = f
            } catch (q) {
                d = new I(-12245933, -12245933)
            }
            a = d;
            var n = sc(mc(b.document).g);
            if (-12245933 == a.width) {
                var m = a.width;
                var l = new K(m, m, m, m)
            } else l = new K(n.y, n.x + a.width, n.y + a.height, n.x);
            return l
        } catch (q) {
            return new K(-12245933, -12245933, -12245933, -12245933)
        }
    };
    var Vc = {
            NONE: 0,
            $b: 1
        },
        Wc = {
            Zb: 0,
            oc: 1,
            nc: 2,
            pc: 3
        };

    function Xc() {
        this.B = 0;
        this.i = !1;
        this.h = -1;
        this.g = !1;
        this.j = 0
    }
    Xc.prototype.isVisible = function() {
        return this.g ? .3 <= this.B : .5 <= this.B
    };
    var M = {
            Yb: 0,
            ac: 1
        },
        Yc = {
            668123728: 0,
            668123729: 1
        },
        Zc = {
            44731964: 0,
            44731965: 1
        },
        $c = {
            NONE: 0,
            hc: 1,
            bc: 2
        },
        ad = {
            480596784: 0,
            480596785: 1,
            21063355: 2
        };

    function bd() {
        this.g = null;
        this.j = !1;
        this.h = null
    }

    function N(a) {
        a.j = !0;
        return a
    }

    function cd(a, b) {
        a.h && y(b, function(c) {
            c = a.h[c];
            void 0 !== c && a.i(c)
        })
    }

    function dd(a) {
        bd.call(this);
        this.m = a
    }
    u(dd, bd);
    dd.prototype.i = function(a) {
        var b;
        if (!(b = null !== this.g)) {
            a: {
                b = this.m;
                for (c in b)
                    if (b[c] == a) {
                        var c = !0;
                        break a
                    }
                c = !1
            }
            b = !c
        }
        b || (this.g = a)
    };

    function ed() {
        bd.call(this)
    }
    u(ed, bd);
    ed.prototype.i = function(a) {
        null === this.g && "number" === typeof a && (this.g = a)
    };

    function fd() {
        this.g = {};
        this.h = {}
    }

    function O(a, b, c) {
        a.g[b] || (a.g[b] = new dd(c));
        return a.g[b]
    }

    function gd(a, b, c) {
        (a = a.g[b]) && a.i(c)
    }

    function hd(a, b) {
        var c = a.h;
        if (null !== c && b in c) return a.h[b];
        if (a = a.g[b]) return a.g
    }

    function id(a) {
        var b = {},
            c = Na(a.g, function(d) {
                return d.j
            });
        Ma(c, function(d, e) {
            d = void 0 !== a.h[e] ? String(a.h[e]) : d.j && null !== d.g ? String(d.g) : "";
            0 < d.length && (b[e] = d)
        }, a);
        return b
    }

    function jd(a, b) {
        b = b.split("&");
        for (var c = b.length - 1; 0 <= c; c--) {
            var d = b[c].split("="),
                e = d[0];
            d = 1 < d.length ? parseInt(d[1], 10) : 1;
            isNaN(d) || (e = a.g[e]) && e.i(d)
        }
        return b.join("&")
    }

    function kd(a, b) {
        y(Qa(a.g), function(c) {
            return cd(c, b)
        })
    }

    function ld(a, b) {
        b && "string" === typeof b && (b = b.match(/[&;?]eid=([^&;]+)/)) && 2 === b.length && (b = decodeURIComponent(b[1]).split(","), b = za(b, function(c) {
            return Number(c)
        }), kd(a, b))
    };
    var md = !E && !jb();

    function nd(a, b) {
        if (/-[a-z]/.test(b)) return null;
        if (md && a.dataset) {
            if (!(!C("Android") || kb() || C("Firefox") || C("FxiOS") || C("Opera") || C("Silk") || b in a.dataset)) return null;
            a = a.dataset[b];
            return void 0 === a ? null : a
        }
        return a.getAttribute("data-" + nb(b))
    }

    function od(a, b) {
        return /-[a-z]/.test(b) ? !1 : md && a.dataset ? b in a.dataset : a.hasAttribute ? a.hasAttribute("data-" + nb(b)) : !!a.getAttribute("data-" + nb(b))
    };

    function pd() {
        this.g = this.h = null;
        this.i = "no"
    };

    function qd(a, b) {
        this.h = (void 0 === a ? 0 : a) || 0;
        this.g = (void 0 === b ? "" : b) || ""
    }
    qd.prototype.i = function() {
        return !!this.h || !!this.g
    };
    qd.prototype.toString = function() {
        return this.h + (this.g ? "-" : "") + this.g
    };
    qd.prototype.matches = function(a) {
        return this.g || a.g ? this.g == a.g : this.h || a.h ? this.h == a.h : !1
    };

    function P() {}
    P.prototype.g = function() {
        return 0
    };
    P.prototype.i = function() {
        return 0
    };
    P.prototype.j = function() {
        return 0
    };
    P.prototype.h = function() {
        return 0
    };

    function rd() {
        if (!sd()) throw Error();
    }
    u(rd, P);

    function sd() {
        return !(!G || !G.performance)
    }
    rd.prototype.g = function() {
        return sd() && G.performance.now ? G.performance.now() : P.prototype.g.call(this)
    };
    rd.prototype.i = function() {
        return sd() && G.performance.memory ? G.performance.memory.totalJSHeapSize || 0 : P.prototype.i.call(this)
    };
    rd.prototype.j = function() {
        return sd() && G.performance.memory ? G.performance.memory.usedJSHeapSize || 0 : P.prototype.j.call(this)
    };
    rd.prototype.h = function() {
        return sd() && G.performance.memory ? G.performance.memory.jsHeapSizeLimit || 0 : P.prototype.h.call(this)
    };

    function td() {
        return {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[F.visibilityState || F.webkitVisibilityState || F.mozVisibilityState || ""] || 0
    };

    function ud() {}
    ud.prototype.isVisible = function() {
        return 1 === td()
    };
    var vd = /^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;

    function wd() {
        var a = w,
            b = [],
            c = null;
        do {
            var d = a;
            if (Bc(d)) {
                var e = d.location.href;
                c = d.document && d.document.referrer || null
            } else e = c, c = null;
            b.push(new xd(e || "", d));
            try {
                a = d.parent
            } catch (f) {
                a = null
            }
        } while (a && d != a);
        d = 0;
        for (a = b.length - 1; d <= a; ++d) b[d].depth = a - d;
        d = w;
        if (d.location && d.location.ancestorOrigins && d.location.ancestorOrigins.length == b.length - 1)
            for (a = 1; a < b.length; ++a) e = b[a], e.url || (e.url = d.location.ancestorOrigins[a - 1] || "", e.vb = !0);
        return b
    }

    function yd(a, b) {
        this.g = a;
        this.h = b
    }

    function xd(a, b, c) {
        this.url = a;
        this.C = b;
        this.vb = !!c;
        this.depth = null
    };

    function zd() {
        this.i = "&";
        this.h = {};
        this.j = 0;
        this.g = []
    }

    function Ad(a, b) {
        var c = {};
        c[a] = b;
        return [c]
    }

    function Bd(a, b, c, d, e) {
        var f = [];
        Cc(a, function(g, h) {
            (g = Cd(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function Cd(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                for (var f = [], g = 0; g < a.length; g++) f.push(Cd(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(Bd(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function Dd(a, b, c) {
        b = b + "//pagead2.googlesyndication.com" + c;
        var d = Ed(a) - c.length;
        if (0 > d) return "";
        a.g.sort(function(l, q) {
            return l - q
        });
        c = null;
        for (var e = "", f = 0; f < a.g.length; f++)
            for (var g = a.g[f], h = a.h[g], n = 0; n < h.length; n++) {
                if (!d) {
                    c = null == c ? g : c;
                    break
                }
                var m = Bd(h[n], a.i, ",$");
                if (m) {
                    m = e + m;
                    if (d >= m.length) {
                        d -= m.length;
                        b += m;
                        e = a.i;
                        break
                    }
                    c = null == c ? g : c
                }
            }
        a = "";
        null != c && (a = e + "trn=" + c);
        return b + a
    }

    function Ed(a) {
        var b = 1,
            c;
        for (c in a.h) b = c.length > b ? c.length : b;
        return 3997 - b - a.i.length - 1
    };

    function Fd() {
        this.h = new ud;
        this.g = sd() ? new rd : new P
    }

    function Gd(a, b, c) {
        return G.setTimeout(b, c)
    }

    function Hd(a) {
        Q();
        var b = L() || G;
        Jc(b, a, !1)
    }
    x(Fd);

    function Id() {}

    function Q() {
        var a = Id.l();
        if (!a.g) {
            if (!G) throw Error("Context has not been set and window is undefined.");
            a.g = Fd.l()
        }
        return a.g
    }
    x(Id);

    function Jd(a) {
        this.m = null;
        Vb && (a || (a = Vb), Vb = null);
        var b = this.constructor.sc,
            c = this.constructor.rc;
        c = b || c;
        a || (a = c ? [b] : []);
        this.i = c ? 0 : -1;
        this.g = a;
        a: {
            if (a = this.g.length)
                if (--a, b = this.g[a], !(null === b || "object" != typeof b || Array.isArray(b) || Tb && b instanceof Uint8Array)) {
                    this.j = a - this.i;
                    this.h = b;
                    break a
                }
            this.j = Number.MAX_VALUE
        }
    }
    u(Jd, Ub);

    function Kd(a) {
        this.i = a;
        this.g = -1;
        this.h = this.j = 0
    }

    function Ld(a, b) {
        return function(c) {
            for (var d = [], e = 0; e < arguments.length; ++e) d[e] = arguments[e];
            if (-1 < a.g) return b.apply(null, t(d));
            try {
                return a.g = a.i.g.g(), b.apply(null, t(d))
            } finally {
                a.j += a.i.g.g() - a.g, a.g = -1, a.h += 1
            }
        }
    };

    function Md(a, b) {
        this.h = a;
        this.i = b;
        this.g = new Kd(a)
    };
    var Nd = {
        kc: 1,
        qc: 2,
        jc: 3
    };
    Ya(Wa(new Ta(Ua, "https://pagead2.googlesyndication.com/pagead/osd.js")));

    function R() {
        this.o = void 0;
        this.i = this.u = 0;
        this.s = -1;
        this.g = new fd;
        N(O(this.g, "mv", $c)).h = void 0 === ad ? null : ad;
        O(this.g, "omid", M);
        N(O(this.g, "epoh", M));
        N(O(this.g, "epph", M));
        N(O(this.g, "umt", M)).h = void 0 === Yc ? null : Yc;
        N(O(this.g, "phel", M));
        N(O(this.g, "phell", M));
        N(O(this.g, "oseid", Nd));
        var a = this.g;
        a.g.sloi || (a.g.sloi = new ed);
        N(a.g.sloi);
        N(O(this.g, "ovms", Wc));
        N(O(this.g, "xdi", M));
        N(O(this.g, "amp", M));
        N(O(this.g, "prf", M));
        N(O(this.g, "gtx", M));
        N(O(this.g, "mvp_lv", M));
        N(O(this.g, "ssmol", M)).h = void 0 === Zc ? null : Zc;
        this.j = new Md(Q(), this.g);
        this.h = null;
        this.m = !1
    }
    x(R);

    function Od() {
        var a = "https:";
        G && G.location && "http:" === G.location.protocol && (a = "http:");
        this.h = a;
        this.g = .01;
        this.i = Math.random()
    }

    function Pd(a, b, c, d, e) {
        if ((d ? a.i : Math.random()) < (e || a.g)) try {
            if (c instanceof zd) var f = c;
            else f = new zd, Cc(c, function(h, n) {
                var m = f,
                    l = m.j++;
                h = Ad(n, h);
                m.g.push(l);
                m.h[l] = h
            });
            var g = Dd(f, a.h, "/pagead/gen_204?id=" + b + "&");
            g && Hd(g)
        } catch (h) {}
    };
    var Qd = null;

    function Rd() {
        var a = w.performance;
        return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function Sd() {
        var a = void 0 === a ? w : a;
        return (a = a.performance) && a.now ? a.now() : null
    };

    function Td(a, b) {
        var c = Sd() || Rd();
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = 0;
        this.uniqueId = Math.random();
        this.slotId = void 0
    };
    var S = w.performance,
        Ud = !!(S && S.mark && S.measure && S.clearMarks),
        Vd = La(function() {
            var a;
            if (a = Ud) {
                var b;
                if (null === Qd) {
                    Qd = "";
                    try {
                        a = "";
                        try {
                            a = w.top.location.hash
                        } catch (c) {
                            a = w.location.hash
                        }
                        a && (Qd = (b = a.match(/\bdeid=([\d,]+)/)) ? b[1] : "")
                    } catch (c) {}
                }
                b = Qd;
                a = !!b.indexOf && 0 <= b.indexOf("1337")
            }
            return a
        });

    function Wd() {
        var a = L();
        this.h = [];
        this.i = a || w;
        var b = null;
        a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.h = a.google_js_reporting_queue, b = a.google_measure_js_timing);
        this.g = Vd() || (null != b ? b : 1 > Math.random())
    }

    function Xd(a) {
        a && S && Vd() && (S.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), S.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    }
    Wd.prototype.start = function(a, b) {
        if (!this.g) return null;
        a = new Td(a, b);
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        S && Vd() && S.mark(b);
        return a
    };
    Wd.prototype.end = function(a) {
        if (this.g && "number" === typeof a.value) {
            a.duration = (Sd() || Rd()) - a.value;
            var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
            S && Vd() && S.mark(b);
            !this.g || 2048 < this.h.length || this.h.push(a)
        }
    };

    function Yd() {
        var a = Zd;
        this.h = $d;
        this.mb = "jserror";
        this.Xa = !0;
        this.Ma = null;
        this.i = this.Ua;
        this.g = void 0 === a ? null : a
    }

    function ae(a, b, c) {
        return Ld(R.l().j.g, function() {
            try {
                if (a.g && a.g.g) {
                    var d = a.g.start(b.toString(), 3);
                    var e = c();
                    a.g.end(d)
                } else e = c()
            } catch (g) {
                var f = a.Xa;
                try {
                    Xd(d), f = a.i(b, new be(ce(g)), void 0, void 0)
                } catch (h) {
                    a.Ua(217, h)
                }
                if (!f) throw g;
            }
            return e
        })()
    }

    function de(a, b) {
        var c = ee;
        return Ld(R.l().j.g, function(d) {
            for (var e = [], f = 0; f < arguments.length; ++f) e[f] = arguments[f];
            return ae(c, a, function() {
                return b.apply(void 0, e)
            })
        })
    }
    Yd.prototype.Ua = function(a, b, c, d, e) {
        e = e || this.mb;
        try {
            var f = new zd;
            f.g.push(1);
            f.h[1] = Ad("context", a);
            b.error && b.meta && b.id || (b = new be(ce(b)));
            if (b.msg) {
                var g = b.msg.substring(0, 512);
                f.g.push(2);
                f.h[2] = Ad("msg", g)
            }
            var h = b.meta || {};
            if (this.Ma) try {
                this.Ma(h)
            } catch (Ac) {}
            if (d) try {
                d(h)
            } catch (Ac) {}
            b = [h];
            f.g.push(3);
            f.h[3] = b;
            var n = wd(),
                m = new xd(w.location.href, w, !1);
            b = null;
            var l = n.length - 1;
            for (d = l; 0 <= d; --d) {
                var q = n[d];
                !b && vd.test(q.url) && (b = q);
                if (q.url && !q.vb) {
                    m = q;
                    break
                }
            }
            q = null;
            var p = n.length && n[l].url;
            0 != m.depth && p && (q = n[l]);
            var v = new yd(m, q);
            if (v.h) {
                var r = v.h.url || "";
                f.g.push(4);
                f.h[4] = Ad("top", r)
            }
            var D = {
                url: v.g.url || ""
            };
            if (v.g.url) {
                var ra = v.g.url.match(zc),
                    Xa = ra[1],
                    ba = ra[3],
                    wb = ra[4];
                n = "";
                Xa && (n += Xa + ":");
                ba && (n += "//", n += ba, wb && (n += ":" + wb));
                var xb = n
            } else xb = "";
            D = [D, {
                url: xb
            }];
            f.g.push(5);
            f.h[5] = D;
            Pd(this.h, e, f, !1, c)
        } catch (Ac) {
            try {
                Pd(this.h, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: ce(Ac),
                    url: v && v.g.url
                }, !1, c)
            } catch (ki) {}
        }
        return this.Xa
    };

    function ce(a) {
        var b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        if (a.stack) {
            a = a.stack;
            try {
                -1 == a.indexOf(b) && (a = b + "\n" + a);
                for (var c; a != c;) c = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                b = a.replace(/\n */g, "\n")
            } catch (d) {}
        }
        return b
    }

    function be(a) {
        fc.call(this, Error(a), {
            message: a
        })
    }
    u(be, fc);
    var $d, ee, Zd = new Wd;

    function fe() {
        var a = L();
        a && "undefined" != typeof a.google_measure_js_timing && !a.google_measure_js_timing && (a = Zd, a.g = !1, a.h != a.i.google_js_reporting_queue && (Vd() && y(a.h, Xd), a.h.length = 0))
    }(function() {
        $d = new Od;
        ee = new Yd;
        var a = L();
        a && a.document && ("complete" == a.document.readyState ? fe() : Zd.g && ic(a, "load", function() {
            fe()
        }))
    })();

    function ge(a) {
        ee.Ma = function(b) {
            y(a, function(c) {
                c(b)
            })
        }
    }

    function he(a, b) {
        return ae(ee, a, b)
    }

    function ie(a, b) {
        return de(a, b)
    }

    function je(a, b) {
        Pd($d, a, b, "jserror" != a, void 0)
    }

    function ke(a, b, c, d) {
        ee.Ua(a, b, c, d)
    };
    var le = Date.now(),
        me = -1,
        ne = -1,
        oe = !1;

    function T() {
        return Date.now() - le
    }

    function pe() {
        var a = R.l().o,
            b = 0 <= ne ? T() - ne : -1,
            c = oe ? T() - me : -1;
        if (947190542 == a) return 100;
        if (79463069 == a) return 200;
        a = [2E3, 4E3];
        var d = [250, 500, 1E3];
        ke(637, Error(), .001);
        var e = b; - 1 != c && c < b && (e = c);
        for (b = 0; b < a.length; ++b)
            if (e < a[b]) {
                var f = d[b];
                break
            }
        void 0 === f && (f = d[a.length]);
        return f
    };

    function qe(a, b, c) {
        var d = new K(0, 0, 0, 0);
        this.time = a;
        this.volume = null;
        this.i = b;
        this.g = d;
        this.h = c
    };

    function re(a, b, c, d, e, f, g) {
        this.m = a;
        this.j = b;
        this.i = c;
        this.h = d;
        this.o = e;
        this.g = f;
        this.s = g
    };

    function se(a) {
        for (var b = 0, c = a, d = 0; a && a != a.parent;) a = a.parent, d++, Bc(a) && (c = a, b = d);
        return {
            C: c,
            level: b
        }
    };
    var Pa = {
        Xb: "addEventListener",
        cc: "getMaxSize",
        dc: "getScreenSize",
        ec: "getState",
        fc: "getVersion",
        lc: "removeEventListener",
        ic: "isViewable"
    };

    function te(a) {
        var b = a !== a.top,
            c = a.top === se(a).C,
            d = -1,
            e = 0;
        if (b && c && a.top.mraid) {
            d = 3;
            var f = a.top.mraid
        } else d = (f = a.mraid) ? b ? c ? 2 : 1 : 0 : -1;
        f && (f.IS_GMA_SDK || (e = 2), Oa(function(g) {
            return "function" === typeof f[g]
        }) || (e = 1));
        return {
            J: f,
            za: e,
            Wb: d
        }
    };

    function ue(a) {
        return (a = a.document) && "function" === typeof a.elementFromPoint
    };
    if (F && F.URL) {
        var ve, Ec = F.URL;
        ve = !!Ec && 0 < Dc().length;
        ee.Xa = !ve
    }

    function we(a, b, c, d) {
        var e = void 0 === e ? !1 : e;
        c = de(d, c);
        ic(a, b, c, {
            capture: e
        });
        return c
    };

    function xe(a) {
        var b = [];
        Ma(a, function(c, d) {
            d = encodeURIComponent(d);
            "string" === typeof c && (c = encodeURIComponent(c));
            b.push(d + "=" + c)
        });
        b.push("24=" + Date.now());
        return b.join("\n")
    };
    var ye = 0;

    function ze(a) {
        var b = Math.pow(10, 2);
        return Math.floor(a * b) / b
    }

    function Ae(a, b) {
        try {
            ye++, b.postMessage(a, "*")
        } catch (c) {}
    }

    function Be(a, b) {
        b && (a(b), b.frames && y(b.frames, function(c) {
            Be(a, c)
        }))
    }

    function Ce(a) {
        return new K(a.top, a.right, a.bottom, a.left)
    }

    function De() {
        var a = Q().h;
        return 0 === td() ? -1 : a.isVisible() ? 0 : 1
    }

    function Ee(a) {
        return [a.top, a.left, a.g, a.h].join("-")
    }

    function Fe(a, b, c) {
        if (b && a)
            if (c && 0 < c.length)
                for (c = ya(c, function(e) {
                        var f = e.parent && e.parent !== e;
                        return e === G.top || f
                    }), a = ha(c), c = a.next(); !c.done; c = a.next()) Ae(b, c.value);
            else {
                c = [];
                var d = wc(a);
                d && c.push(d);
                if (0 === c.length) try {
                    c = za(pc(document, "IFRAME".toString().toLowerCase(), void 0, a), function(e) {
                        return wc(e)
                    })
                } catch (e) {}
                a = ha(c);
                for (c = a.next(); !c.done; c = a.next()) {
                    c = c.value;
                    try {
                        b && Be(ta(Ae, b), c)
                    } catch (e) {}
                }
            }
    }

    function Ge(a, b, c) {
        try {
            var d = xe(b);
            Fe(a, d, c)
        } catch (e) {}
    };

    function He() {
        var a = B;
        return a ? Ba("Android TV;AppleTV;Apple TV;GoogleTV;HbbTV;NetCast.TV;Opera TV;POV_TV;SMART-TV;SmartTV;TV Store;AmazonWebAppPlatform;MiBOX".split(";"), function(b) {
            return A(a, b)
        }) || A(a, "OMI/") && !A(a, "XiaoMi/") ? !0 : A(a, "Presto") && A(a, "Linux") && !A(a, "X11") && !A(a, "Android") && !A(a, "Mobi") : !1
    }

    function Ie() {
        var a = B;
        return A(a, "AppleTV") || A(a, "Apple TV") || A(a, "CFNetwork") || A(a, "tvOS")
    }

    function Je() {
        var a = B;
        return A(a, "sdk_google_atv_x86") || A(a, "Android TV")
    };

    function U() {
        this.i = !Bc(G.top);
        this.F = !this.i;
        this.o = yc() || !yc() && (C("iPod") || C("iPhone") || C("Android") || C("IEMobile"));
        var a = wd();
        0 < a.length && null != a[a.length - 1] && null != a[a.length - 1].url && (a = a[a.length - 1].url.match(zc)[3] || null) && decodeURI(a);
        this.g = new K(0, 0, 0, 0);
        this.s = new I(0, 0);
        this.m = new I(0, 0);
        this.h = new K(0, 0, 0, 0);
        this.u = new H(0, 0);
        this.D = this.A = !1;
        this.j = !(!G || !te(G).J);
        Ke(this)
    }

    function Le(a, b) {
        b && b.screen && (a.s = new I(b.screen.width, b.screen.height))
    }

    function Me(a, b) {
        var c = a.g ? new I(Fc(a.g), Gc(a.g)) : new I(0, 0);
        b = void 0 === b ? G : b;
        null !== b && b != b.top && (b = b.top);
        var d = 0,
            e = 0;
        try {
            var f = b.document,
                g = f.body,
                h = f.documentElement;
            if ("CSS1Compat" == f.compatMode && h.scrollHeight) d = h.scrollHeight != c.height ? h.scrollHeight : h.offsetHeight, e = h.scrollWidth != c.width ? h.scrollWidth : h.offsetWidth;
            else {
                var n = h.scrollHeight,
                    m = h.scrollWidth,
                    l = h.offsetHeight,
                    q = h.offsetWidth;
                h.clientHeight != l && (n = g.scrollHeight, m = g.scrollWidth, l = g.offsetHeight, q = g.offsetWidth);
                n > c.height ? n > l ? (d = n, e = m) : (d = l, e = q) : n < l ? (d = n, e = m) : (d = l, e = q)
            }
            var p = new I(e, d)
        } catch (v) {
            p = new I(-12245933, -12245933)
        }
        a.m = p
    }

    function Ke(a) {
        G && G.document && (a.h = Uc(!1, G, a.o), a.g = Uc(!0, G, a.o), Me(a, G), Le(a, G))
    }

    function Ne() {
        if (U.l().D) return !0;
        var a = Q().h.isVisible(),
            b = 0 === td();
        return a || b
    }
    x(U);

    function Oe(a) {
        this.i = a;
        this.h = 0;
        this.g = null
    }
    Oe.prototype.cancel = function() {
        Q();
        G.clearTimeout(this.g);
        this.g = null
    };

    function Pe(a) {
        Q();
        a.g = Gd(0, Ld(R.l().j.g, ie(143, function() {
            a.h++;
            a.i.Fb()
        })), pe())
    };

    function V(a, b, c) {
        this.C = a;
        this.U = void 0 === c ? "na" : c;
        this.j = [];
        this.A = !1;
        this.i = new qe(-1, !0, this);
        this.g = this;
        this.o = b;
        this.D = this.u = !1;
        this.M = "uk";
        this.K = !1;
        this.s = !0
    }
    k = V.prototype;
    k.Y = function() {
        return !1
    };
    k.Fa = function() {
        return this.A = !0
    };
    k.aa = function() {
        return this.g.M
    };
    k.ha = function() {
        return this.g.D
    };

    function Qe(a, b, c) {
        if (!a.D || (void 0 === c ? 0 : c)) a.D = !0, a.M = b, a.o = 0, a.g != a || Re(a)
    }
    k.I = function() {
        return this.g.U
    };
    k.R = function() {
        return this.g.pb()
    };
    k.pb = function() {
        return {}
    };
    k.S = function() {
        return this.g.o
    };

    function Se(a, b) {
        Fa(a.j, b) || (a.j.push(b), b.ga(a.g), b.W(a.i), b.V() && (a.u = !0))
    }
    k.Ga = function() {
        var a = U.l();
        a.g = Uc(!0, this.C, a.o)
    };
    k.Ha = function() {
        Le(U.l(), this.C)
    };
    k.ab = function() {
        Me(U.l(), this.C)
    };
    k.bb = function() {
        var a = U.l();
        a.h = Uc(!1, this.C, a.o)
    };
    k.Ra = function() {
        return this.i.g
    };

    function Te(a) {
        a = a.g;
        a.Ha();
        a.Ga();
        a.bb();
        a.ab();
        a.i.g = a.Ra()
    }
    k.Fb = function() {};

    function Ue(a) {
        a.u = a.j.length ? Ba(a.j, function(b) {
            return b.V()
        }) : !1
    }

    function Ve(a) {
        var b = Ha(a.j);
        y(b, function(c) {
            c.W(a.i)
        })
    }

    function Re(a) {
        var b = Ha(a.j);
        y(b, function(c) {
            c.ga(a.g)
        });
        a.g != a || Ve(a)
    }
    k.ga = function(a) {
        var b = this.g;
        this.g = a.S() >= this.o ? a : this;
        b !== this.g ? (this.s = this.g.s, Re(this)) : this.s !== this.g.s && (this.s = this.g.s, Re(this))
    };
    k.W = function(a) {
        if (a.h === this.g) {
            var b = this.i,
                c = this.u;
            if (c = a && (void 0 === c || !c || b.volume == a.volume) && b.i == a.i) b = b.g, c = a.g, c = b == c ? !0 : b && c ? b.top == c.top && b.h == c.h && b.g == c.g && b.left == c.left : !1;
            this.i = a;
            !c && Ve(this)
        }
    };
    k.V = function() {
        return this.u
    };
    k.G = function() {
        this.K = !0
    };
    k.ia = function() {
        return this.K
    };

    function We(a, b, c, d) {
        this.h = a;
        this.g = new K(0, 0, 0, 0);
        this.s = new K(0, 0, 0, 0);
        this.i = b;
        this.H = c;
        this.K = d;
        this.F = !1;
        this.timestamp = -1;
        this.u = new re(b.i, this.g, new K(0, 0, 0, 0), 0, 0, T(), 0)
    }
    k = We.prototype;
    k.na = function() {
        return !0
    };
    k.P = function() {};
    k.G = function() {
        if (!this.ia()) {
            var a = this.i,
                b = a.j,
                c = xa(b, this);
            0 <= c && Array.prototype.splice.call(b, c, 1);
            a.u && this.V() && Ue(a);
            this.P();
            this.F = !0
        }
    };
    k.ia = function() {
        return this.F
    };
    k.R = function() {
        return this.i.R()
    };
    k.S = function() {
        return this.i.S()
    };
    k.aa = function() {
        return this.i.aa()
    };
    k.ha = function() {
        return this.i.ha()
    };
    k.ga = function() {};
    k.W = function() {
        this.Z()
    };
    k.V = function() {
        return this.K
    };

    function Xe(a) {
        this.m = !1;
        this.g = a;
        this.j = pa
    }
    k = Xe.prototype;
    k.S = function() {
        return this.g.S()
    };
    k.aa = function() {
        return this.g.aa()
    };
    k.ha = function() {
        return this.g.ha()
    };
    k.create = function(a, b, c) {
        var d = null;
        this.g && (d = this.Pa(a, b, c), Se(this.g, d));
        return d
    };
    k.cb = function() {
        return this.oa()
    };
    k.oa = function() {
        return !1
    };
    k.tb = function(a) {
        return this.g.Fa() ? (Se(this.g, this), this.j = a, !0) : !1
    };
    k.ga = function(a) {
        0 == a.S() && this.j(a.aa(), this)
    };
    k.W = function() {};
    k.V = function() {
        return !1
    };
    k.G = function() {
        this.m = !0
    };
    k.ia = function() {
        return this.m
    };
    k.R = function() {
        return {}
    };

    function Ye(a, b, c) {
        this.i = void 0 === c ? 0 : c;
        this.h = a;
        this.g = null == b ? "" : b
    }

    function Ze(a) {
        switch (Math.trunc(a.i)) {
            case -16:
                return -16;
            case -8:
                return -8;
            case 0:
                return 0;
            case 8:
                return 8;
            case 16:
                return 16;
            default:
                return 16
        }
    }

    function $e(a, b) {
        return a.i < b.i ? !0 : a.i > b.i ? !1 : a.h < b.h ? !0 : a.h > b.h ? !1 : typeof a.g < typeof b.g ? !0 : typeof a.g > typeof b.g ? !1 : a.g < b.g
    };

    function af() {
        this.i = 0;
        this.g = [];
        this.h = !1
    }
    af.prototype.add = function(a, b, c) {
        ++this.i;
        a = new Ye(a, b, c);
        this.g.push(new Ye(a.h, a.g, a.i + this.i / 4096));
        this.h = !0;
        return this
    };

    function bf(a, b) {
        y(b.g, function(c) {
            a.add(c.h, c.g, Ze(c))
        })
    }

    function cf(a, b) {
        var c = void 0 === c ? 0 : c;
        var d = void 0 === d ? !0 : d;
        Cc(b, function(e, f) {
            d && void 0 === e || a.add(f, e, c)
        })
    }

    function df(a) {
        var b = ef;
        a.h && (Ia(a.g, function(c, d) {
            return $e(d, c) ? 1 : $e(c, d) ? -1 : 0
        }), a.h = !1);
        return Aa(a.g, function(c, d) {
            d = b(d);
            return "" + c + ("" != c && "" != d ? "&" : "") + d
        }, "")
    };

    function ef(a) {
        var b = a.h;
        a = a.g;
        return "" === a ? b : "boolean" === typeof a ? a ? b : "" : Array.isArray(a) ? 0 === a.length ? b : b + "=" + a.join() : b + "=" + (Fa(["mtos", "tos", "p"], b) ? a : encodeURIComponent(a))
    };

    function ff(a) {
        var b = void 0 === b ? !0 : b;
        this.g = new af;
        void 0 !== a && bf(this.g, a);
        b && this.g.add("v", bc, -16)
    }
    ff.prototype.toString = function() {
        var a = "//pagead2.googlesyndication.com//pagead/gen_204",
            b = df(this.g);
        0 < b.length && (a += "?" + b);
        return a
    };

    function gf(a) {
        var b = [],
            c = [];
        Ma(a, function(d, e) {
            if (!(e in Object.prototype) && "undefined" != typeof d) switch (Array.isArray(d) && (d = d.join(",")), d = [e, "=", d].join(""), e) {
                case "adk":
                case "r":
                case "tt":
                case "error":
                case "mtos":
                case "tos":
                case "p":
                case "bs":
                    b.unshift(d);
                    break;
                case "req":
                case "url":
                case "referrer":
                case "iframe_loc":
                    c.push(d);
                    break;
                default:
                    b.push(d)
            }
        });
        return b.concat(c)
    }

    function hf() {
        if (bc && "unreleased" !== bc) return bc
    };

    function jf() {
        this.g = 0
    }
    x(jf);

    function kf(a) {
        this.A = a;
        this.u = !1
    }
    kf.prototype.o = function(a, b) {
        this.g = a;
        this.h = b
    };

    function lf() {
        kf.call(this, "capability")
    }
    u(lf, kf);
    lf.prototype.s = function() {
        return !0
    };
    lf.prototype.m = function() {
        var a = {};
        return a.b_name = this.g.X, a.v_name = this.h.X, a
    };

    function mf() {
        kf.call(this, "diff")
    }
    u(mf, kf);
    mf.prototype.s = function() {
        return !(.02 >= Math.abs(this.h.B - this.g.B))
    };
    mf.prototype.m = function() {
        var a = {};
        return a.b_name = this.g.X, a.v_name = this.h.X, a.b_vp_off = JSON.stringify(this.g.L), a.v_vp_off = JSON.stringify(this.h.L), a.b_vp_sz = JSON.stringify(this.g.$a), a.v_vp_sz = JSON.stringify(this.h.$a), a.b_exp = this.g.B, a.v_exp = this.h.B, a.efp_occ = this.g.Jb, a.sbv = this.g.ka, a
    };

    function nf() {
        kf.call(this, "capt");
        this.j = [];
        this.i = []
    }
    u(nf, kf);
    nf.prototype.o = function(a, b) {
        kf.prototype.o.call(this, a, b);
        20 <= this.i.length || (this.j.push(a.B), this.i.push(b.B))
    };
    nf.prototype.s = function() {
        return 20 === this.i.length
    };
    nf.prototype.m = function() {
        var a = of (this.j, this.i),
            b = pf(this.j, this.i),
            c = {};
        return c.b_name = this.g.X, c.v_name = this.h.X, c.b_exp = this.j.join(","), c.v_exp = this.i.join(","), c.diff = a, c.diff_buckets = b, c
    };

    function of (a, b) {
        return Ca(Ka(a, b), function(c) {
            return c[0] !== c[1]
        })
    }

    function pf(a, b) {
        function c(d) {
            return .25 * Math.floor(d / .25)
        }
        return of(za(a, c), za(b, c))
    };

    function qf() {
        this.K = this.K;
        this.va = this.va
    }
    qf.prototype.K = !1;
    qf.prototype.ia = function() {
        return this.K
    };
    qf.prototype.G = function() {
        this.K || (this.K = !0, this.$())
    };
    qf.prototype.$ = function() {
        if (this.va)
            for (; this.va.length;) this.va.shift()()
    };

    function rf(a, b, c, d, e) {
        e = void 0 === e ? [new lf, new mf, new nf] : e;
        qf.call(this);
        this.g = a.Pa(b, c, this.V());
        this.g.na();
        this.i = e;
        this.h = d
    }
    u(rf, qf);
    rf.prototype.$ = function() {
        this.g && (this.g.P(), this.g.G())
    };

    function sf(a, b, c) {
        y(a.i, function(d) {
            var e = a.h;
            if (!d.u && (d.o(b, c), d.s())) {
                d.u = !0;
                var f = d.m(),
                    g = new af;
                g.add("id", "av-js");
                g.add("type", "verif");
                g.add("vtype", d.A);
                d = jf.l();
                g.add("i", d.g++);
                g.add("adk", e);
                cf(g, f);
                e = new ff(g);
                var h = void 0 === h ? 4E3 : h;
                e = e.toString();
                /&v=[^&]+/.test(e) || (e = (f = hf()) ? e + "&v=" + encodeURIComponent(f) : e);
                e = e.substring(0, h);
                Hd(e)
            }
        })
    }
    rf.prototype.W = function() {};
    rf.prototype.ga = function() {};
    rf.prototype.V = function() {
        return !1
    };

    function tf() {
        this.g = this.h = this.i = 0
    }

    function uf(a, b, c, d) {
        b && (a.i += c, a.h += c, a.g = Math.max(a.g, a.h));
        if (void 0 === d ? !b : d) a.h = 0
    };
    var vf = [1, .75, .5, .3, 0];

    function wf(a) {
        this.g = a = void 0 === a ? vf : a;
        this.h = za(this.g, function() {
            return new tf
        })
    }

    function xf(a) {
        return yf(a, function(b) {
            return b.i
        }, !1)
    }

    function zf(a) {
        return yf(a, function(b) {
            return b.g
        }, !0)
    }

    function Af(a, b, c, d, e, f) {
        var g = void 0 === g ? !0 : g;
        c = f ? Math.min(b, c) : c;
        for (f = 0; f < a.g.length; f++) {
            var h = a.g[f],
                n = 0 < c && c >= h;
            h = !(0 < b && b >= h) || d;
            uf(a.h[f], g && n, e, !g || h)
        }
    }

    function yf(a, b, c) {
        a = za(a.h, function(d) {
            return b(d)
        });
        return c ? a : Bf(a)
    }

    function Bf(a) {
        return za(a, function(b, c, d) {
            return 0 < c ? d[c] - d[c - 1] : d[c]
        })
    };

    function Cf() {
        this.g = new wf;
        this.i = new tf;
        this.h = -1;
        this.j = new wf([1, .9, .8, .7, .6, .5, .4, .3, .2, .1, 0])
    }

    function W(a) {
        return 1E3 <= a.i.g
    };
    var Df = new K(0, 0, 0, 0);

    function Ef(a, b) {
        b = Ff(b);
        return 0 === b ? 0 : Ff(a) / b
    }

    function Ff(a) {
        return Math.max(a.g - a.top, 0) * Math.max(a.h - a.left, 0)
    }

    function Gf(a, b) {
        if (!a || !b) return !1;
        for (var c = 0; null !== a && 100 > c++;) {
            if (a === b) return !0;
            try {
                a: {
                    var d = void 0;
                    if (lc && !(E && Lb("9") && !Lb("10") && w.SVGElement && a instanceof w.SVGElement) && (d = a.parentElement)) {
                        var e = d;
                        break a
                    }
                    d = a.parentNode;e = sa(d) && 1 == d.nodeType ? d : null
                }
                if (a = e || a) {
                    var f = J(a),
                        g = f && tc(f),
                        h = g && g.frameElement;
                    h && (a = h)
                }
            }
            catch (n) {
                break
            }
        }
        return !1
    }

    function Hf(a, b, c) {
        if (!a || !b) return !1;
        b = Ic(Hc(a), -b.left, -b.top);
        a = (b.left + b.h) / 2;
        b = (b.top + b.g) / 2;
        var d = L();
        Bc(d.top) && d.top && d.top.document && (d = d.top);
        if (!ue(d)) return !1;
        a = d.document.elementFromPoint(a, b);
        if (!a) return !1;
        b = (b = (b = J(c)) && b.defaultView && b.defaultView.frameElement) && Gf(b, a);
        d = a === c;
        a = !d && a && xc(a, function(e) {
            return e === c
        });
        return !(b || d || a)
    }

    function If(a, b, c, d) {
        return U.l().i ? !1 : 0 >= Fc(a) || 0 >= Gc(a) ? !0 : c && d ? he(208, function() {
            return Hf(a, b, c)
        }) : !1
    };
    var Jf = new K(0, 0, 0, 0);

    function Kf(a, b, c) {
        qf.call(this);
        this.position = Hc(Jf);
        this.i = new Cf;
        this.ra = -2;
        this.Lb = -1;
        this.Eb = b;
        this.qa = null;
        this.O = !1;
        this.L = null;
        this.M = -1;
        this.wa = c;
        this.Mb = this.La = pa;
        this.h = new pd;
        this.h.h = a;
        this.h.g = a;
        this.u = !1;
        this.o = {
            Da: null,
            Ca: null
        };
        this.ea = !0;
        this.H = null;
        R.l().u++;
        this.j = new Xc;
        this.Kb = this.ya = -1;
        this.Ea = 0;
        this.U = -1;
        this.g = null;
        this.Qa = new K(0, 0, 0, 0);
        this.Cb = !1;
        a = this.m = new fd;
        O(a, "od", Vc);
        N(O(a, "opac", M));
        N(O(a, "sbeos", M));
        N(O(a, "prf", M));
        N(O(a, "mwt", M));
        O(a, "iogeo", M);
        (a = this.h.h) && a.getAttribute && od(a, "googleAvInapp") && (U.l().j = !0);
        1 == this.wa ? gd(this.m, "od", 1) : gd(this.m, "od", 0)
    }
    u(Kf, qf);
    k = Kf.prototype;
    k.$ = function() {
        Lf(this);
        this.H && this.H.G();
        this.g && this.g.G();
        delete this.i;
        delete this.La;
        delete this.Mb;
        delete this.h.h;
        delete this.h.g;
        delete this.o;
        delete this.H;
        delete this.g;
        delete this.m;
        qf.prototype.$.call(this)
    };

    function Mf(a) {
        return a.g ? a.g.g : a.position
    }
    k.Ia = function(a) {
        var b = R.l();
        "string" === typeof a && 0 != a.length && jd(b.g, a)
    };
    k.eb = function() {
        return !1
    };
    k.ja = function() {
        this.O = !0
    };
    k.Ba = function() {
        return this.O
    };
    k.Wa = function() {
        this.j.B = 0
    };

    function Nf(a, b) {
        if (a.g) {
            if (b.I() === a.g.I()) return;
            a.g.G();
            a.g = null
        }
        b = b.create(a.h.g, a.m, a.eb());
        if (b = null != b && b.na() ? b : null) a.g = b
    }

    function Of(a, b, c) {
        if (a.g) {
            a.g.Z();
            var d = a.g.u,
                e = d.m,
                f = e.g;
            if (null != d.i) {
                var g = d.j;
                a.L = new H(g.left - f.left, g.top - f.top);
                a.Qa = d.i
            }
            f = a.ka() ? Math.max(d.h, d.o) : d.h;
            g = {};
            null !== e.volume && (g.volume = e.volume);
            a.qa && -1 != a.Eb && -1 !== d.g && -1 !== a.qa.g ? (e = d.g - a.qa.g, e = 1E4 < e ? 0 : e) : e = 0;
            a.qa = d;
            a.Ya(f, b, c, !1, g, e, d.s)
        }
    }

    function Pf(a) {
        if (a.Ba() && a.H) {
            var b = 1 == hd(a.m, "od"),
                c = U.l().g,
                d = a.H,
                e = new I(Fc(c), Gc(c));
            c = a.ka();
            a = {
                X: a.g ? a.g.I() : "ns",
                L: a.L,
                $a: e,
                ka: c,
                B: a.j.B,
                Jb: b
            };
            if (b = d.g) {
                b.Z();
                e = b.u;
                var f = e.m.g,
                    g = null,
                    h = null;
                null != e.i && f && (g = e.j, g = new H(g.left - f.left, g.top - f.top), h = new I(f.h - f.left, f.g - f.top));
                c = {
                    X: b.I(),
                    L: g,
                    $a: h,
                    ka: c,
                    Jb: !1,
                    B: c ? Math.max(e.h, e.o) : e.h
                }
            } else c = null;
            c && sf(d, a, c)
        }
    }
    k.Ya = function(a, b, c, d, e, f, g) {
        this.u || (this.Ba() && (e = new Xc, e.i = c, e.h = De(), e.B = 0 === this.M && 1 === hd(this.m, "opac") ? 0 : a, e.g = this.ca(), e.j = g, a = this.i, c = this.j, d = d && this.j.B >= (this.ca() ? .3 : .5), a.h = Math.max(a.h, e.B), Af(a.j, e.j, c.j, e.i, f, d), Af(a.g, e.B, c.B, e.i, f, d), d = d || c.g != e.g ? c.isVisible() && e.isVisible() : c.isVisible(), c = !e.isVisible() || e.i, uf(a.i, d, f, c), this.Eb = b, 0 < e.B && (-1 === this.ya && (this.ya = b), this.Kb = b), -1 == this.Lb && W(this.i) && (this.Lb = b), -2 == this.ra && (this.ra = Ff(Mf(this)) ? e.B : -1), this.j = e), this.La(this))
    };
    k.ca = function() {
        return !1
    };
    k.ka = function() {
        return this.Cb || !1
    };

    function Qf(a) {
        a.h.g && (a.o.Da = we(a.h.g, "mouseover", function() {
            a.U = T()
        }, 149), a.o.Ca = we(a.h.g, "mouseout", function() {
            var b = T(); - 1 == a.U || b < a.U || (a.Ea += b - a.U);
            a.U = -1
        }, 150))
    }

    function Lf(a) {
        a.h.g && (a.o.Da && (jc(a.h.g, "mouseover", a.o.Da), a.o.Da = null), a.o.Ca && (jc(a.h.g, "mouseout", a.o.Ca), a.o.Ca = null))
    };
    Ya(Wa(new Ta(Ua, "https://www.googletagservices.com/activeview/js/current/osd.js")));

    function Rf() {
        this.h = this.g = null;
        this.i = !1;
        Sf(this)
    }

    function Sf(a) {
        a.g || "function" !== typeof G.Goog_AdSense_getAdAdapterInstance || (a.g = G.Goog_AdSense_getAdAdapterInstance());
        if (!a.h) {
            var b = w.goog_osd_adp;
            a.h = b && "function" === typeof b.getOseId ? b : null
        }!a.i && oc() && (a.i = !0)
    }

    function Tf(a, b, c, d) {
        Sf(a);
        var e = U.l().A;
        a.g && a.g.getNewBlocks(b, e);
        a.h && a.h.getNewBlocks(b, e);
        a.i && !c() && (d(!0), b(oc(), "", 13, !0))
    }

    function Uf(a) {
        Sf(a);
        return (a.g ? a.g.numBlocks() : 0) + (a.h ? a.h.numBlocks() : 0) + (a.i ? 1 : 0)
    }

    function Vf(a) {
        Sf(a);
        return a.g ? a.g.getOseId() : a.h ? a.h.getOseId() : 0
    };

    function Wf(a) {
        return jb() ? (a = (a = J(a)) && tc(a), !!(a && a.location && a.location.ancestorOrigins && 0 < a.location.ancestorOrigins.length && a.location.origin == a.location.ancestorOrigins[0])) : !0
    };
    var Xf = "StopIteration" in w ? w.StopIteration : {
        message: "StopIteration",
        stack: ""
    };

    function Yf() {}
    Yf.prototype.next = function() {
        throw Xf;
    };
    Yf.prototype.fb = function() {
        return this
    };

    function Zf(a) {
        if (a instanceof Yf) return a;
        if ("function" == typeof a.fb) return a.fb(!1);
        if (qa(a)) {
            var b = 0,
                c = new Yf;
            c.next = function() {
                for (;;) {
                    if (b >= a.length) throw Xf;
                    if (b in a) return a[b++];
                    b++
                }
            };
            return c
        }
        throw Error("Not implemented");
    }

    function $f(a, b) {
        if (qa(a)) try {
            y(a, b, void 0)
        } catch (c) {
            if (c !== Xf) throw c;
        } else {
            a = Zf(a);
            try {
                for (;;) b.call(void 0, a.next(), void 0, a)
            } catch (c) {
                if (c !== Xf) throw c;
            }
        }
    }

    function ag(a, b) {
        var c = 1;
        $f(a, function(d) {
            c = b.call(void 0, c, d)
        });
        return c
    }

    function bg(a, b) {
        var c = Zf(a);
        a = new Yf;
        a.next = function() {
            var d = c.next();
            if (b.call(void 0, d, void 0, c)) return d;
            throw Xf;
        };
        return a
    }

    function cg(a) {
        var b = Zf(a);
        a = new Yf;
        var c = 100;
        a.next = function() {
            if (0 < c--) return b.next();
            throw Xf;
        };
        return a
    };

    function dg(a, b) {
        this.i = b;
        this.h = null == a;
        this.g = a
    }
    u(dg, Yf);
    dg.prototype.next = function() {
        if (this.h) throw Xf;
        var a = this.g || null;
        this.h = null == a;
        var b;
        if (b = a) {
            b = this.i;
            if (vb(a, "parentElement") && null != a.parentElement && a != a.parentElement) var c = a.parentElement;
            else if (b) {
                var d = void 0 === d ? Wf : d;
                if (d(a)) try {
                    var e = J(a),
                        f = e && tc(e),
                        g = f && f.frameElement;
                    c = null == g ? null : g
                } catch (h) {
                    c = null
                } else c = null
            } else c = null;
            b = c
        }
        this.g = b;
        return a
    };

    function eg(a) {
        var b = 1;
        a = cg(new dg(a, !0));
        a = bg(a, function() {
            return 0 < b
        });
        return ag(a, function(c, d) {
            var e = 1;
            if (vb(d, "style") && d.style) {
                var f = parseFloat;
                a: {
                    var g = J(d);
                    if (g.defaultView && g.defaultView.getComputedStyle && (g = g.defaultView.getComputedStyle(d, null))) {
                        g = g.opacity || g.getPropertyValue("opacity") || "";
                        break a
                    }
                    g = ""
                }
                if (!g) {
                    g = d.style[mb()];
                    if ("undefined" !== typeof g) d = g;
                    else {
                        g = d.style;
                        var h = Mc.opacity;
                        if (!h) {
                            var n = mb();
                            h = n;
                            void 0 === d.style[n] && (n = (Db ? "Webkit" : Cb ? "Moz" : E ? "ms" : Ab ? "O" : null) + ob(n), void 0 !== d.style[n] && (h = n));
                            Mc.opacity = h
                        }
                        d = g[h] || ""
                    }
                    g = d
                }
                f = f(g);
                "number" !== typeof f || isNaN(f) || (e = f)
            }
            return b = c * e
        })
    };

    function fg(a, b, c, d, e, f, g) {
        g = void 0 === g ? [] : g;
        Kf.call(this, c, d, e);
        this.Ja = b;
        this.Ka = this.A = 0;
        this.yb = null;
        this.xb = this.ob = "";
        this.qb = [];
        this.sb = [];
        this.lb = this.wb = "";
        this.Bb = !1;
        this.D = 4;
        this.Hb = !1;
        this.ba = [];
        this.N = this.s = "";
        this.Db = this.nb = this.Ab = !1;
        this.pa = 0;
        this.fa = this.zb = De();
        this.ta = 0;
        this.da = f;
        this.Ib = !1;
        this.sa = this.Na = this.Oa = this.xa = this.F = -1;
        this.ua = g;
        gg(this, this.h.h);
        ld(R.l().g, this.Ja)
    }
    u(fg, Kf);

    function hg(a, b, c) {
        return (a = String(a[b] || nd(a, c) || "")) ? a.split("|") : []
    }

    function gg(a, b) {
        if (b) {
            if (0 == a.A)
                if (a.h.h) {
                    var c = a.h.h._adk_;
                    c || (c = (c = nd(a.h.h, "googleAvAdk")) && !/[^0-9]/.test(c) ? parseInt(c, 10) : 0)
                } else c = 0;
            else c = a.A;
            a.A = c;
            "" == a.ob && (a.ob = String(b._avi_ || ""));
            "" == a.xb && (a.xb = b._avihost_ ? String(b._avihost_) : "pagead2.googlesyndication.com");
            a.qb.length || (a.qb = hg(b, "_avicxn_", "googleAvCxn"));
            a.sb.length || (a.sb = hg(b, "_avieoscxn_", "googleEOSAvCxn"));
            "" == a.wb && (a.wb = String(b._aviextcxn_ || nd(b, "googleAvExtCxn") || ""));
            "" == a.lb && (a.lb = String(b._cid_ || ""));
            a.Bb || (a.Bb = !!b._imm_ || od(b, "googleAvImmediate"));
            "" == a.N && (a.N = String(b._cvu_ || nd(b, "googleAvCpmav") || ""));
            "" == a.s && (a.s = String(nd(b, "googleAvBtr") || ""));
            a.Ia(String(b._avm_ || nd(b, "googleAvMetadata") || ""));
            nd(b, "googleAvFlags");
            R.l()
        }
    }
    k = fg.prototype;
    k.$ = function() {
        delete this.ba;
        delete this.ua;
        Kf.prototype.$.call(this)
    };

    function ig(a, b, c) {
        y(a.ua, function(d) {
            return d.g(a, c, b)
        })
    }
    k.Ba = function() {
        return this.O && !(1 == this.ta || 3 == this.ta)
    };
    k.Wa = function() {
        Kf.prototype.Wa.call(this);
        this.Qa = new K(0, 0, 0, 0)
    };
    k.ja = function() {
        this.O || (this.Oa = Rd(), void 0 !== this.da && this.da(!1, this.ra), null != this.s && "" != this.s && (Kc(this.s), this.s = ""));
        Kf.prototype.ja.call(this);
        jg(this)
    };

    function jg(a) {
        if (a.O && w == w.top) {
            var b = w.pageYOffset;
            null != b && (a.sa = Math.max(b, a.sa));
            ig(a, 4, {})
        }
    }

    function kg(a) {
        return new qd(a.A, a.yb)
    }
    k.Ia = function(a) {
        if ("string" === typeof a && 0 != a.length) {
            var b = new fd,
                c = R.l();
            O(b, "omid", M);
            jd(b, a);
            b = hd(b, "omid");
            null !== b && (c.g.h.omid = b);
            a = jd(this.m, a);
            c = a.split("&");
            for (b = 0; b < c.length; b++) {
                var d = c[b];
                "ts=0" == d ? this.ea = !1 : 0 == d.lastIndexOf("la=", 0) ? (d = d.split("=")[1], "0" == d ? this.pa = 2 : "1" == d && (this.pa = 1)) : 0 == d.lastIndexOf("cr=", 0) ? "1" == d.split("=")[1] && (this.Cb = !0) : "adf=1" == d && (this.Ib = !0)
            }
            this.j.g = this.ca();
            Kf.prototype.Ia.call(this, a)
        }
    };
    k.Ya = function(a, b, c, d, e, f, g) {
        var h = W(this.i),
            n = Math.floor(100 * this.j.B);
        this.pa = 242500 <= Ff(Mf(this)) ? 1 : 2;
        Kf.prototype.Ya.call(this, a, b, c, d, e, f, g); - 1 == this.fa && -1 != this.j.h ? this.fa = this.j.h : 0 == this.fa && 1 == this.j.h && (this.fa = 1);
        a = W(this.i);
        b = Math.floor(100 * this.j.B);
        (!h && a || b != n) && void 0 !== this.da && this.da(a, b);
        try {
            this.M = eg(this.h.g)
        } catch (m) {}
        jg(this)
    };
    k.ca = function() {
        return Eb ? !1 : 1 == this.pa
    };

    function lg(a, b, c, d) {
        d = void 0 === d ? {} : d;
        var e = {},
            f = U.l(),
            g = id(a.m),
            h = f.u,
            n = Mf(a);
        g.p = [n.top + h.y, n.left + h.x, n.g + h.y, n.h + h.x];
        h = a.i;
        g.tos = xf(h.g);
        g.mtos = zf(h.g);
        g.mcvt = h.i.g;
        g.rs = a.wa;
        (n = 5 == a.wa) || (g.ht = a.Ea);
        0 <= a.ya && (g.tfs = a.ya, g.tls = a.Kb);
        g.mc = ze(h.h);
        g.lte = ze(a.ra);
        g.bas = a.zb;
        g.bac = a.fa;
        f.i && (g["if"] = a.u ? 0 : 1);
        g.met = a.h.i;
        n && a.Ja && (g.req = encodeURIComponent(a.Ja).substring(0, 100));
        a.Db && (g.ci = "1");
        a.ca() && (g.la = "1");
        g.avms = a.g ? a.g.I() : "ns";
        a.g && z(g, a.g.R());
        0 != a.ta && (g.md = a.ta);
        g.btr = null != a.s && "" != a.s ? 1 : 0;
        g.cpmav = mg(a) ? 1 : 0;
        g.lm = a.D;
        z(g, ng(a));
        d && z(g, d);
        g.adk = a.A;
        a.Ib && a.Ka && (g.adf = a.Ka);
        d = a.u;
        f = R.l();
        !c && d && f.h && (c = f.h);
        c && (g.r = c);
        0 === a.M && (g.invis = 1);
        c = gf(g).join("&");
        e[3] = c;
        e[11] = d;
        e[29] = R.l().i;
        e[0] = b;
        e[7] = a.j.B;
        e[9] = Ee(a.Qa);
        e[28] = a.wa;
        e[32] = a.g ? a.g.I() : "ns";
        e[5] = W(a.i) && 4 != a.D;
        e[13] = zf(a.i.g).join(",");
        e[18] = 0 == Ff(Mf(a));
        null != a.L && (e[20] = a.L.y, e[21] = a.L.x);
        b = U.l();
        null != b.h && (e[22] = Fc(b.h), e[23] = Gc(b.h));
        null != b.g && (e[30] = Fc(b.g), e[31] = Gc(b.g), e[38] = Ee(b.g));
        c = b.u;
        g = Mf(a);
        e[37] = Ee(new K(g.top + c.y, g.h + c.x, g.g + c.y, g.left + c.x));
        b.m && (b = b.m, e[39] = b.width + "-" + b.height); - 1 != a.M && (e[25] = a.M);
        if (a = kg(a)) a.h && (e[4] = a.h), a.g && (e[12] = a.g);
        return e
    }

    function ng(a) {
        var b = a.F;
        var c = a.F;
        c = -1 == c || a.xa < c ? -1 : a.xa - c;
        var d = -1 == a.F || a.Oa < a.F ? -1 : a.Oa - a.F,
            e = {};
        return e.rst = 0 < b ? b : void 0, e.dlt = 0 <= c ? c : void 0, e.rpt = 0 <= d ? d : void 0, e.isd = 0 <= a.Na ? a.Na : void 0, e.msd = 0 <= a.sa ? a.sa : void 0, e
    }

    function mg(a) {
        return null != a.N && null != a.N.match(/\/pagead\/adview\?.*ai=.*&vt=\d+/i)
    }
    k.eb = function() {
        return !1
    };

    function og(a, b, c, d) {
        We.call(this, a, b, c, d)
    }
    u(og, We);
    k = og.prototype;
    k.ib = function() {
        if (this.h) {
            var a = this.h,
                b = this.i.g.C;
            try {
                try {
                    var c = Ce(a.getBoundingClientRect())
                } catch (m) {
                    c = new K(0, 0, 0, 0)
                }
                var d = c.h - c.left,
                    e = c.g - c.top,
                    f = Oc(a, b),
                    g = f.x,
                    h = f.y;
                var n = new K(Math.round(h), Math.round(g + d), Math.round(h + e), Math.round(g))
            } catch (m) {
                n = Hc(Df)
            }
            this.g = n
        }
    };
    k.jb = function() {
        this.s = this.i.i.g
    };
    k.ub = function(a) {
        return If(a, this.s, this.h, 1 == hd(this.H, "od"))
    };
    k.Z = function() {
        this.timestamp = T();
        this.ib();
        if (this.h && "number" === typeof this.h.videoWidth && "number" === typeof this.h.videoHeight) {
            var a = this.h;
            var b = new I(a.videoWidth, a.videoHeight);
            a = this.g;
            var c = Fc(a),
                d = Gc(a),
                e = b.width;
            b = b.height;
            0 >= e || 0 >= b || 0 >= c || 0 >= d || (e /= b, a = Hc(a), e > c / d ? (c /= e, d = (d - c) / 2, 0 < d && (d = a.top + d, a.top = Math.round(d), a.g = Math.round(d + c))) : (d *= e, c = Math.round((c - d) / 2), 0 < c && (c = a.left + c, a.left = Math.round(c), a.h = Math.round(c + d))));
            this.g = a
        }
        this.jb();
        a = this.g;
        c = this.s;
        a = a.left <= c.h && c.left <= a.h && a.top <= c.g && c.top <= a.g ? new K(Math.max(a.top, c.top), Math.min(a.h, c.h), Math.min(a.g, c.g), Math.max(a.left, c.left)) : new K(0, 0, 0, 0);
        c = a.top >= a.g || a.left >= a.h ? new K(0, 0, 0, 0) : a;
        a = this.i.i;
        b = e = d = 0;
        0 < (this.g.g - this.g.top) * (this.g.h - this.g.left) && (this.ub(c) ? c = new K(0, 0, 0, 0) : (d = U.l().s, b = new K(0, d.height, d.width, 0), d = Ef(c, this.g), e = Ef(c, U.l().g), b = Ef(c, b)));
        c = c.top >= c.g || c.left >= c.h ? new K(0, 0, 0, 0) : Ic(c, -this.g.left, -this.g.top);
        Ne() || (e = d = 0);
        this.u = new re(a, this.g, c, d, e, this.timestamp, b)
    };
    k.I = function() {
        return this.i.I()
    };

    function pg(a) {
        var b = [];
        qg(new rg, a, b);
        return b.join("")
    }

    function rg() {}

    function qg(a, b, c) {
        if (null == b) c.push("null");
        else {
            if ("object" == typeof b) {
                if (Array.isArray(b)) {
                    var d = b;
                    b = d.length;
                    c.push("[");
                    for (var e = "", f = 0; f < b; f++) c.push(e), qg(a, d[f], c), e = ",";
                    c.push("]");
                    return
                }
                if (b instanceof String || b instanceof Number || b instanceof Boolean) b = b.valueOf();
                else {
                    c.push("{");
                    e = "";
                    for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (f = b[d], "function" != typeof f && (c.push(e), sg(d, c), c.push(":"), qg(a, f, c), e = ","));
                    c.push("}");
                    return
                }
            }
            switch (typeof b) {
                case "string":
                    sg(b, c);
                    break;
                case "number":
                    c.push(isFinite(b) && !isNaN(b) ? String(b) : "null");
                    break;
                case "boolean":
                    c.push(String(b));
                    break;
                case "function":
                    c.push("null");
                    break;
                default:
                    throw Error("Unknown type: " + typeof b);
            }
        }
    }
    var tg = {
            '"': '\\"',
            "\\": "\\\\",
            "/": "\\/",
            "\b": "\\b",
            "\f": "\\f",
            "\n": "\\n",
            "\r": "\\r",
            "\t": "\\t",
            "\x0B": "\\u000b"
        },
        ug = /\uffff/.test("\uffff") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;

    function sg(a, b) {
        b.push('"', a.replace(ug, function(c) {
            var d = tg[c];
            d || (d = "\\u" + (c.charCodeAt(0) | 65536).toString(16).substr(1), tg[c] = d);
            return d
        }), '"')
    };

    function vg() {
        this.key = "goog_adspeed";
        this.i = [3, 4];
        this.h = null
    }
    vg.prototype.g = function(a, b, c) {
        if (!Fa(this.i, c) || !kg(a).i()) return !1;
        c = {};
        c = (c[0] = this.key, c[40] = pg(ng(a)), c);
        var d;
        if (d = this.h) a: {
            d = this.h;
            for (var e in d)
                if (!(e in c) || d[e] !== c[e]) {
                    d = !1;
                    break a
                }
            for (var f in c)
                if (!(f in d)) {
                    d = !1;
                    break a
                }
            d = !0
        }
        if (d) return !1;
        this.h = c;
        e = {};
        z(e, c, b);
        return wg(a, {
            Za: {},
            Va: e
        })
    };

    function xg() {
        this.key = "goog_update_data";
        this.h = 0;
        this.i = !1
    }
    xg.prototype.g = function(a, b, c) {
        if (c != this.h || !kg(a).i()) return !1;
        c = 1 == a.D;
        var d = W(a.i),
            e = {},
            f = {};
        b = {
            Va: (e[0] = this.key, e[40] = pg(ng(a)), e),
            Za: Object.assign({}, b, (f.r = b.r, f))
        };
        if (c) return d && !this.i ? (this.i = d, wg(a, b)) : !1;
        this.i = d;
        return wg(a, b)
    };

    function yg(a) {
        xg.call(this, a);
        this.key = "goog_image_request";
        this.h = 2
    }
    u(yg, xg);

    function zg(a) {
        xg.call(this, a);
        this.key = "goog_image_request";
        this.h = 1
    }
    u(zg, xg);
    zg.prototype.g = function(a, b, c) {
        var d = !a.nb;
        if (W(a.i) && a.ea || d) {
            if (b = xg.prototype.g.call(this, a, b, c))
                if (W(a.i) || (a.nb = !0), W(a.i) || a.ea) a.ea = !1;
            return b
        }
        return !1
    };

    function Ag() {
        this.h = [];
        this.g = []
    }

    function Bg(a) {
        return Da(X.g, function(b) {
            return a.matches(kg(b))
        })
    }

    function Cg(a) {
        var b = X;
        return a ? Da(b.g, function(c) {
            return c.h.h == a
        }) : null
    }

    function Dg(a) {
        return Da(a.g, function() {
            return !1
        })
    }

    function Eg() {
        var a = X;
        return 0 == a.h.length ? a.g : 0 == a.g.length ? a.h : Ga(a.g, a.h)
    }

    function Fg() {
        var a = X;
        a.h = [];
        a.g = []
    }

    function Gg(a, b) {
        a = a.g;
        var c = Ea(a, function(d) {
            return d == b
        });
        return -1 != c ? (a.splice(c, 1), b.g && b.g.P(), b.G(), !0) : !1
    }

    function Hg(a) {
        var b = X;
        if (Gg(b, a)) {
            a = function() {
                return null
            };
            a = function() {
                return Dg(b)
            };
            for (var c = a(); c; c = a()) Gg(b, c)
        }
    }
    x(Ag);
    var X = Ag.l();

    function Ig() {
        this.g = this.h = null
    }

    function Jg(a, b) {
        function c(d, e) {
            b(d, e)
        }
        if (null == a.h) return !1;
        a.g = Da(a.h, function(d) {
            return null != d && d.cb()
        });
        a.g && (a.g.tb(c) ? Te(a.g.g) : b(a.g.g.aa(), a.g));
        return null != a.g
    }
    x(Ig);

    function Kg(a) {
        a = Lg(a);
        Xe.call(this, a.length ? a[a.length - 1] : new V(G, 0));
        this.i = a;
        this.h = null
    }
    u(Kg, Xe);
    k = Kg.prototype;
    k.I = function() {
        return (this.h ? this.h : this.g).I()
    };
    k.R = function() {
        return (this.h ? this.h : this.g).R()
    };
    k.S = function() {
        return (this.h ? this.h : this.g).S()
    };
    k.tb = function(a) {
        var b = !1;
        y(this.i, function(c) {
            c.Fa() && (b = !0)
        });
        b && (this.j = a, Se(this.g, this));
        return b
    };
    k.G = function() {
        y(this.i, function(a) {
            a.G()
        });
        Xe.prototype.G.call(this)
    };
    k.cb = function() {
        return Ba(this.i, function(a) {
            return a.Y()
        })
    };
    k.oa = function() {
        return Ba(this.i, function(a) {
            return a.Y()
        })
    };
    k.Pa = function(a, b, c) {
        return new og(a, this.g, b, c)
    };
    k.W = function(a) {
        this.h = a.h
    };

    function Lg(a) {
        if (!a.length) return [];
        a = ya(a, function(c) {
            return null != c && c.Y()
        });
        for (var b = 1; b < a.length; b++) Se(a[b - 1], a[b]);
        return a
    };
    var Mg = {
        threshold: [0, .3, .5, .75, 1]
    };

    function Ng(a, b, c, d) {
        We.call(this, a, b, c, d);
        this.D = this.A = this.m = this.o = this.j = null
    }
    u(Ng, og);
    k = Ng.prototype;
    k.na = function() {
        var a = this;
        this.D || (this.D = T());
        if (he(298, function() {
                return Og(a)
            })) return !0;
        Qe(this.i, "msf");
        return !1
    };
    k.P = function() {
        if (this.j && this.h) try {
            this.j.unobserve(this.h), this.o ? (this.o.unobserve(this.h), this.o = null) : this.m && (this.m.disconnect(), this.m = null)
        } catch (a) {}
    };

    function Pg(a) {
        return a.j && a.j.takeRecords ? a.j.takeRecords() : []
    }

    function Og(a) {
        if (!a.h) return !1;
        var b = a.h,
            c = a.i.g.C,
            d = R.l().j.g;
        a.j = new c.IntersectionObserver(Ld(d, function(e) {
            return Qg(a, e)
        }), Mg);
        d = Ld(d, function() {
            a.j.unobserve(b);
            a.j.observe(b);
            Qg(a, Pg(a))
        });
        c.ResizeObserver ? (a.o = new c.ResizeObserver(d), a.o.observe(b)) : c.MutationObserver && (a.m = new w.MutationObserver(d), a.m.observe(b, {
            attributes: !0,
            childList: !0,
            characterData: !0,
            subtree: !0
        }));
        a.j.observe(b);
        Qg(a, Pg(a));
        return !0
    }

    function Qg(a, b) {
        try {
            if (b.length) {
                a.A || (a.A = T());
                var c = Rg(b),
                    d = Oc(a.h, a.i.g.C),
                    e = d.x,
                    f = d.y;
                a.g = new K(Math.round(f), Math.round(e) + c.boundingClientRect.width, Math.round(f) + c.boundingClientRect.height, Math.round(e));
                var g = Ce(c.intersectionRect);
                a.s = Ic(g, a.g.left - g.left, a.g.top - g.top)
            }
        } catch (h) {
            a.P(), ke(299, h)
        }
    }

    function Rg(a) {
        return Aa(a, function(b, c) {
            return b.time > c.time ? b : c
        }, a[0])
    }
    k.Z = function() {
        var a = Pg(this);
        0 < a.length && Qg(this, a);
        og.prototype.Z.call(this)
    };
    k.ib = function() {};
    k.ub = function() {
        return !1
    };
    k.jb = function() {};
    k.R = function() {
        var a = {};
        return Object.assign(this.i.R(), (a.niot_obs = this.D, a.niot_cbk = this.A, a))
    };
    k.I = function() {
        return "nio"
    };

    function Sg(a) {
        a = void 0 === a ? G : a;
        Xe.call(this, new V(a, 2))
    }
    u(Sg, Xe);
    Sg.prototype.I = function() {
        return "nio"
    };
    Sg.prototype.oa = function() {
        return !U.l().j && null != this.g.g.C.IntersectionObserver
    };
    Sg.prototype.Pa = function(a, b, c) {
        return new Ng(a, this.g, b, c)
    };

    function Tg() {
        var a = Ug();
        V.call(this, G.top, a, "geo")
    }
    u(Tg, V);
    Tg.prototype.Ra = function() {
        return U.l().g
    };
    Tg.prototype.Y = function() {
        var a = Ug();
        this.o !== a && (this.g != this && a > this.g.o && (this.g = this, Re(this)), this.o = a);
        return 2 == a
    };

    function Ug() {
        R.l();
        var a = U.l();
        return a.i || a.j ? 0 : 2
    }
    x(Tg);
    var Vg = {},
        Wg = (Vg[1] = function() {
            return new Sg
        }, Vg[2] = function() {
            return new Kg([Tg.l()])
        }, Vg);

    function Xg() {
        this.g = null;
        this.h = Wg
    }

    function Yg() {
        var a = Xg.l();
        a: {
            var b = hd(R.l().g, "mv");
            if (null != b && (b = a.h[b]) && (b = b()) && b.oa()) break a;b = null
        }
        a.g = b
    }
    x(Xg);

    function Zg() {
        this.done = !1;
        this.g = {
            hb: 0,
            gb: 0,
            tc: 0,
            kb: 0,
            Aa: -1,
            Qb: 0,
            Pb: 0,
            Rb: 0
        };
        this.s = null;
        this.m = this.u = !1;
        this.o = "";
        this.i = null;
        this.A = 0;
        this.h = new Oe(this)
    }

    function $g(a) {
        var b = Y;
        if (!b.u) {
            b.u = !0;
            if (a) {
                a = Eg();
                for (var c, d = 0; d < a.length; ++d) c = a[d], c.h.g && Qf(c)
            }
            ah(b, function(e) {
                for (var f = [], g = 0; g < arguments.length; ++g) f[g] = arguments[g];
                return b.j.apply(b, t(f))
            });
            b.j()
        }
    }
    Zg.prototype.Fb = function() {
        bh(this, Eg(), !1)
    };

    function ch() {
        var a = Xg.l();
        null != a.g && a.g.g && Te(a.g.g);
        a = Ig.l();
        null != a.g && a.g.g ? Te(a.g.g) : Ke(U.l())
    }

    function bh(a, b, c) {
        if (!a.done)
            if (a.h.cancel(), 0 == b.length) a.m = !1;
            else {
                a.i = null;
                try {
                    ch();
                    var d = T(),
                        e = R.l();
                    e.s = d;
                    if (null != Ig.l().g)
                        for (e = 0; e < b.length; e++) Of(b[e], d, c);
                    else je(a.o, {
                        strategy_not_selected: 1,
                        bin: e.i
                    });
                    for (d = 0; d < b.length; d++) Pf(b[d]);
                    ++a.g.kb;
                    dh(a)
                } finally {
                    c ? y(b, function(f) {
                        return f.Wa()
                    }) : Pe(a.h)
                }
            }
    }

    function ah(a, b) {
        if (!a.s) {
            b = de(142, b);
            Q();
            var c;
            F.visibilityState ? c = "visibilitychange" : F.mozVisibilityState ? c = "mozvisibilitychange" : F.webkitVisibilityState && (c = "webkitvisibilitychange");
            c && ic(F, c, b, {
                capture: !1
            }) && (a.s = b)
        }
    }
    Zg.prototype.j = function() {
        var a = Ne(),
            b = T();
        a ? (oe || (me = b, y(X.h, function(c) {
            return c.i.o(b, !c.s())
        })), oe = !0) : (this.A = eh(this, b), oe = !1, y(X.h, function(c) {
            c.Ba() && c.i.m(b)
        }));
        this.m = !0;
        bh(this, Eg(), !a)
    };

    function fh(a) {
        return !!(Date && a && a.screen && a.document && a.document.body && a.document.body.getBoundingClientRect)
    }

    function gh(a, b, c) {
        if (!a.i || c) {
            c = b.document;
            var d = 0 <= ne ? T() - ne : -1,
                e = T(); - 1 == a.g.Aa && (d = e);
            var f = U.l(),
                g = R.l(),
                h = id(g.g),
                n = Eg();
            try {
                if (0 < n.length) {
                    var m = f.g;
                    m && (h.bs = [Fc(m), Gc(m)]);
                    var l = f.m;
                    l && (h.ps = [l.width, l.height]);
                    b.screen && (h.scs = [b.screen.width, b.screen.height])
                } else h.url = encodeURIComponent(b.location.href.substring(0, 512)), c.referrer && (h.referrer = encodeURIComponent(c.referrer.substring(0, 512)));
                h.tt = d;
                h.pt = ne;
                h.bin = g.i;
                void 0 !== b.google_osd_load_pub_page_exp && (h.olpp = b.google_osd_load_pub_page_exp);
                h.deb = [1, a.g.hb, a.g.gb, a.g.kb, a.g.Aa, ye, a.h.h, a.g.Qb, a.g.Pb, a.g.Rb].join("-");
                h.tvt = eh(a, e);
                f.j && (h.inapp = 1);
                if (null !== b && b != b.top) {
                    0 < n.length && (h.iframe_loc = encodeURIComponent(b.location.href.substring(0, 512)));
                    var q = f.h;
                    h.is = [Fc(q), Gc(q)]
                }
            } catch (D) {
                h.error = 1
            }
            a.i = h
        }
        b = a.i;
        a = {};
        for (var p in b) a[p] = b[p];
        p = R.l().j;
        var v;
        if (1 == hd(p.i, "prf")) {
            b = new Jd;
            m = p.g;
            l = 0; - 1 < m.g && (l = m.i.g.g() - m.g);
            b = $b(b, 1, m.j + l);
            m = p.g;
            b = $b(b, 5, -1 < m.g ? m.h + 1 : m.h);
            b = $b(b, 2, p.h.g.j());
            b = $b(b, 3, p.h.g.i());
            m = $b(b, 4, p.h.g.h());
            p = {};
            b = new Rb;
            var r = void 0 === r ? 0 : r;
            l = Yb(m, 1);
            l = null == l ? l : +l;
            r = null == l ? r : l;
            if (0 !== r && (l = r, null != l)) {
                sb(b.g, 9);
                r = b.g;
                c = l;
                c = (l = 0 > c ? 1 : 0) ? -c : c;
                if (0 === c) qb = 0 < 1 / c ? 0 : 2147483648, pb = 0;
                else if (isNaN(c)) qb = 2147483647, pb = 4294967295;
                else if (1.7976931348623157E308 < c) qb = (l << 31 | 2146435072) >>> 0, pb = 0;
                else if (2.2250738585072014E-308 > c) c /= Math.pow(2, -1074), qb = (l << 31 | c / 4294967296) >>> 0, pb = c >>> 0;
                else {
                    d = c;
                    q = 0;
                    if (2 <= d)
                        for (; 2 <= d && 1023 > q;) q++, d /= 2;
                    else
                        for (; 1 > d && -1022 < q;) d *= 2, q--;
                    c *= Math.pow(2, -q);
                    qb = (l << 31 | q + 1023 << 20 | 1048576 * c & 1048575) >>> 0;
                    pb = 4503599627370496 * c >>> 0
                }
                tb(r, pb);
                tb(r, qb)
            }
            r = Zb(m, 2);
            0 !== r && null != r && Sb(b, 2, r);
            r = Zb(m, 3);
            0 !== r && null != r && Sb(b, 3, r);
            r = Zb(m, 4);
            0 !== r && null != r && Sb(b, 4, r);
            r = Zb(m, 5);
            if (0 !== r && null != r && (m = r, null != m))
                if (sb(b.g, 40), r = b.g, 0 <= m) sb(r, m);
                else {
                    for (l = 0; 9 > l; l++) r.g.push(m & 127 | 128), m >>= 7;
                    r.g.push(1)
                }
            r = new Uint8Array(b.g.length());
            l = b.h;
            q = l.length;
            for (c = m = 0; c < q; c++) d = l[c], r.set(d, m), m += d.length;
            l = b.g.end();
            r.set(l, m);
            b.h = [r];
            void 0 === v && (v = 0);
            if (!Qb)
                for (Qb = {}, b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), m = ["+/=", "+/", "-_=", "-_.", "-_"], l = 0; 5 > l; l++)
                    for (q = b.concat(m[l].split("")), Pb[l] = q, c = 0; c < q.length; c++) d = q[c], void 0 === Qb[d] && (Qb[d] = c);
            v = Pb[v];
            b = [];
            for (m = 0; m < r.length; m += 3) e = r[m], f = (l = m + 1 < r.length) ? r[m + 1] : 0, d = (q = m + 2 < r.length) ? r[m + 2] : 0, c = e >> 2, e = (e & 3) << 4 | f >> 4, f = (f & 15) << 2 | d >> 6, d &= 63, q || (d = 64, l || (f = 64)), b.push(v[c], v[e], v[f] || "", v[d] || "");
            v = (p.pf = b.join(""), p)
        } else v = {};
        z(a, v);
        return a
    }

    function hh() {
        y(Eg(), function(a) {
            if (a.h.h) {
                var b = a.A || 0,
                    c = Xg.l();
                if (b = c.g ? new rf(c.g, a.h.g, a.m, b) : null) a.H = b
            }
        })
    }

    function ih() {
        var a = Ig.l();
        if (null != a.g) {
            var b = a.g;
            y(Eg(), function(c) {
                return Nf(c, b)
            })
        }
    }

    function dh(a) {
        var b = R.l(),
            c = 1 === hd(b.g, "llp");
        "osd" == a.o && y(X.g, function(d) {
            if (c) {
                if (1 == b.i || W(d.i) || d.u) {
                    var e = {};
                    ig(d, 0, (e.r = void 0, e))
                }
            } else e = {}, ig(d, 0, (e.r = void 0, e))
        })
    }

    function eh(a, b) {
        a = a.A;
        oe && (a += b - me);
        return a
    }

    function jh(a) {
        return (a = a.match(/[&\?;](?:dc_)?adk=([0-9]+)/)) && 2 == a.length ? parseInt(a[1], 10) : 0
    }

    function kh(a) {
        return (a = a.match(/[&\?;]adf=([0-9]+)/)) && 2 == a.length ? parseInt(a[1], 10) : 0
    }

    function lh() {
        var a = Y;
        var b = void 0 === b ? function() {
            return {}
        } : b;
        ee.mb = "av-js";
        $d.g = .01;
        ge([function(c) {
            var d = R.l(),
                e = {};
            z(c, (e.bin = d.i, e.type = "error", e), id(d.g), gh(a, G), b());
            if (d = hf()) e = {}, z(c, (e.v = encodeURIComponent(d), e))
        }])
    }

    function mh(a) {
        var b = new nh;
        switch (a) {
            case 0:
            case 5:
                return [];
            default:
                return [new xg(b), new zg(b), new yg(b), new vg]
        }
    }
    x(Zg);
    var Y = Zg.l();

    function nh() {}

    function wg(a, b) {
        var c = b || {};
        b = void 0 === c.Za ? {} : c.Za;
        c = void 0 === c.Va ? {} : c.Va;
        var d = c.r,
            e = b[0],
            f = gh(Y, L(), !1),
            g = {};
        z(g, f, b);
        b = {};
        z(b, lg(a, e, d, g), c);
        Ge(a.h.h, b, a.ba);
        return !0
    };

    function oh() {
        V.call(this, G, 2, "iem")
    }
    u(oh, V);
    k = oh.prototype;
    k.Ra = function() {
        function a(p, v) {
            return !!b.C.document.elementFromPoint(p, v)
        }
        var b = this,
            c = new K(0, this.C.innerWidth || this.C.width, this.C.innerHeight || this.C.height, 0),
            d = sc(document),
            e = Math.floor(c.left - d.x),
            f = Math.floor(c.top - d.y),
            g = Math.floor(c.h - d.x),
            h = Math.floor(c.g - d.y);
        c = a(e, f);
        d = a(g, h);
        if (c && d) return new K(f, g, h, e);
        var n = a(g, f),
            m = a(e, h);
        if (c) h = Z(f, h, function(p) {
            return a(e, p)
        }), g = Z(e, g, function(p) {
            return a(p, f)
        });
        else if (n) h = Z(f, h, function(p) {
            return a(g, p)
        }), e = Z(g, e, function(p) {
            return a(p, f)
        });
        else if (m) f = Z(h, f, function(p) {
            return a(e, p)
        }), g = Z(e, g, function(p) {
            return a(p, h)
        });
        else if (d) f = Z(h, f, function(p) {
            return a(g, p)
        }), e = Z(g, e, function(p) {
            return a(p, h)
        });
        else {
            var l = Math.floor((e + g) / 2),
                q = Math.floor((f + h) / 2);
            if (!a(l, q)) return new K(0, 0, 0, 0);
            f = Z(q, f, function(p) {
                return a(l, p)
            });
            h = Z(q, h, function(p) {
                return a(l, p)
            });
            e = Z(l, e, function(p) {
                return a(p, q)
            });
            g = Z(l, g, function(p) {
                return a(p, q)
            })
        }
        return new K(f, g, h, e)
    };

    function Z(a, b, c) {
        if (c(b)) return b;
        for (var d = 15; d--;) {
            var e = Math.floor((a + b) / 2);
            if (e == a || e == b) break;
            c(e) ? a = e : b = e
        }
        return a
    }
    k.Y = function() {
        return U.l().i && E && Lb(8) && ue(this.C)
    };
    k.Ga = function() {};
    k.Ha = function() {};
    k.ab = function() {};
    k.bb = function() {};
    x(oh);

    function ph() {
        V.call(this, G, 2, "mraid");
        this.N = 0;
        this.F = this.H = !1;
        this.m = null;
        this.h = te(this.C);
        this.i.g = new K(0, 0, 0, 0);
        this.O = !1
    }
    u(ph, V);
    k = ph.prototype;
    k.Y = function() {
        return null != this.h.J
    };
    k.pb = function() {
        var a = {};
        this.N && (a.mraid = this.N);
        this.H && (a.mlc = 1);
        a.mtop = this.h.Wb;
        this.m && (a.mse = this.m);
        this.O && (a.msc = 1);
        a.mcp = this.h.za;
        return a
    };
    k.T = function(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
        try {
            return this.h.J[a].apply(this.h.J, c)
        } catch (e) {
            ke(538, e, .01, function(f) {
                f.method = a
            })
        }
    };

    function qh(a, b, c) {
        a.T("addEventListener", b, c)
    }
    k.Fa = function() {
        var a = this;
        if (this.A) return !this.ha();
        this.A = !0;
        if (2 === this.h.za) return this.m = "ng", Qe(this, "w"), !1;
        if (1 === this.h.za) return this.m = "mm", Qe(this, "w"), !1;
        U.l().D = !0;
        this.C.document.readyState && "complete" == this.C.document.readyState ? rh(this) : we(this.C, "load", function() {
            Gd(Q(), ie(292, function() {
                return rh(a)
            }), 100)
        }, 292);
        return !0
    };

    function rh(a) {
        R.l().m = !!a.T("isViewable");
        qh(a, "viewableChange", sh);
        "loading" === a.T("getState") ? qh(a, "ready", th) : uh(a)
    }

    function uh(a) {
        "string" === typeof a.h.J.AFMA_LIDAR ? (a.H = !0, vh(a)) : (a.h.za = 3, a.m = "nc", Qe(a, "w"))
    }

    function vh(a) {
        a.F = !1;
        var b = 1 == hd(R.l().g, "rmmt"),
            c = !!a.T("isViewable");
        (b ? !c : 1) && Gd(Q(), ie(524, function() {
            a.F || (wh(a), ke(540, Error()), a.m = "mt", Qe(a, "w"))
        }), 500);
        xh(a);
        qh(a, a.h.J.AFMA_LIDAR, yh)
    }

    function xh(a) {
        var b = 1 == hd(R.l().g, "sneio"),
            c = void 0 !== a.h.J.AFMA_LIDAR_EXP_1,
            d = void 0 !== a.h.J.AFMA_LIDAR_EXP_2;
        (b = b && d) && (a.h.J.AFMA_LIDAR_EXP_2 = !0);
        c && (a.h.J.AFMA_LIDAR_EXP_1 = !b)
    }

    function wh(a) {
        a.T("removeEventListener", a.h.J.AFMA_LIDAR, yh);
        a.H = !1
    }
    k.Ga = function() {
        var a = U.l(),
            b = zh(this, "getMaxSize");
        a.g = new K(0, b.width, b.height, 0)
    };
    k.Ha = function() {
        U.l().s = zh(this, "getScreenSize")
    };

    function zh(a, b) {
        if ("loading" === a.T("getState")) return new I(-1, -1);
        b = a.T(b);
        if (!b) return new I(-1, -1);
        a = parseInt(b.width, 10);
        b = parseInt(b.height, 10);
        return isNaN(a) || isNaN(b) ? new I(-1, -1) : new I(a, b)
    }
    k.G = function() {
        wh(this);
        V.prototype.G.call(this)
    };

    function th() {
        try {
            var a = ph.l();
            a.T("removeEventListener", "ready", th);
            uh(a)
        } catch (b) {
            ke(541, b)
        }
    }

    function yh(a, b) {
        try {
            var c = ph.l();
            c.F = !0;
            var d = a ? new K(a.y, a.x + a.width, a.y + a.height, a.x) : new K(0, 0, 0, 0);
            var e = T(),
                f = Ne();
            var g = new qe(e, f, c);
            g.g = d;
            g.volume = b;
            c.W(g)
        } catch (h) {
            ke(542, h)
        }
    }

    function sh(a) {
        var b = R.l(),
            c = ph.l();
        a && !b.m && (b.m = !0, c.O = !0, c.m && Qe(c, "w", !0))
    }
    x(ph);

    function Ah(a) {
        return (a = /[&\?#]exk=([^& ]+)/.exec(a)) && 2 == a.length ? a[1] : null
    };

    function Bh(a) {
        this.g = a;
        this.defaultValue = !1
    };
    var Ch = new Bh(160),
        Dh = new Bh(900),
        Eh = new Bh(382);
    var Fh = ["FRAME", "IMG", "IFRAME"],
        Gh = /^[01](px)?$/;

    function Hh(a, b, c) {
        var d = !0,
            e = !1;
        d = void 0 === d ? !0 : d;
        e = void 0 === e ? !1 : e;
        var f = void 0 === f ? !1 : f;
        if (a = "string" === typeof a ? document.getElementById(a) : a) {
            c || (c = function(ba, wb, xb) {
                ba.addEventListener(wb, xb)
            });
            for (var g = !1, h = function(ba) {
                    g || (g = !0, b(ba))
                }, n, m, l = 0; l < Fh.length; ++l)
                if (Fh[l] == a.tagName) {
                    m = 3;
                    n = [a];
                    break
                }
            n || (n = a.querySelectorAll(Fh.join(",")), m = 2);
            var q = 0,
                p = 0,
                v = a = !1;
            l = {};
            for (var r = 0; r < n.length; l = {
                    ma: l.ma
                }, r++) {
                var D = n[r];
                if (!("IMG" != D.tagName || !D.complete || D.naturalWidth && D.naturalHeight ? Gh.test(D.getAttribute("width")) && Gh.test(D.getAttribute("height")) : 1)) {
                    if ("IMG" == D.tagName) var ra = D.naturalWidth && D.naturalHeight ? !0 : !1;
                    else try {
                        ra = "complete" === (D.readyState ? D.readyState : D.contentWindow && D.contentWindow.document && D.contentWindow.document.readyState) ? !0 : !1
                    } catch (ba) {
                        ra = void 0 === e ? !1 : e
                    }
                    if (ra) a = !0;
                    else {
                        q++;
                        l.ma = "IMG" === D.tagName;
                        var Xa = function(ba) {
                            return function() {
                                q--;
                                q || h(m);
                                ba.ma && (p--, !p && v && h(m))
                            }
                        }(l);
                        c(D, "load", Xa);
                        l.ma && (p++, c(D, "error", Xa))
                    }
                }
            }
            n = null;
            if (0 === q && !a && "complete" === w.document.readyState) m = 5;
            else if (q || !a) {
                c(w, "load", function() {
                    f && p ? v = !0 : h(4)
                });
                return
            }
            d && h(m)
        }
    };

    function Ih(a) {
        this.methodName = a
    }
    var Jh = new Ih(15),
        Kh = new Ih(5),
        Lh = new Ih(6),
        Mh = new Ih(7),
        Nh = new Ih(8);

    function Oh(a, b, c) {
        return b[a.methodName] || c || function() {}
    };

    function Ph() {}
    x(Ph);

    function Qh() {
        var a = {};
        this.h = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.i = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.j = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.m = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.g = function() {}
    }
    x(Qh);

    function Rh(a) {
        return Qh.l().h(a.g, a.defaultValue)
    };

    function Sh() {}
    x(Sh);

    function Th(a, b) {
        b = void 0 === b ? 0 : b;
        var c = Qh.l();
        c.h = function(d, e) {
            return Oh(Kh, a, function() {
                return !1
            })(d, e, b)
        };
        c.i = function(d, e) {
            return Oh(Lh, a, function() {
                return 0
            })(d, e, b)
        };
        c.j = function(d, e) {
            return Oh(Mh, a, function() {
                return ""
            })(d, e, b)
        };
        c.m = function(d, e) {
            return Oh(Nh, a, function() {
                return []
            })(d, e, b)
        };
        c.g = function() {
            Oh(Jh, a)(b)
        }
    };

    function Uh() {
        this.h = null;
        this.j = this.o = this.i = this.m = !1;
        Vh(this);
        lh()
    }

    function Wh() {
        var a = void 0,
            b = 4;
        if (void 0 === a) {
            var c = void 0 === c ? w : c;
            a = c.ggeac || (c.ggeac = {})
        }
        b = void 0 === b ? 0 : b;
        Ph.l();
        Th(a, b);
        Sh.l();
        Qh.l().g();
        b = R.l();
        Rh(Ch) && gd(b.g, "gtx", 1)
    }
    k = Uh.prototype;
    k.Ub = function(a) {
        this.m = a
    };
    k.rb = function() {
        Xh(this);
        Q();
        G.clearTimeout(this.h);
        this.h = null;
        ne = T();
        Yh(this)
    };

    function Xh(a) {
        R.l().i = 1;
        if (!(0 < ne)) {
            try {
                if (!Zh(a)) return;
                ch();
                $h(a)
            } catch (b) {}
            a.h = Gd(Q(), ie(129, function() {
                return Xh(a)
            }), 250)
        }
    }
    k.Vb = function(a, b, c, d, e, f, g, h, n) {
        var m = this;
        f = void 0 === f ? !1 : f;
        h = void 0 === h ? -1 : h;
        n = void 0 === n ? -1 : n;
        if (fh(G)) {
            var l = new fg(G, b, a, -1, c, g);
            l.ua = mh(l.D);
            e = R.l();
            0 < h && -1 == l.F && (l.F = h);
            0 <= n && (l.Na = n);
            l.La = function(q) {
                for (var p = [], v = 0; v < arguments.length; ++v) p[v] = arguments[v];
                return m.Sb.apply(m, t(p))
            };
            l.Mb = function(q) {
                for (var p = [], v = 0; v < arguments.length; ++v) p[v] = arguments[v];
                return m.Sa.apply(m, t(p))
            };
            13 != c && (l.A = jh(b), l.yb = Ah(b), l.Ka = kh(b));
            f && (l.Db = !0);
            gd(e.g, "oseid", Vf(this.g));
            X.g.push(l);
            ++Y.g.gb;
            e.h ? this.Sa(l, e.h) : ((b = Ig.l().g) && Nf(l, b), Yh(this), e.h || (d ? (ai(l), l.ja()) : a && Hh(a, function() {
                l.ia() || (ai(l), l.ja())
            }, function(q, p, v) {
                we(q, p, v, 130)
            }), Y.m || Y.j()))
        }
    };

    function $h(a) {
        bi(a);
        Tf(a.g, function(b) {
            for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
            return a.Vb.apply(a, t(c))
        }, function() {
            return a.m
        }, function(b) {
            for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
            return a.Ub.apply(a, t(c))
        })
    }

    function ci(a) {
        R.l();
        var b = Rh(Eh),
            c = [oh.l()];
        b || c.push(ph.l());
        b = [Tg.l()];
        return [new Kg(c), new Sg(a), new Kg(b)]
    }

    function Yh(a) {
        if (!a.j) {
            a.j = !0;
            try {
                var b = L(),
                    c = U.l();
                R.l().o = 947190542;
                if (Zh(a)) {
                    Y.g.hb = Uf(a.g);
                    var d = Ig.l();
                    if (null == d.h) {
                        var e = ci(b);
                        d.h = e
                    }
                    if (Jg(d, function(g) {
                            return di(a, g)
                        })) {
                        if (!Y.done) {
                            ih();
                            c.A = !0;
                            $h(a);
                            var f;
                            (f = U.l().j || A(B, "CrKey") || A(B, "PlayStation") || A(B, "Roku") || He() || A(B, "Xbox") || Ie() || Je()) || (Q(), f = 0 !== td());
                            f ? (Yg(), hh(), ei(a), Qc()) : di(a, "pv")
                        }
                    } else di(a, "i")
                } else fi(a, "c")
            } catch (g) {
                throw di(a, "x"), Fg(), g;
            }
        }
    }

    function ei(a) {
        if (-1 == Y.g.Aa) {
            L();
            var b = 2 == Vf(a.g);
            $g(b);
            Gd(Q(), ie(131, function() {
                fi(a, "t")
            }), 36E5);
            Y.g.Aa = T() - ne
        }
    }

    function di(a, b) {
        R.l().h = b;
        for (var c = ha(X.g), d = c.next(); !d.done; d = c.next()) d.value.u = !0;
        fi(a, b, !1)
    }

    function fi(a, b, c) {
        c = void 0 === c ? !0 : c;
        if (!Y.done) {
            Y.h.cancel();
            a.g || (a.g = new Rf);
            if (2 == Vf(a.g) || a.i)
                for (a = X.g, c && 0 < a.length && bh(Y, a, !0), c = ha(a), a = c.next(); !a.done; a = c.next()) {
                    a = a.value;
                    var d = {};
                    ig(a, 1, (d.r = b, d));
                    a.g && a.g.P()
                }
            Y.done = !0
        }
    }

    function Zh(a) {
        if (!fh(L())) return !1;
        var b = new Rf;
        if (!(b.g || b.h || b.i)) return !1;
        a.g = b;
        return !0
    }
    k.Sa = function(a, b) {
        a.u = !0;
        var c = {};
        ig(a, 2, (c.r = b, c));
        a.g && a.g.P()
    };
    k.Sb = function(a) {
        a && W(a.i) && (0 >= Ff(Mf(a)) ? 0 : mg(a) && !a.Ab) && (Kc(a.N), a.Ab = !0)
    };

    function gi(a, b) {
        if (b && b.data && b.source) {
            var c = b.data;
            if ("string" !== typeof c) var d = null;
            else {
                d = {};
                c = c.split("\n");
                for (var e = 0; e != c.length; ++e) {
                    var f = c[e],
                        g = f.indexOf("=");
                    if (!(0 >= g)) {
                        var h = Number(f.substr(0, g));
                        f = f.substr(g + 1);
                        switch (h) {
                            case 36:
                            case 8:
                            case 11:
                            case 16:
                            case 5:
                            case 18:
                                f = "true" == f;
                                break;
                            case 4:
                            case 33:
                            case 6:
                            case 25:
                            case 28:
                            case 29:
                            case 24:
                            case 31:
                            case 30:
                            case 23:
                            case 22:
                            case 7:
                            case 21:
                            case 20:
                                f = Number(f);
                                break;
                            case 3:
                                if ("function" === typeof decodeURIComponent) try {
                                    f = decodeURIComponent(f)
                                } catch (n) {
                                    throw Error("Error: URI malformed: " + f);
                                }
                        }
                        d[h] = f
                    }
                }
                d = d[0] ? d : null
            }
            if (c = d)
                if (e = c[0], Fa("goog_creative_loaded goog_dom_content_loaded goog_listener_status goog_maybe_stop_monitoring goog_provide_mode goog_request_monitoring goog_stop_monitoring".split(" "), e) && (d = Bg(new qd(c[4], c[12]))))
                    if (h = c[33], 0 < h && -1 == d.xa && (d.xa = h), "goog_stop_monitoring" === e) Hg(d);
                    else if ("goog_maybe_stop_monitoring" !== e || void 0 !== d.da) {
                if (Fa(d.ba, b.source) || d.ba.push(b.source), "goog_request_monitoring" === e || !d.Hb)
                    if (d.Hb = !0, void 0 !== c[16] && (d.ea = !!c[16]), void 0 !== c[6]) {
                        c = c[6];
                        b = hi(c, d.D);
                        if (b != d.D) {
                            if (5 == b) {
                                d.u = !0;
                                Hg(d);
                                return
                            }
                            d.D = b;
                            d.ua = mh(b)
                        }
                        b = Rh(Dh);
                        4 != c || b || d.ja();
                        c = U.l();
                        e = lg(d, "goog_acknowledge_monitoring");
                        e[8] = c.i;
                        e[36] = c.F;
                        Ge(d.h.h, e, d.ba);
                        c = R.l();
                        d.u && c.h ? (a.Sa(d, c.h), Hg(d)) : b || (a.i = !0)
                    }
            } else Hg(d)
        }
    }

    function ai(a) {
        if (a && kg(a).i()) {
            var b = lg(a, "goog_get_mode");
            Ge(a.h.h, b)
        }
    }

    function bi(a) {
        if (!a.o) {
            we(G, "message", function(c) {
                return gi(a, c)
            }, 132);
            var b = ii().contentWindow;
            b && we(b, "message", function(c) {
                return gi(a, c)
            }, 132);
            a.o = !0
        }
    }

    function ji(a) {
        we(L(), "unload", function() {
            fi(a, "u")
        }, 133)
    }

    function hi(a, b) {
        return Da([5, 2, 4, 3, 1, 0], function(c) {
            return c === a || c === b
        }) || 0
    }
    k.Nb = function(a) {
        (a = Cg(a)) && Hg(a)
    };
    k.Ob = function(a, b) {
        a && b && sa(a) && 1 == a.nodeType && sa(b) && 1 == b.nodeType && (a = Cg(a)) && (L(), Lf(a), a.h.g = b, Qf(a), gg(a, b), a.g && (a = a.g, a.P(), a.h = b, a.na(), a.Z()))
    };

    function ii() {
        var a = uc("IFRAME", {
            id: "google_osd_static_frame_" + Math.floor(1E13 * Math.random()),
            name: "google_osd_static_frame"
        });
        a.style.display = "none";
        a.style.width = "0px";
        a.style.height = "0px";
        G.document.body.appendChild(a);
        return a
    }

    function Vh(a) {
        ua("Goog_Osd_UnloadAdBlock", ie(134, function(b) {
            for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
            return a.Nb.apply(a, t(c))
        }));
        ua("Goog_Osd_UpdateElementToMeasure", ie(135, function(b) {
            for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
            return a.Ob.apply(a, t(c))
        }))
    };
    he(155, function() {
        Wh();
        var a = new Uh;
        Y.o = "osd";
        ji(a);
        Rc() ? a.rb() : (Xh(a), we(L(), "load", function() {
            Gd(Q(), ie(153, function(b) {
                for (var c = [], d = 0; d < arguments.length; ++d) c[d] = arguments[d];
                return a.rb.apply(a, t(c))
            }), 100)
        }, 154))
    });
}).call(this, this, this.document);