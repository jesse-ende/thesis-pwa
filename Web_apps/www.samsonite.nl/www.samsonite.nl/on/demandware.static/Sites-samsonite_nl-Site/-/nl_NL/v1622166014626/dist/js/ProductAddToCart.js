(window.webpackJsonp = window.webpackJsonp || []).push([
    [108, 102], {
        441: function(t, e, r) {
            "use strict";

            function n(t, e, r, n, i, o, a, s) {
                var c, u = "function" == typeof t ? t.options : t;
                if (e && (u.render = e, u.staticRenderFns = r, u._compiled = !0), n && (u.functional = !0), o && (u._scopeId = "data-v-" + o), a ? (c = function(t) {
                        (t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), i && i.call(this, t), t && t._registeredComponents && t._registeredComponents.add(a)
                    }, u._ssrRegister = c) : i && (c = s ? function() {
                        i.call(this, this.$root.$options.shadowRoot)
                    } : i), c)
                    if (u.functional) {
                        u._injectStyles = c;
                        var d = u.render;
                        u.render = function(t, e) {
                            return c.call(e), d(t, e)
                        }
                    } else {
                        var l = u.beforeCreate;
                        u.beforeCreate = l ? [].concat(l, c) : [c]
                    }
                return {
                    exports: t,
                    options: u
                }
            }
            r.d(e, "a", (function() {
                return n
            }))
        },
        457: function(t, e, r) {},
        479: function(t, e, r) {
            "use strict";
            var n = r(457);
            r.n(n).a
        },
        490: function(t, e, r) {
            "use strict";
            r.r(e);
            r(8), r(23), r(15), r(38), r(47), r(25), r(2), r(4), r(16), r(20);
            var n = r(58);

            function i(t, e, r, n, i, o, a) {
                try {
                    var s = t[o](a),
                        c = s.value
                } catch (t) {
                    return void r(t)
                }
                s.done ? e(c) : Promise.resolve(c).then(n, i)
            }

            function o(t) {
                return function() {
                    var e = this,
                        r = arguments;
                    return new Promise((function(n, o) {
                        var a = t.apply(e, r);

                        function s(t) {
                            i(a, n, o, s, c, "next", t)
                        }

                        function c(t) {
                            i(a, n, o, s, c, "throw", t)
                        }
                        s(void 0)
                    }))
                }
            }

            function a(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function s(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            var c = {
                    props: {
                        productId: {
                            type: String,
                            default: "main"
                        },
                        productList: {
                            type: String,
                            default: "Product Detail"
                        }
                    },
                    data: function() {
                        return {
                            loading: !1
                        }
                    },
                    computed: function(t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var r = null != arguments[e] ? arguments[e] : {};
                            e % 2 ? a(Object(r), !0).forEach((function(e) {
                                s(t, e, r[e])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach((function(e) {
                                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                            }))
                        }
                        return t
                    }({}, Object(n.c)("resources", ["getResource"]), {}, Object(n.c)("products", ["getProduct"]), {}, Object(n.e)({
                        product: function(t, e) {
                            return e["products/getProduct"](this.productId)
                        }
                    }), {
                        available: function() {
                            var t, e;
                            return (null == this || null === (t = this.product) || void 0 === t ? void 0 : t.available) && (null == this || null === (e = this.product) || void 0 === e ? void 0 : e.readyToOrder)
                        },
                        childPids: function() {
                            var t;
                            return null == this || null === (t = this.product) || void 0 === t ? void 0 : t.childPids
                        },
                        list: function() {
                            var t = "";
                            if (this.$refs.addToCartTrigger) {
                                var e = this.$refs.addToCartTrigger.closest(".grid-tile, .product-tile-carousel");
                                e && (t = e.dataset.list || "")
                            }
                            return t || this.productList
                        },
                        isAvailableForReservation: function() {
                            var t, e;
                            return null == this || null === (t = this.product) || void 0 === t || null === (e = t.reservation) || void 0 === e ? void 0 : e.isAvailableForReservation
                        },
                        stockIndependentReservation: function() {
                            var t, e;
                            return null == this || null === (t = this.product) || void 0 === t || null === (e = t.reservation) || void 0 === e ? void 0 : e.stockIndependent
                        },
                        showReservationButton: function() {
                            return this.isAvailableForReservation && (this.stockIndependentReservation || !this.available)
                        }
                    }),
                    watch: {
                        childPids: function() {
                            this.updateAvailability()
                        }
                    },
                    mounted: function() {
                        this.product && this.updateAvailability()
                    },
                    methods: {
                        addToCart: function() {
                            var t = this;
                            return o(regeneratorRuntime.mark((function e() {
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t.$emit("triggered"), e.next = 3, t.$store.dispatch("products/".concat(t.productId, "/addToCart"), {
                                                list: t.list
                                            });
                                        case 3:
                                            t.$emit("added");
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        },
                        updateAvailability: function() {
                            var t = this;
                            return o(regeneratorRuntime.mark((function e() {
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t.loading = !0, e.next = 3, t.$store.dispatch("products/updateAvailability", {
                                                productId: t.productId,
                                                pid: t.product.id,
                                                childPids: t.product.childPids
                                            });
                                        case 3:
                                            t.loading = !1;
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        },
                        openReservationDialog: function() {
                            var t = this;
                            return o(regeneratorRuntime.mark((function e() {
                                var r;
                                return regeneratorRuntime.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!t.product) {
                                                e.next = 6;
                                                break
                                            }
                                            return r = {
                                                id: "ProductReservation",
                                                settings: {
                                                    vueComponent: "ProductReservation",
                                                    vueStoreProductId: t.productId
                                                }
                                            }, e.next = 4, t.$store.dispatch("ui/registerOverlay", r);
                                        case 4:
                                            return e.next = 6, t.$store.dispatch("ui/openOverlay", r);
                                        case 6:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))()
                        }
                    }
                },
                u = (r(479), r(441)),
                d = Object(u.a)(c, (function() {
                    var t = this,
                        e = t.$createElement,
                        r = t._self._c || e;
                    return t.showReservationButton ? r("div", {
                        staticClass: "reservation-trigger"
                    }, [r("a", {
                        staticClass: "btn btn--primary btn--full-width",
                        attrs: {
                            href: "#"
                        },
                        on: {
                            click: function(e) {
                                return e.preventDefault(), t.openReservationDialog(e)
                            }
                        }
                    }, [t._v("\n        " + t._s(t.getResource("productreservation.button", "checkout")) + "\n    ")])]) : r("div", {
                        ref: "addToCartTrigger",
                        staticClass: "add-to-cart-trigger"
                    }, [r("a", {
                        staticClass: "btn btn--primary btn--full-width",
                        class: {
                            "btn--disabled": !t.available || t.loading
                        },
                        attrs: {
                            href: "#"
                        },
                        on: {
                            click: function(e) {
                                return e.preventDefault(), t.addToCart(e)
                            }
                        }
                    }, [t._v("\n        " + t._s(t.getResource("button.addtocart", "common")) + "\n    ")])])
                }), [], !1, null, "3ce06e0d", null);
            e.default = d.exports
        }
    }
]);