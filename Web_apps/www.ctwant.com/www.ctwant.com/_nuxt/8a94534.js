(window.webpackJsonp = window.webpackJsonp || []).push([
    [21], {
        292: function(e, t, i) {
            var n = i(6),
                r = i(97),
                a = i(62),
                s = i(10),
                o = i(23),
                l = i(15),
                d = i(293),
                c = (i(9).Reflect || {}).construct,
                u = l((function() {
                    function e() {}
                    return !(c((function() {}), [], e) instanceof e)
                })),
                p = !l((function() {
                    c((function() {}))
                }));
            n(n.S + n.F * (u || p), "Reflect", {
                construct: function(e, t) {
                    a(e), s(t);
                    var i = arguments.length < 3 ? e : a(arguments[2]);
                    if (p && !u) return c(e, t, i);
                    if (e == i) {
                        switch (t.length) {
                            case 0:
                                return new e;
                            case 1:
                                return new e(t[0]);
                            case 2:
                                return new e(t[0], t[1]);
                            case 3:
                                return new e(t[0], t[1], t[2]);
                            case 4:
                                return new e(t[0], t[1], t[2], t[3])
                        }
                        var n = [null];
                        return n.push.apply(n, t), new(d.apply(e, n))
                    }
                    var l = i.prototype,
                        h = r(o(l) ? l : Object.prototype),
                        v = Function.apply.call(e, h, t);
                    return o(v) ? v : h
                }
            })
        },
        293: function(e, t, i) {
            "use strict";
            var n = i(62),
                r = i(23),
                a = i(151),
                s = [].slice,
                o = {},
                l = function(e, t, i) {
                    if (!(t in o)) {
                        for (var n = [], r = 0; r < t; r++) n[r] = "a[" + r + "]";
                        o[t] = Function("F,a", "return new F(" + n.join(",") + ")")
                    }
                    return o[t](e, i)
                };
            e.exports = Function.bind || function(e) {
                var t = n(this),
                    i = s.call(arguments, 1),
                    o = function() {
                        var n = i.concat(s.call(arguments));
                        return this instanceof o ? l(t, n.length, n) : a(t, n, e)
                    };
                return r(t.prototype) && (o.prototype = t.prototype), o
            }
        },
        294: function(e, t) {
            function i(t) {
                return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? (e.exports = i = function(e) {
                    return typeof e
                }, e.exports.default = e.exports, e.exports.__esModule = !0) : (e.exports = i = function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, e.exports.default = e.exports, e.exports.__esModule = !0), i(t)
            }
            e.exports = i, e.exports.default = e.exports, e.exports.__esModule = !0
        },
        295: function(e, t, i) {
            var n = i(6);
            n(n.S, "Math", {
                sign: i(296)
            })
        },
        296: function(e, t) {
            e.exports = Math.sign || function(e) {
                return 0 == (e = +e) || e != e ? e : e < 0 ? -1 : 1
            }
        },
        301: function(e, t, i) {
            "use strict";
            i.d(t, "a", (function() {
                return we
            })), i.d(t, "b", (function() {
                return me
            })), i.d(t, "c", (function() {
                return se
            }));
            i(292);

            function n(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function r(e, t) {
                return (r = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }
            var a = i(294),
                s = i.n(a);

            function o(e, t) {
                return !t || "object" !== s()(t) && "function" != typeof t ? n(e) : t
            }

            function l(e) {
                return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var d = i(4),
                c = i(100),
                u = i(124),
                p = i(27);
            i(13), i(60), i(41), i(28), i(20), i(76), i(77), i(11), i(16), i(34), i(21), i(99), i(150), i(295), i(63), i(49);

            function h(e) {
                return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
            }

            function v(e, t) {
                void 0 === e && (e = {}), void 0 === t && (t = {}), Object.keys(t).forEach((function(i) {
                    void 0 === e[i] ? e[i] = t[i] : h(t[i]) && h(e[i]) && Object.keys(t[i]).length > 0 && v(e[i], t[i])
                }))
            }
            var f = "undefined" != typeof document ? document : {},
                m = {
                    body: {},
                    addEventListener: function() {},
                    removeEventListener: function() {},
                    activeElement: {
                        blur: function() {},
                        nodeName: ""
                    },
                    querySelector: function() {
                        return null
                    },
                    querySelectorAll: function() {
                        return []
                    },
                    getElementById: function() {
                        return null
                    },
                    createEvent: function() {
                        return {
                            initEvent: function() {}
                        }
                    },
                    createElement: function() {
                        return {
                            children: [],
                            childNodes: [],
                            style: {},
                            setAttribute: function() {},
                            getElementsByTagName: function() {
                                return []
                            }
                        }
                    },
                    createElementNS: function() {
                        return {}
                    },
                    importNode: function() {
                        return null
                    },
                    location: {
                        hash: "",
                        host: "",
                        hostname: "",
                        href: "",
                        origin: "",
                        pathname: "",
                        protocol: "",
                        search: ""
                    }
                };
            v(f, m);
            var g = "undefined" != typeof window ? window : {};
            v(g, {
                document: m,
                navigator: {
                    userAgent: ""
                },
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                },
                history: {
                    replaceState: function() {},
                    pushState: function() {},
                    go: function() {},
                    back: function() {}
                },
                CustomEvent: function() {
                    return this
                },
                addEventListener: function() {},
                removeEventListener: function() {},
                getComputedStyle: function() {
                    return {
                        getPropertyValue: function() {
                            return ""
                        }
                    }
                },
                Image: function() {},
                Date: function() {},
                screen: {},
                setTimeout: function() {},
                clearTimeout: function() {},
                matchMedia: function() {
                    return {}
                }
            });
            var w = function e(t) {
                Object(c.a)(this, e);
                for (var i = 0; i < t.length; i += 1) this[i] = t[i];
                return this.length = t.length, this
            };

            function T(e, t) {
                var i = [],
                    n = 0;
                if (e && !t && e instanceof w) return e;
                if (e)
                    if ("string" == typeof e) {
                        var r, a, s = e.trim();
                        if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
                            var o = "div";
                            for (0 === s.indexOf("<li") && (o = "ul"), 0 === s.indexOf("<tr") && (o = "tbody"), 0 !== s.indexOf("<td") && 0 !== s.indexOf("<th") || (o = "tr"), 0 === s.indexOf("<tbody") && (o = "table"), 0 === s.indexOf("<option") && (o = "select"), (a = f.createElement(o)).innerHTML = s, n = 0; n < a.childNodes.length; n += 1) i.push(a.childNodes[n])
                        } else
                            for (r = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || f).querySelectorAll(e.trim()) : [f.getElementById(e.trim().split("#")[1])], n = 0; n < r.length; n += 1) r[n] && i.push(r[n])
                    } else if (e.nodeType || e === g || e === f) i.push(e);
                else if (e.length > 0 && e[0].nodeType)
                    for (n = 0; n < e.length; n += 1) i.push(e[n]);
                return new w(i)
            }

            function y(e) {
                for (var t = [], i = 0; i < e.length; i += 1) - 1 === t.indexOf(e[i]) && t.push(e[i]);
                return t
            }
            T.fn = w.prototype, T.Class = w, T.Dom7 = w;
            "resize scroll".split(" ");

            function S(e) {
                var t = function() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var i, n = l(e);
                    if (t) {
                        var r = l(this).constructor;
                        i = Reflect.construct(n, arguments, r)
                    } else i = n.apply(this, arguments);
                    return o(this, i)
                }
            }
            var b = {
                addClass: function(e) {
                    if (void 0 === e) return this;
                    for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                        for (var n = 0; n < this.length; n += 1) void 0 !== this[n] && void 0 !== this[n].classList && this[n].classList.add(t[i]);
                    return this
                },
                removeClass: function(e) {
                    for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                        for (var n = 0; n < this.length; n += 1) void 0 !== this[n] && void 0 !== this[n].classList && this[n].classList.remove(t[i]);
                    return this
                },
                hasClass: function(e) {
                    return !!this[0] && this[0].classList.contains(e)
                },
                toggleClass: function(e) {
                    for (var t = e.split(" "), i = 0; i < t.length; i += 1)
                        for (var n = 0; n < this.length; n += 1) void 0 !== this[n] && void 0 !== this[n].classList && this[n].classList.toggle(t[i]);
                    return this
                },
                attr: function(e, t) {
                    if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                    for (var i = 0; i < this.length; i += 1)
                        if (2 === arguments.length) this[i].setAttribute(e, t);
                        else
                            for (var n in e) this[i][n] = e[n], this[i].setAttribute(n, e[n]);
                    return this
                },
                removeAttr: function(e) {
                    for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
                    return this
                },
                data: function(e, t) {
                    var i;
                    if (void 0 !== t) {
                        for (var n = 0; n < this.length; n += 1)(i = this[n]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[e] = t;
                        return this
                    }
                    if (i = this[0]) {
                        if (i.dom7ElementDataStorage && e in i.dom7ElementDataStorage) return i.dom7ElementDataStorage[e];
                        var r = i.getAttribute("data-".concat(e));
                        return r || void 0
                    }
                },
                transform: function(e) {
                    for (var t = 0; t < this.length; t += 1) {
                        var i = this[t].style;
                        i.webkitTransform = e, i.transform = e
                    }
                    return this
                },
                transition: function(e) {
                    "string" != typeof e && (e = "".concat(e, "ms"));
                    for (var t = 0; t < this.length; t += 1) {
                        var i = this[t].style;
                        i.webkitTransitionDuration = e, i.transitionDuration = e
                    }
                    return this
                },
                on: function() {
                    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                    var n = t[0],
                        r = t[1],
                        a = t[2],
                        s = t[3];

                    function o(e) {
                        var t = e.target;
                        if (t) {
                            var i = e.target.dom7EventData || [];
                            if (i.indexOf(e) < 0 && i.unshift(e), T(t).is(r)) a.apply(t, i);
                            else
                                for (var n = T(t).parents(), s = 0; s < n.length; s += 1) T(n[s]).is(r) && a.apply(n[s], i)
                        }
                    }

                    function l(e) {
                        var t = e && e.target && e.target.dom7EventData || [];
                        t.indexOf(e) < 0 && t.unshift(e), a.apply(this, t)
                    }
                    "function" == typeof t[1] && (n = t[0], a = t[1], s = t[2], r = void 0), s || (s = !1);
                    for (var d, c = n.split(" "), u = 0; u < this.length; u += 1) {
                        var p = this[u];
                        if (r)
                            for (d = 0; d < c.length; d += 1) {
                                var h = c[d];
                                p.dom7LiveListeners || (p.dom7LiveListeners = {}), p.dom7LiveListeners[h] || (p.dom7LiveListeners[h] = []), p.dom7LiveListeners[h].push({
                                    listener: a,
                                    proxyListener: o
                                }), p.addEventListener(h, o, s)
                            } else
                                for (d = 0; d < c.length; d += 1) {
                                    var v = c[d];
                                    p.dom7Listeners || (p.dom7Listeners = {}), p.dom7Listeners[v] || (p.dom7Listeners[v] = []), p.dom7Listeners[v].push({
                                        listener: a,
                                        proxyListener: l
                                    }), p.addEventListener(v, l, s)
                                }
                    }
                    return this
                },
                off: function() {
                    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                    var n = t[0],
                        r = t[1],
                        a = t[2],
                        s = t[3];
                    "function" == typeof t[1] && (n = t[0], a = t[1], s = t[2], r = void 0), s || (s = !1);
                    for (var o = n.split(" "), l = 0; l < o.length; l += 1)
                        for (var d = o[l], c = 0; c < this.length; c += 1) {
                            var u = this[c],
                                p = void 0;
                            if (!r && u.dom7Listeners ? p = u.dom7Listeners[d] : r && u.dom7LiveListeners && (p = u.dom7LiveListeners[d]), p && p.length)
                                for (var h = p.length - 1; h >= 0; h -= 1) {
                                    var v = p[h];
                                    a && v.listener === a || a && v.listener && v.listener.dom7proxy && v.listener.dom7proxy === a ? (u.removeEventListener(d, v.proxyListener, s), p.splice(h, 1)) : a || (u.removeEventListener(d, v.proxyListener, s), p.splice(h, 1))
                                }
                        }
                    return this
                },
                trigger: function() {
                    for (var e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                    for (var n = t[0].split(" "), r = t[1], a = 0; a < n.length; a += 1)
                        for (var s = n[a], o = 0; o < this.length; o += 1) {
                            var l = this[o],
                                d = void 0;
                            try {
                                d = new g.CustomEvent(s, {
                                    detail: r,
                                    bubbles: !0,
                                    cancelable: !0
                                })
                            } catch (e) {
                                (d = f.createEvent("Event")).initEvent(s, !0, !0), d.detail = r
                            }
                            l.dom7EventData = t.filter((function(e, t) {
                                return t > 0
                            })), l.dispatchEvent(d), l.dom7EventData = [], delete l.dom7EventData
                        }
                    return this
                },
                transitionEnd: function(e) {
                    var t, i = ["webkitTransitionEnd", "transitionend"],
                        n = this;

                    function r(a) {
                        if (a.target === this)
                            for (e.call(this, a), t = 0; t < i.length; t += 1) n.off(i[t], r)
                    }
                    if (e)
                        for (t = 0; t < i.length; t += 1) n.on(i[t], r);
                    return this
                },
                outerWidth: function(e) {
                    if (this.length > 0) {
                        if (e) {
                            var t = this.styles();
                            return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                        }
                        return this[0].offsetWidth
                    }
                    return null
                },
                outerHeight: function(e) {
                    if (this.length > 0) {
                        if (e) {
                            var t = this.styles();
                            return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                        }
                        return this[0].offsetHeight
                    }
                    return null
                },
                offset: function() {
                    if (this.length > 0) {
                        var e = this[0],
                            t = e.getBoundingClientRect(),
                            i = f.body,
                            n = e.clientTop || i.clientTop || 0,
                            r = e.clientLeft || i.clientLeft || 0,
                            a = e === g ? g.scrollY : e.scrollTop,
                            s = e === g ? g.scrollX : e.scrollLeft;
                        return {
                            top: t.top + a - n,
                            left: t.left + s - r
                        }
                    }
                    return null
                },
                css: function(e, t) {
                    var i;
                    if (1 === arguments.length) {
                        if ("string" != typeof e) {
                            for (i = 0; i < this.length; i += 1)
                                for (var n in e) this[i].style[n] = e[n];
                            return this
                        }
                        if (this[0]) return g.getComputedStyle(this[0], null).getPropertyValue(e)
                    }
                    if (2 === arguments.length && "string" == typeof e) {
                        for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
                        return this
                    }
                    return this
                },
                each: function(e) {
                    if (!e) return this;
                    for (var t = 0; t < this.length; t += 1)
                        if (!1 === e.call(this[t], t, this[t])) return this;
                    return this
                },
                html: function(e) {
                    if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
                    for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
                    return this
                },
                text: function(e) {
                    if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
                    for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
                    return this
                },
                is: function(e) {
                    var t, i, n = this[0];
                    if (!n || void 0 === e) return !1;
                    if ("string" == typeof e) {
                        if (n.matches) return n.matches(e);
                        if (n.webkitMatchesSelector) return n.webkitMatchesSelector(e);
                        if (n.msMatchesSelector) return n.msMatchesSelector(e);
                        for (t = T(e), i = 0; i < t.length; i += 1)
                            if (t[i] === n) return !0;
                        return !1
                    }
                    if (e === f) return n === f;
                    if (e === g) return n === g;
                    if (e.nodeType || e instanceof w) {
                        for (t = e.nodeType ? [e] : e, i = 0; i < t.length; i += 1)
                            if (t[i] === n) return !0;
                        return !1
                    }
                    return !1
                },
                index: function() {
                    var e, t = this[0];
                    if (t) {
                        for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                        return e
                    }
                },
                eq: function(e) {
                    if (void 0 === e) return this;
                    var t, i = this.length;
                    return new w(e > i - 1 ? [] : e < 0 ? (t = i + e) < 0 ? [] : [this[t]] : [this[e]])
                },
                append: function() {
                    for (var e, t = 0; t < arguments.length; t += 1) {
                        e = t < 0 || arguments.length <= t ? void 0 : arguments[t];
                        for (var i = 0; i < this.length; i += 1)
                            if ("string" == typeof e) {
                                var n = f.createElement("div");
                                for (n.innerHTML = e; n.firstChild;) this[i].appendChild(n.firstChild)
                            } else if (e instanceof w)
                            for (var r = 0; r < e.length; r += 1) this[i].appendChild(e[r]);
                        else this[i].appendChild(e)
                    }
                    return this
                },
                prepend: function(e) {
                    var t, i;
                    for (t = 0; t < this.length; t += 1)
                        if ("string" == typeof e) {
                            var n = f.createElement("div");
                            for (n.innerHTML = e, i = n.childNodes.length - 1; i >= 0; i -= 1) this[t].insertBefore(n.childNodes[i], this[t].childNodes[0])
                        } else if (e instanceof w)
                        for (i = 0; i < e.length; i += 1) this[t].insertBefore(e[i], this[t].childNodes[0]);
                    else this[t].insertBefore(e, this[t].childNodes[0]);
                    return this
                },
                next: function(e) {
                    return this.length > 0 ? e ? this[0].nextElementSibling && T(this[0].nextElementSibling).is(e) ? new w([this[0].nextElementSibling]) : new w([]) : this[0].nextElementSibling ? new w([this[0].nextElementSibling]) : new w([]) : new w([])
                },
                nextAll: function(e) {
                    var t = [],
                        i = this[0];
                    if (!i) return new w([]);
                    for (; i.nextElementSibling;) {
                        var n = i.nextElementSibling;
                        e ? T(n).is(e) && t.push(n) : t.push(n), i = n
                    }
                    return new w(t)
                },
                prev: function(e) {
                    if (this.length > 0) {
                        var t = this[0];
                        return e ? t.previousElementSibling && T(t.previousElementSibling).is(e) ? new w([t.previousElementSibling]) : new w([]) : t.previousElementSibling ? new w([t.previousElementSibling]) : new w([])
                    }
                    return new w([])
                },
                prevAll: function(e) {
                    var t = [],
                        i = this[0];
                    if (!i) return new w([]);
                    for (; i.previousElementSibling;) {
                        var n = i.previousElementSibling;
                        e ? T(n).is(e) && t.push(n) : t.push(n), i = n
                    }
                    return new w(t)
                },
                parent: function(e) {
                    for (var t = [], i = 0; i < this.length; i += 1) null !== this[i].parentNode && (e ? T(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
                    return T(y(t))
                },
                parents: function(e) {
                    for (var t = [], i = 0; i < this.length; i += 1)
                        for (var n = this[i].parentNode; n;) e ? T(n).is(e) && t.push(n) : t.push(n), n = n.parentNode;
                    return T(y(t))
                },
                closest: function(e) {
                    var t = this;
                    return void 0 === e ? new w([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
                },
                find: function(e) {
                    for (var t = [], i = 0; i < this.length; i += 1)
                        for (var n = this[i].querySelectorAll(e), r = 0; r < n.length; r += 1) t.push(n[r]);
                    return new w(t)
                },
                children: function(e) {
                    for (var t = [], i = 0; i < this.length; i += 1)
                        for (var n = this[i].childNodes, r = 0; r < n.length; r += 1) e ? 1 === n[r].nodeType && T(n[r]).is(e) && t.push(n[r]) : 1 === n[r].nodeType && t.push(n[r]);
                    return new w(y(t))
                },
                filter: function(e) {
                    for (var t = [], i = this, n = 0; n < i.length; n += 1) e.call(i[n], n, i[n]) && t.push(i[n]);
                    return new w(t)
                },
                remove: function() {
                    for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                    return this
                },
                add: function() {
                    for (var e, t, i = this, n = arguments.length, r = new Array(n), a = 0; a < n; a++) r[a] = arguments[a];
                    for (e = 0; e < r.length; e += 1) {
                        var s = T(r[e]);
                        for (t = 0; t < s.length; t += 1) i[i.length] = s[t], i.length += 1
                    }
                    return i
                },
                styles: function() {
                    return this[0] ? g.getComputedStyle(this[0], null) : {}
                }
            };
            Object.keys(b).forEach((function(e) {
                T.fn[e] = T.fn[e] || b[e]
            }));
            var E = {
                    deleteProps: function(e) {
                        var t = e;
                        Object.keys(t).forEach((function(e) {
                            try {
                                t[e] = null
                            } catch (e) {}
                            try {
                                delete t[e]
                            } catch (e) {}
                        }))
                    },
                    nextTick: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        return setTimeout(e, t)
                    },
                    now: function() {
                        return Date.now()
                    },
                    getTranslate: function(e) {
                        var t, i, n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "x",
                            a = g.getComputedStyle(e, null);
                        return g.WebKitCSSMatrix ? ((i = a.transform || a.webkitTransform).split(",").length > 6 && (i = i.split(", ").map((function(e) {
                            return e.replace(",", ".")
                        })).join(", ")), n = new g.WebKitCSSMatrix("none" === i ? "" : i)) : t = (n = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === r && (i = g.WebKitCSSMatrix ? n.m41 : 16 === t.length ? parseFloat(t[12]) : parseFloat(t[4])), "y" === r && (i = g.WebKitCSSMatrix ? n.m42 : 16 === t.length ? parseFloat(t[13]) : parseFloat(t[5])), i || 0
                    },
                    parseUrlQuery: function(e) {
                        var t, i, n, r, a = {},
                            s = e || g.location.href;
                        if ("string" == typeof s && s.length)
                            for (r = (i = (s = s.indexOf("?") > -1 ? s.replace(/\S*\?/, "") : "").split("&").filter((function(e) {
                                    return "" !== e
                                }))).length, t = 0; t < r; t += 1) n = i[t].replace(/#\S+/g, "").split("="), a[decodeURIComponent(n[0])] = void 0 === n[1] ? void 0 : decodeURIComponent(n[1]) || "";
                        return a
                    },
                    isObject: function(e) {
                        return "object" === Object(p.a)(e) && null !== e && e.constructor && e.constructor === Object
                    },
                    extend: function() {
                        for (var e = Object(arguments.length <= 0 ? void 0 : arguments[0]), t = 1; t < arguments.length; t += 1) {
                            var i = t < 0 || arguments.length <= t ? void 0 : arguments[t];
                            if (null != i)
                                for (var n = Object.keys(Object(i)), r = 0, a = n.length; r < a; r += 1) {
                                    var s = n[r],
                                        o = Object.getOwnPropertyDescriptor(i, s);
                                    void 0 !== o && o.enumerable && (E.isObject(e[s]) && E.isObject(i[s]) ? E.extend(e[s], i[s]) : !E.isObject(e[s]) && E.isObject(i[s]) ? (e[s] = {}, E.extend(e[s], i[s])) : e[s] = i[s])
                                }
                        }
                        return e
                    }
                },
                x = {
                    touch: !!("ontouchstart" in g || g.DocumentTouch && f instanceof g.DocumentTouch),
                    pointerEvents: !!g.PointerEvent && "maxTouchPoints" in g.navigator && g.navigator.maxTouchPoints >= 0,
                    observer: "MutationObserver" in g || "WebkitMutationObserver" in g,
                    passiveListener: function() {
                        var e = !1;
                        try {
                            var t = Object.defineProperty({}, "passive", {
                                get: function() {
                                    e = !0
                                }
                            });
                            g.addEventListener("testPassiveListener", null, t)
                        } catch (e) {}
                        return e
                    }(),
                    gestures: "ongesturestart" in g
                },
                C = function() {
                    function e() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        Object(c.a)(this, e);
                        var i = this;
                        i.params = t, i.eventsListeners = {}, i.params && i.params.on && Object.keys(i.params.on).forEach((function(e) {
                            i.on(e, i.params.on[e])
                        }))
                    }
                    return Object(u.a)(e, [{
                        key: "on",
                        value: function(e, t, i) {
                            var n = this;
                            if ("function" != typeof t) return n;
                            var r = i ? "unshift" : "push";
                            return e.split(" ").forEach((function(e) {
                                n.eventsListeners[e] || (n.eventsListeners[e] = []), n.eventsListeners[e][r](t)
                            })), n
                        }
                    }, {
                        key: "once",
                        value: function(e, t, i) {
                            var n = this;
                            if ("function" != typeof t) return n;

                            function r() {
                                n.off(e, r), r.f7proxy && delete r.f7proxy;
                                for (var i = arguments.length, a = new Array(i), s = 0; s < i; s++) a[s] = arguments[s];
                                t.apply(n, a)
                            }
                            return r.f7proxy = t, n.on(e, r, i)
                        }
                    }, {
                        key: "off",
                        value: function(e, t) {
                            var i = this;
                            return i.eventsListeners ? (e.split(" ").forEach((function(e) {
                                void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].length && i.eventsListeners[e].forEach((function(n, r) {
                                    (n === t || n.f7proxy && n.f7proxy === t) && i.eventsListeners[e].splice(r, 1)
                                }))
                            })), i) : i
                        }
                    }, {
                        key: "emit",
                        value: function() {
                            var e, t, i, n = this;
                            if (!n.eventsListeners) return n;
                            for (var r = arguments.length, a = new Array(r), s = 0; s < r; s++) a[s] = arguments[s];
                            "string" == typeof a[0] || Array.isArray(a[0]) ? (e = a[0], t = a.slice(1, a.length), i = n) : (e = a[0].events, t = a[0].data, i = a[0].context || n);
                            var o = Array.isArray(e) ? e : e.split(" ");
                            return o.forEach((function(e) {
                                if (n.eventsListeners && n.eventsListeners[e]) {
                                    var r = [];
                                    n.eventsListeners[e].forEach((function(e) {
                                        r.push(e)
                                    })), r.forEach((function(e) {
                                        e.apply(i, t)
                                    }))
                                }
                            })), n
                        }
                    }, {
                        key: "useModulesParams",
                        value: function(e) {
                            var t = this;
                            t.modules && Object.keys(t.modules).forEach((function(i) {
                                var n = t.modules[i];
                                n.params && E.extend(e, n.params)
                            }))
                        }
                    }, {
                        key: "useModules",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = this;
                            t.modules && Object.keys(t.modules).forEach((function(i) {
                                var n = t.modules[i],
                                    r = e[i] || {};
                                n.instance && Object.keys(n.instance).forEach((function(e) {
                                    var i = n.instance[e];
                                    t[e] = "function" == typeof i ? i.bind(t) : i
                                })), n.on && t.on && Object.keys(n.on).forEach((function(e) {
                                    t.on(e, n.on[e])
                                })), n.create && n.create.bind(t)(r)
                            }))
                        }
                    }], [{
                        key: "components",
                        set: function(e) {
                            this.use && this.use(e)
                        }
                    }, {
                        key: "installModule",
                        value: function(e) {
                            var t = this;
                            t.prototype.modules || (t.prototype.modules = {});
                            var i = e.name || "".concat(Object.keys(t.prototype.modules).length, "_").concat(E.now());
                            if (t.prototype.modules[i] = e, e.proto && Object.keys(e.proto).forEach((function(i) {
                                    t.prototype[i] = e.proto[i]
                                })), e.static && Object.keys(e.static).forEach((function(i) {
                                    t[i] = e.static[i]
                                })), e.install) {
                                for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
                                e.install.apply(t, r)
                            }
                            return t
                        }
                    }, {
                        key: "use",
                        value: function(e) {
                            var t = this;
                            if (Array.isArray(e)) return e.forEach((function(e) {
                                return t.installModule(e)
                            })), t;
                            for (var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), r = 1; r < i; r++) n[r - 1] = arguments[r];
                            return t.installModule.apply(t, [e].concat(n))
                        }
                    }]), e
                }();
            var M = {
                updateSize: function() {
                    var e, t, i = this,
                        n = i.$el;
                    e = void 0 !== i.params.width ? i.params.width : n[0].clientWidth, t = void 0 !== i.params.height ? i.params.height : n[0].clientHeight, 0 === e && i.isHorizontal() || 0 === t && i.isVertical() || (e = e - parseInt(n.css("padding-left"), 10) - parseInt(n.css("padding-right"), 10), t = t - parseInt(n.css("padding-top"), 10) - parseInt(n.css("padding-bottom"), 10), E.extend(i, {
                        width: e,
                        height: t,
                        size: i.isHorizontal() ? e : t
                    }))
                },
                updateSlides: function() {
                    var e = this,
                        t = e.params,
                        i = e.$wrapperEl,
                        n = e.size,
                        r = e.rtlTranslate,
                        a = e.wrongRTL,
                        s = e.virtual && t.virtual.enabled,
                        o = s ? e.virtual.slides.length : e.slides.length,
                        l = i.children(".".concat(e.params.slideClass)),
                        d = s ? e.virtual.slides.length : l.length,
                        c = [],
                        u = [],
                        p = [];

                    function h(e) {
                        return !t.cssMode || e !== l.length - 1
                    }
                    var v = t.slidesOffsetBefore;
                    "function" == typeof v && (v = t.slidesOffsetBefore.call(e));
                    var f = t.slidesOffsetAfter;
                    "function" == typeof f && (f = t.slidesOffsetAfter.call(e));
                    var m = e.snapGrid.length,
                        w = e.snapGrid.length,
                        T = t.spaceBetween,
                        y = -v,
                        S = 0,
                        b = 0;
                    if (void 0 !== n) {
                        var x, C;
                        "string" == typeof T && T.indexOf("%") >= 0 && (T = parseFloat(T.replace("%", "")) / 100 * n), e.virtualSize = -T, r ? l.css({
                            marginLeft: "",
                            marginTop: ""
                        }) : l.css({
                            marginRight: "",
                            marginBottom: ""
                        }), t.slidesPerColumn > 1 && (x = Math.floor(d / t.slidesPerColumn) === d / e.params.slidesPerColumn ? d : Math.ceil(d / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (x = Math.max(x, t.slidesPerView * t.slidesPerColumn)));
                        for (var M, k = t.slidesPerColumn, P = x / k, L = Math.floor(d / t.slidesPerColumn), O = 0; O < d; O += 1) {
                            C = 0;
                            var z = l.eq(O);
                            if (t.slidesPerColumn > 1) {
                                var I = void 0,
                                    D = void 0,
                                    A = void 0;
                                if ("row" === t.slidesPerColumnFill && t.slidesPerGroup > 1) {
                                    var B = Math.floor(O / (t.slidesPerGroup * t.slidesPerColumn)),
                                        G = O - t.slidesPerColumn * t.slidesPerGroup * B,
                                        V = 0 === B ? t.slidesPerGroup : Math.min(Math.ceil((d - B * k * t.slidesPerGroup) / k), t.slidesPerGroup);
                                    I = (D = G - (A = Math.floor(G / V)) * V + B * t.slidesPerGroup) + A * x / k, z.css({
                                        "-webkit-box-ordinal-group": I,
                                        "-moz-box-ordinal-group": I,
                                        "-ms-flex-order": I,
                                        "-webkit-order": I,
                                        order: I
                                    })
                                } else "column" === t.slidesPerColumnFill ? (A = O - (D = Math.floor(O / k)) * k, (D > L || D === L && A === k - 1) && (A += 1) >= k && (A = 0, D += 1)) : D = O - (A = Math.floor(O / P)) * P;
                                z.css("margin-".concat(e.isHorizontal() ? "top" : "left"), 0 !== A && t.spaceBetween && "".concat(t.spaceBetween, "px"))
                            }
                            if ("none" !== z.css("display")) {
                                if ("auto" === t.slidesPerView) {
                                    var N = g.getComputedStyle(z[0], null),
                                        j = z[0].style.transform,
                                        F = z[0].style.webkitTransform;
                                    if (j && (z[0].style.transform = "none"), F && (z[0].style.webkitTransform = "none"), t.roundLengths) C = e.isHorizontal() ? z.outerWidth(!0) : z.outerHeight(!0);
                                    else if (e.isHorizontal()) {
                                        var $ = parseFloat(N.getPropertyValue("width")),
                                            H = parseFloat(N.getPropertyValue("padding-left")),
                                            W = parseFloat(N.getPropertyValue("padding-right")),
                                            R = parseFloat(N.getPropertyValue("margin-left")),
                                            X = parseFloat(N.getPropertyValue("margin-right")),
                                            Y = N.getPropertyValue("box-sizing");
                                        C = Y && "border-box" === Y ? $ + R + X : $ + H + W + R + X
                                    } else {
                                        var q = parseFloat(N.getPropertyValue("height")),
                                            _ = parseFloat(N.getPropertyValue("padding-top")),
                                            U = parseFloat(N.getPropertyValue("padding-bottom")),
                                            K = parseFloat(N.getPropertyValue("margin-top")),
                                            J = parseFloat(N.getPropertyValue("margin-bottom")),
                                            Q = N.getPropertyValue("box-sizing");
                                        C = Q && "border-box" === Q ? q + K + J : q + _ + U + K + J
                                    }
                                    j && (z[0].style.transform = j), F && (z[0].style.webkitTransform = F), t.roundLengths && (C = Math.floor(C))
                                } else C = (n - (t.slidesPerView - 1) * T) / t.slidesPerView, t.roundLengths && (C = Math.floor(C)), l[O] && (e.isHorizontal() ? l[O].style.width = "".concat(C, "px") : l[O].style.height = "".concat(C, "px"));
                                l[O] && (l[O].swiperSlideSize = C), p.push(C), t.centeredSlides ? (y = y + C / 2 + S / 2 + T, 0 === S && 0 !== O && (y = y - n / 2 - T), 0 === O && (y = y - n / 2 - T), Math.abs(y) < .001 && (y = 0), t.roundLengths && (y = Math.floor(y)), b % t.slidesPerGroup == 0 && c.push(y), u.push(y)) : (t.roundLengths && (y = Math.floor(y)), (b - Math.min(e.params.slidesPerGroupSkip, b)) % e.params.slidesPerGroup == 0 && c.push(y), u.push(y), y = y + C + T), e.virtualSize += C + T, S = C, b += 1
                            }
                        }
                        if (e.virtualSize = Math.max(e.virtualSize, n) + f, r && a && ("slide" === t.effect || "coverflow" === t.effect) && i.css({
                                width: "".concat(e.virtualSize + t.spaceBetween, "px")
                            }), t.setWrapperSize && (e.isHorizontal() ? i.css({
                                width: "".concat(e.virtualSize + t.spaceBetween, "px")
                            }) : i.css({
                                height: "".concat(e.virtualSize + t.spaceBetween, "px")
                            })), t.slidesPerColumn > 1 && (e.virtualSize = (C + t.spaceBetween) * x, e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween, e.isHorizontal() ? i.css({
                                width: "".concat(e.virtualSize + t.spaceBetween, "px")
                            }) : i.css({
                                height: "".concat(e.virtualSize + t.spaceBetween, "px")
                            }), t.centeredSlides)) {
                            M = [];
                            for (var Z = 0; Z < c.length; Z += 1) {
                                var ee = c[Z];
                                t.roundLengths && (ee = Math.floor(ee)), c[Z] < e.virtualSize + c[0] && M.push(ee)
                            }
                            c = M
                        }
                        if (!t.centeredSlides) {
                            M = [];
                            for (var te = 0; te < c.length; te += 1) {
                                var ie = c[te];
                                t.roundLengths && (ie = Math.floor(ie)), c[te] <= e.virtualSize - n && M.push(ie)
                            }
                            c = M, Math.floor(e.virtualSize - n) - Math.floor(c[c.length - 1]) > 1 && c.push(e.virtualSize - n)
                        }
                        if (0 === c.length && (c = [0]), 0 !== t.spaceBetween && (e.isHorizontal() ? r ? l.filter(h).css({
                                marginLeft: "".concat(T, "px")
                            }) : l.filter(h).css({
                                marginRight: "".concat(T, "px")
                            }) : l.filter(h).css({
                                marginBottom: "".concat(T, "px")
                            })), t.centeredSlides && t.centeredSlidesBounds) {
                            var ne = 0;
                            p.forEach((function(e) {
                                ne += e + (t.spaceBetween ? t.spaceBetween : 0)
                            }));
                            var re = (ne -= t.spaceBetween) - n;
                            c = c.map((function(e) {
                                return e < 0 ? -v : e > re ? re + f : e
                            }))
                        }
                        if (t.centerInsufficientSlides) {
                            var ae = 0;
                            if (p.forEach((function(e) {
                                    ae += e + (t.spaceBetween ? t.spaceBetween : 0)
                                })), (ae -= t.spaceBetween) < n) {
                                var se = (n - ae) / 2;
                                c.forEach((function(e, t) {
                                    c[t] = e - se
                                })), u.forEach((function(e, t) {
                                    u[t] = e + se
                                }))
                            }
                        }
                        E.extend(e, {
                            slides: l,
                            snapGrid: c,
                            slidesGrid: u,
                            slidesSizesGrid: p
                        }), d !== o && e.emit("slidesLengthChange"), c.length !== m && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), u.length !== w && e.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset()
                    }
                },
                updateAutoHeight: function(e) {
                    var t, i = this,
                        n = [],
                        r = 0;
                    if ("number" == typeof e ? i.setTransition(e) : !0 === e && i.setTransition(i.params.speed), "auto" !== i.params.slidesPerView && i.params.slidesPerView > 1)
                        if (i.params.centeredSlides) i.visibleSlides.each((function(e, t) {
                            n.push(t)
                        }));
                        else
                            for (t = 0; t < Math.ceil(i.params.slidesPerView); t += 1) {
                                var a = i.activeIndex + t;
                                if (a > i.slides.length) break;
                                n.push(i.slides.eq(a)[0])
                            } else n.push(i.slides.eq(i.activeIndex)[0]);
                    for (t = 0; t < n.length; t += 1)
                        if (void 0 !== n[t]) {
                            var s = n[t].offsetHeight;
                            r = s > r ? s : r
                        }
                    r && i.$wrapperEl.css("height", "".concat(r, "px"))
                },
                updateSlidesOffset: function() {
                    for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
                },
                updateSlidesProgress: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this && this.translate || 0,
                        t = this,
                        i = t.params,
                        n = t.slides,
                        r = t.rtlTranslate;
                    if (0 !== n.length) {
                        void 0 === n[0].swiperSlideOffset && t.updateSlidesOffset();
                        var a = -e;
                        r && (a = e), n.removeClass(i.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                        for (var s = 0; s < n.length; s += 1) {
                            var o = n[s],
                                l = (a + (i.centeredSlides ? t.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + i.spaceBetween);
                            if (i.watchSlidesVisibility || i.centeredSlides && i.autoHeight) {
                                var d = -(a - o.swiperSlideOffset),
                                    c = d + t.slidesSizesGrid[s],
                                    u = d >= 0 && d < t.size - 1 || c > 1 && c <= t.size || d <= 0 && c >= t.size;
                                u && (t.visibleSlides.push(o), t.visibleSlidesIndexes.push(s), n.eq(s).addClass(i.slideVisibleClass))
                            }
                            o.progress = r ? -l : l
                        }
                        t.visibleSlides = T(t.visibleSlides)
                    }
                },
                updateProgress: function(e) {
                    var t = this;
                    if (void 0 === e) {
                        var i = t.rtlTranslate ? -1 : 1;
                        e = t && t.translate && t.translate * i || 0
                    }
                    var n = t.params,
                        r = t.maxTranslate() - t.minTranslate(),
                        a = t.progress,
                        s = t.isBeginning,
                        o = t.isEnd,
                        l = s,
                        d = o;
                    0 === r ? (a = 0, s = !0, o = !0) : (s = (a = (e - t.minTranslate()) / r) <= 0, o = a >= 1), E.extend(t, {
                        progress: a,
                        isBeginning: s,
                        isEnd: o
                    }), (n.watchSlidesProgress || n.watchSlidesVisibility || n.centeredSlides && n.autoHeight) && t.updateSlidesProgress(e), s && !l && t.emit("reachBeginning toEdge"), o && !d && t.emit("reachEnd toEdge"), (l && !s || d && !o) && t.emit("fromEdge"), t.emit("progress", a)
                },
                updateSlidesClasses: function() {
                    var e, t = this,
                        i = t.slides,
                        n = t.params,
                        r = t.$wrapperEl,
                        a = t.activeIndex,
                        s = t.realIndex,
                        o = t.virtual && n.virtual.enabled;
                    i.removeClass("".concat(n.slideActiveClass, " ").concat(n.slideNextClass, " ").concat(n.slidePrevClass, " ").concat(n.slideDuplicateActiveClass, " ").concat(n.slideDuplicateNextClass, " ").concat(n.slideDuplicatePrevClass)), (e = o ? t.$wrapperEl.find(".".concat(n.slideClass, '[data-swiper-slide-index="').concat(a, '"]')) : i.eq(a)).addClass(n.slideActiveClass), n.loop && (e.hasClass(n.slideDuplicateClass) ? r.children(".".concat(n.slideClass, ":not(.").concat(n.slideDuplicateClass, ')[data-swiper-slide-index="').concat(s, '"]')).addClass(n.slideDuplicateActiveClass) : r.children(".".concat(n.slideClass, ".").concat(n.slideDuplicateClass, '[data-swiper-slide-index="').concat(s, '"]')).addClass(n.slideDuplicateActiveClass));
                    var l = e.nextAll(".".concat(n.slideClass)).eq(0).addClass(n.slideNextClass);
                    n.loop && 0 === l.length && (l = i.eq(0)).addClass(n.slideNextClass);
                    var d = e.prevAll(".".concat(n.slideClass)).eq(0).addClass(n.slidePrevClass);
                    n.loop && 0 === d.length && (d = i.eq(-1)).addClass(n.slidePrevClass), n.loop && (l.hasClass(n.slideDuplicateClass) ? r.children(".".concat(n.slideClass, ":not(.").concat(n.slideDuplicateClass, ')[data-swiper-slide-index="').concat(l.attr("data-swiper-slide-index"), '"]')).addClass(n.slideDuplicateNextClass) : r.children(".".concat(n.slideClass, ".").concat(n.slideDuplicateClass, '[data-swiper-slide-index="').concat(l.attr("data-swiper-slide-index"), '"]')).addClass(n.slideDuplicateNextClass), d.hasClass(n.slideDuplicateClass) ? r.children(".".concat(n.slideClass, ":not(.").concat(n.slideDuplicateClass, ')[data-swiper-slide-index="').concat(d.attr("data-swiper-slide-index"), '"]')).addClass(n.slideDuplicatePrevClass) : r.children(".".concat(n.slideClass, ".").concat(n.slideDuplicateClass, '[data-swiper-slide-index="').concat(d.attr("data-swiper-slide-index"), '"]')).addClass(n.slideDuplicatePrevClass))
                },
                updateActiveIndex: function(e) {
                    var t, i = this,
                        n = i.rtlTranslate ? i.translate : -i.translate,
                        r = i.slidesGrid,
                        a = i.snapGrid,
                        s = i.params,
                        o = i.activeIndex,
                        l = i.realIndex,
                        d = i.snapIndex,
                        c = e;
                    if (void 0 === c) {
                        for (var u = 0; u < r.length; u += 1) void 0 !== r[u + 1] ? n >= r[u] && n < r[u + 1] - (r[u + 1] - r[u]) / 2 ? c = u : n >= r[u] && n < r[u + 1] && (c = u + 1) : n >= r[u] && (c = u);
                        s.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0)
                    }
                    if (a.indexOf(n) >= 0) t = a.indexOf(n);
                    else {
                        var p = Math.min(s.slidesPerGroupSkip, c);
                        t = p + Math.floor((c - p) / s.slidesPerGroup)
                    }
                    if (t >= a.length && (t = a.length - 1), c !== o) {
                        var h = parseInt(i.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
                        E.extend(i, {
                            snapIndex: t,
                            realIndex: h,
                            previousIndex: o,
                            activeIndex: c
                        }), i.emit("activeIndexChange"), i.emit("snapIndexChange"), l !== h && i.emit("realIndexChange"), (i.initialized || i.params.runCallbacksOnInit) && i.emit("slideChange")
                    } else t !== d && (i.snapIndex = t, i.emit("snapIndexChange"))
                },
                updateClickedSlide: function(e) {
                    var t = this,
                        i = t.params,
                        n = T(e.target).closest(".".concat(i.slideClass))[0],
                        r = !1;
                    if (n)
                        for (var a = 0; a < t.slides.length; a += 1) t.slides[a] === n && (r = !0);
                    if (!n || !r) return t.clickedSlide = void 0, void(t.clickedIndex = void 0);
                    t.clickedSlide = n, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(T(n).attr("data-swiper-slide-index"), 10) : t.clickedIndex = T(n).index(), i.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
                }
            };
            var k = {
                getTranslate: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.isHorizontal() ? "x" : "y",
                        t = this,
                        i = t.params,
                        n = t.rtlTranslate,
                        r = t.translate,
                        a = t.$wrapperEl;
                    if (i.virtualTranslate) return n ? -r : r;
                    if (i.cssMode) return r;
                    var s = E.getTranslate(a[0], e);
                    return n && (s = -s), s || 0
                },
                setTranslate: function(e, t) {
                    var i = this,
                        n = i.rtlTranslate,
                        r = i.params,
                        a = i.$wrapperEl,
                        s = i.wrapperEl,
                        o = i.progress,
                        l = 0,
                        d = 0;
                    i.isHorizontal() ? l = n ? -e : e : d = e, r.roundLengths && (l = Math.floor(l), d = Math.floor(d)), r.cssMode ? s[i.isHorizontal() ? "scrollLeft" : "scrollTop"] = i.isHorizontal() ? -l : -d : r.virtualTranslate || a.transform("translate3d(".concat(l, "px, ").concat(d, "px, ").concat(0, "px)")), i.previousTranslate = i.translate, i.translate = i.isHorizontal() ? l : d;
                    var c = i.maxTranslate() - i.minTranslate();
                    (0 === c ? 0 : (e - i.minTranslate()) / c) !== o && i.updateProgress(e), i.emit("setTranslate", i.translate, t)
                },
                minTranslate: function() {
                    return -this.snapGrid[0]
                },
                maxTranslate: function() {
                    return -this.snapGrid[this.snapGrid.length - 1]
                },
                translateTo: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.params.speed,
                        i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                        n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                        r = arguments.length > 4 ? arguments[4] : void 0,
                        a = this,
                        s = a.params,
                        o = a.wrapperEl;
                    if (a.animating && s.preventInteractionOnTransition) return !1;
                    var l, c = a.minTranslate(),
                        u = a.maxTranslate();
                    if (l = n && e > c ? c : n && e < u ? u : e, a.updateProgress(l), s.cssMode) {
                        var p, h = a.isHorizontal();
                        if (0 === t) o[h ? "scrollLeft" : "scrollTop"] = -l;
                        else if (o.scrollTo) o.scrollTo((p = {}, Object(d.a)(p, h ? "left" : "top", -l), Object(d.a)(p, "behavior", "smooth"), p));
                        else o[h ? "scrollLeft" : "scrollTop"] = -l;
                        return !0
                    }
                    return 0 === t ? (a.setTransition(0), a.setTranslate(l), i && (a.emit("beforeTransitionStart", t, r), a.emit("transitionEnd"))) : (a.setTransition(t), a.setTranslate(l), i && (a.emit("beforeTransitionStart", t, r), a.emit("transitionStart")), a.animating || (a.animating = !0, a.onTranslateToWrapperTransitionEnd || (a.onTranslateToWrapperTransitionEnd = function(e) {
                        a && !a.destroyed && e.target === this && (a.$wrapperEl[0].removeEventListener("transitionend", a.onTranslateToWrapperTransitionEnd), a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onTranslateToWrapperTransitionEnd), a.onTranslateToWrapperTransitionEnd = null, delete a.onTranslateToWrapperTransitionEnd, i && a.emit("transitionEnd"))
                    }), a.$wrapperEl[0].addEventListener("transitionend", a.onTranslateToWrapperTransitionEnd), a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onTranslateToWrapperTransitionEnd))), !0
                }
            };
            var P = {
                setTransition: function(e, t) {
                    var i = this;
                    i.params.cssMode || i.$wrapperEl.transition(e), i.emit("setTransition", e, t)
                },
                transitionStart: function() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                        t = arguments.length > 1 ? arguments[1] : void 0,
                        i = this,
                        n = i.activeIndex,
                        r = i.params,
                        a = i.previousIndex;
                    if (!r.cssMode) {
                        r.autoHeight && i.updateAutoHeight();
                        var s = t;
                        if (s || (s = n > a ? "next" : n < a ? "prev" : "reset"), i.emit("transitionStart"), e && n !== a) {
                            if ("reset" === s) return void i.emit("slideResetTransitionStart");
                            i.emit("slideChangeTransitionStart"), "next" === s ? i.emit("slideNextTransitionStart") : i.emit("slidePrevTransitionStart")
                        }
                    }
                },
                transitionEnd: function() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                        t = arguments.length > 1 ? arguments[1] : void 0,
                        i = this,
                        n = i.activeIndex,
                        r = i.previousIndex,
                        a = i.params;
                    if (i.animating = !1, !a.cssMode) {
                        i.setTransition(0);
                        var s = t;
                        if (s || (s = n > r ? "next" : n < r ? "prev" : "reset"), i.emit("transitionEnd"), e && n !== r) {
                            if ("reset" === s) return void i.emit("slideResetTransitionEnd");
                            i.emit("slideChangeTransitionEnd"), "next" === s ? i.emit("slideNextTransitionEnd") : i.emit("slidePrevTransitionEnd")
                        }
                    }
                }
            };
            var L = {
                slideTo: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.params.speed,
                        i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                        n = arguments.length > 3 ? arguments[3] : void 0,
                        r = this,
                        a = e;
                    a < 0 && (a = 0);
                    var s = r.params,
                        o = r.snapGrid,
                        l = r.slidesGrid,
                        c = r.previousIndex,
                        u = r.activeIndex,
                        p = r.rtlTranslate,
                        h = r.wrapperEl;
                    if (r.animating && s.preventInteractionOnTransition) return !1;
                    var v = Math.min(r.params.slidesPerGroupSkip, a),
                        f = v + Math.floor((a - v) / r.params.slidesPerGroup);
                    f >= o.length && (f = o.length - 1), (u || s.initialSlide || 0) === (c || 0) && i && r.emit("beforeSlideChangeStart");
                    var m, g = -o[f];
                    if (r.updateProgress(g), s.normalizeSlideIndex)
                        for (var w = 0; w < l.length; w += 1) - Math.floor(100 * g) >= Math.floor(100 * l[w]) && (a = w);
                    if (r.initialized && a !== u) {
                        if (!r.allowSlideNext && g < r.translate && g < r.minTranslate()) return !1;
                        if (!r.allowSlidePrev && g > r.translate && g > r.maxTranslate() && (u || 0) !== a) return !1
                    }
                    if (m = a > u ? "next" : a < u ? "prev" : "reset", p && -g === r.translate || !p && g === r.translate) return r.updateActiveIndex(a), s.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== s.effect && r.setTranslate(g), "reset" !== m && (r.transitionStart(i, m), r.transitionEnd(i, m)), !1;
                    if (s.cssMode) {
                        var T, y = r.isHorizontal(),
                            S = -g;
                        if (p && (S = h.scrollWidth - h.offsetWidth - S), 0 === t) h[y ? "scrollLeft" : "scrollTop"] = S;
                        else if (h.scrollTo) h.scrollTo((T = {}, Object(d.a)(T, y ? "left" : "top", S), Object(d.a)(T, "behavior", "smooth"), T));
                        else h[y ? "scrollLeft" : "scrollTop"] = S;
                        return !0
                    }
                    return 0 === t ? (r.setTransition(0), r.setTranslate(g), r.updateActiveIndex(a), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, n), r.transitionStart(i, m), r.transitionEnd(i, m)) : (r.setTransition(t), r.setTranslate(g), r.updateActiveIndex(a), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, n), r.transitionStart(i, m), r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(e) {
                        r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(i, m))
                    }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd))), !0
                },
                slideToLoop: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.params.speed,
                        i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                        n = arguments.length > 3 ? arguments[3] : void 0,
                        r = this,
                        a = e;
                    return r.params.loop && (a += r.loopedSlides), r.slideTo(a, t, i, n)
                },
                slideNext: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed,
                        t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        i = arguments.length > 2 ? arguments[2] : void 0,
                        n = this,
                        r = n.params,
                        a = n.animating,
                        s = n.activeIndex < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup;
                    if (r.loop) {
                        if (a) return !1;
                        n.loopFix(), n._clientLeft = n.$wrapperEl[0].clientLeft
                    }
                    return n.slideTo(n.activeIndex + s, e, t, i)
                },
                slidePrev: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed,
                        t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        i = arguments.length > 2 ? arguments[2] : void 0,
                        n = this,
                        r = n.params,
                        a = n.animating,
                        s = n.snapGrid,
                        o = n.slidesGrid,
                        l = n.rtlTranslate;
                    if (r.loop) {
                        if (a) return !1;
                        n.loopFix(), n._clientLeft = n.$wrapperEl[0].clientLeft
                    }
                    var d = l ? n.translate : -n.translate;

                    function c(e) {
                        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                    }
                    var u, p = c(d),
                        h = s.map((function(e) {
                            return c(e)
                        })),
                        v = (o.map((function(e) {
                            return c(e)
                        })), s[h.indexOf(p)], s[h.indexOf(p) - 1]);
                    return void 0 === v && r.cssMode && s.forEach((function(e) {
                        !v && p >= e && (v = e)
                    })), void 0 !== v && (u = o.indexOf(v)) < 0 && (u = n.activeIndex - 1), n.slideTo(u, e, t, i)
                },
                slideReset: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed,
                        t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        i = arguments.length > 2 ? arguments[2] : void 0,
                        n = this;
                    return n.slideTo(n.activeIndex, e, t, i)
                },
                slideToClosest: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.params.speed,
                        t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        i = arguments.length > 2 ? arguments[2] : void 0,
                        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .5,
                        r = this,
                        a = r.activeIndex,
                        s = Math.min(r.params.slidesPerGroupSkip, a),
                        o = s + Math.floor((a - s) / r.params.slidesPerGroup),
                        l = r.rtlTranslate ? r.translate : -r.translate;
                    if (l >= r.snapGrid[o]) {
                        var d = r.snapGrid[o],
                            c = r.snapGrid[o + 1];
                        l - d > (c - d) * n && (a += r.params.slidesPerGroup)
                    } else {
                        var u = r.snapGrid[o - 1],
                            p = r.snapGrid[o];
                        l - u <= (p - u) * n && (a -= r.params.slidesPerGroup)
                    }
                    return a = Math.max(a, 0), a = Math.min(a, r.slidesGrid.length - 1), r.slideTo(a, e, t, i)
                },
                slideToClickedSlide: function() {
                    var e, t = this,
                        i = t.params,
                        n = t.$wrapperEl,
                        r = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView,
                        a = t.clickedIndex;
                    if (i.loop) {
                        if (t.animating) return;
                        e = parseInt(T(t.clickedSlide).attr("data-swiper-slide-index"), 10), i.centeredSlides ? a < t.loopedSlides - r / 2 || a > t.slides.length - t.loopedSlides + r / 2 ? (t.loopFix(), a = n.children(".".concat(i.slideClass, '[data-swiper-slide-index="').concat(e, '"]:not(.').concat(i.slideDuplicateClass, ")")).eq(0).index(), E.nextTick((function() {
                            t.slideTo(a)
                        }))) : t.slideTo(a) : a > t.slides.length - r ? (t.loopFix(), a = n.children(".".concat(i.slideClass, '[data-swiper-slide-index="').concat(e, '"]:not(.').concat(i.slideDuplicateClass, ")")).eq(0).index(), E.nextTick((function() {
                            t.slideTo(a)
                        }))) : t.slideTo(a)
                    } else t.slideTo(a)
                }
            };
            var O = {
                loopCreate: function() {
                    var e = this,
                        t = e.params,
                        i = e.$wrapperEl;
                    i.children(".".concat(t.slideClass, ".").concat(t.slideDuplicateClass)).remove();
                    var n = i.children(".".concat(t.slideClass));
                    if (t.loopFillGroupWithBlank) {
                        var r = t.slidesPerGroup - n.length % t.slidesPerGroup;
                        if (r !== t.slidesPerGroup) {
                            for (var a = 0; a < r; a += 1) {
                                var s = T(f.createElement("div")).addClass("".concat(t.slideClass, " ").concat(t.slideBlankClass));
                                i.append(s)
                            }
                            n = i.children(".".concat(t.slideClass))
                        }
                    }
                    "auto" !== t.slidesPerView || t.loopedSlides || (t.loopedSlides = n.length), e.loopedSlides = Math.ceil(parseFloat(t.loopedSlides || t.slidesPerView, 10)), e.loopedSlides += t.loopAdditionalSlides, e.loopedSlides > n.length && (e.loopedSlides = n.length);
                    var o = [],
                        l = [];
                    n.each((function(t, i) {
                        var r = T(i);
                        t < e.loopedSlides && l.push(i), t < n.length && t >= n.length - e.loopedSlides && o.push(i), r.attr("data-swiper-slide-index", t)
                    }));
                    for (var d = 0; d < l.length; d += 1) i.append(T(l[d].cloneNode(!0)).addClass(t.slideDuplicateClass));
                    for (var c = o.length - 1; c >= 0; c -= 1) i.prepend(T(o[c].cloneNode(!0)).addClass(t.slideDuplicateClass))
                },
                loopFix: function() {
                    var e = this;
                    e.emit("beforeLoopFix");
                    var t, i = e.activeIndex,
                        n = e.slides,
                        r = e.loopedSlides,
                        a = e.allowSlidePrev,
                        s = e.allowSlideNext,
                        o = e.snapGrid,
                        l = e.rtlTranslate;
                    e.allowSlidePrev = !0, e.allowSlideNext = !0;
                    var d = -o[i] - e.getTranslate();
                    if (i < r) t = n.length - 3 * r + i, t += r, e.slideTo(t, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d);
                    else if (i >= n.length - r) {
                        t = -n.length + i + r, t += r, e.slideTo(t, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d)
                    }
                    e.allowSlidePrev = a, e.allowSlideNext = s, e.emit("loopFix")
                },
                loopDestroy: function() {
                    var e = this,
                        t = e.$wrapperEl,
                        i = e.params,
                        n = e.slides;
                    t.children(".".concat(i.slideClass, ".").concat(i.slideDuplicateClass, ",.").concat(i.slideClass, ".").concat(i.slideBlankClass)).remove(), n.removeAttr("data-swiper-slide-index")
                }
            };
            var z = {
                setGrabCursor: function(e) {
                    var t = this;
                    if (!(x.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode)) {
                        var i = t.el;
                        i.style.cursor = "move", i.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", i.style.cursor = e ? "-moz-grabbin" : "-moz-grab", i.style.cursor = e ? "grabbing" : "grab"
                    }
                },
                unsetGrabCursor: function() {
                    var e = this;
                    x.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.el.style.cursor = "")
                }
            };
            var I, D, A, B, G, V, N, j, F, $, H, W, R, X, Y, q = {
                    appendSlide: function(e) {
                        var t = this,
                            i = t.$wrapperEl,
                            n = t.params;
                        if (n.loop && t.loopDestroy(), "object" === Object(p.a)(e) && "length" in e)
                            for (var r = 0; r < e.length; r += 1) e[r] && i.append(e[r]);
                        else i.append(e);
                        n.loop && t.loopCreate(), n.observer && x.observer || t.update()
                    },
                    prependSlide: function(e) {
                        var t = this,
                            i = t.params,
                            n = t.$wrapperEl,
                            r = t.activeIndex;
                        i.loop && t.loopDestroy();
                        var a = r + 1;
                        if ("object" === Object(p.a)(e) && "length" in e) {
                            for (var s = 0; s < e.length; s += 1) e[s] && n.prepend(e[s]);
                            a = r + e.length
                        } else n.prepend(e);
                        i.loop && t.loopCreate(), i.observer && x.observer || t.update(), t.slideTo(a, 0, !1)
                    },
                    addSlide: function(e, t) {
                        var i = this,
                            n = i.$wrapperEl,
                            r = i.params,
                            a = i.activeIndex;
                        r.loop && (a -= i.loopedSlides, i.loopDestroy(), i.slides = n.children(".".concat(r.slideClass)));
                        var s = i.slides.length;
                        if (e <= 0) i.prependSlide(t);
                        else if (e >= s) i.appendSlide(t);
                        else {
                            for (var o = a > e ? a + 1 : a, l = [], d = s - 1; d >= e; d -= 1) {
                                var c = i.slides.eq(d);
                                c.remove(), l.unshift(c)
                            }
                            if ("object" === Object(p.a)(t) && "length" in t) {
                                for (var u = 0; u < t.length; u += 1) t[u] && n.append(t[u]);
                                o = a > e ? a + t.length : a
                            } else n.append(t);
                            for (var h = 0; h < l.length; h += 1) n.append(l[h]);
                            r.loop && i.loopCreate(), r.observer && x.observer || i.update(), r.loop ? i.slideTo(o + i.loopedSlides, 0, !1) : i.slideTo(o, 0, !1)
                        }
                    },
                    removeSlide: function(e) {
                        var t = this,
                            i = t.params,
                            n = t.$wrapperEl,
                            r = t.activeIndex;
                        i.loop && (r -= t.loopedSlides, t.loopDestroy(), t.slides = n.children(".".concat(i.slideClass)));
                        var a, s = r;
                        if ("object" === Object(p.a)(e) && "length" in e) {
                            for (var o = 0; o < e.length; o += 1) a = e[o], t.slides[a] && t.slides.eq(a).remove(), a < s && (s -= 1);
                            s = Math.max(s, 0)
                        } else a = e, t.slides[a] && t.slides.eq(a).remove(), a < s && (s -= 1), s = Math.max(s, 0);
                        i.loop && t.loopCreate(), i.observer && x.observer || t.update(), i.loop ? t.slideTo(s + t.loopedSlides, 0, !1) : t.slideTo(s, 0, !1)
                    },
                    removeAllSlides: function() {
                        for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
                        this.removeSlide(e)
                    }
                },
                _ = (I = g.navigator.platform, D = g.navigator.userAgent, A = {
                    ios: !1,
                    android: !1,
                    androidChrome: !1,
                    desktop: !1,
                    iphone: !1,
                    ipod: !1,
                    ipad: !1,
                    edge: !1,
                    ie: !1,
                    firefox: !1,
                    macos: !1,
                    windows: !1,
                    cordova: !(!g.cordova && !g.phonegap),
                    phonegap: !(!g.cordova && !g.phonegap),
                    electron: !1
                }, B = g.screen.width, G = g.screen.height, V = D.match(/(Android);?[\s\/]+([\d.]+)?/), N = D.match(/(iPad).*OS\s([\d_]+)/), j = D.match(/(iPod)(.*OS\s([\d_]+))?/), F = !N && D.match(/(iPhone\sOS|iOS)\s([\d_]+)/), $ = D.indexOf("MSIE ") >= 0 || D.indexOf("Trident/") >= 0, H = D.indexOf("Edge/") >= 0, W = D.indexOf("Gecko/") >= 0 && D.indexOf("Firefox/") >= 0, R = "Win32" === I, X = D.toLowerCase().indexOf("electron") >= 0, Y = "MacIntel" === I, !N && Y && x.touch && (1024 === B && 1366 === G || 834 === B && 1194 === G || 834 === B && 1112 === G || 768 === B && 1024 === G) && (N = D.match(/(Version)\/([\d.]+)/), Y = !1), A.ie = $, A.edge = H, A.firefox = W, V && !R && (A.os = "android", A.osVersion = V[2], A.android = !0, A.androidChrome = D.toLowerCase().indexOf("chrome") >= 0), (N || F || j) && (A.os = "ios", A.ios = !0), F && !j && (A.osVersion = F[2].replace(/_/g, "."), A.iphone = !0), N && (A.osVersion = N[2].replace(/_/g, "."), A.ipad = !0), j && (A.osVersion = j[3] ? j[3].replace(/_/g, ".") : null, A.ipod = !0), A.ios && A.osVersion && D.indexOf("Version/") >= 0 && "10" === A.osVersion.split(".")[0] && (A.osVersion = D.toLowerCase().split("version/")[1].split(" ")[0]), A.webView = !(!(F || N || j) || !D.match(/.*AppleWebKit(?!.*Safari)/i) && !g.navigator.standalone) || g.matchMedia && g.matchMedia("(display-mode: standalone)").matches, A.webview = A.webView, A.standalone = A.webView, A.desktop = !(A.ios || A.android) || X, A.desktop && (A.electron = X, A.macos = Y, A.windows = R, A.macos && (A.os = "macos"), A.windows && (A.os = "windows")), A.pixelRatio = g.devicePixelRatio || 1, A);

            function U(e) {
                var t = this,
                    i = t.touchEventsData,
                    n = t.params,
                    r = t.touches;
                if (!t.animating || !n.preventInteractionOnTransition) {
                    var a = e;
                    a.originalEvent && (a = a.originalEvent);
                    var s = T(a.target);
                    if (("wrapper" !== n.touchEventsTarget || s.closest(t.wrapperEl).length) && (i.isTouchEvent = "touchstart" === a.type, (i.isTouchEvent || !("which" in a) || 3 !== a.which) && !(!i.isTouchEvent && "button" in a && a.button > 0 || i.isTouched && i.isMoved)))
                        if (n.noSwiping && s.closest(n.noSwipingSelector ? n.noSwipingSelector : ".".concat(n.noSwipingClass))[0]) t.allowClick = !0;
                        else if (!n.swipeHandler || s.closest(n.swipeHandler)[0]) {
                        r.currentX = "touchstart" === a.type ? a.targetTouches[0].pageX : a.pageX, r.currentY = "touchstart" === a.type ? a.targetTouches[0].pageY : a.pageY;
                        var o = r.currentX,
                            l = r.currentY,
                            d = n.edgeSwipeDetection || n.iOSEdgeSwipeDetection,
                            c = n.edgeSwipeThreshold || n.iOSEdgeSwipeThreshold;
                        if (!d || !(o <= c || o >= g.screen.width - c)) {
                            if (E.extend(i, {
                                    isTouched: !0,
                                    isMoved: !1,
                                    allowTouchCallbacks: !0,
                                    isScrolling: void 0,
                                    startMoving: void 0
                                }), r.startX = o, r.startY = l, i.touchStartTime = E.now(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, n.threshold > 0 && (i.allowThresholdMove = !1), "touchstart" !== a.type) {
                                var u = !0;
                                s.is(i.formElements) && (u = !1), f.activeElement && T(f.activeElement).is(i.formElements) && f.activeElement !== s[0] && f.activeElement.blur();
                                var p = u && t.allowTouchMove && n.touchStartPreventDefault;
                                (n.touchStartForcePreventDefault || p) && a.preventDefault()
                            }
                            t.emit("touchStart", a)
                        }
                    }
                }
            }

            function K(e) {
                var t = this,
                    i = t.touchEventsData,
                    n = t.params,
                    r = t.touches,
                    a = t.rtlTranslate,
                    s = e;
                if (s.originalEvent && (s = s.originalEvent), i.isTouched) {
                    if (!i.isTouchEvent || "touchmove" === s.type) {
                        var o = "touchmove" === s.type && s.targetTouches && (s.targetTouches[0] || s.changedTouches[0]),
                            l = "touchmove" === s.type ? o.pageX : s.pageX,
                            d = "touchmove" === s.type ? o.pageY : s.pageY;
                        if (s.preventedByNestedSwiper) return r.startX = l, void(r.startY = d);
                        if (!t.allowTouchMove) return t.allowClick = !1, void(i.isTouched && (E.extend(r, {
                            startX: l,
                            startY: d,
                            currentX: l,
                            currentY: d
                        }), i.touchStartTime = E.now()));
                        if (i.isTouchEvent && n.touchReleaseOnEdges && !n.loop)
                            if (t.isVertical()) {
                                if (d < r.startY && t.translate <= t.maxTranslate() || d > r.startY && t.translate >= t.minTranslate()) return i.isTouched = !1, void(i.isMoved = !1)
                            } else if (l < r.startX && t.translate <= t.maxTranslate() || l > r.startX && t.translate >= t.minTranslate()) return;
                        if (i.isTouchEvent && f.activeElement && s.target === f.activeElement && T(s.target).is(i.formElements)) return i.isMoved = !0, void(t.allowClick = !1);
                        if (i.allowTouchCallbacks && t.emit("touchMove", s), !(s.targetTouches && s.targetTouches.length > 1)) {
                            r.currentX = l, r.currentY = d;
                            var c = r.currentX - r.startX,
                                u = r.currentY - r.startY;
                            if (!(t.params.threshold && Math.sqrt(Math.pow(c, 2) + Math.pow(u, 2)) < t.params.threshold)) {
                                var p;
                                if (void 0 === i.isScrolling) t.isHorizontal() && r.currentY === r.startY || t.isVertical() && r.currentX === r.startX ? i.isScrolling = !1 : c * c + u * u >= 25 && (p = 180 * Math.atan2(Math.abs(u), Math.abs(c)) / Math.PI, i.isScrolling = t.isHorizontal() ? p > n.touchAngle : 90 - p > n.touchAngle);
                                if (i.isScrolling && t.emit("touchMoveOpposite", s), void 0 === i.startMoving && (r.currentX === r.startX && r.currentY === r.startY || (i.startMoving = !0)), i.isScrolling) i.isTouched = !1;
                                else if (i.startMoving) {
                                    t.allowClick = !1, !n.cssMode && s.cancelable && s.preventDefault(), n.touchMoveStopPropagation && !n.nested && s.stopPropagation(), i.isMoved || (n.loop && t.loopFix(), i.startTranslate = t.getTranslate(), t.setTransition(0), t.animating && t.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !n.grabCursor || !0 !== t.allowSlideNext && !0 !== t.allowSlidePrev || t.setGrabCursor(!0), t.emit("sliderFirstMove", s)), t.emit("sliderMove", s), i.isMoved = !0;
                                    var h = t.isHorizontal() ? c : u;
                                    r.diff = h, h *= n.touchRatio, a && (h = -h), t.swipeDirection = h > 0 ? "prev" : "next", i.currentTranslate = h + i.startTranslate;
                                    var v = !0,
                                        m = n.resistanceRatio;
                                    if (n.touchReleaseOnEdges && (m = 0), h > 0 && i.currentTranslate > t.minTranslate() ? (v = !1, n.resistance && (i.currentTranslate = t.minTranslate() - 1 + Math.pow(-t.minTranslate() + i.startTranslate + h, m))) : h < 0 && i.currentTranslate < t.maxTranslate() && (v = !1, n.resistance && (i.currentTranslate = t.maxTranslate() + 1 - Math.pow(t.maxTranslate() - i.startTranslate - h, m))), v && (s.preventedByNestedSwiper = !0), !t.allowSlideNext && "next" === t.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !t.allowSlidePrev && "prev" === t.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), n.threshold > 0) {
                                        if (!(Math.abs(h) > n.threshold || i.allowThresholdMove)) return void(i.currentTranslate = i.startTranslate);
                                        if (!i.allowThresholdMove) return i.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, i.currentTranslate = i.startTranslate, void(r.diff = t.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY)
                                    }
                                    n.followFinger && !n.cssMode && ((n.freeMode || n.watchSlidesProgress || n.watchSlidesVisibility) && (t.updateActiveIndex(), t.updateSlidesClasses()), n.freeMode && (0 === i.velocities.length && i.velocities.push({
                                        position: r[t.isHorizontal() ? "startX" : "startY"],
                                        time: i.touchStartTime
                                    }), i.velocities.push({
                                        position: r[t.isHorizontal() ? "currentX" : "currentY"],
                                        time: E.now()
                                    })), t.updateProgress(i.currentTranslate), t.setTranslate(i.currentTranslate))
                                }
                            }
                        }
                    }
                } else i.startMoving && i.isScrolling && t.emit("touchMoveOpposite", s)
            }

            function J(e) {
                var t = this,
                    i = t.touchEventsData,
                    n = t.params,
                    r = t.touches,
                    a = t.rtlTranslate,
                    s = t.$wrapperEl,
                    o = t.slidesGrid,
                    l = t.snapGrid,
                    d = e;
                if (d.originalEvent && (d = d.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", d), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && n.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void(i.startMoving = !1);
                n.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                var c, u = E.now(),
                    p = u - i.touchStartTime;
                if (t.allowClick && (t.updateClickedSlide(d), t.emit("tap click", d), p < 300 && u - i.lastClickTime < 300 && t.emit("doubleTap doubleClick", d)), i.lastClickTime = E.now(), E.nextTick((function() {
                        t.destroyed || (t.allowClick = !0)
                    })), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === r.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void(i.startMoving = !1);
                if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, c = n.followFinger ? a ? t.translate : -t.translate : -i.currentTranslate, !n.cssMode)
                    if (n.freeMode) {
                        if (c < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                        if (c > -t.maxTranslate()) return void(t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
                        if (n.freeModeMomentum) {
                            if (i.velocities.length > 1) {
                                var h = i.velocities.pop(),
                                    v = i.velocities.pop(),
                                    f = h.position - v.position,
                                    m = h.time - v.time;
                                t.velocity = f / m, t.velocity /= 2, Math.abs(t.velocity) < n.freeModeMinimumVelocity && (t.velocity = 0), (m > 150 || E.now() - h.time > 300) && (t.velocity = 0)
                            } else t.velocity = 0;
                            t.velocity *= n.freeModeMomentumVelocityRatio, i.velocities.length = 0;
                            var g = 1e3 * n.freeModeMomentumRatio,
                                w = t.velocity * g,
                                T = t.translate + w;
                            a && (T = -T);
                            var y, S, b = !1,
                                x = 20 * Math.abs(t.velocity) * n.freeModeMomentumBounceRatio;
                            if (T < t.maxTranslate()) n.freeModeMomentumBounce ? (T + t.maxTranslate() < -x && (T = t.maxTranslate() - x), y = t.maxTranslate(), b = !0, i.allowMomentumBounce = !0) : T = t.maxTranslate(), n.loop && n.centeredSlides && (S = !0);
                            else if (T > t.minTranslate()) n.freeModeMomentumBounce ? (T - t.minTranslate() > x && (T = t.minTranslate() + x), y = t.minTranslate(), b = !0, i.allowMomentumBounce = !0) : T = t.minTranslate(), n.loop && n.centeredSlides && (S = !0);
                            else if (n.freeModeSticky) {
                                for (var C, M = 0; M < l.length; M += 1)
                                    if (l[M] > -T) {
                                        C = M;
                                        break
                                    }
                                T = -(T = Math.abs(l[C] - T) < Math.abs(l[C - 1] - T) || "next" === t.swipeDirection ? l[C] : l[C - 1])
                            }
                            if (S && t.once("transitionEnd", (function() {
                                    t.loopFix()
                                })), 0 !== t.velocity) {
                                if (g = a ? Math.abs((-T - t.translate) / t.velocity) : Math.abs((T - t.translate) / t.velocity), n.freeModeSticky) {
                                    var k = Math.abs((a ? -T : T) - t.translate),
                                        P = t.slidesSizesGrid[t.activeIndex];
                                    g = k < P ? n.speed : k < 2 * P ? 1.5 * n.speed : 2.5 * n.speed
                                }
                            } else if (n.freeModeSticky) return void t.slideToClosest();
                            n.freeModeMomentumBounce && b ? (t.updateProgress(y), t.setTransition(g), t.setTranslate(T), t.transitionStart(!0, t.swipeDirection), t.animating = !0, s.transitionEnd((function() {
                                t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(n.speed), setTimeout((function() {
                                    t.setTranslate(y), s.transitionEnd((function() {
                                        t && !t.destroyed && t.transitionEnd()
                                    }))
                                }), 0))
                            }))) : t.velocity ? (t.updateProgress(T), t.setTransition(g), t.setTranslate(T), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, s.transitionEnd((function() {
                                t && !t.destroyed && t.transitionEnd()
                            })))) : t.updateProgress(T), t.updateActiveIndex(), t.updateSlidesClasses()
                        } else if (n.freeModeSticky) return void t.slideToClosest();
                        (!n.freeModeMomentum || p >= n.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
                    } else {
                        for (var L = 0, O = t.slidesSizesGrid[0], z = 0; z < o.length; z += z < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup) {
                            var I = z < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
                            void 0 !== o[z + I] ? c >= o[z] && c < o[z + I] && (L = z, O = o[z + I] - o[z]) : c >= o[z] && (L = z, O = o[o.length - 1] - o[o.length - 2])
                        }
                        var D = (c - o[L]) / O,
                            A = L < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
                        if (p > n.longSwipesMs) {
                            if (!n.longSwipes) return void t.slideTo(t.activeIndex);
                            "next" === t.swipeDirection && (D >= n.longSwipesRatio ? t.slideTo(L + A) : t.slideTo(L)), "prev" === t.swipeDirection && (D > 1 - n.longSwipesRatio ? t.slideTo(L + A) : t.slideTo(L))
                        } else {
                            if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
                            t.navigation && (d.target === t.navigation.nextEl || d.target === t.navigation.prevEl) ? d.target === t.navigation.nextEl ? t.slideTo(L + A) : t.slideTo(L) : ("next" === t.swipeDirection && t.slideTo(L + A), "prev" === t.swipeDirection && t.slideTo(L))
                        }
                    }
            }

            function Q() {
                var e = this,
                    t = e.params,
                    i = e.el;
                if (!i || 0 !== i.offsetWidth) {
                    t.breakpoints && e.setBreakpoint();
                    var n = e.allowSlideNext,
                        r = e.allowSlidePrev,
                        a = e.snapGrid;
                    e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = r, e.allowSlideNext = n, e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow()
                }
            }

            function Z(e) {
                var t = this;
                t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
            }

            function ee() {
                var e = this,
                    t = e.wrapperEl,
                    i = e.rtlTranslate;
                e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = i ? t.scrollWidth - t.offsetWidth - t.scrollLeft : -t.scrollLeft : e.translate = -t.scrollTop, -0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
                var n = e.maxTranslate() - e.minTranslate();
                (0 === n ? 0 : (e.translate - e.minTranslate()) / n) !== e.progress && e.updateProgress(i ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
            }
            var te = !1;

            function ie() {}
            var ne = {
                    init: !0,
                    direction: "horizontal",
                    touchEventsTarget: "container",
                    initialSlide: 0,
                    speed: 300,
                    cssMode: !1,
                    updateOnWindowResize: !0,
                    preventInteractionOnTransition: !1,
                    edgeSwipeDetection: !1,
                    edgeSwipeThreshold: 20,
                    freeMode: !1,
                    freeModeMomentum: !0,
                    freeModeMomentumRatio: 1,
                    freeModeMomentumBounce: !0,
                    freeModeMomentumBounceRatio: 1,
                    freeModeMomentumVelocityRatio: 1,
                    freeModeSticky: !1,
                    freeModeMinimumVelocity: .02,
                    autoHeight: !1,
                    setWrapperSize: !1,
                    virtualTranslate: !1,
                    effect: "slide",
                    breakpoints: void 0,
                    spaceBetween: 0,
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    slidesPerColumnFill: "column",
                    slidesPerGroup: 1,
                    slidesPerGroupSkip: 0,
                    centeredSlides: !1,
                    centeredSlidesBounds: !1,
                    slidesOffsetBefore: 0,
                    slidesOffsetAfter: 0,
                    normalizeSlideIndex: !0,
                    centerInsufficientSlides: !1,
                    watchOverflow: !1,
                    roundLengths: !1,
                    touchRatio: 1,
                    touchAngle: 45,
                    simulateTouch: !0,
                    shortSwipes: !0,
                    longSwipes: !0,
                    longSwipesRatio: .5,
                    longSwipesMs: 300,
                    followFinger: !0,
                    allowTouchMove: !0,
                    threshold: 0,
                    touchMoveStopPropagation: !1,
                    touchStartPreventDefault: !0,
                    touchStartForcePreventDefault: !1,
                    touchReleaseOnEdges: !1,
                    uniqueNavElements: !0,
                    resistance: !0,
                    resistanceRatio: .85,
                    watchSlidesProgress: !1,
                    watchSlidesVisibility: !1,
                    grabCursor: !1,
                    preventClicks: !0,
                    preventClicksPropagation: !0,
                    slideToClickedSlide: !1,
                    preloadImages: !0,
                    updateOnImagesReady: !0,
                    loop: !1,
                    loopAdditionalSlides: 0,
                    loopedSlides: null,
                    loopFillGroupWithBlank: !1,
                    allowSlidePrev: !0,
                    allowSlideNext: !0,
                    swipeHandler: null,
                    noSwiping: !0,
                    noSwipingClass: "swiper-no-swiping",
                    noSwipingSelector: null,
                    passiveListeners: !0,
                    containerModifierClass: "swiper-container-",
                    slideClass: "swiper-slide",
                    slideBlankClass: "swiper-slide-invisible-blank",
                    slideActiveClass: "swiper-slide-active",
                    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                    slideVisibleClass: "swiper-slide-visible",
                    slideDuplicateClass: "swiper-slide-duplicate",
                    slideNextClass: "swiper-slide-next",
                    slideDuplicateNextClass: "swiper-slide-duplicate-next",
                    slidePrevClass: "swiper-slide-prev",
                    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                    wrapperClass: "swiper-wrapper",
                    runCallbacksOnInit: !0
                },
                re = {
                    update: M,
                    translate: k,
                    transition: P,
                    slide: L,
                    loop: O,
                    grabCursor: z,
                    manipulation: q,
                    events: {
                        attachEvents: function() {
                            var e = this,
                                t = e.params,
                                i = e.touchEvents,
                                n = e.el,
                                r = e.wrapperEl;
                            e.onTouchStart = U.bind(e), e.onTouchMove = K.bind(e), e.onTouchEnd = J.bind(e), t.cssMode && (e.onScroll = ee.bind(e)), e.onClick = Z.bind(e);
                            var a = !!t.nested;
                            if (!x.touch && x.pointerEvents) n.addEventListener(i.start, e.onTouchStart, !1), f.addEventListener(i.move, e.onTouchMove, a), f.addEventListener(i.end, e.onTouchEnd, !1);
                            else {
                                if (x.touch) {
                                    var s = !("touchstart" !== i.start || !x.passiveListener || !t.passiveListeners) && {
                                        passive: !0,
                                        capture: !1
                                    };
                                    n.addEventListener(i.start, e.onTouchStart, s), n.addEventListener(i.move, e.onTouchMove, x.passiveListener ? {
                                        passive: !1,
                                        capture: a
                                    } : a), n.addEventListener(i.end, e.onTouchEnd, s), i.cancel && n.addEventListener(i.cancel, e.onTouchEnd, s), te || (f.addEventListener("touchstart", ie), te = !0)
                                }(t.simulateTouch && !_.ios && !_.android || t.simulateTouch && !x.touch && _.ios) && (n.addEventListener("mousedown", e.onTouchStart, !1), f.addEventListener("mousemove", e.onTouchMove, a), f.addEventListener("mouseup", e.onTouchEnd, !1))
                            }(t.preventClicks || t.preventClicksPropagation) && n.addEventListener("click", e.onClick, !0), t.cssMode && r.addEventListener("scroll", e.onScroll), t.updateOnWindowResize ? e.on(_.ios || _.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", Q, !0) : e.on("observerUpdate", Q, !0)
                        },
                        detachEvents: function() {
                            var e = this,
                                t = e.params,
                                i = e.touchEvents,
                                n = e.el,
                                r = e.wrapperEl,
                                a = !!t.nested;
                            if (!x.touch && x.pointerEvents) n.removeEventListener(i.start, e.onTouchStart, !1), f.removeEventListener(i.move, e.onTouchMove, a), f.removeEventListener(i.end, e.onTouchEnd, !1);
                            else {
                                if (x.touch) {
                                    var s = !("onTouchStart" !== i.start || !x.passiveListener || !t.passiveListeners) && {
                                        passive: !0,
                                        capture: !1
                                    };
                                    n.removeEventListener(i.start, e.onTouchStart, s), n.removeEventListener(i.move, e.onTouchMove, a), n.removeEventListener(i.end, e.onTouchEnd, s), i.cancel && n.removeEventListener(i.cancel, e.onTouchEnd, s)
                                }(t.simulateTouch && !_.ios && !_.android || t.simulateTouch && !x.touch && _.ios) && (n.removeEventListener("mousedown", e.onTouchStart, !1), f.removeEventListener("mousemove", e.onTouchMove, a), f.removeEventListener("mouseup", e.onTouchEnd, !1))
                            }(t.preventClicks || t.preventClicksPropagation) && n.removeEventListener("click", e.onClick, !0), t.cssMode && r.removeEventListener("scroll", e.onScroll), e.off(_.ios || _.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", Q)
                        }
                    },
                    breakpoints: {
                        setBreakpoint: function() {
                            var e = this,
                                t = e.activeIndex,
                                i = e.initialized,
                                n = e.loopedSlides,
                                r = void 0 === n ? 0 : n,
                                a = e.params,
                                s = e.$el,
                                o = a.breakpoints;
                            if (o && (!o || 0 !== Object.keys(o).length)) {
                                var l = e.getBreakpoint(o);
                                if (l && e.currentBreakpoint !== l) {
                                    var d = l in o ? o[l] : void 0;
                                    d && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach((function(e) {
                                        var t = d[e];
                                        void 0 !== t && (d[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
                                    }));
                                    var c = d || e.originalParams,
                                        u = a.slidesPerColumn > 1,
                                        p = c.slidesPerColumn > 1;
                                    u && !p ? s.removeClass("".concat(a.containerModifierClass, "multirow ").concat(a.containerModifierClass, "multirow-column")) : !u && p && (s.addClass("".concat(a.containerModifierClass, "multirow")), "column" === c.slidesPerColumnFill && s.addClass("".concat(a.containerModifierClass, "multirow-column")));
                                    var h = c.direction && c.direction !== a.direction,
                                        v = a.loop && (c.slidesPerView !== a.slidesPerView || h);
                                    h && i && e.changeDirection(), E.extend(e.params, c), E.extend(e, {
                                        allowTouchMove: e.params.allowTouchMove,
                                        allowSlideNext: e.params.allowSlideNext,
                                        allowSlidePrev: e.params.allowSlidePrev
                                    }), e.currentBreakpoint = l, v && i && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - r + e.loopedSlides, 0, !1)), e.emit("breakpoint", c)
                                }
                            }
                        },
                        getBreakpoint: function(e) {
                            if (e) {
                                var t = !1,
                                    i = Object.keys(e).map((function(e) {
                                        if ("string" == typeof e && 0 === e.indexOf("@")) {
                                            var t = parseFloat(e.substr(1));
                                            return {
                                                value: g.innerHeight * t,
                                                point: e
                                            }
                                        }
                                        return {
                                            value: e,
                                            point: e
                                        }
                                    }));
                                i.sort((function(e, t) {
                                    return parseInt(e.value, 10) - parseInt(t.value, 10)
                                }));
                                for (var n = 0; n < i.length; n += 1) {
                                    var r = i[n],
                                        a = r.point;
                                    r.value <= g.innerWidth && (t = a)
                                }
                                return t || "max"
                            }
                        }
                    },
                    checkOverflow: {
                        checkOverflow: function() {
                            var e = this,
                                t = e.params,
                                i = e.isLocked,
                                n = e.slides.length > 0 && t.slidesOffsetBefore + t.spaceBetween * (e.slides.length - 1) + e.slides[0].offsetWidth * e.slides.length;
                            t.slidesOffsetBefore && t.slidesOffsetAfter && n ? e.isLocked = n <= e.size : e.isLocked = 1 === e.snapGrid.length, e.allowSlideNext = !e.isLocked, e.allowSlidePrev = !e.isLocked, i !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"), i && i !== e.isLocked && (e.isEnd = !1, e.navigation && e.navigation.update())
                        }
                    },
                    classes: {
                        addClasses: function() {
                            var e = this,
                                t = e.classNames,
                                i = e.params,
                                n = e.rtl,
                                r = e.$el,
                                a = [];
                            a.push("initialized"), a.push(i.direction), i.freeMode && a.push("free-mode"), i.autoHeight && a.push("autoheight"), n && a.push("rtl"), i.slidesPerColumn > 1 && (a.push("multirow"), "column" === i.slidesPerColumnFill && a.push("multirow-column")), _.android && a.push("android"), _.ios && a.push("ios"), i.cssMode && a.push("css-mode"), a.forEach((function(e) {
                                t.push(i.containerModifierClass + e)
                            })), r.addClass(t.join(" "))
                        },
                        removeClasses: function() {
                            var e = this.$el,
                                t = this.classNames;
                            e.removeClass(t.join(" "))
                        }
                    },
                    images: {
                        loadImage: function(e, t, i, n, r, a) {
                            var s;

                            function o() {
                                a && a()
                            }
                            T(e).parent("picture")[0] || e.complete && r ? o() : t ? ((s = new g.Image).onload = o, s.onerror = o, n && (s.sizes = n), i && (s.srcset = i), t && (s.src = t)) : o()
                        },
                        preloadImages: function() {
                            var e = this;

                            function t() {
                                null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                            }
                            e.imagesToLoad = e.$el.find("img");
                            for (var i = 0; i < e.imagesToLoad.length; i += 1) {
                                var n = e.imagesToLoad[i];
                                e.loadImage(n, n.currentSrc || n.getAttribute("src"), n.srcset || n.getAttribute("srcset"), n.sizes || n.getAttribute("sizes"), !0, t)
                            }
                        }
                    }
                },
                ae = {},
                se = function(e) {
                    ! function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && r(e, t)
                    }(i, e);
                    var t = S(i);

                    function i() {
                        var e, r, a;
                        Object(c.a)(this, i);
                        for (var s = arguments.length, l = new Array(s), d = 0; d < s; d++) l[d] = arguments[d];
                        1 === l.length && l[0].constructor && l[0].constructor === Object ? a = l[0] : (r = l[0], a = l[1]), a || (a = {}), a = E.extend({}, a), r && !a.el && (a.el = r), e = t.call(this, a), Object.keys(re).forEach((function(e) {
                            Object.keys(re[e]).forEach((function(t) {
                                i.prototype[t] || (i.prototype[t] = re[e][t])
                            }))
                        }));
                        var u = n(e);
                        void 0 === u.modules && (u.modules = {}), Object.keys(u.modules).forEach((function(e) {
                            var t = u.modules[e];
                            if (t.params) {
                                var i = Object.keys(t.params)[0],
                                    n = t.params[i];
                                if ("object" !== Object(p.a)(n) || null === n) return;
                                if (!(i in a) || !("enabled" in n)) return;
                                !0 === a[i] && (a[i] = {
                                    enabled: !0
                                }), "object" !== Object(p.a)(a[i]) || "enabled" in a[i] || (a[i].enabled = !0), a[i] || (a[i] = {
                                    enabled: !1
                                })
                            }
                        }));
                        var h = E.extend({}, ne);
                        u.useModulesParams(h), u.params = E.extend({}, h, ae, a), u.originalParams = E.extend({}, u.params), u.passedParams = E.extend({}, a), u.$ = T;
                        var v, f, m, g = T(u.params.el);
                        if (!(r = g[0])) return o(e, void 0);
                        if (g.length > 1) {
                            var w = [];
                            return g.each((function(e, t) {
                                var n = E.extend({}, a, {
                                    el: t
                                });
                                w.push(new i(n))
                            })), o(e, w)
                        }
                        return r.swiper = u, g.data("swiper", u), r && r.shadowRoot && r.shadowRoot.querySelector ? (v = T(r.shadowRoot.querySelector(".".concat(u.params.wrapperClass)))).children = function(e) {
                            return g.children(e)
                        } : v = g.children(".".concat(u.params.wrapperClass)), E.extend(u, {
                            $el: g,
                            el: r,
                            $wrapperEl: v,
                            wrapperEl: v[0],
                            classNames: [],
                            slides: T(),
                            slidesGrid: [],
                            snapGrid: [],
                            slidesSizesGrid: [],
                            isHorizontal: function() {
                                return "horizontal" === u.params.direction
                            },
                            isVertical: function() {
                                return "vertical" === u.params.direction
                            },
                            rtl: "rtl" === r.dir.toLowerCase() || "rtl" === g.css("direction"),
                            rtlTranslate: "horizontal" === u.params.direction && ("rtl" === r.dir.toLowerCase() || "rtl" === g.css("direction")),
                            wrongRTL: "-webkit-box" === v.css("display"),
                            activeIndex: 0,
                            realIndex: 0,
                            isBeginning: !0,
                            isEnd: !1,
                            translate: 0,
                            previousTranslate: 0,
                            progress: 0,
                            velocity: 0,
                            animating: !1,
                            allowSlideNext: u.params.allowSlideNext,
                            allowSlidePrev: u.params.allowSlidePrev,
                            touchEvents: (f = ["touchstart", "touchmove", "touchend", "touchcancel"], m = ["mousedown", "mousemove", "mouseup"], x.pointerEvents && (m = ["pointerdown", "pointermove", "pointerup"]), u.touchEventsTouch = {
                                start: f[0],
                                move: f[1],
                                end: f[2],
                                cancel: f[3]
                            }, u.touchEventsDesktop = {
                                start: m[0],
                                move: m[1],
                                end: m[2]
                            }, x.touch || !u.params.simulateTouch ? u.touchEventsTouch : u.touchEventsDesktop),
                            touchEventsData: {
                                isTouched: void 0,
                                isMoved: void 0,
                                allowTouchCallbacks: void 0,
                                touchStartTime: void 0,
                                isScrolling: void 0,
                                currentTranslate: void 0,
                                startTranslate: void 0,
                                allowThresholdMove: void 0,
                                formElements: "input, select, option, textarea, button, video, label",
                                lastClickTime: E.now(),
                                clickTimeout: void 0,
                                velocities: [],
                                allowMomentumBounce: void 0,
                                isTouchEvent: void 0,
                                startMoving: void 0
                            },
                            allowClick: !0,
                            allowTouchMove: u.params.allowTouchMove,
                            touches: {
                                startX: 0,
                                startY: 0,
                                currentX: 0,
                                currentY: 0,
                                diff: 0
                            },
                            imagesToLoad: [],
                            imagesLoaded: 0
                        }), u.useModules(), u.params.init && u.init(), o(e, u)
                    }
                    return Object(u.a)(i, [{
                        key: "slidesPerViewDynamic",
                        value: function() {
                            var e = this,
                                t = e.params,
                                i = e.slides,
                                n = e.slidesGrid,
                                r = e.size,
                                a = e.activeIndex,
                                s = 1;
                            if (t.centeredSlides) {
                                for (var o, l = i[a].swiperSlideSize, d = a + 1; d < i.length; d += 1) i[d] && !o && (s += 1, (l += i[d].swiperSlideSize) > r && (o = !0));
                                for (var c = a - 1; c >= 0; c -= 1) i[c] && !o && (s += 1, (l += i[c].swiperSlideSize) > r && (o = !0))
                            } else
                                for (var u = a + 1; u < i.length; u += 1) n[u] - n[a] < r && (s += 1);
                            return s
                        }
                    }, {
                        key: "update",
                        value: function() {
                            var e = this;
                            if (e && !e.destroyed) {
                                var t = e.snapGrid,
                                    i = e.params;
                                i.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (n(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || n(), i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
                            }

                            function n() {
                                var t = e.rtlTranslate ? -1 * e.translate : e.translate,
                                    i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                                e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses()
                            }
                        }
                    }, {
                        key: "changeDirection",
                        value: function(e) {
                            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                                i = this,
                                n = i.params.direction;
                            return e || (e = "horizontal" === n ? "vertical" : "horizontal"), e === n || "horizontal" !== e && "vertical" !== e || (i.$el.removeClass("".concat(i.params.containerModifierClass).concat(n)).addClass("".concat(i.params.containerModifierClass).concat(e)), i.params.direction = e, i.slides.each((function(t, i) {
                                "vertical" === e ? i.style.width = "" : i.style.height = ""
                            })), i.emit("changeDirection"), t && i.update()), i
                        }
                    }, {
                        key: "init",
                        value: function() {
                            var e = this;
                            e.initialized || (e.emit("beforeInit"), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.params.loop && e.loopCreate(), e.updateSize(), e.updateSlides(), e.params.watchOverflow && e.checkOverflow(), e.params.grabCursor && e.setGrabCursor(), e.params.preloadImages && e.preloadImages(), e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit), e.attachEvents(), e.initialized = !0, e.emit("init"))
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                                t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                                i = this,
                                n = i.params,
                                r = i.$el,
                                a = i.$wrapperEl,
                                s = i.slides;
                            return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), n.loop && i.loopDestroy(), t && (i.removeClasses(), r.removeAttr("style"), a.removeAttr("style"), s && s.length && s.removeClass([n.slideVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach((function(e) {
                                i.off(e)
                            })), !1 !== e && (i.$el[0].swiper = null, i.$el.data("swiper", null), E.deleteProps(i)), i.destroyed = !0), null
                        }
                    }], [{
                        key: "extendDefaults",
                        value: function(e) {
                            E.extend(ae, e)
                        }
                    }, {
                        key: "extendedDefaults",
                        get: function() {
                            return ae
                        }
                    }, {
                        key: "defaults",
                        get: function() {
                            return ne
                        }
                    }, {
                        key: "Class",
                        get: function() {
                            return C
                        }
                    }, {
                        key: "$",
                        get: function() {
                            return T
                        }
                    }]), i
                }(C),
                oe = {
                    name: "device",
                    proto: {
                        device: _
                    },
                    static: {
                        device: _
                    }
                },
                le = {
                    name: "support",
                    proto: {
                        support: x
                    },
                    static: {
                        support: x
                    }
                },
                de = {
                    isEdge: !!g.navigator.userAgent.match(/Edge/g),
                    isSafari: function() {
                        var e = g.navigator.userAgent.toLowerCase();
                        return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
                    }(),
                    isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(g.navigator.userAgent)
                },
                ce = {
                    name: "browser",
                    proto: {
                        browser: de
                    },
                    static: {
                        browser: de
                    }
                },
                ue = {
                    name: "resize",
                    create: function() {
                        var e = this;
                        E.extend(e, {
                            resize: {
                                resizeHandler: function() {
                                    e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
                                },
                                orientationChangeHandler: function() {
                                    e && !e.destroyed && e.initialized && e.emit("orientationchange")
                                }
                            }
                        })
                    },
                    on: {
                        init: function() {
                            g.addEventListener("resize", this.resize.resizeHandler), g.addEventListener("orientationchange", this.resize.orientationChangeHandler)
                        },
                        destroy: function() {
                            g.removeEventListener("resize", this.resize.resizeHandler), g.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
                        }
                    }
                },
                pe = {
                    func: g.MutationObserver || g.WebkitMutationObserver,
                    attach: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            i = this,
                            n = pe.func,
                            r = new n((function(e) {
                                if (1 !== e.length) {
                                    var t = function() {
                                        i.emit("observerUpdate", e[0])
                                    };
                                    g.requestAnimationFrame ? g.requestAnimationFrame(t) : g.setTimeout(t, 0)
                                } else i.emit("observerUpdate", e[0])
                            }));
                        r.observe(e, {
                            attributes: void 0 === t.attributes || t.attributes,
                            childList: void 0 === t.childList || t.childList,
                            characterData: void 0 === t.characterData || t.characterData
                        }), i.observer.observers.push(r)
                    },
                    init: function() {
                        var e = this;
                        if (x.observer && e.params.observer) {
                            if (e.params.observeParents)
                                for (var t = e.$el.parents(), i = 0; i < t.length; i += 1) e.observer.attach(t[i]);
                            e.observer.attach(e.$el[0], {
                                childList: e.params.observeSlideChildren
                            }), e.observer.attach(e.$wrapperEl[0], {
                                attributes: !1
                            })
                        }
                    },
                    destroy: function() {
                        this.observer.observers.forEach((function(e) {
                            e.disconnect()
                        })), this.observer.observers = []
                    }
                },
                he = {
                    name: "observer",
                    params: {
                        observer: !1,
                        observeParents: !1,
                        observeSlideChildren: !1
                    },
                    create: function() {
                        var e = this;
                        E.extend(e, {
                            observer: {
                                init: pe.init.bind(e),
                                attach: pe.attach.bind(e),
                                destroy: pe.destroy.bind(e),
                                observers: []
                            }
                        })
                    },
                    on: {
                        init: function() {
                            this.observer.init()
                        },
                        destroy: function() {
                            this.observer.destroy()
                        }
                    }
                };
            var ve = {
                    lastScrollTime: E.now(),
                    lastEventBeforeSnap: void 0,
                    recentWheelEvents: [],
                    event: function() {
                        return g.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function() {
                            var e = "onwheel",
                                t = e in f;
                            if (!t) {
                                var i = f.createElement("div");
                                i.setAttribute(e, "return;"), t = "function" == typeof i.onwheel
                            }
                            return !t && f.implementation && f.implementation.hasFeature && !0 !== f.implementation.hasFeature("", "") && (t = f.implementation.hasFeature("Events.wheel", "3.0")), t
                        }() ? "wheel" : "mousewheel"
                    },
                    normalize: function(e) {
                        var t = 0,
                            i = 0,
                            n = 0,
                            r = 0;
                        return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), n = 10 * t, r = 10 * i, "deltaY" in e && (r = e.deltaY), "deltaX" in e && (n = e.deltaX), e.shiftKey && !n && (n = r, r = 0), (n || r) && e.deltaMode && (1 === e.deltaMode ? (n *= 40, r *= 40) : (n *= 800, r *= 800)), n && !t && (t = n < 1 ? -1 : 1), r && !i && (i = r < 1 ? -1 : 1), {
                            spinX: t,
                            spinY: i,
                            pixelX: n,
                            pixelY: r
                        }
                    },
                    handleMouseEnter: function() {
                        this.mouseEntered = !0
                    },
                    handleMouseLeave: function() {
                        this.mouseEntered = !1
                    },
                    handle: function(e) {
                        var t = e,
                            i = this,
                            n = i.params.mousewheel;
                        i.params.cssMode && t.preventDefault();
                        var r = i.$el;
                        if ("container" !== i.params.mousewheel.eventsTarged && (r = T(i.params.mousewheel.eventsTarged)), !i.mouseEntered && !r[0].contains(t.target) && !n.releaseOnEdges) return !0;
                        t.originalEvent && (t = t.originalEvent);
                        var a = 0,
                            s = i.rtlTranslate ? -1 : 1,
                            o = ve.normalize(t);
                        if (n.forceToAxis)
                            if (i.isHorizontal()) {
                                if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;
                                a = -o.pixelX * s
                            } else {
                                if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;
                                a = -o.pixelY
                            }
                        else a = Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * s : -o.pixelY;
                        if (0 === a) return !0;
                        if (n.invert && (a = -a), i.params.freeMode) {
                            var l = {
                                    time: E.now(),
                                    delta: Math.abs(a),
                                    direction: Math.sign(a)
                                },
                                d = i.mousewheel.lastEventBeforeSnap,
                                c = d && l.time < d.time + 500 && l.delta <= d.delta && l.direction === d.direction;
                            if (!c) {
                                i.mousewheel.lastEventBeforeSnap = void 0, i.params.loop && i.loopFix();
                                var u = i.getTranslate() + a * n.sensitivity,
                                    p = i.isBeginning,
                                    h = i.isEnd;
                                if (u >= i.minTranslate() && (u = i.minTranslate()), u <= i.maxTranslate() && (u = i.maxTranslate()), i.setTransition(0), i.setTranslate(u), i.updateProgress(), i.updateActiveIndex(), i.updateSlidesClasses(), (!p && i.isBeginning || !h && i.isEnd) && i.updateSlidesClasses(), i.params.freeModeSticky) {
                                    clearTimeout(i.mousewheel.timeout), i.mousewheel.timeout = void 0;
                                    var v = i.mousewheel.recentWheelEvents;
                                    v.length >= 15 && v.shift();
                                    var f = v.length ? v[v.length - 1] : void 0,
                                        m = v[0];
                                    if (v.push(l), f && (l.delta > f.delta || l.direction !== f.direction)) v.splice(0);
                                    else if (v.length >= 15 && l.time - m.time < 500 && m.delta - l.delta >= 1 && l.delta <= 6) {
                                        var g = a > 0 ? .8 : .2;
                                        i.mousewheel.lastEventBeforeSnap = l, v.splice(0), i.mousewheel.timeout = E.nextTick((function() {
                                            i.slideToClosest(i.params.speed, !0, void 0, g)
                                        }), 0)
                                    }
                                    i.mousewheel.timeout || (i.mousewheel.timeout = E.nextTick((function() {
                                        i.mousewheel.lastEventBeforeSnap = l, v.splice(0), i.slideToClosest(i.params.speed, !0, void 0, .5)
                                    }), 500))
                                }
                                if (c || i.emit("scroll", t), i.params.autoplay && i.params.autoplayDisableOnInteraction && i.autoplay.stop(), u === i.minTranslate() || u === i.maxTranslate()) return !0
                            }
                        } else {
                            var w = {
                                    time: E.now(),
                                    delta: Math.abs(a),
                                    direction: Math.sign(a),
                                    raw: e
                                },
                                y = i.mousewheel.recentWheelEvents;
                            y.length >= 2 && y.shift();
                            var S = y.length ? y[y.length - 1] : void 0;
                            if (y.push(w), S ? (w.direction !== S.direction || w.delta > S.delta || w.time > S.time + 150) && i.mousewheel.animateSlider(w) : i.mousewheel.animateSlider(w), i.mousewheel.releaseScroll(w)) return !0
                        }
                        return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
                    },
                    animateSlider: function(e) {
                        var t = this;
                        return e.delta >= 6 && E.now() - t.mousewheel.lastScrollTime < 60 || (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(), t.emit("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(), t.emit("scroll", e.raw)), t.mousewheel.lastScrollTime = (new g.Date).getTime(), !1)
                    },
                    releaseScroll: function(e) {
                        var t = this,
                            i = t.params.mousewheel;
                        if (e.direction < 0) {
                            if (t.isEnd && !t.params.loop && i.releaseOnEdges) return !0
                        } else if (t.isBeginning && !t.params.loop && i.releaseOnEdges) return !0;
                        return !1
                    },
                    enable: function() {
                        var e = this,
                            t = ve.event();
                        if (e.params.cssMode) return e.wrapperEl.removeEventListener(t, e.mousewheel.handle), !0;
                        if (!t) return !1;
                        if (e.mousewheel.enabled) return !1;
                        var i = e.$el;
                        return "container" !== e.params.mousewheel.eventsTarged && (i = T(e.params.mousewheel.eventsTarged)), i.on("mouseenter", e.mousewheel.handleMouseEnter), i.on("mouseleave", e.mousewheel.handleMouseLeave), i.on(t, e.mousewheel.handle), e.mousewheel.enabled = !0, !0
                    },
                    disable: function() {
                        var e = this,
                            t = ve.event();
                        if (e.params.cssMode) return e.wrapperEl.addEventListener(t, e.mousewheel.handle), !0;
                        if (!t) return !1;
                        if (!e.mousewheel.enabled) return !1;
                        var i = e.$el;
                        return "container" !== e.params.mousewheel.eventsTarged && (i = T(e.params.mousewheel.eventsTarged)), i.off(t, e.mousewheel.handle), e.mousewheel.enabled = !1, !0
                    }
                },
                fe = {
                    update: function() {
                        var e = this,
                            t = e.params.navigation;
                        if (!e.params.loop) {
                            var i = e.navigation,
                                n = i.$nextEl,
                                r = i.$prevEl;
                            r && r.length > 0 && (e.isBeginning ? r.addClass(t.disabledClass) : r.removeClass(t.disabledClass), r[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)), n && n.length > 0 && (e.isEnd ? n.addClass(t.disabledClass) : n.removeClass(t.disabledClass), n[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass))
                        }
                    },
                    onPrevClick: function(e) {
                        var t = this;
                        e.preventDefault(), t.isBeginning && !t.params.loop || t.slidePrev()
                    },
                    onNextClick: function(e) {
                        var t = this;
                        e.preventDefault(), t.isEnd && !t.params.loop || t.slideNext()
                    },
                    init: function() {
                        var e, t, i = this,
                            n = i.params.navigation;
                        (n.nextEl || n.prevEl) && (n.nextEl && (e = T(n.nextEl), i.params.uniqueNavElements && "string" == typeof n.nextEl && e.length > 1 && 1 === i.$el.find(n.nextEl).length && (e = i.$el.find(n.nextEl))), n.prevEl && (t = T(n.prevEl), i.params.uniqueNavElements && "string" == typeof n.prevEl && t.length > 1 && 1 === i.$el.find(n.prevEl).length && (t = i.$el.find(n.prevEl))), e && e.length > 0 && e.on("click", i.navigation.onNextClick), t && t.length > 0 && t.on("click", i.navigation.onPrevClick), E.extend(i.navigation, {
                            $nextEl: e,
                            nextEl: e && e[0],
                            $prevEl: t,
                            prevEl: t && t[0]
                        }))
                    },
                    destroy: function() {
                        var e = this,
                            t = e.navigation,
                            i = t.$nextEl,
                            n = t.$prevEl;
                        i && i.length && (i.off("click", e.navigation.onNextClick), i.removeClass(e.params.navigation.disabledClass)), n && n.length && (n.off("click", e.navigation.onPrevClick), n.removeClass(e.params.navigation.disabledClass))
                    }
                },
                me = {
                    name: "navigation",
                    params: {
                        navigation: {
                            nextEl: null,
                            prevEl: null,
                            hideOnClick: !1,
                            disabledClass: "swiper-button-disabled",
                            hiddenClass: "swiper-button-hidden",
                            lockClass: "swiper-button-lock"
                        }
                    },
                    create: function() {
                        var e = this;
                        E.extend(e, {
                            navigation: {
                                init: fe.init.bind(e),
                                update: fe.update.bind(e),
                                destroy: fe.destroy.bind(e),
                                onNextClick: fe.onNextClick.bind(e),
                                onPrevClick: fe.onPrevClick.bind(e)
                            }
                        })
                    },
                    on: {
                        init: function() {
                            this.navigation.init(), this.navigation.update()
                        },
                        toEdge: function() {
                            this.navigation.update()
                        },
                        fromEdge: function() {
                            this.navigation.update()
                        },
                        destroy: function() {
                            this.navigation.destroy()
                        },
                        click: function(e) {
                            var t, i = this,
                                n = i.navigation,
                                r = n.$nextEl,
                                a = n.$prevEl;
                            !i.params.navigation.hideOnClick || T(e.target).is(a) || T(e.target).is(r) || (r ? t = r.hasClass(i.params.navigation.hiddenClass) : a && (t = a.hasClass(i.params.navigation.hiddenClass)), !0 === t ? i.emit("navigationShow", i) : i.emit("navigationHide", i), r && r.toggleClass(i.params.navigation.hiddenClass), a && a.toggleClass(i.params.navigation.hiddenClass))
                        }
                    }
                },
                ge = {
                    run: function() {
                        var e = this,
                            t = e.slides.eq(e.activeIndex),
                            i = e.params.autoplay.delay;
                        t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), clearTimeout(e.autoplay.timeout), e.autoplay.timeout = E.nextTick((function() {
                            e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")), e.params.cssMode && e.autoplay.running && e.autoplay.run()
                        }), i)
                    },
                    start: function() {
                        var e = this;
                        return void 0 === e.autoplay.timeout && (!e.autoplay.running && (e.autoplay.running = !0, e.emit("autoplayStart"), e.autoplay.run(), !0))
                    },
                    stop: function() {
                        var e = this;
                        return !!e.autoplay.running && (void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), e.autoplay.timeout = void 0), e.autoplay.running = !1, e.emit("autoplayStop"), !0))
                    },
                    pause: function(e) {
                        var t = this;
                        t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd)) : (t.autoplay.paused = !1, t.autoplay.run())))
                    }
                },
                we = {
                    name: "autoplay",
                    params: {
                        autoplay: {
                            enabled: !1,
                            delay: 3e3,
                            waitForTransition: !0,
                            disableOnInteraction: !0,
                            stopOnLastSlide: !1,
                            reverseDirection: !1
                        }
                    },
                    create: function() {
                        var e = this;
                        E.extend(e, {
                            autoplay: {
                                running: !1,
                                paused: !1,
                                run: ge.run.bind(e),
                                start: ge.start.bind(e),
                                stop: ge.stop.bind(e),
                                pause: ge.pause.bind(e),
                                onVisibilityChange: function() {
                                    "hidden" === document.visibilityState && e.autoplay.running && e.autoplay.pause(), "visible" === document.visibilityState && e.autoplay.paused && (e.autoplay.run(), e.autoplay.paused = !1)
                                },
                                onTransitionEnd: function(t) {
                                    e && !e.destroyed && e.$wrapperEl && t.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd), e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd), e.autoplay.paused = !1, e.autoplay.running ? e.autoplay.run() : e.autoplay.stop())
                                }
                            }
                        })
                    },
                    on: {
                        init: function() {
                            var e = this;
                            e.params.autoplay.enabled && (e.autoplay.start(), document.addEventListener("visibilitychange", e.autoplay.onVisibilityChange))
                        },
                        beforeTransitionStart: function(e, t) {
                            var i = this;
                            i.autoplay.running && (t || !i.params.autoplay.disableOnInteraction ? i.autoplay.pause(e) : i.autoplay.stop())
                        },
                        sliderFirstMove: function() {
                            var e = this;
                            e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause())
                        },
                        touchEnd: function() {
                            var e = this;
                            e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && e.autoplay.run()
                        },
                        destroy: function() {
                            var e = this;
                            e.autoplay.running && e.autoplay.stop(), document.removeEventListener("visibilitychange", e.autoplay.onVisibilityChange)
                        }
                    }
                },
                Te = [oe, le, ce, ue, he];
            void 0 === se.use && (se.use = se.Class.use, se.installModule = se.Class.installModule), se.use(Te)
        }
    }
]);