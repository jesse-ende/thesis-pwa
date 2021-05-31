! function() {
    let version = "1.3.0";
    const e = "content-type",
        t = "x-akam-sw-disable-for-page",
        i = "x-akam-sw-version",
        r = "x-akam-sw-debug",
        n = "x-akam-sw-extended-debug",
        s = "x-akam-sw-spof-type",
        o = "x-akam-sw-deferred",
        a = "x-akam-sw-spof-protected",
        l = "x-akam-sw-blocked",
        c = "x-akam-sm-policy",
        d = "x-akam-base-page-fetch",
        u = "Aka3pmProtected",
        p = "/akam-sw-policy.json",
        h = "3pm-sw-policy",
        m = "state",
        g = "state",
        y = "/3pm-status.json",
        f = 5242880,
        P = 8;

    function S(e) {
        return e && e.stack ? e.stack : e
    }
    class v {
        static get blocked() {
            return 0
        }
        static get deferred() {
            return 1
        }
        static get spofProtected() {
            return 2
        }
        static get success() {
            return 2
        }
        static get activate() {
            return 3
        }
        static get uninstall() {
            return 4
        }
        static get bakedPolicyConstant() {
            return "baked"
        }
        static get overridePolicyConstant() {
            return "override"
        }
        static get localPolicyCode() {
            return 2
        }
        static get stagingPolicyCode() {
            return 0
        }
        static get productionPolicyCode() {
            return 1
        }
    }
    class b {
        constructor() {
            this.messages = []
        }
        enqueue(e) {
            this.messages.push(e)
        }
        isEmpty() {
            return 0 === this.messages.length
        }
        getLength() {
            return this.messages.length
        }
        dequeue() {
            return this.messages.shift()
        }
        enqueueRoutineEvent(version, e, t) {
            try {
                let i = {
                    payload: ["addVar", {
                        "sm.sw.v": version
                    }]
                };
                i.payload[1]["sm.p.v"] = e || v.bakedPolicyConstant, t && ("staging" === t ? i.payload[1]["sm.p.src"] = v.stagingPolicyCode : "production" === t && (i.payload[1]["sm.p.src"] = v.productionPolicyCode)), this.enqueue(i)
            } catch (e) {
                j(`Unexpected error in enqueueRoutineEvent ${S(e)}`)
            }
        }
        enqueueLifeCycleEvent(e) {
            try {
                let t = {
                    payload: ["addVar", {
                        "sm.sw.s": e,
                        "sm.sw.v": version
                    }]
                };
                this.enqueue(t)
            } catch (e) {
                j(`Unexpected error in enqueueLifeCycleEvent ${S(e)}`)
            }
        }
        enqueuePolicyRelatedEvent(version, e) {
            try {
                let t = {
                    payload: ["addVar", {
                        "sm.p.v": version
                    }]
                };
                e && ("staging" === e ? t.payload[1]["sm.p.src"] = v.stagingPolicyCode : "production" === e && (t.payload[1]["sm.p.src"] = v.productionPolicyCode)), this.enqueue(t)
            } catch (e) {
                j(`Unexpected error in enqueuePolicyRelatedEvent ${S(e)}`)
            }
        }
        enqueueErrorEvent(e, t, i) {
            try {
                let e = {
                    payload: ["addVar", {
                        "sm.sw.v": version
                    }, "addError", `${S(t)}`, `SM Service Worker ${i}`, {}]
                };
                this.enqueue(e)
            } catch (t) {
                j(`Unexpected error in enqueuePolicyRelatedEvent ${S(t)}`)
            }
        }
    }
    let w = new b;

    function k(e, t, i) {
        j(t), w.enqueueErrorEvent(t, i, e)
    }
    class O {
        constructor(e) {
            void 0 === e && (e = (() => {})), this.promise = new Promise((t, i) => {
                this.resolve = t, this.reject = i, e(t, i)
            }), this.then = this.promise.then.bind(this.promise), this.catch = this.promise.catch.bind(this.promise), this[Symbol.toStringTag] = "Promise"
        }
    }
    let U, E = this,
        T = void 0,
        x = !1;
    if ("undefined" != typeof AbortController) {
        (new AbortController).signal && (x = !0)
    }
    "undefined" != typeof fetch && (U = fetch);
    const F = [/^https?:\/\/(c|s|s2)\.go-mpulse\.net\/boomerang\/.*$/];
    const R = {
        IsBakedPolicy: !0,
        SPOFProtectionEnabled: !1,
        SPOFTimeout: 15,
        MinimumSPOFTimeout: 6,
        MaximumSPOFTimeout: 20,
        AdaptiveSPOFTimeoutEnable: !1,
        AdaptiveSPOFRTTMultiplier: P,
        IgnoreQueryParameters: !0,
        MinimumPolicyUpdateTime: 300,
        DeferUrlMatchExact: [],
        DeferUrlMatchRegEx: [],
        BlockUrlMatchExact: [],
        BlockUrlMatchRegEx: [],
        SPOFExclusionRegEx: []
    };
    class q {
        constructor(e) {
            Object.assign(this, e)
        }
        forceValid() {
            let e = this.validatePolicyParams(this),
                t = Object.keys(e);
            for (const i of t) {
                let t = R[i],
                    r = this[i],
                    n = e[i];
                if (n.message && n.message.includes("bad regex")) {
                    j(`Removing bad regex from ${i} at indices ${JSON.stringify(n.indices)}`);
                    for (let e = n.indices.length - 1; e >= 0; e--) {
                        let t = n.indices[e];
                        r.splice(t, 1)
                    }
                } else j(`Replacing ${i} with ${t} from baked policy due to: ${e[i]}`), this[i] = t
            }
            this.MinimumPolicyUpdateTime || (this.MinimumPolicyUpdateTime = $.MinimumPolicyUpdateTime), this.SPOFExclusionRegEx || (this.SPOFExclusionRegEx = []), this.Version || (this.Version = 0)
        }
        validatePolicyParams() {
            let e = {},
                t = !1;
            return this.AdaptiveSPOFTimeoutEnable && (t = this.AdaptiveSPOFTimeoutEnable), Object.keys($).forEach(i => {
                let r = this[i],
                    n = typeof r,
                    s = typeof R[i];
                if ("undefined" === n)["IsBakedPolicy", "MinimumPolicyUpdateTime", "AdaptiveSPOFTimeoutEnable", "AdaptiveSPOFRTTMultiplier", "SPOFExclusionRegEx"].includes(i) || (t || !t && !["MinimumSPOFTimeout", "MaximumSPOFTimeout"].includes(i)) && (e[i] = "missing param");
                else if (n !== s) e[i] = `wrong type: is ${n}, should be ${s}`;
                else if ("number" === n) i.includes("SPOF") && r < 1 ? e[i] = `bad value: is ${r}, should be >= 1` : "MaximumSPOFTimeout" === i && r < this.MinimumSPOFTimeout && (e[i] = `bad value: is ${r}, should be greater than MinimumSPOFTimeout (${this.MinimumSPOFTimeout})`);
                else if ("object" !== n || Array.isArray(r)) {
                    if (i.includes("RegEx"))
                        for (let t = 0; t < r.length; t++) {
                            let n = r[t];
                            try {
                                new RegExp(n)
                            } catch (r) {
                                e[i] || (e[i] = {
                                    message: "bad regex detected",
                                    indices: []
                                }), e[i].indices.push(t)
                            }
                        }
                } else e[i] = `wrong type: is ${n}, should be array object`
            }), e
        }
        prepareUrlForMatch(e) {
            let t = e;
            return this.IgnoreQueryParameters && (t = A(e)), t = function(e) {
                return e.replace(new URL(e).hash, "")
            }(t)
        }
        findByPattern(e, t) {
            let i = this.prepareUrlForMatch(t);
            return e.find(e => i.match(e))
        }
        findExact(e, t) {
            let i = this.prepareUrlForMatch(t);
            return e.find(e => {
                let t = e;
                return this.IgnoreQueryParameters && (t = A(e)), t === i
            })
        }
    }
    class M extends q {
        constructor(e) {
            super(e), 0 === Object.keys(e).length || e.TimeStamp || (this.TimeStamp = (new Date).getTime())
        }
    }
    async function I(e, t) {
        let r = !1;
        "object" == typeof t && (r = !!t.rejectOnPolicyErrors), j("Fetching policy from the network from: " + e), C.incrementPolicyRequestSerialNoStorage();
        let n = C.persistentState.policyRequestSerial,
            s = e => {
                (function(e) {
                    let t = new Map;
                    if (Array.from(e).forEach(e => {
                            t.set(e[0].toLowerCase(), e[1])
                        }), t.has(i)) {
                        let e = t.get(i);
                        return !! function(e, t) {
                            let i = N(e),
                                r = N(t);
                            if (i.major < r.major) return !0;
                            if (i.major === r.major) {
                                if (i.minor < r.minor) return !0;
                                if (i.minor === r.minor && i.point < r.point) return !0
                            }
                            return !1
                        }(version, e) && (j(`Uninstalling due to version upgrade; version in header: ${e}, version of SW: ${version}`), w.enqueueLifeCycleEvent(v.uninstall), !0)
                    }
                    return j(`Uninstalling service worker due to missing header: ${i}`), !0
                })(e) && function() {
                    if (registration) try {
                        C.incrementServiceWorkerUninstallSerial()
                    } catch (e) {
                        j(`Error incrementing SW uninstall serial: ${S(e)}`)
                    } finally {
                        registration.unregister()
                    }
                }()
            },
            o = void 0;
        try {
            o = await U(e, {
                headers: {
                    "If-Modified-Since": C.persistentState.lastPolicyUpdate.toUTCString()
                },
                credentials: "include",
                redirect: "manual"
            })
        } catch (e) {
            if (navigator.onLine) throw new Error(`Unexpected network failure; ${S(e)}`);
            return void j(`Could not update policy due to network disconnect; ${S(e)}`)
        }
        let a = async function() {
            if (200 !== o.status) {
                if (304 === o.status) return C.extendedDebug && (extendedState.threeOhFourEncountered = !0), C.markLastPolicyUpdateNow(), void j("Policy unchanged");
                throw new Error("Bad response code: " + o.status)
            }
            if (C.persistentState.policyRequestSerial > n) j(`Stale policy update; from policyRequestSerial ${n} but current serial is ${C.persistentState.policyRequestSerial}`);
            else {
                if (o.headers && o.headers.get("Content-Length") > f) throw new Error("Policy size limit exceeded"); {
                    let e = await async function(e) {
                        if ("function" != typeof e.json) return e;
                        try {
                            return await e.json()
                        } catch (e) {
                            throw new Error(`Wrong JSON format; ${S(e)}`)
                        }
                    }(o);
                    if (!e) throw new Error("Policy missing or empty");
                    if (e.httpStatus && 404 === e.httpStatus) return C.markLastPolicyUpdateNow(), $; {
                        let t = new q(e);
                        if (!r) return t.forceValid(), t; {
                            let e = t.validatePolicyParams();
                            if (Object.keys(e.length > 0)) throw new Error(JSON.stringify(e, null, "\t"))
                        }
                    }
                }
            }
        };
        if (o) try {
            return a()
        } catch (e) {
            let t = `Failure evaluating policy response: ${S(e)}`;
            throw j(t), new Error(t)
        } finally {
            s(o.headers)
        }
    }
    const $ = new q(R);
    let C = new class {
            constructor() {
                this.persistentState = {
                    policy: $,
                    overridePolicy: void 0,
                    useOverridePolicy: !1,
                    policyUpdateSerial: 0,
                    policyRequestSerial: 0,
                    lastPolicyUpdate: new Date(0),
                    serviceWorkerInstallSerial: 0,
                    serviceWorkerUninstallSerial: 0,
                    policyUpdateUrl: "/akam-sw-policy.json"
                }, this.basePageFetchHandler = !1, this.traceEnabled = !1, this.requestsActedOn = 0, this.extendedDebug = !1, this.spofType = "chrome", this.adaptiveSPOFTimeout = 6, this.navigationTimingAPIResponse = 6
            }
            incrementServiceWorkerInstallSerial() {
                this.persistentState.serviceWorkerInstallSerial || (this.persistentState.serviceWorkerInstallSerial = 0), this.persistentState.serviceWorkerInstallSerial++, L.storeStateInDb()
            }
            incrementServiceWorkerUninstallSerial() {
                this.persistentState.serviceWorkerUninstallSerial || (this.persistentState.serviceWorkerUninstallSerial = 0), this.persistentState.serviceWorkerUninstallSerial++, L.storeStateInDb()
            }
            incrementPolicyRequestSerialNoStorage() {
                this.persistentState.policyRequestSerial || (this.persistentState.policyRequestSerial = 0), this.persistentState.policyRequestSerial++
            }
            incrementPolicyUpdateSerialInnerNoStorage() {
                this.persistentState.policyUpdateSerial || (this.persistentState.policyUpdateSerial = 0), this.persistentState.policyUpdateSerial++
            }
            markLastPolicyUpdateNowNoStorage() {
                this.persistentState.lastPolicyUpdate = new Date
            }
            markLastPolicyUpdateNow() {
                this.markLastPolicyUpdateNowNoStorage(), L.storeStateInDb()
            }
            triggerPolicyUpdateViaLastPolicyUpdate() {
                this.persistentState.lastPolicyUpdate = new Date(0), L.storeStateInDb()
            }
            disableInjectedPolicy() {
                j("Disabling injected policy"), this.setUseOverridePolicy(!1)
            }
            updatePolicy(e) {
                this.persistentState.policy = e, this.markLastPolicyUpdateNowNoStorage(), this.incrementPolicyUpdateSerialInnerNoStorage(), j("Policy update complete"), j(`New policy is: ${JSON.stringify(this.persistentState.policy,null,"\t")}`), L.storeStateInDb()
            }
            updateOverridePolicy(e) {
                this.persistentState.overridePolicy = e, this.incrementPolicyUpdateSerialInnerNoStorage(), w.enqueuePolicyRelatedEvent(v.overridePolicyConstant, v.localPolicyCode), j("Override policy update complete; will be in effect as long as debug mode is on"), j(`New override policy is: ${JSON.stringify(this.persistentState.overridePolicy,null,"\t")}`), L.storeStateInDb()
            }
            getPolicy() {
                return this.persistentState.policy
            }
            getOverridePolicy() {
                return this.persistentState.overridePolicy
            }
            shouldUseOverridePolicy() {
                return this.persistentState.useOverridePolicy
            }
            setUseOverridePolicy(e) {
                this.persistentState.useOverridePolicy = e, L.storeStateInDb()
            }
            async updatePolicyFromNetwork(e = !1) {
                e && this.extendedDebug && (extendedState.getPolicyFromNetworkCalled = !0);
                try {
                    let e = await I(this.persistentState.policyUpdateUrl);
                    void 0 === e ? this.extendedDebug && (extendedState.policyUndefined = !0) : (this.updatePolicy(e), w.enqueuePolicyRelatedEvent(e.Version, e.Network))
                } catch (e) {
                    w.enqueuePolicyRelatedEvent(v.bakedPolicyConstant, v.localPolicyCode), k("updatePolicyFromNetwork", `Could not update policy: ${S(e)}`, e)
                }
            }
        },
        L = new class {
            constructor() {
                this.stateDb = void 0, "undefined" != typeof indexedDB && this.openDb()
            }
            openDb() {
                let e = indexedDB.open(h, 3);
                e.onerror = (() => {
                    j("Error loading policy db")
                }), e.onsuccess = (() => {
                    j("Policy db initialized"), this.stateDb = e.result, this.loadStateFromDb()
                }), e.onupgradeneeded = (e => {
                    let t = e.target.result;
                    e.oldVersion < 1 && t.createObjectStore(m)
                })
            }
            getStateStore() {
                return this.stateDb.transaction([m], "readwrite").objectStore(m)
            }
            loadStateFromDb() {
                let e = this.getStateStore().get(g);
                e.onerror = (() => {
                    j("No state found in db")
                }), e.onsuccess = (() => {
                    let t = e.result;
                    if (t) {
                        let e = new q(t.policy);
                        if (e.forceValid(), t.policy = e, t.overridePolicy && Object.keys(t.overridePolicy).length > 0) {
                            let e = new M(t.overridePolicy);
                            e.forceValid(), t.overridePolicy = e
                        } else t.overridePolicy = void 0;
                        C.persistentState = t, j("Loaded state from db")
                    } else this.storeStateInDb()
                })
            }
            storeStateInDb() {
                if (this.stateDb) return new Promise((e, t) => {
                    j("Persisting state to db");
                    let i = this.getStateStore().put(C.persistentState, g);
                    i.onerror = (() => {
                        j("Failed to store policy in db"), e()
                    }), i.onsuccess = (() => {
                        j("Stored state in db"), e()
                    })
                })
            }
        };

    function j() {
        C.traceEnabled && console.log.apply(this, arguments)
    }

    function N(e) {
        let t = e.split(".");
        return {
            major: parseInt(t[0]),
            minor: parseInt(t[1]),
            point: parseInt(t[2])
        }
    }

    function D(e) {
        let t = e.url,
            i = new URL(t);
        i.searchParams.append(u, "true");
        let r = i.toString();
        e.destination;
        return `\n    (function() {\n      let scriptTag = document.currentScript;\n      \n      let pageIsLoaded = document.readyState === 'complete' || false;\n      \n      let runScript = (thisScriptTag) => {\n        if (!scriptTag) {\n          let init = {\n            method: "${e.method}",\n            headers: ${function(e){let t={};for(let i of e.entries())t[i[0]]=i[1];return JSON.stringify(t,null,"\t")}(e.headers)},\n            mode: "${e.mode}",\n            credentials: "${e.credentials}",\n            cache: "${e.cache}",\n            redirect: "${e.redirect}",\n            referrer: "${e.referrer}",\n            referrerPolicy: "${e.referrerPolicy}",\n            integrity: "${e.integrity}"\n          };\n    \n          let request = new Request('${r}', init);\n    \n          fetch(request).then((response) => {\n            if (response.status === 200) {\n              response.text().then((body) => {\n                eval(body);\n              });\n            }\n          });\n        } else {\n          setTimeout(function() {\n            let scriptClone = document.createElement('script');\n            \n            for (let index = 0; index < scriptTag.attributes.length; index++) {\n              let attribute = scriptTag.attributes.item(index);\n              scriptClone.setAttribute(attribute.name, attribute.value);\n            }\n            \n            scriptClone.src = '${r}';\n            scriptClone.setAttribute('aka3pm', 'true');\n            \n            scriptClone.async = false;\n            \n            let parent = scriptTag.parentNode;\n            parent.insertBefore(scriptClone, scriptTag);\n            parent.removeChild(scriptTag);\n          }, 0);\n        }\n      }\n      \n      if (pageIsLoaded) {\n        runScript();\n      } else {\n        window.addEventListener('load', () => {\n          pageIsLoaded = true;\n          runScript();\n        });\n      }\n    })();\n  `
    }

    function A(e) {
        return e.replace(new URL(e).search, "")
    }
    class W {
        constructor(e, t = !1, i = !1) {
            this.url = e, this.urlParsed = new URL(e), this.debugMode = t, this.debugEnabledViaHeader = !1, this.disabled = i, this.clientPromise = new O(e => {
                this.client && e(this.client)
            }), this.SPOFTimeoutToUse = this.policy().SPOFTimeout, this.messageResponsePromises = new Map
        }
        setClient(e) {
            this.client = e, this.clientPromise.resolve(e)
        }
        log() {
            this.debugMode && console.log.apply(this, arguments)
        }
        policy() {
            let e = C.getOverridePolicy();
            return this.debugMode && C.shouldUseOverridePolicy() && e && Object.keys(e).length > 0 ? e : C.getPolicy()
        }
        enableClientDebug() {
            this.postMessage({
                commandToClient: "enableDebug"
            })
        }
        checkHeaders(e, i = !1) {
            let o = new Map;
            if (Array.from(e).forEach(e => {
                    o.set(e[0].toLowerCase(), e[1])
                }), o.has(r) && (this.debugMode = "true" === o.get(r), this.debugEnabledViaHeader = !0), this.debugMode) {
                if (self.aka3pm || (j("Initializing debug functions at SW global scope"), self.aka3pm = {}, self.aka3pm.injectSwPolicy = (e => K(e)), self.aka3pm.disableInjectedPolicy = (() => C.disableInjectedPolicy()), self.aka3pm.deleteInjectedPolicy = (() => X()), self.aka3pm.getState = (async () => await Y(Z)), self.aka3pm.dumpState = (async () => {
                        j(JSON.stringify(await Y(Z), null, "\t"))
                    }), self.aka3pm.updatePolicyFromNetwork = (async () => C.updatePolicyFromNetwork(!0))), C.traceEnabled = !0, this.enableClientDebug(), o.has(t) && "true" === o.get(t) && (this.log("Service worker disabled for a single page load"), this.disabled = !0), o.has(n) && (C.extendedDebug = "true" === o.get(n), j(n + " header was found; enabling extended debug info"), void 0 === self.extendedState && (self.extendedState = {})), o.has(s) && (C.spofType = o.get(s), j(s + " header was found " + C.spofType)), o.has(c)) {
                    let e = o.get(c);
                    i && (e = decodeURI(e));
                    let t = new URL(e, self.location.href).host === self.location.host;
                    C.persistentState.policyUpdateUrl !== e && t && (this.log("Policy url override to: " + e), C.persistentState.policyUpdateUrl = e, C.triggerPolicyUpdateViaLastPolicyUpdate())
                }
                C.traceEnabled = this.debugMode
            }
        }
        dequeueAndPostMessage() {
            for (; !w.isEmpty();) {
                let e = w.dequeue();
                e.commandToClient = "boomerangMQ", this.postMessage(e)
            }
        }
        fetchOutward(e, t) {
            return (async () => {
                let i = () => {
                    let i = e.request,
                        r = {};
                    return "no-cors" === i.mode && (r.referrer = i.referrer), t && (r.signal = t), U(i, r)
                };
                if (!T) return i();
                e.aka3pmChainedFetch = !0;
                try {
                    let t = await T(e);
                    return e.aka3pmOtherSwResponse ? e.aka3pmOtherSwResponse : t || i()
                } catch (e) {
                    let t = `Exception encountered in other SW fetch: ${S(e)}`;
                    throw j(t), new Error(t)
                } finally {
                    E.otherSwFetchDisabled && E.otherSwFetchDisabled.has(e.request.url) && E.otherSwFetchDisabled.delete(e.request.url)
                }
            })()
        }
        calculateAdaptiveSPOFTimeout(e) {
            let t = this.policy().MinimumSPOFTimeout,
                i = this.policy().MaximumSPOFTimeout,
                r = t,
                n = t;
            "connection" in e && "chrome" === C.spofType ? n = e.connection.rtt : (void 0 === (n = C.navigationTimingAPIResponse) && (n = t), C.extendedDebug && (C.navigationTimingUsed = !0));
            let s = P;
            this.policy().AdaptiveSPOFRTTMultiplier && (s = this.policy().AdaptiveSPOFRTTMultiplier);
            let o = Math.ceil(n / 1e3) * s;
            return r = o < t ? t : o > t && o < i ? o : i
        }
        originalPageFetchHandler(e) {
            let t = e.request;
            if (this.checkHeaders(t.headers), ["only-if-cached", "force-cache"].includes(t.cache)) return this.log(`Not sending request out to the network due to cache rule ${t.cache} in the request object (likely a back/forward navigation)`), this.cachedLoad = !0, void e.waitPromise.resolve();
            let i = this.fetchOutward(e);
            e.respondWith3pmInternal(i), i.then(t => {
                this.checkHeaders(t.headers), !this.debugEnabledViaHeader && this.debugMode && (this.debugMode = !1, C.traceEnabled = !1), this.debugMode || C.persistentState.policyUpdateUrl === p || (this.log("Reset back to production as debug mode is not on and persistentState's policyUpdateUrl does not point to akam-sw-policy.json"), C.persistentState.policyUpdateUrl = p, C.triggerPolicyUpdateViaLastPolicyUpdate());
                let i = this.urlParsed.search;
                if (i) {
                    let e = new URLSearchParams(i);
                    e.delete(r), this.checkHeaders(e, !0)
                }
                let n = {
                    state: C,
                    disabled: this.disabled
                };
                this.log(`Service Worker Status: ${JSON.stringify(n,null,"\t")}`), e.waitPromise.resolve()
            }).catch(t => {
                k("originalPageFetchHandler", `Error encountered when trying to perform fetch: ${S(t)}`, t), e.waitPromise.resolve()
            })
        }
        resourceFetchHandler(t) {
            let i = this.policy(),
                r = t.request,
                n = r.url,
                s = new URL(n),
                a = s.searchParams.has(u);
            if (this.dequeueAndPostMessage(), this.disabled) t.waitPromise.resolve();
            else if (a) {
                let e = this.fetchOutward(t);
                t.respondWith3pmInternal(e), t.waitPromise.resolve()
            } else {
                let a = !1,
                    c = r.headers.get("accept"),
                    d = !1,
                    u = !1;
                if (d = function(e) {
                        let t = e.url,
                            i = new URL(t),
                            r = !1,
                            n = i.pathname.endsWith(".js");
                        void 0 !== e.destination ? "script" === e.destination ? r = !0 : "" === e.destination && (r = n) : r = n;
                        return r
                    }(r), void 0 !== r.destination ? "script" === r.destination && (u = !0) : u = d && c && "*/*" === c && "no-cors" === r.mode, i.findByPattern(i.BlockUrlMatchRegEx, n) || i.findExact(i.BlockUrlMatchExact, n)) {
                    this.log(`Blocking: ${n}`);
                    let i = {};
                    i[e] = "application/javascript", i[l] = "true", t.respondWith3pmInternal(new Response("", {
                        status: 403,
                        headers: i
                    })), t.waitPromise.resolve(), a = !0, this.postToBoomerangActionTaken(this, n, v.blocked)
                }
                if (!a && i.findByPattern(i.DeferUrlMatchRegEx, n) || i.findExact(i.DeferUrlMatchExact, n)) {
                    this.log(`Deferring: ${n}`);
                    let i = D(r),
                        s = {};
                    s[e] = "application/javascript", s[o] = "true", t.respondWith3pmInternal(new Response(i, {
                        status: 200,
                        headers: s
                    })), this.postToBoomerangActionTaken(this, n, v.deferred), t.waitPromise.resolve(), a = !0
                }
                if (!a) {
                    let e = d && u && this.policy().SPOFProtectionEnabled && s.host !== self.location.host,
                        r = function(e) {
                            let t = !1;
                            return F.forEach(i => {
                                i.test(e) && (t = !0)
                            }), t
                        }(n) || i.findByPattern(i.SPOFExclusionRegEx, n);
                    r && C.extendedDebug && (extendedState.excludedFromSpofProtect || (extendedState.excludedFromSpofProtect = []), extendedState.excludedFromSpofProtect.push(n)), (e &= !r) ? this.spofProtect(t) : t.waitPromise.resolve()
                }
            }
        }
        spofProtect(t) {
            let i = t.request,
                r = i.url;
            this.log(`SPOF protecting: ${r}`);
            let n = !1,
                s = void 0,
                o = void 0;
            x && (s = new AbortController, o = s.signal);
            let l = Promise.race([new Promise((e, i) => {
                x && o && o.addEventListener("abort", () => {
                    j(t.request.url + " : original request aborted due to SPOF protection"), C.extendedDebug && (C.abortPromiseCancellation = !0)
                }), this.fetchOutward(t, o).then(i => {
                    n = !0, t.waitPromise.resolve(), e(i)
                }).catch(e => {
                    t.waitPromise.resolve(), i(e)
                })
            }), new Promise(o => {
                setTimeout(() => {
                    if (!n) {
                        n = !0, x && s.abort();
                        let l = D(i),
                            c = {};
                        c[e] = "application/javascript", c[a] = "true", o(new Response(l, {
                            status: 200,
                            headers: c
                        })), this.log("Culling request to prevent SPOF (will reload async): " + r), t.waitPromise.resolve(), this.postToBoomerangActionTaken(this, r, v.spofProtected, this.SPOFTimeoutToUse)
                    }
                }, 1e3 * this.SPOFTimeoutToUse)
            })]);
            l.catch(e => {
                k("spofProtect", `Error in SPOF protection race: ${S(e)}`, e), n = !0, t.waitPromise.resolve()
            }), t.respondWith3pmInternal(l)
        }
        async postMessage(e, t) {
            let i = null;
            t && (i = new O, this.messageResponsePromises.set(e.commandToClient, i));
            let r = await this.clientPromise;
            return e.isAka3pm = !0, r.postMessage(e), i
        }
        postToBoomerangActionTaken(e, t, i, r) {
            j("Post to boomerang called");
            let n = 0;
            "undefined" != typeof performance && performance && (performance.timeOrigin ? n = performance.timeOrigin : performance.timing && performance.timing.navigationStart && (n = performance.timing.navigationStart));
            let s = {
                payload: ["BOOMR.plugins.ResourceTiming.addResources", [{
                    name: t,
                    startTime: performance.now(),
                    initiatorType: "script",
                    _data: {
                        sm: [i, r].join(",")
                    }
                }], n],
                commandToClient: "boomerangMQ"
            };
            e.postMessage(s)
        }
        clientMessage(e) {
            switch (e.command) {
                case "pageLoad":
                    w = new b, j(`Page load event fired for ${this.url}`);
                    break;
                default:
                    j(`Unknown message command seen in PageLoad.clientMessage: ${e.command}`)
            }
        }
    }
    let B = {},
        V = [];

    function H(e, t, i = {}) {
        V.length > 0 && e && (V = V.filter(i => i.url !== t || (B[e] = i, clients.get(e).then(e => {
            i.setClient(e)
        }), !1)));
        let r = B[e];
        return !r && i.createNew && (r = new W(t, C.traceEnabled, i.disabled), clients.get(e).then(e => {
            r.setClient(e)
        }), B[e] = r), r
    }

    function J(e) {
        let t;
        return (t = e.source ? e.source.id : e.clientId ? e.clientId : void 0) && (t = t.replace("{", "").replace("}", "")), t
    }

    function z(e) {
        let t = void 0,
            i = J(e);
        e.source ? t = e.source.url : e.request && (t = e.request.referrer ? e.request.referrer : e.request.url);
        let r = H(i, t);
        return r ? r.debugMode : C.traceEnabled
    }

    function G(e) {
        return !!e.match(G.regex)
    }

    function Q(e) {
        return "GET" === e.method && !G(e.url) && function(e) {
            let t = e.url,
                i = new URL(t),
                r = !1,
                n = i.searchParams.get(d);
            if (null == n && i.hash && i.hash.includes(d)) {
                let e = i.hash.split(d);
                for (let t = 0; t < e.length; t++) e[1] && e[1].startsWith("=true") && (r = !0)
            }
            return "true" === n && (r = !0), C.basePageFetchHandler = r, r
        }(e)
    }

    function _(i) {
        try {
            let r = z(i),
                n = function(e) {
                    let i = e.request.url;
                    return e.request.referrer && (i = e.request.referrer), i.includes(t + "=true")
                }(i),
                s = i.request,
                o = s.url,
                a = new URL(o);
            if (C.requestsActedOn || (C.requestsActedOn = 0), C.requestsActedOn++, a.pathname === y) ! function(t) {
                let i = {};
                i[e] = "application/json", t.respondWith3pmInternal(new Response(JSON.stringify(C, null, "\t"), {
                    status: 200,
                    headers: i
                })), t.waitPromise.resolve()
            }(i);
            else {
                let e = "navigate" === s.mode,
                    t = J(i);
                if (e) {
                    let e = new W(o, r, n);
                    try {
                        t ? B[t] = e : V.push(e), Q(i.request) ? e.originalPageFetchHandler(i) : i.waitPromise.resolve();
                        let r = !!e.policy().AdaptiveSPOFTimeoutEnable && e.policy().AdaptiveSPOFTimeoutEnable;
                        "policy" === C.spofType && (r = !1), r && (C.adaptiveSPOFTimeout = e.calculateAdaptiveSPOFTimeout(navigator)), e.SPOFTimeoutToUse = r ? C.adaptiveSPOFTimeout : e.policy().SPOFTimeout, j(`SPOF timeout being used: ${e.SPOFTimeoutToUse} seconds`), w.enqueueRoutineEvent(version, e.policy().Version, e.policy().Network), e.dequeueAndPostMessage()
                    } finally {
                        C.persistentState.lastPolicyUpdate.getTime() + 1e3 * e.policy().MinimumPolicyUpdateTime < (new Date).getTime() && C.updatePolicyFromNetwork()
                    }
                } else {
                    H(t, s.referrer ? s.referrer : o, {
                        createNew: !0,
                        disabled: n
                    }).resourceFetchHandler(i)
                }
                i.cancelBubble || (!i.aka3pmChainedFetch && T && T(i), i.waitPromise.resolve())
            }
        } catch (e) {
            k("fetchEventHandler", `Unexpected error in fetch handler: ${S(e)}`, e), i.waitPromise.resolve()
        }
    }

    function K(e) {
        if (e)
            if ("{}" === JSON.stringify(e)) C.updateOverridePolicy(void 0);
            else {
                j("Injecting policy: " + JSON.stringify(e, null, "\t"));
                let t = new M(e);
                t.forceValid(), C.setUseOverridePolicy(!0), C.updateOverridePolicy(t)
            }
        else j("Could not inject override policy; policy missing?")
    }

    function X() {
        C.persistentState.overridePolicy = void 0, C.setUseOverridePolicy(!1)
    }

    function Y(e) {
        let t = JSON.parse(JSON.stringify(C));
        return t.persistentState.overridePolicy || (t.persistentState.overridePolicy = {}), Object.assign(t, t.persistentState), {
            version,
            state: t,
            extendedState: self.extendedState ? self.extendedState : {},
            pageLoads: JSON.stringify(B, null, "\t"),
            currentPageLoad: JSON.stringify(e, null, "\t")
        }
    }
    G.regex = /^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+=[a-z\-]+)?)?(;base64)?,[a-z0-9!$&',()*+;=\-._~:@\/?%\s]*\s*$/i;
    let Z = void 0;
    if ("undefined" != typeof self) {
        self.addEventListener("message", async e => {
            let t = z(e);
            if (e.data.isAka3pm) {
                j("message event handled in service worker: " + e.data.command);
                let i = e.data.command,
                    r = function(e) {
                        return H(e.id, e.url)
                    }(e.source);
                if (Z = r, ["pageLoad"].includes(i) && void 0 !== r) r.clientMessage(e.data);
                else switch (i) {
                    case "updatePolicy":
                        if (t) {
                            K(e.data.policy), r.postMessage({
                                command: "updatePolicy",
                                response: "Policy updated"
                            })
                        }
                        break;
                    case "disableInjectedPolicy":
                        t && (C.disableInjectedPolicy(), r.postMessage({
                            command: "disableInjectedPolicy",
                            response: "Override policy disabled"
                        }));
                        break;
                    case "deleteInjectedPolicy":
                        t && (X(), r.postMessage({
                            command: "deleteInjectedPolicy",
                            response: "Override policy deleted"
                        }));
                        break;
                    case "getState":
                        t && r.postMessage({
                            command: "getState",
                            response: Y(r)
                        });
                        break;
                    case "navTiming":
                        C.navigationTimingAPIResponse = e.data.navTiming;
                        break;
                    case "pullPolicyFromNetwork":
                        t && await C.updatePolicyFromNetwork(!0);
                        break;
                    default:
                        j("Unexpected message command: " + i)
                }
            }
        }), self.addEventListener("install", e => {
            C.incrementServiceWorkerInstallSerial(), w.enqueueLifeCycleEvent(v.success), self.skipWaiting()
        }), self.addEventListener("activate", e => {
            e.waitUntil(async function() {
                self.registration.navigationPreload && await self.registration.navigationPreload.disable()
            }()), w.enqueueLifeCycleEvent(v.activate), self.clients.claim()
        }), self.addEventListener("fetch", e => {
            e.waitPromise = new O, e.waitUntil(e.waitPromise), _(e)
        });
        let e = FetchEvent.prototype.respondWith;
        FetchEvent.prototype.respondWith3pmInternal = function(t) {
            e.call(this, t)
        };
        let t = WorkerGlobalScope.prototype.fetch;
        WorkerGlobalScope.prototype.fetch3pmInternal = function(e, i) {
            let r = !1,
                n = e => {
                    try {
                        let t = new URL(e),
                            i = t.searchParams;
                        if (r = i.has(u)) return i.delete(u), t.search = i.toString(), t.toString()
                    } catch (e) {}
                    return e
                },
                s = e;
            if (e instanceof Request) {
                let o = e;
                return s = n(s = e.url), r && (o = new Request(s, e)), t.call(this, o, i)
            }
            return s = n(e), t.call(this, s, i)
        }, U = this.fetch3pmInternal;
        let i = new URL(self.location.href).searchParams.get("othersw");
        if (i) {
            let t = decodeURIComponent(i);
            if (new URL(t, self.location.href).host === self.location.host) {
                let i = ServiceWorkerGlobalScope.prototype.addEventListener;
                ServiceWorkerGlobalScope.prototype.addEventListener = function(e, t, r, n) {
                    "fetch" === e ? T = t : i(e, t, r, n)
                }, FetchEvent.prototype.respondWith = function(t) {
                    void 0 !== this.aka3pmChainedFetch && this.aka3pmChainedFetch ? this.aka3pmOtherSwResponse = t : e.call(this, t)
                }, WorkerGlobalScope.prototype.fetch = function(e, t) {
                    let i = e;
                    return e instanceof Request && (i = e.url), WorkerGlobalScope.prototype.fetch3pmInternal.call(this, e, t)
                }, self.importScripts(t), onfetch && !T && (T = onfetch, onfetch = void 0)
            }
        }
    }
}();