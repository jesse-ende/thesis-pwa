(window.webpackJsonp = window.webpackJsonp || []).push([
    [140], {
        u2Vg: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "default", (function() {
                return m
            })), n.d(e, "__DANGEROUS_IMPORT_VIDEOPLAYER__", (function() {
                return P
            }));
            var o = n("97Jx"),
                a = n.n(o),
                i = (n("kYxP"), n("ERkP")),
                r = n("v6aA"),
                c = n("rxPX");
            const s = () => (t, e, {
                api: n
            }) => n.getHttpClient();
            var u = Object(c.a)().propsFromActions((() => ({
                    getTwitterAuthedHttpClient: s
                }))).withAnalytics(),
                l = n("gOg7");
            var p = n("epkG"),
                d = n("88qn"),
                y = n("mf9H"),
                f = n("MWbm"),
                b = n("Zl35"),
                g = n("rHpw");

            function m(t) {
                const {
                    featureSwitches: e
                } = i.useContext(r.a), {
                    media: n,
                    requestedTimecode: o,
                    onEnded: c,
                    onPlayerApi: s,
                    onPlayerState: u
                } = t, [p, g] = i.useState(null), m = i.useRef({
                    playbackCoordinationEmitter: null,
                    previousPlayerState: null
                });
                if (i.useEffect((() => {
                        null === p && n && Object(d.a)({
                            showControls: !1,
                            source: {}
                        }, e).then((t => g((() => t))))
                    }), [p, n, e]), i.useEffect((() => function() {
                        const {
                            playbackCoordinationEmitter: t
                        } = m.current;
                        t && t.unregister()
                    }), []), null === p || !n) return null;
                const P = function(t, e) {
                        const n = {
                                scribeContext: { ...t.analytics.contextualScribeNamespace
                                },
                                enableShortFormCompleteLogging: e.isTrue("responsive_web_video_pcomplete_enabled")
                            },
                            o = {
                                log: e => {
                                    const {
                                        category: n,
                                        data: o,
                                        namespace: a
                                    } = e;
                                    null != a && a.action && t.analytics.scribe({ ...a,
                                        data: { ...o,
                                            _category_: n
                                        }
                                    })
                                }
                            };
                        return new l.a(o, {
                            log: () => {}
                        }, t.getTwitterAuthedHttpClient(), n)
                    }(t, e),
                    k = {
                        contentId: n.id_str,
                        loop: !1,
                        contentType: "media_entity",
                        durationMs: n.video_info.duration_millis,
                        variants: n.video_info.variants.map((({
                            bitrate: t,
                            content_type: e,
                            url: n
                        }) => ({
                            type: e,
                            src: n
                        })))
                    };
                return i.createElement(f.a, {
                    style: C.displayNone
                }, i.createElement(b.b, a()({
                    analytics: P,
                    basePlayerClass: p,
                    configType: "static",
                    httpClient: w,
                    key: k.contentId,
                    onApiReady: function(t) {
                        "function" == typeof s && (s(t), "number" == typeof k.durationMs && "number" == typeof o && t.scrubToFraction(o / k.durationMs)), m.current.playbackCoordinationEmitter = function(t) {
                            const e = {
                                onAutoPlayRequest: () => {},
                                onPauseRequest: t,
                                canAutoplay: !1,
                                isLooping: !1
                            };
                            return y.c.register(e)
                        }((() => t.pause()))
                    },
                    onStateUpdate: function(t) {
                        "function" == typeof u && u(t),
                            function(t) {
                                const e = _(t);
                                t.isPlaying && e && e.durationMs === e.currentTimeMs && "function" == typeof c && (c(), m.current.playbackCoordinationEmitter && m.current.playbackCoordinationEmitter.signalPlaybackFinish())
                            }(t),
                            function(t) {
                                const {
                                    playbackCoordinationEmitter: e,
                                    previousPlayerState: n
                                } = m.current, o = null === n, a = null == n ? void 0 : n.isPlaying, i = t.isPlaying, r = !o && a && !i;
                                !o && a || !i ? r && e && e.signalPause() : e && e.signalPlay()
                            }(t), m.current.previousPlayerState = t
                    },
                    twitterAuthedHttpClient: t.getTwitterAuthedHttpClient()
                }, k)))
            }
            const P = u(m),
                _ = t => t && t.tracks[t.currentTrackId],
                w = new p.a({}),
                C = g.a.create((t => ({
                    displayNone: {
                        display: "none"
                    }
                })))
        }
    }
]);
//# sourceMappingURL=https://ton.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.AudioOnlyVideoPlayer.11218a65.js.map