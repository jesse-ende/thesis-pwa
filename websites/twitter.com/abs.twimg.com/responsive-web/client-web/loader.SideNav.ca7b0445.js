(window.webpackJsonp = window.webpackJsonp || []).push([
    [149], {
        "0kTQ": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return c
            }));
            var a = n("k49u"),
                s = n("3XMw");
            const r = n.n(s).a.b20a3893,
                c = {
                    [a.a.TargetUserNotFound]: {
                        toast: {
                            text: r
                        }
                    },
                    showToast: !0
                }
        },
        "55jz": function(e, t, n) {
            "use strict";
            var a = n("KEM+"),
                s = n.n(a),
                r = (n("kYxP"), n("ERkP")),
                c = n("3XMw"),
                i = n.n(c),
                o = n("IMYl"),
                l = n("MWbm"),
                d = n("Irs7"),
                u = n("CKsB"),
                h = n("OOKO"),
                p = n("IMA+"),
                m = n("Znyr"),
                g = n("G1WX"),
                _ = n("rHpw");
            const w = i.a.d86bbf0f,
                E = i.a.h6beb5fa,
                b = i.a.b7dc3884;
            class C extends r.Component {
                constructor(...e) {
                    super(...e), s()(this, "_render", (() => r.createElement(l.a, {
                        style: A.menuContainer
                    }, this._renderUserAccounts(), this._renderAdditionalMenuItems()))), s()(this, "_renderAdditionalMenuItems", (() => {
                        const e = this.props.additionalMenuItems || [];
                        return e.map(((t, n) => r.createElement(r.Fragment, {
                            key: n
                        }, r.createElement(u.a, {
                            Icon: t.Icon,
                            actionText: t.actionText,
                            isSelected: t.isSelected,
                            link: t.link,
                            onClick: this._handleMenuItemClick(t.scribeElement, t.onClick),
                            selectable: !0,
                            testID: t.testID
                        }), n !== e.length - 1 ? r.createElement(h.a, null) : null)))
                    })), s()(this, "_renderUserAccounts", (() => {
                        const {
                            accountUsers: e,
                            activeUser: t,
                            withBadges: n = !1
                        } = this.props;
                        return e.filter((e => e.user_id !== (null == t ? void 0 : t.id_str))).length > 0 ? r.createElement(r.Fragment, null, e.map((e => {
                            const a = e.user_id === t.id_str,
                                s = e.badgeCount;
                            return r.createElement(p.a, {
                                accessibilityLabel: a ? void 0 : b({
                                    screenName: e.screen_name
                                }),
                                avatarUri: e.avatar_image_url,
                                decoration: this._renderUserDecoration({
                                    badgeCount: s,
                                    withBadges: n,
                                    isActiveUser: a
                                }),
                                displayMode: "UserCompact",
                                isProtected: e.is_protected,
                                isVerified: e.is_verified,
                                key: e.user_id,
                                name: e.name,
                                onCellClick: a ? void 0 : this._handleMultiAccountSwitch({
                                    hasBadge: !!s,
                                    isProtected: e.is_protected,
                                    userId: e.user_id
                                }),
                                screenName: e.screen_name,
                                userId: e.user_id,
                                withBottomBorder: !0,
                                withLink: !1
                            })
                        }))) : r.createElement(p.a, {
                            avatarUri: t.profile_image_url_https,
                            decoration: this._renderUserDecoration({
                                withBadges: n,
                                isActiveUser: !0
                            }),
                            displayMode: "UserCompact",
                            isProtected: t.protected,
                            isVerified: t.verified,
                            name: t.name,
                            screenName: t.screen_name,
                            userId: t.id_str,
                            withBottomBorder: !0,
                            withLink: !1
                        })
                    })), s()(this, "_renderUserDecoration", (({
                        badgeCount: e,
                        withBadges: t,
                        isActiveUser: n
                    }) => n ? r.createElement(o.a, {
                        style: [A.iconCheckMark, A.userDecoration]
                    }) : e && t ? r.createElement(m.a, {
                        count: e,
                        standalone: !0,
                        style: A.userDecoration,
                        truncatedCountFormatter: E,
                        unreadCountLabel: w
                    }) : void 0)), s()(this, "_handleMultiAccountSwitch", (({
                        hasBadge: e,
                        isProtected: t,
                        userId: n
                    }) => () => {
                        const {
                            accountSwitch: a,
                            onClose: s
                        } = this.props;
                        a({
                            hasBadge: e,
                            isProtected: t,
                            userId: n
                        }), s()
                    })), s()(this, "_handleFetch", (() => {
                        const {
                            createLocalApiErrorHandlerAccountsFetch: e,
                            fetchAccounts: t
                        } = this.props;
                        t().catch(e())
                    })), s()(this, "_handleMenuItemClick", ((e, t) => () => {
                        const {
                            analytics: n,
                            onClose: a
                        } = this.props;
                        e && n.scribe({
                            element: e,
                            action: "click"
                        }), null == t || t(), a()
                    }))
                }
                render() {
                    const {
                        fetchStatus: e,
                        shouldDisplayFetchRenderer: t
                    } = this.props;
                    return t ? r.createElement(g.a, {
                        fetchStatus: e,
                        onRequestRetry: this._handleFetch,
                        render: this._render
                    }) : this._render()
                }
            }
            const A = _.a.create((e => ({
                iconCheckMark: {
                    color: e.colors.primary,
                    flexShrink: 0
                },
                menuContainer: {
                    paddingVertical: e.spaces.space12
                },
                userDecoration: {
                    marginLeft: e.spaces.space12
                }
            })));
            t.a = Object(d.a)(C)
        },
        LzTg: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "default", (function() {
                return V
            }));
            var a = n("KEM+"),
                s = n.n(a),
                r = n("ERkP"),
                c = (n("kYxP"), n("v6aA")),
                i = n("rxPX"),
                o = n("0KEI"),
                l = n("kGix"),
                d = n("G6rE"),
                u = n("auX9");
            var h = Object(i.a)().propsFromState((() => ({
                    fetchStatus: u.g,
                    loggedInUser: d.e.selectLoggedInUser,
                    multiAccountUsers: u.j,
                    hasMultiAccountBadges: u.h
                }))).propsFromActions((() => ({
                    createLocalApiErrorHandlerAccountSwitch: Object(o.d)("ACCOUNT_SWITCHER_ACCOUNT_SWITCH"),
                    createLocalApiErrorHandlerMultiListFetch: Object(o.d)("ACCOUNT_SWITCHER_MULTI_LIST_FETCH"),
                    fetchMultiAccountList: u.c,
                    switchAccount: u.l
                }))).adjustStateProps((({
                    fetchStatus: e,
                    loggedInUser: t,
                    multiAccountUsers: n,
                    hasMultiAccountBadges: a
                }) => ({
                    fetchStatus: e === l.a.NONE ? l.a.LOADING : e,
                    hasMultiAccountBadges: !!t && a,
                    loggedInUser: t,
                    multiAccountUsers: n
                }))).withAnalytics({
                    page: "nav",
                    section: "account_switcher"
                }),
                p = n("3Wr5"),
                m = n("55jz"),
                g = n("0kTQ"),
                _ = "SideNav_AccountSwitcher_Button",
                w = "AccountSwitcher_AddAccount_Button",
                E = "AccountSwitcher_Logout_Button",
                b = "AccountSwitcher_ManageAccounts_Button",
                C = n("yrzJ"),
                A = n("y8wG"),
                f = n("3XMw"),
                y = n.n(f);
            const I = y.a.j0a8da6e,
                S = y.a.c6f2bf00;
            class M extends r.Component {
                constructor(...e) {
                    super(...e), s()(this, "_navVisualRefreshEnabled", this.context.featureSwitches.isTrue("responsive_web_nav_visual_refresh_enabled")), s()(this, "_renderMenuSheet", (e => {
                        const {
                            createLocalApiErrorHandlerMultiListFetch: t,
                            fetchMultiAccountList: n,
                            fetchStatus: a,
                            loggedInUser: s,
                            multiAccountUsers: c
                        } = this.props;
                        return s ? r.createElement(m.a, {
                            accountSwitch: this._multiAccountSwitch,
                            accountUsers: c,
                            activeUser: s,
                            additionalMenuItems: this._getAdditionalAccountMenuItems(),
                            createLocalApiErrorHandlerAccountsFetch: t,
                            fetchAccounts: n,
                            fetchStatus: a,
                            onClose: e,
                            shouldDisplayFetchRenderer: this._hasMultiAccountCookie(),
                            withBadges: !0
                        }) : null
                    })), s()(this, "_multiAccountSwitch", (({
                        hasBadge: e,
                        isProtected: t,
                        userId: n
                    }) => {
                        const {
                            analytics: a,
                            createLocalApiErrorHandlerAccountSwitch: s,
                            switchAccount: r
                        } = this.props;
                        a.scribe({
                            component: t ? "switch_to_protected_account" : "switch_account",
                            element: e ? "account_badged" : "account",
                            action: "click"
                        }), r({
                            user_id: n
                        }).catch(s(g.a))
                    })), s()(this, "_getAdditionalAccountMenuItems", (() => {
                        const {
                            loggedInUser: e,
                            multiAccountUsers: t
                        } = this.props, n = t.length > 1, a = [];
                        var s;
                        return t.length >= 5 || a.push({
                            actionText: I,
                            link: "/account/add",
                            scribeElement: "add_existing_account",
                            testID: w
                        }), n && a.push({
                            actionText: S,
                            link: "/account/switch",
                            scribeElement: "manage_accounts",
                            testID: b
                        }), e && a.push({
                            actionText: (s = e.screen_name, r.createElement(y.a.I18NFormatMessage, {
                                $i18n: "i9bec47a"
                            }, r.createElement(C.a, {
                                color: "normal",
                                screenName: s
                            }))),
                            link: "/logout",
                            scribeElement: "log_out",
                            testID: E
                        }), a
                    })), s()(this, "_handleAccountSwitcherClick", (() => {
                        const {
                            analytics: e
                        } = this.props;
                        e.scribe({
                            action: "click"
                        })
                    })), s()(this, "_hasMultiAccountCookie", (() => {
                        const {
                            hasMultiAccountCookie: e
                        } = Object(p.a)();
                        return e
                    }))
                }
                render() {
                    const {
                        analytics: e,
                        hasMultiAccountBadges: t,
                        isExpanded: n,
                        loggedInUser: a
                    } = this.props;
                    return r.createElement(A.a, {
                        analytics: e,
                        currentUser: a,
                        hasMultiAccountBadges: t,
                        interactiveViewTestId: _,
                        isExpanded: n,
                        renderMenuSheet: this._renderMenuSheet,
                        withVisualRefresh: this._navVisualRefreshEnabled
                    })
                }
            }
            s()(M, "contextType", c.a);
            var k = h(M),
                v = n("1eTX"),
                x = n("jwTb"),
                B = n("Irs7"),
                T = n("eqgg");
            const U = y.a.bea869b3;
            class L extends r.Component {
                constructor(...e) {
                    super(...e), s()(this, "_handlePress", (e => {
                        const {
                            analytics: t
                        } = this.props;
                        t.scribe({
                            component: "new_tweet_button",
                            action: "click"
                        })
                    }))
                }
                render() {
                    const {
                        composeOptions: e,
                        isExpanded: t,
                        testID: n
                    } = this.props;
                    return r.createElement(T.a, {
                        icon: P,
                        isExpanded: t,
                        label: U,
                        link: {
                            pathname: "/compose/tweet",
                            state: e
                        },
                        onPress: this._handlePress,
                        testID: n
                    })
                }
            }
            const P = r.createElement(x.a, null);
            var H = Object(B.a)(L),
                N = n("N5qz"),
                O = "SideNav_NewTweet_Button",
                F = n("MWbm"),
                R = n("cHvH"),
                D = n("rHpw");
            class V extends r.Component {
                render() {
                    const {
                        SideNavButton: e,
                        TabBar: t,
                        history: n,
                        isCollapsedSmall: a,
                        isExpanded: s,
                        isLoggedIn: c,
                        isTwoColumn: i,
                        logoButton: o,
                        location: l,
                        onTabRefresh: d,
                        TeamsSwitcher: u,
                        widthStyle: h,
                        withTweetButton: p
                    } = this.props, m = [W.root, h, a ? W.rootPaddingSmall : W.rootPaddingNormal], g = o || r.createElement(v.a, {
                        onClick: d,
                        pullLeft: !1,
                        size: "large"
                    });
                    return r.createElement(R.a, null, (({
                        windowHeight: a
                    }) => r.createElement(F.a, {
                        style: m
                    }, r.createElement(F.a, {
                        style: [W.topSection, !s && W.alignItemsCenter]
                    }, r.createElement(F.a, {
                        style: W.topControl
                    }, g), r.createElement(F.a, {
                        style: [W.appTabBar, !s && W.alignItemsCenter]
                    }, r.createElement(t, {
                        history: n,
                        layout: "vertical",
                        location: l,
                        onTabRefresh: d,
                        wideMode: i,
                        withExtendedItems: !0,
                        withLabel: s
                    })), c && (e || p) ? this._renderButton(a) : null), c ? r.createElement(F.a, {
                        style: [W.footerContainer, !s && W.alignItemsCenter]
                    }, r.createElement(k, {
                        isExpanded: s
                    }), u ? r.createElement(u, {
                        isExpanded: s
                    }) : null) : null)))
                }
                _renderButton(e) {
                    const {
                        SideNavButton: t,
                        composeOptions: n,
                        isExpanded: a
                    } = this.props;
                    return r.createElement(F.a, {
                        style: [W.button, !a && W.alignItemsCenter, "tall" === N.a.getHeightMode(e) && W.withTallHeight]
                    }, t ? r.createElement(t, {
                        isExpanded: a
                    }) : r.createElement(H, {
                        composeOptions: n,
                        isExpanded: a,
                        testID: O
                    }))
                }
            }
            s()(V, "defaultProps", {
                withTweetButton: !0
            });
            const W = D.a.create((e => ({
                root: {
                    height: "100%",
                    overflowY: "auto",
                    justifyContent: "space-between"
                },
                rootPaddingNormal: {
                    paddingHorizontal: e.spaces.space12
                },
                rootPaddingSmall: {
                    paddingHorizontal: e.spaces.space4
                },
                topSection: {
                    alignItems: "flex-start"
                },
                topControl: {
                    paddingVertical: e.spaces.space2,
                    maxWidth: "100%"
                },
                appTabBar: {
                    marginBottom: e.spaces.space4,
                    marginTop: e.spaces.space2,
                    width: "100%"
                },
                button: {
                    marginVertical: e.spaces.space4,
                    width: "90%"
                },
                withTallHeight: {
                    marginVertical: e.spaces.space16
                },
                alignItemsCenter: {
                    alignItems: "center"
                },
                settingsButton: {
                    marginBottom: e.spaces.space20,
                    marginHorizontal: e.spaces.space4
                },
                footerContainer: {
                    marginVertical: e.spaces.space12
                }
            })))
        },
        OOKO: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return c
            }));
            var a = n("ERkP"),
                s = n("rHpw"),
                r = n("MWbm");

            function c({
                spacing: e
            }) {
                return a.createElement(r.a, {
                    accessibilityRole: "separator",
                    style: [i.divider, {
                        marginVertical: null != e ? s.a.theme.spaces[e] : void 0
                    }]
                })
            }
            const i = s.a.create((e => ({
                divider: {
                    backgroundColor: e.colors.borderColor,
                    height: e.borderWidths.small
                }
            })))
        },
        y8wG: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return I
            }));
            var a = n("KEM+"),
                s = n.n(a),
                r = (n("kYxP"), n("ERkP")),
                c = n("ZUOq"),
                i = n("3XMw"),
                o = n.n(i),
                l = n("ACHU"),
                d = n("aWzz"),
                u = n("MWbm"),
                h = n("I4+6"),
                p = n("rHpw"),
                m = n("XP29"),
                g = n("jV+4"),
                _ = n("Znyr"),
                w = n("OiMc"),
                E = n("cm6r");
            const b = o.a.d86bbf0f,
                C = o.a.h6beb5fa,
                A = o.a.b8e1d524,
                f = o.a.gef27c4c,
                y = e => e ? h.a.generate({
                    backgroundColor: "transparent",
                    color: p.a.theme.colors.text
                }) : void 0;
            class I extends r.Component {
                constructor(...e) {
                    super(...e), s()(this, "_renderUser", (e => {
                        const {
                            isExpanded: t
                        } = this.props, {
                            name: n,
                            screen_name: a,
                            profile_image_url_https: s,
                            protected: c,
                            verified: i
                        } = e;
                        return r.createElement(r.Fragment, null, r.createElement(u.a, null, r.createElement(m.a, {
                            accessibilityLabel: n,
                            screenName: a,
                            size: "xLarge",
                            uri: s
                        }), t ? null : this._renderBadge()), t ? r.createElement(r.Fragment, null, r.createElement(g.a, {
                            isProtected: c,
                            isVerified: i,
                            name: n,
                            screenName: a,
                            style: S.userName,
                            withStackedLayout: !0
                        }), r.createElement(u.a, {
                            style: S.iconContainer
                        }, r.createElement(l.a, {
                            style: S.icon
                        }), t ? this._renderBadge() : null)) : null)
                    })), s()(this, "_renderEmptyState", (() => {
                        const {
                            renderEmptyState: e
                        } = this.props;
                        return e ? r.createElement(u.a, {
                            style: S.emptyStateWrapper
                        }, e()) : null
                    })), s()(this, "_renderBadge", (() => {
                        const {
                            isExpanded: e,
                            hasMultiAccountBadges: t
                        } = this.props;
                        return t ? r.createElement(_.a, {
                            pip: !0,
                            style: e && S.pip,
                            truncatedCountFormatter: C,
                            unreadCountLabel: b
                        }) : null
                    })), s()(this, "_handleAccountSwitcherClick", (() => {
                        const {
                            analytics: e
                        } = this.props;
                        e.scribe({
                            action: "click"
                        })
                    }))
                }
                render() {
                    const {
                        accessibilityLabel: e,
                        currentUser: t,
                        hoverLabel: n,
                        interactiveViewTestId: a,
                        isExpanded: s,
                        renderEmptyState: c,
                        renderMenuSheet: i,
                        withVisualRefresh: o
                    } = this.props;
                    return t || c ? r.createElement(w.a, {
                        contentStyle: S.menuContainer,
                        enableEnterKeyToggle: !0,
                        renderContent: i,
                        withArrow: !0,
                        withFixedPosition: !0
                    }, r.createElement(E.a, {
                        accessibilityLabel: e || f,
                        accessibilityRole: "button",
                        hoverLabel: s ? void 0 : {
                            label: n || A
                        },
                        interactiveStyles: y(o),
                        onClick: this._handleAccountSwitcherClick,
                        style: S.anchorContainer,
                        testID: a
                    }, t ? this._renderUser(t) : this._renderEmptyState())) : null
                }
            }
            s()(I, "contextTypes", {
                featureSwitches: d.object
            });
            const S = p.a.create((e => ({
                anchorContainer: {
                    alignItems: "center",
                    borderRadius: e.borderRadii.infinite,
                    display: "flex",
                    flexDirection: "row",
                    padding: e.spaces.space12
                },
                icon: {
                    color: e.colors.text
                },
                iconContainer: {
                    alignItems: "flex-end",
                    flexGrow: 1
                },
                pip: {
                    position: "absolute",
                    right: `calc(-1 * ${e.spaces.space4})`,
                    top: `calc(-1 * ${e.spaces.space4})`
                },
                userName: {
                    flexGrow: 1,
                    marginHorizontal: e.spaces.space12
                },
                menuContainer: {
                    width: c.a.cardWidth.normal
                },
                emptyStateWrapper: {
                    height: e.spaces.space40,
                    minWidth: e.spaces.space40,
                    width: "100%"
                }
            })))
        }
    }
]);
//# sourceMappingURL=https://ton.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.SideNav.ca7b0445.js.map