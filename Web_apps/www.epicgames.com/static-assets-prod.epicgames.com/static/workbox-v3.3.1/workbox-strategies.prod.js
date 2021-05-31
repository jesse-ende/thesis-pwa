this.workbox = this.workbox || {}, this.workbox.strategies = function(e, t, r) {
    "use strict";
    try {
        self.workbox.v["workbox:strategies:3.3.1"] = 1
    } catch (e) {}
    class n {
        constructor(t = {}) {
            this.e = e.cacheNames.getRuntimeName(t.cacheName), this.t = t.plugins || [], this.r = t.fetchOptions || null
        }
        handle({
            event: e
        }) {
            var t = this;
            return babelHelpers.asyncToGenerator(function*() {
                return t.makeRequest({
                    event: e,
                    request: e.request
                })
            })()
        }
        makeRequest({
            event: e,
            request: r
        }) {
            var n = this;
            return babelHelpers.asyncToGenerator(function*() {
                "string" == typeof r && (r = new Request(r));
                let s, i = yield t.cacheWrapper.match(n.e, r, null, n.t);
                if (!i) try {
                    i = yield n.n(r, e)
                } catch (e) {
                    s = e
                }
                if (s) throw s;
                return i
            })()
        }
        n(e, n) {
            var s = this;
            return babelHelpers.asyncToGenerator(function*() {
                const i = yield r.fetchWrapper.fetch(e, s.r, s.t), l = i.clone(), u = t.cacheWrapper.put(s.e, e, l, s.t);
                if (n) try {
                    n.waitUntil(u)
                } catch (e) {}
                return i
            })()
        }
    }
    class s {
        constructor(t = {}) {
            this.e = e.cacheNames.getRuntimeName(t.cacheName), this.t = t.plugins || []
        }
        handle({
            event: e
        }) {
            var t = this;
            return babelHelpers.asyncToGenerator(function*() {
                return t.makeRequest({
                    event: e,
                    request: e.request
                })
            })()
        }
        makeRequest({
            event: e,
            request: r
        }) {
            var n = this;
            return babelHelpers.asyncToGenerator(function*() {
                return "string" == typeof r && (r = new Request(r)), yield t.cacheWrapper.match(n.e, r, null, n.t)
            })()
        }
    }
    var i = {
        cacheWillUpdate: ({
            response: e
        }) => e.ok || 0 === e.status ? e : null
    };
    class l {
        constructor(t = {}) {
            if (this.e = e.cacheNames.getRuntimeName(t.cacheName), t.plugins) {
                let e = t.plugins.some(e => !!e.cacheWillUpdate);
                this.t = e ? t.plugins : [i, ...t.plugins]
            } else this.t = [i];
            this.s = t.networkTimeoutSeconds, this.r = t.fetchOptions || null
        }
        handle({
            event: e
        }) {
            var t = this;
            return babelHelpers.asyncToGenerator(function*() {
                return t.makeRequest({
                    event: e,
                    request: e.request
                })
            })()
        }
        makeRequest({
            event: e,
            request: t
        }) {
            var r = this;
            return babelHelpers.asyncToGenerator(function*() {
                const n = [];
                "string" == typeof t && (t = new Request(t));
                const s = [];
                let i;
                if (r.s) {
                    const {
                        id: e,
                        promise: l
                    } = r.i(t, n);
                    i = e, s.push(l)
                }
                const l = r.l(i, e, t, n);
                s.push(l);
                let u = yield Promise.race(s);
                return u || (u = yield l), u
            })()
        }
        i(e, t) {
            var r = this;
            let n;
            var s;
            return {
                promise: new Promise(t => {
                    const i = (s = babelHelpers.asyncToGenerator(function*() {
                        t(yield r.u(e))
                    }), function() {
                        return s.apply(this, arguments)
                    });
                    n = setTimeout(i, 1e3 * this.s)
                }),
                id: n
            }
        }
        l(e, n, s, i) {
            var l = this;
            return babelHelpers.asyncToGenerator(function*() {
                let i, u;
                try {
                    u = yield r.fetchWrapper.fetch(s, l.r, l.t)
                } catch (e) {
                    i = e
                }
                if (e && clearTimeout(e), i || !u) u = yield l.u(s);
                else {
                    const e = u.clone(),
                        r = t.cacheWrapper.put(l.e, s, e, l.t);
                    if (n) try {
                        n.waitUntil(r)
                    } catch (e) {}
                }
                return u
            })()
        }
        u(e) {
            return t.cacheWrapper.match(this.e, e, null, this.t)
        }
    }
    class u {
        constructor(t = {}) {
            this.e = e.cacheNames.getRuntimeName(t.cacheName), this.t = t.plugins || [], this.r = t.fetchOptions || null
        }
        handle({
            event: e
        }) {
            var t = this;
            return babelHelpers.asyncToGenerator(function*() {
                return t.makeRequest({
                    event: e,
                    request: e.request
                })
            })()
        }
        makeRequest({
            event: e,
            request: t
        }) {
            var n = this;
            return babelHelpers.asyncToGenerator(function*() {
                let e, s;
                "string" == typeof t && (t = new Request(t));
                try {
                    s = yield r.fetchWrapper.fetch(t, n.r, n.t)
                } catch (t) {
                    e = t
                }
                if (e) throw e;
                return s
            })()
        }
    }
    class c {
        constructor(t = {}) {
            if (this.e = e.cacheNames.getRuntimeName(t.cacheName), this.t = t.plugins || [], t.plugins) {
                let e = t.plugins.some(e => !!e.cacheWillUpdate);
                this.t = e ? t.plugins : [i, ...t.plugins]
            } else this.t = [i];
            this.r = t.fetchOptions || null
        }
        handle({
            event: e
        }) {
            var t = this;
            return babelHelpers.asyncToGenerator(function*() {
                return t.makeRequest({
                    event: e,
                    request: e.request
                })
            })()
        }
        makeRequest({
            event: e,
            request: r
        }) {
            var n = this;
            return babelHelpers.asyncToGenerator(function*() {
                "string" == typeof r && (r = new Request(r));
                const s = n.n(r, e);
                let i = yield t.cacheWrapper.match(n.e, r, null, n.t);
                if (i) {
                    if (e) try {
                        e.waitUntil(s)
                    } catch (e) {}
                } else i = yield s;
                return i
            })()
        }
        n(e, n) {
            var s = this;
            return babelHelpers.asyncToGenerator(function*() {
                const i = yield r.fetchWrapper.fetch(e, s.r, s.t), l = t.cacheWrapper.put(s.e, e, i.clone(), s.t);
                if (n) try {
                    n.waitUntil(l)
                } catch (e) {}
                return i
            })()
        }
    }
    var o = Object.freeze({
        CacheFirst: n,
        CacheOnly: s,
        NetworkFirst: l,
        NetworkOnly: u,
        StaleWhileRevalidate: c
    });
    const a = {
            cacheFirst: n,
            cacheOnly: s,
            networkFirst: l,
            networkOnly: u,
            staleWhileRevalidate: c
        },
        h = {};
    return Object.keys(a).forEach(e => {
        h[e] = ((t = {}) => {
            return new(0, a[e])(Object.assign(t))
        })
    }), Object.assign(h, o)
}(workbox.core._private, workbox.core._private, workbox.core._private);

//# sourceMappingURL=workbox-strategies.prod.js.map