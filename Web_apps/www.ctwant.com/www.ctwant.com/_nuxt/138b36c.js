(window.webpackJsonp = window.webpackJsonp || []).push([
    [11], {
        231: function(t, e, s) {
            "use strict";
            var a = s(95),
                i = {
                    components: {
                        LazyImage: s(96).a
                    },
                    mixins: [a.a],
                    props: {
                        isMobile: {
                            type: Boolean,
                            default: !1,
                            required: !0
                        },
                        data: {
                            type: Object,
                            default: function() {
                                return {}
                            },
                            required: !0
                        }
                    }
                },
                r = s(3),
                n = Object(r.a)(i, (function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("aside", {
                        class: {
                            "l-sidebar": !t.isMobile, "l-sidebar-mobile": t.isMobile
                        }
                    }, [t.isMobile ? [t._m(3), t._v(" "), s("div", {
                        staticClass: "l-section"
                    }, [t._m(4), t._v(" "), s("hr"), t._v(" "), s("div", {
                        staticClass: "l-section__content-list",
                        attrs: {
                            id: "mobile-sidebar-hot"
                        }
                    }, t._l(t.data.popular.slice(0, 6), (function(e, a) {
                        return s("nuxt-link", {
                            key: e.article_id,
                            staticClass: "m-card-s m-card-s--sidebar",
                            attrs: {
                                to: "/article/" + e.article_id
                            }
                        }, [s("div", {
                            staticClass: "m-card-s__img-container"
                        }, ["general" !== e.type ? s("div", {
                            staticClass: "e-type--bg m-card-s__type"
                        }, [s("span", {
                            staticClass: "e-type",
                            class: t.articleType(e).style
                        }, [t._v("\n                " + t._s(t.articleType(e).text) + "\n              ")])]) : t._e(), t._v(" "), s("LazyImage", {
                            staticClass: "m-card-s__img",
                            attrs: {
                                src: e.cover.xs,
                                alt: e.title
                            }
                        })], 1), t._v(" "), s("div", {
                            staticClass: "m-card-s__content"
                        }, [s("h3", {
                            staticClass: "m-card-s__title m-card--mle-2"
                        }, [t._v("\n              " + t._s(e.title) + "\n            ")]), t._v(" "), s("p", {
                            staticClass: "e-time"
                        }, [s("img", {
                            staticClass: "m-card__clock",
                            attrs: {
                                src: "https://static.ctwant.com/images/dist/clock.svg",
                                alt: "publish-icon"
                            }
                        }), t._v("\n              " + t._s(e.publish_at) + "\n              "), a <= 2 ? s("img", {
                            staticClass: "m-card__hot",
                            attrs: {
                                src: "https://static.ctwant.com/images/dist/fire.svg",
                                alt: "popular-icon"
                            }
                        }) : t._e()])])])
                    })), 1)]), t._v(" "), s("div", {
                        staticClass: "l-section"
                    }, [s("h2", {
                        staticClass: "l-section__title"
                    }, [t._v("\n        關鍵熱搜\n      ")]), t._v(" "), s("div", {
                        staticClass: "l-tags__wrapper",
                        attrs: {
                            id: "mobile-sidebar-tag"
                        }
                    }, t._l(t.data.tags.slice(0, 6), (function(e, a) {
                        return s("nuxt-link", {
                            key: a,
                            staticClass: "e-tag l-tags__item",
                            attrs: {
                                to: "/search?q=" + e
                            }
                        }, [t._v("\n          " + t._s(e) + "\n        ")])
                    })), 1)])] : [t._m(0), t._v(" "), s("div", {
                        staticClass: "l-section"
                    }, [t._m(1), t._v(" "), s("hr"), t._v(" "), s("div", {
                        staticClass: "l-section__content-list",
                        attrs: {
                            id: "pc-sidebar-hot"
                        }
                    }, t._l(t.data.popular.slice(0, 6), (function(e, a) {
                        return s("nuxt-link", {
                            key: e.article_id,
                            staticClass: "m-card-s m-card-s--sidebar",
                            attrs: {
                                to: "/article/" + e.article_id
                            }
                        }, [s("div", {
                            staticClass: "m-card-s__img-container"
                        }, ["general" !== e.type ? s("div", {
                            staticClass: "e-type--bg m-card-s__type"
                        }, [s("span", {
                            staticClass: "e-type",
                            class: t.articleType(e).style
                        }, [t._v("\n                " + t._s(t.articleType(e).text) + "\n              ")])]) : t._e(), t._v(" "), s("LazyImage", {
                            staticClass: "m-card-s__img",
                            attrs: {
                                src: e.cover.xs,
                                alt: e.title
                            }
                        })], 1), t._v(" "), s("div", {
                            staticClass: "m-card-s__content"
                        }, [s("h3", {
                            staticClass: "m-card-s__title m-card--mle-2"
                        }, [t._v("\n              " + t._s(e.title) + "\n            ")]), t._v(" "), s("p", {
                            staticClass: "e-time"
                        }, [s("img", {
                            staticClass: "m-card__clock",
                            attrs: {
                                src: "https://static.ctwant.com/images/dist/clock.svg",
                                alt: "publish-icon"
                            }
                        }), t._v("\n              " + t._s(e.publish_at) + "\n              "), a <= 2 ? s("img", {
                            staticClass: "m-card__hot",
                            attrs: {
                                src: "https://static.ctwant.com/images/dist/fire.svg",
                                alt: "fire icon"
                            }
                        }) : t._e()])])])
                    })), 1)]), t._v(" "), s("div", {
                        staticClass: "l-section"
                    }, [s("h2", {
                        staticClass: "l-section__title"
                    }, [t._v("\n        關鍵熱搜\n      ")]), t._v(" "), s("div", {
                        staticClass: "l-tags__wrapper",
                        attrs: {
                            id: "pc-sidebar-tag"
                        }
                    }, t._l(t.data.tags.slice(0, 6), (function(e, a) {
                        return s("nuxt-link", {
                            key: a,
                            staticClass: "e-tag l-tags__item",
                            attrs: {
                                to: "/search?q=" + e
                            }
                        }, [t._v("\n          " + t._s(e) + "\n        ")])
                    })), 1)]), t._v(" "), t._m(2)]], 2)
                }), [function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "l-section"
                    }, [e("div", {
                        staticClass: "l-ad__wrapper mt-3"
                    }, [e("div", {
                        staticStyle: {
                            width: "300px",
                            height: "600px"
                        },
                        attrs: {
                            id: "div-gpt-ad-1562662720262-0"
                        }
                    })])])
                }, function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("h2", {
                        staticClass: "l-section__title-with-hr"
                    }, [t._v("\n        人氣新聞\n        "), s("img", {
                        attrs: {
                            src: "https://static.ctwant.com/images/dist/fire.svg",
                            alt: "fire icon"
                        }
                    })])
                }, function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("div", {
                        staticClass: "l-ad--sticky"
                    }, [s("div", {
                        staticClass: "l-ad__wrapper mb-2"
                    }, [s("div", {
                        staticStyle: {
                            width: "300px",
                            height: "250px"
                        },
                        attrs: {
                            id: "div-gpt-ad-1562662516421-0"
                        }
                    })]), t._v(" "), s("div", {
                        staticClass: "l-ad__wrapper mt-3 mb-2"
                    }, [s("div", {
                        staticStyle: {
                            width: "300px",
                            height: "250px"
                        },
                        attrs: {
                            id: "div-gpt-ad-1562662605891-0"
                        }
                    })])])
                }, function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "l-section"
                    }, [e("div", {
                        staticClass: "l-ad__wrapper"
                    }, [e("div", {
                        staticStyle: {
                            width: "300px",
                            height: "250px"
                        },
                        attrs: {
                            id: "div-gpt-ad-1617869450309-0"
                        }
                    })])])
                }, function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("h2", {
                        staticClass: "l-section__title-with-hr"
                    }, [t._v("\n        人氣新聞\n        "), s("img", {
                        attrs: {
                            src: "https://static.ctwant.com/images/dist/fire.svg",
                            alt: "popular-icon"
                        }
                    })])
                }], !1, null, null, null);
            e.a = n.exports
        },
        258: function(t, e, s) {
            var a = s(298);
            a.__esModule && (a = a.default), "string" == typeof a && (a = [
                [t.i, a, ""]
            ]), a.locals && (t.exports = a.locals);
            (0, s(33).default)("6759f5ab", a, !0, {
                sourceMap: !1
            })
        },
        259: function(t, e, s) {
            var a = s(300);
            a.__esModule && (a = a.default), "string" == typeof a && (a = [
                [t.i, a, ""]
            ]), a.locals && (t.exports = a.locals);
            (0, s(33).default)("d092c122", a, !0, {
                sourceMap: !1
            })
        },
        297: function(t, e, s) {
            "use strict";
            s(258)
        },
        298: function(t, e, s) {
            var a = s(32)(!1);
            a.push([t.i, '@font-face{font-family:swiper-icons;src:url("data:application/font-woff;charset=utf-8;base64, d09GRgABAAAAAAZgABAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAGRAAAABoAAAAci6qHkUdERUYAAAWgAAAAIwAAACQAYABXR1BPUwAABhQAAAAuAAAANuAY7+xHU1VCAAAFxAAAAFAAAABm2fPczU9TLzIAAAHcAAAASgAAAGBP9V5RY21hcAAAAkQAAACIAAABYt6F0cBjdnQgAAACzAAAAAQAAAAEABEBRGdhc3AAAAWYAAAACAAAAAj//wADZ2x5ZgAAAywAAADMAAAD2MHtryVoZWFkAAABbAAAADAAAAA2E2+eoWhoZWEAAAGcAAAAHwAAACQC9gDzaG10eAAAAigAAAAZAAAArgJkABFsb2NhAAAC0AAAAFoAAABaFQAUGG1heHAAAAG8AAAAHwAAACAAcABAbmFtZQAAA/gAAAE5AAACXvFdBwlwb3N0AAAFNAAAAGIAAACE5s74hXjaY2BkYGAAYpf5Hu/j+W2+MnAzMYDAzaX6QjD6/4//Bxj5GA8AuRwMYGkAPywL13jaY2BkYGA88P8Agx4j+/8fQDYfA1AEBWgDAIB2BOoAeNpjYGRgYNBh4GdgYgABEMnIABJzYNADCQAACWgAsQB42mNgYfzCOIGBlYGB0YcxjYGBwR1Kf2WQZGhhYGBiYGVmgAFGBiQQkOaawtDAoMBQxXjg/wEGPcYDDA4wNUA2CCgwsAAAO4EL6gAAeNpj2M0gyAACqxgGNWBkZ2D4/wMA+xkDdgAAAHjaY2BgYGaAYBkGRgYQiAHyGMF8FgYHIM3DwMHABGQrMOgyWDLEM1T9/w8UBfEMgLzE////P/5//f/V/xv+r4eaAAeMbAxwIUYmIMHEgKYAYjUcsDAwsLKxc3BycfPw8jEQA/gZBASFhEVExcQlJKWkZWTl5BUUlZRVVNXUNTQZBgMAAMR+E+gAEQFEAAAAKgAqACoANAA+AEgAUgBcAGYAcAB6AIQAjgCYAKIArAC2AMAAygDUAN4A6ADyAPwBBgEQARoBJAEuATgBQgFMAVYBYAFqAXQBfgGIAZIBnAGmAbIBzgHsAAB42u2NMQ6CUAyGW568x9AneYYgm4MJbhKFaExIOAVX8ApewSt4Bic4AfeAid3VOBixDxfPYEza5O+Xfi04YADggiUIULCuEJK8VhO4bSvpdnktHI5QCYtdi2sl8ZnXaHlqUrNKzdKcT8cjlq+rwZSvIVczNiezsfnP/uznmfPFBNODM2K7MTQ45YEAZqGP81AmGGcF3iPqOop0r1SPTaTbVkfUe4HXj97wYE+yNwWYxwWu4v1ugWHgo3S1XdZEVqWM7ET0cfnLGxWfkgR42o2PvWrDMBSFj/IHLaF0zKjRgdiVMwScNRAoWUoH78Y2icB/yIY09An6AH2Bdu/UB+yxopYshQiEvnvu0dURgDt8QeC8PDw7Fpji3fEA4z/PEJ6YOB5hKh4dj3EvXhxPqH/SKUY3rJ7srZ4FZnh1PMAtPhwP6fl2PMJMPDgeQ4rY8YT6Gzao0eAEA409DuggmTnFnOcSCiEiLMgxCiTI6Cq5DZUd3Qmp10vO0LaLTd2cjN4fOumlc7lUYbSQcZFkutRG7g6JKZKy0RmdLY680CDnEJ+UMkpFFe1RN7nxdVpXrC4aTtnaurOnYercZg2YVmLN/d/gczfEimrE/fs/bOuq29Zmn8tloORaXgZgGa78yO9/cnXm2BpaGvq25Dv9S4E9+5SIc9PqupJKhYFSSl47+Qcr1mYNAAAAeNptw0cKwkAAAMDZJA8Q7OUJvkLsPfZ6zFVERPy8qHh2YER+3i/BP83vIBLLySsoKimrqKqpa2hp6+jq6RsYGhmbmJqZSy0sraxtbO3sHRydnEMU4uR6yx7JJXveP7WrDycAAAAAAAH//wACeNpjYGRgYOABYhkgZgJCZgZNBkYGLQZtIJsFLMYAAAw3ALgAeNolizEKgDAQBCchRbC2sFER0YD6qVQiBCv/H9ezGI6Z5XBAw8CBK/m5iQQVauVbXLnOrMZv2oLdKFa8Pjuru2hJzGabmOSLzNMzvutpB3N42mNgZGBg4GKQYzBhYMxJLMlj4GBgAYow/P/PAJJhLM6sSoWKfWCAAwDAjgbRAAB42mNgYGBkAIIbCZo5IPrmUn0hGA0AO8EFTQAA") format("woff");font-weight:400;font-style:normal}:root{--swiper-theme-color:#007aff}.swiper-container{margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1}.swiper-wrapper{z-index:1;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:content-box;box-sizing:content-box;-webkit-transform:translateZ(0);transform:translateZ(0)}.swiper-slide,.swiper-wrapper{position:relative;width:100%;height:100%;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;-o-transition-property:transform;transition-property:transform;transition-property:transform,-webkit-transform}.swiper-slide{-ms-flex-negative:0;flex-shrink:0}:root{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{position:absolute;top:50%;width:27px;width:calc(var(--swiper-navigation-size)/44*27);height:44px;height:var(--swiper-navigation-size);margin-top:-22px;margin-top:calc(var(--swiper-navigation-size)*-1/2);z-index:10;cursor:pointer;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;color:var(--swiper-theme-color);color:var(--swiper-navigation-color,var(--swiper-theme-color))}.swiper-button-next:after,.swiper-button-prev:after{font-family:swiper-icons;font-size:44px;font-size:var(--swiper-navigation-size);text-transform:none!important;letter-spacing:0;text-transform:none;-webkit-font-feature-settings:normal,;font-feature-settings:normal,;font-variant:normal;line-height:1}.swiper-button-prev{left:10px;right:auto}.swiper-button-prev:after{content:"prev"}.swiper-button-next{right:10px;left:auto}.swiper-button-next:after{content:"next"}@-webkit-keyframes swiper-preloader-spin{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes swiper-preloader-spin{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}', ""]), t.exports = a
        },
        299: function(t, e, s) {
            "use strict";
            s(259)
        },
        300: function(t, e, s) {
            var a = s(32)(!1);
            a.push([t.i, ".p-index[data-v-6e6991d4]{padding-bottom:70px}.p-index__body[data-v-6e6991d4]{display:-webkit-box;display:-ms-flexbox;display:flex}.p-index__content[data-v-6e6991d4]{max-width:810px;width:calc(100% - 330px);margin-right:30px}@media (max-width:992px){.p-index__content[data-v-6e6991d4]{margin-right:0;width:100%}}.p-index__hot[data-v-6e6991d4]{display:block;margin-bottom:35px}", ""]), t.exports = a
        },
        317: function(t, e, s) {
            "use strict";
            s.r(e);
            s(13), s(8), s(11), s(16), s(17);
            var a = s(4),
                i = s(2),
                r = (s(41), s(34), s(24), s(5)),
                n = s(301),
                c = s(95),
                l = s(96),
                o = s(231);

            function d(t, e) {
                var s = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(t);
                    e && (a = a.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), s.push.apply(s, a)
                }
                return s
            }

            function _(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var s = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? d(Object(s), !0).forEach((function(e) {
                        Object(a.a)(t, e, s[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(s)) : d(Object(s)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(s, e))
                    }))
                }
                return t
            }
            n.c.use([n.b, n.a]);
            var A = {
                    name: "Index",
                    components: {
                        LazyImage: l.a,
                        SideBar: o.a
                    },
                    mixins: [c.a],
                    asyncData: function(t) {
                        return Object(i.a)(regeneratorRuntime.mark((function e() {
                            var s, a, i, r, n;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return s = t.$axios, a = t.error, i = s.defaults.baseURL, r = "".concat(i, "/home"), e.prev = 3, e.next = 6, s.$get(r);
                                    case 6:
                                        return n = e.sent, e.abrupt("return", {
                                            datas: n.data
                                        });
                                    case 10:
                                        e.prev = 10, e.t0 = e.catch(3), a({
                                            statusCode: 404
                                        });
                                    case 14:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [3, 10]
                            ])
                        })))()
                    },
                    data: function() {
                        return {
                            datas: null,
                            carouselInitComplete: {
                                headline: !1,
                                defaultShowCurrent: 2
                            },
                            isCarouselAdEmpty: !1,
                            hotnewsIndex: 0,
                            componentScreenWidth: 0,
                            swiper: null
                        }
                    },
                    head: function() {
                        var t = {
                            "@context": "http://schema.org",
                            "@type": "ItemList",
                            itemListElement: this.datas.popular.map((function(t, e) {
                                return {
                                    "@type": "ListItem",
                                    position: e + 1,
                                    name: t.title,
                                    image: t.cover.md,
                                    url: "https://www.ctwant.com/article/".concat(t.article_id)
                                }
                            }))
                        };
                        return {
                            __dangerouslyDisableSanitizers: ["script"],
                            script: [{
                                innerHTML: JSON.stringify({
                                    "@context": "http://schema.org",
                                    "@type": "Website",
                                    name: "CTWANT",
                                    url: "https://www.ctwant.com/",
                                    sameAs: ["https://www.facebook.com/want.ctw/", "https://www.youtube.com/channel/UCZtUbkty-OfR4_AQ4B0GtQA", "https://t.me/ctwant"],
                                    potentialAction: {
                                        "@type": "SearchAction",
                                        target: "https://www.ctwant.com/search?q={keyword}",
                                        "query-input": "required name=keyword"
                                    }
                                }),
                                type: "application/ld+json"
                            }, {
                                innerHTML: JSON.stringify(t),
                                type: "application/ld+json"
                            }]
                        }
                    },
                    computed: _(_({}, Object(r.b)(["WIDTH_PAD", "WIDTH_MOBILE", "screenWidth"])), {}, {
                        articleShower: function() {
                            var t = this,
                                e = this.WIDTH_MOBILE;
                            return function(s, a) {
                                var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : a;
                                return t.componentScreenWidth > e ? s.slice(0, a) : s.slice(0, i)
                            }
                        },
                        selectImageSize: function() {
                            var t = this.componentScreenWidth;
                            return function(e) {
                                return t <= this.WIDTH_PAD ? e.sm : e.md
                            }
                        }
                    }),
                    mounted: function() {
                        var t = this;
                        this.componentScreenWidth = this.screenWidth || window.screen.width, this.$nextTick((function() {
                            t.initSwiper(), t.$store.dispatch("ad/displayAd"), t.$store.dispatch("ad/registerAndDisplayPopupAd"), t.checkIsCarouselAdEmpty(), t.$gtm.push({
                                event: "domMounted",
                                pageUrl: t.$route.fullPath,
                                pageTitle: "CTWANT"
                            })
                        }))
                    },
                    methods: {
                        initSwiper: function() {
                            var t = this;
                            this.swiper = new n.c(".m-carousel-headline", {
                                slidesPerView: "auto",
                                centeredSlides: !0,
                                spaceBetween: 10,
                                autoplay: {
                                    delay: 3e3
                                },
                                loop: !0,
                                loopedSlides: this.carouselInitComplete.defaultShowCurrent,
                                runCallbacksOnInit: !1,
                                navigation: {
                                    nextEl: ".swiper-button-next",
                                    prevEl: ".swiper-button-prev"
                                },
                                on: {
                                    init: function() {
                                        t.carouselInitComplete.headline = !0
                                    },
                                    imagesReady: function() {
                                        this.slideTo(t.carouselInitComplete.defaultShowCurrent, 0, !1), this.autoplay.start()
                                    }
                                }
                            })
                        },
                        checkIsCarouselAdEmpty: function() {
                            var t = this;
                            googletag.pubads().addEventListener("slotRenderEnded", (function(e) {
                                "div-gpt-ad-1594969509750-0" === e.slot.getSlotElementId() && e.isEmpty && (t.isCarouselAdEmpty = !0, t.$nextTick((function() {
                                    t.swiper.update()
                                })))
                            }))
                        }
                    }
                },
                p = (s(297), s(299), s(3)),
                v = Object(p.a)(A, (function() {
                    var t = this,
                        e = t.$createElement,
                        s = t._self._c || e;
                    return s("div", {
                        staticClass: "p-index"
                    }, [s("div", {
                        staticClass: "m-carousel",
                        class: {
                            "m-carousel--hide": !t.carouselInitComplete.headline
                        }
                    }, [s("div", {
                        staticClass: "swiper-container m-carousel-headline"
                    }, [s("div", {
                        staticClass: "swiper-wrapper"
                    }, [t._l(t.datas.carousel, (function(e) {
                        return [e.ad_id && !t.isCarouselAdEmpty ? s("div", {
                            key: e.ad_id,
                            staticClass: "swiper-slide m-carousel-headline__ad",
                            attrs: {
                                id: e.ad_id
                            }
                        }) : e.article_id ? s("nuxt-link", {
                            key: e.article_id,
                            staticClass: "swiper-slide m-carousel-headline__item",
                            attrs: {
                                to: "/article/" + e.article_id
                            }
                        }, [s("div", {
                            staticClass: "m-carousel__category"
                        }, [t._v("\n              " + t._s(e.main_category) + "\n            ")]), t._v(" "), "general" !== e.type ? s("div", {
                            staticClass: "e-type--bg"
                        }, [s("span", {
                            staticClass: "e-type",
                            class: t.articleType(e).style
                        }, [t._v("\n                " + t._s(t.articleType(e).text) + "\n              ")])]) : t._e(), t._v(" "), s("img", {
                            staticClass: "m-carousel-headline__img",
                            attrs: {
                                src: e.cover.md,
                                alt: e.title,
                                onerror: "this.src='https://static.ctwant.com/images/dist/default_cover_md.png'"
                            }
                        }), t._v(" "), s("div", {
                            staticClass: "m-carousel-headline__title-container"
                        }, [s("h2", {
                            staticClass: "m-carousel-headline__title"
                        }, [t._v("\n                " + t._s(e.title) + "\n              ")])])]) : t._e()]
                    }))], 2), t._v(" "), s("div", {
                        staticClass: "swiper-button-prev",
                        attrs: {
                            slot: "button-prev"
                        },
                        slot: "button-prev"
                    }, [s("img", {
                        attrs: {
                            src: "https://static.ctwant.com/images/dist/arrow-point-to-left.svg",
                            alt: "icon-arrow-left"
                        }
                    })]), t._v(" "), s("div", {
                        staticClass: "swiper-button-next",
                        attrs: {
                            slot: "button-next"
                        },
                        slot: "button-next"
                    }, [s("img", {
                        attrs: {
                            src: "https://static.ctwant.com/images/dist/arrow-point-to-right.svg",
                            alt: "icon-arrow-right"
                        }
                    })])])]), t._v(" "), t._m(0), t._v(" "), s("div", {
                        staticClass: "p-index__body container"
                    }, [s("div", {
                        staticClass: "p-index__content"
                    }, [s("div", {
                        staticClass: "l-section"
                    }, [s("h2", {
                        staticClass: "l-section__title-with-hr"
                    }, [t._v("\n          社會\n        ")]), t._v(" "), s("hr"), t._v(" "), s("div", {
                        staticClass: "l-section__content"
                    }, [s("div", {
                        staticClass: "row"
                    }, t._l(t.datas.categories["社會"], (function(e) {
                        return s("nuxt-link", {
                            key: e.article_id,
                            staticClass: "m-card col-lg-4 col-md-6 col-12",
                            attrs: {
                                to: "/article/" + e.article_id
                            }
                        }, ["general" !== e.type ? s("div", {
                            staticClass: "e-type--bg m-card__type"
                        }, [s("span", {
                            staticClass: "e-type",
                            class: t.articleType(e).style
                        }, [t._v("\n                  " + t._s(t.articleType(e).text) + "\n                ")])]) : t._e(), t._v(" "), s("LazyImage", {
                            staticClass: "m-card__img",
                            attrs: {
                                src: t.selectImageSize(e.cover),
                                alt: e.title
                            }
                        }), t._v(" "), s("h3", {
                            staticClass: "m-card__title m-card--mle-2"
                        }, [t._v("\n                " + t._s(e.title) + "\n              ")])], 1)
                    })), 1), t._v(" "), s("nuxt-link", {
                        staticClass: "e-btn-more",
                        attrs: {
                            to: "/category/社會"
                        }
                    }, [t._v("\n            看更多\n            "), s("svg", {
                        staticClass: "e-btn__arrow-r",
                        attrs: {
                            viewBox: "0 0 8 15"
                        }
                    }, [s("path", {
                        attrs: {
                            d: "M7.712 8.243l-6.034 6.45a.938.938 0 01-1.39 0 1.102 1.102 0 010-1.486L5.628 7.5.287 1.793a1.102 1.102 0 010-1.485.939.939 0 011.39 0l6.034 6.45c.192.205.288.473.288.742s-.096.538-.288.743z",
                            "fill-rule": "nonzero"
                        }
                    })])])], 1)]), t._v(" "), s("SideBar", {
                        attrs: {
                            "is-mobile": !0,
                            data: t.datas
                        }
                    }), t._v(" "), s("div", {
                        staticClass: "l-section"
                    }, [s("h2", {
                        staticClass: "l-section__title-with-hr"
                    }, [t._v("\n          娛樂\n        ")]), t._v(" "), s("hr"), t._v(" "), s("div", {
                        staticClass: "l-section__content"
                    }, [s("div", {
                        staticClass: "row"
                    }, t._l(t.datas.categories["娛樂"], (function(e) {
                        return s("nuxt-link", {
                            key: e.article_id,
                            staticClass: "m-card col-lg-4 col-md-6 col-12",
                            attrs: {
                                to: "/article/" + e.article_id
                            }
                        }, ["general" !== e.type ? s("div", {
                            staticClass: "e-type--bg m-card__type"
                        }, [s("span", {
                            staticClass: "e-type",
                            class: t.articleType(e).style
                        }, [t._v("\n                  " + t._s(t.articleType(e).text) + "\n                ")])]) : t._e(), t._v(" "), s("LazyImage", {
                            staticClass: "m-card__img",
                            attrs: {
                                src: t.selectImageSize(e.cover),
                                alt: e.title
                            }
                        }), t._v(" "), s("h3", {
                            staticClass: "m-card__title m-card--mle-2"
                        }, [t._v("\n                " + t._s(e.title) + "\n              ")])], 1)
                    })), 1), t._v(" "), s("nuxt-link", {
                        staticClass: "e-btn-more",
                        attrs: {
                            to: "/category/娛樂"
                        }
                    }, [t._v("\n            看更多\n            "), s("svg", {
                        staticClass: "e-btn__arrow-r",
                        attrs: {
                            viewBox: "0 0 8 15"
                        }
                    }, [s("path", {
                        attrs: {
                            d: "M7.712 8.243l-6.034 6.45a.938.938 0 01-1.39 0 1.102 1.102 0 010-1.486L5.628 7.5.287 1.793a1.102 1.102 0 010-1.485.939.939 0 011.39 0l6.034 6.45c.192.205.288.473.288.742s-.096.538-.288.743z",
                            "fill-rule": "nonzero"
                        }
                    })])])], 1)]), t._v(" "), s("div", {
                        staticClass: "l-section"
                    }, [s("h2", {
                        staticClass: "l-section__title-with-hr"
                    }, [t._v("\n          最新影音\n        ")]), t._v(" "), s("hr"), t._v(" "), s("div", {
                        staticClass: "l-section__content"
                    }, [s("div", {
                        staticClass: "row"
                    }, t._l(t.datas.videos, (function(e) {
                        return s("nuxt-link", {
                            key: e.video_id,
                            staticClass: "m-card col-lg-4 col-md-6 col-12",
                            attrs: {
                                to: "/video/" + e.video_id
                            }
                        }, [s("div", {
                            staticClass: "e-video__img-container"
                        }, [s("LazyImage", {
                            staticClass: "m-card__img",
                            attrs: {
                                src: e.cover.md,
                                alt: e.title
                            }
                        }), t._v(" "), s("div", {
                            staticClass: "e-video__icon-wrapper"
                        }, [s("div", {
                            staticClass: "e-video__icon"
                        })])], 1), t._v(" "), s("h3", {
                            staticClass: "m-card__title  m-card--mle-2"
                        }, [t._v("\n                " + t._s(e.title) + "\n              ")]), t._v(" "), s("p", {
                            staticClass: "e-time mt-1"
                        }, [s("img", {
                            staticClass: "m-card__clock",
                            attrs: {
                                src: "https://static.ctwant.com/images/dist/clock.svg",
                                alt: "publish-icon"
                            }
                        }), t._v("\n                " + t._s(e.publish_at) + "\n              ")])])
                    })), 1), t._v(" "), s("nuxt-link", {
                        staticClass: "e-btn-more",
                        attrs: {
                            to: "/video"
                        }
                    }, [t._v("\n            看更多\n            "), s("svg", {
                        staticClass: "e-btn__arrow-r",
                        attrs: {
                            viewBox: "0 0 8 15"
                        }
                    }, [s("path", {
                        attrs: {
                            d: "M7.712 8.243l-6.034 6.45a.938.938 0 01-1.39 0 1.102 1.102 0 010-1.486L5.628 7.5.287 1.793a1.102 1.102 0 010-1.485.939.939 0 011.39 0l6.034 6.45c.192.205.288.473.288.742s-.096.538-.288.743z",
                            "fill-rule": "nonzero"
                        }
                    })])])], 1)]), t._v(" "), s("div", {
                        staticClass: "l-section"
                    }, [s("h2", {
                        staticClass: "l-section__title-with-hr"
                    }, [t._v("\n          財經\n        ")]), t._v(" "), s("hr"), t._v(" "), s("div", {
                        staticClass: "l-section__content"
                    }, [s("div", {
                        staticClass: "row"
                    }, t._l(t.articleShower(t.datas.categories["財經"], 3, 4), (function(e) {
                        return s("nuxt-link", {
                            key: e.article_id,
                            staticClass: "m-card col-sm-4 col-6",
                            attrs: {
                                to: "/article/" + e.article_id
                            }
                        }, ["general" !== e.type ? s("div", {
                            staticClass: "e-type--bg m-card__type"
                        }, [s("span", {
                            staticClass: "e-type",
                            class: t.articleType(e).style,
                            attrs: {
                                alt: e.title
                            }
                        }, [t._v("\n                  " + t._s(t.articleType(e).text) + "\n                ")])]) : t._e(), t._v(" "), s("LazyImage", {
                            staticClass: "m-card__img",
                            attrs: {
                                src: t.selectImageSize(e.cover),
                                alt: e.title
                            }
                        }), t._v(" "), s("h3", {
                            staticClass: "m-card__title m-card--mle-2"
                        }, [t._v("\n                " + t._s(e.title) + "\n              ")])], 1)
                    })), 1), t._v(" "), s("nuxt-link", {
                        staticClass: "e-btn-more",
                        attrs: {
                            to: "/category/財經"
                        }
                    }, [t._v("\n            看更多\n            "), s("svg", {
                        staticClass: "e-btn__arrow-r",
                        attrs: {
                            viewBox: "0 0 8 15"
                        }
                    }, [s("path", {
                        attrs: {
                            d: "M7.712 8.243l-6.034 6.45a.938.938 0 01-1.39 0 1.102 1.102 0 010-1.486L5.628 7.5.287 1.793a1.102 1.102 0 010-1.485.939.939 0 011.39 0l6.034 6.45c.192.205.288.473.288.742s-.096.538-.288.743z",
                            "fill-rule": "nonzero"
                        }
                    })])])], 1)]), t._v(" "), s("div", {
                        staticClass: "l-section"
                    }, [s("h2", {
                        staticClass: "l-section__title-with-hr"
                    }, [t._v("\n          政治\n        ")]), t._v(" "), s("hr"), t._v(" "), s("div", {
                        staticClass: "l-section__content"
                    }, [s("div", {
                        staticClass: "row"
                    }, t._l(t.articleShower(t.datas.categories["政治"], 3, 4), (function(e) {
                        return s("nuxt-link", {
                            key: e.article_id,
                            staticClass: "m-card col-sm-4 col-6",
                            attrs: {
                                to: "/article/" + e.article_id
                            }
                        }, ["general" !== e.type ? s("div", {
                            staticClass: "e-type--bg m-card__type"
                        }, [s("span", {
                            staticClass: "e-type",
                            class: t.articleType(e).style
                        }, [t._v("\n                  " + t._s(t.articleType(e).text) + "\n                ")])]) : t._e(), t._v(" "), s("LazyImage", {
                            staticClass: "m-card__img",
                            attrs: {
                                src: t.selectImageSize(e.cover),
                                alt: e.title
                            }
                        }), t._v(" "), s("h3", {
                            staticClass: "m-card__title m-card--mle-2"
                        }, [t._v("\n                " + t._s(e.title) + "\n              ")])], 1)
                    })), 1), t._v(" "), s("nuxt-link", {
                        staticClass: "e-btn-more",
                        attrs: {
                            to: "/category/政治"
                        }
                    }, [t._v("\n            看更多\n            "), s("svg", {
                        staticClass: "e-btn__arrow-r",
                        attrs: {
                            viewBox: "0 0 8 15"
                        }
                    }, [s("path", {
                        attrs: {
                            d: "M7.712 8.243l-6.034 6.45a.938.938 0 01-1.39 0 1.102 1.102 0 010-1.486L5.628 7.5.287 1.793a1.102 1.102 0 010-1.485.939.939 0 011.39 0l6.034 6.45c.192.205.288.473.288.742s-.096.538-.288.743z",
                            "fill-rule": "nonzero"
                        }
                    })])])], 1)]), t._v(" "), s("div", {
                        staticClass: "l-section"
                    }, [s("h2", {
                        staticClass: "l-section__title-with-hr"
                    }, [t._v("\n          漂亮\n        ")]), t._v(" "), s("hr"), t._v(" "), s("div", {
                        staticClass: "l-section__content"
                    }, [s("div", {
                        staticClass: "row"
                    }, t._l(t.articleShower(t.datas.categories["漂亮"], 3, 4), (function(e) {
                        return s("nuxt-link", {
                            key: e.article_id,
                            staticClass: "m-card col-sm-4 col-6",
                            attrs: {
                                to: "/article/" + e.article_id
                            }
                        }, ["general" !== e.type ? s("div", {
                            staticClass: "e-type--bg m-card__type"
                        }, [s("span", {
                            staticClass: "e-type",
                            class: t.articleType(e).style
                        }, [t._v("\n                  " + t._s(t.articleType(e).text) + "\n                ")])]) : t._e(), t._v(" "), s("LazyImage", {
                            staticClass: "m-card__img",
                            attrs: {
                                src: t.selectImageSize(e.cover),
                                alt: e.title
                            }
                        }), t._v(" "), s("h3", {
                            staticClass: "m-card__title m-card--mle-2"
                        }, [t._v("\n                " + t._s(e.title) + "\n              ")])], 1)
                    })), 1), t._v(" "), s("nuxt-link", {
                        staticClass: "e-btn-more",
                        attrs: {
                            to: "/category/漂亮"
                        }
                    }, [t._v("\n            看更多\n            "), s("svg", {
                        staticClass: "e-btn__arrow-r",
                        attrs: {
                            viewBox: "0 0 8 15"
                        }
                    }, [s("path", {
                        attrs: {
                            d: "M7.712 8.243l-6.034 6.45a.938.938 0 01-1.39 0 1.102 1.102 0 010-1.486L5.628 7.5.287 1.793a1.102 1.102 0 010-1.485.939.939 0 011.39 0l6.034 6.45c.192.205.288.473.288.742s-.096.538-.288.743z",
                            "fill-rule": "nonzero"
                        }
                    })])])], 1)]), t._v(" "), s("div", {
                        staticClass: "l-section"
                    }, [s("h2", {
                        staticClass: "l-section__title-with-hr"
                    }, [t._v("\n          生活\n        ")]), t._v(" "), s("hr"), t._v(" "), s("div", {
                        staticClass: "l-section__content"
                    }, [s("div", {
                        staticClass: "row"
                    }, t._l(t.articleShower(t.datas.categories["生活"], 3, 4), (function(e) {
                        return s("nuxt-link", {
                            key: e.article_id,
                            staticClass: "m-card col-sm-4 col-6",
                            attrs: {
                                to: "/article/" + e.article_id
                            }
                        }, ["general" !== e.type ? s("div", {
                            staticClass: "e-type--bg m-card__type"
                        }, [s("span", {
                            staticClass: "e-type",
                            class: t.articleType(e).style
                        }, [t._v("\n                  " + t._s(t.articleType(e).text) + "\n                ")])]) : t._e(), t._v(" "), s("LazyImage", {
                            staticClass: "m-card__img",
                            attrs: {
                                src: t.selectImageSize(e.cover),
                                alt: e.title
                            }
                        }), t._v(" "), s("h3", {
                            staticClass: "m-card__title m-card--mle-2"
                        }, [t._v("\n                " + t._s(e.title) + "\n              ")])], 1)
                    })), 1), t._v(" "), s("nuxt-link", {
                        staticClass: "e-btn-more",
                        attrs: {
                            to: "/category/生活"
                        }
                    }, [t._v("\n            看更多\n            "), s("svg", {
                        staticClass: "e-btn__arrow-r",
                        attrs: {
                            viewBox: "0 0 8 15"
                        }
                    }, [s("path", {
                        attrs: {
                            d: "M7.712 8.243l-6.034 6.45a.938.938 0 01-1.39 0 1.102 1.102 0 010-1.486L5.628 7.5.287 1.793a1.102 1.102 0 010-1.485.939.939 0 011.39 0l6.034 6.45c.192.205.288.473.288.742s-.096.538-.288.743z",
                            "fill-rule": "nonzero"
                        }
                    })])])], 1)])], 1), t._v(" "), s("SideBar", {
                        attrs: {
                            "is-mobile": !1,
                            data: t.datas
                        }
                    })], 1)])
                }), [function() {
                    var t = this.$createElement,
                        e = this._self._c || t;
                    return e("div", {
                        staticClass: "l-ad__wrapper l-ad--hide-laptop mb-6"
                    }, [e("div", {
                        staticStyle: {
                            width: "970px",
                            height: "90px"
                        },
                        attrs: {
                            id: "div-gpt-ad-1562665396118-0"
                        }
                    })])
                }], !1, null, "6e6991d4", null);
            e.default = v.exports
        }
    }
]);