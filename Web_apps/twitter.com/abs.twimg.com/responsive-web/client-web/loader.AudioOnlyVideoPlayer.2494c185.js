(window.webpackJsonp = window.webpackJsonp || []).push([
    [142], {
        u2Vg: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "default", (function() {
                return C
            })), n.d(e, "__DANGEROUS_IMPORT_VIDEOPLAYER__", (function() {
                return _
            }));
            n("kYxP");
            var o = n("ERkP"),
                a = n("v6aA"),
                i = n("rxPX");
            const r = () => (t, e, {
                api: n
            }) => n.getHttpClient();
            var c = Object(i.a)().propsFromActions((() => ({
                    getTwitterAuthedHttpClient: r
                }))).withAnalytics(),
                l = n("Pc/x"),
                s = n("Xq8B");
            var u = n("epkG"),
                p = n("88qn"),
                d = n("fs1G"),
                y = n("mf9H"),
                f = n("lklz"),
                b = n("MWbm"),
                m = n("Zl35"),
                g = n("rHpw");

            function C(t) {
                const {
                    featureSwitches: e
                } = o.useContext(a.a), {
                    broadcastId: n,
                    mediaKey: i,
                    media: r,
                    requestedTimecode: c,
                    onEnded: u,
                    onPlayerApi: b,
                    onPlayerState: m
                } = t, [g, C] = o.useState(null), _ = o.useRef({
                    playbackCoordinationEmitter: null,
                    previousPlayerState: null
                }), w = r || n && i;
                if (o.useEffect((() => {
                        null === g && w && Object(p.a)({
                            showControls: !1,
                            source: {}
                        }, e).then((t => C((() => t))))
                    }), [g, w, e]), o.useEffect((() => function() {
                        const {
                            playbackCoordinationEmitter: t
                        } = _.current;
                        t && t.unregister()
                    }), []), null === g || !w) return null;
                const E = {
                    analytics: function(t, e) {
                        const n = {
                                scribeContext: { ...t.analytics.contextualScribeNamespace
                                },
                                enableShortFormCompleteLogging: e.isTrue("responsive_web_video_pcomplete_enabled"),
                                periscopeAuthToken: l.a.proxsee.authToken()
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
                        return new s.a(o, {
                            log: () => {}
                        }, t.getTwitterAuthedHttpClient(), n)
                    }(t, e),
                    basePlayerClass: g,
                    httpClient: v,
                    onApiReady: function(e) {
                        var n;
                        e.play(), "function" == typeof b && b(e);
                        const o = null == r || null == (n = r.video_info) ? void 0 : n.duration_millis;
                        "number" == typeof o && "number" == typeof c && e.scrubToFraction(c / o);
                        const a = t.disablePlaybackCoordination ? d.a : () => e.pause();
                        _.current.playbackCoordinationEmitter = function(t) {
                            const e = {
                                onAutoPlayRequest: () => {},
                                onPauseRequest: t,
                                canAutoplay: !1,
                                isLooping: !1
                            };
                            return y.c.register(e)
                        }(a)
                    },
                    onStateUpdate: function(t, e) {
                        "function" == typeof m && m(t, e),
                            function(t) {
                                const e = k(t);
                                t.isPlaying && e && e.durationMs === e.currentTimeMs && "function" == typeof u && (u(), _.current.playbackCoordinationEmitter && _.current.playbackCoordinationEmitter.signalPlaybackFinish())
                            }(t),
                            function(t) {
                                const {
                                    playbackCoordinationEmitter: e,
                                    previousPlayerState: n
                                } = _.current, o = null === n, a = null == n ? void 0 : n.isPlaying, i = t.isPlaying, r = !o && a && !i;
                                !o && a || !i ? r && e && e.signalPause() : e && e.signalPlay()
                            }(t), _.current.previousPlayerState = t
                    },
                    twitterAuthedHttpClient: t.getTwitterAuthedHttpClient()
                };
                if (n && i) {
                    const t = { ...E,
                        configType: "static",
                        contentId: i,
                        contentType: "broadcast",
                        variants: [],
                        videoId: f.b.forAudioSpace(n, i)
                    };
                    return o.createElement(P, {
                        key: n,
                        playerConfig: t
                    })
                }
                if (r) {
                    const t = { ...E,
                        configType: "static",
                        contentId: r.id_str,
                        loop: !1,
                        contentType: "media_entity",
                        durationMs: r.video_info.duration_millis,
                        variants: r.video_info.variants.map((({
                            bitrate: t,
                            content_type: e,
                            url: n
                        }) => ({
                            type: e,
                            src: n
                        })))
                    };
                    return o.createElement(P, {
                        key: r.id_str,
                        playerConfig: t
                    })
                }
                return null
            }

            function P({
                playerConfig: t
            }) {
                return o.createElement(b.a, {
                    style: w.displayNone
                }, o.createElement(m.b, t))
            }
            const _ = c(C),
                k = t => t && t.tracks[t.currentTrackId],
                v = new u.a({}),
                w = g.a.create((t => ({
                    displayNone: {
                        display: "none"
                    }
                })))
        }
    }
]);
//# sourceMappingURL=https://ton.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.AudioOnlyVideoPlayer.2494c185.js.map