(window.webpackJsonp = window.webpackJsonp || []).push([
    [47], {
        "6oVL": function(e, t, n) {
            "use strict";
            var o = n("KEM+"),
                a = n.n(o),
                i = (n("kYxP"), n("MvUL"), n("ERkP")),
                r = n("s9SB"),
                s = n.n(r),
                l = n("3XMw"),
                c = n.n(l),
                p = n("cnVF"),
                d = n("Ukpf"),
                h = n("BTou"),
                u = n("mrHL"),
                m = "LoginForm_Login_Button",
                g = n("fEA7"),
                b = n.n(g),
                f = n("MWbm"),
                y = n("Irs7"),
                _ = n("/yvb"),
                x = n("rHpw");
            const w = c.a.e919c3bc;
            class E extends i.Component {
                constructor(...e) {
                    super(...e), a()(this, "_mobileLoginToken", b.a.v1().replace(/-/g, "")), a()(this, "_handleSubmit", (() => {
                        const {
                            analytics: e,
                            deregisterServiceWorkerBeforeSubmit: t,
                            onSubmit: n
                        } = this.props;
                        return e.scribe({
                            action: "submit"
                        }), t ? (h.a.deregisterServiceWorker((() => {
                            this._setLoginCookie(), n ? n(this._form.elements) : this._form.submit()
                        })), !1) : (h.a.flushHTMLCache(), this._setLoginCookie(), n ? (n(this._form.elements), !1) : void 0)
                    })), a()(this, "_handleSubmitButtonClick", (() => {
                        !1 !== this._handleSubmit() && this._form.submit()
                    })), a()(this, "_setFormRef", (e => {
                        e && (this._form = e)
                    })), a()(this, "_setLoginCookie", (() => {
                        const e = new Date(Date.now());
                        e.setTime(e.getTime() + 3e5), Object(u.b)(s.a.serialize(p.n, this._mobileLoginToken, {
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
                    d.a.inject("https://twitter.com/i/js_inst?c_name=ui_metrics")
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
                        submitButtonType: p
                    } = this.props, [d, h] = "string" == typeof a ? a.split("?") : [], u = `${encodeURI(d||"/")}${h?`?${h}`:""}`, g = i.createElement(f.a, {
                        style: n && C.horizontalFields
                    }, i.createElement("input", {
                        name: "redirect_after_login",
                        type: "hidden",
                        value: u
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
                    }), e, t ? null : i.createElement(f.a, {
                        style: n && C.loginButtonContainer
                    }, i.createElement(_.a, {
                        disabled: r,
                        onPress: this._handleSubmitButtonClick,
                        size: l,
                        style: c,
                        testID: m,
                        type: p
                    }, s)));
                    return i.createElement(f.a, {
                        style: C.loginForm
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
            a()(E, "defaultProps", {
                autoSubmit: !1,
                deregisterServiceWorkerBeforeSubmit: !1,
                formActionUrl: "/sessions",
                hideSubmitButton: !1,
                submitButtonDisabled: !1,
                submitButtonLabel: w,
                submitButtonType: "primary"
            });
            const C = x.a.create((e => ({
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
            t.a = Object(y.a)(E, {
                element: "inline_login_form"
            })
        },
        Oib4: function(e, t, n) {
            "use strict";
            var o = n("ERkP"),
                a = n("Lsrn"),
                i = n("k/Ka");
            const r = (e = {}) => Object(i.a)("svg", { ...e,
                style: [a.a.root, e.style],
                viewBox: "0 0 24 24"
            }, o.createElement("g", null, o.createElement("path", {
                d: "M12 1.25C6.072 1.25 1.25 6.072 1.25 12S6.072 22.75 12 22.75 22.75 17.928 22.75 12 17.928 1.25 12 1.25zm.025 16.468c-.708 0-1.28-.574-1.28-1.28 0-.71.572-1.282 1.28-1.282.708 0 1.28.573 1.28 1.28.002.708-.57 1.282-1.28 1.282zM14.47 7.636l-1.815 6.098c-.063.212-.258.357-.48.357h-.298c-.222 0-.416-.145-.48-.356L9.583 7.636c-.045-.152-.016-.316.08-.442.093-.127.24-.2.4-.2h3.927c.157 0 .306.073.4.2.094.126.124.29.08.442z"
            })));
            r.metadata = {
                width: 24,
                height: 24
            }, t.a = r
        },
        Ukpf: function(e, t, n) {
            "use strict";
            const o = {
                inject(e) {
                    const t = document.createElement("script");
                    t.async = !0, t.src = e;
                    const n = document.body;
                    n && n.appendChild(t)
                }
            };
            t.a = o
        },
        XJCT: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return b
            })), n.d(t, "b", (function() {
                return L
            }));
            var o = n("97Jx"),
                a = n.n(o),
                i = n("ERkP"),
                r = n("t62R"),
                s = n("3XMw"),
                l = n.n(s),
                c = n("p+r5");
            const p = Object.freeze({
                password: "password",
                username: "username_or_email"
            });
            var d = ({
                name: e,
                ...t
            }) => i.createElement(c.a, a()({
                autoCapitalize: "none",
                autoCorrect: !1,
                name: `session[${e}]`,
                spellCheck: "false"
            }, t));
            const h = l.a.d1091f50,
                u = i.createElement(r.c, {
                    link: {
                        external: !0,
                        pathname: "https://twitter.com/account/begin_password_reset",
                        openInSameFrame: !0
                    }
                }, h),
                m = l.a.dec3c9b8,
                g = ({
                    helperText: e,
                    label: t,
                    withForgotPasswordLink: n,
                    ...o
                }) => i.createElement(d, a()({}, o, {
                    helperText: n ? u : e,
                    label: t || m,
                    name: p.password,
                    type: "password"
                }));
            g.defaultProps = {
                autoFocus: !1,
                withForgotPasswordLink: !1
            };
            var b = g,
                f = n("v6aA"),
                y = e => e.isTrue("responsive_web_login_input_type_email_enabled") ? "email" : void 0;
            const _ = l.a.e1ec8c17,
                x = l.a.d0a750f2,
                w = l.a.e2dd29b5,
                E = l.a.jb4eb245,
                C = ({
                    autoFocus: e,
                    label: t,
                    withUsernameDisabled: n,
                    withEmailDisabled: o,
                    withPhoneDisabled: r,
                    ...s
                }) => {
                    const {
                        featureSwitches: l
                    } = i.useContext(f.a);
                    let c = _;
                    return n ? c = x : r ? c = E : o && (c = w), i.createElement(d, a()({}, s, {
                        autoFocus: e,
                        label: t || c,
                        name: p.username,
                        type: y(l)
                    }))
                };
            C.defaultProps = {
                autoFocus: !0,
                withUsernameDisabled: !1,
                withPhoneDisabled: !1,
                withEmailDisabled: !1
            };
            var L = C
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
                return Q
            }));
            var o = n("KEM+"),
                a = n.n(o),
                i = n("ERkP"),
                r = n("pxuL"),
                s = n("zI2C"),
                l = n("aD6h"),
                c = n("rxPX"),
                p = n("zh9S"),
                d = n("RqPI"),
                h = Object(c.a)().propsFromState((() => ({
                    userLanguage: d.f
                }))).propsFromActions((() => ({
                    scribeAction: p.c
                }))),
                u = n("7JQg"),
                m = n("SrtL"),
                g = n("yt7X"),
                b = n("FQwk"),
                f = n("muX9"),
                y = n("3XMw"),
                _ = n.n(y),
                x = n("6oVL"),
                w = n("rJoH"),
                E = n("yoO3"),
                C = n("Es6L"),
                L = "signupButton",
                S = "loginButton",
                v = n("MWbm"),
                I = n("/yvb"),
                k = n("cHvH"),
                B = n("TIdA"),
                F = n("A91F"),
                T = n("rHpw"),
                W = n("t62R");
            const z = "https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png",
                D = "https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png",
                R = 500,
                H = 1e3;
            var P = n("VwDm"),
                V = n("wz7L"),
                U = n("dFWS"),
                O = n("lUZE"),
                M = n("XJCT");
            const j = [{
                    text: _.a.a62c9c33,
                    Icon: P.a
                }, {
                    text: _.a.cf39fca2,
                    Icon: V.a
                }, {
                    text: _.a.j86184fd,
                    Icon: U.a
                }],
                K = _.a.d1091f50,
                A = _.a.d9e109ae,
                X = _.a.e09659b9,
                $ = _.a.eba1b197,
                N = _.a.a565833d,
                J = _.a.e919c3bc,
                G = _.a.h0ff39da,
                q = _.a.j3f49ff6;
            class Q extends i.Component {
                constructor(e, t) {
                    super(e, t), a()(this, "_lohpRefreshEnabled", this.context.featureSwitches.isTrue("responsive_web_lohp_refresh_enabled")), a()(this, "_renderUsernameInputField", (() => i.createElement(v.a, {
                        style: Y.inputContainer
                    }, i.createElement(M.b, {
                        onChange: this._handleUsernameChange,
                        onSubmitEditing: this._handleSubmitEditing,
                        style: Y.input
                    })))), a()(this, "_renderHalfForm", (e => {
                        const {
                            usernameValue: t
                        } = this.state;
                        return i.createElement(v.a, {
                            style: [this._lohpRefreshEnabled ? Y.containerV2 : Y.container, Y.halfForm, !this._lohpRefreshEnabled && (e ? Y.centered : Y.leftAlignWithBlock)]
                        }, this._renderUsernameInputField(), i.createElement(I.a, {
                            link: {
                                pathname: "/login",
                                query: {
                                    username_or_email: t
                                }
                            },
                            onPress: this._handleHalfFormLoginClick,
                            size: "normalLarge",
                            style: Y.submitButtonStyle,
                            type: "secondary"
                        }, J))
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
                    Object(C.a)() && this.context.setSideNavSupport(!1)
                }
                componentWillUnmount() {
                    Object(C.a)() && this.context.setSideNavSupport(!0)
                }
                render() {
                    return i.createElement(E.a, null, i.createElement(m.a, {
                        title: G
                    }), i.createElement(w.a, {
                        canonical: "https://twitter.com/",
                        description: q,
                        title: G,
                        type: "website"
                    }), i.createElement(s.a, {
                        deepLink: "twitter://"
                    }), i.createElement(f.a, null, i.createElement("meta", {
                        content: "NOODP",
                        name: "robots"
                    }), i.createElement("meta", {
                        content: q,
                        name: "description"
                    })), i.createElement(k.a, null, (({
                        windowWidth: e,
                        windowHeight: t
                    }) => {
                        const {
                            deviceSize: n,
                            isScreenLarge: o,
                            isLoginFormCentered: a,
                            showLoginForm: r
                        } = ((e, t) => {
                            const n = e >= T.a.theme.breakpoints.large;
                            return {
                                deviceSize: e > H ? "desktop" : e > R ? "tablet" : void 0,
                                isScreenLarge: n,
                                isLoginFormCentered: e / 2 - (e / 4 - 190) < T.a.theme.breakpoints.medium,
                                showLoginForm: e / 2 > 500 && t >= 750
                            }
                        })(e, t);
                        return i.createElement(v.a, {
                            style: Z.root
                        }, i.createElement(v.a, {
                            style: [Z.main, this._lohpRefreshEnabled ? "desktop" === n && Z.mainWide : o && Z.mainWide]
                        }, this._renderCTA({
                            deviceSize: n,
                            isScreenLarge: o,
                            isLoginFormCentered: a,
                            showLoginForm: r
                        }), this._renderHero(n, o), this._renderSignUpButtons(o)), i.createElement(l.a.Configure, {
                            hideEUBanner: !0
                        }), i.createElement(g.a, null), i.createElement(b.a, {
                            align: "center"
                        }))
                    })))
                }
                _renderHero(e, t) {
                    const {
                        variants: n,
                        original: o
                    } = (e => {
                        const t = null == e ? void 0 : e.startsWith("en");
                        return {
                            variants: [{
                                uri: t ? "https://abs.twimg.com/sticky/illustrations/lohp_en_850x623.png" : "https://abs.twimg.com/sticky/illustrations/lohp_850x623.png",
                                width: 850,
                                height: 623
                            }, {
                                uri: t ? z : D,
                                width: 1302,
                                height: 955
                            }],
                            original: {
                                url: t ? z : D,
                                width: 1302,
                                height: 958
                            }
                        }
                    })(this.props.userLanguage);
                    return i.createElement(v.a, {
                        style: [Z.block, Z.communication, !this._lohpRefreshEnabled && t && Z.blockWide, this._lohpRefreshEnabled && Z.blockHero]
                    }, this._lohpRefreshEnabled ? i.createElement(v.a, {
                        style: Z.blockImg
                    }, i.createElement(B.a, {
                        accessibilityLabel: "",
                        aspectMode: F.a.COVER,
                        backgroundColor: T.a.theme.colors.blue500,
                        customVariants: n,
                        draggable: !1,
                        image: o
                    }), i.createElement(O.a, {
                        style: [Z.twitterIconHero, "desktop" === e && Z.twitterIconHeroWide]
                    })) : i.createElement(i.Fragment, null, i.createElement(O.a, {
                        style: [Z.twitterIconBg, t ? Z.twitterIconBgWide : Z.twitterIconBgNarrow]
                    }), this._renderCommunicationItems()))
                }
                _renderCommunicationItems() {
                    const e = j.length;
                    return i.createElement(v.a, {
                        style: Z.communicationItems
                    }, j.map((({
                        Icon: t,
                        text: n
                    }, o) => {
                        const a = o + 1 === e;
                        return i.createElement(v.a, {
                            key: n,
                            style: [Z.communicationItem, a && Z.communicationItemLast]
                        }, i.createElement(t, {
                            style: Z.communicationItemIcon
                        }), i.createElement(W.c, {
                            color: "white",
                            size: "large",
                            style: Z.communicationItemText,
                            weight: "bold"
                        }, n))
                    })))
                }
                _renderCTA({
                    deviceSize: e,
                    isScreenLarge: t,
                    isLoginFormCentered: n,
                    showLoginForm: o
                }) {
                    const a = this._lohpRefreshEnabled ? e ? Z.ctaButton : Z.ctaButtonMobile : Z.happeningButton;
                    return i.createElement(v.a, {
                        style: [Z.block, !this._lohpRefreshEnabled && t && Z.blockWide, this._lohpRefreshEnabled && Z.blockCTA, this._lohpRefreshEnabled && "tablet" === e && Z.blockTabletCTA]
                    }, o ? this._renderLoginForm(n) : null, i.createElement(v.a, {
                        style: [this._lohpRefreshEnabled ? Z.blockInnerWrapperV2 : Z.blockInnerWrapper, this._lohpRefreshEnabled && "desktop" === e && Z.blockInnerWrapperWide]
                    }, i.createElement(O.a, {
                        style: Z.twitterIcon
                    }), this._lohpRefreshEnabled ? i.createElement(W.c, {
                        font: "chirp",
                        size: e ? "colossal" : "giant",
                        style: e ? Z.ctaTitleLarge : Z.ctaTitle,
                        weight: "bold"
                    }, $) : i.createElement(W.c, {
                        size: "jumbo",
                        style: Z.seeWhatsHappening,
                        weight: "bold"
                    }, X), this._lohpRefreshEnabled ? i.createElement(W.c, {
                        font: "chirp",
                        size: e ? "jumbo" : "xLarge",
                        style: e ? Z.ctaTextLarge : Z.ctaText,
                        weight: "bold"
                    }, A) : i.createElement(W.c, {
                        style: Z.joinToday,
                        weight: "bold"
                    }, A), i.createElement(v.a, {
                        style: this._lohpRefreshEnabled && "tablet" === e ? Z.ctaButtonContainer : void 0
                    }, i.createElement(I.a, {
                        link: "/i/flow/signup",
                        onPress: this._handleSignupButton,
                        size: "normalLarge",
                        style: [a, this._lohpRefreshEnabled && "tablet" === e ? Z.ctaButtonSplitSpacing : void 0],
                        testID: L,
                        type: "primary"
                    }, N), i.createElement(I.a, {
                        link: "/login",
                        onPress: this._handleLoginButton,
                        size: "normalLarge",
                        style: a,
                        testID: S,
                        type: "secondary"
                    }, J))))
                }
                _renderLoginForm(e) {
                    const {
                        autoSubmit: t,
                        usernameValue: n
                    } = this.state, o = n ? `?account_identifier=${n}` : "", a = this.context.featureSwitches.getValue("responsive_web_inline_login_box_enabled"), r = "full" === a;
                    return "none" === a ? null : "half" === a ? this._renderHalfForm(e) : r ? i.createElement(v.a, {
                        style: [this._lohpRefreshEnabled ? Y.containerV2 : Y.container, !this._lohpRefreshEnabled && (e ? Y.centered : Y.leftAlignWithBlock)]
                    }, i.createElement(x.a, {
                        autoSubmit: t,
                        horizontalLayout: !0,
                        submitButtonSize: "normalLarge",
                        submitButtonStyle: Y.submitButtonStyle,
                        submitButtonType: "secondary"
                    }, this._renderUsernameInputField(), i.createElement(v.a, {
                        style: Y.inputContainer
                    }, i.createElement(M.a, {
                        onSubmitEditing: this._handleSubmitEditing,
                        style: Y.input
                    }), i.createElement(W.c, {
                        link: {
                            pathname: `https://twitter.com/account/begin_password_reset${o}`,
                            external: !0,
                            openInSameFrame: !0
                        },
                        size: "small",
                        style: Y.forgotPassword
                    }, K)))) : void 0
                }
                _renderSignUpButtons(e) {
                    return e || this._lohpRefreshEnabled ? null : i.createElement(v.a, {
                        style: [Z.block, Z.bottomButtonsBlock]
                    }, i.createElement(I.a, {
                        link: "/i/flow/signup",
                        onPress: this._handleSignupButton,
                        size: "normalLarge",
                        style: [Z.bottomButton, Z.bottomButtonLeft],
                        type: "primary"
                    }, N), i.createElement(I.a, {
                        link: "/login",
                        onPress: this._handleLoginButton,
                        size: "normalLarge",
                        style: [Z.bottomButton, Z.bottomButtonRight],
                        type: "secondary"
                    }, J))
                }
            }
            a()(Q, "contextType", r.a);
            const Y = T.a.create((e => ({
                    container: {
                        alignItems: "center",
                        maxWidth: e.breakpoints.medium,
                        paddingHorizontal: e.spaces.space16,
                        position: "absolute",
                        top: e.spaces.space16
                    },
                    containerV2: {
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
                    centered: {
                        left: "0px",
                        maxWidth: "unset",
                        width: "100%"
                    },
                    leftAlignWithBlock: {
                        left: `calc(50% - 190px - ${e.spaces.space16})`
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
                Z = T.a.create((e => ({
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
                    blockWide: {
                        flex: 1
                    },
                    blockHero: {
                        flex: 1,
                        padding: 0,
                        minHeight: "45vh"
                    },
                    blockImg: { ...T.a.absoluteFillObject,
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
                        alignSelf: "center",
                        maxWidth: "380px"
                    },
                    blockInnerWrapperV2: {
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
            t.default = Object(u.c)({
                page: "front"
            })(h(Q))
        },
        "p+r5": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return C
            }));
            var o = n("97Jx"),
                a = n.n(o),
                i = n("KEM+"),
                r = n.n(i),
                s = n("ERkP"),
                l = n("t62R"),
                c = n("piX5"),
                p = n("3XMw"),
                d = n.n(p),
                h = n("tI3i"),
                u = n.n(h),
                m = n("oQhu"),
                g = n("rHpw"),
                b = n("aITJ"),
                f = n("MWbm"),
                y = (n("aWzz"), n("Oib4")),
                _ = n("WtWS"),
                x = n("ioan");
            const w = e => e.length,
                E = (e, t = w) => t(e);
            class C extends s.Component {
                constructor(e) {
                    super(e), r()(this, "_blurOnBackspaceKeyUpForKaiOS", !1), r()(this, "_isLabelLarge", (() => {
                        const {
                            isFocused: e,
                            actualCount: t
                        } = this.state;
                        return !t && !e
                    })), r()(this, "_getTextInputStyle", Object(m.a)((e => [L.root, !e && L.disabled]))), r()(this, "_calculateLength", (e => E(e, this.props.calculateLength))), r()(this, "_shouldRenderDisplayCount", (() => {
                        const {
                            isFocused: e
                        } = this.state, t = this._isFormInvalid();
                        return Boolean((e || t) && this._getMaxDisplayCount())
                    })), r()(this, "_handleBlur", (e => {
                        const {
                            onBlur: t
                        } = this.props, {
                            value: n
                        } = e.currentTarget, o = this._calculateLength(n);
                        this.setState({
                            isFocused: !1,
                            displayCount: o,
                            actualCount: n.length
                        }), t && t(e)
                    })), r()(this, "_handleChange", (e => {
                        const {
                            onChange: t
                        } = this.props, {
                            value: n
                        } = e.currentTarget, o = this._calculateLength(n);
                        this.setState({
                            isFocused: !0,
                            displayCount: o,
                            actualCount: n.length
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
                        u()(!(!l && s && !r), "A controlled component, a component with a value prop, must have an onChange handler. The value prop cannot be undefined."), u()(!(n && o && o > n), "Max length should be equal or greater than valid length."), u()(!(void 0 !== n && n <= 0 || void 0 !== o && o <= 0), "Set editable to false instead of limiting the valid character count to 0.")
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
                    } = e, a = "string" == typeof o ? E(o, n) : 0;
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
                    return s.createElement(f.a, {
                        style: [S.root, o]
                    }, s.createElement(f.a, {
                        accessibilityLabel: e,
                        accessibilityRole: "label",
                        style: [c.a.border, S.textInputFormStyle, r && c.a.invalidBorderColor, i && r && c.a.focusedBorderInvalid, i && !r && c.a.focusedBorderValid, !a && c.a.disabled]
                    }, s.createElement(f.a, {
                        style: S.textInputFormWrapper
                    }, s.createElement(f.a, {
                        style: [S.textInputHeader]
                    }, this._renderLabel(), this._shouldRenderDisplayCount() ? this._renderDisplayCount() : null), this._renderTextInput())), s.createElement(f.a, {
                        style: [S.sidePadding, S.underTextInputForm]
                    }, s.createElement(f.a, {
                        style: S.subtextWrapper
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
                        style: [S.textInputHeaderItem, a && {
                            paddingTop: g.a.theme.spaces.space16
                        }, S.transition]
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
                        label: p,
                        maxLength: d,
                        onBlur: h,
                        onChange: u,
                        onSubmitEditing: m,
                        onFocus: g,
                        onKeyDown: b,
                        onKeyPress: y,
                        onKeyUp: _,
                        showValidationIcon: w,
                        style: E,
                        validLength: C,
                        ...S
                    } = this.props, v = this.getValue(), I = this._calculateLength(v), k = d ? d + v.length - I : void 0;
                    return s.createElement(f.a, {
                        style: L.container
                    }, r && !this._isLabelLarge() ? this._renderIcon() : null, s.createElement(l.c, {
                        size: "large",
                        style: L.wrapper
                    }, s.createElement(x.a, a()({}, S, {
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
                    return s.createElement(f.a, {
                        accessibilityLiveRegion: "polite"
                    }, s.createElement(l.c, {
                        color: "gray600",
                        size: "small",
                        style: S.subtext
                    }, this.props.helperText))
                }
                _renderErrorText() {
                    return s.createElement(f.a, {
                        accessibilityLiveRegion: "assertive"
                    }, s.createElement(l.c, {
                        color: "red500",
                        size: "small",
                        style: S.subtext
                    }, this.props.errorText))
                }
                _renderDisplayCount() {
                    const {
                        displayCount: e
                    } = this.state, t = this._getMaxDisplayCount(), n = this._exceedsValidLength(e), o = t && d.a.ia24dc8c(t), a = d.a.ia24dc8c(e);
                    return s.createElement(f.a, {
                        accessibilityLiveRegion: "polite",
                        style: [S.textInputHeaderItem, S.displayCount]
                    }, s.createElement(l.c, {
                        color: n ? "red500" : "gray600",
                        size: "small"
                    }, o ? `${a}/${o}` : ""))
                }
                _renderIcon() {
                    const {
                        Icon: e
                    } = this.props, {
                        isFocused: t
                    } = this.state, n = [S.icon, t && S.focusedIcon];
                    return e && s.createElement(e, {
                        style: n
                    })
                }
                _renderValidationIcon() {
                    return this._isFormInvalid() ? s.createElement(y.a, {
                        style: [S.validationIcon, c.a.invalidColor]
                    }) : s.createElement(_.a, {
                        style: [S.validationIcon, c.a.validColor]
                    })
                }
                _isFormInvalid() {
                    const {
                        displayCount: e
                    } = this.state;
                    return this.props.invalid || this._exceedsValidLength(e) || !1
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
            r()(C, "defaultProps", {
                autoComplete: "on",
                autoCorrect: !0,
                autoFocus: !1,
                editable: !0,
                invalid: !1
            }), C.propTypes = {};
            const L = g.a.create((e => ({
                    container: {
                        flexDirection: "row",
                        flexGrow: 1,
                        flexShrink: 1,
                        overflow: "hidden",
                        paddingBottom: e.spaces.space4,
                        paddingHorizontal: e.spaces.space4,
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
                S = g.a.create((e => ({
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
                        paddingTop: e.spaces.space4,
                        paddingHorizontal: e.spaces.space4
                    },
                    displayCount: {
                        flexGrow: 1,
                        alignItems: "flex-end"
                    },
                    sidePadding: {
                        paddingHorizontal: e.spaces.space4
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
                r = n("v6aA"),
                s = n("6/RC"),
                l = n.n(s),
                c = n("rxPX"),
                p = n("RqPI"),
                d = Object(c.a)().propsFromState((() => ({
                    currentCountry: p.l
                }))),
                h = n("s9SB"),
                u = n.n(h),
                m = n("MWbm"),
                g = n("t62R"),
                b = n("cHvH"),
                f = n("rHpw"),
                y = n("/yvb"),
                _ = n("3XMw"),
                x = n.n(_),
                w = n("cnVF");
            const E = (e, t, n) => {
                    const o = e.indexOf(t.toLowerCase()) > -1,
                        a = n[w.i];
                    return o && "1" !== a
                },
                C = x.a.ia5e7487;
            class L extends i.Component {
                constructor(...e) {
                    super(...e), a()(this, "state", {
                        euWarningIsOpen: !1
                    }), a()(this, "_renderMessage", (() => i.createElement(g.c, {
                        color: "white",
                        size: "small"
                    }, i.createElement(x.a.I18NFormatMessage, {
                        $i18n: "i3c34582"
                    }, i.createElement(g.c, {
                        color: "white",
                        link: "https://help.twitter.com/rules-and-policies/twitter-cookies",
                        style: S.link
                    }, x.a.fd0ff73b))))), a()(this, "_handleEUBannerClose", (() => {
                        l.a.canUseDOM && (document.cookie = u.a.serialize(w.i, "1", {
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
                    } = this.props, t = this.context.featureSwitches.getArrayValue("responsive_web_eu_countries", []), n = s.canUseDOM ? u.a.parse(document.cookie) : {};
                    this.setState({
                        euWarningIsOpen: !!e && E(t, e, n)
                    })
                }
                render() {
                    return this.state.euWarningIsOpen ? i.createElement(b.a, null, (({
                        windowWidth: e
                    }) => {
                        const t = e < f.a.theme.breakpoints.medium;
                        return i.createElement(m.a, {
                            style: [S.root, t && S.rootNarrow]
                        }, this._renderMessage(), i.createElement(y.a, {
                            onPress: this._handleEUBannerClose,
                            size: "normal",
                            style: [S.closeButton, t && S.closeButtonNarrow],
                            type: "invertedSecondary"
                        }, C))
                    })) : null
                }
            }
            a()(L, "contextType", r.a);
            const S = f.a.create((e => ({
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
                v = d(L);
            t.a = v
        }
    }
]);
//# sourceMappingURL=https://ton.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.LoggedOutHome.b07c8cf5.js.map