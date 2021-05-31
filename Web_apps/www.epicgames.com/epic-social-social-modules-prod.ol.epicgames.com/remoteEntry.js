var epic_social_social_modules;
(() => {
    "use strict";
    var e, r, t, a, o, n, i, c, l, d, f, u, s, p, h, b, v, m, y, g = {
            35791: (e, r, t) => {
                var a = {
                        "./LauncherOverlay": () => Promise.all([t.e(358), t.e(37), t.e(21), t.e(541), t.e(293), t.e(206), t.e(611), t.e(139), t.e(530)]).then((() => () => t(80178))),
                        "./LauncherSocialProvider": () => Promise.all([t.e(37), t.e(21), t.e(319), t.e(948), t.e(293), t.e(206), t.e(611), t.e(678)]).then((() => () => t(5678)))
                    },
                    o = (e, r) => (t.R = r, r = t.o(a, e) ? a[e]() : Promise.resolve().then((() => {
                        throw new Error('Module "' + e + '" does not exist in container.')
                    })), t.R = void 0, r),
                    n = (e, r) => {
                        if (t.S) {
                            var a = t.S.default,
                                o = "default";
                            if (a && a !== e) throw new Error("Container initialization failed as it has already been initialized with a different share scope");
                            return t.S[o] = e, t.I(o, r)
                        }
                    };
                t.d(r, {
                    get: () => o,
                    init: () => n
                })
            }
        },
        w = {};

    function _(e) {
        var r = w[e];
        if (void 0 !== r) return r.exports;
        var t = w[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return g[e].call(t.exports, t, t.exports, _), t.loaded = !0, t.exports
    }
    _.m = g, _.c = w, _.n = e => {
        var r = e && e.__esModule ? () => e.default : () => e;
        return _.d(r, {
            a: r
        }), r
    }, r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, _.t = function(t, a) {
        if (1 & a && (t = this(t)), 8 & a) return t;
        if ("object" == typeof t && t) {
            if (4 & a && t.__esModule) return t;
            if (16 & a && "function" == typeof t.then) return t
        }
        var o = Object.create(null);
        _.r(o);
        var n = {};
        e = e || [null, r({}), r([]), r(r)];
        for (var i = 2 & a && t;
            "object" == typeof i && !~e.indexOf(i); i = r(i)) Object.getOwnPropertyNames(i).forEach((e => n[e] = () => t[e]));
        return n.default = () => t, _.d(o, n), o
    }, _.d = (e, r) => {
        for (var t in r) _.o(r, t) && !_.o(e, t) && Object.defineProperty(e, t, {
            enumerable: !0,
            get: r[t]
        })
    }, _.f = {}, _.e = e => Promise.all(Object.keys(_.f).reduce(((r, t) => (_.f[t](e, r), r)), [])), _.u = e => e + "." + {
        21: "f8648fa18f94cdf3269c",
        23: "2738197f6022fbc7f02f",
        37: "ab0021f7d587254651e3",
        93: "90532235da726caff583",
        116: "e08c5b4ae597e2c3b73a",
        139: "6b3c38014c295c907eb1",
        169: "4e91d16ca9d7578a0d59",
        206: "1dd4a049d07472ab53cb",
        243: "0d115815c6a2f17c0ce3",
        254: "17b711d96fe13fab39e6",
        293: "06a448367b04650f4296",
        319: "56db608e280a997c1e61",
        358: "ebccc15a5ec616a2060c",
        374: "b7e6af1606a2883b4504",
        378: "4dcc329808916a3b03e4",
        482: "77e0529f028cd9b1246a",
        496: "aab50ae121ed434307d8",
        530: "3fb3c2219414e75aae17",
        541: "c824b952623dd8eea6ca",
        542: "c46af1b70fc8490cf67d",
        573: "736124332ca02a0de291",
        611: "2ad293031448020efaeb",
        652: "027505575ffffa2f6cdc",
        678: "7ec3e892e4ef9a476c99",
        732: "b0b3ab45ac0633459ab2",
        758: "7984de09763cb8027c5f",
        774: "330ef7f8a5684ba2a762",
        799: "6997aa11333175931cc7",
        827: "7821fc293349806f2c24",
        904: "9a98db733967e0c5f3f9",
        928: "558d4fe3019990f75444",
        948: "5c291db00a90add0024f"
    }[e] + ".js", _.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), _.hmd = e => ((e = Object.create(e)).children || (e.children = []), Object.defineProperty(e, "exports", {
        enumerable: !0,
        set: () => {
            throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id)
        }
    }), e), _.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), t = {}, a = "@epic-social/social-modules:", _.l = (e, r, o, n) => {
        if (t[e]) t[e].push(r);
        else {
            var i, c;
            if (void 0 !== o)
                for (var l = document.getElementsByTagName("script"), d = 0; d < l.length; d++) {
                    var f = l[d];
                    if (f.getAttribute("src") == e || f.getAttribute("data-webpack") == a + o) {
                        i = f;
                        break
                    }
                }
            i || (c = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, _.nc && i.setAttribute("nonce", _.nc), i.setAttribute("data-webpack", a + o), i.src = e), t[e] = [r];
            var u = (r, a) => {
                    i.onerror = i.onload = null, clearTimeout(s);
                    var o = t[e];
                    if (delete t[e], i.parentNode && i.parentNode.removeChild(i), o && o.forEach((e => e(a))), r) return r(a)
                },
                s = setTimeout(u.bind(null, void 0, {
                    type: "timeout",
                    target: i
                }), 12e4);
            i.onerror = u.bind(null, i.onerror), i.onload = u.bind(null, i.onload), c && document.head.appendChild(i)
        }
    }, _.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, _.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
        _.S = {};
        var e = {},
            r = {};
        _.I = (t, a) => {
            a || (a = []);
            var o = r[t];
            if (o || (o = r[t] = {}), !(a.indexOf(o) >= 0)) {
                if (a.push(o), e[t]) return e[t];
                _.o(_.S, t) || (_.S[t] = {});
                var n = _.S[t],
                    i = "@epic-social/social-modules",
                    c = (e, r, t, a) => {
                        var o = n[e] = n[e] || {},
                            c = o[r];
                        (!c || !c.loaded && (!a != !c.eager ? a : i > c.from)) && (o[r] = {
                            get: t,
                            from: i,
                            eager: !!a
                        })
                    },
                    l = [];
                switch (t) {
                    case "default":
                        c("@material-ui/core", "4.11.4", (() => Promise.all([_.e(358), _.e(37), _.e(23), _.e(293), _.e(206)]).then((() => () => _(96023))))), c("react-dom", "16.14.0", (() => Promise.all([_.e(542), _.e(293)]).then((() => () => _(31542))))), c("react", "16.14.0", (() => _.e(378).then((() => () => _(27378))))), c("styled-components", "5.3.0", (() => Promise.all([_.e(293), _.e(169)]).then((() => () => _(53169)))))
                }
                return e[t] = l.length ? Promise.all(l).then((() => e[t] = 1)) : 1
            }
        }
    })(), _.p = "https://epic-social-social-modules-prod.ol.epicgames.com/", o = e => {
        var r = e => e.split(".").map((e => +e == e ? +e : e)),
            t = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
            a = t[1] ? r(t[1]) : [];
        return t[2] && (a.length++, a.push.apply(a, r(t[2]))), t[3] && (a.push([]), a.push.apply(a, r(t[3]))), a
    }, n = (e, r) => {
        e = o(e), r = o(r);
        for (var t = 0;;) {
            if (t >= e.length) return t < r.length && "u" != (typeof r[t])[0];
            var a = e[t],
                n = (typeof a)[0];
            if (t >= r.length) return "u" == n;
            var i = r[t],
                c = (typeof i)[0];
            if (n != c) return "o" == n && "n" == c || "s" == c || "u" == n;
            if ("o" != n && "u" != n && a != i) return a < i;
            t++
        }
    }, i = e => {
        var r = e[0],
            t = "";
        if (1 === e.length) return "*";
        if (r + .5) {
            t += 0 == r ? ">=" : -1 == r ? "<" : 1 == r ? "^" : 2 == r ? "~" : r > 0 ? "=" : "!=";
            for (var a = 1, o = 1; o < e.length; o++) a--, t += "u" == (typeof(c = e[o]))[0] ? "-" : (a > 0 ? "." : "") + (a = 2, c);
            return t
        }
        var n = [];
        for (o = 1; o < e.length; o++) {
            var c = e[o];
            n.push(0 === c ? "not(" + l() + ")" : 1 === c ? "(" + l() + " || " + l() + ")" : 2 === c ? n.pop() + " " + n.pop() : i(c))
        }
        return l();

        function l() {
            return n.pop().replace(/^\((.+)\)$/, "$1")
        }
    }, c = (e, r) => {
        if (0 in e) {
            r = o(r);
            var t = e[0],
                a = t < 0;
            a && (t = -t - 1);
            for (var n = 0, i = 1, l = !0;; i++, n++) {
                var d, f, u = i < e.length ? (typeof e[i])[0] : "";
                if (n >= r.length || "o" == (f = (typeof(d = r[n]))[0])) return !l || ("u" == u ? i > t && !a : "" == u != a);
                if ("u" == f) {
                    if (!l || "u" != u) return !1
                } else if (l)
                    if (u == f)
                        if (i <= t) {
                            if (d != e[i]) return !1
                        } else {
                            if (a ? d > e[i] : d < e[i]) return !1;
                            d != e[i] && (l = !1)
                        }
                else if ("s" != u && "n" != u) {
                    if (a || i <= t) return !1;
                    l = !1, i--
                } else {
                    if (i <= t || f < u != a) return !1;
                    l = !1
                } else "s" != u && "n" != u && (l = !1, i--)
            }
        }
        var s = [],
            p = s.pop.bind(s);
        for (n = 1; n < e.length; n++) {
            var h = e[n];
            s.push(1 == h ? p() | p() : 2 == h ? p() & p() : h ? c(h, r) : !p())
        }
        return !!p()
    }, l = (e, r) => {
        var t = e[r];
        return Object.keys(t).reduce(((e, r) => !e || !t[e].loaded && n(e, r) ? r : e), 0)
    }, d = (e, r, t) => "Unsatisfied version " + r + " of shared singleton module " + e + " (required " + i(t) + ")", f = (e, r, t, a) => {
        var o = l(e, t);
        return c(a, o) || "undefined" != typeof console && console.warn && console.warn(d(t, o, a)), s(e[t][o])
    }, u = (e, r, t) => {
        var a = e[r];
        return (r = Object.keys(a).reduce(((e, r) => !c(t, r) || e && !n(e, r) ? e : r), 0)) && a[r]
    }, s = e => (e.loaded = 1, e.get()), h = (p = e => function(r, t, a, o) {
        var n = _.I(r);
        return n && n.then ? n.then(e.bind(e, r, _.S[r], t, a, o)) : e(r, _.S[r], t, a, o)
    })(((e, r, t, a, o) => r && _.o(r, t) ? f(r, 0, t, a) : o())), b = p(((e, r, t, a, o) => {
        var n = r && _.o(r, t) && u(r, t, a);
        return n ? s(n) : o()
    })), v = {}, m = {
        45293: () => h("default", "react", [4, 16, 14, 0], (() => _.e(378).then((() => () => _(27378))))),
        46206: () => h("default", "react-dom", [4, 16, 14, 0], (() => _.e(542).then((() => () => _(31542))))),
        20960: () => b("default", "styled-components", [4, 5, 3, 0], (() => _.e(116).then((() => () => _(53169))))),
        55873: () => b("default", "@material-ui/core", [4, 4, 11, 4], (() => Promise.all([_.e(358), _.e(23)]).then((() => () => _(96023)))))
    }, y = {
        206: [46206],
        293: [45293],
        611: [20960, 55873]
    }, _.f.consumes = (e, r) => {
        _.o(y, e) && y[e].forEach((e => {
            if (_.o(v, e)) return r.push(v[e]);
            var t = r => {
                    v[e] = 0, _.m[e] = t => {
                        delete _.c[e], t.exports = r()
                    }
                },
                a = r => {
                    delete v[e], _.m[e] = t => {
                        throw delete _.c[e], r
                    }
                };
            try {
                var o = m[e]();
                o.then ? r.push(v[e] = o.then(t).catch(a)) : t(o)
            } catch (e) {
                a(e)
            }
        }))
    }, (() => {
        var e = {
            461: 0
        };
        _.f.j = (r, t) => {
            var a = _.o(e, r) ? e[r] : void 0;
            if (0 !== a)
                if (a) t.push(a[2]);
                else if (/^2(06|93)$/.test(r)) e[r] = 0;
            else {
                var o = new Promise(((t, o) => a = e[r] = [t, o]));
                t.push(a[2] = o);
                var n = _.p + _.u(r),
                    i = new Error;
                _.l(n, (t => {
                    if (_.o(e, r) && (0 !== (a = e[r]) && (e[r] = void 0), a)) {
                        var o = t && ("load" === t.type ? "missing" : t.type),
                            n = t && t.target && t.target.src;
                        i.message = "Loading chunk " + r + " failed.\n(" + o + ": " + n + ")", i.name = "ChunkLoadError", i.type = o, i.request = n, a[1](i)
                    }
                }), "chunk-" + r, r)
            }
        };
        var r = (r, t) => {
                var a, o, [n, i, c] = t,
                    l = 0;
                for (a in i) _.o(i, a) && (_.m[a] = i[a]);
                for (c && c(_), r && r(t); l < n.length; l++) o = n[l], _.o(e, o) && e[o] && e[o][0](), e[n[l]] = 0
            },
            t = self.webpackChunk_epic_social_social_modules = self.webpackChunk_epic_social_social_modules || [];
        t.forEach(r.bind(null, 0)), t.push = r.bind(null, t.push.bind(t))
    })();
    var O = _(35791);
    epic_social_social_modules = O
})();