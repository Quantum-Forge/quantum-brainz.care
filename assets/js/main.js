!(function (e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports
        ? (module.exports = e.document
              ? t(e, !0)
              : function (e) {
                    if (!e.document) throw new Error("jQuery requires a window with a document");
                    return t(e);
                })
        : t(e);
})("undefined" != typeof window ? window : this, function (C, e) {
    "use strict";
    function m(e) {
        return null != e && e === e.window;
    }
    var t = [],
        i = Object.getPrototypeOf,
        o = t.slice,
        g = t.flat
            ? function (e) {
                  return t.flat.call(e);
              }
            : function (e) {
                  return t.concat.apply([], e);
              },
        l = t.push,
        r = t.indexOf,
        n = {},
        a = n.toString,
        v = n.hasOwnProperty,
        s = v.toString,
        d = s.call(Object),
        y = {},
        b = function (e) {
            return "function" == typeof e && "number" != typeof e.nodeType;
        },
        T = C.document,
        u = { type: !0, src: !0, nonce: !0, noModule: !0 };
    function w(e, t, i) {
        var n,
            r,
            a = (i = i || T).createElement("script");
        if (((a.text = e), t)) for (n in u) (r = t[n] || (t.getAttribute && t.getAttribute(n))) && a.setAttribute(n, r);
        i.head.appendChild(a).parentNode.removeChild(a);
    }
    function f(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[a.call(e)] || "object" : typeof e;
    }
    var c = "3.5.1",
        E = function (e, t) {
            return new E.fn.init(e, t);
        };
    function h(e) {
        var t = !!e && "length" in e && e.length,
            i = f(e);
        return !b(e) && !m(e) && ("array" === i || 0 === t || ("number" == typeof t && 0 < t && t - 1 in e));
    }
    (E.fn = E.prototype = {
        jquery: c,
        constructor: E,
        length: 0,
        toArray: function () {
            return o.call(this);
        },
        get: function (e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e];
        },
        pushStack: function (e) {
            e = E.merge(this.constructor(), e);
            return (e.prevObject = this), e;
        },
        each: function (e) {
            return E.each(this, e);
        },
        map: function (i) {
            return this.pushStack(
                E.map(this, function (e, t) {
                    return i.call(e, t, e);
                })
            );
        },
        slice: function () {
            return this.pushStack(o.apply(this, arguments));
        },
        first: function () {
            return this.eq(0);
        },
        last: function () {
            return this.eq(-1);
        },
        even: function () {
            return this.pushStack(
                E.grep(this, function (e, t) {
                    return (t + 1) % 2;
                })
            );
        },
        odd: function () {
            return this.pushStack(
                E.grep(this, function (e, t) {
                    return t % 2;
                })
            );
        },
        eq: function (e) {
            var t = this.length,
                e = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= e && e < t ? [this[e]] : []);
        },
        end: function () {
            return this.prevObject || this.constructor();
        },
        push: l,
        sort: t.sort,
        splice: t.splice,
    }),
        (E.extend = E.fn.extend = function () {
            var e,
                t,
                i,
                n,
                r,
                a = arguments[0] || {},
                s = 1,
                o = arguments.length,
                l = !1;
            for ("boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++), "object" == typeof a || b(a) || (a = {}), s === o && ((a = this), s--); s < o; s++)
                if (null != (e = arguments[s]))
                    for (t in e)
                        (i = e[t]),
                            "__proto__" !== t &&
                                a !== i &&
                                (l && i && (E.isPlainObject(i) || (n = Array.isArray(i)))
                                    ? ((r = a[t]), (r = n && !Array.isArray(r) ? [] : n || E.isPlainObject(r) ? r : {}), (n = !1), (a[t] = E.extend(l, r, i)))
                                    : void 0 !== i && (a[t] = i));
            return a;
        }),
        E.extend({
            expando: "jQuery" + (c + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function (e) {
                throw new Error(e);
            },
            noop: function () {},
            isPlainObject: function (e) {
                return !(!e || "[object Object]" !== a.call(e)) && (!(e = i(e)) || ("function" == typeof (e = v.call(e, "constructor") && e.constructor) && s.call(e) === d));
            },
            isEmptyObject: function (e) {
                for (var t in e) return !1;
                return !0;
            },
            globalEval: function (e, t, i) {
                w(e, { nonce: t && t.nonce }, i);
            },
            each: function (e, t) {
                var i,
                    n = 0;
                if (h(e)) for (i = e.length; n < i && !1 !== t.call(e[n], n, e[n]); n++);
                else for (n in e) if (!1 === t.call(e[n], n, e[n])) break;
                return e;
            },
            makeArray: function (e, t) {
                t = t || [];
                return null != e && (h(Object(e)) ? E.merge(t, "string" == typeof e ? [e] : e) : l.call(t, e)), t;
            },
            inArray: function (e, t, i) {
                return null == t ? -1 : r.call(t, e, i);
            },
            merge: function (e, t) {
                for (var i = +t.length, n = 0, r = e.length; n < i; n++) e[r++] = t[n];
                return (e.length = r), e;
            },
            grep: function (e, t, i) {
                for (var n = [], r = 0, a = e.length, s = !i; r < a; r++) !t(e[r], r) != s && n.push(e[r]);
                return n;
            },
            map: function (e, t, i) {
                var n,
                    r,
                    a = 0,
                    s = [];
                if (h(e)) for (n = e.length; a < n; a++) null != (r = t(e[a], a, i)) && s.push(r);
                else for (a in e) null != (r = t(e[a], a, i)) && s.push(r);
                return g(s);
            },
            guid: 1,
            support: y,
        }),
        "function" == typeof Symbol && (E.fn[Symbol.iterator] = t[Symbol.iterator]),
        E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
            n["[object " + t + "]"] = t.toLowerCase();
        });
    var p = (function (i) {
        function c(e, t) {
            return (e = "0x" + e.slice(1) - 65536), t || (e < 0 ? String.fromCharCode(65536 + e) : String.fromCharCode((e >> 10) | 55296, (1023 & e) | 56320));
        }
        function n() {
            C();
        }
        var e,
            p,
            w,
            a,
            r,
            f,
            h,
            m,
            x,
            l,
            d,
            C,
            T,
            s,
            E,
            g,
            o,
            u,
            v,
            S = "sizzle" + +new Date(),
            y = i.document,
            _ = 0,
            b = 0,
            k = le(),
            M = le(),
            D = le(),
            I = le(),
            L = function (e, t) {
                return e === t && (d = !0), 0;
            },
            O = {}.hasOwnProperty,
            t = [],
            A = t.pop,
            P = t.push,
            N = t.push,
            z = t.slice,
            B = function (e, t) {
                for (var i = 0, n = e.length; i < n; i++) if (e[i] === t) return i;
                return -1;
            },
            j = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            H = "[\\x20\\t\\r\\n\\f]",
            R = "(?:\\\\[\\da-fA-F]{1,6}" + H + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            $ = "\\[" + H + "*(" + R + ")(?:" + H + "*([*^$|!~]?=)" + H + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + H + "*\\]",
            q = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + $ + ")*)|.*)\\)|)",
            W = new RegExp(H + "+", "g"),
            F = new RegExp("^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$", "g"),
            Y = new RegExp("^" + H + "*," + H + "*"),
            V = new RegExp("^" + H + "*([>+~]|" + H + ")" + H + "*"),
            G = new RegExp(H + "|>"),
            X = new RegExp(q),
            U = new RegExp("^" + R + "$"),
            Q = {
                ID: new RegExp("^#(" + R + ")"),
                CLASS: new RegExp("^\\.(" + R + ")"),
                TAG: new RegExp("^(" + R + "|[*])"),
                ATTR: new RegExp("^" + $),
                PSEUDO: new RegExp("^" + q),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + H + "*(even|odd|(([+-]|)(\\d*)n|)" + H + "*(?:([+-]|)" + H + "*(\\d+)|))" + H + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + j + ")$", "i"),
                needsContext: new RegExp("^" + H + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + H + "*((?:-\\d)?\\d*)" + H + "*\\)|)(?=[^-]|$)", "i"),
            },
            K = /HTML$/i,
            J = /^(?:input|select|textarea|button)$/i,
            Z = /^h\d$/i,
            ee = /^[^{]+\{\s*\[native \w/,
            te = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ie = /[+~]/,
            ne = new RegExp("\\\\[\\da-fA-F]{1,6}" + H + "?|\\\\([^\\r\\n\\f])", "g"),
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ae = function (e, t) {
                return t ? ("\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " ") : "\\" + e;
            },
            se = ye(
                function (e) {
                    return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
                },
                { dir: "parentNode", next: "legend" }
            );
        try {
            N.apply((t = z.call(y.childNodes)), y.childNodes), t[y.childNodes.length].nodeType;
        } catch (e) {
            N = {
                apply: t.length
                    ? function (e, t) {
                          P.apply(e, z.call(t));
                      }
                    : function (e, t) {
                          for (var i = e.length, n = 0; (e[i++] = t[n++]); );
                          e.length = i - 1;
                      },
            };
        }
        function oe(t, e, i, n) {
            var r,
                a,
                s,
                o,
                l,
                d,
                u,
                c = e && e.ownerDocument,
                h = e ? e.nodeType : 9;
            if (((i = i || []), "string" != typeof t || !t || (1 !== h && 9 !== h && 11 !== h))) return i;
            if (!n && (C(e), (e = e || T), E)) {
                if (11 !== h && (l = te.exec(t)))
                    if ((r = l[1])) {
                        if (9 === h) {
                            if (!(s = e.getElementById(r))) return i;
                            if (s.id === r) return i.push(s), i;
                        } else if (c && (s = c.getElementById(r)) && v(e, s) && s.id === r) return i.push(s), i;
                    } else {
                        if (l[2]) return N.apply(i, e.getElementsByTagName(t)), i;
                        if ((r = l[3]) && p.getElementsByClassName && e.getElementsByClassName) return N.apply(i, e.getElementsByClassName(r)), i;
                    }
                if (p.qsa && !I[t + " "] && (!g || !g.test(t)) && (1 !== h || "object" !== e.nodeName.toLowerCase())) {
                    if (((u = t), (c = e), 1 === h && (G.test(t) || V.test(t)))) {
                        for (((c = (ie.test(t) && me(e.parentNode)) || e) === e && p.scope) || ((o = e.getAttribute("id")) ? (o = o.replace(re, ae)) : e.setAttribute("id", (o = S))), a = (d = f(t)).length; a--; )
                            d[a] = (o ? "#" + o : ":scope") + " " + ve(d[a]);
                        u = d.join(",");
                    }
                    try {
                        return N.apply(i, c.querySelectorAll(u)), i;
                    } catch (e) {
                        I(t, !0);
                    } finally {
                        o === S && e.removeAttribute("id");
                    }
                }
            }
            return m(t.replace(F, "$1"), e, i, n);
        }
        function le() {
            var i = [];
            function n(e, t) {
                return i.push(e + " ") > w.cacheLength && delete n[i.shift()], (n[e + " "] = t);
            }
            return n;
        }
        function de(e) {
            return (e[S] = !0), e;
        }
        function ue(e) {
            var t = T.createElement("fieldset");
            try {
                return !!e(t);
            } catch (e) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
        }
        function ce(e, t) {
            for (var i = e.split("|"), n = i.length; n--; ) w.attrHandle[i[n]] = t;
        }
        function he(e, t) {
            var i = t && e,
                n = i && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (n) return n;
            if (i) for (; (i = i.nextSibling); ) if (i === t) return -1;
            return e ? 1 : -1;
        }
        function pe(t) {
            return function (e) {
                return "form" in e
                    ? e.parentNode && !1 === e.disabled
                        ? "label" in e
                            ? "label" in e.parentNode
                                ? e.parentNode.disabled === t
                                : e.disabled === t
                            : e.isDisabled === t || (e.isDisabled !== !t && se(e) === t)
                        : e.disabled === t
                    : "label" in e && e.disabled === t;
            };
        }
        function fe(s) {
            return de(function (a) {
                return (
                    (a = +a),
                    de(function (e, t) {
                        for (var i, n = s([], e.length, a), r = n.length; r--; ) e[(i = n[r])] && (e[i] = !(t[i] = e[i]));
                    })
                );
            });
        }
        function me(e) {
            return e && void 0 !== e.getElementsByTagName && e;
        }
        for (e in ((p = oe.support = {}),
        (r = oe.isXML = function (e) {
            var t = e.namespaceURI,
                e = (e.ownerDocument || e).documentElement;
            return !K.test(t || (e && e.nodeName) || "HTML");
        }),
        (C = oe.setDocument = function (e) {
            var t,
                e = e ? e.ownerDocument || e : y;
            return (
                e != T &&
                    9 === e.nodeType &&
                    e.documentElement &&
                    ((s = (T = e).documentElement),
                    (E = !r(T)),
                    y != T && (t = T.defaultView) && t.top !== t && (t.addEventListener ? t.addEventListener("unload", n, !1) : t.attachEvent && t.attachEvent("onunload", n)),
                    (p.scope = ue(function (e) {
                        return s.appendChild(e).appendChild(T.createElement("div")), void 0 !== e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length;
                    })),
                    (p.attributes = ue(function (e) {
                        return (e.className = "i"), !e.getAttribute("className");
                    })),
                    (p.getElementsByTagName = ue(function (e) {
                        return e.appendChild(T.createComment("")), !e.getElementsByTagName("*").length;
                    })),
                    (p.getElementsByClassName = ee.test(T.getElementsByClassName)),
                    (p.getById = ue(function (e) {
                        return (s.appendChild(e).id = S), !T.getElementsByName || !T.getElementsByName(S).length;
                    })),
                    p.getById
                        ? ((w.filter.ID = function (e) {
                              var t = e.replace(ne, c);
                              return function (e) {
                                  return e.getAttribute("id") === t;
                              };
                          }),
                          (w.find.ID = function (e, t) {
                              if (void 0 !== t.getElementById && E) {
                                  e = t.getElementById(e);
                                  return e ? [e] : [];
                              }
                          }))
                        : ((w.filter.ID = function (e) {
                              var t = e.replace(ne, c);
                              return function (e) {
                                  e = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                                  return e && e.value === t;
                              };
                          }),
                          (w.find.ID = function (e, t) {
                              if (void 0 !== t.getElementById && E) {
                                  var i,
                                      n,
                                      r,
                                      a = t.getElementById(e);
                                  if (a) {
                                      if ((i = a.getAttributeNode("id")) && i.value === e) return [a];
                                      for (r = t.getElementsByName(e), n = 0; (a = r[n++]); ) if ((i = a.getAttributeNode("id")) && i.value === e) return [a];
                                  }
                                  return [];
                              }
                          })),
                    (w.find.TAG = p.getElementsByTagName
                        ? function (e, t) {
                              return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : p.qsa ? t.querySelectorAll(e) : void 0;
                          }
                        : function (e, t) {
                              var i,
                                  n = [],
                                  r = 0,
                                  a = t.getElementsByTagName(e);
                              if ("*" !== e) return a;
                              for (; (i = a[r++]); ) 1 === i.nodeType && n.push(i);
                              return n;
                          }),
                    (w.find.CLASS =
                        p.getElementsByClassName &&
                        function (e, t) {
                            if (void 0 !== t.getElementsByClassName && E) return t.getElementsByClassName(e);
                        }),
                    (o = []),
                    (g = []),
                    (p.qsa = ee.test(T.querySelectorAll)) &&
                        (ue(function (e) {
                            var t;
                            (s.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + H + "*(?:''|\"\")"),
                                e.querySelectorAll("[selected]").length || g.push("\\[" + H + "*(?:value|" + j + ")"),
                                e.querySelectorAll("[id~=" + S + "-]").length || g.push("~="),
                                (t = T.createElement("input")).setAttribute("name", ""),
                                e.appendChild(t),
                                e.querySelectorAll("[name='']").length || g.push("\\[" + H + "*name" + H + "*=" + H + "*(?:''|\"\")"),
                                e.querySelectorAll(":checked").length || g.push(":checked"),
                                e.querySelectorAll("a#" + S + "+*").length || g.push(".#.+[+~]"),
                                e.querySelectorAll("\\\f"),
                                g.push("[\\r\\n\\f]");
                        }),
                        ue(function (e) {
                            e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                            var t = T.createElement("input");
                            t.setAttribute("type", "hidden"),
                                e.appendChild(t).setAttribute("name", "D"),
                                e.querySelectorAll("[name=d]").length && g.push("name" + H + "*[*^$|!~]?="),
                                2 !== e.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"),
                                (s.appendChild(e).disabled = !0),
                                2 !== e.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"),
                                e.querySelectorAll("*,:x"),
                                g.push(",.*:");
                        })),
                    (p.matchesSelector = ee.test((u = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector))) &&
                        ue(function (e) {
                            (p.disconnectedMatch = u.call(e, "*")), u.call(e, "[s!='']:x"), o.push("!=", q);
                        }),
                    (g = g.length && new RegExp(g.join("|"))),
                    (o = o.length && new RegExp(o.join("|"))),
                    (t = ee.test(s.compareDocumentPosition)),
                    (v =
                        t || ee.test(s.contains)
                            ? function (e, t) {
                                  var i = 9 === e.nodeType ? e.documentElement : e,
                                      t = t && t.parentNode;
                                  return e === t || !(!t || 1 !== t.nodeType || !(i.contains ? i.contains(t) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(t)));
                              }
                            : function (e, t) {
                                  if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                                  return !1;
                              }),
                    (L = t
                        ? function (e, t) {
                              if (e === t) return (d = !0), 0;
                              var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                              return (
                                  i ||
                                  (1 & (i = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || (!p.sortDetached && t.compareDocumentPosition(e) === i)
                                      ? e == T || (e.ownerDocument == y && v(y, e))
                                          ? -1
                                          : t == T || (t.ownerDocument == y && v(y, t))
                                          ? 1
                                          : l
                                          ? B(l, e) - B(l, t)
                                          : 0
                                      : 4 & i
                                      ? -1
                                      : 1)
                              );
                          }
                        : function (e, t) {
                              if (e === t) return (d = !0), 0;
                              var i,
                                  n = 0,
                                  r = e.parentNode,
                                  a = t.parentNode,
                                  s = [e],
                                  o = [t];
                              if (!r || !a) return e == T ? -1 : t == T ? 1 : r ? -1 : a ? 1 : l ? B(l, e) - B(l, t) : 0;
                              if (r === a) return he(e, t);
                              for (i = e; (i = i.parentNode); ) s.unshift(i);
                              for (i = t; (i = i.parentNode); ) o.unshift(i);
                              for (; s[n] === o[n]; ) n++;
                              return n ? he(s[n], o[n]) : s[n] == y ? -1 : o[n] == y ? 1 : 0;
                          })),
                T
            );
        }),
        (oe.matches = function (e, t) {
            return oe(e, null, null, t);
        }),
        (oe.matchesSelector = function (e, t) {
            if ((C(e), p.matchesSelector && E && !I[t + " "] && (!o || !o.test(t)) && (!g || !g.test(t))))
                try {
                    var i = u.call(e, t);
                    if (i || p.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return i;
                } catch (e) {
                    I(t, !0);
                }
            return 0 < oe(t, T, null, [e]).length;
        }),
        (oe.contains = function (e, t) {
            return (e.ownerDocument || e) != T && C(e), v(e, t);
        }),
        (oe.attr = function (e, t) {
            (e.ownerDocument || e) != T && C(e);
            var i = w.attrHandle[t.toLowerCase()],
                i = i && O.call(w.attrHandle, t.toLowerCase()) ? i(e, t, !E) : void 0;
            return void 0 !== i ? i : p.attributes || !E ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
        }),
        (oe.escape = function (e) {
            return (e + "").replace(re, ae);
        }),
        (oe.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
        }),
        (oe.uniqueSort = function (e) {
            var t,
                i = [],
                n = 0,
                r = 0;
            if (((d = !p.detectDuplicates), (l = !p.sortStable && e.slice(0)), e.sort(L), d)) {
                for (; (t = e[r++]); ) t === e[r] && (n = i.push(r));
                for (; n--; ) e.splice(i[n], 1);
            }
            return (l = null), e;
        }),
        (a = oe.getText = function (e) {
            var t,
                i = "",
                n = 0,
                r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) i += a(e);
                } else if (3 === r || 4 === r) return e.nodeValue;
            } else for (; (t = e[n++]); ) i += a(t);
            return i;
        }),
        ((w = oe.selectors = {
            cacheLength: 50,
            createPseudo: de,
            match: Q,
            attrHandle: {},
            find: {},
            relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
            preFilter: {
                ATTR: function (e) {
                    return (e[1] = e[1].replace(ne, c)), (e[3] = (e[3] || e[4] || e[5] || "").replace(ne, c)), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                },
                CHILD: function (e) {
                    return (
                        (e[1] = e[1].toLowerCase()),
                        "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))), (e[5] = +(e[7] + e[8] || "odd" === e[3]))) : e[3] && oe.error(e[0]),
                        e
                    );
                },
                PSEUDO: function (e) {
                    var t,
                        i = !e[6] && e[2];
                    return Q.CHILD.test(e[0])
                        ? null
                        : (e[3] ? (e[2] = e[4] || e[5] || "") : i && X.test(i) && (t = f(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && ((e[0] = e[0].slice(0, t)), (e[2] = i.slice(0, t))), e.slice(0, 3));
                },
            },
            filter: {
                TAG: function (e) {
                    var t = e.replace(ne, c).toLowerCase();
                    return "*" === e
                        ? function () {
                              return !0;
                          }
                        : function (e) {
                              return e.nodeName && e.nodeName.toLowerCase() === t;
                          };
                },
                CLASS: function (e) {
                    var t = k[e + " "];
                    return (
                        t ||
                        ((t = new RegExp("(^|" + H + ")" + e + "(" + H + "|$)")) &&
                            k(e, function (e) {
                                return t.test(("string" == typeof e.className && e.className) || (void 0 !== e.getAttribute && e.getAttribute("class")) || "");
                            }))
                    );
                },
                ATTR: function (t, i, n) {
                    return function (e) {
                        e = oe.attr(e, t);
                        return null == e
                            ? "!=" === i
                            : !i ||
                                  ((e += ""),
                                  "=" === i
                                      ? e === n
                                      : "!=" === i
                                      ? e !== n
                                      : "^=" === i
                                      ? n && 0 === e.indexOf(n)
                                      : "*=" === i
                                      ? n && -1 < e.indexOf(n)
                                      : "$=" === i
                                      ? n && e.slice(-n.length) === n
                                      : "~=" === i
                                      ? -1 < (" " + e.replace(W, " ") + " ").indexOf(n)
                                      : "|=" === i && (e === n || e.slice(0, n.length + 1) === n + "-"));
                    };
                },
                CHILD: function (f, e, t, m, g) {
                    var v = "nth" !== f.slice(0, 3),
                        y = "last" !== f.slice(-4),
                        b = "of-type" === e;
                    return 1 === m && 0 === g
                        ? function (e) {
                              return !!e.parentNode;
                          }
                        : function (e, t, i) {
                              var n,
                                  r,
                                  a,
                                  s,
                                  o,
                                  l,
                                  d = v != y ? "nextSibling" : "previousSibling",
                                  u = e.parentNode,
                                  c = b && e.nodeName.toLowerCase(),
                                  h = !i && !b,
                                  p = !1;
                              if (u) {
                                  if (v) {
                                      for (; d; ) {
                                          for (s = e; (s = s[d]); ) if (b ? s.nodeName.toLowerCase() === c : 1 === s.nodeType) return !1;
                                          l = d = "only" === f && !l && "nextSibling";
                                      }
                                      return !0;
                                  }
                                  if (((l = [y ? u.firstChild : u.lastChild]), y && h)) {
                                      for (
                                          p = (o = (n = (r = (a = (s = u)[S] || (s[S] = {}))[s.uniqueID] || (a[s.uniqueID] = {}))[f] || [])[0] === _ && n[1]) && n[2], s = o && u.childNodes[o];
                                          (s = (++o && s && s[d]) || (p = o = 0) || l.pop());

                                      )
                                          if (1 === s.nodeType && ++p && s === e) {
                                              r[f] = [_, o, p];
                                              break;
                                          }
                                  } else if (!1 === (p = h ? (o = (n = (r = (a = (s = e)[S] || (s[S] = {}))[s.uniqueID] || (a[s.uniqueID] = {}))[f] || [])[0] === _ && n[1]) : p))
                                      for (
                                          ;
                                          (s = (++o && s && s[d]) || (p = o = 0) || l.pop()) &&
                                          ((b ? s.nodeName.toLowerCase() !== c : 1 !== s.nodeType) || !++p || (h && ((r = (a = s[S] || (s[S] = {}))[s.uniqueID] || (a[s.uniqueID] = {}))[f] = [_, p]), s !== e));

                                      );
                                  return (p -= g) === m || (p % m == 0 && 0 <= p / m);
                              }
                          };
                },
                PSEUDO: function (e, a) {
                    var t,
                        s = w.pseudos[e] || w.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                    return s[S]
                        ? s(a)
                        : 1 < s.length
                        ? ((t = [e, e, "", a]),
                          w.setFilters.hasOwnProperty(e.toLowerCase())
                              ? de(function (e, t) {
                                    for (var i, n = s(e, a), r = n.length; r--; ) e[(i = B(e, n[r]))] = !(t[i] = n[r]);
                                })
                              : function (e) {
                                    return s(e, 0, t);
                                })
                        : s;
                },
            },
            pseudos: {
                not: de(function (e) {
                    var n = [],
                        r = [],
                        o = h(e.replace(F, "$1"));
                    return o[S]
                        ? de(function (e, t, i, n) {
                              for (var r, a = o(e, null, n, []), s = e.length; s--; ) (r = a[s]) && (e[s] = !(t[s] = r));
                          })
                        : function (e, t, i) {
                              return (n[0] = e), o(n, null, i, r), (n[0] = null), !r.pop();
                          };
                }),
                has: de(function (t) {
                    return function (e) {
                        return 0 < oe(t, e).length;
                    };
                }),
                contains: de(function (t) {
                    return (
                        (t = t.replace(ne, c)),
                        function (e) {
                            return -1 < (e.textContent || a(e)).indexOf(t);
                        }
                    );
                }),
                lang: de(function (i) {
                    return (
                        U.test(i || "") || oe.error("unsupported lang: " + i),
                        (i = i.replace(ne, c).toLowerCase()),
                        function (e) {
                            var t;
                            do {
                                if ((t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))) return (t = t.toLowerCase()) === i || 0 === t.indexOf(i + "-");
                            } while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1;
                        }
                    );
                }),
                target: function (e) {
                    var t = i.location && i.location.hash;
                    return t && t.slice(1) === e.id;
                },
                root: function (e) {
                    return e === s;
                },
                focus: function (e) {
                    return e === T.activeElement && (!T.hasFocus || T.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                },
                enabled: pe(!1),
                disabled: pe(!0),
                checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
                },
                selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                },
                empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0;
                },
                parent: function (e) {
                    return !w.pseudos.empty(e);
                },
                header: function (e) {
                    return Z.test(e.nodeName);
                },
                input: function (e) {
                    return J.test(e.nodeName);
                },
                button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t && "button" === e.type) || "button" === t;
                },
                text: function (e) {
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (e = e.getAttribute("type")) || "text" === e.toLowerCase());
                },
                first: fe(function () {
                    return [0];
                }),
                last: fe(function (e, t) {
                    return [t - 1];
                }),
                eq: fe(function (e, t, i) {
                    return [i < 0 ? i + t : i];
                }),
                even: fe(function (e, t) {
                    for (var i = 0; i < t; i += 2) e.push(i);
                    return e;
                }),
                odd: fe(function (e, t) {
                    for (var i = 1; i < t; i += 2) e.push(i);
                    return e;
                }),
                lt: fe(function (e, t, i) {
                    for (var n = i < 0 ? i + t : t < i ? t : i; 0 <= --n; ) e.push(n);
                    return e;
                }),
                gt: fe(function (e, t, i) {
                    for (var n = i < 0 ? i + t : i; ++n < t; ) e.push(n);
                    return e;
                }),
            },
        }).pseudos.nth = w.pseudos.eq),
        { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            w.pseudos[e] = (function (t) {
                return function (e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t;
                };
            })(e);
        for (e in { submit: !0, reset: !0 })
            w.pseudos[e] = (function (i) {
                return function (e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t || "button" === t) && e.type === i;
                };
            })(e);
        function ge() {}
        function ve(e) {
            for (var t = 0, i = e.length, n = ""; t < i; t++) n += e[t].value;
            return n;
        }
        function ye(s, e, t) {
            var o = e.dir,
                l = e.next,
                d = l || o,
                u = t && "parentNode" === d,
                c = b++;
            return e.first
                ? function (e, t, i) {
                      for (; (e = e[o]); ) if (1 === e.nodeType || u) return s(e, t, i);
                      return !1;
                  }
                : function (e, t, i) {
                      var n,
                          r,
                          a = [_, c];
                      if (i) {
                          for (; (e = e[o]); ) if ((1 === e.nodeType || u) && s(e, t, i)) return !0;
                      } else
                          for (; (e = e[o]); )
                              if (1 === e.nodeType || u)
                                  if (((n = (r = e[S] || (e[S] = {}))[e.uniqueID] || (r[e.uniqueID] = {})), l && l === e.nodeName.toLowerCase())) e = e[o] || e;
                                  else {
                                      if ((r = n[d]) && r[0] === _ && r[1] === c) return (a[2] = r[2]);
                                      if (((n[d] = a)[2] = s(e, t, i))) return !0;
                                  }
                      return !1;
                  };
        }
        function be(r) {
            return 1 < r.length
                ? function (e, t, i) {
                      for (var n = r.length; n--; ) if (!r[n](e, t, i)) return !1;
                      return !0;
                  }
                : r[0];
        }
        function we(e, t, i, n, r) {
            for (var a, s = [], o = 0, l = e.length, d = null != t; o < l; o++) (a = e[o]) && ((i && !i(a, n, r)) || (s.push(a), d && t.push(o)));
            return s;
        }
        function xe(p, f, m, g, v, e) {
            return (
                g && !g[S] && (g = xe(g)),
                v && !v[S] && (v = xe(v, e)),
                de(function (e, t, i, n) {
                    var r,
                        a,
                        s,
                        o = [],
                        l = [],
                        d = t.length,
                        u =
                            e ||
                            (function (e, t, i) {
                                for (var n = 0, r = t.length; n < r; n++) oe(e, t[n], i);
                                return i;
                            })(f || "*", i.nodeType ? [i] : i, []),
                        c = !p || (!e && f) ? u : we(u, o, p, i, n),
                        h = m ? (v || (e ? p : d || g) ? [] : t) : c;
                    if ((m && m(c, h, i, n), g)) for (r = we(h, l), g(r, [], i, n), a = r.length; a--; ) (s = r[a]) && (h[l[a]] = !(c[l[a]] = s));
                    if (e) {
                        if (v || p) {
                            if (v) {
                                for (r = [], a = h.length; a--; ) (s = h[a]) && r.push((c[a] = s));
                                v(null, (h = []), r, n);
                            }
                            for (a = h.length; a--; ) (s = h[a]) && -1 < (r = v ? B(e, s) : o[a]) && (e[r] = !(t[r] = s));
                        }
                    } else (h = we(h === t ? h.splice(d, h.length) : h)), v ? v(null, t, h, n) : N.apply(t, h);
                })
            );
        }
        function Ce(g, v) {
            function e(e, t, i, n, r) {
                var a,
                    s,
                    o,
                    l = 0,
                    d = "0",
                    u = e && [],
                    c = [],
                    h = x,
                    p = e || (b && w.find.TAG("*", r)),
                    f = (_ += null == h ? 1 : Math.random() || 0.1),
                    m = p.length;
                for (r && (x = t == T || t || r); d !== m && null != (a = p[d]); d++) {
                    if (b && a) {
                        for (s = 0, t || a.ownerDocument == T || (C(a), (i = !E)); (o = g[s++]); )
                            if (o(a, t || T, i)) {
                                n.push(a);
                                break;
                            }
                        r && (_ = f);
                    }
                    y && ((a = !o && a) && l--, e && u.push(a));
                }
                if (((l += d), y && d !== l)) {
                    for (s = 0; (o = v[s++]); ) o(u, c, t, i);
                    if (e) {
                        if (0 < l) for (; d--; ) u[d] || c[d] || (c[d] = A.call(n));
                        c = we(c);
                    }
                    N.apply(n, c), r && !e && 0 < c.length && 1 < l + v.length && oe.uniqueSort(n);
                }
                return r && ((_ = f), (x = h)), u;
            }
            var y = 0 < v.length,
                b = 0 < g.length;
            return y ? de(e) : e;
        }
        return (
            (ge.prototype = w.filters = w.pseudos),
            (w.setFilters = new ge()),
            (f = oe.tokenize = function (e, t) {
                var i,
                    n,
                    r,
                    a,
                    s,
                    o,
                    l,
                    d = M[e + " "];
                if (d) return t ? 0 : d.slice(0);
                for (s = e, o = [], l = w.preFilter; s; ) {
                    for (a in ((i && !(n = Y.exec(s))) || (n && (s = s.slice(n[0].length) || s), o.push((r = []))),
                    (i = !1),
                    (n = V.exec(s)) && ((i = n.shift()), r.push({ value: i, type: n[0].replace(F, " ") }), (s = s.slice(i.length))),
                    w.filter))
                        !(n = Q[a].exec(s)) || (l[a] && !(n = l[a](n))) || ((i = n.shift()), r.push({ value: i, type: a, matches: n }), (s = s.slice(i.length)));
                    if (!i) break;
                }
                return t ? s.length : s ? oe.error(e) : M(e, o).slice(0);
            }),
            (h = oe.compile = function (e, t) {
                var i,
                    n = [],
                    r = [],
                    a = D[e + " "];
                if (!a) {
                    for (i = (t = t || f(e)).length; i--; )
                        ((a = (function e(t) {
                            for (
                                var n,
                                    i,
                                    r,
                                    a = t.length,
                                    s = w.relative[t[0].type],
                                    o = s || w.relative[" "],
                                    l = s ? 1 : 0,
                                    d = ye(
                                        function (e) {
                                            return e === n;
                                        },
                                        o,
                                        !0
                                    ),
                                    u = ye(
                                        function (e) {
                                            return -1 < B(n, e);
                                        },
                                        o,
                                        !0
                                    ),
                                    c = [
                                        function (e, t, i) {
                                            return (i = (!s && (i || t !== x)) || ((n = t).nodeType ? d : u)(e, t, i)), (n = null), i;
                                        },
                                    ];
                                l < a;
                                l++
                            )
                                if ((i = w.relative[t[l].type])) c = [ye(be(c), i)];
                                else {
                                    if ((i = w.filter[t[l].type].apply(null, t[l].matches))[S]) {
                                        for (r = ++l; r < a && !w.relative[t[r].type]; r++);
                                        return xe(
                                            1 < l && be(c),
                                            1 < l && ve(t.slice(0, l - 1).concat({ value: " " === t[l - 2].type ? "*" : "" })).replace(F, "$1"),
                                            i,
                                            l < r && e(t.slice(l, r)),
                                            r < a && e((t = t.slice(r))),
                                            r < a && ve(t)
                                        );
                                    }
                                    c.push(i);
                                }
                            return be(c);
                        })(t[i]))[S]
                            ? n
                            : r
                        ).push(a);
                    (a = D(e, Ce(r, n))).selector = e;
                }
                return a;
            }),
            (m = oe.select = function (e, t, i, n) {
                var r,
                    a,
                    s,
                    o,
                    l,
                    d = "function" == typeof e && e,
                    u = !n && f((e = d.selector || e));
                if (((i = i || []), 1 === u.length)) {
                    if (2 < (a = u[0] = u[0].slice(0)).length && "ID" === (s = a[0]).type && 9 === t.nodeType && E && w.relative[a[1].type]) {
                        if (!(t = (w.find.ID(s.matches[0].replace(ne, c), t) || [])[0])) return i;
                        d && (t = t.parentNode), (e = e.slice(a.shift().value.length));
                    }
                    for (r = Q.needsContext.test(e) ? 0 : a.length; r-- && ((s = a[r]), !w.relative[(o = s.type)]); )
                        if ((l = w.find[o]) && (n = l(s.matches[0].replace(ne, c), (ie.test(a[0].type) && me(t.parentNode)) || t))) {
                            if ((a.splice(r, 1), !(e = n.length && ve(a)))) return N.apply(i, n), i;
                            break;
                        }
                }
                return (d || h(e, u))(n, t, !E, i, !t || (ie.test(e) && me(t.parentNode)) || t), i;
            }),
            (p.sortStable = S.split("").sort(L).join("") === S),
            (p.detectDuplicates = !!d),
            C(),
            (p.sortDetached = ue(function (e) {
                return 1 & e.compareDocumentPosition(T.createElement("fieldset"));
            })),
            ue(function (e) {
                return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
            }) ||
                ce("type|href|height|width", function (e, t, i) {
                    if (!i) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
                }),
            (p.attributes &&
                ue(function (e) {
                    return (e.innerHTML = "<input/>"), e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
                })) ||
                ce("value", function (e, t, i) {
                    if (!i && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
                }),
            ue(function (e) {
                return null == e.getAttribute("disabled");
            }) ||
                ce(j, function (e, t, i) {
                    if (!i) return !0 === e[t] ? t.toLowerCase() : (t = e.getAttributeNode(t)) && t.specified ? t.value : null;
                }),
            oe
        );
    })(C);
    (E.find = p), (E.expr = p.selectors), (E.expr[":"] = E.expr.pseudos), (E.uniqueSort = E.unique = p.uniqueSort), (E.text = p.getText), (E.isXMLDoc = p.isXML), (E.contains = p.contains), (E.escapeSelector = p.escape);
    function x(e, t, i) {
        for (var n = [], r = void 0 !== i; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (r && E(e).is(i)) break;
                n.push(e);
            }
        return n;
    }
    function S(e, t) {
        for (var i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e);
        return i;
    }
    var _ = E.expr.match.needsContext;
    function k(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }
    var M = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function D(e, i, n) {
        return b(i)
            ? E.grep(e, function (e, t) {
                  return !!i.call(e, t, e) !== n;
              })
            : i.nodeType
            ? E.grep(e, function (e) {
                  return (e === i) !== n;
              })
            : "string" != typeof i
            ? E.grep(e, function (e) {
                  return -1 < r.call(i, e) !== n;
              })
            : E.filter(i, e, n);
    }
    (E.filter = function (e, t, i) {
        var n = t[0];
        return (
            i && (e = ":not(" + e + ")"),
            1 === t.length && 1 === n.nodeType
                ? E.find.matchesSelector(n, e)
                    ? [n]
                    : []
                : E.find.matches(
                      e,
                      E.grep(t, function (e) {
                          return 1 === e.nodeType;
                      })
                  )
        );
    }),
        E.fn.extend({
            find: function (e) {
                var t,
                    i,
                    n = this.length,
                    r = this;
                if ("string" != typeof e)
                    return this.pushStack(
                        E(e).filter(function () {
                            for (t = 0; t < n; t++) if (E.contains(r[t], this)) return !0;
                        })
                    );
                for (i = this.pushStack([]), t = 0; t < n; t++) E.find(e, r[t], i);
                return 1 < n ? E.uniqueSort(i) : i;
            },
            filter: function (e) {
                return this.pushStack(D(this, e || [], !1));
            },
            not: function (e) {
                return this.pushStack(D(this, e || [], !0));
            },
            is: function (e) {
                return !!D(this, "string" == typeof e && _.test(e) ? E(e) : e || [], !1).length;
            },
        });
    var I = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (E.fn.init = function (e, t, i) {
        if (!e) return this;
        if (((i = i || L), "string" != typeof e)) return e.nodeType ? ((this[0] = e), (this.length = 1), this) : b(e) ? (void 0 !== i.ready ? i.ready(e) : e(E)) : E.makeArray(e, this);
        if (!(n = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : I.exec(e)) || (!n[1] && t)) return (!t || t.jquery ? t || i : this.constructor(t)).find(e);
        if (n[1]) {
            if (((t = t instanceof E ? t[0] : t), E.merge(this, E.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : T, !0)), M.test(n[1]) && E.isPlainObject(t))) for (var n in t) b(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
            return this;
        }
        return (e = T.getElementById(n[2])) && ((this[0] = e), (this.length = 1)), this;
    }).prototype = E.fn;
    var L = E(T),
        O = /^(?:parents|prev(?:Until|All))/,
        A = { children: !0, contents: !0, next: !0, prev: !0 };
    function P(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; );
        return e;
    }
    E.fn.extend({
        has: function (e) {
            var t = E(e, this),
                i = t.length;
            return this.filter(function () {
                for (var e = 0; e < i; e++) if (E.contains(this, t[e])) return !0;
            });
        },
        closest: function (e, t) {
            var i,
                n = 0,
                r = this.length,
                a = [],
                s = "string" != typeof e && E(e);
            if (!_.test(e))
                for (; n < r; n++)
                    for (i = this[n]; i && i !== t; i = i.parentNode)
                        if (i.nodeType < 11 && (s ? -1 < s.index(i) : 1 === i.nodeType && E.find.matchesSelector(i, e))) {
                            a.push(i);
                            break;
                        }
            return this.pushStack(1 < a.length ? E.uniqueSort(a) : a);
        },
        index: function (e) {
            return e ? ("string" == typeof e ? r.call(E(e), this[0]) : r.call(this, e.jquery ? e[0] : e)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function (e, t) {
            return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))));
        },
        addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        },
    }),
        E.each(
            {
                parent: function (e) {
                    e = e.parentNode;
                    return e && 11 !== e.nodeType ? e : null;
                },
                parents: function (e) {
                    return x(e, "parentNode");
                },
                parentsUntil: function (e, t, i) {
                    return x(e, "parentNode", i);
                },
                next: function (e) {
                    return P(e, "nextSibling");
                },
                prev: function (e) {
                    return P(e, "previousSibling");
                },
                nextAll: function (e) {
                    return x(e, "nextSibling");
                },
                prevAll: function (e) {
                    return x(e, "previousSibling");
                },
                nextUntil: function (e, t, i) {
                    return x(e, "nextSibling", i);
                },
                prevUntil: function (e, t, i) {
                    return x(e, "previousSibling", i);
                },
                siblings: function (e) {
                    return S((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                    return S(e.firstChild);
                },
                contents: function (e) {
                    return null != e.contentDocument && i(e.contentDocument) ? e.contentDocument : (k(e, "template") && (e = e.content || e), E.merge([], e.childNodes));
                },
            },
            function (n, r) {
                E.fn[n] = function (e, t) {
                    var i = E.map(this, r, e);
                    return (t = "Until" !== n.slice(-5) ? e : t) && "string" == typeof t && (i = E.filter(t, i)), 1 < this.length && (A[n] || E.uniqueSort(i), O.test(n) && i.reverse()), this.pushStack(i);
                };
            }
        );
    var N = /[^\x20\t\r\n\f]+/g;
    function z(e) {
        return e;
    }
    function B(e) {
        throw e;
    }
    function j(e, t, i, n) {
        var r;
        try {
            e && b((r = e.promise)) ? r.call(e).done(t).fail(i) : e && b((r = e.then)) ? r.call(e, t, i) : t.apply(void 0, [e].slice(n));
        } catch (e) {
            i.apply(void 0, [e]);
        }
    }
    (E.Callbacks = function (n) {
        var e, i;
        n =
            "string" == typeof n
                ? ((e = n),
                  (i = {}),
                  E.each(e.match(N) || [], function (e, t) {
                      i[t] = !0;
                  }),
                  i)
                : E.extend({}, n);
        function r() {
            for (o = o || n.once, s = a = !0; d.length; u = -1) for (t = d.shift(); ++u < l.length; ) !1 === l[u].apply(t[0], t[1]) && n.stopOnFalse && ((u = l.length), (t = !1));
            n.memory || (t = !1), (a = !1), o && (l = t ? [] : "");
        }
        var a,
            t,
            s,
            o,
            l = [],
            d = [],
            u = -1,
            c = {
                add: function () {
                    return (
                        l &&
                            (t && !a && ((u = l.length - 1), d.push(t)),
                            (function i(e) {
                                E.each(e, function (e, t) {
                                    b(t) ? (n.unique && c.has(t)) || l.push(t) : t && t.length && "string" !== f(t) && i(t);
                                });
                            })(arguments),
                            t && !a && r()),
                        this
                    );
                },
                remove: function () {
                    return (
                        E.each(arguments, function (e, t) {
                            for (var i; -1 < (i = E.inArray(t, l, i)); ) l.splice(i, 1), i <= u && u--;
                        }),
                        this
                    );
                },
                has: function (e) {
                    return e ? -1 < E.inArray(e, l) : 0 < l.length;
                },
                empty: function () {
                    return (l = l && []), this;
                },
                disable: function () {
                    return (o = d = []), (l = t = ""), this;
                },
                disabled: function () {
                    return !l;
                },
                lock: function () {
                    return (o = d = []), t || a || (l = t = ""), this;
                },
                locked: function () {
                    return !!o;
                },
                fireWith: function (e, t) {
                    return o || ((t = [e, (t = t || []).slice ? t.slice() : t]), d.push(t), a || r()), this;
                },
                fire: function () {
                    return c.fireWith(this, arguments), this;
                },
                fired: function () {
                    return !!s;
                },
            };
        return c;
    }),
        E.extend({
            Deferred: function (e) {
                var a = [
                        ["notify", "progress", E.Callbacks("memory"), E.Callbacks("memory"), 2],
                        ["resolve", "done", E.Callbacks("once memory"), E.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", E.Callbacks("once memory"), E.Callbacks("once memory"), 1, "rejected"],
                    ],
                    r = "pending",
                    s = {
                        state: function () {
                            return r;
                        },
                        always: function () {
                            return o.done(arguments).fail(arguments), this;
                        },
                        catch: function (e) {
                            return s.then(null, e);
                        },
                        pipe: function () {
                            var r = arguments;
                            return E.Deferred(function (n) {
                                E.each(a, function (e, t) {
                                    var i = b(r[t[4]]) && r[t[4]];
                                    o[t[1]](function () {
                                        var e = i && i.apply(this, arguments);
                                        e && b(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[t[0] + "With"](this, i ? [e] : arguments);
                                    });
                                }),
                                    (r = null);
                            }).promise();
                        },
                        then: function (t, i, n) {
                            var l = 0;
                            function d(r, a, s, o) {
                                return function () {
                                    function e() {
                                        var e, t;
                                        if (!(r < l)) {
                                            if ((e = s.apply(i, n)) === a.promise()) throw new TypeError("Thenable self-resolution");
                                            (t = e && ("object" == typeof e || "function" == typeof e) && e.then),
                                                b(t)
                                                    ? o
                                                        ? t.call(e, d(l, a, z, o), d(l, a, B, o))
                                                        : (l++, t.call(e, d(l, a, z, o), d(l, a, B, o), d(l, a, z, a.notifyWith)))
                                                    : (s !== z && ((i = void 0), (n = [e])), (o || a.resolveWith)(i, n));
                                        }
                                    }
                                    var i = this,
                                        n = arguments,
                                        t = o
                                            ? e
                                            : function () {
                                                  try {
                                                      e();
                                                  } catch (e) {
                                                      E.Deferred.exceptionHook && E.Deferred.exceptionHook(e, t.stackTrace), l <= r + 1 && (s !== B && ((i = void 0), (n = [e])), a.rejectWith(i, n));
                                                  }
                                              };
                                    r ? t() : (E.Deferred.getStackHook && (t.stackTrace = E.Deferred.getStackHook()), C.setTimeout(t));
                                };
                            }
                            return E.Deferred(function (e) {
                                a[0][3].add(d(0, e, b(n) ? n : z, e.notifyWith)), a[1][3].add(d(0, e, b(t) ? t : z)), a[2][3].add(d(0, e, b(i) ? i : B));
                            }).promise();
                        },
                        promise: function (e) {
                            return null != e ? E.extend(e, s) : s;
                        },
                    },
                    o = {};
                return (
                    E.each(a, function (e, t) {
                        var i = t[2],
                            n = t[5];
                        (s[t[1]] = i.add),
                            n &&
                                i.add(
                                    function () {
                                        r = n;
                                    },
                                    a[3 - e][2].disable,
                                    a[3 - e][3].disable,
                                    a[0][2].lock,
                                    a[0][3].lock
                                ),
                            i.add(t[3].fire),
                            (o[t[0]] = function () {
                                return o[t[0] + "With"](this === o ? void 0 : this, arguments), this;
                            }),
                            (o[t[0] + "With"] = i.fireWith);
                    }),
                    s.promise(o),
                    e && e.call(o, o),
                    o
                );
            },
            when: function (e) {
                function t(t) {
                    return function (e) {
                        (r[t] = this), (a[t] = 1 < arguments.length ? o.call(arguments) : e), --i || s.resolveWith(r, a);
                    };
                }
                var i = arguments.length,
                    n = i,
                    r = Array(n),
                    a = o.call(arguments),
                    s = E.Deferred();
                if (i <= 1 && (j(e, s.done(t(n)).resolve, s.reject, !i), "pending" === s.state() || b(a[n] && a[n].then))) return s.then();
                for (; n--; ) j(a[n], t(n), s.reject);
                return s.promise();
            },
        });
    var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (E.Deferred.exceptionHook = function (e, t) {
        C.console && C.console.warn && e && H.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
    }),
        (E.readyException = function (e) {
            C.setTimeout(function () {
                throw e;
            });
        });
    var R = E.Deferred();
    function $() {
        T.removeEventListener("DOMContentLoaded", $), C.removeEventListener("load", $), E.ready();
    }
    (E.fn.ready = function (e) {
        return (
            R.then(e).catch(function (e) {
                E.readyException(e);
            }),
            this
        );
    }),
        E.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (e) {
                (!0 === e ? --E.readyWait : E.isReady) || ((E.isReady = !0) !== e && 0 < --E.readyWait) || R.resolveWith(T, [E]);
            },
        }),
        (E.ready.then = R.then),
        "complete" === T.readyState || ("loading" !== T.readyState && !T.documentElement.doScroll) ? C.setTimeout(E.ready) : (T.addEventListener("DOMContentLoaded", $), C.addEventListener("load", $));
    var q = function (e, t, i, n, r, a, s) {
            var o = 0,
                l = e.length,
                d = null == i;
            if ("object" === f(i)) for (o in ((r = !0), i)) q(e, t, o, i[o], !0, a, s);
            else if (
                void 0 !== n &&
                ((r = !0),
                b(n) || (s = !0),
                (t = d
                    ? s
                        ? (t.call(e, n), null)
                        : ((d = t),
                          function (e, t, i) {
                              return d.call(E(e), i);
                          })
                    : t))
            )
                for (; o < l; o++) t(e[o], i, s ? n : n.call(e[o], o, t(e[o], i)));
            return r ? e : d ? t.call(e) : l ? t(e[0], i) : a;
        },
        W = /^-ms-/,
        F = /-([a-z])/g;
    function Y(e, t) {
        return t.toUpperCase();
    }
    function V(e) {
        return e.replace(W, "ms-").replace(F, Y);
    }
    function G(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    }
    function X() {
        this.expando = E.expando + X.uid++;
    }
    (X.uid = 1),
        (X.prototype = {
            cache: function (e) {
                var t = e[this.expando];
                return t || ((t = {}), G(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
            },
            set: function (e, t, i) {
                var n,
                    r = this.cache(e);
                if ("string" == typeof t) r[V(t)] = i;
                else for (n in t) r[V(n)] = t[n];
                return r;
            },
            get: function (e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)];
            },
            access: function (e, t, i) {
                return void 0 === t || (t && "string" == typeof t && void 0 === i) ? this.get(e, t) : (this.set(e, t, i), void 0 !== i ? i : t);
            },
            remove: function (e, t) {
                var i,
                    n = e[this.expando];
                if (void 0 !== n) {
                    if (void 0 !== t) {
                        i = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in n ? [t] : t.match(N) || []).length;
                        for (; i--; ) delete n[t[i]];
                    }
                    (void 0 !== t && !E.isEmptyObject(n)) || (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
                }
            },
            hasData: function (e) {
                e = e[this.expando];
                return void 0 !== e && !E.isEmptyObject(e);
            },
        });
    var U = new X(),
        Q = new X(),
        K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        J = /[A-Z]/g;
    function Z(e, t, i) {
        var n, r;
        if (void 0 === i && 1 === e.nodeType)
            if (((n = "data-" + t.replace(J, "-$&").toLowerCase()), "string" == typeof (i = e.getAttribute(n)))) {
                try {
                    i = "true" === (r = i) || ("false" !== r && ("null" === r ? null : r === +r + "" ? +r : K.test(r) ? JSON.parse(r) : r));
                } catch (e) {}
                Q.set(e, t, i);
            } else i = void 0;
        return i;
    }
    E.extend({
        hasData: function (e) {
            return Q.hasData(e) || U.hasData(e);
        },
        data: function (e, t, i) {
            return Q.access(e, t, i);
        },
        removeData: function (e, t) {
            Q.remove(e, t);
        },
        _data: function (e, t, i) {
            return U.access(e, t, i);
        },
        _removeData: function (e, t) {
            U.remove(e, t);
        },
    }),
        E.fn.extend({
            data: function (i, e) {
                var t,
                    n,
                    r,
                    a = this[0],
                    s = a && a.attributes;
                if (void 0 !== i)
                    return "object" == typeof i
                        ? this.each(function () {
                              Q.set(this, i);
                          })
                        : q(
                              this,
                              function (e) {
                                  var t;
                                  return a && void 0 === e
                                      ? void 0 !== (t = Q.get(a, i)) || void 0 !== (t = Z(a, i))
                                          ? t
                                          : void 0
                                      : void this.each(function () {
                                            Q.set(this, i, e);
                                        });
                              },
                              null,
                              e,
                              1 < arguments.length,
                              null,
                              !0
                          );
                if (this.length && ((r = Q.get(a)), 1 === a.nodeType && !U.get(a, "hasDataAttrs"))) {
                    for (t = s.length; t--; ) s[t] && 0 === (n = s[t].name).indexOf("data-") && ((n = V(n.slice(5))), Z(a, n, r[n]));
                    U.set(a, "hasDataAttrs", !0);
                }
                return r;
            },
            removeData: function (e) {
                return this.each(function () {
                    Q.remove(this, e);
                });
            },
        }),
        E.extend({
            queue: function (e, t, i) {
                var n;
                if (e) return (t = (t || "fx") + "queue"), (n = U.get(e, t)), i && (!n || Array.isArray(i) ? (n = U.access(e, t, E.makeArray(i))) : n.push(i)), n || [];
            },
            dequeue: function (e, t) {
                t = t || "fx";
                var i = E.queue(e, t),
                    n = i.length,
                    r = i.shift(),
                    a = E._queueHooks(e, t);
                "inprogress" === r && ((r = i.shift()), n--),
                    r &&
                        ("fx" === t && i.unshift("inprogress"),
                        delete a.stop,
                        r.call(
                            e,
                            function () {
                                E.dequeue(e, t);
                            },
                            a
                        )),
                    !n && a && a.empty.fire();
            },
            _queueHooks: function (e, t) {
                var i = t + "queueHooks";
                return (
                    U.get(e, i) ||
                    U.access(e, i, {
                        empty: E.Callbacks("once memory").add(function () {
                            U.remove(e, [t + "queue", i]);
                        }),
                    })
                );
            },
        }),
        E.fn.extend({
            queue: function (t, i) {
                var e = 2;
                return (
                    "string" != typeof t && ((i = t), (t = "fx"), e--),
                    arguments.length < e
                        ? E.queue(this[0], t)
                        : void 0 === i
                        ? this
                        : this.each(function () {
                              var e = E.queue(this, t, i);
                              E._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && E.dequeue(this, t);
                          })
                );
            },
            dequeue: function (e) {
                return this.each(function () {
                    E.dequeue(this, e);
                });
            },
            clearQueue: function (e) {
                return this.queue(e || "fx", []);
            },
            promise: function (e, t) {
                function i() {
                    --r || a.resolveWith(s, [s]);
                }
                var n,
                    r = 1,
                    a = E.Deferred(),
                    s = this,
                    o = this.length;
                for ("string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; o--; ) (n = U.get(s[o], e + "queueHooks")) && n.empty && (r++, n.empty.add(i));
                return i(), a.promise(t);
            },
        });
    var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
        ie = ["Top", "Right", "Bottom", "Left"],
        ne = T.documentElement,
        re = function (e) {
            return E.contains(e.ownerDocument, e);
        },
        ae = { composed: !0 };
    ne.getRootNode &&
        (re = function (e) {
            return E.contains(e.ownerDocument, e) || e.getRootNode(ae) === e.ownerDocument;
        });
    var se = function (e, t) {
        return "none" === (e = t || e).style.display || ("" === e.style.display && re(e) && "none" === E.css(e, "display"));
    };
    function oe(e, t, i, n) {
        var r,
            a,
            s = 20,
            o = n
                ? function () {
                      return n.cur();
                  }
                : function () {
                      return E.css(e, t, "");
                  },
            l = o(),
            d = (i && i[3]) || (E.cssNumber[t] ? "" : "px"),
            u = e.nodeType && (E.cssNumber[t] || ("px" !== d && +l)) && te.exec(E.css(e, t));
        if (u && u[3] !== d) {
            for (l /= 2, d = d || u[3], u = +l || 1; s--; ) E.style(e, t, u + d), (1 - a) * (1 - (a = o() / l || 0.5)) <= 0 && (s = 0), (u /= a);
            (u *= 2), E.style(e, t, u + d), (i = i || []);
        }
        return i && ((u = +u || +l || 0), (r = i[1] ? u + (i[1] + 1) * i[2] : +i[2]), n && ((n.unit = d), (n.start = u), (n.end = r))), r;
    }
    var le = {};
    function de(e, t) {
        for (var i, n, r, a, s, o = [], l = 0, d = e.length; l < d; l++)
            (n = e[l]).style &&
                ((i = n.style.display),
                t
                    ? ("none" === i && ((o[l] = U.get(n, "display") || null), o[l] || (n.style.display = "")),
                      "" === n.style.display &&
                          se(n) &&
                          (o[l] =
                              ((s = a = void 0),
                              (a = (r = n).ownerDocument),
                              (s = r.nodeName),
                              (r = le[s]) || ((a = a.body.appendChild(a.createElement(s))), (r = E.css(a, "display")), a.parentNode.removeChild(a), "none" === r && (r = "block"), (le[s] = r)))))
                    : "none" !== i && ((o[l] = "none"), U.set(n, "display", i)));
        for (l = 0; l < d; l++) null != o[l] && (e[l].style.display = o[l]);
        return e;
    }
    E.fn.extend({
        show: function () {
            return de(this, !0);
        },
        hide: function () {
            return de(this);
        },
        toggle: function (e) {
            return "boolean" == typeof e
                ? e
                    ? this.show()
                    : this.hide()
                : this.each(function () {
                      se(this) ? E(this).show() : E(this).hide();
                  });
        },
    });
    var ue = /^(?:checkbox|radio)$/i,
        ce = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        he = /^$|^module$|\/(?:java|ecma)script/i;
    (c = T.createDocumentFragment().appendChild(T.createElement("div"))),
        (p = T.createElement("input")).setAttribute("type", "radio"),
        p.setAttribute("checked", "checked"),
        p.setAttribute("name", "t"),
        c.appendChild(p),
        (y.checkClone = c.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (c.innerHTML = "<textarea>x</textarea>"),
        (y.noCloneChecked = !!c.cloneNode(!0).lastChild.defaultValue),
        (c.innerHTML = "<option></option>"),
        (y.option = !!c.lastChild);
    var pe = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
    function fe(e, t) {
        var i = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || (t && k(e, t)) ? E.merge([e], i) : i;
    }
    function me(e, t) {
        for (var i = 0, n = e.length; i < n; i++) U.set(e[i], "globalEval", !t || U.get(t[i], "globalEval"));
    }
    (pe.tbody = pe.tfoot = pe.colgroup = pe.caption = pe.thead), (pe.th = pe.td), y.option || (pe.optgroup = pe.option = [1, "<select multiple='multiple'>", "</select>"]);
    var ge = /<|&#?\w+;/;
    function ve(e, t, i, n, r) {
        for (var a, s, o, l, d, u = t.createDocumentFragment(), c = [], h = 0, p = e.length; h < p; h++)
            if ((a = e[h]) || 0 === a)
                if ("object" === f(a)) E.merge(c, a.nodeType ? [a] : a);
                else if (ge.test(a)) {
                    for (s = s || u.appendChild(t.createElement("div")), o = (ce.exec(a) || ["", ""])[1].toLowerCase(), o = pe[o] || pe._default, s.innerHTML = o[1] + E.htmlPrefilter(a) + o[2], d = o[0]; d--; ) s = s.lastChild;
                    E.merge(c, s.childNodes), ((s = u.firstChild).textContent = "");
                } else c.push(t.createTextNode(a));
        for (u.textContent = "", h = 0; (a = c[h++]); )
            if (n && -1 < E.inArray(a, n)) r && r.push(a);
            else if (((l = re(a)), (s = fe(u.appendChild(a), "script")), l && me(s), i)) for (d = 0; (a = s[d++]); ) he.test(a.type || "") && i.push(a);
        return u;
    }
    var ye = /^key/,
        be = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        we = /^([^.]*)(?:\.(.+)|)/;
    function xe() {
        return !0;
    }
    function Ce() {
        return !1;
    }
    function Te(e, t) {
        return (
            (e ===
                (function () {
                    try {
                        return T.activeElement;
                    } catch (e) {}
                })()) ==
            ("focus" === t)
        );
    }
    function Ee(e, t, i, n, r, a) {
        var s, o;
        if ("object" == typeof t) {
            for (o in ("string" != typeof i && ((n = n || i), (i = void 0)), t)) Ee(e, o, i, n, t[o], a);
            return e;
        }
        if ((null == n && null == r ? ((r = i), (n = i = void 0)) : null == r && ("string" == typeof i ? ((r = n), (n = void 0)) : ((r = n), (n = i), (i = void 0))), !1 === r)) r = Ce;
        else if (!r) return e;
        return (
            1 === a &&
                ((s = r),
                ((r = function (e) {
                    return E().off(e), s.apply(this, arguments);
                }).guid = s.guid || (s.guid = E.guid++))),
            e.each(function () {
                E.event.add(this, t, r, n, i);
            })
        );
    }
    function Se(e, r, a) {
        a
            ? (U.set(e, r, !1),
              E.event.add(e, r, {
                  namespace: !1,
                  handler: function (e) {
                      var t,
                          i,
                          n = U.get(this, r);
                      if (1 & e.isTrigger && this[r]) {
                          if (n.length) (E.event.special[r] || {}).delegateType && e.stopPropagation();
                          else if (((n = o.call(arguments)), U.set(this, r, n), (t = a(this, r)), this[r](), n !== (i = U.get(this, r)) || t ? U.set(this, r, !1) : (i = {}), n !== i))
                              return e.stopImmediatePropagation(), e.preventDefault(), i.value;
                      } else n.length && (U.set(this, r, { value: E.event.trigger(E.extend(n[0], E.Event.prototype), n.slice(1), this) }), e.stopImmediatePropagation());
                  },
              }))
            : void 0 === U.get(e, r) && E.event.add(e, r, xe);
    }
    (E.event = {
        global: {},
        add: function (t, e, i, n, r) {
            var a,
                s,
                o,
                l,
                d,
                u,
                c,
                h,
                p,
                f = U.get(t);
            if (G(t))
                for (
                    i.handler && ((i = (a = i).handler), (r = a.selector)),
                        r && E.find.matchesSelector(ne, r),
                        i.guid || (i.guid = E.guid++),
                        (o = f.events) || (o = f.events = Object.create(null)),
                        (s = f.handle) ||
                            (s = f.handle = function (e) {
                                return void 0 !== E && E.event.triggered !== e.type ? E.event.dispatch.apply(t, arguments) : void 0;
                            }),
                        l = (e = (e || "").match(N) || [""]).length;
                    l--;

                )
                    (c = p = (d = we.exec(e[l]) || [])[1]),
                        (h = (d[2] || "").split(".").sort()),
                        c &&
                            ((u = E.event.special[c] || {}),
                            (c = (r ? u.delegateType : u.bindType) || c),
                            (u = E.event.special[c] || {}),
                            (d = E.extend({ type: c, origType: p, data: n, handler: i, guid: i.guid, selector: r, needsContext: r && E.expr.match.needsContext.test(r), namespace: h.join(".") }, a)),
                            (p = o[c]) || (((p = o[c] = []).delegateCount = 0), (u.setup && !1 !== u.setup.call(t, n, h, s)) || (t.addEventListener && t.addEventListener(c, s))),
                            u.add && (u.add.call(t, d), d.handler.guid || (d.handler.guid = i.guid)),
                            r ? p.splice(p.delegateCount++, 0, d) : p.push(d),
                            (E.event.global[c] = !0));
        },
        remove: function (e, t, i, n, r) {
            var a,
                s,
                o,
                l,
                d,
                u,
                c,
                h,
                p,
                f,
                m,
                g = U.hasData(e) && U.get(e);
            if (g && (l = g.events)) {
                for (d = (t = (t || "").match(N) || [""]).length; d--; )
                    if (((p = m = (o = we.exec(t[d]) || [])[1]), (f = (o[2] || "").split(".").sort()), p)) {
                        for (c = E.event.special[p] || {}, h = l[(p = (n ? c.delegateType : c.bindType) || p)] || [], o = o[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = a = h.length; a--; )
                            (u = h[a]),
                                (!r && m !== u.origType) ||
                                    (i && i.guid !== u.guid) ||
                                    (o && !o.test(u.namespace)) ||
                                    (n && n !== u.selector && ("**" !== n || !u.selector)) ||
                                    (h.splice(a, 1), u.selector && h.delegateCount--, c.remove && c.remove.call(e, u));
                        s && !h.length && ((c.teardown && !1 !== c.teardown.call(e, f, g.handle)) || E.removeEvent(e, p, g.handle), delete l[p]);
                    } else for (p in l) E.event.remove(e, p + t[d], i, n, !0);
                E.isEmptyObject(l) && U.remove(e, "handle events");
            }
        },
        dispatch: function (e) {
            var t,
                i,
                n,
                r,
                a,
                s = new Array(arguments.length),
                o = E.event.fix(e),
                l = (U.get(this, "events") || Object.create(null))[o.type] || [],
                e = E.event.special[o.type] || {};
            for (s[0] = o, t = 1; t < arguments.length; t++) s[t] = arguments[t];
            if (((o.delegateTarget = this), !e.preDispatch || !1 !== e.preDispatch.call(this, o))) {
                for (a = E.event.handlers.call(this, o, l), t = 0; (n = a[t++]) && !o.isPropagationStopped(); )
                    for (o.currentTarget = n.elem, i = 0; (r = n.handlers[i++]) && !o.isImmediatePropagationStopped(); )
                        (o.rnamespace && !1 !== r.namespace && !o.rnamespace.test(r.namespace)) ||
                            ((o.handleObj = r), (o.data = r.data), void 0 !== (r = ((E.event.special[r.origType] || {}).handle || r.handler).apply(n.elem, s)) && !1 === (o.result = r) && (o.preventDefault(), o.stopPropagation()));
                return e.postDispatch && e.postDispatch.call(this, o), o.result;
            }
        },
        handlers: function (e, t) {
            var i,
                n,
                r,
                a,
                s,
                o = [],
                l = t.delegateCount,
                d = e.target;
            if (l && d.nodeType && !("click" === e.type && 1 <= e.button))
                for (; d !== this; d = d.parentNode || this)
                    if (1 === d.nodeType && ("click" !== e.type || !0 !== d.disabled)) {
                        for (a = [], s = {}, i = 0; i < l; i++) void 0 === s[(r = (n = t[i]).selector + " ")] && (s[r] = n.needsContext ? -1 < E(r, this).index(d) : E.find(r, this, null, [d]).length), s[r] && a.push(n);
                        a.length && o.push({ elem: d, handlers: a });
                    }
            return (d = this), l < t.length && o.push({ elem: d, handlers: t.slice(l) }), o;
        },
        addProp: function (t, e) {
            Object.defineProperty(E.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: b(e)
                    ? function () {
                          if (this.originalEvent) return e(this.originalEvent);
                      }
                    : function () {
                          if (this.originalEvent) return this.originalEvent[t];
                      },
                set: function (e) {
                    Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e });
                },
            });
        },
        fix: function (e) {
            return e[E.expando] ? e : new E.Event(e);
        },
        special: {
            load: { noBubble: !0 },
            click: {
                setup: function (e) {
                    e = this || e;
                    return ue.test(e.type) && e.click && k(e, "input") && Se(e, "click", xe), !1;
                },
                trigger: function (e) {
                    e = this || e;
                    return ue.test(e.type) && e.click && k(e, "input") && Se(e, "click"), !0;
                },
                _default: function (e) {
                    e = e.target;
                    return (ue.test(e.type) && e.click && k(e, "input") && U.get(e, "click")) || k(e, "a");
                },
            },
            beforeunload: {
                postDispatch: function (e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                },
            },
        },
    }),
        (E.removeEvent = function (e, t, i) {
            e.removeEventListener && e.removeEventListener(t, i);
        }),
        (E.Event = function (e, t) {
            if (!(this instanceof E.Event)) return new E.Event(e, t);
            e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? xe : Ce),
                  (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && E.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[E.expando] = !0);
        }),
        (E.Event.prototype = {
            constructor: E.Event,
            isDefaultPrevented: Ce,
            isPropagationStopped: Ce,
            isImmediatePropagationStopped: Ce,
            isSimulated: !1,
            preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = xe), e && !this.isSimulated && e.preventDefault();
            },
            stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = xe), e && !this.isSimulated && e.stopPropagation();
            },
            stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = xe), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
            },
        }),
        E.each(
            {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: function (e) {
                    var t = e.button;
                    return null == e.which && ye.test(e.type) ? (null != e.charCode ? e.charCode : e.keyCode) : !e.which && void 0 !== t && be.test(e.type) ? (1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0) : e.which;
                },
            },
            E.event.addProp
        ),
        E.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
            E.event.special[e] = {
                setup: function () {
                    return Se(this, e, Te), !1;
                },
                trigger: function () {
                    return Se(this, e), !0;
                },
                delegateType: t,
            };
        }),
        E.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, r) {
            E.event.special[e] = {
                delegateType: r,
                bindType: r,
                handle: function (e) {
                    var t,
                        i = e.relatedTarget,
                        n = e.handleObj;
                    return (i && (i === this || E.contains(this, i))) || ((e.type = n.origType), (t = n.handler.apply(this, arguments)), (e.type = r)), t;
                },
            };
        }),
        E.fn.extend({
            on: function (e, t, i, n) {
                return Ee(this, e, t, i, n);
            },
            one: function (e, t, i, n) {
                return Ee(this, e, t, i, n, 1);
            },
            off: function (e, t, i) {
                var n, r;
                if (e && e.preventDefault && e.handleObj) return (n = e.handleObj), E(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
                if ("object" != typeof e)
                    return (
                        (!1 !== t && "function" != typeof t) || ((i = t), (t = void 0)),
                        !1 === i && (i = Ce),
                        this.each(function () {
                            E.event.remove(this, e, i, t);
                        })
                    );
                for (r in e) this.off(r, t, e[r]);
                return this;
            },
        });
    var _e = /<script|<style|<link/i,
        ke = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Me = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function De(e, t) {
        return (k(e, "table") && k(11 !== t.nodeType ? t : t.firstChild, "tr") && E(e).children("tbody")[0]) || e;
    }
    function Ie(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
    }
    function Le(e) {
        return "true/" === (e.type || "").slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute("type"), e;
    }
    function Oe(e, t) {
        var i, n, r, a;
        if (1 === t.nodeType) {
            if (U.hasData(e) && (a = U.get(e).events)) for (r in (U.remove(t, "handle events"), a)) for (i = 0, n = a[r].length; i < n; i++) E.event.add(t, r, a[r][i]);
            Q.hasData(e) && ((e = Q.access(e)), (e = E.extend({}, e)), Q.set(t, e));
        }
    }
    function Ae(i, n, r, a) {
        n = g(n);
        var e,
            t,
            s,
            o,
            l,
            d,
            u = 0,
            c = i.length,
            h = c - 1,
            p = n[0],
            f = b(p);
        if (f || (1 < c && "string" == typeof p && !y.checkClone && ke.test(p)))
            return i.each(function (e) {
                var t = i.eq(e);
                f && (n[0] = p.call(this, e, t.html())), Ae(t, n, r, a);
            });
        if (c && ((t = (e = ve(n, i[0].ownerDocument, !1, i, a)).firstChild), 1 === e.childNodes.length && (e = t), t || a)) {
            for (o = (s = E.map(fe(e, "script"), Ie)).length; u < c; u++) (l = e), u !== h && ((l = E.clone(l, !0, !0)), o && E.merge(s, fe(l, "script"))), r.call(i[u], l, u);
            if (o)
                for (d = s[s.length - 1].ownerDocument, E.map(s, Le), u = 0; u < o; u++)
                    (l = s[u]),
                        he.test(l.type || "") &&
                            !U.access(l, "globalEval") &&
                            E.contains(d, l) &&
                            (l.src && "module" !== (l.type || "").toLowerCase() ? E._evalUrl && !l.noModule && E._evalUrl(l.src, { nonce: l.nonce || l.getAttribute("nonce") }, d) : w(l.textContent.replace(Me, ""), l, d));
        }
        return i;
    }
    function Pe(e, t, i) {
        for (var n, r = t ? E.filter(t, e) : e, a = 0; null != (n = r[a]); a++) i || 1 !== n.nodeType || E.cleanData(fe(n)), n.parentNode && (i && re(n) && me(fe(n, "script")), n.parentNode.removeChild(n));
        return e;
    }
    E.extend({
        htmlPrefilter: function (e) {
            return e;
        },
        clone: function (e, t, i) {
            var n,
                r,
                a,
                s,
                o,
                l,
                d,
                u = e.cloneNode(!0),
                c = re(e);
            if (!(y.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || E.isXMLDoc(e)))
                for (s = fe(u), n = 0, r = (a = fe(e)).length; n < r; n++)
                    (o = a[n]), (l = s[n]), (d = void 0), "input" === (d = l.nodeName.toLowerCase()) && ue.test(o.type) ? (l.checked = o.checked) : ("input" !== d && "textarea" !== d) || (l.defaultValue = o.defaultValue);
            if (t)
                if (i) for (a = a || fe(e), s = s || fe(u), n = 0, r = a.length; n < r; n++) Oe(a[n], s[n]);
                else Oe(e, u);
            return 0 < (s = fe(u, "script")).length && me(s, !c && fe(e, "script")), u;
        },
        cleanData: function (e) {
            for (var t, i, n, r = E.event.special, a = 0; void 0 !== (i = e[a]); a++)
                if (G(i)) {
                    if ((t = i[U.expando])) {
                        if (t.events) for (n in t.events) r[n] ? E.event.remove(i, n) : E.removeEvent(i, n, t.handle);
                        i[U.expando] = void 0;
                    }
                    i[Q.expando] && (i[Q.expando] = void 0);
                }
        },
    }),
        E.fn.extend({
            detach: function (e) {
                return Pe(this, e, !0);
            },
            remove: function (e) {
                return Pe(this, e);
            },
            text: function (e) {
                return q(
                    this,
                    function (e) {
                        return void 0 === e
                            ? E.text(this)
                            : this.empty().each(function () {
                                  (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                              });
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            append: function () {
                return Ae(this, arguments, function (e) {
                    (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || De(this, e).appendChild(e);
                });
            },
            prepend: function () {
                return Ae(this, arguments, function (e) {
                    var t;
                    (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (t = De(this, e)).insertBefore(e, t.firstChild);
                });
            },
            before: function () {
                return Ae(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this);
                });
            },
            after: function () {
                return Ae(this, arguments, function (e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
                });
            },
            empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (E.cleanData(fe(e, !1)), (e.textContent = ""));
                return this;
            },
            clone: function (e, t) {
                return (
                    (e = null != e && e),
                    (t = null == t ? e : t),
                    this.map(function () {
                        return E.clone(this, e, t);
                    })
                );
            },
            html: function (e) {
                return q(
                    this,
                    function (e) {
                        var t = this[0] || {},
                            i = 0,
                            n = this.length;
                        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                        if ("string" == typeof e && !_e.test(e) && !pe[(ce.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = E.htmlPrefilter(e);
                            try {
                                for (; i < n; i++) 1 === (t = this[i] || {}).nodeType && (E.cleanData(fe(t, !1)), (t.innerHTML = e));
                                t = 0;
                            } catch (e) {}
                        }
                        t && this.empty().append(e);
                    },
                    null,
                    e,
                    arguments.length
                );
            },
            replaceWith: function () {
                var i = [];
                return Ae(
                    this,
                    arguments,
                    function (e) {
                        var t = this.parentNode;
                        E.inArray(this, i) < 0 && (E.cleanData(fe(this)), t && t.replaceChild(e, this));
                    },
                    i
                );
            },
        }),
        E.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, s) {
            E.fn[e] = function (e) {
                for (var t, i = [], n = E(e), r = n.length - 1, a = 0; a <= r; a++) (t = a === r ? this : this.clone(!0)), E(n[a])[s](t), l.apply(i, t.get());
                return this.pushStack(i);
            };
        });
    function Ne(e, t, i) {
        var n,
            r = {};
        for (n in t) (r[n] = e.style[n]), (e.style[n] = t[n]);
        for (n in ((i = i.call(e)), t)) e.style[n] = r[n];
        return i;
    }
    var ze,
        Be,
        je,
        He,
        Re,
        $e,
        qe,
        We,
        Fe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
        Ye = function (e) {
            var t = e.ownerDocument.defaultView;
            return (t = !t || !t.opener ? C : t).getComputedStyle(e);
        },
        Ve = new RegExp(ie.join("|"), "i");
    function Ge() {
        var e;
        We &&
            ((qe.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
            (We.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
            ne.appendChild(qe).appendChild(We),
            (e = C.getComputedStyle(We)),
            (ze = "1%" !== e.top),
            ($e = 12 === Xe(e.marginLeft)),
            (We.style.right = "60%"),
            (He = 36 === Xe(e.right)),
            (Be = 36 === Xe(e.width)),
            (We.style.position = "absolute"),
            (je = 12 === Xe(We.offsetWidth / 3)),
            ne.removeChild(qe),
            (We = null));
    }
    function Xe(e) {
        return Math.round(parseFloat(e));
    }
    function Ue(e, t, i) {
        var n,
            r,
            a = e.style;
        return (
            (i = i || Ye(e)) &&
                ("" !== (r = i.getPropertyValue(t) || i[t]) || re(e) || (r = E.style(e, t)),
                !y.pixelBoxStyles() && Fe.test(r) && Ve.test(t) && ((n = a.width), (e = a.minWidth), (t = a.maxWidth), (a.minWidth = a.maxWidth = a.width = r), (r = i.width), (a.width = n), (a.minWidth = e), (a.maxWidth = t))),
            void 0 !== r ? r + "" : r
        );
    }
    function Qe(e, t) {
        return {
            get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
            },
        };
    }
    (qe = T.createElement("div")),
        (We = T.createElement("div")).style &&
            ((We.style.backgroundClip = "content-box"),
            (We.cloneNode(!0).style.backgroundClip = ""),
            (y.clearCloneStyle = "content-box" === We.style.backgroundClip),
            E.extend(y, {
                boxSizingReliable: function () {
                    return Ge(), Be;
                },
                pixelBoxStyles: function () {
                    return Ge(), He;
                },
                pixelPosition: function () {
                    return Ge(), ze;
                },
                reliableMarginLeft: function () {
                    return Ge(), $e;
                },
                scrollboxSize: function () {
                    return Ge(), je;
                },
                reliableTrDimensions: function () {
                    var e, t, i;
                    return (
                        null == Re &&
                            ((e = T.createElement("table")),
                            (i = T.createElement("tr")),
                            (t = T.createElement("div")),
                            (e.style.cssText = "position:absolute;left:-11111px"),
                            (i.style.height = "1px"),
                            (t.style.height = "9px"),
                            ne.appendChild(e).appendChild(i).appendChild(t),
                            (i = C.getComputedStyle(i)),
                            (Re = 3 < parseInt(i.height)),
                            ne.removeChild(e)),
                        Re
                    );
                },
            }));
    var Ke = ["Webkit", "Moz", "ms"],
        Je = T.createElement("div").style,
        Ze = {};
    function et(e) {
        var t = E.cssProps[e] || Ze[e];
        return (
            t ||
            (e in Je
                ? e
                : (Ze[e] =
                      (function (e) {
                          for (var t = e[0].toUpperCase() + e.slice(1), i = Ke.length; i--; ) if ((e = Ke[i] + t) in Je) return e;
                      })(e) || e))
        );
    }
    var tt = /^(none|table(?!-c[ea]).+)/,
        it = /^--/,
        nt = { position: "absolute", visibility: "hidden", display: "block" },
        rt = { letterSpacing: "0", fontWeight: "400" };
    function at(e, t, i) {
        var n = te.exec(t);
        return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : t;
    }
    function st(e, t, i, n, r, a) {
        var s = "width" === t ? 1 : 0,
            o = 0,
            l = 0;
        if (i === (n ? "border" : "content")) return 0;
        for (; s < 4; s += 2)
            "margin" === i && (l += E.css(e, i + ie[s], !0, r)),
                n
                    ? ("content" === i && (l -= E.css(e, "padding" + ie[s], !0, r)), "margin" !== i && (l -= E.css(e, "border" + ie[s] + "Width", !0, r)))
                    : ((l += E.css(e, "padding" + ie[s], !0, r)), "padding" !== i ? (l += E.css(e, "border" + ie[s] + "Width", !0, r)) : (o += E.css(e, "border" + ie[s] + "Width", !0, r)));
        return !n && 0 <= a && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - a - l - o - 0.5)) || 0), l;
    }
    function ot(e, t, i) {
        var n = Ye(e),
            r = (!y.boxSizingReliable() || i) && "border-box" === E.css(e, "boxSizing", !1, n),
            a = r,
            s = Ue(e, t, n),
            o = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Fe.test(s)) {
            if (!i) return s;
            s = "auto";
        }
        return (
            ((!y.boxSizingReliable() && r) || (!y.reliableTrDimensions() && k(e, "tr")) || "auto" === s || (!parseFloat(s) && "inline" === E.css(e, "display", !1, n))) &&
                e.getClientRects().length &&
                ((r = "border-box" === E.css(e, "boxSizing", !1, n)), (a = o in e) && (s = e[o])),
            (s = parseFloat(s) || 0) + st(e, t, i || (r ? "border" : "content"), a, n, s) + "px"
        );
    }
    function lt(e, t, i, n, r) {
        return new lt.prototype.init(e, t, i, n, r);
    }
    E.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        e = Ue(e, "opacity");
                        return "" === e ? "1" : e;
                    }
                },
            },
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
        },
        cssProps: {},
        style: function (e, t, i, n) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r,
                    a,
                    s,
                    o = V(t),
                    l = it.test(t),
                    d = e.style;
                if ((l || (t = et(o)), (s = E.cssHooks[t] || E.cssHooks[o]), void 0 === i)) return s && "get" in s && void 0 !== (r = s.get(e, !1, n)) ? r : d[t];
                "string" === (a = typeof i) && (r = te.exec(i)) && r[1] && ((i = oe(e, t, r)), (a = "number")),
                    null != i &&
                        i == i &&
                        ("number" !== a || l || (i += (r && r[3]) || (E.cssNumber[o] ? "" : "px")),
                        y.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (d[t] = "inherit"),
                        (s && "set" in s && void 0 === (i = s.set(e, i, n))) || (l ? d.setProperty(t, i) : (d[t] = i)));
            }
        },
        css: function (e, t, i, n) {
            var r,
                a = V(t);
            return (
                it.test(t) || (t = et(a)),
                "normal" === (r = void 0 === (r = (a = E.cssHooks[t] || E.cssHooks[a]) && "get" in a ? a.get(e, !0, i) : r) ? Ue(e, t, n) : r) && t in rt && (r = rt[t]),
                "" === i || i ? ((t = parseFloat(r)), !0 === i || isFinite(t) ? t || 0 : r) : r
            );
        },
    }),
        E.each(["height", "width"], function (e, o) {
            E.cssHooks[o] = {
                get: function (e, t, i) {
                    if (t)
                        return !tt.test(E.css(e, "display")) || (e.getClientRects().length && e.getBoundingClientRect().width)
                            ? ot(e, o, i)
                            : Ne(e, nt, function () {
                                  return ot(e, o, i);
                              });
                },
                set: function (e, t, i) {
                    var n,
                        r = Ye(e),
                        a = !y.scrollboxSize() && "absolute" === r.position,
                        s = (a || i) && "border-box" === E.css(e, "boxSizing", !1, r),
                        i = i ? st(e, o, i, s, r) : 0;
                    return (
                        s && a && (i -= Math.ceil(e["offset" + o[0].toUpperCase() + o.slice(1)] - parseFloat(r[o]) - st(e, o, "border", !1, r) - 0.5)),
                        i && (n = te.exec(t)) && "px" !== (n[3] || "px") && ((e.style[o] = t), (t = E.css(e, o))),
                        at(0, t, i)
                    );
                },
            };
        }),
        (E.cssHooks.marginLeft = Qe(y.reliableMarginLeft, function (e, t) {
            if (t)
                return (
                    (parseFloat(Ue(e, "marginLeft")) ||
                        e.getBoundingClientRect().left -
                            Ne(e, { marginLeft: 0 }, function () {
                                return e.getBoundingClientRect().left;
                            })) + "px"
                );
        })),
        E.each({ margin: "", padding: "", border: "Width" }, function (r, a) {
            (E.cssHooks[r + a] = {
                expand: function (e) {
                    for (var t = 0, i = {}, n = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) i[r + ie[t] + a] = n[t] || n[t - 2] || n[0];
                    return i;
                },
            }),
                "margin" !== r && (E.cssHooks[r + a].set = at);
        }),
        E.fn.extend({
            css: function (e, t) {
                return q(
                    this,
                    function (e, t, i) {
                        var n,
                            r,
                            a = {},
                            s = 0;
                        if (Array.isArray(t)) {
                            for (n = Ye(e), r = t.length; s < r; s++) a[t[s]] = E.css(e, t[s], !1, n);
                            return a;
                        }
                        return void 0 !== i ? E.style(e, t, i) : E.css(e, t);
                    },
                    e,
                    t,
                    1 < arguments.length
                );
            },
        }),
        ((E.Tween = lt).prototype = {
            constructor: lt,
            init: function (e, t, i, n, r, a) {
                (this.elem = e), (this.prop = i), (this.easing = r || E.easing._default), (this.options = t), (this.start = this.now = this.cur()), (this.end = n), (this.unit = a || (E.cssNumber[i] ? "" : "px"));
            },
            cur: function () {
                var e = lt.propHooks[this.prop];
                return (e && e.get ? e : lt.propHooks._default).get(this);
            },
            run: function (e) {
                var t,
                    i = lt.propHooks[this.prop];
                return (
                    this.options.duration ? (this.pos = t = E.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)) : (this.pos = t = e),
                    (this.now = (this.end - this.start) * t + this.start),
                    this.options.step && this.options.step.call(this.elem, this.now, this),
                    (i && i.set ? i : lt.propHooks._default).set(this),
                    this
                );
            },
        }),
        (lt.prototype.init.prototype = lt.prototype),
        (lt.propHooks = {
            _default: {
                get: function (e) {
                    return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop]) ? e.elem[e.prop] : (e = E.css(e.elem, e.prop, "")) && "auto" !== e ? e : 0;
                },
                set: function (e) {
                    E.fx.step[e.prop] ? E.fx.step[e.prop](e) : 1 !== e.elem.nodeType || (!E.cssHooks[e.prop] && null == e.elem.style[et(e.prop)]) ? (e.elem[e.prop] = e.now) : E.style(e.elem, e.prop, e.now + e.unit);
                },
            },
        }),
        (lt.propHooks.scrollTop = lt.propHooks.scrollLeft = {
            set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            },
        }),
        (E.easing = {
            linear: function (e) {
                return e;
            },
            swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
            },
            _default: "swing",
        }),
        (E.fx = lt.prototype.init),
        (E.fx.step = {});
    var dt,
        ut,
        ct = /^(?:toggle|show|hide)$/,
        ht = /queueHooks$/;
    function pt() {
        ut && (!1 === T.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(pt) : C.setTimeout(pt, E.fx.interval), E.fx.tick());
    }
    function ft() {
        return (
            C.setTimeout(function () {
                dt = void 0;
            }),
            (dt = Date.now())
        );
    }
    function mt(e, t) {
        var i,
            n = 0,
            r = { height: e };
        for (t = t ? 1 : 0; n < 4; n += 2 - t) r["margin" + (i = ie[n])] = r["padding" + i] = e;
        return t && (r.opacity = r.width = e), r;
    }
    function gt(e, t, i) {
        for (var n, r = (vt.tweeners[t] || []).concat(vt.tweeners["*"]), a = 0, s = r.length; a < s; a++) if ((n = r[a].call(i, t, e))) return n;
    }
    function vt(r, e, t) {
        var i,
            a,
            n = 0,
            s = vt.prefilters.length,
            o = E.Deferred().always(function () {
                delete l.elem;
            }),
            l = function () {
                if (a) return !1;
                for (var e = dt || ft(), e = Math.max(0, d.startTime + d.duration - e), t = 1 - (e / d.duration || 0), i = 0, n = d.tweens.length; i < n; i++) d.tweens[i].run(t);
                return o.notifyWith(r, [d, t, e]), t < 1 && n ? e : (n || o.notifyWith(r, [d, 1, 0]), o.resolveWith(r, [d]), !1);
            },
            d = o.promise({
                elem: r,
                props: E.extend({}, e),
                opts: E.extend(!0, { specialEasing: {}, easing: E.easing._default }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: dt || ft(),
                duration: t.duration,
                tweens: [],
                createTween: function (e, t) {
                    e = E.Tween(r, d.opts, e, t, d.opts.specialEasing[e] || d.opts.easing);
                    return d.tweens.push(e), e;
                },
                stop: function (e) {
                    var t = 0,
                        i = e ? d.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; t < i; t++) d.tweens[t].run(1);
                    return e ? (o.notifyWith(r, [d, 1, 0]), o.resolveWith(r, [d, e])) : o.rejectWith(r, [d, e]), this;
                },
            }),
            u = d.props;
        for (
            !(function (e, t) {
                var i, n, r, a, s;
                for (i in e)
                    if (((r = t[(n = V(i))]), (a = e[i]), Array.isArray(a) && ((r = a[1]), (a = e[i] = a[0])), i !== n && ((e[n] = a), delete e[i]), (s = E.cssHooks[n]) && ("expand" in s)))
                        for (i in ((a = s.expand(a)), delete e[n], a)) (i in e) || ((e[i] = a[i]), (t[i] = r));
                    else t[n] = r;
            })(u, d.opts.specialEasing);
            n < s;
            n++
        )
            if ((i = vt.prefilters[n].call(d, r, u, d.opts))) return b(i.stop) && (E._queueHooks(d.elem, d.opts.queue).stop = i.stop.bind(i)), i;
        return (
            E.map(u, gt, d),
            b(d.opts.start) && d.opts.start.call(r, d),
            d.progress(d.opts.progress).done(d.opts.done, d.opts.complete).fail(d.opts.fail).always(d.opts.always),
            E.fx.timer(E.extend(l, { elem: r, anim: d, queue: d.opts.queue })),
            d
        );
    }
    (E.Animation = E.extend(vt, {
        tweeners: {
            "*": [
                function (e, t) {
                    var i = this.createTween(e, t);
                    return oe(i.elem, e, te.exec(t), i), i;
                },
            ],
        },
        tweener: function (e, t) {
            for (var i, n = 0, r = (e = b(e) ? ((t = e), ["*"]) : e.match(N)).length; n < r; n++) (i = e[n]), (vt.tweeners[i] = vt.tweeners[i] || []), vt.tweeners[i].unshift(t);
        },
        prefilters: [
            function (e, t, i) {
                var n,
                    r,
                    a,
                    s,
                    o,
                    l,
                    d,
                    u = "width" in t || "height" in t,
                    c = this,
                    h = {},
                    p = e.style,
                    f = e.nodeType && se(e),
                    m = U.get(e, "fxshow");
                for (n in (i.queue ||
                    (null == (s = E._queueHooks(e, "fx")).unqueued &&
                        ((s.unqueued = 0),
                        (o = s.empty.fire),
                        (s.empty.fire = function () {
                            s.unqueued || o();
                        })),
                    s.unqueued++,
                    c.always(function () {
                        c.always(function () {
                            s.unqueued--, E.queue(e, "fx").length || s.empty.fire();
                        });
                    })),
                t))
                    if (((r = t[n]), ct.test(r))) {
                        if ((delete t[n], (a = a || "toggle" === r), r === (f ? "hide" : "show"))) {
                            if ("show" !== r || !m || void 0 === m[n]) continue;
                            f = !0;
                        }
                        h[n] = (m && m[n]) || E.style(e, n);
                    }
                if ((l = !E.isEmptyObject(t)) || !E.isEmptyObject(h))
                    for (n in (u &&
                        1 === e.nodeType &&
                        ((i.overflow = [p.overflow, p.overflowX, p.overflowY]),
                        null == (d = m && m.display) && (d = U.get(e, "display")),
                        "none" === (u = E.css(e, "display")) && (d ? (u = d) : (de([e], !0), (d = e.style.display || d), (u = E.css(e, "display")), de([e]))),
                        ("inline" === u || ("inline-block" === u && null != d)) &&
                            "none" === E.css(e, "float") &&
                            (l ||
                                (c.done(function () {
                                    p.display = d;
                                }),
                                null == d && ((u = p.display), (d = "none" === u ? "" : u))),
                            (p.display = "inline-block"))),
                    i.overflow &&
                        ((p.overflow = "hidden"),
                        c.always(function () {
                            (p.overflow = i.overflow[0]), (p.overflowX = i.overflow[1]), (p.overflowY = i.overflow[2]);
                        })),
                    (l = !1),
                    h))
                        l ||
                            (m ? "hidden" in m && (f = m.hidden) : (m = U.access(e, "fxshow", { display: d })),
                            a && (m.hidden = !f),
                            f && de([e], !0),
                            c.done(function () {
                                for (n in (f || de([e]), U.remove(e, "fxshow"), h)) E.style(e, n, h[n]);
                            })),
                            (l = gt(f ? m[n] : 0, n, c)),
                            n in m || ((m[n] = l.start), f && ((l.end = l.start), (l.start = 0)));
            },
        ],
        prefilter: function (e, t) {
            t ? vt.prefilters.unshift(e) : vt.prefilters.push(e);
        },
    })),
        (E.speed = function (e, t, i) {
            var n = e && "object" == typeof e ? E.extend({}, e) : { complete: i || (!i && t) || (b(e) && e), duration: e, easing: (i && t) || (t && !b(t) && t) };
            return (
                E.fx.off ? (n.duration = 0) : "number" != typeof n.duration && (n.duration in E.fx.speeds ? (n.duration = E.fx.speeds[n.duration]) : (n.duration = E.fx.speeds._default)),
                (null != n.queue && !0 !== n.queue) || (n.queue = "fx"),
                (n.old = n.complete),
                (n.complete = function () {
                    b(n.old) && n.old.call(this), n.queue && E.dequeue(this, n.queue);
                }),
                n
            );
        }),
        E.fn.extend({
            fadeTo: function (e, t, i, n) {
                return this.filter(se).css("opacity", 0).show().end().animate({ opacity: t }, e, i, n);
            },
            animate: function (t, e, i, n) {
                var r = E.isEmptyObject(t),
                    a = E.speed(e, i, n),
                    n = function () {
                        var e = vt(this, E.extend({}, t), a);
                        (r || U.get(this, "finish")) && e.stop(!0);
                    };
                return (n.finish = n), r || !1 === a.queue ? this.each(n) : this.queue(a.queue, n);
            },
            stop: function (r, e, a) {
                function s(e) {
                    var t = e.stop;
                    delete e.stop, t(a);
                }
                return (
                    "string" != typeof r && ((a = e), (e = r), (r = void 0)),
                    e && this.queue(r || "fx", []),
                    this.each(function () {
                        var e = !0,
                            t = null != r && r + "queueHooks",
                            i = E.timers,
                            n = U.get(this);
                        if (t) n[t] && n[t].stop && s(n[t]);
                        else for (t in n) n[t] && n[t].stop && ht.test(t) && s(n[t]);
                        for (t = i.length; t--; ) i[t].elem !== this || (null != r && i[t].queue !== r) || (i[t].anim.stop(a), (e = !1), i.splice(t, 1));
                        (!e && a) || E.dequeue(this, r);
                    })
                );
            },
            finish: function (s) {
                return (
                    !1 !== s && (s = s || "fx"),
                    this.each(function () {
                        var e,
                            t = U.get(this),
                            i = t[s + "queue"],
                            n = t[s + "queueHooks"],
                            r = E.timers,
                            a = i ? i.length : 0;
                        for (t.finish = !0, E.queue(this, s, []), n && n.stop && n.stop.call(this, !0), e = r.length; e--; ) r[e].elem === this && r[e].queue === s && (r[e].anim.stop(!0), r.splice(e, 1));
                        for (e = 0; e < a; e++) i[e] && i[e].finish && i[e].finish.call(this);
                        delete t.finish;
                    })
                );
            },
        }),
        E.each(["toggle", "show", "hide"], function (e, n) {
            var r = E.fn[n];
            E.fn[n] = function (e, t, i) {
                return null == e || "boolean" == typeof e ? r.apply(this, arguments) : this.animate(mt(n, !0), e, t, i);
            };
        }),
        E.each({ slideDown: mt("show"), slideUp: mt("hide"), slideToggle: mt("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, n) {
            E.fn[e] = function (e, t, i) {
                return this.animate(n, e, t, i);
            };
        }),
        (E.timers = []),
        (E.fx.tick = function () {
            var e,
                t = 0,
                i = E.timers;
            for (dt = Date.now(); t < i.length; t++) (e = i[t])() || i[t] !== e || i.splice(t--, 1);
            i.length || E.fx.stop(), (dt = void 0);
        }),
        (E.fx.timer = function (e) {
            E.timers.push(e), E.fx.start();
        }),
        (E.fx.interval = 13),
        (E.fx.start = function () {
            ut || ((ut = !0), pt());
        }),
        (E.fx.stop = function () {
            ut = null;
        }),
        (E.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (E.fn.delay = function (n, e) {
            return (
                (n = (E.fx && E.fx.speeds[n]) || n),
                (e = e || "fx"),
                this.queue(e, function (e, t) {
                    var i = C.setTimeout(e, n);
                    t.stop = function () {
                        C.clearTimeout(i);
                    };
                })
            );
        }),
        (c = T.createElement("input")),
        (ee = T.createElement("select").appendChild(T.createElement("option"))),
        (c.type = "checkbox"),
        (y.checkOn = "" !== c.value),
        (y.optSelected = ee.selected),
        ((c = T.createElement("input")).value = "t"),
        (c.type = "radio"),
        (y.radioValue = "t" === c.value);
    var yt,
        bt = E.expr.attrHandle;
    E.fn.extend({
        attr: function (e, t) {
            return q(this, E.attr, e, t, 1 < arguments.length);
        },
        removeAttr: function (e) {
            return this.each(function () {
                E.removeAttr(this, e);
            });
        },
    }),
        E.extend({
            attr: function (e, t, i) {
                var n,
                    r,
                    a = e.nodeType;
                if (3 !== a && 8 !== a && 2 !== a)
                    return void 0 === e.getAttribute
                        ? E.prop(e, t, i)
                        : ((1 === a && E.isXMLDoc(e)) || (r = E.attrHooks[t.toLowerCase()] || (E.expr.match.bool.test(t) ? yt : void 0)),
                          void 0 !== i
                              ? null === i
                                  ? void E.removeAttr(e, t)
                                  : r && "set" in r && void 0 !== (n = r.set(e, i, t))
                                  ? n
                                  : (e.setAttribute(t, i + ""), i)
                              : !(r && "get" in r && null !== (n = r.get(e, t))) && null == (n = E.find.attr(e, t))
                              ? void 0
                              : n);
            },
            attrHooks: {
                type: {
                    set: function (e, t) {
                        if (!y.radioValue && "radio" === t && k(e, "input")) {
                            var i = e.value;
                            return e.setAttribute("type", t), i && (e.value = i), t;
                        }
                    },
                },
            },
            removeAttr: function (e, t) {
                var i,
                    n = 0,
                    r = t && t.match(N);
                if (r && 1 === e.nodeType) for (; (i = r[n++]); ) e.removeAttribute(i);
            },
        }),
        (yt = {
            set: function (e, t, i) {
                return !1 === t ? E.removeAttr(e, i) : e.setAttribute(i, i), i;
            },
        }),
        E.each(E.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var s = bt[t] || E.find.attr;
            bt[t] = function (e, t, i) {
                var n,
                    r,
                    a = t.toLowerCase();
                return i || ((r = bt[a]), (bt[a] = n), (n = null != s(e, t, i) ? a : null), (bt[a] = r)), n;
            };
        });
    var wt = /^(?:input|select|textarea|button)$/i,
        xt = /^(?:a|area)$/i;
    function Ct(e) {
        return (e.match(N) || []).join(" ");
    }
    function Tt(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
    }
    function Et(e) {
        return Array.isArray(e) ? e : ("string" == typeof e && e.match(N)) || [];
    }
    E.fn.extend({
        prop: function (e, t) {
            return q(this, E.prop, e, t, 1 < arguments.length);
        },
        removeProp: function (e) {
            return this.each(function () {
                delete this[E.propFix[e] || e];
            });
        },
    }),
        E.extend({
            prop: function (e, t, i) {
                var n,
                    r,
                    a = e.nodeType;
                if (3 !== a && 8 !== a && 2 !== a)
                    return (
                        (1 === a && E.isXMLDoc(e)) || ((t = E.propFix[t] || t), (r = E.propHooks[t])),
                        void 0 !== i ? (r && "set" in r && void 0 !== (n = r.set(e, i, t)) ? n : (e[t] = i)) : r && "get" in r && null !== (n = r.get(e, t)) ? n : e[t]
                    );
            },
            propHooks: {
                tabIndex: {
                    get: function (e) {
                        var t = E.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : wt.test(e.nodeName) || (xt.test(e.nodeName) && e.href) ? 0 : -1;
                    },
                },
            },
            propFix: { for: "htmlFor", class: "className" },
        }),
        y.optSelected ||
            (E.propHooks.selected = {
                get: function (e) {
                    e = e.parentNode;
                    return e && e.parentNode && e.parentNode.selectedIndex, null;
                },
                set: function (e) {
                    e = e.parentNode;
                    e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
                },
            }),
        E.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            E.propFix[this.toLowerCase()] = this;
        }),
        E.fn.extend({
            addClass: function (t) {
                var e,
                    i,
                    n,
                    r,
                    a,
                    s,
                    o = 0;
                if (b(t))
                    return this.each(function (e) {
                        E(this).addClass(t.call(this, e, Tt(this)));
                    });
                if ((e = Et(t)).length)
                    for (; (i = this[o++]); )
                        if (((s = Tt(i)), (n = 1 === i.nodeType && " " + Ct(s) + " "))) {
                            for (a = 0; (r = e[a++]); ) n.indexOf(" " + r + " ") < 0 && (n += r + " ");
                            s !== (s = Ct(n)) && i.setAttribute("class", s);
                        }
                return this;
            },
            removeClass: function (t) {
                var e,
                    i,
                    n,
                    r,
                    a,
                    s,
                    o = 0;
                if (b(t))
                    return this.each(function (e) {
                        E(this).removeClass(t.call(this, e, Tt(this)));
                    });
                if (!arguments.length) return this.attr("class", "");
                if ((e = Et(t)).length)
                    for (; (i = this[o++]); )
                        if (((s = Tt(i)), (n = 1 === i.nodeType && " " + Ct(s) + " "))) {
                            for (a = 0; (r = e[a++]); ) for (; -1 < n.indexOf(" " + r + " "); ) n = n.replace(" " + r + " ", " ");
                            s !== (s = Ct(n)) && i.setAttribute("class", s);
                        }
                return this;
            },
            toggleClass: function (r, t) {
                var a = typeof r,
                    s = "string" == a || Array.isArray(r);
                return "boolean" == typeof t && s
                    ? t
                        ? this.addClass(r)
                        : this.removeClass(r)
                    : b(r)
                    ? this.each(function (e) {
                          E(this).toggleClass(r.call(this, e, Tt(this), t), t);
                      })
                    : this.each(function () {
                          var e, t, i, n;
                          if (s) for (t = 0, i = E(this), n = Et(r); (e = n[t++]); ) i.hasClass(e) ? i.removeClass(e) : i.addClass(e);
                          else (void 0 !== r && "boolean" != a) || ((e = Tt(this)) && U.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", (!e && !1 !== r && U.get(this, "__className__")) || ""));
                      });
            },
            hasClass: function (e) {
                for (var t, i = 0, n = " " + e + " "; (t = this[i++]); ) if (1 === t.nodeType && -1 < (" " + Ct(Tt(t)) + " ").indexOf(n)) return !0;
                return !1;
            },
        });
    var St = /\r/g;
    E.fn.extend({
        val: function (t) {
            var i,
                e,
                n,
                r = this[0];
            return arguments.length
                ? ((n = b(t)),
                  this.each(function (e) {
                      1 === this.nodeType &&
                          (null == (e = n ? t.call(this, e, E(this).val()) : t)
                              ? (e = "")
                              : "number" == typeof e
                              ? (e += "")
                              : Array.isArray(e) &&
                                (e = E.map(e, function (e) {
                                    return null == e ? "" : e + "";
                                })),
                          ((i = E.valHooks[this.type] || E.valHooks[this.nodeName.toLowerCase()]) && "set" in i && void 0 !== i.set(this, e, "value")) || (this.value = e));
                  }))
                : r
                ? (i = E.valHooks[r.type] || E.valHooks[r.nodeName.toLowerCase()]) && "get" in i && void 0 !== (e = i.get(r, "value"))
                    ? e
                    : "string" == typeof (e = r.value)
                    ? e.replace(St, "")
                    : null == e
                    ? ""
                    : e
                : void 0;
        },
    }),
        E.extend({
            valHooks: {
                option: {
                    get: function (e) {
                        var t = E.find.attr(e, "value");
                        return null != t ? t : Ct(E.text(e));
                    },
                },
                select: {
                    get: function (e) {
                        for (var t, i = e.options, n = e.selectedIndex, r = "select-one" === e.type, a = r ? null : [], s = r ? n + 1 : i.length, o = n < 0 ? s : r ? n : 0; o < s; o++)
                            if (((t = i[o]).selected || o === n) && !t.disabled && (!t.parentNode.disabled || !k(t.parentNode, "optgroup"))) {
                                if (((t = E(t).val()), r)) return t;
                                a.push(t);
                            }
                        return a;
                    },
                    set: function (e, t) {
                        for (var i, n, r = e.options, a = E.makeArray(t), s = r.length; s--; ) ((n = r[s]).selected = -1 < E.inArray(E.valHooks.option.get(n), a)) && (i = !0);
                        return i || (e.selectedIndex = -1), a;
                    },
                },
            },
        }),
        E.each(["radio", "checkbox"], function () {
            (E.valHooks[this] = {
                set: function (e, t) {
                    if (Array.isArray(t)) return (e.checked = -1 < E.inArray(E(e).val(), t));
                },
            }),
                y.checkOn ||
                    (E.valHooks[this].get = function (e) {
                        return null === e.getAttribute("value") ? "on" : e.value;
                    });
        }),
        (y.focusin = "onfocusin" in C);
    function _t(e) {
        e.stopPropagation();
    }
    var kt = /^(?:focusinfocus|focusoutblur)$/;
    E.extend(E.event, {
        trigger: function (e, t, i, n) {
            var r,
                a,
                s,
                o,
                l,
                d,
                u,
                c = [i || T],
                h = v.call(e, "type") ? e.type : e,
                p = v.call(e, "namespace") ? e.namespace.split(".") : [],
                f = (u = a = i = i || T);
            if (
                3 !== i.nodeType &&
                8 !== i.nodeType &&
                !kt.test(h + E.event.triggered) &&
                (-1 < h.indexOf(".") && ((h = (p = h.split(".")).shift()), p.sort()),
                (o = h.indexOf(":") < 0 && "on" + h),
                ((e = e[E.expando] ? e : new E.Event(h, "object" == typeof e && e)).isTrigger = n ? 2 : 3),
                (e.namespace = p.join(".")),
                (e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                (e.result = void 0),
                e.target || (e.target = i),
                (t = null == t ? [e] : E.makeArray(t, [e])),
                (d = E.event.special[h] || {}),
                n || !d.trigger || !1 !== d.trigger.apply(i, t))
            ) {
                if (!n && !d.noBubble && !m(i)) {
                    for (s = d.delegateType || h, kt.test(s + h) || (f = f.parentNode); f; f = f.parentNode) c.push(f), (a = f);
                    a === (i.ownerDocument || T) && c.push(a.defaultView || a.parentWindow || C);
                }
                for (r = 0; (f = c[r++]) && !e.isPropagationStopped(); )
                    (u = f),
                        (e.type = 1 < r ? s : d.bindType || h),
                        (l = (U.get(f, "events") || Object.create(null))[e.type] && U.get(f, "handle")) && l.apply(f, t),
                        (l = o && f[o]) && l.apply && G(f) && ((e.result = l.apply(f, t)), !1 === e.result && e.preventDefault());
                return (
                    (e.type = h),
                    n ||
                        e.isDefaultPrevented() ||
                        (d._default && !1 !== d._default.apply(c.pop(), t)) ||
                        !G(i) ||
                        (o &&
                            b(i[h]) &&
                            !m(i) &&
                            ((a = i[o]) && (i[o] = null),
                            (E.event.triggered = h),
                            e.isPropagationStopped() && u.addEventListener(h, _t),
                            i[h](),
                            e.isPropagationStopped() && u.removeEventListener(h, _t),
                            (E.event.triggered = void 0),
                            a && (i[o] = a))),
                    e.result
                );
            }
        },
        simulate: function (e, t, i) {
            e = E.extend(new E.Event(), i, { type: e, isSimulated: !0 });
            E.event.trigger(e, null, t);
        },
    }),
        E.fn.extend({
            trigger: function (e, t) {
                return this.each(function () {
                    E.event.trigger(e, t, this);
                });
            },
            triggerHandler: function (e, t) {
                var i = this[0];
                if (i) return E.event.trigger(e, t, i, !0);
            },
        }),
        y.focusin ||
            E.each({ focus: "focusin", blur: "focusout" }, function (i, n) {
                function r(e) {
                    E.event.simulate(n, e.target, E.event.fix(e));
                }
                E.event.special[n] = {
                    setup: function () {
                        var e = this.ownerDocument || this.document || this,
                            t = U.access(e, n);
                        t || e.addEventListener(i, r, !0), U.access(e, n, (t || 0) + 1);
                    },
                    teardown: function () {
                        var e = this.ownerDocument || this.document || this,
                            t = U.access(e, n) - 1;
                        t ? U.access(e, n, t) : (e.removeEventListener(i, r, !0), U.remove(e, n));
                    },
                };
            });
    var Mt = C.location,
        Dt = { guid: Date.now() },
        It = /\?/;
    E.parseXML = function (e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = new C.DOMParser().parseFromString(e, "text/xml");
        } catch (e) {
            t = void 0;
        }
        return (t && !t.getElementsByTagName("parsererror").length) || E.error("Invalid XML: " + e), t;
    };
    var Lt = /\[\]$/,
        Ot = /\r?\n/g,
        At = /^(?:submit|button|image|reset|file)$/i,
        Pt = /^(?:input|select|textarea|keygen)/i;
    (E.param = function (e, t) {
        function i(e, t) {
            (t = b(t) ? t() : t), (r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == t ? "" : t));
        }
        var n,
            r = [];
        if (null == e) return "";
        if (Array.isArray(e) || (e.jquery && !E.isPlainObject(e)))
            E.each(e, function () {
                i(this.name, this.value);
            });
        else
            for (n in e)
                !(function i(n, e, r, a) {
                    if (Array.isArray(e))
                        E.each(e, function (e, t) {
                            r || Lt.test(n) ? a(n, t) : i(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, a);
                        });
                    else if (r || "object" !== f(e)) a(n, e);
                    else for (var t in e) i(n + "[" + t + "]", e[t], r, a);
                })(n, e[n], t, i);
        return r.join("&");
    }),
        E.fn.extend({
            serialize: function () {
                return E.param(this.serializeArray());
            },
            serializeArray: function () {
                return this.map(function () {
                    var e = E.prop(this, "elements");
                    return e ? E.makeArray(e) : this;
                })
                    .filter(function () {
                        var e = this.type;
                        return this.name && !E(this).is(":disabled") && Pt.test(this.nodeName) && !At.test(e) && (this.checked || !ue.test(e));
                    })
                    .map(function (e, t) {
                        var i = E(this).val();
                        return null == i
                            ? null
                            : Array.isArray(i)
                            ? E.map(i, function (e) {
                                  return { name: t.name, value: e.replace(Ot, "\r\n") };
                              })
                            : { name: t.name, value: i.replace(Ot, "\r\n") };
                    })
                    .get();
            },
        });
    var Nt = /%20/g,
        zt = /#.*$/,
        Bt = /([?&])_=[^&]*/,
        jt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Ht = /^(?:GET|HEAD)$/,
        Rt = /^\/\//,
        $t = {},
        qt = {},
        Wt = "*/".concat("*"),
        Ft = T.createElement("a");
    function Yt(a) {
        return function (e, t) {
            "string" != typeof e && ((t = e), (e = "*"));
            var i,
                n = 0,
                r = e.toLowerCase().match(N) || [];
            if (b(t)) for (; (i = r[n++]); ) "+" === i[0] ? ((i = i.slice(1) || "*"), (a[i] = a[i] || []).unshift(t)) : (a[i] = a[i] || []).push(t);
        };
    }
    function Vt(t, n, r, a) {
        var s = {},
            o = t === qt;
        function l(e) {
            var i;
            return (
                (s[e] = !0),
                E.each(t[e] || [], function (e, t) {
                    t = t(n, r, a);
                    return "string" != typeof t || o || s[t] ? (o ? !(i = t) : void 0) : (n.dataTypes.unshift(t), l(t), !1);
                }),
                i
            );
        }
        return l(n.dataTypes[0]) || (!s["*"] && l("*"));
    }
    function Gt(e, t) {
        var i,
            n,
            r = E.ajaxSettings.flatOptions || {};
        for (i in t) void 0 !== t[i] && ((r[i] ? e : (n = n || {}))[i] = t[i]);
        return n && E.extend(!0, e, n), e;
    }
    (Ft.href = Mt.href),
        E.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Mt.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Mt.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: { "*": Wt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": E.parseXML },
                flatOptions: { url: !0, context: !0 },
            },
            ajaxSetup: function (e, t) {
                return t ? Gt(Gt(e, E.ajaxSettings), t) : Gt(E.ajaxSettings, e);
            },
            ajaxPrefilter: Yt($t),
            ajaxTransport: Yt(qt),
            ajax: function (e, t) {
                "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
                var l,
                    d,
                    u,
                    i,
                    c,
                    n,
                    h,
                    p,
                    r,
                    f = E.ajaxSetup({}, t),
                    m = f.context || f,
                    g = f.context && (m.nodeType || m.jquery) ? E(m) : E.event,
                    v = E.Deferred(),
                    y = E.Callbacks("once memory"),
                    b = f.statusCode || {},
                    a = {},
                    s = {},
                    o = "canceled",
                    w = {
                        readyState: 0,
                        getResponseHeader: function (e) {
                            var t;
                            if (h) {
                                if (!i) for (i = {}; (t = jt.exec(u)); ) i[t[1].toLowerCase() + " "] = (i[t[1].toLowerCase() + " "] || []).concat(t[2]);
                                t = i[e.toLowerCase() + " "];
                            }
                            return null == t ? null : t.join(", ");
                        },
                        getAllResponseHeaders: function () {
                            return h ? u : null;
                        },
                        setRequestHeader: function (e, t) {
                            return null == h && ((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e), (a[e] = t)), this;
                        },
                        overrideMimeType: function (e) {
                            return null == h && (f.mimeType = e), this;
                        },
                        statusCode: function (e) {
                            if (e)
                                if (h) w.always(e[w.status]);
                                else for (var t in e) b[t] = [b[t], e[t]];
                            return this;
                        },
                        abort: function (e) {
                            e = e || o;
                            return l && l.abort(e), x(0, e), this;
                        },
                    };
                if (
                    (v.promise(w),
                    (f.url = ((e || f.url || Mt.href) + "").replace(Rt, Mt.protocol + "//")),
                    (f.type = t.method || t.type || f.method || f.type),
                    (f.dataTypes = (f.dataType || "*").toLowerCase().match(N) || [""]),
                    null == f.crossDomain)
                ) {
                    n = T.createElement("a");
                    try {
                        (n.href = f.url), (n.href = n.href), (f.crossDomain = Ft.protocol + "//" + Ft.host != n.protocol + "//" + n.host);
                    } catch (e) {
                        f.crossDomain = !0;
                    }
                }
                if ((f.data && f.processData && "string" != typeof f.data && (f.data = E.param(f.data, f.traditional)), Vt($t, f, t, w), h)) return w;
                for (r in ((p = E.event && f.global) && 0 == E.active++ && E.event.trigger("ajaxStart"),
                (f.type = f.type.toUpperCase()),
                (f.hasContent = !Ht.test(f.type)),
                (d = f.url.replace(zt, "")),
                f.hasContent
                    ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Nt, "+"))
                    : ((e = f.url.slice(d.length)),
                      f.data && (f.processData || "string" == typeof f.data) && ((d += (It.test(d) ? "&" : "?") + f.data), delete f.data),
                      !1 === f.cache && ((d = d.replace(Bt, "$1")), (e = (It.test(d) ? "&" : "?") + "_=" + Dt.guid++ + e)),
                      (f.url = d + e)),
                f.ifModified && (E.lastModified[d] && w.setRequestHeader("If-Modified-Since", E.lastModified[d]), E.etag[d] && w.setRequestHeader("If-None-Match", E.etag[d])),
                ((f.data && f.hasContent && !1 !== f.contentType) || t.contentType) && w.setRequestHeader("Content-Type", f.contentType),
                w.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Wt + "; q=0.01" : "") : f.accepts["*"]),
                f.headers))
                    w.setRequestHeader(r, f.headers[r]);
                if (f.beforeSend && (!1 === f.beforeSend.call(m, w, f) || h)) return w.abort();
                if (((o = "abort"), y.add(f.complete), w.done(f.success), w.fail(f.error), (l = Vt(qt, f, t, w)))) {
                    if (((w.readyState = 1), p && g.trigger("ajaxSend", [w, f]), h)) return w;
                    f.async &&
                        0 < f.timeout &&
                        (c = C.setTimeout(function () {
                            w.abort("timeout");
                        }, f.timeout));
                    try {
                        (h = !1), l.send(a, x);
                    } catch (e) {
                        if (h) throw e;
                        x(-1, e);
                    }
                } else x(-1, "No Transport");
                function x(e, t, i, n) {
                    var r,
                        a,
                        s,
                        o = t;
                    h ||
                        ((h = !0),
                        c && C.clearTimeout(c),
                        (l = void 0),
                        (u = n || ""),
                        (w.readyState = 0 < e ? 4 : 0),
                        (n = (200 <= e && e < 300) || 304 === e),
                        i &&
                            (s = (function (e, t, i) {
                                for (var n, r, a, s, o = e.contents, l = e.dataTypes; "*" === l[0]; ) l.shift(), void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
                                if (n)
                                    for (r in o)
                                        if (o[r] && o[r].test(n)) {
                                            l.unshift(r);
                                            break;
                                        }
                                if (l[0] in i) a = l[0];
                                else {
                                    for (r in i) {
                                        if (!l[0] || e.converters[r + " " + l[0]]) {
                                            a = r;
                                            break;
                                        }
                                        s = s || r;
                                    }
                                    a = a || s;
                                }
                                if (a) return a !== l[0] && l.unshift(a), i[a];
                            })(f, w, i)),
                        !n && -1 < E.inArray("script", f.dataTypes) && (f.converters["text script"] = function () {}),
                        (s = (function (e, t, i, n) {
                            var r,
                                a,
                                s,
                                o,
                                l,
                                d = {},
                                u = e.dataTypes.slice();
                            if (u[1]) for (s in e.converters) d[s.toLowerCase()] = e.converters[s];
                            for (a = u.shift(); a; )
                                if ((e.responseFields[a] && (i[e.responseFields[a]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), (l = a), (a = u.shift())))
                                    if ("*" === a) a = l;
                                    else if ("*" !== l && l !== a) {
                                        if (!(s = d[l + " " + a] || d["* " + a]))
                                            for (r in d)
                                                if (((o = r.split(" ")), o[1] === a && (s = d[l + " " + o[0]] || d["* " + o[0]]))) {
                                                    !0 === s ? (s = d[r]) : !0 !== d[r] && ((a = o[0]), u.unshift(o[1]));
                                                    break;
                                                }
                                        if (!0 !== s)
                                            if (s && e.throws) t = s(t);
                                            else
                                                try {
                                                    t = s(t);
                                                } catch (e) {
                                                    return { state: "parsererror", error: s ? e : "No conversion from " + l + " to " + a };
                                                }
                                    }
                            return { state: "success", data: t };
                        })(f, s, w, n)),
                        n
                            ? (f.ifModified && ((i = w.getResponseHeader("Last-Modified")) && (E.lastModified[d] = i), (i = w.getResponseHeader("etag")) && (E.etag[d] = i)),
                              204 === e || "HEAD" === f.type ? (o = "nocontent") : 304 === e ? (o = "notmodified") : ((o = s.state), (r = s.data), (n = !(a = s.error))))
                            : ((a = o), (!e && o) || ((o = "error"), e < 0 && (e = 0))),
                        (w.status = e),
                        (w.statusText = (t || o) + ""),
                        n ? v.resolveWith(m, [r, o, w]) : v.rejectWith(m, [w, o, a]),
                        w.statusCode(b),
                        (b = void 0),
                        p && g.trigger(n ? "ajaxSuccess" : "ajaxError", [w, f, n ? r : a]),
                        y.fireWith(m, [w, o]),
                        p && (g.trigger("ajaxComplete", [w, f]), --E.active || E.event.trigger("ajaxStop")));
                }
                return w;
            },
            getJSON: function (e, t, i) {
                return E.get(e, t, i, "json");
            },
            getScript: function (e, t) {
                return E.get(e, void 0, t, "script");
            },
        }),
        E.each(["get", "post"], function (e, r) {
            E[r] = function (e, t, i, n) {
                return b(t) && ((n = n || i), (i = t), (t = void 0)), E.ajax(E.extend({ url: e, type: r, dataType: n, data: t, success: i }, E.isPlainObject(e) && e));
            };
        }),
        E.ajaxPrefilter(function (e) {
            for (var t in e.headers) "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "");
        }),
        (E._evalUrl = function (e, t, i) {
            return E.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: { "text script": function () {} },
                dataFilter: function (e) {
                    E.globalEval(e, t, i);
                },
            });
        }),
        E.fn.extend({
            wrapAll: function (e) {
                return (
                    this[0] &&
                        (b(e) && (e = e.call(this[0])),
                        (e = E(e, this[0].ownerDocument).eq(0).clone(!0)),
                        this[0].parentNode && e.insertBefore(this[0]),
                        e
                            .map(function () {
                                for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                                return e;
                            })
                            .append(this)),
                    this
                );
            },
            wrapInner: function (i) {
                return b(i)
                    ? this.each(function (e) {
                          E(this).wrapInner(i.call(this, e));
                      })
                    : this.each(function () {
                          var e = E(this),
                              t = e.contents();
                          t.length ? t.wrapAll(i) : e.append(i);
                      });
            },
            wrap: function (t) {
                var i = b(t);
                return this.each(function (e) {
                    E(this).wrapAll(i ? t.call(this, e) : t);
                });
            },
            unwrap: function (e) {
                return (
                    this.parent(e)
                        .not("body")
                        .each(function () {
                            E(this).replaceWith(this.childNodes);
                        }),
                    this
                );
            },
        }),
        (E.expr.pseudos.hidden = function (e) {
            return !E.expr.pseudos.visible(e);
        }),
        (E.expr.pseudos.visible = function (e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
        }),
        (E.ajaxSettings.xhr = function () {
            try {
                return new C.XMLHttpRequest();
            } catch (e) {}
        });
    var Xt = { 0: 200, 1223: 204 },
        Ut = E.ajaxSettings.xhr();
    (y.cors = !!Ut && "withCredentials" in Ut),
        (y.ajax = Ut = !!Ut),
        E.ajaxTransport(function (r) {
            var a, s;
            if (y.cors || (Ut && !r.crossDomain))
                return {
                    send: function (e, t) {
                        var i,
                            n = r.xhr();
                        if ((n.open(r.type, r.url, r.async, r.username, r.password), r.xhrFields)) for (i in r.xhrFields) n[i] = r.xhrFields[i];
                        for (i in (r.mimeType && n.overrideMimeType && n.overrideMimeType(r.mimeType), r.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e)) n.setRequestHeader(i, e[i]);
                        (a = function (e) {
                            return function () {
                                a &&
                                    ((a = s = n.onload = n.onerror = n.onabort = n.ontimeout = n.onreadystatechange = null),
                                    "abort" === e
                                        ? n.abort()
                                        : "error" === e
                                        ? "number" != typeof n.status
                                            ? t(0, "error")
                                            : t(n.status, n.statusText)
                                        : t(Xt[n.status] || n.status, n.statusText, "text" !== (n.responseType || "text") || "string" != typeof n.responseText ? { binary: n.response } : { text: n.responseText }, n.getAllResponseHeaders()));
                            };
                        }),
                            (n.onload = a()),
                            (s = n.onerror = n.ontimeout = a("error")),
                            void 0 !== n.onabort
                                ? (n.onabort = s)
                                : (n.onreadystatechange = function () {
                                      4 === n.readyState &&
                                          C.setTimeout(function () {
                                              a && s();
                                          });
                                  }),
                            (a = a("abort"));
                        try {
                            n.send((r.hasContent && r.data) || null);
                        } catch (e) {
                            if (a) throw e;
                        }
                    },
                    abort: function () {
                        a && a();
                    },
                };
        }),
        E.ajaxPrefilter(function (e) {
            e.crossDomain && (e.contents.script = !1);
        }),
        E.ajaxSetup({
            accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
                "text script": function (e) {
                    return E.globalEval(e), e;
                },
            },
        }),
        E.ajaxPrefilter("script", function (e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
        }),
        E.ajaxTransport("script", function (i) {
            var n, r;
            if (i.crossDomain || i.scriptAttrs)
                return {
                    send: function (e, t) {
                        (n = E("<script>")
                            .attr(i.scriptAttrs || {})
                            .prop({ charset: i.scriptCharset, src: i.url })
                            .on(
                                "load error",
                                (r = function (e) {
                                    n.remove(), (r = null), e && t("error" === e.type ? 404 : 200, e.type);
                                })
                            )),
                            T.head.appendChild(n[0]);
                    },
                    abort: function () {
                        r && r();
                    },
                };
        });
    var Qt = [],
        Kt = /(=)\?(?=&|$)|\?\?/;
    E.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var e = Qt.pop() || E.expando + "_" + Dt.guid++;
            return (this[e] = !0), e;
        },
    }),
        E.ajaxPrefilter("json jsonp", function (e, t, i) {
            var n,
                r,
                a,
                s = !1 !== e.jsonp && (Kt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Kt.test(e.data) && "data");
            if (s || "jsonp" === e.dataTypes[0])
                return (
                    (n = e.jsonpCallback = b(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                    s ? (e[s] = e[s].replace(Kt, "$1" + n)) : !1 !== e.jsonp && (e.url += (It.test(e.url) ? "&" : "?") + e.jsonp + "=" + n),
                    (e.converters["script json"] = function () {
                        return a || E.error(n + " was not called"), a[0];
                    }),
                    (e.dataTypes[0] = "json"),
                    (r = C[n]),
                    (C[n] = function () {
                        a = arguments;
                    }),
                    i.always(function () {
                        void 0 === r ? E(C).removeProp(n) : (C[n] = r), e[n] && ((e.jsonpCallback = t.jsonpCallback), Qt.push(n)), a && b(r) && r(a[0]), (a = r = void 0);
                    }),
                    "script"
                );
        }),
        (y.createHTMLDocument = (((c = T.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>"), 2 === c.childNodes.length)),
        (E.parseHTML = function (e, t, i) {
            return "string" != typeof e
                ? []
                : ("boolean" == typeof t && ((i = t), (t = !1)),
                  t || (y.createHTMLDocument ? (((n = (t = T.implementation.createHTMLDocument("")).createElement("base")).href = T.location.href), t.head.appendChild(n)) : (t = T)),
                  (n = !i && []),
                  (i = M.exec(e)) ? [t.createElement(i[1])] : ((i = ve([e], t, n)), n && n.length && E(n).remove(), E.merge([], i.childNodes)));
            var n;
        }),
        (E.fn.load = function (e, t, i) {
            var n,
                r,
                a,
                s = this,
                o = e.indexOf(" ");
            return (
                -1 < o && ((n = Ct(e.slice(o))), (e = e.slice(0, o))),
                b(t) ? ((i = t), (t = void 0)) : t && "object" == typeof t && (r = "POST"),
                0 < s.length &&
                    E.ajax({ url: e, type: r || "GET", dataType: "html", data: t })
                        .done(function (e) {
                            (a = arguments), s.html(n ? E("<div>").append(E.parseHTML(e)).find(n) : e);
                        })
                        .always(
                            i &&
                                function (e, t) {
                                    s.each(function () {
                                        i.apply(this, a || [e.responseText, t, e]);
                                    });
                                }
                        ),
                this
            );
        }),
        (E.expr.pseudos.animated = function (t) {
            return E.grep(E.timers, function (e) {
                return t === e.elem;
            }).length;
        }),
        (E.offset = {
            setOffset: function (e, t, i) {
                var n,
                    r,
                    a,
                    s,
                    o = E.css(e, "position"),
                    l = E(e),
                    d = {};
                "static" === o && (e.style.position = "relative"),
                    (a = l.offset()),
                    (n = E.css(e, "top")),
                    (s = E.css(e, "left")),
                    (s = ("absolute" === o || "fixed" === o) && -1 < (n + s).indexOf("auto") ? ((r = (o = l.position()).top), o.left) : ((r = parseFloat(n) || 0), parseFloat(s) || 0)),
                    null != (t = b(t) ? t.call(e, i, E.extend({}, a)) : t).top && (d.top = t.top - a.top + r),
                    null != t.left && (d.left = t.left - a.left + s),
                    "using" in t ? t.using.call(e, d) : ("number" == typeof d.top && (d.top += "px"), "number" == typeof d.left && (d.left += "px"), l.css(d));
            },
        }),
        E.fn.extend({
            offset: function (t) {
                if (arguments.length)
                    return void 0 === t
                        ? this
                        : this.each(function (e) {
                              E.offset.setOffset(this, t, e);
                          });
                var e,
                    i = this[0];
                return i ? (i.getClientRects().length ? ((e = i.getBoundingClientRect()), (i = i.ownerDocument.defaultView), { top: e.top + i.pageYOffset, left: e.left + i.pageXOffset }) : { top: 0, left: 0 }) : void 0;
            },
            position: function () {
                if (this[0]) {
                    var e,
                        t,
                        i,
                        n = this[0],
                        r = { top: 0, left: 0 };
                    if ("fixed" === E.css(n, "position")) t = n.getBoundingClientRect();
                    else {
                        for (t = this.offset(), i = n.ownerDocument, e = n.offsetParent || i.documentElement; e && (e === i.body || e === i.documentElement) && "static" === E.css(e, "position"); ) e = e.parentNode;
                        e && e !== n && 1 === e.nodeType && (((r = E(e).offset()).top += E.css(e, "borderTopWidth", !0)), (r.left += E.css(e, "borderLeftWidth", !0)));
                    }
                    return { top: t.top - r.top - E.css(n, "marginTop", !0), left: t.left - r.left - E.css(n, "marginLeft", !0) };
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    for (var e = this.offsetParent; e && "static" === E.css(e, "position"); ) e = e.offsetParent;
                    return e || ne;
                });
            },
        }),
        E.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (t, r) {
            var a = "pageYOffset" === r;
            E.fn[t] = function (e) {
                return q(
                    this,
                    function (e, t, i) {
                        var n;
                        return m(e) ? (n = e) : 9 === e.nodeType && (n = e.defaultView), void 0 === i ? (n ? n[r] : e[t]) : void (n ? n.scrollTo(a ? n.pageXOffset : i, a ? i : n.pageYOffset) : (e[t] = i));
                    },
                    t,
                    e,
                    arguments.length
                );
            };
        }),
        E.each(["top", "left"], function (e, i) {
            E.cssHooks[i] = Qe(y.pixelPosition, function (e, t) {
                if (t) return (t = Ue(e, i)), Fe.test(t) ? E(e).position()[i] + "px" : t;
            });
        }),
        E.each({ Height: "height", Width: "width" }, function (s, o) {
            E.each({ padding: "inner" + s, content: o, "": "outer" + s }, function (n, a) {
                E.fn[a] = function (e, t) {
                    var i = arguments.length && (n || "boolean" != typeof e),
                        r = n || (!0 === e || !0 === t ? "margin" : "border");
                    return q(
                        this,
                        function (e, t, i) {
                            var n;
                            return m(e)
                                ? 0 === a.indexOf("outer")
                                    ? e["inner" + s]
                                    : e.document.documentElement["client" + s]
                                : 9 === e.nodeType
                                ? ((n = e.documentElement), Math.max(e.body["scroll" + s], n["scroll" + s], e.body["offset" + s], n["offset" + s], n["client" + s]))
                                : void 0 === i
                                ? E.css(e, t, r)
                                : E.style(e, t, i, r);
                        },
                        o,
                        i ? e : void 0,
                        i
                    );
                };
            });
        }),
        E.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
            E.fn[t] = function (e) {
                return this.on(t, e);
            };
        }),
        E.fn.extend({
            bind: function (e, t, i) {
                return this.on(e, null, t, i);
            },
            unbind: function (e, t) {
                return this.off(e, null, t);
            },
            delegate: function (e, t, i, n) {
                return this.on(t, e, i, n);
            },
            undelegate: function (e, t, i) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i);
            },
            hover: function (e, t) {
                return this.mouseenter(e).mouseleave(t || e);
            },
        }),
        E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, i) {
            E.fn[i] = function (e, t) {
                return 0 < arguments.length ? this.on(i, null, e, t) : this.trigger(i);
            };
        });
    var Jt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    (E.proxy = function (e, t) {
        var i, n;
        if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), b(e)))
            return (
                (i = o.call(arguments, 2)),
                ((n = function () {
                    return e.apply(t || this, i.concat(o.call(arguments)));
                }).guid = e.guid = e.guid || E.guid++),
                n
            );
    }),
        (E.holdReady = function (e) {
            e ? E.readyWait++ : E.ready(!0);
        }),
        (E.isArray = Array.isArray),
        (E.parseJSON = JSON.parse),
        (E.nodeName = k),
        (E.isFunction = b),
        (E.isWindow = m),
        (E.camelCase = V),
        (E.type = f),
        (E.now = Date.now),
        (E.isNumeric = function (e) {
            var t = E.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
        }),
        (E.trim = function (e) {
            return null == e ? "" : (e + "").replace(Jt, "");
        }),
        "function" == typeof define &&
            define.amd &&
            define("jquery", [], function () {
                return E;
            });
    var Zt = C.jQuery,
        ei = C.$;
    return (
        (E.noConflict = function (e) {
            return C.$ === E && (C.$ = ei), e && C.jQuery === E && (C.jQuery = Zt), E;
        }),
        void 0 === e && (C.jQuery = C.$ = E),
        E
    );
}),
    (function (e, t) {
        "object" == typeof exports && "undefined" != typeof module
            ? t(exports, require("jquery"))
            : "function" == typeof define && define.amd
            ? define(["exports", "jquery"], t)
            : t(((e = "undefined" != typeof globalThis ? globalThis : e || self).bootstrap = {}), e.jQuery);
    })(this, function (e, t) {
        "use strict";
        function i(e) {
            return e && "object" == typeof e && "default" in e ? e : { default: e };
        }
        var u = i(t);
        function n(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        function s(e, t, i) {
            return t && n(e.prototype, t), i && n(e, i), e;
        }
        function o() {
            return (o =
                Object.assign ||
                function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i,
                            n = arguments[t];
                        for (i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
                    }
                    return e;
                }).apply(this, arguments);
        }
        var r = "transitionend";
        function a(e) {
            var t = this,
                i = !1;
            return (
                u.default(this).one(c.TRANSITION_END, function () {
                    i = !0;
                }),
                setTimeout(function () {
                    i || c.triggerTransitionEnd(t);
                }, e),
                this
            );
        }
        var c = {
            TRANSITION_END: "bsTransitionEnd",
            getUID: function (e) {
                for (; (e += ~~(1e6 * Math.random())), document.getElementById(e); );
                return e;
            },
            getSelectorFromElement: function (e) {
                var t = e.getAttribute("data-target");
                (t && "#" !== t) || (t = (e = e.getAttribute("href")) && "#" !== e ? e.trim() : "");
                try {
                    return document.querySelector(t) ? t : null;
                } catch (e) {
                    return null;
                }
            },
            getTransitionDurationFromElement: function (e) {
                if (!e) return 0;
                var t = u.default(e).css("transition-duration"),
                    i = u.default(e).css("transition-delay"),
                    n = parseFloat(t),
                    e = parseFloat(i);
                return n || e ? ((t = t.split(",")[0]), (i = i.split(",")[0]), 1e3 * (parseFloat(t) + parseFloat(i))) : 0;
            },
            reflow: function (e) {
                return e.offsetHeight;
            },
            triggerTransitionEnd: function (e) {
                u.default(e).trigger(r);
            },
            supportsTransitionEnd: function () {
                return Boolean(r);
            },
            isElement: function (e) {
                return (e[0] || e).nodeType;
            },
            typeCheckConfig: function (e, t, i) {
                for (var n in i)
                    if (Object.prototype.hasOwnProperty.call(i, n)) {
                        var r = i[n],
                            a = t[n],
                            s =
                                a && c.isElement(a)
                                    ? "element"
                                    : null == (s = a)
                                    ? "" + s
                                    : {}.toString
                                          .call(s)
                                          .match(/\s([a-z]+)/i)[1]
                                          .toLowerCase();
                        if (!new RegExp(r).test(s)) throw new Error(e.toUpperCase() + ': Option "' + n + '" provided type "' + s + '" but expected type "' + r + '".');
                    }
                var s;
            },
            findShadowRoot: function (e) {
                if (!document.documentElement.attachShadow) return null;
                if ("function" != typeof e.getRootNode) return e instanceof ShadowRoot ? e : e.parentNode ? c.findShadowRoot(e.parentNode) : null;
                e = e.getRootNode();
                return e instanceof ShadowRoot ? e : null;
            },
            jQueryDetection: function () {
                if (void 0 === u.default) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
                var e = u.default.fn.jquery.split(" ")[0].split(".");
                if ((e[0] < 2 && e[1] < 9) || (1 === e[0] && 9 === e[1] && e[2] < 1) || 4 <= e[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
            },
        };
        c.jQueryDetection(),
            (u.default.fn.emulateTransitionEnd = a),
            (u.default.event.special[c.TRANSITION_END] = {
                bindType: r,
                delegateType: r,
                handle: function (e) {
                    if (u.default(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
                },
            });
        var l = "alert",
            d = "bs.alert",
            h = "." + d,
            p = u.default.fn[l],
            f = (function () {
                function n(e) {
                    this._element = e;
                }
                var e = n.prototype;
                return (
                    (e.close = function (e) {
                        var t = this._element;
                        e && (t = this._getRootElement(e)), this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t);
                    }),
                    (e.dispose = function () {
                        u.default.removeData(this._element, d), (this._element = null);
                    }),
                    (e._getRootElement = function (e) {
                        var t = c.getSelectorFromElement(e),
                            i = !1;
                        return (i = (i = t ? document.querySelector(t) : i) || u.default(e).closest(".alert")[0]);
                    }),
                    (e._triggerCloseEvent = function (e) {
                        var t = u.default.Event("close.bs.alert");
                        return u.default(e).trigger(t), t;
                    }),
                    (e._removeElement = function (t) {
                        var e,
                            i = this;
                        u.default(t).removeClass("show"),
                            u.default(t).hasClass("fade")
                                ? ((e = c.getTransitionDurationFromElement(t)),
                                  u
                                      .default(t)
                                      .one(c.TRANSITION_END, function (e) {
                                          return i._destroyElement(t, e);
                                      })
                                      .emulateTransitionEnd(e))
                                : this._destroyElement(t);
                    }),
                    (e._destroyElement = function (e) {
                        u.default(e).detach().trigger("closed.bs.alert").remove();
                    }),
                    (n._jQueryInterface = function (i) {
                        return this.each(function () {
                            var e = u.default(this),
                                t = e.data(d);
                            t || ((t = new n(this)), e.data(d, t)), "close" === i && t[i](this);
                        });
                    }),
                    (n._handleDismiss = function (t) {
                        return function (e) {
                            e && e.preventDefault(), t.close(this);
                        };
                    }),
                    s(n, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "4.6.0";
                            },
                        },
                    ]),
                    n
                );
            })();
        u.default(document).on("click.bs.alert.data-api", '[data-dismiss="alert"]', f._handleDismiss(new f())),
            (u.default.fn[l] = f._jQueryInterface),
            (u.default.fn[l].Constructor = f),
            (u.default.fn[l].noConflict = function () {
                return (u.default.fn[l] = p), f._jQueryInterface;
            });
        var m = "button",
            g = "bs.button",
            v = "." + g,
            t = ".data-api",
            y = u.default.fn[m],
            b = "active",
            h = '[data-toggle^="button"]',
            w = 'input:not([type="hidden"])',
            x = (function () {
                function r(e) {
                    (this._element = e), (this.shouldAvoidTriggerChange = !1);
                }
                var e = r.prototype;
                return (
                    (e.toggle = function () {
                        var e,
                            t = !0,
                            i = !0,
                            n = u.default(this._element).closest('[data-toggle="buttons"]')[0];
                        !n ||
                            ((e = this._element.querySelector(w)) &&
                                ("radio" === e.type && (e.checked && this._element.classList.contains(b) ? (t = !1) : (n = n.querySelector(".active")) && u.default(n).removeClass(b)),
                                t && (("checkbox" !== e.type && "radio" !== e.type) || (e.checked = !this._element.classList.contains(b)), this.shouldAvoidTriggerChange || u.default(e).trigger("change")),
                                e.focus(),
                                (i = !1))),
                            this._element.hasAttribute("disabled") ||
                                this._element.classList.contains("disabled") ||
                                (i && this._element.setAttribute("aria-pressed", !this._element.classList.contains(b)), t && u.default(this._element).toggleClass(b));
                    }),
                    (e.dispose = function () {
                        u.default.removeData(this._element, g), (this._element = null);
                    }),
                    (r._jQueryInterface = function (i, n) {
                        return this.each(function () {
                            var e = u.default(this),
                                t = e.data(g);
                            t || ((t = new r(this)), e.data(g, t)), (t.shouldAvoidTriggerChange = n), "toggle" === i && t[i]();
                        });
                    }),
                    s(r, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "4.6.0";
                            },
                        },
                    ]),
                    r
                );
            })();
        u
            .default(document)
            .on("click.bs.button.data-api", h, function (e) {
                var t,
                    i = e.target,
                    n = i;
                !(i = !u.default(i).hasClass("btn") ? u.default(i).closest(".btn")[0] : i) ||
                i.hasAttribute("disabled") ||
                i.classList.contains("disabled") ||
                ((t = i.querySelector(w)) && (t.hasAttribute("disabled") || t.classList.contains("disabled")))
                    ? e.preventDefault()
                    : ("INPUT" !== n.tagName && "LABEL" === i.tagName) || x._jQueryInterface.call(u.default(i), "toggle", "INPUT" === n.tagName);
            })
            .on("focus.bs.button.data-api blur.bs.button.data-api", h, function (e) {
                var t = u.default(e.target).closest(".btn")[0];
                u.default(t).toggleClass("focus", /^focus(in)?$/.test(e.type));
            }),
            u.default(window).on("load.bs.button.data-api", function () {
                for (var e = [].slice.call(document.querySelectorAll('[data-toggle="buttons"] .btn')), t = 0, i = e.length; t < i; t++) {
                    var n = e[t],
                        r = n.querySelector(w);
                    r.checked || r.hasAttribute("checked") ? n.classList.add(b) : n.classList.remove(b);
                }
                for (var a = 0, s = (e = [].slice.call(document.querySelectorAll('[data-toggle="button"]'))).length; a < s; a++) {
                    var o = e[a];
                    "true" === o.getAttribute("aria-pressed") ? o.classList.add(b) : o.classList.remove(b);
                }
            }),
            (u.default.fn[m] = x._jQueryInterface),
            (u.default.fn[m].Constructor = x),
            (u.default.fn[m].noConflict = function () {
                return (u.default.fn[m] = y), x._jQueryInterface;
            });
        var C = "carousel",
            T = "bs.carousel",
            E = "." + T,
            v = ".data-api",
            S = u.default.fn[C],
            _ = { interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0, touch: !0 },
            k = { interval: "(number|boolean)", keyboard: "boolean", slide: "(boolean|string)", pause: "(string|boolean)", wrap: "boolean", touch: "boolean" },
            M = "next",
            D = "prev",
            I = "slid" + E,
            L = "active",
            O = ".active.carousel-item",
            A = { TOUCH: "touch", PEN: "pen" },
            P = (function () {
                function r(e, t) {
                    (this._items = null),
                        (this._interval = null),
                        (this._activeElement = null),
                        (this._isPaused = !1),
                        (this._isSliding = !1),
                        (this.touchTimeout = null),
                        (this.touchStartX = 0),
                        (this.touchDeltaX = 0),
                        (this._config = this._getConfig(t)),
                        (this._element = e),
                        (this._indicatorsElement = this._element.querySelector(".carousel-indicators")),
                        (this._touchSupported = "ontouchstart" in document.documentElement || 0 < navigator.maxTouchPoints),
                        (this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent)),
                        this._addEventListeners();
                }
                var e = r.prototype;
                return (
                    (e.next = function () {
                        this._isSliding || this._slide(M);
                    }),
                    (e.nextWhenVisible = function () {
                        var e = u.default(this._element);
                        !document.hidden && e.is(":visible") && "hidden" !== e.css("visibility") && this.next();
                    }),
                    (e.prev = function () {
                        this._isSliding || this._slide(D);
                    }),
                    (e.pause = function (e) {
                        e || (this._isPaused = !0), this._element.querySelector(".carousel-item-next, .carousel-item-prev") && (c.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), (this._interval = null);
                    }),
                    (e.cycle = function (e) {
                        e || (this._isPaused = !1),
                            this._interval && (clearInterval(this._interval), (this._interval = null)),
                            this._config.interval && !this._isPaused && (this._updateInterval(), (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval)));
                    }),
                    (e.to = function (e) {
                        var t = this;
                        this._activeElement = this._element.querySelector(O);
                        var i = this._getItemIndex(this._activeElement);
                        if (!(e > this._items.length - 1 || e < 0))
                            if (this._isSliding)
                                u.default(this._element).one(I, function () {
                                    return t.to(e);
                                });
                            else {
                                if (i === e) return this.pause(), void this.cycle();
                                i = i < e ? M : D;
                                this._slide(i, this._items[e]);
                            }
                    }),
                    (e.dispose = function () {
                        u.default(this._element).off(E),
                            u.default.removeData(this._element, T),
                            (this._items = null),
                            (this._config = null),
                            (this._element = null),
                            (this._interval = null),
                            (this._isPaused = null),
                            (this._isSliding = null),
                            (this._activeElement = null),
                            (this._indicatorsElement = null);
                    }),
                    (e._getConfig = function (e) {
                        return (e = o({}, _, e)), c.typeCheckConfig(C, e, k), e;
                    }),
                    (e._handleSwipe = function () {
                        var e = Math.abs(this.touchDeltaX);
                        e <= 40 || ((e = e / this.touchDeltaX), (this.touchDeltaX = 0) < e && this.prev(), e < 0 && this.next());
                    }),
                    (e._addEventListeners = function () {
                        var t = this;
                        this._config.keyboard &&
                            u.default(this._element).on("keydown.bs.carousel", function (e) {
                                return t._keydown(e);
                            }),
                            "hover" === this._config.pause &&
                                u
                                    .default(this._element)
                                    .on("mouseenter.bs.carousel", function (e) {
                                        return t.pause(e);
                                    })
                                    .on("mouseleave.bs.carousel", function (e) {
                                        return t.cycle(e);
                                    }),
                            this._config.touch && this._addTouchEventListeners();
                    }),
                    (e._addTouchEventListeners = function () {
                        var e,
                            t,
                            i = this;
                        this._touchSupported &&
                            ((e = function (e) {
                                i._pointerEvent && A[e.originalEvent.pointerType.toUpperCase()] ? (i.touchStartX = e.originalEvent.clientX) : i._pointerEvent || (i.touchStartX = e.originalEvent.touches[0].clientX);
                            }),
                            (t = function (e) {
                                i._pointerEvent && A[e.originalEvent.pointerType.toUpperCase()] && (i.touchDeltaX = e.originalEvent.clientX - i.touchStartX),
                                    i._handleSwipe(),
                                    "hover" === i._config.pause &&
                                        (i.pause(),
                                        i.touchTimeout && clearTimeout(i.touchTimeout),
                                        (i.touchTimeout = setTimeout(function (e) {
                                            return i.cycle(e);
                                        }, 500 + i._config.interval)));
                            }),
                            u.default(this._element.querySelectorAll(".carousel-item img")).on("dragstart.bs.carousel", function (e) {
                                return e.preventDefault();
                            }),
                            this._pointerEvent
                                ? (u.default(this._element).on("pointerdown.bs.carousel", e), u.default(this._element).on("pointerup.bs.carousel", t), this._element.classList.add("pointer-event"))
                                : (u.default(this._element).on("touchstart.bs.carousel", e),
                                  u.default(this._element).on("touchmove.bs.carousel", function (e) {
                                      (e = e).originalEvent.touches && 1 < e.originalEvent.touches.length ? (i.touchDeltaX = 0) : (i.touchDeltaX = e.originalEvent.touches[0].clientX - i.touchStartX);
                                  }),
                                  u.default(this._element).on("touchend.bs.carousel", t)));
                    }),
                    (e._keydown = function (e) {
                        if (!/input|textarea/i.test(e.target.tagName))
                            switch (e.which) {
                                case 37:
                                    e.preventDefault(), this.prev();
                                    break;
                                case 39:
                                    e.preventDefault(), this.next();
                            }
                    }),
                    (e._getItemIndex = function (e) {
                        return (this._items = e && e.parentNode ? [].slice.call(e.parentNode.querySelectorAll(".carousel-item")) : []), this._items.indexOf(e);
                    }),
                    (e._getItemByDirection = function (e, t) {
                        var i = e === M,
                            n = e === D,
                            r = this._getItemIndex(t),
                            a = this._items.length - 1;
                        if (((n && 0 === r) || (i && r === a)) && !this._config.wrap) return t;
                        e = (r + (e === D ? -1 : 1)) % this._items.length;
                        return -1 == e ? this._items[this._items.length - 1] : this._items[e];
                    }),
                    (e._triggerSlideEvent = function (e, t) {
                        var i = this._getItemIndex(e),
                            n = this._getItemIndex(this._element.querySelector(O)),
                            i = u.default.Event("slide.bs.carousel", { relatedTarget: e, direction: t, from: n, to: i });
                        return u.default(this._element).trigger(i), i;
                    }),
                    (e._setActiveIndicatorElement = function (e) {
                        var t;
                        this._indicatorsElement &&
                            ((t = [].slice.call(this._indicatorsElement.querySelectorAll(".active"))), u.default(t).removeClass(L), (e = this._indicatorsElement.children[this._getItemIndex(e)]) && u.default(e).addClass(L));
                    }),
                    (e._updateInterval = function () {
                        var e = this._activeElement || this._element.querySelector(O);
                        e &&
                            ((e = parseInt(e.getAttribute("data-interval"), 10))
                                ? ((this._config.defaultInterval = this._config.defaultInterval || this._config.interval), (this._config.interval = e))
                                : (this._config.interval = this._config.defaultInterval || this._config.interval));
                    }),
                    (e._slide = function (e, t) {
                        var i,
                            n,
                            r,
                            a = this,
                            s = this._element.querySelector(O),
                            o = this._getItemIndex(s),
                            l = t || (s && this._getItemByDirection(e, s)),
                            d = this._getItemIndex(l),
                            t = Boolean(this._interval),
                            e = e === M ? ((i = "carousel-item-left"), (n = "carousel-item-next"), "left") : ((i = "carousel-item-right"), (n = "carousel-item-prev"), "right");
                        l && u.default(l).hasClass(L)
                            ? (this._isSliding = !1)
                            : this._triggerSlideEvent(l, e).isDefaultPrevented() ||
                              (s &&
                                  l &&
                                  ((this._isSliding = !0),
                                  t && this.pause(),
                                  this._setActiveIndicatorElement(l),
                                  (this._activeElement = l),
                                  (r = u.default.Event(I, { relatedTarget: l, direction: e, from: o, to: d })),
                                  u.default(this._element).hasClass("slide")
                                      ? (u.default(l).addClass(n),
                                        c.reflow(l),
                                        u.default(s).addClass(i),
                                        u.default(l).addClass(i),
                                        (d = c.getTransitionDurationFromElement(s)),
                                        u
                                            .default(s)
                                            .one(c.TRANSITION_END, function () {
                                                u
                                                    .default(l)
                                                    .removeClass(i + " " + n)
                                                    .addClass(L),
                                                    u.default(s).removeClass(L + " " + n + " " + i),
                                                    (a._isSliding = !1),
                                                    setTimeout(function () {
                                                        return u.default(a._element).trigger(r);
                                                    }, 0);
                                            })
                                            .emulateTransitionEnd(d))
                                      : (u.default(s).removeClass(L), u.default(l).addClass(L), (this._isSliding = !1), u.default(this._element).trigger(r)),
                                  t && this.cycle()));
                    }),
                    (r._jQueryInterface = function (n) {
                        return this.each(function () {
                            var e = u.default(this).data(T),
                                t = o({}, _, u.default(this).data());
                            "object" == typeof n && (t = o({}, t, n));
                            var i = "string" == typeof n ? n : t.slide;
                            if ((e || ((e = new r(this, t)), u.default(this).data(T, e)), "number" == typeof n)) e.to(n);
                            else if ("string" == typeof i) {
                                if (void 0 === e[i]) throw new TypeError('No method named "' + i + '"');
                                e[i]();
                            } else t.interval && t.ride && (e.pause(), e.cycle());
                        });
                    }),
                    (r._dataApiClickHandler = function (e) {
                        var t,
                            i,
                            n = c.getSelectorFromElement(this);
                        !n ||
                            ((t = u.default(n)[0]) &&
                                u.default(t).hasClass("carousel") &&
                                ((i = o({}, u.default(t).data(), u.default(this).data())),
                                (n = this.getAttribute("data-slide-to")) && (i.interval = !1),
                                r._jQueryInterface.call(u.default(t), i),
                                n && u.default(t).data(T).to(n),
                                e.preventDefault()));
                    }),
                    s(r, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "4.6.0";
                            },
                        },
                        {
                            key: "Default",
                            get: function () {
                                return _;
                            },
                        },
                    ]),
                    r
                );
            })();
        u.default(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", P._dataApiClickHandler),
            u.default(window).on("load.bs.carousel.data-api", function () {
                for (var e = [].slice.call(document.querySelectorAll('[data-ride="carousel"]')), t = 0, i = e.length; t < i; t++) {
                    var n = u.default(e[t]);
                    P._jQueryInterface.call(n, n.data());
                }
            }),
            (u.default.fn[C] = P._jQueryInterface),
            (u.default.fn[C].Constructor = P),
            (u.default.fn[C].noConflict = function () {
                return (u.default.fn[C] = S), P._jQueryInterface;
            });
        var N = "collapse",
            z = "bs.collapse",
            t = "." + z,
            B = u.default.fn[N],
            j = { toggle: !0, parent: "" },
            H = { toggle: "boolean", parent: "(string|element)" },
            R = "show",
            $ = "collapse",
            q = "collapsing",
            W = "collapsed",
            F = '[data-toggle="collapse"]',
            Y = (function () {
                function a(t, e) {
                    (this._isTransitioning = !1),
                        (this._element = t),
                        (this._config = this._getConfig(e)),
                        (this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]')));
                    for (var i = [].slice.call(document.querySelectorAll(F)), n = 0, r = i.length; n < r; n++) {
                        var a = i[n],
                            s = c.getSelectorFromElement(a),
                            o = [].slice.call(document.querySelectorAll(s)).filter(function (e) {
                                return e === t;
                            });
                        null !== s && 0 < o.length && ((this._selector = s), this._triggerArray.push(a));
                    }
                    (this._parent = this._config.parent ? this._getParent() : null), this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle();
                }
                var e = a.prototype;
                return (
                    (e.toggle = function () {
                        u.default(this._element).hasClass(R) ? this.hide() : this.show();
                    }),
                    (e.show = function () {
                        var e,
                            t,
                            i,
                            n,
                            r = this;
                        this._isTransitioning ||
                            u.default(this._element).hasClass(R) ||
                            ((n =
                                this._parent &&
                                0 ===
                                    (n = [].slice.call(this._parent.querySelectorAll(".show, .collapsing")).filter(function (e) {
                                        return "string" == typeof r._config.parent ? e.getAttribute("data-parent") === r._config.parent : e.classList.contains($);
                                    })).length
                                    ? null
                                    : n) &&
                                (i = u.default(n).not(this._selector).data(z)) &&
                                i._isTransitioning) ||
                            ((e = u.default.Event("show.bs.collapse")),
                            u.default(this._element).trigger(e),
                            e.isDefaultPrevented() ||
                                (n && (a._jQueryInterface.call(u.default(n).not(this._selector), "hide"), i || u.default(n).data(z, null)),
                                (t = this._getDimension()),
                                u.default(this._element).removeClass($).addClass(q),
                                (this._element.style[t] = 0),
                                this._triggerArray.length && u.default(this._triggerArray).removeClass(W).attr("aria-expanded", !0),
                                this.setTransitioning(!0),
                                (i = "scroll" + (t[0].toUpperCase() + t.slice(1))),
                                (n = c.getTransitionDurationFromElement(this._element)),
                                u
                                    .default(this._element)
                                    .one(c.TRANSITION_END, function () {
                                        u
                                            .default(r._element)
                                            .removeClass(q)
                                            .addClass($ + " " + R),
                                            (r._element.style[t] = ""),
                                            r.setTransitioning(!1),
                                            u.default(r._element).trigger("shown.bs.collapse");
                                    })
                                    .emulateTransitionEnd(n),
                                (this._element.style[t] = this._element[i] + "px")));
                    }),
                    (e.hide = function () {
                        var e = this;
                        if (!this._isTransitioning && u.default(this._element).hasClass(R)) {
                            var t = u.default.Event("hide.bs.collapse");
                            if ((u.default(this._element).trigger(t), !t.isDefaultPrevented())) {
                                t = this._getDimension();
                                (this._element.style[t] = this._element.getBoundingClientRect()[t] + "px"),
                                    c.reflow(this._element),
                                    u
                                        .default(this._element)
                                        .addClass(q)
                                        .removeClass($ + " " + R);
                                var i = this._triggerArray.length;
                                if (0 < i)
                                    for (var n = 0; n < i; n++) {
                                        var r = this._triggerArray[n],
                                            a = c.getSelectorFromElement(r);
                                        null !== a && (u.default([].slice.call(document.querySelectorAll(a))).hasClass(R) || u.default(r).addClass(W).attr("aria-expanded", !1));
                                    }
                                this.setTransitioning(!0);
                                this._element.style[t] = "";
                                t = c.getTransitionDurationFromElement(this._element);
                                u.default(this._element)
                                    .one(c.TRANSITION_END, function () {
                                        e.setTransitioning(!1), u.default(e._element).removeClass(q).addClass($).trigger("hidden.bs.collapse");
                                    })
                                    .emulateTransitionEnd(t);
                            }
                        }
                    }),
                    (e.setTransitioning = function (e) {
                        this._isTransitioning = e;
                    }),
                    (e.dispose = function () {
                        u.default.removeData(this._element, z), (this._config = null), (this._parent = null), (this._element = null), (this._triggerArray = null), (this._isTransitioning = null);
                    }),
                    (e._getConfig = function (e) {
                        return ((e = o({}, j, e)).toggle = Boolean(e.toggle)), c.typeCheckConfig(N, e, H), e;
                    }),
                    (e._getDimension = function () {
                        return u.default(this._element).hasClass("width") ? "width" : "height";
                    }),
                    (e._getParent = function () {
                        var e,
                            i = this;
                        c.isElement(this._config.parent) ? ((e = this._config.parent), void 0 !== this._config.parent.jquery && (e = this._config.parent[0])) : (e = document.querySelector(this._config.parent));
                        var t = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]',
                            t = [].slice.call(e.querySelectorAll(t));
                        return (
                            u.default(t).each(function (e, t) {
                                i._addAriaAndCollapsedClass(a._getTargetFromElement(t), [t]);
                            }),
                            e
                        );
                    }),
                    (e._addAriaAndCollapsedClass = function (e, t) {
                        e = u.default(e).hasClass(R);
                        t.length && u.default(t).toggleClass(W, !e).attr("aria-expanded", e);
                    }),
                    (a._getTargetFromElement = function (e) {
                        e = c.getSelectorFromElement(e);
                        return e ? document.querySelector(e) : null;
                    }),
                    (a._jQueryInterface = function (n) {
                        return this.each(function () {
                            var e = u.default(this),
                                t = e.data(z),
                                i = o({}, j, e.data(), "object" == typeof n && n ? n : {});
                            if ((!t && i.toggle && "string" == typeof n && /show|hide/.test(n) && (i.toggle = !1), t || ((t = new a(this, i)), e.data(z, t)), "string" == typeof n)) {
                                if (void 0 === t[n]) throw new TypeError('No method named "' + n + '"');
                                t[n]();
                            }
                        });
                    }),
                    s(a, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "4.6.0";
                            },
                        },
                        {
                            key: "Default",
                            get: function () {
                                return j;
                            },
                        },
                    ]),
                    a
                );
            })();
        u.default(document).on("click.bs.collapse.data-api", F, function (e) {
            "A" === e.currentTarget.tagName && e.preventDefault();
            var i = u.default(this),
                e = c.getSelectorFromElement(this),
                e = [].slice.call(document.querySelectorAll(e));
            u.default(e).each(function () {
                var e = u.default(this),
                    t = e.data(z) ? "toggle" : i.data();
                Y._jQueryInterface.call(e, t);
            });
        }),
            (u.default.fn[N] = Y._jQueryInterface),
            (u.default.fn[N].Constructor = Y),
            (u.default.fn[N].noConflict = function () {
                return (u.default.fn[N] = B), Y._jQueryInterface;
            });
        var V = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator,
            G = (function () {
                for (var e = ["Edge", "Trident", "Firefox"], t = 0; t < e.length; t += 1) if (V && 0 <= navigator.userAgent.indexOf(e[t])) return 1;
                return 0;
            })();
        var X =
            V && window.Promise
                ? function (e) {
                      var t = !1;
                      return function () {
                          t ||
                              ((t = !0),
                              window.Promise.resolve().then(function () {
                                  (t = !1), e();
                              }));
                      };
                  }
                : function (e) {
                      var t = !1;
                      return function () {
                          t ||
                              ((t = !0),
                              setTimeout(function () {
                                  (t = !1), e();
                              }, G));
                      };
                  };
        function U(e) {
            return e && "[object Function]" === {}.toString.call(e);
        }
        function Q(e, t) {
            if (1 !== e.nodeType) return [];
            e = e.ownerDocument.defaultView.getComputedStyle(e, null);
            return t ? e[t] : e;
        }
        function K(e) {
            return "HTML" === e.nodeName ? e : e.parentNode || e.host;
        }
        function J(e) {
            if (!e) return document.body;
            switch (e.nodeName) {
                case "HTML":
                case "BODY":
                    return e.ownerDocument.body;
                case "#document":
                    return e.body;
            }
            var t = Q(e),
                i = t.overflow,
                n = t.overflowX,
                t = t.overflowY;
            return /(auto|scroll|overlay)/.test(i + t + n) ? e : J(K(e));
        }
        function Z(e) {
            return e && e.referenceNode ? e.referenceNode : e;
        }
        var ee = V && !(!window.MSInputMethodContext || !document.documentMode),
            te = V && /MSIE 10/.test(navigator.userAgent);
        function ie(e) {
            return 11 === e ? ee : (10 !== e && ee) || te;
        }
        function ne(e) {
            if (!e) return document.documentElement;
            for (var t = ie(10) ? document.body : null, i = e.offsetParent || null; i === t && e.nextElementSibling; ) i = (e = e.nextElementSibling).offsetParent;
            var n = i && i.nodeName;
            return n && "BODY" !== n && "HTML" !== n ? (-1 !== ["TH", "TD", "TABLE"].indexOf(i.nodeName) && "static" === Q(i, "position") ? ne(i) : i) : (e ? e.ownerDocument : document).documentElement;
        }
        function re(e) {
            return null !== e.parentNode ? re(e.parentNode) : e;
        }
        function ae(e, t) {
            if (!(e && e.nodeType && t && t.nodeType)) return document.documentElement;
            var i = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
                n = i ? e : t,
                r = i ? t : e,
                i = document.createRange();
            i.setStart(n, 0), i.setEnd(r, 0);
            i = i.commonAncestorContainer;
            if ((e !== i && t !== i) || n.contains(r)) return "BODY" === (r = (n = i).nodeName) || ("HTML" !== r && ne(n.firstElementChild) !== n) ? ne(i) : i;
            i = re(e);
            return i.host ? ae(i.host, t) : ae(e, re(t).host);
        }
        function se(e, t) {
            var i = "top" === (1 < arguments.length && void 0 !== t ? t : "top") ? "scrollTop" : "scrollLeft",
                t = e.nodeName;
            if ("BODY" !== t && "HTML" !== t) return e[i];
            t = e.ownerDocument.documentElement;
            return (e.ownerDocument.scrollingElement || t)[i];
        }
        function oe(e, t) {
            var i = "x" === t ? "Left" : "Top",
                t = "Left" == i ? "Right" : "Bottom";
            return parseFloat(e["border" + i + "Width"]) + parseFloat(e["border" + t + "Width"]);
        }
        function le(e, t, i, n) {
            return Math.max(
                t["offset" + e],
                t["scroll" + e],
                i["client" + e],
                i["offset" + e],
                i["scroll" + e],
                ie(10) ? parseInt(i["offset" + e]) + parseInt(n["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(n["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0
            );
        }
        function de(e) {
            var t = e.body,
                i = e.documentElement,
                e = ie(10) && getComputedStyle(i);
            return { height: le("Height", t, i, e), width: le("Width", t, i, e) };
        }
        var ue = function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            },
            h = function (e, t, i) {
                return t && ce(e.prototype, t), i && ce(e, i), e;
            };
        function ce(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
            }
        }
        function he(e, t, i) {
            return t in e ? Object.defineProperty(e, t, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = i), e;
        }
        var pe =
            Object.assign ||
            function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i,
                        n = arguments[t];
                    for (i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
                }
                return e;
            };
        function fe(e) {
            return pe({}, e, { right: e.left + e.width, bottom: e.top + e.height });
        }
        function me(e) {
            var t,
                i,
                n = {};
            try {
                ie(10) ? ((n = e.getBoundingClientRect()), (t = se(e, "top")), (i = se(e, "left")), (n.top += t), (n.left += i), (n.bottom += t), (n.right += i)) : (n = e.getBoundingClientRect());
            } catch (e) {}
            var r = { left: n.left, top: n.top, width: n.right - n.left, height: n.bottom - n.top },
                a = "HTML" === e.nodeName ? de(e.ownerDocument) : {},
                s = a.width || e.clientWidth || r.width,
                o = a.height || e.clientHeight || r.height,
                a = e.offsetWidth - s,
                s = e.offsetHeight - o;
            return (a || s) && ((a -= oe((o = Q(e)), "x")), (s -= oe(o, "y")), (r.width -= a), (r.height -= s)), fe(r);
        }
        function ge(e, t, i) {
            var n = 2 < arguments.length && void 0 !== i && i,
                r = ie(10),
                a = "HTML" === t.nodeName,
                s = me(e),
                o = me(t),
                l = J(e),
                d = Q(t),
                i = parseFloat(d.borderTopWidth),
                e = parseFloat(d.borderLeftWidth);
            n && a && ((o.top = Math.max(o.top, 0)), (o.left = Math.max(o.left, 0)));
            s = fe({ top: s.top - o.top - i, left: s.left - o.left - e, width: s.width, height: s.height });
            return (
                (s.marginTop = 0),
                (s.marginLeft = 0),
                !r && a && ((a = parseFloat(d.marginTop)), (d = parseFloat(d.marginLeft)), (s.top -= i - a), (s.bottom -= i - a), (s.left -= e - d), (s.right -= e - d), (s.marginTop = a), (s.marginLeft = d)),
                (s = (r && !n ? t.contains(l) : t === l && "BODY" !== l.nodeName)
                    ? (function (e, t, i) {
                          var n = 2 < arguments.length && void 0 !== i && i,
                              i = se(t, "top"),
                              t = se(t, "left"),
                              n = n ? -1 : 1;
                          return (e.top += i * n), (e.bottom += i * n), (e.left += t * n), (e.right += t * n), e;
                      })(s, t)
                    : s)
            );
        }
        function ve(e) {
            if (!e || !e.parentElement || ie()) return document.documentElement;
            for (var t = e.parentElement; t && "none" === Q(t, "transform"); ) t = t.parentElement;
            return t || document.documentElement;
        }
        function ye(e, t, i, n, r) {
            var a = 4 < arguments.length && void 0 !== r && r,
                s = { top: 0, left: 0 },
                o = a ? ve(e) : ae(e, Z(t));
            "viewport" === n
                ? (s = (function (e, t) {
                      var i = 1 < arguments.length && void 0 !== t && t,
                          n = e.ownerDocument.documentElement,
                          r = ge(e, n),
                          a = Math.max(n.clientWidth, window.innerWidth || 0),
                          t = Math.max(n.clientHeight, window.innerHeight || 0),
                          e = i ? 0 : se(n),
                          n = i ? 0 : se(n, "left");
                      return fe({ top: e - r.top + r.marginTop, left: n - r.left + r.marginLeft, width: a, height: t });
                  })(o, a))
                : ((r = void 0),
                  "scrollParent" === n ? "BODY" === (r = J(K(t))).nodeName && (r = e.ownerDocument.documentElement) : (r = "window" === n ? e.ownerDocument.documentElement : n),
                  (l = ge(r, o, a)),
                  "HTML" !== r.nodeName ||
                  (function e(t) {
                      var i = t.nodeName;
                      if ("BODY" === i || "HTML" === i) return !1;
                      if ("fixed" === Q(t, "position")) return !0;
                      t = K(t);
                      return !!t && e(t);
                  })(o)
                      ? (s = l)
                      : ((e = (o = de(e.ownerDocument)).height), (o = o.width), (s.top += l.top - l.marginTop), (s.bottom = e + l.top), (s.left += l.left - l.marginLeft), (s.right = o + l.left)));
            var l = "number" == typeof (i = i || 0);
            return (s.left += l ? i : i.left || 0), (s.top += l ? i : i.top || 0), (s.right -= l ? i : i.right || 0), (s.bottom -= l ? i : i.bottom || 0), s;
        }
        function be(e, t, i, n, r, a) {
            a = 5 < arguments.length && void 0 !== a ? a : 0;
            if (-1 === e.indexOf("auto")) return e;
            var r = ye(i, n, a, r),
                s = { top: { width: r.width, height: t.top - r.top }, right: { width: r.right - t.right, height: r.height }, bottom: { width: r.width, height: r.bottom - t.bottom }, left: { width: t.left - r.left, height: r.height } },
                t = Object.keys(s)
                    .map(function (e) {
                        return pe({ key: e }, s[e], { area: (e = s[e]).width * e.height });
                    })
                    .sort(function (e, t) {
                        return t.area - e.area;
                    }),
                r = t.filter(function (e) {
                    var t = e.width,
                        e = e.height;
                    return t >= i.clientWidth && e >= i.clientHeight;
                }),
                t = (0 < r.length ? r : t)[0].key,
                e = e.split("-")[1];
            return t + (e ? "-" + e : "");
        }
        function we(e, t, i, n) {
            n = 3 < arguments.length && void 0 !== n ? n : null;
            return ge(i, n ? ve(t) : ae(t, Z(i)), n);
        }
        function xe(e) {
            var t = e.ownerDocument.defaultView.getComputedStyle(e),
                i = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0),
                t = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
            return { width: e.offsetWidth + t, height: e.offsetHeight + i };
        }
        function Ce(e) {
            var t = { left: "right", right: "left", bottom: "top", top: "bottom" };
            return e.replace(/left|right|bottom|top/g, function (e) {
                return t[e];
            });
        }
        function Te(e, t, i) {
            i = i.split("-")[0];
            var n = xe(e),
                r = { width: n.width, height: n.height },
                a = -1 !== ["right", "left"].indexOf(i),
                s = a ? "top" : "left",
                o = a ? "left" : "top",
                e = a ? "height" : "width",
                a = a ? "width" : "height";
            return (r[s] = t[s] + t[e] / 2 - n[e] / 2), (r[o] = i === o ? t[o] - n[a] : t[Ce(o)]), r;
        }
        function Ee(e, t) {
            return Array.prototype.find ? e.find(t) : e.filter(t)[0];
        }
        function Se(e, i, t) {
            return (
                (void 0 === t
                    ? e
                    : e.slice(
                          0,
                          (function (e, t, i) {
                              if (Array.prototype.findIndex)
                                  return e.findIndex(function (e) {
                                      return e[t] === i;
                                  });
                              var n = Ee(e, function (e) {
                                  return e[t] === i;
                              });
                              return e.indexOf(n);
                          })(e, "name", t)
                      )
                ).forEach(function (e) {
                    e.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
                    var t = e.function || e.fn;
                    e.enabled && U(t) && ((i.offsets.popper = fe(i.offsets.popper)), (i.offsets.reference = fe(i.offsets.reference)), (i = t(i, e)));
                }),
                i
            );
        }
        function _e(e, i) {
            return e.some(function (e) {
                var t = e.name;
                return e.enabled && t === i;
            });
        }
        function ke(e) {
            for (var t = [!1, "ms", "Webkit", "Moz", "O"], i = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length; n++) {
                var r = t[n],
                    r = r ? "" + r + i : e;
                if (void 0 !== document.body.style[r]) return r;
            }
            return null;
        }
        function Me(e) {
            e = e.ownerDocument;
            return e ? e.defaultView : window;
        }
        function De(e, t, i, n) {
            (i.updateBound = n), Me(e).addEventListener("resize", i.updateBound, { passive: !0 });
            e = J(e);
            return (
                (function e(t, i, n, r) {
                    var a = "BODY" === t.nodeName,
                        t = a ? t.ownerDocument.defaultView : t;
                    t.addEventListener(i, n, { passive: !0 }), a || e(J(t.parentNode), i, n, r), r.push(t);
                })(e, "scroll", i.updateBound, i.scrollParents),
                (i.scrollElement = e),
                (i.eventsEnabled = !0),
                i
            );
        }
        function Ie() {
            var e, t;
            this.state.eventsEnabled &&
                (cancelAnimationFrame(this.scheduleUpdate),
                (this.state =
                    ((e = this.reference),
                    (t = this.state),
                    Me(e).removeEventListener("resize", t.updateBound),
                    t.scrollParents.forEach(function (e) {
                        e.removeEventListener("scroll", t.updateBound);
                    }),
                    (t.updateBound = null),
                    (t.scrollParents = []),
                    (t.scrollElement = null),
                    (t.eventsEnabled = !1),
                    t)));
        }
        function Le(e) {
            return "" !== e && !isNaN(parseFloat(e)) && isFinite(e);
        }
        function Oe(i, n) {
            Object.keys(n).forEach(function (e) {
                var t = "";
                -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(e) && Le(n[e]) && (t = "px"), (i.style[e] = n[e] + t);
            });
        }
        var Ae = V && /Firefox/i.test(navigator.userAgent);
        function Pe(e, t, i) {
            var n,
                r = Ee(e, function (e) {
                    return e.name === t;
                }),
                a =
                    !!r &&
                    e.some(function (e) {
                        return e.name === i && e.enabled && e.order < r.order;
                    });
            return a || ((n = "`" + t + "`"), (e = "`" + i + "`"), console.warn(e + " modifier is required by " + n + " modifier in order to work, be sure to include it before " + n + "!")), a;
        }
        var v = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
            Ne = v.slice(3);
        function ze(e, t) {
            (t = 1 < arguments.length && void 0 !== t && t), (e = Ne.indexOf(e)), (e = Ne.slice(e + 1).concat(Ne.slice(0, e)));
            return t ? e.reverse() : e;
        }
        var Be = "flip",
            je = "clockwise",
            He = "counterclockwise";
        function Re(e, r, a, t) {
            var s = [0, 0],
                o = -1 !== ["right", "left"].indexOf(t),
                i = e.split(/(\+|\-)/).map(function (e) {
                    return e.trim();
                }),
                t = i.indexOf(
                    Ee(i, function (e) {
                        return -1 !== e.search(/,|\s/);
                    })
                );
            i[t] && -1 === i[t].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
            e = /\s*,\s*|\s+/;
            return (
                (-1 !== t ? [i.slice(0, t).concat([i[t].split(e)[0]]), [i[t].split(e)[1]].concat(i.slice(t + 1))] : [i])
                    .map(function (e, t) {
                        var i = (1 === t ? !o : o) ? "height" : "width",
                            n = !1;
                        return e
                            .reduce(function (e, t) {
                                return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? ((e[e.length - 1] = t), (n = !0), e) : n ? ((e[e.length - 1] += t), (n = !1), e) : e.concat(t);
                            }, [])
                            .map(function (e) {
                                return (function (e, t, i, n) {
                                    var r = +(a = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/))[1],
                                        a = a[2];
                                    if (!r) return e;
                                    if (0 !== a.indexOf("%"))
                                        return "vh" !== a && "vw" !== a
                                            ? r
                                            : (("vh" === a ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100) * r;
                                    var s = void 0;
                                    switch (a) {
                                        case "%p":
                                            s = i;
                                            break;
                                        case "%":
                                        case "%r":
                                        default:
                                            s = n;
                                    }
                                    return (fe(s)[t] / 100) * r;
                                })(e, i, r, a);
                            });
                    })
                    .forEach(function (i, n) {
                        i.forEach(function (e, t) {
                            Le(e) && (s[n] += e * ("-" === i[t - 1] ? -1 : 1));
                        });
                    }),
                s
            );
        }
        var t = {
                placement: "bottom",
                positionFixed: !1,
                eventsEnabled: !0,
                removeOnDestroy: !1,
                onCreate: function () {},
                onUpdate: function () {},
                modifiers: {
                    shift: {
                        order: 100,
                        enabled: !0,
                        fn: function (e) {
                            var t,
                                i,
                                n = e.placement,
                                r = n.split("-")[0],
                                a = n.split("-")[1];
                            return (
                                a &&
                                    ((t = (i = e.offsets).reference),
                                    (n = i.popper),
                                    (r = (i = -1 !== ["bottom", "top"].indexOf(r)) ? "width" : "height"),
                                    (r = { start: he({}, (i = i ? "left" : "top"), t[i]), end: he({}, i, t[i] + t[r] - n[r]) }),
                                    (e.offsets.popper = pe({}, n, r[a]))),
                                e
                            );
                        },
                    },
                    offset: {
                        order: 200,
                        enabled: !0,
                        fn: function (e, t) {
                            var i = t.offset,
                                n = e.placement,
                                r = (a = e.offsets).popper,
                                t = a.reference,
                                a = n.split("-")[0],
                                n = void 0,
                                n = Le(+i) ? [+i, 0] : Re(i, r, t, a);
                            return (
                                "left" === a
                                    ? ((r.top += n[0]), (r.left -= n[1]))
                                    : "right" === a
                                    ? ((r.top += n[0]), (r.left += n[1]))
                                    : "top" === a
                                    ? ((r.left += n[0]), (r.top -= n[1]))
                                    : "bottom" === a && ((r.left += n[0]), (r.top += n[1])),
                                (e.popper = r),
                                e
                            );
                        },
                        offset: 0,
                    },
                    preventOverflow: {
                        order: 300,
                        enabled: !0,
                        fn: function (e, n) {
                            var t = n.boundariesElement || ne(e.instance.popper);
                            e.instance.reference === t && (t = ne(t));
                            var i = ke("transform"),
                                r = e.instance.popper.style,
                                a = r.top,
                                s = r.left,
                                o = r[i];
                            (r.top = ""), (r.left = ""), (r[i] = "");
                            var l = ye(e.instance.popper, e.instance.reference, n.padding, t, e.positionFixed);
                            (r.top = a), (r.left = s), (r[i] = o), (n.boundaries = l);
                            var o = n.priority,
                                d = e.offsets.popper,
                                u = {
                                    primary: function (e) {
                                        var t = d[e];
                                        return d[e] < l[e] && !n.escapeWithReference && (t = Math.max(d[e], l[e])), he({}, e, t);
                                    },
                                    secondary: function (e) {
                                        var t = "right" === e ? "left" : "top",
                                            i = d[t];
                                        return d[e] > l[e] && !n.escapeWithReference && (i = Math.min(d[t], l[e] - ("right" === e ? d.width : d.height))), he({}, t, i);
                                    },
                                };
                            return (
                                o.forEach(function (e) {
                                    var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                                    d = pe({}, d, u[t](e));
                                }),
                                (e.offsets.popper = d),
                                e
                            );
                        },
                        priority: ["left", "right", "top", "bottom"],
                        padding: 5,
                        boundariesElement: "scrollParent",
                    },
                    keepTogether: {
                        order: 400,
                        enabled: !0,
                        fn: function (e) {
                            var t = (a = e.offsets).popper,
                                i = a.reference,
                                n = e.placement.split("-")[0],
                                r = Math.floor,
                                a = (s = -1 !== ["top", "bottom"].indexOf(n)) ? "right" : "bottom",
                                n = s ? "left" : "top",
                                s = s ? "width" : "height";
                            return t[a] < r(i[n]) && (e.offsets.popper[n] = r(i[n]) - t[s]), t[n] > r(i[a]) && (e.offsets.popper[n] = r(i[a])), e;
                        },
                    },
                    arrow: {
                        order: 500,
                        enabled: !0,
                        fn: function (e, t) {
                            if (!Pe(e.instance.modifiers, "arrow", "keepTogether")) return e;
                            var i = t.element;
                            if ("string" == typeof i) {
                                if (!(i = e.instance.popper.querySelector(i))) return e;
                            } else if (!e.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                            var n = e.placement.split("-")[0],
                                r = (u = e.offsets).popper,
                                a = u.reference,
                                s = -1 !== ["left", "right"].indexOf(n),
                                o = s ? "height" : "width",
                                l = s ? "Top" : "Left",
                                d = l.toLowerCase(),
                                t = s ? "left" : "top",
                                u = s ? "bottom" : "right",
                                n = xe(i)[o];
                            return (
                                a[u] - n < r[d] && (e.offsets.popper[d] -= r[d] - (a[u] - n)),
                                a[d] + n > r[u] && (e.offsets.popper[d] += a[d] + n - r[u]),
                                (e.offsets.popper = fe(e.offsets.popper)),
                                (s = a[d] + a[o] / 2 - n / 2),
                                (u = Q(e.instance.popper)),
                                (a = parseFloat(u["margin" + l])),
                                (l = parseFloat(u["border" + l + "Width"])),
                                (l = s - e.offsets.popper[d] - a - l),
                                (l = Math.max(Math.min(r[o] - n, l), 0)),
                                (e.arrowElement = i),
                                (e.offsets.arrow = (he((i = {}), d, Math.round(l)), he(i, t, ""), i)),
                                e
                            );
                        },
                        element: "[x-arrow]",
                    },
                    flip: {
                        order: 600,
                        enabled: !0,
                        fn: function (d, u) {
                            if (_e(d.instance.modifiers, "inner")) return d;
                            if (d.flipped && d.placement === d.originalPlacement) return d;
                            var c = ye(d.instance.popper, d.instance.reference, u.padding, u.boundariesElement, d.positionFixed),
                                h = d.placement.split("-")[0],
                                p = Ce(h),
                                f = d.placement.split("-")[1] || "",
                                m = [];
                            switch (u.behavior) {
                                case Be:
                                    m = [h, p];
                                    break;
                                case je:
                                    m = ze(h);
                                    break;
                                case He:
                                    m = ze(h, !0);
                                    break;
                                default:
                                    m = u.behavior;
                            }
                            return (
                                m.forEach(function (e, t) {
                                    if (h !== e || m.length === t + 1) return d;
                                    (h = d.placement.split("-")[0]), (p = Ce(h));
                                    var i = d.offsets.popper,
                                        n = d.offsets.reference,
                                        r = Math.floor,
                                        a = ("left" === h && r(i.right) > r(n.left)) || ("right" === h && r(i.left) < r(n.right)) || ("top" === h && r(i.bottom) > r(n.top)) || ("bottom" === h && r(i.top) < r(n.bottom)),
                                        s = r(i.left) < r(c.left),
                                        o = r(i.right) > r(c.right),
                                        l = r(i.top) < r(c.top),
                                        e = r(i.bottom) > r(c.bottom),
                                        n = ("left" === h && s) || ("right" === h && o) || ("top" === h && l) || ("bottom" === h && e),
                                        i = -1 !== ["top", "bottom"].indexOf(h),
                                        r = !!u.flipVariations && ((i && "start" === f && s) || (i && "end" === f && o) || (!i && "start" === f && l) || (!i && "end" === f && e)),
                                        l = !!u.flipVariationsByContent && ((i && "start" === f && o) || (i && "end" === f && s) || (!i && "start" === f && e) || (!i && "end" === f && l)),
                                        l = r || l;
                                    (a || n || l) &&
                                        ((d.flipped = !0),
                                        (a || n) && (h = m[t + 1]),
                                        l && (f = "end" === (l = f) ? "start" : "start" === l ? "end" : l),
                                        (d.placement = h + (f ? "-" + f : "")),
                                        (d.offsets.popper = pe({}, d.offsets.popper, Te(d.instance.popper, d.offsets.reference, d.placement))),
                                        (d = Se(d.instance.modifiers, d, "flip")));
                                }),
                                d
                            );
                        },
                        behavior: "flip",
                        padding: 5,
                        boundariesElement: "viewport",
                        flipVariations: !1,
                        flipVariationsByContent: !1,
                    },
                    inner: {
                        order: 700,
                        enabled: !1,
                        fn: function (e) {
                            var t = e.placement,
                                i = t.split("-")[0],
                                n = (s = e.offsets).popper,
                                r = s.reference,
                                a = -1 !== ["left", "right"].indexOf(i),
                                s = -1 === ["top", "left"].indexOf(i);
                            return (n[a ? "left" : "top"] = r[i] - (s ? n[a ? "width" : "height"] : 0)), (e.placement = Ce(t)), (e.offsets.popper = fe(n)), e;
                        },
                    },
                    hide: {
                        order: 800,
                        enabled: !0,
                        fn: function (e) {
                            if (!Pe(e.instance.modifiers, "hide", "preventOverflow")) return e;
                            var t = e.offsets.reference,
                                i = Ee(e.instance.modifiers, function (e) {
                                    return "preventOverflow" === e.name;
                                }).boundaries;
                            if (t.bottom < i.top || t.left > i.right || t.top > i.bottom || t.right < i.left) {
                                if (!0 === e.hide) return e;
                                (e.hide = !0), (e.attributes["x-out-of-boundaries"] = "");
                            } else {
                                if (!1 === e.hide) return e;
                                (e.hide = !1), (e.attributes["x-out-of-boundaries"] = !1);
                            }
                            return e;
                        },
                    },
                    computeStyle: {
                        order: 850,
                        enabled: !0,
                        fn: function (e, t) {
                            var i = t.x,
                                n = t.y,
                                r = e.offsets.popper;
                            void 0 !==
                                (f = Ee(e.instance.modifiers, function (e) {
                                    return "applyStyle" === e.name;
                                }).gpuAcceleration) && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                            var a,
                                s,
                                o,
                                l,
                                d = void 0 !== f ? f : t.gpuAcceleration,
                                u = ne(e.instance.popper),
                                c = me(u),
                                h = { position: r.position },
                                p =
                                    ((a = e),
                                    (p = window.devicePixelRatio < 2 || !Ae),
                                    (m = (l = a.offsets).popper),
                                    (s = l.reference),
                                    (o = Math.round),
                                    (f = Math.floor),
                                    (t = function (e) {
                                        return e;
                                    }),
                                    (r = o(s.width)),
                                    (l = o(m.width)),
                                    (s = -1 !== ["left", "right"].indexOf(a.placement)),
                                    (a = -1 !== a.placement.indexOf("-")),
                                    (f = p ? (s || a || r % 2 == l % 2 ? o : f) : t),
                                    (t = p ? o : t),
                                    { left: f(r % 2 == 1 && l % 2 == 1 && !a && p ? m.left - 1 : m.left), top: t(m.top), bottom: t(m.bottom), right: f(m.right) }),
                                t = "bottom" === i ? "top" : "bottom",
                                f = "right" === n ? "left" : "right",
                                m = ke("transform"),
                                i = void 0,
                                n = void 0,
                                n = "bottom" == t ? ("HTML" === u.nodeName ? -u.clientHeight + p.bottom : -c.height + p.bottom) : p.top,
                                i = "right" == f ? ("HTML" === u.nodeName ? -u.clientWidth + p.right : -c.width + p.right) : p.left;
                            return (
                                d && m
                                    ? ((h[m] = "translate3d(" + i + "px, " + n + "px, 0)"), (h[t] = 0), (h[f] = 0), (h.willChange = "transform"))
                                    : ((d = "bottom" == t ? -1 : 1), (m = "right" == f ? -1 : 1), (h[t] = n * d), (h[f] = i * m), (h.willChange = t + ", " + f)),
                                (f = { "x-placement": e.placement }),
                                (e.attributes = pe({}, f, e.attributes)),
                                (e.styles = pe({}, h, e.styles)),
                                (e.arrowStyles = pe({}, e.offsets.arrow, e.arrowStyles)),
                                e
                            );
                        },
                        gpuAcceleration: !0,
                        x: "bottom",
                        y: "right",
                    },
                    applyStyle: {
                        order: 900,
                        enabled: !0,
                        fn: function (e) {
                            var t, i;
                            return (
                                Oe(e.instance.popper, e.styles),
                                (t = e.instance.popper),
                                (i = e.attributes),
                                Object.keys(i).forEach(function (e) {
                                    !1 !== i[e] ? t.setAttribute(e, i[e]) : t.removeAttribute(e);
                                }),
                                e.arrowElement && Object.keys(e.arrowStyles).length && Oe(e.arrowElement, e.arrowStyles),
                                e
                            );
                        },
                        onLoad: function (e, t, i, n, r) {
                            return (
                                (r = we(r, t, e, i.positionFixed)),
                                (e = be(i.placement, r, t, e, i.modifiers.flip.boundariesElement, i.modifiers.flip.padding)),
                                t.setAttribute("x-placement", e),
                                Oe(t, { position: i.positionFixed ? "fixed" : "absolute" }),
                                i
                            );
                        },
                        gpuAcceleration: void 0,
                    },
                },
            },
            $e =
                (h(qe, [
                    {
                        key: "update",
                        value: function () {
                            return function () {
                                var e;
                                this.state.isDestroyed ||
                                    (((e = { instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {} }).offsets.reference = we(this.state, this.popper, this.reference, this.options.positionFixed)),
                                    (e.placement = be(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding)),
                                    (e.originalPlacement = e.placement),
                                    (e.positionFixed = this.options.positionFixed),
                                    (e.offsets.popper = Te(this.popper, e.offsets.reference, e.placement)),
                                    (e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute"),
                                    (e = Se(this.modifiers, e)),
                                    this.state.isCreated ? this.options.onUpdate(e) : ((this.state.isCreated = !0), this.options.onCreate(e)));
                            }.call(this);
                        },
                    },
                    {
                        key: "destroy",
                        value: function () {
                            return function () {
                                return (
                                    (this.state.isDestroyed = !0),
                                    _e(this.modifiers, "applyStyle") &&
                                        (this.popper.removeAttribute("x-placement"),
                                        (this.popper.style.position = ""),
                                        (this.popper.style.top = ""),
                                        (this.popper.style.left = ""),
                                        (this.popper.style.right = ""),
                                        (this.popper.style.bottom = ""),
                                        (this.popper.style.willChange = ""),
                                        (this.popper.style[ke("transform")] = "")),
                                    this.disableEventListeners(),
                                    this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
                                    this
                                );
                            }.call(this);
                        },
                    },
                    {
                        key: "enableEventListeners",
                        value: function () {
                            return function () {
                                this.state.eventsEnabled || (this.state = De(this.reference, this.options, this.state, this.scheduleUpdate));
                            }.call(this);
                        },
                    },
                    {
                        key: "disableEventListeners",
                        value: function () {
                            return Ie.call(this);
                        },
                    },
                ]),
                qe);
        function qe(e, t) {
            var i = this,
                n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
            ue(this, qe),
                (this.scheduleUpdate = function () {
                    return requestAnimationFrame(i.update);
                }),
                (this.update = X(this.update.bind(this))),
                (this.options = pe({}, qe.Defaults, n)),
                (this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
                (this.reference = e && e.jquery ? e[0] : e),
                (this.popper = t && t.jquery ? t[0] : t),
                (this.options.modifiers = {}),
                Object.keys(pe({}, qe.Defaults.modifiers, n.modifiers)).forEach(function (e) {
                    i.options.modifiers[e] = pe({}, qe.Defaults.modifiers[e] || {}, n.modifiers ? n.modifiers[e] : {});
                }),
                (this.modifiers = Object.keys(this.options.modifiers)
                    .map(function (e) {
                        return pe({ name: e }, i.options.modifiers[e]);
                    })
                    .sort(function (e, t) {
                        return e.order - t.order;
                    })),
                this.modifiers.forEach(function (e) {
                    e.enabled && U(e.onLoad) && e.onLoad(i.reference, i.popper, i.options, e, i.state);
                }),
                this.update();
            t = this.options.eventsEnabled;
            t && this.enableEventListeners(), (this.state.eventsEnabled = t);
        }
        ($e.Utils = ("undefined" != typeof window ? window : global).PopperUtils), ($e.placements = v), ($e.Defaults = t);
        var We = "dropdown",
            Fe = "bs.dropdown",
            Ye = "." + Fe,
            h = ".data-api",
            Ve = u.default.fn[We],
            Ge = new RegExp("38|40|27"),
            Xe = "hide" + Ye,
            Ue = "hidden" + Ye,
            v = "click" + Ye + h,
            t = "keydown" + Ye + h,
            Qe = "disabled",
            Ke = "show",
            Je = "dropdown-menu-right",
            Ze = '[data-toggle="dropdown"]',
            et = ".dropdown-menu",
            tt = { offset: 0, flip: !0, boundary: "scrollParent", reference: "toggle", display: "dynamic", popperConfig: null },
            it = { offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)", reference: "(string|element)", display: "string", popperConfig: "(null|object)" },
            nt = (function () {
                function d(e, t) {
                    (this._element = e), (this._popper = null), (this._config = this._getConfig(t)), (this._menu = this._getMenuElement()), (this._inNavbar = this._detectNavbar()), this._addEventListeners();
                }
                var e = d.prototype;
                return (
                    (e.toggle = function () {
                        var e;
                        this._element.disabled || u.default(this._element).hasClass(Qe) || ((e = u.default(this._menu).hasClass(Ke)), d._clearMenus(), e || this.show(!0));
                    }),
                    (e.show = function (e) {
                        if ((void 0 === e && (e = !1), !(this._element.disabled || u.default(this._element).hasClass(Qe) || u.default(this._menu).hasClass(Ke)))) {
                            var t = { relatedTarget: this._element },
                                i = u.default.Event("show.bs.dropdown", t),
                                n = d._getParentFromElement(this._element);
                            if ((u.default(n).trigger(i), !i.isDefaultPrevented())) {
                                if (!this._inNavbar && e) {
                                    if (void 0 === $e) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
                                    e = this._element;
                                    "parent" === this._config.reference ? (e = n) : c.isElement(this._config.reference) && ((e = this._config.reference), void 0 !== this._config.reference.jquery && (e = this._config.reference[0])),
                                        "scrollParent" !== this._config.boundary && u.default(n).addClass("position-static"),
                                        (this._popper = new $e(e, this._menu, this._getPopperConfig()));
                                }
                                "ontouchstart" in document.documentElement && 0 === u.default(n).closest(".navbar-nav").length && u.default(document.body).children().on("mouseover", null, u.default.noop),
                                    this._element.focus(),
                                    this._element.setAttribute("aria-expanded", !0),
                                    u.default(this._menu).toggleClass(Ke),
                                    u.default(n).toggleClass(Ke).trigger(u.default.Event("shown.bs.dropdown", t));
                            }
                        }
                    }),
                    (e.hide = function () {
                        var e, t, i;
                        this._element.disabled ||
                            u.default(this._element).hasClass(Qe) ||
                            !u.default(this._menu).hasClass(Ke) ||
                            ((e = { relatedTarget: this._element }),
                            (t = u.default.Event(Xe, e)),
                            (i = d._getParentFromElement(this._element)),
                            u.default(i).trigger(t),
                            t.isDefaultPrevented() || (this._popper && this._popper.destroy(), u.default(this._menu).toggleClass(Ke), u.default(i).toggleClass(Ke).trigger(u.default.Event(Ue, e))));
                    }),
                    (e.dispose = function () {
                        u.default.removeData(this._element, Fe), u.default(this._element).off(Ye), (this._element = null), (this._menu = null) !== this._popper && (this._popper.destroy(), (this._popper = null));
                    }),
                    (e.update = function () {
                        (this._inNavbar = this._detectNavbar()), null !== this._popper && this._popper.scheduleUpdate();
                    }),
                    (e._addEventListeners = function () {
                        var t = this;
                        u.default(this._element).on("click.bs.dropdown", function (e) {
                            e.preventDefault(), e.stopPropagation(), t.toggle();
                        });
                    }),
                    (e._getConfig = function (e) {
                        return (e = o({}, this.constructor.Default, u.default(this._element).data(), e)), c.typeCheckConfig(We, e, this.constructor.DefaultType), e;
                    }),
                    (e._getMenuElement = function () {
                        var e;
                        return this._menu || ((e = d._getParentFromElement(this._element)) && (this._menu = e.querySelector(et))), this._menu;
                    }),
                    (e._getPlacement = function () {
                        var e = u.default(this._element.parentNode),
                            t = "bottom-start";
                        return (
                            e.hasClass("dropup")
                                ? (t = u.default(this._menu).hasClass(Je) ? "top-end" : "top-start")
                                : e.hasClass("dropright")
                                ? (t = "right-start")
                                : e.hasClass("dropleft")
                                ? (t = "left-start")
                                : u.default(this._menu).hasClass(Je) && (t = "bottom-end"),
                            t
                        );
                    }),
                    (e._detectNavbar = function () {
                        return 0 < u.default(this._element).closest(".navbar").length;
                    }),
                    (e._getOffset = function () {
                        var t = this,
                            e = {};
                        return (
                            "function" == typeof this._config.offset
                                ? (e.fn = function (e) {
                                      return (e.offsets = o({}, e.offsets, t._config.offset(e.offsets, t._element) || {})), e;
                                  })
                                : (e.offset = this._config.offset),
                            e
                        );
                    }),
                    (e._getPopperConfig = function () {
                        var e = { placement: this._getPlacement(), modifiers: { offset: this._getOffset(), flip: { enabled: this._config.flip }, preventOverflow: { boundariesElement: this._config.boundary } } };
                        return "static" === this._config.display && (e.modifiers.applyStyle = { enabled: !1 }), o({}, e, this._config.popperConfig);
                    }),
                    (d._jQueryInterface = function (t) {
                        return this.each(function () {
                            var e = u.default(this).data(Fe);
                            if ((e || ((e = new d(this, "object" == typeof t ? t : null)), u.default(this).data(Fe, e)), "string" == typeof t)) {
                                if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
                                e[t]();
                            }
                        });
                    }),
                    (d._clearMenus = function (e) {
                        if (!e || (3 !== e.which && ("keyup" !== e.type || 9 === e.which)))
                            for (var t = [].slice.call(document.querySelectorAll(Ze)), i = 0, n = t.length; i < n; i++) {
                                var r,
                                    a,
                                    s = d._getParentFromElement(t[i]),
                                    o = u.default(t[i]).data(Fe),
                                    l = { relatedTarget: t[i] };
                                e && "click" === e.type && (l.clickEvent = e),
                                    o &&
                                        ((r = o._menu),
                                        u.default(s).hasClass(Ke) &&
                                            ((e && (("click" === e.type && /input|textarea/i.test(e.target.tagName)) || ("keyup" === e.type && 9 === e.which)) && u.default.contains(s, e.target)) ||
                                                ((a = u.default.Event(Xe, l)),
                                                u.default(s).trigger(a),
                                                a.isDefaultPrevented() ||
                                                    ("ontouchstart" in document.documentElement && u.default(document.body).children().off("mouseover", null, u.default.noop),
                                                    t[i].setAttribute("aria-expanded", "false"),
                                                    o._popper && o._popper.destroy(),
                                                    u.default(r).removeClass(Ke),
                                                    u.default(s).removeClass(Ke).trigger(u.default.Event(Ue, l))))));
                            }
                    }),
                    (d._getParentFromElement = function (e) {
                        var t,
                            i = c.getSelectorFromElement(e);
                        return (t = i ? document.querySelector(i) : t) || e.parentNode;
                    }),
                    (d._dataApiKeydownHandler = function (e) {
                        if (
                            (/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || (27 !== e.which && ((40 !== e.which && 38 !== e.which) || u.default(e.target).closest(et).length))) : Ge.test(e.which)) &&
                            !this.disabled &&
                            !u.default(this).hasClass(Qe)
                        ) {
                            var t = d._getParentFromElement(this),
                                i = u.default(t).hasClass(Ke);
                            if (i || 27 !== e.which) {
                                if ((e.preventDefault(), e.stopPropagation(), !i || 27 === e.which || 32 === e.which)) return 27 === e.which && u.default(t.querySelector(Ze)).trigger("focus"), void u.default(this).trigger("click");
                                i = [].slice.call(t.querySelectorAll(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)")).filter(function (e) {
                                    return u.default(e).is(":visible");
                                });
                                0 !== i.length && ((t = i.indexOf(e.target)), 38 === e.which && 0 < t && t--, 40 === e.which && t < i.length - 1 && t++, i[(t = t < 0 ? 0 : t)].focus());
                            }
                        }
                    }),
                    s(d, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "4.6.0";
                            },
                        },
                        {
                            key: "Default",
                            get: function () {
                                return tt;
                            },
                        },
                        {
                            key: "DefaultType",
                            get: function () {
                                return it;
                            },
                        },
                    ]),
                    d
                );
            })();
        u
            .default(document)
            .on(t, Ze, nt._dataApiKeydownHandler)
            .on(t, et, nt._dataApiKeydownHandler)
            .on(v + " keyup.bs.dropdown.data-api", nt._clearMenus)
            .on(v, Ze, function (e) {
                e.preventDefault(), e.stopPropagation(), nt._jQueryInterface.call(u.default(this), "toggle");
            })
            .on(v, ".dropdown form", function (e) {
                e.stopPropagation();
            }),
            (u.default.fn[We] = nt._jQueryInterface),
            (u.default.fn[We].Constructor = nt),
            (u.default.fn[We].noConflict = function () {
                return (u.default.fn[We] = Ve), nt._jQueryInterface;
            });
        var rt = "modal",
            at = "bs.modal",
            st = "." + at,
            ot = u.default.fn[rt],
            lt = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
            dt = { backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean" },
            ut = "hidden" + st,
            ct = "show" + st,
            ht = "focusin" + st,
            pt = "resize" + st,
            ft = "click.dismiss" + st,
            mt = "keydown.dismiss" + st,
            gt = "mousedown.dismiss" + st,
            vt = "modal-open",
            yt = "fade",
            bt = "show",
            wt = "modal-static",
            xt = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            Ct = ".sticky-top",
            Tt = (function () {
                function r(e, t) {
                    (this._config = this._getConfig(t)),
                        (this._element = e),
                        (this._dialog = e.querySelector(".modal-dialog")),
                        (this._backdrop = null),
                        (this._isShown = !1),
                        (this._isBodyOverflowing = !1),
                        (this._ignoreBackdropClick = !1),
                        (this._isTransitioning = !1),
                        (this._scrollbarWidth = 0);
                }
                var e = r.prototype;
                return (
                    (e.toggle = function (e) {
                        return this._isShown ? this.hide() : this.show(e);
                    }),
                    (e.show = function (e) {
                        var t,
                            i = this;
                        this._isShown ||
                            this._isTransitioning ||
                            (u.default(this._element).hasClass(yt) && (this._isTransitioning = !0),
                            (t = u.default.Event(ct, { relatedTarget: e })),
                            u.default(this._element).trigger(t),
                            this._isShown ||
                                t.isDefaultPrevented() ||
                                ((this._isShown = !0),
                                this._checkScrollbar(),
                                this._setScrollbar(),
                                this._adjustDialog(),
                                this._setEscapeEvent(),
                                this._setResizeEvent(),
                                u.default(this._element).on(ft, '[data-dismiss="modal"]', function (e) {
                                    return i.hide(e);
                                }),
                                u.default(this._dialog).on(gt, function () {
                                    u.default(i._element).one("mouseup.dismiss.bs.modal", function (e) {
                                        u.default(e.target).is(i._element) && (i._ignoreBackdropClick = !0);
                                    });
                                }),
                                this._showBackdrop(function () {
                                    return i._showElement(e);
                                })));
                    }),
                    (e.hide = function (e) {
                        var t = this;
                        e && e.preventDefault(),
                            this._isShown &&
                                !this._isTransitioning &&
                                ((e = u.default.Event("hide.bs.modal")),
                                u.default(this._element).trigger(e),
                                this._isShown &&
                                    !e.isDefaultPrevented() &&
                                    ((this._isShown = !1),
                                    (e = u.default(this._element).hasClass(yt)) && (this._isTransitioning = !0),
                                    this._setEscapeEvent(),
                                    this._setResizeEvent(),
                                    u.default(document).off(ht),
                                    u.default(this._element).removeClass(bt),
                                    u.default(this._element).off(ft),
                                    u.default(this._dialog).off(gt),
                                    e
                                        ? ((e = c.getTransitionDurationFromElement(this._element)),
                                          u
                                              .default(this._element)
                                              .one(c.TRANSITION_END, function (e) {
                                                  return t._hideModal(e);
                                              })
                                              .emulateTransitionEnd(e))
                                        : this._hideModal()));
                    }),
                    (e.dispose = function () {
                        [window, this._element, this._dialog].forEach(function (e) {
                            return u.default(e).off(st);
                        }),
                            u.default(document).off(ht),
                            u.default.removeData(this._element, at),
                            (this._config = null),
                            (this._element = null),
                            (this._dialog = null),
                            (this._backdrop = null),
                            (this._isShown = null),
                            (this._isBodyOverflowing = null),
                            (this._ignoreBackdropClick = null),
                            (this._isTransitioning = null),
                            (this._scrollbarWidth = null);
                    }),
                    (e.handleUpdate = function () {
                        this._adjustDialog();
                    }),
                    (e._getConfig = function (e) {
                        return (e = o({}, lt, e)), c.typeCheckConfig(rt, e, dt), e;
                    }),
                    (e._triggerBackdropTransition = function () {
                        var e,
                            t,
                            i = this,
                            n = u.default.Event("hidePrevented.bs.modal");
                        u.default(this._element).trigger(n),
                            n.isDefaultPrevented() ||
                                ((e = this._element.scrollHeight > document.documentElement.clientHeight) || (this._element.style.overflowY = "hidden"),
                                this._element.classList.add(wt),
                                (t = c.getTransitionDurationFromElement(this._dialog)),
                                u.default(this._element).off(c.TRANSITION_END),
                                u
                                    .default(this._element)
                                    .one(c.TRANSITION_END, function () {
                                        i._element.classList.remove(wt),
                                            e ||
                                                u
                                                    .default(i._element)
                                                    .one(c.TRANSITION_END, function () {
                                                        i._element.style.overflowY = "";
                                                    })
                                                    .emulateTransitionEnd(i._element, t);
                                    })
                                    .emulateTransitionEnd(t),
                                this._element.focus());
                    }),
                    (e._showElement = function (e) {
                        var t = this,
                            i = u.default(this._element).hasClass(yt),
                            n = this._dialog ? this._dialog.querySelector(".modal-body") : null;
                        (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE) || document.body.appendChild(this._element),
                            (this._element.style.display = "block"),
                            this._element.removeAttribute("aria-hidden"),
                            this._element.setAttribute("aria-modal", !0),
                            this._element.setAttribute("role", "dialog"),
                            u.default(this._dialog).hasClass("modal-dialog-scrollable") && n ? (n.scrollTop = 0) : (this._element.scrollTop = 0),
                            i && c.reflow(this._element),
                            u.default(this._element).addClass(bt),
                            this._config.focus && this._enforceFocus();
                        var r = u.default.Event("shown.bs.modal", { relatedTarget: e }),
                            e = function () {
                                t._config.focus && t._element.focus(), (t._isTransitioning = !1), u.default(t._element).trigger(r);
                            };
                        i ? ((i = c.getTransitionDurationFromElement(this._dialog)), u.default(this._dialog).one(c.TRANSITION_END, e).emulateTransitionEnd(i)) : e();
                    }),
                    (e._enforceFocus = function () {
                        var t = this;
                        u.default(document)
                            .off(ht)
                            .on(ht, function (e) {
                                document !== e.target && t._element !== e.target && 0 === u.default(t._element).has(e.target).length && t._element.focus();
                            });
                    }),
                    (e._setEscapeEvent = function () {
                        var t = this;
                        this._isShown
                            ? u.default(this._element).on(mt, function (e) {
                                  t._config.keyboard && 27 === e.which ? (e.preventDefault(), t.hide()) : t._config.keyboard || 27 !== e.which || t._triggerBackdropTransition();
                              })
                            : this._isShown || u.default(this._element).off(mt);
                    }),
                    (e._setResizeEvent = function () {
                        var t = this;
                        this._isShown
                            ? u.default(window).on(pt, function (e) {
                                  return t.handleUpdate(e);
                              })
                            : u.default(window).off(pt);
                    }),
                    (e._hideModal = function () {
                        var e = this;
                        (this._element.style.display = "none"),
                            this._element.setAttribute("aria-hidden", !0),
                            this._element.removeAttribute("aria-modal"),
                            this._element.removeAttribute("role"),
                            (this._isTransitioning = !1),
                            this._showBackdrop(function () {
                                u.default(document.body).removeClass(vt), e._resetAdjustments(), e._resetScrollbar(), u.default(e._element).trigger(ut);
                            });
                    }),
                    (e._removeBackdrop = function () {
                        this._backdrop && (u.default(this._backdrop).remove(), (this._backdrop = null));
                    }),
                    (e._showBackdrop = function (e) {
                        var t,
                            i = this,
                            n = u.default(this._element).hasClass(yt) ? yt : "";
                        this._isShown && this._config.backdrop
                            ? ((this._backdrop = document.createElement("div")),
                              (this._backdrop.className = "modal-backdrop"),
                              n && this._backdrop.classList.add(n),
                              u.default(this._backdrop).appendTo(document.body),
                              u.default(this._element).on(ft, function (e) {
                                  i._ignoreBackdropClick ? (i._ignoreBackdropClick = !1) : e.target === e.currentTarget && ("static" === i._config.backdrop ? i._triggerBackdropTransition() : i.hide());
                              }),
                              n && c.reflow(this._backdrop),
                              u.default(this._backdrop).addClass(bt),
                              e && (n ? ((t = c.getTransitionDurationFromElement(this._backdrop)), u.default(this._backdrop).one(c.TRANSITION_END, e).emulateTransitionEnd(t)) : e()))
                            : !this._isShown && this._backdrop
                            ? (u.default(this._backdrop).removeClass(bt),
                              (n = function () {
                                  i._removeBackdrop(), e && e();
                              }),
                              u.default(this._element).hasClass(yt) ? ((t = c.getTransitionDurationFromElement(this._backdrop)), u.default(this._backdrop).one(c.TRANSITION_END, n).emulateTransitionEnd(t)) : n())
                            : e && e();
                    }),
                    (e._adjustDialog = function () {
                        var e = this._element.scrollHeight > document.documentElement.clientHeight;
                        !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px");
                    }),
                    (e._resetAdjustments = function () {
                        (this._element.style.paddingLeft = ""), (this._element.style.paddingRight = "");
                    }),
                    (e._checkScrollbar = function () {
                        var e = document.body.getBoundingClientRect();
                        (this._isBodyOverflowing = Math.round(e.left + e.right) < window.innerWidth), (this._scrollbarWidth = this._getScrollbarWidth());
                    }),
                    (e._setScrollbar = function () {
                        var e,
                            t,
                            r = this;
                        this._isBodyOverflowing &&
                            ((e = [].slice.call(document.querySelectorAll(xt))),
                            (t = [].slice.call(document.querySelectorAll(Ct))),
                            u.default(e).each(function (e, t) {
                                var i = t.style.paddingRight,
                                    n = u.default(t).css("padding-right");
                                u.default(t)
                                    .data("padding-right", i)
                                    .css("padding-right", parseFloat(n) + r._scrollbarWidth + "px");
                            }),
                            u.default(t).each(function (e, t) {
                                var i = t.style.marginRight,
                                    n = u.default(t).css("margin-right");
                                u.default(t)
                                    .data("margin-right", i)
                                    .css("margin-right", parseFloat(n) - r._scrollbarWidth + "px");
                            }),
                            (e = document.body.style.paddingRight),
                            (t = u.default(document.body).css("padding-right")),
                            u
                                .default(document.body)
                                .data("padding-right", e)
                                .css("padding-right", parseFloat(t) + this._scrollbarWidth + "px")),
                            u.default(document.body).addClass(vt);
                    }),
                    (e._resetScrollbar = function () {
                        var e = [].slice.call(document.querySelectorAll(xt));
                        u.default(e).each(function (e, t) {
                            var i = u.default(t).data("padding-right");
                            u.default(t).removeData("padding-right"), (t.style.paddingRight = i || "");
                        });
                        e = [].slice.call(document.querySelectorAll(Ct));
                        u.default(e).each(function (e, t) {
                            var i = u.default(t).data("margin-right");
                            void 0 !== i && u.default(t).css("margin-right", i).removeData("margin-right");
                        });
                        e = u.default(document.body).data("padding-right");
                        u.default(document.body).removeData("padding-right"), (document.body.style.paddingRight = e || "");
                    }),
                    (e._getScrollbarWidth = function () {
                        var e = document.createElement("div");
                        (e.className = "modal-scrollbar-measure"), document.body.appendChild(e);
                        var t = e.getBoundingClientRect().width - e.clientWidth;
                        return document.body.removeChild(e), t;
                    }),
                    (r._jQueryInterface = function (i, n) {
                        return this.each(function () {
                            var e = u.default(this).data(at),
                                t = o({}, lt, u.default(this).data(), "object" == typeof i && i ? i : {});
                            if ((e || ((e = new r(this, t)), u.default(this).data(at, e)), "string" == typeof i)) {
                                if (void 0 === e[i]) throw new TypeError('No method named "' + i + '"');
                                e[i](n);
                            } else t.show && e.show(n);
                        });
                    }),
                    s(r, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "4.6.0";
                            },
                        },
                        {
                            key: "Default",
                            get: function () {
                                return lt;
                            },
                        },
                    ]),
                    r
                );
            })();
        u.default(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (e) {
            var t,
                i = this,
                n = c.getSelectorFromElement(this);
            n && (t = document.querySelector(n));
            n = u.default(t).data(at) ? "toggle" : o({}, u.default(t).data(), u.default(this).data());
            ("A" !== this.tagName && "AREA" !== this.tagName) || e.preventDefault();
            var r = u.default(t).one(ct, function (e) {
                e.isDefaultPrevented() ||
                    r.one(ut, function () {
                        u.default(i).is(":visible") && i.focus();
                    });
            });
            Tt._jQueryInterface.call(u.default(t), n, this);
        }),
            (u.default.fn[rt] = Tt._jQueryInterface),
            (u.default.fn[rt].Constructor = Tt),
            (u.default.fn[rt].noConflict = function () {
                return (u.default.fn[rt] = ot), Tt._jQueryInterface;
            });
        var Et = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
            v = {
                "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                a: ["target", "href", "title", "rel"],
                area: [],
                b: [],
                br: [],
                col: [],
                code: [],
                div: [],
                em: [],
                hr: [],
                h1: [],
                h2: [],
                h3: [],
                h4: [],
                h5: [],
                h6: [],
                i: [],
                img: ["src", "srcset", "alt", "title", "width", "height"],
                li: [],
                ol: [],
                p: [],
                pre: [],
                s: [],
                small: [],
                span: [],
                sub: [],
                sup: [],
                strong: [],
                u: [],
                ul: [],
            },
            St = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
            _t = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
        function kt(e, a, t) {
            if (0 === e.length) return e;
            if (t && "function" == typeof t) return t(e);
            for (
                var e = new window.DOMParser().parseFromString(e, "text/html"),
                    s = Object.keys(a),
                    o = [].slice.call(e.body.querySelectorAll("*")),
                    i = function (e, t) {
                        var i = o[e],
                            n = i.nodeName.toLowerCase();
                        if (-1 === s.indexOf(i.nodeName.toLowerCase())) return i.parentNode.removeChild(i), "continue";
                        var e = [].slice.call(i.attributes),
                            r = [].concat(a["*"] || [], a[n] || []);
                        e.forEach(function (e) {
                            !(function (e, t) {
                                var i = e.nodeName.toLowerCase();
                                if (-1 !== t.indexOf(i)) return -1 === Et.indexOf(i) || Boolean(e.nodeValue.match(St) || e.nodeValue.match(_t));
                                for (
                                    var n = t.filter(function (e) {
                                            return e instanceof RegExp;
                                        }),
                                        r = 0,
                                        a = n.length;
                                    r < a;
                                    r++
                                )
                                    if (i.match(n[r])) return 1;
                            })(e, r) && i.removeAttribute(e.nodeName);
                        });
                    },
                    n = 0,
                    r = o.length;
                n < r;
                n++
            )
                i(n);
            return e.body.innerHTML;
        }
        var Mt = "tooltip",
            Dt = "bs.tooltip",
            It = "." + Dt,
            Lt = u.default.fn[Mt],
            Ot = "bs-tooltip",
            At = new RegExp("(^|\\s)" + Ot + "\\S+", "g"),
            Pt = ["sanitize", "whiteList", "sanitizeFn"],
            Nt = {
                animation: "boolean",
                template: "string",
                title: "(string|element|function)",
                trigger: "string",
                delay: "(number|object)",
                html: "boolean",
                selector: "(string|boolean)",
                placement: "(string|function)",
                offset: "(number|string|function)",
                container: "(string|element|boolean)",
                fallbackPlacement: "(string|array)",
                boundary: "(string|element)",
                customClass: "(string|function)",
                sanitize: "boolean",
                sanitizeFn: "(null|function)",
                whiteList: "object",
                popperConfig: "(null|object)",
            },
            zt = { AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left" },
            Bt = {
                animation: !0,
                template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: "hover focus",
                title: "",
                delay: 0,
                html: !1,
                selector: !1,
                placement: "top",
                offset: 0,
                container: !1,
                fallbackPlacement: "flip",
                boundary: "scrollParent",
                customClass: "",
                sanitize: !0,
                sanitizeFn: null,
                whiteList: v,
                popperConfig: null,
            },
            jt = "show",
            Ht = {
                HIDE: "hide" + It,
                HIDDEN: "hidden" + It,
                SHOW: "show" + It,
                SHOWN: "shown" + It,
                INSERTED: "inserted" + It,
                CLICK: "click" + It,
                FOCUSIN: "focusin" + It,
                FOCUSOUT: "focusout" + It,
                MOUSEENTER: "mouseenter" + It,
                MOUSELEAVE: "mouseleave" + It,
            },
            Rt = "fade",
            $t = "show",
            qt = "hover",
            Wt = "focus",
            Ft = (function () {
                function r(e, t) {
                    if (void 0 === $e) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
                    (this._isEnabled = !0), (this._timeout = 0), (this._hoverState = ""), (this._activeTrigger = {}), (this._popper = null), (this.element = e), (this.config = this._getConfig(t)), (this.tip = null), this._setListeners();
                }
                var e = r.prototype;
                return (
                    (e.enable = function () {
                        this._isEnabled = !0;
                    }),
                    (e.disable = function () {
                        this._isEnabled = !1;
                    }),
                    (e.toggleEnabled = function () {
                        this._isEnabled = !this._isEnabled;
                    }),
                    (e.toggle = function (e) {
                        var t, i;
                        this._isEnabled &&
                            (e
                                ? ((t = this.constructor.DATA_KEY),
                                  (i = u.default(e.currentTarget).data(t)) || ((i = new this.constructor(e.currentTarget, this._getDelegateConfig())), u.default(e.currentTarget).data(t, i)),
                                  (i._activeTrigger.click = !i._activeTrigger.click),
                                  i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i))
                                : u.default(this.getTipElement()).hasClass($t)
                                ? this._leave(null, this)
                                : this._enter(null, this));
                    }),
                    (e.dispose = function () {
                        clearTimeout(this._timeout),
                            u.default.removeData(this.element, this.constructor.DATA_KEY),
                            u.default(this.element).off(this.constructor.EVENT_KEY),
                            u.default(this.element).closest(".modal").off("hide.bs.modal", this._hideModalHandler),
                            this.tip && u.default(this.tip).remove(),
                            (this._isEnabled = null),
                            (this._timeout = null),
                            (this._hoverState = null),
                            (this._activeTrigger = null),
                            this._popper && this._popper.destroy(),
                            (this._popper = null),
                            (this.element = null),
                            (this.config = null),
                            (this.tip = null);
                    }),
                    (e.show = function () {
                        var t = this;
                        if ("none" === u.default(this.element).css("display")) throw new Error("Please use show on visible elements");
                        var e,
                            i,
                            n = u.default.Event(this.constructor.Event.SHOW);
                        this.isWithContent() &&
                            this._isEnabled &&
                            (u.default(this.element).trigger(n),
                            (i = c.findShadowRoot(this.element)),
                            (e = u.default.contains(null !== i ? i : this.element.ownerDocument.documentElement, this.element)),
                            !n.isDefaultPrevented() &&
                                e &&
                                ((i = this.getTipElement()),
                                (n = c.getUID(this.constructor.NAME)),
                                i.setAttribute("id", n),
                                this.element.setAttribute("aria-describedby", n),
                                this.setContent(),
                                this.config.animation && u.default(i).addClass(Rt),
                                (e = "function" == typeof this.config.placement ? this.config.placement.call(this, i, this.element) : this.config.placement),
                                (n = this._getAttachment(e)),
                                this.addAttachmentClass(n),
                                (e = this._getContainer()),
                                u.default(i).data(this.constructor.DATA_KEY, this),
                                u.default.contains(this.element.ownerDocument.documentElement, this.tip) || u.default(i).appendTo(e),
                                u.default(this.element).trigger(this.constructor.Event.INSERTED),
                                (this._popper = new $e(this.element, i, this._getPopperConfig(n))),
                                u.default(i).addClass($t),
                                u.default(i).addClass(this.config.customClass),
                                "ontouchstart" in document.documentElement && u.default(document.body).children().on("mouseover", null, u.default.noop),
                                (n = function () {
                                    t.config.animation && t._fixTransition();
                                    var e = t._hoverState;
                                    (t._hoverState = null), u.default(t.element).trigger(t.constructor.Event.SHOWN), "out" === e && t._leave(null, t);
                                }),
                                u.default(this.tip).hasClass(Rt) ? ((i = c.getTransitionDurationFromElement(this.tip)), u.default(this.tip).one(c.TRANSITION_END, n).emulateTransitionEnd(i)) : n()));
                    }),
                    (e.hide = function (e) {
                        function t() {
                            i._hoverState !== jt && n.parentNode && n.parentNode.removeChild(n),
                                i._cleanTipClass(),
                                i.element.removeAttribute("aria-describedby"),
                                u.default(i.element).trigger(i.constructor.Event.HIDDEN),
                                null !== i._popper && i._popper.destroy(),
                                e && e();
                        }
                        var i = this,
                            n = this.getTipElement(),
                            r = u.default.Event(this.constructor.Event.HIDE);
                        u.default(this.element).trigger(r),
                            r.isDefaultPrevented() ||
                                (u.default(n).removeClass($t),
                                "ontouchstart" in document.documentElement && u.default(document.body).children().off("mouseover", null, u.default.noop),
                                (this._activeTrigger.click = !1),
                                (this._activeTrigger[Wt] = !1),
                                (this._activeTrigger[qt] = !1),
                                u.default(this.tip).hasClass(Rt) ? ((r = c.getTransitionDurationFromElement(n)), u.default(n).one(c.TRANSITION_END, t).emulateTransitionEnd(r)) : t(),
                                (this._hoverState = ""));
                    }),
                    (e.update = function () {
                        null !== this._popper && this._popper.scheduleUpdate();
                    }),
                    (e.isWithContent = function () {
                        return Boolean(this.getTitle());
                    }),
                    (e.addAttachmentClass = function (e) {
                        u.default(this.getTipElement()).addClass(Ot + "-" + e);
                    }),
                    (e.getTipElement = function () {
                        return (this.tip = this.tip || u.default(this.config.template)[0]), this.tip;
                    }),
                    (e.setContent = function () {
                        var e = this.getTipElement();
                        this.setElementContent(u.default(e.querySelectorAll(".tooltip-inner")), this.getTitle()), u.default(e).removeClass(Rt + " " + $t);
                    }),
                    (e.setElementContent = function (e, t) {
                        "object" != typeof t || (!t.nodeType && !t.jquery)
                            ? this.config.html
                                ? (this.config.sanitize && (t = kt(t, this.config.whiteList, this.config.sanitizeFn)), e.html(t))
                                : e.text(t)
                            : this.config.html
                            ? u.default(t).parent().is(e) || e.empty().append(t)
                            : e.text(u.default(t).text());
                    }),
                    (e.getTitle = function () {
                        return this.element.getAttribute("data-original-title") || ("function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title);
                    }),
                    (e._getPopperConfig = function (e) {
                        var t = this;
                        return o(
                            {},
                            {
                                placement: e,
                                modifiers: { offset: this._getOffset(), flip: { behavior: this.config.fallbackPlacement }, arrow: { element: ".arrow" }, preventOverflow: { boundariesElement: this.config.boundary } },
                                onCreate: function (e) {
                                    e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e);
                                },
                                onUpdate: function (e) {
                                    return t._handlePopperPlacementChange(e);
                                },
                            },
                            this.config.popperConfig
                        );
                    }),
                    (e._getOffset = function () {
                        var t = this,
                            e = {};
                        return (
                            "function" == typeof this.config.offset
                                ? (e.fn = function (e) {
                                      return (e.offsets = o({}, e.offsets, t.config.offset(e.offsets, t.element) || {})), e;
                                  })
                                : (e.offset = this.config.offset),
                            e
                        );
                    }),
                    (e._getContainer = function () {
                        return !1 === this.config.container ? document.body : c.isElement(this.config.container) ? u.default(this.config.container) : u.default(document).find(this.config.container);
                    }),
                    (e._getAttachment = function (e) {
                        return zt[e.toUpperCase()];
                    }),
                    (e._setListeners = function () {
                        var i = this;
                        this.config.trigger.split(" ").forEach(function (e) {
                            var t;
                            "click" === e
                                ? u.default(i.element).on(i.constructor.Event.CLICK, i.config.selector, function (e) {
                                      return i.toggle(e);
                                  })
                                : "manual" !== e &&
                                  ((t = e === qt ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN),
                                  (e = e === qt ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT),
                                  u
                                      .default(i.element)
                                      .on(t, i.config.selector, function (e) {
                                          return i._enter(e);
                                      })
                                      .on(e, i.config.selector, function (e) {
                                          return i._leave(e);
                                      }));
                        }),
                            (this._hideModalHandler = function () {
                                i.element && i.hide();
                            }),
                            u.default(this.element).closest(".modal").on("hide.bs.modal", this._hideModalHandler),
                            this.config.selector ? (this.config = o({}, this.config, { trigger: "manual", selector: "" })) : this._fixTitle();
                    }),
                    (e._fixTitle = function () {
                        var e = typeof this.element.getAttribute("data-original-title");
                        (!this.element.getAttribute("title") && "string" == e) || (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""));
                    }),
                    (e._enter = function (e, t) {
                        var i = this.constructor.DATA_KEY;
                        (t = t || u.default(e.currentTarget).data(i)) || ((t = new this.constructor(e.currentTarget, this._getDelegateConfig())), u.default(e.currentTarget).data(i, t)),
                            e && (t._activeTrigger["focusin" === e.type ? Wt : qt] = !0),
                            u.default(t.getTipElement()).hasClass($t) || t._hoverState === jt
                                ? (t._hoverState = jt)
                                : (clearTimeout(t._timeout),
                                  (t._hoverState = jt),
                                  t.config.delay && t.config.delay.show
                                      ? (t._timeout = setTimeout(function () {
                                            t._hoverState === jt && t.show();
                                        }, t.config.delay.show))
                                      : t.show());
                    }),
                    (e._leave = function (e, t) {
                        var i = this.constructor.DATA_KEY;
                        (t = t || u.default(e.currentTarget).data(i)) || ((t = new this.constructor(e.currentTarget, this._getDelegateConfig())), u.default(e.currentTarget).data(i, t)),
                            e && (t._activeTrigger["focusout" === e.type ? Wt : qt] = !1),
                            t._isWithActiveTrigger() ||
                                (clearTimeout(t._timeout),
                                (t._hoverState = "out"),
                                t.config.delay && t.config.delay.hide
                                    ? (t._timeout = setTimeout(function () {
                                          "out" === t._hoverState && t.hide();
                                      }, t.config.delay.hide))
                                    : t.hide());
                    }),
                    (e._isWithActiveTrigger = function () {
                        for (var e in this._activeTrigger) if (this._activeTrigger[e]) return !0;
                        return !1;
                    }),
                    (e._getConfig = function (e) {
                        var t = u.default(this.element).data();
                        return (
                            Object.keys(t).forEach(function (e) {
                                -1 !== Pt.indexOf(e) && delete t[e];
                            }),
                            "number" == typeof (e = o({}, this.constructor.Default, t, "object" == typeof e && e ? e : {})).delay && (e.delay = { show: e.delay, hide: e.delay }),
                            "number" == typeof e.title && (e.title = e.title.toString()),
                            "number" == typeof e.content && (e.content = e.content.toString()),
                            c.typeCheckConfig(Mt, e, this.constructor.DefaultType),
                            e.sanitize && (e.template = kt(e.template, e.whiteList, e.sanitizeFn)),
                            e
                        );
                    }),
                    (e._getDelegateConfig = function () {
                        var e = {};
                        if (this.config) for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                        return e;
                    }),
                    (e._cleanTipClass = function () {
                        var e = u.default(this.getTipElement()),
                            t = e.attr("class").match(At);
                        null !== t && t.length && e.removeClass(t.join(""));
                    }),
                    (e._handlePopperPlacementChange = function (e) {
                        (this.tip = e.instance.popper), this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement));
                    }),
                    (e._fixTransition = function () {
                        var e = this.getTipElement(),
                            t = this.config.animation;
                        null === e.getAttribute("x-placement") && (u.default(e).removeClass(Rt), (this.config.animation = !1), this.hide(), this.show(), (this.config.animation = t));
                    }),
                    (r._jQueryInterface = function (n) {
                        return this.each(function () {
                            var e = u.default(this),
                                t = e.data(Dt),
                                i = "object" == typeof n && n;
                            if ((t || !/dispose|hide/.test(n)) && (t || ((t = new r(this, i)), e.data(Dt, t)), "string" == typeof n)) {
                                if (void 0 === t[n]) throw new TypeError('No method named "' + n + '"');
                                t[n]();
                            }
                        });
                    }),
                    s(r, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "4.6.0";
                            },
                        },
                        {
                            key: "Default",
                            get: function () {
                                return Bt;
                            },
                        },
                        {
                            key: "NAME",
                            get: function () {
                                return Mt;
                            },
                        },
                        {
                            key: "DATA_KEY",
                            get: function () {
                                return Dt;
                            },
                        },
                        {
                            key: "Event",
                            get: function () {
                                return Ht;
                            },
                        },
                        {
                            key: "EVENT_KEY",
                            get: function () {
                                return It;
                            },
                        },
                        {
                            key: "DefaultType",
                            get: function () {
                                return Nt;
                            },
                        },
                    ]),
                    r
                );
            })();
        (u.default.fn[Mt] = Ft._jQueryInterface),
            (u.default.fn[Mt].Constructor = Ft),
            (u.default.fn[Mt].noConflict = function () {
                return (u.default.fn[Mt] = Lt), Ft._jQueryInterface;
            });
        var Yt = "popover",
            Vt = "bs.popover",
            Gt = "." + Vt,
            Xt = u.default.fn[Yt],
            Ut = "bs-popover",
            Qt = new RegExp("(^|\\s)" + Ut + "\\S+", "g"),
            Kt = o({}, Ft.Default, { placement: "right", trigger: "click", content: "", template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>' }),
            Jt = o({}, Ft.DefaultType, { content: "(string|element|function)" }),
            Zt = {
                HIDE: "hide" + Gt,
                HIDDEN: "hidden" + Gt,
                SHOW: "show" + Gt,
                SHOWN: "shown" + Gt,
                INSERTED: "inserted" + Gt,
                CLICK: "click" + Gt,
                FOCUSIN: "focusin" + Gt,
                FOCUSOUT: "focusout" + Gt,
                MOUSEENTER: "mouseenter" + Gt,
                MOUSELEAVE: "mouseleave" + Gt,
            },
            ei = (function (e) {
                var t;
                function n() {
                    return e.apply(this, arguments) || this;
                }
                (i = e), ((t = n).prototype = Object.create(i.prototype)), ((t.prototype.constructor = t).__proto__ = i);
                var i = n.prototype;
                return (
                    (i.isWithContent = function () {
                        return this.getTitle() || this._getContent();
                    }),
                    (i.addAttachmentClass = function (e) {
                        u.default(this.getTipElement()).addClass(Ut + "-" + e);
                    }),
                    (i.getTipElement = function () {
                        return (this.tip = this.tip || u.default(this.config.template)[0]), this.tip;
                    }),
                    (i.setContent = function () {
                        var e = u.default(this.getTipElement());
                        this.setElementContent(e.find(".popover-header"), this.getTitle());
                        var t = this._getContent();
                        "function" == typeof t && (t = t.call(this.element)), this.setElementContent(e.find(".popover-body"), t), e.removeClass("fade show");
                    }),
                    (i._getContent = function () {
                        return this.element.getAttribute("data-content") || this.config.content;
                    }),
                    (i._cleanTipClass = function () {
                        var e = u.default(this.getTipElement()),
                            t = e.attr("class").match(Qt);
                        null !== t && 0 < t.length && e.removeClass(t.join(""));
                    }),
                    (n._jQueryInterface = function (i) {
                        return this.each(function () {
                            var e = u.default(this).data(Vt),
                                t = "object" == typeof i ? i : null;
                            if ((e || !/dispose|hide/.test(i)) && (e || ((e = new n(this, t)), u.default(this).data(Vt, e)), "string" == typeof i)) {
                                if (void 0 === e[i]) throw new TypeError('No method named "' + i + '"');
                                e[i]();
                            }
                        });
                    }),
                    s(n, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "4.6.0";
                            },
                        },
                        {
                            key: "Default",
                            get: function () {
                                return Kt;
                            },
                        },
                        {
                            key: "NAME",
                            get: function () {
                                return Yt;
                            },
                        },
                        {
                            key: "DATA_KEY",
                            get: function () {
                                return Vt;
                            },
                        },
                        {
                            key: "Event",
                            get: function () {
                                return Zt;
                            },
                        },
                        {
                            key: "EVENT_KEY",
                            get: function () {
                                return Gt;
                            },
                        },
                        {
                            key: "DefaultType",
                            get: function () {
                                return Jt;
                            },
                        },
                    ]),
                    n
                );
            })(Ft);
        (u.default.fn[Yt] = ei._jQueryInterface),
            (u.default.fn[Yt].Constructor = ei),
            (u.default.fn[Yt].noConflict = function () {
                return (u.default.fn[Yt] = Xt), ei._jQueryInterface;
            });
        var ti = "scrollspy",
            ii = "bs.scrollspy",
            ni = "." + ii,
            ri = u.default.fn[ti],
            ai = { offset: 10, method: "auto", target: "" },
            si = { offset: "number", method: "string", target: "(string|element)" },
            oi = "active",
            li = ".nav, .list-group",
            di = ".nav-link",
            ui = ".list-group-item",
            ci = "position",
            hi = (function () {
                function i(e, t) {
                    var i = this;
                    (this._element = e),
                        (this._scrollElement = "BODY" === e.tagName ? window : e),
                        (this._config = this._getConfig(t)),
                        (this._selector = this._config.target + " " + di + "," + this._config.target + " " + ui + "," + this._config.target + " .dropdown-item"),
                        (this._offsets = []),
                        (this._targets = []),
                        (this._activeTarget = null),
                        (this._scrollHeight = 0),
                        u.default(this._scrollElement).on("scroll.bs.scrollspy", function (e) {
                            return i._process(e);
                        }),
                        this.refresh(),
                        this._process();
                }
                var e = i.prototype;
                return (
                    (e.refresh = function () {
                        var t = this,
                            e = this._scrollElement === this._scrollElement.window ? "offset" : ci,
                            n = "auto" === this._config.method ? e : this._config.method,
                            r = n === ci ? this._getScrollTop() : 0;
                        (this._offsets = []),
                            (this._targets = []),
                            (this._scrollHeight = this._getScrollHeight()),
                            [].slice
                                .call(document.querySelectorAll(this._selector))
                                .map(function (e) {
                                    var t,
                                        i = c.getSelectorFromElement(e);
                                    if ((t = i ? document.querySelector(i) : t)) {
                                        e = t.getBoundingClientRect();
                                        if (e.width || e.height) return [u.default(t)[n]().top + r, i];
                                    }
                                    return null;
                                })
                                .filter(function (e) {
                                    return e;
                                })
                                .sort(function (e, t) {
                                    return e[0] - t[0];
                                })
                                .forEach(function (e) {
                                    t._offsets.push(e[0]), t._targets.push(e[1]);
                                });
                    }),
                    (e.dispose = function () {
                        u.default.removeData(this._element, ii),
                            u.default(this._scrollElement).off(ni),
                            (this._element = null),
                            (this._scrollElement = null),
                            (this._config = null),
                            (this._selector = null),
                            (this._offsets = null),
                            (this._targets = null),
                            (this._activeTarget = null),
                            (this._scrollHeight = null);
                    }),
                    (e._getConfig = function (e) {
                        var t;
                        return (
                            "string" != typeof (e = o({}, ai, "object" == typeof e && e ? e : {})).target &&
                                c.isElement(e.target) &&
                                ((t = u.default(e.target).attr("id")) || ((t = c.getUID(ti)), u.default(e.target).attr("id", t)), (e.target = "#" + t)),
                            c.typeCheckConfig(ti, e, si),
                            e
                        );
                    }),
                    (e._getScrollTop = function () {
                        return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
                    }),
                    (e._getScrollHeight = function () {
                        return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
                    }),
                    (e._getOffsetHeight = function () {
                        return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
                    }),
                    (e._process = function () {
                        var e = this._getScrollTop() + this._config.offset,
                            t = this._getScrollHeight(),
                            i = this._config.offset + t - this._getOffsetHeight();
                        if ((this._scrollHeight !== t && this.refresh(), i <= e)) {
                            i = this._targets[this._targets.length - 1];
                            this._activeTarget !== i && this._activate(i);
                        } else {
                            if (this._activeTarget && e < this._offsets[0] && 0 < this._offsets[0]) return (this._activeTarget = null), void this._clear();
                            for (var n = this._offsets.length; n--; ) this._activeTarget !== this._targets[n] && e >= this._offsets[n] && (void 0 === this._offsets[n + 1] || e < this._offsets[n + 1]) && this._activate(this._targets[n]);
                        }
                    }),
                    (e._activate = function (t) {
                        (this._activeTarget = t), this._clear();
                        var e = this._selector.split(",").map(function (e) {
                                return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]';
                            }),
                            e = u.default([].slice.call(document.querySelectorAll(e.join(","))));
                        e.hasClass("dropdown-item")
                            ? (e.closest(".dropdown").find(".dropdown-toggle").addClass(oi), e.addClass(oi))
                            : (e.addClass(oi),
                              e
                                  .parents(li)
                                  .prev(di + ", " + ui)
                                  .addClass(oi),
                              e.parents(li).prev(".nav-item").children(di).addClass(oi)),
                            u.default(this._scrollElement).trigger("activate.bs.scrollspy", { relatedTarget: t });
                    }),
                    (e._clear = function () {
                        [].slice
                            .call(document.querySelectorAll(this._selector))
                            .filter(function (e) {
                                return e.classList.contains(oi);
                            })
                            .forEach(function (e) {
                                return e.classList.remove(oi);
                            });
                    }),
                    (i._jQueryInterface = function (t) {
                        return this.each(function () {
                            var e = u.default(this).data(ii);
                            if ((e || ((e = new i(this, "object" == typeof t && t)), u.default(this).data(ii, e)), "string" == typeof t)) {
                                if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
                                e[t]();
                            }
                        });
                    }),
                    s(i, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "4.6.0";
                            },
                        },
                        {
                            key: "Default",
                            get: function () {
                                return ai;
                            },
                        },
                    ]),
                    i
                );
            })();
        u.default(window).on("load.bs.scrollspy.data-api", function () {
            for (var e = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')), t = e.length; t--; ) {
                var i = u.default(e[t]);
                hi._jQueryInterface.call(i, i.data());
            }
        }),
            (u.default.fn[ti] = hi._jQueryInterface),
            (u.default.fn[ti].Constructor = hi),
            (u.default.fn[ti].noConflict = function () {
                return (u.default.fn[ti] = ri), hi._jQueryInterface;
            });
        var pi = "bs.tab",
            v = "." + pi,
            fi = u.default.fn.tab,
            mi = "active",
            gi = ".active",
            vi = "> li > .active",
            yi = (function () {
                function n(e) {
                    this._element = e;
                }
                var e = n.prototype;
                return (
                    (e.show = function () {
                        var e,
                            t,
                            i,
                            n,
                            r,
                            a,
                            s = this;
                        (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && u.default(this._element).hasClass(mi)) ||
                            u.default(this._element).hasClass("disabled") ||
                            ((a = u.default(this._element).closest(".nav, .list-group")[0]),
                            (t = c.getSelectorFromElement(this._element)),
                            a && ((r = "UL" === a.nodeName || "OL" === a.nodeName ? vi : gi), (i = (i = u.default.makeArray(u.default(a).find(r)))[i.length - 1])),
                            (n = u.default.Event("hide.bs.tab", { relatedTarget: this._element })),
                            (r = u.default.Event("show.bs.tab", { relatedTarget: i })),
                            i && u.default(i).trigger(n),
                            u.default(this._element).trigger(r),
                            r.isDefaultPrevented() ||
                                n.isDefaultPrevented() ||
                                (t && (e = document.querySelector(t)),
                                this._activate(this._element, a),
                                (a = function () {
                                    var e = u.default.Event("hidden.bs.tab", { relatedTarget: s._element }),
                                        t = u.default.Event("shown.bs.tab", { relatedTarget: i });
                                    u.default(i).trigger(e), u.default(s._element).trigger(t);
                                }),
                                e ? this._activate(e, e.parentNode, a) : a()));
                    }),
                    (e.dispose = function () {
                        u.default.removeData(this._element, pi), (this._element = null);
                    }),
                    (e._activate = function (e, t, i) {
                        var n = this,
                            r = (!t || ("UL" !== t.nodeName && "OL" !== t.nodeName) ? u.default(t).children(gi) : u.default(t).find(vi))[0],
                            a = i && r && u.default(r).hasClass("fade"),
                            t = function () {
                                return n._transitionComplete(e, r, i);
                            };
                        r && a ? ((a = c.getTransitionDurationFromElement(r)), u.default(r).removeClass("show").one(c.TRANSITION_END, t).emulateTransitionEnd(a)) : t();
                    }),
                    (e._transitionComplete = function (e, t, i) {
                        var n;
                        t && (u.default(t).removeClass(mi), (n = u.default(t.parentNode).find("> .dropdown-menu .active")[0]) && u.default(n).removeClass(mi), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1)),
                            u.default(e).addClass(mi),
                            "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0),
                            c.reflow(e),
                            e.classList.contains("fade") && e.classList.add("show"),
                            e.parentNode &&
                                u.default(e.parentNode).hasClass("dropdown-menu") &&
                                ((t = u.default(e).closest(".dropdown")[0]) && ((t = [].slice.call(t.querySelectorAll(".dropdown-toggle"))), u.default(t).addClass(mi)), e.setAttribute("aria-expanded", !0)),
                            i && i();
                    }),
                    (n._jQueryInterface = function (i) {
                        return this.each(function () {
                            var e = u.default(this),
                                t = e.data(pi);
                            if ((t || ((t = new n(this)), e.data(pi, t)), "string" == typeof i)) {
                                if (void 0 === t[i]) throw new TypeError('No method named "' + i + '"');
                                t[i]();
                            }
                        });
                    }),
                    s(n, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "4.6.0";
                            },
                        },
                    ]),
                    n
                );
            })();
        u.default(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function (e) {
            e.preventDefault(), yi._jQueryInterface.call(u.default(this), "show");
        }),
            (u.default.fn.tab = yi._jQueryInterface),
            (u.default.fn.tab.Constructor = yi),
            (u.default.fn.tab.noConflict = function () {
                return (u.default.fn.tab = fi), yi._jQueryInterface;
            });
        var bi = "toast",
            wi = "bs.toast",
            v = "." + wi,
            xi = u.default.fn[bi],
            Ci = "click.dismiss" + v,
            Ti = "show",
            Ei = "showing",
            Si = { animation: "boolean", autohide: "boolean", delay: "number" },
            _i = { animation: !0, autohide: !0, delay: 500 },
            ki = (function () {
                function n(e, t) {
                    (this._element = e), (this._config = this._getConfig(t)), (this._timeout = null), this._setListeners();
                }
                var e = n.prototype;
                return (
                    (e.show = function () {
                        var e,
                            t = this,
                            i = u.default.Event("show.bs.toast");
                        u.default(this._element).trigger(i),
                            i.isDefaultPrevented() ||
                                (this._clearTimeout(),
                                this._config.animation && this._element.classList.add("fade"),
                                (e = function () {
                                    t._element.classList.remove(Ei),
                                        t._element.classList.add(Ti),
                                        u.default(t._element).trigger("shown.bs.toast"),
                                        t._config.autohide &&
                                            (t._timeout = setTimeout(function () {
                                                t.hide();
                                            }, t._config.delay));
                                }),
                                this._element.classList.remove("hide"),
                                c.reflow(this._element),
                                this._element.classList.add(Ei),
                                this._config.animation ? ((i = c.getTransitionDurationFromElement(this._element)), u.default(this._element).one(c.TRANSITION_END, e).emulateTransitionEnd(i)) : e());
                    }),
                    (e.hide = function () {
                        var e;
                        this._element.classList.contains(Ti) && ((e = u.default.Event("hide.bs.toast")), u.default(this._element).trigger(e), e.isDefaultPrevented() || this._close());
                    }),
                    (e.dispose = function () {
                        this._clearTimeout(),
                            this._element.classList.contains(Ti) && this._element.classList.remove(Ti),
                            u.default(this._element).off(Ci),
                            u.default.removeData(this._element, wi),
                            (this._element = null),
                            (this._config = null);
                    }),
                    (e._getConfig = function (e) {
                        return (e = o({}, _i, u.default(this._element).data(), "object" == typeof e && e ? e : {})), c.typeCheckConfig(bi, e, this.constructor.DefaultType), e;
                    }),
                    (e._setListeners = function () {
                        var e = this;
                        u.default(this._element).on(Ci, '[data-dismiss="toast"]', function () {
                            return e.hide();
                        });
                    }),
                    (e._close = function () {
                        function e() {
                            i._element.classList.add("hide"), u.default(i._element).trigger("hidden.bs.toast");
                        }
                        var t,
                            i = this;
                        this._element.classList.remove(Ti), this._config.animation ? ((t = c.getTransitionDurationFromElement(this._element)), u.default(this._element).one(c.TRANSITION_END, e).emulateTransitionEnd(t)) : e();
                    }),
                    (e._clearTimeout = function () {
                        clearTimeout(this._timeout), (this._timeout = null);
                    }),
                    (n._jQueryInterface = function (i) {
                        return this.each(function () {
                            var e = u.default(this),
                                t = e.data(wi);
                            if ((t || ((t = new n(this, "object" == typeof i && i)), e.data(wi, t)), "string" == typeof i)) {
                                if (void 0 === t[i]) throw new TypeError('No method named "' + i + '"');
                                t[i](this);
                            }
                        });
                    }),
                    s(n, null, [
                        {
                            key: "VERSION",
                            get: function () {
                                return "4.6.0";
                            },
                        },
                        {
                            key: "DefaultType",
                            get: function () {
                                return Si;
                            },
                        },
                        {
                            key: "Default",
                            get: function () {
                                return _i;
                            },
                        },
                    ]),
                    n
                );
            })();
        (u.default.fn[bi] = ki._jQueryInterface),
            (u.default.fn[bi].Constructor = ki),
            (u.default.fn[bi].noConflict = function () {
                return (u.default.fn[bi] = xi), ki._jQueryInterface;
            }),
            (e.Alert = f),
            (e.Button = x),
            (e.Carousel = P),
            (e.Collapse = Y),
            (e.Dropdown = nt),
            (e.Modal = Tt),
            (e.Popover = ei),
            (e.Scrollspy = hi),
            (e.Tab = yi),
            (e.Toast = ki),
            (e.Tooltip = Ft),
            (e.Util = c),
            Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (function (e, t) {
        "object" == typeof exports && "undefined" != typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define(t) : ((e = e || self).bsCustomFileInput = t());
    })(this, function () {
        "use strict";
        var c = { CUSTOMFILE: '.custom-file input[type="file"]', CUSTOMFILELABEL: ".custom-file-label", FORM: "form", INPUT: "input" },
            i = function (e) {
                if (0 < e.childNodes.length)
                    for (var t = [].slice.call(e.childNodes), i = 0; i < t.length; i++) {
                        var n = t[i];
                        if (3 !== n.nodeType) return n;
                    }
                return e;
            },
            o = function (e) {
                var t = e.bsCustomFileInput.defaultText,
                    e = e.parentNode.querySelector(c.CUSTOMFILELABEL);
                e && (i(e).textContent = t);
            },
            t = !!window.File,
            n = function (e) {
                if (e.hasAttribute("multiple") && t)
                    return [].slice
                        .call(e.files)
                        .map(function (e) {
                            return e.name;
                        })
                        .join(", ");
                if (-1 === e.value.indexOf("fakepath")) return e.value;
                e = e.value.split("\\");
                return e[e.length - 1];
            };
        function h() {
            var e,
                t = this.parentNode.querySelector(c.CUSTOMFILELABEL);
            t && ((e = i(t)), (t = n(this)).length ? (e.textContent = t) : o(this));
        }
        function p() {
            for (
                var e = [].slice.call(this.querySelectorAll(c.INPUT)).filter(function (e) {
                        return !!e.bsCustomFileInput;
                    }),
                    t = 0,
                    i = e.length;
                t < i;
                t++
            )
                o(e[t]);
        }
        var f = "bsCustomFileInput",
            m = "reset",
            g = "change";
        return {
            init: function (e, t) {
                void 0 === e && (e = c.CUSTOMFILE), void 0 === t && (t = c.FORM);
                for (var i, n, r = [].slice.call(document.querySelectorAll(e)), a = [].slice.call(document.querySelectorAll(t)), s = 0, o = r.length; s < o; s++) {
                    var l = r[s];
                    Object.defineProperty(l, f, { value: { defaultText: ((n = void 0), (n = ""), (i = (i = l).parentNode.querySelector(c.CUSTOMFILELABEL)), (n = i ? i.textContent : n)) }, writable: !0 }),
                        h.call(l),
                        l.addEventListener(g, h);
                }
                for (var d = 0, u = a.length; d < u; d++) a[d].addEventListener(m, p), Object.defineProperty(a[d], f, { value: !0, writable: !0 });
            },
            destroy: function () {
                for (
                    var e = [].slice.call(document.querySelectorAll(c.FORM)).filter(function (e) {
                            return !!e.bsCustomFileInput;
                        }),
                        t = [].slice.call(document.querySelectorAll(c.INPUT)).filter(function (e) {
                            return !!e.bsCustomFileInput;
                        }),
                        i = 0,
                        n = t.length;
                    i < n;
                    i++
                ) {
                    var r = t[i];
                    o(r), (r[f] = void 0), r.removeEventListener(g, h);
                }
                for (var a = 0, s = e.length; a < s; a++) e[a].removeEventListener(m, p), (e[a][f] = void 0);
            },
        };
    }),
    (function (e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof module && module.exports ? (module.exports = e) : e(jQuery, window, document);
    })(function (A) {
        var l, P, n, r, o, a, m, N, z, g, h, d, u, c, p, f, v, y, b, w, x, C, E, T, S, _, k, M, B, s, D, I, L, O, j, H, R, $, q, W, F, Y, V, G, X, U, Q, K, J, Z, t, ee, te, ie, ne, re, ae, e, i, se;
        (e = "function" == typeof define && define.amd),
            (i = "undefined" != typeof module && module.exports),
            (se = "https:" == document.location.protocol ? "https:" : "http:"),
            e ||
                (i ? require("jquery-mousewheel")(A) : A.event.special.mousewheel || A("head").append(decodeURI("%3Cscript src=" + se + "//cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js%3E%3C/script%3E"))),
            (l = "mCustomScrollbar"),
            (P = "mCS"),
            (n = ".mCustomScrollbar"),
            (r = {
                setTop: 0,
                setLeft: 0,
                axis: "y",
                scrollbarPosition: "inside",
                scrollInertia: 950,
                autoDraggerLength: !0,
                alwaysShowScrollbar: 0,
                snapOffset: 0,
                mouseWheel: { enable: !0, scrollAmount: "auto", axis: "y", deltaFactor: "auto", disableOver: ["select", "option", "keygen", "datalist", "textarea"] },
                scrollButtons: { scrollType: "stepless", scrollAmount: "auto" },
                keyboard: { enable: !0, scrollType: "stepless", scrollAmount: "auto" },
                contentTouchScroll: 25,
                documentTouchScroll: !0,
                advanced: { autoScrollOnFocus: "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']", updateOnContentResize: !0, updateOnImageLoad: "auto", autoUpdateTimeout: 60 },
                theme: "light",
                callbacks: { onTotalScrollOffset: 0, onTotalScrollBackOffset: 0, alwaysTriggerOffsets: !0 },
            }),
            (o = 0),
            (a = {}),
            (m = window.attachEvent && !window.addEventListener ? 1 : 0),
            (N = !1),
            (g = [
                "mCSB_dragger_onDrag",
                "mCSB_scrollTools_onDrag",
                "mCS_img_loaded",
                "mCS_disabled",
                "mCS_destroyed",
                "mCS_no_scrollbar",
                "mCS-autoHide",
                "mCS-dir-rtl",
                "mCS_no_scrollbar_y",
                "mCS_no_scrollbar_x",
                "mCS_y_hidden",
                "mCS_x_hidden",
                "mCSB_draggerContainer",
                "mCSB_buttonUp",
                "mCSB_buttonDown",
                "mCSB_buttonLeft",
                "mCSB_buttonRight",
            ]),
            (h = {
                init: function (s) {
                    var s = A.extend(!0, {}, r, s),
                        e = d.call(this);
                    if (s.live) {
                        var t = s.liveSelector || this.selector || n,
                            i = A(t);
                        if ("off" === s.live) return void c(t);
                        a[t] = setTimeout(function () {
                            i.mCustomScrollbar(s), "once" === s.live && i.length && c(t);
                        }, 500);
                    } else c(t);
                    return (
                        (s.setWidth = s.set_width || s.setWidth),
                        (s.setHeight = s.set_height || s.setHeight),
                        (s.axis = s.horizontalScroll ? "x" : p(s.axis)),
                        (s.scrollInertia = 0 < s.scrollInertia && s.scrollInertia < 17 ? 17 : s.scrollInertia),
                        "object" != typeof s.mouseWheel && 1 == s.mouseWheel && (s.mouseWheel = { enable: !0, scrollAmount: "auto", axis: "y", preventDefault: !1, deltaFactor: "auto", normalizeDelta: !1, invert: !1 }),
                        (s.mouseWheel.scrollAmount = s.mouseWheelPixels || s.mouseWheel.scrollAmount),
                        (s.mouseWheel.normalizeDelta = s.advanced.normalizeMouseWheelDelta || s.mouseWheel.normalizeDelta),
                        (s.scrollButtons.scrollType = f(s.scrollButtons.scrollType)),
                        u(s),
                        A(e).each(function () {
                            var e,
                                t,
                                i,
                                n,
                                r,
                                a = A(this);
                            a.data(P) ||
                                (a.data(P, {
                                    idx: ++o,
                                    opt: s,
                                    scrollRatio: { y: null, x: null },
                                    overflowed: null,
                                    contentReset: { y: null, x: null },
                                    bindEvents: !1,
                                    tweenRunning: !1,
                                    sequential: {},
                                    langDir: a.css("direction"),
                                    cbOffsets: null,
                                    trigger: null,
                                    poll: { size: { o: 0, n: 0 }, img: { o: 0, n: 0 }, change: { o: 0, n: 0 } },
                                }),
                                (t = (e = a.data(P)).opt),
                                (i = a.data("mcs-axis")),
                                (n = a.data("mcs-scrollbar-position")),
                                (r = a.data("mcs-theme")),
                                i && (t.axis = i),
                                n && (t.scrollbarPosition = n),
                                r && ((t.theme = r), u(t)),
                                v.call(this),
                                e && t.callbacks.onCreate && "function" == typeof t.callbacks.onCreate && t.callbacks.onCreate.call(this),
                                A("#mCSB_" + e.idx + "_container img:not(." + g[2] + ")").addClass(g[2]),
                                h.update.call(null, a));
                        })
                    );
                },
                update: function (e, s) {
                    e = e || d.call(this);
                    return A(e).each(function () {
                        var e,
                            t,
                            i,
                            n,
                            r,
                            a = A(this);
                        a.data(P) &&
                            ((t = (e = a.data(P)).opt),
                            (r = A("#mCSB_" + e.idx + "_container")),
                            (i = A("#mCSB_" + e.idx)),
                            (n = [A("#mCSB_" + e.idx + "_dragger_vertical"), A("#mCSB_" + e.idx + "_dragger_horizontal")]),
                            r.length &&
                                (e.tweenRunning && Q(a),
                                s && e && t.callbacks.onBeforeUpdate && "function" == typeof t.callbacks.onBeforeUpdate && t.callbacks.onBeforeUpdate.call(this),
                                a.hasClass(g[3]) && a.removeClass(g[3]),
                                a.hasClass(g[4]) && a.removeClass(g[4]),
                                i.css("max-height", "none"),
                                i.height() !== a.height() && i.css("max-height", a.height()),
                                b.call(this),
                                "y" === t.axis || t.advanced.autoExpandHorizontalScroll || r.css("width", y(r)),
                                (e.overflowed = T.call(this)),
                                M.call(this),
                                t.autoDraggerLength && x.call(this),
                                C.call(this),
                                _.call(this),
                                (r = [Math.abs(r[0].offsetTop), Math.abs(r[0].offsetLeft)]),
                                "x" !== t.axis &&
                                    (e.overflowed[0]
                                        ? n[0].height() > n[0].parent().height()
                                            ? S.call(this)
                                            : (K(a, r[0].toString(), { dir: "y", dur: 0, overwrite: "none" }), (e.contentReset.y = null))
                                        : (S.call(this), "y" === t.axis ? k.call(this) : "yx" === t.axis && e.overflowed[1] && K(a, r[1].toString(), { dir: "x", dur: 0, overwrite: "none" }))),
                                "y" !== t.axis &&
                                    (e.overflowed[1]
                                        ? n[1].width() > n[1].parent().width()
                                            ? S.call(this)
                                            : (K(a, r[1].toString(), { dir: "x", dur: 0, overwrite: "none" }), (e.contentReset.x = null))
                                        : (S.call(this), "x" === t.axis ? k.call(this) : "yx" === t.axis && e.overflowed[0] && K(a, r[0].toString(), { dir: "y", dur: 0, overwrite: "none" }))),
                                s &&
                                    e &&
                                    (2 === s && t.callbacks.onImageLoad && "function" == typeof t.callbacks.onImageLoad
                                        ? t.callbacks.onImageLoad.call(this)
                                        : 3 === s && t.callbacks.onSelectorChange && "function" == typeof t.callbacks.onSelectorChange
                                        ? t.callbacks.onSelectorChange.call(this)
                                        : t.callbacks.onUpdate && "function" == typeof t.callbacks.onUpdate && t.callbacks.onUpdate.call(this)),
                                U.call(this)));
                    });
                },
                scrollTo: function (s, o) {
                    if (void 0 !== s && null != s) {
                        var e = d.call(this);
                        return A(e).each(function () {
                            var e,
                                t,
                                i,
                                n,
                                r,
                                a = A(this);
                            a.data(P) &&
                                ((e = a.data(P)),
                                (r = { trigger: "external", scrollInertia: (t = e.opt).scrollInertia, scrollEasing: "mcsEaseInOut", moveDragger: !1, timeout: 60, callbacks: !0, onStart: !0, onUpdate: !0, onComplete: !0 }),
                                (i = A.extend(!0, {}, r, o)),
                                (n = G.call(this, s)),
                                (r = 0 < i.scrollInertia && i.scrollInertia < 17 ? 17 : i.scrollInertia),
                                (n[0] = X.call(this, n[0], "y")),
                                (n[1] = X.call(this, n[1], "x")),
                                i.moveDragger && ((n[0] *= e.scrollRatio.y), (n[1] *= e.scrollRatio.x)),
                                (i.dur = ae() ? 0 : r),
                                setTimeout(function () {
                                    null !== n[0] && void 0 !== n[0] && "x" !== t.axis && e.overflowed[0] && ((i.dir = "y"), (i.overwrite = "all"), K(a, n[0].toString(), i)),
                                        null !== n[1] && void 0 !== n[1] && "y" !== t.axis && e.overflowed[1] && ((i.dir = "x"), (i.overwrite = "none"), K(a, n[1].toString(), i));
                                }, i.timeout));
                        });
                    }
                },
                stop: function () {
                    var e = d.call(this);
                    return A(e).each(function () {
                        var e = A(this);
                        e.data(P) && Q(e);
                    });
                },
                disable: function (t) {
                    var e = d.call(this);
                    return A(e).each(function () {
                        var e = A(this);
                        e.data(P) && (e.data(P), U.call(this, "remove"), k.call(this), t && S.call(this), M.call(this, !0), e.addClass(g[3]));
                    });
                },
                destroy: function () {
                    var s = d.call(this);
                    return A(s).each(function () {
                        var e,
                            t,
                            i,
                            n,
                            r,
                            a = A(this);
                        a.data(P) &&
                            ((t = (e = a.data(P)).opt),
                            (i = A("#mCSB_" + e.idx)),
                            (n = A("#mCSB_" + e.idx + "_container")),
                            (r = A(".mCSB_" + e.idx + "_scrollbar")),
                            t.live && c(t.liveSelector || A(s).selector),
                            U.call(this, "remove"),
                            k.call(this),
                            S.call(this),
                            a.removeData(P),
                            ee(this, "mcs"),
                            r.remove(),
                            n.find("img." + g[2]).removeClass(g[2]),
                            i.replaceWith(n.contents()),
                            a.removeClass(l + " _" + P + "_" + e.idx + " " + g[6] + " " + g[7] + " " + g[5] + " " + g[3]).addClass(g[4]));
                    });
                },
            }),
            (d = function () {
                return "object" != typeof A(this) || A(this).length < 1 ? n : this;
            }),
            (u = function (e) {
                (e.autoDraggerLength = !(-1 < A.inArray(e.theme, ["rounded", "rounded-dark", "rounded-dots", "rounded-dots-dark"])) && e.autoDraggerLength),
                    (e.autoExpandScrollbar =
                        !(-1 < A.inArray(e.theme, ["rounded-dots", "rounded-dots-dark", "3d", "3d-dark", "3d-thick", "3d-thick-dark", "inset", "inset-dark", "inset-2", "inset-2-dark", "inset-3", "inset-3-dark"])) && e.autoExpandScrollbar),
                    (e.scrollButtons.enable = !(-1 < A.inArray(e.theme, ["minimal", "minimal-dark"])) && e.scrollButtons.enable),
                    (e.autoHideScrollbar = -1 < A.inArray(e.theme, ["minimal", "minimal-dark"]) || e.autoHideScrollbar),
                    (e.scrollbarPosition = -1 < A.inArray(e.theme, ["minimal", "minimal-dark"]) ? "outside" : e.scrollbarPosition);
            }),
            (c = function (e) {
                a[e] && (clearTimeout(a[e]), ee(a, e));
            }),
            (p = function (e) {
                return "yx" === e || "xy" === e || "auto" === e ? "yx" : "x" === e || "horizontal" === e ? "x" : "y";
            }),
            (f = function (e) {
                return "stepped" === e || "pixels" === e || "step" === e || "click" === e ? "stepped" : "stepless";
            }),
            (v = function () {
                var e = A(this),
                    t = e.data(P),
                    i = t.opt,
                    n = i.autoExpandScrollbar ? " " + g[1] + "_expand" : "",
                    r = [
                        "<div id='mCSB_" +
                            t.idx +
                            "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" +
                            t.idx +
                            "_scrollbar mCS-" +
                            i.theme +
                            " mCSB_scrollTools_vertical" +
                            n +
                            "'><div class='" +
                            g[12] +
                            "'><div id='mCSB_" +
                            t.idx +
                            "_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>",
                        "<div id='mCSB_" +
                            t.idx +
                            "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" +
                            t.idx +
                            "_scrollbar mCS-" +
                            i.theme +
                            " mCSB_scrollTools_horizontal" +
                            n +
                            "'><div class='" +
                            g[12] +
                            "'><div id='mCSB_" +
                            t.idx +
                            "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>",
                    ],
                    a = "yx" === i.axis ? "mCSB_vertical_horizontal" : "x" === i.axis ? "mCSB_horizontal" : "mCSB_vertical",
                    s = "yx" === i.axis ? r[0] + r[1] : "x" === i.axis ? r[1] : r[0],
                    o = "yx" === i.axis ? "<div id='mCSB_" + t.idx + "_container_wrapper' class='mCSB_container_wrapper' />" : "",
                    n = i.autoHideScrollbar ? " " + g[6] : "",
                    r = "x" !== i.axis && "rtl" === t.langDir ? " " + g[7] : "";
                i.setWidth && e.css("width", i.setWidth),
                    i.setHeight && e.css("height", i.setHeight),
                    (i.setLeft = "y" !== i.axis && "rtl" === t.langDir ? "989999px" : i.setLeft),
                    e
                        .addClass(l + " _" + P + "_" + t.idx + n + r)
                        .wrapInner(
                            "<div id='mCSB_" +
                                t.idx +
                                "' class='mCustomScrollBox mCS-" +
                                i.theme +
                                " " +
                                a +
                                "'><div id='mCSB_" +
                                t.idx +
                                "_container' class='mCSB_container' style='position:relative; top:" +
                                i.setTop +
                                "; left:" +
                                i.setLeft +
                                ";' dir='" +
                                t.langDir +
                                "' /></div>"
                        );
                (r = A("#mCSB_" + t.idx)), (a = A("#mCSB_" + t.idx + "_container"));
                "y" === i.axis || i.advanced.autoExpandHorizontalScroll || a.css("width", y(a)),
                    "outside" === i.scrollbarPosition ? ("static" === e.css("position") && e.css("position", "relative"), e.css("overflow", "visible"), r.addClass("mCSB_outside").after(s)) : (r.addClass("mCSB_inside").append(s), a.wrap(o)),
                    w.call(this);
                t = [A("#mCSB_" + t.idx + "_dragger_vertical"), A("#mCSB_" + t.idx + "_dragger_horizontal")];
                t[0].css("min-height", t[0].height()), t[1].css("min-width", t[1].width());
            }),
            (y = function (e) {
                var t = [
                        e[0].scrollWidth,
                        Math.max.apply(
                            Math,
                            e
                                .children()
                                .map(function () {
                                    return A(this).outerWidth(!0);
                                })
                                .get()
                        ),
                    ],
                    e = e.parent().width();
                return e < t[0] ? t[0] : e < t[1] ? t[1] : "100%";
            }),
            (b = function () {
                var e = A(this).data(P),
                    t = e.opt,
                    i = A("#mCSB_" + e.idx + "_container");
                t.advanced.autoExpandHorizontalScroll &&
                    "y" !== t.axis &&
                    (i.css({ width: "auto", "min-width": 0, "overflow-x": "scroll" }),
                    (e = Math.ceil(i[0].scrollWidth)),
                    3 === t.advanced.autoExpandHorizontalScroll || (2 !== t.advanced.autoExpandHorizontalScroll && e > i.parent().width())
                        ? i.css({ width: e, "min-width": "100%", "overflow-x": "inherit" })
                        : i
                              .css({ "overflow-x": "inherit", position: "absolute" })
                              .wrap("<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />")
                              .css({ width: Math.ceil(i[0].getBoundingClientRect().right + 0.4) - Math.floor(i[0].getBoundingClientRect().left), "min-width": "100%", position: "relative" })
                              .unwrap());
            }),
            (w = function () {
                var e = A(this).data(P),
                    t = e.opt,
                    i = A(".mCSB_" + e.idx + "_scrollbar:first"),
                    e = ne(t.scrollButtons.tabindex) ? "tabindex='" + t.scrollButtons.tabindex + "'" : "",
                    e = ["<a href='#' class='" + g[13] + "' " + e + " />", "<a href='#' class='" + g[14] + "' " + e + " />", "<a href='#' class='" + g[15] + "' " + e + " />", "<a href='#' class='" + g[16] + "' " + e + " />"],
                    e = ["x" === t.axis ? e[2] : e[0], "x" === t.axis ? e[3] : e[1], e[2], e[3]];
                t.scrollButtons.enable && i.prepend(e[0]).append(e[1]).next(".mCSB_scrollTools").prepend(e[2]).append(e[3]);
            }),
            (x = function () {
                var e = A(this).data(P),
                    t = A("#mCSB_" + e.idx),
                    i = A("#mCSB_" + e.idx + "_container"),
                    n = [A("#mCSB_" + e.idx + "_dragger_vertical"), A("#mCSB_" + e.idx + "_dragger_horizontal")],
                    e = [t.height() / i.outerHeight(!1), t.width() / i.outerWidth(!1)],
                    t = [parseInt(n[0].css("min-height")), Math.round(e[0] * n[0].parent().height()), parseInt(n[1].css("min-width")), Math.round(e[1] * n[1].parent().width())],
                    i = m && t[1] < t[0] ? t[0] : t[1],
                    e = m && t[3] < t[2] ? t[2] : t[3];
                n[0]
                    .css({ height: i, "max-height": n[0].parent().height() - 10 })
                    .find(".mCSB_dragger_bar")
                    .css({ "line-height": t[0] + "px" }),
                    n[1].css({ width: e, "max-width": n[1].parent().width() - 10 });
            }),
            (C = function () {
                var e = A(this).data(P),
                    t = A("#mCSB_" + e.idx),
                    i = A("#mCSB_" + e.idx + "_container"),
                    n = [A("#mCSB_" + e.idx + "_dragger_vertical"), A("#mCSB_" + e.idx + "_dragger_horizontal")],
                    t = [i.outerHeight(!1) - t.height(), i.outerWidth(!1) - t.width()],
                    n = [t[0] / (n[0].parent().height() - n[0].height()), t[1] / (n[1].parent().width() - n[1].width())];
                e.scrollRatio = { y: n[0], x: n[1] };
            }),
            (E = function (e, t, i) {
                var n = i ? g[0] + "_expanded" : "",
                    i = e.closest(".mCSB_scrollTools");
                "active" === t
                    ? (e.toggleClass(g[0] + " " + n), i.toggleClass(g[1]), (e[0]._draggable = e[0]._draggable ? 0 : 1))
                    : e[0]._draggable || ("hide" === t ? (e.removeClass(g[0]), i.removeClass(g[1])) : (e.addClass(g[0]), i.addClass(g[1])));
            }),
            (T = function () {
                var e = A(this).data(P),
                    t = A("#mCSB_" + e.idx),
                    i = A("#mCSB_" + e.idx + "_container"),
                    n = null == e.overflowed ? i.height() : i.outerHeight(!1),
                    r = null == e.overflowed ? i.width() : i.outerWidth(!1),
                    e = i[0].scrollHeight,
                    i = i[0].scrollWidth;
                return r < i && (r = i), [(n = n < e ? e : n) > t.height(), r > t.width()];
            }),
            (S = function () {
                var e = A(this),
                    t = e.data(P),
                    i = t.opt,
                    n = A("#mCSB_" + t.idx),
                    r = A("#mCSB_" + t.idx + "_container"),
                    a = [A("#mCSB_" + t.idx + "_dragger_vertical"), A("#mCSB_" + t.idx + "_dragger_horizontal")];
                Q(e),
                    (("x" !== i.axis && !t.overflowed[0]) || ("y" === i.axis && t.overflowed[0])) && (a[0].add(r).css("top", 0), K(e, "_resetY")),
                    (("y" !== i.axis && !t.overflowed[1]) || ("x" === i.axis && t.overflowed[1])) &&
                        ((i = dx = 0), "rtl" === t.langDir && ((i = n.width() - r.outerWidth(!1)), (dx = Math.abs(i / t.scrollRatio.x))), r.css("left", i), a[1].css("left", dx), K(e, "_resetX"));
            }),
            (_ = function () {
                var t,
                    i = A(this),
                    e = i.data(P),
                    n = e.opt;
                e.bindEvents ||
                    (s.call(this),
                    n.contentTouchScroll && D.call(this),
                    I.call(this),
                    n.mouseWheel.enable &&
                        (function e() {
                            t = setTimeout(function () {
                                A.event.special.mousewheel ? (clearTimeout(t), L.call(i[0])) : e();
                            }, 100);
                        })(),
                    $.call(this),
                    W.call(this),
                    n.advanced.autoScrollOnFocus && q.call(this),
                    n.scrollButtons.enable && F.call(this),
                    n.keyboard.enable && Y.call(this),
                    (e.bindEvents = !0));
            }),
            (k = function () {
                var e = A(this),
                    t = e.data(P),
                    i = t.opt,
                    n = "mCS_" + t.idx,
                    r = ".mCSB_" + t.idx + "_scrollbar",
                    a = A("#mCSB_" + t.idx + ",#mCSB_" + t.idx + "_container,#mCSB_" + t.idx + "_container_wrapper," + r + " ." + g[12] + ",#mCSB_" + t.idx + "_dragger_vertical,#mCSB_" + t.idx + "_dragger_horizontal," + r + ">a"),
                    r = A("#mCSB_" + t.idx + "_container");
                i.advanced.releaseDraggableSelectors && a.add(A(i.advanced.releaseDraggableSelectors)),
                    i.advanced.extraDraggableSelectors && a.add(A(i.advanced.extraDraggableSelectors)),
                    t.bindEvents &&
                        (A(document)
                            .add(A(!j() || top.document))
                            .unbind("." + n),
                        a.each(function () {
                            A(this).unbind("." + n);
                        }),
                        clearTimeout(e[0]._focusTimeout),
                        ee(e[0], "_focusTimeout"),
                        clearTimeout(t.sequential.step),
                        ee(t.sequential, "step"),
                        clearTimeout(r[0].onCompleteTimeout),
                        ee(r[0], "onCompleteTimeout"),
                        (t.bindEvents = !1));
            }),
            (M = function (e) {
                var t = A(this),
                    i = t.data(P),
                    n = i.opt,
                    r = A("#mCSB_" + i.idx + "_container_wrapper"),
                    a = r.length ? r : A("#mCSB_" + i.idx + "_container"),
                    s = [A("#mCSB_" + i.idx + "_scrollbar_vertical"), A("#mCSB_" + i.idx + "_scrollbar_horizontal")],
                    r = [s[0].find(".mCSB_dragger"), s[1].find(".mCSB_dragger")];
                "x" !== n.axis &&
                    (i.overflowed[0] && !e
                        ? (s[0].add(r[0]).add(s[0].children("a")).css("display", "block"), a.removeClass(g[8] + " " + g[10]))
                        : (n.alwaysShowScrollbar ? (2 !== n.alwaysShowScrollbar && r[0].css("display", "none"), a.removeClass(g[10])) : (s[0].css("display", "none"), a.addClass(g[10])), a.addClass(g[8]))),
                    "y" !== n.axis &&
                        (i.overflowed[1] && !e
                            ? (s[1].add(r[1]).add(s[1].children("a")).css("display", "block"), a.removeClass(g[9] + " " + g[11]))
                            : (n.alwaysShowScrollbar ? (2 !== n.alwaysShowScrollbar && r[1].css("display", "none"), a.removeClass(g[11])) : (s[1].css("display", "none"), a.addClass(g[11])), a.addClass(g[9]))),
                    i.overflowed[0] || i.overflowed[1] ? t.removeClass(g[5]) : t.addClass(g[5]);
            }),
            (B = function (e) {
                var t = e.type,
                    i = e.target.ownerDocument !== document && null !== frameElement ? [A(frameElement).offset().top, A(frameElement).offset().left] : null,
                    n = j() && e.target.ownerDocument !== top.document && null !== frameElement ? [A(e.view.frameElement).offset().top, A(e.view.frameElement).offset().left] : [0, 0];
                switch (t) {
                    case "pointerdown":
                    case "MSPointerDown":
                    case "pointermove":
                    case "MSPointerMove":
                    case "pointerup":
                    case "MSPointerUp":
                        return i ? [e.originalEvent.pageY - i[0] + n[0], e.originalEvent.pageX - i[1] + n[1], !1] : [e.originalEvent.pageY, e.originalEvent.pageX, !1];
                    case "touchstart":
                    case "touchmove":
                    case "touchend":
                        var r = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0],
                            a = e.originalEvent.touches.length || e.originalEvent.changedTouches.length;
                        return e.target.ownerDocument !== document ? [r.screenY, r.screenX, 1 < a] : [r.pageY, r.pageX, 1 < a];
                    default:
                        return i ? [e.pageY - i[0] + n[0], e.pageX - i[1] + n[1], !1] : [e.pageY, e.pageX, !1];
                }
            }),
            (s = function () {
                var a,
                    r,
                    s,
                    o = A(this),
                    l = o.data(P),
                    d = l.opt,
                    e = "mCS_" + l.idx,
                    u = ["mCSB_" + l.idx + "_dragger_vertical", "mCSB_" + l.idx + "_dragger_horizontal"],
                    c = A("#mCSB_" + l.idx + "_container"),
                    t = A("#" + u[0] + ",#" + u[1]),
                    i = d.advanced.releaseDraggableSelectors ? t.add(A(d.advanced.releaseDraggableSelectors)) : t,
                    n = d.advanced.extraDraggableSelectors ? A(!j() || top.document).add(A(d.advanced.extraDraggableSelectors)) : A(!j() || top.document);
                function h(e, t, i, n) {
                    var r;
                    (c[0].idleTimer = d.scrollInertia < 233 ? 250 : 0),
                        (i = a.attr("id") === u[1] ? ((r = "x"), (a[0].offsetLeft - t + n) * l.scrollRatio.x) : ((r = "y"), (a[0].offsetTop - e + i) * l.scrollRatio.y)),
                        K(o, i.toString(), { dir: r, drag: !0 });
                }
                t
                    .bind("contextmenu." + e, function (e) {
                        e.preventDefault();
                    })
                    .bind("mousedown." + e + " touchstart." + e + " pointerdown." + e + " MSPointerDown." + e, function (e) {
                        var t, i, n;
                        e.stopImmediatePropagation(),
                            e.preventDefault(),
                            te(e) &&
                                ((N = !0),
                                m &&
                                    (document.onselectstart = function () {
                                        return !1;
                                    }),
                                H.call(c, !1),
                                Q(o),
                                (n = (a = A(this)).offset()),
                                (t = B(e)[0] - n.top),
                                (i = B(e)[1] - n.left),
                                (e = a.height() + n.top),
                                (n = a.width() + n.left),
                                t < e && 0 < t && i < n && 0 < i && ((r = t), (s = i)),
                                E(a, "active", d.autoExpandScrollbar));
                    })
                    .bind("touchmove." + e, function (e) {
                        e.stopImmediatePropagation(), e.preventDefault();
                        var t = a.offset(),
                            i = B(e)[0] - t.top,
                            t = B(e)[1] - t.left;
                        h(r, s, i, t);
                    }),
                    A(document)
                        .add(n)
                        .bind("mousemove." + e + " pointermove." + e + " MSPointerMove." + e, function (e) {
                            var t, i;
                            a && ((i = a.offset()), (t = B(e)[0] - i.top), (i = B(e)[1] - i.left), (r === t && s === i) || h(r, s, t, i));
                        })
                        .add(i)
                        .bind("mouseup." + e + " touchend." + e + " pointerup." + e + " MSPointerUp." + e, function (e) {
                            a && (E(a, "active", d.autoExpandScrollbar), (a = null)), (N = !1), m && (document.onselectstart = null), H.call(c, !0);
                        });
            }),
            (D = function () {
                var s,
                    o,
                    l,
                    a,
                    d,
                    u,
                    c,
                    h,
                    p,
                    f,
                    m,
                    g,
                    v = A(this),
                    y = v.data(P),
                    b = y.opt,
                    e = "mCS_" + y.idx,
                    w = A("#mCSB_" + y.idx),
                    x = A("#mCSB_" + y.idx + "_container"),
                    C = [A("#mCSB_" + y.idx + "_dragger_vertical"), A("#mCSB_" + y.idx + "_dragger_horizontal")],
                    T = [],
                    E = [],
                    S = 0,
                    _ = "yx" === b.axis ? "none" : "all",
                    k = [],
                    t = x.find("iframe"),
                    i = ["touchstart." + e + " pointerdown." + e + " MSPointerDown." + e, "touchmove." + e + " pointermove." + e + " MSPointerMove." + e, "touchend." + e + " pointerup." + e + " MSPointerUp." + e],
                    M = void 0 !== document.body.style.touchAction && "" !== document.body.style.touchAction;
                function n(e) {
                    var t;
                    !ie(e) || N || B(e)[2] ? (z = 0) : ((g = m = 0), (s = z = 1), v.removeClass("mCS_touch_action"), (t = x.offset()), (o = B(e)[0] - t.top), (l = B(e)[1] - t.left), (k = [B(e)[0], B(e)[1]]));
                }
                function r(e) {
                    var t, i, n, r, a;
                    !ie(e) ||
                        N ||
                        B(e)[2] ||
                        (b.documentTouchScroll || e.preventDefault(),
                        e.stopImmediatePropagation(),
                        (g && !m) ||
                            (s &&
                                ((c = Z()),
                                (n = w.offset()),
                                (t = B(e)[0] - n.top),
                                (i = B(e)[1] - n.left),
                                (n = "mcsLinearOut"),
                                T.push(t),
                                E.push(i),
                                (k[2] = Math.abs(B(e)[0] - k[0])),
                                (k[3] = Math.abs(B(e)[1] - k[1])),
                                y.overflowed[0] && ((r = C[0].parent().height() - C[0].height()), (r = 0 < o - t && t - o > -(r * y.scrollRatio.y) && (2 * k[3] < k[2] || "yx" === b.axis))),
                                y.overflowed[1] && ((a = C[1].parent().width() - C[1].width()), (a = 0 < l - i && i - l > -(a * y.scrollRatio.x) && (2 * k[2] < k[3] || "yx" === b.axis))),
                                r || a ? (M || e.preventDefault(), (m = 1)) : ((g = 1), v.addClass("mCS_touch_action")),
                                M && e.preventDefault(),
                                (p = "yx" === b.axis ? [o - t, l - i] : "x" === b.axis ? [null, l - i] : [o - t, null]),
                                (x[0].idleTimer = 250),
                                y.overflowed[0] && O(p[0], S, n, "y", "all", !0),
                                y.overflowed[1] && O(p[1], S, n, "x", _, !0))));
                }
                function D(e) {
                    var t;
                    !ie(e) || N || B(e)[2] ? (z = 0) : ((z = 1), e.stopImmediatePropagation(), Q(v), (u = Z()), (t = w.offset()), (a = B(e)[0] - t.top), (d = B(e)[1] - t.left), (T = []), (E = []));
                }
                function I(e) {
                    var t, i, n, r;
                    !ie(e) ||
                        N ||
                        B(e)[2] ||
                        ((s = 0),
                        e.stopImmediatePropagation(),
                        (g = m = 0),
                        (h = Z()),
                        (n = w.offset()),
                        (t = B(e)[0] - n.top),
                        (r = B(e)[1] - n.left),
                        30 < h - c ||
                            ((i = "mcsEaseOut"),
                            (n = (e = (f = 1e3 / (h - u)) < 2.5) ? [T[T.length - 2], E[E.length - 2]] : [0, 0]),
                            (h = e ? [t - n[0], r - n[1]] : [t - a, r - d]),
                            (r = [Math.abs(h[0]), Math.abs(h[1])]),
                            (f = e ? [Math.abs(h[0] / 4), Math.abs(h[1] / 4)] : [f, f]),
                            (e = [Math.abs(x[0].offsetTop) - h[0] * L(r[0] / f[0], f[0]), Math.abs(x[0].offsetLeft) - h[1] * L(r[1] / f[1], f[1])]),
                            (p = "yx" === b.axis ? [e[0], e[1]] : "x" === b.axis ? [null, e[1]] : [e[0], null]),
                            (f = [4 * r[0] + b.scrollInertia, 4 * r[1] + b.scrollInertia]),
                            (e = parseInt(b.contentTouchScroll) || 0),
                            (p[0] = e < r[0] ? p[0] : 0),
                            (p[1] = e < r[1] ? p[1] : 0),
                            y.overflowed[0] && O(p[0], f[0], i, "y", _, !1),
                            y.overflowed[1] && O(p[1], f[1], i, "x", _, !1)));
                }
                function L(e, t) {
                    var i = [1.5 * t, 2 * t, t / 1.5, t / 2];
                    return 90 < e ? (4 < t ? i[0] : i[3]) : 60 < e ? (3 < t ? i[3] : i[2]) : 30 < e ? (8 < t ? i[1] : 6 < t ? i[0] : 4 < t ? t : i[2]) : 8 < t ? t : i[3];
                }
                function O(e, t, i, n, r, a) {
                    e && K(v, e.toString(), { dur: t, scrollEasing: i, dir: n, overwrite: r, drag: a });
                }
                x
                    .bind(i[0], function (e) {
                        n(e);
                    })
                    .bind(i[1], function (e) {
                        r(e);
                    }),
                    w
                        .bind(i[0], function (e) {
                            D(e);
                        })
                        .bind(i[2], function (e) {
                            I(e);
                        }),
                    t.length &&
                        t.each(function () {
                            A(this).bind("load", function () {
                                j(this) &&
                                    A(this.contentDocument || this.contentWindow.document)
                                        .bind(i[0], function (e) {
                                            n(e), D(e);
                                        })
                                        .bind(i[1], function (e) {
                                            r(e);
                                        })
                                        .bind(i[2], function (e) {
                                            I(e);
                                        });
                            });
                        });
            }),
            (I = function () {
                var n,
                    r = A(this),
                    a = r.data(P),
                    s = a.opt,
                    o = a.sequential,
                    e = "mCS_" + a.idx,
                    l = A("#mCSB_" + a.idx + "_container"),
                    d = l.parent();
                function u(e, t, i) {
                    (o.type = i && n ? "stepped" : "stepless"), (o.scrollAmount = 10), V(r, e, t, "mcsLinearOut", i ? 60 : null);
                }
                l.bind("mousedown." + e, function (e) {
                    z || n || ((n = 1), (N = !0));
                })
                    .add(document)
                    .bind("mousemove." + e, function (e) {
                        var t, i;
                        !z &&
                            n &&
                            (window.getSelection ? window.getSelection().toString() : document.selection && "Control" != document.selection.type && document.selection.createRange().text) &&
                            ((i = l.offset()),
                            (t = B(e)[0] - i.top + l[0].offsetTop),
                            (i = B(e)[1] - i.left + l[0].offsetLeft),
                            0 < t && t < d.height() && 0 < i && i < d.width()
                                ? o.step && u("off", null, "stepped")
                                : ("x" !== s.axis && a.overflowed[0] && (t < 0 ? u("on", 38) : t > d.height() && u("on", 40)), "y" !== s.axis && a.overflowed[1] && (i < 0 ? u("on", 37) : i > d.width() && u("on", 39))));
                    })
                    .bind("mouseup." + e + " dragend." + e, function (e) {
                        z || (n && ((n = 0), u("off", null)), (N = !1));
                    });
            }),
            (L = function () {
                var u, c, h, e, p, f, t;
                function i(e, t) {
                    var i, n, r, a, s, o, l, d;
                    Q(u),
                        R(u, e.target) ||
                            ((i = "auto" !== h.mouseWheel.deltaFactor ? parseInt(h.mouseWheel.deltaFactor) : (!(m && e.deltaFactor < 100) && e.deltaFactor) || 100),
                            (n = h.scrollInertia),
                            (t =
                                "x" === h.axis || "x" === h.mouseWheel.axis
                                    ? ((r = "x"),
                                      (a = [Math.round(i * c.scrollRatio.x), parseInt(h.mouseWheel.scrollAmount)]),
                                      (s = "auto" !== h.mouseWheel.scrollAmount ? a[1] : a[0] >= p.width() ? 0.9 * p.width() : a[0]),
                                      (o = Math.abs(A("#mCSB_" + c.idx + "_container")[0].offsetLeft)),
                                      (l = f[1][0].offsetLeft),
                                      (d = f[1].parent().width() - f[1].width()),
                                      "y" === h.mouseWheel.axis ? e.deltaY || t : e.deltaX)
                                    : ((r = "y"),
                                      (a = [Math.round(i * c.scrollRatio.y), parseInt(h.mouseWheel.scrollAmount)]),
                                      (s = "auto" !== h.mouseWheel.scrollAmount ? a[1] : a[0] >= p.height() ? 0.9 * p.height() : a[0]),
                                      (o = Math.abs(A("#mCSB_" + c.idx + "_container")[0].offsetTop)),
                                      (l = f[0][0].offsetTop),
                                      (d = f[0].parent().height() - f[0].height()),
                                      e.deltaY || t)),
                            ("y" === r && !c.overflowed[0]) ||
                                ("x" === r && !c.overflowed[1]) ||
                                ((h.mouseWheel.invert || e.webkitDirectionInvertedFromDevice) && (t = -t),
                                ((0 < (t = h.mouseWheel.normalizeDelta ? (t < 0 ? -1 : 1) : t) && 0 !== l) || (t < 0 && l !== d) || h.mouseWheel.preventDefault) && (e.stopImmediatePropagation(), e.preventDefault()),
                                e.deltaFactor < 5 && !h.mouseWheel.normalizeDelta && ((s = e.deltaFactor), (n = 17)),
                                K(u, (o - t * s).toString(), { dir: r, dur: n })));
                }
                A(this).data(P) &&
                    ((u = A(this)),
                    (c = u.data(P)),
                    (h = c.opt),
                    (e = "mCS_" + c.idx),
                    (p = A("#mCSB_" + c.idx)),
                    (f = [A("#mCSB_" + c.idx + "_dragger_vertical"), A("#mCSB_" + c.idx + "_dragger_horizontal")]),
                    (t = A("#mCSB_" + c.idx + "_container").find("iframe")).length &&
                        t.each(function () {
                            A(this).bind("load", function () {
                                j(this) &&
                                    A(this.contentDocument || this.contentWindow.document).bind("mousewheel." + e, function (e, t) {
                                        i(e, t);
                                    });
                            });
                        }),
                    p.bind("mousewheel." + e, function (e, t) {
                        i(e, t);
                    }));
            }),
            (O = new Object()),
            (j = function (e) {
                var t = !1,
                    i = !1,
                    n = null;
                if ((void 0 === e ? (i = "#empty") : void 0 !== A(e).attr("id") && (i = A(e).attr("id")), !1 !== i && void 0 !== O[i])) return O[i];
                if (e) {
                    try {
                        n = (e.contentDocument || e.contentWindow.document).body.innerHTML;
                    } catch (e) {}
                    t = null !== n;
                } else {
                    try {
                        n = top.document.body.innerHTML;
                    } catch (e) {}
                    t = null !== n;
                }
                return !1 !== i && (O[i] = t), t;
            }),
            (H = function (e) {
                var t = this.find("iframe");
                t.length && ((e = e ? "auto" : "none"), t.css("pointer-events", e));
            }),
            (R = function (e, t) {
                var i = t.nodeName.toLowerCase(),
                    e = e.data(P).opt.mouseWheel.disableOver;
                return -1 < A.inArray(i, e) && !(-1 < A.inArray(i, ["select", "textarea"]) && !A(t).is(":focus"));
            }),
            ($ = function () {
                var s,
                    o = A(this),
                    l = o.data(P),
                    e = "mCS_" + l.idx,
                    d = A("#mCSB_" + l.idx + "_container"),
                    u = d.parent();
                A(".mCSB_" + l.idx + "_scrollbar ." + g[12])
                    .bind("mousedown." + e + " touchstart." + e + " pointerdown." + e + " MSPointerDown." + e, function (e) {
                        (N = !0), A(e.target).hasClass("mCSB_dragger") || (s = 1);
                    })
                    .bind("touchend." + e + " pointerup." + e + " MSPointerUp." + e, function (e) {
                        N = !1;
                    })
                    .bind("click." + e, function (e) {
                        if (s && ((s = 0), A(e.target).hasClass(g[12]) || A(e.target).hasClass("mCSB_draggerRail"))) {
                            Q(o);
                            var t = A(this),
                                i = t.find(".mCSB_dragger");
                            if (0 < t.parent(".mCSB_scrollTools_horizontal").length) {
                                if (!l.overflowed[1]) return;
                                var n = "x",
                                    r = e.pageX > i.offset().left ? -1 : 1,
                                    a = Math.abs(d[0].offsetLeft) - r * (0.9 * u.width());
                            } else {
                                if (!l.overflowed[0]) return;
                                (n = "y"), (r = e.pageY > i.offset().top ? -1 : 1), (a = Math.abs(d[0].offsetTop) - r * (0.9 * u.height()));
                            }
                            K(o, a.toString(), { dir: n, scrollEasing: "mcsEaseInOut" });
                        }
                    });
            }),
            (q = function () {
                var r = A(this),
                    e = r.data(P),
                    a = e.opt,
                    t = "mCS_" + e.idx,
                    s = A("#mCSB_" + e.idx + "_container"),
                    o = s.parent();
                s.bind("focusin." + t, function (e) {
                    var n = A(document.activeElement),
                        t = s.find(".mCustomScrollBox").length;
                    n.is(a.advanced.autoScrollOnFocus) &&
                        (Q(r),
                        clearTimeout(r[0]._focusTimeout),
                        (r[0]._focusTimer = t ? 17 * t : 0),
                        (r[0]._focusTimeout = setTimeout(function () {
                            var e = [re(n)[0], re(n)[1]],
                                t = [s[0].offsetTop, s[0].offsetLeft],
                                i = [0 <= t[0] + e[0] && t[0] + e[0] < o.height() - n.outerHeight(!1), 0 <= t[1] + e[1] && t[0] + e[1] < o.width() - n.outerWidth(!1)],
                                t = "yx" !== a.axis || i[0] || i[1] ? "all" : "none";
                            "x" === a.axis || i[0] || K(r, e[0].toString(), { dir: "y", scrollEasing: "mcsEaseInOut", overwrite: t, dur: 0 }),
                                "y" === a.axis || i[1] || K(r, e[1].toString(), { dir: "x", scrollEasing: "mcsEaseInOut", overwrite: t, dur: 0 });
                        }, r[0]._focusTimer)));
                });
            }),
            (W = function () {
                var t = A(this).data(P),
                    e = "mCS_" + t.idx,
                    i = A("#mCSB_" + t.idx + "_container").parent();
                i.bind("scroll." + e, function (e) {
                    (0 === i.scrollTop() && 0 === i.scrollLeft()) || A(".mCSB_" + t.idx + "_scrollbar").css("visibility", "hidden");
                });
            }),
            (F = function () {
                var n = A(this),
                    r = n.data(P),
                    a = r.opt,
                    s = r.sequential,
                    e = "mCS_" + r.idx,
                    t = ".mCSB_" + r.idx + "_scrollbar";
                A(t + ">a")
                    .bind("contextmenu." + e, function (e) {
                        e.preventDefault();
                    })
                    .bind(
                        "mousedown." +
                            e +
                            " touchstart." +
                            e +
                            " pointerdown." +
                            e +
                            " MSPointerDown." +
                            e +
                            " mouseup." +
                            e +
                            " touchend." +
                            e +
                            " pointerup." +
                            e +
                            " MSPointerUp." +
                            e +
                            " mouseout." +
                            e +
                            " pointerout." +
                            e +
                            " MSPointerOut." +
                            e +
                            " click." +
                            e,
                        function (e) {
                            if ((e.preventDefault(), te(e))) {
                                var t = A(this).attr("class");
                                switch (((s.type = a.scrollButtons.scrollType), e.type)) {
                                    case "mousedown":
                                    case "touchstart":
                                    case "pointerdown":
                                    case "MSPointerDown":
                                        if ("stepped" === s.type) return;
                                        (N = !0), (r.tweenRunning = !1), i("on", t);
                                        break;
                                    case "mouseup":
                                    case "touchend":
                                    case "pointerup":
                                    case "MSPointerUp":
                                    case "mouseout":
                                    case "pointerout":
                                    case "MSPointerOut":
                                        if ("stepped" === s.type) return;
                                        (N = !1), s.dir && i("off", t);
                                        break;
                                    case "click":
                                        if ("stepped" !== s.type || r.tweenRunning) return;
                                        i("on", t);
                                }
                            }
                            function i(e, t) {
                                (s.scrollAmount = a.scrollButtons.scrollAmount), V(n, e, t);
                            }
                        }
                    );
            }),
            (Y = function () {
                var s = A(this),
                    o = s.data(P),
                    l = o.opt,
                    d = o.sequential,
                    e = "mCS_" + o.idx,
                    t = A("#mCSB_" + o.idx),
                    u = A("#mCSB_" + o.idx + "_container"),
                    c = u.parent(),
                    h = "input,textarea,select,datalist,keygen,[contenteditable='true']",
                    i = u.find("iframe"),
                    n = ["blur." + e + " keydown." + e + " keyup." + e];
                function r(e) {
                    switch (e.type) {
                        case "blur":
                            o.tweenRunning && d.dir && a("off", null);
                            break;
                        case "keydown":
                        case "keyup":
                            var t,
                                i,
                                n = e.keyCode || e.which,
                                r = "on";
                            if (("x" !== l.axis && (38 === n || 40 === n)) || ("y" !== l.axis && (37 === n || 39 === n))) {
                                if (((38 === n || 40 === n) && !o.overflowed[0]) || ((37 === n || 39 === n) && !o.overflowed[1])) return;
                                "keyup" === e.type && (r = "off"), A(document.activeElement).is(h) || (e.preventDefault(), e.stopImmediatePropagation(), a(r, n));
                            } else
                                33 === n || 34 === n
                                    ? ((o.overflowed[0] || o.overflowed[1]) && (e.preventDefault(), e.stopImmediatePropagation()),
                                      "keyup" === e.type &&
                                          (Q(s),
                                          (i = 34 === n ? -1 : 1),
                                          (i =
                                              "x" === l.axis || ("yx" === l.axis && o.overflowed[1] && !o.overflowed[0])
                                                  ? ((t = "x"), Math.abs(u[0].offsetLeft) - i * (0.9 * c.width()))
                                                  : ((t = "y"), Math.abs(u[0].offsetTop) - i * (0.9 * c.height()))),
                                          K(s, i.toString(), { dir: t, scrollEasing: "mcsEaseInOut" })))
                                    : (35 !== n && 36 !== n) ||
                                      A(document.activeElement).is(h) ||
                                      ((o.overflowed[0] || o.overflowed[1]) && (e.preventDefault(), e.stopImmediatePropagation()),
                                      "keyup" === e.type &&
                                          ((i =
                                              "x" === l.axis || ("yx" === l.axis && o.overflowed[1] && !o.overflowed[0])
                                                  ? ((t = "x"), 35 === n ? Math.abs(c.width() - u.outerWidth(!1)) : 0)
                                                  : ((t = "y"), 35 === n ? Math.abs(c.height() - u.outerHeight(!1)) : 0)),
                                          K(s, i.toString(), { dir: t, scrollEasing: "mcsEaseInOut" })));
                    }
                    function a(e, t) {
                        (d.type = l.keyboard.scrollType), (d.scrollAmount = l.keyboard.scrollAmount), ("stepped" === d.type && o.tweenRunning) || V(s, e, t);
                    }
                }
                i.length &&
                    i.each(function () {
                        A(this).bind("load", function () {
                            j(this) &&
                                A(this.contentDocument || this.contentWindow.document).bind(n[0], function (e) {
                                    r(e);
                                });
                        });
                    }),
                    t.attr("tabindex", "0").bind(n[0], function (e) {
                        r(e);
                    });
            }),
            (V = function (s, e, t, o, l) {
                var d = s.data(P),
                    u = d.opt,
                    c = d.sequential,
                    h = A("#mCSB_" + d.idx + "_container"),
                    i = "stepped" === c.type,
                    p = u.scrollInertia < 26 ? 26 : u.scrollInertia,
                    f = u.scrollInertia < 1 ? 17 : u.scrollInertia;
                switch (e) {
                    case "on":
                        if (((c.dir = [t === g[16] || t === g[15] || 39 === t || 37 === t ? "x" : "y", t === g[13] || t === g[15] || 38 === t || 37 === t ? -1 : 1]), Q(s), ne(t) && "stepped" === c.type)) return;
                        m(i);
                        break;
                    case "off":
                        clearTimeout(c.step), ee(c, "step"), Q(s), (i || (d.tweenRunning && c.dir)) && m(!0);
                }
                function m(e) {
                    u.snapAmount && (c.scrollAmount = u.snapAmount instanceof Array ? ("x" === c.dir[0] ? u.snapAmount[1] : u.snapAmount[0]) : u.snapAmount);
                    var t = "stepped" !== c.type,
                        i = l || (e ? (t ? p / 1.5 : f) : 1e3 / 60),
                        n = e ? (t ? 7.5 : 40) : 2.5,
                        r = [Math.abs(h[0].offsetTop), Math.abs(h[0].offsetLeft)],
                        a = [10 < d.scrollRatio.y ? 10 : d.scrollRatio.y, 10 < d.scrollRatio.x ? 10 : d.scrollRatio.x],
                        a = "x" === c.dir[0] ? r[1] + c.dir[1] * (a[1] * n) : r[0] + c.dir[1] * (a[0] * n),
                        n = "x" === c.dir[0] ? r[1] + c.dir[1] * parseInt(c.scrollAmount) : r[0] + c.dir[1] * parseInt(c.scrollAmount),
                        n = "auto" !== c.scrollAmount ? n : a,
                        a = o || (e ? (t ? "mcsLinearOut" : "mcsEaseInOut") : "mcsLinear"),
                        t = !!e;
                    e && i < 17 && (n = "x" === c.dir[0] ? r[1] : r[0]),
                        K(s, n.toString(), { dir: c.dir[0], scrollEasing: a, dur: i, onComplete: t }),
                        e
                            ? (c.dir = !1)
                            : (clearTimeout(c.step),
                              (c.step = setTimeout(function () {
                                  m();
                              }, i)));
                }
            }),
            (G = function (e) {
                var t = A(this).data(P).opt,
                    i = [];
                return (
                    (e = "function" == typeof e ? e() : e) instanceof Array
                        ? (i = 1 < e.length ? [e[0], e[1]] : "x" === t.axis ? [null, e[0]] : [e[0], null])
                        : ((i[0] = e.y || (e.x || "x" === t.axis ? null : e)), (i[1] = e.x || (e.y || "y" === t.axis ? null : e))),
                    "function" == typeof i[0] && (i[0] = i[0]()),
                    "function" == typeof i[1] && (i[1] = i[1]()),
                    i
                );
            }),
            (X = function (e, t) {
                if (null != e && void 0 !== e) {
                    var i = A(this),
                        n = i.data(P),
                        r = n.opt,
                        a = A("#mCSB_" + n.idx + "_container"),
                        s = a.parent(),
                        n = typeof e,
                        o = "x" === (t = t || ("x" === r.axis ? "x" : "y")) ? a.outerWidth(!1) - s.width() : a.outerHeight(!1) - s.height(),
                        l = "x" === t ? a[0].offsetLeft : a[0].offsetTop,
                        d = "x" === t ? "left" : "top";
                    switch (n) {
                        case "function":
                            return e();
                        case "object":
                            return (c = e.jquery ? e : A(e)).length ? ("x" === t ? re(c)[1] : re(c)[0]) : void 0;
                        case "string":
                        case "number":
                            if (ne(e)) return Math.abs(e);
                            if (-1 !== e.indexOf("%")) return Math.abs((o * parseInt(e)) / 100);
                            if (-1 !== e.indexOf("-=")) return Math.abs(l - parseInt(e.split("-=")[1]));
                            if (-1 !== e.indexOf("+=")) {
                                var u = l + parseInt(e.split("+=")[1]);
                                return 0 <= u ? 0 : Math.abs(u);
                            }
                            if (-1 !== e.indexOf("px") && ne(e.split("px")[0])) return Math.abs(e.split("px")[0]);
                            if ("top" === e || "left" === e) return 0;
                            if ("bottom" === e) return Math.abs(s.height() - a.outerHeight(!1));
                            if ("right" === e) return Math.abs(s.width() - a.outerWidth(!1));
                            if ("first" !== e && "last" !== e) return A(e).length ? ("x" === t ? re(A(e))[1] : re(A(e))[0]) : (a.css(d, e), void h.update.call(null, i[0]));
                            var c = a.find(":" + e);
                            return "x" === t ? re(c)[1] : re(c)[0];
                    }
                }
            }),
            (U = function (e) {
                var t = A(this),
                    i = t.data(P),
                    n = i.opt,
                    r = A("#mCSB_" + i.idx + "_container");
                if (e) return clearTimeout(r[0].autoUpdate), void ee(r[0], "autoUpdate");
                function a(e) {
                    var t, i, n;
                    A(e).hasClass(g[2])
                        ? o()
                        : (((t = new Image()).onload =
                              ((i = t),
                              (n = function () {
                                  (this.onload = null), A(e).addClass(g[2]), o(2);
                              }),
                              function () {
                                  return n.apply(i, arguments);
                              })),
                          (t.src = e.src));
                }
                function s() {
                    !0 === n.advanced.updateOnSelectorChange && (n.advanced.updateOnSelectorChange = "*");
                    var e = 0,
                        t = r.find(n.advanced.updateOnSelectorChange);
                    return (
                        n.advanced.updateOnSelectorChange &&
                            0 < t.length &&
                            t.each(function () {
                                e += this.offsetHeight + this.offsetWidth;
                            }),
                        e
                    );
                }
                function o(e) {
                    clearTimeout(r[0].autoUpdate), h.update.call(null, t[0], e);
                }
                !(function e() {
                    clearTimeout(r[0].autoUpdate);
                    if (0 === t.parents("html").length) return void (t = null);
                    r[0].autoUpdate = setTimeout(function () {
                        return n.advanced.updateOnSelectorChange && ((i.poll.change.n = s()), i.poll.change.n !== i.poll.change.o)
                            ? ((i.poll.change.o = i.poll.change.n), void o(3))
                            : n.advanced.updateOnContentResize && ((i.poll.size.n = t[0].scrollHeight + t[0].scrollWidth + r[0].offsetHeight + t[0].offsetHeight + t[0].offsetWidth), i.poll.size.n !== i.poll.size.o)
                            ? ((i.poll.size.o = i.poll.size.n), void o(1))
                            : !n.advanced.updateOnImageLoad || ("auto" === n.advanced.updateOnImageLoad && "y" === n.axis) || ((i.poll.img.n = r.find("img").length), i.poll.img.n === i.poll.img.o)
                            ? void ((n.advanced.updateOnSelectorChange || n.advanced.updateOnContentResize || n.advanced.updateOnImageLoad) && e())
                            : ((i.poll.img.o = i.poll.img.n),
                              void r.find("img").each(function () {
                                  a(this);
                              }));
                    }, n.advanced.autoUpdateTimeout);
                })();
            }),
            (Q = function (e) {
                e = e.data(P);
                A("#mCSB_" + e.idx + "_container,#mCSB_" + e.idx + "_container_wrapper,#mCSB_" + e.idx + "_dragger_vertical,#mCSB_" + e.idx + "_dragger_horizontal").each(function () {
                    t.call(this);
                });
            }),
            (K = function (r, e, a) {
                var t,
                    i = r.data(P),
                    n = i.opt,
                    s = { trigger: "internal", dir: "y", scrollEasing: "mcsEaseOut", drag: !1, dur: n.scrollInertia, overwrite: "all", callbacks: !0, onStart: !0, onUpdate: !0, onComplete: !0 },
                    o = [(a = A.extend(s, a)).dur, a.drag ? 0 : a.dur],
                    l = A("#mCSB_" + i.idx),
                    d = A("#mCSB_" + i.idx + "_container"),
                    u = d.parent(),
                    c = n.callbacks.onTotalScrollOffset ? G.call(r, n.callbacks.onTotalScrollOffset) : [0, 0],
                    h = n.callbacks.onTotalScrollBackOffset ? G.call(r, n.callbacks.onTotalScrollBackOffset) : [0, 0];
                if (
                    ((i.trigger = a.trigger),
                    (0 === u.scrollTop() && 0 === u.scrollLeft()) || (A(".mCSB_" + i.idx + "_scrollbar").css("visibility", "visible"), u.scrollTop(0).scrollLeft(0)),
                    "_resetY" !== e || i.contentReset.y || (C("onOverflowYNone") && n.callbacks.onOverflowYNone.call(r[0]), (i.contentReset.y = 1)),
                    "_resetX" !== e || i.contentReset.x || (C("onOverflowXNone") && n.callbacks.onOverflowXNone.call(r[0]), (i.contentReset.x = 1)),
                    "_resetY" !== e && "_resetX" !== e)
                ) {
                    switch (
                        ((!i.contentReset.y && r[0].mcs) || !i.overflowed[0] || (C("onOverflowY") && n.callbacks.onOverflowY.call(r[0]), (i.contentReset.x = null)),
                        (!i.contentReset.x && r[0].mcs) || !i.overflowed[1] || (C("onOverflowX") && n.callbacks.onOverflowX.call(r[0]), (i.contentReset.x = null)),
                        n.snapAmount && ((t = n.snapAmount instanceof Array ? ("x" === a.dir ? n.snapAmount[1] : n.snapAmount[0]) : n.snapAmount), (s = e), (u = t), (t = n.snapOffset), (e = Math.round(s / u) * u - t)),
                        a.dir)
                    ) {
                        case "x":
                            var p = A("#mCSB_" + i.idx + "_dragger_horizontal"),
                                f = "left",
                                m = d[0].offsetLeft,
                                g = [l.width() - d.outerWidth(!1), p.parent().width() - p.width()],
                                v = [e, 0 === e ? 0 : e / i.scrollRatio.x],
                                y = c[1],
                                b = h[1],
                                w = 0 < y ? y / i.scrollRatio.x : 0,
                                x = 0 < b ? b / i.scrollRatio.x : 0;
                            break;
                        case "y":
                            (p = A("#mCSB_" + i.idx + "_dragger_vertical")),
                                (f = "top"),
                                (m = d[0].offsetTop),
                                (g = [l.height() - d.outerHeight(!1), p.parent().height() - p.height()]),
                                (v = [e, 0 === e ? 0 : e / i.scrollRatio.y]),
                                (y = c[0]),
                                (b = h[0]),
                                (w = 0 < y ? y / i.scrollRatio.y : 0),
                                (x = 0 < b ? b / i.scrollRatio.y : 0);
                    }
                    v[1] < 0 || (0 === v[0] && 0 === v[1]) ? (v = [0, 0]) : v[1] >= g[1] ? (v = [g[0], g[1]]) : (v[0] = -v[0]),
                        r[0].mcs || (T(), C("onInit") && n.callbacks.onInit.call(r[0])),
                        clearTimeout(d[0].onCompleteTimeout),
                        J(p[0], f, Math.round(v[1]), o[1], a.scrollEasing),
                        (!i.tweenRunning && ((0 === m && 0 <= v[0]) || (m === g[0] && v[0] <= g[0]))) ||
                            J(d[0], f, Math.round(v[0]), o[0], a.scrollEasing, a.overwrite, {
                                onStart: function () {
                                    a.callbacks &&
                                        a.onStart &&
                                        !i.tweenRunning &&
                                        (C("onScrollStart") && (T(), n.callbacks.onScrollStart.call(r[0])),
                                        (i.tweenRunning = !0),
                                        E(p),
                                        (i.cbOffsets = [n.callbacks.alwaysTriggerOffsets || m >= g[0] + y, n.callbacks.alwaysTriggerOffsets || m <= -b]));
                                },
                                onUpdate: function () {
                                    a.callbacks && a.onUpdate && C("whileScrolling") && (T(), n.callbacks.whileScrolling.call(r[0]));
                                },
                                onComplete: function () {
                                    var e;
                                    a.callbacks &&
                                        a.onComplete &&
                                        ("yx" === n.axis && clearTimeout(d[0].onCompleteTimeout),
                                        (e = d[0].idleTimer || 0),
                                        (d[0].onCompleteTimeout = setTimeout(function () {
                                            C("onScroll") && (T(), n.callbacks.onScroll.call(r[0])),
                                                C("onTotalScroll") && v[1] >= g[1] - w && i.cbOffsets[0] && (T(), n.callbacks.onTotalScroll.call(r[0])),
                                                C("onTotalScrollBack") && v[1] <= x && i.cbOffsets[1] && (T(), n.callbacks.onTotalScrollBack.call(r[0])),
                                                (i.tweenRunning = !1),
                                                (d[0].idleTimer = 0),
                                                E(p, "hide");
                                        }, e)));
                                },
                            });
                }
                function C(e) {
                    return i && n.callbacks[e] && "function" == typeof n.callbacks[e];
                }
                function T() {
                    var e = [d[0].offsetTop, d[0].offsetLeft],
                        t = [p[0].offsetTop, p[0].offsetLeft],
                        i = [d.outerHeight(!1), d.outerWidth(!1)],
                        n = [l.height(), l.width()];
                    r[0].mcs = {
                        content: d,
                        top: e[0],
                        left: e[1],
                        draggerTop: t[0],
                        draggerLeft: t[1],
                        topPct: Math.round((100 * Math.abs(e[0])) / (Math.abs(i[0]) - n[0])),
                        leftPct: Math.round((100 * Math.abs(e[1])) / (Math.abs(i[1]) - n[1])),
                        direction: a.dir,
                    };
                }
            }),
            (J = function (e, t, i, n, r, a, s) {
                e._mTween || (e._mTween = { top: {}, left: {} });
                var o,
                    l,
                    d = (s = s || {}).onStart || function () {},
                    u = s.onUpdate || function () {},
                    c = s.onComplete || function () {},
                    h = Z(),
                    p = 0,
                    f = e.offsetTop,
                    m = e.style,
                    g = e._mTween[t];
                "left" === t && (f = e.offsetLeft);
                var v = i - f;
                function y() {
                    g.stop || (p || d.call(), (p = Z() - h), b(), p >= g.time && ((g.time = p > g.time ? p + o - (p - g.time) : p + o - 1), g.time < p + 1 && (g.time = p + 1)), g.time < n ? (g.id = l(y)) : c.call());
                }
                function b() {
                    0 < n
                        ? ((g.currVal = (function (e, t, i, n, r) {
                              switch (r) {
                                  case "linear":
                                  case "mcsLinear":
                                      return (i * e) / n + t;
                                  case "mcsLinearOut":
                                      return (e /= n), e--, i * Math.sqrt(1 - e * e) + t;
                                  case "easeInOutSmooth":
                                      return (e /= n / 2) < 1 ? (i / 2) * e * e + t : (-i / 2) * (--e * (e - 2) - 1) + t;
                                  case "easeInOutStrong":
                                      return (e /= n / 2) < 1 ? (i / 2) * Math.pow(2, 10 * (e - 1)) + t : (e--, (i / 2) * (2 - Math.pow(2, -10 * e)) + t);
                                  case "easeInOut":
                                  case "mcsEaseInOut":
                                      return (e /= n / 2) < 1 ? (i / 2) * e * e * e + t : (i / 2) * ((e -= 2) * e * e + 2) + t;
                                  case "easeOutSmooth":
                                      return (e /= n), -i * (--e * e * e * e - 1) + t;
                                  case "easeOutStrong":
                                      return i * (1 - Math.pow(2, (-10 * e) / n)) + t;
                                  case "easeOut":
                                  case "mcsEaseOut":
                                  default:
                                      var a = (e /= n) * e,
                                          s = a * e;
                                      return t + i * (0.499999999999997 * s * a + -2.5 * a * a + 5.5 * s + -6.5 * a + 4 * e);
                              }
                          })(g.time, f, v, n, r)),
                          (m[t] = Math.round(g.currVal) + "px"))
                        : (m[t] = i + "px"),
                        u.call();
                }
                (g.stop = 0),
                    "none" === a || (null != g.id && (window.requestAnimationFrame ? window.cancelAnimationFrame(g.id) : clearTimeout(g.id), (g.id = null))),
                    (o = 1e3 / 60),
                    (g.time = p + o),
                    (l =
                        window.requestAnimationFrame ||
                        function (e) {
                            return b(), setTimeout(e, 0.01);
                        }),
                    (g.id = l(y));
            }),
            (Z = function () {
                return window.performance && window.performance.now ? window.performance.now() : window.performance && window.performance.webkitNow ? window.performance.webkitNow() : Date.now ? Date.now() : new Date().getTime();
            }),
            (t = function () {
                this._mTween || (this._mTween = { top: {}, left: {} });
                for (var e = ["top", "left"], t = 0; t < e.length; t++) {
                    var i = e[t];
                    this._mTween[i].id && (window.requestAnimationFrame ? window.cancelAnimationFrame(this._mTween[i].id) : clearTimeout(this._mTween[i].id), (this._mTween[i].id = null), (this._mTween[i].stop = 1));
                }
            }),
            (ee = function (t, i) {
                try {
                    delete t[i];
                } catch (e) {
                    t[i] = null;
                }
            }),
            (te = function (e) {
                return !(e.which && 1 !== e.which);
            }),
            (ie = function (e) {
                e = e.originalEvent.pointerType;
                return !(e && "touch" !== e && 2 !== e);
            }),
            (ne = function (e) {
                return !isNaN(parseFloat(e)) && isFinite(e);
            }),
            (re = function (e) {
                var t = e.parents(".mCSB_container");
                return [e.offset().top - t.offset().top, e.offset().left - t.offset().left];
            }),
            (ae = function () {
                var e = (function () {
                    var e = ["webkit", "moz", "ms", "o"];
                    if ("hidden" in document) return "hidden";
                    for (var t = 0; t < e.length; t++) if (e[t] + "Hidden" in document) return e[t] + "Hidden";
                    return null;
                })();
                return !!e && document[e];
            }),
            (A.fn[l] = function (e) {
                return h[e] ? h[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? void A.error("Method " + e + " does not exist") : h.init.apply(this, arguments);
            }),
            (A[l] = function (e) {
                return h[e] ? h[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? void A.error("Method " + e + " does not exist") : h.init.apply(this, arguments);
            }),
            (A[l].defaults = r),
            (window[l] = !0),
            A(window).bind("load", function () {
                A(n)[l](),
                    A.extend(A.expr[":"], {
                        mcsInView:
                            A.expr[":"].mcsInView ||
                            function (e) {
                                var t = A(e),
                                    i = t.parents(".mCSB_container");
                                if (i.length)
                                    return (
                                        (e = i.parent()),
                                        0 <= (i = [i[0].offsetTop, i[0].offsetLeft])[0] + re(t)[0] && i[0] + re(t)[0] < e.height() - t.outerHeight(!1) && 0 <= i[1] + re(t)[1] && i[1] + re(t)[1] < e.width() - t.outerWidth(!1)
                                    );
                            },
                        mcsInSight:
                            A.expr[":"].mcsInSight ||
                            function (e, t, i) {
                                var n = A(e),
                                    r = n.parents(".mCSB_container"),
                                    e =
                                        "exact" === i[3]
                                            ? [
                                                  [1, 0],
                                                  [1, 0],
                                              ]
                                            : [
                                                  [0.9, 0.1],
                                                  [0.6, 0.4],
                                              ];
                                if (r.length)
                                    return (
                                        (i = [n.outerHeight(!1), n.outerWidth(!1)]),
                                        (n = [r[0].offsetTop + re(n)[0], r[0].offsetLeft + re(n)[1]]),
                                        (r = [r.parent()[0].offsetHeight, r.parent()[0].offsetWidth]),
                                        n[0] - r[0] * (e = [i[0] < r[0] ? e[0] : e[1], i[1] < r[1] ? e[0] : e[1]])[0][0] < 0 && 0 <= n[0] + i[0] - r[0] * e[0][1] && n[1] - r[1] * e[1][0] < 0 && 0 <= n[1] + i[1] - r[1] * e[1][1]
                                    );
                            },
                        mcsOverflow:
                            A.expr[":"].mcsOverflow ||
                            function (e) {
                                e = A(e).data(P);
                                if (e) return e.overflowed[0] || e.overflowed[1];
                            },
                    });
            });
    }),
    (function (t, i) {
        "function" == typeof define && define.amd
            ? define("jquery-bridget/jquery-bridget", ["jquery"], function (e) {
                  return i(t, e);
              })
            : "object" == typeof module && module.exports
            ? (module.exports = i(t, require("jquery")))
            : (t.jQueryBridget = i(t, t.jQuery));
    })(window, function (e, t) {
        "use strict";
        var i = Array.prototype.slice,
            n = e.console,
            c =
                void 0 === n
                    ? function () {}
                    : function (e) {
                          n.error(e);
                      };
        function r(l, d, u) {
            (u = u || t || e.jQuery) &&
                (d.prototype.option ||
                    (d.prototype.option = function (e) {
                        u.isPlainObject(e) && (this.options = u.extend(!0, this.options, e));
                    }),
                (u.fn[l] = function (e) {
                    if ("string" != typeof e)
                        return (
                            (o = e),
                            this.each(function (e, t) {
                                var i = u.data(t, l);
                                i ? (i.option(o), i._init()) : ((i = new d(t, o)), u.data(t, l, i));
                            }),
                            this
                        );
                    var n,
                        r,
                        a,
                        s,
                        o,
                        t = i.call(arguments, 1);
                    return (
                        (r = t),
                        (s = "$()." + l + '("' + (n = e) + '")'),
                        (e = this).each(function (e, t) {
                            var i = u.data(t, l);
                            i ? ((t = i[n]) && "_" != n.charAt(0) ? ((i = t.apply(i, r)), (a = void 0 === a ? i : a)) : c(s + " is not a valid method")) : c(l + " not initialized. Cannot call methods, i.e. " + s);
                        }),
                        void 0 !== a ? a : e
                    );
                }),
                a(u));
        }
        function a(e) {
            !e || (e && e.bridget) || (e.bridget = r);
        }
        return a(t || e.jQuery), r;
    }),
    (function (e, t) {
        "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? (module.exports = t()) : (e.EvEmitter = t());
    })("undefined" != typeof window ? window : this, function () {
        function e() {}
        var t = e.prototype;
        return (
            (t.on = function (e, t) {
                if (e && t) {
                    var i = (this._events = this._events || {}),
                        e = (i[e] = i[e] || []);
                    return -1 == e.indexOf(t) && e.push(t), this;
                }
            }),
            (t.once = function (e, t) {
                if (e && t) {
                    this.on(e, t);
                    var i = (this._onceEvents = this._onceEvents || {});
                    return ((i[e] = i[e] || {})[t] = !0), this;
                }
            }),
            (t.off = function (e, t) {
                e = this._events && this._events[e];
                if (e && e.length) {
                    t = e.indexOf(t);
                    return -1 != t && e.splice(t, 1), this;
                }
            }),
            (t.emitEvent = function (e, t) {
                var i = this._events && this._events[e];
                if (i && i.length) {
                    (i = i.slice(0)), (t = t || []);
                    for (var n = this._onceEvents && this._onceEvents[e], r = 0; r < i.length; r++) {
                        var a = i[r];
                        n && n[a] && (this.off(e, a), delete n[a]), a.apply(this, t);
                    }
                    return this;
                }
            }),
            (t.allOff = function () {
                delete this._events, delete this._onceEvents;
            }),
            e
        );
    }),
    (function (e, t) {
        "function" == typeof define && define.amd ? define("get-size/get-size", t) : "object" == typeof module && module.exports ? (module.exports = t()) : (e.getSize = t());
    })(window, function () {
        "use strict";
        function p(e) {
            var t = parseFloat(e);
            return -1 == e.indexOf("%") && !isNaN(t) && t;
        }
        var t =
                "undefined" == typeof console
                    ? function () {}
                    : function (e) {
                          console.error(e);
                      },
            f = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
            m = f.length;
        function g(e) {
            e = getComputedStyle(e);
            return e || t("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), e;
        }
        var v,
            y = !1;
        function b(e) {
            if (
                (y ||
                    ((y = !0),
                    ((h = document.createElement("div")).style.width = "200px"),
                    (h.style.padding = "1px 2px 3px 4px"),
                    (h.style.borderStyle = "solid"),
                    (h.style.borderWidth = "1px 2px 3px 4px"),
                    (h.style.boxSizing = "border-box"),
                    (c = document.body || document.documentElement).appendChild(h),
                    (u = g(h)),
                    (v = 200 == Math.round(p(u.width))),
                    (b.isBoxSizeOuter = v),
                    c.removeChild(h)),
                (e = "string" == typeof e ? document.querySelector(e) : e) && "object" == typeof e && e.nodeType)
            ) {
                var t = g(e);
                if ("none" == t.display)
                    return (function () {
                        for (var e = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, t = 0; t < m; t++) e[f[t]] = 0;
                        return e;
                    })();
                var i = {};
                (i.width = e.offsetWidth), (i.height = e.offsetHeight);
                for (var n = (i.isBorderBox = "border-box" == t.boxSizing), r = 0; r < m; r++) {
                    var a = f[r],
                        s = t[a],
                        s = parseFloat(s);
                    i[a] = isNaN(s) ? 0 : s;
                }
                var o = i.paddingLeft + i.paddingRight,
                    l = i.paddingTop + i.paddingBottom,
                    d = i.marginLeft + i.marginRight,
                    u = i.marginTop + i.marginBottom,
                    c = i.borderLeftWidth + i.borderRightWidth,
                    h = i.borderTopWidth + i.borderBottomWidth,
                    e = n && v,
                    n = p(t.width);
                !1 !== n && (i.width = n + (e ? 0 : o + c));
                n = p(t.height);
                return !1 !== n && (i.height = n + (e ? 0 : l + h)), (i.innerWidth = i.width - (o + c)), (i.innerHeight = i.height - (l + h)), (i.outerWidth = i.width + d), (i.outerHeight = i.height + u), i;
            }
        }
        return b;
    }),
    (function (e, t) {
        "use strict";
        "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", t) : "object" == typeof module && module.exports ? (module.exports = t()) : (e.matchesSelector = t());
    })(window, function () {
        "use strict";
        var i = (function () {
            var e = window.Element.prototype;
            if (e.matches) return "matches";
            if (e.matchesSelector) return "matchesSelector";
            for (var t = ["webkit", "moz", "ms", "o"], i = 0; i < t.length; i++) {
                var n = t[i] + "MatchesSelector";
                if (e[n]) return n;
            }
        })();
        return function (e, t) {
            return e[i](t);
        };
    }),
    (function (t, i) {
        "function" == typeof define && define.amd
            ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (e) {
                  return i(t, e);
              })
            : "object" == typeof module && module.exports
            ? (module.exports = i(t, require("desandro-matches-selector")))
            : (t.fizzyUIUtils = i(t, t.matchesSelector));
    })(window, function (i, a) {
        var d = {
                extend: function (e, t) {
                    for (var i in t) e[i] = t[i];
                    return e;
                },
                modulo: function (e, t) {
                    return ((e % t) + t) % t;
                },
            },
            t = Array.prototype.slice;
        (d.makeArray = function (e) {
            return Array.isArray(e) ? e : null == e ? [] : "object" == typeof e && "number" == typeof e.length ? t.call(e) : [e];
        }),
            (d.removeFrom = function (e, t) {
                t = e.indexOf(t);
                -1 != t && e.splice(t, 1);
            }),
            (d.getParent = function (e, t) {
                for (; e.parentNode && e != document.body; ) if (((e = e.parentNode), a(e, t))) return e;
            }),
            (d.getQueryElement = function (e) {
                return "string" == typeof e ? document.querySelector(e) : e;
            }),
            (d.handleEvent = function (e) {
                var t = "on" + e.type;
                this[t] && this[t](e);
            }),
            (d.filterFindElements = function (e, n) {
                e = d.makeArray(e);
                var r = [];
                return (
                    e.forEach(function (e) {
                        if (e instanceof HTMLElement)
                            if (n) {
                                a(e, n) && r.push(e);
                                for (var t = e.querySelectorAll(n), i = 0; i < t.length; i++) r.push(t[i]);
                            } else r.push(e);
                    }),
                    r
                );
            }),
            (d.debounceMethod = function (e, t, n) {
                n = n || 100;
                var r = e.prototype[t],
                    a = t + "Timeout";
                e.prototype[t] = function () {
                    var e = this[a];
                    clearTimeout(e);
                    var t = arguments,
                        i = this;
                    this[a] = setTimeout(function () {
                        r.apply(i, t), delete i[a];
                    }, n);
                };
            }),
            (d.docReady = function (e) {
                var t = document.readyState;
                "complete" == t || "interactive" == t ? setTimeout(e) : document.addEventListener("DOMContentLoaded", e);
            }),
            (d.toDashed = function (e) {
                return e
                    .replace(/(.)([A-Z])/g, function (e, t, i) {
                        return t + "-" + i;
                    })
                    .toLowerCase();
            });
        var u = i.console;
        return (
            (d.htmlInit = function (o, l) {
                d.docReady(function () {
                    var e = d.toDashed(l),
                        r = "data-" + e,
                        t = document.querySelectorAll("[" + r + "]"),
                        e = document.querySelectorAll(".js-" + e),
                        e = d.makeArray(t).concat(d.makeArray(e)),
                        a = r + "-options",
                        s = i.jQuery;
                    e.forEach(function (t) {
                        var e,
                            i = t.getAttribute(r) || t.getAttribute(a);
                        try {
                            e = i && JSON.parse(i);
                        } catch (e) {
                            return void (u && u.error("Error parsing " + r + " on " + t.className + ": " + e));
                        }
                        var n = new o(t, e);
                        s && s.data(t, l, n);
                    });
                });
            }),
            d
        );
    }),
    (function (e, t) {
        "function" == typeof define && define.amd
            ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], t)
            : "object" == typeof module && module.exports
            ? (module.exports = t(require("ev-emitter"), require("get-size")))
            : ((e.Outlayer = {}), (e.Outlayer.Item = t(e.EvEmitter, e.getSize)));
    })(window, function (e, t) {
        "use strict";
        var i = document.documentElement.style,
            n = "string" == typeof i.transition ? "transition" : "WebkitTransition",
            r = "string" == typeof i.transform ? "transform" : "WebkitTransform",
            a = { WebkitTransition: "webkitTransitionEnd", transition: "transitionend" }[n],
            s = { transform: r, transition: n, transitionDuration: n + "Duration", transitionProperty: n + "Property", transitionDelay: n + "Delay" };
        function o(e, t) {
            e && ((this.element = e), (this.layout = t), (this.position = { x: 0, y: 0 }), this._create());
        }
        e = o.prototype = Object.create(e.prototype);
        (e.constructor = o),
            (e._create = function () {
                (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }), this.css({ position: "absolute" });
            }),
            (e.handleEvent = function (e) {
                var t = "on" + e.type;
                this[t] && this[t](e);
            }),
            (e.getSize = function () {
                this.size = t(this.element);
            }),
            (e.css = function (e) {
                var t,
                    i = this.element.style;
                for (t in e) i[s[t] || t] = e[t];
            }),
            (e.getPosition = function () {
                var e = getComputedStyle(this.element),
                    t = this.layout._getOption("originLeft"),
                    i = this.layout._getOption("originTop"),
                    n = e[t ? "left" : "right"],
                    r = e[i ? "top" : "bottom"],
                    a = parseFloat(n),
                    s = parseFloat(r),
                    e = this.layout.size;
                -1 != n.indexOf("%") && (a = (a / 100) * e.width),
                    -1 != r.indexOf("%") && (s = (s / 100) * e.height),
                    (a = isNaN(a) ? 0 : a),
                    (s = isNaN(s) ? 0 : s),
                    (a -= t ? e.paddingLeft : e.paddingRight),
                    (s -= i ? e.paddingTop : e.paddingBottom),
                    (this.position.x = a),
                    (this.position.y = s);
            }),
            (e.layoutPosition = function () {
                var e = this.layout.size,
                    t = {},
                    i = this.layout._getOption("originLeft"),
                    n = this.layout._getOption("originTop"),
                    r = i ? "paddingLeft" : "paddingRight",
                    a = i ? "left" : "right",
                    i = i ? "right" : "left",
                    r = this.position.x + e[r];
                (t[a] = this.getXValue(r)), (t[i] = "");
                (r = n ? "paddingTop" : "paddingBottom"), (i = n ? "top" : "bottom"), (n = n ? "bottom" : "top"), (r = this.position.y + e[r]);
                (t[i] = this.getYValue(r)), (t[n] = ""), this.css(t), this.emitEvent("layout", [this]);
            }),
            (e.getXValue = function (e) {
                var t = this.layout._getOption("horizontal");
                return this.layout.options.percentPosition && !t ? (e / this.layout.size.width) * 100 + "%" : e + "px";
            }),
            (e.getYValue = function (e) {
                var t = this.layout._getOption("horizontal");
                return this.layout.options.percentPosition && t ? (e / this.layout.size.height) * 100 + "%" : e + "px";
            }),
            (e._transitionTo = function (e, t) {
                this.getPosition();
                var i = this.position.x,
                    n = this.position.y,
                    r = e == this.position.x && t == this.position.y;
                this.setPosition(e, t),
                    !r || this.isTransitioning
                        ? ((i = e - i), (t -= n), ((n = {}).transform = this.getTranslate(i, t)), this.transition({ to: n, onTransitionEnd: { transform: this.layoutPosition }, isCleaning: !0 }))
                        : this.layoutPosition();
            }),
            (e.getTranslate = function (e, t) {
                return "translate3d(" + (e = this.layout._getOption("originLeft") ? e : -e) + "px, " + (t = this.layout._getOption("originTop") ? t : -t) + "px, 0)";
            }),
            (e.goTo = function (e, t) {
                this.setPosition(e, t), this.layoutPosition();
            }),
            (e.moveTo = e._transitionTo),
            (e.setPosition = function (e, t) {
                (this.position.x = parseFloat(e)), (this.position.y = parseFloat(t));
            }),
            (e._nonTransition = function (e) {
                for (var t in (this.css(e.to), e.isCleaning && this._removeStyles(e.to), e.onTransitionEnd)) e.onTransitionEnd[t].call(this);
            }),
            (e.transition = function (e) {
                if (parseFloat(this.layout.options.transitionDuration)) {
                    var t,
                        i = this._transn;
                    for (t in e.onTransitionEnd) i.onEnd[t] = e.onTransitionEnd[t];
                    for (t in e.to) (i.ingProperties[t] = !0), e.isCleaning && (i.clean[t] = !0);
                    e.from && (this.css(e.from), this.element.offsetHeight, 0), this.enableTransition(e.to), this.css(e.to), (this.isTransitioning = !0);
                } else this._nonTransition(e);
            });
        var l =
            "opacity," +
            r.replace(/([A-Z])/g, function (e) {
                return "-" + e.toLowerCase();
            });
        (e.enableTransition = function () {
            var e;
            this.isTransitioning ||
                ((e = "number" == typeof (e = this.layout.options.transitionDuration) ? e + "ms" : e),
                this.css({ transitionProperty: l, transitionDuration: e, transitionDelay: this.staggerDelay || 0 }),
                this.element.addEventListener(a, this, !1));
        }),
            (e.onwebkitTransitionEnd = function (e) {
                this.ontransitionend(e);
            }),
            (e.onotransitionend = function (e) {
                this.ontransitionend(e);
            });
        var d = { "-webkit-transform": "transform" };
        (e.ontransitionend = function (e) {
            var t, i;
            e.target === this.element &&
                ((t = this._transn),
                (i = d[e.propertyName] || e.propertyName),
                delete t.ingProperties[i],
                (function (e) {
                    for (var t in e) return;
                    return 1;
                })(t.ingProperties) && this.disableTransition(),
                i in t.clean && ((this.element.style[e.propertyName] = ""), delete t.clean[i]),
                i in t.onEnd && (t.onEnd[i].call(this), delete t.onEnd[i]),
                this.emitEvent("transitionEnd", [this]));
        }),
            (e.disableTransition = function () {
                this.removeTransitionStyles(), this.element.removeEventListener(a, this, !1), (this.isTransitioning = !1);
            }),
            (e._removeStyles = function (e) {
                var t,
                    i = {};
                for (t in e) i[t] = "";
                this.css(i);
            });
        var u = { transitionProperty: "", transitionDuration: "", transitionDelay: "" };
        return (
            (e.removeTransitionStyles = function () {
                this.css(u);
            }),
            (e.stagger = function (e) {
                (e = isNaN(e) ? 0 : e), (this.staggerDelay = e + "ms");
            }),
            (e.removeElem = function () {
                this.element.parentNode.removeChild(this.element), this.css({ display: "" }), this.emitEvent("remove", [this]);
            }),
            (e.remove = function () {
                n && parseFloat(this.layout.options.transitionDuration)
                    ? (this.once("transitionEnd", function () {
                          this.removeElem();
                      }),
                      this.hide())
                    : this.removeElem();
            }),
            (e.reveal = function () {
                delete this.isHidden, this.css({ display: "" });
                var e = this.layout.options,
                    t = {};
                (t[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd), this.transition({ from: e.hiddenStyle, to: e.visibleStyle, isCleaning: !0, onTransitionEnd: t });
            }),
            (e.onRevealTransitionEnd = function () {
                this.isHidden || this.emitEvent("reveal");
            }),
            (e.getHideRevealTransitionEndProperty = function (e) {
                var t,
                    e = this.layout.options[e];
                if (e.opacity) return "opacity";
                for (t in e) return t;
            }),
            (e.hide = function () {
                (this.isHidden = !0), this.css({ display: "" });
                var e = this.layout.options,
                    t = {};
                (t[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd), this.transition({ from: e.visibleStyle, to: e.hiddenStyle, isCleaning: !0, onTransitionEnd: t });
            }),
            (e.onHideTransitionEnd = function () {
                this.isHidden && (this.css({ display: "none" }), this.emitEvent("hide"));
            }),
            (e.destroy = function () {
                this.css({ position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: "" });
            }),
            o
        );
    }),
    (function (r, a) {
        "use strict";
        "function" == typeof define && define.amd
            ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (e, t, i, n) {
                  return a(r, e, t, i, n);
              })
            : "object" == typeof module && module.exports
            ? (module.exports = a(r, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")))
            : (r.Outlayer = a(r, r.EvEmitter, r.getSize, r.fizzyUIUtils, r.Outlayer.Item));
    })(window, function (e, t, r, n, a) {
        "use strict";
        function i() {}
        var s = e.console,
            o = e.jQuery,
            l = 0,
            d = {};
        function u(e, t) {
            var i = n.getQueryElement(e);
            i
                ? ((this.element = i),
                  o && (this.$element = o(this.element)),
                  (this.options = n.extend({}, this.constructor.defaults)),
                  this.option(t),
                  (t = ++l),
                  (this.element.outlayerGUID = t),
                  (d[t] = this)._create(),
                  this._getOption("initLayout") && this.layout())
                : s && s.error("Bad element for " + this.constructor.namespace + ": " + (i || e));
        }
        (u.namespace = "outlayer"),
            (u.Item = a),
            (u.defaults = {
                containerStyle: { position: "relative" },
                initLayout: !0,
                originLeft: !0,
                originTop: !0,
                resize: !0,
                resizeContainer: !0,
                transitionDuration: "0.4s",
                hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
                visibleStyle: { opacity: 1, transform: "scale(1)" },
            });
        var c = u.prototype;
        function h(e) {
            function t() {
                e.apply(this, arguments);
            }
            return ((t.prototype = Object.create(e.prototype)).constructor = t);
        }
        n.extend(c, t.prototype),
            (c.option = function (e) {
                n.extend(this.options, e);
            }),
            (c._getOption = function (e) {
                var t = this.constructor.compatOptions[e];
                return t && void 0 !== this.options[t] ? this.options[t] : this.options[e];
            }),
            (u.compatOptions = {
                initLayout: "isInitLayout",
                horizontal: "isHorizontal",
                layoutInstant: "isLayoutInstant",
                originLeft: "isOriginLeft",
                originTop: "isOriginTop",
                resize: "isResizeBound",
                resizeContainer: "isResizingContainer",
            }),
            (c._create = function () {
                this.reloadItems(), (this.stamps = []), this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle), this._getOption("resize") && this.bindResize();
            }),
            (c.reloadItems = function () {
                this.items = this._itemize(this.element.children);
            }),
            (c._itemize = function (e) {
                for (var t = this._filterFindItemElements(e), i = this.constructor.Item, n = [], r = 0; r < t.length; r++) {
                    var a = new i(t[r], this);
                    n.push(a);
                }
                return n;
            }),
            (c._filterFindItemElements = function (e) {
                return n.filterFindElements(e, this.options.itemSelector);
            }),
            (c.getItemElements = function () {
                return this.items.map(function (e) {
                    return e.element;
                });
            }),
            (c.layout = function () {
                this._resetLayout(), this._manageStamps();
                var e = this._getOption("layoutInstant"),
                    e = void 0 !== e ? e : !this._isLayoutInited;
                this.layoutItems(this.items, e), (this._isLayoutInited = !0);
            }),
            (c._init = c.layout),
            (c._resetLayout = function () {
                this.getSize();
            }),
            (c.getSize = function () {
                this.size = r(this.element);
            }),
            (c._getMeasurement = function (e, t) {
                var i,
                    n = this.options[e];
                n ? ("string" == typeof n ? (i = this.element.querySelector(n)) : n instanceof HTMLElement && (i = n), (this[e] = i ? r(i)[t] : n)) : (this[e] = 0);
            }),
            (c.layoutItems = function (e, t) {
                (e = this._getItemsForLayout(e)), this._layoutItems(e, t), this._postLayout();
            }),
            (c._getItemsForLayout = function (e) {
                return e.filter(function (e) {
                    return !e.isIgnored;
                });
            }),
            (c._layoutItems = function (e, i) {
                var n;
                this._emitCompleteOnItems("layout", e),
                    e &&
                        e.length &&
                        ((n = []),
                        e.forEach(function (e) {
                            var t = this._getItemLayoutPosition(e);
                            (t.item = e), (t.isInstant = i || e.isLayoutInstant), n.push(t);
                        }, this),
                        this._processLayoutQueue(n));
            }),
            (c._getItemLayoutPosition = function () {
                return { x: 0, y: 0 };
            }),
            (c._processLayoutQueue = function (e) {
                this.updateStagger(),
                    e.forEach(function (e, t) {
                        this._positionItem(e.item, e.x, e.y, e.isInstant, t);
                    }, this);
            }),
            (c.updateStagger = function () {
                var e = this.options.stagger;
                if (null != e)
                    return (
                        (this.stagger = (function (e) {
                            if ("number" == typeof e) return e;
                            var t = e.match(/(^\d*\.?\d*)(\w*)/),
                                e = t && t[1],
                                t = t && t[2];
                            if (!e.length) return 0;
                            e = parseFloat(e);
                            t = p[t] || 1;
                            return e * t;
                        })(e)),
                        this.stagger
                    );
                this.stagger = 0;
            }),
            (c._positionItem = function (e, t, i, n, r) {
                n ? e.goTo(t, i) : (e.stagger(r * this.stagger), e.moveTo(t, i));
            }),
            (c._postLayout = function () {
                this.resizeContainer();
            }),
            (c.resizeContainer = function () {
                var e;
                !this._getOption("resizeContainer") || ((e = this._getContainerSize()) && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1)));
            }),
            (c._getContainerSize = i),
            (c._setContainerMeasure = function (e, t) {
                var i;
                void 0 !== e &&
                    ((i = this.size).isBorderBox && (e += t ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth),
                    (e = Math.max(e, 0)),
                    (this.element.style[t ? "width" : "height"] = e + "px"));
            }),
            (c._emitCompleteOnItems = function (t, e) {
                var i = this;
                function n() {
                    i.dispatchEvent(t + "Complete", null, [e]);
                }
                var r,
                    a = e.length;
                function s() {
                    ++r == a && n();
                }
                e && a
                    ? ((r = 0),
                      e.forEach(function (e) {
                          e.once(t, s);
                      }))
                    : n();
            }),
            (c.dispatchEvent = function (e, t, i) {
                var n = t ? [t].concat(i) : i;
                this.emitEvent(e, n), o && ((this.$element = this.$element || o(this.element)), t ? (((t = o.Event(t)).type = e), this.$element.trigger(t, i)) : this.$element.trigger(e, i));
            }),
            (c.ignore = function (e) {
                e = this.getItem(e);
                e && (e.isIgnored = !0);
            }),
            (c.unignore = function (e) {
                e = this.getItem(e);
                e && delete e.isIgnored;
            }),
            (c.stamp = function (e) {
                (e = this._find(e)) && ((this.stamps = this.stamps.concat(e)), e.forEach(this.ignore, this));
            }),
            (c.unstamp = function (e) {
                (e = this._find(e)) &&
                    e.forEach(function (e) {
                        n.removeFrom(this.stamps, e), this.unignore(e);
                    }, this);
            }),
            (c._find = function (e) {
                if (e) return "string" == typeof e && (e = this.element.querySelectorAll(e)), (e = n.makeArray(e));
            }),
            (c._manageStamps = function () {
                this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this));
            }),
            (c._getBoundingRect = function () {
                var e = this.element.getBoundingClientRect(),
                    t = this.size;
                this._boundingRect = {
                    left: e.left + t.paddingLeft + t.borderLeftWidth,
                    top: e.top + t.paddingTop + t.borderTopWidth,
                    right: e.right - (t.paddingRight + t.borderRightWidth),
                    bottom: e.bottom - (t.paddingBottom + t.borderBottomWidth),
                };
            }),
            (c._manageStamp = i),
            (c._getElementOffset = function (e) {
                var t = e.getBoundingClientRect(),
                    i = this._boundingRect,
                    e = r(e);
                return { left: t.left - i.left - e.marginLeft, top: t.top - i.top - e.marginTop, right: i.right - t.right - e.marginRight, bottom: i.bottom - t.bottom - e.marginBottom };
            }),
            (c.handleEvent = n.handleEvent),
            (c.bindResize = function () {
                e.addEventListener("resize", this), (this.isResizeBound = !0);
            }),
            (c.unbindResize = function () {
                e.removeEventListener("resize", this), (this.isResizeBound = !1);
            }),
            (c.onresize = function () {
                this.resize();
            }),
            n.debounceMethod(u, "onresize", 100),
            (c.resize = function () {
                this.isResizeBound && this.needsResizeLayout() && this.layout();
            }),
            (c.needsResizeLayout = function () {
                var e = r(this.element);
                return this.size && e && e.innerWidth !== this.size.innerWidth;
            }),
            (c.addItems = function (e) {
                e = this._itemize(e);
                return e.length && (this.items = this.items.concat(e)), e;
            }),
            (c.appended = function (e) {
                e = this.addItems(e);
                e.length && (this.layoutItems(e, !0), this.reveal(e));
            }),
            (c.prepended = function (e) {
                var t = this._itemize(e);
                t.length && ((e = this.items.slice(0)), (this.items = t.concat(e)), this._resetLayout(), this._manageStamps(), this.layoutItems(t, !0), this.reveal(t), this.layoutItems(e));
            }),
            (c.reveal = function (e) {
                var i;
                this._emitCompleteOnItems("reveal", e),
                    e &&
                        e.length &&
                        ((i = this.updateStagger()),
                        e.forEach(function (e, t) {
                            e.stagger(t * i), e.reveal();
                        }));
            }),
            (c.hide = function (e) {
                var i;
                this._emitCompleteOnItems("hide", e),
                    e &&
                        e.length &&
                        ((i = this.updateStagger()),
                        e.forEach(function (e, t) {
                            e.stagger(t * i), e.hide();
                        }));
            }),
            (c.revealItemElements = function (e) {
                e = this.getItems(e);
                this.reveal(e);
            }),
            (c.hideItemElements = function (e) {
                e = this.getItems(e);
                this.hide(e);
            }),
            (c.getItem = function (e) {
                for (var t = 0; t < this.items.length; t++) {
                    var i = this.items[t];
                    if (i.element == e) return i;
                }
            }),
            (c.getItems = function (e) {
                e = n.makeArray(e);
                var t = [];
                return (
                    e.forEach(function (e) {
                        e = this.getItem(e);
                        e && t.push(e);
                    }, this),
                    t
                );
            }),
            (c.remove = function (e) {
                e = this.getItems(e);
                this._emitCompleteOnItems("remove", e),
                    e &&
                        e.length &&
                        e.forEach(function (e) {
                            e.remove(), n.removeFrom(this.items, e);
                        }, this);
            }),
            (c.destroy = function () {
                var e = this.element.style;
                (e.height = ""),
                    (e.position = ""),
                    (e.width = ""),
                    this.items.forEach(function (e) {
                        e.destroy();
                    }),
                    this.unbindResize();
                e = this.element.outlayerGUID;
                delete d[e], delete this.element.outlayerGUID, o && o.removeData(this.element, this.constructor.namespace);
            }),
            (u.data = function (e) {
                e = (e = n.getQueryElement(e)) && e.outlayerGUID;
                return e && d[e];
            }),
            (u.create = function (e, t) {
                var i = h(u);
                return (
                    (i.defaults = n.extend({}, u.defaults)),
                    n.extend(i.defaults, t),
                    (i.compatOptions = n.extend({}, u.compatOptions)),
                    (i.namespace = e),
                    (i.data = u.data),
                    (i.Item = h(a)),
                    n.htmlInit(i, e),
                    o && o.bridget && o.bridget(e, i),
                    i
                );
            });
        var p = { ms: 1, s: 1e3 };
        return (u.Item = a), u;
    }),
    (function (e, t) {
        "function" == typeof define && define.amd
            ? define(["outlayer/outlayer", "get-size/get-size"], t)
            : "object" == typeof module && module.exports
            ? (module.exports = t(require("outlayer"), require("get-size")))
            : (e.Masonry = t(e.Outlayer, e.getSize));
    })(window, function (e, o) {
        var t = e.create("masonry");
        t.compatOptions.fitWidth = "isFitWidth";
        e = t.prototype;
        return (
            (e._resetLayout = function () {
                this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), (this.colYs = []);
                for (var e = 0; e < this.cols; e++) this.colYs.push(0);
                (this.maxY = 0), (this.horizontalColIndex = 0);
            }),
            (e.measureColumns = function () {
                this.getContainerWidth(), this.columnWidth || ((i = (t = this.items[0]) && t.element), (this.columnWidth = (i && o(i).outerWidth) || this.containerWidth));
                var e = (this.columnWidth += this.gutter),
                    t = this.containerWidth + this.gutter,
                    i = t / e,
                    e = e - (t % e),
                    i = Math[e && e < 1 ? "round" : "floor"](i);
                this.cols = Math.max(i, 1);
            }),
            (e.getContainerWidth = function () {
                var e = this._getOption("fitWidth") ? this.element.parentNode : this.element,
                    e = o(e);
                this.containerWidth = e && e.innerWidth;
            }),
            (e._getItemLayoutPosition = function (e) {
                e.getSize();
                for (
                    var t = e.size.outerWidth % this.columnWidth,
                        i = Math[t && t < 1 ? "round" : "ceil"](e.size.outerWidth / this.columnWidth),
                        i = Math.min(i, this.cols),
                        n = this[this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition"](i, e),
                        t = { x: this.columnWidth * n.col, y: n.y },
                        r = n.y + e.size.outerHeight,
                        a = i + n.col,
                        s = n.col;
                    s < a;
                    s++
                )
                    this.colYs[s] = r;
                return t;
            }),
            (e._getTopColPosition = function (e) {
                var t = this._getTopColGroup(e),
                    e = Math.min.apply(Math, t);
                return { col: t.indexOf(e), y: e };
            }),
            (e._getTopColGroup = function (e) {
                if (e < 2) return this.colYs;
                for (var t = [], i = this.cols + 1 - e, n = 0; n < i; n++) t[n] = this._getColGroupY(n, e);
                return t;
            }),
            (e._getColGroupY = function (e, t) {
                if (t < 2) return this.colYs[e];
                t = this.colYs.slice(e, e + t);
                return Math.max.apply(Math, t);
            }),
            (e._getHorizontalColPosition = function (e, t) {
                var i = this.horizontalColIndex % this.cols,
                    i = 1 < e && i + e > this.cols ? 0 : i,
                    t = t.size.outerWidth && t.size.outerHeight;
                return (this.horizontalColIndex = t ? i + e : this.horizontalColIndex), { col: i, y: this._getColGroupY(i, e) };
            }),
            (e._manageStamp = function (e) {
                var t = o(e),
                    i = this._getElementOffset(e),
                    n = this._getOption("originLeft") ? i.left : i.right,
                    e = n + t.outerWidth,
                    n = Math.floor(n / this.columnWidth),
                    n = Math.max(0, n),
                    r = Math.floor(e / this.columnWidth);
                r -= e % this.columnWidth ? 0 : 1;
                for (var r = Math.min(this.cols - 1, r), a = (this._getOption("originTop") ? i.top : i.bottom) + t.outerHeight, s = n; s <= r; s++) this.colYs[s] = Math.max(a, this.colYs[s]);
            }),
            (e._getContainerSize = function () {
                this.maxY = Math.max.apply(Math, this.colYs);
                var e = { height: this.maxY };
                return this._getOption("fitWidth") && (e.width = this._getContainerFitWidth()), e;
            }),
            (e._getContainerFitWidth = function () {
                for (var e = 0, t = this.cols; --t && 0 === this.colYs[t]; ) e++;
                return (this.cols - e) * this.columnWidth - this.gutter;
            }),
            (e.needsResizeLayout = function () {
                var e = this.containerWidth;
                return this.getContainerWidth(), e != this.containerWidth;
            }),
            t
        );
    }),
    (function (e, t) {
        "object" == typeof exports && "undefined" != typeof module ? (module.exports = t()) : "function" == typeof define && define.amd ? define(t) : ((e = e || self).Swiper = t());
    })(this, function () {
        "use strict";
        function n(e) {
            return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object;
        }
        function r(t, i) {
            void 0 === t && (t = {}),
                void 0 === i && (i = {}),
                Object.keys(i).forEach(function (e) {
                    void 0 === t[e] ? (t[e] = i[e]) : n(i[e]) && n(t[e]) && 0 < Object.keys(i[e]).length && r(t[e], i[e]);
                });
        }
        var v = "undefined" != typeof document ? document : {},
            e = {
                body: {},
                addEventListener: function () {},
                removeEventListener: function () {},
                activeElement: { blur: function () {}, nodeName: "" },
                querySelector: function () {
                    return null;
                },
                querySelectorAll: function () {
                    return [];
                },
                getElementById: function () {
                    return null;
                },
                createEvent: function () {
                    return { initEvent: function () {} };
                },
                createElement: function () {
                    return {
                        children: [],
                        childNodes: [],
                        style: {},
                        setAttribute: function () {},
                        getElementsByTagName: function () {
                            return [];
                        },
                    };
                },
                createElementNS: function () {
                    return {};
                },
                importNode: function () {
                    return null;
                },
                location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" },
            };
        r(v, e);
        var X = "undefined" != typeof window ? window : {};
        r(X, {
            document: e,
            navigator: { userAgent: "" },
            location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" },
            history: { replaceState: function () {}, pushState: function () {}, go: function () {}, back: function () {} },
            CustomEvent: function () {
                return this;
            },
            addEventListener: function () {},
            removeEventListener: function () {},
            getComputedStyle: function () {
                return {
                    getPropertyValue: function () {
                        return "";
                    },
                };
            },
            Image: function () {},
            Date: function () {},
            screen: {},
            setTimeout: function () {},
            clearTimeout: function () {},
            matchMedia: function () {
                return {};
            },
        });
        var l = function (e) {
            for (var t = 0; t < e.length; t += 1) this[t] = e[t];
            return (this.length = e.length), this;
        };
        function T(e, t) {
            var i = [],
                n = 0;
            if (e && !t && e instanceof l) return e;
            if (e)
                if ("string" == typeof e) {
                    var r,
                        a,
                        s = e.trim();
                    if (0 <= s.indexOf("<") && 0 <= s.indexOf(">")) {
                        var o = "div";
                        for (
                            0 === s.indexOf("<li") && (o = "ul"),
                                0 === s.indexOf("<tr") && (o = "tbody"),
                                (0 !== s.indexOf("<td") && 0 !== s.indexOf("<th")) || (o = "tr"),
                                0 === s.indexOf("<tbody") && (o = "table"),
                                0 === s.indexOf("<option") && (o = "select"),
                                (a = v.createElement(o)).innerHTML = s,
                                n = 0;
                            n < a.childNodes.length;
                            n += 1
                        )
                            i.push(a.childNodes[n]);
                    } else for (r = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || v).querySelectorAll(e.trim()) : [v.getElementById(e.trim().split("#")[1])], n = 0; n < r.length; n += 1) r[n] && i.push(r[n]);
                } else if (e.nodeType || e === X || e === v) i.push(e);
                else if (0 < e.length && e[0].nodeType) for (n = 0; n < e.length; n += 1) i.push(e[n]);
            return new l(i);
        }
        function a(e) {
            for (var t = [], i = 0; i < e.length; i += 1) -1 === t.indexOf(e[i]) && t.push(e[i]);
            return t;
        }
        (T.fn = l.prototype), (T.Class = l), (T.Dom7 = l);
        var t = {
            addClass: function (e) {
                if (void 0 === e) return this;
                for (var t = e.split(" "), i = 0; i < t.length; i += 1) for (var n = 0; n < this.length; n += 1) void 0 !== this[n] && void 0 !== this[n].classList && this[n].classList.add(t[i]);
                return this;
            },
            removeClass: function (e) {
                for (var t = e.split(" "), i = 0; i < t.length; i += 1) for (var n = 0; n < this.length; n += 1) void 0 !== this[n] && void 0 !== this[n].classList && this[n].classList.remove(t[i]);
                return this;
            },
            hasClass: function (e) {
                return !!this[0] && this[0].classList.contains(e);
            },
            toggleClass: function (e) {
                for (var t = e.split(" "), i = 0; i < t.length; i += 1) for (var n = 0; n < this.length; n += 1) void 0 !== this[n] && void 0 !== this[n].classList && this[n].classList.toggle(t[i]);
                return this;
            },
            attr: function (e, t) {
                var i = arguments;
                if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                for (var n = 0; n < this.length; n += 1)
                    if (2 === i.length) this[n].setAttribute(e, t);
                    else for (var r in e) (this[n][r] = e[r]), this[n].setAttribute(r, e[r]);
                return this;
            },
            removeAttr: function (e) {
                for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
                return this;
            },
            data: function (e, t) {
                var i;
                if (void 0 !== t) {
                    for (var n = 0; n < this.length; n += 1) (i = this[n]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), (i.dom7ElementDataStorage[e] = t);
                    return this;
                }
                if ((i = this[0])) {
                    if (i.dom7ElementDataStorage && e in i.dom7ElementDataStorage) return i.dom7ElementDataStorage[e];
                    var r = i.getAttribute("data-" + e);
                    return r ? r : void 0;
                }
            },
            transform: function (e) {
                for (var t = 0; t < this.length; t += 1) {
                    var i = this[t].style;
                    (i.webkitTransform = e), (i.transform = e);
                }
                return this;
            },
            transition: function (e) {
                "string" != typeof e && (e += "ms");
                for (var t = 0; t < this.length; t += 1) {
                    var i = this[t].style;
                    (i.webkitTransitionDuration = e), (i.transitionDuration = e);
                }
                return this;
            },
            on: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                var i = e[0],
                    a = e[1],
                    s = e[2],
                    n = e[3];
                function r(e) {
                    var t = e.target;
                    if (t) {
                        var i = e.target.dom7EventData || [];
                        if ((i.indexOf(e) < 0 && i.unshift(e), T(t).is(a))) s.apply(t, i);
                        else for (var n = T(t).parents(), r = 0; r < n.length; r += 1) T(n[r]).is(a) && s.apply(n[r], i);
                    }
                }
                function o(e) {
                    var t = (e && e.target && e.target.dom7EventData) || [];
                    t.indexOf(e) < 0 && t.unshift(e), s.apply(this, t);
                }
                "function" == typeof e[1] && ((i = e[0]), (s = e[1]), (n = e[2]), (a = void 0));
                for (var l, n = n || !1, d = i.split(" "), u = 0; u < this.length; u += 1) {
                    var c = this[u];
                    if (a)
                        for (l = 0; l < d.length; l += 1) {
                            var h = d[l];
                            c.dom7LiveListeners || (c.dom7LiveListeners = {}), c.dom7LiveListeners[h] || (c.dom7LiveListeners[h] = []), c.dom7LiveListeners[h].push({ listener: s, proxyListener: r }), c.addEventListener(h, r, n);
                        }
                    else
                        for (l = 0; l < d.length; l += 1) {
                            var p = d[l];
                            c.dom7Listeners || (c.dom7Listeners = {}), c.dom7Listeners[p] || (c.dom7Listeners[p] = []), c.dom7Listeners[p].push({ listener: s, proxyListener: o }), c.addEventListener(p, o, n);
                        }
                }
                return this;
            },
            off: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                var i = e[0],
                    n = e[1],
                    r = e[2],
                    a = e[3];
                "function" == typeof e[1] && ((i = e[0]), (r = e[1]), (a = e[2]), (n = void 0));
                for (var a = a || !1, s = i.split(" "), o = 0; o < s.length; o += 1)
                    for (var l = s[o], d = 0; d < this.length; d += 1) {
                        var u = this[d],
                            c = void 0;
                        if ((!n && u.dom7Listeners ? (c = u.dom7Listeners[l]) : n && u.dom7LiveListeners && (c = u.dom7LiveListeners[l]), c && c.length))
                            for (var h = c.length - 1; 0 <= h; --h) {
                                var p = c[h];
                                ((!r || p.listener !== r) && !(r && p.listener && p.listener.dom7proxy && p.listener.dom7proxy === r) && r) || (u.removeEventListener(l, p.proxyListener, a), c.splice(h, 1));
                            }
                    }
                return this;
            },
            trigger: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                for (var i = e[0].split(" "), n = e[1], r = 0; r < i.length; r += 1)
                    for (var a = i[r], s = 0; s < this.length; s += 1) {
                        var o = this[s],
                            l = void 0;
                        try {
                            l = new X.CustomEvent(a, { detail: n, bubbles: !0, cancelable: !0 });
                        } catch (e) {
                            (l = v.createEvent("Event")).initEvent(a, !0, !0), (l.detail = n);
                        }
                        (o.dom7EventData = e.filter(function (e, t) {
                            return 0 < t;
                        })),
                            o.dispatchEvent(l),
                            (o.dom7EventData = []),
                            delete o.dom7EventData;
                    }
                return this;
            },
            transitionEnd: function (t) {
                var i,
                    n = ["webkitTransitionEnd", "transitionend"],
                    r = this;
                function a(e) {
                    if (e.target === this) for (t.call(this, e), i = 0; i < n.length; i += 1) r.off(n[i], a);
                }
                if (t) for (i = 0; i < n.length; i += 1) r.on(n[i], a);
                return this;
            },
            outerWidth: function (e) {
                if (0 < this.length) {
                    if (e) {
                        e = this.styles();
                        return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"));
                    }
                    return this[0].offsetWidth;
                }
                return null;
            },
            outerHeight: function (e) {
                if (0 < this.length) {
                    if (e) {
                        e = this.styles();
                        return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"));
                    }
                    return this[0].offsetHeight;
                }
                return null;
            },
            offset: function () {
                if (0 < this.length) {
                    var e = this[0],
                        t = e.getBoundingClientRect(),
                        i = v.body,
                        n = e.clientTop || i.clientTop || 0,
                        r = e.clientLeft || i.clientLeft || 0,
                        i = e === X ? X.scrollY : e.scrollTop,
                        e = e === X ? X.scrollX : e.scrollLeft;
                    return { top: t.top + i - n, left: t.left + e - r };
                }
                return null;
            },
            css: function (e, t) {
                var i;
                if (1 === arguments.length) {
                    if ("string" != typeof e) {
                        for (i = 0; i < this.length; i += 1) for (var n in e) this[i].style[n] = e[n];
                        return this;
                    }
                    if (this[0]) return X.getComputedStyle(this[0], null).getPropertyValue(e);
                }
                if (2 !== arguments.length || "string" != typeof e) return this;
                for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
                return this;
            },
            each: function (e) {
                if (!e) return this;
                for (var t = 0; t < this.length; t += 1) if (!1 === e.call(this[t], t, this[t])) return this;
                return this;
            },
            html: function (e) {
                if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
                for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
                return this;
            },
            text: function (e) {
                if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
                for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
                return this;
            },
            is: function (e) {
                var t,
                    i,
                    n = this[0];
                if (!n || void 0 === e) return !1;
                if ("string" == typeof e) {
                    if (n.matches) return n.matches(e);
                    if (n.webkitMatchesSelector) return n.webkitMatchesSelector(e);
                    if (n.msMatchesSelector) return n.msMatchesSelector(e);
                    for (t = T(e), i = 0; i < t.length; i += 1) if (t[i] === n) return !0;
                    return !1;
                }
                if (e === v) return n === v;
                if (e === X) return n === X;
                if (e.nodeType || e instanceof l) {
                    for (t = e.nodeType ? [e] : e, i = 0; i < t.length; i += 1) if (t[i] === n) return !0;
                    return !1;
                }
                return !1;
            },
            index: function () {
                var e,
                    t = this[0];
                if (t) {
                    for (e = 0; null !== (t = t.previousSibling); ) 1 === t.nodeType && (e += 1);
                    return e;
                }
            },
            eq: function (e) {
                if (void 0 === e) return this;
                var t = this.length;
                return new l(t - 1 < e ? [] : e < 0 ? ((t = t + e) < 0 ? [] : [this[t]]) : [this[e]]);
            },
            append: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                for (var i = 0; i < e.length; i += 1)
                    for (var n = e[i], r = 0; r < this.length; r += 1)
                        if ("string" == typeof n) {
                            var a = v.createElement("div");
                            for (a.innerHTML = n; a.firstChild; ) this[r].appendChild(a.firstChild);
                        } else if (n instanceof l) for (var s = 0; s < n.length; s += 1) this[r].appendChild(n[s]);
                        else this[r].appendChild(n);
                return this;
            },
            prepend: function (e) {
                for (var t, i = 0; i < this.length; i += 1)
                    if ("string" == typeof e) {
                        var n = v.createElement("div");
                        for (n.innerHTML = e, t = n.childNodes.length - 1; 0 <= t; --t) this[i].insertBefore(n.childNodes[t], this[i].childNodes[0]);
                    } else if (e instanceof l) for (t = 0; t < e.length; t += 1) this[i].insertBefore(e[t], this[i].childNodes[0]);
                    else this[i].insertBefore(e, this[i].childNodes[0]);
                return this;
            },
            next: function (e) {
                return 0 < this.length
                    ? e
                        ? this[0].nextElementSibling && T(this[0].nextElementSibling).is(e)
                            ? new l([this[0].nextElementSibling])
                            : new l([])
                        : this[0].nextElementSibling
                        ? new l([this[0].nextElementSibling])
                        : new l([])
                    : new l([]);
            },
            nextAll: function (e) {
                var t = [],
                    i = this[0];
                if (!i) return new l([]);
                for (; i.nextElementSibling; ) {
                    var n = i.nextElementSibling;
                    (!e || T(n).is(e)) && t.push(n), (i = n);
                }
                return new l(t);
            },
            prev: function (e) {
                if (0 < this.length) {
                    var t = this[0];
                    return e ? (t.previousElementSibling && T(t.previousElementSibling).is(e) ? new l([t.previousElementSibling]) : new l([])) : t.previousElementSibling ? new l([t.previousElementSibling]) : new l([]);
                }
                return new l([]);
            },
            prevAll: function (e) {
                var t = [],
                    i = this[0];
                if (!i) return new l([]);
                for (; i.previousElementSibling; ) {
                    var n = i.previousElementSibling;
                    (!e || T(n).is(e)) && t.push(n), (i = n);
                }
                return new l(t);
            },
            parent: function (e) {
                for (var t = [], i = 0; i < this.length; i += 1) null === this[i].parentNode || (e && !T(this[i].parentNode).is(e)) || t.push(this[i].parentNode);
                return T(a(t));
            },
            parents: function (e) {
                for (var t = [], i = 0; i < this.length; i += 1) for (var n = this[i].parentNode; n; ) (e && !T(n).is(e)) || t.push(n), (n = n.parentNode);
                return T(a(t));
            },
            closest: function (e) {
                var t = this;
                return void 0 === e ? new l([]) : t.is(e) ? t : t.parents(e).eq(0);
            },
            find: function (e) {
                for (var t = [], i = 0; i < this.length; i += 1) for (var n = this[i].querySelectorAll(e), r = 0; r < n.length; r += 1) t.push(n[r]);
                return new l(t);
            },
            children: function (e) {
                for (var t = [], i = 0; i < this.length; i += 1) for (var n = this[i].childNodes, r = 0; r < n.length; r += 1) e ? 1 === n[r].nodeType && T(n[r]).is(e) && t.push(n[r]) : 1 === n[r].nodeType && t.push(n[r]);
                return new l(a(t));
            },
            filter: function (e) {
                for (var t = [], i = 0; i < this.length; i += 1) e.call(this[i], i, this[i]) && t.push(this[i]);
                return new l(t);
            },
            remove: function () {
                for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                return this;
            },
            add: function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                for (var i = 0; i < e.length; i += 1) for (var n = T(e[i]), r = 0; r < n.length; r += 1) (this[this.length] = n[r]), (this.length += 1);
                return this;
            },
            styles: function () {
                return this[0] ? X.getComputedStyle(this[0], null) : {};
            },
        };
        Object.keys(t).forEach(function (e) {
            T.fn[e] = T.fn[e] || t[e];
        });
        var U = {
                deleteProps: function (e) {
                    var t = e;
                    Object.keys(t).forEach(function (e) {
                        try {
                            t[e] = null;
                        } catch (e) {}
                        try {
                            delete t[e];
                        } catch (e) {}
                    });
                },
                nextTick: function (e, t) {
                    return void 0 === t && (t = 0), setTimeout(e, t);
                },
                now: function () {
                    return Date.now();
                },
                getTranslate: function (e, t) {
                    var i, n, r;
                    void 0 === t && (t = "x");
                    e = X.getComputedStyle(e, null);
                    return (
                        X.WebKitCSSMatrix
                            ? (6 < (n = e.transform || e.webkitTransform).split(",").length &&
                                  (n = n
                                      .split(", ")
                                      .map(function (e) {
                                          return e.replace(",", ".");
                                      })
                                      .join(", ")),
                              (r = new X.WebKitCSSMatrix("none" === n ? "" : n)))
                            : (i = (r = e.MozTransform || e.OTransform || e.MsTransform || e.msTransform || e.transform || e.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(",")),
                        "x" === t && (n = X.WebKitCSSMatrix ? r.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])),
                        (n = "y" === t ? (X.WebKitCSSMatrix ? r.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])) : n) || 0
                    );
                },
                parseUrlQuery: function (e) {
                    var t,
                        i,
                        n,
                        r,
                        a = {},
                        e = e || X.location.href;
                    if ("string" == typeof e && e.length)
                        for (
                            r = (i = (e = -1 < e.indexOf("?") ? e.replace(/\S*\?/, "") : "").split("&").filter(function (e) {
                                return "" !== e;
                            })).length,
                                t = 0;
                            t < r;
                            t += 1
                        )
                            (n = i[t].replace(/#\S+/g, "").split("=")), (a[decodeURIComponent(n[0])] = void 0 === n[1] ? void 0 : decodeURIComponent(n[1]) || "");
                    return a;
                },
                isObject: function (e) {
                    return "object" == typeof e && null !== e && e.constructor && e.constructor === Object;
                },
                extend: function () {
                    for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                    for (var i = Object(e[0]), n = 1; n < e.length; n += 1) {
                        var r = e[n];
                        if (null != r)
                            for (var a = Object.keys(Object(r)), s = 0, o = a.length; s < o; s += 1) {
                                var l = a[s],
                                    d = Object.getOwnPropertyDescriptor(r, l);
                                void 0 !== d && d.enumerable && (U.isObject(i[l]) && U.isObject(r[l]) ? U.extend(i[l], r[l]) : !U.isObject(i[l]) && U.isObject(r[l]) ? ((i[l] = {}), U.extend(i[l], r[l])) : (i[l] = r[l]));
                            }
                    }
                    return i;
                },
            },
            x = {
                touch: !!("ontouchstart" in X || (X.DocumentTouch && v instanceof X.DocumentTouch)),
                pointerEvents: !!X.PointerEvent && "maxTouchPoints" in X.navigator && 0 <= X.navigator.maxTouchPoints,
                observer: "MutationObserver" in X || "WebkitMutationObserver" in X,
                passiveListener: (function () {
                    var e = !1;
                    try {
                        var t = Object.defineProperty({}, "passive", {
                            get: function () {
                                e = !0;
                            },
                        });
                        X.addEventListener("testPassiveListener", null, t);
                    } catch (e) {}
                    return e;
                })(),
                gestures: "ongesturestart" in X,
            },
            i = function (e) {
                void 0 === e && (e = {});
                var t = this;
                (t.params = e),
                    (t.eventsListeners = {}),
                    t.params &&
                        t.params.on &&
                        Object.keys(t.params.on).forEach(function (e) {
                            t.on(e, t.params.on[e]);
                        });
            },
            s = { components: { configurable: !0 } };
        (i.prototype.on = function (e, t, i) {
            var n = this;
            if ("function" != typeof t) return n;
            var r = i ? "unshift" : "push";
            return (
                e.split(" ").forEach(function (e) {
                    n.eventsListeners[e] || (n.eventsListeners[e] = []), n.eventsListeners[e][r](t);
                }),
                n
            );
        }),
            (i.prototype.once = function (i, n, e) {
                var r = this;
                return "function" != typeof n ? r : ((a.f7proxy = n), r.on(i, a, e));
                function a() {
                    for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                    r.off(i, a), a.f7proxy && delete a.f7proxy, n.apply(r, e);
                }
            }),
            (i.prototype.off = function (e, n) {
                var r = this;
                return (
                    r.eventsListeners &&
                        e.split(" ").forEach(function (i) {
                            void 0 === n
                                ? (r.eventsListeners[i] = [])
                                : r.eventsListeners[i] &&
                                  r.eventsListeners[i].length &&
                                  r.eventsListeners[i].forEach(function (e, t) {
                                      (e === n || (e.f7proxy && e.f7proxy === n)) && r.eventsListeners[i].splice(t, 1);
                                  });
                        }),
                    r
                );
            }),
            (i.prototype.emit = function () {
                for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                var i,
                    n,
                    r = this;
                if (!r.eventsListeners) return r;
                var a = "string" == typeof e[0] || Array.isArray(e[0]) ? ((i = e[0]), (n = e.slice(1, e.length)), r) : ((i = e[0].events), (n = e[0].data), e[0].context || r);
                return (
                    (Array.isArray(i) ? i : i.split(" ")).forEach(function (e) {
                        var t;
                        r.eventsListeners &&
                            r.eventsListeners[e] &&
                            ((t = []),
                            r.eventsListeners[e].forEach(function (e) {
                                t.push(e);
                            }),
                            t.forEach(function (e) {
                                e.apply(a, n);
                            }));
                    }),
                    r
                );
            }),
            (i.prototype.useModulesParams = function (t) {
                var i = this;
                i.modules &&
                    Object.keys(i.modules).forEach(function (e) {
                        e = i.modules[e];
                        e.params && U.extend(t, e.params);
                    });
            }),
            (i.prototype.useModules = function (t) {
                void 0 === t && (t = {});
                var n = this;
                n.modules &&
                    Object.keys(n.modules).forEach(function (e) {
                        var i = n.modules[e],
                            e = t[e] || {};
                        i.instance &&
                            Object.keys(i.instance).forEach(function (e) {
                                var t = i.instance[e];
                                n[e] = "function" == typeof t ? t.bind(n) : t;
                            }),
                            i.on &&
                                n.on &&
                                Object.keys(i.on).forEach(function (e) {
                                    n.on(e, i.on[e]);
                                }),
                            i.create && i.create.bind(n)(e);
                    });
            }),
            (s.components.set = function (e) {
                this.use && this.use(e);
            }),
            (i.installModule = function (t) {
                for (var e = [], i = arguments.length - 1; 0 < i--; ) e[i] = arguments[i + 1];
                var n = this;
                n.prototype.modules || (n.prototype.modules = {});
                var r = t.name || Object.keys(n.prototype.modules).length + "_" + U.now();
                return (
                    (n.prototype.modules[r] = t).proto &&
                        Object.keys(t.proto).forEach(function (e) {
                            n.prototype[e] = t.proto[e];
                        }),
                    t.static &&
                        Object.keys(t.static).forEach(function (e) {
                            n[e] = t.static[e];
                        }),
                    t.install && t.install.apply(n, e),
                    n
                );
            }),
            (i.use = function (e) {
                for (var t = [], i = arguments.length - 1; 0 < i--; ) t[i] = arguments[i + 1];
                var n = this;
                return Array.isArray(e)
                    ? (e.forEach(function (e) {
                          return n.installModule(e);
                      }),
                      n)
                    : n.installModule.apply(n, [e].concat(t));
            }),
            Object.defineProperties(i, s);
        var o = {
            updateSize: function () {
                var e = this.$el,
                    t = void 0 !== this.params.width ? this.params.width : e[0].clientWidth,
                    i = void 0 !== this.params.height ? this.params.height : e[0].clientHeight;
                (0 === t && this.isHorizontal()) ||
                    (0 === i && this.isVertical()) ||
                    ((t = t - parseInt(e.css("padding-left"), 10) - parseInt(e.css("padding-right"), 10)),
                    (i = i - parseInt(e.css("padding-top"), 10) - parseInt(e.css("padding-bottom"), 10)),
                    U.extend(this, { width: t, height: i, size: this.isHorizontal() ? t : i }));
            },
            updateSlides: function () {
                var e = this,
                    t = e.params,
                    i = e.$wrapperEl,
                    n = e.size,
                    r = e.rtlTranslate,
                    a = e.wrongRTL,
                    s = ((v = e.virtual && t.virtual.enabled) ? e.virtual : e).slides.length,
                    o = i.children("." + e.params.slideClass),
                    l = (v ? e.virtual.slides : o).length,
                    d = [],
                    u = [],
                    c = [];
                function h(e) {
                    return !t.cssMode || e !== o.length - 1;
                }
                var p = t.slidesOffsetBefore;
                "function" == typeof p && (p = t.slidesOffsetBefore.call(e));
                var f = t.slidesOffsetAfter;
                "function" == typeof f && (f = t.slidesOffsetAfter.call(e));
                var m,
                    g = e.snapGrid.length,
                    v = e.snapGrid.length,
                    y = t.spaceBetween,
                    b = -p,
                    w = 0,
                    x = 0;
                if (void 0 !== n) {
                    "string" == typeof y && 0 <= y.indexOf("%") && (y = (parseFloat(y.replace("%", "")) / 100) * n),
                        (e.virtualSize = -y),
                        r ? o.css({ marginLeft: "", marginTop: "" }) : o.css({ marginRight: "", marginBottom: "" }),
                        1 < t.slidesPerColumn &&
                            ((m = Math.floor(l / t.slidesPerColumn) === l / e.params.slidesPerColumn ? l : Math.ceil(l / t.slidesPerColumn) * t.slidesPerColumn),
                            "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (m = Math.max(m, t.slidesPerView * t.slidesPerColumn)));
                    for (var C, T, E, S, _ = t.slidesPerColumn, k = m / _, M = Math.floor(l / t.slidesPerColumn), D = 0; D < l; D += 1) {
                        N = 0;
                        var I,
                            L,
                            O,
                            A,
                            P,
                            N,
                            z,
                            B,
                            j,
                            H,
                            R,
                            $,
                            q = o.eq(D);
                        1 < t.slidesPerColumn &&
                            ((P = A = O = void 0),
                            "row" === t.slidesPerColumnFill && 1 < t.slidesPerGroup
                                ? (($ = Math.floor(D / (t.slidesPerGroup * t.slidesPerColumn))),
                                  (I = D - t.slidesPerColumn * t.slidesPerGroup * $),
                                  (L = 0 === $ ? t.slidesPerGroup : Math.min(Math.ceil((l - $ * _ * t.slidesPerGroup) / _), t.slidesPerGroup)),
                                  (O = (A = I - (P = Math.floor(I / L)) * L + $ * t.slidesPerGroup) + (P * m) / _),
                                  q.css({ "-webkit-box-ordinal-group": O, "-moz-box-ordinal-group": O, "-ms-flex-order": O, "-webkit-order": O, order: O }))
                                : "column" === t.slidesPerColumnFill
                                ? ((P = D - (A = Math.floor(D / _)) * _), (M < A || (A === M && P === _ - 1)) && _ <= (P += 1) && ((P = 0), (A += 1)))
                                : (A = D - (P = Math.floor(D / k)) * k),
                            q.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== P && t.spaceBetween && t.spaceBetween + "px")),
                            "none" !== q.css("display") &&
                                ("auto" === t.slidesPerView
                                    ? (($ = X.getComputedStyle(q[0], null)),
                                      (O = q[0].style.transform),
                                      (A = q[0].style.webkitTransform),
                                      O && (q[0].style.transform = "none"),
                                      A && (q[0].style.webkitTransform = "none"),
                                      (N = t.roundLengths
                                          ? e.isHorizontal()
                                              ? q.outerWidth(!0)
                                              : q.outerHeight(!0)
                                          : e.isHorizontal()
                                          ? ((z = parseFloat($.getPropertyValue("width"))),
                                            (B = parseFloat($.getPropertyValue("padding-left"))),
                                            (j = parseFloat($.getPropertyValue("padding-right"))),
                                            (H = parseFloat($.getPropertyValue("margin-left"))),
                                            (R = parseFloat($.getPropertyValue("margin-right"))),
                                            (P = $.getPropertyValue("box-sizing")) && "border-box" === P ? z + H + R : z + B + j + H + R)
                                          : ((z = parseFloat($.getPropertyValue("height"))),
                                            (B = parseFloat($.getPropertyValue("padding-top"))),
                                            (j = parseFloat($.getPropertyValue("padding-bottom"))),
                                            (H = parseFloat($.getPropertyValue("margin-top"))),
                                            (R = parseFloat($.getPropertyValue("margin-bottom"))),
                                            ($ = $.getPropertyValue("box-sizing")) && "border-box" === $ ? z + H + R : z + B + j + H + R)),
                                      O && (q[0].style.transform = O),
                                      A && (q[0].style.webkitTransform = A),
                                      t.roundLengths && (N = Math.floor(N)))
                                    : ((N = (n - (t.slidesPerView - 1) * y) / t.slidesPerView), t.roundLengths && (N = Math.floor(N)), o[D] && (e.isHorizontal() ? (o[D].style.width = N + "px") : (o[D].style.height = N + "px"))),
                                o[D] && (o[D].swiperSlideSize = N),
                                c.push(N),
                                t.centeredSlides
                                    ? ((b = b + N / 2 + w / 2 + y),
                                      0 === w && 0 !== D && (b = b - n / 2 - y),
                                      0 === D && (b = b - n / 2 - y),
                                      Math.abs(b) < 0.001 && (b = 0),
                                      t.roundLengths && (b = Math.floor(b)),
                                      x % t.slidesPerGroup == 0 && d.push(b),
                                      u.push(b))
                                    : (t.roundLengths && (b = Math.floor(b)), (x - Math.min(e.params.slidesPerGroupSkip, x)) % e.params.slidesPerGroup == 0 && d.push(b), u.push(b), (b = b + N + y)),
                                (e.virtualSize += N + y),
                                (w = N),
                                (x += 1));
                    }
                    if (
                        ((e.virtualSize = Math.max(e.virtualSize, n) + f),
                        r && a && ("slide" === t.effect || "coverflow" === t.effect) && i.css({ width: e.virtualSize + t.spaceBetween + "px" }),
                        t.setWrapperSize && (e.isHorizontal() ? i.css({ width: e.virtualSize + t.spaceBetween + "px" }) : i.css({ height: e.virtualSize + t.spaceBetween + "px" })),
                        1 < t.slidesPerColumn &&
                            ((e.virtualSize = (N + t.spaceBetween) * m),
                            (e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween),
                            e.isHorizontal() ? i.css({ width: e.virtualSize + t.spaceBetween + "px" }) : i.css({ height: e.virtualSize + t.spaceBetween + "px" }),
                            t.centeredSlides))
                    ) {
                        for (var W = [], F = 0; F < d.length; F += 1) {
                            var Y = d[F];
                            t.roundLengths && (Y = Math.floor(Y)), d[F] < e.virtualSize + d[0] && W.push(Y);
                        }
                        d = W;
                    }
                    if (!t.centeredSlides) {
                        W = [];
                        for (var V = 0; V < d.length; V += 1) {
                            var G = d[V];
                            t.roundLengths && (G = Math.floor(G)), d[V] <= e.virtualSize - n && W.push(G);
                        }
                        (d = W), 1 < Math.floor(e.virtualSize - n) - Math.floor(d[d.length - 1]) && d.push(e.virtualSize - n);
                    }
                    0 === d.length && (d = [0]),
                        0 !== t.spaceBetween && (e.isHorizontal() ? (r ? o.filter(h).css({ marginLeft: y + "px" }) : o.filter(h).css({ marginRight: y + "px" })) : o.filter(h).css({ marginBottom: y + "px" })),
                        t.centeredSlides &&
                            t.centeredSlidesBounds &&
                            ((C = 0),
                            c.forEach(function (e) {
                                C += e + (t.spaceBetween || 0);
                            }),
                            (T = (C -= t.spaceBetween) - n),
                            (d = d.map(function (e) {
                                return e < 0 ? -p : T < e ? T + f : e;
                            }))),
                        t.centerInsufficientSlides &&
                            ((E = 0),
                            c.forEach(function (e) {
                                E += e + (t.spaceBetween || 0);
                            }),
                            (E -= t.spaceBetween) < n &&
                                ((S = (n - E) / 2),
                                d.forEach(function (e, t) {
                                    d[t] = e - S;
                                }),
                                u.forEach(function (e, t) {
                                    u[t] = e + S;
                                }))),
                        U.extend(e, { slides: o, snapGrid: d, slidesGrid: u, slidesSizesGrid: c }),
                        l !== s && e.emit("slidesLengthChange"),
                        d.length !== g && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")),
                        u.length !== v && e.emit("slidesGridLengthChange"),
                        (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset();
                }
            },
            updateAutoHeight: function (e) {
                var t,
                    i,
                    n = this,
                    r = [],
                    a = 0;
                if (("number" == typeof e ? n.setTransition(e) : !0 === e && n.setTransition(n.params.speed), "auto" !== n.params.slidesPerView && 1 < n.params.slidesPerView))
                    if (n.params.centeredSlides)
                        n.visibleSlides.each(function (e, t) {
                            r.push(t);
                        });
                    else
                        for (t = 0; t < Math.ceil(n.params.slidesPerView); t += 1) {
                            var s = n.activeIndex + t;
                            if (s > n.slides.length) break;
                            r.push(n.slides.eq(s)[0]);
                        }
                else r.push(n.slides.eq(n.activeIndex)[0]);
                for (t = 0; t < r.length; t += 1) void 0 !== r[t] && (a = a < (i = r[t].offsetHeight) ? i : a);
                a && n.$wrapperEl.css("height", a + "px");
            },
            updateSlidesOffset: function () {
                for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop;
            },
            updateSlidesProgress: function (e) {
                void 0 === e && (e = (this && this.translate) || 0);
                var t = this,
                    i = t.params,
                    n = t.slides,
                    r = t.rtlTranslate;
                if (0 !== n.length) {
                    void 0 === n[0].swiperSlideOffset && t.updateSlidesOffset();
                    var a = r ? e : -e;
                    n.removeClass(i.slideVisibleClass), (t.visibleSlidesIndexes = []), (t.visibleSlides = []);
                    for (var s = 0; s < n.length; s += 1) {
                        var o,
                            l,
                            d = n[s],
                            u = (a + (i.centeredSlides ? t.minTranslate() : 0) - d.swiperSlideOffset) / (d.swiperSlideSize + i.spaceBetween);
                        (i.watchSlidesVisibility || (i.centeredSlides && i.autoHeight)) &&
                            ((l = (o = -(a - d.swiperSlideOffset)) + t.slidesSizesGrid[s]),
                            ((0 <= o && o < t.size - 1) || (1 < l && l <= t.size) || (o <= 0 && l >= t.size)) && (t.visibleSlides.push(d), t.visibleSlidesIndexes.push(s), n.eq(s).addClass(i.slideVisibleClass))),
                            (d.progress = r ? -u : u);
                    }
                    t.visibleSlides = T(t.visibleSlides);
                }
            },
            updateProgress: function (e) {
                var t = this;
                void 0 === e && ((o = t.rtlTranslate ? -1 : 1), (e = (t && t.translate && t.translate * o) || 0));
                var i = t.params,
                    n = t.maxTranslate() - t.minTranslate(),
                    r = t.progress,
                    a = t.isBeginning,
                    s = a,
                    o = (l = t.isEnd),
                    l = 0 == n ? (a = !(r = 0)) : ((a = (r = (e - t.minTranslate()) / n) <= 0), 1 <= r);
                U.extend(t, { progress: r, isBeginning: a, isEnd: l }),
                    (i.watchSlidesProgress || i.watchSlidesVisibility || (i.centeredSlides && i.autoHeight)) && t.updateSlidesProgress(e),
                    a && !s && t.emit("reachBeginning toEdge"),
                    l && !o && t.emit("reachEnd toEdge"),
                    ((s && !a) || (o && !l)) && t.emit("fromEdge"),
                    t.emit("progress", r);
            },
            updateSlidesClasses: function () {
                var e = this.slides,
                    t = this.params,
                    i = this.$wrapperEl,
                    n = this.activeIndex,
                    r = this.realIndex,
                    a = this.virtual && t.virtual.enabled;
                e.removeClass(t.slideActiveClass + " " + t.slideNextClass + " " + t.slidePrevClass + " " + t.slideDuplicateActiveClass + " " + t.slideDuplicateNextClass + " " + t.slideDuplicatePrevClass),
                    (n = a ? this.$wrapperEl.find("." + t.slideClass + '[data-swiper-slide-index="' + n + '"]') : e.eq(n)).addClass(t.slideActiveClass),
                    t.loop &&
                        (n.hasClass(t.slideDuplicateClass)
                            ? i.children("." + t.slideClass + ":not(." + t.slideDuplicateClass + ')[data-swiper-slide-index="' + r + '"]')
                            : i.children("." + t.slideClass + "." + t.slideDuplicateClass + '[data-swiper-slide-index="' + r + '"]')
                        ).addClass(t.slideDuplicateActiveClass),
                    (r = n
                        .nextAll("." + t.slideClass)
                        .eq(0)
                        .addClass(t.slideNextClass)),
                    t.loop && 0 === r.length && (r = e.eq(0)).addClass(t.slideNextClass),
                    (n = n
                        .prevAll("." + t.slideClass)
                        .eq(0)
                        .addClass(t.slidePrevClass)),
                    t.loop && 0 === n.length && (n = e.eq(-1)).addClass(t.slidePrevClass),
                    t.loop &&
                        ((r.hasClass(t.slideDuplicateClass)
                            ? i.children("." + t.slideClass + ":not(." + t.slideDuplicateClass + ')[data-swiper-slide-index="' + r.attr("data-swiper-slide-index") + '"]')
                            : i.children("." + t.slideClass + "." + t.slideDuplicateClass + '[data-swiper-slide-index="' + r.attr("data-swiper-slide-index") + '"]')
                        ).addClass(t.slideDuplicateNextClass),
                        (n.hasClass(t.slideDuplicateClass)
                            ? i.children("." + t.slideClass + ":not(." + t.slideDuplicateClass + ')[data-swiper-slide-index="' + n.attr("data-swiper-slide-index") + '"]')
                            : i.children("." + t.slideClass + "." + t.slideDuplicateClass + '[data-swiper-slide-index="' + n.attr("data-swiper-slide-index") + '"]')
                        ).addClass(t.slideDuplicatePrevClass));
            },
            updateActiveIndex: function (e) {
                var t = this,
                    i = t.rtlTranslate ? t.translate : -t.translate,
                    n = t.slidesGrid,
                    r = t.snapGrid,
                    a = t.params,
                    s = t.activeIndex,
                    o = t.realIndex,
                    l = t.snapIndex,
                    d = e;
                if (void 0 === d) {
                    for (var u = 0; u < n.length; u += 1) void 0 !== n[u + 1] ? (i >= n[u] && i < n[u + 1] - (n[u + 1] - n[u]) / 2 ? (d = u) : i >= n[u] && i < n[u + 1] && (d = u + 1)) : i >= n[u] && (d = u);
                    a.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
                }
                (a = 0 <= r.indexOf(i) ? r.indexOf(i) : (e = Math.min(a.slidesPerGroupSkip, d)) + Math.floor((d - e) / a.slidesPerGroup)) >= r.length && (a = r.length - 1),
                    d !== s
                        ? ((r = parseInt(t.slides.eq(d).attr("data-swiper-slide-index") || d, 10)),
                          U.extend(t, { snapIndex: a, realIndex: r, previousIndex: s, activeIndex: d }),
                          t.emit("activeIndexChange"),
                          t.emit("snapIndexChange"),
                          o !== r && t.emit("realIndexChange"),
                          (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange"))
                        : a !== l && ((t.snapIndex = a), t.emit("snapIndexChange"));
            },
            updateClickedSlide: function (e) {
                var t = this,
                    i = t.params,
                    n = T(e.target).closest("." + i.slideClass)[0],
                    r = !1;
                if (n) for (var a = 0; a < t.slides.length; a += 1) t.slides[a] === n && (r = !0);
                if (!n || !r) return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
                (t.clickedSlide = n),
                    t.virtual && t.params.virtual.enabled ? (t.clickedIndex = parseInt(T(n).attr("data-swiper-slide-index"), 10)) : (t.clickedIndex = T(n).index()),
                    i.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide();
            },
        };
        var d = {
            getTranslate: function (e) {
                void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                var t = this.params,
                    i = this.rtlTranslate,
                    n = this.translate,
                    r = this.$wrapperEl;
                return t.virtualTranslate ? (i ? -n : n) : t.cssMode ? n : ((e = U.getTranslate(r[0], e)), (e = i ? -e : e) || 0);
            },
            setTranslate: function (e, t) {
                var i = this,
                    n = i.rtlTranslate,
                    r = i.params,
                    a = i.$wrapperEl,
                    s = i.wrapperEl,
                    o = i.progress,
                    l = 0,
                    d = 0;
                i.isHorizontal() ? (l = n ? -e : e) : (d = e),
                    r.roundLengths && ((l = Math.floor(l)), (d = Math.floor(d))),
                    r.cssMode ? (s[i.isHorizontal() ? "scrollLeft" : "scrollTop"] = i.isHorizontal() ? -l : -d) : r.virtualTranslate || a.transform("translate3d(" + l + "px, " + d + "px, 0px)"),
                    (i.previousTranslate = i.translate),
                    (i.translate = i.isHorizontal() ? l : d),
                    (0 == (d = i.maxTranslate() - i.minTranslate()) ? 0 : (e - i.minTranslate()) / d) !== o && i.updateProgress(e),
                    i.emit("setTranslate", i.translate, t);
            },
            minTranslate: function () {
                return -this.snapGrid[0];
            },
            maxTranslate: function () {
                return -this.snapGrid[this.snapGrid.length - 1];
            },
            translateTo: function (e, t, i, n, r) {
                void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), void 0 === n && (n = !0);
                var a = this,
                    s = a.params,
                    o = a.wrapperEl;
                if (a.animating && s.preventInteractionOnTransition) return !1;
                var l = a.minTranslate(),
                    d = a.maxTranslate(),
                    d = n && l < e ? l : n && e < d ? d : e;
                if ((a.updateProgress(d), s.cssMode)) {
                    e = a.isHorizontal();
                    return 0 !== t && o.scrollTo ? o.scrollTo((((s = {})[e ? "left" : "top"] = -d), (s.behavior = "smooth"), s)) : (o[e ? "scrollLeft" : "scrollTop"] = -d), !0;
                }
                return (
                    0 === t
                        ? (a.setTransition(0), a.setTranslate(d), i && (a.emit("beforeTransitionStart", t, r), a.emit("transitionEnd")))
                        : (a.setTransition(t),
                          a.setTranslate(d),
                          i && (a.emit("beforeTransitionStart", t, r), a.emit("transitionStart")),
                          a.animating ||
                              ((a.animating = !0),
                              a.onTranslateToWrapperTransitionEnd ||
                                  (a.onTranslateToWrapperTransitionEnd = function (e) {
                                      a &&
                                          !a.destroyed &&
                                          e.target === this &&
                                          (a.$wrapperEl[0].removeEventListener("transitionend", a.onTranslateToWrapperTransitionEnd),
                                          a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onTranslateToWrapperTransitionEnd),
                                          (a.onTranslateToWrapperTransitionEnd = null),
                                          delete a.onTranslateToWrapperTransitionEnd,
                                          i && a.emit("transitionEnd"));
                                  }),
                              a.$wrapperEl[0].addEventListener("transitionend", a.onTranslateToWrapperTransitionEnd),
                              a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onTranslateToWrapperTransitionEnd))),
                    !0
                );
            },
        };
        var u = {
            setTransition: function (e, t) {
                this.params.cssMode || this.$wrapperEl.transition(e), this.emit("setTransition", e, t);
            },
            transitionStart: function (e, t) {
                void 0 === e && (e = !0);
                var i = this.activeIndex,
                    n = this.params,
                    r = this.previousIndex;
                n.cssMode ||
                    (n.autoHeight && this.updateAutoHeight(),
                    (t = (t = t) || (r < i ? "next" : i < r ? "prev" : "reset")),
                    this.emit("transitionStart"),
                    e && i !== r && ("reset" !== t ? (this.emit("slideChangeTransitionStart"), "next" === t ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart")) : this.emit("slideResetTransitionStart")));
            },
            transitionEnd: function (e, t) {
                void 0 === e && (e = !0);
                var i = this,
                    n = i.activeIndex,
                    r = i.previousIndex,
                    a = i.params;
                (i.animating = !1),
                    a.cssMode ||
                        (i.setTransition(0),
                        (t = (t = t) || (r < n ? "next" : n < r ? "prev" : "reset")),
                        i.emit("transitionEnd"),
                        e && n !== r && ("reset" !== t ? (i.emit("slideChangeTransitionEnd"), "next" === t ? i.emit("slideNextTransitionEnd") : i.emit("slidePrevTransitionEnd")) : i.emit("slideResetTransitionEnd")));
            },
        };
        var c = {
            slideTo: function (e, t, i, n) {
                void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
                var r = this,
                    a = e;
                a < 0 && (a = 0);
                var s = r.params,
                    o = r.snapGrid,
                    l = r.slidesGrid,
                    d = r.previousIndex,
                    u = r.activeIndex,
                    c = r.rtlTranslate,
                    h = r.wrapperEl;
                if (r.animating && s.preventInteractionOnTransition) return !1;
                (e = Math.min(r.params.slidesPerGroupSkip, a)), (e += Math.floor((a - e) / r.params.slidesPerGroup)) >= o.length && (e = o.length - 1), (u || s.initialSlide || 0) === (d || 0) && i && r.emit("beforeSlideChangeStart");
                var p,
                    f = -o[e];
                if ((r.updateProgress(f), s.normalizeSlideIndex)) for (var m = 0; m < l.length; m += 1) -Math.floor(100 * f) >= Math.floor(100 * l[m]) && (a = m);
                if (r.initialized && a !== u) {
                    if (!r.allowSlideNext && f < r.translate && f < r.minTranslate()) return !1;
                    if (!r.allowSlidePrev && f > r.translate && f > r.maxTranslate() && (u || 0) !== a) return !1;
                }
                if (((p = u < a ? "next" : a < u ? "prev" : "reset"), (c && -f === r.translate) || (!c && f === r.translate)))
                    return r.updateActiveIndex(a), s.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== s.effect && r.setTranslate(f), "reset" !== p && (r.transitionStart(i, p), r.transitionEnd(i, p)), !1;
                if (s.cssMode) {
                    (u = r.isHorizontal()), (s = -f);
                    return c && (s = h.scrollWidth - h.offsetWidth - s), 0 !== t && h.scrollTo ? h.scrollTo((((c = {})[u ? "left" : "top"] = s), (c.behavior = "smooth"), c)) : (h[u ? "scrollLeft" : "scrollTop"] = s), !0;
                }
                return (
                    0 === t
                        ? (r.setTransition(0), r.setTranslate(f), r.updateActiveIndex(a), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, n), r.transitionStart(i, p), r.transitionEnd(i, p))
                        : (r.setTransition(t),
                          r.setTranslate(f),
                          r.updateActiveIndex(a),
                          r.updateSlidesClasses(),
                          r.emit("beforeTransitionStart", t, n),
                          r.transitionStart(i, p),
                          r.animating ||
                              ((r.animating = !0),
                              r.onSlideToWrapperTransitionEnd ||
                                  (r.onSlideToWrapperTransitionEnd = function (e) {
                                      r &&
                                          !r.destroyed &&
                                          e.target === this &&
                                          (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd),
                                          r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd),
                                          (r.onSlideToWrapperTransitionEnd = null),
                                          delete r.onSlideToWrapperTransitionEnd,
                                          r.transitionEnd(i, p));
                                  }),
                              r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd),
                              r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd))),
                    !0
                );
            },
            slideToLoop: function (e, t, i, n) {
                return void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), this.params.loop && (e += this.loopedSlides), this.slideTo(e, t, i, n);
            },
            slideNext: function (e, t, i) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                var n = this.params,
                    r = this.animating,
                    a = this.activeIndex < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup;
                if (n.loop) {
                    if (r) return !1;
                    this.loopFix(), (this._clientLeft = this.$wrapperEl[0].clientLeft);
                }
                return this.slideTo(this.activeIndex + a, e, t, i);
            },
            slidePrev: function (e, t, i) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                var n = this,
                    r = n.params,
                    a = n.animating,
                    s = n.snapGrid,
                    o = n.slidesGrid,
                    l = n.rtlTranslate;
                if (r.loop) {
                    if (a) return !1;
                    n.loopFix(), (n._clientLeft = n.$wrapperEl[0].clientLeft);
                }
                function d(e) {
                    return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
                }
                var u,
                    c = d(l ? n.translate : -n.translate),
                    l = s.map(d),
                    h = (o.map(d), s[l.indexOf(c)], s[l.indexOf(c) - 1]);
                return (
                    void 0 === h &&
                        r.cssMode &&
                        s.forEach(function (e) {
                            !h && e <= c && (h = e);
                        }),
                    void 0 !== h && (u = o.indexOf(h)) < 0 && (u = n.activeIndex - 1),
                    n.slideTo(u, e, t, i)
                );
            },
            slideReset: function (e, t, i) {
                return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i);
            },
            slideToClosest: function (e, t, i, n) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === n && (n = 0.5);
                var r = this,
                    a = r.activeIndex,
                    s = Math.min(r.params.slidesPerGroupSkip, a),
                    o = s + Math.floor((a - s) / r.params.slidesPerGroup),
                    l = r.rtlTranslate ? r.translate : -r.translate;
                return (
                    l >= r.snapGrid[o] ? ((s = r.snapGrid[o]), (r.snapGrid[o + 1] - s) * n < l - s && (a += r.params.slidesPerGroup)) : l - (l = r.snapGrid[o - 1]) <= (r.snapGrid[o] - l) * n && (a -= r.params.slidesPerGroup),
                    (a = Math.max(a, 0)),
                    (a = Math.min(a, r.slidesGrid.length - 1)),
                    r.slideTo(a, e, t, i)
                );
            },
            slideToClickedSlide: function () {
                var e,
                    t = this,
                    i = t.params,
                    n = t.$wrapperEl,
                    r = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView,
                    a = t.clickedIndex;
                i.loop
                    ? t.animating ||
                      ((e = parseInt(T(t.clickedSlide).attr("data-swiper-slide-index"), 10)),
                      i.centeredSlides
                          ? a < t.loopedSlides - r / 2 || a > t.slides.length - t.loopedSlides + r / 2
                              ? (t.loopFix(),
                                (a = n
                                    .children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")")
                                    .eq(0)
                                    .index()),
                                U.nextTick(function () {
                                    t.slideTo(a);
                                }))
                              : t.slideTo(a)
                          : a > t.slides.length - r
                          ? (t.loopFix(),
                            (a = n
                                .children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")")
                                .eq(0)
                                .index()),
                            U.nextTick(function () {
                                t.slideTo(a);
                            }))
                          : t.slideTo(a))
                    : t.slideTo(a);
            },
        };
        var h = {
            loopCreate: function () {
                var n = this,
                    e = n.params,
                    t = n.$wrapperEl;
                t.children("." + e.slideClass + "." + e.slideDuplicateClass).remove();
                var r = t.children("." + e.slideClass);
                if (e.loopFillGroupWithBlank) {
                    var i = e.slidesPerGroup - (r.length % e.slidesPerGroup);
                    if (i !== e.slidesPerGroup) {
                        for (var a = 0; a < i; a += 1) {
                            var s = T(v.createElement("div")).addClass(e.slideClass + " " + e.slideBlankClass);
                            t.append(s);
                        }
                        r = t.children("." + e.slideClass);
                    }
                }
                "auto" !== e.slidesPerView || e.loopedSlides || (e.loopedSlides = r.length),
                    (n.loopedSlides = Math.ceil(parseFloat(e.loopedSlides || e.slidesPerView, 10))),
                    (n.loopedSlides += e.loopAdditionalSlides),
                    n.loopedSlides > r.length && (n.loopedSlides = r.length);
                var o = [],
                    l = [];
                r.each(function (e, t) {
                    var i = T(t);
                    e < n.loopedSlides && l.push(t), e < r.length && e >= r.length - n.loopedSlides && o.push(t), i.attr("data-swiper-slide-index", e);
                });
                for (var d = 0; d < l.length; d += 1) t.append(T(l[d].cloneNode(!0)).addClass(e.slideDuplicateClass));
                for (var u = o.length - 1; 0 <= u; --u) t.prepend(T(o[u].cloneNode(!0)).addClass(e.slideDuplicateClass));
            },
            loopFix: function () {
                var e = this;
                e.emit("beforeLoopFix");
                var t = e.activeIndex,
                    i = e.slides,
                    n = e.loopedSlides,
                    r = e.allowSlidePrev,
                    a = e.allowSlideNext,
                    s = e.snapGrid,
                    o = e.rtlTranslate;
                (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
                var l,
                    s = -s[t] - e.getTranslate();
                t < n
                    ? ((l = i.length - 3 * n + t), (l += n), e.slideTo(l, 0, !1, !0) && 0 != s && e.setTranslate((o ? -e.translate : e.translate) - s))
                    : t >= i.length - n && ((l = -i.length + t + n), (l += n), e.slideTo(l, 0, !1, !0) && 0 != s && e.setTranslate((o ? -e.translate : e.translate) - s)),
                    (e.allowSlidePrev = r),
                    (e.allowSlideNext = a),
                    e.emit("loopFix");
            },
            loopDestroy: function () {
                var e = this.$wrapperEl,
                    t = this.params,
                    i = this.slides;
                e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(), i.removeAttr("data-swiper-slide-index");
            },
        };
        var p = {
            setGrabCursor: function (e) {
                var t;
                x.touch ||
                    !this.params.simulateTouch ||
                    (this.params.watchOverflow && this.isLocked) ||
                    this.params.cssMode ||
                    (((t = this.el).style.cursor = "move"), (t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"), (t.style.cursor = e ? "-moz-grabbin" : "-moz-grab"), (t.style.cursor = e ? "grabbing" : "grab"));
            },
            unsetGrabCursor: function () {
                x.touch || (this.params.watchOverflow && this.isLocked) || this.params.cssMode || (this.el.style.cursor = "");
            },
        };
        var f,
            m,
            g,
            y,
            b,
            w,
            C,
            E,
            S,
            _,
            k,
            M,
            D = {
                appendSlide: function (e) {
                    var t = this.$wrapperEl,
                        i = this.params;
                    if ((i.loop && this.loopDestroy(), "object" == typeof e && "length" in e)) for (var n = 0; n < e.length; n += 1) e[n] && t.append(e[n]);
                    else t.append(e);
                    i.loop && this.loopCreate(), (i.observer && x.observer) || this.update();
                },
                prependSlide: function (e) {
                    var t = this.params,
                        i = this.$wrapperEl,
                        n = this.activeIndex;
                    t.loop && this.loopDestroy();
                    var r = n + 1;
                    if ("object" == typeof e && "length" in e) {
                        for (var a = 0; a < e.length; a += 1) e[a] && i.prepend(e[a]);
                        r = n + e.length;
                    } else i.prepend(e);
                    t.loop && this.loopCreate(), (t.observer && x.observer) || this.update(), this.slideTo(r, 0, !1);
                },
                addSlide: function (e, t) {
                    var i = this,
                        n = i.$wrapperEl,
                        r = i.params,
                        a = i.activeIndex;
                    r.loop && ((a -= i.loopedSlides), i.loopDestroy(), (i.slides = n.children("." + r.slideClass)));
                    var s = i.slides.length;
                    if (e <= 0) i.prependSlide(t);
                    else if (s <= e) i.appendSlide(t);
                    else {
                        for (var o = e < a ? a + 1 : a, l = [], d = s - 1; e <= d; --d) {
                            var u = i.slides.eq(d);
                            u.remove(), l.unshift(u);
                        }
                        if ("object" == typeof t && "length" in t) {
                            for (var c = 0; c < t.length; c += 1) t[c] && n.append(t[c]);
                            o = e < a ? a + t.length : a;
                        } else n.append(t);
                        for (var h = 0; h < l.length; h += 1) n.append(l[h]);
                        r.loop && i.loopCreate(), (r.observer && x.observer) || i.update(), r.loop ? i.slideTo(o + i.loopedSlides, 0, !1) : i.slideTo(o, 0, !1);
                    }
                },
                removeSlide: function (e) {
                    var t = this,
                        i = t.params,
                        n = t.$wrapperEl,
                        r = t.activeIndex;
                    i.loop && ((r -= t.loopedSlides), t.loopDestroy(), (t.slides = n.children("." + i.slideClass)));
                    var a,
                        s = r;
                    if ("object" == typeof e && "length" in e) {
                        for (var o = 0; o < e.length; o += 1) (a = e[o]), t.slides[a] && t.slides.eq(a).remove(), a < s && --s;
                        s = Math.max(s, 0);
                    } else (a = e), t.slides[a] && t.slides.eq(a).remove(), a < s && --s, (s = Math.max(s, 0));
                    i.loop && t.loopCreate(), (i.observer && x.observer) || t.update(), i.loop ? t.slideTo(s + t.loopedSlides, 0, !1) : t.slideTo(s, 0, !1);
                },
                removeAllSlides: function () {
                    for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
                    this.removeSlide(e);
                },
            },
            I =
                ((f = X.navigator.platform),
                (m = X.navigator.userAgent),
                (g = {
                    ios: !1,
                    android: !1,
                    androidChrome: !1,
                    desktop: !1,
                    iphone: !1,
                    ipod: !1,
                    ipad: !1,
                    edge: !1,
                    ie: !1,
                    firefox: !1,
                    macos: !1,
                    windows: !1,
                    cordova: !(!X.cordova && !X.phonegap),
                    phonegap: !(!X.cordova && !X.phonegap),
                    electron: !1,
                }),
                (y = X.screen.width),
                (b = X.screen.height),
                (w = m.match(/(Android);?[\s\/]+([\d.]+)?/)),
                (C = m.match(/(iPad).*OS\s([\d_]+)/)),
                (E = m.match(/(iPod)(.*OS\s([\d_]+))?/)),
                (S = !C && m.match(/(iPhone\sOS|iOS)\s([\d_]+)/)),
                (_ = 0 <= m.indexOf("MSIE ") || 0 <= m.indexOf("Trident/")),
                (k = 0 <= m.indexOf("Edge/")),
                (M = 0 <= m.indexOf("Gecko/") && 0 <= m.indexOf("Firefox/")),
                (e = "Win32" === f),
                (s = 0 <= m.toLowerCase().indexOf("electron")),
                (f = "MacIntel" === f),
                !C && f && x.touch && ((1024 === y && 1366 === b) || (834 === y && 1194 === b) || (834 === y && 1112 === b) || (768 === y && 1024 === b)) && ((C = m.match(/(Version)\/([\d.]+)/)), (f = !1)),
                (g.ie = _),
                (g.edge = k),
                (g.firefox = M),
                w && !e && ((g.os = "android"), (g.osVersion = w[2]), (g.android = !0), (g.androidChrome = 0 <= m.toLowerCase().indexOf("chrome"))),
                (C || S || E) && ((g.os = "ios"), (g.ios = !0)),
                S && !E && ((g.osVersion = S[2].replace(/_/g, ".")), (g.iphone = !0)),
                C && ((g.osVersion = C[2].replace(/_/g, ".")), (g.ipad = !0)),
                E && ((g.osVersion = E[3] ? E[3].replace(/_/g, ".") : null), (g.ipod = !0)),
                g.ios && g.osVersion && 0 <= m.indexOf("Version/") && "10" === g.osVersion.split(".")[0] && (g.osVersion = m.toLowerCase().split("version/")[1].split(" ")[0]),
                (g.webView = !(!(S || C || E) || (!m.match(/.*AppleWebKit(?!.*Safari)/i) && !X.navigator.standalone)) || (X.matchMedia && X.matchMedia("(display-mode: standalone)").matches)),
                (g.webview = g.webView),
                (g.standalone = g.webView),
                (g.desktop = !(g.ios || g.android) || s),
                g.desktop && ((g.electron = s), (g.macos = f), (g.windows = e), g.macos && (g.os = "macos"), g.windows && (g.os = "windows")),
                (g.pixelRatio = X.devicePixelRatio || 1),
                g);
        function L() {
            var e,
                t,
                i = this,
                n = i.params,
                r = i.el;
            (r && 0 === r.offsetWidth) ||
                (n.breakpoints && i.setBreakpoint(),
                (e = i.allowSlideNext),
                (t = i.allowSlidePrev),
                (r = i.snapGrid),
                (i.allowSlideNext = !0),
                (i.allowSlidePrev = !0),
                i.updateSize(),
                i.updateSlides(),
                i.updateSlidesClasses(),
                ("auto" === n.slidesPerView || 1 < n.slidesPerView) && i.isEnd && !i.isBeginning && !i.params.centeredSlides ? i.slideTo(i.slides.length - 1, 0, !1, !0) : i.slideTo(i.activeIndex, 0, !1, !0),
                i.autoplay && i.autoplay.running && i.autoplay.paused && i.autoplay.run(),
                (i.allowSlidePrev = t),
                (i.allowSlideNext = e),
                i.params.watchOverflow && r !== i.snapGrid && i.checkOverflow());
        }
        var O = !1;
        function A() {}
        var P = {
                init: !0,
                direction: "horizontal",
                touchEventsTarget: "container",
                initialSlide: 0,
                speed: 300,
                cssMode: !1,
                updateOnWindowResize: !0,
                preventInteractionOnTransition: !1,
                edgeSwipeDetection: !1,
                edgeSwipeThreshold: 20,
                freeMode: !1,
                freeModeMomentum: !0,
                freeModeMomentumRatio: 1,
                freeModeMomentumBounce: !0,
                freeModeMomentumBounceRatio: 1,
                freeModeMomentumVelocityRatio: 1,
                freeModeSticky: !1,
                freeModeMinimumVelocity: 0.02,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                breakpoints: void 0,
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerColumnFill: "column",
                slidesPerGroup: 1,
                slidesPerGroupSkip: 0,
                centeredSlides: !1,
                centeredSlidesBounds: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                normalizeSlideIndex: !0,
                centerInsufficientSlides: !1,
                watchOverflow: !1,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: 0.5,
                longSwipesMs: 300,
                followFinger: !0,
                allowTouchMove: !0,
                threshold: 0,
                touchMoveStopPropagation: !1,
                touchStartPreventDefault: !0,
                touchStartForcePreventDefault: !1,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                resistance: !0,
                resistanceRatio: 0.85,
                watchSlidesProgress: !1,
                watchSlidesVisibility: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                preloadImages: !0,
                updateOnImagesReady: !0,
                loop: !1,
                loopAdditionalSlides: 0,
                loopedSlides: null,
                loopFillGroupWithBlank: !1,
                allowSlidePrev: !0,
                allowSlideNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                noSwipingSelector: null,
                passiveListeners: !0,
                containerModifierClass: "swiper-container-",
                slideClass: "swiper-slide",
                slideBlankClass: "swiper-slide-invisible-blank",
                slideActiveClass: "swiper-slide-active",
                slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                slideVisibleClass: "swiper-slide-visible",
                slideDuplicateClass: "swiper-slide-duplicate",
                slideNextClass: "swiper-slide-next",
                slideDuplicateNextClass: "swiper-slide-duplicate-next",
                slidePrevClass: "swiper-slide-prev",
                slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                wrapperClass: "swiper-wrapper",
                runCallbacksOnInit: !0,
            },
            N = {
                update: o,
                translate: d,
                transition: u,
                slide: c,
                loop: h,
                grabCursor: p,
                manipulation: D,
                events: {
                    attachEvents: function () {
                        var e = this,
                            t = e.params,
                            i = e.touchEvents,
                            n = e.el,
                            r = e.wrapperEl;
                        (e.onTouchStart = function (e) {
                            var t,
                                i,
                                n,
                                r,
                                a,
                                s = this,
                                o = s.touchEventsData,
                                l = s.params,
                                d = s.touches;
                            (s.animating && l.preventInteractionOnTransition) ||
                                ((i = T((t = (t = e).originalEvent ? t.originalEvent : t).target)),
                                ("wrapper" === l.touchEventsTarget && !i.closest(s.wrapperEl).length) ||
                                    ((o.isTouchEvent = "touchstart" === t.type),
                                    (!o.isTouchEvent && "which" in t && 3 === t.which) ||
                                        (!o.isTouchEvent && "button" in t && 0 < t.button) ||
                                        (o.isTouched && o.isMoved) ||
                                        (l.noSwiping && i.closest(l.noSwipingSelector || "." + l.noSwipingClass)[0]
                                            ? (s.allowClick = !0)
                                            : (l.swipeHandler && !i.closest(l.swipeHandler)[0]) ||
                                              ((d.currentX = ("touchstart" === t.type ? t.targetTouches[0] : t).pageX),
                                              (d.currentY = ("touchstart" === t.type ? t.targetTouches[0] : t).pageY),
                                              (n = d.currentX),
                                              (a = d.currentY),
                                              (r = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection),
                                              (e = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold),
                                              (r && (n <= e || n >= X.screen.width - e)) ||
                                                  (U.extend(o, { isTouched: !0, isMoved: !1, allowTouchCallbacks: !0, isScrolling: void 0, startMoving: void 0 }),
                                                  (d.startX = n),
                                                  (d.startY = a),
                                                  (o.touchStartTime = U.now()),
                                                  (s.allowClick = !0),
                                                  s.updateSize(),
                                                  (s.swipeDirection = void 0),
                                                  0 < l.threshold && (o.allowThresholdMove = !1),
                                                  "touchstart" !== t.type &&
                                                      ((a = !0),
                                                      i.is(o.formElements) && (a = !1),
                                                      v.activeElement && T(v.activeElement).is(o.formElements) && v.activeElement !== i[0] && v.activeElement.blur(),
                                                      (a = a && s.allowTouchMove && l.touchStartPreventDefault),
                                                      (l.touchStartForcePreventDefault || a) && t.preventDefault()),
                                                  s.emit("touchStart", t))))));
                        }.bind(e)),
                            (e.onTouchMove = function (e) {
                                var t = this,
                                    i = t.touchEventsData,
                                    n = t.params,
                                    r = t.touches,
                                    a = t.rtlTranslate,
                                    s = e;
                                if ((s.originalEvent && (s = s.originalEvent), i.isTouched)) {
                                    if (!i.isTouchEvent || "touchmove" === s.type) {
                                        var o = "touchmove" === s.type && s.targetTouches && (s.targetTouches[0] || s.changedTouches[0]),
                                            l = ("touchmove" === s.type ? o : s).pageX,
                                            e = ("touchmove" === s.type ? o : s).pageY;
                                        if (s.preventedByNestedSwiper) return (r.startX = l), void (r.startY = e);
                                        if (!t.allowTouchMove) return (t.allowClick = !1), void (i.isTouched && (U.extend(r, { startX: l, startY: e, currentX: l, currentY: e }), (i.touchStartTime = U.now())));
                                        if (i.isTouchEvent && n.touchReleaseOnEdges && !n.loop)
                                            if (t.isVertical()) {
                                                if ((e < r.startY && t.translate <= t.maxTranslate()) || (e > r.startY && t.translate >= t.minTranslate())) return (i.isTouched = !1), void (i.isMoved = !1);
                                            } else if ((l < r.startX && t.translate <= t.maxTranslate()) || (l > r.startX && t.translate >= t.minTranslate())) return;
                                        if (i.isTouchEvent && v.activeElement && s.target === v.activeElement && T(s.target).is(i.formElements)) return (i.isMoved = !0), void (t.allowClick = !1);
                                        if ((i.allowTouchCallbacks && t.emit("touchMove", s), !(s.targetTouches && 1 < s.targetTouches.length))) {
                                            (r.currentX = l), (r.currentY = e);
                                            (o = r.currentX - r.startX), (l = r.currentY - r.startY);
                                            if (!(t.params.threshold && Math.sqrt(Math.pow(o, 2) + Math.pow(l, 2)) < t.params.threshold))
                                                if (
                                                    (void 0 === i.isScrolling &&
                                                        ((t.isHorizontal() && r.currentY === r.startY) || (t.isVertical() && r.currentX === r.startX)
                                                            ? (i.isScrolling = !1)
                                                            : 25 <= o * o + l * l && ((e = (180 * Math.atan2(Math.abs(l), Math.abs(o))) / Math.PI), (i.isScrolling = t.isHorizontal() ? e > n.touchAngle : 90 - e > n.touchAngle))),
                                                    i.isScrolling && t.emit("touchMoveOpposite", s),
                                                    void 0 === i.startMoving && ((r.currentX === r.startX && r.currentY === r.startY) || (i.startMoving = !0)),
                                                    i.isScrolling)
                                                )
                                                    i.isTouched = !1;
                                                else if (i.startMoving) {
                                                    (t.allowClick = !1),
                                                        !n.cssMode && s.cancelable && s.preventDefault(),
                                                        n.touchMoveStopPropagation && !n.nested && s.stopPropagation(),
                                                        i.isMoved ||
                                                            (n.loop && t.loopFix(),
                                                            (i.startTranslate = t.getTranslate()),
                                                            t.setTransition(0),
                                                            t.animating && t.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
                                                            (i.allowMomentumBounce = !1),
                                                            !n.grabCursor || (!0 !== t.allowSlideNext && !0 !== t.allowSlidePrev) || t.setGrabCursor(!0),
                                                            t.emit("sliderFirstMove", s)),
                                                        t.emit("sliderMove", s),
                                                        (i.isMoved = !0);
                                                    o = t.isHorizontal() ? o : l;
                                                    (r.diff = o), (o *= n.touchRatio), a && (o = -o), (t.swipeDirection = 0 < o ? "prev" : "next"), (i.currentTranslate = o + i.startTranslate);
                                                    (l = !0), (a = n.resistanceRatio);
                                                    if (
                                                        (n.touchReleaseOnEdges && (a = 0),
                                                        0 < o && i.currentTranslate > t.minTranslate()
                                                            ? ((l = !1), n.resistance && (i.currentTranslate = t.minTranslate() - 1 + Math.pow(-t.minTranslate() + i.startTranslate + o, a)))
                                                            : o < 0 && i.currentTranslate < t.maxTranslate() && ((l = !1), n.resistance && (i.currentTranslate = t.maxTranslate() + 1 - Math.pow(t.maxTranslate() - i.startTranslate - o, a))),
                                                        l && (s.preventedByNestedSwiper = !0),
                                                        !t.allowSlideNext && "next" === t.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate),
                                                        !t.allowSlidePrev && "prev" === t.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate),
                                                        0 < n.threshold)
                                                    ) {
                                                        if (!(Math.abs(o) > n.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
                                                        if (!i.allowThresholdMove)
                                                            return (
                                                                (i.allowThresholdMove = !0),
                                                                (r.startX = r.currentX),
                                                                (r.startY = r.currentY),
                                                                (i.currentTranslate = i.startTranslate),
                                                                void (r.diff = t.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY)
                                                            );
                                                    }
                                                    n.followFinger &&
                                                        !n.cssMode &&
                                                        ((n.freeMode || n.watchSlidesProgress || n.watchSlidesVisibility) && (t.updateActiveIndex(), t.updateSlidesClasses()),
                                                        n.freeMode &&
                                                            (0 === i.velocities.length && i.velocities.push({ position: r[t.isHorizontal() ? "startX" : "startY"], time: i.touchStartTime }),
                                                            i.velocities.push({ position: r[t.isHorizontal() ? "currentX" : "currentY"], time: U.now() })),
                                                        t.updateProgress(i.currentTranslate),
                                                        t.setTranslate(i.currentTranslate));
                                                }
                                        }
                                    }
                                } else i.startMoving && i.isScrolling && t.emit("touchMoveOpposite", s);
                            }.bind(e)),
                            (e.onTouchEnd = function (e) {
                                var t = this,
                                    i = t.touchEventsData,
                                    n = t.params,
                                    r = t.touches,
                                    a = t.rtlTranslate,
                                    s = t.$wrapperEl,
                                    o = t.slidesGrid,
                                    l = t.snapGrid,
                                    d = e;
                                if ((d.originalEvent && (d = d.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", d), (i.allowTouchCallbacks = !1), !i.isTouched))
                                    return i.isMoved && n.grabCursor && t.setGrabCursor(!1), (i.isMoved = !1), void (i.startMoving = !1);
                                n.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                                var u,
                                    c = U.now(),
                                    e = c - i.touchStartTime;
                                if (
                                    (t.allowClick && (t.updateClickedSlide(d), t.emit("tap click", d), e < 300 && c - i.lastClickTime < 300 && t.emit("doubleTap doubleClick", d)),
                                    (i.lastClickTime = U.now()),
                                    U.nextTick(function () {
                                        t.destroyed || (t.allowClick = !0);
                                    }),
                                    !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === r.diff || i.currentTranslate === i.startTranslate)
                                )
                                    return (i.isTouched = !1), (i.isMoved = !1), void (i.startMoving = !1);
                                if (((i.isTouched = !1), (i.isMoved = !1), (i.startMoving = !1), (u = n.followFinger ? (a ? t.translate : -t.translate) : -i.currentTranslate), !n.cssMode))
                                    if (n.freeMode)
                                        if (u < -t.minTranslate()) t.slideTo(t.activeIndex);
                                        else if (u > -t.maxTranslate()) t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1);
                                        else {
                                            if (n.freeModeMomentum) {
                                                1 < i.velocities.length
                                                    ? ((v = i.velocities.pop()),
                                                      (p = i.velocities.pop()),
                                                      (h = v.position - p.position),
                                                      (p = v.time - p.time),
                                                      (t.velocity = h / p),
                                                      (t.velocity /= 2),
                                                      Math.abs(t.velocity) < n.freeModeMinimumVelocity && (t.velocity = 0),
                                                      (150 < p || 300 < U.now() - v.time) && (t.velocity = 0))
                                                    : (t.velocity = 0),
                                                    (t.velocity *= n.freeModeMomentumVelocityRatio),
                                                    (i.velocities.length = 0);
                                                var h = 1e3 * n.freeModeMomentumRatio,
                                                    p = t.velocity * h,
                                                    f = t.translate + p;
                                                a && (f = -f);
                                                var m,
                                                    g,
                                                    v = !1,
                                                    p = 20 * Math.abs(t.velocity) * n.freeModeMomentumBounceRatio;
                                                if (f < t.maxTranslate())
                                                    n.freeModeMomentumBounce ? (f + t.maxTranslate() < -p && (f = t.maxTranslate() - p), (m = t.maxTranslate()), (v = !0), (i.allowMomentumBounce = !0)) : (f = t.maxTranslate()),
                                                        n.loop && n.centeredSlides && (g = !0);
                                                else if (f > t.minTranslate())
                                                    n.freeModeMomentumBounce ? (f - t.minTranslate() > p && (f = t.minTranslate() + p), (m = t.minTranslate()), (v = !0), (i.allowMomentumBounce = !0)) : (f = t.minTranslate()),
                                                        n.loop && n.centeredSlides && (g = !0);
                                                else if (n.freeModeSticky) {
                                                    for (var y, b = 0; b < l.length; b += 1)
                                                        if (l[b] > -f) {
                                                            y = b;
                                                            break;
                                                        }
                                                    f = -(f = Math.abs(l[y] - f) < Math.abs(l[y - 1] - f) || "next" === t.swipeDirection ? l[y] : l[y - 1]);
                                                }
                                                if (
                                                    (g &&
                                                        t.once("transitionEnd", function () {
                                                            t.loopFix();
                                                        }),
                                                    0 !== t.velocity)
                                                )
                                                    (h = a ? Math.abs((-f - t.translate) / t.velocity) : Math.abs((f - t.translate) / t.velocity)),
                                                        n.freeModeSticky && (h = (g = Math.abs((a ? -f : f) - t.translate)) < (a = t.slidesSizesGrid[t.activeIndex]) ? n.speed : g < 2 * a ? 1.5 * n.speed : 2.5 * n.speed);
                                                else if (n.freeModeSticky) return void t.slideToClosest();
                                                n.freeModeMomentumBounce && v
                                                    ? (t.updateProgress(m),
                                                      t.setTransition(h),
                                                      t.setTranslate(f),
                                                      t.transitionStart(!0, t.swipeDirection),
                                                      (t.animating = !0),
                                                      s.transitionEnd(function () {
                                                          t &&
                                                              !t.destroyed &&
                                                              i.allowMomentumBounce &&
                                                              (t.emit("momentumBounce"),
                                                              t.setTransition(n.speed),
                                                              setTimeout(function () {
                                                                  t.setTranslate(m),
                                                                      s.transitionEnd(function () {
                                                                          t && !t.destroyed && t.transitionEnd();
                                                                      });
                                                              }, 0));
                                                      }))
                                                    : t.velocity
                                                    ? (t.updateProgress(f),
                                                      t.setTransition(h),
                                                      t.setTranslate(f),
                                                      t.transitionStart(!0, t.swipeDirection),
                                                      t.animating ||
                                                          ((t.animating = !0),
                                                          s.transitionEnd(function () {
                                                              t && !t.destroyed && t.transitionEnd();
                                                          })))
                                                    : t.updateProgress(f),
                                                    t.updateActiveIndex(),
                                                    t.updateSlidesClasses();
                                            } else if (n.freeModeSticky) return void t.slideToClosest();
                                            (!n.freeModeMomentum || e >= n.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
                                        }
                                    else {
                                        for (var w = 0, x = t.slidesSizesGrid[0], C = 0; C < o.length; C += C < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup) {
                                            var T = C < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
                                            void 0 !== o[C + T] ? u >= o[C] && u < o[C + T] && (x = o[(w = C) + T] - o[C]) : u >= o[C] && ((w = C), (x = o[o.length - 1] - o[o.length - 2]));
                                        }
                                        (v = (u - o[w]) / x), (h = w < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup);
                                        e > n.longSwipesMs
                                            ? n.longSwipes
                                                ? ("next" === t.swipeDirection && (v >= n.longSwipesRatio ? t.slideTo(w + h) : t.slideTo(w)), "prev" === t.swipeDirection && (v > 1 - n.longSwipesRatio ? t.slideTo(w + h) : t.slideTo(w)))
                                                : t.slideTo(t.activeIndex)
                                            : n.shortSwipes
                                            ? t.navigation && (d.target === t.navigation.nextEl || d.target === t.navigation.prevEl)
                                                ? d.target === t.navigation.nextEl
                                                    ? t.slideTo(w + h)
                                                    : t.slideTo(w)
                                                : ("next" === t.swipeDirection && t.slideTo(w + h), "prev" === t.swipeDirection && t.slideTo(w))
                                            : t.slideTo(t.activeIndex);
                                    }
                            }.bind(e)),
                            t.cssMode &&
                                (e.onScroll = function () {
                                    var e = this,
                                        t = e.wrapperEl,
                                        i = e.rtlTranslate;
                                    (e.previousTranslate = e.translate),
                                        e.isHorizontal() ? (e.translate = i ? t.scrollWidth - t.offsetWidth - t.scrollLeft : -t.scrollLeft) : (e.translate = -t.scrollTop),
                                        -0 === e.translate && (e.translate = 0),
                                        e.updateActiveIndex(),
                                        e.updateSlidesClasses(),
                                        (0 == (t = e.maxTranslate() - e.minTranslate()) ? 0 : (e.translate - e.minTranslate()) / t) !== e.progress && e.updateProgress(i ? -e.translate : e.translate),
                                        e.emit("setTranslate", e.translate, !1);
                                }.bind(e)),
                            (e.onClick = function (e) {
                                this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()));
                            }.bind(e));
                        var a,
                            s = !!t.nested;
                        !x.touch && x.pointerEvents
                            ? (n.addEventListener(i.start, e.onTouchStart, !1), v.addEventListener(i.move, e.onTouchMove, s), v.addEventListener(i.end, e.onTouchEnd, !1))
                            : (x.touch &&
                                  ((a = !("touchstart" !== i.start || !x.passiveListener || !t.passiveListeners) && { passive: !0, capture: !1 }),
                                  n.addEventListener(i.start, e.onTouchStart, a),
                                  n.addEventListener(i.move, e.onTouchMove, x.passiveListener ? { passive: !1, capture: s } : s),
                                  n.addEventListener(i.end, e.onTouchEnd, a),
                                  i.cancel && n.addEventListener(i.cancel, e.onTouchEnd, a),
                                  O || (v.addEventListener("touchstart", A), (O = !0))),
                              ((t.simulateTouch && !I.ios && !I.android) || (t.simulateTouch && !x.touch && I.ios)) &&
                                  (n.addEventListener("mousedown", e.onTouchStart, !1), v.addEventListener("mousemove", e.onTouchMove, s), v.addEventListener("mouseup", e.onTouchEnd, !1))),
                            (t.preventClicks || t.preventClicksPropagation) && n.addEventListener("click", e.onClick, !0),
                            t.cssMode && r.addEventListener("scroll", e.onScroll),
                            t.updateOnWindowResize ? e.on(I.ios || I.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", L, !0) : e.on("observerUpdate", L, !0);
                    },
                    detachEvents: function () {
                        var e,
                            t = this,
                            i = t.params,
                            n = t.touchEvents,
                            r = t.el,
                            a = t.wrapperEl,
                            s = !!i.nested;
                        !x.touch && x.pointerEvents
                            ? (r.removeEventListener(n.start, t.onTouchStart, !1), v.removeEventListener(n.move, t.onTouchMove, s), v.removeEventListener(n.end, t.onTouchEnd, !1))
                            : (x.touch &&
                                  ((e = !("onTouchStart" !== n.start || !x.passiveListener || !i.passiveListeners) && { passive: !0, capture: !1 }),
                                  r.removeEventListener(n.start, t.onTouchStart, e),
                                  r.removeEventListener(n.move, t.onTouchMove, s),
                                  r.removeEventListener(n.end, t.onTouchEnd, e),
                                  n.cancel && r.removeEventListener(n.cancel, t.onTouchEnd, e)),
                              ((i.simulateTouch && !I.ios && !I.android) || (i.simulateTouch && !x.touch && I.ios)) &&
                                  (r.removeEventListener("mousedown", t.onTouchStart, !1), v.removeEventListener("mousemove", t.onTouchMove, s), v.removeEventListener("mouseup", t.onTouchEnd, !1))),
                            (i.preventClicks || i.preventClicksPropagation) && r.removeEventListener("click", t.onClick, !0),
                            i.cssMode && a.removeEventListener("scroll", t.onScroll),
                            t.off(I.ios || I.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", L);
                    },
                },
                breakpoints: {
                    setBreakpoint: function () {
                        var e = this,
                            t = e.activeIndex,
                            i = e.initialized,
                            n = e.loopedSlides;
                        void 0 === n && (n = 0);
                        var r,
                            a,
                            s,
                            o,
                            l = e.params,
                            d = e.$el,
                            u = l.breakpoints;
                        !u ||
                            (u && 0 === Object.keys(u).length) ||
                            ((r = e.getBreakpoint(u)) &&
                                e.currentBreakpoint !== r &&
                                ((a = r in u ? u[r] : void 0) &&
                                    ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach(function (e) {
                                        var t = a[e];
                                        void 0 !== t && (a[e] = "slidesPerView" !== e || ("AUTO" !== t && "auto" !== t) ? ("slidesPerView" === e ? parseFloat(t) : parseInt(t, 10)) : "auto");
                                    }),
                                (s = a || e.originalParams),
                                (o = 1 < l.slidesPerColumn),
                                (u = 1 < s.slidesPerColumn),
                                o && !u
                                    ? d.removeClass(l.containerModifierClass + "multirow " + l.containerModifierClass + "multirow-column")
                                    : !o && u && (d.addClass(l.containerModifierClass + "multirow"), "column" === s.slidesPerColumnFill && d.addClass(l.containerModifierClass + "multirow-column")),
                                (d = s.direction && s.direction !== l.direction),
                                (l = l.loop && (s.slidesPerView !== l.slidesPerView || d)),
                                d && i && e.changeDirection(),
                                U.extend(e.params, s),
                                U.extend(e, { allowTouchMove: e.params.allowTouchMove, allowSlideNext: e.params.allowSlideNext, allowSlidePrev: e.params.allowSlidePrev }),
                                (e.currentBreakpoint = r),
                                l && i && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - n + e.loopedSlides, 0, !1)),
                                e.emit("breakpoint", s)));
                    },
                    getBreakpoint: function (e) {
                        if (e) {
                            var t = !1,
                                i = Object.keys(e).map(function (e) {
                                    if ("string" != typeof e || 0 !== e.indexOf("@")) return { value: e, point: e };
                                    var t = parseFloat(e.substr(1));
                                    return { value: X.innerHeight * t, point: e };
                                });
                            i.sort(function (e, t) {
                                return parseInt(e.value, 10) - parseInt(t.value, 10);
                            });
                            for (var n = 0; n < i.length; n += 1) {
                                var r = i[n],
                                    a = r.point;
                                r.value <= X.innerWidth && (t = a);
                            }
                            return t || "max";
                        }
                    },
                },
                checkOverflow: {
                    checkOverflow: function () {
                        var e = this,
                            t = e.params,
                            i = e.isLocked,
                            n = 0 < e.slides.length && t.slidesOffsetBefore + t.spaceBetween * (e.slides.length - 1) + e.slides[0].offsetWidth * e.slides.length;
                        t.slidesOffsetBefore && t.slidesOffsetAfter && n ? (e.isLocked = n <= e.size) : (e.isLocked = 1 === e.snapGrid.length),
                            (e.allowSlideNext = !e.isLocked),
                            (e.allowSlidePrev = !e.isLocked),
                            i !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"),
                            i && i !== e.isLocked && ((e.isEnd = !1), e.navigation && e.navigation.update());
                    },
                },
                classes: {
                    addClasses: function () {
                        var t = this.classNames,
                            i = this.params,
                            e = this.rtl,
                            n = this.$el,
                            r = [];
                        r.push("initialized"),
                            r.push(i.direction),
                            i.freeMode && r.push("free-mode"),
                            i.autoHeight && r.push("autoheight"),
                            e && r.push("rtl"),
                            1 < i.slidesPerColumn && (r.push("multirow"), "column" === i.slidesPerColumnFill && r.push("multirow-column")),
                            I.android && r.push("android"),
                            I.ios && r.push("ios"),
                            i.cssMode && r.push("css-mode"),
                            r.forEach(function (e) {
                                t.push(i.containerModifierClass + e);
                            }),
                            n.addClass(t.join(" "));
                    },
                    removeClasses: function () {
                        var e = this.$el,
                            t = this.classNames;
                        e.removeClass(t.join(" "));
                    },
                },
                images: {
                    loadImage: function (e, t, i, n, r, a) {
                        function s() {
                            a && a();
                        }
                        !(T(e).parent("picture")[0] || (e.complete && r)) && t ? (((r = new X.Image()).onload = s), (r.onerror = s), n && (r.sizes = n), i && (r.srcset = i), t && (r.src = t)) : s();
                    },
                    preloadImages: function () {
                        var e = this;
                        function t() {
                            null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
                        }
                        e.imagesToLoad = e.$el.find("img");
                        for (var i = 0; i < e.imagesToLoad.length; i += 1) {
                            var n = e.imagesToLoad[i];
                            e.loadImage(n, n.currentSrc || n.getAttribute("src"), n.srcset || n.getAttribute("srcset"), n.sizes || n.getAttribute("sizes"), !0, t);
                        }
                    },
                },
            },
            z = {},
            B = (function (d) {
                function u() {
                    for (var i, e = [], t = arguments.length; t--; ) e[t] = arguments[t];
                    (i = (i = 1 === e.length && e[0].constructor && e[0].constructor === Object ? e[0] : ((a = e[0]), e[1])) || {}),
                        (i = U.extend({}, i)),
                        a && !i.el && (i.el = a),
                        d.call(this, i),
                        Object.keys(N).forEach(function (t) {
                            Object.keys(N[t]).forEach(function (e) {
                                u.prototype[e] || (u.prototype[e] = N[t][e]);
                            });
                        });
                    var n = this;
                    void 0 === n.modules && (n.modules = {}),
                        Object.keys(n.modules).forEach(function (e) {
                            var t = n.modules[e];
                            t.params &&
                                ((e = Object.keys(t.params)[0]),
                                "object" == typeof (t = t.params[e]) &&
                                    null !== t &&
                                    e in i &&
                                    "enabled" in t &&
                                    (!0 === i[e] && (i[e] = { enabled: !0 }), "object" != typeof i[e] || "enabled" in i[e] || (i[e].enabled = !0), i[e] || (i[e] = { enabled: !1 })));
                        });
                    var r = U.extend({}, P);
                    n.useModulesParams(r), (n.params = U.extend({}, r, z, i)), (n.originalParams = U.extend({}, n.params)), (n.passedParams = U.extend({}, i));
                    var a,
                        s,
                        o = (n.$ = T)(n.params.el);
                    if ((a = o[0])) {
                        if (1 < o.length) {
                            var l = [];
                            return (
                                o.each(function (e, t) {
                                    t = U.extend({}, i, { el: t });
                                    l.push(new u(t));
                                }),
                                l
                            );
                        }
                        return (
                            (a.swiper = n),
                            o.data("swiper", n),
                            a && a.shadowRoot && a.shadowRoot.querySelector
                                ? ((s = T(a.shadowRoot.querySelector("." + n.params.wrapperClass))).children = function (e) {
                                      return o.children(e);
                                  })
                                : (s = o.children("." + n.params.wrapperClass)),
                            U.extend(n, {
                                $el: o,
                                el: a,
                                $wrapperEl: s,
                                wrapperEl: s[0],
                                classNames: [],
                                slides: T(),
                                slidesGrid: [],
                                snapGrid: [],
                                slidesSizesGrid: [],
                                isHorizontal: function () {
                                    return "horizontal" === n.params.direction;
                                },
                                isVertical: function () {
                                    return "vertical" === n.params.direction;
                                },
                                rtl: "rtl" === a.dir.toLowerCase() || "rtl" === o.css("direction"),
                                rtlTranslate: "horizontal" === n.params.direction && ("rtl" === a.dir.toLowerCase() || "rtl" === o.css("direction")),
                                wrongRTL: "-webkit-box" === s.css("display"),
                                activeIndex: 0,
                                realIndex: 0,
                                isBeginning: !0,
                                isEnd: !1,
                                translate: 0,
                                previousTranslate: 0,
                                progress: 0,
                                velocity: 0,
                                animating: !1,
                                allowSlideNext: n.params.allowSlideNext,
                                allowSlidePrev: n.params.allowSlidePrev,
                                touchEvents:
                                    ((a = ["touchstart", "touchmove", "touchend", "touchcancel"]),
                                    (s = ["mousedown", "mousemove", "mouseup"]),
                                    x.pointerEvents && (s = ["pointerdown", "pointermove", "pointerup"]),
                                    (n.touchEventsTouch = { start: a[0], move: a[1], end: a[2], cancel: a[3] }),
                                    (n.touchEventsDesktop = { start: s[0], move: s[1], end: s[2] }),
                                    x.touch || !n.params.simulateTouch ? n.touchEventsTouch : n.touchEventsDesktop),
                                touchEventsData: {
                                    isTouched: void 0,
                                    isMoved: void 0,
                                    allowTouchCallbacks: void 0,
                                    touchStartTime: void 0,
                                    isScrolling: void 0,
                                    currentTranslate: void 0,
                                    startTranslate: void 0,
                                    allowThresholdMove: void 0,
                                    formElements: "input, select, option, textarea, button, video, label",
                                    lastClickTime: U.now(),
                                    clickTimeout: void 0,
                                    velocities: [],
                                    allowMomentumBounce: void 0,
                                    isTouchEvent: void 0,
                                    startMoving: void 0,
                                },
                                allowClick: !0,
                                allowTouchMove: n.params.allowTouchMove,
                                touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
                                imagesToLoad: [],
                                imagesLoaded: 0,
                            }),
                            n.useModules(),
                            n.params.init && n.init(),
                            n
                        );
                    }
                }
                d && (u.__proto__ = d), (u.prototype = Object.create(d && d.prototype));
                var e = { extendedDefaults: { configurable: !0 }, defaults: { configurable: !0 }, Class: { configurable: !0 }, $: { configurable: !0 } };
                return (
                    ((u.prototype.constructor = u).prototype.slidesPerViewDynamic = function () {
                        var e = this.params,
                            t = this.slides,
                            i = this.slidesGrid,
                            n = this.size,
                            r = this.activeIndex,
                            a = 1;
                        if (e.centeredSlides) {
                            for (var s, o = t[r].swiperSlideSize, l = r + 1; l < t.length; l += 1) t[l] && !s && ((a += 1), n < (o += t[l].swiperSlideSize) && (s = !0));
                            for (var d = r - 1; 0 <= d; --d) t[d] && !s && ((a += 1), n < (o += t[d].swiperSlideSize) && (s = !0));
                        } else for (var u = r + 1; u < t.length; u += 1) i[u] - i[r] < n && (a += 1);
                        return a;
                    }),
                    (u.prototype.update = function () {
                        var e,
                            t,
                            i = this;
                        function n() {
                            var e = i.rtlTranslate ? -1 * i.translate : i.translate,
                                e = Math.min(Math.max(e, i.maxTranslate()), i.minTranslate());
                            i.setTranslate(e), i.updateActiveIndex(), i.updateSlidesClasses();
                        }
                        i &&
                            !i.destroyed &&
                            ((e = i.snapGrid),
                            (t = i.params).breakpoints && i.setBreakpoint(),
                            i.updateSize(),
                            i.updateSlides(),
                            i.updateProgress(),
                            i.updateSlidesClasses(),
                            i.params.freeMode
                                ? (n(), i.params.autoHeight && i.updateAutoHeight())
                                : (("auto" === i.params.slidesPerView || 1 < i.params.slidesPerView) && i.isEnd && !i.params.centeredSlides ? i.slideTo(i.slides.length - 1, 0, !1, !0) : i.slideTo(i.activeIndex, 0, !1, !0)) || n(),
                            t.watchOverflow && e !== i.snapGrid && i.checkOverflow(),
                            i.emit("update"));
                    }),
                    (u.prototype.changeDirection = function (i, e) {
                        void 0 === e && (e = !0);
                        var t = this,
                            n = t.params.direction;
                        return (
                            (i = i || ("horizontal" === n ? "vertical" : "horizontal")) === n ||
                                ("horizontal" !== i && "vertical" !== i) ||
                                (t.$el.removeClass("" + t.params.containerModifierClass + n).addClass("" + t.params.containerModifierClass + i),
                                (t.params.direction = i),
                                t.slides.each(function (e, t) {
                                    "vertical" === i ? (t.style.width = "") : (t.style.height = "");
                                }),
                                t.emit("changeDirection"),
                                e && t.update()),
                            t
                        );
                    }),
                    (u.prototype.init = function () {
                        var e = this;
                        e.initialized ||
                            (e.emit("beforeInit"),
                            e.params.breakpoints && e.setBreakpoint(),
                            e.addClasses(),
                            e.params.loop && e.loopCreate(),
                            e.updateSize(),
                            e.updateSlides(),
                            e.params.watchOverflow && e.checkOverflow(),
                            e.params.grabCursor && e.setGrabCursor(),
                            e.params.preloadImages && e.preloadImages(),
                            e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit),
                            e.attachEvents(),
                            (e.initialized = !0),
                            e.emit("init"));
                    }),
                    (u.prototype.destroy = function (e, t) {
                        void 0 === e && (e = !0), void 0 === t && (t = !0);
                        var i = this,
                            n = i.params,
                            r = i.$el,
                            a = i.$wrapperEl,
                            s = i.slides;
                        return (
                            void 0 === i.params ||
                                i.destroyed ||
                                (i.emit("beforeDestroy"),
                                (i.initialized = !1),
                                i.detachEvents(),
                                n.loop && i.loopDestroy(),
                                t &&
                                    (i.removeClasses(),
                                    r.removeAttr("style"),
                                    a.removeAttr("style"),
                                    s && s.length && s.removeClass([n.slideVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),
                                i.emit("destroy"),
                                Object.keys(i.eventsListeners).forEach(function (e) {
                                    i.off(e);
                                }),
                                !1 !== e && ((i.$el[0].swiper = null), i.$el.data("swiper", null), U.deleteProps(i)),
                                (i.destroyed = !0)),
                            null
                        );
                    }),
                    (u.extendDefaults = function (e) {
                        U.extend(z, e);
                    }),
                    (e.extendedDefaults.get = function () {
                        return z;
                    }),
                    (e.defaults.get = function () {
                        return P;
                    }),
                    (e.Class.get = function () {
                        return d;
                    }),
                    (e.$.get = function () {
                        return T;
                    }),
                    Object.defineProperties(u, e),
                    u
                );
            })(i),
            d = { name: "device", proto: { device: I }, static: { device: I } },
            u = { name: "support", proto: { support: x }, static: { support: x } },
            j = {
                isEdge: !!X.navigator.userAgent.match(/Edge/g),
                isSafari: 0 <= (c = X.navigator.userAgent.toLowerCase()).indexOf("safari") && c.indexOf("chrome") < 0 && c.indexOf("android") < 0,
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(X.navigator.userAgent),
            },
            h = { name: "browser", proto: { browser: j }, static: { browser: j } },
            p = {
                name: "resize",
                create: function () {
                    var e = this;
                    U.extend(e, {
                        resize: {
                            resizeHandler: function () {
                                e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"));
                            },
                            orientationChangeHandler: function () {
                                e && !e.destroyed && e.initialized && e.emit("orientationchange");
                            },
                        },
                    });
                },
                on: {
                    init: function () {
                        X.addEventListener("resize", this.resize.resizeHandler), X.addEventListener("orientationchange", this.resize.orientationChangeHandler);
                    },
                    destroy: function () {
                        X.removeEventListener("resize", this.resize.resizeHandler), X.removeEventListener("orientationchange", this.resize.orientationChangeHandler);
                    },
                },
            },
            H = {
                func: X.MutationObserver || X.WebkitMutationObserver,
                attach: function (e, t) {
                    void 0 === t && (t = {});
                    var i = this,
                        n = new H.func(function (e) {
                            var t;
                            1 !== e.length
                                ? ((t = function () {
                                      i.emit("observerUpdate", e[0]);
                                  }),
                                  X.requestAnimationFrame ? X.requestAnimationFrame(t) : X.setTimeout(t, 0))
                                : i.emit("observerUpdate", e[0]);
                        });
                    n.observe(e, { attributes: void 0 === t.attributes || t.attributes, childList: void 0 === t.childList || t.childList, characterData: void 0 === t.characterData || t.characterData }), i.observer.observers.push(n);
                },
                init: function () {
                    if (x.observer && this.params.observer) {
                        if (this.params.observeParents) for (var e = this.$el.parents(), t = 0; t < e.length; t += 1) this.observer.attach(e[t]);
                        this.observer.attach(this.$el[0], { childList: this.params.observeSlideChildren }), this.observer.attach(this.$wrapperEl[0], { attributes: !1 });
                    }
                },
                destroy: function () {
                    this.observer.observers.forEach(function (e) {
                        e.disconnect();
                    }),
                        (this.observer.observers = []);
                },
            },
            D = {
                name: "observer",
                params: { observer: !1, observeParents: !1, observeSlideChildren: !1 },
                create: function () {
                    U.extend(this, { observer: { init: H.init.bind(this), attach: H.attach.bind(this), destroy: H.destroy.bind(this), observers: [] } });
                },
                on: {
                    init: function () {
                        this.observer.init();
                    },
                    destroy: function () {
                        this.observer.destroy();
                    },
                },
            },
            R = {
                update: function (e) {
                    var t = this,
                        i = t.params,
                        n = i.slidesPerView,
                        r = i.slidesPerGroup,
                        a = i.centeredSlides,
                        s = t.params.virtual,
                        o = s.addSlidesBefore,
                        l = s.addSlidesAfter,
                        d = t.virtual,
                        u = d.from,
                        c = d.to,
                        h = d.slides,
                        p = d.slidesGrid,
                        f = d.renderSlide,
                        i = d.offset;
                    t.updateActiveIndex();
                    var s = t.activeIndex || 0,
                        d = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top",
                        l = a ? ((v = Math.floor(n / 2) + r + o), Math.floor(n / 2) + r + l) : ((v = n + (r - 1) + o), r + l),
                        m = Math.max((s || 0) - l, 0),
                        g = Math.min((s || 0) + v, h.length - 1),
                        v = (t.slidesGrid[m] || 0) - (t.slidesGrid[0] || 0);
                    function y() {
                        t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load();
                    }
                    if ((U.extend(t.virtual, { from: m, to: g, offset: v, slidesGrid: t.slidesGrid }), u === m && c === g && !e)) return t.slidesGrid !== p && v !== i && t.slides.css(d, v + "px"), void t.updateProgress();
                    if (t.params.virtual.renderExternal)
                        return (
                            t.params.virtual.renderExternal.call(t, {
                                offset: v,
                                from: m,
                                to: g,
                                slides: (function () {
                                    for (var e = [], t = m; t <= g; t += 1) e.push(h[t]);
                                    return e;
                                })(),
                            }),
                            void y()
                        );
                    var b = [],
                        w = [];
                    if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
                    else for (var x = u; x <= c; x += 1) (x < m || g < x) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + x + '"]').remove();
                    for (var C = 0; C < h.length; C += 1) m <= C && C <= g && (void 0 === c || e ? w.push(C) : (c < C && w.push(C), C < u && b.push(C)));
                    w.forEach(function (e) {
                        t.$wrapperEl.append(f(h[e], e));
                    }),
                        b
                            .sort(function (e, t) {
                                return t - e;
                            })
                            .forEach(function (e) {
                                t.$wrapperEl.prepend(f(h[e], e));
                            }),
                        t.$wrapperEl.children(".swiper-slide").css(d, v + "px"),
                        y();
                },
                renderSlide: function (e, t) {
                    var i = this.params.virtual;
                    if (i.cache && this.virtual.cache[t]) return this.virtual.cache[t];
                    e = i.renderSlide ? T(i.renderSlide.call(this, e, t)) : T('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
                    return e.attr("data-swiper-slide-index") || e.attr("data-swiper-slide-index", t), i.cache && (this.virtual.cache[t] = e), e;
                },
                appendSlide: function (e) {
                    if ("object" == typeof e && "length" in e) for (var t = 0; t < e.length; t += 1) e[t] && this.virtual.slides.push(e[t]);
                    else this.virtual.slides.push(e);
                    this.virtual.update(!0);
                },
                prependSlide: function (e) {
                    var n,
                        r,
                        t = this.activeIndex,
                        i = t + 1,
                        a = 1;
                    if (Array.isArray(e)) {
                        for (var s = 0; s < e.length; s += 1) e[s] && this.virtual.slides.unshift(e[s]);
                        (i = t + e.length), (a = e.length);
                    } else this.virtual.slides.unshift(e);
                    this.params.virtual.cache &&
                        ((n = this.virtual.cache),
                        (r = {}),
                        Object.keys(n).forEach(function (e) {
                            var t = n[e],
                                i = t.attr("data-swiper-slide-index");
                            i && t.attr("data-swiper-slide-index", parseInt(i, 10) + 1), (r[parseInt(e, 10) + a] = t);
                        }),
                        (this.virtual.cache = r)),
                        this.virtual.update(!0),
                        this.slideTo(i, 0);
                },
                removeSlide: function (e) {
                    if (null != e) {
                        var t = this.activeIndex;
                        if (Array.isArray(e)) for (var i = e.length - 1; 0 <= i; --i) this.virtual.slides.splice(e[i], 1), this.params.virtual.cache && delete this.virtual.cache[e[i]], e[i] < t && --t, (t = Math.max(t, 0));
                        else this.virtual.slides.splice(e, 1), this.params.virtual.cache && delete this.virtual.cache[e], e < t && --t, (t = Math.max(t, 0));
                        this.virtual.update(!0), this.slideTo(t, 0);
                    }
                },
                removeAllSlides: function () {
                    (this.virtual.slides = []), this.params.virtual.cache && (this.virtual.cache = {}), this.virtual.update(!0), this.slideTo(0, 0);
                },
            },
            i = {
                name: "virtual",
                params: { virtual: { enabled: !1, slides: [], cache: !0, renderSlide: null, renderExternal: null, addSlidesBefore: 0, addSlidesAfter: 0 } },
                create: function () {
                    U.extend(this, {
                        virtual: {
                            update: R.update.bind(this),
                            appendSlide: R.appendSlide.bind(this),
                            prependSlide: R.prependSlide.bind(this),
                            removeSlide: R.removeSlide.bind(this),
                            removeAllSlides: R.removeAllSlides.bind(this),
                            renderSlide: R.renderSlide.bind(this),
                            slides: this.params.virtual.slides,
                            cache: {},
                        },
                    });
                },
                on: {
                    beforeInit: function () {
                        var e;
                        this.params.virtual.enabled &&
                            (this.classNames.push(this.params.containerModifierClass + "virtual"),
                            (e = { watchSlidesProgress: !0 }),
                            U.extend(this.params, e),
                            U.extend(this.originalParams, e),
                            this.params.initialSlide || this.virtual.update());
                    },
                    setTranslate: function () {
                        this.params.virtual.enabled && this.virtual.update();
                    },
                },
            },
            $ = {
                handle: function (e) {
                    var t = this,
                        i = t.rtlTranslate,
                        n = e,
                        r = (n = n.originalEvent ? n.originalEvent : n).keyCode || n.charCode,
                        a = t.params.keyboard.pageUpDown,
                        s = a && 33 === r,
                        o = a && 34 === r,
                        l = 37 === r,
                        d = 39 === r,
                        u = 38 === r,
                        e = 40 === r;
                    if (!t.allowSlideNext && ((t.isHorizontal() && d) || (t.isVertical() && e) || o)) return !1;
                    if (!t.allowSlidePrev && ((t.isHorizontal() && l) || (t.isVertical() && u) || s)) return !1;
                    if (!(n.shiftKey || n.altKey || n.ctrlKey || n.metaKey || (v.activeElement && v.activeElement.nodeName && ("input" === v.activeElement.nodeName.toLowerCase() || "textarea" === v.activeElement.nodeName.toLowerCase())))) {
                        if (t.params.keyboard.onlyInViewport && (s || o || l || d || u || e)) {
                            var c = !1;
                            if (0 < t.$el.parents("." + t.params.slideClass).length && 0 === t.$el.parents("." + t.params.slideActiveClass).length) return;
                            var h = X.innerWidth,
                                p = X.innerHeight,
                                a = t.$el.offset();
                            i && (a.left -= t.$el[0].scrollLeft);
                            for (
                                var f = [
                                        [a.left, a.top],
                                        [a.left + t.width, a.top],
                                        [a.left, a.top + t.height],
                                        [a.left + t.width, a.top + t.height],
                                    ],
                                    m = 0;
                                m < f.length;
                                m += 1
                            ) {
                                var g = f[m];
                                0 <= g[0] && g[0] <= h && 0 <= g[1] && g[1] <= p && (c = !0);
                            }
                            if (!c) return;
                        }
                        t.isHorizontal()
                            ? ((s || o || l || d) && (n.preventDefault ? n.preventDefault() : (n.returnValue = !1)), (((o || d) && !i) || ((s || l) && i)) && t.slideNext(), (((s || l) && !i) || ((o || d) && i)) && t.slidePrev())
                            : ((s || o || u || e) && (n.preventDefault ? n.preventDefault() : (n.returnValue = !1)), (o || e) && t.slideNext(), (s || u) && t.slidePrev()),
                            t.emit("keyPress", r);
                    }
                },
                enable: function () {
                    this.keyboard.enabled || (T(v).on("keydown", this.keyboard.handle), (this.keyboard.enabled = !0));
                },
                disable: function () {
                    this.keyboard.enabled && (T(v).off("keydown", this.keyboard.handle), (this.keyboard.enabled = !1));
                },
            },
            c = {
                name: "keyboard",
                params: { keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } },
                create: function () {
                    U.extend(this, { keyboard: { enabled: !1, enable: $.enable.bind(this), disable: $.disable.bind(this), handle: $.handle.bind(this) } });
                },
                on: {
                    init: function () {
                        this.params.keyboard.enabled && this.keyboard.enable();
                    },
                    destroy: function () {
                        this.keyboard.enabled && this.keyboard.disable();
                    },
                },
            };
        var q = {
                lastScrollTime: U.now(),
                lastEventBeforeSnap: void 0,
                recentWheelEvents: [],
                event: function () {
                    return -1 < X.navigator.userAgent.indexOf("firefox")
                        ? "DOMMouseScroll"
                        : ((i = (t = "onwheel") in v) || ((e = v.createElement("div")).setAttribute(t, "return;"), (i = "function" == typeof e[t])),
                          (i = !i && v.implementation && v.implementation.hasFeature && !0 !== v.implementation.hasFeature("", "") ? v.implementation.hasFeature("Events.wheel", "3.0") : i) ? "wheel" : "mousewheel");
                    var e, t, i;
                },
                normalize: function (e) {
                    var t = 0,
                        i = 0,
                        n = 0,
                        r = 0;
                    return (
                        "detail" in e && (i = e.detail),
                        "wheelDelta" in e && (i = -e.wheelDelta / 120),
                        "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120),
                        "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
                        "axis" in e && e.axis === e.HORIZONTAL_AXIS && ((t = i), (i = 0)),
                        (n = 10 * t),
                        (r = 10 * i),
                        "deltaY" in e && (r = e.deltaY),
                        "deltaX" in e && (n = e.deltaX),
                        e.shiftKey && !n && ((n = r), (r = 0)),
                        (n || r) && e.deltaMode && (1 === e.deltaMode ? ((n *= 40), (r *= 40)) : ((n *= 800), (r *= 800))),
                        { spinX: (t = n && !t ? (n < 1 ? -1 : 1) : t), spinY: (i = r && !i ? (r < 1 ? -1 : 1) : i), pixelX: n, pixelY: r }
                    );
                },
                handleMouseEnter: function () {
                    this.mouseEntered = !0;
                },
                handleMouseLeave: function () {
                    this.mouseEntered = !1;
                },
                handle: function (e) {
                    var t = e,
                        i = this,
                        n = i.params.mousewheel;
                    i.params.cssMode && t.preventDefault();
                    var r = i.$el;
                    if (("container" !== i.params.mousewheel.eventsTarged && (r = T(i.params.mousewheel.eventsTarged)), !i.mouseEntered && !r[0].contains(t.target) && !n.releaseOnEdges)) return !0;
                    t.originalEvent && (t = t.originalEvent);
                    var a = 0,
                        s = i.rtlTranslate ? -1 : 1,
                        r = q.normalize(t);
                    if (n.forceToAxis)
                        if (i.isHorizontal()) {
                            if (!(Math.abs(r.pixelX) > Math.abs(r.pixelY))) return !0;
                            a = -r.pixelX * s;
                        } else {
                            if (!(Math.abs(r.pixelY) > Math.abs(r.pixelX))) return !0;
                            a = -r.pixelY;
                        }
                    else a = Math.abs(r.pixelX) > Math.abs(r.pixelY) ? -r.pixelX * s : -r.pixelY;
                    if (0 === a) return !0;
                    if ((n.invert && (a = -a), i.params.freeMode)) {
                        var o = { time: U.now(), delta: Math.abs(a), direction: Math.sign(a) },
                            s = i.mousewheel.lastEventBeforeSnap,
                            r = s && o.time < s.time + 500 && o.delta <= s.delta && o.direction === s.direction;
                        if (!r) {
                            (i.mousewheel.lastEventBeforeSnap = void 0), i.params.loop && i.loopFix();
                            var l,
                                d,
                                u = i.getTranslate() + a * n.sensitivity,
                                s = i.isBeginning,
                                n = i.isEnd;
                            if (
                                ((u = u >= i.minTranslate() ? i.minTranslate() : u) <= i.maxTranslate() && (u = i.maxTranslate()),
                                i.setTransition(0),
                                i.setTranslate(u),
                                i.updateProgress(),
                                i.updateActiveIndex(),
                                i.updateSlidesClasses(),
                                ((!s && i.isBeginning) || (!n && i.isEnd)) && i.updateSlidesClasses(),
                                i.params.freeModeSticky &&
                                    (clearTimeout(i.mousewheel.timeout),
                                    (i.mousewheel.timeout = void 0),
                                    15 <= (l = i.mousewheel.recentWheelEvents).length && l.shift(),
                                    (s = l.length ? l[l.length - 1] : void 0),
                                    (n = l[0]),
                                    l.push(o),
                                    s && (o.delta > s.delta || o.direction !== s.direction)
                                        ? l.splice(0)
                                        : 15 <= l.length &&
                                          o.time - n.time < 500 &&
                                          1 <= n.delta - o.delta &&
                                          o.delta <= 6 &&
                                          ((d = 0 < a ? 0.8 : 0.2),
                                          (i.mousewheel.lastEventBeforeSnap = o),
                                          l.splice(0),
                                          (i.mousewheel.timeout = U.nextTick(function () {
                                              i.slideToClosest(i.params.speed, !0, void 0, d);
                                          }, 0))),
                                    i.mousewheel.timeout ||
                                        (i.mousewheel.timeout = U.nextTick(function () {
                                            (i.mousewheel.lastEventBeforeSnap = o), l.splice(0), i.slideToClosest(i.params.speed, !0, void 0, 0.5);
                                        }, 500))),
                                r || i.emit("scroll", t),
                                i.params.autoplay && i.params.autoplayDisableOnInteraction && i.autoplay.stop(),
                                u === i.minTranslate() || u === i.maxTranslate())
                            )
                                return !0;
                        }
                    } else {
                        (u = { time: U.now(), delta: Math.abs(a), direction: Math.sign(a), raw: e }), (a = i.mousewheel.recentWheelEvents);
                        2 <= a.length && a.shift();
                        e = a.length ? a[a.length - 1] : void 0;
                        if ((a.push(u), (!e || u.direction !== e.direction || u.delta > e.delta || u.time > e.time + 150) && i.mousewheel.animateSlider(u), i.mousewheel.releaseScroll(u))) return !0;
                    }
                    return t.preventDefault ? t.preventDefault() : (t.returnValue = !1), !1;
                },
                animateSlider: function (e) {
                    var t = this;
                    return (
                        (6 <= e.delta && U.now() - t.mousewheel.lastScrollTime < 60) ||
                        (e.direction < 0 ? (t.isEnd && !t.params.loop) || t.animating || (t.slideNext(), t.emit("scroll", e.raw)) : (t.isBeginning && !t.params.loop) || t.animating || (t.slidePrev(), t.emit("scroll", e.raw)),
                        (t.mousewheel.lastScrollTime = new X.Date().getTime()),
                        !1)
                    );
                },
                releaseScroll: function (e) {
                    var t = this.params.mousewheel;
                    if (e.direction < 0) {
                        if (this.isEnd && !this.params.loop && t.releaseOnEdges) return !0;
                    } else if (this.isBeginning && !this.params.loop && t.releaseOnEdges) return !0;
                    return !1;
                },
                enable: function () {
                    var e = this,
                        t = q.event();
                    if (e.params.cssMode) return e.wrapperEl.removeEventListener(t, e.mousewheel.handle), !0;
                    if (!t) return !1;
                    if (e.mousewheel.enabled) return !1;
                    var i = e.$el;
                    return (
                        (i = "container" !== e.params.mousewheel.eventsTarged ? T(e.params.mousewheel.eventsTarged) : i).on("mouseenter", e.mousewheel.handleMouseEnter),
                        i.on("mouseleave", e.mousewheel.handleMouseLeave),
                        i.on(t, e.mousewheel.handle),
                        (e.mousewheel.enabled = !0)
                    );
                },
                disable: function () {
                    var e = q.event();
                    if (this.params.cssMode) return this.wrapperEl.addEventListener(e, this.mousewheel.handle), !0;
                    if (!e) return !1;
                    if (!this.mousewheel.enabled) return !1;
                    var t = this.$el;
                    return (t = "container" !== this.params.mousewheel.eventsTarged ? T(this.params.mousewheel.eventsTarged) : t).off(e, this.mousewheel.handle), !(this.mousewheel.enabled = !1);
                },
            },
            W = {
                update: function () {
                    var e,
                        t,
                        i = this.params.navigation;
                    this.params.loop ||
                        ((e = (t = this.navigation).$nextEl),
                        (t = t.$prevEl) && 0 < t.length && (this.isBeginning ? t.addClass(i.disabledClass) : t.removeClass(i.disabledClass), t[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](i.lockClass)),
                        e && 0 < e.length && (this.isEnd ? e.addClass(i.disabledClass) : e.removeClass(i.disabledClass), e[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](i.lockClass)));
                },
                onPrevClick: function (e) {
                    e.preventDefault(), (this.isBeginning && !this.params.loop) || this.slidePrev();
                },
                onNextClick: function (e) {
                    e.preventDefault(), (this.isEnd && !this.params.loop) || this.slideNext();
                },
                init: function () {
                    var e,
                        t,
                        i = this,
                        n = i.params.navigation;
                    (n.nextEl || n.prevEl) &&
                        (n.nextEl && ((e = T(n.nextEl)), i.params.uniqueNavElements && "string" == typeof n.nextEl && 1 < e.length && 1 === i.$el.find(n.nextEl).length && (e = i.$el.find(n.nextEl))),
                        n.prevEl && ((t = T(n.prevEl)), i.params.uniqueNavElements && "string" == typeof n.prevEl && 1 < t.length && 1 === i.$el.find(n.prevEl).length && (t = i.$el.find(n.prevEl))),
                        e && 0 < e.length && e.on("click", i.navigation.onNextClick),
                        t && 0 < t.length && t.on("click", i.navigation.onPrevClick),
                        U.extend(i.navigation, { $nextEl: e, nextEl: e && e[0], $prevEl: t, prevEl: t && t[0] }));
                },
                destroy: function () {
                    var e = this.navigation,
                        t = e.$nextEl,
                        e = e.$prevEl;
                    t && t.length && (t.off("click", this.navigation.onNextClick), t.removeClass(this.params.navigation.disabledClass)),
                        e && e.length && (e.off("click", this.navigation.onPrevClick), e.removeClass(this.params.navigation.disabledClass));
                },
            },
            F = {
                update: function () {
                    var e = this,
                        t = e.rtl,
                        n = e.params.pagination;
                    if (n.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                        var r,
                            i = (e.virtual && e.params.virtual.enabled ? e.virtual : e).slides.length,
                            a = e.pagination.$el,
                            s = e.params.loop ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                        if (
                            (e.params.loop
                                ? ((r = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > i - 1 - 2 * e.loopedSlides && (r -= i - 2 * e.loopedSlides),
                                  s - 1 < r && (r -= s),
                                  r < 0 && "bullets" !== e.params.paginationType && (r = s + r))
                                : (r = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0),
                            "bullets" === n.type && e.pagination.bullets && 0 < e.pagination.bullets.length)
                        ) {
                            var o,
                                l,
                                d,
                                u,
                                c,
                                h = e.pagination.bullets;
                            if (
                                (n.dynamicBullets &&
                                    ((e.pagination.bulletSize = h.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                                    a.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (n.dynamicMainBullets + 4) + "px"),
                                    1 < n.dynamicMainBullets &&
                                        void 0 !== e.previousIndex &&
                                        ((e.pagination.dynamicBulletIndex += r - e.previousIndex),
                                        e.pagination.dynamicBulletIndex > n.dynamicMainBullets - 1
                                            ? (e.pagination.dynamicBulletIndex = n.dynamicMainBullets - 1)
                                            : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)),
                                    (o = r - e.pagination.dynamicBulletIndex),
                                    (d = ((l = o + (Math.min(h.length, n.dynamicMainBullets) - 1)) + o) / 2)),
                                h.removeClass(
                                    n.bulletActiveClass + " " + n.bulletActiveClass + "-next " + n.bulletActiveClass + "-next-next " + n.bulletActiveClass + "-prev " + n.bulletActiveClass + "-prev-prev " + n.bulletActiveClass + "-main"
                                ),
                                1 < a.length)
                            )
                                h.each(function (e, t) {
                                    var i = T(t),
                                        t = i.index();
                                    t === r && i.addClass(n.bulletActiveClass),
                                        n.dynamicBullets &&
                                            (o <= t && t <= l && i.addClass(n.bulletActiveClass + "-main"),
                                            t === o &&
                                                i
                                                    .prev()
                                                    .addClass(n.bulletActiveClass + "-prev")
                                                    .prev()
                                                    .addClass(n.bulletActiveClass + "-prev-prev"),
                                            t === l &&
                                                i
                                                    .next()
                                                    .addClass(n.bulletActiveClass + "-next")
                                                    .next()
                                                    .addClass(n.bulletActiveClass + "-next-next"));
                                });
                            else {
                                var p = h.eq(r),
                                    f = p.index();
                                if ((p.addClass(n.bulletActiveClass), n.dynamicBullets)) {
                                    for (var i = h.eq(o), p = h.eq(l), m = o; m <= l; m += 1) h.eq(m).addClass(n.bulletActiveClass + "-main");
                                    if (e.params.loop)
                                        if (f >= h.length - n.dynamicMainBullets) {
                                            for (var g = n.dynamicMainBullets; 0 <= g; --g) h.eq(h.length - g).addClass(n.bulletActiveClass + "-main");
                                            h.eq(h.length - n.dynamicMainBullets - 1).addClass(n.bulletActiveClass + "-prev");
                                        } else
                                            i
                                                .prev()
                                                .addClass(n.bulletActiveClass + "-prev")
                                                .prev()
                                                .addClass(n.bulletActiveClass + "-prev-prev"),
                                                p
                                                    .next()
                                                    .addClass(n.bulletActiveClass + "-next")
                                                    .next()
                                                    .addClass(n.bulletActiveClass + "-next-next");
                                    else
                                        i
                                            .prev()
                                            .addClass(n.bulletActiveClass + "-prev")
                                            .prev()
                                            .addClass(n.bulletActiveClass + "-prev-prev"),
                                            p
                                                .next()
                                                .addClass(n.bulletActiveClass + "-next")
                                                .next()
                                                .addClass(n.bulletActiveClass + "-next-next");
                                }
                            }
                            n.dynamicBullets &&
                                ((c = Math.min(h.length, n.dynamicMainBullets + 4)),
                                (u = (e.pagination.bulletSize * c - e.pagination.bulletSize) / 2 - d * e.pagination.bulletSize),
                                (c = t ? "right" : "left"),
                                h.css(e.isHorizontal() ? c : "top", u + "px"));
                        }
                        "fraction" === n.type && (a.find("." + n.currentClass).text(n.formatFractionCurrent(r + 1)), a.find("." + n.totalClass).text(n.formatFractionTotal(s))),
                            "progressbar" === n.type &&
                                ((d = n.progressbarOpposite ? (e.isHorizontal() ? "vertical" : "horizontal") : e.isHorizontal() ? "horizontal" : "vertical"),
                                (t = (r + 1) / s),
                                (u = c = 1),
                                "horizontal" === d ? (c = t) : (u = t),
                                a
                                    .find("." + n.progressbarFillClass)
                                    .transform("translate3d(0,0,0) scaleX(" + c + ") scaleY(" + u + ")")
                                    .transition(e.params.speed)),
                            "custom" === n.type && n.renderCustom ? (a.html(n.renderCustom(e, r + 1, s)), e.emit("paginationRender", e, a[0])) : e.emit("paginationUpdate", e, a[0]),
                            a[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](n.lockClass);
                    }
                },
                render: function () {
                    var e = this,
                        t = e.params.pagination;
                    if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                        var i = (e.virtual && e.params.virtual.enabled ? e.virtual : e).slides.length,
                            n = e.pagination.$el,
                            r = "";
                        if ("bullets" === t.type) {
                            for (var a = e.params.loop ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length, s = 0; s < a; s += 1)
                                t.renderBullet ? (r += t.renderBullet.call(e, s, t.bulletClass)) : (r += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">");
                            n.html(r), (e.pagination.bullets = n.find("." + t.bulletClass));
                        }
                        "fraction" === t.type && ((r = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>'), n.html(r)),
                            "progressbar" === t.type && ((r = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>'), n.html(r)),
                            "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0]);
                    }
                },
                init: function () {
                    var e,
                        t = this,
                        i = t.params.pagination;
                    !i.el ||
                        (0 !== (e = T(i.el)).length &&
                            (t.params.uniqueNavElements && "string" == typeof i.el && 1 < e.length && (e = t.$el.find(i.el)),
                            "bullets" === i.type && i.clickable && e.addClass(i.clickableClass),
                            e.addClass(i.modifierClass + i.type),
                            "bullets" === i.type && i.dynamicBullets && (e.addClass("" + i.modifierClass + i.type + "-dynamic"), (t.pagination.dynamicBulletIndex = 0), i.dynamicMainBullets < 1 && (i.dynamicMainBullets = 1)),
                            "progressbar" === i.type && i.progressbarOpposite && e.addClass(i.progressbarOppositeClass),
                            i.clickable &&
                                e.on("click", "." + i.bulletClass, function (e) {
                                    e.preventDefault();
                                    e = T(this).index() * t.params.slidesPerGroup;
                                    t.params.loop && (e += t.loopedSlides), t.slideTo(e);
                                }),
                            U.extend(t.pagination, { $el: e, el: e[0] })));
                },
                destroy: function () {
                    var e,
                        t = this.params.pagination;
                    t.el &&
                        this.pagination.el &&
                        this.pagination.$el &&
                        0 !== this.pagination.$el.length &&
                        ((e = this.pagination.$el).removeClass(t.hiddenClass),
                        e.removeClass(t.modifierClass + t.type),
                        this.pagination.bullets && this.pagination.bullets.removeClass(t.bulletActiveClass),
                        t.clickable && e.off("click", "." + t.bulletClass));
                },
            },
            Y = {
                setTranslate: function () {
                    var e, t, i, n, r, a, s, o;
                    this.params.scrollbar.el &&
                        this.scrollbar.el &&
                        ((s = this.scrollbar),
                        (e = this.rtlTranslate),
                        (o = this.progress),
                        (t = s.dragSize),
                        (i = s.trackSize),
                        (n = s.$dragEl),
                        (r = s.$el),
                        (a = this.params.scrollbar),
                        (o = (i - (s = t)) * o),
                        e ? (0 < (o = -o) ? ((s = t - o), (o = 0)) : i < -o + t && (s = i + o)) : o < 0 ? ((s = t + o), (o = 0)) : i < o + t && (s = i - o),
                        this.isHorizontal() ? (n.transform("translate3d(" + o + "px, 0, 0)"), (n[0].style.width = s + "px")) : (n.transform("translate3d(0px, " + o + "px, 0)"), (n[0].style.height = s + "px")),
                        a.hide &&
                            (clearTimeout(this.scrollbar.timeout),
                            (r[0].style.opacity = 1),
                            (this.scrollbar.timeout = setTimeout(function () {
                                (r[0].style.opacity = 0), r.transition(400);
                            }, 1e3))));
                },
                setTransition: function (e) {
                    this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e);
                },
                updateSize: function () {
                    var e,
                        t,
                        i,
                        n,
                        r,
                        a,
                        s,
                        o = this;
                    o.params.scrollbar.el &&
                        o.scrollbar.el &&
                        ((t = (e = o.scrollbar).$dragEl),
                        (i = e.$el),
                        (t[0].style.width = ""),
                        (t[0].style.height = ""),
                        (n = o.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight),
                        (a = (r = o.size / o.virtualSize) * (n / o.size)),
                        (s = "auto" === o.params.scrollbar.dragSize ? n * r : parseInt(o.params.scrollbar.dragSize, 10)),
                        o.isHorizontal() ? (t[0].style.width = s + "px") : (t[0].style.height = s + "px"),
                        (i[0].style.display = 1 <= r ? "none" : ""),
                        o.params.scrollbar.hide && (i[0].style.opacity = 0),
                        U.extend(e, { trackSize: n, divider: r, moveDivider: a, dragSize: s }),
                        e.$el[o.params.watchOverflow && o.isLocked ? "addClass" : "removeClass"](o.params.scrollbar.lockClass));
                },
                getPointerPosition: function (e) {
                    return this.isHorizontal() ? ("touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0] : e).clientX : ("touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0] : e).clientY;
                },
                setDragPosition: function (e) {
                    var t = this,
                        i = t.scrollbar,
                        n = t.rtlTranslate,
                        r = i.$el,
                        a = i.dragSize,
                        s = i.trackSize,
                        o = i.dragStartPos,
                        a = (i.getPointerPosition(e) - r.offset()[t.isHorizontal() ? "left" : "top"] - (null !== o ? o : a / 2)) / (s - a);
                    (a = Math.max(Math.min(a, 1), 0)), n && (a = 1 - a);
                    a = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * a;
                    t.updateProgress(a), t.setTranslate(a), t.updateActiveIndex(), t.updateSlidesClasses();
                },
                onDragStart: function (e) {
                    var t = this,
                        i = t.params.scrollbar,
                        n = t.scrollbar,
                        r = t.$wrapperEl,
                        a = n.$el,
                        s = n.$dragEl;
                    (t.scrollbar.isTouched = !0),
                        (t.scrollbar.dragStartPos = e.target === s[0] || e.target === s ? n.getPointerPosition(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null),
                        e.preventDefault(),
                        e.stopPropagation(),
                        r.transition(100),
                        s.transition(100),
                        n.setDragPosition(e),
                        clearTimeout(t.scrollbar.dragTimeout),
                        a.transition(0),
                        i.hide && a.css("opacity", 1),
                        t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"),
                        t.emit("scrollbarDragStart", e);
                },
                onDragMove: function (e) {
                    var t = this.scrollbar,
                        i = this.$wrapperEl,
                        n = t.$el,
                        r = t.$dragEl;
                    this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : (e.returnValue = !1), t.setDragPosition(e), i.transition(0), n.transition(0), r.transition(0), this.emit("scrollbarDragMove", e));
                },
                onDragEnd: function (e) {
                    var t = this,
                        i = t.params.scrollbar,
                        n = t.scrollbar,
                        r = t.$wrapperEl,
                        a = n.$el;
                    t.scrollbar.isTouched &&
                        ((t.scrollbar.isTouched = !1),
                        t.params.cssMode && (t.$wrapperEl.css("scroll-snap-type", ""), r.transition("")),
                        i.hide &&
                            (clearTimeout(t.scrollbar.dragTimeout),
                            (t.scrollbar.dragTimeout = U.nextTick(function () {
                                a.css("opacity", 0), a.transition(400);
                            }, 1e3))),
                        t.emit("scrollbarDragEnd", e),
                        i.snapOnRelease && t.slideToClosest());
                },
                enableDraggable: function () {
                    var e,
                        t,
                        i,
                        n,
                        r,
                        a = this;
                    a.params.scrollbar.el &&
                        ((n = a.scrollbar),
                        (e = a.touchEventsTouch),
                        (t = a.touchEventsDesktop),
                        (r = a.params),
                        (i = n.$el[0]),
                        (n = !(!x.passiveListener || !r.passiveListeners) && { passive: !1, capture: !1 }),
                        (r = !(!x.passiveListener || !r.passiveListeners) && { passive: !0, capture: !1 }),
                        x.touch
                            ? (i.addEventListener(e.start, a.scrollbar.onDragStart, n), i.addEventListener(e.move, a.scrollbar.onDragMove, n), i.addEventListener(e.end, a.scrollbar.onDragEnd, r))
                            : (i.addEventListener(t.start, a.scrollbar.onDragStart, n), v.addEventListener(t.move, a.scrollbar.onDragMove, n), v.addEventListener(t.end, a.scrollbar.onDragEnd, r)));
                },
                disableDraggable: function () {
                    var e,
                        t,
                        i,
                        n,
                        r,
                        a = this;
                    a.params.scrollbar.el &&
                        ((n = a.scrollbar),
                        (e = a.touchEventsTouch),
                        (t = a.touchEventsDesktop),
                        (r = a.params),
                        (i = n.$el[0]),
                        (n = !(!x.passiveListener || !r.passiveListeners) && { passive: !1, capture: !1 }),
                        (r = !(!x.passiveListener || !r.passiveListeners) && { passive: !0, capture: !1 }),
                        x.touch
                            ? (i.removeEventListener(e.start, a.scrollbar.onDragStart, n), i.removeEventListener(e.move, a.scrollbar.onDragMove, n), i.removeEventListener(e.end, a.scrollbar.onDragEnd, r))
                            : (i.removeEventListener(t.start, a.scrollbar.onDragStart, n), v.removeEventListener(t.move, a.scrollbar.onDragMove, n), v.removeEventListener(t.end, a.scrollbar.onDragEnd, r)));
                },
                init: function () {
                    var e, t, i, n;
                    this.params.scrollbar.el &&
                        ((e = this.scrollbar),
                        (n = this.$el),
                        (i = T((t = this.params.scrollbar).el)),
                        0 === (n = (i = this.params.uniqueNavElements && "string" == typeof t.el && 1 < i.length && 1 === n.find(t.el).length ? n.find(t.el) : i).find("." + this.params.scrollbar.dragClass)).length &&
                            ((n = T('<div class="' + this.params.scrollbar.dragClass + '"></div>')), i.append(n)),
                        U.extend(e, { $el: i, el: i[0], $dragEl: n, dragEl: n[0] }),
                        t.draggable && e.enableDraggable());
                },
                destroy: function () {
                    this.scrollbar.disableDraggable();
                },
            },
            V = {
                setTransform: function (e, t) {
                    var i = this.rtl,
                        n = T(e),
                        r = i ? -1 : 1,
                        a = n.attr("data-swiper-parallax") || "0",
                        s = n.attr("data-swiper-parallax-x"),
                        o = n.attr("data-swiper-parallax-y"),
                        e = n.attr("data-swiper-parallax-scale"),
                        i = n.attr("data-swiper-parallax-opacity");
                    s || o ? ((s = s || "0"), (o = o || "0")) : this.isHorizontal() ? ((s = a), (o = "0")) : ((o = a), (s = "0")),
                        (s = 0 <= s.indexOf("%") ? parseInt(s, 10) * t * r + "%" : s * t * r + "px"),
                        (o = 0 <= o.indexOf("%") ? parseInt(o, 10) * t + "%" : o * t + "px"),
                        null != i && ((i = i - (i - 1) * (1 - Math.abs(t))), (n[0].style.opacity = i)),
                        null == e ? n.transform("translate3d(" + s + ", " + o + ", 0px)") : ((t = e - (e - 1) * (1 - Math.abs(t))), n.transform("translate3d(" + s + ", " + o + ", 0px) scale(" + t + ")"));
                },
                setTranslate: function () {
                    var n = this,
                        e = n.$el,
                        t = n.slides,
                        r = n.progress,
                        a = n.snapGrid;
                    e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (e, t) {
                        n.parallax.setTransform(t, r);
                    }),
                        t.each(function (e, t) {
                            var i = t.progress;
                            1 < n.params.slidesPerGroup && "auto" !== n.params.slidesPerView && (i += Math.ceil(e / 2) - r * (a.length - 1)),
                                (i = Math.min(Math.max(i, -1), 1)),
                                T(t)
                                    .find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]")
                                    .each(function (e, t) {
                                        n.parallax.setTransform(t, i);
                                    });
                        });
                },
                setTransition: function (n) {
                    void 0 === n && (n = this.params.speed);
                    this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function (e, t) {
                        var i = T(t),
                            t = parseInt(i.attr("data-swiper-parallax-duration"), 10) || n;
                        0 === n && (t = 0), i.transition(t);
                    });
                },
            },
            G = {
                getDistanceBetweenTouches: function (e) {
                    if (e.targetTouches.length < 2) return 1;
                    var t = e.targetTouches[0].pageX,
                        i = e.targetTouches[0].pageY,
                        n = e.targetTouches[1].pageX,
                        e = e.targetTouches[1].pageY;
                    return Math.sqrt(Math.pow(n - t, 2) + Math.pow(e - i, 2));
                },
                onGestureStart: function (e) {
                    var t = this.params.zoom,
                        i = this.zoom,
                        n = i.gesture;
                    if (((i.fakeGestureTouched = !1), (i.fakeGestureMoved = !1), !x.gestures)) {
                        if ("touchstart" !== e.type || ("touchstart" === e.type && e.targetTouches.length < 2)) return;
                        (i.fakeGestureTouched = !0), (n.scaleStart = G.getDistanceBetweenTouches(e));
                    }
                    (n.$slideEl && n.$slideEl.length) ||
                    ((n.$slideEl = T(e.target).closest("." + this.params.slideClass)),
                    0 === n.$slideEl.length && (n.$slideEl = this.slides.eq(this.activeIndex)),
                    (n.$imageEl = n.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target")),
                    (n.$imageWrapEl = n.$imageEl.parent("." + t.containerClass)),
                    (n.maxRatio = n.$imageWrapEl.attr("data-swiper-zoom") || t.maxRatio),
                    0 !== n.$imageWrapEl.length)
                        ? (n.$imageEl && n.$imageEl.transition(0), (this.zoom.isScaling = !0))
                        : (n.$imageEl = void 0);
                },
                onGestureChange: function (e) {
                    var t = this.params.zoom,
                        i = this.zoom,
                        n = i.gesture;
                    if (!x.gestures) {
                        if ("touchmove" !== e.type || ("touchmove" === e.type && e.targetTouches.length < 2)) return;
                        (i.fakeGestureMoved = !0), (n.scaleMove = G.getDistanceBetweenTouches(e));
                    }
                    n.$imageEl &&
                        0 !== n.$imageEl.length &&
                        (x.gestures ? (i.scale = e.scale * i.currentScale) : (i.scale = (n.scaleMove / n.scaleStart) * i.currentScale),
                        i.scale > n.maxRatio && (i.scale = n.maxRatio - 1 + Math.pow(i.scale - n.maxRatio + 1, 0.5)),
                        i.scale < t.minRatio && (i.scale = t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, 0.5)),
                        n.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"));
                },
                onGestureEnd: function (e) {
                    var t = this.params.zoom,
                        i = this.zoom,
                        n = i.gesture;
                    if (!x.gestures) {
                        if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
                        if ("touchend" !== e.type || ("touchend" === e.type && e.changedTouches.length < 2 && !I.android)) return;
                        (i.fakeGestureTouched = !1), (i.fakeGestureMoved = !1);
                    }
                    n.$imageEl &&
                        0 !== n.$imageEl.length &&
                        ((i.scale = Math.max(Math.min(i.scale, n.maxRatio), t.minRatio)),
                        n.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"),
                        (i.currentScale = i.scale),
                        (i.isScaling = !1),
                        1 === i.scale && (n.$slideEl = void 0));
                },
                onTouchStart: function (e) {
                    var t = this.zoom,
                        i = t.gesture,
                        t = t.image;
                    i.$imageEl &&
                        0 !== i.$imageEl.length &&
                        (t.isTouched ||
                            (I.android && e.cancelable && e.preventDefault(),
                            (t.isTouched = !0),
                            (t.touchesStart.x = ("touchstart" === e.type ? e.targetTouches[0] : e).pageX),
                            (t.touchesStart.y = ("touchstart" === e.type ? e.targetTouches[0] : e).pageY)));
                },
                onTouchMove: function (e) {
                    var t = this.zoom,
                        i = t.gesture,
                        n = t.image,
                        r = t.velocity;
                    if (i.$imageEl && 0 !== i.$imageEl.length && ((this.allowClick = !1), n.isTouched && i.$slideEl)) {
                        n.isMoved ||
                            ((n.width = i.$imageEl[0].offsetWidth),
                            (n.height = i.$imageEl[0].offsetHeight),
                            (n.startX = U.getTranslate(i.$imageWrapEl[0], "x") || 0),
                            (n.startY = U.getTranslate(i.$imageWrapEl[0], "y") || 0),
                            (i.slideWidth = i.$slideEl[0].offsetWidth),
                            (i.slideHeight = i.$slideEl[0].offsetHeight),
                            i.$imageWrapEl.transition(0),
                            this.rtl && ((n.startX = -n.startX), (n.startY = -n.startY)));
                        var a = n.width * t.scale,
                            s = n.height * t.scale;
                        if (!(a < i.slideWidth && s < i.slideHeight)) {
                            if (
                                ((n.minX = Math.min(i.slideWidth / 2 - a / 2, 0)),
                                (n.maxX = -n.minX),
                                (n.minY = Math.min(i.slideHeight / 2 - s / 2, 0)),
                                (n.maxY = -n.minY),
                                (n.touchesCurrent.x = ("touchmove" === e.type ? e.targetTouches[0] : e).pageX),
                                (n.touchesCurrent.y = ("touchmove" === e.type ? e.targetTouches[0] : e).pageY),
                                !n.isMoved && !t.isScaling)
                            ) {
                                if (this.isHorizontal() && ((Math.floor(n.minX) === Math.floor(n.startX) && n.touchesCurrent.x < n.touchesStart.x) || (Math.floor(n.maxX) === Math.floor(n.startX) && n.touchesCurrent.x > n.touchesStart.x)))
                                    return void (n.isTouched = !1);
                                if (!this.isHorizontal() && ((Math.floor(n.minY) === Math.floor(n.startY) && n.touchesCurrent.y < n.touchesStart.y) || (Math.floor(n.maxY) === Math.floor(n.startY) && n.touchesCurrent.y > n.touchesStart.y)))
                                    return void (n.isTouched = !1);
                            }
                            e.cancelable && e.preventDefault(),
                                e.stopPropagation(),
                                (n.isMoved = !0),
                                (n.currentX = n.touchesCurrent.x - n.touchesStart.x + n.startX),
                                (n.currentY = n.touchesCurrent.y - n.touchesStart.y + n.startY),
                                n.currentX < n.minX && (n.currentX = n.minX + 1 - Math.pow(n.minX - n.currentX + 1, 0.8)),
                                n.currentX > n.maxX && (n.currentX = n.maxX - 1 + Math.pow(n.currentX - n.maxX + 1, 0.8)),
                                n.currentY < n.minY && (n.currentY = n.minY + 1 - Math.pow(n.minY - n.currentY + 1, 0.8)),
                                n.currentY > n.maxY && (n.currentY = n.maxY - 1 + Math.pow(n.currentY - n.maxY + 1, 0.8)),
                                r.prevPositionX || (r.prevPositionX = n.touchesCurrent.x),
                                r.prevPositionY || (r.prevPositionY = n.touchesCurrent.y),
                                r.prevTime || (r.prevTime = Date.now()),
                                (r.x = (n.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2),
                                (r.y = (n.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2),
                                Math.abs(n.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0),
                                Math.abs(n.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0),
                                (r.prevPositionX = n.touchesCurrent.x),
                                (r.prevPositionY = n.touchesCurrent.y),
                                (r.prevTime = Date.now()),
                                i.$imageWrapEl.transform("translate3d(" + n.currentX + "px, " + n.currentY + "px,0)");
                        }
                    }
                },
                onTouchEnd: function () {
                    var e = this.zoom,
                        t = e.gesture,
                        i = e.image,
                        n = e.velocity;
                    if (t.$imageEl && 0 !== t.$imageEl.length) {
                        if (!i.isTouched || !i.isMoved) return (i.isTouched = !1), void (i.isMoved = !1);
                        (i.isTouched = !1), (i.isMoved = !1);
                        var r = 300,
                            a = 300,
                            s = n.x * r,
                            o = i.currentX + s,
                            s = n.y * a,
                            s = i.currentY + s;
                        0 !== n.x && (r = Math.abs((o - i.currentX) / n.x)), 0 !== n.y && (a = Math.abs((s - i.currentY) / n.y));
                        a = Math.max(r, a);
                        (i.currentX = o), (i.currentY = s);
                        (s = i.width * e.scale), (e = i.height * e.scale);
                        (i.minX = Math.min(t.slideWidth / 2 - s / 2, 0)),
                            (i.maxX = -i.minX),
                            (i.minY = Math.min(t.slideHeight / 2 - e / 2, 0)),
                            (i.maxY = -i.minY),
                            (i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX)),
                            (i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY)),
                            t.$imageWrapEl.transition(a).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)");
                    }
                },
                onTransitionEnd: function () {
                    var e = this.zoom,
                        t = e.gesture;
                    t.$slideEl &&
                        this.previousIndex !== this.activeIndex &&
                        (t.$imageEl && t.$imageEl.transform("translate3d(0,0,0) scale(1)"),
                        t.$imageWrapEl && t.$imageWrapEl.transform("translate3d(0,0,0)"),
                        (e.scale = 1),
                        (e.currentScale = 1),
                        (t.$slideEl = void 0),
                        (t.$imageEl = void 0),
                        (t.$imageWrapEl = void 0));
                },
                toggle: function (e) {
                    var t = this.zoom;
                    t.scale && 1 !== t.scale ? t.out() : t.in(e);
                },
                in: function (e) {
                    var t,
                        i,
                        n,
                        r = this.zoom,
                        a = this.params.zoom,
                        s = r.gesture,
                        o = r.image;
                    s.$slideEl ||
                        (this.params.virtual && this.params.virtual.enabled && this.virtual ? (s.$slideEl = this.$wrapperEl.children("." + this.params.slideActiveClass)) : (s.$slideEl = this.slides.eq(this.activeIndex)),
                        (s.$imageEl = s.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target")),
                        (s.$imageWrapEl = s.$imageEl.parent("." + a.containerClass))),
                        s.$imageEl &&
                            0 !== s.$imageEl.length &&
                            (s.$slideEl.addClass("" + a.zoomedSlideClass),
                            (o = void 0 === o.touchesStart.x && e ? ((n = ("touchend" === e.type ? e.changedTouches[0] : e).pageX), ("touchend" === e.type ? e.changedTouches[0] : e).pageY) : ((n = o.touchesStart.x), o.touchesStart.y)),
                            (r.scale = s.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio),
                            (r.currentScale = s.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio),
                            e
                                ? ((a = s.$slideEl[0].offsetWidth),
                                  (e = s.$slideEl[0].offsetHeight),
                                  (t = s.$slideEl.offset().left + a / 2 - n),
                                  (i = s.$slideEl.offset().top + e / 2 - o),
                                  (n = s.$imageEl[0].offsetWidth),
                                  (o = s.$imageEl[0].offsetHeight),
                                  (n = n * r.scale),
                                  (o = o * r.scale),
                                  (a = Math.min(a / 2 - n / 2, 0)),
                                  (e = -(n = Math.min(e / 2 - o / 2, 0))),
                                  (o = -a) < (t = (t = t * r.scale) < a ? a : t) && (t = o),
                                  e < (i = (i = i * r.scale) < n ? n : i) && (i = e))
                                : (i = t = 0),
                            s.$imageWrapEl.transition(300).transform("translate3d(" + t + "px, " + i + "px,0)"),
                            s.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + r.scale + ")"));
                },
                out: function () {
                    var e = this.zoom,
                        t = this.params.zoom,
                        i = e.gesture;
                    i.$slideEl ||
                        (this.params.virtual && this.params.virtual.enabled && this.virtual ? (i.$slideEl = this.$wrapperEl.children("." + this.params.slideActiveClass)) : (i.$slideEl = this.slides.eq(this.activeIndex)),
                        (i.$imageEl = i.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target")),
                        (i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass))),
                        i.$imageEl &&
                            0 !== i.$imageEl.length &&
                            ((e.scale = 1),
                            (e.currentScale = 1),
                            i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
                            i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
                            i.$slideEl.removeClass("" + t.zoomedSlideClass),
                            (i.$slideEl = void 0));
                },
                enable: function () {
                    var e,
                        t,
                        i,
                        n = this,
                        r = n.zoom;
                    r.enabled ||
                        ((r.enabled = !0),
                        (e = !("touchstart" !== n.touchEvents.start || !x.passiveListener || !n.params.passiveListeners) && { passive: !0, capture: !1 }),
                        (t = !x.passiveListener || { passive: !1, capture: !0 }),
                        (i = "." + n.params.slideClass),
                        x.gestures
                            ? (n.$wrapperEl.on("gesturestart", i, r.onGestureStart, e), n.$wrapperEl.on("gesturechange", i, r.onGestureChange, e), n.$wrapperEl.on("gestureend", i, r.onGestureEnd, e))
                            : "touchstart" === n.touchEvents.start &&
                              (n.$wrapperEl.on(n.touchEvents.start, i, r.onGestureStart, e),
                              n.$wrapperEl.on(n.touchEvents.move, i, r.onGestureChange, t),
                              n.$wrapperEl.on(n.touchEvents.end, i, r.onGestureEnd, e),
                              n.touchEvents.cancel && n.$wrapperEl.on(n.touchEvents.cancel, i, r.onGestureEnd, e)),
                        n.$wrapperEl.on(n.touchEvents.move, "." + n.params.zoom.containerClass, r.onTouchMove, t));
                },
                disable: function () {
                    var e,
                        t,
                        i,
                        n = this,
                        r = n.zoom;
                    r.enabled &&
                        ((n.zoom.enabled = !1),
                        (e = !("touchstart" !== n.touchEvents.start || !x.passiveListener || !n.params.passiveListeners) && { passive: !0, capture: !1 }),
                        (t = !x.passiveListener || { passive: !1, capture: !0 }),
                        (i = "." + n.params.slideClass),
                        x.gestures
                            ? (n.$wrapperEl.off("gesturestart", i, r.onGestureStart, e), n.$wrapperEl.off("gesturechange", i, r.onGestureChange, e), n.$wrapperEl.off("gestureend", i, r.onGestureEnd, e))
                            : "touchstart" === n.touchEvents.start &&
                              (n.$wrapperEl.off(n.touchEvents.start, i, r.onGestureStart, e),
                              n.$wrapperEl.off(n.touchEvents.move, i, r.onGestureChange, t),
                              n.$wrapperEl.off(n.touchEvents.end, i, r.onGestureEnd, e),
                              n.touchEvents.cancel && n.$wrapperEl.off(n.touchEvents.cancel, i, r.onGestureEnd, e)),
                        n.$wrapperEl.off(n.touchEvents.move, "." + n.params.zoom.containerClass, r.onTouchMove, t));
                },
            },
            Q = {
                loadInSlide: function (e, l) {
                    void 0 === l && (l = !0);
                    var d,
                        u = this,
                        c = u.params.lazy;
                    void 0 !== e &&
                        0 !== u.slides.length &&
                        ((e = (d = u.virtual && u.params.virtual.enabled ? u.$wrapperEl.children("." + u.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : u.slides.eq(e)).find(
                            "." + c.elementClass + ":not(." + c.loadedClass + "):not(." + c.loadingClass + ")"
                        )),
                        0 !== (e = d.hasClass(c.elementClass) && !d.hasClass(c.loadedClass) && !d.hasClass(c.loadingClass) ? e.add(d[0]) : e).length &&
                            e.each(function (e, t) {
                                var i = T(t);
                                i.addClass(c.loadingClass);
                                var n = i.attr("data-background"),
                                    r = i.attr("data-src"),
                                    a = i.attr("data-srcset"),
                                    s = i.attr("data-sizes"),
                                    o = i.parent("picture");
                                u.loadImage(i[0], r || n, a, s, !1, function () {
                                    var e, t;
                                    null == u ||
                                        !u ||
                                        (u && !u.params) ||
                                        u.destroyed ||
                                        (n
                                            ? (i.css("background-image", 'url("' + n + '")'), i.removeAttr("data-background"))
                                            : (a && (i.attr("srcset", a), i.removeAttr("data-srcset")),
                                              s && (i.attr("sizes", s), i.removeAttr("data-sizes")),
                                              o.length &&
                                                  o.children("source").each(function (e, t) {
                                                      t = T(t);
                                                      t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")), t.removeAttr("data-srcset"));
                                                  }),
                                              r && (i.attr("src", r), i.removeAttr("data-src"))),
                                        i.addClass(c.loadedClass).removeClass(c.loadingClass),
                                        d.find("." + c.preloaderClass).remove(),
                                        u.params.loop &&
                                            l &&
                                            ((t = d.attr("data-swiper-slide-index")),
                                            d.hasClass(u.params.slideDuplicateClass)
                                                ? ((e = u.$wrapperEl.children('[data-swiper-slide-index="' + t + '"]:not(.' + u.params.slideDuplicateClass + ")")), u.lazy.loadInSlide(e.index(), !1))
                                                : ((t = u.$wrapperEl.children("." + u.params.slideDuplicateClass + '[data-swiper-slide-index="' + t + '"]')), u.lazy.loadInSlide(t.index(), !1))),
                                        u.emit("lazyImageReady", d[0], i[0]),
                                        u.params.autoHeight && u.updateAutoHeight());
                                }),
                                    u.emit("lazyImageLoad", d[0], i[0]);
                            }));
                },
                load: function () {
                    var i = this,
                        t = i.$wrapperEl,
                        n = i.params,
                        r = i.slides,
                        e = i.activeIndex,
                        a = i.virtual && n.virtual.enabled,
                        s = n.lazy,
                        o = n.slidesPerView;
                    function l(e) {
                        if (a) {
                            if (t.children("." + n.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return 1;
                        } else if (r[e]) return 1;
                    }
                    function d(e) {
                        return a ? T(e).attr("data-swiper-slide-index") : T(e).index();
                    }
                    if (("auto" === o && (o = 0), i.lazy.initialImageLoaded || (i.lazy.initialImageLoaded = !0), i.params.watchSlidesVisibility))
                        t.children("." + n.slideVisibleClass).each(function (e, t) {
                            t = a ? T(t).attr("data-swiper-slide-index") : T(t).index();
                            i.lazy.loadInSlide(t);
                        });
                    else if (1 < o) for (var u = e; u < e + o; u += 1) l(u) && i.lazy.loadInSlide(u);
                    else i.lazy.loadInSlide(e);
                    if (s.loadPrevNext)
                        if (1 < o || (s.loadPrevNextAmount && 1 < s.loadPrevNextAmount)) {
                            for (var c = s.loadPrevNextAmount, s = o, h = Math.min(e + s + Math.max(c, s), r.length), c = Math.max(e - Math.max(s, c), 0), p = e + o; p < h; p += 1) l(p) && i.lazy.loadInSlide(p);
                            for (var f = c; f < e; f += 1) l(f) && i.lazy.loadInSlide(f);
                        } else {
                            c = t.children("." + n.slideNextClass);
                            0 < c.length && i.lazy.loadInSlide(d(c));
                            c = t.children("." + n.slidePrevClass);
                            0 < c.length && i.lazy.loadInSlide(d(c));
                        }
                },
            },
            K = {
                LinearSpline: function (e, t) {
                    var i,
                        n,
                        r,
                        a,
                        s,
                        o = function (e, t) {
                            for (n = -1, i = e.length; 1 < i - n; ) e[(r = (i + n) >> 1)] <= t ? (n = r) : (i = r);
                            return i;
                        };
                    return (
                        (this.x = e),
                        (this.y = t),
                        (this.lastIndex = e.length - 1),
                        (this.interpolate = function (e) {
                            return e ? ((s = o(this.x, e)), (a = s - 1), ((e - this.x[a]) * (this.y[s] - this.y[a])) / (this.x[s] - this.x[a]) + this.y[a]) : 0;
                        }),
                        this
                    );
                },
                getInterpolateFunction: function (e) {
                    this.controller.spline || (this.controller.spline = this.params.loop ? new K.LinearSpline(this.slidesGrid, e.slidesGrid) : new K.LinearSpline(this.snapGrid, e.snapGrid));
                },
                setTranslate: function (e, t) {
                    var i,
                        n,
                        r = this,
                        a = r.controller.control;
                    function s(e) {
                        var t = r.rtlTranslate ? -r.translate : r.translate;
                        "slide" === r.params.controller.by && (r.controller.getInterpolateFunction(e), (n = -r.controller.spline.interpolate(-t))),
                            (n && "container" !== r.params.controller.by) || ((i = (e.maxTranslate() - e.minTranslate()) / (r.maxTranslate() - r.minTranslate())), (n = (t - r.minTranslate()) * i + e.minTranslate())),
                            r.params.controller.inverse && (n = e.maxTranslate() - n),
                            e.updateProgress(n),
                            e.setTranslate(n, r),
                            e.updateActiveIndex(),
                            e.updateSlidesClasses();
                    }
                    if (Array.isArray(a)) for (var o = 0; o < a.length; o += 1) a[o] !== t && a[o] instanceof B && s(a[o]);
                    else a instanceof B && t !== a && s(a);
                },
                setTransition: function (t, e) {
                    var i,
                        n = this,
                        r = n.controller.control;
                    function a(e) {
                        e.setTransition(t, n),
                            0 !== t &&
                                (e.transitionStart(),
                                e.params.autoHeight &&
                                    U.nextTick(function () {
                                        e.updateAutoHeight();
                                    }),
                                e.$wrapperEl.transitionEnd(function () {
                                    r && (e.params.loop && "slide" === n.params.controller.by && e.loopFix(), e.transitionEnd());
                                }));
                    }
                    if (Array.isArray(r)) for (i = 0; i < r.length; i += 1) r[i] !== e && r[i] instanceof B && a(r[i]);
                    else r instanceof B && e !== r && a(r);
                },
            },
            J = {
                makeElFocusable: function (e) {
                    return e.attr("tabIndex", "0"), e;
                },
                makeElNotFocusable: function (e) {
                    return e.attr("tabIndex", "-1"), e;
                },
                addElRole: function (e, t) {
                    return e.attr("role", t), e;
                },
                addElLabel: function (e, t) {
                    return e.attr("aria-label", t), e;
                },
                disableEl: function (e) {
                    return e.attr("aria-disabled", !0), e;
                },
                enableEl: function (e) {
                    return e.attr("aria-disabled", !1), e;
                },
                onEnterKey: function (e) {
                    var t = this,
                        i = t.params.a11y;
                    13 === e.keyCode &&
                        ((e = T(e.target)),
                        t.navigation && t.navigation.$nextEl && e.is(t.navigation.$nextEl) && ((t.isEnd && !t.params.loop) || t.slideNext(), t.isEnd ? t.a11y.notify(i.lastSlideMessage) : t.a11y.notify(i.nextSlideMessage)),
                        t.navigation && t.navigation.$prevEl && e.is(t.navigation.$prevEl) && ((t.isBeginning && !t.params.loop) || t.slidePrev(), t.isBeginning ? t.a11y.notify(i.firstSlideMessage) : t.a11y.notify(i.prevSlideMessage)),
                        t.pagination && e.is("." + t.params.pagination.bulletClass) && e[0].click());
                },
                notify: function (e) {
                    var t = this.a11y.liveRegion;
                    0 !== t.length && (t.html(""), t.html(e));
                },
                updateNavigation: function () {
                    var e,
                        t,
                        i = this;
                    !i.params.loop &&
                        i.navigation &&
                        ((e = (t = i.navigation).$nextEl),
                        (t = t.$prevEl) && 0 < t.length && (i.isBeginning ? (i.a11y.disableEl(t), i.a11y.makeElNotFocusable(t)) : (i.a11y.enableEl(t), i.a11y.makeElFocusable(t))),
                        e && 0 < e.length && (i.isEnd ? (i.a11y.disableEl(e), i.a11y.makeElNotFocusable(e)) : (i.a11y.enableEl(e), i.a11y.makeElFocusable(e))));
                },
                updatePagination: function () {
                    var i = this,
                        n = i.params.a11y;
                    i.pagination &&
                        i.params.pagination.clickable &&
                        i.pagination.bullets &&
                        i.pagination.bullets.length &&
                        i.pagination.bullets.each(function (e, t) {
                            t = T(t);
                            i.a11y.makeElFocusable(t), i.a11y.addElRole(t, "button"), i.a11y.addElLabel(t, n.paginationBulletMessage.replace(/\{\{index\}\}/, t.index() + 1));
                        });
                },
                init: function () {
                    var e = this;
                    e.$el.append(e.a11y.liveRegion);
                    var t,
                        i,
                        n = e.params.a11y;
                    e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl),
                        e.navigation && e.navigation.$prevEl && (i = e.navigation.$prevEl),
                        t && (e.a11y.makeElFocusable(t), e.a11y.addElRole(t, "button"), e.a11y.addElLabel(t, n.nextSlideMessage), t.on("keydown", e.a11y.onEnterKey)),
                        i && (e.a11y.makeElFocusable(i), e.a11y.addElRole(i, "button"), e.a11y.addElLabel(i, n.prevSlideMessage), i.on("keydown", e.a11y.onEnterKey)),
                        e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey);
                },
                destroy: function () {
                    var e,
                        t,
                        i = this;
                    i.a11y.liveRegion && 0 < i.a11y.liveRegion.length && i.a11y.liveRegion.remove(),
                        i.navigation && i.navigation.$nextEl && (e = i.navigation.$nextEl),
                        i.navigation && i.navigation.$prevEl && (t = i.navigation.$prevEl),
                        e && e.off("keydown", i.a11y.onEnterKey),
                        t && t.off("keydown", i.a11y.onEnterKey),
                        i.pagination && i.params.pagination.clickable && i.pagination.bullets && i.pagination.bullets.length && i.pagination.$el.off("keydown", "." + i.params.pagination.bulletClass, i.a11y.onEnterKey);
                },
            },
            Z = {
                init: function () {
                    if (this.params.history) {
                        if (!X.history || !X.history.pushState) return (this.params.history.enabled = !1), void (this.params.hashNavigation.enabled = !0);
                        var e = this.history;
                        (e.initialized = !0),
                            (e.paths = Z.getPathValues()),
                            (e.paths.key || e.paths.value) && (e.scrollToSlide(0, e.paths.value, this.params.runCallbacksOnInit), this.params.history.replaceState || X.addEventListener("popstate", this.history.setHistoryPopState));
                    }
                },
                destroy: function () {
                    this.params.history.replaceState || X.removeEventListener("popstate", this.history.setHistoryPopState);
                },
                setHistoryPopState: function () {
                    (this.history.paths = Z.getPathValues()), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1);
                },
                getPathValues: function () {
                    var e = X.location.pathname
                            .slice(1)
                            .split("/")
                            .filter(function (e) {
                                return "" !== e;
                            }),
                        t = e.length;
                    return { key: e[t - 2], value: e[t - 1] };
                },
                setHistory: function (e, t) {
                    this.history.initialized &&
                        this.params.history.enabled &&
                        ((t = this.slides.eq(t)),
                        (t = Z.slugify(t.attr("data-history"))),
                        X.location.pathname.includes(e) || (t = e + "/" + t),
                        ((e = X.history.state) && e.value === t) || (this.params.history.replaceState ? X.history.replaceState({ value: t }, null, t) : X.history.pushState({ value: t }, null, t)));
                },
                slugify: function (e) {
                    return e
                        .toString()
                        .replace(/\s+/g, "-")
                        .replace(/[^\w-]+/g, "")
                        .replace(/--+/g, "-")
                        .replace(/^-+/, "")
                        .replace(/-+$/, "");
                },
                scrollToSlide: function (e, t, i) {
                    if (t)
                        for (var n = 0, r = this.slides.length; n < r; n += 1) {
                            var a = this.slides.eq(n);
                            Z.slugify(a.attr("data-history")) !== t || a.hasClass(this.params.slideDuplicateClass) || ((a = a.index()), this.slideTo(a, e, i));
                        }
                    else this.slideTo(0, e, i);
                },
            },
            ee = {
                onHashCange: function () {
                    this.emit("hashChange");
                    var e = v.location.hash.replace("#", "");
                    e === this.slides.eq(this.activeIndex).attr("data-hash") || (void 0 !== (e = this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + e + '"]').index()) && this.slideTo(e));
                },
                setHash: function () {
                    var e;
                    this.hashNavigation.initialized &&
                        this.params.hashNavigation.enabled &&
                        (this.params.hashNavigation.replaceState && X.history && X.history.replaceState
                            ? X.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || "")
                            : ((e = (e = this.slides.eq(this.activeIndex)).attr("data-hash") || e.attr("data-history")), (v.location.hash = e || "")),
                        this.emit("hashSet"));
                },
                init: function () {
                    var e = this;
                    if (!(!e.params.hashNavigation.enabled || (e.params.history && e.params.history.enabled))) {
                        e.hashNavigation.initialized = !0;
                        var t = v.location.hash.replace("#", "");
                        if (t)
                            for (var i = 0, n = e.slides.length; i < n; i += 1) {
                                var r = e.slides.eq(i);
                                (r.attr("data-hash") || r.attr("data-history")) !== t || r.hasClass(e.params.slideDuplicateClass) || ((r = r.index()), e.slideTo(r, 0, e.params.runCallbacksOnInit, !0));
                            }
                        e.params.hashNavigation.watchState && T(X).on("hashchange", e.hashNavigation.onHashCange);
                    }
                },
                destroy: function () {
                    this.params.hashNavigation.watchState && T(X).off("hashchange", this.hashNavigation.onHashCange);
                },
            },
            te = {
                run: function () {
                    var e = this,
                        t = e.slides.eq(e.activeIndex),
                        i = e.params.autoplay.delay;
                    t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
                        clearTimeout(e.autoplay.timeout),
                        (e.autoplay.timeout = U.nextTick(function () {
                            e.params.autoplay.reverseDirection
                                ? e.params.loop
                                    ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay"))
                                    : e.isBeginning
                                    ? e.params.autoplay.stopOnLastSlide
                                        ? e.autoplay.stop()
                                        : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay"))
                                    : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay"))
                                : e.params.loop
                                ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"))
                                : e.isEnd
                                ? e.params.autoplay.stopOnLastSlide
                                    ? e.autoplay.stop()
                                    : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay"))
                                : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")),
                                e.params.cssMode && e.autoplay.running && e.autoplay.run();
                        }, i));
                },
                start: function () {
                    return void 0 === this.autoplay.timeout && !this.autoplay.running && ((this.autoplay.running = !0), this.emit("autoplayStart"), this.autoplay.run(), !0);
                },
                stop: function () {
                    return (
                        !!this.autoplay.running &&
                        void 0 !== this.autoplay.timeout &&
                        (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), (this.autoplay.timeout = void 0)), (this.autoplay.running = !1), this.emit("autoplayStop"), !0)
                    );
                },
                pause: function (e) {
                    var t = this;
                    t.autoplay.running &&
                        (t.autoplay.paused ||
                            (t.autoplay.timeout && clearTimeout(t.autoplay.timeout),
                            (t.autoplay.paused = !0),
                            0 !== e && t.params.autoplay.waitForTransition
                                ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd))
                                : ((t.autoplay.paused = !1), t.autoplay.run())));
                },
            },
            ie = {
                setTranslate: function () {
                    for (var e = this.slides, t = 0; t < e.length; t += 1) {
                        var i = this.slides.eq(t),
                            n = -i[0].swiperSlideOffset;
                        this.params.virtualTranslate || (n -= this.translate);
                        var r = 0;
                        this.isHorizontal() || ((r = n), (n = 0));
                        var a = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                        i.css({ opacity: a }).transform("translate3d(" + n + "px, " + r + "px, 0px)");
                    }
                },
                setTransition: function (e) {
                    var i,
                        n = this,
                        t = n.slides,
                        r = n.$wrapperEl;
                    t.transition(e),
                        n.params.virtualTranslate &&
                            0 !== e &&
                            ((i = !1),
                            t.transitionEnd(function () {
                                if (!i && n && !n.destroyed) {
                                    (i = !0), (n.animating = !1);
                                    for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1) r.trigger(e[t]);
                                }
                            }));
                },
            },
            ne = {
                setTranslate: function () {
                    var e,
                        t = this,
                        i = t.$el,
                        n = t.$wrapperEl,
                        r = t.slides,
                        a = t.width,
                        s = t.height,
                        o = t.rtlTranslate,
                        l = t.size,
                        d = t.params.cubeEffect,
                        u = t.isHorizontal(),
                        c = t.virtual && t.params.virtual.enabled,
                        h = 0;
                    d.shadow &&
                        (u
                            ? (0 === (e = n.find(".swiper-cube-shadow")).length && ((e = T('<div class="swiper-cube-shadow"></div>')), n.append(e)), e.css({ height: a + "px" }))
                            : 0 === (e = i.find(".swiper-cube-shadow")).length && ((e = T('<div class="swiper-cube-shadow"></div>')), i.append(e)));
                    for (var p = 0; p < r.length; p += 1) {
                        var f = r.eq(p),
                            m = p,
                            g = 90 * (m = c ? parseInt(f.attr("data-swiper-slide-index"), 10) : m),
                            v = Math.floor(g / 360);
                        o && ((g = -g), (v = Math.floor(-g / 360)));
                        var y = Math.max(Math.min(f[0].progress, 1), -1),
                            b = 0,
                            w = 0,
                            x = 0;
                        m % 4 == 0 ? ((b = 4 * -v * l), (x = 0)) : (m - 1) % 4 == 0 ? ((b = 0), (x = 4 * -v * l)) : (m - 2) % 4 == 0 ? ((b = l + 4 * v * l), (x = l)) : (m - 3) % 4 == 0 && ((b = -l), (x = 3 * l + 4 * l * v)),
                            o && (b = -b),
                            u || ((w = b), (b = 0));
                        x = "rotateX(" + (u ? 0 : -g) + "deg) rotateY(" + (u ? g : 0) + "deg) translate3d(" + b + "px, " + w + "px, " + x + "px)";
                        y <= 1 && -1 < y && (h = o ? 90 * -m - 90 * y : 90 * m + 90 * y),
                            f.transform(x),
                            d.slideShadows &&
                                ((m = u ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top")),
                                (x = u ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom")),
                                0 === m.length && ((m = T('<div class="swiper-slide-shadow-' + (u ? "left" : "top") + '"></div>')), f.append(m)),
                                0 === x.length && ((x = T('<div class="swiper-slide-shadow-' + (u ? "right" : "bottom") + '"></div>')), f.append(x)),
                                m.length && (m[0].style.opacity = Math.max(-y, 0)),
                                x.length && (x[0].style.opacity = Math.max(y, 0)));
                    }
                    n.css({ "-webkit-transform-origin": "50% 50% -" + l / 2 + "px", "-moz-transform-origin": "50% 50% -" + l / 2 + "px", "-ms-transform-origin": "50% 50% -" + l / 2 + "px", "transform-origin": "50% 50% -" + l / 2 + "px" }),
                        d.shadow &&
                            (u
                                ? e.transform("translate3d(0px, " + (a / 2 + d.shadowOffset) + "px, " + -a / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")")
                                : ((C = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90)),
                                  (i = 1.5 - (Math.sin((2 * C * Math.PI) / 360) / 2 + Math.cos((2 * C * Math.PI) / 360) / 2)),
                                  (a = d.shadowScale),
                                  (C = d.shadowScale / i),
                                  (i = d.shadowOffset),
                                  e.transform("scale3d(" + a + ", 1, " + C + ") translate3d(0px, " + (s / 2 + i) + "px, " + -s / 2 / C + "px) rotateX(-90deg)")));
                    var C = j.isSafari || j.isWebView ? -l / 2 : 0;
                    n.transform("translate3d(0px,0," + C + "px) rotateX(" + (t.isHorizontal() ? 0 : h) + "deg) rotateY(" + (t.isHorizontal() ? -h : 0) + "deg)");
                },
                setTransition: function (e) {
                    var t = this.$el;
                    this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
                        this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e);
                },
            },
            re = {
                setTranslate: function () {
                    for (var e = this.slides, t = this.rtlTranslate, i = 0; i < e.length; i += 1) {
                        var n,
                            r,
                            a = e.eq(i),
                            s = a[0].progress,
                            o = -180 * (s = this.params.flipEffect.limitRotation ? Math.max(Math.min(a[0].progress, 1), -1) : s),
                            l = 0,
                            d = -a[0].swiperSlideOffset,
                            u = 0;
                        this.isHorizontal() ? t && (o = -o) : ((u = d), (l = -o), (o = d = 0)),
                            (a[0].style.zIndex = -Math.abs(Math.round(s)) + e.length),
                            this.params.flipEffect.slideShadows &&
                                ((n = this.isHorizontal() ? a.find(".swiper-slide-shadow-left") : a.find(".swiper-slide-shadow-top")),
                                (r = this.isHorizontal() ? a.find(".swiper-slide-shadow-right") : a.find(".swiper-slide-shadow-bottom")),
                                0 === n.length && ((n = T('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>')), a.append(n)),
                                0 === r.length && ((r = T('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>')), a.append(r)),
                                n.length && (n[0].style.opacity = Math.max(-s, 0)),
                                r.length && (r[0].style.opacity = Math.max(s, 0))),
                            a.transform("translate3d(" + d + "px, " + u + "px, 0px) rotateX(" + l + "deg) rotateY(" + o + "deg)");
                    }
                },
                setTransition: function (e) {
                    var i,
                        n = this,
                        t = n.slides,
                        r = n.activeIndex,
                        a = n.$wrapperEl;
                    t.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
                        n.params.virtualTranslate &&
                            0 !== e &&
                            ((i = !1),
                            t.eq(r).transitionEnd(function () {
                                if (!i && n && !n.destroyed) {
                                    (i = !0), (n.animating = !1);
                                    for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1) a.trigger(e[t]);
                                }
                            }));
                },
            },
            ae = {
                setTranslate: function () {
                    for (
                        var e = this.width,
                            t = this.height,
                            i = this.slides,
                            n = this.$wrapperEl,
                            r = this.slidesSizesGrid,
                            a = this.params.coverflowEffect,
                            s = this.isHorizontal(),
                            o = this.translate,
                            l = s ? e / 2 - o : t / 2 - o,
                            d = s ? a.rotate : -a.rotate,
                            u = a.depth,
                            c = 0,
                            h = i.length;
                        c < h;
                        c += 1
                    ) {
                        var p = i.eq(c),
                            f = r[c],
                            m = ((l - p[0].swiperSlideOffset - f / 2) / f) * a.modifier,
                            g = s ? d * m : 0,
                            v = s ? 0 : d * m,
                            y = -u * Math.abs(m),
                            b = a.stretch;
                        "string" == typeof b && -1 !== b.indexOf("%") && (b = (parseFloat(a.stretch) / 100) * f);
                        var w = s ? 0 : b * m,
                            f = s ? b * m : 0,
                            b = 1 - (1 - a.scale) * Math.abs(m);
                        Math.abs(f) < 0.001 && (f = 0), Math.abs(w) < 0.001 && (w = 0), Math.abs(y) < 0.001 && (y = 0), Math.abs(g) < 0.001 && (g = 0);
                        g = "translate3d(" + f + "px," + w + "px," + y + "px)  rotateX(" + (v = Math.abs(v) < 0.001 ? 0 : v) + "deg) rotateY(" + g + "deg) scale(" + (b = Math.abs(b) < 0.001 ? 0 : b) + ")";
                        p.transform(g),
                            (p[0].style.zIndex = 1 - Math.abs(Math.round(m))),
                            a.slideShadows &&
                                ((b = s ? p.find(".swiper-slide-shadow-left") : p.find(".swiper-slide-shadow-top")),
                                (g = s ? p.find(".swiper-slide-shadow-right") : p.find(".swiper-slide-shadow-bottom")),
                                0 === b.length && ((b = T('<div class="swiper-slide-shadow-' + (s ? "left" : "top") + '"></div>')), p.append(b)),
                                0 === g.length && ((g = T('<div class="swiper-slide-shadow-' + (s ? "right" : "bottom") + '"></div>')), p.append(g)),
                                b.length && (b[0].style.opacity = 0 < m ? m : 0),
                                g.length && (g[0].style.opacity = 0 < -m ? -m : 0));
                    }
                    (x.pointerEvents || x.prefixedPointerEvents) && (n[0].style.perspectiveOrigin = l + "px 50%");
                },
                setTransition: function (e) {
                    this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
                },
            },
            se = {
                init: function () {
                    var e = this,
                        t = e.params.thumbs,
                        i = e.constructor;
                    t.swiper instanceof i
                        ? ((e.thumbs.swiper = t.swiper), U.extend(e.thumbs.swiper.originalParams, { watchSlidesProgress: !0, slideToClickedSlide: !1 }), U.extend(e.thumbs.swiper.params, { watchSlidesProgress: !0, slideToClickedSlide: !1 }))
                        : U.isObject(t.swiper) && ((e.thumbs.swiper = new i(U.extend({}, t.swiper, { watchSlidesVisibility: !0, watchSlidesProgress: !0, slideToClickedSlide: !1 }))), (e.thumbs.swiperCreated = !0)),
                        e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass),
                        e.thumbs.swiper.on("tap", e.thumbs.onThumbClick);
                },
                onThumbClick: function () {
                    var e,
                        t,
                        i,
                        n = this,
                        r = n.thumbs.swiper;
                    r &&
                        ((t = r.clickedIndex),
                        ((e = r.clickedSlide) && T(e).hasClass(n.params.thumbs.slideThumbActiveClass)) ||
                            (null != t &&
                                ((i = r.params.loop ? parseInt(T(r.clickedSlide).attr("data-swiper-slide-index"), 10) : t),
                                n.params.loop &&
                                    ((e = n.activeIndex),
                                    n.slides.eq(e).hasClass(n.params.slideDuplicateClass) && (n.loopFix(), (n._clientLeft = n.$wrapperEl[0].clientLeft), (e = n.activeIndex)),
                                    (r = n.slides
                                        .eq(e)
                                        .prevAll('[data-swiper-slide-index="' + i + '"]')
                                        .eq(0)
                                        .index()),
                                    (t = n.slides
                                        .eq(e)
                                        .nextAll('[data-swiper-slide-index="' + i + '"]')
                                        .eq(0)
                                        .index()),
                                    (i = void 0 === r || (void 0 !== t && t - e < e - r) ? t : r)),
                                n.slideTo(i))));
                },
                update: function (e) {
                    var t = this,
                        i = t.thumbs.swiper;
                    if (i) {
                        var n,
                            r,
                            a,
                            s = "auto" === i.params.slidesPerView ? i.slidesPerViewDynamic() : i.params.slidesPerView,
                            o = t.params.thumbs.autoScrollOffset,
                            l = o && !i.params.loop;
                        (t.realIndex === i.realIndex && !l) ||
                            ((n = i.activeIndex),
                            (a = i.params.loop
                                ? (i.slides.eq(n).hasClass(i.params.slideDuplicateClass) && (i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft), (n = i.activeIndex)),
                                  (a = i.slides
                                      .eq(n)
                                      .prevAll('[data-swiper-slide-index="' + t.realIndex + '"]')
                                      .eq(0)
                                      .index()),
                                  (r = i.slides
                                      .eq(n)
                                      .nextAll('[data-swiper-slide-index="' + t.realIndex + '"]')
                                      .eq(0)
                                      .index()),
                                  (r = void 0 === a ? r : void 0 === r ? a : r - n == n - a ? n : r - n < n - a ? r : a),
                                  t.activeIndex > t.previousIndex ? "next" : "prev")
                                : (r = t.realIndex) > t.previousIndex
                                ? "next"
                                : "prev"),
                            l && (r += "next" === a ? o : -1 * o),
                            i.visibleSlidesIndexes &&
                                i.visibleSlidesIndexes.indexOf(r) < 0 &&
                                (i.params.centeredSlides ? (r = n < r ? r - Math.floor(s / 2) + 1 : r + Math.floor(s / 2) - 1) : n < r && (r = r - s + 1), i.slideTo(r, e ? 0 : void 0)));
                        var d = 1,
                            u = t.params.thumbs.slideThumbActiveClass;
                        if (
                            (1 < t.params.slidesPerView && !t.params.centeredSlides && (d = t.params.slidesPerView),
                            t.params.thumbs.multipleActiveThumbs || (d = 1),
                            (d = Math.floor(d)),
                            i.slides.removeClass(u),
                            i.params.loop || (i.params.virtual && i.params.virtual.enabled))
                        )
                            for (var c = 0; c < d; c += 1) i.$wrapperEl.children('[data-swiper-slide-index="' + (t.realIndex + c) + '"]').addClass(u);
                        else for (var h = 0; h < d; h += 1) i.slides.eq(t.realIndex + h).addClass(u);
                    }
                },
            },
            c = [
                d,
                u,
                h,
                p,
                D,
                i,
                c,
                {
                    name: "mousewheel",
                    params: { mousewheel: { enabled: !1, releaseOnEdges: !1, invert: !1, forceToAxis: !1, sensitivity: 1, eventsTarged: "container" } },
                    create: function () {
                        U.extend(this, {
                            mousewheel: {
                                enabled: !1,
                                enable: q.enable.bind(this),
                                disable: q.disable.bind(this),
                                handle: q.handle.bind(this),
                                handleMouseEnter: q.handleMouseEnter.bind(this),
                                handleMouseLeave: q.handleMouseLeave.bind(this),
                                animateSlider: q.animateSlider.bind(this),
                                releaseScroll: q.releaseScroll.bind(this),
                                lastScrollTime: U.now(),
                                lastEventBeforeSnap: void 0,
                                recentWheelEvents: [],
                            },
                        });
                    },
                    on: {
                        init: function () {
                            !this.params.mousewheel.enabled && this.params.cssMode && this.mousewheel.disable(), this.params.mousewheel.enabled && this.mousewheel.enable();
                        },
                        destroy: function () {
                            this.params.cssMode && this.mousewheel.enable(), this.mousewheel.enabled && this.mousewheel.disable();
                        },
                    },
                },
                {
                    name: "navigation",
                    params: { navigation: { nextEl: null, prevEl: null, hideOnClick: !1, disabledClass: "swiper-button-disabled", hiddenClass: "swiper-button-hidden", lockClass: "swiper-button-lock" } },
                    create: function () {
                        U.extend(this, { navigation: { init: W.init.bind(this), update: W.update.bind(this), destroy: W.destroy.bind(this), onNextClick: W.onNextClick.bind(this), onPrevClick: W.onPrevClick.bind(this) } });
                    },
                    on: {
                        init: function () {
                            this.navigation.init(), this.navigation.update();
                        },
                        toEdge: function () {
                            this.navigation.update();
                        },
                        fromEdge: function () {
                            this.navigation.update();
                        },
                        destroy: function () {
                            this.navigation.destroy();
                        },
                        click: function (e) {
                            var t,
                                i = this,
                                n = i.navigation,
                                r = n.$nextEl,
                                n = n.$prevEl;
                            !i.params.navigation.hideOnClick ||
                                T(e.target).is(n) ||
                                T(e.target).is(r) ||
                                (r ? (t = r.hasClass(i.params.navigation.hiddenClass)) : n && (t = n.hasClass(i.params.navigation.hiddenClass)),
                                !0 === t ? i.emit("navigationShow", i) : i.emit("navigationHide", i),
                                r && r.toggleClass(i.params.navigation.hiddenClass),
                                n && n.toggleClass(i.params.navigation.hiddenClass));
                        },
                    },
                },
                {
                    name: "pagination",
                    params: {
                        pagination: {
                            el: null,
                            bulletElement: "span",
                            clickable: !1,
                            hideOnClick: !1,
                            renderBullet: null,
                            renderProgressbar: null,
                            renderFraction: null,
                            renderCustom: null,
                            progressbarOpposite: !1,
                            type: "bullets",
                            dynamicBullets: !1,
                            dynamicMainBullets: 1,
                            formatFractionCurrent: function (e) {
                                return e;
                            },
                            formatFractionTotal: function (e) {
                                return e;
                            },
                            bulletClass: "swiper-pagination-bullet",
                            bulletActiveClass: "swiper-pagination-bullet-active",
                            modifierClass: "swiper-pagination-",
                            currentClass: "swiper-pagination-current",
                            totalClass: "swiper-pagination-total",
                            hiddenClass: "swiper-pagination-hidden",
                            progressbarFillClass: "swiper-pagination-progressbar-fill",
                            progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                            clickableClass: "swiper-pagination-clickable",
                            lockClass: "swiper-pagination-lock",
                        },
                    },
                    create: function () {
                        U.extend(this, { pagination: { init: F.init.bind(this), render: F.render.bind(this), update: F.update.bind(this), destroy: F.destroy.bind(this), dynamicBulletIndex: 0 } });
                    },
                    on: {
                        init: function () {
                            this.pagination.init(), this.pagination.render(), this.pagination.update();
                        },
                        activeIndexChange: function () {
                            (!this.params.loop && void 0 !== this.snapIndex) || this.pagination.update();
                        },
                        snapIndexChange: function () {
                            this.params.loop || this.pagination.update();
                        },
                        slidesLengthChange: function () {
                            this.params.loop && (this.pagination.render(), this.pagination.update());
                        },
                        snapGridLengthChange: function () {
                            this.params.loop || (this.pagination.render(), this.pagination.update());
                        },
                        destroy: function () {
                            this.pagination.destroy();
                        },
                        click: function (e) {
                            var t = this;
                            t.params.pagination.el &&
                                t.params.pagination.hideOnClick &&
                                0 < t.pagination.$el.length &&
                                !T(e.target).hasClass(t.params.pagination.bulletClass) &&
                                (!0 === t.pagination.$el.hasClass(t.params.pagination.hiddenClass) ? t.emit("paginationShow", t) : t.emit("paginationHide", t), t.pagination.$el.toggleClass(t.params.pagination.hiddenClass));
                        },
                    },
                },
                {
                    name: "scrollbar",
                    params: { scrollbar: { el: null, dragSize: "auto", hide: !1, draggable: !1, snapOnRelease: !0, lockClass: "swiper-scrollbar-lock", dragClass: "swiper-scrollbar-drag" } },
                    create: function () {
                        var e = this;
                        U.extend(e, {
                            scrollbar: {
                                init: Y.init.bind(e),
                                destroy: Y.destroy.bind(e),
                                updateSize: Y.updateSize.bind(e),
                                setTranslate: Y.setTranslate.bind(e),
                                setTransition: Y.setTransition.bind(e),
                                enableDraggable: Y.enableDraggable.bind(e),
                                disableDraggable: Y.disableDraggable.bind(e),
                                setDragPosition: Y.setDragPosition.bind(e),
                                getPointerPosition: Y.getPointerPosition.bind(e),
                                onDragStart: Y.onDragStart.bind(e),
                                onDragMove: Y.onDragMove.bind(e),
                                onDragEnd: Y.onDragEnd.bind(e),
                                isTouched: !1,
                                timeout: null,
                                dragTimeout: null,
                            },
                        });
                    },
                    on: {
                        init: function () {
                            this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate();
                        },
                        update: function () {
                            this.scrollbar.updateSize();
                        },
                        resize: function () {
                            this.scrollbar.updateSize();
                        },
                        observerUpdate: function () {
                            this.scrollbar.updateSize();
                        },
                        setTranslate: function () {
                            this.scrollbar.setTranslate();
                        },
                        setTransition: function (e) {
                            this.scrollbar.setTransition(e);
                        },
                        destroy: function () {
                            this.scrollbar.destroy();
                        },
                    },
                },
                {
                    name: "parallax",
                    params: { parallax: { enabled: !1 } },
                    create: function () {
                        U.extend(this, { parallax: { setTransform: V.setTransform.bind(this), setTranslate: V.setTranslate.bind(this), setTransition: V.setTransition.bind(this) } });
                    },
                    on: {
                        beforeInit: function () {
                            this.params.parallax.enabled && ((this.params.watchSlidesProgress = !0), (this.originalParams.watchSlidesProgress = !0));
                        },
                        init: function () {
                            this.params.parallax.enabled && this.parallax.setTranslate();
                        },
                        setTranslate: function () {
                            this.params.parallax.enabled && this.parallax.setTranslate();
                        },
                        setTransition: function (e) {
                            this.params.parallax.enabled && this.parallax.setTransition(e);
                        },
                    },
                },
                {
                    name: "zoom",
                    params: { zoom: { enabled: !1, maxRatio: 3, minRatio: 1, toggle: !0, containerClass: "swiper-zoom-container", zoomedSlideClass: "swiper-slide-zoomed" } },
                    create: function () {
                        var n = this,
                            t = {
                                enabled: !1,
                                scale: 1,
                                currentScale: 1,
                                isScaling: !1,
                                gesture: { $slideEl: void 0, slideWidth: void 0, slideHeight: void 0, $imageEl: void 0, $imageWrapEl: void 0, maxRatio: 3 },
                                image: {
                                    isTouched: void 0,
                                    isMoved: void 0,
                                    currentX: void 0,
                                    currentY: void 0,
                                    minX: void 0,
                                    minY: void 0,
                                    maxX: void 0,
                                    maxY: void 0,
                                    width: void 0,
                                    height: void 0,
                                    startX: void 0,
                                    startY: void 0,
                                    touchesStart: {},
                                    touchesCurrent: {},
                                },
                                velocity: { x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0 },
                            };
                        "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function (e) {
                            t[e] = G[e].bind(n);
                        }),
                            U.extend(n, { zoom: t });
                        var r = 1;
                        Object.defineProperty(n.zoom, "scale", {
                            get: function () {
                                return r;
                            },
                            set: function (e) {
                                var t, i;
                                r !== e && ((t = n.zoom.gesture.$imageEl ? n.zoom.gesture.$imageEl[0] : void 0), (i = n.zoom.gesture.$slideEl ? n.zoom.gesture.$slideEl[0] : void 0), n.emit("zoomChange", e, t, i)), (r = e);
                            },
                        });
                    },
                    on: {
                        init: function () {
                            this.params.zoom.enabled && this.zoom.enable();
                        },
                        destroy: function () {
                            this.zoom.disable();
                        },
                        touchStart: function (e) {
                            this.zoom.enabled && this.zoom.onTouchStart(e);
                        },
                        touchEnd: function (e) {
                            this.zoom.enabled && this.zoom.onTouchEnd(e);
                        },
                        doubleTap: function (e) {
                            this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e);
                        },
                        transitionEnd: function () {
                            this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd();
                        },
                        slideChange: function () {
                            this.zoom.enabled && this.params.zoom.enabled && this.params.cssMode && this.zoom.onTransitionEnd();
                        },
                    },
                },
                {
                    name: "lazy",
                    params: {
                        lazy: {
                            enabled: !1,
                            loadPrevNext: !1,
                            loadPrevNextAmount: 1,
                            loadOnTransitionStart: !1,
                            elementClass: "swiper-lazy",
                            loadingClass: "swiper-lazy-loading",
                            loadedClass: "swiper-lazy-loaded",
                            preloaderClass: "swiper-lazy-preloader",
                        },
                    },
                    create: function () {
                        U.extend(this, { lazy: { initialImageLoaded: !1, load: Q.load.bind(this), loadInSlide: Q.loadInSlide.bind(this) } });
                    },
                    on: {
                        beforeInit: function () {
                            this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1);
                        },
                        init: function () {
                            this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load();
                        },
                        scroll: function () {
                            this.params.freeMode && !this.params.freeModeSticky && this.lazy.load();
                        },
                        resize: function () {
                            this.params.lazy.enabled && this.lazy.load();
                        },
                        scrollbarDragMove: function () {
                            this.params.lazy.enabled && this.lazy.load();
                        },
                        transitionStart: function () {
                            this.params.lazy.enabled && ((!this.params.lazy.loadOnTransitionStart && (this.params.lazy.loadOnTransitionStart || this.lazy.initialImageLoaded)) || this.lazy.load());
                        },
                        transitionEnd: function () {
                            this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load();
                        },
                        slideChange: function () {
                            this.params.lazy.enabled && this.params.cssMode && this.lazy.load();
                        },
                    },
                },
                {
                    name: "controller",
                    params: { controller: { control: void 0, inverse: !1, by: "slide" } },
                    create: function () {
                        U.extend(this, {
                            controller: { control: this.params.controller.control, getInterpolateFunction: K.getInterpolateFunction.bind(this), setTranslate: K.setTranslate.bind(this), setTransition: K.setTransition.bind(this) },
                        });
                    },
                    on: {
                        update: function () {
                            this.controller.control && this.controller.spline && ((this.controller.spline = void 0), delete this.controller.spline);
                        },
                        resize: function () {
                            this.controller.control && this.controller.spline && ((this.controller.spline = void 0), delete this.controller.spline);
                        },
                        observerUpdate: function () {
                            this.controller.control && this.controller.spline && ((this.controller.spline = void 0), delete this.controller.spline);
                        },
                        setTranslate: function (e, t) {
                            this.controller.control && this.controller.setTranslate(e, t);
                        },
                        setTransition: function (e, t) {
                            this.controller.control && this.controller.setTransition(e, t);
                        },
                    },
                },
                {
                    name: "a11y",
                    params: {
                        a11y: {
                            enabled: !0,
                            notificationClass: "swiper-notification",
                            prevSlideMessage: "Previous slide",
                            nextSlideMessage: "Next slide",
                            firstSlideMessage: "This is the first slide",
                            lastSlideMessage: "This is the last slide",
                            paginationBulletMessage: "Go to slide {{index}}",
                        },
                    },
                    create: function () {
                        var t = this;
                        U.extend(t, { a11y: { liveRegion: T('<span class="' + t.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>') } }),
                            Object.keys(J).forEach(function (e) {
                                t.a11y[e] = J[e].bind(t);
                            });
                    },
                    on: {
                        init: function () {
                            this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation());
                        },
                        toEdge: function () {
                            this.params.a11y.enabled && this.a11y.updateNavigation();
                        },
                        fromEdge: function () {
                            this.params.a11y.enabled && this.a11y.updateNavigation();
                        },
                        paginationUpdate: function () {
                            this.params.a11y.enabled && this.a11y.updatePagination();
                        },
                        destroy: function () {
                            this.params.a11y.enabled && this.a11y.destroy();
                        },
                    },
                },
                {
                    name: "history",
                    params: { history: { enabled: !1, replaceState: !1, key: "slides" } },
                    create: function () {
                        U.extend(this, {
                            history: { init: Z.init.bind(this), setHistory: Z.setHistory.bind(this), setHistoryPopState: Z.setHistoryPopState.bind(this), scrollToSlide: Z.scrollToSlide.bind(this), destroy: Z.destroy.bind(this) },
                        });
                    },
                    on: {
                        init: function () {
                            this.params.history.enabled && this.history.init();
                        },
                        destroy: function () {
                            this.params.history.enabled && this.history.destroy();
                        },
                        transitionEnd: function () {
                            this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex);
                        },
                        slideChange: function () {
                            this.history.initialized && this.params.cssMode && this.history.setHistory(this.params.history.key, this.activeIndex);
                        },
                    },
                },
                {
                    name: "hash-navigation",
                    params: { hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 } },
                    create: function () {
                        U.extend(this, { hashNavigation: { initialized: !1, init: ee.init.bind(this), destroy: ee.destroy.bind(this), setHash: ee.setHash.bind(this), onHashCange: ee.onHashCange.bind(this) } });
                    },
                    on: {
                        init: function () {
                            this.params.hashNavigation.enabled && this.hashNavigation.init();
                        },
                        destroy: function () {
                            this.params.hashNavigation.enabled && this.hashNavigation.destroy();
                        },
                        transitionEnd: function () {
                            this.hashNavigation.initialized && this.hashNavigation.setHash();
                        },
                        slideChange: function () {
                            this.hashNavigation.initialized && this.params.cssMode && this.hashNavigation.setHash();
                        },
                    },
                },
                {
                    name: "autoplay",
                    params: { autoplay: { enabled: !1, delay: 3e3, waitForTransition: !0, disableOnInteraction: !0, stopOnLastSlide: !1, reverseDirection: !1 } },
                    create: function () {
                        var t = this;
                        U.extend(t, {
                            autoplay: {
                                running: !1,
                                paused: !1,
                                run: te.run.bind(t),
                                start: te.start.bind(t),
                                stop: te.stop.bind(t),
                                pause: te.pause.bind(t),
                                onVisibilityChange: function () {
                                    "hidden" === document.visibilityState && t.autoplay.running && t.autoplay.pause(), "visible" === document.visibilityState && t.autoplay.paused && (t.autoplay.run(), (t.autoplay.paused = !1));
                                },
                                onTransitionEnd: function (e) {
                                    t &&
                                        !t.destroyed &&
                                        t.$wrapperEl &&
                                        e.target === this &&
                                        (t.$wrapperEl[0].removeEventListener("transitionend", t.autoplay.onTransitionEnd),
                                        t.$wrapperEl[0].removeEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd),
                                        (t.autoplay.paused = !1),
                                        t.autoplay.running ? t.autoplay.run() : t.autoplay.stop());
                                },
                            },
                        });
                    },
                    on: {
                        init: function () {
                            this.params.autoplay.enabled && (this.autoplay.start(), document.addEventListener("visibilitychange", this.autoplay.onVisibilityChange));
                        },
                        beforeTransitionStart: function (e, t) {
                            this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop());
                        },
                        sliderFirstMove: function () {
                            this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause());
                        },
                        touchEnd: function () {
                            this.params.cssMode && this.autoplay.paused && !this.params.autoplay.disableOnInteraction && this.autoplay.run();
                        },
                        destroy: function () {
                            this.autoplay.running && this.autoplay.stop(), document.removeEventListener("visibilitychange", this.autoplay.onVisibilityChange);
                        },
                    },
                },
                {
                    name: "effect-fade",
                    params: { fadeEffect: { crossFade: !1 } },
                    create: function () {
                        U.extend(this, { fadeEffect: { setTranslate: ie.setTranslate.bind(this), setTransition: ie.setTransition.bind(this) } });
                    },
                    on: {
                        beforeInit: function () {
                            var e;
                            "fade" === this.params.effect &&
                                (this.classNames.push(this.params.containerModifierClass + "fade"),
                                (e = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0 }),
                                U.extend(this.params, e),
                                U.extend(this.originalParams, e));
                        },
                        setTranslate: function () {
                            "fade" === this.params.effect && this.fadeEffect.setTranslate();
                        },
                        setTransition: function (e) {
                            "fade" === this.params.effect && this.fadeEffect.setTransition(e);
                        },
                    },
                },
                {
                    name: "effect-cube",
                    params: { cubeEffect: { slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: 0.94 } },
                    create: function () {
                        U.extend(this, { cubeEffect: { setTranslate: ne.setTranslate.bind(this), setTransition: ne.setTransition.bind(this) } });
                    },
                    on: {
                        beforeInit: function () {
                            var e;
                            "cube" === this.params.effect &&
                                (this.classNames.push(this.params.containerModifierClass + "cube"),
                                this.classNames.push(this.params.containerModifierClass + "3d"),
                                (e = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, resistanceRatio: 0, spaceBetween: 0, centeredSlides: !1, virtualTranslate: !0 }),
                                U.extend(this.params, e),
                                U.extend(this.originalParams, e));
                        },
                        setTranslate: function () {
                            "cube" === this.params.effect && this.cubeEffect.setTranslate();
                        },
                        setTransition: function (e) {
                            "cube" === this.params.effect && this.cubeEffect.setTransition(e);
                        },
                    },
                },
                {
                    name: "effect-flip",
                    params: { flipEffect: { slideShadows: !0, limitRotation: !0 } },
                    create: function () {
                        U.extend(this, { flipEffect: { setTranslate: re.setTranslate.bind(this), setTransition: re.setTransition.bind(this) } });
                    },
                    on: {
                        beforeInit: function () {
                            var e;
                            "flip" === this.params.effect &&
                                (this.classNames.push(this.params.containerModifierClass + "flip"),
                                this.classNames.push(this.params.containerModifierClass + "3d"),
                                (e = { slidesPerView: 1, slidesPerColumn: 1, slidesPerGroup: 1, watchSlidesProgress: !0, spaceBetween: 0, virtualTranslate: !0 }),
                                U.extend(this.params, e),
                                U.extend(this.originalParams, e));
                        },
                        setTranslate: function () {
                            "flip" === this.params.effect && this.flipEffect.setTranslate();
                        },
                        setTransition: function (e) {
                            "flip" === this.params.effect && this.flipEffect.setTransition(e);
                        },
                    },
                },
                {
                    name: "effect-coverflow",
                    params: { coverflowEffect: { rotate: 50, stretch: 0, depth: 100, scale: 1, modifier: 1, slideShadows: !0 } },
                    create: function () {
                        U.extend(this, { coverflowEffect: { setTranslate: ae.setTranslate.bind(this), setTransition: ae.setTransition.bind(this) } });
                    },
                    on: {
                        beforeInit: function () {
                            "coverflow" === this.params.effect &&
                                (this.classNames.push(this.params.containerModifierClass + "coverflow"),
                                this.classNames.push(this.params.containerModifierClass + "3d"),
                                (this.params.watchSlidesProgress = !0),
                                (this.originalParams.watchSlidesProgress = !0));
                        },
                        setTranslate: function () {
                            "coverflow" === this.params.effect && this.coverflowEffect.setTranslate();
                        },
                        setTransition: function (e) {
                            "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e);
                        },
                    },
                },
                {
                    name: "thumbs",
                    params: { thumbs: { swiper: null, multipleActiveThumbs: !0, autoScrollOffset: 0, slideThumbActiveClass: "swiper-slide-thumb-active", thumbsContainerClass: "swiper-container-thumbs" } },
                    create: function () {
                        U.extend(this, { thumbs: { swiper: null, init: se.init.bind(this), update: se.update.bind(this), onThumbClick: se.onThumbClick.bind(this) } });
                    },
                    on: {
                        beforeInit: function () {
                            var e = this.params.thumbs;
                            e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0));
                        },
                        slideChange: function () {
                            this.thumbs.swiper && this.thumbs.update();
                        },
                        update: function () {
                            this.thumbs.swiper && this.thumbs.update();
                        },
                        resize: function () {
                            this.thumbs.swiper && this.thumbs.update();
                        },
                        observerUpdate: function () {
                            this.thumbs.swiper && this.thumbs.update();
                        },
                        setTransition: function (e) {
                            var t = this.thumbs.swiper;
                            t && t.setTransition(e);
                        },
                        beforeDestroy: function () {
                            var e = this.thumbs.swiper;
                            e && this.thumbs.swiperCreated && e && e.destroy();
                        },
                    },
                },
            ];
        return void 0 === B.use && ((B.use = B.Class.use), (B.installModule = B.Class.installModule)), B.use(c), B;
    });
var media_xxl = 1700,
    media_xl = 1199,
    media_lg = 991,
    media_md = 767,
    media_sm = 575,
    is_opera = !!window.opera || 0 <= navigator.userAgent.indexOf(" OPR/"),
    is_Edge = -1 < navigator.userAgent.indexOf("Edge"),
    is_chrome = !!window.chrome && !is_opera && !is_Edge,
    is_explorer = "undefined" != typeof document && !!document.documentMode && !is_Edge,
    is_firefox = void 0 !== window.InstallTrigger,
    is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
!(function (e) {
    "use strict";
    e(".collapse").on("show.bs.collapse", function () {
        e(this).parent().addClass("active");
    }),
        e(".collapse").on("hidden.bs.collapse", function () {
            e(this).parent().removeClass("active");
        });
})(jQuery),
    (function (e) {
        "use strict";
        setTimeout(function () {
            e(".loading").addClass("animated slideOutRight");
        }, 1e3),
            -1 < navigator.userAgent.toLowerCase().indexOf("android") &&
                setTimeout(function () {
                    e(".loading").css("display", "none");
                }, 1e3);
    })(jQuery),
    (function (c) {
        "use strict";
        var i = 900;
        function n() {
            c('#menu-modal .menu-primary .nav-item a[href*="#"]').on("click", function (e) {
                e.preventDefault();
                var t = this.hash,
                    e = c(t).offset().top;
                void 0 === e && (e = 0),
                    c("html, body")
                        .stop()
                        .animate({ scrollTop: e }, i, function () {
                            window.location.hash = t;
                        });
            });
            var n,
                r = (e = c("#header .menu-primary .nav")).outerHeight() + 15,
                a = e.find("a"),
                s = a.map(function () {
                    var e = c(this).attr("href");
                    if (-1 != e.indexOf("#") && 0 == e.indexOf("#")) {
                        e = c(c(this).attr("href"));
                        if (e.length) return e;
                    }
                });
            a.click(function (e) {
                var t = c(this).attr("href");
                -1 != t.indexOf("#") &&
                    0 == t.indexOf("#") &&
                    ((t = "#" === t ? 0 : c(t).offset().top),
                    e.preventDefault(),
                    c("html, body").stop().animate({ scrollTop: t }, i),
                    c('#header .menu-primary .nav-item a[href*="#"]').parent().removeClass("active"),
                    c(this).parent().addClass("active"),
                    c("body").addClass("button-clicked-true"));
            }),
                window.scroll({ behavior: "smooth" }),
                c(window).scroll(function (e) {
                    var t,
                        i = c(window).width();
                    c("body").hasClass("header-fixed-true") &&
                        media_md < i &&
                        ((t = c(this).scrollTop() + r),
                        (i =
                            (i = (i = s.map(function () {
                                if (c(this).offset().top < t) return this;
                            }))[i.length - 1]) && i.length
                                ? i[0].id
                                : ""),
                        n !== i &&
                            ("" != (n = i) ? (location.hash = "#!" + i) : history.replaceState(null, null, " "),
                            c("body").hasClass("button-clicked-true") ||
                                a
                                    .parent()
                                    .removeClass("active")
                                    .end()
                                    .filter("[href='#" + i + "']")
                                    .parent()
                                    .addClass("active")));
                });
            var o,
                l,
                d,
                u,
                e =
                    ((o = function () {
                        c("body").removeClass("button-clicked-true");
                    }),
                    (l = 250),
                    function () {
                        var e = this,
                            t = arguments,
                            i = d && !u;
                        clearTimeout(u),
                            (u = setTimeout(function () {
                                (u = null), d || o.apply(e, t);
                            }, l)),
                            i && o.apply(e, t);
                    });
            c(window).on("scroll resize", e),
                c(document).ready(function () {
                    var e;
                    void 0 === window.location.href.split("#!")[1] ||
                        ((e = "#" + window.location.href.split("#!")[1]) &&
                            c("html, body")
                                .stop()
                                .animate({ scrollTop: c(e).offset().top }, i, function () {
                                    window.location.hash = e;
                                }));
                }),
                c(window).on("load", function () {
                    c("html").hasClass("elementor-adv") ||
                        setTimeout(function () {
                            var e = c(document),
                                t = c('a[href*="#"]').length ? c._data(e[0], "events") : null;
                            if (t)
                                for (var i = t.click.length - 1; 0 <= i; i--) {
                                    var n = t.click[i];
                                    n && 'a[href*="#"]' === n.selector && e.off("click", n.handler);
                                }
                        }, 300);
                });
        }
        (is_firefox || is_chrome || is_opera) && (i = 0),
            c("html").hasClass("elementor-adv") && (i = 900),
            c(function () {
                var e, t;
                c(".scroll-to-id").length &&
                    c(".scroll-to-id").click(function (e) {
                        var t;
                        "" !== this.hash ? (e.preventDefault(), (t = this.hash), void 0 === (t = c(t).offset().top) && (t = 0)) : (t = 0),
                            c("html, body")
                                .stop()
                                .animate({ scrollTop: t }, i, function () {});
                    }),
                    (t = -1),
                    c(".information-items").length && (t = 200),
                    (e = c("body.elementor-page").length ? '#main > .content > .clearfix [class*="-section-wrap"] > *:nth-child(2)' : "#main > .content > .clearfix > *:nth-child(2)"),
                    c("body").hasClass("header-fixed-true") &&
                        c("#header").length &&
                        c(e).length &&
                        c(window).scroll(function () {
                            c(window).scrollTop() - c(e).offset().top > t
                                ? (c("#header").addClass("animated slideInDown"), c(".header-fixed-true").addClass("header-fixed"))
                                : (c("#header").removeClass("animated slideInDown"), c(".header-fixed-true").removeClass("header-fixed"));
                        }),
                    n();
            });
    })(jQuery),
    (function (e) {
        "use strict";
        e(".scrollbar-light").mCustomScrollbar({ theme: "light" }), e(".scrollbar-dark").mCustomScrollbar({ theme: "dark" });
    })(jQuery),
    (function (t) {
        "use strict";
        t(".dropdown-click-effect").on("show.bs.dropdown", function () {
            t(this).find(".dropdown-menu").first().stop(!0, !0).slideToggle(300);
        }),
            t(".dropdown-click-effect").on("hide.bs.dropdown", function () {
                t(this).find(".dropdown-menu").first().stop(!0, !0).slideToggle(300);
            }),
            t(".dropdown-child-click-effect .dropdown-toggle").click(function (e) {
                e.preventDefault(), t(this).parent().toggleClass("show"), t(this).parent().find(".dropdown-menu").first().stop(!0, !0).slideToggle(300);
            }),
            t(".a-hover a, .a-hover .dropdown-toggle").on("mouseenter mouseleave", function () {
                t(this).parent().toggleClass("hover-class");
            }),
            t(".dropdown-hover, .dropdown-hover .dropdown-submenu").on("mouseenter mouseleave", function () {
                t(this).toggleClass("show"), t(this).find("> .dropdown-item:not(.active)").toggleClass("active"), t(this).find(".dropdown-menu").first().stop(!0, !0).fadeToggle(300);
            }),
            t(".dropdown-menu [data-toggle='dropdown']").on("click", function (e) {
                e.preventDefault(),
                    e.stopPropagation(),
                    t(this).addClass("active"),
                    t(this).parents(".dropdown-submenu").siblings().find(".show").removeClass("show"),
                    t(this).siblings().toggleClass("show"),
                    t(this)
                        .parents(".show")
                        .on("hidden.bs.dropdown", function (e) {
                            t(".show").removeClass("show"), t(":not(.current-dropdown-item).active").removeClass("active");
                        });
            });
    })(jQuery),
    (function (e) {
        "use strict";
        e(document).ready(function () {
            bsCustomFileInput.init();
        }),
            e('.form-label-effect [class*="form-label-effect"]').focusout(function () {
                "" != e(this).val() ? e(this).addClass("has-content") : e(this).removeClass("has-content");
            });
    })(jQuery),
    (function (t) {
        "use strict";
        t(".modal").on("show.bs.modal", function (e) {
            t(this).addClass("in");
        }),
            t(".modal").on("hidden.bs.modal", function (e) {
                t(this).removeClass("in"), t(".modal").hasClass("in show") && t("body").addClass("modal-open");
            }),
            t('.modal .menu-primary ul li a[href*="#"]').on("click", function (e) {
                e.preventDefault();
                var i = t(e.target);
                t(this)
                    .closest(".modal")
                    .on("hidden.bs.modal", function (e) {
                        var t = i.attr("href");
                        window.location.href = t;
                    }),
                    t("#menu-modal").modal("hide");
            });
    })(jQuery),
    (function () {
        "use strict";
        new Swiper(".slider .swiper-container", { navigation: { nextEl: ".adv-swiper-button-next", prevEl: ".adv-swiper-button-prev" } }),
            new Swiper(".adv-slider .adv-swiper-container", {
                noSwipingClass: "adv-swiper-no-swiping",
                containerModifierClass: "adv-swiper-container-",
                slideClass: "adv-swiper-slide",
                slideBlankClass: "adv-swiper-slide-invisible-blank",
                slideActiveClass: "adv-swiper-slide-active",
                slideDuplicateActiveClass: "adv-swiper-slide-duplicate-active",
                slideVisibleClass: "adv-swiper-slide-visible",
                slideDuplicateClass: "adv-swiper-slide-duplicate",
                slideNextClass: "adv-swiper-slide-next",
                slideDuplicateNextClass: "adv-swiper-slide-duplicate-next",
                slidePrevClass: "adv-swiper-slide-prev",
                slideDuplicatePrevClass: "adv-swiper-slide-duplicate-prev",
                wrapperClass: "adv-swiper-wrapper",
                navigation: { disabledClass: "adv-swiper-button-disabled", hiddenClass: "adv-swiper-button-hidden", lockClass: "adv-swiper-button-lock", nextEl: ".adv-2-swiper-button-next", prevEl: ".adv-2-swiper-button-prev" },
                spaceBetween: 0,
            });
    })(jQuery),
    (function () {
        "use strict";
        new Swiper(".adv-slider-reviews .adv-swiper-container", {
            noSwipingClass: "adv-swiper-no-swiping",
            containerModifierClass: "adv-swiper-container-",
            slideClass: "adv-swiper-slide",
            slideBlankClass: "adv-swiper-slide-invisible-blank",
            slideActiveClass: "adv-swiper-slide-active",
            slideDuplicateActiveClass: "adv-swiper-slide-duplicate-active",
            slideVisibleClass: "adv-swiper-slide-visible",
            slideDuplicateClass: "adv-swiper-slide-duplicate",
            slideNextClass: "adv-swiper-slide-next",
            slideDuplicateNextClass: "adv-swiper-slide-duplicate-next",
            slidePrevClass: "adv-swiper-slide-prev",
            slideDuplicatePrevClass: "adv-swiper-slide-duplicate-prev",
            wrapperClass: "adv-swiper-wrapper",
            pagination: {
                bulletClass: "adv-swiper-pagination-bullet",
                bulletActiveClass: "adv-swiper-pagination-bullet-active",
                modifierClass: "adv-swiper-pagination-",
                currentClass: "adv-swiper-pagination-current",
                totalClass: "adv-swiper-pagination-total",
                hiddenClass: "adv-swiper-pagination-hidden",
                progressbarFillClass: "adv-swiper-pagination-progressbar-fill",
                progressbarOppositeClass: "adv-swiper-pagination-progressbar-opposite",
                clickableClass: "adv-swiper-pagination-clickable",
                lockClass: "adv-swiper-pagination-lock",
                el: ".adv-swiper-pagination-2",
                clickable: !0,
            },
            speed: 600,
            parallax: !0,
        });
    })(jQuery),
    (function (t) {
        "use strict";
        t(".team-member .team-member-social > .btn").click(function (e) {
            e.preventDefault(), t(this).toggleClass("active"), t(this).closest(".team-member .team-member-social").find(".team-member-social-btn-items").fadeToggle();
        });
    })(jQuery),
    (function (e) {
        "use strict";
        e(".main-pb-0").length && e(".site-main").addClass("pb-0 footer-no-border"), e('[class*="bg-"][class*="-full-width"]').length && e("body").addClass("overflow-x");
    })(jQuery),
    (function (t) {
        "use strict";
        t("#blog #results .no-thumbnail").length &&
            (t("#blog #results").masonry({ itemSelector: "[class*=col-]", percentPosition: !0, horizontalOrder: !1, transitionDuration: 0 }),
            t(document).ajaxComplete(function () {
                var e = document.documentElement.scrollTop;
                t("#blog #results").masonry("reloadItems"), t("#blog #results").masonry("layout"), t("html").css("scroll-behavior", "unset"), window.scrollTo(0, e), t("html").css("scroll-behavior", "smooth");
            }));
    })(jQuery),
    (function (n) {
        "use strict";
        var r = n(".contact-form, #commentform, .newsletter-form"),
            i = "Something go wrong. Try again later!";
        r.on("submit", function (e) {
            e.preventDefault(),
                n.ajax({
                    url: "form.php",
                    type: "POST",
                    data: r.serialize(),
                    success: function (e) {
                        var t,
                            e = JSON.parse(e);
                        "success" == e.status && (t = "Sender's message was sent successfully"), "warning" == e.status && (t = "Fill up the form, please!"), o((t = "error" == e.status ? i : t), e.status);
                    },
                    error: function (e) {
                        o(i, "error");
                    },
                });
        });
        var a,
            s = 5e3;
        function o(e, t) {
            var i;
            n(".alert").stop().remove(), "success" == t && (i = "success"), "error" == t && (i = "danger");
            e = '<div class="animated fadeIn alert alert--shadow alert-' + (i = "warning" == t ? "warning" : i) + '">' + e + "</div>";
            n(r).append(e),
                clearTimeout(a),
                (a = setTimeout(function () {
                    n(".alert")
                        .stop()
                        .fadeOut(function () {
                            n(this).remove();
                        });
                }, s));
        }
        n(function () {
            n("body").on("click", ".alert__button", function (e) {
                e.preventDefault(),
                    n(this)
                        .parents(".alert")
                        .fadeOut("fast", function () {
                            n(this).remove(), clearTimeout(a);
                        });
            });
        });
    })(jQuery),
    (function (i) {
        "use strict";
        var e = i(".ui #aside"),
            n = i("#aside-sticky");
        i(function () {
            i(".bd-example a").click(function (e) {
                e.preventDefault();
            }),
                e.mCustomScrollbar({ theme: "dark", advanced: { updateOnContentResize: !0, updateOnSelectorChange: ".ui #aside" } }),
                n.length &&
                    i(window).scroll(function () {
                        var e, t;
                        n.length &&
                            ((e = i(window).scrollTop() - n.offset().top),
                            (t = n.width()),
                            n
                                .find(">")
                                .toggleClass("sticky-fixed-md", 0 < e)
                                .width(t));
                    });
        });
    })(jQuery);


function sendToWhatsApp() {
    const name = document.getElementById('cf-1-name').value;
    const phone = document.getElementById('cf-1-phone').value;
    const email = document.getElementById('cf-1-email').value;
    const question = document.getElementById('cf-1-question').value;

    const message = `Nama: ${name}%0A
    Telepon: ${phone}%0A
    Email: ${email}%0A
    ---------------------%0A${question}`;

    const whatsappUrl = `https://wa.me/6281122224400?text=${message}`;

    window.open(whatsappUrl, '_blank');
}

        function toggleServices(event) {
            event.preventDefault();
            const hiddenItems = document.querySelectorAll('.hidden-service');
            const button = event.target;
            
            hiddenItems.forEach(item => {
                if (item.style.display === 'none' || !item.style.display) {
                    item.style.display = 'block';
                    button.textContent = 'Tampilkan Lebih Sedikit';
                } else {
                    item.style.display = 'none';
                    button.textContent = 'Lihat Semua Layanan Gangguan Tidur';
                }
            });
        }

        function toggleCognitiveServices(event) {
            event.preventDefault();
            const hiddenItems = document.querySelectorAll('.hidden-service-cognitive');
            const button = event.target;
            
            hiddenItems.forEach(item => {
                if (item.style.display === 'none' || !item.style.display) {
                    item.style.display = 'block';
                    button.textContent = 'Tampilkan Lebih Sedikit';
                } else {
                    item.style.display = 'none';
                    button.textContent = 'Lihat Semua Layanan Kognitif';
                }
            });
        }

        function togglePainmuscularServices(event) {
            event.preventDefault();
            const hiddenItems = document.querySelectorAll('.hidden-service-painmuscular');
            const button = event.target;
            
            hiddenItems.forEach(item => {
                if (item.style.display === 'none' || !item.style.display) {
                    item.style.display = 'block';
                    button.textContent = 'Tampilkan Lebih Sedikit';
                } else {
                    item.style.display = 'none';
                    button.textContent = 'Lihat Semua Layanan Painmuscular';
                }
            });
        }

        function toggleEEGServices(event) {
            event.preventDefault();
            const hiddenItems = document.querySelectorAll('.hidden-service-eeg');
            const button = event.target;
            
            hiddenItems.forEach(item => {
                if (item.style.display === 'none' || !item.style.display) {
                    item.style.display = 'block';
                    button.textContent = 'Tampilkan Lebih Sedikit';
                } else {
                    item.style.display = 'none';
                    button.textContent = 'Lihat Semua Layanan EEG';
                }
            });
        }

        function toggleTherapyServices(event) {
            event.preventDefault();
            const hiddenItems = document.querySelectorAll('.hidden-service-therapy');
            const button = event.target;
            
            hiddenItems.forEach(item => {
                if (item.style.display === 'none' || !item.style.display) {
                    item.style.display = 'block';
                    button.textContent = 'Tampilkan Lebih Sedikit';
                } else {
                    item.style.display = 'none';
                    button.textContent = 'Lihat Semua Layanan Terapi & Skrinning';
                }
            });
        }

        function toggleSchedule(event, button) {
            event.preventDefault();
            const hiddenSchedules = button.parentElement.querySelectorAll('.hidden-schedule');
            
            hiddenSchedules.forEach(schedule => {
                if (schedule.classList.contains('d-none')) {
                    schedule.classList.remove('d-none');
                    schedule.classList.add('d-flex', 'justify-content-between', 'flex-wrap');
                    button.textContent = 'Tampilkan Lebih Sedikit';
                } else {
                    schedule.classList.remove('d-flex', 'justify-content-between', 'flex-wrap');
                    schedule.classList.add('d-none');
                    button.textContent = 'Lihat Jadwal Lengkap';
                }
            });
        }