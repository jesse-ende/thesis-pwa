(window.webpackJsonp = window.webpackJsonp || []).push([
    [79, 102], {
        441: function(e, t, r) {
            "use strict";

            function n(e, t, r, n, c, o, s, i) {
                var a, l = "function" == typeof e ? e.options : e;
                if (t && (l.render = t, l.staticRenderFns = r, l._compiled = !0), n && (l.functional = !0), o && (l._scopeId = "data-v-" + o), s ? (a = function(e) {
                        (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), c && c.call(this, e), e && e._registeredComponents && e._registeredComponents.add(s)
                    }, l._ssrRegister = a) : c && (a = i ? function() {
                        c.call(this, this.$root.$options.shadowRoot)
                    } : c), a)
                    if (l.functional) {
                        l._injectStyles = a;
                        var u = l.render;
                        l.render = function(e, t) {
                            return a.call(t), u(e, t)
                        }
                    } else {
                        var p = l.beforeCreate;
                        l.beforeCreate = p ? [].concat(p, a) : [a]
                    }
                return {
                    exports: e,
                    options: l
                }
            }
            r.d(t, "a", (function() {
                return n
            }))
        },
        549: function(e, t, r) {},
        702: function(e, t, r) {
            "use strict";
            var n = r(549);
            r.n(n).a
        },
        852: function(e, t, r) {
            "use strict";
            r.r(t);
            r(8), r(23), r(15), r(38), r(47), r(25), r(16);
            var n = r(58);

            function c(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function o(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            var s = {
                    props: {
                        type: {
                            type: String,
                            default: "header"
                        }
                    },
                    computed: function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? c(Object(r), !0).forEach((function(t) {
                                o(e, t, r[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                            }))
                        }
                        return e
                    }({}, Object(n.c)("page", ["currentLocale", "languages"]), {}, Object(n.c)("ui", ["getOverlayVisibility"]), {
                        dropdownVisibility: function() {
                            return this.getOverlayVisibility("localeSwitcher")
                        }
                    }),
                    mounted: function() {
                        this.$store.dispatch("ui/registerOverlay", {
                            id: "localeSwitcher",
                            settings: {
                                type: "header",
                                vueComponent: "LocaleSwitcherPanel",
                                wrapperOffset: "header"
                            }
                        })
                    },
                    methods: {
                        toggleDropdown: function() {
                            this.$store.dispatch("ui/toggleOverlay", {
                                id: "localeSwitcher"
                            })
                        }
                    }
                },
                i = (r(702), r(441)),
                a = Object(i.a)(s, (function() {
                    var e = this,
                        t = e.$createElement,
                        r = e._self._c || t;
                    return r("div", {
                        staticClass: "locale-switcher"
                    }, [e.languages && e.languages.length > 1 && "header" === e.type ? r("div", {
                        staticClass: "language-switcher"
                    }, [r("ul", {
                        staticClass: "language-switcher__languages"
                    }, e._l(e.languages, (function(t) {
                        return r("li", {
                            key: t.id
                        }, [r("a", {
                            class: {
                                active: t.active
                            },
                            attrs: {
                                href: t.urls.redirect
                            }
                        }, [e._v(e._s(t.language))])])
                    })), 0)]) : e._e(), e._v(" "), e.currentLocale ? r("div", {
                        staticClass: "country-switcher",
                        class: {
                            "country-switcher--panel-visible": e.dropdownVisibility
                        }
                    }, ["footer" === e.type ? r("span", {
                        staticClass: "country-switcher__label"
                    }, [e._v("Country: ")]) : e._e(), e._v(" "), "header" === e.type ? r("div", {
                        staticClass: "country-switcher__toggle",
                        on: {
                            click: e.toggleDropdown
                        }
                    }, [r("span", {
                        staticClass: "country-name country-flag",
                        class: "country-flag--" + e.currentLocale.country
                    }, [e._v(e._s(e.currentLocale.countryLabel))])]) : r("div", {
                        staticClass: "country-switcher__other"
                    }, [r("span", {
                        staticClass: "country-name country-flag",
                        class: "country-flag--" + e.currentLocale.country
                    }, [e._v(e._s(e.currentLocale.countryLabel))])])]) : e._e()])
                }), [], !1, null, "1363cac6", null);
            t.default = a.exports
        }
    }
]);