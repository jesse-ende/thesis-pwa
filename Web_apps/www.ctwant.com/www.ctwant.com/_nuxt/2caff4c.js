(window.webpackJsonp = window.webpackJsonp || []).push([
    [1], {
        0: function(t, e, a) {
            "use strict";
            a.d(e, "k", (function() {
                return u
            })), a.d(e, "m", (function() {
                return f
            })), a.d(e, "l", (function() {
                return h
            })), a.d(e, "e", (function() {
                return g
            })), a.d(e, "b", (function() {
                return b
            })), a.d(e, "s", (function() {
                return x
            })), a.d(e, "g", (function() {
                return _
            })), a.d(e, "h", (function() {
                return w
            })), a.d(e, "d", (function() {
                return v
            })), a.d(e, "r", (function() {
                return y
            })), a.d(e, "j", (function() {
                return k
            })), a.d(e, "t", (function() {
                return j
            })), a.d(e, "o", (function() {
                return S
            })), a.d(e, "q", (function() {
                return T
            })), a.d(e, "f", (function() {
                return P
            })), a.d(e, "c", (function() {
                return $
            })), a.d(e, "i", (function() {
                return A
            })), a.d(e, "p", (function() {
                return E
            })), a.d(e, "a", (function() {
                return N
            })), a.d(e, "v", (function() {
                return Y
            })), a.d(e, "n", (function() {
                return U
            })), a.d(e, "u", (function() {
                return W
            }));
            a(8), a(40), a(16), a(17);
            var i = a(27),
                n = a(2),
                r = a(4),
                o = a(14),
                s = (a(24), a(11), a(176), a(20), a(21), a(41), a(13), a(42), a(43), a(34), a(28), a(121), a(122), a(180), a(76), a(77), a(183), a(63), a(49), a(1)),
                l = a(30);

            function c(t, e) {
                var a = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    e && (i = i.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), a.push.apply(a, i)
                }
                return a
            }

            function p(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? c(Object(a), !0).forEach((function(e) {
                        Object(r.a)(t, e, a[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : c(Object(a)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                    }))
                }
                return t
            }

            function d(t, e) {
                var a;
                if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                    if (Array.isArray(t) || (a = function(t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return m(t, e);
                            var a = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === a && t.constructor && (a = t.constructor.name);
                            if ("Map" === a || "Set" === a) return Array.from(t);
                            if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return m(t, e)
                        }(t)) || e && t && "number" == typeof t.length) {
                        a && (t = a);
                        var i = 0,
                            n = function() {};
                        return {
                            s: n,
                            n: function() {
                                return i >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[i++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: n
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var r, o = !0,
                    s = !1;
                return {
                    s: function() {
                        a = t[Symbol.iterator]()
                    },
                    n: function() {
                        var t = a.next();
                        return o = t.done, t
                    },
                    e: function(t) {
                        s = !0, r = t
                    },
                    f: function() {
                        try {
                            o || null == a.return || a.return()
                        } finally {
                            if (s) throw r
                        }
                    }
                }
            }

            function m(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var a = 0, i = new Array(e); a < e; a++) i[a] = t[a];
                return i
            }

            function u(t) {
                s.a.config.errorHandler && s.a.config.errorHandler(t)
            }

            function f(t) {
                return t.then((function(t) {
                    return t.default || t
                }))
            }

            function h(t) {
                return t.$options && "function" == typeof t.$options.fetch && !t.$options.fetch.length
            }

            function g(t) {
                var e, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    i = t.$children || [],
                    n = d(i);
                try {
                    for (n.s(); !(e = n.n()).done;) {
                        var r = e.value;
                        r.$fetch ? a.push(r) : r.$children && g(r, a)
                    }
                } catch (t) {
                    n.e(t)
                } finally {
                    n.f()
                }
                return a
            }

            function b(t, e) {
                if (e || !t.options.__hasNuxtData) {
                    var a = t.options._originDataFn || t.options.data || function() {
                        return {}
                    };
                    t.options._originDataFn = a, t.options.data = function() {
                        var i = a.call(this, this);
                        return this.$ssrContext && (e = this.$ssrContext.asyncData[t.cid]), p(p({}, i), e)
                    }, t.options.__hasNuxtData = !0, t._Ctor && t._Ctor.options && (t._Ctor.options.data = t.options.data)
                }
            }

            function x(t) {
                return t.options && t._Ctor === t || (t.options ? (t._Ctor = t, t.extendOptions = t.options) : (t = s.a.extend(t))._Ctor = t, !t.options.name && t.options.__file && (t.options.name = t.options.__file)), t
            }

            function _(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "components";
                return Array.prototype.concat.apply([], t.matched.map((function(t, i) {
                    return Object.keys(t[a]).map((function(n) {
                        return e && e.push(i), t[a][n]
                    }))
                })))
            }

            function w(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return _(t, e, "instances")
            }

            function v(t, e) {
                return Array.prototype.concat.apply([], t.matched.map((function(t, a) {
                    return Object.keys(t.components).reduce((function(i, n) {
                        return t.components[n] ? i.push(e(t.components[n], t.instances[n], t, n, a)) : delete t.components[n], i
                    }), [])
                })))
            }

            function y(t, e) {
                return Promise.all(v(t, function() {
                    var t = Object(n.a)(regeneratorRuntime.mark((function t(a, i, n, r) {
                        var o, s;
                        return regeneratorRuntime.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if ("function" != typeof a || a.options) {
                                        t.next = 11;
                                        break
                                    }
                                    return t.prev = 1, t.next = 4, a();
                                case 4:
                                    a = t.sent, t.next = 11;
                                    break;
                                case 7:
                                    throw t.prev = 7, t.t0 = t.catch(1), t.t0 && "ChunkLoadError" === t.t0.name && "undefined" != typeof window && window.sessionStorage && (o = Date.now(), (!(s = parseInt(window.sessionStorage.getItem("nuxt-reload"))) || s + 6e4 < o) && (window.sessionStorage.setItem("nuxt-reload", o), window.location.reload(!0))), t.t0;
                                case 11:
                                    return n.components[r] = a = x(a), t.abrupt("return", "function" == typeof e ? e(a, i, n, r) : a);
                                case 13:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [1, 7]
                        ])
                    })));
                    return function(e, a, i, n) {
                        return t.apply(this, arguments)
                    }
                }()))
            }

            function k(t) {
                return O.apply(this, arguments)
            }

            function O() {
                return (O = Object(n.a)(regeneratorRuntime.mark((function t(e) {
                    return regeneratorRuntime.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (e) {
                                    t.next = 2;
                                    break
                                }
                                return t.abrupt("return");
                            case 2:
                                return t.next = 4, y(e);
                            case 4:
                                return t.abrupt("return", p(p({}, e), {}, {
                                    meta: _(e).map((function(t, a) {
                                        return p(p({}, t.options.meta), (e.matched[a] || {}).meta)
                                    }))
                                }));
                            case 5:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }

            function j(t, e) {
                return C.apply(this, arguments)
            }

            function C() {
                return (C = Object(n.a)(regeneratorRuntime.mark((function t(e, a) {
                    var n, r, s, c;
                    return regeneratorRuntime.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return e.context || (e.context = {
                                    isStatic: !1,
                                    isDev: !1,
                                    isHMR: !1,
                                    app: e,
                                    store: e.store,
                                    payload: a.payload,
                                    error: a.error,
                                    base: e.router.options.base,
                                    env: {}
                                }, a.req && (e.context.req = a.req), a.res && (e.context.res = a.res), a.ssrContext && (e.context.ssrContext = a.ssrContext), e.context.redirect = function(t, a, n) {
                                    if (t) {
                                        e.context._redirected = !0;
                                        var r = Object(i.a)(a);
                                        if ("number" == typeof t || "undefined" !== r && "object" !== r || (n = a || {}, a = t, r = Object(i.a)(a), t = 302), "object" === r && (a = e.router.resolve(a).route.fullPath), !/(^[.]{1,2}\/)|(^\/(?!\/))/.test(a)) throw a = Object(l.d)(a, n), window.location.replace(a), new Error("ERR_REDIRECT");
                                        e.context.next({
                                            path: a,
                                            query: n,
                                            status: t
                                        })
                                    }
                                }, e.context.nuxtState = window.__NUXT__), t.next = 3, Promise.all([k(a.route), k(a.from)]);
                            case 3:
                                n = t.sent, r = Object(o.a)(n, 2), s = r[0], c = r[1], a.route && (e.context.route = s), a.from && (e.context.from = c), e.context.next = a.next, e.context._redirected = !1, e.context._errored = !1, e.context.isHMR = !1, e.context.params = e.context.route.params || {}, e.context.query = e.context.route.query || {};
                            case 15:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }

            function S(t, e) {
                return !t.length || e._redirected || e._errored ? Promise.resolve() : T(t[0], e).then((function() {
                    return S(t.slice(1), e)
                }))
            }

            function T(t, e) {
                var a;
                return (a = 2 === t.length ? new Promise((function(a) {
                    t(e, (function(t, i) {
                        t && e.error(t), a(i = i || {})
                    }))
                })) : t(e)) && a instanceof Promise && "function" == typeof a.then ? a : Promise.resolve(a)
            }

            function P(t, e) {
                if ("hash" === e) return window.location.hash.replace(/^#\//, "");
                t = decodeURI(t).slice(0, -1);
                var a = decodeURI(window.location.pathname);
                t && a.startsWith(t) && (a = a.slice(t.length));
                var i = (a || "/") + window.location.search + window.location.hash;
                return Object(l.c)(i)
            }

            function $(t, e) {
                return function(t, e) {
                    for (var a = new Array(t.length), n = 0; n < t.length; n++) "object" === Object(i.a)(t[n]) && (a[n] = new RegExp("^(?:" + t[n].pattern + ")$", M(e)));
                    return function(e, i) {
                        for (var n = "", r = e || {}, o = (i || {}).pretty ? D : encodeURIComponent, s = 0; s < t.length; s++) {
                            var l = t[s];
                            if ("string" != typeof l) {
                                var c = r[l.name || "pathMatch"],
                                    p = void 0;
                                if (null == c) {
                                    if (l.optional) {
                                        l.partial && (n += l.prefix);
                                        continue
                                    }
                                    throw new TypeError('Expected "' + l.name + '" to be defined')
                                }
                                if (Array.isArray(c)) {
                                    if (!l.repeat) throw new TypeError('Expected "' + l.name + '" to not repeat, but received `' + JSON.stringify(c) + "`");
                                    if (0 === c.length) {
                                        if (l.optional) continue;
                                        throw new TypeError('Expected "' + l.name + '" to not be empty')
                                    }
                                    for (var d = 0; d < c.length; d++) {
                                        if (p = o(c[d]), !a[s].test(p)) throw new TypeError('Expected all "' + l.name + '" to match "' + l.pattern + '", but received `' + JSON.stringify(p) + "`");
                                        n += (0 === d ? l.prefix : l.delimiter) + p
                                    }
                                } else {
                                    if (p = l.asterisk ? z(c) : o(c), !a[s].test(p)) throw new TypeError('Expected "' + l.name + '" to match "' + l.pattern + '", but received "' + p + '"');
                                    n += l.prefix + p
                                }
                            } else n += l
                        }
                        return n
                    }
                }(function(t, e) {
                    var a, i = [],
                        n = 0,
                        r = 0,
                        o = "",
                        s = e && e.delimiter || "/";
                    for (; null != (a = R.exec(t));) {
                        var l = a[0],
                            c = a[1],
                            p = a.index;
                        if (o += t.slice(r, p), r = p + l.length, c) o += c[1];
                        else {
                            var d = t[r],
                                m = a[2],
                                u = a[3],
                                f = a[4],
                                h = a[5],
                                g = a[6],
                                b = a[7];
                            o && (i.push(o), o = "");
                            var x = null != m && null != d && d !== m,
                                _ = "+" === g || "*" === g,
                                w = "?" === g || "*" === g,
                                v = a[2] || s,
                                y = f || h;
                            i.push({
                                name: u || n++,
                                prefix: m || "",
                                delimiter: v,
                                optional: w,
                                repeat: _,
                                partial: x,
                                asterisk: Boolean(b),
                                pattern: y ? L(y) : b ? ".*" : "[^" + I(v) + "]+?"
                            })
                        }
                    }
                    r < t.length && (o += t.substr(r));
                    o && i.push(o);
                    return i
                }(t, e), e)
            }

            function A(t, e) {
                var a = {},
                    i = p(p({}, t), e);
                for (var n in i) String(t[n]) !== String(e[n]) && (a[n] = !0);
                return a
            }

            function E(t) {
                var e;
                if (t.message || "string" == typeof t) e = t.message || t;
                else try {
                    e = JSON.stringify(t, null, 2)
                } catch (a) {
                    e = "[".concat(t.constructor.name, "]")
                }
                return p(p({}, t), {}, {
                    message: e,
                    statusCode: t.statusCode || t.status || t.response && t.response.status || 500
                })
            }
            window.onNuxtReadyCbs = [], window.onNuxtReady = function(t) {
                window.onNuxtReadyCbs.push(t)
            };
            var R = new RegExp(["(\\\\.)", "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"), "g");

            function D(t, e) {
                var a = e ? /[?#]/g : /[/?#]/g;
                return encodeURI(t).replace(a, (function(t) {
                    return "%" + t.charCodeAt(0).toString(16).toUpperCase()
                }))
            }

            function z(t) {
                return D(t, !0)
            }

            function I(t) {
                return t.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
            }

            function L(t) {
                return t.replace(/([=!:$/()])/g, "\\$1")
            }

            function M(t) {
                return t && t.sensitive ? "" : "i"
            }

            function N(t, e, a) {
                t.$options[e] || (t.$options[e] = []), t.$options[e].includes(a) || t.$options[e].push(a)
            }
            var Y = l.b,
                U = (l.e, l.a);

            function W(t) {
                try {
                    window.history.scrollRestoration = t
                } catch (t) {}
            }
        },
        125: function(t, e, a) {
            var i = a(189);
            i.__esModule && (i = i.default), "string" == typeof i && (i = [
                [t.i, i, ""]
            ]), i.locals && (t.exports = i.locals);
            (0, a(33).default)("cdbc79ba", i, !0, {
                sourceMap: !1
            })
        },
        126: function(t, e, a) {
            var i = a(191);
            i.__esModule && (i = i.default), "string" == typeof i && (i = [
                [t.i, i, ""]
            ]), i.locals && (t.exports = i.locals);
            (0, a(33).default)("3191d5ad", i, !0, {
                sourceMap: !1
            })
        },
        127: function(t, e, a) {
            var i = a(193);
            i.__esModule && (i = i.default), "string" == typeof i && (i = [
                [t.i, i, ""]
            ]), i.locals && (t.exports = i.locals);
            (0, a(33).default)("5926aaca", i, !0, {
                sourceMap: !1
            })
        },
        128: function(t, e, a) {
            var i = a(195);
            i.__esModule && (i = i.default), "string" == typeof i && (i = [
                [t.i, i, ""]
            ]), i.locals && (t.exports = i.locals);
            (0, a(33).default)("35141896", i, !0, {
                sourceMap: !1
            })
        },
        129: function(t, e, a) {
            var i = a(197);
            i.__esModule && (i = i.default), "string" == typeof i && (i = [
                [t.i, i, ""]
            ]), i.locals && (t.exports = i.locals);
            (0, a(33).default)("2d89f433", i, !0, {
                sourceMap: !1
            })
        },
        130: function(t, e, a) {
            var i = a(199);
            i.__esModule && (i = i.default), "string" == typeof i && (i = [
                [t.i, i, ""]
            ]), i.locals && (t.exports = i.locals);
            (0, a(33).default)("238dd9d6", i, !0, {
                sourceMap: !1
            })
        },
        131: function(t, e, a) {
            var i = a(201);
            i.__esModule && (i = i.default), "string" == typeof i && (i = [
                [t.i, i, ""]
            ]), i.locals && (t.exports = i.locals);
            (0, a(33).default)("5955a628", i, !0, {
                sourceMap: !1
            })
        },
        132: function(t, e, a) {
            var i = a(203);
            i.__esModule && (i = i.default), "string" == typeof i && (i = [
                [t.i, i, ""]
            ]), i.locals && (t.exports = i.locals);
            (0, a(33).default)("20f4381e", i, !0, {
                sourceMap: !1
            })
        },
        147: function(t, e, a) {
            "use strict";
            var i = a(2),
                n = (a(24), a(20), a(1)),
                r = a(0),
                o = window.__NUXT__;

            function s() {
                if (!this._hydrated) return this.$fetch()
            }

            function l() {
                if ((t = this).$vnode && t.$vnode.elm && t.$vnode.elm.dataset && t.$vnode.elm.dataset.fetchKey) {
                    var t;
                    this._hydrated = !0, this._fetchKey = this.$vnode.elm.dataset.fetchKey;
                    var e = o.fetch[this._fetchKey];
                    if (e && e._error) this.$fetchState.error = e._error;
                    else
                        for (var a in e) n.a.set(this.$data, a, e[a])
                }
            }

            function c() {
                var t = this;
                return this._fetchPromise || (this._fetchPromise = p.call(this).then((function() {
                    delete t._fetchPromise
                }))), this._fetchPromise
            }

            function p() {
                return d.apply(this, arguments)
            }

            function d() {
                return (d = Object(i.a)(regeneratorRuntime.mark((function t() {
                    var e, a, i, n = this;
                    return regeneratorRuntime.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return this.$nuxt.nbFetching++, this.$fetchState.pending = !0, this.$fetchState.error = null, this._hydrated = !1, e = null, a = Date.now(), t.prev = 6, t.next = 9, this.$options.fetch.call(this);
                            case 9:
                                t.next = 15;
                                break;
                            case 11:
                                t.prev = 11, t.t0 = t.catch(6), e = Object(r.p)(t.t0);
                            case 15:
                                if (!((i = this._fetchDelay - (Date.now() - a)) > 0)) {
                                    t.next = 19;
                                    break
                                }
                                return t.next = 19, new Promise((function(t) {
                                    return setTimeout(t, i)
                                }));
                            case 19:
                                this.$fetchState.error = e, this.$fetchState.pending = !1, this.$fetchState.timestamp = Date.now(), this.$nextTick((function() {
                                    return n.$nuxt.nbFetching--
                                }));
                            case 23:
                            case "end":
                                return t.stop()
                        }
                    }), t, this, [
                        [6, 11]
                    ])
                })))).apply(this, arguments)
            }
            e.a = {
                beforeCreate: function() {
                    Object(r.l)(this) && (this._fetchDelay = "number" == typeof this.$options.fetchDelay ? this.$options.fetchDelay : 200, n.a.util.defineReactive(this, "$fetchState", {
                        pending: !1,
                        error: null,
                        timestamp: Date.now()
                    }), this.$fetch = c.bind(this), Object(r.a)(this, "created", l), Object(r.a)(this, "beforeMount", s))
                }
            }
        },
        152: function(t, e, a) {
            t.exports = a(153)
        },
        153: function(t, e, a) {
            "use strict";
            a.r(e),
                function(t) {
                    a(34), a(8), a(40);
                    var e = a(27),
                        i = a(2),
                        n = (a(112), a(163), a(170), a(172), a(24), a(21), a(11), a(13), a(63), a(49), a(41), a(42), a(20), a(43), a(1)),
                        r = a(141),
                        o = a(91),
                        s = a(0),
                        l = a(31),
                        c = a(147),
                        p = a(74);

                    function d(t, e) {
                        var a;
                        if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                            if (Array.isArray(t) || (a = function(t, e) {
                                    if (!t) return;
                                    if ("string" == typeof t) return m(t, e);
                                    var a = Object.prototype.toString.call(t).slice(8, -1);
                                    "Object" === a && t.constructor && (a = t.constructor.name);
                                    if ("Map" === a || "Set" === a) return Array.from(t);
                                    if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return m(t, e)
                                }(t)) || e && t && "number" == typeof t.length) {
                                a && (t = a);
                                var i = 0,
                                    n = function() {};
                                return {
                                    s: n,
                                    n: function() {
                                        return i >= t.length ? {
                                            done: !0
                                        } : {
                                            done: !1,
                                            value: t[i++]
                                        }
                                    },
                                    e: function(t) {
                                        throw t
                                    },
                                    f: n
                                }
                            }
                            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                        }
                        var r, o = !0,
                            s = !1;
                        return {
                            s: function() {
                                a = t[Symbol.iterator]()
                            },
                            n: function() {
                                var t = a.next();
                                return o = t.done, t
                            },
                            e: function(t) {
                                s = !0, r = t
                            },
                            f: function() {
                                try {
                                    o || null == a.return || a.return()
                                } finally {
                                    if (s) throw r
                                }
                            }
                        }
                    }

                    function m(t, e) {
                        (null == e || e > t.length) && (e = t.length);
                        for (var a = 0, i = new Array(e); a < e; a++) i[a] = t[a];
                        return i
                    }
                    n.a.__nuxt__fetch__mixin__ || (n.a.mixin(c.a), n.a.__nuxt__fetch__mixin__ = !0), n.a.component(p.a.name, p.a), n.a.component("NLink", p.a), t.fetch || (t.fetch = r.a);
                    var u, f, h = [],
                        g = window.__NUXT__ || {},
                        b = g.config || {};
                    b._app && (a.p = Object(s.v)(b._app.cdnURL, b._app.assetsPath)), Object.assign(n.a.config, {
                        silent: !0,
                        performance: !1
                    });
                    var x = n.a.config.errorHandler || console.error;

                    function _(t, e, a) {
                        for (var i = function(t) {
                                var i = function(t, e) {
                                    if (!t || !t.options || !t.options[e]) return {};
                                    var a = t.options[e];
                                    if ("function" == typeof a) {
                                        for (var i = arguments.length, n = new Array(i > 2 ? i - 2 : 0), r = 2; r < i; r++) n[r - 2] = arguments[r];
                                        return a.apply(void 0, n)
                                    }
                                    return a
                                }(t, "transition", e, a) || {};
                                return "string" == typeof i ? {
                                    name: i
                                } : i
                            }, n = a ? Object(s.g)(a) : [], r = Math.max(t.length, n.length), o = [], l = function(e) {
                                var a = Object.assign({}, i(t[e])),
                                    r = Object.assign({}, i(n[e]));
                                Object.keys(a).filter((function(t) {
                                    return void 0 !== a[t] && !t.toLowerCase().includes("leave")
                                })).forEach((function(t) {
                                    r[t] = a[t]
                                })), o.push(r)
                            }, c = 0; c < r; c++) l(c);
                        return o
                    }

                    function w(t, e, a) {
                        return v.apply(this, arguments)
                    }

                    function v() {
                        return (v = Object(i.a)(regeneratorRuntime.mark((function t(e, a, i) {
                            var n, r, o, l, c = this;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (this._routeChanged = Boolean(u.nuxt.err) || a.name !== e.name, this._paramChanged = !this._routeChanged && a.path !== e.path, this._queryChanged = !this._paramChanged && a.fullPath !== e.fullPath, this._diffQuery = this._queryChanged ? Object(s.i)(e.query, a.query) : [], (this._routeChanged || this._paramChanged) && this.$loading.start && !this.$loading.manual && this.$loading.start(), t.prev = 5, !this._queryChanged) {
                                            t.next = 12;
                                            break
                                        }
                                        return t.next = 9, Object(s.r)(e, (function(t, e) {
                                            return {
                                                Component: t,
                                                instance: e
                                            }
                                        }));
                                    case 9:
                                        n = t.sent, n.some((function(t) {
                                            var i = t.Component,
                                                n = t.instance,
                                                r = i.options.watchQuery;
                                            return !0 === r || (Array.isArray(r) ? r.some((function(t) {
                                                return c._diffQuery[t]
                                            })) : "function" == typeof r && r.apply(n, [e.query, a.query]))
                                        })) && this.$loading.start && !this.$loading.manual && this.$loading.start();
                                    case 12:
                                        i(), t.next = 26;
                                        break;
                                    case 15:
                                        if (t.prev = 15, t.t0 = t.catch(5), r = t.t0 || {}, o = r.statusCode || r.status || r.response && r.response.status || 500, l = r.message || "", !/^Loading( CSS)? chunk (\d)+ failed\./.test(l)) {
                                            t.next = 23;
                                            break
                                        }
                                        return window.location.reload(!0), t.abrupt("return");
                                    case 23:
                                        this.error({
                                            statusCode: o,
                                            message: l
                                        }), this.$nuxt.$emit("routeChanged", e, a, r), i();
                                    case 26:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this, [
                                [5, 15]
                            ])
                        })))).apply(this, arguments)
                    }

                    function y(t, e) {
                        return g.serverRendered && e && Object(s.b)(t, e), t._Ctor = t, t
                    }

                    function k(t) {
                        return Object(s.d)(t, function() {
                            var t = Object(i.a)(regeneratorRuntime.mark((function t(e, a, i, n, r) {
                                var o;
                                return regeneratorRuntime.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if ("function" != typeof e || e.options) {
                                                t.next = 4;
                                                break
                                            }
                                            return t.next = 3, e();
                                        case 3:
                                            e = t.sent;
                                        case 4:
                                            return o = y(Object(s.s)(e), g.data ? g.data[r] : null), i.components[n] = o, t.abrupt("return", o);
                                        case 7:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                            return function(e, a, i, n, r) {
                                return t.apply(this, arguments)
                            }
                        }())
                    }

                    function O(t, e, a) {
                        var i = this,
                            n = [],
                            r = !1;
                        if (void 0 !== a && (n = [], (a = Object(s.s)(a)).options.middleware && (n = n.concat(a.options.middleware)), t.forEach((function(t) {
                                t.options.middleware && (n = n.concat(t.options.middleware))
                            }))), n = n.map((function(t) {
                                return "function" == typeof t ? t : ("function" != typeof o.a[t] && (r = !0, i.error({
                                    statusCode: 500,
                                    message: "Unknown middleware " + t
                                })), o.a[t])
                            })), !r) return Object(s.o)(n, e)
                    }

                    function j(t, e, a) {
                        return C.apply(this, arguments)
                    }

                    function C() {
                        return (C = Object(i.a)(regeneratorRuntime.mark((function t(e, a, n) {
                            var r, o, c, p, m, f, g, b, x, w, v, y, k, j, C, S = this;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (!1 !== this._routeChanged || !1 !== this._paramChanged || !1 !== this._queryChanged) {
                                            t.next = 2;
                                            break
                                        }
                                        return t.abrupt("return", n());
                                    case 2:
                                        return !1, e === a ? (h = [], !0) : (r = [], h = Object(s.g)(a, r).map((function(t, e) {
                                            return Object(s.c)(a.matched[r[e]].path)(a.params)
                                        }))), o = !1, c = function(t) {
                                            a.path === t.path && S.$loading.finish && S.$loading.finish(), a.path !== t.path && S.$loading.pause && S.$loading.pause(), o || (o = !0, n(t))
                                        }, t.next = 8, Object(s.t)(u, {
                                            route: e,
                                            from: a,
                                            next: c.bind(this)
                                        });
                                    case 8:
                                        if (this._dateLastError = u.nuxt.dateErr, this._hadError = Boolean(u.nuxt.err), p = [], (m = Object(s.g)(e, p)).length) {
                                            t.next = 27;
                                            break
                                        }
                                        return t.next = 15, O.call(this, m, u.context);
                                    case 15:
                                        if (!o) {
                                            t.next = 17;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 17:
                                        return f = (l.a.options || l.a).layout, t.next = 20, this.loadLayout("function" == typeof f ? f.call(l.a, u.context) : f);
                                    case 20:
                                        return g = t.sent, t.next = 23, O.call(this, m, u.context, g);
                                    case 23:
                                        if (!o) {
                                            t.next = 25;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 25:
                                        return u.context.error({
                                            statusCode: 404,
                                            message: "This page could not be found"
                                        }), t.abrupt("return", n());
                                    case 27:
                                        return m.forEach((function(t) {
                                            t._Ctor && t._Ctor.options && (t.options.asyncData = t._Ctor.options.asyncData, t.options.fetch = t._Ctor.options.fetch)
                                        })), this.setTransitions(_(m, e, a)), t.prev = 29, t.next = 32, O.call(this, m, u.context);
                                    case 32:
                                        if (!o) {
                                            t.next = 34;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 34:
                                        if (!u.context._errored) {
                                            t.next = 36;
                                            break
                                        }
                                        return t.abrupt("return", n());
                                    case 36:
                                        return "function" == typeof(b = m[0].options.layout) && (b = b(u.context)), t.next = 40, this.loadLayout(b);
                                    case 40:
                                        return b = t.sent, t.next = 43, O.call(this, m, u.context, b);
                                    case 43:
                                        if (!o) {
                                            t.next = 45;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 45:
                                        if (!u.context._errored) {
                                            t.next = 47;
                                            break
                                        }
                                        return t.abrupt("return", n());
                                    case 47:
                                        x = !0, t.prev = 48, w = d(m), t.prev = 50, w.s();
                                    case 52:
                                        if ((v = w.n()).done) {
                                            t.next = 63;
                                            break
                                        }
                                        if ("function" == typeof(y = v.value).options.validate) {
                                            t.next = 56;
                                            break
                                        }
                                        return t.abrupt("continue", 61);
                                    case 56:
                                        return t.next = 58, y.options.validate(u.context);
                                    case 58:
                                        if (x = t.sent) {
                                            t.next = 61;
                                            break
                                        }
                                        return t.abrupt("break", 63);
                                    case 61:
                                        t.next = 52;
                                        break;
                                    case 63:
                                        t.next = 68;
                                        break;
                                    case 65:
                                        t.prev = 65, t.t0 = t.catch(50), w.e(t.t0);
                                    case 68:
                                        return t.prev = 68, w.f(), t.finish(68);
                                    case 71:
                                        t.next = 77;
                                        break;
                                    case 73:
                                        return t.prev = 73, t.t1 = t.catch(48), this.error({
                                            statusCode: t.t1.statusCode || "500",
                                            message: t.t1.message
                                        }), t.abrupt("return", n());
                                    case 77:
                                        if (x) {
                                            t.next = 80;
                                            break
                                        }
                                        return this.error({
                                            statusCode: 404,
                                            message: "This page could not be found"
                                        }), t.abrupt("return", n());
                                    case 80:
                                        return t.next = 82, Promise.all(m.map(function() {
                                            var t = Object(i.a)(regeneratorRuntime.mark((function t(i, n) {
                                                var r, o, l, c, d, m, f, g, b;
                                                return regeneratorRuntime.wrap((function(t) {
                                                    for (;;) switch (t.prev = t.next) {
                                                        case 0:
                                                            if (i._path = Object(s.c)(e.matched[p[n]].path)(e.params), i._dataRefresh = !1, r = i._path !== h[n], S._routeChanged && r ? i._dataRefresh = !0 : S._paramChanged && r ? (o = i.options.watchParam, i._dataRefresh = !1 !== o) : S._queryChanged && (!0 === (l = i.options.watchQuery) ? i._dataRefresh = !0 : Array.isArray(l) ? i._dataRefresh = l.some((function(t) {
                                                                    return S._diffQuery[t]
                                                                })) : "function" == typeof l && (k || (k = Object(s.h)(e)), i._dataRefresh = l.apply(k[n], [e.query, a.query]))), S._hadError || !S._isMounted || i._dataRefresh) {
                                                                t.next = 6;
                                                                break
                                                            }
                                                            return t.abrupt("return");
                                                        case 6:
                                                            return c = [], d = i.options.asyncData && "function" == typeof i.options.asyncData, m = Boolean(i.options.fetch) && i.options.fetch.length, f = d && m ? 30 : 45, d && ((g = Object(s.q)(i.options.asyncData, u.context)).then((function(t) {
                                                                Object(s.b)(i, t), S.$loading.increase && S.$loading.increase(f)
                                                            })), c.push(g)), S.$loading.manual = !1 === i.options.loading, m && ((b = i.options.fetch(u.context)) && (b instanceof Promise || "function" == typeof b.then) || (b = Promise.resolve(b)), b.then((function(t) {
                                                                S.$loading.increase && S.$loading.increase(f)
                                                            })), c.push(b)), t.abrupt("return", Promise.all(c));
                                                        case 14:
                                                        case "end":
                                                            return t.stop()
                                                    }
                                                }), t)
                                            })));
                                            return function(e, a) {
                                                return t.apply(this, arguments)
                                            }
                                        }()));
                                    case 82:
                                        o || (this.$loading.finish && !this.$loading.manual && this.$loading.finish(), n()), t.next = 99;
                                        break;
                                    case 85:
                                        if (t.prev = 85, t.t2 = t.catch(29), "ERR_REDIRECT" !== (j = t.t2 || {}).message) {
                                            t.next = 90;
                                            break
                                        }
                                        return t.abrupt("return", this.$nuxt.$emit("routeChanged", e, a, j));
                                    case 90:
                                        return h = [], Object(s.k)(j), "function" == typeof(C = (l.a.options || l.a).layout) && (C = C(u.context)), t.next = 96, this.loadLayout(C);
                                    case 96:
                                        this.error(j), this.$nuxt.$emit("routeChanged", e, a, j), n();
                                    case 99:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this, [
                                [29, 85],
                                [48, 73],
                                [50, 65, 68, 71]
                            ])
                        })))).apply(this, arguments)
                    }

                    function S(t, a) {
                        Object(s.d)(t, (function(t, a, i, r) {
                            return "object" !== Object(e.a)(t) || t.options || ((t = n.a.extend(t))._Ctor = t, i.components[r] = t), t
                        }))
                    }

                    function T(t) {
                        var e = Boolean(this.$options.nuxt.err);
                        this._hadError && this._dateLastError === this.$options.nuxt.dateErr && (e = !1);
                        var a = e ? (l.a.options || l.a).layout : t.matched[0].components.default.options.layout;
                        "function" == typeof a && (a = a(u.context)), this.setLayout(a)
                    }

                    function P(t) {
                        t._hadError && t._dateLastError === t.$options.nuxt.dateErr && t.error()
                    }

                    function $(t, e) {
                        var a = this;
                        if (!1 !== this._routeChanged || !1 !== this._paramChanged || !1 !== this._queryChanged) {
                            var i = Object(s.h)(t),
                                r = Object(s.g)(t),
                                o = !1;
                            n.a.nextTick((function() {
                                i.forEach((function(t, e) {
                                    if (t && !t._isDestroyed && t.constructor._dataRefresh && r[e] === t.constructor && !0 !== t.$vnode.data.keepAlive && "function" == typeof t.constructor.options.data) {
                                        var a = t.constructor.options.data.call(t);
                                        for (var i in a) n.a.set(t.$data, i, a[i]);
                                        o = !0
                                    }
                                })), o && window.$nuxt.$nextTick((function() {
                                    window.$nuxt.$emit("triggerScroll")
                                })), P(a)
                            }))
                        }
                    }

                    function A(t) {
                        window.onNuxtReadyCbs.forEach((function(e) {
                            "function" == typeof e && e(t)
                        })), "function" == typeof window._onNuxtLoaded && window._onNuxtLoaded(t), f.afterEach((function(e, a) {
                            n.a.nextTick((function() {
                                return t.$nuxt.$emit("routeChanged", e, a)
                            }))
                        }))
                    }

                    function E() {
                        return (E = Object(i.a)(regeneratorRuntime.mark((function t(e) {
                            var a, i, r, o, l;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return u = e.app, f = e.router, e.store, a = new n.a(u), i = g.layout || "default", t.next = 7, a.loadLayout(i);
                                    case 7:
                                        return a.setLayout(i), r = function() {
                                            a.$mount("#__nuxt"), f.afterEach(S), f.afterEach(T.bind(a)), f.afterEach($.bind(a)), n.a.nextTick((function() {
                                                A(a)
                                            }))
                                        }, t.next = 11, Promise.all(k(u.context.route));
                                    case 11:
                                        if (o = t.sent, a.setTransitions = a.$options.nuxt.setTransitions.bind(a), o.length && (a.setTransitions(_(o, f.currentRoute)), h = f.currentRoute.matched.map((function(t) {
                                                return Object(s.c)(t.path)(f.currentRoute.params)
                                            }))), a.$loading = {}, g.error && a.error(g.error), f.beforeEach(w.bind(a)), f.beforeEach(j.bind(a)), !g.serverRendered || !Object(s.n)(g.routePath, a.context.route.path)) {
                                            t.next = 20;
                                            break
                                        }
                                        return t.abrupt("return", r());
                                    case 20:
                                        return l = function() {
                                            S(f.currentRoute, f.currentRoute), T.call(a, f.currentRoute), P(a), r()
                                        }, t.next = 23, new Promise((function(t) {
                                            return setTimeout(t, 0)
                                        }));
                                    case 23:
                                        j.call(a, f.currentRoute, f.currentRoute, (function(t) {
                                            if (t) {
                                                var e = f.afterEach((function(t, a) {
                                                    e(), l()
                                                }));
                                                f.push(t, void 0, (function(t) {
                                                    t && x(t)
                                                }))
                                            } else l()
                                        }));
                                    case 24:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))).apply(this, arguments)
                    }
                    Object(l.b)(null, g.config).then((function(t) {
                        return E.apply(this, arguments)
                    })).catch(x)
                }.call(this, a(47))
        },
        188: function(t, e, a) {
            "use strict";
            a(125)
        },
        189: function(t, e, a) {
            var i = a(32)(!1);
            i.push([t.i, '@-webkit-keyframes notyf-fadeinup-data-v-db3b4c84{to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes notyf-fadeinup-data-v-db3b4c84{0%{opacity:0;-webkit-transform:translateY(25%);transform:translateY(25%)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes notyf-fadeinleft-data-v-db3b4c84{to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes notyf-fadeinleft-data-v-db3b4c84{0%{opacity:0;-webkit-transform:translateX(25%);transform:translateX(25%)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@-webkit-keyframes notyf-fadeoutright-data-v-db3b4c84{to{opacity:0;-webkit-transform:translateX(25%);transform:translateX(25%)}}@keyframes notyf-fadeoutright-data-v-db3b4c84{0%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}to{opacity:0;-webkit-transform:translateX(25%);transform:translateX(25%)}}@-webkit-keyframes notyf-fadeoutdown-data-v-db3b4c84{to{opacity:0;-webkit-transform:translateY(25%);transform:translateY(25%)}}@keyframes notyf-fadeoutdown-data-v-db3b4c84{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}to{opacity:0;-webkit-transform:translateY(25%);transform:translateY(25%)}}@-webkit-keyframes ripple-data-v-db3b4c84{to{-webkit-transform:scale(1) translateY(-45%) translateX(13%);transform:scale(1) translateY(-45%) translateX(13%)}}@keyframes ripple-data-v-db3b4c84{0%{-webkit-transform:scale(0) translateY(-45%) translateX(13%);transform:scale(0) translateY(-45%) translateX(13%)}to{-webkit-transform:scale(1) translateY(-45%) translateX(13%);transform:scale(1) translateY(-45%) translateX(13%)}}.notyf[data-v-db3b4c84]{position:fixed;top:0;left:0;height:100%;width:100%;color:#fff;z-index:9999;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;pointer-events:none;-webkit-box-sizing:border-box;box-sizing:border-box;padding:20px}.notyf__icon--error[data-v-db3b4c84],.notyf__icon--success[data-v-db3b4c84]{height:21px;width:21px;background:#fff;border-radius:50%;display:block;margin:0 auto;position:relative}.notyf__icon--error[data-v-db3b4c84]:after,.notyf__icon--error[data-v-db3b4c84]:before{content:"";background:currentColor;display:block;position:absolute;width:3px;border-radius:3px;left:9px;height:12px;top:5px}.notyf__icon--error[data-v-db3b4c84]:after{-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg)}.notyf__icon--error[data-v-db3b4c84]:before{-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.notyf__icon--success[data-v-db3b4c84]:after,.notyf__icon--success[data-v-db3b4c84]:before{content:"";background:currentColor;display:block;position:absolute;width:3px;border-radius:3px}.notyf__icon--success[data-v-db3b4c84]:after{height:6px;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);top:9px;left:6px}.notyf__icon--success[data-v-db3b4c84]:before{height:11px;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);top:5px;left:10px}.notyf__toast[data-v-db3b4c84]{display:block;overflow:hidden;pointer-events:auto;-webkit-animation:notyf-fadeinup-data-v-db3b4c84 .3s ease-in forwards;animation:notyf-fadeinup-data-v-db3b4c84 .3s ease-in forwards;-webkit-box-shadow:0 3px 7px 0 rgba(0,0,0,.25);box-shadow:0 3px 7px 0 rgba(0,0,0,.25);position:relative;padding:0 15px;border-radius:2px;max-width:300px;-webkit-transform:translateY(25%);-ms-transform:translateY(25%);transform:translateY(25%);-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-negative:0;flex-shrink:0}.notyf__toast--disappear[data-v-db3b4c84]{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);-webkit-animation:notyf-fadeoutdown-data-v-db3b4c84 .3s forwards;animation:notyf-fadeoutdown-data-v-db3b4c84 .3s forwards;-webkit-animation-delay:.25s;animation-delay:.25s}.notyf__toast--disappear .notyf__icon[data-v-db3b4c84],.notyf__toast--disappear .notyf__message[data-v-db3b4c84]{-webkit-animation:notyf-fadeoutdown-data-v-db3b4c84 .3s forwards;animation:notyf-fadeoutdown-data-v-db3b4c84 .3s forwards;opacity:1;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0)}.notyf__toast--disappear .notyf__dismiss[data-v-db3b4c84]{-webkit-animation:notyf-fadeoutright-data-v-db3b4c84 .3s forwards;animation:notyf-fadeoutright-data-v-db3b4c84 .3s forwards;opacity:1;-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0)}.notyf__toast--disappear .notyf__message[data-v-db3b4c84]{-webkit-animation-delay:.05s;animation-delay:.05s}.notyf__toast--upper[data-v-db3b4c84]{margin-bottom:20px}.notyf__toast--lower[data-v-db3b4c84]{margin-top:20px}.notyf__toast--dismissible .notyf__wrapper[data-v-db3b4c84]{padding-right:30px}.notyf__ripple[data-v-db3b4c84]{height:400px;width:400px;position:absolute;-webkit-transform-origin:bottom right;-ms-transform-origin:bottom right;transform-origin:bottom right;right:0;top:0;border-radius:50%;-webkit-transform:scale(0) translateY(-51%) translateX(13%);-ms-transform:scale(0) translateY(-51%) translateX(13%);transform:scale(0) translateY(-51%) translateX(13%);z-index:5;-webkit-animation:ripple-data-v-db3b4c84 .4s ease-out forwards;animation:ripple-data-v-db3b4c84 .4s ease-out forwards}.notyf__wrapper[data-v-db3b4c84]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-top:17px;padding-bottom:17px;padding-right:15px;border-radius:3px;position:relative;z-index:10}.notyf__icon[data-v-db3b4c84]{width:22px;text-align:center;font-size:1.3em;opacity:0;-webkit-animation:notyf-fadeinup-data-v-db3b4c84 .3s forwards;animation:notyf-fadeinup-data-v-db3b4c84 .3s forwards;-webkit-animation-delay:.3s;animation-delay:.3s;margin-right:13px}.notyf__dismiss[data-v-db3b4c84]{position:absolute;top:0;right:0;height:100%;width:26px;margin-right:-15px;-webkit-animation:notyf-fadeinleft-data-v-db3b4c84 .3s forwards;animation:notyf-fadeinleft-data-v-db3b4c84 .3s forwards;-webkit-animation-delay:.35s;animation-delay:.35s;opacity:0}.notyf__dismiss-btn[data-v-db3b4c84]{background-color:rgba(0,0,0,.25);border:none;cursor:pointer;-webkit-transition:opacity .2s ease,background-color .2s ease;-o-transition:opacity .2s ease,background-color .2s ease;transition:opacity .2s ease,background-color .2s ease;outline:none;opacity:.35;height:100%;width:100%}.notyf__dismiss-btn[data-v-db3b4c84]:after,.notyf__dismiss-btn[data-v-db3b4c84]:before{content:"";background:#fff;height:12px;width:2px;border-radius:3px;position:absolute;left:calc(50% - 1px);top:calc(50% - 5px)}.notyf__dismiss-btn[data-v-db3b4c84]:after{-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg)}.notyf__dismiss-btn[data-v-db3b4c84]:before{-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.notyf__dismiss-btn[data-v-db3b4c84]:hover{opacity:.7;background-color:rgba(0,0,0,.15)}.notyf__dismiss-btn[data-v-db3b4c84]:active{opacity:.8}.notyf__message[data-v-db3b4c84]{vertical-align:middle;position:relative;opacity:0;-webkit-animation:notyf-fadeinup-data-v-db3b4c84 .3s forwards;animation:notyf-fadeinup-data-v-db3b4c84 .3s forwards;-webkit-animation-delay:.25s;animation-delay:.25s;line-height:1.5em}@media only screen and (max-width:480px){.notyf[data-v-db3b4c84]{padding:0}.notyf__ripple[data-v-db3b4c84]{height:600px;width:600px;-webkit-animation-duration:.5s;animation-duration:.5s}.notyf__toast[data-v-db3b4c84]{max-width:none;border-radius:0;-webkit-box-shadow:0 -2px 7px 0 rgba(0,0,0,.13);box-shadow:0 -2px 7px 0 rgba(0,0,0,.13);width:100%}.notyf__dismiss[data-v-db3b4c84]{width:56px}}.p-error[data-v-db3b4c84]{padding-top:131px;padding-bottom:75px}.p-error__content[data-v-db3b4c84]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-bottom:61px}@media (max-width:768px){.p-error__content[data-v-db3b4c84]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-bottom:31px}}.p-error__text>h1[data-v-db3b4c84]{margin-bottom:39px}@media (max-width:768px){.p-error__text>h1[data-v-db3b4c84]{margin-bottom:26px}}.p-error__text>h2[data-v-db3b4c84]{font-size:1.75rem;margin-bottom:5px}@media (max-width:768px){.p-error__text>h2[data-v-db3b4c84]{font-size:1.5rem;margin-bottom:12px}}@media (max-width:576px){.p-error__text>h2[data-v-db3b4c84]{line-height:1.4}}.p-error__text>p[data-v-db3b4c84]{margin-bottom:41px}@media (max-width:768px){.p-error__text>p[data-v-db3b4c84]{font-size:.875rem;margin-bottom:35px}}.p-error__text>h3[data-v-db3b4c84],.p-error__text>ul[data-v-db3b4c84]{font-size:1rem}.p-error__text>ul>li[data-v-db3b4c84]:not(:last-child){margin-bottom:5px}.p-error__img[data-v-db3b4c84]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.p-error__img>img[data-v-db3b4c84]{max-width:508px}@media (max-width:992px){.p-error__img>img[data-v-db3b4c84]{max-width:100%}}@media (max-width:768px){.p-error__img[data-v-db3b4c84]{margin-top:-75px}.p-error__img>img[data-v-db3b4c84]{max-width:425px}}@media (max-width:576px){.p-error__img[data-v-db3b4c84]{margin-top:0;margin-left:-15px;margin-right:-15px}.p-error__img>img[data-v-db3b4c84]{max-width:100%}}.p-error__searchbar[data-v-db3b4c84]{margin-bottom:69px}@media (max-width:768px){.p-error__searchbar[data-v-db3b4c84]{margin-bottom:50px}}@media (max-width:768px){.p-error[data-v-db3b4c84]{padding-top:50px;padding-bottom:59px}}@media (max-width:576px){.p-error[data-v-db3b4c84]{padding-top:60px;padding-bottom:24px}}', ""]), t.exports = i
        },
        190: function(t, e, a) {
            "use strict";
            a(126)
        },
        191: function(t, e, a) {
            var i = a(32)(!1);
            i.push([t.i, ".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;-webkit-transition:width .1s,opacity .4s;-o-transition:width .1s,opacity .4s;transition:width .1s,opacity .4s;background-color:#e03f19;z-index:999999}", ""]), t.exports = i
        },
        192: function(t, e, a) {
            "use strict";
            a(127)
        },
        193: function(t, e, a) {
            var i = a(32)(!1);
            i.push([t.i, '/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}h1{font-size:2em;margin:.67em 0}hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}b{font-weight:bolder}code{font-family:monospace,monospace;font-size:1em}img{border-style:none}button,input,select{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}[type=checkbox],[type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}[hidden],template{display:none}*{-webkit-box-sizing:border-box;box-sizing:border-box;font-family:"Noto Sans TC",sans-serif}body,html{margin:0;padding:0;width:100%;font-size:16px;background-color:#fefefe}h1,h2,h3,h4{font-weight:500}h1{font-size:1.875rem}h2{font-size:1.25rem}h3{font-size:1.125rem}h4{font-size:1rem}h1,h2,h3,h4,p{margin:0}hr{display:block;height:1px;border:0;border-top:1px solid #000;margin:10px 0;padding:0}a{text-decoration:none}@-webkit-keyframes fade{0%{opacity:0}to{opacity:1}}@keyframes fade{0%{opacity:0}to{opacity:1}}.e-category{display:-webkit-box;display:-ms-flexbox;display:flex;margin-bottom:10px}.e-category__child,.e-category__main{padding-top:8px;padding-bottom:8px}.e-category__main{background-color:#e03f19;color:#fff;background:-o-linear-gradient(210deg,transparent 18px,#e03f19 0);background:linear-gradient(240deg,transparent 18px,#e03f19 0);padding-left:16px;padding-right:25px}.e-category__child{background-color:#fff;color:#000;margin-left:4px}.e-list{letter-spacing:.5px;color:#e03f19}.e-list li:not(:last-child){margin-bottom:10px}.e-list__link{color:#e03f19}.e-list__link:hover{color:rgba(224,63,25,.6)}.e-time{font-size:.875rem;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#939393}.m-amp-header__logo{width:99px}.m-amp-header__search{width:18px}.m-amp-footer__logo{width:128px;margin-bottom:35px}.m-amp-footer__icon{width:19px;margin-right:6px}.m-amp-footer__icon-youtube{width:23.75px}.m-amp-ad{width:100%}.m-amp-ad__wrapper{margin-bottom:15px;margin-top:15px;text-align:center;width:100%;padding-top:16px;padding-bottom:16px;background-color:#e2e2e2}.m-amp-section__hot{width:16px;display:inline-block}.m-amp-card__title{font-weight:400;letter-spacing:1.1px;line-height:1.38;font-size:1rem;color:#000}.m-amp-card__title--lg{font-size:1.25rem}.m-amp-card__content{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.m-amp-card__container,.m-amp-card__content{display:-webkit-box;display:-ms-flexbox;display:flex}.m-amp-card__container{width:100%;margin-bottom:15px}.m-amp-card__img{width:100%;min-width:136px;max-width:136px;margin-right:12px}.m-amp-card__clock{width:14px;margin-right:6px}.m-amp-card__hot{width:16px;margin-left:6px}.m-amp-sharebar__icon{width:35px;height:35px;border-radius:10px;margin-bottom:10px}.m-amp-article{letter-spacing:.5px}.m-amp-article__wrapper{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.m-amp-article__img{width:100%}.m-amp-article__participants:not(:first-child){margin-left:12px}.m-amp-article>img{max-width:100%;height:auto}.m-amp-article>p{font-size:18px;padding:.825rem 0;line-height:1.7}.m-amp-article a{font-size:1em;color:#000;border-bottom:1px solid #e03f19;padding:2px 4px}.m-amp-article a:hover{background-color:#e03f19;color:#fff}.m-amp-article>figure{margin:0;padding:.825rem 0}.m-amp-article>figure.image{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.m-amp-article>figure>img{max-width:100%}.m-amp-article>.article__embed{padding:.825rem 0}.m-amp-article .old{line-height:1.7}.m-amp-article .old img{max-width:100%;height:auto}.m-amp-article .old p{margin-bottom:30px}.m-amp-navbar{position:relative;background-color:#e03f19}.m-amp-navbar:before{content:"";display:block;position:absolute;height:100%;width:15%;max-width:214px;background-color:#000;background:-o-linear-gradient(210deg,transparent 30px,#000 0);background:linear-gradient(240deg,transparent 30px,#000 0)}@media (max-width:576px){.m-amp-navbar:before{width:25%;max-width:81px}}.m-amp-navbar__list{list-style:none;padding:0;color:#fff;width:65%;margin:0 auto}.m-amp-navbar__list,.m-amp-navbar__list__item{display:-webkit-box;display:-ms-flexbox;display:flex}.m-amp-navbar__list__item{position:relative;min-width:10%;padding:13px 0;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;white-space:nowrap;cursor:pointer}.m-amp-navbar__list__item:hover .m-navbar__arrow{display:block}.m-amp-navbar__list__item:hover .m-navbar__subnav{height:auto}@media (max-width:576px){.m-amp-navbar__list__item{position:static;min-width:33.33333%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0}.m-amp-navbar__list__item:active .m-navbar__arrow{display:block}.m-amp-navbar__list__item:active .m-navbar__subnav{height:auto}}.m-amp-navbar__list__link{color:#fff;width:100%;text-align:center}@media (max-width:576px){.m-amp-navbar__list{overflow-x:auto;overflow-y:visible}}.m-amp-navbar__arrow{display:none;position:absolute;bottom:0;border-top-width:0;border-top-style:solid;border-right:13px solid transparent;border-left:13px solid transparent;border-bottom:8px solid #c03514}.m-amp-navbar__control{display:none;position:absolute;top:50%;right:20px;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);padding:10px}@media (max-width:576px){.m-amp-navbar__control{display:block}}.m-amp--mle-1{-webkit-line-clamp:1}.m-amp--mle-1,.m-amp--mle-2{overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;white-space:normal}.m-amp--mle-2{-webkit-line-clamp:2}.m-amp--mle-3{-webkit-line-clamp:3}.m-amp--mle-3,.m-amp--mle-4{overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;white-space:normal}.m-amp--mle-4{-webkit-line-clamp:4}.m-amp--mle-5{overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:5;-webkit-box-orient:vertical;white-space:normal}.m-remark{position:relative;margin-top:47px;margin-bottom:30px;padding:25px;background-color:#eee;letter-spacing:.5px;border-radius:4px}.m-remark__author{text-align:right}.l-header{position:relative;z-index:100000}.l-header__head{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:10px 43px;background-color:#fff}.l-header__head>a{line-height:0}@media (max-width:992px){.l-header__head{padding-left:33px;padding-right:33px}}@media (max-width:576px){.l-header__head{padding-left:22px;padding-right:22px}}.l-header__logo-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.l-header__logo{width:143px;height:26px}.l-header__img{vertical-align:middle}@media (max-width:992px){.l-header__img{width:auto;height:22px}}@media (max-width:576px){.l-header__img{height:18px}}.l-header__second-logo{display:inline-block;width:115px;margin-left:15px;margin-top:1px}.l-header__second-logo>img{max-width:100%;height:auto}@media (max-width:576px){.l-header__second-logo{width:85px;margin-left:10px}}.l-header__search{cursor:pointer}.l-header__loading{margin-left:40px;margin-right:20px;width:20px;height:20px}.l-header__group{z-index:1}.l-header__group,.l-header__login{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.l-header__login{position:relative;margin-left:40px;margin-right:20px}.l-header__login--signup{color:#e03f19;font-size:1.125rem;font-weight:500;cursor:pointer;margin-left:5px}.l-header__login--signin{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.l-header__login--signin>p{color:#2e2e2e;margin-left:5px;font-size:1.125rem;cursor:pointer}.l-header__login--signin img{border-radius:50%;width:30px;height:30px}@media (max-width:576px){.l-header__login{margin-right:0;margin-left:10px}.l-header__login--signup{font-size:1rem}.l-header__login--signin>p{display:none}}.l-header__member-menu{list-style:none;margin:0;position:absolute;z-index:50;top:35px;left:auto;right:auto;width:115px;padding:10px 22px;background-color:#fff;border-radius:2px;-webkit-box-shadow:0 2px 4px 0 rgba(0,0,0,.5);box-shadow:0 2px 4px 0 rgba(0,0,0,.5);text-align:center}.l-header__member-menu>li{padding:5px 0;cursor:pointer}.l-header__member-menu a,.l-header__member-menu p{color:#6a6a6a;letter-spacing:1.5px}@media (max-width:576px){.l-header__member-menu{width:115px;left:auto;right:0;top:40px}}.l-header--fixed .l-header__content{position:fixed;top:-105px;left:0;width:100%;-webkit-transition:.3s;-o-transition:.3s;transition:.3s}.l-header--show .l-header__content{top:0}.l-footer{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#000;padding:53px 30px 43px}.l-footer__logo{margin-right:10px;margin-bottom:0}@media (max-width:992px){.l-footer__logo{margin-right:0;margin-bottom:35px}}.l-footer__content{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:30px}@media (max-width:992px){.l-footer__content{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-bottom:25px}}@media (max-width:576px){.l-footer__content{margin-bottom:10px}}.l-footer__list,.l-footer__social{list-style:none;padding:0;margin:0;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.l-footer__list li{margin-bottom:3px;margin-top:3px}@media (max-width:576px){.l-footer__list li{margin-bottom:10px}}.l-footer__list li:not(:last-child){border-right:1px solid #fff}.l-footer__list li:last-child{border-right-color:transparent}.l-footer__list img{vertical-align:bottom}.l-footer__item{display:block;color:#fff;padding:0 50px;font-size:1.125rem}@media (max-width:992px){.l-footer__item{padding-right:15px;padding-left:15px}}@media (max-width:576px){.l-footer__item{padding-right:14px;padding-left:14px;font-size:1rem}}.l-footer__social{margin-bottom:30px}.l-footer__social li{margin-bottom:3px;margin-top:3px}@media (max-width:576px){.l-footer__social li{margin-bottom:10px}}.l-footer__social .l-footer__item{padding:0 30px}@media (max-width:576px){.l-footer__social .l-footer__item{padding:0 10px}}.l-footer__icon-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#fff;font-size:1.125rem}@media (max-width:992px){.l-footer__icon-wrapper{font-size:1rem}}.l-footer__icon{height:21px;margin-right:11px}@media (max-width:992px){.l-footer__icon{height:19px;margin-right:6px}}.l-footer__hr{width:80%;border-color:#535353}@media (max-width:768px){.l-footer__hr{width:90%;width:100%}}.l-footer-copyright{max-width:490px;padding-top:25px;color:#a6a6a6;text-align:center;line-height:1.83;letter-spacing:.86px;font-size:.8rem}.l-footer-copyright__title{margin-bottom:10px;font-size:.875rem}@media (max-width:992px){.l-footer{padding-left:15px;padding-right:15px}}@media (max-width:576px){.l-footer{padding-top:40px;padding-bottom:70px}}.l-sidebar{max-width:300px}.l-sidebar-mobile{display:none}@media (max-width:992px){.l-sidebar-mobile{display:block}}@media (max-width:992px){.l-sidebar{display:none}}.l-section{margin-bottom:30px}.l-section__title{margin-bottom:15px}.l-section__highLight{color:#e03f19}.l-section .m-imgBlock-s:not(:last-child){margin-bottom:16px}.l-section__content .row{margin-right:-.46875rem;margin-left:-.46875rem}.l-section__content [class*=col-]{padding-right:.46875rem;padding-left:.46875rem}.l-section__content-list{-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.l-ad__wrapper,.l-section__content-list{display:-webkit-box;display:-ms-flexbox;display:flex}.l-ad__wrapper{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%}.l-ad__banner{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.l-ad__banner>div{max-width:728px;margin-left:auto;margin-right:auto}.l-ad__article{position:relative;width:100%;padding-top:25px;padding-bottom:25px;border-top:1px solid #cdcdcd;border-bottom:1px solid #cdcdcd;text-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.l-ad__article:before{content:"我是廣告，繼續往下看內文";width:auto;padding:0 7px;top:-13px;text-align:center;color:#a1a1a1;font-size:.875rem;line-height:25px;letter-spacing:1.2px;white-space:nowrap}.l-ad__article:after,.l-ad__article:before{display:block;height:25px;position:absolute;background-color:#fff}.l-ad__article:after{content:"";bottom:-13px;width:13px;padding-right:10px;padding-left:10px;background-image:url(https://static.ctwant.com/images/dist/ad_arrow_grey.svg);background-position:50%;background-repeat:no-repeat;background-size:15px}.l-ad__article-right{margin-left:15px}@media (max-width:576px){.l-ad__article-right{margin-left:0;margin-top:15px}}.l-ad__article-video{min-width:100%}@media (max-width:576px){.l-ad__article{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}}@media (max-width:576px){.l-ad-parallax__container{position:relative;overflow:hidden;height:520px;margin-left:-15px;margin-right:-15px;-webkit-clip-path:inset(0);clip-path:inset(0);clip:rect(0 auto auto 0)}.l-ad-parallax__container:before{content:"我是廣告，繼續往下看內文";top:0;z-index:10;background-image:url(https://static.ctwant.com/images/dist/ad_parallax_start.jpg);background-position:0;background-repeat:no-repeat;background-size:contain;text-align:center;color:#fff;font-size:.75rem;line-height:25px;letter-spacing:1.2px}.l-ad-parallax__container:after,.l-ad-parallax__container:before{display:block;position:absolute;width:100%;height:25px;background-color:#000}.l-ad-parallax__container:after{content:"";bottom:0;background-image:url(https://static.ctwant.com/images/dist/ad_parallax_end.jpg),url(https://static.ctwant.com/images/dist/ad_arrow_w.svg);background-position:100%,50%;background-repeat:no-repeat,no-repeat;background-size:contain,15px}.l-ad-parallax__container>.l-ad__article{position:fixed;top:50%;right:0;left:0;margin:0 auto;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0);background-color:transparent;border:none}.l-ad-parallax__container>.l-ad__article:after,.l-ad-parallax__container>.l-ad__article:before{content:none}}.l-ad__all-top{min-width:970px;min-height:250px}@media (max-width:768px){.l-ad__all-top{min-width:0;min-height:0}}.l-ad--fixed{position:fixed;bottom:0;left:0;z-index:95}.l-ad--show-pad{display:none}@media (max-width:768px){.l-ad--show-pad{display:-webkit-box;display:-ms-flexbox;display:flex}}.l-ad--hide{display:none}@media (max-width:992px){.l-ad--hide-laptop{display:none}}@media (max-width:768px){.l-ad--hide-pad{display:none}}.l-ad--hide-all-amp-units amp-ad,.l-ad--hide-all-units [id^=div-gpt-ad-]{display:none}.l-ad--sticky{position:-webkit-sticky;position:sticky;top:0;left:0}.p-article{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;padding:70px 0 100px}.p-article__title{margin-bottom:10px}@media (max-width:992px){.p-article__title{font-size:1.625rem}}@media (max-width:768px){.p-article__title{font-size:1.5rem}}.p-article__outsource-company{display:inline-block;margin-bottom:8px;color:#000;letter-spacing:.34px}@media (max-width:768px){.p-article__outsource-company{margin-bottom:6px}}.p-article-info{color:#939393;font-size:.875rem;margin-bottom:20px;letter-spacing:.3px}.p-article-info__author{position:relative;padding-right:8px;margin-right:10px}.p-article-info__author:after{content:"";position:absolute;right:0;top:50%;width:1px;height:15px;background-color:#939393;-webkit-transform:translateY(-48%);-ms-transform:translateY(-48%);transform:translateY(-48%)}@media (max-width:576px){.p-article-info__author{display:block;padding-right:0;margin-right:0;margin-bottom:6px}.p-article-info__author:after{display:none}}.p-article__body{max-width:810px;width:calc(100% - 330px);margin-right:30px}@media (max-width:992px){.p-article__body{margin-right:0;width:100%}}.p-article__img-box{margin-bottom:10px}@media (max-width:768px){.p-article__img-box{margin-left:-20px;margin-right:-20px}}@media (max-width:576px){.p-article__img-box{margin-left:-15px;margin-right:-15px}}.p-article__img{width:100%;height:auto;background-color:#bbb}.p-article__cover-graph{text-align:center}.p-article__content{position:relative}.p-article__content article{letter-spacing:.5px}.p-article__content article>img{max-width:100%;height:auto}.p-article__content article>p{font-size:1em;padding:.825rem 0;line-height:1.7}.p-article__content article a{font-size:1em;color:#000;border-bottom:1px solid #e03f19;padding:2px 4px;line-height:1.7}.p-article__content article a:hover{background-color:#e03f19;color:#fff}.p-article__content article>figure{margin:0;padding:.825rem 0}.p-article__content article>figure.image{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.p-article__content article>figure>img{max-width:100%}.p-article__content article>.article__embed{padding:.825rem 0}.p-article__content article .old{line-height:1.7}.p-article__content article .old img{max-width:100%;height:auto}.p-article__content article .old p{margin-bottom:30px}@media (max-width:768px){.p-article{max-width:none;padding-left:20px;padding-right:20px}}@media (max-width:576px){.p-article{padding:20px 15px 60px}}.m-amp-article>figure>figcaption,.p-article__content article>figure>figcaption,.p-article__cover-graph{margin-top:5px;color:#939393;font-size:.875rem}', ""]), t.exports = i
        },
        194: function(t, e, a) {
            "use strict";
            a(128)
        },
        195: function(t, e, a) {
            var i = a(32)(!1);
            i.push([t.i, '.m-adpopup{position:fixed;top:0;left:0;width:100%;height:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background-color:rgba(0,0,0,.3);z-index:1000002}.m-adpopup__content{position:relative}.l-ad__wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%}.l-ad__banner{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.l-ad__banner>div{max-width:728px;margin-left:auto;margin-right:auto}.l-ad__article{position:relative;width:100%;padding-top:25px;padding-bottom:25px;border-top:1px solid #cdcdcd;border-bottom:1px solid #cdcdcd;text-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.l-ad__article:before{content:"我是廣告，繼續往下看內文";width:auto;padding:0 7px;top:-13px;text-align:center;color:#a1a1a1;font-size:.875rem;line-height:25px;letter-spacing:1.2px;white-space:nowrap}.l-ad__article:after,.l-ad__article:before{display:block;height:25px;position:absolute;background-color:#fff}.l-ad__article:after{content:"";bottom:-13px;width:13px;padding-right:10px;padding-left:10px;background-image:url(https://static.ctwant.com/images/dist/ad_arrow_grey.svg);background-position:50%;background-repeat:no-repeat;background-size:15px}.l-ad__article-right{margin-left:15px}@media (max-width:576px){.l-ad__article-right{margin-left:0;margin-top:15px}}.l-ad__article-video{min-width:100%}@media (max-width:576px){.l-ad__article{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}}@media (max-width:576px){.l-ad-parallax__container{position:relative;overflow:hidden;height:520px;margin-left:-15px;margin-right:-15px;-webkit-clip-path:inset(0);clip-path:inset(0);clip:rect(0 auto auto 0)}.l-ad-parallax__container:before{content:"我是廣告，繼續往下看內文";top:0;z-index:10;background-image:url(https://static.ctwant.com/images/dist/ad_parallax_start.jpg);background-position:0;background-repeat:no-repeat;background-size:contain;text-align:center;color:#fff;font-size:.75rem;line-height:25px;letter-spacing:1.2px}.l-ad-parallax__container:after,.l-ad-parallax__container:before{display:block;position:absolute;width:100%;height:25px;background-color:#000}.l-ad-parallax__container:after{content:"";bottom:0;background-image:url(https://static.ctwant.com/images/dist/ad_parallax_end.jpg),url(https://static.ctwant.com/images/dist/ad_arrow_w.svg);background-position:100%,50%;background-repeat:no-repeat,no-repeat;background-size:contain,15px}.l-ad-parallax__container>.l-ad__article{position:fixed;top:50%;right:0;left:0;margin:0 auto;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0);background-color:transparent;border:none}.l-ad-parallax__container>.l-ad__article:after,.l-ad-parallax__container>.l-ad__article:before{content:none}}.l-ad__all-top{min-width:970px;min-height:250px}@media (max-width:768px){.l-ad__all-top{min-width:0;min-height:0}}.l-ad--fixed{position:fixed;bottom:0;left:0;z-index:95}.l-ad--show-pad{display:none}@media (max-width:768px){.l-ad--show-pad{display:-webkit-box;display:-ms-flexbox;display:flex}}.l-ad--hide{display:none}@media (max-width:992px){.l-ad--hide-laptop{display:none}}@media (max-width:768px){.l-ad--hide-pad{display:none}}.l-ad--hide-all-amp-units amp-ad,.l-ad--hide-all-units [id^=div-gpt-ad-]{display:none}.l-ad--sticky{position:-webkit-sticky;position:sticky;top:0;left:0}', ""]), t.exports = i
        },
        196: function(t, e, a) {
            "use strict";
            a(129)
        },
        197: function(t, e, a) {
            var i = a(32)(!1);
            i.push([t.i, ".m-GDPR{position:fixed;left:0;bottom:0;width:100%;padding:0 20px;z-index:100001}.m-GDPR__container{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;padding:18px 25px;background-color:hsla(0,0%,93.7%,.95)}@media (max-width:768px){.m-GDPR__container{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}}@media (max-width:576px){.m-GDPR__container{padding:15px 20px 13px}}.m-GDPR__content{color:#5b5b5b;font-weight:300;letter-spacing:1px;line-height:1.4}.m-GDPR__content>a{color:#5b5b5b;border-bottom:1px solid #5b5b5b}@media (max-width:768px){.m-GDPR__content{font-size:.875rem}}.m-GDPR__btn{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:absolute;top:0;right:0;-webkit-transform:translateY(-100%);-ms-transform:translateY(-100%);transform:translateY(-100%);background-color:#000;color:#fff;-webkit-clip-path:polygon(10% 0,100% 0,100% 100%,0 100%);clip-path:polygon(10% 0,100% 0,100% 100%,0 100%);padding:8px 10px 8px 22px;border-width:0;cursor:pointer}@media (max-width:768px){.m-GDPR__btn{font-size:.8rem}}.m-GDPR__close-icon{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:12px;height:12px;margin-right:6px;border-radius:50%;background-color:#fff}.m-GDPR__close-icon>img{width:8px;height:8px;vertical-align:middle}@media (max-width:768px){.m-GDPR{padding:0}}", ""]), t.exports = i
        },
        198: function(t, e, a) {
            "use strict";
            a(130)
        },
        199: function(t, e, a) {
            var i = a(32)(!1);
            i.push([t.i, ".m-notification{position:fixed;top:10px;left:100px;z-index:100010;padding:16px 20px;background-color:#fff;-webkit-box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 6px 0 rgba(0,0,0,.12);box-shadow:0 2px 5px 0 rgba(0,0,0,.16),0 2px 6px 0 rgba(0,0,0,.12)}@media (max-width:576px){.m-notification{top:0;left:0;width:100%}}.m-notification__title{font-size:1.125rem;line-height:1.5;font-weight:400;margin-bottom:8px}.m-notification__title img{width:100px}@media (max-width:576px){.m-notification__title{font-size:1rem;margin-bottom:5px}.m-notification__title img{width:79px}}.m-notification__content{line-height:1.5;margin-bottom:15px}@media (max-width:576px){.m-notification__content{margin-bottom:0;font-size:.875rem}}.m-notification__footer{text-align:right}.m-notification__btn{padding:8px 16px;background-color:#fff;cursor:pointer;font-size:1.125rem;border-radius:4px;display:inline-block}.m-notification__btn:nth-child(2){color:#fff;background-color:#e03f19}.m-notification__btn:nth-child(2):hover{background-color:rgba(224,63,25,.6)}.m-notification__btn:first-child{font-weight:300;color:#666;margin-right:15px}.m-notification__btn:first-child:hover{background:#f5f5f5}@media (max-width:576px){.m-notification__btn{padding:5px 12px;font-size:.875rem}.m-notification__btn:first-child{margin-right:10px}}", ""]), t.exports = i
        },
        200: function(t, e, a) {
            "use strict";
            a(131)
        },
        201: function(t, e, a) {
            var i = a(32)(!1);
            i.push([t.i, '@-webkit-keyframes leftRightMove-data-v-226bd1fe{0%{left:-5px}to{left:-9px}}@keyframes leftRightMove-data-v-226bd1fe{0%{left:-5px}to{left:-9px}}.m-stream[data-v-226bd1fe]{max-width:310px;width:100%;position:fixed;bottom:15px;left:15px;z-index:100000}@media (max-width:768px){.m-stream[data-v-226bd1fe]{max-width:240px;bottom:55px}}@media (max-width:576px){.m-stream[data-v-226bd1fe]{max-width:220px}}.m-stream--straight[data-v-226bd1fe]{max-width:190px}@media (max-width:768px){.m-stream--straight[data-v-226bd1fe]{max-width:165px}}@media (max-width:576px){.m-stream--straight[data-v-226bd1fe]{max-width:130px}}.m-stream__title[data-v-226bd1fe]{width:100%;position:relative;background-color:#c03514;padding:8px 30px;border-top-left-radius:40px}@media (max-width:768px){.m-stream__title[data-v-226bd1fe]{padding:5px 20px}}.m-stream__title[data-v-226bd1fe]:before{content:"";display:block;width:30px;height:23px;background-image:url(https://static.ctwant.com/images/dist/stream_finger-icon.svg);background-repeat:no-repeat;background-size:contain;position:absolute;top:2px;left:-5px;-webkit-animation-name:leftRightMove-data-v-226bd1fe;animation-name:leftRightMove-data-v-226bd1fe;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-direction:alternate;animation-direction:alternate}@media (max-width:768px){.m-stream__title[data-v-226bd1fe]:before{width:24px;height:19px;top:3.5px}}.m-stream__title>a[data-v-226bd1fe]{display:block;font-size:.875rem;color:#fff;-o-text-overflow:ellipsis;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}@media (max-width:768px){.m-stream__title>a[data-v-226bd1fe]{font-size:.8rem}}@media (max-width:576px){.m-stream__title>a[data-v-226bd1fe]{font-size:.75rem;line-height:16px}}.m-stream__title-close[data-v-226bd1fe]{width:30px;height:30px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:absolute;top:-7px;right:-7px;background-color:#000;border-radius:50%;border:none;cursor:pointer;padding:0;outline:none}@media (max-width:768px){.m-stream__title-close[data-v-226bd1fe]{width:25px;height:25px;top:-5px;right:-5px}}.m-stream__title-close>img[data-v-226bd1fe]{width:50%}.m-stream__live[data-v-226bd1fe]{width:100%;height:0;background-color:#fff;position:relative;border-bottom-left-radius:10px;border-bottom-right-radius:10px;overflow:hidden}.m-stream__live[data-v-226bd1fe] embed,.m-stream__live[data-v-226bd1fe] iframe{width:100%!important;height:100%!important;visibility:visible!important;position:absolute;top:0;left:0;-webkit-transition:left;-o-transition:left;transition:left;-webkit-transition-duration:1s;-o-transition-duration:1s;transition-duration:1s;z-index:1}', ""]), t.exports = i
        },
        202: function(t, e, a) {
            "use strict";
            a(132)
        },
        203: function(t, e, a) {
            var i = a(32)(!1);
            i.push([t.i, '@-webkit-keyframes notyf-fadeinup{to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@keyframes notyf-fadeinup{0%{opacity:0;-webkit-transform:translateY(25%);transform:translateY(25%)}to{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}}@-webkit-keyframes notyf-fadeinleft{to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes notyf-fadeinleft{0%{opacity:0;-webkit-transform:translateX(25%);transform:translateX(25%)}to{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}}@-webkit-keyframes notyf-fadeoutright{to{opacity:0;-webkit-transform:translateX(25%);transform:translateX(25%)}}@keyframes notyf-fadeoutright{0%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}to{opacity:0;-webkit-transform:translateX(25%);transform:translateX(25%)}}@-webkit-keyframes notyf-fadeoutdown{to{opacity:0;-webkit-transform:translateY(25%);transform:translateY(25%)}}@keyframes notyf-fadeoutdown{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}to{opacity:0;-webkit-transform:translateY(25%);transform:translateY(25%)}}@-webkit-keyframes ripple{to{-webkit-transform:scale(1) translateY(-45%) translateX(13%);transform:scale(1) translateY(-45%) translateX(13%)}}@keyframes ripple{0%{-webkit-transform:scale(0) translateY(-45%) translateX(13%);transform:scale(0) translateY(-45%) translateX(13%)}to{-webkit-transform:scale(1) translateY(-45%) translateX(13%);transform:scale(1) translateY(-45%) translateX(13%)}}.notyf{position:fixed;top:0;left:0;height:100%;width:100%;color:#fff;z-index:9999;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;pointer-events:none;-webkit-box-sizing:border-box;box-sizing:border-box;padding:20px}.notyf__icon--error,.notyf__icon--success{height:21px;width:21px;background:#fff;border-radius:50%;display:block;margin:0 auto;position:relative}.notyf__icon--error:after,.notyf__icon--error:before{content:"";background:currentColor;display:block;position:absolute;width:3px;border-radius:3px;left:9px;height:12px;top:5px}.notyf__icon--error:after{-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg)}.notyf__icon--error:before{-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.notyf__icon--success:after,.notyf__icon--success:before{content:"";background:currentColor;display:block;position:absolute;width:3px;border-radius:3px}.notyf__icon--success:after{height:6px;-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);top:9px;left:6px}.notyf__icon--success:before{height:11px;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);top:5px;left:10px}.notyf__toast{display:block;overflow:hidden;pointer-events:auto;-webkit-animation:notyf-fadeinup .3s ease-in forwards;animation:notyf-fadeinup .3s ease-in forwards;-webkit-box-shadow:0 3px 7px 0 rgba(0,0,0,.25);box-shadow:0 3px 7px 0 rgba(0,0,0,.25);position:relative;padding:0 15px;border-radius:2px;max-width:300px;-webkit-transform:translateY(25%);-ms-transform:translateY(25%);transform:translateY(25%);-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-negative:0;flex-shrink:0}.notyf__toast--disappear{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);-webkit-animation:notyf-fadeoutdown .3s forwards;animation:notyf-fadeoutdown .3s forwards;-webkit-animation-delay:.25s;animation-delay:.25s}.notyf__toast--disappear .notyf__icon,.notyf__toast--disappear .notyf__message{-webkit-animation:notyf-fadeoutdown .3s forwards;animation:notyf-fadeoutdown .3s forwards;opacity:1;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0)}.notyf__toast--disappear .notyf__dismiss{-webkit-animation:notyf-fadeoutright .3s forwards;animation:notyf-fadeoutright .3s forwards;opacity:1;-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0)}.notyf__toast--disappear .notyf__message{-webkit-animation-delay:.05s;animation-delay:.05s}.notyf__toast--upper{margin-bottom:20px}.notyf__toast--lower{margin-top:20px}.notyf__toast--dismissible .notyf__wrapper{padding-right:30px}.notyf__ripple{height:400px;width:400px;position:absolute;-webkit-transform-origin:bottom right;-ms-transform-origin:bottom right;transform-origin:bottom right;right:0;top:0;border-radius:50%;-webkit-transform:scale(0) translateY(-51%) translateX(13%);-ms-transform:scale(0) translateY(-51%) translateX(13%);transform:scale(0) translateY(-51%) translateX(13%);z-index:5;-webkit-animation:ripple .4s ease-out forwards;animation:ripple .4s ease-out forwards}.notyf__wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding-top:17px;padding-bottom:17px;padding-right:15px;border-radius:3px;position:relative;z-index:10}.notyf__icon{width:22px;text-align:center;font-size:1.3em;opacity:0;-webkit-animation:notyf-fadeinup .3s forwards;animation:notyf-fadeinup .3s forwards;-webkit-animation-delay:.3s;animation-delay:.3s;margin-right:13px}.notyf__dismiss{position:absolute;top:0;right:0;height:100%;width:26px;margin-right:-15px;-webkit-animation:notyf-fadeinleft .3s forwards;animation:notyf-fadeinleft .3s forwards;-webkit-animation-delay:.35s;animation-delay:.35s;opacity:0}.notyf__dismiss-btn{background-color:rgba(0,0,0,.25);border:none;cursor:pointer;-webkit-transition:opacity .2s ease,background-color .2s ease;-o-transition:opacity .2s ease,background-color .2s ease;transition:opacity .2s ease,background-color .2s ease;outline:none;opacity:.35;height:100%;width:100%}.notyf__dismiss-btn:after,.notyf__dismiss-btn:before{content:"";background:#fff;height:12px;width:2px;border-radius:3px;position:absolute;left:calc(50% - 1px);top:calc(50% - 5px)}.notyf__dismiss-btn:after{-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg)}.notyf__dismiss-btn:before{-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.notyf__dismiss-btn:hover{opacity:.7;background-color:rgba(0,0,0,.15)}.notyf__dismiss-btn:active{opacity:.8}.notyf__message{vertical-align:middle;position:relative;opacity:0;-webkit-animation:notyf-fadeinup .3s forwards;animation:notyf-fadeinup .3s forwards;-webkit-animation-delay:.25s;animation-delay:.25s;line-height:1.5em}@media only screen and (max-width:480px){.notyf{padding:0}.notyf__ripple{height:600px;width:600px;-webkit-animation-duration:.5s;animation-duration:.5s}.notyf__toast{max-width:none;border-radius:0;-webkit-box-shadow:0 -2px 7px 0 rgba(0,0,0,.13);box-shadow:0 -2px 7px 0 rgba(0,0,0,.13);width:100%}.notyf__dismiss{width:56px}}/*!\n * Bootstrap Grid v4.3.1 (https://getbootstrap.com/)\n * Copyright 2011-2019 The Bootstrap Authors\n * Copyright 2011-2019 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */html{-ms-overflow-style:scrollbar}.container{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media (min-width:576px){.container{max-width:540px}}@media (min-width:768px){.container{max-width:728px}}@media (min-width:992px){.container{max-width:960px}}@media (min-width:1200px){.container{max-width:1140px}}.row{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-right:-15px;margin-left:-15px}.col-6,.col-12,.col-lg-3,.col-lg-4,.col-md-3,.col-md-4,.col-md-6,.col-sm-4{position:relative;width:100%;padding-right:15px;padding-left:15px}.col-6{-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}.col-6,.col-12{-webkit-box-flex:0}.col-12{-ms-flex:0 0 100%;flex:0 0 100%;max-width:100%}@media (min-width:576px){.col-sm-4{-webkit-box-flex:0;-ms-flex:0 0 33.33333%;flex:0 0 33.33333%;max-width:33.33333%}}@media (min-width:768px){.col-md-3{-webkit-box-flex:0;-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-md-4{-webkit-box-flex:0;-ms-flex:0 0 33.33333%;flex:0 0 33.33333%;max-width:33.33333%}.col-md-6{-webkit-box-flex:0;-ms-flex:0 0 50%;flex:0 0 50%;max-width:50%}}@media (min-width:992px){.col-lg-3{-webkit-box-flex:0;-ms-flex:0 0 25%;flex:0 0 25%;max-width:25%}.col-lg-4{-webkit-box-flex:0;-ms-flex:0 0 33.33333%;flex:0 0 33.33333%;max-width:33.33333%}}.m-0{margin:0!important}.m-1{margin:1rem!important}.mt-1{margin-top:1rem!important}.mb-1{margin-bottom:1rem!important}.m-2{margin:1.25rem!important}.mt-2{margin-top:1.25rem!important}.mb-2{margin-bottom:1.25rem!important}.m-3{margin:2rem!important}.mt-3{margin-top:2rem!important}.m-4{margin:2.625rem!important}.mt-4{margin-top:2.625rem!important}.mb-4{margin-bottom:2.625rem!important}.m-5{margin:3.125rem!important}.m-6{margin:3.75rem!important}.mb-6{margin-bottom:3.75rem!important}.m-7{margin:4.375rem!important}.m-8{margin:5.25rem!important}.m-12{margin:7.5rem!important}.p-0{padding:0!important}.p-1{padding:1rem!important}.p-2{padding:1.25rem!important}.pt-2{padding-top:1.25rem!important}.p-3{padding:2rem!important}.p-4{padding:2.625rem!important}.p-5{padding:3.125rem!important}.p-6{padding:3.75rem!important}.p-7{padding:4.375rem!important}.p-8{padding:5.25rem!important}.p-12{padding:7.5rem!important}.m-n1,.m-n2,.m-n3,.m-n4,.m-n5,.m-n6,.m-n7,.m-n8,.m-n12{margin:-1rem!important}.m-auto{margin:auto!important}@media (min-width:576px){.m-sm-0{margin:0!important}.m-sm-1{margin:1rem!important}.m-sm-2{margin:1.25rem!important}.m-sm-3{margin:2rem!important}.m-sm-4{margin:2.625rem!important}.m-sm-5{margin:3.125rem!important}.m-sm-6{margin:3.75rem!important}.m-sm-7{margin:4.375rem!important}.m-sm-8{margin:5.25rem!important}.m-sm-12{margin:7.5rem!important}.p-sm-0{padding:0!important}.p-sm-1{padding:1rem!important}.p-sm-2{padding:1.25rem!important}.p-sm-3{padding:2rem!important}.p-sm-4{padding:2.625rem!important}.p-sm-5{padding:3.125rem!important}.p-sm-6{padding:3.75rem!important}.p-sm-7{padding:4.375rem!important}.p-sm-8{padding:5.25rem!important}.p-sm-12{padding:7.5rem!important}.m-sm-n1,.m-sm-n2,.m-sm-n3,.m-sm-n4,.m-sm-n5,.m-sm-n6,.m-sm-n7,.m-sm-n8,.m-sm-n12{margin:-1rem!important}.m-sm-auto{margin:auto!important}}@media (min-width:768px){.m-md-0{margin:0!important}.m-md-1{margin:1rem!important}.m-md-2{margin:1.25rem!important}.m-md-3{margin:2rem!important}.m-md-4{margin:2.625rem!important}.m-md-5{margin:3.125rem!important}.m-md-6{margin:3.75rem!important}.m-md-7{margin:4.375rem!important}.m-md-8{margin:5.25rem!important}.m-md-12{margin:7.5rem!important}.p-md-0{padding:0!important}.p-md-1{padding:1rem!important}.p-md-2{padding:1.25rem!important}.p-md-3{padding:2rem!important}.p-md-4{padding:2.625rem!important}.p-md-5{padding:3.125rem!important}.p-md-6{padding:3.75rem!important}.p-md-7{padding:4.375rem!important}.p-md-8{padding:5.25rem!important}.p-md-12{padding:7.5rem!important}.m-md-n1,.m-md-n2,.m-md-n3,.m-md-n4,.m-md-n5,.m-md-n6,.m-md-n7,.m-md-n8,.m-md-n12{margin:-1rem!important}.m-md-auto{margin:auto!important}}@media (min-width:992px){.m-lg-0{margin:0!important}.m-lg-1{margin:1rem!important}.m-lg-2{margin:1.25rem!important}.m-lg-3{margin:2rem!important}.m-lg-4{margin:2.625rem!important}.m-lg-5{margin:3.125rem!important}.m-lg-6{margin:3.75rem!important}.m-lg-7{margin:4.375rem!important}.m-lg-8{margin:5.25rem!important}.m-lg-12{margin:7.5rem!important}.p-lg-0{padding:0!important}.p-lg-1{padding:1rem!important}.p-lg-2{padding:1.25rem!important}.p-lg-3{padding:2rem!important}.p-lg-4{padding:2.625rem!important}.p-lg-5{padding:3.125rem!important}.p-lg-6{padding:3.75rem!important}.p-lg-7{padding:4.375rem!important}.p-lg-8{padding:5.25rem!important}.p-lg-12{padding:7.5rem!important}.m-lg-n1,.m-lg-n2,.m-lg-n3,.m-lg-n4,.m-lg-n5,.m-lg-n6,.m-lg-n7,.m-lg-n8,.m-lg-n12{margin:-1rem!important}.m-lg-auto{margin:auto!important}}@media (min-width:1200px){.m-xl-0{margin:0!important}.m-xl-1{margin:1rem!important}.m-xl-2{margin:1.25rem!important}.m-xl-3{margin:2rem!important}.m-xl-4{margin:2.625rem!important}.m-xl-5{margin:3.125rem!important}.m-xl-6{margin:3.75rem!important}.m-xl-7{margin:4.375rem!important}.m-xl-8{margin:5.25rem!important}.m-xl-12{margin:7.5rem!important}.p-xl-0{padding:0!important}.p-xl-1{padding:1rem!important}.p-xl-2{padding:1.25rem!important}.p-xl-3{padding:2rem!important}.p-xl-4{padding:2.625rem!important}.p-xl-5{padding:3.125rem!important}.p-xl-6{padding:3.75rem!important}.p-xl-7{padding:4.375rem!important}.p-xl-8{padding:5.25rem!important}.p-xl-12{padding:7.5rem!important}.m-xl-n1,.m-xl-n2,.m-xl-n3,.m-xl-n4,.m-xl-n5,.m-xl-n6,.m-xl-n7,.m-xl-n8,.m-xl-n12{margin:-1rem!important}.m-xl-auto{margin:auto!important}}.notyf{z-index:100001}/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}h1{font-size:2em;margin:.67em 0}hr{-webkit-box-sizing:content-box;box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}b{font-weight:bolder}code{font-family:monospace,monospace;font-size:1em}img{border-style:none}button,input,select{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}[type=checkbox],[type=radio]{-webkit-box-sizing:border-box;box-sizing:border-box;padding:0}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}[hidden],template{display:none}*{-webkit-box-sizing:border-box;box-sizing:border-box;font-family:"Noto Sans TC",sans-serif}body,html{margin:0;padding:0;width:100%;font-size:16px;background-color:#fefefe}h1,h2,h3,h4{font-weight:500}h1{font-size:1.875rem}h2{font-size:1.25rem}h3{font-size:1.125rem}h4{font-size:1rem}h1,h2,h3,h4,p{margin:0}hr{display:block;height:1px;border:0;border-top:1px solid #000;margin:10px 0;padding:0}a{text-decoration:none}@-webkit-keyframes fade{0%{opacity:0}to{opacity:1}}@keyframes fade{0%{opacity:0}to{opacity:1}}.e-tag{padding:5px 13px;border:1px solid #000;color:#000;border-radius:4px;margin-bottom:12px;cursor:pointer}.e-tag:hover{background-color:#e03f19;border-color:#e03f19;color:#fff}.e-category{display:-webkit-box;display:-ms-flexbox;display:flex;margin-bottom:10px}.e-category__child,.e-category__main{padding-top:8px;padding-bottom:8px}.e-category__main{background-color:#e03f19;color:#fff;background:-o-linear-gradient(210deg,transparent 18px,#e03f19 0);background:linear-gradient(240deg,transparent 18px,#e03f19 0);padding-left:16px;padding-right:25px}.e-category__child{background-color:#fff;color:#000;margin-left:4px}.e-list{letter-spacing:.5px;color:#e03f19}.e-list li:not(:last-child){margin-bottom:10px}.e-list__link{color:#e03f19}.e-list__link:hover{color:rgba(224,63,25,.6)}.e-btn{display:inline-block;text-align:center;vertical-align:middle;outline:none}.e-btn,.e-btn-more{border:1px solid transparent;cursor:pointer}.e-btn-more{width:100%;color:#fff;padding:7px 0;background-color:#000;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.e-btn-more:hover{background-color:#fff;color:#000;border-color:#000}.e-btn-more:hover .e-btn__arrow-r{fill:#000}.e-btn__arrow-r{width:9px;height:14px;margin-left:6px;fill:#fff}.e-btn-gotop{position:fixed;bottom:100px;right:40px;width:43px;height:43px;background-color:#000;-webkit-box-shadow:0 2px 6px 0 rgba(0,0,0,.12);box-shadow:0 2px 6px 0 rgba(0,0,0,.12);border-radius:50%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;z-index:100000}@media (max-width:768px){.e-btn-gotop{bottom:130px;right:20px}}@media (max-width:576px){.e-btn-gotop{bottom:150px}}.e-btn-ad-close{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:30px;height:30px;padding:0;color:#fff;background-color:#000;border-radius:50%}.e-btn-ad-close>img{width:13px}.e-btn-ad-close--fixbottom{position:absolute;top:-12px;right:5px}.e-btn-ad-close--popup{position:absolute;top:20px;right:5px;width:40px;height:40px;z-index:10}.e-btn-ad-close--popup>img{width:17px}.e-popover{position:fixed;max-width:356px;width:auto;height:auto;background-color:#fff;-webkit-box-shadow:0 2px 7px 0 rgba(0,0,0,.25);box-shadow:0 2px 7px 0 rgba(0,0,0,.25);padding:20px 15px;color:#000;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);border-radius:4px}.e-popover__header{font-size:1.125rem;font-weight:500;padding:3px}.e-popover__body{height:auto;padding:5px;font-size:1rem;line-height:1.56;letter-spacing:normal;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;white-space:normal}.e-popover__qr-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.e-popover:before{content:"";display:inline-block;position:absolute;width:0;height:0;left:-10px;top:43%;border-color:#fff #fff transparent transparent;border-style:solid;border-width:10px;-webkit-box-shadow:2px -2px 2px rgba(0,0,0,.11);box-shadow:2px -2px 2px rgba(0,0,0,.11);-webkit-transform:rotate(225deg);-ms-transform:rotate(225deg);transform:rotate(225deg)}@media (max-width:768px){.e-popover:before{left:auto;right:-9px;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}}.e-popover:after{content:"";width:50px;height:100%;position:absolute;top:0;left:-17px}.e-popover:hover{color:#e03f19}.e-time{font-size:.875rem;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#939393}.e-type{display:block;border-left:3px solid;padding-left:7px;margin-bottom:10px}.e-type--red{border-color:#e03f19}.e-type--green{border-color:#00b492}.e-type--bg{position:absolute;top:4px;left:0;background-color:rgba(0,0,0,.2);color:#fff;padding:3px 12px 3px 4px}.e-type--bg>span{margin-bottom:0}.e-video{position:relative;height:0;padding-bottom:56.25%}.e-video__wrapper{height:56.25%}.e-video>iframe{width:100%;height:100%;position:absolute;top:0;left:0}.e-video__img-container{position:relative}.e-video__icon{width:0;height:0;border-color:transparent transparent transparent #fff;border-style:solid;border-width:5px 0 5px 7px}.e-video__icon-wrapper{position:absolute;left:0;bottom:0;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:33px;height:24px;background-color:#e03f19}.m-navbar{position:relative;background-color:#e03f19}.m-navbar:before{content:"";display:block;position:absolute;height:100%;width:15%;max-width:214px;background-color:#000;background:-o-linear-gradient(210deg,transparent 30px,#000 0);background:linear-gradient(240deg,transparent 30px,#000 0)}@media (max-width:576px){.m-navbar:before{width:25%;max-width:81px}}.m-navbar__list{list-style:none;padding:0;color:#fff;width:65%;margin:0 auto}.m-navbar__list,.m-navbar__list__item{display:-webkit-box;display:-ms-flexbox;display:flex}.m-navbar__list__item{position:relative;min-width:11.11111%;padding:13px 0;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;white-space:nowrap;cursor:pointer}.m-navbar__list__item:hover .m-navbar__arrow{display:block}.m-navbar__list__item:hover .m-navbar__subnav{height:auto}@media (max-width:768px){.m-navbar__list__item{position:static;min-width:16.66667%;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0}.m-navbar__list__item:active .m-navbar__arrow{display:block}.m-navbar__list__item:active .m-navbar__subnav{height:auto}}@media (max-width:576px){.m-navbar__list__item{min-width:33.33333%}}.m-navbar__list__link{color:#fff;width:100%;text-align:center}@media (max-width:768px){.m-navbar__list{overflow-x:auto;overflow-y:visible}}.m-navbar__arrow{display:none;position:absolute;bottom:0;border-top-width:0;border-top-style:solid;border-right:13px solid transparent;border-left:13px solid transparent;border-bottom:8px solid #c03514}.m-navbar__arrow--hide{display:none!important}.m-navbar__subnav{list-style:none;padding:0;margin:0;height:0;overflow:hidden;width:100%;max-width:112px;text-align:center;background-color:#c03514;position:absolute;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%)}.m-navbar__subnav>li:not(:last-child){position:relative}.m-navbar__subnav>li:not(:last-child):after{content:"";position:absolute;left:50%;bottom:0;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);width:90%;border-bottom:1px solid #cf3a18}@media (max-width:768px){.m-navbar__subnav{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0)}}.m-navbar__subnav__item{display:block;width:100%;height:100%;padding:8px;color:#fff;text-align:center}.m-navbar__subnav__item:hover .m-navbar__subnav-link-span:after{width:130%}.m-navbar__subnav--hide{height:0!important}.m-navbar__subnav-link-span{position:relative}.m-navbar__subnav-link-span:after{content:"";position:absolute;bottom:0;left:50%;-webkit-transform:translateX(-50%);-ms-transform:translateX(-50%);transform:translateX(-50%);width:0;border-bottom:1px solid #fff;-webkit-transition:all .2s;-o-transition:all .2s;transition:all .2s}.m-navbar__control{display:none;position:absolute;top:50%;right:11%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);padding:10px}@media (max-width:768px){.m-navbar__control{display:block}}@media (max-width:576px){.m-navbar__control{right:20px}}.m-card{position:relative;margin-bottom:20px}.m-card-s{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%;margin-bottom:15px}.m-card-s__img-container{position:relative}.m-card-s__img{margin-right:12px;display:block}.m-card-s__type{top:5px;left:0;font-size:.875rem}.m-card-s__title{font-weight:400;letter-spacing:1.1px;line-height:1.38;font-size:1rem;color:#000}.m-card-s__title--lg{font-size:1.25rem}.m-card-s__content{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.m-card-s__article{font-weight:300;line-height:normal;letter-spacing:normal;color:#000}.m-card-s__footer{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.m-card-s__btn{background-color:#000;color:#fff;padding:4px 11px;letter-spacing:normal}.m-card-s:hover .m-card-s__title{color:#e03f19}@media (min-width:992px){.m-card-s{width:100%;max-width:none}}.m-card-s--sidebar .m-card-s__img{max-width:136px;height:auto}@media (min-width:768px){.m-card-s--sidebar{max-width:310px}}.m-card-s--hot .m-card-s__img{max-width:174px}@media (max-width:992px){.m-card-s--hot .m-card-s__img{max-width:135px}}.m-card-s--hot{margin-bottom:24px}@media (min-width:768px){.m-card-s--hot{max-width:343px}}@media (max-width:992px){.m-card-s--hot{margin-bottom:17px}}@media (min-width:768px){.m-card-s--full{width:100%}}@media (max-width:768px){.m-card-s--full{-ms-flex-wrap:wrap;flex-wrap:wrap}}@media (max-width:768px){.m-card-s--full .m-card-s__article,.m-card-s--full .m-card-s__img-container,.m-card-s--full .m-card-s__title{margin-bottom:10px}}.m-card-s--full .m-card-s__content{width:100%}@media (max-width:768px){.m-card-s--full .m-card-s__img-container{width:100%}}.m-card-s--full .m-card-s__img{max-width:258px}@media (max-width:768px){.m-card-s--full .m-card-s__img{max-width:none;width:100%;margin-right:0}}.m-card__title{font-weight:400;margin-top:5px;letter-spacing:1.1px;line-height:normal;font-size:1.125rem;color:#000}.m-card__title--m{font-size:1.5rem;margin-top:24px;margin-bottom:17px}.m-card__title--l{margin-top:22px;margin-bottom:7px;font-size:1.625rem}@media (max-width:992px){.m-card__title--l{font-size:1.5rem}}@media (max-width:576px){.m-card__title--l{font-size:1.125rem}}@media (max-width:992px){.m-card__title{font-size:1rem}}.m-card__content{line-height:normal;letter-spacing:normal;font-weight:300;color:#000}.m-card__type{top:6px;left:.46875rem;font-size:.875rem}.m-card__clock{margin-right:6px}.m-card__hot{width:16px;height:21px;margin-left:6px}.m-card__img{width:100%;vertical-align:bottom}.m-card--mle-1{-webkit-line-clamp:1}.m-card--mle-1,.m-card--mle-2{overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;white-space:normal}.m-card--mle-2{-webkit-line-clamp:2}.m-card--mle-3{-webkit-line-clamp:3}.m-card--mle-3,.m-card--mle-4{overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;white-space:normal}.m-card--mle-4{-webkit-line-clamp:4}.m-card--mle-5{overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:5;-webkit-box-orient:vertical;white-space:normal}@media (max-width:768px){.m-card--mle-p-2{overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;white-space:normal}}@media (max-width:576px){.m-card--mle-m-7{overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:7;-webkit-box-orient:vertical;white-space:normal}}.m-card:hover .m-card__title{color:#e03f19}.m-remark{position:relative;margin-top:47px;margin-bottom:30px;padding:25px;background-color:#eee;letter-spacing:.5px;border-radius:4px}.m-remark__author{text-align:right}.m-carousel-headline{margin-bottom:45px}.m-carousel-headline__title-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:absolute;left:0;bottom:1px;width:100%;color:#fff;background-color:rgba(0,0,0,.3);line-height:1.25;padding:20px}@media (max-width:576px){.m-carousel-headline__title-container{padding:6px 16px}}.m-carousel-headline__title{font-size:1.625rem;letter-spacing:normal;overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;white-space:normal}@media (max-width:768px){.m-carousel-headline__title{font-size:1.375rem}}@media (max-width:576px){.m-carousel-headline__title{font-size:1.125rem;font-weight:500}}@media (max-width:992px){.m-carousel-headline__img{max-width:100vw}}.m-carousel-headline__ad.swiper-slide{width:858px;height:452px}.m-carousel-headline__ad.swiper-slide>div{height:100%!important}.m-carousel-headline__ad.swiper-slide iframe{height:100%}.m-carousel-headline__item.swiper-slide{width:auto;height:auto;color:#000}.m-carousel-headline .swiper-slide-next,.m-carousel-headline .swiper-slide-prev{opacity:.3}@media (max-width:768px){.m-carousel-headline .swiper-slide-next,.m-carousel-headline .swiper-slide-prev{opacity:1}}.m-carousel-headline .swiper-button-next,.m-carousel-headline .swiper-button-prev{width:2.8125rem;height:2.8125rem;border-radius:50%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#fff;outline:none;-webkit-box-shadow:0 2px 6px 0 rgba(0,0,0,.12);box-shadow:0 2px 6px 0 rgba(0,0,0,.12)}.m-carousel-headline .swiper-button-next:hover img,.m-carousel-headline .swiper-button-prev:hover img{opacity:.5}@media (max-width:576px){.m-carousel-headline .swiper-button-next,.m-carousel-headline .swiper-button-prev{width:2.1875rem;height:2.1875rem}.m-carousel-headline .swiper-button-next img,.m-carousel-headline .swiper-button-prev img{height:12px}}.m-carousel-headline .swiper-button-next:after,.m-carousel-headline .swiper-button-prev:after{display:none}@media (max-width:768px){.m-carousel-headline__ad.swiper-slide{width:100vw;height:auto}}@media (max-width:576px){.m-carousel-headline{margin-bottom:22px}}.m-carousel-hotnews{max-width:100%;width:810px}.m-carousel-hotnews__image{width:100%}.m-carousel-hotnews .swiper-pagination-bullet-active{background-color:#fff}@media (max-width:992px){.m-carousel-hotnews{max-width:100%}}.m-carousel__category{position:absolute;right:0;top:0;padding:6px 20px;color:#fff;font-size:1rem;background-color:rgba(0,0,0,.7)}@media (max-width:576px){.m-carousel__category{font-size:.875rem;padding-left:17px;padding-right:17px}}.m-carousel--hide{opacity:0;overflow:hidden}.m-realtime__date{display:inline-block;background-color:#e03f19;padding:2px 8px;color:#fff;font-size:.875rem}.m-realtime__container{margin-top:5px}.m-realtime__container .row{margin-right:-.71875rem;margin-left:-.71875rem}.m-realtime__container [class*=col-]{padding-right:.71875rem;padding-left:.71875rem}.m-realtime__container .col-12:nth-child(4n+1) .m-realtime__item,.m-realtime__container .col-12:nth-child(4n+2) .m-realtime__item{background-color:#f0f0f0}@media (max-width:992px){.m-realtime__container{margin-top:15px}}@media (max-width:768px){.m-realtime__container .col-12:nth-child(2n) .m-realtime__item{background-color:#fff}.m-realtime__container .col-12:nth-child(odd) .m-realtime__item{background-color:#f0f0f0}}.m-realtime__content{overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;white-space:normal;min-height:54px;margin-bottom:11px}.m-realtime__item{padding:16px 19px;margin-bottom:15px;font-size:1.125rem;line-height:normal;letter-spacing:normal;color:#000}.m-realtime__item:hover .m-realtime__content{color:#e03f19}.m-realtime__bottom{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;line-height:1;min-height:1rem}.m-realtime__bottom>.e-type{margin-bottom:0}.m-realtime__time{margin-left:auto}.m-searchbar{margin-left:auto;margin-right:auto;width:100%;max-width:933px;border:1px solid #000;border-radius:8px;height:51px}.m-searchbar,.m-searchbar__input-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.m-searchbar__input-wrapper{width:93%;padding-left:24px;padding-right:24px}.m-searchbar__input-wrapper>input{width:80%;outline:none;border:none}@media (max-width:576px){.m-searchbar__input-wrapper>input{width:75%}}.m-searchbar__clear{margin-left:auto;color:#a0a0a0;cursor:pointer}.m-searchbar__btn{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-left:auto;background-color:#000;height:100%;width:68px;border-radius:0 8px 8px 0;cursor:pointer}@media (max-width:768px){.m-searchbar{height:45px}}.m-fontsize{display:inline-block;border:1px solid #000;font-size:0;margin-bottom:10px}.m-fontsize__item:first-child{border-right:1px solid #000}.m-fontsize__item:hover{background-color:#000;color:#fff}.m-fontsize__item{display:inline-block;font-size:1rem;text-align:center;width:50px;padding-top:6px;padding-bottom:6px;cursor:pointer;border:none;background-color:#fff}.m-login-popup{position:fixed;top:0;z-index:1;background:rgba(0,0,0,.5);width:100vw;height:100vh;overflow:auto}.m-login-popup__wrapper{position:absolute;z-index:1;padding:35px;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);border-radius:4px;background-color:#fff;width:750px}@media (max-width:768px){.m-login-popup__wrapper{max-width:345px;margin:0 15px;padding:25px}}@media (max-width:576px){.m-login-popup__wrapper{margin:0;max-width:320px}}.m-login-popup__head{text-align:right;margin-bottom:30px}.m-login-popup__head>img:first-child{cursor:pointer}@media (max-width:768px){.m-login-popup__head{margin-bottom:10px;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}}.m-login-popup__body{margin-bottom:50px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}@media (max-width:768px){.m-login-popup__body{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;max-width:271px;margin:auto}}.m-login-popup__img{width:48%;padding-right:50px;text-align:right}.m-login-popup__img>img{max-width:220px}@media (max-width:768px){.m-login-popup__img{display:none}}.m-login-popup__content{width:52%;padding-left:50px;border-left:1px solid #d6d6d6}@media (max-width:768px){.m-login-popup__content{width:100%;padding-left:0;border:none}}.m-login-popup__text{margin-bottom:40px;max-width:271px}.m-login-popup__text>p{text-align:center;margin-bottom:20px}.m-login-popup__text>p:first-child{font-size:1.125rem;color:#000;line-height:1.61;letter-spacing:.3px;font-weight:500}.m-login-popup__text>p:nth-child(2){font-size:1rem;color:#999;line-height:1.33;letter-spacing:.94px}@media (max-width:768px){.m-login-popup__text{margin-bottom:0}.m-login-popup__text>p:first-child{margin-bottom:10px}}.m-login-popup__btn{padding:10px;border-radius:25px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;color:#fff;font-size:1rem;letter-spacing:.37px;cursor:pointer}.m-login-popup__btn-Facebook{background-color:#3656a3;margin-bottom:10px}.m-login-popup__btn-Facebook:before{content:"";width:30px;height:24px;margin-right:15px;display:block;background-image:url(https://static.ctwant.com/images/dist/login_facebook_w.svg);background-repeat:no-repeat;background-position:50%}.m-login-popup__btn-Google{background-color:#dd4b39;margin-bottom:10px}.m-login-popup__btn-Google:before{content:"";width:30px;height:24px;margin-right:15px;display:block;background-image:url(https://static.ctwant.com/images/dist/login_google_w.svg);background-repeat:no-repeat;background-position:0}.m-login-popup__btn-Yahoo{background-color:#720e9e}.m-login-popup__btn-Yahoo:before{content:"";width:30px;height:24px;margin-right:15px;display:block;background-image:url(https://static.ctwant.com/images/dist/login_yahoo_w.svg);background-repeat:no-repeat;background-position:0}.m-login-popup__btn-wrapper{width:271px}@media (max-width:768px){.m-login-popup__btn-wrapper{width:auto;margin:30px 0}}.m-login-popup__footer{text-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.m-login-popup__footer label{font-size:1rem;color:#000;line-height:1;letter-spacing:.25px;margin-left:5px}.m-login-popup__footer a{font-size:1rem;color:#000;line-height:1.93;letter-spacing:.25px;font-weight:500}.m-login-popup__footer input[type=checkbox]{width:15px;height:15px;border:1px solid #000;border-radius:1px;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff}.m-login-popup__footer input[type=checkbox]:checked{background-image:url(https://static.ctwant.com/images/dist/login_check.svg);background-repeat:no-repeat;background-position:50%}@media (max-width:768px){.m-login-popup__footer{text-align:left;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;margin:0 10px}.m-login-popup__footer input[type=checkbox]{min-width:15px;margin-top:1px}}.l-default--default-font-family *{font-family:sans-serif}.l-header{position:relative;z-index:100000}.l-header__head{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:10px 43px;background-color:#fff}.l-header__head>a{line-height:0}@media (max-width:992px){.l-header__head{padding-left:33px;padding-right:33px}}@media (max-width:576px){.l-header__head{padding-left:22px;padding-right:22px}}.l-header__logo-container{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.l-header__logo{width:143px;height:26px}.l-header__img{vertical-align:middle}@media (max-width:992px){.l-header__img{width:auto;height:22px}}@media (max-width:576px){.l-header__img{height:18px}}.l-header__second-logo{display:inline-block;width:115px;margin-left:15px;margin-top:1px}.l-header__second-logo>img{max-width:100%;height:auto}@media (max-width:576px){.l-header__second-logo{width:85px;margin-left:10px}}.l-header__search{cursor:pointer}.l-header__loading{margin-left:40px;margin-right:20px;width:20px;height:20px}.l-header__group{z-index:1}.l-header__group,.l-header__login{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.l-header__login{position:relative;margin-left:40px;margin-right:20px}.l-header__login--signup{color:#e03f19;font-size:1.125rem;font-weight:500;cursor:pointer;margin-left:5px}.l-header__login--signin{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.l-header__login--signin>p{color:#2e2e2e;margin-left:5px;font-size:1.125rem;cursor:pointer}.l-header__login--signin img{border-radius:50%;width:30px;height:30px}@media (max-width:576px){.l-header__login{margin-right:0;margin-left:10px}.l-header__login--signup{font-size:1rem}.l-header__login--signin>p{display:none}}.l-header__member-menu{list-style:none;margin:0;position:absolute;z-index:50;top:35px;left:auto;right:auto;width:115px;padding:10px 22px;background-color:#fff;border-radius:2px;-webkit-box-shadow:0 2px 4px 0 rgba(0,0,0,.5);box-shadow:0 2px 4px 0 rgba(0,0,0,.5);text-align:center}.l-header__member-menu>li{padding:5px 0;cursor:pointer}.l-header__member-menu a,.l-header__member-menu p{color:#6a6a6a;letter-spacing:1.5px}@media (max-width:576px){.l-header__member-menu{width:115px;left:auto;right:0;top:40px}}.l-header--fixed .l-header__content{position:fixed;top:-105px;left:0;width:100%;-webkit-transition:.3s;-o-transition:.3s;transition:.3s}.l-header--show .l-header__content{top:0}.l-footer{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#000;padding:53px 30px 43px}.l-footer__logo{margin-right:10px;margin-bottom:0}@media (max-width:992px){.l-footer__logo{margin-right:0;margin-bottom:35px}}.l-footer__content{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-bottom:30px}@media (max-width:992px){.l-footer__content{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin-bottom:25px}}@media (max-width:576px){.l-footer__content{margin-bottom:10px}}.l-footer__list,.l-footer__social{list-style:none;padding:0;margin:0;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.l-footer__list li{margin-bottom:3px;margin-top:3px}@media (max-width:576px){.l-footer__list li{margin-bottom:10px}}.l-footer__list li:not(:last-child){border-right:1px solid #fff}.l-footer__list li:last-child{border-right-color:transparent}.l-footer__list img{vertical-align:bottom}.l-footer__item{display:block;color:#fff;padding:0 50px;font-size:1.125rem}@media (max-width:992px){.l-footer__item{padding-right:15px;padding-left:15px}}@media (max-width:576px){.l-footer__item{padding-right:14px;padding-left:14px;font-size:1rem}}.l-footer__social{margin-bottom:30px}.l-footer__social li{margin-bottom:3px;margin-top:3px}@media (max-width:576px){.l-footer__social li{margin-bottom:10px}}.l-footer__social .l-footer__item{padding:0 30px}@media (max-width:576px){.l-footer__social .l-footer__item{padding:0 10px}}.l-footer__icon-wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#fff;font-size:1.125rem}@media (max-width:992px){.l-footer__icon-wrapper{font-size:1rem}}.l-footer__icon{height:21px;margin-right:11px}@media (max-width:992px){.l-footer__icon{height:19px;margin-right:6px}}.l-footer__hr{width:80%;border-color:#535353}@media (max-width:768px){.l-footer__hr{width:90%;width:100%}}.l-footer-copyright{max-width:490px;padding-top:25px;color:#a6a6a6;text-align:center;line-height:1.83;letter-spacing:.86px;font-size:.8rem}.l-footer-copyright__title{margin-bottom:10px;font-size:.875rem}@media (max-width:992px){.l-footer{padding-left:15px;padding-right:15px}}@media (max-width:576px){.l-footer{padding-top:40px;padding-bottom:70px}}.l-sidebar{max-width:300px}.l-sidebar-mobile{display:none}@media (max-width:992px){.l-sidebar-mobile{display:block}}@media (max-width:992px){.l-sidebar{display:none}}.l-section{margin-bottom:30px}.l-section__title{margin-bottom:15px}.l-section__highLight{color:#e03f19}.l-section .m-imgBlock-s:not(:last-child){margin-bottom:16px}.l-section__content .row{margin-right:-.46875rem;margin-left:-.46875rem}.l-section__content [class*=col-]{padding-right:.46875rem;padding-left:.46875rem}.l-section__content-list{-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.l-ad__wrapper,.l-section__content-list{display:-webkit-box;display:-ms-flexbox;display:flex}.l-ad__wrapper{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%}.l-ad__banner{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.l-ad__banner>div{max-width:728px;margin-left:auto;margin-right:auto}.l-ad__article{position:relative;width:100%;padding-top:25px;padding-bottom:25px;border-top:1px solid #cdcdcd;border-bottom:1px solid #cdcdcd;text-align:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.l-ad__article:before{content:"我是廣告，繼續往下看內文";width:auto;padding:0 7px;top:-13px;text-align:center;color:#a1a1a1;font-size:.875rem;line-height:25px;letter-spacing:1.2px;white-space:nowrap}.l-ad__article:after,.l-ad__article:before{display:block;height:25px;position:absolute;background-color:#fff}.l-ad__article:after{content:"";bottom:-13px;width:13px;padding-right:10px;padding-left:10px;background-image:url(https://static.ctwant.com/images/dist/ad_arrow_grey.svg);background-position:50%;background-repeat:no-repeat;background-size:15px}.l-ad__article-right{margin-left:15px}@media (max-width:576px){.l-ad__article-right{margin-left:0;margin-top:15px}}.l-ad__article-video{min-width:100%}@media (max-width:576px){.l-ad__article{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}}@media (max-width:576px){.l-ad-parallax__container{position:relative;overflow:hidden;height:520px;margin-left:-15px;margin-right:-15px;-webkit-clip-path:inset(0);clip-path:inset(0);clip:rect(0 auto auto 0)}.l-ad-parallax__container:before{content:"我是廣告，繼續往下看內文";top:0;z-index:10;background-image:url(https://static.ctwant.com/images/dist/ad_parallax_start.jpg);background-position:0;background-repeat:no-repeat;background-size:contain;text-align:center;color:#fff;font-size:.75rem;line-height:25px;letter-spacing:1.2px}.l-ad-parallax__container:after,.l-ad-parallax__container:before{display:block;position:absolute;width:100%;height:25px;background-color:#000}.l-ad-parallax__container:after{content:"";bottom:0;background-image:url(https://static.ctwant.com/images/dist/ad_parallax_end.jpg),url(https://static.ctwant.com/images/dist/ad_arrow_w.svg);background-position:100%,50%;background-repeat:no-repeat,no-repeat;background-size:contain,15px}.l-ad-parallax__container>.l-ad__article{position:fixed;top:50%;right:0;left:0;margin:0 auto;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0);background-color:transparent;border:none}.l-ad-parallax__container>.l-ad__article:after,.l-ad-parallax__container>.l-ad__article:before{content:none}}.l-ad__all-top{min-width:970px;min-height:250px}@media (max-width:768px){.l-ad__all-top{min-width:0;min-height:0}}.l-ad--fixed{position:fixed;bottom:0;left:0;z-index:95}.l-ad--show-pad{display:none}@media (max-width:768px){.l-ad--show-pad{display:-webkit-box;display:-ms-flexbox;display:flex}}.l-ad--hide{display:none}@media (max-width:992px){.l-ad--hide-laptop{display:none}}@media (max-width:768px){.l-ad--hide-pad{display:none}}.l-ad--hide-all-amp-units amp-ad,.l-ad--hide-all-units [id^=div-gpt-ad-]{display:none}.l-ad--sticky{position:-webkit-sticky;position:sticky;top:0;left:0}.l-tags__wrapper{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.l-tags__item:not(:last-child){margin-right:5px}', ""]), t.exports = i
        },
        204: function(t, e, a) {
            "use strict";
            a.r(e), a.d(e, "state", (function() {
                return i
            })), a.d(e, "actions", (function() {
                return n
            })), a.d(e, "mutations", (function() {
                return r
            })), a.d(e, "getters", (function() {
                return o
            }));
            var i = function() {
                    return {
                        memberUrl: "https://member.ctwant.com",
                        redirectUrl: "",
                        user: null,
                        WIDTH_PAD: 768,
                        WIDTH_MOBILE: 576,
                        screenWidth: 0,
                        scrollTop: 0,
                        isPlayingStream: !1
                    }
                },
                n = {
                    getRedirectUrl: function(t, e) {
                        var a = t.state;
                        (0, t.commit)("SET_REDIRECT_URL", "".concat(a.memberUrl, "/login?redirect=").concat(location.origin).concat(e))
                    }
                },
                r = {
                    SET_REDIRECT_URL: function(t, e) {
                        t.redirectUrl = e
                    },
                    SET_SCREEN_WIDTH: function(t, e) {
                        t.screenWidth = e
                    },
                    SET_SCROLL_TOP: function(t, e) {
                        t.scrollTop = e
                    },
                    SET_IS_PLAYING_STREAM: function(t, e) {
                        t.isPlayingStream = e
                    }
                },
                o = {
                    WIDTH_PAD: function(t) {
                        return t.WIDTH_PAD
                    },
                    WIDTH_MOBILE: function(t) {
                        return t.WIDTH_MOBILE
                    },
                    screenWidth: function(t) {
                        return t.screenWidth
                    },
                    scrollTop: function(t) {
                        return t.scrollTop
                    },
                    isPlayingStream: function(t) {
                        return t.isPlayingStream
                    }
                }
        },
        205: function(t, e, a) {
            "use strict";
            a.r(e), a.d(e, "state", (function() {
                return n
            })), a.d(e, "actions", (function() {
                return r
            })), a.d(e, "mutations", (function() {
                return o
            })), a.d(e, "getters", (function() {
                return s
            }));
            var i = a(61),
                n = function() {
                    return {
                        adSlots: [],
                        realtimeAdSlots: [],
                        popupAdSlot: null,
                        isHideAd: "N",
                        isOtherAd: "N",
                        isPopupActive: !0,
                        isAlreadyRenderPopupAd: !1
                    }
                },
                r = {
                    registerGlobalSlots: function(t) {
                        var e = t.rootState,
                            a = t.commit;
                        window.googletag = window.googletag || {
                            cmd: []
                        }, googletag.cmd.push((function() {
                            var t, i = googletag.sizeMapping().addSize([0, 0], [
                                    [300, 250],
                                    [1, 1]
                                ]).addSize([728, 0], [
                                    [728, 90],
                                    [1, 1]
                                ]).addSize([970, 0], [
                                    [970, 250],
                                    [1, 1]
                                ]).build(),
                                n = [googletag.defineSlot("/21830015939/CTWant_all_300x250_1", [300, 250], "div-gpt-ad-1562662516421-0").addService(googletag.pubads()), googletag.defineSlot("/21830015939/scupio_CTWant_all_300x250_1_MB", [300, 250], "div-gpt-ad-1617869450309-0").addService(googletag.pubads()), googletag.defineSlot("/21830015939/CTWant_all_300x250_2", [300, 250], "div-gpt-ad-1562662605891-0").addService(googletag.pubads()), googletag.defineSlot("/21830015939/CTWant_all_300x600", [300, 600], "div-gpt-ad-1562662720262-0").setCollapseEmptyDiv(!0).addService(googletag.pubads()), googletag.defineSlot("/21830015939/CTWant_all_L2_728x90_320x100_RWD", [
                                    [320, 100],
                                    [728, 90],
                                    [1, 1]
                                ], "div-gpt-ad-1562662964306-0").addService(googletag.pubads()), googletag.defineSlot("/21830015939/CTWant_home_L1_970x90", [970, 90], "div-gpt-ad-1562665396118-0").addService(googletag.pubads()), googletag.defineSlot("/21830015939/ctwant_datawarkz_inimage", [1, 1], "div-gpt-ad-1620032974174-0").addService(googletag.pubads()), googletag.defineSlot("/21830015939/CTWant_article_300x250", [
                                    [1, 1],
                                    [300, 250]
                                ], "div-gpt-ad-1562665659288-0").addService(googletag.pubads()), googletag.defineSlot("/21830015939/CTWant_Pushdown_300x250", [300, 250], "div-gpt-ad-1563877821391-0").addService(googletag.pubads()), googletag.defineSlot("/21830015939/CTWant_Turntable", [1, 1], "div-gpt-ad-1563877894783-0").addService(googletag.pubads()), googletag.defineSlot("/21830015939/CTWant_fixbottom_320x50", [
                                    [1, 1],
                                    [320, 50]
                                ], "div-gpt-ad-1566899685984-0").addService(googletag.pubads()), googletag.defineSlot("/21830015939/CTWant_article_left_300x250", [
                                    [1, 1],
                                    [300, 250],
                                    [300, 600]
                                ], "div-gpt-ad-1566899414172-0").addService(googletag.pubads()), googletag.defineSlot("/21830015939/article_p4", [
                                    [1, 1],
                                    [300, 250],
                                    [320, 480],
                                    [640, 360]
                                ], "div-gpt-ad-1579516679912-0").addService(googletag.pubads()), googletag.defineSlot("/21830015939/fixbottom", [1, 1], "div-gpt-ad-1580803837464-0").addService(googletag.pubads()), googletag.defineSlot("/21830015939/article_extended_last", ["fluid"], "div-gpt-ad-1584587150345-0").addService(googletag.pubads()), googletag.defineSlot("/21830015939/article_end", [
                                    [1, 1],
                                    [300, 250]
                                ], "div-gpt-ad-1590467132070-0").addService(googletag.pubads()), googletag.defineSlot("/21830015939/index_carousel", ["fluid"], "div-gpt-ad-1594969509750-0").addService(googletag.pubads())];
                            t = e.screenWidth > e.WIDTH_PAD ? googletag.defineSlot("/21830015939/CTWant_all_top_970x250_300x250_RWD", [
                                [1, 1],
                                [300, 250],
                                [728, 90],
                                [970, 250]
                            ], "div-gpt-ad-1563334121951-0").defineSizeMapping(i).setCollapseEmptyDiv(!0).addService(googletag.pubads()) : googletag.defineSlot("/21830015939/CTWant_all_top_970x250_300x250_RWD", [
                                [1, 1],
                                [300, 250],
                                [728, 90],
                                [970, 250]
                            ], "div-gpt-ad-1563334121951-0").defineSizeMapping(i).setCollapseEmptyDiv(!0, !0).addService(googletag.pubads()), n.push(t), googletag.pubads().enableSingleRequest(), googletag.pubads().collapseEmptyDivs(!0), googletag.pubads().disableInitialLoad(), googletag.enableServices(), a("SET_AD_SLOTS", [].concat(n))
                        }))
                    },
                    registerAndDisplayAutoRefreshSlot: function() {
                        var t = googletag.defineSlot("/21830015939/ctwant_andbeyond", [1, 1], "div-gpt-ad-1610439124541-0").addService(googletag.pubads());
                        googletag.cmd.push((function() {
                            googletag.pubads().refresh([t])
                        }))
                    },
                    displayAd: function(t) {
                        var e = t.state,
                            a = t.commit,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                                isHideAd: "N",
                                isOtherAd: "N"
                            },
                            r = n.isHideAd,
                            o = n.isOtherAd;
                        a("SET_IS_HIDE_AD", r), "Y" === o ? googletag.pubads().setTargeting("adult", "Y") : "N" === o && "Y" === e.isOtherAd && googletag.pubads().clearTargeting(), a("SET_IS_OTHER_AD", o), googletag.cmd.push((function() {
                            googletag.pubads().refresh([].concat(Object(i.a)(e.adSlots), Object(i.a)(e.realtimeAdSlots)))
                        }))
                    },
                    registerAndDisplayPopupAd: function(t) {
                        var e = t.state,
                            a = t.commit,
                            i = t.rootState,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            r = n.type,
                            o = void 0 === r ? "其他" : r,
                            s = n.isHideAd,
                            l = void 0 === s ? "N" : s,
                            c = "ad-popup-1582014334406-0",
                            p = {
                                "娛樂": "/21830015939/CTWant_popup_entertainment_320x480",
                                "漂亮": "/21830015939/CTWant_popup_fashion_320x480",
                                "財經": "/21830015939/CTWant_popup_Finance_320x480",
                                "其他": "/21830015939/CTWant_popup_320x480"
                            };
                        googletag.pubads().addEventListener("slotRenderEnded", (function(t) {
                            t.slot.getSlotElementId() === c && t.isEmpty && a("SET_IS_POPUP_ACTIVE", !1)
                        })), "Y" !== l ? !e.isPopupActive || i.screenWidth > i.WIDTH_MOBILE || googletag.cmd.push((function() {
                            null !== e.popupAdSlot || e.isAlreadyRenderPopupAd || (a("SET_POPUP_AD_SLOTS", googletag.defineSlot(Object.prototype.hasOwnProperty.call(p, o) ? p[o] : p["其他"], [
                                [1, 1],
                                [300, 250],
                                [320, 480]
                            ], c).addService(googletag.pubads())), a("SET_IS_ALREADY_RENDER_POPUP_AD", !0), googletag.pubads().refresh([e.popupAdSlot]))
                        })) : a("SET_IS_POPUP_ACTIVE", !1)
                    }
                },
                o = {
                    SET_AD_SLOTS: function(t, e) {
                        t.adSlots = Object(i.a)(e)
                    },
                    SET_REALTIME_AD_SLOTS: function(t, e) {
                        t.realtimeAdSlots = e
                    },
                    SET_POPUP_AD_SLOTS: function(t, e) {
                        t.popupAdSlot = e
                    },
                    SET_IS_HIDE_AD: function(t, e) {
                        t.isHideAd = e
                    },
                    SET_IS_OTHER_AD: function(t, e) {
                        t.isOtherAd = e
                    },
                    SET_IS_POPUP_ACTIVE: function(t, e) {
                        t.isPopupActive = e
                    },
                    SET_IS_ALREADY_RENDER_POPUP_AD: function(t, e) {
                        t.isAlreadyRenderPopupAd = e
                    }
                },
                s = {
                    isPopupActive: function(t) {
                        return t.isPopupActive
                    }
                }
        },
        206: function(t, e, a) {
            "use strict";
            a.r(e), a.d(e, "state", (function() {
                return s
            })), a.d(e, "actions", (function() {
                return l
            })), a.d(e, "mutations", (function() {
                return c
            }));
            var i = a(148),
                n = a(2),
                r = (a(20), a(24), a(12)),
                o = a.n(r),
                s = function() {
                    return {
                        isLogin: null,
                        isGetUserData: !1,
                        idToken: null,
                        userData: {
                            address: "",
                            article_read_count: 0,
                            avatar: "",
                            birth: "",
                            city: "",
                            district: "",
                            email: "",
                            gender: "",
                            last_login_at: "",
                            name: "",
                            phone: "",
                            type: ""
                        }
                    }
                },
                l = {
                    login: function(t, e) {
                        var a = this;
                        return Object(n.a)(regeneratorRuntime.mark((function i() {
                            var n, r, s, l;
                            return regeneratorRuntime.wrap((function(i) {
                                for (;;) switch (i.prev = i.next) {
                                    case 0:
                                        return n = t.dispatch, r = t.commit, s = {
                                            headers: {
                                                "Firebase-idToken": e
                                            }
                                        }, i.prev = 2, i.next = 5, a.$axios.$get("".concat(a.$config.baseURL, "/users"), s);
                                    case 5:
                                        l = i.sent, n("checkIdToken", l.id_token), r("SET_IS_LOGIN", !0), r("SET_USER_DATA", l.data), r("SET_IS_GET_USER", !0), i.next = 16;
                                        break;
                                    case 12:
                                        i.prev = 12, i.t0 = i.catch(2), o.a.remove("idToken");
                                    case 16:
                                    case "end":
                                        return i.stop()
                                }
                            }), i, null, [
                                [2, 12]
                            ])
                        })))()
                    },
                    logout: function() {
                        o.a.remove("idToken")
                    },
                    sendArticleReadCount: function(t, e) {
                        var a = this;
                        return Object(n.a)(regeneratorRuntime.mark((function i() {
                            var n, r, o, s, l;
                            return regeneratorRuntime.wrap((function(i) {
                                for (;;) switch (i.prev = i.next) {
                                    case 0:
                                        return n = t.state, r = t.dispatch, i.prev = 1, o = {
                                            headers: {
                                                "Firebase-idToken": n.idToken
                                            }
                                        }, i.next = 5, a.$axios.$post("".concat(a.$config.baseURL, "/users/read_record/article/").concat(e), null, o);
                                    case 5:
                                        s = i.sent, l = s.data, r("checkIdToken", l.id_token), i.next = 13;
                                        break;
                                    case 10:
                                        i.prev = 10, i.t0 = i.catch(1);
                                    case 13:
                                    case "end":
                                        return i.stop()
                                }
                            }), i, null, [
                                [1, 10]
                            ])
                        })))()
                    },
                    getArticleReadCount: function(t) {
                        var e = this,
                            a = t.state,
                            i = t.dispatch,
                            r = t.commit;
                        return new Promise(function() {
                            var t = Object(n.a)(regeneratorRuntime.mark((function t(n, o) {
                                var s, l, c;
                                return regeneratorRuntime.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, s = {
                                                headers: {
                                                    "Firebase-idToken": a.idToken
                                                }
                                            }, t.next = 4, e.$axios.$get("".concat(e.$config.baseURL, "/users"), s);
                                        case 4:
                                            l = t.sent, c = l.data, i("checkIdToken", c.id_token), r("SET_USER_DATA", c), n(c), t.next = 14;
                                            break;
                                        case 11:
                                            t.prev = 11, t.t0 = t.catch(0), o(t.t0);
                                        case 14:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, null, [
                                    [0, 11]
                                ])
                            })));
                            return function(e, a) {
                                return t.apply(this, arguments)
                            }
                        }())
                    },
                    sendUserData: function(t, e) {
                        var a = this,
                            r = t.dispatch,
                            o = t.commit,
                            s = e.token,
                            l = Object(i.a)(e, ["token"]);
                        return new Promise(function() {
                            var t = Object(n.a)(regeneratorRuntime.mark((function t(e, i) {
                                var n, c, p;
                                return regeneratorRuntime.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, n = {
                                                headers: {
                                                    "Firebase-idToken": s
                                                }
                                            }, t.next = 4, a.$axios.$put("".concat(a.$config.baseURL, "/users"), l, n);
                                        case 4:
                                            c = t.sent, p = c.data, r("checkIdToken", p.id_token), o("SET_USER_DATA", p), e(p), t.next = 14;
                                            break;
                                        case 11:
                                            t.prev = 11, t.t0 = t.catch(0), i(t.t0);
                                        case 14:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t, null, [
                                    [0, 11]
                                ])
                            })));
                            return function(e, a) {
                                return t.apply(this, arguments)
                            }
                        }())
                    },
                    checkIdToken: function(t, e) {
                        var a = t.commit;
                        e && (a("SET_ID_TOKEN", e), e !== o.a.get("idToken", e) && o.a.set("idToken", e))
                    }
                },
                c = {
                    SET_IS_LOGIN: function(t, e) {
                        t.isLogin = e
                    },
                    SET_IS_GET_USER: function(t, e) {
                        t.isGetUserData = e
                    },
                    SET_ID_TOKEN: function(t, e) {
                        t.idToken = e
                    },
                    SET_USER_DATA: function(t, e) {
                        t.userData = null !== e ? Object.assign({}, e) : e
                    }
                }
        },
        31: function(t, e, a) {
            "use strict";
            a.d(e, "b", (function() {
                return fe
            })), a.d(e, "a", (function() {
                return T
            }));
            a(13), a(8), a(11), a(16), a(17);
            var i = a(2),
                n = a(4),
                r = (a(24), a(21), a(41), a(20), a(1)),
                o = a(5),
                s = a(72),
                l = a(92),
                c = a.n(l),
                p = a(48),
                d = a.n(p),
                m = a(93),
                u = a(30),
                f = a(0);
            "scrollRestoration" in window.history && (Object(f.u)("manual"), window.addEventListener("beforeunload", (function() {
                Object(f.u)("auto")
            })), window.addEventListener("load", (function() {
                Object(f.u)("manual")
            })));

            function h(t, e) {
                var a = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    e && (i = i.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), a.push.apply(a, i)
                }
                return a
            }

            function g(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? h(Object(a), !0).forEach((function(e) {
                        Object(n.a)(t, e, a[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : h(Object(a)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                    }))
                }
                return t
            }
            var b = function() {};
            r.a.use(m.a);
            var x = {
                mode: "history",
                base: "/",
                linkActiveClass: "nuxt-link-active",
                linkExactActiveClass: "nuxt-link-exact-active",
                scrollBehavior: function(t, e, a) {
                    var i = !1,
                        n = t !== e;
                    a ? i = a : n && function(t) {
                        var e = Object(f.g)(t);
                        if (1 === e.length) {
                            var a = e[0].options;
                            return !1 !== (void 0 === a ? {} : a).scrollToTop
                        }
                        return e.some((function(t) {
                            var e = t.options;
                            return e && e.scrollToTop
                        }))
                    }(t) && (i = {
                        x: 0,
                        y: 0
                    });
                    var r = window.$nuxt;
                    return (!n || t.path === e.path && t.hash !== e.hash) && r.$nextTick((function() {
                        return r.$emit("triggerScroll")
                    })), new Promise((function(e) {
                        r.$once("triggerScroll", (function() {
                            if (t.hash) {
                                var a = t.hash;
                                void 0 !== window.CSS && void 0 !== window.CSS.escape && (a = "#" + window.CSS.escape(a.substr(1)));
                                try {
                                    document.querySelector(a) && (i = {
                                        selector: a
                                    })
                                } catch (t) {}
                            }
                            e(i)
                        }))
                    }))
                },
                routes: [{
                    path: "/about",
                    component: function() {
                        return Object(f.m)(a.e(3).then(a.bind(null, 303)))
                    },
                    meta: {},
                    alias: ["/amp/about"],
                    name: "about"
                }, {
                    path: "/brands",
                    component: function() {
                        return Object(f.m)(a.e(6).then(a.bind(null, 304)))
                    },
                    meta: {},
                    alias: ["/amp/brands"],
                    name: "brands"
                }, {
                    path: "/contact",
                    component: function() {
                        return Object(f.m)(a.e(10).then(a.bind(null, 305)))
                    },
                    meta: {},
                    alias: ["/amp/contact"],
                    name: "contact"
                }, {
                    path: "/member",
                    component: function() {
                        return Object(f.m)(a.e(12).then(a.bind(null, 302)))
                    },
                    meta: {},
                    alias: ["/amp/member"],
                    name: "member"
                }, {
                    path: "/privacy",
                    component: function() {
                        return Object(f.m)(a.e(13).then(a.bind(null, 306)))
                    },
                    meta: {},
                    alias: ["/amp/privacy"],
                    name: "privacy"
                }, {
                    path: "/category/%E6%9C%80%E6%96%B0",
                    component: function() {
                        return Object(f.m)(a.e(14).then(a.bind(null, 307)))
                    },
                    meta: {},
                    alias: ["/amp/category/%E6%9C%80%E6%96%B0"],
                    name: "realtime"
                }, {
                    path: "/search",
                    component: function() {
                        return Object(f.m)(a.e(15).then(a.bind(null, 308)))
                    },
                    meta: {},
                    alias: ["/amp/search"],
                    name: "search"
                }, {
                    path: "/unsubscribe",
                    component: function() {
                        return Object(f.m)(a.e(16).then(a.bind(null, 309)))
                    },
                    meta: {},
                    alias: ["/amp/unsubscribe"],
                    name: "unsubscribe"
                }, {
                    path: "/video",
                    component: function() {
                        return Object(f.m)(a.e(18).then(a.bind(null, 310)))
                    },
                    meta: {},
                    alias: ["/amp/video"],
                    name: "video"
                }, {
                    path: "/brands/meridank",
                    component: function() {
                        return Object(f.m)(a.e(7).then(a.bind(null, 311)))
                    },
                    meta: {},
                    alias: ["/amp/brands/meridank"],
                    name: "brands-meridank"
                }, {
                    path: "/brands/sinyi",
                    component: function() {
                        return Object(f.m)(a.e(8).then(a.bind(null, 312)))
                    },
                    meta: {},
                    alias: ["/amp/brands/sinyi"],
                    name: "brands-sinyi"
                }, {
                    path: "/amp/article/:id?",
                    component: function() {
                        return Object(f.m)(a.e(4).then(a.bind(null, 313)))
                    },
                    meta: {
                        amp: !0
                    },
                    alias: [],
                    name: "amp-article-id"
                }, {
                    path: "/article/:id?",
                    component: function() {
                        return Object(f.m)(Promise.all([a.e(0), a.e(5)]).then(a.bind(null, 314)))
                    },
                    meta: {},
                    alias: ["/amp/article/:id?"],
                    name: "article-id"
                }, {
                    path: "/video/:id",
                    component: function() {
                        return Object(f.m)(Promise.all([a.e(0), a.e(17)]).then(a.bind(null, 315)))
                    },
                    meta: {},
                    alias: ["/amp/video/:id"],
                    name: "video-id"
                }, {
                    path: "/category/:mainCategory?/:subCategory?",
                    component: function() {
                        return Object(f.m)(a.e(9).then(a.bind(null, 316)))
                    },
                    meta: {},
                    alias: ["/amp/category/:mainCategory?/:subCategory?"],
                    name: "category-mainCategory-subCategory"
                }, {
                    path: "/",
                    component: function() {
                        return Object(f.m)(Promise.all([a.e(21), a.e(11)]).then(a.bind(null, 317)))
                    },
                    meta: {},
                    alias: ["/amp/"],
                    name: "index"
                }],
                fallback: !1
            };

            function _(t, e) {
                var a = e._app && e._app.basePath || x.base,
                    i = new m.a(g(g({}, x), {}, {
                        base: a
                    })),
                    n = i.push;
                i.push = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : b,
                        a = arguments.length > 2 ? arguments[2] : void 0;
                    return n.call(this, t, e, a)
                };
                var r = i.resolve.bind(i);
                return i.resolve = function(t, e, a) {
                    return "string" == typeof t && (t = Object(u.c)(t)), r(t, e, a)
                }, i
            }
            var w = {
                    name: "NuxtChild",
                    functional: !0,
                    props: {
                        nuxtChildKey: {
                            type: String,
                            default: ""
                        },
                        keepAlive: Boolean,
                        keepAliveProps: {
                            type: Object,
                            default: void 0
                        }
                    },
                    render: function(t, e) {
                        var a = e.parent,
                            i = e.data,
                            n = e.props,
                            r = a.$createElement;
                        i.nuxtChild = !0;
                        for (var o = a, s = a.$nuxt.nuxt.transitions, l = a.$nuxt.nuxt.defaultTransition, c = 0; a;) a.$vnode && a.$vnode.data.nuxtChild && c++, a = a.$parent;
                        i.nuxtChildDepth = c;
                        var p = s[c] || l,
                            d = {};
                        v.forEach((function(t) {
                            void 0 !== p[t] && (d[t] = p[t])
                        }));
                        var m = {};
                        y.forEach((function(t) {
                            "function" == typeof p[t] && (m[t] = p[t].bind(o))
                        }));
                        var u = m.beforeEnter;
                        if (m.beforeEnter = function(t) {
                                if (window.$nuxt.$nextTick((function() {
                                        window.$nuxt.$emit("triggerScroll")
                                    })), u) return u.call(o, t)
                            }, !1 === p.css) {
                            var f = m.leave;
                            (!f || f.length < 2) && (m.leave = function(t, e) {
                                f && f.call(o, t), o.$nextTick(e)
                            })
                        }
                        var h = r("routerView", i);
                        return n.keepAlive && (h = r("keep-alive", {
                            props: n.keepAliveProps
                        }, [h])), r("transition", {
                            props: d,
                            on: m
                        }, [h])
                    }
                },
                v = ["name", "mode", "appear", "css", "type", "duration", "enterClass", "leaveClass", "appearClass", "enterActiveClass", "enterActiveClass", "leaveActiveClass", "appearActiveClass", "enterToClass", "leaveToClass", "appearToClass"],
                y = ["beforeEnter", "enter", "afterEnter", "enterCancelled", "beforeLeave", "leave", "afterLeave", "leaveCancelled", "beforeAppear", "appear", "afterAppear", "appearCancelled"],
                k = (a(34), a(95));

            function O(t, e) {
                var a = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    e && (i = i.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), a.push.apply(a, i)
                }
                return a
            }

            function j(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? O(Object(a), !0).forEach((function(e) {
                        Object(n.a)(t, e, a[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : O(Object(a)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                    }))
                }
                return t
            }
            var C = {
                    components: {
                        LazyImage: a(96).a
                    },
                    mixins: [k.a],
                    data: function() {
                        return {
                            datas: null,
                            q: ""
                        }
                    },
                    computed: j(j({}, Object(o.b)(["WIDTH_PAD", "WIDTH_MOBILE", "screenWidth"])), {}, {
                        articleShower: function() {
                            var t = this,
                                e = this.WIDTH_PAD,
                                a = this.WIDTH_MOBILE;
                            return function(i, n) {
                                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : n,
                                    o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : n;
                                return t.screenWidth > e ? i.slice(0, n) : t.screenWidth > a ? i.slice(0, r) : i.slice(0, o)
                            }
                        },
                        selectImageSize: function() {
                            var t = this.screenWidth;
                            return function(e) {
                                return t <= this.WIDTH_PAD ? e.sm : e.md
                            }
                        }
                    }),
                    created: function() {
                        this.getData()
                    },
                    beforeMount: function() {
                        this.SET_IS_POPUP_ACTIVE(!1)
                    },
                    mounted: function() {},
                    methods: j(j({}, Object(o.c)("ad", ["SET_IS_POPUP_ACTIVE"])), {}, {
                        getData: function() {
                            var t = this;
                            return Object(i.a)(regeneratorRuntime.mark((function e() {
                                var a, i;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return a = t.$axios.defaults.baseURL, e.prev = 1, e.next = 4, t.$axios.$get(encodeURI("".concat(a, "/category/最新")));
                                        case 4:
                                            i = e.sent, t.datas = i.data, e.next = 11;
                                            break;
                                        case 8:
                                            e.prev = 8, e.t0 = e.catch(1);
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [1, 8]
                                ])
                            })))()
                        },
                        goSearch: function() {
                            "" !== this.q ? this.q.length >= 20 ? this.$notyf.error("搜尋關鍵字請少於 20 個字") : this.$router.push({
                                name: "search",
                                query: {
                                    q: this.q
                                }
                            }) : this.$notyf.error("請輸入搜尋關鍵字")
                        }
                    })
                },
                S = (a(188), a(3)),
                T = Object(S.a)(C, (function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "p-error container"
                    }, [t._m(0), t._v(" "), a("div", {
                        staticClass: "m-searchbar p-error__searchbar"
                    }, [a("div", {
                        staticClass: "m-searchbar__input-wrapper"
                    }, [a("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.q,
                            expression: "q"
                        }],
                        attrs: {
                            type: "text"
                        },
                        domProps: {
                            value: t.q
                        },
                        on: {
                            keyup: function(e) {
                                return !e.type.indexOf("key") && t._k(e.keyCode, "enter", 13, e.key, "Enter") ? null : t.goSearch(e)
                            },
                            input: function(e) {
                                e.target.composing || (t.q = e.target.value)
                            }
                        }
                    }), t._v(" "), a("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: "" !== t.q,
                            expression: "q !== ''"
                        }],
                        staticClass: "m-searchbar__clear",
                        on: {
                            click: function(e) {
                                t.q = ""
                            }
                        }
                    }, [t._v("\n        ⊗ 清除\n      ")])]), t._v(" "), a("div", {
                        staticClass: "m-searchbar__btn",
                        on: {
                            click: t.goSearch
                        }
                    }, [a("svg", {
                        attrs: {
                            width: "24px",
                            height: "24px",
                            viewBox: "0 0 24 24",
                            version: "1.1"
                        }
                    }, [a("g", {
                        attrs: {
                            id: "首頁",
                            stroke: "none",
                            "stroke-width": "1",
                            fill: "none",
                            "fill-rule": "evenodd"
                        }
                    }, [a("g", {
                        attrs: {
                            id: "首頁＿web(1440)",
                            transform: "translate(-1325.000000, -274.000000)",
                            fill: "#ffffff",
                            "fill-rule": "nonzero"
                        }
                    }, [a("g", {
                        attrs: {
                            id: "search-(1)",
                            transform: "translate(1325.000000, 274.000000)"
                        }
                    }, [a("path", {
                        attrs: {
                            id: "Shape",
                            d: "M23.6350957,21.8601973 L17.7186852,15.9193905 C19.2398983,14.173507 20.0733799,11.9768283 20.0733799,9.68999052 C20.0733799,4.34701401 15.5708335,0 10.03669,0 C4.50254639,0 0,4.34701401 0,9.68999052 C0,15.032967 4.50254639,19.379981 10.03669,19.379981 C12.1142848,19.379981 14.094131,18.7749886 15.7868406,17.6265141 L21.748198,23.6124004 C21.9973698,23.8622336 22.3325079,24 22.6916469,24 C23.0315852,24 23.3540684,23.8748727 23.5988764,23.6473686 C24.1190387,23.164133 24.1356211,22.3628129 23.6350957,21.8601973 Z M10.03669,2.52782361 C14.1272957,2.52782361 17.455113,5.74068743 17.455113,9.68999052 C17.455113,13.6392936 14.1272957,16.8521574 10.03669,16.8521574 C5.94608424,16.8521574 2.61826695,13.6392936 2.61826695,9.68999052 C2.61826695,5.74068743 5.94608424,2.52782361 10.03669,2.52782361 Z"
                        }
                    })])])])])])]), t._v(" "), a("div", {
                        staticClass: "l-section"
                    }, [a("h2", {
                        staticClass: "l-section__title-with-hr"
                    }, [t._v("\n      猜你喜歡\n    ")]), t._v(" "), a("hr"), t._v(" "), a("client-only", [null !== t.datas ? a("div", {
                        staticClass: "l-section__content"
                    }, [a("div", {
                        staticClass: "row"
                    }, t._l(t.articleShower(t.datas.articles.items, 4, 3, 2), (function(e) {
                        return a("nuxt-link", {
                            key: e.article_id,
                            staticClass: "m-card col-lg-3 col-md-4 col-6",
                            attrs: {
                                to: "/article/" + e.article_id
                            }
                        }, ["general" !== e.type ? a("div", {
                            staticClass: "e-type--bg m-card__type"
                        }, [a("span", {
                            staticClass: "e-type",
                            class: t.articleType(e).style
                        }, [t._v("\n                " + t._s(t.articleType(e).text) + "\n              ")])]) : t._e(), t._v(" "), a("LazyImage", {
                            staticClass: "m-card__img",
                            attrs: {
                                src: t.selectImageSize(e.cover),
                                alt: e.title
                            }
                        }), t._v(" "), a("h3", {
                            staticClass: "m-card__title m-card--mle-2"
                        }, [t._v("\n              " + t._s(e.title) + "\n            ")])], 1)
                    })), 1)]) : t._e()])], 1)])
                }), [function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "p-error__content"
                    }, [a("div", {
                        staticClass: "p-error__text"
                    }, [a("h1", [a("img", {
                        attrs: {
                            src: "https://static.ctwant.com/images/dist/404-font.svg",
                            alt: "404"
                        }
                    })]), t._v(" "), a("h2", [t._v("\n        您所查看的頁面無法瀏覽或已經不存在\n      ")]), t._v(" "), a("p", [t._v("\n        Error code: 404\n      ")]), t._v(" "), a("h3", [t._v("\n        您可以試試：\n      ")]), t._v(" "), a("ul", [a("li", [t._v("\n          搜尋其他關鍵字\n        ")]), t._v(" "), a("li", [t._v("\n          造訪其他相關頁面\n        ")])])]), t._v(" "), a("div", {
                        staticClass: "p-error__img"
                    }, [a("img", {
                        attrs: {
                            src: "https://static.ctwant.com/images/dist/404.svg",
                            alt: "error-page-design-icon"
                        }
                    })])])
                }], !1, null, "db3b4c84", null).exports,
                P = a(14),
                $ = (a(28), a(76), a(77), {
                    name: "Nuxt",
                    components: {
                        NuxtChild: w,
                        NuxtError: T
                    },
                    props: {
                        nuxtChildKey: {
                            type: String,
                            default: void 0
                        },
                        keepAlive: Boolean,
                        keepAliveProps: {
                            type: Object,
                            default: void 0
                        },
                        name: {
                            type: String,
                            default: "default"
                        }
                    },
                    errorCaptured: function(t) {
                        this.displayingNuxtError && (this.errorFromNuxtError = t, this.$forceUpdate())
                    },
                    computed: {
                        routerViewKey: function() {
                            if (void 0 !== this.nuxtChildKey || this.$route.matched.length > 1) return this.nuxtChildKey || Object(f.c)(this.$route.matched[0].path)(this.$route.params);
                            var t = Object(P.a)(this.$route.matched, 1)[0];
                            if (!t) return this.$route.path;
                            var e = t.components.default;
                            if (e && e.options) {
                                var a = e.options;
                                if (a.key) return "function" == typeof a.key ? a.key(this.$route) : a.key
                            }
                            return /\/$/.test(t.path) ? this.$route.path : this.$route.path.replace(/\/$/, "")
                        }
                    },
                    beforeCreate: function() {
                        r.a.util.defineReactive(this, "nuxt", this.$root.$options.nuxt)
                    },
                    render: function(t) {
                        var e = this;
                        return this.nuxt.err ? this.errorFromNuxtError ? (this.$nextTick((function() {
                            return e.errorFromNuxtError = !1
                        })), t("div", {}, [t("h2", "An error occurred while showing the error page"), t("p", "Unfortunately an error occurred and while showing the error page another error occurred"), t("p", "Error details: ".concat(this.errorFromNuxtError.toString())), t("nuxt-link", {
                            props: {
                                to: "/"
                            }
                        }, "Go back to home")])) : (this.displayingNuxtError = !0, this.$nextTick((function() {
                            return e.displayingNuxtError = !1
                        })), t(T, {
                            props: {
                                error: this.nuxt.err
                            }
                        })) : t("NuxtChild", {
                            key: this.routerViewKey,
                            props: this.$props
                        })
                    }
                }),
                A = (a(40), a(42), a(43), {
                    name: "NuxtLoading",
                    data: function() {
                        return {
                            percent: 0,
                            show: !1,
                            canSucceed: !0,
                            reversed: !1,
                            skipTimerCount: 0,
                            rtl: !1,
                            throttle: 200,
                            duration: 5e3,
                            continuous: !1
                        }
                    },
                    computed: {
                        left: function() {
                            return !(!this.continuous && !this.rtl) && (this.rtl ? this.reversed ? "0px" : "auto" : this.reversed ? "auto" : "0px")
                        }
                    },
                    beforeDestroy: function() {
                        this.clear()
                    },
                    methods: {
                        clear: function() {
                            clearInterval(this._timer), clearTimeout(this._throttle), this._timer = null
                        },
                        start: function() {
                            var t = this;
                            return this.clear(), this.percent = 0, this.reversed = !1, this.skipTimerCount = 0, this.canSucceed = !0, this.throttle ? this._throttle = setTimeout((function() {
                                return t.startTimer()
                            }), this.throttle) : this.startTimer(), this
                        },
                        set: function(t) {
                            return this.show = !0, this.canSucceed = !0, this.percent = Math.min(100, Math.max(0, Math.floor(t))), this
                        },
                        get: function() {
                            return this.percent
                        },
                        increase: function(t) {
                            return this.percent = Math.min(100, Math.floor(this.percent + t)), this
                        },
                        decrease: function(t) {
                            return this.percent = Math.max(0, Math.floor(this.percent - t)), this
                        },
                        pause: function() {
                            return clearInterval(this._timer), this
                        },
                        resume: function() {
                            return this.startTimer(), this
                        },
                        finish: function() {
                            return this.percent = this.reversed ? 0 : 100, this.hide(), this
                        },
                        hide: function() {
                            var t = this;
                            return this.clear(), setTimeout((function() {
                                t.show = !1, t.$nextTick((function() {
                                    t.percent = 0, t.reversed = !1
                                }))
                            }), 500), this
                        },
                        fail: function(t) {
                            return this.canSucceed = !1, this
                        },
                        startTimer: function() {
                            var t = this;
                            this.show || (this.show = !0), void 0 === this._cut && (this._cut = 1e4 / Math.floor(this.duration)), this._timer = setInterval((function() {
                                t.skipTimerCount > 0 ? t.skipTimerCount-- : (t.reversed ? t.decrease(t._cut) : t.increase(t._cut), t.continuous && (t.percent >= 100 || t.percent <= 0) && (t.skipTimerCount = 1, t.reversed = !t.reversed))
                            }), 100)
                        }
                    },
                    render: function(t) {
                        var e = t(!1);
                        return this.show && (e = t("div", {
                            staticClass: "nuxt-progress",
                            class: {
                                "nuxt-progress-notransition": this.skipTimerCount > 0, "nuxt-progress-failed": !this.canSucceed
                            },
                            style: {
                                width: this.percent + "%",
                                left: this.left
                            }
                        })), e
                    }
                }),
                E = (a(190), Object(S.a)(A, undefined, undefined, !1, null, null, null).exports),
                R = {
                    data: function() {
                        return {
                            subnavPos: {
                                top: "44px",
                                left: "auto"
                            },
                            arrowPos: {
                                left: "auto"
                            },
                            headerFixed: !1,
                            headerShow: !1
                        }
                    }
                },
                D = {
                    computed: {
                        targeting: function() {
                            return "Y" === this.$store.state.ad.isOtherAd ? '{"targeting":{"adult":"Y"}}' : ""
                        }
                    }
                },
                z = {
                    components: {
                        HeaderAMP: Object(S.a)(R, (function() {
                            var t = this,
                                e = t.$createElement,
                                a = t._self._c || e;
                            return a("header", {
                                staticClass: "l-header"
                            }, [a("div", {
                                staticClass: "l-header__content"
                            }, [a("div", {
                                staticClass: "l-header__head"
                            }, [a("a", {
                                attrs: {
                                    href: "https://www.ctwant.com?utm_source=google&utm_medium=amp&utm_campaign=" + t.$route.params.id
                                }
                            }, [a("amp-img", {
                                staticClass: "m-amp-header__logo",
                                attrs: {
                                    src: "https://static.ctwant.com/images/dist/logo.svg",
                                    width: "99",
                                    height: "18",
                                    layout: "responsive",
                                    alt: "CTWANT"
                                }
                            })], 1), t._v(" "), a("a", {
                                attrs: {
                                    href: "https://www.ctwant.com/search"
                                }
                            }, [a("amp-img", {
                                staticClass: "m-amp-header__search l-header__search",
                                attrs: {
                                    src: "https://static.ctwant.com/images/dist/search.svg",
                                    width: "18",
                                    height: "18",
                                    layout: "responsive",
                                    alt: "search"
                                }
                            })], 1)]), t._v(" "), a("nav", {
                                staticClass: "m-amp-navbar l-header__nav"
                            }, [a("ul", {
                                staticClass: "container m-amp-navbar__list"
                            }, [a("li", {
                                staticClass: "m-amp-navbar__list__item"
                            }, [a("a", {
                                staticClass: "m-amp-navbar__list__link",
                                attrs: {
                                    href: "https://www.ctwant.com/category/最新?utm_source=google&utm_medium=amp&utm_campaign=" + t.$route.params.id
                                }
                            }, [t._v("\n            最新\n          ")]), t._v(" "), a("div", {
                                staticClass: "m-amp-navbar__arrow"
                            })]), t._v(" "), a("li", {
                                staticClass: "m-amp-navbar__list__item"
                            }, [a("a", {
                                staticClass: "m-amp-navbar__list__link",
                                attrs: {
                                    href: "https://www.ctwant.com/category/社會?utm_source=google&utm_medium=amp&utm_campaign=" + t.$route.params.id
                                }
                            }, [t._v("\n            社會\n          ")]), t._v(" "), a("div", {
                                staticClass: "m-amp-navbar__arrow",
                                style: t.arrowPos
                            })]), t._v(" "), a("li", {
                                staticClass: "m-amp-navbar__list__item"
                            }, [a("a", {
                                staticClass: "m-amp-navbar__list__link",
                                attrs: {
                                    href: "https://www.ctwant.com/category/娛樂?utm_source=google&utm_medium=amp&utm_campaign=" + t.$route.params.id
                                }
                            }, [t._v("\n            娛樂\n          ")]), t._v(" "), a("div", {
                                staticClass: "m-amp-navbar__arrow",
                                style: t.arrowPos
                            })]), t._v(" "), a("li", {
                                staticClass: "m-amp-navbar__list__item"
                            }, [a("a", {
                                staticClass: "m-amp-navbar__list__link",
                                attrs: {
                                    href: "https://www.ctwant.com/category/財經?utm_source=google&utm_medium=amp&utm_campaign=" + t.$route.params.id
                                }
                            }, [t._v("\n            財經\n          ")]), t._v(" "), a("div", {
                                staticClass: "m-amp-navbar__arrow",
                                style: t.arrowPos
                            })]), t._v(" "), a("li", {
                                staticClass: "m-amp-navbar__list__item"
                            }, [a("a", {
                                staticClass: "m-amp-navbar__list__link",
                                attrs: {
                                    href: "https://www.ctwant.com/category/政治?utm_source=google&utm_medium=amp&utm_campaign=" + t.$route.params.id
                                }
                            }, [t._v("\n            政治\n          ")]), t._v(" "), a("div", {
                                staticClass: "m-amp-navbar__arrow",
                                style: t.arrowPos
                            })]), t._v(" "), a("li", {
                                staticClass: "m-amp-navbar__list__item"
                            }, [a("a", {
                                staticClass: "m-amp-navbar__list__link",
                                attrs: {
                                    href: "https://www.ctwant.com/category/漂亮?utm_source=google&utm_medium=amp&utm_campaign=" + t.$route.params.id
                                }
                            }, [t._v("\n            漂亮\n          ")]), t._v(" "), a("div", {
                                staticClass: "m-amp-navbar__arrow",
                                style: t.arrowPos
                            })]), t._v(" "), a("li", {
                                staticClass: "m-amp-navbar__list__item"
                            }, [a("a", {
                                staticClass: "m-amp-navbar__list__link",
                                attrs: {
                                    href: "https://www.ctwant.com/category/生活?utm_source=google&utm_medium=amp&utm_campaign=" + t.$route.params.id
                                }
                            }, [t._v("\n            生活\n          ")]), t._v(" "), a("div", {
                                staticClass: "m-amp-navbar__arrow",
                                style: t.arrowPos
                            })]), t._v(" "), a("li", {
                                staticClass: "m-amp-navbar__list__item"
                            }, [a("a", {
                                staticClass: "m-amp-navbar__list__link",
                                attrs: {
                                    href: "https://www.ctwant.com/category/國際?utm_source=google&utm_medium=amp&utm_campaign=" + t.$route.params.id
                                }
                            }, [t._v("\n            國際\n          ")]), t._v(" "), a("div", {
                                staticClass: "m-amp-navbar__arrow",
                                style: t.arrowPos
                            })]), t._v(" "), a("li", {
                                staticClass: "m-amp-navbar__list__item"
                            }, [a("a", {
                                staticClass: "m-amp-navbar__list__link",
                                attrs: {
                                    href: "https://www.ctwant.com/video?utm_source=google&utm_medium=amp&utm_campaign=" + t.$route.params.id
                                }
                            }, [t._v("\n            影音\n          ")]), t._v(" "), a("div", {
                                staticClass: "m-amp-navbar__arrow"
                            })])]), t._v(" "), a("div", {
                                staticClass: "m-amp-navbar__control"
                            }, [a("svg", {
                                attrs: {
                                    width: "8px",
                                    height: "15px",
                                    viewBox: "0 0 8 15",
                                    version: "1.1"
                                }
                            }, [a("g", {
                                attrs: {
                                    id: "首頁",
                                    stroke: "none",
                                    "stroke-width": "1",
                                    fill: "none",
                                    "fill-rule": "evenodd"
                                }
                            }, [a("g", {
                                attrs: {
                                    id: "2019/6/20_首頁_mobile(375)",
                                    transform: "translate(-344.000000, -189.000000)",
                                    fill: "#ffffff",
                                    "fill-rule": "nonzero"
                                }
                            }, [a("g", {
                                attrs: {
                                    id: "Group-9",
                                    transform: "translate(0.000000, 144.000000)"
                                }
                            }, [a("g", {
                                attrs: {
                                    id: "arrow-point-to-right",
                                    transform: "translate(344.000000, 45.000000)"
                                }
                            }, [a("path", {
                                attrs: {
                                    id: "Path",
                                    d: "M7.71217089,8.24257713 L1.67769864,14.6921386 C1.29383331,15.1026205 0.671461489,15.1026205 0.287782521,14.6921386 C-0.0959275069,14.2820219 -0.0959275069,13.6168521 0.287782521,13.2067686 L5.62735883,7.49989211 L0.287937819,1.79321485 C-0.0957722091,1.38293217 -0.0957722091,0.717828712 0.287937819,0.307712013 C0.671647847,-0.102570671 1.29398861,-0.102570671 1.67785394,0.307712013 L7.71232619,6.75737307 C7.9041812,6.96253101 8,7.23112857 8,7.49985891 C8,7.76872205 7.90399484,8.03751878 7.71217089,8.24257713 Z"
                                }
                            })])])])])])])])])])
                        }), [], !1, null, null, null).exports,
                        FooterAMP: Object(S.a)(D, (function() {
                            var t = this,
                                e = t.$createElement,
                                a = t._self._c || e;
                            return a("footer", {
                                staticClass: "l-footer"
                            }, [a("div", {
                                staticClass: "l-footer__content"
                            }, [a("amp-img", {
                                staticClass: "m-amp-footer__logo",
                                attrs: {
                                    src: "https://static.ctwant.com/images/dist/logo-w.svg",
                                    width: "128",
                                    height: "23",
                                    layout: "responsive",
                                    alt: "footer logo"
                                }
                            }), t._v(" "), a("ul", {
                                staticClass: "l-footer__list"
                            }, [a("li", [a("a", {
                                staticClass: "l-footer__item",
                                attrs: {
                                    href: "https://www.ctwant.com/about?utm_source=google&utm_medium=amp&utm_campaign=" + t.$route.params.id
                                }
                            }, [t._v("\n          關於CTWANT\n        ")])]), t._v(" "), a("li", [a("a", {
                                staticClass: "l-footer__item",
                                attrs: {
                                    href: "https://www.ctwant.com/contact?utm_source=google&utm_medium=amp&utm_campaign=" + t.$route.params.id
                                }
                            }, [t._v("\n          聯繫我們\n        ")])]), t._v(" "), a("li", [a("a", {
                                staticClass: "l-footer__item",
                                attrs: {
                                    href: "https://www.ctwant.com/privacy?utm_source=google&utm_medium=amp&utm_campaign=" + t.$route.params.id
                                }
                            }, [t._v("\n          隱私權政策\n        ")])]), t._v(" "), a("li", [a("a", {
                                staticClass: "l-footer__item",
                                attrs: {
                                    href: "https://www.ctwant.com/brands?utm_source=google&utm_medium=amp&utm_campaign=" + t.$route.params.id
                                }
                            }, [a("amp-img", {
                                attrs: {
                                    width: "16",
                                    height: "21",
                                    src: "https://static.ctwant.com/images/dist/fire.svg",
                                    alt: "fire icon"
                                }
                            }), t._v("\n          發燒熱搜\n        ")], 1)])])], 1), t._v(" "), a("ul", {
                                staticClass: "l-footer__social"
                            }, [a("li", [a("a", {
                                staticClass: "l-footer__icon-wrapper l-footer__item",
                                attrs: {
                                    href: "https://www.facebook.com/want.ctw?utm_source=google&utm_medium=amp&utm_campaign=" + t.$route.params.id,
                                    target: "_blank"
                                }
                            }, [a("amp-img", {
                                staticClass: "m-amp-footer__icon",
                                attrs: {
                                    src: "https://static.ctwant.com/images/dist/footer-fb.svg",
                                    width: "19",
                                    height: "19",
                                    layout: "responsive",
                                    alt: "facebook-icon"
                                }
                            }), t._v("\n        Facebook\n      ")], 1)]), t._v(" "), a("li", [a("a", {
                                staticClass: "l-footer__icon-wrapper l-footer__item",
                                attrs: {
                                    href: "https://www.youtube.com/channel/UCZtUbkty-OfR4_AQ4B0GtQA?utm_source=google&utm_medium=amp&utm_campaign=" + t.$route.params.id,
                                    target: "_blank"
                                }
                            }, [a("amp-img", {
                                staticClass: "m-amp-footer__icon-youtube",
                                attrs: {
                                    src: "https://static.ctwant.com/images/dist/footer-youtube.svg",
                                    width: "23.75",
                                    height: "19",
                                    layout: "responsive",
                                    alt: "youtube-icon"
                                }
                            }), t._v("\n        Youtube\n      ")], 1)]), t._v(" "), a("li", [a("a", {
                                staticClass: "l-footer__icon-wrapper l-footer__item",
                                attrs: {
                                    href: "https://t.me/ctwant?utm_source=google&utm_medium=amp&utm_campaign=" + t.$route.params.id,
                                    target: "_blank"
                                }
                            }, [a("amp-img", {
                                staticClass: "m-amp-footer__icon",
                                attrs: {
                                    src: "https://static.ctwant.com/images/dist/Telegram.svg",
                                    width: "19",
                                    height: "19",
                                    layout: "responsive",
                                    alt: "Telegram-icon"
                                }
                            }), t._v("\n        Telegram\n      ")], 1)])]), t._v(" "), a("hr", {
                                staticClass: "l-footer__hr"
                            }), t._v(" "), t._m(0), t._v(" "), a("amp-sticky-ad", {
                                attrs: {
                                    layout: "nodisplay"
                                }
                            }, [a("amp-ad", {
                                attrs: {
                                    json: t.targeting,
                                    width: "320",
                                    height: "50",
                                    type: "doubleclick",
                                    "data-slot": "/21830015939/ctwant_amp_article_anchor"
                                }
                            })], 1)], 1)
                        }), [function() {
                            var t = this,
                                e = t.$createElement,
                                a = t._self._c || e;
                            return a("div", {
                                staticClass: "l-footer-copyright"
                            }, [a("h4", {
                                staticClass: "l-footer-copyright__title"
                            }, [t._v("\n      © 2020 The CTWANT Company\n    ")]), t._v("\n    本網站所刊載內容著作權屬王道旺台媒體股份有限公司所有或經授權使用，他人非經授權不許轉載、重製、公開播送或公開傳輸。\n  ")])
                        }], !1, null, null, null).exports
                    },
                    data: function() {
                        return {
                            AMP_ANALYTICS: '{"vars": {"c2": "32800769"}, "extraUrlParams": {"comscorekw": "amp"}}'
                        }
                    },
                    computed: {
                        isHideAd: function() {
                            return this.$store.state.ad.isHideAd
                        }
                    }
                },
                I = (a(192), Object(S.a)(z, (function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        class: {
                            "l-ad--hide-all-amp-units": "Y" === t.isHideAd
                        }
                    }, [a("HeaderAMP"), t._v(" "), a("Nuxt"), t._v(" "), a("FooterAMP"), t._v(" "), a("amp-analytics", {
                        attrs: {
                            type: "comscore"
                        }
                    }, [a("script", {
                        attrs: {
                            type: "application/json"
                        },
                        domProps: {
                            innerHTML: t._s(t.AMP_ANALYTICS)
                        }
                    })])], 1)
                }), [], !1, null, null, null).exports),
                L = a(12),
                M = a.n(L);

            function N(t, e) {
                var a = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    e && (i = i.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), a.push.apply(a, i)
                }
                return a
            }

            function Y(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? N(Object(a), !0).forEach((function(e) {
                        Object(n.a)(t, e, a[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : N(Object(a)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                    }))
                }
                return t
            }
            var U = {
                    data: function() {
                        return {
                            categoryData: [{
                                name: "最新"
                            }, {
                                name: "社會",
                                child: [{
                                    name: "社會首頁",
                                    path: "/category/社會"
                                }, {
                                    name: "時事",
                                    path: "/category/社會/時事"
                                }, {
                                    name: "直擊",
                                    path: "/category/社會/直擊"
                                }, {
                                    name: "調查",
                                    path: "/category/社會/調查"
                                }]
                            }, {
                                name: "娛樂",
                                child: [{
                                    name: "娛樂首頁",
                                    path: "/category/娛樂"
                                }, {
                                    name: "即時",
                                    path: "/category/娛樂/即時"
                                }, {
                                    name: "大條",
                                    path: "/category/娛樂/大條"
                                }, {
                                    name: "專題",
                                    path: "/category/娛樂/專題"
                                }, {
                                    name: "人物",
                                    path: "/category/娛樂/人物"
                                }]
                            }, {
                                name: "財經",
                                child: [{
                                    name: "財經首頁",
                                    path: "/category/財經"
                                }, {
                                    name: "熱線",
                                    path: "/category/財經/熱線"
                                }, {
                                    name: "人物",
                                    path: "/category/財經/人物"
                                }, {
                                    name: "專欄",
                                    path: "/category/財經/專欄"
                                }]
                            }, {
                                name: "政治",
                                child: [{
                                    name: "政治首頁",
                                    path: "/category/政治"
                                }, {
                                    name: "焦點",
                                    path: "/category/政治/焦點"
                                }, {
                                    name: "人物",
                                    path: "/category/政治/人物"
                                }, {
                                    name: "評論",
                                    path: "/category/政治/評論"
                                }]
                            }, {
                                name: "漂亮",
                                child: [{
                                    name: "漂亮首頁",
                                    path: "/category/漂亮"
                                }, {
                                    name: "美容",
                                    path: "/category/漂亮/美容"
                                }, {
                                    name: "時尚",
                                    path: "/category/漂亮/時尚"
                                }, {
                                    name: "精品",
                                    path: "/category/漂亮/精品"
                                }]
                            }, {
                                name: "生活",
                                child: [{
                                    name: "生活首頁",
                                    path: "/category/生活"
                                }, {
                                    name: "綜合",
                                    path: "/category/生活/綜合"
                                }, {
                                    name: "美旅",
                                    path: "/category/生活/美旅"
                                }, {
                                    name: "３Ｃ",
                                    path: "/category/生活/３Ｃ"
                                }, {
                                    name: "品味",
                                    path: "/category/生活/品味"
                                }, {
                                    name: "健康",
                                    path: "/category/生活/健康"
                                }, {
                                    name: "星座",
                                    path: "/category/生活/星座"
                                }, {
                                    name: "運動",
                                    path: "/category/生活/運動"
                                }]
                            }, {
                                name: "國際",
                                child: [{
                                    name: "國際首頁",
                                    path: "/category/國際"
                                }, {
                                    name: "最新",
                                    path: "/category/國際/最新"
                                }, {
                                    name: "大陸",
                                    path: "/category/國際/大陸"
                                }]
                            }, {
                                name: "影音",
                                path: "/video"
                            }],
                            subnavPos: {
                                top: 0,
                                left: "-120px"
                            },
                            arrowPos: {
                                left: "auto"
                            },
                            headerHeight: 0,
                            headerFixed: !1,
                            headerShow: !1,
                            lastScrollTop: 0,
                            subnavHide: !1,
                            showMemberMenu: !1,
                            showPopup: !1,
                            loginPlatform: ["Facebook", "Google", "Yahoo"],
                            privacy: !1,
                            isLoading: !0
                        }
                    },
                    computed: Y(Y(Y(Y({}, Object(o.d)(["redirectUrl"])), Object(o.d)("member", ["isLogin", "isGetUserData", "userData"])), Object(o.b)(["WIDTH_PAD", "screenWidth", "scrollTop"])), {}, {
                        redirectUrl: function() {
                            return this.$store.state.redirectUrl
                        }
                    }),
                    watch: {
                        scrollTop: function() {
                            this.headerHeight = this.$refs.header.offsetHeight, this.scrollTop > this.headerHeight ? this.headerFixed = !0 : this.headerFixed = !1, this.headerFixed && this.lastScrollTop > this.scrollTop ? this.headerShow = !0 : (this.headerShow = !1, this.screenWidth <= this.WIDTH_PAD && (this.subnavHide = !0)), this.scrollTop <= 0 ? this.lastScrollTop = 0 : this.lastScrollTop = this.scrollTop
                        }
                    },
                    mounted: function() {
                        this.firebaseInit()
                    },
                    methods: {
                        firebaseInit: function() {
                            firebase.apps.length || firebase.initializeApp({
                                apiKey: "AIzaSyCNgWUsrKhC2AdolwH5AbwaLMsE_EGMqBg",
                                authDomain: "ctwant-website.firebaseapp.com",
                                databaseURL: "https://ctwant-website.firebaseio.com",
                                projectId: "ctwant-website",
                                storageBucket: "ctwant-website.appspot.com",
                                messagingSenderId: "35365013381",
                                appId: "1:35365013381:web:6160b320db01a9ac67a6ec",
                                measurementId: "G-PGCW1H1S3E"
                            })
                        },
                        getPosition: function(t) {
                            var e = t.target.getBoundingClientRect();
                            this.subnavPos.top = "".concat(e.height, "px"), this.screenWidth <= this.WIDTH_PAD ? (this.subnavPos.left = "".concat(e.left - 13, "px"), this.arrowPos.left = "".concat(e.left + e.width / 2 - 13, "px")) : this.subnavPos.left = "50%"
                        },
                        hideSubnav: function() {
                            this.screenWidth <= this.WIDTH_PAD && (this.subnavHide = !0)
                        },
                        showSubnav: function() {
                            this.screenWidth <= this.WIDTH_PAD && (this.subnavHide = !1)
                        },
                        stopBubbling: function(t) {
                            t.stopPropagation()
                        },
                        moveNav: function() {
                            this.$refs.nav.scrollLeft += 81
                        },
                        goRealtime: function() {
                            if ("realtime" === this.$route.name) {
                                if (this.$route.query.page) return void this.$router.replace({
                                    query: {}
                                });
                                this.$router.go(0)
                            } else this.$router.push(encodeURI("/category/最新"))
                        },
                        popupClose: function() {
                            this.showPopup = !1
                        },
                        login: function() {
                            this.$store.dispatch("getRedirectUrl", this.$route.path), location.href = this.redirectUrl
                        },
                        logout: function() {
                            var t = this.$route.path;
                            this.$store.dispatch("member/logout"), "/member" === t ? this.$store.dispatch("getRedirectUrl", "/") : this.$store.dispatch("getRedirectUrl", t), location.href = "".concat(this.redirectUrl, "&logout=Y")
                        }
                    }
                },
                W = Object(S.a)(U, (function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("header", {
                        ref: "header",
                        staticClass: "l-header",
                        class: {
                            "l-header--fixed": t.headerFixed, "l-header--show": t.headerShow
                        }
                    }, [t._m(0), t._v(" "), a("div", {
                        staticClass: "l-header__content"
                    }, [a("div", {
                        staticClass: "l-header__head"
                    }, [a("div", {
                        staticClass: "l-header__logo-container"
                    }, [a("nuxt-link", {
                        attrs: {
                            to: "/"
                        }
                    }, [a("img", {
                        staticClass: "l-header__img l-header__logo",
                        attrs: {
                            src: "https://static.ctwant.com/images/dist/logo.svg",
                            width: "143",
                            height: "26",
                            alt: "CTWANT"
                        }
                    })]), t._v(" "), t._m(1)], 1), t._v(" "), a("div", {
                        staticClass: "l-header__group"
                    }, [a("nuxt-link", {
                        attrs: {
                            to: "/search"
                        }
                    }, [a("img", {
                        staticClass: "l-header__img l-header__search",
                        attrs: {
                            src: "https://static.ctwant.com/images/dist/search.svg",
                            width: "24",
                            height: "24",
                            alt: "search"
                        }
                    })]), t._v(" "), a("div", {
                        staticClass: "l-header__login"
                    }, [a("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !0 === t.isLogin && t.isGetUserData,
                            expression: "isLogin === true && isGetUserData"
                        }],
                        staticClass: "l-header__login--signin",
                        on: {
                            click: function(e) {
                                t.showMemberMenu = !t.showMemberMenu
                            }
                        }
                    }, [t.userData.avatar ? a("img", {
                        attrs: {
                            src: t.userData.avatar,
                            alt: "defualt user img"
                        }
                    }) : a("img", {
                        attrs: {
                            src: "https://static.ctwant.com/images/dist/user.svg",
                            alt: "defualt user img"
                        }
                    }), t._v(" "), a("p", [t._v("\n              " + t._s(t.userData.name) + "\n            ")]), t._v(" "), t.showMemberMenu ? a("ul", {
                        staticClass: "l-header__member-menu",
                        on: {
                            mouseleave: function(e) {
                                t.showMemberMenu = !1
                            }
                        }
                    }, [a("li", [a("nuxt-link", {
                        attrs: {
                            to: "/member"
                        },
                        on: {
                            click: function(e) {
                                t.showMemberMenu = !1
                            }
                        }
                    }, [t._v("\n                  會員資料\n                ")])], 1), t._v(" "), a("li", [a("p", {
                        on: {
                            click: t.logout
                        }
                    }, [t._v("\n                  登出\n                ")])])]) : t._e()]), t._v(" "), a("p", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !1 === t.isLogin,
                            expression: "isLogin === false"
                        }],
                        staticClass: "l-header__login--signup",
                        on: {
                            click: t.login
                        }
                    }, [t._v("\n            登入/註冊\n          ")]), t._v(" "), a("img", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: null === t.isLogin,
                            expression: "isLogin === null"
                        }],
                        staticClass: "l-header__loading",
                        attrs: {
                            src: "https://static.ctwant.com/images/dist/loading.gif?20200410",
                            alt: "loading"
                        }
                    })])], 1)]), t._v(" "), a("nav", {
                        staticClass: "m-navbar l-header__nav"
                    }, [a("ul", {
                        ref: "nav",
                        staticClass: "container m-navbar__list",
                        on: {
                            touchmove: t.hideSubnav
                        }
                    }, [t._l(t.categoryData, (function(e) {
                        return ["最新" === e.name ? a("li", {
                            key: e.name,
                            staticClass: "m-navbar__list__item"
                        }, [a("span", {
                            staticClass: "m-navbar__list__link",
                            on: {
                                click: t.goRealtime
                            }
                        }, [t._v("\n              " + t._s(e.name) + "\n            ")]), t._v(" "), a("div", {
                            staticClass: "m-navbar__arrow"
                        })]) : "影音" === e.name ? a("li", {
                            key: e.name,
                            staticClass: "m-navbar__list__item"
                        }, [a("nuxt-link", {
                            staticClass: "m-navbar__list__link",
                            attrs: {
                                to: e.path
                            }
                        }, [t._v("\n              " + t._s(e.name) + "\n            ")]), t._v(" "), a("div", {
                            staticClass: "m-navbar__arrow"
                        })], 1) : a("li", {
                            key: e.name,
                            staticClass: "m-navbar__list__item",
                            on: {
                                mouseover: t.getPosition,
                                click: function(e) {
                                    return e.target !== e.currentTarget ? null : t.showSubnav(e)
                                }
                            }
                        }, [t._v("\n            " + t._s(e.name) + "\n            "), a("div", {
                            staticClass: "m-navbar__arrow",
                            class: {
                                "m-navbar__arrow--hide": t.subnavHide
                            },
                            style: t.arrowPos,
                            on: {
                                mouseover: t.stopBubbling
                            }
                        }), t._v(" "), a("ul", {
                            staticClass: "m-navbar__subnav",
                            class: {
                                "m-navbar__subnav--hide": t.subnavHide
                            },
                            style: t.subnavPos,
                            on: {
                                click: t.hideSubnav,
                                mouseover: t.stopBubbling
                            }
                        }, t._l(e.child, (function(e) {
                            return a("li", {
                                key: e.name
                            }, [a("nuxt-link", {
                                staticClass: "m-navbar__subnav__item",
                                attrs: {
                                    to: e.path
                                }
                            }, [a("span", {
                                staticClass: "m-navbar__subnav-link-span"
                            }, [t._v("\n                    " + t._s(e.name) + "\n                  ")])])], 1)
                        })), 0)])]
                    }))], 2), t._v(" "), a("div", {
                        staticClass: "m-navbar__control",
                        on: {
                            touchstart: t.moveNav
                        }
                    }, [a("svg", {
                        attrs: {
                            width: "8",
                            height: "15"
                        }
                    }, [a("path", {
                        attrs: {
                            d: "M7.712 8.243l-6.034 6.45a.938.938 0 01-1.39 0 1.102 1.102 0 010-1.486L5.628 7.5.287 1.793a1.102 1.102 0 010-1.485.939.939 0 011.39 0l6.034 6.45c.192.205.288.473.288.742s-.096.538-.288.743z",
                            fill: "#fff",
                            "fill-rule": "nonzero"
                        }
                    })])])]), t._v(" "), t.showPopup ? a("div", {
                        staticClass: "m-login-popup"
                    }, [a("div", {
                        staticClass: "m-login-popup__wrapper"
                    }, [a("div", {
                        staticClass: "m-login-popup__head"
                    }, [a("img", {
                        attrs: {
                            src: "https://static.ctwant.com/images/dist/xx-black.svg",
                            alt: "close-login-popup-button"
                        },
                        on: {
                            click: t.popupClose
                        }
                    })]), t._v(" "), a("div", {
                        staticClass: "m-login-popup__body"
                    }, [t._m(2), t._v(" "), a("div", {
                        staticClass: "m-login-popup__content"
                    }, [t._m(3), t._v(" "), a("div", {
                        staticClass: "m-login-popup__btn-wrapper"
                    }, t._l(t.loginPlatform, (function(e, i) {
                        return a("div", {
                            key: i,
                            staticClass: "m-login-popup__btn",
                            class: "m-login-popup__btn-" + e,
                            on: {
                                click: function(a) {
                                    return t.login(e)
                                }
                            }
                        }, [a("p", [t._v("使用 " + t._s(e))])])
                    })), 0)])]), t._v(" "), a("div", {
                        staticClass: "m-login-popup__footer"
                    }, [a("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: t.privacy,
                            expression: "privacy"
                        }],
                        attrs: {
                            id: "checkPrivacy",
                            type: "checkbox"
                        },
                        domProps: {
                            checked: Array.isArray(t.privacy) ? t._i(t.privacy, null) > -1 : t.privacy
                        },
                        on: {
                            change: function(e) {
                                var a = t.privacy,
                                    i = e.target,
                                    n = !!i.checked;
                                if (Array.isArray(a)) {
                                    var r = t._i(a, null);
                                    i.checked ? r < 0 && (t.privacy = a.concat([null])) : r > -1 && (t.privacy = a.slice(0, r).concat(a.slice(r + 1)))
                                } else t.privacy = n
                            }
                        }
                    }), t._v(" "), a("label", {
                        attrs: {
                            for: "checkPrivacy"
                        }
                    }, [t._v("\n            我同意由 CTWANT 使用個資，並已詳讀\n            "), a("nuxt-link", {
                        attrs: {
                            to: "/privacy"
                        }
                    }, [t._v("\n              隱私權聲明\n            ")])], 1)])])]) : t._e()])])
                }), [function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "l-ad__wrapper pt-2"
                    }, [e("div", {
                        staticClass: "l-ad__all-top",
                        attrs: {
                            id: "div-gpt-ad-1563334121951-0"
                        }
                    })])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("a", {
                        staticClass: "l-header__second-logo",
                        attrs: {
                            href: "https://shop.ctwant.com/pages/ctwant-好康吧防疫專區?utm_source=ctwant&utm_medium=ctwantlogo&utm_campaign=protection",
                            target: "_blank"
                        }
                    }, [e("img", {
                        attrs: {
                            src: "https://static.ctwant.com/images/dist/shop_ctwant_protection-02_sm.gif",
                            width: "300",
                            height: "90",
                            alt: "shop_ctwant_logo"
                        }
                    })])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "m-login-popup__img"
                    }, [e("img", {
                        attrs: {
                            src: "https://static.ctwant.com/images/dist/login_vision.png",
                            alt: "login-popup-design-icon"
                        }
                    })])
                }, function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "m-login-popup__text"
                    }, [a("p", [t._v("加入 CTWANT ，享受好內容。")])])
                }], !1, null, null, null).exports;

            function H(t, e) {
                var a = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    e && (i = i.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), a.push.apply(a, i)
                }
                return a
            }

            function q(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? H(Object(a), !0).forEach((function(e) {
                        Object(n.a)(t, e, a[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : H(Object(a)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                    }))
                }
                return t
            }
            var X = {
                    data: function() {
                        return {
                            isHide: !0,
                            bodyHeight: 0,
                            isRunPopupAdScrollFn: !1,
                            watchSignupForScrollTop: null
                        }
                    },
                    computed: q(q({}, Object(o.b)(["WIDTH_MOBILE", "screenWidth", "scrollTop"])), Object(o.b)("ad", ["isPopupActive"])),
                    mounted: function() {
                        var t = this;
                        this.screenWidth <= this.WIDTH_MOBILE && (this.bodyHeight = document.body.offsetHeight, this.isRunPopupAdScrollFn = !0, this.watchSignupForScrollTop = this.$watch("scrollTop", (function(e, a) {
                            if (!t.isRunPopupAdScrollFn) return !1;
                            t.isPopupActive ? t.scrollTop >= .3 * t.bodyHeight && (t.isHide = !1) : t.closeAdPopup()
                        })))
                    },
                    methods: {
                        closeAdPopup: function() {
                            this.isHide = !0, this.isRunPopupAdScrollFn = !1, this.watchSignupForScrollTop()
                        }
                    }
                },
                F = (a(194), {
                    components: {
                        AdPopup: Object(S.a)(X, (function() {
                            var t = this,
                                e = t.$createElement,
                                a = t._self._c || e;
                            return a("div", {
                                staticClass: "m-adpopup",
                                class: {
                                    "l-ad--hide": t.isHide
                                }
                            }, [a("div", {
                                staticClass: "m-adpopup__content"
                            }, [a("button", {
                                staticClass: "e-btn e-btn-ad-close e-btn-ad-close--popup",
                                on: {
                                    click: t.closeAdPopup
                                }
                            }, [a("img", {
                                attrs: {
                                    src: "https://static.ctwant.com/images/dist/xx.svg",
                                    alt: "close-ad-popup-button"
                                }
                            })]), t._v(" "), a("div", {
                                attrs: {
                                    id: "ad-popup-1582014334406-0"
                                }
                            })])])
                        }), [], !1, null, null, null).exports
                    },
                    data: function() {
                        return {
                            adHide: !1
                        }
                    }
                }),
                G = Object(S.a)(F, (function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("footer", {
                        staticClass: "l-footer"
                    }, [a("div", {
                        staticClass: "l-footer__content"
                    }, [a("img", {
                        staticClass: "l-footer__logo",
                        attrs: {
                            src: "https://static.ctwant.com/images/dist/logo-w.svg",
                            alt: "ctwant-logo"
                        }
                    }), t._v(" "), a("ul", {
                        staticClass: "l-footer__list"
                    }, [a("li", [a("nuxt-link", {
                        staticClass: "l-footer__item",
                        attrs: {
                            to: "/about"
                        }
                    }, [t._v("\n          關於CTWANT\n        ")])], 1), t._v(" "), a("li", [a("nuxt-link", {
                        staticClass: "l-footer__item",
                        attrs: {
                            to: "/contact"
                        }
                    }, [t._v("\n          聯繫我們\n        ")])], 1), t._v(" "), a("li", [a("nuxt-link", {
                        staticClass: "l-footer__item",
                        attrs: {
                            to: "/privacy"
                        }
                    }, [t._v("\n          隱私權政策\n        ")])], 1), t._v(" "), a("li", [a("nuxt-link", {
                        staticClass: "l-footer__item",
                        attrs: {
                            to: "/brands"
                        }
                    }, [a("img", {
                        attrs: {
                            src: "https://static.ctwant.com/images/dist/fire.svg",
                            alt: "fire icon"
                        }
                    }), t._v("\n          發燒熱搜\n        ")])], 1)])]), t._v(" "), t._m(0), t._v(" "), a("hr", {
                        staticClass: "l-footer__hr"
                    }), t._v(" "), t._m(1), t._v(" "), t._m(2), t._v(" "), a("AdPopup")], 1)
                }), [function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("ul", {
                        staticClass: "l-footer__social"
                    }, [a("li", [a("a", {
                        staticClass: "l-footer__icon-wrapper l-footer__item",
                        attrs: {
                            href: "https://www.facebook.com/want.ctw/",
                            target: "_blank"
                        }
                    }, [a("img", {
                        staticClass: "l-footer__icon",
                        attrs: {
                            src: "https://static.ctwant.com/images/dist/footer-fb.svg",
                            alt: "facebook-icon"
                        }
                    }), t._v("\n        Facebook\n      ")])]), t._v(" "), a("li", [a("a", {
                        staticClass: "l-footer__icon-wrapper l-footer__item",
                        attrs: {
                            href: "https://www.youtube.com/channel/UCZtUbkty-OfR4_AQ4B0GtQA",
                            target: "_blank"
                        }
                    }, [a("img", {
                        staticClass: "l-footer__icon",
                        attrs: {
                            src: "https://static.ctwant.com/images/dist/footer-youtube.svg",
                            alt: "facebook-icon"
                        }
                    }), t._v("\n        Youtube\n      ")])]), t._v(" "), a("li", [a("a", {
                        staticClass: "l-footer__icon-wrapper l-footer__item",
                        attrs: {
                            href: "https://t.me/ctwant",
                            target: "_blank"
                        }
                    }, [a("img", {
                        staticClass: "l-footer__icon",
                        attrs: {
                            src: "https://static.ctwant.com/images/dist/Telegram.svg",
                            alt: "facebook-icon"
                        }
                    }), t._v("\n        Telegram\n      ")])])])
                }, function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "l-footer-copyright"
                    }, [a("h4", {
                        staticClass: "l-footer-copyright__title"
                    }, [t._v("\n      © 2020 The CTWANT Company\n    ")]), t._v("\n    本網站所刊載內容著作權屬王道旺台媒體股份有限公司所有或經授權使用，他人非經授權不許轉載、重製、公開播送或公開傳輸。\n  ")])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "l-ad__wrapper l-ad--fixed l-ad--show-pad"
                    }, [e("div", {
                        attrs: {
                            id: "div-gpt-ad-1566899685984-0"
                        }
                    })])
                }], !1, null, null, null).exports,
                B = {
                    name: "GDPR",
                    data: function() {
                        return {
                            show: !1
                        }
                    },
                    mounted: function() {
                        null === JSON.parse(window.localStorage.getItem("acceptCookies")) && (this.show = !0)
                    },
                    methods: {
                        acceptCookies: function() {
                            this.show = !1, localStorage.setItem("acceptCookies", !0)
                        }
                    }
                },
                K = (a(196), Object(S.a)(B, (function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return t.show ? a("div", {
                        staticClass: "m-GDPR"
                    }, [a("div", {
                        staticClass: "m-GDPR__container"
                    }, [a("p", {
                        staticClass: "m-GDPR__content"
                    }, [t._v("\n      為提供最佳服務，本站使用cookies，您可以點選\n      "), a("nuxt-link", {
                        attrs: {
                            to: "/privacy"
                        }
                    }, [t._v("\n        隱私權政策\n      ")]), t._v("\n      查看，若繼續瀏覽網頁，即表示同意我們的cookies政策。\n    ")], 1), t._v(" "), a("button", {
                        staticClass: "m-GDPR__btn",
                        on: {
                            click: t.acceptCookies
                        }
                    }, [t._m(0), t._v("\n      知道了，請關閉視窗\n    ")])])]) : t._e()
                }), [function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "m-GDPR__close-icon"
                    }, [e("img", {
                        attrs: {
                            src: "https://static.ctwant.com/images/dist/xx-black.svg",
                            alt: "icon-x"
                        }
                    })])
                }], !1, null, null, null).exports),
                Q = {
                    name: "Webpush",
                    data: function() {
                        return {
                            apiBaseURL: this.$axios.defaults.baseURL,
                            cookieKey: "fcm_token",
                            cookieToken: null,
                            cookiePopup: !0,
                            timeOut: null,
                            isShow: !1
                        }
                    },
                    mounted: function() {
                        var t = this;
                        firebase.messaging.isSupported() && (this.cookieToken = document.cookie.replace(/(?:(?:^|.*;\s*)fcm_token\s*=\s*([^;]*).*$)|^.*$/, "$1") || null, this.cookiePopup = document.cookie.replace(/(?:(?:^|.*;\s*)fcm_popup\s*=\s*([^;]*).*$)|^.*$/, "$1") || !0, this.registerServiceWorker(), this.timeOut = setTimeout((function() {
                            !0 === t.cookiePopup && ("denied" === Notification.permission || "undefined" === Notification.permission ? (t.isShow = !1, t.deleteToken(t.cookieToken)) : "granted" === Notification.permission ? (t.isShow = !1, t.getToken()) : (t.setCookie("fcm_popup", !1, 1), t.isShow = !0))
                        }), 5e3), firebase.messaging().onTokenRefresh((function() {
                            t.getToken()
                        })))
                    },
                    beforeDestroy: function() {
                        clearTimeout(this.timeOut)
                    },
                    methods: {
                        registerServiceWorker: function() {
                            return Object(i.a)(regeneratorRuntime.mark((function t() {
                                return regeneratorRuntime.wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (!("serviceWorker" in navigator)) {
                                                t.next = 3;
                                                break
                                            }
                                            return t.next = 3, navigator.serviceWorker.register("/firebase-messaging-sw.js").then((function(t) {
                                                firebase.messaging().useServiceWorker(t)
                                            }));
                                        case 3:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))()
                        },
                        getToken: function() {
                            var t = this;
                            Notification.requestPermission().then((function(e) {
                                "granted" === e ? firebase.messaging().getToken().then((function(e) {
                                    e && t.postToken(e)
                                })).catch((function(t) {})) : t.setCookie("fcm_popup", !1, 0)
                            }))
                        },
                        postToken: function(t) {
                            var e = this;
                            return Object(i.a)(regeneratorRuntime.mark((function a() {
                                var i;
                                return regeneratorRuntime.wrap((function(a) {
                                    for (;;) switch (a.prev = a.next) {
                                        case 0:
                                            if (a.prev = 0, e.cookieToken === t) {
                                                a.next = 6;
                                                break
                                            }
                                            return e.deleteToken(e.cookieToken), i = "".concat(e.apiBaseURL, "/webpush/user"), a.next = 6, e.$axios.post(i, {
                                                website: "ctwant",
                                                token: t,
                                                is_prod: "production" === e.$config.mode ? "Y" : "N"
                                            });
                                        case 6:
                                            e.cookieToken = t, e.setCookie(e.cookieKey, t, 1), a.next = 13;
                                            break;
                                        case 10:
                                            a.prev = 10, a.t0 = a.catch(0);
                                        case 13:
                                        case "end":
                                            return a.stop()
                                    }
                                }), a, null, [
                                    [0, 10]
                                ])
                            })))()
                        },
                        deleteToken: function(t) {
                            var e = this;
                            return Object(i.a)(regeneratorRuntime.mark((function a() {
                                var i;
                                return regeneratorRuntime.wrap((function(a) {
                                    for (;;) switch (a.prev = a.next) {
                                        case 0:
                                            if (a.prev = 0, null === t || "" === t) {
                                                a.next = 5;
                                                break
                                            }
                                            return i = "".concat(e.apiBaseURL, "/webpush/user/").concat(t), a.next = 5, e.$axios.delete(i);
                                        case 5:
                                            e.cookieToken = null, e.setCookie(e.cookieKey, "", 0), a.next = 12;
                                            break;
                                        case 9:
                                            a.prev = 9, a.t0 = a.catch(0);
                                        case 12:
                                        case "end":
                                            return a.stop()
                                    }
                                }), a, null, [
                                    [0, 9]
                                ])
                            })))()
                        },
                        popup: function() {
                            this.isShow = !1, this.getToken()
                        },
                        setCookie: function(t, e, a) {
                            var i = new Date;
                            i.setDate(i.getDate() + a), document.cookie = "".concat(t, "=").concat(e, "; expires=") + i.toGMTString()
                        }
                    }
                },
                V = (a(198), Object(S.a)(Q, (function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return t.isShow ? a("div", {
                        staticClass: "m-notification"
                    }, [t._m(0), t._v(" "), a("p", {
                        staticClass: "m-notification__content"
                    }, [t._v("\n    請點選「訂閱」後，再點擊「允許」即可完成網頁新聞推播訂閱！\n  ")]), t._v(" "), a("div", {
                        staticClass: "m-notification__footer"
                    }, [a("div", {
                        staticClass: "m-notification__btn",
                        on: {
                            click: function(e) {
                                t.isShow = !1
                            }
                        }
                    }, [t._v("\n      暫時不用\n    ")]), t._v(" "), a("div", {
                        staticClass: "m-notification__btn",
                        on: {
                            click: t.popup
                        }
                    }, [t._v("\n      訂閱\n    ")])])]) : t._e()
                }), [function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("h3", {
                        staticClass: "m-notification__title"
                    }, [t._v("\n    歡迎訂閱\n    "), a("img", {
                        attrs: {
                            src: "https://static.ctwant.com/images/dist/logo.svg",
                            alt: "ctwant-logo"
                        }
                    }), t._v("\n    新聞推播\n  ")])
                }], !1, null, null, null).exports);
            a(63), a(49), a(60);

            function Z(t, e) {
                var a = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    e && (i = i.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), a.push.apply(a, i)
                }
                return a
            }

            function J(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Z(Object(a), !0).forEach((function(e) {
                        Object(n.a)(t, e, a[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : Z(Object(a)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                    }))
                }
                return t
            }
            var tt = {
                    name: "Stream",
                    data: function() {
                        return {
                            closeLiveTimer: null,
                            carouselLiveTimer: null,
                            carouselActive: +M.a.get("carouselActive") || 0,
                            isShowLive: !1,
                            isStraight: !1,
                            showTitle: "",
                            showUrl: "",
                            type: "",
                            start_at_ts: "",
                            end_at_ts: "",
                            stream_items: []
                        }
                    },
                    mounted: function() {
                        var t = this;
                        return Object(i.a)(regeneratorRuntime.mark((function e() {
                            var a, i, n, r;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return a = t.$axios.defaults.baseURL, i = "".concat(a, "/stream"), e.prev = 2, e.next = 5, t.$axios.$get(i);
                                    case 5:
                                        n = e.sent, r = n.data, Object.keys(r).length > 0 && r.stream_items.length > 0 && (r.isShowLive = !0, Object.keys(r).forEach((function(e) {
                                            return t[e] = r[e]
                                        })), t.$nextTick((function() {
                                            var e = t.$refs.live,
                                                a = t.end_at_ts - Math.round(Date.now() / 1e3);
                                            if (a > 0) {
                                                var i = 300,
                                                    n = 169,
                                                    r = t.stream_items[0];
                                                "facebook" === t.type ? r.content.includes('style="') && r.content.includes("width: ") && r.content.includes("height: ") && (i = r.content.split('style="')[1].split("width: ")[1].split("px")[0], n = r.content.split('style="')[1].split("height: ")[1].split("px")[0]) : "live17" === t.type && r.content.includes("<embed") && (i = r.content.split('width="')[1].split('"')[0], n = r.content.split('height="')[1].split('"')[0]);
                                                var o = (n / i * 100).toFixed(2); + o > 100 && (t.isStraight = !0), e.style.paddingBottom = "".concat(o, "%"), t.stream_items.length >= 2 ? (t.carouselActive > t.stream_items.length - 1 && (t.carouselActive = 0, M.a.set("carouselActive", t.carouselActive, {
                                                    expires: 1 / 48
                                                })), e.innerHTML = "\n              ".concat(t.stream_items[t.carouselActive].content, '\n              <div class="m-stream__live-carousel-item').concat(t.isStraight ? " m-stream__live-carousel-item--straight" : "", '"></div>\n              ').trim(), t.showTitle = t.stream_items[t.carouselActive].title, t.showUrl = t.stream_items[t.carouselActive].url, t.carouselLive(e)) : (e.innerHTML = r.content, t.showTitle = r.title, t.showUrl = r.url), t.SET_IS_PLAYING_STREAM(!0), t.liveClose(a)
                                            }
                                        }))), e.next = 13;
                                        break;
                                    case 10:
                                        e.prev = 10, e.t0 = e.catch(2);
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [2, 10]
                            ])
                        })))()
                    },
                    methods: J(J({}, Object(o.c)(["SET_IS_PLAYING_STREAM"])), {}, {
                        carouselLive: function(t) {
                            var e = this;
                            this.$nextTick((function() {
                                var a = t.clientWidth;
                                e.carouselLiveTimer = setInterval((function() {
                                    var i = t.querySelector("embed") || t.querySelector("iframe"),
                                        n = document.querySelector(".m-stream__live-carousel-item");
                                    e.carouselActive >= e.stream_items.length - 1 ? (e.carouselActive = 0, M.a.set("carouselActive", e.carouselActive, {
                                        expires: 1 / 48
                                    })) : (e.carouselActive++, M.a.set("carouselActive", e.carouselActive, {
                                        expires: 1 / 48
                                    })), i.style.left = "".concat(-a, "px"), n.style.left = 0, i.addEventListener("transitionend", (function() {
                                        i.style.transitionDuration = "0s", i.style.left = 0, t.innerHTML = "\n            ".concat(e.stream_items[e.carouselActive].content, '\n            <div class="m-stream__live-carousel-item').concat(e.isStraight ? " m-stream__live-carousel-item--straight" : "", '"></div>\n            ').trim(), e.showTitle = e.stream_items[e.carouselActive].title, e.showUrl = e.stream_items[e.carouselActive].url, i.style.transitionDuration = "1s"
                                    }))
                                }), 12e4)
                            }))
                        },
                        liveClose: function(t) {
                            var e = this,
                                a = 1e3 * t,
                                i = this.$refs.stream;
                            t && t > 0 ? this.closeLiveTimer = setTimeout((function() {
                                i.remove(), clearInterval(e.carouselLiveTimer), M.a.remove("carouselActive"), e.SET_IS_PLAYING_STREAM(!1)
                            }), a) : (i.remove(), clearTimeout(this.closeLiveTimer), clearInterval(this.carouselLiveTimer), M.a.remove("carouselActive"), this.SET_IS_PLAYING_STREAM(!1))
                        }
                    })
                },
                et = (a(200), Object(S.a)(tt, (function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return t.isShowLive ? a("div", {
                        ref: "stream",
                        staticClass: "m-stream",
                        class: {
                            "m-stream--straight": t.isStraight
                        }
                    }, [a("div", {
                        staticClass: "m-stream__title"
                    }, [a("a", {
                        attrs: {
                            id: "live17" === t.type ? "live17-Stream" : "FB-Stream",
                            href: t.showUrl,
                            target: "_blank"
                        }
                    }, [t._v("\n      " + t._s("" !== t.showTitle ? t.showTitle : "點我看直播") + "\n    ")]), t._v(" "), a("button", {
                        staticClass: "m-stream__title-close",
                        attrs: {
                            type: "button"
                        },
                        on: {
                            click: t.liveClose
                        }
                    }, [a("img", {
                        attrs: {
                            src: "https://static.ctwant.com/images/dist/xx.svg",
                            alt: "close-live-button"
                        }
                    })])]), t._v(" "), a("div", {
                        ref: "live",
                        staticClass: "m-stream__live"
                    })]) : t._e()
                }), [], !1, null, "226bd1fe", null).exports),
                at = a(98);

            function it(t, e) {
                var a = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    e && (i = i.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), a.push.apply(a, i)
                }
                return a
            }

            function nt(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? it(Object(a), !0).forEach((function(e) {
                        Object(n.a)(t, e, a[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : it(Object(a)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                    }))
                }
                return t
            }
            var rt = {
                name: "Gotop",
                data: function() {
                    return {}
                },
                computed: nt(nt({}, Object(o.b)(["scrollTop"])), {}, {
                    showTop: function() {
                        return this.scrollTop > 500
                    }
                }),
                mounted: function() {
                    window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(t) {
                        window.setTimeout(t, 1e3 / 60)
                    }
                },
                methods: {
                    scrollToY: function(t, e, a) {
                        Object(at.a)(t, e, a)
                    }
                }
            };

            function ot(t, e) {
                var a = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    e && (i = i.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), a.push.apply(a, i)
                }
                return a
            }

            function st(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? ot(Object(a), !0).forEach((function(e) {
                        Object(n.a)(t, e, a[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : ot(Object(a)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                    }))
                }
                return t
            }
            var lt = {
                    components: {
                        Header: W,
                        Footer: G,
                        GDPR: K,
                        Webpush: V,
                        Gotop: Object(S.a)(rt, (function() {
                            var t = this,
                                e = t.$createElement,
                                a = t._self._c || e;
                            return a("div", {
                                directives: [{
                                    name: "show",
                                    rawName: "v-show",
                                    value: t.showTop,
                                    expression: "showTop"
                                }],
                                staticClass: "e-btn-gotop",
                                on: {
                                    click: function(e) {
                                        return t.scrollToY(0, 1500, "easeInOutQuint")
                                    }
                                }
                            }, [a("img", {
                                attrs: {
                                    src: "https://static.ctwant.com/images/dist/arrow-point-top.svg",
                                    alt: "置頂"
                                }
                            })])
                        }), [], !1, null, "88996c86", null).exports,
                        Stream: et
                    },
                    data: function() {
                        return {
                            isSetFontFamilyDefault: !1
                        }
                    },
                    computed: {
                        isHideAd: function() {
                            return this.$store.state.ad.isHideAd
                        }
                    },
                    created: function() {
                        this.checkLogin()
                    },
                    beforeMount: function() {
                        this.SET_SCREEN_WIDTH(window.screen.width), window.addEventListener("scroll", this.scrollTopHandler), this.$store.dispatch("ad/registerGlobalSlots"), this.$store.dispatch("ad/registerAndDisplayAutoRefreshSlot")
                    },
                    mounted: function() {
                        /iPhone/.test(navigator.userAgent) && /GSA/.test(navigator.userAgent) && (this.isSetFontFamilyDefault = !0)
                    },
                    methods: st(st({}, Object(o.c)(["SET_SCREEN_WIDTH", "SET_SCROLL_TOP"])), {}, {
                        scrollTopHandler: function() {
                            this.SET_SCROLL_TOP(this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop)
                        },
                        removeUrlIdToken: function() {
                            var t = Object.assign({}, this.$route.query);
                            delete t.id_token, this.$router.replace({
                                query: t
                            })
                        },
                        checkLogin: function() {
                            var t = this;
                            return Object(i.a)(regeneratorRuntime.mark((function e() {
                                var a;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!t.$route.query.id_token || null === t.$route.query.id_token) {
                                                e.next = 6;
                                                break
                                            }
                                            return e.next = 3, t.$store.dispatch("member/login", t.$route.query.id_token);
                                        case 3:
                                            t.removeUrlIdToken(), e.next = 7;
                                            break;
                                        case 6:
                                            M.a.get("idToken") ? (a = M.a.get("idToken"), t.$store.dispatch("member/checkIdToken", a), t.$store.dispatch("member/login", a)) : t.$store.commit("member/SET_IS_LOGIN", !1);
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        }
                    })
                },
                ct = (a(202), Object(S.a)(lt, (function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        class: {
                            "l-default--default-font-family": t.isSetFontFamilyDefault, "l-ad--hide-all-units": "Y" === t.isHideAd
                        }
                    }, [a("Header"), t._v(" "), a("nuxt"), t._v(" "), a("GDPR"), t._v(" "), a("Webpush"), t._v(" "), a("Gotop"), t._v(" "), a("div", {
                        attrs: {
                            id: "div-gpt-ad-1610439124541-0"
                        }
                    }), t._v(" "), a("Stream"), t._v(" "), a("Footer")], 1)
                }), [], !1, null, null, null).exports),
                pt = {},
                dt = Object(S.a)(pt, (function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", [e("nuxt")], 1)
                }), [], !1, null, null, null).exports;

            function mt(t, e) {
                var a;
                if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                    if (Array.isArray(t) || (a = function(t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return ut(t, e);
                            var a = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === a && t.constructor && (a = t.constructor.name);
                            if ("Map" === a || "Set" === a) return Array.from(t);
                            if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return ut(t, e)
                        }(t)) || e && t && "number" == typeof t.length) {
                        a && (t = a);
                        var i = 0,
                            n = function() {};
                        return {
                            s: n,
                            n: function() {
                                return i >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[i++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: n
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var r, o = !0,
                    s = !1;
                return {
                    s: function() {
                        a = t[Symbol.iterator]()
                    },
                    n: function() {
                        var t = a.next();
                        return o = t.done, t
                    },
                    e: function(t) {
                        s = !0, r = t
                    },
                    f: function() {
                        try {
                            o || null == a.return || a.return()
                        } finally {
                            if (s) throw r
                        }
                    }
                }
            }

            function ut(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var a = 0, i = new Array(e); a < e; a++) i[a] = t[a];
                return i
            }
            var ft = {
                    "_default.amp": Object(f.s)(I),
                    _default: Object(f.s)(ct),
                    _unsubscribe: Object(f.s)(dt)
                },
                ht = {
                    render: function(t, e) {
                        var a = t("NuxtLoading", {
                                ref: "loading"
                            }),
                            i = t(this.layout || "nuxt"),
                            n = t("div", {
                                domProps: {
                                    id: "__layout"
                                },
                                key: this.layoutName
                            }, [i]),
                            r = t("transition", {
                                props: {
                                    name: "layout",
                                    mode: "out-in"
                                },
                                on: {
                                    beforeEnter: function(t) {
                                        window.$nuxt.$nextTick((function() {
                                            window.$nuxt.$emit("triggerScroll")
                                        }))
                                    }
                                }
                            }, [n]);
                        return t("div", {
                            domProps: {
                                id: "__nuxt"
                            }
                        }, [a, r])
                    },
                    data: function() {
                        return {
                            isOnline: !0,
                            layout: null,
                            layoutName: "",
                            nbFetching: 0
                        }
                    },
                    beforeCreate: function() {
                        r.a.util.defineReactive(this, "nuxt", this.$options.nuxt)
                    },
                    created: function() {
                        this.$root.$options.$nuxt = this, window.$nuxt = this, this.refreshOnlineStatus(), window.addEventListener("online", this.refreshOnlineStatus), window.addEventListener("offline", this.refreshOnlineStatus), this.error = this.nuxt.error, this.context = this.$options.context
                    },
                    mounted: function() {
                        var t = this;
                        return Object(i.a)(regeneratorRuntime.mark((function e() {
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        t.$loading = t.$refs.loading;
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))()
                    },
                    watch: {
                        "nuxt.err": "errorChanged"
                    },
                    computed: {
                        isOffline: function() {
                            return !this.isOnline
                        },
                        isFetching: function() {
                            return this.nbFetching > 0
                        }
                    },
                    methods: {
                        refreshOnlineStatus: function() {
                            void 0 === window.navigator.onLine ? this.isOnline = !0 : this.isOnline = window.navigator.onLine
                        },
                        refresh: function() {
                            var t = this;
                            return Object(i.a)(regeneratorRuntime.mark((function e() {
                                var a, i;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if ((a = Object(f.h)(t.$route)).length) {
                                                e.next = 3;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 3:
                                            return t.$loading.start(), i = a.map((function(e) {
                                                var a = [];
                                                if (e.$options.fetch && e.$options.fetch.length && a.push(Object(f.q)(e.$options.fetch, t.context)), e.$fetch) a.push(e.$fetch());
                                                else {
                                                    var i, n = mt(Object(f.e)(e.$vnode.componentInstance));
                                                    try {
                                                        for (n.s(); !(i = n.n()).done;) {
                                                            var o = i.value;
                                                            a.push(o.$fetch())
                                                        }
                                                    } catch (t) {
                                                        n.e(t)
                                                    } finally {
                                                        n.f()
                                                    }
                                                }
                                                return e.$options.asyncData && a.push(Object(f.q)(e.$options.asyncData, t.context).then((function(t) {
                                                    for (var a in t) r.a.set(e.$data, a, t[a])
                                                }))), Promise.all(a)
                                            })), e.prev = 5, e.next = 8, Promise.all(i);
                                        case 8:
                                            e.next = 15;
                                            break;
                                        case 10:
                                            e.prev = 10, e.t0 = e.catch(5), t.$loading.fail(e.t0), Object(f.k)(e.t0), t.error(e.t0);
                                        case 15:
                                            t.$loading.finish();
                                        case 16:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [5, 10]
                                ])
                            })))()
                        },
                        errorChanged: function() {
                            if (this.nuxt.err) {
                                this.$loading && (this.$loading.fail && this.$loading.fail(this.nuxt.err), this.$loading.finish && this.$loading.finish());
                                var t = (T.options || T).layout;
                                "function" == typeof t && (t = t(this.context)), this.setLayout(t)
                            }
                        },
                        setLayout: function(t) {
                            return t && ft["_" + t] || (t = "default"), this.layoutName = t, this.layout = ft["_" + t], this.layout
                        },
                        loadLayout: function(t) {
                            return t && ft["_" + t] || (t = "default"), Promise.resolve(ft["_" + t])
                        }
                    },
                    components: {
                        NuxtLoading: E
                    }
                };

            function gt(t, e) {
                var a;
                if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                    if (Array.isArray(t) || (a = function(t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return bt(t, e);
                            var a = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === a && t.constructor && (a = t.constructor.name);
                            if ("Map" === a || "Set" === a) return Array.from(t);
                            if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return bt(t, e)
                        }(t)) || e && t && "number" == typeof t.length) {
                        a && (t = a);
                        var i = 0,
                            n = function() {};
                        return {
                            s: n,
                            n: function() {
                                return i >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[i++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: n
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var r, o = !0,
                    s = !1;
                return {
                    s: function() {
                        a = t[Symbol.iterator]()
                    },
                    n: function() {
                        var t = a.next();
                        return o = t.done, t
                    },
                    e: function(t) {
                        s = !0, r = t
                    },
                    f: function() {
                        try {
                            o || null == a.return || a.return()
                        } finally {
                            if (s) throw r
                        }
                    }
                }
            }

            function bt(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var a = 0, i = new Array(e); a < e; a++) i[a] = t[a];
                return i
            }
            r.a.use(o.a);
            var xt = ["state", "getters", "actions", "mutations"],
                _t = {};
            (_t = function(t, e) {
                if ((t = t.default || t).commit) throw new Error("[nuxt] ".concat(e, " should export a method that returns a Vuex instance."));
                return "function" != typeof t && (t = Object.assign({}, t)), vt(t, e)
            }(a(204), "store/index.js")).modules = _t.modules || {}, yt(a(205), "ad.js"), yt(a(206), "member.js");
            var wt = _t instanceof Function ? _t : function() {
                return new o.a.Store(Object.assign({
                    strict: !1
                }, _t))
            };

            function vt(t, e) {
                if (t.state && "function" != typeof t.state) {
                    var a = Object.assign({}, t.state);
                    t = Object.assign({}, t, {
                        state: function() {
                            return a
                        }
                    })
                }
                return t
            }

            function yt(t, e) {
                t = t.default || t;
                var a = e.replace(/\.(js|mjs)$/, "").split("/"),
                    i = a[a.length - 1];
                "store/".concat(e);
                if (t = "state" === i ? function(t, e) {
                        if ("function" != typeof t) {
                            var a = Object.assign({}, t);
                            return function() {
                                return a
                            }
                        }
                        return vt(t)
                    }(t) : vt(t), xt.includes(i)) {
                    var n = i;
                    Ot(kt(_t, a, {
                        isProperty: !0
                    }), t, n)
                } else {
                    "index" === i && (a.pop(), i = a[a.length - 1]);
                    var r, o = kt(_t, a),
                        s = gt(xt);
                    try {
                        for (s.s(); !(r = s.n()).done;) {
                            var l = r.value;
                            Ot(o, t[l], l)
                        }
                    } catch (t) {
                        s.e(t)
                    } finally {
                        s.f()
                    }!1 === t.namespaced && delete o.namespaced
                }
            }

            function kt(t, e) {
                var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    i = a.isProperty,
                    n = void 0 !== i && i;
                if (!e.length || n && 1 === e.length) return t;
                var r = e.shift();
                return t.modules[r] = t.modules[r] || {}, t.modules[r].namespaced = !0, t.modules[r].modules = t.modules[r].modules || {}, kt(t.modules[r], e, {
                    isProperty: n
                })
            }

            function Ot(t, e, a) {
                e && ("state" === a ? t.state = e || t.state : t[a] = Object.assign({}, t[a], e))
            }
            a(99);
            var jt = "dataLayer",
                Ct = "GTM-NF95NZR";
            var St = function(t, e) {
                    var a = "GTM-NF95NZR",
                        i = (t.$config && t.$config.gtm || {}).id,
                        r = function(t, e) {
                            return {
                                init: function() {
                                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Ct;
                                    !e[t] && window._gtm_inject && (window._gtm_inject(t), e[t] = !0)
                                },
                                push: function(t) {
                                    window[jt] || (window[jt] = []), window[jt].push(t)
                                }
                            }
                        }(0, Object(n.a)({}, a, !0));
                    i && i !== a && r.init(i), t.$gtm = r, e("gtm", t.$gtm)
                },
                Tt = a(27);
            a(207);

            function Pt(t, e) {
                var a = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    e && (i = i.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), a.push.apply(a, i)
                }
                return a
            }

            function $t(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? Pt(Object(a), !0).forEach((function(e) {
                        Object(n.a)(t, e, a[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : Pt(Object(a)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                    }))
                }
                return t
            }
            var At = {
                name: "AmpMustache",
                render: function(t) {
                    return t("template", {
                        props: $t({}, this.$props),
                        attrs: {
                            type: "amp-mustache"
                        }
                    }, this.$slots.default)
                }
            };

            function Et(t, e) {
                var a = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    e && (i = i.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), a.push.apply(a, i)
                }
                return a
            }
            r.a.component(At.name, At);
            var Rt = s.a.version.split("."),
                Dt = Object(P.a)(Rt, 1)[0];

            function zt(t, e, a) {
                t[e] || (t[e] = a)
            }
            var It = function(t, e) {
                    var a = t.route,
                        i = t.req;
                    if (a.matched[0]) {
                        var n = "/amp" === a.path || 0 === a.path.indexOf("/amp/"),
                            r = a.matched[0].components.default.options,
                            o = Array.isArray(a.meta) ? a.meta[0].amp : a.meta.amp,
                            s = function() {
                                for (var t = arguments.length, e = new Array(t), a = 0; a < t; a++) e[a] = arguments[a];
                                for (var i = 0, n = e; i < n.length; i++) {
                                    var r = n[i];
                                    if (void 0 !== r) return r
                                }
                            }(r.amp, o, "false"),
                            l = !1;
                        switch (s) {
                            case !0:
                            case "only":
                                l = !0, s = "only";
                                break;
                            case "hybrid":
                                l = n, s = "hybrid";
                                break;
                            case !1:
                            default:
                                l = !1, s = !1
                        }
                        var c = i || {};
                        c.isAMP = l, t.$isAMP = l, e("req", c), e("isAMP", l), e("ampMode", s), !l && n && t.error({
                            statusCode: 404,
                            message: "This page could not be found"
                        }), !1 === s || r._amp || (r.head = Lt(r.head), r.layout = Mt(r.layout, r.ampLayout), r._amp = !0)
                    }
                },
                Lt = function(t) {
                    return function() {
                        var e, a;
                        switch (e = window.location.origin, Object(Tt.a)(t)) {
                            case "function":
                                a = t.call(this);
                                break;
                            case "object":
                                a = function(t) {
                                    for (var e = 1; e < arguments.length; e++) {
                                        var a = null != arguments[e] ? arguments[e] : {};
                                        e % 2 ? Et(Object(a), !0).forEach((function(e) {
                                            Object(n.a)(t, e, a[e])
                                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : Et(Object(a)).forEach((function(e) {
                                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                                        }))
                                    }
                                    return t
                                }({}, t);
                                break;
                            default:
                                a = {}
                        }
                        if (zt(a, "link", []), this.$isAMP) {
                            if (e && !a.link.find((function(t) {
                                    return "canonical" === t.rel || "canonical" === t.hid
                                }))) {
                                var i = this.$isAMP && "only" !== this.$ampMode ? this.$route.fullPath.replace(/^\/amp(\/.*)?/, "$1") : this.$route.fullPath;
                                a.link.push({
                                    rel: "canonical",
                                    hid: "canonical",
                                    href: e + i
                                })
                            }
                            zt(a, "htmlAttrs", {}), a.htmlAttrs.amp = Dt >= 2 || void 0, zt(a, "bodyAttrs", {}), zt(a.bodyAttrs, "class", ""), a.bodyAttrs.class += " __amp"
                        }
                        if (!1 !== this.$ampMode && !1 === this.$isAMP && !a.link.find((function(t) {
                                return "amphtml" === t.rel || "amphtml" === t.hid
                            }))) {
                            var r = "only" === this.$ampMode ? "" : "/amp";
                            a.link.push({
                                rel: "amphtml",
                                hid: "amphtml",
                                href: e + r + this.$route.fullPath
                            })
                        }
                        return a
                    }
                },
                Mt = function(t, e) {
                    return function(a) {
                        var i;
                        return a.app.$isAMP && e ? ("function" == typeof(i = e) && (i = i.call(this, a)), i) : ("function" == typeof(i = t || "default") && (i = i.call(this, a)), i)
                    }
                },
                Nt = a(143);
            a.n(Nt).a.load({
                google: {
                    families: ["Noto+Sans+TC:300,400,500,700&display=swap"]
                }
            });
            var Yt = a(57),
                Ut = a.n(Yt),
                Wt = a(144),
                Ht = a.n(Wt);

            function qt(t, e) {
                var a = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    e && (i = i.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), a.push.apply(a, i)
                }
                return a
            }

            function Xt(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? qt(Object(a), !0).forEach((function(e) {
                        Object(n.a)(t, e, a[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : qt(Object(a)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                    }))
                }
                return t
            }

            function Ft(t, e) {
                var a;
                if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                    if (Array.isArray(t) || (a = function(t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return Gt(t, e);
                            var a = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === a && t.constructor && (a = t.constructor.name);
                            if ("Map" === a || "Set" === a) return Array.from(t);
                            if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return Gt(t, e)
                        }(t)) || e && t && "number" == typeof t.length) {
                        a && (t = a);
                        var i = 0,
                            n = function() {};
                        return {
                            s: n,
                            n: function() {
                                return i >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[i++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: n
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var r, o = !0,
                    s = !1;
                return {
                    s: function() {
                        a = t[Symbol.iterator]()
                    },
                    n: function() {
                        var t = a.next();
                        return o = t.done, t
                    },
                    e: function(t) {
                        s = !0, r = t
                    },
                    f: function() {
                        try {
                            o || null == a.return || a.return()
                        } finally {
                            if (s) throw r
                        }
                    }
                }
            }

            function Gt(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var a = 0, i = new Array(e); a < e; a++) i[a] = t[a];
                return i
            }
            for (var Bt = {
                    setBaseURL: function(t) {
                        this.defaults.baseURL = t
                    },
                    setHeader: function(t, e) {
                        var a, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "common",
                            n = Ft(Array.isArray(i) ? i : [i]);
                        try {
                            for (n.s(); !(a = n.n()).done;) {
                                var r = a.value;
                                if (!e) return void delete this.defaults.headers[r][t];
                                this.defaults.headers[r][t] = e
                            }
                        } catch (t) {
                            n.e(t)
                        } finally {
                            n.f()
                        }
                    },
                    setToken: function(t, e) {
                        var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "common",
                            i = t ? (e ? e + " " : "") + t : null;
                        this.setHeader("Authorization", i, a)
                    },
                    onRequest: function(t) {
                        this.interceptors.request.use((function(e) {
                            return t(e) || e
                        }))
                    },
                    onResponse: function(t) {
                        this.interceptors.response.use((function(e) {
                            return t(e) || e
                        }))
                    },
                    onRequestError: function(t) {
                        this.interceptors.request.use(void 0, (function(e) {
                            return t(e) || Promise.reject(e)
                        }))
                    },
                    onResponseError: function(t) {
                        this.interceptors.response.use(void 0, (function(e) {
                            return t(e) || Promise.reject(e)
                        }))
                    },
                    onError: function(t) {
                        this.onRequestError(t), this.onResponseError(t)
                    },
                    create: function(t) {
                        return Zt(Ht()(t, this.defaults))
                    }
                }, Kt = function() {
                    var t = Vt[Qt];
                    Bt["$" + t] = function() {
                        return this[t].apply(this, arguments).then((function(t) {
                            return t && t.data
                        }))
                    }
                }, Qt = 0, Vt = ["request", "delete", "get", "head", "options", "post", "put", "patch"]; Qt < Vt.length; Qt++) Kt();
            var Zt = function(t) {
                    var e = Ut.a.create(t);
                    return e.CancelToken = Ut.a.CancelToken, e.isCancel = Ut.a.isCancel,
                        function(t) {
                            for (var e in Bt) t[e] = Bt[e].bind(t)
                        }(e), e.onRequest((function(t) {
                            t.headers = Xt(Xt({}, e.defaults.headers.common), t.headers)
                        })), Jt(e), e
                },
                Jt = function(t) {
                    var e = {
                            finish: function() {},
                            start: function() {},
                            fail: function() {},
                            set: function() {}
                        },
                        a = function() {
                            var t = "undefined" != typeof window && window.$nuxt;
                            return t && t.$loading && t.$loading.set ? t.$loading : e
                        },
                        i = 0;
                    t.onRequest((function(t) {
                        t && !1 === t.progress || i++
                    })), t.onResponse((function(t) {
                        t && t.config && !1 === t.config.progress || --i <= 0 && (i = 0, a().finish())
                    })), t.onError((function(t) {
                        t && t.config && !1 === t.config.progress || (i--, Ut.a.isCancel(t) ? i <= 0 && (i = 0, a().finish()) : (a().fail(), a().finish()))
                    }));
                    var n = function(t) {
                        if (i && t.total) {
                            var e = 100 * t.loaded / (t.total * i);
                            a().set(Math.min(100, e))
                        }
                    };
                    t.defaults.onUploadProgress = n, t.defaults.onDownloadProgress = n
                },
                te = function(t, e) {
                    var a = t.$config && t.$config.axios || {},
                        i = a.browserBaseURL || a.browserBaseUrl || a.baseURL || a.baseUrl || "https://api.ctwant.com/api/v1";
                    var n = Zt({
                        baseURL: i,
                        headers: {
                            common: {
                                Accept: "application/json, text/plain, */*"
                            },
                            delete: {},
                            get: {},
                            head: {},
                            post: {},
                            put: {},
                            patch: {}
                        }
                    });
                    t.$axios = n, e("axios", n)
                },
                ee = a(145),
                ae = a.n(ee);
            r.a.use(ae.a);
            var ie = a(94),
                ne = a.n(ie);
            r.a.component(ne.a.name, ne.a);
            var re = a(73),
                oe = function(t) {
                    var e = t.$axios;
                    t.redirect;
                    e.setHeader("Content-Type", "application/json"), e.onError((function(t) {
                        var e = t.response.data,
                            a = new re.a({
                                position: {
                                    x: "right",
                                    y: "top"
                                }
                            });
                        if (a.error("".concat(e.code, " ").concat(e.message)), Object.prototype.hasOwnProperty.call(e, "errors"))
                            for (var i in e.errors.validation) a.error("".concat(e.errors.validation[i]))
                    }))
                };
            r.a.prototype.$notyf = new re.a({
                position: {
                    x: "right",
                    y: "top"
                }
            });
            var se = a(146),
                le = a.n(se).a;

            function ce(t, e) {
                var a = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    e && (i = i.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), a.push.apply(a, i)
                }
                return a
            }

            function pe(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? ce(Object(a), !0).forEach((function(e) {
                        Object(n.a)(t, e, a[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : ce(Object(a)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                    }))
                }
                return t
            }
            r.a.component(c.a.name, c.a), r.a.component(d.a.name, pe(pe({}, d.a), {}, {
                render: function(t, e) {
                    return d.a._warned || (d.a._warned = !0), d.a.render(t, e)
                }
            })), r.a.component(w.name, w), r.a.component("NChild", w), r.a.component($.name, $), Object.defineProperty(r.a.prototype, "$nuxt", {
                get: function() {
                    var t = this.$root.$options.$nuxt;
                    return t || "undefined" == typeof window ? t : window.$nuxt
                },
                configurable: !0
            }), r.a.use(s.a, {
                keyName: "head",
                attribute: "data-n-head",
                ssrAttribute: "data-n-head-ssr",
                tagIDKeyName: "hid"
            });
            var de = {
                    name: "page",
                    mode: "out-in",
                    appear: !1,
                    appearClass: "appear",
                    appearActiveClass: "appear-active",
                    appearToClass: "appear-to"
                },
                me = o.a.Store.prototype.registerModule;

            function ue(t, e) {
                var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    i = Array.isArray(t) ? !!t.reduce((function(t, e) {
                        return t && t[e]
                    }), this.state) : t in this.state;
                return me.call(this, t, e, pe({
                    preserveState: i
                }, a))
            }

            function fe(t) {
                return he.apply(this, arguments)
            }

            function he() {
                return (he = Object(i.a)(regeneratorRuntime.mark((function t(e) {
                    var a, n, o, s, l, c, p, d, m = arguments;
                    return regeneratorRuntime.wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return d = function(t, e) {
                                    if (!t) throw new Error("inject(key, value) has no key provided");
                                    if (void 0 === e) throw new Error("inject('".concat(t, "', value) has no value provided"));
                                    s[t = "$" + t] = e, s.context[t] || (s.context[t] = e), o[t] = s[t];
                                    var a = "__nuxt_" + t + "_installed__";
                                    r.a[a] || (r.a[a] = !0, r.a.use((function() {
                                        Object.prototype.hasOwnProperty.call(r.a.prototype, t) || Object.defineProperty(r.a.prototype, t, {
                                            get: function() {
                                                return this.$root.$options[t]
                                            }
                                        })
                                    })))
                                }, a = m.length > 1 && void 0 !== m[1] ? m[1] : {}, t.next = 4, _(0, a);
                            case 4:
                                return n = t.sent, (o = wt(e)).$router = n, o.registerModule = ue, s = pe({
                                    head: {
                                        title: "CTWANT",
                                        meta: [{
                                            name: "viewport",
                                            content: "width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=no"
                                        }, {
                                            hid: "description",
                                            name: "description",
                                            content: "CTWANT為一綜合型新聞網站，由王道旺台媒體股份有限公司於2019年7月創建，涵蓋政治、財經、社會、娛樂、漂亮、生活、國際、影音等八大類別，提供獨家新聞及豐富內容，未來將企劃更多精采專題，讓您一手掌握最新資訊！"
                                        }, {
                                            hid: "keywords",
                                            name: "keywords",
                                            content: "CTWANT,時報周刊,周刊王,政治,社會"
                                        }, {
                                            hid: "ogUrl",
                                            property: "og:url",
                                            content: "https://www.ctwant.com"
                                        }, {
                                            hid: "ogType",
                                            property: "og:type",
                                            content: "website"
                                        }, {
                                            hid: "ogTitle",
                                            property: "og:title",
                                            content: "CTWANT"
                                        }, {
                                            hid: "ogImage",
                                            property: "og:image",
                                            content: "https://static.ctwant.com/images/dist/ctwant.jpg"
                                        }, {
                                            hid: "ogImageWidth",
                                            property: "og:image:width",
                                            content: "858"
                                        }, {
                                            hid: "ogImageHeight",
                                            property: "og:image:height",
                                            content: "452"
                                        }, {
                                            hid: "ogDescription",
                                            property: "og:description",
                                            content: "CTWANT為一綜合型新聞網站，由王道旺台媒體股份有限公司於2019年7月創建，涵蓋政治、財經、社會、娛樂、漂亮、生活、國際、影音等八大類別，提供獨家新聞及豐富內容，未來將企劃更多精采專題，讓您一手掌握最新資訊！"
                                        }, {
                                            hid: "fbPages",
                                            property: "fb:pages",
                                            content: "105483392827926"
                                        }, {
                                            hid: "charset",
                                            charset: "utf-8"
                                        }],
                                        link: [{
                                            hid: "alternate",
                                            rel: "alternate",
                                            hreflang: "zh-Hant",
                                            href: "https://www.ctwant.com"
                                        }, {
                                            rel: "apple-touch-icon",
                                            href: "https://static.ctwant.com/images/dist/apple-touch-icon.png"
                                        }, {
                                            hid: "canonical",
                                            rel: "canonical",
                                            href: "https://www.ctwant.com"
                                        }],
                                        script: [{
                                            src: "https://polyfill.io/v3/polyfill.min.js?features=Symbol.asyncIterator%2CSymbol%2Ces2015%2Ces2016%2Ces2017%2Ces2018%2Ces2019%2Ces5%2Ces6%2Ces7%2Cfetch"
                                        }, {
                                            src: "https://securepubads.g.doubleclick.net/tag/js/gpt.js"
                                        }, {
                                            src: "https://www.gstatic.com/firebasejs/7.13.2/firebase-app.js",
                                            defer: !0
                                        }, {
                                            src: "https://www.gstatic.com/firebasejs/7.13.2/firebase-messaging.js",
                                            defer: !0
                                        }, {
                                            src: "https://www.instagram.com/embed.js",
                                            defer: !0
                                        }, {
                                            hid: "gtm-script",
                                            innerHTML: "if(!window._gtm_init){window._gtm_init=1;(function(w,n,d,m,e,p){w[d]=(w[d]==1||n[d]=='yes'||n[d]==1||n[m]==1||(w[e]&&w[e][p]&&w[e][p]()))?1:0})(window,navigator,'doNotTrack','msDoNotTrack','external','msTrackingProtectionEnabled');(function(w,d,s,l,x,y){w[x]={};w._gtm_inject=function(i){w[x][i]=1;w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i;f.parentNode.insertBefore(j,f);};w[y]('GTM-NF95NZR')})(window,document,'script','dataLayer','_gtm_ids','_gtm_inject')}"
                                        }],
                                        style: [],
                                        noscript: [{
                                            hid: "gtm-noscript",
                                            pbody: !0,
                                            innerHTML: '<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NF95NZR&" height="0" width="0" style="display:none;visibility:hidden" title="gtm"></iframe>'
                                        }],
                                        __dangerouslyDisableSanitizersByTagID: {
                                            "gtm-script": ["innerHTML"],
                                            "gtm-noscript": ["innerHTML"]
                                        }
                                    },
                                    store: o,
                                    router: n,
                                    nuxt: {
                                        defaultTransition: de,
                                        transitions: [de],
                                        setTransitions: function(t) {
                                            return Array.isArray(t) || (t = [t]), t = t.map((function(t) {
                                                return t = t ? "string" == typeof t ? Object.assign({}, de, {
                                                    name: t
                                                }) : Object.assign({}, de, t) : de
                                            })), this.$options.nuxt.transitions = t, t
                                        },
                                        err: null,
                                        dateErr: null,
                                        error: function(t) {
                                            t = t || null, s.context._errored = Boolean(t), t = t ? Object(f.p)(t) : null;
                                            var a = s.nuxt;
                                            return this && (a = this.nuxt || this.$options.nuxt), a.dateErr = Date.now(), a.err = t, e && (e.nuxt.error = t), t
                                        }
                                    }
                                }, ht), o.app = s, l = e ? e.next : function(t) {
                                    return s.router.push(t)
                                }, e ? c = n.resolve(e.url).route : (p = Object(f.f)(n.options.base, n.options.mode), c = n.resolve(p).route), t.next = 14, Object(f.t)(s, {
                                    store: o,
                                    route: c,
                                    next: l,
                                    error: s.nuxt.error.bind(s),
                                    payload: e ? e.payload : void 0,
                                    req: e ? e.req : void 0,
                                    res: e ? e.res : void 0,
                                    beforeRenderFns: e ? e.beforeRenderFns : void 0,
                                    ssrContext: e
                                });
                            case 14:
                                return d("config", a), window.__NUXT__ && window.__NUXT__.state && o.replaceState(window.__NUXT__.state), t.next = 20, St(s.context, d);
                            case 20:
                                return t.next = 23, It(s.context, d);
                            case 23:
                                t.next = 26;
                                break;
                            case 26:
                                return t.next = 29, te(s.context, d);
                            case 29:
                                t.next = 32;
                                break;
                            case 32:
                                t.next = 35;
                                break;
                            case 35:
                                return t.next = 38, oe(s.context);
                            case 38:
                                t.next = 41;
                                break;
                            case 41:
                                if ("function" != typeof le) {
                                    t.next = 44;
                                    break
                                }
                                return t.next = 44, le(s.context, d);
                            case 44:
                                return t.next = 47, new Promise((function(t, e) {
                                    n.push(s.context.route.fullPath, t, (function(a) {
                                        if (!a._isRouter) return e(a);
                                        if (2 !== a.type) return t();
                                        var r = n.afterEach(function() {
                                            var e = Object(i.a)(regeneratorRuntime.mark((function e(a, i) {
                                                return regeneratorRuntime.wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.next = 3, Object(f.j)(a);
                                                        case 3:
                                                            s.context.route = e.sent, s.context.params = a.params || {}, s.context.query = a.query || {}, r(), t();
                                                        case 8:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            })));
                                            return function(t, a) {
                                                return e.apply(this, arguments)
                                            }
                                        }())
                                    }))
                                }));
                            case 47:
                                return t.abrupt("return", {
                                    store: o,
                                    app: s,
                                    router: n
                                });
                            case 48:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })))).apply(this, arguments)
            }
        },
        74: function(t, e, a) {
            "use strict";
            a(63), a(49), a(41), a(11), a(20), a(34), a(21), a(8), a(40), a(42), a(43);
            var i = a(1);

            function n(t, e) {
                var a;
                if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                    if (Array.isArray(t) || (a = function(t, e) {
                            if (!t) return;
                            if ("string" == typeof t) return r(t, e);
                            var a = Object.prototype.toString.call(t).slice(8, -1);
                            "Object" === a && t.constructor && (a = t.constructor.name);
                            if ("Map" === a || "Set" === a) return Array.from(t);
                            if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return r(t, e)
                        }(t)) || e && t && "number" == typeof t.length) {
                        a && (t = a);
                        var i = 0,
                            n = function() {};
                        return {
                            s: n,
                            n: function() {
                                return i >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[i++]
                                }
                            },
                            e: function(t) {
                                throw t
                            },
                            f: n
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var o, s = !0,
                    l = !1;
                return {
                    s: function() {
                        a = t[Symbol.iterator]()
                    },
                    n: function() {
                        var t = a.next();
                        return s = t.done, t
                    },
                    e: function(t) {
                        l = !0, o = t
                    },
                    f: function() {
                        try {
                            s || null == a.return || a.return()
                        } finally {
                            if (l) throw o
                        }
                    }
                }
            }

            function r(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var a = 0, i = new Array(e); a < e; a++) i[a] = t[a];
                return i
            }
            var o = window.requestIdleCallback || function(t) {
                    var e = Date.now();
                    return setTimeout((function() {
                        t({
                            didTimeout: !1,
                            timeRemaining: function() {
                                return Math.max(0, 50 - (Date.now() - e))
                            }
                        })
                    }), 1)
                },
                s = window.cancelIdleCallback || function(t) {
                    clearTimeout(t)
                },
                l = window.IntersectionObserver && new window.IntersectionObserver((function(t) {
                    t.forEach((function(t) {
                        var e = t.intersectionRatio,
                            a = t.target;
                        e <= 0 || !a.__prefetch || a.__prefetch()
                    }))
                }));
            e.a = {
                name: "NuxtLink",
                extends: i.a.component("RouterLink"),
                props: {
                    prefetch: {
                        type: Boolean,
                        default: !1
                    },
                    noPrefetch: {
                        type: Boolean,
                        default: !1
                    }
                },
                mounted: function() {
                    this.prefetch && !this.noPrefetch && (this.handleId = o(this.observe, {
                        timeout: 2e3
                    }))
                },
                beforeDestroy: function() {
                    s(this.handleId), this.__observed && (l.unobserve(this.$el), delete this.$el.__prefetch)
                },
                methods: {
                    observe: function() {
                        l && this.shouldPrefetch() && (this.$el.__prefetch = this.prefetchLink.bind(this), l.observe(this.$el), this.__observed = !0)
                    },
                    shouldPrefetch: function() {
                        return this.getPrefetchComponents().length > 0
                    },
                    canPrefetch: function() {
                        var t = navigator.connection;
                        return !(this.$nuxt.isOffline || t && ((t.effectiveType || "").includes("2g") || t.saveData))
                    },
                    getPrefetchComponents: function() {
                        return this.$router.resolve(this.to, this.$route, this.append).resolved.matched.map((function(t) {
                            return t.components.default
                        })).filter((function(t) {
                            return "function" == typeof t && !t.options && !t.__prefetched
                        }))
                    },
                    prefetchLink: function() {
                        if (this.canPrefetch()) {
                            l.unobserve(this.$el);
                            var t, e = n(this.getPrefetchComponents());
                            try {
                                for (e.s(); !(t = e.n()).done;) {
                                    var a = t.value,
                                        i = a();
                                    i instanceof Promise && i.catch((function() {})), a.__prefetched = !0
                                }
                            } catch (t) {
                                e.e(t)
                            } finally {
                                e.f()
                            }
                        }
                    }
                }
            }
        },
        91: function(t, e, a) {
            "use strict";
            e.a = {}
        },
        95: function(t, e, a) {
            "use strict";
            a(28);
            e.a = {
                methods: {
                    ReplaceNewline: function(t) {
                        return t.replace(/\n/g, "<br />")
                    },
                    articleType: function(t) {
                        var e = {
                            style: {},
                            text: ""
                        };
                        switch (t.content_type ? t.content_type : t.type) {
                            case "release":
                                e.style["e-type--red"] = !0, e.text = "情報";
                                break;
                            case "sponsored":
                                e.style["e-type--green"] = !0, e.text = "特輯"
                        }
                        return e
                    }
                }
            }
        },
        96: function(t, e, a) {
            "use strict";
            var i = {
                    props: {
                        src: {
                            type: String,
                            required: !0,
                            default: "https://static.ctwant.com/images/dist/default_cover_md.png"
                        },
                        alt: {
                            type: String,
                            default: "alt"
                        }
                    }
                },
                n = a(3),
                r = Object(n.a)(i, (function() {
                    var t = this,
                        e = t.$createElement;
                    return (t._self._c || e)("img", {
                        staticClass: "lazyload",
                        attrs: {
                            "data-src": t.src,
                            alt: t.alt,
                            src: "https://static.ctwant.com/images/dist/imageholder.jpg",
                            onerror: "this.src='https://static.ctwant.com/images/dist/default_cover_md.png'"
                        }
                    })
                }), [], !1, null, null, null);
            e.a = r.exports
        },
        98: function(t, e, a) {
            "use strict";

            function i() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2e3,
                    a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "easeOutSine",
                    i = window.scrollY || document.documentElement.scrollTop,
                    n = 0,
                    r = Math.max(.1, Math.min(Math.abs(i - t) / e, .8)),
                    o = {
                        easeOutSine: function(t) {
                            return Math.sin(t * (Math.PI / 2))
                        },
                        easeInOutSine: function(t) {
                            return -.5 * (Math.cos(Math.PI * t) - 1)
                        },
                        easeInOutQuint: function(t) {
                            return (t /= .5) < 1 ? .5 * Math.pow(t, 5) : .5 * (Math.pow(t - 2, 5) + 2)
                        }
                    };

                function s() {
                    var e = (n += 1 / 60) / r,
                        l = o[a](e);
                    e < 1 ? (window.requestAnimFrame(s), window.scrollTo(0, i + (t - i) * l)) : window.scrollTo(0, t)
                }
                s()
            }
            a.d(e, "a", (function() {
                return i
            }))
        }
    },
    [
        [152, 19, 2, 20]
    ]
]);