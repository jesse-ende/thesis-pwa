/*! Copyright © 2015, 2020, Oracle and/or its affiliates. All rights reserved. */
/*! mmpackage v1.25 */
/*! jQuery | Copyright JS Foundation and other contributors, https://js.foundation */
/*v1.25.0.1*/
'use strict';
(function() {
    function Z(r, V, W) {
        Z = void 0;
        (new Function("scriptName", "applier", r))(V, W)
    }
    var r = window.console || {
        log: function() {},
        error: function() {}
    };
    (function() {
        function U(a, h, l) {
            var m = [],
                w;
            for (w in a) a.hasOwnProperty(w) && (l ? m = m.concat(h(a[w])) : m.push(h(a[w])));
            return m
        }

        function V(a, h) {
            var l = [],
                m;
            for (m in a) a.hasOwnProperty(m) && h(a[m]) && l.push(a[m]);
            return l
        }

        function W(a, h) {
            var l = void 0,
                m;
            for (m in a)
                if (a.hasOwnProperty(m) && !0 === h(a[m])) {
                    l = a[m];
                    break
                }
            return l
        }

        function aa(a, h) {
            if (E(h)) return !!W(a, h);
            for (var l =
                    a.length; l--;)
                if (a[l] === h) return !0;
            return !1
        }

        function J(a, h, l) {
            l = l || 0;
            for (var m = a.length; l < m; l++)
                if (a[l] === h || E(h) && h(a[l])) return l;
            return -1
        }

        function E(a) {
            return "function" === typeof a
        }

        function K(a) {
            return Array.isArray ? Array.isArray(a) : "[object Array]" === Object.prototype.toString.call(a)
        }

        function F(a) {
            return "string" === typeof a
        }

        function y(a) {
            return "undefined" === typeof a
        }

        function X(a) {
            return "number" === typeof a
        }

        function T(a) {
            if (null === a || "object" !== typeof a) return a;
            var h = a.constructor(),
                l;
            for (l in a) a.hasOwnProperty(l) &&
                (h[l] = T(a[l]));
            return h
        }

        function P(a, h) {
            a = y(a) ? {} : a;
            h = y(h) ? {} : h;
            if (null === h || "object" !== typeof h) return h;
            var l = {},
                m;
            if ("object" === typeof a)
                for (m in a) a.hasOwnProperty(m) && (l[m] = a[m]);
            for (m in h) h.hasOwnProperty(m) && (l[m] ? K(l[m]) && K(h[m]) ? l[m] = l[m].concat(h[m]) : l[m] = P(l[m], h[m]) : l[m] = h[m]);
            return l
        }

        function z(a) {
            return y(a) || null === a ? !0 : 1 > a.replace(/\s/g, "").length
        }

        function da(a) {
            return "mm_style" + (a ? "_" + a : "") + ("_" + ea++)
        }

        function H(a) {
            return a.replace(/^\s+|\s+$/gm, "")
        }

        function B() {
            var a = arguments,
                h = {},
                l = 1;
            F(a[1]) || (h = a[1], l = 2);
            for (var m = a[0], a = K(a[2]) ? a[2] : D(a, l), l = 0; l < a.length; l++) h[a[l]] = function(a) {
                return function() {
                    return a.apply(h, arguments)
                }
            }(m[a[l]]);
            return h
        }

        function Y() {
            function a(a) {
                var h, m = "";
                for (h = 0; h < a; h++) m += (16 * Math.random() % 16 | 0).toString(16);
                return m
            }
            return a(8) + "-" + a(4) + "-4" + a(3) + "-" + a(4) + "-" + a(12)
        }

        function N(a, h) {
            for (var l in a) a.hasOwnProperty(l) && h(a[l], l)
        }

        function fa(a) {
            return function() {
                try {
                    a()
                } catch (h) {
                    r.log(h.message || h)
                }
            }
        }

        function ba(a) {
            var h = a.getAttribute("href"),
                l = a.getAttribute("target");
            return {
                hrefHasJS: /(^| )javascript:/i.test(h),
                sameSite: a.hostname === window.location.hostname,
                notRequiresReload: /^#|(^| )javascript: ?void/i.test(h) || !a.hasAttribute("href"),
                target: l
            }
        }

        function ca(a) {
            for (; a && "a" !== a.tagName.toLowerCase();) a = a.parentElement;
            return a
        }

        function D(a, h, l) {
            l = y(l) ? a.length : l;
            h = h || 0;
            if (K(a)) return Array.prototype.slice.call(a, h, l);
            var m = [],
                w = (l || 0) - h;
            if (0 < w)
                for (m = Array(w), l = 0; l < w; l++) m[l] = a[h + l];
            return m
        }

        function ga() {
            return function() {}
        }

        function G(a) {
            a =
                a || {};
            var h = "";
            y(a.opacity) || (a.filter = "alpha(opacity=" + 100 * a.opacity + ")");
            N(a, function(a, m) {
                h += m + ": " + a + " !important; "
            });
            return H(h)
        }

        function ha(a, h, l) {
            function m(b) {
                if (!v[b]) {
                    var f = h[b],
                        e = {};
                    try {
                        f(e, w.requireClass, w.require), e.exports = w.options.isDlpEnabled ? e.dlp || e.exports : e.basic || e.exports
                    } catch (A) {
                        r.log("ERROR: " + A.message + " in module " + b)
                    }
                    k[b] && (e.exports = e.exports.extend(k[b]));
                    v[b] = e
                }
                return v[b]
            }
            var w = this,
                v, d;
            w.options = l || {};
            var k = w.options.moduleExtensions || {};
            this.reset = function(b) {
                v = {};
                d = b || {}
            };
            w.reset(a);
            this.require = function(b, f) {
                m(b);
                var e = v[b];
                return e && e.config && e.config.singleton ? (d[b] || (d[b] = new e.exports(w.options)), d[b]) : new e.exports(f)
            };
            this.requireClass = function(b) {
                m(b);
                return v[b].exports
            };
            this.addModule = function(b, f) {
                h[b] = f
            }
        }
        var ia = Z,
            ea = 1,
            ja = {
                CGApi: function(a, h, l) {
                    a.config = {
                        singleton: !0
                    };
                    a.exports = function() {
                        function a(b, f, e, d) {
                            var a = k.getParam("uv", d) || {};
                            b = H(b);
                            a[b] = a[b] || [];
                            if (void 0 === f) f = 1;
                            else if ("" === f || isNaN(f)) f = 0, e = "NaN";
                            a[b].push(f + (e ? "," + encodeURIComponent(e) :
                                ""));
                            k.setParam("uv", a, d)
                        }

                        function h(b, f, e, d) {
                            var a = k.getParam("uat", e) || {};
                            a[H(b)] = H(f + "");
                            k.setParam("uat", a, e, d)
                        }

                        function v(b, f) {
                            var e = k.getParam("rul", f) || [];
                            b = U(b, function(b) {
                                return encodeURIComponent(y(b) ? "" : b)
                            }).join(",") + ";";
                            e.push(b);
                            k.setParam("rul", e, f)
                        }

                        function d(b, f, e, d) {
                            var a = k.getParam("ids", e) || {};
                            a[b + ""] = f + "";
                            k.setParam("ids", a, e, d)
                        }
                        var k = l("Engine");
                        this.setAction = function(b, f, e) {
                            a(b, f, e, k.storeStrategy.request)
                        };
                        this.postAction = function(b, f, e) {
                            a(b, f, e, k.storeStrategy.deferredRequest)
                        };
                        this.setAttr = function(b, f) {
                            h(b, f, k.storeStrategy.request)
                        };
                        this.storeAttr = function(b, f, e) {
                            h(b, f, k.storeStrategy.persistent, e)
                        };
                        this.getAttr = function(b) {
                            return (k.getParam("uat", k.storeStrategy.persistent) || {})[H(b)]
                        };
                        this.removeAttr = function(b) {
                            var f = k.getParam("uat", k.storeStrategy.persistent) || {};
                            delete f[H(b)];
                            k.setParam("uat", f, k.storeStrategy.persistent, 365)
                        };
                        this.setId = function(b, f) {
                            d(b, f, k.storeStrategy.request)
                        };
                        this.storeId = function(b, f, e) {
                            d(b, f, k.storeStrategy.persistent, e)
                        };
                        this.removeId =
                            function(b) {
                                var f = k.getParam("ids", k.storeStrategy.persistent) || {};
                                delete f[b + ""];
                                k.setParam("ids", f, k.storeStrategy.persistent, 365)
                            };
                        this.hasActions = function() {
                            var b = k.getParam("uv", k.storeStrategy.request) || {},
                                f = k.getParam("uv", k.storeStrategy.deferredRequest) || {};
                            return b && "{}" !== JSON.stringify(b) || f && "{}" !== JSON.stringify(f)
                        };
                        this.request = function(b, f) {
                            k.setParam("pageid", b.pageId, k.storeStrategy.request);
                            b.pagePrefix && k.setParam("pp", b.pagePrefix, k.storeStrategy.request);
                            k.CGRequest(f)
                        };
                        this.setData =
                            function(b, f, e) {
                                k.setData(b, f, e)
                            };
                        this.getData = function(b) {
                            return k.getData(b)
                        };
                        this.clearData = function(b) {
                            k.clearData(b)
                        };
                        this.getServerAttrs = function() {
                            return k.getServerAttrs()
                        };
                        this.setCategoryFilter = function(b, f, e) {
                            v({
                                categoryId: b,
                                categoryName: f,
                                including: e ? 1 : 0
                            }, k.storeStrategy.request)
                        };
                        this.setProductFilter = function(b, f, e) {
                            v({
                                categoryId: b,
                                productId: f,
                                including: e ? 1 : 0,
                                isProduct: 1
                            }, k.storeStrategy.request)
                        };
                        this.setProduct = function(b) {
                            k.setParam("mrp", b, k.storeStrategy.request)
                        }
                    }
                },
                Class: function(a,
                    h, l) {
                    h = function() {};
                    h.extend = function(a) {
                        var m = function() {
                                m.superclass.constructor.apply(this, arguments);
                                var d = {};
                                N(this, function(k, b) {
                                    d[b] = k
                                });
                                this.base = d;
                                return a.apply(this, arguments)
                            },
                            v = function() {};
                        v.prototype = this.prototype;
                        m.prototype = new v;
                        m.prototype.constructor = m;
                        m.superclass = this.prototype;
                        m.implementation = a;
                        m.extend = this.extend;
                        m.inherit = this.inherit;
                        return m
                    };
                    h.inherit = function(a) {
                        (a.implementation || a).call(this.prototype)
                    };
                    a.exports = h
                },
                Cookies: function(a, h, l) {
                    a.config = {
                        singleton: !0
                    };
                    a.exports = function(a) {
                        var m = this,
                            v = a.cookieDomain,
                            d = a.isBaseStorageSecure,
                            k = encodeURIComponent,
                            b = decodeURIComponent;
                        this.set = function(b, e, a) {
                            if (!b || !F(b)) return r.error("You can't use cookies.set without specifying cookie name."), this;
                            a = a || {};
                            y(a.secure) && !y(d) && (a.secure = d, y(a.sameSite) && d && (a.sameSite = "none"));
                            var f = ";domain=" + (a.domain || v),
                                p = ";path=" + (a.path || "/");
                            if (a.expires) {
                                var m = a.expires;
                                var h = new Date;
                                h.setTime(h.getTime() + 864E5 * m);
                                m = ";expires=" + h.toGMTString()
                            } else m = "";
                            h = a.secure ? ";secure" :
                                "";
                            a = a.sameSite ? ";sameSite=" + a.sameSite : "";
                            document.cookie = k(b) + "=" + k(e) + f + p + m + h + a;
                            return this
                        };
                        this.remove = function(b, e) {
                            if (!b || !F(b)) return r.error("You can't use cookies.remove without specifying cookie name."), this;
                            e || (e = {});
                            e.expires = -1;
                            var f = this.get(b);
                            y(f) || this.set(b, "", e);
                            return this
                        };
                        this.get = function(f) {
                            if (!f || !F(f)) return r.error("You can't use cookies.get without specifying cookie name."), this;
                            f = new RegExp("(?:^|; )" + k(f).replace(/([.$?*|{}()\[\]\\\/+^])/g, "\\$1") + "((;|$)|(=([^;]*)))");
                            return (f = document.cookie.match(f)) ? b(f[4] || "") : void 0
                        };
                        this.getWrapper = function() {
                            return B(m, "get", "set", "remove")
                        }
                    }
                },
                Events: function(a, h, l) {
                    a.config = {
                        singleton: !1
                    };
                    h = h("Class").extend(function() {
                        function a(b, f) {
                            b = b.split(".");
                            if (1 === b.length) var e = b[0];
                            else if (2 === b.length) {
                                e = b[0];
                                if (0 === e.length || -1 !== e.indexOf("*")) return !1;
                                e = b[1]
                            } else return !1;
                            if (!e.length) return !1;
                            if (-1 !== e.indexOf("*"))
                                if (f) {
                                    if ("*" !== e) return !1
                                } else return !1;
                            return b
                        }

                        function h(b, f, e, a) {
                            k[b] = {
                                event_data: f,
                                callback: !0 === a ? e : void 0
                            };
                            if (d[b]) {
                                b = d[b];
                                for (a = 0; a < b.length; a++) b[a].call(v, f);
                                E(e) && e()
                            }
                        }
                        var v = this,
                            d = {},
                            k = {};
                        this.on = function(b, f, e) {
                            if (!F(b)) return r.log("eventName is incorrect"), this;
                            if (!a(b, !0)) return r.error("'" + b + "' is incorrect for On"), this;
                            if (e && (e = k[b])) {
                                try {
                                    f.apply({}, [e.event_data])
                                } catch (A) {}
                                e.callback && e.callback()
                            }
                            d[b] = d[b] || [];
                            d[b].push(f);
                            return this
                        };
                        this.off = function(b, f) {
                            if (!F(b)) return r.log("eventName is incorrect"), this;
                            d[b] = d[b] || [];
                            for (var e = d[b].length; e--;) f == d[b][e] && d[b].splice(e, 1);
                            return this
                        };
                        this.trigger = function(b, f, e, d) {
                            if (!F(b)) return r.log("eventName is incorrect"), this;
                            var k = a(b, !1);
                            if (!k) return r.error("'" + b + "' is incorrect for Trigger"), this;
                            h(b, f, e, d);
                            2 == k.length && h(k[0] + ".*", f, e, d);
                            return this
                        };
                        this.getWrapper = function() {
                            return B(v, {}, "on", "off", "trigger")
                        }
                    });
                    a.exports = h
                },
                EventsSite: function(a, h, l) {
                    a.config = {
                        singleton: !1
                    };
                    var m = h("Events").extend(function() {
                        var a = this;
                        this.domReady = function() {
                            var a = !1,
                                d = [],
                                k = function() {
                                    document.addEventListener ? (document.removeEventListener("DOMContentLoaded",
                                        b, !1), window.removeEventListener("load", b, !1)) : (document.detachEvent("onreadystatechange", b), window.detachEvent("onload", b))
                                },
                                b = function() {
                                    if (document.addEventListener || "load" === event.type || "complete" === document.readyState) k(), f()
                                },
                                f = function() {
                                    if (!a) {
                                        if (!document.body) return setTimeout(f);
                                        a = !0;
                                        for (var b = 0; b < d.length; b++) try {
                                            (0, d[b])()
                                        } catch (t) {
                                            r.log(t)
                                        }
                                    }
                                };
                            if ("complete" === document.readyState) f();
                            else if (document.addEventListener) document.addEventListener("DOMContentLoaded", b, !1), window.addEventListener("load",
                                b, !1);
                            else {
                                document.attachEvent("onreadystatechange", b);
                                window.attachEvent("onload", b);
                                var e = !1;
                                try {
                                    e = null == window.frameElement && document.documentElement
                                } catch (A) {}
                                e && e.doScroll && function t() {
                                    if (!a) {
                                        try {
                                            e.doScroll("left")
                                        } catch (p) {
                                            return setTimeout(t, 50)
                                        }
                                        k();
                                        f()
                                    }
                                }()
                            }
                            return function(b) {
                                b = b || function() {};
                                if (a) {
                                    try {
                                        b()
                                    } catch (t) {
                                        r.log(t)
                                    }
                                    return !0
                                }
                                d.push(b);
                                return !1
                            }
                        }();
                        this.getWrapper = function() {
                            return B(a, a.base.getWrapper(), "domReady")
                        }
                    });
                    h = h("Events").extend(function() {
                        var a = this,
                            m = l("Dlp");
                        this.domReady =
                            function(a) {
                                return m.parentReady(a)
                            };
                        this.getWrapper = function() {
                            return B(a, a.base.getWrapper(), "domReady")
                        }
                    });
                    a.basic = m;
                    a.dlp = h
                },
                EventsCampaign: function(a, h, l) {
                    a.config = {
                        singleton: !1
                    };
                    h = h("EventsSite").extend(function() {
                        var a = this,
                            h = l("Events");
                        this.variantJsExecuted = function(a) {
                            h.on("variantJsExecuted", function(d) {
                                a(d.elementName, d.variantName)
                            }, !0);
                            return this
                        };
                        this.contentSeen = function(a) {
                            h.on("sendContentSeen", function() {
                                a()
                            }, !0);
                            return this
                        };
                        this.triggerVariantJsExecuted = function(a) {
                            h.trigger("variantJsExecuted",
                                a);
                            return this
                        };
                        this.triggerContentSeen = function() {
                            h.trigger("sendContentSeen");
                            return this
                        };
                        this.getWrapper = function() {
                            return B(a, a.base.getWrapper(), "variantJsExecuted", "contentSeen")
                        }
                    });
                    a.exports = h
                },
                Deferred: function(a, h, l) {
                    function m(a, d) {
                        a = a || {};
                        for (var k in d) d.hasOwnProperty(k) && (a[k] = "object" === typeof d[k] ? m(a[k], d[k]) : d[k]);
                        return a
                    }

                    function w(a) {
                        for (var d = [
                                ["resolve", "done", [], "resolved"],
                                ["reject", "fail", [], "rejected"],
                                ["notify", "progress", []]
                            ], k = "pending", b = {
                                state: function() {
                                    return k
                                },
                                always: function() {
                                    f.done(arguments).fail(arguments);
                                    return this
                                },
                                then: function() {
                                    var e = arguments;
                                    return w(function(a) {
                                        for (var k = 0; k < d.length; k++)(function(g, u) {
                                            f[d[g][1]](function() {
                                                var c = E(u[g]) && u[g].apply(this, arguments);
                                                if (c && E(c.promise)) c.promise().done(a.resolve).fail(a.reject).progress(a.notify);
                                                else a[d[g][0] + "With"](this === b ? a.promise() : this, u[g] ? [c] : arguments)
                                            })
                                        })(k, e);
                                        e = null
                                    }).promise()
                                },
                                promise: function(e) {
                                    return null != e ? m(e, b) : b
                                }
                            }, f = {}, e, h, t = 0; t < d.length; t++)(function(a) {
                            var p = d[a],
                                m = p[2];
                            b[p[1]] = function() {
                                for (var g = 0; g < arguments.length; g++)(function(g) {
                                    E(g) ? k === p[3] ? g.apply(e, h) : m.push(g) : g && g.length && "string" !== typeof g && b[p[1]].apply(this, g)
                                })(arguments[g]);
                                return this
                            };
                            f[p[0]] = function() {
                                f[p[0] + "With"](this === f ? b : this, arguments);
                                return this
                            };
                            f[p[0] + "With"] = function(g, b) {
                                if ("pending" == k)
                                    for (e = g, h = b, p[3] && (k = p[3]); m.length;) m.shift().apply(g, b);
                                return this
                            }
                        })(t);
                        b.promise(f);
                        a && a.call(f, f);
                        return f
                    }
                    a.exports = w
                },
                When: function(a, h, l) {
                    var m = h("Deferred");
                    a.exports = function() {
                        var a =
                            0,
                            h = E(arguments[0]),
                            d = h ? [m()] : arguments,
                            k = Array.prototype.slice.call(d),
                            b = k.length,
                            f = 1 !== b || d[0] && E(d[0].promise) ? b : 0,
                            e = 1 === f ? d[0] : m(),
                            l = function(b, g, u) {
                                return function(c) {
                                    g[b] = this;
                                    u[b] = 1 < arguments.length ? Array.prototype.slice.call(arguments) : c;
                                    u === Q ? e.notifyWith(g, u) : --f || e.resolveWith(g, u)
                                }
                            },
                            t;
                        if (h) {
                            d = arguments;
                            var p = setInterval(function() {
                                d[0]() ? e.resolve() : d[1] && E(d[1]) && d[1]() && e.reject()
                            }, 50);
                            e.always(function() {
                                clearInterval(p)
                            })
                        } else if (1 < b) {
                            var Q = Array(b);
                            h = Array(b);
                            for (t = Array(b); a < b; a++) k[a] &&
                                E(k[a].promise) ? k[a].promise().done(l(a, t, k)).fail(e.reject).progress(l(a, h, Q)) : --f
                        }
                        f || e.resolveWith(t, k);
                        return e.promise()
                    }
                },
                Renderer: function(a, h, l) {
                    a.config = {
                        singleton: !1
                    };
                    var m = 0,
                        w = 0,
                        v = h("Class").extend(function(a) {
                            function b() {
                                q && (clearTimeout(q), q = null);
                                X(c) && (q = setTimeout(function() {
                                    e.showAll()
                                }, c))
                            }

                            function f(c) {
                                if (c = (c ? (c.Name || c) + "" : "").toLowerCase()) {
                                    var n = a.getElement(c) || {},
                                        g = n.Data;
                                    if (g)
                                        for (var b = "", u = "", e = 0; e < g.length; e++) "Css" === g[e].Type ? b = g[e].Data : "Html" === g[e].Type && "" !== H(g[e].Data) ?
                                            u = g[e].Data : "Script" === g[e].Type && (v.runElementScript(a, c, {
                                                html: u,
                                                css: b
                                            }, g[e].Data), a.events.triggerVariantJsExecuted({
                                                elementName: n.Name ? n.Name : "",
                                                variantName: n.VariantName ? n.VariantName : ""
                                            }), u = b = "")
                                } else r.log("renderElement should receive element or elementName")
                            }
                            var e = this,
                                d = h("When"),
                                k = h("Deferred"),
                                p = l("CGApi"),
                                v = l("Engine"),
                                I = l("Dom"),
                                g = {},
                                u = w++,
                                c = 7E3,
                                q;
                            this.hide = function(c, n) {
                                if (!c) return r.log("You can't use renderer.hide without params"), this; - 1 === c.indexOf("{") && (c += "{position:relative;left:-10000px;top:-10000px;}");
                                n = (n || "gen_" + m++) + "_" + u;
                                g[n] = !0;
                                I.addCss(c, n);
                                b();
                                return this
                            };
                            this.show = function(c) {
                                if (!c) return r.log("You can't use renderer.show without params"), this;
                                var n = c + "_" + u;
                                if (!g[n]) return r.log("ID (" + c + ") you try to show is not found"), this;
                                delete g[n];
                                I.removeCss(n);
                                return this
                            };
                            this.showAll = function() {
                                var c = [];
                                N(g, function(n, g) {
                                    c.push(g)
                                });
                                I.removeMultiCss(c);
                                g = {};
                                q && (clearTimeout(q), q = null);
                                return this
                            };
                            this.unhideAfter = function(g) {
                                "never" === g || X(g) && 0 <= g ? (c = g, b()) : r.log('You can use renderer.unhideAfter with number greater 0 or "never" string only.');
                                return this
                            };
                            this.getContent = function(c) {
                                var n = k();
                                c = {
                                    pageId: c || (a.getPagePrefix() ? "" : a.getName()),
                                    pagePrefix: a.getPagePrefix()
                                };
                                p.request(c, function(c) {
                                    c ? n.resolve() : n.reject()
                                });
                                return n.promise()
                            };
                            this.runVariantJs = function(c) {
                                if (0 < arguments.length) f(c);
                                else
                                    for (var n = a.getElements(), g = 0; g < n.length; g++) f(n[g]);
                                return this
                            };
                            this.waitUntilDom = function(c) {
                                return d(c, v.events.domReady)
                            };
                            this.when = function() {
                                return d.apply(e, arguments)
                            }
                        }),
                        d = v.extend(function(a) {
                            var b = h("When"),
                                f = l("Engine");
                            this.waitForElement =
                                function(e) {
                                    return b(function() {
                                        return null != document.querySelector(e)
                                    }, f.events.domReady)
                                }
                        }),
                        v = v.extend(function(a) {
                            var b = h("When"),
                                f = h("Deferred"),
                                e = l("Engine"),
                                d = l("Dlp");
                            this.waitForElement = function(a) {
                                var k = new f,
                                    h = !1,
                                    m = function(g) {
                                        h = g
                                    };
                                b(function() {
                                    d.checkNodeExist(a).done(m);
                                    return h
                                }, e.events.domReady).done(function() {
                                    k.resolve()
                                }).fail(function() {
                                    d.checkNodeExist(a).done(m).then(function(g) {
                                        g ? k.resolve() : k.reject()
                                    }, function() {
                                        k.reject()
                                    })
                                });
                                return k.promise()
                            }
                        });
                    a.dlp = v;
                    a.basic = d
                },
                Campaign: function(a,
                    h, l) {
                    var m = h("Element");
                    a.exports = function(a) {
                        function h(g) {
                            return function(b) {
                                return b.Name === g
                            }
                        }
                        var d = this,
                            k = l("Site"),
                            b = l("Action"),
                            f = a.Name,
                            e = a.PagePrefix,
                            A = l("BaseStorage", {
                                namespace: f
                            }),
                            t = {},
                            p = U(a.Elements, function(g) {
                                return new m(g)
                            }),
                            w = a.Recommendations,
                            I = !1;
                        this.sendContentSeen = function() {
                            I || (b.send(a.CSName), d.events.triggerContentSeen(), I = !0)
                        };
                        this.updateData = function(g) {
                            for (var b = 0; b < g.Elements.length; b++) {
                                var c = J(p, h(g.Elements[b].Name));
                                0 <= c ? p[c] = new m(g.Elements[b]) : p.push(new m(g.Elements[b]))
                            }
                            w =
                                g.Recommendations
                        };
                        this.getElements = function() {
                            return p
                        };
                        this.getRecommendations = function() {
                            return w
                        };
                        this.getExperience = function() {
                            var g = k.getPageExperiences()[f],
                                b = {},
                                c;
                            for (c in g) g.hasOwnProperty(c) && (b[c] = g[c]);
                            return b
                        };
                        this.getElement = function(g) {
                            g || r.log("You can't use campaign.getElement without params");
                            g = g.toLowerCase();
                            return W(p, h(g)) || null
                        };
                        this.getStyles = function(g) {
                            return U(p, function(b) {
                                return b.getStyles(g)
                            }, !0)
                        };
                        this.isDefault = function() {
                            if (!p || 0 == p.length) throw Error("There is no content for campaign " +
                                f + ".");
                            for (var g = !0, b = 0; b < p.length; b++) g = g && "Default" === p[b].VariantName;
                            return g
                        };
                        this.getName = function() {
                            return f
                        };
                        this.getPagePrefix = function() {
                            return e
                        };
                        this.setData = function(g, b, c) {
                            A.set(g, b, c)
                        };
                        this.getData = function(g) {
                            return A.get(g)
                        };
                        this.clearData = function(g) {
                            A.set(g, null, -1)
                        };
                        this.events = l("EventsCampaign");
                        this.getContext = function() {
                            var g = {};
                            g.scope = t;
                            g.isDefault = function() {
                                return d.isDefault()
                            };
                            g.getElements = function() {
                                for (var g = {}, c = 0; c < p.length; c++) g[p[c].Name] = p[c].clone();
                                return g
                            };
                            g.getElement = function(g) {
                                return (g = d.getElement(g)) ? g.clone() : g
                            };
                            g.getRecommendations = function() {
                                return U(w, T)
                            };
                            g.getStyles = function(g) {
                                return d.getStyles(g)
                            };
                            g.getExperience = function() {
                                return d.getExperience()
                            };
                            g.getName = function() {
                                return d.getName()
                            };
                            g.getPagePrefix = function() {
                                return d.getPagePrefix()
                            };
                            g.events = d.events;
                            g.setData = function(g, c, b) {
                                return d.setData(g, c, b)
                            };
                            g.getData = function(g) {
                                return d.getData(g)
                            };
                            g.clearData = function(g) {
                                return d.clearData(g)
                            };
                            g.sendContentSeen = function() {
                                d.getElements() &&
                                    d.getElements().length && d.sendContentSeen()
                            };
                            return g
                        }
                    }
                },
                Element: function(a, h, l) {
                    function m(a) {
                        var h = this;
                        h.Name = a.Name;
                        h.HTMLId = a.HTMLId;
                        h.Order = a.Order;
                        h.VariantName = a.VariantName;
                        h.Data = T(a.Data);
                        this.getStyles = function(a) {
                            return U(V(h.Data, function(d) {
                                return "Css" === d.Type && (y(a) || d.Attrs.id === a)
                            }), function(a) {
                                return a.Data
                            })
                        };
                        this.clone = function() {
                            return new m(h)
                        }
                    }
                    a.exports = m
                },
                Site: function(a, h, l) {
                    a.config = {
                        singleton: !0
                    };
                    a.exports = function() {
                        var a = this,
                            h = {},
                            l = {};
                        this.getPageExperiences = function() {
                            var a,
                                k, b = {};
                            for (a in l)
                                if (l.hasOwnProperty(a))
                                    for (k in b[a] = {}, l[a]) l[a].hasOwnProperty(k) && (b[a][k] = l[a][k]);
                            return b
                        };
                        this.setPageExperiences = function(a) {
                            var d;
                            for (d in a)
                                if (a.hasOwnProperty(d)) {
                                    var b = a[d];
                                    var f = l[d];
                                    "undefined" === typeof f && (l[d] = {}, f = l[d]);
                                    for (var e in b) b.hasOwnProperty(e) && (f[e] = b[e])
                                }
                            return l
                        };
                        this.getContext = function() {
                            var d = {};
                            d.scope = h;
                            d.getPageExperiences = a.getPageExperiences;
                            return d
                        }
                    }
                },
                Style: function(a, h, l) {
                    a.config = {
                        singleton: !0
                    };
                    h = h("Class").extend(function() {
                        function a() {
                            var b =
                                d.createElement("style");
                            b.type = "text/css";
                            b.media = "screen";
                            b.id = l.htmlId;
                            var a = d.getElementsByTagName("head")[0];
                            a.insertBefore(b, a.lastChild);
                            return b
                        }

                        function h() {
                            var a = "";
                            N(b, function(b) {
                                a += b
                            });
                            return a
                        }
                        var l = this,
                            d = document;
                        l.htmlId = da("mm_cdApiStyleId");
                        var k = a(),
                            b = {};
                        this.set = function(b) {
                            (k = d.getElementById(l.htmlId)) || (k = a());
                            k.styleSheet ? k.styleSheet.cssText = b : k.innerHTML = b
                        };
                        this.add = function(a, e) {
                            if (e) {
                                if (b[e]) {
                                    r.error("Style with specified ID(" + e + ") already exists");
                                    return
                                }
                                b[e] = a
                            } else b.nr =
                                b.nr || "", b.nr += a;
                            l.set(h())
                        };
                        this.remove = function() {
                            N(D(arguments), function(a) {
                                "nr" !== a && b[a] ? delete b[a] : r.error("Could not remove non-existent style " + a + ".")
                            });
                            l.set(h())
                        };
                        this.clear = function() {
                            b = {};
                            l.set(h())
                        }
                    });
                    a.exports = h
                },
                Action: function(a, h, l) {
                    a.config = {
                        singleton: !0
                    };
                    var m = h("Class").extend(function() {
                        var a = this,
                            m = l("CGApi"),
                            d = h("Deferred");
                        this.sendActions = function(d, b, f) {
                            for (var e = !0, k, h, m, l, v = 0; v < d.length; v++) l = d[v].name, m = d[v].value, h = d[v].attribute, e &= k = d[v].postponedAction, k ? a.postpone(l,
                                m, h) : a.set(l, m, h);
                            !e || b ? a.send().then(f) : E(f) && f()
                        };
                        this.send = function(a, b, f) {
                            var e = d();
                            if (0 < arguments.length && a && F(a)) m.setAction(a, b, f);
                            else if (0 !== arguments.length) {
                                r.log("You can't use action.send without setting action name");
                                return
                            }
                            m.hasActions() ? m.request({
                                pageId: "mmevents"
                            }, function(b) {
                                b ? e.resolve() : e.reject()
                            }) : e.resolve();
                            return e.promise()
                        };
                        this.postpone = function(a, b, d) {
                            if (!a || !F(a)) return r.log("You can't use action.postpone without setting action name."), this;
                            m.postAction(a, b, d);
                            return this
                        };
                        this.set = function(a, b, d) {
                            if (!a || !F(a)) return r.log("You can't use action.set without setting action name."), this;
                            m.setAction(a, b, d);
                            return this
                        };
                        this.trackClicks = function(d, b, f) {
                            l("Dom").trackClicks(d, b, f, a.sendActions)
                        };
                        this.getWrapper = function() {
                            return B(a, "send", "postpone", "set", "trackClicks")
                        }
                    });
                    a.exports = m
                },
                Visitor: function(a, h, l) {
                    a.config = {
                        singleton: !0
                    };
                    var m = h("Class").extend(function() {
                            var a = this,
                                d = h("Deferred"),
                                k = l("CGApi");
                            this.setAttr = function(a, d) {
                                k.setAttr(a, d);
                                return this
                            };
                            this.storeAttr =
                                function(a, d) {
                                    k.storeAttr(a, d, 365);
                                    return this
                                };
                            this.getAttr = function(a) {
                                return k.getAttr(a)
                            };
                            this.removeAttr = function(a) {
                                k.removeAttr(a);
                                return this
                            };
                            this.setId = function(a, d) {
                                k.setId(a, d);
                                return this
                            };
                            this.storeId = function(a, d) {
                                k.storeId(a, d, 365);
                                return this
                            };
                            this.removeId = function(a) {
                                k.removeId(a);
                                return this
                            };
                            this.setData = function(a, d, e) {
                                k.setData(a, d, e);
                                return this
                            };
                            this.getData = function(a) {
                                return k.getData(a)
                            };
                            this.clearData = function(a) {
                                return k.clearData(a)
                            };
                            this.requestPage = function(a) {
                                var b =
                                    d();
                                k.request({
                                    pageId: a
                                }, function(a) {
                                    a ? b.resolve() : b.reject()
                                });
                                return b.promise()
                            };
                            this.getServerAttrs = function() {
                                return T(k.getServerAttrs())
                            };
                            this.getWrapper = function() {
                                return B(a, "setAttr", "storeAttr", "getAttr", "removeAttr", "setId", "storeId", "removeId", "setData", "getData", "clearData", "requestPage", "getServerAttrs")
                            }
                        }),
                        w = m.extend(function() {
                            var a = this;
                            this.navigateTo = function(a) {
                                !F(a) || z(a) ? r.log("CD API Visitor Module: You should pass targetUrl as a non-empty String to visitor.navigateTo().") :
                                    (E(window.stop) ? window.stop() : document.execCommand("Stop"), window.location.replace(a))
                            };
                            this.getWrapper = function() {
                                return B(a, a.base.getWrapper(), "navigateTo")
                            }
                        }),
                        m = m.extend(function() {
                            var a = this,
                                d = l("Dlp");
                            this.navigateTo = function(a) {
                                !F(a) || z(a) ? r.log("CD API Visitor Module: You should pass targetUrl as a non-empty String to visitor.navigateTo().") : d.navigateTo(a)
                            };
                            this.getWrapper = function() {
                                return B(a, a.base.getWrapper(), "navigateTo")
                            }
                        });
                    a.basic = w;
                    a.dlp = m
                },
                QuerySelector: function(a, h, l) {
                    a.config = {
                        singleton: !0
                    };
                    h = h("Class").extend(function() {
                        function a(a, d) {
                            for (var e, h = [], k, m = [], g, u, c = /(\s*([+~>])\s*)?(.*?)\:(has|contains|eq)\((\"|\')?(.+?)\5\)|(\s*([+~>])\s*)?(.+)/g; null !== (k = c.exec(a));) k && -1 < k.index && (e = k[2] || k[8] || "", g = k[3] || k[9] || "", u = k[4] || "", k = k[6] || "", m.push({
                                splitter: H(e),
                                selector: H(g),
                                queryFunction: H(u),
                                value: H(k)
                            }));
                            for (g = 0; g < m.length && (a = m[g], h = b.findChildren(h, a, d), 0 !== a.queryFunction.length && (e = f[a.queryFunction.toLowerCase()], h = e(h, a)), 0 !== h.length); g++);
                            return h
                        }

                        function h(a,
                            b) {
                            return (a.matches || a.matchesSelector || a.webkitMatchesSelector || a.mozMatchesSelector || a.msMatchesSelector).call(a, b)
                        }

                        function v(a) {
                            return a && ">" === a ? "direct" : a && "+" === a ? "next" : "querySelector"
                        }

                        function d(a, b, d) {
                            var e = [];
                            a = a.querySelectorAll(d);
                            for (d = 0; d < a.length; d++) k.useZindex(a[d]) && e.push(a[d]);
                            return b = b.concat(D(e))
                        }
                        var k = l("Vcb"),
                            b = this;
                        this.find = function(b, d) {
                            var e = [],
                                f = Object.prototype.toString.call(b);
                            if ("[object Array]" === f || "[object NodeList]" === f || "[object HTMLCollection]" === f) return D(b);
                            if (!F(b)) return [b];
                            b = b.split(",");
                            for (f = 0; f < b.length; f++) e = e.concat(a(H(b[f]), d));
                            return e
                        };
                        var f = {
                            eq: function(a, b) {
                                return 0 < a.length && a[b.value] ? [a[b.value]] : []
                            },
                            contains: function(a, b) {
                                for (var e = D(a), d = e.length - 1; 0 <= d; d--) a = e[d].textContent || e[d].innerText, -1 === a.indexOf(b.value) && e.splice(d, 1);
                                return e
                            },
                            has: function(a, d) {
                                a = D(a);
                                for (var e = a.length - 1; 0 <= e; e--) 0 === b.find(d.value, a[e]).length && a.splice(e, 1);
                                return a
                            }
                        };
                        this.findChildren = function(a, b, f) {
                            var e = [];
                            if ("" === b.selector) return a;
                            if (a.length)
                                for (f =
                                    0; f <= a.length - f; f++) {
                                    var k = a[f],
                                        m, g = [];
                                    var u = b.selector;
                                    for (m = v(b.splitter);
                                        "querySelector" !== m;) {
                                        var c = u.match(/([^ >]+)( \d+)?\s*([>+]?)\s*(.*)/);
                                        u = c[4];
                                        g.push({
                                            selector: c[2] ? c[1] + c[2] : c[1],
                                            findingType: m
                                        });
                                        m = v(c[3])
                                    }
                                    u && g.push({
                                        selector: u,
                                        findingType: m
                                    });
                                    c = g;
                                    m = K(k) ? k : [k];
                                    for (k = 0; k < c.length; k++)
                                        if ("querySelector" === c[k].findingType) {
                                            u = c[k].selector;
                                            for (var g = [], q = 0; q < m.length; q++) g = d(m[q], g, u);
                                            m = g
                                        } else if ("direct" === c[k].findingType) {
                                        u = c[k].selector;
                                        g = [];
                                        for (q = 0; q < m.length; q++)
                                            for (var l = m[q].children,
                                                    n = 0; l && n < l.length; n++) 1 === l[n].nodeType && h(l[n], u) && g.push(l[n]);
                                        m = g
                                    } else if ("next" === c[k].findingType) a: {
                                        u = m;g = c[k].selector;
                                        for (q = 0; q < u.length; q++) {
                                            for (m = u[q].nextSibling; m && 1 !== m.nodeType;) m = m.nextSibling;
                                            if (m && h(m, g)) {
                                                m = [m];
                                                break a
                                            }
                                        }
                                        m = []
                                    }
                                    c = D(m);
                                    e = e.concat(D(c))
                                } else c = d(f || document, [], b.selector), e = D(c);
                            return e
                        };
                        this.isNodeBelongsSelector = function(a, d, f) {
                            a = b.find(a, f);
                            for (f = 0; f < a.length; f++)
                                if (a[f].isEqualNode(d)) return !0;
                            return !1
                        }
                    });
                    a.exports = h
                },
                Dom: function(a, h, l) {
                    a.config = {
                        singleton: !0
                    };
                    var m =
                        h("Class").extend(function() {
                            function a(a, g, b) {
                                return function() {
                                    var n = p.find(g[0]);
                                    if (n.length) return g[0] = n, a.apply(f, g), b(), !0
                                }
                            }

                            function d() {
                                g = setInterval(function() {
                                    for (var a = 0; a < r.length; a++) r[a]() && (r.splice(a, 1), --a);
                                    r.length || clearInterval(g)
                                }, 200);
                                m.registerLoop(g)
                            }

                            function k(a, g) {
                                if (g && !m.isVcbActive) {
                                    var n = t.autoHide(a);
                                    return function() {
                                        t.removeCss(n)
                                    }
                                }
                                return ga()
                            }

                            function b(a, g) {
                                return function() {
                                    for (var n = g && [], b = D(arguments), c = p.find(b[0]), d = 0; d < c.length; d++)
                                        if (c[d] && c[d].tagName) {
                                            b[0] =
                                                c[d];
                                            var e = a.apply(f, b);
                                            g && n.push(e)
                                        }
                                    return n
                                }
                            }
                            var f = this,
                                e = h("Deferred"),
                                m = l("Vcb"),
                                t = l("DomPlain"),
                                p = l("QuerySelector"),
                                w = [],
                                r = [],
                                g, u = "hide resize freeMove changeStyle guidedMove remove bringToFront changeLinkUrl insertImageBannerBelow insertImageBannerAbove insertImageBannerWithin changeImageBanner editHtml insertHtmlAbove insertHtmlBelow insertHtmlWithin makeLink changePicture".split(" "),
                                c = ["addCss", "removeCss", "find"],
                                q = ["addListener", "removeListener", "getNodesAttribute", "setNodesAttribute"];
                            this.loop = function(n, g) {
                                return function() {
                                    var b = arguments[0],
                                        c = D(arguments),
                                        e = p.find(b);
                                    e.length ? (c[0] = e, n.apply(f, c)) : F(b) && (b = k(b, !g), r.length || d(), r.push(a(n, c, b)))
                                }
                            };
                            (function(a, g, c) {
                                g = g || {};
                                N(c, function(n) {
                                    g[n] = f.loop(b(a[n]))
                                })
                            })(t, f, u);
                            B(t, f, c);
                            this.addListener = function(a, g, b) {
                                a = p.find(a);
                                for (var n = 0; n < a.length; n++) {
                                    var c = t.addEvent(a[n], g, b);
                                    w.push({
                                        handler: b,
                                        handlerWrapper: c
                                    })
                                }
                            };
                            this.removeListener = function(a, g, b) {
                                a = p.find(a);
                                for (var n = 0; n < a.length; n++)
                                    for (var c = 0; c < w.length; c++) w[c].handler ===
                                        b && t.removeEvent(a[n], g, w[c].handlerWrapper)
                            };
                            this.trackClicks = f.loop(b(t.trackClicks), !0);
                            this.removeMultiCss = t.removeMultiCss;
                            this.getNodesAttribute = function() {
                                var a = D(arguments);
                                a[0] = p.find(a[0]);
                                var g = new e;
                                g.resolve(b(t.getNodesAttribute, !0).apply(t, a));
                                return g.promise()
                            };
                            var C = f.loop(b(t.setNodesAttribute));
                            this.setNodesAttribute = function(a, g, c, d) {
                                var n = D(arguments);
                                "wait" === d ? C.apply(f, n) : (n[0] = p.find(n[0]), b(t.setNodesAttribute).apply(t, n))
                            };
                            this.getWrapper = function() {
                                var a = B(f, {}, q);
                                B(f,
                                    a, u);
                                B(t, a, c);
                                return a
                            }
                        }),
                        w = h("Class").extend(function() {
                            var a = this,
                                d = l("Dlp"),
                                k = "addCss removeCss hide resize freeMove changeStyle guidedMove remove bringToFront changeLinkUrl insertImageBannerBelow insertImageBannerAbove insertImageBannerWithin changeImageBanner editHtml setNodesAttribute insertHtmlAbove insertHtmlBelow insertHtmlWithin".split(" "),
                                b = ["getNodesAttribute"],
                                f = ["addListener", "removeListener"];
                            this.addListener = function(a, b, f) {
                                d.addListener(a, b, f)
                            };
                            this.removeListener = function(a, b, f) {
                                d.removeListener(a,
                                    b, f)
                            };
                            N(k, function(b) {
                                a[b] = d.proxy("Dom", b)
                            });
                            N(b, function(b) {
                                a[b] = d.proxy("Dom", b, !0)
                            });
                            this.trackClicks = function(a, b, f, k) {
                                d.trackClicks(a, b, f, k)
                            };
                            this.removeMultiCss = d.proxy("Dom", "removeMultiCss");
                            this.getWrapper = function() {
                                var d = B(a, {}, k);
                                B(a, d, b);
                                B(a, d, f);
                                return d
                            }
                        });
                    a.basic = m;
                    a.dlp = w
                },
                DomPlain: function(a, h, l) {
                    a.config = {
                        singleton: !0
                    };
                    h = h("Class").extend(function() {
                        function a(a, b) {
                            return window.getComputedStyle ? window.getComputedStyle(a, null)[b] : a.currentStyle ? a.currentStyle[b] : a.style[b]
                        }

                        function h(a) {
                            d(a,
                                "visibility: hidden !important;")
                        }

                        function v(a) {
                            return a.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "").replace(/<title\b[^<]*(?:(?!<\/title>)<[^<]*)*<\/title>/gi, "").replace(/<link\b[^<]*>/gi, "").replace(/<meta\b[^<]*>/gi, "")
                        }

                        function d(a, b) {
                            var c = (a.style.cssText.replace(/[^;]$/, "$0;") + b).split(";");
                            b = {};
                            for (var g = 0; g < c.length; g++)
                                if (c[g]) {
                                    var d = c[g].split(":");
                                    b[d[0].replace(/\s/g, "")] = d[2] ? d[1] + ":" + d[2] : d[1]
                                }
                            var c = "",
                                n;
                            for (n in b) b.hasOwnProperty(n) && (c += n + ":" + b[n] + "; ");
                            t.setCssText(a,
                                c.replace(/\s$/, ""))
                        }

                        function k(b, e, c) {
                            var g = a(b, "position");
                            e = e ? parseInt(e, 10) : 0;
                            c = c ? parseInt(c, 10) : 0;
                            if ("relative" === g || "absolute" === g || "fixed" === g) {
                                var u = a(b, "left"),
                                    n = a(b, "right");
                                "auto" === u && "auto" !== n ? e = "right: " + (parseInt(n, 10) - e) + "px !important; " : ("auto" === u ? u = e : "relative" === a(b, "position") ? u = parseInt(u, 10) + e : (u = parseInt(b.offsetLeft, 10) + e, e = a(b, "margin-left"), "auto" !== e && (u -= parseInt(e, 10))), e = "left: " + u + "px !important; ");
                                u = a(b, "top");
                                n = a(b, "bottom");
                                "auto" === u && "auto" !== n ? c = "bottom: " +
                                    (parseInt(n, 10) - c) + "px !important; " : ("auto" === u ? u = c : "relative" === a(b, "position") ? u = parseInt(u, 10) + c : (u = parseInt(b.offsetTop, 10) + c, c = a(b, "margin-top"), "auto" !== c && (u -= parseInt(c, 10))), c = "top: " + u + "px !important; ")
                            } else g = "relative", e = "left: " + e + "px !important; ", c = "top: " + c + "px !important; ";
                            d(b, e + c + ("position: " + g + " !important;"))
                        }

                        function b(a, b) {
                            y(b.imageUrl) && y(b.imageSrcset) || "img" !== a.tagName.toLowerCase() || (a.style.visibility = "hidden", y(b.imageUrl) || (a.src = b.imageUrl), y(b.imageSrcset) || (y(b.imageUrl) &&
                                (a.src = a.src), a.setAttribute("srcset", v(b.imageSrcset))), t.addEvent(a, "load", function() {
                                a.style.visibility = ""
                            }));
                            y(b.imageAlt) || a.setAttribute("alt", v(b.imageAlt));
                            y(b.imageTitle) || a.setAttribute("title", v(b.imageTitle))
                        }

                        function f(a, b) {
                            function c(b) {
                                return function() {
                                    g++;
                                    g === b && d(a, "visibility: ''")
                                }
                            }
                            var g = 0;
                            if (!y(b) && (b.image || K(b.sources))) {
                                h(a);
                                for (var e = a.getElementsByTagName("img"), n = e.length, M = 0; M < n; M++) {
                                    var u = e[M];
                                    if (y(b.image) || y(b.image.imageUrl)) u.src = u.src;
                                    t.addEvent(u, "load", c(n));
                                    t.addEvent(u,
                                        "error", c(n))
                                }
                            }
                        }

                        function e(a) {
                            var g = document.createElement("img");
                            b(g, a);
                            if (void 0 !== a.linkUrl) {
                                var c = document.createElement("a");
                                c.setAttribute("href", a.linkUrl);
                                c.appendChild(g)
                            }
                            return c || g
                        }

                        function A(a, b) {
                            var c = ca(b);
                            b = void 0;
                            if (c) {
                                var g = ba(c);
                                if (!(g.sameSite || g.target && "_blank" === g.target)) {
                                    a.originalPreventDefault = a.originalPreventDefault || a.preventDefault;
                                    a.preventedByClientsCode = a.preventedByClientsCode || a.defaultPrevented && !a.preventedByCdApiCode;
                                    a.preventDefault = function() {
                                        a.preventedByClientsCode = !0;
                                        a.originalPreventDefault()
                                    };
                                    a.originalPreventDefault();
                                    a.preventedByCdApiCode = !0;
                                    var d = !1;
                                    b = function() {
                                        var b = c.getAttribute("href");
                                        d || a.preventedByClientsCode || (g.hrefHasJS ? (new Function(b)).call(window) : g.target ? window.open(b ? c.href : window.location.href, g.target) : g.notRequiresReload || window.setTimeout(function() {
                                            window.location.assign(c.href)
                                        }, 0), d = !0)
                                    };
                                    window.setTimeout(b, 2E3)
                                }
                            }
                            return b
                        }
                        var t = this,
                            p = l("Vcb"),
                            Q = l("Style"),
                            I = l("QuerySelector");
                        this.setCssText = function(a, b) {
                            a.style.cssText = b
                        };
                        this.addCss = function(a, b) {
                            if (!K(a) && !F(a)) return r.log("You try call dom.addCss with wrong arguments."), this;
                            0 === a.length && r.log("WARNING: You add empty css.");
                            a.join && (a = a.join("\n"));
                            Q.add(a, b);
                            return this
                        };
                        this.removeCss = function(a) {
                            if (!a) return r.log("You can't use dom.removeCss without params"), this;
                            Q.remove(a);
                            return this
                        };
                        this.removeMultiCss = function(a) {
                            Q.remove.apply(Q, a);
                            return this
                        };
                        this.getStyle = a;
                        this.find = I.find;
                        this.updateElementStyle = d;
                        this.addEvent = function(a, b, c) {
                            var g = function(b) {
                                b =
                                    b || window.event;
                                !b.target && b.srcElement && (b.target = b.srcElement);
                                return c.call(a, b)
                            };
                            a.addEventListener ? a.addEventListener(b, g, !1) : a.attachEvent && a.attachEvent("on" + b, g);
                            return g
                        };
                        this.removeEvent = function(a, b, c) {
                            a.removeEventListener ? a.removeEventListener(b, c) : a.detachEvent && a.detachEvent("on" + b, c)
                        };
                        this.addClass = function(a, b) {
                            b = H(b);
                            var c = H(a.getAttribute("class") || "");
                            ~c.indexOf(b) || a.setAttribute("class", H(c ? c + " " + b : b))
                        };
                        this.hide = h;
                        this.show = function(a) {
                            d(a, "visibility: visible !important;")
                        };
                        this.resize = function(a, b, c, e, f) {
                            b = parseInt(b, 10);
                            c = parseInt(c, 10);
                            d(a, "width: " + b + "px !important; height: " + c + "px !important;");
                            (e || f) && k(a, e, f)
                        };
                        this.freeMove = k;
                        this.changeStyle = d;
                        this.guidedMove = function(a, b) {
                            if (0 <= b) {
                                var c = a.parentElement;
                                c.removeChild(a);
                                var g = c.children;
                                b < g.length ? c.insertBefore(a, g[b]) : c.appendChild(a)
                            }
                        };
                        this.remove = function(a) {
                            var b = a.parentElement;
                            b && b.removeChild(a)
                        };
                        this.bringToFront = function(b, e) {
                            if ("undefined" === typeof e) {
                                for (var c = 0, g = document.querySelectorAll("*"), f =
                                        g.length, n = 0; n < f; n++)
                                    if (e = parseInt(a(g[n], "z-index"), 10), !isNaN(e) && c < e && p.useZindex(g[n]) && (c = e), p.isVcbActive && c >= p.maxZindex) {
                                        c = p.maxZindex - 11;
                                        break
                                    }
                                e = c + 10
                            }
                            c = a(b, "position");
                            d(b, "z-index: " + e + " !important; position: " + ("static" === c || "auto" === c ? "relative" : c) + " !important;")
                        };
                        this.changeLinkUrl = function(a, b) {
                            t.setNodesAttribute(a, "href", b)
                        };
                        this.insertImageBannerAbove = function(a, b) {
                            b = e(b);
                            a.parentElement.insertBefore(b, a)
                        };
                        this.insertImageBannerBelow = function(a, b) {
                            b = e(b);
                            a.parentElement.insertBefore(b,
                                a.nextSibling)
                        };
                        this.insertImageBannerWithin = function(a, b) {
                            b = e(b);
                            a.appendChild(b)
                        };
                        this.changeImageBanner = function(a, d) {
                            if ("a" === a.tagName.toLowerCase()) {
                                void 0 !== d.linkUrl && a.setAttribute("href", d.linkUrl);
                                a = a.children;
                                for (var c = 0; c < a.length; c++) "img" === a[c].tagName.toLowerCase() && b(a[c], d)
                            } else "img" === a.tagName.toLowerCase() && (b(a, d), void 0 !== d.linkUrl && "a" === a.parentElement.tagName.toLowerCase() && a.parentElement.setAttribute("href", d.linkUrl))
                        };
                        this.changePicture = function(a, b) {
                            var c = null;
                            "picture" ===
                            a.tagName.toLowerCase() ? c = a : a.parentElement && "picture" === a.parentElement.tagName.toLowerCase() && (c = a.parentElement);
                            if (c) {
                                a = b.image;
                                var d = b.sources,
                                    e = c.children,
                                    n = null;
                                f(c, b);
                                b = 0;
                                for (c = e.length; b < c; b++) {
                                    var g = e[b],
                                        k = g.tagName.toLowerCase();
                                    y(a) || "img" !== k || (y(a.imageUrl) || (g.src = a.imageUrl), y(a.imageAlt) || g.setAttribute("alt", v(a.imageAlt)), y(a.imageTitle) || g.setAttribute("title", v(a.imageTitle)), y(a.imageSrcset) || g.setAttribute("srcset", v(a.imageSrcset)));
                                    if (K(d) && "source" === k)
                                        for (var n = null === n ?
                                                0 : ++n, k = 0, h = d.length; k < h; k++) {
                                            var m = d[k];
                                            if (m.childNumber === n || y(m.childNumber)) {
                                                var u = g;
                                                "source" === u.tagName.toLowerCase() && (y(m.srcset) || u.setAttribute("srcset", v(m.srcset)), y(m.sizes) || u.setAttribute("sizes", v(m.sizes)), y(m.media) || u.setAttribute("media", v(m.media)))
                                            }
                                        }
                                }
                            }
                        };
                        this.editHtml = function(a, b) {
                            a.innerHTML = v(b)
                        };
                        this.makeLink = function(a, b, c) {
                            if ("a" === a.tagName.toLowerCase()) var d = a;
                            else d = document.createElement("a"), a.parentElement.insertBefore(d, a), d.appendChild(a);
                            d.setAttribute("href",
                                b);
                            y(c) || d.setAttribute("target", c)
                        };
                        this.setNodesAttribute = function(a, b, c) {
                            a.setAttribute(b, c)
                        };
                        this.getNodesAttribute = function(a, b) {
                            return a.getAttribute(b)
                        };
                        this.insertHtmlAbove = function(a, b) {
                            var c = document.createElement("div");
                            a.parentElement.insertBefore(c, a);
                            c.outerHTML = v(b)
                        };
                        this.insertHtmlBelow = function(a, b) {
                            var c = document.createElement("div");
                            a.parentElement.insertBefore(c, a.nextSibling);
                            c.outerHTML = v(b)
                        };
                        this.insertHtmlWithin = function(a, b) {
                            var c = document.createElement("div");
                            a.appendChild(c);
                            c.outerHTML = v(b)
                        };
                        this.autoHide = function(a) {
                            a = a.replace(/:eq\(\d*\)/gmi, "");
                            var b = Y();
                            t.addCss(a + "{visibility: hidden;}", b);
                            return b
                        };
                        this.trackClick = function(a, b, c, d) {
                            p.isVcbActive ? p.registerClickAction(a, b, c) : (a["data-mm-events-ref"] || (a["data-mm-events-ref"] = {
                                lockFuncs: []
                            }, d(function(b, n) {
                                for (var c = a["data-mm-events-ref"].lockFuncs, d = [], e = 0; e < c.length; e++) {
                                    var g = c[e]();
                                    if (g) {
                                        var f = g[0];
                                        var k = f;
                                        var h = b;
                                        k = h.target === a ? !1 : F(h.data) && aa(h.data.split(","), k);
                                        k || (d.push({
                                            name: f,
                                            value: g[1],
                                            attribute: g[2],
                                            postponedAction: y(g[3]) ? !0 : g[3]
                                        }), g = b.data && F(b.data) ? b.data.split(",") : [], aa(g, f) || (g.push(f), b.data = g.join()))
                                    }
                                }
                                if (d.length) {
                                    e = ca(a);
                                    c = !1;
                                    if (e) {
                                        if (e = ba(e), !e.sameSite || e.notRequiresReload || e.target) c = !0
                                    } else e = a.nodeName.toLowerCase(), f = a.getAttribute("type"), ("input" === e || "button" === e) && f && "submit" === f.toLowerCase() || (c = !0);
                                    n(d, c, A(b, a))
                                }
                            })), a["data-mm-events-ref"].lockFuncs.push(function() {
                                return [b.name, b.value, b.attribute, b.postponedAction]
                            }))
                        };
                        this.trackClicks = function(a, b, c, d) {
                            t.trackClick(a,
                                b, c,
                                function(b) {
                                    t.addEvent(a, "click", function(a) {
                                        b(a, d)
                                    })
                                })
                        };
                        this.removeTrackClicks = function(a, b) {
                            if (a && a["data-mm-events-ref"]) {
                                a = a["data-mm-events-ref"].lockFuncs;
                                for (var c = a.length - 1; 0 <= c; c--) {
                                    var d = a[c]();
                                    if (d[0] === b.name && d[1] === b.value && d[2] === b.attribute) return a.splice(c, 1), !0
                                }
                            }
                            return !1
                        };
                        this.hasTrackClicks = function(a, b) {
                            if (a && a["data-mm-events-ref"]) {
                                a = a["data-mm-events-ref"].lockFuncs;
                                for (var c = a.length - 1; 0 <= c; c--) {
                                    var d = a[c]();
                                    if (d[0] === b.name && d[1] === b.value && d[2] === b.attribute) return !0
                                }
                            }
                            return !1
                        }
                    });
                    a.exports = h
                },
                Spa: function(a, h, l) {
                    a.config = {
                        singleton: !0
                    };
                    var m = h("Class").extend(function() {
                        function a(a, n) {
                            return function() {
                                var c = arguments[0],
                                    g = e.find(c),
                                    f = {};
                                if (0 === g.length || 0 === q.length) return !1;
                                for (var M = g.length - 1; 0 <= M; M--) {
                                    var k = D(arguments);
                                    k[0] = g[M];
                                    if (!1 === b.isChanged(n, a, k, C)) {
                                        var h = b.makeRollbackObject(g[M], q, n, k, c);
                                        f.result = a.apply(d, k);
                                        f.operation = a;
                                        f.mutationIndex = C;
                                        b.registerRollback(h, f)
                                    }
                                }
                                return !0
                            }
                        }

                        function m(a) {
                            var b = null,
                                n = null;
                            this.modificationApply = function() {
                                q = D(a);
                                E(b) && A.checkConditions(a) ?
                                    b.apply(null) : E(n) && n();
                                q = []
                            };
                            this.then = function(a) {
                                if (E(a)) b = a;
                                else return r.error("You can't use without setting function"), !1;
                                d.forceMutation();
                                return this
                            }.bind(this);
                            this.rollback = function(a) {
                                if (E(a)) n = a;
                                else return r.error("You can't use without setting function"), !1;
                                return !0
                            }.bind(this)
                        }
                        var d = this,
                            k = l("DomPlain"),
                            b = l("SpaRollback"),
                            f = l("Action"),
                            e = l("QuerySelector"),
                            A = l("Conditions"),
                            t = l("Watcher"),
                            p = h("Deferred"),
                            y = ["when", "forceMutation"],
                            I = ["element", "location"],
                            g = "hide resize freeMove changeStyle guidedMove remove bringToFront changeLinkUrl insertImageBannerBelow insertImageBannerAbove insertImageBannerWithin changeImageBanner editHtml insertHtmlAbove insertHtmlBelow insertHtmlWithin makeLink setNodesAttribute getNodesAttribute find".split(" "),
                            u = ["trackClicks"],
                            c = [],
                            q = [],
                            C = 0,
                            n = !1;
                        this.find = e.find;
                        this.element = A.element;
                        this.location = A.location;
                        this.getNodesAttribute = function() {
                            for (var a = D(arguments, 1), b = e.find(arguments[0]), n = new p, c = [], d = 0; d <= b.length - 1; d++) c.push(k.getNodesAttribute.bind(k, b[d]).apply(k, a));
                            n.resolve(c);
                            return n.promise()
                        };
                        this.forceMutation = function() {
                            C++;
                            b.runRollbackAll();
                            N(c, function(a) {
                                a.modificationApply()
                            })
                        };
                        this.forceRollback = function() {
                            c = [];
                            b.runRollbackAll(!0)
                        };
                        this.when = function() {
                            n || (t.watchNode(document,
                                function() {
                                    d.forceMutation()
                                }), n = !0);
                            var a = D(arguments);
                            a = K(a[0]) ? a[0] : a;
                            var b = new m(a);
                            0 < a.length && c.push(b);
                            return b
                        };
                        this.getWrapper = function() {
                            var a = {};
                            B(d, a, y);
                            a.dom = {};
                            a.actions = {};
                            a.conditions = {};
                            B(d, a.dom, g);
                            B(d, a.actions, u);
                            B(d, a.conditions, I);
                            return a
                        };
                        B(k, d, ["find"]);
                        (function(b, n, c) {
                            n = n || {};
                            N(c, function(c) {
                                n[c] = a(b[c], c)
                            })
                        })(k, d, "hide resize freeMove changeStyle guidedMove remove bringToFront changeLinkUrl insertImageBannerBelow insertImageBannerAbove insertImageBannerWithin changeImageBanner editHtml insertHtmlAbove insertHtmlBelow insertHtmlWithin makeLink setNodesAttribute".split(" "));
                        this.spaTrackClick = function(a, b, n, c) {
                            k.trackClick(a, b, n, function(b) {
                                k.addEvent(a, "mousedown", function() {
                                    a["data-mm-events-mouseup-h"] && k.removeEvent(a, "mouseup", a["data-mm-events-mouseup-h"]);
                                    a["data-mm-events-mouseup-h"] = k.addEvent(a, "mouseup", function(n) {
                                        b(n, c);
                                        k.removeEvent(a, "mouseup", a["data-mm-events-mouseup-h"])
                                    })
                                })
                            })
                        };
                        this.spaTrackClicks = a(d.spaTrackClick, "trackClicks");
                        this.trackClicks = function(a, b, n) {
                            d.spaTrackClicks(a, b, n, f.sendActions)
                        }
                    });
                    a.exports = m
                },
                Conditions: function(a, h, l) {
                    a.config = {
                        singleton: !0
                    };
                    h = h("Class").extend(function() {
                        function a(a) {
                            a = K(a[0]) ? a[0] : a;
                            for (var d = 0; d < a.length; d++) "string" === typeof a[d] && (a[d] = a[d].replace(v, "\\$&").replace(/\*/g, ".*"), a[d] = new RegExp("^" + a[d] + "$", "i"));
                            return a
                        }
                        var h = l("QuerySelector"),
                            v = /[\\/\^\$\+\?\.\(\)\:\=\!\<\>\|\{\}\,\;\[\]\&\%]/g;
                        this.checkConditions = function(a) {
                            return a.every(function(a) {
                                return a()
                            })
                        };
                        this.element = function(a) {
                            var d = function() {
                                return 0 < h.find(a).length
                            };
                            d.not = function() {
                                return function() {
                                    return !d()
                                }
                            };
                            return d
                        };
                        this.location =
                            function(d) {
                                var k = a(D(arguments)),
                                    b = function() {
                                        for (var a = window.location.href.toLowerCase(), b = 0; b < k.length; b++)
                                            if (k[b].test(a)) return !0;
                                        return !1
                                    };
                                b.not = function() {
                                    var d = a(D(arguments));
                                    return function() {
                                        var a = window.location.href.toLowerCase(),
                                            f = b();
                                        if (0 >= d.length) return !f;
                                        for (var k = 0; k < d.length; k++)
                                            if (d[k].test(a)) return !1;
                                        return f
                                    }
                                };
                                return b
                            }
                    });
                    a.exports = h
                },
                SpaRollback: function(a, h, l) {
                    a.config = {
                        singleton: !0
                    };
                    h = h("Class").extend(function() {
                        function a(a) {
                            return "body" === a.nodeName.toLowerCase() || document.body.contains(a)
                        }

                        function h(a, b) {
                            if (!a) return !0;
                            var n = document.createElement("img");
                            n.src = a;
                            return b.getAttribute("src") === n.getAttribute("src")
                        }

                        function v(a, b) {
                            a = "img" === a.nodeName.toLowerCase() ? [a] : a.querySelectorAll("img");
                            for (var n = !1, c = 0; c < a.length; c++) n = n || h(b.imageUrl, a[c]) && a[c].alt === (b.imageAlt || "") && a[c].title === (b.imageTitle || "") && a[c].srcset === (b.imageSrcset || "");
                            return n
                        }

                        function d(b, c, d, e) {
                            return b.method === d && b.parent.isEqualNode(c) && g.isEqualToolArguments(e, b.args) && a(b.node)
                        }

                        function k(b, c, d, e) {
                            return b.method ===
                                d && a(b.node) && b.node.isEqualNode(c) && g.isEqualToolArguments(e, b.args)
                        }

                        function b(a, b) {
                            return g.applyChangeToNode(a.options.operation, a.originNode.cloneNode(!0), a.originParent.cloneNode(!0), b)
                        }

                        function f(a) {
                            return -1 < J(a, "nodeBelow") || -1 < J(a, "nodeAbove") || -1 < J(a, "nodeWithin")
                        }

                        function e(a) {
                            return -1 < J(a, "imageBannerBelow") || -1 < J(a, "imageBannerAbove") || -1 < J(a, "imageBannerWithin")
                        }

                        function A(a) {
                            var b = document.createElement("div");
                            b.innerHTML = a;
                            return 0 < b.children.length
                        }

                        function t(a, c, e, g, f, k) {
                            for (a = 0; a <=
                                q.length - 1; a++)
                                if (d(q[a], g, f, k) && -1 < b(q[a], k).parent.innerHTML.indexOf(k[1])) return !0;
                            return !1
                        }

                        function p(b, c, d, e, g) {
                            a(b) && a(b.parentNode) && b.parentNode.removeChild(A(g[1]) ? b.nextElementSibling : b.nextSibling)
                        }

                        function r(b, c, d, e, g) {
                            a(b) && a(b.parentNode) && b.parentNode.removeChild(A(g[1]) ? b.previousElementSibling : b.previousSibling)
                        }

                        function y(b, c, d) {
                            a(b) && a(b.parentNode) && (b.innerHTML = d.innerHTML)
                        }
                        var g = this,
                            u = l("QuerySelector"),
                            c = l("Conditions"),
                            q = [],
                            C = {
                                hide: ["style"],
                                resize: ["style"],
                                freeMove: ["style"],
                                changeStyle: ["style"],
                                guidedMove: ["move"],
                                remove: ["remove"],
                                bringToFront: ["style"],
                                changeLinkUrl: ["changeLinkUrl"],
                                insertImageBannerBelow: ["imageBannerBelow"],
                                insertImageBannerAbove: ["imageBannerAbove"],
                                insertImageBannerWithin: ["imageBannerWithin"],
                                changeImageBanner: ["changeImageBanner"],
                                editHtml: ["html"],
                                insertHtmlAbove: ["nodeAbove"],
                                insertHtmlBelow: ["nodeBelow"],
                                insertHtmlWithin: ["nodeWithin"],
                                makeLink: ["link"],
                                setNodesAttribute: ["attribute"],
                                trackClicks: ["trackClicks"]
                            };
                        this.rollbackAttributes =
                            function(a, b, c) {
                                for (var n = 0; n < c.length; n++) null === b.getAttribute(c[n]) ? ("img" === a.nodeName.toLowerCase() && "srcset" === c[n] && a.setAttribute(c[n], ""), a.removeAttribute(c[n])) : a.setAttribute(c[n], b.getAttribute(c[n]))
                            };
                        this.rollbackHandlers = {
                            style: function(a, b, c) {
                                a.style.cssText = c.style.cssText
                            },
                            html: function(a, b, c) {
                                a.innerHTML = c.innerHTML
                            },
                            attribute: function(a, b, c, d, e) {
                                b = a.attributes.length >= c.attributes.length ? a.attributes : c.attributes;
                                if (c.hasAttributes())
                                    for (d = 0; d < b.length; d++) b[d].name === e[1] && c.getAttribute(b[d].name) !==
                                        a.getAttribute(b[d].name) && (null === c.getAttribute(b[d].name) ? a.removeAttribute(b[d].name) : a.setAttribute(b[d].name, c.getAttribute(b[d].name)));
                                else if (a.hasAttributes())
                                    for (b = a.attributes, d = 0; d < b.length; d++) a.removeAttribute(b[d].name)
                            },
                            move: function(a, b, c, d) {
                                var n = function(a, b) {
                                    for (var c = a.children.length - 1; 0 <= c; c--)
                                        if (a.children[c].isEqualNode(b)) return c;
                                    return -1
                                };
                                c = n(d, c);
                                n = n(b, a);
                                c === d.children.length - 1 ? b.appendChild(a) : (c > n && c++, b.insertBefore(a, b.children[c]))
                            },
                            nodeAbove: r,
                            nodeBelow: p,
                            nodeWithin: y,
                            imageBannerAbove: r,
                            imageBannerBelow: p,
                            imageBannerWithin: y,
                            remove: function(a, b, c, d) {
                                for (var n = d.children.length - 1; 0 <= n; n--)
                                    if (d.children[n].isEqualNode(c)) {
                                        b.insertBefore(a, b.children[n]);
                                        break
                                    }
                            },
                            link: function(b, c, d, e, f) {
                                "a" === b.nodeName.toLowerCase() ? g.rollbackHandlers.attribute(b, c, d, e, [f[0], "href"]) : a(b) && a(b.parentNode) && b.parentNode.parentNode.replaceChild(b, b.parentNode)
                            },
                            changeImageBanner: function(a, b, c, d, e) {
                                var n = a.nodeName.toLowerCase(),
                                    f = [];
                                e[1].imageUrl && f.push("src");
                                e[1].imageAlt && f.push("alt");
                                e[1].imageTitle && f.push("title");
                                e[1].imageSrcset && f.push("srcset");
                                if ("img" === n) g.rollbackAttributes(a, c, f), "a" === b.nodeName.toLowerCase() && e[1].linkUrl && g.rollbackAttributes(b, d, ["href"]);
                                else if ("a" === n.toLowerCase())
                                    for (void 0 !== e[1].linkUrl && g.rollbackAttributes(a, c, ["href"]), a = a.children, c = c.children, b = 0; b < a.length; b++)
                                        for (d = 0; d < c.length; d++) a[b].isEqualNode(c[d]) && "img" === a[b].nodeName.toLowerCase() && g.rollbackAttributes(a[b], c[d], f)
                            },
                            changeLinkUrl: function(a, b, c) {
                                null === c.getAttribute("href") ?
                                    a.removeAttribute("href") : a.setAttribute("href", c.getAttribute("href"))
                            },
                            trackClicks: function(a, b, c, d, e) {
                                return l("DomPlain").removeTrackClicks(a, e[1])
                            }
                        };
                        this.isChangedHandlers = {
                            style: function(a, b, c, d, e, f, k) {
                                for (a = 0; a <= q.length - 1; a++)
                                    if (q[a].method === e && q[a].node.isEqualNode(c) && g.isEqualToolArguments(k, q[a].args)) return q[a];
                                return !1
                            },
                            html: function(a, b, c) {
                                return a.innerHTML === c.innerHTML
                            },
                            attribute: function(a, b, c) {
                                if (c.isEqualNode(a)) {
                                    for (var d = 0; d < c.attributes.length; d++)
                                        if (b = a.attributes[d].nodeName,
                                            c.getAttribute(b) !== a.getAttribute(b)) return !1;
                                    return !0
                                }
                                return !1
                            },
                            move: function(a, b, c, d, e, f) {
                                for (a = 0; a <= q.length - 1; a++)
                                    if (q[a].method === e && q[a].parent.isEqualNode(d) && g.isEqualToolArguments(f, q[a].args)) {
                                        for (c = b = 0; c <= d.children.length - 1; c++) {
                                            if (!q[a].parent.children[c] || !d.children[c].isEqualNode(q[a].parent.children[c])) {
                                                b = 0;
                                                break
                                            }
                                            b++
                                        }
                                        if (b === d.children.length) return q[a]
                                    }
                                return !1
                            },
                            nodeAbove: t,
                            nodeBelow: t,
                            nodeWithin: function(a, c, d, e, g, f, h) {
                                for (a = 0; a <= q.length - 1; a++)
                                    if (k(q[a], d, g, h) && -1 < b(q[a], f).node.innerHTML.indexOf(f[1])) return q[a];
                                return !1
                            },
                            imageBannerAbove: function(a, c, e, g, f, k) {
                                for (a = 0; a <= q.length - 1; a++)
                                    if (d(q[a], g, f, k) && (c = b(q[a], k), g.nodeName.toLowerCase() === c.parent.nodeName.toLowerCase() && v(c.node.previousElementSibling, k[1]))) return q[a];
                                return h(k[1].imageUrl, k[0]) ? !0 : !1
                            },
                            imageBannerBelow: function(a, c, e, g, f, k) {
                                for (a = 0; a <= q.length - 1; a++)
                                    if (d(q[a], g, f, k) && (c = b(q[a], k), g.nodeName.toLowerCase() === c.parent.nodeName.toLowerCase() && v(c.node.nextElementSibling, k[1]))) return q[a];
                                return h(k[1].imageUrl, k[0]) ? !0 : !1
                            },
                            imageBannerWithin: function(a,
                                c, d, e, g, f, h) {
                                for (a = 0; a <= q.length - 1; a++)
                                    if (k(q[a], d, g, h) && (c = b(q[a], f), e.nodeName.toLowerCase() === c.parent.nodeName.toLowerCase() && v(c.node, f[1]))) return q[a];
                                return !1
                            },
                            remove: function(a, b, c, d, e, f) {
                                for (c = 0; c <= q.length - 1; c++)
                                    if (q[c].method === e && q[c].parent.isEqualNode(d) && (b = q[c], a = q[c].parent.cloneNode(!0), g.rollbackHandlers[e](q[c].node.cloneNode(!0), a, b.originNode, b.originParent), b.originParent.children.length === a.children.length)) {
                                        for (var n = f = 0; n <= a.children.length - 1; n++) a.children[n].innerHTML ===
                                            b.originParent.children[n].innerHTML && f++;
                                        if (a.children.length === f) return b
                                    }
                                return !1
                            },
                            link: function(b, c, d, e) {
                                if ("a" === b.nodeName.toLowerCase()) return b.getAttribute("href") === d.getAttribute("href");
                                if (a(e)) return c.getAttribute("href") === e.getAttribute("href")
                            },
                            changeLinkUrl: function(a, b, c) {
                                return a.getAttribute("href") === c.getAttribute("href")
                            },
                            changeImageBanner: function(a, b, c, d) {
                                return "img" === a.nodeName.toLowerCase() ? g.isChangedHandlers.attribute(b, b, d) : g.isChangedHandlers.attribute(a, b, c)
                            },
                            trackClicks: function(a,
                                b, c, d, e, f) {
                                return l("DomPlain").hasTrackClicks(c, f[1])
                            }
                        };
                        this.isEqualToolArguments = function(a, b) {
                            var c = 0,
                                d = !0,
                                e = D(a),
                                n = D(b);
                            if (e.length !== n.length) return !1;
                            var f = typeof a[0],
                                g = typeof b[0];
                            f !== g && (c = 1, d = !1, "string" === f && (d = u.isNodeBelongsSelector(a[0], b[0])), "string" === g && (d = u.isNodeBelongsSelector(b[0], a[0])));
                            for (c; c < e.length; c++)
                                if ("object" === typeof e[c] && !(a[c] instanceof Element)) {
                                    if (JSON.stringify(e[c]) !== JSON.stringify(n[c])) return !1
                                } else if (e[c] !== n[c]) return !1;
                            return d
                        };
                        this.applyChangeToNode =
                            function(a, b, c, d) {
                                d = D(d);
                                var e = b.parentNode ? b.parentNode : c;
                                for (c = 0; c <= e.children.length - 1; c++)
                                    if (e.children[c].isEqualNode(b)) {
                                        var n = e.children[c];
                                        break
                                    }
                                d[0] = n;
                                a.apply(null, d);
                                e = n.parentNode;
                                return {
                                    node: n,
                                    parent: e,
                                    args: d
                                }
                            };
                        this.isChanged = function(a, b, c, d) {
                            var n = 1,
                                k = c[0],
                                h = k.parentNode ? c[0].parentNode : null,
                                m = C[a];
                            var l = f(m) || e(m) || -1 < J(m, "remove") ? {
                                node: {},
                                parent: {},
                                args: c
                            } : this.applyChangeToNode(b, k.cloneNode(!0), h.cloneNode(!0), c);
                            for (b = 0; b < m.length; b++) {
                                var u = this.isChangedHandlers[m[b]].apply(g, [l.node, l.parent, k, h, a, l.args, c]);
                                n = "object" === typeof u ? n & u.options.mutationIndex !== d : n & u
                            }
                            return 1 === n
                        };
                        this.isActualChange = function(b) {
                            var d = c.checkConditions(b.conditions),
                                n = u.isNodeBelongsSelector(b.selector, b.node),
                                g = a(b.node),
                                k = a(b.parent);
                            return -1 < J(b.type, "remove") ? (b = u.find(b.selector), d && k && 0 === b.length) : f(b.type) && -1 === b.parent.innerHTML.indexOf(b.args[1]) ? !1 : e(b.type) ? v(b.parent, b.args[1]) && d && n : d && g && n
                        };
                        this.isNeedRollback = function(a) {
                            if (-1 < J(a.type, "remove")) {
                                for (var b = u.find(a.selector),
                                        c = !0, d = 0; d < b.length; d++)
                                    if (b[d].isEqualNode(a.originNode)) {
                                        c = !1;
                                        break
                                    }
                                return c
                            }
                            if (f(a.type)) {
                                b = document.createElement("div");
                                b.innerHTML = a.args[1];
                                if (0 < b.children.length)
                                    for (d = 0; d < b.children.length; d++) b.children[d].style.cssText = b.children[d].style.cssText, "" === b.children[d].getAttribute("style") && b.children[d].removeAttribute("style");
                                if (-1 === a.parent.innerHTML.indexOf(b.innerHTML) && a.parent.children.length === a.originParent.children.length && a.node.children.length == a.originNode.children.length) return !1
                            }
                            return e(a.type) &&
                                !1 === v(a.parent, a.args[1]) && a.parent.children.length === a.originParent.children.length && a.node.children.length == a.originNode.children.length ? !1 : -1 < J(a.type, "attribute") ? u.isNodeBelongsSelector(a.args[0], a.node) || a.node.getAttribute(a.args[1]) === a.args[2] : -1 < J(a.type, "changeImageBanner") ? u.isNodeBelongsSelector(a.args[0], a.node) || v(a.parent, a.args[1]) : !0
                        };
                        this.runRollback = function(a, b) {
                            if (E(a)) a.apply(null, b);
                            else if (K(a))
                                for (var c = 0; c < a.length; c++) g.runRollback(a[c], b);
                            else F(a) && E(g.rollbackHandlers[a]) &&
                                g.rollbackHandlers[a].apply(this, b)
                        };
                        this.runRollbackAll = function(a) {
                            for (var b = q.length - 1; 0 <= b; b--) this.isActualChange(q[b]) && !0 !== a || (this.isNeedRollback(q[b]) && g.runRollback(q[b].type, [q[b].node, q[b].parent, q[b].originNode, q[b].originParent, q[b].args, q[b].options]), q.splice(b, 1))
                        };
                        this.makeRollbackObject = function(a, b, c, d, e) {
                            return {
                                node: a,
                                parent: a.parentNode,
                                originNode: a.cloneNode(!0),
                                originParent: a.parentNode ? a.parentNode.cloneNode(!0) : null,
                                method: c,
                                conditions: b,
                                args: d,
                                selector: e,
                                type: C[c],
                                options: {}
                            }
                        };
                        this.registerRollback = function(a, b) {
                            a.options = b;
                            q.push(a)
                        }
                    });
                    a.exports = h
                },
                Watcher: function(a, h, l) {
                    a.config = {
                        singleton: !0
                    };
                    h = h("Class").extend(function() {
                        var a = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver || null,
                            h = {
                                attributes: !0,
                                attributeFilter: ["src", "href"],
                                childList: !0,
                                subtree: !0,
                                characterData: !0,
                                attributeOldValue: !0,
                                characterDataOldValue: !0
                            };
                        this.watchNode = function(m, d) {
                            if (null === a) return !1;
                            var k = new a(function() {
                                k.disconnect();
                                d();
                                k.observe(m || document, h)
                            });
                            k.observe(m || document, h);
                            return !0
                        }
                    });
                    a.exports = h
                },
                BaseWidget: function(a, h, l) {
                    a.config = {
                        singleton: !1
                    };
                    h = h("Class").extend(function(a) {
                        function h(a, b) {
                            for (; a && a.parentNode;)
                                if (a = a.parentNode, a === b) return !0;
                            return !1
                        }

                        function m() {
                            function a(a) {
                                return !a || !X(a.displayedCount) || a.displayedCount >= b.showsCount ? 1 : a.displayedCount + 1
                            }
                            var b = p.options.showFrequency;
                            if (!0 !== b.always) {
                                var d = new Date,
                                    e = p.getWidgetData(),
                                    f = e.persistent,
                                    e = e.session,
                                    g;
                                b.showsInterval && "session" === b.showsInterval && (g = {
                                    lastShown: d,
                                    displayedCount: a(e)
                                });
                                d = {
                                    lastShown: d,
                                    wasDismissed: f && f.wasDismissed || !1,
                                    displayedCount: a(f)
                                };
                                p.setWidgetData(d, g)
                            }
                        }

                        function d() {
                            var a = p.getWidgetData(),
                                b = a.persistent;
                            p.setWidgetData({
                                lastShown: b && b.lastShown,
                                wasDismissed: !0,
                                displayedCount: b && b.displayedCount
                            }, a.session)
                        }

                        function k() {
                            function a() {
                                var a = f.lastShown && f.lastShown.getTime();
                                if (!z(k)) {
                                    if ("session" === k) return !e.session;
                                    if ("campaign" === k) return !e.persistent;
                                    var b = new Date,
                                        c = b.getMonth(),
                                        b = b.getFullYear();
                                    if (c = {
                                            hour: 36E5,
                                            day: 864E5,
                                            week: 6048E5,
                                            month: 864E5 * (new Date(b,
                                                c, 0)).getDate()
                                        }[k]) return d - a > c
                                }
                            }
                            var b = p.options.showFrequency;
                            if (!(!0 !== b.always && b.showsInterval || b.neverAfterDismiss)) return !0;
                            var d = new Date,
                                e = p.getWidgetData(),
                                f = e.persistent,
                                g = e.session;
                            if (f && !0 === b.neverAfterDismiss && !0 === f.wasDismissed) return !1;
                            if (!0 === b.always || !b.showsInterval) return !0;
                            var k = H(b.showsInterval.toLowerCase()),
                                b = b.showsCount;
                            if (!z(k) && b && X(b)) {
                                if ("session" === k && !e.session || !e.persistent) return !0;
                                var h = a();
                                return "session" === k ? g.displayedCount < b : f.displayedCount < b || h
                            }
                        }
                        var b =
                            l("CGApi"),
                            f = l("Engine").events,
                            e = l("Dom"),
                            A = l("DomPlain"),
                            t = l("QuerySelector"),
                            p = this,
                            r = !1,
                            I = [],
                            g = [];
                        p.target = document.body;
                        p.selectors = {
                            guidAttr: "data-vcb-me-guid",
                            wrapper: "vcb-me-wrapper",
                            overlay: "vcb-me-overlay",
                            contentWrapper: "vcb-me-content-wrapper",
                            content: "vcb-me-content",
                            contentInner: "vcb-me-content-inner",
                            dismiss: "vcb-me-dismiss",
                            pointer: "vcb-me-pointer"
                        };
                        p.type = "BaseWidget";
                        p.wrapper = null;
                        p.contentWrapper = null;
                        p.content = null;
                        p.setWidgetData = function(a, c) {
                            var d = p.options.guid;
                            a && b.setData(d +
                                "persistData", JSON.stringify(a), 365);
                            c && b.setData(d + "sessionData", JSON.stringify(c), 0)
                        };
                        p.getWidgetData = function() {
                            var a = p.options.guid,
                                c = {
                                    persistent: void 0,
                                    session: void 0
                                };
                            if (!z(a)) {
                                var d = b.getData(a + "sessionData"),
                                    a = b.getData(a + "persistData");
                                z(a) || (c.persistent = JSON.parse(a), c.persistent.lastShown = new Date(c.persistent.lastShown));
                                z(d) || (c.session = JSON.parse(d), c.session.lastShown = new Date(c.session.lastShown))
                            }
                            return c
                        };
                        p.clearWidgetData = function() {
                            var a = p.options.guid;
                            z(a) || (b.clearData(a + "persistData"),
                                b.clearData(a + "sessionData"))
                        };
                        p.validateOptions = function(a) {
                            var b = [];
                            a.appearance.name || b.push("Can't create widget! Name parameter required!");
                            a.guid || b.push("Can't create widget! Guid parameter required!");
                            a.content || b.push("Can't create widget! Content is required!");
                            if (b.length) throw Error(b.join("\n"));
                        };
                        p.addClassesAndIdContentElements = function() {
                            for (var a = p.getContentWrapper(), b = p.options, a = a.firstChild; null !== a && 1 !== a.nodeType;) a = a.nextSibling;
                            if (a) {
                                a.id || (a.id = b.guid);
                                A.addClass(a, p.selectors.content);
                                if (!z(b.closeEvent.dismissElements)) {
                                    var d = t.find(b.closeEvent.dismissElements, a);
                                    for (b = 0; b < d.length; b++) A.addClass(d[b], p.selectors.dismiss)
                                }
                                for (b = a.lastChild; null !== b && 1 !== b.nodeType;) b = b.previousSibling;
                                !b || d && ~J(d, b) || A.addClass(b, p.selectors.contentInner)
                            }
                        };
                        p.getWrapper = function() {
                            if (h(p.wrapper, p.target)) return p.wrapper;
                            var a = t.find("[" + p.selectors.guidAttr + '="' + p.options.guid + '"]', p.target)[0];
                            if (a) return a
                        };
                        p.wrapperFor = function(a) {
                            return function() {
                                if (!h(p[a], p.target)) {
                                    var b = p.getWrapper();
                                    p[a] = t.find("." + p.selectors[a], b)[0]
                                }
                                return p[a]
                            }
                        };
                        p.getContentWrapper = p.wrapperFor("contentWrapper");
                        p.getContent = p.wrapperFor("content");
                        p.bindWidgetShowEvents = function() {
                            var a = function() {
                                    k() && p.show()
                                },
                                b = p.options.displayEvent,
                                d;
                            !0 === b.onPageLoad && f.domReady(a);
                            if (!z(b.initAttachedTo)) {
                                var e = t.find(b.initAttachedTo);
                                for (d = 0; d < e.length; d++) !0 === b.onClick && A.addEvent(e[d], "click", a), !0 === b.onMouseOver && A.addEvent(e[d], "mouseover", a), !0 === b.onMouseOut && A.addEvent(e[d], "mouseout", a)
                            }
                            if (b.delay) {
                                var g =
                                    1E3 * parseInt(b.delay, 10);
                                if (b.startAfterIdle) {
                                    var h;
                                    A.addEvent(document, "ontouchstart" in window ? "touchmove" : "mousemove", function() {
                                        window.clearTimeout(h);
                                        h = window.setTimeout(a, g)
                                    })
                                } else window.setTimeout(a, g)
                            }
                            b.onLosePageFocus && (A.addEvent(window, "blur", a), A.addEvent(window, "pagehide", a));
                            b.onViewportMouseOut && A.addEvent(document, "mouseout", function(a) {
                                (a = a.relatedTarget || a.toElement) && "html" !== a.nodeName.toLowerCase() || k() && p.show()
                            });
                            if (!z(b.onCustomEvent)) f.on(b.onCustomEvent, a)
                        };
                        p.bindDismissEvents =
                            function() {
                                var a = p.getWrapper(),
                                    b = p.options.closeEvent;
                                if (b.onDismissButton && !z(b.dismissElements))
                                    for (a = t.find(b.dismissElements, a), b = 0; b < a.length; b++) A.addEvent(a[b], "click", p.dismiss)
                            };
                        p.bindCloseEvents = function() {
                            function a(a) {
                                var c = t.find(p.options.displayEvent.initAttachedTo || ""),
                                    d = p.getWrapper(),
                                    d = t.find("*:not(." + p.selectors.overlay + ")", d);
                                if (~J(c, a.target) || ~J(d, a.target)) return !1;
                                b()
                            }
                            var b = p.hide;
                            p.options.closeEvent.onClickOutside && (A.addEvent(document, "click", a), A.addEvent(window, "keydown",
                                function(a) {
                                    27 === (y(a.which) ? a.keyCode : a.which) && b()
                                }))
                        };
                        p.show = function() {
                            var a = p.getWrapper();
                            A.show(a);
                            for (a = 0; a < I.length; a++) I[a].call(null);
                            r = !0
                        };
                        p.hide = function() {
                            var a = p.getWrapper();
                            e.hide(a);
                            r = !1
                        };
                        p.dismiss = function() {
                            p.hide();
                            for (var a = 0; a < g.length; a++) g[a].call(null)
                        };
                        p.destroy = function() {
                            var a = p.getWrapper();
                            a && a.parentNode && a.parentNode.removeChild(a)
                        };
                        p.getOptions = function() {
                            return p.options
                        };
                        p.isShown = function() {
                            return r
                        };
                        p.subscribeFunctionOnImgsLoads = function(a) {
                            for (var b = t.find("img"),
                                    d = 0; d < b.length; d++) A.addEvent(b[d], "load", a)
                        };
                        p.init = function() {
                            p.options = p.mergeWithDefaultWidgetOptions(a);
                            p.validateOptions(p.options);
                            g.push(d);
                            I.push(m);
                            p.createWidgetDom();
                            p.bindWidgetShowEvents()
                        }
                    });
                    a.exports = h
                },
                Lightbox: function(a, h, l) {
                    a.config = {
                        singleton: !1
                    };
                    h = h("BaseWidget").extend(function() {
                        function a() {
                            var a = b.getOverlay(),
                                d = b.options.appearance,
                                f = {
                                    display: "block",
                                    position: "fixed",
                                    top: "0px",
                                    left: "0px",
                                    height: "100%",
                                    width: "100%"
                                };
                            d.fadeEnabled ? (f["background-color"] = d.fadeColor, f.opacity =
                                parseFloat(d.opacity)) : f.opacity = 0;
                            k.updateElementStyle(a, G(f))
                        }

                        function h() {
                            var a = b.getContentWrapper(),
                                d = b.options.appearance,
                                f = {};
                            f["background-color"] = d.backgroundColor;
                            f.position = "fixed";
                            d.autofit ? (f.display = "inline-block", f.width = "auto", f.height = "auto") : (f.width = d.width, f.height = d.height);
                            k.updateElementStyle(a, G(f))
                        }

                        function v() {
                            var a = b.getContentWrapper();
                            k.updateElementStyle(a, G({
                                top: 0,
                                left: 0
                            }));
                            var d = {},
                                f = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                                h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
                                m = parseInt(k.getStyle(a, "width"), 10),
                                l = parseInt(k.getStyle(a, "height"), 10),
                                g = (h < l ? h - 30 : l) / 2;
                            d.position = h < l + g - 60 ? "absolute" : "fixed";
                            d.top = "50%";
                            d.left = "50%";
                            d["margin-top"] = -1 * g + "px";
                            d["margin-left"] = (f < m ? f : m) / 2 * -1 + "px";
                            k.updateElementStyle(a, G(d))
                        }
                        var d = l("Dom"),
                            k = l("DomPlain"),
                            b = this,
                            f = b.base;
                        b.type = "Lightbox";
                        b.widgetOverlay = null;
                        b.getOverlay = b.wrapperFor("overlay");
                        b.mergeWithDefaultWidgetOptions = function(a) {
                            return P({
                                appearance: {
                                    backgroundColor: "#FFFFFF",
                                    fadeEnabled: !0,
                                    fadeColor: "#000000",
                                    opacity: .8,
                                    autofit: !0
                                },
                                displayEvent: {},
                                closeEvent: {
                                    onDismissButton: !0,
                                    onClickOutside: !0
                                },
                                showFrequency: {
                                    always: !0,
                                    neverAfterDismiss: !0
                                }
                            }, a)
                        };
                        b.show = function() {
                            a();
                            h();
                            v();
                            b.subscribeFunctionOnImgsLoads(v);
                            f.show()
                        };
                        b.createWidgetDom = function() {
                            b.wrapper = document.createElement("div");
                            b.wrapper.setAttribute(b.selectors.guidAttr, b.options.guid);
                            k.addClass(b.wrapper, b.selectors.wrapper);
                            d.hide(b.wrapper);
                            b.target.appendChild(b.wrapper);
                            b.widgetOverlay = document.createElement("div");
                            k.addClass(b.widgetOverlay, b.selectors.overlay);
                            b.wrapper.appendChild(b.widgetOverlay);
                            a();
                            d.bringToFront(b.widgetOverlay);
                            b.contentWrapper = document.createElement("div");
                            k.addClass(b.contentWrapper, b.selectors.contentWrapper);
                            b.wrapper.appendChild(b.contentWrapper);
                            b.contentWrapper.innerHTML = b.options.content;
                            b.addClassesAndIdContentElements();
                            h();
                            d.bringToFront(b.contentWrapper);
                            b.bindCloseEvents();
                            b.bindDismissEvents()
                        };
                        b.init()
                    });
                    a.exports = h
                },
                Notification: function(a, h, l) {
                    a.config = {
                        singleton: !1
                    };
                    h = h("BaseWidget").extend(function() {
                        var a = l("Dom"),
                            h = l("DomPlain"),
                            v = l("QuerySelector"),
                            d = this,
                            k = d.base;
                        d.type = "Notification";
                        d.mergeWithDefaultWidgetOptions = function(a) {
                            return P({
                                appearance: {
                                    backgroundColor: "#FFFFFF"
                                },
                                displayEvent: {},
                                closeEvent: {
                                    onDismissButton: !0
                                },
                                showFrequency: {
                                    always: !0
                                }
                            }, a)
                        };
                        d.createWidgetDom = function() {
                            d.wrapper = document.createElement("div");
                            d.wrapper.setAttribute(d.selectors.guidAttr, d.options.guid);
                            h.addClass(d.wrapper, d.selectors.wrapper);
                            a.hide(d.wrapper);
                            d.target.appendChild(d.wrapper);
                            d.contentWrapper = document.createElement("div");
                            h.addClass(d.contentWrapper, d.selectors.contentWrapper);
                            d.contentWrapper.innerHTML = d.options.content;
                            d.wrapper.appendChild(d.contentWrapper);
                            d.addClassesAndIdContentElements();
                            d.bindCloseEvents();
                            d.bindDismissEvents()
                        };
                        d.show = function() {
                            var a = d.getWrapper(),
                                f, e = d.options.appearance;
                            if (!z(e.insertWithin))(f = v.find(e.insertWithin)[0]) && f.appendChild(a);
                            else if (!z(e.insertAbove))(f = v.find(e.insertAbove)[0]) && f.parentElement.insertBefore(a, f);
                            else if (!z(e.insertBelow))(f =
                                v.find(e.insertBelow)[0]) && f.parentElement.insertBefore(a, f.nextSibling);
                            else if (!z(e.insertWithReplace) && (f = v.find(e.insertWithReplace)[0])) {
                                for (; f.hasChildNodes();) f.removeChild(f.firstChild);
                                f.appendChild(a)
                            }
                            if (f) {
                                a = d.getContentWrapper();
                                f = d.getContent();
                                var e = d.options.appearance,
                                    m = {},
                                    l = {};
                                l["background-color"] = e.backgroundColor;
                                e.autofit ? (m.display = "inline-block", m.width = "auto", m.height = "auto") : (m.width = e.width, m.height = e.height, m["margin-left"] = "auto", m["margin-right"] = "auto", l.width = "100%",
                                    l.height = "100%");
                                h.updateElementStyle(f, G(l));
                                h.updateElementStyle(a, G(m));
                                k.show()
                            }
                        };
                        d.hide = function() {
                            var a = d.getWrapper();
                            d.target.appendChild(a);
                            k.hide()
                        };
                        d.init()
                    });
                    a.exports = h
                },
                Callout: function(a, h, l) {
                    a.config = {
                        singleton: !1
                    };
                    h = h("BaseWidget").extend(function() {
                        function a(a) {
                            return "top" === a
                        }

                        function h(a) {
                            return "bottom" === a
                        }

                        function v(a) {
                            return "left" === a
                        }

                        function d(a) {
                            return "right" === a
                        }

                        function k(a) {
                            return "center" === a
                        }

                        function b(a) {
                            a = a.getBoundingClientRect();
                            var b = y(window.pageXOffset) ? document.documentElement.scrollLeft :
                                window.pageXOffset,
                                d = y(window.pageYOffset) ? document.documentElement.scrollTop : window.pageYOffset,
                                c = a.top + d,
                                e = a.left + b,
                                d = a.bottom + d,
                                b = a.right + b;
                            return {
                                top: c,
                                left: e,
                                bottom: d,
                                right: b,
                                width: a.width || b - e,
                                height: a.height || d - c
                            }
                        }

                        function f(a) {
                            var b = (a || "").split(" ");
                            a = H(b[0] || "left").toLowerCase();
                            b = H(b[1] || "top").toLowerCase();
                            return {
                                side: a,
                                part: b
                            }
                        }

                        function e(a) {
                            var b = (a || "").split(" ");
                            a = parseInt(b[0] || 0, 10);
                            b = parseInt(b[1] || 0, 10);
                            return {
                                side: a,
                                part: b
                            }
                        }

                        function r(c, g, m, l) {
                            function n() {
                                v(t.part) ? q.left =
                                    r.part : k(t.part) ? q.left = x.width / 2 - O / 2 + r.part : d(t.part) && (q.left = x.width - O - r.part)
                            }

                            function p() {
                                a(t.part) ? q.top = r.part : k(t.part) ? q.top = x.height / 2 - L / 2 + r.part : h(t.part) && (q.top = x.height - L - r.part)
                            }
                            var q = {},
                                t = f(m),
                                r = e(l),
                                x = {};
                            if ("page" === g || "viewport" === g) x.top = x.right = x.bottom = x.left = 0, "page" === g ? (m = b(document.body), x.width = m.width, x.height = m.height) : (x.width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, x.height = window.innerHeight || document.documentElement.clientHeight ||
                                document.body.clientHeight);
                            if (c = u.find(c)[0]) {
                                c = b(c);
                                var O = c.width,
                                    L = c.height;
                                v(t.side) ? (p(), q.left = r.side) : d(t.side) ? (p(), q.left = x.width - O - r.side) : h(t.side) ? (n(), q.top = x.height - L - r.side) : a(t.side) ? (n(), q.top = r.side) : k(t.side) && k(t.part) && (q.left = x.width / 2 - O / 2 + r.side, q.top = x.height / 2 - L / 2 + r.part);
                                q.position = "viewport" === g ? "fixed" : "absolute";
                                return q
                            }
                        }

                        function t(c, m, l, p) {
                            function n() {
                                a(r.part) ? t.top = x.top - w.part : k(r.part) ? t.top = x.top + x.height / 2 - L / 2 + w.part : h(r.part) && (t.top = x.bottom - L + w.part)
                            }

                            function q() {
                                v(r.part) ?
                                    t.left = x.left - w.part : k(r.part) ? t.left = x.left + x.width / 2 - O / 2 + w.part : d(r.part) && (t.left = x.right - O + w.part)
                            }
                            var t = {},
                                r = f(l),
                                w = e(p),
                                x = {};
                            if (m) {
                                m = u.find(m)[0];
                                if (!m) return;
                                x = b(m)
                            }
                            if (c = u.find(c)[0]) {
                                m = b(c);
                                var O = m.width,
                                    L = m.height;
                                c = c.offsetParent || document.body;
                                m = g.getStyle(c, "position");
                                if ("relative" === m || "absolute" === m || "fixed" === m) c = b(c), x.top -= c.top, x.left -= c.left, x.right = x.left + x.width, x.bottom = x.top + x.height;
                                v(r.side) ? (n(), t.left = x.left - O - w.side) : d(r.side) ? (n(), t.left = x.right + w.side) : a(r.side) ? (q(),
                                    t.top = x.top - L - w.side) : h(r.side) ? (q(), t.top = x.bottom + w.side) : k(r.side) && k(r.part) && (t.left = x.left + x.width / 2 - O / 2 + w.part, t.top = x.top + x.height / 2 - L / 2 + w.part);
                                t.position = "absolute";
                                return t
                            }
                        }

                        function p() {
                            function e(a, b) {
                                b = b || "px";
                                var c = ["z-index"],
                                    d = {},
                                    e;
                                for (e in a)
                                    if (a.hasOwnProperty(e)) {
                                        var f = a[e];
                                        X(f) && 0 !== f && !~J(c, e) && (f += b);
                                        d[e] = f
                                    }
                                return d
                            }

                            function m(a, b) {
                                g.updateElementStyle(a, G(b));
                                g.updateElementStyle(a.children[0], G({
                                    width: 0,
                                    height: 0
                                }))
                            }

                            function l(c, e, g, m) {
                                function n(b) {
                                    var e, f = "side" === b ? "part" :
                                        "side";
                                    a(r[b]) || h(r[b]) ? e = t.top - q.height < x && t.bottom + q.height < l.height + x && t.bottom + q.height > x ? "bottom" : t.top + q.height > l.height + x && t.top - q.height > x && t.top - q.height < l.height + x ? "top" : r[b] : d(r[b]) || v(r[b]) ? e = t.right + q.width > l.width + p && t.left - q.width > p && t.left - q.width < l.width + p ? "left" : t.left - q.width < p && t.right + q.width < l.width + p && t.right + q.width > p ? "right" : r[b] : k(r[b]) && (e = a(r[f]) || h(r[f]) ? 0 > c.left ? "right" : c.left + q.width > l.width ? "left" : r[b] : v(r[f]) || d(r[f]) ? 0 > c.top ? "top" : c.top + q.height > l.height ? "bottom" :
                                        r[b] : r[b]);
                                    return e
                                }
                                var l = {
                                        width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                                        height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
                                    },
                                    p = y(window.pageXOffset) ? document.documentElement.scrollLeft : window.pageXOffset,
                                    x = y(window.pageYOffset) ? document.documentElement.scrollTop : window.pageYOffset,
                                    q = P({}, b(g));
                                g = u.find(m)[0];
                                var t = b(g),
                                    r = f(e);
                                c = P({}, c);
                                c.top -= x;
                                c.left -= p;
                                q.top -= x;
                                q.left -= p;
                                q.bottom -= x;
                                q.right -= p;
                                e = n("side");
                                g = n("part");
                                return e + " " + g
                            }
                            var p = c.getContentWrapper(),
                                q = c.options.appearance,
                                w = c.options.appearance.position,
                                A = w.at;
                            var C = {};
                            g.updateElementStyle(p, G({
                                top: 0,
                                left: 0
                            }));
                            if ("page" === w.relativeTo || "viewport" === w.relativeTo) C = r(p, w.relativeTo, A, w.offset), C = e(C);
                            else if (!z(w.relativeTo)) {
                                C = t(p, w.relativeTo, A, w.offset);
                                if (w.viewportDetection) {
                                    var B = l(C, A, p, w.relativeTo);
                                    B !== A && (A = B, C = t(p, w.relativeTo, A, w.offset))
                                }
                                C = e(C)
                            }
                            g.updateElementStyle(p, G(C));
                            (function(k, l, n) {
                                function x(a, b) {
                                    var c = a;
                                    b && 2 * a > b && (c = b - a, c = 0 > c ? 0 :
                                        c);
                                    return c
                                }
                                var r = c.getContent(),
                                    w = c.getPointer(),
                                    O = w && w.children[0],
                                    A = !1,
                                    L = 1,
                                    C = 1,
                                    y = 0,
                                    B = 0,
                                    M = "0 ",
                                    D = {},
                                    Q = {
                                        width: 0,
                                        height: 0,
                                        "border-top": "none",
                                        "border-bottom": "none",
                                        "border-left": "none",
                                        "border-right": "none"
                                    };
                                if (l) {
                                    var E = f(k),
                                        H = b(p);
                                    var R = E.part;
                                    "page" === n || "viewport" === n ? (F(l) ? (n = f(l), k = n.side, R = n.part, A = k !== E.side && k !== E.part) : (k = E.side, l = k + " " + R), C = -1) : (k = {
                                        top: "bottom",
                                        bottom: "top",
                                        left: "right",
                                        right: "left"
                                    }[E.side], l = k + " " + R, L = -1, n = u.find(n)[0], D = b(n));
                                    var z = function(b) {
                                        b = a(b) || h(b) ? "width" : v(b) ||
                                            d(b) ? "height" : void 0;
                                        b = Math.ceil(3 * Math.log(H[b]));
                                        return 7 > b ? 7 : b
                                    }(k);
                                    n = function(a) {
                                        var b = z + "px solid " + q.backgroundColor,
                                            c = z + "px solid transparent";
                                        return P(Q, {
                                            top: {
                                                "border-bottom": b,
                                                "border-left": c,
                                                "border-right": c
                                            },
                                            bottom: {
                                                "border-top": b,
                                                "border-left": c,
                                                "border-right": c
                                            },
                                            right: {
                                                "border-top": c,
                                                "border-bottom": c,
                                                "border-left": b
                                            },
                                            left: {
                                                "border-top": c,
                                                "border-bottom": c,
                                                "border-right": b
                                            }
                                        }[a])
                                    }(k);
                                    g.updateElementStyle(w, G(n));
                                    n = b(w);
                                    E = a(R) || h(R) ? x(n.height, D.height) : 0;
                                    D = v(R) || d(R) ? x(n.width, D.width) :
                                        0;
                                    a(k) ? (B = n.height, M += -D) : h(k) ? (B = n.height * C * L, M += -D) : v(k) ? (y = n.width, M += -E) : d(k) && (y = n.width * C * L, M += -E);
                                    A || I.freeMove(p, y, B);
                                    l = e(t(w, r, l, M));
                                    g.updateElementStyle(w, G(l));
                                    O && (w = O.children[0], l = Math.sqrt(2 * Math.pow(z, 2)), r = {
                                            margin: 0,
                                            padding: 0,
                                            "box-shadow": g.getStyle(r, "box-shadow"),
                                            transform: "rotate(45deg)",
                                            position: "absolute",
                                            "z-index": -1,
                                            width: l,
                                            height: l
                                        }, L = {
                                            position: "absolute",
                                            overflow: "hidden",
                                            top: -z,
                                            left: -z,
                                            width: 2 * n.width,
                                            height: 2 * n.height
                                        }, y = z - l / 2 + n.width / 2, B = -z - n.width / 2, M = z - l / 2 + n.height / 2,
                                        n = -z - n.height / 2, a(k) ? (r.top = 2 * z - l / 2, r.left = y, L.left = B) : h(k) ? (r.top = -l / 2, r.left = y, L.left = B) : v(k) ? (r.top = M, r.left = 2 * z - l / 2, L.top = n) : d(k) && (r.top = M, r.left = -l / 2, L.top = n), g.updateElementStyle(O, G(e(L))), g.updateElementStyle(w, G(e(r))))
                                } else m(w, Q)
                            })(A, w.pointer, w.relativeTo)
                        }

                        function B() {
                            q.isShown() && p()
                        }
                        var I = l("Dom"),
                            g = l("DomPlain"),
                            u = l("QuerySelector"),
                            c = this,
                            q = c.base;
                        c.type = "Callout";
                        c.pointer = null;
                        var C;
                        c.updatePositionEventHandler = function() {
                            C && clearTimeout(C);
                            C = setTimeout(B, 100)
                        };
                        c.mergeWithDefaultWidgetOptions =
                            function(a) {
                                return P({
                                    appearance: {
                                        backgroundColor: "#FFFFFF",
                                        autofit: !0,
                                        position: {
                                            at: "top left",
                                            relativeTo: "viewport"
                                        }
                                    },
                                    displayEvent: {},
                                    closeEvent: {
                                        onDismissButton: !0
                                    },
                                    showFrequency: {
                                        always: !0
                                    }
                                }, a)
                            };
                        c.getPointer = c.wrapperFor("pointer");
                        c.createWidgetDom = function() {
                            c.wrapper = document.createElement("div");
                            c.wrapper.setAttribute(c.selectors.guidAttr, c.options.guid);
                            g.addClass(c.wrapper, c.selectors.wrapper);
                            I.hide(c.wrapper);
                            c.target.appendChild(c.wrapper);
                            c.contentWrapper = document.createElement("div");
                            g.addClass(c.contentWrapper, c.selectors.contentWrapper);
                            c.contentWrapper.innerHTML = c.options.content;
                            c.wrapper.appendChild(c.contentWrapper);
                            I.bringToFront(c.contentWrapper);
                            c.addClassesAndIdContentElements();
                            c.pointer = document.createElement("span");
                            g.addClass(c.pointer, c.selectors.pointer);
                            g.updateElementStyle(c.pointer, G({
                                width: 0,
                                height: 0,
                                margin: 0,
                                padding: 0,
                                display: "inline-block"
                            }));
                            c.contentWrapper.appendChild(c.pointer);
                            var a = document.createElement("div");
                            c.pointerShadow = document.createElement("div");
                            c.pointerShadow.appendChild(a);
                            c.pointer.appendChild(c.pointerShadow);
                            c.bindCloseEvents();
                            c.bindDismissEvents()
                        };
                        c.show = function() {
                            var a = c.getContentWrapper(),
                                b = c.getContent(),
                                d = c.options.appearance,
                                e = {},
                                f = {};
                            f["background-color"] = d.backgroundColor;
                            d.autofit ? (e.display = "inline-block", e.width = "auto", e.height = "auto") : (e.width = d.width, e.height = d.height, f.width = "100%", f.height = "100%");
                            f = P(e, f);
                            g.updateElementStyle(b, G(f));
                            g.updateElementStyle(a, G(e));
                            p();
                            window.addEventListener("resize", c.updatePositionEventHandler);
                            window.addEventListener("scroll", c.updatePositionEventHandler);
                            c.subscribeFunctionOnImgsLoads(p);
                            q.show()
                        };
                        c.init = function() {
                            q.init()
                        };
                        c.init()
                    });
                    a.exports = h
                },
                Widgets: function(a, h, l) {
                    a.config = {
                        singleton: !0
                    };
                    h = h("Class").extend(function() {
                        var a = this;
                        this.createLightbox = function(a, h) {
                            a.guid = h;
                            l("Lightbox", a)
                        };
                        this.createNotification = function(a, h) {
                            a.guid = h;
                            l("Notification", a)
                        };
                        this.createCallout = function(a, h) {
                            a.guid = h;
                            l("Callout", a)
                        };
                        this.getWrapper = function() {
                            return B(a, "createLightbox", "createCallout",
                                "createNotification")
                        }
                    });
                    a.exports = h
                },
                Dlp: function(a, h, l) {
                    a.config = {
                        singleton: !0
                    };
                    var m = h("Class").extend(function(a) {
                        function m(a) {
                            if (a.origin === I) {
                                a = a.data;
                                try {
                                    var b = JSON.parse(a)
                                } catch (C) {
                                    r.log("Can not parse message,\nbecause of: " + C.message + "\nerror with object:", a)
                                }
                                if (b)
                                    if (b.request) try {
                                        b.command && u[b.command](b)
                                    } catch (C) {
                                        r.log('Can not execute "' + b.command + '" request command,\nbecause error occurred: ' + C.message)
                                    } else if (b.error && r.log(b.error), a = p[b.hash]) {
                                        try {
                                            b.error ? a.reject({
                                                error: b.error,
                                                data: b.data
                                            }) : a.resolve(b.data)
                                        } catch (C) {
                                            r.log(C)
                                        }
                                        delete p[b.hash]
                                    }
                            }
                        }

                        function d(a, b) {
                            return {
                                hash: Y(),
                                command: a,
                                data: b
                            }
                        }

                        function k(a) {
                            try {
                                window.parent.postMessage(JSON.stringify(a), I)
                            } catch (C) {
                                r.log("Can not send event through post message,\nbecause of: " + C.message + "\nerror with object:", a);
                                var b = p[a.hash];
                                b && (b.reject({
                                    error: C,
                                    data: void 0
                                }), delete p[a.hash])
                            }
                        }

                        function b(a) {
                            var b = new w;
                            p[a.hash] = b;
                            k(a);
                            return b.promise()
                        }

                        function f(a, b, e) {
                            return function() {
                                for (var c = {}, f = 0; f < e.length; f++) c[e[f]] =
                                    arguments[f];
                                return a(d(b, c))
                            }
                        }
                        var e = this,
                            w = h("Deferred"),
                            t = l("Action"),
                            p = {},
                            y = new w,
                            I = a.dlpOrigin,
                            g = {},
                            u = {
                                console: function(a) {
                                    a = a.data;
                                    r[a.method](a.message)
                                },
                                raiseEvent: function(a) {
                                    g[a.data.handlerHash]()
                                },
                                "Action.sendActions": function(a) {
                                    a = a.data.args;
                                    var b = a[2];
                                    a[2] = function() {
                                        k(d("runCallback", {
                                            handler: b
                                        }))
                                    };
                                    t.sendActions.apply(t, a)
                                }
                            };
                        this.parentReady = function(a) {
                            y.done(fa(a));
                            return "resolved" === y.state()
                        };
                        this.proxy = function(a, e, f) {
                            return function() {
                                var c = {
                                    args: D(arguments),
                                    promised: f
                                };
                                return (f ?
                                    b : k)(d(a + "." + e, c))
                            }
                        };
                        this.trackClicks = function(a, b, e, f) {
                            k(d("Dom.trackClicks", {
                                args: [a, b, e]
                            }))
                        };
                        this.addListener = function(a, b, e) {
                            a = d("Dom.addListener", {
                                selector: a,
                                eventName: b
                            });
                            for (f in g)
                                if (g.hasOwnProperty(f) && g[f] === e) {
                                    var c = f;
                                    break
                                }
                            var f = a.data;
                            c ? f.handlerHash = c : (f.handlerHash = Y(), g[f.handlerHash] = e);
                            k(a)
                        };
                        this.removeListener = function(a, b, e) {
                            a = d("Dom.removeListener", {
                                selector: a,
                                eventName: b
                            });
                            for (var c in g)
                                if (g.hasOwnProperty(c) && g[c] === e) {
                                    a.data.handlerHash = c;
                                    k(a);
                                    break
                                }
                        };
                        this.checkNodeExist =
                            f(b, "checkNodeExist", ["selector"]);
                        this.navigateTo = f(k, "navigateTo", ["url"]);
                        addEventListener ? addEventListener("message", m, !1) : attachEvent("onmessage", m);
                        y = b(d("parentReady"));
                        this.isDlpEnabled = function() {
                            return !0
                        };
                        this.getWrapper = function() {
                            return B(e, "isDlpEnabled")
                        }
                    });
                    a.basic = function() {
                        var a = this;
                        this.getWrapper = function() {
                            return B(a, "isDlpEnabled")
                        };
                        this.isDlpEnabled = function() {
                            return !1
                        }
                    };
                    a.dlp = m
                },
                Modules: function(a, h, l) {
                    var m = h("Class");
                    l = m.extend(function() {
                        var a = this,
                            l = {
                                cgapi: {},
                                campaign: {
                                    alias: "Campaign",
                                    args: ["campaignData"]
                                },
                                site: {
                                    alias: "Site"
                                },
                                renderer: {
                                    alias: "Renderer",
                                    args: ["campaign"]
                                },
                                element: {},
                                html: {},
                                css: {},
                                Deferred: {},
                                when: {},
                                events: {
                                    alias: "Events"
                                },
                                actions: {
                                    alias: "Action"
                                },
                                visitor: {
                                    alias: "Visitor"
                                },
                                modules: {
                                    alias: "Modules"
                                },
                                dom: {
                                    alias: "Dom"
                                },
                                cookies: {
                                    alias: "Cookies"
                                },
                                style: {
                                    alias: "Style"
                                },
                                recommendations: {}
                            },
                            d = [],
                            k = [],
                            b = {};
                        this.define = function(a, b, l) {
                            if (!a || "string" !== typeof a) return r.log("Invalid module alias ( " + a + " )."), this;
                            if (d[a]) return d[a].reserved ? r.log("Reserved name can not be used ( " +
                                a + " ).") : r.log("Module with this alias already defined  ( " + a + " )."), this;
                            "function" === typeof b ? (l = b, b = {}) : "string" === typeof b ? b = {
                                extend: b
                            } : b && "object" === typeof b || (b = {});
                            "undefined" === typeof b.singleton && (b.singleton = !0);
                            "undefined" === typeof b.autoDefine && (b.autoDefine = !0);
                            if ("undefined" !== typeof b.extend && ("string" !== typeof b.extend || !b.extend)) return r.log("Invalid parent alias ( " + b.extend + " )"), this;
                            if (b.extend && (!d[b.extend] || d[b.extend].reserved && !d[b.extend].standard)) return r.log("Parent module is not defined ( " +
                                b.extend + " )"), this;
                            if (!l || "function" !== typeof l) return r.log("Invalid module function ( " + a + " )."), this;
                            if (b.extend) {
                                var e = d[b.extend];
                                if (e.reserved && e.standard) {
                                    var f = h(e.standard);
                                    "undefined" === typeof f.extend && (f = m.extend(f));
                                    var v = e.args
                                } else f = e.func;
                                l = f.extend(l)
                            } else l = m.extend(l);
                            d[a] = {
                                func: l,
                                extend: b.extend,
                                extendArgs: v,
                                reserved: !1,
                                singleton: b.singleton,
                                autoDefine: b.autoDefine
                            };
                            !0 === b.autoDefine && k.push(a);
                            return this
                        };
                        this.require = function(a) {
                            if (a && "string" === typeof a) {
                                var e = d[a];
                                if (e &&
                                    !0 !== e.reserved) {
                                    a = e.instance;
                                    if (!a || !e.singleton)
                                        if (e.extendArgs) {
                                            var f = [];
                                            for (h in e.extendArgs) e.extendArgs.hasOwnProperty(h) && f.push(b[e.extendArgs[h]]);
                                            var k = function() {
                                                k.prototype = e.func.prototype;
                                                return e.func.apply(this, f)
                                            };
                                            a = new k
                                        } else a = new e.func;
                                    if (e.singleton) {
                                        e.instance = a;
                                        var h = {};
                                        var l = a,
                                            m;
                                        for (m in l) l.hasOwnProperty(m) && (h[m] = "function" === typeof l[m] ? function(a) {
                                            return function() {
                                                return l[a].apply(l, arguments)
                                            }
                                        }(m) : l[m]);
                                        a = h
                                    }
                                    return a
                                }
                                r.log("Module is not registered ( " + a + " ).")
                            } else r.log("Invalid module alias ( " +
                                a + " ).")
                        };
                        this.getWrapper = function(d) {
                            d && (b = d);
                            return B(a, "define", "require")
                        };
                        this.mergeInstances = function(b) {
                            b = b || {};
                            for (var d in k)
                                if (k.hasOwnProperty(d)) {
                                    var f = k[d];
                                    b[f] || (b[f] = a.require(f))
                                }
                            return b
                        };
                        (function() {
                            for (var a in l)
                                if (l.hasOwnProperty(a)) {
                                    var b = l[a];
                                    d[a] = b && b.alias ? {
                                        reserved: !0,
                                        standard: b.alias,
                                        args: b.args
                                    } : {
                                        reserved: !0
                                    }
                                }
                        }).call(a)
                    });
                    a.exports = l
                },
                Vcb: function(a, h, l) {
                    a.config = {
                        singleton: !0
                    };
                    h = h("Class").extend(function(a) {
                        var h = this;
                        a = (a = a.vcbParams) || {
                            isVcbActive: !1,
                            maxZindex: 12E5,
                            registerLoop: function() {},
                            useZindex: function() {
                                return !0
                            },
                            registerClickAction: function() {
                                return null
                            }
                        };
                        N(a, function(a, d) {
                            h[d] = a
                        })
                    });
                    a.exports = h
                },
                Recommendations: function(a, h, l) {
                    a.config = {
                        singleton: !1
                    };
                    var m = h("Class").extend(function(a) {
                        var m = this,
                            d = l("CGApi"),
                            k = h("Deferred");
                        this.setCategoryFilter = function(a, f, e) {
                            d.setCategoryFilter(a, f, e);
                            return this
                        };
                        this.setProductFilter = function(a, f, e) {
                            d.setProductFilter(a, f, e);
                            return this
                        };
                        this.requestPage = function(a) {
                            var b = k();
                            d.request({
                                pageId: a
                            }, function(a) {
                                a ?
                                    b.resolve() : b.reject()
                            });
                            return b.promise()
                        };
                        this.getProducts = function() {
                            return T(a)
                        };
                        this.get = function(b, f) {
                            f && d.setProduct(f);
                            var e = k();
                            d.request({
                                pageId: b
                            }, function(b) {
                                b ? e.resolve(T(a)) : e.reject()
                            });
                            return e.promise()
                        };
                        this.getWrapper = function() {
                            return B(m, "setCategoryFilter", "setProductFilter", "requestPage", "getProducts", "get")
                        }
                    });
                    a.exports = m
                }
            };
        mmInitCallback(function(a, h, l) {
            new function(a, h, l, d) {
                function k(a, d, c) {
                    c = c.replace(/[^a-z0-9_]*/gi, "");
                    d = K.mergeInstances(d);
                    if (E(a)) {
                        var e = [];
                        var f = a.toString();
                        f = f.substr(f.indexOf("(") + 1, f.indexOf(")") - f.indexOf("(") - 1).split(",");
                        for (var g, h = 0; h < f.length; h += 1) g = H(f[h]), d.hasOwnProperty(g) ? e.push(d[g]) : (r.warn("CD API: Module not found " + g + " Try to update CD API version."), e.push(void 0));
                        try {
                            a.apply({}, e)
                        } catch (S) {
                            S.message = "Error in " + c + ": " + S.message, r.error(S)
                        }
                    } else b(a, d, c)
                }

                function b(a, b, c) {
                    function e(a) {
                        a.apply({}, g)
                    }
                    var f = [],
                        g = [];
                    E(d.scriptArgumentsWrapper) && (b = d.scriptArgumentsWrapper(b));
                    for (var h in b) b.hasOwnProperty(h) && (f.push(h), g.push(b[h]));
                    a = "function " + c + "(){function inner_" + c + "(" + f.join(",") + "){" + a + "\n} try {\n applier(inner_" + c + ");\n} catch (e) {\ne.message = 'Error in '+scriptName+': ' + e.message;\nconsole.error(e);\n};};\n" + c + "();//# sourceURL=" + c + ".js";
                    try {
                        ia.apply({}, [a, c, e])
                    } catch (S) {
                        S.message = "Error in " + c + ": " + S.message, r.error(S)
                    }
                }

                function f(a) {
                    return "1.25" === a.HighLevelApiVersion
                }

                function e(a) {
                    a = n.require("Renderer", a);
                    a.constructor = void 0;
                    return a
                }

                function m(a) {
                    var b = w();
                    b.modules = K.getWrapper(a);
                    b.campaign = a.campaign.getContext();
                    b.renderer = e(a.campaign);
                    return b
                }

                function t(a) {
                    if (a = G[a]) return a = m({
                        campaign: a
                    }), a = K.mergeInstances(a)
                }

                function p() {
                    var a = v();
                    return a = K.mergeInstances(a)
                }

                function v() {
                    var a = w();
                    a.modules = K.getWrapper({});
                    return a
                }

                function w() {
                    return {
                        site: J.getContext(),
                        Deferred: n.requireClass("Deferred"),
                        when: n.requireClass("When"),
                        events: u.events.getWrapper(),
                        actions: n.require("Action").getWrapper(),
                        visitor: n.require("Visitor").getWrapper(),
                        dom: n.require("Dom").getWrapper(),
                        widgets: n.require("Widgets").getWrapper(),
                        dlp: n.require("Dlp").getWrapper(),
                        cookies: n.require("Cookies").getWrapper(),
                        spa: n.require("Spa").getWrapper(),
                        recommendations: n.require("Recommendations", P).getWrapper()
                    }
                }

                function g(b) {
                    N || (J = n.require("Site"), K = n.require("Modules"), N = !0);
                    if (!d.skipPersistentData)
                        for (var c = b.PersistData || [], e = c.length; e--;) a.setParam(c[e].Name, c[e].Value, a.baseStorage.storeStrategy.persistent, c[e].Expiration);
                    var e, c = [],
                        g = V(b.Campaigns || [], f),
                        h = V(b.Scripts || [], f),
                        l = n.requireClass("Campaign");
                    for (e = 0; e < h.length; e++) c.push({
                        script: h[e]
                    });
                    for (e = 0; e < g.length; e++) {
                        h = g[e].Name;
                        G[h] ? G[h].updateData(g[e]) : G[h] = new l(g[e]);
                        P[h] = G[h].getRecommendations();
                        for (var q = 0; q < g[e].Scripts.length; q++) c.push({
                            script: g[e].Scripts[q],
                            campaign: G[h],
                            campaignData: g[e]
                        })
                    }
                    J.setPageExperiences(b.GenInfo || {});
                    B = b.ServerAttributes;
                    c.sort(function(a, b) {
                        return a.script.Order - b.script.Order
                    });
                    for (e = 0; e < c.length; e++) b = c[e].script.Data, g = c[e].script.Name, (l = c[e].campaign) ? (h = c[e].campaignData, k(b, m(c[e], {
                        campaignData: h,
                        campaign: l
                    }), h.Name + "_" + g)) : k(b, v(), "Site_" +
                        g);
                    d.debug && (d.debug["1.25"] = {
                        context: {
                            getSiteScriptArguments: p,
                            getCampaignScriptArguments: t
                        }
                    })
                }
                d = d || {};
                var u = this,
                    c = [1, 0],
                    q = a.version.split(".");
                if (q[0] < c[0] || q[1] < c[1]) r.log("Loader have non compatible version with High level API.");
                else {
                    var B = {},
                        c = function() {
                            var a = location.search;
                            if (window.parent !== window.self && -1 !== a.indexOf("original-url") && (a = a.replace(/^\?/, "").split("&"), a = W(a, function(a) {
                                    return 0 === a.indexOf("original-url")
                                }))) {
                                try {
                                    var b = decodeURIComponent(a).split("=").slice(1).join("=");
                                    var c = /http(s)?:\/\/.*?([^/]|$)+/.exec(b)[0]
                                } catch (ka) {
                                    return
                                }
                                return c
                            }
                        }(),
                        n = new ha({
                            Engine: u
                        }, l, {
                            isDlpEnabled: !y(c),
                            dlpOrigin: c,
                            vcbParams: d.vcbParams,
                            cookieDomain: a.calcCookieDomain || a.cookie_domain || window.location.hostname.replace(/^www\./i, ""),
                            isBaseStorageSecure: a.baseStorage.isSecure,
                            moduleExtensions: d.moduleExtensions
                        });
                    n.addModule("BaseStorage", function(b) {
                        b.config = {
                            singleton: !1
                        };
                        b.exports = function(b) {
                            return a.baseStorage(b.namespace)
                        }
                    });
                    n.addModule("Engine", function(a) {
                        a.config = {
                            singleton: !0
                        }
                    });
                    var D = n.require("BaseStorage", {
                            namespace: "mmengine"
                        }),
                        z = {
                            persistent: 0,
                            deferredRequest: 1,
                            request: 2,
                            page: 3
                        };
                    this.storeStrategy = z;
                    var F = [];
                    F[z.page] = {};
                    F[z.request] = {};
                    var G = {},
                        J, K, N, P = {};
                    this.setParam = function(b, c, e, f) {
                        if (d.useLoaderStorage) a.setParam(b, c, e, f);
                        else switch (e) {
                            case z.persistent:
                            case z.deferredRequest:
                                a.setParam(b, c, e);
                                break;
                            case z.request:
                            case z.page:
                                F[e][b] = c;
                                break;
                            default:
                                r.log("Unknown store strategy: " + e)
                        }
                    };
                    this.getParam = function(b, c) {
                        if (d.useLoaderStorage) return a.getParam(b, c);
                        switch (c) {
                            case z.persistent:
                            case z.deferredRequest:
                                return a.getParam(b, c);
                            case z.request:
                            case z.page:
                                return F[c][b];
                            default:
                                r.log("Unknown store strategy: " + c)
                        }
                    };
                    this.setData = function(a, b, c) {
                        D.set(a, b, c)
                    };
                    this.getData = function(a) {
                        return D.get(a)
                    };
                    this.clearData = function(a) {
                        D.set(a, null, -1)
                    };
                    this.getServerAttrs = function() {
                        return B
                    };
                    this.CGRequest = function(b) {
                        if (!d.useLoaderStorage) {
                            var c = a.mergeParams(F[z.page], F[z.request]);
                            F[z.request] = {}
                        }
                        a.CGRequest(function(a) {
                            E(b) && b(a)
                        }, c)
                    };
                    this.runElementScript =
                        function(a, b, c, d) {
                            b = a.getElement(b);
                            var f = w();
                            f.modules = K.getWrapper();
                            f.campaign = a.getContext();
                            f.renderer = e(a);
                            f.element = b.clone();
                            f.html = c.html;
                            f.css = c.css;
                            f.recommendations = n.require("Recommendations", P).getWrapper();
                            k(d, f, a.getName() + "_" + b.Name + "_" + b.VariantName)
                        };
                    this.events = n.require("EventsSite");
                    d.skipResponseProcessing || g(h);
                    a.on("response", g)
                }
            }(a, h, ja, l)
        })
    })()
})();