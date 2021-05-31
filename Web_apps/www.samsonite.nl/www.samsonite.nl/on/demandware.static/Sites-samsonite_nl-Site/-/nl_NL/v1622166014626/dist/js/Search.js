(window.webpackJsonp = window.webpackJsonp || []).push([
    [135, 102], {
        441: function(e, t, n) {
            "use strict";

            function r(e, t, n, r, s, i, o, c) {
                var a, u = "function" == typeof e ? e.options : e;
                if (t && (u.render = t, u.staticRenderFns = n, u._compiled = !0), r && (u.functional = !0), i && (u._scopeId = "data-v-" + i), o ? (a = function(e) {
                        (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), s && s.call(this, e), e && e._registeredComponents && e._registeredComponents.add(o)
                    }, u._ssrRegister = a) : s && (a = c ? function() {
                        s.call(this, this.$root.$options.shadowRoot)
                    } : s), a)
                    if (u.functional) {
                        u._injectStyles = a;
                        var l = u.render;
                        u.render = function(e, t) {
                            return a.call(t), l(e, t)
                        }
                    } else {
                        var p = u.beforeCreate;
                        u.beforeCreate = p ? [].concat(p, a) : [a]
                    }
                return {
                    exports: e,
                    options: u
                }
            }
            n.d(t, "a", (function() {
                return r
            }))
        },
        493: function(e, t, n) {
            "use strict";
            var r = n(94),
                s = n(22),
                i = n(51),
                o = n(494),
                c = n(95);
            r("search", 1, (function(e, t, n) {
                return [function(t) {
                    var n = i(this),
                        r = null == t ? void 0 : t[e];
                    return void 0 !== r ? r.call(t, n) : new RegExp(t)[e](String(n))
                }, function(e) {
                    var r = n(t, e, this);
                    if (r.done) return r.value;
                    var i = s(e),
                        a = String(this),
                        u = i.lastIndex;
                    o(u, 0) || (i.lastIndex = 0);
                    var l = c(i, a);
                    return o(i.lastIndex, u) || (i.lastIndex = u), null === l ? -1 : l.index
                }]
            }))
        },
        494: function(e, t) {
            e.exports = Object.is || function(e, t) {
                return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
            }
        },
        582: function(e, t, n) {},
        583: function(e, t, n) {},
        656: function(e, t, n) {},
        731: function(e, t, n) {
            "use strict";
            var r = n(582);
            n.n(r).a
        },
        732: function(e, t, n) {
            "use strict";
            var r = n(583);
            n.n(r).a
        },
        751: function(e, t, n) {},
        796: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "default", (function() {
                return l
            }));
            n(8), n(17), n(18), n(5), n(39), n(40), n(2), n(41), n(19), n(12), n(9);
            var r = n(13);
            n(656);

            function s(e) {
                return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function i(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function o(e, t) {
                return (o = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function c(e, t) {
                return !t || "object" !== s(t) && "function" != typeof t ? function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e) : t
            }

            function a() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }

            function u(e) {
                return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }
            var l = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && o(e, t)
                }(r, e);
                var t, n = (t = r, function() {
                    var e, n = u(t);
                    if (a()) {
                        var r = u(this).constructor;
                        e = Reflect.construct(n, arguments, r)
                    } else e = n.apply(this, arguments);
                    return c(this, e)
                });

                function r() {
                    return i(this, r), n.apply(this, arguments)
                }
                return r
            }(r.a)
        },
        815: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "default", (function() {
                return y
            }));
            n(8), n(17), n(18), n(10), n(61), n(5), n(38), n(39), n(40), n(2), n(41), n(341), n(19), n(12), n(9);
            var r = n(13),
                s = n(1),
                i = n(59);
            n(751);

            function o(e) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function c(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function a(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function u(e, t, n) {
                return (u = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
                    var r = function(e, t) {
                        for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = h(e)););
                        return e
                    }(e, t);
                    if (r) {
                        var s = Object.getOwnPropertyDescriptor(r, t);
                        return s.get ? s.get.call(n) : s.value
                    }
                })(e, t, n || e)
            }

            function l(e, t) {
                return (l = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function p(e, t) {
                return !t || "object" !== o(t) && "function" != typeof t ? g(e) : t
            }

            function g(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function f() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (e) {
                    return !1
                }
            }

            function h(e) {
                return (h = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                })(e)
            }

            function d(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var y = function(e) {
                ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && l(e, t)
                }(m, e);
                var t, n, r, o, y = (t = m, function() {
                    var e, n = h(t);
                    if (f()) {
                        var r = h(this).constructor;
                        e = Reflect.construct(n, arguments, r)
                    } else e = n.apply(this, arguments);
                    return p(this, e)
                });

                function m() {
                    var e;
                    c(this, m);
                    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    return d(g(e = y.call.apply(y, [this].concat(n))), "$cache", {
                        main: "#plpMain",
                        mainContent: "#maincontent",
                        searchResult: ".search-result",
                        searchResultOptions: ".search-result-options",
                        searchResultContent: ".search-result-content",
                        filterWrapperMobile: "#filter-wrapper-mobile",
                        filterOptionsMobile: "#filter-options-mobile",
                        sortingWrapperMobile: "#sorting-wrapper-mobile",
                        filterWrapperDesktop: "#filter-wrapper-desktop",
                        filterOptionsDesktop: ".filter-option_filters-wrapper",
                        sortingWrapperDesktop: "#sorting-wrapper-desktop",
                        sortingOptions: ".sorting-option"
                    }), e
                }
                return n = m, (r = [{
                    key: "init",
                    value: function() {
                        u(h(m.prototype), "init", this).call(this), this.addToCache("gridTiles", ".grid-tile", !0), this.addToCache("productTileImages", ".grid-tile .product-tile__image", !0), this.initEvents()
                    }
                }, {
                    key: "initEvents",
                    value: function() {
                        var e = this;
                        this.registerStickyElements(), this.registerMobileRefinements(), this.registerDesktopRefinements(), this.initMobileEvents(), this.initDesktopEvents(), this.addStoreWatcher("page/EMIT_EVENT", "subscribeMutation", (function(t) {
                            ["pageLoad", "componentLoad"].includes(t) && (e.addToCache("gridTiles", ".grid-tile", !0), e.addToCache("productTileImages", ".grid-tile .product-tile__image", !0)), ["pageLoad", "componentLoad", "resize"].includes(t) && e.setGridTileHeights()
                        })), Object(s.d)(".sorting-option", "click", null, (function(t) {
                            t.stopPropagation(), t.preventDefault(), e.app.store.commit("ui/ADD_LOADER", "productSearchResult"), e.app.store.commit("productSearch/SORT", t.currentTarget.innerText), e.app.store.dispatch("page/updatePageComponent", {
                                callback: function() {
                                    e.app.store.commit("ui/REMOVE_LOADER", "productSearchResult")
                                },
                                container: e.$elements.main,
                                pageUrl: t.currentTarget.href,
                                requestUrl: t.currentTarget.dataset.ajaxUrl,
                                replaceState: !0
                            })
                        }))
                    }
                }, {
                    key: "setGridTileHeights",
                    value: function(e) {
                        Object(s.i)(this.$elements.productTileImages, e)
                    }
                }, {
                    key: "registerStickyElements",
                    value: function() {
                        this.app.modules.UI.registerStickyElement({
                            id: "filter-options-mobile",
                            selector: "#filter-options-mobile",
                            index: 7,
                            addScrollMargin: !0,
                            addOffset: !0
                        }), this.app.modules.UI.registerStickyElement({
                            id: "search-result-options",
                            selector: ".search-result-options",
                            index: 7,
                            addScrollMargin: !0,
                            addOffset: !0
                        })
                    }
                }, {
                    key: "registerMobileRefinements",
                    value: function() {
                        var e = this;
                        this.app.modules.Overlays.registerOverlay("filtersMobile", {
                            type: "sidepanel",
                            lazy: !0,
                            vueComponent: "ProductSearchRefinements",
                            wrapperOffset: "filter-options-mobile",
                            onOpen: function() {
                                Object(s.c)(e.$elements.filterWrapperMobile, "active")
                            },
                            onClose: function() {
                                Object(s.s)(e.$elements.filterWrapperMobile, "active")
                            }
                        })
                    }
                }, {
                    key: "toggleMobileRefinements",
                    value: function() {
                        this.app.modules.Overlays.toggleOverlay("filtersMobile")
                    }
                }, {
                    key: "registerDesktopRefinements",
                    value: function() {
                        var e = this;
                        this.addStoreWatcher((function(e) {
                            return e.productSearch.refinementsOpen
                        }), "getter", (function(t) {
                            var n = e.app.store.state.ui.viewport;
                            Object(s.t)(e.$elements.filterWrapperDesktop, t, "active"), Object(s.t)(e.$elements.mainContent, t, "refinementsOpen"), setTimeout((function() {
                                e.app.modules.UI.updateStickyElements(), t && n.width >= 1024 && i.a.set(e.$elements.searchResult, {
                                    css: {
                                        overflow: "visible"
                                    }
                                })
                            }), 300), e.setGridTileHeights(300), !t && n.width >= 1024 && i.a.set(e.$elements.searchResult, {
                                css: {
                                    overflow: "hidden"
                                }
                            })
                        }), {
                            immediate: !0
                        })
                    }
                }, {
                    key: "toggleDesktopRefinements",
                    value: function() {
                        this.app.store.dispatch("productSearch/toggleRefinements")
                    }
                }, {
                    key: "registerToggle",
                    value: function(e, t, n, r, i) {
                        var o = this;
                        Object(s.d)(e, "click", null, (function(s) {
                            s.preventDefault(), e.classList.contains("active") ? i() : !t.classList.contains("fixed") && n ? o.app.modules.UI.scrollTo(n, null, null, (function() {
                                r()
                            })) : r()
                        }))
                    }
                }, {
                    key: "initMobileEvents",
                    value: function() {
                        var e = this,
                            t = this.$elements.filterWrapperMobile,
                            n = this.$elements.filterOptionsMobile,
                            r = this.$elements.sortingWrapperMobile,
                            i = this.$elements.sortingOptions,
                            o = document.createElement("div");
                        o.className = "search-result-content__scroll-target", this.$elements.gridTiles[0].parentNode.insertBefore(o, this.$elements.gridTiles[0]), this.registerToggle(t, n, o, (function() {
                            e.toggleMobileRefinements()
                        }), (function() {
                            e.toggleMobileRefinements()
                        })), this.registerToggle(r, n, null, (function() {
                            Object(s.c)(r, "active")
                        }), (function() {
                            Object(s.s)(r, "active")
                        })), Object(s.d)(i, "click", null, (function(t) {
                            e.app.modules.UI.scrollTo(o)
                        })), Object(s.d)("#sortby-close-mobile", "click", null, (function(e) {
                            e.stopPropagation(), Object(s.s)(r, "active")
                        }))
                    }
                }, {
                    key: "initDesktopEvents",
                    value: function() {
                        var e = this,
                            t = this.$elements.filterWrapperDesktop,
                            n = this.$elements.filterOptionsDesktop,
                            r = this.$elements.sortingWrapperDesktop,
                            i = this.$elements.searchResult,
                            o = this.$elements.sortingOptions;
                        this.registerToggle(t, n, i, (function() {
                            e.toggleDesktopRefinements()
                        }), (function() {
                            e.toggleDesktopRefinements()
                        })), this.registerToggle(r, n, null, (function() {
                            Object(s.c)(r, "active")
                        }), (function() {
                            Object(s.s)(r, "active")
                        })), Object(s.d)(o, "click", null, (function(t) {
                            e.app.modules.UI.scrollTo(i)
                        })), Object(s.d)("#sortby-close-desktop", "click", null, (function(e) {
                            e.stopPropagation(), Object(s.s)(r, "active")
                        }))
                    }
                }]) && a(n.prototype, r), o && a(n, o), m
            }(r.a)
        },
        877: function(e, t, n) {
            "use strict";
            n.r(t);
            n(8), n(10), n(23), n(15), n(80), n(38), n(47), n(25), n(2), n(4), n(123), n(31), n(19), n(344), n(493), n(16), n(20);
            var r = n(58),
                s = (n(21), n(97)),
                i = n.n(s);

            function o(e, t, n, r, s, i, o) {
                try {
                    var c = e[i](o),
                        a = c.value
                } catch (e) {
                    return void n(e)
                }
                c.done ? t(a) : Promise.resolve(a).then(r, s)
            }

            function c(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(r, s) {
                        var i = e.apply(t, n);

                        function c(e) {
                            o(i, r, s, c, a, "next", e)
                        }

                        function a(e) {
                            o(i, r, s, c, a, "throw", e)
                        }
                        c(void 0)
                    }))
                }
            }

            function a(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(n), !0).forEach((function(t) {
                        l(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function l(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var p = {
                    props: {
                        position: {
                            type: String,
                            required: !0
                        }
                    },
                    data: function() {
                        return {
                            cancelProductTiles: null,
                            cancelSuggestions: null,
                            enableSuggestions: !1,
                            overlayId: "searchResults",
                            loading: !1,
                            prevProductTiles: "",
                            searchClass: "search--".concat(this.position),
                            query: ""
                        }
                    },
                    computed: u({}, Object(r.c)("searchSuggestions", ["getActionUrl", "getResource"]), {}, Object(r.c)("ui", ["getOverlayById", "getOverlayVisibility"]), {}, Object(r.e)({
                        categorySuggestions: function(e, t) {
                            return t["searchSuggestions/".concat(this.position, "/categorySuggestions")]
                        },
                        contentSuggestions: function(e, t) {
                            return t["searchSuggestions/".concat(this.position, "/contentSuggestions")]
                        },
                        contentFolderSuggestions: function(e, t) {
                            return t["searchSuggestions/".concat(this.position, "/contentFolderSuggestions")]
                        },
                        productSuggestions: function(e, t) {
                            return t["searchSuggestions/".concat(this.position, "/productSuggestions")]
                        },
                        uniqueProductSuggestions: function(e, t) {
                            return t["searchSuggestions/".concat(this.position, "/uniqueProductSuggestions")]
                        },
                        searchPhraseSuggestions: function(e, t) {
                            return t["searchSuggestions/".concat(this.position, "/searchPhraseSuggestions")]
                        },
                        submitSearchUrl: function(e, t) {
                            return t["searchSuggestions/".concat(this.position, "/submitSearchUrl")]
                        }
                    }), {
                        active: function() {
                            return this.getOverlayVisibility(this.overlayId)
                        },
                        ajaxUrl: function() {
                            return "".concat(this.getActionUrl("getSuggestions"), "?q=").concat(this.query)
                        },
                        searchUrl: function() {
                            return "".concat(this.getActionUrl("getSearchUrl"), "?q=").concat(this.query)
                        },
                        searchOverlay: function() {
                            return this.getOverlayById(this.overlayId)
                        },
                        searchStyles: function() {
                            var e = {};
                            return this.showSuggestions && this.searchOverlay && this.searchOverlay.height && (e.height = "".concat(this.searchOverlay.height, "px")), e
                        },
                        showSuggestions: function() {
                            var e = this.productSuggestions && this.productSuggestions.length > 0 || this.contentSuggestions && this.contentSuggestions.length > 0 || this.categorySuggestions && this.categorySuggestions.length > 0;
                            return this.active && this.enableSuggestions && e
                        }
                    }),
                    watch: {
                        query: function() {
                            this.updateSearch()
                        },
                        active: function(e) {
                            var t = this;
                            e ? this.$nextTick((function() {
                                t.$refs.search.focus()
                            })) : this.query = ""
                        }
                    },
                    created: function() {
                        var e = this;
                        this.REGISTER_SUGGESTIONS(this.position), this.updateSearch = i()(c(regeneratorRuntime.mark((function t() {
                            var n, r;
                            return regeneratorRuntime.wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (!(e.query && e.query.length >= 3)) {
                                            t.next = 10;
                                            break
                                        }
                                        return n = "".concat(e.query), e.$store.dispatch("productLists/resetProducts", "suggestions"), e.cancelSuggestions && "function" == typeof e.cancelSuggestions && e.cancelSuggestions("searchSuggestionsUpdated"), t.next = 6, e.$store.dispatch("searchSuggestions/".concat(e.position, "/updateSuggestions"), {
                                            callback: function() {
                                                e.enableSuggestions = e.query && e.query.length >= 3, e.enableSuggestions && (e.$store.commit("ui/SEARCH_TRIGGERED", {
                                                    searchTerm: n
                                                }), e.loadProductTiles(n))
                                            },
                                            params: {
                                                q: e.query
                                            }
                                        });
                                    case 6:
                                        (r = t.sent).cancel && (e.cancelSuggestions = r.cancel), t.next = 12;
                                        break;
                                    case 10:
                                        e.enableSuggestions = !1, e.prevProductTiles = "";
                                    case 12:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        }))), 300, {
                            leading: !0
                        })
                    },
                    mounted: function() {
                        this.$store.dispatch("ui/registerOverlay", {
                            id: this.overlayId,
                            settings: {
                                type: "search",
                                wrapperOffset: "header"
                            }
                        })
                    },
                    methods: u({}, Object(r.b)("page", ["updatePageComponent"]), {}, Object(r.d)("searchSuggestions", ["REGISTER_SUGGESTIONS"]), {}, Object(r.d)("ui", ["ADD_LOADER", "REMOVE_LOADER"]), {
                        highlightSearchTerm: function(e) {
                            return e.replace(new RegExp(this.query, "gi"), (function(e) {
                                return "<strong>".concat(e, "</strong>")
                            }))
                        },
                        openSearch: function() {
                            this.active || (this.$store.dispatch("ui/openOverlay", {
                                id: this.overlayId
                            }), this.$store.commit("ui/SEARCH_OPENED"))
                        },
                        closeSearch: function() {
                            this.active && (this.$store.dispatch("ui/closeOverlay", {
                                id: this.overlayId
                            }), this.$store.commit("ui/SEARCH_CLOSED"))
                        },
                        submitSearch: function() {
                            this.query && (this.$store.commit("ui/SEARCH_SUBMITTED", {
                                searchTerm: this.query,
                                searchUrl: this.searchUrl
                            }), window.location.href = this.searchUrl)
                        },
                        loadProductTiles: function(e) {
                            var t = this;
                            return c(regeneratorRuntime.mark((function n() {
                                var r, s, i;
                                return regeneratorRuntime.wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            if (r = t.uniqueProductSuggestions.join(","), s = t.uniqueProductSuggestions.length, r !== t.prevProductTiles) {
                                                n.next = 5;
                                                break
                                            }
                                            return t.$store.commit("ui/SEARCH_RESPONDED", {
                                                searchTerm: e,
                                                type: "products",
                                                productsFoundCount: s
                                            }), n.abrupt("return");
                                        case 5:
                                            return t.cancelProductTiles && "function" == typeof t.cancelProductTiles && t.cancelProductTiles("productTilesUpdated"), t.loading = !0, t.$refs.searchResultWrapper && (t.$refs.searchResultWrapper.innerHTML = ""), n.next = 10, t.updatePageComponent({
                                                callback: function() {
                                                    t.loading = !1, t.$store.commit("ui/SEARCH_RESPONDED", {
                                                        searchTerm: e,
                                                        type: "products",
                                                        productsFoundCount: s,
                                                        pushImpressions: !0
                                                    })
                                                },
                                                container: ".search--".concat(t.position, " .search-result-wrapper"),
                                                params: {
                                                    pids: r,
                                                    productlistid: "suggestions"
                                                },
                                                requestUrl: t.getActionUrl("getProductTiles")
                                            });
                                        case 10:
                                            i = n.sent, t.prevProductTiles = r, i && i.cancel && (t.cancelProductTiles = i.cancel);
                                        case 13:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n)
                            })))()
                        }
                    })
                },
                g = (n(731), n(732), n(441)),
                f = Object(g.a)(p, (function() {
                    var e = this,
                        t = e.$createElement,
                        n = e._self._c || t;
                    return n("div", {
                        class: ["search", {
                            active: e.active
                        }, {
                            "search--loading": e.loading
                        }, e.searchClass],
                        style: e.searchStyles
                    }, [n("div", {
                        staticClass: "search-input"
                    }, [n("div", {
                        staticClass: "search-input__wrapper",
                        on: {
                            click: function(t) {
                                return e.openSearch()
                            }
                        }
                    }, [n("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.query,
                            expression: "query"
                        }],
                        ref: "search",
                        attrs: {
                            type: "text",
                            name: "global-search",
                            value: "",
                            maxlength: "150",
                            placeholder: e.getResource("simplesearch.searchlabel"),
                            required: ""
                        },
                        domProps: {
                            value: e.query
                        },
                        on: {
                            keyup: function(t) {
                                return !t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter") ? null : e.submitSearch(t)
                            },
                            input: function(t) {
                                t.target.composing || (e.query = t.target.value)
                            }
                        }
                    })]), e._v(" "), n("div", {
                        staticClass: "search-input__close",
                        class: {
                            active: e.active
                        },
                        on: {
                            click: e.closeSearch
                        }
                    }, [n("button", {
                        staticClass: "closeButton search"
                    })])]), e._v(" "), e.showSuggestions ? n("div", {
                        staticClass: "search-suggestions",
                        attrs: {
                            "data-scroll-lock-scrollable": ""
                        }
                    }, [n("div", {
                        staticClass: "search-suggestions__wrapper"
                    }, [n("div", {
                        staticClass: "search-suggestions__categories"
                    }, [e.searchPhraseSuggestions && e.searchPhraseSuggestions.length > 0 ? n("div", {
                        staticClass: "categories__block"
                    }, [n("ul", {
                        staticClass: "categories__results"
                    }, e._l(e.searchPhraseSuggestions, (function(t) {
                        return n("li", {
                            key: e.position + "_" + t.phrase,
                            staticClass: "suggestion"
                        }, [n("a", {
                            staticClass: "suggestion__link",
                            attrs: {
                                href: t.url,
                                "data-track": "yes",
                                "data-action": "click",
                                "data-category": "free-text search",
                                "data-label": t.phrase
                            }
                        }, [n("span", {
                            staticClass: "suggestion__name",
                            domProps: {
                                innerHTML: e._s(e.highlightSearchTerm(t.phrase))
                            }
                        })])])
                    })), 0)]) : e._e(), e._v(" "), e.categorySuggestions && e.categorySuggestions.length > 0 ? n("div", {
                        staticClass: "categories__block"
                    }, [n("div", {
                        staticClass: "categories__title"
                    }, [e._v("\n                        " + e._s(e.getResource("label.suggest.categories")) + "\n                    ")]), e._v(" "), n("ul", {
                        staticClass: "categories__results"
                    }, e._l(e.categorySuggestions, (function(t) {
                        return n("li", {
                            key: e.position + "_" + t.id,
                            staticClass: "suggestion"
                        }, [n("a", {
                            staticClass: "suggestion__link",
                            attrs: {
                                href: t.url,
                                "data-track": "yes",
                                "data-action": "click",
                                "data-category": "free-text search",
                                "data-label": t.title || t.name
                            }
                        }, [n("span", {
                            staticClass: "suggestion__name",
                            domProps: {
                                innerHTML: e._s(e.highlightSearchTerm(t.title || t.name))
                            }
                        })])])
                    })), 0)]) : e._e(), e._v(" "), e._l(e.contentFolderSuggestions, (function(t) {
                        return n("div", {
                            key: t.name,
                            staticClass: "categories__block"
                        }, [n("div", {
                            staticClass: "categories__title"
                        }, [e._v("\n                        " + e._s(t.name) + "\n                    ")]), e._v(" "), n("ul", {
                            staticClass: "categories__results"
                        }, e._l(t.contents, (function(t) {
                            return n("li", {
                                key: t.name,
                                staticClass: "suggestion"
                            }, [n("a", {
                                staticClass: "suggestion__link",
                                attrs: {
                                    href: t.url,
                                    "data-track": "yes",
                                    "data-action": "click",
                                    "data-category": "free-text search",
                                    "data-label": t.name
                                }
                            }, [t.parent ? n("span", {
                                staticClass: "suggestion__parent",
                                domProps: {
                                    innerHTML: e._s(e.highlightSearchTerm(t.parent.name))
                                }
                            }) : e._e(), e._v(" "), n("span", {
                                staticClass: "suggestion__name",
                                domProps: {
                                    innerHTML: e._s(e.highlightSearchTerm(t.name))
                                }
                            })])])
                        })), 0)])
                    })), e._v(" "), e.submitSearchUrl ? n("a", {
                        staticClass: "categories__allresults",
                        attrs: {
                            href: e.submitSearchUrl,
                            "data-track": "yes",
                            "data-action": "click",
                            "data-category": "free-text search",
                            "data-label": "all results"
                        }
                    }, [e._v(e._s(e.getResource("search.allresults")))]) : e._e()], 2), e._v(" "), n("div", {
                        staticClass: "search-suggestions__products"
                    }, [n("div", {
                        ref: "searchResultWrapper",
                        staticClass: "search-result-wrapper"
                    })])])]) : e._e()])
                }), [], !1, null, "2a037776", null);
            t.default = f.exports
        }
    }
]);