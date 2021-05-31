/*
 Copyright © 1995, 2021, Oracle and/or its affiliates. All rights reserved.

 For information, please see the following link:
 https://www.oracle.com/legal/copyright.html

 Oracle Infinity
 @preserve Copyright (c) 2017, 2018, 2019, Oracle and/or its affiliates. All rights reserved.
 odc.js v1.0.7
 Created: 2021-04-20T18:39:45+0000
 Copyright © 2015, 2020, Oracle and/or its affiliates. All rights reserved.  mmapi v2.2 */
(function() {
    function k(I, u) {
        var A = {
                major: 1,
                minor: 0,
                inc: 7
            },
            g = this,
            S = !1,
            T = 2E3,
            Q = location.protocol,
            ea = "sizzle",
            ca = null,
            da = !1,
            W = !1,
            Z = !1,
            fa = "//c.oracleinfinity.io/acs/account/wh3g12c3gg/js",
            p = {};
        this.getTagId = function() {
            return "oracle"
        };
        this.inHead = function() {
            return W
        };
        this.applyStyleSheet = function(a, b) {
            try {
                var c = u.getElementsByTagName("head")[0],
                    d = u.createElement("style");
                d.type = "text/css";
                d.id = b;
                d.styleSheet ? d.styleSheet.cssText = a : d.appendChild(u.createTextNode(a));
                c.appendChild(d)
            } catch (f) {
                ORA.Debug.error("applyStyleSheet:  Failed to failed to apply stylesheet",
                    "004", f)
            }
        };
        this.removeStyleSheet = function(a) {
            try {
                var b = u.getElementById(a);
                "undefined" !== typeof b && null !== b && b.parentNode.removeChild(b)
            } catch (c) {
                ORA.Debug.debug("removeStyleSheet:  Failed to remove stylesheet")
            }
        };
        this.getSelector = function() {
            if ("sizzle" === ea) {
                if ("undefined" !== typeof Sizzle && ORA.hasVal(Sizzle)) return Sizzle;
                if ("undefined" !== typeof ORA.Sizzle) return ORA.Sizzle
            } else {
                if (null !== ca) return ca;
                ORA.Debug.error("getSelector:  No Selector found", "003")
            }
            return !1
        };
        this.setCustomSelector = function(a,
            b) {
            ea = a;
            ca = b
        };
        this.hasVal = function(a) {
            return null !== a && "undefined" !== typeof a
        };
        var ia = function(a, b, c) {
                a = g.hasVal(a) && "shift" !== b && !W;
                b = g.hasVal(b);
                c = g.hasVal(c);
                return a && b && c
            },
            ja = function(a, b, c) {
                var d = "hideAndShow:  ";
                d = W ? d + "tag inHead" : d + "tag not inHead";
                d = c ? d + ", showing" : d + ", hiding";
                d = a && a.nodeName ? d + (", " + a.nodeName) : d + ", unnamed elem";
                return d + ('"  with type "' + b + ' "')
            },
            ka = function(a, b, c) {
                W ? a("body{ display: none !important}") : (b.style.display = "", c && (b.style.display = "none"), b === u.body || c || (u.body.style.display =
                    ""))
            },
            aa = function(a, b, c) {
                W ? a("body{ visibility: hidden !important}") : (b.style.visibility = "visible", c || (b.style.visibility = "hidden"), b.style.hidden = !c, b === u.body || c || (u.body.style.visibility = "visible", u.body.style.hidden = !1))
            },
            ba = function(a, b, c) {
                c ? (a = u.getElementById("ora_shiftStyle")) && a.parentNode.removeChild(a) : (a = u.getElementsByTagName("head")[0], b = u.createElement("style"), b.type = "text/css", b.id = "ora_shiftStyle", b.styleSheet ? b.styleSheet.cssText = "body{position:absolute !important; left: -1000% !important; visibility: hidden}" :
                    b.appendChild(u.createTextNode("body{position:absolute !important; left: -1000% !important;}")), a.appendChild(b))
            },
            V = function(a, b, c, d) {
                b = u.getElementById("ora_overlay");
                var f = u.getElementById("ora_overlayStyle");
                a = d;
                g.hasVal(d) && (a = "#ffffff");
                c && b ? (b.parentNode.removeChild(b), f && f.parentNode.removeChild(f)) : c || b || (W && g.Debug.error("hideAndShow: Warning! tag detected in head, overlay mode may error out or cause flickering", "007"), f || (c = u.createElement("style"), c.setAttribute("type", "text/css"), c.setAttribute("id",
                    "ora_overlayStyle"), a = "#ora_overlay{position:absolute;width:100%;height:100%;top:0px;right:0px;bottom:0px;left:0px;background-color:" + (a + ";z-index:2147483646}"), c.styleSheet ? c.styleSheet.cssText = a : c.appendChild(u.createTextNode(a)), u.getElementsByTagName("head")[0].appendChild(c)), g.hasVal(d) ? b = u.createElement("div") : (b = u.createElement("iframe"), b.frameBorder = 0), b.id = "ora_overlay", u.getElementsByTagName("body")[0].appendChild(b))
            };
        this.hideAndShow = function(a, b, c) {
            try {
                if (ia(a, b, c)) {
                    g.Debug.debug(ja(a,
                        b, c));
                    var d = function(f) {
                        c ? g.removeStyleSheet("o_style") : g.applyStyleSheet(f, "o_style")
                    };
                    switch (b) {
                        case "display":
                            ka(d, a, c);
                            break;
                        case "visibility":
                            aa(d, a, c);
                            break;
                        case "shift":
                        case "supershift":
                            ba(d, a, c);
                            break;
                        case "overlay":
                            V(d, a, c);
                            break;
                        case "none":
                            ORA.Debug.trace("LOADER: type: none");
                            break;
                        default:
                            g.Debug.debug("hideAndShow did not contain a matching type, so not hiding/showing")
                    }
                    d = {};
                    d.displayType = b;
                    d.display = c;
                    g.fireEvent(new ORA.Event(ORA.Event.HIDESHOW, ORA.Event.STATUS_SUCCESS, a, d))
                } else g.Debug.error("hideAndShow param list incomplete",
                    "006")
            } catch (f) {
                g.Debug.error("Failure in hide/show functionality.  Verify valid HTML syntax", "008", f)
            }
        };
        W = function() {
            try {
                var a = u.getElementsByTagName("script");
                return "HEAD" === a[a.length - 1].parentNode.nodeName
            } catch (b) {
                return WT.Debug.error("inHead: Failed to detect if in head, assuming inHead", "001", b), !0
            }
        }();
        var U = function() {
                da || (da = !0, ORA.fireEvent(new ORA.Event(ORA.Event.DOM_READY, ORA.Event.STATUS_SUCCESS), !0))
            },
            l = function() {
                Z || (Z = !0, ORA.fireEvent(new ORA.Event(ORA.Event.DOM_ONLOAD, ORA.Event.STATUS_SUCCESS), !0))
            },
            y = function(a) {
                for (var b = document.cookie.split(";"), c = 0; c < b.length; c++) {
                    var d = [];
                    d[0] = b[c].substring(0, b[c].indexOf("\x3d"));
                    for (d[1] = b[c].substring(b[c].indexOf("\x3d") + 1);
                        " " === d[0].charAt(0);) d[0] = d[0].substring(1, d[0].length);
                    if (d[0] === a) return d[1]
                }
                return null
            },
            z = function(a) {
                for (var b = document.getElementsByTagName("meta"), c = 0; c < b.length; c++)
                    if (b[c].name === a) return b[c].content;
                return null
            };
        this.execute = function(a) {
            Array.prototype.slice.call(arguments, 1);
            fireEventName(ORA.Event.LOADER_PRE_EXECUTE,
                a);
            fireEventName(ORA.Event.LOADER_EXECUTE, a)
        };
        this.loaderConversionTimeoutDefault = function() {
            return T
        };
        this.setLoaderConversionTimeoutDefault = function(a) {
            T = a
        };
        this.reset = function() {
            for (var a in p) p.hasOwnProperty(a) && p[a].reset();
            fireEventName(ORA.Event.LOADER_RESET, null)
        };
        this.pollForCondition = function(a, b, c) {
            var d = 200,
                f = function(h, e, v, t, m) {
                    window.setTimeout(function() {
                        d--;
                        h() ? (g.Debug.trace("pollForCondition success result\x3d" + h(), "LOADER"), g.Debug.superfine("pollForCondition success condition\x3d" +
                            h.toString(), "LOADER"), e && (e(), g.Debug.trace("pollForCondition running callback", "LOADER"), g.Debug.superfine("pollForCondition callback\x3d" + e.toString(), "LOADER"))) : 0 < d ? (g.Debug.trace("LOADER:  pollForCondition timeoutCount\x3d" + d), f(h, e, v, d)) : (g.Debug.error("pollForCondition Fail on " + h.toString(), "009"), v && (v(), g.Debug.superfine("pollForCondition callbackFailure\x3d" + v.toString(), "LOADER")))
                    }, m)
                };
            f(a, b, c, d, 5)
        };
        this.paramsMerge = function(a, b, c) {
            var d = {};
            if (ORA.hasVal(a))
                for (var f in a) a.hasOwnProperty(f) &&
                    (d[f] = a[f]);
            for (var h in b) ORA.hasVal(b[h]) && b.hasOwnProperty(h) && (ORA.hasVal(c) && ORA.hasVal(c[h]) ? d[h] = c[h] : d[h] = b[h]);
            return d
        };
        this.downloadLib = function(a, b, c, d, f, h) {
            h && (g.Debug.info("LOADER:  Start download: " + Q + h + " \x26 attach to " + a + ", async\x3d" + f), window.setTimeout(function() {
                var e = u.getElementsByTagName(a)[0],
                    v = u.createElement("script");
                v.type = "text/javascript";
                v.src = Q + h;
                v.setAttribute("async", f);
                v.setAttribute("defer", f);
                v.oraHasRun = !1;
                var t = function() {
                    !1 === this.oraHasRun ? (b(), this.oraHasRun = !0, g.Debug.info("Completed download: " + Q + h + ", callback running oraHasRun\x3d" + this.oraHasRun, "LOADER"), g.Debug.superfine("downloadLib: successCallback\x3d" + b.toString(), "LOADER")) : g.Debug.trace("downloadLib: not running successCallback, since oraHasRun\x3d" + this.oraHasRun, "LOADER")
                };
                b && (v.onload = t, v.onreadystatechange = t);
                v.onerror = function() {
                    g.Debug.error("FAILED download: " + Q + h + " \x26 attach to " + a + ", async\x3d" + f, "010");
                    c && (c(), g.Debug.superfine("failCallback: " + c.toString(), "LOADER"))
                };
                "undefined" !==
                typeof e ? e.appendChild(v) : g.Debug.info("LOADER:  Dom element: " + a + " is not found so not Downloading")
            }, d))
        };
        this.downloadLibs = function(a, b, c, d, f) {
            if ("undefined" === typeof f) g.Debug.info("LOADER:  downloadLibs srcs is empty");
            else {
                var h = {},
                    e = function(t) {
                        return function() {
                            h[t] = "complete";
                            g.Debug.trace("LOADER:  downloadLibs is complete src:" + t + " \x3d " + f[t])
                        }
                    },
                    v;
                for (v in f) f.hasOwnProperty(v) && (h[v] = "waiting", g.Debug.trace("LOADER:  downloadLibs is waiting on src:" + v + " \x3d " + f[v]), g.downloadLib(a, e(v),
                    null, c, d, f[v]));
                g.pollForCondition(function() {
                    for (var t in h)
                        if (h.hasOwnProperty(t) && "complete" !== h[t]) return !1;
                    return !0
                }, function() {
                    g.Debug.debug("LOADER:  downloadLibs completed on all downloads");
                    b()
                })
            }
        };
        this.parseQueryString = function(a) {
            var b = a;
            g.hasVal(a) && g.hasVal(a.location) && g.hasVal(a.location.search) || (b = document);
            a = function(c) {
                var d = c.split("\x26"),
                    f = {};
                null !== d && 0 === d.length && (d = c.split(";"));
                if (null === d) return f;
                c = 0;
                d && (c = d.length - 1);
                for (var h = 0; h <= c; h++) {
                    var e = d[h].split("\x3d");
                    e[0] =
                        unescape(e[0]);
                    e[1] = unescape(e[1]);
                    e[0] = e[0].replace(/\+/g, " ");
                    e[1] = e[1].replace(/\+/g, " ");
                    e[1] = e[1].replace(/<.*\?>/g, "");
                    f[e[0]] = e[1]
                }
                return f
            };
            return b.location.search ? (b = b.location.search.substring(1, b.location.search.length), a(b)) : b.location.href ? (b = b.location.href.split("?"), 2 === b.length ? a(b[1]) : null) : null
        };
        this.abortModuleHelper = function(a, b) {
            ORA.fireEvent(new ORA.Event(a + "_" + ORA.Event.LOADER_MODULE_ABORT, ORA.Event.STATUS_SUCCESS));
            ORA.setExecuteState(a, ORA.Event.LOADER_MODULE_ABORT);
            ORA.Debug.error("Aborting product: " +
                a, "011");
            ORA.Debug.error("LOADER Error", "011", b)
        };
        this.Event = function(a, b, c, d) {
            a && (a = a.toLowerCase());
            this.name = a;
            this.handler = null;
            this.state = ORA.Event.STATUS_UNKNOWN;
            b && (this.state = b);
            this.target = c;
            this.params = {};
            d && (this.params = d)
        };
        this.fireEventName = function(a, b) {
            ORA.fireEvent(new ORA.Event(a, ORA.Event.STATUS_SUCCESS, null, b), null, null, !0)
        };
        this.EventEngineClass = function() {
            var a = {},
                b = {},
                c = function(h, e, v, t) {
                    S && !t && g.Debug.error("fireEvent: Loader global abort, Aborted due to prior error", "012",
                        null, "LOADER");
                    e.handler = h;
                    e.params.eventID = (new Date).getTime();
                    t = "not set";
                    v && (t = v);
                    g.Debug.trace("fireEvent: [name: " + e.name + "], state:" + e.state + "async[" + t + "]", "LOADER");
                    g.Debug.superfine("function:" + e.handler.toString() + "]", "LOADER");
                    v ? window.setTimeout(function(m, w) {
                        return function() {
                            m(w)
                        }
                    }(h, e), 0) : e.handler(e);
                    return 1
                },
                d = function(h, e, v, t, m) {
                    for (var w = 0; w < b[h][m].length; w++)
                        if (g.hasVal(b[h][m][w]) && b[h][m][w].toString() === t.toString() && !0 !== e) {
                            v = !0;
                            break
                        }
                    v || (b[h][m].push(t), e = "addEventHandler success handler" +
                        b[h][m].length, e += " for " + h + "\nhandler\x3d" + t.toString(), g.Debug.superfine(e, "LOADER"));
                    return v
                };
            a.addEventHandler = function(h, e, v, t) {
                var m = h;
                h = 0;
                var w = !1;
                if (!m || !e && !v) return g.Debug.debug("events: Can not add event handler, missing name or listeners. ", "LOADER"), -1;
                var E = m = m.toLowerCase();
                b[E] || (b[E] = {});
                b[E].success || (b[E].success = []);
                b[E].fault || (b[E].fault = []);
                e && (w = d(m, t, !1, e, "success"));
                w || (h = 1);
                v && (w = d(m, t, !1, v, "fault"));
                w || (h += 1);
                t = m;
                if (b[t].queue && 0 !== b[t].queue.length)
                    for (m = b[t].queue.length -
                        1; 0 <= m; m--) w = b[t].queue[m], e && "success" === w.event.state ? c(e, w.event, w.async, w.override) : v && "fault" === w.event.state && c(v, w.event, w.async, w.override), b[t].queue.splice(m, 1);
                return h
            };
            var f = function(h, e, v) {
                for (var t = 0; t < b[h][v].length; t++)
                    if (g.hasVal(b[h][v][t]) && b[h][v][t].toString() === e.toString()) return b[h][v].splice(t, 1), 1;
                return 0
            };
            a.removeEventHandler = function(h, e, v) {
                if (!h) return g.Debug.trace("LOADER removeEventHandler:  events: Can not remove event handler, missing event name."), -1;
                h = h.toLowerCase();
                if (!b[h]) return 0;
                if (!e && !v) return delete b[h], 0;
                var t = 0;
                e && (t += f(h, e, "success"));
                v && (t += f(h, v, "fault"));
                return t
            };
            a.fireEvent = function(h, e, v, t) {
                if (S && !v) return g.Debug.error("fireEvent: Loader global abort, Aborted due to prior error", "012", null, "LOADER"), h.name ? g.Debug.error("fireEvent(event\x3d" + h.name + "): g_loaderAborted due to prior error", "012", null, "LOADER") : g.Debug.error("fireEvent: Aborted due to prior error, check error message for details.", "012"), -1;
                var m = h.name,
                    w = h.state;
                var E = !!b[m],
                    F = !(!E || !b[m][w]),
                    R = !(!E || !b[m].queue);
                F && 0 !== b[m][w].length || !t ? E ? F ? t = 1 : (g.Debug.trace("fireEvent: [name:" + m + ", state:" + w + "] no event handler was found", "LOADER"), t = -1) : (g.Debug.trace("fireEvent: [name: " + m + "], no registered event was found", "LOADER"), t = -1) : (g.Debug.trace("fireEvent: [name: " + m + "], no registered event was found, enqueueing", "LOADER"), E || (b[m] = {}), R || (b[m].queue = []), b[m].queue.push({
                    event: h,
                    async: e,
                    override: v
                }), t = 0);
                if (0 >= t) return t;
                t = b[m][w];
                for (F = E = 0; F < t.length; F++)
                    if (t[F]) try {
                        c(t[F],
                            h, e, v), E++
                    } catch (X) {
                        R = "Unhandled Event Exception, [name: " + m + ", state: " + w + ", function: ", R += h.handler.toString() + "]", g.Debug.error(R, "013", X)
                    }
                return E
            };
            a.getEventHandlers = function() {
                return b
            };
            a.length = function() {
                var h = 0,
                    e;
                for (e in b) b.hasOwnProperty(e) && h++;
                return h
            };
            a.addFireOnce = function(h, e, v) {
                var t = function() {
                    e();
                    a.removeEventHandler(h, t, v)
                };
                a.addEventHandler(h, t, v)
            };
            a.clearAllEventHandlers = function() {
                b = {}
            };
            return a
        };
        var r = new this.EventEngineClass;
        this.addEventHandler = r.addEventHandler;
        this.removeEventHandler =
            r.removeEventHandler;
        this.fireEvent = r.fireEvent;
        this.addFireOnce = r.addFireOnce;
        this.clearAllEventHandlers = r.clearAllEventHandlers;
        this.Event.PREINIT = "preinit";
        this.Event.INIT = "init";
        this.Event.PRELOAD = "preload";
        this.Event.LOAD = "load";
        this.Event.POSTLOAD = "postload";
        this.Event.LOADER_ABORT = "loader_abort";
        this.Event.LOADER_MODULE_ABORT = "loader_module_abort";
        this.Event.DEBUGGER_CLEAR_COOKIES = "debugger_clear_cookies";
        this.Event.DEBUGGER_DUMP_PARAMS = "debugger_dump_params";
        this.Event.DEBUG_ERROR_OUT = "debug_error_out";
        this.Event.DOM_READY = "dom_ready";
        this.Event.DOM_ONLOAD = "dom_onload";
        this.Event.TIMER_EXPIRE = "timer_expire";
        this.Event.TIMER_CLEAR = "timer_clear";
        this.Event.STATUS_SUCCESS = "success";
        this.Event.STATUS_FAULT = "fault";
        this.Event.STATUS_UNKNOWN = "unknown";
        this.Event.PAGEVIEW = "pageview";
        this.Event.CONVERSION = "conversion";
        this.Event.DEBUGGER_CHECK_MODE = "debugger_check_mode";
        this.Event.SCRIPT_LOAD_COMPLETE = "script_load_complete";
        this.Event.HIDESHOW = "hide_show";
        this.Event.SET_CLIENT_ID = "set_client_id";
        this._Debug =
            function() {
                var a = -1;
                this._shutdown = !1;
                var b = [],
                    c = this,
                    d = function(f, h, e) {
                        e && (h = e + ":  " + h);
                        if (!(a < f) && "undefined" !== typeof console && console) {
                            e = !0;
                            switch (f) {
                                case 0:
                                    console.error && (console.error(h), e = !1);
                                    break;
                                case 1:
                                    console.warn && (console.warn(h), e = !1);
                                    break;
                                case 2:
                                    console.info && (console.info(h), e = !1);
                                    break;
                                case 3:
                                case 4:
                                case 5:
                                    console.log && (console.log(h), e = !1)
                            }!0 === e && console.log && console.log(h)
                        }
                    };
                c.superfine = function(f, h) {
                    d(5, f, h)
                };
                c.trace = function(f, h) {
                    d(4, f, h)
                };
                c.debug = function(f, h) {
                    d(3, f, h)
                };
                c.info =
                    function(f, h) {
                        d(2, f, h)
                    };
                c.error = function(f, h, e, v) {
                    var t = "";
                    e && ("string" === typeof e ? t = "\n" + e : e.toString ? (t = e.toString(), e.stack && (t += ", [stack]: " + e.stack)) : t = e.message ? e.name ? e.fileName ? "\n" + e.message + " [" + e.name + "]\n (" + e.fileName + ":" + e.lineNumber + ")\n" + e.stack : "\n" + e.message + " [" + e.name + "]" : e.fileName ? "\n" + e.message + "\n (" + e.fileName + ":" + e.lineNumber + ")\n" + e.stack : "\n" + e.message : e.name ? e.fileName ? "\n [" + e.name + "]\n (" + e.fileName + ":" + e.lineNumber + ")\n" + e.stack : "\n [" + e.name + "]" : e.fileName ? "\n\n (" +
                        e.fileName + ":" + e.lineNumber + ")\n" + e.stack : "\n");
                    d(0, (h ? h + ": " : "") + f + t, v);
                    ORA.fireEvent(new ORA.Event(ORA.Event.DEBUG_ERROR_OUT, ORA.Event.STATUS_SUCCESS, e))
                };
                c.dir = function(f, h, e) {
                    h && d(2, h, e);
                    console && "function" === typeof console.dir ? console.dir(f) : c.dirStr(f)
                };
                c.dirStr = function(f, h) {
                    var e = f || {},
                        v = h || "",
                        t;
                    for (t in e) e.hasOwnProperty(t) && "function" !== typeof e[t] && c.debug("\t" + t + " : " + e[t], v)
                };
                c.setDebugLevel = function(f) {
                    a = f
                };
                c.getDebugLevel = function() {
                    return a
                };
                c.dumpParams = function() {
                    var f = c.getConfigParams(),
                        h;
                    for (h in f) f.hasOwnProperty(h) && "object" === typeof f[h] && c.dir(f[h], "Config parameters", h);
                    return f
                };
                c.getConfigParams = function() {
                    var f = {};
                    f.loader = {
                        version: A,
                        versionStr: [A.major, A.minor, A.inc].join(".")
                    };
                    return f
                };
                c.checkMode = function(f) {
                    ORA.fireEvent(new ORA.Event(ORA.Event.DEBUGGER_CHECK_MODE, ORA.Event.STATUS_SUCCESS, {
                        resetFlag: f
                    }))
                };
                c.getHistory = function() {
                    return b
                }
            };
        var G = function(a, b) {
                this._name = a;
                this._state = b;
                this._met = !1
            },
            C = function(a, b, c) {
                var d = this,
                    f = {},
                    h = [];
                this.prodId = a;
                this.plugin =
                    new b;
                this.executeState = C.WAITING;
                this.stopTime = this.startTime = this.timer = null;
                this.configName = "default";
                "undefined" !== typeof c && (this.configName = c);
                this.putDependency = function(e) {
                    f[e._name] = e
                };
                this.reset = function() {
                    d.executeState = C.WAITING;
                    f = {};
                    h = []
                };
                this.clearDependencies = function() {
                    f = {}
                };
                this.getDependency = function(e) {
                    for (var v in f)
                        if (f.hasOwnProperty(v) && f[v]._name === e) return f[v];
                    return null
                };
                this.getDependents = function() {
                    0 === h.length && (h = ORA.getDependents(d.prodId));
                    return h
                };
                this.updateDependents =
                    function() {
                        h = ORA.getDependents(d.prodId)
                    };
                this.getExecuteState = function() {
                    return this.executeState
                };
                this.hasMetDeps = function() {
                    for (var e in f)
                        if (f.hasOwnProperty(e) && "" !== e && !0 !== f[e]._met)
                            if (p[e].getExecuteState() === f[e]._state) f[e]._met = !0;
                            else return !1;
                    return !0
                };
                this.updateDependencyState = function(e, v) {
                    var t = d.getDependency(e);
                    null !== t && t._state === v && (t._met = !0)
                };
                this._startTimer = function(e) {
                    this.timer ? g.Debug.info("LOADER:  " + this.prodId + " timer already started, using current timer.") : (g.Debug.debug("LOADER:  starting timer for " +
                        d.prodId), this.timer = window.setTimeout(function() {
                        g.Debug.error("LOADER:  " + d.prodId + "module timer expired calling Abort", "015");
                        g.fireEvent(new ORA.Event(d.prodId + "_" + ORA.Event.TIMER_EXPIRE, ORA.Event.STATUS_SUCCESS));
                        g.fireEvent(new ORA.Event(d.prodId + "_" + ORA.Event.LOADER_MODULE_ABORT, ORA.Event.STATUS_SUCCESS))
                    }, e), this.startTime = new Date, g.Debug.info("LOADER:  " + this.prodId + " timer started [" + this.startTime + "]."))
                };
                this._clearTimer = function() {
                    this.stopTime = new Date;
                    this.timer && (clearTimeout(this.timer),
                        this.timer = null);
                    g.Debug.info("LOADER:  " + this.prodId + " timer cleared [" + this.stopTime + "]")
                };
                this.tryExecPostload = function() {
                    var e = d.getExecuteState() === C.READY,
                        v = d.hasMetDeps(),
                        t = void 0 !== d.plugin[ORA.Event.POSTLOAD];
                    if (v && e && t) return g.Debug.debug("setExecuteState:  " + d.prodId + " has met all dependencies \x26\x26 ready, running postload"), d.plugin[ORA.Event.POSTLOAD](), !0;
                    if (v && e) return ORA.Debug.superfine(d.prodId + ", has no postLoad section"), !0;
                    ORA.Debug.superfine(d.prodId + ", did not meet postload exec conditionals");
                    return !1
                }
            };
        C.WAITING = "waiting";
        C.DOWNLOADING = "downloading";
        C.READY = "ready";
        C.RUNNING = "running";
        C.ABORTED = "aborted";
        this.registerPlugin = function(a, b) {
            p[a.ProductName] = new C(a.ProductName, a, b);
            p[a.ProductName].executeState = C.WAITING;
            ORA.hasVal(a.prototype.abort) && ORA.addEventHandler(a.ProductName + "_" + ORA.Event.LOADER_MODULE_ABORT, a.prototype.abort);
            if (ORA.hasVal(a.prototype.oraConfigObj) && ORA.hasVal(a.prototype.oraConfigObj.s_dependencies))
                for (var c = a.prototype.oraConfigObj.s_dependencies.split(","),
                        d = 0; d < c.length; d++) {
                    var f = c[d].split(":");
                    p[a.ProductName].putDependency(new G(f[0], f[1]))
                }
            for (var h in p) p.hasOwnProperty(h) && p[h].updateDependents();
            a.prototype && a.prototype.oraConfigObj && a.prototype.oraConfigObj.s_useTrackingPipeline && !0 === a.prototype.oraConfigObj.s_useTrackingPipeline && (p[a.ProductName].useTrackingPipeline = !0, c = a.prototype.oraConfigObj, ORA.hasVal(c.s_pageTimeout) && ORA.hasVal(c.s_TrackingPipelineTimeout) ? p[a.ProductName].s_TrackingPipelineTimeout = Math.max(c.s_pageTimeout, c.s_TrackingPipelineTimeout) :
                ORA.hasVal(c.s_pageTimeout) ? p[a.ProductName].s_TrackingPipelineTimeout = c.s_pageTimeout : ORA.hasVal(c.s_TrackingPipelineTimeout) && (p[a.ProductName].s_TrackingPipelineTimeout = c.s_TrackingPipelineTimeout))
        };
        this.clearPlugins = function() {
            p = {}
        };
        this.hasMetDeps = function(a) {
            return p[a].hasMetDeps()
        };
        this.getDependents = function(a) {
            var b = [],
                c;
            for (c in p) p.hasOwnProperty(c) && null !== p[c].getDependency(a) && b.push(c);
            return b
        };
        this.updateDependencies = function(a, b) {
            if (!a || !p[a]) return null;
            if (!b) return p[a].clearDependencies(),
                null;
            var c = b.split(",");
            if (!c || 0 === c.length) return null;
            p[a].clearDependencies();
            for (var d = 0; d < c.length; d++) {
                var f = c[d].split(":");
                if (2 === f.length) p[a].putDependency(new G(f[0], f[1]));
                else break
            }
            return null
        };
        var L = function(a) {
            var b = p[a];
            if (b.tryExecPostload()) {
                b.executeState = "running";
                a = b.getDependents(a);
                for (var c in a) a.hasOwnProperty(c) && L(a[c])
            }
        };
        this.setExecuteState = function(a, b) {
            if (b === ORA.Event.LOADER_MODULE_ABORT) p[a].executeState = C.ABORTED;
            else if (g.getExecuteState(a) !== ORA.Event.LOADER_MODULE_ABORT) {
                p[a].executeState =
                    b;
                g.Debug.trace("setExecuteState:  " + a + " to " + b);
                var c = p[a].getDependents(),
                    d;
                for (d in c) c.hasOwnProperty(d) && p.hasOwnProperty(c[d]) && p[c[d]].updateDependencyState(a, b);
                L(a)
            }
        };
        this.getExecuteState = function(a) {
            return ORA.hasVal(p[a]) ? p[a].executeState === C.ABORTED ? ORA.Event.LOADER_MODULE_ABORT : p[a].executeState : null
        };
        this.isDependency = function(a) {
            for (var b in p)
                if (p.hasOwnProperty(b) && null !== p[b].getDependency(a)) return g.Debug.trace("isDependency:  " + a + " is dependency of " + b), !0;
            g.Debug.trace("isDependency:  " +
                a + " is not a dependency of any product");
            return !1
        };
        this.getTrackingPipelineProducts = function() {
            var a = [],
                b;
            for (b in p)
                if (p.hasOwnProperty(b) && p[b].useTrackingPipeline) {
                    var c = {};
                    c.name = b;
                    p[b].s_TrackingPipelineTimeout && (c.timeout = p[b].s_TrackingPipelineTimeout);
                    a.push(c)
                }
            return a
        };
        this.getContextUrl = function(a, b) {
            return fa + "/oracle/" + a + "-" + b + ".js"
        };
        this.getProduct = function(a) {
            for (var b in p)
                if (p.hasOwnProperty(b) && a === p[b].prodId) return p[b];
            return null
        };
        this.isProductEnabled = function(a) {
            a += "Module";
            return ORA[a] && ORA[a].prototype.oraConfigObj ? void 0 === ORA[a].prototype.oraConfigObj.enabled ? !0 : ORA[a].prototype.oraConfigObj.enabled : !1
        };
        this.isReady = function() {
            return da
        };
        this.isLoaded = function() {
            return Z
        };
        this.addDOMEvent = function(a, b, c) {
            try {
                return a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent ? a.attachEvent("on" + b, c) : eval("elm." + b + "\x3dfunc;"), 0
            } catch (d) {
                return -1
            }
        };
        this.removeDOMEvent = function(a, b, c) {
            try {
                return a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" +
                    b, c), 0
            } catch (d) {
                return -1
            }
        };
        this.getSafeEventName = function(a, b) {
            var c = b.substr(0, 2);
            if (a.addEventListener) {
                if ("on" === c) return b.substring(2)
            } else if (a.attachEvent && "on" !== c) return "on" + b;
            return b
        };
        var B = function() {
                "complete" !== document.readyState && "undefined" !== typeof document.readyState || U();
                document.addEventListener("DOMContentLoaded", function() {
                    document.removeEventListener("DOMContentLoaded", arguments.callee, !1);
                    U()
                }, !1);
                if (/WebKit|Opera/i.test(navigator.userAgent)) var a = setInterval(function() {
                    /loaded|complete/.test(document.readyState) &&
                        (clearInterval(a), U())
                }, 10)
            },
            M = function() {
                "complete" !== document.readyState && "loading" !== document.readyState || U();
                document.attachEvent("onreadystatechange", function() {
                    if ("complete" === document.readyState || "loading" === document.readyState) document.detachEvent("onreadystatechange", arguments.callee), U()
                })
            },
            N = function() {
                try {
                    document.addEventListener && B(), document.attachEvent && M(), window.addEventListener ? window.addEventListener("load", function() {
                        window.removeEventListener("load", arguments.callee, !1);
                        U()
                    }, !1) : window.attachEvent && window.attachEvent("onload", function() {
                        window.detachEvent("onload", arguments.callee, !1);
                        U()
                    }), Z ? l() : window.addEventListener ? window.addEventListener("load", function() {
                        window.removeEventListener("load", arguments.callee, !1);
                        l()
                    }, !1) : window.attachEvent && window.attachEvent("onload", function() {
                        window.detachEvent("onload", arguments.callee, !1);
                        l()
                    })
                } catch (a) {
                    U(), l()
                }
            };
        g.Debug = new g._Debug;
        var O = this.parseQueryString(I);
        r = function(a, b) {
            g.hasVal(O[a]) && g.hasVal(b) && b(O[a])
        };
        g.hasVal(O) &&
            (r("_ora.accountRoot", function(a) {
                fa = a
            }), r("_ora.debug", function(a) {
                g.Debug.setDebugLevel(a.length)
            }));
        var H = function(a) {
                var b = {};
                a = a.split(/[;,]/);
                for (var c in a)
                    if (a.hasOwnProperty(c)) {
                        var d = a[c].split(":");
                        b[d[0]] = d[1]
                    }
                return b
            },
            D = function() {
                var a = y("_ora.context");
                var b = y("_ora.config");
                a = a || b || null;
                b = z("_ora.context");
                var c = z("_ora.config");
                b = b || c || null;
                c = O && (O["_ora.context"] || O["_ora.config"] || null);
                for (var d = document.getElementsByTagName("SCRIPT"), f, h = /_ora\.context=([^&]*)|_ora\.config=([^&]*)/g,
                        e = 0; e < d.length && !f; e++) d[e].src && /odc\.js\?/.test(d[e].src) && (f = h.exec(d[e].src));
                if (null !== c) return H(c);
                if ("undefined" !== typeof a && null !== a) return H(a);
                if ("undefined" !== typeof b && null !== b) return H(b);
                if (f && 2 < f.length) return void 0 !== f[2] ? H(f[2]) : void 0 !== f[1] ? H(f[1]) : H(f[0])
            }();
        if ("undefined" !== typeof D) {
            g.Debug.info("LOADER:  Found one or more context(s)");
            for (var P in D) D.hasOwnProperty(P) && g.Debug.trace('LOADER:  triggers have set contextTriggerMap "' + P + '":"' + D[P] + '"')
        }
        var q = function(a) {
                return "undefined" !==
                    typeof D && "undefined" !== typeof p[a].configName && "undefined" !== typeof D[a] && D[a] === p[a].configName ? (g.Debug.trace('LOADER:  context "' + p[a].configName + '" triggered for ' + a), !0) : "undefined" === typeof D || "undefined" === typeof D[a] ? (g.Debug.trace("LOADER:  published context triggered for " + a), !0) : !1
            },
            K = function(a) {
                g.Debug.error("Loader Error: " + a, "016")
            };
        g.Debug.info("LOADER:  Version " + [A.major, A.minor, A.inc].join("."));
        this.addEventHandler(this.Event.PREINIT, function() {
            var a = "unknown";
            try {
                for (a in p) {
                    var b;
                    if (b = p.hasOwnProperty(a)) {
                        var c = a;
                        b = ORA.hasVal(p[c].plugin) && ORA.hasVal(p[c].plugin[ORA.Event.PREINIT])
                    }
                    b && q(a) && ORA.getExecuteState(a) !== ORA.Event.LOADER_MODULE_ABORT && (c = 'LOADER:  product "' + a + '" with context name "', c += p[a].configName + '" _preinit phase start', g.Debug.trace(c), p[a].plugin[ORA.Event.PREINIT](), c = 'LOADER:  product "' + a + '" with context name "', c += p[a].configName + '" _preinit phase complete', g.Debug.trace(c))
                }
            } catch (d) {
                ORA.abortModuleHelper(a, d)
            }
        }, function() {
            K("preinit fail")
        });
        this.addEventHandler(this.Event.INIT,
            function() {
                var a = "unknown";
                try {
                    for (a in p) {
                        var b;
                        if (b = p.hasOwnProperty(a)) {
                            var c = a;
                            b = ORA.hasVal(p[c].plugin) && ORA.hasVal(p[c].plugin[ORA.Event.INIT])
                        }
                        b && q(a) && ORA.getExecuteState(a) !== ORA.Event.LOADER_MODULE_ABORT && (c = 'LOADER:  product "' + a + '" with context name "', c += p[a].configName + '" _init phase start', g.Debug.trace(c), p[a].plugin[ORA.Event.INIT](), c = 'LOADER:  product "' + a + '" with context name "', c += p[a].configName + '" _init phase complete', g.Debug.trace(c))
                    }
                } catch (d) {
                    ORA.abortModuleHelper(a, d)
                }
            },
            function() {
                K("init fail")
            });
        this.addEventHandler(this.Event.PRELOAD, function() {
            var a = "unknown";
            try {
                for (a in p) {
                    var b;
                    if (b = p.hasOwnProperty(a)) {
                        var c = a;
                        b = ORA.hasVal(p[c].plugin) && ORA.hasVal(p[c].plugin[ORA.Event.PRELOAD]) && ORA.hasVal(p[c].plugin.oraConfigObj) && !0 === p[c].plugin.oraConfigObj.doLoad
                    }
                    b && q(a) && ORA.getExecuteState(a) !== ORA.Event.LOADER_MODULE_ABORT && (c = 'LOADER:  product "' + a + '" with context name "', c += p[a].configName + '" _preload phase start', g.Debug.trace(c), p[a].plugin[ORA.Event.PRELOAD](),
                        c = 'LOADER:  product "' + a + '" with context name "', c += p[a].configName + '" _preload phase complete', g.Debug.trace(c))
                }
            } catch (d) {
                ORA.abortModuleHelper(a, d)
            }
        }, function() {
            K("preload fail")
        });
        this.addEventHandler(this.Event.LOAD, function() {
            var a = "unknown";
            try {
                var b = function(f) {
                        return function() {
                            ORA.Debug.debug(f + " downloaded successfully")
                        }
                    },
                    c = function(f) {
                        f += "Module";
                        return ORA[f] && ORA[f].prototype.oraConfigObj && ORA[f].prototype.oraConfigObj.loadPriority ? ORA[f].prototype.oraConfigObj.loadPriority : 0
                    },
                    d = function(f) {
                        var h;
                        if (h = p.hasOwnProperty(f)) h = ORA.hasVal(p[f].plugin) && ORA.hasVal(p[f].plugin[ORA.Event.LOAD]) && ORA.hasVal(p[f].plugin.oraConfigObj) && !0 === p[f].plugin.oraConfigObj.doLoad;
                        h && q(f) && ORA.getExecuteState(f) !== ORA.Event.LOADER_MODULE_ABORT && (ORA.setExecuteState(f, C.DOWNLOADING), h = 'LOADER:  product "' + f + '" with context name "' + (p[f].configName + '" _load phase start'), g.Debug.trace(h), p[f].plugin[ORA.Event.LOAD](b(f)), h = 'LOADER:  product "' + f + '" with context name "' + (p[f].configName + '" _load phase complete'),
                            g.Debug.trace(h))
                    };
                for (a in p) p.hasOwnProperty(a) && c(a) && d(a);
                for (a in p) p.hasOwnProperty(a) && !c(a) && d(a)
            } catch (f) {
                ORA.abortModuleHelper(a, f)
            }
        }, function() {
            K("load fail")
        });
        this.addEventHandler(this.Event.LOADER_ABORT, function() {
            var a = "unknown";
            S = !0;
            g.Debug.error("Loader global abort event", "017");
            try {
                for (a in p) p.hasOwnProperty(a) && ORA.hasVal(p[a].plugin) && !0 === p[a].plugin.oraConfigObj.doLoad && (ORA.fireEvent(new ORA.Event(a + "_" + ORA.Event.LOADER_MODULE_ABORT, ORA.Event.STATUS_SUCCESS), !1, !0), ORA.setExecuteState(a,
                    ORA.Event.LOADER_MODULE_ABORT), ORA.clearTimer(a), ORA.Debug.error("Aborting product: " + a, "018"))
            } catch (b) {
                ORA.abortModuleHelper(a, b)
            }
        }, function() {
            K("abort fail")
        });
        var J = [];
        this.start = function() {
            var a = function() {
                    g.fireEvent(new ORA.Event(ORA.Event.PREINIT, ORA.Event.STATUS_SUCCESS));
                    g.fireEvent(new ORA.Event(ORA.Event.INIT, ORA.Event.STATUS_SUCCESS));
                    g.fireEvent(new ORA.Event(ORA.Event.PRELOAD, ORA.Event.STATUS_SUCCESS));
                    g.fireEvent(new ORA.Event(ORA.Event.LOAD, ORA.Event.STATUS_SUCCESS));
                    g.Debug.debug("LOADER:  Synchronous functionality has finished firing")
                },
                b = function() {
                    for (var c in D)
                        if (D.hasOwnProperty(c)) {
                            var d = g.getContextUrl(c, D[c]);
                            "undefined" !== typeof d && (g.Debug.debug("LOADER:  adding " + d + " to download"), J.push(d))
                        }
                };
            try {
                N(), ORA.hasVal(D) ? (g.Debug.debug("LOADER:  contextTriggerMap contains contexts"), b(), g.downloadLibs("head", a, 0, !0, J)) : a()
            } catch (c) {
                g.fireEvent(new ORA.Event(ORA.Event.LOADER_ABORT, ORA.Event.STATUS_SUCCESS))
            }
        };
        this.productReady = function(a, b, c) {
            var d = p[a];
            c = c || "_product_ready";
            if (!d || d.executeState !== C.READY && d.executeState !==
                C.RUNNING) d ? (ORA.addEventHandler(a + c, b), ORA.Debug.debug("attached lister for " + a + " " + c)) : (ORA.Debug.debug("product was not found attaching to " + a + " " + c), ORA.addEventHandler(a + c, b));
            else try {
                b()
            } catch (f) {
                ORA.Debug.debug("User supplied product ready callback failed " + f.message)
            }
        };
        this.productReady.push = function(a) {
            ORA.productReady.apply(this, a);
            ORA.Debug.debug("productReady pushing function for " + a[0], "LOADER")
        };
        g.Debug.debug("ORA object created", "LOADER");
        g.Debug.info('To dump config params use: "ORA.Debug.dumpParams()"');
        g.Debug.info('To check the mode use: "ORA.Debug.checkMode(false)" - Use true if you wish to reset the mode.')
    }
    var n = function(I) {
        var u = [];
        try {
            for (; 0 < I.length;) u = I.shift(), ORA.Debug.debug("productReady queue found when loading for " + u[0], "LOADER"), ORA.productReady.apply(this, u)
        } catch (A) {
            ORA.Debug.debug("Error processing ORA.productReady queue " + A.message, "LOADER")
        }
    };
    if ("undefined" === typeof ORA || "undefined" !== typeof ORA && !ORA.ready) {
        var x = [];
        "undefined" !== typeof ORA && ORA.productReady && (x = ORA.productReady);
        ORA = new k(window, window.document, window.navigator, window.location);
        n(x);
        ORA.ready = !0
    } else console.error("ORA global namespace already in use, Infinity not loaded/setup")
})();
(function() {
    "undefined" !== typeof ORA && !0 === ORA.ready && (!0 === ORA.isInitCompleted ? ORA.Debug.error("The tag is being loaded multiple times. Exiting second tag initialization request.") : (ORA.isInitCompleted = !0, ORA.registerPlugin = ORA.registerPlugin, ORA.abortModuleHelper = ORA.abortModuleHelper, ORA.setLoaderConversionTimeoutDefault = ORA.setLoaderConversionTimeoutDefault, ORA.loaderConversionTimeoutDefault = ORA.loaderConversionTimeoutDefault, ORA.downloadLib = ORA.downloadLib, ORA.reset = ORA.reset, ORA.productLoadInit =
        function() {
            ORA.analyticsModule = function() {};
            ORA.analyticsModule.prototype.oraConfigObj = {
                s_disableSeed: !1,
                alwaysLoad: !0,
                "ora-plugins": {
                    cg: {
                        enable: !0,
                        cgDefs: ["wt.cg_n", "wt.cg_s", "wt.cg_s2"],
                        blockCollect: !0
                    },
                    evtTrack: {
                        enable: !0,
                        trackSocial: !0,
                        standardEvents: {
                            anchor: !1,
                            onsite: !1,
                            offsite: !0,
                            rightclick: !1,
                            download: !0,
                            javascript: !1,
                            scrollTracking: !0
                        },
                        downloadtypes: "xls, doc, pdf, txt, csv, zip, docx, xlsx, rar, gzip, pptx"
                    },
                    fragment: {
                        virtualPageView: !1,
                        prefix: "anchor",
                        blockCollect: !0,
                        virtialDl: 26,
                        paramHandeling: "addPrefix",
                        addAnchorName: "name",
                        applyClickEventOnly: !1
                    },
                    bc: {
                        enable: !0,
                        poll: !1,
                        pctInc: 25,
                        beraconType: "auto",
                        seek: !0,
                        pollRate: 250,
                        beaconCurve: {
                            300: 30,
                            60: 10,
                            600: 60,
                            130: 30,
                            420: 45,
                            1800: 150
                        },
                        pause: !0,
                        load: !1,
                        cued: !1,
                        loadMeta: !1,
                        screenMode: !1,
                        beacon: !0,
                        maxBinds: 10,
                        postMessage: !1,
                        fixed: !1,
                        playerId: "div[id^\x3d'bcvid']:not([id$\x3d'_api']):not([id*\x3d'_component']):not(video)",
                        quartile: !0,
                        buffering: !1,
                        bins: 15,
                        beaconRate: 60,
                        metaTags: !0,
                        volume: !1
                    },
                    heatmap: {
                        enable: !0,
                        maxymiserEnable: !1
                    },
                    cookieCutter: {
                        readCookies: [{
                            cookie: {
                                TEST: "ora.cook_a"
                            },
                            options: {
                                persist: !0
                            }
                        }, {
                            cookie: {
                                ORA_FPC: {
                                    id: "ora.c_id",
                                    ss: "ora.c_ss",
                                    lv: "ora.c_lv"
                                }
                            },
                            options: {
                                parseOn: ":",
                                parseLv: "\x3d"
                            }
                        }, {
                            cookie: {
                                ELOQUA: {
                                    GUID: "ora.elq.vid",
                                    FPCVISITED: "ora.eloqua_flag"
                                }
                            },
                            options: {
                                parseOn: "\x26",
                                persist: !0
                            }
                        }, {
                            cookie: {
                                utag_main: {
                                    _ss: "ora.u_ss",
                                    _st: "ora.u_st",
                                    v_id: "ora.u_vid",
                                    _sn: "ora.u_sn",
                                    ses_id: "ora.u_ses_id"
                                }
                            },
                            options: {
                                parseOn: "$",
                                parseLv: ":",
                                persist: !1
                            }
                        }, {
                            cookie: {
                                WTPERSIST: {
                                    elqCid: "ora.elq.cid"
                                }
                            },
                            options: {
                                parseOn: "\x26",
                                parseLv: "\x3d"
                            }
                        }],
                        enable: !0
                    },
                    pp: {
                        enable: !0,
                        cookieDays: 365,
                        priority: 100,
                        lowerCaseValues: !0,
                        defPrefix: "DCSext",
                        params: "dcsvid infy riid rid customer_id elqCID elqCid elq_cid elq_mid product".split(" "),
                        useMostRecent: !0,
                        cookieName: "WTPERSIST"
                    },
                    plt: {
                        enable: !0,
                        waitTime: 150,
                        sampleRate: 50,
                        assetFilter: ".*js",
                        maxT: 2,
                        enablePerf: !1,
                        perfLimit: 50
                    }
                },
                timezone: 0,
                enabled: !0,
                DNTBehavior: "honorDNT",
                skip_qp_no_equals: !0,
                s_dependencies: "common:running",
                "hosted-plugins": {
                    InfinityPlugin: {
                        enable: !0,
                        src: "https://www.oracle.com/asset/web/analytics/infinity_common.js",
                        blockCollect: !1
                    },
                    infinity_click_tracking_ocom: {
                        enable: !0,
                        src: "https://www.oracle.com/asset/web/analytics/infinity_click_tracking_ocom.js",
                        blockCollect: !1
                    }
                },
                defaultCollectionServer: "dc.oracleinfinity.io",
                s_useTrackingPipeline: !0,
                libUrl: "//c.oracleinfinity.io/acs/account/wh3g12c3gg/js/oracle/analytics-production/analytics.js",
                accountGuid: "wh3g12c3gg",
                tagId: "oracle",
                secureCookie: !1,
                FPCConfig: {
                    domain: ".oracle.com",
                    sessionOnly: !1,
                    autoTLD: !1
                },
                cookieTypes: "firstpartyonly",
                destinations: [{
                    accountGuid: "wh3g12c3gg"
                }],
                s_TrackingPipelineTimeout: 4E3
            };
            typeof ORA.analyticsModule.prototype.oraConfigObj.enabled && !1 === ORA.analyticsModule.prototype.oraConfigObj.enabled ? ORA.Debug.debug("analytics  module disabled - exiting module setup") : (ORA.analyticsModule.prototype.preinit = function() {
                    try {
                        ORA.Debug.debug("PREINIT: Executing Preinit script")
                    } catch (k) {
                        ORA.abortModuleHelper("analytics", k)
                    }
                }, ORA.analyticsModule.prototype.init = function() {
                    try {
                        this.oraConfigObj.key = "value", void 0 === this.oraConfigObj.doLoad && (this.oraConfigObj.doLoad = !0), this.oraConfigObj.doLoad =
                            this.oraConfigObj.doLoad || this.oraConfigObj.alwaysLoad
                    } catch (k) {
                        ORA.abortModuleHelper("analytics", k)
                    }
                }, ORA.analyticsModule.prototype.preload = function() {
                    try {
                        var k = 0;
                        ORA.analyticsModule.prototype.oraConfigObj.s_conversionTimeout && (k = ORA.analyticsModule.prototype.oraConfigObj.s_conversionTimeout);
                        ORA.setLoaderConversionTimeoutDefault(Math.max(k, ORA.loaderConversionTimeoutDefault()));
                        ORA.Debug.debug("PRELOAD:  Executing preload script")
                    } catch (n) {
                        ORA.abortModuleHelper("analytics", n)
                    }
                }, ORA.analyticsModule.prototype.load =
                function(k) {
                    try {
                        ORA.Debug.debug("LOAD:  Executing load phase"), ORA.productReady.push(["analytics", function() {
                            var n = [{
                                paramSrc: "source",
                                paramTarget: "ora.mc_l",
                                skipFirstEmpty: !0,
                                lowerCase: !1
                            }];
                            ORA.analytics.addMutation("campaign_split", function(x) {
                                try {
                                    var I = x.payload;
                                    for (x = 0; x <= n.length; x++)
                                        if (void 0 !== I[n[x].paramSrc])
                                            for (var u = String(I[n[x].paramSrc]).split(n[x].seperator || ":"), A = 0, g; 0 < u.length;) {
                                                g = u.shift();
                                                n[x].lowerCase && (g = g.toLowerCase());
                                                if (void 0 !== g && "" !== g || 0 !== A || !0 !== n[x].skipFirstEmpty) "" ===
                                                    g && (g = "undefined"), I[n[x].paramTarget + A.toString()] = g;
                                                A++
                                            }
                                } catch (S) {
                                    ORA.Debug.debug("campaign_split mutation error:" + S.message)
                                }
                            });
                            ORA.analytics.addMutation("lowercase_gcm_uid", function(x) {
                                try {
                                    x.payload && x.payload["wt.gcm_uid"] && (x.payload["wt.gcm_uid"] = x.payload["wt.gcm_uid"].toLowerCase())
                                } catch (I) {
                                    ORA.Debug.debug("lowercase_gcm_uid mutation error:" + I.message)
                                }
                            })
                        }, "_ora_plugins_init"]), ORA.downloadLib("head", k, function() {
                                ORA.fireEvent(new ORA.Event("analytics_" + ORA.Event.LOADER_MODULE_ABORT, ORA.Event.STATUS_SUCCESS))
                            },
                            0, !0, this.oraConfigObj.libUrl)
                    } catch (n) {
                        ORA.abortModuleHelper("analytics", n)
                    }
                }, ORA.analyticsModule.prototype.postload = function() {
                    ORA.Debug.debug("POSTLOAD:  Executing postload analytics complete");
                    try {
                        ORA.Debug.info("LOADER:  ORA.analyticsModule.prototype: postload"), ORA.analytics.setup(ORA.analyticsModule.prototype.oraConfigObj)
                    } catch (k) {
                        ORA.abortModuleHelper("analytics", k)
                    }
                }, ORA.analyticsModule.prototype.abort = function() {
                    try {
                        ORA.Debug.debug("ABORT:  Executing analyticsModule abort")
                    } catch (k) {
                        ORA.abortModuleHelper("analytics",
                            k)
                    }
                });
            ORA.analyticsModule.ProductName = "analytics";
            ORA.registerPlugin(ORA.analyticsModule, "production");
            ORA.maxymiserModule = function() {};
            ORA.maxymiserModule.prototype.oraConfigObj = {
                request: {
                    api: "//service.maxymiser.net/platform/us/api/",
                    server: "//service.maxymiser.net/cg/v5us/?"
                },
                alwaysLoad: !0,
                enabled: !0,
                site: "oracle.com",
                s_dependencies: "",
                defaultCollectionServer: "dc.oracleinfinity.io",
                s_useTrackingPipeline: !1,
                hide: "body { opacity: .01 !important; pointer-events: none !important; user-select: none !important; }",
                libUrl: "//c.oracleinfinity.io/acs/account/wh3g12c3gg/js/oracle/maxymiser-development/mmapi.js",
                accountGuid: "wh3g12c3gg",
                tagId: "oracle",
                beforeInit: "function(loader){ }",
                storage: {
                    secure: !0
                }
            };
            typeof ORA.maxymiserModule.prototype.oraConfigObj.enabled && !1 === ORA.maxymiserModule.prototype.oraConfigObj.enabled ? ORA.Debug.debug("maxymiser  module disabled - exiting module setup") : (ORA.maxymiserModule.prototype.preinit = function() {
                    try {
                        ORA.Debug.debug("PREINIT: Executing Preinit script");
                        try {
                            var k = ORA.maxymiserModule.prototype.oraConfigObj;
                            ORA.maxymiserModule.prototype.oraConfigObj.maxymiser && (k = ORA.maxymiserModule.prototype.oraConfigObj.maxymiser.config);
                            for (var n in k)
                                if ("string" === typeof k[n] && -1 < k[n].indexOf("function")) {
                                    var x = k[n].substring(k[n].indexOf("(") + 1, k[n].indexOf(")")).split(","),
                                        I = k[n].replace(/^function[^\{](.*?)\{|\}$/g, "");
                                    k[n] = new Function(x, "{" + I + "}")
                                }
                        } catch (u) {
                            ORA.Debug.error("Maxymyser Module parsing functions: " + u.message, ORA.maxymiserModule.ProductName)
                        }
                    } catch (u) {
                        ORA.abortModuleHelper("maxymiser", u)
                    }
                }, ORA.maxymiserModule.prototype.init =
                function() {
                    try {
                        this.oraConfigObj.doLoad = this.oraConfigObj.doLoad || this.oraConfigObj.alwaysLoad
                    } catch (k) {
                        ORA.abortModuleHelper("maxymiser", k)
                    }
                }, ORA.maxymiserModule.prototype.preload = function() {
                    try {
                        var k = 0;
                        ORA.maxymiserModule.prototype.oraConfigObj.s_conversionTimeout && (k = ORA.maxymiserModule.prototype.oraConfigObj.s_conversionTimeout);
                        ORA.setLoaderConversionTimeoutDefault(Math.max(k, ORA.loaderConversionTimeoutDefault()));
                        ORA.Debug.debug("PRELOAD:  Executing preload script");
                        try {
                            ORA.maxymiserModule.Start(),
                                ORA.fireEvent(new ORA.Event(ORA.maxymiserModule.ProductName + "_" + ORA.Event.MAXY_INIT_START, ORA.Event.STATUS_SUCCESS))
                        } catch (n) {
                            ORA.Debug.debug("Maxymyser Module Failed to Start witn error: " + n.message, ORA.maxymiserModule.ProductName)
                        }
                    } catch (n) {
                        ORA.abortModuleHelper("maxymiser", n)
                    }
                }, ORA.maxymiserModule.prototype.load = function(k) {
                    try {
                        ORA.Debug.debug("LOAD:  Executing load phase"), ORA.setExecuteState("maxymiser", "ready"), ORA.Debug.debug("setProductReady()", "maxymiser")
                    } catch (n) {
                        ORA.abortModuleHelper("maxymiser",
                            n)
                    }
                }, ORA.maxymiserModule.prototype.postload = function() {
                    ORA.Debug.debug("POSTLOAD:  Executing postload maxymiser complete");
                    try {
                        ORA.Debug.info("LOADER:  ORA.maxymiserModule.prototype: postload")
                    } catch (k) {
                        ORA.abortModuleHelper("maxymiser", k)
                    }
                }, ORA.maxymiserModule.prototype.abort = function() {
                    try {
                        ORA.Debug.debug("ABORT:  Executing maxymiserModule abort"), ORA.fireEvent(new ORA.Event(ORA.maxymiserModule.ProductName + "_" + ORA.Event.LOADER_MODULE_ABORT, ORA.Event.STATUS_SUCCESS))
                    } catch (k) {
                        ORA.abortModuleHelper("maxymiser",
                            k)
                    }
                });
            (function(k) {
                function n(l) {
                    return "function" === typeof l
                }

                function x(l) {
                    return "[object Array]" === Object.prototype.toString.call(l)
                }

                function I(l) {
                    return "undefined" === typeof l
                }

                function u(l) {
                    return I(l) || null === l
                }

                function A(l, y) {
                    for (var z in l) Object.prototype.hasOwnProperty.call(l, z) && y(l[z], z)
                }

                function g(l) {
                    var y = {};
                    A(l, function(z, r) {
                        y[r] = z
                    });
                    return y
                }

                function S(l) {
                    l = JSON.parse('{"v":' + l + "}");
                    return "v" in l ? l.v : l
                }

                function T(l, y, z, r) {
                    try {
                        n(l) && l.apply(y, z)
                    } catch (G) {
                        n(r) && r(G)
                    }
                }

                function Q(l, y) {
                    if (!u(l) &&
                        "object" !== typeof l && u(y)) return l;
                    l = u(l) ? {} : l;
                    y = u(y) ? {} : y;
                    if ("object" !== typeof y) return y;
                    var z = {};
                    "object" === typeof l && A(l, function(r, G) {
                        z[G] = r
                    });
                    A(y, function(r, G) {
                        z[G] ? x(z[G]) && x(y[G]) ? z[G] = z[G].concat(r) : z[G] = Q(z[G], r) : z[G] = r
                    });
                    return z
                }

                function ea(l) {
                    var y = this;
                    this.enableUtility = function(z) {
                        var r = l.getParam("un", l.baseStorage.storeStrategy.persistent) || "";
                        (new RegExp("(^|,)" + z + "($|,)")).test(r) || (r = r.split(","), r.push(z), l.setParam("un", r.join(",").replace(/(^,)|(,$)/g, ""), l.baseStorage.storeStrategy.persistent));
                        return y
                    };
                    this.disableUtility = function(z) {
                        var r = l.getParam("un", l.baseStorage.storeStrategy.persistent) || "";
                        (new RegExp("(^|,)" + z + "($|,)")).test(r) && (r = r.replace(new RegExp("(^|,)" + z + "($|,)", "gi"), ",").replace(/(^,)|(,$)/g, ""), l.setParam("un", r, l.baseStorage.storeStrategy.persistent));
                        return y
                    };
                    this.enable = function() {
                        l.enable();
                        return y
                    };
                    this.disable = function() {
                        l.disable();
                        return y
                    };
                    this.settings = l.settings
                }

                function ca(l, y) {
                    function z(q, K) {
                        Object.prototype.hasOwnProperty.call(K, "un") && "string" ===
                            typeof K.un && (q = 0 === q.indexOf("http:") ? q.substring(5) : q, q = 0 === q.indexOf("//") ? "https:" + q : q);
                        return q
                    }

                    function r(q) {
                        if ("object" !== typeof q) return q;
                        if (x(q)) return q.join(";");
                        var K = [];
                        A(q, function(J, a) {
                            x(J) ? A(J, function(b) {
                                K.push(a + "\x3d" + b)
                            }) : K.push(a + "\x3d" + encodeURIComponent(J))
                        });
                        return K.join(";")
                    }

                    function G(q, K, J) {
                        J = J || {};
                        J.type = "text/javascript";
                        J.id = q;
                        J.src = K;
                        if (H) {
                            q = P.getElementsByTagName("head")[0];
                            var a = P.createElement("script");
                            A(J, function(b, c) {
                                a.setAttribute(c, b)
                            });
                            q.insertBefore(a, q.lastChild)
                        } else O(J)
                    }

                    function C(q) {
                        var K = z(l.request.server, q),
                            J = [];
                        A(q, function(a, b) {
                            J.push(encodeURIComponent(b) + "\x3d" + encodeURIComponent(r(a)))
                        });
                        return K + J.join("\x26")
                    }

                    function L(q, K, J) {
                        (function(a, b) {
                            y.mmRequestCallbacks[a] = function(c) {
                                b(c);
                                delete y.mmRequestCallbacks[a]
                            }
                        })(q, J);
                        B(K, y.mmRequestCallbacks[q])
                    }

                    function B(q, K) {
                        var J = new y.XMLHttpRequest;
                        J.withCredentials = !0;
                        J.onreadystatechange = function() {
                            if (4 === this.readyState && 200 === this.status) {
                                var a = y.JSON.parse(this.responseText);
                                K(a)
                            } else 4 === this.readyState &&
                                200 !== this.status && K(!1)
                        };
                        J.open("GET", q, !0);
                        J.send()
                    }

                    function M(q, K, J) {
                        var a = "mmrequest." + q;
                        (function(b, c) {
                            y.mmRequestCallbacks[b] = function(d) {
                                c(d);
                                (d = P.getElementById(a)) && (d.parentNode ? d.parentNode.removeChild(d) : d.removeAttribute("src"));
                                delete y.mmRequestCallbacks[b]
                            }
                        })(q, J);
                        G(a, K, {
                            onerror: 'window["mmRequestCallbacks"][' + q + "](false);"
                        })
                    }
                    var N = {},
                        O, H, D = !1,
                        P = y.document;
                    this.loadPruh = function(q, K, J) {
                        y.mmInitCallback = function(a) {
                            a(q, K, J)
                        };
                        G("MM.PRUH", l.request.api + "utils/pruh.js")
                    };
                    this.loadPackages =
                        function(q, K, J) {
                            var a = K && K.Packages || [],
                                b = a.length;
                            if (0 < b && !D) {
                                y.mmInitCallback = function(d) {
                                    d(q, K, {
                                        skipResponseProcessing: !0,
                                        skipPersistentData: !0,
                                        useLoaderStorage: !0,
                                        debug: N
                                    });
                                    b--;
                                    0 === b && (D = !0, J(), delete y.mmInitCallback)
                                };
                                for (var c = 0; c < a.length; c++) G("mmpack." + c, 0 === a[c].indexOf("//") ? a[c] : l.request.api + a[c])
                            } else J()
                        };
                    this.request = function(q, K) {
                        y.mmRequestCallbacks = y.mmRequestCallbacks || {};
                        var J = q.ri;
                        "json" !== l.request.response && (q.jsncl = "mmRequestCallbacks[" + J + "]");
                        var a = C(q);
                        "json" !== l.request.response ?
                            M(J, a, K) : L(J, a, K)
                    };
                    this.setAsync = function(q) {
                        H = q
                    };
                    this.setSyncRequestFunction = function(q) {
                        O = q
                    }
                }

                function da(l, y) {
                    function z() {
                        for (var L = y.document.cookie.split(/;\s+/g), B = {}, M = 0; M < L.length; M++) {
                            var N = L[M].split(/[;=]/);
                            1 < N.length && (B[N[0]] = N[1])
                        }
                        return B
                    }
                    var r = this,
                        G = encodeURIComponent,
                        C = decodeURIComponent;
                    r.set = function(L, B, M, N) {
                        N || (B = G(B));
                        N = y.document;
                        L = G(L) + "\x3d" + B + ";domain\x3d" + l.storage.domain + ";path\x3d/";
                        M ? (B = new y.Date, B.setTime(B.getTime() + 864E5 * M), M = ";expires\x3d" + B.toGMTString()) : M = "";
                        N.cookie = L + M + (l.storage.secure ? ";secure;sameSite\x3dnone" : "");
                        return r
                    };
                    r.remove = function(L) {
                        r.set(L, "", -1);
                        return r
                    };
                    r.removeAll = function(L) {
                        if (L) {
                            var B = z();
                            A(B, function(M, N) {
                                (new RegExp("^" + L)).test(N) && r.remove(C(N))
                            })
                        }
                    };
                    r.get = function(L, B) {
                        var M = RegExp("([.$?*|{}()[]\\/+^])", "g");
                        M = new RegExp("(?:^|; )" + G(L).replace(M, "\\$1") + "\x3d([^;]+)");
                        if (M = y.document.cookie.match(M)) {
                            var N = M[1];
                            N = B ? N : C(N)
                        }
                        return N
                    };
                    r.getAll = function(L, B) {
                        if (L) {
                            var M = z();
                            var N = {};
                            A(M, function(O, H) {
                                (new RegExp("^" + L)).test(H) &&
                                    (N[C(H)] = B ? O : C(O))
                            })
                        }
                        return N
                    };
                    return this
                }

                function W(l, y, z, r) {
                    function G() {
                        return y.storage.prefix + "." + z + "."
                    }

                    function C(H) {
                        return I(H) ? 0 : Math.min(y.storage.expiration, H)
                    }

                    function L(H) {
                        var D = G();
                        if (!H) {
                            H = D.replace(/\./g, "\\.");
                            H = l.getAll(H);
                            var P = D.length,
                                q = {};
                            A(H, function(K, J) {
                                q[J.substring(P)] = S(K)
                            });
                            return q
                        }
                        return (D = l.get(D + H)) ? S(D) : D
                    }

                    function B(H, D, P) {
                        var q = G();
                        null === D || I(D) ? l.remove(q + H) : (D = JSON.stringify({
                            v: D
                        }), D = D.substring(5, D.length - 1), l.set(q + H, D, C(P)))
                    }

                    function M(H) {
                        if (H) {
                            if ((H = N[H]) &&
                                H.value) var D = H.value
                        } else D = {}, A(N, function(P, q) {
                            D[q] = P.value
                        });
                        return D
                    }
                    z = ("mmengine" === z ? "e" : null) || z || "def";
                    var N = {},
                        O;
                    this.get = function(H) {
                        return O ? M(H) : L(H)
                    };
                    this.set = function(H, D, P) {
                        O ? null === D || I(D) ? delete N[H] : N[H] = {
                            value: D,
                            expires: C(P)
                        } : B(H, D, P);
                        return this
                    };
                    this.removeAll = function() {
                        N = {};
                        l.removeAll(G().replace(/\./g, "\\."));
                        return this
                    };
                    this.assignToMemory = function() {
                        void 0 === O && (O = !0)
                    };
                    this.assignToCookies = function() {
                        O = !1;
                        A(N, function(H, D) {
                            B(D, H.value, H.expires)
                        });
                        N = {}
                    }
                }

                function Z(l, y) {
                    var z =
                        this,
                        r, G;
                    this.hide = function(C) {
                        u(r) && l.hide && l.hide.rule && (G = C, C = y.document.getElementsByTagName("head")[0], r = y.document.createElement("style"), r.setAttribute("id", "mm_style_mm_hide"), r.setAttribute("type", "text/css"), r.textContent = l.hide.rule, C.insertBefore(r, C.lastChild), u(l.hide.timeout) || y.setTimeout(function() {
                            n(G) && G();
                            z.show()
                        }, l.hide.timeout))
                    };
                    this.show = function() {
                        G = null;
                        if (!u(r)) {
                            var C = y.document.getElementsByTagName("head")[0];
                            C.contains(r) && C.removeChild(r);
                            r = null
                        }
                    }
                }

                function fa(l, y, z,
                    r, G) {
                    function C(m) {
                        t && n(t.error) && t.error(m)
                    }

                    function L(m, w) {
                        if (x(a[m]))
                            for (var E = a[m].slice(), F = 0; F < E.length; F++) E[F].call({}, w)
                    }

                    function B(m) {
                        m = m ? H(m) : {};
                        var w = {};
                        A(m, function(E, F) {
                            "mmcore." === F.substring(0, 7) && (w[F.substring(7)] = E)
                        });
                        return w
                    }

                    function M() {
                        var m = {},
                            w = G.screen;
                        m.dmn = l.site;
                        m.ref = e.referrer.substring(0, 256);
                        m.page = v.href.substring(0, 1024);
                        m.scrw = w.width;
                        m.scrh = w.height;
                        m.cok = q.baseStorage.testStorage();
                        m.lver = "2.2";
                        m.ri = J;
                        m.lto = -(new G.Date).getTimezoneOffset();
                        w = "s";
                        "jsonp-inline" ===
                        l.request.response && (w = "f");
                        "json" === l.request.response && (w = "j");
                        m.jrt = w;
                        return m
                    }

                    function N(m, w) {
                        var E = m.ri;
                        r.request(m, function(F) {
                            function R() {
                                X || (X = !0, r.loadPackages(q, F, function() {
                                    var Y = (K[E - 1] = F) && F.PersistData || [],
                                        la = F && F.SystemData && F.SystemData[0] && F.SystemData[0].ResponseId || 0;
                                    if (la >= h) {
                                        for (var ha = Y.length - 1; 0 <= ha; ha--) q.setParam(Y[ha].Name, Y[ha].Value, d.persistent, Y[ha].Expiration);
                                        h = la
                                    }
                                    L("response", F);
                                    w(!!F);
                                    z.show();
                                    L("responseExecuted", F);
                                    r.setAsync(!0)
                                }))
                            }
                            var X = !1;
                            P() || (I(f) ? R() : f(F,
                                R))
                        })
                    }

                    function O() {
                        var m = {};
                        return {
                            get: function(w) {
                                return w ? m[w] : m
                            },
                            set: function(w, E, F) {
                                0 > parseInt(F) ? delete m[w] : m[w] = E
                            },
                            removeAll: function() {
                                m = {}
                            }
                        }
                    }

                    function H(m) {
                        m = m.split(/[?&]/);
                        for (var w = {}, E, F, R = 0; R < m.length; R++)
                            if (m[R]) {
                                E = m[R].split("\x3d");
                                try {
                                    F = decodeURIComponent(E[1] || "")
                                } catch (X) {
                                    F = E[1]
                                }
                                w[E[0]] = F
                            }
                        return w
                    }

                    function D(m, w) {
                        var E = {
                            settings: m,
                            setValidator: q.validateResponses,
                            on: function(F, R) {
                                q.on(F, function(X) {
                                    T(R, {}, [X], C)
                                })
                            },
                            disable: function() {
                                r.setAsync(!0);
                                c[d.page].set("disabled", 1)
                            },
                            enable: function() {
                                1 === c[d.page].get("disabled") && (c[d.page].set("disabled", 0), w())
                            },
                            storage: {
                                assignToCookies: y.assignToCookies,
                                assignToMemory: y.assignToMemory,
                                clear: y.clear,
                                get: q.getParam,
                                set: q.setParam,
                                storeStrategies: g(d)
                            }
                        };
                        T(m.beforeInit, {}, [E], C);
                        n(m.request.syncRequestFunction) && r.setSyncRequestFunction(m.request.syncRequestFunction);
                        1 !== c[d.page].get("disabled") && r.setAsync(!n(m.request.syncRequestFunction))
                    }

                    function P() {
                        return 1 === c[d.persistent].get("disabled") || 1 === c[d.page].get("disabled")
                    }
                    this.version = "2.2";
                    var q = this,
                        K = [],
                        J = 1,
                        a = {},
                        b = [],
                        c = [],
                        d = {
                            persistent: 0,
                            deferredRequest: 1,
                            request: 2,
                            page: 3
                        },
                        f, h = 0,
                        e = G.document,
                        v = e.location,
                        t = G.console;
                    this.baseStorage = y.createBuilder();
                    this.baseStorage.storeStrategy = d;
                    this.settings = l;
                    this.mergeParams = Q;
                    this.CGRequest = function(m, w) {
                        if (!P()) {
                            m = m || function() {};
                            w = w || {};
                            var E = q.mergeParams(M(), q.mergeParams(q.mergeParams(b[d.persistent].get(), q.mergeParams(b[d.deferredRequest].get(), q.mergeParams(b[d.page].get(), b[d.request].get()))), B(v.search)));
                            E = q.mergeParams(E,
                                w);
                            b[d.deferredRequest].removeAll();
                            b[d.request].removeAll();
                            L("request", {
                                params: E
                            });
                            N(E, m);
                            J++
                        }
                        return this
                    };
                    this.getResponses = function() {
                        return K
                    };
                    this.setParam = function(m, w, E, F) {
                        b[E].set(m, w, I(F) ? l.storage.expiration : F);
                        return this
                    };
                    this.getParam = function(m, w) {
                        return b[w].get(m)
                    };
                    this.removeParam = function(m, w) {
                        b[w].set(m, "", -1);
                        return this
                    };
                    this.on = function(m, w) {
                        a[m] && a[m].push(w);
                        return q
                    };
                    this.disable = function() {
                        c[d.persistent].set("disabled", 1, 0);
                        return this
                    };
                    this.enable = function() {
                        c[d.persistent].set("disabled",
                            null, -1);
                        return this
                    };
                    this.validateResponses = function(m) {
                        n(m) && (f = m)
                    };
                    this.calcCookieDomain = l.storage.domain || G.location.hostname.replace(/^www\./i, "");
                    (function(m) {
                        function w() {
                            (!P() || 1 < J) && q.CGRequest(void 0, {})
                        }
                        var E = B(v.search);
                        if ("1" !== E.disabled) {
                            a.request = [];
                            a.response = [];
                            a.responseExecuted = [];
                            a.hideTimeout = [];
                            c[d.persistent] = q.baseStorage("ls");
                            c[d.page] = O();
                            b[d.persistent] = q.baseStorage("p");
                            b[d.deferredRequest] = q.baseStorage("d");
                            b[d.request] = O();
                            b[d.page] = O();
                            var F = B(e.referrer).pruh;
                            E =
                                E.pruh;
                            var R = G.mmpruh,
                                X = q.getParam("pruh", 0),
                                Y = [];
                            F && Y.push(F);
                            E && Y.push(E);
                            R && Y.push(R);
                            X && Y.push(X);
                            F = Y.join(",");
                            D(m, w);
                            z.hide(function() {
                                L("hideTimeout")
                            });
                            F ? r.loadPruh(q, F, w) : w()
                        }
                    })(l);
                    return this
                }

                function p(l, y) {
                    var z = this,
                        r = y.location;
                    r = {
                        site: null,
                        storage: {
                            domain: (r.hostname.match(/^[\d.]+$|/)[0] || "." + (r.hostname.match(/[^.]+\.(\w{2,3}\.\w{2}|\w{2,})$/) || [r.hostname])[0]).replace(/^www\./i, ""),
                            expiration: 365,
                            prefix: "mmapi",
                            secure: !0
                        },
                        request: {},
                        hide: {
                            timeout: 2E3
                        }
                    };
                    r = Q(r, l);
                    A(r, function(G, C) {
                        z[C] =
                            G
                    })
                }

                function ia(l, y, z) {
                    this.getStorage = function(r) {
                        return new W(y, l, r, z)
                    }
                }

                function ja(l, y, z, r) {
                    function G() {
                        var B = r.Date.now().toString().slice(-5);
                        z.set(l.storage.prefix + ".tst", B, 10);
                        B = z.get(l.storage.prefix + ".tst", !0) === B ? 1 : 0;
                        z.remove(l.storage.prefix + ".tst");
                        return B
                    }
                    var C = [],
                        L;
                    this.createBuilder = function() {
                        var B = function(M) {
                            M = y.getStorage(M);
                            L && M.assignToMemory();
                            C.push(M);
                            return M
                        };
                        B.isSecure = l.storage.secure;
                        B.testStorage = G;
                        return B
                    };
                    this.assignToMemory = function() {
                        L = !0;
                        for (var B = 0; B < C.length; B++) C[B].assignToMemory()
                    };
                    this.assignToCookies = function() {
                        L = !1;
                        for (var B = 0; B < C.length; B++) C[B].assignToCookies()
                    };
                    this.clear = function() {
                        for (var B = 0; B < C.length; B++) C[B].removeAll()
                    }
                }

                function ka() {
                    if (!k.mmsystem) {
                        var l = new p(V.prototype.oraConfigObj, k),
                            y = new da(l, k),
                            z = new ia(l, y, k);
                        y = new ja(l, z, y, k);
                        z = new Z(l, k);
                        var r = new ca(l, k);
                        l = new fa(l, y, z, r, k);
                        k.mmsystem = new ea(l);
                        aa.common.TrackingPipeline.productIsReady(U);
                        aa.fireEvent(new ba(U + "_" + ba.MAXY_INIT_COMPLETE, ba.STATUS_SUCCESS));
                        aa.Debug.debug("setProductReady()", U)
                    }
                }
                if (!k.mmsystem) {
                    var aa =
                        k.ORA,
                        ba = aa.Event,
                        V = aa.maxymiserModule,
                        U = "maxymiser";
                    ba.MAXY_INIT_START = U + "_init_start";
                    ba.MAXY_INIT_COMPLETE = U + "_init_complete";
                    V.Settings = p;
                    V.BaseMMSystem = ea;
                    V.CookieManager = da;
                    V.CookieStorage = W;
                    V.ContentRequester = ca;
                    V.Loader = fa;
                    V.StorageFactory = ia;
                    V.StorageManager = ja;
                    V.HidingModule = Z;
                    V.Start = ka
                }
            })(window);
            ORA.maxymiserModule.ProductName = "maxymiser";
            ORA.registerPlugin(ORA.maxymiserModule, "development")
        },
        function() {
            var k = !0;
            ORA.sizzleModule = function() {};
            ORA.sizzleModule.prototype.oraConfigObj = {
                libUrl: "//c.oracleinfinity.io/acs/common/js/lib/sizzle.min.js",
                doLoad: !0,
                s_dependencies: ""
            };
            ORA.sizzleModule.setLoaded = function(n) {
                k = n
            };
            ORA.sizzleModule.getLoaded = function() {
                return k
            };
            ORA.sizzleModule.prototype.load = function(n) {
                try {
                    ORA.updateDependencies("sizzle", this.oraConfigObj.s_dependencies), "undefined" === typeof JSON && ORA.isDependency("sizzle") ? (ORA.Debug.debug("Sizzle not detected"), ORA.sizzleModule.setLoaded(!1), ORA.downloadLib("head", n, function() {
                        ORA.abortModuleHelper("sizzle", "failed to download sizzle")
                    }, 0, !0, this.oraConfigObj.libUrl)) : (ORA.sizzleModule.setLoaded(!0),
                        ORA.setExecuteState("sizzle", "ready"))
                } catch (x) {
                    ORA.abortModuleHelper("sizzle", x)
                }
            };
            ORA.sizzleModule.prototype.postload = function() {};
            ORA.sizzleModule.ProductName = "sizzle";
            ORA.registerPlugin(ORA.sizzleModule, "default")
        }(),
        function() {
            var k = !0;
            ORA.jsonModule = function() {};
            ORA.jsonModule.prototype.oraConfigObj = {
                libUrl: "//c.oracleinfinity.io/acs/common/js/lib/json2.js",
                doLoad: !0,
                s_dependencies: ""
            };
            ORA.jsonModule.setLoaded = function(n) {
                k = n
            };
            ORA.jsonModule.getLoaded = function() {
                return k
            };
            ORA.jsonModule.prototype.load =
                function(n) {
                    try {
                        ORA.updateDependencies("json", this.oraConfigObj.s_dependencies), "undefined" === typeof JSON && ORA.isDependency("json") ? (ORA.Debug.debug("JSON not detected"), ORA.jsonModule.setLoaded(!1), ORA.downloadLib("head", n, function() {
                            ORA.abortModuleHelper("json", "failed to download json");
                            ORA.abortModuleHelper("analytics", "failed to download json")
                        }, 0, !0, this.oraConfigObj.libUrl)) : (ORA.jsonModule.setLoaded(!0), ORA.setExecuteState("json", "ready"))
                    } catch (x) {
                        ORA.abortModuleHelper("analytics", x)
                    }
                };
            ORA.jsonModule.prototype.postload =
                function() {};
            ORA.jsonModule.ProductName = "json";
            ORA.registerPlugin(ORA.jsonModule, "default")
        }(),
        function() {
            ORA.Event.BLUEKAI_DATA_READY = "bluekai_data_ready";
            var k = {},
                n = function() {};
            "undefined" === typeof Array.isArray && (Array.isArray = function(g) {
                return "[object Array]" === Object.prototype.toString.call(g)
            });
            var x = function(g, S) {
                    var T = S || "",
                        Q;
                    for (Q in g) g.hasOwnProperty(Q) && (Array.isArray(g[Q]) ? k["ora." + T + "_" + Q] = g[Q].join(";") : "object" === typeof g[Q] ? x(g[Q], T + "_" + Q) : k["ora." + T + "_" + Q] = g[Q]);
                    return null
                },
                I =
                function(g) {
                    var S = [],
                        T;
                    for (T in g) g.hasOwnProperty(T) && (S.push(String(T)), S.push(encodeURIComponent(g[T])));
                    return S.join(",")
                },
                u = function(g) {
                    g && g.data && "bluekai" === g.data.source && (x(g.data, "odc"), "undefined" !== typeof ORA.setCookie ? ORA.setCookie("bluekai_uid_plugin", I(k), "; path\x3d/") : document.cookie = "bluekai_uid_plugin\x3d" + I(k) + "; path\x3d/");
                    n()
                },
                A = function() {
                    window.addEventListener ? window.addEventListener("message", u, !1) : ORA.Debug.debug("bluekai reguires addEventListener support", "LOADER-bluekai")
                };
            n = function() {
                ORA.Debug.debug("Removing postMessage lister for bluekai data", "ANA-bluekai_uid_plugin");
                window.removeEventListener ? window.removeEventListener("message", u) : window.removeEvent ? window.removeEvent("onmessage", u) : ORA.Debug.debug("Browser does not support Removing messageListeners - exiting", "ANA-bluekai_uid_plugin");
                ORA.fireEvent(new ORA.Event(ORA.Event.BLUEKAI_DATA_READY, ORA.Event.STATUS_SUCCESS))
            };
            ORA && ORA.fireEvent && ORA.Debug && setTimeout(A, 1);
            window.ORA.bkLoader = A
        }(),
        function() {
            ORA.commonModule =
                function() {};
            ORA.Event.COMMON_LOAD_COMPLETE = "common_load_complete";
            ORA.Event.COMMON_ORA_PLUGINMGR_READY = "common_ora_pluginmgr_ready";
            ORA.Event.COMMON_HOSTED_PLUGINMGR_READY = "common_hosted_pluginmgr_ready";
            ORA.Event.COMMON_TRACKING_FLUSH = "common_tracking_flush";
            ORA.Event.COMMON_COM_EXEC_REQ = "common_com_exec_req";
            ORA.Event.COMMON_BEFORE_GETID = "common_before_getid";
            ORA.Event.COMMON_GETID = "common_get_id";
            ORA.Event.COMMON_PRODUCT_READY = "common_product_ready";
            ORA.commonModule.prototype.oraConfigObj = {
                libUrl: "//c.oracleinfinity.io/acs/common/js/1.3.40/common.js",
                doLoad: !0,
                s_dependencies: "json:running"
            };
            ORA.commonModule.prototype.load = function(k) {
                try {
                    (!ORA.hasVal(ORA.common) || ORA.hasVal(ORA.common) && !ORA.hasVal(ORA.common.TrackingPipeline)) && ORA.isDependency("common") && ORA.downloadLib("head", k, function() {
                        ORA.fireEvent(new ORA.Event("common" + ORA.Event.LOADER_MODULE_ABORT, ORA.Event.STATUS_SUCCESS))
                    }, 0, !0, this.oraConfigObj.libUrl)
                } catch (n) {
                    ORA.abortModuleHelper("common", n)
                }
            };
            ORA.commonModule.prototype.postload = function() {
                ORA.common.setup()
            };
            ORA.commonModule.ProductName =
                "common";
            ORA.registerPlugin(ORA.commonModule, "default")
        }(),
        function() {
            ORA.Event.ANA_LOAD_COMPLETE = "analytics_load_complete";
            ORA.Event.ANA_ORA_PLUGINS_LOADED = "analytics_ora_plugins_loaded";
            ORA.Event.ANA_HOSTED_PLUGINS_LOADED = "analytics_hosted_plugins_loaded";
            ORA.Event.ANA_ORA_PLUGINS_INIT = "analytics_ora_plugins_init";
            ORA.Event.ANA_HOSTED_PLUGINS_INIT = "analytics_hosted_plugins_init";
            ORA.Event.ANA_DCS_SETUP = "analytics_dcs_setup";
            ORA.Event.ANA_PRODUCT_READY = "analytics_product_ready";
            ORA.Event.ANA_SETUP_COMPLETE =
                "analytics_setup_complete";
            ORA.Event.ANA_BEFORE_PAGE_ANALYSIS = "analytics_before_page_analysis";
            ORA.Event.ANA_AFTER_PAGE_ANALYSIS = "analytics_after_page_analysis";
            ORA.Event.ANA_BEFORE_GETID = "analytics_before_getid";
            ORA.Event.ANA_AFTER_GETID = "analytics_after_getid";
            ORA.Event.ANA_PV_MUTATE = "analytics_pv_mutate";
            ORA.Event.ANA_DATA_SEND = "analytics_data_send";
            ORA.Event.LOADER_CLICK = "loader_click";
            ORA.Event.LOADER_PRE_EXECUTE = "loader_pre_execute";
            ORA.Event.LOADER_EXECUTE = "loader_execute";
            ORA.Event.LOADER_RESET =
                "loader_reset";
            ORA.Event.LOADER_COLLECT = "loader_collect";
            ORA.Event.LOADER_VIEW = "loader_view";
            ORA.getContextName = function() {
                return ORA.getProduct("analytics") && ORA.getProduct("analytics").configName || ""
            };
            ORA.getConfigName = function() {
                return ORA.getProduct("analytics") && ORA.getProduct("analytics").configName || ""
            };
            var k = function(n, x) {
                ORA.fireEvent(new ORA.Event(n, ORA.Event.STATUS_SUCCESS, null, x), null, null, !0)
            };
            ORA.collect = function(n) {
                k(ORA.Event.LOADER_COLLECT, n);
                return !0
            };
            ORA.view = function(n) {
                k(ORA.Event.LOADER_VIEW,
                    n);
                return !0
            };
            ORA.click = ORA.sendEvent = function(n) {
                k(ORA.Event.LOADER_CLICK, n);
                return !0
            };
            ORA.regPlugin = function(n, x, I) {
                var u = function() {
                    ORA.Debug.debug("regPlugin - call of deferred register of " + n, "LOADER");
                    void 0 === ORA.analytics.plugins[n] ? (ORA.Debug.debug("Registering init for " + n), ORA.common.pluginMgr._regPlugin(n, x, I)) : ORA.analytics.plugins[n] && ORA.analytics.plugins[n].src ? (ORA.analytics.plugins[n].loaded = !0, ORA.common.hostedPluginMgr._regPlugin(n, x, I, "hosted-plugins")) : ORA.common.pluginMgr._regPlugin(n,
                        x, I)
                };
                ORA.common && ORA.common.pluginMgr && ORA.common.pluginMgr.isReady && !0 === ORA.common.pluginMgr.isReady() ? (ORA.Debug.debug("ORA.common.pluginMgr exists so register is possible"), u()) : (ORA.Debug.debug("regPlugin - deferred register of " + n, "LOADER"), ORA.analytics.plugins[n] && ORA.analytics.plugins[n].src ? ORA.addEventHandler(ORA.Event.COMMON_HOSTED_PLUGINMGR_READY, u, null, !0) : ORA.addEventHandler(ORA.Event.COMMON_ORA_PLUGINMGR_READY, u, null, !0))
            }
        }(),
        function() {
            ORA.responsysModule = function() {};
            ORA.responsysModule.prototype.oraConfigObj = {
                doLoad: !0,
                s_dependencies: "",
                config: {
                    cookie_name: "responsys_cookie_default",
                    fallback_cookie_domain_level: 0,
                    fallback_timeout: "2000",
                    urlSuffix: "/pub/cc",
                    responsysURL: "",
                    additionalParms: "_pb_\x3dR\x26_tt_\x3dQ"
                }
            };
            ORA.responsysModule.prototype.moveAndToResp = function(k, n) {
                for (var x in k.config) k.config.hasOwnProperty(x) && "" !== k.config[x] && (n.config[x] = k.config[x])
            };
            ORA.responsysModule.prototype.validateSettings = function(k) {
                k.config.responsysURL || (ORA.debug("missing required setting for responsysURL, disabling module",
                    "responsys"), k.enabled = !1)
            };
            ORA.responsysModule.prototype.postload = function() {
                var k = function() {
                        ORA.Debug.debug("responsysModule load pixel failed - fallback to standard cookie", ORA.responsysModule.ProductName);
                        ORA.responsysModule.prototype.cookieFallback()
                    },
                    n = function() {
                        ORA.Debug.debug("responsysModule load pixel success", ORA.responsysModule.ProductName)
                    };
                try {
                    if (this.responsysExists()) {
                        var x = this.prepareUrl() + this.removeParameterList(location.search, this.oraConfigObj.config.additionalParms);
                        x += "\x26" +
                            this.oraConfigObj.config.additionalParms + location.hash;
                        this.responsysLoadPixel(x, n, k, this.oraConfigObj.config.fallback_timeout);
                        return !0
                    }
                    ORA.setExecuteState("responsysModule", "ready")
                } catch (I) {
                    return ORA.Debug.debug("responsysModule load error " + I.message), !1
                }
            };
            ORA.responsysModule.prototype.load = function() {
                try {
                    var k = {};
                    if (ORA.analyticsModule && ORA.analyticsModule.prototype && ORA.analyticsModule.prototype.oraConfigObj && ORA.analyticsModule.prototype.oraConfigObj.responsys) {
                        var n = ORA.responsysModule.prototype.oraConfigObj;
                        k = ORA.analyticsModule.prototype.oraConfigObj.responsys;
                        k.doLoad && (n.doLoad = k.doLoad);
                        k.s_dependencies && (n.s_dependencies = k.s_dependencies);
                        ORA.responsysModule.prototype.moveAndToResp(k, n);
                        ORA.responsysModule.prototype.validateSettings(k)
                    }
                    void 0 !== k.enabled && k.enabled ? (ORA.updateDependencies("responsysModule", "analytics:downloading"), ORA.setExecuteState("responsysModule", "ready")) : ORA.debug("responsys module not enabled", "responsys")
                } catch (x) {
                    ORA.Debug.debug("responsysModule load error " + x.message)
                }
            };
            ORA.responsysModule.prototype.responsysExists = function(k) {
                k = ORA.parseQueryString(k);
                return !!(k && k._ri_ && k._ei_)
            };
            ORA.responsysModule.prototype.responsysLoadPixel = function(k, n, x, I) {
                var u = new Image,
                    A = !1;
                u.onload = function() {
                    A || (A = !0, n(), ORA.Debug.debug("Responsys pixel loaded", ORA.responsysModule.ProductName))
                };
                u.onerror = function() {
                    A || (A = !0, x(), ORA.Debug.debug("Responsys pixel load failed", ORA.responsysModule.ProductName))
                };
                window.setTimeout(function() {
                    A && 1 !== I || (A = !0, ORA.Debug.debug("Responsys pixel load failed",
                        ORA.responsysModule.ProductName), x())
                }, I);
                u.src = k
            };
            ORA.responsysModule.prototype.cookieFallback = function(k) {
                var n = ORA.parseQueryString(k),
                    x = this.oraConfigObj.config;
                k = x.cookie_name;
                n = "_ri_" + n._ri_ + "\x26_ei_" + n._ei_;
                var I = location.hostname.split(".");
                x = x.fallback_cookie_domain_level;
                var u = new Date,
                    A = "";
                for (u.setTime(u.getTime() + 63113851500); x;) I.shift(), x--;
                I.join(".") !== location.host && (A = ";domain\x3d" + I.join("."));
                I = "; path\x3d/ ; expires\x3d " + u.toGMTString() + A;
                ORA.Debug.debug("Setting fallback cookie",
                    "responsysModule");
                ORA.setCookie(k, n, I)
            };
            ORA.responsysModule.prototype.removeParameter = function(k, n) {
                var x = k.split("?");
                if (2 <= x.length) {
                    for (var I = encodeURIComponent(n) + "\x3d", u = x[1].split(/[&;]/g), A = u.length; 0 < A;) A--, -1 !== u[A].lastIndexOf(I, 0) && u.splice(A, 1);
                    return 0 < u.length ? x[0] + u.join("\x26") : x[0]
                }
                return k
            };
            ORA.responsysModule.prototype.removeParameterList = function(k, n) {
                for (var x = k, I = n.split("\x26"), u = 0; u < I.length; u++) {
                    var A = I[u].split("\x3d");
                    x = this.removeParameter(x, A[0])
                }
                return "?" + x
            };
            ORA.responsysModule.prototype.prepareUrl =
                function() {
                    var k = this.oraConfigObj.config,
                        n = k.responsysURL;
                    k.urlBase && "" !== k.urlBase && (n = k.urlBase);
                    return n + k.urlSuffix
                };
            ORA.responsysModule.ProductName = "responsysModule";
            ORA.registerPlugin(ORA.responsysModule, "default")
        }(), ORA.productLoadInit(), ORA.start()))
})();