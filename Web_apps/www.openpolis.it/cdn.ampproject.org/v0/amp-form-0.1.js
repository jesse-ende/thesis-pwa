(self.AMP = self.AMP || []).push({
    n: "amp-form",
    ev: "0.1",
    l: true,
    v: "2105150310000",
    m: 0,
    f: (function(AMP, _) {
        'use strict';
        var m;

        function aa(a) {
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

        function ba(a) {
            var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
            return b ? b.call(a) : {
                next: aa(a)
            }
        }
        var ca = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        };

        function da(a) {
            for (var b = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global], c = 0; c < b.length; ++c) {
                var d = b[c];
                if (d && d.Math == Math) return
            }(function() {
                throw Error("Cannot find global object");
            })()
        }
        da(this);
        "function" === typeof Symbol && Symbol("x");
        var fa;
        if ("function" == typeof Object.setPrototypeOf) fa = Object.setPrototypeOf;
        else {
            var ha;
            a: {
                var ia = {
                        a: !0
                    },
                    ja = {};
                try {
                    ja.__proto__ = ia;
                    ha = ja.a;
                    break a
                } catch (a) {}
                ha = !1
            }
            fa = ha ? function(a, b) {
                a.__proto__ = b;
                if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
                return a
            } : null
        }
        var ka = fa;

        function p(a, b) {
            a.prototype = ca(b.prototype);
            a.prototype.constructor = a;
            if (ka) ka(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.Ua = b.prototype
        }
        var la;

        function q() {
            return la ? la : la = Promise.resolve(void 0)
        }

        function ma() {
            var a = this;
            this.promise = new Promise(function(b, c) {
                a.resolve = b;
                a.reject = c
            })
        }

        function na(a) {
            return new Promise(function(b) {
                b(a())
            })
        }

        function oa() {
            this.ba = new ma;
            this.ja = 0
        }
        oa.prototype.add = function(a) {
            var b = this,
                c = ++this.ja;
            a.then(function(d) {
                b.ja === c && b.ba.resolve(d)
            }, function(d) {
                b.ja === c && b.ba.reject(d)
            });
            return this.ba.promise
        };
        oa.prototype.then = function(a, b) {
            return this.ba.promise.then(a, b)
        };

        function pa(a) {
            return a ? Array.prototype.slice.call(a) : []
        }
        var qa = Array.isArray;
        var ra = Object.prototype,
            sa = ra.toString,
            ta = ra.hasOwnProperty;

        function r(a) {
            return a || {}
        }

        function ua(a, b) {
            var c = [],
                d = [];
            for (d.push({
                    t: a,
                    s: b,
                    d: 0
                }); 0 < d.length;) {
                b = d.shift();
                var e = b.t;
                a = b.s;
                var f = b.d;
                if (c.includes(a)) throw Error("Source object has a circular reference.");
                c.push(a);
                if (e !== a)
                    if (10 < f) Object.assign(e, a);
                    else {
                        b = ba(Object.keys(a));
                        for (var g = b.next(); !g.done; g = b.next()) {
                            g = g.value;
                            var h = a[g];
                            if (ta.call(e, g)) {
                                var k = e[g];
                                if ("[object Object]" === sa.call(h) && "[object Object]" === sa.call(k)) {
                                    d.push({
                                        t: k,
                                        s: h,
                                        d: f + 1
                                    });
                                    continue
                                }
                            }
                            e[g] = h
                        }
                    }
            }
        };

        function va(a, b) {
            var c = b = void 0 === b ? "" : b;
            try {
                return decodeURIComponent(a)
            } catch (d) {
                return c
            }
        };
        var wa = /(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;

        function xa(a) {
            var b = Object.create(null);
            if (!a) return b;
            for (var c; c = wa.exec(a);) {
                var d = va(c[1], c[1]);
                c = c[2] ? va(c[2].replace(/\+/g, " "), c[2]) : "";
                b[d] = c
            }
            return b
        };

        function ya(a, b) {
            function c(g) {
                f = null;
                e = a.setTimeout(d, 100);
                b.apply(null, g)
            }

            function d() {
                e = 0;
                f && c(f)
            }
            var e = 0,
                f = null;
            return function(g) {
                for (var h = [], k = 0; k < arguments.length; ++k) h[k - 0] = arguments[k];
                e ? f = h : c(h)
            }
        };
        var t = self.AMP_CONFIG || {},
            za = ("string" == typeof t.cdnProxyRegex ? new RegExp(t.cdnProxyRegex) : t.cdnProxyRegex) || /^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/;

        function Aa(a) {
            if (!self.document || !self.document.head || self.location && za.test(self.location.origin)) return null;
            var b = self.document.head.querySelector('meta[name="' + a + '"]');
            return b && b.getAttribute("content") || null
        }
        var Ba = {
            thirdParty: t.thirdPartyUrl || "https://3p.ampproject.net",
            thirdPartyFrameHost: t.thirdPartyFrameHost || "ampproject.net",
            thirdPartyFrameRegex: ("string" == typeof t.thirdPartyFrameRegex ? new RegExp(t.thirdPartyFrameRegex) : t.thirdPartyFrameRegex) || /^d-\d+\.ampproject\.net$/,
            cdn: t.cdnUrl || Aa("runtime-host") || "https://cdn.ampproject.org",
            cdnProxyRegex: za,
            localhostRegex: /^https?:\/\/localhost(:\d+)?$/,
            errorReporting: t.errorReportingUrl || "https://us-central1-amp-error-reporting.cloudfunctions.net/r",
            betaErrorReporting: t.betaErrorReportingUrl ||
                "https://us-central1-amp-error-reporting.cloudfunctions.net/r-beta",
            localDev: t.localDev || !1,
            trustedViewerHosts: [/(^|\.)google\.(com?|[a-z]{2}|com?\.[a-z]{2}|cat)$/, /(^|\.)gmail\.(com|dev)$/],
            geoApi: t.geoApiUrl || Aa("amp-geo-api")
        };
        self.__AMP_LOG = self.__AMP_LOG || {
            user: null,
            dev: null,
            userForEmbed: null
        };
        var Ca = self.__AMP_LOG;

        function u() {
            if (!Ca.user) throw Error("failed to call initLogConstructor");
            return Ca.user
        }

        function Da() {
            if (Ca.dev) return Ca.dev;
            throw Error("failed to call initLogConstructor");
        }

        function w(a, b, c, d) {
            u().assert(a, b, c, d, void 0, void 0, void 0, void 0, void 0, void 0, void 0)
        };

        function x(a, b) {
            a = a.__AMP_TOP || (a.__AMP_TOP = a);
            return A(a, b)
        }

        function B(a, b) {
            var c = D(a);
            c = E(c);
            return A(c, b)
        }

        function F(a, b) {
            a = D(a);
            a = E(a);
            return Ea(a, b) ? A(a, b) : null
        }

        function Fa(a, b) {
            return Ga(E(a), b)
        }

        function D(a) {
            return a.nodeType ? x((a.ownerDocument || a).defaultView, "ampdoc").getAmpDoc(a) : a
        }

        function E(a) {
            a = D(a);
            return a.isSingleDoc() ? a.win : a
        }

        function A(a, b) {
            Ea(a, b);
            a = Ha(a)[b];
            a.obj || (a.obj = new a.ctor(a.context), a.context = null, a.resolve && a.resolve(a.obj));
            return a.obj
        }

        function Ia(a, b) {
            var c = Ga(a, b);
            if (c) return c;
            a = Ha(a);
            a[b] = Ja();
            return a[b].promise
        }

        function Ga(a, b) {
            var c = Ha(a)[b];
            if (c) {
                if (c.promise) return c.promise;
                A(a, b);
                return c.promise = Promise.resolve(c.obj)
            }
            return null
        }

        function Ha(a) {
            var b = a.__AMP_SERVICES;
            b || (b = a.__AMP_SERVICES = {});
            return b
        }

        function Ea(a, b) {
            a = a.__AMP_SERVICES && a.__AMP_SERVICES[b];
            return !(!a || !a.ctor)
        }

        function Ja() {
            var a = new ma,
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
        var Ka = /(\0)|^(-)$|([\x01-\x1f\x7f]|^-?[0-9])|([\x80-\uffff0-9a-zA-Z_-]+)|[^]/g;

        function La(a, b, c, d, e) {
            return e ? e : b ? "\ufffd" : d ? a.slice(0, -1) + "\\" + a.slice(-1).charCodeAt(0).toString(16) + " " : "\\" + a
        };
        var Ma;

        function Na(a, b) {
            for (var c = [], d = a.parentElement; d; d = d.parentElement) b(d) && c.push(d);
            return c
        }

        function Oa(a) {
            var b = "fieldset";
            /^[\w-]+$/.test(b);
            b = b.toUpperCase();
            return Na(a, function(c) {
                return c.tagName == b
            })
        }

        function G(a, b) {
            for (var c = a.length, d = 0; d < c; d++) b(a[d], d)
        };

        function Pa(a, b, c) {
            var d = Fa(a, b);
            if (d) return d;
            var e = D(a);
            return e.whenExtensionsKnown().then(function() {
                var f = e.getExtensionVersion(c);
                return f ? x(e.win, "extensions").waitForExtension(c, f) : null
            }).then(function(f) {
                return f ? Ia(E(a), b) : null
            })
        };

        function H(a) {
            return B(a, "mutator")
        };
        var Qa, Ra = "Webkit webkit Moz moz ms O o".split(" "),
            Sa = {
                getPropertyPriority: function() {
                    return ""
                },
                getPropertyValue: function() {
                    return ""
                }
            };

        function Ta(a, b, c) {
            var d = a.style;
            if (!b.startsWith("--")) {
                Qa || (Qa = Object.create(null));
                var e = Qa[b];
                if (!e) {
                    e = b;
                    if (void 0 === d[b]) {
                        var f = b.charAt(0).toUpperCase() + b.slice(1);
                        b: {
                            for (var g = 0; g < Ra.length; g++) {
                                var h = Ra[g] + f;
                                if (void 0 !== d[h]) {
                                    f = h;
                                    break b
                                }
                            }
                            f = ""
                        }
                        void 0 !== d[f] && (e = f)
                    }
                    Qa[b] = e
                }
                b = e
            }
            b && (b.startsWith("--") ? a.style.setProperty(b, c) : a.style[b] = c)
        }

        function Ua(a, b) {
            void 0 === b && (b = a.hasAttribute("hidden"));
            b ? a.removeAttribute("hidden") : a.setAttribute("hidden", "")
        };
        var I;

        function Va(a, b, c) {
            var d = a,
                e = c;
            var f = function(h) {
                try {
                    return e(h)
                } catch (k) {
                    throw self.__AMP_REPORT_ERROR(k), k;
                }
            };
            var g = Wa();
            d.addEventListener(b, f, g ? void 0 : !1);
            return function() {
                d && d.removeEventListener(b, f, g ? void 0 : !1);
                f = d = e = null
            }
        }

        function Wa() {
            if (void 0 !== I) return I;
            I = !1;
            try {
                var a = {
                    get capture() {
                        I = !0
                    }
                };
                self.addEventListener("test-options", null, a);
                self.removeEventListener("test-options", null, a)
            } catch (b) {}
            return I
        };

        function Xa(a, b, c, d) {
            var e = {
                detail: c
            };
            Object.assign(e, d);
            if ("function" == typeof a.CustomEvent) return new a.CustomEvent(b, e);
            a = a.document.createEvent("CustomEvent");
            a.initCustomEvent(b, !!e.bubbles, !!e.cancelable, c);
            return a
        }

        function Ya(a, b, c) {
            return Va(a, b, c)
        }

        function Za(a, b) {
            var c = b,
                d = Va(a, "mouseup", function(e) {
                    try {
                        c(e)
                    } finally {
                        c = null, d()
                    }
                });
            return d
        }

        function $a(a) {
            var b, c = new Promise(function(d) {
                b = Za(a, d)
            });
            c.then(b, b);
            return c
        };

        function ab(a) {
            var b = a.getRootNode();
            this.U = b.ownerDocument || b;
            this.j = this.U.defaultView;
            this.ra = B(a, "viewport");
            this.W = [];
            this.W.push(Ya(b, "input", function(e) {
                e = e.target;
                "TEXTAREA" == e.tagName && e.hasAttribute("autoexpand") && bb(e)
            }));
            this.W.push(Ya(b, "mousedown", function(e) {
                1 == e.which && (e = e.target, "TEXTAREA" == e.tagName && cb(e))
            }));
            var c = b.querySelectorAll("textarea");
            this.W.push(Ya(b, "amp:dom-update", function() {
                c = b.querySelectorAll("textarea")
            }));
            var d = ya(this.j, function(e) {
                e.relayoutAll && db(c)
            });
            this.W.push(this.ra.onResize(d));
            eb(c)
        }

        function fb(a) {
            function b() {
                var e = c.querySelector("textarea[autoexpand]");
                e && !d ? d = new ab(a) : !e && d && (d.dispose(), d = null)
            }
            var c = a.getRootNode(),
                d = null;
            Va(c, "amp:dom-update", b);
            b()
        }
        ab.prototype.dispose = function() {
            this.W.forEach(function(a) {
                return a()
            })
        };

        function eb(a) {
            Promise.all(pa(a).map(function(b) {
                return gb(b).then(function(c) {
                    c && (u().warn("AMP-FORM", '"textarea[autoexpand]" with initially scrolling content will not autoexpand.\nSee https://github.com/ampproject/amphtml/issues/20839'), b.removeAttribute("autoexpand"))
                })
            }))
        }

        function gb(a) {
            return H(a).measureElement(function() {
                return a.scrollHeight > a.clientHeight
            })
        }

        function db(a) {
            G(a, function(b) {
                "TEXTAREA" == b.tagName && b.hasAttribute("autoexpand") && bb(b)
            })
        }

        function cb(a) {
            var b = H(a);
            Promise.all([b.measureElement(function() {
                return a.scrollHeight
            }), $a(a)]).then(function(c) {
                var d = c[0],
                    e = 0;
                return b.measureMutateElement(a, function() {
                    e = a.scrollHeight
                }, function() {
                    d != e && a.removeAttribute("autoexpand")
                })
            })
        }

        function bb(a) {
            var b = H(a),
                c = a.ownerDocument.defaultView,
                d = 0,
                e = 0,
                f = 0,
                g = ib(a);
            b.measureMutateElement(a, function() {
                var h = c.getComputedStyle(a) || Sa;
                e = a.scrollHeight;
                var k = parseInt(h.getPropertyValue("max-height"), 10);
                f = isNaN(k) ? Infinity : k;
                d = "content-box" == h.getPropertyValue("box-sizing") ? -parseInt(h.getPropertyValue("padding-top"), 10) + -parseInt(h.getPropertyValue("padding-bottom"), 10) : parseInt(h.getPropertyValue("border-top-width"), 10) + parseInt(h.getPropertyValue("border-bottom-width"), 10)
            }, function() {
                return g.then(function(h) {
                    a.classList.toggle("i-amphtml-textarea-max",
                        h + d > f);
                    var k = "iAmphtmlHasExpanded" in a.dataset,
                        l = /google/i.test(c.navigator.vendor) ? 3 : 0;
                    if (k || e <= h + l) a.dataset.iAmphtmlHasExpanded = "", Ta(a, "height", h + d + "px")
                })
            })
        }

        function ib(a) {
            var b = a.ownerDocument,
                c = b.defaultView,
                d = b.body,
                e = H(a),
                f = a.cloneNode(!1);
            f.classList.add("i-amphtml-textarea-clone");
            var g = 0,
                h = 0,
                k = !1;
            return e.measureMutateElement(d, function() {
                var l = c.getComputedStyle(a) || Sa,
                    n = parseInt(l.getPropertyValue("max-height"), 10);
                g = parseInt(l.getPropertyValue("width"), 10);
                k = isNaN(n) || a.scrollHeight < n
            }, function() {
                k && (a.scrollTop = 0);
                Ta(f, "width", g + "px");
                b.body.appendChild(f)
            }).then(function() {
                return e.measureMutateElement(d, function() {
                    h = f.scrollHeight
                }, function() {
                    f.parentElement &&
                        f.parentElement.removeChild(f)
                })
            }).then(function() {
                return h
            })
        };

        function J(a) {
            for (var b = a.elements, c = {}, d = /^(?:input|select|textarea)$/i, e = /^(?:submit|button|image|file|reset)$/i, f = /^(?:checkbox|radio)$/i, g = {}, h = 0; h < b.length; g = {
                    I: g.I
                }, h++) {
                var k = b[h],
                    l = k,
                    n = l.checked;
                g.I = l.name;
                var v = l.multiple,
                    L = l.options,
                    y = l.tagName,
                    C = l.type;
                l = l.value;
                !g.I || jb(k) || !d.test(y) || e.test(C) || f.test(C) && !n || (void 0 === c[g.I] && (c[g.I] = []), v ? G(L, function(ea) {
                    return function(hb) {
                        hb.selected && c[ea.I].push(hb.value)
                    }
                }(g)) : c[g.I].push(l))
            }
            var z = kb(a);
            z && z.name && (a = z.name, void 0 === c[a] && (c[a] = []), c[z.name].push(z.value));
            Object.keys(c).forEach(function(ea) {
                0 == c[ea].length && delete c[ea]
            });
            return c
        }

        function kb(a) {
            var b = a.elements,
                c = b.length,
                d = a.ownerDocument.activeElement,
                e = null;
            for (a = 0; a < c; a++) {
                var f = b[a],
                    g = f.type;
                if ("BUTTON" == f.tagName || "submit" == g)
                    if (e || (e = f), d == f) return d
            }
            return e
        }

        function jb(a) {
            if (a.disabled) return !0;
            a = Oa(a);
            for (var b = 0; b < a.length; b++)
                if (a[b].disabled) return !0;
            return !1
        }

        function lb(a) {
            switch (a.type) {
                case "select-multiple":
                case "select-one":
                    a = a.options;
                    for (var b = 0; b < a.length; b++)
                        if (a[b].selected !== a[b].defaultSelected) return !1;
                    break;
                case "checkbox":
                case "radio":
                    return a.checked === a.defaultChecked;
                default:
                    return a.value === a.defaultValue
            }
            return !0
        };

        function mb(a, b) {
            return a.hasAttribute("verify-xhr") ? new nb(a, b) : new ob(a)
        }

        function K(a) {
            this.h = a
        }
        K.prototype.onCommit = function() {
            pb(this);
            a: {
                var a = this.h.elements;
                for (var b = 0; b < a.length; b++) {
                    var c = a[b];
                    if (!c.disabled && !lb(c)) {
                        a = !0;
                        break a
                    }
                }
                a = !1
            }
            return a ? this.Ba() : Promise.resolve({
                updatedElements: [],
                errors: []
            })
        };
        K.prototype.Ba = function() {
            return Promise.resolve({
                updatedElements: [],
                errors: []
            })
        };

        function pb(a) {
            (a = a.h.elements) && G(a, function(b) {
                b.setCustomValidity("")
            })
        }

        function ob() {
            K.apply(this, arguments)
        }
        p(ob, K);

        function nb(a, b) {
            this.h = a;
            this.da = b;
            this.Z = null;
            this.ya = []
        }
        p(nb, K);
        nb.prototype.Ba = function() {
            var a = this,
                b = this.da().then(function() {
                    return []
                }, function(c) {
                    return qb(c)
                });
            return rb(this, b).then(function(c) {
                return sb(a, c)
            })
        };

        function rb(a, b) {
            if (!a.Z) {
                a.Z = new oa;
                var c = function() {
                    return a.Z = null
                };
                a.Z.then(c, c)
            }
            return a.Z.add(b)
        }

        function sb(a, b) {
            var c = [],
                d = a.ya;
            a.ya = b;
            for (var e = 0; e < b.length; e++) {
                var f = b[e],
                    g = u().assertString(f.name, "Verification errors must have a name property");
                f = u().assertString(f.message, "Verification errors must have a message property");
                g = u().assertElement(a.h.querySelector('[name="' + g + '"]'), "Verification error name property must match a field name");
                g.checkValidity() && (g.setCustomValidity(f), c.push(g))
            }
            var h = d.filter(function(k) {
                return b.every(function(l) {
                    return k.name !== l.name
                })
            }).map(function(k) {
                return a.h.querySelector('[name="' +
                    k.name + '"]')
            });
            return {
                updatedElements: c.concat(h),
                errors: b
            }
        }

        function qb(a) {
            return (a = a.response) ? a.json().then(function(b) {
                return b.verifyErrors || []
            }, function() {
                return []
            }) : Promise.resolve([])
        };

        function tb(a, b) {
            var c = x(a, "platform");
            return c.isIos() && 11 == c.getMajorVersion() ? new ub(b) : FormData.prototype.entries && FormData.prototype.delete ? new M(b) : new N(b)
        }

        function N(a) {
            this.G = a ? J(a) : Object.create(null)
        }
        N.prototype.append = function(a, b) {
            var c = String(a);
            this.G[c] = this.G[c] || [];
            this.G[c].push(String(b))
        };
        N.prototype.delete = function(a) {
            delete this.G[a]
        };
        N.prototype.entries = function() {
            var a = this,
                b = [];
            Object.keys(this.G).forEach(function(d) {
                a.G[d].forEach(function(e) {
                    return b.push([d, e])
                })
            });
            var c = 0;
            return {
                next: function() {
                    return c < b.length ? {
                        value: b[c++],
                        done: !1
                    } : {
                        value: void 0,
                        done: !0
                    }
                }
            }
        };
        N.prototype.getFormData = function() {
            var a = this,
                b = new FormData;
            Object.keys(this.G).forEach(function(c) {
                a.G[c].forEach(function(d) {
                    return b.append(c, d)
                })
            });
            return b
        };

        function M(a) {
            this.H = new FormData(a);
            a && (a = kb(a)) && a.name && this.append(a.name, a.value)
        }
        M.prototype.append = function(a, b) {
            this.H.append(a, b)
        };
        M.prototype.delete = function(a) {
            this.H.delete(a)
        };
        M.prototype.entries = function() {
            return this.H.entries()
        };
        M.prototype.getFormData = function() {
            return this.H
        };

        function ub(a) {
            M.call(this, a);
            var b = this;
            a && G(a.elements, function(c) {
                "file" == c.type && 0 == c.files.length && (b.H.delete(c.name), b.H.append(c.name, new Blob([]), ""))
            })
        }
        p(ub, M);
        ub.prototype.append = function(a, b, c) {
            b && "object" == typeof b && "" == b.name && 0 == b.size ? this.H.append(a, new Blob([]), c || "") : this.H.append(a, b)
        };
        var vb = {
            INPUT: !0,
            SELECT: !0,
            TEXTAREA: !0
        };

        function wb(a, b) {
            this.h = a;
            this.j = b;
            this.T = 0;
            this.M = Object.create(null);
            this.qa = null;
            this.Da = this.fa = !1;
            this.oa();
            for (a = 0; a < this.h.elements.length; ++a) xb(this, this.h.elements[a]);
            O(this)
        }
        m = wb.prototype;
        m.onSubmitting = function() {
            this.fa = !0;
            O(this)
        };
        m.onSubmitError = function() {
            this.fa = !1;
            O(this)
        };
        m.onSubmitSuccess = function() {
            this.fa = !1;
            this.qa = tb(this.j, this.h).getFormData();
            this.M = Object.create(null);
            this.T = 0;
            O(this)
        };

        function O(a) {
            var b = 0 < a.T && !a.fa;
            if (b !== a.Da) {
                a.h.classList.toggle("amp-form-dirty", b);
                var c = Xa(a.j, "amp:form-dirtiness-change", r({
                    isDirty: b
                }), {
                    bubbles: !0
                });
                a.h.dispatchEvent(c)
            }
            a.Da = b
        }
        m.oa = function() {
            this.h.addEventListener("input", this.xa.bind(this));
            this.h.addEventListener("reset", this.Ja.bind(this));
            this.h.addEventListener("amp:form-value-change", this.xa.bind(this))
        };
        m.xa = function(a) {
            xb(this, a.target);
            O(this)
        };
        m.Ja = function() {
            this.M = Object.create(null);
            this.T = 0;
            O(this)
        };

        function xb(a, b) {
            var c = b.hidden;
            if (vb[b.tagName] && b.name && !c && !jb(b)) {
                a: switch (b.tagName) {
                    case "INPUT":
                        c = "checkbox" == b.type || "radio" == b.type ? !b.checked : !b.value;
                        break a;
                    case "TEXTAREA":
                        c = !b.value;
                        break a;
                    case "SELECT":
                        c = !1;
                        break a;
                    default:
                        throw Error("isFieldEmpty: " + b.tagName + " is not a supported field element.");
                }(c = c || lb(b)) || (a.qa ? (c = b.value, c = a.qa.get(b.name) === c) : c = !1);c ? (b = b.name, a.M[b] && (a.M[b] = !1, --a.T)) : (b = b.name, a.M[b] || (a.M[b] = !0, ++a.T))
            }
        };

        function yb() {
            this.C = null
        }
        m = yb.prototype;
        m.add = function(a) {
            var b = this;
            this.C || (this.C = []);
            this.C.push(a);
            return function() {
                b.remove(a)
            }
        };
        m.remove = function(a) {
            if (this.C) {
                var b = this.C;
                a = b.indexOf(a); - 1 != a && b.splice(a, 1)
            }
        };
        m.removeAll = function() {
            this.C && (this.C.length = 0)
        };
        m.fire = function(a) {
            if (this.C)
                for (var b = ba(this.C), c = b.next(); !c.done; c = b.next()) c = c.value, c(a)
        };
        m.getHandlerCount = function() {
            var a, b;
            return null != (b = null == (a = this.C) ? void 0 : a.length) ? b : 0
        };

        function zb() {
            this.wa = new yb
        }
        zb.prototype.beforeSubmit = function(a) {
            return this.wa.add(a)
        };
        zb.prototype.fire = function(a) {
            this.wa.fire(a)
        };

        function Ab() {
            this.Ga = 100;
            this.ia = this.pa = 0;
            this.aa = Object.create(null)
        }
        Ab.prototype.has = function(a) {
            return !!this.aa[a]
        };
        Ab.prototype.get = function(a) {
            var b = this.aa[a];
            if (b) return b.access = ++this.ia, b.payload
        };
        Ab.prototype.put = function(a, b) {
            this.has(a) || this.pa++;
            this.aa[a] = {
                payload: b,
                access: this.ia
            };
            if (!(this.pa <= this.Ga)) {
                a = this.aa;
                var c = this.ia + 1,
                    d;
                for (d in a) {
                    var e = a[d].access;
                    if (e < c) {
                        c = e;
                        var f = d
                    }
                }
                void 0 !== f && (delete a[f], this.pa--)
            }
        };
        var Bb = r({
                c: !0,
                v: !0,
                a: !0,
                ad: !0
            }),
            Cb, Db, Eb = /[?&]amp_js[^&]*/,
            Fb = /[?&]amp_gsa[^&]*/,
            Gb = /[?&]amp_r[^&]*/,
            Hb = /[?&]amp_kit[^&]*/,
            Ib = /[?&]usqp[^&]*/;

        function P(a) {
            Cb || (Cb = self.document.createElement("a"), Db = self.__AMP_URL_CACHE || (self.__AMP_URL_CACHE = new Ab));
            var b = Db,
                c = Cb;
            if (b && b.has(a)) a = b.get(a);
            else {
                c.href = a;
                c.protocol || (c.href = c.href);
                var d = {
                    href: c.href,
                    protocol: c.protocol,
                    host: c.host,
                    hostname: c.hostname,
                    port: "0" == c.port ? "" : c.port,
                    pathname: c.pathname,
                    search: c.search,
                    hash: c.hash,
                    origin: null
                };
                "/" !== d.pathname[0] && (d.pathname = "/" + d.pathname);
                if ("http:" == d.protocol && 80 == d.port || "https:" == d.protocol && 443 == d.port) d.port = "", d.host = d.hostname;
                d.origin =
                    c.origin && "null" != c.origin ? c.origin : "data:" != d.protocol && d.host ? d.protocol + "//" + d.host : d.href;
                b && b.put(a, d);
                a = d
            }
            return a
        }

        function Jb(a, b, c) {
            if (!b) return a;
            var d = a.split("#", 2),
                e = d[0].split("?", 2),
                f = e[0] + (e[1] ? c ? "?" + b + "&" + e[1] : "?" + e[1] + "&" + b : "?" + b);
            return f += d[1] ? "#" + d[1] : ""
        }

        function Kb(a) {
            var b = [],
                c;
            for (c in a) {
                var d = a[c];
                if (null != d)
                    if (qa(d))
                        for (var e = 0; e < d.length; e++) {
                            var f = d[e];
                            b.push(encodeURIComponent(c) + "=" + encodeURIComponent(f))
                        } else b.push(encodeURIComponent(c) + "=" + encodeURIComponent(d))
            }
            return b.join("&")
        }

        function Lb(a) {
            "string" == typeof a && (a = P(a));
            return Ba.cdnProxyRegex.test(a.origin)
        };
        var Mb = ["GET", "POST"];

        function Q(a, b) {
            this.N = a;
            this.F = b;
            this.La = "amp-form"
        }
        Q.prototype.isEnabled = function() {
            var a = this.N.getAmpDoc();
            return a.isSingleDoc() && a.getRootNode().documentElement.hasAttribute("allow-viewer-render-template") ? this.N.hasCapability("viewerRenderTemplate") : !1
        };
        Q.prototype.assertTrustedViewer = function(a) {
            return this.N.isTrustedViewer().then(function(b) {
                w(b, "Refused to attempt SSR in untrusted viewer: ", a)
            })
        };
        Q.prototype.ssr = function(a, b, c, d) {
            var e = this;
            c = void 0 === c ? null : c;
            d = void 0 === d ? {} : d;
            var f = c,
                g = d,
                h;
            f || (h = this.F.maybeFindTemplate(a));
            return this.assertTrustedViewer(a).then(function() {
                var k = e.N,
                    l = k.sendMessageAwaitResponse,
                    n = h;
                var v = g;
                var L = v = void 0 === v ? {} : v;
                v = r({
                    type: e.La
                });
                (n = f && f.successTemplate ? f.successTemplate : n) && (v.successTemplate = {
                    type: "amp-mustache",
                    payload: n.innerHTML
                });
                (n = f && f.errorTemplate ? f.errorTemplate : null) && (v.errorTemplate = {
                    type: "amp-mustache",
                    payload: n.innerHTML
                });
                L && Object.assign(v,
                    L);
                L = b.xhrUrl;
                var y = b.fetchOpt;
                n = Object.assign({}, y);
                var C = y.body;
                if (C && "function" == typeof C.getFormData) {
                    y = y.body;
                    n.headers["Content-Type"] = "multipart/form-data;charset=utf-8";
                    y = y.entries();
                    C = [];
                    for (var z = y.next(); !z.done; z = y.next()) C.push(z.value);
                    n.body = C
                }
                v = r({
                    originalRequest: {
                        input: L,
                        init: n
                    },
                    ampComponent: v
                });
                return l.call(k, "viewerRenderTemplate", v)
            })
        };
        Q.prototype.applySsrOrCsrTemplate = function(a, b) {
            var c = this;
            if (this.isEnabled()) {
                w("string" === typeof b.html, "Server side html response must be defined");
                var d = this.assertTrustedViewer(a).then(function() {
                    return c.F.findAndSetHtmlForTemplate(a, b.html)
                })
            } else d = qa(b) ? this.F.findAndRenderTemplateArray(a, b) : this.F.findAndRenderTemplate(a, b);
            return d
        };

        function Nb(a, b) {
            this.na = b;
            this.ra = B(a, "viewport");
            this.Ca = x(a.win, "vsync");
            this.la = null;
            this.ka = "";
            this.ga = !1;
            this.L = a.win.document.createElement("div");
            Ua(this.L, !1);
            this.L.classList.add("i-amphtml-validation-bubble");
            this.L.__BUBBLE_OBJ = this;
            a.getBody().appendChild(this.L)
        }
        Nb.prototype.isActiveOn = function(a) {
            return this.ga && a == this.la
        };
        Nb.prototype.hide = function() {
            this.ga && (this.ga = !1, this.la = null, this.ka = "", this.Ca.run({
                measure: void 0,
                mutate: Ob
            }, {
                bubbleElement: this.L
            }))
        };
        Nb.prototype.show = function(a, b) {
            this.isActiveOn(a) && b == this.ka || (this.ga = !0, this.la = a, this.ka = b, this.Ca.run({
                measure: Pb,
                mutate: Qb
            }, {
                message: b,
                targetElement: a,
                bubbleElement: this.L,
                viewport: this.ra,
                id: this.na
            }))
        };

        function Ob(a) {
            a.bubbleElement.removeAttribute("aria-alert");
            a.bubbleElement.removeAttribute("role");
            for (var b = a.bubbleElement; b.firstChild;) b.removeChild(b.firstChild);
            Ua(a.bubbleElement, !1)
        }

        function Pb(a) {
            a.targetRect = a.viewport.getLayoutRect(a.targetElement)
        }

        function Qb(a) {
            for (var b = a.bubbleElement; b.firstChild;) b.removeChild(b.firstChild);
            var c = a.bubbleElement.ownerDocument.createElement("div");
            c.id = "bubble-message-" + a.id;
            c.textContent = a.message;
            a.bubbleElement.setAttribute("aria-labeledby", c.id);
            a.bubbleElement.setAttribute("role", "alert");
            a.bubbleElement.setAttribute("aria-live", "assertive");
            a.bubbleElement.appendChild(c);
            Ua(a.bubbleElement, !0);
            b = a.bubbleElement;
            a = {
                top: a.targetRect.top - 10 + "px",
                left: a.targetRect.left + a.targetRect.width / 2 + "px"
            };
            for (var d in a) Ta(b,
                d, a[d])
        };
        var Rb, Sb, Tb = 0;

        function R(a) {
            this.form = a;
            this.ampdoc = D(a);
            this.mutator = H(a);
            this.root = this.ampdoc.getRootNode();
            this.ea = null
        }
        m = R.prototype;
        m.report = function() {};
        m.onBlur = function() {};
        m.onInput = function() {};
        m.inputs = function() {
            return this.form.querySelectorAll("input,select,textarea")
        };
        m.checkInputValidity = function(a) {
            if ("TEXTAREA" === a.tagName && a.hasAttribute("pattern") && (a.checkValidity() || "Please match the requested format." === a.validationMessage)) {
                var b = a.getAttribute("pattern"),
                    c = (new RegExp("^" + b + "$", "m")).test(a.value);
                a.setCustomValidity(c ? "" : "Please match the requested format.")
            }
            return a.checkValidity()
        };
        m.checkFormValidity = function(a) {
            Ub(this, a);
            return a.checkValidity()
        };
        m.reportFormValidity = function(a) {
            Ub(this, a);
            return a.reportValidity()
        };

        function Ub(a, b) {
            G(b.elements, function(c) {
                "TEXTAREA" == c.tagName && a.checkInputValidity(c)
            })
        }
        m.fireValidityEventIfNecessary = function() {
            var a = this.ea;
            this.ea = this.checkFormValidity(this.form);
            if (a !== this.ea) {
                var b = Xa(this.form.ownerDocument.defaultView, this.ea ? "valid" : "invalid", null, {
                    bubbles: !0
                });
                this.form.dispatchEvent(b)
            }
        };

        function Vb() {
            R.apply(this, arguments)
        }
        p(Vb, R);
        Vb.prototype.report = function() {
            this.reportFormValidity(this.form);
            this.fireValidityEventIfNecessary()
        };

        function S(a) {
            R.call(this, a);
            var b = "i-amphtml-validation-bubble-" + Tb++;
            this.X = new Nb(this.ampdoc, b)
        }
        p(S, R);
        S.prototype.report = function() {
            for (var a = this.inputs(), b = 0; b < a.length; b++)
                if (!this.checkInputValidity(a[b])) {
                    a[b].focus();
                    this.X.show(a[b], a[b].validationMessage);
                    break
                }
            this.fireValidityEventIfNecessary()
        };
        S.prototype.onBlur = function(a) {
            "submit" != a.target.type && this.X.hide()
        };
        S.prototype.onInput = function(a) {
            a = a.target;
            this.X.isActiveOn(a) && (this.checkInputValidity(a) ? (a.removeAttribute("aria-invalid"), this.X.hide()) : (a.setAttribute("aria-invalid", "true"), this.X.show(a, a.validationMessage)))
        };

        function T(a) {
            R.call(this, a);
            this.Oa = this.form.id ? this.form.id : String(Date.now() + Math.floor(100 * Math.random()));
            this.Fa = 0
        }
        p(T, R);
        m = T.prototype;
        m.reportInput = function(a) {
            var b = Wb(a);
            b && this.showValidationFor(a, b)
        };
        m.hideAllValidations = function() {
            for (var a = this.inputs(), b = 0; b < a.length; b++) this.hideValidationFor(a[b])
        };
        m.getValidationFor = function(a, b) {
            if (!a.id) return null;
            var c = a.validationMessage;
            c = "TEXTAREA" === a.tagName && "customError" === b && "Please match the requested format." === c ? "patternMismatch" : b;
            var d = "__AMP_VALIDATION_" + c;
            d in a || (a[d] = this.root.querySelector("[visible-when-invalid=" + c + "][validation-for=" + (a.id + "]")));
            return a[d]
        };
        m.showValidationFor = function(a, b) {
            var c = this.getValidationFor(a, b);
            if (c) {
                c.textContent.trim() || (c.textContent = a.validationMessage);
                a.__AMP_VISIBLE_VALIDATION = c;
                var d = c.getAttribute("id");
                d || (d = "i-amphtml-aria-desc-" + this.Oa + "-" + this.Fa++, c.setAttribute("id", d));
                a.setAttribute("aria-invalid", "true");
                a.setAttribute("aria-describedby", d);
                this.mutator.mutateElement(c, function() {
                    return c.classList.add("visible")
                })
            }
        };
        m.hideValidationFor = function(a) {
            var b = this.getVisibleValidationFor(a);
            b && (delete a.__AMP_VISIBLE_VALIDATION, a.removeAttribute("aria-invalid"), a.removeAttribute("aria-describedby"), this.mutator.mutateElement(b, function() {
                return b.classList.remove("visible")
            }))
        };
        m.getVisibleValidationFor = function(a) {
            return a.__AMP_VISIBLE_VALIDATION
        };
        m.shouldValidateOnInteraction = function() {
            throw Error("Not Implemented");
        };
        m.onInteraction = function(a) {
            a = a.target;
            var b = !!a.checkValidity && this.shouldValidateOnInteraction(a);
            this.hideValidationFor(a);
            b && !this.checkInputValidity(a) && this.reportInput(a)
        };
        m.onBlur = function(a) {
            this.onInteraction(a)
        };
        m.onInput = function(a) {
            this.onInteraction(a)
        };

        function Xb() {
            T.apply(this, arguments)
        }
        p(Xb, T);
        Xb.prototype.report = function() {
            this.hideAllValidations();
            for (var a = this.inputs(), b = 0; b < a.length; b++)
                if (!this.checkInputValidity(a[b])) {
                    this.reportInput(a[b]);
                    a[b].focus();
                    break
                }
            this.fireValidityEventIfNecessary()
        };
        Xb.prototype.shouldValidateOnInteraction = function(a) {
            return !!this.getVisibleValidationFor(a)
        };

        function U() {
            T.apply(this, arguments)
        }
        p(U, T);
        U.prototype.report = function() {
            this.hideAllValidations();
            for (var a = null, b = this.inputs(), c = 0; c < b.length; c++) this.checkInputValidity(b[c]) || (a = a || b[c], this.reportInput(b[c]));
            a && a.focus();
            this.fireValidityEventIfNecessary()
        };
        U.prototype.shouldValidateOnInteraction = function(a) {
            return !!this.getVisibleValidationFor(a)
        };

        function Yb() {
            T.apply(this, arguments)
        }
        p(Yb, T);
        Yb.prototype.shouldValidateOnInteraction = function() {
            return !0
        };
        Yb.prototype.onInteraction = function(a) {
            T.prototype.onInteraction.call(this, a);
            this.fireValidityEventIfNecessary()
        };

        function Zb() {
            U.apply(this, arguments)
        }
        p(Zb, U);
        Zb.prototype.shouldValidateOnInteraction = function() {
            return !0
        };
        Zb.prototype.onInteraction = function(a) {
            U.prototype.onInteraction.call(this, a);
            this.fireValidityEventIfNecessary()
        };

        function $b(a) {
            switch (a.getAttribute("custom-validation-reporting")) {
                case "as-you-go":
                    return new Yb(a);
                case "show-all-on-submit":
                    return new U(a);
                case "interact-and-submit":
                    return new Zb(a);
                case "show-first-on-submit":
                    return new Xb(a)
            }
            a.ownerDocument && void 0 === Rb && (Rb = !!document.createElement("form").reportValidity);
            return Rb ? new Vb(a) : new S(a)
        }

        function Wb(a) {
            var b = ["badInput"];
            for (c in a.validity) b.includes(c) || b.push(c);
            var c = b.filter(function(d) {
                return !0 === a.validity[d]
            });
            return c.length ? c[0] : null
        };

        function ac(a) {
            var b = a.ownerDocument.defaultView;
            b.FormProxy || (b.FormProxy = bc(b));
            var c = new b.FormProxy(a);
            "action" in c || cc(a, c);
            a.$p = c
        }

        function bc(a) {
            function b(f) {
                this.h = f
            }
            var c = b.prototype,
                d = a.Object,
                e = d.prototype;
            [a.HTMLFormElement, a.EventTarget].reduce(function(f, g) {
                for (g = g && g.prototype; g && g !== e && !(0 <= f.indexOf(g));) f.push(g), g = d.getPrototypeOf(g);
                return f
            }, []).forEach(function(f) {
                var g = {},
                    h;
                for (h in f) {
                    g.D = a.Object.getOwnPropertyDescriptor(f, h);
                    if (g.D && h.toUpperCase() != h && !h.startsWith("on") && !e.hasOwnProperty.call(c, h))
                        if ("function" == typeof g.D.value) g.ha = g.D.value, c[h] = function(l) {
                            return function() {
                                return l.ha.apply(this.h,
                                    arguments)
                            }
                        }(g);
                        else {
                            var k = {};
                            g.D.get && (k.get = function(l) {
                                return function() {
                                    return l.D.get.call(this.h)
                                }
                            }(g));
                            g.D.set && (k.set = function(l) {
                                return function(n) {
                                    return l.D.set.call(this.h, n)
                                }
                            }(g));
                            a.Object.defineProperty(c, h, k)
                        }
                    g = {
                        ha: g.ha,
                        D: g.D
                    }
                }
            });
            return b
        }

        function cc(a, b) {
            var c = a.ownerDocument.defaultView.HTMLFormElement.prototype.cloneNode.call(a, !1),
                d = {},
                e;
            for (e in c) {
                d.o = e;
                if (!(d.o in b || d.o.toUpperCase() == d.o || d.o.startsWith("on"))) {
                    d.A = dc[d.o];
                    var f = a[d.o];
                    if (d.A)
                        if (d.A.access == V) {
                            d.P = void 0;
                            if (f && f.nodeType) {
                                var g = c = f,
                                    h = g.nextSibling;
                                g = g.parentNode;
                                g.removeChild(c);
                                try {
                                    d.P = a[d.o]
                                } finally {
                                    g.insertBefore(c, h)
                                }
                            } else d.P = f;
                            Object.defineProperty(b, d.o, {
                                get: function(k) {
                                    return function() {
                                        return k.P
                                    }
                                }(d)
                            })
                        } else d.A.access == W && (d.R = d.A.attr || d.o, Object.defineProperty(b,
                            d.o, {
                                get: function(k) {
                                    return function() {
                                        var l = b.getAttribute(k.R);
                                        return null == l && void 0 !== k.A.def ? k.A.def : k.A.type == ec ? "true" === l : k.A.type == fc ? null != l : k.A.type == gc ? (l = l || "", F(a, "url").parse(l).href) : l
                                    }
                                }(d),
                                set: function(k) {
                                    return function(l) {
                                        k.A.type == fc && (l = l ? "" : null);
                                        null != l ? b.setAttribute(k.R, l) : b.removeAttribute(k.R)
                                    }
                                }(d)
                            }));
                    else Object.defineProperty(b, d.o, {
                        get: function(k) {
                            return function() {
                                return a[k.o]
                            }
                        }(d),
                        set: function(k) {
                            return function(l) {
                                a[k.o] = l
                            }
                        }(d)
                    })
                }
                d = {
                    P: d.P,
                    R: d.R,
                    A: d.A,
                    o: d.o
                }
            }
        }
        var W = 1,
            V = 2,
            gc = 1,
            ec = 2,
            fc = 3,
            dc = {
                acceptCharset: {
                    access: W,
                    attr: "accept-charset"
                },
                accessKey: {
                    access: W,
                    attr: "accesskey"
                },
                action: {
                    access: W,
                    type: gc
                },
                attributes: {
                    access: V
                },
                autocomplete: {
                    access: W,
                    def: "on"
                },
                children: {
                    access: V
                },
                dataset: {
                    access: V
                },
                dir: {
                    access: W
                },
                draggable: {
                    access: W,
                    type: ec,
                    def: !1
                },
                elements: {
                    access: V
                },
                encoding: {
                    access: V
                },
                enctype: {
                    access: W
                },
                hidden: {
                    access: W,
                    type: fc,
                    def: !1
                },
                id: {
                    access: W,
                    def: ""
                },
                lang: {
                    access: W
                },
                localName: {
                    access: V
                },
                method: {
                    access: W,
                    def: "get"
                },
                name: {
                    access: W
                },
                noValidate: {
                    access: W,
                    attr: "novalidate",
                    type: fc,
                    def: !1
                },
                prefix: {
                    access: V
                },
                spellcheck: {
                    access: W
                },
                style: {
                    access: V
                },
                target: {
                    access: W,
                    def: ""
                },
                title: {
                    access: W
                },
                translate: {
                    access: W
                }
            };

        function hc(a, b) {
            var c = a.getHeadNode(),
                d = ic(c, jc(c));
            if (b) {
                var e = a.getRootNode();
                if (kc(e, d)) b(d);
                else var f = setInterval(function() {
                    kc(e, d) && (clearInterval(f), b(d))
                }, 4)
            }
        }

        function ic(a, b) {
            var c = a.__AMP_CSS_SM;
            c || (c = a.__AMP_CSS_SM = Object.create(null));
            var d = lc(a, c, "amp-extension=amp-form");
            if (d) return d.textContent !== b && (d.textContent = b), d;
            var e = (a.ownerDocument || a).createElement("style");
            e.textContent = b;
            var f = null;
            e.setAttribute("amp-extension", "amp-form");
            b = f = lc(a, c, "amp-runtime");
            (b = void 0 === b ? null : b) ? a.insertBefore(e, b.nextSibling): a.insertBefore(e, a.firstChild);
            return c["amp-extension=amp-form"] = e
        }

        function lc(a, b, c) {
            return b[c] ? b[c] : (a = a.querySelector("style[" + c + "]")) ? b[c] = a : null
        }

        function jc(a) {
            return (a = a.__AMP_CSS_TR) ? a('form.amp-form-submit-error [submit-error],form.amp-form-submit-success [submit-success],form.amp-form-submitting [submitting]{display:block}textarea[autoexpand]:not(.i-amphtml-textarea-max){overflow:hidden!important}.i-amphtml-textarea-clone{visibility:hidden;position:absolute;top:-9999px;left:-9999px;height:0!important}.i-amphtml-validation-bubble{transform:translate(-50%,-100%);background-color:#fff;box-shadow:0 5px 15px 0 rgba(0,0,0,0.5);max-width:200px;position:absolute;display:block;box-sizing:border-box;padding:10px;border-radius:5px}.i-amphtml-validation-bubble:after{content:" ";position:absolute;bottom:-8px;left:30px;width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #fff}[visible-when-invalid]{color:red}\n/*# sourceURL=/extensions/amp-form/0.1/amp-form.css*/') : 'form.amp-form-submit-error [submit-error],form.amp-form-submit-success [submit-success],form.amp-form-submitting [submitting]{display:block}textarea[autoexpand]:not(.i-amphtml-textarea-max){overflow:hidden!important}.i-amphtml-textarea-clone{visibility:hidden;position:absolute;top:-9999px;left:-9999px;height:0!important}.i-amphtml-validation-bubble{transform:translate(-50%,-100%);background-color:#fff;box-shadow:0 5px 15px 0 rgba(0,0,0,0.5);max-width:200px;position:absolute;display:block;box-sizing:border-box;padding:10px;border-radius:5px}.i-amphtml-validation-bubble:after{content:" ";position:absolute;bottom:-8px;left:30px;width:0;height:0;border-left:8px solid transparent;border-right:8px solid transparent;border-top:8px solid #fff}[visible-when-invalid]{color:red}\n/*# sourceURL=/extensions/amp-form/0.1/amp-form.css*/'
        }

        function kc(a, b) {
            var c = a.styleSheets;
            for (a = 0; a < c.length; a++)
                if (c[a].ownerNode == b) return !0;
            return !1
        };

        function mc(a) {
            var b = a.documentElement;
            return ["\u26a14email", "amp4email"].some(function(c) {
                return b.hasAttribute(c)
            })
        };

        function nc(a, b, c) {
            c = void 0 === c ? {} : c;
            var d = void 0 === d ? !0 : d;
            var e = c;
            Pa(a, "amp-analytics-instrumentation", "amp-analytics").then(function(f) {
                f && f.triggerEventForTarget(a, b, e, d)
            })
        };

        function oc(a, b) {
            try {
                return JSON.parse(a)
            } catch (c) {
                return null == b || b(c), null
            }
        };
        var pc = ["amp-selector"];

        function qc(a, b) {
            var c = this;
            try {
                ac(a)
            } catch (f) {
                Da().error("amp-form", "form proxy failed to install", f)
            }
            a.__AMP_FORM = this;
            this.na = b;
            this.U = a.ownerDocument;
            this.j = this.U.defaultView;
            this.Na = A(this.j, "timer");
            this.h = a;
            this.B = D(this.h);
            this.ma = null;
            this.Aa = F(this.B, "url-replace");
            this.F = B(this.B, "templates");
            this.sa = x(this.j, "xhr");
            this.S = F(this.B, "action");
            this.va = H(this.B);
            this.N = B(this.B, "viewer");
            this.V = new Q(this.N, this.F);
            this.J = (this.h.getAttribute("method") || "GET").toUpperCase();
            this.Ma = this.h.getAttribute("target");
            this.O = rc(this, "action-xhr");
            this.Sa = rc(this, "verify-xhr");
            this.Ha = sc(this);
            this.za = !this.h.hasAttribute("novalidate");
            this.h.setAttribute("novalidate", "");
            this.za || this.h.setAttribute("amp-novalidate", "");
            this.h.classList.add("i-amphtml-form");
            this.K = "initial";
            b = this.h.elements;
            for (var d = 0; d < b.length; d++) {
                var e = b[d].name;
                w("__amp_source_origin" != e && "__amp_form_verify" != e, "Illegal input name, %s found: %s", e, b[d])
            }
            this.ca = new wb(this.h, this.j);
            this.Y = $b(this.h);
            this.Pa = mb(this.h, function() {
                return tc(c)
            });
            this.S.addToAllowlist("FORM", ["clear", "submit"], ["email"]);
            this.S.installActionHandler(this.h, this.Ea.bind(this));
            this.oa();
            uc(this);
            vc(this);
            this.ta = this.Ka = this.Ra = null;
            Ia(E(a), "form-submit-service").then(function(f) {
                c.ta = f
            });
            this.Ia = this.U && mc(this.U)
        }

        function rc(a, b) {
            var c = a.h.getAttribute(b);
            if (c) {
                var d = F(a.B, "url");
                d.assertHttpsUrl(c, a.h, b);
                w(!d.isProxyOrigin(c), "form %s should not be on AMP CDN: %s", b, a.h)
            }
            return c
        }

        function sc(a) {
            var b = a.h.getAttribute("enctype");
            if ("application/x-www-form-urlencoded" === b || "multipart/form-data" === b) return b;
            null !== b && u().warn("amp-form", "Unexpected enctype: " + b + ". Defaulting to 'multipart/form-data'.");
            return "multipart/form-data"
        }
        m = qc.prototype;
        m.getXssiPrefix = function() {
            return this.h.getAttribute("xssi-prefix")
        };
        m.requestForFormFetch = function(a, b, c, d) {
            var e = r({
                Accept: "application/json"
            });
            if ("GET" == b || "HEAD" == b) {
                wc(this);
                var f = J(this.h);
                d && d.forEach(function(l) {
                    return delete f[l]
                });
                c && ua(f, c);
                var g = Jb(a, Kb(f))
            } else {
                g = a;
                if ("application/x-www-form-urlencoded" === this.Ha) {
                    var h = Kb(J(this.h));
                    e = r({
                        Accept: "application/json",
                        "Content-Type": "application/x-www-form-urlencoded"
                    })
                } else h = tb(this.j, this.h);
                d && d.forEach(function(l) {
                    return h.delete(l)
                });
                for (var k in c) h.append(k, c[k])
            }
            return {
                xhrUrl: g,
                fetchOpt: r({
                    body: h,
                    method: b,
                    credentials: "include",
                    headers: e
                })
            }
        };
        m.setXhrAction = function(a) {
            this.O = a
        };
        m.Ea = function(a) {
            var b = this;
            if (!a.satisfiesTrust(2)) return null;
            if ("submit" == a.method) return xc(this).then(function() {
                return "submitting" != b.K && yc(b) ? zc(b, a.trust, null) : Promise.resolve(null)
            });
            "clear" === a.method && Ac(this);
            return null
        };

        function xc(a) {
            if (a.ma) return a.ma;
            var b = a.h.querySelectorAll(pc.join(",")),
                c = pa(b).map(function(d) {
                    return d.build()
                });
            return a.ma = Bc(a, c, 2E3)
        }
        m.oa = function() {
            var a = this;
            this.B.whenNextVisible().then(function() {
                var b = a.h.querySelector("[autofocus]");
                if (b) try {
                    b.focus()
                } catch (c) {}
            });
            this.h.addEventListener("submit", this.ua.bind(this), !0);
            this.h.addEventListener("blur", function(b) {
                Cc(b.target);
                a.Y.onBlur(b)
            }, !0);
            this.h.addEventListener("amp:form-value-change", function(b) {
                Cc(b.target);
                a.Y.onInput(b)
            }, !0);
            this.V.isEnabled() || this.h.addEventListener("change", function(b) {
                a.Pa.onCommit().then(function(c) {
                    var d = c.errors;
                    c.updatedElements.forEach(Cc);
                    a.Y.onBlur(b);
                    "verifying" === a.K && (d.length ? (X(a, "verify-error"), Y(a, r({
                        verifyErrors: d
                    })).then(function() {
                        Dc(a, "verify-error", d, 2)
                    })) : X(a, "initial"))
                })
            });
            this.h.addEventListener("input", function(b) {
                Cc(b.target);
                a.Y.onInput(b)
            })
        };

        function uc(a) {
            Pa(a.B, "inputmask", "amp-inputmask").then(function(b) {
                b && b.install()
            })
        }

        function Ec(a, b) {
            Fc(a, "Form analytics not supported");
            var c = r({}),
                d = J(a.h),
                e;
            for (e in d) Object.prototype.hasOwnProperty.call(d, e) && (c["formFields[" + e + "]"] = d[e].join(","));
            c.formId = a.h.id;
            try {
                nc(a.h, b, c)
            } catch (f) {
                Da().error("amp-form", "Sending analytics failed:", f)
            }
        }

        function Ac(a) {
            a.h.reset();
            X(a, "initial");
            a.h.classList.remove("user-valid");
            a.h.classList.remove("user-invalid");
            var b = a.h.querySelectorAll(".user-valid, .user-invalid");
            G(b, function(d) {
                d.classList.remove("user-valid");
                d.classList.remove("user-invalid")
            });
            var c = a.h.querySelectorAll(".visible[validation-for]");
            G(c, function(d) {
                d.classList.remove("visible")
            });
            Gc(a.h)
        }
        m.ua = function(a) {
            if ("submitting" == this.K || !yc(this)) return a.stopImmediatePropagation(), a.preventDefault(), Promise.resolve(null);
            (this.O || "POST" == this.J) && a.preventDefault();
            return zc(this, 3, a)
        };

        function zc(a, b, c) {
            try {
                var d = {
                    form: a.h,
                    actionXhrMutator: a.setXhrAction.bind(a)
                };
                a.ta.fire(d)
            } catch (k) {
                Da().error("amp-form", "Form submit service failed: %s", k)
            }
            var e = Hc(a),
                f = a.h.getElementsByClassName("i-amphtml-async-input");
            a.ca.onSubmitting();
            if (!a.O && "GET" == a.J) {
                Fc(a, "Non-XHR GETs not supported.");
                wc(a);
                if (0 === f.length) {
                    for (d = 0; d < e.length; d++) a.Aa.expandInputValueSync(e[d]);
                    Ic(a, !c);
                    a.ca.onSubmitSuccess();
                    return q()
                }
                c && c.preventDefault()
            }
            X(a, "submitting");
            var g = [],
                h = [];
            h.push(Jc(a, e));
            G(f, function(k) {
                var l =
                    Kc(a, k);
                k.classList.contains("i-async-require-action") ? g.push(l) : h.push(l)
            });
            return Promise.all(g).then(function() {
                return Bc(a, h, 1E4).then(function() {
                    if (a.O) var k = Lc(a, b);
                    else "POST" == a.J ? w(!1, "Only XHR based (via action-xhr attribute) submissions are supported for POST requests. %s", a.h) : "GET" == a.J && Ic(a, !0), k = q();
                    return k
                }, function(k) {
                    return Mc(a, k, b)
                })
            }, function(k) {
                return Mc(a, k, b)
            })
        }

        function Mc(a, b, c) {
            var d = {};
            b && b.message && (d.error = b.message);
            return Nc(a, b, d, c)
        }

        function Hc(a) {
            return a.h.querySelectorAll('[type="hidden"][data-amp-replace]')
        }

        function tc(a) {
            if ("submitting" === a.K) return q();
            X(a, "verifying");
            Dc(a, "verify", null, 3);
            return Jc(a, Hc(a)).then(function() {
                return Oc(a)
            })
        }

        function Lc(a, b) {
            if (a.V.isEnabled()) var c = Pc(a, b);
            else Qc(a, b), c = a.da(a.O, a.J).then(function(d) {
                return Rc(a, d, b)
            }, function(d) {
                return Sc(a, d, b)
            });
            return c
        }

        function Pc(a, b) {
            var c = J(a.h);
            return Y(a, c).then(function() {
                return a.S.trigger(a.h, "submit", null, b)
            }).then(function() {
                var d = a.requestForFormFetch(a.O, a.J),
                    e = d.fetchOpt || {};
                var f = e.method;
                void 0 === f ? f = "GET" : (f = f.toUpperCase(), Mb.includes(f));
                e.method = f;
                e.headers = e.headers || r({});
                d.fetchOpt = e;
                f = d.xhrUrl;
                e = (e = d.fetchOpt) || {};
                var g = a.j;
                g = g.origin || P(g.location.href).origin;
                f = P(f).origin;
                g == f && (e.headers = e.headers || {}, e.headers["AMP-Same-Origin"] = "true");
                d.fetchOpt = e;
                f = a.j;
                e = d.xhrUrl;
                if (!1 !== d.fetchOpt.ampCors) {
                    g =
                        P(e);
                    g = xa(g.search);
                    w(!("__amp_source_origin" in g), "Source origin is not allowed in %s", e);
                    f = f.location.href;
                    "string" == typeof f && (f = P(f));
                    if (Lb(f)) {
                        g = f.pathname.split("/");
                        w(Bb[g[1]], "Unknown path prefix in url %s", f.href);
                        var h = g[2],
                            k = "s" == h ? "https://" + decodeURIComponent(g[3]) : "http://" + decodeURIComponent(h);
                        w(0 < k.indexOf("."), "Expected a . in origin %s", k);
                        g.splice(1, "s" == h ? 3 : 2);
                        g = k + g.join("/");
                        h = (h = f.search) && "?" != h ? (h = h.replace(Eb, "").replace(Fb, "").replace(Gb, "").replace(Hb, "").replace(Ib, "").replace(/^[?&]/,
                            "")) ? "?" + h : "" : "";
                        f = g + h + (f.hash || "")
                    } else f = f.href;
                    f = P(f).origin;
                    f = encodeURIComponent("__amp_source_origin") + "=" + encodeURIComponent(f);
                    e = Jb(e, f, void 0)
                }
                d.xhrUrl = e;
                e = a.V;
                f = e.ssr;
                g = a.h;
                var l;
                (h = a.h.querySelector("[submit-success]")) && (l = a.F.maybeFindTemplate(h));
                var n;
                (h = a.h.querySelector("[submit-error]")) && (n = a.F.maybeFindTemplate(h));
                return f.call(e, g, d, {
                    successTemplate: l,
                    errorTemplate: n
                })
            }).then(function(d) {
                return Tc(a, d, b)
            }, function(d) {
                var e = {};
                d && d.message && (e.error = d.message);
                return Nc(a, d, e,
                    b)
            })
        }

        function Tc(a, b, c) {
            var d = b.init,
                e = oc(b.body, function(f) {
                    return u().error("amp-form", "Failed to parse response JSON: %s", f)
                });
            return d && (d = d.status, 300 <= d) ? Nc(a, d, b, c, e) : Uc(a, b, c, e)
        }

        function Qc(a, b) {
            Ec(a, "amp-form-submit");
            var c = J(a.h);
            Y(a, c).then(function() {
                a.S.trigger(a.h, "submit", null, b)
            })
        }

        function Jc(a, b) {
            for (var c = [], d = 0; d < b.length; d++) c.push(a.Aa.expandInputValueAsync(b[d]));
            return Bc(a, c, 100)
        }

        function Kc(a, b) {
            return b.getImpl().then(function(c) {
                return c.getValue()
            }).then(function(c) {
                var d = b.getAttribute("name");
                d = a.h.querySelector("input[name=" + String(d).replace(Ka, La) + "]");
                if (!d) {
                    d = r({
                        name: b.getAttribute("name"),
                        hidden: "true"
                    });
                    var e = a.j.document.createElement("input"),
                        f;
                    for (f in d) e.setAttribute(f, d[f]);
                    d = e
                }
                d.setAttribute("value", c);
                a.h.appendChild(d)
            })
        }

        function Oc(a) {
            var b = pa(a.h.querySelectorAll("[" + "no-verify".replace(Ka, La) + "]")).map(function(d) {
                    return d.name || d.id
                }),
                c = {};
            return a.da(a.Sa, a.J, (c.__amp_form_verify = !0, c), b)
        }
        m.da = function(a, b, c, d) {
            Fc(this, "XHRs should be proxied.");
            a = this.requestForFormFetch(a, b, c, d);
            return this.sa.fetch(a.xhrUrl, a.fetchOpt)
        };

        function Rc(a, b, c) {
            return a.sa.xssiJson(b, a.getXssiPrefix()).then(function(d) {
                return Uc(a, d, c)
            }, function(d) {
                return u().error("amp-form", "Failed to parse response JSON: %s", d)
            }).then(function() {
                Ec(a, "amp-form-submit-success");
                Vc(a, b)
            })
        }

        function Uc(a, b, c, d) {
            X(a, "submit-success");
            return na(function() {
                Y(a, b || {}).then(function() {
                    Dc(a, "submit-success", void 0 === d ? b : d, c - 1);
                    a.ca.onSubmitSuccess()
                })
            })
        }

        function Sc(a, b, c) {
            return (b && b.response ? a.sa.xssiJson(b.response, a.getXssiPrefix()).catch(function() {
                return null
            }) : Promise.resolve(null)).then(function(d) {
                Nc(a, b, d, c);
                Ec(a, "amp-form-submit-error");
                Vc(a, b.response)
            })
        }

        function Nc(a, b, c, d, e) {
            X(a, "submit-error");
            u().error("amp-form", "Form submission failed: %s", b);
            return na(function() {
                Y(a, c).then(function() {
                    Dc(a, "submit-error", void 0 === e ? c : e, d - 1);
                    a.ca.onSubmitError()
                })
            })
        }

        function Ic(a, b) {
            Ec(a, "amp-form-submit");
            b && a.h.submit();
            X(a, "initial")
        }

        function Fc(a, b) {
            var c = a.V.isEnabled();
            w(!1 === c, "[amp-form]: viewerRenderTemplate | %s", b)
        }

        function wc(a) {
            var b = a.h.querySelectorAll("input[type=password],input[type=file]");
            w(0 == b.length, "input[type=password] or input[type=file] may only appear in form[method=post]")
        }

        function yc(a) {
            void 0 === Sb && (Sb = !!a.j.document.createElement("input").checkValidity);
            if (Sb) {
                var b = Wc(a.h);
                if (a.za) return a.Y.report(), b
            }
            return !0
        }

        function Vc(a, b) {
            Fc(a, "Redirects not supported.");
            if (b && b.headers) {
                var c = b.headers.get("AMP-Redirect-To");
                if (c) {
                    w(!a.Ia, "Redirects not supported in AMP4Email.", a.h);
                    w("_blank" != a.Ma, "Redirecting to target=_blank using AMP-Redirect-To is currently not supported, use target=_top instead. %s", a.h);
                    try {
                        var d = F(a.B, "url");
                        d.assertAbsoluteHttpOrHttpsUrl(c);
                        d.assertHttpsUrl(c, "AMP-Redirect-To", "Url")
                    } catch (e) {
                        w(!1, "The `AMP-Redirect-To` header value must be an absolute URL starting with https://. Found %s",
                            c)
                    }
                    B(a.B, "navigation").navigateTo(a.j, c, "AMP-Redirect-To")
                }
            }
        }

        function Dc(a, b, c, d) {
            c = Xa(a.j, "amp-form." + b, r({
                response: c
            }));
            a.S.trigger(a.h, b, c, d)
        }

        function Bc(a, b, c) {
            return Promise.race([Promise.all(b), a.Na.promise(c)])
        }

        function X(a, b) {
            var c = a.K;
            a.h.classList.remove("amp-form-" + c);
            a.h.classList.add("amp-form-" + b);
            var d = a.h.querySelector("[" + c + "]");
            if (d) {
                /^[\w-]+$/.test("i-amphtml-rendered");
                if (void 0 !== Ma) var e = Ma;
                else {
                    try {
                        var f = d.ownerDocument,
                            g = f.createElement("div"),
                            h = f.createElement("div");
                        g.appendChild(h);
                        e = g.querySelector(":scope div") === h
                    } catch (k) {
                        e = !1
                    }
                    e = Ma = e
                }
                e ? d = d.querySelector("> [i-amphtml-rendered]".replace(/^|,/g, "$&:scope ")) : (d.classList.add("i-amphtml-scoped"), e = "> [i-amphtml-rendered]".replace(/^|,/g,
                    "$&.i-amphtml-scoped "), e = d.querySelectorAll(e), d.classList.remove("i-amphtml-scoped"), d = void 0 === e[0] ? null : e[0]);
                d && d.parentElement && d.parentElement.removeChild(d)
            }
            a.K = b
        }

        function Y(a, b) {
            qa(b) && (b = {}, u().warn("amp-form", "Unexpected data type: " + b + ". Expected non JSON array."));
            var c = a.h.querySelector("[" + a.K + "]"),
                d = q();
            if (c) {
                var e = "rendered-message-" + a.na;
                c.setAttribute("role", "alert");
                c.setAttribute("aria-labeledby", e);
                c.setAttribute("aria-live", "assertive");
                a.F.hasTemplate(c) ? d = a.V.applySsrOrCsrTemplate(c, b).then(function(f) {
                    if (qa(f))
                        if (1 === f.length) var g = f[0];
                        else g = document.createElement("div"), f.forEach(function(h) {
                            return g.appendChild(h)
                        });
                    else g = f;
                    g.id = e;
                    g.setAttribute("i-amphtml-rendered",
                        "");
                    return a.va.mutateElement(c, function() {
                        c.appendChild(g);
                        var h = Xa(a.j, "amp:dom-update", null, {
                            bubbles: !0
                        });
                        c.dispatchEvent(h)
                    })
                }) : a.va.mutateElement(c, function() {})
            }
            return d
        }

        function vc(a) {
            if (!Lb(a.j.location) && a.h.hasAttribute("data-initialize-from-url")) {
                var b = ["SELECT", "TEXTAREA"],
                    c = "color date datetime-local email hidden month number range search tel text time url week".split(" "),
                    d = ["checkbox", "radio"],
                    e = function(g, h) {
                        if (!g.hasAttribute("data-amp-replace") && g.hasAttribute("data-allow-initialization")) {
                            h = f[h] || "";
                            var k = g.getAttribute("type") || "text",
                                l = g.tagName;
                            "INPUT" === l ? c.includes(k.toLocaleLowerCase()) ? g.value !== h && (g.value = h) : d.includes(k) && (h = g.value === h, g.checked !==
                                h && (g.checked = h)) : b.includes(l) && g.value !== h && (g.value = h)
                        }
                    },
                    f = xa(a.j.location.search);
                Object.keys(f).forEach(function(g) {
                    var h = a.h.elements[g];
                    h && (h.nodeType === Node.ELEMENT_NODE ? e(h, g) : h.length && G(h, function(k) {
                        return e(k, g)
                    }))
                })
            }
        }
        m.Ta = function() {
            return this.Ka
        };
        m.Va = function() {
            return this.Ra
        };

        function Wc(a) {
            var b = a.querySelectorAll("input,select,textarea,fieldset");
            G(b, function(c) {
                return Z(c)
            });
            return Z(a)
        }

        function Gc(a) {
            var b = document.createElement("input"),
                c = {},
                d;
            for (d in b.validity) {
                c.$ = d;
                var e = a.querySelectorAll("." + String(c.$).replace(Ka, La));
                G(e, function(f) {
                    return function(g) {
                        g.classList.remove(f.$)
                    }
                }(c));
                c = {
                    $: c.$
                }
            }
        }

        function Z(a, b) {
            var c = b = void 0 === b ? !1 : b;
            if (!a.checkValidity) return !0;
            var d = !1;
            var e = a.classList.contains("user-valid") ? "valid" : a.classList.contains("user-invalid") ? "invalid" : "none";
            var f = a.checkValidity();
            "valid" != e && f ? (a.classList.add("user-valid"), a.classList.remove("user-invalid"), d = "invalid" == e) : "invalid" == e || f || (a.classList.add("user-invalid"), a.classList.remove("user-valid"), d = !0);
            if (a.validity)
                for (var g in a.validity) a.classList.toggle(g, a.validity[g]);
            if (c && d) {
                e = Oa(a);
                for (g = 0; g < e.length; g++) Z(e[g]);
                a.form && Z(a.form)
            }
            return f
        }

        function Cc(a) {
            Z(a, !0)
        }

        function Xc(a) {
            this.Qa = Yc(a).then(function() {
                return Zc(a)
            })
        }
        Xc.prototype.whenInitialized = function() {
            return this.Qa
        };

        function Yc(a) {
            var b = new ma;
            hc(a, b.resolve);
            return b.promise
        }

        function Zc(a) {
            return a.whenReady().then(function() {
                var b = a.getRootNode();
                $c(b.querySelectorAll("form"));
                fb(a);
                ad(b);
                bd(b)
            })
        }

        function $c(a) {
            a && G(a, function(b, c) {
                b.__AMP_FORM || new qc(b, "amp-form-" + c)
            })
        }

        function ad(a) {
            a.addEventListener("amp:dom-update", function() {
                $c(a.querySelectorAll("form"))
            })
        }

        function bd(a) {
            a.addEventListener("keydown", function(b) {
                if (!b.defaultPrevented && "Enter" == b.key && (b.ctrlKey || b.metaKey) && "TEXTAREA" === b.target.tagName) {
                    var c = b.target.form,
                        d = c ? c.__AMP_FORM || null : null;
                    d && (d.ua(b), b.preventDefault())
                }
            })
        }(function(a) {
            a.registerServiceForDoc("form-submit-service", zb);
            a.registerServiceForDoc("amp-form", Xc)
        })(self.AMP);
    })
});

//# sourceMappingURL=amp-form-0.1.js.map