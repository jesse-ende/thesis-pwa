(function() {
    window._epicTrackingCookieDomainId = '619b80f6-779b-4cf1-8f62-7b4e25b9d4c9';
    window._epicTrackingCountryCode = 'NL';
}());
! function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var o in e) n.d(r, o, function(t) {
                return e[t]
            }.bind(null, o));
        return r
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "./", n(n.s = 8)
}([function(e, t, n) {
    "use strict";
    (function(t) {
        e.exports = "object" === typeof self && self.self === self && self || "object" === typeof t && t.global === t && t || this
    }).call(this, n(1))
}, function(e, t) {
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
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.onDocumentReady = t.unwrapElement = t.wrapElement = t.CustomEvent = void 0;
    var r, o = (r = n(0)) && r.__esModule ? r : {
        default: r
    };

    function i(e) {
        return function(e) {
            if (Array.isArray(e)) return a(e)
        }(e) || function(e) {
            if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
        }(e) || function(e, t) {
            if (!e) return;
            if ("string" === typeof e) return a(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return a(e, t)
        }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function a(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var c = "function" === o.default.CustomEvent ? o.default.CustomEvent : function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                bubbles: !1,
                cancelable: !1,
                detail: null
            },
            n = o.default.document.createEvent("CustomEvent");
        return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
    };
    t.CustomEvent = c;
    t.wrapElement = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
        if (e) try {
            var n = o.default.document.createElement(t);
            return e.parentNode.insertBefore(n, e), n.appendChild(e), n
        } catch (r) {
            return console.warn("wrapElement warn: ", r), e
        }
    };
    t.unwrapElement = function(e) {
        if (e) try {
            e.replaceWith.apply(e, i(e.childNodes))
        } catch (t) {
            console.warn("unwrapElement warn: ", t)
        }
    };
    t.onDocumentReady = function(e) {
        var t = o.default.document.readyState;
        "complete" === t || "loaded" === t || "interactive" === t ? e() : o.default.document.addEventListener("DOMContentLoaded", function() {
            e()
        })
    }
}, function(e, t, n) {
    "use strict";
    var r = n(11);

    function o() {}
    var i = null,
        a = {};

    function c(e) {
        if ("object" !== typeof this) throw new TypeError("Promises must be constructed via new");
        if ("function" !== typeof e) throw new TypeError("Promise constructor's argument is not a function");
        this._U = 0, this._V = 0, this._W = null, this._X = null, e !== o && p(e, this)
    }

    function u(e, t) {
        for (; 3 === e._V;) e = e._W;
        if (c._Y && c._Y(e), 0 === e._V) return 0 === e._U ? (e._U = 1, void(e._X = t)) : 1 === e._U ? (e._U = 2, void(e._X = [e._X, t])) : void e._X.push(t);
        ! function(e, t) {
            r(function() {
                var n = 1 === e._V ? t.onFulfilled : t.onRejected;
                if (null !== n) {
                    var r = function(e, t) {
                        try {
                            return e(t)
                        } catch (n) {
                            return i = n, a
                        }
                    }(n, e._W);
                    r === a ? l(t.promise, i) : s(t.promise, r)
                } else 1 === e._V ? s(t.promise, e._W) : l(t.promise, e._W)
            })
        }(e, t)
    }

    function s(e, t) {
        if (t === e) return l(e, new TypeError("A promise cannot be resolved with itself."));
        if (t && ("object" === typeof t || "function" === typeof t)) {
            var n = function(e) {
                try {
                    return e.then
                } catch (t) {
                    return i = t, a
                }
            }(t);
            if (n === a) return l(e, i);
            if (n === e.then && t instanceof c) return e._V = 3, e._W = t, void f(e);
            if ("function" === typeof n) return void p(n.bind(t), e)
        }
        e._V = 1, e._W = t, f(e)
    }

    function l(e, t) {
        e._V = 2, e._W = t, c._Z && c._Z(e, t), f(e)
    }

    function f(e) {
        if (1 === e._U && (u(e, e._X), e._X = null), 2 === e._U) {
            for (var t = 0; t < e._X.length; t++) u(e, e._X[t]);
            e._X = null
        }
    }

    function d(e, t, n) {
        this.onFulfilled = "function" === typeof e ? e : null, this.onRejected = "function" === typeof t ? t : null, this.promise = n
    }

    function p(e, t) {
        var n = !1,
            r = function(e, t, n) {
                try {
                    e(t, n)
                } catch (r) {
                    return i = r, a
                }
            }(e, function(e) {
                n || (n = !0, s(t, e))
            }, function(e) {
                n || (n = !0, l(t, e))
            });
        n || r !== a || (n = !0, l(t, i))
    }
    e.exports = c, c._Y = null, c._Z = null, c._0 = o, c.prototype.then = function(e, t) {
        if (this.constructor !== c) return function(e, t, n) {
            return new e.constructor(function(r, i) {
                var a = new c(o);
                a.then(r, i), u(e, new d(t, n, a))
            })
        }(this, e, t);
        var n = new c(o);
        return u(this, new d(e, t, n)), n
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.TrackingJsLoadedEvent = t.TrackingJsConfiguredEvent = t.TRACKING_JS_LOADED_EVENT = t.TRACKING_JS_CONFIGURED_EVENT = void 0;
    var r = n(2);
    t.TRACKING_JS_CONFIGURED_EVENT = "trackingJsConfigured";
    t.TRACKING_JS_LOADED_EVENT = "trackingJsLoaded";
    var o = new r.CustomEvent("trackingJsConfigured", {
        detail: {
            configured: !0
        }
    });
    t.TrackingJsConfiguredEvent = o;
    var i = new r.CustomEvent("trackingJsLoaded");
    t.TrackingJsLoadedEvent = i
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var r, o = (r = n(0)) && r.__esModule ? r : {
        default: r
    };

    function i(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var a = "/track.png",
        c = function() {
            function e(e) {
                i(this, "BASE_URL", void 0), i(this, "TRACKING_URL", void 0), this.application = o.default._epicTrackingAppName || "", this.BASE_URL = e, this.TRACKING_URL = this.BASE_URL + a
            }
            var t = e.prototype;
            return t.track = function(e, t) {
                var n = "undefined" === typeof o.default.navigator.doNotTrack ? o.default.doNotTrack : o.default.navigator.doNotTrack,
                    r = e || {};
                if (1 !== n && "1" !== n) {
                    this.application && (r.application = this.application), r.referringUrl = o.default.document.referrer ? o.default.document.referrer : "none", r.location = o.default.location.href, r.now = Date.now(), r.eventType = this.eventType;
                    var i = new Image;
                    t && (i.onerror = t), i.src = this.buildUrl(r)
                }
            }, t.buildUrl = function(e) {
                var t = "?";
                for (var n in e) e.hasOwnProperty(n) && (t = "?" === t ? "".concat(t).concat(n, "=").concat(encodeURIComponent(e[n])) : "".concat(t, "&").concat(n, "=").concat(encodeURIComponent(e[n])));
                return this.TRACKING_URL + t
            }, e
        }();
    t.default = c
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var r, o = (r = n(0)) && r.__esModule ? r : {
            default: r
        },
        i = n(21),
        a = n(22),
        c = n(7),
        u = n(2);

    function s(e, t) {
        var n;
        if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
            if (Array.isArray(e) || (n = f(e)) || t && e && "number" === typeof e.length) {
                n && (e = n);
                var r = 0,
                    o = function() {};
                return {
                    s: o,
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
                    f: o
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var i, a = !0,
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
                c = !0, i = e
            },
            f: function() {
                try {
                    a || null == n.return || n.return()
                } finally {
                    if (c) throw i
                }
            }
        }
    }

    function l(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(e))) return;
            var n = [],
                r = !0,
                o = !1,
                i = void 0;
            try {
                for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
            } catch (u) {
                o = !0, i = u
            } finally {
                try {
                    r || null == c.return || c.return()
                } finally {
                    if (o) throw i
                }
            }
            return n
        }(e, t) || f(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function f(e, t) {
        if (e) {
            if ("string" === typeof e) return d(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? d(e, t) : void 0
        }
    }

    function d(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function p(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var h = null;
    h || (h = new function() {
        var e = this;
        p(this, "cookieList", void 0), p(this, "cookiePreference", void 0), p(this, "cookieList", void 0), p(this, "blockedIframes", []), p(this, "counter", 0), p(this, "init", function(t) {
            if (e.onDuty) {
                o.default.OneTrust = {
                    geolocationResponse: {
                        countryCode: o.default._epicTrackingCountryCode
                    }
                };
                var n = o.default.document.createElement("script");
                n.type = "text/javascript", n.src = "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js", n.charset = "UTF-8", n.setAttribute("data-domain-script", o.default._epicTrackingCookieDomainId), n.setAttribute("data-document-language", !0), n.onload = function() {
                    try {
                        e.__registerConsentListener(), e.__registerCookieObserver(), e.__registeriFrameObserver(), e.__injectCookieGuardStyle(), e.__initIframeScanner(), e.__appendCookieBtnToFooter(), e.__RegisterCookiePreferenceObserver();
                        var n = e.isTrackingAllowed();
                        t(n)
                    } catch (r) {
                        t(!1), console.error("Failed upon cookieScript.onload", r)
                    }
                }, n.onerror = function(e) {
                    console.error("Failed to load cookieScript", e), t(!1)
                }, o.default.document.head.append(n)
            } else e.log("CookieGuard is not onDuty, abort initiation!")
        }), p(this, "__registerConsentListener", function() {
            try {
                var t = setInterval(function() {
                    o.default.OneTrust && "function" === typeof o.default.OneTrust.OnConsentChanged && (e.isOneTrustLoaded = !0, o.default.OneTrust.OnConsentChanged(function(t) {
                        try {
                            var n = t.detail;
                            e.cookiePref = n, e.__isIframeAllowed() && e.blockedIframes.length && e.__unblockAll()
                        } catch (r) {
                            console.error("OneTrust.OnConsentChanged action failed", r)
                        }
                    }), clearInterval(t))
                }, 300)
            } catch (n) {
                console.error("unable to initiate cookie consent listener", n)
            }
        }), p(this, "__registerCookieObserver", function() {
            var t = Object.getOwnPropertyDescriptor(Document.prototype, "cookie") || Object.getOwnPropertyDescriptor(HTMLDocument.prototype, "cookie");
            t && t.configurable && Object.defineProperty(o.default.document, "cookie", {
                get: function() {
                    return t.get.call(o.default.document)
                },
                set: function(n) {
                    try {
                        var r = e.__getCookieList(),
                            i = e.__getCookiePreference(),
                            a = n.match(/(^.*?)=/);
                        if (!r || !i || !a) return void t.set.call(o.default.document, n);
                        var c = a[1];
                        if (["OptanonConsent"].includes(c)) {
                            var u = n,
                                s = o.default.location.host;
                            return -1 !== s.indexOf(".ol.epicgames.net") ? u += "; domain=.ol.epicgames.net;" : -1 !== s.indexOf("epicgames.com") ? u += "; domain=.epicgames.com;" : -1 !== s.indexOf("unrealengine.com") ? u += "; domain=.unrealengine.com;" : -1 !== s.indexOf("fortnite.com") && (u += "; domain=.fortnite.com;"), u = u.replace("OptanonConsent=", "EpicOptanonConsent="), t.set.call(o.default.document, n), e.log("Cloning Cookie Consent to <EpicOptanonConsent> with value: ".concat(u)), void t.set.call(o.default.document, u)
                        }
                        if (e.log("Trying to set cookie value: ", n), !e.__isCookieRegistered(c, r)) return void console.error("Epic Games Cookie Guard => Failure: Cookie ".concat(c, " is not registered in Epic Games' System"));
                        var l = e.__getAllowedCookies(i, r);
                        c && l.includes(c) ? (e.log("cookie <".concat(c, "> is approved")), t.set.call(o.default.document, n)) : console.warn("Epic Games Cookie Guard => Cookie '".concat(c, "' is not allowed by user"))
                    } catch (f) {
                        console.error("Failed to intercept cookie", f), t.set.call(o.default.document, n)
                    }
                }
            })
        }), p(this, "__registeriFrameObserver", function(t) {
            var n = o.default.document.body;
            new MutationObserver(function(t, n) {
                e.__blockIframes()
            }).observe(n, {
                childList: !0,
                attributes: !0,
                subtree: !0
            })
        }), p(this, "__initIframeScanner", function() {
            (0, u.onDocumentReady)(function() {
                e.__blockIframes()
            })
        }), p(this, "__getIframeHost", function(e) {
            var t = null,
                n = !1,
                r = null;
            try {
                for (var o = (0, c.getUrlObj)(e).host, i = 0, u = Object.entries(a.BLACK_LIST_MAP); i < u.length; i++) {
                    var f = l(u[i], 2),
                        d = f[0],
                        p = f[1];
                    if (Array.isArray(p)) {
                        var h, y = s(p);
                        try {
                            for (y.s(); !(h = y.n()).done;) {
                                var m = h.value; - 1 !== o.indexOf(m) && (r = d, t = m, n = !0)
                            }
                        } catch (b) {
                            y.e(b)
                        } finally {
                            y.f()
                        }
                    } else -1 !== o.indexOf(p) && (r = d, t = p, n = !0)
                }
            } catch (v) {}
            return {
                name: r,
                blackListed: n,
                domain: t
            }
        }), p(this, "__blockIframes", function() {
            var t = o.default.document.getElementsByTagName("iframe");
            if (!e.__isIframeAllowed() && t.length) {
                var n, r = s(t);
                try {
                    for (r.s(); !(n = r.n()).done;) {
                        var i = n.value;
                        if (i && "iframe" === i.tagName.toLowerCase()) {
                            var a = i.getAttribute("data-blocked") || i.getAttribute("data-unblocked"),
                                c = i.src,
                                l = e.__getIframeHost(c),
                                f = l.blackListed,
                                d = l.name,
                                p = l.domain;
                            !a && f && function() {
                                i.setAttribute("data-epic-src", i.src), i.setAttribute("src", "about:blank"), i.setAttribute("data-blocked", !0);
                                var t = i.parentElement,
                                    n = (0, u.wrapElement)(i),
                                    r = e.__generateCookieWarningForIframe(d, p, function() {
                                        return e.__unblockIframe(n, !0)
                                    }),
                                    o = e.__count();
                                n.setAttribute("data-cookie-block-id", "epic-iframe-".concat(o)), e.blockedIframes.push(n);
                                var a = i.offsetParent;
                                a && a.clientWidth !== i.clientWidth && (t.style.position = "relative", t.style.display = "inline-block"), t.appendChild(r)
                            }()
                        }
                    }
                } catch (h) {
                    r.e(h)
                } finally {
                    r.f()
                }
            }
        }), p(this, "__isIframeSaved", function(t) {
            var n, r = s(e.blockedIframes);
            try {
                for (r.s(); !(n = r.n()).done;)
                    if (t === n.value) return !0
            } catch (o) {
                r.e(o)
            } finally {
                r.f()
            }
            return !1
        }), p(this, "__unblockAll", function() {
            var t, n = s(e.blockedIframes);
            try {
                for (n.s(); !(t = n.n()).done;) {
                    var r = t.value;
                    e.__unblockIframe(r, !1)
                }
            } catch (o) {
                n.e(o)
            } finally {
                n.f()
            }
            e.blockedIframes = [], e.__allowTargetingCookie()
        }), p(this, "__unblockIframe", function(t) {
            var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            try {
                var r = t.querySelector("iframe"),
                    o = t.parentElement.querySelector(".".concat(a.CLASS_NAME_PREFIX)),
                    i = o.querySelector("input").checked;
                if (n && i) return void e.__unblockAll();
                r.setAttribute("data-unblocked", !0), r.removeAttribute("data-blocked"), r.src = r.getAttribute("data-epic-src"), o.remove(), (0, u.unwrapElement)(t)
            } catch (c) {
                e.log("Unable to unblock iframe", t, c)
            }
        }), p(this, "__count", function() {
            return e.counter += 1, e.counter
        }), p(this, "__injectCookieGuardStyle", function() {
            var e = o.default.document.createElement("style");
            e.id = "epic-games-cookie-guard", e.innerHTML = a.COOKIE_GUARD_STYLE, o.default.document.getElementsByTagName("head")[0].appendChild(e)
        }), p(this, "__generateCookieWarningForIframe", function(t, n, r) {
            var i = o.default.document.createElement("div");
            i.classList.add("".concat(a.CLASS_NAME_PREFIX)), i.onclick = function(e) {
                try {
                    e.cancelBubble = !0, e.stopPragation()
                } catch (t) {}
            };
            var c = o.default.document.createDocumentFragment(),
                u = o.default.document.createElement("div"),
                s = o.default.document.createElement("div"),
                l = o.default.document.createElement("div"),
                f = o.default.document.createElement("div");
            return u.classList.add("".concat(a.CLASS_NAME_PREFIX, "-title")), s.classList.add("".concat(a.CLASS_NAME_PREFIX, "-button")), l.classList.add("".concat(a.CLASS_NAME_PREFIX, "-check")), f.classList.add("".concat(a.CLASS_NAME_PREFIX, "-note")), u.innerHTML = e.getCookieMessage("title", [n, a.TOS_LINK[t]]), s.innerText = e.getCookieMessage("button"), s.onclick = r, l.innerHTML = '\n<label>\n    <input type="checkbox" name="rememberMe">\n    '.concat(e.getCookieMessage("remember"), "\n</label>\n"), f.innerText = e.getCookieMessage("note"), c.appendChild(u), c.appendChild(s), c.appendChild(l), c.appendChild(f), i.appendChild(c), i
        }), p(this, "getCookieMessage", function(e, t) {
            var n = (0, i.getLocale)();
            a.COOKIE_MESSAGES[n] || (n = "en-US");
            var r = a.COOKIE_MESSAGES[n][e];
            if (t && r)
                for (var o in t)
                    if (t.hasOwnProperty(o)) {
                        var c = "\\{".concat(o, "\\}"),
                            u = new RegExp(c, "g");
                        r = r.replace(u, t[o])
                    }
            return r
        }), p(this, "__shouldEnableCookieGuard", function() {
            return !1 !== o.default._epicEnableCookieGuard && !(0, i.isLauncher)() && !!(0, i.isEu)() && (o.default._epicEnableCookieGuard, !0)
        }), p(this, "__shouldEnableDebugging", function() {
            try {
                return localStorage.getItem("debugCookie")
            } catch (e) {
                return !1
            }
        }), p(this, "__getCookieList", function() {
            try {
                var t = o.default.OneTrust.GetDomainData().Groups;
                return e.cookieList = t, e.cookieList
            } catch (n) {
                return null
            }
        }), p(this, "__getCookiePreference", function() {
            try {
                var t = decodeURIComponent(o.default.document.cookie).replace(/(?:(?:^|.*;\s*)OptanonConsent\s*=\s*.*groups=([^&]*).*$)|^.*$/, "$1").split(",").filter(function(e) {
                    return -1 !== e.indexOf(":1")
                }).map(function(e) {
                    return e.replace(":1", "")
                });
                return e.cookiePref = t.length ? t : null, e.cookiePref
            } catch (n) {
                return null
            }
        }), p(this, "__getAllowedCookies", function() {
            var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                r = [],
                o = s(n);
            try {
                for (o.s(); !(e = o.n()).done;) {
                    var i = e.value;
                    t.includes(i.OptanonGroupId) && i.Cookies.forEach(function(e) {
                        r.push(e.Name)
                    })
                }
            } catch (a) {
                o.e(a)
            } finally {
                o.f()
            }
            return r
        }), p(this, "__isCookieRegistered", function(e, t) {
            try {
                var n, r = s(t);
                try {
                    for (r.s(); !(n = r.n()).done;) {
                        var o, i = s(n.value.Cookies);
                        try {
                            for (i.s(); !(o = i.n()).done;)
                                if (e === o.value.Name) return !0
                        } catch (a) {
                            i.e(a)
                        } finally {
                            i.f()
                        }
                    }
                } catch (a) {
                    r.e(a)
                } finally {
                    r.f()
                }
            } catch (c) {
                return console.error("Epic Games Cookie Guard => Error: isCookieRegistered", c), !1
            }
            return !1
        }), p(this, "isTrackingAllowed", function() {
            return o.default.OptanonActiveGroups.indexOf("C0002") > -1
        }), p(this, "__isIframeAllowed", function() {
            try {
                return e.__getCookiePreference().includes("C0004")
            } catch (t) {
                return !1
            }
        }), p(this, "__allowTargetingCookie", function() {
            try {
                var t, n = o.default.document.cookie.split(";"),
                    r = "",
                    i = s(n);
                try {
                    for (i.s(); !(t = i.n()).done;) {
                        var a = t.value.trim();
                        if (0 === a.indexOf("OptanonConsent=")) {
                            r = a;
                            break
                        }
                    }
                } catch (u) {
                    i.e(u)
                } finally {
                    i.f()
                }
                var c = r.replace(/(?:(?:^|.*;\s*)(OptanonConsent\s*=\s*.*groups=.*)(C0004%3A[01])([^;]*))|^.*$/, "$1C0004%3A1$3");
                o.default.document.cookie = "".concat(c, ";path=/")
            } catch (l) {
                e.log("unable to allow targeting cookie")
            }
        }), p(this, "log", function() {
            try {
                if (e.debugEnabled) {
                    for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                    r[0] = "Epic Games Cookie Guard =>  ".concat(r[0]), (t = console).log.apply(t, r)
                }
            } catch (i) {}
        }), p(this, "__appendCookieBtnToFooter", function() {
            try {
                var t = o.default.document.querySelector("footer#egf .footer-legal .links"),
                    n = o.default.document.createElement("li"),
                    r = e.getCookieMessage("cookiesSettings");
                n.innerHTML = '<li class="more-legal-link">\n                                    <a\n                                        class="text-color\n                                        accent-color-hover"\n                                        rel="noopener noreferrer"\n                                        href="#"\n                                        onclick="OneTrust.ToggleInfoDisplay();return false;">'.concat(r, "</a>\n                                </li>"), t.appendChild(n)
            } catch (i) {
                console.warn("Epic Games Cookie Guard => failed to append cookie btn to epic footer", i)
            }
        }), p(this, "__RegisterCookiePreferenceObserver", function() {
            try {
                var e = setInterval(function() {
                    var t = o.default.document.getElementById("onetrust-pc-sdk");
                    t && (new MutationObserver(function(e, n) {
                        var r = "none" !== t.style.display;
                        if (r && "hidden" !== o.default.document.body.style.overflow) {
                            var i = o.default.document.body.style.overflow;
                            o.default.document.body.style.overflow = "hidden", o.default.document.body.setAttribute("data-cookie-guard-hidden", !0), o.default.document.body.setAttribute("data-cookie-guard-prev-overflow", i)
                        }!r && o.default.document.body.getAttribute("data-cookie-guard-hidden") && "hidden" === o.default.document.body.style.overflow && (o.default.document.body.style.overflow = o.default.document.body.getAttribute("data-cookie-guard-prev-overflow"))
                    }).observe(t, {
                        attributes: !0,
                        childList: !1,
                        subtree: !1
                    }), clearInterval(e))
                }, 1e3)
            } catch (t) {
                console.warn("Epic Games Cookie Guard => failed to observe visiblity of preference center", t)
            }
        }), this.onDuty = this.__shouldEnableCookieGuard(), this.isOneTrustLoaded = !1, this.debugEnabled = this.__shouldEnableDebugging()
    });
    var y = h;
    t.default = y
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getUrlObj = t.default = void 0;
    var r = i(n(0)),
        o = i(n(23));

    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function a(e, t) {
        var n;
        if ("undefined" === typeof Symbol || null == e[Symbol.iterator]) {
            if (Array.isArray(e) || (n = function(e, t) {
                    if (!e) return;
                    if ("string" === typeof e) return c(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t)
                }(e)) || t && e && "number" === typeof e.length) {
                n && (e = n);
                var r = 0,
                    o = function() {};
                return {
                    s: o,
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
                    f: o
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var i, a = !0,
            u = !1;
        return {
            s: function() {
                n = e[Symbol.iterator]()
            },
            n: function() {
                var e = n.next();
                return a = e.done, e
            },
            e: function(e) {
                u = !0, i = e
            },
            f: function() {
                try {
                    a || null == n.return || n.return()
                } finally {
                    if (u) throw i
                }
            }
        }
    }

    function c(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }
    var u = function() {
        var e = null;
        try {
            var t, n = r.default.document.scripts,
                o = /^(http|https)?(:\/\/)?tracking.(epicgames|unrealengine).*\/tracking\.js/,
                i = a(n);
            try {
                for (i.s(); !(t = i.n()).done;) {
                    var c = t.value.src || null;
                    c && o.test(c) && (e = new URL(c).origin)
                }
            } catch (u) {
                i.e(u)
            } finally {
                i.f()
            }
        } catch (s) {
            console.error("Failed to find baseUrl", s)
        }
        return e
    };
    t.default = u;
    t.getUrlObj = function(e) {
        return e ? new o.default(e) : {}
    }
}, function(e, t, n) {
    n(9), e.exports = n(15)
}, function(e, t, n) {
    "use strict";
    "undefined" === typeof Promise && (n(10).enable(), window.Promise = n(12)), n(13), Object.assign = n(14)
}, function(e, t, n) {
    "use strict";
    var r = n(3),
        o = [ReferenceError, TypeError, RangeError],
        i = !1;

    function a() {
        i = !1, r._Y = null, r._Z = null
    }

    function c(e, t) {
        return t.some(function(t) {
            return e instanceof t
        })
    }
    t.disable = a, t.enable = function(e) {
        e = e || {}, i && a();
        i = !0;
        var t = 0,
            n = 0,
            u = {};

        function s(t) {
            (e.allRejections || c(u[t].error, e.whitelist || o)) && (u[t].displayId = n++, e.onUnhandled ? (u[t].logged = !0, e.onUnhandled(u[t].displayId, u[t].error)) : (u[t].logged = !0, function(e, t) {
                console.warn("Possible Unhandled Promise Rejection (id: " + e + "):"), ((t && (t.stack || t)) + "").split("\n").forEach(function(e) {
                    console.warn("  " + e)
                })
            }(u[t].displayId, u[t].error)))
        }
        r._Y = function(t) {
            var n;
            2 === t._V && u[t._1] && (u[t._1].logged ? (n = t._1, u[n].logged && (e.onHandled ? e.onHandled(u[n].displayId, u[n].error) : u[n].onUnhandled || (console.warn("Promise Rejection Handled (id: " + u[n].displayId + "):"), console.warn('  This means you can ignore any previous messages of the form "Possible Unhandled Promise Rejection" with id ' + u[n].displayId + ".")))) : clearTimeout(u[t._1].timeout), delete u[t._1])
        }, r._Z = function(e, n) {
            0 === e._U && (e._1 = t++, u[e._1] = {
                displayId: null,
                error: n,
                timeout: setTimeout(s.bind(null, e._1), c(n, o) ? 100 : 2e3),
                logged: !1
            })
        }
    }
}, function(e, t, n) {
    "use strict";
    (function(t) {
        function n(e) {
            o.length || (r(), !0), o[o.length] = e
        }
        e.exports = n;
        var r, o = [],
            i = 0,
            a = 1024;

        function c() {
            for (; i < o.length;) {
                var e = i;
                if (i += 1, o[e].call(), i > a) {
                    for (var t = 0, n = o.length - i; t < n; t++) o[t] = o[t + i];
                    o.length -= i, i = 0
                }
            }
            o.length = 0, i = 0, !1
        }
        var u = "undefined" !== typeof t ? t : self,
            s = u.MutationObserver || u.WebKitMutationObserver;

        function l(e) {
            return function() {
                var t = setTimeout(r, 0),
                    n = setInterval(r, 50);

                function r() {
                    clearTimeout(t), clearInterval(n), e()
                }
            }
        }
        r = "function" === typeof s ? function(e) {
            var t = 1,
                n = new s(e),
                r = document.createTextNode("");
            return n.observe(r, {
                    characterData: !0
                }),
                function() {
                    t = -t, r.data = t
                }
        }(c) : l(c), n.requestFlush = r, n.makeRequestCallFromTimer = l
    }).call(this, n(1))
}, function(e, t, n) {
    "use strict";
    var r = n(3);
    e.exports = r;
    var o = l(!0),
        i = l(!1),
        a = l(null),
        c = l(void 0),
        u = l(0),
        s = l("");

    function l(e) {
        var t = new r(r._0);
        return t._V = 1, t._W = e, t
    }
    r.resolve = function(e) {
        if (e instanceof r) return e;
        if (null === e) return a;
        if (void 0 === e) return c;
        if (!0 === e) return o;
        if (!1 === e) return i;
        if (0 === e) return u;
        if ("" === e) return s;
        if ("object" === typeof e || "function" === typeof e) try {
            var t = e.then;
            if ("function" === typeof t) return new r(t.bind(e))
        } catch (n) {
            return new r(function(e, t) {
                t(n)
            })
        }
        return l(e)
    };
    var f = function(e) {
        return "function" === typeof Array.from ? (f = Array.from, Array.from(e)) : (f = function(e) {
            return Array.prototype.slice.call(e)
        }, Array.prototype.slice.call(e))
    };
    r.all = function(e) {
        var t = f(e);
        return new r(function(e, n) {
            if (0 === t.length) return e([]);
            var o = t.length;

            function i(a, c) {
                if (c && ("object" === typeof c || "function" === typeof c)) {
                    if (c instanceof r && c.then === r.prototype.then) {
                        for (; 3 === c._V;) c = c._W;
                        return 1 === c._V ? i(a, c._W) : (2 === c._V && n(c._W), void c.then(function(e) {
                            i(a, e)
                        }, n))
                    }
                    var u = c.then;
                    if ("function" === typeof u) return void new r(u.bind(c)).then(function(e) {
                        i(a, e)
                    }, n)
                }
                t[a] = c, 0 === --o && e(t)
            }
            for (var a = 0; a < t.length; a++) i(a, t[a])
        })
    }, r.reject = function(e) {
        return new r(function(t, n) {
            n(e)
        })
    }, r.race = function(e) {
        return new r(function(t, n) {
            f(e).forEach(function(e) {
                r.resolve(e).then(t, n)
            })
        })
    }, r.prototype.catch = function(e) {
        return this.then(null, e)
    }
}, function(e, t) {
    ! function(e) {
        "use strict";
        if (!e.fetch) {
            var t = {
                searchParams: "URLSearchParams" in e,
                iterable: "Symbol" in e && "iterator" in Symbol,
                blob: "FileReader" in e && "Blob" in e && function() {
                    try {
                        return new Blob, !0
                    } catch (e) {
                        return !1
                    }
                }(),
                formData: "FormData" in e,
                arrayBuffer: "ArrayBuffer" in e
            };
            if (t.arrayBuffer) var n = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                r = function(e) {
                    return e && DataView.prototype.isPrototypeOf(e)
                },
                o = ArrayBuffer.isView || function(e) {
                    return e && n.indexOf(Object.prototype.toString.call(e)) > -1
                };
            l.prototype.append = function(e, t) {
                e = c(e), t = u(t);
                var n = this.map[e];
                this.map[e] = n ? n + "," + t : t
            }, l.prototype.delete = function(e) {
                delete this.map[c(e)]
            }, l.prototype.get = function(e) {
                return e = c(e), this.has(e) ? this.map[e] : null
            }, l.prototype.has = function(e) {
                return this.map.hasOwnProperty(c(e))
            }, l.prototype.set = function(e, t) {
                this.map[c(e)] = u(t)
            }, l.prototype.forEach = function(e, t) {
                for (var n in this.map) this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this)
            }, l.prototype.keys = function() {
                var e = [];
                return this.forEach(function(t, n) {
                    e.push(n)
                }), s(e)
            }, l.prototype.values = function() {
                var e = [];
                return this.forEach(function(t) {
                    e.push(t)
                }), s(e)
            }, l.prototype.entries = function() {
                var e = [];
                return this.forEach(function(t, n) {
                    e.push([n, t])
                }), s(e)
            }, t.iterable && (l.prototype[Symbol.iterator] = l.prototype.entries);
            var i = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
            m.prototype.clone = function() {
                return new m(this, {
                    body: this._bodyInit
                })
            }, y.call(m.prototype), y.call(g.prototype), g.prototype.clone = function() {
                return new g(this._bodyInit, {
                    status: this.status,
                    statusText: this.statusText,
                    headers: new l(this.headers),
                    url: this.url
                })
            }, g.error = function() {
                var e = new g(null, {
                    status: 0,
                    statusText: ""
                });
                return e.type = "error", e
            };
            var a = [301, 302, 303, 307, 308];
            g.redirect = function(e, t) {
                if (-1 === a.indexOf(t)) throw new RangeError("Invalid status code");
                return new g(null, {
                    status: t,
                    headers: {
                        location: e
                    }
                })
            }, e.Headers = l, e.Request = m, e.Response = g, e.fetch = function(e, n) {
                return new Promise(function(r, o) {
                    var i = new m(e, n),
                        a = new XMLHttpRequest;
                    a.onload = function() {
                        var e = {
                            status: a.status,
                            statusText: a.statusText,
                            headers: v(a.getAllResponseHeaders() || "")
                        };
                        e.url = "responseURL" in a ? a.responseURL : e.headers.get("X-Request-URL");
                        var t = "response" in a ? a.response : a.responseText;
                        r(new g(t, e))
                    }, a.onerror = function() {
                        o(new TypeError("Network request failed"))
                    }, a.ontimeout = function() {
                        o(new TypeError("Network request failed"))
                    }, a.open(i.method, i.url, !0), "include" === i.credentials ? a.withCredentials = !0 : "omit" === i.credentials && (a.withCredentials = !1), "responseType" in a && t.blob && (a.responseType = "blob"), i.headers.forEach(function(e, t) {
                        a.setRequestHeader(t, e)
                    }), a.send("undefined" === typeof i._bodyInit ? null : i._bodyInit)
                })
            }, e.fetch.polyfill = !0
        }

        function c(e) {
            if ("string" !== typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e)) throw new TypeError("Invalid character in header field name");
            return e.toLowerCase()
        }

        function u(e) {
            return "string" !== typeof e && (e = String(e)), e
        }

        function s(e) {
            var n = {
                next: function() {
                    var t = e.shift();
                    return {
                        done: void 0 === t,
                        value: t
                    }
                }
            };
            return t.iterable && (n[Symbol.iterator] = function() {
                return n
            }), n
        }

        function l(e) {
            this.map = {}, e instanceof l ? e.forEach(function(e, t) {
                this.append(t, e)
            }, this) : Array.isArray(e) ? e.forEach(function(e) {
                this.append(e[0], e[1])
            }, this) : e && Object.getOwnPropertyNames(e).forEach(function(t) {
                this.append(t, e[t])
            }, this)
        }

        function f(e) {
            if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
            e.bodyUsed = !0
        }

        function d(e) {
            return new Promise(function(t, n) {
                e.onload = function() {
                    t(e.result)
                }, e.onerror = function() {
                    n(e.error)
                }
            })
        }

        function p(e) {
            var t = new FileReader,
                n = d(t);
            return t.readAsArrayBuffer(e), n
        }

        function h(e) {
            if (e.slice) return e.slice(0);
            var t = new Uint8Array(e.byteLength);
            return t.set(new Uint8Array(e)), t.buffer
        }

        function y() {
            return this.bodyUsed = !1, this._initBody = function(e) {
                if (this._bodyInit = e, e)
                    if ("string" === typeof e) this._bodyText = e;
                    else if (t.blob && Blob.prototype.isPrototypeOf(e)) this._bodyBlob = e;
                else if (t.formData && FormData.prototype.isPrototypeOf(e)) this._bodyFormData = e;
                else if (t.searchParams && URLSearchParams.prototype.isPrototypeOf(e)) this._bodyText = e.toString();
                else if (t.arrayBuffer && t.blob && r(e)) this._bodyArrayBuffer = h(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer]);
                else {
                    if (!t.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(e) && !o(e)) throw new Error("unsupported BodyInit type");
                    this._bodyArrayBuffer = h(e)
                } else this._bodyText = "";
                this.headers.get("content-type") || ("string" === typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : t.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
            }, t.blob && (this.blob = function() {
                var e = f(this);
                if (e) return e;
                if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                return Promise.resolve(new Blob([this._bodyText]))
            }, this.arrayBuffer = function() {
                return this._bodyArrayBuffer ? f(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(p)
            }), this.text = function() {
                var e = f(this);
                if (e) return e;
                if (this._bodyBlob) return function(e) {
                    var t = new FileReader,
                        n = d(t);
                    return t.readAsText(e), n
                }(this._bodyBlob);
                if (this._bodyArrayBuffer) return Promise.resolve(function(e) {
                    for (var t = new Uint8Array(e), n = new Array(t.length), r = 0; r < t.length; r++) n[r] = String.fromCharCode(t[r]);
                    return n.join("")
                }(this._bodyArrayBuffer));
                if (this._bodyFormData) throw new Error("could not read FormData body as text");
                return Promise.resolve(this._bodyText)
            }, t.formData && (this.formData = function() {
                return this.text().then(b)
            }), this.json = function() {
                return this.text().then(JSON.parse)
            }, this
        }

        function m(e, t) {
            var n = (t = t || {}).body;
            if (e instanceof m) {
                if (e.bodyUsed) throw new TypeError("Already read");
                this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new l(e.headers)), this.method = e.method, this.mode = e.mode, n || null == e._bodyInit || (n = e._bodyInit, e.bodyUsed = !0)
            } else this.url = String(e);
            if (this.credentials = t.credentials || this.credentials || "omit", !t.headers && this.headers || (this.headers = new l(t.headers)), this.method = function(e) {
                    var t = e.toUpperCase();
                    return i.indexOf(t) > -1 ? t : e
                }(t.method || this.method || "GET"), this.mode = t.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && n) throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(n)
        }

        function b(e) {
            var t = new FormData;
            return e.trim().split("&").forEach(function(e) {
                if (e) {
                    var n = e.split("="),
                        r = n.shift().replace(/\+/g, " "),
                        o = n.join("=").replace(/\+/g, " ");
                    t.append(decodeURIComponent(r), decodeURIComponent(o))
                }
            }), t
        }

        function v(e) {
            var t = new l;
            return e.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function(e) {
                var n = e.split(":"),
                    r = n.shift().trim();
                if (r) {
                    var o = n.join(":").trim();
                    t.append(r, o)
                }
            }), t
        }

        function g(e, t) {
            t || (t = {}), this.type = "default", this.status = void 0 === t.status ? 200 : t.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in t ? t.statusText : "OK", this.headers = new l(t.headers), this.url = t.url || "", this._initBody(e)
        }
    }("undefined" !== typeof self ? self : this)
}, function(e, t, n) {
    "use strict";
    var r = Object.getOwnPropertySymbols,
        o = Object.prototype.hasOwnProperty,
        i = Object.prototype.propertyIsEnumerable;
    e.exports = function() {
        try {
            if (!Object.assign) return !1;
            var e = new String("abc");
            if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
            for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
            if ("0123456789" !== Object.getOwnPropertyNames(t).map(function(e) {
                    return t[e]
                }).join("")) return !1;
            var r = {};
            return "abcdefghijklmnopqrst".split("").forEach(function(e) {
                r[e] = e
            }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
        } catch (o) {
            return !1
        }
    }() ? Object.assign : function(e, t) {
        for (var n, a, c = function(e) {
                if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(e)
            }(e), u = 1; u < arguments.length; u++) {
            for (var s in n = Object(arguments[u])) o.call(n, s) && (c[s] = n[s]);
            if (r) {
                a = r(n);
                for (var l = 0; l < a.length; l++) i.call(n, a[l]) && (c[a[l]] = n[a[l]])
            }
        }
        return c
    }
}, function(e, t, n) {
    "use strict";
    n(16);
    var r = a(n(0)),
        o = a(n(17)),
        i = a(n(6));

    function a(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    r.default._epicTracking ? console.warn("_epicTracking is already defined, abort initiation.") : i.default.onDuty ? i.default.init(o.default) : (0, o.default)(!0)
}, function(e, t, n) {
    "use strict";
    Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
        value: function(e, t) {
            if (null == this) throw new TypeError('"this" is null or not defined');
            var n = Object(this),
                r = n.length >>> 0;
            if (0 === r) return !1;
            var o, i, a = 0 | t,
                c = Math.max(a >= 0 ? a : r - Math.abs(a), 0);
            for (; c < r;) {
                if ((o = n[c]) === (i = e) || "number" === typeof o && "number" === typeof i && isNaN(o) && isNaN(i)) return !0;
                c++
            }
            return !1
        }
    })
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var r = n(4),
        o = s(n(18)),
        i = s(n(6)),
        a = s(n(7)),
        c = n(2),
        u = s(n(0));

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var l = function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        (0, c.onDocumentReady)(function() {
            ! function(e) {
                var t = u.default.__tracking_base || (0, a.default)();
                if (!t) throw new Error("Failed to find trackingUrl");
                u.default._epicTracking ? console.warn("Duplicate tracking pixel found in global") : (u.default._epicTracking = new o.default(t), u.default._epicTrackingConfigureEnabled ? u.default.addEventListener(r.TRACKING_JS_CONFIGURED_EVENT, function(e) {
                    try {
                        e.detail.configured && u.default._epicTracking.trackEvent("PageView")
                    } catch (t) {
                        console.error("Event epicTrackingConfigured ex:", t)
                    }
                }) : e ? u.default._epicTracking.trackEvent("PageView") : u.default._epicTracking.configure({
                    onBeforeTrack: function() {
                        return i.default.isTrackingAllowed()
                    }
                }), u.default.dispatchEvent(r.TrackingJsLoadedEvent))
            }(e)
        })
    };
    t.default = l
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var r = c(n(19)),
        o = c(n(20)),
        i = c(n(0)),
        a = n(4);

    function c(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function u(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var s = function() {
        function e(e) {
            u(this, "pageViewEvent", void 0), u(this, "interactionEvent", void 0), u(this, "onBeforeTrack", void 0), this.pageViewEvent = new r.default(e), this.interactionEvent = new o.default(e), this.registerHistoryEvent()
        }
        var t = e.prototype;
        return t.configure = function(e) {
            var t = e.onBeforeTrack;
            "function" === typeof t && (this.onBeforeTrack = t), i.default.dispatchEvent(a.TrackingJsConfiguredEvent)
        }, t.trackEvent = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "PageView",
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 ? arguments[2] : void 0,
                r = !0;
            if (this.onBeforeTrack && (r = this.onBeforeTrack()), r) switch (e) {
                case "PageView":
                    this.pageViewEvent.track(t, n);
                    break;
                case "Interaction":
                    this.interactionEvent.track(t, n);
                    break;
                default:
                    console.error("Event Type ".concat(e, " is not supported"))
            }
        }, t.registerHistoryEvent = function() {
            var e = this,
                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.history || {};
            try {
                var n = t.pushState,
                    r = t.replaceState;
                window.onpopstate = function() {
                    e.trackEvent()
                }, "function" === typeof t.pushState ? t.pushState = function() {
                    e.trackEvent();
                    for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
                    return n.apply(t, o)
                } : console.warn("Browser doesn't support history.pushState, fail to initiate history change handler"), "function" === typeof t.replaceState ? t.replaceState = function() {
                    e.trackEvent();
                    for (var n = arguments.length, o = new Array(n), i = 0; i < n; i++) o[i] = arguments[i];
                    return r.apply(t, o)
                } : console.warn("Browser doesn't support history.replaceState, fail to initiate history change handler")
            } catch (o) {
                console.warn("Unable to initiate browser history handler", o)
            }
        }, e
    }();
    t.default = s
}, function(e, t, n) {
    "use strict";
    var r;

    function o(e, t) {
        return (o = Object.setPrototypeOf || function(e, t) {
            return function(e, t) {
                for (var n = Object.getOwnPropertyNames(t), r = 0; r < n.length; r++) {
                    var o = n[r],
                        i = Object.getOwnPropertyDescriptor(t, o);
                    i && i.configurable && void 0 === e[o] && Object.defineProperty(e, o, i)
                }
            }(e, t), e
        })(e, t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var i = function(e) {
        var t, n;

        function r(t) {
            var n, r, o, i;
            return n = e.call(this, t) || this, r = function(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(n), i = void 0, (o = "eventType") in r ? Object.defineProperty(r, o, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : r[o] = i, n.eventType = "pageView", n
        }
        return n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, o(t, n), r
    }(((r = n(5)) && r.__esModule ? r : {
        default: r
    }).default);
    t.default = i
}, function(e, t, n) {
    "use strict";
    var r;

    function o(e, t) {
        return (o = Object.setPrototypeOf || function(e, t) {
            return function(e, t) {
                for (var n = Object.getOwnPropertyNames(t), r = 0; r < n.length; r++) {
                    var o = n[r],
                        i = Object.getOwnPropertyDescriptor(t, o);
                    i && i.configurable && void 0 === e[o] && Object.defineProperty(e, o, i)
                }
            }(e, t), e
        })(e, t)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var i = function(e) {
        var t, n;

        function r(t) {
            var n, r, o, i;
            return n = e.call(this, t) || this, r = function(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(n), i = void 0, (o = "eventType") in r ? Object.defineProperty(r, o, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : r[o] = i, n.eventType = "interaction", n
        }
        return n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, o(t, n), r.prototype.track = function(t, n) {
            var r = t.eventCategory,
                o = t.eventAction,
                i = t.interactionType;
            r && o && i ? e.prototype.track.call(this, t, n) : console.error("eventCategory or eventAction or interactionType is not given, cannot fire a tracking event")
        }, r
    }(((r = n(5)) && r.__esModule ? r : {
        default: r
    }).default);
    t.default = i
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getLocale = t.isEu = t.isLauncher = t.EU_COUNTRIES = void 0;
    var r, o = (r = n(0)) && r.__esModule ? r : {
        default: r
    };

    function i(e) {
        return (i = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }
    var a = /.*(EpicGamesLauncher|UnrealEngine).*/,
        c = ["AT", "BE", "BG", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE", "GB"];
    t.EU_COUNTRIES = c;
    t.isLauncher = function(e) {
        var t = o.default.ue ? o.default.ue.launcher : null;
        return t && "object" === i(t) || a.test(e || o.default.navigator.userAgent)
    };
    t.isEu = function() {
        return c.includes(o.default._epicTrackingCountryCode)
    };
    t.getLocale = function() {
        try {
            if (o.default.__epic_common_locale) return o.default.__epic_common_locale;
            if (o.default._epicGamesNav && o.default._epicGamesNav.locale) return o.default._epicGamesNav.locale;
            var e = o.default.document.documentElement.lang;
            if (e) return e
        } catch (t) {
            console.warn("TrackingJs was unable to find matched locale", t.message)
        }
        return "en-US"
    }
}, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.COOKIE_GUARD_STYLE = t.CLASS_NAME_PREFIX = t.BLACK_LIST_MAP = t.COOKIE_MESSAGES = t.TOS_LINK = void 0;
    t.TOS_LINK = {
        youtube: "https://www.youtube.com/t/terms",
        twitch: "https://www.twitch.tv/p/legal/terms-of-service/",
        discord: "https://discord.com/terms",
        youku: "https://h5.m.youku.com/app/agreement2017.html",
        qq: "http://m.v.qq.com/about/privacy.html",
        bilibili: "https://www.bilibili.com/protocal/licence.html"
    };
    t.COOKIE_MESSAGES = {
        "en-US": {
            cookiesSettings: "Cookies Settings",
            title: 'This content is hosted by a third party ({0}). By showing the external content you accept the <a href="{1}" target="_blank">terms and conditions</a> of {0}.',
            button: "Show external content",
            remember: "Remember my choice*",
            note: "*Your choice will be saved in a cookie managed by us."
        },
        ar: {
            cookiesSettings: "\u0625\u0639\u062f\u0627\u062f\u0627\u062a \u0645\u0644\u0641\u0627\u062a \u062a\u0639\u0631\u064a\u0641 \u0627\u0644\u0627\u0631\u062a\u0628\u0627\u0637",
            title: '\u0647\u0630\u0627 \u0627\u0644\u0645\u062d\u062a\u0648\u0649 \u062a\u0633\u062a\u0636\u064a\u0641\u0647 \u062c\u0647\u0629 \u062e\u0627\u0631\u062c\u064a\u0629 ({0}). \u064a\u064f\u0639\u062f \u0625\u0638\u0647\u0627\u0631 \u0627\u0644\u0645\u062d\u062a\u0648\u0649 \u0627\u0644\u062e\u0627\u0631\u062c\u064a \u0645\u0648\u0627\u0641\u0642\u0629 \u0645\u0646 \u062c\u0627\u0646\u0628\u0643 \u0639\u0644\u0649 <a href="{1}" target="_blank">\u0627\u0644\u0634\u0631\u0648\u0637 \u0648\u0627\u0644\u0623\u062d\u0643\u0627\u0645</a> of {0}.',
            button: "\u0625\u0638\u0647\u0627\u0631 \u0627\u0644\u0645\u062d\u062a\u0648\u0649 \u0627\u0644\u062e\u0627\u0631\u062c\u064a",
            remember: "\u062a\u0630\u0643\u0631 \u0627\u062e\u062a\u064a\u0627\u0631\u064a*",
            note: "*\u0633\u064a\u062a\u0645 \u062d\u0641\u0638 \u0627\u062e\u062a\u064a\u0627\u0631\u0643 \u0641\u064a \u0645\u0644\u0641 \u062a\u0639\u0631\u064a\u0641 \u0627\u0631\u062a\u0628\u0627\u0637 \u064a\u064f\u062f\u0627\u0631 \u0628\u0648\u0627\u0633\u0637\u062a\u0646\u0627."
        },
        de: {
            cookiesSettings: "Cookie-Einstellungen",
            title: 'Dieser Inhalt wird von Dritten gehostet: ({0}). Durch das Anzeigen des externen Inhalts akzeptierst du die <a href="{1}" target="_blank">allgemeinen Gesch\xe4ftsbedingungen</a> von {0}.',
            button: "Externe Inhalte anzeigen",
            remember: "Meine Auswahl nicht vergessen*",
            note: "*Deine Auswahl wird mit einem von uns verwalteten Cookie gespeichert."
        },
        "es-ES": {
            cookiesSettings: "Ajustes de cookies",
            title: 'Este contenido pertenece a terceros ({0}). Si seleccionas la opci\xf3n \u201cMostrar contenido externo\u201d, aceptas los <a href="{1}" target="_blank">t\xe9rminos y condiciones</a> of {0}.',
            button: "Mostrar contenido externo",
            remember: "Recordar selecci\xf3n*",
            note: "*Se guardar\xe1 tu selecci\xf3n en una cookie propia."
        },
        "es-MX": {
            cookiesSettings: "Ajustes de cookies",
            title: 'Este contenido est\xe1 alojado externamente ({0}). Al mostrar el contenido externo, aceptas los <a href="{1}" target="_blank">t\xe9rminos y condiciones</a> de {0}.',
            button: "Mostrar contenido externo",
            remember: "Recordar mi elecci\xf3n*",
            note: "*Tu elecci\xf3n se almacenar\xe1 en una cookie administrada por nosotros."
        },
        fr: {
            cookiesSettings: "Param\xe8tres des cookies",
            title: 'Ce contenu est h\xe9berg\xe9 par un tiers ({0}). En affichant le contenu externe, vous acceptez les <a href="{1}" target="_blank">conditions g\xe9n\xe9rales</a> de {0}.',
            button: "Afficher le contenu externe",
            remember: "M\xe9moriser mon choix*",
            note: "*Votre choix sera enregistr\xe9 dans un cookie administr\xe9 par nous."
        },
        it: {
            cookiesSettings: "Impostazioni cookie",
            title: 'Questo contenuto \xe8 ospitato da una terza parte ({0}). Mostrando i contenuti esterni accetti <a href="{1}" target="_blank">i termini e le condizioni</a> di {0}.',
            button: "Mostra contenuti esterni",
            remember: "Ricorda la mia scelta*",
            note: "*La tua scelta sar\xe0 salvata in un cookie gestito da noi."
        },
        pl: {
            cookiesSettings: "Ustawienia plik\xf3w cookie",
            title: 'Ta zawarto\u015b\u0107 jest udost\u0119pniana przez podmiot zewn\u0119trzny ({0}). Wy\u015bwietlaj\u0105c zawarto\u015b\u0107 zewn\u0119trzn\u0105, akceptujesz <a href="{1}" target="_blank">warunki</a> {0}.',
            button: "Poka\u017c zawarto\u015b\u0107 zewn\u0119trzn\u0105",
            remember: "Zapami\u0119taj m\xf3j wyb\xf3r*",
            note: "*Tw\xf3j wyb\xf3r zostanie zapisany w obs\u0142ugiwanym przez nas pliku cookie."
        },
        "pt-BR": {
            cookiesSettings: "Configura\xe7\xf5es de cookies",
            title: 'Este conte\xfado \xe9 hospedado por terceiros ({0}). Ao mostrar o conte\xfado terceirizado, voc\xea aceita os <a href="{1}" target=\u201d_blank\u201d>termos e condi\xe7\xf5es</a> do(a) {0}.',
            button: "Mostrar conte\xfado externo",
            remember: "Memorizar minha escolha*",
            note: "*Sua escolha ser\xe1 salva em um cookie gerenciado por n\xf3s."
        },
        ru: {
            cookiesSettings: "\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0444\u0430\u0439\u043b\u043e\u0432 cookie",
            title: '\u042d\u0442\u0438 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u044e\u0442\u0441\u044f \u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0435\u0439 \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0435\u0439 ({0}). \u0420\u0430\u0437\u0440\u0435\u0448\u0430\u044f \u043f\u043e\u043a\u0430\u0437 \u0432\u043d\u0435\u0448\u043d\u0438\u0445 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u043e\u0432, \u0432\u044b \u043f\u0440\u0438\u043d\u0438\u043c\u0430\u0435\u0442\u0435 \u044d\u0442\u0438 <a href="{1}" target="_blank">\u0443\u0441\u043b\u043e\u0432\u0438\u044f \u0438 \u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u044f</a> of {0}.',
            button: "\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0438\u0435 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b",
            remember: "\u0417\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u043c\u043e\u0439 \u0432\u044b\u0431\u043e\u0440*",
            note: "*\u0412\u0430\u0448 \u0432\u044b\u0431\u043e\u0440 \u0431\u0443\u0434\u0435\u0442 \u0441\u043e\u0445\u0440\u0430\u043d\u0451\u043d \u0432 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c\u044b\u0439 \u043d\u0430\u043c\u0438 \u0444\u0430\u0439\u043b cookie."
        },
        ja: {
            cookiesSettings: "Cookie\u306e\u8a2d\u5b9a",
            title: '\u3053\u306e\u30b3\u30f3\u30c6\u30f3\u30c4\u306f\u30b5\u30fc\u30c9\u30d1\u30fc\u30c6\u30a3({0})\u306b\u3088\u3063\u3066\u30db\u30b9\u30c8\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u3053\u306e\u5916\u90e8\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u8868\u793a\u3059\u308b\u3053\u3068\u3067\u3001\u304a\u5ba2\u69d8\u306f{0}\u306e<a href="{1}" target="_blank">\u5229\u7528\u898f\u7d04</a>\u306b\u540c\u610f\u3057\u305f\u3053\u3068\u306b\u306a\u308a\u307e\u3059\u3002',
            button: "\u5916\u90e8\u30b3\u30f3\u30c6\u30f3\u30c4\u3092\u8868\u793a\u3059\u308b",
            remember: "\u9078\u629e\u3092\u4fdd\u5b58*",
            note: "*\u304a\u5ba2\u69d8\u306e\u9078\u629e\u306f\u3001\u5f0a\u793e\u304c\u7ba1\u7406\u3059\u308bCookie\u5185\u306b\u4fdd\u5b58\u3055\u308c\u307e\u3059\u3002"
        },
        ko: {
            cookiesSettings: "\ucfe0\ud0a4 \uc124\uc815",
            title: '\uc774 \ucf58\ud150\uce20\ub294 \ud0c0\uc0ac({0})\uc5d0\uc11c \ud638\uc2a4\ud305\ud569\ub2c8\ub2e4. \uc678\ubd80 \ucf58\ud150\uce20 \ud45c\uc2dc \uc2dc {0}\uc758 <a href="{1}" target="_blank">\uc774\uc6a9 \uc57d\uad00</a>\uc5d0 \ub3d9\uc758\ud558\ub294 \uac83\uc73c\ub85c \uac04\uc8fc\ud569\ub2c8\ub2e4.',
            button: "\uc678\ubd80 \ucf58\ud150\uce20 \ud45c\uc2dc",
            remember: "\ub0b4 \uc120\ud0dd \uc0ac\ud56d \uc800\uc7a5*",
            note: "*\uc120\ud0dd\ud55c \uc0ac\ud56d\uc740 \ub2f9\uc0ac\uac00 \uad00\ub9ac\ud558\ub294 \ucfe0\ud0a4\uc5d0 \uc800\uc7a5\ub429\ub2c8\ub2e4."
        },
        "zh-CN": {
            cookiesSettings: "Cookie \u8bbe\u7f6e",
            title: '\u8be5\u5185\u5bb9\u7531\u7b2c\u4e09\u65b9\uff08{0}\uff09\u6258\u7ba1\u3002\u663e\u793a\u5916\u90e8\u5185\u5bb9\uff0c\u5373\u4ee3\u8868\u60a8\u540c\u610f\u5e76\u63a5\u53d7 {0} \u7684<a href="{1}" target="_blank">\u6761\u6b3e\u548c\u6761\u4ef6</a>\u3002',
            button: "\u663e\u793a\u5916\u90e8\u5185\u5bb9",
            remember: "\u8bb0\u4f4f\u6211\u7684\u9009\u62e9*",
            note: "*\u60a8\u7684\u9009\u62e9\u5c06\u88ab\u4fdd\u5b58\u5728\u7531\u6211\u4eec\u7ba1\u7406\u7684 Cookie \u4e2d\u3002"
        },
        "zh-Hant": {
            cookiesSettings: "Cookie \u8a2d\u5b9a",
            title: '\u6b64\u5167\u5bb9\u7531\u7b2c\u4e09\u65b9\uff08{0}\uff09\u63d0\u4f9b\u3002\u986f\u793a\u5916\u90e8\u5167\u5bb9\u8868\u793a\u60a8\u63a5\u53d7 {0} \u4e4b<a href="{1}" target="_blank">\u689d\u6b3e\u53ca\u689d\u4ef6</a>\u3002',
            button: "\u986f\u793a\u5916\u90e8\u5167\u5bb9",
            remember: "\u8a18\u4f4f\u6211\u7684\u9078\u64c7*",
            note: "*\u60a8\u7684\u9078\u64c7\u5c07\u5132\u5b58\u5230\u7531\u6211\u5011\u7ba1\u7406\u7684 cookie\u3002"
        },
        tr: {
            cookiesSettings: "\xc7erez Ayarlar\u0131",
            title: 'Bu i\xe7eri\u011fi \xfc\xe7\xfcnc\xfc bir taraf sunuyor ({0}). Harici i\xe7eri\u011fi g\xf6stererek {0} <a href="{1}" target="_blank">\u015fartlar\u0131n\u0131 ve ko\u015fullar\u0131n\u0131</a> kabul edersin.',
            button: "Harici i\xe7eri\u011fi g\xf6ster",
            remember: "Se\xe7imimi hat\u0131rla*",
            note: "*Se\xe7imin, taraf\u0131m\u0131zdan y\xf6netilen bir \xe7ereze kaydedilecek."
        },
        th: {
            cookiesSettings: "\u0e01\u0e32\u0e23\u0e15\u0e31\u0e49\u0e07\u0e04\u0e48\u0e32\u0e04\u0e38\u0e01\u0e01\u0e35\u0e49",
            title: '\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e2b\u0e32\u0e19\u0e35\u0e49\u0e44\u0e14\u0e49\u0e23\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e42\u0e2e\u0e2a\u0e15\u0e4c\u0e42\u0e14\u0e22\u0e1a\u0e38\u0e04\u0e04\u0e25\u0e17\u0e35\u0e48\u0e2a\u0e32\u0e21 ({0}) \u0e01\u0e32\u0e23\u0e41\u0e2a\u0e14\u0e07\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e2b\u0e32\u0e20\u0e32\u0e22\u0e19\u0e2d\u0e01\u0e08\u0e30\u0e16\u0e37\u0e2d\u0e27\u0e48\u0e32\u0e04\u0e38\u0e13\u0e22\u0e2d\u0e21\u0e23\u0e31\u0e1a<a href="{1}" target="_blank">\u0e02\u0e49\u0e2d\u0e01\u0e33\u0e2b\u0e19\u0e14\u0e41\u0e25\u0e30\u0e40\u0e07\u0e37\u0e48\u0e2d\u0e19\u0e44\u0e02</a>\u0e02\u0e2d\u0e07 {0}',
            button: "\u0e41\u0e2a\u0e14\u0e07\u0e40\u0e19\u0e37\u0e49\u0e2d\u0e2b\u0e32\u0e20\u0e32\u0e22\u0e19\u0e2d\u0e01",
            remember: "\u0e08\u0e14\u0e08\u0e33\u0e15\u0e31\u0e27\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e02\u0e2d\u0e07\u0e09\u0e31\u0e19*",
            note: "*\u0e15\u0e31\u0e27\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e02\u0e2d\u0e07\u0e04\u0e38\u0e13\u0e08\u0e30\u0e44\u0e14\u0e49\u0e23\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e44\u0e27\u0e49\u0e43\u0e19\u0e04\u0e38\u0e01\u0e01\u0e35\u0e49\u0e17\u0e35\u0e48\u0e44\u0e14\u0e49\u0e23\u0e31\u0e1a\u0e01\u0e32\u0e23\u0e08\u0e31\u0e14\u0e01\u0e32\u0e23\u0e42\u0e14\u0e22\u0e40\u0e23\u0e32"
        }
    };
    t.BLACK_LIST_MAP = {
        youtube: ["youtube.com", "youtube-nocookie.com", "youtu.be"],
        twitch: "twitch.tv",
        discord: "discord.com",
        youku: "youku.com",
        qq: "qq.com",
        bilibili: "bilibili.com"
    };
    var r = "epic-cookie-guard-iframe";
    t.CLASS_NAME_PREFIX = r;
    var o = "\n    .".concat(r, " {\n        position: absolute;\n        top:0;\n        bottom:0;\n        left:0;\n        right:0;\n        background: #1c1c1c;\n        padding: 15px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-direction: column;\n        color: #bdbdbd;\n        text-align: center;\n        font-family: OpenSans, sans-serif;\n        overflow: auto;\n        font-size: 14px;\n    }\n    \n    @media only screen and (max-width: 767px) {\n        .").concat(r, " {\n            justify-content: flex-start;\n            font-size: 10px;\n        }\n    }\n    .").concat(r, " * {\n        max-width: 600px;\n    }\n    .").concat(r, " a {\n        all: unset;\n        color: unset;\n        text-decoration: underline;\n        cursor: pointer;\n    }\n    .").concat(r, "-title {\n        margin-bottom: 20px\n    }\n    .").concat(r, "-button {\n        background-color: #037AEE;\n        border-color: #037AEE;\n        color: white;\n        line-height: 1.2;\n        padding: 15px;\n        margin: 1em;\n        cursor: pointer;\n    }\n    .").concat(r, "-button:hover {\n        background-color: #037AEE;\n        opacity: 0.8;\n    }\n    .").concat(r, "-check {\n        margin-bottom: 15px;\n        cursor: pointer;\n    }\n    .").concat(r, " label {\n        all: unset;\n    }\n    .").concat(r, "-check input {\n        transform: translateY(-2px);\n        margin-right: 10px;\n    }\n    .").concat(r, "-note {\n        font-size: 80% !important;\n    }\n");
    t.COOKIE_GUARD_STYLE = o
}, function(e, t, n) {
    "use strict";
    (function(t) {
        var r = n(24),
            o = n(25),
            i = /^[A-Za-z][A-Za-z0-9+-.]*:[\\\/]+/,
            a = /^([a-z][a-z0-9.+-]*:)?([\\\/]{1,})?([\S\s]*)/i,
            c = new RegExp("^[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]+");

        function u(e) {
            return (e || "").toString().replace(c, "")
        }
        var s = [
                ["#", "hash"],
                ["?", "query"],
                function(e) {
                    return e.replace("\\", "/")
                },
                ["/", "pathname"],
                ["@", "auth", 1],
                [NaN, "host", void 0, 1, 1],
                [/:(\d+)$/, "port", void 0, 1],
                [NaN, "hostname", void 0, 1, 1]
            ],
            l = {
                hash: 1,
                query: 1
            };

        function f(e) {
            var n, r = ("undefined" !== typeof window ? window : "undefined" !== typeof t ? t : "undefined" !== typeof self ? self : {}).location || {},
                o = {},
                a = typeof(e = e || r);
            if ("blob:" === e.protocol) o = new p(unescape(e.pathname), {});
            else if ("string" === a)
                for (n in o = new p(e, {}), l) delete o[n];
            else if ("object" === a) {
                for (n in e) n in l || (o[n] = e[n]);
                void 0 === o.slashes && (o.slashes = i.test(e.href))
            }
            return o
        }

        function d(e) {
            e = u(e);
            var t = a.exec(e);
            return {
                protocol: t[1] ? t[1].toLowerCase() : "",
                slashes: !!(t[2] && t[2].length >= 2),
                rest: t[2] && 1 === t[2].length ? "/" + t[3] : t[3]
            }
        }

        function p(e, t, n) {
            if (e = u(e), !(this instanceof p)) return new p(e, t, n);
            var i, a, c, l, h, y, m = s.slice(),
                b = typeof t,
                v = this,
                g = 0;
            for ("object" !== b && "string" !== b && (n = t, t = null), n && "function" !== typeof n && (n = o.parse), t = f(t), i = !(a = d(e || "")).protocol && !a.slashes, v.slashes = a.slashes || i && t.slashes, v.protocol = a.protocol || t.protocol || "", e = a.rest, a.slashes || (m[3] = [/(.*)/, "pathname"]); g < m.length; g++) "function" !== typeof(l = m[g]) ? (c = l[0], y = l[1], c !== c ? v[y] = e : "string" === typeof c ? ~(h = e.indexOf(c)) && ("number" === typeof l[2] ? (v[y] = e.slice(0, h), e = e.slice(h + l[2])) : (v[y] = e.slice(h), e = e.slice(0, h))) : (h = c.exec(e)) && (v[y] = h[1], e = e.slice(0, h.index)), v[y] = v[y] || i && l[3] && t[y] || "", l[4] && (v[y] = v[y].toLowerCase())) : e = l(e);
            n && (v.query = n(v.query)), i && t.slashes && "/" !== v.pathname.charAt(0) && ("" !== v.pathname || "" !== t.pathname) && (v.pathname = function(e, t) {
                if ("" === e) return t;
                for (var n = (t || "/").split("/").slice(0, -1).concat(e.split("/")), r = n.length, o = n[r - 1], i = !1, a = 0; r--;) "." === n[r] ? n.splice(r, 1) : ".." === n[r] ? (n.splice(r, 1), a++) : a && (0 === r && (i = !0), n.splice(r, 1), a--);
                return i && n.unshift(""), "." !== o && ".." !== o || n.push(""), n.join("/")
            }(v.pathname, t.pathname)), "/" !== v.pathname.charAt(0) && v.hostname && (v.pathname = "/" + v.pathname), r(v.port, v.protocol) || (v.host = v.hostname, v.port = ""), v.username = v.password = "", v.auth && (l = v.auth.split(":"), v.username = l[0] || "", v.password = l[1] || ""), v.origin = v.protocol && v.host && "file:" !== v.protocol ? v.protocol + "//" + v.host : "null", v.href = v.toString()
        }
        p.prototype = {
            set: function(e, t, n) {
                var i = this;
                switch (e) {
                    case "query":
                        "string" === typeof t && t.length && (t = (n || o.parse)(t)), i[e] = t;
                        break;
                    case "port":
                        i[e] = t, r(t, i.protocol) ? t && (i.host = i.hostname + ":" + t) : (i.host = i.hostname, i[e] = "");
                        break;
                    case "hostname":
                        i[e] = t, i.port && (t += ":" + i.port), i.host = t;
                        break;
                    case "host":
                        i[e] = t, /:\d+$/.test(t) ? (t = t.split(":"), i.port = t.pop(), i.hostname = t.join(":")) : (i.hostname = t, i.port = "");
                        break;
                    case "protocol":
                        i.protocol = t.toLowerCase(), i.slashes = !n;
                        break;
                    case "pathname":
                    case "hash":
                        if (t) {
                            var a = "pathname" === e ? "/" : "#";
                            i[e] = t.charAt(0) !== a ? a + t : t
                        } else i[e] = t;
                        break;
                    default:
                        i[e] = t
                }
                for (var c = 0; c < s.length; c++) {
                    var u = s[c];
                    u[4] && (i[u[1]] = i[u[1]].toLowerCase())
                }
                return i.origin = i.protocol && i.host && "file:" !== i.protocol ? i.protocol + "//" + i.host : "null", i.href = i.toString(), i
            },
            toString: function(e) {
                e && "function" === typeof e || (e = o.stringify);
                var t, n = this,
                    r = n.protocol;
                r && ":" !== r.charAt(r.length - 1) && (r += ":");
                var i = r + (n.slashes ? "//" : "");
                return n.username && (i += n.username, n.password && (i += ":" + n.password), i += "@"), i += n.host + n.pathname, (t = "object" === typeof n.query ? e(n.query) : n.query) && (i += "?" !== t.charAt(0) ? "?" + t : t), n.hash && (i += n.hash), i
            }
        }, p.extractProtocol = d, p.location = f, p.trimLeft = u, p.qs = o, e.exports = p
    }).call(this, n(1))
}, function(e, t, n) {
    "use strict";
    e.exports = function(e, t) {
        if (t = t.split(":")[0], !(e = +e)) return !1;
        switch (t) {
            case "http":
            case "ws":
                return 80 !== e;
            case "https":
            case "wss":
                return 443 !== e;
            case "ftp":
                return 21 !== e;
            case "gopher":
                return 70 !== e;
            case "file":
                return !1
        }
        return 0 !== e
    }
}, function(e, t, n) {
    "use strict";
    var r, o = Object.prototype.hasOwnProperty;

    function i(e) {
        try {
            return decodeURIComponent(e.replace(/\+/g, " "))
        } catch (t) {
            return null
        }
    }

    function a(e) {
        try {
            return encodeURIComponent(e)
        } catch (t) {
            return null
        }
    }
    t.stringify = function(e, t) {
        t = t || "";
        var n, i, c = [];
        for (i in "string" !== typeof t && (t = "?"), e)
            if (o.call(e, i)) {
                if ((n = e[i]) || null !== n && n !== r && !isNaN(n) || (n = ""), i = a(i), n = a(n), null === i || null === n) continue;
                c.push(i + "=" + n)
            }
        return c.length ? t + c.join("&") : ""
    }, t.parse = function(e) {
        for (var t, n = /([^=?#&]+)=?([^&]*)/g, r = {}; t = n.exec(e);) {
            var o = i(t[1]),
                a = i(t[2]);
            null === o || null === a || o in r || (r[o] = a)
        }
        return r
    }
}]);