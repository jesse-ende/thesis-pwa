(self.AMP = self.AMP || []).push({
    n: "amp-user-notification",
    ev: "0.1",
    l: true,
    v: "2105150310000",
    m: 0,
    f: (function(AMP, _) {
        'use strict';
        var h;

        function k(a) {
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
        var l = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        };

        function m(a) {
            for (var b = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global], c = 0; c < b.length; ++c) {
                var d = b[c];
                if (d && d.Math == Math) return
            }(function() {
                throw Error("Cannot find global object");
            })()
        }
        m(this);
        "function" === typeof Symbol && Symbol("x");
        var n;
        if ("function" == typeof Object.setPrototypeOf) n = Object.setPrototypeOf;
        else {
            var p;
            a: {
                var q = {
                        a: !0
                    },
                    r = {};
                try {
                    r.__proto__ = q;
                    p = r.a;
                    break a
                } catch (a) {}
                p = !1
            }
            n = p ? function(a, b) {
                a.__proto__ = b;
                if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
                return a
            } : null
        }
        var t = n,
            u;

        function v() {
            return u ? u : u = Promise.resolve(void 0)
        }

        function w() {
            var a = this;
            this.promise = new Promise(function(b, c) {
                a.resolve = b;
                a.reject = c
            })
        };

        function x() {
            this.h = 0;
            this.U = v();
            this.S = function() {};
            this.T = function() {}
        }
        x.prototype.onQueueEmpty = function(a) {
            this.S = a;
            0 == this.h && a()
        };
        x.prototype.onQueueNotEmpty = function(a) {
            this.T = a;
            0 < this.h && a()
        };
        x.prototype.registerUI = function(a) {
            var b = this;
            0 == this.h && this.T();
            this.h++;
            var c = this.U.then(function() {
                return a().then(function() {
                    b.h--;
                    0 == b.h && b.S()
                })
            });
            return this.U = c
        };
        var y = Array.isArray;

        function z(a) {
            var b = null,
                c = "";
            var d = arguments;
            var e = "undefined" != typeof Symbol && Symbol.iterator && d[Symbol.iterator];
            d = e ? e.call(d) : {
                next: k(d)
            };
            for (e = d.next(); !e.done; e = d.next())
                if (e = e.value, e instanceof Error && !b) {
                    var f = b = void 0;
                    if (null == (f = Object.getOwnPropertyDescriptor(e, "message")) ? 0 : f.writable) b = e;
                    else {
                        f = e.stack;
                        var g = Error(e.message);
                        for (b in e) g[b] = e[b];
                        g.stack = f;
                        b = g
                    }
                } else c && (c += " "), c += e;
            b ? c && (b.message = c + ": " + b.message) : b = Error(c);
            return b
        }

        function aa(a) {
            var b = z.apply(null, arguments);
            setTimeout(function() {
                var c, d;
                null == (d = (c = self).__AMP_REPORT_ERROR) || d.call(c, b);
                throw b;
            })
        };
        var A = self.AMP_CONFIG || {},
            ba = ("string" == typeof A.cdnProxyRegex ? new RegExp(A.cdnProxyRegex) : A.cdnProxyRegex) || /^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;

        function B(a) {
            if (self.document && self.document.head && (!self.location || !ba.test(self.location.origin))) {
                var b = self.document.head.querySelector('meta[name="' + a + '"]');
                b && b.getAttribute("content")
            }
        }
        A.cdnUrl || B("runtime-host");
        A.geoApiUrl || B("amp-geo-api");
        self.__AMP_LOG = self.__AMP_LOG || {
            user: null,
            dev: null,
            userForEmbed: null
        };
        var C = self.__AMP_LOG;

        function D() {
            if (!C.user) throw Error("failed to call initLogConstructor");
            return C.user
        }

        function E() {
            if (C.dev) return C.dev;
            throw Error("failed to call initLogConstructor");
        }

        function F(a, b, c, d, e) {
            return D().assert(a, b, c, d, e, void 0, void 0, void 0, void 0, void 0, void 0)
        };

        function G(a, b) {
            a = a.__AMP_TOP || (a.__AMP_TOP = a);
            return I(a, b)
        }

        function ca(a) {
            a = J(a);
            a = K(a);
            return L(a, "url-replace") ? I(a, "url-replace") : null
        }

        function J(a) {
            return a.nodeType ? G((a.ownerDocument || a).defaultView, "ampdoc").getAmpDoc(a) : a
        }

        function K(a) {
            a = J(a);
            return a.isSingleDoc() ? a.win : a
        }

        function I(a, b) {
            L(a, b);
            a = M(a)[b];
            a.obj || (a.obj = new a.ctor(a.context), a.context = null, a.resolve && a.resolve(a.obj));
            return a.obj
        }

        function N(a, b) {
            var c = O(a, b);
            if (c) return c;
            a = M(a);
            a[b] = da();
            return a[b].promise
        }

        function O(a, b) {
            var c = M(a)[b];
            if (c) {
                if (c.promise) return c.promise;
                I(a, b);
                return c.promise = Promise.resolve(c.obj)
            }
            return null
        }

        function M(a) {
            var b = a.__AMP_SERVICES;
            b || (b = a.__AMP_SERVICES = {});
            return b
        }

        function L(a, b) {
            a = a.__AMP_SERVICES && a.__AMP_SERVICES[b];
            return !(!a || !a.ctor)
        }

        function da() {
            var a = new w,
                b = a.promise,
                c = a.resolve,
                d = a.reject;
            b.catch(function() {});
            return {
                obj: null,
                promise: b,
                resolve: c,
                reject: d,
                context: null,
                ctor: null
            }
        };
        /*
         https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
        function ea(a) {
            var b = O(K(a), "geo");
            if (b) return b;
            var c = J(a);
            return c.whenExtensionsKnown().then(function() {
                var d = c.getExtensionVersion("amp-geo");
                return d ? G(c.win, "extensions").waitForExtension("amp-geo", d) : null
            }).then(function(d) {
                return d ? O(K(a), "geo") : null
            })
        };

        function P() {
            this.X = 100;
            this.G = this.J = 0;
            this.B = Object.create(null)
        }
        P.prototype.has = function(a) {
            return !!this.B[a]
        };
        P.prototype.get = function(a) {
            var b = this.B[a];
            if (b) return b.access = ++this.G, b.payload
        };
        P.prototype.put = function(a, b) {
            this.has(a) || this.J++;
            this.B[a] = {
                payload: b,
                access: this.G
            };
            if (!(this.J <= this.X)) {
                a = this.B;
                var c = this.G + 1,
                    d;
                for (d in a) {
                    var e = a[d].access;
                    if (e < c) {
                        c = e;
                        var f = d
                    }
                }
                void 0 !== f && (delete a[f], this.J--)
            }
        };
        var Q, R;

        function S(a, b) {
            var c = void 0 === c ? "source" : c;
            F(null != a, "%s %s must be available", b, c);
            var d = a;
            if ("string" == typeof d) {
                Q || (Q = self.document.createElement("a"), R = self.__AMP_URL_CACHE || (self.__AMP_URL_CACHE = new P));
                var e = R,
                    f = Q;
                if (e && e.has(d)) d = e.get(d);
                else {
                    f.href = d;
                    f.protocol || (f.href = f.href);
                    var g = {
                        href: f.href,
                        protocol: f.protocol,
                        host: f.host,
                        hostname: f.hostname,
                        port: "0" == f.port ? "" : f.port,
                        pathname: f.pathname,
                        search: f.search,
                        hash: f.hash,
                        origin: null
                    };
                    "/" !== g.pathname[0] && (g.pathname = "/" + g.pathname);
                    if ("http:" ==
                        g.protocol && 80 == g.port || "https:" == g.protocol && 443 == g.port) g.port = "", g.host = g.hostname;
                    g.origin = f.origin && "null" != f.origin ? f.origin : "data:" != g.protocol && g.host ? g.protocol + "//" + g.host : g.href;
                    e && e.put(d, g);
                    d = g
                }
            }(e = "https:" == d.protocol || "localhost" == d.hostname || "127.0.0.1" == d.hostname) || (d = d.hostname, e = d.length - 10, e = 0 <= e && d.indexOf(".localhost", e) == e);
            F(e || /^(\/\/)/.test(a), '%s %s must start with "https://" or "//" or be relative and served from either https or from localhost. Invalid value: %s', b, c,
                a)
        };

        function T(a) {
            a = AMP.BaseElement.call(this, a) || this;
            a.M = null;
            a.A = null;
            var b = new w;
            a.N = b.promise;
            a.O = b.resolve;
            a.o = null;
            a.I = !1;
            a.D = null;
            a.F = null;
            a.C = null;
            a.j = null;
            a.K = "";
            a.L = null;
            a.W = null;
            return a
        }
        var U = AMP.BaseElement;
        T.prototype = l(U.prototype);
        T.prototype.constructor = T;
        if (t) t(T, U);
        else
            for (var V in U)
                if ("prototype" != V)
                    if (Object.defineProperties) {
                        var W = Object.getOwnPropertyDescriptor(U, V);
                        W && Object.defineProperty(T, V, W)
                    } else T[V] = U[V];
        T.aa = U.prototype;
        h = T.prototype;
        h.isAlwaysFixed = function() {
            return !0
        };
        h.buildCallback = function() {
            var a = this,
                b = this.getAmpDoc();
            this.W = ca(this.element);
            this.L = N(K(this.element), "storage");
            this.A = F(this.element.id, "amp-user-notification should have an id.");
            this.K = "amp-user-notification:" + this.A;
            this.D = this.element.getAttribute("data-show-if-geo");
            this.F = this.element.getAttribute("data-show-if-not-geo");
            (this.j = this.element.getAttribute("data-show-if-href")) && S(this.j, this.element);
            F(1 >= !!this.j + !!this.D + !!this.F, 'Only one "data-show-if-*" attribute allowed');
            this.D &&
                (this.C = X(this, this.D, !0));
            this.F && (this.C = X(this, this.F, !1));
            (this.o = this.element.getAttribute("data-dismiss-href")) && S(this.o, this.element);
            this.element.getAttribute("role") || this.element.setAttribute("role", "alert");
            var c = this.element.getAttribute("data-persist-dismissal");
            this.I = "false" != c && "no" != c;
            this.registerDefaultAction(function() {
                return a.dismiss(!1)
            }, "dismiss");
            this.registerAction("optoutOfCid", function() {
                return fa(a)
            });
            N(K(b), "userNotificationManager").then(function(d) {
                d.registerUserNotification(a.A,
                    a)
            })
        };

        function X(a, b, c) {
            return ea(a.element).then(function(d) {
                F(d, "requires <amp-geo> to use promptIfUnknownForGeoGroup");
                var e = b.split(/,\s*/).filter(function(f) {
                    return 2 == d.isInCountryGroup(f)
                });
                return !(c ? !e.length : e.length)
            })
        }

        function ha(a, b) {
            return a.W.expandUrlAsync(a.j).then(function(c) {
                var d = {
                    elementId: a.A,
                    ampUserId: b
                };
                var e = [];
                for (var f in d) {
                    var g = d[f];
                    if (null != g)
                        if (y(g))
                            for (var H = 0; H < g.length; H++) {
                                var ia = g[H];
                                e.push(encodeURIComponent(f) + "=" + encodeURIComponent(ia))
                            } else e.push(encodeURIComponent(f) + "=" + encodeURIComponent(g))
                }
                e = e.join("&");
                e ? (d = c.split("#", 2), f = d[0].split("?", 2), e = f[0] + (f[1] ? "?" + f[1] + "&" + e : "?" + e), d = e += d[1] ? "#" + d[1] : "") : d = c;
                return d
            })
        }
        h.Y = function(a) {
            var b = this;
            this.M = a;
            return ha(this, a).then(function(c) {
                return G(b.win, "xhr").fetchJson(c, {
                    credentials: "include"
                }).then(function(d) {
                    return d.json()
                })
            })
        };

        function ja(a) {
            var b = a.element.getAttribute("enctype") || "application/json;charset=utf-8",
                c = G(a.win, "xhr");
            c.fetchJson.call(c, a.o, {
                method: "POST",
                credentials: "include",
                body: {
                    elementId: a.A,
                    ampUserId: a.M
                },
                headers: {
                    "Content-Type": b
                }
            })
        }
        h.$ = function(a) {
            F("boolean" == typeof a.showNotification, '`showNotification` should be a boolean. Got "%s" which is of type %s.', a.showNotification, typeof a.showNotification);
            a.showNotification || this.O();
            return Promise.resolve(a.showNotification)
        };

        function fa(a) {
            return N(K(a.element), "cid").then(function(b) {
                return b.optOut()
            }).then(function() {
                return a.dismiss(!1)
            }, function(b) {
                E().error("amp-user-notification", "Failed to opt out of Cid", b);
                a.dismiss(!0)
            })
        }

        function ka(a) {
            return N(K(a.element), "cid").then(function(b) {
                return b.get({
                    scope: "amp-user-notification",
                    createCookieIfNotPresent: !0
                }, v(), a.N)
            })
        }
        h.shouldShow = function() {
            var a = this;
            return this.isDismissed().then(function(b) {
                return b ? !1 : a.j ? ka(a).then(a.Y.bind(a)).then(a.$.bind(a)) : a.C ? a.C : !0
            })
        };
        h.show = function() {
            var a = this.element,
                b = !0;
            void 0 === b && (b = a.hasAttribute("hidden"));
            b ? a.removeAttribute("hidden") : a.setAttribute("hidden", "");
            this.element.classList.add("amp-active");
            this.getViewport().addToFixedLayer(this.element);
            return this.N
        };
        h.isDismissed = function() {
            var a = this;
            return this.I ? this.L.then(function(b) {
                return b.get(a.K)
            }).then(function(b) {
                return !!b
            }, function(b) {
                E().error("amp-user-notification", "Failed to read storage", b);
                return !1
            }) : Promise.resolve(!1)
        };
        h.dismiss = function(a) {
            var b = this;
            this.element.classList.remove("amp-active");
            this.element.classList.add("amp-hidden");
            this.O();
            this.getViewport().removeFromFixedLayer(this.element);
            this.I && !a && this.L.then(function(c) {
                c.set(b.K, !0)
            });
            this.o && ja(this)
        };

        function Y(a) {
            this.ampdoc = a;
            this.V = Object.create(null);
            this.H = Object.create(null);
            this.P = this.ampdoc.whenReady();
            this.R = Promise.all([this.ampdoc.whenFirstVisible(), this.P]);
            this.Z = N(K(this.ampdoc), "notificationUIManager")
        }
        Y.prototype.get = function(a) {
            var b = this;
            this.R.then(function() {
                null == b.ampdoc.getElementById(a) && D().warn("amp-user-notification", "Did not find amp-user-notification element " + a + ".")
            });
            return Z(this, a).promise
        };
        Y.prototype.getNotification = function(a) {
            var b = this;
            return this.P.then(function() {
                return b.V[a]
            })
        };
        Y.prototype.registerUserNotification = function(a, b) {
            var c = this;
            this.V[a] = b;
            var d = Z(this, a);
            return this.R.then(function() {
                return b.shouldShow()
            }).then(function(e) {
                if (e) return c.Z.then(function(f) {
                    return f.registerUI(b.show.bind(b))
                })
            }).then(d.resolve.bind(this, b)).catch(aa.bind(null, "Notification service failed amp-user-notification", a))
        };

        function Z(a, b) {
            if (a.H[b]) return a.H[b];
            var c = new w;
            return a.H[b] = {
                promise: c.promise,
                resolve: c.resolve
            }
        }
        (function(a) {
            a.registerServiceForDoc("userNotificationManager", Y);
            a.registerServiceForDoc("notificationUIManager", x);
            a.registerElement("amp-user-notification", T, "amp-user-notification{position:fixed!important;bottom:0;left:0;overflow:hidden!important;visibility:hidden;background:hsla(0,0%,100%,0.7);z-index:1000;width:100%}amp-user-notification.amp-active{visibility:visible}amp-user-notification.amp-hidden{visibility:hidden}\n/*# sourceURL=/extensions/amp-user-notification/0.1/amp-user-notification.css*/")
        })(self.AMP);
    })
});

//# sourceMappingURL=amp-user-notification-0.1.js.map