(window.webpackJsonp = window.webpackJsonp || []).push([
    [105], {
        818: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "default", (function() {
                return w
            }));
            n(8), n(17), n(18), n(23), n(61), n(5), n(42), n(39), n(40), n(2), n(41), n(19), n(62), n(12), n(9);
            var r = n(14),
                o = n.n(r),
                i = n(13),
                u = n(29);

            function c(t) {
                return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                })(t)
            }

            function s(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function a(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                }
            }

            function f(t, e) {
                return (f = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                })(t, e)
            }

            function p(t, e) {
                return !e || "object" !== c(e) && "function" != typeof e ? function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t) : e
            }

            function l() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                } catch (t) {
                    return !1
                }
            }

            function d(t) {
                return (d = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                })(t)
            }
            var w = function(t) {
                ! function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && f(t, e)
                }(w, t);
                var e, n, r, i, c = (e = w, function() {
                    var t, n = d(e);
                    if (l()) {
                        var r = d(this).constructor;
                        t = Reflect.construct(n, arguments, r)
                    } else t = n.apply(this, arguments);
                    return p(this, t)
                });

                function w() {
                    return s(this, w), c.apply(this, arguments)
                }
                return n = w, (r = [{
                    key: "init",
                    value: function() {
                        var t = this;
                        this.renderComponents(), this.addStoreWatcher("powerReviews/ADD_COMPONENT", "subscribeMutation", this.renderComponents.bind(this)), this.addStoreWatcher("powerReviews/pageIds", "getter", (function(e, n) {
                            if (e || n) {
                                var r = (e || []).filter((function(t) {
                                    return !(n || []).includes(t)
                                }));
                                t.app.store.dispatch("powerReviews/getProductRatings", r)
                            }
                        }), {
                            immediate: !0
                        }), this.initPurchase()
                    }
                }, {
                    key: "loadPowerReviews",
                    value: function() {
                        return Object(u.e)("//ui.powerreviews.com/stable/4.0/ui.js", !0)
                    }
                }, {
                    key: "renderComponents",
                    value: function() {
                        var t = this,
                            e = this.app.store.getters["powerReviews/structure"] || [];
                        0 !== e.length && ("undefined" != typeof POWERREVIEWS ? (1 === (e = e.map((function(e) {
                            return e.on_render = function(e, n) {
                                t.app.store.commit("powerReviews/COMPONENT_RENDERED", {
                                    config: e,
                                    data: n
                                })
                            }, e.on_submit = function(e, n) {
                                t.app.store.commit("powerReviews/REVIEW_SUBMITTED", {
                                    config: e,
                                    data: n
                                })
                            }, e
                        }))).length && (e = e[0]), setTimeout((function() {
                            POWERREVIEWS.display.render(e), t.app.store.commit("powerReviews/CLEAR_STRUCTURE")
                        }), 0)) : this.loadPowerReviews().then((function() {
                            t.renderComponents.bind(t)()
                        })))
                    }
                }, {
                    key: "initPurchase",
                    value: function() {
                        var t = this,
                            e = this.app.store.getters["gtm/purchase"];
                        e && (window.onload = function() {
                            var n = window.powerReviewsStatus;
                            o.a.get(t.app.store.getters["gtm/getActionUrl"]("addPRTag"), {
                                params: {
                                    orderNo: e.ecommerce.purchase.actionField.id,
                                    prStatus: n
                                }
                            })
                        })
                    }
                }]) && a(n.prototype, r), i && a(n, i), w
            }(i.a)
        }
    }
]);