/*
 Highcharts JS v9.1.0 (2021-05-03)

 (c) 2009-2021 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(e) {
    "object" === typeof module && module.exports ? (e["default"] = e, module.exports = e) : "function" === typeof define && define.amd ? define("highcharts/highcharts-more", ["highcharts"], function(z) {
        e(z);
        e.Highcharts = z;
        return e
    }) : e("undefined" !== typeof Highcharts ? Highcharts : void 0)
})(function(e) {
    function z(e, d, h, c) {
        e.hasOwnProperty(d) || (e[d] = c.apply(null, h))
    }
    e = e ? e._modules : {};
    z(e, "Extensions/Pane.js", [e["Core/Chart/Chart.js"], e["Core/Globals.js"], e["Core/Color/Palette.js"], e["Core/Pointer.js"], e["Core/Utilities.js"],
        e["Mixins/CenteredSeries.js"]
    ], function(e, d, h, c, a, n) {
        function k(b, a, f) {
            return Math.sqrt(Math.pow(b - f[0], 2) + Math.pow(a - f[1], 2)) <= f[2] / 2
        }
        var t = a.addEvent,
            q = a.extend,
            y = a.merge,
            b = a.pick,
            f = a.splat;
        e.prototype.collectionsWithUpdate.push("pane");
        a = function() {
            function b(b, a) {
                this.options = this.chart = this.center = this.background = void 0;
                this.coll = "pane";
                this.defaultOptions = {
                    center: ["50%", "50%"],
                    size: "85%",
                    innerSize: "0%",
                    startAngle: 0
                };
                this.defaultBackgroundOptions = {
                    shape: "circle",
                    borderWidth: 1,
                    borderColor: h.neutralColor20,
                    backgroundColor: {
                        linearGradient: {
                            x1: 0,
                            y1: 0,
                            x2: 0,
                            y2: 1
                        },
                        stops: [
                            [0, h.backgroundColor],
                            [1, h.neutralColor10]
                        ]
                    },
                    from: -Number.MAX_VALUE,
                    innerRadius: 0,
                    to: Number.MAX_VALUE,
                    outerRadius: "105%"
                };
                this.init(b, a)
            }
            b.prototype.init = function(b, a) {
                this.chart = a;
                this.background = [];
                a.pane.push(this);
                this.setOptions(b)
            };
            b.prototype.setOptions = function(b) {
                this.options = y(this.defaultOptions, this.chart.angular ? {
                    background: {}
                } : void 0, b)
            };
            b.prototype.render = function() {
                var b = this.options,
                    a = this.options.background,
                    m = this.chart.renderer;
                this.group || (this.group = m.g("pane-group").attr({
                    zIndex: b.zIndex || 0
                }).add());
                this.updateCenter();
                if (a)
                    for (a = f(a), b = Math.max(a.length, this.background.length || 0), m = 0; m < b; m++) a[m] && this.axis ? this.renderBackground(y(this.defaultBackgroundOptions, a[m]), m) : this.background[m] && (this.background[m] = this.background[m].destroy(), this.background.splice(m, 1))
            };
            b.prototype.renderBackground = function(b, a) {
                var f = "animate",
                    m = {
                        "class": "highcharts-pane " + (b.className || "")
                    };
                this.chart.styledMode || q(m, {
                    fill: b.backgroundColor,
                    stroke: b.borderColor,
                    "stroke-width": b.borderWidth
                });
                this.background[a] || (this.background[a] = this.chart.renderer.path().add(this.group), f = "attr");
                this.background[a][f]({
                    d: this.axis.getPlotBandPath(b.from, b.to, b)
                }).attr(m)
            };
            b.prototype.updateCenter = function(b) {
                this.center = (b || this.axis || {}).center = n.getCenter.call(this)
            };
            b.prototype.update = function(b, a) {
                y(!0, this.options, b);
                y(!0, this.chart.options.pane, b);
                this.setOptions(this.options);
                this.render();
                this.chart.axes.forEach(function(b) {
                    b.pane === this &&
                        (b.pane = null, b.update({}, a))
                }, this)
            };
            return b
        }();
        e.prototype.getHoverPane = function(b) {
            var a = this,
                f;
            b && a.pane.forEach(function(m) {
                var M = b.chartX - a.plotLeft,
                    d = b.chartY - a.plotTop;
                k(a.inverted ? d : M, a.inverted ? M : d, m.center) && (f = m)
            });
            return f
        };
        t(e, "afterIsInsidePlot", function(b) {
            this.polar && (b.isInsidePlot = this.pane.some(function(a) {
                return k(b.x, b.y, a.center)
            }))
        });
        t(c, "beforeGetHoverData", function(a) {
            var f = this.chart;
            f.polar ? (f.hoverPane = f.getHoverPane(a), a.filter = function(m) {
                return m.visible && !(!a.shared &&
                    m.directTouch) && b(m.options.enableMouseTracking, !0) && (!f.hoverPane || m.xAxis.pane === f.hoverPane)
            }) : f.hoverPane = void 0
        });
        t(c, "afterGetHoverData", function(b) {
            var a = this.chart;
            b.hoverPoint && b.hoverPoint.plotX && b.hoverPoint.plotY && a.hoverPane && !k(b.hoverPoint.plotX, b.hoverPoint.plotY, a.hoverPane.center) && (b.hoverPoint = void 0)
        });
        d.Pane = a;
        return d.Pane
    });
    z(e, "Core/Axis/HiddenAxis.js", [], function() {
        return function() {
            function e() {}
            e.init = function(d) {
                d.getOffset = function() {};
                d.redraw = function() {
                    this.isDirty = !1
                };
                d.render = function() {
                    this.isDirty = !1
                };
                d.createLabelCollector = function() {
                    return function() {}
                };
                d.setScale = function() {};
                d.setCategories = function() {};
                d.setTitle = function() {};
                d.isHidden = !0
            };
            return e
        }()
    });
    z(e, "Core/Axis/RadialAxis.js", [e["Core/Axis/Axis.js"], e["Core/Axis/Tick.js"], e["Core/Axis/HiddenAxis.js"], e["Core/Utilities.js"]], function(e, d, h, c) {
        var a = c.addEvent,
            n = c.correctFloat,
            k = c.defined,
            t = c.extend,
            q = c.fireEvent,
            y = c.merge,
            b = c.pick,
            f = c.relativeLength,
            m = c.wrap;
        c = function() {
            function d() {}
            d.init =
                function(a) {
                    var m = e.prototype;
                    a.setOptions = function(b) {
                        b = this.options = y(a.constructor.defaultOptions, this.defaultPolarOptions, b);
                        b.plotBands || (b.plotBands = []);
                        q(this, "afterSetOptions")
                    };
                    a.getOffset = function() {
                        m.getOffset.call(this);
                        this.chart.axisOffset[this.side] = 0
                    };
                    a.getLinePath = function(a, f, u) {
                        a = this.pane.center;
                        var r = this.chart,
                            l = b(f, a[2] / 2 - this.offset),
                            g = this.left || 0,
                            x = this.top || 0;
                        "undefined" === typeof u && (u = this.horiz ? 0 : this.center && -this.center[3] / 2);
                        u && (l += u);
                        this.isCircular || "undefined" !==
                            typeof f ? (f = this.chart.renderer.symbols.arc(g + a[0], x + a[1], l, l, {
                                start: this.startAngleRad,
                                end: this.endAngleRad,
                                open: !0,
                                innerR: 0
                            }), f.xBounds = [g + a[0]], f.yBounds = [x + a[1] - l]) : (f = this.postTranslate(this.angleRad, l), f = [
                                ["M", this.center[0] + r.plotLeft, this.center[1] + r.plotTop],
                                ["L", f.x, f.y]
                            ]);
                        return f
                    };
                    a.setAxisTranslation = function() {
                        m.setAxisTranslation.call(this);
                        this.center && (this.transA = this.isCircular ? (this.endAngleRad - this.startAngleRad) / (this.max - this.min || 1) : (this.center[2] - this.center[3]) / 2 / (this.max -
                            this.min || 1), this.minPixelPadding = this.isXAxis ? this.transA * this.minPointOffset : 0)
                    };
                    a.beforeSetTickPositions = function() {
                        this.autoConnect = this.isCircular && "undefined" === typeof b(this.userMax, this.options.max) && n(this.endAngleRad - this.startAngleRad) === n(2 * Math.PI);
                        !this.isCircular && this.chart.inverted && this.max++;
                        this.autoConnect && (this.max += this.categories && 1 || this.pointRange || this.closestPointRange || 0)
                    };
                    a.setAxisSize = function() {
                        m.setAxisSize.call(this);
                        if (this.isRadial) {
                            this.pane.updateCenter(this);
                            var a = this.center = this.pane.center.slice();
                            if (this.isCircular) this.sector = this.endAngleRad - this.startAngleRad;
                            else {
                                var f = this.postTranslate(this.angleRad, a[3] / 2);
                                a[0] = f.x - this.chart.plotLeft;
                                a[1] = f.y - this.chart.plotTop
                            }
                            this.len = this.width = this.height = (a[2] - a[3]) * b(this.sector, 1) / 2
                        }
                    };
                    a.getPosition = function(a, f) {
                        a = this.translate(a);
                        return this.postTranslate(this.isCircular ? a : this.angleRad, b(this.isCircular ? f : 0 > a ? 0 : a, this.center[2] / 2) - this.offset)
                    };
                    a.postTranslate = function(b, a) {
                        var f = this.chart,
                            r = this.center;
                        b = this.startAngleRad + b;
                        return {
                            x: f.plotLeft + r[0] + Math.cos(b) * a,
                            y: f.plotTop + r[1] + Math.sin(b) * a
                        }
                    };
                    a.getPlotBandPath = function(a, f, u) {
                        var r = function(g) {
                                if ("string" === typeof g) {
                                    var l = parseInt(g, 10);
                                    m.test(g) && (l = l * x / 100);
                                    return l
                                }
                                return g
                            },
                            l = this.center,
                            g = this.startAngleRad,
                            x = l[2] / 2,
                            p = Math.min(this.offset, 0),
                            C = this.left || 0,
                            A = this.top || 0,
                            m = /%$/;
                        var d = this.isCircular;
                        var k = b(r(u.outerRadius), x),
                            c = r(u.innerRadius);
                        r = b(r(u.thickness), 10);
                        if ("polygon" === this.options.gridLineInterpolation) p = this.getPlotLinePath({
                            value: a
                        }).concat(this.getPlotLinePath({
                            value: f,
                            reverse: !0
                        }));
                        else {
                            a = Math.max(a, this.min);
                            f = Math.min(f, this.max);
                            a = this.translate(a);
                            f = this.translate(f);
                            d || (k = a || 0, c = f || 0);
                            if ("circle" !== u.shape && d) u = g + (a || 0), g += f || 0;
                            else {
                                u = -Math.PI / 2;
                                g = 1.5 * Math.PI;
                                var h = !0
                            }
                            k -= p;
                            p = this.chart.renderer.symbols.arc(C + l[0], A + l[1], k, k, {
                                start: Math.min(u, g),
                                end: Math.max(u, g),
                                innerR: b(c, k - (r - p)),
                                open: h
                            });
                            d && (d = (g + u) / 2, C = C + l[0] + l[2] / 2 * Math.cos(d), p.xBounds = d > -Math.PI / 2 && d < Math.PI / 2 ? [C, this.chart.plotWidth] : [0, C], p.yBounds = [A + l[1] + l[2] / 2 * Math.sin(d)], p.yBounds[0] += d > -Math.PI &&
                                0 > d || d > Math.PI ? -10 : 10)
                        }
                        return p
                    };
                    a.getCrosshairPosition = function(b, a, f) {
                        var r = b.value,
                            l = this.pane.center;
                        if (this.isCircular) {
                            if (k(r)) b.point && (g = b.point.shapeArgs || {}, g.start && (r = this.chart.inverted ? this.translate(b.point.rectPlotY, !0) : b.point.x));
                            else {
                                var g = b.chartX || 0;
                                var x = b.chartY || 0;
                                r = this.translate(Math.atan2(x - f, g - a) - this.startAngleRad, !0)
                            }
                            b = this.getPosition(r);
                            g = b.x;
                            x = b.y
                        } else k(r) || (g = b.chartX, x = b.chartY), k(g) && k(x) && (f = l[1] + this.chart.plotTop, r = this.translate(Math.min(Math.sqrt(Math.pow(g -
                            a, 2) + Math.pow(x - f, 2)), l[2] / 2) - l[3] / 2, !0));
                        return [r, g || 0, x || 0]
                    };
                    a.getPlotLinePath = function(b) {
                        var a = this,
                            u = a.pane.center,
                            r = a.chart,
                            l = r.inverted,
                            g = b.value,
                            x = b.reverse,
                            p = a.getPosition(g),
                            C = a.pane.options.background ? a.pane.options.background[0] || a.pane.options.background : {},
                            A = C.innerRadius || "0%",
                            d = C.outerRadius || "100%";
                        C = u[0] + r.plotLeft;
                        var m = u[1] + r.plotTop,
                            k = p.x,
                            c = p.y,
                            h = a.height;
                        p = u[3] / 2;
                        var t;
                        b.isCrosshair && (c = this.getCrosshairPosition(b, C, m), g = c[0], k = c[1], c = c[2]);
                        if (a.isCircular) g = Math.sqrt(Math.pow(k -
                            C, 2) + Math.pow(c - m, 2)), x = "string" === typeof A ? f(A, 1) : A / g, r = "string" === typeof d ? f(d, 1) : d / g, u && p && (g = p / g, x < g && (x = g), r < g && (r = g)), u = [
                            ["M", C + x * (k - C), m - x * (m - c)],
                            ["L", k - (1 - r) * (k - C), c + (1 - r) * (m - c)]
                        ];
                        else if ((g = a.translate(g)) && (0 > g || g > h) && (g = 0), "circle" === a.options.gridLineInterpolation) u = a.getLinePath(0, g, p);
                        else if (u = [], r[l ? "yAxis" : "xAxis"].forEach(function(g) {
                                g.pane === a.pane && (t = g)
                            }), t)
                            for (C = t.tickPositions, t.autoConnect && (C = C.concat([C[0]])), x && (C = C.slice().reverse()), g && (g += p), k = 0; k < C.length; k++) m = t.getPosition(C[k],
                                g), u.push(k ? ["L", m.x, m.y] : ["M", m.x, m.y]);
                        return u
                    };
                    a.getTitlePosition = function() {
                        var b = this.center,
                            a = this.chart,
                            f = this.options.title;
                        return {
                            x: a.plotLeft + b[0] + (f.x || 0),
                            y: a.plotTop + b[1] - {
                                high: .5,
                                middle: .25,
                                low: 0
                            }[f.align] * b[2] + (f.y || 0)
                        }
                    };
                    a.createLabelCollector = function() {
                        var b = this;
                        return function() {
                            if (b.isRadial && b.tickPositions && !0 !== b.options.labels.allowOverlap) return b.tickPositions.map(function(a) {
                                return b.ticks[a] && b.ticks[a].label
                            }).filter(function(b) {
                                return !!b
                            })
                        }
                    }
                };
            d.compose = function(c, e) {
                a(c,
                    "init",
                    function(b) {
                        var a = this.chart,
                            f = a.inverted,
                            r = a.angular,
                            l = a.polar,
                            g = this.isXAxis,
                            x = this.coll,
                            p = r && g,
                            C, A = a.options;
                        b = b.userOptions.pane || 0;
                        b = this.pane = a.pane && a.pane[b];
                        if ("colorAxis" === x) this.isRadial = !1;
                        else {
                            if (r) {
                                if (p ? h.init(this) : d.init(this), C = !g) this.defaultPolarOptions = d.defaultRadialGaugeOptions
                            } else l && (d.init(this), this.defaultPolarOptions = (C = this.horiz) ? d.defaultCircularOptions : y("xAxis" === x ? c.defaultOptions : c.defaultYAxisOptions, d.defaultRadialOptions), f && "yAxis" === x && (this.defaultPolarOptions.stackLabels =
                                c.defaultYAxisOptions.stackLabels, this.defaultPolarOptions.reversedStacks = !0));
                            r || l ? (this.isRadial = !0, A.chart.zoomType = null, this.labelCollector || (this.labelCollector = this.createLabelCollector()), this.labelCollector && a.labelCollectors.push(this.labelCollector)) : this.isRadial = !1;
                            b && C && (b.axis = this);
                            this.isCircular = C
                        }
                    });
                a(c, "afterInit", function() {
                    var a = this.chart,
                        f = this.options,
                        u = this.pane,
                        r = u && u.options;
                    a.angular && this.isXAxis || !u || !a.angular && !a.polar || (this.angleRad = (f.angle || 0) * Math.PI / 180, this.startAngleRad =
                        (r.startAngle - 90) * Math.PI / 180, this.endAngleRad = (b(r.endAngle, r.startAngle + 360) - 90) * Math.PI / 180, this.offset = f.offset || 0)
                });
                a(c, "autoLabelAlign", function(b) {
                    this.isRadial && (b.align = void 0, b.preventDefault())
                });
                a(c, "destroy", function() {
                    if (this.chart && this.chart.labelCollectors) {
                        var b = this.labelCollector ? this.chart.labelCollectors.indexOf(this.labelCollector) : -1;
                        0 <= b && this.chart.labelCollectors.splice(b, 1)
                    }
                });
                a(c, "initialAxisTranslation", function() {
                    this.isRadial && this.beforeSetTickPositions()
                });
                a(e, "afterGetPosition",
                    function(b) {
                        this.axis.getPosition && t(b.pos, this.axis.getPosition(this.pos))
                    });
                a(e, "afterGetLabelPosition", function(a) {
                    var m = this.axis,
                        u = this.label;
                    if (u) {
                        var r = u.getBBox(),
                            l = m.options.labels,
                            g = l.y,
                            x = 20,
                            p = l.align,
                            C = (m.translate(this.pos) + m.startAngleRad + Math.PI / 2) / Math.PI * 180 % 360,
                            A = Math.round(C),
                            d = "end",
                            c = 0 > A ? A + 360 : A,
                            h = c,
                            t = 0,
                            e = 0,
                            y = k(g) ? 0 : .3 * -r.height;
                        if (m.isRadial) {
                            var q = m.getPosition(this.pos, m.center[2] / 2 + f(b(l.distance, -25), m.center[2] / 2, -m.center[2] / 2));
                            "auto" === l.rotation ? u.attr({
                                    rotation: C
                                }) :
                                k(g) || (g = m.chart.renderer.fontMetrics(u.styles && u.styles.fontSize).b - r.height / 2);
                            k(p) || (m.isCircular ? (r.width > m.len * m.tickInterval / (m.max - m.min) && (x = 0), p = C > x && C < 180 - x ? "left" : C > 180 + x && C < 360 - x ? "right" : "center") : p = "center", u.attr({
                                align: p
                            }));
                            if ("auto" === p && 2 === m.tickPositions.length && m.isCircular) {
                                90 < c && 180 > c ? c = 180 - c : 270 < c && 360 >= c && (c = 540 - c);
                                180 < h && 360 >= h && (h = 360 - h);
                                if (m.pane.options.startAngle === A || m.pane.options.startAngle === A + 360 || m.pane.options.startAngle === A - 360) d = "start";
                                p = -90 <= A && 90 >= A || -360 <=
                                    A && -270 >= A || 270 <= A && 360 >= A ? "start" === d ? "right" : "left" : "start" === d ? "left" : "right";
                                70 < h && 110 > h && (p = "center");
                                15 > c || 180 <= c && 195 > c ? t = .3 * r.height : 15 <= c && 35 >= c ? t = "start" === d ? 0 : .75 * r.height : 195 <= c && 215 >= c ? t = "start" === d ? .75 * r.height : 0 : 35 < c && 90 >= c ? t = "start" === d ? .25 * -r.height : r.height : 215 < c && 270 >= c && (t = "start" === d ? r.height : .25 * -r.height);
                                15 > h ? e = "start" === d ? .15 * -r.height : .15 * r.height : 165 < h && 180 >= h && (e = "start" === d ? .15 * r.height : .15 * -r.height);
                                u.attr({
                                    align: p
                                });
                                u.translate(e, t + y)
                            }
                            a.pos.x = q.x + (l.x || 0);
                            a.pos.y = q.y +
                                (g || 0)
                        }
                    }
                });
                m(e.prototype, "getMarkPath", function(b, a, f, r, l, g, x) {
                    var p = this.axis;
                    p.isRadial ? (b = p.getPosition(this.pos, p.center[2] / 2 + r), a = ["M", a, f, "L", b.x, b.y]) : a = b.call(this, a, f, r, l, g, x);
                    return a
                })
            };
            d.defaultCircularOptions = {
                gridLineWidth: 1,
                labels: {
                    align: void 0,
                    distance: 15,
                    x: 0,
                    y: void 0,
                    style: {
                        textOverflow: "none"
                    }
                },
                maxPadding: 0,
                minPadding: 0,
                showLastLabel: !1,
                tickLength: 0
            };
            d.defaultRadialGaugeOptions = {
                labels: {
                    align: "center",
                    x: 0,
                    y: void 0
                },
                minorGridLineWidth: 0,
                minorTickInterval: "auto",
                minorTickLength: 10,
                minorTickPosition: "inside",
                minorTickWidth: 1,
                tickLength: 10,
                tickPosition: "inside",
                tickWidth: 2,
                title: {
                    rotation: 0
                },
                zIndex: 2
            };
            d.defaultRadialOptions = {
                gridLineInterpolation: "circle",
                gridLineWidth: 1,
                labels: {
                    align: "right",
                    x: -3,
                    y: -2
                },
                showLastLabel: !1,
                title: {
                    x: 4,
                    text: null,
                    rotation: 90
                }
            };
            return d
        }();
        c.compose(e, d);
        return c
    });
    z(e, "Series/AreaRange/AreaRangePoint.js", [e["Series/Area/AreaSeries.js"], e["Core/Series/Point.js"], e["Core/Utilities.js"]], function(e, d, h) {
        var c = this && this.__extends || function() {
                var a = function(d,
                    c) {
                    a = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(b, a) {
                        b.__proto__ = a
                    } || function(b, a) {
                        for (var f in a) a.hasOwnProperty(f) && (b[f] = a[f])
                    };
                    return a(d, c)
                };
                return function(d, c) {
                    function b() {
                        this.constructor = d
                    }
                    a(d, c);
                    d.prototype = null === c ? Object.create(c) : (b.prototype = c.prototype, new b)
                }
            }(),
            a = d.prototype,
            n = h.defined,
            k = h.isNumber;
        return function(d) {
            function h() {
                var a = null !== d && d.apply(this, arguments) || this;
                a.high = void 0;
                a.low = void 0;
                a.options = void 0;
                a.plotHigh = void 0;
                a.plotLow = void 0;
                a.plotHighX =
                    void 0;
                a.plotLowX = void 0;
                a.plotX = void 0;
                a.series = void 0;
                return a
            }
            c(h, d);
            h.prototype.setState = function() {
                var d = this.state,
                    b = this.series,
                    f = b.chart.polar;
                n(this.plotHigh) || (this.plotHigh = b.yAxis.toPixels(this.high, !0));
                n(this.plotLow) || (this.plotLow = this.plotY = b.yAxis.toPixels(this.low, !0));
                b.stateMarkerGraphic && (b.lowerStateMarkerGraphic = b.stateMarkerGraphic, b.stateMarkerGraphic = b.upperStateMarkerGraphic);
                this.graphic = this.upperGraphic;
                this.plotY = this.plotHigh;
                f && (this.plotX = this.plotHighX);
                a.setState.apply(this,
                    arguments);
                this.state = d;
                this.plotY = this.plotLow;
                this.graphic = this.lowerGraphic;
                f && (this.plotX = this.plotLowX);
                b.stateMarkerGraphic && (b.upperStateMarkerGraphic = b.stateMarkerGraphic, b.stateMarkerGraphic = b.lowerStateMarkerGraphic, b.lowerStateMarkerGraphic = void 0);
                a.setState.apply(this, arguments)
            };
            h.prototype.haloPath = function() {
                var d = this.series.chart.polar,
                    b = [];
                this.plotY = this.plotLow;
                d && (this.plotX = this.plotLowX);
                this.isInside && (b = a.haloPath.apply(this, arguments));
                this.plotY = this.plotHigh;
                d && (this.plotX =
                    this.plotHighX);
                this.isTopInside && (b = b.concat(a.haloPath.apply(this, arguments)));
                return b
            };
            h.prototype.isValid = function() {
                return k(this.low) && k(this.high)
            };
            return h
        }(e.prototype.pointClass)
    });
    z(e, "Series/AreaRange/AreaRangeSeries.js", [e["Series/AreaRange/AreaRangePoint.js"], e["Series/Area/AreaSeries.js"], e["Series/Column/ColumnSeries.js"], e["Core/Globals.js"], e["Core/Series/Series.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(e, d, h, c, a, n, k) {
        var t = this && this.__extends || function() {
                var b =
                    function(a, f) {
                        b = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(b, l) {
                            b.__proto__ = l
                        } || function(b, l) {
                            for (var g in l) l.hasOwnProperty(g) && (b[g] = l[g])
                        };
                        return b(a, f)
                    };
                return function(a, f) {
                    function r() {
                        this.constructor = a
                    }
                    b(a, f);
                    a.prototype = null === f ? Object.create(f) : (r.prototype = f.prototype, new r)
                }
            }(),
            q = d.prototype,
            y = h.prototype;
        h = c.noop;
        var b = a.prototype,
            f = k.defined,
            m = k.extend,
            v = k.isArray,
            w = k.pick,
            L = k.merge;
        a = function(a) {
            function c() {
                var b = null !== a && a.apply(this, arguments) || this;
                b.data =
                    void 0;
                b.options = void 0;
                b.points = void 0;
                b.lowerStateMarkerGraphic = void 0;
                b.xAxis = void 0;
                return b
            }
            t(c, a);
            c.prototype.toYData = function(b) {
                return [b.low, b.high]
            };
            c.prototype.highToXY = function(b) {
                var a = this.chart,
                    l = this.xAxis.postTranslate(b.rectPlotX || 0, this.yAxis.len - b.plotHigh);
                b.plotHighX = l.x - a.plotLeft;
                b.plotHigh = l.y - a.plotTop;
                b.plotLowX = b.plotX
            };
            c.prototype.translate = function() {
                var b = this,
                    a = b.yAxis,
                    l = !!b.modifyValue;
                q.translate.apply(b);
                b.points.forEach(function(g) {
                    var x = g.high,
                        p = g.plotY;
                    g.isNull ?
                        g.plotY = null : (g.plotLow = p, g.plotHigh = a.translate(l ? b.modifyValue(x, g) : x, 0, 1, 0, 1), l && (g.yBottom = g.plotHigh))
                });
                this.chart.polar && this.points.forEach(function(g) {
                    b.highToXY(g);
                    g.tooltipPos = [(g.plotHighX + g.plotLowX) / 2, (g.plotHigh + g.plotLow) / 2]
                })
            };
            c.prototype.getGraphPath = function(b) {
                var a = [],
                    l = [],
                    g, x = q.getGraphPath;
                var p = this.options;
                var C = this.chart.polar,
                    f = C && !1 !== p.connectEnds,
                    d = p.connectNulls,
                    m = p.step;
                b = b || this.points;
                for (g = b.length; g--;) {
                    var c = b[g];
                    var k = C ? {
                        plotX: c.rectPlotX,
                        plotY: c.yBottom,
                        doCurve: !1
                    } : {
                        plotX: c.plotX,
                        plotY: c.plotY,
                        doCurve: !1
                    };
                    c.isNull || f || d || b[g + 1] && !b[g + 1].isNull || l.push(k);
                    var h = {
                        polarPlotY: c.polarPlotY,
                        rectPlotX: c.rectPlotX,
                        yBottom: c.yBottom,
                        plotX: w(c.plotHighX, c.plotX),
                        plotY: c.plotHigh,
                        isNull: c.isNull
                    };
                    l.push(h);
                    a.push(h);
                    c.isNull || f || d || b[g - 1] && !b[g - 1].isNull || l.push(k)
                }
                b = x.call(this, b);
                m && (!0 === m && (m = "left"), p.step = {
                    left: "right",
                    center: "center",
                    right: "left"
                }[m]);
                a = x.call(this, a);
                l = x.call(this, l);
                p.step = m;
                p = [].concat(b, a);
                !this.chart.polar && l[0] && "M" === l[0][0] && (l[0] = ["L",
                    l[0][1], l[0][2]
                ]);
                this.graphPath = p;
                this.areaPath = b.concat(l);
                p.isArea = !0;
                p.xMap = b.xMap;
                this.areaPath.xMap = b.xMap;
                return p
            };
            c.prototype.drawDataLabels = function() {
                var a = this.points,
                    f = a.length,
                    l, g = [],
                    x = this.options.dataLabels,
                    p, C = this.chart.inverted;
                if (x) {
                    if (v(x)) {
                        var A = x[0] || {
                            enabled: !1
                        };
                        var c = x[1] || {
                            enabled: !1
                        }
                    } else A = m({}, x), A.x = x.xHigh, A.y = x.yHigh, c = m({}, x), c.x = x.xLow, c.y = x.yLow;
                    if (A.enabled || this._hasPointLabels) {
                        for (l = f; l--;)
                            if (p = a[l]) {
                                var d = A.inside ? p.plotHigh < p.plotLow : p.plotHigh > p.plotLow;
                                p.y =
                                    p.high;
                                p._plotY = p.plotY;
                                p.plotY = p.plotHigh;
                                g[l] = p.dataLabel;
                                p.dataLabel = p.dataLabelUpper;
                                p.below = d;
                                C ? A.align || (A.align = d ? "right" : "left") : A.verticalAlign || (A.verticalAlign = d ? "top" : "bottom")
                            }
                        this.options.dataLabels = A;
                        b.drawDataLabels && b.drawDataLabels.apply(this, arguments);
                        for (l = f; l--;)
                            if (p = a[l]) p.dataLabelUpper = p.dataLabel, p.dataLabel = g[l], delete p.dataLabels, p.y = p.low, p.plotY = p._plotY
                    }
                    if (c.enabled || this._hasPointLabels) {
                        for (l = f; l--;)
                            if (p = a[l]) d = c.inside ? p.plotHigh < p.plotLow : p.plotHigh > p.plotLow, p.below = !d, C ? c.align || (c.align = d ? "left" : "right") : c.verticalAlign || (c.verticalAlign = d ? "bottom" : "top");
                        this.options.dataLabels = c;
                        b.drawDataLabels && b.drawDataLabels.apply(this, arguments)
                    }
                    if (A.enabled)
                        for (l = f; l--;)
                            if (p = a[l]) p.dataLabels = [p.dataLabelUpper, p.dataLabel].filter(function(g) {
                                return !!g
                            });
                    this.options.dataLabels = x
                }
            };
            c.prototype.alignDataLabel = function() {
                y.alignDataLabel.apply(this, arguments)
            };
            c.prototype.drawPoints = function() {
                var a = this.points.length,
                    r;
                b.drawPoints.apply(this, arguments);
                for (r = 0; r < a;) {
                    var l =
                        this.points[r];
                    l.origProps = {
                        plotY: l.plotY,
                        plotX: l.plotX,
                        isInside: l.isInside,
                        negative: l.negative,
                        zone: l.zone,
                        y: l.y
                    };
                    l.lowerGraphic = l.graphic;
                    l.graphic = l.upperGraphic;
                    l.plotY = l.plotHigh;
                    f(l.plotHighX) && (l.plotX = l.plotHighX);
                    l.y = w(l.high, l.origProps.y);
                    l.negative = l.y < (this.options.threshold || 0);
                    this.zones.length && (l.zone = l.getZone());
                    this.chart.polar || (l.isInside = l.isTopInside = "undefined" !== typeof l.plotY && 0 <= l.plotY && l.plotY <= this.yAxis.len && 0 <= l.plotX && l.plotX <= this.xAxis.len);
                    r++
                }
                b.drawPoints.apply(this,
                    arguments);
                for (r = 0; r < a;) l = this.points[r], l.upperGraphic = l.graphic, l.graphic = l.lowerGraphic, l.origProps && (m(l, l.origProps), delete l.origProps), r++
            };
            c.defaultOptions = L(d.defaultOptions, {
                lineWidth: 1,
                threshold: null,
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">\u25cf</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>'
                },
                trackByArea: !0,
                dataLabels: {
                    align: void 0,
                    verticalAlign: void 0,
                    xLow: 0,
                    xHigh: 0,
                    yLow: 0,
                    yHigh: 0
                }
            });
            return c
        }(d);
        m(a.prototype, {
            pointArrayMap: ["low", "high"],
            pointValKey: "low",
            deferTranslatePolar: !0,
            pointClass: e,
            setStackedPoints: h
        });
        n.registerSeriesType("arearange", a);
        "";
        return a
    });
    z(e, "Series/AreaSplineRange/AreaSplineRangeSeries.js", [e["Series/AreaRange/AreaRangeSeries.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(e, d, h) {
        var c = this && this.__extends || function() {
                var a = function(c, d) {
                    a = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(b, a) {
                        b.__proto__ = a
                    } || function(b, a) {
                        for (var f in a) a.hasOwnProperty(f) && (b[f] = a[f])
                    };
                    return a(c, d)
                };
                return function(c, d) {
                    function b() {
                        this.constructor = c
                    }
                    a(c, d);
                    c.prototype = null === d ? Object.create(d) : (b.prototype = d.prototype, new b)
                }
            }(),
            a = d.seriesTypes.spline,
            n = h.merge;
        h = h.extend;
        var k = function(a) {
            function d() {
                var c = null !== a && a.apply(this, arguments) || this;
                c.options = void 0;
                c.data = void 0;
                c.points = void 0;
                return c
            }
            c(d, a);
            d.defaultOptions = n(e.defaultOptions);
            return d
        }(e);
        h(k.prototype, {
            getPointSpline: a.prototype.getPointSpline
        });
        d.registerSeriesType("areasplinerange", k);
        "";
        return k
    });
    z(e, "Series/ColumnRange/ColumnRangePoint.js", [e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(e, d) {
        var h = this && this.__extends || function() {
                var a = function(c, d) {
                    a = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(a, b) {
                        a.__proto__ = b
                    } || function(a, b) {
                        for (var f in b) b.hasOwnProperty(f) && (a[f] = b[f])
                    };
                    return a(c, d)
                };
                return function(c, d) {
                    function k() {
                        this.constructor = c
                    }
                    a(c, d);
                    c.prototype = null === d ? Object.create(d) : (k.prototype = d.prototype, new k)
                }
            }(),
            c = e.seriesTypes;
        e = c.column.prototype.pointClass;
        var a = d.extend,
            n = d.isNumber;
        d = function(a) {
            function c() {
                var c = null !== a && a.apply(this, arguments) || this;
                c.series = void 0;
                c.options = void 0;
                c.barX = void 0;
                c.pointWidth = void 0;
                c.shapeType = void 0;
                return c
            }
            h(c, a);
            c.prototype.isValid = function() {
                return n(this.low)
            };
            return c
        }(c.arearange.prototype.pointClass);
        a(d.prototype, {
            setState: e.prototype.setState
        });
        return d
    });
    z(e, "Series/ColumnRange/ColumnRangeSeries.js", [e["Series/ColumnRange/ColumnRangePoint.js"], e["Core/Globals.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(e,
        d, h, c) {
        var a = this && this.__extends || function() {
            var b = function(a, f) {
                b = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(b, a) {
                    b.__proto__ = a
                } || function(b, a) {
                    for (var f in a) a.hasOwnProperty(f) && (b[f] = a[f])
                };
                return b(a, f)
            };
            return function(a, f) {
                function c() {
                    this.constructor = a
                }
                b(a, f);
                a.prototype = null === f ? Object.create(f) : (c.prototype = f.prototype, new c)
            }
        }();
        d = d.noop;
        var n = h.seriesTypes,
            k = n.arearange,
            t = n.column,
            q = t.prototype,
            y = k.prototype,
            b = c.clamp,
            f = c.merge,
            m = c.pick;
        c = c.extend;
        var v = {
            pointRange: null,
            marker: null,
            states: {
                hover: {
                    halo: !1
                }
            }
        };
        n = function(c) {
            function d() {
                var b = null !== c && c.apply(this, arguments) || this;
                b.data = void 0;
                b.points = void 0;
                b.options = void 0;
                return b
            }
            a(d, c);
            d.prototype.setOptions = function() {
                f(!0, arguments[0], {
                    stacking: void 0
                });
                return y.setOptions.apply(this, arguments)
            };
            d.prototype.translate = function() {
                var a = this,
                    f = a.yAxis,
                    c = a.xAxis,
                    d = c.startAngleRad,
                    l, g = a.chart,
                    x = a.xAxis.isRadial,
                    p = Math.max(g.chartWidth, g.chartHeight) + 999,
                    C;
                q.translate.apply(a);
                a.points.forEach(function(r) {
                    var A =
                        r.shapeArgs || {},
                        k = a.options.minPointLength;
                    r.plotHigh = C = b(f.translate(r.high, 0, 1, 0, 1), -p, p);
                    r.plotLow = b(r.plotY, -p, p);
                    var h = C;
                    var e = m(r.rectPlotY, r.plotY) - C;
                    Math.abs(e) < k ? (k -= e, e += k, h -= k / 2) : 0 > e && (e *= -1, h -= e);
                    x ? (l = r.barX + d, r.shapeType = "arc", r.shapeArgs = a.polarArc(h + e, h, l, l + r.pointWidth)) : (A.height = e, A.y = h, k = A.x, k = void 0 === k ? 0 : k, A = A.width, A = void 0 === A ? 0 : A, r.tooltipPos = g.inverted ? [f.len + f.pos - g.plotLeft - h - e / 2, c.len + c.pos - g.plotTop - k - A / 2, e] : [c.left - g.plotLeft + k + A / 2, f.pos - g.plotTop + h + e / 2, e])
                })
            };
            d.prototype.crispCol =
                function() {
                    return q.crispCol.apply(this, arguments)
                };
            d.prototype.drawPoints = function() {
                return q.drawPoints.apply(this, arguments)
            };
            d.prototype.drawTracker = function() {
                return q.drawTracker.apply(this, arguments)
            };
            d.prototype.getColumnMetrics = function() {
                return q.getColumnMetrics.apply(this, arguments)
            };
            d.prototype.pointAttribs = function() {
                return q.pointAttribs.apply(this, arguments)
            };
            d.prototype.adjustForMissingColumns = function() {
                return q.adjustForMissingColumns.apply(this, arguments)
            };
            d.prototype.animate =
                function() {
                    return q.animate.apply(this, arguments)
                };
            d.prototype.translate3dPoints = function() {
                return q.translate3dPoints.apply(this, arguments)
            };
            d.prototype.translate3dShapes = function() {
                return q.translate3dShapes.apply(this, arguments)
            };
            d.defaultOptions = f(t.defaultOptions, k.defaultOptions, v);
            return d
        }(k);
        c(n.prototype, {
            directTouch: !0,
            trackerGroups: ["group", "dataLabelsGroup"],
            drawGraph: d,
            getSymbol: d,
            polarArc: function() {
                return q.polarArc.apply(this, arguments)
            },
            pointClass: e
        });
        h.registerSeriesType("columnrange",
            n);
        "";
        return n
    });
    z(e, "Series/ColumnPyramid/ColumnPyramidSeries.js", [e["Series/Column/ColumnSeries.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(e, d, h) {
        var c = this && this.__extends || function() {
                var a = function(c, b) {
                    a = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(b, a) {
                        b.__proto__ = a
                    } || function(b, a) {
                        for (var c in a) a.hasOwnProperty(c) && (b[c] = a[c])
                    };
                    return a(c, b)
                };
                return function(c, b) {
                    function f() {
                        this.constructor = c
                    }
                    a(c, b);
                    c.prototype = null === b ? Object.create(b) : (f.prototype =
                        b.prototype, new f)
                }
            }(),
            a = e.prototype,
            n = h.clamp,
            k = h.merge,
            t = h.pick;
        h = function(d) {
            function h() {
                var b = null !== d && d.apply(this, arguments) || this;
                b.data = void 0;
                b.options = void 0;
                b.points = void 0;
                return b
            }
            c(h, d);
            h.prototype.translate = function() {
                var b = this,
                    c = b.chart,
                    d = b.options,
                    k = b.dense = 2 > b.closestPointRange * b.xAxis.transA;
                k = b.borderWidth = t(d.borderWidth, k ? 0 : 1);
                var h = b.yAxis,
                    e = d.threshold,
                    q = b.translatedThreshold = h.getThreshold(e),
                    y = t(d.minPointLength, 5),
                    u = b.getColumnMetrics(),
                    r = u.width,
                    l = b.barW = Math.max(r,
                        1 + 2 * k),
                    g = b.pointXOffset = u.offset;
                c.inverted && (q -= .5);
                d.pointPadding && (l = Math.ceil(l));
                a.translate.apply(b);
                b.points.forEach(function(a) {
                    var p = t(a.yBottom, q),
                        f = 999 + Math.abs(p),
                        x = n(a.plotY, -f, h.len + f);
                    f = a.plotX + g;
                    var m = l / 2,
                        k = Math.min(x, p);
                    p = Math.max(x, p) - k;
                    var u;
                    a.barX = f;
                    a.pointWidth = r;
                    a.tooltipPos = c.inverted ? [h.len + h.pos - c.plotLeft - x, b.xAxis.len - f - m, p] : [f + m, x + h.pos - c.plotTop, p];
                    x = e + (a.total || a.y);
                    "percent" === d.stacking && (x = e + (0 > a.y) ? -100 : 100);
                    x = h.toPixels(x, !0);
                    var F = (u = c.plotHeight - x - (c.plotHeight -
                        q)) ? m * (k - x) / u : 0;
                    var v = u ? m * (k + p - x) / u : 0;
                    u = f - F + m;
                    F = f + F + m;
                    var w = f + v + m;
                    v = f - v + m;
                    var H = k - y;
                    var G = k + p;
                    0 > a.y && (H = k, G = k + p + y);
                    c.inverted && (w = c.plotWidth - k, u = x - (c.plotWidth - q), F = m * (x - w) / u, v = m * (x - (w - p)) / u, u = f + m + F, F = u - 2 * F, w = f - v + m, v = f + v + m, H = k, G = k + p - y, 0 > a.y && (G = k + p + y));
                    a.shapeType = "path";
                    a.shapeArgs = {
                        x: u,
                        y: H,
                        width: F - u,
                        height: p,
                        d: [
                            ["M", u, H],
                            ["L", F, H],
                            ["L", w, G],
                            ["L", v, G],
                            ["Z"]
                        ]
                    }
                })
            };
            h.defaultOptions = k(e.defaultOptions, {});
            return h
        }(e);
        d.registerSeriesType("columnpyramid", h);
        "";
        return h
    });
    z(e, "Series/Gauge/GaugePoint.js", [e["Core/Series/SeriesRegistry.js"]], function(e) {
        var d = this && this.__extends || function() {
            var d = function(c, a) {
                d = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(a, c) {
                    a.__proto__ = c
                } || function(a, c) {
                    for (var d in c) c.hasOwnProperty(d) && (a[d] = c[d])
                };
                return d(c, a)
            };
            return function(c, a) {
                function h() {
                    this.constructor = c
                }
                d(c, a);
                c.prototype = null === a ? Object.create(a) : (h.prototype = a.prototype, new h)
            }
        }();
        return function(h) {
            function c() {
                var a = null !== h && h.apply(this, arguments) || this;
                a.options = void 0;
                a.series = void 0;
                a.shapeArgs = void 0;
                return a
            }
            d(c, h);
            c.prototype.setState = function(a) {
                this.state = a
            };
            return c
        }(e.series.prototype.pointClass)
    });
    z(e, "Series/Gauge/GaugeSeries.js", [e["Series/Gauge/GaugePoint.js"], e["Core/Globals.js"], e["Core/Color/Palette.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(e, d, h, c, a) {
        var n = this && this.__extends || function() {
            var a = function(b, c) {
                a = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(a, b) {
                    a.__proto__ = b
                } || function(a, b) {
                    for (var c in b) b.hasOwnProperty(c) &&
                        (a[c] = b[c])
                };
                return a(b, c)
            };
            return function(b, c) {
                function d() {
                    this.constructor = b
                }
                a(b, c);
                b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
            }
        }();
        d = d.noop;
        var k = c.series,
            t = c.seriesTypes.column,
            q = a.clamp,
            y = a.isNumber,
            b = a.extend,
            f = a.merge,
            m = a.pick,
            v = a.pInt;
        a = function(b) {
            function a() {
                var a = null !== b && b.apply(this, arguments) || this;
                a.data = void 0;
                a.points = void 0;
                a.options = void 0;
                a.yAxis = void 0;
                return a
            }
            n(a, b);
            a.prototype.translate = function() {
                var a = this.yAxis,
                    b = this.options,
                    c = a.center;
                this.generatePoints();
                this.points.forEach(function(d) {
                    var l = f(b.dial, d.dial),
                        g = v(m(l.radius, "80%")) * c[2] / 200,
                        x = v(m(l.baseLength, "70%")) * g / 100,
                        p = v(m(l.rearLength, "10%")) * g / 100,
                        r = l.baseWidth || 3,
                        A = l.topWidth || 1,
                        k = b.overshoot,
                        h = a.startAngleRad + a.translate(d.y, null, null, null, !0);
                    if (y(k) || !1 === b.wrap) k = y(k) ? k / 180 * Math.PI : 0, h = q(h, a.startAngleRad - k, a.endAngleRad + k);
                    h = 180 * h / Math.PI;
                    d.shapeType = "path";
                    d.shapeArgs = {
                        d: l.path || [
                            ["M", -p, -r / 2],
                            ["L", x, -r / 2],
                            ["L", g, -A / 2],
                            ["L", g, A / 2],
                            ["L", x, r / 2],
                            ["L", -p, r / 2],
                            ["Z"]
                        ],
                        translateX: c[0],
                        translateY: c[1],
                        rotation: h
                    };
                    d.plotX = c[0];
                    d.plotY = c[1]
                })
            };
            a.prototype.drawPoints = function() {
                var a = this,
                    b = a.chart,
                    c = a.yAxis.center,
                    d = a.pivot,
                    l = a.options,
                    g = l.pivot,
                    x = b.renderer;
                a.points.forEach(function(g) {
                    var c = g.graphic,
                        p = g.shapeArgs,
                        d = p.d,
                        r = f(l.dial, g.dial);
                    c ? (c.animate(p), p.d = d) : g.graphic = x[g.shapeType](p).attr({
                        rotation: p.rotation,
                        zIndex: 1
                    }).addClass("highcharts-dial").add(a.group);
                    if (!b.styledMode) g.graphic[c ? "animate" : "attr"]({
                        stroke: r.borderColor || "none",
                        "stroke-width": r.borderWidth || 0,
                        fill: r.backgroundColor ||
                            h.neutralColor100
                    })
                });
                d ? d.animate({
                    translateX: c[0],
                    translateY: c[1]
                }) : (a.pivot = x.circle(0, 0, m(g.radius, 5)).attr({
                    zIndex: 2
                }).addClass("highcharts-pivot").translate(c[0], c[1]).add(a.group), b.styledMode || a.pivot.attr({
                    "stroke-width": g.borderWidth || 0,
                    stroke: g.borderColor || h.neutralColor20,
                    fill: g.backgroundColor || h.neutralColor100
                }))
            };
            a.prototype.animate = function(a) {
                var b = this;
                a || b.points.forEach(function(a) {
                    var c = a.graphic;
                    c && (c.attr({
                        rotation: 180 * b.yAxis.startAngleRad / Math.PI
                    }), c.animate({
                            rotation: a.shapeArgs.rotation
                        },
                        b.options.animation))
                })
            };
            a.prototype.render = function() {
                this.group = this.plotGroup("group", "series", this.visible ? "visible" : "hidden", this.options.zIndex, this.chart.seriesGroup);
                k.prototype.render.call(this);
                this.group.clip(this.chart.clipRect)
            };
            a.prototype.setData = function(a, b) {
                k.prototype.setData.call(this, a, !1);
                this.processData();
                this.generatePoints();
                m(b, !0) && this.chart.redraw()
            };
            a.prototype.hasData = function() {
                return !!this.points.length
            };
            a.defaultOptions = f(k.defaultOptions, {
                dataLabels: {
                    borderColor: h.neutralColor20,
                    borderRadius: 3,
                    borderWidth: 1,
                    crop: !1,
                    defer: !1,
                    enabled: !0,
                    verticalAlign: "top",
                    y: 15,
                    zIndex: 2
                },
                dial: {},
                pivot: {},
                tooltip: {
                    headerFormat: ""
                },
                showInLegend: !1
            });
            return a
        }(k);
        b(a.prototype, {
            angular: !0,
            directTouch: !0,
            drawGraph: d,
            drawTracker: t.prototype.drawTracker,
            fixedBox: !0,
            forceDL: !0,
            noSharedTooltip: !0,
            pointClass: e,
            trackerGroups: ["group", "dataLabelsGroup"]
        });
        c.registerSeriesType("gauge", a);
        "";
        return a
    });
    z(e, "Series/BoxPlot/BoxPlotSeries.js", [e["Series/Column/ColumnSeries.js"], e["Core/Globals.js"], e["Core/Color/Palette.js"],
        e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]
    ], function(e, d, h, c, a) {
        var n = this && this.__extends || function() {
            var a = function(b, c) {
                a = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(a, b) {
                    a.__proto__ = b
                } || function(a, b) {
                    for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
                };
                return a(b, c)
            };
            return function(b, c) {
                function d() {
                    this.constructor = b
                }
                a(b, c);
                b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
            }
        }();
        d = d.noop;
        var k = a.extend,
            t = a.merge,
            q = a.pick;
        a = function(a) {
            function b() {
                var b =
                    null !== a && a.apply(this, arguments) || this;
                b.data = void 0;
                b.options = void 0;
                b.points = void 0;
                return b
            }
            n(b, a);
            b.prototype.pointAttribs = function() {
                return {}
            };
            b.prototype.translate = function() {
                var b = this.yAxis,
                    c = this.pointArrayMap;
                a.prototype.translate.apply(this);
                this.points.forEach(function(a) {
                    c.forEach(function(c) {
                        null !== a[c] && (a[c + "Plot"] = b.translate(a[c], 0, 1, 0, 1))
                    });
                    a.plotHigh = a.highPlot
                })
            };
            b.prototype.drawPoints = function() {
                var a = this,
                    b = a.options,
                    c = a.chart,
                    d = c.renderer,
                    k, h, e, u, r, l, g = 0,
                    x, p, C, A, t = !1 !== a.doQuartiles,
                    n, y = a.options.whiskerLength;
                a.points.forEach(function(f) {
                    var m = f.graphic,
                        J = m ? "animate" : "attr",
                        v = f.shapeArgs,
                        I = {},
                        F = {},
                        w = {},
                        K = {},
                        B = f.color || a.color;
                    "undefined" !== typeof f.plotY && (x = Math.round(v.width), p = Math.floor(v.x), C = p + x, A = Math.round(x / 2), k = Math.floor(t ? f.q1Plot : f.lowPlot), h = Math.floor(t ? f.q3Plot : f.lowPlot), e = Math.floor(f.highPlot), u = Math.floor(f.lowPlot), m || (f.graphic = m = d.g("point").add(a.group), f.stem = d.path().addClass("highcharts-boxplot-stem").add(m), y && (f.whiskers = d.path().addClass("highcharts-boxplot-whisker").add(m)),
                        t && (f.box = d.path(void 0).addClass("highcharts-boxplot-box").add(m)), f.medianShape = d.path(void 0).addClass("highcharts-boxplot-median").add(m)), c.styledMode || (F.stroke = f.stemColor || b.stemColor || B, F["stroke-width"] = q(f.stemWidth, b.stemWidth, b.lineWidth), F.dashstyle = f.stemDashStyle || b.stemDashStyle || b.dashStyle, f.stem.attr(F), y && (w.stroke = f.whiskerColor || b.whiskerColor || B, w["stroke-width"] = q(f.whiskerWidth, b.whiskerWidth, b.lineWidth), w.dashstyle = f.whiskerDashStyle || b.whiskerDashStyle || b.dashStyle, f.whiskers.attr(w)),
                        t && (I.fill = f.fillColor || b.fillColor || B, I.stroke = b.lineColor || B, I["stroke-width"] = b.lineWidth || 0, I.dashstyle = f.boxDashStyle || b.boxDashStyle || b.dashStyle, f.box.attr(I)), K.stroke = f.medianColor || b.medianColor || B, K["stroke-width"] = q(f.medianWidth, b.medianWidth, b.lineWidth), K.dashstyle = f.medianDashStyle || b.medianDashStyle || b.dashStyle, f.medianShape.attr(K)), l = f.stem.strokeWidth() % 2 / 2, g = p + A + l, m = [
                        ["M", g, h],
                        ["L", g, e],
                        ["M", g, k],
                        ["L", g, u]
                    ], f.stem[J]({
                        d: m
                    }), t && (l = f.box.strokeWidth() % 2 / 2, k = Math.floor(k) + l, h = Math.floor(h) +
                        l, p += l, C += l, m = [
                            ["M", p, h],
                            ["L", p, k],
                            ["L", C, k],
                            ["L", C, h],
                            ["L", p, h],
                            ["Z"]
                        ], f.box[J]({
                            d: m
                        })), y && (l = f.whiskers.strokeWidth() % 2 / 2, e += l, u += l, n = /%$/.test(y) ? A * parseFloat(y) / 100 : y / 2, m = [
                        ["M", g - n, e],
                        ["L", g + n, e],
                        ["M", g - n, u],
                        ["L", g + n, u]
                    ], f.whiskers[J]({
                        d: m
                    })), r = Math.round(f.medianPlot), l = f.medianShape.strokeWidth() % 2 / 2, r += l, m = [
                        ["M", p, r],
                        ["L", C, r]
                    ], f.medianShape[J]({
                        d: m
                    }))
                })
            };
            b.prototype.toYData = function(a) {
                return [a.low, a.q1, a.median, a.q3, a.high]
            };
            b.defaultOptions = t(e.defaultOptions, {
                threshold: null,
                tooltip: {
                    pointFormat: '<span style="color:{point.color}">\u25cf</span> <b> {series.name}</b><br/>Maximum: {point.high}<br/>Upper quartile: {point.q3}<br/>Median: {point.median}<br/>Lower quartile: {point.q1}<br/>Minimum: {point.low}<br/>'
                },
                whiskerLength: "50%",
                fillColor: h.backgroundColor,
                lineWidth: 1,
                medianWidth: 2,
                whiskerWidth: 2
            });
            return b
        }(e);
        k(a.prototype, {
            pointArrayMap: ["low", "q1", "median", "q3", "high"],
            pointValKey: "high",
            drawDataLabels: d,
            setStackedPoints: d
        });
        c.registerSeriesType("boxplot", a);
        "";
        return a
    });
    z(e, "Series/ErrorBar/ErrorBarSeries.js", [e["Series/BoxPlot/BoxPlotSeries.js"], e["Series/Column/ColumnSeries.js"], e["Core/Color/Palette.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(e, d, h, c, a) {
        var n = this &&
            this.__extends || function() {
                var a = function(b, c) {
                    a = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(a, b) {
                        a.__proto__ = b
                    } || function(a, b) {
                        for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
                    };
                    return a(b, c)
                };
                return function(b, c) {
                    function d() {
                        this.constructor = b
                    }
                    a(b, c);
                    b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
                }
            }(),
            k = c.seriesTypes.arearange,
            t = a.merge;
        a = a.extend;
        var q = function(a) {
            function b() {
                var b = null !== a && a.apply(this, arguments) || this;
                b.data = void 0;
                b.options = void 0;
                b.points = void 0;
                return b
            }
            n(b, a);
            b.prototype.getColumnMetrics = function() {
                return this.linkedParent && this.linkedParent.columnMetrics || d.prototype.getColumnMetrics.call(this)
            };
            b.prototype.drawDataLabels = function() {
                var a = this.pointValKey;
                k && (k.prototype.drawDataLabels.call(this), this.data.forEach(function(b) {
                    b.y = b[a]
                }))
            };
            b.prototype.toYData = function(a) {
                return [a.low, a.high]
            };
            b.defaultOptions = t(e.defaultOptions, {
                color: h.neutralColor100,
                grouping: !1,
                linkedTo: ":previous",
                tooltip: {
                    pointFormat: '<span style="color:{point.color}">\u25cf</span> {series.name}: <b>{point.low}</b> - <b>{point.high}</b><br/>'
                },
                whiskerWidth: null
            });
            return b
        }(e);
        a(q.prototype, {
            pointArrayMap: ["low", "high"],
            pointValKey: "high",
            doQuartiles: !1
        });
        c.registerSeriesType("errorbar", q);
        "";
        return q
    });
    z(e, "Core/Axis/WaterfallAxis.js", [e["Extensions/Stacking.js"], e["Core/Utilities.js"]], function(e, d) {
        var h = d.addEvent,
            c = d.objectEach,
            a;
        (function(a) {
            function d() {
                var a = this.waterfall.stacks;
                a && (a.changed = !1, delete a.alreadyChanged)
            }

            function t() {
                var a = this.options.stackLabels;
                a && a.enabled && this.waterfall.stacks && this.waterfall.renderStackTotals()
            }

            function n() {
                for (var a = this.axes, b = this.series, c = b.length; c--;) b[c].options.stacking && (a.forEach(function(a) {
                    a.isXAxis || (a.waterfall.stacks.changed = !0)
                }), c = 0)
            }

            function y() {
                this.waterfall || (this.waterfall = new b(this))
            }
            var b = function() {
                function a(a) {
                    this.axis = a;
                    this.stacks = {
                        changed: !1
                    }
                }
                a.prototype.renderStackTotals = function() {
                    var a = this.axis,
                        b = a.waterfall.stacks,
                        d = a.stacking && a.stacking.stackTotalGroup,
                        f = new e(a, a.options.stackLabels, !1, 0, void 0);
                    this.dummyStackItem = f;
                    c(b, function(a) {
                        c(a, function(a) {
                            f.total =
                                a.stackTotal;
                            a.label && (f.label = a.label);
                            e.prototype.render.call(f, d);
                            a.label = f.label;
                            delete f.label
                        })
                    });
                    f.total = null
                };
                return a
            }();
            a.Composition = b;
            a.compose = function(a, b) {
                h(a, "init", y);
                h(a, "afterBuildStacks", d);
                h(a, "afterRender", t);
                h(b, "beforeRedraw", n)
            }
        })(a || (a = {}));
        return a
    });
    z(e, "Series/Waterfall/WaterfallPoint.js", [e["Series/Column/ColumnSeries.js"], e["Core/Series/Point.js"], e["Core/Utilities.js"]], function(e, d, h) {
        var c = this && this.__extends || function() {
                var a = function(c, d) {
                    a = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(a, c) {
                        a.__proto__ = c
                    } || function(a, c) {
                        for (var b in c) c.hasOwnProperty(b) && (a[b] = c[b])
                    };
                    return a(c, d)
                };
                return function(c, d) {
                    function h() {
                        this.constructor = c
                    }
                    a(c, d);
                    c.prototype = null === d ? Object.create(d) : (h.prototype = d.prototype, new h)
                }
            }(),
            a = h.isNumber;
        return function(h) {
            function e() {
                var a = null !== h && h.apply(this, arguments) || this;
                a.options = void 0;
                a.series = void 0;
                return a
            }
            c(e, h);
            e.prototype.getClassName = function() {
                var a = d.prototype.getClassName.call(this);
                this.isSum ?
                    a += " highcharts-sum" : this.isIntermediateSum && (a += " highcharts-intermediate-sum");
                return a
            };
            e.prototype.isValid = function() {
                return a(this.y) || this.isSum || !!this.isIntermediateSum
            };
            return e
        }(e.prototype.pointClass)
    });
    z(e, "Series/Waterfall/WaterfallSeries.js", [e["Core/Chart/Chart.js"], e["Core/Globals.js"], e["Core/Color/Palette.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"], e["Core/Axis/WaterfallAxis.js"], e["Series/Waterfall/WaterfallPoint.js"]], function(e, d, h, c, a, n, k) {
        var t = this && this.__extends ||
            function() {
                var a = function(b, c) {
                    a = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(a, g) {
                        a.__proto__ = g
                    } || function(a, g) {
                        for (var b in g) g.hasOwnProperty(b) && (a[b] = g[b])
                    };
                    return a(b, c)
                };
                return function(b, c) {
                    function l() {
                        this.constructor = b
                    }
                    a(b, c);
                    b.prototype = null === c ? Object.create(c) : (l.prototype = c.prototype, new l)
                }
            }(),
            q = c.seriesTypes,
            y = q.column,
            b = q.line,
            f = a.arrayMax,
            m = a.arrayMin,
            v = a.correctFloat;
        q = a.extend;
        var w = a.merge,
            B = a.objectEach,
            z = a.pick;
        a = function(a) {
            function c() {
                var b = null !== a &&
                    a.apply(this, arguments) || this;
                b.chart = void 0;
                b.data = void 0;
                b.options = void 0;
                b.points = void 0;
                b.stackedYNeg = void 0;
                b.stackedYPos = void 0;
                b.stackKey = void 0;
                b.xData = void 0;
                b.yAxis = void 0;
                b.yData = void 0;
                return b
            }
            t(c, a);
            c.prototype.generatePoints = function() {
                var a;
                y.prototype.generatePoints.apply(this);
                var b = 0;
                for (a = this.points.length; b < a; b++) {
                    var g = this.points[b];
                    var c = this.processedYData[b];
                    if (g.isIntermediateSum || g.isSum) g.y = v(c)
                }
            };
            c.prototype.translate = function() {
                var a = this.options,
                    b = this.yAxis,
                    g, c = z(a.minPointLength,
                        5),
                    d = c / 2,
                    f = a.threshold,
                    A = a.stacking,
                    h = b.waterfall.stacks[this.stackKey];
                y.prototype.translate.apply(this);
                var e = g = f;
                var k = this.points;
                var m = 0;
                for (a = k.length; m < a; m++) {
                    var t = k[m];
                    var u = this.processedYData[m];
                    var n = t.shapeArgs;
                    var v = [0, u];
                    var q = t.y;
                    if (A) {
                        if (h) {
                            v = h[m];
                            if ("overlap" === A) {
                                var w = v.stackState[v.stateIndex--];
                                w = 0 <= q ? w : w - q;
                                Object.hasOwnProperty.call(v, "absolutePos") && delete v.absolutePos;
                                Object.hasOwnProperty.call(v, "absoluteNeg") && delete v.absoluteNeg
                            } else 0 <= q ? (w = v.threshold + v.posTotal, v.posTotal -=
                                q) : (w = v.threshold + v.negTotal, v.negTotal -= q, w -= q), !v.posTotal && Object.hasOwnProperty.call(v, "absolutePos") && (v.posTotal = v.absolutePos, delete v.absolutePos), !v.negTotal && Object.hasOwnProperty.call(v, "absoluteNeg") && (v.negTotal = v.absoluteNeg, delete v.absoluteNeg);
                            t.isSum || (v.connectorThreshold = v.threshold + v.stackTotal);
                            b.reversed ? (u = 0 <= q ? w - q : w + q, q = w) : (u = w, q = w - q);
                            t.below = u <= z(f, 0);
                            n.y = b.translate(u, 0, 1, 0, 1);
                            n.height = Math.abs(n.y - b.translate(q, 0, 1, 0, 1));
                            if (q = b.waterfall.dummyStackItem) q.x = m, q.label = h[m].label,
                                q.setOffset(this.pointXOffset || 0, this.barW || 0, this.stackedYNeg[m], this.stackedYPos[m])
                        }
                    } else w = Math.max(e, e + q) + v[0], n.y = b.translate(w, 0, 1, 0, 1), t.isSum ? (n.y = b.translate(v[1], 0, 1, 0, 1), n.height = Math.min(b.translate(v[0], 0, 1, 0, 1), b.len) - n.y) : t.isIntermediateSum ? (0 <= q ? (u = v[1] + g, q = g) : (u = g, q = v[1] + g), b.reversed && (u ^= q, q ^= u, u ^= q), n.y = b.translate(u, 0, 1, 0, 1), n.height = Math.abs(n.y - Math.min(b.translate(q, 0, 1, 0, 1), b.len)), g += v[1]) : (n.height = 0 < u ? b.translate(e, 0, 1, 0, 1) - n.y : b.translate(e, 0, 1, 0, 1) - b.translate(e - u,
                        0, 1, 0, 1), e += u, t.below = e < z(f, 0)), 0 > n.height && (n.y += n.height, n.height *= -1);
                    t.plotY = n.y = Math.round(n.y) - this.borderWidth % 2 / 2;
                    n.height = Math.max(Math.round(n.height), .001);
                    t.yBottom = n.y + n.height;
                    n.height <= c && !t.isNull ? (n.height = c, n.y -= d, t.plotY = n.y, t.minPointLengthOffset = 0 > t.y ? -d : d) : (t.isNull && (n.width = 0), t.minPointLengthOffset = 0);
                    n = t.plotY + (t.negative ? n.height : 0);
                    this.chart.inverted ? t.tooltipPos[0] = b.len - n : t.tooltipPos[1] = n
                }
            };
            c.prototype.processData = function(b) {
                var c = this.options,
                    g = this.yData,
                    d = c.data,
                    p = g.length,
                    f = c.threshold || 0,
                    r, e, h, k, m;
                for (m = e = r = h = k = 0; m < p; m++) {
                    var t = g[m];
                    var n = d && d[m] ? d[m] : {};
                    "sum" === t || n.isSum ? g[m] = v(e) : "intermediateSum" === t || n.isIntermediateSum ? (g[m] = v(r), r = 0) : (e += t, r += t);
                    h = Math.min(e, h);
                    k = Math.max(e, k)
                }
                a.prototype.processData.call(this, b);
                c.stacking || (this.dataMin = h + f, this.dataMax = k)
            };
            c.prototype.toYData = function(a) {
                return a.isSum ? "sum" : a.isIntermediateSum ? "intermediateSum" : a.y
            };
            c.prototype.updateParallelArrays = function(b, c) {
                a.prototype.updateParallelArrays.call(this, b, c);
                if ("sum" === this.yData[0] || "intermediateSum" === this.yData[0]) this.yData[0] = null
            };
            c.prototype.pointAttribs = function(a, b) {
                var g = this.options.upColor;
                g && !a.options.color && (a.color = 0 < a.y ? g : null);
                a = y.prototype.pointAttribs.call(this, a, b);
                delete a.dashstyle;
                return a
            };
            c.prototype.getGraphPath = function() {
                return [
                    ["M", 0, 0]
                ]
            };
            c.prototype.getCrispPath = function() {
                var a = this.data,
                    b = this.yAxis,
                    g = a.length,
                    c = Math.round(this.graph.strokeWidth()) % 2 / 2,
                    d = Math.round(this.borderWidth) % 2 / 2,
                    f = this.xAxis.reversed,
                    e = this.yAxis.reversed,
                    h = this.options.stacking,
                    k = [],
                    m;
                for (m = 1; m < g; m++) {
                    var t = a[m].shapeArgs;
                    var n = a[m - 1];
                    var v = a[m - 1].shapeArgs;
                    var u = b.waterfall.stacks[this.stackKey];
                    var q = 0 < n.y ? -v.height : 0;
                    u && v && t && (u = u[m - 1], h ? (u = u.connectorThreshold, q = Math.round(b.translate(u, 0, 1, 0, 1) + (e ? q : 0)) - c) : q = v.y + n.minPointLengthOffset + d - c, k.push(["M", (v.x || 0) + (f ? 0 : v.width || 0), q], ["L", (t.x || 0) + (f ? t.width || 0 : 0), q]));
                    v && k.length && (!h && 0 > n.y && !e || 0 < n.y && e) && ((n = k[k.length - 2]) && "number" === typeof n[2] && (n[2] += v.height || 0), (n = k[k.length - 1]) && "number" ===
                        typeof n[2] && (n[2] += v.height || 0))
                }
                return k
            };
            c.prototype.drawGraph = function() {
                b.prototype.drawGraph.call(this);
                this.graph.attr({
                    d: this.getCrispPath()
                })
            };
            c.prototype.setStackedPoints = function() {
                function a(a, b, g, c) {
                    if (z)
                        for (g; g < z; g++) w.stackState[g] += c;
                    else w.stackState[0] = a, z = w.stackState.length;
                    w.stackState.push(w.stackState[z - 1] + b)
                }
                var b = this.options,
                    g = this.yAxis.waterfall.stacks,
                    c = b.threshold,
                    d = c || 0,
                    f = d,
                    e = this.stackKey,
                    h = this.xData,
                    k = h.length,
                    m, n, t;
                this.yAxis.stacking.usePercentage = !1;
                var v = n = t =
                    d;
                if (this.visible || !this.chart.options.chart.ignoreHiddenSeries) {
                    var u = g.changed;
                    (m = g.alreadyChanged) && 0 > m.indexOf(e) && (u = !0);
                    g[e] || (g[e] = {});
                    m = g[e];
                    for (var q = 0; q < k; q++) {
                        var y = h[q];
                        if (!m[y] || u) m[y] = {
                            negTotal: 0,
                            posTotal: 0,
                            stackTotal: 0,
                            threshold: 0,
                            stateIndex: 0,
                            stackState: [],
                            label: u && m[y] ? m[y].label : void 0
                        };
                        var w = m[y];
                        var B = this.yData[q];
                        0 <= B ? w.posTotal += B : w.negTotal += B;
                        var D = b.data[q];
                        y = w.absolutePos = w.posTotal;
                        var L = w.absoluteNeg = w.negTotal;
                        w.stackTotal = y + L;
                        var z = w.stackState.length;
                        D && D.isIntermediateSum ?
                            (a(t, n, 0, t), t = n, n = c, d ^= f, f ^= d, d ^= f) : D && D.isSum ? (a(c, v, z), d = c) : (a(d, B, 0, v), D && (v += B, n += B));
                        w.stateIndex++;
                        w.threshold = d;
                        d += w.stackTotal
                    }
                    g.changed = !1;
                    g.alreadyChanged || (g.alreadyChanged = []);
                    g.alreadyChanged.push(e)
                }
            };
            c.prototype.getExtremes = function() {
                var a = this.options.stacking;
                if (a) {
                    var b = this.yAxis;
                    b = b.waterfall.stacks;
                    var g = this.stackedYNeg = [];
                    var c = this.stackedYPos = [];
                    "overlap" === a ? B(b[this.stackKey], function(a) {
                        g.push(m(a.stackState));
                        c.push(f(a.stackState))
                    }) : B(b[this.stackKey], function(a) {
                        g.push(a.negTotal +
                            a.threshold);
                        c.push(a.posTotal + a.threshold)
                    });
                    return {
                        dataMin: m(g),
                        dataMax: f(c)
                    }
                }
                return {
                    dataMin: this.dataMin,
                    dataMax: this.dataMax
                }
            };
            c.defaultOptions = w(y.defaultOptions, {
                dataLabels: {
                    inside: !0
                },
                lineWidth: 1,
                lineColor: h.neutralColor80,
                dashStyle: "Dot",
                borderColor: h.neutralColor80,
                states: {
                    hover: {
                        lineWidthPlus: 0
                    }
                }
            });
            return c
        }(y);
        q(a.prototype, {
            getZonesGraphs: b.prototype.getZonesGraphs,
            pointValKey: "y",
            showLine: !0,
            pointClass: k
        });
        c.registerSeriesType("waterfall", a);
        n.compose(d.Axis, e);
        "";
        return a
    });
    z(e, "Series/Polygon/PolygonSeries.js", [e["Core/Globals.js"], e["Mixins/LegendSymbol.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(e, d, h, c) {
        var a = this && this.__extends || function() {
            var a = function(b, c) {
                a = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(a, b) {
                    a.__proto__ = b
                } || function(a, b) {
                    for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
                };
                return a(b, c)
            };
            return function(b, c) {
                function d() {
                    this.constructor = b
                }
                a(b, c);
                b.prototype = null === c ? Object.create(c) : (d.prototype = c.prototype, new d)
            }
        }();
        e = e.noop;
        var n = h.series,
            k = h.seriesTypes,
            t = k.area,
            q = k.line,
            y = k.scatter;
        k = c.extend;
        var b = c.merge;
        c = function(c) {
            function d() {
                var a = null !== c && c.apply(this, arguments) || this;
                a.data = void 0;
                a.options = void 0;
                a.points = void 0;
                return a
            }
            a(d, c);
            d.prototype.getGraphPath = function() {
                for (var a = q.prototype.getGraphPath.call(this), b = a.length + 1; b--;)(b === a.length || "M" === a[b][0]) && 0 < b && a.splice(b, 0, ["Z"]);
                return this.areaPath = a
            };
            d.prototype.drawGraph = function() {
                this.options.fillColor = this.color;
                t.prototype.drawGraph.call(this)
            };
            d.defaultOptions =
                b(y.defaultOptions, {
                    marker: {
                        enabled: !1,
                        states: {
                            hover: {
                                enabled: !1
                            }
                        }
                    },
                    stickyTracking: !1,
                    tooltip: {
                        followPointer: !0,
                        pointFormat: ""
                    },
                    trackByArea: !0
                });
            return d
        }(y);
        k(c.prototype, {
            type: "polygon",
            drawLegendSymbol: d.drawRectangle,
            drawTracker: n.prototype.drawTracker,
            setStackedPoints: e
        });
        h.registerSeriesType("polygon", c);
        "";
        return c
    });
    z(e, "Series/Bubble/BubblePoint.js", [e["Core/Series/Point.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(e, d, h) {
        var c = this && this.__extends || function() {
            var a =
                function(c, d) {
                    a = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(a, c) {
                        a.__proto__ = c
                    } || function(a, c) {
                        for (var d in c) c.hasOwnProperty(d) && (a[d] = c[d])
                    };
                    return a(c, d)
                };
            return function(c, d) {
                function e() {
                    this.constructor = c
                }
                a(c, d);
                c.prototype = null === d ? Object.create(d) : (e.prototype = d.prototype, new e)
            }
        }();
        h = h.extend;
        d = function(a) {
            function d() {
                var c = null !== a && a.apply(this, arguments) || this;
                c.options = void 0;
                c.series = void 0;
                return c
            }
            c(d, a);
            d.prototype.haloPath = function(a) {
                return e.prototype.haloPath.call(this,
                    0 === a ? 0 : (this.marker ? this.marker.radius || 0 : 0) + a)
            };
            return d
        }(d.seriesTypes.scatter.prototype.pointClass);
        h(d.prototype, {
            ttBelow: !1
        });
        return d
    });
    z(e, "Series/Bubble/BubbleLegend.js", [e["Core/Chart/Chart.js"], e["Core/Color/Color.js"], e["Core/FormatUtilities.js"], e["Core/Globals.js"], e["Core/Legend.js"], e["Core/Options.js"], e["Core/Color/Palette.js"], e["Core/Series/Series.js"], e["Core/Utilities.js"]], function(e, d, h, c, a, n, k, t, q) {
        var y = d.parse,
            b = c.noop;
        n = n.setOptions;
        d = q.addEvent;
        var f = q.arrayMax,
            m = q.arrayMin,
            v = q.isNumber,
            w = q.merge,
            B = q.objectEach,
            z = q.pick,
            E = q.stableSort;
        q = q.wrap;
        "";
        n({
            legend: {
                bubbleLegend: {
                    borderColor: void 0,
                    borderWidth: 2,
                    className: void 0,
                    color: void 0,
                    connectorClassName: void 0,
                    connectorColor: void 0,
                    connectorDistance: 60,
                    connectorWidth: 1,
                    enabled: !1,
                    labels: {
                        className: void 0,
                        allowOverlap: !1,
                        format: "",
                        formatter: void 0,
                        align: "right",
                        style: {
                            fontSize: "10px",
                            color: k.neutralColor100
                        },
                        x: 0,
                        y: 0
                    },
                    maxSize: 60,
                    minSize: 10,
                    legendIndex: 0,
                    ranges: {
                        value: void 0,
                        borderColor: void 0,
                        color: void 0,
                        connectorColor: void 0
                    },
                    sizeBy: "area",
                    sizeByAbsoluteValue: !1,
                    zIndex: 1,
                    zThreshold: 0
                }
            }
        });
        k = function() {
            function a(a, c) {
                this.options = this.symbols = this.visible = this.ranges = this.movementX = this.maxLabel = this.legendSymbol = this.legendItemWidth = this.legendItemHeight = this.legendItem = this.legendGroup = this.legend = this.fontMetrics = this.chart = void 0;
                this.setState = b;
                this.init(a, c)
            }
            a.prototype.init = function(a, b) {
                this.options = a;
                this.visible = !0;
                this.chart = b.chart;
                this.legend = b
            };
            a.prototype.addToLegend = function(a) {
                a.splice(this.options.legendIndex,
                    0, this)
            };
            a.prototype.drawLegendSymbol = function(a) {
                var b = this.chart,
                    g = this.options,
                    c = z(a.options.itemDistance, 20),
                    d = g.ranges;
                var f = g.connectorDistance;
                this.fontMetrics = b.renderer.fontMetrics(g.labels.style.fontSize);
                d && d.length && v(d[0].value) ? (E(d, function(a, b) {
                        return b.value - a.value
                    }), this.ranges = d, this.setOptions(), this.render(), b = this.getMaxLabelSize(), d = this.ranges[0].radius, a = 2 * d, f = f - d + b.width, f = 0 < f ? f : 0, this.maxLabel = b, this.movementX = "left" === g.labels.align ? f : 0, this.legendItemWidth = a + f + c, this.legendItemHeight =
                    a + this.fontMetrics.h / 2) : a.options.bubbleLegend.autoRanges = !0
            };
            a.prototype.setOptions = function() {
                var a = this.ranges,
                    b = this.options,
                    g = this.chart.series[b.seriesIndex],
                    c = this.legend.baseline,
                    d = {
                        zIndex: b.zIndex,
                        "stroke-width": b.borderWidth
                    },
                    f = {
                        zIndex: b.zIndex,
                        "stroke-width": b.connectorWidth
                    },
                    e = {
                        align: this.legend.options.rtl || "left" === b.labels.align ? "right" : "left",
                        zIndex: b.zIndex
                    },
                    h = g.options.marker.fillOpacity,
                    m = this.chart.styledMode;
                a.forEach(function(l, p) {
                    m || (d.stroke = z(l.borderColor, b.borderColor, g.color),
                        d.fill = z(l.color, b.color, 1 !== h ? y(g.color).setOpacity(h).get("rgba") : g.color), f.stroke = z(l.connectorColor, b.connectorColor, g.color));
                    a[p].radius = this.getRangeRadius(l.value);
                    a[p] = w(a[p], {
                        center: a[0].radius - a[p].radius + c
                    });
                    m || w(!0, a[p], {
                        bubbleAttribs: w(d),
                        connectorAttribs: w(f),
                        labelAttribs: e
                    })
                }, this)
            };
            a.prototype.getRangeRadius = function(a) {
                var b = this.options;
                return this.chart.series[this.options.seriesIndex].getRadius.call(this, b.ranges[b.ranges.length - 1].value, b.ranges[0].value, b.minSize, b.maxSize,
                    a)
            };
            a.prototype.render = function() {
                var a = this.chart.renderer,
                    b = this.options.zThreshold;
                this.symbols || (this.symbols = {
                    connectors: [],
                    bubbleItems: [],
                    labels: []
                });
                this.legendSymbol = a.g("bubble-legend");
                this.legendItem = a.g("bubble-legend-item");
                this.legendSymbol.translateX = 0;
                this.legendSymbol.translateY = 0;
                this.ranges.forEach(function(a) {
                    a.value >= b && this.renderRange(a)
                }, this);
                this.legendSymbol.add(this.legendItem);
                this.legendItem.add(this.legendGroup);
                this.hideOverlappingLabels()
            };
            a.prototype.renderRange =
                function(a) {
                    var b = this.options,
                        g = b.labels,
                        c = this.chart,
                        d = c.series[b.seriesIndex],
                        f = c.renderer,
                        e = this.symbols;
                    c = e.labels;
                    var h = a.center,
                        m = Math.abs(a.radius),
                        k = b.connectorDistance || 0,
                        r = g.align;
                    k = this.legend.options.rtl || "left" === r ? -k : k;
                    var n = b.connectorWidth,
                        t = this.ranges[0].radius || 0,
                        v = h - m - b.borderWidth / 2 + n / 2,
                        u = this.fontMetrics;
                    u = u.f / 2 - (u.h - u.f) / 2;
                    var q = f.styledMode;
                    "center" === r && (k = 0, b.connectorDistance = 0, a.labelAttribs.align = "center");
                    r = v + b.labels.y;
                    var w = t + k + b.labels.x;
                    e.bubbleItems.push(f.circle(t,
                        h + ((v % 1 ? 1 : .5) - (n % 2 ? 0 : .5)), m).attr(q ? {} : a.bubbleAttribs).addClass((q ? "highcharts-color-" + d.colorIndex + " " : "") + "highcharts-bubble-legend-symbol " + (b.className || "")).add(this.legendSymbol));
                    e.connectors.push(f.path(f.crispLine([
                        ["M", t, v],
                        ["L", t + k, v]
                    ], b.connectorWidth)).attr(q ? {} : a.connectorAttribs).addClass((q ? "highcharts-color-" + this.options.seriesIndex + " " : "") + "highcharts-bubble-legend-connectors " + (b.connectorClassName || "")).add(this.legendSymbol));
                    a = f.text(this.formatLabel(a), w, r + u).attr(q ? {} : a.labelAttribs).css(q ? {} : g.style).addClass("highcharts-bubble-legend-labels " + (b.labels.className || "")).add(this.legendSymbol);
                    c.push(a);
                    a.placed = !0;
                    a.alignAttr = {
                        x: w,
                        y: r + u
                    }
                };
            a.prototype.getMaxLabelSize = function() {
                var a, b;
                this.symbols.labels.forEach(function(g) {
                    b = g.getBBox(!0);
                    a = a ? b.width > a.width ? b : a : b
                });
                return a || {}
            };
            a.prototype.formatLabel = function(a) {
                var b = this.options,
                    g = b.labels.formatter;
                b = b.labels.format;
                var c = this.chart.numberFormatter;
                return b ? h.format(b, a) : g ? g.call(a) : c(a.value, 1)
            };
            a.prototype.hideOverlappingLabels =
                function() {
                    var a = this.chart,
                        b = this.symbols;
                    !this.options.labels.allowOverlap && b && (a.hideOverlappingLabels(b.labels), b.labels.forEach(function(a, c) {
                        a.newOpacity ? a.newOpacity !== a.oldOpacity && b.connectors[c].show() : b.connectors[c].hide()
                    }))
                };
            a.prototype.getRanges = function() {
                var a = this.legend.bubbleLegend,
                    b = a.options.ranges,
                    g, c = Number.MAX_VALUE,
                    d = -Number.MAX_VALUE;
                a.chart.series.forEach(function(a) {
                    a.isBubble && !a.ignoreSeries && (g = a.zData.filter(v), g.length && (c = z(a.options.zMin, Math.min(c, Math.max(m(g), !1 === a.options.displayNegative ? a.options.zThreshold : -Number.MAX_VALUE))), d = z(a.options.zMax, Math.max(d, f(g)))))
                });
                var e = c === d ? [{
                    value: d
                }] : [{
                    value: c
                }, {
                    value: (c + d) / 2
                }, {
                    value: d,
                    autoRanges: !0
                }];
                b.length && b[0].radius && e.reverse();
                e.forEach(function(a, g) {
                    b && b[g] && (e[g] = w(b[g], a))
                });
                return e
            };
            a.prototype.predictBubbleSizes = function() {
                var a = this.chart,
                    b = this.fontMetrics,
                    g = a.legend.options,
                    c = "horizontal" === g.layout,
                    d = c ? a.legend.lastLineHeight : 0,
                    f = a.plotSizeX,
                    e = a.plotSizeY,
                    h = a.series[this.options.seriesIndex];
                a = Math.ceil(h.minPxSize);
                var m = Math.ceil(h.maxPxSize);
                h = h.options.maxSize;
                var k = Math.min(e, f);
                if (g.floating || !/%$/.test(h)) b = m;
                else if (h = parseFloat(h), b = (k + d - b.h / 2) * h / 100 / (h / 100 + 1), c && e - b >= f || !c && f - b >= e) b = m;
                return [a, Math.ceil(b)]
            };
            a.prototype.updateRanges = function(a, b) {
                var g = this.legend.options.bubbleLegend;
                g.minSize = a;
                g.maxSize = b;
                g.ranges = this.getRanges()
            };
            a.prototype.correctSizes = function() {
                var a = this.legend,
                    b = this.chart.series[this.options.seriesIndex];
                1 < Math.abs(Math.ceil(b.maxPxSize) - this.options.maxSize) &&
                    (this.updateRanges(this.options.minSize, b.maxPxSize), a.render())
            };
            return a
        }();
        d(a, "afterGetAllItems", function(a) {
            var b = this.bubbleLegend,
                d = this.options,
                g = d.bubbleLegend,
                f = this.chart.getVisibleBubbleSeriesIndex();
            b && b.ranges && b.ranges.length && (g.ranges.length && (g.autoRanges = !!g.ranges[0].autoRanges), this.destroyItem(b));
            0 <= f && d.enabled && g.enabled && (g.seriesIndex = f, this.bubbleLegend = new c.BubbleLegend(g, this), this.bubbleLegend.addToLegend(a.allItems))
        });
        e.prototype.getVisibleBubbleSeriesIndex = function() {
            for (var a =
                    this.series, b = 0; b < a.length;) {
                if (a[b] && a[b].isBubble && a[b].visible && a[b].zData.length) return b;
                b++
            }
            return -1
        };
        a.prototype.getLinesHeights = function() {
            var a = this.allItems,
                b = [],
                c = a.length,
                g, d = 0;
            for (g = 0; g < c; g++)
                if (a[g].legendItemHeight && (a[g].itemHeight = a[g].legendItemHeight), a[g] === a[c - 1] || a[g + 1] && a[g]._legendItemPos[1] !== a[g + 1]._legendItemPos[1]) {
                    b.push({
                        height: 0
                    });
                    var f = b[b.length - 1];
                    for (d; d <= g; d++) a[d].itemHeight > f.height && (f.height = a[d].itemHeight);
                    f.step = g
                }
            return b
        };
        a.prototype.retranslateItems = function(a) {
            var b,
                c, g, d = this.options.rtl,
                f = 0;
            this.allItems.forEach(function(l, p) {
                b = l.legendGroup.translateX;
                c = l._legendItemPos[1];
                if ((g = l.movementX) || d && l.ranges) g = d ? b - l.options.maxSize / 2 : b + g, l.legendGroup.attr({
                    translateX: g
                });
                p > a[f].step && f++;
                l.legendGroup.attr({
                    translateY: Math.round(c + a[f].height / 2)
                });
                l._legendItemPos[1] = c + a[f].height / 2
            })
        };
        d(t, "legendItemClick", function() {
            var a = this.chart,
                b = this.visible,
                c = this.chart.legend;
            c && c.bubbleLegend && (this.visible = !b, this.ignoreSeries = b, a = 0 <= a.getVisibleBubbleSeriesIndex(),
                c.bubbleLegend.visible !== a && (c.update({
                    bubbleLegend: {
                        enabled: a
                    }
                }), c.bubbleLegend.visible = a), this.visible = b)
        });
        q(e.prototype, "drawChartBox", function(a, b, c) {
            var g = this.legend,
                d = 0 <= this.getVisibleBubbleSeriesIndex();
            if (g && g.options.enabled && g.bubbleLegend && g.options.bubbleLegend.autoRanges && d) {
                var f = g.bubbleLegend.options;
                d = g.bubbleLegend.predictBubbleSizes();
                g.bubbleLegend.updateRanges(d[0], d[1]);
                f.placed || (g.group.placed = !1, g.allItems.forEach(function(a) {
                    a.legendGroup.translateY = null
                }));
                g.render();
                this.getMargins();
                this.axes.forEach(function(a) {
                    a.visible && a.render();
                    f.placed || (a.setScale(), a.updateNames(), B(a.ticks, function(a) {
                        a.isNew = !0;
                        a.isNewLabel = !0
                    }))
                });
                f.placed = !0;
                this.getMargins();
                a.call(this, b, c);
                g.bubbleLegend.correctSizes();
                g.retranslateItems(g.getLinesHeights())
            } else a.call(this, b, c), g && g.options.enabled && g.bubbleLegend && (g.render(), g.retranslateItems(g.getLinesHeights()))
        });
        c.BubbleLegend = k;
        return c.BubbleLegend
    });
    z(e, "Series/Bubble/BubbleSeries.js", [e["Core/Axis/Axis.js"], e["Series/Bubble/BubblePoint.js"],
        e["Core/Color/Color.js"], e["Core/Globals.js"], e["Core/Series/Series.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]
    ], function(e, d, h, c, a, n, k) {
        var t = this && this.__extends || function() {
                var a = function(b, g) {
                    a = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(a, b) {
                        a.__proto__ = b
                    } || function(a, b) {
                        for (var g in b) b.hasOwnProperty(g) && (a[g] = b[g])
                    };
                    return a(b, g)
                };
                return function(b, g) {
                    function c() {
                        this.constructor = b
                    }
                    a(b, g);
                    b.prototype = null === g ? Object.create(g) : (c.prototype = g.prototype,
                        new c)
                }
            }(),
            q = h.parse;
        h = c.noop;
        var y = n.seriesTypes;
        c = y.column;
        var b = y.scatter,
            f = k.arrayMax,
            m = k.arrayMin,
            v = k.clamp,
            w = k.extend,
            B = k.isNumber,
            z = k.merge,
            E = k.pick,
            u = k.pInt;
        k = function(c) {
            function d() {
                var a = null !== c && c.apply(this, arguments) || this;
                a.data = void 0;
                a.maxPxSize = void 0;
                a.minPxSize = void 0;
                a.options = void 0;
                a.points = void 0;
                a.radii = void 0;
                a.yData = void 0;
                a.zData = void 0;
                return a
            }
            t(d, c);
            d.prototype.animate = function(a) {
                !a && this.points.length < this.options.animationLimit && this.points.forEach(function(a) {
                    var b =
                        a.graphic;
                    b && b.width && (this.hasRendered || b.attr({
                        x: a.plotX,
                        y: a.plotY,
                        width: 1,
                        height: 1
                    }), b.animate(this.markerAttribs(a), this.options.animation))
                }, this)
            };
            d.prototype.getRadii = function(a, b, c) {
                var g = this.zData,
                    d = this.yData,
                    f = c.minPxSize,
                    l = c.maxPxSize,
                    e = [];
                var p = 0;
                for (c = g.length; p < c; p++) {
                    var h = g[p];
                    e.push(this.getRadius(a, b, f, l, h, d[p]))
                }
                this.radii = e
            };
            d.prototype.getRadius = function(a, b, c, d, f, l) {
                var g = this.options,
                    e = "width" !== g.sizeBy,
                    p = g.zThreshold,
                    h = b - a,
                    m = .5;
                if (null === l || null === f) return null;
                if (B(f)) {
                    g.sizeByAbsoluteValue &&
                        (f = Math.abs(f - p), h = Math.max(b - p, Math.abs(a - p)), a = 0);
                    if (f < a) return c / 2 - 1;
                    0 < h && (m = (f - a) / h)
                }
                e && 0 <= m && (m = Math.sqrt(m));
                return Math.ceil(c + m * (d - c)) / 2
            };
            d.prototype.hasData = function() {
                return !!this.processedXData.length
            };
            d.prototype.pointAttribs = function(b, c) {
                var g = this.options.marker.fillOpacity;
                b = a.prototype.pointAttribs.call(this, b, c);
                1 !== g && (b.fill = q(b.fill).setOpacity(g).get("rgba"));
                return b
            };
            d.prototype.translate = function() {
                var a, b = this.data,
                    d = this.radii;
                c.prototype.translate.call(this);
                for (a = b.length; a--;) {
                    var f =
                        b[a];
                    var l = d ? d[a] : 0;
                    B(l) && l >= this.minPxSize / 2 ? (f.marker = w(f.marker, {
                        radius: l,
                        width: 2 * l,
                        height: 2 * l
                    }), f.dlBox = {
                        x: f.plotX - l,
                        y: f.plotY - l,
                        width: 2 * l,
                        height: 2 * l
                    }) : f.shapeArgs = f.plotY = f.dlBox = void 0
                }
            };
            d.defaultOptions = z(b.defaultOptions, {
                dataLabels: {
                    formatter: function() {
                        return this.point.z
                    },
                    inside: !0,
                    verticalAlign: "middle"
                },
                animationLimit: 250,
                marker: {
                    lineColor: null,
                    lineWidth: 1,
                    fillOpacity: .5,
                    radius: null,
                    states: {
                        hover: {
                            radiusPlus: 0
                        }
                    },
                    symbol: "circle"
                },
                minSize: 8,
                maxSize: "20%",
                softThreshold: !1,
                states: {
                    hover: {
                        halo: {
                            size: 5
                        }
                    }
                },
                tooltip: {
                    pointFormat: "({point.x}, {point.y}), Size: {point.z}"
                },
                turboThreshold: 0,
                zThreshold: 0,
                zoneAxis: "z"
            });
            return d
        }(b);
        w(k.prototype, {
            alignDataLabel: c.prototype.alignDataLabel,
            applyZones: h,
            bubblePadding: !0,
            buildKDTree: h,
            directTouch: !0,
            isBubble: !0,
            pointArrayMap: ["y", "z"],
            pointClass: d,
            parallelArrays: ["x", "y", "z"],
            trackerGroups: ["group", "dataLabelsGroup"],
            specialGroup: "group",
            zoneAxis: "z"
        });
        e.prototype.beforePadding = function() {
            var a = this,
                b = this.len,
                g = this.chart,
                c = 0,
                d = b,
                e = this.isXAxis,
                h = e ? "xData" :
                "yData",
                k = this.min,
                n = {},
                t = Math.min(g.plotWidth, g.plotHeight),
                q = Number.MAX_VALUE,
                w = -Number.MAX_VALUE,
                y = this.max - k,
                z = b / y,
                G = [];
            this.series.forEach(function(b) {
                var c = b.options;
                !b.bubblePadding || !b.visible && g.options.chart.ignoreHiddenSeries || (a.allowZoomOutside = !0, G.push(b), e && (["minSize", "maxSize"].forEach(function(a) {
                    var b = c[a],
                        g = /%$/.test(b);
                    b = u(b);
                    n[a] = g ? t * b / 100 : b
                }), b.minPxSize = n.minSize, b.maxPxSize = Math.max(n.maxSize, n.minSize), b = b.zData.filter(B), b.length && (q = E(c.zMin, v(m(b), !1 === c.displayNegative ?
                    c.zThreshold : -Number.MAX_VALUE, q)), w = E(c.zMax, Math.max(w, f(b))))))
            });
            G.forEach(function(b) {
                var g = b[h],
                    f = g.length;
                e && b.getRadii(q, w, b);
                if (0 < y)
                    for (; f--;)
                        if (B(g[f]) && a.dataMin <= g[f] && g[f] <= a.max) {
                            var l = b.radii ? b.radii[f] : 0;
                            c = Math.min((g[f] - k) * z - l, c);
                            d = Math.max((g[f] - k) * z + l, d)
                        }
            });
            G.length && 0 < y && !this.logarithmic && (d -= b, z *= (b + Math.max(0, c) - Math.min(d, b)) / b, [
                ["min", "userMin", c],
                ["max", "userMax", d]
            ].forEach(function(b) {
                "undefined" === typeof E(a.options[b[0]], a[b[1]]) && (a[b[0]] += b[2] / z)
            }))
        };
        n.registerSeriesType("bubble",
            k);
        "";
        "";
        return k
    });
    z(e, "Series/PackedBubble/PackedBubblePoint.js", [e["Core/Chart/Chart.js"], e["Core/Series/Point.js"], e["Core/Series/SeriesRegistry.js"]], function(e, d, h) {
        var c = this && this.__extends || function() {
            var a = function(c, d) {
                a = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(a, c) {
                    a.__proto__ = c
                } || function(a, c) {
                    for (var d in c) c.hasOwnProperty(d) && (a[d] = c[d])
                };
                return a(c, d)
            };
            return function(c, d) {
                function e() {
                    this.constructor = c
                }
                a(c, d);
                c.prototype = null === d ? Object.create(d) : (e.prototype =
                    d.prototype, new e)
            }
        }();
        return function(a) {
            function h() {
                var c = null !== a && a.apply(this, arguments) || this;
                c.degree = NaN;
                c.mass = NaN;
                c.radius = NaN;
                c.options = void 0;
                c.series = void 0;
                c.value = null;
                return c
            }
            c(h, a);
            h.prototype.destroy = function() {
                this.series.layout && this.series.layout.removeElementFromCollection(this, this.series.layout.nodes);
                return d.prototype.destroy.apply(this, arguments)
            };
            h.prototype.firePointEvent = function() {
                var a = this.series.options;
                if (this.isParentNode && a.parentNode) {
                    var c = a.allowPointSelect;
                    a.allowPointSelect = a.parentNode.allowPointSelect;
                    d.prototype.firePointEvent.apply(this, arguments);
                    a.allowPointSelect = c
                } else d.prototype.firePointEvent.apply(this, arguments)
            };
            h.prototype.select = function() {
                var a = this.series.chart;
                this.isParentNode ? (a.getSelectedPoints = a.getSelectedParentNodes, d.prototype.select.apply(this, arguments), a.getSelectedPoints = e.prototype.getSelectedPoints) : d.prototype.select.apply(this, arguments)
            };
            return h
        }(h.seriesTypes.bubble.prototype.pointClass)
    });
    z(e, "Series/Networkgraph/DraggableNodes.js", [e["Core/Chart/Chart.js"], e["Core/Globals.js"], e["Core/Utilities.js"]], function(e, d, h) {
        var c = h.addEvent;
        d.dragNodesMixin = {
            onMouseDown: function(a, c) {
                c = this.chart.pointer.normalize(c);
                a.fixedPosition = {
                    chartX: c.chartX,
                    chartY: c.chartY,
                    plotX: a.plotX,
                    plotY: a.plotY
                };
                a.inDragMode = !0
            },
            onMouseMove: function(a, c) {
                if (a.fixedPosition && a.inDragMode) {
                    var d = this.chart,
                        e = d.pointer.normalize(c);
                    c = a.fixedPosition.chartX - e.chartX;
                    e = a.fixedPosition.chartY - e.chartY;
                    var h = void 0,
                        n = void 0,
                        b = d.graphLayoutsLookup;
                    if (5 < Math.abs(c) ||
                        5 < Math.abs(e)) h = a.fixedPosition.plotX - c, n = a.fixedPosition.plotY - e, d.isInsidePlot(h, n) && (a.plotX = h, a.plotY = n, a.hasDragged = !0, this.redrawHalo(a), b.forEach(function(a) {
                        a.restartSimulation()
                    }))
                }
            },
            onMouseUp: function(a, c) {
                a.fixedPosition && (a.hasDragged && (this.layout.enableSimulation ? this.layout.start() : this.chart.redraw()), a.inDragMode = a.hasDragged = !1, this.options.fixedDraggable || delete a.fixedPosition)
            },
            redrawHalo: function(a) {
                a && this.halo && this.halo.attr({
                    d: a.haloPath(this.options.states.hover.halo.size)
                })
            }
        };
        c(e, "load", function() {
            var a = this,
                d, e, h;
            a.container && (d = c(a.container, "mousedown", function(d) {
                var k = a.hoverPoint;
                k && k.series && k.series.hasDraggableNodes && k.series.options.draggable && (k.series.onMouseDown(k, d), e = c(a.container, "mousemove", function(a) {
                    return k && k.series && k.series.onMouseMove(k, a)
                }), h = c(a.container.ownerDocument, "mouseup", function(a) {
                    e();
                    h();
                    return k && k.series && k.series.onMouseUp(k, a)
                }))
            }));
            c(a, "destroy", function() {
                d()
            })
        })
    });
    z(e, "Series/Networkgraph/Integrations.js", [e["Core/Globals.js"]],
        function(e) {
            e.networkgraphIntegrations = {
                verlet: {
                    attractiveForceFunction: function(d, e) {
                        return (e - d) / d
                    },
                    repulsiveForceFunction: function(d, e) {
                        return (e - d) / d * (e > d ? 1 : 0)
                    },
                    barycenter: function() {
                        var d = this.options.gravitationalConstant,
                            e = this.barycenter.xFactor,
                            c = this.barycenter.yFactor;
                        e = (e - (this.box.left + this.box.width) / 2) * d;
                        c = (c - (this.box.top + this.box.height) / 2) * d;
                        this.nodes.forEach(function(a) {
                            a.fixedPosition || (a.plotX -= e / a.mass / a.degree, a.plotY -= c / a.mass / a.degree)
                        })
                    },
                    repulsive: function(d, e, c) {
                        e = e * this.diffTemperature /
                            d.mass / d.degree;
                        d.fixedPosition || (d.plotX += c.x * e, d.plotY += c.y * e)
                    },
                    attractive: function(d, e, c) {
                        var a = d.getMass(),
                            h = -c.x * e * this.diffTemperature;
                        e = -c.y * e * this.diffTemperature;
                        d.fromNode.fixedPosition || (d.fromNode.plotX -= h * a.fromNode / d.fromNode.degree, d.fromNode.plotY -= e * a.fromNode / d.fromNode.degree);
                        d.toNode.fixedPosition || (d.toNode.plotX += h * a.toNode / d.toNode.degree, d.toNode.plotY += e * a.toNode / d.toNode.degree)
                    },
                    integrate: function(d, e) {
                        var c = -d.options.friction,
                            a = d.options.maxSpeed,
                            h = (e.plotX + e.dispX - e.prevX) *
                            c;
                        c *= e.plotY + e.dispY - e.prevY;
                        var k = Math.abs,
                            t = k(h) / (h || 1);
                        k = k(c) / (c || 1);
                        h = t * Math.min(a, Math.abs(h));
                        c = k * Math.min(a, Math.abs(c));
                        e.prevX = e.plotX + e.dispX;
                        e.prevY = e.plotY + e.dispY;
                        e.plotX += h;
                        e.plotY += c;
                        e.temperature = d.vectorLength({
                            x: h,
                            y: c
                        })
                    },
                    getK: function(d) {
                        return Math.pow(d.box.width * d.box.height / d.nodes.length, .5)
                    }
                },
                euler: {
                    attractiveForceFunction: function(d, e) {
                        return d * d / e
                    },
                    repulsiveForceFunction: function(d, e) {
                        return e * e / d
                    },
                    barycenter: function() {
                        var d = this.options.gravitationalConstant,
                            e = this.barycenter.xFactor,
                            c = this.barycenter.yFactor;
                        this.nodes.forEach(function(a) {
                            if (!a.fixedPosition) {
                                var h = a.getDegree();
                                h *= 1 + h / 2;
                                a.dispX += (e - a.plotX) * d * h / a.degree;
                                a.dispY += (c - a.plotY) * d * h / a.degree
                            }
                        })
                    },
                    repulsive: function(d, e, c, a) {
                        d.dispX += c.x / a * e / d.degree;
                        d.dispY += c.y / a * e / d.degree
                    },
                    attractive: function(d, e, c, a) {
                        var h = d.getMass(),
                            k = c.x / a * e;
                        e *= c.y / a;
                        d.fromNode.fixedPosition || (d.fromNode.dispX -= k * h.fromNode / d.fromNode.degree, d.fromNode.dispY -= e * h.fromNode / d.fromNode.degree);
                        d.toNode.fixedPosition || (d.toNode.dispX += k * h.toNode /
                            d.toNode.degree, d.toNode.dispY += e * h.toNode / d.toNode.degree)
                    },
                    integrate: function(d, e) {
                        e.dispX += e.dispX * d.options.friction;
                        e.dispY += e.dispY * d.options.friction;
                        var c = e.temperature = d.vectorLength({
                            x: e.dispX,
                            y: e.dispY
                        });
                        0 !== c && (e.plotX += e.dispX / c * Math.min(Math.abs(e.dispX), d.temperature), e.plotY += e.dispY / c * Math.min(Math.abs(e.dispY), d.temperature))
                    },
                    getK: function(d) {
                        return Math.pow(d.box.width * d.box.height / d.nodes.length, .3)
                    }
                }
            }
        });
    z(e, "Series/Networkgraph/QuadTree.js", [e["Core/Globals.js"], e["Core/Utilities.js"]],
        function(e, d) {
            d = d.extend;
            var h = e.QuadTreeNode = function(c) {
                this.box = c;
                this.boxSize = Math.min(c.width, c.height);
                this.nodes = [];
                this.body = this.isInternal = !1;
                this.isEmpty = !0
            };
            d(h.prototype, {
                insert: function(c, a) {
                    this.isInternal ? this.nodes[this.getBoxPosition(c)].insert(c, a - 1) : (this.isEmpty = !1, this.body ? a ? (this.isInternal = !0, this.divideBox(), !0 !== this.body && (this.nodes[this.getBoxPosition(this.body)].insert(this.body, a - 1), this.body = !0), this.nodes[this.getBoxPosition(c)].insert(c, a - 1)) : (a = new h({
                        top: c.plotX,
                        left: c.plotY,
                        width: .1,
                        height: .1
                    }), a.body = c, a.isInternal = !1, this.nodes.push(a)) : (this.isInternal = !1, this.body = c))
                },
                updateMassAndCenter: function() {
                    var c = 0,
                        a = 0,
                        d = 0;
                    this.isInternal ? (this.nodes.forEach(function(e) {
                        e.isEmpty || (c += e.mass, a += e.plotX * e.mass, d += e.plotY * e.mass)
                    }), a /= c, d /= c) : this.body && (c = this.body.mass, a = this.body.plotX, d = this.body.plotY);
                    this.mass = c;
                    this.plotX = a;
                    this.plotY = d
                },
                divideBox: function() {
                    var c = this.box.width / 2,
                        a = this.box.height / 2;
                    this.nodes[0] = new h({
                        left: this.box.left,
                        top: this.box.top,
                        width: c,
                        height: a
                    });
                    this.nodes[1] = new h({
                        left: this.box.left + c,
                        top: this.box.top,
                        width: c,
                        height: a
                    });
                    this.nodes[2] = new h({
                        left: this.box.left + c,
                        top: this.box.top + a,
                        width: c,
                        height: a
                    });
                    this.nodes[3] = new h({
                        left: this.box.left,
                        top: this.box.top + a,
                        width: c,
                        height: a
                    })
                },
                getBoxPosition: function(c) {
                    var a = c.plotY < this.box.top + this.box.height / 2;
                    return c.plotX < this.box.left + this.box.width / 2 ? a ? 0 : 3 : a ? 1 : 2
                }
            });
            e = e.QuadTree = function(c, a, d, e) {
                this.box = {
                    left: c,
                    top: a,
                    width: d,
                    height: e
                };
                this.maxDepth = 25;
                this.root = new h(this.box,
                    "0");
                this.root.isInternal = !0;
                this.root.isRoot = !0;
                this.root.divideBox()
            };
            d(e.prototype, {
                insertNodes: function(c) {
                    c.forEach(function(a) {
                        this.root.insert(a, this.maxDepth)
                    }, this)
                },
                visitNodeRecursive: function(c, a, d) {
                    var e;
                    c || (c = this.root);
                    c === this.root && a && (e = a(c));
                    !1 !== e && (c.nodes.forEach(function(c) {
                        if (c.isInternal) {
                            a && (e = a(c));
                            if (!1 === e) return;
                            this.visitNodeRecursive(c, a, d)
                        } else c.body && a && a(c.body);
                        d && d(c)
                    }, this), c === this.root && d && d(c))
                },
                calculateMassAndCenter: function() {
                    this.visitNodeRecursive(null,
                        null,
                        function(c) {
                            c.updateMassAndCenter()
                        })
                }
            })
        });
    z(e, "Series/Networkgraph/Layouts.js", [e["Core/Chart/Chart.js"], e["Core/Animation/AnimationUtilities.js"], e["Core/Globals.js"], e["Core/Utilities.js"]], function(e, d, h, c) {
        var a = d.setAnimation;
        d = c.addEvent;
        var n = c.clamp,
            k = c.defined,
            t = c.extend,
            q = c.isFunction,
            y = c.pick;
        h.layouts = {
            "reingold-fruchterman": function() {}
        };
        t(h.layouts["reingold-fruchterman"].prototype, {
            init: function(a) {
                this.options = a;
                this.nodes = [];
                this.links = [];
                this.series = [];
                this.box = {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0
                };
                this.setInitialRendering(!0);
                this.integration = h.networkgraphIntegrations[a.integration];
                this.enableSimulation = a.enableSimulation;
                this.attractiveForce = y(a.attractiveForce, this.integration.attractiveForceFunction);
                this.repulsiveForce = y(a.repulsiveForce, this.integration.repulsiveForceFunction);
                this.approximation = a.approximation
            },
            updateSimulation: function(a) {
                this.enableSimulation = y(a, this.options.enableSimulation)
            },
            start: function() {
                var a = this.series,
                    c = this.options;
                this.currentStep = 0;
                this.forces =
                    a[0] && a[0].forces || [];
                this.chart = a[0] && a[0].chart;
                this.initialRendering && (this.initPositions(), a.forEach(function(a) {
                    a.finishedAnimating = !0;
                    a.render()
                }));
                this.setK();
                this.resetSimulation(c);
                this.enableSimulation && this.step()
            },
            step: function() {
                var a = this,
                    c = this.series;
                a.currentStep++;
                "barnes-hut" === a.approximation && (a.createQuadTree(), a.quadTree.calculateMassAndCenter());
                a.forces.forEach(function(b) {
                    a[b + "Forces"](a.temperature)
                });
                a.applyLimits(a.temperature);
                a.temperature = a.coolDown(a.startTemperature,
                    a.diffTemperature, a.currentStep);
                a.prevSystemTemperature = a.systemTemperature;
                a.systemTemperature = a.getSystemTemperature();
                a.enableSimulation && (c.forEach(function(a) {
                    a.chart && a.render()
                }), a.maxIterations-- && isFinite(a.temperature) && !a.isStable() ? (a.simulation && h.win.cancelAnimationFrame(a.simulation), a.simulation = h.win.requestAnimationFrame(function() {
                    a.step()
                })) : a.simulation = !1)
            },
            stop: function() {
                this.simulation && h.win.cancelAnimationFrame(this.simulation)
            },
            setArea: function(a, c, d, e) {
                this.box = {
                    left: a,
                    top: c,
                    width: d,
                    height: e
                }
            },
            setK: function() {
                this.k = this.options.linkLength || this.integration.getK(this)
            },
            addElementsToCollection: function(a, c) {
                a.forEach(function(a) {
                    -1 === c.indexOf(a) && c.push(a)
                })
            },
            removeElementFromCollection: function(a, c) {
                a = c.indexOf(a); - 1 !== a && c.splice(a, 1)
            },
            clear: function() {
                this.nodes.length = 0;
                this.links.length = 0;
                this.series.length = 0;
                this.resetSimulation()
            },
            resetSimulation: function() {
                this.forcedStop = !1;
                this.systemTemperature = 0;
                this.setMaxIterations();
                this.setTemperature();
                this.setDiffTemperature()
            },
            restartSimulation: function() {
                this.simulation ? this.resetSimulation() : (this.setInitialRendering(!1), this.enableSimulation ? this.start() : this.setMaxIterations(1), this.chart && this.chart.redraw(), this.setInitialRendering(!0))
            },
            setMaxIterations: function(a) {
                this.maxIterations = y(a, this.options.maxIterations)
            },
            setTemperature: function() {
                this.temperature = this.startTemperature = Math.sqrt(this.nodes.length)
            },
            setDiffTemperature: function() {
                this.diffTemperature = this.startTemperature / (this.options.maxIterations + 1)
            },
            setInitialRendering: function(a) {
                this.initialRendering = a
            },
            createQuadTree: function() {
                this.quadTree = new h.QuadTree(this.box.left, this.box.top, this.box.width, this.box.height);
                this.quadTree.insertNodes(this.nodes)
            },
            initPositions: function() {
                var a = this.options.initialPositions;
                q(a) ? (a.call(this), this.nodes.forEach(function(a) {
                    k(a.prevX) || (a.prevX = a.plotX);
                    k(a.prevY) || (a.prevY = a.plotY);
                    a.dispX = 0;
                    a.dispY = 0
                })) : "circle" === a ? this.setCircularPositions() : this.setRandomPositions()
            },
            setCircularPositions: function() {
                function a(b) {
                    b.linksFrom.forEach(function(b) {
                        t[b.toNode.id] ||
                            (t[b.toNode.id] = !0, k.push(b.toNode), a(b.toNode))
                    })
                }
                var c = this.box,
                    d = this.nodes,
                    e = 2 * Math.PI / (d.length + 1),
                    h = d.filter(function(a) {
                        return 0 === a.linksTo.length
                    }),
                    k = [],
                    t = {},
                    q = this.options.initialPositionRadius;
                h.forEach(function(b) {
                    k.push(b);
                    a(b)
                });
                k.length ? d.forEach(function(a) {
                    -1 === k.indexOf(a) && k.push(a)
                }) : k = d;
                k.forEach(function(a, b) {
                    a.plotX = a.prevX = y(a.plotX, c.width / 2 + q * Math.cos(b * e));
                    a.plotY = a.prevY = y(a.plotY, c.height / 2 + q * Math.sin(b * e));
                    a.dispX = 0;
                    a.dispY = 0
                })
            },
            setRandomPositions: function() {
                function a(a) {
                    a =
                        a * a / Math.PI;
                    return a -= Math.floor(a)
                }
                var c = this.box,
                    d = this.nodes,
                    e = d.length + 1;
                d.forEach(function(b, d) {
                    b.plotX = b.prevX = y(b.plotX, c.width * a(d));
                    b.plotY = b.prevY = y(b.plotY, c.height * a(e + d));
                    b.dispX = 0;
                    b.dispY = 0
                })
            },
            force: function(a) {
                this.integration[a].apply(this, Array.prototype.slice.call(arguments, 1))
            },
            barycenterForces: function() {
                this.getBarycenter();
                this.force("barycenter")
            },
            getBarycenter: function() {
                var a = 0,
                    c = 0,
                    d = 0;
                this.nodes.forEach(function(b) {
                    c += b.plotX * b.mass;
                    d += b.plotY * b.mass;
                    a += b.mass
                });
                return this.barycenter = {
                    x: c,
                    y: d,
                    xFactor: c / a,
                    yFactor: d / a
                }
            },
            barnesHutApproximation: function(a, c) {
                var b = this.getDistXY(a, c),
                    d = this.vectorLength(b);
                if (a !== c && 0 !== d)
                    if (c.isInternal)
                        if (c.boxSize / d < this.options.theta && 0 !== d) {
                            var e = this.repulsiveForce(d, this.k);
                            this.force("repulsive", a, e * c.mass, b, d);
                            var f = !1
                        } else f = !0;
                else e = this.repulsiveForce(d, this.k), this.force("repulsive", a, e * c.mass, b, d);
                return f
            },
            repulsiveForces: function() {
                var a = this;
                "barnes-hut" === a.approximation ? a.nodes.forEach(function(b) {
                    a.quadTree.visitNodeRecursive(null,
                        function(c) {
                            return a.barnesHutApproximation(b, c)
                        })
                }) : a.nodes.forEach(function(b) {
                    a.nodes.forEach(function(c) {
                        if (b !== c && !b.fixedPosition) {
                            var d = a.getDistXY(b, c);
                            var e = a.vectorLength(d);
                            if (0 !== e) {
                                var f = a.repulsiveForce(e, a.k);
                                a.force("repulsive", b, f * c.mass, d, e)
                            }
                        }
                    })
                })
            },
            attractiveForces: function() {
                var a = this,
                    c, d, e;
                a.links.forEach(function(b) {
                    b.fromNode && b.toNode && (c = a.getDistXY(b.fromNode, b.toNode), d = a.vectorLength(c), 0 !== d && (e = a.attractiveForce(d, a.k), a.force("attractive", b, e, c, d)))
                })
            },
            applyLimits: function() {
                var a =
                    this;
                a.nodes.forEach(function(b) {
                    b.fixedPosition || (a.integration.integrate(a, b), a.applyLimitBox(b, a.box), b.dispX = 0, b.dispY = 0)
                })
            },
            applyLimitBox: function(a, c) {
                var b = a.radius;
                a.plotX = n(a.plotX, c.left + b, c.width - b);
                a.plotY = n(a.plotY, c.top + b, c.height - b)
            },
            coolDown: function(a, c, d) {
                return a - c * d
            },
            isStable: function() {
                return .00001 > Math.abs(this.systemTemperature - this.prevSystemTemperature) || 0 >= this.temperature
            },
            getSystemTemperature: function() {
                return this.nodes.reduce(function(a, c) {
                    return a + c.temperature
                }, 0)
            },
            vectorLength: function(a) {
                return Math.sqrt(a.x * a.x + a.y * a.y)
            },
            getDistR: function(a, c) {
                a = this.getDistXY(a, c);
                return this.vectorLength(a)
            },
            getDistXY: function(a, c) {
                var b = a.plotX - c.plotX;
                a = a.plotY - c.plotY;
                return {
                    x: b,
                    y: a,
                    absX: Math.abs(b),
                    absY: Math.abs(a)
                }
            }
        });
        d(e, "predraw", function() {
            this.graphLayoutsLookup && this.graphLayoutsLookup.forEach(function(a) {
                a.stop()
            })
        });
        d(e, "render", function() {
            function b(a) {
                a.maxIterations-- && isFinite(a.temperature) && !a.isStable() && !a.enableSimulation && (a.beforeStep && a.beforeStep(),
                    a.step(), d = !1, c = !0)
            }
            var c = !1;
            if (this.graphLayoutsLookup) {
                a(!1, this);
                for (this.graphLayoutsLookup.forEach(function(a) {
                        a.start()
                    }); !d;) {
                    var d = !0;
                    this.graphLayoutsLookup.forEach(b)
                }
                c && this.series.forEach(function(a) {
                    a && a.layout && a.render()
                })
            }
        });
        d(e, "beforePrint", function() {
            this.graphLayoutsLookup && (this.graphLayoutsLookup.forEach(function(a) {
                a.updateSimulation(!1)
            }), this.redraw())
        });
        d(e, "afterPrint", function() {
            this.graphLayoutsLookup && this.graphLayoutsLookup.forEach(function(a) {
                a.updateSimulation()
            });
            this.redraw()
        })
    });
    z(e, "Series/PackedBubble/PackedBubbleComposition.js", [e["Core/Chart/Chart.js"], e["Core/Globals.js"], e["Core/Utilities.js"]], function(e, d, h) {
        var c = d.layouts["reingold-fruchterman"],
            a = h.addEvent,
            n = h.extendClass,
            k = h.pick;
        e.prototype.getSelectedParentNodes = function() {
            var a = [];
            this.series.forEach(function(c) {
                c.parentNode && c.parentNode.selected && a.push(c.parentNode)
            });
            return a
        };
        d.networkgraphIntegrations.packedbubble = {
            repulsiveForceFunction: function(a, c, d, b) {
                return Math.min(a, (d.marker.radius +
                    b.marker.radius) / 2)
            },
            barycenter: function() {
                var a = this,
                    c = a.options.gravitationalConstant,
                    d = a.box,
                    b = a.nodes,
                    e, h;
                b.forEach(function(f) {
                    a.options.splitSeries && !f.isParentNode ? (e = f.series.parentNode.plotX, h = f.series.parentNode.plotY) : (e = d.width / 2, h = d.height / 2);
                    f.fixedPosition || (f.plotX -= (f.plotX - e) * c / (f.mass * Math.sqrt(b.length)), f.plotY -= (f.plotY - h) * c / (f.mass * Math.sqrt(b.length)))
                })
            },
            repulsive: function(a, c, d, b) {
                var e = c * this.diffTemperature / a.mass / a.degree;
                c = d.x * e;
                d = d.y * e;
                a.fixedPosition || (a.plotX += c, a.plotY +=
                    d);
                b.fixedPosition || (b.plotX -= c, b.plotY -= d)
            },
            integrate: d.networkgraphIntegrations.verlet.integrate,
            getK: d.noop
        };
        d.layouts.packedbubble = n(c, {
            beforeStep: function() {
                this.options.marker && this.series.forEach(function(a) {
                    a && a.calculateParentRadius()
                })
            },
            isStable: function() {
                var a = Math.abs(this.prevSystemTemperature - this.systemTemperature);
                return 1 > Math.abs(10 * this.systemTemperature / Math.sqrt(this.nodes.length)) && .00001 > a || 0 >= this.temperature
            },
            setCircularPositions: function() {
                var a = this,
                    c = a.box,
                    d = a.nodes,
                    b =
                    2 * Math.PI / (d.length + 1),
                    e, h, n = a.options.initialPositionRadius;
                d.forEach(function(d, f) {
                    a.options.splitSeries && !d.isParentNode ? (e = d.series.parentNode.plotX, h = d.series.parentNode.plotY) : (e = c.width / 2, h = c.height / 2);
                    d.plotX = d.prevX = k(d.plotX, e + n * Math.cos(d.index || f * b));
                    d.plotY = d.prevY = k(d.plotY, h + n * Math.sin(d.index || f * b));
                    d.dispX = 0;
                    d.dispY = 0
                })
            },
            repulsiveForces: function() {
                var a = this,
                    c, d, b, e = a.options.bubblePadding;
                a.nodes.forEach(function(f) {
                    f.degree = f.mass;
                    f.neighbours = 0;
                    a.nodes.forEach(function(h) {
                        c = 0;
                        f === h || f.fixedPosition || !a.options.seriesInteraction && f.series !== h.series || (b = a.getDistXY(f, h), d = a.vectorLength(b) - (f.marker.radius + h.marker.radius + e), 0 > d && (f.degree += .01, f.neighbours++, c = a.repulsiveForce(-d / Math.sqrt(f.neighbours), a.k, f, h)), a.force("repulsive", f, c * h.mass, b, h, d))
                    })
                })
            },
            applyLimitBox: function(a) {
                if (this.options.splitSeries && !a.isParentNode && this.options.parentNodeLimit) {
                    var d = this.getDistXY(a, a.series.parentNode);
                    var e = a.series.parentNodeRadius - a.marker.radius - this.vectorLength(d);
                    0 > e && e > -2 * a.marker.radius && (a.plotX -= .01 * d.x, a.plotY -= .01 * d.y)
                }
                c.prototype.applyLimitBox.apply(this, arguments)
            }
        });
        a(e, "beforeRedraw", function() {
            this.allDataPoints && delete this.allDataPoints
        })
    });
    z(e, "Series/PackedBubble/PackedBubbleSeries.js", [e["Core/Color/Color.js"], e["Core/Globals.js"], e["Series/PackedBubble/PackedBubblePoint.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Utilities.js"]], function(e, d, h, c, a) {
        var n = this && this.__extends || function() {
                var a = function(b, c) {
                    a = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof
                    Array && function(a, b) {
                        a.__proto__ = b
                    } || function(a, b) {
                        for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
                    };
                    return a(b, c)
                };
                return function(b, c) {
                    function g() {
                        this.constructor = b
                    }
                    a(b, c);
                    b.prototype = null === c ? Object.create(c) : (g.prototype = c.prototype, new g)
                }
            }(),
            k = e.parse,
            t = c.series,
            q = c.seriesTypes.bubble,
            y = a.addEvent,
            b = a.clamp,
            f = a.defined,
            m = a.extend,
            v = a.fireEvent,
            w = a.isArray,
            z = a.isNumber,
            B = a.merge,
            E = a.pick,
            u = d.dragNodesMixin;
        e = function(a) {
            function c() {
                var b = null !== a && a.apply(this, arguments) || this;
                b.chart = void 0;
                b.data = void 0;
                b.layout = void 0;
                b.options = void 0;
                b.points = void 0;
                b.xData = void 0;
                return b
            }
            n(c, a);
            c.prototype.accumulateAllPoints = function(a) {
                var b = a.chart,
                    c = [],
                    g, d;
                for (g = 0; g < b.series.length; g++)
                    if (a = b.series[g], a.is("packedbubble") && a.visible || !b.options.chart.ignoreHiddenSeries)
                        for (d = 0; d < a.yData.length; d++) c.push([null, null, a.yData[d], a.index, d, {
                            id: d,
                            marker: {
                                radius: 0
                            }
                        }]);
                return c
            };
            c.prototype.addLayout = function() {
                var a = this.options.layoutAlgorithm,
                    b = this.chart.graphLayoutsStorage,
                    c = this.chart.graphLayoutsLookup,
                    e = this.chart.options.chart;
                b || (this.chart.graphLayoutsStorage = b = {}, this.chart.graphLayoutsLookup = c = []);
                var l = b[a.type];
                l || (a.enableSimulation = f(e.forExport) ? !e.forExport : a.enableSimulation, b[a.type] = l = new d.layouts[a.type], l.init(a), c.splice(l.index, 0, l));
                this.layout = l;
                this.points.forEach(function(a) {
                    a.mass = 2;
                    a.degree = 1;
                    a.collisionNmb = 1
                });
                l.setArea(0, 0, this.chart.plotWidth, this.chart.plotHeight);
                l.addElementsToCollection([this], l.series);
                l.addElementsToCollection(this.points, l.nodes)
            };
            c.prototype.addSeriesLayout =
                function() {
                    var a = this.options.layoutAlgorithm,
                        b = this.chart.graphLayoutsStorage,
                        c = this.chart.graphLayoutsLookup,
                        e = B(a, a.parentNodeOptions, {
                            enableSimulation: this.layout.options.enableSimulation
                        });
                    var f = b[a.type + "-series"];
                    f || (b[a.type + "-series"] = f = new d.layouts[a.type], f.init(e), c.splice(f.index, 0, f));
                    this.parentNodeLayout = f;
                    this.createParentNodes()
                };
            c.prototype.calculateParentRadius = function() {
                var a = this.seriesBox();
                this.parentNodeRadius = b(Math.sqrt(2 * this.parentNodeMass / Math.PI) + 20, 20, a ? Math.max(Math.sqrt(Math.pow(a.width,
                    2) + Math.pow(a.height, 2)) / 2 + 20, 20) : Math.sqrt(2 * this.parentNodeMass / Math.PI) + 20);
                this.parentNode && (this.parentNode.marker.radius = this.parentNode.radius = this.parentNodeRadius)
            };
            c.prototype.calculateZExtremes = function() {
                var a = this.options.zMin,
                    b = this.options.zMax,
                    c = Infinity,
                    d = -Infinity;
                if (a && b) return [a, b];
                this.chart.series.forEach(function(a) {
                    a.yData.forEach(function(a) {
                        f(a) && (a > d && (d = a), a < c && (c = a))
                    })
                });
                a = E(a, c);
                b = E(b, d);
                return [a, b]
            };
            c.prototype.checkOverlap = function(a, b) {
                var c = a[0] - b[0],
                    d = a[1] - b[1];
                return -.001 > Math.sqrt(c * c + d * d) - Math.abs(a[2] + b[2])
            };
            c.prototype.createParentNodes = function() {
                var a = this,
                    b = a.chart,
                    c = a.parentNodeLayout,
                    d, e = a.parentNode,
                    f = a.pointClass;
                a.parentNodeMass = 0;
                a.points.forEach(function(b) {
                    a.parentNodeMass += Math.PI * Math.pow(b.marker.radius, 2)
                });
                a.calculateParentRadius();
                c.nodes.forEach(function(b) {
                    b.seriesIndex === a.index && (d = !0)
                });
                c.setArea(0, 0, b.plotWidth, b.plotHeight);
                d || (e || (e = (new f).init(this, {
                    mass: a.parentNodeRadius / 2,
                    marker: {
                        radius: a.parentNodeRadius
                    },
                    dataLabels: {
                        inside: !1
                    },
                    dataLabelOnNull: !0,
                    degree: a.parentNodeRadius,
                    isParentNode: !0,
                    seriesIndex: a.index
                })), a.parentNode && (e.plotX = a.parentNode.plotX, e.plotY = a.parentNode.plotY), a.parentNode = e, c.addElementsToCollection([a], c.series), c.addElementsToCollection([e], c.nodes))
            };
            c.prototype.deferLayout = function() {
                var a = this.options.layoutAlgorithm;
                this.visible && (this.addLayout(), a.splitSeries && this.addSeriesLayout())
            };
            c.prototype.destroy = function() {
                this.chart.graphLayoutsLookup && this.chart.graphLayoutsLookup.forEach(function(a) {
                    a.removeElementFromCollection(this,
                        a.series)
                }, this);
                this.parentNode && this.parentNodeLayout && (this.parentNodeLayout.removeElementFromCollection(this.parentNode, this.parentNodeLayout.nodes), this.parentNode.dataLabel && (this.parentNode.dataLabel = this.parentNode.dataLabel.destroy()));
                t.prototype.destroy.apply(this, arguments)
            };
            c.prototype.drawDataLabels = function() {
                var a = this.options.dataLabels.textPath,
                    b = this.points;
                t.prototype.drawDataLabels.apply(this, arguments);
                this.parentNode && (this.parentNode.formatPrefix = "parentNode", this.points = [this.parentNode],
                    this.options.dataLabels.textPath = this.options.dataLabels.parentNodeTextPath, t.prototype.drawDataLabels.apply(this, arguments), this.points = b, this.options.dataLabels.textPath = a)
            };
            c.prototype.drawGraph = function() {
                if (this.layout && this.layout.options.splitSeries) {
                    var a = this.chart;
                    var b = this.layout.options.parentNodeOptions.marker;
                    var c = {
                        fill: b.fillColor || k(this.color).brighten(.4).get(),
                        opacity: b.fillOpacity,
                        stroke: b.lineColor || this.color,
                        "stroke-width": b.lineWidth
                    };
                    this.parentNodesGroup || (this.parentNodesGroup =
                        this.plotGroup("parentNodesGroup", "parentNode", this.visible ? "inherit" : "hidden", .1, a.seriesGroup), this.group.attr({
                            zIndex: 2
                        }));
                    this.calculateParentRadius();
                    b = B({
                        x: this.parentNode.plotX - this.parentNodeRadius,
                        y: this.parentNode.plotY - this.parentNodeRadius,
                        width: 2 * this.parentNodeRadius,
                        height: 2 * this.parentNodeRadius
                    }, c);
                    this.parentNode.graphic || (this.graph = this.parentNode.graphic = a.renderer.symbol(c.symbol).add(this.parentNodesGroup));
                    this.parentNode.graphic.attr(b)
                }
            };
            c.prototype.drawTracker = function() {
                var b =
                    this.parentNode;
                a.prototype.drawTracker.call(this);
                if (b) {
                    var c = w(b.dataLabels) ? b.dataLabels : b.dataLabel ? [b.dataLabel] : [];
                    b.graphic && (b.graphic.element.point = b);
                    c.forEach(function(a) {
                        a.div ? a.div.point = b : a.element.point = b
                    })
                }
            };
            c.prototype.getPointRadius = function() {
                var a = this,
                    c = a.chart,
                    d = a.options,
                    e = d.useSimulation,
                    f = Math.min(c.plotWidth, c.plotHeight),
                    l = {},
                    h = [],
                    k = c.allDataPoints,
                    m, n, q, r;
                ["minSize", "maxSize"].forEach(function(a) {
                    var b = parseInt(d[a], 10),
                        c = /%$/.test(d[a]);
                    l[a] = c ? f * b / 100 : b * Math.sqrt(k.length)
                });
                c.minRadius = m = l.minSize / Math.sqrt(k.length);
                c.maxRadius = n = l.maxSize / Math.sqrt(k.length);
                var t = e ? a.calculateZExtremes() : [m, n];
                (k || []).forEach(function(c, d) {
                    q = e ? b(c[2], t[0], t[1]) : c[2];
                    r = a.getRadius(t[0], t[1], m, n, q);
                    0 === r && (r = null);
                    k[d][2] = r;
                    h.push(r)
                });
                a.radii = h
            };
            c.prototype.init = function() {
                t.prototype.init.apply(this, arguments);
                this.eventsToUnbind.push(y(this, "updatedData", function() {
                    this.chart.series.forEach(function(a) {
                        a.type === this.type && (a.isDirty = !0)
                    }, this)
                }));
                return this
            };
            c.prototype.onMouseUp =
                function(a) {
                    if (a.fixedPosition && !a.removed) {
                        var b, c, d = this.layout,
                            g = this.parentNodeLayout;
                        g && d.options.dragBetweenSeries && g.nodes.forEach(function(g) {
                            a && a.marker && g !== a.series.parentNode && (b = d.getDistXY(a, g), c = d.vectorLength(b) - g.marker.radius - a.marker.radius, 0 > c && (g.series.addPoint(B(a.options, {
                                plotX: a.plotX,
                                plotY: a.plotY
                            }), !1), d.removeElementFromCollection(a, d.nodes), a.remove()))
                        });
                        u.onMouseUp.apply(this, arguments)
                    }
                };
            c.prototype.placeBubbles = function(a) {
                var b = this.checkOverlap,
                    c = this.positionBubble,
                    d = [],
                    g = 1,
                    e = 0,
                    f = 0;
                var l = [];
                var h;
                a = a.sort(function(a, b) {
                    return b[2] - a[2]
                });
                if (a.length) {
                    d.push([
                        [0, 0, a[0][2], a[0][3], a[0][4]]
                    ]);
                    if (1 < a.length)
                        for (d.push([
                                [0, 0 - a[1][2] - a[0][2], a[1][2], a[1][3], a[1][4]]
                            ]), h = 2; h < a.length; h++) a[h][2] = a[h][2] || 1, l = c(d[g][e], d[g - 1][f], a[h]), b(l, d[g][0]) ? (d.push([]), f = 0, d[g + 1].push(c(d[g][e], d[g][0], a[h])), g++, e = 0) : 1 < g && d[g - 1][f + 1] && b(l, d[g - 1][f + 1]) ? (f++, d[g].push(c(d[g][e], d[g - 1][f], a[h])), e++) : (e++, d[g].push(l));
                    this.chart.stages = d;
                    this.chart.rawPositions = [].concat.apply([],
                        d);
                    this.resizeRadius();
                    l = this.chart.rawPositions
                }
                return l
            };
            c.prototype.positionBubble = function(a, b, c) {
                var d = Math.sqrt,
                    g = Math.asin,
                    e = Math.acos,
                    f = Math.pow,
                    l = Math.abs;
                d = d(f(a[0] - b[0], 2) + f(a[1] - b[1], 2));
                e = e((f(d, 2) + f(c[2] + b[2], 2) - f(c[2] + a[2], 2)) / (2 * (c[2] + b[2]) * d));
                g = g(l(a[0] - b[0]) / d);
                a = (0 > a[1] - b[1] ? 0 : Math.PI) + e + g * (0 > (a[0] - b[0]) * (a[1] - b[1]) ? 1 : -1);
                return [b[0] + (b[2] + c[2]) * Math.sin(a), b[1] - (b[2] + c[2]) * Math.cos(a), c[2], c[3], c[4]]
            };
            c.prototype.render = function() {
                var a = [];
                t.prototype.render.apply(this, arguments);
                this.options.dataLabels.allowOverlap || (this.data.forEach(function(b) {
                    w(b.dataLabels) && b.dataLabels.forEach(function(b) {
                        a.push(b)
                    })
                }), this.options.useSimulation && this.chart.hideOverlappingLabels(a))
            };
            c.prototype.resizeRadius = function() {
                var a = this.chart,
                    b = a.rawPositions,
                    c = Math.min,
                    d = Math.max,
                    e = a.plotLeft,
                    f = a.plotTop,
                    l = a.plotHeight,
                    h = a.plotWidth,
                    k, m, n;
                var q = k = Number.POSITIVE_INFINITY;
                var r = m = Number.NEGATIVE_INFINITY;
                for (n = 0; n < b.length; n++) {
                    var t = b[n][2];
                    q = c(q, b[n][0] - t);
                    r = d(r, b[n][0] + t);
                    k = c(k, b[n][1] -
                        t);
                    m = d(m, b[n][1] + t)
                }
                n = [r - q, m - k];
                c = c.apply([], [(h - e) / n[0], (l - f) / n[1]]);
                if (1e-10 < Math.abs(c - 1)) {
                    for (n = 0; n < b.length; n++) b[n][2] *= c;
                    this.placeBubbles(b)
                } else a.diffY = l / 2 + f - k - (m - k) / 2, a.diffX = h / 2 + e - q - (r - q) / 2
            };
            c.prototype.seriesBox = function() {
                var a = this.chart,
                    b = Math.max,
                    c = Math.min,
                    d, e = [a.plotLeft, a.plotLeft + a.plotWidth, a.plotTop, a.plotTop + a.plotHeight];
                this.data.forEach(function(a) {
                    f(a.plotX) && f(a.plotY) && a.marker.radius && (d = a.marker.radius, e[0] = c(e[0], a.plotX - d), e[1] = b(e[1], a.plotX + d), e[2] = c(e[2], a.plotY -
                        d), e[3] = b(e[3], a.plotY + d))
                });
                return z(e.width / e.height) ? e : null
            };
            c.prototype.setVisible = function() {
                var a = this;
                t.prototype.setVisible.apply(a, arguments);
                a.parentNodeLayout && a.graph ? a.visible ? (a.graph.show(), a.parentNode.dataLabel && a.parentNode.dataLabel.show()) : (a.graph.hide(), a.parentNodeLayout.removeElementFromCollection(a.parentNode, a.parentNodeLayout.nodes), a.parentNode.dataLabel && a.parentNode.dataLabel.hide()) : a.layout && (a.visible ? a.layout.addElementsToCollection(a.points, a.layout.nodes) : a.points.forEach(function(b) {
                    a.layout.removeElementFromCollection(b,
                        a.layout.nodes)
                }))
            };
            c.prototype.translate = function() {
                var a = this.chart,
                    b = this.data,
                    c = this.index,
                    d, e = this.options.useSimulation;
                this.processedXData = this.xData;
                this.generatePoints();
                f(a.allDataPoints) || (a.allDataPoints = this.accumulateAllPoints(this), this.getPointRadius());
                if (e) var l = a.allDataPoints;
                else l = this.placeBubbles(a.allDataPoints), this.options.draggable = !1;
                for (d = 0; d < l.length; d++)
                    if (l[d][3] === c) {
                        var h = b[l[d][4]];
                        var k = E(l[d][2], void 0);
                        e || (h.plotX = l[d][0] - a.plotLeft + a.diffX, h.plotY = l[d][1] - a.plotTop +
                            a.diffY);
                        z(k) && (h.marker = m(h.marker, {
                            radius: k,
                            width: 2 * k,
                            height: 2 * k
                        }), h.radius = k)
                    }
                e && this.deferLayout();
                v(this, "afterTranslate")
            };
            c.defaultOptions = B(q.defaultOptions, {
                minSize: "10%",
                maxSize: "50%",
                sizeBy: "area",
                zoneAxis: "y",
                crisp: !1,
                tooltip: {
                    pointFormat: "Value: {point.value}"
                },
                draggable: !0,
                useSimulation: !0,
                parentNode: {
                    allowPointSelect: !1
                },
                dataLabels: {
                    formatter: function() {
                        return this.point.value
                    },
                    parentNodeFormatter: function() {
                        return this.name
                    },
                    parentNodeTextPath: {
                        enabled: !0
                    },
                    padding: 0,
                    style: {
                        transition: "opacity 2000ms"
                    }
                },
                layoutAlgorithm: {
                    initialPositions: "circle",
                    initialPositionRadius: 20,
                    bubblePadding: 5,
                    parentNodeLimit: !1,
                    seriesInteraction: !0,
                    dragBetweenSeries: !1,
                    parentNodeOptions: {
                        maxIterations: 400,
                        gravitationalConstant: .03,
                        maxSpeed: 50,
                        initialPositionRadius: 100,
                        seriesInteraction: !0,
                        marker: {
                            fillColor: null,
                            fillOpacity: 1,
                            lineWidth: 1,
                            lineColor: null,
                            symbol: "circle"
                        }
                    },
                    enableSimulation: !0,
                    type: "packedbubble",
                    integration: "packedbubble",
                    maxIterations: 1E3,
                    splitSeries: !1,
                    maxSpeed: 5,
                    gravitationalConstant: .01,
                    friction: -.981
                }
            });
            return c
        }(q);
        m(e.prototype, {
            alignDataLabel: t.prototype.alignDataLabel,
            axisTypes: [],
            directTouch: !0,
            forces: ["barycenter", "repulsive"],
            hasDraggableNodes: !0,
            isCartesian: !1,
            noSharedTooltip: !0,
            onMouseDown: u.onMouseDown,
            onMouseMove: u.onMouseMove,
            pointArrayMap: ["value"],
            pointClass: h,
            pointValKey: "value",
            redrawHalo: u.redrawHalo,
            requireSorting: !1,
            searchPoint: d.noop,
            trackerGroups: ["group", "dataLabelsGroup", "parentNodesGroup"]
        });
        c.registerSeriesType("packedbubble", e);
        "";
        "";
        return e
    });
    z(e, "Extensions/Polar.js", [e["Core/Animation/AnimationUtilities.js"], e["Core/Chart/Chart.js"], e["Core/Globals.js"], e["Extensions/Pane.js"], e["Core/Pointer.js"], e["Core/Series/Series.js"], e["Core/Series/SeriesRegistry.js"], e["Core/Renderer/SVG/SVGRenderer.js"], e["Core/Utilities.js"]], function(e, d, h, c, a, n, k, t, q) {
        var y = e.animObject;
        k = k.seriesTypes;
        var b = q.addEvent,
            f = q.defined,
            m = q.find,
            v = q.isNumber,
            w = q.pick,
            z = q.splat,
            B = q.uniqueKey;
        e = q.wrap;
        var E = n.prototype;
        a = a.prototype;
        E.searchPointByAngle = function(a) {
            var b = this.chart,
                c = this.xAxis.pane.center;
            return this.searchKDTree({
                clientX: 180 + -180 / Math.PI * Math.atan2(a.chartX - c[0] - b.plotLeft, a.chartY - c[1] - b.plotTop)
            })
        };
        E.getConnectors = function(a, b, c, d) {
            var e = d ? 1 : 0;
            var g = 0 <= b && b <= a.length - 1 ? b : 0 > b ? a.length - 1 + b : 0;
            b = 0 > g - 1 ? a.length - (1 + e) : g - 1;
            e = g + 1 > a.length - 1 ? e : g + 1;
            var f = a[b];
            e = a[e];
            var l = f.plotX;
            f = f.plotY;
            var h = e.plotX;
            var k = e.plotY;
            e = a[g].plotX;
            g = a[g].plotY;
            l = (1.5 * e + l) / 2.5;
            f = (1.5 * g + f) / 2.5;
            h = (1.5 * e + h) / 2.5;
            var p = (1.5 * g + k) / 2.5;
            k = Math.sqrt(Math.pow(l - e, 2) + Math.pow(f - g, 2));
            var m = Math.sqrt(Math.pow(h - e, 2) + Math.pow(p -
                g, 2));
            l = Math.atan2(f - g, l - e);
            p = Math.PI / 2 + (l + Math.atan2(p - g, h - e)) / 2;
            Math.abs(l - p) > Math.PI / 2 && (p -= Math.PI);
            l = e + Math.cos(p) * k;
            f = g + Math.sin(p) * k;
            h = e + Math.cos(Math.PI + p) * m;
            p = g + Math.sin(Math.PI + p) * m;
            e = {
                rightContX: h,
                rightContY: p,
                leftContX: l,
                leftContY: f,
                plotX: e,
                plotY: g
            };
            c && (e.prevPointCont = this.getConnectors(a, b, !1, d));
            return e
        };
        E.toXY = function(a) {
            var b = this.chart,
                c = this.xAxis,
                d = this.yAxis,
                e = a.plotX,
                f = a.plotY,
                l = a.series,
                h = b.inverted,
                k = a.y,
                m = h ? e : d.len - f;
            h && l && !l.isRadialBar && (a.plotY = f = "number" === typeof k ?
                d.translate(k) || 0 : 0);
            a.rectPlotX = e;
            a.rectPlotY = f;
            d.center && (m += d.center[3] / 2);
            v(f) && (d = h ? d.postTranslate(f, m) : c.postTranslate(e, m), a.plotX = a.polarPlotX = d.x - b.plotLeft, a.plotY = a.polarPlotY = d.y - b.plotTop);
            this.kdByAngle ? (b = (e / Math.PI * 180 + c.pane.options.startAngle) % 360, 0 > b && (b += 360), a.clientX = b) : a.clientX = a.plotX
        };
        k.spline && (e(k.spline.prototype, "getPointSpline", function(a, b, c, d) {
            this.chart.polar ? d ? (a = this.getConnectors(b, d, !0, this.connectEnds), b = a.prevPointCont && a.prevPointCont.rightContX, c = a.prevPointCont &&
                a.prevPointCont.rightContY, a = ["C", v(b) ? b : a.plotX, v(c) ? c : a.plotY, v(a.leftContX) ? a.leftContX : a.plotX, v(a.leftContY) ? a.leftContY : a.plotY, a.plotX, a.plotY]) : a = ["M", c.plotX, c.plotY] : a = a.call(this, b, c, d);
            return a
        }), k.areasplinerange && (k.areasplinerange.prototype.getPointSpline = k.spline.prototype.getPointSpline));
        b(n, "afterTranslate", function() {
            var a = this.chart;
            if (a.polar && this.xAxis) {
                (this.kdByAngle = a.tooltip && a.tooltip.shared) ? this.searchPoint = this.searchPointByAngle: this.options.findNearestPointBy = "xy";
                if (!this.preventPostTranslate)
                    for (var c = this.points, d = c.length; d--;) this.toXY(c[d]), !a.hasParallelCoordinates && !this.yAxis.reversed && c[d].y < this.yAxis.min && (c[d].isNull = !0);
                this.hasClipCircleSetter || (this.hasClipCircleSetter = !!this.eventsToUnbind.push(b(this, "afterRender", function() {
                    if (a.polar) {
                        var b = this.yAxis.pane.center;
                        this.clipCircle ? this.clipCircle.animate({
                            x: b[0],
                            y: b[1],
                            r: b[2] / 2,
                            innerR: b[3] / 2
                        }) : this.clipCircle = a.renderer.clipCircle(b[0], b[1], b[2] / 2, b[3] / 2);
                        this.group.clip(this.clipCircle);
                        this.setClip = h.noop
                    }
                })))
            }
        }, {
            order: 2
        });
        e(k.line.prototype, "getGraphPath", function(a, b) {
            var c = this,
                d;
            if (this.chart.polar) {
                b = b || this.points;
                for (d = 0; d < b.length; d++)
                    if (!b[d].isNull) {
                        var e = d;
                        break
                    }
                if (!1 !== this.options.connectEnds && "undefined" !== typeof e) {
                    this.connectEnds = !0;
                    b.splice(b.length, 0, b[e]);
                    var g = !0
                }
                b.forEach(function(a) {
                    "undefined" === typeof a.polarPlotY && c.toXY(a)
                })
            }
            d = a.apply(this, [].slice.call(arguments, 1));
            g && b.pop();
            return d
        });
        var u = function(a, b) {
            var c = this,
                d = this.chart,
                e = this.options.animation,
                g = this.group,
                f = this.markerGroup,
                l = this.xAxis.center,
                k = d.plotLeft,
                m = d.plotTop,
                n, q, r, t;
            if (d.polar)
                if (c.isRadialBar) b || (c.startAngleRad = w(c.translatedThreshold, c.xAxis.startAngleRad), h.seriesTypes.pie.prototype.animate.call(c, b));
                else {
                    if (d.renderer.isSVG)
                        if (e = y(e), c.is("column")) {
                            if (!b) {
                                var u = l[3] / 2;
                                c.points.forEach(function(a) {
                                    n = a.graphic;
                                    r = (q = a.shapeArgs) && q.r;
                                    t = q && q.innerR;
                                    n && q && (n.attr({
                                        r: u,
                                        innerR: u
                                    }), n.animate({
                                        r: r,
                                        innerR: t
                                    }, c.options.animation))
                                })
                            }
                        } else b ? (a = {
                            translateX: l[0] + k,
                            translateY: l[1] +
                                m,
                            scaleX: .001,
                            scaleY: .001
                        }, g.attr(a), f && f.attr(a)) : (a = {
                            translateX: k,
                            translateY: m,
                            scaleX: 1,
                            scaleY: 1
                        }, g.animate(a, e), f && f.animate(a, e))
                }
            else a.call(this, b)
        };
        e(E, "animate", u);
        if (k.column) {
            var r = k.arearange.prototype;
            k = k.column.prototype;
            k.polarArc = function(a, b, c, d) {
                var e = this.xAxis.center,
                    g = this.yAxis.len,
                    f = e[3] / 2;
                b = g - b + f;
                a = g - w(a, g) + f;
                this.yAxis.reversed && (0 > b && (b = f), 0 > a && (a = f));
                return {
                    x: e[0],
                    y: e[1],
                    r: b,
                    innerR: a,
                    start: c,
                    end: d
                }
            };
            e(k, "animate", u);
            e(k, "translate", function(a) {
                var b = this.options,
                    c = b.stacking,
                    d = this.chart,
                    e = this.xAxis,
                    h = this.yAxis,
                    l = h.reversed,
                    k = h.center,
                    m = e.startAngleRad,
                    n = e.endAngleRad - m;
                this.preventPostTranslate = !0;
                a.call(this);
                if (e.isRadial) {
                    a = this.points;
                    e = a.length;
                    var r = h.translate(h.min);
                    var t = h.translate(h.max);
                    b = b.threshold || 0;
                    if (d.inverted && v(b)) {
                        var u = h.translate(b);
                        f(u) && (0 > u ? u = 0 : u > n && (u = n), this.translatedThreshold = u + m)
                    }
                    for (; e--;) {
                        b = a[e];
                        var w = b.barX;
                        var y = b.x;
                        var z = b.y;
                        b.shapeType = "arc";
                        if (d.inverted) {
                            b.plotY = h.translate(z);
                            if (c && h.stacking) {
                                if (z = h.stacking.stacks[(0 > z ? "-" :
                                        "") + this.stackKey], this.visible && z && z[y] && !b.isNull) {
                                    var B = z[y].points[this.getStackIndicator(void 0, y, this.index).key];
                                    var D = h.translate(B[0]);
                                    B = h.translate(B[1]);
                                    f(D) && (D = q.clamp(D, 0, n))
                                }
                            } else D = u, B = b.plotY;
                            D > B && (B = [D, D = B][0]);
                            if (!l)
                                if (D < r) D = r;
                                else if (B > t) B = t;
                            else {
                                if (B < r || D > t) D = B = 0
                            } else if (B > r) B = r;
                            else if (D < t) D = t;
                            else if (D > r || B < t) D = B = n;
                            h.min > h.max && (D = B = l ? n : 0);
                            D += m;
                            B += m;
                            k && (b.barX = w += k[3] / 2);
                            y = Math.max(w, 0);
                            z = Math.max(w + b.pointWidth, 0);
                            b.shapeArgs = {
                                x: k && k[0],
                                y: k && k[1],
                                r: z,
                                innerR: y,
                                start: D,
                                end: B
                            };
                            b.opacity = D === B ? 0 : void 0;
                            b.plotY = (f(this.translatedThreshold) && (D < this.translatedThreshold ? D : B)) - m
                        } else D = w + m, b.shapeArgs = this.polarArc(b.yBottom, b.plotY, D, D + b.pointWidth);
                        this.toXY(b);
                        d.inverted ? (w = h.postTranslate(b.rectPlotY, w + b.pointWidth / 2), b.tooltipPos = [w.x - d.plotLeft, w.y - d.plotTop]) : b.tooltipPos = [b.plotX, b.plotY];
                        k && (b.ttBelow = b.plotY > k[1])
                    }
                }
            });
            k.findAlignments = function(a, b) {
                null === b.align && (b.align = 20 < a && 160 > a ? "left" : 200 < a && 340 > a ? "right" : "center");
                null === b.verticalAlign && (b.verticalAlign = 45 >
                    a || 315 < a ? "bottom" : 135 < a && 225 > a ? "top" : "middle");
                return b
            };
            r && (r.findAlignments = k.findAlignments);
            e(k, "alignDataLabel", function(a, b, c, d, e, f) {
                var g = this.chart,
                    h = w(d.inside, !!this.options.stacking);
                g.polar ? (a = b.rectPlotX / Math.PI * 180, g.inverted ? (this.forceDL = g.isInsidePlot(b.plotX, Math.round(b.plotY)), h && b.shapeArgs ? (e = b.shapeArgs, e = this.yAxis.postTranslate(((e.start || 0) + (e.end || 0)) / 2 - this.xAxis.startAngleRad, b.barX + b.pointWidth / 2), e = {
                    x: e.x - g.plotLeft,
                    y: e.y - g.plotTop
                }) : b.tooltipPos && (e = {
                    x: b.tooltipPos[0],
                    y: b.tooltipPos[1]
                }), d.align = w(d.align, "center"), d.verticalAlign = w(d.verticalAlign, "middle")) : this.findAlignments && (d = this.findAlignments(a, d)), E.alignDataLabel.call(this, b, c, d, e, f), this.isRadialBar && b.shapeArgs && b.shapeArgs.start === b.shapeArgs.end && c.hide(!0)) : a.call(this, b, c, d, e, f)
            })
        }
        e(a, "getCoordinates", function(a, b) {
            var c = this.chart,
                d = {
                    xAxis: [],
                    yAxis: []
                };
            c.polar ? c.axes.forEach(function(a) {
                var e = a.isXAxis,
                    f = a.center;
                if ("colorAxis" !== a.coll) {
                    var g = b.chartX - f[0] - c.plotLeft;
                    f = b.chartY - f[1] - c.plotTop;
                    d[e ? "xAxis" : "yAxis"].push({
                        axis: a,
                        value: a.translate(e ? Math.PI - Math.atan2(g, f) : Math.sqrt(Math.pow(g, 2) + Math.pow(f, 2)), !0)
                    })
                }
            }) : d = a.call(this, b);
            return d
        });
        t.prototype.clipCircle = function(a, b, c, d) {
            var e = B(),
                f = this.createElement("clipPath").attr({
                    id: e
                }).add(this.defs);
            a = d ? this.arc(a, b, c, d, 0, 2 * Math.PI).add(f) : this.circle(a, b, c).add(f);
            a.id = e;
            a.clipPath = f;
            return a
        };
        b(d, "getAxes", function() {
            this.pane || (this.pane = []);
            z(this.options.pane).forEach(function(a) {
                new c(a, this)
            }, this)
        });
        b(d, "afterDrawChartBox",
            function() {
                this.pane.forEach(function(a) {
                    a.render()
                })
            });
        b(n, "afterInit", function() {
            var a = this.chart;
            a.inverted && a.polar && (this.isRadialSeries = !0, this.is("column") && (this.isRadialBar = !0))
        });
        e(d.prototype, "get", function(a, b) {
            return m(this.pane || [], function(a) {
                return a.options.id === b
            }) || a.call(this, b)
        })
    });
    z(e, "masters/highcharts-more.src.js", [], function() {})
});
//# sourceMappingURL=highcharts-more.js.map