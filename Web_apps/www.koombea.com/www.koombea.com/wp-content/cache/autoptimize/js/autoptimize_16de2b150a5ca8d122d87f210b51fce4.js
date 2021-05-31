var a, b;
"undefined" != typeof navigator && (a = window || {}, b = function(window) {
    "use strict";
    var svgNS = "http://www.w3.org/2000/svg",
        locationHref = "",
        initialDefaultFrame = -999999,
        subframeEnabled = !0,
        expressionsPlugin, isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
        cachedColors = {},
        bm_rounder = Math.round,
        bm_rnd, bm_pow = Math.pow,
        bm_sqrt = Math.sqrt,
        bm_abs = Math.abs,
        bm_floor = Math.floor,
        bm_max = Math.max,
        bm_min = Math.min,
        blitter = 10,
        BMMath = {};

    function ProjectInterface() {
        return {}
    }! function() {
        var t, e = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"],
            r = e.length;
        for (t = 0; t < r; t += 1) BMMath[e[t]] = Math[e[t]]
    }(), BMMath.random = Math.random, BMMath.abs = function(t) {
        if ("object" === typeof t && t.length) {
            var e, r = createSizedArray(t.length),
                i = t.length;
            for (e = 0; e < i; e += 1) r[e] = Math.abs(t[e]);
            return r
        }
        return Math.abs(t)
    };
    var defaultCurveSegments = 150,
        degToRads = Math.PI / 180,
        roundCorner = .5519;

    function roundValues(t) {
        bm_rnd = t ? Math.round : function(t) {
            return t
        }
    }

    function styleDiv(t) {
        t.style.position = "absolute", t.style.top = 0, t.style.left = 0, t.style.display = "block", t.style.transformOrigin = t.style.webkitTransformOrigin = "0 0", t.style.backfaceVisibility = t.style.webkitBackfaceVisibility = "visible", t.style.transformStyle = t.style.webkitTransformStyle = t.style.mozTransformStyle = "preserve-3d"
    }

    function BMEnterFrameEvent(t, e, r, i) {
        this.type = t, this.currentTime = e, this.totalTime = r, this.direction = i < 0 ? -1 : 1
    }

    function BMCompleteEvent(t, e) {
        this.type = t, this.direction = e < 0 ? -1 : 1
    }

    function BMCompleteLoopEvent(t, e, r, i) {
        this.type = t, this.currentLoop = r, this.totalLoops = e, this.direction = i < 0 ? -1 : 1
    }

    function BMSegmentStartEvent(t, e, r) {
        this.type = t, this.firstFrame = e, this.totalFrames = r
    }

    function BMDestroyEvent(t, e) {
        this.type = t, this.target = e
    }

    function BMRenderFrameErrorEvent(t, e) {
        this.type = "renderFrameError", this.nativeError = t, this.currentTime = e
    }

    function BMConfigErrorEvent(t) {
        this.type = "configError", this.nativeError = t
    }

    function BMAnimationConfigErrorEvent(t, e) {
        this.type = t, this.nativeError = e, this.currentTime = currentTime
    }
    roundValues(!1);
    var createElementID = (I = 0, function() {
            return "__lottie_element_" + ++I
        }),
        I;

    function HSVtoRGB(t, e, r) {
        var i, s, a, n, o, h, l, p;
        switch (h = r * (1 - e), l = r * (1 - (o = 6 * t - (n = Math.floor(6 * t))) * e), p = r * (1 - (1 - o) * e), n % 6) {
            case 0:
                i = r, s = p, a = h;
                break;
            case 1:
                i = l, s = r, a = h;
                break;
            case 2:
                i = h, s = r, a = p;
                break;
            case 3:
                i = h, s = l, a = r;
                break;
            case 4:
                i = p, s = h, a = r;
                break;
            case 5:
                i = r, s = h, a = l
        }
        return [i, s, a]
    }

    function RGBtoHSV(t, e, r) {
        var i, s = Math.max(t, e, r),
            a = Math.min(t, e, r),
            n = s - a,
            o = 0 === s ? 0 : n / s,
            h = s / 255;
        switch (s) {
            case a:
                i = 0;
                break;
            case t:
                i = e - r + n * (e < r ? 6 : 0), i /= 6 * n;
                break;
            case e:
                i = r - t + 2 * n, i /= 6 * n;
                break;
            case r:
                i = t - e + 4 * n, i /= 6 * n
        }
        return [i, o, h]
    }

    function addSaturationToRGB(t, e) {
        var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
        return r[1] += e, 1 < r[1] ? r[1] = 1 : r[1] <= 0 && (r[1] = 0), HSVtoRGB(r[0], r[1], r[2])
    }

    function addBrightnessToRGB(t, e) {
        var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
        return r[2] += e, 1 < r[2] ? r[2] = 1 : r[2] < 0 && (r[2] = 0), HSVtoRGB(r[0], r[1], r[2])
    }

    function addHueToRGB(t, e) {
        var r = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
        return r[0] += e / 360, 1 < r[0] ? r[0] -= 1 : r[0] < 0 && (r[0] += 1), HSVtoRGB(r[0], r[1], r[2])
    }
    var rgbToHex = function() {
        var t, e, i = [];
        for (t = 0; t < 256; t += 1) e = t.toString(16), i[t] = 1 == e.length ? "0" + e : e;
        return function(t, e, r) {
            return t < 0 && (t = 0), e < 0 && (e = 0), r < 0 && (r = 0), "#" + i[t] + i[e] + i[r]
        }
    }();

    function BaseEvent() {}
    BaseEvent.prototype = {
        triggerEvent: function(t, e) {
            if (this._cbs[t])
                for (var r = this._cbs[t].length, i = 0; i < r; i++) this._cbs[t][i](e)
        },
        addEventListener: function(t, e) {
            return this._cbs[t] || (this._cbs[t] = []), this._cbs[t].push(e),
                function() {
                    this.removeEventListener(t, e)
                }.bind(this)
        },
        removeEventListener: function(t, e) {
            if (e) {
                if (this._cbs[t]) {
                    for (var r = 0, i = this._cbs[t].length; r < i;) this._cbs[t][r] === e && (this._cbs[t].splice(r, 1), r -= 1, i -= 1), r += 1;
                    this._cbs[t].length || (this._cbs[t] = null)
                }
            } else this._cbs[t] = null
        }
    };
    var createTypedArray = "function" == typeof Uint8ClampedArray && "function" == typeof Float32Array ? function(t, e) {
        return "float32" === t ? new Float32Array(e) : "int16" === t ? new Int16Array(e) : "uint8c" === t ? new Uint8ClampedArray(e) : void 0
    } : function(t, e) {
        var r, i = 0,
            s = [];
        switch (t) {
            case "int16":
            case "uint8c":
                r = 1;
                break;
            default:
                r = 1.1
        }
        for (i = 0; i < e; i += 1) s.push(r);
        return s
    };

    function createSizedArray(t) {
        return Array.apply(null, {
            length: t
        })
    }

    function createNS(t) {
        return document.createElementNS(svgNS, t)
    }

    function createTag(t) {
        return document.createElement(t)
    }

    function DynamicPropertyContainer() {}
    DynamicPropertyContainer.prototype = {
        addDynamicProperty: function(t) {
            -1 === this.dynamicProperties.indexOf(t) && (this.dynamicProperties.push(t), this.container.addDynamicProperty(this), this._isAnimated = !0)
        },
        iterateDynamicProperties: function() {
            this._mdf = !1;
            var t, e = this.dynamicProperties.length;
            for (t = 0; t < e; t += 1) this.dynamicProperties[t].getValue(), this.dynamicProperties[t]._mdf && (this._mdf = !0)
        },
        initDynamicPropertyContainer: function(t) {
            this.container = t, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1
        }
    };
    var getBlendMode = (Ra = {
            0: "source-over",
            1: "multiply",
            2: "screen",
            3: "overlay",
            4: "darken",
            5: "lighten",
            6: "color-dodge",
            7: "color-burn",
            8: "hard-light",
            9: "soft-light",
            10: "difference",
            11: "exclusion",
            12: "hue",
            13: "saturation",
            14: "color",
            15: "luminosity"
        }, function(t) {
            return Ra[t] || ""
        }),
        Ra, Matrix = function() {
            var s = Math.cos,
                a = Math.sin,
                n = Math.tan,
                i = Math.round;

            function t() {
                return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this
            }

            function e(t) {
                if (0 === t) return this;
                var e = s(t),
                    r = a(t);
                return this._t(e, -r, 0, 0, r, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            }

            function r(t) {
                if (0 === t) return this;
                var e = s(t),
                    r = a(t);
                return this._t(1, 0, 0, 0, 0, e, -r, 0, 0, r, e, 0, 0, 0, 0, 1)
            }

            function o(t) {
                if (0 === t) return this;
                var e = s(t),
                    r = a(t);
                return this._t(e, 0, r, 0, 0, 1, 0, 0, -r, 0, e, 0, 0, 0, 0, 1)
            }

            function h(t) {
                if (0 === t) return this;
                var e = s(t),
                    r = a(t);
                return this._t(e, -r, 0, 0, r, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            }

            function l(t, e) {
                return this._t(1, e, t, 1, 0, 0)
            }

            function p(t, e) {
                return this.shear(n(t), n(e))
            }

            function m(t, e) {
                var r = s(e),
                    i = a(e);
                return this._t(r, i, 0, 0, -i, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, n(t), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(r, -i, 0, 0, i, r, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            }

            function f(t, e, r) {
                return r || 0 === r || (r = 1), 1 === t && 1 === e && 1 === r ? this : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, r, 0, 0, 0, 0, 1)
            }

            function c(t, e, r, i, s, a, n, o, h, l, p, m, f, c, d, u) {
                return this.props[0] = t, this.props[1] = e, this.props[2] = r, this.props[3] = i, this.props[4] = s, this.props[5] = a, this.props[6] = n, this.props[7] = o, this.props[8] = h, this.props[9] = l, this.props[10] = p, this.props[11] = m, this.props[12] = f, this.props[13] = c, this.props[14] = d, this.props[15] = u, this
            }

            function d(t, e, r) {
                return r = r || 0, 0 !== t || 0 !== e || 0 !== r ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, r, 1) : this
            }

            function u(t, e, r, i, s, a, n, o, h, l, p, m, f, c, d, u) {
                var y = this.props;
                if (1 === t && 0 === e && 0 === r && 0 === i && 0 === s && 1 === a && 0 === n && 0 === o && 0 === h && 0 === l && 1 === p && 0 === m) return y[12] = y[12] * t + y[15] * f, y[13] = y[13] * a + y[15] * c, y[14] = y[14] * p + y[15] * d, y[15] = y[15] * u, this._identityCalculated = !1, this;
                var g = y[0],
                    v = y[1],
                    b = y[2],
                    E = y[3],
                    x = y[4],
                    P = y[5],
                    S = y[6],
                    _ = y[7],
                    A = y[8],
                    C = y[9],
                    T = y[10],
                    k = y[11],
                    M = y[12],
                    D = y[13],
                    w = y[14],
                    F = y[15];
                return y[0] = g * t + v * s + b * h + E * f, y[1] = g * e + v * a + b * l + E * c, y[2] = g * r + v * n + b * p + E * d, y[3] = g * i + v * o + b * m + E * u, y[4] = x * t + P * s + S * h + _ * f, y[5] = x * e + P * a + S * l + _ * c, y[6] = x * r + P * n + S * p + _ * d, y[7] = x * i + P * o + S * m + _ * u, y[8] = A * t + C * s + T * h + k * f, y[9] = A * e + C * a + T * l + k * c, y[10] = A * r + C * n + T * p + k * d, y[11] = A * i + C * o + T * m + k * u, y[12] = M * t + D * s + w * h + F * f, y[13] = M * e + D * a + w * l + F * c, y[14] = M * r + D * n + w * p + F * d, y[15] = M * i + D * o + w * m + F * u, this._identityCalculated = !1, this
            }

            function y() {
                return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]), this._identityCalculated = !0), this._identity
            }

            function g(t) {
                for (var e = 0; e < 16;) {
                    if (t.props[e] !== this.props[e]) return !1;
                    e += 1
                }
                return !0
            }

            function v(t) {
                var e;
                for (e = 0; e < 16; e += 1) t.props[e] = this.props[e]
            }

            function b(t) {
                var e;
                for (e = 0; e < 16; e += 1) this.props[e] = t[e]
            }

            function E(t, e, r) {
                return {
                    x: t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12],
                    y: t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13],
                    z: t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14]
                }
            }

            function x(t, e, r) {
                return t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12]
            }

            function P(t, e, r) {
                return t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13]
            }

            function S(t, e, r) {
                return t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14]
            }

            function _() {
                var t = this.props[0] * this.props[5] - this.props[1] * this.props[4],
                    e = this.props[5] / t,
                    r = -this.props[1] / t,
                    i = -this.props[4] / t,
                    s = this.props[0] / t,
                    a = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / t,
                    n = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / t,
                    o = new Matrix;
                return o.props[0] = e, o.props[1] = r, o.props[4] = i, o.props[5] = s, o.props[12] = a, o.props[13] = n, o
            }

            function A(t) {
                return this.getInverseMatrix().applyToPointArray(t[0], t[1], t[2] || 0)
            }

            function C(t) {
                var e, r = t.length,
                    i = [];
                for (e = 0; e < r; e += 1) i[e] = A(t[e]);
                return i
            }

            function T(t, e, r) {
                var i = createTypedArray("float32", 6);
                if (this.isIdentity()) i[0] = t[0], i[1] = t[1], i[2] = e[0], i[3] = e[1], i[4] = r[0], i[5] = r[1];
                else {
                    var s = this.props[0],
                        a = this.props[1],
                        n = this.props[4],
                        o = this.props[5],
                        h = this.props[12],
                        l = this.props[13];
                    i[0] = t[0] * s + t[1] * n + h, i[1] = t[0] * a + t[1] * o + l, i[2] = e[0] * s + e[1] * n + h, i[3] = e[0] * a + e[1] * o + l, i[4] = r[0] * s + r[1] * n + h, i[5] = r[0] * a + r[1] * o + l
                }
                return i
            }

            function k(t, e, r) {
                return this.isIdentity() ? [t, e, r] : [t * this.props[0] + e * this.props[4] + r * this.props[8] + this.props[12], t * this.props[1] + e * this.props[5] + r * this.props[9] + this.props[13], t * this.props[2] + e * this.props[6] + r * this.props[10] + this.props[14]]
            }

            function M(t, e) {
                if (this.isIdentity()) return t + "," + e;
                var r = this.props;
                return Math.round(100 * (t * r[0] + e * r[4] + r[12])) / 100 + "," + Math.round(100 * (t * r[1] + e * r[5] + r[13])) / 100
            }

            function D() {
                for (var t = 0, e = this.props, r = "matrix3d("; t < 16;) r += i(1e4 * e[t]) / 1e4, r += 15 === t ? ")" : ",", t += 1;
                return r
            }

            function w(t) {
                return t < 1e-6 && 0 < t || -1e-6 < t && t < 0 ? i(1e4 * t) / 1e4 : t
            }

            function F() {
                var t = this.props;
                return "matrix(" + w(t[0]) + "," + w(t[1]) + "," + w(t[4]) + "," + w(t[5]) + "," + w(t[12]) + "," + w(t[13]) + ")"
            }
            return function() {
                this.reset = t, this.rotate = e, this.rotateX = r, this.rotateY = o, this.rotateZ = h, this.skew = p, this.skewFromAxis = m, this.shear = l, this.scale = f, this.setTransform = c, this.translate = d, this.transform = u, this.applyToPoint = E, this.applyToX = x, this.applyToY = P, this.applyToZ = S, this.applyToPointArray = k, this.applyToTriplePoints = T, this.applyToPointStringified = M, this.toCSS = D, this.to2dCSS = F, this.clone = v, this.cloneFromProps = b, this.equals = g, this.inversePoints = C, this.inversePoint = A, this.getInverseMatrix = _, this._t = this.transform, this.isIdentity = y, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset()
            }
        }();
    ! function(o, h) {
        var l, p = this,
            m = 256,
            f = 6,
            c = "random",
            d = h.pow(m, f),
            u = h.pow(2, 52),
            y = 2 * u,
            g = m - 1;

        function v(t) {
            var e, r = t.length,
                n = this,
                i = 0,
                s = n.i = n.j = 0,
                a = n.S = [];
            for (r || (t = [r++]); i < m;) a[i] = i++;
            for (i = 0; i < m; i++) a[i] = a[s = g & s + t[i % r] + (e = a[i])], a[s] = e;
            n.g = function(t) {
                for (var e, r = 0, i = n.i, s = n.j, a = n.S; t--;) e = a[i = g & i + 1], r = r * m + a[g & (a[i] = a[s = g & s + e]) + (a[s] = e)];
                return n.i = i, n.j = s, r
            }
        }

        function b(t, e) {
            return e.i = t.i, e.j = t.j, e.S = t.S.slice(), e
        }

        function E(t, e) {
            for (var r, i = t + "", s = 0; s < i.length;) e[g & s] = g & (r ^= 19 * e[g & s]) + i.charCodeAt(s++);
            return x(e)
        }

        function x(t) {
            return String.fromCharCode.apply(0, t)
        }
        h["seed" + c] = function(t, e, r) {
            var i = [],
                s = E(function t(e, r) {
                    var i, s = [],
                        a = typeof e;
                    if (r && "object" == a)
                        for (i in e) try {
                            s.push(t(e[i], r - 1))
                        } catch (t) {}
                    return s.length ? s : "string" == a ? e : e + "\0"
                }((e = !0 === e ? {
                    entropy: !0
                } : e || {}).entropy ? [t, x(o)] : null === t ? function() {
                    try {
                        if (l) return x(l.randomBytes(m));
                        var t = new Uint8Array(m);
                        return (p.crypto || p.msCrypto).getRandomValues(t), x(t)
                    } catch (t) {
                        var e = p.navigator,
                            r = e && e.plugins;
                        return [+new Date, p, r, p.screen, x(o)]
                    }
                }() : t, 3), i),
                a = new v(i),
                n = function() {
                    for (var t = a.g(f), e = d, r = 0; t < u;) t = (t + r) * m, e *= m, r = a.g(1);
                    for (; y <= t;) t /= 2, e /= 2, r >>>= 1;
                    return (t + r) / e
                };
            return n.int32 = function() {
                return 0 | a.g(4)
            }, n.quick = function() {
                return a.g(4) / 4294967296
            }, n.double = n, E(x(a.S), o), (e.pass || r || function(t, e, r, i) {
                return i && (i.S && b(i, a), t.state = function() {
                    return b(a, {})
                }), r ? (h[c] = t, e) : t
            })(n, s, "global" in e ? e.global : this == h, e.state)
        }, E(h.random(), o)
    }([], BMMath);
    var BezierFactory = function() {
        var t = {
                getBezierEasing: function(t, e, r, i, s) {
                    var a = s || ("bez_" + t + "_" + e + "_" + r + "_" + i).replace(/\./g, "p");
                    if (o[a]) return o[a];
                    var n = new h([t, e, r, i]);
                    return o[a] = n
                }
            },
            o = {};
        var l = 11,
            p = 1 / (l - 1),
            e = "function" == typeof Float32Array;

        function i(t, e) {
            return 1 - 3 * e + 3 * t
        }

        function s(t, e) {
            return 3 * e - 6 * t
        }

        function a(t) {
            return 3 * t
        }

        function m(t, e, r) {
            return ((i(e, r) * t + s(e, r)) * t + a(e)) * t
        }

        function f(t, e, r) {
            return 3 * i(e, r) * t * t + 2 * s(e, r) * t + a(e)
        }

        function h(t) {
            this._p = t, this._mSampleValues = e ? new Float32Array(l) : new Array(l), this._precomputed = !1, this.get = this.get.bind(this)
        }
        return h.prototype = {
            get: function(t) {
                var e = this._p[0],
                    r = this._p[1],
                    i = this._p[2],
                    s = this._p[3];
                return this._precomputed || this._precompute(), e === r && i === s ? t : 0 === t ? 0 : 1 === t ? 1 : m(this._getTForX(t), r, s)
            },
            _precompute: function() {
                var t = this._p[0],
                    e = this._p[1],
                    r = this._p[2],
                    i = this._p[3];
                this._precomputed = !0, t === e && r === i || this._calcSampleValues()
            },
            _calcSampleValues: function() {
                for (var t = this._p[0], e = this._p[2], r = 0; r < l; ++r) this._mSampleValues[r] = m(r * p, t, e)
            },
            _getTForX: function(t) {
                for (var e = this._p[0], r = this._p[2], i = this._mSampleValues, s = 0, a = 1, n = l - 1; a !== n && i[a] <= t; ++a) s += p;
                var o = s + (t - i[--a]) / (i[a + 1] - i[a]) * p,
                    h = f(o, e, r);
                return .001 <= h ? function(t, e, r, i) {
                    for (var s = 0; s < 4; ++s) {
                        var a = f(e, r, i);
                        if (0 === a) return e;
                        e -= (m(e, r, i) - t) / a
                    }
                    return e
                }(t, o, e, r) : 0 === h ? o : function(t, e, r, i, s) {
                    for (var a, n, o = 0; 0 < (a = m(n = e + (r - e) / 2, i, s) - t) ? r = n : e = n, 1e-7 < Math.abs(a) && ++o < 10;);
                    return n
                }(t, s, s + p, e, r)
            }
        }, t
    }();

    function extendPrototype(t, e) {
        var r, i, s = t.length;
        for (r = 0; r < s; r += 1)
            for (var a in i = t[r].prototype) i.hasOwnProperty(a) && (e.prototype[a] = i[a])
    }

    function getDescriptor(t, e) {
        return Object.getOwnPropertyDescriptor(t, e)
    }

    function createProxyFunction(t) {
        function e() {}
        return e.prototype = t, e
    }

    function bezFunction() {
        Math;

        function y(t, e, r, i, s, a) {
            var n = t * i + e * s + r * a - s * i - a * t - r * e;
            return -.001 < n && n < .001
        }
        var p = function(t, e, r, i) {
            var s, a, n, o, h, l, p = defaultCurveSegments,
                m = 0,
                f = [],
                c = [],
                d = bezier_length_pool.newElement();
            for (n = r.length, s = 0; s < p; s += 1) {
                for (h = s / (p - 1), a = l = 0; a < n; a += 1) o = bm_pow(1 - h, 3) * t[a] + 3 * bm_pow(1 - h, 2) * h * r[a] + 3 * (1 - h) * bm_pow(h, 2) * i[a] + bm_pow(h, 3) * e[a], f[a] = o, null !== c[a] && (l += bm_pow(f[a] - c[a], 2)), c[a] = f[a];
                l && (m += l = bm_sqrt(l)), d.percents[s] = h, d.lengths[s] = m
            }
            return d.addedLength = m, d
        };

        function g(t) {
            this.segmentLength = 0, this.points = new Array(t)
        }

        function v(t, e) {
            this.partialLength = t, this.point = e
        }
        var b, t = (b = {}, function(t, e, r, i) {
            var s = (t[0] + "_" + t[1] + "_" + e[0] + "_" + e[1] + "_" + r[0] + "_" + r[1] + "_" + i[0] + "_" + i[1]).replace(/\./g, "p");
            if (!b[s]) {
                var a, n, o, h, l, p, m, f = defaultCurveSegments,
                    c = 0,
                    d = null;
                2 === t.length && (t[0] != e[0] || t[1] != e[1]) && y(t[0], t[1], e[0], e[1], t[0] + r[0], t[1] + r[1]) && y(t[0], t[1], e[0], e[1], e[0] + i[0], e[1] + i[1]) && (f = 2);
                var u = new g(f);
                for (o = r.length, a = 0; a < f; a += 1) {
                    for (m = createSizedArray(o), l = a / (f - 1), n = p = 0; n < o; n += 1) h = bm_pow(1 - l, 3) * t[n] + 3 * bm_pow(1 - l, 2) * l * (t[n] + r[n]) + 3 * (1 - l) * bm_pow(l, 2) * (e[n] + i[n]) + bm_pow(l, 3) * e[n], m[n] = h, null !== d && (p += bm_pow(m[n] - d[n], 2));
                    c += p = bm_sqrt(p), u.points[a] = new v(p, m), d = m
                }
                u.segmentLength = c, b[s] = u
            }
            return b[s]
        });

        function M(t, e) {
            var r = e.percents,
                i = e.lengths,
                s = r.length,
                a = bm_floor((s - 1) * t),
                n = t * e.addedLength,
                o = 0;
            if (a === s - 1 || 0 === a || n === i[a]) return r[a];
            for (var h = i[a] > n ? -1 : 1, l = !0; l;)
                if (i[a] <= n && i[a + 1] > n ? (o = (n - i[a]) / (i[a + 1] - i[a]), l = !1) : a += h, a < 0 || s - 1 <= a) {
                    if (a === s - 1) return r[a];
                    l = !1
                }
            return r[a] + (r[a + 1] - r[a]) * o
        }
        var D = createTypedArray("float32", 8);
        return {
            getSegmentsLength: function(t) {
                var e, r = segments_length_pool.newElement(),
                    i = t.c,
                    s = t.v,
                    a = t.o,
                    n = t.i,
                    o = t._length,
                    h = r.lengths,
                    l = 0;
                for (e = 0; e < o - 1; e += 1) h[e] = p(s[e], s[e + 1], a[e], n[e + 1]), l += h[e].addedLength;
                return i && o && (h[e] = p(s[e], s[0], a[e], n[0]), l += h[e].addedLength), r.totalLength = l, r
            },
            getNewSegment: function(t, e, r, i, s, a, n) {
                var o, h = M(s = s < 0 ? 0 : 1 < s ? 1 : s, n),
                    l = M(a = 1 < a ? 1 : a, n),
                    p = t.length,
                    m = 1 - h,
                    f = 1 - l,
                    c = m * m * m,
                    d = h * m * m * 3,
                    u = h * h * m * 3,
                    y = h * h * h,
                    g = m * m * f,
                    v = h * m * f + m * h * f + m * m * l,
                    b = h * h * f + m * h * l + h * m * l,
                    E = h * h * l,
                    x = m * f * f,
                    P = h * f * f + m * l * f + m * f * l,
                    S = h * l * f + m * l * l + h * f * l,
                    _ = h * l * l,
                    A = f * f * f,
                    C = l * f * f + f * l * f + f * f * l,
                    T = l * l * f + f * l * l + l * f * l,
                    k = l * l * l;
                for (o = 0; o < p; o += 1) D[4 * o] = Math.round(1e3 * (c * t[o] + d * r[o] + u * i[o] + y * e[o])) / 1e3, D[4 * o + 1] = Math.round(1e3 * (g * t[o] + v * r[o] + b * i[o] + E * e[o])) / 1e3, D[4 * o + 2] = Math.round(1e3 * (x * t[o] + P * r[o] + S * i[o] + _ * e[o])) / 1e3, D[4 * o + 3] = Math.round(1e3 * (A * t[o] + C * r[o] + T * i[o] + k * e[o])) / 1e3;
                return D
            },
            getPointInSegment: function(t, e, r, i, s, a) {
                var n = M(s, a),
                    o = 1 - n;
                return [Math.round(1e3 * (o * o * o * t[0] + (n * o * o + o * n * o + o * o * n) * r[0] + (n * n * o + o * n * n + n * o * n) * i[0] + n * n * n * e[0])) / 1e3, Math.round(1e3 * (o * o * o * t[1] + (n * o * o + o * n * o + o * o * n) * r[1] + (n * n * o + o * n * n + n * o * n) * i[1] + n * n * n * e[1])) / 1e3]
            },
            buildBezierData: t,
            pointOnLine2D: y,
            pointOnLine3D: function(t, e, r, i, s, a, n, o, h) {
                if (0 === r && 0 === a && 0 === h) return y(t, e, i, s, n, o);
                var l, p = Math.sqrt(Math.pow(i - t, 2) + Math.pow(s - e, 2) + Math.pow(a - r, 2)),
                    m = Math.sqrt(Math.pow(n - t, 2) + Math.pow(o - e, 2) + Math.pow(h - r, 2)),
                    f = Math.sqrt(Math.pow(n - i, 2) + Math.pow(o - s, 2) + Math.pow(h - a, 2));
                return -1e-4 < (l = m < p ? f < p ? p - m - f : f - m - p : m < f ? f - m - p : m - p - f) && l < 1e-4
            }
        }
    }! function() {
        for (var a = 0, t = ["ms", "moz", "webkit", "o"], e = 0; e < t.length && !window.requestAnimationFrame; ++e) window.requestAnimationFrame = window[t[e] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[e] + "CancelAnimationFrame"] || window[t[e] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function(t, e) {
            var r = (new Date).getTime(),
                i = Math.max(0, 16 - (r - a)),
                s = setTimeout(function() {
                    t(r + i)
                }, i);
            return a = r + i, s
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
            clearTimeout(t)
        })
    }();
    var bez = bezFunction();

    function dataFunctionManager() {
        function m(t, e, r) {
            var i, s, a, n, o, h, l = t.length;
            for (s = 0; s < l; s += 1)
                if ("ks" in (i = t[s]) && !i.completed) {
                    if (i.completed = !0, i.tt && (t[s - 1].td = i.tt), [], -1, i.hasMask) {
                        var p = i.masksProperties;
                        for (n = p.length, a = 0; a < n; a += 1)
                            if (p[a].pt.k.i) d(p[a].pt.k);
                            else
                                for (h = p[a].pt.k.length, o = 0; o < h; o += 1) p[a].pt.k[o].s && d(p[a].pt.k[o].s[0]), p[a].pt.k[o].e && d(p[a].pt.k[o].e[0])
                    }
                    0 === i.ty ? (i.layers = f(i.refId, e), m(i.layers, e, r)) : 4 === i.ty ? c(i.shapes) : 5 == i.ty && u(i, r)
                }
        }

        function f(t, e) {
            for (var r = 0, i = e.length; r < i;) {
                if (e[r].id === t) return e[r].layers.__used ? JSON.parse(JSON.stringify(e[r].layers)) : (e[r].layers.__used = !0, e[r].layers);
                r += 1
            }
        }

        function c(t) {
            var e, r, i;
            for (e = t.length - 1; 0 <= e; e -= 1)
                if ("sh" == t[e].ty) {
                    if (t[e].ks.k.i) d(t[e].ks.k);
                    else
                        for (i = t[e].ks.k.length, r = 0; r < i; r += 1) t[e].ks.k[r].s && d(t[e].ks.k[r].s[0]), t[e].ks.k[r].e && d(t[e].ks.k[r].e[0]);
                    !0
                } else "gr" == t[e].ty && c(t[e].it)
        }

        function d(t) {
            var e, r = t.i.length;
            for (e = 0; e < r; e += 1) t.i[e][0] += t.v[e][0], t.i[e][1] += t.v[e][1], t.o[e][0] += t.v[e][0], t.o[e][1] += t.v[e][1]
        }

        function o(t, e) {
            var r = e ? e.split(".") : [100, 100, 100];
            return t[0] > r[0] || !(r[0] > t[0]) && (t[1] > r[1] || !(r[1] > t[1]) && (t[2] > r[2] || !(r[2] > t[2]) && void 0))
        }
        var h, r = function() {
                var i = [4, 4, 14];

                function s(t) {
                    var e, r, i, s = t.length;
                    for (e = 0; e < s; e += 1) 5 === t[e].ty && (r = t[e], void 0, i = r.t.d, r.t.d = {
                        k: [{
                            s: i,
                            t: 0
                        }]
                    })
                }
                return function(t) {
                    if (o(i, t.v) && (s(t.layers), t.assets)) {
                        var e, r = t.assets.length;
                        for (e = 0; e < r; e += 1) t.assets[e].layers && s(t.assets[e].layers)
                    }
                }
            }(),
            i = (h = [4, 7, 99], function(t) {
                if (t.chars && !o(h, t.v)) {
                    var e, r, i, s, a, n = t.chars.length;
                    for (e = 0; e < n; e += 1)
                        if (t.chars[e].data && t.chars[e].data.shapes)
                            for (i = (a = t.chars[e].data.shapes[0].it).length, r = 0; r < i; r += 1)(s = a[r].ks.k).__converted || (d(a[r].ks.k), s.__converted = !0)
                }
            }),
            s = function() {
                var i = [4, 1, 9];

                function a(t) {
                    var e, r, i, s = t.length;
                    for (e = 0; e < s; e += 1)
                        if ("gr" === t[e].ty) a(t[e].it);
                        else if ("fl" === t[e].ty || "st" === t[e].ty)
                        if (t[e].c.k && t[e].c.k[0].i)
                            for (i = t[e].c.k.length, r = 0; r < i; r += 1) t[e].c.k[r].s && (t[e].c.k[r].s[0] /= 255, t[e].c.k[r].s[1] /= 255, t[e].c.k[r].s[2] /= 255, t[e].c.k[r].s[3] /= 255), t[e].c.k[r].e && (t[e].c.k[r].e[0] /= 255, t[e].c.k[r].e[1] /= 255, t[e].c.k[r].e[2] /= 255, t[e].c.k[r].e[3] /= 255);
                        else t[e].c.k[0] /= 255, t[e].c.k[1] /= 255, t[e].c.k[2] /= 255, t[e].c.k[3] /= 255
                }

                function s(t) {
                    var e, r = t.length;
                    for (e = 0; e < r; e += 1) 4 === t[e].ty && a(t[e].shapes)
                }
                return function(t) {
                    if (o(i, t.v) && (s(t.layers), t.assets)) {
                        var e, r = t.assets.length;
                        for (e = 0; e < r; e += 1) t.assets[e].layers && s(t.assets[e].layers)
                    }
                }
            }(),
            a = function() {
                var i = [4, 4, 18];

                function l(t) {
                    var e, r, i;
                    for (e = t.length - 1; 0 <= e; e -= 1)
                        if ("sh" == t[e].ty) {
                            if (t[e].ks.k.i) t[e].ks.k.c = t[e].closed;
                            else
                                for (i = t[e].ks.k.length, r = 0; r < i; r += 1) t[e].ks.k[r].s && (t[e].ks.k[r].s[0].c = t[e].closed), t[e].ks.k[r].e && (t[e].ks.k[r].e[0].c = t[e].closed);
                            !0
                        } else "gr" == t[e].ty && l(t[e].it)
                }

                function s(t) {
                    var e, r, i, s, a, n, o = t.length;
                    for (r = 0; r < o; r += 1) {
                        if ((e = t[r]).hasMask) {
                            var h = e.masksProperties;
                            for (s = h.length, i = 0; i < s; i += 1)
                                if (h[i].pt.k.i) h[i].pt.k.c = h[i].cl;
                                else
                                    for (n = h[i].pt.k.length, a = 0; a < n; a += 1) h[i].pt.k[a].s && (h[i].pt.k[a].s[0].c = h[i].cl), h[i].pt.k[a].e && (h[i].pt.k[a].e[0].c = h[i].cl)
                        }
                        4 === e.ty && l(e.shapes)
                    }
                }
                return function(t) {
                    if (o(i, t.v) && (s(t.layers), t.assets)) {
                        var e, r = t.assets.length;
                        for (e = 0; e < r; e += 1) t.assets[e].layers && s(t.assets[e].layers)
                    }
                }
            }();

        function u(t, e) {
            0 !== t.t.a.length || "m" in t.t.p || (t.singleShape = !0)
        }
        var t = {
            completeData: function(t, e) {
                t.__complete || (s(t), r(t), i(t), a(t), m(t.layers, t.assets, e), t.__complete = !0)
            }
        };
        return t.checkColors = s, t.checkChars = i, t.checkShapes = a, t.completeLayers = m, t
    }
    var dataManager = dataFunctionManager(),
        FontManager = function() {
            var a = {
                    w: 0,
                    size: 0,
                    shapes: []
                },
                t = [];

            function u(t, e) {
                var r = createTag("span");
                r.style.fontFamily = e;
                var i = createTag("span");
                i.innerHTML = "giItT1WQy@!-/#", r.style.position = "absolute", r.style.left = "-10000px", r.style.top = "-10000px", r.style.fontSize = "300px", r.style.fontVariant = "normal", r.style.fontStyle = "normal", r.style.fontWeight = "normal", r.style.letterSpacing = "0", r.appendChild(i), document.body.appendChild(r);
                var s = i.offsetWidth;
                return i.style.fontFamily = t + ", " + e, {
                    node: i,
                    w: s,
                    parent: r
                }
            }
            t = t.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
            var e = function() {
                this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this.initTime = Date.now()
            };
            return e.getCombinedCharacterCodes = function() {
                return t
            }, e.prototype.addChars = function(t) {
                if (t) {
                    this.chars || (this.chars = []);
                    var e, r, i, s = t.length,
                        a = this.chars.length;
                    for (e = 0; e < s; e += 1) {
                        for (r = 0, i = !1; r < a;) this.chars[r].style === t[e].style && this.chars[r].fFamily === t[e].fFamily && this.chars[r].ch === t[e].ch && (i = !0), r += 1;
                        i || (this.chars.push(t[e]), a += 1)
                    }
                }
            }, e.prototype.addFonts = function(t, e) {
                if (t) {
                    if (this.chars) return this.isLoaded = !0, void(this.fonts = t.list);
                    var r, i, s, a, n = t.list,
                        o = n.length,
                        h = o;
                    for (r = 0; r < o; r += 1) {
                        var l, p, m = !0;
                        if (n[r].loaded = !1, n[r].monoCase = u(n[r].fFamily, "monospace"), n[r].sansCase = u(n[r].fFamily, "sans-serif"), n[r].fPath) {
                            if ("p" === n[r].fOrigin || 3 === n[r].origin) {
                                if (0 < (l = document.querySelectorAll('style[f-forigin="p"][f-family="' + n[r].fFamily + '"], style[f-origin="3"][f-family="' + n[r].fFamily + '"]')).length && (m = !1), m) {
                                    var f = createTag("style");
                                    f.setAttribute("f-forigin", n[r].fOrigin), f.setAttribute("f-origin", n[r].origin), f.setAttribute("f-family", n[r].fFamily), f.type = "text/css", f.innerHTML = "@font-face {font-family: " + n[r].fFamily + "; font-style: normal; src: url('" + n[r].fPath + "');}", e.appendChild(f)
                                }
                            } else if ("g" === n[r].fOrigin || 1 === n[r].origin) {
                                for (l = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), p = 0; p < l.length; p++) - 1 !== l[p].href.indexOf(n[r].fPath) && (m = !1);
                                if (m) {
                                    var c = createTag("link");
                                    c.setAttribute("f-forigin", n[r].fOrigin), c.setAttribute("f-origin", n[r].origin), c.type = "text/css", c.rel = "stylesheet", c.href = n[r].fPath, document.body.appendChild(c)
                                }
                            } else if ("t" === n[r].fOrigin || 2 === n[r].origin) {
                                for (l = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), p = 0; p < l.length; p++) n[r].fPath === l[p].src && (m = !1);
                                if (m) {
                                    var d = createTag("link");
                                    d.setAttribute("f-forigin", n[r].fOrigin), d.setAttribute("f-origin", n[r].origin), d.setAttribute("rel", "stylesheet"), d.setAttribute("href", n[r].fPath), e.appendChild(d)
                                }
                            }
                        } else n[r].loaded = !0, h -= 1;
                        n[r].helper = (i = e, s = n[r], a = void 0, (a = createNS("text")).style.fontSize = "100px", a.setAttribute("font-family", s.fFamily), a.setAttribute("font-style", s.fStyle), a.setAttribute("font-weight", s.fWeight), a.textContent = "1", s.fClass ? (a.style.fontFamily = "inherit", a.setAttribute("class", s.fClass)) : a.style.fontFamily = s.fFamily, i.appendChild(a), createTag("canvas").getContext("2d").font = s.fWeight + " " + s.fStyle + " 100px " + s.fFamily, a), n[r].cache = {}, this.fonts.push(n[r])
                    }
                    0 === h ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
                } else this.isLoaded = !0
            }, e.prototype.getCharData = function(t, e, r) {
                for (var i = 0, s = this.chars.length; i < s;) {
                    if (this.chars[i].ch === t && this.chars[i].style === e && this.chars[i].fFamily === r) return this.chars[i];
                    i += 1
                }
                return ("string" == typeof t && 13 !== t.charCodeAt(0) || !t) && console && console.warn && console.warn("Missing character from exported characters list: ", t, e, r), a
            }, e.prototype.getFontByName = function(t) {
                for (var e = 0, r = this.fonts.length; e < r;) {
                    if (this.fonts[e].fName === t) return this.fonts[e];
                    e += 1
                }
                return this.fonts[0]
            }, e.prototype.measureText = function(t, e, r) {
                var i = this.getFontByName(e),
                    s = t.charCodeAt(0);
                if (!i.cache[s + 1]) {
                    var a = i.helper;
                    if (" " === t) {
                        a.textContent = "|" + t + "|";
                        var n = a.getComputedTextLength();
                        a.textContent = "||";
                        var o = a.getComputedTextLength();
                        i.cache[s + 1] = (n - o) / 100
                    } else a.textContent = t, i.cache[s + 1] = a.getComputedTextLength() / 100
                }
                return i.cache[s + 1] * r
            }, e.prototype.checkLoadedFonts = function() {
                var t, e, r, i = this.fonts.length,
                    s = i;
                for (t = 0; t < i; t += 1) this.fonts[t].loaded ? s -= 1 : "n" === this.fonts[t].fOrigin || 0 === this.fonts[t].origin ? this.fonts[t].loaded = !0 : (e = this.fonts[t].monoCase.node, r = this.fonts[t].monoCase.w, e.offsetWidth !== r ? (s -= 1, this.fonts[t].loaded = !0) : (e = this.fonts[t].sansCase.node, r = this.fonts[t].sansCase.w, e.offsetWidth !== r && (s -= 1, this.fonts[t].loaded = !0)), this.fonts[t].loaded && (this.fonts[t].sansCase.parent.parentNode.removeChild(this.fonts[t].sansCase.parent), this.fonts[t].monoCase.parent.parentNode.removeChild(this.fonts[t].monoCase.parent)));
                0 !== s && Date.now() - this.initTime < 5e3 ? setTimeout(this.checkLoadedFonts.bind(this), 20) : setTimeout(function() {
                    this.isLoaded = !0
                }.bind(this), 0)
            }, e.prototype.loaded = function() {
                return this.isLoaded
            }, e
        }(),
        PropertyFactory = function() {
            var m = initialDefaultFrame,
                s = Math.abs;

            function f(t, e) {
                var r, i = this.offsetTime;
                "multidimensional" === this.propType && (r = createTypedArray("float32", this.pv.length));
                for (var s, a, n, o, h, l, p, m, f = e.lastIndex, c = f, d = this.keyframes.length - 1, u = !0; u;) {
                    if (s = this.keyframes[c], a = this.keyframes[c + 1], c === d - 1 && t >= a.t - i) {
                        s.h && (s = a), f = 0;
                        break
                    }
                    if (a.t - i > t) {
                        f = c;
                        break
                    }
                    c < d - 1 ? c += 1 : (f = 0, u = !1)
                }
                var y, g, v, b, E, x, P, S, _, A, C = a.t - i,
                    T = s.t - i;
                if (s.to) {
                    s.bezierData || (s.bezierData = bez.buildBezierData(s.s, a.s || s.e, s.to, s.ti));
                    var k = s.bezierData;
                    if (C <= t || t < T) {
                        var M = C <= t ? k.points.length - 1 : 0;
                        for (o = k.points[M].point.length, n = 0; n < o; n += 1) r[n] = k.points[M].point[n]
                    } else {
                        s.__fnct ? m = s.__fnct : (m = BezierFactory.getBezierEasing(s.o.x, s.o.y, s.i.x, s.i.y, s.n).get, s.__fnct = m), h = m((t - T) / (C - T));
                        var D, w = k.segmentLength * h,
                            F = e.lastFrame < t && e._lastKeyframeIndex === c ? e._lastAddedLength : 0;
                        for (p = e.lastFrame < t && e._lastKeyframeIndex === c ? e._lastPoint : 0, u = !0, l = k.points.length; u;) {
                            if (F += k.points[p].partialLength, 0 === w || 0 === h || p === k.points.length - 1) {
                                for (o = k.points[p].point.length, n = 0; n < o; n += 1) r[n] = k.points[p].point[n];
                                break
                            }
                            if (F <= w && w < F + k.points[p + 1].partialLength) {
                                for (D = (w - F) / k.points[p + 1].partialLength, o = k.points[p].point.length, n = 0; n < o; n += 1) r[n] = k.points[p].point[n] + (k.points[p + 1].point[n] - k.points[p].point[n]) * D;
                                break
                            }
                            p < l - 1 ? p += 1 : u = !1
                        }
                        e._lastPoint = p, e._lastAddedLength = F - k.points[p].partialLength, e._lastKeyframeIndex = c
                    }
                } else {
                    var I, V, R, B, L;
                    if (d = s.s.length, y = a.s || s.e, this.sh && 1 !== s.h)
                        if (C <= t) r[0] = y[0], r[1] = y[1], r[2] = y[2];
                        else if (t <= T) r[0] = s.s[0], r[1] = s.s[1], r[2] = s.s[2];
                    else {
                        var G = N(s.s),
                            z = N(y);
                        g = r, v = function(t, e, r) {
                            var i, s, a, n, o, h = [],
                                l = t[0],
                                p = t[1],
                                m = t[2],
                                f = t[3],
                                c = e[0],
                                d = e[1],
                                u = e[2],
                                y = e[3];
                            (s = l * c + p * d + m * u + f * y) < 0 && (s = -s, c = -c, d = -d, u = -u, y = -y);
                            o = 1e-6 < 1 - s ? (i = Math.acos(s), a = Math.sin(i), n = Math.sin((1 - r) * i) / a, Math.sin(r * i) / a) : (n = 1 - r, r);
                            return h[0] = n * l + o * c, h[1] = n * p + o * d, h[2] = n * m + o * u, h[3] = n * f + o * y, h
                        }(G, z, (t - T) / (C - T)), b = v[0], E = v[1], x = v[2], P = v[3], S = Math.atan2(2 * E * P - 2 * b * x, 1 - 2 * E * E - 2 * x * x), _ = Math.asin(2 * b * E + 2 * x * P), A = Math.atan2(2 * b * P - 2 * E * x, 1 - 2 * b * b - 2 * x * x), g[0] = S / degToRads, g[1] = _ / degToRads, g[2] = A / degToRads
                    } else
                        for (c = 0; c < d; c += 1) 1 !== s.h && (h = C <= t ? 1 : t < T ? 0 : (s.o.x.constructor === Array ? (s.__fnct || (s.__fnct = []), s.__fnct[c] ? m = s.__fnct[c] : (I = void 0 === s.o.x[c] ? s.o.x[0] : s.o.x[c], V = void 0 === s.o.y[c] ? s.o.y[0] : s.o.y[c], R = void 0 === s.i.x[c] ? s.i.x[0] : s.i.x[c], B = void 0 === s.i.y[c] ? s.i.y[0] : s.i.y[c], m = BezierFactory.getBezierEasing(I, V, R, B).get, s.__fnct[c] = m)) : s.__fnct ? m = s.__fnct : (I = s.o.x, V = s.o.y, R = s.i.x, B = s.i.y, m = BezierFactory.getBezierEasing(I, V, R, B).get, s.__fnct = m), m((t - T) / (C - T)))), y = a.s || s.e, L = 1 === s.h ? s.s[c] : s.s[c] + (y[c] - s.s[c]) * h, "multidimensional" === this.propType ? r[c] = L : r = L
                }
                return e.lastIndex = f, r
            }

            function N(t) {
                var e = t[0] * degToRads,
                    r = t[1] * degToRads,
                    i = t[2] * degToRads,
                    s = Math.cos(e / 2),
                    a = Math.cos(r / 2),
                    n = Math.cos(i / 2),
                    o = Math.sin(e / 2),
                    h = Math.sin(r / 2),
                    l = Math.sin(i / 2);
                return [o * h * n + s * a * l, o * a * n + s * h * l, s * h * n - o * a * l, s * a * n - o * h * l]
            }

            function c() {
                var t = this.comp.renderedFrame - this.offsetTime,
                    e = this.keyframes[0].t - this.offsetTime,
                    r = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
                if (!(t === this._caching.lastFrame || this._caching.lastFrame !== m && (this._caching.lastFrame >= r && r <= t || this._caching.lastFrame < e && t < e))) {
                    this._caching.lastFrame >= t && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
                    var i = this.interpolateValue(t, this._caching);
                    this.pv = i
                }
                return this._caching.lastFrame = t, this.pv
            }

            function d(t) {
                var e;
                if ("unidimensional" === this.propType) e = t * this.mult, 1e-5 < s(this.v - e) && (this.v = e, this._mdf = !0);
                else
                    for (var r = 0, i = this.v.length; r < i;) e = t[r] * this.mult, 1e-5 < s(this.v[r] - e) && (this.v[r] = e, this._mdf = !0), r += 1
            }

            function u() {
                if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length)
                    if (this.lock) this.setVValue(this.pv);
                    else {
                        this.lock = !0, this._mdf = this._isFirstFrame;
                        var t, e = this.effectsSequence.length,
                            r = this.kf ? this.pv : this.data.k;
                        for (t = 0; t < e; t += 1) r = this.effectsSequence[t](r);
                        this.setVValue(r), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId
                    }
            }

            function y(t) {
                this.effectsSequence.push(t), this.container.addDynamicProperty(this)
            }

            function n(t, e, r, i) {
                this.propType = "unidimensional", this.mult = r || 1, this.data = e, this.v = r ? e.k * r : e.k, this.pv = e.k, this._mdf = !1, this.elem = t, this.container = i, this.comp = t.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = u, this.setVValue = d, this.addEffect = y
            }

            function o(t, e, r, i) {
                this.propType = "multidimensional", this.mult = r || 1, this.data = e, this._mdf = !1, this.elem = t, this.container = i, this.comp = t.comp, this.k = !1, this.kf = !1, this.frameId = -1;
                var s, a = e.k.length;
                this.v = createTypedArray("float32", a), this.pv = createTypedArray("float32", a);
                createTypedArray("float32", a);
                for (this.vel = createTypedArray("float32", a), s = 0; s < a; s += 1) this.v[s] = e.k[s] * this.mult, this.pv[s] = e.k[s];
                this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = u, this.setVValue = d, this.addEffect = y
            }

            function h(t, e, r, i) {
                this.propType = "unidimensional", this.keyframes = e.k, this.offsetTime = t.data.st, this.frameId = -1, this._caching = {
                    lastFrame: m,
                    lastIndex: 0,
                    value: 0,
                    _lastKeyframeIndex: -1
                }, this.k = !0, this.kf = !0, this.data = e, this.mult = r || 1, this.elem = t, this.container = i, this.comp = t.comp, this.v = m, this.pv = m, this._isFirstFrame = !0, this.getValue = u, this.setVValue = d, this.interpolateValue = f, this.effectsSequence = [c.bind(this)], this.addEffect = y
            }

            function l(t, e, r, i) {
                this.propType = "multidimensional";
                var s, a, n, o, h, l = e.k.length;
                for (s = 0; s < l - 1; s += 1) e.k[s].to && e.k[s].s && e.k[s + 1] && e.k[s + 1].s && (a = e.k[s].s, n = e.k[s + 1].s, o = e.k[s].to, h = e.k[s].ti, (2 === a.length && (a[0] !== n[0] || a[1] !== n[1]) && bez.pointOnLine2D(a[0], a[1], n[0], n[1], a[0] + o[0], a[1] + o[1]) && bez.pointOnLine2D(a[0], a[1], n[0], n[1], n[0] + h[0], n[1] + h[1]) || 3 === a.length && (a[0] !== n[0] || a[1] !== n[1] || a[2] !== n[2]) && bez.pointOnLine3D(a[0], a[1], a[2], n[0], n[1], n[2], a[0] + o[0], a[1] + o[1], a[2] + o[2]) && bez.pointOnLine3D(a[0], a[1], a[2], n[0], n[1], n[2], n[0] + h[0], n[1] + h[1], n[2] + h[2])) && (e.k[s].to = null, e.k[s].ti = null), a[0] === n[0] && a[1] === n[1] && 0 === o[0] && 0 === o[1] && 0 === h[0] && 0 === h[1] && (2 === a.length || a[2] === n[2] && 0 === o[2] && 0 === h[2]) && (e.k[s].to = null, e.k[s].ti = null));
                this.effectsSequence = [c.bind(this)], this.keyframes = e.k, this.offsetTime = t.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = r || 1, this.elem = t, this.container = i, this.comp = t.comp, this.getValue = u, this.setVValue = d, this.interpolateValue = f, this.frameId = -1;
                var p = e.k[0].s.length;
                for (this.v = createTypedArray("float32", p), this.pv = createTypedArray("float32", p), s = 0; s < p; s += 1) this.v[s] = m, this.pv[s] = m;
                this._caching = {
                    lastFrame: m,
                    lastIndex: 0,
                    value: createTypedArray("float32", p)
                }, this.addEffect = y
            }
            return {
                getProp: function(t, e, r, i, s) {
                    var a;
                    if (e.k.length)
                        if ("number" == typeof e.k[0]) a = new o(t, e, i, s);
                        else switch (r) {
                            case 0:
                                a = new h(t, e, i, s);
                                break;
                            case 1:
                                a = new l(t, e, i, s)
                        } else a = new n(t, e, i, s);
                    return a.effectsSequence.length && s.addDynamicProperty(a), a
                }
            }
        }(),
        TransformPropertyFactory = function() {
            var n = [0, 0];

            function i(t, e, r) {
                if (this.elem = t, this.frameId = -1, this.propType = "transform", this.data = e, this.v = new Matrix, this.pre = new Matrix, this.appliedTransformations = 0, this.initDynamicPropertyContainer(r || t), e.p && e.p.s ? (this.px = PropertyFactory.getProp(t, e.p.x, 0, 0, this), this.py = PropertyFactory.getProp(t, e.p.y, 0, 0, this), e.p.z && (this.pz = PropertyFactory.getProp(t, e.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(t, e.p || {
                        k: [0, 0, 0]
                    }, 1, 0, this), e.rx) {
                    if (this.rx = PropertyFactory.getProp(t, e.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(t, e.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(t, e.rz, 0, degToRads, this), e.or.k[0].ti) {
                        var i, s = e.or.k.length;
                        for (i = 0; i < s; i += 1) e.or.k[i].to = e.or.k[i].ti = null
                    }
                    this.or = PropertyFactory.getProp(t, e.or, 1, degToRads, this), this.or.sh = !0
                } else this.r = PropertyFactory.getProp(t, e.r || {
                    k: 0
                }, 0, degToRads, this);
                e.sk && (this.sk = PropertyFactory.getProp(t, e.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(t, e.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(t, e.a || {
                    k: [0, 0, 0]
                }, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s || {
                    k: [100, 100, 100]
                }, 1, .01, this), e.o ? this.o = PropertyFactory.getProp(t, e.o, 0, .01, t) : this.o = {
                    _mdf: !1,
                    v: 1
                }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0)
            }
            return i.prototype = {
                applyToMatrix: function(t) {
                    var e = this._mdf;
                    this.iterateDynamicProperties(), this._mdf = this._mdf || e, this.a && t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && t.skewFromAxis(-this.sk.v, this.sa.v), this.r ? t.rotate(-this.r.v) : t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? t.translate(this.px.v, this.py.v, -this.pz.v) : t.translate(this.px.v, this.py.v, 0) : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                },
                getValue: function(t) {
                    if (this.elem.globalData.frameId !== this.frameId) {
                        if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || t) {
                            if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                                var e, r, i = this.elem.globalData.frameRate;
                                if (this.p && this.p.keyframes && this.p.getValueAtTime) r = this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (e = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / i, 0), this.p.getValueAtTime(this.p.keyframes[0].t / i, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (e = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / i, 0), this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / i, 0)) : (e = this.p.pv, this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / i, this.p.offsetTime));
                                else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                                    e = [], r = [];
                                    var s = this.px,
                                        a = this.py;
                                    s._caching.lastFrame + s.offsetTime <= s.keyframes[0].t ? (e[0] = s.getValueAtTime((s.keyframes[0].t + .01) / i, 0), e[1] = a.getValueAtTime((a.keyframes[0].t + .01) / i, 0), r[0] = s.getValueAtTime(s.keyframes[0].t / i, 0), r[1] = a.getValueAtTime(a.keyframes[0].t / i, 0)) : s._caching.lastFrame + s.offsetTime >= s.keyframes[s.keyframes.length - 1].t ? (e[0] = s.getValueAtTime(s.keyframes[s.keyframes.length - 1].t / i, 0), e[1] = a.getValueAtTime(a.keyframes[a.keyframes.length - 1].t / i, 0), r[0] = s.getValueAtTime((s.keyframes[s.keyframes.length - 1].t - .01) / i, 0), r[1] = a.getValueAtTime((a.keyframes[a.keyframes.length - 1].t - .01) / i, 0)) : (e = [s.pv, a.pv], r[0] = s.getValueAtTime((s._caching.lastFrame + s.offsetTime - .01) / i, s.offsetTime), r[1] = a.getValueAtTime((a._caching.lastFrame + a.offsetTime - .01) / i, a.offsetTime))
                                } else e = r = n;
                                this.v.rotate(-Math.atan2(e[1] - r[1], e[0] - r[0]))
                            }
                            this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                        }
                        this.frameId = this.elem.globalData.frameId
                    }
                },
                precalculateMatrix: function() {
                    if (!this.a.k && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) {
                        if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) {
                            if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
                            this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3
                        }
                        if (this.r) {
                            if (this.r.effectsSequence.length) return;
                            this.pre.rotate(-this.r.v), this.appliedTransformations = 4
                        } else this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4)
                    }
                },
                autoOrient: function() {}
            }, extendPrototype([DynamicPropertyContainer], i), i.prototype.addDynamicProperty = function(t) {
                this._addDynamicProperty(t), this.elem.addDynamicProperty(t), this._isDirty = !0
            }, i.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty, {
                getTransformProperty: function(t, e, r) {
                    return new i(t, e, r)
                }
            }
        }();

    function ShapePath() {
        this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength)
    }
    ShapePath.prototype.setPathData = function(t, e) {
        this.c = t, this.setLength(e);
        for (var r = 0; r < e;) this.v[r] = point_pool.newElement(), this.o[r] = point_pool.newElement(), this.i[r] = point_pool.newElement(), r += 1
    }, ShapePath.prototype.setLength = function(t) {
        for (; this._maxLength < t;) this.doubleArrayLength();
        this._length = t
    }, ShapePath.prototype.doubleArrayLength = function() {
        this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2
    }, ShapePath.prototype.setXYAt = function(t, e, r, i, s) {
        var a;
        switch (this._length = Math.max(this._length, i + 1), this._length >= this._maxLength && this.doubleArrayLength(), r) {
            case "v":
                a = this.v;
                break;
            case "i":
                a = this.i;
                break;
            case "o":
                a = this.o
        }(!a[i] || a[i] && !s) && (a[i] = point_pool.newElement()), a[i][0] = t, a[i][1] = e
    }, ShapePath.prototype.setTripleAt = function(t, e, r, i, s, a, n, o) {
        this.setXYAt(t, e, "v", n, o), this.setXYAt(r, i, "o", n, o), this.setXYAt(s, a, "i", n, o)
    }, ShapePath.prototype.reverse = function() {
        var t = new ShapePath;
        t.setPathData(this.c, this._length);
        var e = this.v,
            r = this.o,
            i = this.i,
            s = 0;
        this.c && (t.setTripleAt(e[0][0], e[0][1], i[0][0], i[0][1], r[0][0], r[0][1], 0, !1), s = 1);
        var a, n = this._length - 1,
            o = this._length;
        for (a = s; a < o; a += 1) t.setTripleAt(e[n][0], e[n][1], i[n][0], i[n][1], r[n][0], r[n][1], a, !1), n -= 1;
        return t
    };
    var ShapePropertyFactory = function() {
            var s = -999999;

            function t(t, e, r) {
                var i, s, a, n, o, h, l, p, m, f = r.lastIndex,
                    c = this.keyframes;
                if (t < c[0].t - this.offsetTime) i = c[0].s[0], a = !0, f = 0;
                else if (t >= c[c.length - 1].t - this.offsetTime) i = c[c.length - 1].s ? c[c.length - 1].s[0] : c[c.length - 2].e[0], a = !0;
                else {
                    for (var d, u, y = f, g = c.length - 1, v = !0; v && (d = c[y], !((u = c[y + 1]).t - this.offsetTime > t));) y < g - 1 ? y += 1 : v = !1;
                    if (f = y, !(a = 1 === d.h)) {
                        if (t >= u.t - this.offsetTime) p = 1;
                        else if (t < d.t - this.offsetTime) p = 0;
                        else {
                            var b;
                            d.__fnct ? b = d.__fnct : (b = BezierFactory.getBezierEasing(d.o.x, d.o.y, d.i.x, d.i.y).get, d.__fnct = b), p = b((t - (d.t - this.offsetTime)) / (u.t - this.offsetTime - (d.t - this.offsetTime)))
                        }
                        s = u.s ? u.s[0] : d.e[0]
                    }
                    i = d.s[0]
                }
                for (h = e._length, l = i.i[0].length, r.lastIndex = f, n = 0; n < h; n += 1)
                    for (o = 0; o < l; o += 1) m = a ? i.i[n][o] : i.i[n][o] + (s.i[n][o] - i.i[n][o]) * p, e.i[n][o] = m, m = a ? i.o[n][o] : i.o[n][o] + (s.o[n][o] - i.o[n][o]) * p, e.o[n][o] = m, m = a ? i.v[n][o] : i.v[n][o] + (s.v[n][o] - i.v[n][o]) * p, e.v[n][o] = m
            }

            function a() {
                this.paths = this.localShapeCollection
            }

            function e(t) {
                (function(t, e) {
                    if (t._length !== e._length || t.c !== e.c) return !1;
                    var r, i = t._length;
                    for (r = 0; r < i; r += 1)
                        if (t.v[r][0] !== e.v[r][0] || t.v[r][1] !== e.v[r][1] || t.o[r][0] !== e.o[r][0] || t.o[r][1] !== e.o[r][1] || t.i[r][0] !== e.i[r][0] || t.i[r][1] !== e.i[r][1]) return !1;
                    return !0
                })(this.v, t) || (this.v = shape_pool.clone(t), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection)
            }

            function r() {
                if (this.elem.globalData.frameId !== this.frameId)
                    if (this.effectsSequence.length)
                        if (this.lock) this.setVValue(this.pv);
                        else {
                            this.lock = !0, this._mdf = !1;
                            var t, e = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k,
                                r = this.effectsSequence.length;
                            for (t = 0; t < r; t += 1) e = this.effectsSequence[t](e);
                            this.setVValue(e), this.lock = !1, this.frameId = this.elem.globalData.frameId
                        }
                else this._mdf = !1
            }

            function n(t, e, r) {
                this.propType = "shape", this.comp = t.comp, this.container = t, this.elem = t, this.data = e, this.k = !1, this.kf = !1, this._mdf = !1;
                var i = 3 === r ? e.pt.k : e.ks.k;
                this.v = shape_pool.clone(i), this.pv = shape_pool.clone(this.v), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = a, this.effectsSequence = []
            }

            function i(t) {
                this.effectsSequence.push(t), this.container.addDynamicProperty(this)
            }

            function o(t, e, r) {
                this.propType = "shape", this.comp = t.comp, this.elem = t, this.container = t, this.offsetTime = t.data.st, this.keyframes = 3 === r ? e.pt.k : e.ks.k, this.k = !0, this.kf = !0;
                var i = this.keyframes[0].s[0].i.length;
                this.keyframes[0].s[0].i[0].length;
                this.v = shape_pool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, i), this.pv = shape_pool.clone(this.v), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = s, this.reset = a, this._caching = {
                    lastFrame: s,
                    lastIndex: 0
                }, this.effectsSequence = [function() {
                    var t = this.comp.renderedFrame - this.offsetTime,
                        e = this.keyframes[0].t - this.offsetTime,
                        r = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
                        i = this._caching.lastFrame;
                    return i !== s && (i < e && t < e || r < i && r < t) || (this._caching.lastIndex = i < t ? this._caching.lastIndex : 0, this.interpolateShape(t, this.pv, this._caching)), this._caching.lastFrame = t, this.pv
                }.bind(this)]
            }
            n.prototype.interpolateShape = t, n.prototype.getValue = r, n.prototype.setVValue = e, n.prototype.addEffect = i, o.prototype.getValue = r, o.prototype.interpolateShape = t, o.prototype.setVValue = e, o.prototype.addEffect = i;
            var h = function() {
                    var n = roundCorner;

                    function t(t, e) {
                        this.v = shape_pool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = e.d, this.elem = t, this.comp = t.comp, this.frameId = -1, this.initDynamicPropertyContainer(t), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath())
                    }
                    return t.prototype = {
                        reset: a,
                        getValue: function() {
                            this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath())
                        },
                        convertEllToPath: function() {
                            var t = this.p.v[0],
                                e = this.p.v[1],
                                r = this.s.v[0] / 2,
                                i = this.s.v[1] / 2,
                                s = 3 !== this.d,
                                a = this.v;
                            a.v[0][0] = t, a.v[0][1] = e - i, a.v[1][0] = s ? t + r : t - r, a.v[1][1] = e, a.v[2][0] = t, a.v[2][1] = e + i, a.v[3][0] = s ? t - r : t + r, a.v[3][1] = e, a.i[0][0] = s ? t - r * n : t + r * n, a.i[0][1] = e - i, a.i[1][0] = s ? t + r : t - r, a.i[1][1] = e - i * n, a.i[2][0] = s ? t + r * n : t - r * n, a.i[2][1] = e + i, a.i[3][0] = s ? t - r : t + r, a.i[3][1] = e + i * n, a.o[0][0] = s ? t + r * n : t - r * n, a.o[0][1] = e - i, a.o[1][0] = s ? t + r : t - r, a.o[1][1] = e + i * n, a.o[2][0] = s ? t - r * n : t + r * n, a.o[2][1] = e + i, a.o[3][0] = s ? t - r : t + r, a.o[3][1] = e - i * n
                        }
                    }, extendPrototype([DynamicPropertyContainer], t), t
                }(),
                l = function() {
                    function t(t, e) {
                        this.v = shape_pool.newElement(), this.v.setPathData(!0, 0), this.elem = t, this.comp = t.comp, this.data = e, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), 1 === e.sy ? (this.ir = PropertyFactory.getProp(t, e.ir, 0, 0, this), this.is = PropertyFactory.getProp(t, e.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(t, e.pt, 0, 0, this), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.r = PropertyFactory.getProp(t, e.r, 0, degToRads, this), this.or = PropertyFactory.getProp(t, e.or, 0, 0, this), this.os = PropertyFactory.getProp(t, e.os, 0, .01, this), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath())
                    }
                    return t.prototype = {
                        reset: a,
                        getValue: function() {
                            this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath())
                        },
                        convertStarToPath: function() {
                            var t, e, r, i, s = 2 * Math.floor(this.pt.v),
                                a = 2 * Math.PI / s,
                                n = !0,
                                o = this.or.v,
                                h = this.ir.v,
                                l = this.os.v,
                                p = this.is.v,
                                m = 2 * Math.PI * o / (2 * s),
                                f = 2 * Math.PI * h / (2 * s),
                                c = -Math.PI / 2;
                            c += this.r.v;
                            var d = 3 === this.data.d ? -1 : 1;
                            for (t = this.v._length = 0; t < s; t += 1) {
                                r = n ? l : p, i = n ? m : f;
                                var u = (e = n ? o : h) * Math.cos(c),
                                    y = e * Math.sin(c),
                                    g = 0 === u && 0 === y ? 0 : y / Math.sqrt(u * u + y * y),
                                    v = 0 === u && 0 === y ? 0 : -u / Math.sqrt(u * u + y * y);
                                u += +this.p.v[0], y += +this.p.v[1], this.v.setTripleAt(u, y, u - g * i * r * d, y - v * i * r * d, u + g * i * r * d, y + v * i * r * d, t, !0), n = !n, c += a * d
                            }
                        },
                        convertPolygonToPath: function() {
                            var t, e = Math.floor(this.pt.v),
                                r = 2 * Math.PI / e,
                                i = this.or.v,
                                s = this.os.v,
                                a = 2 * Math.PI * i / (4 * e),
                                n = -Math.PI / 2,
                                o = 3 === this.data.d ? -1 : 1;
                            for (n += this.r.v, t = this.v._length = 0; t < e; t += 1) {
                                var h = i * Math.cos(n),
                                    l = i * Math.sin(n),
                                    p = 0 === h && 0 === l ? 0 : l / Math.sqrt(h * h + l * l),
                                    m = 0 === h && 0 === l ? 0 : -h / Math.sqrt(h * h + l * l);
                                h += +this.p.v[0], l += +this.p.v[1], this.v.setTripleAt(h, l, h - p * a * s * o, l - m * a * s * o, h + p * a * s * o, l + m * a * s * o, t, !0), n += r * o
                            }
                            this.paths.length = 0, this.paths[0] = this.v
                        }
                    }, extendPrototype([DynamicPropertyContainer], t), t
                }(),
                p = function() {
                    function t(t, e) {
                        this.v = shape_pool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = t, this.comp = t.comp, this.frameId = -1, this.d = e.d, this.initDynamicPropertyContainer(t), this.p = PropertyFactory.getProp(t, e.p, 1, 0, this), this.s = PropertyFactory.getProp(t, e.s, 1, 0, this), this.r = PropertyFactory.getProp(t, e.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath())
                    }
                    return t.prototype = {
                        convertRectToPath: function() {
                            var t = this.p.v[0],
                                e = this.p.v[1],
                                r = this.s.v[0] / 2,
                                i = this.s.v[1] / 2,
                                s = bm_min(r, i, this.r.v),
                                a = s * (1 - roundCorner);
                            this.v._length = 0, 2 === this.d || 1 === this.d ? (this.v.setTripleAt(t + r, e - i + s, t + r, e - i + s, t + r, e - i + a, 0, !0), this.v.setTripleAt(t + r, e + i - s, t + r, e + i - a, t + r, e + i - s, 1, !0), 0 !== s ? (this.v.setTripleAt(t + r - s, e + i, t + r - s, e + i, t + r - a, e + i, 2, !0), this.v.setTripleAt(t - r + s, e + i, t - r + a, e + i, t - r + s, e + i, 3, !0), this.v.setTripleAt(t - r, e + i - s, t - r, e + i - s, t - r, e + i - a, 4, !0), this.v.setTripleAt(t - r, e - i + s, t - r, e - i + a, t - r, e - i + s, 5, !0), this.v.setTripleAt(t - r + s, e - i, t - r + s, e - i, t - r + a, e - i, 6, !0), this.v.setTripleAt(t + r - s, e - i, t + r - a, e - i, t + r - s, e - i, 7, !0)) : (this.v.setTripleAt(t - r, e + i, t - r + a, e + i, t - r, e + i, 2), this.v.setTripleAt(t - r, e - i, t - r, e - i + a, t - r, e - i, 3))) : (this.v.setTripleAt(t + r, e - i + s, t + r, e - i + a, t + r, e - i + s, 0, !0), 0 !== s ? (this.v.setTripleAt(t + r - s, e - i, t + r - s, e - i, t + r - a, e - i, 1, !0), this.v.setTripleAt(t - r + s, e - i, t - r + a, e - i, t - r + s, e - i, 2, !0), this.v.setTripleAt(t - r, e - i + s, t - r, e - i + s, t - r, e - i + a, 3, !0), this.v.setTripleAt(t - r, e + i - s, t - r, e + i - a, t - r, e + i - s, 4, !0), this.v.setTripleAt(t - r + s, e + i, t - r + s, e + i, t - r + a, e + i, 5, !0), this.v.setTripleAt(t + r - s, e + i, t + r - a, e + i, t + r - s, e + i, 6, !0), this.v.setTripleAt(t + r, e + i - s, t + r, e + i - s, t + r, e + i - a, 7, !0)) : (this.v.setTripleAt(t - r, e - i, t - r + a, e - i, t - r, e - i, 1, !0), this.v.setTripleAt(t - r, e + i, t - r, e + i - a, t - r, e + i, 2, !0), this.v.setTripleAt(t + r, e + i, t + r - a, e + i, t + r, e + i, 3, !0)))
                        },
                        getValue: function(t) {
                            this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath())
                        },
                        reset: a
                    }, extendPrototype([DynamicPropertyContainer], t), t
                }();
            var m = {
                getShapeProp: function(t, e, r) {
                    var i;
                    return 3 === r || 4 === r ? i = (3 === r ? e.pt : e.ks).k.length ? new o(t, e, r) : new n(t, e, r) : 5 === r ? i = new p(t, e) : 6 === r ? i = new h(t, e) : 7 === r && (i = new l(t, e)), i.k && t.addDynamicProperty(i), i
                },
                getConstructorFunction: function() {
                    return n
                },
                getKeyframedConstructorFunction: function() {
                    return o
                }
            };
            return m
        }(),
        ShapeModifiers = (as = {}, bs = {}, as.registerModifier = function(t, e) {
            bs[t] || (bs[t] = e)
        }, as.getModifier = function(t, e, r) {
            return new bs[t](e, r)
        }, as),
        as, bs;

    function ShapeModifier() {}

    function TrimModifier() {}

    function RoundCornersModifier() {}

    function RepeaterModifier() {}

    function ShapeCollection() {
        this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength)
    }

    function DashProperty(t, e, r, i) {
        this.elem = t, this.frameId = -1, this.dataProps = createSizedArray(e.length), this.renderer = r, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", e.length ? e.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(i);
        var s, a, n = e.length || 0;
        for (s = 0; s < n; s += 1) a = PropertyFactory.getProp(t, e[s].v, 0, 0, this), this.k = a.k || this.k, this.dataProps[s] = {
            n: e[s].n,
            p: a
        };
        this.k || this.getValue(!0), this._isAnimated = this.k
    }

    function GradientProperty(t, e, r) {
        this.data = e, this.c = createTypedArray("uint8c", 4 * e.p);
        var i = e.k.k[0].s ? e.k.k[0].s.length - 4 * e.p : e.k.k.length - 4 * e.p;
        this.o = createTypedArray("float32", i), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = i, this.initDynamicPropertyContainer(r), this.prop = PropertyFactory.getProp(t, e.k, 1, null, this), this.k = this.prop.k, this.getValue(!0)
    }
    ShapeModifier.prototype.initModifierProperties = function() {}, ShapeModifier.prototype.addShapeToModifier = function() {}, ShapeModifier.prototype.addShape = function(t) {
        if (!this.closed) {
            t.sh.container.addDynamicProperty(t.sh);
            var e = {
                shape: t.sh,
                data: t,
                localShapeCollection: shapeCollection_pool.newShapeCollection()
            };
            this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated()
        }
    }, ShapeModifier.prototype.init = function(t, e) {
        this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), this.frameId = initialDefaultFrame, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
    }, ShapeModifier.prototype.processKeys = function() {
        this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties())
    }, extendPrototype([DynamicPropertyContainer], ShapeModifier), extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function(t, e) {
        this.s = PropertyFactory.getProp(t, e.s, 0, .01, this), this.e = PropertyFactory.getProp(t, e.e, 0, .01, this), this.o = PropertyFactory.getProp(t, e.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
    }, TrimModifier.prototype.addShapeToModifier = function(t) {
        t.pathsData = []
    }, TrimModifier.prototype.calculateShapeEdges = function(t, e, r, i, s) {
        var a = [];
        e <= 1 ? a.push({
            s: t,
            e: e
        }) : 1 <= t ? a.push({
            s: t - 1,
            e: e - 1
        }) : (a.push({
            s: t,
            e: 1
        }), a.push({
            s: 0,
            e: e - 1
        }));
        var n, o, h = [],
            l = a.length;
        for (n = 0; n < l; n += 1) {
            var p, m;
            if ((o = a[n]).e * s < i || o.s * s > i + r);
            else p = o.s * s <= i ? 0 : (o.s * s - i) / r, m = o.e * s >= i + r ? 1 : (o.e * s - i) / r, h.push([p, m])
        }
        return h.length || h.push([0, 0]), h
    }, TrimModifier.prototype.releasePathsData = function(t) {
        var e, r = t.length;
        for (e = 0; e < r; e += 1) segments_length_pool.release(t[e]);
        return t.length = 0, t
    }, TrimModifier.prototype.processShapes = function(t) {
        var e, r, i;
        if (this._mdf || t) {
            var s = this.o.v % 360 / 360;
            if (s < 0 && (s += 1), e = (1 < this.s.v ? 1 : this.s.v < 0 ? 0 : this.s.v) + s, (r = (1 < this.e.v ? 1 : this.e.v < 0 ? 0 : this.e.v) + s) < e) {
                var a = e;
                e = r, r = a
            }
            e = 1e-4 * Math.round(1e4 * e), r = 1e-4 * Math.round(1e4 * r), this.sValue = e, this.eValue = r
        } else e = this.sValue, r = this.eValue;
        var n, o, h, l, p, m, f = this.shapes.length,
            c = 0;
        if (r === e)
            for (n = 0; n < f; n += 1) this.shapes[n].localShapeCollection.releaseShapes(), this.shapes[n].shape._mdf = !0, this.shapes[n].shape.paths = this.shapes[n].localShapeCollection;
        else if (1 === r && 0 === e || 0 === r && 1 === e) {
            if (this._mdf)
                for (n = 0; n < f; n += 1) this.shapes[n].pathsData.length = 0, this.shapes[n].shape._mdf = !0
        } else {
            var d, u, y = [];
            for (n = 0; n < f; n += 1)
                if ((d = this.shapes[n]).shape._mdf || this._mdf || t || 2 === this.m) {
                    if (h = (i = d.shape.paths)._length, m = 0, !d.shape._mdf && d.pathsData.length) m = d.totalShapeLength;
                    else {
                        for (l = this.releasePathsData(d.pathsData), o = 0; o < h; o += 1) p = bez.getSegmentsLength(i.shapes[o]), l.push(p), m += p.totalLength;
                        d.totalShapeLength = m, d.pathsData = l
                    }
                    c += m, d.shape._mdf = !0
                } else d.shape.paths = d.localShapeCollection;
            var g, v = e,
                b = r,
                E = 0;
            for (n = f - 1; 0 <= n; n -= 1)
                if ((d = this.shapes[n]).shape._mdf) {
                    for ((u = d.localShapeCollection).releaseShapes(), 2 === this.m && 1 < f ? (g = this.calculateShapeEdges(e, r, d.totalShapeLength, E, c), E += d.totalShapeLength) : g = [
                            [v, b]
                        ], h = g.length, o = 0; o < h; o += 1) {
                        v = g[o][0], b = g[o][1], y.length = 0, b <= 1 ? y.push({
                            s: d.totalShapeLength * v,
                            e: d.totalShapeLength * b
                        }) : 1 <= v ? y.push({
                            s: d.totalShapeLength * (v - 1),
                            e: d.totalShapeLength * (b - 1)
                        }) : (y.push({
                            s: d.totalShapeLength * v,
                            e: d.totalShapeLength
                        }), y.push({
                            s: 0,
                            e: d.totalShapeLength * (b - 1)
                        }));
                        var x = this.addShapes(d, y[0]);
                        if (y[0].s !== y[0].e) {
                            if (1 < y.length)
                                if (d.shape.paths.shapes[d.shape.paths._length - 1].c) {
                                    var P = x.pop();
                                    this.addPaths(x, u), x = this.addShapes(d, y[1], P)
                                } else this.addPaths(x, u), x = this.addShapes(d, y[1]);
                            this.addPaths(x, u)
                        }
                    }
                    d.shape.paths = u
                }
        }
    }, TrimModifier.prototype.addPaths = function(t, e) {
        var r, i = t.length;
        for (r = 0; r < i; r += 1) e.addShape(t[r])
    }, TrimModifier.prototype.addSegment = function(t, e, r, i, s, a, n) {
        s.setXYAt(e[0], e[1], "o", a), s.setXYAt(r[0], r[1], "i", a + 1), n && s.setXYAt(t[0], t[1], "v", a), s.setXYAt(i[0], i[1], "v", a + 1)
    }, TrimModifier.prototype.addSegmentFromArray = function(t, e, r, i) {
        e.setXYAt(t[1], t[5], "o", r), e.setXYAt(t[2], t[6], "i", r + 1), i && e.setXYAt(t[0], t[4], "v", r), e.setXYAt(t[3], t[7], "v", r + 1)
    }, TrimModifier.prototype.addShapes = function(t, e, r) {
        var i, s, a, n, o, h, l, p, m = t.pathsData,
            f = t.shape.paths.shapes,
            c = t.shape.paths._length,
            d = 0,
            u = [],
            y = !0;
        for (p = r ? (o = r._length, r._length) : (r = shape_pool.newElement(), o = 0), u.push(r), i = 0; i < c; i += 1) {
            for (h = m[i].lengths, r.c = f[i].c, a = f[i].c ? h.length : h.length + 1, s = 1; s < a; s += 1)
                if (d + (n = h[s - 1]).addedLength < e.s) d += n.addedLength, r.c = !1;
                else {
                    if (d > e.e) {
                        r.c = !1;
                        break
                    }
                    e.s <= d && e.e >= d + n.addedLength ? (this.addSegment(f[i].v[s - 1], f[i].o[s - 1], f[i].i[s], f[i].v[s], r, o, y), y = !1) : (l = bez.getNewSegment(f[i].v[s - 1], f[i].v[s], f[i].o[s - 1], f[i].i[s], (e.s - d) / n.addedLength, (e.e - d) / n.addedLength, h[s - 1]), this.addSegmentFromArray(l, r, o, y), y = !1, r.c = !1), d += n.addedLength, o += 1
                }
            if (f[i].c && h.length) {
                if (n = h[s - 1], d <= e.e) {
                    var g = h[s - 1].addedLength;
                    e.s <= d && e.e >= d + g ? (this.addSegment(f[i].v[s - 1], f[i].o[s - 1], f[i].i[0], f[i].v[0], r, o, y), y = !1) : (l = bez.getNewSegment(f[i].v[s - 1], f[i].v[0], f[i].o[s - 1], f[i].i[0], (e.s - d) / g, (e.e - d) / g, h[s - 1]), this.addSegmentFromArray(l, r, o, y), y = !1, r.c = !1)
                } else r.c = !1;
                d += n.addedLength, o += 1
            }
            if (r._length && (r.setXYAt(r.v[p][0], r.v[p][1], "i", p), r.setXYAt(r.v[r._length - 1][0], r.v[r._length - 1][1], "o", r._length - 1)), d > e.e) break;
            i < c - 1 && (r = shape_pool.newElement(), y = !0, u.push(r), o = 0)
        }
        return u
    }, ShapeModifiers.registerModifier("tm", TrimModifier), extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function(t, e) {
        this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length
    }, RoundCornersModifier.prototype.processPath = function(t, e) {
        var r = shape_pool.newElement();
        r.c = t.c;
        var i, s, a, n, o, h, l, p, m, f, c, d, u, y = t._length,
            g = 0;
        for (i = 0; i < y; i += 1) s = t.v[i], n = t.o[i], a = t.i[i], s[0] === n[0] && s[1] === n[1] && s[0] === a[0] && s[1] === a[1] ? 0 !== i && i !== y - 1 || t.c ? (o = 0 === i ? t.v[y - 1] : t.v[i - 1], l = (h = Math.sqrt(Math.pow(s[0] - o[0], 2) + Math.pow(s[1] - o[1], 2))) ? Math.min(h / 2, e) / h : 0, p = d = s[0] + (o[0] - s[0]) * l, m = u = s[1] - (s[1] - o[1]) * l, f = p - (p - s[0]) * roundCorner, c = m - (m - s[1]) * roundCorner, r.setTripleAt(p, m, f, c, d, u, g), g += 1, o = i === y - 1 ? t.v[0] : t.v[i + 1], l = (h = Math.sqrt(Math.pow(s[0] - o[0], 2) + Math.pow(s[1] - o[1], 2))) ? Math.min(h / 2, e) / h : 0, p = f = s[0] + (o[0] - s[0]) * l, m = c = s[1] + (o[1] - s[1]) * l, d = p - (p - s[0]) * roundCorner, u = m - (m - s[1]) * roundCorner, r.setTripleAt(p, m, f, c, d, u, g)) : r.setTripleAt(s[0], s[1], n[0], n[1], a[0], a[1], g) : r.setTripleAt(t.v[i][0], t.v[i][1], t.o[i][0], t.o[i][1], t.i[i][0], t.i[i][1], g), g += 1;
        return r
    }, RoundCornersModifier.prototype.processShapes = function(t) {
        var e, r, i, s, a, n, o = this.shapes.length,
            h = this.rd.v;
        if (0 !== h)
            for (r = 0; r < o; r += 1) {
                if ((a = this.shapes[r]).shape.paths, n = a.localShapeCollection, a.shape._mdf || this._mdf || t)
                    for (n.releaseShapes(), a.shape._mdf = !0, e = a.shape.paths.shapes, s = a.shape.paths._length, i = 0; i < s; i += 1) n.addShape(this.processPath(e[i], h));
                a.shape.paths = a.localShapeCollection
            }
        this.dynamicProperties.length || (this._mdf = !1)
    }, ShapeModifiers.registerModifier("rd", RoundCornersModifier), extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(t, e) {
        this.getValue = this.processKeys, this.c = PropertyFactory.getProp(t, e.c, 0, null, this), this.o = PropertyFactory.getProp(t, e.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(t, e.tr, this), this.so = PropertyFactory.getProp(t, e.tr.so, 0, .01, this), this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, .01, this), this.data = e, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix, this.rMatrix = new Matrix, this.sMatrix = new Matrix, this.tMatrix = new Matrix, this.matrix = new Matrix
    }, RepeaterModifier.prototype.applyTransforms = function(t, e, r, i, s, a) {
        var n = a ? -1 : 1,
            o = i.s.v[0] + (1 - i.s.v[0]) * (1 - s),
            h = i.s.v[1] + (1 - i.s.v[1]) * (1 - s);
        t.translate(i.p.v[0] * n * s, i.p.v[1] * n * s, i.p.v[2]), e.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), e.rotate(-i.r.v * n * s), e.translate(i.a.v[0], i.a.v[1], i.a.v[2]), r.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), r.scale(a ? 1 / o : o, a ? 1 / h : h), r.translate(i.a.v[0], i.a.v[1], i.a.v[2])
    }, RepeaterModifier.prototype.init = function(t, e, r, i) {
        this.elem = t, this.arr = e, this.pos = r, this.elemsData = i, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[r]);
        for (; 0 < r;) r -= 1, this._elements.unshift(e[r]), 1;
        this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
    }, RepeaterModifier.prototype.resetElements = function(t) {
        var e, r = t.length;
        for (e = 0; e < r; e += 1) t[e]._processed = !1, "gr" === t[e].ty && this.resetElements(t[e].it)
    }, RepeaterModifier.prototype.cloneElements = function(t) {
        t.length;
        var e = JSON.parse(JSON.stringify(t));
        return this.resetElements(e), e
    }, RepeaterModifier.prototype.changeGroupRender = function(t, e) {
        var r, i = t.length;
        for (r = 0; r < i; r += 1) t[r]._render = e, "gr" === t[r].ty && this.changeGroupRender(t[r].it, e)
    }, RepeaterModifier.prototype.processShapes = function(t) {
        var e, r, i, s, a;
        if (this._mdf || t) {
            var n, o = Math.ceil(this.c.v);
            if (this._groups.length < o) {
                for (; this._groups.length < o;) {
                    var h = {
                        it: this.cloneElements(this._elements),
                        ty: "gr"
                    };
                    h.it.push({
                        a: {
                            a: 0,
                            ix: 1,
                            k: [0, 0]
                        },
                        nm: "Transform",
                        o: {
                            a: 0,
                            ix: 7,
                            k: 100
                        },
                        p: {
                            a: 0,
                            ix: 2,
                            k: [0, 0]
                        },
                        r: {
                            a: 1,
                            ix: 6,
                            k: [{
                                s: 0,
                                e: 0,
                                t: 0
                            }, {
                                s: 0,
                                e: 0,
                                t: 1
                            }]
                        },
                        s: {
                            a: 0,
                            ix: 3,
                            k: [100, 100]
                        },
                        sa: {
                            a: 0,
                            ix: 5,
                            k: 0
                        },
                        sk: {
                            a: 0,
                            ix: 4,
                            k: 0
                        },
                        ty: "tr"
                    }), this.arr.splice(0, 0, h), this._groups.splice(0, 0, h), this._currentCopies += 1
                }
                this.elem.reloadShapes()
            }
            for (i = a = 0; i <= this._groups.length - 1; i += 1) n = a < o, this._groups[i]._render = n, this.changeGroupRender(this._groups[i].it, n), a += 1;
            this._currentCopies = o;
            var l = this.o.v,
                p = l % 1,
                m = 0 < l ? Math.floor(l) : Math.ceil(l),
                f = (this.tr.v.props, this.pMatrix.props),
                c = this.rMatrix.props,
                d = this.sMatrix.props;
            this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
            var u, y, g = 0;
            if (0 < l) {
                for (; g < m;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), g += 1;
                p && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, p, !1), g += p)
            } else if (l < 0) {
                for (; m < g;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), g -= 1;
                p && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -p, !0), g -= p)
            }
            for (i = 1 === this.data.m ? 0 : this._currentCopies - 1, s = 1 === this.data.m ? 1 : -1, a = this._currentCopies; a;) {
                if (y = (r = (e = this.elemsData[i].it)[e.length - 1].transform.mProps.v.props).length, e[e.length - 1].transform.mProps._mdf = !0, e[e.length - 1].transform.op._mdf = !0, e[e.length - 1].transform.op.v = this.so.v + (this.eo.v - this.so.v) * (i / (this._currentCopies - 1)), 0 !== g) {
                    for ((0 !== i && 1 === s || i !== this._currentCopies - 1 && -1 === s) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(c[0], c[1], c[2], c[3], c[4], c[5], c[6], c[7], c[8], c[9], c[10], c[11], c[12], c[13], c[14], c[15]), this.matrix.transform(d[0], d[1], d[2], d[3], d[4], d[5], d[6], d[7], d[8], d[9], d[10], d[11], d[12], d[13], d[14], d[15]), this.matrix.transform(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8], f[9], f[10], f[11], f[12], f[13], f[14], f[15]), u = 0; u < y; u += 1) r[u] = this.matrix.props[u];
                    this.matrix.reset()
                } else
                    for (this.matrix.reset(), u = 0; u < y; u += 1) r[u] = this.matrix.props[u];
                g += 1, a -= 1, i += s
            }
        } else
            for (a = this._currentCopies, i = 0, s = 1; a;) r = (e = this.elemsData[i].it)[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = !1, e[e.length - 1].transform.op._mdf = !1, a -= 1, i += s
    }, RepeaterModifier.prototype.addShape = function() {}, ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeCollection.prototype.addShape = function(t) {
        this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1
    }, ShapeCollection.prototype.releaseShapes = function() {
        var t;
        for (t = 0; t < this._length; t += 1) shape_pool.release(this.shapes[t]);
        this._length = 0
    }, DashProperty.prototype.getValue = function(t) {
        if ((this.elem.globalData.frameId !== this.frameId || t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
            var e = 0,
                r = this.dataProps.length;
            for ("svg" === this.renderer && (this.dashStr = ""), e = 0; e < r; e += 1) "o" != this.dataProps[e].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v
        }
    }, extendPrototype([DynamicPropertyContainer], DashProperty), GradientProperty.prototype.comparePoints = function(t, e) {
        for (var r = 0, i = this.o.length / 2; r < i;) {
            if (.01 < Math.abs(t[4 * r] - t[4 * e + 2 * r])) return !1;
            r += 1
        }
        return !0
    }, GradientProperty.prototype.checkCollapsable = function() {
        if (this.o.length / 2 != this.c.length / 4) return !1;
        if (this.data.k.k[0].s)
            for (var t = 0, e = this.data.k.k.length; t < e;) {
                if (!this.comparePoints(this.data.k.k[t].s, this.data.p)) return !1;
                t += 1
            } else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
        return !0
    }, GradientProperty.prototype.getValue = function(t) {
        if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || t) {
            var e, r, i, s = 4 * this.data.p;
            for (e = 0; e < s; e += 1) r = e % 4 == 0 ? 100 : 255, i = Math.round(this.prop.v[e] * r), this.c[e] !== i && (this.c[e] = i, this._cmdf = !t);
            if (this.o.length)
                for (s = this.prop.v.length, e = 4 * this.data.p; e < s; e += 1) r = e % 2 == 0 ? 100 : 1, i = e % 2 == 0 ? Math.round(100 * this.prop.v[e]) : this.prop.v[e], this.o[e - 4 * this.data.p] !== i && (this.o[e - 4 * this.data.p] = i, this._omdf = !t);
            this._mdf = !t
        }
    }, extendPrototype([DynamicPropertyContainer], GradientProperty);
    var buildShapeString = function(t, e, r, i) {
            if (0 === e) return "";
            var s, a = t.o,
                n = t.i,
                o = t.v,
                h = " M" + i.applyToPointStringified(o[0][0], o[0][1]);
            for (s = 1; s < e; s += 1) h += " C" + i.applyToPointStringified(a[s - 1][0], a[s - 1][1]) + " " + i.applyToPointStringified(n[s][0], n[s][1]) + " " + i.applyToPointStringified(o[s][0], o[s][1]);
            return r && e && (h += " C" + i.applyToPointStringified(a[s - 1][0], a[s - 1][1]) + " " + i.applyToPointStringified(n[0][0], n[0][1]) + " " + i.applyToPointStringified(o[0][0], o[0][1]), h += "z"), h
        },
        ImagePreloader = function() {
            var s = function() {
                var t = createTag("canvas");
                t.width = 1, t.height = 1;
                var e = t.getContext("2d");
                return e.fillStyle = "rgba(0,0,0,0)", e.fillRect(0, 0, 1, 1), t
            }();

            function t() {
                this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.imagesLoadedCb && this.imagesLoadedCb(null)
            }

            function e(t) {
                var e = function(t, e, r) {
                        var i = "";
                        if (t.e) i = t.p;
                        else if (e) {
                            var s = t.p; - 1 !== s.indexOf("images/") && (s = s.split("/")[1]), i = e + s
                        } else i = r, i += t.u ? t.u : "", i += t.p;
                        return i
                    }(t, this.assetsPath, this.path),
                    r = createTag("img");
                r.crossOrigin = "anonymous", r.addEventListener("load", this._imageLoaded.bind(this), !1), r.addEventListener("error", function() {
                    i.img = s, this._imageLoaded()
                }.bind(this), !1), r.src = e;
                var i = {
                    img: r,
                    assetData: t
                };
                return i
            }

            function r(t, e) {
                this.imagesLoadedCb = e;
                var r, i = t.length;
                for (r = 0; r < i; r += 1) t[r].layers || (this.totalImages += 1, this.images.push(this._createImageData(t[r])))
            }

            function i(t) {
                this.path = t || ""
            }

            function a(t) {
                this.assetsPath = t || ""
            }

            function n(t) {
                for (var e = 0, r = this.images.length; e < r;) {
                    if (this.images[e].assetData === t) return this.images[e].img;
                    e += 1
                }
            }

            function o() {
                this.imagesLoadedCb = null, this.images.length = 0
            }

            function h() {
                return this.totalImages === this.loadedAssets
            }
            return function() {
                this.loadAssets = r, this.setAssetsPath = a, this.setPath = i, this.loaded = h, this.destroy = o, this.getImage = n, this._createImageData = e, this._imageLoaded = t, this.assetsPath = "", this.path = "", this.totalImages = 0, this.loadedAssets = 0, this.imagesLoadedCb = null, this.images = []
            }
        }(),
        featureSupport = (uw = {
            maskType: !0
        }, (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (uw.maskType = !1), uw),
        uw, filtersFactory = (vw = {}, vw.createFilter = function(t) {
            var e = createNS("filter");
            return e.setAttribute("id", t), e.setAttribute("filterUnits", "objectBoundingBox"), e.setAttribute("x", "0%"), e.setAttribute("y", "0%"), e.setAttribute("width", "100%"), e.setAttribute("height", "100%"), e
        }, vw.createAlphaToLuminanceFilter = function() {
            var t = createNS("feColorMatrix");
            return t.setAttribute("type", "matrix"), t.setAttribute("color-interpolation-filters", "sRGB"), t.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), t
        }, vw),
        vw, assetLoader = function() {
            function a(t) {
                return t.response && "object" == typeof t.response ? t.response : t.response && "string" == typeof t.response ? JSON.parse(t.response) : t.responseText ? JSON.parse(t.responseText) : void 0
            }
            return {
                load: function(t, e, r) {
                    var i, s = new XMLHttpRequest;
                    s.open("GET", t, !0);
                    try {
                        s.responseType = "json"
                    } catch (t) {}
                    s.send(), s.onreadystatechange = function() {
                        if (4 == s.readyState)
                            if (200 == s.status) i = a(s), e(i);
                            else try {
                                i = a(s), e(i)
                            } catch (t) {
                                r && r(t)
                            }
                    }
                }
            }
        }();

    function TextAnimatorProperty(t, e, r) {
        this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = t, this._renderType = e, this._elem = r, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = {
            alignment: {}
        }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(r)
    }

    function TextAnimatorDataProperty(t, e, r) {
        var i = {
                propType: !1
            },
            s = PropertyFactory.getProp,
            a = e.a;
        this.a = {
            r: a.r ? s(t, a.r, 0, degToRads, r) : i,
            rx: a.rx ? s(t, a.rx, 0, degToRads, r) : i,
            ry: a.ry ? s(t, a.ry, 0, degToRads, r) : i,
            sk: a.sk ? s(t, a.sk, 0, degToRads, r) : i,
            sa: a.sa ? s(t, a.sa, 0, degToRads, r) : i,
            s: a.s ? s(t, a.s, 1, .01, r) : i,
            a: a.a ? s(t, a.a, 1, 0, r) : i,
            o: a.o ? s(t, a.o, 0, .01, r) : i,
            p: a.p ? s(t, a.p, 1, 0, r) : i,
            sw: a.sw ? s(t, a.sw, 0, 0, r) : i,
            sc: a.sc ? s(t, a.sc, 1, 0, r) : i,
            fc: a.fc ? s(t, a.fc, 1, 0, r) : i,
            fh: a.fh ? s(t, a.fh, 0, 0, r) : i,
            fs: a.fs ? s(t, a.fs, 0, .01, r) : i,
            fb: a.fb ? s(t, a.fb, 0, .01, r) : i,
            t: a.t ? s(t, a.t, 0, 0, r) : i
        }, this.s = TextSelectorProp.getTextSelectorProp(t, e.s, r), this.s.t = e.s.t
    }

    function LetterProps(t, e, r, i, s, a) {
        this.o = t, this.sw = e, this.sc = r, this.fc = i, this.m = s, this.p = a, this._mdf = {
            o: !0,
            sw: !!e,
            sc: !!r,
            fc: !!i,
            m: !0,
            p: !0
        }
    }

    function TextProperty(t, e) {
        this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, this.data = e, this.elem = t, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
            ascent: 0,
            boxWidth: this.defaultBoxWidth,
            f: "",
            fStyle: "",
            fWeight: "",
            fc: "",
            j: "",
            justifyOffset: "",
            l: [],
            lh: 0,
            lineWidths: [],
            ls: "",
            of: "",
            s: "",
            sc: "",
            sw: 0,
            t: 0,
            tr: 0,
            sz: 0,
            ps: null,
            fillColorAnim: !1,
            strokeColorAnim: !1,
            strokeWidthAnim: !1,
            yOffset: 0,
            finalSize: 0,
            finalText: [],
            finalLineHeight: 0,
            __complete: !1
        }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData)
    }
    TextAnimatorProperty.prototype.searchProperties = function() {
        var t, e, r = this._textData.a.length,
            i = PropertyFactory.getProp;
        for (t = 0; t < r; t += 1) e = this._textData.a[t], this._animatorsData[t] = new TextAnimatorDataProperty(this._elem, e, this);
        this._textData.p && "m" in this._textData.p ? (this._pathData = {
            f: i(this._elem, this._textData.p.f, 0, 0, this),
            l: i(this._elem, this._textData.p.l, 0, 0, this),
            r: this._textData.p.r,
            m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
        }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = i(this._elem, this._textData.m.a, 1, 0, this)
    }, TextAnimatorProperty.prototype.getMeasures = function(t, e) {
        if (this.lettersChangedFlag = e, this._mdf || this._isFirstFrame || e || this._hasMaskedPath && this._pathData.m._mdf) {
            this._isFirstFrame = !1;
            var r, i, s, a, n, o, h, l, p, m, f, c, d, u, y, g, v, b, E, x = this._moreOptions.alignment.v,
                P = this._animatorsData,
                S = this._textData,
                _ = this.mHelper,
                A = this._renderType,
                C = this.renderedLetters.length,
                T = (this.data, t.l);
            if (this._hasMaskedPath) {
                if (E = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                    var k, M = E.v;
                    for (this._pathData.r && (M = M.reverse()), n = {
                            tLength: 0,
                            segments: []
                        }, a = M._length - 1, s = g = 0; s < a; s += 1) k = bez.buildBezierData(M.v[s], M.v[s + 1], [M.o[s][0] - M.v[s][0], M.o[s][1] - M.v[s][1]], [M.i[s + 1][0] - M.v[s + 1][0], M.i[s + 1][1] - M.v[s + 1][1]]), n.tLength += k.segmentLength, n.segments.push(k), g += k.segmentLength;
                    s = a, E.v.c && (k = bez.buildBezierData(M.v[s], M.v[0], [M.o[s][0] - M.v[s][0], M.o[s][1] - M.v[s][1]], [M.i[0][0] - M.v[0][0], M.i[0][1] - M.v[0][1]]), n.tLength += k.segmentLength, n.segments.push(k), g += k.segmentLength), this._pathData.pi = n
                }
                if (n = this._pathData.pi, o = this._pathData.f.v, m = 1, p = !(l = f = 0), u = n.segments, o < 0 && E.v.c)
                    for (n.tLength < Math.abs(o) && (o = -Math.abs(o) % n.tLength), m = (d = u[f = u.length - 1].points).length - 1; o < 0;) o += d[m].partialLength, (m -= 1) < 0 && (m = (d = u[f -= 1].points).length - 1);
                c = (d = u[f].points)[m - 1], y = (h = d[m]).partialLength
            }
            a = T.length, i = r = 0;
            var D, w, F, I, V = 1.2 * t.finalSize * .714,
                R = !0;
            F = P.length;
            var B, L, G, z, N, O, H, j, q, W, Y, X, $, K = -1,
                J = o,
                Z = f,
                U = m,
                Q = -1,
                tt = "",
                et = this.defaultPropsArray;
            if (2 === t.j || 1 === t.j) {
                var rt = 0,
                    it = 0,
                    st = 2 === t.j ? -.5 : -1,
                    at = 0,
                    nt = !0;
                for (s = 0; s < a; s += 1)
                    if (T[s].n) {
                        for (rt && (rt += it); at < s;) T[at].animatorJustifyOffset = rt, at += 1;
                        nt = !(rt = 0)
                    } else {
                        for (w = 0; w < F; w += 1)(D = P[w].a).t.propType && (nt && 2 === t.j && (it += D.t.v * st), (B = P[w].s.getMult(T[s].anIndexes[w], S.a[w].s.totalChars)).length ? rt += D.t.v * B[0] * st : rt += D.t.v * B * st);
                        nt = !1
                    }
                for (rt && (rt += it); at < s;) T[at].animatorJustifyOffset = rt, at += 1
            }
            for (s = 0; s < a; s += 1) {
                if (_.reset(), N = 1, T[s].n) r = 0, i += t.yOffset, i += R ? 1 : 0, o = J, R = !1, 0, this._hasMaskedPath && (m = U, c = (d = u[f = Z].points)[m - 1], y = (h = d[m]).partialLength, l = 0), $ = W = X = tt = "", et = this.defaultPropsArray;
                else {
                    if (this._hasMaskedPath) {
                        if (Q !== T[s].line) {
                            switch (t.j) {
                                case 1:
                                    o += g - t.lineWidths[T[s].line];
                                    break;
                                case 2:
                                    o += (g - t.lineWidths[T[s].line]) / 2
                            }
                            Q = T[s].line
                        }
                        K !== T[s].ind && (T[K] && (o += T[K].extra), o += T[s].an / 2, K = T[s].ind), o += x[0] * T[s].an / 200;
                        var ot = 0;
                        for (w = 0; w < F; w += 1)(D = P[w].a).p.propType && ((B = P[w].s.getMult(T[s].anIndexes[w], S.a[w].s.totalChars)).length ? ot += D.p.v[0] * B[0] : ot += D.p.v[0] * B), D.a.propType && ((B = P[w].s.getMult(T[s].anIndexes[w], S.a[w].s.totalChars)).length ? ot += D.a.v[0] * B[0] : ot += D.a.v[0] * B);
                        for (p = !0; p;) o + ot <= l + y || !d ? (v = (o + ot - l) / h.partialLength, G = c.point[0] + (h.point[0] - c.point[0]) * v, z = c.point[1] + (h.point[1] - c.point[1]) * v, _.translate(-x[0] * T[s].an / 200, -x[1] * V / 100), p = !1) : d && (l += h.partialLength, (m += 1) >= d.length && (m = 0, d = u[f += 1] ? u[f].points : E.v.c ? u[f = m = 0].points : (l -= h.partialLength, null)), d && (c = h, y = (h = d[m]).partialLength));
                        L = T[s].an / 2 - T[s].add, _.translate(-L, 0, 0)
                    } else L = T[s].an / 2 - T[s].add, _.translate(-L, 0, 0), _.translate(-x[0] * T[s].an / 200, -x[1] * V / 100, 0);
                    for (T[s].l / 2, w = 0; w < F; w += 1)(D = P[w].a).t.propType && (B = P[w].s.getMult(T[s].anIndexes[w], S.a[w].s.totalChars), 0 === r && 0 === t.j || (this._hasMaskedPath ? B.length ? o += D.t.v * B[0] : o += D.t.v * B : B.length ? r += D.t.v * B[0] : r += D.t.v * B));
                    for (T[s].l / 2, t.strokeWidthAnim && (H = t.sw || 0), t.strokeColorAnim && (O = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]), t.fillColorAnim && t.fc && (j = [t.fc[0], t.fc[1], t.fc[2]]), w = 0; w < F; w += 1)(D = P[w].a).a.propType && ((B = P[w].s.getMult(T[s].anIndexes[w], S.a[w].s.totalChars)).length ? _.translate(-D.a.v[0] * B[0], -D.a.v[1] * B[1], D.a.v[2] * B[2]) : _.translate(-D.a.v[0] * B, -D.a.v[1] * B, D.a.v[2] * B));
                    for (w = 0; w < F; w += 1)(D = P[w].a).s.propType && ((B = P[w].s.getMult(T[s].anIndexes[w], S.a[w].s.totalChars)).length ? _.scale(1 + (D.s.v[0] - 1) * B[0], 1 + (D.s.v[1] - 1) * B[1], 1) : _.scale(1 + (D.s.v[0] - 1) * B, 1 + (D.s.v[1] - 1) * B, 1));
                    for (w = 0; w < F; w += 1) {
                        if (D = P[w].a, B = P[w].s.getMult(T[s].anIndexes[w], S.a[w].s.totalChars), D.sk.propType && (B.length ? _.skewFromAxis(-D.sk.v * B[0], D.sa.v * B[1]) : _.skewFromAxis(-D.sk.v * B, D.sa.v * B)), D.r.propType && (B.length ? _.rotateZ(-D.r.v * B[2]) : _.rotateZ(-D.r.v * B)), D.ry.propType && (B.length ? _.rotateY(D.ry.v * B[1]) : _.rotateY(D.ry.v * B)), D.rx.propType && (B.length ? _.rotateX(D.rx.v * B[0]) : _.rotateX(D.rx.v * B)), D.o.propType && (B.length ? N += (D.o.v * B[0] - N) * B[0] : N += (D.o.v * B - N) * B), t.strokeWidthAnim && D.sw.propType && (B.length ? H += D.sw.v * B[0] : H += D.sw.v * B), t.strokeColorAnim && D.sc.propType)
                            for (q = 0; q < 3; q += 1) B.length ? O[q] = O[q] + (D.sc.v[q] - O[q]) * B[0] : O[q] = O[q] + (D.sc.v[q] - O[q]) * B;
                        if (t.fillColorAnim && t.fc) {
                            if (D.fc.propType)
                                for (q = 0; q < 3; q += 1) B.length ? j[q] = j[q] + (D.fc.v[q] - j[q]) * B[0] : j[q] = j[q] + (D.fc.v[q] - j[q]) * B;
                            D.fh.propType && (j = B.length ? addHueToRGB(j, D.fh.v * B[0]) : addHueToRGB(j, D.fh.v * B)), D.fs.propType && (j = B.length ? addSaturationToRGB(j, D.fs.v * B[0]) : addSaturationToRGB(j, D.fs.v * B)), D.fb.propType && (j = B.length ? addBrightnessToRGB(j, D.fb.v * B[0]) : addBrightnessToRGB(j, D.fb.v * B))
                        }
                    }
                    for (w = 0; w < F; w += 1)(D = P[w].a).p.propType && (B = P[w].s.getMult(T[s].anIndexes[w], S.a[w].s.totalChars), this._hasMaskedPath ? B.length ? _.translate(0, D.p.v[1] * B[0], -D.p.v[2] * B[1]) : _.translate(0, D.p.v[1] * B, -D.p.v[2] * B) : B.length ? _.translate(D.p.v[0] * B[0], D.p.v[1] * B[1], -D.p.v[2] * B[2]) : _.translate(D.p.v[0] * B, D.p.v[1] * B, -D.p.v[2] * B));
                    if (t.strokeWidthAnim && (W = H < 0 ? 0 : H), t.strokeColorAnim && (Y = "rgb(" + Math.round(255 * O[0]) + "," + Math.round(255 * O[1]) + "," + Math.round(255 * O[2]) + ")"), t.fillColorAnim && t.fc && (X = "rgb(" + Math.round(255 * j[0]) + "," + Math.round(255 * j[1]) + "," + Math.round(255 * j[2]) + ")"), this._hasMaskedPath) {
                        if (_.translate(0, -t.ls), _.translate(0, x[1] * V / 100 + i, 0), S.p.p) {
                            b = (h.point[1] - c.point[1]) / (h.point[0] - c.point[0]);
                            var ht = 180 * Math.atan(b) / Math.PI;
                            h.point[0] < c.point[0] && (ht += 180), _.rotate(-ht * Math.PI / 180)
                        }
                        _.translate(G, z, 0), o -= x[0] * T[s].an / 200, T[s + 1] && K !== T[s + 1].ind && (o += T[s].an / 2, o += t.tr / 1e3 * t.finalSize)
                    } else {
                        switch (_.translate(r, i, 0), t.ps && _.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
                            case 1:
                                _.translate(T[s].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[T[s].line]), 0, 0);
                                break;
                            case 2:
                                _.translate(T[s].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[T[s].line]) / 2, 0, 0)
                        }
                        _.translate(0, -t.ls), _.translate(L, 0, 0), _.translate(x[0] * T[s].an / 200, x[1] * V / 100, 0), r += T[s].l + t.tr / 1e3 * t.finalSize
                    }
                    "html" === A ? tt = _.toCSS() : "svg" === A ? tt = _.to2dCSS() : et = [_.props[0], _.props[1], _.props[2], _.props[3], _.props[4], _.props[5], _.props[6], _.props[7], _.props[8], _.props[9], _.props[10], _.props[11], _.props[12], _.props[13], _.props[14], _.props[15]], $ = N
                }
                this.lettersChangedFlag = C <= s ? (I = new LetterProps($, W, Y, X, tt, et), this.renderedLetters.push(I), C += 1, !0) : (I = this.renderedLetters[s]).update($, W, Y, X, tt, et) || this.lettersChangedFlag
            }
        }
    }, TextAnimatorProperty.prototype.getValue = function() {
        this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties())
    }, TextAnimatorProperty.prototype.mHelper = new Matrix, TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty), LetterProps.prototype.update = function(t, e, r, i, s, a) {
        this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1;
        var n = this._mdf.p = !1;
        return this.o !== t && (this.o = t, n = this._mdf.o = !0), this.sw !== e && (this.sw = e, n = this._mdf.sw = !0), this.sc !== r && (this.sc = r, n = this._mdf.sc = !0), this.fc !== i && (this.fc = i, n = this._mdf.fc = !0), this.m !== s && (this.m = s, n = this._mdf.m = !0), !a.length || this.p[0] === a[0] && this.p[1] === a[1] && this.p[4] === a[4] && this.p[5] === a[5] && this.p[12] === a[12] && this.p[13] === a[13] || (this.p = a, n = this._mdf.p = !0), n
    }, TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function(t, e) {
        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
        return t
    }, TextProperty.prototype.setCurrentData = function(t) {
        t.__complete || this.completeTextData(t), this.currentData = t, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0
    }, TextProperty.prototype.searchProperty = function() {
        return this.searchKeyframes()
    }, TextProperty.prototype.searchKeyframes = function() {
        return this.kf = 1 < this.data.d.k.length, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf
    }, TextProperty.prototype.addEffect = function(t) {
        this.effectsSequence.push(t), this.elem.addDynamicProperty(this)
    }, TextProperty.prototype.getValue = function(t) {
        if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || t) {
            this.currentData.t = this.data.d.k[this.keysIndex].s.t;
            var e = this.currentData,
                r = this.keysIndex;
            if (this.lock) this.setCurrentData(this.currentData);
            else {
                this.lock = !0, this._mdf = !1;
                var i, s = this.effectsSequence.length,
                    a = t || this.data.d.k[this.keysIndex].s;
                for (i = 0; i < s; i += 1) a = r !== this.keysIndex ? this.effectsSequence[i](a, a.t) : this.effectsSequence[i](this.currentData, a.t);
                e !== a && this.setCurrentData(a), this.pv = this.v = this.currentData, this.lock = !1, this.frameId = this.elem.globalData.frameId
            }
        }
    }, TextProperty.prototype.getKeyframeValue = function() {
        for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, r = 0, i = t.length; r <= i - 1 && (t[r].s, !(r === i - 1 || t[r + 1].t > e));) r += 1;
        return this.keysIndex !== r && (this.keysIndex = r), this.data.d.k[this.keysIndex].s
    }, TextProperty.prototype.buildFinalText = function(t) {
        for (var e, r = FontManager.getCombinedCharacterCodes(), i = [], s = 0, a = t.length; s < a;) e = t.charCodeAt(s), -1 !== r.indexOf(e) ? i[i.length - 1] += t.charAt(s) : 55296 <= e && e <= 56319 && 56320 <= (e = t.charCodeAt(s + 1)) && e <= 57343 ? (i.push(t.substr(s, 2)), ++s) : i.push(t.charAt(s)), s += 1;
        return i
    }, TextProperty.prototype.completeTextData = function(t) {
        t.__complete = !0;
        var e, r, i, s, a, n, o, h = this.elem.globalData.fontManager,
            l = this.data,
            p = [],
            m = 0,
            f = l.m.g,
            c = 0,
            d = 0,
            u = 0,
            y = [],
            g = 0,
            v = 0,
            b = h.getFontByName(t.f),
            E = 0,
            x = b.fStyle ? b.fStyle.split(" ") : [],
            P = "normal",
            S = "normal";
        for (r = x.length, e = 0; e < r; e += 1) switch (x[e].toLowerCase()) {
            case "italic":
                S = "italic";
                break;
            case "bold":
                P = "700";
                break;
            case "black":
                P = "900";
                break;
            case "medium":
                P = "500";
                break;
            case "regular":
            case "normal":
                P = "400";
                break;
            case "light":
            case "thin":
                P = "200"
        }
        t.fWeight = b.fWeight || P, t.fStyle = S, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), r = t.finalText.length, t.finalLineHeight = t.lh;
        var _, A = t.tr / 1e3 * t.finalSize;
        if (t.sz)
            for (var C, T, k = !0, M = t.sz[0], D = t.sz[1]; k;) {
                g = C = 0, r = (T = this.buildFinalText(t.t)).length, A = t.tr / 1e3 * t.finalSize;
                var w = -1;
                for (e = 0; e < r; e += 1) _ = T[e].charCodeAt(0), i = !1, " " === T[e] ? w = e : 13 !== _ && 3 !== _ || (i = !(g = 0), C += t.finalLineHeight || 1.2 * t.finalSize), M < g + (E = h.chars ? (o = h.getCharData(T[e], b.fStyle, b.fFamily), i ? 0 : o.w * t.finalSize / 100) : h.measureText(T[e], t.f, t.finalSize)) && " " !== T[e] ? (-1 === w ? r += 1 : e = w, C += t.finalLineHeight || 1.2 * t.finalSize, T.splice(e, w === e ? 1 : 0, "\r"), w = -1, g = 0) : (g += E, g += A);
                C += b.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && D < C ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = T, r = t.finalText.length, k = !1)
            }
        g = -A;
        var F, I = E = 0;
        for (e = 0; e < r; e += 1)
            if (i = !1, _ = (F = t.finalText[e]).charCodeAt(0), " " === F ? s = "\xa0" : 13 === _ || 3 === _ ? (I = 0, y.push(g), v = v < g ? g : v, g = -2 * A, i = !(s = ""), u += 1) : s = t.finalText[e], E = h.chars ? (o = h.getCharData(F, b.fStyle, h.getFontByName(t.f).fFamily), i ? 0 : o.w * t.finalSize / 100) : h.measureText(s, t.f, t.finalSize), " " === F ? I += E + A : (g += E + A + I, I = 0), p.push({
                    l: E,
                    an: E,
                    add: c,
                    n: i,
                    anIndexes: [],
                    val: s,
                    line: u,
                    animatorJustifyOffset: 0
                }), 2 == f) {
                if (c += E, "" === s || "\xa0" === s || e === r - 1) {
                    for ("" !== s && "\xa0" !== s || (c -= E); d <= e;) p[d].an = c, p[d].ind = m, p[d].extra = E, d += 1;
                    m += 1, c = 0
                }
            } else if (3 == f) {
            if (c += E, "" === s || e === r - 1) {
                for ("" === s && (c -= E); d <= e;) p[d].an = c, p[d].ind = m, p[d].extra = E, d += 1;
                c = 0, m += 1
            }
        } else p[m].ind = m, p[m].extra = 0, m += 1;
        if (t.l = p, v = v < g ? g : v, y.push(g), t.sz) t.boxWidth = t.sz[0], t.justifyOffset = 0;
        else switch (t.boxWidth = v, t.j) {
            case 1:
                t.justifyOffset = -t.boxWidth;
                break;
            case 2:
                t.justifyOffset = -t.boxWidth / 2;
                break;
            default:
                t.justifyOffset = 0
        }
        t.lineWidths = y;
        var V, R, B = l.a;
        n = B.length;
        var L, G, z = [];
        for (a = 0; a < n; a += 1) {
            for ((V = B[a]).a.sc && (t.strokeColorAnim = !0), V.a.sw && (t.strokeWidthAnim = !0), (V.a.fc || V.a.fh || V.a.fs || V.a.fb) && (t.fillColorAnim = !0), G = 0, L = V.s.b, e = 0; e < r; e += 1)(R = p[e]).anIndexes[a] = G, (1 == L && "" !== R.val || 2 == L && "" !== R.val && "\xa0" !== R.val || 3 == L && (R.n || "\xa0" == R.val || e == r - 1) || 4 == L && (R.n || e == r - 1)) && (1 === V.s.rn && z.push(G), G += 1);
            l.a[a].s.totalChars = G;
            var N, O = -1;
            if (1 === V.s.rn)
                for (e = 0; e < r; e += 1) O != (R = p[e]).anIndexes[a] && (O = R.anIndexes[a], N = z.splice(Math.floor(Math.random() * z.length), 1)[0]), R.anIndexes[a] = N
        }
        t.yOffset = t.finalLineHeight || 1.2 * t.finalSize, t.ls = t.ls || 0, t.ascent = b.ascent * t.finalSize / 100
    }, TextProperty.prototype.updateDocumentData = function(t, e) {
        e = void 0 === e ? this.keysIndex : e;
        var r = this.copyData({}, this.data.d.k[e].s);
        r = this.copyData(r, t), this.data.d.k[e].s = r, this.recalculate(e), this.elem.addDynamicProperty(this)
    }, TextProperty.prototype.recalculate = function(t) {
        var e = this.data.d.k[t].s;
        e.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(e)
    }, TextProperty.prototype.canResizeFont = function(t) {
        this.canResize = t, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
    }, TextProperty.prototype.setMinimumFontSize = function(t) {
        this.minimumFontSize = Math.floor(t) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
    };
    var TextSelectorProp = function() {
            var c = Math.max,
                d = Math.min,
                u = Math.floor;

            function i(t, e) {
                this._currentTextLength = -1, this.k = !1, this.data = e, this.elem = t, this.comp = t.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(t), this.s = PropertyFactory.getProp(t, e.s || {
                    k: 0
                }, 0, 0, this), this.e = "e" in e ? PropertyFactory.getProp(t, e.e, 0, 0, this) : {
                    v: 100
                }, this.o = PropertyFactory.getProp(t, e.o || {
                    k: 0
                }, 0, 0, this), this.xe = PropertyFactory.getProp(t, e.xe || {
                    k: 0
                }, 0, 0, this), this.ne = PropertyFactory.getProp(t, e.ne || {
                    k: 0
                }, 0, 0, this), this.a = PropertyFactory.getProp(t, e.a, 0, .01, this), this.dynamicProperties.length || this.getValue()
            }
            return i.prototype = {
                getMult: function(t) {
                    this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
                    var e = 0,
                        r = 0,
                        i = 1,
                        s = 1;
                    0 < this.ne.v ? e = this.ne.v / 100 : r = -this.ne.v / 100, 0 < this.xe.v ? i = 1 - this.xe.v / 100 : s = 1 + this.xe.v / 100;
                    var a = BezierFactory.getBezierEasing(e, r, i, s).get,
                        n = 0,
                        o = this.finalS,
                        h = this.finalE,
                        l = this.data.sh;
                    if (2 == l) n = a(n = h === o ? h <= t ? 1 : 0 : c(0, d(.5 / (h - o) + (t - o) / (h - o), 1)));
                    else if (3 == l) n = a(n = h === o ? h <= t ? 0 : 1 : 1 - c(0, d(.5 / (h - o) + (t - o) / (h - o), 1)));
                    else if (4 == l) h === o ? n = 0 : (n = c(0, d(.5 / (h - o) + (t - o) / (h - o), 1))) < .5 ? n *= 2 : n = 1 - 2 * (n - .5), n = a(n);
                    else if (5 == l) {
                        if (h === o) n = 0;
                        else {
                            var p = h - o,
                                m = -p / 2 + (t = d(c(0, t + .5 - o), h - o)),
                                f = p / 2;
                            n = Math.sqrt(1 - m * m / (f * f))
                        }
                        n = a(n)
                    } else n = 6 == l ? a(n = h === o ? 0 : (t = d(c(0, t + .5 - o), h - o), (1 + Math.cos(Math.PI + 2 * Math.PI * t / (h - o))) / 2)) : (t >= u(o) && (n = t - o < 0 ? 1 - (o - t) : c(0, d(h - t, 1))), a(n));
                    return n * this.a.v
                },
                getValue: function(t) {
                    this.iterateDynamicProperties(), this._mdf = t || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, t && 2 === this.data.r && (this.e.v = this._currentTextLength);
                    var e = 2 === this.data.r ? 1 : 100 / this.data.totalChars,
                        r = this.o.v / e,
                        i = this.s.v / e + r,
                        s = this.e.v / e + r;
                    if (s < i) {
                        var a = i;
                        i = s, s = a
                    }
                    this.finalS = i, this.finalE = s
                }
            }, extendPrototype([DynamicPropertyContainer], i), {
                getTextSelectorProp: function(t, e, r) {
                    return new i(t, e, r)
                }
            }
        }(),
        pool_factory = function(t, e, r, i) {
            var s = 0,
                a = t,
                n = createSizedArray(a);

            function o() {
                return s ? n[s -= 1] : e()
            }
            return {
                newElement: o,
                release: function(t) {
                    s === a && (n = pooling.double(n), a *= 2), r && r(t), n[s] = t, s += 1
                }
            }
        },
        pooling = {
            double: function(t) {
                return t.concat(createSizedArray(t.length))
            }
        },
        point_pool = pool_factory(8, function() {
            return createTypedArray("float32", 2)
        }),
        shape_pool = (MA = pool_factory(4, function() {
            return new ShapePath
        }, function(t) {
            var e, r = t._length;
            for (e = 0; e < r; e += 1) point_pool.release(t.v[e]), point_pool.release(t.i[e]), point_pool.release(t.o[e]), t.v[e] = null, t.i[e] = null, t.o[e] = null;
            t._length = 0, t.c = !1
        }), MA.clone = function(t) {
            var e, r = MA.newElement(),
                i = void 0 === t._length ? t.v.length : t._length;
            for (r.setLength(i), r.c = t.c, e = 0; e < i; e += 1) r.setTripleAt(t.v[e][0], t.v[e][1], t.o[e][0], t.o[e][1], t.i[e][0], t.i[e][1], e);
            return r
        }, MA),
        MA, shapeCollection_pool = (VA = {
            newShapeCollection: function() {
                var t;
                t = WA ? YA[WA -= 1] : new ShapeCollection;
                return t
            },
            release: function(t) {
                var e, r = t._length;
                for (e = 0; e < r; e += 1) shape_pool.release(t.shapes[e]);
                t._length = 0, WA === XA && (YA = pooling.double(YA), XA *= 2);
                YA[WA] = t, WA += 1
            }
        }, WA = 0, XA = 4, YA = createSizedArray(XA), VA),
        VA, WA, XA, YA, segments_length_pool = pool_factory(8, function() {
            return {
                lengths: [],
                totalLength: 0
            }
        }, function(t) {
            var e, r = t.lengths.length;
            for (e = 0; e < r; e += 1) bezier_length_pool.release(t.lengths[e]);
            t.lengths.length = 0
        }),
        bezier_length_pool = pool_factory(8, function() {
            return {
                addedLength: 0,
                percents: createTypedArray("float32", defaultCurveSegments),
                lengths: createTypedArray("float32", defaultCurveSegments)
            }
        });

    function BaseRenderer() {}

    function SVGRenderer(t, e) {
        this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
        var r = "";
        if (e && e.title) {
            var i = createNS("title"),
                s = createElementID();
            i.setAttribute("id", s), i.textContent = e.title, this.svgElement.appendChild(i), r += s
        }
        if (e && e.description) {
            var a = createNS("desc"),
                n = createElementID();
            a.setAttribute("id", n), a.textContent = e.description, this.svgElement.appendChild(a), r += " " + n
        }
        r && this.svgElement.setAttribute("aria-labelledby", r);
        var o = createNS("defs");
        this.svgElement.appendChild(o);
        var h = createNS("g");
        this.svgElement.appendChild(h), this.layerElement = h, this.renderConfig = {
            preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
            imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
            progressiveLoad: e && e.progressiveLoad || !1,
            hideOnTransparent: !e || !1 !== e.hideOnTransparent,
            viewBoxOnly: e && e.viewBoxOnly || !1,
            viewBoxSize: e && e.viewBoxSize || !1,
            className: e && e.className || "",
            focusable: e && e.focusable
        }, this.globalData = {
            _mdf: !1,
            frameNum: -1,
            defs: o,
            renderConfig: this.renderConfig
        }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg"
    }

    function CanvasRenderer(t, e) {
        this.animationItem = t, this.renderConfig = {
            clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas,
            context: e && e.context || null,
            progressiveLoad: e && e.progressiveLoad || !1,
            preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
            imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
            className: e && e.className || ""
        }, this.renderConfig.dpr = e && e.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
            frameNum: -1,
            _mdf: !1,
            renderConfig: this.renderConfig,
            currentGlobalAlpha: -1
        }, this.contextData = new CVContextData, this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1, this.rendererType = "canvas"
    }

    function HybridRenderer(t, e) {
        this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
            className: e && e.className || "",
            imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice",
            hideOnTransparent: !e || !1 !== e.hideOnTransparent
        }, this.globalData = {
            _mdf: !1,
            frameNum: -1,
            renderConfig: this.renderConfig
        }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
    }

    function MaskElement(t, e, r) {
        this.data = t, this.element = e, this.globalData = r, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
        var i, s = this.globalData.defs,
            a = this.masksProperties ? this.masksProperties.length : 0;
        this.viewData = createSizedArray(a), this.solidPath = "";
        var n, o, h, l, p, m, f, c = this.masksProperties,
            d = 0,
            u = [],
            y = createElementID(),
            g = "clipPath",
            v = "clip-path";
        for (i = 0; i < a; i++)
            if (("a" !== c[i].mode && "n" !== c[i].mode || c[i].inv || 100 !== c[i].o.k || c[i].o.x) && (v = g = "mask"), "s" != c[i].mode && "i" != c[i].mode || 0 !== d ? l = null : ((l = createNS("rect")).setAttribute("fill", "#ffffff"), l.setAttribute("width", this.element.comp.data.w || 0), l.setAttribute("height", this.element.comp.data.h || 0), u.push(l)), n = createNS("path"), "n" != c[i].mode) {
                var b;
                if (d += 1, n.setAttribute("fill", "s" === c[i].mode ? "#000000" : "#ffffff"), n.setAttribute("clip-rule", "nonzero"), 0 !== c[i].x.k ? (v = g = "mask", f = PropertyFactory.getProp(this.element, c[i].x, 0, null, this.element), b = createElementID(), (p = createNS("filter")).setAttribute("id", b), (m = createNS("feMorphology")).setAttribute("operator", "erode"), m.setAttribute("in", "SourceGraphic"), m.setAttribute("radius", "0"), p.appendChild(m), s.appendChild(p), n.setAttribute("stroke", "s" === c[i].mode ? "#000000" : "#ffffff")) : f = m = null, this.storedData[i] = {
                        elem: n,
                        x: f,
                        expan: m,
                        lastPath: "",
                        lastOperator: "",
                        filterId: b,
                        lastRadius: 0
                    }, "i" == c[i].mode) {
                    h = u.length;
                    var E = createNS("g");
                    for (o = 0; o < h; o += 1) E.appendChild(u[o]);
                    var x = createNS("mask");
                    x.setAttribute("mask-type", "alpha"), x.setAttribute("id", y + "_" + d), x.appendChild(n), s.appendChild(x), E.setAttribute("mask", "url(" + locationHref + "#" + y + "_" + d + ")"), u.length = 0, u.push(E)
                } else u.push(n);
                c[i].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[i] = {
                    elem: n,
                    lastPath: "",
                    op: PropertyFactory.getProp(this.element, c[i].o, 0, .01, this.element),
                    prop: ShapePropertyFactory.getShapeProp(this.element, c[i], 3),
                    invRect: l
                }, this.viewData[i].prop.k || this.drawPath(c[i], this.viewData[i].prop.v, this.viewData[i])
            } else this.viewData[i] = {
                op: PropertyFactory.getProp(this.element, c[i].o, 0, .01, this.element),
                prop: ShapePropertyFactory.getShapeProp(this.element, c[i], 3),
                elem: n,
                lastPath: ""
            }, s.appendChild(n);
        for (this.maskElement = createNS(g), a = u.length, i = 0; i < a; i += 1) this.maskElement.appendChild(u[i]);
        0 < d && (this.maskElement.setAttribute("id", y), this.element.maskedElement.setAttribute(v, "url(" + locationHref + "#" + y + ")"), s.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this)
    }

    function HierarchyElement() {}

    function FrameElement() {}

    function TransformElement() {}

    function RenderableElement() {}

    function RenderableDOMElement() {}

    function ProcessedElement(t, e) {
        this.elem = t, this.pos = e
    }

    function SVGStyleData(t, e) {
        this.data = t, this.type = t.ty, this.d = "", this.lvl = e, this._mdf = !1, this.closed = !0 === t.hd, this.pElem = createNS("path"), this.msElem = null
    }

    function SVGShapeData(t, e, r) {
        this.caches = [], this.styles = [], this.transformers = t, this.lStr = "", this.sh = r, this.lvl = e, this._isAnimated = !!r.k;
        for (var i = 0, s = t.length; i < s;) {
            if (t[i].mProps.dynamicProperties.length) {
                this._isAnimated = !0;
                break
            }
            i += 1
        }
    }

    function SVGTransformData(t, e, r) {
        this.transform = {
            mProps: t,
            op: e,
            container: r
        }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length
    }

    function SVGStrokeStyleData(t, e, r) {
        this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = r, this._isAnimated = !!this._isAnimated
    }

    function SVGFillStyleData(t, e, r) {
        this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = r
    }

    function SVGGradientFillStyleData(t, e, r) {
        this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.initGradientData(t, e, r)
    }

    function SVGGradientStrokeStyleData(t, e, r) {
        this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.initGradientData(t, e, r), this._isAnimated = !!this._isAnimated
    }

    function ShapeGroupData() {
        this.it = [], this.prevViewData = [], this.gr = createNS("g")
    }
    BaseRenderer.prototype.checkLayers = function(t) {
        var e, r, i = this.layers.length;
        for (this.completeLayers = !0, e = i - 1; 0 <= e; e--) this.elements[e] || (r = this.layers[e]).ip - r.st <= t - this.layers[e].st && r.op - r.st > t - this.layers[e].st && this.buildItem(e), this.completeLayers = !!this.elements[e] && this.completeLayers;
        this.checkPendingElements()
    }, BaseRenderer.prototype.createItem = function(t) {
        switch (t.ty) {
            case 2:
                return this.createImage(t);
            case 0:
                return this.createComp(t);
            case 1:
                return this.createSolid(t);
            case 3:
                return this.createNull(t);
            case 4:
                return this.createShape(t);
            case 5:
                return this.createText(t);
            case 13:
                return this.createCamera(t)
        }
        return this.createNull(t)
    }, BaseRenderer.prototype.createCamera = function() {
        throw new Error("You're using a 3d camera. Try the html renderer.")
    }, BaseRenderer.prototype.buildAllItems = function() {
        var t, e = this.layers.length;
        for (t = 0; t < e; t += 1) this.buildItem(t);
        this.checkPendingElements()
    }, BaseRenderer.prototype.includeLayers = function(t) {
        this.completeLayers = !1;
        var e, r, i = t.length,
            s = this.layers.length;
        for (e = 0; e < i; e += 1)
            for (r = 0; r < s;) {
                if (this.layers[r].id == t[e].id) {
                    this.layers[r] = t[e];
                    break
                }
                r += 1
            }
    }, BaseRenderer.prototype.setProjectInterface = function(t) {
        this.globalData.projectInterface = t
    }, BaseRenderer.prototype.initItems = function() {
        this.globalData.progressiveLoad || this.buildAllItems()
    }, BaseRenderer.prototype.buildElementParenting = function(t, e, r) {
        for (var i = this.elements, s = this.layers, a = 0, n = s.length; a < n;) s[a].ind == e && (i[a] && !0 !== i[a] ? (r.push(i[a]), i[a].setAsParent(), void 0 !== s[a].parent ? this.buildElementParenting(t, s[a].parent, r) : t.setHierarchy(r)) : (this.buildItem(a), this.addPendingElement(t))), a += 1
    }, BaseRenderer.prototype.addPendingElement = function(t) {
        this.pendingElements.push(t)
    }, BaseRenderer.prototype.searchExtraCompositions = function(t) {
        var e, r = t.length;
        for (e = 0; e < r; e += 1)
            if (t[e].xt) {
                var i = this.createComp(t[e]);
                i.initExpressions(), this.globalData.projectInterface.registerComposition(i)
            }
    }, BaseRenderer.prototype.setupGlobalData = function(t, e) {
        this.globalData.fontManager = new FontManager, this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.frameId = 0, this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = {
            w: t.w,
            h: t.h
        }
    }, extendPrototype([BaseRenderer], SVGRenderer), SVGRenderer.prototype.createNull = function(t) {
        return new NullElement(t, this.globalData, this)
    }, SVGRenderer.prototype.createShape = function(t) {
        return new SVGShapeElement(t, this.globalData, this)
    }, SVGRenderer.prototype.createText = function(t) {
        return new SVGTextElement(t, this.globalData, this)
    }, SVGRenderer.prototype.createImage = function(t) {
        return new IImageElement(t, this.globalData, this)
    }, SVGRenderer.prototype.createComp = function(t) {
        return new SVGCompElement(t, this.globalData, this)
    }, SVGRenderer.prototype.createSolid = function(t) {
        return new ISolidElement(t, this.globalData, this)
    }, SVGRenderer.prototype.configAnimation = function(t) {
        this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)"), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), void 0 !== this.renderConfig.focusable && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
        var e = this.globalData.defs;
        this.setupGlobalData(t, e), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = t;
        var r = createNS("clipPath"),
            i = createNS("rect");
        i.setAttribute("width", t.w), i.setAttribute("height", t.h), i.setAttribute("x", 0), i.setAttribute("y", 0);
        var s = createElementID();
        r.setAttribute("id", s), r.appendChild(i), this.layerElement.setAttribute("clip-path", "url(" + locationHref + "#" + s + ")"), e.appendChild(r), this.layers = t.layers, this.elements = createSizedArray(t.layers.length)
    }, SVGRenderer.prototype.destroy = function() {
        this.animationItem.wrapper.innerHTML = "", this.layerElement = null, this.globalData.defs = null;
        var t, e = this.layers ? this.layers.length : 0;
        for (t = 0; t < e; t++) this.elements[t] && this.elements[t].destroy();
        this.elements.length = 0, this.destroyed = !0, this.animationItem = null
    }, SVGRenderer.prototype.updateContainerSize = function() {}, SVGRenderer.prototype.buildItem = function(t) {
        var e = this.elements;
        if (!e[t] && 99 != this.layers[t].ty) {
            e[t] = !0;
            var r = this.createItem(this.layers[t]);
            e[t] = r, expressionsPlugin && (0 === this.layers[t].ty && this.globalData.projectInterface.registerComposition(r), r.initExpressions()), this.appendElementInPos(r, t), this.layers[t].tt && (this.elements[t - 1] && !0 !== this.elements[t - 1] ? r.setMatte(e[t - 1].layerId) : (this.buildItem(t - 1), this.addPendingElement(r)))
        }
    }, SVGRenderer.prototype.checkPendingElements = function() {
        for (; this.pendingElements.length;) {
            var t = this.pendingElements.pop();
            if (t.checkParenting(), t.data.tt)
                for (var e = 0, r = this.elements.length; e < r;) {
                    if (this.elements[e] === t) {
                        t.setMatte(this.elements[e - 1].layerId);
                        break
                    }
                    e += 1
                }
        }
    }, SVGRenderer.prototype.renderFrame = function(t) {
        if (this.renderedFrame !== t && !this.destroyed) {
            null === t ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.globalData._mdf = !1;
            var e, r = this.layers.length;
            for (this.completeLayers || this.checkLayers(t), e = r - 1; 0 <= e; e--)(this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
            if (this.globalData._mdf)
                for (e = 0; e < r; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
        }
    }, SVGRenderer.prototype.appendElementInPos = function(t, e) {
        var r = t.getBaseElement();
        if (r) {
            for (var i, s = 0; s < e;) this.elements[s] && !0 !== this.elements[s] && this.elements[s].getBaseElement() && (i = this.elements[s].getBaseElement()), s += 1;
            i ? this.layerElement.insertBefore(r, i) : this.layerElement.appendChild(r)
        }
    }, SVGRenderer.prototype.hide = function() {
        this.layerElement.style.display = "none"
    }, SVGRenderer.prototype.show = function() {
        this.layerElement.style.display = "block"
    }, extendPrototype([BaseRenderer], CanvasRenderer), CanvasRenderer.prototype.createShape = function(t) {
        return new CVShapeElement(t, this.globalData, this)
    }, CanvasRenderer.prototype.createText = function(t) {
        return new CVTextElement(t, this.globalData, this)
    }, CanvasRenderer.prototype.createImage = function(t) {
        return new CVImageElement(t, this.globalData, this)
    }, CanvasRenderer.prototype.createComp = function(t) {
        return new CVCompElement(t, this.globalData, this)
    }, CanvasRenderer.prototype.createSolid = function(t) {
        return new CVSolidElement(t, this.globalData, this)
    }, CanvasRenderer.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRenderer.prototype.ctxTransform = function(t) {
        if (1 !== t[0] || 0 !== t[1] || 0 !== t[4] || 1 !== t[5] || 0 !== t[12] || 0 !== t[13])
            if (this.renderConfig.clearCanvas) {
                this.transformMat.cloneFromProps(t);
                var e = this.contextData.cTr.props;
                this.transformMat.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]), this.contextData.cTr.cloneFromProps(this.transformMat.props);
                var r = this.contextData.cTr.props;
                this.canvasContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13])
            } else this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13])
    }, CanvasRenderer.prototype.ctxOpacity = function(t) {
        if (!this.renderConfig.clearCanvas) return this.canvasContext.globalAlpha *= t < 0 ? 0 : t, void(this.globalData.currentGlobalAlpha = this.contextData.cO);
        this.contextData.cO *= t < 0 ? 0 : t, this.globalData.currentGlobalAlpha !== this.contextData.cO && (this.canvasContext.globalAlpha = this.contextData.cO, this.globalData.currentGlobalAlpha = this.contextData.cO)
    }, CanvasRenderer.prototype.reset = function() {
        this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore()
    }, CanvasRenderer.prototype.save = function(t) {
        if (this.renderConfig.clearCanvas) {
            t && this.canvasContext.save();
            var e = this.contextData.cTr.props;
            this.contextData._length <= this.contextData.cArrPos && this.contextData.duplicate();
            var r, i = this.contextData.saved[this.contextData.cArrPos];
            for (r = 0; r < 16; r += 1) i[r] = e[r];
            this.contextData.savedOp[this.contextData.cArrPos] = this.contextData.cO, this.contextData.cArrPos += 1
        } else this.canvasContext.save()
    }, CanvasRenderer.prototype.restore = function(t) {
        if (this.renderConfig.clearCanvas) {
            t && (this.canvasContext.restore(), this.globalData.blendMode = "source-over"), this.contextData.cArrPos -= 1;
            var e, r = this.contextData.saved[this.contextData.cArrPos],
                i = this.contextData.cTr.props;
            for (e = 0; e < 16; e += 1) i[e] = r[e];
            this.canvasContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13]), r = this.contextData.savedOp[this.contextData.cArrPos], this.contextData.cO = r, this.globalData.currentGlobalAlpha !== r && (this.canvasContext.globalAlpha = r, this.globalData.currentGlobalAlpha = r)
        } else this.canvasContext.restore()
    }, CanvasRenderer.prototype.configAnimation = function(t) {
        this.animationItem.wrapper ? (this.animationItem.container = createTag("canvas"), this.animationItem.container.style.width = "100%", this.animationItem.container.style.height = "100%", this.animationItem.container.style.transformOrigin = this.animationItem.container.style.mozTransformOrigin = this.animationItem.container.style.webkitTransformOrigin = this.animationItem.container.style["-webkit-transform"] = "0px 0px 0px", this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className)) : this.canvasContext = this.renderConfig.context, this.data = t, this.layers = t.layers, this.transformCanvas = {
            w: t.w,
            h: t.h,
            sx: 0,
            sy: 0,
            tx: 0,
            ty: 0
        }, this.setupGlobalData(t, document.body), this.globalData.canvasContext = this.canvasContext, (this.globalData.renderer = this).globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(t.layers.length), this.updateContainerSize()
    }, CanvasRenderer.prototype.updateContainerSize = function() {
        var t, e, r, i;
        if (this.reset(), this.animationItem.wrapper && this.animationItem.container ? (t = this.animationItem.wrapper.offsetWidth, e = this.animationItem.wrapper.offsetHeight, this.animationItem.container.setAttribute("width", t * this.renderConfig.dpr), this.animationItem.container.setAttribute("height", e * this.renderConfig.dpr)) : (t = this.canvasContext.canvas.width * this.renderConfig.dpr, e = this.canvasContext.canvas.height * this.renderConfig.dpr), -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") || -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice")) {
            var s = this.renderConfig.preserveAspectRatio.split(" "),
                a = s[1] || "meet",
                n = s[0] || "xMidYMid",
                o = n.substr(0, 4),
                h = n.substr(4);
            r = t / e, i = this.transformCanvas.w / this.transformCanvas.h, this.transformCanvas.sy = r < i && "meet" === a || i < r && "slice" === a ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr), t / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = e / (this.transformCanvas.h / this.renderConfig.dpr), e / (this.transformCanvas.h / this.renderConfig.dpr)), this.transformCanvas.tx = "xMid" === o && (i < r && "meet" === a || r < i && "slice" === a) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : "xMax" === o && (i < r && "meet" === a || r < i && "slice" === a) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) * this.renderConfig.dpr : 0, this.transformCanvas.ty = "YMid" === h && (r < i && "meet" === a || i < r && "slice" === a) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : "YMax" === h && (r < i && "meet" === a || i < r && "slice" === a) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) * this.renderConfig.dpr : 0
        } else "none" == this.renderConfig.preserveAspectRatio ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr)) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0;
        this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0)
    }, CanvasRenderer.prototype.destroy = function() {
        var t;
        for (this.renderConfig.clearCanvas && (this.animationItem.wrapper.innerHTML = ""), t = (this.layers ? this.layers.length : 0) - 1; 0 <= t; t -= 1) this.elements[t] && this.elements[t].destroy();
        this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0
    }, CanvasRenderer.prototype.renderFrame = function(t, e) {
        if ((this.renderedFrame !== t || !0 !== this.renderConfig.clearCanvas || e) && !this.destroyed && -1 !== t) {
            this.renderedFrame = t, this.globalData.frameNum = t - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || e, this.globalData.projectInterface.currentFrame = t;
            var r, i = this.layers.length;
            for (this.completeLayers || this.checkLayers(t), r = 0; r < i; r++)(this.completeLayers || this.elements[r]) && this.elements[r].prepareFrame(t - this.layers[r].st);
            if (this.globalData._mdf) {
                for (!0 === this.renderConfig.clearCanvas ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), r = i - 1; 0 <= r; r -= 1)(this.completeLayers || this.elements[r]) && this.elements[r].renderFrame();
                !0 !== this.renderConfig.clearCanvas && this.restore()
            }
        }
    }, CanvasRenderer.prototype.buildItem = function(t) {
        var e = this.elements;
        if (!e[t] && 99 != this.layers[t].ty) {
            var r = this.createItem(this.layers[t], this, this.globalData);
            (e[t] = r).initExpressions()
        }
    }, CanvasRenderer.prototype.checkPendingElements = function() {
        for (; this.pendingElements.length;) {
            this.pendingElements.pop().checkParenting()
        }
    }, CanvasRenderer.prototype.hide = function() {
        this.animationItem.container.style.display = "none"
    }, CanvasRenderer.prototype.show = function() {
        this.animationItem.container.style.display = "block"
    }, extendPrototype([BaseRenderer], HybridRenderer), HybridRenderer.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRenderer.prototype.checkPendingElements = function() {
        for (; this.pendingElements.length;) {
            this.pendingElements.pop().checkParenting()
        }
    }, HybridRenderer.prototype.appendElementInPos = function(t, e) {
        var r = t.getBaseElement();
        if (r) {
            var i = this.layers[e];
            if (i.ddd && this.supports3d) this.addTo3dContainer(r, e);
            else if (this.threeDElements) this.addTo3dContainer(r, e);
            else {
                for (var s, a, n = 0; n < e;) this.elements[n] && !0 !== this.elements[n] && this.elements[n].getBaseElement && (a = this.elements[n], s = (this.layers[n].ddd ? this.getThreeDContainerByPos(n) : a.getBaseElement()) || s), n += 1;
                s ? i.ddd && this.supports3d || this.layerElement.insertBefore(r, s) : i.ddd && this.supports3d || this.layerElement.appendChild(r)
            }
        }
    }, HybridRenderer.prototype.createShape = function(t) {
        return this.supports3d ? new HShapeElement(t, this.globalData, this) : new SVGShapeElement(t, this.globalData, this)
    }, HybridRenderer.prototype.createText = function(t) {
        return this.supports3d ? new HTextElement(t, this.globalData, this) : new SVGTextElement(t, this.globalData, this)
    }, HybridRenderer.prototype.createCamera = function(t) {
        return this.camera = new HCameraElement(t, this.globalData, this), this.camera
    }, HybridRenderer.prototype.createImage = function(t) {
        return this.supports3d ? new HImageElement(t, this.globalData, this) : new IImageElement(t, this.globalData, this)
    }, HybridRenderer.prototype.createComp = function(t) {
        return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this)
    }, HybridRenderer.prototype.createSolid = function(t) {
        return this.supports3d ? new HSolidElement(t, this.globalData, this) : new ISolidElement(t, this.globalData, this)
    }, HybridRenderer.prototype.createNull = SVGRenderer.prototype.createNull, HybridRenderer.prototype.getThreeDContainerByPos = function(t) {
        for (var e = 0, r = this.threeDElements.length; e < r;) {
            if (this.threeDElements[e].startPos <= t && this.threeDElements[e].endPos >= t) return this.threeDElements[e].perspectiveElem;
            e += 1
        }
    }, HybridRenderer.prototype.createThreeDContainer = function(t, e) {
        var r = createTag("div");
        styleDiv(r);
        var i = createTag("div");
        styleDiv(i), "3d" === e && (r.style.width = this.globalData.compSize.w + "px", r.style.height = this.globalData.compSize.h + "px", r.style.transformOrigin = r.style.mozTransformOrigin = r.style.webkitTransformOrigin = "50% 50%", i.style.transform = i.style.webkitTransform = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)"), r.appendChild(i);
        var s = {
            container: i,
            perspectiveElem: r,
            startPos: t,
            endPos: t,
            type: e
        };
        return this.threeDElements.push(s), s
    }, HybridRenderer.prototype.build3dContainers = function() {
        var t, e, r = this.layers.length,
            i = "";
        for (t = 0; t < r; t += 1) this.layers[t].ddd && 3 !== this.layers[t].ty ? "3d" !== i && (i = "3d", e = this.createThreeDContainer(t, "3d")) : "2d" !== i && (i = "2d", e = this.createThreeDContainer(t, "2d")), e.endPos = Math.max(e.endPos, t);
        for (t = (r = this.threeDElements.length) - 1; 0 <= t; t--) this.resizerElem.appendChild(this.threeDElements[t].perspectiveElem)
    }, HybridRenderer.prototype.addTo3dContainer = function(t, e) {
        for (var r = 0, i = this.threeDElements.length; r < i;) {
            if (e <= this.threeDElements[r].endPos) {
                for (var s, a = this.threeDElements[r].startPos; a < e;) this.elements[a] && this.elements[a].getBaseElement && (s = this.elements[a].getBaseElement()), a += 1;
                s ? this.threeDElements[r].container.insertBefore(t, s) : this.threeDElements[r].container.appendChild(t);
                break
            }
            r += 1
        }
    }, HybridRenderer.prototype.configAnimation = function(t) {
        var e = createTag("div"),
            r = this.animationItem.wrapper;
        e.style.width = t.w + "px", e.style.height = t.h + "px", styleDiv(this.resizerElem = e), e.style.transformStyle = e.style.webkitTransformStyle = e.style.mozTransformStyle = "flat", this.renderConfig.className && e.setAttribute("class", this.renderConfig.className), r.appendChild(e), e.style.overflow = "hidden";
        var i = createNS("svg");
        i.setAttribute("width", "1"), i.setAttribute("height", "1"), styleDiv(i), this.resizerElem.appendChild(i);
        var s = createNS("defs");
        i.appendChild(s), this.data = t, this.setupGlobalData(t, i), this.globalData.defs = s, this.layers = t.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize()
    }, HybridRenderer.prototype.destroy = function() {
        this.animationItem.wrapper.innerHTML = "", this.animationItem.container = null, this.globalData.defs = null;
        var t, e = this.layers ? this.layers.length : 0;
        for (t = 0; t < e; t++) this.elements[t].destroy();
        this.elements.length = 0, this.destroyed = !0, this.animationItem = null
    }, HybridRenderer.prototype.updateContainerSize = function() {
        var t, e, r, i, s = this.animationItem.wrapper.offsetWidth,
            a = this.animationItem.wrapper.offsetHeight;
        i = s / a < this.globalData.compSize.w / this.globalData.compSize.h ? (t = s / this.globalData.compSize.w, e = s / this.globalData.compSize.w, r = 0, (a - this.globalData.compSize.h * (s / this.globalData.compSize.w)) / 2) : (t = a / this.globalData.compSize.h, e = a / this.globalData.compSize.h, r = (s - this.globalData.compSize.w * (a / this.globalData.compSize.h)) / 2, 0), this.resizerElem.style.transform = this.resizerElem.style.webkitTransform = "matrix3d(" + t + ",0,0,0,0," + e + ",0,0,0,0,1,0," + r + "," + i + ",0,1)"
    }, HybridRenderer.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRenderer.prototype.hide = function() {
        this.resizerElem.style.display = "none"
    }, HybridRenderer.prototype.show = function() {
        this.resizerElem.style.display = "block"
    }, HybridRenderer.prototype.initItems = function() {
        if (this.buildAllItems(), this.camera) this.camera.setup();
        else {
            var t, e = this.globalData.compSize.w,
                r = this.globalData.compSize.h,
                i = this.threeDElements.length;
            for (t = 0; t < i; t += 1) this.threeDElements[t].perspectiveElem.style.perspective = this.threeDElements[t].perspectiveElem.style.webkitPerspective = Math.sqrt(Math.pow(e, 2) + Math.pow(r, 2)) + "px"
        }
    }, HybridRenderer.prototype.searchExtraCompositions = function(t) {
        var e, r = t.length,
            i = createTag("div");
        for (e = 0; e < r; e += 1)
            if (t[e].xt) {
                var s = this.createComp(t[e], i, this.globalData.comp, null);
                s.initExpressions(), this.globalData.projectInterface.registerComposition(s)
            }
    }, MaskElement.prototype.getMaskProperty = function(t) {
        return this.viewData[t].prop
    }, MaskElement.prototype.renderFrame = function(t) {
        var e, r = this.element.finalTransform.mat,
            i = this.masksProperties.length;
        for (e = 0; e < i; e++)
            if ((this.viewData[e].prop._mdf || t) && this.drawPath(this.masksProperties[e], this.viewData[e].prop.v, this.viewData[e]), (this.viewData[e].op._mdf || t) && this.viewData[e].elem.setAttribute("fill-opacity", this.viewData[e].op.v), "n" !== this.masksProperties[e].mode && (this.viewData[e].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[e].invRect.setAttribute("transform", r.getInverseMatrix().to2dCSS()), this.storedData[e].x && (this.storedData[e].x._mdf || t))) {
                var s = this.storedData[e].expan;
                this.storedData[e].x.v < 0 ? ("erode" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "erode", this.storedData[e].elem.setAttribute("filter", "url(" + locationHref + "#" + this.storedData[e].filterId + ")")), s.setAttribute("radius", -this.storedData[e].x.v)) : ("dilate" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "dilate", this.storedData[e].elem.setAttribute("filter", null)), this.storedData[e].elem.setAttribute("stroke-width", 2 * this.storedData[e].x.v))
            }
    }, MaskElement.prototype.getMaskelement = function() {
        return this.maskElement
    }, MaskElement.prototype.createLayerSolidPath = function() {
        var t = "M0,0 ";
        return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, t += " h-" + this.globalData.compSize.w, t += " v-" + this.globalData.compSize.h + " "
    }, MaskElement.prototype.drawPath = function(t, e, r) {
        var i, s, a = " M" + e.v[0][0] + "," + e.v[0][1];
        for (s = e._length, i = 1; i < s; i += 1) a += " C" + e.o[i - 1][0] + "," + e.o[i - 1][1] + " " + e.i[i][0] + "," + e.i[i][1] + " " + e.v[i][0] + "," + e.v[i][1];
        if (e.c && 1 < s && (a += " C" + e.o[i - 1][0] + "," + e.o[i - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), r.lastPath !== a) {
            var n = "";
            r.elem && (e.c && (n = t.inv ? this.solidPath + a : a), r.elem.setAttribute("d", n)), r.lastPath = a
        }
    }, MaskElement.prototype.destroy = function() {
        this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null
    }, HierarchyElement.prototype = {
        initHierarchy: function() {
            this.hierarchy = [], this._isParent = !1, this.checkParenting()
        },
        setHierarchy: function(t) {
            this.hierarchy = t
        },
        setAsParent: function() {
            this._isParent = !0
        },
        checkParenting: function() {
            void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, [])
        }
    }, FrameElement.prototype = {
        initFrame: function() {
            this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1
        },
        prepareProperties: function(t, e) {
            var r, i = this.dynamicProperties.length;
            for (r = 0; r < i; r += 1)(e || this._isParent && "transform" === this.dynamicProperties[r].propType) && (this.dynamicProperties[r].getValue(), this.dynamicProperties[r]._mdf && (this.globalData._mdf = !0, this._mdf = !0))
        },
        addDynamicProperty: function(t) {
            -1 === this.dynamicProperties.indexOf(t) && this.dynamicProperties.push(t)
        }
    }, TransformElement.prototype = {
        initTransform: function() {
            this.finalTransform = {
                mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
                    o: 0
                },
                _matMdf: !1,
                _opMdf: !1,
                mat: new Matrix
            }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty
        },
        renderTransform: function() {
            if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
                var t, e = this.finalTransform.mat,
                    r = 0,
                    i = this.hierarchy.length;
                if (!this.finalTransform._matMdf)
                    for (; r < i;) {
                        if (this.hierarchy[r].finalTransform.mProp._mdf) {
                            this.finalTransform._matMdf = !0;
                            break
                        }
                        r += 1
                    }
                if (this.finalTransform._matMdf)
                    for (t = this.finalTransform.mProp.v.props, e.cloneFromProps(t), r = 0; r < i; r += 1) t = this.hierarchy[r].finalTransform.mProp.v.props, e.transform(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15])
            }
        },
        globalToLocal: function(t) {
            var e = [];
            e.push(this.finalTransform);
            for (var r = !0, i = this.comp; r;) i.finalTransform ? (i.data.hasMask && e.splice(0, 0, i.finalTransform), i = i.comp) : r = !1;
            var s, a, n = e.length;
            for (s = 0; s < n; s += 1) a = e[s].mat.applyToPointArray(0, 0, 0), t = [t[0] - a[0], t[1] - a[1], 0];
            return t
        },
        mHelper: new Matrix
    }, RenderableElement.prototype = {
        initRenderable: function() {
            this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = []
        },
        addRenderableComponent: function(t) {
            -1 === this.renderableComponents.indexOf(t) && this.renderableComponents.push(t)
        },
        removeRenderableComponent: function(t) {
            -1 !== this.renderableComponents.indexOf(t) && this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1)
        },
        prepareRenderableFrame: function(t) {
            this.checkLayerLimits(t)
        },
        checkTransparency: function() {
            this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show())
        },
        checkLayerLimits: function(t) {
            this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? !0 !== this.isInRange && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : !1 !== this.isInRange && (this.globalData._mdf = !0, this.isInRange = !1, this.hide())
        },
        renderRenderable: function() {
            var t, e = this.renderableComponents.length;
            for (t = 0; t < e; t += 1) this.renderableComponents[t].renderFrame(this._isFirstFrame)
        },
        sourceRectAtTime: function() {
            return {
                top: 0,
                left: 0,
                width: 100,
                height: 100
            }
        },
        getLayerSize: function() {
            return 5 === this.data.ty ? {
                w: this.data.textData.width,
                h: this.data.textData.height
            } : {
                w: this.data.width,
                h: this.data.height
            }
        }
    }, extendPrototype([RenderableElement, createProxyFunction({
        initElement: function(t, e, r) {
            this.initFrame(), this.initBaseData(t, e, r), this.initTransform(t, e, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide()
        },
        hide: function() {
            this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", this.hidden = !0)
        },
        show: function() {
            this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), this.hidden = !1, this._isFirstFrame = !0)
        },
        renderFrame: function() {
            this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
        },
        renderInnerContent: function() {},
        prepareFrame: function(t) {
            this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.checkTransparency()
        },
        destroy: function() {
            this.innerElem = null, this.destroyBaseElement()
        }
    })], RenderableDOMElement), SVGStyleData.prototype.reset = function() {
        this.d = "", this._mdf = !1
    }, SVGShapeData.prototype.setAsAnimated = function() {
        this._isAnimated = !0
    }, extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData), extendPrototype([DynamicPropertyContainer], SVGFillStyleData), SVGGradientFillStyleData.prototype.initGradientData = function(t, e, r) {
        this.o = PropertyFactory.getProp(t, e.o, 0, .01, this), this.s = PropertyFactory.getProp(t, e.s, 1, null, this), this.e = PropertyFactory.getProp(t, e.e, 1, null, this), this.h = PropertyFactory.getProp(t, e.h || {
            k: 0
        }, 0, .01, this), this.a = PropertyFactory.getProp(t, e.a || {
            k: 0
        }, 0, degToRads, this), this.g = new GradientProperty(t, e.g, this), this.style = r, this.stops = [], this.setGradientData(r.pElem, e), this.setGradientOpacity(e, r), this._isAnimated = !!this._isAnimated
    }, SVGGradientFillStyleData.prototype.setGradientData = function(t, e) {
        var r = createElementID(),
            i = createNS(1 === e.t ? "linearGradient" : "radialGradient");
        i.setAttribute("id", r), i.setAttribute("spreadMethod", "pad"), i.setAttribute("gradientUnits", "userSpaceOnUse");
        var s, a, n, o = [];
        for (n = 4 * e.g.p, a = 0; a < n; a += 4) s = createNS("stop"), i.appendChild(s), o.push(s);
        t.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(" + locationHref + "#" + r + ")"), this.gf = i, this.cst = o
    }, SVGGradientFillStyleData.prototype.setGradientOpacity = function(t, e) {
        if (this.g._hasOpacity && !this.g._collapsable) {
            var r, i, s, a = createNS("mask"),
                n = createNS("path");
            a.appendChild(n);
            var o = createElementID(),
                h = createElementID();
            a.setAttribute("id", h);
            var l = createNS(1 === t.t ? "linearGradient" : "radialGradient");
            l.setAttribute("id", o), l.setAttribute("spreadMethod", "pad"), l.setAttribute("gradientUnits", "userSpaceOnUse"), s = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
            var p = this.stops;
            for (i = 4 * t.g.p; i < s; i += 2)(r = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"), l.appendChild(r), p.push(r);
            n.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(" + locationHref + "#" + o + ")"), this.of = l, this.ms = a, this.ost = p, this.maskId = h, e.msElem = n
        }
    }, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData), extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
    var SVGElementsRenderer = function() {
        var y = new Matrix,
            g = new Matrix;

        function e(t, e, r) {
            (r || e.transform.op._mdf) && e.transform.container.setAttribute("opacity", e.transform.op.v), (r || e.transform.mProps._mdf) && e.transform.container.setAttribute("transform", e.transform.mProps.v.to2dCSS())
        }

        function r(t, e, r) {
            var i, s, a, n, o, h, l, p, m, f, c, d = e.styles.length,
                u = e.lvl;
            for (h = 0; h < d; h += 1) {
                if (n = e.sh._mdf || r, e.styles[h].lvl < u) {
                    for (p = g.reset(), f = u - e.styles[h].lvl, c = e.transformers.length - 1; !n && 0 < f;) n = e.transformers[c].mProps._mdf || n, f--, c--;
                    if (n)
                        for (f = u - e.styles[h].lvl, c = e.transformers.length - 1; 0 < f;) m = e.transformers[c].mProps.v.props, p.transform(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], m[12], m[13], m[14], m[15]), f--, c--
                } else p = y;
                if (s = (l = e.sh.paths)._length, n) {
                    for (a = "", i = 0; i < s; i += 1)(o = l.shapes[i]) && o._length && (a += buildShapeString(o, o._length, o.c, p));
                    e.caches[h] = a
                } else a = e.caches[h];
                e.styles[h].d += !0 === t.hd ? "" : a, e.styles[h]._mdf = n || e.styles[h]._mdf
            }
        }

        function i(t, e, r) {
            var i = e.style;
            (e.c._mdf || r) && i.pElem.setAttribute("fill", "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"), (e.o._mdf || r) && i.pElem.setAttribute("fill-opacity", e.o.v)
        }

        function s(t, e, r) {
            a(t, e, r), n(t, e, r)
        }

        function a(t, e, r) {
            var i, s, a, n, o, h = e.gf,
                l = e.g._hasOpacity,
                p = e.s.v,
                m = e.e.v;
            if (e.o._mdf || r) {
                var f = "gf" === t.ty ? "fill-opacity" : "stroke-opacity";
                e.style.pElem.setAttribute(f, e.o.v)
            }
            if (e.s._mdf || r) {
                var c = 1 === t.t ? "x1" : "cx",
                    d = "x1" === c ? "y1" : "cy";
                h.setAttribute(c, p[0]), h.setAttribute(d, p[1]), l && !e.g._collapsable && (e.of.setAttribute(c, p[0]), e.of.setAttribute(d, p[1]))
            }
            if (e.g._cmdf || r) {
                i = e.cst;
                var u = e.g.c;
                for (a = i.length, s = 0; s < a; s += 1)(n = i[s]).setAttribute("offset", u[4 * s] + "%"), n.setAttribute("stop-color", "rgb(" + u[4 * s + 1] + "," + u[4 * s + 2] + "," + u[4 * s + 3] + ")")
            }
            if (l && (e.g._omdf || r)) {
                var y = e.g.o;
                for (a = (i = e.g._collapsable ? e.cst : e.ost).length, s = 0; s < a; s += 1) n = i[s], e.g._collapsable || n.setAttribute("offset", y[2 * s] + "%"), n.setAttribute("stop-opacity", y[2 * s + 1])
            }
            if (1 === t.t)(e.e._mdf || r) && (h.setAttribute("x2", m[0]), h.setAttribute("y2", m[1]), l && !e.g._collapsable && (e.of.setAttribute("x2", m[0]), e.of.setAttribute("y2", m[1])));
            else if ((e.s._mdf || e.e._mdf || r) && (o = Math.sqrt(Math.pow(p[0] - m[0], 2) + Math.pow(p[1] - m[1], 2)), h.setAttribute("r", o), l && !e.g._collapsable && e.of.setAttribute("r", o)), e.e._mdf || e.h._mdf || e.a._mdf || r) {
                o || (o = Math.sqrt(Math.pow(p[0] - m[0], 2) + Math.pow(p[1] - m[1], 2)));
                var g = Math.atan2(m[1] - p[1], m[0] - p[0]),
                    v = o * (1 <= e.h.v ? .99 : e.h.v <= -1 ? -.99 : e.h.v),
                    b = Math.cos(g + e.a.v) * v + p[0],
                    E = Math.sin(g + e.a.v) * v + p[1];
                h.setAttribute("fx", b), h.setAttribute("fy", E), l && !e.g._collapsable && (e.of.setAttribute("fx", b), e.of.setAttribute("fy", E))
            }
        }

        function n(t, e, r) {
            var i = e.style,
                s = e.d;
            s && (s._mdf || r) && s.dashStr && (i.pElem.setAttribute("stroke-dasharray", s.dashStr), i.pElem.setAttribute("stroke-dashoffset", s.dashoffset[0])), e.c && (e.c._mdf || r) && i.pElem.setAttribute("stroke", "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"), (e.o._mdf || r) && i.pElem.setAttribute("stroke-opacity", e.o.v), (e.w._mdf || r) && (i.pElem.setAttribute("stroke-width", e.w.v), i.msElem && i.msElem.setAttribute("stroke-width", e.w.v))
        }
        return {
            createRenderFunction: function(t) {
                t.ty;
                switch (t.ty) {
                    case "fl":
                        return i;
                    case "gf":
                        return a;
                    case "gs":
                        return s;
                    case "st":
                        return n;
                    case "sh":
                    case "el":
                    case "rc":
                    case "sr":
                        return r;
                    case "tr":
                        return e
                }
            }
        }
    }();

    function ShapeTransformManager() {
        this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0
    }

    function CVShapeData(t, e, r, i) {
        this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0];
        var s = 4;
        "rc" == e.ty ? s = 5 : "el" == e.ty ? s = 6 : "sr" == e.ty && (s = 7), this.sh = ShapePropertyFactory.getShapeProp(t, e, s, t);
        var a, n, o = r.length;
        for (a = 0; a < o; a += 1) r[a].closed || (n = {
            transforms: i.addTransformSequence(r[a].transforms),
            trNodes: []
        }, this.styledShapes.push(n), r[a].elements.push(n))
    }

    function BaseElement() {}

    function NullElement(t, e, r) {
        this.initFrame(), this.initBaseData(t, e, r), this.initFrame(), this.initTransform(t, e, r), this.initHierarchy()
    }

    function SVGBaseElement() {}

    function IShapeElement() {}

    function ITextElement() {}

    function ICompElement() {}

    function IImageElement(t, e, r) {
        this.assetData = e.getAssetData(t.refId), this.initElement(t, e, r), this.sourceRect = {
            top: 0,
            left: 0,
            width: this.assetData.w,
            height: this.assetData.h
        }
    }

    function ISolidElement(t, e, r) {
        this.initElement(t, e, r)
    }

    function SVGCompElement(t, e, r) {
        this.layers = t.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
            _placeholder: !0
        }
    }

    function SVGTextElement(t, e, r) {
        this.textSpans = [], this.renderType = "svg", this.initElement(t, e, r)
    }

    function SVGShapeElement(t, e, r) {
        this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t, e, r), this.prevViewData = []
    }

    function SVGTintFilter(t, e) {
        this.filterManager = e;
        var r = createNS("feColorMatrix");
        if (r.setAttribute("type", "matrix"), r.setAttribute("color-interpolation-filters", "linearRGB"), r.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), r.setAttribute("result", "f1"), t.appendChild(r), (r = createNS("feColorMatrix")).setAttribute("type", "matrix"), r.setAttribute("color-interpolation-filters", "sRGB"), r.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), r.setAttribute("result", "f2"), t.appendChild(r), this.matrixFilter = r, 100 !== e.effectElements[2].p.v || e.effectElements[2].p.k) {
            var i, s = createNS("feMerge");
            t.appendChild(s), (i = createNS("feMergeNode")).setAttribute("in", "SourceGraphic"), s.appendChild(i), (i = createNS("feMergeNode")).setAttribute("in", "f2"), s.appendChild(i)
        }
    }

    function SVGFillFilter(t, e) {
        this.filterManager = e;
        var r = createNS("feColorMatrix");
        r.setAttribute("type", "matrix"), r.setAttribute("color-interpolation-filters", "sRGB"), r.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), t.appendChild(r), this.matrixFilter = r
    }

    function SVGGaussianBlurEffect(t, e) {
        t.setAttribute("x", "-100%"), t.setAttribute("y", "-100%"), t.setAttribute("width", "300%"), t.setAttribute("height", "300%"), this.filterManager = e;
        var r = createNS("feGaussianBlur");
        t.appendChild(r), this.feGaussianBlur = r
    }

    function SVGStrokeEffect(t, e) {
        this.initialized = !1, this.filterManager = e, this.elem = t, this.paths = []
    }

    function SVGTritoneFilter(t, e) {
        this.filterManager = e;
        var r = createNS("feColorMatrix");
        r.setAttribute("type", "matrix"), r.setAttribute("color-interpolation-filters", "linearRGB"), r.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), r.setAttribute("result", "f1"), t.appendChild(r);
        var i = createNS("feComponentTransfer");
        i.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(i), this.matrixFilter = i;
        var s = createNS("feFuncR");
        s.setAttribute("type", "table"), i.appendChild(s), this.feFuncR = s;
        var a = createNS("feFuncG");
        a.setAttribute("type", "table"), i.appendChild(a), this.feFuncG = a;
        var n = createNS("feFuncB");
        n.setAttribute("type", "table"), i.appendChild(n), this.feFuncB = n
    }

    function SVGProLevelsFilter(t, e) {
        this.filterManager = e;
        var r = this.filterManager.effectElements,
            i = createNS("feComponentTransfer");
        (r[10].p.k || 0 !== r[10].p.v || r[11].p.k || 1 !== r[11].p.v || r[12].p.k || 1 !== r[12].p.v || r[13].p.k || 0 !== r[13].p.v || r[14].p.k || 1 !== r[14].p.v) && (this.feFuncR = this.createFeFunc("feFuncR", i)), (r[17].p.k || 0 !== r[17].p.v || r[18].p.k || 1 !== r[18].p.v || r[19].p.k || 1 !== r[19].p.v || r[20].p.k || 0 !== r[20].p.v || r[21].p.k || 1 !== r[21].p.v) && (this.feFuncG = this.createFeFunc("feFuncG", i)), (r[24].p.k || 0 !== r[24].p.v || r[25].p.k || 1 !== r[25].p.v || r[26].p.k || 1 !== r[26].p.v || r[27].p.k || 0 !== r[27].p.v || r[28].p.k || 1 !== r[28].p.v) && (this.feFuncB = this.createFeFunc("feFuncB", i)), (r[31].p.k || 0 !== r[31].p.v || r[32].p.k || 1 !== r[32].p.v || r[33].p.k || 1 !== r[33].p.v || r[34].p.k || 0 !== r[34].p.v || r[35].p.k || 1 !== r[35].p.v) && (this.feFuncA = this.createFeFunc("feFuncA", i)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (i.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(i), i = createNS("feComponentTransfer")), (r[3].p.k || 0 !== r[3].p.v || r[4].p.k || 1 !== r[4].p.v || r[5].p.k || 1 !== r[5].p.v || r[6].p.k || 0 !== r[6].p.v || r[7].p.k || 1 !== r[7].p.v) && (i.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(i), this.feFuncRComposed = this.createFeFunc("feFuncR", i), this.feFuncGComposed = this.createFeFunc("feFuncG", i), this.feFuncBComposed = this.createFeFunc("feFuncB", i))
    }

    function SVGDropShadowEffect(t, e) {
        t.setAttribute("x", "-100%"), t.setAttribute("y", "-100%"), t.setAttribute("width", "400%"), t.setAttribute("height", "400%"), this.filterManager = e;
        var r = createNS("feGaussianBlur");
        r.setAttribute("in", "SourceAlpha"), r.setAttribute("result", "drop_shadow_1"), r.setAttribute("stdDeviation", "0"), this.feGaussianBlur = r, t.appendChild(r);
        var i = createNS("feOffset");
        i.setAttribute("dx", "25"), i.setAttribute("dy", "0"), i.setAttribute("in", "drop_shadow_1"), i.setAttribute("result", "drop_shadow_2"), this.feOffset = i, t.appendChild(i);
        var s = createNS("feFlood");
        s.setAttribute("flood-color", "#00ff00"), s.setAttribute("flood-opacity", "1"), s.setAttribute("result", "drop_shadow_3"), this.feFlood = s, t.appendChild(s);
        var a = createNS("feComposite");
        a.setAttribute("in", "drop_shadow_3"), a.setAttribute("in2", "drop_shadow_2"), a.setAttribute("operator", "in"), a.setAttribute("result", "drop_shadow_4"), t.appendChild(a);
        var n, o = createNS("feMerge");
        t.appendChild(o), n = createNS("feMergeNode"), o.appendChild(n), (n = createNS("feMergeNode")).setAttribute("in", "SourceGraphic"), this.feMergeNode = n, this.feMerge = o, this.originalNodeAdded = !1, o.appendChild(n)
    }
    ShapeTransformManager.prototype = {
        addTransformSequence: function(t) {
            var e, r = t.length,
                i = "_";
            for (e = 0; e < r; e += 1) i += t[e].transform.key + "_";
            var s = this.sequences[i];
            return s || (s = {
                transforms: [].concat(t),
                finalTransform: new Matrix,
                _mdf: !1
            }, this.sequences[i] = s, this.sequenceList.push(s)), s
        },
        processSequence: function(t, e) {
            for (var r, i = 0, s = t.transforms.length, a = e; i < s && !e;) {
                if (t.transforms[i].transform.mProps._mdf) {
                    a = !0;
                    break
                }
                i += 1
            }
            if (a)
                for (t.finalTransform.reset(), i = s - 1; 0 <= i; i -= 1) r = t.transforms[i].transform.mProps.v.props, t.finalTransform.transform(r[0], r[1], r[2], r[3], r[4], r[5], r[6], r[7], r[8], r[9], r[10], r[11], r[12], r[13], r[14], r[15]);
            t._mdf = a
        },
        processSequences: function(t) {
            var e, r = this.sequenceList.length;
            for (e = 0; e < r; e += 1) this.processSequence(this.sequenceList[e], t)
        },
        getNewKey: function() {
            return "_" + this.transform_key_count++
        }
    }, CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated, BaseElement.prototype = {
        checkMasks: function() {
            if (!this.data.hasMask) return !1;
            for (var t = 0, e = this.data.masksProperties.length; t < e;) {
                if ("n" !== this.data.masksProperties[t].mode && !1 !== this.data.masksProperties[t].cl) return !0;
                t += 1
            }
            return !1
        },
        initExpressions: function() {
            this.layerInterface = LayerExpressionInterface(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
            var t = EffectsExpressionInterface.createEffectsInterface(this, this.layerInterface);
            this.layerInterface.registerEffectsInterface(t), 0 === this.data.ty || this.data.xt ? this.compInterface = CompExpressionInterface(this) : 4 === this.data.ty ? (this.layerInterface.shapeInterface = ShapeExpressionInterface(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = TextExpressionInterface(this), this.layerInterface.text = this.layerInterface.textInterface)
        },
        setBlendMode: function() {
            var t = getBlendMode(this.data.bm);
            (this.baseElement || this.layerElement).style["mix-blend-mode"] = t
        },
        initBaseData: function(t, e, r) {
            this.globalData = e, this.comp = r, this.data = t, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties)
        },
        getType: function() {
            return this.type
        },
        sourceRectAtTime: function() {}
    }, NullElement.prototype.prepareFrame = function(t) {
        this.prepareProperties(t, !0)
    }, NullElement.prototype.renderFrame = function() {}, NullElement.prototype.getBaseElement = function() {
        return null
    }, NullElement.prototype.destroy = function() {}, NullElement.prototype.sourceRectAtTime = function() {}, NullElement.prototype.hide = function() {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement), SVGBaseElement.prototype = {
        initRendererElement: function() {
            this.layerElement = createNS("g")
        },
        createContainerElements: function() {
            this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
            var t, e, r, i = null;
            if (this.data.td) {
                if (3 == this.data.td || 1 == this.data.td) {
                    var s = createNS("mask");
                    s.setAttribute("id", this.layerId), s.setAttribute("mask-type", 3 == this.data.td ? "luminance" : "alpha"), s.appendChild(this.layerElement), i = s, this.globalData.defs.appendChild(s), featureSupport.maskType || 1 != this.data.td || (s.setAttribute("mask-type", "luminance"), t = createElementID(), e = filtersFactory.createFilter(t), this.globalData.defs.appendChild(e), e.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (r = createNS("g")).appendChild(this.layerElement), i = r, s.appendChild(r), r.setAttribute("filter", "url(" + locationHref + "#" + t + ")"))
                } else if (2 == this.data.td) {
                    var a = createNS("mask");
                    a.setAttribute("id", this.layerId), a.setAttribute("mask-type", "alpha");
                    var n = createNS("g");
                    a.appendChild(n), t = createElementID(), e = filtersFactory.createFilter(t);
                    var o = createNS("feComponentTransfer");
                    o.setAttribute("in", "SourceGraphic"), e.appendChild(o);
                    var h = createNS("feFuncA");
                    h.setAttribute("type", "table"), h.setAttribute("tableValues", "1.0 0.0"), o.appendChild(h), this.globalData.defs.appendChild(e);
                    var l = createNS("rect");
                    l.setAttribute("width", this.comp.data.w), l.setAttribute("height", this.comp.data.h), l.setAttribute("x", "0"), l.setAttribute("y", "0"), l.setAttribute("fill", "#ffffff"), l.setAttribute("opacity", "0"), n.setAttribute("filter", "url(" + locationHref + "#" + t + ")"), n.appendChild(l), n.appendChild(this.layerElement), i = n, featureSupport.maskType || (a.setAttribute("mask-type", "luminance"), e.appendChild(filtersFactory.createAlphaToLuminanceFilter()), r = createNS("g"), n.appendChild(l), r.appendChild(this.layerElement), i = r, n.appendChild(r)), this.globalData.defs.appendChild(a)
                }
            } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), i = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
            if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 === this.data.ty && !this.data.hd) {
                var p = createNS("clipPath"),
                    m = createNS("path");
                m.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
                var f = createElementID();
                if (p.setAttribute("id", f), p.appendChild(m), this.globalData.defs.appendChild(p), this.checkMasks()) {
                    var c = createNS("g");
                    c.setAttribute("clip-path", "url(" + locationHref + "#" + f + ")"), c.appendChild(this.layerElement), this.transformedElement = c, i ? i.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
                } else this.layerElement.setAttribute("clip-path", "url(" + locationHref + "#" + f + ")")
            }
            0 !== this.data.bm && this.setBlendMode()
        },
        renderElement: function() {
            this.finalTransform._matMdf && this.transformedElement.setAttribute("transform", this.finalTransform.mat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.mProp.o.v)
        },
        destroyBaseElement: function() {
            this.layerElement = null, this.matteElement = null, this.maskManager.destroy()
        },
        getBaseElement: function() {
            return this.data.hd ? null : this.baseElement
        },
        createRenderableComponents: function() {
            this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this)
        },
        setMatte: function(t) {
            this.matteElement && this.matteElement.setAttribute("mask", "url(" + locationHref + "#" + t + ")")
        }
    }, IShapeElement.prototype = {
        addShapeToModifiers: function(t) {
            var e, r = this.shapeModifiers.length;
            for (e = 0; e < r; e += 1) this.shapeModifiers[e].addShape(t)
        },
        isShapeInAnimatedModifiers: function(t) {
            for (var e = this.shapeModifiers.length; 0 < e;)
                if (this.shapeModifiers[0].isAnimatedWithShape(t)) return !0;
            return !1
        },
        renderModifiers: function() {
            if (this.shapeModifiers.length) {
                var t, e = this.shapes.length;
                for (t = 0; t < e; t += 1) this.shapes[t].sh.reset();
                for (t = (e = this.shapeModifiers.length) - 1; 0 <= t; t -= 1) this.shapeModifiers[t].processShapes(this._isFirstFrame)
            }
        },
        lcEnum: {
            1: "butt",
            2: "round",
            3: "square"
        },
        ljEnum: {
            1: "miter",
            2: "round",
            3: "bevel"
        },
        searchProcessedElement: function(t) {
            for (var e = this.processedElements, r = 0, i = e.length; r < i;) {
                if (e[r].elem === t) return e[r].pos;
                r += 1
            }
            return 0
        },
        addProcessedElement: function(t, e) {
            for (var r = this.processedElements, i = r.length; i;)
                if (r[i -= 1].elem === t) return void(r[i].pos = e);
            r.push(new ProcessedElement(t, e))
        },
        prepareFrame: function(t) {
            this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange)
        }
    }, ITextElement.prototype.initElement = function(t, e, r) {
        this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(t, e, r), this.textProperty = new TextProperty(this, t.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(t.t, this.renderType, this), this.initTransform(t, e, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties)
    }, ITextElement.prototype.prepareFrame = function(t) {
        this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1)
    }, ITextElement.prototype.createPathShape = function(t, e) {
        var r, i, s = e.length,
            a = "";
        for (r = 0; r < s; r += 1) i = e[r].ks.k, a += buildShapeString(i, i.i.length, !0, t);
        return a
    }, ITextElement.prototype.updateDocumentData = function(t, e) {
        this.textProperty.updateDocumentData(t, e)
    }, ITextElement.prototype.canResizeFont = function(t) {
        this.textProperty.canResizeFont(t)
    }, ITextElement.prototype.setMinimumFontSize = function(t) {
        this.textProperty.setMinimumFontSize(t)
    }, ITextElement.prototype.applyTextPropertiesToMatrix = function(t, e, r, i, s) {
        switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j) {
            case 1:
                e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]), 0, 0);
                break;
            case 2:
                e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[r]) / 2, 0, 0)
        }
        e.translate(i, s, 0)
    }, ITextElement.prototype.buildColor = function(t) {
        return "rgb(" + Math.round(255 * t[0]) + "," + Math.round(255 * t[1]) + "," + Math.round(255 * t[2]) + ")"
    }, ITextElement.prototype.emptyProp = new LetterProps, ITextElement.prototype.destroy = function() {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement), ICompElement.prototype.initElement = function(t, e, r) {
        this.initFrame(), this.initBaseData(t, e, r), this.initTransform(t, e, r), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), !this.data.xt && e.progressiveLoad || this.buildAllItems(), this.hide()
    }, ICompElement.prototype.prepareFrame = function(t) {
        if (this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.isInRange || this.data.xt) {
            if (this.tm._placeholder) this.renderedFrame = t / this.data.sr;
            else {
                var e = this.tm.v;
                e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e
            }
            var r, i = this.elements.length;
            for (this.completeLayers || this.checkLayers(this.renderedFrame), r = i - 1; 0 <= r; r -= 1)(this.completeLayers || this.elements[r]) && (this.elements[r].prepareFrame(this.renderedFrame - this.layers[r].st), this.elements[r]._mdf && (this._mdf = !0))
        }
    }, ICompElement.prototype.renderInnerContent = function() {
        var t, e = this.layers.length;
        for (t = 0; t < e; t += 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
    }, ICompElement.prototype.setElements = function(t) {
        this.elements = t
    }, ICompElement.prototype.getElements = function() {
        return this.elements
    }, ICompElement.prototype.destroyElements = function() {
        var t, e = this.layers.length;
        for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy()
    }, ICompElement.prototype.destroy = function() {
        this.destroyElements(), this.destroyBaseElement()
    }, extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement), IImageElement.prototype.createContent = function() {
        var t = this.globalData.getAssetsPath(this.assetData);
        this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.innerElem)
    }, IImageElement.prototype.sourceRectAtTime = function() {
        return this.sourceRect
    }, extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function() {
        var t = createNS("rect");
        t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t)
    }, extendPrototype([SVGRenderer, ICompElement, SVGBaseElement], SVGCompElement), extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextElement), SVGTextElement.prototype.createContent = function() {
        this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"))
    }, SVGTextElement.prototype.buildTextContents = function(t) {
        for (var e = 0, r = t.length, i = [], s = ""; e < r;) t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (i.push(s), s = "") : s += t[e], e += 1;
        return i.push(s), i
    }, SVGTextElement.prototype.buildNewText = function() {
        var t, e, r = this.textProperty.currentData;
        this.renderedLetters = createSizedArray(r ? r.l.length : 0), r.fc ? this.layerElement.setAttribute("fill", this.buildColor(r.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), r.sc && (this.layerElement.setAttribute("stroke", this.buildColor(r.sc)), this.layerElement.setAttribute("stroke-width", r.sw)), this.layerElement.setAttribute("font-size", r.finalSize);
        var i = this.globalData.fontManager.getFontByName(r.f);
        if (i.fClass) this.layerElement.setAttribute("class", i.fClass);
        else {
            this.layerElement.setAttribute("font-family", i.fFamily);
            var s = r.fWeight,
                a = r.fStyle;
            this.layerElement.setAttribute("font-style", a), this.layerElement.setAttribute("font-weight", s)
        }
        this.layerElement.setAttribute("aria-label", r.t);
        var n, o = r.l || [],
            h = !!this.globalData.fontManager.chars;
        e = o.length;
        var l, p = this.mHelper,
            m = "",
            f = this.data.singleShape,
            c = 0,
            d = 0,
            u = !0,
            y = r.tr / 1e3 * r.finalSize;
        if (!f || h || r.sz) {
            var g, v, b = this.textSpans.length;
            for (t = 0; t < e; t += 1) h && f && 0 !== t || (n = t < b ? this.textSpans[t] : createNS(h ? "path" : "text"), b <= t && (n.setAttribute("stroke-linecap", "butt"), n.setAttribute("stroke-linejoin", "round"), n.setAttribute("stroke-miterlimit", "4"), this.textSpans[t] = n, this.layerElement.appendChild(n)), n.style.display = "inherit"), p.reset(), p.scale(r.finalSize / 100, r.finalSize / 100), f && (o[t].n && (c = -y, d += r.yOffset, d += u ? 1 : 0, u = !1), this.applyTextPropertiesToMatrix(r, p, o[t].line, c, d), c += o[t].l || 0, c += y), h ? (l = (g = (v = this.globalData.fontManager.getCharData(r.finalText[t], i.fStyle, this.globalData.fontManager.getFontByName(r.f).fFamily)) && v.data || {}).shapes ? g.shapes[0].it : [], f ? m += this.createPathShape(p, l) : n.setAttribute("d", this.createPathShape(p, l))) : (f && n.setAttribute("transform", "translate(" + p.props[12] + "," + p.props[13] + ")"), n.textContent = o[t].val, n.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"));
            f && n && n.setAttribute("d", m)
        } else {
            var E = this.textContainer,
                x = "start";
            switch (r.j) {
                case 1:
                    x = "end";
                    break;
                case 2:
                    x = "middle"
            }
            E.setAttribute("text-anchor", x), E.setAttribute("letter-spacing", y);
            var P = this.buildTextContents(r.finalText);
            for (e = P.length, d = r.ps ? r.ps[1] + r.ascent : 0, t = 0; t < e; t += 1)(n = this.textSpans[t] || createNS("tspan")).textContent = P[t], n.setAttribute("x", 0), n.setAttribute("y", d), n.style.display = "inherit", E.appendChild(n), this.textSpans[t] = n, d += r.finalLineHeight;
            this.layerElement.appendChild(E)
        }
        for (; t < this.textSpans.length;) this.textSpans[t].style.display = "none", t += 1;
        this._sizeChanged = !0
    }, SVGTextElement.prototype.sourceRectAtTime = function(t) {
        if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
            this._sizeChanged = !1;
            var e = this.layerElement.getBBox();
            this.bbox = {
                top: e.y,
                left: e.x,
                width: e.width,
                height: e.height
            }
        }
        return this.bbox
    }, SVGTextElement.prototype.renderInnerContent = function() {
        if (!this.data.singleShape && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
            var t, e;
            this._sizeChanged = !0;
            var r, i, s = this.textAnimator.renderedLetters,
                a = this.textProperty.currentData.l;
            for (e = a.length, t = 0; t < e; t += 1) a[t].n || (r = s[t], i = this.textSpans[t], r._mdf.m && i.setAttribute("transform", r.m), r._mdf.o && i.setAttribute("opacity", r.o), r._mdf.sw && i.setAttribute("stroke-width", r.sw), r._mdf.sc && i.setAttribute("stroke", r.sc), r._mdf.fc && i.setAttribute("fill", r.fc))
        }
    }, extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function() {}, SVGShapeElement.prototype.identityMatrix = new Matrix, SVGShapeElement.prototype.buildExpressionInterface = function() {}, SVGShapeElement.prototype.createContent = function() {
        this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes()
    }, SVGShapeElement.prototype.filterUniqueShapes = function() {
        var t, e, r, i, s = this.shapes.length,
            a = this.stylesList.length,
            n = [],
            o = !1;
        for (r = 0; r < a; r += 1) {
            for (i = this.stylesList[r], o = !1, t = n.length = 0; t < s; t += 1) - 1 !== (e = this.shapes[t]).styles.indexOf(i) && (n.push(e), o = e._isAnimated || o);
            1 < n.length && o && this.setShapesAsAnimated(n)
        }
    }, SVGShapeElement.prototype.setShapesAsAnimated = function(t) {
        var e, r = t.length;
        for (e = 0; e < r; e += 1) t[e].setAsAnimated()
    }, SVGShapeElement.prototype.createStyleElement = function(t, e) {
        var r, i = new SVGStyleData(t, e),
            s = i.pElem;
        if ("st" === t.ty) r = new SVGStrokeStyleData(this, t, i);
        else if ("fl" === t.ty) r = new SVGFillStyleData(this, t, i);
        else if ("gf" === t.ty || "gs" === t.ty) {
            r = new("gf" === t.ty ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, t, i), this.globalData.defs.appendChild(r.gf), r.maskId && (this.globalData.defs.appendChild(r.ms), this.globalData.defs.appendChild(r.of), s.setAttribute("mask", "url(" + locationHref + "#" + r.maskId + ")"))
        }
        return "st" !== t.ty && "gs" !== t.ty || (s.setAttribute("stroke-linecap", this.lcEnum[t.lc] || "round"), s.setAttribute("stroke-linejoin", this.ljEnum[t.lj] || "round"), s.setAttribute("fill-opacity", "0"), 1 === t.lj && s.setAttribute("stroke-miterlimit", t.ml)), 2 === t.r && s.setAttribute("fill-rule", "evenodd"), t.ln && s.setAttribute("id", t.ln), t.cl && s.setAttribute("class", t.cl), t.bm && (s.style["mix-blend-mode"] = getBlendMode(t.bm)), this.stylesList.push(i), this.addToAnimatedContents(t, r), r
    }, SVGShapeElement.prototype.createGroupElement = function(t) {
        var e = new ShapeGroupData;
        return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)), e
    }, SVGShapeElement.prototype.createTransformElement = function(t, e) {
        var r = TransformPropertyFactory.getTransformProperty(this, t, this),
            i = new SVGTransformData(r, r.o, e);
        return this.addToAnimatedContents(t, i), i
    }, SVGShapeElement.prototype.createShapeElement = function(t, e, r) {
        var i = 4;
        "rc" === t.ty ? i = 5 : "el" === t.ty ? i = 6 : "sr" === t.ty && (i = 7);
        var s = new SVGShapeData(e, r, ShapePropertyFactory.getShapeProp(this, t, i, this));
        return this.shapes.push(s), this.addShapeToModifiers(s), this.addToAnimatedContents(t, s), s
    }, SVGShapeElement.prototype.addToAnimatedContents = function(t, e) {
        for (var r = 0, i = this.animatedContents.length; r < i;) {
            if (this.animatedContents[r].element === e) return;
            r += 1
        }
        this.animatedContents.push({
            fn: SVGElementsRenderer.createRenderFunction(t),
            element: e,
            data: t
        })
    }, SVGShapeElement.prototype.setElementStyles = function(t) {
        var e, r = t.styles,
            i = this.stylesList.length;
        for (e = 0; e < i; e += 1) this.stylesList[e].closed || r.push(this.stylesList[e])
    }, SVGShapeElement.prototype.reloadShapes = function() {
        this._isFirstFrame = !0;
        var t, e = this.itemsData.length;
        for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
        for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
        this.renderModifiers()
    }, SVGShapeElement.prototype.searchShapes = function(t, e, r, i, s, a, n) {
        var o, h, l, p, m, f, c = [].concat(a),
            d = t.length - 1,
            u = [],
            y = [];
        for (o = d; 0 <= o; o -= 1) {
            if ((f = this.searchProcessedElement(t[o])) ? e[o] = r[f - 1] : t[o]._render = n, "fl" == t[o].ty || "st" == t[o].ty || "gf" == t[o].ty || "gs" == t[o].ty) f ? e[o].style.closed = !1 : e[o] = this.createStyleElement(t[o], s), t[o]._render && i.appendChild(e[o].style.pElem), u.push(e[o].style);
            else if ("gr" == t[o].ty) {
                if (f)
                    for (l = e[o].it.length, h = 0; h < l; h += 1) e[o].prevViewData[h] = e[o].it[h];
                else e[o] = this.createGroupElement(t[o]);
                this.searchShapes(t[o].it, e[o].it, e[o].prevViewData, e[o].gr, s + 1, c, n), t[o]._render && i.appendChild(e[o].gr)
            } else "tr" == t[o].ty ? (f || (e[o] = this.createTransformElement(t[o], i)), p = e[o].transform, c.push(p)) : "sh" == t[o].ty || "rc" == t[o].ty || "el" == t[o].ty || "sr" == t[o].ty ? (f || (e[o] = this.createShapeElement(t[o], c, s)), this.setElementStyles(e[o])) : "tm" == t[o].ty || "rd" == t[o].ty || "ms" == t[o].ty ? (f ? (m = e[o]).closed = !1 : ((m = ShapeModifiers.getModifier(t[o].ty)).init(this, t[o]), e[o] = m, this.shapeModifiers.push(m)), y.push(m)) : "rp" == t[o].ty && (f ? (m = e[o]).closed = !0 : (m = ShapeModifiers.getModifier(t[o].ty), (e[o] = m).init(this, t, o, e), this.shapeModifiers.push(m), n = !1), y.push(m));
            this.addProcessedElement(t[o], o + 1)
        }
        for (d = u.length, o = 0; o < d; o += 1) u[o].closed = !0;
        for (d = y.length, o = 0; o < d; o += 1) y[o].closed = !0
    }, SVGShapeElement.prototype.renderInnerContent = function() {
        this.renderModifiers();
        var t, e = this.stylesList.length;
        for (t = 0; t < e; t += 1) this.stylesList[t].reset();
        for (this.renderShape(), t = 0; t < e; t += 1)(this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d), this.stylesList[t].d = "M0 0" + this.stylesList[t].d), this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"))
    }, SVGShapeElement.prototype.renderShape = function() {
        var t, e, r = this.animatedContents.length;
        for (t = 0; t < r; t += 1) e = this.animatedContents[t], (this._isFirstFrame || e.element._isAnimated) && !0 !== e.data && e.fn(e.data, e.element, this._isFirstFrame)
    }, SVGShapeElement.prototype.destroy = function() {
        this.destroyBaseElement(), this.shapesData = null, this.itemsData = null
    }, SVGTintFilter.prototype.renderFrame = function(t) {
        if (t || this.filterManager._mdf) {
            var e = this.filterManager.effectElements[0].p.v,
                r = this.filterManager.effectElements[1].p.v,
                i = this.filterManager.effectElements[2].p.v / 100;
            this.matrixFilter.setAttribute("values", r[0] - e[0] + " 0 0 0 " + e[0] + " " + (r[1] - e[1]) + " 0 0 0 " + e[1] + " " + (r[2] - e[2]) + " 0 0 0 " + e[2] + " 0 0 0 " + i + " 0")
        }
    }, SVGFillFilter.prototype.renderFrame = function(t) {
        if (t || this.filterManager._mdf) {
            var e = this.filterManager.effectElements[2].p.v,
                r = this.filterManager.effectElements[6].p.v;
            this.matrixFilter.setAttribute("values", "0 0 0 0 " + e[0] + " 0 0 0 0 " + e[1] + " 0 0 0 0 " + e[2] + " 0 0 0 " + r + " 0")
        }
    }, SVGGaussianBlurEffect.prototype.renderFrame = function(t) {
        if (t || this.filterManager._mdf) {
            var e = .3 * this.filterManager.effectElements[0].p.v,
                r = this.filterManager.effectElements[1].p.v,
                i = 3 == r ? 0 : e,
                s = 2 == r ? 0 : e;
            this.feGaussianBlur.setAttribute("stdDeviation", i + " " + s);
            var a = 1 == this.filterManager.effectElements[2].p.v ? "wrap" : "duplicate";
            this.feGaussianBlur.setAttribute("edgeMode", a)
        }
    }, SVGStrokeEffect.prototype.initialize = function() {
        var t, e, r, i, s = this.elem.layerElement.children || this.elem.layerElement.childNodes;
        for (1 === this.filterManager.effectElements[1].p.v ? (i = this.elem.maskManager.masksProperties.length, r = 0) : i = (r = this.filterManager.effectElements[0].p.v - 1) + 1, (e = createNS("g")).setAttribute("fill", "none"), e.setAttribute("stroke-linecap", "round"), e.setAttribute("stroke-dashoffset", 1); r < i; r += 1) t = createNS("path"), e.appendChild(t), this.paths.push({
            p: t,
            m: r
        });
        if (3 === this.filterManager.effectElements[10].p.v) {
            var a = createNS("mask"),
                n = createElementID();
            a.setAttribute("id", n), a.setAttribute("mask-type", "alpha"), a.appendChild(e), this.elem.globalData.defs.appendChild(a);
            var o = createNS("g");
            for (o.setAttribute("mask", "url(" + locationHref + "#" + n + ")"); s[0];) o.appendChild(s[0]);
            this.elem.layerElement.appendChild(o), this.masker = a, e.setAttribute("stroke", "#fff")
        } else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) {
            if (2 === this.filterManager.effectElements[10].p.v)
                for (s = this.elem.layerElement.children || this.elem.layerElement.childNodes; s.length;) this.elem.layerElement.removeChild(s[0]);
            this.elem.layerElement.appendChild(e), this.elem.layerElement.removeAttribute("mask"), e.setAttribute("stroke", "#fff")
        }
        this.initialized = !0, this.pathMasker = e
    }, SVGStrokeEffect.prototype.renderFrame = function(t) {
        this.initialized || this.initialize();
        var e, r, i, s = this.paths.length;
        for (e = 0; e < s; e += 1)
            if (-1 !== this.paths[e].m && (r = this.elem.maskManager.viewData[this.paths[e].m], i = this.paths[e].p, (t || this.filterManager._mdf || r.prop._mdf) && i.setAttribute("d", r.lastPath), t || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || r.prop._mdf)) {
                var a;
                if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) {
                    var n = Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) / 100,
                        o = Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) / 100,
                        h = i.getTotalLength();
                    a = "0 0 0 " + h * n + " ";
                    var l, p = h * (o - n),
                        m = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v / 100,
                        f = Math.floor(p / m);
                    for (l = 0; l < f; l += 1) a += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v / 100 + " ";
                    a += "0 " + 10 * h + " 0 0"
                } else a = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v / 100;
                i.setAttribute("stroke-dasharray", a)
            }
        if ((t || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (t || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) && (t || this.filterManager.effectElements[3].p._mdf)) {
            var c = this.filterManager.effectElements[3].p.v;
            this.pathMasker.setAttribute("stroke", "rgb(" + bm_floor(255 * c[0]) + "," + bm_floor(255 * c[1]) + "," + bm_floor(255 * c[2]) + ")")
        }
    }, SVGTritoneFilter.prototype.renderFrame = function(t) {
        if (t || this.filterManager._mdf) {
            var e = this.filterManager.effectElements[0].p.v,
                r = this.filterManager.effectElements[1].p.v,
                i = this.filterManager.effectElements[2].p.v,
                s = i[0] + " " + r[0] + " " + e[0],
                a = i[1] + " " + r[1] + " " + e[1],
                n = i[2] + " " + r[2] + " " + e[2];
            this.feFuncR.setAttribute("tableValues", s), this.feFuncG.setAttribute("tableValues", a), this.feFuncB.setAttribute("tableValues", n)
        }
    }, SVGProLevelsFilter.prototype.createFeFunc = function(t, e) {
        var r = createNS(t);
        return r.setAttribute("type", "table"), e.appendChild(r), r
    }, SVGProLevelsFilter.prototype.getTableValue = function(t, e, r, i, s) {
        for (var a, n, o = 0, h = Math.min(t, e), l = Math.max(t, e), p = Array.call(null, {
                length: 256
            }), m = 0, f = s - i, c = e - t; o <= 256;) n = (a = o / 256) <= h ? c < 0 ? s : i : l <= a ? c < 0 ? i : s : i + f * Math.pow((a - t) / c, 1 / r), p[m++] = n, o += 256 / 255;
        return p.join(" ")
    }, SVGProLevelsFilter.prototype.renderFrame = function(t) {
        if (t || this.filterManager._mdf) {
            var e, r = this.filterManager.effectElements;
            this.feFuncRComposed && (t || r[3].p._mdf || r[4].p._mdf || r[5].p._mdf || r[6].p._mdf || r[7].p._mdf) && (e = this.getTableValue(r[3].p.v, r[4].p.v, r[5].p.v, r[6].p.v, r[7].p.v), this.feFuncRComposed.setAttribute("tableValues", e), this.feFuncGComposed.setAttribute("tableValues", e), this.feFuncBComposed.setAttribute("tableValues", e)), this.feFuncR && (t || r[10].p._mdf || r[11].p._mdf || r[12].p._mdf || r[13].p._mdf || r[14].p._mdf) && (e = this.getTableValue(r[10].p.v, r[11].p.v, r[12].p.v, r[13].p.v, r[14].p.v), this.feFuncR.setAttribute("tableValues", e)), this.feFuncG && (t || r[17].p._mdf || r[18].p._mdf || r[19].p._mdf || r[20].p._mdf || r[21].p._mdf) && (e = this.getTableValue(r[17].p.v, r[18].p.v, r[19].p.v, r[20].p.v, r[21].p.v), this.feFuncG.setAttribute("tableValues", e)), this.feFuncB && (t || r[24].p._mdf || r[25].p._mdf || r[26].p._mdf || r[27].p._mdf || r[28].p._mdf) && (e = this.getTableValue(r[24].p.v, r[25].p.v, r[26].p.v, r[27].p.v, r[28].p.v), this.feFuncB.setAttribute("tableValues", e)), this.feFuncA && (t || r[31].p._mdf || r[32].p._mdf || r[33].p._mdf || r[34].p._mdf || r[35].p._mdf) && (e = this.getTableValue(r[31].p.v, r[32].p.v, r[33].p.v, r[34].p.v, r[35].p.v), this.feFuncA.setAttribute("tableValues", e))
        }
    }, SVGDropShadowEffect.prototype.renderFrame = function(t) {
        if (t || this.filterManager._mdf) {
            if ((t || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), t || this.filterManager.effectElements[0].p._mdf) {
                var e = this.filterManager.effectElements[0].p.v;
                this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * e[0]), Math.round(255 * e[1]), Math.round(255 * e[2])))
            }
            if ((t || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), t || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
                var r = this.filterManager.effectElements[3].p.v,
                    i = (this.filterManager.effectElements[2].p.v - 90) * degToRads,
                    s = r * Math.cos(i),
                    a = r * Math.sin(i);
                this.feOffset.setAttribute("dx", s), this.feOffset.setAttribute("dy", a)
            }
        }
    };
    var _svgMatteSymbols = [];

    function SVGMatte3Effect(t, e, r) {
        this.initialized = !1, this.filterManager = e, this.filterElem = t, (this.elem = r).matteElement = createNS("g"), r.matteElement.appendChild(r.layerElement), r.matteElement.appendChild(r.transformedElement), r.baseElement = r.matteElement
    }

    function SVGEffects(t) {
        var e, r, i = t.data.ef ? t.data.ef.length : 0,
            s = createElementID(),
            a = filtersFactory.createFilter(s),
            n = 0;
        for (this.filters = [], e = 0; e < i; e += 1) r = null, 20 === t.data.ef[e].ty ? (n += 1, r = new SVGTintFilter(a, t.effectsManager.effectElements[e])) : 21 === t.data.ef[e].ty ? (n += 1, r = new SVGFillFilter(a, t.effectsManager.effectElements[e])) : 22 === t.data.ef[e].ty ? r = new SVGStrokeEffect(t, t.effectsManager.effectElements[e]) : 23 === t.data.ef[e].ty ? (n += 1, r = new SVGTritoneFilter(a, t.effectsManager.effectElements[e])) : 24 === t.data.ef[e].ty ? (n += 1, r = new SVGProLevelsFilter(a, t.effectsManager.effectElements[e])) : 25 === t.data.ef[e].ty ? (n += 1, r = new SVGDropShadowEffect(a, t.effectsManager.effectElements[e])) : 28 === t.data.ef[e].ty ? r = new SVGMatte3Effect(a, t.effectsManager.effectElements[e], t) : 29 === t.data.ef[e].ty && (n += 1, r = new SVGGaussianBlurEffect(a, t.effectsManager.effectElements[e])), r && this.filters.push(r);
        n && (t.globalData.defs.appendChild(a), t.layerElement.setAttribute("filter", "url(" + locationHref + "#" + s + ")")), this.filters.length && t.addRenderableComponent(this)
    }

    function CVContextData() {
        this.saved = [], this.cArrPos = 0, this.cTr = new Matrix, this.cO = 1;
        var t;
        for (this.savedOp = createTypedArray("float32", 15), t = 0; t < 15; t += 1) this.saved[t] = createTypedArray("float32", 16);
        this._length = 15
    }

    function CVBaseElement() {}

    function CVImageElement(t, e, r) {
        this.assetData = e.getAssetData(t.refId), this.img = e.imageLoader.getImage(this.assetData), this.initElement(t, e, r)
    }

    function CVCompElement(t, e, r) {
        this.completeLayers = !1, this.layers = t.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
            _placeholder: !0
        }
    }

    function CVMaskElement(t, e) {
        this.data = t, this.element = e, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
        var r, i = this.masksProperties.length,
            s = !1;
        for (r = 0; r < i; r++) "n" !== this.masksProperties[r].mode && (s = !0), this.viewData[r] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[r], 3);
        (this.hasMasks = s) && this.element.addRenderableComponent(this)
    }

    function CVShapeElement(t, e, r) {
        this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager, this.initElement(t, e, r)
    }

    function CVSolidElement(t, e, r) {
        this.initElement(t, e, r)
    }

    function CVTextElement(t, e, r) {
        this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = {
            fill: "rgba(0,0,0,0)",
            stroke: "rgba(0,0,0,0)",
            sWidth: 0,
            fValue: ""
        }, this.initElement(t, e, r)
    }

    function CVEffects() {}

    function HBaseElement(t, e, r) {}

    function HSolidElement(t, e, r) {
        this.initElement(t, e, r)
    }

    function HCompElement(t, e, r) {
        this.layers = t.layers, this.supports3d = !t.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, r), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {
            _placeholder: !0
        }
    }

    function HShapeElement(t, e, r) {
        this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(t, e, r), this.prevViewData = [], this.currentBBox = {
            x: 999999,
            y: -999999,
            h: 0,
            w: 0
        }
    }

    function HTextElement(t, e, r) {
        this.textSpans = [], this.textPaths = [], this.currentBBox = {
            x: 999999,
            y: -999999,
            h: 0,
            w: 0
        }, this.renderType = "svg", this.isMasked = !1, this.initElement(t, e, r)
    }

    function HImageElement(t, e, r) {
        this.assetData = e.getAssetData(t.refId), this.initElement(t, e, r)
    }

    function HCameraElement(t, e, r) {
        this.initFrame(), this.initBaseData(t, e, r), this.initHierarchy();
        var i = PropertyFactory.getProp;
        if (this.pe = i(this, t.pe, 0, 0, this), t.ks.p.s ? (this.px = i(this, t.ks.p.x, 1, 0, this), this.py = i(this, t.ks.p.y, 1, 0, this), this.pz = i(this, t.ks.p.z, 1, 0, this)) : this.p = i(this, t.ks.p, 1, 0, this), t.ks.a && (this.a = i(this, t.ks.a, 1, 0, this)), t.ks.or.k.length && t.ks.or.k[0].to) {
            var s, a = t.ks.or.k.length;
            for (s = 0; s < a; s += 1) t.ks.or.k[s].to = null, t.ks.or.k[s].ti = null
        }
        this.or = i(this, t.ks.or, 1, degToRads, this), this.or.sh = !0, this.rx = i(this, t.ks.rx, 0, degToRads, this), this.ry = i(this, t.ks.ry, 0, degToRads, this), this.rz = i(this, t.ks.rz, 0, degToRads, this), this.mat = new Matrix, this._prevMat = new Matrix, this._isFirstFrame = !0, this.finalTransform = {
            mProp: this
        }
    }

    function HEffects() {}
    SVGMatte3Effect.prototype.findSymbol = function(t) {
        for (var e = 0, r = _svgMatteSymbols.length; e < r;) {
            if (_svgMatteSymbols[e] === t) return _svgMatteSymbols[e];
            e += 1
        }
        return null
    }, SVGMatte3Effect.prototype.replaceInParent = function(t, e) {
        var r = t.layerElement.parentNode;
        if (r) {
            for (var i, s = r.children, a = 0, n = s.length; a < n && s[a] !== t.layerElement;) a += 1;
            a <= n - 2 && (i = s[a + 1]);
            var o = createNS("use");
            o.setAttribute("href", "#" + e), i ? r.insertBefore(o, i) : r.appendChild(o)
        }
    }, SVGMatte3Effect.prototype.setElementAsMask = function(t, e) {
        if (!this.findSymbol(e)) {
            var r = createElementID(),
                i = createNS("mask");
            i.setAttribute("id", e.layerId), i.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(e);
            var s = t.globalData.defs;
            s.appendChild(i);
            var a = createNS("symbol");
            a.setAttribute("id", r), this.replaceInParent(e, r), a.appendChild(e.layerElement), s.appendChild(a);
            var n = createNS("use");
            n.setAttribute("href", "#" + r), i.appendChild(n), e.data.hd = !1, e.show()
        }
        t.setMatte(e.layerId)
    }, SVGMatte3Effect.prototype.initialize = function() {
        for (var t = this.filterManager.effectElements[0].p.v, e = this.elem.comp.elements, r = 0, i = e.length; r < i;) e[r] && e[r].data.ind === t && this.setElementAsMask(this.elem, e[r]), r += 1;
        this.initialized = !0
    }, SVGMatte3Effect.prototype.renderFrame = function() {
        this.initialized || this.initialize()
    }, SVGEffects.prototype.renderFrame = function(t) {
        var e, r = this.filters.length;
        for (e = 0; e < r; e += 1) this.filters[e].renderFrame(t)
    }, CVContextData.prototype.duplicate = function() {
        var t = 2 * this._length,
            e = this.savedOp;
        this.savedOp = createTypedArray("float32", t), this.savedOp.set(e);
        var r = 0;
        for (r = this._length; r < t; r += 1) this.saved[r] = createTypedArray("float32", 16);
        this._length = t
    }, CVContextData.prototype.reset = function() {
        this.cArrPos = 0, this.cTr.reset(), this.cO = 1
    }, CVBaseElement.prototype = {
        createElements: function() {},
        initRendererElement: function() {},
        createContainerElements: function() {
            this.canvasContext = this.globalData.canvasContext, this.renderableEffectsManager = new CVEffects(this)
        },
        createContent: function() {},
        setBlendMode: function() {
            var t = this.globalData;
            if (t.blendMode !== this.data.bm) {
                t.blendMode = this.data.bm;
                var e = getBlendMode(this.data.bm);
                t.canvasContext.globalCompositeOperation = e
            }
        },
        createRenderableComponents: function() {
            this.maskManager = new CVMaskElement(this.data, this)
        },
        hideElement: function() {
            this.hidden || this.isInRange && !this.isTransparent || (this.hidden = !0)
        },
        showElement: function() {
            this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0)
        },
        renderFrame: function() {
            if (!this.hidden && !this.data.hd) {
                this.renderTransform(), this.renderRenderable(), this.setBlendMode();
                var t = 0 === this.data.ty;
                this.globalData.renderer.save(t), this.globalData.renderer.ctxTransform(this.finalTransform.mat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.mProp.o.v), this.renderInnerContent(), this.globalData.renderer.restore(t), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1)
            }
        },
        destroy: function() {
            this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy()
        },
        mHelper: new Matrix
    }, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function() {
        if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
            var t = createTag("canvas");
            t.width = this.assetData.w, t.height = this.assetData.h;
            var e, r, i = t.getContext("2d"),
                s = this.img.width,
                a = this.img.height,
                n = s / a,
                o = this.assetData.w / this.assetData.h,
                h = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
            o < n && "xMidYMid slice" === h || n < o && "xMidYMid slice" !== h ? e = (r = a) * o : r = (e = s) / o, i.drawImage(this.img, (s - e) / 2, (a - r) / 2, e, r, 0, 0, this.assetData.w, this.assetData.h), this.img = t
        }
    }, CVImageElement.prototype.renderInnerContent = function(t) {
        this.canvasContext.drawImage(this.img, 0, 0)
    }, CVImageElement.prototype.destroy = function() {
        this.img = null
    }, extendPrototype([CanvasRenderer, ICompElement, CVBaseElement], CVCompElement), CVCompElement.prototype.renderInnerContent = function() {
        var t, e = this.canvasContext;
        for (e.beginPath(), e.moveTo(0, 0), e.lineTo(this.data.w, 0), e.lineTo(this.data.w, this.data.h), e.lineTo(0, this.data.h), e.lineTo(0, 0), e.clip(), t = this.layers.length - 1; 0 <= t; t -= 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
    }, CVCompElement.prototype.destroy = function() {
        var t;
        for (t = this.layers.length - 1; 0 <= t; t -= 1) this.elements[t] && this.elements[t].destroy();
        this.layers = null, this.elements = null
    }, CVMaskElement.prototype.renderFrame = function() {
        if (this.hasMasks) {
            var t, e, r, i, s = this.element.finalTransform.mat,
                a = this.element.canvasContext,
                n = this.masksProperties.length;
            for (a.beginPath(), t = 0; t < n; t++)
                if ("n" !== this.masksProperties[t].mode) {
                    this.masksProperties[t].inv && (a.moveTo(0, 0), a.lineTo(this.element.globalData.compSize.w, 0), a.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), a.lineTo(0, this.element.globalData.compSize.h), a.lineTo(0, 0)), i = this.viewData[t].v, e = s.applyToPointArray(i.v[0][0], i.v[0][1], 0), a.moveTo(e[0], e[1]);
                    var o, h = i._length;
                    for (o = 1; o < h; o++) r = s.applyToTriplePoints(i.o[o - 1], i.i[o], i.v[o]), a.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5]);
                    r = s.applyToTriplePoints(i.o[o - 1], i.i[0], i.v[0]), a.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5])
                }
            this.element.globalData.renderer.save(!0), a.clip()
        }
    }, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function() {
        this.element = null
    }, extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = {
        opacity: 1,
        _opMdf: !1
    }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function() {
        this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, [])
    }, CVShapeElement.prototype.createStyleElement = function(t, e) {
        var r = {
                data: t,
                type: t.ty,
                preTransforms: this.transformsManager.addTransformSequence(e),
                transforms: [],
                elements: [],
                closed: !0 === t.hd
            },
            i = {};
        if ("fl" == t.ty || "st" == t.ty ? (i.c = PropertyFactory.getProp(this, t.c, 1, 255, this), i.c.k || (r.co = "rgb(" + bm_floor(i.c.v[0]) + "," + bm_floor(i.c.v[1]) + "," + bm_floor(i.c.v[2]) + ")")) : "gf" !== t.ty && "gs" !== t.ty || (i.s = PropertyFactory.getProp(this, t.s, 1, null, this), i.e = PropertyFactory.getProp(this, t.e, 1, null, this), i.h = PropertyFactory.getProp(this, t.h || {
                k: 0
            }, 0, .01, this), i.a = PropertyFactory.getProp(this, t.a || {
                k: 0
            }, 0, degToRads, this), i.g = new GradientProperty(this, t.g, this)), i.o = PropertyFactory.getProp(this, t.o, 0, .01, this), "st" == t.ty || "gs" == t.ty) {
            if (r.lc = this.lcEnum[t.lc] || "round", r.lj = this.ljEnum[t.lj] || "round", 1 == t.lj && (r.ml = t.ml), i.w = PropertyFactory.getProp(this, t.w, 0, null, this), i.w.k || (r.wi = i.w.v), t.d) {
                var s = new DashProperty(this, t.d, "canvas", this);
                i.d = s, i.d.k || (r.da = i.d.dashArray, r.do = i.d.dashoffset[0])
            }
        } else r.r = 2 === t.r ? "evenodd" : "nonzero";
        return this.stylesList.push(r), i.style = r, i
    }, CVShapeElement.prototype.createGroupElement = function(t) {
        return {
            it: [],
            prevViewData: []
        }
    }, CVShapeElement.prototype.createTransformElement = function(t) {
        return {
            transform: {
                opacity: 1,
                _opMdf: !1,
                key: this.transformsManager.getNewKey(),
                op: PropertyFactory.getProp(this, t.o, 0, .01, this),
                mProps: TransformPropertyFactory.getTransformProperty(this, t, this)
            }
        }
    }, CVShapeElement.prototype.createShapeElement = function(t) {
        var e = new CVShapeData(this, t, this.stylesList, this.transformsManager);
        return this.shapes.push(e), this.addShapeToModifiers(e), e
    }, CVShapeElement.prototype.reloadShapes = function() {
        this._isFirstFrame = !0;
        var t, e = this.itemsData.length;
        for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
        for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
        this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame)
    }, CVShapeElement.prototype.addTransformToStyleList = function(t) {
        var e, r = this.stylesList.length;
        for (e = 0; e < r; e += 1) this.stylesList[e].closed || this.stylesList[e].transforms.push(t)
    }, CVShapeElement.prototype.removeTransformFromStyleList = function() {
        var t, e = this.stylesList.length;
        for (t = 0; t < e; t += 1) this.stylesList[t].closed || this.stylesList[t].transforms.pop()
    }, CVShapeElement.prototype.closeStyles = function(t) {
        var e, r = t.length;
        for (e = 0; e < r; e += 1) t[e].closed = !0
    }, CVShapeElement.prototype.searchShapes = function(t, e, r, i, s) {
        var a, n, o, h, l, p, m = t.length - 1,
            f = [],
            c = [],
            d = [].concat(s);
        for (a = m; 0 <= a; a -= 1) {
            if ((h = this.searchProcessedElement(t[a])) ? e[a] = r[h - 1] : t[a]._shouldRender = i, "fl" == t[a].ty || "st" == t[a].ty || "gf" == t[a].ty || "gs" == t[a].ty) h ? e[a].style.closed = !1 : e[a] = this.createStyleElement(t[a], d), f.push(e[a].style);
            else if ("gr" == t[a].ty) {
                if (h)
                    for (o = e[a].it.length, n = 0; n < o; n += 1) e[a].prevViewData[n] = e[a].it[n];
                else e[a] = this.createGroupElement(t[a]);
                this.searchShapes(t[a].it, e[a].it, e[a].prevViewData, i, d)
            } else "tr" == t[a].ty ? (h || (p = this.createTransformElement(t[a]), e[a] = p), d.push(e[a]), this.addTransformToStyleList(e[a])) : "sh" == t[a].ty || "rc" == t[a].ty || "el" == t[a].ty || "sr" == t[a].ty ? h || (e[a] = this.createShapeElement(t[a])) : "tm" == t[a].ty || "rd" == t[a].ty ? (h ? (l = e[a]).closed = !1 : ((l = ShapeModifiers.getModifier(t[a].ty)).init(this, t[a]), e[a] = l, this.shapeModifiers.push(l)), c.push(l)) : "rp" == t[a].ty && (h ? (l = e[a]).closed = !0 : (l = ShapeModifiers.getModifier(t[a].ty), (e[a] = l).init(this, t, a, e), this.shapeModifiers.push(l), i = !1), c.push(l));
            this.addProcessedElement(t[a], a + 1)
        }
        for (this.removeTransformFromStyleList(), this.closeStyles(f), m = c.length, a = 0; a < m; a += 1) c[a].closed = !0
    }, CVShapeElement.prototype.renderInnerContent = function() {
        this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0)
    }, CVShapeElement.prototype.renderShapeTransform = function(t, e) {
        (t._opMdf || e.op._mdf || this._isFirstFrame) && (e.opacity = t.opacity, e.opacity *= e.op.v, e._opMdf = !0)
    }, CVShapeElement.prototype.drawLayer = function() {
        var t, e, r, i, s, a, n, o, h, l = this.stylesList.length,
            p = this.globalData.renderer,
            m = this.globalData.canvasContext;
        for (t = 0; t < l; t += 1)
            if (("st" !== (o = (h = this.stylesList[t]).type) && "gs" !== o || 0 !== h.wi) && h.data._shouldRender && 0 !== h.coOp && 0 !== this.globalData.currentGlobalAlpha) {
                for (p.save(), a = h.elements, "st" === o || "gs" === o ? (m.strokeStyle = "st" === o ? h.co : h.grd, m.lineWidth = h.wi, m.lineCap = h.lc, m.lineJoin = h.lj, m.miterLimit = h.ml || 0) : m.fillStyle = "fl" === o ? h.co : h.grd, p.ctxOpacity(h.coOp), "st" !== o && "gs" !== o && m.beginPath(), p.ctxTransform(h.preTransforms.finalTransform.props), r = a.length, e = 0; e < r; e += 1) {
                    for ("st" !== o && "gs" !== o || (m.beginPath(), h.da && (m.setLineDash(h.da), m.lineDashOffset = h.do)), s = (n = a[e].trNodes).length, i = 0; i < s; i += 1) "m" == n[i].t ? m.moveTo(n[i].p[0], n[i].p[1]) : "c" == n[i].t ? m.bezierCurveTo(n[i].pts[0], n[i].pts[1], n[i].pts[2], n[i].pts[3], n[i].pts[4], n[i].pts[5]) : m.closePath();
                    "st" !== o && "gs" !== o || (m.stroke(), h.da && m.setLineDash(this.dashResetter))
                }
                "st" !== o && "gs" !== o && m.fill(h.r), p.restore()
            }
    }, CVShapeElement.prototype.renderShape = function(t, e, r, i) {
        var s, a;
        for (a = t, s = e.length - 1; 0 <= s; s -= 1) "tr" == e[s].ty ? (a = r[s].transform, this.renderShapeTransform(t, a)) : "sh" == e[s].ty || "el" == e[s].ty || "rc" == e[s].ty || "sr" == e[s].ty ? this.renderPath(e[s], r[s]) : "fl" == e[s].ty ? this.renderFill(e[s], r[s], a) : "st" == e[s].ty ? this.renderStroke(e[s], r[s], a) : "gf" == e[s].ty || "gs" == e[s].ty ? this.renderGradientFill(e[s], r[s], a) : "gr" == e[s].ty ? this.renderShape(a, e[s].it, r[s].it) : e[s].ty;
        i && this.drawLayer()
    }, CVShapeElement.prototype.renderStyledShape = function(t, e) {
        if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
            var r, i, s, a = t.trNodes,
                n = e.paths,
                o = n._length;
            a.length = 0;
            var h = t.transforms.finalTransform;
            for (s = 0; s < o; s += 1) {
                var l = n.shapes[s];
                if (l && l.v) {
                    for (i = l._length, r = 1; r < i; r += 1) 1 === r && a.push({
                        t: "m",
                        p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0)
                    }), a.push({
                        t: "c",
                        pts: h.applyToTriplePoints(l.o[r - 1], l.i[r], l.v[r])
                    });
                    1 === i && a.push({
                        t: "m",
                        p: h.applyToPointArray(l.v[0][0], l.v[0][1], 0)
                    }), l.c && i && (a.push({
                        t: "c",
                        pts: h.applyToTriplePoints(l.o[r - 1], l.i[0], l.v[0])
                    }), a.push({
                        t: "z"
                    }))
                }
            }
            t.trNodes = a
        }
    }, CVShapeElement.prototype.renderPath = function(t, e) {
        if (!0 !== t.hd && t._shouldRender) {
            var r, i = e.styledShapes.length;
            for (r = 0; r < i; r += 1) this.renderStyledShape(e.styledShapes[r], e.sh)
        }
    }, CVShapeElement.prototype.renderFill = function(t, e, r) {
        var i = e.style;
        (e.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"), (e.o._mdf || r._opMdf || this._isFirstFrame) && (i.coOp = e.o.v * r.opacity)
    }, CVShapeElement.prototype.renderGradientFill = function(t, e, r) {
        var i = e.style;
        if (!i.grd || e.g._mdf || e.s._mdf || e.e._mdf || 1 !== t.t && (e.h._mdf || e.a._mdf)) {
            var s = this.globalData.canvasContext,
                a = e.s.v,
                n = e.e.v;
            if (1 === t.t) f = s.createLinearGradient(a[0], a[1], n[0], n[1]);
            else var o = Math.sqrt(Math.pow(a[0] - n[0], 2) + Math.pow(a[1] - n[1], 2)),
                h = Math.atan2(n[1] - a[1], n[0] - a[0]),
                l = o * (1 <= e.h.v ? .99 : e.h.v <= -1 ? -.99 : e.h.v),
                p = Math.cos(h + e.a.v) * l + a[0],
                m = Math.sin(h + e.a.v) * l + a[1],
                f = s.createRadialGradient(p, m, 0, a[0], a[1], o);
            var c, d = t.g.p,
                u = e.g.c,
                y = 1;
            for (c = 0; c < d; c += 1) e.g._hasOpacity && e.g._collapsable && (y = e.g.o[2 * c + 1]), f.addColorStop(u[4 * c] / 100, "rgba(" + u[4 * c + 1] + "," + u[4 * c + 2] + "," + u[4 * c + 3] + "," + y + ")");
            i.grd = f
        }
        i.coOp = e.o.v * r.opacity
    }, CVShapeElement.prototype.renderStroke = function(t, e, r) {
        var i = e.style,
            s = e.d;
        s && (s._mdf || this._isFirstFrame) && (i.da = s.dashArray, i.do = s.dashoffset[0]), (e.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"), (e.o._mdf || r._opMdf || this._isFirstFrame) && (i.coOp = e.o.v * r.opacity), (e.w._mdf || this._isFirstFrame) && (i.wi = e.w.v)
    }, CVShapeElement.prototype.destroy = function() {
        this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0
    }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function() {
        var t = this.canvasContext;
        t.fillStyle = this.data.sc, t.fillRect(0, 0, this.data.sw, this.data.sh)
    }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function() {
        var t = this.textProperty.currentData;
        this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
        var e = !1;
        t.fc ? (e = !0, this.values.fill = this.buildColor(t.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = e;
        var r = !1;
        t.sc && (r = !0, this.values.stroke = this.buildColor(t.sc), this.values.sWidth = t.sw);
        var i, s, a = this.globalData.fontManager.getFontByName(t.f),
            n = t.l,
            o = this.mHelper;
        this.stroke = r, this.values.fValue = t.finalSize + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily, s = t.finalText.length;
        var h, l, p, m, f, c, d, u, y, g, v = this.data.singleShape,
            b = t.tr / 1e3 * t.finalSize,
            E = 0,
            x = 0,
            P = !0,
            S = 0;
        for (i = 0; i < s; i += 1) {
            for (l = (h = this.globalData.fontManager.getCharData(t.finalText[i], a.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily)) && h.data || {}, o.reset(), v && n[i].n && (E = -b, x += t.yOffset, x += P ? 1 : 0, P = !1), d = (f = l.shapes ? l.shapes[0].it : []).length, o.scale(t.finalSize / 100, t.finalSize / 100), v && this.applyTextPropertiesToMatrix(t, o, n[i].line, E, x), y = createSizedArray(d), c = 0; c < d; c += 1) {
                for (m = f[c].ks.k.i.length, u = f[c].ks.k, g = [], p = 1; p < m; p += 1) 1 == p && g.push(o.applyToX(u.v[0][0], u.v[0][1], 0), o.applyToY(u.v[0][0], u.v[0][1], 0)), g.push(o.applyToX(u.o[p - 1][0], u.o[p - 1][1], 0), o.applyToY(u.o[p - 1][0], u.o[p - 1][1], 0), o.applyToX(u.i[p][0], u.i[p][1], 0), o.applyToY(u.i[p][0], u.i[p][1], 0), o.applyToX(u.v[p][0], u.v[p][1], 0), o.applyToY(u.v[p][0], u.v[p][1], 0));
                g.push(o.applyToX(u.o[p - 1][0], u.o[p - 1][1], 0), o.applyToY(u.o[p - 1][0], u.o[p - 1][1], 0), o.applyToX(u.i[0][0], u.i[0][1], 0), o.applyToY(u.i[0][0], u.i[0][1], 0), o.applyToX(u.v[0][0], u.v[0][1], 0), o.applyToY(u.v[0][0], u.v[0][1], 0)), y[c] = g
            }
            v && (E += n[i].l, E += b), this.textSpans[S] ? this.textSpans[S].elem = y : this.textSpans[S] = {
                elem: y
            }, S += 1
        }
    }, CVTextElement.prototype.renderInnerContent = function() {
        var t, e, r, i, s, a, n = this.canvasContext;
        this.finalTransform.mat.props;
        n.font = this.values.fValue, n.lineCap = "butt", n.lineJoin = "miter", n.miterLimit = 4, this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
        var o, h = this.textAnimator.renderedLetters,
            l = this.textProperty.currentData.l;
        e = l.length;
        var p, m, f = null,
            c = null,
            d = null;
        for (t = 0; t < e; t += 1)
            if (!l[t].n) {
                if ((o = h[t]) && (this.globalData.renderer.save(), this.globalData.renderer.ctxTransform(o.p), this.globalData.renderer.ctxOpacity(o.o)), this.fill) {
                    for (o && o.fc ? f !== o.fc && (f = o.fc, n.fillStyle = o.fc) : f !== this.values.fill && (f = this.values.fill, n.fillStyle = this.values.fill), i = (p = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), r = 0; r < i; r += 1)
                        for (a = (m = p[r]).length, this.globalData.canvasContext.moveTo(m[0], m[1]), s = 2; s < a; s += 6) this.globalData.canvasContext.bezierCurveTo(m[s], m[s + 1], m[s + 2], m[s + 3], m[s + 4], m[s + 5]);
                    this.globalData.canvasContext.closePath(), this.globalData.canvasContext.fill()
                }
                if (this.stroke) {
                    for (o && o.sw ? d !== o.sw && (d = o.sw, n.lineWidth = o.sw) : d !== this.values.sWidth && (d = this.values.sWidth, n.lineWidth = this.values.sWidth), o && o.sc ? c !== o.sc && (c = o.sc, n.strokeStyle = o.sc) : c !== this.values.stroke && (c = this.values.stroke, n.strokeStyle = this.values.stroke), i = (p = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), r = 0; r < i; r += 1)
                        for (a = (m = p[r]).length, this.globalData.canvasContext.moveTo(m[0], m[1]), s = 2; s < a; s += 6) this.globalData.canvasContext.bezierCurveTo(m[s], m[s + 1], m[s + 2], m[s + 3], m[s + 4], m[s + 5]);
                    this.globalData.canvasContext.closePath(), this.globalData.canvasContext.stroke()
                }
                o && this.globalData.renderer.restore()
            }
    }, CVEffects.prototype.renderFrame = function() {}, HBaseElement.prototype = {
        checkBlendMode: function() {},
        initRendererElement: function() {
            this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement)
        },
        createContainerElements: function() {
            this.renderableEffectsManager = new CVEffects(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 !== this.data.bm && this.setBlendMode()
        },
        renderElement: function() {
            this.finalTransform._matMdf && (this.transformedElement.style.transform = this.transformedElement.style.webkitTransform = this.finalTransform.mat.toCSS()), this.finalTransform._opMdf && (this.transformedElement.style.opacity = this.finalTransform.mProp.o.v)
        },
        renderFrame: function() {
            this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
        },
        destroy: function() {
            this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null)
        },
        createRenderableComponents: function() {
            this.maskManager = new MaskElement(this.data, this, this.globalData)
        },
        addEffects: function() {},
        setMatte: function() {}
    }, HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement, HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy, HBaseElement.prototype.buildElementParenting = HybridRenderer.prototype.buildElementParenting, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement), HSolidElement.prototype.createContent = function() {
        var t;
        this.data.hasMask ? ((t = createNS("rect")).setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : ((t = createTag("div")).style.width = this.data.sw + "px", t.style.height = this.data.sh + "px", t.style.backgroundColor = this.data.sc), this.layerElement.appendChild(t)
    }, extendPrototype([HybridRenderer, ICompElement, HBaseElement], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function() {
        this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement
    }, HCompElement.prototype.addTo3dContainer = function(t, e) {
        for (var r, i = 0; i < e;) this.elements[i] && this.elements[i].getBaseElement && (r = this.elements[i].getBaseElement()), i += 1;
        r ? this.layerElement.insertBefore(t, r) : this.layerElement.appendChild(t)
    }, extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function() {
        var t;
        if (this.baseElement.style.fontSize = 0, this.data.hasMask) this.layerElement.appendChild(this.shapesContainer), t = this.svgElement;
        else {
            t = createNS("svg");
            var e = this.comp.data ? this.comp.data : this.globalData.compSize;
            t.setAttribute("width", e.w), t.setAttribute("height", e.h), t.appendChild(this.shapesContainer), this.layerElement.appendChild(t)
        }
        this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), this.shapeCont = t
    }, HShapeElement.prototype.getTransformedPoint = function(t, e) {
        var r, i = t.length;
        for (r = 0; r < i; r += 1) e = t[r].mProps.v.applyToPointArray(e[0], e[1], 0);
        return e
    }, HShapeElement.prototype.calculateShapeBoundingBox = function(t, e) {
        var r, i, s, a, n, o = t.sh.v,
            h = t.transformers,
            l = o._length;
        if (!(l <= 1)) {
            for (r = 0; r < l - 1; r += 1) i = this.getTransformedPoint(h, o.v[r]), s = this.getTransformedPoint(h, o.o[r]), a = this.getTransformedPoint(h, o.i[r + 1]), n = this.getTransformedPoint(h, o.v[r + 1]), this.checkBounds(i, s, a, n, e);
            o.c && (i = this.getTransformedPoint(h, o.v[r]), s = this.getTransformedPoint(h, o.o[r]), a = this.getTransformedPoint(h, o.i[0]), n = this.getTransformedPoint(h, o.v[0]), this.checkBounds(i, s, a, n, e))
        }
    }, HShapeElement.prototype.checkBounds = function(t, e, r, i, s) {
        this.getBoundsOfCurve(t, e, r, i);
        var a = this.shapeBoundingBox;
        s.x = bm_min(a.left, s.x), s.xMax = bm_max(a.right, s.xMax), s.y = bm_min(a.top, s.y), s.yMax = bm_max(a.bottom, s.yMax)
    }, HShapeElement.prototype.shapeBoundingBox = {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    }, HShapeElement.prototype.tempBoundingBox = {
        x: 0,
        xMax: 0,
        y: 0,
        yMax: 0,
        width: 0,
        height: 0
    }, HShapeElement.prototype.getBoundsOfCurve = function(t, e, r, i) {
        for (var s, a, n, o, h, l, p, m = [
                [t[0], i[0]],
                [t[1], i[1]]
            ], f = 0; f < 2; ++f)
            if (a = 6 * t[f] - 12 * e[f] + 6 * r[f], s = -3 * t[f] + 9 * e[f] - 9 * r[f] + 3 * i[f], n = 3 * e[f] - 3 * t[f], a |= 0, n |= 0, 0 !== (s |= 0))(h = a * a - 4 * n * s) < 0 || (0 < (l = (-a + bm_sqrt(h)) / (2 * s)) && l < 1 && m[f].push(this.calculateF(l, t, e, r, i, f)), 0 < (p = (-a - bm_sqrt(h)) / (2 * s)) && p < 1 && m[f].push(this.calculateF(p, t, e, r, i, f)));
            else {
                if (0 === a) continue;
                0 < (o = -n / a) && o < 1 && m[f].push(this.calculateF(o, t, e, r, i, f))
            }
        this.shapeBoundingBox.left = bm_min.apply(null, m[0]), this.shapeBoundingBox.top = bm_min.apply(null, m[1]), this.shapeBoundingBox.right = bm_max.apply(null, m[0]), this.shapeBoundingBox.bottom = bm_max.apply(null, m[1])
    }, HShapeElement.prototype.calculateF = function(t, e, r, i, s, a) {
        return bm_pow(1 - t, 3) * e[a] + 3 * bm_pow(1 - t, 2) * t * r[a] + 3 * (1 - t) * bm_pow(t, 2) * i[a] + bm_pow(t, 3) * s[a]
    }, HShapeElement.prototype.calculateBoundingBox = function(t, e) {
        var r, i = t.length;
        for (r = 0; r < i; r += 1) t[r] && t[r].sh ? this.calculateShapeBoundingBox(t[r], e) : t[r] && t[r].it && this.calculateBoundingBox(t[r].it, e)
    }, HShapeElement.prototype.currentBoxContains = function(t) {
        return this.currentBBox.x <= t.x && this.currentBBox.y <= t.y && this.currentBBox.width + this.currentBBox.x >= t.x + t.width && this.currentBBox.height + this.currentBBox.y >= t.y + t.height
    }, HShapeElement.prototype.renderInnerContent = function() {
        if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
            var t = this.tempBoundingBox,
                e = 999999;
            if (t.x = e, t.xMax = -e, t.y = e, t.yMax = -e, this.calculateBoundingBox(this.itemsData, t), t.width = t.xMax < t.x ? 0 : t.xMax - t.x, t.height = t.yMax < t.y ? 0 : t.yMax - t.y, this.currentBoxContains(t)) return;
            var r = !1;
            this.currentBBox.w !== t.width && (this.currentBBox.w = t.width, this.shapeCont.setAttribute("width", t.width), r = !0), this.currentBBox.h !== t.height && (this.currentBBox.h = t.height, this.shapeCont.setAttribute("height", t.height), r = !0), (r || this.currentBBox.x !== t.x || this.currentBBox.y !== t.y) && (this.currentBBox.w = t.width, this.currentBBox.h = t.height, this.currentBBox.x = t.x, this.currentBBox.y = t.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), this.shapeCont.style.transform = this.shapeCont.style.webkitTransform = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)")
        }
    }, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement), HTextElement.prototype.createContent = function() {
        if (this.isMasked = this.checkMasks(), this.isMasked) {
            this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH);
            var t = createNS("g");
            this.maskedElement.appendChild(t), this.innerElem = t
        } else this.renderType = "html", this.innerElem = this.layerElement;
        this.checkParenting()
    }, HTextElement.prototype.buildNewText = function() {
        var t = this.textProperty.currentData;
        this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
        var e = this.innerElem.style;
        e.color = e.fill = t.fc ? this.buildColor(t.fc) : "rgba(0,0,0,0)", t.sc && (e.stroke = this.buildColor(t.sc), e.strokeWidth = t.sw + "px");
        var r, i, s = this.globalData.fontManager.getFontByName(t.f);
        if (!this.globalData.fontManager.chars)
            if (e.fontSize = t.finalSize + "px", e.lineHeight = t.finalSize + "px", s.fClass) this.innerElem.className = s.fClass;
            else {
                e.fontFamily = s.fFamily;
                var a = t.fWeight,
                    n = t.fStyle;
                e.fontStyle = n, e.fontWeight = a
            }
        var o, h, l, p = t.l;
        i = p.length;
        var m, f = this.mHelper,
            c = "",
            d = 0;
        for (r = 0; r < i; r += 1) {
            if (this.globalData.fontManager.chars ? (this.textPaths[d] ? o = this.textPaths[d] : ((o = createNS("path")).setAttribute("stroke-linecap", "butt"), o.setAttribute("stroke-linejoin", "round"), o.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[d] ? l = (h = this.textSpans[d]).children[0] : ((h = createTag("div")).style.lineHeight = 0, (l = createNS("svg")).appendChild(o), styleDiv(h)))) : this.isMasked ? o = this.textPaths[d] ? this.textPaths[d] : createNS("text") : this.textSpans[d] ? (h = this.textSpans[d], o = this.textPaths[d]) : (styleDiv(h = createTag("span")), styleDiv(o = createTag("span")), h.appendChild(o)), this.globalData.fontManager.chars) {
                var u, y = this.globalData.fontManager.getCharData(t.finalText[r], s.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily);
                if (u = y ? y.data : null, f.reset(), u && u.shapes && (m = u.shapes[0].it, f.scale(t.finalSize / 100, t.finalSize / 100), c = this.createPathShape(f, m), o.setAttribute("d", c)), this.isMasked) this.innerElem.appendChild(o);
                else {
                    if (this.innerElem.appendChild(h), u && u.shapes) {
                        document.body.appendChild(l);
                        var g = l.getBBox();
                        l.setAttribute("width", g.width + 2), l.setAttribute("height", g.height + 2), l.setAttribute("viewBox", g.x - 1 + " " + (g.y - 1) + " " + (g.width + 2) + " " + (g.height + 2)), l.style.transform = l.style.webkitTransform = "translate(" + (g.x - 1) + "px," + (g.y - 1) + "px)", p[r].yOffset = g.y - 1
                    } else l.setAttribute("width", 1), l.setAttribute("height", 1);
                    h.appendChild(l)
                }
            } else o.textContent = p[r].val, o.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked ? this.innerElem.appendChild(o) : (this.innerElem.appendChild(h), o.style.transform = o.style.webkitTransform = "translate3d(0," + -t.finalSize / 1.2 + "px,0)");
            this.isMasked ? this.textSpans[d] = o : this.textSpans[d] = h, this.textSpans[d].style.display = "block", this.textPaths[d] = o, d += 1
        }
        for (; d < this.textSpans.length;) this.textSpans[d].style.display = "none", d += 1
    }, HTextElement.prototype.renderInnerContent = function() {
        if (this.data.singleShape) {
            if (!this._isFirstFrame && !this.lettersChangedFlag) return;
            this.isMasked && this.finalTransform._matMdf && (this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), this.svgElement.style.transform = this.svgElement.style.webkitTransform = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)")
        }
        if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
            var t, e, r, i, s, a = 0,
                n = this.textAnimator.renderedLetters,
                o = this.textProperty.currentData.l;
            for (e = o.length, t = 0; t < e; t += 1) o[t].n ? a += 1 : (i = this.textSpans[t], s = this.textPaths[t], r = n[a], a += 1, r._mdf.m && (this.isMasked ? i.setAttribute("transform", r.m) : i.style.transform = i.style.webkitTransform = r.m), i.style.opacity = r.o, r.sw && r._mdf.sw && s.setAttribute("stroke-width", r.sw), r.sc && r._mdf.sc && s.setAttribute("stroke", r.sc), r.fc && r._mdf.fc && (s.setAttribute("fill", r.fc), s.style.color = r.fc));
            if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
                var h = this.innerElem.getBBox();
                this.currentBBox.w !== h.width && (this.currentBBox.w = h.width, this.svgElement.setAttribute("width", h.width)), this.currentBBox.h !== h.height && (this.currentBBox.h = h.height, this.svgElement.setAttribute("height", h.height));
                this.currentBBox.w === h.width + 2 && this.currentBBox.h === h.height + 2 && this.currentBBox.x === h.x - 1 && this.currentBBox.y === h.y - 1 || (this.currentBBox.w = h.width + 2, this.currentBBox.h = h.height + 2, this.currentBBox.x = h.x - 1, this.currentBBox.y = h.y - 1, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), this.svgElement.style.transform = this.svgElement.style.webkitTransform = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)")
            }
        }
    }, extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement), HImageElement.prototype.createContent = function() {
        var t = this.globalData.getAssetsPath(this.assetData),
            e = new Image;
        this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(e), e.src = t, this.data.ln && this.baseElement.setAttribute("id", this.data.ln)
    }, extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement), HCameraElement.prototype.setup = function() {
        var t, e, r = this.comp.threeDElements.length;
        for (t = 0; t < r; t += 1) "3d" === (e = this.comp.threeDElements[t]).type && (e.perspectiveElem.style.perspective = e.perspectiveElem.style.webkitPerspective = this.pe.v + "px", e.container.style.transformOrigin = e.container.style.mozTransformOrigin = e.container.style.webkitTransformOrigin = "0px 0px 0px", e.perspectiveElem.style.transform = e.perspectiveElem.style.webkitTransform = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)")
    }, HCameraElement.prototype.createElements = function() {}, HCameraElement.prototype.hide = function() {}, HCameraElement.prototype.renderFrame = function() {
        var t, e, r = this._isFirstFrame;
        if (this.hierarchy)
            for (e = this.hierarchy.length, t = 0; t < e; t += 1) r = this.hierarchy[t].finalTransform.mProp._mdf || r;
        if (r || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
            if (this.mat.reset(), this.hierarchy)
                for (t = e = this.hierarchy.length - 1; 0 <= t; t -= 1) {
                    var i = this.hierarchy[t].finalTransform.mProp;
                    this.mat.translate(-i.p.v[0], -i.p.v[1], i.p.v[2]), this.mat.rotateX(-i.or.v[0]).rotateY(-i.or.v[1]).rotateZ(i.or.v[2]), this.mat.rotateX(-i.rx.v).rotateY(-i.ry.v).rotateZ(i.rz.v), this.mat.scale(1 / i.s.v[0], 1 / i.s.v[1], 1 / i.s.v[2]), this.mat.translate(i.a.v[0], i.a.v[1], i.a.v[2])
                }
            if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
                var s;
                s = this.p ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
                var a = Math.sqrt(Math.pow(s[0], 2) + Math.pow(s[1], 2) + Math.pow(s[2], 2)),
                    n = [s[0] / a, s[1] / a, s[2] / a],
                    o = Math.sqrt(n[2] * n[2] + n[0] * n[0]),
                    h = Math.atan2(n[1], o),
                    l = Math.atan2(n[0], -n[2]);
                this.mat.rotateY(l).rotateX(-h)
            }
            this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
            var p = !this._prevMat.equals(this.mat);
            if ((p || this.pe._mdf) && this.comp.threeDElements) {
                var m;
                for (e = this.comp.threeDElements.length, t = 0; t < e; t += 1) "3d" === (m = this.comp.threeDElements[t]).type && (p && (m.container.style.transform = m.container.style.webkitTransform = this.mat.toCSS()), this.pe._mdf && (m.perspectiveElem.style.perspective = m.perspectiveElem.style.webkitPerspective = this.pe.v + "px"));
                this.mat.clone(this._prevMat)
            }
        }
        this._isFirstFrame = !1
    }, HCameraElement.prototype.prepareFrame = function(t) {
        this.prepareProperties(t, !0)
    }, HCameraElement.prototype.destroy = function() {}, HCameraElement.prototype.getBaseElement = function() {
        return null
    }, HEffects.prototype.renderFrame = function() {};
    var animationManager = function() {
            var t = {},
                s = [],
                i = 0,
                a = 0,
                n = 0,
                o = !0,
                h = !1;

            function r(t) {
                for (var e = 0, r = t.target; e < a;) s[e].animation === r && (s.splice(e, 1), e -= 1, a -= 1, r.isPaused || m()), e += 1
            }

            function l(t, e) {
                if (!t) return null;
                for (var r = 0; r < a;) {
                    if (s[r].elem == t && null !== s[r].elem) return s[r].animation;
                    r += 1
                }
                var i = new AnimationItem;
                return f(i, t), i.setData(t, e), i
            }

            function p() {
                n += 1, d()
            }

            function m() {
                n -= 1
            }

            function f(t, e) {
                t.addEventListener("destroy", r), t.addEventListener("_active", p), t.addEventListener("_idle", m), s.push({
                    elem: e,
                    animation: t
                }), a += 1
            }

            function c(t) {
                var e, r = t - i;
                for (e = 0; e < a; e += 1) s[e].animation.advanceTime(r);
                i = t, n && !h ? window.requestAnimationFrame(c) : o = !0
            }

            function e(t) {
                i = t, window.requestAnimationFrame(c)
            }

            function d() {
                !h && n && o && (window.requestAnimationFrame(e), o = !1)
            }
            return t.registerAnimation = l, t.loadAnimation = function(t) {
                var e = new AnimationItem;
                return f(e, null), e.setParams(t), e
            }, t.setSpeed = function(t, e) {
                var r;
                for (r = 0; r < a; r += 1) s[r].animation.setSpeed(t, e)
            }, t.setDirection = function(t, e) {
                var r;
                for (r = 0; r < a; r += 1) s[r].animation.setDirection(t, e)
            }, t.play = function(t) {
                var e;
                for (e = 0; e < a; e += 1) s[e].animation.play(t)
            }, t.pause = function(t) {
                var e;
                for (e = 0; e < a; e += 1) s[e].animation.pause(t)
            }, t.stop = function(t) {
                var e;
                for (e = 0; e < a; e += 1) s[e].animation.stop(t)
            }, t.togglePause = function(t) {
                var e;
                for (e = 0; e < a; e += 1) s[e].animation.togglePause(t)
            }, t.searchAnimations = function(t, e, r) {
                var i, s = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))),
                    a = s.length;
                for (i = 0; i < a; i += 1) r && s[i].setAttribute("data-bm-type", r), l(s[i], t);
                if (e && 0 === a) {
                    r || (r = "svg");
                    var n = document.getElementsByTagName("body")[0];
                    n.innerHTML = "";
                    var o = createTag("div");
                    o.style.width = "100%", o.style.height = "100%", o.setAttribute("data-bm-type", r), n.appendChild(o), l(o, t)
                }
            }, t.resize = function() {
                var t;
                for (t = 0; t < a; t += 1) s[t].animation.resize()
            }, t.goToAndStop = function(t, e, r) {
                var i;
                for (i = 0; i < a; i += 1) s[i].animation.goToAndStop(t, e, r)
            }, t.destroy = function(t) {
                var e;
                for (e = a - 1; 0 <= e; e -= 1) s[e].animation.destroy(t)
            }, t.freeze = function() {
                h = !0
            }, t.unfreeze = function() {
                h = !1, d()
            }, t.getRegisteredAnimations = function() {
                var t, e = s.length,
                    r = [];
                for (t = 0; t < e; t += 1) r.push(s[t].animation);
                return r
            }, t
        }(),
        AnimationItem = function() {
            this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.subframeEnabled = subframeEnabled, this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader
        };
    extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function(t) {
        t.context && (this.context = t.context), (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
        var e = t.animType ? t.animType : t.renderer ? t.renderer : "svg";
        switch (e) {
            case "canvas":
                this.renderer = new CanvasRenderer(this, t.rendererSettings);
                break;
            case "svg":
                this.renderer = new SVGRenderer(this, t.rendererSettings);
                break;
            default:
                this.renderer = new HybridRenderer(this, t.rendererSettings)
        }
        this.renderer.setProjectInterface(this.projectInterface), this.animType = e, "" === t.loop || null === t.loop || (!1 === t.loop ? this.loop = !1 : !0 === t.loop ? this.loop = !0 : this.loop = parseInt(t.loop)), this.autoplay = !("autoplay" in t) || t.autoplay, this.name = t.name ? t.name : "", this.autoloadSegments = !t.hasOwnProperty("autoloadSegments") || t.autoloadSegments, this.assetsPath = t.assetsPath, t.animationData ? this.configAnimation(t.animationData) : t.path && (-1 !== t.path.lastIndexOf("\\") ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), assetLoader.load(t.path, this.configAnimation.bind(this), function() {
            this.trigger("data_failed")
        }.bind(this)))
    }, AnimationItem.prototype.setData = function(t, e) {
        var r = {
                wrapper: t,
                animationData: e ? "object" == typeof e ? e : JSON.parse(e) : null
            },
            i = t.attributes;
        r.path = i.getNamedItem("data-animation-path") ? i.getNamedItem("data-animation-path").value : i.getNamedItem("data-bm-path") ? i.getNamedItem("data-bm-path").value : i.getNamedItem("bm-path") ? i.getNamedItem("bm-path").value : "", r.animType = i.getNamedItem("data-anim-type") ? i.getNamedItem("data-anim-type").value : i.getNamedItem("data-bm-type") ? i.getNamedItem("data-bm-type").value : i.getNamedItem("bm-type") ? i.getNamedItem("bm-type").value : i.getNamedItem("data-bm-renderer") ? i.getNamedItem("data-bm-renderer").value : i.getNamedItem("bm-renderer") ? i.getNamedItem("bm-renderer").value : "canvas";
        var s = i.getNamedItem("data-anim-loop") ? i.getNamedItem("data-anim-loop").value : i.getNamedItem("data-bm-loop") ? i.getNamedItem("data-bm-loop").value : i.getNamedItem("bm-loop") ? i.getNamedItem("bm-loop").value : "";
        "" === s || (r.loop = "false" !== s && ("true" === s || parseInt(s)));
        var a = i.getNamedItem("data-anim-autoplay") ? i.getNamedItem("data-anim-autoplay").value : i.getNamedItem("data-bm-autoplay") ? i.getNamedItem("data-bm-autoplay").value : !i.getNamedItem("bm-autoplay") || i.getNamedItem("bm-autoplay").value;
        r.autoplay = "false" !== a, r.name = i.getNamedItem("data-name") ? i.getNamedItem("data-name").value : i.getNamedItem("data-bm-name") ? i.getNamedItem("data-bm-name").value : i.getNamedItem("bm-name") ? i.getNamedItem("bm-name").value : "", "false" === (i.getNamedItem("data-anim-prerender") ? i.getNamedItem("data-anim-prerender").value : i.getNamedItem("data-bm-prerender") ? i.getNamedItem("data-bm-prerender").value : i.getNamedItem("bm-prerender") ? i.getNamedItem("bm-prerender").value : "") && (r.prerender = !1), this.setParams(r)
    }, AnimationItem.prototype.includeLayers = function(t) {
        t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));
        var e, r, i = this.animationData.layers,
            s = i.length,
            a = t.layers,
            n = a.length;
        for (r = 0; r < n; r += 1)
            for (e = 0; e < s;) {
                if (i[e].id == a[r].id) {
                    i[e] = a[r];
                    break
                }
                e += 1
            }
        if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets)
            for (s = t.assets.length, e = 0; e < s; e += 1) this.animationData.assets.push(t.assets[e]);
        this.animationData.__complete = !1, dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), this.renderer.includeLayers(t.layers), expressionsPlugin && expressionsPlugin.initExpressions(this), this.loadNextSegment()
    }, AnimationItem.prototype.loadNextSegment = function() {
        var t = this.animationData.segments;
        if (!t || 0 === t.length || !this.autoloadSegments) return this.trigger("data_ready"), void(this.timeCompleted = this.totalFrames);
        var e = t.shift();
        this.timeCompleted = e.time * this.frameRate;
        var r = this.path + this.fileName + "_" + this.segmentPos + ".json";
        this.segmentPos += 1, assetLoader.load(r, this.includeLayers.bind(this), function() {
            this.trigger("data_failed")
        }.bind(this))
    }, AnimationItem.prototype.loadSegments = function() {
        this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment()
    }, AnimationItem.prototype.imagesLoaded = function() {
        this.trigger("loaded_images"), this.checkLoaded()
    }, AnimationItem.prototype.preloadImages = function() {
        this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this))
    }, AnimationItem.prototype.configAnimation = function(t) {
        if (this.renderer) try {
            this.animationData = t, this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.renderer.configAnimation(t), t.assets || (t.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.firstFrame = Math.round(this.animationData.ip), this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(t.assets), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded()
        } catch (t) {
            this.triggerConfigError(t)
        }
    }, AnimationItem.prototype.waitForFontsLoaded = function() {
        this.renderer && (this.renderer.globalData.fontManager.loaded() ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20))
    }, AnimationItem.prototype.checkLoaded = function() {
        this.isLoaded || !this.renderer.globalData.fontManager.loaded() || !this.imagePreloader.loaded() && "canvas" === this.renderer.rendererType || (this.isLoaded = !0, dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), expressionsPlugin && expressionsPlugin.initExpressions(this), this.renderer.initItems(), setTimeout(function() {
            this.trigger("DOMLoaded")
        }.bind(this), 0), this.gotoFrame(), this.autoplay && this.play())
    }, AnimationItem.prototype.resize = function() {
        this.renderer.updateContainerSize()
    }, AnimationItem.prototype.setSubframe = function(t) {
        this.subframeEnabled = !!t
    }, AnimationItem.prototype.gotoFrame = function() {
        this.currentFrame = this.subframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame()
    }, AnimationItem.prototype.renderFrame = function() {
        if (!1 !== this.isLoaded) try {
            this.renderer.renderFrame(this.currentFrame + this.firstFrame)
        } catch (t) {
            this.triggerRenderFrameError(t)
        }
    }, AnimationItem.prototype.play = function(t) {
        t && this.name != t || !0 === this.isPaused && (this.isPaused = !1, this._idle && (this._idle = !1, this.trigger("_active")))
    }, AnimationItem.prototype.pause = function(t) {
        t && this.name != t || !1 === this.isPaused && (this.isPaused = !0, this._idle = !0, this.trigger("_idle"))
    }, AnimationItem.prototype.togglePause = function(t) {
        t && this.name != t || (!0 === this.isPaused ? this.play() : this.pause())
    }, AnimationItem.prototype.stop = function(t) {
        t && this.name != t || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0))
    }, AnimationItem.prototype.goToAndStop = function(t, e, r) {
        r && this.name != r || (e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier), this.pause())
    }, AnimationItem.prototype.goToAndPlay = function(t, e, r) {
        this.goToAndStop(t, e, r), this.play()
    }, AnimationItem.prototype.advanceTime = function(t) {
        if (!0 !== this.isPaused && !1 !== this.isLoaded) {
            var e = this.currentRawFrame + t * this.frameModifier,
                r = !1;
            e >= this.totalFrames - 1 && 0 < this.frameModifier ? this.loop && this.playCount !== this.loop ? e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (r = !0, e = this.totalFrames - 1) : e < 0 ? this.checkSegments(e % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && !0 !== this.loop ? (r = !0, e = 0) : (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(e), r && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete"))
        }
    }, AnimationItem.prototype.adjustSegment = function(t, e) {
        this.playCount = 0, t[1] < t[0] ? (0 < this.frameModifier && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.timeCompleted = this.totalFrames = t[0] - t[1], this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.timeCompleted = this.totalFrames = t[1] - t[0], this.firstFrame = t[0], this.setCurrentRawFrameValue(.001 + e)), this.trigger("segmentStart")
    }, AnimationItem.prototype.setSegment = function(t, e) {
        var r = -1;
        this.isPaused && (this.currentRawFrame + this.firstFrame < t ? r = t : this.currentRawFrame + this.firstFrame > e && (r = e - t)), this.firstFrame = t, this.timeCompleted = this.totalFrames = e - t, -1 !== r && this.goToAndStop(r, !0)
    }, AnimationItem.prototype.playSegments = function(t, e) {
        if (e && (this.segments.length = 0), "object" == typeof t[0]) {
            var r, i = t.length;
            for (r = 0; r < i; r += 1) this.segments.push(t[r])
        } else this.segments.push(t);
        this.segments.length && e && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play()
    }, AnimationItem.prototype.resetSegments = function(t) {
        this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), t && this.checkSegments(0)
    }, AnimationItem.prototype.checkSegments = function(t) {
        return !!this.segments.length && (this.adjustSegment(this.segments.shift(), t), !0)
    }, AnimationItem.prototype.destroy = function(t) {
        t && this.name != t || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = this.onLoopComplete = this.onComplete = this.onSegmentStart = this.onDestroy = null, this.renderer = null)
    }, AnimationItem.prototype.setCurrentRawFrameValue = function(t) {
        this.currentRawFrame = t, this.gotoFrame()
    }, AnimationItem.prototype.setSpeed = function(t) {
        this.playSpeed = t, this.updaFrameModifier()
    }, AnimationItem.prototype.setDirection = function(t) {
        this.playDirection = t < 0 ? -1 : 1, this.updaFrameModifier()
    }, AnimationItem.prototype.updaFrameModifier = function() {
        this.frameModifier = this.frameMult * this.playSpeed * this.playDirection
    }, AnimationItem.prototype.getPath = function() {
        return this.path
    }, AnimationItem.prototype.getAssetsPath = function(t) {
        var e = "";
        if (t.e) e = t.p;
        else if (this.assetsPath) {
            var r = t.p; - 1 !== r.indexOf("images/") && (r = r.split("/")[1]), e = this.assetsPath + r
        } else e = this.path, e += t.u ? t.u : "", e += t.p;
        return e
    }, AnimationItem.prototype.getAssetData = function(t) {
        for (var e = 0, r = this.assets.length; e < r;) {
            if (t == this.assets[e].id) return this.assets[e];
            e += 1
        }
    }, AnimationItem.prototype.hide = function() {
        this.renderer.hide()
    }, AnimationItem.prototype.show = function() {
        this.renderer.show()
    }, AnimationItem.prototype.getDuration = function(t) {
        return t ? this.totalFrames : this.totalFrames / this.frameRate
    }, AnimationItem.prototype.trigger = function(t) {
        if (this._cbs && this._cbs[t]) switch (t) {
            case "enterFrame":
                this.triggerEvent(t, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameModifier));
                break;
            case "loopComplete":
                this.triggerEvent(t, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult));
                break;
            case "complete":
                this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult));
                break;
            case "segmentStart":
                this.triggerEvent(t, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames));
                break;
            case "destroy":
                this.triggerEvent(t, new BMDestroyEvent(t, this));
                break;
            default:
                this.triggerEvent(t)
        }
        "enterFrame" === t && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult)), "loopComplete" === t && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult)), "complete" === t && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(t, this.frameMult)), "segmentStart" === t && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)), "destroy" === t && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t, this))
    }, AnimationItem.prototype.triggerRenderFrameError = function(t) {
        var e = new BMRenderFrameErrorEvent(t, this.currentFrame);
        this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
    }, AnimationItem.prototype.triggerConfigError = function(t) {
        var e = new BMConfigErrorEvent(t, this.currentFrame);
        this.triggerEvent("error", e), this.onError && this.onError.call(this, e)
    };
    var Expressions = (JW = {}, JW.initExpressions = function(t) {
            var e = 0,
                r = [];

            function i() {
                var t, e = r.length;
                for (t = 0; t < e; t += 1) r[t].release();
                r.length = 0
            }
            t.renderer.compInterface = CompExpressionInterface(t.renderer), t.renderer.globalData.projectInterface.registerComposition(t.renderer), t.renderer.globalData.pushExpression = function() {
                e += 1
            }, t.renderer.globalData.popExpression = function() {
                0 == (e -= 1) && i()
            }, t.renderer.globalData.registerExpressionProperty = function(t) {
                -1 === r.indexOf(t) && r.push(t)
            }
        }, JW),
        JW;
    expressionsPlugin = Expressions;
    var ExpressionManager = function() {
            var ob = {},
                Math = BMMath,
                window = null,
                document = null;

            function $bm_isInstanceOfArray(t) {
                return t.constructor === Array || t.constructor === Float32Array
            }

            function isNumerable(t, e) {
                return "number" === t || "boolean" === t || "string" === t || e instanceof Number
            }

            function $bm_neg(t) {
                var e = typeof t;
                if ("number" === e || "boolean" === e || t instanceof Number) return -t;
                if ($bm_isInstanceOfArray(t)) {
                    var r, i = t.length,
                        s = [];
                    for (r = 0; r < i; r += 1) s[r] = -t[r];
                    return s
                }
                return t.propType ? t.v : void 0
            }
            var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get,
                easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get,
                easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;

            function sum(t, e) {
                var r = typeof t,
                    i = typeof e;
                if ("string" === r || "string" === i) return t + e;
                if (isNumerable(r, t) && isNumerable(i, e)) return t + e;
                if ($bm_isInstanceOfArray(t) && isNumerable(i, e)) return (t = t.slice(0))[0] = t[0] + e, t;
                if (isNumerable(r, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t + e[0], e;
                if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                    for (var s = 0, a = t.length, n = e.length, o = []; s < a || s < n;)("number" == typeof t[s] || t[s] instanceof Number) && ("number" == typeof e[s] || e[s] instanceof Number) ? o[s] = t[s] + e[s] : o[s] = void 0 === e[s] ? t[s] : t[s] || e[s], s += 1;
                    return o
                }
                return 0
            }
            var add = sum;

            function sub(t, e) {
                var r = typeof t,
                    i = typeof e;
                if (isNumerable(r, t) && isNumerable(i, e)) return "string" === r && (t = parseInt(t)), "string" === i && (e = parseInt(e)), t - e;
                if ($bm_isInstanceOfArray(t) && isNumerable(i, e)) return (t = t.slice(0))[0] = t[0] - e, t;
                if (isNumerable(r, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t - e[0], e;
                if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                    for (var s = 0, a = t.length, n = e.length, o = []; s < a || s < n;)("number" == typeof t[s] || t[s] instanceof Number) && ("number" == typeof e[s] || e[s] instanceof Number) ? o[s] = t[s] - e[s] : o[s] = void 0 === e[s] ? t[s] : t[s] || e[s], s += 1;
                    return o
                }
                return 0
            }

            function mul(t, e) {
                var r, i, s, a = typeof t,
                    n = typeof e;
                if (isNumerable(a, t) && isNumerable(n, e)) return t * e;
                if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) {
                    for (s = t.length, r = createTypedArray("float32", s), i = 0; i < s; i += 1) r[i] = t[i] * e;
                    return r
                }
                if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) {
                    for (s = e.length, r = createTypedArray("float32", s), i = 0; i < s; i += 1) r[i] = t * e[i];
                    return r
                }
                return 0
            }

            function div(t, e) {
                var r, i, s, a = typeof t,
                    n = typeof e;
                if (isNumerable(a, t) && isNumerable(n, e)) return t / e;
                if ($bm_isInstanceOfArray(t) && isNumerable(n, e)) {
                    for (s = t.length, r = createTypedArray("float32", s), i = 0; i < s; i += 1) r[i] = t[i] / e;
                    return r
                }
                if (isNumerable(a, t) && $bm_isInstanceOfArray(e)) {
                    for (s = e.length, r = createTypedArray("float32", s), i = 0; i < s; i += 1) r[i] = t / e[i];
                    return r
                }
                return 0
            }

            function mod(t, e) {
                return "string" == typeof t && (t = parseInt(t)), "string" == typeof e && (e = parseInt(e)), t % e
            }
            var $bm_sum = sum,
                $bm_sub = sub,
                $bm_mul = mul,
                $bm_div = div,
                $bm_mod = mod;

            function clamp(t, e, r) {
                if (r < e) {
                    var i = r;
                    r = e, e = i
                }
                return Math.min(Math.max(t, e), r)
            }

            function radiansToDegrees(t) {
                return t / degToRads
            }
            var radians_to_degrees = radiansToDegrees;

            function degreesToRadians(t) {
                return t * degToRads
            }
            var degrees_to_radians = radiansToDegrees,
                helperLengthArray = [0, 0, 0, 0, 0, 0];

            function length(t, e) {
                if ("number" == typeof t || t instanceof Number) return e = e || 0, Math.abs(t - e);
                e || (e = helperLengthArray);
                var r, i = Math.min(t.length, e.length),
                    s = 0;
                for (r = 0; r < i; r += 1) s += Math.pow(e[r] - t[r], 2);
                return Math.sqrt(s)
            }

            function normalize(t) {
                return div(t, length(t))
            }

            function rgbToHsl(t) {
                var e, r, i = t[0],
                    s = t[1],
                    a = t[2],
                    n = Math.max(i, s, a),
                    o = Math.min(i, s, a),
                    h = (n + o) / 2;
                if (n == o) e = r = 0;
                else {
                    var l = n - o;
                    switch (r = .5 < h ? l / (2 - n - o) : l / (n + o), n) {
                        case i:
                            e = (s - a) / l + (s < a ? 6 : 0);
                            break;
                        case s:
                            e = (a - i) / l + 2;
                            break;
                        case a:
                            e = (i - s) / l + 4
                    }
                    e /= 6
                }
                return [e, r, h, t[3]]
            }

            function hue2rgb(t, e, r) {
                return r < 0 && (r += 1), 1 < r && (r -= 1), r < 1 / 6 ? t + 6 * (e - t) * r : r < .5 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t
            }

            function hslToRgb(t) {
                var e, r, i, s = t[0],
                    a = t[1],
                    n = t[2];
                if (0 === a) e = r = i = n;
                else {
                    var o = n < .5 ? n * (1 + a) : n + a - n * a,
                        h = 2 * n - o;
                    e = hue2rgb(h, o, s + 1 / 3), r = hue2rgb(h, o, s), i = hue2rgb(h, o, s - 1 / 3)
                }
                return [e, r, i, t[3]]
            }

            function linear(t, e, r, i, s) {
                if (void 0 !== i && void 0 !== s || (i = e, s = r, e = 0, r = 1), r < e) {
                    var a = r;
                    r = e, e = a
                }
                if (t <= e) return i;
                if (r <= t) return s;
                var n = r === e ? 0 : (t - e) / (r - e);
                if (!i.length) return i + (s - i) * n;
                var o, h = i.length,
                    l = createTypedArray("float32", h);
                for (o = 0; o < h; o += 1) l[o] = i[o] + (s[o] - i[o]) * n;
                return l
            }

            function random(t, e) {
                if (void 0 === e && (void 0 === t ? (t = 0, e = 1) : (e = t, t = void 0)), e.length) {
                    var r, i = e.length;
                    t || (t = createTypedArray("float32", i));
                    var s = createTypedArray("float32", i),
                        a = BMMath.random();
                    for (r = 0; r < i; r += 1) s[r] = t[r] + a * (e[r] - t[r]);
                    return s
                }
                return void 0 === t && (t = 0), t + BMMath.random() * (e - t)
            }

            function createPath(t, e, r, i) {
                var s, a = t.length,
                    n = shape_pool.newElement();
                n.setPathData(!!i, a);
                var o, h, l = [0, 0];
                for (s = 0; s < a; s += 1) o = e && e[s] ? e[s] : l, h = r && r[s] ? r[s] : l, n.setTripleAt(t[s][0], t[s][1], h[0] + t[s][0], h[1] + t[s][1], o[0] + t[s][0], o[1] + t[s][1], s, !0);
                return n
            }

            function initiateExpression(elem, data, property) {
                var val = data.x,
                    needsVelocity = /velocity(?![\w\d])/.test(val),
                    _needsRandom = -1 !== val.indexOf("random"),
                    elemType = elem.data.ty,
                    transform, $bm_transform, content, effect, thisProperty = property;
                thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", {
                    get: function() {
                        return thisProperty.v
                    }
                }), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0;
                var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
                    outPoint = elem.data.op / elem.comp.globalData.frameRate,
                    width = elem.data.sw ? elem.data.sw : 0,
                    height = elem.data.sh ? elem.data.sh : 0,
                    name = elem.data.nm,
                    loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, __expression_functions = [],
                    scoped_bm_rt;
                if (data.xf) {
                    var i, len = data.xf.length;
                    for (i = 0; i < len; i += 1) __expression_functions[i] = eval("(function(){ return " + data.xf[i] + "}())")
                }
                var expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0],
                    numKeys = property.kf ? data.k.length : 0,
                    active = !this.data || !0 !== this.data.hd,
                    wiggle = function(t, e) {
                        var r, i, s = this.pv.length ? this.pv.length : 1,
                            a = createTypedArray("float32", s);
                        var n = Math.floor(5 * time);
                        for (i = r = 0; r < n;) {
                            for (i = 0; i < s; i += 1) a[i] += -e + 2 * e * BMMath.random();
                            r += 1
                        }
                        var o = 5 * time,
                            h = o - Math.floor(o),
                            l = createTypedArray("float32", s);
                        if (1 < s) {
                            for (i = 0; i < s; i += 1) l[i] = this.pv[i] + a[i] + (-e + 2 * e * BMMath.random()) * h;
                            return l
                        }
                        return this.pv + a[0] + (-e + 2 * e * BMMath.random()) * h
                    }.bind(this);

                function loopInDuration(t, e) {
                    return loopIn(t, e, !0)
                }

                function loopOutDuration(t, e) {
                    return loopOut(t, e, !0)
                }
                thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)), this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
                var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface),
                    time, velocity, value, text, textIndex, textTotal, selectorValue;

                function lookAt(t, e) {
                    var r = [e[0] - t[0], e[1] - t[1], e[2] - t[2]],
                        i = Math.atan2(r[0], Math.sqrt(r[1] * r[1] + r[2] * r[2])) / degToRads;
                    return [-Math.atan2(r[1], r[2]) / degToRads, i, 0]
                }

                function easeOut(t, e, r, i, s) {
                    return applyEase(easeOutBez, t, e, r, i, s)
                }

                function easeIn(t, e, r, i, s) {
                    return applyEase(easeInBez, t, e, r, i, s)
                }

                function ease(t, e, r, i, s) {
                    return applyEase(easeInOutBez, t, e, r, i, s)
                }

                function applyEase(t, e, r, i, s, a) {
                    void 0 === s ? (s = r, a = i) : e = (e - r) / (i - r);
                    var n = t(e = 1 < e ? 1 : e < 0 ? 0 : e);
                    if ($bm_isInstanceOfArray(s)) {
                        var o, h = s.length,
                            l = createTypedArray("float32", h);
                        for (o = 0; o < h; o += 1) l[o] = (a[o] - s[o]) * n + s[o];
                        return l
                    }
                    return (a - s) * n + s
                }

                function nearestKey(t) {
                    var e, r, i, s = data.k.length;
                    if (data.k.length && "number" != typeof data.k[0])
                        if (r = -1, (t *= elem.comp.globalData.frameRate) < data.k[0].t) r = 1, i = data.k[0].t;
                        else {
                            for (e = 0; e < s - 1; e += 1) {
                                if (t === data.k[e].t) {
                                    r = e + 1, i = data.k[e].t;
                                    break
                                }
                                if (t > data.k[e].t && t < data.k[e + 1].t) {
                                    i = t - data.k[e].t > data.k[e + 1].t - t ? (r = e + 2, data.k[e + 1].t) : (r = e + 1, data.k[e].t);
                                    break
                                }
                            } - 1 === r && (r = e + 1, i = data.k[e].t)
                        }
                    else i = r = 0;
                    var a = {};
                    return a.index = r, a.time = i / elem.comp.globalData.frameRate, a
                }

                function key(t) {
                    var e, r, i;
                    if (!data.k.length || "number" == typeof data.k[0]) throw new Error("The property has no keyframe at index " + t);
                    t -= 1, e = {
                        time: data.k[t].t / elem.comp.globalData.frameRate,
                        value: []
                    };
                    var s = data.k[t].hasOwnProperty("s") ? data.k[t].s : data.k[t - 1].e;
                    for (i = s.length, r = 0; r < i; r += 1) e[r] = s[r], e.value[r] = s[r];
                    return e
                }

                function framesToTime(t, e) {
                    return e || (e = elem.comp.globalData.frameRate), t / e
                }

                function timeToFrames(t, e) {
                    return t || 0 === t || (t = time), e || (e = elem.comp.globalData.frameRate), t * e
                }

                function seedRandom(t) {
                    BMMath.seedrandom(randSeed + t)
                }

                function sourceRectAtTime() {
                    return elem.sourceRectAtTime()
                }

                function substring(t, e) {
                    return "string" == typeof value ? void 0 === e ? value.substring(t) : value.substring(t, e) : ""
                }

                function substr(t, e) {
                    return "string" == typeof value ? void 0 === e ? value.substr(t) : value.substr(t, e) : ""
                }

                function posterizeTime(t) {
                    time = 0 === t ? 0 : Math.floor(time * t) / t, value = valueAtTime(time)
                }
                var index = elem.data.ind,
                    hasParent = !(!elem.hierarchy || !elem.hierarchy.length),
                    parent, randSeed = Math.floor(1e6 * Math.random()),
                    globalData = elem.globalData;

                function executeExpression(t) {
                    return value = t, _needsRandom && seedRandom(randSeed), this.frameExpressionId === elem.globalData.frameId && "textSelector" !== this.propType ? value : ("textSelector" === this.propType && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), ($bm_transform = transform) && (anchorPoint = transform.anchorPoint)), 4 !== elemType || content || (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), (hasParent = !(!elem.hierarchy || !elem.hierarchy.length)) && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, "shape" === scoped_bm_rt.propType && (scoped_bm_rt = scoped_bm_rt.v), scoped_bm_rt)
                }
                return executeExpression
            }
            return ob.initiateExpression = initiateExpression, ob
        }(),
        expressionHelpers = {
            searchExpressions: function(t, e, r) {
                e.x && (r.k = !0, r.x = !0, r.initiateExpression = ExpressionManager.initiateExpression, r.effectsSequence.push(r.initiateExpression(t, e, r).bind(r)))
            },
            getSpeedAtTime: function(t) {
                var e = this.getValueAtTime(t),
                    r = this.getValueAtTime(t + -.01),
                    i = 0;
                if (e.length) {
                    var s;
                    for (s = 0; s < e.length; s += 1) i += Math.pow(r[s] - e[s], 2);
                    i = 100 * Math.sqrt(i)
                } else i = 0;
                return i
            },
            getVelocityAtTime: function(t) {
                if (void 0 !== this.vel) return this.vel;
                var e, r, i = this.getValueAtTime(t),
                    s = this.getValueAtTime(t + -.001);
                if (i.length)
                    for (e = createTypedArray("float32", i.length), r = 0; r < i.length; r += 1) e[r] = (s[r] - i[r]) / -.001;
                else e = (s - i) / -.001;
                return e
            },
            getValueAtTime: function(t) {
                return t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < t ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(t, this._cachingAtTime), this._cachingAtTime.lastFrame = t), this._cachingAtTime.value
            },
            getStaticValueAtTime: function() {
                return this.pv
            },
            setGroupProperty: function(t) {
                this.propertyGroup = t
            }
        };
    ! function() {
        function o(t, e, r) {
            if (!this.k || !this.keyframes) return this.pv;
            t = t ? t.toLowerCase() : "";
            var i, s, a, n, o, h = this.comp.renderedFrame,
                l = this.keyframes,
                p = l[l.length - 1].t;
            if (h <= p) return this.pv;
            if (r ? s = p - (i = e ? Math.abs(p - elem.comp.globalData.frameRate * e) : Math.max(0, p - this.elem.data.ip)) : ((!e || e > l.length - 1) && (e = l.length - 1), i = p - (s = l[l.length - 1 - e].t)), "pingpong" === t) {
                if (Math.floor((h - s) / i) % 2 != 0) return this.getValueAtTime((i - (h - s) % i + s) / this.comp.globalData.frameRate, 0)
            } else {
                if ("offset" === t) {
                    var m = this.getValueAtTime(s / this.comp.globalData.frameRate, 0),
                        f = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                        c = this.getValueAtTime(((h - s) % i + s) / this.comp.globalData.frameRate, 0),
                        d = Math.floor((h - s) / i);
                    if (this.pv.length) {
                        for (n = (o = new Array(m.length)).length, a = 0; a < n; a += 1) o[a] = (f[a] - m[a]) * d + c[a];
                        return o
                    }
                    return (f - m) * d + c
                }
                if ("continue" === t) {
                    var u = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                        y = this.getValueAtTime((p - .001) / this.comp.globalData.frameRate, 0);
                    if (this.pv.length) {
                        for (n = (o = new Array(u.length)).length, a = 0; a < n; a += 1) o[a] = u[a] + (u[a] - y[a]) * ((h - p) / this.comp.globalData.frameRate) / 5e-4;
                        return o
                    }
                    return u + (h - p) / .001 * (u - y)
                }
            }
            return this.getValueAtTime(((h - s) % i + s) / this.comp.globalData.frameRate, 0)
        }

        function h(t, e, r) {
            if (!this.k) return this.pv;
            t = t ? t.toLowerCase() : "";
            var i, s, a, n, o, h = this.comp.renderedFrame,
                l = this.keyframes,
                p = l[0].t;
            if (p <= h) return this.pv;
            if (r ? s = p + (i = e ? Math.abs(elem.comp.globalData.frameRate * e) : Math.max(0, this.elem.data.op - p)) : ((!e || e > l.length - 1) && (e = l.length - 1), i = (s = l[e].t) - p), "pingpong" === t) {
                if (Math.floor((p - h) / i) % 2 == 0) return this.getValueAtTime(((p - h) % i + p) / this.comp.globalData.frameRate, 0)
            } else {
                if ("offset" === t) {
                    var m = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                        f = this.getValueAtTime(s / this.comp.globalData.frameRate, 0),
                        c = this.getValueAtTime((i - (p - h) % i + p) / this.comp.globalData.frameRate, 0),
                        d = Math.floor((p - h) / i) + 1;
                    if (this.pv.length) {
                        for (n = (o = new Array(m.length)).length, a = 0; a < n; a += 1) o[a] = c[a] - (f[a] - m[a]) * d;
                        return o
                    }
                    return c - (f - m) * d
                }
                if ("continue" === t) {
                    var u = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                        y = this.getValueAtTime((p + .001) / this.comp.globalData.frameRate, 0);
                    if (this.pv.length) {
                        for (n = (o = new Array(u.length)).length, a = 0; a < n; a += 1) o[a] = u[a] + (u[a] - y[a]) * (p - h) / .001;
                        return o
                    }
                    return u + (u - y) * (p - h) / .001
                }
            }
            return this.getValueAtTime((i - (p - h) % i + p) / this.comp.globalData.frameRate, 0)
        }

        function l(t, e) {
            if (!this.k) return this.pv;
            if (t = .5 * (t || .4), (e = Math.floor(e || 5)) <= 1) return this.pv;
            var r, i, s = this.comp.renderedFrame / this.comp.globalData.frameRate,
                a = s - t,
                n = 1 < e ? (s + t - a) / (e - 1) : 1,
                o = 0,
                h = 0;
            for (r = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; o < e;) {
                if (i = this.getValueAtTime(a + o * n), this.pv.length)
                    for (h = 0; h < this.pv.length; h += 1) r[h] += i[h];
                else r += i;
                o += 1
            }
            if (this.pv.length)
                for (h = 0; h < this.pv.length; h += 1) r[h] /= e;
            else r /= e;
            return r
        }
        var s = TransformPropertyFactory.getTransformProperty;
        TransformPropertyFactory.getTransformProperty = function(t, e, r) {
            var i = s(t, e, r);
            return i.dynamicProperties.length ? i.getValueAtTime = function(t) {
                console.warn("Transform at time not supported")
            }.bind(i) : i.getValueAtTime = function(t) {}.bind(i), i.setGroupProperty = expressionHelpers.setGroupProperty, i
        };
        var p = PropertyFactory.getProp;
        PropertyFactory.getProp = function(t, e, r, i, s) {
            var a = p(t, e, r, i, s);
            a.kf ? a.getValueAtTime = expressionHelpers.getValueAtTime.bind(a) : a.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(a), a.setGroupProperty = expressionHelpers.setGroupProperty, a.loopOut = o, a.loopIn = h, a.smooth = l, a.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(a), a.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(a), a.numKeys = 1 === e.a ? e.k.length : 0, a.propertyIndex = e.ix;
            var n = 0;
            return 0 !== r && (n = createTypedArray("float32", 1 === e.a ? e.k[0].s.length : e.k.length)), a._cachingAtTime = {
                lastFrame: initialDefaultFrame,
                lastIndex: 0,
                value: n
            }, expressionHelpers.searchExpressions(t, e, a), a.k && s.addDynamicProperty(a), a
        };
        var t = ShapePropertyFactory.getConstructorFunction(),
            e = ShapePropertyFactory.getKeyframedConstructorFunction();

        function r() {}
        r.prototype = {
            vertices: function(t, e) {
                this.k && this.getValue();
                var r = this.v;
                void 0 !== e && (r = this.getValueAtTime(e, 0));
                var i, s = r._length,
                    a = r[t],
                    n = r.v,
                    o = createSizedArray(s);
                for (i = 0; i < s; i += 1) o[i] = "i" === t || "o" === t ? [a[i][0] - n[i][0], a[i][1] - n[i][1]] : [a[i][0], a[i][1]];
                return o
            },
            points: function(t) {
                return this.vertices("v", t)
            },
            inTangents: function(t) {
                return this.vertices("i", t)
            },
            outTangents: function(t) {
                return this.vertices("o", t)
            },
            isClosed: function() {
                return this.v.c
            },
            pointOnPath: function(t, e) {
                var r = this.v;
                void 0 !== e && (r = this.getValueAtTime(e, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(r));
                for (var i, s = this._segmentsLength, a = s.lengths, n = s.totalLength * t, o = 0, h = a.length, l = 0; o < h;) {
                    if (l + a[o].addedLength > n) {
                        var p = o,
                            m = r.c && o === h - 1 ? 0 : o + 1,
                            f = (n - l) / a[o].addedLength;
                        i = bez.getPointInSegment(r.v[p], r.v[m], r.o[p], r.i[m], f, a[o]);
                        break
                    }
                    l += a[o].addedLength, o += 1
                }
                return i || (i = r.c ? [r.v[0][0], r.v[0][1]] : [r.v[r._length - 1][0], r.v[r._length - 1][1]]), i
            },
            vectorOnPath: function(t, e, r) {
                t = 1 == t ? this.v.c ? 0 : .999 : t;
                var i = this.pointOnPath(t, e),
                    s = this.pointOnPath(t + .001, e),
                    a = s[0] - i[0],
                    n = s[1] - i[1],
                    o = Math.sqrt(Math.pow(a, 2) + Math.pow(n, 2));
                return 0 === o ? [0, 0] : "tangent" === r ? [a / o, n / o] : [-n / o, a / o]
            },
            tangentOnPath: function(t, e) {
                return this.vectorOnPath(t, e, "tangent")
            },
            normalOnPath: function(t, e) {
                return this.vectorOnPath(t, e, "normal")
            },
            setGroupProperty: expressionHelpers.setGroupProperty,
            getValueAtTime: expressionHelpers.getStaticValueAtTime
        }, extendPrototype([r], t), extendPrototype([r], e), e.prototype.getValueAtTime = function(t) {
            return this._cachingAtTime || (this._cachingAtTime = {
                shapeValue: shape_pool.clone(this.pv),
                lastIndex: 0,
                lastTime: initialDefaultFrame
            }), t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < t ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = t, this.interpolateShape(t, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue
        }, e.prototype.initiateExpression = ExpressionManager.initiateExpression;
        var n = ShapePropertyFactory.getShapeProp;
        ShapePropertyFactory.getShapeProp = function(t, e, r, i, s) {
            var a = n(t, e, r, i, s);
            return a.propertyIndex = e.ix, a.lock = !1, 3 === r ? expressionHelpers.searchExpressions(t, e.pt, a) : 4 === r && expressionHelpers.searchExpressions(t, e.ks, a), a.k && t.addDynamicProperty(a), a
        }
    }(), TextProperty.prototype.getExpressionValue = function(t, e) {
        var r = this.calculateExpression(e);
        if (t.t === r) return t;
        var i = {};
        return this.copyData(i, t), i.t = r.toString(), i.__complete = !1, i
    }, TextProperty.prototype.searchProperty = function() {
        var t = this.searchKeyframes(),
            e = this.searchExpressions();
        return this.kf = t || e, this.kf
    }, TextProperty.prototype.searchExpressions = function() {
        if (this.data.d.x) return this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0
    };
    var ShapeExpressionInterface = function() {
            function m(t, e, r) {
                var i, s = [],
                    a = t ? t.length : 0;
                for (i = 0; i < a; i += 1) "gr" == t[i].ty ? s.push(n(t[i], e[i], r)) : "fl" == t[i].ty ? s.push(o(t[i], e[i], r)) : "st" == t[i].ty ? s.push(h(t[i], e[i], r)) : "tm" == t[i].ty ? s.push(l(t[i], e[i], r)) : "tr" == t[i].ty || ("el" == t[i].ty ? s.push(p(t[i], e[i], r)) : "sr" == t[i].ty ? s.push(f(t[i], e[i], r)) : "sh" == t[i].ty ? s.push(y(t[i], e[i], r)) : "rc" == t[i].ty ? s.push(c(t[i], e[i], r)) : "rd" == t[i].ty ? s.push(d(t[i], e[i], r)) : "rp" == t[i].ty && s.push(u(t[i], e[i], r)));
                return s
            }

            function n(t, e, r) {
                var i = function(t) {
                    switch (t) {
                        case "ADBE Vectors Group":
                        case "Contents":
                        case 2:
                            return i.content;
                        default:
                            return i.transform
                    }
                };
                i.propertyGroup = function(t) {
                    return 1 === t ? i : r(t - 1)
                };
                var s, a, n, o, h, l = (s = t, a = e, n = i.propertyGroup, (h = function(t) {
                        for (var e = 0, r = o.length; e < r;) {
                            if (o[e]._name === t || o[e].mn === t || o[e].propertyIndex === t || o[e].ix === t || o[e].ind === t) return o[e];
                            e += 1
                        }
                        if ("number" == typeof t) return o[t - 1]
                    }).propertyGroup = function(t) {
                        return 1 === t ? h : n(t - 1)
                    }, o = m(s.it, a.it, h.propertyGroup), h.numProperties = o.length, h.propertyIndex = s.cix, h._name = s.nm, h),
                    p = function(e, t, r) {
                        function i(t) {
                            return 1 == t ? s : r(--t)
                        }
                        t.transform.mProps.o.setGroupProperty(i), t.transform.mProps.p.setGroupProperty(i), t.transform.mProps.a.setGroupProperty(i), t.transform.mProps.s.setGroupProperty(i), t.transform.mProps.r.setGroupProperty(i), t.transform.mProps.sk && (t.transform.mProps.sk.setGroupProperty(i), t.transform.mProps.sa.setGroupProperty(i));

                        function s(t) {
                            return e.a.ix === t || "Anchor Point" === t ? s.anchorPoint : e.o.ix === t || "Opacity" === t ? s.opacity : e.p.ix === t || "Position" === t ? s.position : e.r.ix === t || "Rotation" === t || "ADBE Vector Rotation" === t ? s.rotation : e.s.ix === t || "Scale" === t ? s.scale : e.sk && e.sk.ix === t || "Skew" === t ? s.skew : e.sa && e.sa.ix === t || "Skew Axis" === t ? s.skewAxis : void 0
                        }
                        return t.transform.op.setGroupProperty(i), Object.defineProperties(s, {
                            opacity: {
                                get: ExpressionPropertyInterface(t.transform.mProps.o)
                            },
                            position: {
                                get: ExpressionPropertyInterface(t.transform.mProps.p)
                            },
                            anchorPoint: {
                                get: ExpressionPropertyInterface(t.transform.mProps.a)
                            },
                            scale: {
                                get: ExpressionPropertyInterface(t.transform.mProps.s)
                            },
                            rotation: {
                                get: ExpressionPropertyInterface(t.transform.mProps.r)
                            },
                            skew: {
                                get: ExpressionPropertyInterface(t.transform.mProps.sk)
                            },
                            skewAxis: {
                                get: ExpressionPropertyInterface(t.transform.mProps.sa)
                            },
                            _name: {
                                value: e.nm
                            }
                        }), s.ty = "tr", s.mn = e.mn, s.propertyGroup = r, s
                    }(t.it[t.it.length - 1], e.it[e.it.length - 1], i.propertyGroup);
                return i.content = l, i.transform = p, Object.defineProperty(i, "_name", {
                    get: function() {
                        return t.nm
                    }
                }), i.numProperties = t.np, i.propertyIndex = t.ix, i.nm = t.nm, i.mn = t.mn, i
            }

            function o(t, e, r) {
                function i(t) {
                    return "Color" === t || "color" === t ? i.color : "Opacity" === t || "opacity" === t ? i.opacity : void 0
                }
                return Object.defineProperties(i, {
                    color: {
                        get: ExpressionPropertyInterface(e.c)
                    },
                    opacity: {
                        get: ExpressionPropertyInterface(e.o)
                    },
                    _name: {
                        value: t.nm
                    },
                    mn: {
                        value: t.mn
                    }
                }), e.c.setGroupProperty(r), e.o.setGroupProperty(r), i
            }

            function h(t, e, r) {
                function i(t) {
                    return 1 === t ? ob : r(t - 1)
                }

                function s(t) {
                    return 1 === t ? h : i(t - 1)
                }
                var a, n, o = t.d ? t.d.length : 0,
                    h = {};
                for (a = 0; a < o; a += 1) n = a, Object.defineProperty(h, t.d[n].nm, {
                    get: ExpressionPropertyInterface(e.d.dataProps[n].p)
                }), e.d.dataProps[a].p.setGroupProperty(s);

                function l(t) {
                    return "Color" === t || "color" === t ? l.color : "Opacity" === t || "opacity" === t ? l.opacity : "Stroke Width" === t || "stroke width" === t ? l.strokeWidth : void 0
                }
                return Object.defineProperties(l, {
                    color: {
                        get: ExpressionPropertyInterface(e.c)
                    },
                    opacity: {
                        get: ExpressionPropertyInterface(e.o)
                    },
                    strokeWidth: {
                        get: ExpressionPropertyInterface(e.w)
                    },
                    dash: {
                        get: function() {
                            return h
                        }
                    },
                    _name: {
                        value: t.nm
                    },
                    mn: {
                        value: t.mn
                    }
                }), e.c.setGroupProperty(i), e.o.setGroupProperty(i), e.w.setGroupProperty(i), l
            }

            function l(e, t, r) {
                function i(t) {
                    return 1 == t ? s : r(--t)
                }

                function s(t) {
                    return t === e.e.ix || "End" === t || "end" === t ? s.end : t === e.s.ix ? s.start : t === e.o.ix ? s.offset : void 0
                }
                return s.propertyIndex = e.ix, t.s.setGroupProperty(i), t.e.setGroupProperty(i), t.o.setGroupProperty(i), s.propertyIndex = e.ix, s.propertyGroup = r, Object.defineProperties(s, {
                    start: {
                        get: ExpressionPropertyInterface(t.s)
                    },
                    end: {
                        get: ExpressionPropertyInterface(t.e)
                    },
                    offset: {
                        get: ExpressionPropertyInterface(t.o)
                    },
                    _name: {
                        value: e.nm
                    }
                }), s.mn = e.mn, s
            }

            function p(e, t, r) {
                function i(t) {
                    return 1 == t ? a : r(--t)
                }
                a.propertyIndex = e.ix;
                var s = "tm" === t.sh.ty ? t.sh.prop : t.sh;

                function a(t) {
                    return e.p.ix === t ? a.position : e.s.ix === t ? a.size : void 0
                }
                return s.s.setGroupProperty(i), s.p.setGroupProperty(i), Object.defineProperties(a, {
                    size: {
                        get: ExpressionPropertyInterface(s.s)
                    },
                    position: {
                        get: ExpressionPropertyInterface(s.p)
                    },
                    _name: {
                        value: e.nm
                    }
                }), a.mn = e.mn, a
            }

            function f(e, t, r) {
                function i(t) {
                    return 1 == t ? a : r(--t)
                }
                var s = "tm" === t.sh.ty ? t.sh.prop : t.sh;

                function a(t) {
                    return e.p.ix === t ? a.position : e.r.ix === t ? a.rotation : e.pt.ix === t ? a.points : e.or.ix === t || "ADBE Vector Star Outer Radius" === t ? a.outerRadius : e.os.ix === t ? a.outerRoundness : !e.ir || e.ir.ix !== t && "ADBE Vector Star Inner Radius" !== t ? e.is && e.is.ix === t ? a.innerRoundness : void 0 : a.innerRadius
                }
                return a.propertyIndex = e.ix, s.or.setGroupProperty(i), s.os.setGroupProperty(i), s.pt.setGroupProperty(i), s.p.setGroupProperty(i), s.r.setGroupProperty(i), e.ir && (s.ir.setGroupProperty(i), s.is.setGroupProperty(i)), Object.defineProperties(a, {
                    position: {
                        get: ExpressionPropertyInterface(s.p)
                    },
                    rotation: {
                        get: ExpressionPropertyInterface(s.r)
                    },
                    points: {
                        get: ExpressionPropertyInterface(s.pt)
                    },
                    outerRadius: {
                        get: ExpressionPropertyInterface(s.or)
                    },
                    outerRoundness: {
                        get: ExpressionPropertyInterface(s.os)
                    },
                    innerRadius: {
                        get: ExpressionPropertyInterface(s.ir)
                    },
                    innerRoundness: {
                        get: ExpressionPropertyInterface(s.is)
                    },
                    _name: {
                        value: e.nm
                    }
                }), a.mn = e.mn, a
            }

            function c(e, t, r) {
                function i(t) {
                    return 1 == t ? a : r(--t)
                }
                var s = "tm" === t.sh.ty ? t.sh.prop : t.sh;

                function a(t) {
                    return e.p.ix === t ? a.position : e.r.ix === t ? a.roundness : e.s.ix === t || "Size" === t || "ADBE Vector Rect Size" === t ? a.size : void 0
                }
                return a.propertyIndex = e.ix, s.p.setGroupProperty(i), s.s.setGroupProperty(i), s.r.setGroupProperty(i), Object.defineProperties(a, {
                    position: {
                        get: ExpressionPropertyInterface(s.p)
                    },
                    roundness: {
                        get: ExpressionPropertyInterface(s.r)
                    },
                    size: {
                        get: ExpressionPropertyInterface(s.s)
                    },
                    _name: {
                        value: e.nm
                    }
                }), a.mn = e.mn, a
            }

            function d(e, t, r) {
                var i = t;

                function s(t) {
                    if (e.r.ix === t || "Round Corners 1" === t) return s.radius
                }
                return s.propertyIndex = e.ix, i.rd.setGroupProperty(function(t) {
                    return 1 == t ? s : r(--t)
                }), Object.defineProperties(s, {
                    radius: {
                        get: ExpressionPropertyInterface(i.rd)
                    },
                    _name: {
                        value: e.nm
                    }
                }), s.mn = e.mn, s
            }

            function u(e, t, r) {
                function i(t) {
                    return 1 == t ? a : r(--t)
                }
                var s = t;

                function a(t) {
                    return e.c.ix === t || "Copies" === t ? a.copies : e.o.ix === t || "Offset" === t ? a.offset : void 0
                }
                return a.propertyIndex = e.ix, s.c.setGroupProperty(i), s.o.setGroupProperty(i), Object.defineProperties(a, {
                    copies: {
                        get: ExpressionPropertyInterface(s.c)
                    },
                    offset: {
                        get: ExpressionPropertyInterface(s.o)
                    },
                    _name: {
                        value: e.nm
                    }
                }), a.mn = e.mn, a
            }

            function y(t, e, r) {
                var i = e.sh;

                function s(t) {
                    if ("Shape" === t || "shape" === t || "Path" === t || "path" === t || "ADBE Vector Shape" === t || 2 === t) return s.path
                }
                return i.setGroupProperty(function(t) {
                    return 1 == t ? s : r(--t)
                }), Object.defineProperties(s, {
                    path: {
                        get: function() {
                            return i.k && i.getValue(), i
                        }
                    },
                    shape: {
                        get: function() {
                            return i.k && i.getValue(), i
                        }
                    },
                    _name: {
                        value: t.nm
                    },
                    ix: {
                        value: t.ix
                    },
                    propertyIndex: {
                        value: t.ix
                    },
                    mn: {
                        value: t.mn
                    }
                }), s
            }
            return function(t, e, r) {
                var i;

                function s(t) {
                    if ("number" == typeof t) return i[t - 1];
                    for (var e = 0, r = i.length; e < r;) {
                        if (i[e]._name === t) return i[e];
                        e += 1
                    }
                }
                return s.propertyGroup = r, i = m(t, e, s), s.numProperties = i.length, s
            }
        }(),
        TextExpressionInterface = function(e) {
            var r;

            function t() {}
            return Object.defineProperty(t, "sourceText", {
                get: function() {
                    e.textProperty.getValue();
                    var t = e.textProperty.currentData.t;
                    return void 0 !== t && (e.textProperty.currentData.t = void 0, (r = new String(t)).value = t || new String(t)), r
                }
            }), t
        },
        LayerExpressionInterface = function() {
            function s(t, e) {
                var r = new Matrix;
                if (r.reset(), this._elem.finalTransform.mProp.applyToMatrix(r), this._elem.hierarchy && this._elem.hierarchy.length) {
                    var i, s = this._elem.hierarchy.length;
                    for (i = 0; i < s; i += 1) this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(r);
                    return r.applyToPointArray(t[0], t[1], t[2] || 0)
                }
                return r.applyToPointArray(t[0], t[1], t[2] || 0)
            }

            function a(t, e) {
                var r = new Matrix;
                if (r.reset(), this._elem.finalTransform.mProp.applyToMatrix(r), this._elem.hierarchy && this._elem.hierarchy.length) {
                    var i, s = this._elem.hierarchy.length;
                    for (i = 0; i < s; i += 1) this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(r);
                    return r.inversePoint(t)
                }
                return r.inversePoint(t)
            }

            function n(t) {
                var e = new Matrix;
                if (e.reset(), this._elem.finalTransform.mProp.applyToMatrix(e), this._elem.hierarchy && this._elem.hierarchy.length) {
                    var r, i = this._elem.hierarchy.length;
                    for (r = 0; r < i; r += 1) this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(e);
                    return e.inversePoint(t)
                }
                return e.inversePoint(t)
            }

            function o() {
                return [1, 1, 1, 1]
            }
            return function(e) {
                var r;

                function i(t) {
                    switch (t) {
                        case "ADBE Root Vectors Group":
                        case "Contents":
                        case 2:
                            return i.shapeInterface;
                        case 1:
                        case 6:
                        case "Transform":
                        case "transform":
                        case "ADBE Transform Group":
                            return r;
                        case 4:
                        case "ADBE Effect Parade":
                        case "effects":
                        case "Effects":
                            return i.effect
                    }
                }
                i.toWorld = s, i.fromWorld = a, i.toComp = s, i.fromComp = n, i.sampleImage = o, i.sourceRectAtTime = e.sourceRectAtTime.bind(e);
                var t = getDescriptor(r = TransformExpressionInterface((i._elem = e).finalTransform.mProp), "anchorPoint");
                return Object.defineProperties(i, {
                    hasParent: {
                        get: function() {
                            return e.hierarchy.length
                        }
                    },
                    parent: {
                        get: function() {
                            return e.hierarchy[0].layerInterface
                        }
                    },
                    rotation: getDescriptor(r, "rotation"),
                    scale: getDescriptor(r, "scale"),
                    position: getDescriptor(r, "position"),
                    opacity: getDescriptor(r, "opacity"),
                    anchorPoint: t,
                    anchor_point: t,
                    transform: {
                        get: function() {
                            return r
                        }
                    },
                    active: {
                        get: function() {
                            return e.isInRange
                        }
                    }
                }), i.startTime = e.data.st, i.index = e.data.ind, i.source = e.data.refId, i.height = 0 === e.data.ty ? e.data.h : 100, i.width = 0 === e.data.ty ? e.data.w : 100, i.inPoint = e.data.ip / e.comp.globalData.frameRate, i.outPoint = e.data.op / e.comp.globalData.frameRate, i._name = e.data.nm, i.registerMaskInterface = function(t) {
                    i.mask = new MaskManagerInterface(t, e)
                }, i.registerEffectsInterface = function(t) {
                    i.effect = t
                }, i
            }
        }(),
        CompExpressionInterface = function(i) {
            function t(t) {
                for (var e = 0, r = i.layers.length; e < r;) {
                    if (i.layers[e].nm === t || i.layers[e].ind === t) return i.elements[e].layerInterface;
                    e += 1
                }
                return null
            }
            return Object.defineProperty(t, "_name", {
                value: i.data.nm
            }), (t.layer = t).pixelAspect = 1, t.height = i.data.h || i.globalData.compSize.h, t.width = i.data.w || i.globalData.compSize.w, t.pixelAspect = 1, t.frameDuration = 1 / i.globalData.frameRate, t.displayStartTime = 0, t.numLayers = i.layers.length, t
        },
        TransformExpressionInterface = function(t) {
            function e(t) {
                switch (t) {
                    case "scale":
                    case "Scale":
                    case "ADBE Scale":
                    case 6:
                        return e.scale;
                    case "rotation":
                    case "Rotation":
                    case "ADBE Rotation":
                    case "ADBE Rotate Z":
                    case 10:
                        return e.rotation;
                    case "ADBE Rotate X":
                        return e.xRotation;
                    case "ADBE Rotate Y":
                        return e.yRotation;
                    case "position":
                    case "Position":
                    case "ADBE Position":
                    case 2:
                        return e.position;
                    case "ADBE Position_0":
                        return e.xPosition;
                    case "ADBE Position_1":
                        return e.yPosition;
                    case "ADBE Position_2":
                        return e.zPosition;
                    case "anchorPoint":
                    case "AnchorPoint":
                    case "Anchor Point":
                    case "ADBE AnchorPoint":
                    case 1:
                        return e.anchorPoint;
                    case "opacity":
                    case "Opacity":
                    case 11:
                        return e.opacity
                }
            }
            if (Object.defineProperty(e, "rotation", {
                    get: ExpressionPropertyInterface(t.r || t.rz)
                }), Object.defineProperty(e, "zRotation", {
                    get: ExpressionPropertyInterface(t.rz || t.r)
                }), Object.defineProperty(e, "xRotation", {
                    get: ExpressionPropertyInterface(t.rx)
                }), Object.defineProperty(e, "yRotation", {
                    get: ExpressionPropertyInterface(t.ry)
                }), Object.defineProperty(e, "scale", {
                    get: ExpressionPropertyInterface(t.s)
                }), t.p) var r = ExpressionPropertyInterface(t.p);
            return Object.defineProperty(e, "position", {
                get: function() {
                    return t.p ? r() : [t.px.v, t.py.v, t.pz ? t.pz.v : 0]
                }
            }), Object.defineProperty(e, "xPosition", {
                get: ExpressionPropertyInterface(t.px)
            }), Object.defineProperty(e, "yPosition", {
                get: ExpressionPropertyInterface(t.py)
            }), Object.defineProperty(e, "zPosition", {
                get: ExpressionPropertyInterface(t.pz)
            }), Object.defineProperty(e, "anchorPoint", {
                get: ExpressionPropertyInterface(t.a)
            }), Object.defineProperty(e, "opacity", {
                get: ExpressionPropertyInterface(t.o)
            }), Object.defineProperty(e, "skew", {
                get: ExpressionPropertyInterface(t.sk)
            }), Object.defineProperty(e, "skewAxis", {
                get: ExpressionPropertyInterface(t.sa)
            }), Object.defineProperty(e, "orientation", {
                get: ExpressionPropertyInterface(t.or)
            }), e
        },
        ProjectInterface = function() {
            function e(t) {
                this.compositions.push(t)
            }
            return function() {
                function t(t) {
                    for (var e = 0, r = this.compositions.length; e < r;) {
                        if (this.compositions[e].data && this.compositions[e].data.nm === t) return this.compositions[e].prepareFrame && this.compositions[e].data.xt && this.compositions[e].prepareFrame(this.currentFrame), this.compositions[e].compInterface;
                        e += 1
                    }
                }
                return t.compositions = [], t.currentFrame = 0, t.registerComposition = e, t
            }
        }(),
        EffectsExpressionInterface = function() {
            function l(s, t, e, r) {
                var i, a = [],
                    n = s.ef.length;
                for (i = 0; i < n; i += 1) 5 === s.ef[i].ty ? a.push(l(s.ef[i], t.effectElements[i], t.effectElements[i].propertyGroup, r)) : a.push(p(t.effectElements[i], s.ef[i].ty, r, o));

                function o(t) {
                    return 1 === t ? h : e(t - 1)
                }
                var h = function(t) {
                    for (var e = s.ef, r = 0, i = e.length; r < i;) {
                        if (t === e[r].nm || t === e[r].mn || t === e[r].ix) return 5 === e[r].ty ? a[r] : a[r]();
                        r += 1
                    }
                    return a[0]()
                };
                return h.propertyGroup = o, "ADBE Color Control" === s.mn && Object.defineProperty(h, "color", {
                    get: function() {
                        return a[0]()
                    }
                }), Object.defineProperty(h, "numProperties", {
                    get: function() {
                        return s.np
                    }
                }), h.active = h.enabled = 0 !== s.en, h
            }

            function p(t, e, r, i) {
                var s = ExpressionPropertyInterface(t.p);
                return t.p.setGroupProperty && t.p.setGroupProperty(i),
                    function() {
                        return 10 === e ? r.comp.compInterface(t.p.v) : s()
                    }
            }
            return {
                createEffectsInterface: function(s, t) {
                    if (s.effectsManager) {
                        var e, a = [],
                            r = s.data.ef,
                            i = s.effectsManager.effectElements.length;
                        for (e = 0; e < i; e += 1) a.push(l(r[e], s.effectsManager.effectElements[e], t, s));
                        return function(t) {
                            for (var e = s.data.ef || [], r = 0, i = e.length; r < i;) {
                                if (t === e[r].nm || t === e[r].mn || t === e[r].ix) return a[r];
                                r += 1
                            }
                        }
                    }
                }
            }
        }(),
        MaskManagerInterface = function() {
            function a(t, e) {
                this._mask = t, this._data = e
            }
            Object.defineProperty(a.prototype, "maskPath", {
                get: function() {
                    return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop
                }
            }), Object.defineProperty(a.prototype, "maskOpacity", {
                get: function() {
                    return this._mask.op.k && this._mask.op.getValue(), 100 * this._mask.op.v
                }
            });
            return function(e, t) {
                var r, i = createSizedArray(e.viewData.length),
                    s = e.viewData.length;
                for (r = 0; r < s; r += 1) i[r] = new a(e.viewData[r], e.masksProperties[r]);
                return function(t) {
                    for (r = 0; r < s;) {
                        if (e.masksProperties[r].nm === t) return i[r];
                        r += 1
                    }
                }
            }
        }(),
        ExpressionPropertyInterface = function() {
            var s = {
                    pv: 0,
                    v: 0,
                    mult: 1
                },
                n = {
                    pv: [0, 0, 0],
                    v: [0, 0, 0],
                    mult: 1
                };

            function o(i, s, a) {
                Object.defineProperty(i, "velocity", {
                    get: function() {
                        return s.getVelocityAtTime(s.comp.currentFrame)
                    }
                }), i.numKeys = s.keyframes ? s.keyframes.length : 0, i.key = function(t) {
                    if (i.numKeys) {
                        var e = "";
                        e = "s" in s.keyframes[t - 1] ? s.keyframes[t - 1].s : "e" in s.keyframes[t - 2] ? s.keyframes[t - 2].e : s.keyframes[t - 2].s;
                        var r = "unidimensional" === a ? new Number(e) : Object.assign({}, e);
                        return r.time = s.keyframes[t - 1].t / s.elem.comp.globalData.frameRate, r
                    }
                    return 0
                }, i.valueAtTime = s.getValueAtTime, i.speedAtTime = s.getSpeedAtTime, i.velocityAtTime = s.getVelocityAtTime, i.propertyGroup = s.propertyGroup
            }

            function e() {
                return s
            }
            return function(t) {
                return t ? "unidimensional" === t.propType ? function(t) {
                    t && "pv" in t || (t = s);
                    var e = 1 / t.mult,
                        r = t.pv * e,
                        i = new Number(r);
                    return i.value = r, o(i, t, "unidimensional"),
                        function() {
                            return t.k && t.getValue(), r = t.v * e, i.value !== r && ((i = new Number(r)).value = r, o(i, t, "unidimensional")), i
                        }
                }(t) : function(e) {
                    e && "pv" in e || (e = n);
                    var r = 1 / e.mult,
                        i = e.pv.length,
                        s = createTypedArray("float32", i),
                        a = createTypedArray("float32", i);
                    return s.value = a, o(s, e, "multidimensional"),
                        function() {
                            e.k && e.getValue();
                            for (var t = 0; t < i; t += 1) s[t] = a[t] = e.v[t] * r;
                            return s
                        }
                }(t) : e
            }
        }(),
        s5, t5;

    function SliderEffect(t, e, r) {
        this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
    }

    function AngleEffect(t, e, r) {
        this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
    }

    function ColorEffect(t, e, r) {
        this.p = PropertyFactory.getProp(e, t.v, 1, 0, r)
    }

    function PointEffect(t, e, r) {
        this.p = PropertyFactory.getProp(e, t.v, 1, 0, r)
    }

    function LayerIndexEffect(t, e, r) {
        this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
    }

    function MaskIndexEffect(t, e, r) {
        this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
    }

    function CheckboxEffect(t, e, r) {
        this.p = PropertyFactory.getProp(e, t.v, 0, 0, r)
    }

    function NoValueEffect() {
        this.p = {}
    }

    function EffectsManager() {}

    function EffectsManager(t, e) {
        var r = t.ef || [];
        this.effectElements = [];
        var i, s, a = r.length;
        for (i = 0; i < a; i++) s = new GroupEffect(r[i], e), this.effectElements.push(s)
    }

    function GroupEffect(t, e) {
        this.init(t, e)
    }
    s5 = function() {
        function r(t, e) {
            return this.textIndex = t + 1, this.textTotal = e, this.v = this.getValue() * this.mult, this.v
        }
        return function(t, e) {
            this.pv = 1, this.comp = t.comp, this.elem = t, this.mult = .01, this.propType = "textSelector", this.textTotal = e.totalChars, this.selectorValue = 100, this.lastValue = [1, 1, 1], this.k = !0, this.x = !0, this.getValue = ExpressionManager.initiateExpression.bind(this)(t, e, this), this.getMult = r, this.getVelocityAtTime = expressionHelpers.getVelocityAtTime, this.kf ? this.getValueAtTime = expressionHelpers.getValueAtTime.bind(this) : this.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(this), this.setGroupProperty = expressionHelpers.setGroupProperty
        }
    }(), t5 = TextSelectorProp.getTextSelectorProp, TextSelectorProp.getTextSelectorProp = function(t, e, r) {
        return 1 === e.t ? new s5(t, e, r) : t5(t, e, r)
    }, extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function(t, e) {
        this.data = t, this.effectElements = [], this.initDynamicPropertyContainer(e);
        var r, i, s = this.data.ef.length,
            a = this.data.ef;
        for (r = 0; r < s; r += 1) {
            switch (i = null, a[r].ty) {
                case 0:
                    i = new SliderEffect(a[r], e, this);
                    break;
                case 1:
                    i = new AngleEffect(a[r], e, this);
                    break;
                case 2:
                    i = new ColorEffect(a[r], e, this);
                    break;
                case 3:
                    i = new PointEffect(a[r], e, this);
                    break;
                case 4:
                case 7:
                    i = new CheckboxEffect(a[r], e, this);
                    break;
                case 10:
                    i = new LayerIndexEffect(a[r], e, this);
                    break;
                case 11:
                    i = new MaskIndexEffect(a[r], e, this);
                    break;
                case 5:
                    i = new EffectsManager(a[r], e, this);
                    break;
                default:
                    i = new NoValueEffect(a[r], e, this)
            }
            i && this.effectElements.push(i)
        }
    };
    var lottiejs = {},
        _isFrozen = !1;

    function setLocationHref(t) {
        locationHref = t
    }

    function searchAnimations() {
        !0 === standalone ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations()
    }

    function setSubframeRendering(t) {
        subframeEnabled = t
    }

    function loadAnimation(t) {
        return !0 === standalone && (t.animationData = JSON.parse(animationData)), animationManager.loadAnimation(t)
    }

    function setQuality(t) {
        if ("string" == typeof t) switch (t) {
            case "high":
                defaultCurveSegments = 200;
                break;
            case "medium":
                defaultCurveSegments = 50;
                break;
            case "low":
                defaultCurveSegments = 10
        } else !isNaN(t) && 1 < t && (defaultCurveSegments = t);
        roundValues(!(50 <= defaultCurveSegments))
    }

    function inBrowser() {
        return "undefined" != typeof navigator
    }

    function installPlugin(t, e) {
        "expressions" === t && (expressionsPlugin = e)
    }

    function getFactory(t) {
        switch (t) {
            case "propertyFactory":
                return PropertyFactory;
            case "shapePropertyFactory":
                return ShapePropertyFactory;
            case "matrix":
                return Matrix
        }
    }

    function checkReady() {
        "complete" === document.readyState && (clearInterval(readyStateCheckInterval), searchAnimations())
    }

    function getQueryVariable(t) {
        for (var e = queryString.split("&"), r = 0; r < e.length; r++) {
            var i = e[r].split("=");
            if (decodeURIComponent(i[0]) == t) return decodeURIComponent(i[1])
        }
    }
    lottiejs.play = animationManager.play, lottiejs.pause = animationManager.pause, lottiejs.setLocationHref = setLocationHref, lottiejs.togglePause = animationManager.togglePause, lottiejs.setSpeed = animationManager.setSpeed, lottiejs.setDirection = animationManager.setDirection, lottiejs.stop = animationManager.stop, lottiejs.searchAnimations = searchAnimations, lottiejs.registerAnimation = animationManager.registerAnimation, lottiejs.loadAnimation = loadAnimation, lottiejs.setSubframeRendering = setSubframeRendering, lottiejs.resize = animationManager.resize, lottiejs.goToAndStop = animationManager.goToAndStop, lottiejs.destroy = animationManager.destroy, lottiejs.setQuality = setQuality, lottiejs.inBrowser = inBrowser, lottiejs.installPlugin = installPlugin, lottiejs.freeze = animationManager.freeze, lottiejs.unfreeze = animationManager.unfreeze, lottiejs.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottiejs.__getFactory = getFactory, lottiejs.version = "5.5.10";
    var standalone = "__[STANDALONE]__",
        animationData = "__[ANIMATIONDATA]__",
        renderer = "";
    if (standalone) {
        var scripts = document.getElementsByTagName("script"),
            index = scripts.length - 1,
            myScript = scripts[index] || {
                src: ""
            },
            queryString = myScript.src.replace(/^[^\?]+\??/, "");
        renderer = getQueryVariable("renderer")
    }
    var readyStateCheckInterval = setInterval(checkReady, 100);
    return lottiejs
}, "function" == typeof define && define.amd ? define(function() {
    return b(a)
}) : "object" == typeof module && module.exports ? module.exports = b(a) : (a.lottie = b(a), a.bodymovin = a.lottie)); /*!jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license*/
! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(C, e) {
    "use strict";
    var t = [],
        r = Object.getPrototypeOf,
        s = t.slice,
        g = t.flat ? function(e) {
            return t.flat.call(e)
        } : function(e) {
            return t.concat.apply([], e)
        },
        u = t.push,
        i = t.indexOf,
        n = {},
        o = n.toString,
        v = n.hasOwnProperty,
        a = v.toString,
        l = a.call(Object),
        y = {},
        m = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
        },
        x = function(e) {
            return null != e && e === e.window
        },
        E = C.document,
        c = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };

    function b(e, t, n) {
        var r, i, o = (n = n || E).createElement("script");
        if (o.text = e, t)
            for (r in c)(i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o)
    }

    function w(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
    }
    var f = "3.6.0",
        S = function(e, t) {
            return new S.fn.init(e, t)
        };

    function p(e) {
        var t = !!e && "length" in e && e.length,
            n = w(e);
        return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    S.fn = S.prototype = {
        jquery: f,
        constructor: S,
        length: 0,
        toArray: function() {
            return s.call(this)
        },
        get: function(e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = S.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return S.each(this, e)
        },
        map: function(n) {
            return this.pushStack(S.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(s.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        even: function() {
            return this.pushStack(S.grep(this, function(e, t) {
                return (t + 1) % 2
            }))
        },
        odd: function() {
            return this.pushStack(S.grep(this, function(e, t) {
                return t % 2
            }))
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= n && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: u,
        sort: t.sort,
        splice: t.splice
    }, S.extend = S.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            s = 1,
            u = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || m(a) || (a = {}), s === u && (a = this, s--); s < u; s++)
            if (null != (e = arguments[s]))
                for (t in e) r = e[t], "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t], o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}, i = !1, a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, S.extend({
        expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof(n = v.call(t, "constructor") && t.constructor) && a.call(n) === l)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        globalEval: function(e, t, n) {
            b(e, {
                nonce: t && t.nonce
            }, n)
        },
        each: function(e, t) {
            var n, r = 0;
            if (p(e)) {
                for (n = e.length; r < n; r++)
                    if (!1 === t.call(e[r], r, e[r])) break
            } else
                for (r in e)
                    if (!1 === t.call(e[r], r, e[r])) break;
            return e
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : i.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var r, i, o = 0,
                a = [];
            if (p(e))
                for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
            else
                for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
            return g(a)
        },
        guid: 1,
        support: y
    }), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase()
    });
    var d = function(n) {
        var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, S = "sizzle" + 1 * new Date,
            p = n.document,
            k = 0,
            r = 0,
            m = ue(),
            x = ue(),
            A = ue(),
            N = ue(),
            j = function(e, t) {
                return e === t && (l = !0), 0
            },
            D = {}.hasOwnProperty,
            t = [],
            q = t.pop,
            L = t.push,
            H = t.push,
            O = t.slice,
            P = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]",
            F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)",
            B = new RegExp(M + "+", "g"),
            $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            _ = new RegExp("^" + M + "*," + M + "*"),
            z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            U = new RegExp(M + "|>"),
            X = new RegExp(F),
            V = new RegExp("^" + I + "$"),
            G = {
                ID: new RegExp("^#(" + I + ")"),
                CLASS: new RegExp("^\\.(" + I + ")"),
                TAG: new RegExp("^(" + I + "|[*])"),
                ATTR: new RegExp("^" + W),
                PSEUDO: new RegExp("^" + F),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + R + ")$", "i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /HTML$/i,
            Q = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
            ne = function(e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
            },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function(e, t) {
                return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            oe = function() {
                T()
            },
            ae = be(function(e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            H.apply(t = O.call(p.childNodes), p.childNodes), t[p.childNodes.length].nodeType
        } catch (e) {
            H = {
                apply: t.length ? function(e, t) {
                    L.apply(e, O.call(t))
                } : function(e, t) {
                    var n = e.length,
                        r = 0;
                    while (e[n++] = t[r++]);
                    e.length = n - 1
                }
            }
        }

        function se(t, e, n, r) {
            var i, o, a, s, u, l, c, f = e && e.ownerDocument,
                p = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!r && (T(e), e = e || C, E)) {
                if (11 !== p && (u = Z.exec(t)))
                    if (i = u[1]) {
                        if (9 === p) {
                            if (!(a = e.getElementById(i))) return n;
                            if (a.id === i) return n.push(a), n
                        } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n
                    } else {
                        if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
                        if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n
                    }
                if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                    if (c = t, f = e, 1 === p && (U.test(t) || z.test(t))) {
                        (f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)), o = (l = h(t)).length;
                        while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
                        c = l.join(",")
                    }
                    try {
                        return H.apply(n, f.querySelectorAll(c)), n
                    } catch (e) {
                        N(t, !0)
                    } finally {
                        s === S && e.removeAttribute("id")
                    }
                }
            }
            return g(t.replace($, "$1"), e, n, r)
        }

        function ue() {
            var r = [];
            return function e(t, n) {
                return r.push(t + " ") > b.cacheLength && delete e[r.shift()], e[t + " "] = n
            }
        }

        function le(e) {
            return e[S] = !0, e
        }

        function ce(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function fe(e, t) {
            var n = e.split("|"),
                r = n.length;
            while (r--) b.attrHandle[n[r]] = t
        }

        function pe(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                while (n = n.nextSibling)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function de(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function he(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }

        function ge(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function ve(a) {
            return le(function(o) {
                return o = +o, le(function(e, t) {
                    var n, r = a([], e.length, o),
                        i = r.length;
                    while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function ye(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        for (e in d = se.support = {}, i = se.isXML = function(e) {
                var t = e && e.namespaceURI,
                    n = e && (e.ownerDocument || e).documentElement;
                return !Y.test(t || n && n.nodeName || "HTML")
            }, T = se.setDocument = function(e) {
                var t, n, r = e ? e.ownerDocument || e : p;
                return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement, E = !i(C), p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)), d.scope = ce(function(e) {
                    return a.appendChild(e).appendChild(C.createElement("div")), "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                }), d.attributes = ce(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), d.getElementsByTagName = ce(function(e) {
                    return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length
                }), d.getElementsByClassName = K.test(C.getElementsByClassName), d.getById = ce(function(e) {
                    return a.appendChild(e).id = S, !C.getElementsByName || !C.getElementsByName(S).length
                }), d.getById ? (b.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, b.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && E) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }) : (b.filter.ID = function(e) {
                    var n = e.replace(te, ne);
                    return function(e) {
                        var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return t && t.value === n
                    }
                }, b.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && E) {
                        var n, r, i, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                            i = t.getElementsByName(e), r = 0;
                            while (o = i[r++])
                                if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                        }
                        return []
                    }
                }), b.find.TAG = d.getElementsByTagName ? function(e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, r = [],
                        i = 0,
                        o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        while (n = o[i++]) 1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }, b.find.CLASS = d.getElementsByClassName && function(e, t) {
                    if ("undefined" != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e)
                }, s = [], v = [], (d.qsa = K.test(C.querySelectorAll)) && (ce(function(e) {
                    var t;
                    a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="), (t = C.createElement("input")).setAttribute("name", ""), e.appendChild(t), e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"), e.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]")
                }), ce(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = C.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                })), (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function(e) {
                    d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", F)
                }), v = v.length && new RegExp(v.join("|")), s = s.length && new RegExp(s.join("|")), t = K.test(a.compareDocumentPosition), y = t || K.test(a.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                } : function(e, t) {
                    if (t)
                        while (t = t.parentNode)
                            if (t === e) return !0;
                    return !1
                }, j = t ? function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return l = !0, 0;
                    var n, r = 0,
                        i = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t];
                    if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                    if (i === o) return pe(e, t);
                    n = e;
                    while (n = n.parentNode) a.unshift(n);
                    n = t;
                    while (n = n.parentNode) s.unshift(n);
                    while (a[r] === s[r]) r++;
                    return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0
                }), C
            }, se.matches = function(e, t) {
                return se(e, null, null, t)
            }, se.matchesSelector = function(e, t) {
                if (T(e), d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t))) try {
                    var n = c.call(e, t);
                    if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {
                    N(t, !0)
                }
                return 0 < se(t, C, null, [e]).length
            }, se.contains = function(e, t) {
                return (e.ownerDocument || e) != C && T(e), y(e, t)
            }, se.attr = function(e, t) {
                (e.ownerDocument || e) != C && T(e);
                var n = b.attrHandle[t.toLowerCase()],
                    r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
                return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }, se.escape = function(e) {
                return (e + "").replace(re, ie)
            }, se.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, se.uniqueSort = function(e) {
                var t, n = [],
                    r = 0,
                    i = 0;
                if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(j), l) {
                    while (t = e[i++]) t === e[i] && (r = n.push(i));
                    while (r--) e.splice(n[r], 1)
                }
                return u = null, e
            }, o = se.getText = function(e) {
                var t, n = "",
                    r = 0,
                    i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
                    } else if (3 === i || 4 === i) return e.nodeValue
                } else
                    while (t = e[r++]) n += o(t);
                return n
            }, (b = se.selectors = {
                cacheLength: 50,
                createPseudo: le,
                match: G,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(te, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = m[e + " "];
                        return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, r, i) {
                        return function(e) {
                            var t = se.attr(e, n);
                            return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(h, e, t, g, v) {
                        var y = "nth" !== h.slice(0, 3),
                            m = "last" !== h.slice(-4),
                            x = "of-type" === e;
                        return 1 === g && 0 === v ? function(e) {
                            return !!e.parentNode
                        } : function(e, t, n) {
                            var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling",
                                c = e.parentNode,
                                f = x && e.nodeName.toLowerCase(),
                                p = !n && !x,
                                d = !1;
                            if (c) {
                                if (y) {
                                    while (l) {
                                        a = e;
                                        while (a = a[l])
                                            if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                        u = l = "only" === h && !u && "nextSibling"
                                    }
                                    return !0
                                }
                                if (u = [m ? c.firstChild : c.lastChild], m && p) {
                                    d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2], a = s && c.childNodes[s];
                                    while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                        if (1 === a.nodeType && ++d && a === e) {
                                            i[h] = [k, s, d];
                                            break
                                        }
                                } else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d)
                                    while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                        if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break;
                                return (d -= v) === g || d % g == 0 && 0 <= d / g
                            }
                        }
                    },
                    PSEUDO: function(e, o) {
                        var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                        return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, t) {
                            var n, r = a(e, o),
                                i = r.length;
                            while (i--) e[n = P(e, r[i])] = !(t[n] = r[i])
                        }) : function(e) {
                            return a(e, 0, t)
                        }) : a
                    }
                },
                pseudos: {
                    not: le(function(e) {
                        var r = [],
                            i = [],
                            s = f(e.replace($, "$1"));
                        return s[S] ? le(function(e, t, n, r) {
                            var i, o = s(e, null, r, []),
                                a = e.length;
                            while (a--)(i = o[a]) && (e[a] = !(t[a] = i))
                        }) : function(e, t, n) {
                            return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop()
                        }
                    }),
                    has: le(function(t) {
                        return function(e) {
                            return 0 < se(t, e).length
                        }
                    }),
                    contains: le(function(t) {
                        return t = t.replace(te, ne),
                            function(e) {
                                return -1 < (e.textContent || o(e)).indexOf(t)
                            }
                    }),
                    lang: le(function(n) {
                        return V.test(n || "") || se.error("unsupported lang: " + n), n = n.replace(te, ne).toLowerCase(),
                            function(e) {
                                var t;
                                do {
                                    if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === a
                    },
                    focus: function(e) {
                        return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: ge(!1),
                    disabled: ge(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !b.pseudos.empty(e)
                    },
                    header: function(e) {
                        return J.test(e.nodeName)
                    },
                    input: function(e) {
                        return Q.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: ve(function() {
                        return [0]
                    }),
                    last: ve(function(e, t) {
                        return [t - 1]
                    }),
                    eq: ve(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: ve(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: ve(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: ve(function(e, t, n) {
                        for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r;) e.push(r);
                        return e
                    }),
                    gt: ve(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = b.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) b.pseudos[e] = de(e);
        for (e in {
                submit: !0,
                reset: !0
            }) b.pseudos[e] = he(e);

        function me() {}

        function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function be(s, e, t) {
            var u = e.dir,
                l = e.next,
                c = l || u,
                f = t && "parentNode" === c,
                p = r++;
            return e.first ? function(e, t, n) {
                while (e = e[u])
                    if (1 === e.nodeType || f) return s(e, t, n);
                return !1
            } : function(e, t, n) {
                var r, i, o, a = [k, p];
                if (n) {
                    while (e = e[u])
                        if ((1 === e.nodeType || f) && s(e, t, n)) return !0
                } else
                    while (e = e[u])
                        if (1 === e.nodeType || f)
                            if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e;
                            else {
                                if ((r = i[c]) && r[0] === k && r[1] === p) return a[2] = r[2];
                                if ((i[c] = a)[2] = s(e, t, n)) return !0
                            } return !1
            }
        }

        function we(i) {
            return 1 < i.length ? function(e, t, n) {
                var r = i.length;
                while (r--)
                    if (!i[r](e, t, n)) return !1;
                return !0
            } : i[0]
        }

        function Te(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)(o = e[s]) && (n && !n(o, r, i) || (a.push(o), l && t.push(s)));
            return a
        }

        function Ce(d, h, g, v, y, e) {
            return v && !v[S] && (v = Ce(v)), y && !y[S] && (y = Ce(y, e)), le(function(e, t, n, r) {
                var i, o, a, s = [],
                    u = [],
                    l = t.length,
                    c = e || function(e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                        return n
                    }(h || "*", n.nodeType ? [n] : n, []),
                    f = !d || !e && h ? c : Te(c, s, d, n, r),
                    p = g ? y || (e ? d : l || v) ? [] : t : f;
                if (g && g(f, p, n, r), v) {
                    i = Te(p, u), v(i, [], n, r), o = i.length;
                    while (o--)(a = i[o]) && (p[u[o]] = !(f[u[o]] = a))
                }
                if (e) {
                    if (y || d) {
                        if (y) {
                            i = [], o = p.length;
                            while (o--)(a = p[o]) && i.push(f[o] = a);
                            y(null, p = [], i, r)
                        }
                        o = p.length;
                        while (o--)(a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
                    }
                } else p = Te(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : H.apply(t, p)
            })
        }

        function Ee(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function(e) {
                    return e === i
                }, a, !0), l = be(function(e) {
                    return -1 < P(i, e)
                }, a, !0), c = [function(e, t, n) {
                    var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                    return i = null, r
                }]; s < r; s++)
                if (t = b.relative[e[s].type]) c = [be(we(c), t)];
                else {
                    if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
                        for (n = ++s; n < r; n++)
                            if (b.relative[e[n].type]) break;
                        return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
                            value: " " === e[s - 2].type ? "*" : ""
                        })).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e))
                    }
                    c.push(t)
                }
            return we(c)
        }
        return me.prototype = b.filters = b.pseudos, b.setFilters = new me, h = se.tokenize = function(e, t) {
            var n, r, i, o, a, s, u, l = x[e + " "];
            if (l) return t ? 0 : l.slice(0);
            a = e, s = [], u = b.preFilter;
            while (a) {
                for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = z.exec(a)) && (n = r.shift(), i.push({
                        value: n,
                        type: r[0].replace($, " ")
                    }), a = a.slice(n.length)), b.filter) !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break
            }
            return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
        }, f = se.compile = function(e, t) {
            var n, v, y, m, x, r, i = [],
                o = [],
                a = A[e + " "];
            if (!a) {
                t || (t = h(e)), n = t.length;
                while (n--)(a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
                (a = A(e, (v = o, m = 0 < (y = i).length, x = 0 < v.length, r = function(e, t, n, r, i) {
                    var o, a, s, u = 0,
                        l = "0",
                        c = e && [],
                        f = [],
                        p = w,
                        d = e || x && b.find.TAG("*", i),
                        h = k += null == p ? 1 : Math.random() || .1,
                        g = d.length;
                    for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
                        if (x && o) {
                            a = 0, t || o.ownerDocument == C || (T(o), n = !E);
                            while (s = v[a++])
                                if (s(o, t || C, n)) {
                                    r.push(o);
                                    break
                                }
                            i && (k = h)
                        }
                        m && ((o = !s && o) && u--, e && c.push(o))
                    }
                    if (u += l, m && l !== u) {
                        a = 0;
                        while (s = y[a++]) s(c, f, t, n);
                        if (e) {
                            if (0 < u)
                                while (l--) c[l] || f[l] || (f[l] = q.call(r));
                            f = Te(f)
                        }
                        H.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r)
                    }
                    return i && (k = h, w = p), c
                }, m ? le(r) : r))).selector = e
            }
            return a
        }, g = se.select = function(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e,
                c = !r && h(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                i = G.needsContext.test(e) ? 0 : o.length;
                while (i--) {
                    if (a = o[i], b.relative[s = a.type]) break;
                    if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && xe(o))) return H.apply(n, r), n;
                        break
                    }
                }
            }
            return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t), n
        }, d.sortStable = S.split("").sort(j).join("") === S, d.detectDuplicates = !!l, T(), d.sortDetached = ce(function(e) {
            return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
        }), ce(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || fe("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), d.attributes && ce(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || fe("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), ce(function(e) {
            return null == e.getAttribute("disabled")
        }) || fe(R, function(e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), se
    }(C);
    S.find = d, S.expr = d.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = d.uniqueSort, S.text = d.getText, S.isXMLDoc = d.isXML, S.contains = d.contains, S.escapeSelector = d.escape;
    var h = function(e, t, n) {
            var r = [],
                i = void 0 !== n;
            while ((e = e[t]) && 9 !== e.nodeType)
                if (1 === e.nodeType) {
                    if (i && S(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        T = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        k = S.expr.match.needsContext;

    function A(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function j(e, n, r) {
        return m(n) ? S.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r
        }) : n.nodeType ? S.grep(e, function(e) {
            return e === n !== r
        }) : "string" != typeof n ? S.grep(e, function(e) {
            return -1 < i.call(n, e) !== r
        }) : S.filter(n, e, r)
    }
    S.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, S.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(S(e).filter(function() {
                for (t = 0; t < r; t++)
                    if (S.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
            return 1 < r ? S.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(j(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(j(this, e || [], !0))
        },
        is: function(e) {
            return !!j(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length
        }
    });
    var D, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (S.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || D, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), N.test(r[1]) && S.isPlainObject(t))
                    for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return (i = E.getElementById(r[2])) && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this)
    }).prototype = S.fn, D = S(E);
    var L = /^(?:parents|prev(?:Until|All))/,
        H = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function O(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType);
        return e
    }
    S.fn.extend({
        has: function(e) {
            var t = S(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (S.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && S(e);
            if (!k.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(1 < o.length ? S.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), S.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return h(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return h(e, "parentNode", n)
        },
        next: function(e) {
            return O(e, "nextSibling")
        },
        prev: function(e) {
            return O(e, "previousSibling")
        },
        nextAll: function(e) {
            return h(e, "nextSibling")
        },
        prevAll: function(e) {
            return h(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return h(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return h(e, "previousSibling", n)
        },
        siblings: function(e) {
            return T((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return T(e.firstChild)
        },
        contents: function(e) {
            return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e), S.merge([], e.childNodes))
        }
    }, function(r, i) {
        S.fn[r] = function(e, t) {
            var n = S.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = S.filter(t, n)), 1 < this.length && (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n)
        }
    });
    var P = /[^\x20\t\r\n\f]+/g;

    function R(e) {
        return e
    }

    function M(e) {
        throw e
    }

    function I(e, t, n, r) {
        var i;
        try {
            e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    S.Callbacks = function(r) {
        var e, n;
        r = "string" == typeof r ? (e = r, n = {}, S.each(e.match(P) || [], function(e, t) {
            n[t] = !0
        }), n) : S.extend({}, r);
        var i, t, o, a, s = [],
            u = [],
            l = -1,
            c = function() {
                for (a = a || r.once, o = i = !0; u.length; l = -1) {
                    t = u.shift();
                    while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length, t = !1)
                }
                r.memory || (t = !1), i = !1, a && (s = t ? [] : "")
            },
            f = {
                add: function() {
                    return s && (t && !i && (l = s.length - 1, u.push(t)), function n(e) {
                        S.each(e, function(e, t) {
                            m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t)
                        })
                    }(arguments), t && !i && c()), this
                },
                remove: function() {
                    return S.each(arguments, function(e, t) {
                        var n;
                        while (-1 < (n = S.inArray(t, s, n))) s.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < S.inArray(e, s) : 0 < s.length
                },
                empty: function() {
                    return s && (s = []), this
                },
                disable: function() {
                    return a = u = [], s = t = "", this
                },
                disabled: function() {
                    return !s
                },
                lock: function() {
                    return a = u = [], t || i || (s = t = ""), this
                },
                locked: function() {
                    return !!a
                },
                fireWith: function(e, t) {
                    return a || (t = [e, (t = t || []).slice ? t.slice() : t], u.push(t), i || c()), this
                },
                fire: function() {
                    return f.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!o
                }
            };
        return f
    }, S.extend({
        Deferred: function(e) {
            var o = [
                    ["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2],
                    ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]
                ],
                i = "pending",
                a = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return s.done(arguments).fail(arguments), this
                    },
                    "catch": function(e) {
                        return a.then(null, e)
                    },
                    pipe: function() {
                        var i = arguments;
                        return S.Deferred(function(r) {
                            S.each(o, function(e, t) {
                                var n = m(i[t[4]]) && i[t[4]];
                                s[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), i = null
                        }).promise()
                    },
                    then: function(t, n, r) {
                        var u = 0;

                        function l(i, o, a, s) {
                            return function() {
                                var n = this,
                                    r = arguments,
                                    e = function() {
                                        var e, t;
                                        if (!(i < u)) {
                                            if ((e = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                            t = e && ("object" == typeof e || "function" == typeof e) && e.then, m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0, r = [e]), (s || o.resolveWith)(n, r))
                                        }
                                    },
                                    t = s ? e : function() {
                                        try {
                                            e()
                                        } catch (e) {
                                            S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && (n = void 0, r = [e]), o.rejectWith(n, r))
                                        }
                                    };
                                i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t))
                            }
                        }
                        return S.Deferred(function(e) {
                            o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? S.extend(e, a) : a
                    }
                },
                s = {};
            return S.each(o, function(e, t) {
                var n = t[2],
                    r = t[5];
                a[t[1]] = n.add, r && n.add(function() {
                    i = r
                }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock), n.add(t[3].fire), s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                }, s[t[0] + "With"] = n.fireWith
            }), a.promise(s), e && e.call(s, s), s
        },
        when: function(e) {
            var n = arguments.length,
                t = n,
                r = Array(t),
                i = s.call(arguments),
                o = S.Deferred(),
                a = function(t) {
                    return function(e) {
                        r[t] = this, i[t] = 1 < arguments.length ? s.call(arguments) : e, --n || o.resolveWith(r, i)
                    }
                };
            if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), "pending" === o.state() || m(i[t] && i[t].then))) return o.then();
            while (t--) I(i[t], a(t), o.reject);
            return o.promise()
        }
    });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    S.Deferred.exceptionHook = function(e, t) {
        C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, S.readyException = function(e) {
        C.setTimeout(function() {
            throw e
        })
    };
    var F = S.Deferred();

    function B() {
        E.removeEventListener("DOMContentLoaded", B), C.removeEventListener("load", B), S.ready()
    }
    S.fn.ready = function(e) {
        return F.then(e)["catch"](function(e) {
            S.readyException(e)
        }), this
    }, S.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S])
        }
    }), S.ready.then = F.then, "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B), C.addEventListener("load", B));
    var $ = function(e, t, n, r, i, o, a) {
            var s = 0,
                u = e.length,
                l = null == n;
            if ("object" === w(n))
                for (s in i = !0, n) $(e, t, s, n[s], !0, o, a);
            else if (void 0 !== r && (i = !0, m(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                    return l.call(S(e), n)
                })), t))
                for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        },
        _ = /^-ms-/,
        z = /-([a-z])/g;

    function U(e, t) {
        return t.toUpperCase()
    }

    function X(e) {
        return e.replace(_, "ms-").replace(z, U)
    }
    var V = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

    function G() {
        this.expando = S.expando + G.uid++
    }
    G.uid = 1, G.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[X(t)] = n;
            else
                for (r in t) i[X(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length;
                    while (n--) delete r[t[n]]
                }(void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !S.isEmptyObject(t)
        }
    };
    var Y = new G,
        Q = new G,
        J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        K = /[A-Z]/g;

    function Z(e, t, n) {
        var r, i;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(K, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i)
                } catch (e) {}
                Q.set(e, t, n)
            } else n = void 0;
        return n
    }
    S.extend({
        hasData: function(e) {
            return Q.hasData(e) || Y.hasData(e)
        },
        data: function(e, t, n) {
            return Q.access(e, t, n)
        },
        removeData: function(e, t) {
            Q.remove(e, t)
        },
        _data: function(e, t, n) {
            return Y.access(e, t, n)
        },
        _removeData: function(e, t) {
            Y.remove(e, t)
        }
    }), S.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = Q.get(o), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                    t = a.length;
                    while (t--) a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)), Z(o, r, i[r]));
                    Y.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof n ? this.each(function() {
                Q.set(this, n)
            }) : $(this, function(e) {
                var t;
                if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
                this.each(function() {
                    Q.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Q.remove(this, e)
            })
        }
    }), S.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = Y.get(e, t), n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = S.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = S._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function() {
                S.dequeue(e, t)
            }, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Y.get(e, n) || Y.access(e, n, {
                empty: S.Callbacks("once memory").add(function() {
                    Y.remove(e, [t + "queue", n])
                })
            })
        }
    }), S.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = S.queue(this, t, n);
                S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                S.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = S.Deferred(),
                o = this,
                a = this.length,
                s = function() {
                    --r || i.resolveWith(o, [o])
                };
            "string" != typeof e && (t = e, e = void 0), e = e || "fx";
            while (a--)(n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t)
        }
    });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ne = ["Top", "Right", "Bottom", "Left"],
        re = E.documentElement,
        ie = function(e) {
            return S.contains(e.ownerDocument, e)
        },
        oe = {
            composed: !0
        };
    re.getRootNode && (ie = function(e) {
        return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
    });
    var ae = function(e, t) {
        return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display")
    };

    function se(e, t, n, r) {
        var i, o, a = 20,
            s = r ? function() {
                return r.cur()
            } : function() {
                return S.css(e, t, "")
            },
            u = s(),
            l = n && n[3] || (S.cssNumber[t] ? "" : "px"),
            c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t));
        if (c && c[3] !== l) {
            u /= 2, l = l || c[3], c = +u || 1;
            while (a--) S.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0), c /= o;
            c *= 2, S.style(e, t, c + l), n = n || []
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }
    var ue = {};

    function le(e, t) {
        for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)(r = e[c]).style && (n = r.style.display, t ? ("none" === n && (l[c] = Y.get(r, "display") || null, l[c] || (r.style.display = "")), "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)), u = S.css(o, "display"), o.parentNode.removeChild(o), "none" === u && (u = "block"), ue[s] = u)))) : "none" !== n && (l[c] = "none", Y.set(r, "display", n)));
        for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
        return e
    }
    S.fn.extend({
        show: function() {
            return le(this, !0)
        },
        hide: function() {
            return le(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ae(this) ? S(this).show() : S(this).hide()
            })
        }
    });
    var ce, fe, pe = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i;
    ce = E.createDocumentFragment().appendChild(E.createElement("div")), (fe = E.createElement("input")).setAttribute("type", "radio"), fe.setAttribute("checked", "checked"), fe.setAttribute("name", "t"), ce.appendChild(fe), y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked, ce.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue, ce.innerHTML = "<option></option>", y.option = !!ce.lastChild;
    var ge = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

    function ve(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? S.merge([e], n) : n
    }

    function ye(e, t) {
        for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
    }
    ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead, ge.th = ge.td, y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
    var me = /<|&#?\w+;/;

    function xe(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
            if ((o = e[d]) || 0 === o)
                if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);
                else if (me.test(o)) {
            a = a || f.appendChild(t.createElement("div")), s = (de.exec(o) || ["", ""])[1].toLowerCase(), u = ge[s] || ge._default, a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2], c = u[0];
            while (c--) a = a.lastChild;
            S.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
        } else p.push(t.createTextNode(o));
        f.textContent = "", d = 0;
        while (o = p[d++])
            if (r && -1 < S.inArray(o, r)) i && i.push(o);
            else if (l = ie(o), a = ve(f.appendChild(o), "script"), l && ye(a), n) {
            c = 0;
            while (o = a[c++]) he.test(o.type || "") && n.push(o)
        }
        return f
    }
    var be = /^([^.]*)(?:\.(.+)|)/;

    function we() {
        return !0
    }

    function Te() {
        return !1
    }

    function Ce(e, t) {
        return e === function() {
            try {
                return E.activeElement
            } catch (e) {}
        }() == ("focus" === t)
    }

    function Ee(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            for (s in "string" != typeof n && (r = r || n, n = void 0), t) Ee(e, s, n, r, t[s], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Te;
        else if (!i) return e;
        return 1 === o && (a = i, (i = function(e) {
            return S().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = S.guid++)), e.each(function() {
            S.event.add(this, t, i, r, n)
        })
    }

    function Se(e, i, o) {
        o ? (Y.set(e, i, !1), S.event.add(e, i, {
            namespace: !1,
            handler: function(e) {
                var t, n, r = Y.get(this, i);
                if (1 & e.isTrigger && this[i]) {
                    if (r.length)(S.event.special[i] || {}).delegateType && e.stopPropagation();
                    else if (r = s.call(arguments), Y.set(this, i, r), t = o(this, i), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {}, r !== n) return e.stopImmediatePropagation(), e.preventDefault(), n && n.value
                } else r.length && (Y.set(this, i, {
                    value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this)
                }), e.stopImmediatePropagation())
            }
        })) : void 0 === Y.get(e, i) && S.event.add(e, i, we)
    }
    S.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y.get(t);
            if (V(t)) {
                n.handler && (n = (o = n).handler, i = o.selector), i && S.find.matchesSelector(re, i), n.guid || (n.guid = S.guid++), (u = v.events) || (u = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function(e) {
                    return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0
                }), l = (e = (e || "").match(P) || [""]).length;
                while (l--) d = g = (s = be.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), d && (f = S.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = S.event.special[d] || {}, c = S.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && S.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || ((p = u[d] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), S.event.global[d] = !0)
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, v = Y.hasData(e) && Y.get(e);
            if (v && (u = v.events)) {
                l = (t = (t || "").match(P) || [""]).length;
                while (l--)
                    if (d = g = (s = be.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                        f = S.event.special[d] || {}, p = u[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
                        while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle), delete u[d])
                    } else
                        for (d in u) S.event.remove(e, d + t[l], n, r, !0);
                S.isEmptyObject(u) && Y.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, s = new Array(arguments.length),
                u = S.event.fix(e),
                l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
                c = S.event.special[u.type] || {};
            for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
            if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                a = S.event.handlers.call(this, u, l), t = 0;
                while ((i = a[t++]) && !u.isPropagationStopped()) {
                    u.currentTarget = i.elem, n = 0;
                    while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped()) u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()))
                }
                return c.postDispatch && c.postDispatch.call(this, u), u.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [],
                u = t.delegateCount,
                l = e.target;
            if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && s.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this, u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }), s
        },
        addProp: function(t, e) {
            Object.defineProperty(S.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: m(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[S.expando] ? e : new S.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            click: {
                setup: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click", we), !1
                },
                trigger: function(e) {
                    var t = this || e;
                    return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click"), !0
                },
                _default: function(e) {
                    var t = e.target;
                    return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, S.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, S.Event = function(e, t) {
        if (!(this instanceof S.Event)) return new S.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : Te, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[S.expando] = !0
    }, S.Event.prototype = {
        constructor: S.Event,
        isDefaultPrevented: Te,
        isPropagationStopped: Te,
        isImmediatePropagationStopped: Te,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = we, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = we, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = we, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, S.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        "char": !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0
    }, S.event.addProp), S.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        S.event.special[e] = {
            setup: function() {
                return Se(this, e, Ce), !1
            },
            trigger: function() {
                return Se(this, e), !0
            },
            _default: function() {
                return !0
            },
            delegateType: t
        }
    }), S.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, i) {
        S.event.special[e] = {
            delegateType: i,
            bindType: i,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    r = e.handleObj;
                return n && (n === this || S.contains(this, n)) || (e.type = r.origType, t = r.handler.apply(this, arguments), e.type = i), t
            }
        }
    }), S.fn.extend({
        on: function(e, t, n, r) {
            return Ee(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return Ee(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = Te), this.each(function() {
                S.event.remove(this, e, n, t)
            })
        }
    });
    var ke = /<script|<style|<link/i,
        Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function je(e, t) {
        return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e
    }

    function De(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function qe(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Le(e, t) {
        var n, r, i, o, a, s;
        if (1 === t.nodeType) {
            if (Y.hasData(e) && (s = Y.get(e).events))
                for (i in Y.remove(t, "handle events"), s)
                    for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
            Q.hasData(e) && (o = Q.access(e), a = S.extend({}, o), Q.set(t, a))
        }
    }

    function He(n, r, i, o) {
        r = g(r);
        var e, t, a, s, u, l, c = 0,
            f = n.length,
            p = f - 1,
            d = r[0],
            h = m(d);
        if (h || 1 < f && "string" == typeof d && !y.checkClone && Ae.test(d)) return n.each(function(e) {
            var t = n.eq(e);
            h && (r[0] = d.call(this, e, t.html())), He(t, r, i, o)
        });
        if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === e.childNodes.length && (e = t), t || o)) {
            for (s = (a = S.map(ve(e, "script"), De)).length; c < f; c++) u = e, c !== p && (u = S.clone(u, !0, !0), s && S.merge(a, ve(u, "script"))), i.call(n[c], u, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument, S.map(a, qe), c = 0; c < s; c++) u = a[c], he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, {
                    nonce: u.nonce || u.getAttribute("nonce")
                }, l) : b(u.textContent.replace(Ne, ""), u, l))
        }
        return n
    }

    function Oe(e, t, n) {
        for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || S.cleanData(ve(r)), r.parentNode && (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
        return e
    }
    S.extend({
        htmlPrefilter: function(e) {
            return e
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, u, l, c = e.cloneNode(!0),
                f = ie(e);
            if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
                for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++) s = o[r], u = a[r], void 0, "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
            if (t)
                if (n)
                    for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) Le(o[r], a[r]);
                else Le(e, c);
            return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c
        },
        cleanData: function(e) {
            for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (V(n)) {
                    if (t = n[Y.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
                        n[Y.expando] = void 0
                    }
                    n[Q.expando] && (n[Q.expando] = void 0)
                }
        }
    }), S.fn.extend({
        detach: function(e) {
            return Oe(this, e, !0)
        },
        remove: function(e) {
            return Oe(this, e)
        },
        text: function(e) {
            return $(this, function(e) {
                return void 0 === e ? S.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return He(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return He(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = je(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return He(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return He(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(ve(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return S.clone(this, e, t)
            })
        },
        html: function(e) {
            return $(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !ke.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = S.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return He(this, arguments, function(e) {
                var t = this.parentNode;
                S.inArray(this, n) < 0 && (S.cleanData(ve(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), S.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        S.fn[e] = function(e) {
            for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), S(r[o])[a](t), u.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        Re = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = C), t.getComputedStyle(e)
        },
        Me = function(e, t, n) {
            var r, i, o = {};
            for (i in t) o[i] = e.style[i], e.style[i] = t[i];
            for (i in r = n.call(e), t) e.style[i] = o[i];
            return r
        },
        Ie = new RegExp(ne.join("|"), "i");

    function We(e, t, n) {
        var r, i, o, a, s = e.style;
        return (n = n || Re(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)), !y.pixelBoxStyles() && Pe.test(a) && Ie.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function Fe(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }! function() {
        function e() {
            if (l) {
                u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(u).appendChild(l);
                var e = C.getComputedStyle(l);
                n = "1%" !== e.top, s = 12 === t(e.marginLeft), l.style.right = "60%", o = 36 === t(e.right), r = 36 === t(e.width), l.style.position = "absolute", i = 12 === t(l.offsetWidth / 3), re.removeChild(u), l = null
            }
        }

        function t(e) {
            return Math.round(parseFloat(e))
        }
        var n, r, i, o, a, s, u = E.createElement("div"),
            l = E.createElement("div");
        l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === l.style.backgroundClip, S.extend(y, {
            boxSizingReliable: function() {
                return e(), r
            },
            pixelBoxStyles: function() {
                return e(), o
            },
            pixelPosition: function() {
                return e(), n
            },
            reliableMarginLeft: function() {
                return e(), s
            },
            scrollboxSize: function() {
                return e(), i
            },
            reliableTrDimensions: function() {
                var e, t, n, r;
                return null == a && (e = E.createElement("table"), t = E.createElement("tr"), n = E.createElement("div"), e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t.style.cssText = "border:1px solid", t.style.height = "1px", n.style.height = "9px", n.style.display = "block", re.appendChild(e).appendChild(t).appendChild(n), r = C.getComputedStyle(t), a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight, re.removeChild(e)), a
            }
        }))
    }();
    var Be = ["Webkit", "Moz", "ms"],
        $e = E.createElement("div").style,
        _e = {};

    function ze(e) {
        var t = S.cssProps[e] || _e[e];
        return t || (e in $e ? e : _e[e] = function(e) {
            var t = e[0].toUpperCase() + e.slice(1),
                n = Be.length;
            while (n--)
                if ((e = Be[n] + t) in $e) return e
        }(e) || e)
    }
    var Ue = /^(none|table(?!-c[ea]).+)/,
        Xe = /^--/,
        Ve = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ge = {
            letterSpacing: "0",
            fontWeight: "400"
        };

    function Ye(e, t, n) {
        var r = te.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function Qe(e, t, n, r, i, o) {
        var a = "width" === t ? 1 : 0,
            s = 0,
            u = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; a < 4; a += 2) "margin" === n && (u += S.css(e, n + ne[a], !0, i)), r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)), "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i), "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i));
        return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0), u
    }

    function Je(e, t, n) {
        var r = Re(e),
            i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r),
            o = i,
            a = We(e, t, r),
            s = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Pe.test(a)) {
            if (!n) return a;
            a = "auto"
        }
        return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r), (o = s in e) && (a = e[s])), (a = parseFloat(a) || 0) + Qe(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
    }

    function Ke(e, t, n, r, i) {
        return new Ke.prototype.init(e, t, n, r, i)
    }
    S.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = We(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = X(t),
                    u = Xe.test(t),
                    l = e.style;
                if (u || (t = ze(s)), a = S.cssHooks[t] || S.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i), o = "number"), null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = X(t);
            return Xe.test(t) || (t = ze(s)), (a = S.cssHooks[t] || S.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = We(e, t, r)), "normal" === i && t in Ge && (i = Ge[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
        }
    }), S.each(["height", "width"], function(e, u) {
        S.cssHooks[u] = {
            get: function(e, t, n) {
                if (t) return !Ue.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Je(e, u, n) : Me(e, Ve, function() {
                    return Je(e, u, n)
                })
            },
            set: function(e, t, n) {
                var r, i = Re(e),
                    o = !y.scrollboxSize() && "absolute" === i.position,
                    a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
                    s = n ? Qe(e, u, n, a, i) : 0;
                return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Qe(e, u, "border", !1, i) - .5)), s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t, t = S.css(e, u)), Ye(0, t, s)
            }
        }
    }), S.cssHooks.marginLeft = Fe(y.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(We(e, "marginLeft")) || e.getBoundingClientRect().left - Me(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), S.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        S.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
                return n
            }
        }, "margin" !== i && (S.cssHooks[i + o].set = Ye)
    }), S.fn.extend({
        css: function(e, t) {
            return $(this, function(e, t, n) {
                var r, i, o = {},
                    a = 0;
                if (Array.isArray(t)) {
                    for (r = Re(e), i = t.length; a < i; a++) o[t[a]] = S.css(e, t[a], !1, r);
                    return o
                }
                return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), ((S.Tween = Ke).prototype = {
        constructor: Ke,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (S.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = Ke.propHooks[this.prop];
            return e && e.get ? e.get(this) : Ke.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = Ke.propHooks[this.prop];
            return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Ke.propHooks._default.set(this), this
        }
    }).init.prototype = Ke.prototype, (Ke.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
            },
            set: function(e) {
                S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[ze(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }).scrollTop = Ke.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, S.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, S.fx = Ke.prototype.init, S.fx.step = {};
    var Ze, et, tt, nt, rt = /^(?:toggle|show|hide)$/,
        it = /queueHooks$/;

    function ot() {
        et && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(ot) : C.setTimeout(ot, S.fx.interval), S.fx.tick())
    }

    function at() {
        return C.setTimeout(function() {
            Ze = void 0
        }), Ze = Date.now()
    }

    function st(e, t) {
        var n, r = 0,
            i = {
                height: e
            };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = ne[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i
    }

    function ut(e, t, n) {
        for (var r, i = (lt.tweeners[t] || []).concat(lt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
            if (r = i[o].call(n, t, e)) return r
    }

    function lt(o, e, t) {
        var n, a, r = 0,
            i = lt.prefilters.length,
            s = S.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (a) return !1;
                for (var e = Ze || at(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
                return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
            },
            l = s.promise({
                elem: o,
                props: S.extend({}, e),
                opts: S.extend(!0, {
                    specialEasing: {},
                    easing: S.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: Ze || at(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                    return l.tweens.push(n), n
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? l.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; t < n; t++) l.tweens[t].run(1);
                    return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this
                }
            }),
            c = l.props;
        for (! function(e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (i = t[r = X(n)], o = e[n], Array.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = S.cssHooks[r]) && "expand" in a)
                        for (n in o = a.expand(o), delete e[r], o) n in e || (e[n] = o[n], t[n] = i);
                    else t[r] = i
            }(c, l.opts.specialEasing); r < i; r++)
            if (n = lt.prefilters[r].call(l, o, c, l.opts)) return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
        return S.map(c, ut, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), S.fx.timer(S.extend(u, {
            elem: o,
            anim: l,
            queue: l.opts.queue
        })), l
    }
    S.Animation = S.extend(lt, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return se(n.elem, e, te.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            m(e) ? (t = e, e = ["*"]) : e = e.match(P);
            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], lt.tweeners[n] = lt.tweeners[n] || [], lt.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t,
                p = this,
                d = {},
                h = e.style,
                g = e.nodeType && ae(e),
                v = Y.get(e, "fxshow");
            for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
                    a.unqueued || s()
                }), a.unqueued++, p.always(function() {
                    p.always(function() {
                        a.unqueued--, S.queue(e, "fx").length || a.empty.fire()
                    })
                })), t)
                if (i = t[r], rt.test(i)) {
                    if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                        if ("show" !== i || !v || void 0 === v[r]) continue;
                        g = !0
                    }
                    d[r] = v && v[r] || S.style(e, r)
                }
            if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
                for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (l = v && v.display) && (l = Y.get(e, "display")), "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0), l = e.style.display || l, c = S.css(e, "display"), le([e]))), ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function() {
                        h.display = l
                    }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function() {
                        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                    })), u = !1, d) u || (v ? "hidden" in v && (g = v.hidden) : v = Y.access(e, "fxshow", {
                    display: l
                }), o && (v.hidden = !g), g && le([e], !0), p.done(function() {
                    for (r in g || le([e]), Y.remove(e, "fxshow"), d) S.style(e, r, d[r])
                })), u = ut(g ? v[r] : 0, r, p), r in v || (v[r] = u.start, g && (u.end = u.start, u.start = 0))
        }],
        prefilter: function(e, t) {
            t ? lt.prefilters.unshift(e) : lt.prefilters.push(e)
        }
    }), S.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? S.extend({}, e) : {
            complete: n || !n && t || m(e) && e,
            duration: e,
            easing: n && t || t && !m(t) && t
        };
        return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue)
        }, r
    }, S.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(ae).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(t, e, n, r) {
            var i = S.isEmptyObject(t),
                o = S.speed(e, n, r),
                a = function() {
                    var e = lt(this, S.extend({}, t), o);
                    (i || Y.get(this, "finish")) && e.stop(!0)
                };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(i, e, o) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop, t(o)
            };
            return "string" != typeof i && (o = e, e = i, i = void 0), e && this.queue(i || "fx", []), this.each(function() {
                var e = !0,
                    t = null != i && i + "queueHooks",
                    n = S.timers,
                    r = Y.get(this);
                if (t) r[t] && r[t].stop && a(r[t]);
                else
                    for (t in r) r[t] && r[t].stop && it.test(t) && a(r[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), e = !1, n.splice(t, 1));
                !e && o || S.dequeue(this, i)
            })
        },
        finish: function(a) {
            return !1 !== a && (a = a || "fx"), this.each(function() {
                var e, t = Y.get(this),
                    n = t[a + "queue"],
                    r = t[a + "queueHooks"],
                    i = S.timers,
                    o = n ? n.length : 0;
                for (t.finish = !0, S.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--;) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), S.each(["toggle", "show", "hide"], function(e, r) {
        var i = S.fn[r];
        S.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(st(r, !0), e, t, n)
        }
    }), S.each({
        slideDown: st("show"),
        slideUp: st("hide"),
        slideToggle: st("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        S.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n)
        }
    }), S.timers = [], S.fx.tick = function() {
        var e, t = 0,
            n = S.timers;
        for (Ze = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || S.fx.stop(), Ze = void 0
    }, S.fx.timer = function(e) {
        S.timers.push(e), S.fx.start()
    }, S.fx.interval = 13, S.fx.start = function() {
        et || (et = !0, ot())
    }, S.fx.stop = function() {
        et = null
    }, S.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, S.fn.delay = function(r, e) {
        return r = S.fx && S.fx.speeds[r] || r, e = e || "fx", this.queue(e, function(e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function() {
                C.clearTimeout(n)
            }
        })
    }, tt = E.createElement("input"), nt = E.createElement("select").appendChild(E.createElement("option")), tt.type = "checkbox", y.checkOn = "" !== tt.value, y.optSelected = nt.selected, (tt = E.createElement("input")).value = "t", tt.type = "radio", y.radioValue = "t" === tt.value;
    var ct, ft = S.expr.attrHandle;
    S.fn.extend({
        attr: function(e, t) {
            return $(this, S.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                S.removeAttr(this, e)
            })
        }
    }), S.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? ct : void 0)), void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!y.radioValue && "radio" === t && A(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0,
                i = t && t.match(P);
            if (i && 1 === e.nodeType)
                while (n = i[r++]) e.removeAttribute(n)
        }
    }), ct = {
        set: function(e, t, n) {
            return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, S.each(S.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = ft[t] || S.find.attr;
        ft[t] = function(e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = ft[o], ft[o] = r, r = null != a(e, t, n) ? o : null, ft[o] = i), r
        }
    });
    var pt = /^(?:input|select|textarea|button)$/i,
        dt = /^(?:a|area)$/i;

    function ht(e) {
        return (e.match(P) || []).join(" ")
    }

    function gt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function vt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
    }
    S.fn.extend({
        prop: function(e, t) {
            return $(this, S.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[S.propFix[e] || e]
            })
        }
    }), S.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t, i = S.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = S.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : pt.test(e.nodeName) || dt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), y.optSelected || (S.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        S.propFix[this.toLowerCase()] = this
    }), S.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t)) return this.each(function(e) {
                S(this).addClass(t.call(this, e, gt(this)))
            });
            if ((e = vt(t)).length)
                while (n = this[u++])
                    if (i = gt(n), r = 1 === n.nodeType && " " + ht(i) + " ") {
                        a = 0;
                        while (o = e[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        i !== (s = ht(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (m(t)) return this.each(function(e) {
                S(this).removeClass(t.call(this, e, gt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e = vt(t)).length)
                while (n = this[u++])
                    if (i = gt(n), r = 1 === n.nodeType && " " + ht(i) + " ") {
                        a = 0;
                        while (o = e[a++])
                            while (-1 < r.indexOf(" " + o + " ")) r = r.replace(" " + o + " ", " ");
                        i !== (s = ht(r)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(i, t) {
            var o = typeof i,
                a = "string" === o || Array.isArray(i);
            return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function(e) {
                S(this).toggleClass(i.call(this, e, gt(this), t), t)
            }) : this.each(function() {
                var e, t, n, r;
                if (a) {
                    t = 0, n = S(this), r = vt(i);
                    while (e = r[t++]) n.hasClass(e) ? n.removeClass(e) : n.addClass(e)
                } else void 0 !== i && "boolean" !== o || ((e = gt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++])
                if (1 === n.nodeType && -1 < (" " + ht(gt(n)) + " ").indexOf(t)) return !0;
            return !1
        }
    });
    var yt = /\r/g;
    S.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            return arguments.length ? (i = m(n), this.each(function(e) {
                var t;
                1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function(e) {
                    return null == e ? "" : e + ""
                })), (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t))
            })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(yt, "") : null == e ? "" : e : void 0
        }
    }), S.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = S.find.attr(e, "value");
                    return null != t ? t : ht(S.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options,
                        o = e.selectedIndex,
                        a = "select-one" === e.type,
                        s = a ? null : [],
                        u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                            if (t = S(n).val(), a) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    var n, r, i = e.options,
                        o = S.makeArray(t),
                        a = i.length;
                    while (a--)((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), S.each(["radio", "checkbox"], function() {
        S.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t)
            }
        }, y.checkOn || (S.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), y.focusin = "onfocusin" in C;
    var mt = /^(?:focusinfocus|focusoutblur)$/,
        xt = function(e) {
            e.stopPropagation()
        };
    S.extend(S.event, {
        trigger: function(e, t, n, r) {
            var i, o, a, s, u, l, c, f, p = [n || E],
                d = v.call(e, "type") ? e.type : e,
                h = v.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = f = a = n = n || E, 3 !== n.nodeType && 8 !== n.nodeType && !mt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(), h.sort()), u = d.indexOf(":") < 0 && "on" + d, (e = e[S.expando] ? e : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : S.makeArray(t, [e]), c = S.event.special[d] || {}, r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                if (!r && !c.noBubble && !x(n)) {
                    for (s = c.delegateType || d, mt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
                    a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C)
                }
                i = 0;
                while ((o = p[i++]) && !e.isPropagationStopped()) f = o, e.type = 1 < i ? s : c.bindType || d, (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t), (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t), !1 === e.result && e.preventDefault());
                return e.type = d, r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null), S.event.triggered = d, e.isPropagationStopped() && f.addEventListener(d, xt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, xt), S.event.triggered = void 0, a && (n[u] = a)), e.result
            }
        },
        simulate: function(e, t, n) {
            var r = S.extend(new S.Event, n, {
                type: e,
                isSimulated: !0
            });
            S.event.trigger(r, null, t)
        }
    }), S.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                S.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return S.event.trigger(e, t, n, !0)
        }
    }), y.focusin || S.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        var i = function(e) {
            S.event.simulate(r, e.target, S.event.fix(e))
        };
        S.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this.document || this,
                    t = Y.access(e, r);
                t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this.document || this,
                    t = Y.access(e, r) - 1;
                t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r))
            }
        }
    });
    var bt = C.location,
        wt = {
            guid: Date.now()
        },
        Tt = /\?/;
    S.parseXML = function(e) {
        var t, n;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new C.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {}
        return n = t && t.getElementsByTagName("parsererror")[0], t && !n || S.error("Invalid XML: " + (n ? S.map(n.childNodes, function(e) {
            return e.textContent
        }).join("\n") : e)), t
    };
    var Ct = /\[\]$/,
        Et = /\r?\n/g,
        St = /^(?:submit|button|image|reset|file)$/i,
        kt = /^(?:input|select|textarea|keygen)/i;

    function At(n, e, r, i) {
        var t;
        if (Array.isArray(e)) S.each(e, function(e, t) {
            r || Ct.test(n) ? i(n, t) : At(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
        });
        else if (r || "object" !== w(e)) i(n, e);
        else
            for (t in e) At(n + "[" + t + "]", e[t], r, i)
    }
    S.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                var n = m(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (null == e) return "";
        if (Array.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) At(n, e[n], t, i);
        return r.join("&")
    }, S.fn.extend({
        serialize: function() {
            return S.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = S.prop(this, "elements");
                return e ? S.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !S(this).is(":disabled") && kt.test(this.nodeName) && !St.test(e) && (this.checked || !pe.test(e))
            }).map(function(e, t) {
                var n = S(this).val();
                return null == n ? null : Array.isArray(n) ? S.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Et, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Et, "\r\n")
                }
            }).get()
        }
    });
    var Nt = /%20/g,
        jt = /#.*$/,
        Dt = /([?&])_=[^&]*/,
        qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Lt = /^(?:GET|HEAD)$/,
        Ht = /^\/\//,
        Ot = {},
        Pt = {},
        Rt = "*/".concat("*"),
        Mt = E.createElement("a");

    function It(o) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0,
                i = e.toLowerCase().match(P) || [];
            if (m(t))
                while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
        }
    }

    function Wt(t, i, o, a) {
        var s = {},
            u = t === Pt;

        function l(e) {
            var r;
            return s[e] = !0, S.each(t[e] || [], function(e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), l(n), !1)
            }), r
        }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }

    function Ft(e, t) {
        var n, r, i = S.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && S.extend(!0, e, r), e
    }
    Mt.href = bt.href, S.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: bt.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Rt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": S.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Ft(Ft(e, S.ajaxSettings), t) : Ft(S.ajaxSettings, e)
        },
        ajaxPrefilter: It(Ot),
        ajaxTransport: It(Pt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var c, f, p, n, d, r, h, g, i, o, v = S.ajaxSetup({}, t),
                y = v.context || v,
                m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
                x = S.Deferred(),
                b = S.Callbacks("once memory"),
                w = v.statusCode || {},
                a = {},
                s = {},
                u = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (h) {
                            if (!n) {
                                n = {};
                                while (t = qt.exec(p)) n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2])
                            }
                            t = n[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return h ? p : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == h && (v.mimeType = e), this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (h) T.always(e[T.status]);
                            else
                                for (t in e) w[t] = [w[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || u;
                        return c && c.abort(t), l(0, t), this
                    }
                };
            if (x.promise(T), v.url = ((e || v.url || bt.href) + "").replace(Ht, bt.protocol + "//"), v.type = t.method || t.type || v.method || v.type, v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""], null == v.crossDomain) {
                r = E.createElement("a");
                try {
                    r.href = v.url, r.href = r.href, v.crossDomain = Mt.protocol + "//" + Mt.host != r.protocol + "//" + r.host
                } catch (e) {
                    v.crossDomain = !0
                }
            }
            if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)), Wt(Ot, v, t, T), h) return T;
            for (i in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), v.type = v.type.toUpperCase(), v.hasContent = !Lt.test(v.type), f = v.url.replace(jt, ""), v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Nt, "+")) : (o = v.url.slice(f.length), v.data && (v.processData || "string" == typeof v.data) && (f += (Tt.test(f) ? "&" : "?") + v.data, delete v.data), !1 === v.cache && (f = f.replace(Dt, "$1"), o = (Tt.test(f) ? "&" : "?") + "_=" + wt.guid++ + o), v.url = f + o), v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]), S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])), (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType), T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : v.accepts["*"]), v.headers) T.setRequestHeader(i, v.headers[i]);
            if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
            if (u = "abort", b.add(v.complete), T.done(v.success), T.fail(v.error), c = Wt(Pt, v, t, T)) {
                if (T.readyState = 1, g && m.trigger("ajaxSend", [T, v]), h) return T;
                v.async && 0 < v.timeout && (d = C.setTimeout(function() {
                    T.abort("timeout")
                }, v.timeout));
                try {
                    h = !1, c.send(a, l)
                } catch (e) {
                    if (h) throw e;
                    l(-1, e)
                }
            } else l(-1, "No Transport");

            function l(e, t, n, r) {
                var i, o, a, s, u, l = t;
                h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) {
                    var r, i, o, a, s = e.contents,
                        u = e.dataTypes;
                    while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                        for (i in s)
                            if (s[i] && s[i].test(r)) {
                                u.unshift(i);
                                break
                            }
                    if (u[0] in n) o = u[0];
                    else {
                        for (i in n) {
                            if (!u[0] || e.converters[i + " " + u[0]]) {
                                o = i;
                                break
                            }
                            a || (a = i)
                        }
                        o = o || a
                    }
                    if (o) return o !== u[0] && u.unshift(o), n[o]
                }(v, T, n)), !i && -1 < S.inArray("script", v.dataTypes) && S.inArray("json", v.dataTypes) < 0 && (v.converters["text script"] = function() {}), s = function(e, t, n, r) {
                    var i, o, a, s, u, l = {},
                        c = e.dataTypes.slice();
                    if (c[1])
                        for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    o = c.shift();
                    while (o)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), u = o, o = c.shift())
                            if ("*" === o) o = u;
                            else if ("*" !== u && u !== o) {
                        if (!(a = l[u + " " + o] || l["* " + o]))
                            for (i in l)
                                if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                    !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                                    break
                                }
                        if (!0 !== a)
                            if (a && e["throws"]) t = a(t);
                            else try {
                                t = a(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: a ? e : "No conversion from " + u + " to " + o
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(v, s, T, i), i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u), (u = T.getResponseHeader("etag")) && (S.etag[f] = u)), 204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, o = s.data, i = !(a = s.error))) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]), T.statusCode(w), w = void 0, g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]), b.fireWith(y, [T, l]), g && (m.trigger("ajaxComplete", [T, v]), --S.active || S.event.trigger("ajaxStop")))
            }
            return T
        },
        getJSON: function(e, t, n) {
            return S.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return S.get(e, void 0, t, "script")
        }
    }), S.each(["get", "post"], function(e, i) {
        S[i] = function(e, t, n, r) {
            return m(t) && (r = r || n, n = t, t = void 0), S.ajax(S.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, S.isPlainObject(e) && e))
        }
    }), S.ajaxPrefilter(function(e) {
        var t;
        for (t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
    }), S._evalUrl = function(e, t, n) {
        return S.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: {
                "text script": function() {}
            },
            dataFilter: function(e) {
                S.globalEval(e, t, n)
            }
        })
    }, S.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (m(e) && (e = e.call(this[0])), t = S(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(n) {
            return m(n) ? this.each(function(e) {
                S(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = S(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = m(t);
            return this.each(function(e) {
                S(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                S(this).replaceWith(this.childNodes)
            }), this
        }
    }), S.expr.pseudos.hidden = function(e) {
        return !S.expr.pseudos.visible(e)
    }, S.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, S.ajaxSettings.xhr = function() {
        try {
            return new C.XMLHttpRequest
        } catch (e) {}
    };
    var Bt = {
            0: 200,
            1223: 204
        },
        $t = S.ajaxSettings.xhr();
    y.cors = !!$t && "withCredentials" in $t, y.ajax = $t = !!$t, S.ajaxTransport(function(i) {
        var o, a;
        if (y.cors || $t && !i.crossDomain) return {
            send: function(e, t) {
                var n, r = i.xhr();
                if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)
                    for (n in i.xhrFields) r[n] = i.xhrFields[n];
                for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) r.setRequestHeader(n, e[n]);
                o = function(e) {
                    return function() {
                        o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Bt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                            binary: r.response
                        } : {
                            text: r.responseText
                        }, r.getAllResponseHeaders()))
                    }
                }, r.onload = o(), a = r.onerror = r.ontimeout = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                    4 === r.readyState && C.setTimeout(function() {
                        o && a()
                    })
                }, o = o("abort");
                try {
                    r.send(i.hasContent && i.data || null)
                } catch (e) {
                    if (o) throw e
                }
            },
            abort: function() {
                o && o()
            }
        }
    }), S.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), S.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return S.globalEval(e), e
            }
        }
    }), S.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), S.ajaxTransport("script", function(n) {
        var r, i;
        if (n.crossDomain || n.scriptAttrs) return {
            send: function(e, t) {
                r = S("<script>").attr(n.scriptAttrs || {}).prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", i = function(e) {
                    r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), E.head.appendChild(r[0])
            },
            abort: function() {
                i && i()
            }
        }
    });
    var _t, zt = [],
        Ut = /(=)\?(?=&|$)|\?\?/;
    S.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = zt.pop() || S.expando + "_" + wt.guid++;
            return this[e] = !0, e
        }
    }), S.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, a = !1 !== e.jsonp && (Ut.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Ut, "$1" + r) : !1 !== e.jsonp && (e.url += (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
            return o || S.error(r + " was not called"), o[0]
        }, e.dataTypes[0] = "json", i = C[r], C[r] = function() {
            o = arguments
        }, n.always(function() {
            void 0 === i ? S(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, zt.push(r)), o && m(i) && i(o[0]), o = i = void 0
        }), "script"
    }), y.createHTMLDocument = ((_t = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === _t.childNodes.length), S.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href, t.head.appendChild(r)) : t = E), o = !n && [], (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o), o && o.length && S(o).remove(), S.merge([], i.childNodes)));
        var r, i, o
    }, S.fn.load = function(e, t, n) {
        var r, i, o, a = this,
            s = e.indexOf(" ");
        return -1 < s && (r = ht(e.slice(s)), e = e.slice(0, s)), m(t) ? (n = t, t = void 0) : t && "object" == typeof t && (i = "POST"), 0 < a.length && S.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }), this
    }, S.expr.pseudos.animated = function(t) {
        return S.grep(S.timers, function(e) {
            return t === e.elem
        }).length
    }, S.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = S.css(e, "position"),
                c = S(e),
                f = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), o = S.css(e, "top"), u = S.css(e, "left"), ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), m(t) && (t = t.call(e, n, S.extend({}, s))), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f)
        }
    }, S.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                S.offset.setOffset(this, t, e)
            });
            var e, n, r = this[0];
            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, r = this[0],
                    i = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();
                else {
                    t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                    while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position")) e = e.parentNode;
                    e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0), i.left += S.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - i.top - S.css(r, "marginTop", !0),
                    left: t.left - i.left - S.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent;
                while (e && "static" === S.css(e, "position")) e = e.offsetParent;
                return e || re
            })
        }
    }), S.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = "pageYOffset" === i;
        S.fn[t] = function(e) {
            return $(this, function(e, t, n) {
                var r;
                if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === n) return r ? r[i] : e[t];
                r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
            }, t, e, arguments.length)
        }
    }), S.each(["top", "left"], function(e, n) {
        S.cssHooks[n] = Fe(y.pixelPosition, function(e, t) {
            if (t) return t = We(e, n), Pe.test(t) ? S(e).position()[n] + "px" : t
        })
    }), S.each({
        Height: "height",
        Width: "width"
    }, function(a, s) {
        S.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function(r, o) {
            S.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e),
                    i = r || (!0 === e || !0 === t ? "margin" : "border");
                return $(this, function(e, t, n) {
                    var r;
                    return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i)
                }, s, n ? e : void 0, n)
            }
        })
    }), S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        S.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), S.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        S.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    });
    var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    S.proxy = function(e, t) {
        var n, r, i;
        if ("string" == typeof t && (n = e[t], t = e, e = n), m(e)) return r = s.call(arguments, 2), (i = function() {
            return e.apply(t || this, r.concat(s.call(arguments)))
        }).guid = e.guid = e.guid || S.guid++, i
    }, S.holdReady = function(e) {
        e ? S.readyWait++ : S.ready(!0)
    }, S.isArray = Array.isArray, S.parseJSON = JSON.parse, S.nodeName = A, S.isFunction = m, S.isWindow = x, S.camelCase = X, S.type = w, S.now = Date.now, S.isNumeric = function(e) {
        var t = S.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, S.trim = function(e) {
        return null == e ? "" : (e + "").replace(Xt, "")
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return S
    });
    var Vt = C.jQuery,
        Gt = C.$;
    return S.noConflict = function(e) {
        return C.$ === S && (C.$ = Gt), e && C.jQuery === S && (C.jQuery = Vt), S
    }, "undefined" == typeof e && (C.jQuery = C.$ = S), S
}); /*!jQuery Migrate v3.3.2 | (c) OpenJS Foundation and other contributors | jquery.org/license*/
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
    function(t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], function(e) {
            return t(e, window)
        }) : "object" == typeof module && module.exports ? module.exports = t(require("jquery"), window) : t(jQuery, window)
    }(function(s, n) {
        "use strict";

        function e(e) {
            return 0 <= function(e, t) {
                for (var r = /^(\d+)\.(\d+)\.(\d+)/, n = r.exec(e) || [], o = r.exec(t) || [], i = 1; i <= 3; i++) {
                    if (+o[i] < +n[i]) return 1;
                    if (+n[i] < +o[i]) return -1
                }
                return 0
            }(s.fn.jquery, e)
        }
        s.migrateVersion = "3.3.2", n.console && n.console.log && (s && e("3.0.0") || n.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"), s.migrateWarnings && n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"), n.console.log("JQMIGRATE: Migrate is installed" + (s.migrateMute ? "" : " with logging active") + ", version " + s.migrateVersion));
        var r = {};

        function u(e) {
            var t = n.console;
            s.migrateDeduplicateWarnings && r[e] || (r[e] = !0, s.migrateWarnings.push(e), t && t.warn && !s.migrateMute && (t.warn("JQMIGRATE: " + e), s.migrateTrace && t.trace && t.trace()))
        }

        function t(e, t, r, n) {
            Object.defineProperty(e, t, {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return u(n), r
                },
                set: function(e) {
                    u(n), r = e
                }
            })
        }

        function o(e, t, r, n) {
            e[t] = function() {
                return u(n), r.apply(this, arguments)
            }
        }
        s.migrateDeduplicateWarnings = !0, s.migrateWarnings = [], void 0 === s.migrateTrace && (s.migrateTrace = !0), s.migrateReset = function() {
            r = {}, s.migrateWarnings.length = 0
        }, "BackCompat" === n.document.compatMode && u("jQuery is not compatible with Quirks Mode");
        var i, a, c, d = {},
            l = s.fn.init,
            p = s.find,
            f = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
            y = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
            m = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        for (i in s.fn.init = function(e) {
                var t = Array.prototype.slice.call(arguments);
                return "string" == typeof e && "#" === e && (u("jQuery( '#' ) is not a valid selector"), t[0] = []), l.apply(this, t)
            }, s.fn.init.prototype = s.fn, s.find = function(t) {
                var r = Array.prototype.slice.call(arguments);
                if ("string" == typeof t && f.test(t)) try {
                    n.document.querySelector(t)
                } catch (e) {
                    t = t.replace(y, function(e, t, r, n) {
                        return "[" + t + r + '"' + n + '"]'
                    });
                    try {
                        n.document.querySelector(t), u("Attribute selector with '#' must be quoted: " + r[0]), r[0] = t
                    } catch (e) {
                        u("Attribute selector with '#' was not fixed: " + r[0])
                    }
                }
                return p.apply(this, r)
            }, p) Object.prototype.hasOwnProperty.call(p, i) && (s.find[i] = p[i]);
        o(s.fn, "size", function() {
            return this.length
        }, "jQuery.fn.size() is deprecated and removed; use the .length property"), o(s, "parseJSON", function() {
            return JSON.parse.apply(null, arguments)
        }, "jQuery.parseJSON is deprecated; use JSON.parse"), o(s, "holdReady", s.holdReady, "jQuery.holdReady is deprecated"), o(s, "unique", s.uniqueSort, "jQuery.unique is deprecated; use jQuery.uniqueSort"), t(s.expr, "filters", s.expr.pseudos, "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"), t(s.expr, ":", s.expr.pseudos, "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"), e("3.1.1") && o(s, "trim", function(e) {
            return null == e ? "" : (e + "").replace(m, "")
        }, "jQuery.trim is deprecated; use String.prototype.trim"), e("3.2.0") && (o(s, "nodeName", function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }, "jQuery.nodeName is deprecated"), o(s, "isArray", Array.isArray, "jQuery.isArray is deprecated; use Array.isArray")), e("3.3.0") && (o(s, "isNumeric", function(e) {
            var t = typeof e;
            return ("number" == t || "string" == t) && !isNaN(e - parseFloat(e))
        }, "jQuery.isNumeric() is deprecated"), s.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            d["[object " + t + "]"] = t.toLowerCase()
        }), o(s, "type", function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? d[Object.prototype.toString.call(e)] || "object" : typeof e
        }, "jQuery.type is deprecated"), o(s, "isFunction", function(e) {
            return "function" == typeof e
        }, "jQuery.isFunction() is deprecated"), o(s, "isWindow", function(e) {
            return null != e && e === e.window
        }, "jQuery.isWindow() is deprecated")), s.ajax && (a = s.ajax, c = /(=)\?(?=&|$)|\?\?/, s.ajax = function() {
            var e = a.apply(this, arguments);
            return e.promise && (o(e, "success", e.done, "jQXHR.success is deprecated and removed"), o(e, "error", e.fail, "jQXHR.error is deprecated and removed"), o(e, "complete", e.always, "jQXHR.complete is deprecated and removed")), e
        }, e("4.0.0") || s.ajaxPrefilter("+json", function(e) {
            !1 !== e.jsonp && (c.test(e.url) || "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && c.test(e.data)) && u("JSON-to-JSONP auto-promotion is deprecated")
        }));
        var g = s.fn.removeAttr,
            h = s.fn.toggleClass,
            v = /\S+/g;

        function j(e) {
            return e.replace(/-([a-z])/g, function(e, t) {
                return t.toUpperCase()
            })
        }
        s.fn.removeAttr = function(e) {
            var r = this;
            return s.each(e.match(v), function(e, t) {
                s.expr.match.bool.test(t) && (u("jQuery.fn.removeAttr no longer sets boolean properties: " + t), r.prop(t, !1))
            }), g.apply(this, arguments)
        };
        var Q, b = !(s.fn.toggleClass = function(t) {
                return void 0 !== t && "boolean" != typeof t ? h.apply(this, arguments) : (u("jQuery.fn.toggleClass( boolean ) is deprecated"), this.each(function() {
                    var e = this.getAttribute && this.getAttribute("class") || "";
                    e && s.data(this, "__className__", e), this.setAttribute && this.setAttribute("class", !e && !1 !== t && s.data(this, "__className__") || "")
                }))
            }),
            w = /^[a-z]/,
            x = /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
        s.swap && s.each(["height", "width", "reliableMarginRight"], function(e, t) {
            var r = s.cssHooks[t] && s.cssHooks[t].get;
            r && (s.cssHooks[t].get = function() {
                var e;
                return b = !0, e = r.apply(this, arguments), b = !1, e
            })
        }), s.swap = function(e, t, r, n) {
            var o, i, a = {};
            for (i in b || u("jQuery.swap() is undocumented and deprecated"), t) a[i] = e.style[i], e.style[i] = t[i];
            for (i in o = r.apply(e, n || []), t) e.style[i] = a[i];
            return o
        }, e("3.4.0") && "undefined" != typeof Proxy && (s.cssProps = new Proxy(s.cssProps || {}, {
            set: function() {
                return u("JQMIGRATE: jQuery.cssProps is deprecated"), Reflect.set.apply(this, arguments)
            }
        })), s.cssNumber || (s.cssNumber = {}), Q = s.fn.css, s.fn.css = function(e, t) {
            var r, n, o = this;
            return e && "object" == typeof e && !Array.isArray(e) ? (s.each(e, function(e, t) {
                s.fn.css.call(o, e, t)
            }), this) : ("number" == typeof t && (r = j(e), n = r, w.test(n) && x.test(n[0].toUpperCase() + n.slice(1)) || s.cssNumber[r] || u('Number-typed values are deprecated for jQuery.fn.css( "' + e + '", value )')), Q.apply(this, arguments))
        };
        var A, k, S, M, N = s.data;
        s.data = function(e, t, r) {
            var n, o, i;
            if (t && "object" == typeof t && 2 === arguments.length) {
                for (i in n = s.hasData(e) && N.call(this, e), o = {}, t) i !== j(i) ? (u("jQuery.data() always sets/gets camelCased names: " + i), n[i] = t[i]) : o[i] = t[i];
                return N.call(this, e, o), t
            }
            return t && "string" == typeof t && t !== j(t) && (n = s.hasData(e) && N.call(this, e)) && t in n ? (u("jQuery.data() always sets/gets camelCased names: " + t), 2 < arguments.length && (n[t] = r), n[t]) : N.apply(this, arguments)
        }, s.fx && (S = s.Tween.prototype.run, M = function(e) {
            return e
        }, s.Tween.prototype.run = function() {
            1 < s.easing[this.easing].length && (u("'jQuery.easing." + this.easing.toString() + "' should use only one argument"), s.easing[this.easing] = M), S.apply(this, arguments)
        }, A = s.fx.interval || 13, k = "jQuery.fx.interval is deprecated", n.requestAnimationFrame && Object.defineProperty(s.fx, "interval", {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return n.document.hidden || u(k), A
            },
            set: function(e) {
                u(k), A = e
            }
        }));
        var R = s.fn.load,
            H = s.event.add,
            C = s.event.fix;
        s.event.props = [], s.event.fixHooks = {}, t(s.event.props, "concat", s.event.props.concat, "jQuery.event.props.concat() is deprecated and removed"), s.event.fix = function(e) {
            var t, r = e.type,
                n = this.fixHooks[r],
                o = s.event.props;
            if (o.length) {
                u("jQuery.event.props are deprecated and removed: " + o.join());
                while (o.length) s.event.addProp(o.pop())
            }
            if (n && !n._migrated_ && (n._migrated_ = !0, u("jQuery.event.fixHooks are deprecated and removed: " + r), (o = n.props) && o.length))
                while (o.length) s.event.addProp(o.pop());
            return t = C.call(this, e), n && n.filter ? n.filter(t, e) : t
        }, s.event.add = function(e, t) {
            return e === n && "load" === t && "complete" === n.document.readyState && u("jQuery(window).on('load'...) called after load event occurred"), H.apply(this, arguments)
        }, s.each(["load", "unload", "error"], function(e, t) {
            s.fn[t] = function() {
                var e = Array.prototype.slice.call(arguments, 0);
                return "load" === t && "string" == typeof e[0] ? R.apply(this, e) : (u("jQuery.fn." + t + "() is deprecated"), e.splice(0, 0, t), arguments.length ? this.on.apply(this, e) : (this.triggerHandler.apply(this, e), this))
            }
        }), s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, r) {
            s.fn[r] = function(e, t) {
                return u("jQuery.fn." + r + "() event shorthand is deprecated"), 0 < arguments.length ? this.on(r, null, e, t) : this.trigger(r)
            }
        }), s(function() {
            s(n.document).triggerHandler("ready")
        }), s.event.special.ready = {
            setup: function() {
                this === n.document && u("'ready' event is deprecated")
            }
        }, s.fn.extend({
            bind: function(e, t, r) {
                return u("jQuery.fn.bind() is deprecated"), this.on(e, null, t, r)
            },
            unbind: function(e, t) {
                return u("jQuery.fn.unbind() is deprecated"), this.off(e, null, t)
            },
            delegate: function(e, t, r, n) {
                return u("jQuery.fn.delegate() is deprecated"), this.on(t, e, r, n)
            },
            undelegate: function(e, t, r) {
                return u("jQuery.fn.undelegate() is deprecated"), 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", r)
            },
            hover: function(e, t) {
                return u("jQuery.fn.hover() is deprecated"), this.on("mouseenter", e).on("mouseleave", t || e)
            }
        });

        function T(e) {
            var t = n.document.implementation.createHTMLDocument("");
            return t.body.innerHTML = e, t.body && t.body.innerHTML
        }

        function P(e) {
            var t = e.replace(O, "<$1></$2>");
            t !== e && T(e) !== T(t) && u("HTML tags must be properly nested and closed: " + e)
        }
        var O = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            q = s.htmlPrefilter;
        s.UNSAFE_restoreLegacyHtmlPrefilter = function() {
            s.htmlPrefilter = function(e) {
                return P(e), e.replace(O, "<$1></$2>")
            }
        }, s.htmlPrefilter = function(e) {
            return P(e), q(e)
        };
        var D, _ = s.fn.offset;
        s.fn.offset = function() {
            var e = this[0];
            return !e || e.nodeType && e.getBoundingClientRect ? _.apply(this, arguments) : (u("jQuery.fn.offset() requires a valid DOM element"), arguments.length ? this : void 0)
        }, s.ajax && (D = s.param, s.param = function(e, t) {
            var r = s.ajaxSettings && s.ajaxSettings.traditional;
            return void 0 === t && r && (u("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"), t = r), D.call(this, e, t)
        });
        var E, F, J = s.fn.andSelf || s.fn.addBack;
        return s.fn.andSelf = function() {
            return u("jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"), J.apply(this, arguments)
        }, s.Deferred && (E = s.Deferred, F = [
            ["resolve", "done", s.Callbacks("once memory"), s.Callbacks("once memory"), "resolved"],
            ["reject", "fail", s.Callbacks("once memory"), s.Callbacks("once memory"), "rejected"],
            ["notify", "progress", s.Callbacks("memory"), s.Callbacks("memory")]
        ], s.Deferred = function(e) {
            var i = E(),
                a = i.promise();
            return i.pipe = a.pipe = function() {
                var o = arguments;
                return u("deferred.pipe() is deprecated"), s.Deferred(function(n) {
                    s.each(F, function(e, t) {
                        var r = "function" == typeof o[e] && o[e];
                        i[t[1]](function() {
                            var e = r && r.apply(this, arguments);
                            e && "function" == typeof e.promise ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[t[0] + "With"](this === a ? n.promise() : this, r ? [e] : arguments)
                        })
                    }), o = null
                }).promise()
            }, e && e.call(i, i), i
        }, s.Deferred.exceptionHook = E.exceptionHook), s
    });
jQuery(document).ready((function($) {
    function init_bodymovin() {
        if ("undefined" == typeof wpbodymovin) return !1;
        for (var id in wpbodymovin.animations) wpbodymovin.animations[id].lazyload || void 0 === wpbodymovin.animations[id].animation_data ? async_anim_load(id, wpbodymovin.animations[id]) : anim_load(id, wpbodymovin.animations[id], wpbodymovin.animations[id].animation_data)
    }

    function async_anim_load(id, animation) {
        var ajax_data = {
            action: "wpbdmv_get_animation",
            animation_id: wpbodymovin.animations[id].id
        };
        jQuery.post(wpbodymovin.ajaxurl, ajax_data, (function(response) {
            var firstRenderImage;
            (jQuery("#" + animation.container_id).removeClass("loading"), "ok" === response.result) && (jQuery("#" + animation.container_id + " .js-animation-first-render-image").remove(), anim_load(id, animation, response.json_string))
        }))
    }

    function anim_load(id, animation, anim_data) {
        var animData = {
                container: document.getElementById(animation.container_id),
                renderer: void 0 !== animation.renderer ? animation.renderer : "svg",
                loop: animation.loop,
                assetsPath: void 0 !== animation.assets_path ? animation.assets_path : null,
                autoplay: !animation.autoplay_viewport && animation.autoplay_onload,
                rendererSettings: {
                    progressiveLoad: !1
                },
                animationData: JSON.parse(anim_data)
            },
            $container = jQuery("#" + animation.container_id),
            $container_hover = jQuery("#" + animation.container_id + ".js-activate-on-hover");
        wpbodymovin.animations[id].instance = bodymovin.loadAnimation(animData), $container_hover.parent().mouseover((function() {
            if ($container.hasClass("paused")) return !0;
            animation.instance.goToAndPlay(0), $container.addClass("playing").removeClass("paused")
        })), $(window).on("wpbodymovin_anim_load resize scroll", (function() {
            if (!0 === animation.autoplay_viewport && "function" == typeof jQuery.fn.isOnScreen)
                if ($container.isOnScreen((function(deltas) {
                        return deltas.top >= -100 && deltas.bottom >= -100
                    }))) {
                    if ($container.hasClass("playing")) return !0;
                    animation.instance.goToAndPlay(0), $container.addClass("playing").removeClass("paused")
                } else if (!0 === animation.autostop_viewport) {
                if ($container.hasClass("paused")) return !0;
                animation.instance.pause(), $container.addClass("paused").removeClass("playing")
            }
        })), $(window).trigger("wpbodymovin_anim_load")
    }
    init_bodymovin()
}));
! function(a) {
    a.fn.isOnScreen = function(b) {
        var c = this.outerHeight(),
            d = this.outerWidth();
        if (!d || !c) return !1;
        var e = a(window),
            f = {
                top: e.scrollTop(),
                left: e.scrollLeft()
            };
        f.right = f.left + e.width(), f.bottom = f.top + e.height();
        var g = this.offset();
        g.right = g.left + d, g.bottom = g.top + c;
        var h = {
            top: f.bottom - g.top,
            left: f.right - g.left,
            bottom: g.bottom - f.top,
            right: g.right - f.left
        };
        return "function" == typeof b ? b.call(this, h) : h.top > 0 && h.left > 0 && h.right > 0 && h.bottom > 0
    }
}(jQuery);
! function(e) {
    function n(n) {
        for (var t, o, c = n[0], u = n[1], i = 0, s = []; i < c.length; i++) o = c[i], Object.prototype.hasOwnProperty.call(r, o) && r[o] && s.push(r[o][0]), r[o] = 0;
        for (t in u) Object.prototype.hasOwnProperty.call(u, t) && (e[t] = u[t]);
        for (a && a(n); s.length;) s.shift()()
    }
    var t = {},
        r = {
            50: 0
        };

    function o(n) {
        if (t[n]) return t[n].exports;
        var r = t[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(r.exports, r, r.exports, o), r.l = !0, r.exports
    }
    o.e = function(e) {
        var n = [],
            t = r[e];
        if (0 !== t)
            if (t) n.push(t[2]);
            else {
                var c = new Promise((function(n, o) {
                    t = r[e] = [n, o]
                }));
                n.push(t[2] = c);
                var u, i = document.createElement("script");
                i.charset = "utf-8", i.timeout = 120, o.nc && i.setAttribute("nonce", o.nc), i.src = function(e) {
                    return o.p + "scripts/" + ({
                        0: "vendors~chunk10~chunk12~chunk16~chunk18~chunk2~chunk20~chunk22~chunk26~chunk28~chunk30~chunk4",
                        1: "vendors~chunk0~chunk12~chunk16~chunk18~chunk2~chunk20~chunk22~chunk24~chunk28~chunk6",
                        2: "chunk0",
                        3: "chunk10",
                        4: "chunk12",
                        5: "chunk14",
                        6: "chunk16",
                        7: "chunk18",
                        8: "chunk2",
                        9: "chunk20",
                        10: "chunk22",
                        11: "chunk24",
                        12: "chunk26",
                        13: "chunk28",
                        14: "chunk30",
                        15: "chunk4",
                        16: "chunk6",
                        17: "chunk8",
                        18: "vendors~chunk6"
                    }[e] || e) + "-ef321533480df4548b8c.js"
                }(e);
                var a = new Error;
                u = function(n) {
                    i.onerror = i.onload = null, clearTimeout(s);
                    var t = r[e];
                    if (0 !== t) {
                        if (t) {
                            var o = n && ("load" === n.type ? "missing" : n.type),
                                c = n && n.target && n.target.src;
                            a.message = "Loading chunk " + e + " failed.\n(" + o + ": " + c + ")", a.name = "ChunkLoadError", a.type = o, a.request = c, t[1](a)
                        }
                        r[e] = void 0
                    }
                };
                var s = setTimeout((function() {
                    u({
                        type: "timeout",
                        target: i
                    })
                }), 12e4);
                i.onerror = i.onload = u, document.head.appendChild(i)
            }
        return Promise.all(n)
    }, o.m = e, o.c = t, o.d = function(e, n, t) {
        o.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: t
        })
    }, o.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, o.t = function(e, n) {
        if (1 & n && (e = o(e)), 8 & n) return e;
        if (4 & n && "object" == typeof e && e && e.__esModule) return e;
        var t = Object.create(null);
        if (o.r(t), Object.defineProperty(t, "default", {
                enumerable: !0,
                value: e
            }), 2 & n && "string" != typeof e)
            for (var r in e) o.d(t, r, function(n) {
                return e[n]
            }.bind(null, r));
        return t
    }, o.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return o.d(n, "a", n), n
    }, o.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }, o.p = "/wp-content/themes/koombea/dist/", o.oe = function(e) {
        throw console.error(e), e
    };
    var c = window.webpackJsonp = window.webpackJsonp || [],
        u = c.push.bind(c);
    c.push = n, c = c.slice();
    for (var i = 0; i < c.length; i++) n(c[i]);
    var a = u;
    o(o.s = 1013)
}({
    0: function(e, n) {
        e.exports = jQuery
    },
    1: function(e, n, t) {
        var r = {
            "./about": [2, 1, 2],
            "./about.js": [2, 1, 2],
            "./app": [3, 0, 1, 8],
            "./app.js": [3, 0, 1, 8],
            "./blog": [4, 0, 15],
            "./blog.js": [4, 0, 15],
            "./careers": [5, 1, 18, 16],
            "./careers.js": [5, 1, 18, 16],
            "./common": [17, 17],
            "./common.js": [17, 17],
            "./contact": [6, 0, 3],
            "./contact.js": [6, 0, 3],
            "./design": [7, 0, 1, 4],
            "./design.js": [7, 0, 1, 4],
            "./faq": [8, 5],
            "./faq.js": [8, 5],
            "./home": [9, 0, 1, 6],
            "./home.js": [9, 0, 1, 6],
            "./industries": [10, 0, 1, 7],
            "./industries.js": [10, 0, 1, 7],
            "./landing": [11, 0, 1, 9],
            "./landing.js": [11, 0, 1, 9],
            "./locations": [12, 0, 1, 10],
            "./locations.js": [12, 0, 1, 10],
            "./our-work": [13, 1, 11],
            "./our-work.js": [13, 1, 11],
            "./post": [14, 0, 12],
            "./post.js": [14, 0, 12],
            "./services": [15, 0, 1, 13],
            "./services.js": [15, 0, 1, 13],
            "./tag": [16, 0, 14],
            "./tag.js": [16, 0, 14]
        };

        function o(e) {
            if (!t.o(r, e)) return Promise.resolve().then((function() {
                var n = new Error("Cannot find module '" + e + "'");
                throw n.code = "MODULE_NOT_FOUND", n
            }));
            var n = r[e],
                o = n[0];
            return Promise.all(n.slice(1).map(t.e)).then((function() {
                return t(o)
            }))
        }
        o.keys = function() {
            return Object.keys(r)
        }, o.id = 1, e.exports = o
    },
    1013: function(e, n, t) {
        "use strict";
        t.r(n);
        var r = t(0),
            o = t.n(r),
            c = function(e) {
                return "".concat(e.charAt(0).toLowerCase()).concat(e.replace(/[\W_]/g, "|").split("|").map((function(e) {
                    return "".concat(e.charAt(0).toUpperCase()).concat(e.slice(1))
                })).join("").slice(1))
            };

        function u(e, n) {
            for (var t = 0; t < n.length; t++) {
                var r = n[t];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }
        var i = new(function() {
            function e(n) {
                var t = n.routes,
                    r = n.common;
                ! function(e, n) {
                    if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.routes = t, this.common = r
            }
            var n, r, o;
            return n = e, (r = [{
                key: "fire",
                value: function(e) {
                    if (void 0 !== e)
                        if ("string" == typeof e) {
                            var n = this.routes[e];
                            n && (Array.isArray(this.common) && this.common.map((function(e) {
                                t(1)("./" + e).then((function(e) {
                                    return e.default()
                                })).catch((function(e) {
                                    return console.warn(e)
                                }))
                            })), "string" == typeof this.common && t(1)("./" + this.common).then((function(e) {
                                return e.default()
                            })).catch((function(e) {
                                return console.warn(e)
                            })), t(1)("./" + n).then((function(e) {
                                return e.default()
                            })).catch((function(e) {
                                return console.warn(e)
                            })))
                        } else console.error("Failed to execute 'fire': The 1 parameter must be string.");
                    else console.error("Failed to execute 'fire': The 1 parameter is required, but it was not present.")
                }
            }, {
                key: "loadEvents",
                value: function() {
                    var e = this;
                    document.body.className.toLowerCase().replace(/-/g, "_").split(/\s+/).map(c).forEach((function(n) {
                        return e.fire(n)
                    }))
                }
            }]) && u(n.prototype, r), o && u(n, o), e
        }())({
            routes: {
                home: "industries",
                services: "services",
                our: "our-work",
                contact: "contact",
                koombea: "contact",
                locations: "locations",
                about: "about",
                blog: "blog",
                post: "post",
                shopify: "landing",
                ecommerce: "services",
                app: "app",
                careers: "careers",
                iot: "industries",
                retail: "industries",
                fintech: "industries",
                medtech: "industries",
                hitech: "industries",
                edtech: "industries",
                oportunidades: "careers",
                faq: "faq",
                tag: "tag",
                qa: "services",
                tu: "landing",
                staff: "app",
                fullstack: "app",
                comercio: "app",
                java: "app",
                devops: "app",
                minimum: "app",
                ruby: "app",
                web: "app",
                design: "design",
                auditoria: "design"
            },
            common: ["common"]
        });
        o()(document).ready((function() {
            i.loadEvents()
        }))
    }
});
! function(e) {
    var o = {};

    function t(n) {
        if (o[n]) return o[n].exports;
        var i = o[n] = {
            i: n,
            l: !1,
            exports: {}
        };
        return e[n].call(i.exports, i, i.exports, t), i.l = !0, i.exports
    }
    t.m = e, t.c = o, t.d = function(e, o, n) {
        t.o(e, o) || Object.defineProperty(e, o, {
            enumerable: !0,
            get: n
        })
    }, t.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, t.t = function(e, o) {
        if (1 & o && (e = t(e)), 8 & o) return e;
        if (4 & o && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (t.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & o && "string" != typeof e)
            for (var i in e) t.d(n, i, function(o) {
                return e[o]
            }.bind(null, i));
        return n
    }, t.n = function(e) {
        var o = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(o, "a", o), o
    }, t.o = function(e, o) {
        return Object.prototype.hasOwnProperty.call(e, o)
    }, t.p = "/wp-content/themes/koombea/dist/", t(t.s = 129)
}({
    0: function(e, o) {
        e.exports = jQuery
    },
    129: function(e, o, t) {
        (function(e) {
            function o(e, o, t, n, i, a, r) {
                var c = new Date;
                c.setTime(c.getTime()), t && (t *= 864e5), c = new Date(c.getTime() + t), document.cookie = e + "=" + escape(o) + (t ? ";expires=" + c.toGMTString() : "") + (n ? ";path=" + n : "") + (i ? ";domain=" + i : "") + (r ? ";" + r : "") + (a ? ";secure" : "")
            }

            function t(e) {
                var t = function(e, o) {
                    var t = function() {
                            var e = "",
                                o = "",
                                t = "",
                                i = "",
                                a = "",
                                r = "",
                                c = "",
                                m = "",
                                d = "",
                                l = "",
                                s = "",
                                u = "",
                                p = [
                                    ["bing", "q"],
                                    ["google", "q"],
                                    ["yahoo", "q"],
                                    ["baidu", "q"],
                                    ["yandex", "q"],
                                    ["duckduckgo", "q"],
                                    ["ask", "q"],
                                    ["ecosia", "q"],
                                    ["aol", "q"]
                                ],
                                w = [
                                    ["www.facebook.com"],
                                    ["l.instagram.com"],
                                    ["t.co"],
                                    ["www.linkedin.com"],
                                    ["pinterest.com"],
                                    ["www.tumblr.com"],
                                    ["www.reddit.com"],
                                    ["medium.com"]
                                ],
                                g = document.referrer,
                                f = g = g.substr(g.indexOf("//") + 2),
                                b = "/",
                                h = "",
                                k = document.location.search;
                            if (k.indexOf("utm_source") > -1) e = n(k, "utm_source"), o = n(k, "utm_channel"), t = n(k, "utm_medium"), i = n(k, "utm_campaign"), a = n(k, "utm_term"), r = n(k, "utm_content"), c = n(k, "gclid"), m = n(k, "creative"), d = n(k, "keyword"), l = n(k, "matchtype"), s = n(k, "network"), u = n(k, "device");
                            else if (n(k, "gclid")) e = "google", t = "cpc", i = i || "(not set)";
                            else if (g) {
                                g.indexOf("/") > -1 && (f = g.substr(0, g.indexOf("/")), (b = g.substr(g.indexOf("/"))).indexOf("?") > -1 && (h = b.substr(b.indexOf("?") + 1), b = b.substr(0, b.indexOf("?")))), t = "referral";
                                for (var v = 0; v < w.length; v++)
                                    if (f.indexOf(w[v][0]) > -1) {
                                        t = "social", e = w[v][0], a = n(h, w[v][1]) || "(not provided)";
                                        break
                                    }
                                e = f;
                                for (var _ = 0; _ < p.length; _++)
                                    if (f.indexOf(p[_][0]) > -1) {
                                        t = "organic", e = p[_][0], a = n(h, p[_][1]) || "(not provided)";
                                        break
                                    }
                            }
                            return u = "" != u ? u : function() {
                                var e = !1;
                                (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) && (e = !0);
                                return e
                            }() ? "mobile" : "desktop", {
                                source: e,
                                channel: o,
                                medium: t,
                                campaign: i,
                                term: a,
                                content: r,
                                gclid: c,
                                creative: m,
                                matchtype: l,
                                network: s,
                                keyword: d,
                                device: u
                            }
                        }(),
                        i = 0 === t.source.length ? "direct" : t.source,
                        a = 0 === t.medium.length ? "none" : t.medium,
                        r = 0 === t.campaign.length ? "Not Set" : t.campaign,
                        c = 0 === t.channel.length ? "Unavailable" : t.channel,
                        m = 0 === t.keyword.length ? "none" : t.keyword;
                    "referral" === a && (r = "");
                    "direct" === i && "none" === a ? c = "Direct" : "organic" === a ? c = "Organic Search" : "social" === a ? c = "Social" : "email" === a ? c = "Email" : "referral" === a ? c = "Referral" : /^(cpc|ppc|paidsearch)$/gi.test(a) && (c = "Paid Search");
                    var d = new Date;
                    return {
                        source: i,
                        medium: a,
                        campaign: r,
                        channel: c,
                        term: t.term,
                        content: t.content,
                        gclid: t.gclid,
                        creative: t.creative,
                        matchtype: t.matchtype,
                        network: t.network,
                        keyword: m,
                        device: t.device,
                        date: d.toISOString().slice(0, 10).replace(/-/g, "")
                    }
                }(0, document.location.hostname);
                o(e, !0, 182, "/", window.location.hostname, !0, "SameSite=Lax"), o("koombea_UTM_source", t.source, 182, "/", window.location.hostname, !0, "SameSite=Lax"), o("koombea_UTM_channel", t.channel, 182, "/", window.location.hostname, !0, "SameSite=Lax"), o("koombea_UTM_medium", t.medium, 182, "/", window.location.hostname, !0, "SameSite=Lax"), o("koombea_UTM_campaign", t.campaign, 182, "/", window.location.hostname, !0, "SameSite=Lax"), o("koombea_UTM_term", t.term, 182, "/", window.location.hostname, !0, "SameSite=Lax"), o("koombea_UTM_content", t.content, 182, "/", window.location.hostname, !0, "SameSite=Lax"), o("koombea_UTM_gclid", t.gclid, 182, "/", window.location.hostname, !0, "SameSite=Lax"), o("koombea_UTM_creative", t.creative, 182, "/", window.location.hostname, !0, "SameSite=Lax"), o("koombea_UTM_matchtype", t.matchtype, 182, "/", window.location.hostname, !0, "SameSite=Lax"), o("koombea_UTM_network", t.network, 182, "/", window.location.hostname, !0, "SameSite=Lax"), o("koombea_UTM_keyword", t.keyword, 182, "/", window.location.hostname, !0, "SameSite=Lax"), o("koombea_UTM_device", t.device, 182, "/", window.location.hostname, !0, "SameSite=Lax"), o("koombea_UTM_original_referer_url", document.referrer, 182, "/", window.location.hostname, !0, "SameSite=Lax"), o("koombea_UTM_original_entrance_page", window.location.href, 182, "/", window.location.hostname, !0, "SameSite=Lax"), o("koombea_UTM_date", t.date, 182, "/", window.location.hostname, !0, "SameSite=Lax")
            }

            function n(e, o) {
                try {
                    var t = e.match("[?&]" + o + "=([^&]+)");
                    return t ? t[1] : ""
                } catch (e) {
                    return ""
                }
            }(function(e) {
                for (var o = {}, t = document.cookie.split(";"), n = 0; n < t.length; n++) {
                    var i = t[n].substring(0, t[n].indexOf("=")).trim(),
                        a = t[n].substring(t[n].indexOf("=") + 1, t[n].length).trim();
                    o[i] = a
                }
                return e ? o[e] ? o[e] : null : o
            })("FirstSession") || t("FirstSession"), "undefined" != typeof drift && drift.on("ready", (function() {
                var e = document.cookie.match(/_ga=(.+?);/)[1].split(".").slice(-2).join(".");
                drift.api.setUserAttributes({
                    ga_client_id: e
                })
            }))
        }).call(this, t(0))
    }
});