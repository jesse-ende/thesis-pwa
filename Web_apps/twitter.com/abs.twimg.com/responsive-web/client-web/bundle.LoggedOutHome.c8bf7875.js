(window.webpackJsonp = window.webpackJsonp || []).push([
    [49], {
        "6oVL": function(e, t, n) {
            "use strict";
            var o = n("KEM+"),
                a = n.n(o),
                i = (n("kYxP"), n("MvUL"), n("ERkP")),
                r = n("s9SB"),
                s = n.n(r),
                l = n("3XMw"),
                c = n.n(l),
                u = n("cnVF"),
                p = n("Ukpf"),
                d = n("BTou"),
                m = n("mrHL"),
                h = "LoginForm_Login_Button",
                g = n("fEA7"),
                b = n.n(g),
                y = n("MWbm"),
                f = n("Irs7"),
                x = n("/yvb"),
                _ = n("rHpw");
            const w = c.a.e919c3bc;
            class C extends i.Component {
                constructor(...e) {
                    super(...e), a()(this, "_mobileLoginToken", b.a.v1().replace(/-/g, "")), a()(this, "_handleSubmit", (() => {
                        const {
                            analytics: e,
                            deregisterServiceWorkerBeforeSubmit: t,
                            onSubmit: n
                        } = this.props;
                        return e.scribe({
                            action: "submit"
                        }), t ? (d.a.deregisterServiceWorker((() => {
                            this._setLoginCookie(), n ? n(this._form.elements) : this._form.submit()
                        })), !1) : (d.a.flushHTMLCache(), this._setLoginCookie(), n ? (n(this._form.elements), !1) : void 0)
                    })), a()(this, "_handleSubmitButtonClick", (() => {
                        !1 !== this._handleSubmit() && this._form.submit()
                    })), a()(this, "_setFormRef", (e => {
                        e && (this._form = e)
                    })), a()(this, "_setLoginCookie", (() => {
                        const e = new Date(Date.now());
                        e.setTime(e.getTime() + 3e5), Object(m.b)(s.a.serialize(u.n, this._mobileLoginToken, {
                            domain: void 0,
                            expires: e,
                            path: "/",
                            secure: !0
                        }))
                    }))
                }
                componentDidUpdate(e) {
                    this.props.autoSubmit && !e.autoSubmit && this._handleSubmitButtonClick()
                }
                componentDidMount() {
                    p.a.inject({
                        scriptId: "jsInstLibrary",
                        src: "https://twitter.com/i/js_inst?c_name=ui_metrics"
                    })
                }
                render() {
                    const {
                        children: e,
                        hideSubmitButton: t,
                        horizontalLayout: n,
                        formActionUrl: o,
                        loginReturnPath: a,
                        submitButtonDisabled: r,
                        submitButtonLabel: s,
                        submitButtonSize: l,
                        submitButtonStyle: c,
                        submitButtonType: u
                    } = this.props, [p, d] = "string" == typeof a ? a.split("?") : [], m = `${encodeURI(p||"/")}${d?`?${d}`:""}`, g = i.createElement(y.a, {
                        style: n && I.horizontalFields
                    }, i.createElement("input", {
                        name: "redirect_after_login",
                        type: "hidden",
                        value: m
                    }), i.createElement("input", {
                        name: "remember_me",
                        type: "hidden",
                        value: "1"
                    }), i.createElement("input", {
                        name: "authenticity_token",
                        type: "hidden",
                        value: this._mobileLoginToken
                    }), i.createElement("input", {
                        name: "wfa",
                        type: "hidden",
                        value: "1"
                    }), i.createElement("input", {
                        autoComplete: "off",
                        name: "ui_metrics",
                        type: "hidden"
                    }), e, t ? null : i.createElement(y.a, {
                        style: n && I.loginButtonContainer
                    }, i.createElement(x.a, {
                        disabled: r,
                        onPress: this._handleSubmitButtonClick,
                        size: l,
                        style: c,
                        testID: h,
                        type: u
                    }, s)));
                    return i.createElement(y.a, {
                        style: I.loginForm
                    }, i.createElement("form", {
                        action: o,
                        children: g,
                        method: "post",
                        noValidate: !0,
                        onSubmit: this._handleSubmit,
                        ref: this._setFormRef
                    }))
                }
            }
            a()(C, "defaultProps", {
                autoSubmit: !1,
                deregisterServiceWorkerBeforeSubmit: !1,
                formActionUrl: "/sessions",
                hideSubmitButton: !1,
                submitButtonDisabled: !1,
                submitButtonLabel: w,
                submitButtonType: "primary"
            });
            const I = _.a.create((e => ({
                horizontalFields: {
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "stretch"
                },
                loginForm: {
                    width: "100%"
                },
                loginButtonContainer: {
                    flexDirection: "column",
                    justifyContent: "center"
                }
            })));
            t.a = Object(f.a)(C, {
                element: "inline_login_form"
            })
        },
        Ukpf: function(e, t, n) {
            "use strict";
            const o = {
                inject({
                    callback: e,
                    scriptId: t,
                    src: n
                }) {
                    if (document.getElementById(t)) e && e();
                    else {
                        const o = document.createElement("script");
                        o.src = n, o.id = t, o.async = !0, o.defer = !0, document.body.appendChild(o), o.onload = () => {
                            e && e()
                        }
                    }
                }
            };
            t.a = o
        },
        XJCT: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return b
            })), n.d(t, "b", (function() {
                return v
            }));
            var o = n("97Jx"),
                a = n.n(o),
                i = n("ERkP"),
                r = n("t62R"),
                s = n("3XMw"),
                l = n.n(s),
                c = n("p+r5");
            const u = Object.freeze({
                password: "password",
                username: "username_or_email"
            });
            var p = ({
                name: e,
                ...t
            }) => i.createElement(c.a, a()({
                autoCapitalize: "none",
                autoCorrect: !1,
                name: `session[${e}]`,
                spellCheck: "false"
            }, t));
            const d = l.a.d1091f50,
                m = i.createElement(r.c, {
                    link: {
                        external: !0,
                        pathname: "https://twitter.com/account/begin_password_reset",
                        openInSameFrame: !0
                    }
                }, d),
                h = l.a.dec3c9b8,
                g = ({
                    helperText: e,
                    label: t,
                    withForgotPasswordLink: n,
                    ...o
                }) => i.createElement(p, a()({}, o, {
                    helperText: n ? m : e,
                    label: t || h,
                    name: u.password,
                    type: "password"
                }));
            g.defaultProps = {
                autoFocus: !1,
                withForgotPasswordLink: !1
            };
            var b = g,
                y = n("v6aA"),
                f = e => e.isTrue("responsive_web_login_input_type_email_enabled") ? "email" : void 0;
            const x = l.a.e1ec8c17,
                _ = l.a.d0a750f2,
                w = l.a.e2dd29b5,
                C = l.a.jb4eb245,
                I = ({
                    autoFocus: e,
                    label: t,
                    withUsernameDisabled: n,
                    withEmailDisabled: o,
                    withPhoneDisabled: r,
                    ...s
                }) => {
                    const {
                        featureSwitches: l
                    } = i.useContext(y.a);
                    let c = x;
                    return n ? c = _ : r ? c = C : o && (c = w), i.createElement(p, a()({}, s, {
                        autoFocus: e,
                        label: t || c,
                        name: u.username,
                        type: f(l)
                    }))
                };
            I.defaultProps = {
                autoFocus: !0,
                withUsernameDisabled: !1,
                withPhoneDisabled: !1,
                withEmailDisabled: !1
            };
            var v = I
        },
        aD6h: function(e, t, n) {
            "use strict";
            var o = n("KEM+"),
                a = n.n(o),
                i = n("ERkP"),
                r = n("Hde2"),
                s = n("yt7X"),
                l = n("496R");
            class c extends i.PureComponent {
                render() {
                    return this.props.hideEUBanner ? null : i.createElement(r.a, null, i.createElement(s.a, null))
                }
            }
            a()(c, "defaultProps", {
                hideEUBanner: !1
            }), t.a = Object(l.a)(c)
        },
        bojF: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "LoggedOutHome", (function() {
                return q
            }));
            var o = n("KEM+"),
                a = n.n(o),
                i = n("ERkP"),
                r = n("pxuL"),
                s = n("zI2C"),
                l = n("aD6h"),
                c = n("rxPX"),
                u = n("zh9S"),
                p = n("RqPI"),
                d = Object(c.a)().propsFromState((() => ({
                    userLanguage: p.f
                }))).propsFromActions((() => ({
                    scribeAction: u.c
                }))),
                m = n("7JQg"),
                h = n("SrtL"),
                g = n("yt7X"),
                b = n("FQwk"),
                y = n("muX9"),
                f = n("3XMw"),
                x = n.n(f),
                _ = n("6oVL"),
                w = n("rJoH"),
                C = n("yoO3"),
                I = n("Es6L"),
                v = "signupButton",
                E = "loginButton",
                S = n("MWbm"),
                L = n("/yvb"),
                k = n("cHvH"),
                B = n("TIdA"),
                T = n("A91F"),
                F = n("rHpw"),
                D = n("t62R");
            const z = "https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png",
                W = "https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png",
                H = 500,
                P = 1e3;
            var R = n("VwDm"),
                U = n("wz7L"),
                V = n("dFWS"),
                O = n("lUZE"),
                M = n("XJCT");
            const j = [{
                    text: x.a.a62c9c33,
                    Icon: R.a
                }, {
                    text: x.a.cf39fca2,
                    Icon: U.a
                }, {
                    text: x.a.j86184fd,
                    Icon: V.a
                }],
                K = x.a.d1091f50,
                A = x.a.d9e109ae,
                N = x.a.eba1b197,
                X = x.a.a565833d,
                $ = x.a.e919c3bc,
                J = x.a.h0ff39da,
                G = x.a.j3f49ff6;
            class q extends i.Component {
                constructor(e, t) {
                    super(e, t), a()(this, "_renderUsernameInputField", (() => i.createElement(S.a, {
                        style: Q.inputContainer
                    }, i.createElement(M.b, {
                        onChange: this._handleUsernameChange,
                        onSubmitEditing: this._handleSubmitEditing,
                        style: Q.input
                    })))), a()(this, "_renderHalfForm", (() => {
                        const {
                            usernameValue: e
                        } = this.state;
                        return i.createElement(S.a, {
                            style: [Q.container, Q.halfForm]
                        }, this._renderUsernameInputField(), i.createElement(L.a, {
                            link: {
                                pathname: "/login",
                                query: {
                                    username_or_email: e
                                }
                            },
                            onPress: this._handleHalfFormLoginClick,
                            size: "normalLarge",
                            style: Q.submitButtonStyle,
                            type: "secondary"
                        }, $))
                    })), a()(this, "_handleHalfFormLoginClick", (() => {
                        const {
                            scribeAction: e,
                            scribeNamespace: t
                        } = this.props;
                        e({ ...t,
                            component: "half_form",
                            element: "login",
                            action: "click"
                        })
                    })), a()(this, "_handleSubmitEditing", (() => {
                        this.setState({
                            autoSubmit: !0
                        })
                    })), a()(this, "_handleSignupButton", (() => {
                        const {
                            scribeAction: e,
                            scribeNamespace: t
                        } = this.props;
                        e({ ...t,
                            section: "front",
                            component: "signup_callout",
                            element: "form",
                            action: "signup"
                        })
                    })), a()(this, "_handleLoginButton", (() => {
                        const {
                            scribeAction: e,
                            scribeNamespace: t
                        } = this.props;
                        e({ ...t,
                            section: "front",
                            component: "signup_callout",
                            element: "form",
                            action: "login"
                        })
                    })), a()(this, "_handleUsernameChange", (e => {
                        this.setState({
                            usernameValue: e.target.value
                        })
                    })), this.state = {
                        autoSubmit: !1
                    }
                }
                componentDidMount() {
                    Object(I.a)() && this.context.setSideNavSupport(!1)
                }
                componentWillUnmount() {
                    Object(I.a)() && this.context.setSideNavSupport(!0)
                }
                render() {
                    return i.createElement(C.a, null, i.createElement(h.a, {
                        title: J
                    }), i.createElement(w.a, {
                        canonical: "https://twitter.com/",
                        description: G,
                        title: J,
                        type: "website"
                    }), i.createElement(s.a, {
                        deepLink: "twitter://"
                    }), i.createElement(y.a, null, i.createElement("meta", {
                        content: "NOODP",
                        name: "robots"
                    }), i.createElement("meta", {
                        content: G,
                        name: "description"
                    })), i.createElement(k.a, null, (({
                        windowWidth: e,
                        windowHeight: t
                    }) => {
                        const {
                            deviceSize: n,
                            showLoginForm: o
                        } = ((e, t) => ({
                            deviceSize: e > P ? "desktop" : e > H ? "tablet" : void 0,
                            showLoginForm: e / 2 > 500 && t >= 750
                        }))(e, t);
                        return i.createElement(S.a, {
                            style: Y.root
                        }, i.createElement(S.a, {
                            style: [Y.main, "desktop" === n && Y.mainWide]
                        }, this._renderCTA({
                            deviceSize: n,
                            showLoginForm: o
                        }), this._renderHero(n)), i.createElement(l.a.Configure, {
                            hideEUBanner: !0
                        }), i.createElement(g.a, null), i.createElement(b.a, {
                            align: "center"
                        }))
                    })))
                }
                _renderHero(e) {
                    const {
                        variants: t,
                        original: n
                    } = (e => {
                        const t = null == e ? void 0 : e.startsWith("en");
                        return {
                            variants: [{
                                uri: t ? "https://abs.twimg.com/sticky/illustrations/lohp_en_850x623.png" : "https://abs.twimg.com/sticky/illustrations/lohp_850x623.png",
                                width: 850,
                                height: 623
                            }, {
                                uri: t ? z : W,
                                width: 1302,
                                height: 955
                            }],
                            original: {
                                url: t ? z : W,
                                width: 1302,
                                height: 958
                            }
                        }
                    })(this.props.userLanguage);
                    return i.createElement(S.a, {
                        style: [Y.block, Y.communication, Y.blockHero]
                    }, i.createElement(S.a, {
                        style: Y.blockImg
                    }, i.createElement(B.a, {
                        accessibilityLabel: "",
                        aspectMode: T.a.COVER,
                        backgroundColor: F.a.theme.colors.blue500,
                        customVariants: t,
                        draggable: !1,
                        image: n
                    }), i.createElement(O.a, {
                        style: [Y.twitterIconHero, "desktop" === e && Y.twitterIconHeroWide]
                    })))
                }
                _renderCommunicationItems() {
                    const e = j.length;
                    return i.createElement(S.a, {
                        style: Y.communicationItems
                    }, j.map((({
                        Icon: t,
                        text: n
                    }, o) => {
                        const a = o + 1 === e;
                        return i.createElement(S.a, {
                            key: n,
                            style: [Y.communicationItem, a && Y.communicationItemLast]
                        }, i.createElement(t, {
                            style: Y.communicationItemIcon
                        }), i.createElement(D.c, {
                            color: "white",
                            size: "large",
                            style: Y.communicationItemText,
                            weight: "bold"
                        }, n))
                    })))
                }
                _renderCTA({
                    deviceSize: e,
                    showLoginForm: t
                }) {
                    const n = e ? Y.ctaButton : Y.ctaButtonMobile;
                    return i.createElement(S.a, {
                        style: [Y.block, Y.blockCTA, "tablet" === e && Y.blockTabletCTA]
                    }, t ? this._renderLoginForm() : null, i.createElement(S.a, {
                        style: [Y.blockInnerWrapper, "desktop" === e && Y.blockInnerWrapperWide]
                    }, i.createElement(O.a, {
                        style: Y.twitterIcon
                    }), i.createElement(D.c, {
                        extendedWidth: !0,
                        size: e ? "colossal" : "giant",
                        style: e ? Y.ctaTitleLarge : Y.ctaTitle,
                        weight: "bold"
                    }, N), i.createElement(D.c, {
                        extendedWidth: !0,
                        size: e ? "jumbo" : "xLarge",
                        style: e ? Y.ctaTextLarge : Y.ctaText,
                        weight: "bold"
                    }, A), i.createElement(S.a, {
                        style: "tablet" === e && Y.ctaButtonContainer
                    }, i.createElement(L.a, {
                        link: "/i/flow/signup",
                        onPress: this._handleSignupButton,
                        size: "normalLarge",
                        style: [n, "tablet" === e && Y.ctaButtonSplitSpacing],
                        testID: v,
                        type: "primary"
                    }, X), i.createElement(L.a, {
                        link: "/login",
                        onPress: this._handleLoginButton,
                        size: "normalLarge",
                        style: n,
                        testID: E,
                        type: "secondary"
                    }, $))))
                }
                _renderLoginForm() {
                    const {
                        autoSubmit: e,
                        usernameValue: t
                    } = this.state, n = t ? `?account_identifier=${t}` : "", o = this.context.featureSwitches.getValue("responsive_web_inline_login_box_enabled"), a = "full" === o;
                    return "none" === o ? null : "half" === o ? this._renderHalfForm() : a ? i.createElement(S.a, {
                        style: [Q.container]
                    }, i.createElement(_.a, {
                        autoSubmit: e,
                        horizontalLayout: !0,
                        submitButtonSize: "normalLarge",
                        submitButtonStyle: Q.submitButtonStyle,
                        submitButtonType: "secondary"
                    }, this._renderUsernameInputField(), i.createElement(S.a, {
                        style: Q.inputContainer
                    }, i.createElement(M.a, {
                        onSubmitEditing: this._handleSubmitEditing,
                        style: Q.input
                    }), i.createElement(D.c, {
                        link: {
                            pathname: `https://twitter.com/account/begin_password_reset${n}`,
                            external: !0,
                            openInSameFrame: !0
                        },
                        size: "small",
                        style: Q.forgotPassword
                    }, K)))) : void 0
                }
            }
            a()(q, "contextType", r.a);
            const Q = F.a.create((e => ({
                    container: {
                        alignItems: "center",
                        paddingHorizontal: e.spaces.space32,
                        position: "absolute",
                        top: e.spaces.space16,
                        left: "0px",
                        maxWidth: "100%"
                    },
                    submitButtonStyle: {
                        marginBottom: e.spaces.space4
                    },
                    halfForm: {
                        flexDirection: "row",
                        justifyContent: "center"
                    },
                    inputContainer: {
                        flexShrink: 1,
                        width: "225px"
                    },
                    input: {
                        paddingLeft: 0,
                        paddingTop: 0,
                        paddingBottom: 0
                    },
                    forgotPassword: {
                        height: 0,
                        overflowY: "visible",
                        marginLeft: e.spaces.space12,
                        marginTop: e.spaces.space4
                    }
                }))),
                Y = F.a.create((e => ({
                    root: {
                        flex: 1
                    },
                    main: {
                        minHeight: "auto"
                    },
                    mainWide: {
                        flex: "auto",
                        flexDirection: "row-reverse"
                    },
                    block: {
                        justifyContent: "center",
                        padding: e.spaces.space16
                    },
                    blockHero: {
                        flex: 1,
                        padding: 0,
                        minHeight: "45vh"
                    },
                    blockImg: { ...F.a.absoluteFillObject,
                        flex: 1,
                        resizeMode: "cover",
                        justifyContent: "center",
                        backgroundColor: e.colors.primary
                    },
                    blockCTA: {
                        minWidth: "45vw"
                    },
                    blockTabletCTA: {
                        maxWidth: "600px",
                        margin: "auto",
                        width: "100%"
                    },
                    blockInnerWrapper: {
                        width: "100%",
                        padding: e.spaces.space20
                    },
                    blockInnerWrapperWide: {
                        minWidth: "436.99999999999994px",
                        maxWidth: "760px"
                    },
                    bottomButton: {
                        flexGrow: 1,
                        maxWidth: "180px"
                    },
                    bottomButtonLeft: {
                        marginRight: "10px"
                    },
                    bottomButtonRight: {
                        marginLeft: "10px"
                    },
                    bottomButtonsBlock: {
                        flexDirection: "row",
                        paddingTop: e.spaces.space40,
                        paddingBottom: e.spaces.space32
                    },
                    communication: {
                        backgroundColor: e.colors.blue300,
                        overflow: "hidden"
                    },
                    communicationItem: {
                        flexDirection: "row",
                        marginBottom: "40px"
                    },
                    communicationItemIcon: {
                        color: e.colors.white,
                        flexShrink: 0,
                        fontSize: e.fontSizes.xLarge
                    },
                    communicationItemLast: {
                        marginBottom: 0
                    },
                    communicationItems: {
                        alignSelf: "center",
                        maxWidth: "380px",
                        paddingVertical: e.spaces.space16
                    },
                    communicationItemText: {
                        lineHeight: "30px",
                        marginLeft: e.spaces.space16
                    },
                    seeWhatsHappening: {
                        marginTop: e.spaces.space20
                    },
                    happeningButton: {
                        marginBottom: e.spaces.space16
                    },
                    joinToday: {
                        marginTop: e.spaces.space64,
                        marginBottom: e.spaces.space16
                    },
                    ctaTitle: {
                        marginVertical: e.spaces.space40
                    },
                    ctaTitleLarge: {
                        marginVertical: e.spaces.space48
                    },
                    ctaText: {
                        marginBottom: e.spaces.space20
                    },
                    ctaTextLarge: {
                        marginBottom: e.spaces.space32
                    },
                    ctaButtonContainer: {
                        flexDirection: "row"
                    },
                    ctaButton: {
                        marginBottom: e.spaces.space20,
                        maxWidth: "380px",
                        flex: 1
                    },
                    ctaButtonMobile: {
                        marginBottom: e.spaces.space16
                    },
                    ctaButtonSplitSpacing: {
                        marginRight: e.spaces.space20
                    },
                    twitterIcon: {
                        alignSelf: "flex-start",
                        color: e.colors.brandColor,
                        height: "3rem",
                        paddingBottom: e.spaces.space12
                    },
                    twitterIconBg: {
                        color: e.colors.blue500,
                        maxWidth: "none",
                        position: "absolute"
                    },
                    twitterIconBgNarrow: {
                        height: "60vh",
                        top: "-10vh",
                        right: "-10vh"
                    },
                    twitterIconBgWide: {
                        height: "160vh",
                        top: "-30vh",
                        right: "-50vh"
                    },
                    twitterIconHero: {
                        color: e.colors.whiteOnColor,
                        justifyContent: "center",
                        height: "fit-content",
                        padding: e.spaces.space32
                    },
                    twitterIconHeroWide: {
                        height: "50%",
                        maxHeight: "380px"
                    }
                })));
            t.default = Object(m.c)({
                page: "front"
            })(d(q))
        },
        "p+r5": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return I
            }));
            var o = n("97Jx"),
                a = n.n(o),
                i = n("KEM+"),
                r = n.n(i),
                s = n("ERkP"),
                l = n("t62R"),
                c = n("piX5"),
                u = n("3XMw"),
                p = n.n(u),
                d = n("tI3i"),
                m = n.n(d),
                h = n("oQhu"),
                g = n("rHpw"),
                b = n("aITJ"),
                y = n("MWbm"),
                f = (n("aWzz"), n("Oib4")),
                x = n("WtWS"),
                _ = n("ioan");
            const w = e => e.length,
                C = (e, t = w) => t(e);
            class I extends s.Component {
                constructor(e) {
                    super(e), r()(this, "_blurOnBackspaceKeyUpForKaiOS", !1), r()(this, "_isLabelLarge", (() => {
                        const {
                            isFocused: e,
                            actualCount: t
                        } = this.state;
                        return !t && !e
                    })), r()(this, "_getTextInputStyle", Object(h.a)((e => [v.root, !e && v.disabled]))), r()(this, "_calculateLength", (e => C(e, this.props.calculateLength))), r()(this, "_shouldRenderDisplayCount", (() => {
                        const {
                            isFocused: e
                        } = this.state, t = this._isFormInvalid();
                        return Boolean((e || t) && this._getMaxDisplayCount())
                    })), r()(this, "_isInvalidNumber", (() => {
                        var e, t, n, o, a;
                        const {
                            type: i
                        } = this.props, r = null == (e = this._textInput) || null == (t = e._textInputNode) ? void 0 : t.value, s = null == (n = this._textInput) || null == (o = n._textInputNode) || null == (a = o.validity) ? void 0 : a.badInput;
                        return "number" === i && "" === r && !0 === s
                    })), r()(this, "_getActualCount", (e => {
                        let t = e.length;
                        return this._isInvalidNumber() && (t = 1), t
                    })), r()(this, "_handleBlur", (e => {
                        const {
                            onBlur: t
                        } = this.props, {
                            value: n
                        } = e.currentTarget, o = this._calculateLength(n), a = this._getActualCount(n);
                        this.setState({
                            isFocused: !1,
                            displayCount: o,
                            actualCount: a
                        }), t && t(e)
                    })), r()(this, "_handleChange", (e => {
                        const {
                            onChange: t
                        } = this.props, {
                            value: n
                        } = e.currentTarget, o = this._calculateLength(n), a = this._getActualCount(n);
                        this.setState({
                            isFocused: !0,
                            displayCount: o,
                            actualCount: a
                        }), t && t(e)
                    })), r()(this, "_handleFocus", (e => {
                        const {
                            onFocus: t
                        } = this.props;
                        this.setState({
                            isFocused: !0
                        }), t && t(e)
                    })), r()(this, "_handleKeyPress", (e => {
                        const {
                            multiline: t,
                            onKeyPress: n,
                            onSubmitEditing: o
                        } = this.props;
                        n && n(e), e.isDefaultPrevented() || "Enter" !== e.key || e.shiftKey || t || !o || (e.preventDefault(), o(e))
                    })), r()(this, "_handleKeyDown", (e => {
                        const {
                            onKeyDown: t
                        } = this.props, {
                            displayCount: n
                        } = this.state, o = 0 === n;
                        b.b.isKaiOS() && "Backspace" === e.key && o ? this._blurOnBackspaceKeyUpForKaiOS = o : t && t(e)
                    })), r()(this, "_handleKeyUp", (e => {
                        const {
                            onKeyUp: t
                        } = this.props;
                        b.b.isKaiOS() && "Backspace" === e.key && this._blurOnBackspaceKeyUpForKaiOS && (e.preventDefault(), this.blur()), t && t(e)
                    })), r()(this, "_setTextInputRef", (e => {
                        this._textInput = e
                    })), r()(this, "_checkComponentPropsUsageCorrectness", (e => {
                        const {
                            defaultValue: t,
                            maxLength: n,
                            validLength: o,
                            value: a,
                            onChange: i
                        } = e, r = !!i, s = "string" == typeof a, l = "string" == typeof t;
                        m()(!(!l && s && !r), "A controlled component, a component with a value prop, must have an onChange handler. The value prop cannot be undefined."), m()(!(n && o && o > n), "Max length should be equal or greater than valid length."), m()(!(void 0 !== n && n <= 0 || void 0 !== o && o <= 0), "Set editable to false instead of limiting the valid character count to 0.")
                    })), r()(this, "_exceedsValidLength", (e => {
                        const t = this._getMaxDisplayCount();
                        return !!t && e > t
                    })), r()(this, "_getMaxDisplayCount", (() => this.props.validLength || this.props.maxLength)), this._checkComponentPropsUsageCorrectness(e);
                    const {
                        defaultValue: t,
                        value: n
                    } = e;
                    this.state = {
                        displayCount: this._calculateLength(n || t || ""),
                        actualCount: w(n || t || ""),
                        isFocused: !1
                    }
                }
                componentDidUpdate(e) {
                    const {
                        validLength: t,
                        maxLength: n,
                        onChange: o,
                        value: a
                    } = this.props, {
                        validLength: i,
                        maxLength: r,
                        onChange: s,
                        value: l
                    } = e;
                    i === t && n === r && !!o === !!s && "string" == typeof a === ("string" == typeof l) || this._checkComponentPropsUsageCorrectness(this.props)
                }
                static getDerivedStateFromProps(e, t) {
                    const {
                        calculateLength: n,
                        value: o
                    } = e, a = "string" == typeof o ? C(o, n) : 0;
                    return "string" == typeof o && a !== t.displayCount ? {
                        displayCount: a,
                        actualCount: o.length
                    } : null
                }
                render() {
                    const {
                        accessibilityLabel: e,
                        errorText: t,
                        helperText: n,
                        style: o,
                        editable: a
                    } = this.props, {
                        isFocused: i
                    } = this.state, r = this._isFormInvalid();
                    return s.createElement(y.a, {
                        style: [E.root, o]
                    }, s.createElement(y.a, {
                        accessibilityLabel: e,
                        accessibilityRole: "label",
                        style: [c.a.border, E.textInputFormStyle, r && c.a.invalidBorderColor, i && r && c.a.focusedBorderInvalid, i && !r && c.a.focusedBorderValid, !a && c.a.disabled]
                    }, s.createElement(y.a, {
                        style: E.textInputFormWrapper
                    }, s.createElement(y.a, {
                        style: [E.textInputHeader]
                    }, this._renderLabel(), this._shouldRenderDisplayCount() ? this._renderDisplayCount() : null), this._renderTextInput())), s.createElement(y.a, {
                        style: [E.sidePadding, E.underTextInputForm]
                    }, s.createElement(y.a, {
                        style: E.subtextWrapper
                    }, n ? this._renderHelperText() : null, r && t ? this._renderErrorText() : null)))
                }
                _renderLabel() {
                    const {
                        label: e
                    } = this.props, {
                        isFocused: t
                    } = this.state, n = t ? "primary" : "gray600", o = this._isFormInvalid() ? "red500" : n, a = this._isLabelLarge();
                    return s.createElement(l.c, {
                        color: a ? "gray600" : o,
                        numberOfLines: 1,
                        size: a ? "large" : "small",
                        style: [E.textInputHeaderItem, a && E.placeholderText, E.transition]
                    }, e)
                }
                _renderTextInput() {
                    const {
                        accessibilityLabel: e,
                        calculateLength: t,
                        editable: n,
                        errorText: o,
                        helperText: i,
                        Icon: r,
                        invalid: c,
                        label: u,
                        maxLength: p,
                        onBlur: d,
                        onChange: m,
                        onSubmitEditing: h,
                        onFocus: g,
                        onKeyDown: b,
                        onKeyPress: f,
                        onKeyUp: x,
                        showValidationIcon: w,
                        style: C,
                        validLength: I,
                        ...E
                    } = this.props, S = this.getValue(), L = this._calculateLength(S), k = p ? p + S.length - L : void 0;
                    return s.createElement(y.a, {
                        style: v.container
                    }, r && !this._isLabelLarge() ? this._renderIcon() : null, s.createElement(l.c, {
                        size: "large",
                        style: v.wrapper
                    }, s.createElement(_.a, a()({}, E, {
                        editable: n,
                        maxLength: k,
                        onBlur: this._handleBlur,
                        onChange: this._handleChange,
                        onFocus: this._handleFocus,
                        onKeyDown: this._handleKeyDown,
                        onKeyPress: this._handleKeyPress,
                        onKeyUp: this._handleKeyUp,
                        ref: this._setTextInputRef,
                        style: this._getTextInputStyle(n)
                    }))), w && !this._isLabelLarge() ? this._renderValidationIcon() : null)
                }
                _renderHelperText() {
                    return s.createElement(y.a, {
                        accessibilityLiveRegion: "polite"
                    }, s.createElement(l.c, {
                        color: "gray600",
                        size: "small",
                        style: E.subtext
                    }, this.props.helperText))
                }
                _renderErrorText() {
                    return s.createElement(y.a, {
                        accessibilityLiveRegion: "assertive"
                    }, s.createElement(l.c, {
                        color: "red500",
                        size: "small",
                        style: E.subtext
                    }, this.props.errorText))
                }
                _renderDisplayCount() {
                    const {
                        displayCount: e
                    } = this.state, t = this._getMaxDisplayCount(), n = this._exceedsValidLength(e), o = t && p.a.ia24dc8c(t), a = p.a.ia24dc8c(e);
                    return s.createElement(y.a, {
                        accessibilityLiveRegion: "polite",
                        style: [E.textInputHeaderItem, E.displayCount]
                    }, s.createElement(l.c, {
                        color: n ? "red500" : "gray600",
                        size: "small"
                    }, o ? `${a} / ${o}` : ""))
                }
                _renderIcon() {
                    const {
                        Icon: e
                    } = this.props, {
                        isFocused: t
                    } = this.state, n = [E.icon, t && E.focusedIcon];
                    return e && s.createElement(e, {
                        style: n
                    })
                }
                _renderValidationIcon() {
                    return this._isFormInvalid() ? s.createElement(f.a, {
                        style: [E.validationIcon, c.a.invalidColor]
                    }) : s.createElement(x.a, {
                        style: [E.validationIcon, c.a.validColor]
                    })
                }
                _isFormInvalid() {
                    const {
                        displayCount: e
                    } = this.state;
                    return this.props.invalid || this._exceedsValidLength(e) || this._isInvalidNumber()
                }
                blur() {
                    this._textInput && this._textInput.blur()
                }
                getValue() {
                    return this._textInput && this._textInput.getValue() || ""
                }
                focus() {
                    this._textInput && this._textInput.focus()
                }
                isValidLength() {
                    const e = this.getValue(),
                        t = this._calculateLength(e);
                    return !this._exceedsValidLength(t)
                }
            }
            r()(I, "defaultProps", {
                autoComplete: "on",
                autoCorrect: !0,
                autoFocus: !1,
                editable: !0,
                invalid: !1
            }), I.propTypes = {};
            const v = g.a.create((e => ({
                    container: {
                        flexDirection: "row",
                        flexGrow: 1,
                        flexShrink: 1,
                        overflow: "hidden",
                        paddingBottom: e.spaces.space8,
                        paddingHorizontal: e.spaces.space8,
                        paddingTop: e.spaces.space12,
                        marginTop: e.spaces.space16
                    },
                    root: {
                        backgroundColor: "transparent",
                        borderRadius: e.borderRadii.none,
                        borderWidth: e.borderWidths.none,
                        boxSizing: "border-box",
                        color: "inherit",
                        fontFamily: "inherit",
                        fontSize: "inherit",
                        textAlign: "inherit",
                        outlineStyle: "none",
                        padding: 0
                    },
                    wrapper: {
                        alignItems: "center",
                        display: "flex",
                        fontSize: e.fontSizes.headline2,
                        width: "100%"
                    },
                    disabled: {
                        color: e.colors.gray600
                    }
                }))),
                E = g.a.create((e => ({
                    root: {
                        paddingHorizontal: e.componentDimensions.gutterHorizontal,
                        paddingVertical: e.componentDimensions.gutterVertical
                    },
                    textInputFormStyle: {
                        flexDirection: "row"
                    },
                    textInputFormWrapper: {
                        flexGrow: 1,
                        flexShrink: 1
                    },
                    textInputHeader: {
                        flexDirection: "row",
                        justifyContent: "space-between",
                        position: "absolute",
                        height: "100%",
                        width: "100%"
                    },
                    textInputHeaderItem: {
                        paddingTop: e.spaces.space8,
                        paddingHorizontal: e.spaces.space8,
                        fontSize: "small"
                    },
                    placeholderText: {
                        paddingTop: e.spaces.space16,
                        fontSize: e.fontSizes.headline2,
                        userSelect: "none"
                    },
                    displayCount: {
                        flexGrow: 1,
                        alignItems: "flex-end"
                    },
                    sidePadding: {
                        paddingHorizontal: e.spaces.space8
                    },
                    underTextInputForm: {
                        flexDirection: "row"
                    },
                    subtextWrapper: {
                        flexDirection: "column",
                        flex: 1,
                        paddingRight: e.spaces.space20,
                        paddingTop: e.spaces.space2
                    },
                    subtext: {
                        alignSelf: "flex-start"
                    },
                    focusedIcon: {
                        color: e.colors.primary
                    },
                    icon: {
                        alignSelf: "center",
                        color: e.colors.gray600,
                        paddingRight: e.spaces.space4
                    },
                    validationIcon: {
                        alignSelf: "center",
                        paddingLeft: e.spaces.space4
                    },
                    transition: {
                        transition: "transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1), font-size 150ms cubic-bezier(0.4, 0, 0.2, 1), padding-top 150ms cubic-bezier(0.4, 0, 0.2, 1)"
                    }
                })))
        },
        piX5: function(e, t, n) {
            "use strict";
            const o = n("rHpw").a.create((e => ({
                border: {
                    borderRadius: e.borderRadii.small,
                    borderWidth: e.borderWidths.small,
                    borderColor: e.colors.gray200
                },
                focusedBorderValid: {
                    boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`,
                    borderColor: e.colors.primary
                },
                focusedBorderInvalid: {
                    boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}`
                },
                invalidBorderColor: {
                    borderColor: e.colors.red500
                },
                invalidColor: {
                    color: e.colors.red500
                },
                validColor: {
                    color: e.colors.primary
                },
                disabled: {
                    cursor: "default",
                    opacity: .5,
                    backgroundColor: e.colors.gray50,
                    borderColor: e.colors.gray50
                }
            })));
            t.a = o
        },
        yt7X: function(e, t, n) {
            "use strict";
            var o = n("KEM+"),
                a = n.n(o),
                i = (n("kYxP"), n("ERkP")),
                r = n("6/RC"),
                s = n.n(r),
                l = n("rxPX"),
                c = n("RqPI"),
                u = Object(l.a)().propsFromState((() => ({
                    currentCountry: c.l
                }))),
                p = n("s9SB"),
                d = n.n(p),
                m = n("MWbm"),
                h = n("t62R"),
                g = n("cHvH"),
                b = n("rHpw"),
                y = n("/yvb"),
                f = n("v6aA"),
                x = n("3XMw"),
                _ = n.n(x),
                w = n("cnVF");
            const C = (e, t, n) => {
                    const o = e.indexOf(t.toLowerCase()) > -1,
                        a = n[w.i];
                    return o && "1" !== a
                },
                I = _.a.ia5e7487;
            class v extends i.Component {
                constructor(...e) {
                    super(...e), a()(this, "state", {
                        euWarningIsOpen: !1
                    }), a()(this, "_renderMessage", (() => i.createElement(h.c, {
                        color: "white",
                        size: "small"
                    }, i.createElement(_.a.I18NFormatMessage, {
                        $i18n: "i3c34582"
                    }, i.createElement(h.c, {
                        color: "white",
                        link: "https://help.twitter.com/rules-and-policies/twitter-cookies",
                        style: E.link
                    }, _.a.fd0ff73b))))), a()(this, "_handleEUBannerClose", (() => {
                        s.a.canUseDOM && (document.cookie = d.a.serialize(w.i, "1", {
                            maxAge: 31536e3,
                            path: "/",
                            domain: ".twitter.com",
                            secure: !0
                        })), this.setState({
                            euWarningIsOpen: !1
                        })
                    }))
                }
                componentDidMount() {
                    const {
                        currentCountry: e
                    } = this.props, t = this.context.featureSwitches.getArrayValue("responsive_web_eu_countries", []), n = r.canUseDOM ? d.a.parse(document.cookie) : {};
                    this.setState({
                        euWarningIsOpen: !!e && C(t, e, n)
                    })
                }
                render() {
                    return this.state.euWarningIsOpen ? i.createElement(g.a, null, (({
                        windowWidth: e
                    }) => {
                        const t = e < b.a.theme.breakpoints.medium;
                        return i.createElement(m.a, {
                            style: [E.root, t && E.rootNarrow]
                        }, this._renderMessage(), i.createElement(y.a, {
                            onPress: this._handleEUBannerClose,
                            size: "normal",
                            style: [E.closeButton, t && E.closeButtonNarrow],
                            type: "invertedSecondary"
                        }, I))
                    })) : null
                }
            }
            a()(v, "contextType", f.a);
            const E = b.a.create((e => ({
                    root: {
                        alignItems: "center",
                        boxShadow: e.boxShadows.medium,
                        flexDirection: "row",
                        width: "100%",
                        justifyContent: "space-evenly",
                        backgroundColor: e.colors.gray900,
                        paddingHorizontal: e.spaces.space20,
                        paddingVertical: e.spaces.space20
                    },
                    rootNarrow: {
                        flexDirection: "column"
                    },
                    container: {
                        alignItems: "center",
                        flexShrink: 1
                    },
                    closeButton: {
                        marginLeft: e.spaces.space12,
                        marginTop: 0,
                        flexGrow: 0,
                        flexShrink: 0
                    },
                    closeButtonNarrow: {
                        marginLeft: 0,
                        marginTop: e.spaces.space12,
                        width: "100%"
                    },
                    link: {
                        textDecorationLine: "underline"
                    }
                }))),
                S = u(v);
            t.a = S
        }
    }
]);
//# sourceMappingURL=https://ton.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.LoggedOutHome.c8bf7875.js.map