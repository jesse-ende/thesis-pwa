window.configFile = "https://van.najva.com/static/js/scripts/amoozesh365-2018-c27731ef-1c99-4657-8686-193a71e27952.json";

// version: 1.8.27
(() => {
    var e = {
            5752: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r, i = n(655),
                    o = n(1313),
                    a = n(4594),
                    s = ((r = {})["no-app"] = "No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()", r["bad-app-name"] = "Illegal App name: '{$appName}", r["duplicate-app"] = "Firebase App named '{$appName}' already exists", r["app-deleted"] = "Firebase App named '{$appName}' already deleted", r["invalid-app-argument"] = "firebase.{$appName}() takes either no argument or a Firebase App instance.", r),
                    c = new o.ErrorFactory("app", "Firebase", s),
                    u = "[DEFAULT]",
                    l = [],
                    d = function() {
                        function e(e, t, n) {
                            this.firebase_ = n, this.isDeleted_ = !1, this.services_ = {}, this.name_ = t.name, this.automaticDataCollectionEnabled_ = t.automaticDataCollectionEnabled || !1, this.options_ = o.deepCopy(e), this.INTERNAL = {
                                getUid: function() {
                                    return null
                                },
                                getToken: function() {
                                    return Promise.resolve(null)
                                },
                                addAuthTokenListener: function(e) {
                                    l.push(e), setTimeout((function() {
                                        return e(null)
                                    }), 0)
                                },
                                removeAuthTokenListener: function(e) {
                                    l = l.filter((function(t) {
                                        return t !== e
                                    }))
                                }
                            }
                        }
                        return Object.defineProperty(e.prototype, "automaticDataCollectionEnabled", {
                            get: function() {
                                return this.checkDestroyed_(), this.automaticDataCollectionEnabled_
                            },
                            set: function(e) {
                                this.checkDestroyed_(), this.automaticDataCollectionEnabled_ = e
                            },
                            enumerable: !0,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "name", {
                            get: function() {
                                return this.checkDestroyed_(), this.name_
                            },
                            enumerable: !0,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "options", {
                            get: function() {
                                return this.checkDestroyed_(), this.options_
                            },
                            enumerable: !0,
                            configurable: !0
                        }), e.prototype.delete = function() {
                            var e = this;
                            return new Promise((function(t) {
                                e.checkDestroyed_(), t()
                            })).then((function() {
                                e.firebase_.INTERNAL.removeApp(e.name_);
                                for (var t = [], n = 0, r = Object.keys(e.services_); n < r.length; n++)
                                    for (var i = r[n], o = 0, a = Object.keys(e.services_[i]); o < a.length; o++) {
                                        var s = a[o];
                                        t.push(e.services_[i][s])
                                    }
                                return Promise.all(t.filter((function(e) {
                                    return "INTERNAL" in e
                                })).map((function(e) {
                                    return e.INTERNAL.delete()
                                })))
                            })).then((function() {
                                e.isDeleted_ = !0, e.services_ = {}
                            }))
                        }, e.prototype._getService = function(e, t) {
                            if (void 0 === t && (t = u), this.checkDestroyed_(), this.services_[e] || (this.services_[e] = {}), !this.services_[e][t]) {
                                var n = t !== u ? t : void 0,
                                    r = this.firebase_.INTERNAL.factories[e](this, this.extendApp.bind(this), n);
                                this.services_[e][t] = r
                            }
                            return this.services_[e][t]
                        }, e.prototype._removeServiceInstance = function(e, t) {
                            void 0 === t && (t = u), this.services_[e] && this.services_[e][t] && delete this.services_[e][t]
                        }, e.prototype.extendApp = function(e) {
                            var t = this;
                            o.deepExtend(this, e), e.INTERNAL && e.INTERNAL.addAuthTokenListener && (l.forEach((function(e) {
                                t.INTERNAL.addAuthTokenListener(e)
                            })), l = [])
                        }, e.prototype.checkDestroyed_ = function() {
                            if (this.isDeleted_) throw c.create("app-deleted", {
                                appName: this.name_
                            })
                        }, e
                    }();
                d.prototype.name && d.prototype.options || d.prototype.delete;
                var f = new a.Logger("@firebase/app");
                /**
                 * @license
                 * Copyright 2019 Google Inc.
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                /**
                 * @license
                 * Copyright 2017 Google Inc.
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                if (o.isBrowser() && void 0 !== self.firebase) {
                    f.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");
                    var p = self.firebase.SDK_VERSION;
                    p && p.indexOf("LITE") >= 0 && f.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")
                }
                var h =
                    /**
                     * @license
                     * Copyright 2019 Google Inc.
                     *
                     * Licensed under the Apache License, Version 2.0 (the "License");
                     * you may not use this file except in compliance with the License.
                     * You may obtain a copy of the License at
                     *
                     *   http://www.apache.org/licenses/LICENSE-2.0
                     *
                     * Unless required by applicable law or agreed to in writing, software
                     * distributed under the License is distributed on an "AS IS" BASIS,
                     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                     * See the License for the specific language governing permissions and
                     * limitations under the License.
                     */
                    function e() {
                        var t =
                            /**
                             * @license
                             * Copyright 2019 Google Inc.
                             *
                             * Licensed under the Apache License, Version 2.0 (the "License");
                             * you may not use this file except in compliance with the License.
                             * You may obtain a copy of the License at
                             *
                             *   http://www.apache.org/licenses/LICENSE-2.0
                             *
                             * Unless required by applicable law or agreed to in writing, software
                             * distributed under the License is distributed on an "AS IS" BASIS,
                             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                             * See the License for the specific language governing permissions and
                             * limitations under the License.
                             */
                            function(e) {
                                var t = {},
                                    n = {},
                                    r = {},
                                    i = {
                                        __esModule: !0,
                                        initializeApp: function(n, r) {
                                            void 0 === r && (r = {}), "object" == typeof r && null !== r || (r = {
                                                name: r
                                            });
                                            var a = r;
                                            void 0 === a.name && (a.name = u);
                                            var s = a.name;
                                            if ("string" != typeof s || !s) throw c.create("bad-app-name", {
                                                appName: String(s)
                                            });
                                            if (o.contains(t, s)) throw c.create("duplicate-app", {
                                                appName: s
                                            });
                                            var d = new e(n, a, i);
                                            return t[s] = d, l(d, "create"), d
                                        },
                                        app: a,
                                        apps: null,
                                        SDK_VERSION: "6.6.2",
                                        INTERNAL: {
                                            registerService: function(t, u, l, d, p) {
                                                if (void 0 === p && (p = !1), n[t]) return f.debug("There were multiple attempts to register service " + t + "."), i[t];

                                                function h(e) {
                                                    if (void 0 === e && (e = a()), "function" != typeof e[t]) throw c.create("invalid-app-argument", {
                                                        appName: t
                                                    });
                                                    return e[t]()
                                                }
                                                return n[t] = u, d && (r[t] = d, s().forEach((function(e) {
                                                    d("create", e)
                                                }))), void 0 !== l && o.deepExtend(h, l), i[t] = h, e.prototype[t] = function() {
                                                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                                    return this._getService.bind(this, t).apply(this, p ? e : [])
                                                }, h
                                            },
                                            removeApp: function(e) {
                                                l(t[e], "delete"), delete t[e]
                                            },
                                            factories: n,
                                            useAsService: d
                                        }
                                    };

                                function a(e) {
                                    if (e = e || u, !o.contains(t, e)) throw c.create("no-app", {
                                        appName: e
                                    });
                                    return t[e]
                                }

                                function s() {
                                    return Object.keys(t).map((function(e) {
                                        return t[e]
                                    }))
                                }

                                function l(e, t) {
                                    for (var i = 0, o = Object.keys(n); i < o.length; i++) {
                                        var a = d(e, o[i]);
                                        if (null === a) return;
                                        r[a] && r[a](t, e)
                                    }
                                }

                                function d(e, t) {
                                    return "serverAuth" === t ? null : t
                                }
                                return i.default = i, Object.defineProperty(i, "apps", {
                                    get: s
                                }), a.App = e, i
                            }(d);
                        return t.INTERNAL = i.__assign({}, t.INTERNAL, {
                            createFirebaseNamespace: e,
                            extendNamespace: function(e) {
                                o.deepExtend(t, e)
                            },
                            createSubscribe: o.createSubscribe,
                            ErrorFactory: o.ErrorFactory,
                            deepExtend: o.deepExtend
                        }), t
                    }(),
                    b = h.initializeApp;
                h.initializeApp = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    return o.isNode() && f.warn('\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the "main" field in package.json.\n      \n      If you are using Webpack, you can specify "main" as the first item in\n      "resolve.mainFields":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the rollup-plugin-node-resolve plugin and specify "main"\n      as the first item in "mainFields", e.g. [\'main\', \'module\'].\n      https://github.com/rollup/rollup-plugin-node-resolve\n      '), b.apply(void 0, e)
                };
                var v = h;
                t.default = v, t.firebase = v
            },
            4594: (e, t, n) => {
                "use strict";
                n.r(t), n.d(t, {
                    LogLevel: () => r,
                    Logger: () => s,
                    setLogLevel: () => c
                });
                /**
                 * @license
                 * Copyright 2017 Google Inc.
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                var r, i = [];
                ! function(e) {
                    e[e.DEBUG = 0] = "DEBUG", e[e.VERBOSE = 1] = "VERBOSE", e[e.INFO = 2] = "INFO", e[e.WARN = 3] = "WARN", e[e.ERROR = 4] = "ERROR", e[e.SILENT = 5] = "SILENT"
                }(r || (r = {}));
                var o = r.INFO,
                    a = function(e, t) {
                        for (var n = [], i = 2; i < arguments.length; i++) n[i - 2] = arguments[i];
                        if (!(t < e.logLevel)) {
                            (new Date).toISOString();
                            switch (t) {
                                case r.DEBUG:
                                case r.VERBOSE:
                                case r.INFO:
                                case r.WARN:
                                case r.ERROR:
                                    break;
                                default:
                                    throw new Error("Attempted to log a message with an invalid logType (value: " + t + ")")
                            }
                        }
                    },
                    s = function() {
                        function e(e) {
                            this.name = e, this._logLevel = o, this._logHandler = a, i.push(this)
                        }
                        return Object.defineProperty(e.prototype, "logLevel", {
                            get: function() {
                                return this._logLevel
                            },
                            set: function(e) {
                                if (!(e in r)) throw new TypeError("Invalid value assigned to `logLevel`");
                                this._logLevel = e
                            },
                            enumerable: !0,
                            configurable: !0
                        }), Object.defineProperty(e.prototype, "logHandler", {
                            get: function() {
                                return this._logHandler
                            },
                            set: function(e) {
                                if ("function" != typeof e) throw new TypeError("Value assigned to `logHandler` must be a function");
                                this._logHandler = e
                            },
                            enumerable: !0,
                            configurable: !0
                        }), e.prototype.debug = function() {
                            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                            this._logHandler.apply(this, [this, r.DEBUG].concat(e))
                        }, e.prototype.log = function() {
                            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                            this._logHandler.apply(this, [this, r.VERBOSE].concat(e))
                        }, e.prototype.info = function() {
                            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                            this._logHandler.apply(this, [this, r.INFO].concat(e))
                        }, e.prototype.warn = function() {
                            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                            this._logHandler.apply(this, [this, r.WARN].concat(e))
                        }, e.prototype.error = function() {
                            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                            this._logHandler.apply(this, [this, r.ERROR].concat(e))
                        }, e
                    }();
                /**
                 * @license
                 * Copyright 2017 Google Inc.
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                function c(e) {
                    i.forEach((function(t) {
                        t.logLevel = e
                    }))
                }
            },
            1313: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var r = n(655),
                    i = {
                        NODE_CLIENT: !1,
                        NODE_ADMIN: !1,
                        SDK_VERSION: "${JSCORE_VERSION}"
                    },
                    o = function(e, t) {
                        if (!e) throw a(t)
                    },
                    a = function(e) {
                        return new Error("Firebase Database (" + i.SDK_VERSION + ") INTERNAL ASSERT FAILED: " + e)
                    },
                    s = function(e) {
                        for (var t = [], n = 0, r = 0; r < e.length; r++) {
                            var i = e.charCodeAt(r);
                            i < 128 ? t[n++] = i : i < 2048 ? (t[n++] = i >> 6 | 192, t[n++] = 63 & i | 128) : 55296 == (64512 & i) && r + 1 < e.length && 56320 == (64512 & e.charCodeAt(r + 1)) ? (i = 65536 + ((1023 & i) << 10) + (1023 & e.charCodeAt(++r)), t[n++] = i >> 18 | 240, t[n++] = i >> 12 & 63 | 128, t[n++] = i >> 6 & 63 | 128, t[n++] = 63 & i | 128) : (t[n++] = i >> 12 | 224, t[n++] = i >> 6 & 63 | 128, t[n++] = 63 & i | 128)
                        }
                        return t
                    },
                    c = {
                        byteToCharMap_: null,
                        charToByteMap_: null,
                        byteToCharMapWebSafe_: null,
                        charToByteMapWebSafe_: null,
                        ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
                        get ENCODED_VALS() {
                            return this.ENCODED_VALS_BASE + "+/="
                        },
                        get ENCODED_VALS_WEBSAFE() {
                            return this.ENCODED_VALS_BASE + "-_."
                        },
                        HAS_NATIVE_SUPPORT: "function" == typeof atob,
                        encodeByteArray: function(e, t) {
                            if (!Array.isArray(e)) throw Error("encodeByteArray takes an array as a parameter");
                            this.init_();
                            for (var n = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_, r = [], i = 0; i < e.length; i += 3) {
                                var o = e[i],
                                    a = i + 1 < e.length,
                                    s = a ? e[i + 1] : 0,
                                    c = i + 2 < e.length,
                                    u = c ? e[i + 2] : 0,
                                    l = o >> 2,
                                    d = (3 & o) << 4 | s >> 4,
                                    f = (15 & s) << 2 | u >> 6,
                                    p = 63 & u;
                                c || (p = 64, a || (f = 64)), r.push(n[l], n[d], n[f], n[p])
                            }
                            return r.join("")
                        },
                        encodeString: function(e, t) {
                            return this.HAS_NATIVE_SUPPORT && !t ? btoa(e) : this.encodeByteArray(s(e), t)
                        },
                        decodeString: function(e, t) {
                            return this.HAS_NATIVE_SUPPORT && !t ? atob(e) : function(e) {
                                for (var t = [], n = 0, r = 0; n < e.length;) {
                                    var i = e[n++];
                                    if (i < 128) t[r++] = String.fromCharCode(i);
                                    else if (i > 191 && i < 224) {
                                        var o = e[n++];
                                        t[r++] = String.fromCharCode((31 & i) << 6 | 63 & o)
                                    } else if (i > 239 && i < 365) {
                                        var a = ((7 & i) << 18 | (63 & (o = e[n++])) << 12 | (63 & (s = e[n++])) << 6 | 63 & e[n++]) - 65536;
                                        t[r++] = String.fromCharCode(55296 + (a >> 10)), t[r++] = String.fromCharCode(56320 + (1023 & a))
                                    } else {
                                        o = e[n++];
                                        var s = e[n++];
                                        t[r++] = String.fromCharCode((15 & i) << 12 | (63 & o) << 6 | 63 & s)
                                    }
                                }
                                return t.join("")
                            }(this.decodeStringToByteArray(e, t))
                        },
                        decodeStringToByteArray: function(e, t) {
                            this.init_();
                            for (var n = t ? this.charToByteMapWebSafe_ : this.charToByteMap_, r = [], i = 0; i < e.length;) {
                                var o = n[e.charAt(i++)],
                                    a = i < e.length ? n[e.charAt(i)] : 0,
                                    s = ++i < e.length ? n[e.charAt(i)] : 64,
                                    c = ++i < e.length ? n[e.charAt(i)] : 64;
                                if (++i, null == o || null == a || null == s || null == c) throw Error();
                                var u = o << 2 | a >> 4;
                                if (r.push(u), 64 !== s) {
                                    var l = a << 4 & 240 | s >> 2;
                                    if (r.push(l), 64 !== c) {
                                        var d = s << 6 & 192 | c;
                                        r.push(d)
                                    }
                                }
                            }
                            return r
                        },
                        init_: function() {
                            if (!this.byteToCharMap_) {
                                this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {};
                                for (var e = 0; e < this.ENCODED_VALS.length; e++) this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e), this.charToByteMap_[this.byteToCharMap_[e]] = e, this.byteToCharMapWebSafe_[e] = this.ENCODED_VALS_WEBSAFE.charAt(e), this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] = e, e >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] = e, this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] = e)
                            }
                        }
                    },
                    u = function(e) {
                        try {
                            return c.decodeString(e, !0)
                        } catch (e) {}
                        return null
                    };
                /**
                 * @license
                 * Copyright 2017 Google Inc.
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                function l(e, t) {
                    if (!(t instanceof Object)) return t;
                    switch (t.constructor) {
                        case Date:
                            return new Date(t.getTime());
                        case Object:
                            void 0 === e && (e = {});
                            break;
                        case Array:
                            e = [];
                            break;
                        default:
                            return t
                    }
                    for (var n in t) t.hasOwnProperty(n) && (e[n] = l(e[n], t[n]));
                    return e
                }
                /**
                 * @license
                 * Copyright 2017 Google Inc.
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                var d = function() {
                    function e() {
                        var e = this;
                        this.reject = function() {}, this.resolve = function() {}, this.promise = new Promise((function(t, n) {
                            e.resolve = t, e.reject = n
                        }))
                    }
                    return e.prototype.wrapCallback = function(e) {
                        var t = this;
                        return function(n, r) {
                            n ? t.reject(n) : t.resolve(r), "function" == typeof e && (t.promise.catch((function() {})), 1 === e.length ? e(n) : e(n, r))
                        }
                    }, e
                }();
                /**
                 * @license
                 * Copyright 2017 Google Inc.
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                function f() {
                    return "undefined" != typeof navigator && "string" == typeof navigator.userAgent ? navigator.userAgent : ""
                }
                /**
                 * @license
                 * Copyright 2017 Google Inc.
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                var p = function(e) {
                        function t(n, r) {
                            var i = e.call(this, r) || this;
                            return i.code = n, i.name = "FirebaseError", Object.setPrototypeOf(i, t.prototype), Error.captureStackTrace && Error.captureStackTrace(i, h.prototype.create), i
                        }
                        return r.__extends(t, e), t
                    }(Error),
                    h = function() {
                        function e(e, t, n) {
                            this.service = e, this.serviceName = t, this.errors = n
                        }
                        return e.prototype.create = function(e) {
                            for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                            for (var r = t[0] || {}, i = this.service + "/" + e, o = this.errors[e], a = o ? b(o, r) : "Error", s = this.serviceName + ": " + a + " (" + i + ").", c = new p(i, s), u = 0, l = Object.keys(r); u < l.length; u++) {
                                var d = l[u];
                                "_" !== d.slice(-1) && (c[d] = r[d])
                            }
                            return c
                        }, e
                    }();

                function b(e, t) {
                    return e.replace(v, (function(e, n) {
                        var r = t[n];
                        return null != r ? r.toString() : "<" + n + "?>"
                    }))
                }
                var v = /\{\$([^}]+)}/g;
                /**
                 * @license
                 * Copyright 2017 Google Inc.
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                function w(e) {
                    return JSON.parse(e)
                }
                /**
                 * @license
                 * Copyright 2017 Google Inc.
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                var y = function(e) {
                    var t = {},
                        n = {},
                        r = {},
                        i = "";
                    try {
                        var o = e.split(".");
                        t = w(u(o[0]) || ""), n = w(u(o[1]) || ""), i = o[2], r = n.d || {}, delete n.d
                    } catch (e) {}
                    return {
                        header: t,
                        claims: n,
                        data: r,
                        signature: i
                    }
                };
                /**
                 * @license
                 * Copyright 2017 Google Inc.
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                var g = function() {
                    function e() {
                        this.chain_ = [], this.buf_ = [], this.W_ = [], this.pad_ = [], this.inbuf_ = 0, this.total_ = 0, this.blockSize = 64, this.pad_[0] = 128;
                        for (var e = 1; e < this.blockSize; ++e) this.pad_[e] = 0;
                        this.reset()
                    }
                    return e.prototype.reset = function() {
                        this.chain_[0] = 1732584193, this.chain_[1] = 4023233417, this.chain_[2] = 2562383102, this.chain_[3] = 271733878, this.chain_[4] = 3285377520, this.inbuf_ = 0, this.total_ = 0
                    }, e.prototype.compress_ = function(e, t) {
                        t || (t = 0);
                        var n = this.W_;
                        if ("string" == typeof e)
                            for (var r = 0; r < 16; r++) n[r] = e.charCodeAt(t) << 24 | e.charCodeAt(t + 1) << 16 | e.charCodeAt(t + 2) << 8 | e.charCodeAt(t + 3), t += 4;
                        else
                            for (r = 0; r < 16; r++) n[r] = e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3], t += 4;
                        for (r = 16; r < 80; r++) {
                            var i = n[r - 3] ^ n[r - 8] ^ n[r - 14] ^ n[r - 16];
                            n[r] = 4294967295 & (i << 1 | i >>> 31)
                        }
                        var o, a, s = this.chain_[0],
                            c = this.chain_[1],
                            u = this.chain_[2],
                            l = this.chain_[3],
                            d = this.chain_[4];
                        for (r = 0; r < 80; r++) {
                            r < 40 ? r < 20 ? (o = l ^ c & (u ^ l), a = 1518500249) : (o = c ^ u ^ l, a = 1859775393) : r < 60 ? (o = c & u | l & (c | u), a = 2400959708) : (o = c ^ u ^ l, a = 3395469782);
                            i = (s << 5 | s >>> 27) + o + d + a + n[r] & 4294967295;
                            d = l, l = u, u = 4294967295 & (c << 30 | c >>> 2), c = s, s = i
                        }
                        this.chain_[0] = this.chain_[0] + s & 4294967295, this.chain_[1] = this.chain_[1] + c & 4294967295, this.chain_[2] = this.chain_[2] + u & 4294967295, this.chain_[3] = this.chain_[3] + l & 4294967295, this.chain_[4] = this.chain_[4] + d & 4294967295
                    }, e.prototype.update = function(e, t) {
                        if (null != e) {
                            void 0 === t && (t = e.length);
                            for (var n = t - this.blockSize, r = 0, i = this.buf_, o = this.inbuf_; r < t;) {
                                if (0 === o)
                                    for (; r <= n;) this.compress_(e, r), r += this.blockSize;
                                if ("string" == typeof e) {
                                    for (; r < t;)
                                        if (i[o] = e.charCodeAt(r), ++r, ++o === this.blockSize) {
                                            this.compress_(i), o = 0;
                                            break
                                        }
                                } else
                                    for (; r < t;)
                                        if (i[o] = e[r], ++r, ++o === this.blockSize) {
                                            this.compress_(i), o = 0;
                                            break
                                        }
                            }
                            this.inbuf_ = o, this.total_ += t
                        }
                    }, e.prototype.digest = function() {
                        var e = [],
                            t = 8 * this.total_;
                        this.inbuf_ < 56 ? this.update(this.pad_, 56 - this.inbuf_) : this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
                        for (var n = this.blockSize - 1; n >= 56; n--) this.buf_[n] = 255 & t, t /= 256;
                        this.compress_(this.buf_);
                        var r = 0;
                        for (n = 0; n < 5; n++)
                            for (var i = 24; i >= 0; i -= 8) e[r] = this.chain_[n] >> i & 255, ++r;
                        return e
                    }, e
                }();
                var _ = function() {
                    function e(e, t) {
                        var n = this;
                        this.observers = [], this.unsubscribes = [], this.observerCount = 0, this.task = Promise.resolve(), this.finalized = !1, this.onNoObservers = t, this.task.then((function() {
                            e(n)
                        })).catch((function(e) {
                            n.error(e)
                        }))
                    }
                    return e.prototype.next = function(e) {
                        this.forEachObserver((function(t) {
                            t.next(e)
                        }))
                    }, e.prototype.error = function(e) {
                        this.forEachObserver((function(t) {
                            t.error(e)
                        })), this.close(e)
                    }, e.prototype.complete = function() {
                        this.forEachObserver((function(e) {
                            e.complete()
                        })), this.close()
                    }, e.prototype.subscribe = function(e, t, n) {
                        var r, i = this;
                        if (void 0 === e && void 0 === t && void 0 === n) throw new Error("Missing Observer.");
                        void 0 === (r = function(e, t) {
                            if ("object" != typeof e || null === e) return !1;
                            for (var n = 0, r = t; n < r.length; n++) {
                                var i = r[n];
                                if (i in e && "function" == typeof e[i]) return !0
                            }
                            return !1
                        }(e, ["next", "error", "complete"]) ? e : {
                            next: e,
                            error: t,
                            complete: n
                        }).next && (r.next = m), void 0 === r.error && (r.error = m), void 0 === r.complete && (r.complete = m);
                        var o = this.unsubscribeOne.bind(this, this.observers.length);
                        return this.finalized && this.task.then((function() {
                            try {
                                i.finalError ? r.error(i.finalError) : r.complete()
                            } catch (e) {}
                        })), this.observers.push(r), o
                    }, e.prototype.unsubscribeOne = function(e) {
                        void 0 !== this.observers && void 0 !== this.observers[e] && (delete this.observers[e], this.observerCount -= 1, 0 === this.observerCount && void 0 !== this.onNoObservers && this.onNoObservers(this))
                    }, e.prototype.forEachObserver = function(e) {
                        if (!this.finalized)
                            for (var t = 0; t < this.observers.length; t++) this.sendOne(t, e)
                    }, e.prototype.sendOne = function(e, t) {
                        var n = this;
                        this.task.then((function() {
                            if (void 0 !== n.observers && void 0 !== n.observers[e]) try {
                                t(n.observers[e])
                            } catch (e) {
                                "undefined" != typeof console && console.error
                            }
                        }))
                    }, e.prototype.close = function(e) {
                        var t = this;
                        this.finalized || (this.finalized = !0, void 0 !== e && (this.finalError = e), this.task.then((function() {
                            t.observers = void 0, t.onNoObservers = void 0
                        })))
                    }, e
                }();

                function m() {}
                /**
                 * @license
                 * Copyright 2017 Google Inc.
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                function M(e, t, n) {
                    var r = "";
                    switch (t) {
                        case 1:
                            r = n ? "first" : "First";
                            break;
                        case 2:
                            r = n ? "second" : "Second";
                            break;
                        case 3:
                            r = n ? "third" : "Third";
                            break;
                        case 4:
                            r = n ? "fourth" : "Fourth";
                            break;
                        default:
                            throw new Error("errorPrefix called with argumentNumber > 4.  Need to update it?")
                    }
                    var i = e + " failed: ";
                    return i += r + " argument "
                }
                t.CONSTANTS = i, t.Deferred = d, t.ErrorFactory = h, t.FirebaseError = p, t.Sha1 = g, t.assert = o, t.assertionError = a, t.async = function(e, t) {
                        return function() {
                            for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                            Promise.resolve(!0).then((function() {
                                e.apply(void 0, n)
                            })).catch((function(e) {
                                t && t(e)
                            }))
                        }
                    }, t.base64 = c, t.base64Decode = u, t.base64Encode = function(e) {
                        var t = s(e);
                        return c.encodeByteArray(t, !0)
                    }, t.contains =
                    /**
                     * @license
                     * Copyright 2017 Google Inc.
                     *
                     * Licensed under the Apache License, Version 2.0 (the "License");
                     * you may not use this file except in compliance with the License.
                     * You may obtain a copy of the License at
                     *
                     *   http://www.apache.org/licenses/LICENSE-2.0
                     *
                     * Unless required by applicable law or agreed to in writing, software
                     * distributed under the License is distributed on an "AS IS" BASIS,
                     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                     * See the License for the specific language governing permissions and
                     * limitations under the License.
                     */
                    function(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t)
                    }, t.createSubscribe = function(e, t) {
                        var n = new _(e, t);
                        return n.subscribe.bind(n)
                    }, t.decode = y, t.deepCopy =
                    /**
                     * @license
                     * Copyright 2017 Google Inc.
                     *
                     * Licensed under the Apache License, Version 2.0 (the "License");
                     * you may not use this file except in compliance with the License.
                     * You may obtain a copy of the License at
                     *
                     *   http://www.apache.org/licenses/LICENSE-2.0
                     *
                     * Unless required by applicable law or agreed to in writing, software
                     * distributed under the License is distributed on an "AS IS" BASIS,
                     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                     * See the License for the specific language governing permissions and
                     * limitations under the License.
                     */
                    function(e) {
                        return l(void 0, e)
                    }, t.deepExtend = l, t.errorPrefix = M, t.getUA = f, t.isAdmin = function(e) {
                        var t = y(e).claims;
                        return "object" == typeof t && !0 === t.admin
                    }, t.isBrowser = function() {
                        return "object" == typeof self && self.self === self
                    }, t.isEmpty = function(e) {
                        for (var t in e)
                            if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
                        return !0
                    }, t.isMobileCordova = function() {
                        return "undefined" != typeof window && !!(window.cordova || window.phonegap || window.PhoneGap) && /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(f())
                    }, t.isNode = function() {
                        try {
                            return "[object process]" === Object.prototype.toString.call(n.g.process)
                        } catch (e) {
                            return !1
                        }
                    }, t.isNodeSdk = function() {
                        return !0 === i.NODE_CLIENT || !0 === i.NODE_ADMIN
                    }, t.isReactNative = function() {
                        return "object" == typeof navigator && "ReactNative" === navigator.product
                    }, t.isValidFormat = function(e) {
                        var t = y(e).claims;
                        return !!t && "object" == typeof t && t.hasOwnProperty("iat")
                    }, t.isValidTimestamp = function(e) {
                        var t = y(e).claims,
                            n = Math.floor((new Date).getTime() / 1e3),
                            r = 0,
                            i = 0;
                        return "object" == typeof t && (t.hasOwnProperty("nbf") ? r = t.nbf : t.hasOwnProperty("iat") && (r = t.iat), i = t.hasOwnProperty("exp") ? t.exp : r + 86400), !!n && !!r && !!i && n >= r && n <= i
                    }, t.issuedAtTime = function(e) {
                        var t = y(e).claims;
                        return "object" == typeof t && t.hasOwnProperty("iat") ? t.iat : null
                    }, t.jsonEval = w, t.map = function(e, t, n) {
                        var r = {};
                        for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (r[i] = t.call(n, e[i], i, e));
                        return r
                    }
                    /**
                     * @license
                     * Copyright 2017 Google Inc.
                     *
                     * Licensed under the Apache License, Version 2.0 (the "License");
                     * you may not use this file except in compliance with the License.
                     * You may obtain a copy of the License at
                     *
                     *   http://www.apache.org/licenses/LICENSE-2.0
                     *
                     * Unless required by applicable law or agreed to in writing, software
                     * distributed under the License is distributed on an "AS IS" BASIS,
                     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                     * See the License for the specific language governing permissions and
                     * limitations under the License.
                     */
                    , t.querystring = function(e) {
                        for (var t = [], n = function(e, n) {
                                Array.isArray(n) ? n.forEach((function(n) {
                                    t.push(encodeURIComponent(e) + "=" + encodeURIComponent(n))
                                })) : t.push(encodeURIComponent(e) + "=" + encodeURIComponent(n))
                            }, r = 0, i = Object.entries(e); r < i.length; r++) {
                            var o = i[r];
                            n(o[0], o[1])
                        }
                        return t.length ? "&" + t.join("&") : ""
                    }, t.querystringDecode = function(e) {
                        var t = {};
                        return e.replace(/^\?/, "").split("&").forEach((function(e) {
                            if (e) {
                                var n = e.split("=");
                                t[n[0]] = n[1]
                            }
                        })), t
                    }, t.safeGet = function(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t) ? e[t] : void 0
                    }, t.stringLength = function(e) {
                        for (var t = 0, n = 0; n < e.length; n++) {
                            var r = e.charCodeAt(n);
                            r < 128 ? t++ : r < 2048 ? t += 2 : r >= 55296 && r <= 56319 ? (t += 4, n++) : t += 3
                        }
                        return t
                    }, t.stringToByteArray = function(e) {
                        for (var t = [], n = 0, r = 0; r < e.length; r++) {
                            var i = e.charCodeAt(r);
                            if (i >= 55296 && i <= 56319) {
                                var a = i - 55296;
                                r++, o(r < e.length, "Surrogate pair missing trail surrogate."), i = 65536 + (a << 10) + (e.charCodeAt(r) - 56320)
                            }
                            i < 128 ? t[n++] = i : i < 2048 ? (t[n++] = i >> 6 | 192, t[n++] = 63 & i | 128) : i < 65536 ? (t[n++] = i >> 12 | 224, t[n++] = i >> 6 & 63 | 128, t[n++] = 63 & i | 128) : (t[n++] = i >> 18 | 240, t[n++] = i >> 12 & 63 | 128, t[n++] = i >> 6 & 63 | 128, t[n++] = 63 & i | 128)
                        }
                        return t
                    }, t.stringify = function(e) {
                        return JSON.stringify(e)
                    }, t.validateArgCount = function(e, t, n, r) {
                        var i;
                        if (r < t ? i = "at least " + t : r > n && (i = 0 === n ? "none" : "no more than " + n), i) throw new Error(e + " failed: Was called with " + r + (1 === r ? " argument." : " arguments.") + " Expects " + i + ".")
                    }, t.validateCallback = function(e, t, n, r) {
                        if ((!r || n) && "function" != typeof n) throw new Error(M(e, t, r) + "must be a valid function.")
                    }, t.validateContextObject = function(e, t, n, r) {
                        if ((!r || n) && ("object" != typeof n || null === n)) throw new Error(M(e, t, r) + "must be a valid context object.")
                    }
                    /**
                     * @license
                     * Copyright 2017 Google Inc.
                     *
                     * Licensed under the Apache License, Version 2.0 (the "License");
                     * you may not use this file except in compliance with the License.
                     * You may obtain a copy of the License at
                     *
                     *   http://www.apache.org/licenses/LICENSE-2.0
                     *
                     * Unless required by applicable law or agreed to in writing, software
                     * distributed under the License is distributed on an "AS IS" BASIS,
                     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                     * See the License for the specific language governing permissions and
                     * limitations under the License.
                     */
                    , t.validateNamespace = function(e, t, n, r) {
                        if ((!r || n) && "string" != typeof n) throw new Error(M(e, t, r) + "must be a valid firebase namespace.")
                    }
            },
            1923: (e, t, n) => {
                "use strict";
                var r, i = (r = n(5752)) && "object" == typeof r && "default" in r ? r.default : r;
                /**
                 * @license
                 * Copyright 2018 Google Inc.
                 *
                 * Licensed under the Apache License, Version 2.0 (the "License");
                 * you may not use this file except in compliance with the License.
                 * You may obtain a copy of the License at
                 *
                 *   http://www.apache.org/licenses/LICENSE-2.0
                 *
                 * Unless required by applicable law or agreed to in writing, software
                 * distributed under the License is distributed on an "AS IS" BASIS,
                 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                 * See the License for the specific language governing permissions and
                 * limitations under the License.
                 */
                e.exports = i
            },
            6808: (e, t, n) => {
                var r, i;
                /*!
                 * JavaScript Cookie v2.2.1
                 * https://github.com/js-cookie/js-cookie
                 *
                 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
                 * Released under the MIT license
                 */
                ! function(o) {
                    if (void 0 === (i = "function" == typeof(r = o) ? r.call(t, n, t, e) : r) || (e.exports = i), !0, e.exports = o(), !!0) {
                        var a = window.Cookies,
                            s = window.Cookies = o();
                        s.noConflict = function() {
                            return window.Cookies = a, s
                        }
                    }
                }((function() {
                    function e() {
                        for (var e = 0, t = {}; e < arguments.length; e++) {
                            var n = arguments[e];
                            for (var r in n) t[r] = n[r]
                        }
                        return t
                    }

                    function t(e) {
                        return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
                    }
                    return function n(r) {
                        function i() {}

                        function o(t, n, o) {
                            if ("undefined" != typeof document) {
                                "number" == typeof(o = e({
                                    path: "/"
                                }, i.defaults, o)).expires && (o.expires = new Date(1 * new Date + 864e5 * o.expires)), o.expires = o.expires ? o.expires.toUTCString() : "";
                                try {
                                    var a = JSON.stringify(n);
                                    /^[\{\[]/.test(a) && (n = a)
                                } catch (e) {}
                                n = r.write ? r.write(n, t) : encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                                var s = "";
                                for (var c in o) o[c] && (s += "; " + c, !0 !== o[c] && (s += "=" + o[c].split(";")[0]));
                                return document.cookie = t + "=" + n + s
                            }
                        }

                        function a(e, n) {
                            if ("undefined" != typeof document) {
                                for (var i = {}, o = document.cookie ? document.cookie.split("; ") : [], a = 0; a < o.length; a++) {
                                    var s = o[a].split("="),
                                        c = s.slice(1).join("=");
                                    n || '"' !== c.charAt(0) || (c = c.slice(1, -1));
                                    try {
                                        var u = t(s[0]);
                                        if (c = (r.read || r)(c, u) || t(c), n) try {
                                            c = JSON.parse(c)
                                        } catch (e) {}
                                        if (i[u] = c, e === u) break
                                    } catch (e) {}
                                }
                                return e ? i[e] : i
                            }
                        }
                        return i.set = o, i.get = function(e) {
                            return a(e, !1)
                        }, i.getJSON = function(e) {
                            return a(e, !0)
                        }, i.remove = function(t, n) {
                            o(t, "", e(n, {
                                expires: -1
                            }))
                        }, i.defaults = {}, i.withConverter = n, i
                    }((function() {}))
                }))
            },
            1296: (e, t, n) => {
                var r = /^\s+|\s+$/g,
                    i = /^[-+]0x[0-9a-f]+$/i,
                    o = /^0b[01]+$/i,
                    a = /^0o[0-7]+$/i,
                    s = parseInt,
                    c = "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
                    u = "object" == typeof self && self && self.Object === Object && self,
                    l = c || u || Function("return this")(),
                    d = Object.prototype.toString,
                    f = Math.max,
                    p = Math.min,
                    h = function() {
                        return l.Date.now()
                    };

                function b(e) {
                    var t = typeof e;
                    return !!e && ("object" == t || "function" == t)
                }

                function v(e) {
                    if ("number" == typeof e) return e;
                    if (function(e) {
                            return "symbol" == typeof e || function(e) {
                                return !!e && "object" == typeof e
                            }(e) && "[object Symbol]" == d.call(e)
                        }(e)) return NaN;
                    if (b(e)) {
                        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                        e = b(t) ? t + "" : t
                    }
                    if ("string" != typeof e) return 0 === e ? e : +e;
                    e = e.replace(r, "");
                    var n = o.test(e);
                    return n || a.test(e) ? s(e.slice(2), n ? 2 : 8) : i.test(e) ? NaN : +e
                }
                e.exports = function(e, t, n) {
                    var r, i, o, a, s, c, u = 0,
                        l = !1,
                        d = !1,
                        w = !0;
                    if ("function" != typeof e) throw new TypeError("Expected a function");

                    function y(t) {
                        var n = r,
                            o = i;
                        return r = i = void 0, u = t, a = e.apply(o, n)
                    }

                    function g(e) {
                        return u = e, s = setTimeout(m, t), l ? y(e) : a
                    }

                    function _(e) {
                        var n = e - c;
                        return void 0 === c || n >= t || n < 0 || d && e - u >= o
                    }

                    function m() {
                        var e = h();
                        if (_(e)) return M(e);
                        s = setTimeout(m, function(e) {
                            var n = t - (e - c);
                            return d ? p(n, o - (e - u)) : n
                        }(e))
                    }

                    function M(e) {
                        return s = void 0, w && r ? y(e) : (r = i = void 0, a)
                    }

                    function E() {
                        var e = h(),
                            n = _(e);
                        if (r = arguments, i = this, c = e, n) {
                            if (void 0 === s) return g(c);
                            if (d) return s = setTimeout(m, t), y(c)
                        }
                        return void 0 === s && (s = setTimeout(m, t)), a
                    }
                    return t = v(t) || 0, b(n) && (l = !!n.leading, o = (d = "maxWait" in n) ? f(v(n.maxWait) || 0, t) : o, w = "trailing" in n ? !!n.trailing : w), E.cancel = function() {
                        void 0 !== s && clearTimeout(s), u = 0, r = c = i = s = void 0
                    }, E.flush = function() {
                        return void 0 === s ? a : M(h())
                    }, E
                }
            },
            655: (e, t, n) => {
                "use strict";
                n.r(t), n.d(t, {
                    __extends: () => i,
                    __assign: () => o,
                    __rest: () => a,
                    __decorate: () => s,
                    __param: () => c,
                    __metadata: () => u,
                    __awaiter: () => l,
                    __generator: () => d,
                    __exportStar: () => f,
                    __values: () => p,
                    __read: () => h,
                    __spread: () => b,
                    __spreadArrays: () => v,
                    __await: () => w,
                    __asyncGenerator: () => y,
                    __asyncDelegator: () => g,
                    __asyncValues: () => _,
                    __makeTemplateObject: () => m,
                    __importStar: () => M,
                    __importDefault: () => E
                });
                /*! *****************************************************************************
                Copyright (c) Microsoft Corporation. All rights reserved.
                Licensed under the Apache License, Version 2.0 (the "License"); you may not use
                this file except in compliance with the License. You may obtain a copy of the
                License at http://www.apache.org/licenses/LICENSE-2.0

                THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
                KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
                WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
                MERCHANTABLITY OR NON-INFRINGEMENT.

                See the Apache Version 2.0 License for specific language governing permissions
                and limitations under the License.
                ***************************************************************************** */
                var r = function(e, t) {
                    return (r = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                        })(e, t)
                };

                function i(e, t) {
                    function n() {
                        this.constructor = e
                    }
                    r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
                }
                var o = function() {
                    return (o = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }).apply(this, arguments)
                };

                function a(e, t) {
                    var n = {};
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                    if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                        var i = 0;
                        for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
                    }
                    return n
                }

                function s(e, t, n, r) {
                    var i, o = arguments.length,
                        a = o < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, r);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (o < 3 ? i(a) : o > 3 ? i(t, n, a) : i(t, n)) || a);
                    return o > 3 && a && Object.defineProperty(t, n, a), a
                }

                function c(e, t) {
                    return function(n, r) {
                        t(n, r, e)
                    }
                }

                function u(e, t) {
                    if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
                }

                function l(e, t, n, r) {
                    return new(n || (n = Promise))((function(i, o) {
                        function a(e) {
                            try {
                                c(r.next(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function s(e) {
                            try {
                                c(r.throw(e))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function c(e) {
                            e.done ? i(e.value) : new n((function(t) {
                                t(e.value)
                            })).then(a, s)
                        }
                        c((r = r.apply(e, t || [])).next())
                    }))
                }

                function d(e, t) {
                    var n, r, i, o, a = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return o = {
                        next: s(0),
                        throw: s(1),
                        return: s(2)
                    }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                        return this
                    }), o;

                    function s(o) {
                        return function(s) {
                            return function(o) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; a;) try {
                                    if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                    switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            i = o;
                                            break;
                                        case 4:
                                            return a.label++, {
                                                value: o[1],
                                                done: !1
                                            };
                                        case 5:
                                            a.label++, r = o[1], o = [0];
                                            continue;
                                        case 7:
                                            o = a.ops.pop(), a.trys.pop();
                                            continue;
                                        default:
                                            if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                                a = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                                a.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && a.label < i[1]) {
                                                a.label = i[1], i = o;
                                                break
                                            }
                                            if (i && a.label < i[2]) {
                                                a.label = i[2], a.ops.push(o);
                                                break
                                            }
                                            i[2] && a.ops.pop(), a.trys.pop();
                                            continue
                                    }
                                    o = t.call(e, a)
                                } catch (e) {
                                    o = [6, e], r = 0
                                } finally {
                                    n = i = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, s])
                        }
                    }
                }

                function f(e, t) {
                    for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n])
                }

                function p(e) {
                    var t = "function" == typeof Symbol && e[Symbol.iterator],
                        n = 0;
                    return t ? t.call(e) : {
                        next: function() {
                            return e && n >= e.length && (e = void 0), {
                                value: e && e[n++],
                                done: !e
                            }
                        }
                    }
                }

                function h(e, t) {
                    var n = "function" == typeof Symbol && e[Symbol.iterator];
                    if (!n) return e;
                    var r, i, o = n.call(e),
                        a = [];
                    try {
                        for (;
                            (void 0 === t || t-- > 0) && !(r = o.next()).done;) a.push(r.value)
                    } catch (e) {
                        i = {
                            error: e
                        }
                    } finally {
                        try {
                            r && !r.done && (n = o.return) && n.call(o)
                        } finally {
                            if (i) throw i.error
                        }
                    }
                    return a
                }

                function b() {
                    for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(h(arguments[t]));
                    return e
                }

                function v() {
                    for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
                    var r = Array(e),
                        i = 0;
                    for (t = 0; t < n; t++)
                        for (var o = arguments[t], a = 0, s = o.length; a < s; a++, i++) r[i] = o[a];
                    return r
                }

                function w(e) {
                    return this instanceof w ? (this.v = e, this) : new w(e)
                }

                function y(e, t, n) {
                    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                    var r, i = n.apply(e, t || []),
                        o = [];
                    return r = {}, a("next"), a("throw"), a("return"), r[Symbol.asyncIterator] = function() {
                        return this
                    }, r;

                    function a(e) {
                        i[e] && (r[e] = function(t) {
                            return new Promise((function(n, r) {
                                o.push([e, t, n, r]) > 1 || s(e, t)
                            }))
                        })
                    }

                    function s(e, t) {
                        try {
                            (n = i[e](t)).value instanceof w ? Promise.resolve(n.value.v).then(c, u) : l(o[0][2], n)
                        } catch (e) {
                            l(o[0][3], e)
                        }
                        var n
                    }

                    function c(e) {
                        s("next", e)
                    }

                    function u(e) {
                        s("throw", e)
                    }

                    function l(e, t) {
                        e(t), o.shift(), o.length && s(o[0][0], o[0][1])
                    }
                }

                function g(e) {
                    var t, n;
                    return t = {}, r("next"), r("throw", (function(e) {
                        throw e
                    })), r("return"), t[Symbol.iterator] = function() {
                        return this
                    }, t;

                    function r(r, i) {
                        t[r] = e[r] ? function(t) {
                            return (n = !n) ? {
                                value: w(e[r](t)),
                                done: "return" === r
                            } : i ? i(t) : t
                        } : i
                    }
                }

                function _(e) {
                    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                    var t, n = e[Symbol.asyncIterator];
                    return n ? n.call(e) : (e = p(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() {
                        return this
                    }, t);

                    function r(n) {
                        t[n] = e[n] && function(t) {
                            return new Promise((function(r, i) {
                                (function(e, t, n, r) {
                                    Promise.resolve(r).then((function(t) {
                                        e({
                                            value: t,
                                            done: n
                                        })
                                    }), t)
                                })(r, i, (t = e[n](t)).done, t.value)
                            }))
                        }
                    }
                }

                function m(e, t) {
                    return Object.defineProperty ? Object.defineProperty(e, "raw", {
                        value: t
                    }) : e.raw = t, e
                }

                function M(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }

                function E(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                }
            }
        },
        t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var i = t[r] = {
            exports: {}
        };
        return e[r](i, i.exports, n), i.exports
    }
    n.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return n.d(t, {
            a: t
        }), t
    }, n.d = (e, t) => {
        for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
        })
    }, n.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, (() => {
        "use strict";

        function e(e, t) {
            return fetch(e, t).then((function(e) {
                if (!e.ok) throw Error(e.statusText);
                return e.json()
            }))
        }

        function t(e, t) {
            return fetch(e, t).then((function(e) {
                if (!e.ok) throw Error(e.statusText);
                return e.text()
            }))
        }
        var r, i, o;
        ! function(e) {
            e.TEST = "test", e.STAGING = "staging", e.PRODUCTION = "production"
        }(r || (r = {})),
        function(e) {
            e.UNSUPPORTED_BROWSER = "unsupported-browser", e.INCOGNITO_BROWSER = "incognito-browser", e.CONFIGURATION_FAILED = "configuration-failed", e.MISSING_APP_CONFIG_VALUES = "missing-app-config-values", e.SW_REGISTRATION_FAILED = "sw-registration-failed", e.SW_UNREGISTRATION_FAILED = "sw-unregistration-failed", e.FIREBASE_INITIALIZATION_FAILED = "firebase-initialization-failed", e.FIREBASE_REGISTRAION_FAILED = "firebase-registration-failed", e.FIREBASE_TOKEN_UPDATE_FAILED = "firebase-token-update-failed", e.FIREBASE_TOKEN_DELETE_FAILED = "firebase-token-delete-failed", e.NAJVA_SUBSCRIPTION_FAILED = "najva-subscription-failed", e.COOKIE_TOKEN_UPDATE_FAILED = "najva-token-update-failed", e.ADD_ATTRIBUTE_FAILED = "add-attribute-failed", e.DELETE_ATTRIBUTE_FAILED = "delete-attribute-failed", e.GET_ATTRIBUTES_FAILED = "get-attributes-failed", e.INVALID_KEY_FOR_IDB = "invalid-key-for-idb", e.DB_UPDATE_FAILED = "db-update-failed", e.DB_READ_FAILED = "db-read-failed", e.DB_DELETE_FAILED = "db-delete-failed", e.DB_OBJ_STORE_CLEAR_FAILED = "db-obj-store-clear-failed", e.SEND_LOCATION_FAILED = "send-location-failed", e.UPDATE_USER_ACTIVITY_FAILED = "update-user-activity-failed", e.REPORT_SCRIPT_VERSION_FAILED = "report-script-version-failed", e.LOAD_YEKTANET_ANALYTICS_SCRIPT_FAILED = "load-yektanet-analytics-script-failed", e.INIT_EMAIL_FAILED = "init-email-failed"
        }(o || (o = {}));
        var a = "\nOriginal Error -> {$error}",
            s = ((i = {})[o.UNSUPPORTED_BROWSER] = "This browser doesn't support the API's required to use the firebase and najva SDK." + a, i[o.INCOGNITO_BROWSER] = "najva sdk will not run in brower incognito mode." + a, i[o.MISSING_APP_CONFIG_VALUES] = "Missing App configuration value: {$valueName}.", i[o.CONFIGURATION_FAILED] = "failed to get configuration file from {$url}." + a, i[o.SW_REGISTRATION_FAILED] = "We are unable to register the default service worker. {$browserErrorMessage}." + a, i[o.SW_UNREGISTRATION_FAILED] = "We are unable to unregister the najva-messaging service worker." + a, i[o.FIREBASE_INITIALIZATION_FAILED] = "failed to initialize firebase app. {$firebaseErrorMessage}." + a, i[o.FIREBASE_REGISTRAION_FAILED] = "failed to get registration token from firebase. {$firebaseErrorMessage}." + a, i[o.FIREBASE_TOKEN_UPDATE_FAILED] = "failed to update firebase token. {$firebaseErrorMessage}.", i[o.FIREBASE_TOKEN_DELETE_FAILED] = "failed to delete firebase token. {$firebaseErrorMessage}." + a, i[o.NAJVA_SUBSCRIPTION_FAILED] = "failed to subscribe firebase token {$firebaseToken} to najva." + a, i[o.COOKIE_TOKEN_UPDATE_FAILED] = "failed to update cookie_token for najva user {$najva_token}." + a, i[o.ADD_ATTRIBUTE_FAILED] = "failed to add attribute {$object}." + a, i[o.DELETE_ATTRIBUTE_FAILED] = "failed to delete attribute {$key}." + a, i[o.GET_ATTRIBUTES_FAILED] = "failed to get attributes." + a, i[o.INVALID_KEY_FOR_IDB] = "faild to update indexed db. the {$key} is not a valid key for object store {$objStoreName}." + a, i[o.DB_UPDATE_FAILED] = "failed to update {$key} with {$value} for {$objectStoreName}. {$browserErrorMessage}." + a, i[o.DB_DELETE_FAILED] = "failed to update {$key} with {$value} for {$objectStoreName}. {$browserErrorMessage}." + a, i[o.DB_READ_FAILED] = "failed to read {$key} from {$objectStoreName}. {$browserErrorMessage}." + a, i[o.DB_OBJ_STORE_CLEAR_FAILED] = "failed to clear {$objectStoreName}. {$browserErrorMessage}." + a, i[o.SEND_LOCATION_FAILED] = "failed to send location to the server: {$errorStatus}.", i[o.UPDATE_USER_ACTIVITY_FAILED] = "failed to update user activity {$browserErrorMessage}." + a, i[o.REPORT_SCRIPT_VERSION_FAILED] = "failed to report version {$version} to {$url}. {$browserErrorMessage}." + a, i[o.LOAD_YEKTANET_ANALYTICS_SCRIPT_FAILED] = "failed to load tag script with app_id: {$appId}." + a, i[o.INIT_EMAIL_FAILED] = "failed to init email." + a, i),
            c = /\{\$([^}]+)}/g;

        function u(e, t) {
            var n = t || {},
                r = s[e],
                i = r ? function(e, t) {
                    return e.replace(c, (function(e, n) {
                        var r = t[n];
                        return null != r ? String(r) : "<" + n + "?>"
                    }))
                }(r, n) : "Error";
            return new Error(i)
        }
        var l, d = {
                messaging_sender_id: "334645784830",
                najva_settings: {
                    campaign_id: "",
                    app_id: "",
                    without_popup: !0,
                    with_popup: !1,
                    api_key: "fd4f22c3-0f92-43ee-b7ed-8b905eb9c7ba",
                    najva_subdomain: "https://app.najva.com/",
                    website_id: 18846,
                    location_permission: !0,
                    request_text: "آیا میخواهید پربازدیدترین موضوعات برای شما ارسال شود؟",
                    request_description: "",
                    accept_text: "بله",
                    denied_text: "خیر",
                    request_icon: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjY0cHgiIGhlaWdodD0iNjRweCI+PGNpcmNsZSBzdHlsZT0iZmlsbDojRkZGN0MwOyIgY3g9IjI1NiIgY3k9IjI1NiIgcj0iMTc5LjU3NCIvPjxjaXJjbGUgc3R5bGU9ImZpbGw6I0ZGRjA4MjsiIGN4PSIyNTYiIGN5PSIyNTYiIHI9IjE1My45MjEiLz48Y2lyY2xlIHN0eWxlPSJmaWxsOiNGRkM4NTA7IiBjeD0iMjU2IiBjeT0iMzUwLjA2MyIgcj0iNDIuNzU2Ii8+PHBhdGggc3R5bGU9ImZpbGw6I0ZGREM2NDsiIGQ9Ik0zNTAuMDYzLDI4MS4yMDV2LTU5LjQxYzAtNTEuOTQ5LTQyLjExMy05NC4wNjMtOTQuMDYzLTk0LjA2M2wwLDAgIGMtNTEuOTQ5LDAtOTQuMDYzLDQyLjExMy05NC4wNjMsOTQuMDYzdjU5LjQxYzAsNS44MjYtMS45ODMsMTEuNDc3LTUuNjIxLDE2LjAyNmwtMjUuODA4LDMyLjI2MSAgYy0xLjc5NiwyLjI0NS0yLjc3NSw1LjAzNC0yLjc3NSw3LjkxbDAsMGMwLDYuOTkzLDUuNjY4LDEyLjY2MSwxMi42NjEsMTIuNjYxaDIzMS4yMTJjNi45OTMsMCwxMi42NjEtNS42NjgsMTIuNjYxLTEyLjY2MWwwLDAgIGMwLTIuODc1LTAuOTc4LTUuNjY0LTIuNzc1LTcuOTFsLTI1LjgwOC0zMi4yNjFDMzUyLjA0NSwyOTIuNjgyLDM1MC4wNjMsMjg3LjAzMSwzNTAuMDYzLDI4MS4yMDV6Ii8+PHBhdGggc3R5bGU9ImZpbGw6I0ZGQzg1MDsiIGQ9Ik0xNjEuOTM3LDIyMS43OTV2NTkuNDFjMCw1LjgyNi0xLjk4MywxMS40NzctNS42MjEsMTYuMDI2bC0yNS44MDgsMzIuMjYxICBjLTEuNzk2LDIuMjQ1LTIuNzc1LDUuMDM0LTIuNzc1LDcuOTA5YzAsNi45OTMsNS42NjgsMTIuNjYxLDEyLjY2MSwxMi42NjFoNDYuMjQyYy00LjE5NSwwLTcuNTk3LTUuNjY4LTcuNTk3LTEyLjY2MSAgYzAtMi44NzQsMC41ODctNS42NjQsMS42NjQtNy45MDlsMTUuNDg1LTMyLjI2MWMyLjE4My00LjU0OCwzLjM3My0xMC4yLDMuMzczLTE2LjAyNnYtNTkuNDFjMC01MS45NDksMjUuMjY4LTk0LjA2Myw1Ni40MzgtOTQuMDYzICBDMjA0LjA1MSwxMjcuNzMzLDE2MS45MzcsMTY5Ljg0NiwxNjEuOTM3LDIyMS43OTV6Ii8+PHBhdGggZD0iTTM2MS45NDQsMjkyLjIyNGMtMi40OTMtMy4xMTYtMy44NjUtNy4wMjgtMy44NjUtMTEuMDE4di01OS40MWMwLTU2LjI4Ny00NS43OTItMTAyLjA3OS0xMDIuMDc5LTEwMi4wNzkgIHMtMTAyLjA3OSw0NS43OTItMTAyLjA3OSwxMDIuMDc5djU5LjQxYzAsMy45ODktMS4zNzIsNy45MDItMy44NjUsMTEuMDE4bC0yNS44MDgsMzIuMjYxYy0yLjkyMiwzLjY1Mi00LjUzMSw4LjI0LTQuNTMxLDEyLjkxOCAgYzAsMTEuNDAyLDkuMjc2LDIwLjY3OCwyMC42NzgsMjAuNjc4aDY1LjQ3MmMzLjg1NSwyNC4yLDI0Ljg2Niw0Mi43NTYsNTAuMTMzLDQyLjc1NnM0Ni4yNzgtMTguNTU2LDUwLjEzMy00Mi43NTZoNjUuNDcyICBjMTEuNDAyLDAsMjAuNjc4LTkuMjc2LDIwLjY3OC0yMC42NzhjMC00LjY3Ny0xLjYwOS05LjI2NS00LjUzMS0xMi45MThMMzYxLjk0NCwyOTIuMjI0eiBNMjU2LDM4NC44MDIgIGMtMTYuMzk2LDAtMzAuMTY1LTExLjQyMS0zMy43OTUtMjYuNzIyaDY3LjU4OUMyODYuMTY1LDM3My4zOCwyNzIuMzk2LDM4NC44MDIsMjU2LDM4NC44MDJ6IE0zNzEuNjA2LDM0Mi4wNDZIMTQwLjM5NCAgYy0yLjU2MSwwLTQuNjQ0LTIuMDgzLTQuNjQ0LTQuNjQ0YzAtMS4wNTEsMC4zNjEtMi4wODEsMS4wMTgtMi45MDJsMjUuODA4LTMyLjI2MWM0Ljc1OS01Ljk0Nyw3LjM3OS0xMy40MTgsNy4zNzktMjEuMDM0di01OS40MDkgIGMwLTQ3LjQ0NiwzOC42LTg2LjA0Niw4Ni4wNDYtODYuMDQ2czg2LjA0NiwzOC42LDg2LjA0Niw4Ni4wNDZ2NTkuNDFjMCw3LjYxNiwyLjYyLDE1LjA4NSw3LjM3OSwyMS4wMzRsMjUuODA4LDMyLjI2ICBjMC42NTYsMC44MjEsMS4wMTgsMS44NSwxLjAxOCwyLjkwMkMzNzYuMjUxLDMzOS45NjMsMzc0LjE2NywzNDIuMDQ2LDM3MS42MDYsMzQyLjA0NnoiLz48cGF0aCBkPSJNMjkzLjE3NSwxNzQuMjM3Yy0zLjE2NSwzLjA5Ni0zLjIyMyw4LjE3Mi0wLjEyNywxMS4zMzdjOS41NCw5Ljc1NSwxNC43OTMsMjIuNjE4LDE0Ljc5MywzNi4yMjJ2MjUuNjUzICBjMCw0LjQyNywzLjU4OSw4LjAxNyw4LjAxNyw4LjAxN2M0LjQyNywwLDguMDE3LTMuNTg5LDguMDE3LTguMDE3di0yNS42NTNjMC0xNy44MTgtNi44NzYtMzQuNjYzLTE5LjM2My00Ny40MzIgIEMzMDEuNDE2LDE3MS4xOTgsMjk2LjM0MSwxNzEuMTQxLDI5My4xNzUsMTc0LjIzN3oiLz48cGF0aCBkPSJNMjc1LjM2NiwxNTYuNzM2Yy02LjI2Ni0xLjg2OC0xMi43ODItMi44MTUtMTkuMzY2LTIuODE1Yy00LjQyNywwLTguMDE3LDMuNTg5LTguMDE3LDguMDE3czMuNTg5LDguMDE3LDguMDE3LDguMDE3ICBjNS4wMzIsMCwxMC4wMDcsMC43MjMsMTQuNzg2LDIuMTQ3YzAuNzY0LDAuMjI4LDEuNTM1LDAuMzM2LDIuMjk0LDAuMzM2YzMuNDU0LDAsNi42NDItMi4yNDksNy42OC01LjcyOCAgQzI4Mi4wMjMsMTYyLjQ2NSwyNzkuNjEsMTU4LjAwMSwyNzUuMzY2LDE1Ni43MzZ6Ii8+PHBhdGggZD0iTTQzNS4zLDE0MC40OWMtMi40MDMtMy43Mi03LjM2NS00Ljc4OS0xMS4wODMtMi4zODdjLTMuNzIsMi40MDItNC43ODgsNy4zNjQtMi4zODcsMTEuMDgzICBjMjQuMDY2LDM3LjI3OCwzNC44NTYsODIuMjcyLDMwLjM4MywxMjYuNjkyYy00LjUzNCw0NS4wMzctMjQuNjk0LDg3LjUwMS01Ni43NjQsMTE5LjU3MWMtMy4xMzEsMy4xMzEtMy4xMzEsOC4yMDcsMCwxMS4zMzcgIGMxLjU2NSwxLjU2NiwzLjYxNywyLjM0OCw1LjY2OCwyLjM0OHM0LjEwMy0wLjc4Miw1LjY2OC0yLjM0OGMzNC42NzctMzQuNjc2LDU2LjQ3NS04MC41OTcsNjEuMzc5LTEyOS4zMDIgIEM0NzMuMDAxLDIyOS40NjEsNDYxLjMyOSwxODAuODA5LDQzNS4zLDE0MC40OXoiLz48cGF0aCBkPSJNNDAzLjkxOSwxMjUuNTU5YzEuNTg0LDEuNzkzLDMuNzkyLDIuNzA5LDYuMDExLDIuNzA5YzEuODg3LDAsMy43ODEtMC42NjIsNS4zMDUtMi4wMDhjMy4zMTgtMi45MzIsMy42MzEtNy45OTcsMC43LTExLjMxNSAgYy0yLjkyNy0zLjMxMy02LjAwNC02LjU4NS05LjE0OC05LjcyOWMtMy4xMzItMy4xMzItOC4yMDctMy4xMzEtMTEuMzM4LDBjLTMuMTMxLDMuMTMxLTMuMTMxLDguMjA2LDAsMTEuMzM3ICBDMzk4LjM2MSwxMTkuNDYyLDQwMS4yMSwxMjIuNDkzLDQwMy45MTksMTI1LjU1OXoiLz48cGF0aCBkPSJNMTYuMDMzLDI1NmMwLTY0LjA5NywyNC45NjEtMTI0LjM1OCw3MC4yODQtMTY5LjY4M2MzLjEzMS0zLjEzMSwzLjEzMS04LjIwNywwLTExLjMzN2MtMy4xMzEtMy4xMzEtOC4yMDctMy4xMzEtMTEuMzM3LDAgIEMyNi42MjgsMTIzLjMzMywwLDE4Ny42MiwwLDI1NnMyNi42MjgsMTMyLjY2Nyw3NC45ODEsMTgxLjAxOWMxLjU2NSwxLjU2NSwzLjYxNywyLjM0OCw1LjY2OCwyLjM0OCAgYzIuMDUxLDAsNC4xMDMtMC43ODIsNS42NjgtMi4zNDhjMy4xMzEtMy4xMzEsMy4xMzEtOC4yMDYsMC0xMS4zMzdDNDAuOTk0LDM4MC4zNTgsMTYuMDMzLDMyMC4wOTcsMTYuMDMzLDI1NnoiLz48cGF0aCBkPSJNNDM3LjAxOSw3NC45ODFjLTMuMTMxLTMuMTMxLTguMjA3LTMuMTMxLTExLjMzNywwYy0zLjEzMSwzLjEzMS0zLjEzMSw4LjIwNiwwLDExLjMzNyAgYzQ1LjMyMyw0NS4zMjQsNzAuMjg0LDEwNS41ODUsNzAuMjg0LDE2OS42ODNzLTI0Ljk2MSwxMjQuMzU4LTcwLjI4NCwxNjkuNjgzYy0zLjEzMSwzLjEzMS0zLjEzMSw4LjIwNywwLDExLjMzNyAgYzEuNTY1LDEuNTY1LDMuNjE3LDIuMzQ4LDUuNjY4LDIuMzQ4YzIuMDUxLDAsNC4xMDMtMC43ODIsNS42NjgtMi4zNDhDNDg1LjM3MiwzODguNjY3LDUxMiwzMjQuMzgsNTEyLDI1NiAgUzQ4NS4zNzIsMTIzLjMzMyw0MzcuMDE5LDc0Ljk4MXoiLz48cGF0aCBkPSJNMTA1LjIxMywxMDUuMjE0Yy0zNC42NzcsMzQuNjc2LTU2LjQ3NSw4MC41OTctNjEuMzc5LDEyOS4zMDJDMzksMjgyLjUzOCw1MC42NzEsMzMxLjE5MSw3Ni43LDM3MS41MTEgIGMxLjUzNCwyLjM3Niw0LjExMSwzLjY3MSw2Ljc0MywzLjY3MWMxLjQ5LDAsMi45OTYtMC40MTUsNC4zNDEtMS4yODNjMy43Mi0yLjQwMiw0Ljc4OC03LjM2NCwyLjM4Ny0xMS4wODMgIGMtMjQuMDY2LTM3LjI3OC0zNC44NTYtODIuMjcyLTMwLjM4My0xMjYuNjkyYzQuNTM0LTQ1LjAzNywyNC42OTQtODcuNTAxLDU2Ljc2NC0xMTkuNTcxYzMuMTMxLTMuMTMxLDMuMTMxLTguMjA3LDAtMTEuMzM3ICBDMTEzLjQyLDEwMi4wODIsMTA4LjM0NCwxMDIuMDgyLDEwNS4yMTMsMTA1LjIxNHoiLz48cGF0aCBkPSJNMTA4LjA4MSwzODYuNDQxYy0yLjkzMi0zLjMxOC03Ljk5Ny0zLjYzMS0xMS4zMTUtMC42OTlzLTMuNjMxLDcuOTk3LTAuNywxMS4zMTVjMi45MjcsMy4zMTMsNi4wMDQsNi41ODUsOS4xNDgsOS43MjkgIGMxLjU2NiwxLjU2NiwzLjYxNywyLjM0OCw1LjY2OSwyLjM0OGMyLjA1MiwwLDQuMTAzLTAuNzgyLDUuNjY4LTIuMzQ4YzMuMTMxLTMuMTMxLDMuMTMxLTguMjA2LDAtMTEuMzM3ICBDMTEzLjYzOSwzOTIuNTM4LDExMC43OSwzODkuNTA3LDEwOC4wODEsMzg2LjQ0MXoiLz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48L3N2Zz4=",
                    extra_css: "",
                    dismiss_cookie_days: 3,
                    request_permission: {
                        delay: {
                            enable: 0,
                            value: 20
                        },
                        scroll: {
                            enable: 1,
                            value: 50
                        },
                        visit: {
                            minimum: {
                                enable: 0,
                                value: 1
                            },
                            maximum: {
                                enable: 0,
                                value: 3
                            },
                            interval: {
                                enable: 0,
                                value: 3
                            }
                        }
                    },
                    show_bell: 1,
                    show_bell_in_mobile: 1,
                    bell_direction: "right",
                    tooltip_direction: "left",
                    bell_color_hover: "#7a7a7a",
                    bell_color: "#444444",
                    bell_tooltip: "مشترک شوید",
                    show_backdrop: !1,
                    show_backdrop_mobile: !1,
                    native_permission: !0,
                    backdrop_text: "«برای دریافت مطالب مشابه روی گزینه Allow کلیک کنید.»"
                },
                custom_links: [],
                website_policy: {
                    notification_queue: 1,
                    notification_countdown: 10,
                    notification_blocked: !1,
                    notification_button_enabled: !1,
                    use_najva_firebase_account: !0,
                    recommender_permission: !1,
                    tag_enabled: !1,
                    email_enabled: !0
                },
                sw_path: "/",
                email_settings: {
                    fields: [{
                        key: "email",
                        name: "ایمیل",
                        validations: ["email", "required"]
                    }],
                    send_btn_text: "شرکت در قرعه‌کشی",
                    background_color: "white",
                    title: "عنوان-عنوان-عنوان",
                    uuid: "bf3c6c48-b4fa-4537-9ec0-c81e84ba2d1d",
                    show_condition: {
                        delay: {
                            enable: 1,
                            value: 2
                        },
                        scroll: {
                            enable: 0,
                            value: 50
                        },
                        visit: {
                            minimum: {
                                enable: 0,
                                value: 3
                            },
                            maximum: {
                                enable: 0,
                                value: 24
                            },
                            interval: {
                                enable: 0,
                                value: 3
                            }
                        }
                    },
                    desc: "",
                    img: ""
                }
            },
            f = "activity";
        ! function(e) {
            e.LastActiveTime = "last_active_time", e.VisitCount = "visit_count", e.LastScriptReportedVersion = "last_script_reported_version", e.LastServiceWorkerReportedVersion = "last_service_worker_reported_version", e.LastCookieMatchingSent = "last_cookie_matching_sent", e.HasMigrated = "has_migrated", e.LastCurrentUserAPICalled = "last-current-user-api-called", e.HasNajvaSubscriptionWindowOpened = "has-najva-subscription-window-opened"
        }(l || (l = {}));
        let p, h;
        const b = new WeakMap,
            v = new WeakMap,
            w = new WeakMap,
            y = new WeakMap,
            g = new WeakMap;
        let _ = {
            get(e, t, n) {
                if (e instanceof IDBTransaction) {
                    if ("done" === t) return v.get(e);
                    if ("objectStoreNames" === t) return e.objectStoreNames || w.get(e);
                    if ("store" === t) return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0])
                }
                return E(e[t])
            },
            set: (e, t, n) => (e[t] = n, !0),
            has: (e, t) => e instanceof IDBTransaction && ("done" === t || "store" === t) || t in e
        };

        function m(e) {
            return e !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (h || (h = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(e) ? function(...t) {
                return e.apply(N(this), t), E(b.get(this))
            } : function(...t) {
                return E(e.apply(N(this), t))
            } : function(t, ...n) {
                const r = e.call(N(this), t, ...n);
                return w.set(r, t.sort ? t.sort() : [t]), E(r)
            }
        }

        function M(e) {
            return "function" == typeof e ? m(e) : (e instanceof IDBTransaction && function(e) {
                if (v.has(e)) return;
                const t = new Promise(((t, n) => {
                    const r = () => {
                            e.removeEventListener("complete", i), e.removeEventListener("error", o), e.removeEventListener("abort", o)
                        },
                        i = () => {
                            t(), r()
                        },
                        o = () => {
                            n(e.error || new DOMException("AbortError", "AbortError")), r()
                        };
                    e.addEventListener("complete", i), e.addEventListener("error", o), e.addEventListener("abort", o)
                }));
                v.set(e, t)
            }(e), t = e, (p || (p = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((e => t instanceof e)) ? new Proxy(e, _) : e);
            var t
        }

        function E(e) {
            if (e instanceof IDBRequest) return function(e) {
                const t = new Promise(((t, n) => {
                    const r = () => {
                            e.removeEventListener("success", i), e.removeEventListener("error", o)
                        },
                        i = () => {
                            t(E(e.result)), r()
                        },
                        o = () => {
                            n(e.error), r()
                        };
                    e.addEventListener("success", i), e.addEventListener("error", o)
                }));
                return t.then((t => {
                    t instanceof IDBCursor && b.set(t, e)
                })).catch((() => {})), g.set(t, e), t
            }(e);
            if (y.has(e)) return y.get(e);
            const t = M(e);
            return t !== e && (y.set(e, t), g.set(t, e)), t
        }
        const N = e => g.get(e);

        function T(e, t, {
            blocked: n,
            upgrade: r,
            blocking: i,
            terminated: o
        } = {}) {
            const a = indexedDB.open(e, t),
                s = E(a);
            return r && a.addEventListener("upgradeneeded", (e => {
                r(E(a.result), e.oldVersion, e.newVersion, E(a.transaction))
            })), n && a.addEventListener("blocked", (() => n())), s.then((e => {
                o && e.addEventListener("close", (() => o())), i && e.addEventListener("versionchange", (() => i()))
            })).catch((() => {})), s
        }
        const L = ["get", "getKey", "getAll", "getAllKeys", "count"],
            S = ["put", "add", "delete", "clear"],
            j = new Map;

        function k(e, t) {
            if (!(e instanceof IDBDatabase) || t in e || "string" != typeof t) return;
            if (j.get(t)) return j.get(t);
            const n = t.replace(/FromIndex$/, ""),
                r = t !== n,
                i = S.includes(n);
            if (!(n in (r ? IDBIndex : IDBObjectStore).prototype) || !i && !L.includes(n)) return;
            const o = async function(e, ...t) {
                const o = this.transaction(e, i ? "readwrite" : "readonly");
                let a = o.store;
                r && (a = a.index(t.shift()));
                const s = await a[n](...t);
                return i && await o.done, s
            };
            return j.set(t, o), o
        }
        _ = (e => ({ ...e,
            get: (t, n, r) => k(t, n) || e.get(t, n, r),
            has: (t, n) => !!k(t, n) || e.has(t, n)
        }))(_);
        var x, D = "token";
        ! function(e) {
            e.Firebase = "fb_token", e.Cookie = "cookie_token", e.Najva = "najva_token"
        }(x || (x = {}));
        var I = function(e, t, n, r) {
                return new(n || (n = Promise))((function(i, o) {
                    function a(e) {
                        try {
                            c(r.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function s(e) {
                        try {
                            c(r.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(a, s)
                    }
                    c((r = r.apply(e, t || [])).next())
                }))
            },
            O = function(e, t) {
                var n, r, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function s(o) {
                    return function(s) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1], i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2], a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, s])
                    }
                }
            };

        function A(e, t, n) {
            return I(this, void 0, void 0, (function() {
                var r, i, a;
                return O(this, (function(s) {
                    switch (s.label) {
                        case 0:
                            return s.trys.push([0, 8, , 9]), [4, _e()];
                        case 1:
                            return r = s.sent(), [4, (i = r.transaction(D, "readwrite")).store.get(e)];
                        case 2:
                            return s.sent() ? [4, i.store.put({
                                name: e,
                                value: t,
                                timestamp: n
                            })] : [3, 4];
                        case 3:
                            return s.sent(), [3, 6];
                        case 4:
                            return [4, i.store.add({
                                name: e,
                                value: t,
                                timestamp: n
                            })];
                        case 5:
                            s.sent(), s.label = 6;
                        case 6:
                            return [4, i.done];
                        case 7:
                            return s.sent(), [3, 9];
                        case 8:
                            throw a = s.sent(), u(o.DB_UPDATE_FAILED, {
                                key: e,
                                value: t,
                                objectStoreName: D,
                                browserErrorMessage: a.message,
                                error: a
                            });
                        case 9:
                            return [2]
                    }
                }))
            }))
        }

        function P(e) {
            return I(this, void 0, void 0, (function() {
                var t, n, r, i;
                return O(this, (function(a) {
                    switch (a.label) {
                        case 0:
                            return a.trys.push([0, 4, , 5]), [4, _e()];
                        case 1:
                            return t = a.sent(), [4, (n = t.transaction(D, "readonly")).store.get(e)];
                        case 2:
                            return r = a.sent(), [4, n.done];
                        case 3:
                            return a.sent(), r ? [2, {
                                value: r.value.toString(),
                                timestamp: r.timestamp.toString()
                            }] : [2, {
                                value: "",
                                timestamp: ""
                            }];
                        case 4:
                            throw i = a.sent(), u(o.DB_READ_FAILED, {
                                key: e,
                                objectStoreName: D,
                                browserErrorMessage: i.message,
                                error: i
                            });
                        case 5:
                            return [2]
                    }
                }))
            }))
        }
        var C, z = "website";
        ! function(e) {
            e.WebsiteId = "website_id", e.SenderId = "messagind_sender_id"
        }(C || (C = {}));
        var B = function(e, t, n, r) {
                return new(n || (n = Promise))((function(i, o) {
                    function a(e) {
                        try {
                            c(r.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function s(e) {
                        try {
                            c(r.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(a, s)
                    }
                    c((r = r.apply(e, t || [])).next())
                }))
            },
            R = function(e, t) {
                var n, r, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function s(o) {
                    return function(s) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1], i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2], a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, s])
                    }
                }
            };

        function U(e) {
            return B(this, void 0, void 0, (function() {
                var t, n, r, i;
                return R(this, (function(a) {
                    switch (a.label) {
                        case 0:
                            return a.trys.push([0, 4, , 5]), [4, _e()];
                        case 1:
                            return t = a.sent(), [4, (n = t.transaction(z, "readwrite")).store.get(e)];
                        case 2:
                            return r = a.sent(), [4, n.done];
                        case 3:
                            return a.sent(), r ? [2, r.value] : [2, ""];
                        case 4:
                            throw i = a.sent(), u(o.DB_READ_FAILED, {
                                key: e,
                                objectStoreName: z,
                                browserErrorMessage: i.message,
                                error: i
                            });
                        case 5:
                            return [2]
                    }
                }))
            }))
        }

        function F(e, t) {
            return B(this, void 0, void 0, (function() {
                var n, r, i;
                return R(this, (function(a) {
                    switch (a.label) {
                        case 0:
                            return a.trys.push([0, 8, , 9]), [4, _e()];
                        case 1:
                            return n = a.sent(), [4, (r = n.transaction(z, "readwrite")).store.get(e)];
                        case 2:
                            return a.sent() ? [4, r.store.put({
                                name: e,
                                value: t
                            })] : [3, 4];
                        case 3:
                            return a.sent(), [3, 6];
                        case 4:
                            return [4, r.store.add({
                                name: e,
                                value: t
                            })];
                        case 5:
                            a.sent(), a.label = 6;
                        case 6:
                            return [4, r.done];
                        case 7:
                            return a.sent(), [3, 9];
                        case 8:
                            throw i = a.sent(), u(o.DB_UPDATE_FAILED, {
                                key: e,
                                value: t,
                                objectStoreName: z,
                                browserErrorMessage: i.message,
                                error: i
                            });
                        case 9:
                            return [2]
                    }
                }))
            }))
        }
        var W, Y, G = "opt-in";
        ! function(e) {
            e.Popup = "pop_up"
        }(W || (W = {})),
        function(e) {
            e.ShownCount = "shown_count", e.LastShownTime = "last_shown_count", e.Reject = "reject"
        }(Y || (Y = {}));
        var K = function() {
                return (K = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }).apply(this, arguments)
            },
            V = function(e, t, n, r) {
                return new(n || (n = Promise))((function(i, o) {
                    function a(e) {
                        try {
                            c(r.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function s(e) {
                        try {
                            c(r.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(a, s)
                    }
                    c((r = r.apply(e, t || [])).next())
                }))
            },
            Q = function(e, t) {
                var n, r, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function s(o) {
                    return function(s) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1], i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2], a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, s])
                    }
                }
            };

        function H(e) {
            return V(this, void 0, void 0, (function() {
                var t, n, r, i;
                return Q(this, (function(a) {
                    switch (a.label) {
                        case 0:
                            return a.trys.push([0, 4, , 5]), [4, _e()];
                        case 1:
                            return t = a.sent(), [4, (n = t.transaction(G, "readwrite")).store.get(W.Popup)];
                        case 2:
                            return r = a.sent(), [4, n.done];
                        case 3:
                            return a.sent(), r && r[e] ? [2, r[e]] : [2, ""];
                        case 4:
                            throw i = a.sent(), u(o.DB_READ_FAILED, {
                                key: W + "." + e,
                                objectStoreName: G,
                                browserErrorMessage: i.message,
                                error: i
                            });
                        case 5:
                            return [2]
                    }
                }))
            }))
        }

        function Z(e, t) {
            return V(this, void 0, void 0, (function() {
                var n, r, i, a, s, c;
                return Q(this, (function(l) {
                    switch (l.label) {
                        case 0:
                            return l.trys.push([0, 8, , 9]), [4, _e()];
                        case 1:
                            return n = l.sent(), [4, (r = n.transaction(G, "readwrite")).store.get(W.Popup)];
                        case 2:
                            return (i = l.sent()) ? [4, r.store.put(K(K({}, i), (s = {}, s[e] = t, s)))] : [3, 4];
                        case 3:
                            return l.sent(), [3, 6];
                        case 4:
                            return [4, r.store.add((c = {
                                name: W.Popup
                            }, c[e] = t, c))];
                        case 5:
                            l.sent(), l.label = 6;
                        case 6:
                            return [4, r.done];
                        case 7:
                            return l.sent(), [3, 9];
                        case 8:
                            throw a = l.sent(), u(o.DB_UPDATE_FAILED, {
                                key: W + "." + e,
                                objectStoreName: G,
                                value: t,
                                browserErrorMessage: a.message,
                                error: a
                            });
                        case 9:
                            return [2]
                    }
                }))
            }))
        }
        var q = "attribute",
            $ = function(e, t, n, r) {
                return new(n || (n = Promise))((function(i, o) {
                    function a(e) {
                        try {
                            c(r.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function s(e) {
                        try {
                            c(r.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(a, s)
                    }
                    c((r = r.apply(e, t || [])).next())
                }))
            },
            J = function(e, t) {
                var n, r, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function s(o) {
                    return function(s) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1], i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2], a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, s])
                    }
                }
            };

        function X(e, t, n) {
            return $(this, void 0, void 0, (function() {
                var r, i, a;
                return J(this, (function(s) {
                    switch (s.label) {
                        case 0:
                            return s.trys.push([0, 8, , 9]), [4, _e()];
                        case 1:
                            return r = s.sent(), [4, (i = r.transaction(q, "readwrite")).store.get(e)];
                        case 2:
                            return s.sent() ? [4, i.store.put({
                                key: e,
                                value: t,
                                timestamp: n
                            })] : [3, 4];
                        case 3:
                            return s.sent(), [3, 6];
                        case 4:
                            return [4, i.store.add({
                                key: e,
                                value: t,
                                timestamp: n
                            })];
                        case 5:
                            s.sent(), s.label = 6;
                        case 6:
                            return [4, i.done];
                        case 7:
                            return s.sent(), [3, 9];
                        case 8:
                            throw a = s.sent(), u(o.DB_UPDATE_FAILED, {
                                key: e,
                                value: t,
                                objectStoreName: q,
                                browserErrorMessage: a.message,
                                error: a
                            });
                        case 9:
                            return [2]
                    }
                }))
            }))
        }

        function ee(e) {
            return $(this, void 0, void 0, (function() {
                var t, n, r;
                return J(this, (function(i) {
                    switch (i.label) {
                        case 0:
                            return i.trys.push([0, 4, , 5]), [4, _e()];
                        case 1:
                            return t = i.sent(), [4, (n = t.transaction(q, "readwrite")).store.delete(e)];
                        case 2:
                            return i.sent(), [4, n.done];
                        case 3:
                            return i.sent(), [3, 5];
                        case 4:
                            throw r = i.sent(), u(o.DB_READ_FAILED, {
                                key: e,
                                objectStoreName: q,
                                browserErrorMessage: r.message,
                                error: r
                            });
                        case 5:
                            return [2]
                    }
                }))
            }))
        }

        function te() {
            return $(this, void 0, void 0, (function() {
                var e, t;
                return J(this, (function(n) {
                    switch (n.label) {
                        case 0:
                            return n.trys.push([0, 3, , 4]), [4, _e()];
                        case 1:
                            return e = n.sent(), [4, e.transaction(q, "readwrite").objectStore(q).clear()];
                        case 2:
                            return n.sent(), [3, 4];
                        case 3:
                            throw t = n.sent(), u(o.DB_OBJ_STORE_CLEAR_FAILED, {
                                browserErrorMessage: t.message,
                                objectStoreName: q,
                                error: t
                            });
                        case 4:
                            return [2]
                    }
                }))
            }))
        }

        function ne() {
            return $(this, void 0, void 0, (function() {
                var e, t, n, r, i;
                return J(this, (function(a) {
                    switch (a.label) {
                        case 0:
                            return a.trys.push([0, 4, , 5]), [4, _e()];
                        case 1:
                            return e = a.sent(), [4, (t = e.transaction(q, "readwrite")).store.getAll()];
                        case 2:
                            return n = a.sent(), [4, t.done];
                        case 3:
                            return a.sent(), r = {}, n.forEach((function(e) {
                                r[e.key] = e.value
                            })), [2, r];
                        case 4:
                            throw i = a.sent(), u(o.DB_READ_FAILED, {
                                key: "allKeys",
                                objectStoreName: q,
                                browserErrorMessage: i.message,
                                error: i
                            });
                        case 5:
                            return [2]
                    }
                }))
            }))
        }
        var re = n(6808),
            ie = n.n(re);

        function oe(e) {
            var t = e.split("."),
                n = t[t.length - 1],
                r = t[t.length - 2];
            return r && r.length > 2 ? "." + r + "." + n : t && t.length > 2 ? "." + t[t.length - 3] + "." + r + "." + n : e
        }

        function ae(e) {
            return ie().get(e)
        }

        function se(e) {
            ie().remove(e, {
                domain: oe(window.location.hostname),
                path: "/"
            })
        }
        var ce = function(e, t, n, r) {
                return new(n || (n = Promise))((function(i, o) {
                    function a(e) {
                        try {
                            c(r.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function s(e) {
                        try {
                            c(r.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(a, s)
                    }
                    c((r = r.apply(e, t || [])).next())
                }))
            },
            ue = function(e, t) {
                var n, r, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function s(o) {
                    return function(s) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1], i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2], a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, s])
                    }
                }
            };

        function le() {
            return ce(this, void 0, void 0, (function() {
                return ue(this, (function(e) {
                    return [2, Promise.all([F(C.WebsiteId, ""), A(x.Cookie, "", (new Date).toISOString()), Z(Y.LastShownTime, ""), Z(Y.ShownCount, ""), te(), Le()])]
                }))
            }))
        }

        function de(e, t) {
            return ce(this, void 0, void 0, (function() {
                var n, r, i;
                return ue(this, (function(o) {
                    switch (o.label) {
                        case 0:
                            return (n = ae("najva_last_active_time:" + t) || ae("najva_last_active_time-" + e)) ? [4, Te(l.LastActiveTime, n)] : [3, 2];
                        case 1:
                            o.sent(), se("najva_last_active_time:" + t), se("najva_last_active_time-" + e), o.label = 2;
                        case 2:
                            return (r = ae("pushNotification:shownCount:" + t) || ae("pushNotification-shownCount-" + e)) ? [4, Te(l.VisitCount, r)] : [3, 4];
                        case 3:
                            o.sent(), se("pushNotification:shownCount:" + t), se("pushNotification-shownCount-" + e), o.label = 4;
                        case 4:
                            return [4, Ne(l.LastCookieMatchingSent)];
                        case 5:
                            return o.sent() ? [3, 7] : (i = Math.floor(30 * Math.random()), [4, Te(l.LastCookieMatchingSent, new Date(Date.now() - 24 * i * 60 * 60 * 1e3).toISOString())]);
                        case 6:
                            o.sent(), o.label = 7;
                        case 7:
                            return se("cookie_matching"), [2]
                    }
                }))
            }))
        }

        function fe(e) {
            return ce(this, void 0, void 0, (function() {
                var t, n = this;
                return ue(this, (function(r) {
                    return t = function(e) {
                        var t = Object.keys(localStorage),
                            n = e + "-tag-",
                            r = t.filter((function(e) {
                                return e.startsWith(n)
                            })),
                            i = {};
                        return r.forEach((function(e) {
                            var t, r = e.substr(n.length);
                            i[r] = null === (t = localStorage.getItem(e)) || void 0 === t ? void 0 : t.toString()
                        })), i
                    }(e), Object.keys(t).forEach((function(r) {
                        return ce(n, void 0, void 0, (function() {
                            return ue(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, X(r, t[r], (new Date).toISOString())];
                                    case 1:
                                        return n.sent(), localStorage.removeItem(function(e, t) {
                                            return e && t ? e + "-tag-" + t : ""
                                        }(e, r)), [2]
                                }
                            }))
                        }))
                    })), [2]
                }))
            }))
        }

        function pe(e, t) {
            return ce(this, void 0, void 0, (function() {
                var n;
                return ue(this, (function(r) {
                    switch (r.label) {
                        case 0:
                            return (n = ae("pushNotification:notWantPopUp:" + t) || ae("pushNotification-notWantPopUp-" + e)) ? [4, Z(Y.Reject, n)] : [3, 2];
                        case 1:
                            r.sent(), se("pushNotification:notWantPopUp:" + t), se("pushNotification-notWantPopUp-" + e), r.label = 2;
                        case 2:
                            return [2]
                    }
                }))
            }))
        }

        function he(e, t) {
            return ce(this, void 0, void 0, (function() {
                var n, r, i;
                return ue(this, (function(o) {
                    switch (o.label) {
                        case 0:
                            return (n = ae("token_id:" + t) || ae("token_id-" + e)) ? [4, A(x.Firebase, n, (new Date).toISOString())] : [3, 2];
                        case 1:
                            o.sent(), se("token_id:" + t), se("token_id-" + e), o.label = 2;
                        case 2:
                            return (r = localStorage.getItem("_njt") || ae("najva_token")) ? [4, A(x.Najva, r, (new Date).toISOString())] : [3, 4];
                        case 3:
                            o.sent(), se("najva_token"), localStorage.removeItem("_njt"), o.label = 4;
                        case 4:
                            return (i = ae("cookie_token:" + t) || ae("cookie_token-" + e)) ? [4, A(x.Cookie, i, (new Date).toISOString())] : [3, 6];
                        case 5:
                            o.sent(), se("cookie_token:" + t), se("cookie_token-" + e), o.label = 6;
                        case 6:
                            return [2]
                    }
                }))
            }))
        }

        function be(e, t) {
            return ce(this, void 0, void 0, (function() {
                var n;
                return ue(this, (function(r) {
                    switch (r.label) {
                        case 0:
                            return [4, Te(l.HasMigrated, "true")];
                        case 1:
                            return r.sent(), [4, U(C.WebsiteId)];
                        case 2:
                            return n = r.sent(), e == n ? [3, 4] : [4, le()];
                        case 3:
                            r.sent(), r.label = 4;
                        case 4:
                            return [4, Promise.all([F(C.WebsiteId, e), he(e, t), pe(e, t), fe(e), de(e, t)])];
                        case 5:
                            return r.sent(), [2]
                    }
                }))
            }))
        }
        var ve, we, ye = function(e, t, n, r) {
                return new(n || (n = Promise))((function(i, o) {
                    function a(e) {
                        try {
                            c(r.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function s(e) {
                        try {
                            c(r.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(a, s)
                    }
                    c((r = r.apply(e, t || [])).next())
                }))
            },
            ge = function(e, t) {
                var n, r, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function s(o) {
                    return function(s) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1], i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2], a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, s])
                    }
                }
            };

        function _e() {
            return ye(this, void 0, void 0, (function() {
                return ge(this, (function(e) {
                    switch (e.label) {
                        case 0:
                            return ve ? [3, 2] : [4, T("najva-native-subscription-database", 5, {
                                upgrade: function(e, t) {
                                    return ye(this, void 0, void 0, (function() {
                                        return ge(this, (function(n) {
                                            return t > 0 && t < 5 && (e.deleteObjectStore(D), e.deleteObjectStore(z), e.deleteObjectStore(G), e.deleteObjectStore(q), e.deleteObjectStore(f)), e.createObjectStore(D, {
                                                keyPath: "name"
                                            }), e.createObjectStore(z, {
                                                keyPath: "name"
                                            }), e.createObjectStore(G, {
                                                keyPath: "name"
                                            }), e.createObjectStore(q, {
                                                keyPath: "key"
                                            }), e.createObjectStore(f, {
                                                keyPath: "name"
                                            }), [2]
                                        }))
                                    }))
                                }
                            })];
                        case 1:
                            ve = e.sent(), e.label = 2;
                        case 2:
                            return [2, ve]
                    }
                }))
            }))
        }

        function me(e) {
            return ye(this, void 0, void 0, (function() {
                var t;
                return ge(this, (function(n) {
                    switch (n.label) {
                        case 0:
                            return we = e, [4, _e()];
                        case 1:
                            return n.sent(), [4, Ne(l.HasMigrated)];
                        case 2:
                            return "string" != typeof(t = n.sent()) || "true" === t ? [3, 4] : [4, be(we.website_id, we.campaign_id)];
                        case 3:
                            n.sent(), n.label = 4;
                        case 4:
                            return [2]
                    }
                }))
            }))
        }
        var Me = function(e, t, n, r) {
                return new(n || (n = Promise))((function(i, o) {
                    function a(e) {
                        try {
                            c(r.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function s(e) {
                        try {
                            c(r.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(a, s)
                    }
                    c((r = r.apply(e, t || [])).next())
                }))
            },
            Ee = function(e, t) {
                var n, r, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function s(o) {
                    return function(s) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1], i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2], a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, s])
                    }
                }
            };

        function Ne(e) {
            return Me(this, void 0, void 0, (function() {
                var t, n, r, i;
                return Ee(this, (function(a) {
                    switch (a.label) {
                        case 0:
                            return a.trys.push([0, 4, , 5]), [4, _e()];
                        case 1:
                            return t = a.sent(), [4, (n = t.transaction(f, "readwrite")).store.get(e)];
                        case 2:
                            return r = a.sent(), [4, n.done];
                        case 3:
                            return a.sent(), r ? [2, r.value] : [2, ""];
                        case 4:
                            throw i = a.sent(), u(o.DB_READ_FAILED, {
                                key: e,
                                objectStoreName: f,
                                browserErrorMessage: i.message,
                                error: i
                            });
                        case 5:
                            return [2]
                    }
                }))
            }))
        }

        function Te(e, t) {
            return Me(this, void 0, void 0, (function() {
                var n, r, i;
                return Ee(this, (function(a) {
                    switch (a.label) {
                        case 0:
                            return a.trys.push([0, 8, , 9]), [4, _e()];
                        case 1:
                            return n = a.sent(), [4, (r = n.transaction(f, "readwrite")).store.get(e)];
                        case 2:
                            return a.sent() ? [4, r.store.put({
                                name: e,
                                value: t
                            })] : [3, 4];
                        case 3:
                            return a.sent(), [3, 6];
                        case 4:
                            return [4, r.store.add({
                                name: e,
                                value: t
                            })];
                        case 5:
                            a.sent(), a.label = 6;
                        case 6:
                            return [4, r.done];
                        case 7:
                            return a.sent(), [3, 9];
                        case 8:
                            throw i = a.sent(), u(o.DB_UPDATE_FAILED, {
                                key: e,
                                value: t,
                                objectStoreName: f,
                                browserErrorMessage: i.message,
                                error: i
                            });
                        case 9:
                            return [2]
                    }
                }))
            }))
        }

        function Le() {
            return Me(this, void 0, void 0, (function() {
                var e, t;
                return Ee(this, (function(n) {
                    switch (n.label) {
                        case 0:
                            return n.trys.push([0, 3, , 4]), [4, _e()];
                        case 1:
                            return e = n.sent(), [4, e.transaction(f, "readwrite").objectStore(f).clear()];
                        case 2:
                            return n.sent(), [3, 4];
                        case 3:
                            throw t = n.sent(), u(o.DB_OBJ_STORE_CLEAR_FAILED, {
                                browserErrorMessage: t.message,
                                objectStoreName: f,
                                error: t
                            });
                        case 4:
                            return [2]
                    }
                }))
            }))
        }
        var Se = function(e, t, n, r) {
                return new(n || (n = Promise))((function(i, o) {
                    function a(e) {
                        try {
                            c(r.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function s(e) {
                        try {
                            c(r.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(a, s)
                    }
                    c((r = r.apply(e, t || [])).next())
                }))
            },
            je = function(e, t) {
                var n, r, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function s(o) {
                    return function(s) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1], i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2], a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, s])
                    }
                }
            },
            ke = null;

        function xe() {
            return Se(this, void 0, void 0, (function() {
                var t, n, i;
                return je(this, (function(a) {
                    switch (a.label) {
                        case 0:
                            if ("production" === r.TEST) return [2, d];
                            if (t = window.configFile + "?v=" + ((s = new Date).getFullYear().toString() + "0" + s.getDate() + "0" + s.getHours()), ke) return [2, ke];
                            a.label = 1;
                        case 1:
                            return a.trys.push([1, 5, , 6]), [4, e(t, {
                                method: "GET",
                                credentials: "omit"
                            })];
                        case 2:
                            return function(e) {
                                var t = e.messaging_sender_id,
                                    n = e.najva_settings,
                                    r = "";
                                if (t || (r = "messaging_sender_id"), n ? n.api_key ? n.website_id || (r = "najva_settings.website_id") : r = "najva_settings.api_key" : r = "najva_settings", r) throw u(o.MISSING_APP_CONFIG_VALUES, {
                                    valueName: r
                                })
                            }(n = a.sent()), [4, F(C.WebsiteId, n.najva_settings.website_id.toString())];
                        case 3:
                            return a.sent(), [4, F(C.SenderId, n.messaging_sender_id)];
                        case 4:
                            return a.sent(), [2, n];
                        case 5:
                            throw i = a.sent(), u(o.CONFIGURATION_FAILED, {
                                url: window.configFile,
                                error: i
                            });
                        case 6:
                            return [2]
                    }
                    var s
                }))
            }))
        }

        function De() {
            return Se(this, void 0, void 0, (function() {
                return je(this, (function(e) {
                    switch (e.label) {
                        case 0:
                            return [4, xe()];
                        case 1:
                            return [2, ke = e.sent()]
                    }
                }))
            }))
        }
        var Ie, Oe, Ae, Pe = n(1923),
            Ce = n.n(Pe),
            ze = n(5752),
            Be = n(655),
            Re = n(1313),
            Ue = ((Ie = {})["only-available-in-window"] = "This method is available in a Window context.", Ie["only-available-in-sw"] = "This method is available in a service worker context.", Ie["should-be-overriden"] = "This method should be overriden by extended classes.", Ie["bad-sender-id"] = "Please ensure that 'messagingSenderId' is set correctly in the options passed into firebase.initializeApp().", Ie["permission-default"] = "The required permissions were not granted and dismissed instead.", Ie["permission-blocked"] = "The required permissions were not granted and blocked instead.", Ie["unsupported-browser"] = "This browser doesn't support the API's required to use the firebase SDK.", Ie["notifications-blocked"] = "Notifications have been blocked.", Ie["failed-serviceworker-registration"] = "We are unable to register the default service worker. {$browserErrorMessage}", Ie["sw-registration-expected"] = "A service worker registration was the expected input.", Ie["get-subscription-failed"] = "There was an error when trying to get any existing Push Subscriptions.", Ie["invalid-saved-token"] = "Unable to access details of the saved token.", Ie["sw-reg-redundant"] = "The service worker being used for push was made redundant.", Ie["token-subscribe-failed"] = "A problem occured while subscribing the user to FCM: {$errorInfo}", Ie["token-subscribe-no-token"] = "FCM returned no token when subscribing the user to push.", Ie["token-subscribe-no-push-set"] = "FCM returned an invalid response when getting an FCM token.", Ie["token-unsubscribe-failed"] = "A problem occured while unsubscribing the user from FCM: {$errorInfo}", Ie["token-update-failed"] = "A problem occured while updating the user from FCM: {$errorInfo}", Ie["token-update-no-token"] = "FCM returned no token when updating the user to push.", Ie["use-sw-before-get-token"] = "The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.", Ie["invalid-delete-token"] = "You must pass a valid token into deleteToken(), i.e. the token from getToken().", Ie["delete-token-not-found"] = "The deletion attempt for token could not be performed as the token was not found.", Ie["delete-scope-not-found"] = "The deletion attempt for service worker scope could not be performed as the scope was not found.", Ie["bg-handler-function-expected"] = "The input to setBackgroundMessageHandler() must be a function.", Ie["no-window-client-to-msg"] = "An attempt was made to message a non-existant window client.", Ie["unable-to-resubscribe"] = "There was an error while re-subscribing the FCM token for push messaging. Will have to resubscribe the user on next visit. {$errorInfo}", Ie["no-fcm-token-for-resubscribe"] = "Could not find an FCM token and as a result, unable to resubscribe. Will have to resubscribe the user on next visit.", Ie["failed-to-delete-token"] = "Unable to delete the currently saved token.", Ie["no-sw-in-reg"] = "Even though the service worker registration was successful, there was a problem accessing the service worker itself.", Ie["bad-scope"] = "The service worker scope must be a string with at least one character.", Ie["bad-vapid-key"] = "The public VAPID key is not a Uint8Array with 65 bytes.", Ie["bad-subscription"] = "The subscription must be a valid PushSubscription.", Ie["bad-token"] = "The FCM Token used for storage / lookup was not a valid token string.", Ie["bad-push-set"] = "The FCM push set used for storage / lookup was not not a valid push set string.", Ie["failed-delete-vapid-key"] = "The VAPID key could not be deleted.", Ie["invalid-public-vapid-key"] = "The public VAPID key must be a string.", Ie["use-public-key-before-get-token"] = "The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used.", Ie["public-vapid-key-decryption-failed"] = "The public VAPID key did not equal 65 bytes when decrypted.", Ie),
            Fe = new Re.ErrorFactory("messaging", "Messaging", Ue),
            We = new Uint8Array([4, 51, 148, 247, 223, 161, 235, 177, 220, 3, 162, 94, 21, 113, 219, 72, 211, 46, 237, 237, 178, 52, 219, 183, 71, 58, 12, 143, 196, 204, 225, 111, 60, 140, 132, 223, 171, 182, 102, 62, 242, 12, 212, 139, 254, 227, 249, 118, 47, 20, 28, 99, 8, 106, 111, 45, 177, 26, 149, 176, 206, 55, 192, 156, 110]),
            Ye = "https://fcm.googleapis.com";
        /**
         * @license
         * Copyright 2018 Google Inc.
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        function Ge(e, t) {
            if (null == e || null == t) return !1;
            if (e === t) return !0;
            if (e.byteLength !== t.byteLength) return !1;
            for (var n = new DataView(e), r = new DataView(t), i = 0; i < e.byteLength; i++)
                if (n.getUint8(i) !== r.getUint8(i)) return !1;
            return !0
        }
        /**
         * @license
         * Copyright 2017 Google Inc.
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        function Ke(e) {
            return function(e) {
                var t = new Uint8Array(e);
                return btoa(String.fromCharCode.apply(String, (0, Be.__spread)(t)))
            }(e).replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_")
        }
        /**
         * @license
         * Copyright 2017 Google Inc.
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        ! function(e) {
            e.TYPE_OF_MSG = "firebase-messaging-msg-type", e.DATA = "firebase-messaging-msg-data"
        }(Oe || (Oe = {})),
        function(e) {
            e.PUSH_MSG_RECEIVED = "push-msg-received", e.NOTIFICATION_CLICKED = "notification-clicked"
        }(Ae || (Ae = {}));
        var Ve = function() {
            function e() {}
            return e.prototype.getToken = function(e, t, n) {
                return (0, Be.__awaiter)(this, void 0, void 0, (function() {
                    var r, i, o, a, s, c, u, l, d;
                    return (0, Be.__generator)(this, (function(f) {
                        switch (f.label) {
                            case 0:
                                r = Ke(t.getKey("p256dh")), i = Ke(t.getKey("auth")), o = "authorized_entity=" + e + "&endpoint=" + t.endpoint + "&encryption_key=" + r + "&encryption_auth=" + i, Ge(n.buffer, We.buffer) || (a = Ke(n), o += "&application_pub_key=" + a), (s = new Headers).append("Content-Type", "application/x-www-form-urlencoded"), c = {
                                    method: "POST",
                                    headers: s,
                                    body: o
                                }, f.label = 1;
                            case 1:
                                return f.trys.push([1, 4, , 5]), [4, fetch(Ye + "/fcm/connect/subscribe", c)];
                            case 2:
                                return [4, f.sent().json()];
                            case 3:
                                return u = f.sent(), [3, 5];
                            case 4:
                                throw l = f.sent(), Fe.create("token-subscribe-failed", {
                                    errorInfo: l
                                });
                            case 5:
                                if (u.error) throw d = u.error.message, Fe.create("token-subscribe-failed", {
                                    errorInfo: d
                                });
                                if (!u.token) throw Fe.create("token-subscribe-no-token");
                                if (!u.pushSet) throw Fe.create("token-subscribe-no-push-set");
                                return [2, {
                                    token: u.token,
                                    pushSet: u.pushSet
                                }]
                        }
                    }))
                }))
            }, e.prototype.updateToken = function(e, t, n, r, i) {
                return (0, Be.__awaiter)(this, void 0, void 0, (function() {
                    var o, a, s, c, u, l, d, f, p;
                    return (0, Be.__generator)(this, (function(h) {
                        switch (h.label) {
                            case 0:
                                o = Ke(r.getKey("p256dh")), a = Ke(r.getKey("auth")), s = "push_set=" + n + "&token=" + t + "&authorized_entity=" + e + "&endpoint=" + r.endpoint + "&encryption_key=" + o + "&encryption_auth=" + a, Ge(i.buffer, We.buffer) || (c = Ke(i), s += "&application_pub_key=" + c), (u = new Headers).append("Content-Type", "application/x-www-form-urlencoded"), l = {
                                    method: "POST",
                                    headers: u,
                                    body: s
                                }, h.label = 1;
                            case 1:
                                return h.trys.push([1, 4, , 5]), [4, fetch(Ye + "/fcm/connect/subscribe", l)];
                            case 2:
                                return [4, h.sent().json()];
                            case 3:
                                return d = h.sent(), [3, 5];
                            case 4:
                                throw f = h.sent(), Fe.create("token-update-failed", {
                                    errorInfo: f
                                });
                            case 5:
                                if (d.error) throw p = d.error.message, Fe.create("token-update-failed", {
                                    errorInfo: p
                                });
                                if (!d.token) throw Fe.create("token-update-no-token");
                                return [2, d.token]
                        }
                    }))
                }))
            }, e.prototype.deleteToken = function(e, t, n) {
                return (0, Be.__awaiter)(this, void 0, void 0, (function() {
                    var r, i, o, a, s, c;
                    return (0, Be.__generator)(this, (function(u) {
                        switch (u.label) {
                            case 0:
                                r = "authorized_entity=" + e + "&token=" + t + "&pushSet=" + n, (i = new Headers).append("Content-Type", "application/x-www-form-urlencoded"), o = {
                                    method: "POST",
                                    headers: i,
                                    body: r
                                }, u.label = 1;
                            case 1:
                                return u.trys.push([1, 4, , 5]), [4, fetch(Ye + "/fcm/connect/unsubscribe", o)];
                            case 2:
                                return [4, u.sent().json()];
                            case 3:
                                if ((a = u.sent()).error) throw s = a.error.message, Fe.create("token-unsubscribe-failed", {
                                    errorInfo: s
                                });
                                return [3, 5];
                            case 4:
                                throw c = u.sent(), Fe.create("token-unsubscribe-failed", {
                                    errorInfo: c
                                });
                            case 5:
                                return [2]
                        }
                    }))
                }))
            }, e
        }();
        /**
         * @license
         * Copyright 2017 Google Inc.
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        function Qe(e) {
            for (var t = (e + "=".repeat((4 - e.length % 4) % 4)).replace(/\-/g, "+").replace(/_/g, "/"), n = atob(t), r = new Uint8Array(n.length), i = 0; i < n.length; ++i) r[i] = n.charCodeAt(i);
            return r
        }
        /**
         * @license
         * Copyright 2017 Google Inc.
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        var He = "undefined",
            Ze = "fcm_token_object_Store";

        function qe() {
            var e = indexedDB.open(He);
            e.onerror = function(e) {}, e.onsuccess = function(t) {
                ! function(e) {
                    if (e.objectStoreNames.contains(Ze)) {
                        var t = e.transaction(Ze).objectStore(Ze),
                            n = new Ve,
                            r = t.openCursor();
                        r.onerror = function(e) {}, r.onsuccess = function() {
                            var t = r.result;
                            if (t) {
                                var i = t.value;
                                n.deleteToken(i.fcmSenderId, i.fcmToken, i.fcmPushSet), t.continue()
                            } else e.close(), indexedDB.deleteDatabase(He)
                        }
                    }
                }(e.result)
            }
        }
        /**
         * @license
         * Copyright 2017 Google Inc.
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        var $e = function() {
            function e() {
                this.dbPromise = null
            }
            return e.prototype.get = function(e) {
                return this.createTransaction((function(t) {
                    return t.get(e)
                }))
            }, e.prototype.getIndex = function(e, t) {
                return this.createTransaction((function(n) {
                    return n.index(e).get(t)
                }))
            }, e.prototype.put = function(e) {
                return this.createTransaction((function(t) {
                    return t.put(e)
                }), "readwrite")
            }, e.prototype.delete = function(e) {
                return this.createTransaction((function(t) {
                    return t.delete(e)
                }), "readwrite")
            }, e.prototype.closeDatabase = function() {
                return (0, Be.__awaiter)(this, void 0, void 0, (function() {
                    return (0, Be.__generator)(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                return this.dbPromise ? [4, this.dbPromise] : [3, 2];
                            case 1:
                                e.sent().close(), this.dbPromise = null, e.label = 2;
                            case 2:
                                return [2]
                        }
                    }))
                }))
            }, e.prototype.createTransaction = function(e, t) {
                return void 0 === t && (t = "readonly"), (0, Be.__awaiter)(this, void 0, void 0, (function() {
                    var n, r, i, o;
                    return (0, Be.__generator)(this, (function(a) {
                        switch (a.label) {
                            case 0:
                                return [4, this.getDb()];
                            case 1:
                                return n = a.sent(), r = n.transaction(this.objectStoreName, t), i = r.objectStore(this.objectStoreName), [4, Je(e(i))];
                            case 2:
                                return o = a.sent(), [2, new Promise((function(e, t) {
                                    r.oncomplete = function() {
                                        e(o)
                                    }, r.onerror = function() {
                                        t(r.error)
                                    }
                                }))]
                        }
                    }))
                }))
            }, e.prototype.getDb = function() {
                var e = this;
                return this.dbPromise || (this.dbPromise = new Promise((function(t, n) {
                    var r = indexedDB.open(e.dbName, e.dbVersion);
                    r.onsuccess = function() {
                        t(r.result)
                    }, r.onerror = function() {
                        e.dbPromise = null, n(r.error)
                    }, r.onupgradeneeded = function(t) {
                        return e.onDbUpgrade(r, t)
                    }
                }))), this.dbPromise
            }, e
        }();

        function Je(e) {
            return new Promise((function(t, n) {
                e.onsuccess = function() {
                    t(e.result)
                }, e.onerror = function() {
                    n(e.error)
                }
            }))
        }
        /**
         * @license
         * Copyright 2017 Google Inc.
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        var Xe = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.dbName = "fcm_token_details_db", t.dbVersion = 3, t.objectStoreName = "fcm_token_object_Store", t
            }
            return (0, Be.__extends)(t, e), t.prototype.onDbUpgrade = function(e, t) {
                var n = e.result;
                switch (t.oldVersion) {
                    case 0:
                        (r = n.createObjectStore(this.objectStoreName, {
                            keyPath: "swScope"
                        })).createIndex("fcmSenderId", "fcmSenderId", {
                            unique: !1
                        }), r.createIndex("fcmToken", "fcmToken", {
                            unique: !0
                        });
                    case 1:
                        qe();
                    case 2:
                        var r, i = (r = e.transaction.objectStore(this.objectStoreName)).openCursor();
                        i.onsuccess = function() {
                            var e = i.result;
                            if (e) {
                                var t = e.value,
                                    n = (0, Be.__assign)({}, t);
                                t.createTime || (n.createTime = Date.now()), "string" == typeof t.vapidKey && (n.vapidKey = Qe(t.vapidKey)), "string" == typeof t.auth && (n.auth = Qe(t.auth).buffer), "string" == typeof t.auth && (n.p256dh = Qe(t.p256dh).buffer), e.update(n), e.continue()
                            }
                        }
                }
            }, t.prototype.getTokenDetailsFromToken = function(e) {
                return (0, Be.__awaiter)(this, void 0, void 0, (function() {
                    return (0, Be.__generator)(this, (function(t) {
                        if (!e) throw Fe.create("bad-token");
                        return et({
                            fcmToken: e
                        }), [2, this.getIndex("fcmToken", e)]
                    }))
                }))
            }, t.prototype.getTokenDetailsFromSWScope = function(e) {
                return (0, Be.__awaiter)(this, void 0, void 0, (function() {
                    return (0, Be.__generator)(this, (function(t) {
                        if (!e) throw Fe.create("bad-scope");
                        return et({
                            swScope: e
                        }), [2, this.get(e)]
                    }))
                }))
            }, t.prototype.saveTokenDetails = function(e) {
                return (0, Be.__awaiter)(this, void 0, void 0, (function() {
                    return (0, Be.__generator)(this, (function(t) {
                        if (!e.swScope) throw Fe.create("bad-scope");
                        if (!e.vapidKey) throw Fe.create("bad-vapid-key");
                        if (!e.endpoint || !e.auth || !e.p256dh) throw Fe.create("bad-subscription");
                        if (!e.fcmSenderId) throw Fe.create("bad-sender-id");
                        if (!e.fcmToken) throw Fe.create("bad-token");
                        if (!e.fcmPushSet) throw Fe.create("bad-push-set");
                        return et(e), [2, this.put(e)]
                    }))
                }))
            }, t.prototype.deleteToken = function(e) {
                return (0, Be.__awaiter)(this, void 0, void 0, (function() {
                    var t;
                    return (0, Be.__generator)(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return "string" != typeof e || 0 === e.length ? [2, Promise.reject(Fe.create("invalid-delete-token"))] : [4, this.getTokenDetailsFromToken(e)];
                            case 1:
                                if (!(t = n.sent())) throw Fe.create("delete-token-not-found");
                                return [4, this.delete(t.swScope)];
                            case 2:
                                return n.sent(), [2, t]
                        }
                    }))
                }))
            }, t
        }($e);

        function et(e) {
            if (e.fcmToken && ("string" != typeof e.fcmToken || 0 === e.fcmToken.length)) throw Fe.create("bad-token");
            if (e.swScope && ("string" != typeof e.swScope || 0 === e.swScope.length)) throw Fe.create("bad-scope");
            if (e.vapidKey && (!(e.vapidKey instanceof Uint8Array) || 65 !== e.vapidKey.length)) throw Fe.create("bad-vapid-key");
            if (e.endpoint && ("string" != typeof e.endpoint || 0 === e.endpoint.length)) throw Fe.create("bad-subscription");
            if (e.auth && !(e.auth instanceof ArrayBuffer)) throw Fe.create("bad-subscription");
            if (e.p256dh && !(e.p256dh instanceof ArrayBuffer)) throw Fe.create("bad-subscription");
            if (e.fcmSenderId && ("string" != typeof e.fcmSenderId || 0 === e.fcmSenderId.length)) throw Fe.create("bad-sender-id");
            if (e.fcmPushSet && ("string" != typeof e.fcmPushSet || 0 === e.fcmPushSet.length)) throw Fe.create("bad-push-set")
        }
        /**
         * @license
         * Copyright 2017 Google Inc.
         *
         * Licensed under the Apache License, Version 2.0 (the "License");
         * you may not use this file except in compliance with the License.
         * You may obtain a copy of the License at
         *
         *   http://www.apache.org/licenses/LICENSE-2.0
         *
         * Unless required by applicable law or agreed to in writing, software
         * distributed under the License is distributed on an "AS IS" BASIS,
         * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         * See the License for the specific language governing permissions and
         * limitations under the License.
         */
        var tt = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.dbName = "fcm_vapid_details_db", t.dbVersion = 1, t.objectStoreName = "fcm_vapid_object_Store", t
                }
                return (0, Be.__extends)(t, e), t.prototype.onDbUpgrade = function(e) {
                    e.result.createObjectStore(this.objectStoreName, {
                        keyPath: "swScope"
                    })
                }, t.prototype.getVapidFromSWScope = function(e) {
                    return (0, Be.__awaiter)(this, void 0, void 0, (function() {
                        var t;
                        return (0, Be.__generator)(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    if ("string" != typeof e || 0 === e.length) throw Fe.create("bad-scope");
                                    return [4, this.get(e)];
                                case 1:
                                    return [2, (t = n.sent()) ? t.vapidKey : void 0]
                            }
                        }))
                    }))
                }, t.prototype.saveVapidDetails = function(e, t) {
                    return (0, Be.__awaiter)(this, void 0, void 0, (function() {
                        var n;
                        return (0, Be.__generator)(this, (function(r) {
                            if ("string" != typeof e || 0 === e.length) throw Fe.create("bad-scope");
                            if (null === t || 65 !== t.length) throw Fe.create("bad-vapid-key");
                            return n = {
                                swScope: e,
                                vapidKey: t
                            }, [2, this.put(n)]
                        }))
                    }))
                }, t.prototype.deleteVapidDetails = function(e) {
                    return (0, Be.__awaiter)(this, void 0, void 0, (function() {
                        var t;
                        return (0, Be.__generator)(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, this.getVapidFromSWScope(e)];
                                case 1:
                                    if (!(t = n.sent())) throw Fe.create("delete-scope-not-found");
                                    return [4, this.delete(e)];
                                case 2:
                                    return n.sent(), [2, t]
                            }
                        }))
                    }))
                }, t
            }($e),
            nt = function() {
                function e(e) {
                    var t = this;
                    if (!e.options.messagingSenderId || "string" != typeof e.options.messagingSenderId) throw Fe.create("bad-sender-id");
                    this.messagingSenderId = e.options.messagingSenderId, this.tokenDetailsModel = new Xe, this.vapidDetailsModel = new tt, this.iidModel = new Ve, this.app = e, this.INTERNAL = {
                        delete: function() {
                            return t.delete()
                        }
                    }
                }
                return e.prototype.getToken = function() {
                    return (0, Be.__awaiter)(this, void 0, void 0, (function() {
                        var e, t, n, r, i;
                        return (0, Be.__generator)(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    if ("denied" === (e = this.getNotificationPermission_())) throw Fe.create("notifications-blocked");
                                    return "granted" !== e ? [2, null] : [4, this.getSWRegistration_()];
                                case 1:
                                    return t = o.sent(), [4, this.getPublicVapidKey_()];
                                case 2:
                                    return n = o.sent(), [4, this.getPushSubscription(t, n)];
                                case 3:
                                    return r = o.sent(), [4, this.tokenDetailsModel.getTokenDetailsFromSWScope(t.scope)];
                                case 4:
                                    return (i = o.sent()) ? [2, this.manageExistingToken(t, r, n, i)] : [2, this.getNewToken(t, r, n)]
                            }
                        }))
                    }))
                }, e.prototype.manageExistingToken = function(e, t, n, r) {
                    return (0, Be.__awaiter)(this, void 0, void 0, (function() {
                        return (0, Be.__generator)(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    return function(e, t, n) {
                                        if (!n.vapidKey || !Ge(t.buffer, n.vapidKey.buffer)) return !1;
                                        var r = e.endpoint === n.endpoint,
                                            i = Ge(e.getKey("auth"), n.auth),
                                            o = Ge(e.getKey("p256dh"), n.p256dh);
                                        return r && i && o
                                    }
                                    /**
                                     * @license
                                     * Copyright 2017 Google Inc.
                                     *
                                     * Licensed under the Apache License, Version 2.0 (the "License");
                                     * you may not use this file except in compliance with the License.
                                     * You may obtain a copy of the License at
                                     *
                                     *   http://www.apache.org/licenses/LICENSE-2.0
                                     *
                                     * Unless required by applicable law or agreed to in writing, software
                                     * distributed under the License is distributed on an "AS IS" BASIS,
                                     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                                     * See the License for the specific language governing permissions and
                                     * limitations under the License.
                                     */
                                    (t, n, r) ? Date.now() < r.createTime + 6048e5 ? [2, r.fcmToken] : [2, this.updateToken(e, t, n, r)]: [4, this.deleteTokenFromDB(r.fcmToken)];
                                case 1:
                                    return i.sent(), [2, this.getNewToken(e, t, n)]
                            }
                        }))
                    }))
                }, e.prototype.updateToken = function(e, t, n, r) {
                    return (0, Be.__awaiter)(this, void 0, void 0, (function() {
                        var i, o, a;
                        return (0, Be.__generator)(this, (function(s) {
                            switch (s.label) {
                                case 0:
                                    return s.trys.push([0, 4, , 6]), [4, this.iidModel.updateToken(this.messagingSenderId, r.fcmToken, r.fcmPushSet, t, n)];
                                case 1:
                                    return i = s.sent(), o = {
                                        swScope: e.scope,
                                        vapidKey: n,
                                        fcmSenderId: this.messagingSenderId,
                                        fcmToken: i,
                                        fcmPushSet: r.fcmPushSet,
                                        createTime: Date.now(),
                                        endpoint: t.endpoint,
                                        auth: t.getKey("auth"),
                                        p256dh: t.getKey("p256dh")
                                    }, [4, this.tokenDetailsModel.saveTokenDetails(o)];
                                case 2:
                                    return s.sent(), [4, this.vapidDetailsModel.saveVapidDetails(e.scope, n)];
                                case 3:
                                    return s.sent(), [2, i];
                                case 4:
                                    return a = s.sent(), [4, this.deleteToken(r.fcmToken)];
                                case 5:
                                    throw s.sent(), a;
                                case 6:
                                    return [2]
                            }
                        }))
                    }))
                }, e.prototype.getNewToken = function(e, t, n) {
                    return (0, Be.__awaiter)(this, void 0, void 0, (function() {
                        var r, i;
                        return (0, Be.__generator)(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    return [4, this.iidModel.getToken(this.messagingSenderId, t, n)];
                                case 1:
                                    return r = o.sent(), i = {
                                        swScope: e.scope,
                                        vapidKey: n,
                                        fcmSenderId: this.messagingSenderId,
                                        fcmToken: r.token,
                                        fcmPushSet: r.pushSet,
                                        createTime: Date.now(),
                                        endpoint: t.endpoint,
                                        auth: t.getKey("auth"),
                                        p256dh: t.getKey("p256dh")
                                    }, [4, this.tokenDetailsModel.saveTokenDetails(i)];
                                case 2:
                                    return o.sent(), [4, this.vapidDetailsModel.saveVapidDetails(e.scope, n)];
                                case 3:
                                    return o.sent(), [2, r.token]
                            }
                        }))
                    }))
                }, e.prototype.deleteToken = function(e) {
                    return (0, Be.__awaiter)(this, void 0, void 0, (function() {
                        var t, n;
                        return (0, Be.__generator)(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, this.deleteTokenFromDB(e)];
                                case 1:
                                    return r.sent(), [4, this.getSWRegistration_()];
                                case 2:
                                    return (t = r.sent()) ? [4, t.pushManager.getSubscription()] : [3, 4];
                                case 3:
                                    if (n = r.sent()) return [2, n.unsubscribe()];
                                    r.label = 4;
                                case 4:
                                    return [2, !0]
                            }
                        }))
                    }))
                }, e.prototype.deleteTokenFromDB = function(e) {
                    return (0, Be.__awaiter)(this, void 0, void 0, (function() {
                        var t;
                        return (0, Be.__generator)(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return [4, this.tokenDetailsModel.deleteToken(e)];
                                case 1:
                                    return t = n.sent(), [4, this.iidModel.deleteToken(t.fcmSenderId, t.fcmToken, t.fcmPushSet)];
                                case 2:
                                    return n.sent(), [2]
                            }
                        }))
                    }))
                }, e.prototype.getPushSubscription = function(e, t) {
                    return e.pushManager.getSubscription().then((function(n) {
                        return n || e.pushManager.subscribe({
                            userVisibleOnly: !0,
                            applicationServerKey: t
                        })
                    }))
                }, e.prototype.requestPermission = function() {
                    throw Fe.create("only-available-in-window")
                }, e.prototype.useServiceWorker = function(e) {
                    throw Fe.create("only-available-in-window")
                }, e.prototype.usePublicVapidKey = function(e) {
                    throw Fe.create("only-available-in-window")
                }, e.prototype.onMessage = function(e, t, n) {
                    throw Fe.create("only-available-in-window")
                }, e.prototype.onTokenRefresh = function(e, t, n) {
                    throw Fe.create("only-available-in-window")
                }, e.prototype.setBackgroundMessageHandler = function(e) {
                    throw Fe.create("only-available-in-sw")
                }, e.prototype.delete = function() {
                    return (0, Be.__awaiter)(this, void 0, void 0, (function() {
                        return (0, Be.__generator)(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, Promise.all([this.tokenDetailsModel.closeDatabase(), this.vapidDetailsModel.closeDatabase()])];
                                case 1:
                                    return e.sent(), [2]
                            }
                        }))
                    }))
                }, e.prototype.getNotificationPermission_ = function() {
                    return Notification.permission
                }, e.prototype.getTokenDetailsModel = function() {
                    return this.tokenDetailsModel
                }, e.prototype.getVapidDetailsModel = function() {
                    return this.vapidDetailsModel
                }, e.prototype.getIidModel = function() {
                    return this.iidModel
                }, e
            }();
        var rt = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.bgMessageHandler = null, self.addEventListener("push", (function(e) {
                    n.onPush(e)
                })), self.addEventListener("pushsubscriptionchange", (function(e) {
                    n.onSubChange(e)
                })), self.addEventListener("notificationclick", (function(e) {
                    n.onNotificationClick(e)
                })), n
            }
            return (0, Be.__extends)(t, e), t.prototype.onPush = function(e) {
                e.waitUntil(this.onPush_(e))
            }, t.prototype.onSubChange = function(e) {
                e.waitUntil(this.onSubChange_(e))
            }, t.prototype.onNotificationClick = function(e) {
                e.waitUntil(this.onNotificationClick_(e))
            }, t.prototype.onPush_ = function(e) {
                return (0, Be.__awaiter)(this, void 0, void 0, (function() {
                    var t, n, r, i, o, a;
                    return (0, Be.__generator)(this, (function(s) {
                        switch (s.label) {
                            case 0:
                                if (!e.data) return [2];
                                try {
                                    t = e.data.json()
                                } catch (e) {
                                    return [2]
                                }
                                return [4, this.hasVisibleClients_()];
                            case 1:
                                return s.sent() ? [2, this.sendMessageToWindowClients_(t)] : (n = this.getNotificationData_(t)) ? (r = n.title || "", [4, this.getSWRegistration_()]) : [3, 3];
                            case 2:
                                return i = s.sent(), o = n.actions, a = Notification.maxActions, o && a && o.length, [2, i.showNotification(r, n)];
                            case 3:
                                return this.bgMessageHandler ? [4, this.bgMessageHandler(t)] : [3, 5];
                            case 4:
                                return s.sent(), [2];
                            case 5:
                                return [2]
                        }
                    }))
                }))
            }, t.prototype.onSubChange_ = function(e) {
                return (0, Be.__awaiter)(this, void 0, void 0, (function() {
                    var e, t, n, r;
                    return (0, Be.__generator)(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return i.trys.push([0, 2, , 3]), [4, this.getSWRegistration_()];
                            case 1:
                                return e = i.sent(), [3, 3];
                            case 2:
                                throw t = i.sent(), Fe.create("unable-to-resubscribe", {
                                    errorInfo: t
                                });
                            case 3:
                                return i.trys.push([3, 5, , 8]), [4, e.pushManager.getSubscription()];
                            case 4:
                                return i.sent(), [3, 8];
                            case 5:
                                return n = i.sent(), [4, this.getTokenDetailsModel().getTokenDetailsFromSWScope(e.scope)];
                            case 6:
                                if (!(r = i.sent())) throw n;
                                return [4, this.deleteToken(r.fcmToken)];
                            case 7:
                                throw i.sent(), n;
                            case 8:
                                return [2]
                        }
                    }))
                }))
            }, t.prototype.onNotificationClick_ = function(e) {
                return (0, Be.__awaiter)(this, void 0, void 0, (function() {
                    var t, n, r, i;
                    return (0, Be.__generator)(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return e.notification && e.notification.data && e.notification.data.FCM_MSG ? e.action ? [2] : (e.stopImmediatePropagation(), e.notification.close(), (t = e.notification.data.FCM_MSG).notification && (n = t.fcmOptions && t.fcmOptions.link || t.notification.click_action) ? [4, this.getWindowClient_(n)] : [2]) : [2];
                            case 1:
                                return (r = o.sent()) ? [3, 3] : [4, self.clients.openWindow(n)];
                            case 2:
                                return r = o.sent(), [3, 5];
                            case 3:
                                return [4, r.focus()];
                            case 4:
                                r = o.sent(), o.label = 5;
                            case 5:
                                return r ? (delete t.notification, delete t.fcmOptions, i = ot(Ae.NOTIFICATION_CLICKED, t), [2, this.attemptToMessageClient_(r, i)]) : [2]
                        }
                    }))
                }))
            }, t.prototype.getNotificationData_ = function(e) {
                var t;
                if (e && "object" == typeof e.notification) {
                    var n = (0, Be.__assign)({}, e.notification);
                    return n.data = (0, Be.__assign)({}, e.notification.data, ((t = {}).FCM_MSG = e, t)), n
                }
            }, t.prototype.setBackgroundMessageHandler = function(e) {
                if (!e || "function" != typeof e) throw Fe.create("bg-handler-function-expected");
                this.bgMessageHandler = e
            }, t.prototype.getWindowClient_ = function(e) {
                return (0, Be.__awaiter)(this, void 0, void 0, (function() {
                    var t, n, r, i;
                    return (0, Be.__generator)(this, (function(o) {
                        switch (o.label) {
                            case 0:
                                return t = new URL(e, self.location.href).href, [4, it()];
                            case 1:
                                for (n = o.sent(), r = null, i = 0; i < n.length; i++)
                                    if (new URL(n[i].url, self.location.href).href === t) {
                                        r = n[i];
                                        break
                                    }
                                return [2, r]
                        }
                    }))
                }))
            }, t.prototype.attemptToMessageClient_ = function(e, t) {
                return (0, Be.__awaiter)(this, void 0, void 0, (function() {
                    return (0, Be.__generator)(this, (function(n) {
                        if (!e) throw Fe.create("no-window-client-to-msg");
                        return e.postMessage(t), [2]
                    }))
                }))
            }, t.prototype.hasVisibleClients_ = function() {
                return (0, Be.__awaiter)(this, void 0, void 0, (function() {
                    return (0, Be.__generator)(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, it()];
                            case 1:
                                return [2, e.sent().some((function(e) {
                                    return "visible" === e.visibilityState && !e.url.startsWith("chrome-extension://")
                                }))]
                        }
                    }))
                }))
            }, t.prototype.sendMessageToWindowClients_ = function(e) {
                return (0, Be.__awaiter)(this, void 0, void 0, (function() {
                    var t, n, r = this;
                    return (0, Be.__generator)(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return [4, it()];
                            case 1:
                                return t = i.sent(), n = ot(Ae.PUSH_MSG_RECEIVED, e), [4, Promise.all(t.map((function(e) {
                                    return r.attemptToMessageClient_(e, n)
                                })))];
                            case 2:
                                return i.sent(), [2]
                        }
                    }))
                }))
            }, t.prototype.getSWRegistration_ = function() {
                return (0, Be.__awaiter)(this, void 0, void 0, (function() {
                    return (0, Be.__generator)(this, (function(e) {
                        return [2, self.registration]
                    }))
                }))
            }, t.prototype.getPublicVapidKey_ = function() {
                return (0, Be.__awaiter)(this, void 0, void 0, (function() {
                    var e, t;
                    return (0, Be.__generator)(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, this.getSWRegistration_()];
                            case 1:
                                if (!(e = n.sent())) throw Fe.create("sw-registration-expected");
                                return [4, this.getVapidDetailsModel().getVapidFromSWScope(e.scope)];
                            case 2:
                                return null == (t = n.sent()) ? [2, We] : [2, t]
                        }
                    }))
                }))
            }, t
        }(nt);

        function it() {
            return self.clients.matchAll({
                type: "window",
                includeUncontrolled: !0
            })
        }

        function ot(e, t) {
            var n;
            return (n = {})[Oe.TYPE_OF_MSG] = e, n[Oe.DATA] = t, n
            /**
             * @license
             * Copyright 2017 Google Inc.
             *
             * Licensed under the Apache License, Version 2.0 (the "License");
             * you may not use this file except in compliance with the License.
             * You may obtain a copy of the License at
             *
             *   http://www.apache.org/licenses/LICENSE-2.0
             *
             * Unless required by applicable law or agreed to in writing, software
             * distributed under the License is distributed on an "AS IS" BASIS,
             * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
             * See the License for the specific language governing permissions and
             * limitations under the License.
             */
        }
        var at, st, ct = function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.registrationToUse = null, n.publicVapidKeyToUse = null, n.messageObserver = null, n.tokenRefreshObserver = null, n.onMessageInternal = (0, Re.createSubscribe)((function(e) {
                    n.messageObserver = e
                })), n.onTokenRefreshInternal = (0, Re.createSubscribe)((function(e) {
                    n.tokenRefreshObserver = e
                })), n.setupSWMessageListener_(), n
            }
            return (0, Be.__extends)(t, e), t.prototype.requestPermission = function() {
                return (0, Be.__awaiter)(this, void 0, void 0, (function() {
                    var e;
                    return (0, Be.__generator)(this, (function(t) {
                        switch (t.label) {
                            case 0:
                                return "granted" === this.getNotificationPermission_() ? [2] : [4, Notification.requestPermission()];
                            case 1:
                                if ("granted" === (e = t.sent())) return [2];
                                throw "denied" === e ? Fe.create("permission-blocked") : Fe.create("permission-default")
                        }
                    }))
                }))
            }, t.prototype.useServiceWorker = function(e) {
                if (!(e instanceof ServiceWorkerRegistration)) throw Fe.create("sw-registration-expected");
                if (null != this.registrationToUse) throw Fe.create("use-sw-before-get-token");
                this.registrationToUse = e
            }, t.prototype.usePublicVapidKey = function(e) {
                if ("string" != typeof e) throw Fe.create("invalid-public-vapid-key");
                if (null != this.publicVapidKeyToUse) throw Fe.create("use-public-key-before-get-token");
                var t = Qe(e);
                if (65 !== t.length) throw Fe.create("public-vapid-key-decryption-failed");
                this.publicVapidKeyToUse = t
            }, t.prototype.onMessage = function(e, t, n) {
                return "function" == typeof e ? this.onMessageInternal(e, t, n) : this.onMessageInternal(e)
            }, t.prototype.onTokenRefresh = function(e, t, n) {
                return "function" == typeof e ? this.onTokenRefreshInternal(e, t, n) : this.onTokenRefreshInternal(e)
            }, t.prototype.waitForRegistrationToActivate_ = function(e) {
                var t = e.installing || e.waiting || e.active;
                return new Promise((function(n, r) {
                    if (t)
                        if ("activated" !== t.state)
                            if ("redundant" !== t.state) {
                                var i = function() {
                                    if ("activated" === t.state) n(e);
                                    else {
                                        if ("redundant" !== t.state) return;
                                        r(Fe.create("sw-reg-redundant"))
                                    }
                                    t.removeEventListener("statechange", i)
                                };
                                t.addEventListener("statechange", i)
                            } else r(Fe.create("sw-reg-redundant"));
                    else n(e);
                    else r(Fe.create("no-sw-in-reg"))
                }))
            }, t.prototype.getSWRegistration_ = function() {
                var e = this;
                return this.registrationToUse ? this.waitForRegistrationToActivate_(this.registrationToUse) : (this.registrationToUse = null, navigator.serviceWorker.register("/firebase-messaging-sw.js", {
                    scope: "/firebase-cloud-messaging-push-scope"
                }).catch((function(e) {
                    throw Fe.create("failed-serviceworker-registration", {
                        browserErrorMessage: e.message
                    })
                })).then((function(t) {
                    return e.waitForRegistrationToActivate_(t).then((function() {
                        return e.registrationToUse = t, t.update(), t
                    }))
                })))
            }, t.prototype.getPublicVapidKey_ = function() {
                return (0, Be.__awaiter)(this, void 0, void 0, (function() {
                    return (0, Be.__generator)(this, (function(e) {
                        return this.publicVapidKeyToUse ? [2, this.publicVapidKeyToUse] : [2, We]
                    }))
                }))
            }, t.prototype.setupSWMessageListener_ = function() {
                var e = this;
                navigator.serviceWorker.addEventListener("message", (function(t) {
                    if (t.data && t.data[Oe.TYPE_OF_MSG]) {
                        var n = t.data;
                        switch (n[Oe.TYPE_OF_MSG]) {
                            case Ae.PUSH_MSG_RECEIVED:
                            case Ae.NOTIFICATION_CLICKED:
                                var r = n[Oe.DATA];
                                e.messageObserver && e.messageObserver.next(r)
                        }
                    }
                }), !1)
            }, t
        }(nt);

        function ut() {
            return self && "ServiceWorkerGlobalScope" in self ? "PushManager" in self && "Notification" in self && ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification") && PushSubscription.prototype.hasOwnProperty("getKey") : navigator.cookieEnabled && "serviceWorker" in navigator && "PushManager" in window && "Notification" in window && "fetch" in window && ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification") && PushSubscription.prototype.hasOwnProperty("getKey")
        }
        at = ze.default, st = {
            isSupported: ut
        }, at.INTERNAL.registerService("messaging", (function(e) {
            if (!ut()) throw Fe.create("unsupported-browser");
            return self && "ServiceWorkerGlobalScope" in self ? new rt(e) : new ct(e)
        }), st);
        var lt, dt = function(e, t, n, r) {
                return new(n || (n = Promise))((function(i, o) {
                    function a(e) {
                        try {
                            c(r.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function s(e) {
                        try {
                            c(r.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(a, s)
                    }
                    c((r = r.apply(e, t || [])).next())
                }))
            },
            ft = function(e, t) {
                var n, r, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function s(o) {
                    return function(s) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1], i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2], a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, s])
                    }
                }
            },
            pt = {
                messaging_sender_id: "",
                isNativeMode: !1
            };

        function ht() {
            return dt(this, void 0, void 0, (function() {
                var e, t, n;
                return ft(this, (function(r) {
                    switch (r.label) {
                        case 0:
                            e = Ce().messaging(), r.label = 1;
                        case 1:
                            return r.trys.push([1, 3, , 4]), [4, e.getToken()];
                        case 2:
                            if (!(t = r.sent())) throw u(o.FIREBASE_TOKEN_UPDATE_FAILED, {
                                firebaseErrorMessage: "empty firebase token"
                            });
                            return [2, t];
                        case 3:
                            throw n = r.sent(), u(o.FIREBASE_REGISTRAION_FAILED, {
                                firebaseErrorMessage: n.message,
                                error: n
                            });
                        case 4:
                            return [2]
                    }
                }))
            }))
        }
        var bt = "najva-reset",
            vt = "najva-hidden",
            wt = "najva-float-left",
            yt = "najva-float-right",
            gt = "najva-clearfix",
            _t = "2147483645",
            mt = "najva-style-container",
            Mt = {
                extra_css: ""
            };

        function Et(e) {
            e && "string" == typeof e && function() {
                var e = document.getElementById(mt);
                return e || ((e = document.createElement("style")).setAttribute("id", mt), document.getElementsByTagName("head")[0].appendChild(e), e)
            }().appendChild(document.createTextNode(e))
        }

        function Nt(e) {
            var t;
            t = "\n  ." + bt + ': {\n            background-attachment: scroll;\n            background-color: transparent;\n            background-image: none;\n            background-position: 0 0;\n            background-repeat: repeat;\n            border-color: #000;\n            border: medium none currentColor;\n            bottom: auto;\n            clear: none;\n            clip: auto;\n            color: inherit;\n            counter-increment: none;\n            counter-reset: none;\n            cursor: auto;\n            direction: inherit;\n            display: inline;\n            float: none;\n            font-family: inherit;\n            font-size: inherit;\n            font-style: inherit;\n            font-variant: normal;\n            font-weight: inherit;\n            height: auto;\n            left: auto;\n            letter-spacing: normal;\n            line-height: inherit;\n            list-style-type: inherit;\n            list-style-position: outside;\n            list-style-image: none;\n            margin: 0;\n            max-height: none;\n            max-width: none;\n            min-height: 0;\n            min-width: 0;\n            opacity: 1;\n            outline: medium none invert;\n            overflow: visible;\n            padding: 0;\n            position: static;\n            quotes: "" "";\n            right: auto;\n            table-layout: auto;\n            text-align: inherit;\n            text-decoration: inherit;\n            text-indent: 0;\n            text-transform: none;\n            top: auto;\n            unicode-bidi: normal;\n            vertical-align: baseline;\n            visibility: inherit;\n            white-space: normal;\n            width: auto;\n            word-spacing: normal;\n            z-index: auto;\n            background-origin: padding-box;\n            background-clip: border-box;\n            background-size: auto;\n            -o-border-image: none;\n            border-image: none;\n            border-radius: 0;\n            box-shadow: none;\n            box-sizing: content-box;\n            column-count: auto;\n            column-gap: normal;\n            column-rule: medium none #000;\n            column-span: 1;\n            column-width: auto;\n            -webkit-font-feature-settings: normal;\n            font-feature-settings: normal;\n            overflow-x: visible;\n            overflow-y: visible;\n            -webkit-hyphens: manual;\n            -ms-hyphens: manual;\n            hyphens: manual;\n            -ms-perspective: none;\n            -o-perspective: none;\n            perspective: none;\n            -ms-perspective-origin: 50% 50%;\n            -o-perspective-origin: 50% 50%;\n            perspective-origin: 50% 50%;\n            -webkit-backface-visibility: visible;\n            backface-visibility: visible;\n            text-shadow: none;\n            transition: all 0s ease 0s;\n            transform: none;\n            transform-origin: 50% 50%;\n            transform-style: flat;\n            word-break: normal;\n        }\n        .' + vt + " {\n            opacity: 0 !important;\n            visibility: hidden !important;\n        }\n        ." + wt + " {\n            float: left!important;\n        }\n        \n        ." + yt + " {\n            float: right!important;\n        }\n        \n        ." + gt + ":after, ." + gt + ':before {\n            content: " "!important;\n            display: table!important;\n        }\n        \n        .' + gt + ":after {\n            clear: both!important;\n        }\n        \n        ." + gt + " {\n            zoom: 1!important;\n            width: auto!important;\n        }\n                               \n    ", (Mt = e).extra_css && (t += Mt.extra_css), Et(t)
        }
        var Tt = function(e) {
            var t = "function" == typeof Symbol && Symbol.iterator,
                n = t && e[t],
                r = 0;
            if (n) return n.call(e);
            if (e && "number" == typeof e.length) return {
                next: function() {
                    return e && r >= e.length && (e = void 0), {
                        value: e && e[r++],
                        done: !e
                    }
                }
            };
            throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
        };

        function Lt(e) {
            var t = document.createElement("div");
            return t.innerHTML = e.trim(), t.firstChild
        }! function() {
            var e = [],
                t = !1,
                n = !1;

            function r() {
                var n, r;
                if (!t) {
                    !0;
                    try {
                        for (var i = Tt(e), o = i.next(); !o.done; i.next()) {
                            o.value.call(window)
                        }
                    } catch (e) {
                        ({
                            error: e
                        })
                    } finally {
                        try {
                            o && !o.done && i.return && r.call(i)
                        } finally {
                            if (n) throw n.error
                        }
                    }[]
                }
            }
        }();
        var St, jt = function(e, t, n, r) {
                return new(n || (n = Promise))((function(i, o) {
                    function a(e) {
                        try {
                            c(r.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function s(e) {
                        try {
                            c(r.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(a, s)
                    }
                    c((r = r.apply(e, t || [])).next())
                }))
            },
            kt = function(e, t) {
                var n, r, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function s(o) {
                    return function(s) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1], i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2], a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, s])
                    }
                }
            },
            xt = {
                website_id: "",
                najva_subdomain: "",
                api_key: ""
            },
            Dt = "najva-resubscribe";

        function It(e) {
            return jt(this, void 0, void 0, (function() {
                return kt(this, (function(t) {
                    return xt = e,
                        function() {
                            if (!document.querySelector(Dt)) {
                                var e = Lt("<iframe id=" + Dt + " style='display: none!important;' src='" + xt.najva_subdomain + "resubscribe/?website=" + xt.website_id + "&api_key=" + xt.api_key + "'></iframe>");
                                e && document.body.appendChild(e)
                            }
                        }(), [2]
                }))
            }))
        }

        function Ot() {
            ! function() {
                var e = xt.najva_subdomain + "request/permission/?website=" + xt.website_id + "&api_key=" + xt.api_key,
                    t = window.open(e, "popup", "width=700,height=700,scrollbars=no,resizable=no,toolbar=no,menubar=no");
                null == t || t.focus(), Te(l.HasNajvaSubscriptionWindowOpened, "true")
            }()
        }! function(e) {
            e.NOTIF_PROMPT_OPEN = "najva_notification_prompt_open", e.NOTIF_PROMPT_CLOSE = "najva_notification_prompt_close", e.NOTIF_ACCESS_GRANTED = "najva_notification_access_granted", e.NOTIF_ACCESS_DENIED = "najva_notification_access_denied", e.NOTIF_ACCESS_ASK = "najva_notification_access_ask"
        }(St || (St = {}));
        var At = function(e, t, n, r) {
                return new(n || (n = Promise))((function(i, o) {
                    function a(e) {
                        try {
                            c(r.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function s(e) {
                        try {
                            c(r.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(a, s)
                    }
                    c((r = r.apply(e, t || [])).next())
                }))
            },
            Pt = function(e, t) {
                var n, r, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function s(o) {
                    return function(s) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1], i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2], a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, s])
                    }
                }
            },
            Ct = "granted",
            zt = "denied",
            Bt = "prompt";

        function Rt() {
            return At(this, void 0, void 0, (function() {
                return Pt(this, (function(e) {
                    switch (e.label) {
                        case 0:
                            return e.trys.push([0, 2, , 3]), [4, navigator.permissions.query({
                                name: "notifications"
                            })];
                        case 1:
                            return [2, e.sent()];
                        case 2:
                            return e.sent(), [2, null];
                        case 3:
                            return [2]
                    }
                }))
            }))
        }

        function Ut() {
            return At(this, void 0, void 0, (function() {
                var e;
                return Pt(this, (function(t) {
                    switch (t.label) {
                        case 0:
                            return [4, Rt()];
                        case 1:
                            return (e = t.sent()) ? [2, e.state] : window.Notification ? [2, Notification.permission] : [2, null]
                    }
                }))
            }))
        }

        function Ft() {
            return At(this, void 0, void 0, (function() {
                return Pt(this, (function(e) {
                    switch (e.label) {
                        case 0:
                            return t = new Event(St.NOTIF_PROMPT_OPEN), window.dispatchEvent(t), [4, Notification.requestPermission()];
                        case 1:
                            return e.sent(),
                                function() {
                                    var e = new Event(St.NOTIF_PROMPT_CLOSE);
                                    window.dispatchEvent(e)
                                }(), [2]
                    }
                    var t
                }))
            }))
        }

        function Wt() {
            return At(this, void 0, void 0, (function() {
                var e, t = this;
                return Pt(this, (function(n) {
                    switch (n.label) {
                        case 0:
                            return [4, Rt()];
                        case 1:
                            return (e = n.sent()) ? (e.onchange = function(e) {
                                return At(t, void 0, void 0, (function() {
                                    var t;
                                    return Pt(this, (function(n) {
                                        switch (n.label) {
                                            case 0:
                                                return (t = e.currentTarget.state) !== Ct ? [3, 1] : (function() {
                                                    var e = new Event(St.NOTIF_ACCESS_GRANTED);
                                                    window.dispatchEvent(e)
                                                }(), [3, 4]);
                                            case 1:
                                                return t !== zt ? [3, 2] : (function() {
                                                    var e = new Event(St.NOTIF_ACCESS_DENIED);
                                                    window.dispatchEvent(e)
                                                }(), [3, 4]);
                                            case 2:
                                                return function() {
                                                    var e = new Event(St.NOTIF_ACCESS_ASK);
                                                    window.dispatchEvent(e)
                                                }(), [4, Ft()];
                                            case 3:
                                                n.sent(), n.label = 4;
                                            case 4:
                                                return [2]
                                        }
                                    }))
                                }))
                            }, [2]) : [2]
                    }
                }))
            }))
        }

        function Yt() {
            return At(this, void 0, void 0, (function() {
                return Pt(this, (function(e) {
                    switch (e.label) {
                        case 0:
                            return [4, Ut()];
                        case 1:
                            return [2, e.sent() === Ct]
                    }
                }))
            }))
        }

        function Gt() {
            return At(this, void 0, void 0, (function() {
                return Pt(this, (function(e) {
                    switch (e.label) {
                        case 0:
                            return [4, Ut()];
                        case 1:
                            return [2, e.sent() === zt]
                    }
                }))
            }))
        }

        function Kt() {
            return At(this, void 0, void 0, (function() {
                return Pt(this, (function(e) {
                    switch (e.label) {
                        case 0:
                            return [4, Ut()];
                        case 1:
                            return [2, e.sent() === Bt]
                    }
                }))
            }))
        }
        var Vt = "https://report.najva.com";
        var Qt, Ht = function(e, t, n, r) {
                return new(n || (n = Promise))((function(i, o) {
                    function a(e) {
                        try {
                            c(r.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function s(e) {
                        try {
                            c(r.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(a, s)
                    }
                    c((r = r.apply(e, t || [])).next())
                }))
            },
            Zt = function(e, t) {
                var n, r, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function s(o) {
                    return function(s) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1], i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2], a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, s])
                    }
                }
            },
            qt = function(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    n = t && e[t],
                    r = 0;
                if (n) return n.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && r >= e.length && (e = void 0), {
                            value: e && e[r++],
                            done: !e
                        }
                    }
                };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            };

        function $t(e, t, n) {
            var r, i, o = [],
                a = JSON.parse((null == e ? void 0 : e.buttons) || "[]");
            if (a && a.length) try {
                for (var s = qt(a), c = s.next(); !c.done; c = s.next()) {
                    var u = c.value;
                    [0, 5, 6].includes(Number(u.onclick_action)) && o.push({
                        title: u.title,
                        icon: u.icon_url,
                        action: "BUTTON_CLICKED_" + u.button_id
                    })
                }
            } catch (e) {
                r = {
                    error: e
                }
            } finally {
                try {
                    c && !c.done && (i = s.return) && i.call(s)
                } finally {
                    if (r) throw r.error
                }
            }
            return {
                title: "" + ((null == e ? void 0 : e.title) || "title not provided"),
                options: {
                    body: (null == e ? void 0 : e.body) || "body not provided",
                    icon: (null == e ? void 0 : e.icon) + (n ? "?n=" + t : ""),
                    image: null == e ? void 0 : e.image,
                    requireInteraction: !0,
                    tag: (null == e ? void 0 : e.tag) || "",
                    data: e,
                    actions: o
                }
            }
        }

        function Jt(e) {
            var t = 0;
            return function n(r) {
                r().catch((function(i) {
                    t < e && (t += 1, setTimeout((function() {
                        n(r)
                    }), 5e3)), Qt(i)
                }))
            }
        }
        void 0 === Qt && (Qt = console.error);

        function Xt(t, n) {
            return Ht(this, void 0, void 0, (function() {
                var r, i, o, a, s, c, u, l, d, f, p;
                return Zt(this, (function(h) {
                    switch (h.label) {
                        case 0:
                            if (r = n.websiteId, i = n.notificationId, o = n.notificationData, a = n.isReportEnabled, s = n.version, c = n.najvaTokenFromPayload, u = null, c) return [3, 4];
                            h.label = 1;
                        case 1:
                            return h.trys.push([1, 3, , 4]), [4, P(x.Najva)];
                        case 2:
                            return u = h.sent(), [3, 4];
                        case 3:
                            return h.sent(), [3, 4];
                        case 4:
                            return l = c || (null == u ? void 0 : u.value) || function(e) {
                                for (var t = e || 0, n = [], r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", i = 0; i < t; i++) n.push(r.charAt(Math.floor(Math.random() * r.length)));
                                return n.join("")
                            }(15), d = $t(o, l, a), f = d.title, p = d.options, a && Jt(2)((function() {
                                return function(t) {
                                    var n = t.websiteId,
                                        r = t.notificationId,
                                        i = t.najvaToken,
                                        o = t.version;
                                    return e(Vt + "/deliver?website_id=" + n + "&notif_id=" + r + "&sub_id=" + i + "&version=" + o, {
                                        credentials: "include"
                                    })
                                }({
                                    websiteId: r,
                                    notificationId: i,
                                    najvaToken: l,
                                    version: s
                                })
                            })), [2, t.showNotification(f, p).then((function() {
                                a && Jt(2)((function() {
                                    return function(t) {
                                        var n = t.websiteId,
                                            r = t.notificationId,
                                            i = t.najvaToken,
                                            o = t.version;
                                        return e(Vt + "/show?website_id=" + n + "&notif_id=" + r + "&sub_id=" + i + "&version=" + o, {
                                            credentials: "include"
                                        })
                                    }({
                                        websiteId: r,
                                        notificationId: i,
                                        najvaToken: l,
                                        version: s
                                    })
                                }))
                            })).catch(Qt)]
                    }
                }))
            }))
        }
        var en = function(e, t, n, r) {
                return new(n || (n = Promise))((function(i, o) {
                    function a(e) {
                        try {
                            c(r.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function s(e) {
                        try {
                            c(r.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(a, s)
                    }
                    c((r = r.apply(e, t || [])).next())
                }))
            },
            tn = function(e, t) {
                var n, r, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function s(o) {
                    return function(s) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1], i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2], a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, s])
                    }
                }
            };

        function nn(e, t) {
            var n, r, i, o;
            return en(this, void 0, void 0, (function() {
                return tn(this, (function(a) {
                    switch (a.label) {
                        case 0:
                            return [4, Xt(t, {
                                websiteId: (null === (n = null == e ? void 0 : e.data) || void 0 === n ? void 0 : n.website_id) || "",
                                notificationId: (null === (r = null == e ? void 0 : e.data) || void 0 === r ? void 0 : r.notification_id) || "",
                                notificationData: (null == e ? void 0 : e.data) || {},
                                isReportEnabled: "true" === (null === (i = null == e ? void 0 : e.data) || void 0 === i ? void 0 : i.is_report_enabled),
                                version: "1.8.27",
                                najvaTokenFromPayload: null === (o = null == e ? void 0 : e.data) || void 0 === o ? void 0 : o.najva_token
                            })];
                        case 1:
                            return a.sent(), [2]
                    }
                }))
            }))
        }
        var rn, on = {
            website_id: 0,
            api_key: "",
            isNativeMode: !1
        };

        function an(e, t) {
            on = e, rn = t, Wt(), on.isNativeMode && function(e) {
                    var t = this;
                    if (!document.hidden) {
                        var n = Ce().messaging();
                        n && n.onMessage((function(n) {
                            return en(t, void 0, void 0, (function() {
                                return tn(this, (function(t) {
                                    switch (t.label) {
                                        case 0:
                                            return [4, nn(n, e)];
                                        case 1:
                                            return t.sent(), [2]
                                    }
                                }))
                            }))
                        }))
                    }
                }(rn),
                function(e, t) {
                    var n = this;
                    window.addEventListener("message", (function(r) {
                        return en(n, void 0, void 0, (function() {
                            var n, i;
                            return tn(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return r.data.api_key !== t || r.data.website_id !== e ? [3, 3] : (n = r.data.cookie_token, i = r.data.najva_token, n && i ? [4, A(x.Cookie, n, (new Date).toISOString())] : [3, 3]);
                                    case 1:
                                        return o.sent(), [4, A(x.Najva, i, (new Date).toISOString())];
                                    case 2:
                                        o.sent(), r.data.subscribe && window.najvaUserSubscribed && window.najvaUserSubscribed(n), o.label = 3;
                                    case 3:
                                        return [2]
                                }
                            }))
                        }))
                    }), !1)
                }(on.website_id, on.api_key)
        }
        const sn = {
            STATIC_IMAGES: "https://app.najva.com/static/images",
            BASE: "https://api.najva.com"
        };
        var cn = function(e, t, n, r) {
                return new(n || (n = Promise))((function(i, o) {
                    function a(e) {
                        try {
                            c(r.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function s(e) {
                        try {
                            c(r.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(a, s)
                    }
                    c((r = r.apply(e, t || [])).next())
                }))
            },
            un = function(e, t) {
                var n, r, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function s(o) {
                    return function(s) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1], i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2], a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, s])
                    }
                }
            },
            ln = {
                website_id: "",
                api_key: "",
                without_popup: !1
            };

        function dn(t, n, r) {
            return cn(this, void 0, void 0, (function() {
                var i, o, a, s, c, u, l, d;
                return un(this, (function(f) {
                    switch (f.label) {
                        case 0:
                            return [4, P(x.Cookie)];
                        case 1:
                            return i = f.sent().value, [4, P(x.Najva)];
                        case 2:
                            return o = f.sent().value, a = {
                                token_id: t,
                                website_id: n,
                                api_key: r
                            }, o && (a.najva_token = o), i && (a.cookie_token = i), [4, e(sn.BASE + "/api/v1/add/", {
                                method: "POST",
                                body: new URLSearchParams(a),
                                headers: {
                                    "Content-type": "application/x-www-form-urlencoded"
                                },
                                credentials: "include"
                            })];
                        case 3:
                            return s = f.sent(), c = s.cookie_token, u = s.najva_token, l = s.status, d = s.detail, l && "failure" !== l || "fail to subscribe" === d ? [4, A(x.Firebase, t, (new Date).toISOString())] : [3, 8];
                        case 4:
                            return f.sent(), c ? [4, A(x.Cookie, c, (new Date).toISOString())] : [3, 6];
                        case 5:
                            f.sent(), window.najvaUserSubscribed && window.najvaUserSubscribed(c), f.label = 6;
                        case 6:
                            return u ? [4, A(x.Najva, u, (new Date).toISOString())] : [3, 8];
                        case 7:
                            f.sent(), f.label = 8;
                        case 8:
                            return [2]
                    }
                }))
            }))
        }

        function fn(e) {
            window.addEventListener("najva-subscription-end", e)
        }

        function pn(e, t) {
            return cn(this, void 0, void 0, (function() {
                var n, r, i, o;
                return un(this, (function(a) {
                    switch (a.label) {
                        case 0:
                            return [4, P(x.Firebase)];
                        case 1:
                            return n = a.sent().value, [4, P(x.Najva)];
                        case 2:
                            return r = a.sent().value, [4, P(x.Cookie)];
                        case 3:
                            return i = a.sent().value, [4, ht()];
                        case 4:
                            return o = a.sent(), n === o && r && i ? [3, 6] : [4, dn(o, e, t)];
                        case 5:
                            a.sent(), s = new Event("najva-subscription-end"), window.dispatchEvent(s), a.label = 6;
                        case 6:
                            return [2]
                    }
                    var s
                }))
            }))
        }

        function hn() {
            return cn(this, void 0, void 0, (function() {
                var e = this;
                return un(this, (function(t) {
                    return [2, new Promise((function(t) {
                        return cn(e, void 0, void 0, (function() {
                            return un(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, Kt()];
                                    case 1:
                                        return e.sent() ? [4, Ft()] : [3, 3];
                                    case 2:
                                        return e.sent(), t(), [3, 7];
                                    case 3:
                                        return [4, Yt()];
                                    case 4:
                                        return e.sent() ? [4, pn(ln.website_id, ln.api_key)] : [3, 6];
                                    case 5:
                                        return e.sent(), t(), [3, 7];
                                    case 6:
                                        t(), e.label = 7;
                                    case 7:
                                        return [2]
                                }
                            }))
                        }))
                    }))]
                }))
            }))
        }

        function bn(e) {
            return cn(this, void 0, void 0, (function() {
                var t = this;
                return un(this, (function(n) {
                    switch (n.label) {
                        case 0:
                            return ln = e,
                                function(e) {
                                    window.addEventListener(St.NOTIF_ACCESS_GRANTED, e)
                                }((function() {
                                    return cn(t, void 0, void 0, (function() {
                                        return un(this, (function(e) {
                                            switch (e.label) {
                                                case 0:
                                                    return [4, pn(ln.website_id, ln.api_key)];
                                                case 1:
                                                    return e.sent(), [2]
                                            }
                                        }))
                                    }))
                                })), [4, Yt()];
                        case 1:
                            return n.sent() ? [4, pn(ln.website_id, ln.api_key)] : [3, 3];
                        case 2:
                            return n.sent(), [3, 5];
                        case 3:
                            return ln.without_popup ? [4, hn()] : [3, 5];
                        case 4:
                            n.sent(), n.label = 5;
                        case 5:
                            return [2]
                    }
                }))
            }))
        }
        var vn = function(e, t, n, r) {
                return new(n || (n = Promise))((function(i, o) {
                    function a(e) {
                        try {
                            c(r.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function s(e) {
                        try {
                            c(r.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(a, s)
                    }
                    c((r = r.apply(e, t || [])).next())
                }))
            },
            wn = function(e, t) {
                var n, r, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function s(o) {
                    return function(s) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1], i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2], a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, s])
                    }
                }
            },
            yn = {
                website_id: "",
                campaign_id: "",
                api_key: "",
                najva_subdomain: "",
                without_popup: !1,
                isNativeMode: !1
            };

        function gn(e) {
            return vn(this, void 0, void 0, (function() {
                return wn(this, (function(t) {
                    switch (t.label) {
                        case 0:
                            return (yn = e).isNativeMode ? [4, bn({
                                website_id: yn.website_id,
                                api_key: yn.api_key,
                                without_popup: yn.without_popup
                            })] : [3, 2];
                        case 1:
                            return t.sent(), [3, 4];
                        case 2:
                            return [4, It({
                                website_id: yn.website_id,
                                api_key: yn.api_key,
                                najva_subdomain: yn.najva_subdomain
                            })];
                        case 3:
                            t.sent(), t.label = 4;
                        case 4:
                            return [2]
                    }
                }))
            }))
        }

        function _n() {
            return vn(this, void 0, void 0, (function() {
                return wn(this, (function(e) {
                    switch (e.label) {
                        case 0:
                            return yn.isNativeMode ? [4, hn()] : [3, 2];
                        case 1:
                            return e.sent(), [3, 3];
                        case 2:
                            Ot(), e.label = 3;
                        case 3:
                            return [2]
                    }
                }))
            }))
        }

        function mn() {
            return vn(this, void 0, void 0, (function() {
                var e, t, n;
                return wn(this, (function(r) {
                    switch (r.label) {
                        case 0:
                            return [4, P(x.Firebase)];
                        case 1:
                            return e = r.sent(), [4, P(x.Cookie)];
                        case 2:
                            return t = r.sent(), [4, P(x.Najva)];
                        case 3:
                            return n = r.sent(), [2, Boolean(e && t && n)]
                    }
                }))
            }))
        }
        var Mn = function(e, t, n, r) {
                return new(n || (n = Promise))((function(i, o) {
                    function a(e) {
                        try {
                            c(r.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function s(e) {
                        try {
                            c(r.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(a, s)
                    }
                    c((r = r.apply(e, t || [])).next())
                }))
            },
            En = function(e, t) {
                var n, r, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function s(o) {
                    return function(s) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1], i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2], a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, s])
                    }
                }
            },
            Nn = "#najva-cmif",
            Tn = {
                najva_subdomain: ""
            };

        function Ln() {
            return Mn(this, void 0, void 0, (function() {
                var e;
                return En(this, (function(t) {
                    switch (t.label) {
                        case 0:
                            return [4, Ne(l.LastCookieMatchingSent)];
                        case 1:
                            return (e = t.sent()) ? [2, Math.floor(((new Date).getTime() - new Date(e).getTime()) / 864e5) < 30] : [2, !1]
                    }
                }))
            }))
        }

        function Sn(e) {
            return Mn(this, void 0, void 0, (function() {
                var t;
                return En(this, (function(n) {
                    switch (n.label) {
                        case 0:
                            return document.querySelector(Nn) ? [3, 2] : ((t = Lt("<iframe id=#najva-cmif style='display: none!important;' src='" + e + "cmif/'></iframe>")) && document.body.appendChild(t), [4, Te(l.LastCookieMatchingSent, (new Date).toISOString())]);
                        case 1:
                            n.sent(), n.label = 2;
                        case 2:
                            return [2]
                    }
                }))
            }))
        }
        var jn = n(1296),
            kn = "najva_location_access_granted";
        var xn = function(e, t, n, r) {
                return new(n || (n = Promise))((function(i, o) {
                    function a(e) {
                        try {
                            c(r.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function s(e) {
                        try {
                            c(r.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(a, s)
                    }
                    c((r = r.apply(e, t || [])).next())
                }))
            },
            Dn = function(e, t) {
                var n, r, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function s(o) {
                    return function(s) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1], i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2], a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, s])
                    }
                }
            },
            In = "granted";

        function On() {
            "geolocation" in navigator && navigator.geolocation.getCurrentPosition((function(e) {
                ! function(e) {
                    var t = new CustomEvent(kn, {
                        detail: e
                    });
                    window.dispatchEvent(t)
                }(e)
            }), void 0, {
                enableHighAccuracy: !0,
                maximumAge: 0
            })
        }

        function An() {
            return xn(this, void 0, void 0, (function() {
                var e;
                return Dn(this, (function(t) {
                    switch (t.label) {
                        case 0:
                            return "permissions" in navigator ? [4, navigator.permissions.query({
                                name: "geolocation"
                            })] : [3, 2];
                        case 1:
                            return "state" in (e = t.sent()) ? [2, e.state === In] : [2, !1];
                        case 2:
                            return [2, !1]
                    }
                }))
            }))
        }
        var Pn = function(e, t, n, r) {
                return new(n || (n = Promise))((function(i, o) {
                    function a(e) {
                        try {
                            c(r.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function s(e) {
                        try {
                            c(r.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(a, s)
                    }
                    c((r = r.apply(e, t || [])).next())
                }))
            },
            Cn = function(e, t) {
                var n, r, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function s(o) {
                    return function(s) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1], i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2], a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, s])
                    }
                }
            };
        var zn = n.n(jn)()((function(t) {
            return Pn(this, void 0, void 0, (function() {
                var n, r, i;
                return Cn(this, (function(a) {
                    switch (a.label) {
                        case 0:
                            if (!t) return [2];
                            n = t.coords, r = {
                                accuracy: n.accuracy,
                                altitude: n.altitude,
                                latitude: n.latitude,
                                longitude: n.longitude
                            }, a.label = 1;
                        case 1:
                            return a.trys.push([1, 3, , 4]), [4, e(sn.BASE + "/api/v1/location/", {
                                method: "POST",
                                body: JSON.stringify(r),
                                credentials: "include",
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            })];
                        case 2:
                            return a.sent(), [3, 4];
                        case 3:
                            throw i = a.sent(), u(o.SEND_LOCATION_FAILED, {
                                errorStatus: i
                            });
                        case 4:
                            return [2]
                    }
                }))
            }))
        }), 1e3);

        function Bn(e) {
            return Pn(this, void 0, void 0, (function() {
                var t, n;
                return Cn(this, (function(r) {
                    switch (r.label) {
                        case 0:
                            return e.location_permission && "geolocation" in navigator && "permissions" in navigator ? (n = e.isNativeMode) ? [4, An()] : [3, 2] : [3, 5];
                        case 1:
                            n = r.sent(), r.label = 2;
                        case 2:
                            return (t = n) ? [4, mn()] : [3, 4];
                        case 3:
                            t = r.sent(), r.label = 4;
                        case 4:
                            t && On(),
                                function() {
                                    xn(this, void 0, void 0, (function() {
                                        return Dn(this, (function(e) {
                                            switch (e.label) {
                                                case 0:
                                                    return "permissions" in navigator ? [4, navigator.permissions.query({
                                                        name: "geolocation"
                                                    })] : [3, 2];
                                                case 1:
                                                    e.sent().onchange = function() {
                                                        this.state === In && On()
                                                    }, e.label = 2;
                                                case 2:
                                                    return [2]
                                            }
                                        }))
                                    }))
                                }(), fn((function() {
                                    return On()
                                })),
                                function(e) {
                                    window.addEventListener(kn, e, !1)
                                }((function(e) {
                                    e.detail && zn(e.detail)
                                })), r.label = 5;
                        case 5:
                            return [2]
                    }
                }))
            }))
        }
        var Rn = function(e, t, n, r) {
                return new(n || (n = Promise))((function(i, o) {
                    function a(e) {
                        try {
                            c(r.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function s(e) {
                        try {
                            c(r.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(a, s)
                    }
                    c((r = r.apply(e, t || [])).next())
                }))
            },
            Un = function(e, t) {
                var n, r, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function s(o) {
                    return function(s) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1], i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2], a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, s])
                    }
                }
            };

        function Fn(e) {
            return Rn(this, void 0, void 0, (function() {
                var t;
                return Un(this, (function(n) {
                    switch (n.label) {
                        case 0:
                            return n.trys.push([0, 2, , 3]), [4, navigator.serviceWorker.register(e.sw_path + "najva-messaging-sw.js", {
                                scope: "/najva-messaging-scope",
                                updateViaCache: "none"
                            })];
                        case 1:
                            return [2, n.sent()];
                        case 2:
                            throw t = n.sent(), u(o.SW_REGISTRATION_FAILED, {
                                browserErrorMessage: t.message,
                                error: t
                            });
                        case 3:
                            return [2]
                    }
                }))
            }))
        }
        var Wn = function(e, t, n, r) {
                return new(n || (n = Promise))((function(i, o) {
                    function a(e) {
                        try {
                            c(r.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function s(e) {
                        try {
                            c(r.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(a, s)
                    }
                    c((r = r.apply(e, t || [])).next())
                }))
            },
            Yn = function(e, t) {
                var n, r, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function s(o) {
                    return function(s) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1], i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2], a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, s])
                    }
                }
            },
            Gn = {
                website_id: "",
                api_key: "",
                campaign_id: ""
            };

        function Kn(t) {
            return Wn(this, void 0, void 0, (function() {
                var n, r;
                return Yn(this, (function(i) {
                    switch (i.label) {
                        case 0:
                            return i.trys.push([0, 5, , 6]), [4, Ne(l.LastCurrentUserAPICalled)];
                        case 1:
                            return (n = i.sent()) && n === (new Date).toLocaleDateString() ? [3, 4] : [4, Te(l.LastCurrentUserAPICalled, (new Date).toLocaleDateString())];
                        case 2:
                            return i.sent(), [4, e("https://cr.najva.com/api/v2/current/user/", {
                                method: "POST",
                                body: new URLSearchParams({
                                    website: t
                                }),
                                headers: {
                                    "Content-type": "application/x-www-form-urlencoded"
                                },
                                credentials: "include"
                            })];
                        case 3:
                            i.sent(), i.label = 4;
                        case 4:
                            return [3, 6];
                        case 5:
                            throw r = i.sent(), u(o.UPDATE_USER_ACTIVITY_FAILED, {
                                browserErrorMessage: r.message,
                                error: r
                            });
                        case 6:
                            return [2]
                    }
                }))
            }))
        }

        function Vn() {
            return Wn(this, void 0, void 0, (function() {
                return Yn(this, (function(e) {
                    switch (e.label) {
                        case 0:
                            return [4, Te(l.LastActiveTime, (new Date).toISOString())];
                        case 1:
                            return e.sent(), [2]
                    }
                }))
            }))
        }

        function Qn() {
            return Wn(this, void 0, void 0, (function() {
                var e;
                return Yn(this, (function(t) {
                    switch (t.label) {
                        case 0:
                            return [4, Ne(l.VisitCount)];
                        case 1:
                            return (e = t.sent()) || (e = 0), e = parseInt(e.toString()), [4, Te(l.VisitCount, e + 1)];
                        case 2:
                            return t.sent(), [2]
                    }
                }))
            }))
        }

        function Hn(e) {
            return Wn(this, void 0, void 0, (function() {
                return Yn(this, (function(t) {
                    switch (t.label) {
                        case 0:
                            return Gn = e, [4, mn()];
                        case 1:
                            return t.sent() && function() {
                                Wn(this, void 0, void 0, (function() {
                                    return Yn(this, (function(e) {
                                        switch (e.label) {
                                            case 0:
                                                return [4, Qn()];
                                            case 1:
                                                e.sent(), e.label = 2;
                                            case 2:
                                                return e.trys.push([2, 5, , 6]), [4, Kn(Gn.website_id)];
                                            case 3:
                                                return e.sent(), [4, Vn()];
                                            case 4:
                                            case 5:
                                                return e.sent(), [3, 6];
                                            case 6:
                                                return [2]
                                        }
                                    }))
                                }))
                            }(), [2]
                    }
                }))
            }))
        }
        var Zn = function(e, t, n, r) {
                return new(n || (n = Promise))((function(i, o) {
                    function a(e) {
                        try {
                            c(r.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function s(e) {
                        try {
                            c(r.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(a, s)
                    }
                    c((r = r.apply(e, t || [])).next())
                }))
            },
            qn = function(e, t) {
                var n, r, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function s(o) {
                    return function(s) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1], i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2], a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, s])
                    }
                }
            },
            $n = {
                website_id: ""
            };

        function Jn(t) {
            return Zn(this, void 0, void 0, (function() {
                var n, r, i = this;
                return qn(this, (function(a) {
                    switch (a.label) {
                        case 0:
                            return a.trys.push([0, 5, , 6]), [4, mn()];
                        case 1:
                            return a.sent() ? [4, e(sn.BASE + "/api/v2/subscriber/tag/", {
                                method: "POST",
                                body: JSON.stringify({
                                    website_id: $n.website_id,
                                    tags: t
                                }),
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                credentials: "include"
                            })] : [3, 4];
                        case 2:
                            return n = a.sent(), "not found" === n.message ? [3, 4] : [4, Promise.all(Object.keys(t).map((function(e) {
                                return Zn(i, void 0, void 0, (function() {
                                    return qn(this, (function(n) {
                                        return [2, X(e, t[e], (new Date).toISOString())]
                                    }))
                                }))
                            })))];
                        case 3:
                            a.sent(), a.label = 4;
                        case 4:
                            return [3, 6];
                        case 5:
                            throw r = a.sent(), u(o.ADD_ATTRIBUTE_FAILED, {
                                object: t,
                                error: r
                            });
                        case 6:
                            return [2]
                    }
                }))
            }))
        }

        function Xn() {
            return Zn(this, void 0, void 0, (function() {
                var t, n, r, i;
                return qn(this, (function(a) {
                    switch (a.label) {
                        case 0:
                            return a.trys.push([0, 2, , 3]), [4, e(sn.BASE + "/api/v2/subscriber/tag/?website_id=" + $n.website_id, {
                                method: "GET",
                                credentials: "include"
                            })];
                        case 1:
                            return t = a.sent(), n = t.message, r = t.tags, "not found" === n || null === r ? [2, {}] : [2, r];
                        case 2:
                            throw i = a.sent(), u(o.GET_ATTRIBUTES_FAILED, {
                                error: i
                            });
                        case 3:
                            return [2]
                    }
                }))
            }))
        }

        function er(t) {
            return Zn(this, void 0, void 0, (function() {
                var n, r, i, a;
                return qn(this, (function(s) {
                    switch (s.label) {
                        case 0:
                            return s.trys.push([0, 4, , 5]), [4, e(sn.BASE + "/api/v2/subscriber/tag/", {
                                method: "DELETE",
                                body: JSON.stringify({
                                    website_id: $n.website_id,
                                    key: t
                                }),
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                credentials: "include"
                            })];
                        case 1:
                            return n = s.sent(), r = n.message, i = n.tags, "not found" === r ? [3, 3] : [4, ee(t)];
                        case 2:
                            s.sent(), s.label = 3;
                        case 3:
                            return i ? [2, i] : [2, []];
                        case 4:
                            throw a = s.sent(), u(o.DELETE_ATTRIBUTE_FAILED, {
                                key: t,
                                error: a
                            });
                        case 5:
                            return [2]
                    }
                }))
            }))
        }

        function tr() {
            var e, t = !1;
            return e = window.navigator.userAgent || window.navigator.vendor || window.opera, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e.substr(0, 4))) && (t = !0), t
        }
        var nr = function() {
                for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
                var r = Array(e),
                    i = 0;
                for (t = 0; t < n; t++)
                    for (var o = arguments[t], a = 0, s = o.length; a < s; a++, i++) r[i] = o[a];
                return r
            },
            rr = function(e, t, n) {
                this.name = e, this.version = t, this.os = n, this.type = "browser"
            },
            ir = function(e) {
                this.version = e, this.type = "node", this.name = "node", this.os = process.platform
            },
            or = function(e, t, n, r) {
                this.name = e, this.version = t, this.os = n, this.bot = r, this.type = "bot-device"
            },
            ar = function() {
                this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null
            },
            sr = function() {
                this.type = "react-native", this.name = "react-native", this.version = null, this.os = null
            },
            cr = /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
            ur = [
                ["aol", /AOLShield\/([0-9\._]+)/],
                ["edge", /Edge\/([0-9\._]+)/],
                ["edge-ios", /EdgiOS\/([0-9\._]+)/],
                ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
                ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
                ["samsung", /SamsungBrowser\/([0-9\.]+)/],
                ["silk", /\bSilk\/([0-9._-]+)\b/],
                ["miui", /MiuiBrowser\/([0-9\.]+)$/],
                ["beaker", /BeakerBrowser\/([0-9\.]+)/],
                ["edge-chromium", /EdgA?\/([0-9\.]+)/],
                ["chromium-webview", /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
                ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
                ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
                ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
                ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
                ["fxios", /FxiOS\/([0-9\.]+)/],
                ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
                ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
                ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
                ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
                ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
                ["ie", /MSIE\s(7\.0)/],
                ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
                ["android", /Android\s([0-9\.]+)/],
                ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
                ["safari", /Version\/([0-9\._]+).*Safari/],
                ["facebook", /FBAV\/([0-9\.]+)/],
                ["instagram", /Instagram\s([0-9\.]+)/],
                ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
                ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
                ["searchbot", /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]
            ],
            lr = [
                ["iOS", /iP(hone|od|ad)/],
                ["Android OS", /Android/],
                ["BlackBerry OS", /BlackBerry|BB10/],
                ["Windows Mobile", /IEMobile/],
                ["Amazon OS", /Kindle/],
                ["Windows 3.11", /Win16/],
                ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
                ["Windows 98", /(Windows 98)|(Win98)/],
                ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
                ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
                ["Windows Server 2003", /(Windows NT 5.2)/],
                ["Windows Vista", /(Windows NT 6.0)/],
                ["Windows 7", /(Windows NT 6.1)/],
                ["Windows 8", /(Windows NT 6.2)/],
                ["Windows 8.1", /(Windows NT 6.3)/],
                ["Windows 10", /(Windows NT 10.0)/],
                ["Windows ME", /Windows ME/],
                ["Open BSD", /OpenBSD/],
                ["Sun OS", /SunOS/],
                ["Chrome OS", /CrOS/],
                ["Linux", /(Linux)|(X11)/],
                ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
                ["QNX", /QNX/],
                ["BeOS", /BeOS/],
                ["OS/2", /OS\/2/]
            ];

        function dr(e) {
            return e ? pr(e) : "undefined" == typeof document && "undefined" != typeof navigator && "ReactNative" === navigator.product ? new sr : "undefined" != typeof navigator ? pr(navigator.userAgent) : "undefined" != typeof process && process.version ? new ir(process.version.slice(1)) : null
        }

        function fr(e) {
            return "" !== e && ur.reduce((function(t, n) {
                var r = n[0],
                    i = n[1];
                if (t) return t;
                var o = i.exec(e);
                return !!o && [r, o]
            }), !1)
        }

        function pr(e) {
            var t = fr(e);
            if (!t) return null;
            var n = t[0],
                r = t[1];
            if ("searchbot" === n) return new ar;
            var i = r[1] && r[1].split(/[._]/).slice(0, 3);
            i ? i.length < 3 && (i = nr(i, function(e) {
                for (var t = [], n = 0; n < e; n++) t.push("0");
                return t
            }(3 - i.length))) : i = [];
            var o = i.join("."),
                a = function(e) {
                    for (var t = 0, n = lr.length; t < n; t++) {
                        var r = lr[t],
                            i = r[0];
                        if (r[1].exec(e)) return i
                    }
                    return null
                }(e),
                s = cr.exec(e);
            return s && s[1] ? new or(n, o, a, s[1]) : new rr(n, o, a)
        }

        function hr() {
            var e = dr();
            return !!e && "firefox" === e.name
        }

        function br() {
            var e = dr();
            return e ? e.version : null
        }
        var vr, wr, yr = function(e, t, n, r) {
                return new(n || (n = Promise))((function(i, o) {
                    function a(e) {
                        try {
                            c(r.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function s(e) {
                        try {
                            c(r.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(a, s)
                    }
                    c((r = r.apply(e, t || [])).next())
                }))
            },
            gr = function(e, t) {
                var n, r, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function s(o) {
                    return function(s) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1], i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2], a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, s])
                    }
                }
            };

        function _r() {
            return yr(this, void 0, void 0, (function() {
                return gr(this, (function(e) {
                    return [2, new Promise((function(e, t) {
                        "storage" in navigator && "estimate" in navigator.storage && navigator.storage.estimate().then((function(n) {
                            var r = n.quota;
                            r && r < 12e7 && e(), t()
                        }));
                        var n = window.RequestFileSystem || window.webkitRequestFileSystem;
                        n ? n(window.TEMPORARY, 100, (function() {
                            t()
                        }), (function() {
                            e()
                        })) : e()
                    }))]
                }))
            }))
        }

        function mr() {
            try {
                return window.localStorage.setItem("test", "1"), !1
            } catch (e) {
                return !0
            }
        }

        function Mr() {
            return yr(this, void 0, void 0, (function() {
                return gr(this, (function(e) {
                    return [2, new Promise((function(e, t) {
                        window.indexedDB || e();
                        try {
                            var n = window.indexedDB.open("test");
                            n.onerror = function() {
                                e()
                            }, n.onsuccess = function() {
                                t()
                            }
                        } catch (t) {
                            e()
                        }
                    }))]
                }))
            }))
        }

        function Er() {
            try {
                return !window.indexedDB
            } catch (e) {
                return !1
            }
        }

        function Nr() {
            return yr(this, void 0, void 0, (function() {
                return gr(this, (function(e) {
                    switch (e.label) {
                        case 0:
                            if (function() {
                                    var e = window.navigator.userAgent.toLowerCase();
                                    if (0 === e.indexOf("msie") && 0 === e.indexOf("trident")) return !1;
                                    var t = /(?:msie|rv:)\s?([\d.]+)/.exec(e);
                                    return !!(t && parseInt(t[1], 10) >= 10)
                                }()) return [2, Er()];
                            if (!hr()) return [3, 5];
                            e.label = 1;
                        case 1:
                            return e.trys.push([1, 3, , 4]), [4, Mr()];
                        case 2:
                            return e.sent(), [2, !0];
                        case 3:
                            return e.sent(), [2, !1];
                        case 4:
                            return [3, 10];
                        case 5:
                            return (t = dr()) && "safari" === t.name ? [2, mr()] : [3, 6];
                        case 6:
                            if (! function() {
                                    var e = dr();
                                    return !!e && "chrome" === e.name
                                }()) return [3, 10];
                            e.label = 7;
                        case 7:
                            return e.trys.push([7, 9, , 10]), [4, _r()];
                        case 8:
                            return e.sent(), [2, !0];
                        case 9:
                            return e.sent(), [2, !1];
                        case 10:
                            return [2, !1]
                    }
                    var t
                }))
            }))
        }! function(e) {
            e.POPUP_BUTTON = "najva-popup-button"
        }(vr || (vr = {})),
        function(e) {
            e.POPUP = "najva-popup", e.POPUP_IMAGE_WRAPPER = "najva-popup-image-wrapper", e.POPUP_IMAGE = "najva-popup-image", e.POPUP_BODY_WRAPPER = "najva-popup-body-wrapper", e.POPUP_TEXT = "najva-popup-text", e.POPUP_DESCRIPTION = "najva-popup-description", e.POPUP_BUTTON_WRAPPER = "najva-popup-button-wrapper", e.POPUP_REJECT_BUTTON = "najva-popup-reject-button", e.POPUP_ACCEPT_BUTTON = "najva-popup-accept-button"
        }(wr || (wr = {}));
        var Tr = !1;
        var Lr = function(e, t, n, r) {
                return new(n || (n = Promise))((function(i, o) {
                    function a(e) {
                        try {
                            c(r.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function s(e) {
                        try {
                            c(r.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(a, s)
                    }
                    c((r = r.apply(e, t || [])).next())
                }))
            },
            Sr = function(e, t) {
                var n, r, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function s(o) {
                    return function(s) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1], i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2], a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, s])
                    }
                }
            };

        function jr(e, t) {
            return void 0 === t && (t = 0), Lr(this, void 0, void 0, (function() {
                return Sr(this, (function(n) {
                    return [2, new Promise((function(n) {
                        var r = !1,
                            i = function() {
                                var t, o, a, s;
                                r && window.removeEventListener("scroll", i), t = document.documentElement, o = document.body, s = "scrollHeight", (t[a = "scrollTop"] || o[a]) / ((t[s] || o[s]) - window.innerHeight) * 100 > e.scroll.value && (r = !0, n(!0))
                            };
                        e.visit.maximum.enable || e.visit.minimum.enable || e.visit.interval.enable ? (e.visit.minimum.enable || (e.visit.minimum.value = 1), e.visit.maximum.enable || (e.visit.maximum.value = 1e5), e.visit.interval.enable || (e.visit.interval.value = 1), t >= e.visit.minimum.value && t <= e.visit.maximum.value && (t - e.visit.minimum.value) % e.visit.interval.value == 0 && (e.delay.enable || e.scroll.enable ? (e.scroll.enable && window.addEventListener("scroll", i), e.delay.enable && setTimeout((function() {
                            n(!0)
                        }), 1e3 * e.delay.value)) : n(!0))) : e.delay.enable || e.scroll.enable ? (e.scroll.enable && window.addEventListener("scroll", i), e.delay.enable && setTimeout((function() {
                            n(!0)
                        }), 1e3 * e.delay.value)) : n(!0)
                    }))]
                }))
            }))
        }
        var kr = function(e, t, n, r) {
                return new(n || (n = Promise))((function(i, o) {
                    function a(e) {
                        try {
                            c(r.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function s(e) {
                        try {
                            c(r.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(a, s)
                    }
                    c((r = r.apply(e, t || [])).next())
                }))
            },
            xr = function(e, t) {
                var n, r, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function s(o) {
                    return function(s) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1], i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2], a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, s])
                    }
                }
            },
            Dr = {
                request_icon: "",
                request_text: "",
                request_description: "",
                denied_text: "",
                accept_text: "",
                without_popup: !0,
                with_popup: !0,
                dismiss_cookie_days: 0,
                isNativeMode: !1,
                request_permission: {
                    delay: {
                        enable: 1,
                        value: 5
                    },
                    scroll: {
                        enable: 0,
                        value: 50
                    },
                    visit: {
                        minimum: {
                            enable: 1,
                            value: 1
                        },
                        maximum: {
                            enable: 0,
                            value: 24
                        },
                        interval: {
                            enable: 0,
                            value: 3
                        }
                    }
                }
            };

        function Ir() {
            var e = document.getElementById(wr.POPUP);
            e && e.classList.add(vt)
        }

        function Or() {
            var e = this;
            ! function(e) {
                if (!document.getElementById(wr.POPUP)) {
                    var t = Lt('\n    <div id="' + wr.POPUP + '" class="' + vt + '">\n        <div id="' + wr.POPUP_IMAGE_WRAPPER + '">\n            <img id="' + wr.POPUP_IMAGE + '" src="' + e.request_icon + '">\n        </div>\n        <div id="' + wr.POPUP_BODY_WRAPPER + '" class="' + gt + '">\n            <p id="' + wr.POPUP_TEXT + '">' + e.request_text + "</p>\n            " + (e.request_description ? '<p id="' + wr.POPUP_DESCRIPTION + '">' + e.request_description + "</p>" : "") + '\n            <div id="' + wr.POPUP_BUTTON_WRAPPER + '" class="' + wt + '">\n                <button id="' + wr.POPUP_REJECT_BUTTON + '" class="' + vr.POPUP_BUTTON + '">\n                    ' + e.denied_text + '\n                </button>\n                <button id="' + wr.POPUP_ACCEPT_BUTTON + '" class="' + vr.POPUP_BUTTON + '">\n                    ' + e.accept_text + "\n                </button>\n            </div>\n        </div>\n    </div>\n");
                    t && document.body.appendChild(t)
                }
            }(Dr);
            var t = document.getElementById(wr.POPUP_ACCEPT_BUTTON),
                n = document.getElementById(wr.POPUP_REJECT_BUTTON);
            t && t.addEventListener("click", (function() {
                return kr(e, void 0, void 0, (function() {
                    return xr(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                return Ir(), [4, _n()];
                            case 1:
                                return e.sent(), [2]
                        }
                    }))
                }))
            })), n && n.addEventListener("click", (function() {
                return kr(e, void 0, void 0, (function() {
                    return xr(this, (function(e) {
                        switch (e.label) {
                            case 0:
                                return Ir(), Zr(), [4, Z(Y.Reject, !0)];
                            case 1:
                                return e.sent(), [2]
                        }
                    }))
                }))
            }))
        }

        function Ar() {
            return kr(this, void 0, void 0, (function() {
                var e;
                return xr(this, (function(t) {
                    switch (t.label) {
                        case 0:
                            return [4, H(Y.ShownCount)];
                        case 1:
                            return (e = t.sent()) || (e = 0), [2, e]
                    }
                }))
            }))
        }

        function Pr() {
            return kr(this, void 0, void 0, (function() {
                var e;
                return xr(this, (function(t) {
                    switch (t.label) {
                        case 0:
                            return [4, Ar()];
                        case 1:
                            return e = t.sent(), [4, Z(Y.ShownCount, e + 1)];
                        case 2:
                            return t.sent(), [2]
                    }
                }))
            }))
        }

        function Cr() {
            return kr(this, void 0, void 0, (function() {
                return xr(this, (function(e) {
                    switch (e.label) {
                        case 0:
                            return n = Dr, Tr || (Tr = !0, Et("\n    #" + wr.POPUP + " {\n        z-index: " + _t + ";\n        -webkit-box-shadow: 0 1px 8px 0 rgba(0,0,0,.2), 0 3px 4px 0 rgba(0,0,0,.14), 0 3px 3px -2px rgba(0,0,0,.12) !important;\n        box-shadow: 0 1px 8px 0 rgba(0,0,0,.2), 0 3px 4px 0 rgba(0,0,0,.14), 0 3px 3px -2px rgba(0,0,0,.12) !important;\n        direction: rtl;\n        position: fixed;\n        " + (n.with_popup ? "top: 10px;left: 15px;" : "") + "\n        width: 500px;\n        top: 0px;\n        left: 50%;\n        -webkit-transform: translateX(-50%);\n        -ms-transform: translateX(-50%);\n        transform: translateX(-50%);\n        background-color: #fff;\n        border-bottom-right-radius: 4px;\n        border-bottom-left-radius: 4px;\n        border: 1px solid #eaeaea;\n        -webkit-transition: opacity 0.5s, visibility 0.5s;\n        -o-transition: opacity 0.5s, visibility 0.5s;\n        transition: opacity 0.5s, visibility 0.5s;\n    }\n\n    #" + wr.POPUP_IMAGE_WRAPPER + " {\n        width: 25%;\n        position: absolute;\n        top: 50%;\n        -webkit-transform: translateY(-50%);\n        -ms-transform: translateY(-50%);\n        transform: translateY(-50%);\n        text-align: center;\n    }\n\n    #" + wr.POPUP_IMAGE + " {\n        width: 75%;\n        height: auto;\n        vertical-align: middle;\n    }\n\n    #" + wr.POPUP_BODY_WRAPPER + " {\n        margin-right: 25%;\n        border-right: 1px solid #eaeaea;\n        padding: 10px;\n        font-size: 1.1em;\n        line-height: 1.2em;\n    }\n \n    #" + wr.POPUP_TEXT + " {\n        margin: 0;\n        line-height: 1.5em;\n        color: #000;\n        font-size: 1em;\n    }\n\n    #" + wr.POPUP_DESCRIPTION + " {\n        font-size: 0.8em;\n        color: gray;\n        margin:0;\n    }\n\n    #" + wr.POPUP_BUTTON_WRAPPER + " {\n        margin-top: 7px;\n    }\n\n    ." + vr.POPUP_BUTTON + " {\n        -webkit-appearance: button;\n        text-transform: none;\n        overflow: visible;\n        margin: 0;\n        font-family: inherit;\n        display: inline-block;\n        font-weight: 400;\n        text-align: center;\n        white-space: nowrap;\n        vertical-align: middle;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        border: 1px solid transparent;\n        padding: .375rem 1rem;\n        font-size: 1.2em;\n        line-height: 1.5;\n        border-radius: .25rem;\n        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n        -webkit-transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n        -o-transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n        background: initial;\n    }\n\n    #" + wr.POPUP_REJECT_BUTTON + ":hover {\n        background-color: #e2e6ea !important;\n        border-color: #dae0e5 !important;\n    }\n\n    #" + wr.POPUP_REJECT_BUTTON + " {\n        color: #212529 !important;\n        background-color: #f8f9fa !important;\n        border-color: #f8f9fa !important; \n    }\n\n    #" + wr.POPUP_ACCEPT_BUTTON + " {\n        color: #fff !important;\n        background-color: #007bff !important;\n        border-color: #007bff !important;\n    }\n\n    #" + wr.POPUP_ACCEPT_BUTTON + ":hover {\n        background-color: #0069d9 !important;\n        border-color: #0062cc !important;\n        text-decoration: none;\n    }\n\n    @media screen and (max-width: 767px) {\n      #" + wr.POPUP + " {\n          width: 100%;\n          top: auto;\n          bottom: 0;\n          left:0;\n          -webkit-transform: none;\n          -ms-transform: none;\n          transform: none;\n          border-bottom-right-radius: 0;\n          border-bottom-left-radius: 0;\n          border-top-right-radius: 10px;\n          border-top-left-radius: 10px;\n      }\n\n      #" + wr.POPUP_BODY_WRAPPER + "{\n          font-size: 15px;\n      }\n\n      ." + vr.POPUP_BUTTON + " {\n          width: 100px;\n          font-size: 1em\n      }\n\n      #" + wr.POPUP_BUTTON_WRAPPER + " {\n          text-align: center;\n          float: inherit;\n      } \n    }\n  ")), Qr(vt), Or(), (t = document.getElementById(wr.POPUP)) && t.classList.remove(vt), [4, Z(Y.LastShownTime, (new Date).toISOString())];
                        case 1:
                            return e.sent(), [4, Pr()];
                        case 2:
                            return e.sent(), [2]
                    }
                    var t, n
                }))
            }))
        }

        function zr() {
            return kr(this, void 0, void 0, (function() {
                var e, t, n;
                return xr(this, (function(r) {
                    switch (r.label) {
                        case 0:
                            return [4, Kt()];
                        case 1:
                            return e = r.sent(), [4, Ne(l.HasNajvaSubscriptionWindowOpened)];
                        case 2:
                            return t = r.sent(), Dr.isNativeMode && !e || !Dr.isNativeMode && "string" == typeof t && "true" === t || Dr.without_popup ? [2, !1] : [4, H(Y.LastShownTime)];
                        case 3:
                            return (n = r.sent()) ? [4, H(Y.Reject)] : [2, !0];
                        case 4:
                            return r.sent() ? (i = (new Date).getTime(), o = new Date(n).getTime(), a = Math.abs(i - o), Math.ceil(a / 864e5) > Dr.dismiss_cookie_days ? [2, !0] : [2, !1]) : [2, !0]
                    }
                    var i, o, a
                }))
            }))
        }
        var Br, Rr = !1;
        ! function(e) {
            e.BELL = "najva-bell", e.BELL_IMAGE_WRAPPER = "najva-bell-image-wrapper", e.BELL_IMAGE = "najva-bell-image", e.BELL_DENIED_HELP = "najva-bell-denied-help", e.BELL_DENIED_HELP_CLOSE = "najva-bell-denied-help-close", e.BELL_DENIED_HELP_IMAGE = "najva-bell-denied-help-image"
        }(Br || (Br = {}));
        var Ur = !1;

        function Fr(e) {
            if (!Ur) {
                Ur = !0, Rr || (Et("\n      [najvatooltip] {\n        margin: 20px 60px;\n        position: relative;\n        display: inline-block;\n        font-family: inherit;\n    }\n\n    [najvatooltip]::before {\n        content: \"\";\n        position: absolute;\n        top: -6px;\n        left: 50%;\n        transform: translateX(-50%);\n        border-width: 4px 6px 0 6px;\n        border-style: solid;\n        border-color: rgba(0, 0, 0, 0.7) transparent transparent transparent;\n        z-index: 99;\n        opacity: 0;\n    }\n\n    [najvatooltip-position='left']::before {\n        left: 0%;\n        top: 50%;\n        margin-left: -12px;\n        transform: translatey(-50%) rotate(-90deg)\n    }\n\n    [najvatooltip-position='top']::before {\n        left: 50%;\n    }\n\n    [najvatooltip-position='buttom']::before {\n        top: 100%;\n        margin-top: 8px;\n        transform: translateX(-50%) translatey(-100%) rotate(-180deg)\n    }\n\n    [najvatooltip-position='right']::before {\n        left: 100%;\n        top: 50%;\n        margin-left: 1px;\n        transform: translatey(-50%) rotate(90deg)\n    }\n\n    [najvatooltip]::after {\n        content: attr(najvatooltip);\n        position: absolute;\n        left: 50%;\n        top: -6px;\n        transform: translateX(-50%) translateY(-100%);\n        background: rgba(0, 0, 0, 0.7);\n        text-align: center;\n        color: #fff;\n        padding: 4px 2px;\n        font-size: 12px;\n        min-width: 80px;\n        border-radius: 5px;\n        pointer-events: none;\n        padding: 4px 4px;\n        z-index: 99;\n        opacity: 0;\n    }\n\n    [najvatooltip-position='left']::after {\n        left: 0%;\n        top: 50%;\n        margin-left: -8px;\n        transform: translateX(-100%) translateY(-50%);\n    }\n\n    [najvatooltip-position='top']::after {\n        left: 50%;\n    }\n\n    [najvatooltip-position='buttom']::after {\n        top: 100%;\n        margin-top: 8px;\n        transform: translateX(-50%) translateY(0%);\n    }\n\n    [najvatooltip-position='right']::after {\n        left: 100%;\n        top: 50%;\n        margin-left: 8px;\n        transform: translateX(0%) translateY(-50%);\n    }\n\n    [najvatooltip]:hover::after, [najvatooltip]:hover::before {\n        opacity: 1\n    }\n  "), Rr = !0);
                var t = "\n      #" + Br.BELL + " {\n        -webkit-box-shadow: 0 1px 6px rgba(0, 0, 0, .06), 0 2px 32px rgba(0, 0, 0, .16) !important;\n        box-shadow: 0 1px 6px rgba(0, 0, 0, .06), 0 2px 32px rgba(0, 0, 0, .16) !important;\n        max-width: initial;\n        z-index: " + _t + ";\n        position: fixed;\n        width: 50px;\n        height: 50px;\n\n        bottom: 30px;\n        cursor: pointer;\n        background-color: transparent;\n        border-radius: 50%;\n        -webkit-transition: background-color 0.7s;\n        -o-transition: background-color 0.7s;\n        transition: background-color 0.7s;\n        -webkit-box-sizing: border-box;\n        -moz-box-sizing: border-box;\n        box-sizing: border-box;\n    }\n\n    #" + Br.BELL_IMAGE_WRAPPER + " {\n        padding: 0;\n        margin: 0;\n        border-radius: 50%;\n        width: 50px;\n        height: 50px;\n        text-align: center;\n        /*background-color: #444;*/\n        position: absolute;\n        left: 50%;\n        top: 50%;\n        -webkit-transform: translate(-50%, -50%);\n        -ms-transform: translate(-50%, -50%);\n        transform: translate(-50%, -50%);\n        -webkit-transition: width 0.3s, height 0.3s;\n        -o-transition: width 0.3s, height 0.3s;\n        transition: width 0.3s, height 0.3s;\n  }\n\n    #" + Br.BELL_IMAGE + " {\n        width: 40px;\n        height: 40px;\n        position: absolute;\n        left: 50%;\n        top: 50%;\n        max-width: initial;\n        -webkit-transform: translate(-50%, -50%);\n        -ms-transform: translate(-50%, -50%);\n        transform: translate(-50%, -50%);\n        border: 2px solid #fff;\n        border-radius: 50%;\n        padding: 5px;\n        -webkit-transition: width 0.3s, height 0.3s;\n        -o-transition: width 0.3s, height 0.3s;\n        transition: width 0.3s, height 0.3s;\n  }\n\n    #" + Br.BELL + ":hover #" + Br.BELL_IMAGE_WRAPPER + " {\n        width: 20px;\n        height: 20px;\n    }\n\n    #" + Br.BELL + ":hover #" + Br.BELL_IMAGE + " {\n        width: 50px;\n        height: 50px;\n        border-color: transparent;\n    }\n\n    #" + Br.BELL + " {\n        " + e.bell_direction + ": 30px;\n    }\n\n    #" + Br.BELL + ":hover {\n        background-color: " + e.bell_color_hover + ";\n    }\n\n    #" + Br.BELL_IMAGE_WRAPPER + " {\n        background-color: " + e.bell_color + ";\n    }\n\n    #" + Br.BELL_DENIED_HELP_CLOSE + "{\n        position: absolute;\n        top: 0;\n        right: 0;\n        padding: 2px 4px;\n        color: gray;\n        cursor: pointer;\n        border: 1px solid #d6d6d6;\n        border-top-right-radius: 5px;\n        font-size: 15px;\n        font-family: arial;\n    }\n\n    #" + Br.BELL_DENIED_HELP + "{\n        z-index: " + _t + ";\n        position: fixed;\n        bottom: 110px;\n        " + e.bell_direction + ": 30px;\n        background: white;\n        padding: 25px 15px 15px;\n        color: #000;\n        direction: rtl;\n        border-radius: 5px;\n        width:230px;\n    }\n\n    #" + Br.BELL_DENIED_HELP_IMAGE + "{\n        max-width: 100%;\n    }\n\n  @media screen and (max-width: 767px) {\n      #" + Br.BELL + " {\n        width: 4em;\n        height: 4em;\n        margin:0;\n    }\n\n    #" + Br.BELL_IMAGE + " {\n        width: 3em;\n        height: 3em;\n    }\n\n    #" + Br.BELL + ":hover #" + Br.BELL_IMAGE_WRAPPER + " {\n        width: 1em;\n        height: 1em;\n    }\n\n    #" + Br.BELL + ":hover #" + Br.BELL_IMAGE + " {\n        width: 4em;\n        height: 4em;\n    }\n  \n    #" + Br.BELL_IMAGE_WRAPPER + " {\n        width: 4em;\n        height: 4em;\n    }\n  }\n\n  ";
                e.show_bell_in_mobile || (t += "\n    @media screen and (max-width: 768px) {\n        #" + Br.BELL + " {\n            visibility: hidden!important;\n            opacity: 0!important;\n        }\n    }"), Et(t)
            }
        }
        var Wr, Yr, Gr = function(e, t, n, r) {
                return new(n || (n = Promise))((function(i, o) {
                    function a(e) {
                        try {
                            c(r.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function s(e) {
                        try {
                            c(r.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(a, s)
                    }
                    c((r = r.apply(e, t || [])).next())
                }))
            },
            Kr = function(e, t) {
                var n, r, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function s(o) {
                    return function(s) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1], i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2], a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, s])
                    }
                }
            },
            Vr = {
                show_bell: 1,
                show_bell_in_mobile: 1,
                bell_direction: "right",
                tooltip_direction: "left",
                bell_color_hover: "#7a7a7a",
                bell_color: "#444444",
                bell_tooltip: "",
                without_popup: !0,
                isNativeMode: !1
            };

        function Qr(e) {
            var t = document.getElementById(Br.BELL);
            t && t.classList.add(e)
        }

        function Hr(e) {
            var t = document.getElementById(Br.BELL);
            t && t.classList.remove(e)
        }

        function Zr() {
            Hr(vt)
        }

        function qr() {
            var e, t = document.getElementById(Br.BELL_DENIED_HELP);
            if (!t) {
                var n = Lt('\n    <div\n        id="' + Br.BELL_DENIED_HELP + '"\n        class="' + vt + '"\n    >\n        <span id="' + Br.BELL_DENIED_HELP_CLOSE + '">x</span>\n        <p>\n            شما اجازه ارسال نوتیف را به ما ندادید. طبق تصویر زیر، اجازه ارسال نوتیف را صادر کنید.\n        </p>\n        <img id="' + Br.BELL_DENIED_HELP_IMAGE + '" src=' + (tr() ? sn.STATIC_IMAGES + "/android-chrome-denied-help.png" : hr() ? sn.STATIC_IMAGES + "/firefox-denied-help.png" : sn.STATIC_IMAGES + "/chrome-denied-help.png") + ">\n    </div>\n");
                n && document.body.appendChild(n)
            }
            t = document.getElementById(Br.BELL_DENIED_HELP), null === (e = document.getElementById(Br.BELL_DENIED_HELP_CLOSE)) || void 0 === e || e.addEventListener("click", (function() {
                t && t.classList.add(vt)
            }), !1)
        }

        function $r() {
            var e = document.getElementById(Br.BELL),
                t = document.getElementById(Br.BELL_DENIED_HELP);
            e && (e.onclick = function() {
                return Gr(this, void 0, void 0, (function() {
                    var e;
                    return Kr(this, (function(n) {
                        switch (n.label) {
                            case 0:
                                return [4, Gt()];
                            case 1:
                                return e = n.sent(), Vr.isNativeMode && e ? (t && ((r = t) && (r.classList.contains(vt) ? r.classList.remove(vt) : r.classList.add(vt))), [3, 5]) : [3, 2];
                            case 2:
                                return Vr.without_popup ? (_n(), [3, 5]) : [3, 3];
                            case 3:
                                return [4, Cr()];
                            case 4:
                                n.sent(), n.label = 5;
                            case 5:
                                return [2]
                        }
                        var r
                    }))
                }))
            })
        }

        function Jr(e) {
            qr(),
                function(e) {
                    if (Fr(e), !document.getElementById(Br.BELL)) {
                        var t = Lt('\n    <div\n        id="' + Br.BELL + '"\n        najvatooltip="' + e.bell_tooltip + '‍"\n        najvatooltip-position="' + e.tooltip_direction + '"\n        class="' + vt + '"\n    >\n        <div id="' + Br.BELL_IMAGE_WRAPPER + '">\n            <img\n                id="' + Br.BELL_IMAGE + '"\n                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUzIDUzIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MyA1MzsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSI2NHB4IiBoZWlnaHQ9IjY0cHgiPjxwYXRoIHN0eWxlPSJmaWxsOiNFN0VDRUQ7IiBkPSJNMTIuODIxLDQ2LjYzOGMxMC43MDEsMS44NDcsMTYuNjU5LDEuODQ3LDI3LjM2LDBMNDkuNjcxLDQ1bDAsMGMtNC42ODUtNC42NTctNy4zMTctMTAuNDE1LTcuMzE3LTE3ICB2LTljMC4wMzgtNi4wNDctMy45NTctMTAuNDc4LTcuOTQ2LTEyLjMwMWMtNC45OTktMi4yODUtMTAuODE1LTIuMjk0LTE1LjgwNiwwLjAwOEMxNC42NDgsOC41MywxMC4zNjcsMTIuOTU4LDEwLjMyOSwxOXY5ICBjMCw2LjU4NS0yLjMxNSwxMi4zNDMtNywxN2wwLDBMMTIuODIxLDQ2LjYzOHoiLz48cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTE1LjMyOSwyMGMtMC4wMDIsMC0wLjAwNCwwLTAuMDA2LDBjLTAuNTUyLTAuMDA0LTAuOTk3LTAuNDU0LTAuOTk0LTEuMDA2ICBjMC4wMy00LjY4MiwzLjc1Mi03LjY0Myw1Ljk0OC04LjY1NGMzLjg0OS0xLjc3NSw4LjU5NC0xLjc3MiwxMi40NjktMC4wMDJjMC41MDIsMC4yMjksMC43MjMsMC44MjIsMC40OTQsMS4zMjUgIGMtMC4yMywwLjUwMi0wLjgyMywwLjcyNC0xLjMyNiwwLjQ5M2MtMy4zNTMtMS41MzMtNy40NjktMS41MzctMTAuNzk5LDBjLTEuNzY3LDAuODE0LTQuNzYyLDMuMTczLTQuNzg1LDYuODUgIEMxNi4zMjYsMTkuNTU3LDE1Ljg3OSwyMCwxNS4zMjksMjB6Ii8+PHBhdGggc3R5bGU9ImZpbGw6I0M3Q0FDNzsiIGQ9Ik0zMC4zMjksNS4zODFWNGMwLTIuMjA5LTEuNzkxLTQtNC00cy00LDEuNzkxLTQsNHYxLjQ1M0MyNC45NTgsNC44NjIsMjcuNjksNC44NDEsMzAuMzI5LDUuMzgxeiIvPjxwYXRoIHN0eWxlPSJmaWxsOiNDN0NBQzc7IiBkPSJNMTguMjM1LDQ3LjQ2YzEuNDQ1LDMuMjY4LDQuNjAyLDUuNTQsOC4yNzcsNS41NGMzLjY3NiwwLDYuODM0LTIuMjczLDguMjc4LTUuNTQzICBDMjguODYyLDQ4LjIwOSwyNC4xNTksNDguMjEsMTguMjM1LDQ3LjQ2eiIvPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjxnPjwvZz48Zz48L2c+PGc+PC9nPjwvc3ZnPg=="\n            />\n        </div>\n    </div>\n');
                        t && document.body.appendChild(t), $r()
                    }
                }(e), Zr()
        }

        function Xr(e) {
            return Gr(this, void 0, void 0, (function() {
                var t, n;
                return Kr(this, (function(r) {
                    switch (r.label) {
                        case 0:
                            return Vr = e, Boolean(Vr.show_bell) || Boolean(Vr.show_bell_in_mobile) ? [4, Ne(l.HasNajvaSubscriptionWindowOpened)] : [3, 3];
                        case 1:
                            return t = r.sent(), [4, Yt()];
                        case 2:
                            n = r.sent(), (Vr.isNativeMode && !n || !Vr.isNativeMode && ("string" != typeof t || "true" !== t)) && Jr(Vr),
                                function(e) {
                                    window.addEventListener(St.NOTIF_ACCESS_DENIED, e)
                                }((function() {
                                    Jr(Vr)
                                })), r.label = 3;
                        case 3:
                            return [2]
                    }
                }))
            }))
        }! function(e) {
            e.BACKDROP_CONTAINER = "najva-backdrop-container", e.HIDDEN_IN_BACKDROP = "najva-hidden-in-backdrop", e.BACKDROP_TEXT_CONTAINER_DOWN = "najva-backdrop-text-container-down", e.BACKDROP_TEXT = "najva-backdrop-text"
        }(Wr || (Wr = {})),
        function(e) {
            e.BACKDROP = "najva-backdrop", e.BACKDROP_CLOSE = "najva-backdrop-close", e.BACKDROP_TEXT_CONTAINER = "najva-backdrop-text-container", e.BACKDROP_ARROW = "najva-backdrop-arrow", e.DENIED_HELP_BACKDROP = "najva-denied-help-backdrop", e.DENIED_HELP_CLOSE = "najva-denied-help-close", e.DENIED_HELP_IMAGE = "najva-denied-help-img"
        }(Yr || (Yr = {}));
        var ei, ti, ni = !1;

        function ri() {
            ni || (ni = !0, Et("\n    #" + Yr.BACKDROP + "{\n        position:fixed;\n        top:0;\n        left:0;\n        width: 100vw;\n        height: 100vh;\n        z-index: " + _t + ";\n        background-color: #000;\n        opacity: 0.8;\n    }\n\n    #" + Yr.BACKDROP_TEXT_CONTAINER + "{\n        direction: rtl;\n        display: flex;\n        max-width: 600px;\n        z-index: 2147483645;\n        margin: 200px auto;\n        position: fixed;\n        right: 0;\n        left: 0;\n        top: 0;\n    }\n\n    #" + Yr.BACKDROP_TEXT_CONTAINER + "." + Wr.BACKDROP_TEXT_CONTAINER_DOWN + "{\n        margin: 250px auto;\n    }\n\n    #" + Yr.BACKDROP_TEXT_CONTAINER + " ." + Wr.BACKDROP_TEXT + "{\n        direction: rtl;\n        z-index: " + _t + ";\n        font-size: 30px;\n        font-weight: bold;\n        line-height: normal;\n        color: white;\n        font-family: inherit;\n        text-align: right;\n        display: flex;\n        align-items: flex-end;\n        max-width: 520px;\n        padding-left: 20px;\n    }\n\n    ." + Wr.BACKDROP_TEXT_CONTAINER_DOWN + " ." + Wr.BACKDROP_TEXT + "{\n        align-items: flex-start;\n    }\n\n    #" + Yr.BACKDROP_ARROW + " {\n        flex-basis: 80px;\n        height: 160px;\n        background-size: contain;\n        transform: rotate(170deg);\n        background-image: url(" + sn.STATIC_IMAGES + "/arrow-white.png);\n        background-repeat: no-repeat;\n    }\n\n    ." + Wr.BACKDROP_TEXT_CONTAINER_DOWN + " #" + Yr.BACKDROP_ARROW + " {\n        transform: rotate(0deg);\n    }\n\n    #" + Yr.BACKDROP_CLOSE + " {\n        position: fixed;\n        right: 20px;\n        top: 30px;\n        width: 55px;\n        height: 32px;\n        cursor: pointer;\n        z-index: " + (_t + 1) + "\n    }\n\n    #" + Yr.BACKDROP_CLOSE + ":before,#" + Yr.BACKDROP_CLOSE + ':after  {\n        position: fixed;\n        right: 48px;\n        content: " ";\n        height: 33px;\n        width: 3px;\n        background-color: #ffffff;\n    }\n\n    #' + Yr.BACKDROP_CLOSE + ":before {\n        transform: rotate(45deg);\n    }\n\n    #" + Yr.BACKDROP_CLOSE + ":after {\n        transform: rotate(-45deg);\n    }\n\n    #" + Yr.DENIED_HELP_BACKDROP + "{\n        position: fixed;\n        color: white;\n        font-family: inherit;\n        z-index:" + _t + ";\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        width: 100%;\n        top: 30px;\n        margin: auto;\n        left: 0;\n        right: 0;\n    }\n\n    #" + Yr.DENIED_HELP_BACKDROP + " p {\n        direction: rtl;\n        font-size: 1.5em;\n        font-weight: bold;\n    }\n\n    #" + Yr.DENIED_HELP_BACKDROP + " #" + Yr.DENIED_HELP_CLOSE + " {\n        color: white;\n        border: 1px solid white;\n        border-radius: 10px;\n        position: fixed;\n        top: 10px;\n        right: 10px;\n    }\n\n    ." + Wr.HIDDEN_IN_BACKDROP + "{\n        display: none;\n    }\n\n    @media screen and (max-width: 767px) {\n      #" + Yr.DENIED_HELP_BACKDROP + " #" + Yr.DENIED_HELP_IMAGE + " {\n          width: 90%;\n      }\n\n      #" + Yr.DENIED_HELP_BACKDROP + " p {\n          text-align: justify;\n          padding: 1em;\n      }\n    }\n  "))
        }

        function ii() {
            var e = document.getElementById(ti.POWERED_BY);
            e && e.classList.add(vt)
        }! function(e) {
            e.POWERED_BY = "najva-powered-by", e.POWERED_BY_UP = "najva-powered-by-up"
        }(ei || (ei = {})),
        function(e) {
            e.POWERED_BY = "najva-powered-by"
        }(ti || (ti = {}));
        var oi = !1;

        function ai(e) {
            if (!e.notification_button_enabled) {
                var t = document.querySelector("." + Wr.BACKDROP_CONTAINER);
                if (t) {
                    oi || (oi = !0, Et("\n  ." + Wr.BACKDROP_CONTAINER + " ." + ei.POWERED_BY + " {\n        direction: rtl;\n        display: flex;\n        flex-direction: row;\n        color: white;\n        width: 165px;\n        font-size: 12px;\n        align-items: center;\n        font-family: inherit;\n        cursor: pointer;\n        z-index: " + _t + ";\n        position: fixed;\n        bottom: 10px;\n        right: 10px;\n    }\n\n    ." + Wr.BACKDROP_CONTAINER + " ." + ei.POWERED_BY + " img {\n        width: 50px;\n        height: 50px;\n        margin-right: -5px;\n        margin-top: -13px;\n\n    }\n    ." + Wr.BACKDROP_CONTAINER + " ." + ei.POWERED_BY + "." + ei.POWERED_BY_UP + "{\n        top: 10px;\n        bottom: unset;\n        width: unset;\n    }\n  "));
                    var n = Lt('\n  <div id="' + ti.POWERED_BY + '" class="' + ei.POWERED_BY + " " + (tr() ? ei.POWERED_BY_UP : "") + '">\n      <span>طراحی‌شده توسط</span>\n      <img src="' + sn.STATIC_IMAGES + '/najva-flag-typography-white.svg">\n    </div>\n  ');
                    n && t.appendChild(n);
                    var r = document.getElementById(ti.POWERED_BY);
                    r && r.addEventListener("click", (function() {
                        window.open("https://najva.com")
                    }))
                }
            }
        }
        var si = "najva-backdrop-close";
        var ci, ui, li, di, fi = {
            show_backdrop: !1,
            show_backdrop_mobile: !1,
            backdrop_text: "",
            website_policy: {
                notification_queue: 1,
                notification_button_enabled: !1,
                use_najva_firebase_account: !1,
                notification_countdown: 1,
                notification_blocked: !1,
                recommender_permission: !1,
                tag_enabled: !1,
                email_enabled: !1
            }
        };

        function pi() {
            var e, t = br();
            if (t) {
                var n = t.split(".")[0];
                if ((e = dr()) && "edge" === e.name && Number(n) <= 18) return !0
            }
            return !1
        }

        function hi() {
            return document.querySelector("." + Wr.BACKDROP_CONTAINER)
        }

        function bi() {
            var e = hi();
            e && e.classList.add(Wr.HIDDEN_IN_BACKDROP)
        }

        function vi() {
            var e = hi();
            if (e) e.classList.remove(Wr.HIDDEN_IN_BACKDROP);
            else {
                var t = Lt('<div class="' + Wr.BACKDROP_CONTAINER + '">\n        <div id=' + Yr.BACKDROP + "></div>\n      </div>");
                t && document.body.appendChild(t)
            }
        }

        function wi() {
            Qr(Wr.HIDDEN_IN_BACKDROP)
        }

        function yi() {
            var e, t;
            bi(), ii(), (e = document.getElementById("" + Yr.BACKDROP_TEXT_CONTAINER)) && e.classList.add(Wr.HIDDEN_IN_BACKDROP), (t = document.getElementById(Yr.BACKDROP_CLOSE)) && t.classList.add(Wr.HIDDEN_IN_BACKDROP), Hr(Wr.HIDDEN_IN_BACKDROP)
        }

        function gi() {
            tr() ? (bi(), ii()) : yi()
        }

        function _i() {
            var e = hi();
            if (e) {
                var t = document.getElementById(Yr.BACKDROP_CLOSE);
                if (t) t.classList.remove(Wr.HIDDEN_IN_BACKDROP);
                else {
                    var n = Lt("<div id=" + Yr.BACKDROP_CLOSE + "></div>");
                    n && e.appendChild(n)
                }(t = document.getElementById(Yr.BACKDROP_CLOSE)) && t.addEventListener("click", (function() {
                    var e;
                    gi(), e = new Event(si), window.dispatchEvent(e)
                }))
            }
        }

        function mi() {
            ri(), vi(), ai(fi.website_policy), _i(),
                function() {
                    var e = hi();
                    if (e) {
                        var t = document.getElementById("." + Yr.BACKDROP_TEXT_CONTAINER);
                        if (t) t.classList.remove(Wr.HIDDEN_IN_BACKDROP);
                        else {
                            var n = Lt("\n    <div id=" + Yr.BACKDROP_TEXT_CONTAINER + ">\n        <span class=" + Wr.BACKDROP_TEXT + ">\n          " + (fi.backdrop_text ? fi.backdrop_text : "") + "\n        </span>\n        <div id=" + Yr.BACKDROP_ARROW + "></div>\n    </div>\n      ");
                            n && e.appendChild(n);
                            var r = document.querySelector("." + Yr.BACKDROP_TEXT_CONTAINER);
                            r && pi() && r.classList.add(Wr.BACKDROP_TEXT_CONTAINER_DOWN)
                        }
                    }
                }()
        }

        function Mi() {
            (function() {
                var e = br();
                if (e) {
                    var t = Number(e.split(".")[0]);
                    if (hr() && t < 77 && t > 71) return !1
                }
                return !0
            })() && (fi.show_backdrop || fi.show_backdrop_mobile) && (tr() && fi.show_backdrop_mobile ? (ri(), vi(), ai(fi.website_policy), wi()) : !tr() && fi.show_backdrop && (mi(), wi()))
        }

        function Ei(e) {
            fi = e,
                function(e) {
                    window.addEventListener(St.NOTIF_PROMPT_OPEN, e)
                }(Mi),
                function(e) {
                    window.addEventListener(St.NOTIF_PROMPT_CLOSE, e)
                }(gi)
        }

        function Ni(e) {
            return e ? decodeURIComponent(e) : ""
        }

        function Ti(e) {
            return function(e) {
                return 0 === e.indexOf("/") ? e.slice(1) : e
            }(Ni(window.location.pathname)).startsWith(Ni(e))
        }

        function Li(e) {
            return function(e) {
                return "/" === e ? "" : "/" === e[e.length - 1] ? e.slice(0, e.length - 1) : e
            }(Ni(window.location.pathname)).endsWith(Ni(e))
        }

        function Si(e) {
            var t = Ni(e);
            return Ni(window.location.pathname).includes(t)
        }

        function ji(e) {
            var t = e.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&"),
                n = new RegExp(t);
            return Ni(window.location.pathname).search(n) > -1
        }

        function ki(e, t) {
            return e === di.Contains ? Si(t) : e === di.EndsWith ? Li(t) : e === di.MatchRegex ? ji(t) : e === di.NotContains ? !Si(t) : e === di.NotEndsWith ? function(e) {
                return !Li(e)
            }(t) : e === di.NotMatchRegex ? !ji(t) : e === di.NotStartsWith ? function(e) {
                return !Ti(e)
            }(t) : e === di.StartsWith && Ti(t)
        }! function(e) {
            e[e.Small = 0] = "Small", e[e.Medium = 1] = "Medium", e[e.Large = 2] = "Large"
        }(ci || (ci = {})),
        function(e) {
            e[e.Button = 0] = "Button", e[e.Link = 1] = "Link"
        }(ui || (ui = {})),
        function(e) {
            e[e.And = 0] = "And", e[e.Or = 1] = "Or"
        }(li || (li = {})),
        function(e) {
            e[e.StartsWith = 0] = "StartsWith", e[e.EndsWith = 1] = "EndsWith", e[e.Contains = 2] = "Contains", e[e.MatchRegex = 3] = "MatchRegex", e[e.NotStartsWith = 4] = "NotStartsWith", e[e.NotEndsWith = 5] = "NotEndsWith", e[e.NotContains = 6] = "NotContains", e[e.NotMatchRegex = 7] = "NotMatchRegex"
        }(di || (di = {}));
        var xi, Di = "000",
            Ii = "00abbb";
        ! function(e) {
            e.CUSTOM_LINK_CONTAINER = "najva-custom-link-container", e.CUSTOM_LINK = "najva-custom-link", e.CUSTOM_LINK_LINK = "najva-custom-link-link", e.CUSTOM_LINK_BUTTON = "najva-custom-link-button", e.CUSTOM_LINK_LARGE = "najva-custom-link-large", e.CUSTOM_LINK_MEDIUM = "najva-custom-link-medium", e.CUSTOM_LINK_SMALL = "najva-custom-link-small", e.DISABLED = "najva-custom-link-disabled"
        }(xi || (xi = {}));
        var Oi = !1;
        var Ai = function(e, t, n, r) {
                return new(n || (n = Promise))((function(i, o) {
                    function a(e) {
                        try {
                            c(r.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function s(e) {
                        try {
                            c(r.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(a, s)
                    }
                    c((r = r.apply(e, t || [])).next())
                }))
            },
            Pi = function(e, t) {
                var n, r, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function s(o) {
                    return function(s) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1], i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2], a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, s])
                    }
                }
            },
            Ci = null,
            zi = [];

        function Bi(e) {
            return Ai(this, void 0, void 0, (function() {
                var t, n, r;
                return Pi(this, (function(i) {
                    switch (i.label) {
                        case 0:
                            return [4, ne()];
                        case 1:
                            return t = i.sent(), e && t ? 0 === (n = Object.keys(e)).length ? [2, !1] : (r = !0, n.forEach((function(n) {
                                (!t[n] || t[n] && t[n] !== e[n]) && (r = !1)
                            })), [2, r]) : [2, !1]
                    }
                }))
            }))
        }

        function Ri(e) {
            return Ai(this, void 0, void 0, (function() {
                var t, n;
                return Pi(this, (function(r) {
                    switch (r.label) {
                        case 0:
                            return [4, Bi(e.tags)];
                        case 1:
                            return t = r.sent(), [4, mn()];
                        case 2:
                            return n = r.sent(), [2, e.allow_unsubscribe && n && t]
                    }
                }))
            }))
        }

        function Ui(e, t) {
            return Ai(this, void 0, void 0, (function() {
                return Pi(this, (function(n) {
                    switch (n.label) {
                        case 0:
                            return t.classList.add(xi.CUSTOM_LINK), t.classList.add(bt), e ? [4, Bi(e.tags)] : [3, 2];
                        case 1:
                            n.sent() && t.classList.add(xi.DISABLED),
                                function(e, t) {
                                    t === ui.Button ? e.classList.add(xi.CUSTOM_LINK_BUTTON) : e.classList.add(xi.CUSTOM_LINK_LINK)
                                }(t, e.type),
                                function(e, t) {
                                    t === ci.Small && e.classList.add(xi.CUSTOM_LINK_SMALL), t === ci.Medium ? e.classList.add(xi.CUSTOM_LINK_MEDIUM) : e.classList.add(xi.CUSTOM_LINK_LARGE)
                                }(t, e.size),
                                function(e, t, n, r) {
                                    n && (e.style.color = "#" + n), t === ui.Button && (e.style.backgroundColor = "#" + r)
                                }(t, e.type, e.text_color, e.background_color), n.label = 2;
                        case 2:
                            return [2]
                    }
                }))
            }))
        }

        function Fi(e) {
            return Ai(this, void 0, void 0, (function() {
                return Pi(this, (function(t) {
                    switch (t.label) {
                        case 0:
                            return "", [4, Ri(e)];
                        case 1:
                            return [2, t.sent() ? e.unsubscribe_text ? e.unsubscribe_text : "unsubscribe" : e.subscribe_text ? e.subscribe_text : "subscribe"]
                    }
                }))
            }))
        }

        function Wi(e) {
            return Ai(this, void 0, void 0, (function() {
                var t, n, r, i, o, a, s, c, u, l, d;
                return Pi(this, (function(f) {
                    switch (f.label) {
                        case 0:
                            return e.tags && Object.keys(e.tags).length > 0 ? [4, Jn(e.tags)] : [3, 3];
                        case 1:
                            return f.sent(), e.welcome_notification_enabled && Ci ? (t = e.welcome_notification, n = t.title, r = t.body, i = t.icon, o = t.image, a = t.url, s = t.actions, c = {
                                title: n,
                                body: r,
                                icon: i,
                                image: o,
                                buttons: JSON.stringify(s.map((function(e, t) {
                                    return {
                                        title: e.title,
                                        onclick_action: 0,
                                        button_id: t,
                                        icon_url: "",
                                        complete_url: e.url
                                    }
                                }))),
                                complete_url: a,
                                tag: "",
                                pusher: "",
                                require_interaction: "",
                                light_up_screen: "",
                                notification_id: "",
                                priority: "",
                                url: "",
                                expireTime: "",
                                api_key: "",
                                onclick_action: "",
                                website_id: "",
                                is_report_enabled: "",
                                najva_token: ""
                            }, u = $t(c, "", !1), l = u.title, d = u.options, [4, Ci.showNotification(l, d)]) : [3, 3];
                        case 2:
                            f.sent(), f.label = 3;
                        case 3:
                            return [2]
                    }
                }))
            }))
        }

        function Yi(e) {
            return Ai(this, void 0, void 0, (function() {
                return Pi(this, (function(t) {
                    switch (t.label) {
                        case 0:
                            return e.tags ? [4, Promise.all(Object.keys(e.tags).map((function(e) {
                                return er(e)
                            })))] : [3, 2];
                        case 1:
                            t.sent(), t.label = 2;
                        case 2:
                            return [2]
                    }
                }))
            }))
        }

        function Gi(e) {
            return Ai(this, void 0, void 0, (function() {
                var t, n, r, i, o;
                return Pi(this, (function(a) {
                    switch (a.label) {
                        case 0:
                            return t = e.container_id, (n = document.getElementById(t)) ? [4, Bi(e.tags)] : [2];
                        case 1:
                            return (r = a.sent()) ? [4, Ri(e)] : [3, 3];
                        case 2:
                            r = !a.sent(), a.label = 3;
                        case 3:
                            return r ? [2] : (n.firstChild && n.firstChild.remove(), s = e.urls.operation, (c = e.urls.matchings) && 0 !== c.length && !(s === li.And ? c.reduce((function(e, t) {
                                return e && ki(t.condition, t.value)
                            }), !0) : c.reduce((function(e, t) {
                                return e || ki(t.condition, t.value)
                            }), !1)) ? [3, 7] : [4, Fi(e)]);
                        case 4:
                            return i = a.sent(), (o = Lt("<button>" + i + "</button>")) ? (n.appendChild(o), n.firstChild ? [4, Ki(e, n.firstChild)] : [3, 7]) : [3, 7];
                        case 5:
                            return a.sent(), [4, Ui(e, n.firstChild)];
                        case 6:
                            a.sent(), a.label = 7;
                        case 7:
                            return [2]
                    }
                    var s, c
                }))
            }))
        }

        function Ki(e, t) {
            return Ai(this, void 0, void 0, (function() {
                var n = this;
                return Pi(this, (function(r) {
                    switch (r.label) {
                        case 0:
                            return [4, Ri(e)];
                        case 1:
                            return r.sent() ? t.addEventListener("click", (function() {
                                return Ai(n, void 0, void 0, (function() {
                                    return Pi(this, (function(n) {
                                        switch (n.label) {
                                            case 0:
                                                t.disabled = !0, n.label = 1;
                                            case 1:
                                                return n.trys.push([1, 4, , 5]), [4, Yi(e)];
                                            case 2:
                                                return n.sent(), [4, Gi(e)];
                                            case 3:
                                                return n.sent(), t.disabled = !1, [3, 5];
                                            case 4:
                                                return n.sent(), t.disabled = !1, [3, 5];
                                            case 5:
                                                return [2]
                                        }
                                    }))
                                }))
                            })) : t.addEventListener("click", (function() {
                                return Ai(this, void 0, void 0, (function() {
                                    return Pi(this, (function(n) {
                                        switch (n.label) {
                                            case 0:
                                                t.disabled = !0, n.label = 1;
                                            case 1:
                                                return n.trys.push([1, 7, , 8]), [4, _n()];
                                            case 2:
                                                return n.sent(), [4, Wi(e)];
                                            case 3:
                                                return n.sent(), e.allow_unsubscribe ? [4, Gi(e)] : [3, 5];
                                            case 4:
                                                return n.sent(), [3, 6];
                                            case 5:
                                                this.remove(), n.label = 6;
                                            case 6:
                                                return t.disabled = !1, [3, 8];
                                            case 7:
                                                return n.sent(), t.disabled = !1, [3, 8];
                                            case 8:
                                                return [2]
                                        }
                                    }))
                                }))
                            })), [2]
                    }
                }))
            }))
        }

        function Vi() {
            return Ai(this, void 0, void 0, (function() {
                var e = this;
                return Pi(this, (function(t) {
                    return Oi || (Oi = !0, Et("\n ." + xi.CUSTOM_LINK_CONTAINER + "{\n    display: inline-block;\n  }\n\n." + xi.CUSTOM_LINK + " {\n  cursor: pointer;\n  text-transform: uppercase;\n  font-weight: 600;\n  font-family:inherit;\n  border: unset;\n  background-color: unset;\n  font-family: inherit;\n  color: #" + Di + "\n}\n\n\n." + xi.CUSTOM_LINK + ":active,." + xi.CUSTOM_LINK + ":focus  {\n  border: none;\n  outline: none;\n}\n\n." + xi.CUSTOM_LINK + "." + bt + " {\n  display: inline-block;\n  transition: all .1s;\n}\n\n." + bt + "{\n  font-size: medium;\n  line-height: 1;\n  direction: ltr;\n  text-align: left;\n  text-align: start;\n  font-style: normal;\n  font-weight: 400;\n  text-decoration: none;\n  list-style-type: disc\n}\n\n." + xi.CUSTOM_LINK_LINK + "{\n  cursor: pointer;\n  text-transform: uppercase;\n  font-weight: 600\n}\n\n." + xi.CUSTOM_LINK_LINK + ":hover{\n  text-decoration: underline\n}\n\n." + xi.CUSTOM_LINK_BUTTON + "{\n  text-transform: uppercase;\n    -ms-touch-action: manipulation;\n    touch-action: manipulation;\n    font-weight: 600;\n    border-radius: 4px;\n    box-shadow: 1px 1px 1px grey;\n    cursor: pointer;\n    background-color:#" + Ii + "\n}\n\n." + xi.CUSTOM_LINK_BUTTON + ":hover{\n  text-decoration: none;\n  box-shadow: 2px 3px 4px grey\n}\n\n." + xi.CUSTOM_LINK + "." + xi.CUSTOM_LINK_BUTTON + "." + xi.CUSTOM_LINK_SMALL + "{\n  font-size: 13px;\n  padding: 4px 12px;\n}\n\n." + xi.CUSTOM_LINK + "." + xi.CUSTOM_LINK_BUTTON + "." + xi.CUSTOM_LINK_MEDIUM + "{\n  font-size: 15px;\n  padding: 8px 16px;\n}\n\n." + xi.CUSTOM_LINK + "." + xi.CUSTOM_LINK_BUTTON + "." + xi.CUSTOM_LINK_LARGE + "{\n  font-size: 18px;\n  padding: 12px 20px;\n}\n\n\n." + xi.CUSTOM_LINK + "." + xi.CUSTOM_LINK_LINK + "." + xi.CUSTOM_LINK_SMALL + "{\n  font-size: 13px;\n}\n\n." + xi.CUSTOM_LINK + "." + xi.CUSTOM_LINK_LINK + "." + xi.CUSTOM_LINK_MEDIUM + "{\n  font-size: 15px;\n}\n\n." + xi.CUSTOM_LINK + "." + xi.CUSTOM_LINK_LINK + "." + xi.CUSTOM_LINK_LARGE + "{\n  font-size: 18px;\n}\n\n." + xi.DISABLED + " {\n  opacity: 0.5;\n}\n  ")), zi.forEach((function(t) {
                        return Ai(e, void 0, void 0, (function() {
                            return Pi(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, Gi(t)];
                                    case 1:
                                        return e.sent(), [2]
                                }
                            }))
                        }))
                    })), [2]
                }))
            }))
        }

        function Qi(e, t) {
            Ci = t, (zi = e) && 0 !== zi.length && Vi()
        }
        var Hi = function(e, t, n, r) {
                return new(n || (n = Promise))((function(i, o) {
                    function a(e) {
                        try {
                            c(r.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function s(e) {
                        try {
                            c(r.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(a, s)
                    }
                    c((r = r.apply(e, t || [])).next())
                }))
            },
            Zi = function(e, t) {
                var n, r, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function s(o) {
                    return function(s) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1], i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2], a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, s])
                    }
                }
            };

        function qi(e) {
            return Hi(this, void 0, void 0, (function() {
                return Zi(this, (function(t) {
                    switch (t.label) {
                        case 0:
                            return [4, Nr()];
                        case 1:
                            return t.sent() || e && !Ce().messaging.isSupported() ? [2, !1] : e || (self ? "PushManager" in self && "Notification" in self && PushSubscription.prototype.hasOwnProperty("getKey") : navigator.cookieEnabled && "PushManager" in window && "Notification" in window && "fetch" in window && PushSubscription.prototype.hasOwnProperty("getKey")) ? [2, !0] : [2, !1]
                    }
                }))
            }))
        }
        var $i = function(e, t, n, r) {
                return new(n || (n = Promise))((function(i, o) {
                    function a(e) {
                        try {
                            c(r.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function s(e) {
                        try {
                            c(r.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(a, s)
                    }
                    c((r = r.apply(e, t || [])).next())
                }))
            },
            Ji = function(e, t) {
                var n, r, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function s(o) {
                    return function(s) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1], i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2], a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, s])
                    }
                }
            },
            Xi = {
                website_id: ""
            },
            eo = "0.0.0",
            to = "https://report.najva.com/version";

        function no() {
            return $i(this, void 0, void 0, (function() {
                var e;
                return Ji(this, (function(n) {
                    switch (n.label) {
                        case 0:
                            return n.trys.push([0, 3, , 4]), [4, t(to + "?" + new URLSearchParams({
                                version_type: "script",
                                version: eo,
                                website_id: Xi.website_id
                            }), {
                                method: "GET",
                                headers: {
                                    "Content-Type": "text/plain",
                                    Accept: "text/plain"
                                }
                            })];
                        case 1:
                            return n.sent(), [4, Te(l.LastScriptReportedVersion, eo)];
                        case 2:
                            return n.sent(), [3, 4];
                        case 3:
                            throw e = n.sent(), u(o.REPORT_SCRIPT_VERSION_FAILED, {
                                version: eo,
                                url: to,
                                browserErrorMessage: e.message,
                                error: e
                            });
                        case 4:
                            return [2]
                    }
                }))
            }))
        }

        function ro(e) {
            return $i(this, void 0, void 0, (function() {
                return Ji(this, (function(t) {
                    switch (t.label) {
                        case 0:
                            return Xi = e, [4, Ne(l.LastScriptReportedVersion)];
                        case 1:
                            return t.sent() === eo ? [3, 3] : [4, no()];
                        case 2:
                            t.sent(), t.label = 3;
                        case 3:
                            return [2]
                    }
                }))
            }))
        }

        function io(e, t) {
            return new Promise((function(n, r) {
                var i = document.createElement("script");
                i.type = "text/javascript", i.src = e, i.async = !0, i.onload = n, i.onerror = r, document[t].appendChild(i)
            }))
        }
        var oo = function(e, t, n, r) {
                return new(n || (n = Promise))((function(i, o) {
                    function a(e) {
                        try {
                            c(r.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function s(e) {
                        try {
                            c(r.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(a, s)
                    }
                    c((r = r.apply(e, t || [])).next())
                }))
            },
            ao = function(e, t) {
                var n, r, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function s(o) {
                    return function(s) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1], i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2], a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, s])
                    }
                }
            };
        var so, co = "email";
        ! function(e) {
            e.IsSubscribed = "is-subscribed", e.ModalShownCount = "modal-shown-count", e.WebsiteVisitCount = "website-visit-count"
        }(so || (so = {}));
        var uo, lo = function(e, t, n, r) {
                return new(n || (n = Promise))((function(i, o) {
                    function a(e) {
                        try {
                            c(r.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function s(e) {
                        try {
                            c(r.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(a, s)
                    }
                    c((r = r.apply(e, t || [])).next())
                }))
            },
            fo = function(e, t) {
                var n, r, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function s(o) {
                    return function(s) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1], i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2], a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, s])
                    }
                }
            };

        function po() {
            return lo(this, void 0, void 0, (function() {
                return fo(this, (function(e) {
                    switch (e.label) {
                        case 0:
                            return uo ? [3, 2] : [4, T("najva-email-subscription-database", 1, {
                                upgrade: function(e) {
                                    e.createObjectStore(co, {
                                        keyPath: "name"
                                    })
                                }
                            })];
                        case 1:
                            uo = e.sent(), e.label = 2;
                        case 2:
                            return [2, uo]
                    }
                }))
            }))
        }

        function ho(e) {
            return lo(this, void 0, void 0, (function() {
                var t, n, r, i;
                return fo(this, (function(a) {
                    switch (a.label) {
                        case 0:
                            return a.trys.push([0, 4, , 5]), [4, po()];
                        case 1:
                            return t = a.sent(), [4, (n = t.transaction(co, "readwrite")).store.get(e)];
                        case 2:
                            return r = a.sent(), [4, n.done];
                        case 3:
                            return a.sent(), r ? [2, r.value] : [2, 0];
                        case 4:
                            throw i = a.sent(), u(o.DB_READ_FAILED, {
                                key: e,
                                objectStoreName: co,
                                browserErrorMessage: i.message,
                                error: i
                            });
                        case 5:
                            return [2]
                    }
                }))
            }))
        }

        function bo(e, t) {
            return lo(this, void 0, void 0, (function() {
                var n, r, i;
                return fo(this, (function(a) {
                    switch (a.label) {
                        case 0:
                            return a.trys.push([0, 8, , 9]), [4, po()];
                        case 1:
                            return n = a.sent(), [4, (r = n.transaction(co, "readwrite")).store.get(e)];
                        case 2:
                            return a.sent() ? [4, r.store.put({
                                name: e,
                                value: t
                            })] : [3, 4];
                        case 3:
                            return a.sent(), [3, 6];
                        case 4:
                            return [4, r.store.add({
                                name: e,
                                value: t
                            })];
                        case 5:
                            a.sent(), a.label = 6;
                        case 6:
                            return [4, r.done];
                        case 7:
                            return a.sent(), [3, 9];
                        case 8:
                            throw i = a.sent(), u(o.DB_UPDATE_FAILED, {
                                key: e,
                                value: t,
                                objectStoreName: co,
                                browserErrorMessage: i.message,
                                error: i
                            });
                        case 9:
                            return [2]
                    }
                }))
            }))
        }
        var vo = "najva-email-modal",
            wo = !1;
        var yo = function() {
                return (yo = Object.assign || function(e) {
                    for (var t, n = 1, r = arguments.length; n < r; n++)
                        for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }).apply(this, arguments)
            },
            go = function(e, t, n, r) {
                return new(n || (n = Promise))((function(i, o) {
                    function a(e) {
                        try {
                            c(r.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function s(e) {
                        try {
                            c(r.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(a, s)
                    }
                    c((r = r.apply(e, t || [])).next())
                }))
            },
            _o = function(e, t) {
                var n, r, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function s(o) {
                    return function(s) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1], i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2], a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, s])
                    }
                }
            },
            mo = function(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    n = t && e[t],
                    r = 0;
                if (n) return n.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && r >= e.length && (e = void 0), {
                            value: e && e[r++],
                            done: !e
                        }
                    }
                };
                throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            };

        function Mo(t) {
            var n;
            null === (n = document.getElementById("submit-btn")) || void 0 === n || n.addEventListener("click", (function() {
                var n, r, i = function(e) {
                    var t = {};
                    return document.querySelectorAll(".input-container input").forEach((function(n) {
                        var r, i, o, a, s, c, u = n.getAttribute("id");
                        if (u) {
                            var l = null === (c = e.email_settings.fields.find((function(e) {
                                return e.key === u
                            }))) || void 0 === c ? void 0 : c.validations;
                            if (l) try {
                                for (var d = mo(l), f = d.next(); !f.done; f = d.next()) switch (f.value) {
                                    case "email":
                                        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/.test(n.value) || (t = yo(yo({}, t), ((o = {})[u] = "ایمیل نامعتبر است.", o)));
                                        break;
                                    case "phone":
                                        /^(0|\+98|0098)?9\d{9}$/.test(n.value) || (t = yo(yo({}, t), ((a = {})[u] = "شماره موبایل نامعتبر است.", a)));
                                        break;
                                    case "required":
                                        n.value || (t = yo(yo({}, t), ((s = {})[u] = "ایمیل الزامی است.", s)))
                                }
                            } catch (e) {
                                r = {
                                    error: e
                                }
                            } finally {
                                try {
                                    f && !f.done && (i = d.return) && i.call(d)
                                } finally {
                                    if (r) throw r.error
                                }
                            }
                        }
                    })), t
                }(t);
                if (0 === Object.keys(i).length && i.constructor === Object) ! function(t) {
                    var n, r = this,
                        i = document.getElementById(vo);
                    e("https://email.najva.com/v1/subscription_management/subscribe/" + t.email_settings.uuid + "/", {
                        method: "POST",
                        body: JSON.stringify((n = {
                            attribute: {}
                        }, document.querySelectorAll(".input-container input").forEach((function(e) {
                            var t = e.getAttribute("id");
                            t && (["mobile", "email"].includes(t) ? n[t] = e.value : n.attribute[t] = e.value)
                        })), n)),
                        headers: {
                            "Content-Type": "application/json"
                        },
                        credentials: "include"
                    }).then((function() {
                        return go(r, void 0, void 0, (function() {
                            return _o(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        return i && (i.style.display = "none"), [4, bo(so.IsSubscribed, !0)];
                                    case 1:
                                        return e.sent(), [2]
                                }
                            }))
                        }))
                    })).catch((function() {
                        i && (i.style.display = "none")
                    }))
                }(t);
                else try {
                    for (var o = mo(Object.keys(i)), a = o.next(); !a.done; a = o.next()) {
                        var s = a.value,
                            c = document.getElementById(s + "-error");
                        c && (c.innerText = i[s], c.style.display = "block")
                    }
                } catch (e) {
                    n = {
                        error: e
                    }
                } finally {
                    try {
                        a && !a.done && (r = o.return) && r.call(o)
                    } finally {
                        if (n) throw n.error
                    }
                }
            }))
        }

        function Eo() {
            return go(this, void 0, void 0, (function() {
                var e;
                return _o(this, (function(t) {
                    switch (t.label) {
                        case 0:
                            return [4, ho(so.WebsiteVisitCount)];
                        case 1:
                            return (e = t.sent()) || (e = 0), e = parseInt(e.toString(), 10), [4, bo(so.WebsiteVisitCount, e + 1)];
                        case 2:
                            return t.sent(), [2]
                    }
                }))
            }))
        }

        function No(e) {
            return go(this, void 0, void 0, (function() {
                var t, n;
                return _o(this, (function(r) {
                    switch (r.label) {
                        case 0:
                            return r.trys.push([0, 6, , 7]), [4, ho(so.IsSubscribed)];
                        case 1:
                            return r.sent() ? [3, 4] : e.website_policy.email_enabled ? [4, ho(so.WebsiteVisitCount)] : [3, 4];
                        case 2:
                            return t = r.sent(), [4, jr(e.email_settings.show_condition, t)];
                        case 3:
                            r.sent(),
                                function(e) {
                                    wo || (wo = !0, Et("\n  #najva-email-modal.modal {\n    display: block; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: " + _t + "; /* Sit on top */\n    padding-top: 100px; /* Location of the box */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n    text-align: center;\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n\n  #najva-email-modal.modal *{\n    -webkit-box-sizing: border-box;\n    box-sizing: border-box;\n  }\n\n  #najva-email-modal .input-container {\n    text-align: right;\n    direction: rtl;\n    margin-bottom: 1rem;\n    width: 90%;\n    max-width: 350px;\n  }\n\n  #najva-email-modal .input-container label {\n    display: block;\n    margin-bottom: .5rem;\n    margin-right: 13px;\n  }\n\n  #najva-email-modal .input-container .error {\n    display: none;\n    color: red;\n    font-size: 12px;\n  }\n\n  #najva-email-modal .input-container input {\n    display: block;\n    width: 100%;\n    height:45px;\n    padding: .375rem .75rem;\n    font-size: 1rem;\n    font-weight: 400;\n    line-height: 1.5;\n    color: #212529;\n    background-color: #fff;\n    background-clip: padding-box;\n    border: 1px solid #ced4da;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    border-radius: 4px;\n    -webkit-transition: border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;\n    transition: border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;\n    -o-transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;\n  }\n\n  #najva-email-modal .input-container input:focus {\n    color: #212529;\n    background-color: #fff;\n    border-color: #86b7fe;\n    outline: 0;\n  }\n\n  #najva-email-modal .input-container .required {\n    color: red;\n    margin-right: .25rem;\n  }\n\n  #najva-email-modal button#submit-btn {\n    display: inline-block;\n    font-weight: 400;\n    line-height: 1.5;\n    text-align: center;\n    text-decoration: none;\n    vertical-align: middle;\n    cursor: pointer;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    user-select: none;\n    border: 0;\n    padding: .375rem .75rem;\n    font-size: 1rem;\n    border-radius: 4px;\n    color: #fff;\n    background-color: #0d6efd;\n    width: 90%;\n    max-width: 350px;\n    height: 50px;\n    transition: all 0.6s ease;\n\n    // -webkit-transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;\n    // transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;\n    // -o-transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n    // transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;\n    // transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;\n  }\n\n  //#najva-email-modal button#submit-btn:hover {\n  //  background: #1e55ee; \n  //  background: -webkit-linear-gradient(to right, #19e5ff, #1e55ee);\n  //  background: linear-gradient(to right, #19e5ff, #1e55ee);\n  //  transition: all 0.6s ease;\n  //}\n\n  #najva-email-modal .modal-content {\n    position: relative;\n    background-color: #" + e.email_settings.background_color + ";\n    margin: auto;\n    padding: 0;\n    border: 1px solid #888;\n    border-radius: 6px ;\n    max-width: 550px;\n    width: 100%;\n    -webkit-animation-name: animatetop;\n    -webkit-animation-duration: 0.4s;\n    animation-name: animatetop;\n    animation-duration: 0.4s\n  }\n\n  /* Add Animation */\n  @-webkit-keyframes animatetop {\n    from {top:-300px; opacity:0} \n    to {top:0; opacity:1}\n  }\n\n  @keyframes animatetop {\n    from {top:-300px; opacity:0}\n    to {top:0; opacity:1}\n  }\n\n  /* The Close Button */\n  #najva-email-modal .close {\n    position: absolute;\n    right: 5px;\n    top: 0;\n    font-size: 30px;\n  }\n\n  #najva-email-modal .close:hover,\n  #najva-email-modal .close:focus {\n    color: #000;\n    text-decoration: none;\n    cursor: pointer;\n  }\n\n  #najva-email-modal .modal-header {\n    padding: 20px 10px 10px;\n    position: relative;\n  }\n\n  #najva-email-modal .modal-header img {\n    max-height: 150px;\n    max-width: 100%;\n  }\n  ‍ \n  #najva-email-modal .modal-header article {\n    font-size: 15px;\n  }\n\n  #najva-email-modal .modal-body {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -ms-flex-direction: column;\n    flex-direction: column;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    padding: 2px 16px;\n  }\n\n  #najva-email-modal .modal-footer {\n    padding: 1rem 0 2rem;\n  }\n\n  #najva-email-modal .divider {\n      width: 65%;\n      margin: 1rem auto;\n      height: 1px;\n      background-color: #d0d0d0;\n  }\n  "))
                                }(e),
                                function(e) {
                                    var t = Lt('\n    <div id="najva-email-modal" class="modal">\n      <div class="modal-content">\n        <div class="modal-header">\n          <span class="close">&times;</span>\n          <div style="clear:both"></div> \n          ' + (e.email_settings.img ? '<div><img alt="header-image" class="image" src="' + e.email_settings.img + '" ></div>' : "") + "\n          <h3>" + e.email_settings.title + "</h3>\n          " + (e.email_settings.desc ? "<div>" + e.email_settings.desc + "</div>" : "") + '\n        </div>\n        <div class="divider"></div>\n        <div class="modal-body">\n          ' + function(e) {
                                        return e.email_settings.fields.map((function(e) {
                                            return '\n        <div class="input-container ' + e.key + '">\n          <label>' + e.name + (e.validations.includes("required") ? '<span class="required">*</span>' : "") + '</label>\n          <input type="text" id="' + e.key + '" name="' + e.key + '" placeholder="لطفا ' + e.name + ' خود را وارد کنید."/>\n          <div class="error" id="' + e.key + '-error"></div>\n        </div>\n      '
                                        })).join("\n")
                                    }(e) + '\n        </div>\n        <div class="modal-footer">\n          <button id="submit-btn">' + e.email_settings.send_btn_text + "</button>\n        </div>\n      </div>\n    </div>\n    ");
                                    t && document.body.appendChild(t)
                                }(e), Mo(e),
                                function() {
                                    var e, t, n = document.getElementById(vo);
                                    n && (null === (e = document.querySelector(".close")) || void 0 === e || e.addEventListener("click", (function() {
                                        n.style.display = "none"
                                    })), n.addEventListener("click", (function() {
                                        n.style.display = "none"
                                    })), null === (t = document.querySelector(".modal-content")) || void 0 === t || t.addEventListener("click", (function(e) {
                                        return e.stopPropagation()
                                    })))
                                }(), r.label = 4;
                        case 4:
                            return [4, Eo()];
                        case 5:
                            return r.sent(), [3, 7];
                        case 6:
                            throw n = r.sent(), u(o.INIT_EMAIL_FAILED, {
                                error: n
                            });
                        case 7:
                            return [2]
                    }
                }))
            }))
        }
        var To = function(e, t, n, r) {
                return new(n || (n = Promise))((function(i, o) {
                    function a(e) {
                        try {
                            c(r.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function s(e) {
                        try {
                            c(r.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
                            e(t)
                        }))).then(a, s)
                    }
                    c((r = r.apply(e, t || [])).next())
                }))
            },
            Lo = function(e, t) {
                var n, r, i, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function s(o) {
                    return function(s) {
                        return function(o) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        i = o;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, r = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < i[1]) {
                                            a.label = i[1], i = o;
                                            break
                                        }
                                        if (i && a.label < i[2]) {
                                            a.label = i[2], a.ops.push(o);
                                            break
                                        }
                                        i[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e], r = 0
                            } finally {
                                n = i = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, s])
                    }
                }
            };

        function So(e) {
            return To(this, void 0, void 0, (function() {
                var t, n;
                return Lo(this, (function(r) {
                    switch (r.label) {
                        case 0:
                            return [4, qi(t = e.najva_settings.native_permission)];
                        case 1:
                            return r.sent() ? [4, me({
                                campaign_id: e.najva_settings.campaign_id,
                                website_id: e.najva_settings.website_id.toString(),
                                messaging_sender_id: e.messaging_sender_id
                            })] : [2];
                        case 2:
                            return r.sent(), n = null, t ? [4, Fn(e)] : [3, 4];
                        case 3:
                            n = r.sent(),
                                function(e, t) {
                                    pt = e, lt = t;
                                    try {
                                        pt.isNativeMode && (Ce().initializeApp({
                                            messagingSenderId: e.messaging_sender_id
                                        }), Ce().messaging().useServiceWorker(lt)), window.localStorage.removeItem("najva-reload-counter")
                                    } catch (e) {
                                        throw u(o.FIREBASE_INITIALIZATION_FAILED, {
                                            firebaseErrorMessage: e.message,
                                            error: e
                                        })
                                    }
                                }({
                                    messaging_sender_id: e.messaging_sender_id,
                                    isNativeMode: t
                                }, n), an({
                                    website_id: e.najva_settings.website_id,
                                    api_key: e.najva_settings.api_key,
                                    isNativeMode: t
                                }, n), Ei({
                                    show_backdrop: e.najva_settings.show_backdrop,
                                    show_backdrop_mobile: e.najva_settings.show_backdrop_mobile,
                                    backdrop_text: e.najva_settings.backdrop_text,
                                    website_policy: e.website_policy
                                }), r.label = 4;
                        case 4:
                            return [4, gn({
                                website_id: e.najva_settings.website_id.toString(),
                                campaign_id: e.najva_settings.campaign_id,
                                api_key: e.najva_settings.api_key,
                                najva_subdomain: e.najva_settings.najva_subdomain,
                                without_popup: e.najva_settings.without_popup,
                                isNativeMode: t
                            })];
                        case 5:
                            return r.sent(), Nt({
                                extra_css: e.najva_settings.extra_css
                            }), [4, Hn({
                                website_id: e.najva_settings.website_id.toString(),
                                campaign_id: e.najva_settings.campaign_id.toString(),
                                api_key: e.najva_settings.api_key
                            })];
                        case 6:
                            return r.sent(),
                                function(e) {
                                    Mn(this, void 0, void 0, (function() {
                                        var t = this;
                                        return En(this, (function(n) {
                                            switch (n.label) {
                                                case 0:
                                                    return Tn = e, [4, Ln()];
                                                case 1:
                                                    return n.sent() ? [3, 4] : [4, mn()];
                                                case 2:
                                                    return n.sent() ? [4, Sn(Tn.najva_subdomain)] : [3, 4];
                                                case 3:
                                                    n.sent(), n.label = 4;
                                                case 4:
                                                    return fn((function() {
                                                        return Mn(t, void 0, void 0, (function() {
                                                            return En(this, (function(e) {
                                                                switch (e.label) {
                                                                    case 0:
                                                                        return [4, Sn(Tn.najva_subdomain)];
                                                                    case 1:
                                                                        return e.sent(), [2]
                                                                }
                                                            }))
                                                        }))
                                                    })), [2]
                                            }
                                        }))
                                    }))
                                }({
                                    najva_subdomain: e.najva_settings.najva_subdomain
                                }), [4, Bn({
                                    location_permission: e.najva_settings.location_permission,
                                    najva_subdomain: e.najva_settings.najva_subdomain,
                                    isNativeMode: t
                                })];
                        case 7:
                            return r.sent(),
                                function(e) {
                                    $n = e
                                }({
                                    website_id: e.najva_settings.website_id
                                }), Xr({
                                    show_bell: e.najva_settings.show_bell,
                                    show_bell_in_mobile: e.najva_settings.show_bell_in_mobile,
                                    bell_direction: e.najva_settings.bell_direction,
                                    tooltip_direction: e.najva_settings.tooltip_direction,
                                    bell_color_hover: e.najva_settings.bell_color_hover,
                                    bell_color: e.najva_settings.bell_color,
                                    bell_tooltip: e.najva_settings.bell_tooltip,
                                    without_popup: e.najva_settings.without_popup,
                                    isNativeMode: t
                                }), Qi(e.custom_links ? e.custom_links : [], n),
                                function(e) {
                                    kr(this, void 0, void 0, (function() {
                                        var t;
                                        return xr(this, (function(n) {
                                            switch (n.label) {
                                                case 0:
                                                    return Dr = e, [4, zr()];
                                                case 1:
                                                    return n.sent() ? [4, Ne(l.VisitCount)] : [3, 5];
                                                case 2:
                                                    return t = n.sent(), [4, jr(Dr.request_permission, t)];
                                                case 3:
                                                    return n.sent(), [4, Cr()];
                                                case 4:
                                                    n.sent(), n.label = 5;
                                                case 5:
                                                    return [2]
                                            }
                                        }))
                                    }))
                                }({
                                    request_icon: e.najva_settings.request_icon,
                                    request_text: e.najva_settings.request_text,
                                    request_description: e.najva_settings.request_description,
                                    denied_text: e.najva_settings.denied_text,
                                    accept_text: e.najva_settings.accept_text,
                                    without_popup: e.najva_settings.without_popup,
                                    with_popup: e.najva_settings.with_popup,
                                    dismiss_cookie_days: e.najva_settings.dismiss_cookie_days,
                                    request_permission: e.najva_settings.request_permission,
                                    isNativeMode: t
                                }), [4, ro({
                                    website_id: e.najva_settings.website_id.toString()
                                })];
                        case 8:
                            return r.sent(), [2]
                    }
                }))
            }))
        }! function() {
            To(this, void 0, void 0, (function() {
                var e, t;
                return Lo(this, (function(n) {
                    switch (n.label) {
                        case 0:
                            return [4, De()];
                        case 1:
                            return No(e = n.sent()).catch(console.error),
                                function(e) {
                                    return oo(this, void 0, void 0, (function() {
                                        var t;
                                        return ao(this, (function(n) {
                                            switch (n.label) {
                                                case 0:
                                                    return n.trys.push([0, 3, , 4]), e.website_policy.tag_enabled ? [4, io("https://cdn.yektanet.com/rg_woebegone/scripts_v4/" + e.najva_settings.app_id + "/complete.js", "head")] : [3, 2];
                                                case 1:
                                                    n.sent(), n.label = 2;
                                                case 2:
                                                    return [3, 4];
                                                case 3:
                                                    return t = n.sent(), u(o.LOAD_YEKTANET_ANALYTICS_SCRIPT_FAILED, {
                                                        appId: (null == e ? void 0 : e.najva_settings.app_id) || "failed to load config --\x3e appId: -",
                                                        error: t
                                                    }), [3, 4];
                                                case 4:
                                                    return [2]
                                            }
                                        }))
                                    }))
                                }(e).catch(console.error), [4, So(e)];
                        case 2:
                            return n.sent(), t = {
                                subscribe: _n,
                                hasSubscribed: mn,
                                addAttribute: Jn,
                                getAttributes: Xn,
                                deleteAttribute: er
                            }, window.Najva = t, window.dispatchEvent(new Event("najva-execution-end")), [2]
                    }
                }))
            }))
        }()
    })()
})();