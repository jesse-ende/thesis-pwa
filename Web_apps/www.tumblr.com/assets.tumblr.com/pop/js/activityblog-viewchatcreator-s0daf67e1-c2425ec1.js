(window.webpackJsonp = window.webpackJsonp || []).push([
    [7], {
        "0XM6": function(e, a, t) {
            "use strict";
            var c = t("q1tI"),
                n = t.n(c),
                r = t("s2Hx"),
                l = Object(r.c)(n.a.createElement("svg", {
                    viewBox: "0 0 13.8 19.6"
                }, n.a.createElement("path", {
                    d: "M3.5 19.5c-.1 0-.2-.1-.2-.1-.6-.3-.9-.9-.7-1.5l2.2-5.8H1.3c-.1 0-.3 0-.4-.1-.4-.1-.6-.3-.8-.6-.2-.4-.2-1 .2-1.4L8.9.5c.3-.4.9-.6 1.4-.4.1 0 .2.1.2.1.6.3.9.9.7 1.5L9 7h3.5c.1 0 .3 0 .4.1.4.1.6.5.7.8.2.4.2 1-.2 1.4L4.8 19c-.2.3-.6.5-1 .5 0 .1-.2.1-.3 0z"
                })));
            l.defaultProps = {
                size: {
                    width: 24,
                    height: 24
                }
            }, a.a = l
        },
        "44HM": function(e, a, t) {
            "use strict";
            var c = t("q1tI"),
                n = t.n(c),
                r = t("fSeh"),
                l = t("s2Hx"),
                o = Object(l.c)(n.a.createElement("svg", {
                    viewBox: "0 0 21.8 21.8"
                }, n.a.createElement("path", {
                    d: "M10.9 21.8C4.9 21.8 0 16.9 0 10.9S4.9 0 10.9 0s10.9 4.9 10.9 10.9-4.9 10.9-10.9 10.9zM12 2.1c-.5-.1-1.8-.1-2 0-4.1.4-7.5 3.7-8 7.8-.1.5-.1 1.8 0 2 .4 4.2 3.8 7.6 8 8h2c4.1-.5 7.4-3.8 7.8-8v-2C19.2 5.8 16 2.6 12 2.1zm1.7 11.3c-.1.2-.2.3-.4.4l-6.7 2.5c-.5.2-1.1-.3-.9-.9l2.5-6.7c.1-.2.2-.3.4-.4l6.7-2.5c.5-.2 1.1.3.9.9l-2.5 6.7zm-1.9-3.3c-.5-.5-1.3-.5-1.7 0-.5.5-.5 1.3 0 1.7.5.5 1.3.5 1.7 0 .4-.4.4-1.2 0-1.7z"
                })));
            o.defaultProps = {
                fill: r.white,
                size: {
                    width: 22,
                    height: 24
                }
            }, a.a = o
        },
        "63zW": function(e, a, t) {
            "use strict";
            var c = t("yXPU"),
                n = t.n(c),
                r = t("lSNA"),
                l = t.n(r),
                o = t("E+oP"),
                s = t.n(o),
                i = t("sEfC"),
                h = t.n(i),
                p = t("o0o1"),
                m = t.n(p),
                d = t("q1tI"),
                u = t.n(d),
                g = t("Ty5D"),
                v = t("i8i4"),
                f = t("nA7Y"),
                b = t("7cHs"),
                E = t("o0Qe"),
                C = t("Mjgw"),
                w = Object(C.a)((() => Promise.all([t.e(0), t.e(2), t.e(1), t.e(34)]).then(t.bind(null, "Pz2N"))), "AsyncTypeaheadDropdown"),
                O = t("svZL"),
                M = t("EilA"),
                y = t("yBJ7"),
                L = t("Qtnd"),
                T = t("fSeh"),
                x = t.n(T),
                k = t("Jq/n"),
                S = t("iOo1"),
                P = t("o56e"),
                j = t("Qnxz");
            class H extends d.Component {
                constructor() {
                    super(...arguments), l()(this, "state", {
                        searchKeyword: this.props.initialSearchTerm,
                        followedTags: [],
                        searchTags: [],
                        searchBlogs: [],
                        isOpen: !1,
                        hasFocus: !1,
                        hasRequestedFollowedTags: !1,
                        isLoading: !1
                    }), l()(this, "debounceDelay", 250), l()(this, "debouncedTypeaheadSearch", h()(this.typeaheadSearch, this.debounceDelay)), l()(this, "inputRef", Object(d.createRef)()), l()(this, "apiHelper", Object(L.a)(this.props.appContext.apiFetch)), l()(this, "renderSearchForm", (() => {
                        var e = this.props,
                            a = e.theme,
                            t = e.enableTypeahead,
                            c = e.initialSearchTerm,
                            n = e.appContext._t,
                            r = this.state,
                            l = r.isOpen,
                            o = r.searchKeyword,
                            s = r.hasFocus,
                            i = r.isLoading,
                            h = !t || !l && !s && !(o === c && !("" === o)),
                            p = a === b.b.Transparent && h,
                            m = a === b.b.TransparentDark && h,
                            d = Object(k.a)({
                                [j.a.searchbarContainer]: !0,
                                [j.a.transparent]: p,
                                [j.a.transparentDark]: m
                            });
                        return u.a.createElement("form", {
                            method: "GET",
                            action: "//www.tumblr.com/search",
                            role: "search",
                            className: j.a.form,
                            onSubmit: this.submitForm
                        }, u.a.createElement("div", {
                            className: d
                        }, u.a.createElement("div", {
                            className: j.a.searchIcon
                        }, u.a.createElement(E.a, {
                            size: {
                                width: 18,
                                height: 18
                            }
                        })), u.a.createElement(M.c, {
                            hotkey: {
                                key: M.b.Slash,
                                command: this.focus,
                                modifiers: {
                                    [M.a.Shift]: !0
                                }
                            },
                            disable: s ? M.d : []
                        }, u.a.createElement("input", {
                            name: "q",
                            type: "text",
                            autoComplete: "off",
                            ref: this.inputRef,
                            value: o,
                            "aria-label": n("Search"),
                            className: j.a.searchbar,
                            placeholder: n("Search Tumblr"),
                            onBlur: this.onInputBlur,
                            onFocus: this.onInputFocus,
                            onChange: this.onInputChange
                        })), i && u.a.createElement("div", {
                            className: j.a.loaderContainer
                        }, u.a.createElement(y.b, {
                            small: !0,
                            centerOrientation: y.a.HorizontalAndVertical,
                            color: p || m ? x.a.paletteTransparentWhite65 : x.a.paletteGray40
                        }))))
                    })), l()(this, "onInputChange", (e => {
                        var a = e.target.value;
                        return this.setState({
                            searchKeyword: a
                        }, (() => this.props.enableTypeahead && this.debouncedTypeaheadSearch()))
                    })), l()(this, "onInputFocus", (() => {
                        var e = this.props,
                            a = e.enableTypeahead,
                            t = e.appContext.isLoggedIn,
                            c = this.state.hasRequestedFollowedTags;
                        this.setState({
                            hasFocus: !0
                        }), a && !c && t && this.requestFollowedTags()
                    })), l()(this, "onInputBlur", (() => this.setState({
                        hasFocus: !1
                    }))), l()(this, "renderSearchFormWithTypeahead", (() => {
                        var e = this.state.isOpen,
                            a = this.props,
                            t = a.isTypeaheadFullscreen,
                            c = a.glassContext.glassContainerRef;
                        return t ? u.a.createElement(u.a.Fragment, null, this.renderSearchForm(), e && this.hasResults() && c && Object(v.createPortal)(this.renderTypeahead(), c)) : u.a.createElement(O.c, {
                            isOpen: e,
                            skipClickToOpen: !0,
                            toggle: this.onControlledPopoverClose,
                            tabIndex: -1,
                            width: "100%",
                            height: "auto",
                            maxHeight: "70vh",
                            type: f.c.Click,
                            component: this.renderTypeahead()
                        }, this.renderSearchForm())
                    })), l()(this, "renderTypeahead", (() => {
                        var e = this.props.isTypeaheadFullscreen,
                            a = this.state,
                            t = a.followedTags,
                            c = a.searchTags,
                            n = a.searchBlogs,
                            r = a.searchKeyword;
                        return u.a.createElement(w, {
                            followedTags: t,
                            tags: c,
                            blogs: n,
                            query: r,
                            isFullscreen: e,
                            closeContainingPopover: this.onControlledPopoverClose
                        })
                    })), l()(this, "onControlledPopoverClose", (() => {
                        this.inputRef.current && this.inputRef.current.blur(), this.setState({
                            isOpen: !1
                        })
                    })), l()(this, "focus", (() => this.inputRef.current && this.inputRef.current.focus())), l()(this, "submitForm", (e => {
                        var a = this.props.hardLinkToSearchPage;
                        e.preventDefault();
                        var t = e.target.querySelector('input[name="q"]'),
                            c = Object(S.b)(t.value),
                            n = "/search/".concat(c);
                        "/search/" === n && (n = "/explore/", a = !0), a ? location.assign(n) : (this.props.history.push(n), this.onControlledPopoverClose())
                    })), l()(this, "hasResults", (() => {
                        var e = this.state,
                            a = e.followedTags,
                            t = e.searchTags,
                            c = e.searchBlogs;
                        return !s()(a) || !s()(t) || !s()(c)
                    }))
                }
                componentDidUpdate(e) {
                    this.updateOpenState(), this.props.initialSearchTerm !== e.initialSearchTerm && this.setState({
                        searchKeyword: this.props.initialSearchTerm
                    })
                }
                componentDidMount() {
                    this.props.autoFocus && this.focus(), "" !== this.state.searchKeyword && this.debouncedTypeaheadSearch()
                }
                render() {
                    var e = this.props.enableTypeahead;
                    return u.a.createElement("div", {
                        className: j.a.formContainer
                    }, e ? this.renderSearchFormWithTypeahead() : this.renderSearchForm())
                }
                typeaheadSearch() {
                    var e = this;
                    return n()(m.a.mark((function a() {
                        var t, c, n, r, l;
                        return m.a.wrap((function(a) {
                            for (;;) switch (a.prev = a.next) {
                                case 0:
                                    if (!(t = e.state.searchKeyword)) {
                                        a.next = 12;
                                        break
                                    }
                                    return e.setState({
                                        isLoading: !0
                                    }), a.next = 5, e.apiHelper.getSearch(t).fetch();
                                case 5:
                                    c = a.sent, n = c.response, r = n.tags, l = n.blogs, e.setState({
                                        searchTags: null != r && r.length ? r : [{
                                            tag: t
                                        }],
                                        searchBlogs: l || [],
                                        isLoading: !1
                                    }), a.next = 13;
                                    break;
                                case 12:
                                    e.setState({
                                        searchTags: [],
                                        searchBlogs: [],
                                        isLoading: !1
                                    });
                                case 13:
                                case "end":
                                    return a.stop()
                            }
                        }), a)
                    })))()
                }
                requestFollowedTags() {
                    var e = this;
                    return n()(m.a.mark((function a() {
                        var t, c;
                        return m.a.wrap((function(a) {
                            for (;;) switch (a.prev = a.next) {
                                case 0:
                                    return e.setState({
                                        hasRequestedFollowedTags: !0,
                                        isLoading: !0
                                    }), a.next = 3, e.apiHelper.getTags().fetch();
                                case 3:
                                    t = a.sent, c = t.response.tags, e.setState({
                                        followedTags: c || [],
                                        isLoading: !1
                                    });
                                case 6:
                                case "end":
                                    return a.stop()
                            }
                        }), a)
                    })))()
                }
                updateOpenState() {
                    var e = this.state,
                        a = e.isOpen,
                        t = e.hasFocus;
                    !a && t && this.hasResults() && this.setState({
                        isOpen: !0
                    })
                }
            }
            l()(H, "defaultProps", {
                theme: void 0,
                enableTypeahead: !0,
                isTypeaheadFullscreen: !1,
                autoFocus: !1,
                initialSearchTerm: ""
            });
            var B = Object(P.b)(H, {
                    appContext: !0,
                    glassContext: !0
                }),
                z = Object(g.o)(B);
            class F extends d.Component {
                render() {
                    return u.a.createElement(z, this.props)
                }
            }
            l()(F, "defaultProps", H.defaultProps);
            a.a = F
        },
        "7cHs": function(e, a, t) {
            "use strict";
            var c, n;
            t.d(a, "b", (function() {
                    return c
                })), t.d(a, "a", (function() {
                    return n
                })), t.d(a, "c", (function() {
                    return r
                })),
                function(e) {
                    e[e.Light = 0] = "Light", e[e.Transparent = 1] = "Transparent", e[e.TransparentDark = 2] = "TransparentDark"
                }(c || (c = {})),
                function(e) {
                    e[e.Color = 0] = "Color", e[e.Greyscale = 1] = "Greyscale", e[e.TransparentDark = 2] = "TransparentDark"
                }(n || (n = {}));
            var r = {
                [c.Light]: n.Color,
                [c.Transparent]: n.Color,
                [c.TransparentDark]: n.TransparentDark
            }
        },
        "9dvD": function(e, a, t) {
            "use strict";
            var c = t("pVnL"),
                n = t.n(c),
                r = t("q1tI"),
                l = t.n(r),
                o = t("Ty5D"),
                s = t("mUOm"),
                i = t("ZGts"),
                h = t("IOJt"),
                p = t("7cHs"),
                m = t("ofoP"),
                d = t("U2YJ"),
                u = t("w1vF"),
                g = t("63zW"),
                v = t("zoQI"),
                f = t("Jq/n"),
                b = t("BgJd"),
                E = t("KbUr"),
                C = t("7lbS"),
                w = function(e) {
                    var a = e.children,
                        t = e.label,
                        c = e.isActive,
                        n = e.link,
                        o = e.useRouter,
                        s = e.notificationCount,
                        i = l.a.createElement(r.Fragment, null, l.a.createElement(v.a, {
                            wrapperClassName: C.a.menuTargetWrapper,
                            className: Object(f.a)({
                                [C.a.menuTarget]: !0,
                                [C.a.activeButton]: c
                            }),
                            label: t
                        }, a), l.a.createElement(E.a, {
                            count: s
                        }));
                    return l.a.createElement("div", {
                        className: C.a.menuContainer
                    }, o ? l.a.createElement(b.a, {
                        to: n,
                        tabIndex: -1
                    }, i) : l.a.createElement("a", {
                        href: n,
                        tabIndex: -1
                    }, i))
                },
                O = t("lSNA"),
                M = t.n(O),
                y = t("ghwC"),
                L = t("nA7Y"),
                T = t("svZL"),
                x = t("bt0A");
            class k extends r.Component {
                constructor() {
                    super(...arguments), M()(this, "state", {
                        error: null
                    })
                }
                static getDerivedStateFromError(e) {
                    return {
                        error: e
                    }
                }
                render() {
                    var e = this.state.error;
                    return e ? this.props.FallbackComponent ? l.a.createElement(this.props.FallbackComponent, {
                        error: e
                    }) : null : this.props.children
                }
            }
            var S = t("dRu9"),
                P = t("+l2X"),
                j = {
                    [S.b]: P.a.entering,
                    [S.d]: P.a.exiting,
                    transitionDurationMS: x.popoverTransitionTimeMs
                };
            class H extends r.Component {
                constructor() {
                    super(...arguments), M()(this, "renderPopoverContent", (() => {
                        var e = this.props,
                            a = e.children,
                            t = e.label,
                            c = e.isActive,
                            n = e.notificationCount;
                        return l.a.createElement(v.a, {
                            wrapperClassName: C.a.menuTargetWrapper,
                            label: t
                        }, l.a.createElement("span", {
                            className: Object(f.a)({
                                [C.a.menuTarget]: !0,
                                [C.a.activeButton]: c
                            })
                        }, a), l.a.createElement(E.a, {
                            count: n
                        }))
                    }))
                }
                render() {
                    var e = this.props,
                        a = e.componentWidth,
                        t = e.componentMaxHeight,
                        c = e.component,
                        r = e.showOverflowY,
                        o = e.controlledPopoverProps,
                        s = {
                            showOverflowY: r,
                            transitionStyles: j,
                            component: l.a.createElement(k, {
                                key: this.props.label
                            }, c),
                            height: "auto",
                            position: L.b.Bottom,
                            width: a,
                            isFlipEnabled: !1,
                            maxHeight: t,
                            closeForAllExternalClicks: !0
                        };
                    return l.a.createElement("div", {
                        className: C.a.menuContainer
                    }, o ? l.a.createElement(T.c, n()({}, s, o), this.renderPopoverContent()) : l.a.createElement(y.a, s, this.renderPopoverContent()))
                }
            }
            var B = t("Mjgw"),
                z = Object(B.a)((() => Promise.all([t.e(0), t.e(2), t.e(10), t.e(1), t.e(27)]).then(t.bind(null, "PBMN"))), "AsyncAccountPopover"),
                F = t("s3eR"),
                A = t("44HM"),
                N = t("eqn+"),
                R = t("Mnvm"),
                q = t("0XM6"),
                I = t("VLpw"),
                V = t("kGKH"),
                Z = Object(B.a)((() => Promise.all([t.e(0), t.e(2), t.e(14), t.e(1), t.e(18), t.e(28)]).then(t.bind(null, "gspZ"))), "AsyncActivityPopover"),
                D = t("r7dO"),
                W = t("LaI+"),
                G = t("b8YD");
            class J extends r.Component {
                constructor() {
                    super(...arguments), M()(this, "state", {
                        isOpen: !1
                    }), M()(this, "toggle", (() => this.setState((e => ({
                        isOpen: !e.isOpen
                    })))))
                }
                render() {
                    var e = this.props.popoverMenuItemProps,
                        a = this.state.isOpen;
                    return l.a.createElement(H, n()({}, e, {
                        controlledPopoverProps: {
                            isOpen: a,
                            toggle: this.toggle
                        },
                        component: l.a.createElement("div", {
                            className: G.a.messagingPopover
                        }, l.a.createElement(W.a, null))
                    }))
                }
            }
            var U = t("y4uf"),
                Y = t("MLOt"),
                K = {
                    width: 22,
                    height: 22
                },
                Q = e => {
                    var a = e.activePage,
                        t = e.headerTheme,
                        c = e.showLimitedHeader,
                        r = e.transparentBackground,
                        v = e.hardLinkNavigation,
                        b = e.blogName,
                        E = e.inboxCount,
                        C = e.unseenPostCount,
                        O = e.notificationCount,
                        M = e.unreadMessagesCount,
                        y = e.privateGroupBlogUnreadPostCount,
                        L = e.hideLoggedOutButtons,
                        T = e.hideLoginButton,
                        x = e.hideSignUpButton,
                        k = e.shouldNotRedirectBackOnLogin,
                        S = e.followBlogName,
                        P = Object(U.c)(),
                        j = P._t,
                        B = P.isLoggedIn,
                        W = "";
                    Object(i.q)(a) && a.extraAttributes && (W = a.extraAttributes.searchTerm);
                    var G = !c && l.a.createElement("div", {
                            className: Y.a.menuRight
                        }, l.a.createElement(w, {
                            link: m.a.dashboard,
                            useRouter: !0,
                            label: j("Home"),
                            isActive: Object(i.k)(a),
                            notificationCount: C
                        }, l.a.createElement(F.a, {
                            size: {
                                width: 20,
                                height: 21
                            }
                        })), l.a.createElement(w, {
                            useRouter: !0,
                            link: Object(o.i)(m.a.explore, {
                                exploreMode: h.a.Recommended
                            }),
                            label: j("Explore"),
                            isActive: Object(i.h)(a)
                        }, l.a.createElement(A.a, {
                            size: K
                        })), l.a.createElement(w, {
                            link: m.a.inbox,
                            useRouter: !0,
                            label: j("Inbox"),
                            isActive: Object(i.l)(a),
                            notificationCount: E
                        }, l.a.createElement(N.a, {
                            size: {
                                width: 23,
                                height: 21
                            }
                        })), l.a.createElement(J, {
                            popoverMenuItemProps: {
                                children: l.a.createElement(R.a, {
                                    size: K
                                }),
                                componentWidth: 280,
                                componentMaxHeight: 490,
                                label: j("Messaging"),
                                isActive: Object(i.n)(a),
                                showOverflowY: !0,
                                notificationCount: M
                            }
                        }), l.a.createElement(H, {
                            component: l.a.createElement(Z, null),
                            componentWidth: 380,
                            componentMaxHeight: "90vh",
                            label: j("Activity"),
                            isActive: Object(i.c)(a),
                            notificationCount: O,
                            showOverflowY: !0
                        }, l.a.createElement(q.a, {
                            size: {
                                width: 14,
                                height: 21
                            }
                        })), l.a.createElement(H, {
                            component: l.a.createElement(z, {
                                activePage: a
                            }),
                            componentWidth: 240,
                            componentMaxHeight: "90vh",
                            label: j("Account"),
                            isActive: Object(i.b)(a),
                            notificationCount: y
                        }, l.a.createElement(V.a, {
                            size: {
                                width: 15,
                                height: 21
                            }
                        })), l.a.createElement(D.a, {
                            label: j("New post"),
                            className: Y.a.postIconButton,
                            routeQueryProps: {
                                blogName: b,
                                isPageBlogPage: Object(i.e)(a),
                                composeSettings: Object(s.b)(a)
                            }
                        }, l.a.createElement(I.a, {
                            size: {
                                height: 22,
                                width: 22
                            }
                        }))),
                        Q = !L && l.a.createElement("div", {
                            className: Object(f.a)([Y.a.menuRight, Y.a.loggedOutButtons])
                        }, l.a.createElement(d.a, {
                            theme: p.c[t],
                            shouldNotRedirectBackOnLogin: k,
                            hideLoginButton: T,
                            hideSignUpButton: x,
                            followBlogName: S
                        })),
                        _ = B ? G : Q;
                    return l.a.createElement("div", {
                        className: r ? Y.a.headerWrapperTransparent : Y.a.headerWrapper
                    }, l.a.createElement("header", {
                        className: Y.a.header
                    }, l.a.createElement("div", {
                        className: Object(f.a)({
                            [Y.a.menuLeft]: !0,
                            [Y.a.menuLeftIsOnlyMenuPart]: !_
                        })
                    }, l.a.createElement("div", {
                        className: Y.a.logo
                    }, l.a.createElement(u.a, {
                        theme: t,
                        hardLinkHome: v
                    })), l.a.createElement(g.a, n()({
                        theme: t,
                        initialSearchTerm: W,
                        hardLinkToSearchPage: v
                    }, c && {
                        enableTypeahead: !1
                    }))), _))
                };
            Q.defaultProps = {
                headerTheme: p.b.Transparent,
                unseenPostCount: 0,
                notificationCount: 0,
                privateGroupBlogUnreadPostCount: 0,
                unreadMessagesCount: 0,
                inboxCount: 0
            };
            a.a = Q
        },
        "LaI+": function(e, a, t) {
            "use strict";
            var c = t("Mjgw");
            a.a = Object(c.a)((() => Promise.all([t.e(0), t.e(2), t.e(23), t.e(1), t.e(3), t.e(31)]).then(t.bind(null, "M3Gt"))), "AsyncMessaging")
        },
        Mnvm: function(e, a, t) {
            "use strict";
            var c = t("q1tI"),
                n = t.n(c),
                r = t("s2Hx"),
                l = t("fSeh"),
                o = t("p9+l"),
                s = t("AMeL"),
                i = Object(r.c)(n.a.createElement("svg", {
                    viewBox: "0 0 21 21"
                }, n.a.createElement("path", {
                    d: "M10.5 0C4.7 0 0 4.722 0 10.55c0 2.21.7 4.22 1.8 5.828l-.7 4.12 4.5-.704C7.1 20.598 8.8 21 10.5 21 16.3 21 21 16.278 21 10.45S16.3 0 10.5 0zM5.9 7.636c0-.904.8-1.708 1.7-1.708.9 0 1.7.804 1.7 1.708 0 .905-.8 1.708-1.7 1.708-.9 0-1.7-.803-1.7-1.708zm4.6 8.44c-2.1 0-3.9-1.105-4.6-2.712-.3-.603.3-1.307 1.1-1.307h6.8c.8 0 1.4.704 1.1 1.307-.5 1.607-2.3 2.713-4.4 2.713zm2.9-6.832c-.9 0-1.7-.804-1.7-1.708 0-.904.8-1.708 1.7-1.708.9 0 1.7.804 1.7 1.708 0 .904-.7 1.708-1.7 1.708z"
                }))),
                h = Object(r.c)(n.a.createElement("svg", {
                    viewBox: "0 0 21 21"
                }, n.a.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M10.5 0C4.88359 0 0.29865 4.42779 0.0140137 10H0V10.55V19.382C0 20.1253 0.782312 20.6088 1.44721 20.2764L2.96189 19.5191C3.60383 19.1981 4.36854 19.2457 4.96571 19.6438L5.97153 20.3144C6.60184 20.7346 7.41547 20.7626 8.07321 20.3867L9.50772 19.567C10.1226 19.2157 10.8774 19.2157 11.4923 19.567L12.9268 20.3867C13.5845 20.7626 14.3982 20.7346 15.0285 20.3144L16.0343 19.6438C16.6315 19.2457 17.3962 19.1981 18.0381 19.5191L19.5528 20.2764C20.2177 20.6088 21 20.1253 21 19.382V10.45V10H20.9906C20.756 4.38586 16.1499 0 10.5 0ZM6.24773 12.9763C6.85822 14.7349 8.5289 15.9978 10.4948 16H10.5051C12.471 15.9978 14.1417 14.7349 14.7522 12.9763C14.9449 12.4211 14.4752 11.9091 13.8875 11.9091H7.11248C6.52476 11.9091 6.05499 12.4211 6.24773 12.9763ZM9 7.5C9 8.32843 8.32843 9 7.5 9C6.67157 9 6 8.32843 6 7.5C6 6.67157 6.67157 6 7.5 6C8.32843 6 9 6.67157 9 7.5ZM13.5 9C14.3284 9 15 8.32843 15 7.5C15 6.67157 14.3284 6 13.5 6C12.6716 6 12 6.67157 12 7.5C12 8.32843 12.6716 9 13.5 9Z"
                }))),
                p = Object(r.c)(n.a.createElement("svg", {
                    viewBox: "0 0 21 21"
                }, n.a.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M10.5 0C4.7 0 0 4.722 0 10.55c0 2.21.7 4.22 1.8 5.828l-.7 4.12 4.5-.704C7.1 20.598 8.8 21 10.5 21 16.3 21 21 16.278 21 10.45S16.3 0 10.5 0zM10 16.978V15h3v1.4a5.502 5.502 0 002.978-4.4H10v2H7v-2H5.022A5.502 5.502 0 0010 16.978zM9 9L6 5 5 9h4zm6-4l1 4h-4l3-4z"
                }))),
                m = Object(r.c)(n.a.createElement("svg", {
                    viewBox: "0 0 21 21"
                }, n.a.createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M0 10.55C0 4.722 4.7 0 10.5 0S21 4.622 21 10.45C21 16.278 16.3 21 10.5 21c-1.7 0-3.4-.402-4.9-1.206l-4.5.704.7-4.12A10.315 10.315 0 010 10.55zM10.5 17a5.5 5.5 0 005.478-5H14l-1.053 2.106a.5.5 0 01-.894 0L11 12h-1l-1.053 2.106a.5.5 0 01-.894 0L7 12H5.022a5.5 5.5 0 005.478 5zM9 7.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM13.5 9a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
                }))),
                d = e => {
                    var a = Object(o.b)(),
                        t = (null == a ? void 0 : a.name) === s.a.ghost ? h : (null == a ? void 0 : a.name) === s.a.vampire ? m : (null == a ? void 0 : a.name) === s.a.pumpkin ? p : i;
                    return n.a.createElement(t, e)
                };
            d.defaultProps = {
                size: {
                    width: 21,
                    height: 21
                },
                fill: l.white
            }, a.a = d
        },
        U2YJ: function(e, a, t) {
            "use strict";
            var c = t("pVnL"),
                n = t.n(c),
                r = t("q1tI"),
                l = t.n(r),
                o = t("Ty5D"),
                s = t("7cHs"),
                i = t("M40m"),
                h = t("g2Yl"),
                p = t("ofoP"),
                m = t("o7iY"),
                d = t("y4uf"),
                u = t("v5I3"),
                g = t("3JrU"),
                v = t("c+T4"),
                f = t("fSeh"),
                b = t("tdyR");
            a.a = function(e) {
                var a, t, c = e.theme,
                    E = e.hardLinkNavigation,
                    C = e.shouldNotRedirectBackOnLogin,
                    w = e.hideLoginButton,
                    O = e.hideSignUpButton,
                    M = e.followBlogName,
                    y = Object(d.c)(),
                    L = y._t,
                    T = y.logEvent,
                    x = y.features,
                    k = Object(b.b)().openLoginWall,
                    S = Object(o.l)(),
                    P = Object(r.useCallback)((() => T({
                        eventName: h.b.ClickSignup
                    })), []),
                    j = Object(r.useCallback)((() => T({
                        eventName: h.b.ClickLogin
                    })), []),
                    H = Object(r.useCallback)((e => {
                        null == e || e.preventDefault(), k({
                            mode: u.a.Login
                        })
                    }), []),
                    B = Object(r.useCallback)((e => {
                        null == e || e.preventDefault(), k({
                            mode: u.a.Register
                        })
                    }), []),
                    z = Object(v.a)(x, S.pathname) ? H : j,
                    F = Object(v.a)(x, S.pathname) ? B : P,
                    A = E && "_blank",
                    N = E ? g.a : "";
                switch (c) {
                    case s.a.TransparentDark:
                        a = {
                            backgroundColor: f.transparentBlack15,
                            textColor: f.paletteBlack
                        }, t = {
                            backgroundColor: f.black,
                            textColor: f.transparentWhite50,
                            style: {
                                mixBlendMode: "hard-light"
                            }
                        };
                        break;
                    case s.a.Greyscale:
                        a = {
                            backgroundColor: f.paletteBlack,
                            textColor: f.gray40
                        }, t = {
                            backgroundColor: f.gray40,
                            textColor: f.paletteBlack
                        };
                        break;
                    default:
                        a = {
                            backgroundColor: f.glassGreen,
                            textColor: "#000000"
                        }, t = {
                            backgroundColor: f.dreamcastBlue,
                            textColor: "#000000"
                        }
                }
                return l.a.createElement(l.a.Fragment, null, !w && l.a.createElement(m.c, n()({
                    href: "".concat(N).concat(Object(p.j)({
                        followBlogName: M,
                        formToShow: i.a.Login
                    }, C ? {} : {
                        redirect_to: S.pathname
                    })),
                    feature: !1,
                    target: A,
                    size: m.a.Small,
                    onClick: z,
                    style: {
                        marginRight: 10
                    }
                }, a), L("Log in")), !O && l.a.createElement(m.c, n()({
                    href: "".concat(N).concat(Object(p.j)({
                        followBlogName: M,
                        formToShow: i.a.Register
                    })),
                    target: A,
                    feature: !1,
                    size: m.a.Small,
                    onClick: F
                }, t), L("Sign up")))
            }
        },
        VLpw: function(e, a, t) {
            "use strict";
            var c = t("q1tI"),
                n = t.n(c),
                r = t("s2Hx"),
                l = Object(r.c)(n.a.createElement("svg", {
                    viewBox: "0 0 16.8 16.8"
                }, n.a.createElement("path", {
                    d: "M1.2 11.9l-1.2 5 5-1.2 8.2-8.2-3.8-3.8-8.2 8.2zM10 6.3l-6.2 6.2-.6-.6 6.2-6.2c0-.1.6.6.6.6zM13.1 0l-2.5 2.5 3.7 3.7 2.5-2.5L13.1 0z"
                })));
            l.defaultProps = {
                size: {
                    width: 24,
                    height: 24
                }
            }, a.a = l
        },
        "eqn+": function(e, a, t) {
            "use strict";
            var c = t("q1tI"),
                n = t.n(c),
                r = t("s2Hx"),
                l = Object(r.c)(n.a.createElement("svg", {
                    viewBox: "0 0 23 16.9"
                }, n.a.createElement("path", {
                    d: "M20.9 0H2.1C.6 0 0 .7 0 2.2v12.5c0 1.6.6 2.2 2.1 2.2h18.8c1.5 0 2.1-.7 2.1-2.2V2.2C23 .7 22.4 0 20.9 0zm.4 13.6c.3.3-.2.8-.5 1.1-.1.2-.3.5-.5.5s-.2.1-.3-.1l-5.5-5-.6.5c-.7.6-1.6 1.1-2.4 1.1-.9 0-1.7-.4-2.4-1.1l-.6-.6-5.2 4.8c-.1.1-.3.2-.5.2s-.4-.1-.5-.2c-.3-.3-.8-1-.5-1.3l5.1-4.9-5-5c-.3-.3.1-.8.3-1.1.3-.3.8-.4 1.1-.2L10 8.9c.4.4.9.8 1.4.9.6 0 1.1-.4 1.6-.9l6.6-6.7c.3-.3.9 0 1.2.3.3.3.4 1 .2 1.2l-4.9 4.8 5.2 5.1z"
                })));
            l.defaultProps = {
                size: {
                    width: 23,
                    height: 24
                }
            }, a.a = l
        },
        r7dO: function(e, a, t) {
            "use strict";
            var c = t("pVnL"),
                n = t.n(c),
                r = t("QILm"),
                l = t.n(r),
                o = t("q1tI"),
                s = t.n(o),
                i = t("Jww+"),
                h = t("ffEX"),
                p = t("ofoP"),
                m = t("y4uf"),
                d = t("g2Yl");
            a.a = e => {
                var a = e.routeQueryProps,
                    t = e.onClick,
                    c = l()(e, ["routeQueryProps", "onClick"]),
                    r = Object(m.c)();
                return s.a.createElement(i.a, n()({}, c, {
                    getPath: () => {
                        var e = Object(h.a)(a);
                        return Object(p.l)({}, e)
                    },
                    onClick: e => {
                        r.logEvent({
                            eventName: d.b.PFComposePost
                        }), null == t || t(e)
                    },
                    isAlreadyOnPostFormPath: p.v
                }))
            }
        },
        s3eR: function(e, a, t) {
            "use strict";
            var c = t("q1tI"),
                n = t.n(c),
                r = t("s2Hx"),
                l = Object(r.c)(n.a.createElement("svg", {
                    width: "20",
                    height: "21",
                    viewBox: "0 0 20 21"
                }, n.a.createElement("path", {
                    d: "M19.55 8.117L10.567.157a.967.967 0 0 0-1.056 0L.528 8.117C.211 8.327 0 8.746 0 9.06v11.312c0 .314.317.628.634.628H6.34v-6.389c0-.524.423-.943.952-.943h5.389c.528 0 .951.42.951.943V21h5.706c.317 0 .635-.314.635-.628V9.06c.105-.314-.106-.838-.423-.943"
                })));
            l.defaultProps = {
                size: {
                    width: 20,
                    height: 21
                }
            }, a.a = l
        },
        w1vF: function(e, a, t) {
            "use strict";
            var c = t("pVnL"),
                n = t.n(c),
                r = t("ijCd"),
                l = t.n(r),
                o = t("q1tI"),
                s = t.n(o),
                i = t("7cHs"),
                h = t("s2Hx"),
                p = t("y4uf"),
                m = t("o/91"),
                d = Object(h.c)(s.a.createElement("svg", {
                    viewBox: "0 0 21 36.8"
                }, s.a.createElement("path", {
                    d: "M21 36.75h-6.2c-5.577 0-9.733-2.844-9.733-9.646V16.21H0v-5.9C5.576 8.876 7.909 4.12 8.177 0h5.79v9.354h6.757v6.856h-6.756v9.486c0 2.843 1.448 3.826 3.753 3.826h3.271L21 36.75z"
                }))),
                u = () => s.a.createElement("svg", {
                    className: m.a.fieri,
                    viewBox: "130 0 309 591"
                }, s.a.createElement("defs", null, s.a.createElement("clipPath", {
                    id: "clip-path"
                }, s.a.createElement("rect", {
                    fill: "none",
                    x: "264.24",
                    y: "-36.84",
                    width: "85.25",
                    height: "373.18"
                }))), s.a.createElement("path", {
                    fill: "#fff",
                    d: "M21.21,475.92a1.5,1.5,0,0,0,0-3,1.5,1.5,0,0,0,0,3Z"
                }), s.a.createElement("g", {
                    clipPath: "url(#clip-path)"
                }, s.a.createElement("rect", {
                    fill: "#fcf01d",
                    x: "249.65",
                    y: "143.91",
                    width: "214.85",
                    height: "118.12",
                    transform: "translate(714.16 405.94) rotate(-180)"
                }), s.a.createElement("path", {
                    fill: "#fcf01d",
                    d: "M304.57,29.78c1.27,4.33,3,8.6,3.72,13a55.32,55.32,0,0,1,.9,14.33c-.59,6.07-7.35,8.22-12.11,4.3-3.1-2.56-4.23-6.19-5.31-9.85-2-6.8-1.43-13.75-1-20.64a54.07,54.07,0,0,0-6-29.11,17.37,17.37,0,0,0-1-1.52c-1.32,6.39-2.49,12.69-3.95,18.92-1.42,6-5,11.05-8.58,15.92-4.36,5.87-4.94,12.41-2.85,19,2.53,7.91,5.95,15.54,8.9,23.33,1.75,4.62,3.23,9.31,3,14.38-.18,4-1.87,6-6,6.5-6.07.81-12-2.94-14.45-9.2a62.22,62.22,0,0,0-3.33-8c-1.58,5-3.28,10-4.71,15-2.26,8-.37,15.76,1.65,23.53a35,35,0,0,1,1,8.72c0,2.93-1.7,3.78-4.41,2.56-5.46-2.46-6.43-7.61-7.39-12.66-1.51-8-2.64-16.1-4.37-24.06-.93-4.31-2.77-8.42-4.21-12.63l-.78,0a57.68,57.68,0,0,0-1.8,5.64c-2.79,13.06-6.06,26.06-8.08,39.25A95.78,95.78,0,0,0,225.3,164a78.16,78.16,0,0,0,7.88,20.05c.5.88.84,1.84,1.42,3.11-.94,0-1.55.19-1.95,0-4.46-2.44-8.84-5-13.34-7.41-3.7-2-5.51-5.35-7.27-8.85-.24-.49-.45-1-.9-2-2.49,4.65-1.87,9.12-1.09,13.47,1.78,9.91,6.24,18.83,10.62,27.77a10.57,10.57,0,0,1,.44,3.08,20.1,20.1,0,0,1-3.22-.4c-1.53-.43-3-1.06-5-1.8a75.13,75.13,0,0,0,1.59,7.55c4.39,13.61,9.86,26.69,19.11,37.85.61.73,1.26,1.43,1.9,2.13,1.94,2.12,4.11,2.89,6.82,1.36a17.25,17.25,0,0,1,3.2-1.19c3.32-1.06,5-3.64,5.8-6.76,1.86-7.55,3.42-15.17,5.31-22.71,1.21-4.83,3.56-9.17,8.23-11.42,4.17-2,4.61-5.72,5.15-9.43,1.75-11.91,3.12-23.89,5.16-35.75,1.08-6.26,3.08-12.69,8.53-16.55a27.07,27.07,0,0,1,12.13-5c15.65-1.66,31.35-3,47.07-3.65,14.13-.58,28.3-.25,42.45,0,9.37.16,18.77.56,28.1,1.42,9.87.91,17.48,6.15,22.77,14.37,1.61,2.51,2.3,5.84,2.68,8.88q2.26,18.65,4,37.36c.36,3.82,1.6,6.87,4.64,9.3,4.2,3.35,5.7,8,6.33,13.22.89,7.22,2.09,14.41,3.19,21.61.1.61.37,1.59.76,1.7,5.06,1.49,9.18,5.24,14.5,6a3.13,3.13,0,0,0,2.53-.74c9.2-12.77,16.81-26.38,21.45-41.52a.77.77,0,0,0,0-.35c-3.63,2.71-7.26,5.61-11.08,8.2-2.69,1.83-5.7,3-9.12,2.5-4.55-.71-6.47-4.3-4.17-8.25,4.43-7.63,9.11-15.11,13.51-22.75,4.51-7.82,8.86-15.73,9.66-25a36.9,36.9,0,0,0-2.22-16.27c-.43,1.16-.74,2.06-1.1,2.93-1.75,4.25-4.83,6.52-8.28,6.11s-6.31-3.91-7-8.07a51.53,51.53,0,0,1,.89-20.06c2.74-12.09,3.6-24.2.8-36.39C476.14,92.75,471,86,463,80.72c.53,2.24.95,4.09,1.42,5.93,1.43,5.6.5,11.14-.68,16.61a5,5,0,0,1-4.58,4.11c-2.44.23-3.72-1.25-4.89-3.18-6.07-10-7.64-21.09-7.56-32.56.06-8,.16-16-3.13-23.5a36.5,36.5,0,0,0-9.72-13c.58,5,1.31,9.91,1.69,14.86.55,7.18-2,13.83-4.07,20.51a57.47,57.47,0,0,0-3,17.27A20.13,20.13,0,0,1,426.28,97c-3.19,5.91-10.12,5.86-14.58.26a14.55,14.55,0,0,1-2.83-9.91C409.34,74,410.21,60.65,410,47.3c-.25-13.73-4.32-26.38-14.54-36.29a28.4,28.4,0,0,0-7.6-5c.81,2.54,1.64,5.08,2.43,7.63a39,39,0,0,1-.39,24.87c-1.74,5-6.83,6.3-10.16,2.13a27,27,0,0,1-5.3-10.21c-2.69-11.53-4.73-23.2-7-34.82-.12-.62-.35-1.22-.61-2.13-1.52,3.48-2.8,6.71-4.31,9.83-3.2,6.66-6.75,13.15-9.72,19.91-5.39,12.24-3,23.14,5.95,33,4.38,4.84,8.55,10.15,9.07,17a20.61,20.61,0,0,1-1.3,8.83,9.7,9.7,0,0,1-11.37,6c-4.57-.94-8.21-5.79-8.5-10.91a76.77,76.77,0,0,0-1.37-12.88c-.9-3.94,7.11-9.61,3.23-12.2-3.23,12.2-8.91,15-15.49,20.12-2.49,1.94,2.17,9.75,2.15,12.94,0,1.6.47,3.19.53,4.8.12,3.27-1.25,5.43-3.81,6.3-3,1-5.36.19-7.37-2.68a23.72,23.72,0,0,1-4.13-13.69c-.05-7,0-14.06,0-21.09,0-9.09-2-17.56-8.34-24.42-1.92-2.09-4.54-3.53-6.85-5.27Z"
                }), s.a.createElement("polygon", {
                    fill: "#fcf01d",
                    points: "328.23 75.8 339.51 67.07 341.49 91.38 326.56 107.92 314.96 96.81 328.23 75.8"
                })), s.a.createElement("rect", {
                    fill: "#fcf01d",
                    x: "171",
                    y: "189.14",
                    width: "214.85",
                    height: "118.12"
                }), s.a.createElement("path", {
                    fill: "#fcf01d",
                    d: "M330.94,75c-1.27,4.34-3,8.6-3.72,13a55.29,55.29,0,0,0-.9,14.33c.59,6.06,7.35,8.22,12.11,4.29,3.1-2.55,4.23-6.18,5.31-9.84,2-6.81,1.43-13.75,1-20.64a54.06,54.06,0,0,1,6-29.11,17.37,17.37,0,0,1,1-1.52c1.32,6.39,2.49,12.69,3.95,18.92,1.42,6,5,11.05,8.58,15.92,4.36,5.87,4.94,12.4,2.85,18.94-2.53,7.92-5.95,15.55-8.9,23.33-1.75,4.63-3.23,9.32-3,14.38.18,4,1.87,6,6,6.5,6.07.82,12-2.93,14.45-9.2a62.12,62.12,0,0,1,3.33-8c1.58,5,3.28,10,4.71,15,2.26,8,.37,15.76-1.65,23.53a35,35,0,0,0-1,8.72c0,2.93,1.7,3.78,4.41,2.56,5.46-2.46,6.43-7.61,7.39-12.67,1.51-8,2.64-16.09,4.37-24.05.93-4.31,2.77-8.43,4.21-12.63l.78,0a56.65,56.65,0,0,1,1.8,5.63c2.79,13.07,6.06,26.07,8.08,39.26a95.78,95.78,0,0,1-1.79,37.56,78.3,78.3,0,0,1-7.88,20c-.49.87-.84,1.83-1.42,3.11.94,0,1.55.18,1.95,0,4.46-2.45-2.93,4.47,1.57,2.09,3.7-2-1.75,3.49,0,0,.24-.5,3.66,1.31,4.11.33,2.48,4.64,7.2-.07,6.41,4.28-1.78,9.9,4.27,7.35-.11,16.29a10.47,10.47,0,0,0-.44,3.08c1.08-.13-3.76,0-2.73-.29,1.52-.42-1,3.21,1,2.47-.57,2.81,1.24,2.81.5,5.1-4.4,13.61-2,24.76-11.21,35.92-.61.73-1.26,1.42-1.9,2.12-1.94,2.12-4.11,2.9-6.82,1.37A16.56,16.56,0,0,0,390,304c-3.32-1.07-5-3.64-5.8-6.76-1.86-7.55-3.42-15.17-5.31-22.71-1.21-4.83-3.56-9.18-8.23-11.43-4.17-2-4.61-5.71-5.15-9.43-1.75-11.91-3.12-23.88-5.16-35.74-1.08-6.26-3.08-12.69-8.53-16.56a26.94,26.94,0,0,0-12.13-5c-15.65-1.66-31.35-3-47.07-3.65-14.13-.58-28.3-.25-42.45,0-9.37.16-18.77.56-28.1,1.42-9.87.9-17.48,6.15-22.77,14.37-1.61,2.51-2.3,5.83-2.68,8.88q-2.26,18.65-4,37.35c-.36,3.83-1.6,6.88-4.64,9.31-4.2,3.35-5.7,8-6.33,13.21-.89,7.23-2.09,14.41-3.19,21.61-.1.62-.37,1.59-.76,1.71-5.06,1.49-9.18,5.24-14.5,6a3.13,3.13,0,0,1-2.53-.74c-9.2-12.78,7.55-24.29,2.91-39.42-.05-.17,2.43-4.4,2.43-4.38,3.63,2.71,3.83,8,7.65,10.61,2.69,1.83-17.67,2.55-14.25,2,4.55-.72,6.47-4.31,4.17-8.25-4.43-7.63-9.11-15.11-13.51-22.75-4.51-7.82-8.86-15.74-9.66-25a37,37,0,0,1,2.22-16.28c.43,1.17.74,2.06,1.1,2.93,1.75,4.26,4.83,6.53,8.28,6.11s6.31-3.9,7-8.06a51.77,51.77,0,0,0-.88-20.07c-2.75-12.08-3.61-24.19-.81-36.38,2.05-8.95,7.16-15.73,15.19-21-.53,2.24-.95,4.09-1.42,5.92-1.43,5.61-.5,11.15.68,16.62a5,5,0,0,0,4.58,4.1c2.44.24,3.72-1.24,4.89-3.18,6.07-10,7.64-21.08,7.56-32.55-.06-8-.16-16,3.13-23.5a36.41,36.41,0,0,1,9.72-13c-.58,5-1.31,9.9-1.69,14.86-.55,7.18,2,13.82,4.07,20.51a57.41,57.41,0,0,1,3,17.27,20.09,20.09,0,0,0,2.16,9.2c3.19,5.92,10.12,5.86,14.58.27,2.24-2.8,3-6.25,2.83-9.92-.47-13.35-1.34-26.72-1.09-40.07.25-13.73,4.32-26.38,14.54-36.29a28.42,28.42,0,0,1,7.6-5c-.81,2.55-1.64,5.09-2.43,7.64a39,39,0,0,0,.39,24.87c1.74,5,6.83,6.29,10.16,2.13a27,27,0,0,0,5.3-10.22c2.69-11.52,4.73-23.2,7-34.81.12-.62.35-1.22.61-2.13,1.52,3.48,2.8,6.7,4.31,9.83,3.2,6.65,6.75,13.15,9.72,19.9,5.39,12.25,3,23.15-6,33-4.38,4.85-8.55,10.16-9.07,17a20.54,20.54,0,0,0,1.3,8.82,9.69,9.69,0,0,0,11.37,6c4.57-.94,8.21-5.79,8.5-10.9a76.77,76.77,0,0,1,1.37-12.88c.9-3.95,3.8-6.82,7.68-9.42-2.32,7.54.62,14,1.95,20.72a50.59,50.59,0,0,1,.48,9.55c0,1.6-.47,3.2-.53,4.81-.12,3.26,1.25,5.43,3.81,6.3,3,1,5.36.19,7.37-2.68A23.75,23.75,0,0,0,315.2,125c.05-7,0-14.06,0-21.08,0-9.09,2-17.56,8.34-24.43,1.92-2.08,4.54-3.53,6.85-5.26Z"
                }), s.a.createElement("path", {
                    fill: "#fff",
                    d: "M342,584.29c-71.41,0-124.63-36.74-124.63-124.63V318.9H152.5V242.68c71.41-18.54,101.28-80,104.72-133.22h74.15V230.32h86.52V318.9H331.37V441.47c0,36.74,18.55,49.44,48.07,49.44h41.89v93.38Z"
                }), s.a.createElement("path", {
                    fill: "#001935",
                    d: "M424.27,587.23H342c-37.86,0-69.35-10.41-91.07-30.12-24.22-22-36.5-54.76-36.5-97.45V321.84H149.56V240.41l2.2-.58c70.55-18.32,99.22-79.45,102.53-130.56l.17-2.75h79.85V227.38h86.52v94.46H334.31V441.47c0,32.16,13.92,46.5,45.13,46.5h44.83ZM155.44,316h64.89v143.7c0,41,11.63,72.29,34.57,93.1,20.62,18.71,50.74,28.59,87.12,28.59h76.37v-87.5H379.44c-34.32,0-51-17.14-51-52.38V316H415v-82.7H328.43V112.4H260c-4.23,52-33.78,113.09-104.51,132.54Z"
                }), s.a.createElement("path", {
                    d: "M244.69,358.71a29.78,29.78,0,0,1-7.28-1c-11.37-2.87-23-5.6-34.24-8.23-5.59-1.32-11.18-2.62-16.76-4-15.11-3.61-25.53-8.72-33.79-16.59-11.5-11-17.51-25.27-17.87-42.53-.05-5-.08-7.52,1.69-9.3a6.41,6.41,0,0,1,4.75-1.56c1.19,0,2.73.13,4.72.3,23.82,2.08,47.42,4.08,71,6.08l4,.33c5.87.5,11.73,1,17.6,1.58,14.58,1.34,29.65,2.73,44.47,3.41,1,.05,2.08.07,3.12.07a157,157,0,0,0,18.19-1.45c3.14-.37,6.28-.74,9.41-1q46.8-4.14,93.61-8.34l2.46-.22c4.19-.37,8.52-.75,12.71-1.37a11.44,11.44,0,0,1,1.77-.14c2.33,0,6.26.92,6.37,7.12a65.25,65.25,0,0,1-9.91,36.34c-7.62,12.19-19.36,20.55-34.88,24.85-11.33,3.14-22.93,5.95-34.15,8.67-8.28,2-16.56,4-24.8,6.15a21.64,21.64,0,0,1-5.46.7,20.21,20.21,0,0,1-19.53-14.42c-1.56-5.2-3.45-10.43-5.27-15.49-1-2.87-2.08-5.75-3.07-8.64-1.75-5.11-5.09-7.49-11.17-8l-.47,0c-4.12,0-8.92,3.88-10.5,8.48q-4,11.55-7.74,23.17C260.46,353.53,253.91,358.71,244.69,358.71Z"
                }), s.a.createElement("path", {
                    fill: "#fff",
                    d: "M424.23,277.44c2.67,0,3.66,1.52,3.71,4.52a62.23,62.23,0,0,1-9.5,34.88c-7.82,12.52-19.59,19.89-33.34,23.71-19.5,5.4-39.32,9.7-58.91,14.8a19,19,0,0,1-4.79.62,17.63,17.63,0,0,1-17-12.54c-2.45-8.17-5.6-16.14-8.37-24.22-2.51-7.36-8-9.33-13.47-9.76l-.68,0c-5.36,0-11.13,4.77-13,10.27q-4,11.58-7.76,23.21c-2.85,8.77-8.52,13.14-16.43,13.14a26.94,26.94,0,0,1-6.63-.89c-16.95-4.29-34-8.14-51-12.2-12-2.87-23.47-7.26-32.57-15.93-11.53-11-16.72-24.87-17-40.67-.08-6.64-.1-8.14,3.78-8.14,1.18,0,2.72.13,4.72.31q37.38,3.25,74.76,6.39c20.72,1.76,41.41,4,62.17,5,1.08,0,2.16.07,3.25.07,9.24,0,18.55-1.65,27.82-2.48q46.82-4.14,93.61-8.34c5.12-.46,10.25-.85,15.33-1.61a10.06,10.06,0,0,1,1.38-.11m0-5.31a15,15,0,0,0-2.16.17c-4.11.62-8.41,1-12.57,1.36l-2.45.21q-46.8,4.2-93.61,8.35c-3.18.28-6.38.66-9.48,1a153.29,153.29,0,0,1-17.87,1.42c-1,0-2,0-3-.06-14.76-.68-29.79-2.06-44.34-3.4-5.87-.54-11.75-1.08-17.62-1.58l-3.63-.31q-35.56-3-71.12-6.08l-.23,0c-2-.17-3.58-.31-4.95-.31a9.06,9.06,0,0,0-6.64,2.34c-2.55,2.58-2.51,5.8-2.45,11.15.37,18.07,6.66,33,18.69,44.47,11.17,10.64,25.32,14.94,35,17.25q8.39,2,16.79,4c11.23,2.63,22.83,5.36,34.18,8.22a32.09,32.09,0,0,0,7.93,1.06c10.33,0,17.95-6,21.48-16.81,2.42-7.44,4.95-15,7.73-23.13,1.18-3.44,5.06-6.69,8-6.69h.27c5,.39,7.47,2.13,8.86,6.19,1,2.9,2,5.78,3.08,8.67,1.81,5,3.69,10.23,5.23,15.36a22.86,22.86,0,0,0,22.07,16.32,24.47,24.47,0,0,0,6.12-.79c8.21-2.14,16.61-4.17,24.73-6.14,11.25-2.72,22.89-5.54,34.27-8.69,16.18-4.49,28.44-13.24,36.42-26a67.93,67.93,0,0,0,10.31-37.8c-.13-7.17-4.74-9.73-9-9.73Z"
                }), s.a.createElement("polygon", {
                    fill: "#ff8a00",
                    points: "305.19 501.91 296.99 485.63 289.8 481.33 272.6 482.66 266.5 495.76 261.9 522.74 272.49 539.27 283.16 543.84 298.17 529.27 305.19 501.91"
                }), s.a.createElement("path", {
                    d: "M283.55,545.93l-12.25-5.25L260,523.12,264.9,495l6.54-14,18.78-1.45,8.12,4.86,8.73,17.32-7.31,28.49Zm-9.86-8.07,9.08,3.89,13.81-13.4,6.73-26.24-7.67-15.22-6.27-3.76-15.6,1.21-5.57,12-4.44,26.07Z"
                }), s.a.createElement("path", {
                    fill: "#ff8a00",
                    d: "M295.78,495.4c-3.68-11.94-3.76-11.81-16-9.91-5.47.85-8.94,3.64-9.7,9.09-.93,6.69-2,13.43-2,20.15,0,7.53,1.82,14.85,6.76,21A8,8,0,0,0,286,536.9c9.3-7.4,14.61-16.61,12.65-29.07C297.68,503.68,297,499.45,295.78,495.4Z"
                }), s.a.createElement("path", {
                    d: "M281.08,541.22a10.6,10.6,0,0,1-8.27-3.86c-4.92-6.08-7.4-13.7-7.36-22.64a138.58,138.58,0,0,1,1.75-18.43l.29-2.07c.62-4.43,3.18-10,11.92-11.35,13.52-2.11,14.91-1.23,18.91,11.75h0a88,88,0,0,1,2.06,8.76c.26,1.29.52,2.59.81,3.87,2,12.55-2.47,22.88-13.58,31.73A10.47,10.47,0,0,1,281.08,541.22Zm6.71-54a55.14,55.14,0,0,0-7.23.88c-4.95.77-7.25,2.88-7.81,6.89l-.29,2.08a134,134,0,0,0-1.7,17.71c0,7.69,2,14.18,6.18,19.29a5.4,5.4,0,0,0,7.36.8c9.62-7.66,13.33-16.11,11.68-26.59-.27-1.16-.53-2.49-.8-3.82-.58-2.87-1.12-5.59-1.93-8.24h0c-1.42-4.59-2.44-7.91-3.62-8.65A3.6,3.6,0,0,0,287.79,487.18Z"
                }), s.a.createElement("path", {
                    fill: "#ff8a00",
                    d: "M305.67,393.83A163,163,0,0,0,243,397.91c-21.66,5.82-30.21,18.83-29.15,41.11a188,188,0,0,1-.32,29.06,147.65,147.65,0,0,0,.09,16.83c.39,5.19,2.1,15,4.83,19.4,2.61,4.23,5.06,8.85,8.77,12.25a30.81,30.81,0,0,0,18.31,7.8c4.73.43,9.53.09,13.2.1,3.62,6.36,6.35,12.8,10.51,18.1A14.52,14.52,0,0,0,289.68,545c5.17-4.13,9.05-9.86,13.63-14.77,1.55-1.67,3.23-3.59,5.25-4.39,6.89-2.74,13.63-6.21,19.14-11.24,6.18-5.64,9.11-12.43,11.92-20.14,2.53-6.95,2.41-15.3,3.26-22.65,0-9.89,0-19-.05-28.14,0-3.56-.16-7.14-.46-10.7C340.51,410.64,328,396.6,305.67,393.83ZM286,536.9a8,8,0,0,1-11.08-1.21c-4.94-6.11-6.8-13.43-6.76-21,0-6.72,1.08-13.46,2-20.15.76-5.45,4.23-8.24,9.7-9.09,12.2-1.9,12.28-2,16,9.91,1.25,4.05,1.9,8.28,2.82,12.43C300.56,520.29,295.25,529.5,286,536.9Zm29.51-45.36c-3.77,3.94-5.53,3.3-8.93,4-.32.07-.65.24-1.07.38s-4.27-11-4.55-11.62c-.91-2-1.36-4.55-3.37-5.82a7.46,7.46,0,0,0-2.9-.91c-8.85-1.41-17.71.15-26,3.27a10.39,10.39,0,0,0-3.55,1.93c-2.43,2.27-2.5,6.14-3.42,9.14L260.38,496c-.34,1.1-1.36,3-1.27,4.12-11.24-.46-19.16-11.39-19.76-29.69-.15-4.52,1-24.42,1.81-29.84,1.12-7.6,1.25-11.83,7.25-14.27,11.65-4.71,23.91-5.61,36.26-5.8,5.17-.08,10.36,0,15.52.38,12.64.91,18.65,5.31,20.68,17.58C323.92,456.92,329.21,477.22,315.46,491.54Z"
                }), s.a.createElement("path", {
                    d: "M280.73,550.8a17.37,17.37,0,0,1-13.6-6.6,79.3,79.3,0,0,1-7.56-12.55c-.79-1.5-1.58-3-2.41-4.53l-1.91,0a91.44,91.44,0,0,1-10-.16,33.5,33.5,0,0,1-19.87-8.49c-3.39-3.12-5.72-7-8-10.77l-1.25-2.05c-3-4.94-4.81-15.25-5.21-20.59a145.21,145.21,0,0,1-.09-17.23,185.68,185.68,0,0,0,.31-28.73c-1.14-23.87,8.75-37.79,31.11-43.8a165.61,165.61,0,0,1,63.7-4.16h0c23.17,2.89,37,17.65,39,41.56.29,3.43.44,7,.47,10.9,0,6.74,0,13.48,0,20.53v7.63c-.24,2.29-.4,4.35-.56,6.43-.44,5.77-.9,11.75-2.86,17.13-2.78,7.63-5.83,15-12.63,21.19-5.05,4.61-11.38,8.34-19.94,11.75-1.32.52-2.66,2-4,3.37l-.33.36c-1.54,1.65-3,3.41-4.47,5.16a68.22,68.22,0,0,1-9.44,9.88A16.91,16.91,0,0,1,280.73,550.8Zm-22.16-29h1.69l.76,1.34c1.15,2,2.21,4,3.25,6a76,76,0,0,0,7,11.74,11.86,11.86,0,0,0,8,4.48,11.66,11.66,0,0,0,8.69-2.48,62.76,62.76,0,0,0,8.69-9.14c1.52-1.82,3.05-3.64,4.66-5.37l.32-.35c1.62-1.75,3.46-3.73,5.89-4.69,7.94-3.16,13.76-6.57,18.33-10.74,5.9-5.39,8.67-12.1,11.22-19.09,1.71-4.69,2.14-10.3,2.55-15.72.17-2.15.33-4.27.57-6.32l0-7.33c0-7,0-13.76-.05-20.49,0-3.77-.18-7.21-.45-10.5-1.79-21.45-13.68-34.15-34.39-36.73a160.26,160.26,0,0,0-61.67,4c-20.09,5.4-28.22,16.89-27.19,38.43a190.24,190.24,0,0,1-.32,29.37,142.69,142.69,0,0,0,.09,16.44c.38,5.05,2.06,14.33,4.44,18.21L222,505c2.06,3.44,4.2,7,7,9.59a28.18,28.18,0,0,0,16.76,7.11,82.3,82.3,0,0,0,9.37.14C256.35,521.83,257.51,521.8,258.57,521.8Zm22.51,19.42a10.6,10.6,0,0,1-8.27-3.86c-4.92-6.08-7.4-13.7-7.36-22.64a138.58,138.58,0,0,1,1.75-18.43l.29-2.07c.62-4.43,3.18-10,11.92-11.35,13.52-2.11,14.91-1.23,18.91,11.75a88,88,0,0,1,2.06,8.76c.26,1.29.52,2.59.81,3.87,2,12.55-2.47,22.88-13.58,31.73h0A10.47,10.47,0,0,1,281.08,541.22Zm6.71-54a55.14,55.14,0,0,0-7.23.88c-4.95.77-7.25,2.88-7.81,6.89l-.29,2.08a134,134,0,0,0-1.7,17.71c0,7.69,2,14.18,6.18,19.29a5.4,5.4,0,0,0,7.36.8c9.62-7.66,13.33-16.11,11.68-26.59-.27-1.16-.53-2.49-.8-3.82-.58-2.87-1.12-5.59-1.93-8.24-1.42-4.59-2.44-7.91-3.62-8.65A3.6,3.6,0,0,0,287.79,487.18ZM262,503l-3-.21c-13.12-.54-21.67-12.9-22.3-32.25-.15-4.56,1-24.67,1.83-30.32l.25-1.72c.94-6.6,1.69-11.8,8.64-14.62,12.27-5,25.14-5.81,37.21-6,5.8-.09,11,0,15.75.38,14.25,1,20.95,6.76,23.11,19.8.29,1.76.6,3.53.91,5.32,3,16.91,6.34,36.07-7,50h0c-3.36,3.5-5.54,4-8.5,4.48-.55.08-1.13.17-1.78.31l-.81.3c-2.84.95-3.33-.43-7.14-11.18-.34-1-.59-1.69-.68-1.91-.23-.5-.44-1.07-.66-1.65-.49-1.33-.92-2.48-1.69-3a5.32,5.32,0,0,0-1.9-.53c-7.61-1.21-15.91-.15-24.68,3.14a8.37,8.37,0,0,0-2.67,1.38c-1.14,1.07-1.56,3-2,5.1-.21,1-.42,2-.7,2.88l-1.25,4.07c-.13.4-.32.9-.54,1.42a9.67,9.67,0,0,0-.62,1.8Zm26.12-79.83-3.4,0c-11.56.17-23.84,1-35.3,5.6-3.94,1.6-4.4,3.63-5.38,10.45l-.25,1.75c-.79,5.36-1.92,25.11-1.78,29.37.49,15.12,6.2,25.15,15.06,26.87.13-.35.27-.7.41-1s.29-.7.38-1l1.25-4.06c.23-.76.41-1.59.58-2.42.57-2.66,1.2-5.67,3.57-7.88a12.65,12.65,0,0,1,4.43-2.47c9.63-3.62,18.84-4.77,27.37-3.42a10,10,0,0,1,3.91,1.3c2.28,1.44,3.14,3.75,3.83,5.6.17.47.34.93.54,1.37.07.17.39,1.05.82,2.27.57,1.6,1.84,5.17,2.68,7.3l1.28-.21c2.05-.3,3.09-.46,5.44-2.91h0c11.49-12,8.51-29,5.63-45.39q-.48-2.71-.93-5.38c-1.76-10.63-6.36-14.51-18.25-15.37C296.31,423.3,292.4,423.17,288.11,423.17Z"
                }), s.a.createElement("rect", {
                    fill: "#fff",
                    x: "260.37",
                    y: "470.32",
                    width: "43.44",
                    height: "83.6"
                }), s.a.createElement("path", {
                    fill: "#fcf01d",
                    d: "M256.33,523.09c-2.3-10.53-1-13.26-.56-19.88a21.7,21.7,0,0,1,7.47-15.82c6.42-5.93,14.87-7.62,23.6-7.24,9.54.41,15.42,4.44,20.72,11.43,3.6,4.75,4.36,10.72,4.49,16.43.32,13.26-2.66,27.49-13.28,36.9a47.49,47.49,0,0,0-5-15.13c-3.51,4-2.89,9.5-3.3,14.5s-3.32,10.92-9,11.24c2.36-10.38-1.9-14.92-6.06-21.24.44,4.5-5.76,10.68-8.61,14.43-1.1-13.44-10.33-17.18-10.48-25.62"
                }), s.a.createElement("path", {
                    d: "M258.89,522.39A46.16,46.16,0,0,1,258,508c.5-4.9.56-9.89,3.28-14.2,6.44-10.23,21.3-13.45,32.37-9.83A24.45,24.45,0,0,1,306,494c3.32,5.08,3.52,11.5,3.41,17.38-.24,11.83-3.58,23.5-12.52,31.69l4.44,1.17a53.87,53.87,0,0,0-5.24-15.76,2.68,2.68,0,0,0-4.17-.54c-3.12,3.93-3.68,8.23-3.91,13.11-.21,4.41-.89,11.2-6.53,11.85l2.56,3.36c.9-4.4,1.14-8.84-.42-13.13-1.36-3.72-3.73-6.88-5.91-10.15-1.4-2.1-5-1.42-4.95,1.34.09,4.66-5.18,9.16-7.83,12.55l4.53,1.88a32.88,32.88,0,0,0-5.06-14.66c-2.17-3.41-5.2-6.73-5.42-11-.17-3.4-5.47-3.42-5.3,0,.21,4.19,2.06,7.55,4.36,11,3.08,4.59,5.54,9.05,6.12,14.66.2,2,2.95,3.9,4.53,1.88,3.66-4.71,9.5-9.86,9.38-16.31l-4.94,1.34c4.2,6.29,7.41,11.29,5.79,19.19-.31,1.5.72,3.57,2.56,3.36,5.18-.6,8.76-3.86,10.55-8.7,2.09-5.63-.25-12.92,3.64-17.81l-4.17-.54a48.75,48.75,0,0,1,4.71,14.49c.34,2.09,3.1,2.39,4.43,1.17,7.91-7.24,12.09-17.12,13.47-27.62,1.46-11,1.16-22.78-6.35-31.54-6.84-8-16.18-10.8-26.48-10.06-10.7.77-21.47,6-26,16.26-2,4.49-2.1,9.36-2.59,14.18a50.62,50.62,0,0,0,1.1,15.8c.7,3.34,5.82,1.92,5.12-1.41Z"
                })),
                g = () => s.a.createElement("svg", {
                    className: m.a.groundhog,
                    viewBox: "0 0 260.3 226.4"
                }, s.a.createElement("ellipse", {
                    cx: "130.1",
                    cy: "158.8",
                    fill: "#492100",
                    rx: "130.1",
                    ry: "67.6"
                }), s.a.createElement("path", {
                    fill: "#723300",
                    d: "M130.1 116.3c63.6 0 116.6 23.7 127.9 55.1 1.5-4.1 2.2-8.3 2.2-12.5 0-37.3-58.3-67.6-130.1-67.6S0 121.4 0 158.8c0 4.3.8 8.5 2.2 12.5 11.4-31.3 64.3-55 127.9-55z"
                }), s.a.createElement("path", {
                    fill: "#FFF",
                    d: "M126.3 224.9c-12.8-.1-27-1.5-40.9-4.1l-1.1-.2-.1-1.1c-.2-2.9-.3-5.8-.3-8.8v-81.9H45.5V80.9l1.1-.3c41.9-10.9 59-47.2 60.9-77.6l.1-1.4h46.8v71.6h51.3v55.5h-51.3v71.1c0 9.6 2.1 16.5 6.5 21l2.1 2.2-3.1.3c-9.7 1-20.3 1.5-33.3 1.5.1.1-.3.1-.3.1z"
                }), s.a.createElement("path", {
                    fill: "#001935",
                    d: "M153 3.1v71.6h51.3v52.5H153v72.6c0 10.3 2.5 17.4 6.9 22.1-9.5 1-19.9 1.5-33.2 1.5h-.4c-11.9 0-25.9-1.3-40.6-4.1-.2-2.8-.3-5.7-.3-8.7v-83.4H47V82.1c42.3-11 60-47.4 62-78.9h44m3-3.1h-49.8l-.2 2.8c-1.9 29.8-18.7 65.5-59.8 76.2l-2.2.6v50.5h38.4v80.4c0 3 .1 6 .3 8.9l.2 2.3 2.3.4c14 2.7 28.2 4.1 41.2 4.2h.4c13.1 0 23.7-.5 33.5-1.5l6.1-.6-4.3-4.4c-4.1-4.3-6.1-10.8-6.1-20v-69.6h51.3V71.7H156V.1z"
                }), s.a.createElement("path", {
                    fill: "#FFF",
                    d: "M187.9 127.6c0 18.2-14.8 32.9-32.9 32.9s-33-14.7-33-32.9 14.7-32.9 32.9-32.9 33 14.7 33 32.9"
                }), s.a.createElement("path", {
                    d: "M155 162.1c-19 0-34.5-15.5-34.5-34.5S136 93.1 155 93.1s34.5 15.5 34.5 34.5-15.5 34.5-34.5 34.5m0-65.9c-17.3 0-31.4 14.1-31.4 31.4 0 17.3 14.1 31.4 31.4 31.4 17.3 0 31.4-14.1 31.4-31.4 0-17.3-14.1-31.4-31.4-31.4"
                }), s.a.createElement("path", {
                    d: "M186.5 131.4c0 7.9-6.4 14.4-14.4 14.4-7.9 0-14.4-6.4-14.4-14.4 0-7.9 6.4-14.4 14.4-14.4 7.9 0 14.4 6.5 14.4 14.4"
                }), s.a.createElement("path", {
                    fill: "#F6EA1D",
                    d: "M155 94.8c-18.2 0-32.9 14.8-32.9 32.9H188c-.1-18.2-14.8-32.9-33-32.9"
                }), s.a.createElement("path", {
                    d: "M187.9 129.2H122c-.8 0-1.5-.7-1.5-1.5 0-19 15.5-34.5 34.5-34.5s34.5 15.5 34.5 34.5c0 .8-.7 1.5-1.6 1.5m-64.3-3h62.8c-.8-16.6-14.6-29.9-31.4-29.9-16.8 0-30.6 13.3-31.4 29.9"
                }), s.a.createElement("path", {
                    fill: "#FFF",
                    d: "M129.2 127.6c0 18.2-14.8 32.9-32.9 32.9s-32.9-14.8-32.9-32.9c0-18.2 14.7-32.9 32.9-32.9s32.9 14.7 32.9 32.9"
                }), s.a.createElement("path", {
                    d: "M96.3 162.1c-19 0-34.5-15.5-34.5-34.5s15.5-34.5 34.5-34.5 34.5 15.5 34.5 34.5c-.1 19-15.5 34.5-34.5 34.5m0-65.9c-17.3 0-31.4 14.1-31.4 31.4 0 17.3 14.1 31.4 31.4 31.4s31.4-14.1 31.4-31.4c0-17.3-14.1-31.4-31.4-31.4"
                }), s.a.createElement("path", {
                    d: "M127.7 131.4c0 7.9-6.4 14.4-14.4 14.4-7.9 0-14.4-6.4-14.4-14.4 0-7.9 6.4-14.4 14.4-14.4s14.4 6.5 14.4 14.4"
                }), s.a.createElement("path", {
                    fill: "#F6EA1D",
                    d: "M96.3 94.8c-18.2 0-32.9 14.8-32.9 32.9h65.9c-.1-18.2-14.8-32.9-33-32.9"
                }), s.a.createElement("path", {
                    d: "M129.2 129.2H63.3c-.8 0-1.5-.7-1.5-1.5 0-19 15.5-34.5 34.5-34.5s34.5 15.5 34.5 34.5c-.1.8-.8 1.5-1.6 1.5m-64.3-3h62.8c-.8-16.6-14.6-29.9-31.4-29.9-16.9 0-30.6 13.3-31.4 29.9"
                })),
                v = () => s.a.createElement("svg", {
                    viewBox: "0 0 503.1 1063.8",
                    className: m.a.goth
                }, s.a.createElement("g", {
                    "data-name": "Layer 2"
                }, s.a.createElement("path", {
                    d: "M425.18 450.59c-47.43-10.16-88.08-11.86-138.9-11.86C284.58 533.59 288 742 288 838.5c66.07 25.41 127 40.66 213.44 61v5.08L343.87 1063.8c-94.86-49.12-172.78-83-269.34-115.19 22-37.27 23.72-83 23.72-137.21l-6.78-364.2-88.08 3.39L0 447.2c32.19-49.12 61-88.08 91.47-137.2v-50.83c0-39-11.85-72.84-27.1-93.16v-3.39C122 130.43 235.46 57.59 311.69 0l5.08 3.39c-22 61-37.27 150.76-33.88 289.66 72.84 0 137.21-1.69 220.21-6.77z",
                    fill: "#bb50e2",
                    "data-name": "Layer 1"
                }))),
                f = e => {
                    var a = Object(p.c)().features,
                        t = a.redpopFieriLogo,
                        c = a.redpopGroundhogLogo;
                    return a.redpopGothLogo ? s.a.createElement(v, null) : c ? s.a.createElement(g, null) : t ? s.a.createElement(u, null) : s.a.createElement(d, e)
                };
            f.defaultProps = {
                size: {
                    width: 20,
                    height: 33
                }
            };
            var b = f,
                E = t("Vdq3"),
                C = t("BgJd"),
                w = t("Jq/n"),
                O = t("fSeh"),
                M = t.n(O),
                y = t("UY1g");
            a.a = function(e) {
                var a = e.size,
                    t = e.theme,
                    c = e.hardLinkHome,
                    r = Object(p.c)(),
                    o = r.isLoggedIn,
                    m = r._t,
                    d = r.features,
                    u = Object(w.a)({
                        [y.a.prideMonth]: d.prideMonthLogoAnimation
                    }),
                    g = s.a.createElement("div", {
                        className: u
                    }, s.a.createElement(b, n()({
                        fill: l()([i.b.Light, i.b.Transparent], t) ? M.a.paletteWhiteOnDark : M.a.paletteBlack,
                        options: {
                            colorList: E.b.RAINBOW,
                            fillCriteria: h.a.ONHOVER
                        }
                    }, a && {
                        size: a
                    }))),
                    v = m("Home");
                return c || !o ? s.a.createElement("a", {
                    href: "/",
                    "aria-label": v
                }, g) : s.a.createElement(C.a, {
                    to: "/dashboard",
                    "aria-label": v
                }, g)
            }
        }
    }
]);