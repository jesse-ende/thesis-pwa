this.workbox = this.workbox || {}, this.workbox.backgroundSync = function(t, e, s, i, n) {
    "use strict";
    try {
        self["workbox:background-sync:5.1.4"] && _()
    } catch (t) {}
    class a {
        constructor(t) {
            this.t = t, this.s = new n.DBWrapper("workbox-background-sync", 3, {
                onupgradeneeded: this.i
            })
        }
        async pushEntry(t) {
            delete t.id, t.queueName = this.t, await this.s.add("requests", t)
        }
        async unshiftEntry(t) {
            const [e] = await this.s.getAllMatching("requests", {
                count: 1
            });
            e ? t.id = e.id - 1 : delete t.id, t.queueName = this.t, await this.s.add("requests", t)
        }
        async popEntry() {
            return this.h({
                direction: "prev"
            })
        }
        async shiftEntry() {
            return this.h({
                direction: "next"
            })
        }
        async getAll() {
            return await this.s.getAllMatching("requests", {
                index: "queueName",
                query: IDBKeyRange.only(this.t)
            })
        }
        async deleteEntry(t) {
            await this.s.delete("requests", t)
        }
        async h({
            direction: t
        }) {
            const [e] = await this.s.getAllMatching("requests", {
                direction: t,
                index: "queueName",
                query: IDBKeyRange.only(this.t),
                count: 1
            });
            if (e) return await this.deleteEntry(e.id), e
        }
        i(t) {
            const e = t.target.result;
            t.oldVersion > 0 && t.oldVersion < 3 && e.objectStoreNames.contains("requests") && e.deleteObjectStore("requests");
            e.createObjectStore("requests", {
                autoIncrement: !0,
                keyPath: "id"
            }).createIndex("queueName", "queueName", {
                unique: !1
            })
        }
    }
    const r = ["method", "referrer", "referrerPolicy", "mode", "credentials", "cache", "redirect", "integrity", "keepalive"];
    class c {
        constructor(t) {
            "navigate" === t.mode && (t.mode = "same-origin"), this.u = t
        }
        static async fromRequest(t) {
            const e = {
                url: t.url,
                headers: {}
            };
            "GET" !== t.method && (e.body = await t.clone().arrayBuffer());
            for (const [s, i] of t.headers.entries()) e.headers[s] = i;
            for (const s of r) void 0 !== t[s] && (e[s] = t[s]);
            return new c(e)
        }
        toObject() {
            const t = Object.assign({}, this.u);
            return t.headers = Object.assign({}, this.u.headers), t.body && (t.body = t.body.slice(0)), t
        }
        toRequest() {
            return new Request(this.u.url, this.u)
        }
        clone() {
            return new c(this.toObject())
        }
    }
    const h = new Set,
        u = t => {
            const e = {
                request: new c(t.requestData).toRequest(),
                timestamp: t.timestamp
            };
            return t.metadata && (e.metadata = t.metadata), e
        };
    class o {
        constructor(t, {
            onSync: s,
            maxRetentionTime: i
        } = {}) {
            if (this.o = !1, this.q = !1, h.has(t)) throw new e.WorkboxError("duplicate-queue-name", {
                name: t
            });
            h.add(t), this.l = t, this.m = s || this.replayRequests, this.p = i || 10080, this.g = new a(this.l), this.R()
        }
        get name() {
            return this.l
        }
        async pushRequest(t) {
            await this.k(t, "push")
        }
        async unshiftRequest(t) {
            await this.k(t, "unshift")
        }
        async popRequest() {
            return this.D("pop")
        }
        async shiftRequest() {
            return this.D("shift")
        }
        async getAll() {
            const t = await this.g.getAll(),
                e = Date.now(),
                s = [];
            for (const i of t) {
                const t = 60 * this.p * 1e3;
                e - i.timestamp > t ? await this.g.deleteEntry(i.id) : s.push(u(i))
            }
            return s
        }
        async k({
            request: t,
            metadata: e,
            timestamp: s = Date.now()
        }, i) {
            const n = {
                requestData: (await c.fromRequest(t.clone())).toObject(),
                timestamp: s
            };
            e && (n.metadata = e), await this.g[i + "Entry"](n), this.o ? this.q = !0 : await this.registerSync()
        }
        async D(t) {
            const e = Date.now(),
                s = await this.g[t + "Entry"]();
            if (s) {
                const i = 60 * this.p * 1e3;
                return e - s.timestamp > i ? this.D(t) : u(s)
            }
        }
        async replayRequests() {
            let t;
            for (; t = await this.shiftRequest();) try {
                await fetch(t.request.clone())
            } catch (s) {
                throw await this.unshiftRequest(t), new e.WorkboxError("queue-replay-failed", {
                    name: this.l
                })
            }
        }
        async registerSync() {
            if ("sync" in self.registration) try {
                await self.registration.sync.register("workbox-background-sync:" + this.l)
            } catch (t) {}
        }
        R() {
            "sync" in self.registration ? self.addEventListener("sync", t => {
                if (t.tag === "workbox-background-sync:" + this.l) {
                    const e = async () => {
                        let e;
                        this.o = !0;
                        try {
                            await this.m({
                                queue: this
                            })
                        } catch (t) {
                            throw e = t, e
                        } finally {
                            !this.q || e && !t.lastChance || await this.registerSync(), this.o = !1, this.q = !1
                        }
                    };
                    t.waitUntil(e())
                }
            }) : this.m({
                queue: this
            })
        }
        static get _() {
            return h
        }
    }
    return t.BackgroundSyncPlugin = class {
        constructor(t, e) {
            this.fetchDidFail = async ({
                request: t
            }) => {
                await this.v.pushRequest({
                    request: t
                })
            }, this.v = new o(t, e)
        }
    }, t.Queue = o, t
}({}, workbox.core._private, workbox.core._private, workbox.core._private, workbox.core._private);