(window.webpackJsonp = window.webpackJsonp || []).push([
    [7], {
        10: function(e, o, s) {
            "use strict";
            s.r(o);
            var i = s(0),
                t = s.n(i),
                r = (s(1018), s(1014)),
                n = s(1015);
            o.default = function() {
                Object.keys(r).forEach((function(e) {
                    var o = ".".concat(Object(n.a)(e), "-carousel");
                    t()(o) && t()(o).slick(r[e])
                }))
            }
        },
        1014: function(e, o, s) {
            "use strict";

            function i(e, o) {
                var s = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    o && (i = i.filter((function(o) {
                        return Object.getOwnPropertyDescriptor(e, o).enumerable
                    }))), s.push.apply(s, i)
                }
                return s
            }

            function t(e, o, s) {
                return o in e ? Object.defineProperty(e, o, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[o] = s, e
            }
            s.r(o), s.d(o, "exploreIndustries", (function() {
                return r
            })), s.d(o, "brands", (function() {
                return n
            })), s.d(o, "appDevelopment", (function() {
                return l
            })), s.d(o, "reviews", (function() {
                return d
            })), s.d(o, "reviewsSingle", (function() {
                return a
            })), s.d(o, "imgTitleText", (function() {
                return c
            })), s.d(o, "recognitions", (function() {
                return p
            })), s.d(o, "servicesreviews", (function() {
                return u
            })), s.d(o, "casestudies", (function() {
                return w
            })), s.d(o, "ourwork", (function() {
                return f
            })), s.d(o, "locations", (function() {
                return S
            })), s.d(o, "retailOurWork", (function() {
                return T
            })), s.d(o, "fintechOurWork", (function() {
                return h
            })), s.d(o, "hiTechOurWork", (function() {
                return b
            })), s.d(o, "medtechOurWork", (function() {
                return v
            })), s.d(o, "AppDevelopmentCompanyRecognitions", (function() {
                return g
            })), s.d(o, "pwaRecognitions", (function() {
                return y
            })), s.d(o, "qaStrategies", (function() {
                return k
            })), s.d(o, "development", (function() {
                return m
            })), s.d(o, "examplesBrands", (function() {
                return O
            })), s.d(o, "menuItems", (function() {
                return P
            }));
            var r = {
                    dots: !1,
                    arrows: !1,
                    infinite: !1,
                    speed: 300,
                    slidesToShow: 6,
                    slidesToScroll: 6,
                    responsive: [{
                        breakpoint: 1025,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            infinite: !0,
                            dots: !0
                        }
                    }, {
                        breakpoint: 640,
                        settings: {
                            variableWidth: !0,
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            infinite: !0,
                            dots: !0
                        }
                    }]
                },
                n = {
                    dots: !0,
                    arrows: !0,
                    infinite: !0,
                    speed: 300,
                    slidesToShow: 5,
                    slidesToScroll: 2,
                    responsive: [{
                        breakpoint: 1025,
                        settings: {
                            arrows: !1,
                            slidesToShow: 4,
                            slidesToScroll: 2,
                            infinite: !0
                        }
                    }, {
                        breakpoint: 640,
                        settings: {
                            arrows: !1,
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            infinite: !0
                        }
                    }]
                },
                l = {
                    dots: !0,
                    arrows: !0,
                    infinite: !0,
                    speed: 300,
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    responsive: [{
                        breakpoint: 1025,
                        settings: {
                            arrows: !1,
                            slidesToShow: 4,
                            slidesToScroll: 2,
                            infinite: !0
                        }
                    }, {
                        breakpoint: 640,
                        settings: {
                            arrows: !1,
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            infinite: !0
                        }
                    }]
                },
                d = {
                    dots: !0,
                    arrows: !1,
                    infinite: !1,
                    speed: 300,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    responsive: [{
                        breakpoint: 1025,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            infinite: !0
                        }
                    }, {
                        breakpoint: 640,
                        settings: {
                            dots: !0,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: !0
                        }
                    }]
                },
                a = {
                    dots: !0,
                    arrows: !1,
                    infinite: !1,
                    speed: 300,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    responsive: [{
                        breakpoint: 1025,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: !0
                        }
                    }, {
                        breakpoint: 640,
                        settings: {
                            dots: !0,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: !0
                        }
                    }]
                },
                c = {
                    dots: !0,
                    arrows: !1,
                    infinite: !1,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: !0,
                    autoplaySpeed: 15e3,
                    responsive: [{
                        breakpoint: 1025,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: !0
                        }
                    }, {
                        breakpoint: 640,
                        settings: {
                            dots: !0,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: !0
                        }
                    }]
                },
                p = {
                    dots: !0,
                    arrows: !1,
                    speed: 300,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    responsive: [{
                        breakpoint: 1025,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            infinite: !0
                        }
                    }, {
                        breakpoint: 640,
                        settings: {
                            arrows: !1,
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }]
                },
                u = {
                    dots: !1,
                    arrows: !1,
                    infinite: !1,
                    speed: 300,
                    slidesToShow: 2,
                    responsive: [{
                        breakpoint: 1025,
                        settings: {
                            dots: !0,
                            slidesToShow: 2,
                            infinite: !0
                        }
                    }, {
                        breakpoint: 640,
                        settings: {
                            dots: !0,
                            variableWidth: !0,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: !0
                        }
                    }]
                },
                w = {
                    dots: !0,
                    arrows: !1,
                    infinite: !0,
                    autoplay: !0,
                    autoplaySpeed: 15e3,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    responsive: [{
                        breakpoint: 1025,
                        settings: {
                            dots: !0,
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            infinite: !0
                        }
                    }, {
                        breakpoint: 640,
                        settings: {
                            dots: !0,
                            variableWidth: !0,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: !0
                        }
                    }]
                },
                f = {
                    dots: !0,
                    arrows: !1,
                    infinite: !1,
                    speed: 300,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    responsive: [{
                        breakpoint: 640,
                        settings: {
                            dots: !0,
                            variableWidth: !0,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: !0
                        }
                    }]
                },
                S = {
                    dots: !0,
                    arrows: !0,
                    speed: 300,
                    slidesToShow: 5,
                    responsive: [{
                        breakpoint: 1025,
                        settings: {
                            arrows: !1,
                            slidesToShow: 5
                        }
                    }, {
                        breakpoint: 640,
                        settings: {
                            arrows: !1,
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            infinite: !0
                        }
                    }]
                },
                T = {
                    dots: !1,
                    arrows: !1,
                    infinite: !1,
                    speed: 300,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    responsive: [{
                        breakpoint: 1025,
                        settings: {
                            dots: !0,
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            infinite: !0
                        }
                    }, {
                        breakpoint: 640,
                        settings: {
                            dots: !0,
                            variableWidth: !0,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: !0
                        }
                    }]
                },
                h = {
                    dots: !1,
                    arrows: !1,
                    infinite: !1,
                    speed: 300,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    responsive: [{
                        breakpoint: 1025,
                        settings: {
                            dots: !0,
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            infinite: !0
                        }
                    }, {
                        breakpoint: 640,
                        settings: {
                            dots: !0,
                            variableWidth: !0,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: !0
                        }
                    }]
                },
                b = function(e) {
                    for (var o = 1; o < arguments.length; o++) {
                        var s = null != arguments[o] ? arguments[o] : {};
                        o % 2 ? i(Object(s), !0).forEach((function(o) {
                            t(e, o, s[o])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : i(Object(s)).forEach((function(o) {
                            Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(s, o))
                        }))
                    }
                    return e
                }({}, h),
                v = {
                    dots: !1,
                    arrows: !1,
                    infinite: !1,
                    speed: 300,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    responsive: [{
                        breakpoint: 1025,
                        settings: {
                            dots: !0,
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            infinite: !0
                        }
                    }, {
                        breakpoint: 640,
                        settings: {
                            dots: !0,
                            variableWidth: !0,
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            infinite: !0
                        }
                    }]
                },
                g = {
                    dots: !0,
                    arrows: !1,
                    speed: 300,
                    slidesToShow: 1,
                    slidesToScroll: 3,
                    slidesPerRow: 3,
                    rows: 2,
                    responsive: [{
                        breakpoint: 1025,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            infinite: !0,
                            slidesPerRow: 1,
                            rows: 1
                        }
                    }, {
                        breakpoint: 640,
                        settings: {
                            arrows: !1,
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            slidesPerRow: 1,
                            rows: 1
                        }
                    }]
                },
                y = {
                    dots: !0,
                    arrows: !1,
                    speed: 300,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    slidesPerRow: 1,
                    rows: 1,
                    responsive: [{
                        breakpoint: 1025,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            infinite: !1,
                            slidesPerRow: 1,
                            rows: 1
                        }
                    }, {
                        breakpoint: 640,
                        settings: {
                            arrows: !1,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            slidesPerRow: 1,
                            rows: 1
                        }
                    }]
                },
                k = {
                    dots: !0,
                    arrows: !0,
                    speed: 300,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    slidesPerRow: 1,
                    rows: 1,
                    responsive: [{
                        breakpoint: 1025,
                        settings: {
                            arrows: !1,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: !0,
                            slidesPerRow: 1,
                            rows: 1
                        }
                    }, {
                        breakpoint: 640,
                        settings: {
                            arrows: !1,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            slidesPerRow: 1,
                            rows: 1
                        }
                    }]
                },
                m = {
                    dots: !0,
                    arrows: !0,
                    infinite: !0,
                    speed: 300,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    responsive: [{
                        breakpoint: 1025,
                        settings: {
                            arrows: !1,
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    }, {
                        breakpoint: 640,
                        settings: {
                            arrows: !1,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: !1
                        }
                    }]
                },
                O = {
                    dots: !0,
                    arrows: !0,
                    infinite: !0,
                    speed: 300,
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    responsive: [{
                        breakpoint: 1025,
                        settings: {
                            arrows: !1,
                            slidesToShow: 6,
                            slidesToScroll: 1
                        }
                    }, {
                        breakpoint: 640,
                        settings: {
                            arrows: !1,
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            infinite: !1
                        }
                    }]
                },
                P = {
                    dots: !0,
                    arrows: !0,
                    infinite: !0,
                    speed: 300,
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    responsive: [{
                        breakpoint: 1025,
                        settings: {
                            arrows: !1,
                            slidesToShow: 5,
                            slidesToScroll: 1
                        }
                    }, {
                        breakpoint: 640,
                        settings: {
                            arrows: !1,
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            infinite: !1
                        }
                    }]
                }
        },
        1015: function(e, o, s) {
            "use strict";
            s.d(o, "a", (function() {
                return l
            })), s.d(o, "b", (function() {
                return d
            })), s.d(o, "c", (function() {
                return a
            }));
            var i = s(0),
                t = s.n(i),
                r = (s(1017), s(1016)),
                n = s.n(r);

            function l(e) {
                return n.a.decamelize(e, {
                    separator: "-"
                })
            }

            function d(e) {
                var o = document.querySelector(e),
                    s = !1;
                null !== o && (t()(e).each((function() {
                    t()(this).validate()
                })), t()(document).on("submit", e, (function(o) {
                    if (s) {
                        var i = t()(e).find("button");
                        return o.preventDefault(), void i.prop("disabled", !0)
                    }
                    s = !0
                })))
            }

            function a(e) {
                var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500;
                e.style.removeProperty("display");
                var s = window.getComputedStyle(e).display;
                e.style.display = "none" === s ? "block" : "none";
                var i = e.offsetHeight;
                e.style.height = 0, e.offsetHeight, e.style.transitionDuration = o + "ms", e.style.height = i + "px", e.style.removeProperty("padding-top"), e.style.removeProperty("padding-bottom"), e.style.removeProperty("margin-top"), e.style.removeProperty("margin-bottom"), window.setTimeout((function() {
                    e.style.removeProperty("height"), e.style.removeProperty("overflow"), e.style.removeProperty("transition-duration"), e.style.removeProperty("transition-property")
                }), o)
            }
        },
        1016: function(e, o, s) {
            var i, t, r, n, l, d, a, c, p, u, w, f, S, T, h;
            r = function(e, o, s) {
                if (!p(o) || w(o) || f(o) || S(o) || c(o)) return o;
                var i, t = 0,
                    n = 0;
                if (u(o))
                    for (i = [], n = o.length; t < n; t++) i.push(r(e, o[t], s));
                else
                    for (var l in i = {}, o) Object.prototype.hasOwnProperty.call(o, l) && (i[e(l, s)] = r(e, o[l], s));
                return i
            }, n = function(e) {
                return T(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, (function(e, o) {
                    return o ? o.toUpperCase() : ""
                }))).substr(0, 1).toLowerCase() + e.substr(1)
            }, l = function(e) {
                var o = n(e);
                return o.substr(0, 1).toUpperCase() + o.substr(1)
            }, d = function(e, o) {
                return function(e, o) {
                    var s = (o = o || {}).separator || "_",
                        i = o.split || /(?=[A-Z])/;
                    return e.split(i).join(s)
                }(e, o).toLowerCase()
            }, a = Object.prototype.toString, c = function(e) {
                return "function" == typeof e
            }, p = function(e) {
                return e === Object(e)
            }, u = function(e) {
                return "[object Array]" == a.call(e)
            }, w = function(e) {
                return "[object Date]" == a.call(e)
            }, f = function(e) {
                return "[object RegExp]" == a.call(e)
            }, S = function(e) {
                return "[object Boolean]" == a.call(e)
            }, T = function(e) {
                return (e -= 0) == e
            }, h = function(e, o) {
                var s = o && "process" in o ? o.process : o;
                return "function" != typeof s ? e : function(o, i) {
                    return s(o, e, i)
                }
            }, void 0 === (t = "function" == typeof(i = {
                camelize: n,
                decamelize: d,
                pascalize: l,
                depascalize: d,
                camelizeKeys: function(e, o) {
                    return r(h(n, o), e)
                },
                decamelizeKeys: function(e, o) {
                    return r(h(d, o), e, o)
                },
                pascalizeKeys: function(e, o) {
                    return r(h(l, o), e)
                },
                depascalizeKeys: function() {
                    return this.decamelizeKeys.apply(this, arguments)
                }
            }) ? i.call(o, s, o, e) : i) || (e.exports = t)
        }
    }
]);