(window.webpackJsonp = window.webpackJsonp || []).push([
    [167], {
        BqYg: function(e, t) {
            function n(e, t, n) {
                var i, o, a, r, s;

                function c() {
                    var l = Date.now() - r;
                    l < t && l >= 0 ? i = setTimeout(c, t - l) : (i = null, n || (s = e.apply(a, o), a = o = null))
                }
                null == t && (t = 100);
                var l = function() {
                    a = this, o = arguments, r = Date.now();
                    var l = n && !i;
                    return i || (i = setTimeout(c, t)), l && (s = e.apply(a, o), a = o = null), s
                };
                return l.clear = function() {
                    i && (clearTimeout(i), i = null)
                }, l.flush = function() {
                    i && (s = e.apply(a, o), a = o = null, clearTimeout(i), i = null)
                }, l
            }
            n.debounce = n, e.exports = n
        },
        VY6S: function(e, t, n) {
            "use strict";
            var i = n("BqYg"),
                o = n.n(i);
            t.a = (e, t, n) => o()(e, t, n)
        },
        fyKl: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "default", (function() {
                return O
            }));
            var i = n("97Jx"),
                o = n.n(i),
                a = n("KEM+"),
                r = n.n(a),
                s = n("ERkP"),
                c = n("zfvc"),
                l = n("jHwr"),
                d = n("VY6S"),
                h = n("w9LO"),
                p = n("//dC"),
                u = n("lHOd"),
                m = n("Oe3h"),
                f = n("0FVZ"),
                w = n("7N4s"),
                _ = n("cHvH"),
                b = n("rHpw"),
                v = n("i4Oy"),
                g = n("shC7"),
                y = n("MWbm");
            const R = b.a.create((e => ({
                rootNarrow: {
                    maxWidth: "75%"
                },
                rootWide: {
                    maxWidth: `calc(${e.spaces.space64} * 6)`
                },
                anchor: b.a.absoluteFillObject,
                mask: { ...b.a.absoluteFillObject,
                    position: "fixed"
                },
                bodyRectHelper: { ...b.a.absoluteFillObject,
                    bottom: void 0
                },
                content: {
                    borderRadius: e.borderRadii.small,
                    position: "absolute",
                    overflow: "hidden",
                    backgroundColor: e.colors.navigationBackground,
                    boxShadow: e.boxShadows.medium
                },
                contentInitialRender: {
                    position: "fixed",
                    opacity: 0
                },
                contentFixed: {
                    position: "fixed",
                    overflowY: "auto",
                    overscrollBehavior: "contain"
                }
            })));
            class O extends s.Component {
                constructor(e, t) {
                    super(e, t), r()(this, "_handleAnimateComplete", (() => {
                        const {
                            onAnimateComplete: e
                        } = this.props;
                        e && e()
                    })), r()(this, "_handleEsc", (e => {
                        const {
                            onDismiss: t
                        } = this.props, {
                            altKey: n,
                            ctrlKey: i,
                            metaKey: o,
                            key: a
                        } = e;
                        !(n || i || o) && "Escape" === a && t()
                    })), r()(this, "_receiveBodyRectHelperRef", (e => {
                        e && this._bodyRectHelperNode !== e && (this._bodyRectHelperNode = e, this._scheduleUpdate())
                    })), r()(this, "_receiveAnchorRef", (e => {
                        e && this._anchorNode !== e && (this._anchorNode = e, this._scheduleUpdate())
                    })), r()(this, "_receiveContentRef", (e => {
                        e && this._contentNode !== e && (this._contentNode = e, this._scheduleUpdate())
                    })), r()(this, "_updatePosition", (() => {
                        if (!(this._mounted && (this._anchorNode || this.props.position) && this._contentNode && this._contentNode instanceof window.HTMLElement && this._bodyRectHelperNode && this._bodyRectHelperNode instanceof window.HTMLElement)) return;
                        const e = this._contentNode.scrollHeight,
                            t = this._contentNode.scrollWidth,
                            {
                                left: n,
                                top: i,
                                width: o
                            } = this._bodyRectHelperNode.getBoundingClientRect(),
                            {
                                width: a,
                                height: r
                            } = v.a.get("window");
                        let s = {
                            left: 0,
                            top: 0,
                            height: 0,
                            width: 0
                        };
                        this.props.position ? s = { ...s,
                            ...this.props.position
                        } : this._anchorNode && this._anchorNode instanceof window.HTMLElement && (s = this._anchorNode.getBoundingClientRect());
                        const {
                            left: c,
                            top: l,
                            height: d,
                            width: h
                        } = s, p = a - o, u = c - n, m = l - i, f = c + h >= t, w = l + d >= e, _ = a - c >= t, b = r - l >= e, y = this.props.preferredVerticalOrientation, R = (e => g.a.getConstants().isRTL ? "left" === e ? "right" : "left" : e)(this.props.preferredHorizontalOrientation), O = this.state.verticalOrientation || (({
                            verticalPreference: e,
                            canOrientUp: t,
                            canOrientDown: n
                        }) => t && n || !t && !n ? e : t ? "up" : "down")({
                            verticalPreference: y,
                            canOrientUp: w,
                            canOrientDown: b
                        }), E = this.state.horizontalOrientation || (({
                            horizontalPreference: e,
                            canOrientLeft: t,
                            canOrientRight: n
                        }) => !t || "left" !== e && n ? "right" : "left")({
                            horizontalPreference: R,
                            canOrientLeft: f,
                            canOrientRight: _
                        }), N = this.props.isFixed ? c : u, H = this.props.isFixed ? l : m, x = "up" === O ? H + d - e : H, C = "left" === E ? a - N - h - p : a - N - t - p;
                        this.setState({
                            top: Math.max(x, 0),
                            right: C,
                            verticalOrientation: O,
                            horizontalOrientation: E
                        })
                    })), this.state = Object.freeze({}), this._scheduleUpdate = Object(l.a)(this._updatePosition, window.requestAnimationFrame), this._scheduleDebouncedUpdate = Object(d.a)(this._scheduleUpdate, 250)
                }
                componentDidMount() {
                    this._mounted = !0, v.a.addEventListener("change", this._scheduleDebouncedUpdate)
                }
                componentWillUnmount() {
                    this._mounted = !1, v.a.removeEventListener("change", this._scheduleDebouncedUpdate)
                }
                render() {
                    const {
                        children: e,
                        isFixed: t,
                        onDismiss: n,
                        animateInDuration: i,
                        animateType: a,
                        withKeyboardNavigation: r
                    } = this.props, {
                        top: l,
                        right: d,
                        verticalOrientation: v
                    } = this.state, O = void 0 === l, E = `calc(100vh - ${l||0}px)`, N = [R.content, O && R.contentInitialRender, t && [R.contentFixed, {
                        maxHeight: E
                    }], {
                        top: l,
                        right: g.a.getConstants().isRTL ? void 0 : d,
                        left: g.a.getConstants().isRTL ? d : void 0
                    }];
                    return s.createElement(y.a, {
                        ref: this._receiveAnchorRef,
                        style: R.anchor
                    }, s.createElement(f.a.Dropdown, null, s.createElement(u.a.Consumer, null, (t => s.createElement(w.a.Consumer, null, (({
                        isModal: l
                    }) => s.createElement(p.a, {
                        history: t,
                        isModal: l,
                        onDismiss: n
                    }, s.createElement(h.a, {
                        withKeyboardNavigation: r
                    }, s.createElement(y.a, {
                        onClick: n,
                        style: R.mask
                    }), s.createElement(y.a, {
                        ref: this._receiveBodyRectHelperRef,
                        style: R.bodyRectHelper
                    }), s.createElement(_.a, null, (({
                        windowWidth: t
                    }) => s.createElement(y.a, {
                        accessibilityRole: "menu",
                        onKeyUp: this._handleEsc,
                        ref: this._receiveContentRef,
                        style: [t < b.a.theme.breakpoints.medium ? R.rootNarrow : R.rootWide, N]
                    }, O && "slide" === a ? e : s.createElement(c.b, {
                        animateMount: "up" !== v,
                        duration: i,
                        onAnimateComplete: this._handleAnimateComplete,
                        show: !0,
                        type: a
                    }, (({
                        isAnimating: t
                    }) => s.createElement(m.a, {
                        id: "Dropdown",
                        minimizeReporting: t
                    }, ((t, n) => s.createElement(y.a, o()({
                        ref: t()
                    }, n({})), e))))))))))))))))
                }
            }
            r()(O, "defaultProps", {
                preferredHorizontalOrientation: "left",
                preferredVerticalOrientation: "down",
                animateType: "slide",
                animateInDuration: "normal",
                withKeyboardNavigation: !0
            })
        },
        jHwr: function(e, t, n) {
            "use strict";
            t.a = (e, t) => {
                let n = null;
                const i = () => {
                    n = null, e()
                };
                return () => (n || (n = t(i)), n)
            }
        }
    }
]);
//# sourceMappingURL=https://ton.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.Dropdown.ecea2f95.js.map