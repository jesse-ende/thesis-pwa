(window.webpackJsonp = window.webpackJsonp || []).push([
    [169], {
        fyKl: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, "default", (function() {
                return O
            }));
            var n = i("97Jx"),
                o = i.n(n),
                a = i("KEM+"),
                r = i.n(a),
                s = i("ERkP"),
                c = i("zfvc"),
                d = i("jHwr"),
                l = i("VY6S"),
                h = i("w9LO"),
                p = i("//dC"),
                m = i("lHOd"),
                u = i("Oe3h"),
                f = i("0FVZ"),
                w = i("7N4s"),
                _ = i("cHvH"),
                b = i("rHpw"),
                g = i("i4Oy"),
                v = i("shC7"),
                y = i("MWbm");
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
                            altKey: i,
                            ctrlKey: n,
                            metaKey: o,
                            key: a
                        } = e;
                        !(i || n || o) && "Escape" === a && t()
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
                                left: i,
                                top: n,
                                width: o
                            } = this._bodyRectHelperNode.getBoundingClientRect(),
                            {
                                width: a,
                                height: r
                            } = g.a.get("window");
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
                            top: d,
                            height: l,
                            width: h
                        } = s, p = a - o, m = c - i, u = d - n, f = c + h >= t, w = d + l >= e, _ = a - c >= t, b = r - d >= e, y = this.props.preferredVerticalOrientation, R = (e => v.a.getConstants().isRTL ? "left" === e ? "right" : "left" : e)(this.props.preferredHorizontalOrientation), O = this.state.verticalOrientation || (({
                            verticalPreference: e,
                            canOrientUp: t,
                            canOrientDown: i
                        }) => t && i || !t && !i ? e : t ? "up" : "down")({
                            verticalPreference: y,
                            canOrientUp: w,
                            canOrientDown: b
                        }), E = this.state.horizontalOrientation || (({
                            horizontalPreference: e,
                            canOrientLeft: t,
                            canOrientRight: i
                        }) => !t || "left" !== e && i ? "right" : "left")({
                            horizontalPreference: R,
                            canOrientLeft: f,
                            canOrientRight: _
                        }), N = this.props.isFixed ? c : m, H = this.props.isFixed ? d : u, C = "up" === O ? H + l - e : H, x = "left" === E ? a - N - h - p : a - N - t - p;
                        this.setState({
                            top: Math.max(C, 0),
                            right: x,
                            verticalOrientation: O,
                            horizontalOrientation: E
                        })
                    })), this.state = Object.freeze({}), this._scheduleUpdate = Object(d.a)(this._updatePosition, window.requestAnimationFrame), this._scheduleDebouncedUpdate = Object(l.a)(this._scheduleUpdate, 250)
                }
                componentDidMount() {
                    this._mounted = !0, g.a.addEventListener("change", this._scheduleDebouncedUpdate)
                }
                componentWillUnmount() {
                    this._mounted = !1, g.a.removeEventListener("change", this._scheduleDebouncedUpdate)
                }
                render() {
                    const {
                        children: e,
                        isFixed: t,
                        onDismiss: i,
                        animateInDuration: n,
                        animateType: a,
                        withKeyboardNavigation: r
                    } = this.props, {
                        top: d,
                        right: l,
                        verticalOrientation: g
                    } = this.state, O = void 0 === d, E = `calc(100vh - ${d||0}px)`, N = [R.content, O && R.contentInitialRender, t && [R.contentFixed, {
                        maxHeight: E
                    }], {
                        top: d,
                        right: v.a.getConstants().isRTL ? void 0 : l,
                        left: v.a.getConstants().isRTL ? l : void 0
                    }];
                    return s.createElement(y.a, {
                        ref: this._receiveAnchorRef,
                        style: R.anchor
                    }, s.createElement(f.a.Dropdown, null, s.createElement(m.a.Consumer, null, (t => s.createElement(w.a.Consumer, null, (({
                        isModal: d
                    }) => s.createElement(p.a, {
                        history: t,
                        isModal: d,
                        onDismiss: i
                    }, s.createElement(h.a, {
                        withKeyboardNavigation: r
                    }, s.createElement(y.a, {
                        onClick: i,
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
                        animateMount: "up" !== g,
                        duration: n,
                        onAnimateComplete: this._handleAnimateComplete,
                        show: !0,
                        type: a
                    }, (({
                        isAnimating: t
                    }) => s.createElement(u.a, {
                        id: "Dropdown",
                        minimizeReporting: t
                    }, ((t, i) => s.createElement(y.a, o()({
                        ref: t()
                    }, i({})), e))))))))))))))))
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
        jHwr: function(e, t, i) {
            "use strict";
            t.a = (e, t) => {
                let i = null;
                const n = () => {
                    i = null, e()
                };
                return () => (i || (i = t(n)), i)
            }
        }
    }
]);
//# sourceMappingURL=https://ton.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.Dropdown.594d5875.js.map