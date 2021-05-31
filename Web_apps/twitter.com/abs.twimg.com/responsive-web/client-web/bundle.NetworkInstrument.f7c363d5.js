(window.webpackJsonp = window.webpackJsonp || []).push([
    [55], {
        ujfh: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "default", (function() {
                return d
            }));
            var r = n("KEM+"),
                i = n.n(r),
                s = (n("Cm4o"), n("kYxP"), n("pXBW")),
                o = n("k49u"),
                a = n("ZjLa"),
                _ = n("Myq3"),
                u = n("EhiH"),
                c = n("/NU0");
            const m = [o.a.BadOauthToken, o.a.OauthTimestampException, o.a.BadAuthenticationData, o.a.AccessDeniedByBouncer];
            class d {
                constructor(e, t) {
                    if (i()(this, "scribeRequest", (e => {
                            let {
                                response: t
                            } = e;
                            const {
                                error: n,
                                ...r
                            } = e, i = new window.URL(r.url);
                            if ((n || !t) && (t = {
                                    headers: {},
                                    body: "",
                                    status: n ? n.status : 500
                                }, !(n instanceof s.a))) return;
                            if (this._shouldFilter(i)) return;
                            this._flushResourceTimingBuffer();
                            const o = Object(_.a)(this._buffer, (e => {
                                const {
                                    request: t
                                } = e;
                                return i.protocol === t.uri_scheme && i.hostname === t.uri_host_name && i.pathname === t.uri_path && (i.query || "") === t.uri_query
                            }));
                            if (o) {
                                const e = this._buffer.indexOf(o);
                                this._buffer[e] = this._updateEventWithRequestResponse(o, r, t, n)
                            } else {
                                const e = this._prepareEvent(r.url),
                                    i = e && this._updateEventWithRequestResponse(e, r, t, n);
                                i && this._buffer.push(i)
                            }
                            this._flushBuffer()
                        })), i()(this, "_shouldFilter", (e => e.pathname.indexOf("/1.1/jot") > -1)), i()(this, "_flushResourceTimingBuffer", (() => {
                            if (!this._resourceTimingApiSupported) return;
                            const e = window.performance.getEntriesByType("resource");
                            window.performance.clearResourceTimings(), e.forEach((e => {
                                if (e.name) {
                                    const t = this._prepareEvent(e.name);
                                    if (t) {
                                        const n = this._updateEventWithPrecisionTimings(t, e);
                                        this._buffer.push(n)
                                    }
                                }
                            }))
                        })), i()(this, "_updateNetworkInfo", (e => {
                            this._networkInfo = e
                        })), i()(this, "_getNetworkMeasurements", (() => ({
                            connection_type: this._networkInfo.type || "unknown",
                            speed_class: this._networkInfo.effectiveType,
                            download_mbps: this._networkInfo.downlink,
                            download_max_mbps: this._networkInfo.downlinkMax,
                            rtt_ms: this._networkInfo.rtt,
                            reduced_data_usage: this._networkInfo.saveData
                        }))), this._resourceTimingApiSupported = window.performance && window.performance.getEntriesByType && window.performance.getEntriesByType("resource") && window.performance.clearResourceTimings, this._scribe = e, this._options = {
                            apiErrorSampleSize: 0,
                            apiSampleSize: 0,
                            cdnSampleSize: 0,
                            navSampleSize: 0,
                            scribeWebNav: !1,
                            cdnHostList: [],
                            ...t
                        }, this._buffer = [], this._networkInfo = {}, a.a.getConnectionInfo().then((e => {
                            this._updateNetworkInfo(e), a.a.addEventListener("connectionChange", this._updateNetworkInfo)
                        })), this._resourceTimingApiSupported && (window.performance.onresourcetimingbufferfull = this._flushResourceTimingBuffer), this._options.scribeWebNav) {
                        const e = this._getNavigationClientNetworkRequestEvent();
                        e && this._buffer.push(e)
                    }
                }
                _record(e) {
                    this._sample(e) && this._scribe.log(void 0, e)
                }
                _possiblyRecordErrorToAllNamespace(e) {
                    if ("api:error" === e.event_type) {
                        const t = { ...e,
                            event_type: "api:all"
                        };
                        this._record(t)
                    }
                }
                _flushBuffer() {
                    this._buffer.splice(0, this._buffer.length).forEach((e => {
                        this._record(e), this._possiblyRecordErrorToAllNamespace(e)
                    }))
                }
                _sample(e) {
                    const {
                        event_type: t
                    } = e, n = this._options[{
                        "api:all": "apiSampleSize",
                        "api:error": "apiErrorSampleSize",
                        "cdn:all": "cdnSampleSize",
                        "web:nav": "navSampleSize"
                    }[t]] || 0;
                    return Math.random() < n
                }
                _getEventType(e, t) {
                    return this._options.cdnHostList.indexOf(e) > -1 ? "cdn:all" : e.indexOf("twitter.com") > -1 ? t >= 200 && t < 300 ? "api:all" : "api:error" : "none"
                }
                _createCommonHeader(e) {
                    return {
                        commonHeader: {
                            clientHeader: {
                                timestampMs: e.getTime(),
                                timezoneOffsetMin: -e.getTimezoneOffset()
                            }
                        }
                    }
                }
                _prepareEvent(e) {
                    const t = new window.URL(e);
                    if (this._shouldFilter(t)) return null;
                    const n = "api.twitter.com" === t.hostname;
                    return {
                        _category_: "client_network_request_event",
                        request: {
                            uri_scheme: t.protocol,
                            uri_host_name: t.hostname,
                            uri_path: t.pathname,
                            uri_query: t.query || "",
                            http_method: "GET",
                            http_status_code: n ? 0 : 200,
                            start_time_ms: Date.now(),
                            request_details: {
                                duration_ms: 0
                            }
                        },
                        common_header: this._createCommonHeader(new Date),
                        network_measurements: this._getNetworkMeasurements(),
                        event_type: this._getEventType(t.hostname, 200),
                        event_source: "rweb"
                    }
                }
                _extractApiErrorCode(e) {
                    const {
                        errors: t = []
                    } = e, n = t.map((({
                        code: e
                    }) => e)).filter((e => void 0 !== e)), r = Object(u.a)(n, (e => m.indexOf(e) > -1));
                    return r || (n.length > 0 ? n[0] : void 0)
                }
                _updateEventWithRequestResponse(e, t, n, r) {
                    const i = e.request.request_details;
                    return { ...e,
                        request: { ...e.request,
                            http_method: t.method,
                            http_status_code: n.status,
                            start_time_ms: t.startTimestamp,
                            trace_id: t.headers["x-b3-traceid"],
                            twitter_api_error_code: r && this._extractApiErrorCode(r) || void 0,
                            request_details: { ...i,
                                duration_ms: i.duration_ms || t.endTimestamp - t.startTimestamp,
                                request_body_size: i.request_body_size || ("string" == typeof t.data ? t.data.length : t.data ? JSON.stringify(t.data).length : void 0),
                                response_body_size: i.response_body_size || (n && n.body ? n.body.length : void 0)
                            }
                        },
                        event_type: this._getEventType(e.request.uri_host_name, n.status)
                    }
                }
                _getTiming(e, t) {
                    return Object(c.a)(e) && Object(c.a)(t) ? Math.round(t - e) : void 0
                }
                _getRequestDetails(e) {
                    const t = this._getTiming(e.startTime, e.responseEnd) || 0,
                        n = e.secureConnectionStart || e.connectEnd;
                    return {
                        duration_ms: t,
                        rx_bytes: e.transferSize,
                        dns_ms: this._getTiming(e.domainLookupStart, e.domainLookupEnd),
                        tcp_ms: this._getTiming(e.connectStart, n),
                        tls_ms: 0 === e.secureConnectionStart ? void 0 : this._getTiming(e.secureConnectionStart, e.connectEnd),
                        response_body_size: e.decodedBodySize
                    }
                }
                _updateEventWithPrecisionTimings(e, t) {
                    const n = this._getRequestDetails(t);
                    return { ...e,
                        request: { ...e.request,
                            request_details: { ...e.request.request_details,
                                ...n
                            }
                        }
                    }
                }
                _getPerformanceNavigationTimingClientNetworkRequestEvent(e) {
                    const t = new window.URL(e.name),
                        n = this._getRequestDetails(e);
                    return {
                        _category_: "client_network_request_event",
                        request: {
                            uri_scheme: t.protocol,
                            uri_host_name: t.hostname,
                            uri_path: t.pathname,
                            uri_query: t.query || "",
                            http_method: "GET",
                            http_status_code: 200,
                            start_time_ms: Date.now(),
                            request_details: n
                        },
                        common_header: this._createCommonHeader(new Date),
                        network_measurements: this._getNetworkMeasurements(),
                        event_type: "web:nav",
                        event_source: "rweb"
                    }
                }
                _getPerformanceTimingClientNetworkRequestEvent(e, t) {
                    const n = e.secureConnectionStart || e.connectEnd;
                    return {
                        _category_: "client_network_request_event",
                        request: {
                            uri_scheme: t.protocol,
                            uri_host_name: t.hostname,
                            uri_path: t.pathname,
                            uri_query: t.search || "",
                            http_method: "GET",
                            http_status_code: 200,
                            start_time_ms: Date.now(),
                            request_details: {
                                duration_ms: this._getTiming(e.navigationStart, e.responseEnd) || 0,
                                dns_ms: this._getTiming(e.domainLookupStart, e.domainLookupEnd),
                                tcp_ms: this._getTiming(e.connectStart, n),
                                tls_ms: 0 === e.secureConnectionStart ? void 0 : this._getTiming(e.secureConnectionStart, e.connectEnd)
                            }
                        },
                        common_header: this._createCommonHeader(new Date),
                        network_measurements: this._getNetworkMeasurements(),
                        event_type: "web:nav",
                        event_source: "rweb"
                    }
                }
                _getNavigationClientNetworkRequestEvent() {
                    if (window.performance && window.performance.getEntriesByType) {
                        const e = window.performance.getEntriesByType("navigation");
                        if (e && e.length) {
                            const t = e[0];
                            return this._getPerformanceNavigationTimingClientNetworkRequestEvent(t)
                        }
                    } else if (window.performance && window.performance.timing && window.location) {
                        const e = window.performance.timing,
                            t = window.location;
                        return this._getPerformanceTimingClientNetworkRequestEvent(e, t)
                    }
                }
            }
        }
    }
]);
//# sourceMappingURL=https://ton.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.NetworkInstrument.f7c363d5.js.map