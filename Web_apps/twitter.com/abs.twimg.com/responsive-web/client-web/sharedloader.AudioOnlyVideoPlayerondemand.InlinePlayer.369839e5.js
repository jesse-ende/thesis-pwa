(window.webpackJsonp = window.webpackJsonp || []).push([
    [14], {
        "+/OB": function(t, e, i) {
            i("ax0f")({
                target: "Date",
                stat: !0
            }, {
                now: function() {
                    return (new Date).getTime()
                }
            })
        },
        "+oxZ": function(t, e, i) {
            var n = i("9JhN"),
                a = i("Ew2P"),
                r = i("6OVi"),
                o = i("WxKw");
            for (var s in a) {
                var c = n[s],
                    u = c && c.prototype;
                if (u && u.forEach !== r) try {
                    o(u, "forEach", r)
                } catch (t) {
                    u.forEach = r
                }
            }
        },
        "1Pcy": function(t, e) {
            t.exports = function(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }, t.exports.default = t.exports, t.exports.__esModule = !0
        },
        "1t7P": function(t, e, i) {
            "use strict";
            var n = i("ax0f"),
                a = i("9JhN"),
                r = i("VCi3"),
                o = i("DpO5"),
                s = i("1Mu/"),
                c = i("56Cj"),
                u = i("TbR9"),
                l = i("ct80"),
                h = i("8aeu"),
                d = i("xt6W"),
                f = i("dSaG"),
                p = i("FXyv"),
                v = i("N9G2"),
                y = i("N4z3"),
                m = i("CD8Q"),
                _ = i("lhjL"),
                g = i("guiJ"),
                b = i("DEeE"),
                T = i("ZdBB"),
                E = i("7lg/"),
                P = i("JAL5"),
                w = i("GFpt"),
                M = i("q9+l"),
                S = i("4Sk5"),
                k = i("WxKw"),
                I = i("uLp7"),
                A = i("TN3B"),
                C = i("MyxS"),
                O = i("1odi"),
                L = i("HYrn"),
                V = i("fVMg"),
                N = i("TkGI"),
                x = i("aokA"),
                D = i("+kY7"),
                F = i("zc29"),
                W = i("0FSu").forEach,
                R = C("hidden"),
                B = "Symbol",
                H = V("toPrimitive"),
                U = F.set,
                j = F.getterFor(B),
                K = Object.prototype,
                G = a.Symbol,
                Y = r("JSON", "stringify"),
                z = w.f,
                J = M.f,
                X = E.f,
                q = S.f,
                Q = A("symbols"),
                Z = A("op-symbols"),
                $ = A("string-to-symbol-registry"),
                tt = A("symbol-to-string-registry"),
                et = A("wks"),
                it = a.QObject,
                nt = !it || !it.prototype || !it.prototype.findChild,
                at = s && l((function() {
                    return 7 != g(J({}, "a", {
                        get: function() {
                            return J(this, "a", {
                                value: 7
                            }).a
                        }
                    })).a
                })) ? function(t, e, i) {
                    var n = z(K, e);
                    n && delete K[e], J(t, e, i), n && t !== K && J(K, e, n)
                } : J,
                rt = function(t, e) {
                    var i = Q[t] = g(G.prototype);
                    return U(i, {
                        type: B,
                        tag: t,
                        description: e
                    }), s || (i.description = e), i
                },
                ot = u ? function(t) {
                    return "symbol" == typeof t
                } : function(t) {
                    return Object(t) instanceof G
                },
                st = function(t, e, i) {
                    t === K && st(Z, e, i), p(t);
                    var n = m(e, !0);
                    return p(i), h(Q, n) ? (i.enumerable ? (h(t, R) && t[R][n] && (t[R][n] = !1), i = g(i, {
                        enumerable: _(0, !1)
                    })) : (h(t, R) || J(t, R, _(1, {})), t[R][n] = !0), at(t, n, i)) : J(t, n, i)
                },
                ct = function(t, e) {
                    p(t);
                    var i = y(e),
                        n = b(i).concat(dt(i));
                    return W(n, (function(e) {
                        s && !ut.call(i, e) || st(t, e, i[e])
                    })), t
                },
                ut = function(t) {
                    var e = m(t, !0),
                        i = q.call(this, e);
                    return !(this === K && h(Q, e) && !h(Z, e)) && (!(i || !h(this, e) || !h(Q, e) || h(this, R) && this[R][e]) || i)
                },
                lt = function(t, e) {
                    var i = y(t),
                        n = m(e, !0);
                    if (i !== K || !h(Q, n) || h(Z, n)) {
                        var a = z(i, n);
                        return !a || !h(Q, n) || h(i, R) && i[R][n] || (a.enumerable = !0), a
                    }
                },
                ht = function(t) {
                    var e = X(y(t)),
                        i = [];
                    return W(e, (function(t) {
                        h(Q, t) || h(O, t) || i.push(t)
                    })), i
                },
                dt = function(t) {
                    var e = t === K,
                        i = X(e ? Z : y(t)),
                        n = [];
                    return W(i, (function(t) {
                        !h(Q, t) || e && !h(K, t) || n.push(Q[t])
                    })), n
                };
            (c || (I((G = function() {
                if (this instanceof G) throw TypeError("Symbol is not a constructor");
                var t = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
                    e = L(t),
                    i = function(t) {
                        this === K && i.call(Z, t), h(this, R) && h(this[R], e) && (this[R][e] = !1), at(this, e, _(1, t))
                    };
                return s && nt && at(K, e, {
                    configurable: !0,
                    set: i
                }), rt(e, t)
            }).prototype, "toString", (function() {
                return j(this).tag
            })), I(G, "withoutSetter", (function(t) {
                return rt(L(t), t)
            })), S.f = ut, M.f = st, w.f = lt, T.f = E.f = ht, P.f = dt, N.f = function(t) {
                return rt(V(t), t)
            }, s && (J(G.prototype, "description", {
                configurable: !0,
                get: function() {
                    return j(this).description
                }
            }), o || I(K, "propertyIsEnumerable", ut, {
                unsafe: !0
            }))), n({
                global: !0,
                wrap: !0,
                forced: !c,
                sham: !c
            }, {
                Symbol: G
            }), W(b(et), (function(t) {
                x(t)
            })), n({
                target: B,
                stat: !0,
                forced: !c
            }, {
                for: function(t) {
                    var e = String(t);
                    if (h($, e)) return $[e];
                    var i = G(e);
                    return $[e] = i, tt[i] = e, i
                },
                keyFor: function(t) {
                    if (!ot(t)) throw TypeError(t + " is not a symbol");
                    if (h(tt, t)) return tt[t]
                },
                useSetter: function() {
                    nt = !0
                },
                useSimple: function() {
                    nt = !1
                }
            }), n({
                target: "Object",
                stat: !0,
                forced: !c,
                sham: !s
            }, {
                create: function(t, e) {
                    return void 0 === e ? g(t) : ct(g(t), e)
                },
                defineProperty: st,
                defineProperties: ct,
                getOwnPropertyDescriptor: lt
            }), n({
                target: "Object",
                stat: !0,
                forced: !c
            }, {
                getOwnPropertyNames: ht,
                getOwnPropertySymbols: dt
            }), n({
                target: "Object",
                stat: !0,
                forced: l((function() {
                    P.f(1)
                }))
            }, {
                getOwnPropertySymbols: function(t) {
                    return P.f(v(t))
                }
            }), Y) && n({
                target: "JSON",
                stat: !0,
                forced: !c || l((function() {
                    var t = G();
                    return "[null]" != Y([t]) || "{}" != Y({
                        a: t
                    }) || "{}" != Y(Object(t))
                }))
            }, {
                stringify: function(t, e, i) {
                    for (var n, a = [t], r = 1; arguments.length > r;) a.push(arguments[r++]);
                    if (n = e, (f(e) || void 0 !== t) && !ot(t)) return d(e) || (e = function(t, e) {
                        if ("function" == typeof n && (e = n.call(this, t, e)), !ot(e)) return e
                    }), a[1] = e, Y.apply(null, a)
                }
            });
            G.prototype[H] || k(G.prototype, H, G.prototype.valueOf), D(G, B), O[R] = !0
        },
        "4D4F": function(t, e, i) {
            var n = i("ZORK");
            t.exports = /(iphone|ipod|ipad).*applewebkit/i.test(n)
        },
        5878: function(t, e, i) {
            i("ax0f")({
                target: "Function",
                proto: !0
            }, {
                bind: i("zh11")
            })
        },
        "695J": function(t, e) {
            function i(e, n) {
                return t.exports = i = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                }, t.exports.default = t.exports, t.exports.__esModule = !0, i(e, n)
            }
            t.exports = i, t.exports.default = t.exports, t.exports.__esModule = !0
        },
        "6OVi": function(t, e, i) {
            "use strict";
            var n = i("0FSu").forEach,
                a = i("f4p7")("forEach");
            t.exports = a ? [].forEach : function(t) {
                return n(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        },
        "7lg/": function(t, e, i) {
            var n = i("N4z3"),
                a = i("ZdBB").f,
                r = {}.toString,
                o = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
            t.exports.f = function(t) {
                return o && "[object Window]" == r.call(t) ? function(t) {
                    try {
                        return a(t)
                    } catch (t) {
                        return o.slice()
                    }
                }(t) : a(n(t))
            }
        },
        "7x/C": function(t, e, i) {
            var n = i("POz8"),
                a = i("uLp7"),
                r = i("UmhL");
            n || a(Object.prototype, "toString", r, {
                unsafe: !0
            })
        },
        HS6i: function(t, e, i) {
            var n = i("ZORK");
            t.exports = /web0s(?!.*chrome)/i.test(n)
        },
        "HT/6": function(t, e, i) {
            "use strict";
            i.d(e, "b", (function() {
                return n
            })), i.d(e, "a", (function() {
                return a
            }));
            const n = Object.freeze({
                    INITIAL: "initial",
                    AUTO_PAUSED: "autoPaused",
                    USER_PAUSED: "userPaused",
                    AUTO_PLAYING: "autoPlaying",
                    USER_PLAYING: "userPlaying",
                    FINISHED: "finished"
                }),
                a = Object.freeze({
                    DOCKABLE: 2,
                    NORMAL: 1
                })
        },
        JDXi: function(t, e, i) {
            var n, a, r, o = i("9JhN"),
                s = i("ct80"),
                c = i("IRf+"),
                u = i("kySU"),
                l = i("8r/q"),
                h = i("4D4F"),
                d = i("8Rd0"),
                f = o.location,
                p = o.setImmediate,
                v = o.clearImmediate,
                y = o.process,
                m = o.MessageChannel,
                _ = o.Dispatch,
                g = 0,
                b = {},
                T = "onreadystatechange",
                E = function(t) {
                    if (b.hasOwnProperty(t)) {
                        var e = b[t];
                        delete b[t], e()
                    }
                },
                P = function(t) {
                    return function() {
                        E(t)
                    }
                },
                w = function(t) {
                    E(t.data)
                },
                M = function(t) {
                    o.postMessage(t + "", f.protocol + "//" + f.host)
                };
            p && v || (p = function(t) {
                for (var e = [], i = 1; arguments.length > i;) e.push(arguments[i++]);
                return b[++g] = function() {
                    ("function" == typeof t ? t : Function(t)).apply(void 0, e)
                }, n(g), g
            }, v = function(t) {
                delete b[t]
            }, d ? n = function(t) {
                y.nextTick(P(t))
            } : _ && _.now ? n = function(t) {
                _.now(P(t))
            } : m && !h ? (r = (a = new m).port2, a.port1.onmessage = w, n = c(r.postMessage, r, 1)) : o.addEventListener && "function" == typeof postMessage && !o.importScripts && f && "file:" !== f.protocol && !s(M) ? (n = M, o.addEventListener("message", w, !1)) : n = T in l("script") ? function(t) {
                u.appendChild(l("script")).onreadystatechange = function() {
                    u.removeChild(this), E(t)
                }
            } : function(t) {
                setTimeout(P(t), 0)
            }), t.exports = {
                set: p,
                clear: v
            }
        },
        JtPf: function(t, e, i) {
            "use strict";
            var n, a, r, o, s = i("ax0f"),
                c = i("DpO5"),
                u = i("9JhN"),
                l = i("VCi3"),
                h = i("KQNt"),
                d = i("uLp7"),
                f = i("sgPY"),
                p = i("+kY7"),
                v = i("Ch6y"),
                y = i("dSaG"),
                m = i("hpdy"),
                _ = i("TM4o"),
                g = i("32/0"),
                b = i("tXjT"),
                T = i("MhFt"),
                E = i("Qzre"),
                P = i("JDXi").set,
                w = i("hXPa"),
                M = i("nDYR"),
                S = i("Qi22"),
                k = i("iByj"),
                I = i("QroT"),
                A = i("zc29"),
                C = i("66wQ"),
                O = i("fVMg"),
                L = i("8Rd0"),
                V = i("T+0C"),
                N = O("species"),
                x = "Promise",
                D = A.get,
                F = A.set,
                W = A.getterFor(x),
                R = h,
                B = u.TypeError,
                H = u.document,
                U = u.process,
                j = l("fetch"),
                K = k.f,
                G = K,
                Y = !!(H && H.createEvent && u.dispatchEvent),
                z = "function" == typeof PromiseRejectionEvent,
                J = "unhandledrejection",
                X = C(x, (function() {
                    if (!(g(R) !== String(R))) {
                        if (66 === V) return !0;
                        if (!L && !z) return !0
                    }
                    if (c && !R.prototype.finally) return !0;
                    if (V >= 51 && /native code/.test(R)) return !1;
                    var t = R.resolve(1),
                        e = function(t) {
                            t((function() {}), (function() {}))
                        };
                    return (t.constructor = {})[N] = e, !(t.then((function() {})) instanceof e)
                })),
                q = X || !T((function(t) {
                    R.all(t).catch((function() {}))
                })),
                Q = function(t) {
                    var e;
                    return !(!y(t) || "function" != typeof(e = t.then)) && e
                },
                Z = function(t, e) {
                    if (!t.notified) {
                        t.notified = !0;
                        var i = t.reactions;
                        w((function() {
                            for (var n = t.value, a = 1 == t.state, r = 0; i.length > r;) {
                                var o, s, c, u = i[r++],
                                    l = a ? u.ok : u.fail,
                                    h = u.resolve,
                                    d = u.reject,
                                    f = u.domain;
                                try {
                                    l ? (a || (2 === t.rejection && it(t), t.rejection = 1), !0 === l ? o = n : (f && f.enter(), o = l(n), f && (f.exit(), c = !0)), o === u.promise ? d(B("Promise-chain cycle")) : (s = Q(o)) ? s.call(o, h, d) : h(o)) : d(n)
                                } catch (t) {
                                    f && !c && f.exit(), d(t)
                                }
                            }
                            t.reactions = [], t.notified = !1, e && !t.rejection && tt(t)
                        }))
                    }
                },
                $ = function(t, e, i) {
                    var n, a;
                    Y ? ((n = H.createEvent("Event")).promise = e, n.reason = i, n.initEvent(t, !1, !0), u.dispatchEvent(n)) : n = {
                        promise: e,
                        reason: i
                    }, !z && (a = u["on" + t]) ? a(n) : t === J && S("Unhandled promise rejection", i)
                },
                tt = function(t) {
                    P.call(u, (function() {
                        var e, i = t.facade,
                            n = t.value;
                        if (et(t) && (e = I((function() {
                                L ? U.emit("unhandledRejection", n, i) : $(J, i, n)
                            })), t.rejection = L || et(t) ? 2 : 1, e.error)) throw e.value
                    }))
                },
                et = function(t) {
                    return 1 !== t.rejection && !t.parent
                },
                it = function(t) {
                    P.call(u, (function() {
                        var e = t.facade;
                        L ? U.emit("rejectionHandled", e) : $("rejectionhandled", e, t.value)
                    }))
                },
                nt = function(t, e, i) {
                    return function(n) {
                        t(e, n, i)
                    }
                },
                at = function(t, e, i) {
                    t.done || (t.done = !0, i && (t = i), t.value = e, t.state = 2, Z(t, !0))
                },
                rt = function(t, e, i) {
                    if (!t.done) {
                        t.done = !0, i && (t = i);
                        try {
                            if (t.facade === e) throw B("Promise can't be resolved itself");
                            var n = Q(e);
                            n ? w((function() {
                                var i = {
                                    done: !1
                                };
                                try {
                                    n.call(e, nt(rt, i, t), nt(at, i, t))
                                } catch (e) {
                                    at(i, e, t)
                                }
                            })) : (t.value = e, t.state = 1, Z(t, !1))
                        } catch (e) {
                            at({
                                done: !1
                            }, e, t)
                        }
                    }
                };
            X && (R = function(t) {
                _(this, R, x), m(t), n.call(this);
                var e = D(this);
                try {
                    t(nt(rt, e), nt(at, e))
                } catch (t) {
                    at(e, t)
                }
            }, (n = function(t) {
                F(this, {
                    type: x,
                    done: !1,
                    notified: !1,
                    parent: !1,
                    reactions: [],
                    rejection: !1,
                    state: 0,
                    value: void 0
                })
            }).prototype = f(R.prototype, {
                then: function(t, e) {
                    var i = W(this),
                        n = K(E(this, R));
                    return n.ok = "function" != typeof t || t, n.fail = "function" == typeof e && e, n.domain = L ? U.domain : void 0, i.parent = !0, i.reactions.push(n), 0 != i.state && Z(i, !1), n.promise
                },
                catch: function(t) {
                    return this.then(void 0, t)
                }
            }), a = function() {
                var t = new n,
                    e = D(t);
                this.promise = t, this.resolve = nt(rt, e), this.reject = nt(at, e)
            }, k.f = K = function(t) {
                return t === R || t === r ? new a(t) : G(t)
            }, c || "function" != typeof h || (o = h.prototype.then, d(h.prototype, "then", (function(t, e) {
                var i = this;
                return new R((function(t, e) {
                    o.call(i, t, e)
                })).then(t, e)
            }), {
                unsafe: !0
            }), "function" == typeof j && s({
                global: !0,
                enumerable: !0,
                forced: !0
            }, {
                fetch: function(t) {
                    return M(R, j.apply(u, arguments))
                }
            }))), s({
                global: !0,
                wrap: !0,
                forced: X
            }, {
                Promise: R
            }), p(R, x, !1, !0), v(x), r = l(x), s({
                target: x,
                stat: !0,
                forced: X
            }, {
                reject: function(t) {
                    var e = K(this);
                    return e.reject.call(void 0, t), e.promise
                }
            }), s({
                target: x,
                stat: !0,
                forced: c || X
            }, {
                resolve: function(t) {
                    return M(c && this === r ? R : this, t)
                }
            }), s({
                target: x,
                stat: !0,
                forced: q
            }, {
                all: function(t) {
                    var e = this,
                        i = K(e),
                        n = i.resolve,
                        a = i.reject,
                        r = I((function() {
                            var i = m(e.resolve),
                                r = [],
                                o = 0,
                                s = 1;
                            b(t, (function(t) {
                                var c = o++,
                                    u = !1;
                                r.push(void 0), s++, i.call(e, t).then((function(t) {
                                    u || (u = !0, r[c] = t, --s || n(r))
                                }), a)
                            })), --s || n(r)
                        }));
                    return r.error && a(r.value), i.promise
                },
                race: function(t) {
                    var e = this,
                        i = K(e),
                        n = i.reject,
                        a = I((function() {
                            var a = m(e.resolve);
                            b(t, (function(t) {
                                a.call(e, t).then(i.resolve, n)
                            }))
                        }));
                    return a.error && n(a.value), i.promise
                }
            })
        },
        Qi22: function(t, e, i) {
            var n = i("9JhN");
            t.exports = function(t, e) {
                var i = n.console;
                i && i.error && (1 === arguments.length ? i.error(t) : i.error(t, e))
            }
        },
        QroT: function(t, e) {
            t.exports = function(t) {
                try {
                    return {
                        error: !1,
                        value: t()
                    }
                } catch (t) {
                    return {
                        error: !0,
                        value: t
                    }
                }
            }
        },
        TkGI: function(t, e, i) {
            var n = i("fVMg");
            e.f = n
        },
        UmhL: function(t, e, i) {
            "use strict";
            var n = i("POz8"),
                a = i("2gZs");
            t.exports = n ? {}.toString : function() {
                return "[object " + a(this) + "]"
            }
        },
        "W/Kd": function(t, e, i) {
            var n = i("695J");
            t.exports = function(t, e) {
                t.prototype = Object.create(e.prototype), t.prototype.constructor = t, n(t, e)
            }, t.exports.default = t.exports, t.exports.__esModule = !0
        },
        XmKV: function(t, e, i) {
            "use strict";
            i.d(e, "b", (function() {
                return r
            })), i.d(e, "a", (function() {
                return o
            }));
            var n = (t, e) => {
                    if (0 === t.length) return;
                    let i = t[0],
                        n = e(i);
                    for (let a = 1; a < t.length; a++) {
                        const r = t[a],
                            o = e(r);
                        o < n && (i = r, n = o)
                    }
                    return i
                },
                a = i("HT/6");
            const r = t => {
                    var e, i;
                    const a = null == t || null == (e = t[0]) || null == (i = e.placement) ? void 0 : i.scrollY();
                    return n(t, 0 === a ? t => t.placement ? t.placement.distanceToTop() : Number.MAX_VALUE : t => t.placement ? t.placement.distanceToCenter() : Number.MAX_VALUE)
                },
                o = t => {
                    const e = t.filter((t => t.playbackPriority === a.a.DOCKABLE));
                    return e.length ? e[0] : r(t)
                }
        },
        Xq8B: function(t, e, i) {
            "use strict";
            i("1t7P"), i("jQ/y"), i("aLgo"), i("hBpG"), i("jwue"), i("hCOa"), i("vrRf"), i("plBw"), i("lTEL"), i("z84I"), i("KOtZ"), i("M+/F"), i("+/OB"), i("cARO"), i("5878"), i("ho0z"), i("6U7i"), i("ssvU"), i("kH1Z"), i("IAdD"), i("+KXO"), i("7x/C"), i("JtPf"), i("KqXw"), i("DZ+c"), i("87if"), i("+oxZ"), i("kYxP"), i("sVFb");
            var n, a, r, o, s = i("1Pcy"),
                c = i.n(s),
                u = i("W/Kd"),
                l = i.n(u),
                h = i("KEM+"),
                d = i.n(h),
                f = i("r2q8"),
                p = i.n(f);

            function v(t, e) {
                var i;
                if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                    if (Array.isArray(t) || (i = function(t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return y(t, e);
                            var i = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === i && t.constructor && (i = t.constructor.name);
                            if ("Map" === i || "Set" === i) return Array.from(t);
                            if ("Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)) return y(t, e)
                        }(t)) || e && t && "number" == typeof t.length) {
                        i && (t = i);
                        var n = 0;
                        return function() {
                            return n >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[n++]
                            }
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                return (i = t[Symbol.iterator]()).next.bind(i)
            }

            function y(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
                return n
            }
            var m = "AD_SKIP_EVENT",
                _ = "CAPTIONS_TOGGLED_EVENT",
                g = "CONFIG_LOADED_EVENT",
                b = "CTA_CLICK_EVENT",
                T = "CTA_IMPRESSION_EVENT",
                E = "ERROR_EVENT",
                P = "FULL_SCREEN_EVENT",
                w = "GROUPM_VIEW_EVENT",
                M = "HEARTBEAT_EVENT",
                S = "HEARTBEAT_START_EVENT",
                k = "INITIAL_CTA_IMPRESSION_EVENT",
                I = "INITIAL_INTEND_TO_PLAY_EVENT",
                A = "INTEND_TO_PLAY_EVENT",
                C = "LOOP_EVENT",
                O = "MRC_AUDIBLE_VIEW_EVENT",
                L = "MRC_VIEW_EVENT",
                V = "MUTE_EVENT",
                N = "ONE_SEC_VIEW_EVENT",
                x = "SIX_SEC_VIEW_EVENT",
                D = "SHORT_FORM_COMPLETE_EVENT",
                F = "PAUSE_EVENT",
                W = "PLAY_EVENT",
                R = "PLAY_FROM_TAP_EVENT",
                B = "PLAYBACK_25_EVENT",
                H = "PLAYBACK_50_EVENT",
                U = "PLAYBACK_75_EVENT",
                j = "PLAYBACK_95_EVENT",
                K = "PLAYBACK_COMPLETE_EVENT",
                G = "PLAYBACK_ERROR_EVENT",
                Y = "PLAYBACK_LAPSE_EVENT",
                z = "PLAYBACK_START_EVENT",
                J = "REPLAY_EVENT",
                X = "REWIND_EVENT",
                q = "SHRINK_EVENT",
                Q = "STARTUP_ERROR_EVENT",
                Z = "TEARDOWN_EVENT",
                $ = "TICK_EVENT",
                tt = "TRACK_FINISHED_EVENT",
                et = "UNMUTE_EVENT",
                it = "VIDEO_SESSION_EVENT",
                nt = "VIDEO_QUALITY_VIEW_EVENT",
                at = "VIDEO_VIEW_EVENT",
                rt = "VIEW_THRESHOLD_EVENT",
                ot = "ad",
                st = "content",
                ct = "broadcast",
                ut = "gif",
                lt = "live",
                ht = "media_entity",
                dt = "partner_video",
                ft = "periscope",
                pt = "vine",
                vt = "vmap",
                yt = {
                    event: "url",
                    go_to: "url",
                    image: "url",
                    url: "url",
                    shop: "url",
                    see_more: "url",
                    visit: "url",
                    visit_site: "url",
                    watch: "url",
                    watch_now: "watch"
                };

            function mt(t) {
                return gt(t, t.source.trackId)
            }

            function _t(t) {
                return gt(t, t.currentTrackId)
            }

            function gt(t, e) {
                return t.tracks.find((function(t) {
                    return e === t.id
                }))
            }

            function bt(t) {
                return t.tracks.find((function(t) {
                    return ot === t.displayType
                }))
            }

            function Tt(t) {
                return Boolean(t) && t.isPlaying && !t.isScrubbing && !t.isMuted
            }
            var Et = ((n = {})[at] = "creativeView", n[B] = "firstQuartile", n[H] = "midpoint", n[U] = "thirdQuartile", n[K] = "complete", n[W] = "resume", n[F] = "pause", n[X] = "rewind", n[E] = "adError", n),
                Pt = function() {
                    function t(t) {
                        var e = this;
                        Object.keys(Et).forEach((function(i) {
                            t.on(i, (function(t) {
                                e.fireBeacon(Et[i], t)
                            }))
                        })), t.on(z, this.onPlaybackStart.bind(this))
                    }
                    var e = t.prototype;
                    return e.onPlaybackStart = function(t) {
                        this.fireBeacon("start", t), this.fireBeacon("adImpression", t)
                    }, e.fireBeacon = function(t, e) {
                        var i = _t(e);
                        if (void 0 !== i && void 0 !== i.beacons && void 0 !== i.beacons[t])
                            for (var n, a = v(i.beacons[t]); !(n = a()).done;) {
                                var r = n.value;
                                (new window.Image).src = r
                            }
                    }, t
                }(),
                wt = function() {
                    function t(t) {
                        this.analytics = t, this.analytics.on($, this.onTickEvent.bind(this))
                    }
                    return t.prototype.onTickEvent = function(t) {
                        var e = t.areCaptionsShown,
                            i = this.currentCaptionsState;
                        i !== e && ((!1 === i && !0 === e || !0 === i && !1 === e) && this.analytics.emit(_, t, e), this.currentCaptionsState = e)
                    }, t
                }(),
                Mt = function() {
                    function t(t) {
                        this.analytics = t, this.hasFiredOnTrackMap = {}, this.analytics.on(T, this.onCtaImpressionEvent.bind(this))
                    }
                    return t.prototype.onCtaImpressionEvent = function(t) {
                        var e = t.currentTrackId;
                        this.hasFiredOnTrackMap[e] || (this.hasFiredOnTrackMap[e] = !0, this.analytics.emit(k, t))
                    }, t
                }(),
                St = function() {
                    function t(t) {
                        this.analytics = t, this.hasStarted = !1, this.hasFired = !1, this.analytics.on(z, this.onPlaybackStartEvent.bind(this)), this.analytics.on(A, this.onShowEvent.bind(this)), this.analytics.on(E, this.onErrorEvent.bind(this))
                    }
                    var e = t.prototype;
                    return e.onPlaybackStartEvent = function() {
                        this.hasStarted = !0
                    }, e.onShowEvent = function() {
                        this.intentToPlayTime = new Date
                    }, e.onErrorEvent = function(t, e) {
                        var i = this.constructClientMediaEventError(t, e);
                        if (!this.hasStarted && !this.hasFired) {
                            var n, a = void 0 !== this.intentToPlayTime ? new Date - this.intentToPlayTime : void 0;
                            i && (n = {
                                latency_millis: a,
                                error: i
                            }), this.analytics.emit(Q, t, Object.assign({
                                latency: a
                            }, e), n), this.hasFired = !0
                        }
                        this.analytics.emit(G, t, e, i)
                    }, e.constructClientMediaEventError = function(t, e) {
                        var i = e && e.media_details && e.media_details.media_error || {};
                        return {
                            is_fatal: i.is_fatal,
                            category: i.category,
                            message: i.message,
                            retry_count: i.retry_count
                        }
                    }, t
                }(),
                kt = function() {
                    function t(t) {
                        this.bufferingCount = 0, this.bufferingDurationMs = 0, this.bufferingBeginTimeMs = void 0, t.on($, this.onTickEvent.bind(this)), t.on(S, this.onHeartbeatStart.bind(this)), t.on(M, this.onHeartbeat.bind(this))
                    }
                    var e = t.prototype;
                    return e.onHeartbeat = function(t) {
                        this.reset(t)
                    }, e.onHeartbeatStart = function(t) {
                        this.reset(t)
                    }, e.onTickEvent = function(t) {
                        var e = _t(t);
                        void 0 !== e && (e.isBuffering && null == this.bufferingBeginTimeMs ? (this.bufferingBeginTimeMs = Date.now(), this.bufferingCount++) : e.isBuffering || null == this.bufferingBeginTimeMs || (this.bufferingDurationMs += Date.now() - this.bufferingBeginTimeMs, this.bufferingBeginTimeMs = void 0))
                    }, e.getBufferTime = function(t) {
                        var e = _t(t);
                        if (void 0 !== e) {
                            var i = this.bufferingDurationMs;
                            return e.isBuffering && null != this.bufferingBeginTimeMs && (i += Date.now() - this.bufferingBeginTimeMs), i
                        }
                    }, e.reset = function(t) {
                        var e = _t(t);
                        void 0 !== e && (this.bufferingBeginTimeMs = e.isBuffering ? Date.now() : void 0, this.bufferingCount = e.isBuffering ? 1 : 0, this.bufferingDurationMs = 0)
                    }, t
                }();

            function It(t) {
                return "number" != typeof t || Number.isNaN(t) || t === 1 / 0 || t === -1 / 0 ? "string" == typeof t ? t : void 0 : t.toString()
            }
            var At = function() {
                function t(t) {
                    this.analytics = t, this.bufferingDurationListener = new kt(t), this.lastKnownDataUsageBytes = 0, this.audibleDuration = 0, this.bitrateHistory = [], this.latencyHistory = [], this.previousTickTimestamp, this.analytics.on($, this.onTickEvent.bind(this)), this.analytics.on(W, this.onPlayEvent.bind(this)), this.analytics.on(z, this.onPlaybackStartEvent.bind(this)), this.analytics.on(tt, this.onTrackFinishedEvent.bind(this)), this.analytics.on(E, this.onErrorEvent.bind(this)), this.analytics.on(F, this.onPauseEvent.bind(this)), this.analytics.on(Z, this.onTeardownEvent.bind(this)), this.analytics.on(C, this.onLoopEvent.bind(this)), this.analytics.on(m, this.onAdSkip.bind(this))
                }
                var e = t.prototype;
                return e.onTickEvent = function(t) {
                    var e = _t(t);
                    if (void 0 !== e) {
                        if (this.updateTimesOnTick(e, t), this.updatePerfMetrics(e), t.isScrubbing ? this.stopPolling() : t.isPlaying && this.startPolling(t), void 0 !== this.lastKnownPlayerState) {
                            var i = this.lastKnownPlayerState.percentVisible,
                                n = t.percentVisible;
                            (i > 0 && 0 === n || 0 === i && n > 0) && (this.stopPolling(), this.startPolling(t))
                        }
                        this.lastKnownPlayerState = t, this.previousTickTimestamp = Date.now()
                    }
                }, e.onPlayEvent = function(t) {
                    this.hasPlaybackStarted && this.startPolling(t), this.lastKnownPlayerState = t
                }, e.onPlaybackStartEvent = function(t) {
                    this.startPolling(t), this.lastKnownPlayerState = t, this.hasPlaybackStarted = !0
                }, e.onTrackFinishedEvent = function(t) {
                    this.hasPlaybackStarted = !1, void 0 !== _t(t) && (this.stopPolling(), this.lastKnownPlayerState = t)
                }, e.onErrorEvent = function(t, e) {
                    e && e.media_details && e.media_details.media_error && e.media_details.media_error.is_fatal && (this.stopPolling(), this.lastKnownPlayerState = t)
                }, e.onPauseEvent = function(t, e) {
                    this.stopPolling(), this.lastKnownPlayerState = t
                }, e.onTeardownEvent = function(t, e) {
                    this.stopPolling(!0), this.lastKnownPlayerState = t
                }, e.onLoopEvent = function(t) {
                    this.startPolling(t)
                }, e.onAdSkip = function() {
                    this.stopPolling()
                }, e.updateTimesOnTick = function(t, e) {
                    var i;
                    void 0 !== (i = t.contentType === ct || t.contentType === lt || t.contentType === ft ? t.absoluteTimeMs : t.currentTimeMs) && (Tt(e) && void 0 !== this.lastTimeMs && (this.audibleDuration += i - this.lastTimeMs), this.lastTimeMs = i, void 0 === this.startTimeMs && (this.startTimeMs = i))
                }, e.startPolling = function(t) {
                    var e = mt(t);
                    void 0 === this.intervalId && void 0 !== e && e.contentType !== pt && (this.analytics.emit(S, t), this.onHeartbeatStart(t))
                }, e.stopPolling = function(t) {
                    (this.intervalId || t) && (this.onHeartbeat(), this.lastTimeMs = void 0, this.startTimeMs = void 0), void 0 !== this.intervalId && (clearInterval(this.intervalId), this.intervalId = void 0)
                }, e.onHeartbeatStart = function(t) {
                    this.intervalId = setInterval(this.onHeartbeat.bind(this), t.heartbeatIntervalMs || 5e3), this.lastTimeMs = void 0, this.startTimeMs = void 0, this.bitrateHistory = [], this.latencyHistory = []
                }, e.updatePerfMetrics = function(t) {
                    if (this.previousTickTimestamp) {
                        var e = Date.now() - this.previousTickTimestamp;
                        t.currentBitrate && this.bitrateHistory.push({
                            value: t.currentBitrate,
                            weight: e
                        }), t.liveLatencyMs && this.latencyHistory.push({
                            value: t.liveLatencyMs,
                            weight: e
                        })
                    }
                }, e.onHeartbeat = function() {
                    var t = this.lastKnownPlayerState;
                    if (t) {
                        var e = _t(t),
                            i = this.getProgramDateTimeMs();
                        if (void 0 !== i && void 0 !== e) {
                            var n = e.currentBitrate ? {
                                    sampled_bitrate: e.currentBitrate
                                } : {},
                                a = 0;
                            t.dataUsageBytes && (a = t.dataUsageBytes - this.lastKnownDataUsageBytes, this.lastKnownDataUsageBytes = t.dataUsageBytes);
                            var r, o, s = {
                                    data_usage_bytes: a
                                },
                                c = this.bufferingDurationListener.bufferingCount,
                                u = this.bufferingDurationListener.getBufferTime(t),
                                l = Math.floor(100 * t.percentVisible),
                                h = Object.assign({
                                    buffering_duration_millis: u,
                                    video_visibility: l
                                }, {
                                    start_program_date_time_millis: i.start_program_date_time_millis,
                                    end_program_date_time_millis: i.end_program_date_time_millis
                                }, n, s),
                                d = {
                                    buffering_duration_millis: It(u),
                                    buffering_count: c,
                                    percent_in_view: l,
                                    sampled_bits_per_second: e.currentBitrate,
                                    data_usage_bytes: It(s.data_usage_bytes),
                                    start_program_date_time_millis: It(i.start_program_date_time_millis),
                                    end_program_date_time_millis: It(i.end_program_date_time_millis),
                                    audible_duration_millis: It(i.audible_duration_millis),
                                    bandwidth_estimate_bps: It(t.bandwidthEstimateBps),
                                    bitrate_metrics: (r = this.bitrateHistory, o = Ot(r), o && {
                                        min_bps: Math.round(o.min),
                                        max_bps: Math.round(o.max),
                                        avg_bps: Math.round(o.avg)
                                    }),
                                    live_or_non_live_heartbeat_metrics: Ct(e.isLive, this.latencyHistory)
                                };
                            this.analytics.emit(M, t, h, d)
                        }
                    }
                }, e.getProgramDateTimeMs = function() {
                    if (void 0 !== this.startTimeMs && void 0 !== this.lastTimeMs) {
                        var t = this.startTimeMs,
                            e = this.lastTimeMs,
                            i = this.audibleDuration;
                        return this.startTimeMs = this.lastTimeMs, this.audibleDuration = 0, {
                            start_program_date_time_millis: Math.round(t),
                            end_program_date_time_millis: Math.round(e),
                            audible_duration_millis: Math.round(i)
                        }
                    }
                    return {}
                }, t
            }();

            function Ct(t, e) {
                var i = Ot(e);
                return t ? {
                    live_heartbeat_metrics: {
                        latency_metrics: i && {
                            min_ms: Math.round(i.min),
                            max_ms: Math.round(i.max),
                            avg_ms: Math.round(i.avg)
                        }
                    }
                } : {
                    non_live_heartbeat_metrics: {}
                }
            }

            function Ot(t) {
                if (t && t.length) {
                    var e = function(t) {
                        if (!t || 0 === t.length) return [Math.min(), Math.max()];
                        for (var e, i = 1 / 0, n = -1 / 0, a = v(t); !(e = a()).done;) {
                            var r = e.value;
                            i = Math.min(i, r), n = Math.max(n, r)
                        }
                        return [i, n]
                    }(t.map((function(t) {
                        return t.value
                    })));
                    return {
                        min: e[0],
                        max: e[1],
                        avg: function(t) {
                            var e = t.reduce((function(t, e) {
                                return t + e.weight
                            }), 0);
                            return t.reduce((function(t, e) {
                                return t + e.value * e.weight
                            }), 0) / e
                        }(t)
                    }
                }
            }
            var Lt = function() {
                    function t(t) {
                        this.analytics = t, this.hasFiredOnTrackMap = {}, this.analytics.on(A, this.onIntendToPlayEvent.bind(this)), this.analytics.on(J, this.onIntendToPlayEvent.bind(this)), this.analytics.on(tt, this.onTrackFinishedEvent.bind(this))
                    }
                    var e = t.prototype;
                    return e.onIntendToPlayEvent = function(t) {
                        this.hasFiredOnTrackMap[t.currentTrackId] || (this.hasFiredOnTrackMap[t.currentTrackId] = !0, this.analytics.emit(I, t))
                    }, e.onTrackFinishedEvent = function(t) {
                        var e = _t(t);
                        e && (e.shouldLoop || (this.hasFiredOnTrackMap[t.currentTrackId] = !1))
                    }, t
                }(),
                Vt = function() {
                    function t(t) {
                        this.analytics = t, this.analytics.on(tt, this.onTrackFinishedEvent.bind(this))
                    }
                    return t.prototype.onTrackFinishedEvent = function(t) {
                        var e = _t(t);
                        void 0 !== e && e.shouldLoop && this.analytics.emit(C, t)
                    }, t
                }(),
                Nt = {
                    home: "HomeTimeline",
                    list: "Lists",
                    live_broadcast: "BroadcastPage",
                    live_event_timeline: "EventPage",
                    me: "UserTimeline",
                    moments: "Moments",
                    permalink: "TweetCard",
                    profile: "UserTimeline",
                    search: "Search"
                },
                xt = function(t) {
                    return "/api/v2/" + t
                };

            function Dt(t, e, i, n) {
                return {
                    start: {
                        method: t,
                        path: xt(e)
                    },
                    ping: {
                        method: t,
                        path: xt(i)
                    },
                    stop: {
                        method: t,
                        path: xt(n)
                    }
                }
            }
            var Ft, Wt = {
                    public: {
                        live: Dt("GET", "startPublic", "pingPublic", "stopPublic"),
                        replay: Dt("GET", "replayViewedPublic", "pingReplayViewedPublic", "endReplayViewedPublic")
                    },
                    auth: {
                        live: Dt("POST", "startWatching", "pingWatching", "stopWatching"),
                        replay: Dt("POST", "replayViewed", "pingReplayViewed", "endReplayViewed")
                    }
                },
                Rt = function() {
                    function t(t, e) {
                        if (this.httpClient = t, this.authToken = null == e ? void 0 : e.periscopeAuthToken, this.lifecycles = this.authToken ? Wt.auth : Wt.public, (null == e ? void 0 : e.scribeContext) && (null == e ? void 0 : e.periscopeComponent)) {
                            var i = e.scribeContext,
                                n = e.periscopeComponent;
                            this.pageContext = this.getPageContext(i), this.componentContext = n
                        }
                    }
                    var e = t.prototype;
                    return e.getPageContext = function(t) {
                        var e = t.page;
                        return "permalink_overlay" === t.section ? "TweetCard" : Nt[e] || ""
                    }, e.call = function(t, e) {
                        var i = Date.now(),
                            n = {
                                "X-Idempotence": Ft = i <= Ft ? Ft + 1 : i,
                                "X-Attempt": 1,
                                "X-Periscope-User-Agent": "Twitter/video-analytics",
                                "content-type": "application/json"
                            },
                            a = Object.assign({}, e);
                        this.authToken && (a.cookie = this.authToken);
                        var r = t.method,
                            o = t.path,
                            s = {};
                        return "POST" === r ? s.data = a : s.params = a, this.httpClient.dispatch(Object.assign({
                            headers: n,
                            host: "https://proxsee.pscp.tv",
                            method: r,
                            path: o
                        }, s))
                    }, e.videoStartWatching = function(t, e, i) {
                        var n = this;
                        return new Promise((function(a, r) {
                            ("string" != typeof t || t.length < 1) && r(new Error("Cannot videoStartWatching. lifecycleToken not valid, lifecycleToken=" + t));
                            var o = e ? n.lifecycles.replay.start : n.lifecycles.live.start,
                                s = {
                                    life_cycle_token: t,
                                    auto_play: !!i
                                };
                            n.pageContext && (s.page = n.pageContext), n.componentContext && (s.component = n.componentContext), n.call(o, s).then((function(t) {
                                var e = JSON.parse(t.body).session;
                                e ? a(e) : r("No valid Session")
                            }), r)
                        }))
                    }, e.videoPingWatching = function(t, e) {
                        var i = this;
                        return new Promise((function(n, a) {
                            ("string" != typeof t || t.length < 1) && a(new Error("Cannot videoPingWatching. session not valid, session=" + t));
                            var r = e ? i.lifecycles.replay.ping : i.lifecycles.live.ping;
                            i.call(r, {
                                session: t
                            }).then((function(t) {
                                JSON.parse(t.body).success ? n() : a("Ping request failed")
                            }), a)
                        }))
                    }, e.videoStopWatching = function(t, e) {
                        var i = this;
                        return new Promise((function(n, a) {
                            ("string" != typeof t || t.length < 1) && a(new Error("Cannot videoStopWatching. session not valid, session=" + t));
                            var r = e ? i.lifecycles.replay.stop : i.lifecycles.live.stop;
                            i.call(r, {
                                session: t
                            }).then((function(t) {
                                JSON.parse(t.body).success ? n() : a("StopWatching request failed")
                            }), a)
                        }))
                    }, t
                }(),
                Bt = 3e3;
            var Ht = function() {
                    function t(t) {
                        this.api = t, this.handleStartWatching = this.handleStartWatching.bind(this), this.updateSession = this.updateSession.bind(this), this.startPingWatching = this.startPingWatching.bind(this), this.isVideoPreview = !1, this.isReplay = !0
                    }
                    var e = t.prototype;
                    return e.updateSession = function(t) {
                        this.session = t
                    }, e.setStartWatchingTimer = function() {
                        this.startWatchingTimer = setTimeout(this.handleStartWatching, Bt)
                    }, e.clearStartWatchingTimer = function() {
                        this.startWatchingTimer && clearTimeout(this.startWatchingTimer)
                    }, e.handleStartWatching = function() {
                        if (!this.isWatching) {
                            this.stopPingWatching();
                            var t = this.api.videoStartWatching(this.lifecycleToken, this.isReplay, this.isVideoPreview).then(this.updateSession).then(this.startPingWatching);
                            return this.isWatching = !0, t
                        }
                    }, e.startPingWatching = function() {
                        var t = this;
                        this.stopPingWatching(), this.pingWatchingTimer = setInterval((function() {
                            t.isWatching ? t.api.videoPingWatching(t.session, t.isReplay) : t.stopPingWatching()
                        }), 3e4)
                    }, e.stopPingWatching = function() {
                        clearInterval(this.pingWatchingTimer)
                    }, e.updateLifecycleToken = function(t) {
                        void 0 !== t && t !== this.lifecycleToken && (this.lifecycleToken = t, this.isWatching && (this.stopWatching(), this.handleStartWatching()))
                    }, e.updateIsReplay = function(t) {
                        void 0 !== t && t !== this.isReplay && (this.isReplay = t)
                    }, e.startWatching = function() {
                        return this.isVideoPreview = !1, this.handleStartWatching()
                    }, e.startWatchingPreview = function() {
                        this.isVideoPreview = !0, this.clearStartWatchingTimer(), this.setStartWatchingTimer()
                    }, e.stopWatching = function() {
                        this.isWatching && (this.stopPingWatching(), this.session && this.api.videoStopWatching(this.session, this.isReplay), this.isWatching = !1)
                    }, e.destroy = function() {
                        this.stopWatching(), this.clearStartWatchingTimer(), this.isVideoPreview = void 0, this.lifecycleToken = void 0, this.session = void 0, this.isReplay = void 0, this.isWatching = void 0, this.pingWatchingTimer = void 0
                    }, t
                }(),
                Ut = [g, W, F, tt, Z],
                jt = function() {
                    function t(t, e) {
                        var i = this;
                        this.analytics = t, this.lifecycleController = e, Ut.map((function(t) {
                            return i.analytics.on(t, i.possiblyHandleEvent.bind(i, t))
                        }))
                    }
                    var e = t.prototype;
                    return e.possiblyHandleEvent = function(t, e) {
                        if (this.shouldSendPeriscopeAnalytics(e)) {
                            var i = _t(e);
                            switch (t) {
                                case g:
                                    this.updateLifecycleToken(e), this.updateReplayState(!i.isLive);
                                    break;
                                case W:
                                    this.handleStartWatching(e);
                                    break;
                                case F:
                                    this.handleStopWatching(e);
                                    break;
                                case tt:
                                    this.handleStopWatching(e), this.updateReplayState(!0);
                                    break;
                                case Z:
                                    this.teardownPeriscopeLifecycle()
                            }
                        }
                    }, e.shouldSendPeriscopeAnalytics = function(t) {
                        var e = _t(t);
                        return void 0 !== e && (e.contentType === ft || e.contentType === ct)
                    }, e.getLifecycleToken = function(t) {
                        return _t(t).lifecycleToken
                    }, e.updateLifecycleToken = function(t) {
                        var e = this.getLifecycleToken(t);
                        this.lifecycleController.updateLifecycleToken(e)
                    }, e.updateReplayState = function(t) {
                        this.lifecycleController.updateIsReplay(t)
                    }, e.handleStartWatching = function(t) {
                        this.getLifecycleToken(t) && (t.isPreview ? this.lifecycleController.startWatchingPreview() : this.lifecycleController.startWatching())
                    }, e.handleStopWatching = function(t) {
                        this.getLifecycleToken(t) && this.lifecycleController.stopWatching()
                    }, e.teardownPeriscopeLifecycle = function() {
                        this.lifecycleController.destroy(), this.lifecycleController = null
                    }, t
                }(),
                Kt = function() {
                    function t(t) {
                        this.analytics = t, this.lapseMap = {}, this.analytics.on($, this.onTickEvent.bind(this)), this.analytics.on(tt, this.onTrackFinishedEvent.bind(this)), this.analytics.on(m, this.onAdSkipEvent.bind(this)), this.analytics.on(at, this.onVideoViewEvent.bind(this))
                    }
                    var e = t.prototype;
                    return e.onTrackFinishedEvent = function(t) {
                        var e = _t(t);
                        if (void 0 !== e) {
                            var i = this.lapseMap[e.id];
                            if (void 0 !== i) {
                                i.timePlayedToMs = 0;
                                var n = mt(t);
                                n && n.contentType !== ut && !e.shouldLoop && (this.emit(i, t), i.viewFired = !1)
                            }
                        }
                    }, e.onAdSkipEvent = function(t) {
                        this.onTickEvent(t);
                        var e = _t(t);
                        if (void 0 !== e) {
                            var i = this.lapseMap[e.id];
                            this.emit(i, t)
                        }
                    }, e.onVideoViewEvent = function(t) {
                        var e = _t(t);
                        if (void 0 !== e) {
                            var i = this.lapseMap[e.id];
                            void 0 === i && (i = this.initializeLapseMapForTrack(e), this.lapseMap[e.id] = i), i.viewFired = !0
                        }
                    }, e.onTickEvent = function(t) {
                        var e = _t(t);
                        if (void 0 !== e) {
                            var i = this.lapseMap[e.id];
                            void 0 === i && (i = this.initializeLapseMapForTrack(e), this.lapseMap[e.id] = i), t.isScrubbing ? i.timePlayedToMs = e.currentTimeMs : (this.updateTimingData(e, i), this.checkPlaybackLapse(i, t))
                        }
                    }, e.initializeLapseMapForTrack = function(t) {
                        return {
                            timePlayedMs: 0,
                            timePlayedToMs: t.currentTimeMs,
                            viewFired: !1
                        }
                    }, e.updateTimingData = function(t, e) {
                        var i = t.currentTimeMs - e.timePlayedToMs;
                        e.timePlayedToMs = t.currentTimeMs, e.timePlayedMs += i
                    }, e.checkPlaybackLapse = function(t, e) {
                        t.timePlayedMs > 1e4 && this.emit(t, e)
                    }, e.emit = function(t, e) {
                        var i = mt(e),
                            n = t.viewFired,
                            a = t.timePlayedMs;
                        n && a > 0 && i && i.contentType !== lt && (this.analytics.emit(Y, e, {
                            playback_lapse_ms: Math.round(a)
                        }), t.timePlayedMs = 0)
                    }, t
                }(),
                Gt = function(t) {
                    return e = "AD_CTA_TO_ENGAGEMENT_MAPPING_ERROR", (i = new Error("Unable to map CTA type to engagement type for: " + t)).name = e, i;
                    var e, i
                },
                Yt = function() {
                    function t() {}
                    return t.set = function(e) {
                        t.report = e
                    }, t
                }();
            d()(Yt, "report", (function(t) {}));
            var zt = ((a = {})[z] = "playback_start", a[B] = "playback_25", a[H] = "playback_50", a[U] = "playback_75", a[j] = "playback_95", a[K] = "playback_complete", a[L] = "mrc_view", a[w] = "groupm_view", a[N] = "1sec_view", a[x] = "6sec_view", a[D] = "short_form_complete", a[at] = "view", a[R] = "play_from_tap", a[rt] = "view_threshold", a),
                Jt = function() {
                    function t(t, e) {
                        var i = this;
                        this.promotedLogHandler = e, Object.keys(zt).forEach((function(e) {
                            t.on(e, (function(t, n) {
                                var a = _t(t);
                                void 0 !== a && i.log(i.buildEventName(e, a), t, n)
                            }))
                        })), t.on(z, this.logImpression.bind(this)), t.on(b, this.onCtaClickEvent.bind(this)), t.on(it, this.onVideoSessionEvent.bind(this))
                    }
                    var e = t.prototype;
                    return e.buildEventName = function(t, e) {
                        var i = zt[t];
                        return "video_" + e.displayType + "_" + i
                    }, e.log = function(t, e, i, n) {
                        void 0 === i && (i = {});
                        var a = _t(e),
                            r = this.getPromotedEventData(e, a);
                        if (void 0 !== r.impression_id) {
                            var o = this.getAmplifyDetailsData(e, a, i),
                                s = JSON.stringify({
                                    amplify_details: o
                                }),
                                c = n && JSON.stringify(n),
                                u = Object.assign(r, o, {
                                    event: t,
                                    card_event: s,
                                    engagement_metadata: c
                                });
                            this.promotedLogHandler.log(u)
                        }
                    }, e.logImpression = function(t) {
                        var e = _t(t);
                        this.isPromotedTrack(t, e) && this.log("impression", t)
                    }, e.onCtaClickEvent = function(t) {
                        var e = _t(t),
                            i = null == e ? void 0 : e.cta,
                            n = yt[null == i ? void 0 : i.type];
                        if (!n) return Yt.report(Gt(null == i ? void 0 : i.type));
                        e.displayType === ot ? this.log("video_" + e.displayType + "_cta_" + n + "_click", t) : this.log("video_cta_" + n + "_click", t)
                    }, e.onVideoSessionEvent = function(t, e) {
                        void 0 !== e && this.log("video_session", t, {}, e)
                    }, e.isPromotedTrack = function(t, e) {
                        return e && e.impressionId && e.disclosureType
                    }, e.getPromotedEventData = function(t, e) {
                        var i = e.disclosureType || t.disclosureType;
                        return {
                            impression_id: e.impressionId || t.impressionId,
                            earned: "earned" === i
                        }
                    }, e.getAmplifyDetailsData = function(t, e, i) {
                        var n = mt(t),
                            a = bt(t) || {};
                        return Object.assign({
                            content_id: n.contentId,
                            dynamic_preroll_type: a.dynamicPrerollType,
                            preroll_uuid: a.contentId,
                            preroll_owner_id: a.publisherId,
                            video_uuid: e.contentId,
                            video_type: e.displayType === st ? "video" : "ad",
                            video_is_muted: t.isMuted,
                            video_visibility: Math.floor(100 * t.percentVisible)
                        }, i)
                    }, t
                }(),
                Xt = function() {
                    function t(t) {
                        this.analytics = t, this.analytics.on($, this.onTickEvent.bind(this))
                    }
                    return t.prototype.onTickEvent = function(t) {
                        var e = _t(t);
                        void 0 !== e && (t.isScrubbing && void 0 === this.scrubbingStartTime ? this.scrubbingStartTime = e.currentTimeMs : t.isScrubbing || void 0 === this.scrubbingStartTime || (e.currentTimeMs < this.scrubbingStartTime && this.analytics.emit(X, t), this.scrubbingStartTime = void 0))
                    }, t
                }(),
                qt = ((r = {})[at] = "video_view", r[R] = "play_from_tap", r[rt] = "view_threshold", r[O] = "video_mrc_audible_view", r[L] = "video_mrc_view", r[x] = "video_6sec_view", r[D] = "video_short_form_complete", r[z] = "playback_start", r[B] = "playback_25", r[H] = "playback_50", r[U] = "playback_75", r[j] = "playback_95", r[K] = "playback_complete", r[I] = "intent_to_play", r[W] = "play", r[F] = "pause", r[J] = "replay", r[C] = "loop", r[V] = "mute", r[et] = "unmute", r[P] = "full_screen", r[q] = "shrink", r[Y] = "playback_lapse", r[G] = "error", r[Q] = "playback_startup_error", r[nt] = "video_quality_view", r[m] = "video_ad_skip", r),
                Qt = ["playback_lapse", "video_1sec_view", "shrink", "full_screen"].reduce((function(t, e) {
                    return t[e] = !0, t
                }), {}),
                Zt = "tweet",
                $t = "client_event",
                te = "live_video_heartbeat_event",
                ee = 7,
                ie = 13,
                ne = 16,
                ae = 26,
                re = 28,
                oe = 1,
                se = 2,
                ce = 1,
                ue = 2,
                le = ["appplayer", "poll2choice_video", "poll3choice_video", "poll4choice_video", "promo_video_convo", "promo_video_website", "video_direct_message"],
                he = /^([0-9]{1,2})_([0-9]+)$/,
                de = function() {
                    function t(t, e, i) {
                        var n = this;
                        this.scribeHandler = e, this.context = i || {}, this.isAdFormatsCard = -1 !== le.indexOf(this.context.cardType), Object.keys(qt).forEach((function(e) {
                            t.on(e, (function(t, i, a) {
                                n.scribe(qt[e], t, i, a)
                            }))
                        })), t.on(b, this.onCtaClickEvent.bind(this)), t.on(k, this.onCtaImpressionEvent.bind(this)), t.on(M, this.onHeartbeatEvent.bind(this)), t.on(_, this.onCaptionsToggledEvent.bind(this))
                    }
                    var e = t.prototype;
                    return e.onCaptionsToggledEvent = function(t, e) {
                        var i = e ? "enable" : "disable",
                            n = {
                                page: "settings",
                                section: "captions",
                                element: "display_audio_transcriptions",
                                action: i
                            };
                        this.scribe(i, t, {}, {}, $t, n)
                    }, e.onCtaClickEvent = function(t) {
                        var e = _t(t).cta,
                            i = yt[null == e ? void 0 : e.type];
                        if (!i) return Yt.report(Gt(null == e ? void 0 : e.type));
                        this.scribe("cta_" + i + "_click", t)
                    }, e.onCtaImpressionEvent = function(t) {
                        var e = _t(t).cta,
                            i = yt[null == e ? void 0 : e.type];
                        if (!i) return Yt.report(Gt(null == e ? void 0 : e.type));
                        this.scribe("cta_" + i + "_impression", t)
                    }, e.onHeartbeatEvent = function(t, e, i) {
                        var n = mt(t);
                        if (void 0 !== n) {
                            var a;
                            switch (n.contentType) {
                                case lt:
                                case ct:
                                    a = te;
                                    break;
                                default:
                                    a = $t
                            }
                            this.scribe("heartbeat", t, e, i, a)
                        }
                    }, e.scribe = function(t, e, i, n, a, r) {
                        void 0 === i && (i = {}), void 0 === n && (n = {}), void 0 === a && (a = $t), void 0 === r && (r = null);
                        var o, s, c = mt(e) || {},
                            u = _t(e) || {},
                            l = bt(e) || {},
                            h = e.session || {},
                            d = (e.features || {}).isLiveTimecodeEnabled && u.requestedTimecode > 0 ? 1e3 * u.requestedTimecode : void 0;
                        this.isActionSupportedInClientMediaEvent(t) && (o = {
                            media_client_event_type: (s = {}, s[t] = n, s),
                            session_state: {
                                session_id: h.id,
                                content_video_identifier: pe(this.getContentIdentifier(c), this.context.scribeContext),
                                video_ads_passthrough_data: e.videoAnalyticsScribePassthrough,
                                live_event_identifier: this.getLiveEventIdentifier(e, c.contentType),
                                tweet_id: this.getTweetId(e.source, c.contentType)
                            },
                            playing_media_state: {
                                video_type: u.displayType === st ? se : oe,
                                media_asset_url: this.getVariantUrl(u),
                                media_timecode_millis: It(d),
                                media_metadata: {
                                    broadcast_id: u.broadcastId,
                                    twitter_publisher_id: It(u.publisherId),
                                    publisher_identifier: ve(u.publisherId, u.periscopePublisherId, this.context.scribeContext)
                                },
                                broadcast_media_state: ye(u.contentType, u.isLive)
                            },
                            player_state: {
                                is_muted: e.isMuted
                            }
                        });
                        var f = Object.assign({}, this.getBaseItem(e.source, e.eventId), {
                                media_asset_url: this.getVariantUrl(u),
                                video_uuid: u.contentId,
                                video_owner_id: u.publisherId,
                                video_type: u.displayType === st ? "video" : "ad",
                                promoted_id: u.impressionId || e.impressionId,
                                content_id: c.contentId,
                                dynamic_preroll_type: l.dynamicPrerollType,
                                preroll_uuid: l.contentId,
                                preroll_owner_id: l.publisherId,
                                publisher_id: c.publisherId,
                                media_session_id: h.id,
                                video_analytics_scribe_passthrough: e.videoAnalyticsScribePassthrough,
                                client_media_event: o,
                                media_timecode_millis: d,
                                disclosure_type: u.disclosureType || e.disclosureType
                            }, i, this.getLexMetadata(e, c)),
                            p = r || {
                                element: this.getScribeElement(c),
                                action: t
                            };
                        this.scribeHandler.log({
                            namespace: p,
                            category: a,
                            data: {
                                items: [f]
                            }
                        })
                    }, e.getContentIdentifier = function(t) {
                        var e = t.contentId,
                            i = this.parseMediaKeyString(e);
                        if (i) return {
                            media_platform_identifier: i
                        };
                        switch (t.contentType) {
                            case ht:
                            case ut:
                            case lt:
                            case ct:
                                return this.getMediaPlatformIdentifierUsingDefaultCategory(t);
                            case vt:
                                return this.isAdFormatsCard ? {
                                    media_platform_identifier: {
                                        media_category: this.getMediaEntityCategoryUsingPlaybackUrl(t),
                                        media_id: e
                                    }
                                } : {
                                    amplify_card_identifier: {
                                        vmap_url: t.vmapUrl,
                                        content_id: e
                                    }
                                };
                            case pt:
                            case ft:
                            case dt:
                            default:
                                return {
                                    unknown_identifier: {
                                        content_id: e
                                    }
                                }
                        }
                    }, e.parseMediaKeyString = function(t) {
                        var e = he.exec(t) || [],
                            i = e[1],
                            n = e[2],
                            a = +i;
                        if (a && n) return {
                            media_category: a,
                            media_id: n
                        }
                    }, e.getMediaPlatformIdentifierUsingDefaultCategory = function(t) {
                        var e = this.defaultMediaCategory(t);
                        return e ? {
                            media_platform_identifier: {
                                media_category: e,
                                media_id: t.contentId
                            }
                        } : {
                            unknown_identifier: {
                                content_id: t.contentId
                            }
                        }
                    }, e.getMediaEntityCategoryUsingPlaybackUrl = function(t) {
                        var e = this.getVariantUrl(t);
                        if (e) {
                            if (-1 !== e.indexOf("amplify_video")) return ie;
                            if (-1 !== e.indexOf("ext_tw_video")) return ee
                        }
                    }, e.defaultMediaCategory = function(t) {
                        switch (t.contentType) {
                            case ut:
                                return ne;
                            case lt:
                                return ae;
                            case ct:
                                return re;
                            case ht:
                                return this.getMediaEntityCategoryUsingPlaybackUrl(t);
                            default:
                                return
                        }
                    }, e.getLiveEventIdentifier = function(t, e) {
                        return t.eventId ? {
                            lex_event_identifier: {
                                lex_event_id: t.eventId
                            }
                        } : e === lt ? {
                            legacy_live_event_identifier: {
                                legacy_live_event_id: t.source.id
                            }
                        } : void 0
                    }, e.getTweetId = function(t, e) {
                        return e === ct || e === lt ? t.tweetId : t.type === Zt ? t.id : void 0
                    }, e.getScribeElement = function(t) {
                        switch (t.contentType) {
                            case pt:
                                return "vine_player";
                            case ut:
                                return "gif_player";
                            case vt:
                                return "platform_amplify_card";
                            case lt:
                            case ct:
                                return "live_video_player";
                            case dt:
                                return "partner_video_player";
                            case ft:
                                return "periscope_player";
                            case ht:
                            default:
                                return "video_player"
                        }
                    }, e.getBaseItem = function(t, e) {
                        var i = this.context.baseScribeItem;
                        return i || (t.type === Zt ? {
                            id: t.id,
                            item_type: "0"
                        } : t.tweetId ? {
                            id: t.tweetId,
                            item_type: "0"
                        } : e ? {
                            id: e,
                            item_type: "28"
                        } : void 0)
                    }, e.getLexMetadata = function(t, e) {
                        var i = this.context.scribeContext || {},
                            n = {},
                            a = {};
                        return e.broadcastId && (n.is_replay_broadcast = !e.isLive, a.tweet_id = t.source.tweetId, "live_event_timeline" === i.page && "tweet" !== i.component ? n.host_broadcast_id = e.broadcastId : n.target_broadcast_id = e.broadcastId), t.eventId && ("live_event_timeline" === i.page && "tweet" !== i.component ? a.host_event_id = t.eventId : a.target_event_id = t.eventId), {
                            live_broadcast_details: n,
                            live_video_event_details: a
                        }
                    }, e.getVariantUrl = function(t) {
                        var e = t.variants && t.variants[t.currentVariantIndex];
                        return e && e.src
                    }, e.isActionSupportedInClientMediaEvent = function(t) {
                        return !Qt[t]
                    }, t
                }();

            function fe(t) {
                return t && "messages" === t.page
            }

            function pe(t, e) {
                return fe(e) ? {
                    scrubbed_identifier: {}
                } : t
            }

            function ve(t, e, i) {
                return fe(i) ? {
                    scrubbed_publisher_identifier: {}
                } : t && e ? {
                    twitter_periscope_publisher_identifier: {
                        twitter_id: It(t),
                        periscope_id: e
                    }
                } : t ? {
                    twitter_publisher_identifier: {
                        id: It(t)
                    }
                } : e ? {
                    periscope_publisher_identifier: {
                        id: e
                    }
                } : {
                    unknown_publisher_identifier: {}
                }
            }

            function ye(t, e) {
                if (t === ct || t === lt || t === ft) return {
                    broadcast_state: e ? ce : ue
                }
            }
            var me = function() {
                    function t(t) {
                        this.analytics = t, this.analytics.on(J, this.onReplayEvent.bind(this)), this.analytics.on(tt, this.onTrackFinishedEvent.bind(this)), this.analytics.on(I, this.onInitialIntendToPlayEvent.bind(this))
                    }
                    var e = t.prototype;
                    return e.onInitialIntendToPlayEvent = function(t) {
                        this.resetLatencyStartDate(t.intentToPlayTime)
                    }, e.onReplayEvent = function() {
                        this.resetLatencyStartDate()
                    }, e.onTrackFinishedEvent = function(t) {
                        this.resetLatencyStartDate(), this.trackId !== t.currentTrackId && (this.trackId = t.currentTrackId)
                    }, e.resetLatencyStartDate = function(t) {
                        this.latencyStartDate = t || new Date
                    }, e.getLatencyData = function() {
                        if (void 0 !== this.latencyStartDate) return {
                            latency: new Date - this.latencyStartDate
                        }
                    }, t
                }(),
                _e = [{
                    progress: .25,
                    event: B
                }, {
                    progress: .5,
                    event: H
                }, {
                    progress: .75,
                    event: U
                }, {
                    progress: .95,
                    event: j
                }, {
                    progress: 1,
                    event: K
                }],
                ge = function() {
                    function t(t) {
                        this.analytics = t, this.eventMap = {}, this.playbackLatencyListener = new me(t), this.analytics.on(tt, this.onTrackFinishedEvent.bind(this)), this.analytics.on($, this.onTickEvent.bind(this))
                    }
                    var e = t.prototype;
                    return e.onTrackFinishedEvent = function(t) {
                        var e = _t(t);
                        void 0 !== e && (e.shouldLoop || (this.eventMap[t.currentTrackId] = {}))
                    }, e.onTickEvent = function(t) {
                        var e = _t(t);
                        if (void 0 !== e && e.durationMs) {
                            var i = this.eventMap[e.id];
                            void 0 === i && (i = {}, this.eventMap[e.id] = i), this.checkAllTentpoles(e, i, t)
                        }
                    }, e.checkAllTentpoles = function(t, e, i) {
                        if (i.isPlaying) {
                            var n = t.durationMs,
                                a = t.currentTimeMs,
                                r = this.playbackLatencyListener.getLatencyData() || {},
                                o = {
                                    latency_millis: r.latency,
                                    cache_info: {
                                        notCached: {}
                                    }
                                };
                            this.emitOnce(z, e, i, r, o), t.isLive || this.checkProgressTentpoles(n, a, e, i)
                        }
                    }, e.checkProgressTentpoles = function(t, e, i, n) {
                        var a = this;
                        _e.forEach((function(r) {
                            var o = r.progress * t;
                            e >= o - 1e3 && e <= o + 1e3 && a.emitOnce(r.event, i, n)
                        }))
                    }, e.emitOnce = function(t, e, i, n, a) {
                        e[t] || (this.analytics.emit(t, i, n, a), e[t] = !0)
                    }, t
                }(),
                be = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100],
                Te = ((o = {})[pt] = 2, o[ut] = 3, o[vt] = 1, o[ht] = 1, o[lt] = 1, o[ft] = 5, o[ct] = 1, o),
                Ee = function() {
                    function t(t) {
                        this.analytics = t, this.sessionDataStore = {}, this.analytics.on($, this.onTickEvent.bind(this)), this.analytics.on(P, this.onFullscreenEvent.bind(this)), this.analytics.on(q, this.onShrinkEvent.bind(this)), this.analytics.on(tt, this.onTrackFinishedEvent.bind(this)), this.analytics.on(m, this.onTrackInterrupt.bind(this)), this.analytics.on(Z, this.onTrackInterrupt.bind(this))
                    }
                    var e = t.prototype;
                    return e.onTickEvent = function(t) {
                        var e = _t(t);
                        if (void 0 !== e) {
                            var i = this.getOrCreateNewSessionDataForTrack(e, t);
                            t.isScrubbing ? i.currentTimeMs = e.currentTimeMs : this.updateViewData(e, i, t)
                        }
                    }, e.onFullscreenEvent = function(t) {
                        var e = _t(t);
                        void 0 !== e && (this.getOrCreateNewSessionDataForTrack(e, t).isFullscreenMode = !0)
                    }, e.onShrinkEvent = function(t) {
                        var e = _t(t);
                        void 0 !== e && (this.getOrCreateNewSessionDataForTrack(e, t).isFullscreenMode = !1)
                    }, e.onTrackFinishedEvent = function(t) {
                        var e = _t(t);
                        if (void 0 !== e) {
                            var i = this.sessionDataStore[e.id];
                            if (void 0 !== i)
                                if (e.shouldLoop) i.currentTimeMs = 0;
                                else {
                                    if (i.timeWatchedMs > 0) {
                                        var n = this.constructVideoSessionDetails(i, e);
                                        this.emitVideoSessionEvent(t, n)
                                    }
                                    this.sessionDataStore[e.id] = void 0
                                }
                        }
                    }, e.onTrackInterrupt = function(t) {
                        var e = _t(t);
                        if (void 0 !== e) {
                            var i = this.sessionDataStore[e.id];
                            if (void 0 !== i) {
                                if (i.timeWatchedMs > 0) {
                                    var n = this.constructVideoSessionDetails(i, e);
                                    this.emitVideoSessionEvent(t, n)
                                }
                                this.sessionDataStore[e.id] = void 0
                            }
                        }
                    }, e.getOrCreateNewSessionDataForTrack = function(t, e) {
                        var i = this.sessionDataStore[t.id];
                        return void 0 === i && (i = {
                            sizesInfoAtTheStart: e.sizesInfo,
                            currentTimeMs: t.currentTimeMs,
                            isFullscreenMode: !1,
                            timeWatchedMs: 0,
                            timeWatchedFullscreenMs: 0,
                            timeWatchedWithAudioMs: 0,
                            timeWatchedFullscreenWithAudioMs: 0,
                            watchedMsByInViewPct: this.generateNewAggregateHistogram(),
                            watchedWithAudioMsByInViewPct: this.generateNewAggregateHistogram(),
                            watchedMsByViewportPct: this.generateNewAggregateHistogram(),
                            maxContinuousWatchedMsByInViewPct: this.generateNewMaxContinuousHistogram(),
                            maxContinuousWatchedWithAudioMsByInViewPct: this.generateNewMaxContinuousHistogram()
                        }, this.sessionDataStore[t.id] = i), i
                    }, e.generateNewAggregateHistogram = function() {
                        for (var t, e = {}, i = v(be); !(t = i()).done;) {
                            e[t.value] = 0
                        }
                        return e
                    }, e.generateNewMaxContinuousHistogram = function() {
                        for (var t, e = {}, i = v(be); !(t = i()).done;) {
                            e[t.value] = {
                                current: 0,
                                max: 0
                            }
                        }
                        return e
                    }, e.resetContinuousViewDataForHistogram = function(t) {
                        for (var e, i = v(be); !(e = i()).done;) {
                            var n = e.value;
                            this.resetContinuousViewDataForBucket(t[n])
                        }
                    }, e.resetContinuousViewDataForBucket = function(t) {
                        t.max = Math.max(t.current, t.max), t.current = 0
                    }, e.updateViewData = function(t, e, i) {
                        var n = t.currentTimeMs - e.currentTimeMs,
                            a = e.isFullscreenMode ? 1 : i.percentVisible,
                            r = e.isFullscreenMode ? 1 : i.percentOfViewportOccupied;
                        e.currentTimeMs = t.currentTimeMs, n < 0 || (e.timeWatchedMs += n, this.updateAggregateHistogram(e.watchedMsByInViewPct, a, n), this.updateAggregateHistogram(e.watchedMsByViewportPct, r, n), this.updateMaxContinuousHistogram(e.maxContinuousWatchedMsByInViewPct, a, n), i.isMuted ? this.resetContinuousViewDataForHistogram(e.maxContinuousWatchedWithAudioMsByInViewPct) : (e.timeWatchedWithAudioMs += n, this.updateAggregateHistogram(e.watchedWithAudioMsByInViewPct, a, n), this.updateMaxContinuousHistogram(e.maxContinuousWatchedWithAudioMsByInViewPct, a, n)), e.isFullscreenMode && (e.timeWatchedFullscreenMs += n, i.isMuted || (e.timeWatchedFullscreenWithAudioMs += n)))
                    }, e.updateAggregateHistogram = function(t, e, i) {
                        if (0 !== e)
                            for (var n, a = 100 * e, r = v(be); !(n = r()).done;) {
                                var o = n.value;
                                a >= o && (t[o] += i)
                            }
                    }, e.updateMaxContinuousHistogram = function(t, e, i) {
                        if (0 !== e)
                            for (var n, a = 100 * e, r = v(be); !(n = r()).done;) {
                                var o = n.value;
                                a >= o ? t[o].current += i : t[o].current > 0 && this.resetContinuousViewDataForBucket(t[o])
                            } else this.resetContinuousViewDataForHistogram(t)
                    }, e.constructVideoSessionDetails = function(t, e) {
                        return {
                            video_details: {
                                is_preroll_video: e.displayType === ot,
                                video_length: Math.round(e.durationMs),
                                time_watched: Math.round(t.timeWatchedMs),
                                time_watched_fullscreen: Math.round(t.timeWatchedFullscreenMs),
                                time_watched_with_audio: Math.round(t.timeWatchedWithAudioMs),
                                time_watched_fullscreen_with_audio: Math.round(t.timeWatchedFullscreenWithAudioMs),
                                time_watched_100_with_audio: Math.round(t.watchedWithAudioMsByInViewPct[100]),
                                video_type: Te[e.contentType],
                                watched_ms_by_in_view_pct: this.constructAggregateHistogramPayload(t.watchedMsByInViewPct),
                                watched_with_audio_ms_by_in_view_pct: this.constructAggregateHistogramPayload(t.watchedWithAudioMsByInViewPct),
                                watched_ms_by_viewport_pct: this.constructAggregateHistogramPayload(t.watchedMsByViewportPct),
                                max_continuous_watched_ms_by_in_view_pct: this.constructMaxContinuousHistogramPayload(t.maxContinuousWatchedMsByInViewPct),
                                max_continuous_watched_with_audio_ms_by_in_view_pct: this.constructMaxContinuousHistogramPayload(t.maxContinuousWatchedWithAudioMsByInViewPct),
                                sizes_info_at_the_start: {
                                    viewport_size: t.sizesInfoAtTheStart.viewportSize,
                                    ad_size: t.sizesInfoAtTheStart.mediaSize
                                }
                            }
                        }
                    }, e.constructAggregateHistogramPayload = function(t) {
                        for (var e, i = {}, n = v(be); !(e = n()).done;) {
                            var a = e.value;
                            i[a] = Math.round(t[a])
                        }
                        return {
                            histogram: i
                        }
                    }, e.constructMaxContinuousHistogramPayload = function(t) {
                        for (var e, i = {}, n = v(be); !(e = n()).done;) {
                            var a = e.value,
                                r = t[a];
                            i[a] = Math.round(Math.max(r.current, r.max))
                        }
                        return {
                            histogram: i
                        }
                    }, e.emitVideoSessionEvent = function(t, e) {
                        this.analytics.emit(it, t, e)
                    }, t
                }(),
                Pe = [at, R, rt, N, w, O, L, nt, x, D],
                we = [N, O, L, nt],
                Me = function() {
                    function t(t, e) {
                        this.analytics = t, this.context = e, this.eventMap = {}, this.analytics.on($, this.onTickEvent.bind(this)), this.analytics.on(tt, this.onTrackFinishedEvent.bind(this)), this.analytics.on(F, this.onPauseEvent.bind(this)), this.analytics.on(K, this.onPlaybackComplete.bind(this))
                    }
                    var e = t.prototype;
                    return e.onTrackFinishedEvent = function(t) {
                        var e = _t(t);
                        if (void 0 !== e) {
                            var i = this.eventMap[e.id];
                            void 0 !== i && (e.shouldLoop ? i.timePlayedToMs = 0 : this.eventMap[e.id] = void 0)
                        }
                    }, e.onPlaybackComplete = function(t) {
                        var e = _t(t);
                        if (void 0 !== e) {
                            var i = this.eventMap[e.id];
                            void 0 !== i && this.context && this.context.enableShortFormCompleteLogging && this.emitOnce(D, i, t)
                        }
                    }, e.onPauseEvent = function(t) {
                        this.resetContinuousViewEventTimingData(t)
                    }, e.onTickEvent = function(t) {
                        var e = _t(t);
                        if (void 0 !== e) {
                            var i = this.eventMap[e.id];
                            if (void 0 === i) {
                                i = {
                                    timePlayedToMs: e.currentTimeMs
                                };
                                for (var n, a = v(Pe); !(n = a()).done;) {
                                    i[n.value] = {
                                        timePlayedMs: 0,
                                        visibilityWeightedTimePlayedMs: 0,
                                        fired: !1
                                    }
                                }
                                this.eventMap[e.id] = i
                            }
                            t.isScrubbing ? (i.timePlayedToMs = e.currentTimeMs, this.resetContinuousViewEventTimingData(t)) : (this.updateTimingData(e, i, t), this.checkViewEvents(e, i, t)), this.checkPlayFromTap(i, t)
                        }
                    }, e.updateTimingData = function(t, e, i) {
                        var n = t.currentTimeMs - e.timePlayedToMs;
                        e.timePlayedToMs = t.currentTimeMs;
                        var a = i.percentVisible;
                        a >= 1 && (e[rt].timePlayedMs += n), a >= 1 ? e[N].timePlayedMs += n : e[N].timePlayedMs = 0, a >= .5 && Tt(i) ? e[O].timePlayedMs += n : e[O].timePlayedMs = 0, a >= .5 ? e[L].timePlayedMs += n : e[L].timePlayedMs = 0, a >= 1 && !i.isMuted && (e[w].timePlayedMs += n), a >= .5 ? e[nt].timePlayedMs += n : e[nt].timePlayedMs = 0, e[x].timePlayedMs += n, a >= .5 && (e[x].visibilityWeightedTimePlayedMs += a * n), e[D].timePlayedMs += n
                    }, e.resetContinuousViewEventTimingData = function(t) {
                        var e = this.eventMap[t.currentTrackId];
                        if (void 0 !== e)
                            for (var i, n = v(we); !(i = n()).done;) {
                                e[i.value].timePlayedMs = 0
                            }
                    }, e.checkViewEvents = function(t, e, i) {
                        var n;
                        e[rt].timePlayedMs >= (!(n = t).isLive && n.durationMs > 0 && !n.shouldLoop ? Math.min(n.durationMs - 500, Bt) : Bt) && (this.emitOnce(rt, e, i), this.emitOnce(at, e, i)), e[N].timePlayedMs >= 1e3 && this.emitOnce(N, e, i), e[w].timePlayedMs >= function(t) {
                            return !t.isLive && t.durationMs > 0 ? .5 * t.durationMs : Number.MAX_SAFE_INTEGER
                        }(t) && this.emitOnce(w, e, i), e[O].timePlayedMs >= 2e3 && this.emitOnce(O, e, i), e[L].timePlayedMs >= 2e3 && this.emitOnce(L, e, i), e[nt].timePlayedMs >= function(t) {
                            return !t.isLive && t.durationMs > 0 ? Math.min(.95 * t.durationMs, 1e4) : 1e4
                        }(t) && this.emitOnce(nt, e, i);
                        var a = e[x];
                        a.timePlayedMs >= function(t) {
                            return !t.isLive && t.durationMs > 0 ? Math.min(.95 * t.durationMs, 6e3) : 6e3
                        }(t) && a.visibilityWeightedTimePlayedMs >= function(t) {
                            return !t.isLive && t.durationMs > 0 ? Math.min(.5 * t.durationMs, 3e3) : 3e3
                        }(t) && this.emitOnce(x, e, i), this.context && this.context.enableShortFormCompleteLogging && e[D].timePlayedMs >= 15e3 && this.emitOnce(D, e, i)
                    }, e.checkPlayFromTap = function(t, e) {
                        e.isPlaying && !e.isPreview && (this.emitOnce(R, t, e), this.emitOnce(at, t, e))
                    }, e.emitOnce = function(t, e, i) {
                        e[t].fired || (this.analytics.emit(t, i), e[t].fired = !0)
                    }, t
                }(),
                Se = function(t) {
                    function e(e, i, n, a) {
                        var r;
                        (r = t.call(this) || this).scribeListener = new de(c()(r), e, a), r.promotedLogListener = new Jt(c()(r), i), r.tentpoleListener = new ge(c()(r)), r.viewListener = new Me(c()(r), a), r.playbackLapseListener = new Kt(c()(r)), r.errorListener = new St(c()(r)), r.beaconListener = new Pt(c()(r)), r.rewindListener = new Xt(c()(r)), r.heartbeatListener = new At(c()(r)), r.loopListener = new Vt(c()(r)), r.intendToPlayListener = new Lt(c()(r)), r.videoSessionListener = new Ee(c()(r)), r.ctaImpressionListener = new Mt(c()(r)), r.captionsListener = new wt(c()(r));
                        var o = new Rt(n, a),
                            s = new Ht(o);
                        return r.lifecycleListener = new jt(c()(r), s), r
                    }
                    l()(e, t);
                    var i = e.prototype;
                    return i.onTickEvent = function(t) {
                        this.emit($, t)
                    }, i.onReplay = function(t) {
                        var e = _t(t);
                        void 0 !== e && (e.shouldLoop || this.emit(J, t))
                    }, i.onTrackFinished = function(t) {
                        this.emit(tt, t)
                    }, i.onIntendToPlay = function(t) {
                        this.emit(A, t)
                    }, i.onPlay = function(t) {
                        this.emit(W, t)
                    }, i.onPause = function(t) {
                        this.emit(F, t)
                    }, i.onMute = function(t) {
                        this.emit(V, t)
                    }, i.onUnmute = function(t) {
                        this.emit(et, t)
                    }, i.onFullScreen = function(t) {
                        this.emit(P, t)
                    }, i.onShrink = function(t) {
                        this.emit(q, t)
                    }, i.onAdSkip = function(t) {
                        this.emit(m, t)
                    }, i.onCtaImpression = function(t) {
                        this.emit(T, t)
                    }, i.onCtaClick = function(t) {
                        this.emit(b, t)
                    }, i.onConfigLoaded = function(t) {
                        this.emit(g, t)
                    }, i.onError = function(t, e) {
                        this.emit(E, t, e)
                    }, i.onTeardown = function(t) {
                        this.emit(Z, t)
                    }, e
                }(p.a);
            e.a = Se
        },
        aLgo: function(t, e, i) {
            i("aokA")("iterator")
        },
        aokA: function(t, e, i) {
            var n = i("PjZX"),
                a = i("8aeu"),
                r = i("TkGI"),
                o = i("q9+l").f;
            t.exports = function(t) {
                var e = n.Symbol || (n.Symbol = {});
                a(e, t) || o(e, t, {
                    value: r.f(t)
                })
            }
        },
        cARO: function(t, e, i) {
            var n = i("uLp7"),
                a = Date.prototype,
                r = "Invalid Date",
                o = "toString",
                s = a.toString,
                c = a.getTime;
            new Date(NaN) + "" != r && n(a, o, (function() {
                var t = c.call(this);
                return t == t ? s.call(this) : r
            }))
        },
        hBpG: function(t, e, i) {
            "use strict";
            var n = i("ax0f"),
                a = i("0FSu").find,
                r = i("7St7"),
                o = "find",
                s = !0;
            o in [] && Array(1).find((function() {
                s = !1
            })), n({
                target: "Array",
                proto: !0,
                forced: s
            }, {
                find: function(t) {
                    return a(this, t, arguments.length > 1 ? arguments[1] : void 0)
                }
            }), r(o)
        },
        hXPa: function(t, e, i) {
            var n, a, r, o, s, c, u, l, h = i("9JhN"),
                d = i("GFpt").f,
                f = i("JDXi").set,
                p = i("4D4F"),
                v = i("HS6i"),
                y = i("8Rd0"),
                m = h.MutationObserver || h.WebKitMutationObserver,
                _ = h.document,
                g = h.process,
                b = h.Promise,
                T = d(h, "queueMicrotask"),
                E = T && T.value;
            E || (n = function() {
                var t, e;
                for (y && (t = g.domain) && t.exit(); a;) {
                    e = a.fn, a = a.next;
                    try {
                        e()
                    } catch (t) {
                        throw a ? o() : r = void 0, t
                    }
                }
                r = void 0, t && t.enter()
            }, p || y || v || !m || !_ ? b && b.resolve ? (u = b.resolve(void 0), l = u.then, o = function() {
                l.call(u, n)
            }) : o = y ? function() {
                g.nextTick(n)
            } : function() {
                f.call(h, n)
            } : (s = !0, c = _.createTextNode(""), new m(n).observe(c, {
                characterData: !0
            }), o = function() {
                c.data = s = !s
            })), t.exports = E || function(t) {
                var e = {
                    fn: t,
                    next: void 0
                };
                r && (r.next = e), a || (a = e, o()), r = e
            }
        },
        ho0z: function(t, e, i) {
            var n = i("1Mu/"),
                a = i("q9+l").f,
                r = Function.prototype,
                o = r.toString,
                s = /^\s*function ([^ (]*)/,
                c = "name";
            n && !(c in r) && a(r, c, {
                configurable: !0,
                get: function() {
                    try {
                        return o.call(this).match(s)[1]
                    } catch (t) {
                        return ""
                    }
                }
            })
        },
        jHwr: function(t, e, i) {
            "use strict";
            e.a = (t, e) => {
                let i = null;
                const n = () => {
                    i = null, t()
                };
                return () => (i || (i = e(n)), i)
            }
        },
        "jQ/y": function(t, e, i) {
            "use strict";
            var n = i("ax0f"),
                a = i("1Mu/"),
                r = i("9JhN"),
                o = i("8aeu"),
                s = i("dSaG"),
                c = i("q9+l").f,
                u = i("tjTa"),
                l = r.Symbol;
            if (a && "function" == typeof l && (!("description" in l.prototype) || void 0 !== l().description)) {
                var h = {},
                    d = function() {
                        var t = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
                            e = this instanceof d ? new l(t) : void 0 === t ? l() : l(t);
                        return "" === t && (h[e] = !0), e
                    };
                u(d, l);
                var f = d.prototype = l.prototype;
                f.constructor = d;
                var p = f.toString,
                    v = "Symbol(test)" == String(l("test")),
                    y = /^Symbol\((.*)\)[^)]+$/;
                c(f, "description", {
                    configurable: !0,
                    get: function() {
                        var t = s(this) ? this.valueOf() : this,
                            e = p.call(t);
                        if (o(h, t)) return "";
                        var i = v ? e.slice(7, -1) : e.replace(y, "$1");
                        return "" === i ? void 0 : i
                    }
                }), n({
                    global: !0,
                    forced: !0
                }, {
                    Symbol: d
                })
            }
        },
        jwue: function(t, e, i) {
            "use strict";
            var n = i("ax0f"),
                a = i("6OVi");
            n({
                target: "Array",
                proto: !0,
                forced: [].forEach != a
            }, {
                forEach: a
            })
        },
        kH1Z: function(t, e, i) {
            i("ax0f")({
                target: "Number",
                stat: !0
            }, {
                MAX_SAFE_INTEGER: 9007199254740991
            })
        },
        mf9H: function(t, e, i) {
            "use strict";
            i.d(e, "a", (function() {
                return h
            })), i.d(e, "b", (function() {
                return f
            })), i.d(e, "c", (function() {
                return p
            }));
            var n = i("KEM+"),
                a = i.n(n),
                r = i("6/RC"),
                o = i("XmKV"),
                s = i("HT/6"),
                c = i("jHwr"),
                u = i("+d3d"),
                l = i("fs1G");
            const h = .25,
                d = {
                    autoplayPrioritizationPolicy: o.a,
                    minimumVisibilityForAutoplay: h
                };
            class f {
                constructor(t = d) {
                    a()(this, "_players", []), a()(this, "_setPlayerState", ((t, e) => {
                        t.previousPlaybackState = t.playbackState, t.playbackState = e
                    })), a()(this, "_updatePlaybackStates", (() => {
                        const t = this._players.find((t => t.playbackState === s.b.USER_PLAYING));
                        t && !this._canPlay(t) ? (this._pausePlayer(t), this._triggerAutoplay()) : t ? this._stopAllExcept(t) : this._triggerAutoplay()
                    })), a()(this, "_scheduleUpdate", r.canUseDOM ? Object(u.a)(Object(c.a)(this._updatePlaybackStates, window.requestIdleCallback ? t => window.requestIdleCallback(t, {
                        timeout: 200
                    }) : window.requestAnimationFrame), 300, {
                        leading: !1,
                        trailing: !0
                    }) : l.a);
                    const {
                        autoplayPrioritizationPolicy: e,
                        minimumVisibilityForAutoplay: i
                    } = t;
                    this._autoplayPrioritizationPolicy = e, this._minimumVisibilityForAutoplay = i
                }
                register({
                    canAutoplay: t,
                    onAutoPlayRequest: e,
                    onFullscreenEntered: i,
                    onFullscreenExited: n,
                    onPauseRequest: a,
                    isLooping: r,
                    playbackPriority: o = s.a.NORMAL
                }) {
                    const c = {
                        placement: void 0,
                        playbackPriority: o,
                        playbackState: s.b.INITIAL,
                        previousPlaybackState: s.b.INITIAL,
                        commandHandlers: {
                            onAutoPlayRequest: e,
                            onFullscreenEntered: i,
                            onFullscreenExited: n,
                            onPauseRequest: a
                        },
                        canAutoplay: t,
                        isLooping: r
                    };
                    return this._players.push(c), {
                        reset: () => this._handleReset(c),
                        signalFullscreenChange: t => this._handleFullscreenChanged(t),
                        signalPlacementChange: t => this._handlePlacementChange(c, t),
                        signalPlay: () => this._handlePlay(c),
                        signalPause: () => this._handlePause(c),
                        signalPlaybackFinish: () => this._handlePlaybackFinished(c),
                        unregister: () => this._handleUnregister(c)
                    }
                }
                _handleFullscreenChanged(t) {
                    this._players.forEach((e => {
                        const {
                            onFullscreenEntered: i,
                            onFullscreenExited: n
                        } = e.commandHandlers;
                        t && i ? i() : !t && n && n()
                    }))
                }
                _handlePlacementChange(t, e) {
                    const i = e.scrollY();
                    t.placement = e, this._scrollY !== i && (this._scrollY = i), t.playbackState === s.b.FINISHED && 0 === e.visibleFraction() && this._setPlayerState(t, s.b.INITIAL), this._scheduleUpdate()
                }
                _handlePlay(t) {
                    t.playbackState !== s.b.AUTO_PLAYING && (t.previousPlaybackState === s.b.AUTO_PLAYING && t.isLooping ? this._setPlayerState(t, s.b.AUTO_PLAYING) : this._setPlayerState(t, s.b.USER_PLAYING)), this._stopAllExcept(t)
                }
                _handlePause(t) {
                    t.playbackState !== s.b.AUTO_PAUSED && this._setPlayerState(t, s.b.USER_PAUSED)
                }
                _handlePlaybackFinished(t) {
                    this._setPlayerState(t, s.b.FINISHED)
                }
                _handleReset(t) {
                    this._setPlayerState(t, s.b.INITIAL), this._scheduleUpdate()
                }
                _handleUnregister(t) {
                    const e = this._players.indexOf(t);
                    e >= 0 && this._players.splice(e, 1), this._scheduleUpdate()
                }
                _triggerAutoplay() {
                    const t = this._players.filter((t => this._canAutoPlay(t))),
                        e = this._findBestAutoplayFit(t);
                    e ? (this._stopAllExcept(e), this._autoPlayVideo(e)) : this._players.forEach((t => {
                        t.playbackState === s.b.AUTO_PLAYING && this._pausePlayer(t)
                    }))
                }
                _canAutoPlay(t) {
                    const e = !!t.placement && t.placement.visibleFraction() >= this._minimumVisibilityForAutoplay,
                        i = t.playbackState === s.b.USER_PAUSED,
                        n = t.playbackState === s.b.FINISHED;
                    return t.canAutoplay && e && !i && !n
                }
                _canPlay(t) {
                    const e = !!t.placement && t.placement.visibleFraction() >= this._minimumVisibilityForAutoplay,
                        i = !!t.placement && t.placement.visibleFraction() > 0;
                    return !t.placement || i || e
                }
                _stopAllExcept(t) {
                    this._players.forEach((e => {
                        e === t || e.playbackState !== s.b.USER_PLAYING && e.playbackState !== s.b.AUTO_PLAYING || this._pausePlayer(e)
                    }))
                }
                _pausePlayer(t) {
                    const {
                        onPauseRequest: e
                    } = t.commandHandlers;
                    this._setPlayerState(t, s.b.AUTO_PAUSED), e()
                }
                _autoPlayVideo(t) {
                    const {
                        onAutoPlayRequest: e
                    } = t.commandHandlers;
                    this._setPlayerState(t, s.b.AUTO_PLAYING), e()
                }
                _findBestAutoplayFit(t) {
                    return this._autoplayPrioritizationPolicy(t)
                }
                _getDistanceToCenter(t) {
                    return t.placement ? t.placement.distanceToCenter() : Number.MAX_VALUE
                }
                _getDistanceToTop(t) {
                    return t.placement ? t.placement.distanceToTop() : Number.MAX_VALUE
                }
            }
            const p = new f
        },
        sVFb: function(t, e, i) {
            var n = i("ax0f"),
                a = i("9JhN"),
                r = i("ZORK"),
                o = [].slice,
                s = function(t) {
                    return function(e, i) {
                        var n = arguments.length > 2,
                            a = n ? o.call(arguments, 2) : void 0;
                        return t(n ? function() {
                            ("function" == typeof e ? e : Function(e)).apply(this, a)
                        } : e, i)
                    }
                };
            n({
                global: !0,
                bind: !0,
                forced: /MSIE .\./.test(r)
            }, {
                setTimeout: s(a.setTimeout),
                setInterval: s(a.setInterval)
            })
        },
        ssvU: function(t, e, i) {
            i("ax0f")({
                target: "Number",
                stat: !0
            }, {
                isNaN: function(t) {
                    return t != t
                }
            })
        },
        tXjT: function(t, e, i) {
            var n = i("FXyv"),
                a = i("yWXl"),
                r = i("tJVe"),
                o = i("IRf+"),
                s = i("BEbc"),
                c = i("qrpn"),
                u = function(t, e) {
                    this.stopped = t, this.result = e
                };
            t.exports = function(t, e, i) {
                var l, h, d, f, p, v, y, m = i && i.that,
                    _ = !(!i || !i.AS_ENTRIES),
                    g = !(!i || !i.IS_ITERATOR),
                    b = !(!i || !i.INTERRUPTED),
                    T = o(e, m, 1 + _ + b),
                    E = function(t) {
                        return l && c(l), new u(!0, t)
                    },
                    P = function(t) {
                        return _ ? (n(t), b ? T(t[0], t[1], E) : T(t[0], t[1])) : b ? T(t, E) : T(t)
                    };
                if (g) l = t;
                else {
                    if ("function" != typeof(h = s(t))) throw TypeError("Target is not iterable");
                    if (a(h)) {
                        for (d = 0, f = r(t.length); f > d; d++)
                            if ((p = P(t[d])) && p instanceof u) return p;
                        return new u(!1)
                    }
                    l = h.call(t)
                }
                for (v = l.next; !(y = v.call(l)).done;) {
                    try {
                        p = P(y.value)
                    } catch (t) {
                        throw c(l), t
                    }
                    if ("object" == typeof p && p && p instanceof u) return p
                }
                return new u(!1)
            }
        },
        zh11: function(t, e, i) {
            "use strict";
            var n = i("hpdy"),
                a = i("dSaG"),
                r = [].slice,
                o = {},
                s = function(t, e, i) {
                    if (!(e in o)) {
                        for (var n = [], a = 0; a < e; a++) n[a] = "a[" + a + "]";
                        o[e] = Function("C,a", "return new C(" + n.join(",") + ")")
                    }
                    return o[e](t, i)
                };
            t.exports = Function.bind || function(t) {
                var e = n(this),
                    i = r.call(arguments, 1),
                    o = function() {
                        var n = i.concat(r.call(arguments));
                        return this instanceof o ? s(e, n.length, n) : e.apply(t, n)
                    };
                return a(e.prototype) && (o.prototype = e.prototype), o
            }
        }
    }
]);
//# sourceMappingURL=https://ton.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.AudioOnlyVideoPlayer~ondemand.InlinePlayer.369839e5.js.map