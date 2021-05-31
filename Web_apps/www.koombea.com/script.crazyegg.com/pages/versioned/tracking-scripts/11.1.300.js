/**
 * @license
 *
 * This file contains works from many authors under various (but compatible)
 * licenses. Please check the /versionnumber-licenses.js url for more information.
 *
 **/
"undefined" == typeof CE2 && (CE2 = {}),
    function() {
        var e = "undefined" == typeof window ? self : window;
        (e.CE2 || (e.CE2 = {})).fp = function(r) {
            var n = {};

            function i(e) {
                if (n[e]) return n[e].exports;
                var t = n[e] = {
                    i: e,
                    l: !1,
                    exports: {}
                };
                return r[e].call(t.exports, t, t.exports, i), t.l = !0, t.exports
            }
            return i.m = r, i.c = n, i.d = function(e, t, r) {
                i.o(e, t) || Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: r
                })
            }, i.r = function(e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }, i.t = function(t, e) {
                if (1 & e && (t = i(t)), 8 & e) return t;
                if (4 & e && "object" === CE2BH.typeof(t) && t && t.__esModule) return t;
                var r = Object.create(null);
                if (i.r(r), Object.defineProperty(r, "default", {
                        enumerable: !0,
                        value: t
                    }), 2 & e && "string" != typeof t)
                    for (var n in t) i.d(r, n, function(e) {
                        return t[e]
                    }.bind(null, n));
                return r
            }, i.n = function(e) {
                var t = e && e.__esModule ? function() {
                    return e.default
                } : function() {
                    return e
                };
                return i.d(t, "a", t), t
            }, i.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }, i.p = "", i(i.s = 0)
        }({
            "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js": function(e, t) {
                e.exports = function(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
                    return n
                }
            },
            "./node_modules/@babel/runtime/helpers/arrayWithHoles.js": function(e, t) {
                e.exports = function(e) {
                    if (Array.isArray(e)) return e
                }
            },
            "./node_modules/@babel/runtime/helpers/extends.js": function(e, t) {
                function r() {
                    return e.exports = r = Object.assign || function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r, n = arguments[t];
                            for (r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                        }
                        return e
                    }, r.apply(this, arguments)
                }
                e.exports = r
            },
            "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js": function(e, t) {
                e.exports = function(e, t) {
                    if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                        var r = [],
                            n = !0,
                            i = !1,
                            s = void 0;
                        try {
                            for (var o, a = e[Symbol.iterator](); !(n = (o = a.next()).done) && (r.push(o.value), !t || r.length !== t); n = !0);
                        } catch (e) {
                            i = !0, s = e
                        } finally {
                            try {
                                n || null == a.return || a.return()
                            } finally {
                                if (i) throw s
                            }
                        }
                        return r
                    }
                }
            },
            "./node_modules/@babel/runtime/helpers/nonIterableRest.js": function(e, t) {
                e.exports = function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
            },
            "./node_modules/@babel/runtime/helpers/slicedToArray.js": function(e, t, r) {
                var n = r("./node_modules/@babel/runtime/helpers/arrayWithHoles.js"),
                    i = r("./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js"),
                    s = r("./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js"),
                    o = r("./node_modules/@babel/runtime/helpers/nonIterableRest.js");
                e.exports = function(e, t) {
                    return n(e) || i(e, t) || s(e, t) || o()
                }
            },
            "./node_modules/@babel/runtime/helpers/typeof.js": function(t, e) {
                function r(e) {
                    return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? t.exports = r = function(e) {
                        return typeof e
                    } : t.exports = r = function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, r(e)
                }
                t.exports = r
            },
            "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js": function(e, t, r) {
                var n = r("./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");
                e.exports = function(e, t) {
                    if (e) {
                        if ("string" == typeof e) return n(e, t);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        return "Map" === (r = "Object" === r && e.constructor ? e.constructor.name : r) || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? n(e, t) : void 0
                    }
                }
            },
            "./src/fingerprint.js": function(e, t, r) {
                "use strict";
                r.r(t), r.d(t, "TAG_TYPES", function() {
                    return c
                }), r.d(t, "getName", function() {
                    return m
                }), r.d(t, "fingerprint", function() {
                    return E
                });
                var s = r("./src/utils/text.js"),
                    n = r("./src/utils/uri.js"),
                    i = r("./src/utils/browser.js"),
                    o = r("./src/utils/box.js"),
                    a = 7,
                    c = {
                        a: 3,
                        abbr: 4,
                        acronym: 5,
                        address: 6,
                        applet: 7,
                        area: 8,
                        b: 9,
                        base: 10,
                        basefont: 11,
                        bdo: 12,
                        big: 13,
                        blockquote: 14,
                        body: 15,
                        br: 16,
                        button: 17,
                        caption: 18,
                        center: 19,
                        cite: 20,
                        code: 21,
                        col: 22,
                        colgroup: 23,
                        dd: 24,
                        del: 25,
                        dfn: 26,
                        dir: 27,
                        div: 28,
                        dl: 29,
                        dt: 30,
                        em: 31,
                        fieldset: 32,
                        font: 33,
                        form: 34,
                        frame: 35,
                        frameset: 36,
                        head: 37,
                        h1: 38,
                        h2: 38,
                        h3: 38,
                        h4: 38,
                        h5: 38,
                        h6: 38,
                        hr: 38,
                        html: 39,
                        i: 40,
                        iframe: 41,
                        img: 42,
                        input: 43,
                        ins: 44,
                        kbd: 45,
                        label: 46,
                        legend: 47,
                        li: 48,
                        link: 49,
                        map: 50,
                        menu: 51,
                        meta: 52,
                        noframes: 53,
                        noscript: 54,
                        object: 55,
                        embed: 55,
                        ol: 56,
                        optgroup: 57,
                        option: 58,
                        p: 59,
                        param: 60,
                        pre: 61,
                        q: 62,
                        s: 63,
                        samp: 64,
                        script: 65,
                        select: 66,
                        small: 67,
                        span: 68,
                        strike: 69,
                        strong: 70,
                        style: 71,
                        sub: 72,
                        sup: 73,
                        table: 74,
                        tbody: 75,
                        td: 76,
                        textarea: 77,
                        tfoot: 78,
                        th: 79,
                        thead: 80,
                        title: 81,
                        tr: 82,
                        tt: 83,
                        u: 84,
                        ul: 85,
                        var: 86,
                        article: 87,
                        aside: 88,
                        audio: 89,
                        bdi: 90,
                        canvas: 91,
                        command: 92,
                        details: 93,
                        figcaption: 94,
                        figure: 95,
                        footer: 96,
                        header: 97,
                        hgroup: 98,
                        keygen: 99,
                        mark: 100,
                        meter: 101,
                        nav: 102,
                        output: 103,
                        progress: 104,
                        rp: 105,
                        rt: 106,
                        ruby: 107,
                        section: 108,
                        summary: 109,
                        time: 110,
                        video: 111,
                        svg: 112,
                        "(custom)": 255
                    },
                    l = /(-|^)(default|open|hover|close|error|active|focus|valid|invalid|dirty|submitted|expand|collapse|hide|show|enable|disable|on|off|yui|ui)/i,
                    u = /^\s*javascript:|^\s*#\s*$/;

                function h(e, t) {
                    if ("TEXTAREA" != e.nodeName) {
                        var r, i, t = Object(s.strip)(Object(s.strip)((i = void 0 === (r = e).textContent ? "innerText" : "textContent", e = n(e = r[i].substr(0, 16384), r.getElementsByTagName("SCRIPT")), n(e, r.getElementsByTagName("NOSCRIPT"))), !0).substr(0, t || 100));
                        return Object(s.strip)(t.replace(/[\ud800-\udbff\udc00-\udfff]+$/, ""))
                    }

                    function n(e, t) {
                        for (var r, n = 0; r = t[n++];) e = e.replace(r[i], "");
                        return e
                    }
                }

                function d(e) {
                    if (!i.browser.ie) return e.getAttribute("href");
                    e = e.outerHTML.match(s.re.href);
                    return e ? Object(s.strip)(e[1]) : void 0
                }

                function p(e) {
                    return /^\s*data:/.test(e) ? Object(s.strip)(e).substr(0, 100) : new n.URI(e).simplify()
                }

                function f(e) {
                    return e.getAttribute("ceid") || e.getAttribute("data-ceid")
                }

                function g(e) {
                    e = function(e) {
                        if ((e = e.className) && "string" == typeof e) return (e = Object(s.strip)(e.replace(/(\s|^)-ce-capture\b/g, "")).split(/\s+/)).sort(), e.join(" ")
                    }(e);
                    if (!e || a <= 6) return e;
                    for (var t = [], r = 0, n = e.split(/\s+/); r < n.length; r++) {
                        var i = n[r];
                        i && !l.test(i) && t.push(i)
                    }
                    return t.join(" ")
                }

                function m(e) {
                    var t, r;
                    return (t = e.getAttribute("cename")) || (t = e.getAttribute("ceid")) || (t = e.getAttribute("title")) || (t = e.getAttribute("alt")) || (t = e.getAttribute("name")) || "A" == e.nodeName && (t = h(e)) ? t : (t = d(e)) && (r = d(e)) && !u.test(r) ? new n.URI(t).simplify() : (t = e.getAttribute("src")) ? p(t) : (t = h(e)) || (t = e.getAttribute("id")) || (t = g(e)) ? t : ""
                }

                function E(e, t) {
                    t && (a = t);
                    var r = {
                        type: c[e.nodeName.toLowerCase()] || 0
                    };
                    return (t = m(e)) && (r.name = t), (t = function(e) {
                        switch (e.nodeName) {
                            case "A":
                                var t = d(e);
                                if (t && !u.test(t)) return new n.URI(e.href).simplify();
                                if (e.className) return "@#".concat(g(e));
                                break;
                            case "IMG":
                            case "IFRAME":
                            case "EMBED":
                                return p(e.src);
                            case "OBJECT":
                                return p(e.data);
                            case "INPUT":
                            case "SELECT":
                            case "TEXTAREA":
                                return e.name;
                            default:
                                return g(e)
                        }
                    }(e)) && (r.data = t), (t = e.getAttribute("id")) && (r.id = t), (t = f(e)) && (r.ceid = t), (t = function(e) {
                        var t = e.parentNode;
                        if (t && t.getAttribute && t != e.ownerDocument.body) return (e = t.id) && t.ownerDocument.getElementById(e) == t ? e : f(t) || null
                    }(e)) && (r.parentID = t), Object(o.getBox)(e, r, t ? e.parentNode : null), r
                }
            },
            "./src/fingerprint2.js": function(e, t, r) {
                "use strict";
                r.r(t), r.d(t, "fingerprint2", function() {
                    return i
                }), r.d(t, "fingerprint2FromObject", function() {
                    return s
                });
                var a = r("./src/utils/box.js"),
                    c = r("./src/fingerprint.js");

                function u(e) {
                    if ("string" == typeof e) return e;
                    e = e.toString(16);
                    return e.length % 2 != 0 ? "0".concat(e) : e
                }

                function l(e) {
                    return c.TAG_TYPES[e.nodeName.toLowerCase()] || 0
                }

                function h(e) {
                    for (var t, r, n, i, s, o = [], a = "", c = 0, l = e.length; c < l; c++)(t = e[c]).type === (r && r.type) && t.relation === r.relation ? o[o.length - 1].count++ : o.push({
                        type: t.type,
                        relation: t.relation,
                        count: 1
                    }), r = t;
                    for (c = 0, l = o.length; c < l; c++)
                        if ((i = o[c]).relation && i.relation !== n && (a += 1 === i.relation ? "^" : "<", n = i.relation), 2 < i.count) a += "".concat(u(i.type), "x").concat(u(i.count));
                        else
                            for (s = 0; s < i.count; s++) a += u(i.type);
                    return a
                }
                var n = function(e) {
                    for (var t, r = [], n = [], i = [], s = e;;) {
                        if (s.previousElementSibling) t = 1, s = s.previousElementSibling;
                        else {
                            if (!s.parentNode || s.parentNode == document.body || s.parentNode == document.documentElement) break;
                            t = 2, s = s.parentNode
                        }
                        if (r.push({
                                type: l(s),
                                relation: t
                            }), 32 <= r.length) break
                    }
                    for (s = e.nextElementSibling; n.length < 32 && s; s = s.nextElementSibling) n.push({
                        type: l(s)
                    });
                    var o = e.getElementsByTagName("*");
                    for (s = 0; s < o.length && s < 32; s++) i.push({
                        type: l(o[s])
                    });
                    this.type = l(e), this.elders = h(r), this.youngerSiblings = h(n), this.descendants = h(i), Object(a.getBox)(e, this), this.name = Object(c.getName)(e)
                };

                function i(e) {
                    return new n(e)
                }

                function s(e) {
                    if (e instanceof n) return e;
                    var t, r = Object.create(n.prototype);
                    for (t in e) Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t]);
                    return r
                }
                n.fromObject = function(e) {
                    if (e instanceof n) return e;
                    var t, r = Object.create(n.prototype);
                    for (t in e) Object.prototype.hasOwnProperty.call(e, t) && (r[t] = e[t]);
                    return r
                }, n.prototype.toString = function() {
                    return "".concat(n.hex(this.type), ";").concat(this.elders, ";").concat(this.youngerSiblings, ";").concat(this.descendants)
                }
            },
            "./src/getAll.js": function(e, t, r) {
                "use strict";
                r.r(t), r.d(t, "IGNORED_TAGS", function() {
                    return T
                }), r.d(t, "getAllFingerprints", function() {
                    return s
                }), r.d(t, "getAllFingerprints2", function() {
                    return n
                });
                var t = r("./node_modules/@babel/runtime/helpers/extends.js"),
                    i = r.n(t),
                    b = r("./src/utils/html.js"),
                    k = r("./src/fingerprint.js"),
                    y = r("./src/fingerprint2.js"),
                    T = {
                        SCRIPT: 0,
                        NOSCRIPT: 0,
                        STYLE: 0,
                        BR: 0
                    };

                function s() {
                    for (var e, t, r, n = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, i = [], s = document.body, o = n.elements || s.getElementsByTagName("*"), a = s.clientWidth, c = Object(b.findByClass)("-ce-capture"), l = Object(b.findByClass)("-ce-ignore"), u = T, h = null == n.skipHidden || n.skipHidden, d = null == n.skipOffScreen || n.skipOffScreen, p = n.onHidden, f = n.onFingerprint, g = n.snakeCase, m = n.fpVersion, E = 0; e = o[E++];) try {
                        if (e.nodeName in u || "INPUT" == e.nodeName && "hidden" == e.type) continue;
                        if (h && "AREA" != e.nodeName && !Object(b.isVisible)(e)) {
                            p && p(e);
                            continue
                        }
                        if (Object(b.arrayContains)(l, e)) continue;
                        if ((r = Object(b.arrayContains)(c, e)) && r != e) continue;
                        if (e.ownerSVGElement) continue;
                        if (t = Object(2 === m ? y.fingerprint2 : k.fingerprint)(e), g && (t.parentID && (t.parent_id = t.parentID, delete t.parentID), t.page_x = t.pageX, t.page_y = t.pageY, delete t.pageX, delete t.pageY), f && f(e, t), d && t.pageX + t.width < .25 * -a) continue;
                        if (c.length) {
                            for (var v = !1, C = 0; r = c[C++];)
                                if (r != e && Object(b.contains)(r, e)) {
                                    v = !0;
                                    break
                                }
                            if (v) continue
                        }
                        i.push(t)
                    } catch (e) {
                        console.log(e)
                    }
                    return i.sort(function(e, t) {
                        return (e.width && e.height && e.type ? -1 : 1) - (t.width && t.height && t.type ? -1 : 1)
                    }), i
                }

                function n(e) {
                    for (var t, r = s(i()({
                            fpVersion: 2,
                            skipHidden: !1
                        }, e)), n = 0; t = r[n++];) t.element_fingerprint_id = n, t.found = !0, t.parentID && (t.parent_id = t.parentID), delete t.parentID, delete t.pageX, delete t.pageY;
                    return r
                }
            },
            "./src/index.js": function(e, t, r) {
                "use strict";
                r.r(t);
                var n = r("./src/fingerprint.js"),
                    i = r("./src/fingerprint2.js"),
                    s = r("./src/utils/scroll.js"),
                    o = r("./src/utils/box.js"),
                    r = r("./src/getAll.js");
                t.default = {
                    fingerprint: n.fingerprint,
                    fingerprint2: i.fingerprint2,
                    fingerprint2FromObject: i.fingerprint2FromObject,
                    scroll: s.scroll,
                    getBox: o.getBox,
                    getAllFingerprints: r.getAllFingerprints,
                    getAllFingerprints2: r.getAllFingerprints2,
                    IGNORED_TAGS: r.IGNORED_TAGS
                }
            },
            "./src/utils/box.js": function(e, t, r) {
                "use strict";
                r.r(t), r.d(t, "getBox", function() {
                    return p
                });
                var t = r("./node_modules/@babel/runtime/helpers/slicedToArray.js"),
                    l = r.n(t),
                    u = r("./src/utils/text.js"),
                    c = r("./src/utils/scroll.js"),
                    h = r("./src/utils/browser.js");

                function n(e, t) {
                    var n = Math.min(t.width, t.height),
                        r = Object(u.strip)(e.coords, !0).split(/[^\d\.%]+/).map(function(e) {
                            return r = n, e = parseInt(t = e, 10), ~t.indexOf("%") && (e *= .01 * r), isNaN(e) ? null : e;
                            var t, r
                        });
                    if (!/circle/i.test(e.shape)) {
                        a = [], c = [];
                        for (var i = 0, s = r.length; i < s; i++)(i % 2 ? c : a).push(r[i]);
                        var t = Math.min.apply(null, a),
                            e = Math.max.apply(null, a),
                            o = Math.min.apply(null, c);
                        return {
                            left: t,
                            top: o,
                            width: e - t,
                            height: Math.max.apply(null, c) - o
                        }
                    }
                    if (3 <= r.length) {
                        var o = l()(r, 3),
                            a = o[0],
                            c = o[1];
                        return {
                            left: a - (o = o[2]),
                            top: c - o,
                            width: 2 * o,
                            height: 2 * o
                        }
                    }
                }

                function d(e) {
                    var t = function(e) {
                        for (var t, r = RegExp("(^|#)".concat(e.parentNode.name), "i"), n = e.ownerDocument.getElementsByTagName("IMG"), i = 0; t = n[i++];)
                            if (r.test(t.useMap)) return t
                    }(e);
                    if (t) {
                        t = p(t), e = n(e, t);
                        return e ? {
                            left: t.left + e.left,
                            top: t.top + e.top,
                            width: e.width,
                            height: e.height
                        } : void 0
                    }
                }

                function p(e, t, r) {
                    if (t = t || {}, "AREA" == e.nodeName)(n = d(e)) && (t.left = n.left, t.top = n.top, t.width = n.width, t.height = n.height);
                    else if (e.getBoundingClientRect) {
                        var n = e.getBoundingClientRect(),
                            i = Object(c.scroll)();
                        t.left = Math.floor(n.left + i.left), t.top = Math.floor(n.top + i.top), h.browser.webkit && h.browser.webkitVersion < 533 && "relative" == e.style.position && (t.left += parseInt(e.style.left, 10), t.top += parseInt(e.style.top, 10)), t.width = Math.floor(n.width || n.right - n.left), t.height = Math.floor(n.height || n.bottom - n.top)
                    } else {
                        t.width = e.offsetWidth, t.height = e.offsetHeight;
                        for (var s = e, o = 0, a = 0; o += s.offsetLeft || 0, a += s.offsetTop || 0, s = s.offsetParent;);
                        t.left = Math.floor(o), t.top = Math.floor(a)
                    }
                    return t.pageX = t.left, t.pageY = t.top, r && (r = p(r), t.left -= r.pageX, t.top -= r.pageY), t
                }
            },
            "./src/utils/browser.js": function(e, t, r) {
                "use strict";
                r.r(t), r.d(t, "browser", function() {
                    return n
                });
                var t = navigator.userAgent,
                    n = {};
                n.opera = n.ie = n.chrome = n.safari = n.firefox = !1, n.browser = "unknown", window.opera && "function" == typeof window.opera.version ? (n.browser = "opera", n.opera = !0, n.operaVersion = parseInt(window.opera.version(), 10)) : /\bMSIE\b/.test(t) ? (n.browser = "ie", n.ie = !0, n.ieVersion = parseInt(/MSIE (\d+)\.\d+/.exec(navigator.userAgent)[1], 10), n.ieQuirksMode = "BackCompat" == document.compatMode) : /\b(iPhone|iP[ao]d)\b/.test(t) ? (n.browser = "iphone", n.iphone = !0, n.webkit = !0) : /\bChrome\b/.test(t) ? (n.browser = "chrome", n.chrome = !0, n.webkit = !0) : /AppleWebKit/.test(navigator.appVersion) ? (n.browser = "safari", n.safari = !0, n.webkit = !0) : /Mozilla/i.test(t) && !/compatible|webkit/i.test(t) && (n.browser = "firefox", n.firefox = !0), n.webkit && (n.webkitVersion = parseInt(/AppleWebKit\/(\d+)/.exec(t)[1], 10))
            },
            "./src/utils/html.js": function(e, t, r) {
                "use strict";

                function n(e) {
                    var t, r, n, i, s = [],
                        o = document.body;
                    if (o.getElementsByClassName ? n = o.getElementsByClassName(e) : o.querySelectorAll && (n = o.querySelectorAll(".".concat(e))), n)
                        for (t = 0; r = n[t++];) s.push(r);
                    else
                        for (n = o.getElementsByTagName("*"), i = RegExp("(^|\\s)".concat(e, "($|\\s)")), t = 0; r = n[t++];) r.className && i.test(r.className) && s.push(r);
                    return s
                }

                function i(e, t) {
                    if (e == t) return !0;
                    if ("function" == typeof e.contains) return e.contains(t);
                    for (var r = t;
                        (r = r.parentNode) && r != document.body && r != e;);
                    return r == e
                }

                function s(e, t) {
                    var r, n;
                    if (e && e.length)
                        for (r = 0; n = e[r++];)
                            if (i(n, t)) return n
                }

                function o(e) {
                    return window.getComputedStyle ? window.getComputedStyle.call(window, e, null) : e.currentStyle
                }

                function a(e, t) {
                    var r = o(e);
                    return "none" !== r.display && (!(!t && "hidden" === r.visibility) && (!(r.opacity < .1) && (!e.parentElement || a(e.parentElement, !0))))
                }
                r.r(t), r.d(t, "findByClass", function() {
                    return n
                }), r.d(t, "contains", function() {
                    return i
                }), r.d(t, "arrayContains", function() {
                    return s
                }), r.d(t, "getStyle", function() {
                    return o
                }), r.d(t, "isVisible", function() {
                    return a
                })
            },
            "./src/utils/scroll.js": function(e, t, r) {
                "use strict";
                r.r(t), r.d(t, "scroll", function() {
                    return i
                });
                var n = "cesrk".concat(Math.random().toString().replace(/\D/g, ""));

                function i(e) {
                    var t, r = (e = e || window).document;
                    return e["".concat(n, "_path")] !== e.location.pathname && (e[n] = function(e) {
                        var t = e.defaultView;
                        if (e.documentElement.scrollHeight > t.innerHeight) return t;
                        if (e.querySelectorAll && "number" == typeof e.body.scrollHeight)
                            for (var r, n, i = e.body, s = Array.from(e.querySelectorAll("html, body, body *")).filter(function(e) {
                                    return !e.ownerSVGElement
                                }), o = i.getElementsByTagName("*").length, a = 0, c = Math.min(7e3, s.length); a < c; a++)
                                if (!((r = s[a]).clientHeight >= r.scrollHeight) && (r.offsetWidth || r.offsetHeight || r.getClientRects().length) && !(r.getElementsByTagName("*").length / o < .5 || r.clientHeight > window.innerHeight || (n = r.getBoundingClientRect(), Math.floor(n.width || n.right - n.left) < .75 * t.innerWidth || Math.floor(n.height || n.bottom - n.top) < .75 * t.innerHeight))) return r
                    }(r), e["".concat(n, "_path")] = e.location.pathname), {
                        left: (t = e[n] || ("BackCompat" === r.compatMode ? r.body : r.documentElement)) === e ? t.scrollX : t.scrollLeft,
                        top: t === e ? t.scrollY : t.scrollTop,
                        width: e.innerWidth,
                        height: e.innerHeight
                    }
                }
            },
            "./src/utils/text.js": function(e, t, r) {
                "use strict";
                r.r(t), r.d(t, "re", function() {
                    return n
                }), r.d(t, "strip", function() {
                    return i
                });
                var t = "[\\s\\u00a0\\u2028\\u2029]+",
                    n = {
                        whitespace: RegExp(t, "g"),
                        strip: RegExp("^".concat(t, "|").concat(t, "$"), "g"),
                        href: /\bhref="(.*?)"/i,
                        ipHost: /^([\d\.]+|\[[a-f\d:]+\])$/i
                    };

                function i(e, t) {
                    e = e.replace(n.strip, "");
                    return t ? e.replace(n.whitespace, " ") : e
                }
            },
            "./src/utils/uri.js": function(e, t, r) {
                "use strict";
                r.r(t), r.d(t, "URI", function() {
                    return c
                });
                var t = r("./node_modules/@babel/runtime/helpers/slicedToArray.js"),
                    a = r.n(t),
                    t = r("./node_modules/@babel/runtime/helpers/typeof.js"),
                    n = r.n(t),
                    s = r("./src/utils/browser.js"),
                    c = function(e) {
                        var t;
                        this.src = e, this.protocol = this.host = this.port = this.path = this.qs = this.hash = this.query = null, e && ("string" == (t = n()(e)) ? this.initWithString(e) : "object" == t && this.initWithURI(e))
                    };

                function l(t) {
                    try {
                        return decodeURIComponent(t)
                    } catch (e) {
                        return window.unescape(t)
                    }
                }
                c.pattern = /^\s*([\S]+?:\/\/)?([^\s\/]+?@)?([^:\/\?\#]+)?(\:\d+)?(\/?[^#\?\s]*)?([\?][^#\s]*)?([#]\S+)?/i, c.prototype = {
                    initWithString: function(e) {
                        var t = c.pattern.exec(e),
                            r = a()(t, 8),
                            n = (r[0], r[1]),
                            i = (r[2], r[3]),
                            s = r[4],
                            o = r[5],
                            t = r[6],
                            r = r[7];
                        n || "/" == (e[0] || "") ? (n && (this.protocol = n.substr(0, n.indexOf(":"))), this.host = i || null, s && (this.port = +s.substr(1)), o ? this.path = l(o) : this.host && (this.path = "/")) : this.path = l((i || "") + (o || "")), t && (this.qs = function(e, t) {
                            if (null == e || /^\s*$/.test(e)) return null;
                            for (var r, n = {}, i = e.replace(/\+/g, " ").split(t || "&"), s = 0, o = i.length; s < o; s++)(r = i[s].split("="))[0] && (n[l(r[0])] = null == r[1] ? null : l(r[1]));
                            return n
                        }(t.substr(1)), this.query = t.substr(1)), r && (this.hash = l(r.substr(1)))
                    },
                    initWithURI: function(e) {
                        for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (this[t] = e[t])
                    },
                    isAbsolute: function() {
                        return this.isURL() || this.path && "/" == (this.path[0] || "")
                    },
                    isURL: function() {
                        return this.protocol && this.host
                    },
                    getDomain: function() {
                        return this.host && this.host.replace(/^(www|m)\./, "")
                    },
                    getHost: function() {
                        return this.host + (this.port ? ":".concat(this.port) : "")
                    },
                    getOrigin: function() {
                        return "".concat(this.protocol, "://").concat(this.getHost())
                    },
                    getFullUrl: function() {
                        var e = this.query ? "?".concat(this.query) : "";
                        return "".concat(this.getOrigin()).concat(this.path).concat(e)
                    },
                    join: function(e) {
                        var t = new c(this),
                            r = this.path;
                        return (e = "string" == typeof e ? new c(e) : e).isURL() ? new c(e) : (r = e.isAbsolute() ? e.path : r ? ((r = r.split("/")).pop(), (r = e.path ? r.concat(e.path.split("/")) : r).join("/")) : this.isURL() ? "/".concat(e.path) : e.path, t.path = r, t.qs = e.qs, t.hash = e.hash, t)
                    },
                    normalize: function() {
                        if (this.path) {
                            var e;
                            s.browser.ie && s.browser.ieVersion < 9 ? (e = [], "/" == (this.path[0] || "") && e.push(""), e = e.concat(this.path.split(/\/+/g)), "/" == (this.path[0 | this.path.length - 1] || "") && e.push("")) : e = this.path.split(/\/+/g);
                            var t, r = 0;
                            do {
                                if (t = e.length - 1, ".." == e[r + 1]) "" == e[r] && 0 == r ? e.splice(r + 1, 1) : (e.splice(r, 2), --r);
                                else if ("." == e[r]) {
                                    if (0 == t) break;
                                    e.splice(r, 1)
                                } else r++
                            } while (r <= t);
                            this.path = e.join("/")
                        }
                    },
                    simplify: function(e) {
                        var t = [],
                            r = "file" == this.protocol ? this : s.browser.ie ? e ? e.join(this) : this : (e = e || new c(window.document.baseURI)).join(this);
                        if (r.normalize(), r.host && t.push(r.host.replace(/^(www|m)\./, "")), null != r.port && t.push(":".concat(r.port)), "/" == r.path || /^\/(default|home|index)\b[^\/]*$/i.test(r.path) ? (r.qs || r.hash) && t.push("/") : t.push(r.path), r.qs) {
                            var n, i = [];
                            for (n in r.qs) r.qs[n] && !/(^sess|^sid$|^phpsessid$|^jsessionid$|^__VIEWSTATE$)/i.test(n) && i.push("".concat(encodeURIComponent(n), "=").concat(encodeURIComponent(r.qs[n])));
                            i.length && t.push("?".concat(i.join("&")))
                        }
                        return r.hash && t.push("#".concat(r.hash)), t.join("")
                    }
                }
            },
            0: function(e, t, r) {
                e.exports = r("./src/index.js")
            }
        })
    }(), "undefined" == typeof CE2 && (CE2 = {}), CE2.SPIRAL = [
        [.4, .4],
        [.5, .4],
        [.5, .5],
        [.4, .5],
        [.3, .5],
        [.3, .4],
        [.3, .3],
        [.4, .3],
        [.5, .3],
        [.6, .3],
        [.6, .4],
        [.6, .5],
        [.6, .6],
        [.5, .6],
        [.4, .6],
        [.3, .6],
        [.2, .6],
        [.2, .5],
        [.2, .4],
        [.2, .3],
        [.2, .2],
        [.3, .2],
        [.4, .2],
        [.5, .2],
        [.6, .2],
        [.7, .2],
        [.7, .3],
        [.7, .4],
        [.7, .5],
        [.7, .6],
        [.7, .7],
        [.6, .7],
        [.5, .7],
        [.4, .7],
        [.3, .7],
        [.2, .7],
        [.1, .7],
        [.1, .6],
        [.1, .5],
        [.1, .4],
        [.1, .3],
        [.1, .2],
        [.1, .1],
        [.2, .1],
        [.3, .1],
        [.4, .1],
        [.5, .1],
        [.6, .1],
        [.7, .1],
        [.8, .1],
        [.8, .2],
        [.8, .3],
        [.8, .4],
        [.8, .5],
        [.8, .6],
        [.8, .7],
        [.8, .8],
        [.7, .8],
        [.6, .8],
        [.5, .8],
        [.4, .8],
        [.3, .8],
        [.2, .8],
        [.1, .8],
        [0, .8],
        [0, .7],
        [0, .6],
        [0, .5],
        [0, .4],
        [0, .3],
        [0, .2],
        [0, .1],
        [0, 0],
        [.1, 0],
        [.2, 0],
        [.3, 0],
        [.4, 0],
        [.5, 0],
        [.6, 0],
        [.7, 0],
        [.8, 0],
        [.9, 0],
        [.9, .1],
        [.9, .2],
        [.9, .3],
        [.9, .4],
        [.9, .5],
        [.9, .6],
        [.9, .7],
        [.9, .8],
        [.9, .9],
        [.8, .9],
        [.7, .9],
        [.6, .9],
        [.5, .9],
        [.4, .9],
        [.3, .9],
        [.2, .9],
        [.1, .9],
        [0, .9]
    ], CE2.dynamicKey = "cedk".concat(Math.random().toString().replace(/\D/g, "")), CE2.scrollRootKey = "cesrk".concat(Math.random().toString().replace(/\D/g, "")), CE2.ScrollTracker = function() {
        this.strictAnchorSearch = !0, this.lastRecordedScroll = null, this.lastRecordedTime = 0, this.lastRecordedY = 0, this.idleAt = null, this.idleSince = (new Date).getTime()
    }, CE2.ScrollTracker.prototype = {
        shouldRecordScroll: function(e) {
            var t = e.top,
                r = e.height,
                n = "".concat(t, ":").concat(r),
                e = (new Date).getTime();
            if (n == this.lastRecordedScroll) return !1;
            if (n == this.idleAt) {
                if (800 <= e - this.idleSince) return this.lastRecordedScroll = n, this.lastRecordedTime = e, this.lastRecordedY = t, !0
            } else this.idleAt = n, this.idleSince = e;
            return null == this.lastRecordedScroll || Math.abs(t - this.lastRecordedY) > r / 2 && 1600 <= e - this.lastRecordedTime ? (this.lastRecordedScroll = n, this.lastRecordedTime = e, this.lastRecordedY = t, !0) : void 0
        },
        findAnchor: function(e, t) {
            if (!CE2.d.elementFromPoint) return t(e);

            function r() {
                if (i = CE2.SPIRAL[o++]) {
                    if (n = (i[0] + .1 * Math.random()) * c, i = (i[1] + .1 * Math.random()) * l, i = CE2.elementFromPoint(n, i, e), CE2.isAnchorElement(i, e, a)) return t(e, i);
                    setTimeout(r, 0)
                } else o = 0, s.strictAnchorSearch = a = !1, setTimeout(r, 0)
            }
            var n, i, s = this,
                o = 0,
                a = this.strictAnchorSearch,
                c = e.width,
                l = e.height;
            setTimeout(r, 0)
        }
    }, CE2.isStatic = function(e) {
        var t, r = this.dynamicKey;
        if (e[r]) return !1;
        for (; e && e != CE2.d && e != CE2.d.documentElement && e != CE2.d.body; e = e.parentNode)
            if ((t = CE2.getStyle(e)) && ("absolute" == t.position || "fixed" == t.position)) return !(e[r] = !0);
        return !0
    }, CE2.isAnchorElement = function(e, t, r) {
        if (!e || !e.nodeName) return !1;
        if (e == CE2.d || e == CE2.d.documentElement || e == CE2.d.body) return !1;
        if (CE2.isVML(e)) return !1;
        if (r) {
            if (!CE2.isStatic(e)) return !1;
            if (CE2.fp.getBox(e).height > 2 * t.height) return !1
        }
        return !0
    }, CE2.elementFromPointAbsolute = function(e, t, r) {
        r = CE2.d.elementFromPoint(e + r.left, t + r.top);
        return r.nodeType === r.TEXT_NODE ? r.parentNode : r
    }, CE2.elementFromPointRelative = function(e, t) {
        return CE2.d.elementFromPoint(e, t)
    }, CE2.elementFromPoint = function() {
        var e;
        if (CE2.d.elementFromPoint) return CE2.webkit && CE2.webkitVersion < 533 || CE2.opera && CE2.operaVersion < 10 ? CE2.elementFromPoint = CE2.elementFromPointAbsolute : CE2.elementFromPoint = CE2.elementFromPointRelative, (e = CE2).elementFromPoint.apply(e, arguments)
    },
    function() {
        var n = /[:@;%~='"\|\*\/\\\.\[\]\{\}\(\)]/g,
            i = /^-?[_a-zA-Z]+[_a-zA-Z0-9-]*$/;

        function s(e) {
            var t = [],
                r = e.id;
            if (t.push(e.nodeName.toLowerCase()), r && "string" == typeof r && !/^\d/.test(r) ? t.push("#".concat(r.replace(n, "\\$&").replace(/^\s+|\s+$/g, ""))) : (r = (r = e, [].slice.call(r.classList).filter(function(e) {
                    return e.match(i)
                }).map(function(e) {
                    return ".".concat(e)
                }).join(""))) && t.push(r), t = t.join(""), 1 == e.parentNode.querySelectorAll(t).length) return t;
            t = function(e) {
                for (var t = e.parentNode.children, r = 0, n = 0; n < t.length; n++) {
                    var i = t[n];
                    if (i.tagName === e.tagName && r++, i === e) return r
                }
            }(e);
            return "".concat(e.nodeName.toLowerCase(), ":nth-of-type(").concat(t, ")")
        }
        CE2.selector = function(e) {
            var t = [],
                r = e.ownerDocument,
                n = r.body,
                r = r.documentElement;
            if (e === n || e === r) return e.tagName.toLowerCase();
            for (; e && e !== n && (t.unshift(s(e)), 1 !== n.querySelectorAll(t.join(" ")).length); e = e.parentNode);
            return t.join(" > ")
        }
    }(),
    function() {
        var s = ["input:not([type])", 'input[type=""]', "input[type=text]", "input[type=hidden]", "input[type=password]", "input[type=email]", "input[type=number]", "input[type=tel]", "input[type=range]", "textarea", "[contenteditable=true]", '[contenteditable=""]'];
        CE2.getCensoredElements = function(e) {
            if (!CE2.data.disable_recordings_masking) {
                var t = s.slice(0);
                if (e.recordingSettings && e.recordingSettings.maskElements)
                    for (var r = JSON.parse(e.recordingSettings.maskElements), n = 0; n < r.length; n++) {
                        var i = r[n];
                        t.push(i.selector)
                    }
                return t
            }
        }
    }(), CE2.w.CE_URL_FINGERPRINT || (CE2.w.CE_URL_FINGERPRINT = function() {
        var e = CE2.w.location.host,
            t = (t = CE2.w.location.pathname).split("/").map(function(e) {
                return e.replace(/^([\d]+|(.*(\d.*){2}))$/, "*")
            }).join("/");
        return "".concat(e.replace(/^(www|m)\./i, "")).concat(t).toLowerCase().replace(/\/$/, "")
    }),
    function() {
        function t(r) {
            try {
                r && !r.isCensored && (r.ce || (r.ce = {}), setTimeout(function() {
                    r.ce.imgTaken || (r.ce.imgTaken = !0, r.toBlob(function(e) {
                        var t = new URL("/canvas-urls/".concat(r.width, "x").concat(r.height, "/").concat(e.size, "/").concat(e.type && e.type.replace("/", ".")), CE2.d.baseURI).toString();
                        r.ce = {
                            imgUrl: t,
                            blob: e,
                            imgTaken: !1
                        }, t !== r.getAttribute("ce-img-taken") && r.setAttribute("ce-img-taken", t)
                    }, "image/webp"))
                }))
            } catch (e) {
                CE2.debug("error saving the canvas image", e)
            }
        }

        function o(e) {
            t(e.canvas)
        }
        var e = [{
            type: CE2.w.CanvasRenderingContext2D,
            methods: ["stroke", "fillText", "strokeText", "fillRect", "drawImage", "clearRect", "translate", "transform", "fill", "clear", "rect", "strokeRect"]
        }];
        CE2.Canvas = {
            track: function() {
                this.overridden || (e.forEach(function(r) {
                    r.type && r.methods && r.methods.forEach(function(e) {
                        var t, n, i, s;
                        t = r.type, n = e, i = o, s = t.prototype[n], t.prototype[n] = function() {
                            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                            s.call.apply(s, [this].concat(t)), i.apply(void 0, [this, n].concat(t))
                        }
                    })
                }), this.overridden = !0), CE2.d.querySelectorAll("canvas").forEach(function(e) {
                    t(e)
                })
            }
        }
    }(),

    function(e) {
        e.BloomFilter = t, e.fnv_1a = c;
        var a = "undefined" != typeof ArrayBuffer;

        function t(e, t) {
            var r;
            "number" != typeof e && (e = 32 * (r = e).length);
            var n = Math.ceil(e / 32),
                i = -1;
            if (this.m = e = 32 * n, this.k = t, a) {
                var s = 1 << Math.ceil(Math.log(Math.ceil(Math.log(e) / Math.LN2 / 8)) / Math.LN2),
                    e = 1 == s ? Uint8Array : 2 == s ? Uint16Array : Uint32Array,
                    t = new ArrayBuffer(s * t),
                    o = this.buckets = new Int32Array(n);
                if (r)
                    for (; ++i < n;) o[i] = r[i];
                this._locations = new e(t)
            } else {
                o = this.buckets = [];
                if (r)
                    for (; ++i < n;) o[i] = r[i];
                else
                    for (; ++i < n;) o[i] = 0;
                this._locations = []
            }
        }

        function c(e, t) {
            for (var r = 2166136261 ^ (t || 0), n = 0, i = e.length; n < i; ++n) {
                var s = e.charCodeAt(n),
                    o = 65280 & s;
                o && (r = l(r ^ o >> 8)), r = l(r ^ 255 & s)
            }
            return t = r, t += t << 13, t ^= t >>> 7, t += t << 3, t ^= t >>> 17, 4294967295 & (t += t << 5)
        }

        function l(e) {
            return e + (e << 1) + (e << 4) + (e << 7) + (e << 8) + (e << 24)
        }
        t.prototype.locations = function(e) {
            for (var t = this.k, r = this.m, n = this._locations, i = c(e), s = c(e, 1576284489), o = i % r, a = 0; a < t; ++a) n[a] = o < 0 ? o + r : o, o = (o + s) % r;
            return n
        }, t.prototype.add = function(e) {
            for (var t = this.locations(e + ""), r = this.k, n = this.buckets, i = 0; i < r; ++i) n[Math.floor(t[i] / 32)] |= 1 << t[i] % 32
        }, t.prototype.test = function(e) {
            for (var t = this.locations(e + ""), r = this.k, n = this.buckets, i = 0; i < r; ++i) {
                var s = t[i];
                if (0 == (n[Math.floor(s / 32)] & 1 << s % 32)) return !1
            }
            return !0
        }, t.prototype.size = function() {
            for (var e, t = this.buckets, r = 0, n = 0, i = t.length; n < i; ++n) r += (e = t[n], 16843009 * ((e = (858993459 & (e -= e >> 1 & 1431655765)) + (e >> 2 & 858993459)) + (e >> 4) & 252645135) >> 24);
            return -this.m * Math.log(1 - r / this.m) / this.k
        }
    }(CE2), CE2.V11AssetsTracker = function(e) {
        this.tracker = e, this.OBSERVER_CACHE_KEY = "ce_asset", this.WAITING_QUEUE_KEY = "ce_asset_waiting", this.SAMPLE_INTERVAL = "undefined" == typeof CE_ASSET_COLLECTOR_INTERVAL ? 1e4 : CE_ASSET_COLLECTOR_INTERVAL, this.URL_REGEX = /url\(["'](.+?)["']\)/, this.BATCH_SIZE = 20
    }, CE2.WorkerQueue = function() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
        e && (this.storageKey = e, (e = sessionStorage.getItem(this.storageKey)) && (this.queue = JSON.parse(e))), this.queue || (this.queue = [])
    }, CE2.WorkerQueue.prototype = {
        push: function(r) {
            for (var n = this, i = [], e = 0; e < r.length; e++)(function(e) {
                var t = r[e];
                if (!t || !t.url) return;
                e = CE2.findIndexInArray(n.queue, function(e) {
                    return e.url === t.url
                });
                0 <= e ? n.queue[e] = t : CE2.findIndexInArray(i, function(e) {
                    return e.url === t.url
                }) < 0 && i.push(t)
            })(e);
            i.length && (CE2.debug("Checking ".concat(i.length, " assets")), CE2.debug(i), this.queue = this.queue.concat(i)), this.updateStorage()
        },
        fetch: function(e) {
            e = this.queue.splice(0, e);
            return this.updateStorage(), e
        },
        length: function() {
            return this.queue.length
        },
        updateStorage: function() {
            this.storageKey && sessionStorage.setItem(this.storageKey, CE2.JSON.stringify(this.queue))
        }
    }, CE2.V11AssetsTracker.prototype = {
        setup: function() {
            this.uri = new CE2.URL(CE2.w.location.toString()), this.setupObserverCache(), this.setupWorker(), this.schedulePerformanceObserver(), this.scheduleDataAndBlobCollection(1e3)
        },
        cleanup: function() {
            this.performanceObserver && (this.performanceObserver.disconnect(), delete this.performanceObserver), this.collectAssetsTimeout && clearTimeout(this.collectAssetsTimeout), this.worker && this.worker.terminate()
        },
        setupObserverCache: function() {
            var e = sessionStorage.getItem(this.OBSERVER_CACHE_KEY);
            this.observerCache = e ? new CE2.BloomFilter(JSON.parse(e), 16) : new CE2.BloomFilter(8192, 16)
        },
        addObserverCache: function(e) {
            for (var t = 0; t < e.length; t++) {
                var r = e[t];
                this.observerCache.add(r.cacheKey)
            }
            sessionStorage.setItem(this.OBSERVER_CACHE_KEY, CE2.JSON.stringify([].slice.call(this.observerCache.buckets)))
        },
        checkObserverCache: function(e) {
            return this.observerCache.test(e)
        },
        collectDataAndBlobAssets: function() {
            var e = [];
            if (CE2.d.images)
                for (var t = 0, r = CE2.d.images; t < r.length; t++) {
                    var n = r[t],
                        n = n.currentSrc || n.src;
                    this.isBlobOrDataUrl(n) && (u = this.prepareAsset(n, {
                        source: "images"
                    })) && e.push(u)
                }
            if (CE2.d.styleSheets)
                for (var i = 0, s = CE2.d.styleSheets; i < s.length; i++) {
                    var o = s[i];
                    this.isBlobOrDataUrl(o.href) && (u = this.prepareAsset(o.href, {
                        source: "stylesheets"
                    })) && e.push(u)
                }
            for (var a = 0, c = CE2.d.querySelectorAll("canvas"); a < c.length; a++) {
                var l, u, h = c[a];
                h.ce && h.ce.imgUrl && (l = h.ce.blob, (u = this.prepareAsset(h.ce.imgUrl, {
                    source: "canvas"
                })) && (u.data = l, u.contentType = l.type, u.contentLength = l.size, e.push(u)))
            }
            this.queueForWorker(e), this.scheduleDataAndBlobCollection(this.SAMPLE_INTERVAL)
        },
        schedulePerformanceObserver: function() {
            var t = this,
                e = CE2.w;
            e.performance && e.performance.getEntriesByType && (this.handlePerformanceEntries(e.performance.getEntriesByType("resource")), "undefined" != typeof PerformanceObserver && (this.performanceObserver = new PerformanceObserver(function(e) {
                t.handlePerformanceEntries(e.getEntries())
            }), this.performanceObserver.observe({
                entryTypes: ["resource"]
            })))
        },
        scheduleDataAndBlobCollection: function(e) {
            this.collectAssetsTimeout = setTimeout(CE2.bind(this, "collectDataAndBlobAssets"), e)
        },
        handlePerformanceEntries: function(e) {
            for (var t = [], r = 0; r < e.length; r++) {
                var n = e[r];
                "link" !== n.initiatorType && "img" !== n.initiatorType && "css" !== n.initiatorType || (n = this.prepareAsset(n.name, {
                    source: "network"
                })) && t.push(n)
            }
            this.queueForWorker(t)
        },
        setupWorker: function() {
            var o = this;
            this.worker || (this.workerQueue = new CE2.WorkerQueue, this.workerWaitingQueue = new CE2.WorkerQueue(this.WAITING_QUEUE_KEY), this.worker = CE2.inlineWorker(function(e) {
                for (var t = e.data, n = t.assets, r = t.session, i = t.uid, e = t.origin, t = t.trackURL, s = {
                        session: r,
                        uid: i,
                        origin: e,
                        assets: []
                    }, o = 0; o < n.length; o++) {
                    var a = n[o],
                        c = {
                            url: a.url
                        };
                    a.data && (c.contentType = a.contentType, c.contentLength = a.contentLength, c.contentEncoding = "gzip", a.contentType && ~a.contentType.indexOf("text/css") ? c.digest = CE2.md5(a.data) : c.digest = CE2.md5((new FileReaderSync).readAsText(a.data.slice(0, 8e3)))), s.assets.push(c)
                }
                CE2.post.send("".concat(t, "/assets"), JSON.stringify(s), {
                    contentType: "application/json",
                    callback: function(e) {
                        var r;
                        if (200 === e.status) r = JSON.parse(e.responseText);
                        else {
                            if (204 !== e.status) return;
                            r = []
                        }
                        for (var t = 0; t < n.length; t++) ! function(e) {
                            var t = n[e],
                                e = CE2.findInArray(r, function(e) {
                                    return t.url === e.url
                                });
                            e ? (t.status = e.status, t.s3 = e.s3) : t.status = 2
                        }(t);
                        CE2.promisePool(n, 2, function(o) {
                            return new CE2.Promise(function(e) {
                                if (o.s3) {
                                    for (var t = new CE2.FormData, r = 0, n = Object.keys(o.s3.fields); r < n.length; r++) {
                                        var i = n[r];
                                        t.append(i, o.s3.fields[i])
                                    }
                                    var s = o.data;
                                    o.data instanceof Blob && (s = new Uint8Array((new FileReaderSync).readAsArrayBuffer(s))), t.append("file", pako.gzip(s)), CE2.post.send(o.s3.url, t, {
                                        callback: function() {
                                            o.status = 2, e(o)
                                        }
                                    })
                                } else e(o)
                            })
                        }).then(function() {
                            postMessage({
                                assets: n
                            })
                        }).catch(function(e) {
                            CE2.debug(e)
                        })
                    }
                })
            }, !0), this.worker && (this.worker.onmessage = function(e) {
                for (var t = [], r = [], n = 0, i = e.data.assets; n < i.length; n++) {
                    var s = i[n];
                    1 === s.status ? t.push(s) : (3 === s.status || 4 === s.status && CE2.data.recordings_2_cors_collect) && (s.corsSafe = !0, r.push(s))
                }
                t.length && o.workerWaitingQueue.push(t), r.length ? o.runWorker(r) : 0 < o.workerQueue.length() ? o.runWorker() : setTimeout(CE2.bind(o, "runWorker"), o.SAMPLE_INTERVAL)
            }, this.runWorker()))
        },
        queueForWorker: function(e) {
            e.length && (this.addObserverCache(e), this.workerQueue.push(e))
        },
        runWorker: function(e) {
            var t = this,
                e = e;
            (e = !(e && e.length || (e = this.workerQueue.fetch(this.BATCH_SIZE)).length) ? this.workerWaitingQueue.fetch(this.BATCH_SIZE) : e).length ? this.fetchAssetsData(e).then(function(e) {
                t.worker.postMessage({
                    assets: e,
                    session: t.tracker.session.id,
                    uid: CE2.data.uid,
                    origin: "".concat(CE2.w.location.protocol, "//").concat(CE2.w.location.host),
                    trackURL: t.tracker.trackURL
                })
            }).catch(function(e) {
                CE2.debug(e)
            }) : setTimeout(CE2.bind(this, "runWorker"), this.SAMPLE_INTERVAL)
        },
        isBlobUrl: function(e) {
            return 0 == e.indexOf("blob:")
        },
        fetchAssetsData: function(e) {
            return new CE2.Promise(function(i) {
                CE2.promisePool(e, 2, function(n) {
                    return new CE2.Promise(function(t) {
                        if (!n.data && n.corsSafe) {
                            var e, r = n.originalUrl;
                            n.local || ((e = new CE2.URL(r)).query = e.query && e.query.length ? "".concat(e.query, "&") : "", e.query += "ce=true", r = e.getFullUrl());
                            try {
                                CE2.get(r, function(e) {
                                    200 === e.status && e.response ? (n.data = e.response, n.contentType = e.getResponseHeader("Content-Type"), n.contentLength = e.response.size || parseInt(e.getResponseHeader("Content-Length"), 10)) : n.failed = !0, t(n)
                                }, "blob")
                            } catch (e) {
                                n.failed = !0, t(n)
                            }
                        } else t(n)
                    })
                }).then(function(e) {
                    for (var t = [], r = 0; r < e.length; r++) {
                        var n = e[r];
                        n.failed || n.local && !n.data || t.push(n)
                    }
                    i(t)
                })
            })
        },
        localUrl: function(e) {
            return !!this.isBlobUrl(e) || this.uri.sameOrigin(e)
        },
        prepareAsset: function(e, t) {
            var r = {
                    originalUrl: e,
                    source: t.source
                },
                n = new CE2.URL(t.baseUrl || CE2.d.baseURI);
            if (e && ("images" === r.source || e.indexOf("data:"))) {
                if (CE2.data.asset_collector_ignore)
                    for (var i = 0, s = CE2.data.asset_collector_ignore; i < s.length; i++) {
                        var o = s[i];
                        if (~e.indexOf(o)) return
                    }
                t = e;
                this.isBlobUrl(e) && (t = e.replace("blob:", "")), (t = !e.indexOf("data:") ? "".concat(CE2.w.location.protocol, "//").concat(CE2.w.location.host, "/data-urls/").concat(e.length) : t).indexOf("//") || (t = "".concat(n.protocol, ":").concat(t));
                t = new CE2.URL(t);
                (t = !t.host ? n.join(t) : t).normalize();
                n = t.getFullUrl();
                if (this.shouldRemoveAssetQueryString(t) && (n = "".concat(t.getOrigin()).concat(t.path)), ("http" === t.protocol || "https" === t.protocol) && !this.checkObserverCache(n)) return r.url = t.getFullUrl(), r.cacheKey = n, this.localUrl(r.url) && (r.local = !0, r.corsSafe = !0), r
            }
        },
        shouldRemoveAssetQueryString: function(e) {
            for (var t = 0, r = CE2.data.font_domains; t < r.length; t++) {
                var n = r[t];
                if (e.hostname === n) return !1
            }
            return !~e.getFullUrl().indexOf("??")
        },
        isBlobOrDataUrl: function(e) {
            return e && (!!~e.indexOf("blob:") || !!~e.indexOf("data:"))
        }
    }, CE2.V11TrackerHandlers || (CE2.V11TrackerHandlers = {}), CE2.V11TrackerHandlers.Visit = function(e) {
        this.tracker = e, this.isReturning = parseInt(CE2.cookieStorage.get(this.cookies.isReturning), 10) || 0, CE2.cookieStorage.set(this.cookies.isReturning, "1")
    }, CE2.V11TrackerHandlers.Visit.prototype = {
        cookies: {
            isReturning: "ir"
        },
        utmKeys: ["utm_source", "utm_medium", "utm_term", "utm_content", "utm_campaign"],
        trigger: function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.snapshotOnly,
                r = CE2.d,
                n = CE2.w,
                i = 0;
            !t && this.tracker.session && (i = this.tracker.session.numberVisits(), i += 1), this.calculatePageFingerprint();
            n = [r.referrer, !!this.isReturning, n.screen.width, n.screen.height, n.innerWidth || r.documentElement.clientWidth, n.innerHeight || r.documentElement.clientHeight, this.getGoogleCampaignData(), n.location.href, i, this.tracker.visitor.getNumVisits(), this.tracker.masked, this.tracker.pageFingerprint], n = this.tracker.newEvent(this.tracker.eventTypes.VISIT, {
                eventID: this.tracker.visitID,
                attributes: n
            });
            this.tracker.session && this.tracker.session.setNumberVisits(i), t ? this.tracker.sendImmediatelly(n, {
                flow: "s"
            }) : this.tracker.send(n), this.triggerPerformance(e)
        },
        triggerPerformance: function() {
            var t = this,
                r = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).snapshotOnly,
                e = CE2.w;
            this.performanceObserver && (this.performanceObserver.disconnect(), delete this.performanceObserver), this.performanceEvents = {}, e.performance && e.performance.getEntriesByType && (this.handlePerformanceEntries(e.performance.getEntriesByType("navigation"), r), this.handlePerformanceEntries(e.performance.getEntriesByType("paint"), r), "undefined" != typeof PerformanceObserver && (this.performanceObserver = new PerformanceObserver(function(e) {
                t.handlePerformanceEntries(e.getEntries(), r)
            }), this.performanceObserver.observe({
                entryTypes: ["navigation", "paint"]
            })))
        },
        getGoogleCampaignData: function() {
            var e, t = !1,
                r = [];
            if (e = new CE2.URL(window.location.href).qs)
                for (var n = 0, i = this.utmKeys; n < i.length; n++) {
                    var s = i[n];
                    e[s] ? (t = !0, r.push(e[s])) : r.push("")
                }
            return t ? r : []
        },
        handlePerformanceEntries: function() {
            var t = this,
                e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
                r = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
            this.tracker.isDocumentHiddenOnce || e.forEach(function(e) {
                "navigation" === e.entryType ? (e.domContentLoadedEventStart && t.sendPerformance(t.tracker.eventTypes.DOM_CONTENT_LOADED, e.domContentLoadedEventStart, r), e.domInteractive && t.sendPerformance(t.tracker.eventTypes.DOM_INTERACTIVE, e.domInteractive, r), e.loadEventStart && t.sendPerformance(t.tracker.eventTypes.PAGE_LOAD, e.loadEventStart, r)) : "first-contentful-paint" === e.name && t.sendPerformance(t.tracker.eventTypes.FIRST_CONTENTFUL_PAINT, e.startTime, r)
            })
        },
        sendPerformance: function(e, t) {
            var r, n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
            this.performanceEvents[e] || (r = [this.tracker.visitID, t], r = this.tracker.newEvent(e, {
                attributes: r
            }), n ? this.tracker.sendImmediatelly(r, {
                flow: "s"
            }) : this.tracker.send(r), this.performanceEvents[e] = !0)
        },
        calculatePageFingerprint: function() {
            delete this.tracker.pageFingerprint, delete this.tracker.pageFingerprintMd5, CE2.hasFeature("v11_adat_tracking") && CE2.w.CE_URL_FINGERPRINT && (this.tracker.pageFingerprint = CE2.w.CE_URL_FINGERPRINT(), this.tracker.pageFingerprint && (this.tracker.pageFingerprintMd5 = CE2.md5(this.tracker.pageFingerprint)))
        }
    }, CE2.V11TrackerHandlers || (CE2.V11TrackerHandlers = {}), CE2.V11TrackerHandlers.Click = function(e) {
        this.tracker = e, this.opaqueElement = null, this.lastClicked = null, this.ignoredElements = CE2.ignoredElements.concat(CE2.findByClass("-ce-ignore")), this.tracker.addEventListener("mousedown", CE2.bind(this, "onClick"));
        for (var t = 0, r = CE2.querySelectorAll("OBJECT, EMBED"); t < r.length; t++) {
            var n = r[t],
                i = CE2.fp.getBox(n);
            1 < i.width && 1 < i.height && (this.tracker.addEventListener("mouseover", CE2.bind(this, "onOver"), n), this.tracker.addEventListener("mouseout", CE2.bind(this, "onOut"), n))
        }
        for (var s = 0, o = CE2.querySelectorAll("FRAME, IFRAME"); s < o.length; s++) {
            var a, c = o[s];
            CE2.hasAccessToFrame(c) ? this.tracker.addEventListener("mousedown", CE2.bind(this, "onClickFrame"), CE2.ieVersion < 9 ? c.contentWindow.document : c.contentWindow) : 1 < (a = CE2.fp.getBox(c)).width && 1 < a.height && (this.tracker.addEventListener("mouseover", CE2.bind(this, "onOver"), c), this.tracker.addEventListener("mouseout", CE2.bind(this, "onOut"), c))
        }
        this.tracker.addEventListener("blur", CE2.bind(this, "onBlur")), this.tracker.addEventListener(CE2.opera ? "unload" : "beforeunload", CE2.bind(this, "onUnload"))
    }, CE2.V11TrackerHandlers.Click.prototype = {
        cleanup: function() {
            delete this.lastClicked, delete this.lastClickedTime, delete this.ignoredElements
        },
        onClick: function(e, t) {
            this.tracker.onActivity();
            var r, n = this.mouseButton(e);
            t ? (t = (r = CE2.eventWindow(e)).frameElement, this.click.apply(this, CE2BH.toConsumableArray([t].concat(CE2.eventCoords(e, r)).concat(n, e)))) : (r = e.srcElement || e.target, this.click(r, null, null, n, e))
        },
        onBlur: function() {
            var e = this.opaqueElement;
            e && e !== this.lastClicked && (this.click(e), this.opaqueElement = null)
        },
        onUnload: function() {
            var e = this.opaqueElement;
            e && this.isIgnored(e) && (this.click(e), this.opaqueElement = null)
        },
        onClickFrame: function(e) {
            this.onClick(e, !0)
        },
        onOver: function(e) {
            e = e.srcElement || e.target;
            this.isIgnored(e) || (this.opaqueElement = e)
        },
        onOut: function(e) {
            this.isIgnored(e.srcElement || e.target) || (this.opaqueElement = null)
        },
        click: function(e, t, r, n, i) {
            var s;
            this.isTopLevelElement(e) || this.isIgnored(e) || (e = this.tracker.getElementToRecord(e), CE2.isVML(e) || (s = this.tracker.getFingerprint(e), "l" === ((r = this.getClickPosition(t, r, s, i)).button = n) && (n = this.isClickableElement(e), r.clickType = this.getClickType(i, e, n), n && CE2.matchesSelector(e, "form *") && (this.lastSubmitClicked = +new Date)), this.lastClicked = e, r = [this.tracker.visitID].concat(CE2BH.toConsumableArray(this.tracker.getFingerprintAttributes(s)), [r.x, r.y, r.button, r.pageX, r.pageY, r.clickType]), r = this.tracker.newEvent(this.tracker.eventTypes.CLICK, {
                attributes: r
            }), this.tracker.send(r)))
        },
        getClickPosition: function(e, t, r, n) {
            var i, s = {
                x: e || 0,
                y: t || 0,
                pageX: 0,
                pageY: 0
            };
            return n && (n.srcElement || n.target) ? (e || (i = CE2.eventCoords(n), s.x = i[0] - r.pageX, s.y = i[1] - r.pageY), s.pageX = n.pageX, s.pageY = n.pageY) : e && t ? (s.x = e, s.y = t) : n || (s.x = s.pageX = r.width / 2, s.y = s.pageY = r.height / 2), s
        },
        getClickType: function(e, t, r) {
            var n = "";
            if (r || (n += "d"), this.rageClick(e, t, r) && (n += "r"), r && this.authenticationButton(t) && (n += "a"), n) return n
        },
        rageClick: function(e, t, r) {
            if (e.timeStamp === this.lastEventTimeStamp) return this.lastRageValue;
            var n, i = !1;
            return 2 < e.detail ? i = !0 : this.lastClickedTime && (n = +new Date - this.lastClickedTime, (r && this.lastClicked === t && 2 !== e.detail || !r) && n < 3e3 && (i = !0)), this.lastClickedTime = +new Date, this.lastEventTimeStamp = e.timeStamp, this.lastRageValue = i
        },
        authenticationButton: function(t) {
            if (t.innerText) {
                var r = t.innerText.trim().toLowerCase();
                return ["sign in with", "register with", "authorize", "join with"].some(function(e) {
                    return RegExp("^".concat(e)).test(r)
                }) ? !0 : ["sign in", "signin", "signup", "sign up", "register", "login", "create account", "register account", "join", "join us"].some(function(e) {
                    return e === t.innerText.trim().toLowerCase()
                })
            }
        },
        isClickableElement: function(e) {
            if (CE2.matchesSelector(e, "a,a *,button,button *,input[type=button],input[type=submit],input[type=reset]")) return !0;
            e = getComputedStyle(e);
            return "pointer" === e.cursor || "text" === e.cursor || "underline" === e.textDecoration
        },
        mouseButton: function(e) {
            var t = CE2.ieVersion && (CE2.ieVersion < 9 || CE2.ieQuirksMode) ? {
                1: "l",
                2: "r",
                4: "m"
            } : {
                0: "l",
                1: "m",
                2: "r"
            };
            return t[e.button]
        },
        isTopLevelElement: function(e) {
            return e === document || e === document.body || e === document.documentElement
        },
        isIgnored: function(e) {
            return CE2.arrayContains(this.ignoredElements, e)
        }
    }, CE2.V11TrackerHandlers || (CE2.V11TrackerHandlers = {}), CE2.V11TrackerHandlers.Scroll = function(e) {
        this.tracker = e, this.scrollTracker = new CE2.ScrollTracker, this.trackScrollInterval = setInterval(CE2.bind(this, "trackScroll"), 100), this.foundAnchorBind = CE2.bind(this, "foundAnchor")
    }, CE2.V11TrackerHandlers.Scroll.prototype = {
        cleanup: function() {
            clearInterval(this.trackScrollInterval), delete this.scrollTracker, delete this.foundAnchorBind
        },
        trackScroll: function() {
            var e = CE2.fp.scroll();
            this.scrollTracker.shouldRecordScroll(e) && this.scrollTracker.findAnchor(e, this.foundAnchorBind)
        },
        foundAnchor: function(e, t) {
            var r, n, i = e.top,
                s = e.height;
            t && (t = this.tracker.getElementToRecord(t), r = this.tracker.getFingerprint(t), n = e.top - r.pageY, o = e.top + e.height - r.pageY);
            var o = [this.tracker.visitID].concat(CE2BH.toConsumableArray(this.tracker.getFingerprintAttributes(r)), [i, s, n, o]),
                o = this.tracker.newEvent(this.tracker.eventTypes.SCROLL, {
                    attributes: o
                });
            this.tracker.send(o)
        }
    }, CE2.V11TrackerHandlers || (CE2.V11TrackerHandlers = {}), CE2.V11TrackerHandlers.SessionScroll = function(e) {
        this.tracker = e, this.scrolls = [], this.calculateInitialScrolls(), this.tracker.addEventListener("scroll", CE2.bind(this, "onScroll")), this.tracker.addDiffCallback(CE2.bind(this, "diff"))
    }, CE2.V11TrackerHandlers.SessionScroll.prototype = {
        onScroll: function(e) {
            var t = e.target;
            this.tracker.onActivity(), t === CE2.d && (t = CE2.d.scrollingElement), (n = t.selector) && (1 === (r = document.querySelectorAll(n)).length && r[0] === t || (n = void 0));
            var r, n = n || (t.selector = CE2.selector(t)),
                e = this.scrolls.find(function(e) {
                    return e[0] === n
                });
            e ? (e = (r = e[1])[r.length - 1], +new Date - e[2] > this.tracker.SAMPLE_INTERVAL ? r.push(this.recordScrollOfElement(t)) : (e[0] = t.scrollTop, e[1] = t.scrollLeft)) : this.scrolls.push([n, [this.recordScrollOfElement(t)]])
        },
        recordScrollOfElement: function(e) {
            return [e.scrollTop, e.scrollLeft, +new Date]
        },
        diff: function() {
            try {
                var e, t;
                0 < this.scrolls.length && (e = [this.tracker.visitID, this.scrolls], t = this.tracker.newEvent(this.tracker.eventTypes.SESSION_SCROLL, {
                    attributes: e
                }), this.tracker.send(t), this.scrolls = [])
            } catch (e) {
                CE2.debug(e)
            }
        },
        calculateInitialScrolls: function() {
            for (var e = CE2.d.querySelectorAll("html, body, body *"), t = 0; t < e.length; t++) {
                var r = e[t];
                (r.scrollTop || r.scrollLeft) && (r.selector = CE2.selector(r), this.scrolls.push([r.selector, [this.recordScrollOfElement(r)]]))
            }
            this.diff()
        }
    }, CE2.V11TrackerHandlers || (CE2.V11TrackerHandlers = {}), CE2.V11TrackerHandlers.SessionMetadata = function(e) {
        this.tracker = e;
        e = CE2.ratioForSite(e.site);
        CE2.isNaN(e) || (this.siteRatio = e)
    }, CE2.V11TrackerHandlers.SessionMetadata.prototype = {
        trigger: function() {
            CE2.IDENTIFIER && this.tracker.identify(CE2.IDENTIFIER);
            var e = CE2.isBot(!0);
            if (CE2.hasFeature("v11_disable_bot_detection") && e && (this.tracker.addTag("bot"), CE2.w.serverLog && this.tracker.visitor && this.tracker.session)) try {
                CE2.w.serverLog({
                    id: this.tracker.visitor.getId(),
                    value: "sessionid:".concat(this.tracker.session.id, ", bot:").concat(e)
                })
            } catch (e) {
                CE2.debug("error logging bot reason: ".concat(e.message))
            }
            0 < Object.keys(CE2.userData).length && this.tracker.sendCustomUserData(), 0 < CE2.sessionTags.length && this.tracker.addTag(CE2.sessionTags), CE2.appliedStrategy && this.siteRatio && this.sendSessionRatio()
        },
        sendSessionRatio: function() {
            var e = [this.siteRatio, CE2.appliedStrategy],
                e = this.tracker.newEvent(this.tracker.eventTypes.SESSION_RATIO, {
                    attributes: e
                });
            this.tracker.send(e)
        }
    }, CE2.V11TrackerHandlers || (CE2.V11TrackerHandlers = {}), CE2.V11TrackerHandlers.MouseMovement = function(e) {
        this.tracker = e, this.mousePos = null, this.mousePositions = [], this.tracker.addEventListener("mousemove", CE2.bind(this, "mousemove")), this.tracker.addEventListener("mouseup", CE2.bind(this, "mouseup")), this.tracker.addEventListener("mousedown", CE2.bind(this, "mousedown")), this.tracker.addSampleCallback(CE2.bind(this, "sample")), this.tracker.addDiffCallback(CE2.bind(this, "diff"))
    }, CE2.V11TrackerHandlers.MouseMovement.prototype = {
        mouseEventTypes: {
            movement: "m",
            mouseup: "u",
            mousedown: "d"
        },
        cleanup: function() {},
        mousedown: function(e) {
            e && (this.tracker.onActivity(), (e = this.buildMouseEvent(e, this.mouseEventTypes.mousedown)) && (this.mousePos = e, this.sample()))
        },
        mouseup: function(e) {
            e && (this.tracker.onActivity(), (e = this.buildMouseEvent(e, this.mouseEventTypes.mouseup)) && (this.mousePos = e, this.sample()))
        },
        mousemove: function(e) {
            e && (this.tracker.onActivity(), (e = this.buildMouseEvent(e, this.mouseEventTypes.movement)) && (this.mousePos = e))
        },
        sample: function() {
            try {
                var e, t, r = this.mousePos;
                r && ((e = this.mousePositions[this.mousePositions.length - 1]) && CE2.equalObjects(r.fingerprint, e.fingerprint) ? (t = r.movements[0], this.mousePositions[this.mousePositions.length - 1].movements.push(t)) : this.mousePositions.push(r), delete this.mousePos)
            } catch (e) {
                CE2.debug(e)
            }
        },
        diff: function() {
            try {
                if (0 < this.mousePositions.length) {
                    for (var e = [], t = 0, r = this.mousePositions; t < r.length; t++) {
                        for (var n = r[t], i = [], s = 0, o = n.movements; s < o.length; s++) {
                            var a = o[s],
                                c = void 0;
                            "m" === a.type ? c = [a.relativeX, a.relativeY, a.timestamp, a.pageX, a.pageY, a.type] : "u" !== a.type && "d" !== a.type || (c = [a.relativeX, a.relativeY, a.timestamp, a.pageX, a.pageY, a.type, a.button, a.clickType]), i.push(c)
                        }
                        var l = [].concat(CE2BH.toConsumableArray(this.tracker.getFingerprintAttributes(n.fingerprint)), [n.movements.length, i]);
                        e.push(l)
                    }
                    var u = [this.tracker.visitID, "v1", e],
                        h = this.tracker.newEvent(this.tracker.eventTypes.MOUSE_MOVEMENT, {
                            attributes: u
                        });
                    this.tracker.send(h), this.mousePositions = []
                }
            } catch (e) {
                CE2.debug(e)
            }
        },
        buildMouseEvent: function(e, t) {
            try {
                if (t === this.mouseEventTypes.mousedown || t === this.mouseEventTypes.mouseup) {
                    var r, n, i = this.lastPosition.fp,
                        s = CE2.assign({}, this.lastPosition.movementData, {
                            type: t,
                            timestamp: +new Date
                        }),
                        o = this.tracker.eventHandlers.click.mouseButton(e);
                    return "l" === (s.button = o) && t === this.mouseEventTypes.mousedown && (r = e.target, n = this.tracker.eventHandlers.click.isClickableElement(r), s.clickType = this.tracker.eventHandlers.click.getClickType(e, r, n)), {
                        fingerprint: i,
                        movements: [s]
                    }
                }
                var a = document.elementFromPoint(e.clientX, e.clientY);
                if (a && a.getBoundingClientRect) {
                    var c = a.getBoundingClientRect(),
                        l = this.tracker.getFingerprint(a),
                        u = e.clientX - (c.x || c.left),
                        h = e.clientY - (c.y || c.top),
                        d = (u / c.width * 100).toFixed(4),
                        p = (h / c.height * 100).toFixed(4),
                        f = e.pageX || 0,
                        g = e.pageY || 0,
                        m = {
                            relativeX: d,
                            relativeY: p,
                            timestamp: +new Date,
                            pageX: f,
                            pageY: g,
                            type: t
                        };
                    return this.lastPosition = {
                        fp: l,
                        movementData: m
                    }, {
                        fingerprint: l,
                        movements: [m]
                    }
                }
            } catch (e) {
                CE2.debug(e)
            }
        }
    }, CE2.V11TrackerHandlers || (CE2.V11TrackerHandlers = {}), CE2.V11TrackerHandlers.Resize = function(e) {
        this.tracker = e, this.browserSizes = [], this.tracker.addSampleCallback(CE2.bind(this, "sample")), this.tracker.addDiffCallback(CE2.bind(this, "diff"))
    }, CE2.V11TrackerHandlers.Resize.prototype = {
        sample: function() {
            try {
                var e = CE2.w,
                    t = e.innerWidth || e.screen.availWidth,
                    r = e.innerHeight || e.screen.availHeight,
                    n = this.lastBrowserSize;
                if (n && n[0] === t && n[1] === r) return;
                if (CE2.isFacebookInAppBrowser() && n && n[0] === t && n[1] !== r) return;
                this.lastBrowserSize = [t, r, +new Date], this.browserSizes.push(this.lastBrowserSize)
            } catch (e) {
                CE2.debug(e)
            }
        },
        diff: function() {
            try {
                var e, t;
                0 < this.browserSizes.length && (e = [this.tracker.visitID, this.browserSizes], t = this.tracker.newEvent(this.tracker.eventTypes.RESIZE, {
                    attributes: e
                }), this.tracker.send(t), this.browserSizes = [])
            } catch (e) {
                CE2.debug(e)
            }
        }
    }, CE2.V11TrackerHandlers || (CE2.V11TrackerHandlers = {}), CE2.V11TrackerHandlers.PageState = function(e) {
        this.tracker = e;
        try {
            CE2.hasFeature("v11_canvas_tracking") && CE2.Canvas.track(), CE2.pageState.startCapture(this.tracker, this.tracker.censoredElements, this.tracker.hideIframes)
        } catch (e) {
            this.tracker.pageStateError(e)
        }
    }, CE2.V11TrackerHandlers.PageState.prototype = {
        update: function(e) {
            if (this.prevMd5 = null, e) {
                CE2.pageState.stopCapture();
                try {
                    CE2.pageState.startCapture(this.tracker, this.tracker.censoredElements, this.tracker.hideIframes)
                } catch (e) {
                    this.tracker.pageStateError(e)
                }
            }
        },
        cleanup: function() {
            CE2.pageState.stopCapture()
        },
        trigger: function(e, t, r, n, i) {
            this.prevMd5 !== r && (t = [i || this.tracker.visitID, e, r, t], t = this.tracker.newEvent(this.tracker.eventTypes.PAGE_STATE, {
                timestamp: n,
                attributes: t
            }), this.tracker.send(t, {
                timestamp: n
            }), this.prevMd5 = r)
        }
    }, CE2.parseErrorStack = function() {
        var i = "<unknown>";
        var s = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
            o = /\((\S*)(?::(\d+))(?::(\d+))\)/;
        var r = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;
        var n = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,
            a = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;
        var c = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;
        var l = /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;
        return function(e) {
            return e.split("\n").reduce(function(e, t) {
                t = function(e) {
                    var t = s.exec(e);
                    if (!t) return null;
                    var r = t[2] && 0 == t[2].indexOf("native"),
                        n = t[2] && 0 == t[2].indexOf("eval"),
                        e = o.exec(t[2]);
                    n && null != e && (t[2] = e[1], t[3] = e[2], t[4] = e[3]);
                    return {
                        file: r ? null : t[2],
                        methodName: t[1] || i,
                        arguments: r ? [t[2]] : [],
                        lineNumber: t[3] ? +t[3] : null,
                        column: t[4] ? +t[4] : null
                    }
                }(t) || function(e) {
                    e = r.exec(e);
                    return e ? {
                        file: e[2],
                        methodName: e[1] || i,
                        arguments: [],
                        lineNumber: +e[3],
                        column: e[4] ? +e[4] : null
                    } : null
                }(t) || function(e) {
                    var t = n.exec(e);
                    if (!t) return null;
                    var r = t[3] && !!~t[3].indexOf(" > eval"),
                        e = a.exec(t[3]);
                    r && null != e && (t[3] = e[1], t[4] = e[2], t[5] = null);
                    return {
                        file: t[3],
                        methodName: t[1] || i,
                        arguments: t[2] ? t[2].split(",") : [],
                        lineNumber: t[4] ? +t[4] : null,
                        column: t[5] ? +t[5] : null
                    }
                }(t) || function(e) {
                    e = l.exec(e);
                    return e ? {
                        file: e[2],
                        methodName: e[1] || i,
                        arguments: [],
                        lineNumber: +e[3],
                        column: e[4] ? +e[4] : null
                    } : null
                }(t) || function(e) {
                    e = c.exec(e);
                    return e ? {
                        file: e[3],
                        methodName: e[1] || i,
                        arguments: [],
                        lineNumber: +e[4],
                        column: e[5] ? +e[5] : null
                    } : null
                }(t);
                return t && e.push(t), e
            }, [])
        }
    }(), CE2.V11TrackerHandlers || (CE2.V11TrackerHandlers = {}), CE2.V11TrackerHandlers.Error = function(e) {
        this.tracker = e, this.setupCache(), "object" === ("undefined" == typeof CE_ERROR_TRACKING_CONFIG ? "undefined" : CE2BH.typeof(CE_ERROR_TRACKING_CONFIG)) ? (CE_ERROR_TRACKING_CONFIG.fingerprint && (this.fingerprint = CE_ERROR_TRACKING_CONFIG.fingerprint), CE_ERROR_TRACKING_CONFIG.app_version && (this.appVersion = CE_ERROR_TRACKING_CONFIG.app_version)) : this.fingerprint = function(e, t) {
            var r = [];
            return t.appVersion && r.push("(".concat(t.appVersion, ")")), r.push("".concat(t.name)), t.file && r.push("[".concat(t.file, ":").concat(t.lineno, ":").concat(t.colno, "]")), r.join(" ")
        }, this.tracker.addEventListener("error", CE2.bind(this, "onError")), this.tracker.addEventListener("unhandledrejection", CE2.bind(this, "onError"))
    }, CE2.V11TrackerHandlers.Error.prototype = {
        update: function() {
            this.setupCache()
        },
        onError: function(t) {
            try {
                var e = "Script error." === t.message ? this.buildBaseError(t, t.reason, null, "CrossOrigin Error") : t.error ? this.buildBaseError(t, t.error) : t.promise ? this.buildBaseError(t, t.reason, "UnhandledPromise ->") : this.buildBaseError(t);
                if (this.cache.test(e.fingerprint)) return;
                var r = [this.tracker.visitID, e.name, e.message, e.filename, e.lineno, e.colno, e.stack, e.appVersion, e.fingerprint, e.url, e.uuid],
                    n = this.tracker.newEvent(this.tracker.eventTypes.ERROR, {
                        attributes: r
                    });
                this.tracker.send(n), this.cache.add(e.fingerprint)
            } catch (e) {
                CE2.debug(e), CE2.debug(t)
            }
        },
        setupCache: function() {
            this.cache = new CE2.BloomFilter(8192, 16)
        },
        buildBaseError: function(e, t, r) {
            var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
                n = CE2BH.extends(CE2BH.extends({}, this.parseErrorFileAttributes(e, t)), this.parseErrorMessageAttributes(e, t, n));
            return n.uuid = CE2.uuid_v1(), n.appVersion = this.appVersion, n.url = CE2.w.location.href, n.name = r ? "".concat(r, " ").concat(n.name) : n.name, n.fingerprint = this.fingerprint(e, n), n
        },
        parseErrorFileAttributes: function(e, t) {
            var r = {};
            if (e.filename) r = {
                filename: e.filename,
                lineno: e.lineno,
                colno: e.colno,
                stack: t && t.stack && t.stack.toString()
            };
            else if (t && t.stack) try {
                var n = CE2.parseErrorStack(t.stack);
                1 <= n.length && (r = {
                    filename: n[0].file,
                    lineno: n[0].lineNumber,
                    colno: n[0].column,
                    stack: t.stack.toString()
                })
            } catch (e) {
                CE2.debug(e)
            }
            return r.filename && r.filename.indexOf("blob:") && (this.isValidFileUrl(r.filename) ? (n = new CE2.URL(r.filename), t = new CE2.URL(CE2.w.location.href), n.path !== t.path && (t = n.path, "/" !== n.path && "/" === n.path[n.path.length - 1] && (t = n.path.slice(0, n.path.length - 1)), r.file = "/" !== t ? t.split("/").pop() : t)) : r.file = "unknown"), r
        },
        parseErrorMessageAttributes: function(e, t) {
            var r, n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
                i = {};
            return t && t.message ? (r = t.message.replace(/^Uncaught /, ""), i.message = t.name ? "".concat(t.name, ": ").concat(r) : r) : t ? i.message = t : e.message ? i.message = e.message.replace(/^Uncaught /, "") : e.target && (r = ["Error on"], e.target.tagName && r.push(e.target.tagName), e.target.src && r.push(e.target.src), i.message = r.join(" "), i.name = "Unknown Resource Error"), i.message || (i.message = "Unknown Error"), n ? i.name = n : i.name || (i.name = CE2.truncateOnWords(i.message)), i
        },
        isValidFileUrl: function(e) {
            try {
                if (window.URL) return !!new window.URL(e)
            } catch (e) {
                CE2.debug(e)
            }
        }
    }, CE2.V11TrackerHandlers || (CE2.V11TrackerHandlers = {}), CE2.V11TrackerHandlers.Activity = function(e) {
        this.tracker = e, this.trigger()
    }, CE2.V11TrackerHandlers.Activity.prototype = {
        INACTIVE_TIME_LIMIT: 9e4,
        update: function() {
            this.trigger()
        },
        trigger: function() {
            var e, t = +new Date;
            !this.lastActive || (e = t - this.lastActive) > this.INACTIVE_TIME_LIMIT && (e = [this.tracker.visitID, e], e = this.tracker.newEvent(this.tracker.eventTypes.INACTIVE, {
                attributes: e
            }), this.tracker.send(e, {
                timestamp: this.lastActive
            })), this.lastActive = t, this.tracker.session.alive()
        }
    }, CE2.V11TrackerHandlers || (CE2.V11TrackerHandlers = {}), CE2.V11TrackerHandlers.Typing = function(e) {
        this.tracker = e, this.tracker.addEventListener("keydown", CE2.bind(this, "onKeydown"))
    }, CE2.V11TrackerHandlers.Typing.prototype = {
        LIMIT_BETWEEN_TYPE_EVENTS: 6e4,
        update: function() {
            delete this.formEntry
        },
        onKeydown: function(e) {
            this.tracker.onActivity();
            var t, r = e.target,
                n = +new Date;
            !CE2.matchesSelector(r, "input, [contenteditable]") || "INPUT" === r.tagName && ["submit", "reset", "button"].some(function(e) {
                return e === r.type && r.type.toLowerCase()
            }) || !(this.lastTypedElement !== r || this.lastTypedTime - n > this.LIMIT_BETWEEN_TYPE_EVENTS) || (t = CE2.matchesSelector(r, "form *"), e = [this.tracker.visitID, t], e = this.tracker.newEvent(this.tracker.eventTypes.TYPING, {
                attributes: e
            }), this.tracker.send(e), t && (this.formEntry = n)), this.lastTypedElement = r, this.lastTypedTime = r
        }
    }, CE2.V11TrackerHandlers || (CE2.V11TrackerHandlers = {}), CE2.V11TrackerHandlers.Visibility = function(e) {
        this.tracker = e, this.tracker.addEventListener("visibilitychange", CE2.bind(this, "onVisibilitychange"))
    }, CE2.V11TrackerHandlers.Visibility.prototype = {
        onVisibilitychange: function() {
            var e = !document.hidden;
            this.tracker.isDocumentHiddenOnce || (this.tracker.isDocumentHiddenOnce = document.hidden), this.pageVisibility !== e && (this.pageVisibility = e, e = [this.tracker.visitID, e], e = this.tracker.newEvent(this.tracker.eventTypes.PAGE_VISIBILITY, {
                attributes: e
            }), this.tracker.send(e), this.tracker.processBuffer())
        }
    }, CE2.V11Visitor = function() {
        function r(e) {
            CE2.cookieStorage.del(e)
        }
        var n, i, s;
        return {
            getId: function() {
                return n
            },
            getStoredId: function() {
                return i
            },
            getNumVisits: function() {
                return s
            },
            load: function() {
                var e, t;
                i = CE2.cookieStorage.get("v"), window.CE_VISITOR_ID ? (n = window.CE_VISITOR_ID, s = CE2.cookieStorage.get("vv") || 0, i && window.CE_VISITOR_ID !== i && (r("v"), r("vv"))) : s = i ? (n = i, CE2.cookieStorage.get("vv") || 0) : CE2.cookies["_cer.v"] ? (e = CE2.cookies["_cer.v"].split("."), t = CE2BH.slicedToArray(e, 1), n = t[0], e[2] ? parseInt(e[2], 36) : 0) : (n = CE2.makeId(), 0)
            },
            incVisit: function() {
                s++
            },
            store: function() {
                CE2.cookieStorage.set("v", n), CE2.cookieStorage.set("vv", s)
            }
        }
    }, CE2.V11Tracker = function(e, t, r, n, i, s, o) {
        this.snapshotId = r, this.session = n, this.censoredElements = i, this.hideIframes = o && o.recordingSettings && o.recordingSettings.hideIframes, this.trackerVersion = e, this.version = t, this.clickCaptors = CE2.clickCaptors.concat(CE2.findByClass("-ce-capture")), this.trackURL = s || CE2.data.v11_tracking_dest, this.visitor = CE2.V11Visitor(), this.site = o || {}, this.masked = !1, this.bufferQueue = [], this.bufferQueueTimeout, this.sampleCallbacks = [], this.diffCallbacks = [], this.cookies = {
            lastSession: "v11ls"
        }, CE2.cookieStorage.get(this.cookies.lastSession) !== (this.session && this.session.id) && this.resetSessionTracking(), this.setVisitIDs(), this.session && this.site.recordingSettings && CE2.matchURLRules(this.site.recordingSettings.blockedRules) && (CE2.debug("Session page masked"), this.masked = !0), this.setupEventHandlers(), this.isDocumentHiddenOnce = document.hidden, this.eventHandlers.visit.trigger(), this.session && (this.eventHandlers.sessionmetadata.trigger(), this.assetsTracker = new CE2.V11AssetsTracker(this), this.assetsTracker.setup(), this.session.isNew && this.session.store(!0), "function" == typeof CE_SESSION_READY && CE_SESSION_READY(this.session)), this.processBuffer(!0)
    }, CE2.V11Tracker.prototype = {
        DIFF_INTERVAL: 750,
        SAMPLE_INTERVAL: 100,
        eventTypes: {
            VISIT: 1,
            CLICK: 2,
            SCROLL: 3,
            MOUSE_MOVEMENT: 4,
            PAGE_STATE: 5,
            RESIZE: 6,
            SESSION_SCROLL: 7,
            ERROR: 8,
            PAGE_LOAD: 9,
            INACTIVE: 10,
            TYPING: 11,
            CUSTOM: 12,
            PAGE_VISIBILITY: 13,
            DOM_CONTENT_LOADED: 14,
            FIRST_CONTENTFUL_PAINT: 15,
            DOM_INTERACTIVE: 16,
            IDENTIFY: 17,
            CUSTOM_USER_DATA: 18,
            TAG: 19,
            SESSION_RATIO: 20,
            VALID_SESSION: 21,
            END_SESSION: 22
        },
        resetSessionTracking: function() {
            CE2.cookieStorage.set(this.cookies.lastSession, this.session && this.session.id)
        },
        update: function(e, t, r) {
            this.abandonedFormCheck(), this.snapshotId = e;
            var n = this.session !== t;
            if (this.session = t, r) {
                for (var i in this.setVisitIDs(), this.eventHandlers) !Object.prototype.hasOwnProperty.call(this.eventHandlers, i) || (i = this.eventHandlers[i]).update && i.update(n);
                this.eventHandlers.visit.trigger()
            } else e && this.eventHandlers.visit.trigger({
                snapshotOnly: !0
            })
        },
        makeId: function() {
            return CE2.makeId(0, 1)
        },
        setVisitIDs: function() {
            this.visitID = this.makeId(), this.visitor.load(), this.visitor.getId() && this.visitor.getStoredId() && this.visitor.getId() !== this.visitor.getStoredId() && this.resetSessionTracking(), this.visitorID = this.visitor.getId(), this.visitor.incVisit(), this.visitor.store()
        },
        abandonedFormCheck: function() {
            this.eventHandlers.typing && this.eventHandlers.typing.formEntry && this.eventHandlers.click.lastSubmitClicked && (this.eventHandlers.click.lastSubmitClicked, this.formEntry)
        },
        identify: function(e) {
            this.session && (e = this.newEvent(this.eventTypes.IDENTIFY, {
                attributes: [e]
            }), this.send(e))
        },
        sendCustomUserData: function() {
            var e = [CE2.userData[1], CE2.userData[2], CE2.userData[3], CE2.userData[4], CE2.userData[5]],
                e = this.newEvent(this.eventTypes.CUSTOM_USER_DATA, {
                    attributes: e
                });
            this.send(e)
        },
        sendTag: function(e) {
            this.session && e && (e = this.newEvent(this.eventTypes.TAG, {
                attributes: [e]
            }), this.send(e))
        },
        addTag: function(e) {
            if (Array.isArray(e))
                for (var t = 0; t < e.length; t++) {
                    var r = e[t];
                    this.sendTag(r)
                } else this.sendTag(e)
        },
        onActivity: function() {
            this.eventHandlers.activity && this.eventHandlers.activity.trigger()
        },
        setupEventHandlers: function() {
            this.addEventListener(CE2.opera ? "unload" : "beforeunload", CE2.bind(this, "onUnload")), this.addEventListener("pagehide", CE2.bind(this, "onPageHide")), this.eventHandlers = {
                visit: new CE2.V11TrackerHandlers.Visit(this),
                click: new CE2.V11TrackerHandlers.Click(this),
                scroll: new CE2.V11TrackerHandlers.Scroll(this)
            }, this.session && (this.eventHandlers.sessionscroll = new CE2.V11TrackerHandlers.SessionScroll(this), this.eventHandlers.sessionmetadata = new CE2.V11TrackerHandlers.SessionMetadata(this), this.eventHandlers.mousemovement = new CE2.V11TrackerHandlers.MouseMovement(this), this.eventHandlers.resize = new CE2.V11TrackerHandlers.Resize(this), this.eventHandlers.activity = new CE2.V11TrackerHandlers.Activity(this), this.eventHandlers.error = new CE2.V11TrackerHandlers.Error(this), this.masked || (this.eventHandlers.pageState = new CE2.V11TrackerHandlers.PageState(this), this.eventHandlers.typing = new CE2.V11TrackerHandlers.Typing(this), this.eventHandlers.visibility = new CE2.V11TrackerHandlers.Visibility(this)), this.runSampleCallbacks(), this.runDiffCallbacks())
        },
        addEventListener: function(e, t) {
            var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : window;
            this.eventsTargets || (this.eventsTargets = new CE2.Map);
            var n = this.eventsTargets.get(r);
            n || (n = new CE2.Map, this.eventsTargets.put(r, n));
            var i = n.get(e);
            i || (n.put(e, i = {
                hooks: [],
                handler: function() {
                    for (var e = 0, t = i.hooks; e < t.length; e++) t[e].apply(void 0, arguments)
                }
            }), CE2.listen(r, e, i.handler)), i.hooks.push(t)
        },
        addSampleCallback: function(e) {
            this.sampleCallbacks.push(e)
        },
        addDiffCallback: function(e) {
            this.diffCallbacks.push(e)
        },
        runSampleCallbacks: function() {
            var e = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
            if (this.runSampleCallbacksBind)
                for (var t = 0, r = this.sampleCallbacks; t < r.length; t++)(0, r[t])();
            else this.runSampleCallbacksBind = CE2.bind(this, "runSampleCallbacks");
            e && (this.sampleTimeout = setTimeout(this.runSampleCallbacksBind, this.SAMPLE_INTERVAL))
        },
        runDiffCallbacks: function() {
            var e = !(0 < arguments.length && void 0 !== arguments[0]) || arguments[0];
            if (this.runDiffCallbacksBind)
                for (var t = 0, r = this.diffCallbacks; t < r.length; t++)(0, r[t])();
            else this.runDiffCallbacksBind = CE2.bind(this, "runDiffCallbacks");
            e && (this.diffTimeout = setTimeout(this.runDiffCallbacksBind, this.DIFF_INTERVAL))
        },
        cleanup: function() {
            for (var e in this.processBuffer(), this.bufferQueueTimeout && clearTimeout(this.bufferQueueTimeout), this.session && (clearTimeout(this.sampleTimeout), clearTimeout(this.diffTimeout), this.assetsTracker && this.assetsTracker.cleanup()), this.eventHandlers) !Object.prototype.hasOwnProperty.call(this.eventHandlers, e) || (e = this.eventHandlers[e]).cleanup && e.cleanup();
            for (var t = 0, r = this.eventsTargets.keys(); t < r.length; t++)
                for (var n = r[t], i = 0, s = this.eventsTargets.get(n).keys(); i < s.length; i++)
                    for (var o = s[i], a = 0, c = this.eventsTargets.get(n).get(o); a < c.length; a++) {
                        var l = c[a];
                        CE2.removeListener(n, o, l)
                    }
            delete this.eventsTargets
        },
        pageState: function(e, t, r, n, i) {
            this.eventHandlers.pageState && this.eventHandlers.pageState.trigger(e, t, r, n, i)
        },
        pageStateErrorCallback: function(e) {
            try {
                CE2.debug(e), "function" == typeof CE_PAGE_STATE_ERROR && window.CE_PAGE_STATE_ERROR(CE2.data.uid, this.session.id, e)
            } catch (e) {
                CE2.debug("Page State Error callback failure: ".concat(e))
            }
        },
        pageStateError: function(e) {
            CE2.debug("Page state error"), this.pageStateErrorCallback(e)
        },
        newEvent: function(e) {
            for (var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, r = t.attributes || [], n = 0; n < r.length; n++) void 0 === r[n] && (r[n] = "");
            var i = [t.eventID || this.makeId(), this.visitorID, e, this.version, t.timestamp || +new Date, r],
                t = this.getUserData();
            return 0 < t.length && i.push(t), i
        },
        getUserData: function() {
            var r = [],
                n = CE2.userData;
            return CE2.each([1, 2, 3, 4, 5], function(e) {
                var t = n[e];
                void 0 !== t && r.push("" + e, t)
            }), r
        },
        getElementToRecord: function(e) {
            var t;
            return e = "OPTION" === (e = (e = (t = CE2.arrayContains(this.clickCaptors, e)) ? t : e).ownerSVGElement ? e.ownerSVGElement : e).nodeName ? e.parentNode : e
        },
        customEvent: function(e, t) {
            t = [this.visitID, e, t], t = this.newEvent(this.eventTypes.CUSTOM, {
                attributes: t
            });
            this.send(t)
        },
        getFingerprint: function(e) {
            return new CE2.fp.fingerprint2(e)
        },
        send: function(e) {
            if (!this.resetting) return this.session && this.session.isExpiredCheck() ? (this.resetting = !0, CE2.debug("Session expired due to inactivity"), this.session.reset(), void CE2.resetTracker()) : void this.bufferQueue.push(e)
        },
        sendImmediatelly: function(e) {
            CE2.post.send(this.url(1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}), CE2.JSON.stringify(e), {
                sendBeacon: !0
            })
        },
        processBuffer: function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
            do {
                var t = this.bufferQueue.splice(0, 10);
                if (t.length) {
                    for (var r = [], n = 0; n < t.length; n++) {
                        var i = t[n];
                        r.push(CE2.JSON.stringify(i))
                    }
                    CE2.post.send(this.url(), r.join("\n"), {
                        sendBeacon: !0
                    })
                }
            } while (this.bufferQueue.length);
            var s = CE2.bind(this, "processBuffer");
            e && (this.bufferQueueTimeout = setTimeout(function() {
                s(e)
            }, 2e3))
        },
        url: function() {
            var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
                t = [];
            return this.snapshotId && t.push("s=".concat(encodeURIComponent(this.snapshotId))), e.flow && t.push("f=".concat(encodeURIComponent(e.flow))), this.session && (t.push("u=".concat(encodeURIComponent(CE2.data.uid))), t.push("ss=".concat(encodeURIComponent(this.session.id))), t.push("st=".concat(encodeURIComponent(this.site.id)))), this.pageFingerprintMd5 && t.push("p=".concat(encodeURIComponent(this.pageFingerprintMd5))), "".concat(this.trackURL, "?").concat(t.join("&"))
        },
        onPageHide: function() {
            this.onActivity(), this.session && this.runDiffCallbacks(!1), this.processBuffer()
        },
        onUnload: function() {
            this.abandonedFormCheck(), this.session && (this.send(this.newEvent(this.eventTypes.END_SESSION)), this.session.end()), this.processBuffer()
        },
        getFingerprintAttributes: function(e) {
            return [(e = e || {}).type, e.elders, e.youngerSiblings, e.descendants, e.left, e.top, e.width, e.height, e.name]
        }
    }, CE2.fp = CE2.fp.default;