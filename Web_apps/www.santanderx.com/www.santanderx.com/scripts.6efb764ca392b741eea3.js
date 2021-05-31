! function(e, n, s) {
    function o(e, n) {
        return typeof e === n
    }
    var t = [],
        a = [],
        r = {
            _version: "3.5.0",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(e, n) {
                var s = this;
                setTimeout((function() {
                    n(s[e])
                }), 0)
            },
            addTest: function(e, n, s) {
                a.push({
                    name: e,
                    fn: n,
                    options: s
                })
            },
            addAsyncTest: function(e) {
                a.push({
                    name: null,
                    fn: e
                })
            }
        },
        i = function() {};
    i.prototype = r, (i = new i).addTest("eventlistener", "addEventListener" in e), i.addTest("localstorage", (function() {
        var e = "modernizr";
        try {
            return localStorage.setItem(e, e), localStorage.removeItem(e), !0
        } catch (n) {
            return !1
        }
    })), i.addTest("sessionstorage", (function() {
        var e = "modernizr";
        try {
            return sessionStorage.setItem(e, e), sessionStorage.removeItem(e), !0
        } catch (n) {
            return !1
        }
    }));
    var l = n.documentElement,
        c = "svg" === l.nodeName.toLowerCase();
    i.addTest("queryselector", "querySelector" in n && "querySelectorAll" in n),
        function() {
            var e, n, s, r, l, c;
            for (var f in a)
                if (a.hasOwnProperty(f)) {
                    if (e = [], (n = a[f]).name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length))
                        for (s = 0; s < n.options.aliases.length; s++) e.push(n.options.aliases[s].toLowerCase());
                    for (r = o(n.fn, "function") ? n.fn() : n.fn, l = 0; l < e.length; l++) 1 === (c = e[l].split(".")).length ? i[c[0]] = r : (!i[c[0]] || i[c[0]] instanceof Boolean || (i[c[0]] = new Boolean(i[c[0]])), i[c[0]][c[1]] = r), t.push((r ? "" : "no-") + c.join("-"))
                }
        }(),
        function(e) {
            var n = l.className,
                s = i._config.classPrefix || "";
            if (c && (n = n.baseVal), i._config.enableJSClass) {
                var o = new RegExp("(^|\\s)" + s + "no-js(\\s|$)");
                n = n.replace(o, "$1" + s + "js$2")
            }
            i._config.enableClasses && (n += " " + s + e.join(" " + s), c ? l.className.baseVal = n : l.className = n)
        }(t), delete r.addTest, delete r.addAsyncTest;
    for (var f = 0; f < i._q.length; f++) i._q[f]();
    e.Modernizr = i
}(window, document);