_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [8], {
        "/0+H": function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.isInAmpMode = a, t.useAmp = function() {
                return a(i.default.useContext(o.AmpStateContext))
            };
            var r, i = (r = n("q1tI")) && r.__esModule ? r : {
                    default: r
                },
                o = n("lwAK");

            function a() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.ampFirst,
                    n = void 0 !== t && t,
                    r = e.hybrid,
                    i = void 0 !== r && r,
                    o = e.hasQuery,
                    a = void 0 !== o && o;
                return n || i && a
            }
        },
        "/GqU": function(e, t, n) {
            var r = n("RK3t"),
                i = n("HYAF");
            e.exports = function(e) {
                return r(i(e))
            }
        },
        "/b8u": function(e, t, n) {
            var r = n("STAE");
            e.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator
        },
        "/byt": function(e, t) {
            e.exports = {
                CSSRuleList: 0,
                CSSStyleDeclaration: 0,
                CSSValueList: 0,
                ClientRectList: 0,
                DOMRectList: 0,
                DOMStringList: 0,
                DOMTokenList: 1,
                DataTransferItemList: 0,
                FileList: 0,
                HTMLAllCollection: 0,
                HTMLCollection: 0,
                HTMLFormElement: 0,
                HTMLSelectElement: 0,
                MediaList: 0,
                MimeTypeArray: 0,
                NamedNodeMap: 0,
                NodeList: 1,
                PaintRequestList: 0,
                Plugin: 0,
                PluginArray: 0,
                SVGLengthList: 0,
                SVGNumberList: 0,
                SVGPathSegList: 0,
                SVGPointList: 0,
                SVGStringList: 0,
                SVGTransformList: 0,
                SourceBufferList: 0,
                StyleSheetList: 0,
                TextTrackCueList: 0,
                TextTrackList: 0,
                TouchList: 0
            }
        },
        "07d7": function(e, t, n) {
            var r = n("AO7/"),
                i = n("busE"),
                o = n("sEFX");
            r || i(Object.prototype, "toString", o, {
                unsafe: !0
            })
        },
        "0BK2": function(e, t) {
            e.exports = {}
        },
        "0Dky": function(e, t) {
            e.exports = function(e) {
                try {
                    return !!e()
                } catch (t) {
                    return !0
                }
            }
        },
        "0GbY": function(e, t, n) {
            var r = n("Qo9l"),
                i = n("2oRo"),
                o = function(e) {
                    return "function" == typeof e ? e : void 0
                };
            e.exports = function(e, t) {
                return arguments.length < 2 ? o(r[e]) || o(i[e]) : r[e] && r[e][t] || i[e] && i[e][t]
            }
        },
        "0eef": function(e, t, n) {
            "use strict";
            var r = {}.propertyIsEnumerable,
                i = Object.getOwnPropertyDescriptor,
                o = i && !r.call({
                    1: 2
                }, 1);
            t.f = o ? function(e) {
                var t = i(this, e);
                return !!t && t.enumerable
            } : r
        },
        "0rvr": function(e, t, n) {
            var r = n("glrk"),
                i = n("O741");
            e.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
                var e, t = !1,
                    n = {};
                try {
                    (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []), t = n instanceof Array
                } catch (o) {}
                return function(n, o) {
                    return r(n), i(o), t ? e.call(n, o) : n.__proto__ = o, n
                }
            }() : void 0)
        },
        "14Sl": function(e, t, n) {
            "use strict";
            n("rB9j");
            var r = n("busE"),
                i = n("0Dky"),
                o = n("tiKp"),
                a = n("kmMV"),
                c = n("kRJp"),
                s = o("species"),
                l = !i((function() {
                    var e = /./;
                    return e.exec = function() {
                        var e = [];
                        return e.groups = {
                            a: "7"
                        }, e
                    }, "7" !== "".replace(e, "$<a>")
                })),
                u = "$0" === "a".replace(/./, "$0"),
                d = o("replace"),
                f = !!/./ [d] && "" === /./ [d]("a", "$0"),
                p = !i((function() {
                    var e = /(?:)/,
                        t = e.exec;
                    e.exec = function() {
                        return t.apply(this, arguments)
                    };
                    var n = "ab".split(e);
                    return 2 !== n.length || "a" !== n[0] || "b" !== n[1]
                }));
            e.exports = function(e, t, n, d) {
                var h = o(e),
                    v = !i((function() {
                        var t = {};
                        return t[h] = function() {
                            return 7
                        }, 7 != "" [e](t)
                    })),
                    b = v && !i((function() {
                        var t = !1,
                            n = /a/;
                        return "split" === e && ((n = {}).constructor = {}, n.constructor[s] = function() {
                            return n
                        }, n.flags = "", n[h] = /./ [h]), n.exec = function() {
                            return t = !0, null
                        }, n[h](""), !t
                    }));
                if (!v || !b || "replace" === e && (!l || !u || f) || "split" === e && !p) {
                    var m = /./ [h],
                        y = n(h, "" [e], (function(e, t, n, r, i) {
                            return t.exec === a ? v && !i ? {
                                done: !0,
                                value: m.call(t, n, r)
                            } : {
                                done: !0,
                                value: e.call(n, t, r)
                            } : {
                                done: !1
                            }
                        }), {
                            REPLACE_KEEPS_$0: u,
                            REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: f
                        }),
                        g = y[0],
                        j = y[1];
                    r(String.prototype, e, g), r(RegExp.prototype, h, 2 == t ? function(e, t) {
                        return j.call(e, this, t)
                    } : function(e) {
                        return j.call(e, this)
                    })
                }
                d && c(RegExp.prototype[h], "sham", !0)
            }
        },
        "1E5z": function(e, t, n) {
            var r = n("m/L8").f,
                i = n("UTVS"),
                o = n("tiKp")("toStringTag");
            e.exports = function(e, t, n) {
                e && !i(e = n ? e : e.prototype, o) && r(e, o, {
                    configurable: !0,
                    value: t
                })
            }
        },
        "1Y/n": function(e, t, n) {
            var r = n("HAuM"),
                i = n("ewvW"),
                o = n("RK3t"),
                a = n("UMSQ"),
                c = function(e) {
                    return function(t, n, c, s) {
                        r(n);
                        var l = i(t),
                            u = o(l),
                            d = a(l.length),
                            f = e ? d - 1 : 0,
                            p = e ? -1 : 1;
                        if (c < 2)
                            for (;;) {
                                if (f in u) {
                                    s = u[f], f += p;
                                    break
                                }
                                if (f += p, e ? f < 0 : d <= f) throw TypeError("Reduce of empty array with no initial value")
                            }
                        for (; e ? f >= 0 : d > f; f += p) f in u && (s = n(s, u[f], f, l));
                        return s
                    }
                };
            e.exports = {
                left: c(!1),
                right: c(!0)
            }
        },
        "2oRo": function(e, t, n) {
            (function(t) {
                var n = function(e) {
                    return e && e.Math == Math && e
                };
                e.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof t && t) || function() {
                    return this
                }() || Function("return this")()
            }).call(this, n("yLpj"))
        },
        "33Wh": function(e, t, n) {
            var r = n("yoRg"),
                i = n("eDl+");
            e.exports = Object.keys || function(e) {
                return r(e, i)
            }
        },
        "3bBZ": function(e, t, n) {
            var r = n("2oRo"),
                i = n("/byt"),
                o = n("4mDm"),
                a = n("kRJp"),
                c = n("tiKp"),
                s = c("iterator"),
                l = c("toStringTag"),
                u = o.values;
            for (var d in i) {
                var f = r[d],
                    p = f && f.prototype;
                if (p) {
                    if (p[s] !== u) try {
                        a(p, s, u)
                    } catch (v) {
                        p[s] = u
                    }
                    if (p[l] || a(p, l, d), i[d])
                        for (var h in o)
                            if (p[h] !== o[h]) try {
                                a(p, h, o[h])
                            } catch (v) {
                                p[h] = o[h]
                            }
                }
            }
        },
        "48fX": function(e, t, n) {
            var r = n("qhzo");
            e.exports = function(e, t) {
                if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && r(e, t)
            }
        },
        "4WOD": function(e, t, n) {
            var r = n("UTVS"),
                i = n("ewvW"),
                o = n("93I0"),
                a = n("4Xet"),
                c = o("IE_PROTO"),
                s = Object.prototype;
            e.exports = a ? Object.getPrototypeOf : function(e) {
                return e = i(e), r(e, c) ? e[c] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? s : null
            }
        },
        "4Xet": function(e, t, n) {
            var r = n("0Dky");
            e.exports = !r((function() {
                function e() {}
                return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
            }))
        },
        "4l63": function(e, t, n) {
            var r = n("I+eb"),
                i = n("wg0c");
            r({
                global: !0,
                forced: parseInt != i
            }, {
                parseInt: i
            })
        },
        "4mDm": function(e, t, n) {
            "use strict";
            var r = n("/GqU"),
                i = n("RNIs"),
                o = n("P4y1"),
                a = n("afO8"),
                c = n("fdAy"),
                s = a.set,
                l = a.getterFor("Array Iterator");
            e.exports = c(Array, "Array", (function(e, t) {
                s(this, {
                    type: "Array Iterator",
                    target: r(e),
                    index: 0,
                    kind: t
                })
            }), (function() {
                var e = l(this),
                    t = e.target,
                    n = e.kind,
                    r = e.index++;
                return !t || r >= t.length ? (e.target = void 0, {
                    value: void 0,
                    done: !0
                }) : "keys" == n ? {
                    value: r,
                    done: !1
                } : "values" == n ? {
                    value: t[r],
                    done: !1
                } : {
                    value: [r, t[r]],
                    done: !1
                }
            }), "values"), o.Arguments = o.Array, i("keys"), i("values"), i("entries")
        },
        "4syw": function(e, t, n) {
            var r = n("busE");
            e.exports = function(e, t, n) {
                for (var i in t) r(e, i, t[i], n);
                return e
            }
        },
        "5fIB": function(e, t, n) {
            var r = n("7eYB");
            e.exports = function(e) {
                if (Array.isArray(e)) return r(e)
            }
        },
        "6JNq": function(e, t, n) {
            var r = n("UTVS"),
                i = n("Vu81"),
                o = n("Bs8V"),
                a = n("m/L8");
            e.exports = function(e, t) {
                for (var n = i(t), c = a.f, s = o.f, l = 0; l < n.length; l++) {
                    var u = n[l];
                    r(e, u) || c(e, u, s(t, u))
                }
            }
        },
        "6LWA": function(e, t, n) {
            var r = n("xrYK");
            e.exports = Array.isArray || function(e) {
                return "Array" == r(e)
            }
        },
        "6VoE": function(e, t, n) {
            var r = n("tiKp"),
                i = n("P4y1"),
                o = r("iterator"),
                a = Array.prototype;
            e.exports = function(e) {
                return void 0 !== e && (i.Array === e || a[o] === e)
            }
        },
        "8Kt/": function(e, t, n) {
            "use strict";
            n("oI91");
            t.__esModule = !0, t.defaultHead = u, t.default = void 0;
            var r, i = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== typeof e && "function" !== typeof e) return {
                        default: e
                    };
                    var t = l();
                    if (t && t.has(e)) return t.get(e);
                    var n = {},
                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var i in e)
                        if (Object.prototype.hasOwnProperty.call(e, i)) {
                            var o = r ? Object.getOwnPropertyDescriptor(e, i) : null;
                            o && (o.get || o.set) ? Object.defineProperty(n, i, o) : n[i] = e[i]
                        }
                    n.default = e, t && t.set(e, n);
                    return n
                }(n("q1tI")),
                o = (r = n("Xuae")) && r.__esModule ? r : {
                    default: r
                },
                a = n("lwAK"),
                c = n("FYa8"),
                s = n("/0+H");

            function l() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return l = function() {
                    return e
                }, e
            }

            function u() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = [i.default.createElement("meta", {
                        charSet: "utf-8"
                    })];
                return e || t.push(i.default.createElement("meta", {
                    name: "viewport",
                    content: "width=device-width"
                })), t
            }

            function d(e, t) {
                return "string" === typeof t || "number" === typeof t ? e : t.type === i.default.Fragment ? e.concat(i.default.Children.toArray(t.props.children).reduce((function(e, t) {
                    return "string" === typeof t || "number" === typeof t ? e : e.concat(t)
                }), [])) : e.concat(t)
            }
            var f = ["name", "httpEquiv", "charSet", "itemProp"];

            function p(e, t) {
                return e.reduce((function(e, t) {
                    var n = i.default.Children.toArray(t.props.children);
                    return e.concat(n)
                }), []).reduce(d, []).reverse().concat(u(t.inAmpMode)).filter(function() {
                    var e = new Set,
                        t = new Set,
                        n = new Set,
                        r = {};
                    return function(i) {
                        var o = !0;
                        if (i.key && "number" !== typeof i.key && i.key.indexOf("$") > 0) {
                            var a = i.key.slice(i.key.indexOf("$") + 1);
                            e.has(a) ? o = !1 : e.add(a)
                        }
                        switch (i.type) {
                            case "title":
                            case "base":
                                t.has(i.type) ? o = !1 : t.add(i.type);
                                break;
                            case "meta":
                                for (var c = 0, s = f.length; c < s; c++) {
                                    var l = f[c];
                                    if (i.props.hasOwnProperty(l))
                                        if ("charSet" === l) n.has(l) ? o = !1 : n.add(l);
                                        else {
                                            var u = i.props[l],
                                                d = r[l] || new Set;
                                            d.has(u) ? o = !1 : (d.add(u), r[l] = d)
                                        }
                                }
                        }
                        return o
                    }
                }()).reverse().map((function(e, t) {
                    var n = e.key || t;
                    return i.default.cloneElement(e, {
                        key: n
                    })
                }))
            }

            function h(e) {
                var t = e.children,
                    n = (0, i.useContext)(a.AmpStateContext),
                    r = (0, i.useContext)(c.HeadManagerContext);
                return i.default.createElement(o.default, {
                    reduceComponentsToState: p,
                    headManager: r,
                    inAmpMode: (0, s.isInAmpMode)(n)
                }, t)
            }
            h.rewind = function() {};
            var v = h;
            t.default = v
        },
        "8YOa": function(e, t, n) {
            var r = n("0BK2"),
                i = n("hh1v"),
                o = n("UTVS"),
                a = n("m/L8").f,
                c = n("kOOl"),
                s = n("uy83"),
                l = c("meta"),
                u = 0,
                d = Object.isExtensible || function() {
                    return !0
                },
                f = function(e) {
                    a(e, l, {
                        value: {
                            objectID: "O" + ++u,
                            weakData: {}
                        }
                    })
                },
                p = e.exports = {
                    REQUIRED: !1,
                    fastKey: function(e, t) {
                        if (!i(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                        if (!o(e, l)) {
                            if (!d(e)) return "F";
                            if (!t) return "E";
                            f(e)
                        }
                        return e[l].objectID
                    },
                    getWeakData: function(e, t) {
                        if (!o(e, l)) {
                            if (!d(e)) return !0;
                            if (!t) return !1;
                            f(e)
                        }
                        return e[l].weakData
                    },
                    onFreeze: function(e) {
                        return s && p.REQUIRED && d(e) && !o(e, l) && f(e), e
                    }
                };
            r[l] = !0
        },
        "9/5/": function(e, t, n) {
            (function(t) {
                var n = /^\s+|\s+$/g,
                    r = /^[-+]0x[0-9a-f]+$/i,
                    i = /^0b[01]+$/i,
                    o = /^0o[0-7]+$/i,
                    a = parseInt,
                    c = "object" == typeof t && t && t.Object === Object && t,
                    s = "object" == typeof self && self && self.Object === Object && self,
                    l = c || s || Function("return this")(),
                    u = Object.prototype.toString,
                    d = Math.max,
                    f = Math.min,
                    p = function() {
                        return l.Date.now()
                    };

                function h(e) {
                    var t = typeof e;
                    return !!e && ("object" == t || "function" == t)
                }

                function v(e) {
                    if ("number" == typeof e) return e;
                    if (function(e) {
                            return "symbol" == typeof e || function(e) {
                                return !!e && "object" == typeof e
                            }(e) && "[object Symbol]" == u.call(e)
                        }(e)) return NaN;
                    if (h(e)) {
                        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                        e = h(t) ? t + "" : t
                    }
                    if ("string" != typeof e) return 0 === e ? e : +e;
                    e = e.replace(n, "");
                    var c = i.test(e);
                    return c || o.test(e) ? a(e.slice(2), c ? 2 : 8) : r.test(e) ? NaN : +e
                }
                e.exports = function(e, t, n) {
                    var r, i, o, a, c, s, l = 0,
                        u = !1,
                        b = !1,
                        m = !0;
                    if ("function" != typeof e) throw new TypeError("Expected a function");

                    function y(t) {
                        var n = r,
                            o = i;
                        return r = i = void 0, l = t, a = e.apply(o, n)
                    }

                    function g(e) {
                        return l = e, c = setTimeout(x, t), u ? y(e) : a
                    }

                    function j(e) {
                        var n = e - s;
                        return void 0 === s || n >= t || n < 0 || b && e - l >= o
                    }

                    function x() {
                        var e = p();
                        if (j(e)) return O(e);
                        c = setTimeout(x, function(e) {
                            var n = t - (e - s);
                            return b ? f(n, o - (e - l)) : n
                        }(e))
                    }

                    function O(e) {
                        return c = void 0, m && r ? y(e) : (r = i = void 0, a)
                    }

                    function w() {
                        var e = p(),
                            n = j(e);
                        if (r = arguments, i = this, s = e, n) {
                            if (void 0 === c) return g(s);
                            if (b) return c = setTimeout(x, t), y(s)
                        }
                        return void 0 === c && (c = setTimeout(x, t)), a
                    }
                    return t = v(t) || 0, h(n) && (u = !!n.leading, o = (b = "maxWait" in n) ? d(v(n.maxWait) || 0, t) : o, m = "trailing" in n ? !!n.trailing : m), w.cancel = function() {
                        void 0 !== c && clearTimeout(c), l = 0, r = s = i = c = void 0
                    }, w.flush = function() {
                        return void 0 === c ? a : O(p())
                    }, w
                }
            }).call(this, n("yLpj"))
        },
        "93I0": function(e, t, n) {
            var r = n("VpIT"),
                i = n("kOOl"),
                o = r("keys");
            e.exports = function(e) {
                return o[e] || (o[e] = i(e))
            }
        },
        "9d/t": function(e, t, n) {
            var r = n("AO7/"),
                i = n("xrYK"),
                o = n("tiKp")("toStringTag"),
                a = "Arguments" == i(function() {
                    return arguments
                }());
            e.exports = r ? i : function(e) {
                var t, n, r;
                return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = function(e, t) {
                    try {
                        return e[t]
                    } catch (n) {}
                }(t = Object(e), o)) ? n : a ? i(t) : "Object" == (r = i(t)) && "function" == typeof t.callee ? "Arguments" : r
            }
        },
        A2ZE: function(e, t, n) {
            var r = n("HAuM");
            e.exports = function(e, t, n) {
                if (r(e), void 0 === t) return e;
                switch (n) {
                    case 0:
                        return function() {
                            return e.call(t)
                        };
                    case 1:
                        return function(n) {
                            return e.call(t, n)
                        };
                    case 2:
                        return function(n, r) {
                            return e.call(t, n, r)
                        };
                    case 3:
                        return function(n, r, i) {
                            return e.call(t, n, r, i)
                        }
                }
                return function() {
                    return e.apply(t, arguments)
                }
            }
        },
        "AO7/": function(e, t, n) {
            var r = {};
            r[n("tiKp")("toStringTag")] = "z", e.exports = "[object z]" === String(r)
        },
        AxL3: function(e, t) {
            var n = !("undefined" === typeof window || !window.document || !window.document.createElement);
            e.exports = n
        },
        Bs8V: function(e, t, n) {
            var r = n("g6v/"),
                i = n("0eef"),
                o = n("XGwC"),
                a = n("/GqU"),
                c = n("wE6v"),
                s = n("UTVS"),
                l = n("DPsx"),
                u = Object.getOwnPropertyDescriptor;
            t.f = r ? u : function(e, t) {
                if (e = a(e), t = c(t, !0), l) try {
                    return u(e, t)
                } catch (n) {}
                if (s(e, t)) return o(!i.f.call(e, t), e[t])
            }
        },
        DLK6: function(e, t, n) {
            var r = n("ewvW"),
                i = Math.floor,
                o = "".replace,
                a = /\$([$&'`]|\d\d?|<[^>]*>)/g,
                c = /\$([$&'`]|\d\d?)/g;
            e.exports = function(e, t, n, s, l, u) {
                var d = n + e.length,
                    f = s.length,
                    p = c;
                return void 0 !== l && (l = r(l), p = a), o.call(u, p, (function(r, o) {
                    var a;
                    switch (o.charAt(0)) {
                        case "$":
                            return "$";
                        case "&":
                            return e;
                        case "`":
                            return t.slice(0, n);
                        case "'":
                            return t.slice(d);
                        case "<":
                            a = l[o.slice(1, -1)];
                            break;
                        default:
                            var c = +o;
                            if (0 === c) return r;
                            if (c > f) {
                                var u = i(c / 10);
                                return 0 === u ? r : u <= f ? void 0 === s[u - 1] ? o.charAt(1) : s[u - 1] + o.charAt(1) : r
                            }
                            a = s[c - 1]
                    }
                    return void 0 === a ? "" : a
                }))
            }
        },
        DPsx: function(e, t, n) {
            var r = n("g6v/"),
                i = n("0Dky"),
                o = n("zBJ4");
            e.exports = !r && !i((function() {
                return 7 != Object.defineProperty(o("div"), "a", {
                    get: function() {
                        return 7
                    }
                }).a
            }))
        },
        DQUT: function(e, t, n) {
            "use strict";
            var r = n("iaYz").DebounceInput;
            r.DebounceInput = r, e.exports = r
        },
        E9XD: function(e, t, n) {
            "use strict";
            var r = n("I+eb"),
                i = n("1Y/n").left,
                o = n("pkCn"),
                a = n("rkAj"),
                c = n("LQDL"),
                s = n("YF1G"),
                l = o("reduce"),
                u = a("reduce", {
                    1: 0
                });
            r({
                target: "Array",
                proto: !0,
                forced: !l || !u || !s && c > 79 && c < 83
            }, {
                reduce: function(e) {
                    return i(this, e, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
                }
            })
        },
        ENF9: function(e, t, n) {
            "use strict";
            var r, i = n("2oRo"),
                o = n("4syw"),
                a = n("8YOa"),
                c = n("bWFh"),
                s = n("rKzb"),
                l = n("hh1v"),
                u = n("afO8").enforce,
                d = n("f5p1"),
                f = !i.ActiveXObject && "ActiveXObject" in i,
                p = Object.isExtensible,
                h = function(e) {
                    return function() {
                        return e(this, arguments.length ? arguments[0] : void 0)
                    }
                },
                v = e.exports = c("WeakMap", h, s);
            if (d && f) {
                r = s.getConstructor(h, "WeakMap", !0), a.REQUIRED = !0;
                var b = v.prototype,
                    m = b.delete,
                    y = b.has,
                    g = b.get,
                    j = b.set;
                o(b, {
                    delete: function(e) {
                        if (l(e) && !p(e)) {
                            var t = u(this);
                            return t.frozen || (t.frozen = new r), m.call(this, e) || t.frozen.delete(e)
                        }
                        return m.call(this, e)
                    },
                    has: function(e) {
                        if (l(e) && !p(e)) {
                            var t = u(this);
                            return t.frozen || (t.frozen = new r), y.call(this, e) || t.frozen.has(e)
                        }
                        return y.call(this, e)
                    },
                    get: function(e) {
                        if (l(e) && !p(e)) {
                            var t = u(this);
                            return t.frozen || (t.frozen = new r), y.call(this, e) ? g.call(this, e) : t.frozen.get(e)
                        }
                        return g.call(this, e)
                    },
                    set: function(e, t) {
                        if (l(e) && !p(e)) {
                            var n = u(this);
                            n.frozen || (n.frozen = new r), y.call(this, e) ? j.call(this, e, t) : n.frozen.set(e, t)
                        } else j.call(this, e, t);
                        return this
                    }
                })
            }
        },
        F8JR: function(e, t, n) {
            "use strict";
            var r = n("tycR").forEach,
                i = n("pkCn"),
                o = n("rkAj"),
                a = i("forEach"),
                c = o("forEach");
            e.exports = a && c ? [].forEach : function(e) {
                return r(this, e, arguments.length > 1 ? arguments[1] : void 0)
            }
        },
        FMNM: function(e, t, n) {
            var r = n("xrYK"),
                i = n("kmMV");
            e.exports = function(e, t) {
                var n = e.exec;
                if ("function" === typeof n) {
                    var o = n.call(e, t);
                    if ("object" !== typeof o) throw TypeError("RegExp exec method returned something other than an Object or null");
                    return o
                }
                if ("RegExp" !== r(e)) throw TypeError("RegExp#exec called on incompatible receiver");
                return i.call(e, t)
            }
        },
        FYa8: function(e, t, n) {
            "use strict";
            var r;
            t.__esModule = !0, t.HeadManagerContext = void 0;
            var i = ((r = n("q1tI")) && r.__esModule ? r : {
                default: r
            }).default.createContext({});
            t.HeadManagerContext = i
        },
        "G+Rx": function(e, t, n) {
            var r = n("0GbY");
            e.exports = r("document", "documentElement")
        },
        GarU: function(e, t) {
            e.exports = function(e, t, n) {
                if (!(e instanceof t)) throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
                return e
            }
        },
        HAuM: function(e, t) {
            e.exports = function(e) {
                if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
                return e
            }
        },
        HH4o: function(e, t, n) {
            var r = n("tiKp")("iterator"),
                i = !1;
            try {
                var o = 0,
                    a = {
                        next: function() {
                            return {
                                done: !!o++
                            }
                        },
                        return: function() {
                            i = !0
                        }
                    };
                a[r] = function() {
                    return this
                }, Array.from(a, (function() {
                    throw 2
                }))
            } catch (c) {}
            e.exports = function(e, t) {
                if (!t && !i) return !1;
                var n = !1;
                try {
                    var o = {};
                    o[r] = function() {
                        return {
                            next: function() {
                                return {
                                    done: n = !0
                                }
                            }
                        }
                    }, e(o)
                } catch (c) {}
                return n
            }
        },
        HYAF: function(e, t) {
            e.exports = function(e) {
                if (void 0 == e) throw TypeError("Can't call method on " + e);
                return e
            }
        },
        Hd5f: function(e, t, n) {
            var r = n("0Dky"),
                i = n("tiKp"),
                o = n("LQDL"),
                a = i("species");
            e.exports = function(e) {
                return o >= 51 || !r((function() {
                    var t = [];
                    return (t.constructor = {})[a] = function() {
                        return {
                            foo: 1
                        }
                    }, 1 !== t[e](Boolean).foo
                }))
            }
        },
        "I+eb": function(e, t, n) {
            var r = n("2oRo"),
                i = n("Bs8V").f,
                o = n("kRJp"),
                a = n("busE"),
                c = n("zk60"),
                s = n("6JNq"),
                l = n("lMq5");
            e.exports = function(e, t) {
                var n, u, d, f, p, h = e.target,
                    v = e.global,
                    b = e.stat;
                if (n = v ? r : b ? r[h] || c(h, {}) : (r[h] || {}).prototype)
                    for (u in t) {
                        if (f = t[u], d = e.noTargetGet ? (p = i(n, u)) && p.value : n[u], !l(v ? u : h + (b ? "." : "#") + u, e.forced) && void 0 !== d) {
                            if (typeof f === typeof d) continue;
                            s(f, d)
                        }(e.sham || d && d.sham) && o(f, "sham", !0), a(n, u, f, e)
                    }
            }
        },
        I8vh: function(e, t, n) {
            var r = n("ppGB"),
                i = Math.max,
                o = Math.min;
            e.exports = function(e, t) {
                var n = r(e);
                return n < 0 ? i(n + t, 0) : o(n, t)
            }
        },
        ImZN: function(e, t, n) {
            var r = n("glrk"),
                i = n("6VoE"),
                o = n("UMSQ"),
                a = n("A2ZE"),
                c = n("NaFW"),
                s = n("KmKo"),
                l = function(e, t) {
                    this.stopped = e, this.result = t
                };
            e.exports = function(e, t, n) {
                var u, d, f, p, h, v, b, m = n && n.that,
                    y = !(!n || !n.AS_ENTRIES),
                    g = !(!n || !n.IS_ITERATOR),
                    j = !(!n || !n.INTERRUPTED),
                    x = a(t, m, 1 + y + j),
                    O = function(e) {
                        return u && s(u), new l(!0, e)
                    },
                    w = function(e) {
                        return y ? (r(e), j ? x(e[0], e[1], O) : x(e[0], e[1])) : j ? x(e, O) : x(e)
                    };
                if (g) u = e;
                else {
                    if ("function" != typeof(d = c(e))) throw TypeError("Target is not iterable");
                    if (i(d)) {
                        for (f = 0, p = o(e.length); p > f; f++)
                            if ((h = w(e[f])) && h instanceof l) return h;
                        return new l(!1)
                    }
                    u = d.call(e)
                }
                for (v = u.next; !(b = v.call(u)).done;) {
                    try {
                        h = w(b.value)
                    } catch (S) {
                        throw s(u), S
                    }
                    if ("object" == typeof h && h && h instanceof l) return h
                }
                return new l(!1)
            }
        },
        JBy8: function(e, t, n) {
            var r = n("yoRg"),
                i = n("eDl+").concat("length", "prototype");
            t.f = Object.getOwnPropertyNames || function(e) {
                return r(e, i)
            }
        },
        KmKo: function(e, t, n) {
            var r = n("glrk");
            e.exports = function(e) {
                var t = e.return;
                if (void 0 !== t) return r(t.call(e)).value
            }
        },
        LQDL: function(e, t, n) {
            var r, i, o = n("2oRo"),
                a = n("NC/Y"),
                c = o.process,
                s = c && c.versions,
                l = s && s.v8;
            l ? i = (r = l.split("."))[0] + r[1] : a && (!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = a.match(/Chrome\/(\d+)/)) && (i = r[1]), e.exports = i && +i
        },
        "N+g0": function(e, t, n) {
            var r = n("g6v/"),
                i = n("m/L8"),
                o = n("glrk"),
                a = n("33Wh");
            e.exports = r ? Object.defineProperties : function(e, t) {
                o(e);
                for (var n, r = a(t), c = r.length, s = 0; c > s;) i.f(e, n = r[s++], t[n]);
                return e
            }
        },
        "NC/Y": function(e, t, n) {
            var r = n("0GbY");
            e.exports = r("navigator", "userAgent") || ""
        },
        NaFW: function(e, t, n) {
            var r = n("9d/t"),
                i = n("P4y1"),
                o = n("tiKp")("iterator");
            e.exports = function(e) {
                if (void 0 != e) return e[o] || e["@@iterator"] || i[r(e)]
            }
        },
        O741: function(e, t, n) {
            var r = n("hh1v");
            e.exports = function(e) {
                if (!r(e) && null !== e) throw TypeError("Can't set " + String(e) + " as a prototype");
                return e
            }
        },
        P4y1: function(e, t) {
            e.exports = {}
        },
        PKPk: function(e, t, n) {
            "use strict";
            var r = n("ZUd8").charAt,
                i = n("afO8"),
                o = n("fdAy"),
                a = i.set,
                c = i.getterFor("String Iterator");
            o(String, "String", (function(e) {
                a(this, {
                    type: "String Iterator",
                    string: String(e),
                    index: 0
                })
            }), (function() {
                var e, t = c(this),
                    n = t.string,
                    i = t.index;
                return i >= n.length ? {
                    value: void 0,
                    done: !0
                } : (e = r(n, i), t.index += e.length, {
                    value: e,
                    done: !1
                })
            }))
        },
        QWBl: function(e, t, n) {
            "use strict";
            var r = n("I+eb"),
                i = n("F8JR");
            r({
                target: "Array",
                proto: !0,
                forced: [].forEach != i
            }, {
                forEach: i
            })
        },
        QZ0l: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "__N_SSP", (function() {
                return Zt
            }));
            var r = n("nKUr"),
                i = n("q1tI"),
                o = n.n(i),
                a = n("vJKn"),
                c = n.n(a),
                s = n("rg98"),
                l = n("wu/5"),
                u = n("JyuN"),
                d = function() {
                    var e = u.o;
                    return new Promise((function(t) {
                        l.a.getRequestHandler().get(e).then((function(e) {
                            t(e)
                        }))
                    }))
                },
                f = function() {
                    var e = u.p;
                    return new Promise((function(t, n) {
                        l.a.getRequestHandler().get(e).then((function(e) {
                            t(e)
                        }))
                    }))
                },
                p = function() {
                    var e = u.n;
                    return new Promise((function(t, n) {
                        l.a.getRequestHandler().get(e).then((function(e) {
                            t(e)
                        }))
                    }))
                },
                h = n("mvAs"),
                v = n("8b/K"),
                b = n("H6Yn"),
                m = function(e) {
                    var t, n = e.meta,
                        a = (void 0 === n ? {} : n) || {},
                        l = a.country,
                        u = a.countryid,
                        m = a.siteid,
                        y = a.language,
                        g = a.altPagesContent;
                    u = u ? u.toLowerCase() : "";
                    var j = y,
                        x = Object(i.useState)(null),
                        O = x[0],
                        w = x[1],
                        S = Object(i.useState)(null),
                        E = S[0],
                        k = S[1],
                        _ = Object(i.useState)(null),
                        L = _[0],
                        N = _[1],
                        A = Object(i.useState)({}),
                        C = A[0],
                        T = A[1],
                        q = Object(i.useState)(null),
                        R = q[0],
                        P = q[1],
                        I = Object(i.useState)({}),
                        D = I[0],
                        M = I[1],
                        B = Object(i.useState)([]),
                        H = B[0],
                        W = B[1],
                        F = Object(i.useState)([]),
                        U = F[0],
                        z = F[1],
                        V = Object(i.useState)(0),
                        Y = V[0],
                        K = V[1],
                        X = Object(i.useState)(!1),
                        G = X[0],
                        $ = X[1],
                        Q = Object(i.useState)(!1),
                        J = Q[0],
                        Z = Q[1],
                        ee = Object(i.useState)(null),
                        te = ee[0],
                        ne = ee[1],
                        re = Object(i.useState)(null),
                        ie = re[0],
                        oe = re[1],
                        ae = Object(i.useState)(""),
                        ce = ae[0],
                        se = ae[1],
                        le = Object(i.useState)({}),
                        ue = le[0],
                        de = le[1],
                        fe = Object(i.useState)(null),
                        pe = fe[0],
                        he = fe[1],
                        ve = Object(i.useState)(!1),
                        be = ve[0],
                        me = ve[1],
                        ye = Object(i.createRef)(),
                        ge = Object(i.createRef)(),
                        je = Object(i.createRef)(),
                        xe = Object(i.createRef)(),
                        Oe = Object(i.createRef)(),
                        we = (null === h || void 0 === h || null === (t = h.siteid) || void 0 === t ? void 0 : t.join(",")) + ",us,",
                        Se = (null === h || void 0 === h ? void 0 : h.trusteblacklist) || "",
                        Ee = (null === h || void 0 === h ? void 0 : h.regions) || [],
                        ke = D || {},
                        _e = ke.burl,
                        Le = ke.suggestedSiteId,
                        Ne = void 0 === Le ? "" : Le,
                        Ae = ke.suggestedCountryName,
                        Ce = void 0 === Ae ? "" : Ae,
                        Te = ke.transNumber,
                        qe = O || {},
                        Re = qe.visittrans,
                        Pe = void 0 === Re ? "" : Re,
                        Ie = qe.seepagetrans,
                        De = void 0 === Ie ? "" : Ie,
                        Me = qe.nothankstrans,
                        Be = void 0 === Me ? "" : Me,
                        He = qe.questiontrans,
                        We = void 0 === He ? "" : He,
                        Fe = qe.countryttrans,
                        Ue = void 0 === Fe ? "" : Fe,
                        ze = (C || {}).altpages,
                        Ve = (ue || {}).vi_countryid,
                        Ye = function(e) {
                            for (var t = e + "=", n = document.cookie.split(";"), r = 0; r < n.length; r++) {
                                for (var i = n[r];
                                    " " == i.charAt(0);) i = i.substring(1, i.length);
                                if (0 == i.indexOf(t)) return i.substring(t.length, i.length)
                            }
                            return null
                        },
                        Ke = function(e, t, n) {
                            if (n) {
                                var r = new Date;
                                r.setTime(r.getTime() + 24 * n * 60 * 60 * 1e3);
                                var i = "; expires=" + r.toGMTString()
                            } else i = "";
                            document.cookie = e + "=" + t + i + "; path=/";
                            var o = Ye("ORA_COUNTRYSELECT");
                            ne(o)
                        },
                        Xe = function(e, t) {
                            ce.indexOf("activecountryid=") > -1 && v.a.debug(Object(b.d)("ACS", "ACS:" + e));
                            try {
                                t && navTrack && "undefined" !== typeof s_setAccount && navTrack(s_setAccount()[1], s_setAccount()[2], "active-country-select", e)
                            } catch (n) {
                                v.a.debug(Object(b.d)("ACS", "nav track failed"))
                            }
                            return me(!0), !1
                        };
                    Object(i.useEffect)((function() {
                        var e = Ye("ORA_COUNTRYSELECT");
                        ne(e);
                        var t = setTimeout((function() {
                            var t, n;
                            null != e && "" != e && e || (null === (t = document.querySelector("body")) || void 0 === t || null === (n = t.classList) || void 0 === n || n.add("u24show"))
                        }), 2e3);
                        return he(t),
                            function() {
                                clearTimeout(pe)
                            }
                    }), []);
                    var Ge = function() {
                            $(!0)
                        },
                        $e = function() {
                            $(!1)
                        },
                        Qe = function() {
                            Z(!0)
                        },
                        Je = function() {
                            Z(!1)
                        },
                        Ze = function(e) {
                            var t, n;
                            27 === (null === e || void 0 === e ? void 0 : e.keyCode) && ((null === (t = document.querySelector("body")) || void 0 === t || null === (n = t.classList) || void 0 === n ? void 0 : n.contains("u24show")) && (null === e || void 0 === e || e.preventDefault(), it()))
                        };
                    Object(i.useEffect)((function() {
                        var e, t, n, r, i, o, a, c;
                        return null === ge || void 0 === ge || null === (e = ge.current) || void 0 === e || e.addEventListener("mouseenter", Ge), null === ge || void 0 === ge || null === (t = ge.current) || void 0 === t || t.addEventListener("mouseleave", $e), null === ge || void 0 === ge || null === (n = ge.current) || void 0 === n || n.addEventListener("click", Ge), null === ge || void 0 === ge || null === (r = ge.current) || void 0 === r || r.addEventListener("touchstart", Ge), null === ye || void 0 === ye || null === (i = ye.current) || void 0 === i || i.addEventListener("focus", Ge), null === ye || void 0 === ye || null === (o = ye.current) || void 0 === o || o.addEventListener("blur", $e), null === xe || void 0 === xe || null === (a = xe.current) || void 0 === a || a.addEventListener("mouseenter", Qe), null === xe || void 0 === xe || null === (c = xe.current) || void 0 === c || c.addEventListener("mouseleave", Je), document.addEventListener("keyup", Ze),
                            function() {
                                var e, t, n, r, i, o, a, c;
                                null === ge || void 0 === ge || null === (e = ge.current) || void 0 === e || e.removeEventListener("mouseenter", Ge), null === ge || void 0 === ge || null === (t = ge.current) || void 0 === t || t.removeEventListener("mouseleave", $e), null === ge || void 0 === ge || null === (n = ge.current) || void 0 === n || n.removeEventListener("click", Ge), null === ge || void 0 === ge || null === (r = ge.current) || void 0 === r || r.removeEventListener("touchstart", Ge), null === ye || void 0 === ye || null === (i = ye.current) || void 0 === i || i.removeEventListener("focus", Ge), null === ye || void 0 === ye || null === (o = ye.current) || void 0 === o || o.removeEventListener("blur", $e), null === xe || void 0 === xe || null === (a = xe.current) || void 0 === a || a.removeEventListener("mouseenter", Qe), null === xe || void 0 === xe || null === (c = xe.current) || void 0 === c || c.removeEventListener("mouseleave", Je), document.removeEventListener("keyup", Ze)
                            }
                    }), [ge, ye, xe]), Object(i.useEffect)((function() {
                        var e, t = Ye("ORA_COUNTRYSELECT");
                        try {
                            e = (e = oracle.truste.api.getConsentDecision()).consentDecision > -1 ? e.consentDecision : -1
                        } catch (n) {
                            e = -1
                        } - 1 == e ? Xe("truste-failed", !0) : null != t && "" != t && t || et(), oe(e)
                    }), []), Object(i.useEffect)((function() {
                        var e = Ye("ORA_COUNTRYSELECT");
                        ze && (null != e && "" != e && e || Ve && (tt(), nt()))
                    }), [ze, Ve]), Object(i.useEffect)((function() {
                        var e = function() {
                            if (ce) {
                                for (var e = ce.split("://")[1].replace(/^[^\/]+/, ""), t = we.split(","), n = 0; n < t.length; n++) {
                                    var r = t[n];
                                    if (0 == e.indexOf("/" + r + "/")) {
                                        e = e.replace(new RegExp("^/" + r + "/", "g"), "/");
                                        break
                                    }
                                }
                                return e
                            }
                            return ""
                        }();
                        e = e.replace("/product-navigator/", "/index.html"), P(e)
                    }), [ce]);
                    var et = function() {
                            var e = Object(s.a)(c.a.mark((function e() {
                                var t, n, r, i, o, a, s, f, p, h, v, b, x;
                                return c.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if ("" === te || null === te) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return", Xe("cookie-exist"));
                                        case 2:
                                            if (n = (n = document.location.href + "&").replace(/\&$/, ""), se(n), i = document.querySelector('link[hreflang="en-US"]') ? ",us" : "", o = "," + g + i + ",", m && u && l && y) {
                                                e.next = 8;
                                                break
                                            }
                                            return e.abrupt("return", Xe("no-metadata"));
                                        case 8:
                                            if ("es" == y && "es" != m && (m = "es-lx"), "en" == y && "uk" == m && (m = "en"), a = (null === (t = document.querySelector('link[rel="canonical"]')) || void 0 === t ? void 0 : t.href) || "", (document.querySelector(".rc20v1") || document.querySelector(".rh02") || a.indexOf("/corporate/contact/") > -1) && (o = "," + (o = we.replace(/,emea/, "")) + ","), "" != o) {
                                                e.next = 14;
                                                break
                                            }
                                            return e.abrupt("return", Xe("no-altpages"));
                                        case 14:
                                            if (!(n && n.indexOf("activecountryid=") > 0)) {
                                                e.next = 18;
                                                break
                                            }
                                            r = null === (s = n.split("activecountryid=")) || void 0 === s || null === (f = s[1]) || void 0 === f || null === (p = f.split("&")[0]) || void 0 === p ? void 0 : p.toLowerCase(), e.next = 37;
                                            break;
                                        case 18:
                                            return e.prev = 18, e.next = 21, d();
                                        case 21:
                                            v = e.sent, e.next = 27;
                                            break;
                                        case 24:
                                            e.prev = 24, e.t0 = e.catch(18), v = {};
                                        case 27:
                                            if (v || (v = {}), !v || !v.country_code || 0 != ie) {
                                                e.next = 31;
                                                break
                                            }
                                            if (!(Se.indexOf("," + v.country_code.toLowerCase() + ",") > -1)) {
                                                e.next = 31;
                                                break
                                            }
                                            return e.abrupt("return", Xe("truste-implied-failed"));
                                        case 31:
                                            if (null === (h = v) || void 0 === h ? void 0 : h.country_code) {
                                                e.next = 36;
                                                break
                                            }
                                            return Ke("ORA_COUNTRYSELECT", "true", .04), e.abrupt("return", Xe("visitorinfo-failed", !0));
                                        case 36:
                                            r = null === (b = v) || void 0 === b || null === (x = b.country_code) || void 0 === x ? void 0 : x.toLowerCase();
                                        case 37:
                                            if (r != u) {
                                                e.next = 40;
                                                break
                                            }
                                            return Ke("ORA_COUNTRYSELECT", "true", .04), e.abrupt("return", Xe("user-is-local"));
                                        case 40:
                                            de({
                                                vi_countryid: r
                                            }), T({
                                                pgsiteid: m,
                                                pgcountryid: u,
                                                pgcountry: l,
                                                pglang: y,
                                                html_lang: j,
                                                addUS: i,
                                                altpages: o
                                            });
                                        case 42:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [18, 24]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        tt = function() {
                            var e = Object(s.a)(c.a.mark((function e() {
                                var t, n, r, i;
                                return c.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t = !1, n = [], e.prev = 2, e.next = 5, f();
                                        case 5:
                                            r = e.sent, k(r), Array.isArray(r) && (r.forEach((function(e, t) {
                                                var r = e || {},
                                                    o = r.siteid,
                                                    a = r.countrycode,
                                                    c = void 0 === a ? "" : a,
                                                    s = r.countryname,
                                                    l = r.englishcountryname;
                                                n[o] = [c, s, l], c.toLowerCase() == Ve && (i = o)
                                            })), N(n)), i = "default" === i ? "us" : i, (null === ze || void 0 === ze ? void 0 : ze.indexOf("," + i + ",")) < 0 && (t = "no-localpage-available"), e.next = 15;
                                            break;
                                        case 12:
                                            e.prev = 12, e.t0 = e.catch(2), t = "pditlocalemap-failed";
                                        case 15:
                                            if (!t) {
                                                e.next = 22;
                                                break
                                            }
                                            if (!(t.indexOf("pdit") > -1)) {
                                                e.next = 21;
                                                break
                                            }
                                            return Ke("ORA_COUNTRYSELECT", "true", .04), e.abrupt("return", Xe(t, !0));
                                        case 21:
                                            return e.abrupt("return", Xe(t));
                                        case 22:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [2, 12]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }(),
                        nt = function() {
                            var e = Object(s.a)(c.a.mark((function e() {
                                var t, n, r, i, o, a, s, l, u, d;
                                return c.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t = !1, n = "", r = "", i = "", o = "", a = "", e.prev = 6, e.next = 9, p();
                                        case 9:
                                            s = e.sent, l = (null === s || void 0 === s ? void 0 : s.languages) || [], u = function(e, t, c, s, l) {
                                                n = e, r = t, i = c, o = s, a = l
                                            }, d = function(e, t) {
                                                "object" === typeof e && Object.keys(e).forEach((function(r) {
                                                    var i, o, a = (null === e || void 0 === e || null === (i = e[r]) || void 0 === i ? void 0 : i[0]) || {};
                                                    "" == n && ((null === (o = function(e) {
                                                        return {
                                                            0: j == e,
                                                            1: y == e || m == e,
                                                            2: "en" == e
                                                        }
                                                    }(r)) || void 0 === o ? void 0 : o[t]) && u(a.visit, a.seepage, a.nothanks, a.question, a.country))
                                                }))
                                            }, Array.isArray(l) && l.forEach((function(e, t) {
                                                d(e, 0)
                                            })), "" == n && Array.isArray(l) && l.forEach((function(e, t) {
                                                d(e, 1)
                                            })), "" == n && Array.isArray(l) && l.forEach((function(e, t) {
                                                d(e, 2)
                                            })), e.next = 21;
                                            break;
                                        case 18:
                                            e.prev = 18, e.t0 = e.catch(6), t = "translation-json-failed";
                                        case 21:
                                            if (!t) {
                                                e.next = 23;
                                                break
                                            }
                                            return e.abrupt("return", Xe(t, !0));
                                        case 23:
                                            if ("" != n) {
                                                e.next = 25;
                                                break
                                            }
                                            return e.abrupt("return", Xe("no-translation-found"));
                                        case 25:
                                            w({
                                                visittrans: n,
                                                seepagetrans: r,
                                                nothankstrans: i,
                                                questiontrans: o,
                                                countryttrans: a
                                            });
                                        case 26:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [6, 18]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                    Object(i.useEffect)((function() {
                        ! function() {
                            var e, t, n, r = 0,
                                i = [];
                            if (Array.isArray(E))
                                for (var o = 0; o < E.length; o++) {
                                    var a, c, s = E[o];
                                    if (Ve && (null === L || void 0 === L || null === (a = L[s.siteid]) || void 0 === a || null === (c = a[0]) || void 0 === c ? void 0 : c.toLowerCase()) == Ve && "default" != s.siteid) {
                                        r++, e = "us" == s.siteid ? "" : "/" + s.siteid, t = s.siteid, n = s.countryname;
                                        var l = s.siteid.substr(s.siteid.indexOf("-") + 1);
                                        "en" === l && i.push({
                                            href: "/".concat(s.siteid).concat(R),
                                            country: s.countryname + " - English"
                                        }), "fr" === l && i.push({
                                            href: "/".concat(s.siteid).concat(R),
                                            country: s.countryname + " - Fran\xe7ais"
                                        }), "de" === l && i.push({
                                            href: "/".concat(s.siteid).concat(R),
                                            country: s.countryname + " - German"
                                        }), "nl" === l && i.push({
                                            href: "/".concat(s.siteid).concat(R),
                                            country: s.countryname + " - Dutch"
                                        }), "ar" === l && (r = 0), "middleeast" === s.siteid && (r = 0), "cn" === s.siteid && (r = 0)
                                    }
                                }
                            M({
                                burl: e,
                                suggestedSiteId: t,
                                suggestedCountryName: n,
                                transNumber: r
                            }), W(i)
                        }()
                    }), [E, Ve, L]);
                    var rt = function() {
                        var e = Array.isArray(Ee) ? Ee.map((function(e) {
                            var t = Array.isArray(e[2]) ? e[2].map((function(e) {
                                var t = {};
                                if (ze && ze.indexOf("," + e + ",") > -1) {
                                    var n, r = e.indexOf("-") > -1 ? function(e) {
                                        var t, n, r, i = (null === e || void 0 === e ? void 0 : e.split("-")) || "";
                                        return r = "ca" == i[0] && "en" == i[1] ? " - English" : "ca" == i[0] && "fr" == i[1] ? " - Fran\xe7ais" : "", (null === L || void 0 === L || null === (t = L[e]) || void 0 === t ? void 0 : t[1]) ? (null === L || void 0 === L || null === (n = L[e]) || void 0 === n ? void 0 : n[1]) + r : ""
                                    }(e) : null === L || void 0 === L || null === (n = L[e]) || void 0 === n ? void 0 : n[1];
                                    r || "us" !== e ? (t.href = "/".concat(e).concat(R), t.countryName = r) : (t.href = R, t.countryName = "United States")
                                }
                                return t
                            })) : [];
                            t = t.filter((function(e) {
                                return Object.keys(e).length > 0
                            }));
                            var n = Math.floor(t.length / 2),
                                r = t.slice(0, n),
                                i = t.slice(n);
                            return {
                                name: e[1],
                                label: e[0],
                                list1: r,
                                list2: i
                            }
                        })) : [];
                        z(e)
                    };
                    Object(i.useEffect)((function() {
                        rt()
                    }), [L, R]);
                    var it = function(e) {
                            var t, n;
                            null === (t = document.querySelector("body")) || void 0 === t || null === (n = t.classList) || void 0 === n || n.remove("u24show"), Ke("ORA_COUNTRYSELECT", "true", 1), null === e || void 0 === e || e.preventDefault()
                        },
                        ot = function(e, t) {
                            null === e || void 0 === e || e.preventDefault(), K(t)
                        };
                    return !be && null === te && Ve ? Object(r.jsxs)("div", {
                        className: "u24 u24v0 darktheme",
                        "data-trackas": "active-country-select",
                        children: [Object(r.jsx)("div", {
                            className: "u24w1 ".concat(document.querySelector(".f20") ? "rw-globe" : "icn-globe"),
                            children: Object(r.jsxs)("div", {
                                className: "u24w2",
                                children: [Object(r.jsx)("strong", {
                                    children: We
                                }), Object(r.jsx)("div", {
                                    className: "obttns u24visit ".concat(Te > 1 ? "u24addlang" : ""),
                                    ref: ge,
                                    children: Object(r.jsxs)("div", {
                                        className: "obttn1",
                                        ref: je,
                                        children: [Object(r.jsx)("a", {
                                            ref: ye,
                                            className: "u24btnlnk ".concat(Te > 1 ? "icn-cv-down" : "icn-none"),
                                            "data-lbl": "suggested-".concat(Ne),
                                            href: "".concat(_e).concat(R),
                                            onClick: function(e) {
                                                return function(e) {
                                                    Te > 1 ? e.preventDefault() : Ke("ORA_COUNTRYSELECT", "true", 1)
                                                }(e)
                                            },
                                            children: Pe + " " + Ce
                                        }), Array.isArray(H) && H.length > 1 && Object(r.jsxs)("div", {
                                            className: "u24w3 ".concat(G ? "u24w3open" : ""),
                                            children: [Object(r.jsx)("ul", {
                                                children: H.map((function(e, t) {
                                                    return Object(r.jsx)("li", {
                                                        children: Object(r.jsx)("a", {
                                                            onClick: function() {
                                                                Ke("ORA_COUNTRYSELECT", "true", 1)
                                                            },
                                                            href: e.href,
                                                            children: e.country
                                                        })
                                                    }, t)
                                                }))
                                            }), Object(r.jsx)("i", {})]
                                        })]
                                    })
                                }), Object(r.jsx)("div", {
                                    className: "obttns u24stay",
                                    children: Object(r.jsx)("div", {
                                        className: "obttn5 u24nothanks",
                                        children: Object(r.jsx)("a", {
                                            "data-lbl": "u24nothanks",
                                            className: "u24close thankstrans",
                                            onClick: it,
                                            children: Be
                                        })
                                    })
                                }), function() {
                                    var e = function(e) {
                                        return Array.isArray(e) ? e.map((function(e, t) {
                                            return e.href && Object(r.jsx)("li", {
                                                onClick: function() {
                                                    return Ke("ORA_COUNTRYSELECT", "true", 1)
                                                },
                                                children: Object(r.jsx)("a", {
                                                    href: e.href,
                                                    children: e.countryName
                                                })
                                            }, t)
                                        })) : []
                                    };
                                    return Object(r.jsxs)("div", {
                                        className: "u24w4wrap",
                                        ref: xe,
                                        children: [Object(r.jsxs)("div", {
                                            className: "u24w4 icn-cv-down ".concat(J ? "u24w4open" : ""),
                                            children: [Object(r.jsx)("i", {}), De]
                                        }), Object(r.jsx)("div", {
                                            className: "u24w5 ".concat(J ? "u24w5open" : ""),
                                            children: Object(r.jsxs)("div", {
                                                className: "u24w6",
                                                children: [Object(r.jsx)("span", {
                                                    className: "u24w6Title",
                                                    children: Ue
                                                }), Array.isArray(U) && U.map((function(t, n) {
                                                    return Object(r.jsxs)(o.a.Fragment, {
                                                        children: [Object(r.jsx)("a", {
                                                            href: "#",
                                                            className: "u24region ".concat(t.label, "  ").concat(n === Y ? "u24regioncr" : ""),
                                                            onClick: function(e) {
                                                                return ot(e, n)
                                                            },
                                                            children: t.name
                                                        }), Object(r.jsxs)("ul", {
                                                            className: "".concat(t.label, "-l2 u24-l2 ").concat(n == Y ? "u24-l2visible" : ""),
                                                            children: [Object(r.jsxs)("ul", {
                                                                className: "u24-l2sub",
                                                                children: [Object(r.jsx)("li", {
                                                                    className: "l2Title",
                                                                    ref: Oe,
                                                                    onClick: function(e) {
                                                                        return ot(e, null)
                                                                    },
                                                                    children: t.name
                                                                }), e(t.list1)]
                                                            }), Object(r.jsx)("ul", {
                                                                className: "u24-l2sub",
                                                                children: e(t.list2)
                                                            })]
                                                        })]
                                                    }, t.label)
                                                }))]
                                            })
                                        })]
                                    })
                                }()]
                            })
                        }), Object(r.jsx)("a", {
                            "data-lbl": "close",
                            className: "u24close u24closebtn icn-close",
                            onClick: it
                        })]
                    }) : Object(r.jsx)(o.a.Fragment, {})
                },
                y = n("aLqQ"),
                g = n("nOHt"),
                j = n.n(g),
                x = function() {
                    var e, t = +new Date(+new Date + 12096e5),
                        n = function(e) {
                            var t = JSON.parse(localStorage.getItem(e));
                            return !!(t && !!t.expires && t.expires > +new Date) && t
                        },
                        r = function(n, r) {
                            return (e = function(t) {
                                return e = e || {}, t.forEach((function(t) {
                                    e[t.siteid] = t
                                })), e
                            }(r)).expires = t, localStorage.setItem(n, JSON.stringify(e)), e
                        };
                    return {
                        isInitialized: !1,
                        data: null,
                        init: function() {
                            var e = this;
                            return Object(s.a)(c.a.mark((function t() {
                                return c.a.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (e.isInitialized) {
                                                t.next = 7;
                                                break
                                            }
                                            if (e.data = n("pditlocalemap"), e.data) {
                                                t.next = 6;
                                                break
                                            }
                                            return t.next = 5, l.a.getRequestHandler().get("https://www.oracle.com/pdit-locale-map.json").then((function(e) {
                                                return r("pditlocalemap", e)
                                            }));
                                        case 5:
                                            e.data = t.sent;
                                        case 6:
                                            e.isInitialized = !0;
                                        case 7:
                                            return t.abrupt("return", e.data);
                                        case 8:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        removeLocalStorage: function(t) {
                            localStorage && "function" === typeof localStorage.setItem && (e = null, localStorage.setItem(t, !1))
                        }
                    }
                }(),
                O = function() {
                    var e = Object(g.useRouter)(),
                        t = e.locale === e.defaultLocale ? "" : "".concat(e.locale, "/"),
                        n = u.x.replace("{locale}/", t),
                        o = "u10currentcr",
                        a = Object(i.useState)(null),
                        c = a[0],
                        s = a[1],
                        d = Object(i.useState)(!1),
                        f = d[0],
                        p = d[1],
                        h = Object(i.useState)(!1),
                        v = h[0],
                        b = h[1],
                        m = Object(i.useState)(0),
                        j = m[0],
                        O = m[1],
                        w = Object(i.useRef)(),
                        S = Object(i.useContext)(y.a);
                    Object(i.useEffect)((function() {
                        return E(), O(window.innerWidth), setTimeout((function() {
                                return document.body.classList.add("ready")
                            }), 500), document.addEventListener("mousedown", N), window.addEventListener("resize", L),
                            function() {
                                document.removeEventListener("mousedown", N), window.removeEventListener("resize", L)
                            }
                    }), []), Object(i.useEffect)((function() {
                        var e = w.current.querySelector("#u10cmenu");
                        e && (j < 770 ? e.classList.add("mobile") : e.classList.remove("mobile"), f ? e.classList.add("u10opened") : e.classList.remove("u10opened"))
                    }), [w, f]);
                    var E = function() {
                            S.footerContent && !c ? k(S.footerContent) : l.a.getRequestHandler().get(n, "plain").then((function(e) {
                                if (e) {
                                    var t = e.replace(/h5/g, 'div class="u10ttl"'),
                                        n = _(t);
                                    S.updateFooterContent(n), k(n)
                                }
                            }))
                        },
                        k = function(e) {
                            if (s(e), window.truste && window.truste.eu && window.truste.eu.icon && window.truste.eu.icon.initialize) var t = setTimeout((function() {
                                window.truste.eu.icon.initialize(), clearTimeout(t)
                            }), 500)
                        },
                        _ = function(e) {
                            var t = document.createElement("div");
                            t.innerHTML = e;
                            var n = t.querySelector("#u10");
                            return n && (n.querySelectorAll(".u10w3").forEach((function(e) {
                                var t = document.createElement("a");
                                t.classList.add("u10btn"), t.setAttribute("href", "#"), t.setAttribute("role", "none presentation"), e.append(t)
                            })), n.querySelectorAll(".scl-icons a").forEach((function(e) {
                                e.innerText = ""
                            })), t.querySelectorAll("[data-trackas]").forEach((function(e) {
                                var t = e.getAttribute("data-trackas");
                                e.setAttribute("data-trackas", "".concat(t).concat(u.f))
                            }))), n && n.outerHTML
                        },
                        L = Object(i.useCallback)((function() {
                            if (O(window.innerWidth), w && w.current)
                                if (window.innerWidth < 770) !v && S.globalMenu && q(S.globalMenu), M(w.current.querySelector("#u10cmenu") && w.current.querySelector("#u10cmenu").classList.contains("u10opened")), document.body.classList.remove("u10hide");
                                else {
                                    if (document.querySelector(".u10modal.show")) {
                                        var e = w.current,
                                            t = document.querySelector(".u10modal.show .".concat(o, " .u10clink")) && document.querySelector(".u10modal.show .".concat(o, " .u10clink")).textContent.trim();
                                        if ((e.querySelector(".u10modal.show .".concat(o, " .u10clink")) && e.querySelector(".u10modal.show .".concat(o, " .u10clink")).textContent.trim()) !== t) {
                                            P();
                                            for (var n = e.querySelectorAll("#u10cmenu .u10countrymenu .".concat("u10cmenu-l1", " > li > .u10clink")), r = 0; r < n.length; r += 1) {
                                                var i = n[r];
                                                if (i.textContent.trim() === t) {
                                                    i.parentElement.classList.add(o), i.parentElement.querySelector(".".concat("u10cmenu-l2")).classList.add("selected-region");
                                                    break
                                                }
                                            }
                                            H()
                                        }
                                        document.querySelector(".u10modal").remove()
                                    }
                                    D(!0), document.body.classList.remove("noScroll")
                                }
                        }), [w, S.globalMenu, v]),
                        N = function(e) {
                            w.current.querySelector(".u10mtool") && w.current.querySelector(".u10mtool").contains(e.target) || document.querySelector(".u10modal") && document.querySelector(".u10modal").contains(e.target) || T(!1)
                        },
                        A = function() {
                            var e = w.current.querySelector(".u10active");
                            e && e.classList.remove("u10active")
                        },
                        C = Object(i.useCallback)((function(e) {
                            var t = e.target;
                            if (t && (t.classList.contains("u10btn") || t.parentNode && t.parentNode.classList.contains("u10w3") && "H5" === t.tagName) && window.innerWidth <= 1024) {
                                e.preventDefault();
                                var n = t.closest(".u10w3");
                                n.classList.contains("u10active") ? A() : (A(), n.classList.add("u10active"))
                            }
                            t && t.classList.contains("u10regn") && (e.preventDefault(), !v && S.globalMenu && q(S.globalMenu), T(e))
                        }), [v, S.globalMenu]),
                        T = function(e) {
                            e && e.target.classList.contains("u10regn") ? (e.preventDefault(), p((function(e) {
                                var t = !e;
                                return window.innerWidth < 770 && M(t), D(t), t
                            }))) : (!0 === e && D(!0), p(e))
                        },
                        q = Object(i.useCallback)((function(e) {
                            var t = w.current,
                                n = t.querySelector(".u10regn") && t.querySelector(".u10regn").length && t.current.querySelector(".u10regn").attr("href"),
                                r = n && n.split("#")[1] || "u10countrymenu",
                                i = t.querySelector("#u10cmenu");
                            i && i.querySelector(".".concat("u10toolpop")) && i.querySelector(".".concat("u10toolpop")).remove();
                            var a = document.createElement("div"),
                                c = e.replace(/<([^h/>]*)h5/g, '<a class="u10clink"').replace(/<\/h5>/g, "</a>").replace(/u02/g, "u10");
                            a.innerHTML = c;
                            var s = a.querySelector("#".concat(r)),
                                l = document.createElement("li");
                            if (l.classList.add("u10pttl-li"), s) {
                                s.onclick = B;
                                var u = document.createElement("h5");
                                u.classList.add("u10pttl"), u.innerText = t.querySelector("#u10cmenu .u10ticon").innerText, l.appendChild(u);
                                var d = s.querySelector(".u10countrymenu > ul");
                                d.insertBefore(l, d.firstChild), s.querySelector(".".concat(o)).classList.add("u10currentdr"), s.querySelector(".".concat(o, " .u10cmenu-l2")).classList.add("selected-region");
                                var f = document.createElement("div");
                                if (f.classList.add("u10menupop"), f.classList.add("u10toolpop"), f.appendChild(s), i.appendChild(f), s.getAttribute("data-toollabel")) {
                                    var p = s.getAttribute("data-toollabel");
                                    f.querySelector("h5.u10pttl").innerHTML = p, f.querySelector(".u10ticon > span").innerHTML = p
                                }
                                R(), H(), a.remove(), u.remove(), b(!0)
                            }
                        }), [w]),
                        R = function() {
                            var e = document.querySelector('meta[name="siteid"]') && document.querySelector('meta[name="siteid"]').getAttribute("content") || t || "us",
                                n = x.init(),
                                r = w.current;
                            n.then((function(t) {
                                if (t) {
                                    var n = r.querySelectorAll(".u10menupop a:not(.u10clink):not(.u10blink)"),
                                        i = [];
                                    n.forEach((function(n) {
                                        var r = n.text,
                                            o = 0;
                                        o += +(r === t[e].englishcountryname), o += +(r === t[e].countryname), o += +(0 === r.localeCompare(t[e].countryname)), o += +new RegExp("/".concat(e, "/"), "i").test(n.getAttribute("href")), i.push({
                                            name: r,
                                            score: o
                                        })
                                    }));
                                    var o = i.sort((function(e, t) {
                                        return e.score > t.score ? -1 : t.score > e.score ? 1 : 0
                                    }));
                                    if (o[0].score > 0) {
                                        var a = o[0].name;
                                        I(a)
                                    }
                                }
                            }))
                        },
                        P = function() {
                            var e = w.current;
                            e.querySelector(".u10menupop .".concat(o)) && e.querySelector(".u10menupop .".concat(o)).classList.remove(o), e.querySelector(".u10menupop .".concat("selected-region")) && e.querySelector(".u10menupop .".concat("selected-region")).classList.remove("selected-region")
                        },
                        I = function(e) {
                            var t = w.current,
                                n = "//a[text()='".concat(e, "']"),
                                r = document.evaluate(n, t, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
                            P(), t.querySelector(".u10menupop .".concat(o, " .").concat("u10currentcc")) && t.querySelector(".u10menupop .".concat(o, " .").concat("u10currentcc")).classList.remove("u10currentcc"), r.classList.add("u10currentcc"), r.closest(".".concat("u10cmenu-l2")).classList.add("selected-region"), r.closest(".".concat("u10cmenu-l1", " > li")).classList.add(o), D(!0)
                        },
                        D = Object(i.useCallback)((function(e) {
                            if (!document.querySelector(".u10modal.show")) {
                                var t = w.current,
                                    n = t.querySelector(".".concat("u10cmenu-l1"));
                                if (e) {
                                    if (t.querySelector(".".concat(o, " .").concat("u10cmenu-l2"))) {
                                        var r = t.querySelector(".".concat(o, " .").concat("u10cmenu-l2")).getBoundingClientRect();
                                        n.style.height = "".concat(r.height, "px")
                                    }
                                } else n && (n.style.height = "0px")
                            }
                        }), [w]),
                        M = function(e) {
                            if (!document.querySelector(".u10modal") && e) {
                                var t = document.createElement("div");
                                t.classList.add("u10modal", "show");
                                var n = w.current.querySelector("#u10cmenu").cloneNode(!0);
                                n.classList.add("u10opened"), t.appendChild(n), t.querySelector(".closeModal") && t.querySelector(".closeModal").remove();
                                var r = document.createElement("div");
                                r.classList.add("closeModal"), r.onclick = function(e) {
                                    e.preventDefault(), document.body.classList.remove("noScroll"), t.remove(), T(!1)
                                }, t.onclick = B, n.querySelector(".u10pttl-li") && n.querySelector(".u10pttl-li").appendChild(r), document.body.classList.add("noScroll"), document.body.appendChild(t)
                            }
                        },
                        B = function(e) {
                            var t = e.target;
                            if (t.classList.contains("u10clink")) {
                                var n = t.closest(".u10countrymenu");
                                e.preventDefault(), t.parentElement.classList.contains(o) ? t.parentElement.classList.remove(o) : (n.querySelector(".".concat(o)) && n.querySelector(".".concat(o)).classList.remove(o), n.querySelector(".".concat("selected-region")) && n.querySelector(".".concat("selected-region")).classList.remove("selected-region"), t.parentElement.querySelector(".".concat("u10cmenu-l2")).classList.add("selected-region"), t.parentElement.classList.add(o)), t.closest(".u10modal") || (D(!0), H())
                            }
                        },
                        H = Object(i.useCallback)((function() {
                            var e = w.current;
                            if (e) {
                                e.querySelector(".".concat("u10countrymenu")).setAttribute("role", "tree"), e.querySelectorAll(".u10clink").forEach((function(e) {
                                    e.setAttribute("role", "treeitem"), e.setAttribute("aria-selected", "false"), e.setAttribute("aria-expanded", "false")
                                }));
                                var t = e.querySelector(".".concat(o, " > a"));
                                t && (t.setAttribute("role", "treeitem"), t.setAttribute("aria-selected", "true"), t.setAttribute("aria-expanded", "true")), e.querySelector(".".concat("u10cmenu-l2", " a")).setAttribute("role", "treeitem")
                            }
                        }), [w]);
                    return Object(r.jsx)("section", {
                        ref: w,
                        dangerouslySetInnerHTML: {
                            __html: c
                        },
                        onClick: C
                    })
                },
                w = o.a.memo(O),
                S = n("cpVT"),
                E = n("DQUT");

            function k(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function _(e, t) {
                if (e) {
                    if ("string" === typeof e) return k(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? k(e, t) : void 0
                }
            }

            function L(e) {
                return function(e) {
                    if (Array.isArray(e)) return k(e)
                }(e) || function(e) {
                    if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                }(e) || _(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var N = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
                    e.style.display = "block", e.style.transitionProperty = "height, margin, padding", e.style.transitionDuration = "".concat(t, "ms"), e.style.boxSizing = "border-box", e.style.height = "".concat(e.offsetHeight, "px"), e.offsetHeight, e.style.overflow = "hidden", e.style.height = 0, e.style.paddingTop = 0, e.style.paddingBottom = 0, e.style.marginTop = 0, e.style.marginBottom = 0, window.setTimeout((function() {
                        e.style.display = "none", e.style.removeProperty("height"), e.style.removeProperty("padding-top"), e.style.removeProperty("padding-bottom"), e.style.removeProperty("margin-top"), e.style.removeProperty("margin-bottom"), e.style.removeProperty("overflow"), e.style.removeProperty("transition-duration"), e.style.removeProperty("transition-property")
                    }), t)
                },
                A = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
                    e.style.removeProperty("display");
                    var n = window.getComputedStyle(e),
                        r = n.display;
                    "none" === r && (r = "block"), e.style.display = r;
                    var i = e.offsetHeight;
                    e.style.overflow = "hidden", e.style.height = 0, e.style.paddingTop = 0, e.style.paddingBottom = 0, e.style.marginTop = 0, e.style.marginBottom = 0, e.offsetHeight, e.style.boxSizing = "border-box", e.style.transitionProperty = "height, margin, padding", e.style.transitionDuration = "".concat(t, "ms"), e.style.height = "".concat(i, "px"), e.style.removeProperty("padding-top"), e.style.removeProperty("padding-bottom"), e.style.removeProperty("margin-top"), e.style.removeProperty("margin-bottom"), window.setTimeout((function() {
                        e.style.removeProperty("height"), e.style.removeProperty("overflow"), e.style.removeProperty("transition-duration"), e.style.removeProperty("transition-property")
                    }), t)
                },
                C = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500,
                        n = arguments.length > 2 ? arguments[2] : void 0;
                    return "none" === window.getComputedStyle(e).display ? A(e, t) : N(e, n || t)
                },
                T = function(e, t) {
                    var n = null;
                    return function() {
                        var r = Array.prototype.slice.call(arguments || {}) || [];
                        clearTimeout(n), n = setTimeout((function() {
                            e.apply(void 0, L(r))
                        }), t)
                    }
                },
                q = function(e) {
                    try {
                        var t = e.value,
                            n = new Date(t),
                            r = t.indexOf("T"),
                            i = "";
                        r > 0 && (i = t.substring(0, r + 1));
                        var o = n.getTimezoneOffset() / 60,
                            a = n.getUTCHours();
                        return o = o < 0 ? "-0".concat(o, ":00") : "+0".concat(o, ":00"), i = "".concat(i + a, ":00:00.000").concat(o)
                    } catch (c) {
                        return e
                    }
                },
                R = Object(i.createContext)({}),
                P = function(e) {
                    var t = e.children,
                        n = e.externalLabels;
                    return Object(r.jsx)(R.Provider, {
                        value: n,
                        children: t
                    })
                };

            function I(e, t) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || function(e, t) {
                    if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) {
                        var n = [],
                            r = !0,
                            i = !1,
                            o = void 0;
                        try {
                            for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                        } catch (s) {
                            i = !0, o = s
                        } finally {
                            try {
                                r || null == c.return || c.return()
                            } finally {
                                if (i) throw o
                            }
                        }
                        return n
                    }
                }(e, t) || _(e, t) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
            var D = function(e) {
                    for (var t, n = e.length, r = document.cookie.length, i = 0; i < r;) {
                        var o = i + n;
                        if (document.cookie.substring(i, o) === e) {
                            -1 === (t = document.cookie.indexOf(";", o)) && (t = document.cookie.length), o += 1;
                            var a = decodeURIComponent(document.cookie.substring(o, t).replace(/\+/g, "%20"));
                            return M(a)
                        }
                        i += 1
                    }
                    return ""
                },
                M = function(e) {
                    var t = "undefined" == typeof e ? "NoData" : e;
                    if ("NoData" !== t)
                        for (var n = t.length, r = 0; r < n; r += 1) "." !== t.substr(r, 1) && "?" !== t.substr(r, 1) && "<>".search(t.substr(r, 1)) > -1 && (t = "Invalid", r = n + 1);
                    return t
                };
            var B = function() {
                    var e = escape(window.location.href.replace(/^http:/gi, "https:")); - 1 !== e.indexOf("/secure") && (e = window.location.href.indexOf("/opn/") > -1 ? "http://www.oracle.com/opn/" : "http://www.oracle.com/partners/"), null != D("ORASSO_AUTH_HINT") && (document.cookie = "ORASSO_AUTH_HINT=INVALID; Max-Age=0; domain=.oracle.com; path=/;"), window.location = "https://login.oracle.com/sso/logout?p_done_url=".concat(e)
                },
                H = function(e) {
                    var t = e.isProfActive,
                        n = e.updateProfileState,
                        o = e.content,
                        a = Object(i.useRef)(),
                        c = Object(i.useState)(!1),
                        s = c[0],
                        l = c[1],
                        u = Object(i.useState)(""),
                        d = u[0],
                        f = u[1];
                    Object(i.useEffect)((function() {
                        return document.addEventListener("mousedown", v), window.addEventListener("resize", p),
                            function() {
                                document.removeEventListener("mousedown", v), window.removeEventListener("resize", p)
                            }
                    }), []), Object(i.useEffect)((function() {
                        if (d) {
                            var e = a.current.querySelector(".u28-profilew1");
                            if (e) {
                                var n = a.current.querySelector(".u28prof"),
                                    r = -1;
                                t ? (e.classList.add("u28fadeIn"), r = 0, n && n.setAttribute("aria-expanded", !0)) : (e.classList.remove("u28fadeIn"), n.setAttribute("aria-expanded", !1)), e.querySelectorAll("a").forEach((function(e) {
                                    e.setAttribute("tabindex", r)
                                }))
                            }
                        }
                    }), [t]), Object(i.useEffect)((function() {
                        if (o) {
                            var e = function() {
                                    var e = {},
                                        t = I(D("ORA_UCM_INFO").split("~"), 5);
                                    return e.version = t[0], e.guid = t[1], e.firstname = t[2], e.lastname = t[3], e.username = t[4], e
                                }(),
                                t = document.createElement("div");
                            if (t.innerHTML = o, t) {
                                var n = window.location.href;
                                if (e && e.guid && t.querySelector(".u28-profile") && t.querySelector(".u28-profile").classList.add("loggedin"), t.querySelector("#u28pfile-sout") && t.querySelector("#u28pfile-sout").setAttribute("href", "#"), t.querySelector(".u28prof") && t.querySelector(".u28prof").setAttribute("tabindex", "0"), s && t.querySelector(".u28-profilew1") && t.querySelector(".u28-profilew1").classList.add("right"), e.firstname && "NOT_FOUND" !== e.firstname) {
                                    var r = document.createElement("a");
                                    r.href = "https://profile.oracle.com/myprofile/account/secure/update-account.jspx?nexturl=", r.innerText = "".concat(e.firstname).concat(e.lastname && "NOT_FOUND" !== e.lastname ? " ".concat(e.lastname) : ""), r.setAttribute("data-lbl", "profile:user-account"), r.setAttribute("tabindex", "0");
                                    var i = document.createElement("li");
                                    i.appendChild(r), t.querySelector(".u28l-in") && t.querySelector(".u28l-in").prepend(i)
                                }
                                t.querySelectorAll('[href$="nexturl="]').forEach((function(e) {
                                    var t = e.getAttribute("href");
                                    e.setAttribute("href", "".concat(t).concat(n))
                                })), f(t.innerHTML);
                                var a = setTimeout((function() {
                                    p(), clearTimeout(a)
                                }), 300)
                            }
                        }
                    }), [o, s]);
                    var p = function() {
                            if (a.current) {
                                var e = a.current.querySelector(".u28prof"),
                                    t = a.current.querySelector(".u28-profilew1");
                                if (t && e) {
                                    var n = t.clientWidth;
                                    null === t.offsetParent && (n = parseFloat(window.getComputedStyle(t).getPropertyValue("width")));
                                    var r = e.clientWidth,
                                        i = e.getBoundingClientRect(),
                                        o = window.innerWidth - (i.left + r);
                                    o + r <= n - 20 && l(!0), o + r > n - 20 && l(!1)
                                }
                            }
                        },
                        h = function(e) {
                            e.preventDefault(), n(!t)
                        },
                        v = function(e) {
                            a.current.contains(e.target) || b()
                        },
                        b = function() {
                            n(!1)
                        };
                    return Object(r.jsx)("div", {
                        className: "u28s3",
                        ref: a,
                        dangerouslySetInnerHTML: {
                            __html: d
                        },
                        onClick: function(e) {
                            e.target.classList.contains("u28prof") || e.target.parentElement.classList.contains("u28prof") ? h(e) : e.target.classList.contains("u28back") ? (e.preventDefault(), b()) : e.target.hasAttribute("id") && "u28pfile-sout" === e.target.getAttribute("id") && function(e) {
                                e.preventDefault(), B()
                            }(e)
                        },
                        onKeyDown: function(e) {
                            e.target.classList.contains("u28prof") ? function(e) {
                                var t = a.current.querySelector(".u28-profilew2 a:first-of-type");
                                !e || 13 !== e.keyCode || (h(e), setTimeout((function() {
                                    t && t.focus()
                                }), 10))
                            }(e) : e.target.closest(".u28-profilew1") && function(e) {
                                var t = a.current.querySelector(".u28-profilew2 a:first-of-type"),
                                    n = a.current.querySelector(".u28prof"),
                                    r = null,
                                    i = a.current.querySelector(".u28l-in"),
                                    o = getComputedStyle(i);
                                r = a.current.querySelector("#u28pfile-sout"), "none" === o.display && (r = a.current.querySelector(".u28l-out .u28btn2")), !(e && 9 === e.keyCode && e.target === r || e && e.shiftKey && 9 === e.keyCode && e.target === t) || (h(e), setTimeout((function() {
                                    n.focus()
                                }), 10))
                            }(e)
                        }
                    })
                },
                W = o.a.memo(H);
            var F = function(e) {
                    var t = u.u + e;
                    return new Promise((function(e) {
                        l.a.getRequestHandler().get(t).then((function(t) {
                            e(function(e) {
                                var t = [];
                                try {
                                    e.contents[0].numResults > 0 && (t = L(e.contents[0].records))
                                } catch (n) {
                                    v.a.warn(Object(b.d)("HeaderComponent", "error in search auto suggestions", n.stack))
                                }
                                return t
                            }(t))
                        }))
                    }))
                },
                U = function(e) {
                    var t = "".concat(u.t + e, "*");
                    return new Promise((function(e) {
                        l.a.getRequestHandler().get(t).then((function(t) {
                            e(function(e) {
                                var t = [];
                                try {
                                    e.contents[0].autoSuggest[0].totalNumResults > 0 && (t = e.contents[0].autoSuggest[0].dimensionSearchGroups[0].dimensionSearchValues)
                                } catch (n) {
                                    v.a.warn(Object(b.d)("HeaderComponent", "error in search auto complete", n.stack))
                                }
                                return t
                            }(t))
                        }))
                    }))
                },
                z = function(e) {
                    var t = e.params,
                        n = e.city,
                        r = e.lang,
                        i = e.isFilterClear,
                        o = new URL(u.v, window.location.origin);
                    return Object.keys(t).forEach((function(e) {
                        return o.searchParams.append(e, t[e])
                    })), !i && n && r && ("us" === n && "en" === r || (o.searchParams.append("cty", n), o.searchParams.append("lang", r))), new Promise((function(t) {
                        l.a.getRequestHandler().get(o).then((function(n) {
                            t(function(e, t) {
                                var n, r, i = t.params,
                                    o = [];
                                return e && ("ResultsList" === e.contents[0].mainContent[0].contents[0]["@type"] && (o = e.contents[0].mainContent[0].contents[0].records), e.contents[0].mainContentTop[1].contents.length > 0 && "TopHeaderContent" === e.contents[0].mainContentTop[1].contents[0]["@type"] && (n = e.contents[0].mainContentTop[1].contents[0].url), o.length > 0 && 0 === i.No && o[0].attributes.SiteLink && (r = {
                                    title: o[0].attributes.Title[0],
                                    description: o[0].attributes.Description[0],
                                    displayurl: o[0].attributes.DisplayURL[0],
                                    links: []
                                }, o[0].attributes.SiteLink.forEach((function(e) {
                                    for (var t = e.split("~"), n = 0, i = [0], o = [0], a = [0], c = 0; c < t.length; c += 1) {
                                        n = parseInt(t.length / 3, 10);
                                        for (var s = t[c].split("=")[0], l = t[c].substring(t[c].indexOf("=") + 1), u = 0; u <= n; u += 1) {
                                            var d = "siteLinkTitles".concat(u),
                                                f = "siteLinkDescriptions".concat(u),
                                                p = "siteLinkUrls".concat(u);
                                            s === d && (i[u - 1] = l), s === f && (o[u - 1] = l), s === p && (a[u - 1] = l)
                                        }
                                    }
                                    if (i.length === n && o.length === n && a.length === n)
                                        for (var h = 0; h < n + 1; h += 1)
                                            if (o[h] && i[h] && a[h]) {
                                                var v = {
                                                    scurl: a[h],
                                                    scdescr: o[h],
                                                    sctitle: i[h]
                                                };
                                                r.links.push(v)
                                            }
                                })), o.shift())), {
                                    results: o,
                                    reccomendedresult: n,
                                    siteLinks: r
                                }
                            }(n, e))
                        }))
                    }))
                },
                V = function(e) {
                    var t = e.firstMatched,
                        n = e.val,
                        i = e.searchValue,
                        o = e.dropdownStyles,
                        a = e.handleSearch,
                        c = new RegExp(i, "gi"),
                        s = n.label.replace(c, "<b>".concat(i, "</b>")),
                        l = Object(r.jsx)("li", {
                            "aria-selected": !!t,
                            children: Object(r.jsx)("a", {
                                href: "#",
                                onClick: function(e) {
                                    return a(e)
                                },
                                className: "u28-search u28complete",
                                "data-trackas": "header:search",
                                "data-lbl": "keyword:".concat(i, ":suggest:").concat(n.label),
                                dangerouslySetInnerHTML: {
                                    __html: s
                                },
                                style: {
                                    marginLeft: o.left,
                                    maxWidth: o.width
                                },
                                tabIndex: "-1"
                            })
                        });
                    return n.label === i ? null : l
                },
                Y = function(e) {
                    var t = e.val,
                        n = e.searchValue,
                        i = e.dropdownStyles,
                        o = t.attributes.aoDestinationType,
                        a = t.attributes.Title,
                        c = t.attributes.aoDestinationURL[0],
                        s = "u28-globe",
                        l = a.toString();
                    o && ("Video" === o[0] && (s = "icn-video"), "Coversation" === o[0] && (s = "icn-chat"));
                    var u = l.replace(new RegExp(n, "gi"), (function(e) {
                        return "<b>".concat(e, "</b>")
                    }));
                    return u += "<cite>".concat(c, "</cite>"), Object(r.jsx)("li", {
                        children: Object(r.jsx)("a", {
                            href: c,
                            className: ["u28suggestlnk o-hf", s].join(" "),
                            "data-trackas": "header:search:suggestlnk",
                            "data-lbl": "keyword:".concat(n, ":suggest:").concat(a),
                            dangerouslySetInnerHTML: {
                                __html: u
                            },
                            tabIndex: "-1",
                            style: {
                                marginLeft: i.left,
                                maxWidth: i.width
                            }
                        })
                    })
                };

            function K(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function X(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? K(Object(n), !0).forEach((function(t) {
                        Object(S.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : K(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var G = !1,
                $ = function(e) {
                    var t = e.searchValueTemp,
                        n = e.dropdownStyles,
                        o = e.handleSearch,
                        a = e.handleDropdownActiveSatate,
                        c = e.updateClosestSearchValue,
                        s = e.wrapperStyle,
                        l = e.fallbackWidth,
                        u = e.resetAutoSuggests,
                        d = e.activeSearch,
                        f = {
                            loading: !1,
                            data: []
                        },
                        p = Object(i.useState)(!1),
                        h = p[0],
                        v = p[1],
                        b = Object(i.useState)(X({}, f)),
                        m = b[0],
                        y = b[1],
                        g = Object(i.useState)([]),
                        j = g[0],
                        x = g[1],
                        O = Object(i.useState)({}),
                        w = O[0],
                        S = O[1],
                        E = Object(i.useState)(""),
                        k = E[0],
                        _ = E[1];
                    Object(i.useEffect)((function() {
                        _(t), A()
                    }), [t]), Object(i.useEffect)((function() {
                        C()
                    }), [u]), Object(i.useEffect)((function() {
                        d ? (G = !1, v(!1)) : G = !0
                    }), [d]);
                    var N, A = function() {
                            t.length > 2 ? (T(), q()) : C()
                        },
                        C = function() {
                            v(!1), x([]), y(X({}, f)), _(""), S({})
                        },
                        T = function() {
                            y(X(X({}, m), {}, {
                                loading: !0
                            })), F(t).then((function(e) {
                                G || (a(!0), y({
                                    data: L(e),
                                    loading: !1
                                }), v(!0))
                            }))
                        },
                        q = function() {
                            U(t).then((function(e) {
                                R(L(e)), x(L(e))
                            }))
                        },
                        R = function(e) {
                            var n = {};
                            if (e.length > 0 && e[0].label && 0 === e[0].label.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())) {
                                n = e[0];
                                var r = e[0].label,
                                    i = "".concat(t).concat(r.substr(t.length, r.length));
                                _(i), c(i)
                            }
                            S(n)
                        };
                    return Object(r.jsx)("div", {
                        className: "u28suggestw1",
                        style: {
                            transform: s && s.transform || "inherit"
                        },
                        children: Object(r.jsxs)("ul", {
                            className: ["u28suggest", h && k.length > 0 ? "active" : ""].join(" "),
                            style: {
                                maxWidth: l || "inherit"
                            },
                            children: [w && w.label ? Object(r.jsx)("li", {
                                "aria-selected": !0,
                                children: Object(r.jsx)("a", {
                                    onClick: function(e) {
                                        return o(e)
                                    },
                                    style: {
                                        marginLeft: n.left,
                                        maxWidth: n.width
                                    },
                                    className: "u28-search u28complete",
                                    "data-lbl": "keyword:".concat(t, ":suggest:").concat(w.label),
                                    "data-trackas": "header:search",
                                    href: "#",
                                    dangerouslySetInnerHTML: {
                                        __html: (N = w.label, N.replace(new RegExp(t, "gi"), "<b>".concat(t, "</b>")))
                                    },
                                    tabIndex: "-1"
                                })
                            }) : null, w && w.label !== t && Object(r.jsx)("li", {
                                "aria-selected": !!k && !w.label,
                                children: Object(r.jsx)("a", {
                                    onClick: function(e) {
                                        return o(e)
                                    },
                                    tabIndex: "-1",
                                    className: "u28-search u28complete",
                                    style: {
                                        marginLeft: n.left,
                                        maxWidth: n.width
                                    },
                                    href: "#",
                                    children: t
                                })
                            }), m.data.map((function(e, i) {
                                return i <= 2 && Object(r.jsx)(Y, {
                                    dropdownStyles: n,
                                    val: e,
                                    searchValue: t
                                }, i)
                            })), j.map((function(e, i) {
                                return Object(r.jsx)(V, {
                                    handleSearch: o,
                                    dropdownStyles: n,
                                    val: e,
                                    searchValue: t
                                }, i)
                            }))]
                        })
                    })
                },
                Q = function(e) {
                    var t = e.updateSearch;
                    return Object(r.jsx)("div", {
                        className: "u28rw1",
                        children: Object(r.jsxs)("div", {
                            className: "u28rw2",
                            children: [Object(r.jsx)("div", {
                                children: "No results found"
                            }), Object(r.jsx)("p", {
                                children: "Your search did not match any results."
                            }), Object(r.jsx)("p", {
                                children: "We suggest you try the following to help find what you're looking for:"
                            }), Object(r.jsxs)("ul", {
                                className: "u28w7a",
                                children: [Object(r.jsx)("li", {
                                    children: "Check the spelling of your keyword search."
                                }), Object(r.jsx)("li", {
                                    children: "Use synonyms for the keyword you typed, for example, try \u201capplication\u201d instead of \u201csoftware.\u201d"
                                }), Object(r.jsx)("li", {
                                    children: "Try one of the popular searches shown below."
                                }), Object(r.jsx)("li", {
                                    children: "Start a new search."
                                })]
                            }), Object(r.jsx)("p", {
                                children: "\xa0"
                            }), Object(r.jsx)("p", {
                                children: Object(r.jsx)("strong", {
                                    children: "Trending Questions"
                                })
                            }), Object(r.jsx)("ul", {
                                className: "u28w7",
                                children: ["How are customers using Oracle Cloud apps and infrastructure?", "Analyst Reports", "College recruiting", "Working at Oracle", "Can I take advantage of the cloud in my own data center?", "HCM", "Oracle business transformation", "Try Oracle Cloud for free", "How can I create an agile supply chain?", "Blockchain applications", "Oracle vs AWS", "Financials"].map((function(e, n) {
                                    return Object(r.jsx)("li", {
                                        onClick: function() {
                                            return t({
                                                status: "init",
                                                value: e
                                            }, e)
                                        },
                                        children: e
                                    }, n)
                                }))
                            })]
                        })
                    })
                };

            function J(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }
            var Z = function(e) {
                var t = e.resetSearchStatus,
                    o = e.searchValue,
                    a = e.dropdownStyles,
                    c = e.updateSearchStatus,
                    s = e.dropdownActive,
                    l = e.searchFilters,
                    d = e.updateInputText,
                    f = e.focusToCloseButton,
                    p = {
                        Dy: "1",
                        Nty: "1",
                        Ntk: "SI-ALL5",
                        format: "json",
                        No: 0,
                        Ntt: ""
                    },
                    h = l.city,
                    m = l.lang,
                    y = l.filterText,
                    g = l.cityText,
                    j = l.closeButton,
                    x = Object(i.useRef)(),
                    O = Object(i.useRef)(),
                    w = Object(i.useRef)(),
                    E = Object(i.useState)([]),
                    k = E[0],
                    _ = E[1],
                    N = Object(i.useState)(!1),
                    A = N[0],
                    C = N[1],
                    T = Object(i.useState)(""),
                    q = T[0],
                    R = T[1],
                    P = Object(i.useState)("init"),
                    I = P[0],
                    D = P[1],
                    M = Object(i.useState)(0),
                    B = M[0],
                    H = M[1],
                    W = Object(i.useState)(!1),
                    F = W[0],
                    U = W[1];
                Object(i.useEffect)((function() {
                    s && (V(), Y())
                }), [o]), Object(i.useEffect)((function() {
                    V()
                }), [t]), Object(i.useEffect)((function() {
                    "loaded" === I && k.length < 5 && setTimeout((function() {
                        w.current.focus()
                    }), 150)
                }), [I, k]);
                var V = function() {
                        D("init"), C(!1), R(""), _([]), H(0), O.current.scrollTop = 0
                    },
                    Y = function() {
                        c({
                            status: "loading"
                        }), D("loading"), p.Ntt = o, p.No = B, z({
                            params: p,
                            city: h,
                            lang: m,
                            isFilterClear: F
                        }).then((function(e) {
                            var t = e.reccomendedresult,
                                n = e.results,
                                r = e.siteLinks;
                            if (v.a.debug(Object(b.d)("u28SearchResultsComponent", r)), e && (setTimeout((function() {
                                    c({
                                        status: "loaded"
                                    }), D("loaded")
                                }), u.w + 300), D("loaded")), Array.isArray(n) && n.length > 0 && (R(t), 0 === p.No ? (r && C(function(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {};
                                        t % 2 ? J(Object(n), !0).forEach((function(t) {
                                            Object(S.a)(e, t, n[t])
                                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : J(Object(n)).forEach((function(t) {
                                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                        }))
                                    }
                                    return e
                                }({}, r)), _(L(n))) : _([].concat(L(k), L(n))), K(), X()), e) try {
                                n.length > 0 ? (window.s.prop3 = "".concat(window.s.pageName, ":Search>").concat(o), window.s.prop4 = "Search>".concat(o), window.s.prop5 = "", window.s.prop6 = "") : (window.s.prop6 = "0", window.s.prop3 = "", window.s.prop4 = "", window.s.prop5 = "Search>".concat(o)), window.s.prop8 = window.s.pageName, window.s.eVar26 = "search:askoracle", window.s.prop26 = window.s.eVar26, window.s.channel = "askoraclesearch", window.s.pageName = "".concat(window.s_account[1], ":").concat(window.s_account[2], ":askoraclesearch"), window.s_Ping(!0), window.s.pageName = window.s.prop8
                            } catch (i) {
                                v.a.debug(Object(b.d)("u28SearchResultsComponent", "analytics var fail"))
                            }
                        }))
                    },
                    K = function() {
                        x.current.querySelectorAll(".cb19v2").forEach((function(e) {
                            (e.querySelector("img") || e.querySelector(".bcthumbnail")) && e.classList.add("u28proimg")
                        }))
                    },
                    X = function() {
                        (document.querySelector("div.bcembed") || document.querySelector("div.ytembed") || document.querySelector("div.ytvideo")) && n.e(10).then(n.t.bind(null, "U9Cr", 7)).then((function(e) {
                            ! function() {
                                try {
                                    x.current.querySelectorAll(".u28w8 .bcembed").forEach((function(e) {
                                        window.bc_loadplayer && window.bc_loadplayer(e)
                                    }))
                                } catch (e) {}
                            }()
                        }))
                    };
                Object(i.useEffect)((function() {
                    F && (V(), Y())
                }), [F]);
                return Object(r.jsx)("div", {
                    className: ["u28w4", s ? "u28dropfadeIn dropdownopen" : ""].join(" "),
                    ref: O,
                    onScroll: function(e) {
                        var t = e.target;
                        k.length > 0 && "loaded" === I && t.scrollHeight - t.scrollTop <= 2 * t.clientHeight && (H(B + 10), Y())
                    },
                    children: Object(r.jsx)("div", {
                        className: "u28w1a u28w5 clstrgt",
                        children: Object(r.jsx)("div", {
                            className: "u28w6",
                            children: Object(r.jsxs)("div", {
                                style: {
                                    width: a.width,
                                    left: a.left
                                },
                                ref: x,
                                className: ["u28w8 u28trgt", B > 0 || "loaded" === I || "loading" === I || k.length > 0 ? "u28fadeIn" : "", B > 0 || "loaded" === I ? "u28found u28loaded" : "", "loading" === I && 0 === B ? "loading u28fadeIn" : ""].join(" "),
                                children: [Object(r.jsx)("div", {
                                    className: "u28resultsclose",
                                    children: Object(r.jsx)("a", {
                                        href: "#closeresults",
                                        onKeyDown: function(e) {
                                            return 9 !== e.nativeEvent.keyCode || !0 !== e.shiftKey || (e.preventDefault(), f(), !1)
                                        },
                                        onClick: function(e) {
                                            e.preventDefault(), d()
                                        },
                                        ref: w,
                                        "aria-label": j.ariaLabel,
                                        children: j.text
                                    })
                                }), Object(r.jsx)("ul", {
                                    className: "u28skel",
                                    children: new Array(10).fill(10).map((function(e, t) {
                                        return Object(r.jsx)("li", {}, t)
                                    }))
                                }), k.length > 0 && y && g && !F && Object(r.jsx)("div", {
                                    className: "ctryfilter filter0",
                                    children: Object(r.jsxs)("div", {
                                        className: "ctryfilterw1",
                                        children: [Object(r.jsx)("a", {
                                            className: "filtertxt",
                                            href: y,
                                            children: y
                                        }), Object(r.jsx)("span", {
                                            className: "ctytxt",
                                            children: g
                                        }), Object(r.jsx)("span", {
                                            onClick: function(e) {
                                                e.preventDefault(), U(!0)
                                            },
                                            className: "clrctry"
                                        })]
                                    })
                                }), 0 === k.length && "loaded" === I && Object(r.jsx)("div", {
                                    className: "u28result u28noresults",
                                    children: Object(r.jsx)(Q, {
                                        updateSearch: c
                                    })
                                }), A && Object(r.jsxs)("div", {
                                    className: "u28sitelinkw1",
                                    "data-lbl": "sitelinks-".concat(A.title),
                                    children: [Object(r.jsxs)("div", {
                                        className: "u28sitelinks u28result u28sitelinksp",
                                        children: [Object(r.jsx)("h4", {
                                            children: Object(r.jsx)("a", {
                                                href: A.displayurl,
                                                children: A.title
                                            })
                                        }), Object(r.jsx)("cite", {
                                            children: Object(r.jsx)("a", {
                                                tabIndex: "-1",
                                                href: A.displayurl,
                                                children: A.displayurl
                                            })
                                        }), void 0 !== A.displayurl && Object(r.jsx)("p", {
                                            "data-lbl": "sitelinks-".concat(A.title),
                                            children: A.description
                                        })]
                                    }), A.links.map((function(e, t) {
                                        return Object(r.jsx)("div", {
                                            className: "u28sitelinks u28result u28sitelinksc",
                                            children: Object(r.jsx)("div", {
                                                className: "u28rw1",
                                                children: Object(r.jsxs)("div", {
                                                    className: "u28rw2",
                                                    children: [Object(r.jsx)("h4", {
                                                        children: Object(r.jsx)("a", {
                                                            href: e.scurl,
                                                            "data-lbl": "sitelinks:".concat(e.sctitle),
                                                            children: e.sctitle
                                                        })
                                                    }), Object(r.jsx)("p", {
                                                        "data-lbl": "sitelinks:".concat(e.sctitle),
                                                        children: e.scdescr
                                                    })]
                                                })
                                            })
                                        }, t)
                                    }))]
                                }), q ? Object(r.jsx)("div", {
                                    dangerouslySetInnerHTML: {
                                        __html: q
                                    }
                                }) : null, k.map((function(e, t) {
                                    var n = e.attributes.Title[0],
                                        i = e.attributes.DisplayURL[0],
                                        o = !!e.attributes.Description && e.attributes.Description[0];
                                    if (void 0 !== n && void 0 !== i) {
                                        var a, c = !1,
                                            s = !1;
                                        return null != e.attributes.SourceTag && (c = !0, "video" === e.attributes.SourceTag.toString().toLowerCase() && (s = !0, a = e.attributes.Id[0])), Object(r.jsx)("div", {
                                            className: ["u28result", s ? "u28video" : ""].join(" "),
                                            "data-lbl": "search-row:".concat(t + 1),
                                            children: Object(r.jsx)("div", {
                                                className: "u28rw1",
                                                children: Object(r.jsxs)("div", {
                                                    className: "u28rw2",
                                                    children: [Object(r.jsxs)("div", {
                                                        className: "u28rw3",
                                                        children: [Object(r.jsx)("h4", {
                                                            children: Object(r.jsx)("a", {
                                                                href: i,
                                                                children: n
                                                            })
                                                        }), c ? s ? Object(r.jsx)("cite", {
                                                            children: Object(r.jsx)("a", {
                                                                tabIndex: "-1",
                                                                href: i,
                                                                children: i
                                                            })
                                                        }) : Object(r.jsx)("cite", {
                                                            children: Object(r.jsxs)("div", {
                                                                className: "u28type",
                                                                children: [Object(r.jsx)("span", {
                                                                    children: e.attributes.SourceTag
                                                                }), Object(r.jsx)("a", {
                                                                    tabIndex: "-1",
                                                                    href: i,
                                                                    children: i
                                                                })]
                                                            })
                                                        }) : Object(r.jsx)("cite", {
                                                            children: Object(r.jsx)("a", {
                                                                tabIndex: "-1",
                                                                href: i,
                                                                children: i
                                                            })
                                                        }), o ? Object(r.jsx)("p", {
                                                            children: o
                                                        }) : null]
                                                    }), s ? Object(r.jsx)("div", {
                                                        tabIndex: "-1",
                                                        className: "bcembed bcthumbnail  clickvideo",
                                                        "data-bcid": a
                                                    }) : null]
                                                })
                                            })
                                        }, t)
                                    }
                                }))]
                            })
                        })
                    })
                })
            };

            function ee(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function te(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ee(Object(n), !0).forEach((function(t) {
                        Object(S.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ee(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function ne(e, t, n, r) {
                for (var i = t.split(" "), o = 0, a = i.length; o < a; o++) e.addEventListener(i[o], n, te({}, r))
            }
            var re = function() {
                    var e = {
                            value: null,
                            status: !1
                        },
                        t = 0,
                        n = Object(g.useRouter)(),
                        o = n.locale,
                        a = n.defaultLocale,
                        c = o === a ? u.z : u.A.replace("{locale}", o),
                        s = o === a ? u.y.replace("{locale}/", "") : u.y.replace("{locale}", o),
                        d = Object(i.useState)(!1),
                        f = d[0],
                        p = d[1],
                        h = Object(i.useState)({
                            city: null,
                            lang: null,
                            filterText: null,
                            cityText: null,
                            closeButton: {
                                text: "Close",
                                ariaLabel: "Close Search Results"
                            }
                        }),
                        v = h[0],
                        b = h[1],
                        m = Object(i.useState)(!1),
                        j = m[0],
                        x = m[1],
                        O = Object(i.useState)(!1),
                        w = O[0],
                        S = O[1],
                        k = Object(i.useState)(""),
                        _ = k[0],
                        L = k[1],
                        N = Object(i.useState)(""),
                        A = N[0],
                        T = N[1],
                        q = Object(i.useState)(!1),
                        P = q[0],
                        I = q[1],
                        D = Object(i.useState)({
                            left: "0px",
                            width: "0px"
                        }),
                        M = D[0],
                        B = D[1],
                        H = Object(i.useState)(!1),
                        F = H[0],
                        U = H[1],
                        z = Object(i.useState)(!1),
                        V = z[0],
                        Y = z[1],
                        K = Object(i.useState)(!1),
                        X = K[0],
                        G = K[1],
                        Q = Object(i.useState)(te({}, e)),
                        J = Q[0],
                        ee = Q[1],
                        re = Object(i.useState)(""),
                        ie = re[0],
                        ae = re[1],
                        ce = Object(i.useState)(!1),
                        se = ce[0],
                        le = ce[1],
                        ue = Object(i.useState)(!1),
                        de = ue[0],
                        fe = ue[1],
                        pe = Object(i.useState)("u28-top"),
                        he = pe[0],
                        ve = pe[1],
                        be = Object(i.useState)(!1),
                        me = be[0],
                        ye = be[1],
                        ge = Object(i.useState)(!1),
                        je = ge[0],
                        xe = ge[1],
                        Oe = Object(i.useRef)(!1),
                        we = Object(i.useState)({
                            u28s2: {
                                width: "inherit",
                                transform: "inherit"
                            },
                            u28suggestw1: {},
                            u28s2Class: "",
                            u28suggest: ""
                        }),
                        Se = we[0],
                        Ee = we[1],
                        ke = Object(i.useState)(!1),
                        _e = ke[0],
                        Le = ke[1],
                        Ne = Object(i.useState)(null),
                        Ae = Ne[0],
                        Ce = Ne[1],
                        Te = Object(i.useRef)(!1),
                        qe = Object(i.useRef)(),
                        Re = Object(i.useRef)(),
                        Pe = Object(i.useRef)(),
                        Ie = Object(i.useRef)(),
                        De = Object(i.useContext)(y.a),
                        Me = Object(i.useContext)(R);
                    Object(i.useEffect)((function() {
                        Te.current = !0, oe.load(), dt(), Ye(), He();
                        var e = !!qe.current.closest(".rtl");
                        return p(e), window.addEventListener("scroll", Fe), window.addEventListener("orientationchange", (function() {
                                if (qe.current) {
                                    var e = qe.current.querySelector("#u28nav");
                                    e.classList.contains("u28fadeIn") && (e.classList.add("u29temphide"), setTimeout((function() {
                                        e.classList.remove("u29temphide")
                                    }), 10))
                                }
                            }), !1),
                            function() {
                                Te.current = !1, window.removeEventListener("scroll", Fe)
                            }
                    }), []), Object(i.useEffect)((function() {
                        return window.addEventListener("resize", Ue),
                            function() {
                                window.removeEventListener("resize", Ue)
                            }
                    }), [me]), Object(i.useEffect)((function() {
                        me && U(!1), !me && Oe.current ? setTimeout((function() {
                            Ie.current.querySelector('[data-target="products"]') && Ie.current.querySelector('[data-target="products"]').focus()
                        }), 300) : Oe.current = !0
                    }), [me]), Object(i.useEffect)((function() {
                        j && document && Ke(document.querySelector(".u28l-out"))
                    }), [j]), Object(i.useEffect)((function() {
                        if (Ae && Ae.navBar)
                            for (var e = document.querySelectorAll(".u28v1 .u28s4 a"), t = 0; t < e.length; t++) ne(e[t], "mouseenter touchstart", Be, {
                                once: !0,
                                passive: !0,
                                capture: !1
                            });
                        return function() {
                            for (var e = document.querySelectorAll(".u28v1 .u28s4 a"), t = 0; t < e.length; t++) e[t].removeEventListener("mouseenter", Be, {
                                once: !0,
                                passive: !0,
                                capture: !1
                            }), e[t].removeEventListener("touchstart", Be, {
                                once: !0,
                                passive: !0,
                                capture: !1
                            })
                        }
                    }), [Ae]);
                    var Be = function() {
                            ot()
                        },
                        He = function() {
                            document.querySelectorAll("body > div#u28skip2content").length > 0 && document.querySelector("body > div#u28skip2content").remove(), document.getElementsByTagName("body")[0].prepend(Re.current.cloneNode(!0)), Re.current.remove()
                        };

                    function We() {
                        var e = document.querySelector(".u28ham"),
                            t = getComputedStyle(e);
                        "flex" === t.display && xe(!0), "none" === t.display && xe(!1)
                    }
                    var Fe = function() {
                            if (qe.current) {
                                var e = document.body.scrollTop || document.documentElement.scrollTop;
                                if (e < 0) return ve("u28-top"), void ae("");
                                var n = qe.current.getBoundingClientRect().height;
                                if (e <= 1 && (ve("u28-top"), ae("")), Math.abs(t - e) <= n) return;
                                e > t && e > n ? (ve("u28-up"), setTimeout((function() {
                                    Te.current && ae("u28-past")
                                }), 400)) : Math.abs(e) + window.innerHeight < document.body.scrollHeight && ve("u28-down"), t = e
                            }
                        },
                        Ue = function() {
                            qe.current.querySelector(".u28navw2[data-type].active") || st(), We(), it(), ze(), setTimeout((function() {
                                rt()
                            }), 200)
                        },
                        ze = function() {
                            var e = qe.current;
                            if (e) {
                                var t = e.querySelector(".u28w1").clientHeight,
                                    n = e.querySelector(".u28w2").getBoundingClientRect(),
                                    r = e.querySelector(".u28s2").getBoundingClientRect(),
                                    i = n.left;
                                window.innerWidth <= 974 && document.body.classList.contains("f11") && (i = r.left);
                                var o = {
                                    left: "".concat(i, "px"),
                                    width: "".concat(r.width, "px")
                                };
                                B(te({}, o));
                                var a = [];
                                e.querySelectorAll(".u28navw2").forEach((function(e) {
                                    a.push(e.clientHeight)
                                })), t + Math.max.apply(Math, a) + 61 >= window.innerHeight ? le(!0) : le(!1)
                            }
                        },
                        Ve = function(e) {
                            var t = e.replace(/h2|h3/g, "div"),
                                n = Xe(t);
                            x(n.menu),
                                function() {
                                    for (var e = document.querySelectorAll(".u28navw2[data-type]"), t = 0; t < e.length; ++t) e[t].classList.add("u28first-active")
                                }(), ze()
                        },
                        Ye = function() {
                            De.globalMenu && !j ? Ve(De.globalMenu) : l.a.getRequestHandler().get(c, "plain").then((function(e) {
                                e && Te.current && (De.updateGlobalMenu(e), Ve(e))
                            }))
                        },
                        Ke = function(e) {
                            if (e) {
                                var t = encodeURI(window.location.href.replace(/^http:/gi, "https:")).replace(/^https:\/\/www-content/gi, "http://www-content");
                                e.querySelectorAll('a[href$="nexturl="]').forEach((function(e) {
                                    var n = e.getAttribute("href").replace(/nexturl=/gi, "nexturl=".concat(t));
                                    e.setAttribute("href", n)
                                })), window.frameElement && qe.querySelectorAll("a").forEach((function(e) {
                                    e.setAttribute("target", "_top")
                                }))
                            }
                        },
                        Xe = function(e) {
                            var t = document.createElement("div");
                            t.innerHTML = e;
                            var n = t.querySelector(".u28nav-r2");
                            if (n) {
                                n.querySelectorAll(".u28navw2 div > a").forEach((function(e) {
                                    e.parentNode.classList.add("u28linked")
                                })), n.querySelectorAll(".u28navw2").forEach((function(e) {
                                    var t = e.querySelectorAll("a");
                                    t[0].classList.add("first"), t[t.length - 1].classList.add("last")
                                })), qe.current && qe.current.querySelectorAll(".u28s4 a[data-target]").forEach((function(e) {
                                    var t = e.dataset.target,
                                        r = e.cloneNode(!0);
                                    r.classList.add("u28mctrl");
                                    var i = n.querySelector('.u28navw2[data-type="'.concat(t, '"]'));
                                    i && i.parentNode.insertBefore(r, i)
                                }));
                                var r = [];
                                return t.querySelectorAll(".u28w7 li").forEach((function(e) {
                                    r.push('Ask "'.concat(e.innerText, '"'))
                                })), n.querySelector(".u28w7") && n.querySelector(".u28w7").remove(), {
                                    menu: n.innerHTML,
                                    suggestions: [].concat(r)
                                }
                            }
                            return {
                                menu: !1,
                                suggestions: []
                            }
                        },
                        Ge = function(e) {
                            U(e)
                        },
                        $e = function(e) {
                            We(), setTimeout((function() {
                                var t = qe.current.querySelector(".u28navitm.active"),
                                    n = qe.current.querySelector(".u28ham"),
                                    r = qe.current.querySelector(".u28search"),
                                    i = qe.current.querySelectorAll(".u28navitm.u28mctrl:not(.active)"),
                                    o = i[i.length - 1],
                                    a = i[0];
                                if (je)(e && "Escape" === e.key || e && e.shiftKey && 9 === e.keyCode) && e.target === a ? setTimeout((function() {
                                    n.focus()
                                }), 10) : e && 9 === e.keyCode && (e.target.classList.contains("last") || e.target === o) && setTimeout((function() {
                                    ut(e), r.focus()
                                }), 50);
                                else {
                                    if (e && "Escape" === e.key || e && e.shiftKey && 9 === e.keyCode && e.target.classList.contains("first")) return setTimeout((function() {
                                        st(!0), je ? n.focus() : t.focus()
                                    }), 10), !1;
                                    e && 9 === e.keyCode && e.target.classList.contains("last") && !e.shiftKey && setTimeout((function() {
                                        (st(!0), t && null !== t.nextElementSibling) ? "block" !== getComputedStyle(t.nextElementSibling).display && null !== t.nextElementSibling.nextElementSibling ? t.nextElementSibling.nextElementSibling.focus() : t.nextElementSibling.focus(): qe.current.querySelector(".u28prof").focus()
                                    }), 50)
                                }
                                return !1
                            }), 10)
                        },
                        Qe = function() {
                            return We(), setTimeout((function() {
                                var e = qe.current.querySelectorAll(".u28navw2.active a"),
                                    t = qe.current.querySelectorAll("#u28nav .u28navitm")[0],
                                    n = e[0];
                                je ? setTimeout((function() {
                                    t && t.focus()
                                }), 50) : setTimeout((function() {
                                    n && n.focus()
                                }), 50)
                            }), 50), !1
                        },
                        Je = function(e) {
                            ze(), ee({
                                value: e,
                                status: "init"
                            }), T(""), Ge(!0)
                        };
                    Object(i.useEffect)((function() {
                        me && rt()
                    }), [me]);
                    var Ze = function() {
                        qe.current.querySelector("#askoracleinput").focus()
                    };
                    Object(i.useEffect)((function() {
                        Ze()
                    }), [P]);
                    var et = function(e) {
                            e && e.preventDefault(), tt(), rt("", !1, !1), I(!1)
                        },
                        tt = function(t) {
                            t && t.preventDefault(), ee(te({}, e)), L(""), T(""), U(!1), Ze(), Y(), G(!0)
                        },
                        nt = function(e) {
                            var t = e.getBoundingClientRect().width,
                                n = window.getComputedStyle ? getComputedStyle(e) : e.currentStyle;
                            return t + (parseFloat(n.getPropertyValue("margin-left")) + parseFloat(n.getPropertyValue("margin-right")) || 0)
                        },
                        rt = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                                t = arguments.length > 1 ? arguments[1] : void 0,
                                n = arguments.length > 2 ? arguments[2] : void 0,
                                r = me;
                            "boolean" === typeof n && (r = n);
                            var i = 20,
                                o = qe.current;
                            if (o.querySelector("#u28search")) {
                                var a = o.offsetWidth,
                                    c = document.getElementById("u28s1"),
                                    s = document.getElementById("u28s3"),
                                    l = document.querySelector(".u28s4"),
                                    u = o.querySelector(".u28w1 .cwidth").offsetLeft,
                                    d = 0,
                                    p = 0,
                                    h = 0,
                                    v = 0,
                                    b = document.querySelector(".u28navitm:first-child").offsetLeft,
                                    m = c.offsetLeft,
                                    y = c.offsetWidth,
                                    g = y;
                                if (f && (b = document.querySelector(".u28navitm:last-child").offsetLeft - 10, m = s && s.offsetLeft, y = s && s.offsetWidth), je ? (v = "".concat(u + y, "px"), d = o.querySelector(".u28search").offsetWidth, h = "".concat(m + y, "px"), p = o.querySelector(".u28s4").offsetWidth, f && (b = -(m + g))) : (o && o.querySelectorAll(".u28s4 a").forEach((function(e) {
                                        d += nt(e) || 0
                                    })), h = "".concat(m + y + i, "px"), v = "".concat(u + y + i, "px"), f && (v = "".concat(u + y + 5, "px")), p = l.offsetWidth - i), r) {
                                    f && (je ? (h = parseFloat(h), h = "".concat(-(h = h - i + g + d), "px")) : h = "".concat(parseFloat(h, 10) - i, "px"));
                                    var j = {
                                            width: "".concat(p, "px"),
                                            transform: "translate(".concat(h, ", 0px)")
                                        },
                                        x = {
                                            transform: "translate(-".concat(v, ", 0px)")
                                        },
                                        O = document.body.classList.contains("f11") ? a : "auto";
                                    Ee(te(te({}, Se), {}, {
                                        u28s2: j,
                                        u28suggestw1: x,
                                        u28s2Class: e,
                                        u28suggest: O
                                    })), "boolean" === typeof t && ye(t)
                                } else {
                                    var w = {
                                        width: "".concat(d, "px"),
                                        transform: "translate(".concat(b, "px, 0px)")
                                    };
                                    Ee(te(te({}, Se), {}, {
                                        u28s2: te({}, w),
                                        u28s2Class: e
                                    })), "boolean" === typeof t && ye(t)
                                }
                            }
                        },
                        it = function() {
                            var e = qe.current,
                                t = e.querySelector(".navw2");
                            if (je) t && t.classList.add("u28abs");
                            else {
                                t && t.classList.remove("u28abs");
                                var n = [];
                                e.querySelectorAll(".u28navw1 .u28navw2").forEach((function(e) {
                                    n.push(e.offsetHeight)
                                }));
                                var r = Math.max.apply(Math, n);
                                e.querySelector(".u28nav").style.height = "".concat(r, "px"), t && t.classList.add("u28abs")
                            }
                        },
                        ot = function() {
                            var e = document.querySelectorAll(".u28navw2[data-type]");
                            e.length, setTimeout((function() {
                                for (var t = 0; t < e.length; ++t) e[t].classList.remove("u28first-active")
                            }), 0)
                        },
                        at = function() {
                            et(), ot(), Le(!0), fe(!0), ve("u28-down"), it(), qe.current.querySelectorAll("[data-u28bgsrc]:not([style])").forEach((function(e) {
                                var t = RegExp(/^(?:https?:\/\/)?(?:[^@/\n]+@)?(?:\/\/www\.)?([^:/?\n]+)/),
                                    n = e.getAttribute("data-u28bgsrc");
                                t.test(n) || (n = "//www.oracle.com".concat(n)), e.style.backgroundImage = 'url("'.concat(n, '"')
                            }))
                        },
                        ct = function(e) {
                            var t = qe.current;
                            t.querySelector(".u28s4 a[data-target].active") && t.querySelector(".u28s4 a[data-target].active").classList.remove("active"), t.querySelector(".u28navw1 a[data-target].active") && t.querySelector(".u28navw1 a[data-target].active").classList.remove("active"), t.querySelector('.u28s4 a[data-target="'.concat(e, '"]')) && t.querySelector('.u28s4 a[data-target="'.concat(e, '"]')).classList.add("active"), t.querySelector('.u28navw1 a[data-target="'.concat(e, '"]')) && t.querySelector('.u28navw1 a[data-target="'.concat(e, '"]')).classList.add("active")
                        },
                        st = function() {
                            lt(), Le(!1), fe(!1), ve("u28-down")
                        },
                        lt = function() {
                            var e = qe.current;
                            e.querySelector(".u28s4 a[data-target].active") && e.querySelector(".u28s4 a[data-target].active").classList.remove("active"), e.querySelector(".u28navw1 a[data-target].active") && e.querySelector(".u28navw1 a[data-target].active").classList.remove("active")
                        },
                        ut = function(e) {
                            e.preventDefault(), _e ? st() : (at(), Qe())
                        },
                        dt = function() {
                            De.headerContent && !Ae ? ft(De.headerContent) : l.a.getRequestHandler().get(s, "plain").then((function(e) {
                                e && Te.current && (De.updateHeaderContent(e), ft(e))
                            }))
                        },
                        ft = function(e) {
                            var t = {};
                            if (e) {
                                var r = document.createElement("div");
                                r.innerHTML = e;
                                var i = r.querySelector(".u28v1 nav"),
                                    o = r.querySelector(".u28s3");
                                if (n.locale !== n.defaultLocale) {
                                    var a = r.querySelector("#askoracle");
                                    if (r && a) {
                                        var c, s, l, u, d = r.querySelector("#askoracle input[name=cty]");
                                        d && (c = d.value || null);
                                        var f = r.querySelector("#askoracle input[name=lang]");
                                        f && (s = f.value || null);
                                        var p = r.querySelector("#askoracleinput");
                                        p && (u = p.hasAttribute("data-ctytxt") && p.getAttribute("data-ctytxt") || null, l = p.hasAttribute("data-filtertxt") && p.getAttribute("data-filtertxt") || null);
                                        var h = te({}, v.closeButton);
                                        if (a.hasAttribute("data-resultsclose") && a.hasAttribute("data-resultscloselabel")) h.text = a.getAttribute("data-resultsclose") || h.text, h.ariaLabel = a.getAttribute("data-resultscloselabel") || h.ariaLabel;
                                        else if (r.querySelector(".mnavback")) {
                                            var m = r.querySelector(".mnavback").innerText;
                                            m && (h.text = m, h.ariaLabel = m)
                                        }
                                        b({
                                            city: c,
                                            lang: s,
                                            cityText: u,
                                            filterText: l,
                                            closeButton: te({}, h)
                                        })
                                    }
                                }
                                i && (t.navBar = i.innerHTML), o && (t.profile = o.innerHTML), Object.keys(t).length > 0 && Ce(te({}, t))
                            }
                        };
                    return Object(r.jsxs)("section", {
                        id: "u28",
                        "data-trackas": "header".concat(u.f),
                        ref: qe,
                        onKeyDown: $e,
                        className: ["u28 u28v1 u28adj", he, ie, j ? "dropdownloaded" : "", de ? "u28navactive" : "", w ? "profactive" : "", P ? "u28focus" : "", F ? "dropdownactive" : "", F || !de && !P ? "" : "u28cover", _e ? "u28navactive u28cover u28-open" : ""].join(" "),
                        children: [Object(r.jsx)("span", {
                            className: "u28bttop",
                            children: "\xa0"
                        }), Object(r.jsx)("span", {
                            className: "u28cover",
                            onClick: function(e) {
                                st(e), et(e)
                            },
                            children: "\xa0"
                        }), Object(r.jsx)("div", {
                            id: "u28skip2content",
                            ref: Re,
                            "aria-expanded": "false",
                            tabIndex: "-1",
                            children: Object(r.jsxs)("ul", {
                                children: [Object(r.jsx)("li", {
                                    children: Object(r.jsx)("a", {
                                        id: "u28acc",
                                        href: "https://www.oracle.com/corporate/accessibility/",
                                        children: "Click to view our Accessibility Policy"
                                    })
                                }), Object(r.jsx)("li", {
                                    children: Object(r.jsx)("a", {
                                        id: "u28skip2c",
                                        href: "#maincontent",
                                        children: "Skip to content"
                                    })
                                })]
                            })
                        }), Object(r.jsx)("div", {
                            className: "u28w1",
                            children: Object(r.jsxs)("div", {
                                className: "cwidth",
                                children: [Object(r.jsxs)("div", {
                                    className: "u28s1",
                                    id: "u28s1",
                                    children: [Object(r.jsx)("a", {
                                        href: "/",
                                        className: "u28home rw-logo",
                                        children: "Home"
                                    }), Object(r.jsxs)("a", {
                                        className: "u28ham u28clickable u28animatedham",
                                        href: u.z,
                                        onClick: ut,
                                        "data-trackas": "menu".concat(u.f),
                                        "data-lbl": "menu",
                                        "aria-controls": "u28navw1",
                                        "aria-expanded": !!de,
                                        "aria-haspopup": "true",
                                        role: "button",
                                        children: ["Menu", Object(r.jsx)("i", {}), " ", Object(r.jsx)("i", {}), Object(r.jsx)("i", {})]
                                    })]
                                }), Object(r.jsx)("div", {
                                    className: ["u28s2", me ? "active" : "", Se.u28s2Class || ""].join(" "),
                                    style: te({}, Se.u28s2),
                                    children: Object(r.jsxs)("div", {
                                        className: "u28w2",
                                        children: [Object(r.jsxs)("div", {
                                            className: ["u28w3", _ ? "u28typing" : ""].join(" "),
                                            children: [Object(r.jsx)("div", {
                                                className: "u28logo rw-logo",
                                                children: Object(r.jsx)("span", {
                                                    children: "Oracle"
                                                })
                                            }), Object(r.jsx)("a", {
                                                className: "u28-back rw-cv-left ",
                                                href: "#back",
                                                onClick: et,
                                                title: "Close Search Field",
                                                children: Object(r.jsx)("span", {
                                                    children: Me.prodnav_back || "Back"
                                                })
                                            }), Object(r.jsx)("a", {
                                                className: "u28-searchicon o-hf",
                                                tabIndex: "-1",
                                                href: "#search",
                                                onClick: function(e) {
                                                    e.preventDefault(), I(!0)
                                                },
                                                children: Object(r.jsx)("span", {
                                                    children: Me.hub_search || "Search"
                                                })
                                            }), Object(r.jsxs)("span", {
                                                className: "u28input",
                                                children: [Object(r.jsx)(E.DebounceInput, {
                                                    id: "askoracleinput",
                                                    name: "Ntt",
                                                    minLength: 0,
                                                    debounceTimeout: u.w,
                                                    value: _,
                                                    forceNotifyByEnter: !1,
                                                    onKeyDown: function(e) {
                                                        var t = qe.current.querySelector(".u28suggest"),
                                                            n = !!t && t.querySelector('.u28suggest li[aria-selected="true"]'),
                                                            r = e.nativeEvent.keyCode;
                                                        if ("Escape" === e.key) return et(), !1;
                                                        if (13 === r) return e.preventDefault(), n && n.querySelector("a") && n.querySelector("a").classList.contains("u28suggestlnk") ? window.location.href = n.querySelector("a").getAttribute("href") : (e.target.blur(), Je(_)), !1;
                                                        if (!qe.current.querySelector(".u28suggest") && !qe.current.querySelector(".u28suggest").children.length <= 1) return !1;
                                                        if (9 === r && !1 === e.shiftKey) {
                                                            e.preventDefault();
                                                            var i = qe.current.querySelector("#askoracleinput"),
                                                                o = qe.current.querySelector(".u28clsSearch");
                                                            return i.value ? setTimeout((function() {
                                                                document.activeElement === o && et(), o.blur(), o.focus()
                                                            }), 0) : et(), !1
                                                        }
                                                        if (9 === r && !0 === e.shiftKey) return e.preventDefault(), qe.current.querySelector(".u28-back").focus(), !1;
                                                        if (!_ || !n) return !0;
                                                        if (40 === r) {
                                                            e.preventDefault(), n.setAttribute("aria-selected", "false");
                                                            var a = n.nextSibling ? n.nextSibling : t.firstElementChild;
                                                            if (a) {
                                                                a.setAttribute("aria-selected", "true");
                                                                var c = a.querySelector("a").cloneNode(!0);
                                                                c.querySelector("cite") && c.querySelector("cite").remove();
                                                                var s = c.innerText;
                                                                L(s)
                                                            }
                                                            return !1
                                                        }
                                                        if (38 === r || e.shiftKey && 9 === r) {
                                                            e.preventDefault(), n.setAttribute("aria-selected", "false");
                                                            var l = n.previousElementSibling ? n.previousElementSibling : t.lastElementChild;
                                                            if (l) {
                                                                l.setAttribute("aria-selected", "true");
                                                                var u = l.querySelector("a").cloneNode(!0);
                                                                u.querySelector("cite") && u.querySelector("cite").remove();
                                                                var d = u.innerText;
                                                                L(d)
                                                            }
                                                            return !1
                                                        }
                                                        return !0
                                                    },
                                                    onKeyUp: function(e) {
                                                        return L(e.nativeEvent.target.value)
                                                    },
                                                    onChange: function() {
                                                        _.length > 2 && "init" !== J.status && "loading" !== J.status && (Y((function(e) {
                                                            return !e
                                                        })), ze(), T(_))
                                                    },
                                                    "data-prefix": "Ask",
                                                    autoComplete: "off",
                                                    "aria-label": "Search Oracle.com"
                                                }), Object(r.jsx)("span", {
                                                    className: "u28-microphone rw-microphone",
                                                    children: Object(r.jsx)("span", {
                                                        children: "Search by voice"
                                                    })
                                                }), Object(r.jsx)("a", {
                                                    href: "#",
                                                    onClick: tt,
                                                    title: "Clear Search Field",
                                                    className: "u28clsSearch",
                                                    onKeyDown: function(e) {
                                                        if (9 === e.nativeEvent.keyCode && !1 === e.shiftKey) {
                                                            e.preventDefault();
                                                            var t = qe.current.querySelector("#askoracleinput"),
                                                                n = qe.current.querySelector(".u28clsSearch");
                                                            return t.value && setTimeout((function() {
                                                                document.activeElement === n && et()
                                                            }), 0), !1
                                                        }
                                                        return !0
                                                    }
                                                })]
                                            })]
                                        }), Object(r.jsx)($, {
                                            searchValueTemp: A,
                                            dropdownStyles: M,
                                            handleSearch: function(e) {
                                                e.preventDefault();
                                                var t = e.nativeEvent.target.innerText;
                                                L(t), Je(t)
                                            },
                                            handleDropdownActiveSatate: Ge,
                                            updateClosestSearchValue: function(e) {
                                                L(e);
                                                var t = A.length,
                                                    n = qe.current.querySelector("#askoracleinput");
                                                n.setSelectionRange(t, e.length), n.focus()
                                            },
                                            wrapperStyle: Se.u28suggestw1,
                                            fallbackWidth: Se.u28suggest,
                                            resetAutoSuggests: X,
                                            activeSearch: me
                                        })]
                                    })
                                }), Object(r.jsx)("nav", {
                                    className: ["u28s4 u28clickable", me ? "hidden" : ""].join(" "),
                                    dangerouslySetInnerHTML: {
                                        __html: Ae && Ae.navBar || ""
                                    },
                                    onClick: function(e) {
                                        e.target.classList.contains("u28search") ? function(e) {
                                            e && e.preventDefault(), st(), rt("killtransition", !0), I(!0), L(""), T("")
                                        }(e) : !e.target.classList.contains("u28search") && e.target.classList.contains("u28navitm") && function(e) {
                                            e.preventDefault();
                                            var t = qe.current,
                                                n = e.target;
                                            if ($e(), _e || (at(), Qe()), n.dataset && n.dataset.target) {
                                                var r = n.dataset.target;
                                                n.classList.contains("active") ? (t.querySelector(".u28navw2[data-type].active") && t.querySelector(".u28navw2[data-type].active").classList.remove("active"), _e ? lt() : setTimeout(lt, 401), st()) : (t.querySelector(".u28nav").scrollTop = 0, ct(r), t.querySelector(".u28navw2[data-type].active") && t.querySelector(".u28navw2[data-type].active").classList.remove("active"), t.querySelector('.u28navw2[data-type="'.concat(r, '"]')) && t.querySelector('.u28navw2[data-type="'.concat(r, '"]')).classList.add("active"))
                                            }
                                            ze()
                                        }(e)
                                    },
                                    ref: Ie
                                }), Object(r.jsx)(W, {
                                    updateProfileState: function(e) {
                                        (w || e) && (st(), et()), S(e)
                                    },
                                    isProfActive: w,
                                    content: Ae && Ae.profile || ""
                                })]
                            })
                        }), Object(r.jsx)(Z, {
                            dropdownStyles: M,
                            dropdownActive: F,
                            updateSearchStatus: function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                t && L(e.value), ee(te(te({}, J), e))
                            },
                            searchValue: J.value,
                            resetSearchStatus: V,
                            searchFilters: v,
                            updateInputText: function() {
                                var e = qe.current.querySelector("#askoracleinput");
                                L(""), tt(), setTimeout((function() {
                                    e.focus()
                                }), 0)
                            },
                            focusToCloseButton: function() {
                                var e = qe.current.querySelector(".u28clsSearch");
                                setTimeout((function() {
                                    e.focus()
                                }), 0)
                            }
                        }), Object(r.jsxs)("nav", {
                            id: "u28nav",
                            className: ["u28nav bgload", de ? "u28fadeIn" : "", se ? "u28shortnav" : ""].join(" "),
                            "data-trackas": "menu".concat(u.f),
                            role: "menu",
                            tabIndex: de ? "-1" : "0",
                            children: [Object(r.jsx)("span", {
                                className: "mnavback u28back icn-close",
                                onClick: st,
                                children: "Close"
                            }), Object(r.jsx)("div", {
                                className: "u28navw1 cwidth u28nav-r2",
                                dangerouslySetInnerHTML: {
                                    __html: j
                                },
                                onClick: function(e) {
                                    if (e.target.classList.contains("u28mctrl") && e.target.dataset && e.target.dataset.target) {
                                        e.preventDefault();
                                        var t = e.target,
                                            n = t.dataset.target,
                                            r = qe.current.querySelector(".u28navw2[data-type].active"),
                                            i = qe.current.querySelector('.u28navw2[data-type="'.concat(n, '"]'));
                                        t.classList.contains("active") ? (lt(), r && (r.classList.remove("active"), setTimeout((function() {
                                            C(r, 200), r.style.removeProperty("display")
                                        }), 200))) : (ct(n), r && (C(r, 200), setTimeout((function() {
                                            r.style.removeProperty("display"), r.classList.remove("active")
                                        }), 200)), i && (C(i, 50), setTimeout((function() {
                                            i.classList.add("active"), i.style.removeProperty("display")
                                        }), 50)))
                                    }
                                },
                                ref: Pe
                            })]
                        }), Object(r.jsx)("a", {
                            id: "maincontent",
                            children: "\xa0"
                        })]
                    })
                },
                ie = o.a.memo(re),
                oe = function() {
                    var e = function() {
                            window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = Array.prototype.forEach)
                        },
                        t = function() {
                            Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function(e) {
                                var t = this;
                                do {
                                    if (Element.prototype.matches.call(t, e)) return t;
                                    t = t.parentElement || t.parentNode
                                } while (null !== t && 1 === t.nodeType);
                                return null
                            })
                        },
                        n = function() {
                            [Element.prototype, CharacterData.prototype, DocumentType.prototype].forEach((function(e) {
                                "remove" in e || Object.defineProperty(e, "remove", {
                                    configurable: !0,
                                    enumerable: !0,
                                    writable: !0,
                                    value: function() {
                                        this && this.parentNode && this.parentNode.removeChild(this)
                                    }
                                })
                            }))
                        };
                    return {
                        load: function() {
                            return e(), t(), void n()
                        }
                    }
                }(),
                ae = ie,
                ce = n("8Kt/"),
                se = n.n(ce);

            function le(e) {
                var t = e.metaData,
                    n = (void 0 === t ? {} : t) || {},
                    i = n.title,
                    o = n.description,
                    a = n.keywords,
                    c = n.facebook_title,
                    s = n.facebook_image,
                    l = n.facebook_sitename,
                    d = n.facebook_description,
                    f = n.facebook_url,
                    p = n.facebook_type,
                    h = n.facebook_locale,
                    v = n.summary_large_image,
                    b = n.twitter_url,
                    m = n.twitter_title,
                    y = n.twitter_description,
                    g = n.twitter_image,
                    j = n.twitter_site,
                    x = n.twitter_creator,
                    O = n.weibo_image,
                    w = n.weibo_url,
                    S = n.weibo_description,
                    E = n.weibo_title,
                    k = n.createdDate,
                    _ = n.updatedDate,
                    L = n.robots,
                    N = n.site,
                    A = n.publishDate,
                    C = n.siteid,
                    T = n.countryid,
                    R = n.country,
                    P = n.language,
                    I = n.altPagesContent;
                return Object(r.jsxs)(se.a, {
                    children: [Object(r.jsx)("title", {
                        children: i || ""
                    }), Object(r.jsx)("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0, maximum-scale=1.0"
                    }), Object(r.jsx)("meta", {
                        name: "facebook-domain-verification",
                        content: "oije1oeqkuqvrqofg4yhfdyjsnsvgf"
                    }), Object(r.jsxs)(r.Fragment, {
                        children: [Object(r.jsx)("meta", {
                            name: "app_version",
                            content: u.b || ""
                        }), Object(r.jsx)("meta", {
                            name: "build_version",
                            content: u.d || ""
                        }), Object(r.jsx)("meta", {
                            name: "release_version",
                            content: u.s || ""
                        })]
                    }), Object(r.jsxs)(r.Fragment, {
                        children: [i && Object(r.jsx)("meta", {
                            name: "title",
                            content: i || ""
                        }, "title"), o && Object(r.jsx)("meta", {
                            name: "description",
                            content: o || ""
                        }, "description"), a && Object(r.jsx)("meta", {
                            name: "keywords",
                            content: a || ""
                        }, "keywords"), L && Object(r.jsx)("meta", {
                            name: "robots",
                            content: L || ""
                        }, "robots"), N && Object(r.jsx)("meta", {
                            name: "site",
                            content: N || ""
                        }, "site"), A && Object(r.jsx)("meta", {
                            name: "Updated Date",
                            content: q(A) || ""
                        }, "updated_date"), C && Object(r.jsx)("meta", {
                            name: "siteid",
                            content: C || ""
                        }, "siteid"), T && Object(r.jsx)("meta", {
                            name: "countryid",
                            content: T || ""
                        }, "countryid"), R && Object(r.jsx)("meta", {
                            name: "country",
                            content: R || ""
                        }, "country"), P && Object(r.jsx)("meta", {
                            name: "Language",
                            content: P || ""
                        }, "Language")]
                    }), Object(r.jsxs)(r.Fragment, {
                        children: [c && Object(r.jsx)("meta", {
                            property: "og:title",
                            content: c || ""
                        }, "facebook_title"), s && Object(r.jsx)("meta", {
                            property: "og:image",
                            content: s || ""
                        }, "facebook_image"), l && Object(r.jsx)("meta", {
                            property: "og:site_name",
                            content: l || ""
                        }, "facebook_sitename"), d && Object(r.jsx)("meta", {
                            property: "og:description",
                            content: d || ""
                        }, "facebook_description"), f && Object(r.jsx)("meta", {
                            property: "og:url",
                            content: f || ""
                        }, "facebook_url"), p && Object(r.jsx)("meta", {
                            property: "og:type",
                            content: p || ""
                        }, "facebook_type"), h && Object(r.jsx)("meta", {
                            property: "og:locale",
                            content: h || ""
                        }, "facebook_locale")]
                    }), Object(r.jsxs)(r.Fragment, {
                        children: [v && Object(r.jsx)("meta", {
                            name: "twitter:card",
                            content: v || "summary_large_image"
                        }, "summary_large_image"), b && Object(r.jsx)("meta", {
                            name: "twitter:url",
                            content: b || ""
                        }, "twitter_url"), m && Object(r.jsx)("meta", {
                            name: "twitter:title",
                            content: m || ""
                        }, "twitter_title"), y && Object(r.jsx)("meta", {
                            name: "twitter:description",
                            content: y || ""
                        }, "twitter_description"), g && Object(r.jsx)("meta", {
                            name: "twitter:image",
                            content: g || ""
                        }, "twitter_image"), j && Object(r.jsx)("meta", {
                            name: "twitter:site",
                            content: j || ""
                        }, "twitter_site"), x && Object(r.jsx)("meta", {
                            name: "twitter:creator",
                            content: x || ""
                        }, "twitter_creator")]
                    }), Object(r.jsxs)(r.Fragment, {
                        children: [O && Object(r.jsx)("meta", {
                            name: "weibo:article:image",
                            content: O || ""
                        }, "weibo_image"), w && Object(r.jsx)("meta", {
                            name: "weibo:article:url",
                            content: w || ""
                        }, "weibo_url"), S && Object(r.jsx)("meta", {
                            name: "weibo:article:description",
                            content: S || ""
                        }, "weibo_description"), E && Object(r.jsx)("meta", {
                            name: "weibo:article:title",
                            content: E || ""
                        }, "weibo_title"), k && Object(r.jsx)("meta", {
                            name: "weibo:article:create_at",
                            content: q(k) || ""
                        }, "weibo:article:create_at"), _ && Object(r.jsx)("meta", {
                            name: "weibo:article:update_at",
                            content: q(_) || ""
                        }, "weibo:article:update_at")]
                    }), Object(r.jsxs)(r.Fragment, {
                        children: [Object(r.jsx)("link", {
                            href: "/".concat(u.a, "/main.css"),
                            as: "style",
                            rel: "preload"
                        }), Object(r.jsx)("link", {
                            href: "/".concat(u.a, "/main.css"),
                            rel: "stylesheet"
                        }, "oraclestyles")]
                    }), Object(r.jsx)(r.Fragment, {
                        children: Object(r.jsx)("link", {
                            rel: "preload",
                            href: "https://www.oracle.com/asset/web/fonts/oraclesansvf.woff2",
                            as: "font",
                            crossOrigin: "anonymous"
                        })
                    }), I && I.length > 0 && Object(r.jsx)("meta", {
                        name: "altpages",
                        content: I
                    }), Object(r.jsx)("link", {
                        rel: "shortcut icon",
                        href: "".concat("", "/favicon.ico")
                    }), Object(r.jsx)("script", {
                        src: "//assets.adobedtm.com/6f37a0dc9cdbe818dc4979828b58b88e3f060ea4/satelliteLib-e598c5b61e39a10b402e048e87dd27b0f1cd2d4c.js"
                    })]
                })
            }
            var ue = function(e) {
                var t = e.metaData,
                    n = void 0 === t ? {} : t,
                    o = e.footer,
                    a = e.children,
                    c = e.externalLabels,
                    s = void 0 === c ? {} : c,
                    l = Object(i.useState)(!1),
                    u = l[0],
                    d = l[1];
                Object(i.useEffect)((function() {
                    return window.addEventListener("mousedown", f), window.addEventListener("touchstart", f), window.addEventListener("focusout", (function(e) {
                            e.target.classList.contains("o-hf") && e.target.classList.remove("o-hf")
                        })),
                        function() {
                            window.removeEventListener("mousedown", f), window.removeEventListener("touchstart", f)
                        }
                }), []);
                var f = function(e) {
                        var t = e.target;
                        (["A", "BUTTON"].indexOf(t.tagName) > -1 || ["SPAN", "LI", "DIV"].indexOf(t.tagName) > -1 && t.hasAttribute("tabindex")) && (t.classList.contains("o-hf") || t.classList.add("o-hf"))
                    },
                    p = !1 !== o;
                return Object(i.useEffect)((function() {
                    var e = function() {
                        "complete" === document.readyState && d(!0)
                    };
                    return document.addEventListener("readystatechange", e),
                        function() {
                            document.removeEventListener("readystatechange", e)
                        }
                }), []), Object(r.jsxs)(r.Fragment, {
                    children: [Object(r.jsx)(le, {
                        metaData: n
                    }), Object(r.jsxs)(P, {
                        externalLabels: s,
                        children: [u && Object(r.jsx)(m, {
                            meta: n
                        }), Object(r.jsxs)("div", {
                            className: "f20w1",
                            children: [Object(r.jsx)(ae, {}), a, p && Object(r.jsx)(w, {})]
                        })]
                    }), Object(r.jsx)("script", {
                        language: "JavaScript",
                        async: !0,
                        src: "https://www.oracle.com/us/assets/metrics/ora_storyhub.js"
                    }), Object(r.jsx)("script", {
                        children: "_satellite.pageBottom();"
                    })]
                })
            };

            function de(e, t) {
                if (null == e) return {};
                var n, r, i = {},
                    o = Object.keys(e);
                for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                return i
            }

            function fe() {
                return (fe = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function pe(e, t) {
                e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
            }
            var he = n("17x9"),
                ve = n.n(he),
                be = o.a.createContext(null);

            function me(e, t) {
                var n = Object.create(null);
                return e && i.Children.map(e, (function(e) {
                    return e
                })).forEach((function(e) {
                    n[e.key] = function(e) {
                        return t && Object(i.isValidElement)(e) ? t(e) : e
                    }(e)
                })), n
            }

            function ye(e, t, n) {
                return null != n[t] ? n[t] : e.props[t]
            }

            function ge(e, t, n) {
                var r = me(e.children),
                    o = function(e, t) {
                        function n(n) {
                            return n in t ? t[n] : e[n]
                        }
                        e = e || {}, t = t || {};
                        var r, i = Object.create(null),
                            o = [];
                        for (var a in e) a in t ? o.length && (i[a] = o, o = []) : o.push(a);
                        var c = {};
                        for (var s in t) {
                            if (i[s])
                                for (r = 0; r < i[s].length; r++) {
                                    var l = i[s][r];
                                    c[i[s][r]] = n(l)
                                }
                            c[s] = n(s)
                        }
                        for (r = 0; r < o.length; r++) c[o[r]] = n(o[r]);
                        return c
                    }(t, r);
                return Object.keys(o).forEach((function(a) {
                    var c = o[a];
                    if (Object(i.isValidElement)(c)) {
                        var s = a in t,
                            l = a in r,
                            u = t[a],
                            d = Object(i.isValidElement)(u) && !u.props.in;
                        !l || s && !d ? l || !s || d ? l && s && Object(i.isValidElement)(u) && (o[a] = Object(i.cloneElement)(c, {
                            onExited: n.bind(null, c),
                            in: u.props.in,
                            exit: ye(c, "exit", e),
                            enter: ye(c, "enter", e)
                        })) : o[a] = Object(i.cloneElement)(c, { in: !1
                        }) : o[a] = Object(i.cloneElement)(c, {
                            onExited: n.bind(null, c),
                            in: !0,
                            exit: ye(c, "exit", e),
                            enter: ye(c, "enter", e)
                        })
                    }
                })), o
            }
            var je = Object.values || function(e) {
                    return Object.keys(e).map((function(t) {
                        return e[t]
                    }))
                },
                xe = function(e) {
                    function t(t, n) {
                        var r, i = (r = e.call(this, t, n) || this).handleExited.bind(function(e) {
                            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e
                        }(r));
                        return r.state = {
                            contextValue: {
                                isMounting: !0
                            },
                            handleExited: i,
                            firstRender: !0
                        }, r
                    }
                    pe(t, e);
                    var n = t.prototype;
                    return n.componentDidMount = function() {
                        this.mounted = !0, this.setState({
                            contextValue: {
                                isMounting: !1
                            }
                        })
                    }, n.componentWillUnmount = function() {
                        this.mounted = !1
                    }, t.getDerivedStateFromProps = function(e, t) {
                        var n, r, o = t.children,
                            a = t.handleExited;
                        return {
                            children: t.firstRender ? (n = e, r = a, me(n.children, (function(e) {
                                return Object(i.cloneElement)(e, {
                                    onExited: r.bind(null, e),
                                    in: !0,
                                    appear: ye(e, "appear", n),
                                    enter: ye(e, "enter", n),
                                    exit: ye(e, "exit", n)
                                })
                            }))) : ge(e, o, a),
                            firstRender: !1
                        }
                    }, n.handleExited = function(e, t) {
                        var n = me(this.props.children);
                        e.key in n || (e.props.onExited && e.props.onExited(t), this.mounted && this.setState((function(t) {
                            var n = fe({}, t.children);
                            return delete n[e.key], {
                                children: n
                            }
                        })))
                    }, n.render = function() {
                        var e = this.props,
                            t = e.component,
                            n = e.childFactory,
                            r = de(e, ["component", "childFactory"]),
                            i = this.state.contextValue,
                            a = je(this.state.children).map(n);
                        return delete r.appear, delete r.enter, delete r.exit, null === t ? o.a.createElement(be.Provider, {
                            value: i
                        }, a) : o.a.createElement(be.Provider, {
                            value: i
                        }, o.a.createElement(t, r, a))
                    }, t
                }(o.a.Component);
            xe.propTypes = {}, xe.defaultProps = {
                component: "div",
                childFactory: function(e) {
                    return e
                }
            };
            var Oe = xe;

            function we(e, t) {
                return e.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "")
            }
            var Se = n("i8i4"),
                Ee = n.n(Se),
                ke = !1,
                _e = function(e) {
                    function t(t, n) {
                        var r;
                        r = e.call(this, t, n) || this;
                        var i, o = n && !n.isMounting ? t.enter : t.appear;
                        return r.appearStatus = null, t.in ? o ? (i = "exited", r.appearStatus = "entering") : i = "entered" : i = t.unmountOnExit || t.mountOnEnter ? "unmounted" : "exited", r.state = {
                            status: i
                        }, r.nextCallback = null, r
                    }
                    pe(t, e), t.getDerivedStateFromProps = function(e, t) {
                        return e.in && "unmounted" === t.status ? {
                            status: "exited"
                        } : null
                    };
                    var n = t.prototype;
                    return n.componentDidMount = function() {
                        this.updateStatus(!0, this.appearStatus)
                    }, n.componentDidUpdate = function(e) {
                        var t = null;
                        if (e !== this.props) {
                            var n = this.state.status;
                            this.props.in ? "entering" !== n && "entered" !== n && (t = "entering") : "entering" !== n && "entered" !== n || (t = "exiting")
                        }
                        this.updateStatus(!1, t)
                    }, n.componentWillUnmount = function() {
                        this.cancelNextCallback()
                    }, n.getTimeouts = function() {
                        var e, t, n, r = this.props.timeout;
                        return e = t = n = r, null != r && "number" !== typeof r && (e = r.exit, t = r.enter, n = void 0 !== r.appear ? r.appear : t), {
                            exit: e,
                            enter: t,
                            appear: n
                        }
                    }, n.updateStatus = function(e, t) {
                        void 0 === e && (e = !1), null !== t ? (this.cancelNextCallback(), "entering" === t ? this.performEnter(e) : this.performExit()) : this.props.unmountOnExit && "exited" === this.state.status && this.setState({
                            status: "unmounted"
                        })
                    }, n.performEnter = function(e) {
                        var t = this,
                            n = this.props.enter,
                            r = this.context ? this.context.isMounting : e,
                            i = this.props.nodeRef ? [r] : [Ee.a.findDOMNode(this), r],
                            o = i[0],
                            a = i[1],
                            c = this.getTimeouts(),
                            s = r ? c.appear : c.enter;
                        !e && !n || ke ? this.safeSetState({
                            status: "entered"
                        }, (function() {
                            t.props.onEntered(o)
                        })) : (this.props.onEnter(o, a), this.safeSetState({
                            status: "entering"
                        }, (function() {
                            t.props.onEntering(o, a), t.onTransitionEnd(s, (function() {
                                t.safeSetState({
                                    status: "entered"
                                }, (function() {
                                    t.props.onEntered(o, a)
                                }))
                            }))
                        })))
                    }, n.performExit = function() {
                        var e = this,
                            t = this.props.exit,
                            n = this.getTimeouts(),
                            r = this.props.nodeRef ? void 0 : Ee.a.findDOMNode(this);
                        t && !ke ? (this.props.onExit(r), this.safeSetState({
                            status: "exiting"
                        }, (function() {
                            e.props.onExiting(r), e.onTransitionEnd(n.exit, (function() {
                                e.safeSetState({
                                    status: "exited"
                                }, (function() {
                                    e.props.onExited(r)
                                }))
                            }))
                        }))) : this.safeSetState({
                            status: "exited"
                        }, (function() {
                            e.props.onExited(r)
                        }))
                    }, n.cancelNextCallback = function() {
                        null !== this.nextCallback && (this.nextCallback.cancel(), this.nextCallback = null)
                    }, n.safeSetState = function(e, t) {
                        t = this.setNextCallback(t), this.setState(e, t)
                    }, n.setNextCallback = function(e) {
                        var t = this,
                            n = !0;
                        return this.nextCallback = function(r) {
                            n && (n = !1, t.nextCallback = null, e(r))
                        }, this.nextCallback.cancel = function() {
                            n = !1
                        }, this.nextCallback
                    }, n.onTransitionEnd = function(e, t) {
                        this.setNextCallback(t);
                        var n = this.props.nodeRef ? this.props.nodeRef.current : Ee.a.findDOMNode(this),
                            r = null == e && !this.props.addEndListener;
                        if (n && !r) {
                            if (this.props.addEndListener) {
                                var i = this.props.nodeRef ? [this.nextCallback] : [n, this.nextCallback],
                                    o = i[0],
                                    a = i[1];
                                this.props.addEndListener(o, a)
                            }
                            null != e && setTimeout(this.nextCallback, e)
                        } else setTimeout(this.nextCallback, 0)
                    }, n.render = function() {
                        var e = this.state.status;
                        if ("unmounted" === e) return null;
                        var t = this.props,
                            n = t.children,
                            r = (t.in, t.mountOnEnter, t.unmountOnExit, t.appear, t.enter, t.exit, t.timeout, t.addEndListener, t.onEnter, t.onEntering, t.onEntered, t.onExit, t.onExiting, t.onExited, t.nodeRef, de(t, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]));
                        return o.a.createElement(be.Provider, {
                            value: null
                        }, "function" === typeof n ? n(e, r) : o.a.cloneElement(o.a.Children.only(n), r))
                    }, t
                }(o.a.Component);

            function Le() {}
            _e.contextType = be, _e.propTypes = {}, _e.defaultProps = { in: !1,
                mountOnEnter: !1,
                unmountOnExit: !1,
                appear: !1,
                enter: !0,
                exit: !0,
                onEnter: Le,
                onEntering: Le,
                onEntered: Le,
                onExit: Le,
                onExiting: Le,
                onExited: Le
            }, _e.UNMOUNTED = "unmounted", _e.EXITED = "exited", _e.ENTERING = "entering", _e.ENTERED = "entered", _e.EXITING = "exiting";
            var Ne = _e,
                Ae = function(e, t) {
                    return e && t && t.split(" ").forEach((function(t) {
                        return r = t, void((n = e).classList ? n.classList.remove(r) : "string" === typeof n.className ? n.className = we(n.className, r) : n.setAttribute("class", we(n.className && n.className.baseVal || "", r)));
                        var n, r
                    }))
                },
                Ce = function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return (t = e.call.apply(e, [this].concat(r)) || this).appliedClasses = {
                            appear: {},
                            enter: {},
                            exit: {}
                        }, t.onEnter = function(e, n) {
                            var r = t.resolveArguments(e, n),
                                i = r[0],
                                o = r[1];
                            t.removeClasses(i, "exit"), t.addClass(i, o ? "appear" : "enter", "base"), t.props.onEnter && t.props.onEnter(e, n)
                        }, t.onEntering = function(e, n) {
                            var r = t.resolveArguments(e, n),
                                i = r[0],
                                o = r[1] ? "appear" : "enter";
                            t.addClass(i, o, "active"), t.props.onEntering && t.props.onEntering(e, n)
                        }, t.onEntered = function(e, n) {
                            var r = t.resolveArguments(e, n),
                                i = r[0],
                                o = r[1] ? "appear" : "enter";
                            t.removeClasses(i, o), t.addClass(i, o, "done"), t.props.onEntered && t.props.onEntered(e, n)
                        }, t.onExit = function(e) {
                            var n = t.resolveArguments(e)[0];
                            t.removeClasses(n, "appear"), t.removeClasses(n, "enter"), t.addClass(n, "exit", "base"), t.props.onExit && t.props.onExit(e)
                        }, t.onExiting = function(e) {
                            var n = t.resolveArguments(e)[0];
                            t.addClass(n, "exit", "active"), t.props.onExiting && t.props.onExiting(e)
                        }, t.onExited = function(e) {
                            var n = t.resolveArguments(e)[0];
                            t.removeClasses(n, "exit"), t.addClass(n, "exit", "done"), t.props.onExited && t.props.onExited(e)
                        }, t.resolveArguments = function(e, n) {
                            return t.props.nodeRef ? [t.props.nodeRef.current, e] : [e, n]
                        }, t.getClassNames = function(e) {
                            var n = t.props.classNames,
                                r = "string" === typeof n,
                                i = r ? "" + (r && n ? n + "-" : "") + e : n[e];
                            return {
                                baseClassName: i,
                                activeClassName: r ? i + "-active" : n[e + "Active"],
                                doneClassName: r ? i + "-done" : n[e + "Done"]
                            }
                        }, t
                    }
                    pe(t, e);
                    var n = t.prototype;
                    return n.addClass = function(e, t, n) {
                        var r = this.getClassNames(t)[n + "ClassName"],
                            i = this.getClassNames("enter").doneClassName;
                        "appear" === t && "done" === n && i && (r += " " + i), "active" === n && e && e.scrollTop, r && (this.appliedClasses[t][n] = r, function(e, t) {
                            e && t && t.split(" ").forEach((function(t) {
                                return r = t, void((n = e).classList ? n.classList.add(r) : function(e, t) {
                                    return e.classList ? !!t && e.classList.contains(t) : -1 !== (" " + (e.className.baseVal || e.className) + " ").indexOf(" " + t + " ")
                                }(n, r) || ("string" === typeof n.className ? n.className = n.className + " " + r : n.setAttribute("class", (n.className && n.className.baseVal || "") + " " + r)));
                                var n, r
                            }))
                        }(e, r))
                    }, n.removeClasses = function(e, t) {
                        var n = this.appliedClasses[t],
                            r = n.base,
                            i = n.active,
                            o = n.done;
                        this.appliedClasses[t] = {}, r && Ae(e, r), i && Ae(e, i), o && Ae(e, o)
                    }, n.render = function() {
                        var e = this.props,
                            t = (e.classNames, de(e, ["classNames"]));
                        return o.a.createElement(Ne, fe({}, t, {
                            onEnter: this.onEnter,
                            onEntered: this.onEntered,
                            onEntering: this.onEntering,
                            onExit: this.onExit,
                            onExiting: this.onExiting,
                            onExited: this.onExited
                        }))
                    }, t
                }(o.a.Component);
            Ce.defaultProps = {
                classNames: ""
            }, Ce.propTypes = {};
            var Te = Ce,
                qe = "31E9F530566340489B931F4A5566FA11",
                Re = "5A0B0A9213D344628F4BBA4029291F4E",
                Pe = "0E3B648885C24A02B5B2676BEB82C7E9",
                Ie = Object(i.createContext)({}),
                De = function(e) {
                    var t = e.children,
                        n = Object(i.useState)(0),
                        o = n[0],
                        a = n[1],
                        c = Object(i.useState)(0),
                        s = c[0],
                        l = c[1],
                        u = Object(i.useState)(!1),
                        d = u[0],
                        f = u[1],
                        p = function() {
                            a(window.innerWidth), l(window.innerHeight), window.innerWidth < 860 ? f(!0) : f(!1)
                        };
                    return Object(i.useEffect)((function() {
                        return window.innerWidth < 860 ? f(!0) : f(!1), window.addEventListener("resize", p),
                            function() {
                                window.removeEventListener("resize", p), document.documentElement.style.setProperty("--vh", "".concat(s, "px")), Ie.Provider
                            }
                    }), []), Object(r.jsx)(Ie.Provider, {
                        value: {
                            width: o,
                            height: s,
                            isMobile: d
                        },
                        children: t
                    })
                },
                Me = n("dwco"),
                Be = n.n(Me),
                He = function(e) {
                    e.children;
                    var t = e.items,
                        n = void 0 === t ? 0 : t,
                        o = e.slideRef,
                        a = e.updateActiveIndex,
                        c = e.parentPanelRef,
                        s = e.slidesToShow,
                        l = void 0 === s ? 2 : s,
                        u = e.unique_key,
                        d = e.rtl,
                        f = Object(i.useRef)(null),
                        p = Object(i.useRef)(null),
                        h = Object(i.useState)(0),
                        v = h[0],
                        b = h[1],
                        m = o && o.current,
                        y = c && c.current,
                        g = Object(i.useState)(null),
                        j = g[0],
                        x = g[1];
                    Object(i.useEffect)((function() {
                        Be.a.polyfill();
                        var e, t, n = !1,
                            r = function(e) {
                                var t = Math.abs(Math.round(y.scrollLeft / m.offsetWidth)),
                                    n = t >= 1 ? t : 0;
                                b(n), a(n - 1)
                            },
                            i = function() {
                                n = !1
                            },
                            o = function(r) {
                                n = !0, e = r.pageX - y.offsetLeft, t = y.scrollLeft
                            },
                            c = function(r) {
                                if (n) {
                                    r.preventDefault();
                                    var i = r.pageX - y.offsetLeft - e;
                                    y.scrollLeft = t - i
                                }
                            };
                        return y && (y.addEventListener("mousedown", (function(e) {
                                return o(e)
                            }), {
                                passive: !1
                            }), y.addEventListener("mouseleave", (function(e) {
                                return i()
                            }), {
                                passive: !1
                            }), y.addEventListener("mouseup", (function(e) {
                                return i()
                            }), {
                                passive: !1
                            }), y.addEventListener("mousemove", (function(e) {
                                return c(e)
                            }), {
                                passive: !1
                            }), y.addEventListener("scroll", r)), u && u != j && (x(u), S()),
                            function() {
                                y && (y.removeEventListener("mousedown", (function(e) {
                                    return o(e)
                                })), y.removeEventListener("mouseleave", (function(e) {
                                    return i()
                                })), y.removeEventListener("mouseup", (function(e) {
                                    return i()
                                })), y.removeEventListener("mousemove", (function(e) {
                                    return c(e)
                                })), y.removeEventListener("scroll", r))
                            }
                    }), [v, y, u]);
                    var O = function() {
                            var e = {
                                    nextArrowClass: (1 === l ? v + 1 === n : l + v >= n) ? "slider-inactive-arrow" : "",
                                    prevArrowClass: 0 === v ? "slider-inactive-arrow" : ""
                                },
                                t = e.nextArrowClass,
                                i = e.prevArrowClass;
                            return Object(r.jsxs)("div", {
                                className: "rc20controls",
                                "data-trackas": "rc20controls",
                                children: [Object(r.jsx)("a", {
                                    ref: f,
                                    className: "o-hf icn-chevronleft controls-icn ".concat(i),
                                    onClick: w,
                                    title: "prev",
                                    href: "#"
                                }), Object(r.jsx)("a", {
                                    ref: p,
                                    className: "o-hf icn-chevronright controls-icn ".concat(t),
                                    onClick: E,
                                    title: "next",
                                    href: "#"
                                })]
                            })
                        },
                        w = function(e) {
                            var t = d ? -1 : 1;
                            e.preventDefault(), y && m && v - 1 >= 0 ? y.scroll({
                                left: m.offsetWidth * (v - 1) * t,
                                behavior: "smooth"
                            }) : a(-1)
                        },
                        S = function() {
                            y && m && (y.scrollLeft = 0)
                        },
                        E = function(e) {
                            var t = d ? -1 : 1;
                            e.preventDefault(), y && m && v + 1 < n - 1 && y.scroll({
                                left: m.offsetWidth * (v + 1) * t,
                                behavior: "smooth"
                            })
                        };
                    return Object(r.jsx)(r.Fragment, {
                        children: n > 2 && (n > 1 ? O() : Object(r.jsx)(r.Fragment, {}))
                    })
                };

            function We(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Fe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? We(Object(n), !0).forEach((function(t) {
                        Object(S.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : We(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Ue = u.m || {},
                ze = Ue.ITEMS_API,
                Ve = (Ue.IMAGE_API, Ue.TAXONOMY_API),
                Ye = Ue.LOCALE_SUMMARY_API,
                Ke = "/taxonomies/".concat(qe, "/categories");

            function Xe(e, t) {
                t(e)
            }
            var Ge = function(e) {
                    var t = e.replace(/:/g, "|"),
                        n = "".concat(Ke, '?q=(apiName eq "').concat(t, '")&orderBy=position:asc&links=none&fields=id,parent');
                    return new Promise((function(e, r) {
                        l.a.getOCERequestHandler().get(n, "json", {}, null, Ve).then((function(n) {
                            if (n) {
                                var r = function(e, t) {
                                    var n, r, i = function() {
                                        n = e.items[0].id, r = e.items[0]
                                    };
                                    return e && e.items && e.count > 0 && (1 === e.count ? i() : function() {
                                        for (var i = 0; i < e.count; i += 1) {
                                            var o = e.items[i];
                                            if (o.parent && o.parent.apiName === t) {
                                                r = Fe({}, o), n = o.id;
                                                break
                                            }
                                        }
                                    }(), n || i()), {
                                        txnmyId: n,
                                        txnmyDetails: r,
                                        count: e ? e.count > 0 : null
                                    }
                                }(n, t);
                                e(r)
                            } else e({})
                        })).catch((function(e) {
                            return Xe(e, r)
                        }))
                    }))
                },
                $e = function(e) {
                    var t = e.txnmyId,
                        n = "".concat(Ke, '?q=(parent.id eq "').concat(t, '")&orderBy=position:asc&links=none&fields=apiName,name,parent,ancestors');
                    return new Promise((function(t, r) {
                        l.a.getOCERequestHandler().get(n, "json", {}, null, Ve).then((function(n) {
                            var r = function(e, t) {
                                var n, r = t.txnmyId,
                                    i = t.taxnmyName,
                                    o = t.ancestorSelected,
                                    a = t.taxonomy,
                                    c = "initial-render" !== i && "browser-back" !== i,
                                    s = {
                                        name: "",
                                        categories: []
                                    },
                                    l = {},
                                    u = null,
                                    d = null,
                                    f = null;
                                if (e && e.items && e.items.length > 0) {
                                    if (s.categories = e.items, s.taxonomyId = r, s.categories.length > 0) {
                                        var p = s.categories[0].ancestors;
                                        if (p[0] && p[0].id !== o && (u = p[0] && p[0].id), p && p.length && (n = p[0].id, p.length > 1)) {
                                            var h = p[p.length - 2];
                                            s.parentId = h.id, d = h.id
                                        }
                                        var v = s.categories[0].parent;
                                        v && (s.name = v.name, s.apiName = v.apiName)
                                    }
                                    s.parentId || r === qe || (s.parentId = qe), l = {
                                        product: "".concat(s.apiName.replace(/\|/g, ":"))
                                    }
                                }
                                if (c && i && !l.product) {
                                    var b = I(a.categories.filter((function(e) {
                                            return e.id === r
                                        })), 1)[0],
                                        m = b.apiName;
                                    f = b.parent.id, l = {
                                        product: "".concat(m.replace(/\|/g, ":"))
                                    }
                                }
                                return {
                                    taxonomyObj: s,
                                    queryParam: l,
                                    ancestorId: u,
                                    grandParentId: d,
                                    taxonomyCategoryId: n,
                                    shouldUpdateQueryParams: c,
                                    parentId: f,
                                    size: e && e.items && e.items.length
                                }
                            }(n, e);
                            t(r)
                        })).catch((function(e) {
                            return Xe(e, r)
                        }))
                    }))
                },
                Qe = function(e) {
                    var t = Object(i.useContext)(y.a).viewport,
                        n = (t.width, t.height, t.isMobile, Object(i.useContext)(R));

                    function o(t) {
                        e.onChange(t, "5A0B0A9213D344628F4BBA4029291F4E", "", "rc20p1-open")
                    }
                    return Object(r.jsx)("div", {
                        className: "rh02panel rh02p1",
                        "data-trackas": "rc20:panel1",
                        children: Object(r.jsx)("div", {
                            className: "rh02w2 darktheme",
                            children: Object(r.jsxs)("div", {
                                className: "rh02w3",
                                children: [Object(r.jsxs)("button", {
                                    className: "rh02-pcontent",
                                    onClick: o,
                                    "data-lbl": "panel1-home-oci-content-area",
                                    children: [Object(r.jsx)("h1", {
                                        className: "rh02-ttl",
                                        dangerouslySetInnerHTML: {
                                            __html: n.prodnav_p1_title || "Oracle Cloud<b>Infrastructure</b>"
                                        }
                                    }), Object(r.jsx)("div", {
                                        className: "rh02-sub",
                                        children: n.prodnav_p1_subtitle || "Highly Automated and Secure"
                                    }), Object(r.jsx)("div", {
                                        className: "rh02-leadin",
                                        children: Object(r.jsx)("p", {
                                            children: n.prodnav_p1_text || "Oracle Cloud infrastructure combines the elasticity and utility of public cloud with the granular control, security, and predictability of on-premises infrastructure. Simplify operations and spend less with database, platform, and infrastructure services running in public regions and customer data centers."
                                        })
                                    })]
                                }), Object(r.jsxs)("div", {
                                    className: "rh02w4",
                                    children: [Object(r.jsx)("div", {
                                        className: "rh02-cta",
                                        children: Object(r.jsx)("div", {
                                            className: "obttns",
                                            children: Object(r.jsx)("div", {
                                                children: Object(r.jsx)("a", {
                                                    onClick: o,
                                                    "data-lbl": "panel1-home-oci-learn-more",
                                                    children: n.prodnav_exploreProd || "Explore products"
                                                })
                                            })
                                        })
                                    }), Object(r.jsxs)("div", {
                                        className: "rh02-xcontent",
                                        children: [Object(r.jsx)("div", {
                                            className: "rh02head",
                                            children: Object(r.jsx)("h5", {
                                                children: "Featured"
                                            })
                                        }), Object(r.jsxs)("div", {
                                            className: "rh02link",
                                            children: [Object(r.jsx)("h3", {
                                                children: "HIGHLIGHT"
                                            }), Object(r.jsx)("a", {
                                                href: "/cloud/",
                                                children: "Oracle Gen 2 Cloud Infrastructure"
                                            }), Object(r.jsx)("p", {
                                                children: "Explore our extensive Cloud product portfolio and learn the benefits of adopting Oracle Cloud."
                                            })]
                                        }), Object(r.jsxs)("div", {
                                            className: "rh02link",
                                            children: [Object(r.jsx)("h3", {
                                                children: "NEW"
                                            }), Object(r.jsx)("a", {
                                                href: "/database/autonomous-database.html",
                                                children: "Autonomous Database"
                                            }), Object(r.jsx)("p", {
                                                children: "Eliminate complexity and human error with our self-driving, self-repairing and self-securing database."
                                            })]
                                        }), Object(r.jsxs)("div", {
                                            className: "rh02link",
                                            children: [Object(r.jsx)("h3", {
                                                children: "FEATURED CUSTOMER STORY"
                                            }), Object(r.jsx)("a", {
                                                href: "/a/ocom/docs/oracle-cloud-infrastructure-ten-reasons.pdf",
                                                target: "_blank",
                                                children: "10 Reasons To Adopt Oracle\u2019s Gen 2 Cloud"
                                            }), Object(r.jsx)("p", {
                                                children: "Why Oracle Cloud Infrastructure stands above the rest."
                                            })]
                                        })]
                                    })]
                                })]
                            })
                        })
                    })
                },
                Je = function(e) {
                    var t = Object(i.useContext)(R);

                    function n(t) {
                        e.onChange(t, "0E3B648885C24A02B5B2676BEB82C7E9", "", "rc20p2-open")
                    }
                    return Object(r.jsx)("div", {
                        className: "rh02panel rh02p2",
                        "data-trackas": "rc20:panel2",
                        children: Object(r.jsx)("div", {
                            className: "rh02w2 darktheme",
                            children: Object(r.jsxs)("div", {
                                className: "rh02w3",
                                children: [Object(r.jsxs)("button", {
                                    className: "rh02-pcontent",
                                    "data-lbl": "panel2-home-apps-content-area",
                                    onClick: n,
                                    children: [Object(r.jsx)("h1", {
                                        className: "rh02-ttl",
                                        dangerouslySetInnerHTML: {
                                            __html: t.prodnav_p2_title || "Oracle Cloud<b>Applications</b>"
                                        }
                                    }), Object(r.jsx)("div", {
                                        className: "rh02-sub",
                                        children: t.prodnav_p2_subtitle || "Complete Suite of Integrated Apps"
                                    }), Object(r.jsx)("div", {
                                        className: "rh02-leadin",
                                        children: Object(r.jsx)("p", {
                                            children: t.prodnav_p2_text || "Streamline your enterprise business process. With ERP Financials, Procurement, Project Portfolio Management and more, you can increase productivity, lower costs, and improve controls."
                                        })
                                    })]
                                }), Object(r.jsxs)("div", {
                                    className: "rh02w4",
                                    children: [Object(r.jsx)("div", {
                                        className: "rh02-cta",
                                        children: Object(r.jsx)("div", {
                                            className: "obttns",
                                            children: Object(r.jsx)("div", {
                                                children: Object(r.jsx)("a", {
                                                    onClick: n,
                                                    "data-lbl": "panel2-home-apps-learn-more",
                                                    children: t.prodnav_exploreProd || "Explore products"
                                                })
                                            })
                                        })
                                    }), Object(r.jsxs)("div", {
                                        className: "rh02-xcontent",
                                        children: [Object(r.jsx)("div", {
                                            className: "rh02head",
                                            children: Object(r.jsx)("h5", {
                                                children: "Featured"
                                            })
                                        }), Object(r.jsxs)("div", {
                                            className: "rh02link",
                                            children: [Object(r.jsx)("h3", {
                                                children: "HIGHLIGHT"
                                            }), Object(r.jsx)("a", {
                                                href: "/applications/",
                                                children: "Oracle Cloud Applications"
                                            }), Object(r.jsx)("p", {
                                                children: "Outpace change with marketing-leading applications."
                                            })]
                                        }), Object(r.jsxs)("div", {
                                            className: "rh02link",
                                            children: [Object(r.jsx)("h3", {
                                                children: "NEW"
                                            }), Object(r.jsx)("a", {
                                                href: "/applications/erp/",
                                                children: "Future Ready ERP"
                                            }), Object(r.jsx)("p", {
                                                children: "Oracle Cloud ERP leverages emerging technologies to deliver real-time insights."
                                            })]
                                        }), Object(r.jsxs)("div", {
                                            className: "rh02link",
                                            children: [Object(r.jsx)("h3", {
                                                children: "FEATURED CUSTOMER STORY"
                                            }), Object(r.jsx)("a", {
                                                href: "/applications/human-capital-management/",
                                                children: "Making HR more Human"
                                            }), Object(r.jsx)("p", {
                                                children: "Gain new efficiency with Oracle HCM Cloud."
                                            })]
                                        })]
                                    })]
                                })]
                            })
                        })
                    })
                },
                Ze = (u.m || {}).IMAGE_API;
            var et = function(e, t) {
                var n = e ? "/assets/".concat(e, "/native") : t;
                return new Promise((function(e, t) {
                    l.a.getOCERequestHandler().get(n, "blob", {}, null, Ze).then((function(t) {
                        try {
                            if (t) {
                                var n = window.URL.createObjectURL(t);
                                e(n)
                            } else e({})
                        } catch (r) {
                            e({})
                        }
                    })).catch((function(e) {
                        return function(e, t) {
                            t(e)
                        }(e, t)
                    }))
                }))
            };

            function tt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function nt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? tt(Object(n), !0).forEach((function(t) {
                        Object(S.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : tt(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var rt = 0,
                it = 0,
                ot = function(e) {
                    var t = e.data,
                        n = void 0 === t ? [] : t;
                    n = n.sort((function(e, t) {
                        return e.fields.order > t.fields.order ? 1 : -1
                    }));
                    var o = n.length || 0,
                        a = Object(i.useContext)(y.a),
                        c = a.oceIntegrator,
                        s = a.isPreview,
                        l = Object(i.useRef)(),
                        u = Object(i.useRef)(),
                        d = n.map((function(e) {
                            return Object(i.useRef)(null)
                        })),
                        f = Object(i.useState)(n.map((function(e) {
                            return Object.assign({
                                background: e.fields.background_image,
                                isLoad: !1
                            })
                        }))),
                        p = f[0],
                        h = f[1],
                        v = Object(i.useState)(n.map((function(e) {
                            return Object.assign({
                                background: e.fields.background_image,
                                isLoad: !1
                            })
                        }))),
                        b = v[0],
                        m = v[1],
                        g = Object(i.useState)({
                            activeSlide: 1,
                            prevSlide: 0,
                            isMoving: !1
                        }),
                        j = g[0],
                        x = g[1],
                        O = j && j.activeSlide,
                        w = Object(i.useState)({
                            pause: !1,
                            stop: !1
                        }),
                        E = w[0],
                        k = w[1],
                        _ = Object(i.useState)(1),
                        N = _[0],
                        A = _[1],
                        C = Object(i.useState)(-1),
                        T = C[0],
                        q = C[1],
                        R = function(e) {
                            -1 != e && (u.current.querySelectorAll("a")[e].focus(), setTimeout((function() {
                                u.current.querySelectorAll("a")[e].focus()
                            }), 10))
                        };
                    Object(i.useEffect)((function() {
                        if (s) {
                            var e = (null === b || void 0 === b ? void 0 : b[O - 1]) || null;
                            if (e) {
                                var t, n = null === e || void 0 === e || null === (t = e.background) || void 0 === t ? void 0 : t.id;
                                n && !(null === e || void 0 === e ? void 0 : e.previewBackground) && et(n).then((function(t) {
                                    var n = Object.assign([], b, Object(S.a)({}, O - 1, nt(nt({}, e), {}, {
                                        previewBackground: t
                                    })));
                                    m(L(n))
                                }))
                            }
                        }
                    }), [O]), Object(i.useEffect)((function() {
                        R(T)
                    }), [T]);
                    var P = function() {
                        for (var e, t = u.current.querySelectorAll("li"), n = 0; n < t.length; n++) t[n].querySelector("a").className.includes("rh02cnav") && (e = n);
                        return e
                    };

                    function I(e) {
                        e.stopImmediatePropagation(), e.stopPropagation(), H()
                    }

                    function D(e) {
                        var t = e.keyCode;
                        if (9 === t && !1 === e.shiftKey) {
                            H();
                            var n = l.current.querySelectorAll(".rh02current a"),
                                r = n ? n.length : 0;
                            if (document.activeElement === n[r - 1]) {
                                var i = P();
                                i === T ? R(T) : q(i)
                            }
                            return !1
                        }
                        return 9 === t && !0 === e.shiftKey && (document.activeElement !== document.querySelector(".rh02w2.rh02current .rh02-leadin") && document.activeElement !== document.querySelector(".rh02w2.rh02current h2") || (document.querySelector("#rc20p2 .rh02p2 .rh02-pcontent").focus(), setTimeout((function() {
                            document.querySelector("#rc20p2 .rh02p2 .rh02-pcontent").focus()
                        }), 100))), !1
                    }

                    function M(e) {
                        var t = e.keyCode;
                        if (13 === t) return P() != T && (l.current.querySelector(".rh02w2.rh02current .rh02-leadin") ? l.current.querySelector(".rh02w2.rh02current .rh02-leadin").setAttribute("tabindex", "-1") : l.current.querySelector(".rh02w2.rh02current h2") && l.current.querySelector(".rh02w2.rh02current h2").setAttribute("tabindex", "-1")), setTimeout((function() {
                            Qt()
                        }), 500), !1;
                        if (39 === t) {
                            var n = u.current.querySelectorAll("li").length;
                            return document.activeElement === u.current.querySelectorAll("a")[n - 1] ? q(0) : T + 1 < n && q(T + 1), !1
                        }
                        if (37 === t) {
                            var r = u.current.querySelectorAll("li").length;
                            return document.activeElement === u.current.querySelectorAll("a")[0] ? q(r - 1) : T - 1 >= 0 && q(T - 1), !1
                        }
                        if (9 === t && !1 === e.shiftKey) {
                            var i = u.current.querySelectorAll("a").length;
                            return T + 1 < i && q(T + 1), !1
                        }
                        return 9 !== t || !0 !== e.shiftKey || (document.activeElement === u.current.querySelectorAll("a")[0] ? document.querySelector(".rh02current") && document.querySelectorAll(".rh02current a") && document.querySelectorAll(".rh02current a").length > 0 && (l.current.querySelectorAll(".rh02current a")[l.current.querySelectorAll(".rh02current a").length - 1].focus(), setTimeout((function() {
                            l.current.querySelectorAll(".rh02current a")[l.current.querySelectorAll(".rh02current a").length - 1].focus()
                        }), 0)) : T - 1 >= 0 && q(T - 1), !1)
                    }
                    Object(i.useEffect)((function() {
                        return l && l.current && l.current.addEventListener("focusin", I, !1),
                            function() {
                                l && l.current && l.current.removeEventListener("focusin", I, !1)
                            }
                    }), []), Object(i.useEffect)((function() {
                        return l && l.current && l.current.querySelector(".rh02w2.rh02current") && (l.current.querySelector(".rh02w2.rh02current .rh02-leadin") ? l.current.querySelector(".rh02w2.rh02current .rh02-leadin").setAttribute("tabindex", "0") : l.current.querySelector(".rh02w2.rh02current h2") && l.current.querySelector(".rh02w2.rh02current h2").setAttribute("tabindex", "0"), l.current.querySelector(".rh02w2.rh02current").addEventListener("keydown", D, !1)),
                            function() {
                                l && l.current && l.current.querySelector(".rh02w2.rh02current") && l.current.querySelector(".rh02w2.rh02current").removeEventListener("keydown", D, !1)
                            }
                    }), [j.activeSlide, T]), Object(i.useEffect)((function() {
                        return l.current && l.current.querySelector("ul.rh02nav") && l.current.querySelector("ul.rh02nav").addEventListener("keydown", M, !1),
                            function() {
                                l.current && l.current.querySelector("ul.rh02nav") && l.current.querySelector("ul.rh02nav").removeEventListener("keydown", M, !1)
                            }
                    }), [T, j.activeSlide]), Object(i.useEffect)((function() {
                        var e;
                        return function() {
                                var t = {
                                    root: l ? l.current : null,
                                    rootMargin: "0px",
                                    threshold: .02
                                };
                                try {
                                    e = new IntersectionObserver((function(e, t) {
                                        e.forEach((function(e) {
                                            if (e.isIntersecting) {
                                                var t = e.target.getAttribute("data-position"),
                                                    n = p.map((function(e, n) {
                                                        return n === Number(t) ? nt(nt({}, e), {}, {
                                                            isLoad: !0
                                                        }) : e
                                                    }));
                                                h(n)
                                            }
                                        }))
                                    }), t), d && d[O - 1] && e.observe(d[O - 1].current)
                                } catch (n) {
                                    h(p.map((function(e) {
                                        return Object.assign({}, e, {
                                            isLoad: !0
                                        })
                                    })))
                                }
                            }(),
                            function() {
                                if (e)
                                    for (var t = 0; t < n.length; t++) d && d[t] && d[t].current && e.unobserve(d[t].current)
                            }
                    }), [O]);
                    var B = Object(i.useCallback)((function(e, t) {
                        A(t), setTimeout((function() {
                            var t = l.current,
                                n = e;
                            n || ((n = j.activeSlide + 1) > o ? n = 1 : n < 1 && (n = o)), n && t.querySelector(".rh02-slide".concat(n)) && !j.isMoving && x({
                                isMoving: !0,
                                prevSlide: j.activeSlide,
                                activeSlide: n
                            })
                        }), 10)
                    }), [j.activeSlide, o, j.isMoving]);
                    Object(i.useEffect)((function() {
                        var e = setTimeout((function() {
                            x((function(e) {
                                return nt(nt({}, e), {}, {
                                    isMoving: !1,
                                    prevSlide: 0
                                })
                            })), A(1)
                        }), 600);
                        return function() {
                            clearTimeout(e)
                        }
                    }), [j.isMoving]), Object(i.useEffect)((function() {
                        var e = setInterval((function() {
                            E.pause || E.stop || B(!1, 1)
                        }), 5e3);
                        return function() {
                            clearInterval(e)
                        }
                    }), [B, o, E]);
                    var H = function() {
                            k(nt(nt({}, E), {}, {
                                pause: !0
                            }))
                        },
                        W = Object(i.useCallback)((function() {
                            k(nt(nt({}, E), {}, {
                                stop: !0
                            }))
                        }), [E]),
                        F = Object(i.useCallback)((function(e, t) {
                            if (e.preventDefault(), j.activeSlide !== t) {
                                var n = t < j.activeSlide ? -1 : 1;
                                B(t, n), W()
                            }
                        }), [B, j.activeSlide, W]);

                    function U(e) {
                        rt = e.clientX || e.touches[0].clientX
                    }

                    function z(e) {
                        it = e.clientX || e.changedTouches[0].clientX, V(e)
                    }
                    var V = function() {
                            var e = 1,
                                t = j.activeSlide,
                                n = t,
                                r = rt - it;
                            r > 30 && (n = t + 1 > o ? 1 : t + 1), r < -30 && (e = -1, n = t - 1 < 1 ? o : t - 1), (r >= 30 || r <= -30) && (W(), B(n, e))
                        },
                        Y = function(e, t) {
                            var n, r, i, o, a, l;
                            return p[t] && p[t].isLoad && (null === e || void 0 === e || null === (n = e.fields) || void 0 === n || null === (r = n.background_image) || void 0 === r ? void 0 : r.id) ? s ? s && (null === b || void 0 === b || null === (i = b[t]) || void 0 === i ? void 0 : i.previewBackground) ? {
                                backgroundImage: "url(".concat(null === b || void 0 === b || null === (o = b[t]) || void 0 === o ? void 0 : o.previewBackground, ")")
                            } : {} : {
                                backgroundImage: "url(".concat(c, "/assets/").concat(null === e || void 0 === e || null === (a = e.fields) || void 0 === a || null === (l = a.background_image) || void 0 === l ? void 0 : l.id, "/native)")
                            } : {}
                        };
                    return Object(r.jsxs)("div", {
                        className: ["rh02panel rh02carousel rh02carouselinit rh02random rh02p3", j.isMoving ? "rh02moving" : "", E.pause ? "rh02pause" : "", E.stop ? "rh02stopped" : "", N < 1 ? "rh02carouselback" : ""].join(" "),
                        "data-trackas": "rc20:panel3",
                        ref: l,
                        onMouseEnter: H,
                        onMouseLeave: function() {
                            k(nt(nt({}, E), {}, {
                                pause: !1
                            }))
                        },
                        onTouchStart: U,
                        onTouchEnd: z,
                        onMouseDown: U,
                        onMouseUp: z,
                        role: "button",
                        tabIndex: "-1",
                        children: [n.map((function(e, t) {
                            return Object(r.jsx)("div", {
                                dangerouslySetInnerHTML: {
                                    __html: (n = e.fields.panel_copy, '<div class="rh02w3">'.concat(n, "</div>"))
                                },
                                className: ["rh02w2", "rh02-slide".concat(t + 1), e.fields.theme ? "darktheme" : "", e.fields.background_image ? "bgimg" : "", e.fields.image_class && "rh02noscrim" === e.fields.image_class ? "rh02noscrim" : "", t + 1 === j.activeSlide ? "rh02current" : "", j.prevSlide === t + 1 ? "rh02out" : ""].join(" "),
                                "data-position": t,
                                ref: d && d[t],
                                style: Y(e, t)
                            }, e.id);
                            var n
                        })), n.length > 1 && Object(r.jsx)("ul", {
                            className: "rh02nav",
                            ref: u,
                            children: Array(n.length).fill(null).map((function(e, t) {
                                return Object(r.jsx)("li", {
                                    children: Object(r.jsx)("a", {
                                        className: "o-hf ".concat(t + 1 === j.activeSlide ? "rh02cnav" : ""),
                                        href: "#".concat(t + 1),
                                        title: "View Slide ".concat(t + 1),
                                        onClick: function(e) {
                                            return F(e, t + 1)
                                        },
                                        onTouchStart: function(e) {
                                            return F(e, t + 1)
                                        },
                                        children: Object(r.jsxs)("b", {
                                            children: ["View Slide ", t + 1]
                                        })
                                    })
                                }, t)
                            }))
                        })]
                    })
                },
                at = o.a.memo(ot),
                ct = function(e, t) {
                    var n = function(n) {
                        e && e.current && !e.current.contains(n.target) && t()
                    };
                    Object(i.useEffect)((function() {
                        return document.addEventListener("mousedown", n), document.addEventListener("touchstart", n),
                            function() {
                                document.removeEventListener("mousedown", n), document.removeEventListener("touchstart", n)
                            }
                    }), [e, t])
                },
                st = n("H+61"),
                lt = n("UlJF");
            var ut = function(e) {
                    return e < .5 ? 2 * e * e : (4 - 2 * e) * e - 1
                },
                dt = function() {},
                ft = function() {
                    function e(t, n) {
                        var r = this;
                        Object(st.a)(this, e), this.animating = !1, this.lastScrollValue = {
                            x: 0,
                            y: 0
                        }, this.startAnimation = function() {
                            r.speedDeltaX = r.checkScrollSpeed(r.target.scrollLeft, "x"), r.speedDeltaY = r.checkScrollSpeed(r.target.scrollTop, "y"), r.animating || 0 === r.speedDeltaX && 0 === r.speedDeltaY || r.handler(r.target)
                        }, this.animationHandler = function() {
                            if (r.scrollStart.y !== r.target.scrollTop || r.scrollStart.x !== r.target.scrollLeft) {
                                var e = {
                                        y: r.speedDeltaY > 0 ? 1 : -1,
                                        x: r.speedDeltaX > 0 ? 1 : -1
                                    },
                                    t = n.rtl;
                                r.rtl = t;
                                var i = r.getNextSnapPoint(r.target, e);
                                r.listenerElement.removeEventListener("scroll", r.startAnimation, !1), r.animating = !0, r.smoothScroll(r.target, i, (function() {
                                    r.animating = !1, r.listenerElement.addEventListener("scroll", r.startAnimation, !1), r.onAnimationEnd()
                                })), isNaN(i.x) && isNaN(i.y) || (r.scrollStart = i)
                            }
                        }, this.element = t;
                        var i = n.timeout,
                            o = n.duration,
                            a = n.easing,
                            c = n.snapXAxis,
                            s = n.snapYAxis,
                            l = n.threshold;
                        this.timeout = i && i >= 50 ? i : 100, this.duration = o || 200, this.easing = a || ut, this.snapXAxis = c, this.snapYAxis = s, this.threshold = l || .2
                    }
                    return Object(lt.a)(e, [{
                        key: "checkScrollSpeed",
                        value: function(e, t) {
                            var n, r = this,
                                i = e;
                            return n = null !== this.lastScrollValue[t] ? i - this.lastScrollValue[t] : 0, this.lastScrollValue[t] = i, this.scrollSpeedTimer && clearTimeout(this.scrollSpeedTimer), this.scrollSpeedTimer = window.setTimeout((function() {
                                r.lastScrollValue[t] = null
                            }), 100), n
                        }
                    }, {
                        key: "saveDeclaration",
                        value: function(e) {
                            this.snapLengthUnit = this.parseSnapCoordValue(this.snapXAxis, this.snapYAxis)
                        }
                    }, {
                        key: "bindElement",
                        value: function(e) {
                            this.target = e, this.listenerElement = e === document.documentElement ? window : e, this.listenerElement.addEventListener("scroll", this.startAnimation, !1), this.saveDeclaration(this.target)
                        }
                    }, {
                        key: "unbindElement",
                        value: function() {
                            this.listenerElement.removeEventListener("scroll", this.startAnimation, !1)
                        }
                    }, {
                        key: "handler",
                        value: function(e) {
                            this.animationFrame && clearTimeout(this.animationFrame), this.scrollHandlerTimer ? clearTimeout(this.scrollHandlerTimer) : this.scrollStart = {
                                y: e.scrollTop,
                                x: e.scrollLeft
                            }, this.scrollHandlerTimer = window.setTimeout(this.animationHandler, this.timeout)
                        }
                    }, {
                        key: "getNextSnapPoint",
                        value: function(e, t) {
                            var n = Math.round(this.getYSnapLength(this.target, this.snapLengthUnit.y)),
                                r = Math.round(this.getXSnapLength(this.target, this.snapLengthUnit.x)),
                                i = {
                                    y: this.target.scrollTop / n || 1,
                                    x: this.target.scrollLeft / r || 1
                                },
                                o = {
                                    y: 0,
                                    x: 0
                                };
                            if (this.isAboveThreshold(t.y, i.y) ? o.y = this.roundByDirection(t.y, i.y) : o.y = this.roundByDirection(-1 * t.y, i.y), this.isAboveThreshold(t.x, i.x)) o.x = this.roundByDirection(t.x, i.x);
                            else {
                                var a = this.rtl ? 1 : -1;
                                o.x = this.roundByDirection(t.x * a, i.x)
                            }
                            var c = {
                                y: o.y * n,
                                x: o.x * r
                            };
                            return c.y = this.stayInBounds(0, e.scrollHeight, c.y), c.x = this.stayInBounds(0, e.scrollWidth, c.x, t.x), c
                        }
                    }, {
                        key: "isAboveThreshold",
                        value: function(e, t) {
                            return e > 0 ? t % 1 > this.threshold : 1 - t % 1 > this.threshold
                        }
                    }, {
                        key: "roundByDirection",
                        value: function(e, t) {
                            return -1 === e ? Math.floor(t) : Math.ceil(t)
                        }
                    }, {
                        key: "stayInBounds",
                        value: function(e, t, n, r) {
                            return this.rtl && r ? Math.min(Math.min(n, t), e) : Math.max(Math.min(n, t), e)
                        }
                    }, {
                        key: "parseSnapCoordValue",
                        value: function(e, t) {
                            var n = /(\d+)(px)/,
                                r = {
                                    y: {
                                        value: 0,
                                        unit: "px"
                                    },
                                    x: {
                                        value: 0,
                                        unit: "px"
                                    }
                                },
                                i = n.exec(e),
                                o = n.exec(t);
                            return null !== i && (r.x = {
                                value: Number(i[1]),
                                unit: i[2]
                            }), null !== o && (r.y = {
                                value: Number(o[1]),
                                unit: o[2]
                            }), r
                        }
                    }, {
                        key: "getYSnapLength",
                        value: function(e, t) {
                            if ("%" === t.unit) return e.clientHeight / 100 * t.value
                        }
                    }, {
                        key: "getXSnapLength",
                        value: function(e, t) {
                            return t.value
                        }
                    }, {
                        key: "isEdge",
                        value: function(e) {
                            return 0 === e.x && 0 === this.speedDeltaY
                        }
                    }, {
                        key: "smoothScroll",
                        value: function(e, t, n) {
                            var r, i = this,
                                o = function(e, t, n, r) {
                                    return n > r ? t : e + (t - e) * i.easing(n / r)
                                },
                                a = {
                                    y: e.scrollTop,
                                    x: e.scrollLeft
                                },
                                c = window.requestAnimationFrame || window.webkitRequestAnimationFrame || function(e) {
                                    return window.setTimeout(e, 15)
                                },
                                s = this.isEdge(a) ? 0 : this.duration;
                            this.animationFrame = c((function i(l) {
                                r || (r = l);
                                var u = l - r;
                                if (isNaN(t.y) || (e.scrollTop = o(a.y, t.y, u, s)), isNaN(t.x) || (e.scrollLeft = o(a.x, t.x, u, s)), u < s) c(i);
                                else if ("function" === typeof n) return n(t)
                            }))
                        }
                    }, {
                        key: "bind",
                        value: function(e) {
                            return this.onAnimationEnd = "function" === typeof e ? e : dt, this.bindElement(this.element), this
                        }
                    }, {
                        key: "unbind",
                        value: function() {
                            return this.unbindElement(), this
                        }
                    }]), e
                }(),
                pt = (n("TeQF"), n("QWBl"), n("4mDm"), n("zKZe"), n("07d7"), n("4l63"), n("PKPk"), n("ENF9"), n("3bBZ"), n("hKI/")),
                ht = n.n(pt),
                vt = n("9/5/"),
                bt = n.n(vt),
                mt = n("uyHG"),
                yt = n.n(mt),
                gt = n("bdgK"),
                jt = n("AxL3"),
                xt = n.n(jt),
                Ot = (n("E9XD"), n("sMBO"), n("rB9j"), n("Rm1S"), n("UxlC"), null),
                wt = null;

            function St() {
                if (null === Ot) {
                    if ("undefined" === typeof document) return Ot = 0;
                    var e = document.body,
                        t = document.createElement("div");
                    t.classList.add("simplebar-hide-scrollbar"), e.appendChild(t);
                    var n = t.getBoundingClientRect().right;
                    e.removeChild(t), Ot = n
                }
                return Ot
            }

            function Et(e) {
                return e && e.ownerDocument && e.ownerDocument.defaultView ? e.ownerDocument.defaultView : window
            }

            function kt(e) {
                return e && e.ownerDocument ? e.ownerDocument : document
            }
            xt.a && window.addEventListener("resize", (function() {
                wt !== window.devicePixelRatio && (wt = window.devicePixelRatio, Ot = null)
            }));
            var _t = function() {
                function e(t, n) {
                    var r = this;
                    this.onScroll = function() {
                        var e = Et(r.el);
                        r.scrollXTicking || (e.requestAnimationFrame(r.scrollX), r.scrollXTicking = !0), r.scrollYTicking || (e.requestAnimationFrame(r.scrollY), r.scrollYTicking = !0)
                    }, this.scrollX = function() {
                        r.axis.x.isOverflowing && (r.showScrollbar("x"), r.positionScrollbar("x")), r.scrollXTicking = !1
                    }, this.scrollY = function() {
                        r.axis.y.isOverflowing && (r.showScrollbar("y"), r.positionScrollbar("y")), r.scrollYTicking = !1
                    }, this.onMouseEnter = function() {
                        r.showScrollbar("x"), r.showScrollbar("y")
                    }, this.onMouseMove = function(e) {
                        r.mouseX = e.clientX, r.mouseY = e.clientY, (r.axis.x.isOverflowing || r.axis.x.forceVisible) && r.onMouseMoveForAxis("x"), (r.axis.y.isOverflowing || r.axis.y.forceVisible) && r.onMouseMoveForAxis("y")
                    }, this.onMouseLeave = function() {
                        r.onMouseMove.cancel(), (r.axis.x.isOverflowing || r.axis.x.forceVisible) && r.onMouseLeaveForAxis("x"), (r.axis.y.isOverflowing || r.axis.y.forceVisible) && r.onMouseLeaveForAxis("y"), r.mouseX = -1, r.mouseY = -1
                    }, this.onWindowResize = function() {
                        r.scrollbarWidth = r.getScrollbarWidth(), r.hideNativeScrollbar()
                    }, this.hideScrollbars = function() {
                        r.axis.x.track.rect = r.axis.x.track.el.getBoundingClientRect(), r.axis.y.track.rect = r.axis.y.track.el.getBoundingClientRect(), r.isWithinBounds(r.axis.y.track.rect) || (r.axis.y.scrollbar.el.classList.remove(r.classNames.visible), r.axis.y.isVisible = !1), r.isWithinBounds(r.axis.x.track.rect) || (r.axis.x.scrollbar.el.classList.remove(r.classNames.visible), r.axis.x.isVisible = !1)
                    }, this.onPointerEvent = function(e) {
                        var t, n;
                        r.axis.x.track.rect = r.axis.x.track.el.getBoundingClientRect(), r.axis.y.track.rect = r.axis.y.track.el.getBoundingClientRect(), (r.axis.x.isOverflowing || r.axis.x.forceVisible) && (t = r.isWithinBounds(r.axis.x.track.rect)), (r.axis.y.isOverflowing || r.axis.y.forceVisible) && (n = r.isWithinBounds(r.axis.y.track.rect)), (t || n) && (e.preventDefault(), e.stopPropagation(), "mousedown" === e.type && (t && (r.axis.x.scrollbar.rect = r.axis.x.scrollbar.el.getBoundingClientRect(), r.isWithinBounds(r.axis.x.scrollbar.rect) ? r.onDragStart(e, "x") : r.onTrackClick(e, "x")), n && (r.axis.y.scrollbar.rect = r.axis.y.scrollbar.el.getBoundingClientRect(), r.isWithinBounds(r.axis.y.scrollbar.rect) ? r.onDragStart(e, "y") : r.onTrackClick(e, "y"))))
                    }, this.drag = function(t) {
                        var n = r.axis[r.draggedAxis].track,
                            i = n.rect[r.axis[r.draggedAxis].sizeAttr],
                            o = r.axis[r.draggedAxis].scrollbar,
                            a = r.contentWrapperEl[r.axis[r.draggedAxis].scrollSizeAttr],
                            c = parseInt(r.elStyles[r.axis[r.draggedAxis].sizeAttr], 10);
                        t.preventDefault(), t.stopPropagation();
                        var s = (("y" === r.draggedAxis ? t.pageY : t.pageX) - n.rect[r.axis[r.draggedAxis].offsetAttr] - r.axis[r.draggedAxis].dragOffset) / (i - o.size) * (a - c);
                        "x" === r.draggedAxis && (s = r.isRtl && e.getRtlHelpers().isRtlScrollbarInverted ? s - (i + o.size) : s, s = r.isRtl && e.getRtlHelpers().isRtlScrollingInverted ? -s : s), r.contentWrapperEl[r.axis[r.draggedAxis].scrollOffsetAttr] = s
                    }, this.onEndDrag = function(e) {
                        var t = kt(r.el),
                            n = Et(r.el);
                        e.preventDefault(), e.stopPropagation(), r.el.classList.remove(r.classNames.dragging), t.removeEventListener("mousemove", r.drag, !0), t.removeEventListener("mouseup", r.onEndDrag, !0), r.removePreventClickId = n.setTimeout((function() {
                            t.removeEventListener("click", r.preventClick, !0), t.removeEventListener("dblclick", r.preventClick, !0), r.removePreventClickId = null
                        }))
                    }, this.preventClick = function(e) {
                        e.preventDefault(), e.stopPropagation()
                    }, this.el = t, this.minScrollbarWidth = 20, this.options = Object.assign({}, e.defaultOptions, {}, n), this.classNames = Object.assign({}, e.defaultOptions.classNames, {}, this.options.classNames), this.axis = {
                        x: {
                            scrollOffsetAttr: "scrollLeft",
                            sizeAttr: "width",
                            scrollSizeAttr: "scrollWidth",
                            offsetSizeAttr: "offsetWidth",
                            offsetAttr: "left",
                            overflowAttr: "overflowX",
                            dragOffset: 0,
                            isOverflowing: !0,
                            isVisible: !1,
                            forceVisible: !1,
                            track: {},
                            scrollbar: {}
                        },
                        y: {
                            scrollOffsetAttr: "scrollTop",
                            sizeAttr: "height",
                            scrollSizeAttr: "scrollHeight",
                            offsetSizeAttr: "offsetHeight",
                            offsetAttr: "top",
                            overflowAttr: "overflowY",
                            dragOffset: 0,
                            isOverflowing: !0,
                            isVisible: !1,
                            forceVisible: !1,
                            track: {},
                            scrollbar: {}
                        }
                    }, this.removePreventClickId = null, e.instances.has(this.el) || (this.recalculate = ht()(this.recalculate.bind(this), 64), this.onMouseMove = ht()(this.onMouseMove.bind(this), 64), this.hideScrollbars = bt()(this.hideScrollbars.bind(this), this.options.timeout), this.onWindowResize = bt()(this.onWindowResize.bind(this), 64, {
                        leading: !0
                    }), e.getRtlHelpers = yt()(e.getRtlHelpers), this.init())
                }
                e.getRtlHelpers = function() {
                    var t = document.createElement("div");
                    t.innerHTML = '<div class="hs-dummy-scrollbar-size"><div style="height: 200%; width: 200%; margin: 10px 0;"></div></div>';
                    var n = t.firstElementChild;
                    document.body.appendChild(n);
                    var r = n.firstElementChild;
                    n.scrollLeft = 0;
                    var i = e.getOffset(n),
                        o = e.getOffset(r);
                    n.scrollLeft = 999;
                    var a = e.getOffset(r);
                    return {
                        isRtlScrollingInverted: i.left !== o.left && o.left - a.left !== 0,
                        isRtlScrollbarInverted: i.left !== o.left
                    }
                }, e.getOffset = function(e) {
                    var t = e.getBoundingClientRect(),
                        n = kt(e),
                        r = Et(e);
                    return {
                        top: t.top + (r.pageYOffset || n.documentElement.scrollTop),
                        left: t.left + (r.pageXOffset || n.documentElement.scrollLeft)
                    }
                };
                var t = e.prototype;
                return t.init = function() {
                    e.instances.set(this.el, this), xt.a && (this.initDOM(), this.scrollbarWidth = this.getScrollbarWidth(), this.recalculate(), this.initListeners())
                }, t.initDOM = function() {
                    var e = this;
                    if (Array.prototype.filter.call(this.el.children, (function(t) {
                            return t.classList.contains(e.classNames.wrapper)
                        })).length) this.wrapperEl = this.el.querySelector("." + this.classNames.wrapper), this.contentWrapperEl = this.options.scrollableNode || this.el.querySelector("." + this.classNames.contentWrapper), this.contentEl = this.options.contentNode || this.el.querySelector("." + this.classNames.contentEl), this.offsetEl = this.el.querySelector("." + this.classNames.offset), this.maskEl = this.el.querySelector("." + this.classNames.mask), this.placeholderEl = this.findChild(this.wrapperEl, "." + this.classNames.placeholder), this.heightAutoObserverWrapperEl = this.el.querySelector("." + this.classNames.heightAutoObserverWrapperEl), this.heightAutoObserverEl = this.el.querySelector("." + this.classNames.heightAutoObserverEl), this.axis.x.track.el = this.findChild(this.el, "." + this.classNames.track + "." + this.classNames.horizontal), this.axis.y.track.el = this.findChild(this.el, "." + this.classNames.track + "." + this.classNames.vertical);
                    else {
                        for (this.wrapperEl = document.createElement("div"), this.contentWrapperEl = document.createElement("div"), this.offsetEl = document.createElement("div"), this.maskEl = document.createElement("div"), this.contentEl = document.createElement("div"), this.placeholderEl = document.createElement("div"), this.heightAutoObserverWrapperEl = document.createElement("div"), this.heightAutoObserverEl = document.createElement("div"), this.wrapperEl.classList.add(this.classNames.wrapper), this.contentWrapperEl.classList.add(this.classNames.contentWrapper), this.offsetEl.classList.add(this.classNames.offset), this.maskEl.classList.add(this.classNames.mask), this.contentEl.classList.add(this.classNames.contentEl), this.placeholderEl.classList.add(this.classNames.placeholder), this.heightAutoObserverWrapperEl.classList.add(this.classNames.heightAutoObserverWrapperEl), this.heightAutoObserverEl.classList.add(this.classNames.heightAutoObserverEl); this.el.firstChild;) this.contentEl.appendChild(this.el.firstChild);
                        this.contentWrapperEl.appendChild(this.contentEl), this.offsetEl.appendChild(this.contentWrapperEl), this.maskEl.appendChild(this.offsetEl), this.heightAutoObserverWrapperEl.appendChild(this.heightAutoObserverEl), this.wrapperEl.appendChild(this.heightAutoObserverWrapperEl), this.wrapperEl.appendChild(this.maskEl), this.wrapperEl.appendChild(this.placeholderEl), this.el.appendChild(this.wrapperEl)
                    }
                    if (!this.axis.x.track.el || !this.axis.y.track.el) {
                        var t = document.createElement("div"),
                            n = document.createElement("div");
                        t.classList.add(this.classNames.track), n.classList.add(this.classNames.scrollbar), t.appendChild(n), this.axis.x.track.el = t.cloneNode(!0), this.axis.x.track.el.classList.add(this.classNames.horizontal), this.axis.y.track.el = t.cloneNode(!0), this.axis.y.track.el.classList.add(this.classNames.vertical), this.el.appendChild(this.axis.x.track.el), this.el.appendChild(this.axis.y.track.el)
                    }
                    this.axis.x.scrollbar.el = this.axis.x.track.el.querySelector("." + this.classNames.scrollbar), this.axis.y.scrollbar.el = this.axis.y.track.el.querySelector("." + this.classNames.scrollbar), this.options.autoHide || (this.axis.x.scrollbar.el.classList.add(this.classNames.visible), this.axis.y.scrollbar.el.classList.add(this.classNames.visible)), this.el.setAttribute("data-simplebar", "init")
                }, t.initListeners = function() {
                    var e = this,
                        t = Et(this.el);
                    this.options.autoHide && this.el.addEventListener("mouseenter", this.onMouseEnter), ["mousedown", "click", "dblclick"].forEach((function(t) {
                        e.el.addEventListener(t, e.onPointerEvent, !0)
                    })), ["touchstart", "touchend", "touchmove"].forEach((function(t) {
                        e.el.addEventListener(t, e.onPointerEvent, {
                            capture: !0,
                            passive: !0
                        })
                    })), this.el.addEventListener("mousemove", this.onMouseMove), this.el.addEventListener("mouseleave", this.onMouseLeave), this.contentWrapperEl.addEventListener("scroll", this.onScroll), t.addEventListener("resize", this.onWindowResize);
                    var n = !1,
                        r = t.ResizeObserver || gt.a;
                    this.resizeObserver = new r((function() {
                        n && e.recalculate()
                    })), this.resizeObserver.observe(this.el), this.resizeObserver.observe(this.contentEl), t.requestAnimationFrame((function() {
                        n = !0
                    })), this.mutationObserver = new t.MutationObserver(this.recalculate), this.mutationObserver.observe(this.contentEl, {
                        childList: !0,
                        subtree: !0,
                        characterData: !0
                    })
                }, t.recalculate = function() {
                    var e = Et(this.el);
                    this.elStyles = e.getComputedStyle(this.el), this.isRtl = "rtl" === this.elStyles.direction;
                    var t = this.heightAutoObserverEl.offsetHeight <= 1,
                        n = this.heightAutoObserverEl.offsetWidth <= 1,
                        r = this.contentEl.offsetWidth,
                        i = this.contentWrapperEl.offsetWidth,
                        o = this.elStyles.overflowX,
                        a = this.elStyles.overflowY;
                    this.contentEl.style.padding = this.elStyles.paddingTop + " " + this.elStyles.paddingRight + " " + this.elStyles.paddingBottom + " " + this.elStyles.paddingLeft, this.wrapperEl.style.margin = "-" + this.elStyles.paddingTop + " -" + this.elStyles.paddingRight + " -" + this.elStyles.paddingBottom + " -" + this.elStyles.paddingLeft;
                    var c = this.contentEl.scrollHeight,
                        s = this.contentEl.scrollWidth;
                    this.contentWrapperEl.style.height = t ? "auto" : "100%", this.placeholderEl.style.width = n ? r + "px" : "auto", this.placeholderEl.style.height = c + "px";
                    var l = this.contentWrapperEl.offsetHeight;
                    this.axis.x.isOverflowing = s > r, this.axis.y.isOverflowing = c > l, this.axis.x.isOverflowing = "hidden" !== o && this.axis.x.isOverflowing, this.axis.y.isOverflowing = "hidden" !== a && this.axis.y.isOverflowing, this.axis.x.forceVisible = "x" === this.options.forceVisible || !0 === this.options.forceVisible, this.axis.y.forceVisible = "y" === this.options.forceVisible || !0 === this.options.forceVisible, this.hideNativeScrollbar();
                    var u = this.axis.x.isOverflowing ? this.scrollbarWidth : 0,
                        d = this.axis.y.isOverflowing ? this.scrollbarWidth : 0;
                    this.axis.x.isOverflowing = this.axis.x.isOverflowing && s > i - d, this.axis.y.isOverflowing = this.axis.y.isOverflowing && c > l - u, this.axis.x.scrollbar.size = this.getScrollbarSize("x"), this.axis.y.scrollbar.size = this.getScrollbarSize("y"), this.axis.x.scrollbar.el.style.width = this.axis.x.scrollbar.size + "px", this.axis.y.scrollbar.el.style.height = this.axis.y.scrollbar.size + "px", this.positionScrollbar("x"), this.positionScrollbar("y"), this.toggleTrackVisibility("x"), this.toggleTrackVisibility("y")
                }, t.getScrollbarSize = function(e) {
                    if (void 0 === e && (e = "y"), !this.axis[e].isOverflowing) return 0;
                    var t, n = this.contentEl[this.axis[e].scrollSizeAttr],
                        r = this.axis[e].track.el[this.axis[e].offsetSizeAttr],
                        i = r / n;
                    return t = Math.max(~~(i * r), this.options.scrollbarMinSize), this.options.scrollbarMaxSize && (t = Math.min(t, this.options.scrollbarMaxSize)), t
                }, t.positionScrollbar = function(t) {
                    if (void 0 === t && (t = "y"), this.axis[t].isOverflowing) {
                        var n = this.contentWrapperEl[this.axis[t].scrollSizeAttr],
                            r = this.axis[t].track.el[this.axis[t].offsetSizeAttr],
                            i = parseInt(this.elStyles[this.axis[t].sizeAttr], 10),
                            o = this.axis[t].scrollbar,
                            a = this.contentWrapperEl[this.axis[t].scrollOffsetAttr],
                            c = (a = "x" === t && this.isRtl && e.getRtlHelpers().isRtlScrollingInverted ? -a : a) / (n - i),
                            s = ~~((r - o.size) * c);
                        s = "x" === t && this.isRtl && e.getRtlHelpers().isRtlScrollbarInverted ? s + (r - o.size) : s, o.el.style.transform = "x" === t ? "translate3d(" + s + "px, 0, 0)" : "translate3d(0, " + s + "px, 0)"
                    }
                }, t.toggleTrackVisibility = function(e) {
                    void 0 === e && (e = "y");
                    var t = this.axis[e].track.el,
                        n = this.axis[e].scrollbar.el;
                    this.axis[e].isOverflowing || this.axis[e].forceVisible ? (t.style.visibility = "visible", this.contentWrapperEl.style[this.axis[e].overflowAttr] = "scroll") : (t.style.visibility = "hidden", this.contentWrapperEl.style[this.axis[e].overflowAttr] = "hidden"), this.axis[e].isOverflowing ? n.style.display = "block" : n.style.display = "none"
                }, t.hideNativeScrollbar = function() {
                    this.offsetEl.style[this.isRtl ? "left" : "right"] = this.axis.y.isOverflowing || this.axis.y.forceVisible ? "-" + this.scrollbarWidth + "px" : 0, this.offsetEl.style.bottom = this.axis.x.isOverflowing || this.axis.x.forceVisible ? "-" + this.scrollbarWidth + "px" : 0
                }, t.onMouseMoveForAxis = function(e) {
                    void 0 === e && (e = "y"), this.axis[e].track.rect = this.axis[e].track.el.getBoundingClientRect(), this.axis[e].scrollbar.rect = this.axis[e].scrollbar.el.getBoundingClientRect(), this.isWithinBounds(this.axis[e].scrollbar.rect) ? this.axis[e].scrollbar.el.classList.add(this.classNames.hover) : this.axis[e].scrollbar.el.classList.remove(this.classNames.hover), this.isWithinBounds(this.axis[e].track.rect) ? (this.showScrollbar(e), this.axis[e].track.el.classList.add(this.classNames.hover)) : this.axis[e].track.el.classList.remove(this.classNames.hover)
                }, t.onMouseLeaveForAxis = function(e) {
                    void 0 === e && (e = "y"), this.axis[e].track.el.classList.remove(this.classNames.hover), this.axis[e].scrollbar.el.classList.remove(this.classNames.hover)
                }, t.showScrollbar = function(e) {
                    void 0 === e && (e = "y");
                    var t = this.axis[e].scrollbar.el;
                    this.axis[e].isVisible || (t.classList.add(this.classNames.visible), this.axis[e].isVisible = !0), this.options.autoHide && this.hideScrollbars()
                }, t.onDragStart = function(e, t) {
                    void 0 === t && (t = "y");
                    var n = kt(this.el),
                        r = Et(this.el),
                        i = this.axis[t].scrollbar,
                        o = "y" === t ? e.pageY : e.pageX;
                    this.axis[t].dragOffset = o - i.rect[this.axis[t].offsetAttr], this.draggedAxis = t, this.el.classList.add(this.classNames.dragging), n.addEventListener("mousemove", this.drag, !0), n.addEventListener("mouseup", this.onEndDrag, !0), null === this.removePreventClickId ? (n.addEventListener("click", this.preventClick, !0), n.addEventListener("dblclick", this.preventClick, !0)) : (r.clearTimeout(this.removePreventClickId), this.removePreventClickId = null)
                }, t.onTrackClick = function(e, t) {
                    var n = this;
                    if (void 0 === t && (t = "y"), this.options.clickOnTrack) {
                        var r = Et(this.el);
                        this.axis[t].scrollbar.rect = this.axis[t].scrollbar.el.getBoundingClientRect();
                        var i = this.axis[t].scrollbar.rect[this.axis[t].offsetAttr],
                            o = parseInt(this.elStyles[this.axis[t].sizeAttr], 10),
                            a = this.contentWrapperEl[this.axis[t].scrollOffsetAttr],
                            c = ("y" === t ? this.mouseY - i : this.mouseX - i) < 0 ? -1 : 1,
                            s = -1 === c ? a - o : a + o;
                        ! function e() {
                            var i, o; - 1 === c ? a > s && (a -= n.options.clickOnTrackSpeed, n.contentWrapperEl.scrollTo(((i = {})[n.axis[t].offsetAttr] = a, i)), r.requestAnimationFrame(e)) : a < s && (a += n.options.clickOnTrackSpeed, n.contentWrapperEl.scrollTo(((o = {})[n.axis[t].offsetAttr] = a, o)), r.requestAnimationFrame(e))
                        }()
                    }
                }, t.getContentElement = function() {
                    return this.contentEl
                }, t.getScrollElement = function() {
                    return this.contentWrapperEl
                }, t.getScrollbarWidth = function() {
                    try {
                        return "none" === getComputedStyle(this.contentWrapperEl, "::-webkit-scrollbar").display || "scrollbarWidth" in document.documentElement.style || "-ms-overflow-style" in document.documentElement.style ? 0 : St()
                    } catch (e) {
                        return St()
                    }
                }, t.removeListeners = function() {
                    var e = this,
                        t = Et(this.el);
                    this.options.autoHide && this.el.removeEventListener("mouseenter", this.onMouseEnter), ["mousedown", "click", "dblclick"].forEach((function(t) {
                        e.el.removeEventListener(t, e.onPointerEvent, !0)
                    })), ["touchstart", "touchend", "touchmove"].forEach((function(t) {
                        e.el.removeEventListener(t, e.onPointerEvent, {
                            capture: !0,
                            passive: !0
                        })
                    })), this.el.removeEventListener("mousemove", this.onMouseMove), this.el.removeEventListener("mouseleave", this.onMouseLeave), this.contentWrapperEl && this.contentWrapperEl.removeEventListener("scroll", this.onScroll), t.removeEventListener("resize", this.onWindowResize), this.mutationObserver && this.mutationObserver.disconnect(), this.resizeObserver && this.resizeObserver.disconnect(), this.recalculate.cancel(), this.onMouseMove.cancel(), this.hideScrollbars.cancel(), this.onWindowResize.cancel()
                }, t.unMount = function() {
                    this.removeListeners(), e.instances.delete(this.el)
                }, t.isWithinBounds = function(e) {
                    return this.mouseX >= e.left && this.mouseX <= e.left + e.width && this.mouseY >= e.top && this.mouseY <= e.top + e.height
                }, t.findChild = function(e, t) {
                    var n = e.matches || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector;
                    return Array.prototype.filter.call(e.children, (function(e) {
                        return n.call(e, t)
                    }))[0]
                }, e
            }();
            _t.defaultOptions = {
                autoHide: !0,
                forceVisible: !1,
                clickOnTrack: !0,
                clickOnTrackSpeed: 40,
                classNames: {
                    contentEl: "simplebar-content",
                    contentWrapper: "simplebar-content-wrapper",
                    offset: "simplebar-offset",
                    mask: "simplebar-mask",
                    wrapper: "simplebar-wrapper",
                    placeholder: "simplebar-placeholder",
                    scrollbar: "simplebar-scrollbar",
                    track: "simplebar-track",
                    heightAutoObserverWrapperEl: "simplebar-height-auto-observer-wrapper",
                    heightAutoObserverEl: "simplebar-height-auto-observer",
                    visible: "simplebar-visible",
                    horizontal: "simplebar-horizontal",
                    vertical: "simplebar-vertical",
                    hover: "simplebar-hover",
                    dragging: "simplebar-dragging"
                },
                scrollbarMinSize: 25,
                scrollbarMaxSize: 0,
                timeout: 1e3
            }, _t.instances = new WeakMap;
            var Lt = _t;

            function Nt(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function At() {
                return (At = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }

            function Ct(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function Tt(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                }
                return i
            }
            var qt = o.a.forwardRef((function(e, t) {
                var n, r = e.children,
                    a = e.scrollableNodeProps,
                    c = void 0 === a ? {} : a,
                    s = Tt(e, ["children", "scrollableNodeProps"]),
                    l = Object(i.useRef)(),
                    u = Object(i.useRef)(),
                    d = Object(i.useRef)(),
                    f = {},
                    p = {},
                    h = [];
                return Object.keys(s).forEach((function(e) {
                    Object.prototype.hasOwnProperty.call(Lt.defaultOptions, e) ? f[e] = s[e] : e.match(/data-simplebar-(.+)/) && "data-simplebar-direction" !== e ? h.push({
                        name: e,
                        value: s[e]
                    }) : p[e] = s[e]
                })), h.length && console.warn("simplebar-react: this way of passing options is deprecated. Pass it like normal props instead:\n        'data-simplebar-auto-hide=\"false\"' \u2014> 'autoHide=\"false\"'\n      "), Object(i.useEffect)((function() {
                    var e;
                    return l = c.ref || l, u.current && (n = new Lt(u.current, function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? Ct(n, !0).forEach((function(t) {
                                    Nt(e, t, n[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ct(n).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }))
                            }
                            return e
                        }({}, (e = h, Array.prototype.reduce.call(e, (function(e, t) {
                            var n = t.name.match(/data-simplebar-(.+)/);
                            if (n) {
                                var r = n[1].replace(/\W+(.)/g, (function(e, t) {
                                    return t.toUpperCase()
                                }));
                                switch (t.value) {
                                    case "true":
                                        e[r] = !0;
                                        break;
                                    case "false":
                                        e[r] = !1;
                                        break;
                                    case void 0:
                                        e[r] = !0;
                                        break;
                                    default:
                                        e[r] = t.value
                                }
                            }
                            return e
                        }), {})), {}, f, {}, l && {
                            scrollableNode: l.current
                        }, {}, d.current && {
                            contentNode: d.current
                        })), t && (t.current = n)),
                        function() {
                            n.unMount(), n = null
                        }
                }), []), o.a.createElement("div", At({
                    ref: u,
                    "data-simplebar": !0
                }, p), o.a.createElement("div", {
                    className: "simplebar-wrapper"
                }, o.a.createElement("div", {
                    className: "simplebar-height-auto-observer-wrapper"
                }, o.a.createElement("div", {
                    className: "simplebar-height-auto-observer"
                })), o.a.createElement("div", {
                    className: "simplebar-mask"
                }, o.a.createElement("div", {
                    className: "simplebar-offset"
                }, "function" === typeof r ? r({
                    scrollableNodeRef: l,
                    contentNodeRef: d
                }) : o.a.createElement("div", At({}, c, {
                    className: "simplebar-content-wrapper".concat(c.className ? " ".concat(c.className) : "")
                }), o.a.createElement("div", {
                    className: "simplebar-content"
                }, r)))), o.a.createElement("div", {
                    className: "simplebar-placeholder"
                })), o.a.createElement("div", {
                    className: "simplebar-track simplebar-horizontal"
                }, o.a.createElement("div", {
                    className: "simplebar-scrollbar"
                })), o.a.createElement("div", {
                    className: "simplebar-track simplebar-vertical"
                }, o.a.createElement("div", {
                    className: "simplebar-scrollbar"
                })))
            }));
            qt.displayName = "SimpleBar", qt.propTypes = {
                children: ve.a.oneOfType([ve.a.node, ve.a.func]),
                scrollableNodeProps: ve.a.object
            };
            var Rt = qt,
                Pt = function(e, t, n) {
                    var r = e || {},
                        o = r.imageId,
                        a = r.imageUrl;
                    o = o || null;
                    var c = Object(i.useContext)(y.a).isPreview;
                    Object(i.useEffect)((function() {
                        return c && (o || a) && n && et(o, a).then((function(e) {
                                t(e)
                            })),
                            function() {}
                    }), [o, a, n, c, t])
                },
                It = function(e) {
                    var t = e.imageId,
                        n = void 0 === t ? null : t,
                        o = e.imageUrl,
                        a = void 0 === o ? null : o,
                        c = e.classes,
                        s = void 0 === c ? [] : c,
                        l = e.alt,
                        u = Object(i.useContext)(y.a),
                        d = u.oceIntegrator,
                        f = u.isPreview,
                        p = Object(i.useState)(null),
                        h = p[0],
                        v = p[1];
                    return Pt({
                        imageId: n,
                        imageUrl: a
                    }, v, !0), Object(r.jsxs)(r.Fragment, {
                        children: [f && h ? Object(r.jsx)("img", {
                            className: s.join(" "),
                            src: h,
                            alt: l
                        }) : null, f ? null : Object(r.jsx)("img", {
                            className: s.join(" "),
                            src: n ? "".concat(d, "/assets/").concat(n, "/native") : a,
                            alt: l
                        })]
                    })
                };

            function Dt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }
            var Mt = function(e) {
                var t, n, o, a, c, s, u = e.assetId,
                    d = e.initialData,
                    f = Object(i.useState)(null),
                    p = f[0],
                    h = f[1],
                    v = p || {},
                    b = v.asset_image,
                    m = v.link,
                    y = v.reference,
                    g = v.title,
                    j = v.asset_quote,
                    x = v.disclaimer,
                    O = b && b.id,
                    w = Object(i.useContext)(R);
                Object(i.useEffect)((function() {
                    E()
                }), []);
                var E = function() {
                    function e(e) {
                        e && e.fields ? h(function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? Dt(Object(n), !0).forEach((function(t) {
                                    Object(S.a)(e, t, n[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Dt(Object(n)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }))
                            }
                            return e
                        }({}, e.fields)) : h(null)
                    }
                    d ? e(d) : u && function(e) {
                        var t = "/items/".concat(e, "?expand=fields.asset_quote&links=canonical");
                        return new Promise((function(e, n) {
                            l.a.getOCERequestHandler().get(t, "json", {}, null, ze).then((function(t) {
                                e(t || {})
                            })).catch((function(e) {
                                return Xe(e, n)
                            }))
                        }))
                    }(u).then((function(t) {
                        e(t)
                    }))
                };
                return p && Object(r.jsxs)("div", {
                    children: [O && g && Object(r.jsx)("div", {
                        className: "title",
                        children: g
                    }), O ? Object(r.jsx)(It, {
                        imageId: O,
                        classes: ["reportImage"]
                    }) : null, (null === j || void 0 === j || null === (t = j.fields) || void 0 === t ? void 0 : t.quote) && Object(r.jsx)("div", {
                        className: "rc20quote-lg",
                        children: null === j || void 0 === j || null === (n = j.fields) || void 0 === n ? void 0 : n.quote
                    }), (null === j || void 0 === j || null === (o = j.fields) || void 0 === o ? void 0 : o.quote_attribution) && Object(r.jsx)("div", {
                        className: "rc20attribution-lg",
                        children: null === j || void 0 === j || null === (a = j.fields) || void 0 === a ? void 0 : a.quote_attribution
                    }), (null === j || void 0 === j || null === (c = j.fields) || void 0 === c ? void 0 : c.quote_attribution_2) && Object(r.jsx)("div", {
                        className: "rc20attribution-lg",
                        children: null === j || void 0 === j || null === (s = j.fields) || void 0 === s ? void 0 : s.quote_attribution_2
                    }), (y || m) && Object(r.jsx)("div", {
                        className: "reportBtn obttns",
                        children: Object(r.jsx)("div", {
                            children: Object(r.jsx)("a", {
                                href: y || m,
                                children: w.prodnav_readReport || "Read the report"
                            })
                        })
                    }), x && Object(r.jsx)("small", {
                        className: "rc20disclaimer",
                        children: x
                    })]
                })
            };

            function Bt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }
            var Ht = function(e) {
                    var t = e.quoteId,
                        n = e.initialData,
                        o = Object(i.useState)(null),
                        a = o[0],
                        c = o[1],
                        s = Object(i.useRef)(!1);
                    Object(i.useEffect)((function() {
                        return s.current = !0,
                            function() {
                                s.current = !1
                            }
                    }), []), Object(i.useEffect)((function() {
                        u()
                    }), [t]);
                    var u = function() {
                        function e(e) {
                            var t = null;
                            e && e.fields && (t = function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? Bt(Object(n), !0).forEach((function(t) {
                                        Object(S.a)(e, t, n[t])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Bt(Object(n)).forEach((function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                    }))
                                }
                                return e
                            }({}, e.fields)), s.current && c(t)
                        }
                        n ? e(n) : function(e) {
                            var t = "/items/".concat(e, "?links=none");
                            return new Promise((function(e, n) {
                                l.a.getOCERequestHandler().get(t, "json", {}, null, ze).then((function(t) {
                                    e(t || {})
                                })).catch((function(e) {
                                    return Xe(e, n)
                                }))
                            }))
                        }(t).then((function(t) {
                            e(t)
                        }))
                    };
                    return a && Object(r.jsxs)(r.Fragment, {
                        children: ['"'.concat(a.quote, '"'), Object(r.jsxs)("div", {
                            className: "rc20attribution",
                            children: [Object(r.jsx)("div", {
                                children: a.quote_attribution
                            }), Object(r.jsx)("div", {
                                children: a.quote_attribution_2
                            })]
                        })]
                    })
                },
                Wt = function() {
                    return Object(r.jsx)("div", {
                        className: "panelLoader",
                        children: Object(r.jsxs)("ul", {
                            className: "loader",
                            children: [Object(r.jsx)("li", {
                                className: "heading"
                            }), Object(r.jsx)("br", {}), Object(r.jsx)("li", {}), Object(r.jsx)("li", {}), Object(r.jsx)("li", {}), Object(r.jsx)("li", {}), Object(r.jsx)("li", {
                                className: "info"
                            })]
                        })
                    })
                },
                Ft = function(e) {
                    var t = e.product,
                        n = void 0 === t ? {} : t,
                        o = e.color,
                        a = e.activeIndex,
                        c = e.panelRef,
                        s = e.closeEditScreen,
                        l = e.initialData,
                        u = e.slideNo,
                        d = e.totalLength,
                        f = n.quotes,
                        p = Array.isArray(f) && f.length > 0 ? f[0] : null,
                        h = Object(i.useContext)(y.a),
                        v = h.isPreview,
                        b = h.viewport,
                        m = Object(i.useContext)(R),
                        g = function(e) {
                            switch (e) {
                                case "SH-ProductAsset":
                                    return Object(r.jsx)("div", {
                                        className: "rc20report",
                                        children: Object(r.jsx)(Mt, {
                                            assetId: p.id,
                                            initialData: l
                                        })
                                    });
                                case "SH-Quote":
                                    return Object(r.jsx)("div", {
                                        className: "rc20quote",
                                        children: Object(r.jsx)(Ht, {
                                            quoteId: p.id,
                                            initialData: l
                                        }, p.id)
                                    });
                                default:
                                    return null
                            }
                        };

                    function j() {
                        return n && n.isLoading ? Object(r.jsx)(Wt, {}) : Object(r.jsxs)(r.Fragment, {
                            children: [n.title ? Object(r.jsx)("h3", {
                                className: "rc20title",
                                children: n.title
                            }) : "", Object(r.jsx)("div", {
                                className: "rc20overview",
                                children: n.overview ? Object(r.jsx)("span", {
                                    dangerouslySetInnerHTML: {
                                        __html: n.overview
                                    }
                                }) : null
                            }), p && "SH-Quote" === p.type && g("SH-Quote"), n.link && Object(r.jsx)("div", {
                                className: "rc20cta",
                                children: Object(r.jsx)("div", {
                                    className: "obttns",
                                    children: Object(r.jsx)("div", {
                                        children: Object(r.jsx)("a", {
                                            href: n.link,
                                            "data-lbl": n.data_label,
                                            children: m.prodnav_learnMore || "Learn More"
                                        })
                                    })
                                })
                            }), p && "SH-ProductAsset" === p.type && g("SH-ProductAsset"), Object(r.jsx)("div", {
                                className: "rc20bottomspacing"
                            })]
                        })
                    }
                    return Object(r.jsx)("div", {
                        className: "rc20slide rc20fold1 ".concat(-1 === a ? "active" : "", " ").concat(a + 2 === d && u === d - 2 ? "second-last" : ""),
                        ref: c,
                        "data-trackas": "rc20:panel2",
                        children: Object(r.jsxs)("div", {
                            className: "rc20infopanel darktheme",
                            style: {
                                background: o
                            },
                            children: [Object.keys(n).length > 0 && v && Object(r.jsx)("span", {
                                className: "icn-edit rc20edit",
                                onClick: s
                            }), Object(r.jsx)("div", {
                                className: "rc20content",
                                children: b.isMobile ? Object(r.jsx)(r.Fragment, {
                                    children: j()
                                }) : Object(r.jsx)(Rt, {
                                    scrollbarMaxSize: 100,
                                    children: j()
                                })
                            })]
                        })
                    })
                };

            function Ut(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }
            var zt = function(e) {
                    var t = e.slideNo,
                        n = e.contentInfo,
                        a = e.activeIndex,
                        c = e.totalLength,
                        s = e.dataTrackas,
                        u = e.parentPanelRef,
                        d = e.initialData,
                        f = e.panelBackground,
                        p = Object(i.useState)(null),
                        h = p[0],
                        v = p[1],
                        b = Object(i.useState)(!1),
                        m = b[0],
                        g = b[1],
                        j = o.a.createRef(),
                        x = Object(i.useState)(!1),
                        O = x[0],
                        w = x[1],
                        E = Object(i.useState)(null),
                        k = E[0],
                        _ = E[1],
                        L = Object(i.useContext)(y.a),
                        N = L.oceIntegrator,
                        A = L.viewport,
                        C = L.isPreview,
                        T = Object(i.useRef)(!1);
                    Object(i.useEffect)((function() {
                        return T.current = !0,
                            function() {
                                T.current = !1
                            }
                    }), []), Object(i.useEffect)((function() {
                        d && w(!0)
                    }), [d]), Object(i.useEffect)((function() {
                        O && q()
                    }), [O]), Pt({
                        imageId: null === h || void 0 === h ? void 0 : h.image,
                        imageUrl: null
                    }, _, O), Object(i.useEffect)((function() {
                        var e;
                        return function() {
                                var t = {
                                    root: u ? u.current : null,
                                    rootMargin: "0px",
                                    threshold: .02
                                };
                                try {
                                    e = new IntersectionObserver((function(e, t) {
                                        e.forEach((function(e) {
                                            e.isIntersecting && n.id && !h && (g(!0), w(!0))
                                        }))
                                    }), t), j && j.current && e.observe(j.current)
                                } catch (r) {
                                    w(!0)
                                }
                            }(),
                            function() {
                                e && j && j.current && e.unobserve(j.current)
                            }
                    }), [n]);
                    var q = function() {
                            function e(e) {
                                var t = null;
                                e && (t = D(e)), T.current && v(function(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var n = null != arguments[t] ? arguments[t] : {};
                                        t % 2 ? Ut(Object(n), !0).forEach((function(t) {
                                            Object(S.a)(e, t, n[t])
                                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ut(Object(n)).forEach((function(t) {
                                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                        }))
                                    }
                                    return e
                                }({}, t))
                            }
                            d ? e(d) : n && function(e) {
                                var t = e.id,
                                    n = e.type,
                                    r = "/items/".concat(t, "?links=none&getMasterDetails=true");
                                return r = "SH-PublicStory" === n ? "".concat(r, "&expand=").concat(["story_top_products_portfolio", "Tier1_OCEStory"].map((function(e) {
                                    return "fields.".concat(e)
                                })).join(",")) : "".concat(r), new Promise((function(e, t) {
                                    l.a.getOCERequestHandler().get(r, "json", {}, null, ze).then((function(t) {
                                        e(t || {})
                                    })).catch((function(e) {
                                        return Xe(e, t)
                                    }))
                                }))
                            }(n).then((function(t) {
                                e(t)
                            }))
                        },
                        R = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                            return "string" === typeof e && e.length > 225 && (e = (e = e.slice(0, 225)).substring(0, e.lastIndexOf(" ")).replace(/[,.]\s*$/, "") + " ..."), e
                        },
                        P = function() {
                            var e = "url(https://www.oracle.com/a/ocom/img/rh02-storyhub-infrastructure-0" + (Math.floor(3 * Math.random()) + 1) + ".jpg)";
                            return "string" == typeof f.color && "#33553C" === f.color && (e = "url(https://www.oracle.com/a/ocom/img/rh02-storyhub-applications-0" + (Math.floor(3 * Math.random()) + 1) + ".jpg)"), e
                        },
                        I = function(e) {
                            var t = new RegExp(/^(.*?)-tier1/i).exec(e),
                                n = t && t[1] ? t[1] : null;
                            return n ? "".concat("https://www.oracle.com").concat(n) : "".concat("https://www.oracle.com").concat("/product-navigator")
                        },
                        D = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = {
                                    type: e.type,
                                    link: null,
                                    title: null,
                                    overview: null,
                                    image: null,
                                    customerLogo: null,
                                    customerName: null,
                                    ctaButtons: e.fields && e.fields.cta_buttons,
                                    topProducts: null,
                                    dataLabel: e.fields && e.fields.data_label || null
                                };
                            return "SH-PublicStory" === e.type ? (e.fields && e.fields.Tier1_OCEStory ? (t.tier1_reference = !0, t.link = I(e.slug)) : t.link = e.masterSlug || e.slug, e.fields && (t.title = e.fields.story_headline, t.overview = e.fields.story_summary, t.logo = e.fields.story_customer_logo && e.fields.story_customer_logo.id ? e.fields.story_customer_logo.id : null, t.image = e.fields.story_card_image && e.fields.story_card_image.id ? e.fields.story_card_image.id : null, t.customerName = e.fields.customer_name, t.topProducts = e.fields.story_top_products_portfolio)) : e.fields && (t.link = e.fields.link, t.title = e.fields.title, t.overview = e.fields.overview, t.logo = e.fields.logo && e.fields.logo.id ? e.fields.logo.id : null, t.image = e.fields.image && e.fields.image.id ? e.fields.image.id : null, t.subtitle = e.fields.subtitle), t
                        };

                    function M() {
                        return Object(r.jsxs)(r.Fragment, {
                            children: [h.logo ? Object(r.jsx)("div", {
                                className: "rc20logo",
                                children: Object(r.jsx)(It, {
                                    imageId: h.logo,
                                    alt: (null === h || void 0 === h ? void 0 : h.customerName) || ""
                                })
                            }) : "", h.title ? Object(r.jsx)("h3", {
                                className: "rc20title",
                                children: h.title
                            }) : "", h.subtitle ? Object(r.jsx)("p", {
                                children: h.subtitle
                            }) : null, Object(r.jsx)("div", {
                                className: "rc20overview",
                                dangerouslySetInnerHTML: {
                                    __html: R(h.overview)
                                }
                            }), h.topProducts && Object(r.jsx)("div", {
                                className: "rc20refs",
                                children: h.topProducts.map((function(e, t) {
                                    return Object(r.jsx)("a", {
                                        className: "rc20product",
                                        href: e.fields.link,
                                        children: e.fields.title
                                    }, t)
                                }))
                            }), Object(r.jsx)("div", {
                                className: "rc20cta",
                                children: Object(r.jsxs)("div", {
                                    className: "obttns",
                                    children: [Object(r.jsx)(Vt, {
                                        type: h.type,
                                        link: h.link,
                                        reference: h.tier1_reference,
                                        dataLabel: h.dataLabel
                                    }), h.ctaButtons && h.ctaButtons.map((function(e, t) {
                                        return Object(r.jsx)("div", {
                                            className: "obttn1",
                                            children: Object(r.jsx)("a", {
                                                href: e.Link,
                                                target: e.NewTab ? "_blank" : null,
                                                "data-lbl": e.DataLbl,
                                                children: e.Text
                                            })
                                        }, t)
                                    }))]
                                })
                            }), Object(r.jsx)("div", {
                                className: "rc20bottomspacing"
                            })]
                        })
                    }
                    var B = h && "SH-PublicStory" === h.type ? h.link.replace(/\/$/, "").split("/").splice(-1).pop() : null;
                    return Object(r.jsx)(r.Fragment, {
                        children: Object(r.jsx)("div", {
                            className: "rc20slide rc20fold2 ".concat(t === a ? "active" : "", " ").concat(a + 2 === c && t === c - 1 ? "last" : "", " ").concat(a + 2 === c && t === c - 1 && 1 === c ? "one-slide" : "", " ").concat(a + 2 === c && t === c - 2 ? "second-last" : ""),
                            style: {
                                "--data-x": parseInt(s.split(":")[1].substr(s.split(":")[1].indexOf("l") + 1)) - 2
                            },
                            "data-trackas": s,
                            "data-slug": B,
                            children: Object(r.jsx)("div", {
                                className: "rc20storypanel",
                                children: Object(r.jsx)("div", {
                                    className: "rc20card",
                                    "data-type": "infrastructure",
                                    ref: j,
                                    children: h ? Object(r.jsxs)(r.Fragment, {
                                        children: [Object(r.jsx)("div", {
                                            className: "rc20w3".concat(h.logo ? " logo" : ""),
                                            style: h.image && m ? C ? C && k ? {
                                                backgroundImage: "url(".concat(k, ")")
                                            } : {} : {
                                                backgroundImage: "url(".concat(N, "/assets/").concat(h.image, "/native")
                                            } : {
                                                backgroundImage: P()
                                            }
                                        }), Object(r.jsx)("div", {
                                            className: "rc20content darktheme",
                                            children: A.isMobile ? Object(r.jsx)(r.Fragment, {
                                                children: M()
                                            }) : Object(r.jsx)(Rt, {
                                                scrollbarMaxSize: 100,
                                                children: M()
                                            })
                                        })]
                                    }) : Object(r.jsx)(Wt, {})
                                })
                            })
                        })
                    })
                },
                Vt = function(e) {
                    var t = e.type,
                        n = e.link,
                        o = e.reference,
                        a = e.dataLabel,
                        c = Object(i.useContext)(R),
                        s = Object(g.useRouter)(),
                        l = s.locale !== s.defaultLocale ? "".concat(s.locale, "/") : "";
                    if ("SH-PublicStory" === t && o) {
                        var u = n.replace(/\/$/, "").split("/").splice(-1).pop();
                        return Object(r.jsx)("div", {
                            children: Object(r.jsx)("a", {
                                href: n,
                                "data-lbl": a || u,
                                children: c.prodnav_readStory || "Read the story"
                            })
                        })
                    }
                    return "SH-PublicStory" === t ? Object(r.jsx)("div", {
                        children: Object(r.jsx)("a", {
                            "data-lbl": a || n,
                            href: "".concat("https://www.oracle.com", "/").concat(l, "customers/").concat(n, "/"),
                            children: c.prodnav_readStory || "Read the story"
                        })
                    }) : Object(r.jsx)("div", {
                        children: Object(r.jsx)("a", {
                            "data-lbl": a,
                            href: n,
                            children: c.prodnav_learnMore || "Learn More"
                        })
                    })
                },
                Yt = function(e) {
                    var t = e.taxonomy,
                        n = e.handleProductNavigation,
                        o = e.handleProductNavigationDebounce,
                        a = e.showFilters,
                        c = e.toggleMobileFilters,
                        s = e.taxonomyFiltersRef,
                        l = e.panelBackground,
                        u = e.hideMobileFilters,
                        d = Object(i.useRef)(),
                        f = Object(i.useContext)(y.a).viewport,
                        p = Object(i.useContext)(R);

                    function h() {
                        return Object(r.jsxs)(r.Fragment, {
                            children: [Object(r.jsxs)("ul", {
                                children: [" ", t.categories[0].parent && Object(r.jsx)("li", {
                                    className: t.categories[0].parent.id === t.taxonomyId ? "active parent-taxonomy" : "parent-taxonomy",
                                    children: Object(r.jsx)("a", {
                                        "data-txnmy-id": t.categories[0].parent.id,
                                        "data-lbl": t.categories[0].parent.apiName,
                                        className: "filter",
                                        onClick: function(e) {
                                            e.persist(), o(e, t.categories[0].parent.id)
                                        },
                                        children: t.categories[0].parent.name
                                    })
                                }, -1), t.categories.map((function(e, n) {
                                    return Object(r.jsx)("li", {
                                        className: e.id === t.taxonomyId ? "active filter-child" : "filter-child",
                                        children: Object(r.jsx)("a", {
                                            "data-txnmy-id": e.id,
                                            "data-lbl": e.apiName,
                                            className: "filter",
                                            onClick: function(t) {
                                                t.persist(), o(t, e.id, e.name)
                                            },
                                            children: e.name
                                        })
                                    }, n)
                                }))]
                            }), Object(r.jsx)("div", {
                                className: "rc20bottomspacing"
                            })]
                        })
                    }
                    return Object(r.jsxs)("div", {
                        className: "rc20menu",
                        children: [Object(r.jsxs)("div", {
                            className: "parent-nav",
                            style: l && l.image ? {
                                backgroundImage: "url(".concat(l.image, ")")
                            } : {},
                            children: [t.parentId && Object(r.jsx)(r.Fragment, {
                                children: Object(r.jsx)("a", {
                                    className: "rc20back icn-chevron-left",
                                    "data-txnmy-id": t.parentId,
                                    "data-lbl": "prev-back-button",
                                    onClick: function(e) {
                                        u(e), n(e, t.parentId)
                                    },
                                    children: p.prodnav_back || "Back"
                                })
                            }), Object(r.jsx)("button", {
                                className: "rc20toggle ".concat(a ? "icn-close" : "icn-overflow-vert"),
                                label: "Toggle menu",
                                onClick: function(e) {
                                    c(e)
                                }
                            })]
                        }), function() {
                            var e = null;
                            return t && t.categories && t.categories[0].ancestors && t.categories[0].ancestors[0].name && (e = t.categories[0].ancestors[0].name.split(" ")), Object(r.jsx)("div", {
                                className: "rc20category",
                                children: e && Object(r.jsxs)(r.Fragment, {
                                    children: [Object(r.jsx)("div", {
                                        children: "".concat(e[0], " ").concat(e[1])
                                    }), Object(r.jsx)("div", {
                                        children: "".concat(e[2] ? e[2] : "")
                                    })]
                                })
                            })
                        }(), Object(r.jsx)("div", {
                            className: "rc20filters",
                            ref: d,
                            children: f.isMobile ? t && t.categories && t.categories.length > 0 && h() : t && t.categories && t.categories.length > 0 && Object(r.jsx)(Rt, {
                                ref: s,
                                scrollbarMaxSize: 100,
                                children: h()
                            })
                        })]
                    })
                };

            function Kt(e, t) {
                var n;
                if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
                    if (Array.isArray(e) || (n = function(e, t) {
                            if (!e) return;
                            if ("string" === typeof e) return Xt(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Xt(e, t)
                        }(e)) || t && e && "number" === typeof e.length) {
                        n && (e = n);
                        var r = 0,
                            i = function() {};
                        return {
                            s: i,
                            n: function() {
                                return r >= e.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: e[r++]
                                }
                            },
                            e: function(e) {
                                throw e
                            },
                            f: i
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, a = !0,
                    c = !1;
                return {
                    s: function() {
                        n = e[Symbol.iterator]()
                    },
                    n: function() {
                        var e = n.next();
                        return a = e.done, e
                    },
                    e: function(e) {
                        c = !0, o = e
                    },
                    f: function() {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (c) throw o
                        }
                    }
                }
            }

            function Xt(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function Gt(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function $t(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Gt(Object(n), !0).forEach((function(t) {
                        Object(S.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Gt(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function Qt() {
                if (document.querySelector(".rh02w2.rh02current .rh02-leadin")) {
                    var e = document.querySelector(".rh02w2.rh02current .rh02-leadin");
                    e.focus(), setTimeout((function() {
                        e.focus()
                    }), 0)
                } else if (document.querySelector(".rh02w2.rh02current h2")) {
                    var t = document.querySelector(".rh02w2.rh02current h2");
                    t.focus(), setTimeout((function() {
                        t.focus()
                    }), 0)
                }
            }
            var Jt = function(e) {
                    e.initialTaxonomy;
                    var t, n = e.initialData,
                        o = void 0 === n ? {} : n,
                        a = e.panel3Slides,
                        d = [],
                        f = Object(i.useContext)(y.a),
                        p = (f.isPreview, f.viewport),
                        h = Object(i.createRef)(null),
                        m = {
                            "0E3B648885C24A02B5B2676BEB82C7E9": {
                                color: "#0A3F46",
                                image: "".concat(u.r, "rh02-panel1.jpg"),
                                animateClass: "rc20p1-open"
                            },
                            "5A0B0A9213D344628F4BBA4029291F4E": {
                                color: "#33553C",
                                image: "".concat(u.r, "rh02-panel2.jpg"),
                                animateClass: "rc20p2-open"
                            }
                        };
                    ct(h, Object(i.useCallback)((function() {
                        return ke(!1)
                    })));
                    var g = Object(i.useState)({}),
                        x = g[0],
                        O = g[1],
                        w = Object(i.useState)({}),
                        S = w[0],
                        E = w[1],
                        k = Object(i.useState)(null),
                        _ = k[0],
                        L = k[1],
                        N = Object(i.useState)(""),
                        A = N[0],
                        C = N[1],
                        q = Object(i.useState)(null),
                        R = q[0],
                        P = q[1],
                        D = Object(i.useState)(!0),
                        M = D[0],
                        B = D[1],
                        H = Object(i.useState)(!1),
                        W = H[0],
                        F = H[1],
                        U = Object(i.useState)(null),
                        z = U[0],
                        V = U[1],
                        Y = Object(i.useState)(!1),
                        K = Y[0],
                        X = Y[1],
                        G = m[R] || null,
                        $ = Object(i.useRef)(),
                        Q = Object(i.useRef)(),
                        J = Object(i.useRef)(),
                        Z = Object(i.useRef)(),
                        ee = Object(i.useState)(!1),
                        te = ee[0],
                        ne = ee[1],
                        re = Object(i.useState)(!1),
                        ie = re[0],
                        oe = re[1],
                        ae = Object(i.useState)(-1),
                        ce = ae[0],
                        se = ae[1],
                        le = null,
                        ue = null,
                        de = function(e, t) {
                            return o && o[t || _] ? o[t || _][e] : null
                        };

                    function fe(e) {
                        9 === e.nativeEvent.keyCode && !1 === e.shiftKey && (document.querySelector(".rh02v0") ? Qt() : function() {
                            var e = document.querySelector(".rh02current .rh02-pcontent");
                            e && (e.focus(), setTimeout((function() {
                                e.focus()
                            }), 0))
                        }())
                    }
                    Object(i.useEffect)((function() {
                        oe(document.querySelector("body").classList.contains("rtl")), Ie();
                        var e = he();
                        return e && (ve(e), C("rc20p1-open")),
                            function() {
                                clearTimeout(z)
                            }
                    }), []), Object(i.useEffect)((function() {
                        pe()
                    }), [A]), Object(i.useEffect)((function() {
                        ne(!0)
                    }), []);
                    var pe = function() {
                        j.a.beforePopState((function(e) {
                            var t, n = e.as,
                                r = e.options,
                                i = r.taxonomyId,
                                o = r.taxonomyCategoryId;
                            if (i) o && m[o] && (t = m[o].animateClass), be(r.parentTaxonomyId || i, "browser-back", i), ge(i, t);
                            else if (-1 !== n.indexOf("product=")) {
                                var a = he();
                                ve(a)
                            } else L(null), se(-1), Ee();
                            return !0
                        }))
                    };

                    function he() {
                        var e = new URLSearchParams(window.location.search);
                        return e.get("product") ? e.get("product") : null
                    }
                    var ve = function(e) {
                            Ge(e).then((function(e) {
                                ! function(e) {
                                    var n = e.txnmyDetails,
                                        r = e.txnmyId,
                                        i = e.count;
                                    t = n, i > 0 ? je(null, r, "initial-render") : (C(""), v.a.debug(Object(b.d)("rc20IndexComponent", "invalid product name")))
                                }(e)
                            }))
                        },
                        be = function e(n, r, i) {
                            var o = {
                                txnmyId: n,
                                taxnmyName: r,
                                txnmySelected: i,
                                firstLevelTxIds: d,
                                ancestorSelected: R,
                                taxonomy: x
                            };

                            function a(o) {
                                var a = o.taxonomyObj,
                                    c = o.ancestorId,
                                    s = o.grandParentId,
                                    l = o.taxonomyCategoryId,
                                    u = o.shouldUpdateQueryParams,
                                    d = o.parentId,
                                    f = o.size,
                                    p = o.queryParam;
                                if (f > 0) c && P(c), s && me(s), O($t($t({}, a), {}, {
                                    taxonomyId: i || n
                                }));
                                else if ("initial-render" === r && 0 === f) {
                                    if (t && t.parent && t.parent.id) return e(t.parent.id, "initial-render", t.id), !1
                                } else O($t($t({}, x), {}, {
                                    taxonomyId: i || n
                                })), v.a.debug(Object(b.d)("rc20IndexComponent", "no data"));
                                return u && ye(p, n, d, l), !0
                            }
                            var c = de("taxonomyList", n);
                            c ? a(c) : $e(o).then((function(e) {
                                a(e)
                            }))
                        },
                        me = function(e) {
                            v.a.debug(Object(b.d)("rc20IndexComponent", "for siblings ".concat(e)))
                        },
                        ye = function(e, t, n, r) {
                            var i, o = {
                                    taxonomyId: t,
                                    parentTaxonomyId: n,
                                    taxonomyCategoryId: r
                                },
                                a = {},
                                c = Kt(new URLSearchParams(window.location.search));
                            try {
                                for (c.s(); !(i = c.n()).done;) {
                                    var s = I(i.value, 2),
                                        l = s[0],
                                        u = s[1];
                                    a[l] = u
                                }
                            } catch (v) {
                                c.e(v)
                            } finally {
                                c.f()
                            }!e.product && a.product && (o = {}, delete a.product);
                            var d = $t($t({}, a), e),
                                f = "";
                            for (var p in d) d.hasOwnProperty(p) && (f += "".concat(p, "=").concat(d[p], "&"));
                            var h = j.a.pathname.split("[[").shift();
                            f = f ? "".concat(h, "?").concat(f.slice(0, -1)) : h, j.a.push(j.a.pathname, f, $t({
                                shallow: !0
                            }, o))
                        },
                        ge = function(e, t) {
                            function n(e) {
                                var n = (e || {}).productDetails;
                                n ? E($t($t({}, n.fields), {}, {
                                    item_id: n.id
                                })) : (E({}), v.a.debug(Object(b.d)("rc20IndexComponent", "product data not found"))), t && Se(A)
                            }
                            E({
                                isLoading: !0
                            });
                            var r = de("productDetails", e);
                            r ? n(r) : function() {
                                var e = "/localeSummary?refUrl=".concat(encodeURIComponent(window.location.href));
                                return new Promise((function(t, n) {
                                    l.a.getOCERequestHandler().get(e, "json", {}, null, Ye).then((function(e) {
                                        if (e) {
                                            var n = e && (e.preferredlocalename || e.preferredLocale);
                                            n = "string" === typeof n ? n.toLowerCase() : "", t(n)
                                        } else t("")
                                    })).catch((function(e) {
                                        return Xe(e, n)
                                    }))
                                }))
                            }().then((function(t) {
                                (function(e, t) {
                                    var n = '/items?q=(type eq "SH-ProductDetail" AND taxonomies.categories.id eq "'.concat(e, '" AND language eq "').concat(t, '")&orderBy=updatedDate:desc&links=none&fields=').concat(["featured_content", "title", "overview", "link", "quotes", "data_label"].map((function(e) {
                                        return "fields.".concat(e)
                                    })).join(","));
                                    return new Promise((function(e, t) {
                                        l.a.getOCERequestHandler().get(n, "json", {}, null, ze).then((function(t) {
                                            if (t) {
                                                var n = function(e) {
                                                    return e && e.items && e.items.length > 0 ? {
                                                        productDetails: e.items[0]
                                                    } : null
                                                }(t);
                                                e(n)
                                            } else e({})
                                        })).catch((function(e) {
                                            return Xe(e, t)
                                        }))
                                    }))
                                })(e, t).then((function(e) {
                                    n(e)
                                }))
                            }))
                        },
                        je = function(e, t) {
                            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                                r = arguments.length > 3 ? arguments[3] : void 0;
                            if (e && e.preventDefault(), _ !== t) {
                                if (L(t), t === qe || d.includes(t)) return ye({}), void Ee();
                                m[t] && P(t), ge(t, r), be(t, n)
                            }
                        },
                        xe = function(e) {
                            e.preventDefault(), X("boolean" === K ? K : !K), K ? document.body.classList.remove("lock") : document.body.classList.add("lock")
                        },
                        we = function(e, t) {
                            ([Re, Pe].includes(_) || t) && document.body.classList.contains("lock") && (X(!1), document.body.classList.remove("lock"))
                        },
                        Se = function(e) {
                            clearTimeout(z);
                            var t = function() {
                                var t = Object(s.a)(c.a.mark((function t() {
                                    return c.a.wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                (function() {
                                                    var t = "rc20p1-open" === e ? "rc20p1" : "rc20p2";
                                                    B(!0), C("".concat(t, "-open"))
                                                })();
                                            case 2:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })));
                                return function() {
                                    return t.apply(this, arguments)
                                }
                            }();
                            window.requestAnimationFrame(t)
                        },
                        Ee = function() {
                            window.requestAnimationFrame((function() {
                                C("".concat("rc20p1-open" === A ? "rc20p1" : "rc20p2", "-closing")), B(!1);
                                var e = setTimeout((function() {
                                    C(""), _e()
                                }), 400);
                                V(e)
                            }))
                        },
                        ke = function() {
                            var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                            F(!W), e && _ && ge(_)
                        },
                        _e = function() {
                            ye({}), O({}), E({})
                        };

                    function Le() {
                        return Object(r.jsx)(Yt, {
                            panelBackground: G,
                            taxonomy: x,
                            taxonomyFiltersRef: Z,
                            showFilters: K,
                            toggleMobileFilters: xe,
                            hideMobileFilters: we,
                            handleProductNavigation: je,
                            handleProductNavigationDebounce: T(je, 350)
                        })
                    }
                    var Ne = function(e) {
                            var t = de("featuredCards", _);
                            return Array.isArray(e) && e.map((function(n, i) {
                                return Object(r.jsx)(zt, {
                                    slideNo: i,
                                    totalLength: e.length,
                                    activeIndex: ce,
                                    panelBackground: G,
                                    contentInfo: n,
                                    dataTrackas: "rc20:panel".concat(i + 3),
                                    parent: J,
                                    initialData: t && t[i] ? t[i] : null
                                }, n.id)
                            }))
                        },
                        Ae = function(e) {
                            se(e)
                        },
                        Ce = function() {
                            v.a.debug(Object(b.d)("rc20IndexComponent", "successfully snapped"))
                        },
                        Ie = Object(i.useCallback)((function() {
                            var e = J.current,
                                t = "".concat($.current.offsetWidth, "px");
                            ue && (ue.unbind(Ce), ue = null), (ue = new ft(e, {
                                snapXAxis: t,
                                snapYAxis: "0%",
                                rtl: document.querySelector("body").classList.contains("rtl")
                            })).bind(Ce)
                        }), [$, J, ie]),
                        Me = function() {
                            clearTimeout(le), le = setTimeout((function() {
                                Ie()
                            }), 1e3)
                        };
                    Object(i.useEffect)((function() {
                        return window.addEventListener("resize", Me),
                            function() {
                                window.removeEventListener("resize", Me)
                            }
                    }), []);
                    return Object(r.jsx)(De, {
                        children: Object(r.jsx)(Te, { in: K,
                            timeout: 300,
                            classNames: "open",
                            children: Object(r.jsx)("section", {
                                className: "rc20v1",
                                "data-trackas": "rc20",
                                children: Object(r.jsxs)("div", {
                                    id: "rc20panels",
                                    className: ["rc20panels", A].join(" "),
                                    children: [te && Object(r.jsxs)(r.Fragment, {
                                        children: [Object(r.jsx)("div", {
                                            id: "rc20p1",
                                            className: "rc20panel",
                                            children: Object(r.jsx)(Qe, {
                                                onChange: je
                                            })
                                        }), Object(r.jsx)("div", {
                                            id: "rc20p2",
                                            ref: Q,
                                            onKeyDown: fe,
                                            className: "rc20panel",
                                            children: Object(r.jsx)(Je, {
                                                onChange: je
                                            })
                                        }), Object(r.jsx)("div", {
                                            id: "rc20p3",
                                            className: "rc20panel rh02v0",
                                            children: Object(r.jsx)(at, {
                                                onChange: je,
                                                data: a
                                            })
                                        })]
                                    }), " ", Object(r.jsx)("div", {
                                        id: "rc20tree",
                                        className: "rc20panel",
                                        children: Object(r.jsx)("div", {
                                            className: "rc20w0",
                                            style: G ? {
                                                backgroundImage: "url(".concat(G.image, ")")
                                            } : {},
                                            "data-trackas": "rc20:panel1",
                                            children: p.isMobile ? Le() : Object(r.jsx)(Oe, {
                                                children: Object(r.jsx)(Te, { in: !1,
                                                    appear: !1,
                                                    timeout: 600,
                                                    classNames: "rc20menu-slide",
                                                    children: Le()
                                                }, x.parentId || qe)
                                            })
                                        })
                                    }), " ", Object(r.jsxs)("div", {
                                        id: "rc20sub",
                                        className: ["rc20panel rc20slidepanel rc20subpanel rc20subopen"].join(" "),
                                        ref: J,
                                        onClick: function(e) {
                                            return we(0, !0)
                                        },
                                        onTouchStart: function(e) {
                                            return we(0, !0)
                                        },
                                        children: [Object(r.jsx)(Ft, {
                                            product: S,
                                            color: G && G.color,
                                            panelRef: $,
                                            slideNo: -1,
                                            totalLength: S && S.featured_content && S.featured_content.length,
                                            activeIndex: ce,
                                            initialData: de("initialQuoteOrProductAsset"),
                                            closeEditScreen: function() {
                                                return ke(!1)
                                            }
                                        }), " ", Object(r.jsxs)(r.Fragment, {
                                            children: [!S.featured_content && S.isLoading && Object(r.jsx)("div", {
                                                className: "rc20slide rc20fold2",
                                                style: {
                                                    right: "0%",
                                                    width: p.isMobile ? "100%" : "50%"
                                                },
                                                children: Object(r.jsx)("div", {
                                                    className: "rc20storypanel",
                                                    children: Object(r.jsx)("div", {
                                                        className: "rc20card",
                                                        children: Object(r.jsx)(Wt, {})
                                                    })
                                                })
                                            }), S && S.featured_content && S.featured_content.length && Ne(S.featured_content)]
                                        }), " "]
                                    }), M && $ && Object(r.jsx)(He, {
                                        items: S.featured_content && S.featured_content.length + 1,
                                        slideRef: $,
                                        parentPanelRef: J,
                                        updateActiveIndex: Ae,
                                        unique_key: S.featured_content ? _ : null,
                                        rtl: ie
                                    }), " ", M && W && Object(r.jsxs)("div", {
                                        className: "rc20popup",
                                        ref: h,
                                        children: [Object(r.jsx)("span", {
                                            className: "icn-close rc20close",
                                            onClick: ke
                                        }), Object(r.jsx)("iframe", {
                                            src: "".concat("https://orasites-prodapp.cec.ocp.oraclecloud.com/", "documents/embed/assets/edit/").concat(S.item_id, "?hide=actions"),
                                            top: "0",
                                            backgroundcolor: "white",
                                            border: "none",
                                            display: "initial",
                                            zindex: "999",
                                            position: "absolute",
                                            width: "100%",
                                            height: "100%",
                                            frameBorder: "0",
                                            title: "Edit Asset"
                                        })]
                                    }), " "]
                                })
                            })
                        })
                    })
                },
                Zt = !0;
            t.default = function(e) {
                var t = e.initialTaxonomy,
                    n = e.splashScreen,
                    o = e.metaTags,
                    a = e.initialData,
                    c = e.panel3Slides,
                    s = void 0 === c ? [] : c,
                    l = e.apiRequestList,
                    d = void 0 === l ? [] : l,
                    f = e.externalLabels,
                    p = Object(i.useState)(n)[0];
                return Object(r.jsxs)(ue, {
                    metaData: o,
                    externalLabels: f,
                    children: [Object(r.jsx)("span", {
                        dangerouslySetInnerHTML: {
                            __html: "\x3c!-- OCE Integrator Service URL: \n ".concat(d.map((function(e) {
                                return "'".concat(encodeURI(decodeURI(e)), "' \n")
                            })), " --\x3e ")
                        }
                    }), Object(r.jsx)(se.a, {
                        children: function() {
                            var e = o || {},
                                t = e.alternateLinks,
                                n = e.siteid,
                                i = e.altPagesContent;
                            return Object(r.jsxs)(r.Fragment, {
                                children: [i && i.length > 0 && n && Object(r.jsx)("link", {
                                    rel: "canonical",
                                    href: "".concat(u.c, "/").concat("default" === n || "en" === n || "us" === n ? "" : "".concat(n, "/"), "index.html")
                                }), Array.isArray(t) && t.map((function(e) {
                                    var t = e || {},
                                        n = t.preferredlocalename,
                                        i = t.siteid;
                                    return Object(r.jsx)("link", {
                                        rel: "alternate",
                                        hrefLang: n,
                                        href: "".concat(u.c, "/").concat("default" === i || "en" === i || "us" === i ? "" : "".concat(i, "/"), "index.html")
                                    }, n)
                                }))]
                            })
                        }()
                    }), Object(r.jsx)(Jt, {
                        initialTaxonomy: t,
                        initialData: a,
                        showSplash: p,
                        panel3Slides: s
                    })]
                })
            }
        },
        Qo9l: function(e, t, n) {
            var r = n("2oRo");
            e.exports = r
        },
        RK3t: function(e, t, n) {
            var r = n("0Dky"),
                i = n("xrYK"),
                o = "".split;
            e.exports = r((function() {
                return !Object("z").propertyIsEnumerable(0)
            })) ? function(e) {
                return "String" == i(e) ? o.call(e, "") : Object(e)
            } : Object
        },
        RNIs: function(e, t, n) {
            var r = n("tiKp"),
                i = n("fHMY"),
                o = n("m/L8"),
                a = r("unscopables"),
                c = Array.prototype;
            void 0 == c[a] && o.f(c, a, {
                configurable: !0,
                value: i(null)
            }), e.exports = function(e) {
                c[a][e] = !0
            }
        },
        Rm1S: function(e, t, n) {
            "use strict";
            var r = n("14Sl"),
                i = n("glrk"),
                o = n("UMSQ"),
                a = n("HYAF"),
                c = n("iqWW"),
                s = n("FMNM");
            r("match", 1, (function(e, t, n) {
                return [function(t) {
                    var n = a(this),
                        r = void 0 == t ? void 0 : t[e];
                    return void 0 !== r ? r.call(t, n) : new RegExp(t)[e](String(n))
                }, function(e) {
                    var r = n(t, e, this);
                    if (r.done) return r.value;
                    var a = i(e),
                        l = String(this);
                    if (!a.global) return s(a, l);
                    var u = a.unicode;
                    a.lastIndex = 0;
                    for (var d, f = [], p = 0; null !== (d = s(a, l));) {
                        var h = String(d[0]);
                        f[p] = h, "" === h && (a.lastIndex = c(l, o(a.lastIndex), u)), p++
                    }
                    return 0 === p ? null : f
                }]
            }))
        },
        STAE: function(e, t, n) {
            var r = n("0Dky");
            e.exports = !!Object.getOwnPropertySymbols && !r((function() {
                return !String(Symbol())
            }))
        },
        T0f4: function(e, t) {
            function n(t) {
                return e.exports = n = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, n(t)
            }
            e.exports = n
        },
        TWQb: function(e, t, n) {
            var r = n("/GqU"),
                i = n("UMSQ"),
                o = n("I8vh"),
                a = function(e) {
                    return function(t, n, a) {
                        var c, s = r(t),
                            l = i(s.length),
                            u = o(a, l);
                        if (e && n != n) {
                            for (; l > u;)
                                if ((c = s[u++]) != c) return !0
                        } else
                            for (; l > u; u++)
                                if ((e || u in s) && s[u] === n) return e || u || 0;
                        return !e && -1
                    }
                };
            e.exports = {
                includes: a(!0),
                indexOf: a(!1)
            }
        },
        TeQF: function(e, t, n) {
            "use strict";
            var r = n("I+eb"),
                i = n("tycR").filter,
                o = n("Hd5f"),
                a = n("rkAj"),
                c = o("filter"),
                s = a("filter");
            r({
                target: "Array",
                proto: !0,
                forced: !c || !s
            }, {
                filter: function(e) {
                    return i(this, e, arguments.length > 1 ? arguments[1] : void 0)
                }
            })
        },
        UMSQ: function(e, t, n) {
            var r = n("ppGB"),
                i = Math.min;
            e.exports = function(e) {
                return e > 0 ? i(r(e), 9007199254740991) : 0
            }
        },
        UTVS: function(e, t) {
            var n = {}.hasOwnProperty;
            e.exports = function(e, t) {
                return n.call(e, t)
            }
        },
        UxlC: function(e, t, n) {
            "use strict";
            var r = n("14Sl"),
                i = n("glrk"),
                o = n("UMSQ"),
                a = n("ppGB"),
                c = n("HYAF"),
                s = n("iqWW"),
                l = n("DLK6"),
                u = n("FMNM"),
                d = Math.max,
                f = Math.min;
            r("replace", 2, (function(e, t, n, r) {
                var p = r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
                    h = r.REPLACE_KEEPS_$0,
                    v = p ? "$" : "$0";
                return [function(n, r) {
                    var i = c(this),
                        o = void 0 == n ? void 0 : n[e];
                    return void 0 !== o ? o.call(n, i, r) : t.call(String(i), n, r)
                }, function(e, r) {
                    if (!p && h || "string" === typeof r && -1 === r.indexOf(v)) {
                        var c = n(t, e, this, r);
                        if (c.done) return c.value
                    }
                    var b = i(e),
                        m = String(this),
                        y = "function" === typeof r;
                    y || (r = String(r));
                    var g = b.global;
                    if (g) {
                        var j = b.unicode;
                        b.lastIndex = 0
                    }
                    for (var x = [];;) {
                        var O = u(b, m);
                        if (null === O) break;
                        if (x.push(O), !g) break;
                        "" === String(O[0]) && (b.lastIndex = s(m, o(b.lastIndex), j))
                    }
                    for (var w, S = "", E = 0, k = 0; k < x.length; k++) {
                        O = x[k];
                        for (var _ = String(O[0]), L = d(f(a(O.index), m.length), 0), N = [], A = 1; A < O.length; A++) N.push(void 0 === (w = O[A]) ? w : String(w));
                        var C = O.groups;
                        if (y) {
                            var T = [_].concat(N, L, m);
                            void 0 !== C && T.push(C);
                            var q = String(r.apply(void 0, T))
                        } else q = l(_, m, L, N, C, r);
                        L >= E && (S += m.slice(E, L) + q, E = L + _.length)
                    }
                    return S + m.slice(E)
                }]
            }))
        },
        VpIT: function(e, t, n) {
            var r = n("xDBR"),
                i = n("xs3f");
            (e.exports = function(e, t) {
                return i[e] || (i[e] = void 0 !== t ? t : {})
            })("versions", []).push({
                version: "3.8.3",
                mode: r ? "pure" : "global",
                copyright: "\xa9 2021 Denis Pushkarev (zloirock.ru)"
            })
        },
        Vu81: function(e, t, n) {
            var r = n("0GbY"),
                i = n("JBy8"),
                o = n("dBg+"),
                a = n("glrk");
            e.exports = r("Reflect", "ownKeys") || function(e) {
                var t = i.f(a(e)),
                    n = o.f;
                return n ? t.concat(n(e)) : t
            }
        },
        WJkJ: function(e, t) {
            e.exports = "\t\n\v\f\r \xa0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff"
        },
        WKiH: function(e, t, n) {
            var r = n("HYAF"),
                i = "[" + n("WJkJ") + "]",
                o = RegExp("^" + i + i + "*"),
                a = RegExp(i + i + "*$"),
                c = function(e) {
                    return function(t) {
                        var n = String(r(t));
                        return 1 & e && (n = n.replace(o, "")), 2 & e && (n = n.replace(a, "")), n
                    }
                };
            e.exports = {
                start: c(1),
                end: c(2),
                trim: c(3)
            }
        },
        XGwC: function(e, t) {
            e.exports = function(e, t) {
                return {
                    enumerable: !(1 & e),
                    configurable: !(2 & e),
                    writable: !(4 & e),
                    value: t
                }
            }
        },
        Xuae: function(e, t, n) {
            "use strict";
            var r = n("mPvQ"),
                i = n("/GRZ"),
                o = n("i2R6"),
                a = (n("qXWd"), n("48fX")),
                c = n("tCBg"),
                s = n("T0f4");

            function l(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = s(e);
                    if (t) {
                        var i = s(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return c(this, n)
                }
            }
            t.__esModule = !0, t.default = void 0;
            var u = n("q1tI"),
                d = function(e) {
                    a(n, e);
                    var t = l(n);

                    function n(e) {
                        var o;
                        return i(this, n), (o = t.call(this, e))._hasHeadManager = void 0, o.emitChange = function() {
                            o._hasHeadManager && o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances), o.props))
                        }, o._hasHeadManager = o.props.headManager && o.props.headManager.mountedInstances, o
                    }
                    return o(n, [{
                        key: "componentDidMount",
                        value: function() {
                            this._hasHeadManager && this.props.headManager.mountedInstances.add(this), this.emitChange()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            this.emitChange()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this._hasHeadManager && this.props.headManager.mountedInstances.delete(this), this.emitChange()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return null
                        }
                    }]), n
                }(u.Component);
            t.default = d
        },
        YF1G: function(e, t, n) {
            var r = n("xrYK"),
                i = n("2oRo");
            e.exports = "process" == r(i.process)
        },
        YNrV: function(e, t, n) {
            "use strict";
            var r = n("g6v/"),
                i = n("0Dky"),
                o = n("33Wh"),
                a = n("dBg+"),
                c = n("0eef"),
                s = n("ewvW"),
                l = n("RK3t"),
                u = Object.assign,
                d = Object.defineProperty;
            e.exports = !u || i((function() {
                if (r && 1 !== u({
                        b: 1
                    }, u(d({}, "a", {
                        enumerable: !0,
                        get: function() {
                            d(this, "b", {
                                value: 3,
                                enumerable: !1
                            })
                        }
                    }), {
                        b: 2
                    })).b) return !0;
                var e = {},
                    t = {},
                    n = Symbol();
                return e[n] = 7, "abcdefghijklmnopqrst".split("").forEach((function(e) {
                    t[e] = e
                })), 7 != u({}, e)[n] || "abcdefghijklmnopqrst" != o(u({}, t)).join("")
            })) ? function(e, t) {
                for (var n = s(e), i = arguments.length, u = 1, d = a.f, f = c.f; i > u;)
                    for (var p, h = l(arguments[u++]), v = d ? o(h).concat(d(h)) : o(h), b = v.length, m = 0; b > m;) p = v[m++], r && !f.call(h, p) || (n[p] = h[p]);
                return n
            } : u
        },
        ZUd8: function(e, t, n) {
            var r = n("ppGB"),
                i = n("HYAF"),
                o = function(e) {
                    return function(t, n) {
                        var o, a, c = String(i(t)),
                            s = r(n),
                            l = c.length;
                        return s < 0 || s >= l ? e ? "" : void 0 : (o = c.charCodeAt(s)) < 55296 || o > 56319 || s + 1 === l || (a = c.charCodeAt(s + 1)) < 56320 || a > 57343 ? e ? c.charAt(s) : o : e ? c.slice(s, s + 2) : a - 56320 + (o - 55296 << 10) + 65536
                    }
                };
            e.exports = {
                codeAt: o(!1),
                charAt: o(!0)
            }
        },
        ZfDv: function(e, t, n) {
            var r = n("hh1v"),
                i = n("6LWA"),
                o = n("tiKp")("species");
            e.exports = function(e, t) {
                var n;
                return i(e) && ("function" != typeof(n = e.constructor) || n !== Array && !i(n.prototype) ? r(n) && null === (n = n[o]) && (n = void 0) : n = void 0), new(void 0 === n ? Array : n)(0 === t ? 0 : t)
            }
        },
        afO8: function(e, t, n) {
            var r, i, o, a = n("f5p1"),
                c = n("2oRo"),
                s = n("hh1v"),
                l = n("kRJp"),
                u = n("UTVS"),
                d = n("xs3f"),
                f = n("93I0"),
                p = n("0BK2"),
                h = c.WeakMap;
            if (a) {
                var v = d.state || (d.state = new h),
                    b = v.get,
                    m = v.has,
                    y = v.set;
                r = function(e, t) {
                    return t.facade = e, y.call(v, e, t), t
                }, i = function(e) {
                    return b.call(v, e) || {}
                }, o = function(e) {
                    return m.call(v, e)
                }
            } else {
                var g = f("state");
                p[g] = !0, r = function(e, t) {
                    return t.facade = e, l(e, g, t), t
                }, i = function(e) {
                    return u(e, g) ? e[g] : {}
                }, o = function(e) {
                    return u(e, g)
                }
            }
            e.exports = {
                set: r,
                get: i,
                has: o,
                enforce: function(e) {
                    return o(e) ? i(e) : r(e, {})
                },
                getterFor: function(e) {
                    return function(t) {
                        var n;
                        if (!s(t) || (n = i(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
                        return n
                    }
                }
            }
        },
        bWFh: function(e, t, n) {
            "use strict";
            var r = n("I+eb"),
                i = n("2oRo"),
                o = n("lMq5"),
                a = n("busE"),
                c = n("8YOa"),
                s = n("ImZN"),
                l = n("GarU"),
                u = n("hh1v"),
                d = n("0Dky"),
                f = n("HH4o"),
                p = n("1E5z"),
                h = n("cVYH");
            e.exports = function(e, t, n) {
                var v = -1 !== e.indexOf("Map"),
                    b = -1 !== e.indexOf("Weak"),
                    m = v ? "set" : "add",
                    y = i[e],
                    g = y && y.prototype,
                    j = y,
                    x = {},
                    O = function(e) {
                        var t = g[e];
                        a(g, e, "add" == e ? function(e) {
                            return t.call(this, 0 === e ? 0 : e), this
                        } : "delete" == e ? function(e) {
                            return !(b && !u(e)) && t.call(this, 0 === e ? 0 : e)
                        } : "get" == e ? function(e) {
                            return b && !u(e) ? void 0 : t.call(this, 0 === e ? 0 : e)
                        } : "has" == e ? function(e) {
                            return !(b && !u(e)) && t.call(this, 0 === e ? 0 : e)
                        } : function(e, n) {
                            return t.call(this, 0 === e ? 0 : e, n), this
                        })
                    };
                if (o(e, "function" != typeof y || !(b || g.forEach && !d((function() {
                        (new y).entries().next()
                    }))))) j = n.getConstructor(t, e, v, m), c.REQUIRED = !0;
                else if (o(e, !0)) {
                    var w = new j,
                        S = w[m](b ? {} : -0, 1) != w,
                        E = d((function() {
                            w.has(1)
                        })),
                        k = f((function(e) {
                            new y(e)
                        })),
                        _ = !b && d((function() {
                            for (var e = new y, t = 5; t--;) e[m](t, t);
                            return !e.has(-0)
                        }));
                    k || ((j = t((function(t, n) {
                        l(t, j, e);
                        var r = h(new y, t, j);
                        return void 0 != n && s(n, r[m], {
                            that: r,
                            AS_ENTRIES: v
                        }), r
                    }))).prototype = g, g.constructor = j), (E || _) && (O("delete"), O("has"), v && O("get")), (_ || S) && O(m), b && g.clear && delete g.clear
                }
                return x[e] = j, r({
                    global: !0,
                    forced: j != y
                }, x), p(j, e), b || n.setStrong(j, e, v), j
            }
        },
        bdgK: function(e, t, n) {
            "use strict";
            (function(e) {
                var n = function() {
                        if ("undefined" !== typeof Map) return Map;

                        function e(e, t) {
                            var n = -1;
                            return e.some((function(e, r) {
                                return e[0] === t && (n = r, !0)
                            })), n
                        }
                        return function() {
                            function t() {
                                this.__entries__ = []
                            }
                            return Object.defineProperty(t.prototype, "size", {
                                get: function() {
                                    return this.__entries__.length
                                },
                                enumerable: !0,
                                configurable: !0
                            }), t.prototype.get = function(t) {
                                var n = e(this.__entries__, t),
                                    r = this.__entries__[n];
                                return r && r[1]
                            }, t.prototype.set = function(t, n) {
                                var r = e(this.__entries__, t);
                                ~r ? this.__entries__[r][1] = n : this.__entries__.push([t, n])
                            }, t.prototype.delete = function(t) {
                                var n = this.__entries__,
                                    r = e(n, t);
                                ~r && n.splice(r, 1)
                            }, t.prototype.has = function(t) {
                                return !!~e(this.__entries__, t)
                            }, t.prototype.clear = function() {
                                this.__entries__.splice(0)
                            }, t.prototype.forEach = function(e, t) {
                                void 0 === t && (t = null);
                                for (var n = 0, r = this.__entries__; n < r.length; n++) {
                                    var i = r[n];
                                    e.call(t, i[1], i[0])
                                }
                            }, t
                        }()
                    }(),
                    r = "undefined" !== typeof window && "undefined" !== typeof document && window.document === document,
                    i = "undefined" !== typeof e && e.Math === Math ? e : "undefined" !== typeof self && self.Math === Math ? self : "undefined" !== typeof window && window.Math === Math ? window : Function("return this")(),
                    o = "function" === typeof requestAnimationFrame ? requestAnimationFrame.bind(i) : function(e) {
                        return setTimeout((function() {
                            return e(Date.now())
                        }), 1e3 / 60)
                    };
                var a = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
                    c = "undefined" !== typeof MutationObserver,
                    s = function() {
                        function e() {
                            this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(e, t) {
                                var n = !1,
                                    r = !1,
                                    i = 0;

                                function a() {
                                    n && (n = !1, e()), r && s()
                                }

                                function c() {
                                    o(a)
                                }

                                function s() {
                                    var e = Date.now();
                                    if (n) {
                                        if (e - i < 2) return;
                                        r = !0
                                    } else n = !0, r = !1, setTimeout(c, t);
                                    i = e
                                }
                                return s
                            }(this.refresh.bind(this), 20)
                        }
                        return e.prototype.addObserver = function(e) {
                            ~this.observers_.indexOf(e) || this.observers_.push(e), this.connected_ || this.connect_()
                        }, e.prototype.removeObserver = function(e) {
                            var t = this.observers_,
                                n = t.indexOf(e);
                            ~n && t.splice(n, 1), !t.length && this.connected_ && this.disconnect_()
                        }, e.prototype.refresh = function() {
                            this.updateObservers_() && this.refresh()
                        }, e.prototype.updateObservers_ = function() {
                            var e = this.observers_.filter((function(e) {
                                return e.gatherActive(), e.hasActive()
                            }));
                            return e.forEach((function(e) {
                                return e.broadcastActive()
                            })), e.length > 0
                        }, e.prototype.connect_ = function() {
                            r && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), c ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
                                attributes: !0,
                                childList: !0,
                                characterData: !0,
                                subtree: !0
                            })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
                        }, e.prototype.disconnect_ = function() {
                            r && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
                        }, e.prototype.onTransitionEnd_ = function(e) {
                            var t = e.propertyName,
                                n = void 0 === t ? "" : t;
                            a.some((function(e) {
                                return !!~n.indexOf(e)
                            })) && this.refresh()
                        }, e.getInstance = function() {
                            return this.instance_ || (this.instance_ = new e), this.instance_
                        }, e.instance_ = null, e
                    }(),
                    l = function(e, t) {
                        for (var n = 0, r = Object.keys(t); n < r.length; n++) {
                            var i = r[n];
                            Object.defineProperty(e, i, {
                                value: t[i],
                                enumerable: !1,
                                writable: !1,
                                configurable: !0
                            })
                        }
                        return e
                    },
                    u = function(e) {
                        return e && e.ownerDocument && e.ownerDocument.defaultView || i
                    },
                    d = m(0, 0, 0, 0);

                function f(e) {
                    return parseFloat(e) || 0
                }

                function p(e) {
                    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                    return t.reduce((function(t, n) {
                        return t + f(e["border-" + n + "-width"])
                    }), 0)
                }

                function h(e) {
                    var t = e.clientWidth,
                        n = e.clientHeight;
                    if (!t && !n) return d;
                    var r = u(e).getComputedStyle(e),
                        i = function(e) {
                            for (var t = {}, n = 0, r = ["top", "right", "bottom", "left"]; n < r.length; n++) {
                                var i = r[n],
                                    o = e["padding-" + i];
                                t[i] = f(o)
                            }
                            return t
                        }(r),
                        o = i.left + i.right,
                        a = i.top + i.bottom,
                        c = f(r.width),
                        s = f(r.height);
                    if ("border-box" === r.boxSizing && (Math.round(c + o) !== t && (c -= p(r, "left", "right") + o), Math.round(s + a) !== n && (s -= p(r, "top", "bottom") + a)), ! function(e) {
                            return e === u(e).document.documentElement
                        }(e)) {
                        var l = Math.round(c + o) - t,
                            h = Math.round(s + a) - n;
                        1 !== Math.abs(l) && (c -= l), 1 !== Math.abs(h) && (s -= h)
                    }
                    return m(i.left, i.top, c, s)
                }
                var v = "undefined" !== typeof SVGGraphicsElement ? function(e) {
                    return e instanceof u(e).SVGGraphicsElement
                } : function(e) {
                    return e instanceof u(e).SVGElement && "function" === typeof e.getBBox
                };

                function b(e) {
                    return r ? v(e) ? function(e) {
                        var t = e.getBBox();
                        return m(0, 0, t.width, t.height)
                    }(e) : h(e) : d
                }

                function m(e, t, n, r) {
                    return {
                        x: e,
                        y: t,
                        width: n,
                        height: r
                    }
                }
                var y = function() {
                        function e(e) {
                            this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = m(0, 0, 0, 0), this.target = e
                        }
                        return e.prototype.isActive = function() {
                            var e = b(this.target);
                            return this.contentRect_ = e, e.width !== this.broadcastWidth || e.height !== this.broadcastHeight
                        }, e.prototype.broadcastRect = function() {
                            var e = this.contentRect_;
                            return this.broadcastWidth = e.width, this.broadcastHeight = e.height, e
                        }, e
                    }(),
                    g = function(e, t) {
                        var n = function(e) {
                            var t = e.x,
                                n = e.y,
                                r = e.width,
                                i = e.height,
                                o = "undefined" !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
                                a = Object.create(o.prototype);
                            return l(a, {
                                x: t,
                                y: n,
                                width: r,
                                height: i,
                                top: n,
                                right: t + r,
                                bottom: i + n,
                                left: t
                            }), a
                        }(t);
                        l(this, {
                            target: e,
                            contentRect: n
                        })
                    },
                    j = function() {
                        function e(e, t, r) {
                            if (this.activeObservations_ = [], this.observations_ = new n, "function" !== typeof e) throw new TypeError("The callback provided as parameter 1 is not a function.");
                            this.callback_ = e, this.controller_ = t, this.callbackCtx_ = r
                        }
                        return e.prototype.observe = function(e) {
                            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                            if ("undefined" !== typeof Element && Element instanceof Object) {
                                if (!(e instanceof u(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                                var t = this.observations_;
                                t.has(e) || (t.set(e, new y(e)), this.controller_.addObserver(this), this.controller_.refresh())
                            }
                        }, e.prototype.unobserve = function(e) {
                            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                            if ("undefined" !== typeof Element && Element instanceof Object) {
                                if (!(e instanceof u(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                                var t = this.observations_;
                                t.has(e) && (t.delete(e), t.size || this.controller_.removeObserver(this))
                            }
                        }, e.prototype.disconnect = function() {
                            this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
                        }, e.prototype.gatherActive = function() {
                            var e = this;
                            this.clearActive(), this.observations_.forEach((function(t) {
                                t.isActive() && e.activeObservations_.push(t)
                            }))
                        }, e.prototype.broadcastActive = function() {
                            if (this.hasActive()) {
                                var e = this.callbackCtx_,
                                    t = this.activeObservations_.map((function(e) {
                                        return new g(e.target, e.broadcastRect())
                                    }));
                                this.callback_.call(e, t, e), this.clearActive()
                            }
                        }, e.prototype.clearActive = function() {
                            this.activeObservations_.splice(0)
                        }, e.prototype.hasActive = function() {
                            return this.activeObservations_.length > 0
                        }, e
                    }(),
                    x = "undefined" !== typeof WeakMap ? new WeakMap : new n,
                    O = function e(t) {
                        if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function.");
                        if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                        var n = s.getInstance(),
                            r = new j(t, n, this);
                        x.set(this, r)
                    };
                ["observe", "unobserve", "disconnect"].forEach((function(e) {
                    O.prototype[e] = function() {
                        var t;
                        return (t = x.get(this))[e].apply(t, arguments)
                    }
                }));
                var w = "undefined" !== typeof i.ResizeObserver ? i.ResizeObserver : O;
                t.a = w
            }).call(this, n("yLpj"))
        },
        busE: function(e, t, n) {
            var r = n("2oRo"),
                i = n("kRJp"),
                o = n("UTVS"),
                a = n("zk60"),
                c = n("iSVu"),
                s = n("afO8"),
                l = s.get,
                u = s.enforce,
                d = String(String).split("String");
            (e.exports = function(e, t, n, c) {
                var s, l = !!c && !!c.unsafe,
                    f = !!c && !!c.enumerable,
                    p = !!c && !!c.noTargetGet;
                "function" == typeof n && ("string" != typeof t || o(n, "name") || i(n, "name", t), (s = u(n)).source || (s.source = d.join("string" == typeof t ? t : ""))), e !== r ? (l ? !p && e[t] && (f = !0) : delete e[t], f ? e[t] = n : i(e, t, n)) : f ? e[t] = n : a(t, n)
            })(Function.prototype, "toString", (function() {
                return "function" == typeof this && l(this).source || c(this)
            }))
        },
        cVYH: function(e, t, n) {
            var r = n("hh1v"),
                i = n("0rvr");
            e.exports = function(e, t, n) {
                var o, a;
                return i && "function" == typeof(o = t.constructor) && o !== n && r(a = o.prototype) && a !== n.prototype && i(e, a), e
            }
        },
        "dBg+": function(e, t) {
            t.f = Object.getOwnPropertySymbols
        },
        dwco: function(e, t, n) {
            ! function() {
                "use strict";
                e.exports = {
                    polyfill: function() {
                        var e = window,
                            t = document;
                        if (!("scrollBehavior" in t.documentElement.style) || !0 === e.__forceSmoothScrollPolyfill__) {
                            var n, r = e.HTMLElement || e.Element,
                                i = {
                                    scroll: e.scroll || e.scrollTo,
                                    scrollBy: e.scrollBy,
                                    elementScroll: r.prototype.scroll || c,
                                    scrollIntoView: r.prototype.scrollIntoView
                                },
                                o = e.performance && e.performance.now ? e.performance.now.bind(e.performance) : Date.now,
                                a = (n = e.navigator.userAgent, new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(n) ? 1 : 0);
                            e.scroll = e.scrollTo = function() {
                                void 0 !== arguments[0] && (!0 !== s(arguments[0]) ? h.call(e, t.body, void 0 !== arguments[0].left ? ~~arguments[0].left : e.scrollX || e.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : e.scrollY || e.pageYOffset) : i.scroll.call(e, void 0 !== arguments[0].left ? arguments[0].left : "object" !== typeof arguments[0] ? arguments[0] : e.scrollX || e.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : e.scrollY || e.pageYOffset))
                            }, e.scrollBy = function() {
                                void 0 !== arguments[0] && (s(arguments[0]) ? i.scrollBy.call(e, void 0 !== arguments[0].left ? arguments[0].left : "object" !== typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : h.call(e, t.body, ~~arguments[0].left + (e.scrollX || e.pageXOffset), ~~arguments[0].top + (e.scrollY || e.pageYOffset)))
                            }, r.prototype.scroll = r.prototype.scrollTo = function() {
                                if (void 0 !== arguments[0])
                                    if (!0 !== s(arguments[0])) {
                                        var e = arguments[0].left,
                                            t = arguments[0].top;
                                        h.call(this, this, "undefined" === typeof e ? this.scrollLeft : ~~e, "undefined" === typeof t ? this.scrollTop : ~~t)
                                    } else {
                                        if ("number" === typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value could not be converted");
                                        i.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" !== typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
                                    }
                            }, r.prototype.scrollBy = function() {
                                void 0 !== arguments[0] && (!0 !== s(arguments[0]) ? this.scroll({
                                    left: ~~arguments[0].left + this.scrollLeft,
                                    top: ~~arguments[0].top + this.scrollTop,
                                    behavior: arguments[0].behavior
                                }) : i.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop))
                            }, r.prototype.scrollIntoView = function() {
                                if (!0 !== s(arguments[0])) {
                                    var n = f(this),
                                        r = n.getBoundingClientRect(),
                                        o = this.getBoundingClientRect();
                                    n !== t.body ? (h.call(this, n, n.scrollLeft + o.left - r.left, n.scrollTop + o.top - r.top), "fixed" !== e.getComputedStyle(n).position && e.scrollBy({
                                        left: r.left,
                                        top: r.top,
                                        behavior: "smooth"
                                    })) : e.scrollBy({
                                        left: o.left,
                                        top: o.top,
                                        behavior: "smooth"
                                    })
                                } else i.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0])
                            }
                        }

                        function c(e, t) {
                            this.scrollLeft = e, this.scrollTop = t
                        }

                        function s(e) {
                            if (null === e || "object" !== typeof e || void 0 === e.behavior || "auto" === e.behavior || "instant" === e.behavior) return !0;
                            if ("object" === typeof e && "smooth" === e.behavior) return !1;
                            throw new TypeError("behavior member of ScrollOptions " + e.behavior + " is not a valid value for enumeration ScrollBehavior.")
                        }

                        function l(e, t) {
                            return "Y" === t ? e.clientHeight + a < e.scrollHeight : "X" === t ? e.clientWidth + a < e.scrollWidth : void 0
                        }

                        function u(t, n) {
                            var r = e.getComputedStyle(t, null)["overflow" + n];
                            return "auto" === r || "scroll" === r
                        }

                        function d(e) {
                            var t = l(e, "Y") && u(e, "Y"),
                                n = l(e, "X") && u(e, "X");
                            return t || n
                        }

                        function f(e) {
                            for (; e !== t.body && !1 === d(e);) e = e.parentNode || e.host;
                            return e
                        }

                        function p(t) {
                            var n, r, i, a, c = (o() - t.startTime) / 468;
                            a = c = c > 1 ? 1 : c, n = .5 * (1 - Math.cos(Math.PI * a)), r = t.startX + (t.x - t.startX) * n, i = t.startY + (t.y - t.startY) * n, t.method.call(t.scrollable, r, i), r === t.x && i === t.y || e.requestAnimationFrame(p.bind(e, t))
                        }

                        function h(n, r, a) {
                            var s, l, u, d, f = o();
                            n === t.body ? (s = e, l = e.scrollX || e.pageXOffset, u = e.scrollY || e.pageYOffset, d = i.scroll) : (s = n, l = n.scrollLeft, u = n.scrollTop, d = c), p({
                                scrollable: s,
                                method: d,
                                startTime: f,
                                startX: l,
                                startY: u,
                                x: r,
                                y: a
                            })
                        }
                    }
                }
            }()
        },
        "eDl+": function(e, t) {
            e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
        },
        ewvW: function(e, t, n) {
            var r = n("HYAF");
            e.exports = function(e) {
                return Object(r(e))
            }
        },
        f5p1: function(e, t, n) {
            var r = n("2oRo"),
                i = n("iSVu"),
                o = r.WeakMap;
            e.exports = "function" === typeof o && /native code/.test(i(o))
        },
        fHMY: function(e, t, n) {
            var r, i = n("glrk"),
                o = n("N+g0"),
                a = n("eDl+"),
                c = n("0BK2"),
                s = n("G+Rx"),
                l = n("zBJ4"),
                u = n("93I0"),
                d = u("IE_PROTO"),
                f = function() {},
                p = function(e) {
                    return "<script>" + e + "<\/script>"
                },
                h = function() {
                    try {
                        r = document.domain && new ActiveXObject("htmlfile")
                    } catch (t) {}
                    h = r ? function(e) {
                        e.write(p("")), e.close();
                        var t = e.parentWindow.Object;
                        return e = null, t
                    }(r) : function() {
                        var e, t = l("iframe");
                        return t.style.display = "none", s.appendChild(t), t.src = String("javascript:"), (e = t.contentWindow.document).open(), e.write(p("document.F=Object")), e.close(), e.F
                    }();
                    for (var e = a.length; e--;) delete h.prototype[a[e]];
                    return h()
                };
            c[d] = !0, e.exports = Object.create || function(e, t) {
                var n;
                return null !== e ? (f.prototype = i(e), n = new f, f.prototype = null, n[d] = e) : n = h(), void 0 === t ? n : o(n, t)
            }
        },
        fdAy: function(e, t, n) {
            "use strict";
            var r = n("I+eb"),
                i = n("ntOU"),
                o = n("4WOD"),
                a = n("0rvr"),
                c = n("1E5z"),
                s = n("kRJp"),
                l = n("busE"),
                u = n("tiKp"),
                d = n("xDBR"),
                f = n("P4y1"),
                p = n("rpNk"),
                h = p.IteratorPrototype,
                v = p.BUGGY_SAFARI_ITERATORS,
                b = u("iterator"),
                m = function() {
                    return this
                };
            e.exports = function(e, t, n, u, p, y, g) {
                i(n, t, u);
                var j, x, O, w = function(e) {
                        if (e === p && L) return L;
                        if (!v && e in k) return k[e];
                        switch (e) {
                            case "keys":
                            case "values":
                            case "entries":
                                return function() {
                                    return new n(this, e)
                                }
                        }
                        return function() {
                            return new n(this)
                        }
                    },
                    S = t + " Iterator",
                    E = !1,
                    k = e.prototype,
                    _ = k[b] || k["@@iterator"] || p && k[p],
                    L = !v && _ || w(p),
                    N = "Array" == t && k.entries || _;
                if (N && (j = o(N.call(new e)), h !== Object.prototype && j.next && (d || o(j) === h || (a ? a(j, h) : "function" != typeof j[b] && s(j, b, m)), c(j, S, !0, !0), d && (f[S] = m))), "values" == p && _ && "values" !== _.name && (E = !0, L = function() {
                        return _.call(this)
                    }), d && !g || k[b] === L || s(k, b, L), f[t] = L, p)
                    if (x = {
                            values: w("values"),
                            keys: y ? L : w("keys"),
                            entries: w("entries")
                        }, g)
                        for (O in x)(v || E || !(O in k)) && l(k, O, x[O]);
                    else r({
                        target: t,
                        proto: !0,
                        forced: v || E
                    }, x);
                return x
            }
        },
        "g6v/": function(e, t, n) {
            var r = n("0Dky");
            e.exports = !r((function() {
                return 7 != Object.defineProperty({}, 1, {
                    get: function() {
                        return 7
                    }
                })[1]
            }))
        },
        glrk: function(e, t, n) {
            var r = n("hh1v");
            e.exports = function(e) {
                if (!r(e)) throw TypeError(String(e) + " is not an object");
                return e
            }
        },
        "hKI/": function(e, t, n) {
            (function(t) {
                var n = /^\s+|\s+$/g,
                    r = /^[-+]0x[0-9a-f]+$/i,
                    i = /^0b[01]+$/i,
                    o = /^0o[0-7]+$/i,
                    a = parseInt,
                    c = "object" == typeof t && t && t.Object === Object && t,
                    s = "object" == typeof self && self && self.Object === Object && self,
                    l = c || s || Function("return this")(),
                    u = Object.prototype.toString,
                    d = Math.max,
                    f = Math.min,
                    p = function() {
                        return l.Date.now()
                    };

                function h(e, t, n) {
                    var r, i, o, a, c, s, l = 0,
                        u = !1,
                        h = !1,
                        m = !0;
                    if ("function" != typeof e) throw new TypeError("Expected a function");

                    function y(t) {
                        var n = r,
                            o = i;
                        return r = i = void 0, l = t, a = e.apply(o, n)
                    }

                    function g(e) {
                        return l = e, c = setTimeout(x, t), u ? y(e) : a
                    }

                    function j(e) {
                        var n = e - s;
                        return void 0 === s || n >= t || n < 0 || h && e - l >= o
                    }

                    function x() {
                        var e = p();
                        if (j(e)) return O(e);
                        c = setTimeout(x, function(e) {
                            var n = t - (e - s);
                            return h ? f(n, o - (e - l)) : n
                        }(e))
                    }

                    function O(e) {
                        return c = void 0, m && r ? y(e) : (r = i = void 0, a)
                    }

                    function w() {
                        var e = p(),
                            n = j(e);
                        if (r = arguments, i = this, s = e, n) {
                            if (void 0 === c) return g(s);
                            if (h) return c = setTimeout(x, t), y(s)
                        }
                        return void 0 === c && (c = setTimeout(x, t)), a
                    }
                    return t = b(t) || 0, v(n) && (u = !!n.leading, o = (h = "maxWait" in n) ? d(b(n.maxWait) || 0, t) : o, m = "trailing" in n ? !!n.trailing : m), w.cancel = function() {
                        void 0 !== c && clearTimeout(c), l = 0, r = s = i = c = void 0
                    }, w.flush = function() {
                        return void 0 === c ? a : O(p())
                    }, w
                }

                function v(e) {
                    var t = typeof e;
                    return !!e && ("object" == t || "function" == t)
                }

                function b(e) {
                    if ("number" == typeof e) return e;
                    if (function(e) {
                            return "symbol" == typeof e || function(e) {
                                return !!e && "object" == typeof e
                            }(e) && "[object Symbol]" == u.call(e)
                        }(e)) return NaN;
                    if (v(e)) {
                        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                        e = v(t) ? t + "" : t
                    }
                    if ("string" != typeof e) return 0 === e ? e : +e;
                    e = e.replace(n, "");
                    var c = i.test(e);
                    return c || o.test(e) ? a(e.slice(2), c ? 2 : 8) : r.test(e) ? NaN : +e
                }
                e.exports = function(e, t, n) {
                    var r = !0,
                        i = !0;
                    if ("function" != typeof e) throw new TypeError("Expected a function");
                    return v(n) && (r = "leading" in n ? !!n.leading : r, i = "trailing" in n ? !!n.trailing : i), h(e, t, {
                        leading: r,
                        maxWait: t,
                        trailing: i
                    })
                }
            }).call(this, n("yLpj"))
        },
        hh1v: function(e, t) {
            e.exports = function(e) {
                return "object" === typeof e ? null !== e : "function" === typeof e
            }
        },
        iSVu: function(e, t, n) {
            var r = n("xs3f"),
                i = Function.toString;
            "function" != typeof r.inspectSource && (r.inspectSource = function(e) {
                return i.call(e)
            }), e.exports = r.inspectSource
        },
        iaYz: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.DebounceInput = void 0;
            var r = o(n("q1tI")),
                i = o(n("9/5/"));

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function a(e) {
                return (a = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function c(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                }
                return i
            }

            function s(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? s(Object(n), !0).forEach((function(t) {
                        b(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function u(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function d(e, t) {
                return (d = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function f(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = v(e);
                    if (t) {
                        var i = v(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return p(this, n)
                }
            }

            function p(e, t) {
                return !t || "object" !== a(t) && "function" !== typeof t ? h(e) : t
            }

            function h(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function v(e) {
                return (v = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function b(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var m = function(e) {
                ! function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && d(e, t)
                }(s, e);
                var t, n, o, a = f(s);

                function s(e) {
                    var t;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, s), b(h(t = a.call(this, e)), "onChange", (function(e) {
                        e.persist();
                        var n = t.state.value,
                            r = t.props.minLength;
                        t.setState({
                            value: e.target.value
                        }, (function() {
                            var i = t.state.value;
                            i.length >= r ? t.notify(e) : n.length > i.length && t.notify(l(l({}, e), {}, {
                                target: l(l({}, e.target), {}, {
                                    value: ""
                                })
                            }))
                        }))
                    })), b(h(t), "onKeyDown", (function(e) {
                        "Enter" === e.key && t.forceNotify(e);
                        var n = t.props.onKeyDown;
                        n && (e.persist(), n(e))
                    })), b(h(t), "onBlur", (function(e) {
                        t.forceNotify(e);
                        var n = t.props.onBlur;
                        n && (e.persist(), n(e))
                    })), b(h(t), "createNotifier", (function(e) {
                        if (e < 0) t.notify = function() {
                            return null
                        };
                        else if (0 === e) t.notify = t.doNotify;
                        else {
                            var n = (0, i.default)((function(e) {
                                t.isDebouncing = !1, t.doNotify(e)
                            }), e);
                            t.notify = function(e) {
                                t.isDebouncing = !0, n(e)
                            }, t.flush = function() {
                                return n.flush()
                            }, t.cancel = function() {
                                t.isDebouncing = !1, n.cancel()
                            }
                        }
                    })), b(h(t), "doNotify", (function() {
                        var e = t.props.onChange;
                        e.apply(void 0, arguments)
                    })), b(h(t), "forceNotify", (function(e) {
                        var n = t.props.debounceTimeout;
                        if (t.isDebouncing || !(n > 0)) {
                            t.cancel && t.cancel();
                            var r = t.state.value,
                                i = t.props.minLength;
                            r.length >= i ? t.doNotify(e) : t.doNotify(l(l({}, e), {}, {
                                target: l(l({}, e.target), {}, {
                                    value: r
                                })
                            }))
                        }
                    })), t.isDebouncing = !1, t.state = {
                        value: "undefined" === typeof e.value || null === e.value ? "" : e.value
                    };
                    var n = t.props.debounceTimeout;
                    return t.createNotifier(n), t
                }
                return t = s, (n = [{
                    key: "componentDidUpdate",
                    value: function(e) {
                        if (!this.isDebouncing) {
                            var t = this.props,
                                n = t.value,
                                r = t.debounceTimeout,
                                i = e.debounceTimeout,
                                o = e.value,
                                a = this.state.value;
                            "undefined" !== typeof n && o !== n && a !== n && this.setState({
                                value: n
                            }), r !== i && this.createNotifier(r)
                        }
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.flush && this.flush()
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e, t, n = this.props,
                            i = n.element,
                            o = (n.onChange, n.value, n.minLength, n.debounceTimeout, n.forceNotifyByEnter),
                            a = n.forceNotifyOnBlur,
                            s = n.onKeyDown,
                            u = n.onBlur,
                            d = n.inputRef,
                            f = c(n, ["element", "onChange", "value", "minLength", "debounceTimeout", "forceNotifyByEnter", "forceNotifyOnBlur", "onKeyDown", "onBlur", "inputRef"]),
                            p = this.state.value;
                        e = o ? {
                            onKeyDown: this.onKeyDown
                        } : s ? {
                            onKeyDown: s
                        } : {}, t = a ? {
                            onBlur: this.onBlur
                        } : u ? {
                            onBlur: u
                        } : {};
                        var h = d ? {
                            ref: d
                        } : {};
                        return r.default.createElement(i, l(l(l(l({}, f), {}, {
                            onChange: this.onChange,
                            value: p
                        }, e), t), h))
                    }
                }]) && u(t.prototype, n), o && u(t, o), s
            }(r.default.PureComponent);
            t.DebounceInput = m, b(m, "defaultProps", {
                element: "input",
                type: "text",
                onKeyDown: void 0,
                onBlur: void 0,
                value: void 0,
                minLength: 0,
                debounceTimeout: 100,
                forceNotifyByEnter: !0,
                forceNotifyOnBlur: !0,
                inputRef: void 0
            })
        },
        iqWW: function(e, t, n) {
            "use strict";
            var r = n("ZUd8").charAt;
            e.exports = function(e, t, n) {
                return t + (n ? r(e, t).length : 1)
            }
        },
        kG2m: function(e, t) {
            e.exports = function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
        },
        kOOl: function(e, t) {
            var n = 0,
                r = Math.random();
            e.exports = function(e) {
                return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++n + r).toString(36)
            }
        },
        kRJp: function(e, t, n) {
            var r = n("g6v/"),
                i = n("m/L8"),
                o = n("XGwC");
            e.exports = r ? function(e, t, n) {
                return i.f(e, t, o(1, n))
            } : function(e, t, n) {
                return e[t] = n, e
            }
        },
        kmMV: function(e, t, n) {
            "use strict";
            var r = n("rW0t"),
                i = n("n3/R"),
                o = RegExp.prototype.exec,
                a = String.prototype.replace,
                c = o,
                s = function() {
                    var e = /a/,
                        t = /b*/g;
                    return o.call(e, "a"), o.call(t, "a"), 0 !== e.lastIndex || 0 !== t.lastIndex
                }(),
                l = i.UNSUPPORTED_Y || i.BROKEN_CARET,
                u = void 0 !== /()??/.exec("")[1];
            (s || u || l) && (c = function(e) {
                var t, n, i, c, d = this,
                    f = l && d.sticky,
                    p = r.call(d),
                    h = d.source,
                    v = 0,
                    b = e;
                return f && (-1 === (p = p.replace("y", "")).indexOf("g") && (p += "g"), b = String(e).slice(d.lastIndex), d.lastIndex > 0 && (!d.multiline || d.multiline && "\n" !== e[d.lastIndex - 1]) && (h = "(?: " + h + ")", b = " " + b, v++), n = new RegExp("^(?:" + h + ")", p)), u && (n = new RegExp("^" + h + "$(?!\\s)", p)), s && (t = d.lastIndex), i = o.call(f ? n : d, b), f ? i ? (i.input = i.input.slice(v), i[0] = i[0].slice(v), i.index = d.lastIndex, d.lastIndex += i[0].length) : d.lastIndex = 0 : s && i && (d.lastIndex = d.global ? i.index + i[0].length : t), u && i && i.length > 1 && a.call(i[0], n, (function() {
                    for (c = 1; c < arguments.length - 2; c++) void 0 === arguments[c] && (i[c] = void 0)
                })), i
            }), e.exports = c
        },
        lMq5: function(e, t, n) {
            var r = n("0Dky"),
                i = /#|\.prototype\./,
                o = function(e, t) {
                    var n = c[a(e)];
                    return n == l || n != s && ("function" == typeof t ? r(t) : !!t)
                },
                a = o.normalize = function(e) {
                    return String(e).replace(i, ".").toLowerCase()
                },
                c = o.data = {},
                s = o.NATIVE = "N",
                l = o.POLYFILL = "P";
            e.exports = o
        },
        lwAK: function(e, t, n) {
            "use strict";
            var r;
            t.__esModule = !0, t.AmpStateContext = void 0;
            var i = ((r = n("q1tI")) && r.__esModule ? r : {
                default: r
            }).default.createContext({});
            t.AmpStateContext = i
        },
        "m/L8": function(e, t, n) {
            var r = n("g6v/"),
                i = n("DPsx"),
                o = n("glrk"),
                a = n("wE6v"),
                c = Object.defineProperty;
            t.f = r ? c : function(e, t, n) {
                if (o(e), t = a(t, !0), o(n), i) try {
                    return c(e, t, n)
                } catch (r) {}
                if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
                return "value" in n && (e[t] = n.value), e
            }
        },
        mPvQ: function(e, t, n) {
            var r = n("5fIB"),
                i = n("rlHP"),
                o = n("KckH"),
                a = n("kG2m");
            e.exports = function(e) {
                return r(e) || i(e) || o(e) || a()
            }
        },
        "n3/R": function(e, t, n) {
            "use strict";
            var r = n("0Dky");

            function i(e, t) {
                return RegExp(e, t)
            }
            t.UNSUPPORTED_Y = r((function() {
                var e = i("a", "y");
                return e.lastIndex = 2, null != e.exec("abcd")
            })), t.BROKEN_CARET = r((function() {
                var e = i("^r", "gy");
                return e.lastIndex = 2, null != e.exec("str")
            }))
        },
        ntOU: function(e, t, n) {
            "use strict";
            var r = n("rpNk").IteratorPrototype,
                i = n("fHMY"),
                o = n("XGwC"),
                a = n("1E5z"),
                c = n("P4y1"),
                s = function() {
                    return this
                };
            e.exports = function(e, t, n) {
                var l = t + " Iterator";
                return e.prototype = i(r, {
                    next: o(1, n)
                }), a(e, l, !1, !0), c[l] = s, e
            }
        },
        pkCn: function(e, t, n) {
            "use strict";
            var r = n("0Dky");
            e.exports = function(e, t) {
                var n = [][e];
                return !!n && r((function() {
                    n.call(null, t || function() {
                        throw 1
                    }, 1)
                }))
            }
        },
        ppGB: function(e, t) {
            var n = Math.ceil,
                r = Math.floor;
            e.exports = function(e) {
                return isNaN(e = +e) ? 0 : (e > 0 ? r : n)(e)
            }
        },
        qXWd: function(e, t) {
            e.exports = function(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
        },
        rB9j: function(e, t, n) {
            "use strict";
            var r = n("I+eb"),
                i = n("kmMV");
            r({
                target: "RegExp",
                proto: !0,
                forced: /./.exec !== i
            }, {
                exec: i
            })
        },
        rKzb: function(e, t, n) {
            "use strict";
            var r = n("4syw"),
                i = n("8YOa").getWeakData,
                o = n("glrk"),
                a = n("hh1v"),
                c = n("GarU"),
                s = n("ImZN"),
                l = n("tycR"),
                u = n("UTVS"),
                d = n("afO8"),
                f = d.set,
                p = d.getterFor,
                h = l.find,
                v = l.findIndex,
                b = 0,
                m = function(e) {
                    return e.frozen || (e.frozen = new y)
                },
                y = function() {
                    this.entries = []
                },
                g = function(e, t) {
                    return h(e.entries, (function(e) {
                        return e[0] === t
                    }))
                };
            y.prototype = {
                get: function(e) {
                    var t = g(this, e);
                    if (t) return t[1]
                },
                has: function(e) {
                    return !!g(this, e)
                },
                set: function(e, t) {
                    var n = g(this, e);
                    n ? n[1] = t : this.entries.push([e, t])
                },
                delete: function(e) {
                    var t = v(this.entries, (function(t) {
                        return t[0] === e
                    }));
                    return ~t && this.entries.splice(t, 1), !!~t
                }
            }, e.exports = {
                getConstructor: function(e, t, n, l) {
                    var d = e((function(e, r) {
                            c(e, d, t), f(e, {
                                type: t,
                                id: b++,
                                frozen: void 0
                            }), void 0 != r && s(r, e[l], {
                                that: e,
                                AS_ENTRIES: n
                            })
                        })),
                        h = p(t),
                        v = function(e, t, n) {
                            var r = h(e),
                                a = i(o(t), !0);
                            return !0 === a ? m(r).set(t, n) : a[r.id] = n, e
                        };
                    return r(d.prototype, {
                        delete: function(e) {
                            var t = h(this);
                            if (!a(e)) return !1;
                            var n = i(e);
                            return !0 === n ? m(t).delete(e) : n && u(n, t.id) && delete n[t.id]
                        },
                        has: function(e) {
                            var t = h(this);
                            if (!a(e)) return !1;
                            var n = i(e);
                            return !0 === n ? m(t).has(e) : n && u(n, t.id)
                        }
                    }), r(d.prototype, n ? {
                        get: function(e) {
                            var t = h(this);
                            if (a(e)) {
                                var n = i(e);
                                return !0 === n ? m(t).get(e) : n ? n[t.id] : void 0
                            }
                        },
                        set: function(e, t) {
                            return v(this, e, t)
                        }
                    } : {
                        add: function(e) {
                            return v(this, e, !0)
                        }
                    }), d
                }
            }
        },
        rW0t: function(e, t, n) {
            "use strict";
            var r = n("glrk");
            e.exports = function() {
                var e = r(this),
                    t = "";
                return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.sticky && (t += "y"), t
            }
        },
        rkAj: function(e, t, n) {
            var r = n("g6v/"),
                i = n("0Dky"),
                o = n("UTVS"),
                a = Object.defineProperty,
                c = {},
                s = function(e) {
                    throw e
                };
            e.exports = function(e, t) {
                if (o(c, e)) return c[e];
                t || (t = {});
                var n = [][e],
                    l = !!o(t, "ACCESSORS") && t.ACCESSORS,
                    u = o(t, 0) ? t[0] : s,
                    d = o(t, 1) ? t[1] : void 0;
                return c[e] = !!n && !i((function() {
                    if (l && !r) return !0;
                    var e = {
                        length: -1
                    };
                    l ? a(e, 1, {
                        enumerable: !0,
                        get: s
                    }) : e[1] = 1, n.call(e, u, d)
                }))
            }
        },
        rlHP: function(e, t) {
            e.exports = function(e) {
                if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
            }
        },
        rpNk: function(e, t, n) {
            "use strict";
            var r, i, o, a = n("0Dky"),
                c = n("4WOD"),
                s = n("kRJp"),
                l = n("UTVS"),
                u = n("tiKp"),
                d = n("xDBR"),
                f = u("iterator"),
                p = !1;
            [].keys && ("next" in (o = [].keys()) ? (i = c(c(o))) !== Object.prototype && (r = i) : p = !0);
            var h = void 0 == r || a((function() {
                var e = {};
                return r[f].call(e) !== e
            }));
            h && (r = {}), d && !h || l(r, f) || s(r, f, (function() {
                return this
            })), e.exports = {
                IteratorPrototype: r,
                BUGGY_SAFARI_ITERATORS: p
            }
        },
        rs2i: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/product-navigator/[[...slug]]", function() {
                return n("QZ0l")
            }])
        },
        sEFX: function(e, t, n) {
            "use strict";
            var r = n("AO7/"),
                i = n("9d/t");
            e.exports = r ? {}.toString : function() {
                return "[object " + i(this) + "]"
            }
        },
        sMBO: function(e, t, n) {
            var r = n("g6v/"),
                i = n("m/L8").f,
                o = Function.prototype,
                a = o.toString,
                c = /^\s*function ([^ (]*)/;
            r && !("name" in o) && i(o, "name", {
                configurable: !0,
                get: function() {
                    try {
                        return a.call(this).match(c)[1]
                    } catch (e) {
                        return ""
                    }
                }
            })
        },
        tCBg: function(e, t, n) {
            var r = n("C+bE"),
                i = n("qXWd");
            e.exports = function(e, t) {
                return !t || "object" !== r(t) && "function" !== typeof t ? i(e) : t
            }
        },
        tiKp: function(e, t, n) {
            var r = n("2oRo"),
                i = n("VpIT"),
                o = n("UTVS"),
                a = n("kOOl"),
                c = n("STAE"),
                s = n("/b8u"),
                l = i("wks"),
                u = r.Symbol,
                d = s ? u : u && u.withoutSetter || a;
            e.exports = function(e) {
                return o(l, e) || (c && o(u, e) ? l[e] = u[e] : l[e] = d("Symbol." + e)), l[e]
            }
        },
        tycR: function(e, t, n) {
            var r = n("A2ZE"),
                i = n("RK3t"),
                o = n("ewvW"),
                a = n("UMSQ"),
                c = n("ZfDv"),
                s = [].push,
                l = function(e) {
                    var t = 1 == e,
                        n = 2 == e,
                        l = 3 == e,
                        u = 4 == e,
                        d = 6 == e,
                        f = 7 == e,
                        p = 5 == e || d;
                    return function(h, v, b, m) {
                        for (var y, g, j = o(h), x = i(j), O = r(v, b, 3), w = a(x.length), S = 0, E = m || c, k = t ? E(h, w) : n || f ? E(h, 0) : void 0; w > S; S++)
                            if ((p || S in x) && (g = O(y = x[S], S, j), e))
                                if (t) k[S] = g;
                                else if (g) switch (e) {
                            case 3:
                                return !0;
                            case 5:
                                return y;
                            case 6:
                                return S;
                            case 2:
                                s.call(k, y)
                        } else switch (e) {
                            case 4:
                                return !1;
                            case 7:
                                s.call(k, y)
                        }
                        return d ? -1 : l || u ? u : k
                    }
                };
            e.exports = {
                forEach: l(0),
                map: l(1),
                filter: l(2),
                some: l(3),
                every: l(4),
                find: l(5),
                findIndex: l(6),
                filterOut: l(7)
            }
        },
        uy83: function(e, t, n) {
            var r = n("0Dky");
            e.exports = !r((function() {
                return Object.isExtensible(Object.preventExtensions({}))
            }))
        },
        uyHG: function(e, t, n) {
            (function(t) {
                var n = "[object GeneratorFunction]",
                    r = /^\[object .+?Constructor\]$/,
                    i = "object" == typeof t && t && t.Object === Object && t,
                    o = "object" == typeof self && self && self.Object === Object && self,
                    a = i || o || Function("return this")();
                var c = Array.prototype,
                    s = Function.prototype,
                    l = Object.prototype,
                    u = a["__core-js_shared__"],
                    d = function() {
                        var e = /[^.]+$/.exec(u && u.keys && u.keys.IE_PROTO || "");
                        return e ? "Symbol(src)_1." + e : ""
                    }(),
                    f = s.toString,
                    p = l.hasOwnProperty,
                    h = l.toString,
                    v = RegExp("^" + f.call(p).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                    b = c.splice,
                    m = E(a, "Map"),
                    y = E(Object, "create");

                function g(e) {
                    var t = -1,
                        n = e ? e.length : 0;
                    for (this.clear(); ++t < n;) {
                        var r = e[t];
                        this.set(r[0], r[1])
                    }
                }

                function j(e) {
                    var t = -1,
                        n = e ? e.length : 0;
                    for (this.clear(); ++t < n;) {
                        var r = e[t];
                        this.set(r[0], r[1])
                    }
                }

                function x(e) {
                    var t = -1,
                        n = e ? e.length : 0;
                    for (this.clear(); ++t < n;) {
                        var r = e[t];
                        this.set(r[0], r[1])
                    }
                }

                function O(e, t) {
                    for (var n, r, i = e.length; i--;)
                        if ((n = e[i][0]) === (r = t) || n !== n && r !== r) return i;
                    return -1
                }

                function w(e) {
                    return !(!_(e) || (t = e, d && d in t)) && (function(e) {
                        var t = _(e) ? h.call(e) : "";
                        return "[object Function]" == t || t == n
                    }(e) || function(e) {
                        var t = !1;
                        if (null != e && "function" != typeof e.toString) try {
                            t = !!(e + "")
                        } catch (n) {}
                        return t
                    }(e) ? v : r).test(function(e) {
                        if (null != e) {
                            try {
                                return f.call(e)
                            } catch (t) {}
                            try {
                                return e + ""
                            } catch (t) {}
                        }
                        return ""
                    }(e));
                    var t
                }

                function S(e, t) {
                    var n = e.__data__;
                    return function(e) {
                        var t = typeof e;
                        return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
                    }(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
                }

                function E(e, t) {
                    var n = function(e, t) {
                        return null == e ? void 0 : e[t]
                    }(e, t);
                    return w(n) ? n : void 0
                }

                function k(e, t) {
                    if ("function" != typeof e || t && "function" != typeof t) throw new TypeError("Expected a function");
                    var n = function() {
                        var r = arguments,
                            i = t ? t.apply(this, r) : r[0],
                            o = n.cache;
                        if (o.has(i)) return o.get(i);
                        var a = e.apply(this, r);
                        return n.cache = o.set(i, a), a
                    };
                    return n.cache = new(k.Cache || x), n
                }

                function _(e) {
                    var t = typeof e;
                    return !!e && ("object" == t || "function" == t)
                }
                g.prototype.clear = function() {
                    this.__data__ = y ? y(null) : {}
                }, g.prototype.delete = function(e) {
                    return this.has(e) && delete this.__data__[e]
                }, g.prototype.get = function(e) {
                    var t = this.__data__;
                    if (y) {
                        var n = t[e];
                        return "__lodash_hash_undefined__" === n ? void 0 : n
                    }
                    return p.call(t, e) ? t[e] : void 0
                }, g.prototype.has = function(e) {
                    var t = this.__data__;
                    return y ? void 0 !== t[e] : p.call(t, e)
                }, g.prototype.set = function(e, t) {
                    return this.__data__[e] = y && void 0 === t ? "__lodash_hash_undefined__" : t, this
                }, j.prototype.clear = function() {
                    this.__data__ = []
                }, j.prototype.delete = function(e) {
                    var t = this.__data__,
                        n = O(t, e);
                    return !(n < 0) && (n == t.length - 1 ? t.pop() : b.call(t, n, 1), !0)
                }, j.prototype.get = function(e) {
                    var t = this.__data__,
                        n = O(t, e);
                    return n < 0 ? void 0 : t[n][1]
                }, j.prototype.has = function(e) {
                    return O(this.__data__, e) > -1
                }, j.prototype.set = function(e, t) {
                    var n = this.__data__,
                        r = O(n, e);
                    return r < 0 ? n.push([e, t]) : n[r][1] = t, this
                }, x.prototype.clear = function() {
                    this.__data__ = {
                        hash: new g,
                        map: new(m || j),
                        string: new g
                    }
                }, x.prototype.delete = function(e) {
                    return S(this, e).delete(e)
                }, x.prototype.get = function(e) {
                    return S(this, e).get(e)
                }, x.prototype.has = function(e) {
                    return S(this, e).has(e)
                }, x.prototype.set = function(e, t) {
                    return S(this, e).set(e, t), this
                }, k.Cache = x, e.exports = k
            }).call(this, n("yLpj"))
        },
        wE6v: function(e, t, n) {
            var r = n("hh1v");
            e.exports = function(e, t) {
                if (!r(e)) return e;
                var n, i;
                if (t && "function" == typeof(n = e.toString) && !r(i = n.call(e))) return i;
                if ("function" == typeof(n = e.valueOf) && !r(i = n.call(e))) return i;
                if (!t && "function" == typeof(n = e.toString) && !r(i = n.call(e))) return i;
                throw TypeError("Can't convert object to primitive value")
            }
        },
        wg0c: function(e, t, n) {
            var r = n("2oRo"),
                i = n("WKiH").trim,
                o = n("WJkJ"),
                a = r.parseInt,
                c = /^[+-]?0[Xx]/,
                s = 8 !== a(o + "08") || 22 !== a(o + "0x16");
            e.exports = s ? function(e, t) {
                var n = i(String(e));
                return a(n, t >>> 0 || (c.test(n) ? 16 : 10))
            } : a
        },
        xDBR: function(e, t) {
            e.exports = !1
        },
        xrYK: function(e, t) {
            var n = {}.toString;
            e.exports = function(e) {
                return n.call(e).slice(8, -1)
            }
        },
        xs3f: function(e, t, n) {
            var r = n("2oRo"),
                i = n("zk60"),
                o = r["__core-js_shared__"] || i("__core-js_shared__", {});
            e.exports = o
        },
        yLpj: function(e, t) {
            var n;
            n = function() {
                return this
            }();
            try {
                n = n || new Function("return this")()
            } catch (r) {
                "object" === typeof window && (n = window)
            }
            e.exports = n
        },
        yoRg: function(e, t, n) {
            var r = n("UTVS"),
                i = n("/GqU"),
                o = n("TWQb").indexOf,
                a = n("0BK2");
            e.exports = function(e, t) {
                var n, c = i(e),
                    s = 0,
                    l = [];
                for (n in c) !r(a, n) && r(c, n) && l.push(n);
                for (; t.length > s;) r(c, n = t[s++]) && (~o(l, n) || l.push(n));
                return l
            }
        },
        zBJ4: function(e, t, n) {
            var r = n("2oRo"),
                i = n("hh1v"),
                o = r.document,
                a = i(o) && i(o.createElement);
            e.exports = function(e) {
                return a ? o.createElement(e) : {}
            }
        },
        zKZe: function(e, t, n) {
            var r = n("I+eb"),
                i = n("YNrV");
            r({
                target: "Object",
                stat: !0,
                forced: Object.assign !== i
            }, {
                assign: i
            })
        },
        zk60: function(e, t, n) {
            var r = n("2oRo"),
                i = n("kRJp");
            e.exports = function(e, t) {
                try {
                    i(r, e, t)
                } catch (n) {
                    r[e] = t
                }
                return t
            }
        }
    },
    [
        ["rs2i", 0, 2, 1, 3]
    ]
]);