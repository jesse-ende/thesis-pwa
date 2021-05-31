(window.webpackJsonp = window.webpackJsonp || []).push([
    [4], {
        "9ihE": function(e, t, a) {
            "use strict";
            a.d(t, "d", (function() {
                return B
            })), a.d(t, "c", (function() {
                return R
            })), a.d(t, "b", (function() {
                return _
            }));
            var i = a("pVnL"),
                n = a.n(i),
                s = a("q1tI"),
                o = a.n(s),
                r = a("s5E+"),
                l = a("wWh2"),
                c = a("RliX"),
                d = a("J4zp"),
                h = a.n(d),
                u = a("w2zw"),
                m = Object(s.createContext)(null);
            m.displayName = "YouTubeIframeContext";
            var p, v, g, b = e => {
                    var t = e.children,
                        a = e.initialSeekTime,
                        i = Object(s.useState)(a),
                        n = h()(i, 2),
                        r = n[0],
                        l = n[1];
                    return o.a.createElement(m.Provider, {
                        value: {
                            seekTime: r,
                            setSeekTime: l
                        }
                    }, t)
                },
                f = a("y4uf"),
                E = a("g2Yl");
            ! function(e) {
                e.StateChanged = "stateChanged", e.CurrentTimeChanged = "currentTimeChanged"
            }(p || (p = {})),
            function(e) {
                e.Initializing = "initializing", e.Ready = "ready", e.Buffering = "buffering", e.Unstarted = "unstarted", e.Playing = "playing", e.AutoPlaying = "autoPlaying", e.Paused = "paused", e.Ended = "ended"
            }(v || (v = {})),
            function(e) {
                e.Play = "play", e.Seek = "seek", e.Mute = "mute", e.GetCurrentTime = "getCurrentTime"
            }(g || (g = {}));
            var k = e => {
                    var t = e.src,
                        a = e.videoState,
                        i = e.onVideoStateChange,
                        n = e.onVideoCurrentTimeChange,
                        o = t.split("#").pop(),
                        r = Object(s.useState)(),
                        l = h()(r, 2),
                        c = l[0],
                        d = l[1];
                    Object(s.useEffect)((() => {
                        if (o) {
                            var e = u.b.listen(o, {
                                    [p.StateChanged]: e => {
                                        if (e === v.Ready) {
                                            var t = a(),
                                                n = t.source,
                                                s = t.origin,
                                                o = t.namespace,
                                                r = u.c.bind(null, {
                                                    source: n,
                                                    target: s,
                                                    namespace: o
                                                });
                                            d((() => r)), i(e, r)
                                        } else i(e)
                                    },
                                    [p.CurrentTimeChanged]: n
                                }),
                                t = e.handler,
                                a = e.getChannelInfo;
                            return () => u.b.unlisten(t)
                        }
                    }), [t, o, i, n]), (e => {
                        var t = e.videoState,
                            a = e.sendMessageToPlayer;
                        Object(s.useEffect)((() => {
                            var e, i = () => {
                                t === v.Playing && a && (a(g.GetCurrentTime), e = setTimeout(i, 1e3))
                            };
                            return e = setTimeout(i, 1e3), () => clearTimeout(e)
                        }), [t, a])
                    })({
                        videoState: a,
                        sendMessageToPlayer: c
                    })
                },
                y = () => {
                    var e = Object(f.c)().logEvent,
                        t = {
                            [v.Playing]: E.b.VideoPlay,
                            [v.AutoPlaying]: E.b.VideoAutoPlay,
                            [v.Paused]: E.b.VideoStop,
                            [v.Ended]: E.b.VideoEnd
                        };
                    return a => {
                        var i = t[a];
                        i && e({
                            eventName: i,
                            eventDetails: {
                                vendor: "youtube",
                                player_type: "youtube"
                            }
                        })
                    }
                },
                C = Object(s.forwardRef)(((e, t) => {
                    var a = e.src,
                        i = e.isDocked,
                        r = e.onStateChange,
                        l = Object(s.useState)(v.Initializing),
                        d = h()(l, 2),
                        u = d[0],
                        p = d[1],
                        b = (() => {
                            var e = Object(s.useContext)(m);
                            if (!e) throw new Error("<YouTubeIframe> needs <YouTubeIframeProvider> in order to keep track of the current playback position (to resume playback when docked)");
                            return e
                        })(),
                        f = b.seekTime,
                        E = b.setSeekTime,
                        C = y(),
                        w = Object(s.useCallback)(((e, t) => {
                            if (!(i && e === v.Playing && [v.Buffering, v.Unstarted].includes(u))) {
                                var a = i && e === v.Ready && f;
                                a && (null == t || t(g.Seek, {
                                    to: f
                                }), null == t || t(g.Play));
                                var n = a ? v.AutoPlaying : e;
                                p(n), r && r(n), C(n)
                            }
                        }), [f, i, u]);
                    return k({
                        src: a,
                        videoState: u,
                        onVideoStateChange: w,
                        onVideoCurrentTimeChange: E
                    }), o.a.createElement(c.a, n()({
                        ref: t
                    }, e, {
                        allow: i ? "autoplay" : void 0
                    }))
                })),
                w = a("4S20"),
                I = a("Jq/n"),
                S = a("VXYR"),
                M = a("F6jV"),
                P = a("fSeh"),
                x = a.n(P),
                O = a("Cupb"),
                T = a("tROj"),
                D = a("JGqm"),
                N = a("p8qf"),
                V = a("Dcbp"),
                z = a.n(V),
                j = a("S/fY");

            function B(e) {
                var t;
                return void 0 !== e.media && (Object(O.a)(null === (t = e.media) || void 0 === t ? void 0 : t.url) || e.provider === T.c.Tumblr)
            }
            var R = e => (null == e ? void 0 : e.provider) === T.c.Instagram,
                _ = e => !B(e) && void 0 !== e.embedIframe && void 0 !== e.provider,
                L = e => {
                    var t = e.url,
                        a = e.poster,
                        i = e.provider,
                        n = Object(f.c)()._c;
                    return o.a.createElement("div", {
                        className: j.a.externalLink
                    }, a && o.a.createElement(S.a, {
                        imageResponse: a,
                        altText: i ? n("Accessibility title of a thumbnail for a video on an external site. The placeholder is the name of the external site.", "Thumbnail of a video on %1$s", i) : n("Accessibility title of a thumbnail for a video on an unknown external site", "Thumbnail of a video on an external site")
                    }), o.a.createElement("div", {
                        className: j.a.playButton
                    }, o.a.createElement("a", {
                        href: t,
                        target: "_blank",
                        rel: "noopener"
                    }, o.a.createElement(M.a, {
                        fill: x.a.paletteWhite,
                        withCircle: !1,
                        size: {
                            width: 24,
                            height: 24
                        },
                        viewBox: "18 15 13 16"
                    }), i ? n("Title of a link to open a video on an external site. The placeholder is the name of the external site.", "Watch on %1$s", i) : null)))
                },
                A = e => {
                    var t, a = e.block,
                        i = a.media,
                        n = a.poster,
                        s = a.filmstrip,
                        c = e.isDocked,
                        d = Object(N.c)();
                    return o.a.createElement(l.a, {
                        media: i,
                        useViewabilityTracker: d !== N.a && (Object(r.n)(null == d ? void 0 : d.post) || Object(r.m)(null == d ? void 0 : d.post)),
                        timelineObject: d !== N.a ? null == d ? void 0 : d.post : void 0,
                        poster: n,
                        filmstrip: s,
                        isDocked: c,
                        showsDockMediaButton: d !== N.a ? null == d || null === (t = d.presentationStyle) || void 0 === t ? void 0 : t.showsDockMediaButton : void 0
                    })
                },
                U = e => {
                    var t = e.provider,
                        a = e.embedIframe,
                        i = e.isDocked;
                    return o.a.createElement(w.b, null, (e => {
                        var s = e.width,
                            r = a.height / a.width,
                            l = t === T.c.Youtube,
                            d = Math.min(z.a.postWidth, s),
                            h = l ? {
                                maxWidth: d,
                                height: r * d
                            } : {},
                            u = {
                                src: a.url,
                                title: t,
                                allowFullScreen: !0,
                                className: Object(I.a)({
                                    [j.a.embeddedPlayer]: !0,
                                    [j.a.notYoutubeEmbed]: !l
                                }),
                                style: h
                            };
                        return l ? o.a.createElement(b, null, o.a.createElement(D.a, null, o.a.createElement(C, n()({}, u, {
                            isDocked: i
                        })))) : o.a.createElement(D.a, null, o.a.createElement(c.a, u))
                    }))
                };
            t.a = function(e) {
                var t = e.block,
                    a = e.isDocked,
                    i = t.poster,
                    n = t.provider,
                    s = t.url,
                    r = B(t) ? o.a.createElement(A, {
                        block: t,
                        isDocked: a
                    }) : _(t) ? o.a.createElement(U, {
                        provider: t.provider,
                        embedIframe: t.embedIframe,
                        isDocked: a
                    }) : null;
                if (r) {
                    var l = n === T.c.Youtube,
                        c = !l && _(t) ? {
                            paddingBottom: "".concat(t.embedIframe.height / t.embedIframe.width * 100, "%")
                        } : void 0;
                    return o.a.createElement("div", {
                        className: Object(I.a)({
                            [j.a.videoBlock]: !0,
                            [j.a.notYoutubeWrapper]: _(t) && !l
                        }),
                        style: c
                    }, r)
                }
                return o.a.createElement(L, {
                    url: s,
                    poster: i,
                    provider: n
                })
            }
        },
        B7MQ: function(e, t, a) {
            "use strict";
            var i = a("J4zp"),
                n = a.n(i),
                s = a("q1tI"),
                o = a.n(s),
                r = a("w7rC"),
                l = a("M40m"),
                c = a("PXvT"),
                d = a("s2Hx"),
                h = a("fSeh"),
                u = a.n(h),
                m = Object(d.c)(o.a.createElement("svg", {
                    fill: "none",
                    viewBox: "0 0 24 24"
                }, o.a.createElement("path", {
                    fillRule: "evenodd",
                    d: "M12 21a9 9 0 100-18 9 9 0 000 18zm0 2c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11z",
                    clipRule: "evenodd"
                }), o.a.createElement("path", {
                    d: "M11.389 6.426c.192-.568 1.03-.568 1.222 0l.976 2.878a.64.64 0 00.611.426h3.158c.623 0 .881.764.378 1.114l-2.555 1.78a.602.602 0 00-.233.688l.975 2.879c.193.567-.485 1.04-.988.689l-2.555-1.78a.665.665 0 00-.756 0l-2.555 1.78c-.503.35-1.18-.122-.988-.69l.975-2.878a.602.602 0 00-.233-.688l-2.555-1.78c-.503-.35-.245-1.114.378-1.114h3.158a.64.64 0 00.611-.426l.976-2.878z"
                })));
            m.defaultProps = {
                size: {
                    width: 24,
                    height: 24
                },
                fill: h.black
            };
            var p = m,
                v = a("o7iY"),
                g = a("OPDf"),
                b = a("Jq/n"),
                f = a("Qv8g"),
                E = a("a+rT"),
                k = a("8/Xn"),
                y = a("y4uf"),
                C = a("ofoP"),
                w = a("noYS"),
                I = e => {
                    var t = Object(y.c)()._getPriceInCurrency,
                        a = e.monthlyPrice,
                        i = e.currencyCode;
                    return e.checkoutLabels.monthly.replace("%s", Object(E.a)(a, i, t))
                },
                S = e => {
                    var t = Object(y.c)()._getPriceInCurrency,
                        a = e.monthlyPrice,
                        i = e.currencyCode;
                    return e.checkoutLabels.support.replace("%s", Object(E.a)(a, i, t))
                };
            t.a = e => {
                var t = e.className,
                    a = e.blogName,
                    i = e.plan,
                    d = e.postId,
                    h = e.useBlogColors,
                    m = e.useSupportLabel,
                    E = e.includeLearnMoreButton,
                    M = e.includeViewPostsButton,
                    P = Object(y.c)(),
                    x = P._t,
                    O = P.apiFetch,
                    T = P.isLoggedIn,
                    D = Object(s.useState)(!1),
                    N = n()(D, 2),
                    V = N[0],
                    z = N[1],
                    j = Object(s.useState)(!1),
                    B = n()(j, 2),
                    R = B[0],
                    _ = B[1],
                    L = x("Oops. Something went wrong."),
                    A = T ? void 0 : Object(C.j)({
                        formToShow: l.a.Login
                    }, {
                        redirect_to: d ? "/memberships/".concat(a, "/").concat(d) : location.pathname
                    }),
                    U = h ? u.a.blogBackgroundColor : u.a.paletteAccent,
                    q = h ? u.a.blogContrastingLinkColor : u.a.paletteAccentTransparent15;
                return o.a.createElement("div", {
                    className: Object(b.a)([w.a.container, t])
                }, R && o.a.createElement("p", {
                    className: w.a.errorMessage
                }, L), o.a.createElement(v.c, {
                    wrapperClassName: w.a.monthlyCheckoutButton,
                    label: x("Monthly subscription"),
                    theme: v.b.Default,
                    size: v.a.EntireWidth,
                    textColor: U,
                    backgroundColor: q,
                    disabledBackgroundColor: u.a.paletteGray25,
                    disabledTheme: v.b.Default,
                    onClick: () => {
                        T && (_(!1), z(!0), Object(f.a)(O, a, r.c.Month, window.location.host, window.location.pathname).fetch((e => {
                            var t = e.response;
                            window.location.assign(t.url)
                        })).catch((() => {
                            z(!1), _(!0)
                        })))
                    },
                    href: A,
                    disabled: V
                }, m ? S(i) : I(i)), !!E && o.a.createElement(v.c, {
                    className: w.a.learnMoreButton,
                    label: x("Learn more"),
                    theme: v.b.Border,
                    size: v.a.EntireWidth,
                    textColor: q,
                    backgroundColor: q,
                    href: Object(k.a)({
                        peeprBlogname: a
                    }, void 0, {
                        isSupport: !0
                    })
                }, o.a.createElement(p, {
                    fill: u.a.blogContrastingLinkColor
                }), o.a.createElement(g.d, {
                    comment: "Learn more button"
                }, "Learn More")), !!M && o.a.createElement(c.a, {
                    className: w.a.viewMembersPosts,
                    blogName: a,
                    showBlogCard: !1
                }, o.a.createElement(g.d, {
                    comment: "Button linking to user's members only posts",
                    params: {
                        blogName: a
                    }
                }, "View posts by [blogName]")))
            }
        },
        Cupb: function(e, t, a) {
            "use strict";
            t.a = e => {
                if (!e) return !1;
                var t;
                try {
                    t = new URL(e)
                } catch (e) {
                    return !1
                }
                var a = t.hostname;
                if ("safe.txmblr.com" === a) return !0;
                var i = a.match(/\S+\.tumblr\.\w+\/?/g);
                return !!i && i[0].length === a.length
            }
        },
        Ivl8: function(e, t, a) {
            "use strict";
            var i = a("q1tI"),
                n = a.n(i);
            t.a = function(e) {
                var t = e.html,
                    a = e.className;
                return n.a.createElement("div", {
                    className: a,
                    dangerouslySetInnerHTML: {
                        __html: t
                    }
                })
            }
        },
        JGqm: function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return c
            }));
            var i = a("lSNA"),
                n = a.n(i),
                s = a("q1tI"),
                o = a.n(s),
                r = a("BwKz"),
                l = a("MHlR");
            class c extends s.Component {
                constructor() {
                    super(...arguments), n()(this, "state", {
                        isOffscreen: !1
                    }), n()(this, "handleIntersectionChange", (e => {
                        var t = e.isIntersecting,
                            a = e.target;
                        this.setState({
                            isOffscreen: !t,
                            placeholderSize: {
                                width: a.clientWidth,
                                height: a.clientHeight
                            }
                        })
                    }))
                }
                render() {
                    var e, t = this.state,
                        a = t.isOffscreen,
                        i = t.placeholderSize,
                        n = this.props,
                        s = n.children,
                        c = n.margin;
                    return e = a && i ? o.a.createElement("div", {
                        className: l.a.postPlaceholder,
                        style: i
                    }) : s, o.a.createElement(r.a, {
                        onChange: this.handleIntersectionChange,
                        rootMargin: c
                    }, e)
                }
            }
            n()(c, "defaultProps", {
                margin: "250%"
            })
        },
        K8di: function(e, t, a) {
            "use strict";
            a.d(t, "b", (function() {
                return z
            }));
            var i = a("q1tI"),
                n = a.n(i),
                s = a("pCNn"),
                o = a("pVnL"),
                r = a.n(o),
                l = a("lSNA"),
                c = a.n(l),
                d = a("y4uf"),
                h = a("SwI5"),
                u = a("Dcbp"),
                m = a.n(u),
                p = a("M3r2"),
                v = a("aJ4X"),
                g = a("F6jV"),
                b = a("x+FT"),
                f = a("fSeh"),
                E = a.n(f),
                k = a("lSVf");
            class y extends i.Component {
                constructor() {
                    super(...arguments), c()(this, "state", {
                        isPlaying: !1,
                        seekingBarWidth: 0,
                        isDragging: !1
                    }), c()(this, "onTimeUpdate", (() => {
                        if (this.progress && this.audioEl) {
                            var e = this.progress.clientWidth,
                                t = this.audioEl.duration,
                                a = this.audioEl.currentTime,
                                i = Math.round(a / t * e);
                            this.setState({
                                seekingBarWidth: i
                            })
                        }
                    })), c()(this, "onEnded", (() => {
                        this.setState({
                            isPlaying: !1,
                            seekingBarWidth: 0
                        }), this.audioEl && (this.audioEl.currentTime = 0)
                    })), c()(this, "handlePlayButtonClick", (e => this.setState((e => ({
                        isPlaying: !e.isPlaying
                    }))))), c()(this, "onTouchStart", (e => {
                        this.state.isPlaying && this.updateSeekBarPositionWithEvent(e)
                    })), c()(this, "onTouchEnd", (e => {
                        this.handleTouchEndMouseUp()
                    })), c()(this, "onProgressClick", (e => {
                        this.updateSeekBarPositionWithEvent(e)
                    })), c()(this, "onMouseMove", (e => {
                        this.handleMove(e)
                    })), c()(this, "onMouseDown", (() => {
                        this.setState({
                            isDragging: !0,
                            isPlaying: !1
                        })
                    })), c()(this, "onMouseUp", (() => {
                        this.handleTouchEndMouseUp()
                    })), c()(this, "handleTouchEndMouseUp", (() => {
                        this.setState({
                            isDragging: !1,
                            isPlaying: !0
                        })
                    })), c()(this, "handleMove", (e => {
                        this.state.isDragging && this.updateSeekBarPositionWithEvent(e)
                    })), c()(this, "updateSeekBarPositionWithEvent", (e => {
                        if (this.audioEl && this.progress) {
                            var t = (e.clientX || e.changedTouches[0].clientX) - e.currentTarget.firstElementChild.getBoundingClientRect().left,
                                a = this.audioEl.duration,
                                i = this.progress.clientWidth,
                                n = a / i * t,
                                s = Math.round(n / a * i);
                            s <= i && this.setState({
                                seekingBarWidth: s
                            }), this.audioEl.currentTime = n
                        }
                    })), c()(this, "playAudio", (() => {
                        var e;
                        null === (e = this.audioEl) || void 0 === e || e.play()
                    })), c()(this, "stopAudio", (() => {
                        var e;
                        null === (e = this.audioEl) || void 0 === e || e.pause()
                    }))
                }
                componentDidUpdate(e, t) {
                    "setComponentToAutoDock" in this.context && this.context.setComponentToAutoDock(this.state.isPlaying), t.isPlaying !== this.state.isPlaying && (this.state.isPlaying ? this.playAudio() : this.stopAudio()), e.isDocked && !this.props.isDocked && this.setState({
                        isPlaying: !1
                    })
                }
                render() {
                    var e = this.props.appContext._t,
                        t = "".concat(k.a.progress, " ").concat(this.props.poster ? k.a.withImage : ""),
                        a = {
                            onTouchStart: this.onTouchStart,
                            onTouchMove: this.updateSeekBarPositionWithEvent,
                            onTouchEnd: this.onTouchEnd
                        },
                        i = {
                            onClick: this.onProgressClick,
                            onMouseDown: this.onMouseDown,
                            onMouseMove: this.onMouseMove,
                            onMouseUp: this.onMouseUp
                        };
                    return n.a.createElement("div", {
                        className: k.a.nativePlayer
                    }, n.a.createElement(p.a, null, (s => {
                        var o, l, c = s.isMobile ? a : i;
                        return n.a.createElement("div", r()({}, c, {
                            className: t,
                            ref: e => this.progress = e,
                            role: "slider",
                            "aria-label": e("Audio Player"),
                            "aria-valuemin": 0,
                            "aria-valuemax": null === (o = this.audioEl) || void 0 === o ? void 0 : o.duration,
                            "aria-valuenow": null === (l = this.audioEl) || void 0 === l ? void 0 : l.currentTime
                        }), n.a.createElement("div", {
                            className: k.a.seeking,
                            ref: e => this.seeking = e,
                            style: {
                                width: "".concat(this.state.seekingBarWidth, "px")
                            }
                        }))
                    })), n.a.createElement("div", {
                        className: k.a.wrapper
                    }, n.a.createElement("div", {
                        className: k.a.playPause,
                        onClick: this.handlePlayButtonClick,
                        role: "button",
                        "aria-label": this.state.isPlaying ? e("Pause") : e("Play")
                    }, this.state.isPlaying ? n.a.createElement(b.a, {
                        fill: E.a.paletteWhite
                    }) : n.a.createElement(g.a, {
                        fill: E.a.paletteWhite,
                        withCircle: !1,
                        size: {
                            width: 24,
                            height: 24
                        },
                        viewBox: "18 15 13 16"
                    })), n.a.createElement("div", {
                        className: k.a.trackInfo
                    }, this.props.trackInfo.title && n.a.createElement("div", {
                        className: k.a.trackTitle
                    }, this.props.trackInfo.title), this.props.trackInfo.artist && n.a.createElement("div", {
                        className: k.a.trackArtist
                    }, this.props.trackInfo.artist), this.props.trackInfo.album && n.a.createElement("div", {
                        className: k.a.trackAlbum
                    }, this.props.trackInfo.album)), n.a.createElement("audio", {
                        preload: "auto",
                        style: k.a,
                        ref: e => this.audioEl = e,
                        onTimeUpdate: this.onTimeUpdate,
                        onEnded: this.onEnded,
                        title: this.props.trackInfo.title,
                        crossOrigin: "anonymous"
                    }, n.a.createElement("source", {
                        className: "audio-source",
                        src: this.props.src
                    })), this.props.poster ? n.a.createElement("div", {
                        className: k.a.albumImage
                    }, n.a.createElement(v.a, {
                        imageResponse: this.props.poster,
                        sizes: "".concat(m.a.audioPostAlbumCoverWidth, "px")
                    })) : null))
                }
            }
            c()(y, "contextType", h.a);
            var C = Object(d.d)(y),
                w = a("Ivl8"),
                I = a("Jq/n"),
                S = a("JGqm"),
                M = a("fJfF"),
                P = e => void 0 !== e.media && "tumblr" === e.provider,
                x = e => void 0 !== e.embedHtml,
                O = e => e.provider === s.a.Spotify,
                T = e => e.provider === s.a.Soundcloud,
                D = e => e.provider === s.a.Bandcamp,
                N = e => !P(e) && !!e.embedUrl && (O(e) || D(e) || T(e)),
                V = (e, t) => {
                    var a, i = e.title,
                        s = e.artist,
                        o = e.album,
                        r = e.poster,
                        l = e.url,
                        c = {
                            title: i,
                            artist: s,
                            album: o
                        };
                    return P(e) ? ((e, t, a, i) => n.a.createElement(C, {
                        poster: a,
                        trackInfo: t,
                        src: e.url,
                        isDocked: i
                    }))(e.media, c, r, t) : N(e) ? ((e, t) => n.a.createElement(S.a, null, n.a.createElement("iframe", {
                        title: t,
                        className: M.a.embedIframe,
                        src: e,
                        frameBorder: "0"
                    })))(e.embedUrl, i) : x(e) ? (a = e.embedHtml, n.a.createElement(w.a, {
                        html: a
                    })) : n.a.createElement("a", {
                        className: M.a.urlOnlyAudioBlock,
                        href: l
                    }, l)
                },
                z = e => !(P(e) || x(e) || O(e) || N(e));
            t.a = function(e) {
                var t = e.block,
                    a = e.isDocked,
                    i = e.showsMediaCompact,
                    s = void 0 !== i && i;
                return n.a.createElement("div", {
                    className: Object(I.a)({
                        [M.a.audioBlock]: !0,
                        [M.a.compact]: !!a || s,
                        [M.a.embedSpotifyWrapper]: O(t),
                        [M.a.embedSoundcloudWrapper]: N(t) && T(t),
                        [M.a.embedBandcampWrapper]: N(t) && D(t)
                    })
                }, V(t, a))
            }
        },
        N7Wd: function(e, t, a) {
            "use strict";
            var i;
            a.d(t, "a", (function() {
                    return i
                })),
                function(e) {
                    e.Notice = "notice", e.Error = "error", e.Success = "success"
                }(i || (i = {}))
        },
        NFOE: function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return s
            }));
            var i = a("mTM8"),
                n = a("s5E+"),
                s = e => {
                    var t = e.timelineObject,
                        a = void 0 === t ? {} : t,
                        s = e.fillId,
                        o = e.adPlacementConfiguration,
                        r = void 0 === o ? {} : o,
                        l = e.hydraConfigInstanceId;
                    if (Object(n.n)(a) || Object(n.i)(a)) {
                        var c = a.supplyRequestId,
                            d = a.supplyOpportunityInstanceId,
                            h = a.adProviderId,
                            u = a.isTumblrSponsoredPost,
                            m = a.sponsoredBadgeUrl,
                            p = a.adProviderForeignPlacementId,
                            v = a.adProviderPlacementId,
                            g = a.adProviderInstanceId,
                            b = a.mediationCandidateId,
                            f = a.streamSessionId,
                            E = a.streamGlobalPosition,
                            k = a.placementId,
                            y = a.price,
                            C = a.creativeId,
                            w = a.adId,
                            I = a.adRequestId,
                            S = a.adInstanceId,
                            M = a.adInstanceCreatedTimestamp,
                            P = a.supplyProviderId,
                            x = void 0 === P ? i.a.DASHBOARD : P,
                            O = (new Date).getTime() - M;
                        return {
                            price: y,
                            supply_opportunity_instance_id: d,
                            supply_provider_id: x,
                            supply_request_id: c,
                            ad_provider_id: h,
                            is_tumblr_sponsored_post: u || m ? 1 : 0,
                            ad_provider_placement_id: v,
                            ad_provider_foreign_placement_id: p,
                            ad_provider_instance_id: g,
                            mediation_candidate_id: b,
                            stream_session_id: f,
                            stream_global_position: E,
                            placement_id: k,
                            fill_id: s || a.fillId,
                            hydra_config_instance_id: l,
                            hydra_signature: r.signature,
                            creative_id: C,
                            ad_id: w,
                            ad_instance_age: O,
                            ad_request_id: I,
                            ad_instance_id: S
                        }
                    }
                    return {}
                }
        },
        Qv8g: function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return n
            }));
            var i = a("Qtnd");

            function n(e, t, a, n, s) {
                return Object(i.a)(e).generateCheckoutUrl(t, {
                    period: a,
                    host: n,
                    path: s
                })
            }
        },
        RliX: function(e, t, a) {
            "use strict";
            var i = a("lSNA"),
                n = a.n(i),
                s = a("q1tI"),
                o = a.n(s),
                r = a("zOq6");
            class l extends s.Component {
                render() {
                    var e = this.props,
                        t = e.className,
                        a = e.src,
                        i = e.title,
                        n = e.queryParams,
                        s = e.scrolling,
                        l = e.frameBorder,
                        c = e.style,
                        d = e.onLoad,
                        h = e.placementId,
                        u = e.allow,
                        m = e.allowFullScreen;
                    return o.a.createElement("iframe", {
                        className: t,
                        name: h,
                        title: i,
                        src: Object(r.a)(a, n),
                        scrolling: s,
                        frameBorder: l,
                        style: c,
                        onLoad: d,
                        allow: u,
                        allowFullScreen: m
                    })
                }
            }
            n()(l, "defaultProps", {
                className: "",
                queryParams: {},
                scrolling: "no",
                frameBorder: 0
            }), t.a = l
        },
        SwI5: function(e, t, a) {
            "use strict";
            var i = a("q1tI"),
                n = Object(i.createContext)({});
            t.a = n
        },
        Wl5J: function(e, t, a) {
            "use strict";
            var i = a("q1tI"),
                n = a.n(i),
                s = a("pCNn"),
                o = a("OPDf"),
                r = a("U2un");
            t.a = function(e) {
                var t = e.attribution;
                if (Object(s.A)(t)) {
                    var a = t.url,
                        i = t.blog.name;
                    return n.a.createElement("div", {
                        className: r.a.gifAttribution
                    }, n.a.createElement("a", {
                        href: a,
                        target: "_blank",
                        rel: "noopener"
                    }, n.a.createElement(o.d, {
                        params: {
                            blogName: i
                        },
                        components: {
                            strong: n.a.createElement("strong", null)
                        }
                    }, "GIF by [strong][blogName][/strong]")))
                }
                return null
            }
        },
        "Ya+1": function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return d
            }));
            var i = a("J2iB"),
                n = a.n(i),
                s = a("3WX/"),
                o = a.n(s),
                r = a("s5E+"),
                l = a("yvvX"),
                c = a("HBWv");

            function d(e, t) {
                var a = e,
                    i = this.props.adContext,
                    s = i.hydraConfigInstanceId,
                    d = i.adPlacementConfiguration,
                    h = null == d ? void 0 : d.signature,
                    u = e.objectType === r.g.Post && !n()(e.adm),
                    m = e.objectType === r.g.Announcement && e,
                    p = m ? Object(l.a)(m).bannerId : null,
                    v = e.adInstanceCreationTime ? Date.now() - e.adInstanceCreationTime : null,
                    g = a.adProviderId,
                    b = a.adProviderPlacementId,
                    f = a.adProviderForeignPlacementId,
                    E = a.adProviderInstanceId,
                    k = a.adRequestId,
                    y = a.fillId,
                    C = a.supplyRequestId,
                    w = a.supplyProviderId,
                    I = a.streamSessionId,
                    S = a.streamGlobalPosition,
                    M = a.supplyOpportunityInstanceId,
                    P = a.mediationCandidateId,
                    x = a.adInstanceId,
                    O = a.price,
                    T = a.advertiserId,
                    D = a.campaignId,
                    N = a.adGroupId,
                    V = a.adId,
                    z = a.creativeId,
                    j = a.earnedId,
                    B = o()({
                        hydraConfigInstanceId: s,
                        hydraSignature: h,
                        adProviderId: g,
                        adProviderPlacementId: b,
                        adProviderForeignPlacementId: f,
                        adProviderInstanceId: E,
                        adRequestId: k,
                        fillId: y,
                        supplyRequestId: C,
                        supplyProviderId: w,
                        streamSessionId: I,
                        streamGlobalPosition: S,
                        supplyOpportunityInstanceId: M,
                        mediationCandidateId: P,
                        adInstanceId: x,
                        price: O,
                        isTumblrSponsoredPost: u,
                        adInstanceAge: v,
                        advertiserId: T,
                        campaignId: D,
                        adGroupId: N,
                        adId: V,
                        banner_id: p,
                        creativeId: z,
                        earnedId: j
                    }, n.a);
                return t ? Object(c.b)(B) : B
            }
        },
        "a+rT": function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return i
            }));
            var i = (e, t, a) => a(e / 100, t)
        },
        dEos: function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return ce
            }));
            var i = a("q1tI"),
                n = a.n(i),
                s = a("pCNn"),
                o = a("Kiv0"),
                r = a("3tO9"),
                l = a.n(r),
                c = a("wig9"),
                d = a.n(c),
                h = a("mwIZ"),
                u = a.n(h),
                m = a("VXYR"),
                p = a("78v1"),
                v = a("Wl5J"),
                g = a("fPbW");
            var b = a("Jq/n"),
                f = a("MzjC"),
                E = a("o56e"),
                k = a("Dcbp"),
                y = a("fSeh"),
                C = a.n(y),
                w = a("y4uf"),
                I = a("g2Yl"),
                S = a("NFOE"),
                M = a("ofcG"),
                P = a("gxC+"),
                x = (e, t) => {
                    if (1 === e) return t;
                    var a = t.match(/[0-9]+/g);
                    if (!a) return t;
                    var i = a[0],
                        n = parseInt(i, 10),
                        s = Math.round(n * e * 100) / 100;
                    return t.replace(i, "".concat(s))
                },
                O = Object(E.b)((function(e) {
                    var t, a = e.block,
                        i = e.displayAtOriginalSize,
                        o = void 0 === i || i,
                        r = e.postContext,
                        c = a.media,
                        h = a.attribution,
                        E = a.colors,
                        y = a.altText,
                        O = a.imageScale,
                        T = void 0 === O ? 1 : O,
                        D = a.isBlurredImages,
                        N = a.clickthrough,
                        V = r.presentationStyle,
                        z = V.mobilePostWidth,
                        j = V.desktopPostWidth,
                        B = Object(w.c)().logEvent,
                        R = Object(M.b)(),
                        _ = R.adPlacementConfiguration,
                        L = R.hydraConfigInstanceId;
                    if (z) {
                        var A = x(T, z);
                        t = ["(max-width: ".concat(k.phoneResponsiveMaxBreakpoint, "px)"), A].join(" ")
                    }
                    var U = x(T, j),
                        q = d()([t, U]).join(", "),
                        W = n.a.createElement("figure", {
                            className: P.a.imageBlock
                        }, n.a.createElement(m.c, {
                            imageResponse: c,
                            colors: E,
                            altText: y,
                            sizes: q,
                            isBlurredImages: D
                        })),
                        H = null != N && N.webUrl ? n.a.createElement("a", {
                            className: P.a.imageBlock,
                            href: N.webUrl,
                            target: "_blank",
                            role: "link"
                        }, W) : n.a.createElement(g.a, {
                            imageResponse: c,
                            altText: y
                        }, W),
                        F = new f.a(c),
                        G = F.getLargestImage(),
                        J = u()(r, "presentationStyle.showsSmallImagesAtOriginalWidth", !0);
                    if (!h && G && J && o && G.width < k.smallImagePostBreakpoint && G.height < 2 * k.smallImagePostBreakpoint && (W = n.a.createElement("figure", {
                            className: Object(b.a)([P.a.imageBlock, P.a.unstretched]),
                            style: {
                                width: G.width
                            }
                        }, n.a.createElement(m.c, {
                            imageResponse: F.getImagesArrayWithoutCroppedImage(),
                            colors: E,
                            altText: y,
                            sizes: "".concat(G.width, "px"),
                            isBlurredImages: D
                        })), H = null != N && N.webUrl ? n.a.createElement("a", {
                            className: P.a.imageBlock,
                            href: N.webUrl,
                            target: "_blank",
                            role: "link"
                        }, W) : W), h && h.url) {
                        if (Object(s.A)(h)) return n.a.createElement("div", {
                            className: P.a.imageBlockGifAttribution
                        }, H, n.a.createElement(v.a, {
                            attribution: h
                        }));
                        var X = h.url,
                            Y = h.urlRedirect;
                        return n.a.createElement("div", {
                            className: P.a.imageBlockLink
                        }, H, n.a.createElement("a", {
                            href: Y,
                            target: "_blank",
                            rel: "noopener",
                            className: P.a.attribution,
                            onClick: () => {
                                var e;
                                B({
                                    eventName: I.b.HyperlinkedImage,
                                    eventDetails: l()({
                                        placement_id: null == r || null === (e = r.post) || void 0 === e ? void 0 : e.placementId
                                    }, Object(S.a)({
                                        adPlacementConfiguration: _,
                                        hydraConfigInstanceId: L,
                                        timelineObject: null == r ? void 0 : r.post
                                    }))
                                })
                            }
                        }, n.a.createElement("div", {
                            className: P.a.attributionText
                        }, function(e) {
                            return (e || "").replace(/^https?\:\/\//i, "")
                        }(X)), n.a.createElement("div", {
                            className: P.a.attributionIcon
                        }, n.a.createElement(p.a, {
                            size: {
                                width: 14,
                                height: 14
                            },
                            fill: C.a.paletteGray40
                        }))))
                    }
                    return H
                }), {
                    postContext: !0
                }),
                T = a("K8di"),
                D = a("lSNA"),
                N = a.n(D),
                V = a("zoQI"),
                z = a("afeb"),
                j = a("Oefy"),
                B = a("WGAa"),
                R = a("SwI5"),
                _ = a("BwKz"),
                L = a("Hoay");
            class A extends i.Component {
                constructor() {
                    super(...arguments), N()(this, "state", {
                        shouldAutoDock: !1,
                        mediaSize: {
                            width: 0,
                            height: 0
                        }
                    }), N()(this, "reparentableMediaManager", new j.a), N()(this, "setMediaWrapper", (e => this.mediaWrapper = e)), N()(this, "updateMediaSize", (() => {
                        if (this.mediaWrapper && !this.currentPostIsDocked()) {
                            var e = this.mediaWrapper.offsetWidth,
                                t = this.mediaWrapper.offsetHeight;
                            e === this.state.mediaSize.width && t === this.state.mediaSize.height || this.setState({
                                mediaSize: {
                                    width: e,
                                    height: t
                                }
                            })
                        }
                    })), N()(this, "currentPostIsDocked", (() => {
                        var e;
                        return this.mediaIsDockable() && !!this.props.dockableContext.reparentableMediaManager && this.reparentableMediaManager.id === (null === (e = this.props.dockableContext.reparentableMediaManager) || void 0 === e ? void 0 : e.id)
                    })), N()(this, "dockMedia", (() => {
                        this.updateMediaSize(), this.props.dockableContext.updateDockManagerState({
                            dockedTimelineObject: this.getTimelineObject(),
                            isMediaDocked: !0,
                            reparentableMediaManager: this.reparentableMediaManager
                        }), this.reparentableMediaManager.isReparented = !0
                    })), N()(this, "getTimelineObject", (() => l()(l()({}, this.props.postContext.post), {}, {
                        content: [],
                        trail: []
                    }))), N()(this, "undockMedia", (() => {
                        this.props.dockableContext.updateDockManagerState({
                            isMediaDocked: !1
                        }), this.logDockEvent(I.b.UndockPost)
                    })), N()(this, "setComponentToAutoDock", (e => this.mediaIsDockable() && this.state.shouldAutoDock !== e && this.setState({
                        shouldAutoDock: e
                    }))), N()(this, "autoDock", (e => {
                        var t = e.isIntersecting;
                        this.mediaIsDockable() && this.state.shouldAutoDock && !t && (this.dockMedia(), this.logDockEvent(I.b.AutoDockPost))
                    })), N()(this, "mediaIsDockable", (() => {
                        var e = this.props.postContext.presentationStyle.showsDockMediaButton;
                        return void 0 === e || e
                    })), N()(this, "onClickDock", (() => {
                        this.dockMedia(), this.logDockEvent(I.b.DockPost)
                    })), N()(this, "logDockEvent", (e => {
                        (0, this.props.appContext.logEvent)({
                            eventName: e
                        })
                    }))
                }
                componentDidMount() {
                    this.reparentableMediaManager.id = this.props.dockableContext.getId()
                }
                componentWillUnmount() {
                    var e = this.props.dockableContext.updateDockManagerState;
                    this.currentPostIsDocked() && e({
                        isMediaDocked: !1
                    })
                }
                render() {
                    var e = this.props,
                        t = e.media,
                        a = e.appContext._c,
                        i = this.mediaIsDockable(),
                        s = this.currentPostIsDocked(),
                        o = a('Button label. "Dock" as in for videos that get put in the sidebar and are always visible when you scroll', "Dock post in sidebar"),
                        r = i && !s && n.a.createElement(V.a, {
                            label: o,
                            title: o,
                            wrapperClassName: L.a.dockButton,
                            onClick: this.onClickDock
                        }, n.a.createElement(z.c, {
                            size: {
                                width: 15,
                                height: 15
                            },
                            fill: C.a.paletteWhite
                        })),
                        c = a('Button label. "Dock" as in for videos that get put in the sidebar and are always visible when you scroll', "Undock post in sidebar");
                    return n.a.createElement(R.a.Provider, {
                        value: {
                            setComponentToAutoDock: this.setComponentToAutoDock
                        }
                    }, n.a.createElement(_.a, {
                        onChange: this.autoDock,
                        threshold: .5
                    }, n.a.createElement("div", {
                        ref: this.setMediaWrapper,
                        className: L.a.wrapper
                    }, this.reparentableMediaManager.render(t.component, this.forceUpdate.bind(this), l()(l()({}, t.props), {}, {
                        isDocked: s
                    })), n.a.createElement(B.a, {
                        shouldRenderContent: !s,
                        reparentableContent: this.reparentableMediaManager
                    }), s ? (() => i && n.a.createElement(V.a, {
                        label: c,
                        title: c,
                        wrapperClassName: L.a.putItBack,
                        className: L.a.putItBackInner,
                        onClick: this.undockMedia,
                        wrapperStyle: {
                            paddingBottom: "calc(".concat(this.state.mediaSize.height / this.state.mediaSize.width * 100, "% - ").concat(4, "px)")
                        }
                    }, n.a.createElement(z.d, {
                        fill: C.a.paletteBlack,
                        size: {
                            width: 30,
                            height: 30
                        }
                    }), a("Undock a video that is in the sidebar.", "Put it back")))() : r)))
                }
            }
            var U = Object(E.b)(A, {
                    appContext: !0,
                    postContext: !0,
                    dockableContext: !0
                }),
                q = Object(E.b)((function(e) {
                    var t = e.block,
                        a = e.postContext.presentationStyle.showsMediaCompact;
                    return Object(T.b)(t) ? n.a.createElement(T.a, {
                        block: t,
                        showsMediaCompact: a
                    }) : n.a.createElement(U, {
                        media: {
                            props: {
                                block: t,
                                showsMediaCompact: a
                            },
                            component: T.a
                        }
                    })
                }), {
                    postContext: !0
                }),
                W = a("dfN1"),
                H = a("3Ruh"),
                F = function(e) {
                    var t = e.block,
                        a = t.url,
                        i = t.displayUrl,
                        s = t.title,
                        o = t.description,
                        r = t.author,
                        l = t.poster,
                        c = t.siteName;
                    return n.a.createElement("div", {
                        className: H.a.link
                    }, n.a.createElement(W.a, {
                        urls: {
                            displayUrl: i,
                            redirectUrl: a
                        },
                        info: {
                            title: s,
                            description: o,
                            author: r,
                            poster: l,
                            siteName: c
                        }
                    }))
                },
                G = a("Ty5D"),
                J = a("YTUo"),
                X = a.n(J),
                Y = a("ofoP"),
                Q = a("p8qf"),
                K = a("7gZB"),
                Z = a("s2Hx"),
                $ = Object(Z.c)(n.a.createElement("svg", {
                    fill: "none",
                    viewBox: "0 0 24 28"
                }, n.a.createElement("path", {
                    fillRule: "evenodd",
                    d: "M12 3a6 6 0 016 6v2a1 1 0 01-1 1H7a1 1 0 01-1-1V9a6 6 0 016-6zm9.982 9.164C21.46 11.984 21 11.552 21 11V9A9 9 0 103 9v2c0 .552-.46.984-.982 1.164A3.001 3.001 0 000 15v10a3 3 0 003 3h18a3 3 0 003-3V15a3.001 3.001 0 00-2.018-2.836zM12 15c.372 0 .81.215.976.717l.699 2.102h2.293c.466 0 .839.303.976.716.14.422.02.924-.389 1.214l-1.811 1.287.684 2.06c.173.519-.064.983-.389 1.214-.32.227-.781.279-1.174 0L12 22.985l-1.865 1.325a1.003 1.003 0 01-1.175 0 1.066 1.066 0 01-.388-1.214l.684-2.06-1.811-1.287a1.067 1.067 0 01-.389-1.214c.137-.413.51-.716.976-.716h2.293l.699-2.102c.166-.502.604-.717.976-.717z",
                    clipRule: "evenodd"
                })));
            $.defaultProps = {
                size: {
                    width: 36,
                    height: 36
                },
                fill: y.black
            };
            var ee = $,
                te = a("wtI5"),
                ae = a("uDgc"),
                ie = a("B7MQ"),
                ne = a("w7rC"),
                se = function(e) {
                    var t = e.block,
                        a = Object(w.c)().features.paywallConsumption,
                        o = Object(Q.c)().post.id,
                        r = Object(G.l)(),
                        l = t.title,
                        c = t.text,
                        d = t.blog,
                        h = t.subtype;
                    if (!d) return null;
                    var u = d.subscriptionPlan,
                        m = d.name,
                        p = d.isPaywallOn,
                        v = d.paywallAccess,
                        g = d.theme || {},
                        b = g.titleFont,
                        f = g.linkColor;
                    if (!a || !p || !u) return null;
                    if (h === s.g.Divider) return v === ne.a.Creator ? n.a.createElement(te.a, null) : null;
                    var E = Object(i.useMemo)((() => ({
                            fontFamily: "'".concat(b, "'")
                        })), [b]),
                        k = Object(Y.e)({
                            blogName: m
                        }),
                        y = r.pathname.startsWith(k),
                        C = X()({
                            mixedString: c.replace(/%s/, "{{blogName /}}"),
                            components: {
                                blogName: n.a.createElement("strong", null, m)
                            }
                        });
                    return n.a.createElement("div", {
                        className: ae.a.paywallWrapper,
                        style: Object(K.a)(d)
                    }, n.a.createElement("div", {
                        className: ae.a.header
                    }, n.a.createElement(ee, {
                        fill: f
                    }), n.a.createElement("span", {
                        className: ae.a.title,
                        style: E
                    }, l)), n.a.createElement("div", {
                        className: ae.a.text
                    }, C), n.a.createElement("div", {
                        className: ae.a.actions
                    }, n.a.createElement(ie.a, {
                        className: ae.a.checkout,
                        blogName: m,
                        postId: o,
                        plan: u,
                        useBlogColors: !0,
                        useSupportLabel: !0,
                        includeLearnMoreButton: !y
                    })))
                },
                oe = a("9ihE"),
                re = e => {
                    var t = e.block;
                    return Object(oe.c)(t) || !Object(oe.d)(t) && !Object(oe.b)(t) ? n.a.createElement(oe.a, {
                        block: t
                    }) : n.a.createElement(U, {
                        media: {
                            props: {
                                block: t
                            },
                            component: oe.a
                        }
                    })
                },
                le = a("4Qgc");

            function ce(e, t) {
                return "".concat(e.type, " ").concat(t)
            }
            t.b = function e(t) {
                var a = t.block,
                    i = t.displayAtOriginalSize;
                if (Object(s.P)(a)) return n.a.createElement(o.c, {
                    block: a
                });
                if (Object(s.F)(a)) {
                    var r = a.elements.map(((t, a) => {
                        var i = ce(t, a);
                        return n.a.createElement(e, {
                            key: i,
                            block: t,
                            blockIndex: a
                        })
                    }));
                    switch (a.type) {
                        case s.b.OrderedList:
                            return n.a.createElement("ol", {
                                className: le.a.list
                            }, r);
                        case s.b.UnorderedList:
                            return n.a.createElement("ul", {
                                className: le.a.list
                            }, r);
                        default:
                            return n.a.createElement("div", null)
                    }
                }
                return Object(s.B)(a) ? n.a.createElement(O, {
                    block: a,
                    displayAtOriginalSize: i
                }) : Object(s.u)(a) ? n.a.createElement(q, {
                    block: a
                }) : Object(s.D)(a) ? n.a.createElement(F, {
                    block: a
                }) : Object(s.R)(a) ? n.a.createElement(re, {
                    block: a
                }) : Object(s.J)(a) ? n.a.createElement(se, {
                    block: a
                }) : null
            }
        },
        dfN1: function(e, t, a) {
            "use strict";
            var i = a("E+oP"),
                n = a.n(i),
                s = a("q1tI"),
                o = a.n(s),
                r = a("aJ4X"),
                l = a("Dcbp"),
                c = a("y4uf"),
                d = a("p8qf"),
                h = a("fgfG"),
                u = a("NbkD"),
                m = a("qZVj");
            t.a = e => {
                var t, a = e.urls,
                    i = e.info,
                    s = Object(c.c)().logEvent,
                    p = Object(d.c)(),
                    v = a.redirectUrl,
                    g = a.displayUrl,
                    b = p !== d.a ? null == p || null === (t = p.post) || void 0 === t ? void 0 : t.placementId : void 0,
                    f = n()(i) ? function(e) {
                        return o.a.createElement("a", {
                            className: u.a.defaultUrl,
                            href: e,
                            target: "_blank",
                            rel: "noopener"
                        }, e)
                    }(v) : function(e, t, a, i, s, c, d) {
                        var h = null != i ? i : Object(m.a)(d) ? new URL(d).host : null,
                            p = !n()(a) || !n()(h) || !n()(s),
                            v = !n()(t) || !n()(c),
                            g = !n()(h) || !n()(s),
                            b = !p && !v,
                            f = [u.a.header];
                        p || f.push(u.a.noFooter), c && f.push(u.a.withImage);
                        var E = l.phoneResponsiveMaxBreakpoint,
                            k = ["(max-width: ".concat(E, "px) 100vw"), "".concat(l.postWidth - 2 * l.linkCardHorizontalMargin, "px")].join(", "),
                            y = v || b ? o.a.createElement("div", {
                                className: f.join(" ")
                            }, c && o.a.createElement(r.a, {
                                imageResponse: c,
                                sizes: k,
                                className: u.a.headerBackgroundImage
                            }), o.a.createElement("div", {
                                className: u.a.headerGlass
                            }, o.a.createElement("span", {
                                className: u.a.titleWrapper
                            }, b ? d || e : t))) : null,
                            C = [u.a.footer];
                        v || C.push(u.a.noHeader), c && C.push(u.a.belowImage);
                        var w = g ? o.a.createElement("div", {
                                className: u.a.source
                            }, h, h && s && o.a.createElement("span", {
                                className: u.a.divider
                            }, "|"), s) : null,
                            I = p ? o.a.createElement("div", {
                                className: C.join(" ")
                            }, a && o.a.createElement("div", {
                                className: u.a.description
                            }, " ", a, " "), w) : null;
                        return o.a.createElement("a", {
                            className: u.a.card,
                            target: "_blank",
                            href: e
                        }, y, I)
                    }(v, null == i ? void 0 : i.title, null == i ? void 0 : i.description, null == i ? void 0 : i.siteName, null == i ? void 0 : i.author, null == i ? void 0 : i.poster, g);
                return o.a.createElement("div", {
                    className: u.a.linkCard,
                    onClick: b ? () => {
                        Object(h.a)(s, b)
                    } : void 0,
                    role: "link"
                }, f)
            }
        },
        fPbW: function(e, t, a) {
            "use strict";
            var i = a("lSNA"),
                n = a.n(i),
                s = a("vN+2"),
                o = a.n(s),
                r = a("q1tI"),
                l = a.n(r),
                c = a("zoQI"),
                d = a("y4uf"),
                h = a("17x9"),
                u = a("Muyw");
            class m extends r.Component {
                constructor() {
                    super(...arguments), n()(this, "state", {
                        onClick: void 0
                    }), n()(this, "openInLightbox", o.a)
                }
                componentDidMount() {
                    this.openInLightbox = this.context.addImageToLightbox ? this.context.addImageToLightbox(this.props.imageResponse) : o.a
                }
                render() {
                    var e = this.props,
                        t = e.children,
                        a = e.altText,
                        i = (0, e.appContext._t)("Image");
                    return l.a.createElement(c.a, {
                        wrapperClassName: u.a.imageBlockButton,
                        onClick: this.openInLightbox,
                        label: a ? "".concat(i, ": ").concat(a) : i
                    }, t)
                }
            }
            n()(m, "contextTypes", {
                addImageToLightbox: h.func
            }), t.a = Object(d.d)(m)
        },
        oU8s: function(e, t, a) {
            "use strict";
            var i, n = a("3tO9"),
                s = a.n(n),
                o = a("lSNA"),
                r = a.n(o),
                l = a("q1tI"),
                c = a.n(l),
                d = a("M3r2"),
                h = a("aCRw"),
                u = a("aJ4X"),
                m = a("7VIw"),
                p = a.n(m),
                v = a("7wYf"),
                g = a("EilA"),
                b = a("fSeh"),
                f = a.n(b),
                E = a("zoQI"),
                k = a("17x9"),
                y = a("MzjC"),
                C = a("o56e"),
                w = a("g2Yl"),
                I = a("jQ5O");
            ! function(e) {
                e[e.Center = I.a.center] = "Center", e[e.Left = I.a.left] = "Left", e[e.Right = I.a.right] = "Right", e[e.Mobile = I.a.mobileImage] = "Mobile"
            }(i || (i = {}));
            class S extends l.Component {
                constructor() {
                    super(...arguments), r()(this, "state", {
                        isOpen: !1,
                        currentIndex: 0,
                        images: []
                    }), r()(this, "tempIndex", -1), r()(this, "getChildContext", (() => ({
                        addImageToLightbox: e => {
                            var t = this.state.images.length,
                                a = this.state.images;
                            return a.push(e), this.setState({
                                images: a
                            }), () => this.openLightbox(t)
                        }
                    }))), r()(this, "toggleLightbox", (() => {
                        this.setState((e => ({
                            isOpen: !e.isOpen
                        })), (() => {
                            this.props.adContext.sendClickADMBeacon(this.props.adm), this.props.appContext.logEvent({
                                eventName: w.b.Photo,
                                eventDetails: s()({
                                    placement_id: this.props.placementId
                                }, this.props.krakenEventDetails)
                            })
                        }))
                    })), r()(this, "renderDesktopContent", (() => {
                        var e = this.state,
                            t = e.currentIndex,
                            a = e.images,
                            n = a.length,
                            s = 0 === t,
                            o = t === a.length - 1,
                            r = !s && n >= 2 ? this.renderImage(a[t - 1], i.Left) : null,
                            l = this.renderImage(a[t], i.Center),
                            d = !o && n >= t + 1 ? this.renderImage(a[t + 1], i.Right) : null;
                        return c.a.createElement(c.a.Fragment, null, c.a.createElement(g.c, {
                            hotkey: [{
                                key: g.b.Left,
                                command: this.decrementImage
                            }, {
                                key: g.b.Right,
                                command: this.incrementImage
                            }]
                        }), r, l, d)
                    })), r()(this, "renderMobileContent", (() => {
                        var e = this.state,
                            t = e.currentIndex,
                            a = e.images,
                            n = Object(v.virtualize)(p.a);
                        return c.a.createElement(E.a, {
                            onClick: this.toggleLightbox,
                            label: this.props.appContext._c("Clicking on the image will expand it and open a lightbox", "Close image")
                        }, c.a.createElement(n, {
                            className: I.a.swipeableViews,
                            containerStyle: {
                                width: "100vw"
                            },
                            slideClassName: I.a.mobileSlide,
                            slideStyle: {
                                overflow: "visible"
                            },
                            index: t,
                            slideCount: a.length,
                            slideRenderer: e => {
                                var t = e.index,
                                    n = e.key;
                                return this.renderImage(a[t], i.Mobile, n)
                            },
                            onChangeIndex: e => {
                                this.tempIndex = e
                            },
                            onTransitionEnd: () => {
                                -1 !== this.tempIndex && (this.setState({
                                    currentIndex: this.tempIndex
                                }), this.tempIndex = -1)
                            },
                            overscanSlideBefore: 1,
                            overscanSlideAfter: 1,
                            resistance: !0
                        }))
                    })), r()(this, "renderImage", ((e, t, a) => {
                        var n, s = this.state,
                            o = s.currentIndex,
                            r = s.images;
                        switch (t) {
                            case i.Left:
                                n = this.decrementImage;
                                break;
                            case i.Right:
                                n = this.incrementImage;
                                break;
                            case i.Center:
                                var l = o === r.length - 1;
                                n = 1 === r.length ? this.toggleLightbox : l ? this.decrementImage : this.incrementImage
                        }
                        var d = new y.a(e).getLargestImage().width,
                            h = "".concat(d, "px");
                        return n ? c.a.createElement(E.a, {
                            key: a,
                            wrapperClassName: [I.a.image, t].join(" "),
                            onClick: n,
                            label: this.props.appContext._c("Clicking on the image will expand it and open a lightbox", "Close image")
                        }, c.a.createElement(u.a, {
                            imageResponse: e,
                            sizes: h
                        })) : c.a.createElement("div", {
                            key: a,
                            className: [I.a.image, t].join(" ")
                        }, c.a.createElement(u.a, {
                            imageResponse: e,
                            sizes: h
                        }))
                    })), r()(this, "decrementImage", (() => {
                        0 !== this.state.currentIndex && this.setState((e => s()(s()({}, e), {}, {
                            currentIndex: e.currentIndex - 1
                        })))
                    })), r()(this, "incrementImage", (() => {
                        this.state.currentIndex !== this.state.images.length - 1 && this.setState((e => s()(s()({}, e), {}, {
                            currentIndex: e.currentIndex + 1
                        })))
                    })), r()(this, "openLightbox", (e => {
                        this.setState({
                            isOpen: !0,
                            currentIndex: e
                        })
                    }))
                }
                render() {
                    var e = this.state.isOpen,
                        t = c.a.createElement(d.a, null, (e => {
                            var t = e.isMobile;
                            return c.a.createElement(h.a, {
                                onGlassClick: this.toggleLightbox,
                                centerContent: !0,
                                color: f.a.black,
                                opacity: .85
                            }, t ? this.renderMobileContent() : this.renderDesktopContent())
                        }));
                    return c.a.createElement(c.a.Fragment, null, this.props.children, e && t)
                }
            }
            r()(S, "childContextTypes", {
                addImageToLightbox: k.func
            }), t.a = Object(C.b)(S, {
                appContext: !0,
                adContext: !0
            })
        },
        qZVj: function(e, t, a) {
            "use strict";

            function i(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (!e) return !1;
                var a = "%[0-9a-fA-F]{2}",
                    i = t ? "(http|https):\\/\\/" : "((http|https):\\/\\/)?",
                    n = '([a-zA-Z0-9$\\-_.+!*"(),;:&=]|'.concat(a, ")+@"),
                    s = "(25[0-5]|2[0-4][0-9]|[0-1][0-9][0-9]|[1-9][0-9]|[0-9])",
                    o = "(".concat(s, "(\\.").concat(s, "){3})"),
                    r = "a-zA-Z0-9\\-\\_\\~",
                    l = "\\u00C0-\\u9FFF",
                    c = "([".concat(r).concat(l, "]+\\.)+([a-zA-Z]{2,})"),
                    d = "[0-9]+",
                    h = "(".concat(o, "|localhost|").concat(c, ")(:").concat(d, ")?"),
                    u = "".concat(r).concat(l, ".:\\[\\]@!$&'()*+,;="),
                    m = "([".concat(u, "]|").concat(a, ")*"),
                    p = "".concat(m, "(\\/").concat(m, ")*"),
                    v = "\\?([".concat(u, "/?]|").concat(a, ")*"),
                    g = "\\#([".concat(u, "/?]|").concat(a, ")*"),
                    b = new RegExp("^".concat(i, "(").concat(n, ")?").concat(h, "(\\/?(").concat(p, ")?(").concat(v, ")?(").concat(g, ")?)?$"));
                return !0 === b.test(e)
            }
            a.d(t, "a", (function() {
                return i
            }))
        },
        tROj: function(e, t, a) {
            "use strict";
            var i, n, s;

            function o(e) {
                return !!e && !!e.type && !!e.type && Object.values(n).includes(e.type)
            }
            a.d(t, "c", (function() {
                    return i
                })), a.d(t, "b", (function() {
                    return n
                })), a.d(t, "a", (function() {
                    return s
                })), a.d(t, "d", (function() {
                    return o
                })),
                function(e) {
                    e.Youtube = "youtube", e.Tumblr = "tumblr", e.Flickr = "flickr", e.Instagram = "instagram"
                }(i || (i = {})),
                function(e) {
                    e.Mov = "video/quicktime", e.Mp4 = "video/mp4", e.AppleM4v = "video/x-m4v"
                }(n || (n = {})),
                function(e) {
                    e.User = "User", e.Glass = "Glass", e.DocumentVisibility = "DocumentVisibility"
                }(s || (s = {}))
        },
        w2zw: function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return s
            })), a.d(t, "b", (function() {
                return o
            })), a.d(t, "c", (function() {
                return r
            }));
            var i = a("HS+D"),
                n = a("Cupb");

            function s(e, t) {
                var a, s = i => {
                    var s = function(e) {
                        var t, a = e.origin,
                            i = e.source,
                            s = e.data;
                        if (!(s && a && i)) return null;
                        if (!Object(n.a)(a)) return null;
                        try {
                            t = JSON.parse(s)
                        } catch (e) {
                            return null
                        }
                        if (!t.method) return null;
                        var o = t.method.match(/^([^:]+):(.+)$/);
                        if (!o) return null;
                        var r = o[1],
                            l = o[2],
                            c = t.args[0];
                        return {
                            origin: a,
                            namespace: r,
                            name: l,
                            source: i,
                            cid: t.cid,
                            data: c
                        }
                    }(i);
                    if (s && s.namespace === e) return "_syn" === s.name ? (a = {
                            namespace: e,
                            source: s.source,
                            origin: s.origin
                        }, void
                        function(e, t, a, i) {
                            var n = JSON.stringify({
                                method: "".concat(a, ":_method_callback_responder"),
                                args: [i]
                            });
                            e.postMessage(n, t)
                        }(s.source, s.origin, e, {
                            response: "ack",
                            cid_response: s.cid
                        })) : void(t[s.name] && t[s.name](s.data))
                };
                return i.b.on("message", s), {
                    handler: s,
                    getChannelInfo: () => a
                }
            }
            var o = {
                listen: s,
                unlisten: function(e) {
                    i.b.off("message", e)
                }
            };

            function r(e, t, a) {
                var i = e.source,
                    n = e.target,
                    s = e.namespace,
                    o = JSON.stringify({
                        method: "".concat(s, ":").concat(t),
                        args: [a]
                    });
                i.postMessage(o, n)
            }
        },
        wWh2: function(e, t, a) {
            "use strict";
            var i = a("3tO9"),
                n = a.n(i),
                s = a("lSNA"),
                o = a.n(s),
                r = a("q1tI"),
                l = a.n(r),
                c = a("dRu9"),
                d = a("Ynen"),
                h = a.n(d),
                u = a("tROj"),
                m = a("y4uf"),
                p = a("fSeh"),
                v = a.n(p),
                g = a("s2Hx"),
                b = Object(g.c)(l.a.createElement("svg", {
                    viewBox: "0 0 24 24"
                }, l.a.createElement("path", {
                    d: "M17.242 4.06c.458 0 .688.554.364.878l-4.27 4.27a1.03 1.03 0 101.456 1.456l4.27-4.27a.515.515 0 01.879.364v2.45a1.03 1.03 0 002.059 0V3.03A1.03 1.03 0 0020.97 2h-6.178a1.03 1.03 0 100 2.06h2.45z"
                }), l.a.createElement("path", {
                    d: "M4.06 17.242c0 .459.554.688.878.364l4.27-4.27a1.03 1.03 0 111.456 1.457l-4.27 4.269a.515.515 0 00.364.879h2.45a1.03 1.03 0 010 2.059H3.03A1.03 1.03 0 012 20.97v-6.177a1.03 1.03 0 112.06 0v2.449z"
                })));
            b.defaultProps = {
                size: {
                    width: 24,
                    height: 24
                },
                fill: p.white
            };
            var f = b,
                E = Object(g.c)(l.a.createElement("svg", {
                    viewBox: "0 0 24 24"
                }, l.a.createElement("path", {
                    d: "M20.508 11.126a1.022 1.022 0 010 1.748L7.257 20.788C6.258 21.384 5 20.653 5 19.478V4.522c0-1.176 1.258-1.907 2.257-1.31l13.25 7.913z"
                })));
            E.defaultProps = {
                size: {
                    width: 24,
                    height: 24
                },
                fill: p.white
            };
            var k = E,
                y = a("x+FT"),
                C = Object(g.c)(l.a.createElement("svg", {
                    viewBox: "0 0 24 24"
                }, l.a.createElement("path", {
                    d: "M16.564 9.44c-.288.472-.107 1.083.17 1.561a1.998 1.998 0 01-.001 1.998c-.276.478-.457 1.09-.169 1.56.288.472.916.627 1.302.231A3.986 3.986 0 0019 12c0-1.085-.432-2.07-1.134-2.79-.386-.396-1.014-.241-1.302.23zm2.37 7.09c-.417.362-.572.972-.284 1.443.288.472.91.625 1.34.28A7.985 7.985 0 0023 12a7.985 7.985 0 00-3.01-6.253c-.43-.345-1.052-.192-1.34.28-.288.47-.133 1.08.284 1.443A5.986 5.986 0 0121 12c0 1.809-.8 3.43-2.066 4.53z"
                }), l.a.createElement("mask", {
                    id: "a",
                    width: "13",
                    height: "17",
                    x: "2",
                    y: "3",
                    fill: "#000",
                    maskUnits: "userSpaceOnUse"
                }, l.a.createElement("path", {
                    fill: "#fff",
                    d: "M2 3h13v17H2z"
                }), l.a.createElement("path", {
                    d: "M8.261 15.06a1 1 0 00-.583-.188H5a1 1 0 01-1-1V10.12a1 1 0 011-1h2.678a1 1 0 00.584-.188l3.946-2.837A.5.5 0 0113 6.5v10.991a.5.5 0 01-.792.406L8.261 15.06z"
                })), l.a.createElement("path", {
                    d: "M12.208 6.095l1.168 1.624-1.168-1.624zm0 11.803l1.168-1.624-1.168 1.624zM8.262 8.932L7.094 7.308l1.168 1.624zm0 6.128l-1.168 1.624L8.26 15.06zm-.584-2.188H5v4h2.678v-4zm-2.678 0a1 1 0 011 1H2a3 3 0 003 3v-4zm1 1V10.12H2v3.752h4zm0-3.752a1 1 0 01-1 1v-4a3 3 0 00-3 3h4zm-1 1h2.678v-4H5v4zm4.43-.564l3.946-2.837L11.04 4.47 7.094 7.308l2.335 3.248zm3.946-2.837C12.383 8.432 11 7.723 11 6.5h4c0-2.037-2.306-3.219-3.96-2.03l2.336 3.248zM11 6.5v10.991h4V6.501h-4zm0 10.991c0-1.222 1.383-1.931 2.376-1.218l-2.335 3.248c1.653 1.189 3.959.007 3.959-2.03h-4zm2.376-1.218l-3.947-2.838-2.335 3.248 3.947 2.838 2.335-3.248zM7.678 11.12a3 3 0 001.751-.564L7.094 7.308a1 1 0 01.584-.188v4zm0 5.752a1 1 0 01-.584-.188l2.335-3.248a3 3 0 00-1.751-.564v4z",
                    mask: "url(#a)"
                })));
            C.defaultProps = {
                size: {
                    width: 24,
                    height: 24
                },
                fill: p.white
            };
            var w = C,
                I = Object(g.c)(l.a.createElement("svg", {
                    viewBox: "0 0 24 24"
                }, l.a.createElement("mask", {
                    id: "a",
                    width: "13",
                    height: "17",
                    x: "2",
                    y: "3",
                    fill: "#000",
                    maskUnits: "userSpaceOnUse"
                }, l.a.createElement("path", {
                    fill: "#fff",
                    d: "M2 3h13v17H2z"
                }), l.a.createElement("path", {
                    d: "M8.261 15.06a1 1 0 00-.583-.188H5a1 1 0 01-1-1V10.12a1 1 0 011-1h2.678a1 1 0 00.584-.188l3.946-2.837A.5.5 0 0113 6.5v10.991a.5.5 0 01-.792.406L8.261 15.06z"
                })), l.a.createElement("path", {
                    d: "M12.208 6.095l1.168 1.624-1.168-1.624zm0 11.803l1.168-1.624-1.168 1.624zM8.262 8.932L7.094 7.308l1.168 1.624zm0 6.128l-1.168 1.624L8.26 15.06zm-.584-2.188H5v4h2.678v-4zm-2.678 0a1 1 0 011 1H2a3 3 0 003 3v-4zm1 1V10.12H2v3.752h4zm0-3.752a1 1 0 01-1 1v-4a3 3 0 00-3 3h4zm-1 1h2.678v-4H5v4zm4.43-.564l3.946-2.837L11.04 4.47 7.094 7.308l2.335 3.248zm3.946-2.837C12.383 8.432 11 7.723 11 6.5h4c0-2.037-2.306-3.219-3.96-2.03l2.336 3.248zM11 6.5v10.991h4V6.501h-4zm0 10.991c0-1.222 1.383-1.931 2.376-1.218l-2.335 3.248c1.653 1.189 3.959.007 3.959-2.03h-4zm2.376-1.218l-3.947-2.838-2.335 3.248 3.947 2.838 2.335-3.248zM7.678 11.12a3 3 0 001.751-.564L7.094 7.308a1 1 0 01.584-.188v4zm0 5.752a1 1 0 01-.584-.188l2.335-3.248a3 3 0 00-1.751-.564v4z",
                    mask: "url(#a)"
                }), l.a.createElement("path", {
                    d: "M22.77 9.23a.784.784 0 00-1.108 0l-1.108 1.108a.784.784 0 01-1.108 0L18.338 9.23a.784.784 0 00-1.108 1.108l1.108 1.108a.784.784 0 010 1.108l-1.108 1.108a.784.784 0 001.108 1.108l1.108-1.108a.784.784 0 011.108 0l1.108 1.108a.784.784 0 001.108-1.108l-1.108-1.108a.784.784 0 010-1.108l1.108-1.108a.784.784 0 000-1.108z"
                })));
            I.defaultProps = {
                size: {
                    width: 24,
                    height: 24
                },
                fill: p.white
            };
            var S = I,
                M = Object(g.c)(l.a.createElement("svg", {
                    viewBox: "0 0 20 15"
                }, l.a.createElement("path", {
                    d: "M18.5 0H1.6C.7 0 0 .7 0 1.5v12.1c0 .8.7 1.4 1.6 1.4h16.9c.9 0 1.6-.6 1.6-1.5v-12C20 .7 19.3 0 18.5 0zM9.2 11H7.6V8h-3v3H3V4h1.6v2.7h2.9V4h1.6c.1 0 .1 7 .1 7zm7.6-2.1c-.1.4-.3.8-.6 1.1-.3.3-.6.6-1 .7-.4.2-.9.3-1.5.3h-3.1V4h3.1c.5 0 .9.1 1.3.2s.8.4 1 .6c.3.3.5.6.7 1.1.2.5.3 1 .3 1.6 0 .5-.1.9-.2 1.4zm-1.8-3c-.2-.2-.4-.4-.6-.5-.3-.1-.6-.2-1-.2h-1.1v4.4h1.4c.2 0 .5 0 .7-.1.2-.1.4-.2.6-.4.2-.2.3-.4.4-.7.1-.3.2-.6.2-1s0-.7-.1-1c-.3 0-.4-.3-.5-.5z"
                })));
            M.defaultProps = {
                size: {
                    width: 24,
                    height: 24
                },
                fill: p.white
            };
            var P, x, O, T, D, N = M,
                V = a("zoQI"),
                z = a("Jq/n"),
                j = a("gU3L"),
                B = function(e) {
                    var t = e.filmstrip,
                        a = e.onClickFullScreen,
                        i = e.onClickPlay,
                        n = e.onClickPause,
                        s = e.onClickVolume,
                        o = e.onClickHd,
                        r = e.isHdAvailable,
                        c = e.isFullScreen,
                        d = e.isHd,
                        h = e.isMuted,
                        u = e.isPlaying,
                        p = e.isInitialOverlay,
                        g = e.time,
                        b = e.handlePosition,
                        E = e.handleHoverPosition,
                        C = e.onMouseMoveSeekbarWrapper,
                        I = e.onMouseLeaveSeekbarWrapper,
                        M = e.onMouseDownSeekbarWrapper,
                        P = e.onMouseUpSeekbarWrapper,
                        x = e.onClickSeekHandleHover,
                        O = e.buffered,
                        T = e.seekHover,
                        D = e.frameTime,
                        B = e.onSeekBarRef,
                        R = e.thumbnailStyles,
                        _ = e.useLimitedControls,
                        L = e.soundDisabled,
                        A = e.showMuteControlOnly,
                        U = Object(m.c)()._c,
                        q = _ && {
                            height: 40,
                            width: 40
                        },
                        W = !L && l.a.createElement(V.a, {
                            className: j.a.control,
                            onClick: s,
                            label: U("Video controls", "Toggle sound")
                        }, h ? l.a.createElement(S, {
                            size: q
                        }) : l.a.createElement(w, {
                            size: q
                        })),
                        H = {
                            display: p ? "none" : void 0
                        };
                    return _ || A ? l.a.createElement("div", {
                        className: Object(z.a)([j.a.controls, j.a.limited]),
                        style: H
                    }, W) : l.a.createElement("div", {
                        className: j.a.controls,
                        style: H
                    }, u ? l.a.createElement(V.a, {
                        className: j.a.control,
                        onClick: n,
                        label: U("Video controls", "Pause")
                    }, l.a.createElement(y.a, null)) : l.a.createElement(V.a, {
                        className: j.a.control,
                        onClick: i,
                        label: U("Video controls", "Play")
                    }, l.a.createElement(k, null)), l.a.createElement("div", {
                        className: j.a.seekBarWrapper,
                        onMouseMove: C,
                        onMouseLeave: I,
                        onMouseDown: M,
                        onMouseUp: P,
                        role: "progressbar"
                    }, l.a.createElement("div", {
                        className: j.a.seekBar,
                        ref: B
                    }, l.a.createElement("div", {
                        className: j.a.buffer,
                        style: {
                            width: "".concat(O, "%")
                        }
                    }), l.a.createElement("div", {
                        className: j.a.seekBarProgress,
                        style: {
                            width: b
                        }
                    }), l.a.createElement("div", {
                        className: "".concat(j.a.seekHandle, " ").concat(T ? j.a.onHover : ""),
                        style: {
                            left: b
                        }
                    }), l.a.createElement("div", {
                        className: Object(z.a)({
                            [j.a.seekHandleHover]: !0,
                            [j.a.onHover]: T
                        }),
                        style: T ? {
                            visibility: "visible",
                            left: "".concat(E, "px")
                        } : void 0,
                        onClick: x,
                        role: "button"
                    }, t && l.a.createElement("div", {
                        className: j.a.frameThumbnail,
                        style: R
                    }, l.a.createElement("div", {
                        className: j.a.thumbnailTime
                    }, D))))), l.a.createElement("div", {
                        className: j.a.time
                    }, " ", g || "--:--", " "), r && l.a.createElement(V.a, {
                        className: j.a.control,
                        onClick: o,
                        label: U("Video controls", "Toggle high definition")
                    }, l.a.createElement(N, {
                        fill: d ? v.a.paletteWhite : v.a.transparentWhite65
                    })), !c && l.a.createElement(V.a, {
                        className: j.a.control,
                        onClick: a,
                        label: U("Video controls", "Toggle full screen")
                    }, l.a.createElement(f, {
                        size: {
                            width: 22,
                            height: 22
                        }
                    })), W)
                },
                R = a("F6jV"),
                _ = a("yBJ7"),
                L = a("j8fp"),
                A = function(e) {
                    var t = e.isPlaying,
                        a = e.showPoof,
                        i = e.isLoading,
                        n = e.isInitialOverlay,
                        s = e.onAnimationEndPoof;
                    return l.a.createElement("div", {
                        className: "".concat(L.a.overlayPoof, " ").concat(t ? L.a.isPlaying : "")
                    }, n && l.a.createElement(R.a, {
                        withCircle: !1,
                        size: {
                            width: 24,
                            height: 24
                        },
                        viewBox: "18 15 13 16"
                    }), a && l.a.createElement("div", {
                        className: L.a.overlay,
                        onAnimationEnd: s
                    }, t ? l.a.createElement(R.a, {
                        withCircle: !1,
                        size: {
                            width: 24,
                            height: 24
                        },
                        viewBox: "18 15 13 16"
                    }) : l.a.createElement(y.a, {
                        size: {
                            width: 24,
                            height: 24
                        }
                    })), i && l.a.createElement("div", {
                        className: L.a.loading
                    }, l.a.createElement(_.b, {
                        small: !0
                    })))
                },
                U = a("BwKz"),
                q = a("4S20"),
                W = a("SwI5");
            ! function(e) {
                e.Mute = "video_mute", e.Unmute = "video_unmute", e.Play = "video_play", e.Autoplay = "video_auto_play", e.Pause = "video_pause", e.Autopause = "video_auto_stop", e.Loop = "video_loop", e.Scrub = "video_scrub_end", e.Fullscreen = "video_fullscreen"
            }(P || (P = {})),
            function(e) {
                e.Start = "video_start"
            }(x || (x = {})),
            function(e) {
                e.Quartile25 = "video_quartile_25", e.Quartile50 = "video_quartile_50", e.Quartile75 = "video_quartile_75", e.Quartile100 = "video_quartile_100"
            }(O || (O = {})),
            function(e) {
                e.View1Second = "video_view_1_second", e.View2Seconds = "video_view_2_second", e.View3Seconds = "video_view_3_second", e.View10Seconds = "video_view_10_second"
            }(T || (T = {})),
            function(e) {
                e.PositionChange = "position_change", e.Reset = "reset"
            }(D || (D = {}));
            var H = {
                    [O.Quartile25]: .25,
                    [O.Quartile50]: .5,
                    [O.Quartile75]: .75,
                    [O.Quartile100]: .98
                },
                F = {
                    [T.View1Second]: 1,
                    [T.View2Seconds]: 2,
                    [T.View3Seconds]: 3,
                    [T.View10Seconds]: 10
                },
                G = a("Ya+1"),
                J = "webkitbeginfullscreen";
            var X = class {
                    constructor(e, t, a) {
                        var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                        o()(this, "isFullscreen", !1), o()(this, "isAutoplay", (() => this.videoEl.autoplay)), o()(this, "isMuted", (() => this.videoEl.muted)), o()(this, "getTimePosition", (() => this.videoEl.currentTime)), o()(this, "getMaxDuration", (() => this.videoEl.duration || 0)), o()(this, "handleMute", (() => this.stateChangeFn(P.Mute))), o()(this, "handleUnmute", (() => this.stateChangeFn(P.Unmute))), o()(this, "handleLoop", (() => this.stateChangeFn(P.Loop))), o()(this, "handleScrub", (() => this.stateChangeFn(P.Scrub))), o()(this, "handleFullscreen", (() => this.stateChangeFn(P.Fullscreen))), o()(this, "handlePause", (() => this.stateChangeFn(this.isAutoplay() ? P.Autopause : P.Pause))), o()(this, "handlePlay", (() => this.stateChangeFn(this.isAutoplay() ? P.Autoplay : P.Play))), o()(this, "handleTimeUpdate", (() => this.stateChangeFn(D.PositionChange))), this.videoEl = e, this.stateChangeFn = t, this.isInView = a, this.options = i, this.lastKnownIsMuted = this.videoEl.muted, this.addEventListeners()
                    }
                    addEventListeners() {
                        this.videoEl.addEventListener("timeupdate", (() => this.handleTimeUpdate())), this.videoEl.addEventListener("play", (() => this.handlePlay())), this.videoEl.addEventListener("pause", (() => this.handlePause())), this.videoEl.addEventListener("ended", (() => {
                            this.nextSeekedIsLoop = !0, this.options.doesVideoLoop && this.handleLoop()
                        })), this.videoEl.addEventListener("seeked", (() => {
                            this.nextSeekedIsLoop && 0 === Math.floor(this.videoEl.currentTime) ? this.nextSeekedIsLoop = !1 : this.handleScrub()
                        })), ["fullscreenchange", "webkitfullscreenchange", J].forEach((e => {
                            this.videoEl.addEventListener(e, (() => {
                                e !== J && this.isFullscreen ? this.isFullscreen = !1 : (this.isFullscreen = !0, this.handleFullscreen())
                            }))
                        })), this.videoEl.addEventListener("volumechange", (() => {
                            var e = !this.lastKnownIsMuted && this.isMuted(),
                                t = this.lastKnownIsMuted && !this.isMuted();
                            this.lastKnownIsMuted = this.isMuted(), e ? this.handleMute() : t && this.handleUnmute()
                        }))
                    }
                },
                Y = {
                    a: 0,
                    c: 1,
                    p: 50
                };
            var Q = class {
                constructor(e, t) {
                    o()(this, "beacons", []), o()(this, "lastMetReqTime", 0), o()(this, "totalTimeMeetingReqs", 0), this.ruleKey = e, this.reqAudioOn = !!t.a, this.reqContinuous = !!t.c, this.reqDuration = t.d, this.reqPercentInView = t.p || 0, this.isDurationCheckpoint = t.isDurationCheckpoint
                }
                reset() {
                    this.totalTimeMeetingReqs = 0
                }
                setBeacons(e) {
                    this.beacons = e
                }
                fireBeacons() {
                    this.hasFiredBeacons || (this.beacons.forEach((e => e())), this.isDurationCheckpoint || (this.hasFiredBeacons = !0))
                }
                checkRule(e) {
                    if (!this.audioCheck(e) || !this.inViewCheck(e)) return this.reqContinuous && (this.lastMetReqTime = null), !1;
                    var t = e.getTimePosition();
                    null === this.lastMetReqTime ? this.totalTimeMeetingReqs = 0 : this.totalTimeMeetingReqs += t - this.lastMetReqTime;
                    var a = this.durationCheck(t);
                    return this.lastMetReqTime = t, a
                }
                audioCheck(e) {
                    return !(this.reqAudioOn && e.isMuted())
                }
                inViewCheck(e) {
                    return !(this.reqPercentInView > 0 && !e.isInView())
                }
                durationCheck(e) {
                    if (!this.reqDuration) return !0;
                    if (this.reqContinuous) return this.totalTimeMeetingReqs >= this.reqDuration;
                    var t = e === this.reqDuration,
                        a = this.lastMetReqTime === this.reqDuration,
                        i = t && !a,
                        n = e > this.reqDuration,
                        s = Number(this.lastMetReqTime) < this.reqDuration,
                        o = e - Number(this.lastMetReqTime) < 1;
                    return i || n && s && o
                }
            };
            var K = class {
                    constructor(e, t) {
                        if (o()(this, "setRulesFromDuration", (e => {
                                this.rules = [...Object.keys(F).map((e => {
                                    var t = new Q(e, n()(n()({}, Y), {}, {
                                        d: F[e]
                                    }));
                                    return t.beacons = [() => this.beaconDefinition(e)], t
                                })), ...Object.keys(H).map((t => {
                                    var a = new Q(t, {
                                        d: H[t] * e,
                                        isDurationCheckpoint: !0
                                    });
                                    return a.beacons = [() => this.beaconDefinition(t)], a
                                }))]
                            })), !e) throw new Error("RuleEngine cannot be instantiated without beaconDefinition! Check the placement id of the viewability tracker.");
                        this.beaconDefinition = e, this.setRulesFromDuration(t)
                    }
                    updateMaxDuration(e) {
                        this.setRulesFromDuration(e)
                    }
                    checkRules(e) {
                        this.rules.forEach((t => t.checkRule(e) && t.fireBeacons()))
                    }
                    resetContinuousRules() {
                        this.resetRules((e => !!e.reqContinuous))
                    }
                    resetAudioOnContinuousRules() {
                        this.resetRules((e => !!e.reqContinuous && e.reqAudioOn))
                    }
                    resetRules(e) {
                        this.rules.forEach((t => e(t) && t.reset()))
                    }
                },
                Z = a("o56e");
            class $ extends r.Component {
                constructor() {
                    super(...arguments), o()(this, "lastEventTime", 0), o()(this, "totalPlayTime", 0), o()(this, "totalUniquePlayedSeconds", new Set), o()(this, "provideEventDetails", G.a), o()(this, "updateTotalPlayTime", (() => {
                        var e = this.videoContext.getTimePosition();
                        this.totalUniquePlayedSeconds.size < Math.ceil(this.videoContext.getMaxDuration()) && this.totalUniquePlayedSeconds.add(Math.floor(e));
                        var t = e - this.lastEventTime;
                        this.lastEventTime = e, t > 0 && t < 1 && (this.totalPlayTime += t)
                    })), o()(this, "sendAnalyticsEvent", ((e, t) => {
                        var a = this.props,
                            i = a.videoRef,
                            s = a.timelineObject;
                        if (i) {
                            var o = i.currentTime,
                                r = i.duration;
                            this.props.appContext.logEvent({
                                eventName: e,
                                eventDetails: n()(n()({}, this.provideEventDetails(s, !0)), {}, {
                                    is_ad: !0,
                                    placement_id: s.placementId,
                                    video: {
                                        current_position: o,
                                        total_length: r,
                                        timestamp: Date.now(),
                                        total_play_length: this.totalPlayTime,
                                        total_unique_play_length: this.totalUniquePlayedSeconds.size
                                    }
                                })
                            }, {
                                sendPayloadImmediately: t
                            })
                        }
                    })), o()(this, "getBeaconDefinitions", (() => {
                        if (this.props.timelineObject.placementId && "" !== this.props.timelineObject.placementId) return this.sendAnalyticsEvent
                    })), o()(this, "sendUnloadEvent", (() => {
                        var e, t;
                        !this.props.videoRef || null !== (e = this.props.videoRef) && void 0 !== e && e.paused || (null === (t = this.getBeaconDefinitions()) || void 0 === t || t(P.Autopause, !0))
                    })), o()(this, "updateRulesEngineDuration", (() => {
                        this.props.videoRef && this.rulesEngine.updateMaxDuration(this.props.videoRef.duration)
                    }))
                }
                componentDidUpdate(e) {
                    !e.videoRef && this.props.videoRef && this.setVideoContextAndRulesEngine(this.props.videoRef)
                }
                componentDidMount() {
                    this.props.videoRef && this.setVideoContextAndRulesEngine(this.props.videoRef)
                }
                componentWillUnmount() {
                    var e;
                    null === (e = this.props.videoRef) || void 0 === e || e.removeEventListener("loadedmetadata", this.updateRulesEngineDuration), window.removeEventListener("beforeunload", this.sendUnloadEvent)
                }
                render() {
                    return null
                }
                stateChanged(e) {
                    var t;
                    switch (e) {
                        case P.Mute:
                        case P.Unmute:
                        case P.Loop:
                        case P.Scrub:
                        case P.Fullscreen:
                            this.fireBeacon(e);
                            break;
                        case P.Play:
                        case P.Autoplay:
                            this.hasStarted || (this.hasStarted = !0, this.fireBeacon(x.Start)), this.fireBeacon(e);
                            break;
                        case P.Pause:
                        case P.Autopause:
                            this.rulesEngine.resetContinuousRules(), this.fireBeacon(e);
                            break;
                        case D.Reset:
                            this.rulesEngine.resetRules((() => !0));
                            break;
                        case D.PositionChange:
                            null !== (t = this.props.videoRef) && void 0 !== t && t.paused || this.updateTotalPlayTime(), this.rulesEngine.checkRules(this.videoContext);
                            break;
                        default:
                            this.rulesEngine.checkRules(this.videoContext)
                    }
                }
                fireBeacon(e) {
                    var t;
                    null === (t = this.getBeaconDefinitions()) || void 0 === t || t(e)
                }
                setVideoContextAndRulesEngine(e) {
                    var t = this.props,
                        a = t.isInView,
                        i = t.videoContextOptions;
                    this.videoContext = new X(e, (e => this.stateChanged(e)), a, i);
                    var n = this.getBeaconDefinitions();
                    if (!n) throw new TypeError("Placement ID must be available");
                    this.rulesEngine = new K(n, e.duration), e.addEventListener("loadedmetadata", this.updateRulesEngineDuration), window.addEventListener("beforeunload", this.sendUnloadEvent)
                }
            }
            var ee = Object(Z.b)($, {
                    appContext: !0,
                    adContext: !0
                }),
                te = Object(g.c)(l.a.createElement("svg", {
                    viewBox: "2 2 20 22"
                }, l.a.createElement("path", {
                    fillRule: "evenodd",
                    d: "M5 12c0-.289 1.609-.24 1.609 0a5.39 5.39 0 105.39-5.39c-3.041 0-3.638 1.811-3.404 1.588l1.732 1.535-4.556.504L5.734 5.8l1.373 1.205A6.965 6.965 0 0112 5a7 7 0 11-7 7z"
                })));
            te.defaultProps = {
                size: {
                    width: 40,
                    height: 40
                },
                fill: p.white
            };
            var ae = te,
                ie = a("MzjC"),
                ne = a("Dcbp"),
                se = a.n(ne);
            var oe = a("InIc");
            class re extends r.Component {
                constructor() {
                    super(...arguments), o()(this, "state", {
                        playing: !1,
                        autoplay: !1,
                        isMuted: !0,
                        showControls: !0,
                        time: "",
                        isHd: !1,
                        isHdAvailable: !1,
                        seekHover: !1,
                        handleHoverPosition: 0,
                        handlePosition: "0%",
                        showHdIcon: !1,
                        loading: !1,
                        showPoof: !1,
                        isInitialOverlay: !0,
                        buffered: 0,
                        frameTime: "",
                        thumbnailCount: 10,
                        filmstripOffset: 0,
                        hasPausedSource: null,
                        isSeeking: !1,
                        isFullScreen: !1,
                        videoEl: null,
                        isVideoIntersecting: !1,
                        hasClickedVideoOrMuteControl: !1,
                        showMuteControlOnly: !0
                    }), o()(this, "fscreen", h.a), o()(this, "getVideoElementProps", (e => {
                        var t = this.props,
                            a = t.media,
                            i = t.poster,
                            s = t.isVideoSponsoredDay,
                            o = t.appContext._t,
                            r = t.minHeight,
                            l = void 0 === r ? 250 : r,
                            c = t.videoElementProps,
                            d = void 0 === c ? {} : c,
                            h = this.state,
                            u = h.playing,
                            m = h.autoplay,
                            p = h.isMuted,
                            v = h.isFullScreen;
                        return n()(n()({
                            muted: p,
                            autoPlay: m,
                            style: {
                                minHeight: a.height ? Math.min(a.height, l) : l
                            },
                            role: "button",
                            crossOrigin: "anonymous",
                            playsInline: !0,
                            ref: this.setVideoEl,
                            onEnded: this.onEnded,
                            onTouchEnd: this.onTouchEnd,
                            poster: i && new ie.a(i).getOriginalSourceClosestToWidth(Math.min(e, se.a.postWidth)).url
                        }, this.shouldShowCustomControls() ? {
                            role: "button",
                            "aria-label": o(u ? "Pause" : "Play"),
                            onClick: this.onVideoClick,
                            onLoadedData: this.getVideoDurationInMinSec,
                            onWaiting: this.onVideoWaiting,
                            onCanPlayThrough: this.hideLoading,
                            onPlaying: this.hideLoading,
                            onSeeking: this.hideLoading,
                            onSeeked: this.hideLoading,
                            onVolumeChange: v ? this.onVolumeChangeFullScreen : void 0,
                            onTimeUpdate: this.onTimeUpdateVideo,
                            onProgress: this.onProgressVideo
                        } : {
                            controls: !s,
                            controlsList: "nodownload"
                        }), d)
                    })), o()(this, "renderVideoControls", (() => {
                        var e = this.props,
                            t = e.filmstrip,
                            a = e.soundDisabled,
                            i = e.isVideoSponsoredDay,
                            n = e.appContext._t,
                            s = this.state,
                            o = s.isHd,
                            r = s.time,
                            d = s.playing,
                            h = s.isMuted,
                            u = s.isInitialOverlay,
                            m = s.isHdAvailable,
                            p = s.isFullScreen,
                            g = s.handlePosition,
                            b = s.handleHoverPosition,
                            f = s.buffered,
                            E = s.seekHover,
                            k = s.frameTime,
                            y = s.isVideoFinished,
                            C = s.videoEl,
                            w = s.showMuteControlOnly;
                        return l.a.createElement(l.a.Fragment, null, l.a.createElement(B, {
                            onClickFullScreen: this.onClickFullScreen,
                            onClickPlay: this.onClickPlay,
                            onClickPause: this.onClickPause,
                            onClickVolume: this.onClickVolume,
                            onClickHd: this.onClickHd,
                            isFullScreen: p,
                            isHdAvailable: m,
                            isHd: o,
                            isMuted: h,
                            isPlaying: d,
                            time: r,
                            isInitialOverlay: u,
                            handlePosition: g,
                            handleHoverPosition: b,
                            buffered: f,
                            seekHover: E,
                            frameTime: k,
                            onMouseMoveSeekbarWrapper: this.onMouseMoveSeekbarWrapper,
                            onMouseLeaveSeekbarWrapper: this.onMouseLeaveSeekbarWrapper,
                            onMouseDownSeekbarWrapper: this.onMouseDownSeekbarWrapper,
                            onMouseUpSeekbarWrapper: this.onMouseUpSeekbarWrapper,
                            onClickSeekHandleHover: this.onClickSeekHandleHover,
                            filmstrip: t,
                            onSeekBarRef: this.setSeekBarRef,
                            thumbnailStyles: this.getThumbnailStyles(),
                            useLimitedControls: i || void 0,
                            soundDisabled: a,
                            showMuteControlOnly: w
                        }), i && l.a.createElement(c.f, { in: y && (null == C ? void 0 : C.duration) === (null == C ? void 0 : C.currentTime),
                            timeout: 200,
                            mountOnEnter: !0,
                            unmountOnExit: !0
                        }, (e => l.a.createElement("div", {
                            className: Object(z.a)({
                                [oe.a.replayOverlay]: !0,
                                [oe.a.replayOut]: [c.b, c.d, c.c].includes(e)
                            }),
                            style: {
                                transition: "opacity ".concat(200, "ms")
                            }
                        }, l.a.createElement(V.a, {
                            label: n("Replay video"),
                            wrapperClassName: oe.a.replayButton,
                            onClick: this.onReplayVideoClick
                        }, l.a.createElement(ae, {
                            size: {
                                height: 65,
                                width: 65
                            },
                            fill: v.a.white
                        }))))))
                    })), o()(this, "shouldShowCustomControls", (() => this.props.isVideoSponsoredDay || !matchMedia("(hover: none)").matches)), o()(this, "setVideoEl", (e => this.setState({
                        videoEl: e
                    }))), o()(this, "setSeekBarRef", (e => this.seekBar = e)), o()(this, "playVideo", (() => {
                        var e;
                        return null === (e = this.state.videoEl) || void 0 === e ? void 0 : e.play().catch((() => this.setState({
                            playing: !1
                        })))
                    })), o()(this, "pauseVideo", (() => {
                        var e;
                        return null === (e = this.state.videoEl) || void 0 === e ? void 0 : e.pause()
                    })), o()(this, "onClickPause", (() => this.onUXTriggerPause(u.a.User, !1))), o()(this, "onClickPlay", (() => this.onUXTriggerPlay(!1))), o()(this, "onUXTriggerPause", ((e, t) => this.setState({
                        hasPausedSource: e,
                        autoplay: t,
                        playing: !1
                    }))), o()(this, "onUXTriggerPlay", (e => this.setState({
                        autoplay: e,
                        playing: !0,
                        hasPausedSource: null
                    }))), o()(this, "onClickVolume", (e => {
                        e.preventDefault(), e.stopPropagation(), this.setState((e => {
                            var t = e.isMuted,
                                a = e.videoEl;
                            return t && a && !a.volume && (a.volume = 1), {
                                isMuted: !t,
                                hasClickedVideoOrMuteControl: !0
                            }
                        }))
                    })), o()(this, "onVolumeChangeFullScreen", (e => this.setState({
                        isMuted: e.currentTarget.muted || !e.currentTarget.volume
                    }))), o()(this, "onMouseEnterVideo", (() => this.setState({
                        showControls: !0,
                        showMuteControlOnly: !1
                    }))), o()(this, "onMouseLeaveVideo", (() => this.setState((e => ({
                        showControls: !e.hasClickedVideoOrMuteControl,
                        showMuteControlOnly: !e.hasClickedVideoOrMuteControl
                    }))))), o()(this, "onAnimationEndPoof", (() => this.setState({
                        showPoof: !1
                    }))), o()(this, "onEnded", (() => {
                        this.setState({
                            isVideoFinished: !0
                        }), this.props.disableAutolooping || this.resetVideoPosition(!0)
                    })), o()(this, "onTouchEnd", (() => this.setState({
                        autoplay: !1
                    }))), o()(this, "onClickHd", (() => this.setState((e => ({
                        isHd: !e.isHd
                    }))))), o()(this, "onVideoClick", (() => !this.props.isVideoSponsoredDay && this.setState((e => ({
                        playing: !e.playing,
                        autoplay: !1,
                        showPoof: !0,
                        isInitialOverlay: !1,
                        hasPausedSource: e.playing ? u.a.User : null,
                        hasClickedVideoOrMuteControl: !0
                    }))))), o()(this, "onVideoWaiting", (() => this.setState({
                        loading: !0
                    }))), o()(this, "hideLoading", (() => this.setState({
                        loading: !1
                    }))), o()(this, "getVideoDurationInMinSec", (() => this.state.videoEl && this.setState({
                        time: this.formatVideoTime(this.state.videoEl.duration)
                    }))), o()(this, "formatVideoTime", (e => {
                        var t = Math.floor(e / 60),
                            a = Math.floor(e % 60);
                        return "".concat(t, ":").concat(a < 10 ? "0".concat(a) : a)
                    })), o()(this, "isVideoInView", (() => this.state.isVideoIntersecting)), o()(this, "setPlaybackPosition", (e => {
                        var t = this.state.videoEl,
                            a = ((null == t ? void 0 : t.duration) || 0) * e;
                        this.setState((e => ({
                            handlePosition: "".concat(e.handleHoverPosition, "px")
                        }))), t && (t.currentTime = a)
                    })), o()(this, "onMouseMoveSeekbarWrapper", (e => {
                        this.setState({
                            seekHover: !0
                        });
                        var t = this.state,
                            a = t.isSeeking,
                            i = t.videoEl,
                            n = t.thumbnailCount,
                            s = e.currentTarget.firstElementChild.getBoundingClientRect().width,
                            o = Math.abs(Math.round(e.clientX - e.currentTarget.firstElementChild.getBoundingClientRect().left));
                        if (!(o < 0 || o > s)) {
                            var r = o / s,
                                l = 100 * r,
                                c = Math.floor(r * ((null == i ? void 0 : i.duration) || 0)),
                                d = 100 / (n - 1),
                                h = Math.floor(l / n) * d;
                            this.setState({
                                handleHoverPosition: o,
                                filmstripOffset: h
                            }), this.updateFrameTime(c), a && this.setPlaybackPosition(r)
                        }
                    })), o()(this, "updateFrameTime", (e => this.setState({
                        frameTime: this.formatVideoTime(e)
                    }))), o()(this, "onMouseDownSeekbarWrapper", (() => this.setState({
                        isSeeking: !0
                    }))), o()(this, "onMouseUpSeekbarWrapper", (() => this.setState({
                        isSeeking: !1
                    }))), o()(this, "onMouseLeaveSeekbarWrapper", (() => this.setState({
                        seekHover: !1,
                        isSeeking: !1
                    }))), o()(this, "onClickSeekHandleHover", (e => {
                        var t = (e.clientX - e.currentTarget.parentElement.getBoundingClientRect().left) / this.seekBar.getBoundingClientRect().width;
                        this.setPlaybackPosition(t)
                    })), o()(this, "getThumbnailStyles", (() => {
                        var e = this.props.filmstrip,
                            t = this.state,
                            a = t.thumbnailCount,
                            i = t.filmstripOffset;
                        if (!e) return {};
                        var n = e.height,
                            s = e.width,
                            o = e.url,
                            r = .35 * s / a,
                            l = .35 * n;
                        return {
                            top: -(l + 10),
                            left: -r / 2 + 5,
                            width: "".concat(r, "px"),
                            height: "".concat(l, "px"),
                            backgroundImage: "url(".concat(o, ")"),
                            backgroundSize: "".concat(r * a, "px ").concat(l, "px"),
                            backgroundPosition: "".concat(i, "% 0%")
                        }
                    })), o()(this, "onTimeUpdateVideo", (() => {
                        var e = this.state,
                            t = e.showControls,
                            a = e.videoEl;
                        if (t && a) {
                            var i = a.duration,
                                n = a.currentTime,
                                s = n / i * 100;
                            this.setState({
                                handlePosition: "".concat(s, "%"),
                                time: this.formatVideoTime(i - n)
                            })
                        }
                    })), o()(this, "onProgressVideo", (() => {
                        var e = this.state.videoEl;
                        if (e) {
                            var t = e.duration,
                                a = e.buffered,
                                i = e.currentTime;
                            if (t > 0)
                                for (var n = 0; n < a.length; n += 1)
                                    if (a.start(a.length - 1 - n) <= i) {
                                        var s = a.end(a.length - 1 - n);
                                        this.setState({
                                            buffered: s / t * 100
                                        });
                                        break
                                    }
                        }
                    })), o()(this, "onClickFullScreen", (() => {
                        this.setViewportResizeRender(q.a.Disable), this.fscreen.requestFullscreen(this.state.videoEl), this.setState({
                            isFullScreen: !0
                        }, (() => {
                            this.fscreen.addEventListener("fullscreenchange", this.onFullScreenExit)
                        }))
                    })), o()(this, "onFullScreenExit", (() => {
                        this.fscreen.fullscreenElement || this.setState({
                            isFullScreen: !1
                        }, (() => {
                            this.setViewportResizeRender(q.a.Enable), this.fscreen.removeEventListener("fullscreenchange", this.onFullScreenExit)
                        }))
                    })), o()(this, "onReplayVideoClick", (e => {
                        null == e || e.stopPropagation(), null == e || e.preventDefault(), this.resetVideoPosition(!1)
                    })), o()(this, "resetVideoPosition", (e => this.setState({
                        autoplay: e,
                        handlePosition: "0%",
                        isVideoFinished: !1,
                        playing: !0
                    }, (() => {
                        this.state.videoEl && (this.state.videoEl.currentTime = 0, this.playVideo())
                    })))), o()(this, "getMediaType", (() => {
                        var e = this.props.media;
                        return e.type === u.b.Mov ? void 0 : e.type
                    })), o()(this, "onIntersectionObserverChange", (e => {
                        var t = e.isIntersecting;
                        return this.setState((e => {
                            var a = e.playing,
                                i = e.isMuted,
                                n = e.hasPausedSource,
                                s = e.isVideoFinished,
                                o = e.autoplay,
                                r = this.props.showsDockMediaButton && a && !i ? a : t && !n && !s;
                            return {
                                playing: r,
                                autoplay: a !== r || o,
                                isInitialOverlay: !1,
                                isVideoIntersecting: t
                            }
                        }))
                    })), o()(this, "onVisibilityChange", (() => {
                        var e = this.state,
                            t = e.playing,
                            a = e.hasPausedSource;
                        "visible" === document.visibilityState ? t || a !== u.a.DocumentVisibility || this.onUXTriggerPlay(!0) : t && this.onUXTriggerPause(u.a.DocumentVisibility, !0)
                    }))
                }
                componentDidMount() {
                    window.addEventListener("visibilitychange", this.onVisibilityChange), this.numGlassContextOnMount = this.props.numGlassOpenContext.numGlassOpen
                }
                componentWillUnmount() {
                    window.removeEventListener("visibilitychange", this.onVisibilityChange)
                }
                componentDidUpdate(e, t) {
                    var a = this.state,
                        i = a.playing,
                        n = a.isMuted,
                        s = a.hasPausedSource,
                        o = this.props,
                        r = o.isDocked,
                        l = o.numGlassOpenContext.numGlassOpen;
                    "setComponentToAutoDock" in this.context && this.context.setComponentToAutoDock(!n && i), i && this.numGlassContextOnMount < l ? this.onUXTriggerPause(u.a.Glass, !0) : !i && s === u.a.Glass && this.numGlassContextOnMount >= l && this.onUXTriggerPlay(!0), !!t.playing != !!i && (i ? this.playVideo() : this.pauseVideo()), e.isDocked && !r && this.onClickPause()
                }
                render() {
                    var e = this.props,
                        t = e.media,
                        a = e.isDocked,
                        i = e.hasNoMaxUndockedHeight,
                        n = e.isVideoSponsoredDay,
                        s = e.playerStyle,
                        o = e.timelineObject,
                        r = e.useViewabilityTracker,
                        c = e.appContext._t,
                        d = this.state,
                        h = d.playing,
                        u = d.showPoof,
                        m = d.loading,
                        p = d.isInitialOverlay,
                        v = d.showControls,
                        g = d.videoEl;
                    return l.a.createElement(q.c, null, (e => {
                        var d = e.width,
                            b = e.setViewportResizeRender,
                            f = Object(z.a)({
                                [oe.a.videoPlayer]: !0,
                                [oe.a.hasNoMaxUndockedHeight]: i,
                                [oe.a.isDocked]: a
                            });
                        return this.setViewportResizeRender = b, l.a.createElement(U.a, {
                            onChange: this.onIntersectionObserverChange,
                            threshold: .5
                        }, l.a.createElement("div", {
                            className: f,
                            role: "application",
                            "aria-label": c("Video Player"),
                            style: s
                        }, l.a.createElement("div", {
                            onMouseEnter: this.onMouseEnterVideo,
                            onMouseLeave: this.onMouseLeaveVideo
                        }, l.a.createElement("video", this.getVideoElementProps(d), l.a.createElement("source", {
                            src: t.url,
                            type: this.getMediaType()
                        })), this.shouldShowCustomControls() && l.a.createElement(l.a.Fragment, null, l.a.createElement(A, {
                            isPlaying: h,
                            showPoof: u,
                            isLoading: m,
                            isInitialOverlay: p,
                            onAnimationEndPoof: this.onAnimationEndPoof
                        }), (n || v) && this.renderVideoControls())), r && o && l.a.createElement(ee, {
                            videoRef: g,
                            isInView: this.isVideoInView,
                            timelineObject: o,
                            videoContextOptions: {
                                doesVideoLoop: !this.props.disableAutolooping,
                                trackPauseAsAutoStop: n
                            }
                        })))
                    }))
                }
            }
            o()(re, "contextType", W.a);
            t.a = Object(Z.b)(re, {
                appContext: !0,
                numGlassOpenContext: !0
            })
        },
        wtI5: function(e, t, a) {
            "use strict";
            var i = a("q1tI"),
                n = a.n(i),
                s = a("afeb"),
                o = a("OPDf"),
                r = a("I1NK"),
                l = n.a.createElement("div", {
                    className: r.a.arrow
                }, n.a.createElement(s.a, {
                    size: {
                        width: 15,
                        height: 15
                    }
                })),
                c = n.a.createElement("div", {
                    className: r.a.line
                });
            t.a = () => n.a.createElement("div", {
                className: r.a.container
            }, c, l, n.a.createElement("div", null, n.a.createElement(o.d, {
                comment: "The text for the 'teaser line' that separates the free content from the membership-only content"
            }, "Teaser")), l, c)
        },
        "x+FT": function(e, t, a) {
            "use strict";
            var i = a("q1tI"),
                n = a.n(i),
                s = a("s2Hx"),
                o = a("fSeh"),
                r = Object(s.c)(n.a.createElement("svg", {
                    viewBox: "0 0 24 24"
                }, n.a.createElement("rect", {
                    width: "4",
                    height: "16",
                    x: "15",
                    y: "4",
                    rx: "1"
                }), n.a.createElement("rect", {
                    width: "4",
                    height: "16",
                    x: "5",
                    y: "4",
                    rx: "1"
                })));
            r.defaultProps = {
                size: {
                    width: 24,
                    height: 24
                },
                fill: o.white
            }, t.a = r
        },
        yvvX: function(e, t, a) {
            "use strict";
            a.d(t, "a", (function() {
                return i
            }));
            var i = e => e.resources[0]
        }
    }
]);