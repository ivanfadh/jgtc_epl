/* Disable minification (remove `.min` from URL path) for more info */

(function(undefined) {
    !function(n) {
        function t(e) {
            if (r[e])
                return r[e].exports;
            var o = r[e] = {
                exports: {},
                id: e,
                loaded: !1
            };
            return n[e].call(o.exports, o, o.exports, t),
            o.loaded = !0,
            o.exports
        }
        var r = {};
        t.m = n,
        t.c = r,
        t.p = "",
        t(0)
    }({
        0: function(n, t, r) {
            (function(n) {
                var t = r(80);
                try {
                    (n || {}).Promise = t,
                    window.Promise = t
                } catch (e) {}
            }
            ).call(t, function() {
                return this
            }())
        },
        80: function(n, t) {
            (function(t) {
                !function() {
                    "use strict";
                    function r() {
                        return en[B][G] || J
                    }
                    function e(n, t) {
                        for (var r in t)
                            n[r] = t[r]
                    }
                    function o(n) {
                        return n && "object" == typeof n
                    }
                    function i(n) {
                        return "function" == typeof n
                    }
                    function u(n, t) {
                        return n instanceof t
                    }
                    function c(n) {
                        return u(n, U)
                    }
                    function f(n, t, r) {
                        if (!t(n))
                            throw v(r)
                    }
                    function s() {
                        try {
                            return C.apply(F, arguments)
                        } catch (e) {
                            return nn.e = e,
                            nn
                        }
                    }
                    function a(n, t) {
                        return C = n,
                        F = t,
                        s
                    }
                    function l(n, t) {
                        function r() {
                            for (var r = 0; r < o; )
                                t(e[r], e[r + 1]),
                                e[r++] = S,
                                e[r++] = S;
                            o = 0,
                            e.length > n && (e.length = n)
                        }
                        var e = O(n)
                          , o = 0;
                        return function(n, t) {
                            e[o++] = n,
                            e[o++] = t,
                            2 === o && en.nextTick(r)
                        }
                    }
                    function h(n, t) {
                        var r, e, o, c, f = 0;
                        if (!n)
                            throw v(V);
                        var s = n[en[B][D]];
                        if (i(s))
                            e = s.call(n);
                        else {
                            if (!i(n.next)) {
                                if (u(n, O)) {
                                    for (r = n.length; f < r; )
                                        t(n[f], f++);
                                    return f
                                }
                                throw v(V)
                            }
                            e = n
                        }
                        for (; !(o = e.next()).done; )
                            if ((c = a(t)(o.value, f++)) === nn)
                                throw i(e[K]) && e[K](),
                                c.e;
                        return f
                    }
                    function v(n) {
                        return new TypeError(n)
                    }
                    function _(n) {
                        return (n ? "" : W) + (new U).stack
                    }
                    function d(n, t) {
                        var r = "on" + n.toLowerCase()
                          , e = H[r];
                        I && I.listeners(n).length ? n === Z ? I.emit(n, t._v, t) : I.emit(n, t) : e ? e({
                            reason: t._v,
                            promise: t
                        }) : en[n](t._v, t)
                    }
                    function p(n) {
                        return n && n._s
                    }
                    function w(n) {
                        if (p(n))
                            return new n(tn);
                        var t, r, e;
                        return t = new n(function(n, o) {
                            if (t)
                                throw v();
                            r = n,
                            e = o
                        }
                        ),
                        f(r, i),
                        f(e, i),
                        t
                    }
                    function m(n, t) {
                        return function(r) {
                            A && (n[Q] = _(!0)),
                            t === q ? T(n, r) : k(n, t, r)
                        }
                    }
                    function y(n, t, r, e) {
                        return i(r) && (t._onFulfilled = r),
                        i(e) && (n[M] && d(Y, n),
                        t._onRejected = e),
                        A && (t._p = n),
                        n[n._c++] = t,
                        n._s !== z && on(n, t),
                        t
                    }
                    function j(n) {
                        if (n._umark)
                            return !0;
                        n._umark = !0;
                        for (var t, r = 0, e = n._c; r < e; )
                            if (t = n[r++],
                            t._onRejected || j(t))
                                return !0
                    }
                    function x(n, t) {
                        function r(n) {
                            return e.push(n.replace(/^\s+|\s+$/g, ""))
                        }
                        var e = [];
                        return A && (t[Q] && r(t[Q]),
                        function o(n) {
                            n && N in n && (o(n._next),
                            r(n[N] + ""),
                            o(n._p))
                        }(t)),
                        (n && n.stack ? n.stack : n) + ("\n" + e.join("\n")).replace(rn, "")
                    }
                    function g(n, t) {
                        return n(t)
                    }
                    function k(n, t, r) {
                        var e = 0
                          , o = n._c;
                        if (n._s === z)
                            for (n._s = t,
                            n._v = r,
                            t === $ && (A && c(r) && (r.longStack = x(r, n)),
                            un(n)); e < o; )
                                on(n, n[e++]);
                        return n
                    }
                    function T(n, t) {
                        if (t === n && t)
                            return k(n, $, v(X)),
                            n;
                        if (t !== P && (i(t) || o(t))) {
                            var r = a(b)(t);
                            if (r === nn)
                                return k(n, $, r.e),
                                n;
                            i(r) ? (A && p(t) && (n._next = t),
                            p(t) ? R(n, t, r) : en.nextTick(function() {
                                R(n, t, r)
                            })) : k(n, q, t)
                        } else
                            k(n, q, t);
                        return n
                    }
                    function b(n) {
                        return n.then
                    }
                    function R(n, t, r) {
                        var e = a(r, t)(function(r) {
                            t && (t = P,
                            T(n, r))
                        }, function(r) {
                            t && (t = P,
                            k(n, $, r))
                        });
                        e === nn && t && (k(n, $, e.e),
                        t = P)
                    }
                    var S, C, F, P = null, E = "object" == typeof window, H = E ? window : t, I = H.process, L = H.console, A = !1, O = Array, U = Error, $ = 1, q = 2, z = 3, B = "Symbol", D = "iterator", G = "species", J = B + "(" + G + ")", K = "return", M = "_uh", N = "_pt", Q = "_st", V = "Invalid argument", W = "\nFrom previous ", X = "Chaining cycle detected for promise", Y = "rejectionHandled", Z = "unhandledRejection", nn = {
                        e: P
                    }, tn = function() {}, rn = /^.+\/node_modules\/yaku\/.+\n?/gm, en = n.exports = function(n) {
                        var t, r = this;
                        if (!o(r) || r._s !== S)
                            throw v("Invalid this");
                        if (r._s = z,
                        A && (r[N] = _()),
                        n !== tn) {
                            if (!i(n))
                                throw v(V);
                            (t = a(n)(m(r, q), m(r, $))) === nn && k(r, $, t.e)
                        }
                    }
                    ;
                    en["default"] = en,
                    e(en.prototype, {
                        then: function(n, t) {
                            if (void 0 === this._s)
                                throw v();
                            return y(this, w(en.speciesConstructor(this, en)), n, t)
                        },
                        "catch": function(n) {
                            return this.then(S, n)
                        },
                        "finally": function(n) {
                            function t(t) {
                                return en.resolve(n()).then(function() {
                                    return t
                                })
                            }
                            return this.then(t, t)
                        },
                        _c: 0,
                        _p: P
                    }),
                    en.resolve = function(n) {
                        return p(n) ? n : T(w(this), n)
                    }
                    ,
                    en.reject = function(n) {
                        return k(w(this), $, n)
                    }
                    ,
                    en.race = function(n) {
                        var t = this
                          , r = w(t)
                          , e = function(n) {
                            k(r, q, n)
                        }
                          , o = function(n) {
                            k(r, $, n)
                        }
                          , i = a(h)(n, function(n) {
                            t.resolve(n).then(e, o)
                        });
                        return i === nn ? t.reject(i.e) : r
                    }
                    ,
                    en.all = function(n) {
                        function t(n) {
                            k(o, $, n)
                        }
                        var r, e = this, o = w(e), i = [];
                        return r = a(h)(n, function(n, u) {
                            e.resolve(n).then(function(n) {
                                i[u] = n,
                                --r || k(o, q, i)
                            }, t)
                        }),
                        r === nn ? e.reject(r.e) : (r || k(o, q, []),
                        o)
                    }
                    ,
                    en.Symbol = H[B] || {},
                    a(function() {
                        Object.defineProperty(en, r(), {
                            get: function() {
                                return this
                            }
                        })
                    })(),
                    en.speciesConstructor = function(n, t) {
                        var e = n.constructor;
                        return e ? e[r()] || t : t
                    }
                    ,
                    en.unhandledRejection = function(n, t) {
                        L && L.error("Uncaught (in promise)", A ? t.longStack : x(n, t))
                    }
                    ,
                    en.rejectionHandled = tn,
                    en.enableLongStackTrace = function() {
                        A = !0
                    }
                    ,
                    en.nextTick = E ? function(n) {
                        setTimeout(n)
                    }
                    : I.nextTick,
                    en._s = 1;
                    var on = l(999, function(n, t) {
                        var r, e;
                        return e = n._s !== $ ? t._onFulfilled : t._onRejected,
                        e === S ? void k(t, n._s, n._v) : (r = a(g)(e, n._v),
                        r === nn ? void k(t, $, r.e) : void T(t, r))
                    })
                      , un = l(9, function(n) {
                        j(n) || (n[M] = 1,
                        d(Z, n))
                    })
                }()
            }
            ).call(t, function() {
                return this
            }())
        }
    });
    !function(t) {
        "use strict";
        function e(t) {
            if ("string" != typeof t && (t = String(t)),
            /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))
                throw new TypeError("Invalid character in header field name");
            return t.toLowerCase()
        }
        function r(t) {
            return "string" != typeof t && (t = String(t)),
            t
        }
        function o(t) {
            var e = {
                next: function() {
                    var e = t.shift();
                    return {
                        done: e === undefined,
                        value: e
                    }
                }
            };
            return m.iterable && (e[Symbol.iterator] = function() {
                return e
            }
            ),
            e
        }
        function n(t) {
            this.map = {},
            t instanceof n ? t.forEach(function(t, e) {
                this.append(e, t)
            }, this) : Array.isArray(t) ? t.forEach(function(t) {
                this.append(t[0], t[1])
            }, this) : t && Object.getOwnPropertyNames(t).forEach(function(e) {
                this.append(e, t[e])
            }, this)
        }
        function i(t) {
            if (t.bodyUsed)
                return Promise.reject(new TypeError("Already read"));
            t.bodyUsed = !0
        }
        function s(t) {
            return new Promise(function(e, r) {
                t.onload = function() {
                    e(t.result)
                }
                ,
                t.onerror = function() {
                    r(t.error)
                }
            }
            )
        }
        function a(t) {
            var e = new FileReader
              , r = s(e);
            return e.readAsArrayBuffer(t),
            r
        }
        function u(t) {
            var e = new FileReader
              , r = s(e);
            return e.readAsText(t),
            r
        }
        function h(t) {
            for (var e = new Uint8Array(t), r = new Array(e.length), o = 0; o < e.length; o++)
                r[o] = String.fromCharCode(e[o]);
            return r.join("")
        }
        function f(t) {
            if (t.slice)
                return t.slice(0);
            var e = new Uint8Array(t.byteLength);
            return e.set(new Uint8Array(t)),
            e.buffer
        }
        function d() {
            return this.bodyUsed = !1,
            this._initBody = function(t) {
                if (this._bodyInit = t,
                t)
                    if ("string" == typeof t)
                        this._bodyText = t;
                    else if (m.blob && Blob.prototype.isPrototypeOf(t))
                        this._bodyBlob = t;
                    else if (m.formData && FormData.prototype.isPrototypeOf(t))
                        this._bodyFormData = t;
                    else if (m.searchParams && URLSearchParams.prototype.isPrototypeOf(t))
                        this._bodyText = t.toString();
                    else if (m.arrayBuffer && m.blob && v(t))
                        this._bodyArrayBuffer = f(t.buffer),
                        this._bodyInit = new Blob([this._bodyArrayBuffer]);
                    else {
                        if (!m.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(t) && !B(t))
                            throw new Error("unsupported BodyInit type");
                        this._bodyArrayBuffer = f(t)
                    }
                else
                    this._bodyText = "";
                this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : m.searchParams && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
            }
            ,
            m.blob && (this.blob = function() {
                var t = i(this);
                if (t)
                    return t;
                if (this._bodyBlob)
                    return Promise.resolve(this._bodyBlob);
                if (this._bodyArrayBuffer)
                    return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                if (this._bodyFormData)
                    throw new Error("could not read FormData body as blob");
                return Promise.resolve(new Blob([this._bodyText]))
            }
            ,
            this.arrayBuffer = function() {
                return this._bodyArrayBuffer ? i(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(a)
            }
            ),
            this.text = function() {
                var t = i(this);
                if (t)
                    return t;
                if (this._bodyBlob)
                    return u(this._bodyBlob);
                if (this._bodyArrayBuffer)
                    return Promise.resolve(h(this._bodyArrayBuffer));
                if (this._bodyFormData)
                    throw new Error("could not read FormData body as text");
                return Promise.resolve(this._bodyText)
            }
            ,
            m.formData && (this.formData = function() {
                return this.text().then(p)
            }
            ),
            this.json = function() {
                return this.text().then(JSON.parse)
            }
            ,
            this
        }
        function y(t) {
            var e = t.toUpperCase();
            return _.indexOf(e) > -1 ? e : t
        }
        function l(t, e) {
            e = e || {};
            var r = e.body;
            if (t instanceof l) {
                if (t.bodyUsed)
                    throw new TypeError("Already read");
                this.url = t.url,
                this.credentials = t.credentials,
                e.headers || (this.headers = new n(t.headers)),
                this.method = t.method,
                this.mode = t.mode,
                r || null == t._bodyInit || (r = t._bodyInit,
                t.bodyUsed = !0)
            } else
                this.url = String(t);
            if (this.credentials = e.credentials || this.credentials || "omit",
            !e.headers && this.headers || (this.headers = new n(e.headers)),
            this.method = y(e.method || this.method || "GET"),
            this.mode = e.mode || this.mode || null,
            this.referrer = null,
            ("GET" === this.method || "HEAD" === this.method) && r)
                throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(r)
        }
        function p(t) {
            var e = new FormData;
            return t.trim().split("&").forEach(function(t) {
                if (t) {
                    var r = t.split("=")
                      , o = r.shift().replace(/\+/g, " ")
                      , n = r.join("=").replace(/\+/g, " ");
                    e.append(decodeURIComponent(o), decodeURIComponent(n))
                }
            }),
            e
        }
        function c(t) {
            var e = new n;
            return t.split(/\r?\n/).forEach(function(t) {
                var r = t.split(":")
                  , o = r.shift().trim();
                if (o) {
                    var n = r.join(":").trim();
                    e.append(o, n)
                }
            }),
            e
        }
        function b(t, e) {
            e || (e = {}),
            this.type = "default",
            this.status = "status"in e ? e.status : 200,
            this.ok = this.status >= 200 && this.status < 300,
            this.statusText = "statusText"in e ? e.statusText : "OK",
            this.headers = new n(e.headers),
            this.url = e.url || "",
            this._initBody(t)
        }
        var m = {
            searchParams: "URLSearchParams"in t,
            iterable: "Symbol"in t && "iterator"in Symbol,
            blob: "FileReader"in t && "Blob"in t && function() {
                try {
                    return new Blob,
                    !0
                } catch (t) {
                    return !1
                }
            }(),
            formData: "FormData"in t,
            arrayBuffer: "ArrayBuffer"in t
        };
        if (m.arrayBuffer)
            var w = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"]
              , v = function(t) {
                return t && DataView.prototype.isPrototypeOf(t)
            }
              , B = ArrayBuffer.isView || function(t) {
                return t && w.indexOf(Object.prototype.toString.call(t)) > -1
            }
            ;
        n.prototype.append = function(t, o) {
            t = e(t),
            o = r(o);
            var n = this.map[t];
            this.map[t] = n ? n + "," + o : o
        }
        ,
        n.prototype["delete"] = function(t) {
            delete this.map[e(t)]
        }
        ,
        n.prototype.get = function(t) {
            return t = e(t),
            this.has(t) ? this.map[t] : null
        }
        ,
        n.prototype.has = function(t) {
            return this.map.hasOwnProperty(e(t))
        }
        ,
        n.prototype.set = function(t, o) {
            this.map[e(t)] = r(o)
        }
        ,
        n.prototype.forEach = function(t, e) {
            for (var r in this.map)
                this.map.hasOwnProperty(r) && t.call(e, this.map[r], r, this)
        }
        ,
        n.prototype.keys = function() {
            var t = [];
            return this.forEach(function(e, r) {
                t.push(r)
            }),
            o(t)
        }
        ,
        n.prototype.values = function() {
            var t = [];
            return this.forEach(function(e) {
                t.push(e)
            }),
            o(t)
        }
        ,
        n.prototype.entries = function() {
            var t = [];
            return this.forEach(function(e, r) {
                t.push([r, e])
            }),
            o(t)
        }
        ,
        m.iterable && (n.prototype[Symbol.iterator] = n.prototype.entries);
        var _ = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
        l.prototype.clone = function() {
            return new l(this,{
                body: this._bodyInit
            })
        }
        ,
        d.call(l.prototype),
        d.call(b.prototype),
        b.prototype.clone = function() {
            return new b(this._bodyInit,{
                status: this.status,
                statusText: this.statusText,
                headers: new n(this.headers),
                url: this.url
            })
        }
        ,
        b.error = function() {
            var t = new b(null,{
                status: 0,
                statusText: ""
            });
            return t.type = "error",
            t
        }
        ;
        var A = [301, 302, 303, 307, 308];
        b.redirect = function(t, e) {
            if (-1 === A.indexOf(e))
                throw new RangeError("Invalid status code");
            return new b(null,{
                status: e,
                headers: {
                    location: t
                }
            })
        }
        ,
        t.Headers = n,
        t.Request = l,
        t.Response = b,
        t.fetch = function(t, e) {
            return new Promise(function(r, o) {
                var n = new l(t,e)
                  , i = new XMLHttpRequest;
                i.onload = function() {
                    var t = {
                        status: i.status,
                        statusText: i.statusText,
                        headers: c(i.getAllResponseHeaders() || "")
                    };
                    t.url = "responseURL"in i ? i.responseURL : t.headers.get("X-Request-URL");
                    var e = "response"in i ? i.response : i.responseText;
                    r(new b(e,t))
                }
                ,
                i.onerror = function() {
                    o(new TypeError("Network request failed"))
                }
                ,
                i.ontimeout = function() {
                    o(new TypeError("Network request failed"))
                }
                ,
                i.open(n.method, n.url, !0),
                "include" === n.credentials && (i.withCredentials = !0),
                "responseType"in i && m.blob && (i.responseType = "blob"),
                n.headers.forEach(function(t, e) {
                    i.setRequestHeader(e, t)
                }),
                i.send("undefined" == typeof n._bodyInit ? null : n._bodyInit)
            }
            )
        }
        ,
        t.fetch.polyfill = !0
    }("undefined" != typeof self ? self : this);
    Object.keys = function() {
        "use strict";
        function t(t) {
            var e = r.call(t)
              , n = "[object Arguments]" === e;
            return n || (n = "[object Array]" !== e && null !== t && "object" == typeof t && "number" == typeof t.length && t.length >= 0 && "[object Function]" === r.call(t.callee)),
            n
        }
        var e = Object.prototype.hasOwnProperty
          , r = Object.prototype.toString
          , n = Object.prototype.propertyIsEnumerable
          , o = !n.call({
            toString: null
        }, "toString")
          , l = n.call(function() {}, "prototype")
          , c = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"]
          , i = function(t) {
            var e = t.constructor;
            return e && e.prototype === t
        }
          , u = {
            $console: !0,
            $external: !0,
            $frame: !0,
            $frameElement: !0,
            $frames: !0,
            $innerHeight: !0,
            $innerWidth: !0,
            $outerHeight: !0,
            $outerWidth: !0,
            $pageXOffset: !0,
            $pageYOffset: !0,
            $parent: !0,
            $scrollLeft: !0,
            $scrollTop: !0,
            $scrollX: !0,
            $scrollY: !0,
            $self: !0,
            $webkitIndexedDB: !0,
            $webkitStorageInfo: !0,
            $window: !0
        }
          , a = function() {
            if ("undefined" == typeof window)
                return !1;
            for (var t in window)
                try {
                    if (!u["$" + t] && e.call(window, t) && null !== window[t] && "object" == typeof window[t])
                        try {
                            i(window[t])
                        } catch (r) {
                            return !0
                        }
                } catch (r) {
                    return !0
                }
            return !1
        }()
          , f = function(t) {
            if ("undefined" == typeof window || !a)
                return i(t);
            try {
                return i(t)
            } catch (e) {
                return !1
            }
        };
        return function(n) {
            var i = "[object Function]" === r.call(n)
              , u = t(n)
              , a = "[object String]" === r.call(n)
              , p = [];
            if (n === undefined || null === n)
                throw new TypeError("Cannot convert undefined or null to object");
            var s = l && i;
            if (a && n.length > 0 && !e.call(n, 0))
                for (var g = 0; g < n.length; ++g)
                    p.push(String(g));
            if (u && n.length > 0)
                for (var w = 0; w < n.length; ++w)
                    p.push(String(w));
            else
                for (var y in n)
                    s && "prototype" === y || !e.call(n, y) || p.push(String(y));
            if (o)
                for (var h = f(n), $ = 0; $ < c.length; ++$)
                    h && "constructor" === c[$] || !e.call(n, c[$]) || p.push(c[$]);
            return p
        }
    }();
    !function() {
        function e(e) {
            if (null === e || e === undefined)
                throw new TypeError("Cannot call method on " + e);
            return Object(e)
        }
        Object.defineProperty(Object, "assign", {
            enumerable: !1,
            configurable: !0,
            writable: !0,
            value: function(n, r) {
                var t = e(n);
                if (1 === arguments.length)
                    return t;
                var l, o, a, i, u = Array.prototype.slice.call(arguments, 1);
                for (l = 0; l < u.length; l++) {
                    var c = u[l];
                    for (c === undefined || null === c ? a = [] : (i = e(c),
                    a = Object.keys(i)),
                    o = 0; o < a.length; o++) {
                        var f = a[o]
                          , b = Object.getOwnPropertyDescriptor(i, f);
                        if (b !== undefined && b.enumerable) {
                            var d = i[f];
                            t[f] = d
                        }
                    }
                }
                return t
            }
        })
    }();
    !function(e, n, t) {
        var r, o = 0, u = "" + Math.random(), a = "__symbol:", c = a.length, l = "__symbol@@" + u, i = "defineProperty", f = "defineProperties", v = "getOwnPropertyNames", s = "getOwnPropertyDescriptor", b = "propertyIsEnumerable", y = e.prototype, h = y.hasOwnProperty, m = y[b], p = y.toString, w = Array.prototype.concat, g = "object" == typeof window ? e.getOwnPropertyNames(window) : [], d = e[v], P = function(e) {
            if ("[object Window]" === p.call(e))
                try {
                    return d(e)
                } catch (n) {
                    return w.call([], g)
                }
            return d(e)
        }, S = e[s], O = e.create, j = e.keys, E = e.freeze || e, _ = e[i], k = e[f], N = S(e, v), T = function(e, n, t) {
            if (!h.call(e, l))
                try {
                    _(e, l, {
                        enumerable: !1,
                        configurable: !1,
                        writable: !1,
                        value: {}
                    })
                } catch (r) {
                    e[l] = {}
                }
            e[l]["@@" + n] = t
        }, z = function(e, n) {
            var t = O(e);
            return P(n).forEach(function(e) {
                M.call(n, e) && G(t, e, n[e])
            }),
            t
        }, A = function(e) {
            var n = O(e);
            return n.enumerable = !1,
            n
        }, D = function() {}, F = function(e) {
            return e != l && !h.call(x, e)
        }, I = function(e) {
            return e != l && h.call(x, e)
        }, M = function(e) {
            var n = "" + e;
            return I(n) ? h.call(this, n) && this[l]["@@" + n] : m.call(this, e)
        }, W = function(n) {
            var t = {
                enumerable: !1,
                configurable: !0,
                get: D,
                set: function(e) {
                    r(this, n, {
                        enumerable: !1,
                        configurable: !0,
                        writable: !0,
                        value: e
                    }),
                    T(this, n, !0)
                }
            };
            try {
                _(y, n, t)
            } catch (o) {
                y[n] = t.value
            }
            return E(x[n] = _(e(n), "constructor", B))
        }, q = function K(e) {
            if (this instanceof K)
                throw new TypeError("Symbol is not a constructor");
            return W(a.concat(e || "", u, ++o))
        }, x = O(null), B = {
            value: q
        }, C = function(e) {
            return x[e]
        }, G = function(e, n, t) {
            var o = "" + n;
            return I(o) ? (r(e, o, t.enumerable ? A(t) : t),
            T(e, o, !!t.enumerable)) : _(e, n, t),
            e
        }, H = function(e) {
            return function(n) {
                return h.call(e, l) && h.call(e[l], "@@" + n)
            }
        }, J = function(e) {
            return P(e).filter(e === y ? H(e) : I).map(C)
        };
        N.value = G,
        _(e, i, N),
        N.value = J,
        _(e, "getOwnPropertySymbols", N),
        N.value = function(e) {
            return P(e).filter(F)
        }
        ,
        _(e, v, N),
        N.value = function(e, n) {
            var t = J(n);
            return t.length ? j(n).concat(t).forEach(function(t) {
                M.call(n, t) && G(e, t, n[t])
            }) : k(e, n),
            e
        }
        ,
        _(e, f, N),
        N.value = M,
        _(y, b, N),
        N.value = q,
        _(t, "Symbol", N),
        N.value = function(e) {
            var n = a.concat(a, e, u);
            return n in y ? x[n] : W(n)
        }
        ,
        _(q, "for", N),
        N.value = function(e) {
            if (F(e))
                throw new TypeError(e + " is not a symbol");
            return h.call(x, e) ? e.slice(2 * c, -u.length) : void 0
        }
        ,
        _(q, "keyFor", N),
        N.value = function(e, n) {
            var t = S(e, n);
            return t && I(n) && (t.enumerable = M.call(e, n)),
            t
        }
        ,
        _(e, s, N),
        N.value = function(e, n) {
            return 1 === arguments.length || void 0 === n ? O(e) : z(e, n)
        }
        ,
        _(e, "create", N),
        N.value = function() {
            var e = p.call(this);
            return "[object String]" === e && I(this) ? "[object Symbol]" : e
        }
        ,
        _(y, "toString", N),
        r = function(e, n, t) {
            var r = S(y, n);
            delete y[n],
            _(e, n, t),
            e !== y && _(y, n, r)
        }
    }(Object, 0, this);
    Object.defineProperty(Symbol, "iterator", {
        value: Symbol("iterator")
    });
    Object.defineProperty(Symbol, "toStringTag", {
        value: Symbol("toStringTag")
    });
    var Iterator = function() {
        var e = function() {
            return this.length = 0,
            this
        }
          , t = function(e) {
            if ("function" != typeof e)
                throw new TypeError(e + " is not a function");
            return e
        }
          , _ = function(e, n) {
            if (!(this instanceof _))
                return new _(e,n);
            Object.defineProperties(this, {
                __list__: {
                    writable: !0,
                    value: e
                },
                __context__: {
                    writable: !0,
                    value: n
                },
                __nextIndex__: {
                    writable: !0,
                    value: 0
                }
            }),
            n && (t(n.on),
            n.on("_add", this._onAdd.bind(this)),
            n.on("_delete", this._onDelete.bind(this)),
            n.on("_clear", this._onClear.bind(this)))
        };
        return Object.defineProperties(_.prototype, Object.assign({
            constructor: {
                value: _,
                configurable: !0,
                enumerable: !1,
                writable: !0
            },
            _next: {
                value: function() {
                    var e;
                    if (this.__list__)
                        return this.__redo__ && (e = this.__redo__.shift()) !== undefined ? e : this.__nextIndex__ < this.__list__.length ? this.__nextIndex__++ : void this._unBind()
                },
                configurable: !0,
                enumerable: !1,
                writable: !0
            },
            next: {
                value: function() {
                    return this._createResult(this._next())
                },
                configurable: !0,
                enumerable: !1,
                writable: !0
            },
            _createResult: {
                value: function(e) {
                    return e === undefined ? {
                        done: !0,
                        value: undefined
                    } : {
                        done: !1,
                        value: this._resolve(e)
                    }
                },
                configurable: !0,
                enumerable: !1,
                writable: !0
            },
            _resolve: {
                value: function(e) {
                    return this.__list__[e]
                },
                configurable: !0,
                enumerable: !1,
                writable: !0
            },
            _unBind: {
                value: function() {
                    this.__list__ = null,
                    delete this.__redo__,
                    this.__context__ && (this.__context__.off("_add", this._onAdd.bind(this)),
                    this.__context__.off("_delete", this._onDelete.bind(this)),
                    this.__context__.off("_clear", this._onClear.bind(this)),
                    this.__context__ = null)
                },
                configurable: !0,
                enumerable: !1,
                writable: !0
            },
            toString: {
                value: function() {
                    return "[object Iterator]"
                },
                configurable: !0,
                enumerable: !1,
                writable: !0
            }
        }, {
            _onAdd: {
                value: function(e) {
                    if (!(e >= this.__nextIndex__)) {
                        if (++this.__nextIndex__,
                        !this.__redo__)
                            return void Object.defineProperty(this, "__redo__", {
                                value: [e],
                                configurable: !0,
                                enumerable: !1,
                                writable: !1
                            });
                        this.__redo__.forEach(function(t, _) {
                            t >= e && (this.__redo__[_] = ++t)
                        }, this),
                        this.__redo__.push(e)
                    }
                },
                configurable: !0,
                enumerable: !1,
                writable: !0
            },
            _onDelete: {
                value: function(e) {
                    var t;
                    e >= this.__nextIndex__ || (--this.__nextIndex__,
                    this.__redo__ && (t = this.__redo__.indexOf(e),
                    -1 !== t && this.__redo__.splice(t, 1),
                    this.__redo__.forEach(function(t, _) {
                        t > e && (this.__redo__[_] = --t)
                    }, this)))
                },
                configurable: !0,
                enumerable: !1,
                writable: !0
            },
            _onClear: {
                value: function() {
                    this.__redo__ && e.call(this.__redo__),
                    this.__nextIndex__ = 0
                },
                configurable: !0,
                enumerable: !1,
                writable: !0
            }
        })),
        Object.defineProperty(_.prototype, Symbol.iterator, {
            value: function() {
                return this
            },
            configurable: !0,
            enumerable: !1,
            writable: !0
        }),
        Object.defineProperty(_.prototype, Symbol.toStringTag, {
            value: "Iterator",
            configurable: !1,
            enumerable: !1,
            writable: !0
        }),
        _
    }();
    !function() {
        if (!Object.setPrototypeOf) {
            var t, e, o = Object.getOwnPropertyNames, r = Object.getOwnPropertyDescriptor, n = Object.create, c = Object.defineProperty, _ = Object.getPrototypeOf, f = Object.prototype, O = function(t, e) {
                return o(e).forEach(function(o) {
                    c(t, o, r(e, o))
                }),
                t
            }, p = function(t, e) {
                return O(n(e), t)
            };
            try {
                t = r(f, "__proto__").set,
                t.call({}, null),
                e = function(e, o) {
                    return t.call(e, o),
                    e
                }
            } catch (u) {
                t = {
                    __proto__: null
                },
                t instanceof Object ? e = p : (t.__proto__ = f,
                e = t instanceof Object ? function(t, e) {
                    return t.__proto__ = e,
                    t
                }
                : function(t, e) {
                    return _(t) ? (t.__proto__ = e,
                    t) : p(t, e)
                }
                )
            }
            Object.setPrototypeOf = e
        }
    }();
    String.prototype.includes = function(t, e) {
        if ("object" == typeof t && t instanceof RegExp)
            throw new TypeError("First argument to String.prototype.includes must not be a regular expression");
        return -1 !== this.indexOf(t, e)
    }
    ;
    String.prototype.contains = String.prototype.includes;
    var ArrayIterator = function() {
        var e = function(t, r) {
            if (!(this instanceof e))
                return new e(t,r);
            Iterator.call(this, t),
            r = r ? String.prototype.contains.call(r, "key+value") ? "key+value" : String.prototype.contains.call(r, "key") ? "key" : "value" : "value",
            Object.defineProperty(this, "__kind__", {
                value: r,
                configurable: !1,
                enumerable: !1,
                writable: !1
            })
        };
        return Object.setPrototypeOf && Object.setPrototypeOf(e, Iterator.prototype),
        e.prototype = Object.create(Iterator.prototype, {
            constructor: {
                value: e,
                configurable: !0,
                enumerable: !1,
                writable: !0
            },
            _resolve: {
                value: function(e) {
                    return "value" === this.__kind__ ? this.__list__[e] : "key+value" === this.__kind__ ? [e, this.__list__[e]] : e
                },
                configurable: !0,
                enumerable: !1,
                writable: !0
            },
            toString: {
                value: function() {
                    return "[object Array Iterator]"
                },
                configurable: !0,
                enumerable: !1,
                writable: !0
            }
        }),
        e
    }();
    Number.isFinite = Number.isFinite || function(i) {
        return "number" == typeof i && isFinite(i)
    }
    ;
    Number.isNaN = Number.isNaN || function(N) {
        return "number" == typeof N && isNaN(N)
    }
    ;
    !function() {
        "use strict";
        function t(t) {
            var e = Number(t);
            return r(e) * Math.floor(Math.abs(Math.min(Math.max(e || 0, 0), 9007199254740991)))
        }
        function r(t) {
            return t >= 0 ? 1 : -1
        }
        function e(t) {
            return "string" == typeof t || "object" == typeof t && (y ? i(t) : f.call(t) === l)
        }
        function n(t) {
            if (!t)
                return !1;
            if ("function" != typeof t && "object" != typeof t)
                return !1;
            if (y)
                return s(t);
            if (b(t))
                return !1;
            var r = f.call(t);
            return r === g || r === d
        }
        var o, a, u = Object.prototype.hasOwnProperty, c = String.prototype.valueOf, i = function(t) {
            try {
                return c.call(t),
                !0
            } catch (r) {
                return !1
            }
        }, f = Object.prototype.toString, l = "[object String]", p = "function" == typeof Symbol, y = p && "toStringTag"in Symbol, v = Function.prototype.toString, h = /^\s*class /, b = function(t) {
            try {
                var r = v.call(t)
                  , e = r.replace(/\/\/.*\n/g, "")
                  , n = e.replace(/\/\*[.\s\S]*\*\//g, "")
                  , o = n.replace(/\n/gm, " ").replace(/ {2}/g, " ");
                return h.test(o)
            } catch (a) {
                return !1
            }
        }, s = function(t) {
            try {
                return !b(t) && (v.call(t),
                !0)
            } catch (r) {
                return !1
            }
        }, g = "[object Function]", d = "[object GeneratorFunction]", S = Array.isArray, j = function(t) {
            var r, e = !1, n = [];
            if (t && "function" == typeof t.next)
                for (; !e; ) {
                    if (r = t.next(),
                    !u.call(r, "value") || !u.call(r, "done")) {
                        if (!0 === r.done) {
                            e = !0;
                            break
                        }
                        break
                    }
                    if (!0 === r.done) {
                        e = !0;
                        break
                    }
                    if (!1 !== r.done)
                        break;
                    n.push(r.value)
                }
            return !!e && n
        }, m = "function" == typeof Set, w = "function" == typeof Map;
        if (p)
            o = Symbol.iterator;
        else {
            var F;
            try {
                F = Function("iterable", "var arr = []; for (var value of iterable) arr.push(value); return arr;")
            } catch (q) {}
            if (function() {
                try {
                    var t = !1;
                    return F({
                        "@@iterator": function() {
                            return {
                                next: function() {
                                    return t = !0,
                                    {
                                        done: !0,
                                        value: undefined
                                    }
                                }
                            }
                        }
                    }),
                    t
                } catch (q) {
                    return !1
                }
            }())
                o = "@@iterator";
            else if ("function" == typeof Set) {
                var O = new Set;
                O.add(0);
                try {
                    1 === F(O).length && (a = F)
                } catch (q) {}
            }
        }
        var D;
        if (m) {
            var M = Object.getOwnPropertyDescriptor(Set.prototype, "size").get;
            D = function(t) {
                try {
                    return M.call(t),
                    !0
                } catch (q) {
                    return !1
                }
            }
        }
        var x;
        if (w) {
            var A = Object.getOwnPropertyDescriptor(Map.prototype, "size").get;
            x = function(t) {
                try {
                    return A.call(t),
                    !0
                } catch (q) {
                    return !1
                }
            }
        }
        var k = m && Set.prototype.forEach
          , P = w && Map.prototype.forEach
          , E = function(t) {
            var r = [];
            return u.call(t, o) ? t[o]() : k && D(t) ? (k.call(t, function(t) {
                r.push(t)
            }),
            {
                next: function() {
                    return 0 === r.length ? {
                        done: !0
                    } : {
                        value: r.splice(0, 1)[0],
                        done: !1
                    }
                }
            }) : P && x(t) ? (P.call(t, function(t, e) {
                r.push([e, t])
            }),
            {
                next: function() {
                    return 0 === r.length ? {
                        done: !0
                    } : {
                        value: r.splice(0, 1)[0],
                        done: !1
                    }
                }
            }) : t
        }
          , T = String.prototype.match
          , z = function(t) {
            var r = j(E(t));
            if (!r)
                if (e(t))
                    r = T.call(t, /[\uD800-\uDBFF][\uDC00-\uDFFF]?|[^\uD800-\uDFFF]|./g) || [];
                else if (a && !S(t))
                    try {
                        r = a(t)
                    } catch (q) {}
            return r || t
        };
        Object.defineProperty(Array, "from", {
            configurable: !0,
            value: function(r) {
                var e = this;
                if (null === r || void 0 === r)
                    throw new TypeError("`Array.from` requires an array-like object, not `null` or `undefined`");
                var o, a;
                if ("undefined" != typeof arguments[1]) {
                    if (o = arguments[1],
                    !n(o))
                        throw new TypeError("When provided, the second argument to `Array.from` must be a function");
                    arguments.length > 2 && (a = arguments[2])
                }
                for (var u, c, i = Object(z(r)), f = t(i.length), l = n(e) ? Object(new e(f)) : new Array(f), p = 0; p < f; )
                    u = i[p],
                    c = o ? void 0 === a ? o(u, p) : o.apply(a, [u, p]) : u,
                    Object.defineProperty(l, p, {
                        configurable: !0,
                        enumerable: !0,
                        value: c,
                        writable: !0
                    }),
                    p += 1;
                return l.length = f,
                l
            },
            writable: !0
        })
    }();
    !function() {
        "use strict";
        var r = function() {
            try {
                var r = {}
                  , e = Object.defineProperty
                  , n = e(r, r, r) && e
            } catch (t) {}
            return n
        }()
          , e = function(r) {
            try {
                return !!new r
            } catch (e) {
                return !1
            }
        }
          , n = function() {
            for (var n, t = arguments, a = t.length, u = this, c = e(u) ? new u(a) : new Array(a), i = 0; i < a; )
                n = t[i],
                r ? r(c, i, {
                    value: n,
                    writable: !0,
                    enumerable: !0,
                    configurable: !0
                }) : c[i] = n,
                i += 1;
            return c.length = a,
            c
        };
        r ? r(Array, "of", {
            value: n,
            configurable: !0,
            writable: !0
        }) : Array.of = n
    }();
    Object.defineProperty(Array.prototype, "fill", {
        configurable: !0,
        value: function(t) {
            if (this === undefined || null === this)
                throw new TypeError(this + " is not an object");
            var e = Object(this)
              , n = Math.max(Math.min(e.length, 9007199254740991), 0) || 0
              , r = 1 in arguments ? parseInt(Number(arguments[1]), 10) || 0 : 0;
            r = r < 0 ? Math.max(n + r, 0) : Math.min(r, n);
            var a = 2 in arguments && arguments[2] !== undefined ? parseInt(Number(arguments[2]), 10) || 0 : n;
            for (a = a < 0 ? Math.max(n + arguments[2], 0) : Math.min(a, n); r < a; )
                e[r] = t,
                ++r;
            return e
        },
        writable: !0
    });
    !function() {
        function e(e, t) {
            for (var n = -1, o = e.length; ++n < o; )
                if (n in e && e[n] === t)
                    return n;
            return -1
        }
        var t = {
            click: 1,
            dblclick: 1,
            keyup: 1,
            keypress: 1,
            keydown: 1,
            mousedown: 1,
            mouseup: 1,
            mousemove: 1,
            mouseover: 1,
            mouseenter: 1,
            mouseleave: 1,
            mouseout: 1,
            storage: 1,
            storagecommit: 1,
            textinput: 1
        };
        if ("undefined" != typeof document && "undefined" != typeof window) {
            var n = window.Event && window.Event.prototype || null;
            window.Event = Window.prototype.Event = function(e, t) {
                if (!e)
                    throw new Error("Not enough arguments");
                var n;
                if ("createEvent"in document) {
                    n = document.createEvent("Event");
                    var o = !(!t || t.bubbles === undefined) && t.bubbles
                      , i = !(!t || t.cancelable === undefined) && t.cancelable;
                    return n.initEvent(e, o, i),
                    n
                }
                return n = document.createEventObject(),
                n.type = e,
                n.bubbles = !(!t || t.bubbles === undefined) && t.bubbles,
                n.cancelable = !(!t || t.cancelable === undefined) && t.cancelable,
                n
            }
            ,
            n && Object.defineProperty(window.Event, "prototype", {
                configurable: !1,
                enumerable: !1,
                writable: !0,
                value: n
            }),
            "createEvent"in document || (window.addEventListener = Window.prototype.addEventListener = Document.prototype.addEventListener = Element.prototype.addEventListener = function() {
                var n = this
                  , o = arguments[0]
                  , i = arguments[1];
                if (n === window && o in t)
                    throw new Error("In IE8 the event: " + o + " is not available on the window object. Please see https://github.com/Financial-Times/polyfill-service/issues/317 for more information.");
                n._events || (n._events = {}),
                n._events[o] || (n._events[o] = function(t) {
                    var o, i = n._events[t.type].list, r = i.slice(), c = -1, a = r.length;
                    for (t.preventDefault = function() {
                        !1 !== t.cancelable && (t.returnValue = !1)
                    }
                    ,
                    t.stopPropagation = function() {
                        t.cancelBubble = !0
                    }
                    ,
                    t.stopImmediatePropagation = function() {
                        t.cancelBubble = !0,
                        t.cancelImmediate = !0
                    }
                    ,
                    t.currentTarget = n,
                    t.relatedTarget = t.fromElement || null,
                    t.target = t.target || t.srcElement || n,
                    t.timeStamp = (new Date).getTime(),
                    t.clientX && (t.pageX = t.clientX + document.documentElement.scrollLeft,
                    t.pageY = t.clientY + document.documentElement.scrollTop); ++c < a && !t.cancelImmediate; )
                        c in r && (o = r[c],
                        -1 !== e(i, o) && "function" == typeof o && o.call(n, t))
                }
                ,
                n._events[o].list = [],
                n.attachEvent && n.attachEvent("on" + o, n._events[o])),
                n._events[o].list.push(i)
            }
            ,
            window.removeEventListener = Window.prototype.removeEventListener = Document.prototype.removeEventListener = Element.prototype.removeEventListener = function() {
                var t, n = this, o = arguments[0], i = arguments[1];
                n._events && n._events[o] && n._events[o].list && -1 !== (t = e(n._events[o].list, i)) && (n._events[o].list.splice(t, 1),
                n._events[o].list.length || (n.detachEvent && n.detachEvent("on" + o, n._events[o]),
                delete n._events[o]))
            }
            ,
            window.dispatchEvent = Window.prototype.dispatchEvent = Document.prototype.dispatchEvent = Element.prototype.dispatchEvent = function(e) {
                if (!arguments.length)
                    throw new Error("Not enough arguments");
                if (!e || "string" != typeof e.type)
                    throw new Error("DOM Events Exception 0");
                var t = this
                  , n = e.type;
                try {
                    if (!e.bubbles) {
                        e.cancelBubble = !0;
                        var o = function(e) {
                            e.cancelBubble = !0,
                            (t || window).detachEvent("on" + n, o)
                        };
                        this.attachEvent("on" + n, o)
                    }
                    this.fireEvent("on" + n, e)
                } catch (i) {
                    e.target = t;
                    do {
                        e.currentTarget = t,
                        "_events"in t && "function" == typeof t._events[n] && t._events[n].call(t, e),
                        "function" == typeof t["on" + n] && t["on" + n].call(t, e),
                        t = 9 === t.nodeType ? t.parentWindow : t.parentNode
                    } while (t && !e.cancelBubble)
                }
                return !0
            }
            ,
            document.attachEvent("onreadystatechange", function() {
                "complete" === document.readyState && document.dispatchEvent(new Event("DOMContentLoaded",{
                    bubbles: !0
                }))
            }))
        }
    }();
    this.CustomEvent = function(e, t) {
        if (!e)
            throw Error('TypeError: Failed to construct "CustomEvent": An event name must be provided.');
        var n;
        if (t = t || {
            bubbles: !1,
            cancelable: !1,
            detail: null
        },
        "createEvent"in document)
            try {
                n = document.createEvent("CustomEvent"),
                n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail)
            } catch (l) {
                n = document.createEvent("Event"),
                n.initEvent(e, t.bubbles, t.cancelable),
                n.detail = t.detail
            }
        else
            n = new Event(e,t),
            n.detail = t && t.detail || null;
        return n
    }
    ,
    CustomEvent.prototype = Event.prototype;
    var _DOMTokenList = function() {
        var n = !0
          , t = function(t, e, r, o) {
            Object.defineProperty ? Object.defineProperty(t, e, {
                configurable: !1 === n || !!o,
                get: r
            }) : t.__defineGetter__(e, r)
        };
        try {
            t({}, "support")
        } catch (e) {
            n = !1
        }
        return function(n, e) {
            var r = this
              , o = []
              , i = {}
              , a = 0
              , c = 0
              , f = function(n) {
                t(r, n, function() {
                    return u(),
                    o[n]
                }, !1)
            }
              , l = function() {
                if (a >= c)
                    for (; c < a; ++c)
                        f(c)
            }
              , u = function() {
                var t, r, c = arguments, f = /\s+/;
                if (c.length)
                    for (r = 0; r < c.length; ++r)
                        if (f.test(c[r]))
                            throw t = new SyntaxError('String "' + c[r] + '" contains an invalid character'),
                            t.code = 5,
                            t.name = "InvalidCharacterError",
                            t;
                for (o = "object" == typeof n[e] ? ("" + n[e].baseVal).replace(/^\s+|\s+$/g, "").split(f) : ("" + n[e]).replace(/^\s+|\s+$/g, "").split(f),
                "" === o[0] && (o = []),
                i = {},
                r = 0; r < o.length; ++r)
                    i[o[r]] = !0;
                a = o.length,
                l()
            };
            return u(),
            t(r, "length", function() {
                return u(),
                a
            }),
            r.toLocaleString = r.toString = function() {
                return u(),
                o.join(" ")
            }
            ,
            r.item = function(n) {
                return u(),
                o[n]
            }
            ,
            r.contains = function(n) {
                return u(),
                !!i[n]
            }
            ,
            r.add = function() {
                u.apply(r, t = arguments);
                for (var t, c, f = 0, g = t.length; f < g; ++f)
                    c = t[f],
                    i[c] || (o.push(c),
                    i[c] = !0);
                a !== o.length && (a = o.length >>> 0,
                "object" == typeof n[e] ? n[e].baseVal = o.join(" ") : n[e] = o.join(" "),
                l())
            }
            ,
            r.remove = function() {
                u.apply(r, t = arguments);
                for (var t, c = {}, f = 0, g = []; f < t.length; ++f)
                    c[t[f]] = !0,
                    delete i[t[f]];
                for (f = 0; f < o.length; ++f)
                    c[o[f]] || g.push(o[f]);
                o = g,
                a = g.length >>> 0,
                "object" == typeof n[e] ? n[e].baseVal = o.join(" ") : n[e] = o.join(" "),
                l()
            }
            ,
            r.toggle = function(n, t) {
                return u.apply(r, [n]),
                undefined !== t ? t ? (r.add(n),
                !0) : (r.remove(n),
                !1) : i[n] ? (r.remove(n),
                !1) : (r.add(n),
                !0)
            }
            ,
            r
        }
    }();
    !function(t) {
        "DOMTokenList"in t && t.DOMTokenList && (!document.createElementNS || !document.createElementNS("http://www.w3.org/2000/svg", "svg") || document.createElementNS("http://www.w3.org/2000/svg", "svg").classList instanceof DOMTokenList) || (t.DOMTokenList = _DOMTokenList),
        function() {
            var t = document.createElement("span");
            "classList"in t && (t.classList.toggle("x", !1),
            t.classList.contains("x") && (t.classList.constructor.prototype.toggle = function(t) {
                var s = arguments[1];
                if (s === undefined) {
                    var e = !this.contains(t);
                    return this[e ? "add" : "remove"](t),
                    e
                }
                return s = !!s,
                this[s ? "add" : "remove"](t),
                s
            }
            ))
        }(),
        function() {
            var t = document.createElement("span");
            if ("classList"in t && (t.classList.add("a", "b"),
            !t.classList.contains("b"))) {
                var s = t.classList.constructor.prototype.add;
                t.classList.constructor.prototype.add = function() {
                    for (var t = arguments, e = arguments.length, n = 0; n < e; n++)
                        s.call(this, t[n])
                }
            }
        }(),
        function() {
            var t = document.createElement("span");
            if ("classList"in t && (t.classList.add("a"),
            t.classList.add("b"),
            t.classList.remove("a", "b"),
            t.classList.contains("b"))) {
                var s = t.classList.constructor.prototype.remove;
                t.classList.constructor.prototype.remove = function() {
                    for (var t = arguments, e = arguments.length, n = 0; n < e; n++)
                        s.call(this, t[n])
                }
            }
        }()
    }(this);
    var _mutation = function() {
        function e(e) {
            return "function" == typeof Node ? e instanceof Node : e && "object" == typeof e && e.nodeName && e.nodeType >= 1 && e.nodeType <= 12
        }
        return function(n) {
            if (1 === n.length)
                return e(n[0]) ? n[0] : document.createTextNode(n[0] + "");
            for (var t = document.createDocumentFragment(), o = 0; o < n.length; o++)
                t.appendChild(e(n[o]) ? n[o] : document.createTextNode(n[o] + ""));
            return t
        }
    }();
    DocumentFragment.prototype.append = function() {
        this.appendChild(_mutation(arguments))
    }
    ;
    DocumentFragment.prototype.prepend = function() {
        this.insertBefore(_mutation(arguments), this.firstChild)
    }
    ;
    Document.prototype.after = Element.prototype.after = function() {
        if (this.parentNode) {
            for (var t = Array.prototype.slice.call(arguments), e = this.nextSibling, o = e ? t.indexOf(e) : -1; -1 !== o && (e = e.nextSibling); )
                o = t.indexOf(e);
            this.parentNode.insertBefore(_mutation(arguments), e)
        }
    }
    ,
    "Text"in this && (Text.prototype.after = Element.prototype.after);
    Document.prototype.append = Element.prototype.append = function() {
        this.appendChild(_mutation(arguments))
    }
    ;
    Document.prototype.before = Element.prototype.before = function() {
        if (this.parentNode) {
            for (var e = Array.prototype.slice.call(arguments), t = this.previousSibling, o = t ? e.indexOf(t) : -1; -1 !== o && (t = t.previousSibling); )
                o = e.indexOf(t);
            this.parentNode.insertBefore(_mutation(arguments), t ? t.nextSibling : this.parentNode.firstChild)
        }
    }
    ,
    "Text"in this && (Text.prototype.before = Element.prototype.before);
    !function(e) {
        var t = !0
          , r = function(e, r, n, i) {
            Object.defineProperty ? Object.defineProperty(e, r, {
                configurable: !1 === t || !!i,
                get: n
            }) : e.__defineGetter__(r, n)
        };
        try {
            r({}, "support")
        } catch (i) {
            t = !1
        }
        var n = function(e, i, l) {
            r(e.prototype, i, function() {
                var e, c = this, s = "__defineGetter__DEFINE_PROPERTY" + i;
                if (c[s])
                    return e;
                if (c[s] = !0,
                !1 === t) {
                    for (var o, a = n.mirror || document.createElement("div"), f = a.childNodes, d = f.length, m = 0; m < d; ++m)
                        if (f[m]._R === c) {
                            o = f[m];
                            break
                        }
                    o || (o = a.appendChild(document.createElement("div"))),
                    e = DOMTokenList.call(o, c, l)
                } else
                    e = new DOMTokenList(c,l);
                return r(c, i, function() {
                    return e
                }),
                delete c[s],
                e
            }, !0)
        };
        n(e.Element, "classList", "className"),
        n(e.HTMLElement, "classList", "className"),
        n(e.HTMLLinkElement, "relList", "rel"),
        n(e.HTMLAnchorElement, "relList", "rel"),
        n(e.HTMLAreaElement, "relList", "rel")
    }(this);
    Element.prototype.matches = Element.prototype.webkitMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.mozMatchesSelector || function(e) {
        for (var t = this, o = (t.document || t.ownerDocument).querySelectorAll(e), r = 0; o[r] && o[r] !== t; )
            ++r;
        return !!o[r]
    }
    ;
    Element.prototype.closest = function(e) {
        for (var n = this; n; ) {
            if (n.matches(e))
                return n;
            n = "SVGElement"in window && n instanceof SVGElement ? n.parentNode : n.parentElement
        }
        return null
    }
    ;
    Document.prototype.prepend = Element.prototype.prepend = function() {
        this.insertBefore(_mutation(arguments), this.firstChild)
    }
    ;
    Document.prototype.remove = Element.prototype.remove = function() {
        this.parentNode && this.parentNode.removeChild(this)
    }
    ,
    "Text"in this && (Text.prototype.remove = Element.prototype.remove);
    Document.prototype.replaceWith = Element.prototype.replaceWith = function() {
        this.parentNode && this.parentNode.replaceChild(_mutation(arguments), this)
    }
    ,
    "Text"in this && (Text.prototype.replaceWith = Element.prototype.replaceWith);
    Object.defineProperty(Symbol, "species", {
        value: Symbol("species")
    });
    !function(e) {
        function t(e, t) {
            var r = e[t];
            if (null === r || r === undefined)
                return undefined;
            if ("function" != typeof r)
                throw new TypeError("Method not callable: " + t);
            return r
        }
        function r(e) {
            if (!(1 in arguments))
                var r = t(e, Symbol.iterator);
            var o = r.call(e);
            if ("object" != typeof o)
                throw new TypeError("bad iterator");
            var n = o.next
              , a = Object.create(null);
            return a["[[Iterator]]"] = o,
            a["[[NextMethod]]"] = n,
            a["[[Done]]"] = !1,
            a
        }
        function o(e) {
            if (1 in arguments)
                var t = e["[[NextMethod]]"].call(e["[[Iterator]]"], arguments[1]);
            else
                var t = e["[[NextMethod]]"].call(e["[[Iterator]]"]);
            if ("object" != typeof t)
                throw new TypeError("bad iterator");
            return t
        }
        function n(e) {
            if ("object" != typeof e)
                throw new Error(Object.prototype.toString.call(e) + "is not an Object.");
            return Boolean(e.done)
        }
        function a(e) {
            if ("object" != typeof e)
                throw new Error(Object.prototype.toString.call(e) + "is not an Object.");
            return e.value
        }
        function i(e) {
            var t = o(e);
            return !0 !== n(t) && t
        }
        function l(e, r) {
            if ("object" != typeof e["[[Iterator]]"])
                throw new Error(Object.prototype.toString.call(e["[[Iterator]]"]) + "is not an Object.");
            var o = e["[[Iterator]]"]
              , n = t(o, "return");
            if (n === undefined)
                return r;
            try {
                var a = n.call(o)
            } catch (l) {
                var i = l
            }
            if (r)
                return r;
            if (i)
                throw i;
            if ("object" == typeof a)
                throw new TypeError("Iterator's return method returned a non-object.");
            return r
        }
        function c(e, t) {
            if ("boolean" != typeof t)
                throw new Error;
            var r = {};
            return r.value = e,
            r.done = t,
            r
        }
        function p(e, t) {
            if ("object" != typeof e)
                throw new TypeError("createMapIterator called on incompatible receiver " + Object.prototype.toString.call(e));
            if (!0 !== e._es6Map)
                throw new TypeError("createMapIterator called on incompatible receiver " + Object.prototype.toString.call(e));
            var r = Object.create(v);
            return Object.defineProperty(r, "[[Map]]", {
                configurable: !0,
                enumerable: !1,
                writable: !0,
                value: e
            }),
            Object.defineProperty(r, "[[MapNextIndex]]", {
                configurable: !0,
                enumerable: !1,
                writable: !0,
                value: 0
            }),
            Object.defineProperty(r, "[[MapIterationKind]]", {
                configurable: !0,
                enumerable: !1,
                writable: !0,
                value: t
            }),
            r
        }
        var u = function(e, t) {
            return typeof e == typeof t && ("number" == typeof e ? !(!isNaN(e) || !isNaN(t)) || (0 === e && -0 === t || (-0 === e && 0 === t || e === t)) : e === t)
        }
          , f = function(e, t) {
            var r = arguments[2] || {}
              , o = Object.getPrototypeOf(e)
              , n = Object.create(o);
            for (var a in r)
                Object.prototype.hasOwnProperty.call(r, a) && Object.defineProperty(n, a, {
                    configurable: !0,
                    enumerable: !1,
                    writable: !0,
                    value: r[a]
                });
            return n
        }
          , y = Symbol("undef")
          , b = function() {
            try {
                var e = {};
                return Object.defineProperty(e, "t", {
                    configurable: !0,
                    enumerable: !1,
                    get: function() {
                        return !0
                    },
                    set: undefined
                }),
                !!e.t
            } catch (t) {
                return !1
            }
        }()
          , s = function(e) {
            return "function" == typeof e
        }
          , d = function w() {
            if (!(this instanceof w))
                throw new TypeError('Constructor Map requires "new"');
            var e = f(this, "%MapPrototype%", {
                _keys: [],
                _values: [],
                _size: 0,
                _es6Map: !0
            });
            b || Object.defineProperty(e, "size", {
                configurable: !0,
                enumerable: !1,
                writable: !0,
                value: 0
            });
            var t = arguments[0] || undefined;
            if (null === t || t === undefined)
                return e;
            var o = e.set;
            if (!s(o))
                throw new TypeError("Map.prototype.set is not a function");
            try {
                for (var n = r(t); ; ) {
                    var c = i(n);
                    if (!1 === c)
                        return e;
                    var p = a(c);
                    if ("object" != typeof p)
                        try {
                            throw new TypeError("Iterator value " + p + " is not an entry object")
                        } catch (h) {
                            return l(n, h)
                        }
                    try {
                        var u = p[0]
                          , y = p[1];
                        o.call(e, u, y)
                    } catch (j) {
                        return l(n, j)
                    }
                }
            } catch (j) {
                if (Array.isArray(t) || "[object Arguments]" === Object.prototype.toString.call(t) || t.callee) {
                    var d, v = t.length;
                    for (d = 0; d < v; d++)
                        o.call(e, t[d][0], t[d][1])
                }
            }
            return e
        };
        Object.defineProperty(d, "prototype", {
            configurable: !1,
            enumerable: !1,
            writable: !1,
            value: {}
        }),
        b ? Object.defineProperty(d, Symbol.species, {
            configurable: !0,
            enumerable: !1,
            get: function() {
                return this
            },
            set: undefined
        }) : Object.defineProperty(d, Symbol.species, {
            configurable: !0,
            enumerable: !1,
            writable: !0,
            value: d
        }),
        Object.defineProperty(d.prototype, "clear", {
            configurable: !0,
            enumerable: !1,
            writable: !0,
            value: function() {
                var e = this;
                if ("object" != typeof e)
                    throw new TypeError("Method Map.prototype.clear called on incompatible receiver " + Object.prototype.toString.call(e));
                if (!0 !== e._es6Map)
                    throw new TypeError("Method Map.prototype.clear called on incompatible receiver " + Object.prototype.toString.call(e));
                for (var t = e._keys, r = 0; r < t.length; r++)
                    e._keys[r] = y,
                    e._values[r] = y;
                return this._size = 0,
                b || (this.size = this._size),
                undefined
            }
        }),
        Object.defineProperty(d.prototype, "constructor", {
            configurable: !0,
            enumerable: !1,
            writable: !0,
            value: d
        }),
        Object.defineProperty(d.prototype, "delete", {
            configurable: !0,
            enumerable: !1,
            writable: !0,
            value: function(e) {
                var t = this;
                if ("object" != typeof t)
                    throw new TypeError("Method Map.prototype.clear called on incompatible receiver " + Object.prototype.toString.call(t));
                if (!0 !== t._es6Map)
                    throw new TypeError("Method Map.prototype.clear called on incompatible receiver " + Object.prototype.toString.call(t));
                for (var r = t._keys, o = 0; o < r.length; o++)
                    if (t._keys[o] !== y && u(t._keys[o], e))
                        return this._keys[o] = y,
                        this._values[o] = y,
                        --this._size,
                        b || (this.size = this._size),
                        !0;
                return !1
            }
        }),
        Object.defineProperty(d.prototype, "entries", {
            configurable: !0,
            enumerable: !1,
            writable: !0,
            value: function() {
                return p(this, "key+value")
            }
        }),
        Object.defineProperty(d.prototype, "forEach", {
            configurable: !0,
            enumerable: !1,
            writable: !0,
            value: function(e) {
                var t = this;
                if ("object" != typeof t)
                    throw new TypeError("Method Map.prototype.forEach called on incompatible receiver " + Object.prototype.toString.call(t));
                if (!0 !== t._es6Map)
                    throw new TypeError("Method Map.prototype.forEach called on incompatible receiver " + Object.prototype.toString.call(t));
                if (!s(e))
                    throw new TypeError(Object.prototype.toString.call(e) + " is not a function.");
                if (arguments[1])
                    var r = arguments[1];
                for (var o = t._keys, n = 0; n < o.length; n++)
                    t._keys[n] !== y && t._values[n] !== y && e.call(r, t._values[n], t._keys[n], t);
                return undefined
            }
        }),
        Object.defineProperty(d.prototype, "get", {
            configurable: !0,
            enumerable: !1,
            writable: !0,
            value: function(e) {
                var t = this;
                if ("object" != typeof t)
                    throw new TypeError("Method Map.prototype.get called on incompatible receiver " + Object.prototype.toString.call(t));
                if (!0 !== t._es6Map)
                    throw new TypeError("Method Map.prototype.get called on incompatible receiver " + Object.prototype.toString.call(t));
                for (var r = t._keys, o = 0; o < r.length; o++)
                    if (t._keys[o] !== y && u(t._keys[o], e))
                        return t._values[o];
                return undefined
            }
        }),
        Object.defineProperty(d.prototype, "has", {
            configurable: !0,
            enumerable: !1,
            writable: !0,
            value: function(e) {
                var t = this;
                if ("object" != typeof t)
                    throw new TypeError("Method Map.prototype.has called on incompatible receiver " + Object.prototype.toString.call(t));
                if (!0 !== t._es6Map)
                    throw new TypeError("Method Map.prototype.has called on incompatible receiver " + Object.prototype.toString.call(t));
                for (var r = t._keys, o = 0; o < r.length; o++)
                    if (t._keys[o] !== y && u(t._keys[o], e))
                        return !0;
                return !1
            }
        }),
        Object.defineProperty(d.prototype, "keys", {
            configurable: !0,
            enumerable: !1,
            writable: !0,
            value: function() {
                return p(this, "key")
            }
        }),
        Object.defineProperty(d.prototype, "set", {
            configurable: !0,
            enumerable: !1,
            writable: !0,
            value: function(e, t) {
                var r = this;
                if ("object" != typeof r)
                    throw new TypeError("Method Map.prototype.set called on incompatible receiver " + Object.prototype.toString.call(r));
                if (!0 !== r._es6Map)
                    throw new TypeError("Method Map.prototype.set called on incompatible receiver " + Object.prototype.toString.call(r));
                for (var o = r._keys, n = 0; n < o.length; n++)
                    if (r._keys[n] !== y && u(r._keys[n], e))
                        return r._values[n] = t,
                        r;
                -0 === e && (e = 0);
                var a = {};
                return a["[[Key]]"] = e,
                a["[[Value]]"] = t,
                r._keys.push(a["[[Key]]"]),
                r._values.push(a["[[Value]]"]),
                ++r._size,
                b || (r.size = r._size),
                r
            }
        }),
        b && Object.defineProperty(d.prototype, "size", {
            configurable: !0,
            enumerable: !1,
            get: function() {
                var e = this;
                if ("object" != typeof e)
                    throw new TypeError("Method Map.prototype.size called on incompatible receiver " + Object.prototype.toString.call(e));
                if (!0 !== e._es6Map)
                    throw new TypeError("Method Map.prototype.size called on incompatible receiver " + Object.prototype.toString.call(e));
                for (var t = e._keys, r = 0, o = 0; o < t.length; o++)
                    e._keys[o] !== y && (r += 1);
                return r
            },
            set: undefined
        }),
        Object.defineProperty(d.prototype, "values", {
            configurable: !0,
            enumerable: !1,
            writable: !0,
            value: function() {
                return p(this, "value")
            }
        }),
        Object.defineProperty(d.prototype, Symbol.iterator, {
            configurable: !0,
            enumerable: !1,
            writable: !0,
            value: d.prototype.entries
        }),
        "name"in d || Object.defineProperty(d, "name", {
            configurable: !0,
            enumerable: !1,
            writable: !1,
            value: "Map"
        });
        var v = {
            isMapIterator: !0,
            next: function() {
                var e = this;
                if ("object" != typeof e)
                    throw new TypeError("Method %MapIteratorPrototype%.next called on incompatible receiver " + Object.prototype.toString.call(e));
                if (!e.isMapIterator)
                    throw new TypeError("Method %MapIteratorPrototype%.next called on incompatible receiver " + Object.prototype.toString.call(e));
                var t = e["[[Map]]"]
                  , r = e["[[MapNextIndex]]"]
                  , o = e["[[MapIterationKind]]"];
                if (t === undefined)
                    return c(undefined, !0);
                if (!t._es6Map)
                    throw new Error;
                for (var n = t._keys, a = n.length; r < a; ) {
                    var i = Object.create(null);
                    if (i["[[Key]]"] = t._keys[r],
                    i["[[Value]]"] = t._values[r],
                    r += 1,
                    e["[[MapNextIndex]]"] = r,
                    i["[[Key]]"] !== y) {
                        if ("key" === o)
                            var l = i["[[Key]]"];
                        else if ("value" === o)
                            var l = i["[[Value]]"];
                        else {
                            if ("key+value" !== o)
                                throw new Error;
                            var l = [i["[[Key]]"], i["[[Value]]"]]
                        }
                        return c(l, !1)
                    }
                }
                return e["[[Map]]"] = undefined,
                c(undefined, !0)
            }
        };
        Object.defineProperty(v, Symbol.iterator, {
            configurable: !0,
            enumerable: !1,
            writable: !0,
            value: function() {
                return this
            }
        });
        try {
            Object.defineProperty(e, "Map", {
                configurable: !0,
                enumerable: !1,
                writable: !0,
                value: d
            })
        } catch (h) {
            e.Map = d
        }
    }(this);
    !function() {
        function t(t) {
            if (!(0 in arguments))
                throw new TypeError("1 argument is required");
            do {
                if (this === t)
                    return !0
            } while (t = t && t.parentNode);return !1
        }
        if ("HTMLElement"in this && "contains"in HTMLElement.prototype)
            try {
                delete HTMLElement.prototype.contains
            } catch (e) {}
        "Node"in this ? Node.prototype.contains = t : document.contains = Element.prototype.contains = t
    }();
    !function(t) {
        function e(t) {
            return Number.isNaN(t) ? r : t
        }
        function i(t) {
            return t === r ? NaN : t
        }
        function n(t, e) {
            var i = 0;
            return {
                next: function() {
                    for (; t._values[i] === o; )
                        i++;
                    return i === t._values.length ? {
                        value: void 0,
                        done: !0
                    } : {
                        value: e.call(t, i++),
                        done: !1
                    }
                }
            }
        }
        var o = Symbol("undef")
          , r = Symbol("NaN")
          , s = function() {
            var t = arguments[0];
            this._values = [],
            this.size = this._size = 0,
            t && "function" == typeof t.forEach && t.forEach(function(t) {
                this.add.call(this, t)
            }, this)
        };
        try {
            Object.defineProperty(s.prototype, "size", {
                get: function() {
                    return this._size
                }
            })
        } catch (u) {}
        s.prototype.add = function(t) {
            return t = e(t),
            -1 === this._values.indexOf(t) && (this._values.push(t),
            this.size = ++this._size),
            this
        }
        ,
        s.prototype.has = function(t) {
            return -1 !== this._values.indexOf(e(t))
        }
        ,
        s.prototype["delete"] = function(t) {
            var i = this._values.indexOf(e(t));
            return -1 !== i && (this._values[i] = o,
            this.size = --this._size,
            !0)
        }
        ,
        s.prototype.clear = function() {
            this._values = [],
            this.size = this._size = 0
        }
        ,
        s.prototype[Symbol.iterator] = s.prototype.values = s.prototype.keys = function() {
            var t = n(this, function(t) {
                return i(this._values[t])
            });
            return t[Symbol.iterator] = this.keys.bind(this),
            t
        }
        ,
        s.prototype.entries = function() {
            var t = n(this, function(t) {
                return [i(this._values[t]), i(this._values[t])]
            });
            return t[Symbol.iterator] = this.entries.bind(this),
            t
        }
        ,
        s.prototype.forEach = function(e, i) {
            i = i || t;
            for (var n = this.entries(), o = n.next(); !1 === o.done; )
                e.call(i, o.value[1], o.value[0], this),
                o = n.next()
        }
        ,
        s.prototype.constructor = s.prototype[Symbol.species] = s,
        s.prototype.constructor = s,
        s.name = "Set",
        t.Set = s
    }(this);
    String.prototype.endsWith = function(t) {
        var n = arguments.length < 2 ? this.length : arguments[1]
          , e = this.lastIndexOf(t);
        return -1 !== e && e === n - t.length
    }
    ;
    String.prototype.startsWith = function(t) {
        var i = arguments.length < 2 ? 0 : arguments[1];
        return 0 === this.slice(i).indexOf(t)
    }
    ;
    !function(e) {
        "use strict";
        function t(t) {
            return !!t && ("Symbol"in e && "iterator"in e.Symbol && "function" == typeof t[Symbol.iterator] || !!Array.isArray(t))
        }
        function n(e) {
            return "from"in Array ? Array.from(e) : Array.prototype.slice.call(e)
        }
        !function() {
            function r(e) {
                var t = ""
                  , n = !0;
                return e.forEach(function(e) {
                    var r = encodeURIComponent(e.name)
                      , a = encodeURIComponent(e.value);
                    n || (t += "&"),
                    t += r + "=" + a,
                    n = !1
                }),
                t.replace(/%20/g, "+")
            }
            function a(e, t) {
                var n = e.split("&");
                t && -1 === n[0].indexOf("=") && (n[0] = "=" + n[0]);
                var r = [];
                n.forEach(function(e) {
                    if (0 !== e.length) {
                        var t = e.indexOf("=");
                        if (-1 !== t)
                            var n = e.substring(0, t)
                              , a = e.substring(t + 1);
                        else
                            n = e,
                            a = "";
                        n = n.replace(/\+/g, " "),
                        a = a.replace(/\+/g, " "),
                        r.push({
                            name: n,
                            value: a
                        })
                    }
                });
                var a = [];
                return r.forEach(function(e) {
                    a.push({
                        name: decodeURIComponent(e.name),
                        value: decodeURIComponent(e.value)
                    })
                }),
                a
            }
            function i(e) {
                if (c)
                    return new s(e);
                var t = document.createElement("a");
                return t.href = e,
                t
            }
            function o(e) {
                var i = this;
                this._list = [],
                e === undefined || null === e || (e instanceof o ? this._list = a(String(e)) : "object" == typeof e && t(e) ? n(e).forEach(function(e) {
                    if (!t(e))
                        throw TypeError();
                    var r = n(e);
                    if (2 !== r.length)
                        throw TypeError();
                    i._list.push({
                        name: String(r[0]),
                        value: String(r[1])
                    })
                }) : "object" == typeof e && e ? Object.keys(e).forEach(function(t) {
                    i._list.push({
                        name: String(t),
                        value: String(e[t])
                    })
                }) : (e = String(e),
                "?" === e.substring(0, 1) && (e = e.substring(1)),
                this._list = a(e))),
                this._url_object = null,
                this._setList = function(e) {
                    u || (i._list = e)
                }
                ;
                var u = !1;
                this._update_steps = function() {
                    u || (u = !0,
                    i._url_object && ("about:" === i._url_object.protocol && -1 !== i._url_object.pathname.indexOf("?") && (i._url_object.pathname = i._url_object.pathname.split("?")[0]),
                    i._url_object.search = r(i._list),
                    u = !1))
                }
            }
            function u(e, t) {
                var n = 0;
                this.next = function() {
                    if (n >= e.length)
                        return {
                            done: !0,
                            value: undefined
                        };
                    var r = e[n++];
                    return {
                        done: !1,
                        value: "key" === t ? r.name : "value" === t ? r.value : [r.name, r.value]
                    }
                }
            }
            function l(t, n) {
                function r() {
                    var e = l.href.replace(/#$|\?$|\?(?=#)/g, "");
                    l.href !== e && (l.href = e)
                }
                function u() {
                    m._setList(l.search ? a(l.search.substring(1)) : []),
                    m._update_steps()
                }
                if (!(this instanceof e.URL))
                    throw new TypeError("Failed to construct 'URL': Please use the 'new' operator.");
                n && (t = function() {
                    if (c)
                        return new s(t,n).href;
                    var e;
                    try {
                        var r;
                        if ("[object OperaMini]" === Object.prototype.toString.call(window.operamini) ? (e = document.createElement("iframe"),
                        e.style.display = "none",
                        document.documentElement.appendChild(e),
                        r = e.contentWindow.document) : document.implementation && document.implementation.createHTMLDocument ? r = document.implementation.createHTMLDocument("") : document.implementation && document.implementation.createDocument ? (r = document.implementation.createDocument("http://www.w3.org/1999/xhtml", "html", null),
                        r.documentElement.appendChild(r.createElement("head")),
                        r.documentElement.appendChild(r.createElement("body"))) : window.ActiveXObject && (r = new window.ActiveXObject("htmlfile"),
                        r.write("<head></head><body></body>"),
                        r.close()),
                        !r)
                            throw Error("base not supported");
                        var a = r.createElement("base");
                        a.href = n,
                        r.getElementsByTagName("head")[0].appendChild(a);
                        var i = r.createElement("a");
                        return i.href = t,
                        i.href
                    } finally {
                        e && e.parentNode.removeChild(e)
                    }
                }());
                var l = i(t || "")
                  , f = function() {
                    if (!("defineProperties"in Object))
                        return !1;
                    try {
                        var e = {};
                        return Object.defineProperties(e, {
                            prop: {
                                get: function() {
                                    return !0
                                }
                            }
                        }),
                        e.prop
                    } catch (t) {
                        return !1
                    }
                }()
                  , h = f ? this : document.createElement("a")
                  , m = new o(l.search ? l.search.substring(1) : null);
                return m._url_object = h,
                Object.defineProperties(h, {
                    href: {
                        get: function() {
                            return l.href
                        },
                        set: function(e) {
                            l.href = e,
                            r(),
                            u()
                        },
                        enumerable: !0,
                        configurable: !0
                    },
                    origin: {
                        get: function() {
                            return "origin"in l ? l.origin : this.protocol + "//" + this.host
                        },
                        enumerable: !0,
                        configurable: !0
                    },
                    protocol: {
                        get: function() {
                            return l.protocol
                        },
                        set: function(e) {
                            l.protocol = e
                        },
                        enumerable: !0,
                        configurable: !0
                    },
                    username: {
                        get: function() {
                            return l.username
                        },
                        set: function(e) {
                            l.username = e
                        },
                        enumerable: !0,
                        configurable: !0
                    },
                    password: {
                        get: function() {
                            return l.password
                        },
                        set: function(e) {
                            l.password = e
                        },
                        enumerable: !0,
                        configurable: !0
                    },
                    host: {
                        get: function() {
                            var e = {
                                "http:": /:80$/,
                                "https:": /:443$/,
                                "ftp:": /:21$/
                            }[l.protocol];
                            return e ? l.host.replace(e, "") : l.host
                        },
                        set: function(e) {
                            l.host = e
                        },
                        enumerable: !0,
                        configurable: !0
                    },
                    hostname: {
                        get: function() {
                            return l.hostname
                        },
                        set: function(e) {
                            l.hostname = e
                        },
                        enumerable: !0,
                        configurable: !0
                    },
                    port: {
                        get: function() {
                            return l.port
                        },
                        set: function(e) {
                            l.port = e
                        },
                        enumerable: !0,
                        configurable: !0
                    },
                    pathname: {
                        get: function() {
                            return "/" !== l.pathname.charAt(0) ? "/" + l.pathname : l.pathname
                        },
                        set: function(e) {
                            l.pathname = e
                        },
                        enumerable: !0,
                        configurable: !0
                    },
                    search: {
                        get: function() {
                            return l.search
                        },
                        set: function(e) {
                            l.search !== e && (l.search = e,
                            r(),
                            u())
                        },
                        enumerable: !0,
                        configurable: !0
                    },
                    searchParams: {
                        get: function() {
                            return m
                        },
                        enumerable: !0,
                        configurable: !0
                    },
                    hash: {
                        get: function() {
                            return l.hash
                        },
                        set: function(e) {
                            l.hash = e,
                            r()
                        },
                        enumerable: !0,
                        configurable: !0
                    },
                    toString: {
                        value: function() {
                            return l.toString()
                        },
                        enumerable: !1,
                        configurable: !0
                    },
                    valueOf: {
                        value: function() {
                            return l.valueOf()
                        },
                        enumerable: !1,
                        configurable: !0
                    }
                }),
                h
            }
            var c, s = e.URL;
            try {
                if (s) {
                    if ("searchParams"in (c = new e.URL("http://example.com")))
                        return;
                    "href"in c || (c = undefined)
                }
            } catch (h) {}
            if (Object.defineProperties(o.prototype, {
                append: {
                    value: function(e, t) {
                        this._list.push({
                            name: e,
                            value: t
                        }),
                        this._update_steps()
                    },
                    writable: !0,
                    enumerable: !0,
                    configurable: !0
                },
                "delete": {
                    value: function(e) {
                        for (var t = 0; t < this._list.length; )
                            this._list[t].name === e ? this._list.splice(t, 1) : ++t;
                        this._update_steps()
                    },
                    writable: !0,
                    enumerable: !0,
                    configurable: !0
                },
                get: {
                    value: function(e) {
                        for (var t = 0; t < this._list.length; ++t)
                            if (this._list[t].name === e)
                                return this._list[t].value;
                        return null
                    },
                    writable: !0,
                    enumerable: !0,
                    configurable: !0
                },
                getAll: {
                    value: function(e) {
                        for (var t = [], n = 0; n < this._list.length; ++n)
                            this._list[n].name === e && t.push(this._list[n].value);
                        return t
                    },
                    writable: !0,
                    enumerable: !0,
                    configurable: !0
                },
                has: {
                    value: function(e) {
                        for (var t = 0; t < this._list.length; ++t)
                            if (this._list[t].name === e)
                                return !0;
                        return !1
                    },
                    writable: !0,
                    enumerable: !0,
                    configurable: !0
                },
                set: {
                    value: function(e, t) {
                        for (var n = !1, r = 0; r < this._list.length; )
                            this._list[r].name === e ? n ? this._list.splice(r, 1) : (this._list[r].value = t,
                            n = !0,
                            ++r) : ++r;
                        n || this._list.push({
                            name: e,
                            value: t
                        }),
                        this._update_steps()
                    },
                    writable: !0,
                    enumerable: !0,
                    configurable: !0
                },
                entries: {
                    value: function() {
                        return new u(this._list,"key+value")
                    },
                    writable: !0,
                    enumerable: !0,
                    configurable: !0
                },
                keys: {
                    value: function() {
                        return new u(this._list,"key")
                    },
                    writable: !0,
                    enumerable: !0,
                    configurable: !0
                },
                values: {
                    value: function() {
                        return new u(this._list,"value")
                    },
                    writable: !0,
                    enumerable: !0,
                    configurable: !0
                },
                forEach: {
                    value: function(e) {
                        var t = arguments.length > 1 ? arguments[1] : undefined;
                        this._list.forEach(function(n, r) {
                            e.call(t, n.value, n.name)
                        })
                    },
                    writable: !0,
                    enumerable: !0,
                    configurable: !0
                },
                toString: {
                    value: function() {
                        return r(this._list)
                    },
                    writable: !0,
                    enumerable: !1,
                    configurable: !0
                }
            }),
            "Symbol"in e && "iterator"in e.Symbol && (Object.defineProperty(o.prototype, e.Symbol.iterator, {
                value: o.prototype.entries,
                writable: !0,
                enumerable: !0,
                configurable: !0
            }),
            Object.defineProperty(u.prototype, e.Symbol.iterator, {
                value: function() {
                    return this
                },
                writable: !0,
                enumerable: !0,
                configurable: !0
            })),
            s)
                for (var f in s)
                    s.hasOwnProperty(f) && "function" == typeof s[f] && (l[f] = s[f]);
            e.URL = l,
            e.URLSearchParams = o
        }(),
        function() {
            if ("1" !== new e.URLSearchParams([["a", 1]]).get("a") || "1" !== new e.URLSearchParams({
                a: 1
            }).get("a")) {
                var r = e.URLSearchParams;
                e.URLSearchParams = function(e) {
                    if (e && "object" == typeof e && t(e)) {
                        var a = new r;
                        return n(e).forEach(function(e) {
                            if (!t(e))
                                throw TypeError();
                            var r = n(e);
                            if (2 !== r.length)
                                throw TypeError();
                            a.append(r[0], r[1])
                        }),
                        a
                    }
                    return e && "object" == typeof e ? (a = new r,
                    Object.keys(e).forEach(function(t) {
                        a.set(t, e[t])
                    }),
                    a) : new r(e)
                }
            }
        }()
    }(self);
    try {
        Object.defineProperty(window.location, "origin", {
            enumerable: !0,
            writable: !1,
            value: window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : ""),
            configurable: !1
        })
    } catch (e) {
        window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "")
    }
}
).call('object' === typeof window && window || 'object' === typeof self && self || 'object' === typeof global && global || {});
