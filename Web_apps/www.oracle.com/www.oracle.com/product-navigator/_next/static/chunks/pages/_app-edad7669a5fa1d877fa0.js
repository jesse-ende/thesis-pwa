_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [6], {
        0: function(e, t, n) {
            n("GcxT"), e.exports = n("nOHt")
        },
        "00et": function(e, t, n) {},
        GcxT: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
                return n("IlR1")
            }])
        },
        IlR1: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("cpVT"),
                i = n("nKUr"),
                o = n("q1tI"),
                c = Object.prototype.hasOwnProperty;
            var a = new WeakMap,
                s = 0;
            var u = {
                isOnline: function() {
                    return "undefined" === typeof navigator.onLine || navigator.onLine
                },
                isDocumentVisible: function() {
                    return "undefined" === typeof document || "undefined" === typeof document.visibilityState || "hidden" !== document.visibilityState
                },
                fetcher: function(e) {
                    return fetch(e).then((function(e) {
                        return e.json()
                    }))
                }
            };
            new(function() {
                function e(e) {
                    void 0 === e && (e = {}), this.__cache = new Map(Object.entries(e)), this.__listeners = []
                }
                return e.prototype.get = function(e) {
                    var t = this.serializeKey(e)[0];
                    return this.__cache.get(t)
                }, e.prototype.set = function(e, t) {
                    var n = this.serializeKey(e)[0];
                    this.__cache.set(n, t), this.notify()
                }, e.prototype.keys = function() {
                    return Array.from(this.__cache.keys())
                }, e.prototype.has = function(e) {
                    var t = this.serializeKey(e)[0];
                    return this.__cache.has(t)
                }, e.prototype.clear = function() {
                    this.__cache.clear(), this.notify()
                }, e.prototype.delete = function(e) {
                    var t = this.serializeKey(e)[0];
                    this.__cache.delete(t), this.notify()
                }, e.prototype.serializeKey = function(e) {
                    var t = null;
                    if ("function" === typeof e) try {
                        e = e()
                    } catch (n) {
                        e = ""
                    }
                    return Array.isArray(e) ? (t = e, e = function(e) {
                        if (!e.length) return "";
                        for (var t = "arg", n = 0; n < e.length; ++n)
                            if (null !== e[n]) {
                                var r = void 0;
                                "object" !== typeof e[n] && "function" !== typeof e[n] ? r = "string" === typeof e[n] ? '"' + e[n] + '"' : String(e[n]) : a.has(e[n]) ? r = a.get(e[n]) : (r = s, a.set(e[n], s++)), t += "@" + r
                            } else t += "@null";
                        return t
                    }(e)) : e = String(e || ""), [e, t, e ? "err@" + e : "", e ? "validating@" + e : ""]
                }, e.prototype.subscribe = function(e) {
                    var t = this;
                    if ("function" !== typeof e) throw new Error("Expected the listener to be a function.");
                    var n = !0;
                    return this.__listeners.push(e),
                        function() {
                            if (n) {
                                n = !1;
                                var r = t.__listeners.indexOf(e);
                                r > -1 && (t.__listeners[r] = t.__listeners[t.__listeners.length - 1], t.__listeners.length--)
                            }
                        }
                }, e.prototype.notify = function() {
                    for (var e = 0, t = this.__listeners; e < t.length; e++) {
                        (0, t[e])()
                    }
                }, e
            }());
            var f = "undefined" !== typeof window && navigator.connection && -1 !== ["slow-2g", "2g"].indexOf(navigator.connection.effectiveType),
                l = {
                    onLoadingSlow: function() {},
                    onSuccess: function() {},
                    onError: function() {},
                    onErrorRetry: function(e, t, n, r, i) {
                        if (n.isDocumentVisible() && !("number" === typeof n.errorRetryCount && i.retryCount > n.errorRetryCount)) {
                            var o = Math.min(i.retryCount || 0, 8),
                                c = ~~((Math.random() + .5) * (1 << o)) * n.errorRetryInterval;
                            setTimeout(r, c, i)
                        }
                    },
                    errorRetryInterval: 1e3 * (f ? 10 : 5),
                    focusThrottleInterval: 5e3,
                    dedupingInterval: 2e3,
                    loadingTimeout: 1e3 * (f ? 5 : 3),
                    refreshInterval: 0,
                    revalidateOnFocus: !0,
                    revalidateOnReconnect: !0,
                    refreshWhenHidden: !1,
                    refreshWhenOffline: !1,
                    shouldRetryOnError: !0,
                    suspense: !1,
                    compare: function e(t, n) {
                        var r, i;
                        if (t === n) return !0;
                        if (t && n && (r = t.constructor) === n.constructor) {
                            if (r === Date) return t.getTime() === n.getTime();
                            if (r === RegExp) return t.toString() === n.toString();
                            if (r === Array) {
                                if ((i = t.length) === n.length)
                                    for (; i-- && e(t[i], n[i]););
                                return -1 === i
                            }
                            if (!r || "object" === typeof t) {
                                for (r in i = 0, t) {
                                    if (c.call(t, r) && ++i && !c.call(n, r)) return !1;
                                    if (!(r in n) || !e(t[r], n[r])) return !1
                                }
                                return Object.keys(n).length === i
                            }
                        }
                        return t !== t && n !== n
                    },
                    fetcher: u.fetcher,
                    isOnline: u.isOnline,
                    isDocumentVisible: u.isDocumentVisible
                },
                d = Object(o.createContext)({});
            d.displayName = "SWRConfigContext";
            var h = d,
                p = "undefined" === typeof window || !!("undefined" !== typeof Deno && Deno && Deno.version && Deno.version.deno),
                v = (p || window.requestAnimationFrame, p ? o.useEffect : o.useLayoutEffect, {}),
                y = {};
            ! function() {
                var e = 0
            }();
            if (!p && window.addEventListener) {
                var w = function(e) {
                    if (l.isDocumentVisible() && l.isOnline())
                        for (var t in e) e[t][0] && e[t][0]()
                };
                window.addEventListener("visibilitychange", (function() {
                    return w(v)
                }), !1), window.addEventListener("focus", (function() {
                    return w(v)
                }), !1), window.addEventListener("online", (function() {
                    return w(y)
                }), !1)
            }
            var g = h.Provider;
            var b = n("wu/5"),
                O = {
                    get: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "json",
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            r = arguments.length > 3 ? arguments[3] : void 0,
                            i = arguments.length > 4 ? arguments[4] : void 0;
                        return b.a.getOCERequestHandler().get(e, t, n, r, i)
                    }
                },
                j = O,
                _ = n("aLqQ"),
                m = n("Y6zD"),
                E = n("0XJ2"),
                x = n("qr6h"),
                T = n("8b/K"),
                L = n("H6Yn"),
                S = n("JyuN");
            n("00et");

            function C(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function D(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? C(Object(n), !0).forEach((function(t) {
                        Object(r.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : C(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            t.default = function(e) {
                var t = e.Component,
                    n = e.pageProps,
                    r = n.preview,
                    c = n.previewToken,
                    a = n.locale,
                    s = void 0 === a ? "en" : a;
                m.a.setToken(c), E.a.setLocale(s);
                var u = Object(o.useState)(""),
                    f = u[0],
                    l = u[1],
                    d = Object(o.useState)(""),
                    h = d[0],
                    p = d[1],
                    v = Object(o.useState)(""),
                    y = v[0],
                    w = v[1],
                    b = Object(o.useState)({
                        width: 0,
                        height: 0,
                        isMobile: !1
                    }),
                    O = b[0],
                    C = b[1],
                    P = Object(o.useState)(x.a.getOCEIntegratorUrl(r)),
                    R = P[0],
                    I = P[1];
                Object(o.useEffect)((function() {
                    return document.body.classList.add("f20", "f20v0"), document.getElementsByTagName("html")[0].classList.add("js"), setTimeout((function() {
                            return document.body.classList.add("ready")
                        }), 500), k(), window.addEventListener("resize", k),
                        function() {
                            window.removeEventListener("resize", k)
                        }
                }), []), Object(o.useEffect)((function() {
                    I(x.a.getOCEIntegratorUrl(r))
                }), [r]);
                var k = function() {
                    var e = window,
                        t = e.innerWidth,
                        n = e.innerHeight;
                    C({
                        width: t,
                        height: n,
                        isMobile: t < 860,
                        isTablet: t > 860 && t < 1600
                    })
                };
                return !1 === r && (window.location.hostname === S.q || "true" === S.i) && (T.a.debug(Object(L.d)("uiUtils", "this is a preview environment with hostname [".concat(window.location.hostname, "] and [").concat(S.q, "]"))), !0) ? Object(i.jsxs)(i.Fragment, {
                    children: [Object(i.jsxs)("script", {
                        children: ["window.setTimeout(function()", window.location.replace("/".concat(S.a, "/api/preview/?redirect=").concat(window.location.href)), ",100);"]
                    }), Object(i.jsxs)("div", {
                        className: "preview",
                        children: [Object(i.jsx)("h1", {
                            children: "Loading preview content..."
                        }), Object(i.jsx)("div", {
                            className: "loader",
                            children: " "
                        })]
                    })]
                }) : Object(i.jsx)(i.Fragment, {
                    children: Object(i.jsx)(_.a.Provider, {
                        value: {
                            globalMenu: f,
                            updateGlobalMenu: function(e) {
                                l(e)
                            },
                            headerContent: h,
                            updateHeaderContent: function(e) {
                                p(e)
                            },
                            footerContent: y,
                            updateFooterContent: function(e) {
                                w(e)
                            },
                            oceIntegrator: R,
                            isPreview: r,
                            previewToken: c,
                            viewport: O
                        },
                        children: Object(i.jsx)(g, {
                            value: {
                                revalidateOnFocus: !1,
                                fetcher: j.get
                            },
                            children: Object(i.jsx)(t, D({}, n))
                        })
                    })
                })
            }
        }
    },
    [
        [0, 0, 2, 1, 3]
    ]
]);