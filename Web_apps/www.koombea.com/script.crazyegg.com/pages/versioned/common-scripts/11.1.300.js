/**
 * @license
 *
 * This file contains works from many authors under various (but compatible)
 * licenses. Please check the /versionnumber-licenses.js url for more information.
 *
 **/
if ("undefined" == typeof CE2 && (CE2 = {}), CE2.userDataToJs = function(e) {
        for (var t = [
                ["uid", "uid"],
                ["snapshots", "snapshots"],
                ["status", "status"],
                ["flows", "flows"],
                ["pageEdits", "page_edits"],
                ["sites", "sites"],
                ["USER_SCRIPT_VERSION", "updated_at"],
                ["__CE_HOST__", "ce_app_url"],
                ["COMMON_SCRIPT", "common_script_url"],
                ["COMMON_SCRIPT_SECURE", "common_script_url"],
                ["TRACKING_SCRIPT", "tracking_script_url"],
                ["TRACKING_SCRIPT_SECURE", "tracking_script_url"],
                ["AUTH_KEY", "hud_auth_key"],
                ["HUD", "hud"],
                ["GLOBAL_IP_BLOCK_LIST", "global_ip_block_list"],
                ["IS_USING_IP_BLOCKING", "is_using_ip_blocking"],
                ["TRACKING_DEST_NEW", "v6_tracking_dest"],
                ["TRACKING_DEST_NEW_SECURE", "v6_secure_tracking_dest"],
                ["DEST_V11", "v11_tracking_dest"],
                ["FT_DEST", "flow_tracking_dest"],
                ["PAGE_VIEWS_LIMIT_REACHED", "page_views_limit_reached"],
                ["NUMBER_OF_RECORDINGS", "recordings_number"],
                ["RECORDINGS_ACTIVATION", "recordings_activation"],
                ["ERROR_TRACKING", "error_tracking"],
                ["DEST_ERRORS_API", "error_tracking_dest"],
                ["DEST_ERRORS_API_DOMAIN", "error_tracking_script_url"]
            ], n = 0; n < t.length; n++) {
            var r = t[n];
            CE2.data[r[1]] && (CE2[r[0]] = CE2.data[r[1]])
        }
        CE2.data.recordings_dest && (CE2.SREC_DEST = {
            record: CE2.data.recordings_dest,
            sample: CE2.data.recordings_sampling_dest
        })
    }, CE2.VERSION = "11.1.300",

    function() {
        var r = (typeof window === "undefined" ? self : window).CE2BH = {};

        function t(e) {
            return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? r.typeof = t = function(e) {
                return typeof e
            } : r.typeof = t = function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }, t(e)
        }

        function e() {
            return r.extends = e = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n, r = arguments[t];
                    for (n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }, e.apply(this, arguments)
        }
        r.typeof = t, r.defineProperty = function(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }, r.extends = e, r.slicedToArray = function(e, t) {
            return r.arrayWithHoles(e) || r.iterableToArrayLimit(e, t) || r.unsupportedIterableToArray(e, t) || r.nonIterableRest()
        }, r.toConsumableArray = function(e) {
            return r.arrayWithoutHoles(e) || r.iterableToArray(e) || r.unsupportedIterableToArray(e) || r.nonIterableSpread()
        }, r.arrayWithoutHoles = function(e) {
            if (Array.isArray(e)) return r.arrayLikeToArray(e)
        }, r.arrayWithHoles = function(e) {
            if (Array.isArray(e)) return e
        }, r.iterableToArray = function(e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
        }, r.iterableToArrayLimit = function(e, t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                var n = [],
                    r = !0,
                    o = !1,
                    i = void 0;
                try {
                    for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                } catch (e) {
                    o = !0, i = e
                } finally {
                    try {
                        r || null == s.return || s.return()
                    } finally {
                        if (o) throw i
                    }
                }
                return n
            }
        }, r.unsupportedIterableToArray = function(e, t) {
            if (e) {
                if ("string" == typeof e) return r.arrayLikeToArray(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Map" === (n = "Object" === n && e.constructor ? e.constructor.name : n) || "Set" === n ? Array.from(n) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r.arrayLikeToArray(e, t) : void 0
            }
        }, r.arrayLikeToArray = function(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
            return r
        }, r.nonIterableSpread = function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }, r.nonIterableRest = function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
    }(), CE2.debugEnabled = function() {
        return "undefined" != typeof CE_DEBUG && CE_DEBUG
    }, CE2.logHistory = [], CE2.logHistoryEnabled = !1, CE2.debug = function(e) {
        if (CE2.logHistoryEnabled && CE2.logHistory.push(e), !CE2.debugEnabled()) return !1;
        var t = "string" == typeof e ? "CE: ".concat(e) : e;
        console.log(t), (e instanceof Error || e instanceof TypeError) && CE2.errorTracking && CE2.errorTracking.sendError && CE2.errorTracking.sendError(e)
    }, CE2.errorTracking = function() {
        var e = {};
        return e.sendError = function(e) {
            try {
                var t;
                CE2.data && CE2.data.error_tracking && (t = {
                    url: window.location.href,
                    error: e.type,
                    error_name: e.name,
                    filename: e.filename
                }, e.message && (t.error_description = e.message.toString()), e.error && e.error.stack && (t.stack = e.error.stack.toString()), CE2.post.send((n = CE2.data.error_tracking_dest, "".concat(n, "?u=").concat(encodeURIComponent(CE2.data.uid))), CE2.JSON.stringify(t), {
                    sendBeacon: !0
                }))
            } catch (e) {}
            var n
        }, e.listen = function() {
            var t, n = this;
            CE2.data.error_tracking_dest && CE2.data && CE2.data.uid && (t = CE2.data.error_tracking_script_url, window.addEventListener("error", function(e) {
                try {
                    if (CE2.debug("Error Tacking: Error Event '".concat(e, "'")), !e.filename) return;
                    CE2.debug("Error Tacking: Error filename '".concat(e.filename, "'")), e.filename.includes(t) && n.sendError(e)
                } catch (e) {}
            }))
        }, e
    }(), CE2.data && CE2.data.error_tracking) try {
    CE2.debug("Starting Error Tracking"), CE2.errorTracking.listen()
} catch (e) {
    CE2.debug(e)
}
if ("undefined" == typeof CE2 && (CE2 = {}), CE2.re = function() {
        var e = "[\\s\\u00a0\\u2028\\u2029]+";
        return {
            whitespace: RegExp(e, "g"),
            strip: RegExp("^".concat(e, "|").concat(e, "$"), "g"),
            href: /\bhref="(.*?)"/i,
            ipHost: /^([\d\.]+|\[[a-f\d:]+\])$/i
        }
    }(), CE2.strip = function(e, t) {
        e = e.replace(CE2.re.strip, "");
        return t ? e.replace(CE2.re.whitespace, " ") : e
    }, CE2.hash = function(e) {
        var t, n, r = 0;
        if (0 == e.length) return r;
        for (t = 0, n = e.length; t < n; t++) r = (r << 5) - r + e.charCodeAt(t), r |= 0;
        return r
    }, "undefined" == typeof CE2 && (CE2 = {}), CE2.ignoredElements = [], CE2.clickCaptors = [], "undefined" != typeof document && (CE2.d = document), "undefined" != typeof window && (CE2.w = window), "undefined" != typeof navigator && (CE2.n = navigator), "undefined" != typeof self && (CE2.s = self), CE2.p = {}, function() {
        var e = CE2.n.userAgent;
        /\bMSIE\b/.test(e) && (CE2.ie = 1, CE2.ieVersion = parseInt(/MSIE (\d+)\.\d+/.exec(e)[1], 10), CE2.ieQuirksMode = "BackCompat" == CE2.d.compatMode)
    }(), CE2.ignore = function(e) {
        e && (CE2.ignoredElements.push(e), CE2.tracker && CE2.tracker.ignoredElements.push(e))
    }, CE2.capture = function(e) {
        CE2.clickCaptors.push(e), CE2.tracker && CE2.tracker.clickCaptors.push(e)
    }, CE2.testModeCheck = function() {
        return "undefined" != typeof CE_TEST_MODE && CE_TEST_MODE
    }, CE2.unescape = function(t) {
        try {
            return decodeURIComponent(t)
        } catch (e) {
            return unescape(t)
        }
    }, CE2.qs2obj = function(e, t) {
        if (null == e || /^\s*$/.test(e)) return null;
        for (var n, r = {}, o = e.replace(/\+/g, " ").split(t || "&"), i = 0, a = o.length; i < a; i++)(n = o[i].split("="))[0] && (r[CE2.unescape(n[0])] = null == n[1] ? null : CE2.unescape(n[1]));
        return r
    }, CE2.each = function(e, t, n) {
        if (e)
            if ("number" == typeof e.length && "function" == typeof e.concat)
                for (var r = 0, o = e.length; r < o && (c = e[r], !1 !== t.call(n, c, r)); r++);
            else
                for (var i = 0, a = Object.keys(e); i < a.length; i++) {
                    var s = a[i],
                        c = e[s];
                    if (c !== Object.prototype[s] && !1 === t.call(n, c, s)) break
                }
    }, CE2.indexOf = function(e, t, n) {
        for (var r = n || 0, o = e.length; r < o; r++)
            if (e[r] === t) return r;
        return -1
    }, CE2.listen = CE2.addListener = function(e, t, n) {
        e.addEventListener ? e.addEventListener(t, n, !0) : e.attachEvent("on".concat(t), n)
    }, CE2.removeListener = function(e, t, n) {
        e.removeEventListener ? e.removeEventListener(t, n, !0) : e.detachEvent("on".concat(t), n)
    }, CE2.userData = {}, CE2.set = function(e, t) {
        1 <= (e = parseInt(e, 10)) && e <= 5 && (CE2.userData[e] = "" + t), CE2.tracker && CE2.tracker.sendCustomUserData && CE2.tracker.sendCustomUserData()
    }, CE2.sessionTags = [], CE2.addTag = function(e) {
        if (Array.isArray(e))
            for (var t = 0; t < e.length; t++) {
                var n = e[t];
                CE2.sessionTags.push(n)
            } else CE2.sessionTags.push(e);
        CE2.tracker && CE2.tracker.addTag && CE2.tracker.addTag(e)
    }, CE2.click = function() {
        var e;
        if (CE2.tracker) return (e = CE2.tracker).click.apply(e, arguments)
    }, CE2.getBox || (CE2.getBox = function() {}), CE2.sampleVisit = function(e) {
        return null == e.r || (!1 !== e.r && !0 !== e.r && (Math.random() >= 1 / e.r ? (CE2.debug("Snapshot ".concat(e.id, " not selected due to snapshot sampling: ").concat(e.r)), e.r = !1) : e.r = !0), e.r)
    }, CE2.dontTrack = function(e, t, n, r) {
        if (r && void 0 !== e.external) try {
            if (!0 === e.external.InPrivateFilteringEnabled()) return !0
        } catch (e) {}
        e = t.doNotTrack || n.doNotTrack || n.msDoNotTrack || e.doNotTrack;
        return "1" == e || "yes" == e
    }, CE2.cookies = function() {
        try {
            return CE2.qs2obj(document.cookie, /;\s*/g) || {}
        } catch (e) {
            return {}
        }
    }(), CE2.getCookieDomain = function() {
        if (!CE2._tlDomain) {
            var e = CE2.w.location.hostname;
            if (CE2.re.ipHost.test(e) || !/\./.test(e)) CE2._tlDomain = e;
            else if (CE2.w.CE_COOKIE_DOMAIN && RegExp("(^|\\.)".concat(CE2.w.CE_COOKIE_DOMAIN.replace(/\./g, "\\."), "$"), "i").test(e)) CE2._tlDomain = ".".concat(CE2.w.CE_COOKIE_DOMAIN);
            else
                for (var t = "ce_get_top_level_domain", n = e.split("."), r = n.length - 1; 0 <= r; r--) {
                    var o = ".".concat(n.slice(r).join("."));
                    if (CE2.writeCookie(t, "cookie", {
                            domain: o
                        }), ~document.cookie.indexOf(t)) {
                        CE2.deleteCookie(t, {
                            domain: o
                        }), CE2._tlDomain = o;
                        break
                    }
                }
        }
        return CE2._tlDomain
    }, CE2.getReferrer = function() {
        var e = document.referrer;
        try {
            !e && document.location.ancestorOrigins && (e = CE2BH.slicedToArray(document.location.ancestorOrigins, 1)[0])
        } catch (e) {
            CE2.debug(e)
        }
        return e
    }, CE2.getReferrerDomain = function() {
        return new CE2.URL(CE2.getReferrer()).getDomain()
    }, CE2.needSecureCookieForDomain = function(e) {
        return CE2.needSecureCookieCache && void 0 !== CE2.needSecureCookieCache[e] || (CE2.needSecureCookieCache || (CE2.needSecureCookieCache = {}), CE2.d.cookie = "ce_need_secure_cookie=1; domain=".concat(e), ~CE2.d.cookie.indexOf("ce_need_secure_cookie") ? (CE2.d.cookie = "ce_need_secure_cookie= ; domain=".concat(e, "; expires = Thu, 01 Jan 1970 00:00:00 GMT"), CE2.needSecureCookieCache[e] = !1) : CE2.needSecureCookieCache[e] = !0), CE2.needSecureCookieCache[e]
    }, CE2.writeCookie = function(e, t, n) {
        n = n || {};
        var r = encodeURIComponent,
            o = CE2.cookies,
            i = n.path || "/",
            a = n.domain || CE2.getCookieDomain(),
            s = null;
        n.expires ? s = n.expires : n.expiresIn ? s = new Date((new Date).getTime() + 1e3 * n.expiresIn) : n.expiresInDays && (s = new Date((new Date).getTime() + 86400 * n.expiresInDays * 1e3)), null == t ? (delete o[e], s = new Date(0), t = "") : o[e] = t;
        t = ["".concat(r(e), "=").concat(r(t))];
        t.push("path=".concat(i)), CE2.needSecureCookieForDomain(a) && (t.push("SameSite=None"), t.push("Secure")), a && t.push("domain=".concat(a)), s && t.push("expires=".concat(s.toUTCString())), document.cookie = t.join(";")
    }, CE2.deleteCookie = function(e, t) {
        CE2.writeCookie(e, null, t)
    }, CE2.parseJSON = function(src) {
        return void 0 !== JSON && "function" == typeof JSON.parse ? JSON.parse(src) : eval("(".concat(src, ")"))
    }, CE2.convertToFormData = function(e) {
        for (var t = new FormData, n = Object.keys(e), r = 0; r < n.length; r++) t.append(n[r], e[n[r]]);
        return t
    }, CE2.dasherize = function(e) {
        return "string" == typeof e ? e.replace(/([a-z\d])([A-Z])/g, "$1_$2").toLowerCase().replace(/[ _]/g, "-") : e
    }, CE2.matchSite = function(e, t) {
        return CE2.re.ipHost.test(e) ? e === t : RegExp("(^|\\.)".concat(e, "$"), "i").test(t)
    }, CE2.normalizeSiteName = function(e) {
        var t = document.createElement("a");
        return t.href = "http://".concat(e, "/"), t.hostname
    }, CE2.getCurrentSite = function(e) {
        for (var t, n = 0; t = e[n++];)
            if (CE2.matchSite(CE2.normalizeSiteName(t.name), CE2.w.location.hostname)) return t
    }, CE2.equalObjects = function(e, t) {
        var n = Object.getOwnPropertyNames(e);
        if (n.length != Object.getOwnPropertyNames(t).length) return !1;
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            if (e[o] !== t[o]) return !1
        }
        return !0
    }, CE2.matchURLRules = function(e) {
        var t, n;
        if (e && e.length)
            for (t = 0; n = e[t++];)
                if (CE2.matchURL(n.u, CE2.w.location.href, n.o)) return !0;
        return !1
    }, CE2.isNaN = function() {
        return (CE2.w && CE2.w.isNaN || global.isNaN).apply(void 0, arguments)
    }, CE2.newBlob = function(t, e) {
        var n;
        try {
            n = new Blob(t, {
                type: e
            })
        } catch (e) {
            try {
                (n = new(CE2.w.BlobBuilder || CE2.w.WebKitBlobBuilder || CE2.w.MozBlobBuilder || CE2.w.MSBlobBuilder)).append(t.join()), n = n.getBlob()
            } catch (e) {
                return
            }
        }
        return n
    }, CE2.inlineWorker = function(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
        if ("undefined" != typeof CE_USER_COMMON_SCRIPT_URL) try {
            for (var n = CE2.w.URL || CE2.w.webkitURL, r = [], o = ["CE_DEBUG", "CE_TEST_MODE"], i = 0; i < o.length; i++) {
                var a = o[i];
                CE2.w[a] && r.push("var ".concat(a, " = '").concat(CE2.w[a], "';"))
            }
            t && r.push("self.importScripts(\n        '".concat(CE_USER_COMMON_SCRIPT_URL, "',\n        'https://script.crazyegg.com/pages/versioned/thirdparty-scripts/11.1.287.js'\n      );")), r.push("self.onmessage=".concat(e.toString(), ";"));
            var s = CE2.newBlob(r, "text/javascript");
            return s ? new Worker(n.createObjectURL(s)) : new Worker("data:application/javascript,".concat(encodeURIComponent(r.join())))
        } catch (e) {
            CE2.debug("Inline Worker is not supported: ".concat(e.message))
        } else CE2.debug("Inline Worker is not supported: CE_USER_SCRIPT_URL not defined")
    }, CE2.isFacebookInAppBrowser = function() {
        if (void 0 === CE2._isFB) {
            for (var e = CE2.n.userAgent, t = 0, n = ["FBSN", "FBAN", "FBAV"]; t < n.length; t++)
                if (~e.indexOf(n[t])) {
                    CE2._isFB = !0;
                    break
                }
            CE2._isFB || (CE2._isFB = !1)
        }
        return CE2._isFB
    }, CE2.matchesSelector = function(e, t, n) {
        n && (t += ",".concat(t, " *"));
        n = e.matches || e.matchesSelector || e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.oMatchesSelector;
        if (n) return n.call(e, t);
        for (var r = (e.document || e.ownerDocument).querySelectorAll(t), o = r.length; 0 <= o && r.item(o) !== e; o--);
        return -1 < o
    }, CE2.customEvent = function(e, t) {
        CE2.tracker && CE2.tracker.customEvent && CE2.tracker.customEvent(e, t)
    }, CE2.isNativeFunction = function(e) {
        return !!e && /\{\s+\[native code\]/.test(Function.prototype.toString.call(e))
    }, CE2.cleanPrototype = function(e) {
        if (!CE2.w) return CE2.s[e];
        var t = "ce_proto_iframe",
            n = document.getElementById(t);
        return n || ((n = document.createElement("iframe")).id = t, n.style.display = "none", document.documentElement.appendChild(n)), n.contentWindow[e]
    }, CE2.loadTrackingScript || (CE2.loadTrackingScript = function(e) {
        return e()
    }), CE2.loadSessionTrackingScript || (CE2.loadSessionTrackingScript = function(e) {
        return e()
    }), "undefined" == typeof CE2 && (CE2 = {}), CE2.JSON || (CE2.JSON = {}), function(e) {
        "use strict";
        var l, d, n, E, t = /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;

        function r(e) {
            return e < 10 ? "0" + e : e
        }

        function o() {
            return this.valueOf()
        }

        function C(e) {
            return t.lastIndex = 0, t.test(e) ? '"' + e.replace(t, function(e) {
                var t = n[e];
                return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
            }) + '"' : '"' + e + '"'
        }
        "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + r(1 + this.getUTCMonth()) + "-" + r(this.getUTCDate()) + "T" + r(this.getUTCHours()) + ":" + r(this.getUTCMinutes()) + ":" + r(this.getUTCSeconds()) + "Z" : null
        }, Boolean.prototype.toJSON = o, Number.prototype.toJSON = o, String.prototype.toJSON = o), "function" != typeof e.stringify && (n = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        }, e.stringify = function(e, t, n) {
            var r;
            if (d = l = "", "number" == typeof n)
                for (r = 0; r < n; r += 1) d += " ";
            else "string" == typeof n && (d = n);
            if ((E = t) && "function" != typeof t && ("object" !== CE2BH.typeof(t) || "number" != typeof t.length)) throw Error("JSON.stringify");
            return function e(t, n) {
                var r, o, i, a, s, c = l,
                    u = n[t];
                switch (u && "object" === CE2BH.typeof(u) && "[object Array]" !== Object.prototype.toString.apply(u) && "function" == typeof u.toJSON && (u = u.toJSON(t)), "function" == typeof E && (u = E.call(n, t, u)), CE2BH.typeof(u)) {
                    case "string":
                        return C(u);
                    case "number":
                        return isFinite(u) ? "" + u : "null";
                    case "boolean":
                    case "null":
                        return "" + u;
                    case "object":
                        if (!u) return "null";
                        if (l += d, s = [], "[object Array]" === Object.prototype.toString.apply(u)) {
                            for (a = u.length, r = 0; r < a; r += 1) s[r] = e(r, u) || "null";
                            return i = 0 === s.length ? "[]" : l ? "[\n" + l + s.join(",\n" + l) + "\n" + c + "]" : "[" + s.join(",") + "]", l = c, i
                        }
                        if (E && "object" === CE2BH.typeof(E))
                            for (a = E.length, r = 0; r < a; r += 1) "string" == typeof E[r] && (i = e(o = E[r], u)) && s.push(C(o) + (l ? ": " : ":") + i);
                        else
                            for (o in u) Object.prototype.hasOwnProperty.call(u, o) && (i = e(o, u)) && s.push(C(o) + (l ? ": " : ":") + i);
                        return i = 0 === s.length ? "{}" : l ? "{\n" + l + s.join(",\n" + l) + "\n" + c + "}" : "{" + s.join(",") + "}", l = c, i
                }
            }("", {
                "": e
            })
        })
    }(CE2.JSON), "undefined" == typeof CE2 && (CE2 = {}), CE2.matchURL = function(t, n, e, r, o, i) {
        var a, s, c, u, l = CE2.JSON.stringify,
            d = /(default|index)($|\..*)/i,
            E = !1;
        if (!t || !n) return !1;
        if (r && !~CE2.indexOf(r, CE2.deviceType(o))) return CE2.matchUrlDebug(i, "device=".concat(CE2.deviceType(o), " allowed=").concat(l(r)), f), !1;
        if (/n/.test(e = e || "")) return f = t.trim() == n.trim(), CE2.matchUrlDebug(i, "name=".concat(n, " allowed=").concat(t), f), f;
        if (/go/.test(e)) {
            var C = t.split("."),
                f = n && n[C[0]] && n[C[0]].experiments && n[C[0]].experiments[C[1]] && n[C[0]].experiments[C[1]] == C[2];
            return CE2.matchUrlDebug(i, "googleOptimize=".concat(l(n), " allowed=").concat(l(t)), f), f
        }
        if (/[re]/.test(e)) try {
            return f = RegExp(t, "i").test(n), CE2.matchUrlDebug(i, "url=".concat(n, " allowedregex=").concat(t), f), f
        } catch (e) {
            return CE2.matchUrlDebug(i, "url=".concat(n, " allowedregex=").concat(t)), !1
        }
        t = new CE2.URL(t);
        var p = new CE2.URL(n.toLowerCase());
        if (/h/.test(e) && t.protocol != p.protocol) return CE2.matchUrlDebug(i, "protocol=".concat(p.protocol, " allowed=").concat(t.protocol)), !1;
        var o = p.host,
            r = o.replace(/^(www|m)\./, ""),
            C = t.host,
            f = t.ihost;
        if (/w/.test(e) && o != C && o != f) return CE2.matchUrlDebug(i, "host=".concat(o, " allowed=").concat(f || C)), !1;
        C = C.replace(/^(www|m)\./, ""), f = f && f.replace(/^(www|m)\./, "");
        if (r != C && r != f) return CE2.matchUrlDebug(i, "host=".concat(o, " allowed=").concat(f || C)), !1;
        var h = t.path || "/",
            g = p.path;
        if (h != g) {
            if (/\//.test(e)) return CE2.matchUrlDebug(i, "path=".concat(g, " allowed=").concat(h)), !1;
            for (s = h.split("/"), a = g.split("/"), c = 0, u = Math.max(s.length, a.length); c < u; c++)
                if (s[c] || (s[c] = ""), a[c] || (a[c] = ""), c == u - 1 && (s[c] = s[c].replace(d, ""), a[c] = a[c].replace(d, "")), s[c] != a[c]) return CE2.matchUrlDebug(i, "path=".concat(g, " allowed=").concat(h)), !1
        }
        var m = p.qs,
            y = t.qs || "";
        if ((C = /\?/.test(e)) && m && !y || !m && y) return CE2.matchUrlDebug(i, "querystring=".concat(l(m), " allowed=").concat(l(y))), !1;
        if (CE2.each(y, function(e, t) {
                if (m[t] !== e) return !(E = !0)
            }), E) return CE2.matchUrlDebug(i, "querystring=".concat(l(m), " allowed=").concat(l(y))), !1;
        if (C && (CE2.each(m, function(e, t) {
                if (e != y[t]) return E = !0
            }), E)) return CE2.matchUrlDebug(i, "querystring=".concat(l(m), " allowed=strict|").concat(l(y))), !1;
        t = t.hash || "", p = p.hash || "";
        return ((C = /#/.test(e)) || t) && t != p ? (CE2.matchUrlDebug(i, "hash=".concat(p, " allowed=").concat(t)), !1) : (CE2.matchUrlDebug(i, "url=".concat(n), !0), !0)
    }, CE2.matchUrlDebug = function(e, t) {
        e && e(t, 2 < arguments.length && void 0 !== arguments[2] && arguments[2])
    }, "undefined" == typeof CE2 && (CE2 = {}), void 0 === CE2.URL && (CE2.URL = function(e) {
        var t;
        this.src = e, this.protocol = this.host = this.port = this.path = this.qs = this.hash = this.query = null, e && ("string" == (t = CE2BH.typeof(e)) ? this.initWithString(e) : "object" == t && this.initWithURI(e))
    }, CE2.URL.pattern = /^\s*([\S]+?:\/\/)?([^\s\/]+?@)?([^:\/\?\#]+)?(\:\d+)?(\/?[^#\?\s]*)?([\?][^#\s]*)?([#]\S+)?/i, CE2.URL.prototype = {
        initWithString: function(e) {
            var t = CE2.URL.pattern.exec(e),
                n = CE2BH.slicedToArray(t, 8),
                r = (n[0], n[1]),
                o = (n[2], n[3]),
                i = n[4],
                a = n[5],
                t = n[6],
                n = n[7];
            r || "/" == (e[0] || "") ? (r && (this.protocol = r.substr(0, r.indexOf(":"))), this.host = o || null, i && (this.port = +i.substr(1)), a ? this.path = CE2.unescape(a) : this.host && (this.path = "/")) : this.path = CE2.unescape((o || "") + (a || "")), t && (this.qs = CE2.qs2obj(t.substr(1)), this.query = t.substr(1)), n && (this.hash = CE2.unescape(n.substr(1)))
        },
        initWithURI: function(e) {
            CE2.each(e, function(e, t) {
                this[t] = e
            }, this)
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
        }
    }), "undefined" == typeof CE2 && (CE2 = {}), CE2.deviceType = function(e) {
        var t, n = e.toLowerCase(),
            r = 0,
            o = e.indexOf("(");
        if (-1 == o) return 1;
        if (-1 != (t = e.indexOf("Android", ++o))) {
            if (e.length > (t += 8) && (r = e[0 | t] || "")) switch (r) {
                case "2":
                    if (~e.indexOf("BNTV", t)) return 3;
                    if (~n.indexOf("nook", t)) return 3;
                    if (~e.indexOf("Kindle", t)) return 3;
                    if (~e.indexOf("Touchpad", t)) return 3;
                    break;
                case "3":
                    return 3;
                case "4":
                    if (~e.indexOf("Silk", t)) return 3
            }
            return ~n.indexOf("tablet", t) ? 3 : ~e.indexOf("Mobi", t) ? 2 : 3
        }
        if (-1 != (t = e.indexOf("iP", o))) switch (r = e[0 | t + 2] || "") {
            case "a":
                return 3;
            case "h":
            case "o":
                return 2
        }
        return -1 != (t = e.indexOf("BlackBerry", o)) ? ~e.indexOf("Tablet", t + 10) ? 3 : 2 : ~e.indexOf("Windows Phone", o) || ~e.indexOf("BB10", o) || "M" != (e[0] || "") && ~e.indexOf("Opera Mini", o) ? 2 : 1
    },

    function(e) {
        var t, n = e.w || e.s;

        function c(e) {
            return e && void 0 !== e.length
        }

        function r() {}

        function i(e) {
            if (!(this instanceof i)) throw new TypeError("Promises must be constructed via new");
            if ("function" != typeof e) throw new TypeError("not a function");
            this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], d(e, this)
        }

        function o(n, r) {
            for (; 3 === n._state;) n = n._value;
            0 !== n._state ? (n._handled = !0, i._immediateFn(function() {
                var e, t = 1 === n._state ? r.onFulfilled : r.onRejected;
                if (null !== t) {
                    try {
                        e = t(n._value)
                    } catch (e) {
                        return void s(r.promise, e)
                    }
                    a(r.promise, e)
                } else(1 === n._state ? a : s)(r.promise, n._value)
            })) : n._deferreds.push(r)
        }

        function a(t, e) {
            try {
                if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
                if (e && ("object" === CE2BH.typeof(e) || "function" == typeof e)) {
                    var n = e.then;
                    if (e instanceof i) return t._state = 3, t._value = e, void u(t);
                    if ("function" == typeof n) return void d((r = n, o = e, function() {
                        r.apply(o, arguments)
                    }), t)
                }
                t._state = 1, t._value = e, u(t)
            } catch (e) {
                s(t, e)
            }
            var r, o
        }

        function s(e, t) {
            e._state = 2, e._value = t, u(e)
        }

        function u(e) {
            2 === e._state && 0 === e._deferreds.length && i._immediateFn(function() {
                e._handled || i._unhandledRejectionFn(e._value)
            });
            for (var t = 0, n = e._deferreds.length; t < n; t++) o(e, e._deferreds[t]);
            e._deferreds = null
        }

        function l(e, t, n) {
            this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = n
        }

        function d(e, t) {
            var n = !1;
            try {
                e(function(e) {
                    n || (n = !0, a(t, e))
                }, function(e) {
                    n || (n = !0, s(t, e))
                })
            } catch (e) {
                if (n) return;
                n = !0, s(t, e)
            }
        }
        n.Promise ? e.Promise = n.Promise : (t = setTimeout, i.prototype.catch = function(e) {
            return this.then(null, e)
        }, i.prototype.then = function(e, t) {
            var n = new this.constructor(r);
            return o(this, new l(e, t, n)), n
        }, i.prototype.finally = function(t) {
            var n = this.constructor;
            return this.then(function(e) {
                return n.resolve(t()).then(function() {
                    return e
                })
            }, function(e) {
                return n.resolve(t()).then(function() {
                    return n.reject(e)
                })
            })
        }, i.all = function(t) {
            return new i(function(o, i) {
                if (!c(t)) return i(new TypeError("Promise.all accepts an array"));
                var a = Array.prototype.slice.call(t);
                if (0 === a.length) return o([]);
                var s = a.length;
                for (var e = 0; e < a.length; e++) ! function t(n, e) {
                    try {
                        if (e && ("object" === CE2BH.typeof(e) || "function" == typeof e)) {
                            var r = e.then;
                            if ("function" == typeof r) return void r.call(e, function(e) {
                                t(n, e)
                            }, i)
                        }
                        a[n] = e, 0 == --s && o(a)
                    } catch (e) {
                        i(e)
                    }
                }(e, a[e])
            })
        }, i.resolve = function(t) {
            return t && "object" === CE2BH.typeof(t) && t.constructor === i ? t : new i(function(e) {
                e(t)
            })
        }, i.reject = function(n) {
            return new i(function(e, t) {
                t(n)
            })
        }, i.race = function(o) {
            return new i(function(e, t) {
                if (!c(o)) return t(new TypeError("Promise.race accepts an array"));
                for (var n = 0, r = o.length; n < r; n++) i.resolve(o[n]).then(e, t)
            })
        }, i._immediateFn = "function" == typeof setImmediate ? function(e) {
            setImmediate(e)
        } : function(e) {
            t(e, 0)
        }, i._unhandledRejectionFn = function(e) {
            void 0 !== console && console && console.warn("Possible Unhandled Promise Rejection:", e)
        }, e.Promise = i)
    }(CE2), CE2.promisePool = function(u, l, d) {
        return new CE2.Promise(function(n, r) {
            var o, i = [],
                a = [],
                s = 0,
                c = 0;
            (function t() {
                var e;
                c >= u.length && !o ? o = CE2.Promise.all(a).then(function() {
                    n(i)
                }).catch(function(e) {
                    r(e)
                }) : c >= u.length || (e = u[c], c += 1, e = d(e), a.push(e), e.then(function(e) {
                    i.push(e), --s, t()
                }).catch(function(e) {
                    r(e)
                }), (s += 1) < l && c < u.length && t())
            })()
        })
    }, CE2.cookieStorage = {
        CK: "_ce.s",
        saveTimeout: null,
        canSave: "undefined" == typeof CE_NO_COOKIES || !CE_NO_COOKIES,
        expiresIn: "number" == typeof CE_COOKIE_EXPIRE_DAYS ? CE_COOKIE_EXPIRE_DAYS : 1780,
        load: function() {
            if (!this.values) {
                var e, t, n = {},
                    r = CE2.cookies[this.CK];
                if (r) {
                    for (r = r.replace(/\\~/g, "\0").split("~"), e = 0; t = r[e]; e += 2) n[t.replace(/\x00/g, "~")] = r[e + 1].replace(/\x00/g, "~");
                    this.values = n
                } else this.values = {}
            }
        },
        getCookieRawValue: function() {
            var e = this.values || {},
                n = [];
            return CE2.each(e, function(e, t) {
                n.push(t.replace("~", "\\~")), n.push(e.replace("~", "\\~"))
            }), n.join("~")
        },
        save: function() {
            this.canSave && CE2.writeCookie(this.CK, this.getCookieRawValue(), {
                expiresInDays: this.expiresIn
            })
        },
        get: function(e) {
            return this.load(), this.values[e]
        },
        set: function(e, t) {
            var n = this;
            this.load(), this.values[e] = "".concat(t), null === this.saveTimeout && (this.saveTimeout = setTimeout(function() {
                n.saveTimeout = null, n.save()
            }, 10))
        },
        setImmediatelly: function(e, t) {
            this.load(), this.values[e] = "".concat(t), this.save()
        },
        del: function(e) {
            this.load(), delete this.values[e], this.save()
        }
    }, "undefined" == typeof CE2 && (CE2 = {}), CE2.rng = function() {
        var e, t, n, r = "undefined" != typeof global && (global.crypto || global.msCrypto);
        return r && r.getRandomValues && (e = new Uint8Array(16), t = function() {
            return r.getRandomValues(e), e
        }), t || (n = Array(16), t = function() {
            for (var e, t = 0; t < 16; t++) n[t] = (e = 0 == (3 & t) ? 4294967296 * Math.random() : e) >>> ((3 & t) << 3) & 255;
            return n
        }), t
    }(), CE2.bytesToUuid = function() {
        for (var n = [], e = 0; e < 256; ++e) n[e] = (e + 256).toString(16).substr(1);
        return function(e, t) {
            t = t || 0;
            return n[e[t++]] + n[e[t++]] + n[e[t++]] + n[e[t++]] + "-" + n[e[t++]] + n[e[t++]] + "-" + n[e[t++]] + n[e[t++]] + "-" + n[e[t++]] + n[e[t++]] + "-" + n[e[t++]] + n[e[t++]] + n[e[t++]] + n[e[t++]] + n[e[t++]] + n[e[t++]]
        }
    }(), CE2.uuid_v1 = function() {
        var e = CE2.rng(),
            l = [1 | e[0], e[1], e[2], e[3], e[4], e[5]],
            d = 16383 & (e[6] << 8 | e[7]),
            E = 0,
            C = 0;
        return function(e, t, n) {
            var r = t && n || 0,
                o = t || [],
                i = void 0 !== (e = e || {}).clockseq ? e.clockseq : d,
                a = void 0 !== e.msecs ? e.msecs : (new Date).getTime(),
                s = void 0 !== e.nsecs ? e.nsecs : C + 1,
                n = a - E + (s - C) / 1e4;
            if (n < 0 && void 0 === e.clockseq && (i = i + 1 & 16383), 1e4 <= (s = (n < 0 || E < a) && void 0 === e.nsecs ? 0 : s)) throw Error("uuid.v1(): Can't create more than 10M uuids/sec");
            E = a, d = i;
            s = (1e4 * (268435455 & (a += 122192928e5)) + (C = s)) % 4294967296;
            o[r++] = s >>> 24 & 255, o[r++] = s >>> 16 & 255, o[r++] = s >>> 8 & 255, o[r++] = 255 & s;
            a = a / 4294967296 * 1e4 & 268435455;
            o[r++] = a >>> 8 & 255, o[r++] = 255 & a, o[r++] = a >>> 24 & 15 | 16, o[r++] = a >>> 16 & 255, o[r++] = i >>> 8 | 128, o[r++] = 255 & i;
            for (var c = e.node || l, u = 0; u < 6; ++u) o[r + u] = c[u];
            return t || CE2.bytesToUuid(o)
        }
    }(), "undefined" == typeof CE2 && (CE2 = {}), CE2.READY_STATE_PATTERN = CE2.ie ? /complete/ : /complete|interactive/, CE2.autoStart = CE2.w && ("undefined" == typeof CE_MANUAL_START || !CE_MANUAL_START), CE2.d && (CE2.domReady = CE2.d.readyState && CE2.READY_STATE_PATTERN.test(CE2.d.readyState)), CE2.domReadyListeners = [], CE2.onDOMReady = function(e) {
        if (CE2.domReady) return setTimeout(e, 1);
        CE2.domReadyListeners.push(e)
    }, CE2.domReadySetup = function() {
        function t() {
            for (var e = CE2.domReadyListeners; 0 < e.length;) e.pop().call();
            CE2.domReady = !0
        }
        var n;
        CE2.domReady && t(), CE2.listen(window, "load", t), CE2.d.addEventListener && CE2.listen(CE2.d, "DOMContentLoaded", t), CE2.d.readyState && (n = CE2.READY_STATE_PATTERN, function e() {
            n.test(CE2.d.readyState) ? t() : setTimeout(e, 10)
        }())
    }, CE2.autoStart && CE2.domReadySetup(), "undefined" == typeof CE2 && (CE2 = {}),
    function() {
        var e;
        CE2.uaBot = function(e) {
            return !window.__CE_SCRIPT_CHECK && (/bingpreview|prerender|jorgee|Mediapartners-Google|APIs-Google|phpcrawl|GoogleAdSenseInfeed|Google Page Speed Insights|Google-Ads-Overview|Google-Read-Aloud|Google-Structured-Data-Testing-Tool|Data Theorem|alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo|yandex|phantom|headless|BrandVerity|ruxitsynthetic|Chrome-Lighthouse/i.test(e) || void 0)
        }, CE2.botViewport = function(e) {
            return (16384 <= e.innerHeight || 16384 <= e.innerWidth) && "viewport-inner"
        }, CE2.isBot = function() {
            return !(!(0 < arguments.length && void 0 !== arguments[0] && arguments[0]) && CE2.hasFeature("v11_disable_bot_detection")) && (!window.__CE_SCRIPT_CHECK && (e = e || ((e = void 0 === e ? function() {
                try {
                    if (CE2.uaBot(navigator.userAgent)) return "userAgent";
                    if (!1 === navigator.onLine) return "navigator.onLine";
                    var e = CE2.botViewport(window);
                    if (e) return e;
                    if (!navigator.language || navigator.languages && 0 === navigator.languages.length) return "language";
                    if (navigator.webdriver) return "webdriver";
                    if (window.jasmine) return "jasmine";
                    for (var t = ["__webdriver_evaluate", "__selenium_evaluate", "__webdriver_script_function", "__webdriver_script_func", "__webdriver_script_fn", "__fxdriver_evaluate", "__driver_unwrapped", "__webdriver_unwrapped", "__driver_evaluate", "__selenium_unwrapped", "__fxdriver_unwrapped"], n = ["webdriver", "_phantom", "__nightmare", "_selenium", "callPhantom", "callSelenium", "_Selenium_IDE_Recorder"], r = 0; r < n.length; r++) {
                        var o = n[r];
                        if (window[o]) return "windowKey: ".concat(o)
                    }
                    for (var i, a = 0; a < t.length; a++) {
                        var s = t[a];
                        if (window.document[s]) return "documentKey: ".concat(s)
                    }
                    for (i in window.document)
                        if (i.match(/\$[a-z]dc_/) && window.document[i].cache_) return "chromeHeadlessCacheKey";
                    if (window.external && window.external.toString() && ~window.external.toString().indexOf("Sequentum")) return "sequentum";
                    var c = window.document.documentElement;
                    if (c.getAttribute("selenium") || c.getAttribute("webdriver") || c.getAttribute("driver")) return "selenium";
                    if (!CE2.safari && !CE2.iphone) try {
                        new WebSocket("itsgonnafail")
                    } catch (e) {
                        if (/SyntaxError: DOM Exception 12/.test(e.message)) return "noWebsocket"
                    }
                    if (/Chrome|Chromium/i.test(navigator.userAgent)) {
                        if (!window.chrome) return "windowChromeMissing";
                        var u = document.createElement("iframe");
                        u.style.display = "none", document.body.appendChild(u);
                        var l = CE2BH.typeof(u.contentWindow.chrome);
                        if (u.remove(), "undefined" === l) return "windowChromeMissingOnIFrame";
                        var d = document.createElement("canvas").getContext("webgl"),
                            E = d.getExtension("WEBGL_debug_renderer_info"),
                            C = d.getParameter(E.UNMASKED_VENDOR_WEBGL),
                            f = d.getParameter(E.UNMASKED_RENDERER_WEBGL);
                        if ("Brian Paul" === C && "Mesa OffScreen" === f) return "chromeHeadlessWEBGL"
                    }
                } catch (e) {}
                return !1
            }() : e) || !!document.querySelector('#ID-google-optimizer-editor, script[src*="optimize.google.com/optimize/inject/inject.js"]'))))
        }
    }(), "undefined" == typeof CE2 && (CE2 = {}),
    function() {
        function s(e, t) {
            this.left = parseInt(e, 10), this.right = parseInt(t, 10)
        }

        function c(e) {
            this.parts = e
        }

        function n(e) {
            this.ip = e, this.parts = e.split(".").map(function(e) {
                return parseInt(e, 10)
            })
        }

        function e(e) {
            var t = this;
            this.text = e || "", this.rules = this.text.split("\n").map(function(e) {
                return t.parse_rule(e)
            }), this.rules = this.rules.filter(function(e) {
                return e
            })
        }
        s.prototype.includes = function(e) {
            return this.left <= parseInt(e, 10) && this.right >= parseInt(e, 10)
        }, c.prototype.matches = function(e) {
            for (var t, n = 0; n < e.parts.length; n++)
                if (t = e.parts[n], !c.parts_match(this.parts[n], t)) return !1;
            return !0
        }, c.parts_match = function(e, t) {
            return null === e || (CE2.isNaN(e) ? e instanceof s ? e.includes(t) : void 0 : e === t)
        }, e.prototype.blocked = function(e) {
            if (!e) return !1;
            e = new n(e);
            for (var t = 0; t < this.rules.length; t++)
                if (this.rules[t].matches(e)) return !0;
            return !1
        }, e.prototype.parse_rule = function(e) {
            return "" === (e = e.trim()) || /^\s*#.*$/.test(e) ? null : ~(e = e.replace(/\s*#.*$/, "")).indexOf("-") ? this.parse_range_based_rule(e) : new c(e.split(".").map(function(e) {
                return "*" !== e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : null
            }))
        }, e.prototype.parse_range_based_rule = function(e) {
            for (var t = this, n = e.split("-").map(function(e) {
                    return t.parse_rule(e)
                }), r = [], o = 0; o < 4; o++) {
                var i = n[0].parts[o],
                    a = n[1].parts[o];
                i === a ? r.push(i) : null == i || null == a ? r.push(null) : r.push(new s(i, a))
            }
            return new c(r)
        }, CE2.IPBlockList = e
    }(), "undefined" == typeof CE2 && (CE2 = {}),
    function() {
        var t = "ce_clock";

        function e() {}
        e.prototype = {
            onReady: function(n) {
                var e, r = this,
                    t = this.localStorageGet();
                t ? (t = t.split(","), t = (e = CE2BH.slicedToArray(t, 2))[0], e = e[1], t && e && (this.diff = parseInt(t, 10), this.ip = e, this.valid = !0), n && n()) : (e = "".concat(CE2.data.clock_url, "?t=").concat(+new Date), CE2.get(e, function(e) {
                    var t = e.responseText.split(","),
                        e = CE2BH.slicedToArray(t, 2),
                        t = e[0],
                        e = e[1],
                        t = parseInt(t, 10);
                    0 < t && e && (r.diff = t = +new Date - t, r.ip = e, r.valid = !0, r.localStorageSet([t, e].join(","))), n && n()
                }))
            },
            localStorageSet: function(e) {
                localStorage.setItem(t, CE2.JSON.stringify({
                    value: e,
                    expires: +new Date + 864e5
                }))
            },
            localStorageGet: function() {
                var e = localStorage.getItem(t);
                if (e) {
                    e = JSON.parse(e);
                    if (!(+new Date > e.expires)) return e.value;
                    localStorage.removeItem(t)
                }
            },
            getIP: function() {
                return this.ip
            },
            getDiff: function() {
                return this.diff
            },
            getDate: function() {
                if (this.valid) return new Date(+new Date + this.diff)
            },
            getDateUnix: function() {
                var e = this.getDate();
                if (e) return Math.floor(e / 1e3)
            }
        }, CE2.Clock = e
    }(), "undefined" == typeof CE2 && (CE2 = {}), CE2.pointAt = function(e, t) {
        var n = document.createElement("img");
        n.src = "".concat(CE2.DEBUG_ROOT, "/images/pointer.gif"), n.className = "-ce-debug", n.style.position = "absolute", n.style.left = "".concat(e, "px"), n.style.top = "".concat(t, "px"), n.style.zIndex = 1e5, document.body.insertBefore(n, document.body.firstChild)
    }, CE2.hilight = function(e, t, n, r, o) {
        var i = document.createElement("div");
        i.className = "-ce-debug", i.style.position = "absolute", i.style.backgroundColor = o || "red", i.style.opacity = "0.25", i.style.left = "".concat("" + e, "px"), i.style.top = "".concat("" + t, "px"), i.style.width = "".concat("" + n, "px"), i.style.height = "".concat("" + r, "px"), i.style.zIndex = 1e5, i.style.padding = "0px", i.style.margin = "0px", i.style.border = "none", document.body.appendChild(i)
    }, CE2.clearDebug = function() {
        CE2.each(CE2.findByClass("-ce-debug"), function(e) {
            e.parentNode.removeChild(e)
        }), CE2.logBox && CE2.logBox.parentNode.removeChild(CE2.logBox)
    }, CE2.log = function() {
        var e = CE2.logBox;
        e || ((e = CE2.d.createElement("textarea")).style.position = "fixed", e.style.width = "1024px", e.style.height = "100px", e.style.right = "1em", e.style.bottom = "1em", e.style.fontSize = "10px", e.style.fontFamily = "Helvetica, Arial, sans-serif", e.style.zIndex = 1e5, CE2.d.body.appendChild(e), CE2.logBox = e);
        for (var t = 0, n = arguments.length; t < n; t++) e.value += (t < 0 || arguments.length <= t ? void 0 : arguments[t]) + (0 < t ? " " : "");
        e.value += "\n", e.scrollTop = e.scrollHeight
    }, CE2.summarize = function(e) {
        if (!e || !e.nodeName) return "".concat(e);
        for (var t = [], n = 0, r = e.attributes.length; n < r; n++) t.push("".concat(e.attributes[n].nodeName, '="').concat(e.attributes[n].nodeValue, '"'));
        return "<".concat(e.nodeName).concat(t.length ? " ".concat(t.join(" ")) : "", ">")
    }, "undefined" == typeof CE2 && (CE2 = {}), CE2.browser = function() {
        var e = navigator.userAgent;
        CE2.opera = CE2.ie = CE2.chrome = CE2.safari = CE2.firefox = !1;
        var t = "unknown";
        return CE2.w && CE2.w.opera && "function" == typeof CE2.w.opera.version ? (t = "opera", CE2.opera = !0, CE2.operaVersion = parseInt(CE2.w.opera.version(), 10)) : /\bMSIE\b/.test(e) ? (t = "ie", CE2.ie = !0, CE2.ieVersion = parseInt(/MSIE (\d+)\.\d+/.exec(navigator.userAgent)[1], 10), CE2.ieQuirksMode = "BackCompat" == document.compatMode) : /\b(iPhone|iP[ao]d)\b/.test(e) ? (t = "iphone", CE2.iphone = !0, CE2.webkit = !0, /AppleWebKit/.test(navigator.appVersion) && (t = "safari", CE2.safari = !0)) : /\bChrome\b/.test(e) ? (t = "chrome", CE2.chrome = !0, CE2.webkit = !0) : /AppleWebKit/.test(navigator.appVersion) ? (t = "safari", CE2.safari = !0, CE2.webkit = !0) : /Mozilla/i.test(e) && !/compatible|webkit/i.test(e) && (t = "firefox", CE2.firefox = !0), CE2.webkit && (CE2.webkitVersion = parseInt(/AppleWebKit\/(\d+)/.exec(e)[1], 10)), t
    }(), CE2.findByClass = function(e) {
        var t, n, r, o, i = [],
            a = CE2.d.body;
        if (a.getElementsByClassName ? r = a.getElementsByClassName(e) : a.querySelectorAll && (r = a.querySelectorAll(".".concat(e))), r)
            for (t = 0; n = r[t++];) i.push(n);
        else
            for (r = a.getElementsByTagName("*"), o = RegExp("(^|\\s)".concat(e, "($|\\s)")), t = 0; n = r[t++];) n.className && o.test(n.className) && i.push(n);
        return i
    }, CE2.formatClass = function(e) {
        e = e.className;
        if (e && "string" == typeof e) return (e = CE2.strip(e.replace(/(\s|^)-ce-capture\b/g, "")).split(/\s+/)).sort(), e.join(" ")
    }, CE2.href = function(e) {
        if (!CE2.ie) return e.getAttribute("href");
        e = e.outerHTML.match(CE2.re.href);
        return e ? CE2.strip(e[1]) : void 0
    }, CE2.src = function(e) {
        return /^\s*data:/.test(e) ? CE2.strip(e).substr(0, 100) : new CE2.URL(e).simplify()
    }, CE2.eventCoords = function(e, t) {
        t = CE2.fp.scroll(t);
        return [e.clientX + t.left, e.clientY + t.top]
    }, CE2.contains = function(e, t) {
        if (e == t) return !0;
        if ("function" == typeof e.contains) return e.contains(t);
        for (var n = t;
            (n = n.parentNode) && n != document.body && n != e;);
        return n == e
    }, CE2.arrayContains = function(e, t) {
        var n, r;
        if (e && e.length)
            for (n = 0; r = e[n++];)
                if (CE2.contains(r, t)) return r
    }, CE2.isVML = function(e) {
        return "string" == typeof e.tagUrn && !!~e.tagUrn.indexOf("vml")
    }, CE2.bind = function(r, e) {
        var o = r[e];
        return function() {
            try {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return o.apply(r, t)
            } catch (e) {}
        }
    }, CE2.TIME_RANGES = [500, 1e3, 1500, 2e3, 3e3, 4e3, 5e3, 6e3, 8e3, 1e4, 15e3, 2e4, 3e4, 35e3, 4e4, 6e4, 9e4, 12e4, 18e4, 24e4, 3e5, 42e4, 6e5, 9e5, 12e5, 15e5, 18e5, 24e5, 3e6, 36e5, 72e5, 108e5, Number.MAX_VALUE], CE2.getTimeRange = function(e) {
        for (var t = CE2.TIME_RANGES, n = 0, r = t.length; n < r; n++)
            if (e < t[n] && (0 == n || e >= t[n - 1])) return n + 1
    }, CE2.eventWindow = function(e) {
        return e.source || e.view || e.srcElement.ownerDocument.parentWindow
    }, CE2.getStyle = function(e) {
        var t = CE2.w,
            n = t.getComputedStyle;
        return n ? n.call(t, e, null) : e.currentStyle
    }, CE2.querySelectorAll = function(e, t) {
        var n = CE2.d;
        if (n.querySelectorAll) return t ? n.querySelector(e) : n.querySelectorAll(e);
        for (var r, o = [], i = n.all, a = n.createStyleSheet(), s = (e = e.split(/\s*,\s*/)).length; s--;) {
            for (a.addRule(e[s], "k:v"), r = i.length; r--;)
                if (i[r].currentStyle.k) {
                    if (t) return i[r];
                    o.push(i[r])
                }
            a.removeRule(0)
        }
        return t ? null : o
    }, CE2.makeId = function(e, t) {
        var n, r, o, i = CE2.w.crypto,
            a = "function" == typeof CE2.w.btoa && CE2.w.btoa,
            s = "";
        if (e = e || 20, i && i.getRandomValues) {
            var c = new Uint8Array(e);
            i.getRandomValues(c), n = Array.from(c)
        } else
            for (n = Array(e), r = 0; r < e; r++) n[r] = Math.floor(256 * Math.random());
        if (t && a) return a(s = n.map(function(e) {
            return String.fromCharCode(e)
        }).join("")).replace(/\+/g, "-").replace(/\//g, "_").replace(/\=+$/, "");
        for (r = 0; r < e; r++) s += (o = n[r].toString(16)).length < 2 ? "0".concat(o) : o;
        return s
    }, CE2.hasAccessToFrame = function(e) {
        var t = "key_".concat(+new Date);
        try {
            var n = e.contentWindow,
                r = (n[t] = "temp") === n[t];
            return r && delete n[t], r
        } catch (e) {
            return !1
        }
    }, CE2.assign = function() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        var r = t[0];
        if (1 === arguments.length) return r;
        var o, i = Array.prototype.slice.call(t),
            a = i[1];
        for (o in a) Object.prototype.hasOwnProperty.call(a, o) && (r[o] = a[o]);
        return i.splice(1, 1), CE2.assign.apply(this, i)
    }, CE2.isVisible = function(e, t) {
        var n = CE2.getStyle(e);
        return "none" !== n.display && (!(!t && "hidden" === n.visibility) && (!(n.opacity < .1) && (!e.parentElement || CE2.isVisible(e.parentElement, !0))))
    }, CE2.findIndexInArray = function(e, t) {
        for (var n = 0; n < e.length; n++)
            if (t(e[n])) return n;
        return -1
    }, CE2.findInArray = function(e, t) {
        t = CE2.findIndexInArray(e, t);
        if (0 <= t) return e[t]
    }, CE2.truncateOnWords = function(e) {
        if (e.length <= 50) return e.trim();
        for (var t = e.trim().split(" "), n = 1; n <= t.length; n++) {
            var r = t.slice(0, n).join(" ");
            if (!(r.length <= 50)) {
                var o = n === t.length;
                return r.trim() + (o ? "" : " ...")
            }
        }
        return e.trim()
    }, "undefined" == typeof CE2 && (CE2 = {}), CE2.URL.prototype.join = function(e) {
        var t = new CE2.URL(this),
            n = this.path;
        return (e = "string" == typeof e ? new CE2.URL(e) : e).isURL() ? new CE2.URL(e) : (n = e.isAbsolute() ? e.path : n ? ((n = n.split("/")).pop(), (n = e.path ? n.concat(e.path.split("/")) : n).join("/")) : this.isURL() ? "/".concat(e.path) : e.path, t.path = n, t.qs = e.qs, t.hash = e.hash, t)
    }, CE2.URL.prototype.normalize = function() {
        if (this.path) {
            var e;
            CE2.ie && CE2.ieVersion < 9 ? (e = [], "/" == (this.path[0] || "") && e.push(""), e = e.concat(this.path.split(/\/+/g)), "/" == (this.path[0 | this.path.length - 1] || "") && e.push("")) : e = this.path.split(/\/+/g);
            var t, n = 0;
            do {
                if (t = e.length - 1, ".." == e[n + 1]) "" == e[n] && 0 == n ? e.splice(n + 1, 1) : (e.splice(n, 2), --n);
                else if ("." == e[n]) {
                    if (0 == t) break;
                    e.splice(n, 1)
                } else n++
            } while (n <= t);
            this.path = e.join("/")
        }
    }, CE2.URL.prototype.simplify = function(e) {
        var n, t = [],
            e = "file" == this.protocol ? this : CE2.ie ? e ? e.join(this) : this : (e = e || new CE2.URL(CE2.d.baseURI)).join(this);
        return e.normalize(), e.host && t.push(e.host.replace(/^(www|m)\./, "")), null != e.port && t.push(":".concat(e.port)), "/" == e.path || /^\/(default|home|index)\b[^\/]*$/i.test(e.path) ? (e.qs || e.hash) && t.push("/") : t.push(e.path), e.qs && (n = [], CE2.each(e.qs, function(e, t) {
            e && !/(^sess|^sid$|^phpsessid$|^jsessionid$|^__VIEWSTATE$)/i.test(t) && n.push("".concat(encodeURIComponent(t), "=").concat(encodeURIComponent(e)))
        }), n.length && t.push("?".concat(n.join("&")))), e.hash && t.push("#".concat(e.hash)), t.join("")
    }, CE2.URL.prototype.sameOrigin = function(e) {
        return !!e && (null == (e = "string" == typeof e ? new CE2.URL(e) : e).host || e.host == this.host && e.port == this.port && e.protocol == this.protocol)
    },

    function(e) {
        function t() {
            if (!(this instanceof t)) return new t;
            this.boundary = "------RWWorkerFormDataBoundary".concat(Math.random().toString(36));
            var r = this.data = [];
            this.__append = function(e) {
                var t, n = 0;
                if ("string" == typeof e)
                    for (t = e.length; n < t; ++n) r.push(255 & e.charCodeAt(n));
                else if (e && e.byteLength)
                    for ((t = (e = !("byteOffset" in e) ? new Uint8Array(e) : e).byteLength); n < t; ++n) r.push(255 & e[n])
            }
        }
        t.prototype.append = function(e, t, n) {
            if (this.__endedMultipart && (this.data.length -= this.boundary.length + 6, this.__endedMultipart = !1), arguments.length < 2) throw new SyntaxError("Not enough arguments");
            var r = "--".concat(this.boundary, "\r\n") + 'Content-Disposition: form-data; name="'.concat(e, '"');
            if ("undefined" != typeof File && t instanceof File || "undefined" != typeof Blob && t instanceof Blob) return this.append(e, new Uint8Array((new FileReaderSync).readAsArrayBuffer(t)), n || t.name);
            "number" == typeof t.byteLength ? (r += '; filename="'.concat((n || "blob").replace(/"/g, "%22"), '"\r\n'), this.__append(r += "Content-Type: application/octet-stream\r\n\r\n"), this.__append(t), r = "\r\n") : r += "\r\n\r\n".concat(t, "\r\n"), this.__append(r)
        }, e.FormData = t
    }(CE2), CE2.testModeRequests = [], CE2.get = function(e, t, n) {
        CE2.XMLHttpRequest || CE2.isNativeFunction(XMLHttpRequest.prototype.send) || (CE2.XMLHttpRequest = CE2.cleanPrototype("XMLHttpRequest"));
        var r = new(CE2.XMLHttpRequest || XMLHttpRequest);
        r.onreadystatechange = function() {
            4 == r.readyState && t(r)
        }, r.open("GET", e, !0), n && (r.responseType = n), r.send()
    }, CE2.post = {
        send: function(e, t) {
            var n, r, o, i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
            CE2.testModeCheck() ? CE2.testModeRequests.push({
                url: e,
                data: t,
                options: i
            }) : (n = i.sendBeacon && CE2.n && CE2.n.sendBeacon, r = i.contentType || "text/plain", n && CE2.n && CE2.n.sendBeacon ? (CE2.n.sendBeacon(e, t), i.callback && i.callback()) : "undefined" != typeof XMLHttpRequest ? ((o = new XMLHttpRequest).onreadystatechange = function() {
                i.callback && 4 == o.readyState && i.callback(o)
            }, o.open(i.method || "POST", e), t instanceof CE2.FormData && (t.__endedMultipart || t.__append("--".concat(t.boundary, "--\r\n")), t.__endedMultipart = !0, r = "multipart/form-data; boundary=".concat(t.boundary), t = new Uint8Array(t.data)), o.setRequestHeader("Content-type", r), o.send(t)) : CE2.debug("XMLHttpRequest not supported"))
        },
        sendForm: function(e, t) {
            var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
            CE2.post.send(e, CE2.post.encodeParams(t), CE2BH.extends(n, {
                contentType: "application/x-www-form-urlencoded"
            }))
        },
        encodeParams: function(e) {
            var n = "",
                r = encodeURIComponent;
            return CE2.each(e, function(e, t) {
                null != e && CE2.strip("".concat(e)) && (n.length && (n += "&"), n += "".concat(r(t), "=").concat(r(e)))
            }), n
        }
    },

    function() {
        "use strict";

        function d(e, t) {
            var n = (65535 & e) + (65535 & t);
            return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
        }

        function s(e, t, n, r, o, i) {
            return d((i = d(d(t, e), d(r, i))) << (o = o) | i >>> 32 - o, n)
        }

        function E(e, t, n, r, o, i, a) {
            return s(t & n | ~t & r, e, t, o, i, a)
        }

        function C(e, t, n, r, o, i, a) {
            return s(t & r | n & ~r, e, t, o, i, a)
        }

        function f(e, t, n, r, o, i, a) {
            return s(t ^ n ^ r, e, t, o, i, a)
        }

        function p(e, t, n, r, o, i, a) {
            return s(n ^ (t | ~r), e, t, o, i, a)
        }

        function a(e, t) {
            var n, r, o, i;
            e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
            for (var a = 1732584193, s = -271733879, c = -1732584194, u = 271733878, l = 0; l < e.length; l += 16) a = E(n = a, r = s, o = c, i = u, e[l], 7, -680876936), u = E(u, a, s, c, e[l + 1], 12, -389564586), c = E(c, u, a, s, e[l + 2], 17, 606105819), s = E(s, c, u, a, e[l + 3], 22, -1044525330), a = E(a, s, c, u, e[l + 4], 7, -176418897), u = E(u, a, s, c, e[l + 5], 12, 1200080426), c = E(c, u, a, s, e[l + 6], 17, -1473231341), s = E(s, c, u, a, e[l + 7], 22, -45705983), a = E(a, s, c, u, e[l + 8], 7, 1770035416), u = E(u, a, s, c, e[l + 9], 12, -1958414417), c = E(c, u, a, s, e[l + 10], 17, -42063), s = E(s, c, u, a, e[l + 11], 22, -1990404162), a = E(a, s, c, u, e[l + 12], 7, 1804603682), u = E(u, a, s, c, e[l + 13], 12, -40341101), c = E(c, u, a, s, e[l + 14], 17, -1502002290), a = C(a, s = E(s, c, u, a, e[l + 15], 22, 1236535329), c, u, e[l + 1], 5, -165796510), u = C(u, a, s, c, e[l + 6], 9, -1069501632), c = C(c, u, a, s, e[l + 11], 14, 643717713), s = C(s, c, u, a, e[l], 20, -373897302), a = C(a, s, c, u, e[l + 5], 5, -701558691), u = C(u, a, s, c, e[l + 10], 9, 38016083), c = C(c, u, a, s, e[l + 15], 14, -660478335), s = C(s, c, u, a, e[l + 4], 20, -405537848), a = C(a, s, c, u, e[l + 9], 5, 568446438), u = C(u, a, s, c, e[l + 14], 9, -1019803690), c = C(c, u, a, s, e[l + 3], 14, -187363961), s = C(s, c, u, a, e[l + 8], 20, 1163531501), a = C(a, s, c, u, e[l + 13], 5, -1444681467), u = C(u, a, s, c, e[l + 2], 9, -51403784), c = C(c, u, a, s, e[l + 7], 14, 1735328473), a = f(a, s = C(s, c, u, a, e[l + 12], 20, -1926607734), c, u, e[l + 5], 4, -378558), u = f(u, a, s, c, e[l + 8], 11, -2022574463), c = f(c, u, a, s, e[l + 11], 16, 1839030562), s = f(s, c, u, a, e[l + 14], 23, -35309556), a = f(a, s, c, u, e[l + 1], 4, -1530992060), u = f(u, a, s, c, e[l + 4], 11, 1272893353), c = f(c, u, a, s, e[l + 7], 16, -155497632), s = f(s, c, u, a, e[l + 10], 23, -1094730640), a = f(a, s, c, u, e[l + 13], 4, 681279174), u = f(u, a, s, c, e[l], 11, -358537222), c = f(c, u, a, s, e[l + 3], 16, -722521979), s = f(s, c, u, a, e[l + 6], 23, 76029189), a = f(a, s, c, u, e[l + 9], 4, -640364487), u = f(u, a, s, c, e[l + 12], 11, -421815835), c = f(c, u, a, s, e[l + 15], 16, 530742520), a = p(a, s = f(s, c, u, a, e[l + 2], 23, -995338651), c, u, e[l], 6, -198630844), u = p(u, a, s, c, e[l + 7], 10, 1126891415), c = p(c, u, a, s, e[l + 14], 15, -1416354905), s = p(s, c, u, a, e[l + 5], 21, -57434055), a = p(a, s, c, u, e[l + 12], 6, 1700485571), u = p(u, a, s, c, e[l + 3], 10, -1894986606), c = p(c, u, a, s, e[l + 10], 15, -1051523), s = p(s, c, u, a, e[l + 1], 21, -2054922799), a = p(a, s, c, u, e[l + 8], 6, 1873313359), u = p(u, a, s, c, e[l + 15], 10, -30611744), c = p(c, u, a, s, e[l + 6], 15, -1560198380), s = p(s, c, u, a, e[l + 13], 21, 1309151649), a = p(a, s, c, u, e[l + 4], 6, -145523070), u = p(u, a, s, c, e[l + 11], 10, -1120210379), c = p(c, u, a, s, e[l + 2], 15, 718787259), s = p(s, c, u, a, e[l + 9], 21, -343485551), a = d(a, n), s = d(s, r), c = d(c, o), u = d(u, i);
            return [a, s, c, u]
        }

        function c(e) {
            for (var t = "", n = 32 * e.length, r = 0; r < n; r += 8) t += String.fromCharCode(e[r >> 5] >>> r % 32 & 255);
            return t
        }

        function u(e) {
            var t = [];
            for (t[(e.length >> 2) - 1] = void 0, r = 0; r < t.length; r += 1) t[r] = 0;
            for (var n = 8 * e.length, r = 0; r < n; r += 8) t[r >> 5] |= (255 & e.charCodeAt(r / 8)) << r % 32;
            return t
        }

        function r(e) {
            for (var t, n = "0123456789abcdef", r = "", o = 0; o < e.length; o += 1) r += (n[0 | (t = e.charCodeAt(o)) >>> 4 & 15] || "") + (n[0 | 15 & t] || "");
            return r
        }

        function n(e) {
            return unescape(encodeURIComponent(e))
        }

        function o(e) {
            return c(a(u(e = n(e)), 8 * e.length))
        }

        function i(e, t) {
            return function(e, t) {
                var n, r = u(e),
                    o = [],
                    i = [];
                for (o[15] = i[15] = void 0, 16 < r.length && (r = a(r, 8 * e.length)), n = 0; n < 16; n += 1) o[n] = 909522486 ^ r[n], i[n] = 1549556828 ^ r[n];
                return t = a(o.concat(u(t)), 512 + 8 * t.length), c(a(i.concat(t), 640))
            }(n(e), n(t))
        }
        CE2.md5 = function(e, t, n) {
            return t ? n ? i(t, e) : r(i(t, e)) : n ? o(e) : r(o(e))
        }
    }(), CE2.Map = function() {
        this._dict = []
    }, CE2.Map.prototype = {
        _get: function(e) {
            for (var t = 0, n = this._dict; t < n.length; t++) {
                var r = n[t];
                if (r[0] === e) return r
            }
        },
        put: function(e, t) {
            var n = this._get(e);
            return n ? n[1] = t : this._dict.push([e, t]), delete this.keysCache, this
        },
        get: function(e) {
            e = this._get(e);
            if (e) return e[1]
        },
        keys: function() {
            if (this.keysCache) return this.keysCache;
            this.keysCache = [];
            for (var e = 0, t = this._dict; e < t.length; e++) {
                var n = t[e];
                this.keysCache.push(n[0])
            }
            return this.keysCache
        }
    }, CE2.identify = function(e) {
        e && (CE2.tracker && CE2.tracker.identify && CE2.tracker.identify(e), CE2.IDENTIFIER = e)
    }, "undefined" == typeof CE2 && (CE2 = {}),
    function() {
        var r = "v11.rlc";

        function e(e) {
            this.site = e, this.clock = CE2.clock, this.ratio = CE2.ratioForSite(e)
        }
        CE2.ratioForSite = function(e) {
            if (CE2.data.sites_sampling)
                for (var t = 0, n = CE2.data.sites_sampling; t < n.length; t++) {
                    var r = n[t];
                    if (r.id === e.id) return parseInt(r.recording_ratio, 10)
                }
        }, e.prototype = {
            validRatio: function() {
                return !CE2.isNaN(this.ratio) && null != this.ratio
            },
            canRecord: function() {
                if ("undefined" != typeof CE_ENFORCE_RECORDING && CE_ENFORCE_RECORDING) return this.debug("CE_ENFORCE_RECORDING applied"), this._setAppliedStrategy("enforced"), !0;
                if (this.ratio <= 0) return this.debug("Sampling Ratio: Zeroed Ratio"), !1;
                var e = CE2.cookieStorage.get(r);
                if (e && +new Date - parseInt(e, 10) < 18e5) return this.debug("Sampling Ratio: Standby"), !1;
                if (this.debug("Sampling Ratio: ".concat(this.ratio)), Math.random() * this.ratio < 1) {
                    var t, n = !1;
                    return this.appliedStrategy = this._strategy(), n = "custom" === this._strategy() ? ((t = this.customSamplingApplies()) ? this._setAppliedStrategy("custom") : this.customPeriodEnded() && (t = !0, this._setAppliedStrategy("uniform")), this.debug("Sampling Ratio Applies: ".concat(t)), t) : ("consecutive" == this._strategy() ? ((t = this.consecutiveSamplingApplies()) ? this._setAppliedStrategy("consecutive") : this._setAppliedStrategy("uniform"), this.debug("Sampling Ratio Applies: ".concat(t))) : (this._setAppliedStrategy("uniform"), this.debug("Sampling Ratio: Recording")), !0), CE2.cookieStorage.del(r), n
                }
                return this.debug("Sampling Ratio: Not This Time"), CE2.cookieStorage.set(r, +new Date), !1
            },
            _setAppliedStrategy: function(e) {
                this.appliedStrategy = e, CE2.appliedStrategy = e
            },
            _appliedStrategy: function() {
                return this.appliedStrategy
            },
            consecutiveSamplingApplies: function() {
                var e = new Date(1e3 * parseInt(this.site.recordingSettings.samplingUpdatedAt, 10)),
                    t = new Date(1e3 * parseInt(this.site.recordingSettings.samplingCompletedAt, 10));
                return !(e && t && e < t)
            },
            customSamplingApplies: function() {
                if (!this.clock) return !1;
                var e = CE2.clock.getDate();
                if (!e) return !1;
                var t = new Date(1e3 * parseInt(this.site.recordingSettings.samplingStartDateUnix, 10)),
                    n = new Date(1e3 * parseInt(this.site.recordingSettings.samplingEndDateUnix, 10)),
                    r = new Date(1e3 * parseInt(this.site.recordingSettings.samplingUpdatedAt, 10)),
                    o = new Date(1e3 * parseInt(this.site.recordingSettings.samplingCompletedAt, 10));
                return !(r && o && r < o) && (t <= e && e <= n)
            },
            customPeriodEnded: function() {
                if (!this.clock) return !1;
                var e = CE2.clock.getDate();
                return new Date(1e3 * parseInt(this.site.recordingSettings.samplingEndDateUnix, 10)) < e
            },
            debug: function(e) {
                CE2.debug("Recording: ".concat(e))
            },
            _strategy: function() {
                return "custom" === this.site.recordingSettings.samplingStrategy ? "custom" : "consecutive" === this.site.recordingSettings.samplingStrategy ? "consecutive" : "uniform"
            },
            _key: function() {
                return "custom" === this._strategy() || "consecutive" === this._strategy() ? btoa("".concat(this.site.id, "|").concat(this.site.recordingSettings.samplingUpdatedAt)) : "all"
            }
        }, CE2.Ratio = e
    }(),
    function() {
        var e = "v11.s",
            t = "v11.sla",
            n = "v11.send",
            r = "v11nv";

        function o() {
            this.id = this.get(e), this.id || (this.id = CE2.uuid_v1(), this.isNew = !0)
        }
        o.exists = function() {
            return !!CE2.cookieStorage.get(e)
        }, o.prototype = {
            get: function(e) {
                return CE2.cookieStorage.get(e)
            },
            set: function(e, t) {
                return CE2.cookieStorage.setImmediatelly(e, t)
            },
            del: function(e) {
                return CE2.cookieStorage.del(e)
            },
            store: function() {
                this.set(e, this.id)
            },
            reset: function() {
                this.del(e), this.del(t), this.del(n), this.del(r), this.id = null
            },
            alive: function() {
                this.isExpiredCheck() || this.set(t, +new Date)
            },
            isExpiredCheck: function() {
                var e = parseInt(this.get(t), 10);
                return !(!this.id || !e) && 18e5 < +new Date - e
            },
            isExpired: function() {
                return this.isEnded() || this.isExpiredCheck()
            },
            isEnded: function() {
                var e = parseInt(this.get(n), 10);
                return !!(this.id && e && 3e5 < +new Date - e) || (this.del(n), !1)
            },
            numberVisits: function() {
                return parseInt(this.get(r), 10) || 0
            },
            setNumberVisits: function(e) {
                return this.set(r, e)
            },
            end: function() {
                var e = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
                    t = parseInt(this.get(n), 10);
                !t && e ? this.set(n, 1) : t || this.set(n, +new Date)
            }
        }, CE2.V11Session = o
    }(), CE2.V11Network = function() {
        var t = "v11slnt";

        function c() {
            CE2.cookieStorage.set(t, +new Date)
        }

        function n() {
            var e = function() {
                var e = CE2.cookieStorage.get(t);
                if (e) return parseInt(e, 10)
            }();
            return !!e && +new Date - e < 6e5
        }
        return {
            slow: function() {
                if (CE2.hasFeature("v11_record_slow_network")) return !1;
                try {
                    navigator && navigator.connection && navigator.connection.downlink && navigator.connection.downlink < .5 && c(),
                        function() {
                            if (performance && performance.getEntriesByType) {
                                var e = performance.getEntriesByType("resource");
                                if (!(void 0 === e || e.length <= 0)) {
                                    for (var t, n, r = 0; r < e.length; r++) {
                                        var o = e[r];
                                        (t = /pages\/versioned\/tracking\-scripts/.test(o.name) ? o : t) || "undefined" == typeof CE_USER_COMMON_SCRIPT_URL || o.name !== CE_USER_COMMON_SCRIPT_URL || (t = o), /pages\/data\-scripts\//.test(o.name) && (n = o)
                                    }
                                    for (var i = 0, a = [t, n]; i < a.length; i++) {
                                        var s = a[i];
                                        s && s.responseEnd && s.responseStart && 1e3 < s.responseEnd - s.responseStart && c()
                                    }
                                }
                            }
                        }();
                    var e = n();
                    return CE2.debug("V11 Networking: slow? ".concat(e)), e
                } catch (e) {
                    return CE2.debug(e), !1
                }
            }
        }
    }, CE2.userSessionMatchPageTargeting = function(e) {
        var t, n, r = e.rules;
        if (CE2.data.disable_recordings_mobile && 1 !== CE2.deviceType(CE2.n.userAgent)) return !1;
        if (e.pageTargetingEnabled && r && r.length) {
            for (t = 0; n = r[t++];)
                if (CE2.matchURL(n.u, CE2.w.location.href, n.o, null, null, CE2.sessionMatchCallbackDebug(n))) return !0;
            return !1
        }
        return CE2.debug("Session page match for url ".concat(CE2.w.location.href)), !0
    }, CE2.sessionMatchCallbackDebug = function(t) {
        return function(e) {
            CE2.sessionMatchDebug(t, e, 1 < arguments.length && void 0 !== arguments[1] && arguments[1])
        }
    }, CE2.sessionMatchDebug = function(e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2] ? "matched" : "rejected";
        CE2.debug("Session target ".concat(CE2.JSON.stringify(e), " ").concat(n, ": ").concat(t))
    }, CE2.userSessionMatching = function(e) {
        if (e.sessionRecording) {
            if (!(e.recordingSettings && e.recordingSettings.recordIframes) && CE2.w.parent !== CE2.w) {
                var t = CE2.getReferrerDomain(),
                    n = CE2.getCookieDomain().substr(1);
                if (t && ~t.indexOf(n)) return void CE2.debug("Session recording prevented from iframe")
            }
            var r = CE2.userSessionMatchPageTargeting(e.recordingSettings),
                o = e.recordingSettings && CE2.matchURLRules(e.recordingSettings.blockedRules),
                t = new CE2.V11Network;
            if (CE2.V11Session.exists()) {
                n = new CE2.V11Session;
                if (!n.isExpired()) return o && e.recordingSettings.endSessionOnBlockedUrl ? (n.reset(), void CE2.notTrackingCallback("Session page blocked and marked to end")) : t.slow() ? (n.reset(), void CE2.notTrackingCallback("Session network is too slow. Ending Session")) : (CE2.debug("Session continued"), n);
                n.reset(), CE2.debug("Session expired")
            }
            if (r) {
                if (!o) {
                    if (t.slow()) return CE2.debug("Session network is too slow. Dont start a session"), !1;
                    e = new CE2.Ratio(e);
                    return e.validRatio() && e.canRecord() ? (CE2.debug("Session sampling accepted, starting new session"), new CE2.V11Session) : (CE2.debug("Session sampling rejected"), !1)
                }
                CE2.debug("Session page blocked")
            } else CE2.debug("Session page didn't match")
        } else CE2.debug("Session recording disabled")
    }, CE2.findMatchingSnapshot = function(e, t, n, r, o, i) {
        var a, s;
        if (e && e.length) {
            for (var c = CE2.clock.getDateUnix(), u = 0; a = e[u++];) a.e && (!c || a.e <= c) ? CE2.snapshotMatchDebug(a, "expired") : n && !/n/.test(a.o || "") || o && !/go/.test(a.o || "") ? CE2.snapshotMatchDebug(a, "not named snapshot") : a.s && (!c || a.s > c) ? (CE2.snapshotMatchDebug(a, "pending"), CE2.p[a.id] = a) : CE2.isMatchingSnapshot(a, t, n, r, o, i) && (s = s || a, CE2.scriptCheckMatchingSnapshots || (CE2.scriptCheckMatchingSnapshots = []), ~CE2.scriptCheckMatchingSnapshots.indexOf(a.id) || CE2.scriptCheckMatchingSnapshots.push(a.id));
            return s
        }
    }, CE2.isMatchingSnapshot = function(e, t, n, r, o, i) {
        if (void 0 === e.isBlocked && (e.isBlocked = new CE2.IPBlockList(e.ip).blocked(i)), e.isBlocked) return CE2.snapshotMatchDebug(e, "IP blocked"), !1;
        if (CE2.isBot()) return CE2.snapshotMatchDebug(e, "bot blocked"), !1;
        if (r) {
            i = r == e.vid;
            return CE2.snapshotMatchDebug(e, "variantid=".concat(r, " allowed=").concat(e.vid), i), i
        }
        return !r && e.vid ? (CE2.snapshotMatchDebug(e, "variantid=".concat(r, " allowed=").concat(e.vid)), !1) : o ? CE2.matchURL(e.u, o, e.o, e.d, CE2.n.userAgent, CE2.snapshotMatchCallbackDebug(e)) : CE2.matchURL(e.u, n || t, e.o, e.d, CE2.n.userAgent, CE2.snapshotMatchCallbackDebug(e))
    }, CE2.snapshotMatchCallbackDebug = function(t) {
        return function(e) {
            CE2.snapshotMatchDebug(t, e, 1 < arguments.length && void 0 !== arguments[1] && arguments[1])
        }
    }, CE2.snapshotMatchDebug = function(e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2] ? "matched" : "rejected";
        CE2.debug("Snapshot ".concat(e.id, " ").concat(n, ": ").concat(t))
    }, CE2.userSnapshotMatching = function(e, t, n, r, o) {
        CE2.debug("Snapshot matching for url=".concat(t, " ceSnapshotName=").concat(n, " variantId=").concat(r, " gaData=").concat(CE2.JSON.stringify(o)));
        var i, a = null,
            s = null;
        return r && (a = CE2.findMatchingSnapshot(e, t, n, r, null, CE2.clock.getIP())), o && (s = CE2.findMatchingSnapshot(e, t, n, null, o, CE2.clock.getIP())), i = CE2.findMatchingSnapshot(e, t, n, null, null, CE2.clock.getIP()), a || s || i
    }, CE2.startTracking = function(e, t, n, r) {
        var o, i = [];
        if (e && i.push("SNAPSHOT_ID=".concat(e.id)), n && i.push("SESSION=".concat(n.id || n)), e && CE2.sampleVisit(e) && (o = e.id, CE2.testID = e.id, CE2.testVersion = e.v || 1), CE2.tracker) return CE2.tracker.visitor && i.push("VISITOR=".concat(CE2.tracker.visitor.getId())), CE2.debug("Updating Tracker TRACKER=11 ".concat(i.join(" "))), void CE2.tracker.update(o, n, r);
        o || n ? (CE2.tracker = new CE2.V11Tracker(11, CE2.VERSION, o, n, CE2.getCensoredElements(t), null, t), i.push("VISITOR=".concat(CE2.tracker.visitor.getId())), CE2.debug("Starting Tracker TRACKER=11 ".concat(i.join(" ")))) : CE2.debug("Tracker not started ".concat(i.join(" ")))
    }, CE2.startTestModeTracking = function() {
        CE2.debug("Starting Test Mode Tracker TRACKER=11"), CE2.tracker = new CE2.V11Tracker(11, CE2.VERSION, "testsnapshot", new CE2.V11Session), CE2.tracker.testMode = !0
    }, CE2.loadSamplingData = function(e) {
        var t = new XMLHttpRequest,
            n = parseInt(+new Date / 36e5, 10);
        t.onreadystatechange = function() {
            if (4 == t.readyState) try {
                200 == t.status && t.responseText && (CE2.data.samplingData = JSON.parse(t.responseText), e())
            } catch (e) {
                CE2.debug("Error loading sampling data: ".concat(e.message))
            }
        }, t.onerror = function(e) {
            CE2.debug("Error loading sampling data: ".concat(e.message))
        }, CE2.debug("Loading sampling user data ".concat(CE2.data.sampling_data_url)), t.open("GET", "".concat(CE2.data.sampling_data_url, "?t=").concat(n), !0), t.send()
    }, CE2.userDataMain = function() {
        CE2.debug("Starting CrazyEgg v".concat(CE2.VERSION)), CE2.testModeCheck() ? CE2.userMainTestMode() : CE2.data ? CE2.loadSamplingData(function() {
            CE2.userMain()
        }) : CE2.data || "string" != typeof CE_USER_DATA_URL ? CE2.debug("No CE2.data nor CE_USER_DATA_URL found, stopping.") : (CE2.debug("No CE2.data, loading user data for CE_USER_DATA_URL=".concat(CE_USER_DATA_URL, ".")), CE2.get(CE_USER_DATA_URL, function(e) {
            CE2.data = CE2.parseJSON(e.responseText), CE2.userDataToJs && CE2.userDataToJs(CE2.data), CE2.loadSamplingData(function() {
                CE2.userMain()
            })
        }))
    }, CE2.canRun = function() {
        try {
            localStorage.setItem("ce_localstorage_test", ""), localStorage.removeItem("ce_localstorage_test", "")
        } catch (e) {
            return "localStorage not available"
        }
        var e = "ce_cookie_check";
        return CE2.writeCookie(e, "cookie"), ~document.cookie.indexOf(e) ? (CE2.deleteCookie(e), !0) : "cookies not available"
    }, CE2.hasFeature = function(e) {
        if (!CE2.data || !CE2.data.features) return !1;
        for (var t = 0, n = CE2.data.features; t < n.length; t++)
            if (n[t] === e) return !0;
        return !1
    }, CE2.notTrackingCallback = function(e) {
        try {
            CE2.debug(e), "function" == typeof CE_NOT_TRACKING && window.CE_NOT_TRACKING(e)
        } catch (e) {
            CE2.debug("Not tracking callback failure: ".concat(e))
        }
    }, CE2.userMain = function() {
        try {
            var c, e = CE2.data,
                u = e.snapshots,
                t = e.sites,
                n = CE2.data.global_ip_block_list,
                r = CE2.canRun();
            if (!0 !== r) return void CE2.notTrackingCallback("Not tracking: can't run - ".concat(r));
            var o = CE2.isBot();
            if (o) return void CE2.notTrackingCallback("Not tracking: bot detected - ".concat(o));
            if (CE2.dontTrack(CE2.w, CE2.d, CE2.n, CE2.ie)) return void CE2.notTrackingCallback("Not tracking: doNotTrack detected.");
            CE2.testID = CE2.testVersion = null, CE2.initPageEdits && CE2.initPageEdits(), CE2.initFlowTracking && (c = CE2.initFlowTracking()), CE2.showWebsite(), "undefined" == typeof CE2 && (CE2 = {});

            function i(e) {
                return parseInt(e.replace(/./g, function(e) {
                    return s[e]
                }), 36)
            }

            function a(e) {
                for (var t, n = "", r = /(![^:\/a-z])|([^:\/a-z]{2})|(:[^:\/a-z]{3})|(\/[^:\/a-z]{4})/gi, o = String.fromCharCode; null != (t = r.exec(e));) t[1] || t[2] ? n += o(i(t[0])) : t[3] ? n += o(i(t[3].substr(1))) : t[4] && (n += o(i(t[4].substr(1))));
                return n
            }
            var l, s = function() {
                for (var e = "!$%&()*+,-.0123456789;<=>?@[]^_`{|}~", t = {}, n = 0; n < 36; n++) t[e[0 | n] || ""] = n.toString(36);
                return t
            }();
            "string" == typeof u && (u = CE2.parseJSON(a(u))), "string" == typeof t && (t = CE2.parseJSON(a(t))), n = a(n), (l = t ? CE2.getCurrentSite(t) : l) ? (!CE2.data.sites_sampling && CE2.data.samplingData && CE2.data.samplingData.sites_sampling && (CE2.data.sites_sampling = JSON.parse(a(CE2.data.samplingData.sites_sampling))), CE2.clock = new CE2.Clock, CE2.clock.onReady(function() {
                new CE2.IPBlockList(n).blocked(CE2.clock.getIP()) ? CE2.debug("IP Blocked: ".concat(CE2.clock.getIP())) : (CE2.monitor = function() {
                    try {
                        var e, t = CE2.w.location.href,
                            n = c && c.flow && c.flow.trackByVariant && c.variant.variantId,
                            r = "string" == typeof CE_SNAPSHOT_NAME && CE_SNAPSHOT_NAME.trim(),
                            o = CE2.w.gaData,
                            i = !1,
                            a = CE2.monitorSession,
                            s = CE2.monitorSnapshot;
                        if (CE2.monitorPageUrl == t && CE2.monitorVariantId == n && CE2.monitorGaData == CE2.JSON.stringify(o) && CE2.monitorCESnapshotName == r) return;
                        if (CE2.monitorPageUrl !== t && (i = !0), u && u.length || CE2.debug("No active snapshots to evaluate, or user is above snapshots quota."), CE2.monitorPageUrl = t, CE2.monitorVariantId = n, CE2.monitorGaData = CE2.JSON.stringify(o), CE2.monitorCESnapshotName = r, CE2.logHistoryEnabled = !0, i && (a = CE2.userSessionMatching(l)), (s = u && u.length && !(s = CE2.userSnapshotMatching(u, t, r, n, o)) && r ? CE2.userSnapshotMatching(u, t, null, n, o) : s) && (CE2.debug("Snapshot ".concat(s.id, " selected")), CE2.scriptCheckSelectedSnapshot = s.id), CE2.hasFeature("v11_session_logs") && a && a.isNew && (e = CE2.logHistory.map(function(e) {
                                return "".concat(a.id, ": ").concat(e)
                            }), CE2.post.send("".concat(CE2.data.v11_tracking_dest, "/logs"), e.join("\n"), {
                                sendBeacon: !0
                            })), CE2.logHistoryEnabled = !1, CE2.logHistory = [], a === CE2.monitorSession && s === CE2.monitorSnapshot) return;
                        CE2.monitorSession = a, CE2.monitorSnapshot = s, a ? CE2.loadSessionTrackingScript(function() {
                            CE2.startTracking(s, l, a, i)
                        }) : s ? CE2.loadTrackingScript(function() {
                            CE2.startTracking(s, l, a, i)
                        }) : CE2.tracker && CE2.resetTracker()
                    } catch (e) {
                        CE2.debug(e)
                    }
                }, CE2.startMonitor())
            })) : CE2.notTrackingCallback("No site match.")
        } catch (e) {
            CE2.debug(e)
        } finally {
            CE2.showWebsite()
        }
    }, CE2.resetTracker = function() {
        CE2.testID = CE2.testVersion = CE2.scriptCheckMatchingSnapshots = CE2.scriptCheckSelectedSnapshot = null, CE2.tracker && (CE2.tracker.cleanup(), delete CE2.tracker, CE2.debug("Tracker reset"))
    }, CE2.userMainTestMode = function() {
        CE2.showWebsite();
        CE2.clock = new CE2.Clock, CE2.clock.onReady(function() {
            CE2.loadSessionTrackingScript(function() {
                CE2.startTestModeTracking()
            })
        })
    }, CE2.startMonitor = function() {
        CE2.debug("Starting Monitor"), CE2.monitor && !CE2.isBot() && (CE2.monitor(), CE2.autoStart && (CE2.monitorInterval = setInterval(CE2.monitor, 1e3)))
    }, CE2.showWebsite = function() {
        CE2.bh && (CE2.bh.parentElement.removeChild(CE2.bh), CE2.bh = null)
    }, CE2.autoStart && CE2.onDOMReady(CE2.userDataMain), "function" == typeof CE_READY ? CE2.onDOMReady(CE_READY) : "object" === ("undefined" == typeof CE_READY ? "undefined" : CE2BH.typeof(CE_READY)) && CE2.onDOMReady(function() {
        CE2.each(CE_READY, function(e) {
            if ("function" == typeof e) try {
                e()
            } catch (e) {
                CE2.debug("CE2.userMain error:"), CE2.debug(e)
            }
        })
    }), "undefined" == typeof CE2 && (CE2 = {}), CE2.loadHUD = function() {
        try {
            return CE2.loadedHUD ? !1 : (CE2._addHUDLoaderScript(), CE2.loadedHUD = !0, window.localStorage.setItem("powerup", "true"), !0)
        } catch (e) {
            return CE2.debug(e), !1
        }
    }, CE2._addHUDLoaderScript = function() {
        function t(e) {
            if ("string" == typeof CE2_HUD_SCRIPT_URL) t = CE2_HUD_SCRIPT_URL;
            else {
                if (!e) return void CE2.debug("Unable to determine HUD script URL. No version given.");
                t = "".concat(CE2.data.hud.script_url, "/").concat(e, "/index.js")
            }
            e = document.createElement("script");
            e.src = t, e.defer = !0;
            var t = document.getElementsByTagName("script")[0];
            t.parentNode.insertBefore(e, t)
        }
        CE2.data.hud.version ? t(CE2.data.hud.version) : CE2.get("".concat(CE2.data.hud.host, "/versions/latest"), function(e) {
            e.status < 200 || 300 <= e.status ? CE2.debug("Error loading latest HUD version: ".concat(e.status, " ").concat(e.statusText)) : t(e.responseText.trim())
        })
    }, CE2.checkHUDLocalStorage = function() {
        try {
            return void 0 === window.localStorage ? !1 : void 0 !== window.localStorage.getItem && (!!window.localStorage.getItem("powerup") && (CE2.loadHUD(), !0))
        } catch (e) {
            return CE2.debug(e), !1
        }
    }, CE2.checkHUDHashFragment = function() {
        try {
            return document.location.hash.indexOf("#powerup") && document.location.hash.indexOf("#ce-") ? !1 : (CE2.loadHUD(), !0)
        } catch (e) {
            return CE2.debug(e), !1
        }
    }, CE2.data && CE2.data.hud) try {
    CE2.checkHUDLocalStorage(), window.addEventListener("hashchange", CE2.checkHUDHashFragment), CE2.checkHUDHashFragment()
} catch (e) {
    CE2.debug(e)
}